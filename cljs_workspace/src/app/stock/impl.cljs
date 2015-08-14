(ns app.stock.impl
  (:require
    [stock.tool :as stl]
    [stock.drawer :as std]
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
      (assoc-in ctx [:store "stocks" id "data"] kline))))

; view command

(defmethod abstract/onViewCommand :default [type data ctx]
  (.log js/console (str "onViewCommand-" type))
  (.log js/console data)
  ctx)

(defmethod abstract/onViewCommand "print" [_ data ctx]
  (.log js/console (pr-str ctx))
  ctx)
  
(defmethod abstract/onViewCommand "draw" [_ data ctx]
  (let [stockId (aget data "id")
        type (aget data "type")
        canvas (aget data "canvas")
        {kline "data" :as stock} (get-in ctx [:store "stocks" stockId])]
    (when kline
      (std/draw
        {
          :drawers [
            (condp = type
              "volume" {:type :line :line (stl/volume kline)}
              {:type :kline :kline kline})
          ]
        }
        (.-width canvas) (.-height canvas)
        (.getContext canvas "2d")))
    (.log js/console kline))
  ctx)
  
(defmethod abstract/onViewCommand "stock-id" [_ data ctx]
  (let [onSys (:onSys ctx)
        stock-id (aget data "id")
        date (aget data "date")
        stock-info (get-in ctx [:store "stocks" stock-id])]
    (if stock-info
      ctx
      (do
        (cmd/loadStock onSys stock-id date)
        ctx))))