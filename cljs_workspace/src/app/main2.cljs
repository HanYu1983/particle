(ns app.main2
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! alts! chan timeout]]
    [gl.util :as glutil]
    [gl.texture :as gltex]
    [gl.mesh :as mesh]
    [gl.shader :as shader]
    [app.particle :as part]))
    
(def cacheTex (memoize gltex/texture))
    
(defn draw2D [canvas]
  (let [canvas-dom (aget canvas 0)
        canvas-ctx (.getContext canvas-dom "2d")]
    (fn [{{ps :ps} :part :as ctx}]
      (doto canvas-ctx
        (aset "fillStyle" "white")
        (.fillRect 0 0 (.-width canvas-dom) (.-height canvas-dom))
        (aset "fillStyle" "red")
        (.fillText (str "count:" (count ps)) 50 50))
      
      (doseq [{[x y rot] :pos [xs ys] :size [r g b a] :color :as p} ps]
        (doto canvas-ctx
          (.save)
          (.translate x y)
          (.rotate rot)
          (aset "fillStyle" 
            (str "rgba(" 
              (int (* r 255)) ","
              (int (* g 255)) ","
              (int (* b 255)) ","
              a ")"))
          (.fillRect 0 0 (- (/ xs 2)) (- (/ ys 2)))
          (.restore)))
      ctx)))
    
(defn draw3D [canvas]
  (let [canvas-dom (aget canvas 0)
        gl (glutil/getContext canvas-dom (js-obj))
        mesh (mesh/plain gl)
        sprite-shader (shader/spriteProgramObject gl)
        [cw ch] [(.-width canvas-dom) (.-height canvas-dom)]]
    (fn [{timer :timer {ps :ps} :part :as ctx}]
      (.viewport gl 0 0 cw ch)
      (.clearColor gl 0 0 0 1)
      (.clear gl (.-COLOR_BUFFER_BIT gl))
    
      (.enable gl (.-BLEND gl))
      (.blendFunc gl (.-ONE gl) (.-ONE gl))
    
      (when-some [faceImg (get-in ctx [:image :face])]
        (let [tex (cacheTex gl faceImg)]
          (shader/use gl sprite-shader
            (fn [pobj] 
              (doseq [{[x y rot] :pos [xs ys] :size [r g b a] :color :as p} ps]
                (let [proj 
                      (doto (js/THREE.Matrix4.) 
                            (.makeOrthographic 0 cw ch 0 1 -1))
                    
                      tras 
                      (doto (js/THREE.Matrix4.)
                            (.makeTranslation x y 0)
                            (.multiply (-> (js/THREE.Matrix4.) (.makeRotationZ rot)))
                            (.multiply (-> (js/THREE.Matrix4.) (.makeScale xs ys 1))))
                    
                      texTx 
                      (doto (js/THREE.Matrix3.))
                    
                      colorTx 
                      (doto (js/THREE.Matrix4.) 
                            (.makeTranslation r g b))]
                  (mesh/bind gl mesh :vertex (get-in pobj [:attrs :a_position]))
                  (mesh/bind gl mesh :texture (get-in pobj [:attrs :a_texCoord]))
                  (shader/uniform gl pobj
                    [:u_projection "m4fv" (.-elements proj)]
                    [:u_transform "m4fv" (.-elements tras)]
                    [:u_tex "s2d" [tex 0]]
                    [:u_texTransform "m3fv" (.-elements texTx)]
                    [:u_colorTransform "m4fv" (.-elements colorTx)])
                  (mesh/draw gl mesh nil)))))))
              
      (.disable gl (.-BLEND gl))
      ctx)))

(def draw2D (draw2D (js/$ "#webgl")))
;(def draw3D (draw3D (js/$ "#webgl")))
    
(defn createParticle [jsobj]
  (let [obj 
        (into {}
          (map
            (fn [[k v]]
              [(keyword k) v])
            (js->clj jsobj)))
            
        emit
        (if (:emit obj)
          (update-in obj [:emit]
            (fn [ori]
              (->
                (into {}
                  (map
                    (fn [[k v]]
                      [(keyword k) v])
                    ori))
                (update-in
                  [:prototype]
                  (fn [ps] (mapv createParticle ps))))))
          obj)]
    (part/create emit)))

(defn main []
  (let [onView (chan)
        onModel (chan)
        onTick (chan)
        mspf 33]
    
    ; 接收view的事件
    (.subscribe js/common.onView
      (fn [data]
        (go (>! onView data))))
    
    ; 發送model事件
    (go-loop []
      (let [data (<! onModel)]
        (.onNext js/common.onModel data)
        (recur)))
        
    ; update event
    (go-loop [mspf mspf
              last-time (.getTime (js/Date.))]
      (<! (timeout mspf))
      (let [curr-time (.getTime (js/Date.))
            elapsed (/ (- curr-time last-time) 1000)]
        (>! onTick elapsed)
        (recur mspf curr-time)))
        
    (go
      (<! (timeout 1000))
      (>! onView (array "edit-particle" (js-obj "id" "x1" "pos" (array 300 300 0))))
      (<! (timeout 1100))
      (>! onView 
        (array "edit-particle" 
          (js-obj 
            "id" "x1"
            "emit" 
            (js-obj
              "duration" 1
              "angle" 0
              "force" 100
              "range" 6.28
              "prototype"
              (array
                (js-obj
                  "position" (array 0 0 0)
                  "size" (array 10 20)
                  "vel" (array 100 0 3.14))))
            "size" (array 30 10)
            "pos" (array 300 300 0) 
            "vel" (array 100 100 0)))))
      
    ; main-loop
    (go-loop 
      [
        ctx
        {
          :timer 0
          :part {:ps '()}
        } 
      ]
      (let [[v ch] (alts! [onView onTick])]
        ;(.log js/console (pr-str ctx))
        (recur
          (condp = ch
            onTick
            (-> ctx
              (update-in [:part] (partial part/update v))
              (draw2D))
            
            onView
            (let [event (aget v 0)
                  params (aget v 1)]
              (condp = event
                "edit-particle"
                (let [partInfo params
                      target (first (filter #(= (:id %) (.-id partInfo)) (get-in ctx [:part :ps])))
                      newpart (createParticle partInfo)]
                  (if (some? target)
                    (-> ctx
                      (update-in
                        [:part :ps]
                        (partial 
                          replace
                          {target 
                            (merge 
                              newpart
                              ; preserve attributes
                              {:timer (:timer target)
                               :emit-times (:emit-times target)})})))
                          
                    (-> ctx
                      (update-in
                        [:part :ps]
                        conj newpart))))
                :else
                ctx))
                
            :else
            ctx))))
            
  
    (comment "end let")))
  
  
(main)