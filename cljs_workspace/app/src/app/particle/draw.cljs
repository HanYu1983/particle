(ns app.particle.draw
  (:require
    [gl.util :as glutil]
    [gl.texture :as gltex]
    [gl.mesh :as mesh]
    [gl.shader :as shader]
    [tool.particle :as part]))
    
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
          (.fillRect (- (/ xs 2)) (- (/ ys 2)) xs ys)
          (.restore)))
      ctx)))
    
(defn draw3D [canvas gl]
  (let [canvas-dom canvas
        mesh (mesh/plain gl)
        sprite-shader (shader/spriteProgramObject gl)
        [cw ch] [(.-width canvas-dom) (.-height canvas-dom)]
        proj 
        (doto (js/THREE.Matrix4.) 
              (.makeOrthographic 0 cw ch 0 1 -1))
        tras 
        (js/THREE.Matrix4.)
        
        rotMat
        (js/THREE.Matrix4.)
        
        scaleMat
        (js/THREE.Matrix4.)
        
        texTx 
        (js/THREE.Matrix3.)
                
        colorTx 
        (js/THREE.Matrix4.)]
    
    (.viewport gl 0 0 cw ch)
    
    (fn [{[cx cy] :centerPos [br bg bb] :bgColor {ps :ps} :part :as ctx}]
      
      (.clearColor gl (or br 0) (or bg 0) (or bb 0) 1)
      (.clear gl (.-COLOR_BUFFER_BIT gl))
    
      (shader/use gl sprite-shader
        (fn [pobj] 
          (mesh/bind gl mesh :vertex (get-in pobj [:attrs :a_position]))
          (mesh/bind gl mesh :texture (get-in pobj [:attrs :a_texCoord]))
          
          (doseq [{[x y rot] :pos [xs ys] :size [r g b a] :color tex :tex blending :blending :as p} ps]
            (let [texObj (get-in ctx [:textures tex])]
              (doto rotMat
                    (.makeRotationZ rot))
              
              (doto scaleMat
                    (.makeScale xs ys 1))
              
              (doto tras
                    (.makeTranslation (+ cx x) (+ cy y) 0)
                    (.multiply rotMat)
                    (.multiply scaleMat))
                    
              (doto colorTx
                    (.makeTranslation r g b))
                    
              ; 套用shader
              (apply
                (partial shader/uniform gl pobj)
                (cond->>
                  (list
                    [:u_projection "m4fv" (.-elements proj)]
                    [:u_transform "m4fv" (.-elements tras)]
                    [:u_texTransform "m3fv" (.-elements texTx)]
                    [:u_colorTransform "m4fv" (.-elements colorTx)]
                    [:u_alpha "1f" a])
                  texObj
                  (cons [:u_tex "s2d" [texObj 0]])))
              
              ; 沒有指定材質的話就解除綁定
              (when-not texObj
                (.bindTexture gl (.-TEXTURE_2D gl) nil))
                    
              ; 指定融合模式
              (when blending
                (condp = blending
                  "normal"
                  (do
                    (.enable gl (.-BLEND gl))
                    (.blendFunc gl (.-SRC_ALPHA gl) (.-ONE_MINUS_SRC_ALPHA gl)))
                    
                  "add"
                  (do
                    (.enable gl (.-BLEND gl))
                    (.blendFunc gl (.-ONE gl) (.-ONE gl)))
                  (.disable gl (.-BLEND gl))))
                      
              (mesh/draw gl mesh nil)))))
              
      
      ctx)))
      
(defn drawThree [elem]
  (let [useWebgl? true
        [w h] [400 400]
        scene (js/THREE.Scene.)
        camera (js/THREE.OrthographicCamera (/ w -2) (/ w 2) (/ h 2) (/ h -2) -500 1000)
        renderer
        (if useWebgl?
          (js/THREE.WebGLRenderer. (js-obj "antialias" true))
          (js/THREE.CanvasRenderer. (js-obj "antialias" true)))
        objs (atom {})
        dirtyTag (atom {})
        createObject
        (fn [scene id part]
          (let [obj (get @objs id)]
            (if-not obj
              (let [mat 
                    (doto
                      (js/THREE.MeshBasicMaterial.)
                      (aset "transparent" true))
                    mash
                    (js/THREE.Mesh (js/THREE.PlaneBufferGeometry. 1 1) mat)]
                (swap! objs assoc id obj)
                (.add scene obj))
              obj)))
        removeObject
        (fn [id]
          (if-let [obj (get @objs id)]
            (.remove scene obj)))
        markDirty
        (fn [id]
          (swap! dirtyTag assoc id false))
          
        clearDirtyTag
        (fn [f])]
          
    (.set (.-position camera) 0 0 200)
    (.setSize renderer w h)
    (.setClearColor renderer 0 1)
    (.appendTo (js/$ (.-domElement renderer)) elem)
    
  (fn [{[cx cy] :centerPos [br bg bb] :bgColor {ps :ps} :part :as ctx}])))