(ns app.stock.viewcmd
  (:require
    [app.stock.abstract :as abstract]))
    
(defmethod abstract/onViewCommand :default [type data ctx]
  (.log js/console (str "command-" type))
  (.log js/console data)
  ctx)

(defmethod abstract/onViewCommand "draw" [_ data ctx]
  (.log js/console "draw-it")
  ctx)