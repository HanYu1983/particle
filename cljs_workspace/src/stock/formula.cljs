(ns stock.formula
  (:require
    [stock.tool :as stl]))

(defn average [vs]
  (->
    (apply + vs)
    (/ (count vs))))

(defn offset-seq [vs]
  (map #(- %2 %1) vs (rest vs)))

(defn sma-seq [n vs]
  (when (>= (count vs) n)
    (cons 
      (->
        (apply + (take n vs))
        (/ n))
      (lazy-seq (sma-seq n (rest vs))))))
      
(defn ema-seq
  "點線賺錢術的 Exponentional Moving Average 指數移動平均線
  使用了加權型式，w為1可用於計算MACD
  這個計算上較為正確，和yahoo股市算的很接近"
  [n w vs]
  (let [v (first (sma-seq n vs))]
    (->>
      (iterate
        (fn [[prev-ema vs idx]]
          (let [v (first vs)]
            [
              (+ (* v (/ (+ w 1) (+ w idx))) (* prev-ema (/ (dec idx) (+ w idx))))
              (rest vs) 
              (inc idx)
            ])) 
        [v (rest vs) (inc 1)])
      (map first)
      (take (count vs)))))
      
(defn StandardDeviation
  "Standard Deviation 標準差
  n設為30很像不錯"
  [avg vs]
  (let [v
        (->>
          (apply
            +
            (map
              #(.pow js/Math (- % avg) 2)
              vs))
          (* (/ 1 (dec (count vs))))
          (.sqrt js/Math))]
    v))
    
(defn z-score [avg sd vs]
  (let [offsets
        (map
          (fn [v]
            (- v avg))
          vs)
          
        vs
        (map
          #(/ % sd)
          offsets)]
    vs))

(defn clock [n kline]
  (let [cs (sma-seq n (stl/close kline))
        avg (average cs)
        sd (StandardDeviation avg cs)
        z (z-score avg sd cs)
          
        vs (sma-seq n (stl/volume kline))
        v-avg (average vs)
        v-sd (StandardDeviation v-avg vs)
        v-z (z-score v-avg v-sd vs)]
    {
      :sma cs
      :avg avg
      :sd sd
      :z z
      :v-sma vs
      :v-avg v-avg
      :v-sd v-sd
      :v-z v-z
    }))
    
(defn xy-direction [n x y]
  (let [v 
        (->
          (.atan2 js/Math y x)
          (+ (/ -3.14 n))
          (* (/ 1 (/ 6.28 n)))
          int)]
    v))
  
(defn clock-direction [x-seq y-seq]
  (map (partial xy-direction 8) (offset-seq x-seq) (offset-seq y-seq)))

(defn BBI 
  "Bull and Bear Index 多空指標"
  [n kline]
  (let [n1 (sma-seq n (stl/close kline))
        n2 (sma-seq (* n 2) (stl/close kline))
        n3 (sma-seq (* n 4) (stl/close kline))
        n4 (sma-seq (* n 8) (stl/close kline))]
    (map
      (fn [& args]
        (-> (apply + args) (/ 4)))
      n1 n2 n3 n4)))