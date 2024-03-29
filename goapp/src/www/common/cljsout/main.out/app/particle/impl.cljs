(ns app.particle.impl
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]
    [gl.util :as glutil]
    [gl.texture :as gltex]
    [tool.particle :as part]
    [app.particle.draw :as d]
    [app.particle.abstract :as abstract]))
    
(defmethod abstract/onViewCommand "init" [_ data ctx]
  (let [canvas data
        gl (glutil/getContext canvas (js-obj))
        draw (d/draw3D canvas gl)]
    (-> ctx
      (assoc :gl gl)
      (assoc :draw draw))))
    
(defmethod abstract/onViewCommand "edit-particle" [_ data ctx]
  (let [partInfo data
        target 
        (first 
          (filter 
            #(= (:id %) (.-id partInfo)) 
            (get-in ctx [:part :ps])))
        newpart (part/jsobj->particle partInfo)]
    (if target
      (-> ctx
        (update-in
          [:part :ps]
          (partial 
            replace
            {
              target 
              (merge 
                newpart
                ; preserve attributes
                {
                  :timer (:timer target)
                  :emit-times (:emit-times target)
                })
            })))
      (-> ctx
        (update-in [:part :ps] conj newpart)))))
      
(defmethod abstract/onViewCommand "edit-centerPos" [_ data ctx]
  (let [id (aget data 0)
        x (aget data 1)
        y (aget data 2)
        target
        (first
          (filter
            #(= (:id %) id)
            (get-in ctx [:part :ps])))]
    (if target
      (-> ctx
        (update-in
          [:part :ps]
          (partial
            replace
            {
              target
              (merge
                target
                {
                  :pos [x y (get-in target [:pos 2])]
                  :timer (:timer target)
                  :emit-times (:emit-times target)
                })
            })))
      ctx)))

(defmethod abstract/onViewCommand "info" [_ data {onModel :onModel :as ctx}]
  (am/go
    (a/>! onModel 
      [
        nil 
        (js-obj 
          "count" (count (get-in ctx [:part :ps]))
          "bgColor" (apply array (get-in ctx [:bgColor])))
        data
      ]))
  ctx)

(def cacheTex (memoize gltex/texture))

(defmethod abstract/onViewCommand "add texture" [_ data {gl :gl :as ctx}]
  (let [id (aget data 0)
        img (aget data 1)
        texObj (cacheTex gl img)]
        ; 不unbind的話會自動bind到shader中的第一個材質通道
    (.bindTexture gl (.-TEXTURE_2D gl) nil)
    (assoc-in ctx [:textures id] texObj)))
    
(defmethod abstract/onViewCommand "edit-limit" [_ data ctx]
  (let [n data]
    (assoc-in ctx [:part :limit] n)))
    
(defmethod abstract/onViewCommand "edit-bgColor" [_ data ctx]
  (let [r (aget data 0)
        g (aget data 1)
        b (aget data 2)]
    (assoc-in ctx [:bgColor] [r g b])))
    
(defmethod abstract/onViewCommand "clear particle" [_ data ctx]
  (assoc-in ctx [:part :ps] '()))