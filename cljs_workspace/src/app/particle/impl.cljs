(ns app.particle.impl
  (:require
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

