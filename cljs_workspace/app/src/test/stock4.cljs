(ns test.stock4
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [clojure.string :as str]
    [cljs.core.async :refer [>! <! close! chan alts!]]))

(defn graphic-base [w h info]
  (let [max-v (apply max (map #(nth % 2) info))
        min-v (apply min (map #(nth % 3) info))
        offset-v (- max-v min-v)
        offset-x (/ w (inc (count info)))
        pos-y
        (fn [v]
          (* h (- 1 (/ (- v min-v) offset-v))))]
    [max-v min-v offset-v offset-x pos-y]))
    
    
    
(defn draw-yu [ctx w h kline yu]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)
        yu-values
        (replace
          (into {} yu)
          kline)]
          
    (aset ctx "lineWidth" 1)
    (aset ctx "strokeStyle" "blue")
    
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count yu-values)))
          yu-values
          (rest yu-values))
      ]
      (when (and (number? prev) (number? curr))
        (.beginPath ctx)
        (.moveTo ctx (* idx offset-x) (* (- 1 prev) h))
        (.lineTo ctx (* (inc idx) offset-x) (* (- 1 curr) h))
        (.stroke ctx)))
      
    (comment "end let")))
    
(defn draw-sd [ctx w h kline sd]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)
        sd-values
        (replace
          (into {} sd)
          kline)]
          
    (aset ctx "lineWidth" 1)
    (doseq
      [
        [idx [avg sd-v] [_ _ _ _ close _]]
        (map
          (fn [& args] args)
          (range (count sd-values))
          sd-values
          kline)
      ]
      (aset ctx "strokeStyle" 
        (cond
          ;(< (.abs js/Math avg) 0.05)
          ;"yellow"
          
          (> avg 0)
          "red"
          
          :else
          "green"))
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y (+ (+ avg close))))
      (.lineTo ctx (* (inc idx) offset-x) (pos-y (+ (+ avg close))))
      (.stroke ctx)
      
      (.moveTo ctx (* idx offset-x) (pos-y (+ (+ avg close) sd-v sd-v)))
      (.lineTo ctx (* (inc idx) offset-x) (pos-y (+ (+ avg close) sd-v sd-v)))
      (.stroke ctx)
      
      (.moveTo ctx (* idx offset-x) (pos-y (- (+ avg close) sd-v sd-v)))
      (.lineTo ctx (* (inc idx) offset-x) (pos-y (- (+ avg close) sd-v sd-v)))
      (.stroke ctx)
      (comment "end doseq"))
    (comment "end let")))
    
(defn draw-sar [ctx w h kline sar]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)
        sar-values
        (replace
          (into {} sar)
          kline)]
    (aset ctx "lineWidth" 1)
    (aset ctx "strokeStyle" "red")
    
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count sar-values)))
          sar-values
          (rest sar-values))
      ]
      (when (and (number? prev) (number? curr))
        (.beginPath ctx)
        (.moveTo ctx (* idx offset-x) (pos-y prev))
        (.lineTo ctx (* (inc idx) offset-x) (pos-y curr))
        (.stroke ctx)))
      
    (comment "end let")))
    
    
(defn draw-kd [ctx w h kline [rsv k d :as kd]]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)]
    
    (aset ctx "lineWidth" 1)
    
    (aset ctx "strokeStyle" "blue")
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count k)))
          k
          (rest k))
      ]
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (* (- 1 (/ prev 100)) h))
      (.lineTo ctx (* (inc idx) offset-x) (* (- 1 (/ curr 100)) h))
      (.stroke ctx))
      
    (aset ctx "strokeStyle" "yellow")
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count d)))
          d
          (rest d))
      ]
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (* (- 1 (/ prev 100)) h))
      (.lineTo ctx (* (inc idx) offset-x) (* (- 1 (/ curr 100)) h))
      (.stroke ctx))
      
    (comment "end let")))
    
    
(defn draw-turn [ctx w h kline turn]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)]
    (aset ctx "fillStyle" "black")
    (doseq
      [
        [idx [date & _ :as line]]
        (map
          (fn [& args] args)
          (map inc (range (count kline)))
          kline)
      ]
      (cond
        (some #(= date %) turn)
        (.fillText ctx "turn" (* idx offset-x) h)
        
        :else
        (comment "not thing")))))

(defn draw-line [ctx w h kline]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)]
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

(defn draw [canvas]
  (let [ctx (.getContext canvas "2d")
        [w h] [(.-width canvas) (.-height canvas)]]
    (fn [{kline :kline
          turn :turn
          yu :yu
          sd :sd
          kd :kd
          sar :sar
          avgs :avgs 
          bias :bias 
          :as appctx}]
      (aset ctx "fillStyle" "gray")
      (.fillRect ctx 0 0 w h)

      ;(doseq [[bia-cnt bia] bias]
      ;  (draw-bias ctx w h kline "#aaaaaa" bia))

      ;(doseq [[avg-cnt avg] avgs]
      ;  (draw-avg ctx w h kline "#aaaaaa" avg))

      (draw-line ctx w h kline)
      (when turn
        (draw-turn ctx w h kline turn))
      (when kd
        (draw-kd ctx w h kline kd))
      (when sar
        (draw-sar ctx w h kline sar))
      (when sd
        (draw-sd ctx w h kline sd))
      (when yu
        (draw-yu ctx w h kline yu))
      appctx)))

(defn stock-url [id startdate start num]
  (str
    "https://www.google.com/finance/historical?q=TPE:" id
    "&startdate=" startdate
    "&start=" start
    "&num=" num))

(defn content [url]
  (let [ret (chan)]
    (.ajax js/$ (js-obj
      "url" "/proxy"
      "dataType" "text"
      "data"
      (js-obj
        "url" url)
      "success"
      (fn [data]
        (go
          (>! ret [nil data])
          (close! ret)))
      "error"
      (fn [xhr _ err]
        (go
          (>! ret [err])
          (close! ret)))))
    ret))

;<tr>
;<td class="lm">Jun 25, 2015
;<td class="rgt">145.00
;<td class="rgt">147.00
;<td class="rgt">145.00
;<td class="rgt">146.50
;<td class="rgt rm">43,496,000

(defn parse-info [content]
  (let [infos
        (re-seq
          (->
            (str
              "<tr>"
              "<td class=\"lm\">(\\D{3} \\d+, \\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt rm\">([\\d,]+)")
            re-pattern)
          (->
            content
            (str/replace #"\n" "")))]
    (for
      [
        [_ date open high low close volume]
        infos
      ]
      [date (js/parseFloat open) (js/parseFloat high) (js/parseFloat low) (js/parseFloat close) (-> volume (str/replace #"," "") js/parseInt)])))

; num最高為200
(defn stock-info [all id startdate start num]
  (go
    (let [url (stock-url id startdate start num)
          [err content] (<! (content url))]
      (if err
        [err]
        (let [infos (parse-info content)]
          (if (= num (count infos))
            (<! (stock-info (concat all infos) id startdate (+ start num) num))
            [nil (concat all infos)]))))))


(defn average [cnt kline]
  (let [group (take cnt kline)
        [date open _ _ _ _] (last group)

        high
        (apply
          max
          (map
            (fn [[_ _ high _ _ _]] high)
            group))

        low
        (apply
          min
          (map
            (fn [[_ _ _ low _ _]] low)
            group))

        [_ _ _ _ close _] (first group)

        volume
        (apply
          +
          (map
            (fn [[_ _ _ _ _ volume]] volume)
             group))]
    (when-not (zero? (count group))
      (cons [date open high low close volume] (lazy-seq (average cnt (drop cnt kline)))))))

(defn check-turn [kline]
  (when (>= (count kline) 3)
    (let [[_ _ _ _ c1 _ :as l1] (first kline)
          [date _ _ _ c2 _ :as l2] (second kline)
          [_ _ _ _ c3 _ :as l3] (nth kline 2)
          rate (/ (- c1 c2) c2)
          rate2 (/ (- c2 c3) c3)
          isReturn 
          (and 
            (neg? (* rate rate2))
            (> (.abs js/Math (- (.abs js/Math rate) (.abs js/Math rate2))) 0.01))]
      (if isReturn
        (cons date (lazy-seq (check-turn (rest kline))))
        (check-turn (rest kline))))))


(defn check-length
  "以最近30天的振盪平均值來計算
  振盪超過平均值1倍以上的可以視為長紅
  振盪低於平均值0.8倍以下的可以視為小幅盤整"
  [kline]
  (when (>= (count kline) 30)
    (let [group (take 30 kline)
          avg-length 
          (->
            (apply + (map (fn [[_ _ high low _ _]] (- high low)) group))
            (/ (count group)))
          [_ open high low close _ :as curr] (first group)
          length-rate (/ (- high low) avg-length)
          solid-rate (/ (- close open) avg-length)]
      (cons [curr solid-rate length-rate] (lazy-seq (check-length (rest kline)))))))

(defn sma 
  "Simple Moving Average 簡單移動平均線"
  [n kline]
  (when (>= (count kline) n)
    (let [group (take n kline)
          avg
          (->
            (apply + (map (fn [[_ _ _ _ close _]] close) group))
            (/ (count group)))
          curr (first kline)]
      (cons [curr avg] (lazy-seq (sma n (rest kline)))))))
      
(defn ema2
  "網路版本的 Exponentional Moving Average 指數移動平均線
  這個計算不知道正確還是錯誤"
  [n kline]
  (when (>= (count kline) n)
    (let [group (take n kline)
          alpha (/ 2 (inc n))
          value
          (->>
            (map
              *
              (iterate (partial * (- 1 alpha)) 1)
              (map (fn [[_ _ _ _ close _]] close) group))
            (apply +)
            (* alpha))
          curr (first kline)]
      (cons [curr value] (lazy-seq (ema2 n (rest kline)))))))

(defn ema
  "點線賺錢術的 Exponentional Moving Average 指數移動平均線
  使用了加權型式，w為1可用於計算MACD
  這個計算上較為正確，和yahoo股市算的很接近"
  [n w kline]
  (let [[_ _ _ _ close _ :as curr] (first kline)]
    (->>
      (iterate 
        (fn [[[_ prev-ema] kline idx]]
          (let [[_ _ _ _ close _ :as curr] (first kline)]
            [
              [
                curr
                (+ (* close (/ (+ w 1) (+ w idx))) (* prev-ema (/ (dec idx) (+ w idx))))
              ]
              (rest kline) 
              (inc idx)
            ])) 
        [[curr close] (rest kline) (inc 1)])
      (map first))))

(defn rsv
  "未成熟隨機值
  用來計算KD線" 
  [kline]
  (when (> (count kline) 9)
    (let [group (take 9 kline)
          [_ _ _ _ ct _ :as curr] (first group)
          L9 
          (apply
            min
            (map
              (fn [[_ _ _ low _ _]]
                low)
              group))
          H9
          (apply
            max
            (map
              (fn [[_ _ high _ _ _]]
                high)
              group))
          v 
          (->
            (* 
              (- ct L9) 
              (/ 1 (- H9 L9))
              100)
            int)]
      (cons [curr v] (lazy-seq (rsv (rest kline)))))))

(defn k 
  "n為3是最好的數值"
  [n rsv-seq]
  (when (> (count rsv-seq) n)
    (let [group (take n rsv-seq)
          avg
          (->
            (apply 
              + 
              (map
                (fn [[line v]] v)
                group))
            (/ (count group)))]
      (cons avg (lazy-seq (k n (rest rsv-seq)))))))

(defn sar 
  "拋物線指標
  沒有計算反向作空，所以只看支撐線"
  [reverse-kline]
  (when (> (count reverse-kline) 3)
    (let [first-line (first (drop 2 reverse-kline))
          low
          (apply
            min
            (map
              (fn [[_ _ _ low _ _]]
                low)
              (take 3 reverse-kline)))]
      (->>
        (iterate
          (fn [[[_ value] ori prev curr act af]]
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
              [[curr-line next-value] (rest ori) (rest prev) (rest curr) next-act next-af]))
          [[first-line low] reverse-kline (drop 2 reverse-kline) (drop 3 reverse-kline) :buy 0.2])
        (map first)))))



(defn sd
  "Standard Deviation 標準差
  n設為30很像不錯"
  [n kline]
  (when (> (count kline) n)
    (let [curr (first kline)
    
          ; 取得n天的收盤價
          sma-seq 
          (->>
            (sma 1 kline)
            (map second)
            (take n))
    
          ; 每天和隔天的價差
          offsets
          (map
            (fn [prev curr]
              (- curr prev))
            (rest sma-seq)
            sma-seq)
          
          ; 價差的平均數
          offsets-avg
          (->
            (apply + offsets)
            (/ n))
          
          ; 價差的標準差
          v
          (->>
            (apply
              +
              (map
                #(.pow js/Math (- % offsets-avg) 2)
                offsets))
            (* (/ 1 (dec n)))
            (.sqrt js/Math))]
      ; 計算出[價差平均數 價差標準差]
      (cons [curr [offsets-avg v]] (lazy-seq (sd n (rest kline)))))))
  
    
(defn z-score [n kline]
  (let [[_ [avg sd-v]] (first (sd n kline))
  
        currs
        (map
          (fn [[_ _ _ _ close _]] close)
          kline)
          
        offsets
        (map
          (fn [prev curr]
            (- curr prev))
          (rest currs)
          currs)
        vs
        (map
          #(/ % sd-v)
          offsets)]
    (map
      (fn [& args] args)
      kline
      vs)))


(defn yu
  "余氏指標
  w用0.001看多空動能
  w用0.5看振盪方向"
  [w n reverse-kline]
  (let [normal
        (->
          (.pow js/Math 1.07 n)
          (- 1))
    
        up-seq
        (map
          (fn [[_ _ _ _ pc _] [_ _ _ _ cc _]]
            (/ (- cc pc) pc normal))
          reverse-kline
          (rest reverse-kline))
               
        vs
        (->>
          (reductions
            (fn [[prev ran] up-offset]
              (let [max-v (+ prev (if (pos? up-offset) ran (/ ran 2)))
                    min-v (- prev (if (neg? up-offset) ran (/ ran 2)))]
                (if (> max-v up-offset min-v)
                  [up-offset (* ran 0.95)]
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
                  ])))
            [
              (first up-seq)
              normal
            ]
            (rest up-seq))
          (map 
            (fn [[dir ran]]
              (-> ran))))]
    (map
      (fn [& args] (apply vector args))
      (rest reverse-kline)
      vs)))


(defn VolumeAccumulation 
  "Volume Accumulation 成交量多空比率淨額法
  用來計算OBV能量潮公式"
  [kline]
  (map
    (fn [[date open high low close volume]]
      (if (= high low)
        0 ; 跳空先算沒有量
        (*
          (-
            (- close low)
            (- high close))
          (/ 1 (- high low))
          volume)))
    kline))
    
(defn obv 
  "OBV能量潮公式"
  [kline]
  (rest
    (reductions
      +
      0
      (VolumeAccumulation kline))))
      
      
(defn yu-pre [kline]
  (let [n 30
        group (take n kline)
        
        all-volume
        (reduce
          + 0
          (map
            (fn [[_ _ _ _ _ volume]] volume)
            group))
            
        all-price
        (reduce
          + 0
          (map
            (fn [[_ _ high _ _ _]] high)
            group))
        
        v-per-p (/ all-price all-volume)
        
        obv-seq (obv group)
        
        predict
        (map
          (fn [[_ open _ _ _ _] obv]
            (+ open (* obv v-per-p)))
          kline
          obv-seq)]
          (.log js/console all-volume all-price)
          (.log js/console v-per-p)
          
    predict))
      
(defn yu-obv [n kline]
  (let [group (take n kline)
        va (VolumeAccumulation group)
        max-va (apply max va)
        min-va (apply min va)
        region (- max-va min-va)]
    (map
      #(/ % region)
      va)))

(defn yu-volume [n reverse-kline]
  (let [group (take n reverse-kline)
        
        price-seq
        (map
          (fn [[_ _ _ _ close _]]
            close)
          group)
          
        price-up-rate
        (map
          (fn [p c]
            (/ (- c p) p))
          price-seq
          (rest price-seq))
          
        volume-seq
        (map
          (fn [[_ _ _ _ _ volume]]
            volume)
          group)
        
        volume-up-rate
        (map
          (fn [p c]
            (/ (- c p) p))
          volume-seq
          (rest volume-seq))
          
        v
        (->>
          (map
            (fn [p v]
              (/ p v))
            price-up-rate
            volume-up-rate)
          (apply +)
          (/ n))
          
        curr (second group)]
        
        ;(.log js/console (pr-str (take 10 price-up-rate)))
        ;(.log js/console (pr-str (take 10 volume-up-rate)))
    (cons v (lazy-seq (yu-volume n (rest reverse-kline))))))


(defn main []
  (let [draw (draw (.getElementById js/document "canvas"))
        onSystem (chan)
        onView (chan)]

    (.subscribe js/window.onView
      (fn [data]
        (go (>! onView (js->clj data)))))

    (go
      (let [[err infos] (<! (stock-info nil 2450 "2014/1/1" 0 200))]
        (if err
          (js/alert err)
          (>! onSystem [:loaded infos]))))

    (go-loop [{cnt :cnt :as ctx} {:cnt 200}]
      (let [[v ch] (alts! [onSystem onView])]
        (recur
          (condp = ch
            onSystem
            (let [[type params] v]
              (condp = type
                :loaded
                (->
                  ctx
                  (assoc :info params)
                  (assoc :kline (take cnt params))
                  draw)

                ctx))

            onView
            (let [{
                    cmd "cmd"
                    params "params"
                    :as input
                  }
                  v]
              (condp = cmd
                "length"
                (do
                  (.log js/console (pr-str (take 10 (check-length (:kline ctx)))))
                  ctx)
                  
                "obv"
                (let [kline (:kline ctx)
                      obv-seq (obv kline)]
                  (.log js/console (pr-str (take (count kline) obv-seq)))
                  ctx)
                  
                "yu-obv"
                (let [kline (:kline ctx)
                      obv-seq (yu-obv params kline)]
                  (.log js/console (pr-str (take 10 obv-seq)))
                  ctx)
                  
                "yu-pre"
                (let [kline (:kline ctx)
                      obv-seq (yu-pre kline)]
                  (.log js/console (pr-str (take (count (:kline ctx)) obv-seq)))
                  ctx)
                    
                "yu"
                (let [yu-seq (yu 0.5 params (reverse (:kline ctx)))]
                  (->
                    ctx
                    (assoc :yu (take (count (:kline ctx)) yu-seq))
                    draw))
                  
                "sd"
                (let [v (sd params (:kline ctx))
                      z (z-score params (:kline ctx))]
                  ;(.log js/console (pr-str (take 10 v)))
                  ;(.log js/console (pr-str (take 10 z)))
                  (->
                    ctx
                    (assoc :sd (take (count (:kline ctx)) v))
                    draw))
                  
                "sma"
                (do
                  (.log js/console (pr-str (take 10 (sma params (:kline ctx)))))
                  ctx)
                  
                "ema"
                (do
                  (.log js/console (pr-str (take 10 (ema params 0 (:kline ctx)))))
                  ctx)
                  
                "rsv"
                (let [cnt (count (:kline ctx))
                      rsv-seq (rsv (:kline ctx))
                      kv (take cnt (k params rsv-seq))
                      d (take cnt (k (* 3 params) rsv-seq))]
                  (->
                    ctx
                    (assoc :kd [nil kv d])
                    draw))
                    
                "sar"
                (let [kline (:kline ctx)
                      sar-seq (sar (reverse kline))]
                  (->
                    ctx
                    (assoc :sar (take (count kline) sar-seq))
                    draw))
                
                "stock"
                (do
                  (go
                    (let [[err infos] (<! (stock-info nil params "2014/1/1" 0 200))]
                      (if err
                        (js/alert err)
                        (>! onSystem [:loaded infos]))))
                  ctx)
                
                "avg"
                (->
                  ctx
                  (assoc
                    :kline
                    (->>
                      (average params (:info ctx))
                      (take cnt)))
                  draw)
                  
                "turn"
                (->
                  ctx
                  (assoc
                    :turn
                    (->>
                      (check-turn (:kline ctx))
                      (take cnt)))
                  (draw))
                
                "print"
                (do
                  (doseq [line ((keyword params) ctx)] 
                    (.log js/console (pr-str line)))
                  ctx)
                  
                ctx))

            ctx))))
    (comment "end let")))



(main)
