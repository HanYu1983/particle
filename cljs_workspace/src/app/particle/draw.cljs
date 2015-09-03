(ns app.particle.draw
  (:require
    [gl.util :as glutil]
    [gl.texture :as gltex]
    [gl.mesh :as mesh]
    [gl.shader :as shader]
    [tool.particle :as part]))
    
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
          (.fillRect (- (/ xs 2)) (- (/ ys 2)) xs ys)
          (.restore)))
      ctx)))
    
(defn draw3D [canvas]
  (let [canvas-dom (aget canvas 0)
        gl (glutil/getContext canvas-dom (js-obj))
        mesh (mesh/plain gl)
        sprite-shader (shader/spriteProgramObject gl)
        [cw ch] [(.-width canvas-dom) (.-height canvas-dom)]]
        
    (fn [{[cx cy] :centerPos timer :timer {ps :ps} :part :as ctx}]
      (.viewport gl 0 0 cw ch)
      (.clearColor gl 0 0 0 1)
      (.clear gl (.-COLOR_BUFFER_BIT gl))
    
      (.enable gl (.-BLEND gl))
      (.blendFunc gl (.-SRC_ALPHA gl) (.-ONE gl))
    
      (shader/use gl sprite-shader
        (fn [pobj] 
          (doseq [{[x y rot] :pos [xs ys] :size [r g b a] :color :as p} ps]
            (let [proj 
                  (doto (js/THREE.Matrix4.) 
                        (.makeOrthographic 0 cw ch 0 1 -1))
                
                  tras 
                  (doto (js/THREE.Matrix4.)
                        (.makeTranslation (+ cx x) (+ cy y) 0)
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
                ;[:u_tex "s2d" [tex 0]]
                [:u_texTransform "m3fv" (.-elements texTx)]
                [:u_colorTransform "m4fv" (.-elements colorTx)])
              (mesh/draw gl mesh nil)))))
              
      (.disable gl (.-BLEND gl))
      ctx)))