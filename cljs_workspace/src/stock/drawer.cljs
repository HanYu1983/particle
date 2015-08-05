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
    [max-v min-v offset-v offset-x pos-y]))
    
(defn draw [{drawers :drawers :as info} w h ctx]
  (let [base (graphic-base w h drawers)]
    (aset ctx "fillStyle" "gray")
    (.fillRect ctx 0 0 w h)
    (doseq [drawer drawers]
      (draw-it drawer base ctx))))
      
(defmethod max-v :kline [{kline :kline}]
  (apply max (stl/high kline)))

(defmethod min-v :kline [{kline :kline}]
  (apply min (stl/low kline)))
  
(defmethod length :kline [{kline :kline}]
  (count kline))

(defmethod draw-it :kline [{kline :kline} base ctx]
  (let [[max-v min-v offset-v offset-x pos-y] base]
    (doseq
      [
        [idx [date open high low close volume]]
        (map
          (fn [& args] args)
          (map inc (range (count kline)))
          kline)
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

      (comment "end doseq"))))