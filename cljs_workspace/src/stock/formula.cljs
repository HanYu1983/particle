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
    (let [fv (average (take n vs))]
      (reductions
        (fn [ma v]
          (+ (* ma (/ (dec n) n)) (/ v n)))
        fv
        (drop n vs)))))
      
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
            (let [dir (mapv - curr prev)]
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
  [n m o p vs]
  (let [n1 (reverse (sma-seq n (reverse vs)))
        n2 (reverse (sma-seq m (reverse vs)))
        n3 (reverse (sma-seq o (reverse vs)))
        n4 (reverse (sma-seq p (reverse vs)))]
    (map
      (fn [& args]
        (-> (apply + args) (/ 4)))
      n1 n2 n3 n4)))
      
(defn EBBI 
  "指數多空指標"
  [n m o p vs]
  (let [n1 (reverse (ema-seq n (reverse vs)))
        n2 (reverse (ema-seq m (reverse vs)))
        n3 (reverse (ema-seq o (reverse vs)))
        n4 (reverse (ema-seq p (reverse vs)))]
    (map
      (fn [& args]
        (-> (apply + args) (/ 4)))
      n1 n2 n3 n4)))
      
(defn sar-seq 
  "拋物線指標"
  [n reverse-kline]
  (when (>= (count reverse-kline) n)
    (let [low
          (apply
            min
            (map
              (fn [[_ _ _ low _ _]]
                low)
              (take n reverse-kline)))]
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
                          (take n ori)))
                          
                      :sell
                      (apply
                        min
                        (map
                          (fn [[_ _ _ low _ _]]
                            low)
                          (take n ori))))
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
          [low reverse-kline (drop (dec n) reverse-kline) (drop n reverse-kline) :buy 0.2])
        (map first)
        (take (count reverse-kline))
        (drop-last (dec n))))))
        
        
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
    -
    (reverse (ema-seq n (AccDist (reverse kline))))
    (reverse (ema-seq m (AccDist (reverse kline))))))
    
    
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
    (reverse (sma-seq n (reverse eom)))))
    
  
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
      

(defn maxN-seq 
  [n f vs]
  (when (>= (count vs) n)
    (let [g (take n vs)
          k (f g)]
      (cons k (lazy-seq (maxN-seq n f (rest vs)))))))

(defn rsv-seq
  "未成熟隨機值"
  [n kline]
  (let [h9 (maxN-seq 9 #(apply max %) (stl/high kline))
        l9 (maxN-seq 9 #(apply min %) (stl/low kline))
        c (stl/close kline)]
    (map
      (fn [c l h]
        (* (- c l) (/ 1 (- h l))))
      c l9 h9)))

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
    
(defn volatility-seq 
  "計算波動"
  [n vs]
  (when (>= (count vs) n)
    (let [c1 (first vs)
          cn (nth vs (dec n))]
      (cons (/ (- c1 cn) cn) (lazy-seq (volatility-seq n (rest vs)))))))
    
(defn osc-seq 
  "振盪量指標osc
  可以取代mtm動量指標"
  [n vs]
  (when (>= (count vs) n)
    (let [c1 (first vs)
          cn (nth vs (dec n))]
      (cons (/ c1 cn) (lazy-seq (osc-seq n (rest vs)))))))
      
      
(defn rsi-seq 
  "強弱指標"
  [n vs]
  (let [offsets (offset-seq vs)
        upavg (sma-seq n (map (fn [v] (if (pos? v) v 0)) offsets))
        downavg (sma-seq n (map (fn [v] (if (neg? v) (.abs js/Math v) 0)) offsets))]
    (map
      (fn [u d]
        (/ u (+ u d)))
      upavg
      downavg)))
      
      
(defn tr-seq [kline]
  (when (>= (count kline) 2)
    (let [[_ _ _ _ close _] (first kline)
          [_ _ high low _ _] (second kline)
          v (max (- high low) (.abs js/Math (- high close)) (.abs js/Math (- low close)))]
      (cons v (lazy-seq (tr-seq (rest kline)))))))
      
(defn dm-seq [kline]
  (when (>= (count kline) 2)
    (let [[_ _ a b _ _] (first kline)
          [_ _ c d _ _] (second kline)
          v1 (max 0 (- c a))
          v2 (max 0 (- b d))
          v
          (condp = (max v1 v2)
            v1 v1
            v2 (- v2)
            0)]
      (cons v (lazy-seq (dm-seq (rest kline)))))))
      
(defn atr-seq 
  "真實波幅"
  [n kline]
  (sma-seq n (tr-seq kline)))
  

(defn cci [n kline]
  (when (>= (count kline) n)
    (let [factor (/ 1 0.015)
          ps (take n (stl/typical kline))
          ps-avg (average ps)
          ps-sd (StandardDeviation ps-avg ps)
          z (last (z-score ps-avg ps-sd ps))
          v (* factor z)]
        (cons v (lazy-seq (cci n (rest kline)))))))