(ns app.main
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [clojure.data :as da]
    [clojure.walk :as w]
    [cljs.core.async :as async :refer [chan <! >! alts!]]
    [gl.util :as glutil]
    [gl.texture :as gltex]
    [gl.mesh :as mesh]
    [gl.shader :as shader]
    [app.react :as rx]
    [app.particle :as part]))
      
  
(def cacheTex (memoize gltex/texture))
      
(defn draw [canvas {ps :ps :as ctx}]
  (let [canvas-dom (aget canvas 0)
        canvas-ctx (.getContext canvas-dom "2d")]
    (doto canvas-ctx
      (aset "fillStyle" "white")
      (.fillRect 0 0 (.-width canvas-dom) (.-height canvas-dom))
      (aset "fillStyle" "red")
      (.fillText (str "count:" (count ps)) 50 50))
      
    (doseq [{[x y r] :pos [xs ys] :size [r g b a] :color :as p} ps]
      (doto canvas-ctx
        (aset "fillStyle" 
          (str "rgba(" 
            (int (* r 255)) ","
            (int (* g 255)) ","
            (int (* b 255)) ","
            a ")"))
        (.fillRect x y xs ys))))
  ctx)
  
  
(defn draw3D [canvas]
  (let [canvas-dom (aget canvas 0)
        gl (glutil/getContext canvas-dom (js-obj))
        mesh (mesh/plain gl)
        spec-shader
        (shader/programObject
          gl
          [:position]
          [:resolution :time]
          (glutil/domContent "vertexShader")
          (glutil/domContent "fragmentShader5"))
        sprite-shader (shader/spriteProgramObject gl)
        [cw ch] [(.-width canvas-dom) (.-height canvas-dom)]]
    (fn [{timer :timer ps :ps :as ctx}]
      (.viewport gl 0 0 cw ch)
      (.clearColor gl 0 0 0 1)
      (.clear gl (.-COLOR_BUFFER_BIT gl))
    
      (shader/use gl spec-shader
        (fn [pobj]
          (mesh/bind gl mesh :vertex (get-in pobj [:attrs :position]))
          (shader/uniform gl pobj
            [:resolution "2f" (array cw ch)]
            [:time "1f" timer])
          (mesh/draw gl mesh nil)))
        
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

(def draw3D (draw3D (js/$ "#canvas2")))

(defn main []
  (go-loop [ctx {:timer 0
                 :ps (list (part/create 
                      {
                        :lifetime -1
                        :pos [250 250 0] 
                        :vel [0 0 0] 
                        :size [0 0]
                        :emit 
                        {
                          :count 1 
                          :duration 0.1 
                          :angle -1.57 
                          :range 1.57 
                          :force 50
                          :prototype 
                          [
                            {
                              :lifetime 2
                              :emit
                              {
                                :count 1
                                :duration 0.1
                                :prototype 
                                [
                                  {
                                    :lifetime 1
                                    :emit 
                                    {
                                      :count 1
                                      :duration 0.9
                                      :force 1000
                                      :prototype
                                      [
                                        {
                                          :lifetime 0.5
                                        }
                                      ]
                                    }
                                    :formulaList
                                    [
                                      [
                                        [:vel 1] 
                                        (fn [life v]
                                          (* -60 (- 1 life)))
                                      ]
                                    ]
                                  }
                                ]
                              }
                              :formulaList
                              [
                                [
                                  [:pos 0]
                                  (fn [life v]
                                    (if (= life 0)
                                      (+ v (- (rand-int 50) 25))
                                      v))
                                ]
                                [
                                  [:pos 1]
                                  (fn [life v]
                                    (if (= life 0)
                                      (+ v (- (rand-int 50) 25))
                                      v))
                                ]
                                [
                                  [:vel 0] 
                                  (fn [life v]
                                    v)
                                ]
                                [
                                  [:vel 1] 
                                  (fn [life v]
                                    (if (> life 0.5)
                                      (+ v 10)
                                      v))
                                ]
                                [
                                  [:vel 2] 
                                  (fn [life v]
                                    (if (= life 0)
                                      (- (rand 6.28) 3.14)
                                      v))
                                ]
                                [
                                  [:vel 0] 
                                  (fn [life v]
                                    (+ v (rand 1)))
                                ]
                                [
                                  [:vel 1] 
                                  (fn [life v]
                                    (if (> life 0.8)
                                      (/ v 1.2)
                                      v))
                                ]
                                [
                                  [:size 0]
                                  (fn [life v]
                                    (if (< life 0.5)
                                      (* life 100)
                                      (* (- 1 life) 100)))
                                ]
                                [
                                  [:lifetime]
                                  (fn [life v]
                                    (if (= life 0)
                                      (+ v (rand-int v))
                                      v))
                                ]
                                [
                                  [:color 3]
                                  (fn [life v]
                                    (if (< life 0.5)
                                      life
                                      (- 1 life)))
                                ]
                                [
                                  [:color 2]
                                  (fn [life v]
                                    (if (< life 0.5)
                                      life
                                      (- 1 life)))
                                ]
                                [
                                  [:color 1]
                                  (fn [life v]
                                    life)
                                ]
                              ]
                            }
                          ]
                        } 
                      }
                      ))
                }
            ]
    (let [[v ch] (alts! [rx/onTick rx/onImage])]
      (recur
        (condp = ch
          rx/onTick
          (-> ctx
            (->>
              (part/update v)
              (draw (js/$ "#canvas"))
              (draw3D)
              )
            (update-in [:timer] + v))
            
          rx/onImage
          (let [[n img] v]
            (assoc-in ctx [:image n] img))
          
          ctx))))
        
  (let [face (js/Image.)]
    (set! (.-src face) "res/imgs/m(01-32)_gr.jpg")
    (set! (.-onload face) #(go (>! rx/onImage [:face face]))))
  
  (js/setInterval 
    (apply
      (fn [curr-time]
        (let [last-time (atom curr-time)]
          (fn []
            (let [curr-time (.getTime (js/Date.))
                  elapsed (- curr-time @last-time)]
              (go (>! rx/onTick (/ elapsed 1000)))
              (reset! last-time curr-time)))))
      [(.getTime (js/Date.))]) 
    33)
  (comment "end main"))

(main)
