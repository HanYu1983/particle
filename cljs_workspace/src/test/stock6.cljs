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
    (let [[err infos] (<! (stl/stock-info nil 2412 "2015/1/1" 0 200))
          canvas4 (.getElementById js/document "index2")
          canvas3 (.getElementById js/document "index")
          canvas2 (.getElementById js/document "clock")
          canvas (.getElementById js/document "kline")
          ctx (.getContext canvas "2d")
          [w h] [(.-width canvas) (.-height canvas)]
          {cs :sma z :z v-z :v-z} (stf/clock 12 (reverse infos))
          dirs (stf/clock-direction v-z z)
          bbi (stf/BBI 6 infos)
          sar (reverse (stf/sar-seq (reverse infos)))
          acc (reverse (stf/Chaikin 3 9 (reverse infos)))
          eom (reverse (stf/EOM 14 (reverse infos)))
          gv (stf/yu-gv 20 infos)]
          
          ;(.log js/console (pr-str gv))
          
      (std/draw
        {
          :drawers [
            {:type :line :line (stl/volume infos) :color "blue"}
            {:type :line :line (stf/sma-seq 6 (stl/volume infos)) :color "yellow"}
            ;{:type :line :line (repeat (count gv) 0)}
            ;{:type :line :line (repeat (count gv) 2)}
            ;{:type :line :line (repeat (count gv) -2)}
          ]
        }
        (.-width canvas4) (.-height canvas4)
        (.getContext canvas4 "2d"))
        
      (std/draw
        {
          :drawers [
            ;{:type :line :line (into (repeat 19 0) (reverse gv)) :color "red"}
            ;{:type :line :line (repeat (count gv) 0)}
            ;{:type :line :line (repeat (count gv) 2)}
            ;{:type :line :line (repeat (count gv) -2)}
            {:type :line :line acc}
            {:type :line :line (repeat (count acc) 0)}
          ]
        }
        (.-width canvas3) (.-height canvas3)
        (.getContext canvas3 "2d"))
        
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
            {:type :kline :kline infos}
            ;{:type :line :line (reverse cs) :color "blue"}
            {:type :line :line (reverse (stf/ema-seq 12 (reverse (stl/close infos)))) :color "blue"}
            {:type :line :line (reverse (stf/ema-seq 26 (reverse (stl/close infos)))) :color "yellow"}
            ;{:type :line :line (stf/sma-seq 5 (stl/close infos)) :color "purple"}
            ;{:type :line :line (stf/sma-seq 10 (stl/close infos)) :color "black"}
            ;{:type :line :line sar :color "red"}
            ;{:type :line :line bbi :color "blue"}
          ]
        }
        w h
        ctx))))
      

(main)