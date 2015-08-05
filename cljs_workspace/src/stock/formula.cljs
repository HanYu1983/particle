(ns stock.formula
  (:require
    [stock.tool :as stl]))

(defn average [vs]
  (->
    (apply + vs)
    (/ (count vs))))

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
      
(defn EBBI 
  "這個指標很像實做的不太正確"
  [n kline]
  (let [n1 (ema-seq n 1 (stl/close kline))
        n2 (ema-seq (* n 2) 1 (stl/close kline))
        n3 (ema-seq (* n 4) 1 (stl/close kline))
        n4 (ema-seq (* n 8) 1 (stl/close kline))]
    (map
      (fn [& args]
        (-> (apply + args) (/ 4)))
      n1 n2 n3 n4)))