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
      
(comment (defn ema-seq
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
      (take (count vs))))))
      
(defn ema-seq [n vs]
  (reductions
    (fn [ema v]
      (+ (/ (- v ema) n) ema))
    (first vs)
    (rest vs)))
      
      
(defn StandardDeviation
  "Standard Deviation 標準差"
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
      
(defn sar-seq 
  "拋物線指標"
  [reverse-kline]
  (when (>= (count reverse-kline) 3)
    (let [low
          (apply
            min
            (map
              (fn [[_ _ _ low _ _]]
                low)
              (take 3 reverse-kline)))]
      (->>
        (iterate
          (fn [[value ori prev curr act af]]
            (let [[_ _ ph pl _ _ :as prev-line] (first prev)
                  [_ _ ch cl _ _ :as curr-line] (first curr)
                  
                  should-turn
                  (condp = act
                    :buy
                    (> value pl)
                    
                    :sell
                    (< value ph))
                    
                  next-value 
                  (if should-turn
                    (condp = act
                      :buy
                      (apply
                        max
                        (map
                          (fn [[_ _ high _ _ _]]
                            high)
                          (take 3 ori)))
                          
                      :sell
                      (apply
                        min
                        (map
                          (fn [[_ _ _ low _ _]]
                            low)
                          (take 3 ori))))
                    (+ value (* af (- pl value))))
                  
                    
                  next-af
                  (condp = act
                    :buy
                    (if should-turn
                      0.02
                      (if (> ch ph)
                        (max (+ 0.04 af) 0.2)
                        (max (+ 0.02 af) 0.2)))
                      
                    :sell
                    (if should-turn
                      0.02
                      (if (< cl pl)
                        (max (+ 0.04 af) 0.2)
                        (max (+ 0.02 af) 0.2)))
                      
                    :else
                    af)
                    
                  next-act
                  (if should-turn
                    (condp = act
                      :buy :sell
                      :sell :buy)
                    act)]
              [next-value (rest ori) (rest prev) (rest curr) next-act next-af]))
          [low reverse-kline (drop 2 reverse-kline) (drop 3 reverse-kline) :buy 0.2])
        (map first)
        (take (count reverse-kline))
        (drop-last 2)))))
        
        
(defn AccDist 
  "累積/派發線"
  [kline]
  (reductions
    +
    0
    (map
      (fn [[_ open high low close volume]]
        (if (= high low)
          0
          (* (- (- close low) (- high close)) (/ volume (- high low)))))
      kline)))
      
(defn Chaikin
  "蔡金指標"
  [n m kline]
  (map
    #(- %1 %2)
    (ema-seq n (AccDist kline))
    (ema-seq m (AccDist kline))))
    
    
(defn EOM 
  "Ease Of Movement (EOM) 簡易波動指標"
  [n kline]
  (let [mid-move 
        (map
          #(- %1 %2)
          (stl/mid kline)
          (rest (stl/mid kline)))
          
        BoxRatio
        (map
          (fn [[_ _ high low _ volume]]
            (/ volume (- high low)))
          kline)
          
        eom
        (map
          #(/ %1 %2)
          mid-move
          (rest BoxRatio))]
    (sma-seq n eom)))
    
  
(defn yu-gv 
  "地量"
  [n kline]
  (when (>= (count kline) n)
    (let [group (take n kline)
          vs (stl/volume group)
          avg (average vs)
          sd (StandardDeviation avg vs)
          z (z-score avg sd vs)]
      (cons (first z) (lazy-seq (yu-gv n (rest kline)))))))