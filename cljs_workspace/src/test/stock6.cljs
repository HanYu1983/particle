(ns test.stock6
  (:require
    [stock.tool :as stl]
    [stock.drawer :as std]
    [stock.formula :as stf]
    [cljs.core.async])
  (:require-macros
    [cljs.core.async.macros :as am]))

(defn main []
  (am/go
    (let [[err infos] (<! (stl/stock-info nil 2330 "2015/1/1" 0 200))
          canvas2 (.getElementById js/document "clock")
          canvas (.getElementById js/document "kline")
          ctx (.getContext canvas "2d")
          [w h] [(.-width canvas) (.-height canvas)]
          {cs :sma z :z v-z :v-z} (stf/clock 12 (reverse infos))
          dirs (stf/clock-direction v-z z)
          bbi (stf/BBI 6 infos)]
          
          (.log js/console (pr-str dirs))
          
      (std/draw
        {
          :drawers [
            {:type :clock :cz z :vz v-z}
          ]
        }
        (.-width canvas2) (.-height canvas2)
        (.getContext canvas2 "2d"))
      
      (std/draw 
        {
          :drawers [
            {:type :kline :kline infos :info (reverse dirs)}
            {:type :line :line cs :color "blue"}
            ;{:type :line :line (stf/avg-seq 60 (stl/close infos)) :color "yellow"}
            ;{:type :line :line bbi :color "blue"}
          ]
        }
        w h
        ctx))))
      

(main)