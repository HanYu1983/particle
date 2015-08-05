(ns test.stock6
  (:require
    [stock.tool :as stl]
    [stock.drawer :as std]
    [stock.formula :as stf]
    [cljs.core.async])
  (:require-macros
    [cljs.core.async.macros :as am]))

(defn draw [canvas]
  (let [ctx (.getContext canvas "2d")
        [w h] [(.-width canvas) (.-height canvas)]
        proj-x 
        (fn [v]
          (-> v
            (* (/ w 4))
            (+ (/ w 2))
            ))
        proj-y
        (fn [v]
          (-> v
            (* (/ h 4) -1)
            (+ (/ h 2))
            ))]
    (fn [cz vz]
      (.log js/console (pr-str cz))
      (.log js/console (pr-str vz))
      
      (aset ctx "fillStyle" "gray")
      (.fillRect ctx 0 0 w h)
      
      (aset ctx "strokeStyle" "red")
      (doseq
        [
          [pc cc pv cv]
          (map
            (fn [& args] args)
            cz
            (rest cz)
            vz
            (rest vz))
        ]
        
        (.beginPath ctx)
        (.moveTo ctx (proj-x pv) (proj-y pc))
        (.lineTo ctx (proj-x cv) (proj-y cc))
        (.stroke ctx)
        (comment "end doseq")))))

(defn main []
  (am/go
    (let [[err infos] (<! (stl/stock-info nil 2330 "2015/1/1" 0 200))
          cs (stf/avg-seq 10 (stl/close infos))
          avg (stf/average cs)
          sd (stf/StandardDeviation avg cs)
          z (stf/z-score avg sd cs)
          
          vs (stf/avg-seq 10 (stl/volume infos))
          v-avg (stf/average vs)
          v-sd (stf/StandardDeviation v-avg vs)
          v-z (stf/z-score v-avg v-sd vs)
          
          draw (draw (.getElementById js/document "canvas"))]
          ;(.log js/console (pr-str cs))
      (draw z v-z)
      ;(draw z (map #(* % 0.01) (range 300)))
      ;(draw z (map #(* % 0.01) (range 300)))
      ;(.log js/console (pr-str cs))
      ;(.log js/console avg)
      ;(.log js/console sd)
      ;(.log js/console (pr-str z))
      (comment "end let"))))
      
    
(defn main2 []
  (am/go
    (let [[err infos] (<! (stl/stock-info nil 2330 "2015/1/1" 0 200))
          canvas (.getElementById js/document "canvas2")
          [w h] [(.-width canvas) (.-height canvas)]
          ctx (.getContext canvas "2d")]
      (std/draw 
        {
          :drawers [
            {:type :kline :kline infos}
          ]
        }
        w h
        ctx))))
      

(main)