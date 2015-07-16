(ns test.webgl-tex
  (:require
    [cljs.core.async :as async :refer [chan <! >! alts! chan close! timeout]]
    [gl.util :as glutil]
    [gl.texture :as gltex]
    [gl.mesh :as mesh]
    [gl.shader :as shader])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]]))
    

(defn loadImage [url]
  (let [onload (chan)
        img (js/Image.)]
    (doto img
      (aset "src" url)
      (aset "onload"
        (fn [] 
          (go
            (>! onload img)
            (close! onload)))))
    onload))
    
(defn test-tex
  "畫一張貼圖, 使用spriteProgramObject矯正成2D座標"
  []
  (go
    (let [img (<! (loadImage "res/images/1440-01.jpg"))
          canvas (.getElementById js/document "webgl")
          gl (glutil/getContext canvas nil)
          tex (gltex/texture gl img)
          mesh (mesh/plain-2d gl)
          sprite-shader (shader/spriteProgramObject gl)
          [cw ch] [(.-width canvas) (.-height canvas)]]
      (.viewport gl 0 0 cw ch)
      (.clearColor gl 0 0 0 1)
      (.clear gl (.-COLOR_BUFFER_BIT gl))
    
      (shader/use gl sprite-shader
        (fn [pobj] 
          (let [x 0 y 0 rot 0 
                xs 300 ys 300 
                r 0 g 0 b 0
                proj 
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
              
            (mesh/draw gl mesh nil)
            (comment "end let")))))))


(defn test-wave
  "水紋效果，沒有矯正座標系，可以看到材質貼圖為上下相反的"
  []
  (go
    (let [img (<! (loadImage "res/images/1440-01.jpg"))
          canvas (.getElementById js/document "webgl2")
          gl (glutil/getContext canvas nil)
          tex (gltex/texture gl img)
          mesh (mesh/plain gl)
          wave-shader (shader/waveProgramObject gl)
          [cw ch] [(.-width canvas) (.-height canvas)]]
      
      (go-loop [phase 0]
        (.viewport gl 0 0 cw ch)
        (.clearColor gl 0 0 0 1)
        (.clear gl (.-COLOR_BUFFER_BIT gl))
    
        (shader/use gl wave-shader
          (fn [pobj]
            (mesh/bind gl mesh :vertex (get-in pobj [:attrs :position]))
            (mesh/bind gl mesh :texture (get-in pobj [:attrs :inputTextureCoordinate]))
            (shader/uniform gl pobj
              [:mouse "2f" (array 0.5 0.5)]
              [:inputImageTexture "s2d" [tex 0]]
              [:normalizedPhase "1f" phase])
            (mesh/draw gl mesh nil)))
            
        (<! (timeout 33))
        (recur (+ phase 0.03)))
        
      (comment "end let"))))
          

(defn test-online-shader
  []
  (go
    (let [canvas (.getElementById js/document "webgl3")
          gl (glutil/getContext canvas nil)
          mesh (mesh/plain gl)
          spec-shader
          (shader/programObject
            gl
            [:position]
            [:resolution :time]
            (glutil/domContent "vertexShader")
            (glutil/domContent "fragmentShader"))
          [cw ch] [(.-width canvas) (.-height canvas)]]
      
      (go-loop [timer 0]
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
            
        (<! (timeout 33))
        (recur (+ timer 0.03)))
        
      (comment "end let"))))
      
(test-tex)
(test-wave)
(test-online-shader)
