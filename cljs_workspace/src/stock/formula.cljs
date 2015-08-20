(ns stock.formula
  (:require
    [stock.tool :as stl]))

(defn average [vs]
  (->
    (apply + vs)
    (/ (count vs))))

(defn offset-seq [vs]
  (map #(- %2 %1) vs (rest vs)))

(defn sma-seq 
  "移動平均線"
  [n vs]
  (when (>= (count vs) n)
    (cons 
      (->
        (apply + (take n vs))
        (/ n))
      (lazy-seq (sma-seq n (rest vs))))))
      
(defn ema-seq 
  "指數移動平均線"
  [n vs]
  (let [fv (first (sma-seq n vs))
        alpha (/ 2 (inc n))]
    (reductions
      (fn [ema v]
        (+ (* (- v ema) alpha) ema))
      fv
      (drop n vs))))
      
(defn macd-dif 
  "指數差離指標"
  [n m kline]
  (map
    -
    (reverse (ema-seq n (reverse (stl/close kline))))
    (reverse (ema-seq m (reverse (stl/close kline))))))
    
  ;(->>
  ;  (map
  ;    -
  ;    (reverse (ema-seq n (reverse (stl/close kline))))
  ;    (reverse (ema-seq m (reverse (stl/close kline)))))
  ;  (reverse)
  ;  (into (repeat (dec m) 0))))
    
      
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
    
(defn yu-clock
  "余氏背離線"
  [n kline]
  (let [ps (sma-seq n (stl/mid kline))
        ps-avg (average ps)
        ps-sd (StandardDeviation ps-avg ps)
        ps-z (z-score ps-avg ps-sd ps)
        
        vs (sma-seq n (stl/volume kline))
        vs-avg (average vs)
        vs-sd (StandardDeviation vs-avg vs)
        vs-z (z-score vs-avg vs-sd vs)
        
        ps (map vector vs-z ps-z)
        
        axis [0.707 -0.707]
        
        dot
        (fn [l1 l2]
          (apply + (map * l1 l2)))
        
        length
        (fn [line]
          (.sqrt js/Math (dot line line)))

        normalize
        (fn [line]
          (map #(/ % (length line)) line))  
        
        projs
        (map
          (fn [prev curr]
            (let [dir (mapv - prev curr)]
              (dot (normalize dir) axis)))
          ps
          (rest ps))]
    projs))

(defn clock [n kline]
  (let [cs (sma-seq n (stl/mid kline))
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
  "Bull and Bear Index 多空指標
  利用ema(5)和BBI(12)的差離值(macd)的圖形，和rsv(100)後的sma(3)和sma(9)的曲線圖形幾乎無二致!!"
  [n vs]
  (let [n1 (sma-seq n vs)
        n2 (sma-seq (* n 2) vs)
        n3 (sma-seq (* n 4) vs)
        n4 (sma-seq (* n 8) vs)]
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
      

(defn rsv-seq
  "未成熟隨機值" 
  [n kline]
  (when (>= (count kline) n)
    (let [group (take n kline)
          [_ _ _ _ ct _] (first group)
          L 
          (apply
            min
            (map
              (fn [[_ _ _ low _ _]]
                low)
              group))
          H
          (apply
            max
            (map
              (fn [[_ _ high _ _ _]]
                high)
              group))
          v 
          (->
            (* 
              (- ct L) 
              (/ 1 (- H L))
              100)
            int)]
      (cons v (lazy-seq (rsv-seq n (rest kline)))))))
      
      
(defn yu-car
  "余氏方向盤指標"
  [n w d reverse-kline]
  (let [normal
        (->
          (.pow js/Math 1.07 n)
          (- 1))
    
        up-seq
        (map 
          (partial * (/ 1 normal))
          (offset-seq (stl/mid reverse-kline)))

        vs
        (->>
          (reductions
            (fn [[prev ran] up-offset]
              (let [max-v (+ prev (if (pos? up-offset) ran (/ ran 2)))
                    min-v (- prev (if (neg? up-offset) ran (/ ran 2)))]
                (if (> max-v up-offset min-v)
                  [up-offset (* ran d)]
                  [
                    (if (> up-offset max-v)
                      max-v
                      min-v)
                    (+ ran 
                      (* 
                        (max
                          (- up-offset max-v)
                          (- min-v up-offset))
                        w))
                  ])
                ))
            [
              (first up-seq)
              normal
            ]
            (rest up-seq)))]
    ; vector的first和list的first為倒反
    [(map second vs) (map first vs)]))