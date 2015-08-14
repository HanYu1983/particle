(ns app.stock.viewcmd
  (:require
    [app.stock.cmd :as cmd]
    [app.stock.abstract :as abstract]))
    
(defmethod abstract/onSystem :default [type data ctx]
  (.log js/console (str "onSystem-" type))
  (.log js/console (pr-str data))
  ctx)
    
(defmethod abstract/onSystem "loadStock" [type data ctx]
  (let [[err kline id date] data]
    (if err
      (do
        (js/alert err)
        ctx)
      (assoc-in ctx [:store "stocks" id "data"] data))))
  
(defmethod abstract/onViewCommand :default [type data ctx]
  (.log js/console (str "onViewCommand-" type))
  (.log js/console data)
  ctx)

(defmethod abstract/onViewCommand "print" [type data ctx]
  (.log js/console (pr-str ctx))
  ctx)
  
(defmethod abstract/onViewCommand "stock-id" [_ stock-id ctx]
  (let [onSys (:onSys ctx)
        stock-info (get-in ctx [:store "stocks" stock-id])]
    (if stock-info
      ctx
      (do
        (cmd/loadStock onSys stock-id "2015/1/1" 10)
        ctx))))