(ns app.particle.impl
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]
    [tool.particle :as part]
    [app.particle.abstract :as abstract]))
    
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
  (assoc-in ctx [:centerPos] (js->clj data)))

(defmethod abstract/onViewCommand "info" [_ data {onModel :onModel :as ctx}]
  (am/go
    (a/>! onModel [nil (js-obj "count" (count (get-in ctx [:part :ps]))) data]))
  ctx)