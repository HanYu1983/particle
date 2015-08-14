(ns stock.drawer
  (:require
    [stock.tool :as stl]))


(defmulti max-v (fn [{t :type}] t))
(defmulti min-v (fn [{t :type}] t))
(defmulti length (fn [{t :type}] t))
(defmulti draw-it (fn [{t :type} base ctx] t))

(defn graphic-base [w h drawers]
  (let [max-v (apply max (map max-v drawers))
        min-v (apply min (map min-v drawers))
        len-v (apply max (map length drawers))
        offset-v (- max-v min-v)
        offset-x (/ w (inc len-v))
        pos-y
        (fn [v]
          (* h (- 1 (/ (- v min-v) offset-v))))]
    [w h max-v min-v offset-v offset-x pos-y]))
    
(defn draw [{drawers :drawers :as info} w h ctx]
  (let [base (graphic-base w h drawers)]
    (aset ctx "fillStyle" "lightgray")
    (.fillRect ctx 0 0 w h)
    (doseq [drawer drawers]
      (.save ctx)
      (draw-it drawer base ctx)
      (.restore ctx))))
      
(defmethod max-v :default [info] 0)
(defmethod min-v :default [info] 0)
(defmethod length :default [info] 0)
(defmethod draw-it :default [info base ctx])
      
(defmethod max-v :line [{line :line}] (apply max line))
(defmethod min-v :line [{line :line}] (apply min line))
(defmethod length :line [{line :line}] (count line))
(defmethod draw-it :line [{line :line color :color} base ctx]
  (let [[w h max-v min-v offset-v offset-x pos-y] base]
    (aset ctx "strokeStyle" color)
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count line)))
          line
          (rest line))
      ]
      
      (aset ctx "lineWidth" 1)
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y prev))
      (.lineTo ctx (* (inc idx) offset-x) (pos-y curr))
      (.stroke ctx))))
      
; k line
      
(defmethod max-v :kline [{kline :kline}]
  (apply max (stl/high kline)))

(defmethod min-v :kline [{kline :kline}]
  (apply min (stl/low kline)))
  
(defmethod length :kline [{kline :kline}]
  (count kline))

(defmethod draw-it :kline [{kline :kline info :info} base ctx]
  (let [[w h max-v min-v offset-v offset-x pos-y] base]
    (aset ctx "fillStyle" "black")
    
    (doseq
      [
        [idx [date open high low close volume] info]
        (map
          (fn [& args] args)
          (map inc (range (count kline)))
          kline
          (or info kline))
      ]
      (aset ctx "strokeStyle" (if (> close open) "red" "green"))
      (aset ctx "lineWidth" 2)
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y low))
      (.lineTo ctx (* idx offset-x) (pos-y high))
      (.stroke ctx)

      (aset ctx "strokeStyle" (if (> close open) "red" "green"))
      (aset ctx "lineWidth" offset-x)
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y open))
      (.lineTo ctx (* idx offset-x) (inc (pos-y open)))
      (.lineTo ctx (* idx offset-x) (pos-y close))
      (.stroke ctx)

      ;(.fillText ctx info (* idx offset-x) h)
      (comment "end doseq"))))
      
      
(defmethod max-v :clock [{cz :cz}] (apply max cz))
(defmethod min-v :clock [{cz :cz}] (apply min cz))
(defmethod draw-it :clock [{cz :cz vz :vz} base ctx]
  (let [[w h max-v min-v offset-v offset-x pos-y] base
        proj-x 
        (fn [v]
          (-> v
            (* (/ w 8))
            (+ (/ w 2))))
        proj-y
        (fn [v]
          (-> v
            (* (/ h 8) -1)
            (+ (/ h 2))))]
    (aset ctx "fillStyle" "red")
    (aset ctx "strokeStyle" "red")
    (doseq
      [
        [idx pc cc pv cv]
        (map
          (fn [& args] args)
          (range (count cz))
          cz
          (rest cz)
          vz
          (rest vz))
      ]
      (.fillText ctx (str idx) (proj-x pv) (proj-y pc))
      (.beginPath ctx)
      (.moveTo ctx (proj-x pv) (proj-y pc))
      (.lineTo ctx (proj-x cv) (proj-y cc))
      (.stroke ctx)
      (comment "end doseq"))))