(ns app.stock.impl
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]
    [stock.formula :as stf]
    [stock.tool :as stl]
    [stock.drawer :as std]
    [app.stock.cmd :as cmd]
    [app.stock.abstract :as abstract]))
    
(defmethod abstract/onSystem :default [type data ctx]
  (.log js/console (str "onSystem-" type))
  (.log js/console (pr-str data))
  ctx)
    
(defmethod abstract/onSystem "loadStock" [type data ctx]
  (let [[err kline id date request] data]
    (am/go
      (a/>! (:onModel ctx) (array type (js-obj "id" id "request" request))))
      
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
        sub (js->clj (aget data "sub"))
        {kline "data" :as stock} (get-in ctx [:store "stocks" stockId])]
    (when kline
      (std/draw
        {
          :drawers
          (cons
            (condp = type
              "volume" 
              {:type :line :line (stl/volume kline)}
              
              "clock"
              (let [{cs :sma z :z v-z :v-z} (stf/clock 10 kline)]
                {:type :clock :cz z :vz v-z})
              
              {:type :kline :kline kline})
            (map
              (fn [data]
                (let [subt (get data "t")
                      subd (get data "d")
                      vs
                      (condp = type
                        "volume" (stl/volume kline)
                        (stl/close kline))]
                  (condp = subt
                    "ma"
                    (let [n (get subd "n")
                          color (get subd "color")]
                      {:type :line :line (stf/sma-seq n vs) :color color})
                    
                    {:type :line :line (stf/sma-seq 5 vs) :color "purple"})))
              sub))
        }
        (.-width canvas) (.-height canvas)
        (.getContext canvas "2d")))
    (comment "ent let"))
  ctx)
  
(defmethod abstract/onViewCommand "stockId" [_ data ctx]
  (let [onSys (:onSys ctx)
        stock-id (aget data "id")
        date (aget data "date")
        stock-info (get-in ctx [:store "stocks" stock-id])]
    (if stock-info
      ctx
      (do
        (cmd/loadStock onSys stock-id date data)
        ctx))))