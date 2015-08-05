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
          canvas (.getElementById js/document "canvas2")
          [w h] [(.-width canvas) (.-height canvas)]
          ctx (.getContext canvas "2d")
          
          cs (stf/avg-seq 12 (stl/close infos))
          avg (stf/average cs)
          sd (stf/StandardDeviation avg cs)
          z (stf/z-score avg sd cs)
          
          vs (stf/avg-seq 12 (stl/volume infos))
          v-avg (stf/average vs)
          v-sd (stf/StandardDeviation v-avg vs)
          v-z (stf/z-score v-avg v-sd vs)]
      (std/draw 
        {
          :drawers [
            {:type :kline :kline infos}
            ;{:type :clock :cz z :vz v-z}
            {:type :line :line cs :color "blue"}
            {:type :line :line (stf/avg-seq 60 (stl/close infos)) :color "yellow"}
          ]
        }
        w h
        ctx))))
      

(main)