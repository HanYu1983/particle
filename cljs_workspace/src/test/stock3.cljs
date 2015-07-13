(ns test.stock3)

(defn graphic-base [w h info]
  (let [max-v (apply max (map #(nth % 1) info))
        min-v (apply min (map #(nth % 2) info))
        offset-v (- max-v min-v)
        offset-x (/ w (inc (count info)))
        pos-y
        (fn [v]
          (* h (- 1 (/ (- v min-v) offset-v))))]
    [max-v min-v offset-v offset-x pos-y]))

(defn draw-bias [ctx w h info color bias]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h info)]
    (.beginPath ctx)
    (aset ctx "lineWidth" 1)
    (aset ctx "strokeStyle" color)
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count bias)))
          bias
          (drop 1 bias))
      ]
      (when (> prev -1)
        (.moveTo ctx (* offset-x idx) (* -1 h (-> prev (- 0.5))))
        (.lineTo ctx (* offset-x (inc idx)) (* -1 h (-> curr (- 0.5)))))
    (.stroke ctx))))

(defn draw-avg [ctx w h info color avg]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h info)]
    (.beginPath ctx)
    (aset ctx "lineWidth" 1)
    (aset ctx "strokeStyle" color)
    (doseq
      [
        [idx prev curr]
        (map
          (fn [& args] args)
          (map inc (range (count avg)))
          avg
          (drop 1 avg))
      ]
      (when (> prev -1)
        (.moveTo ctx (* offset-x idx) (pos-y prev))
        (.lineTo ctx (* offset-x (inc idx)) (pos-y curr)))
    (.stroke ctx))))

(defn draw-line [ctx w h kline]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h kline)]
    (doseq
      [
        [idx [start top bottom end]]
        (map
          (fn [& args] args)
          (map inc (range (count kline)))
          kline)
      ]
      (aset ctx "strokeStyle" "black")
      (aset ctx "lineWidth" 2)
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y bottom))
      (.lineTo ctx (* idx offset-x) (pos-y top))
      (.stroke ctx)

      (aset ctx "strokeStyle" (if (> end start) "red" "black"))
      (aset ctx "lineWidth" offset-x)
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y start))
      (.lineTo ctx (* idx offset-x) (pos-y end))
      (.stroke ctx)

      (comment "end doseq"))))

(defn draw [canvas]
  (let [ctx (.getContext canvas "2d")
        [w h] [(.-width canvas) (.-height canvas)]]
    (fn [{kline :kline avgs :avgs bias :bias}]
      (aset ctx "fillStyle" "yellow")
      (.fillRect ctx 0 0 w h)

      (doseq [[bia-cnt bia] bias]
        (draw-bias ctx w h kline "#aaaaaa" bia))

      (doseq [[avg-cnt avg] avgs]
        (draw-avg ctx w h kline "#aaaaaa" avg))

      (draw-line ctx w h kline))))


(defn rand-price [cnt start up-rate]
  (->
    (reduce
      (fn [[la & _ :as all] r]
        (cons (+ la (* la (- r (/ up-rate 1)))) all))
      (list start)
      ; cnt減掉1(start已經加入在初始值)
      (repeatedly (dec cnt) #(* (rand) (* 2 up-rate))))
    reverse))

(defn convert-kline [price cnt]
  (map
    (fn [ps]
      (let [start (first ps)
            end (last ps)
            top (apply max ps)
            bottom (apply min ps)]
        (list start top bottom end)))
    (partition cnt cnt nil price)))

(defn average [cnt kline]
  (if (= cnt 1)
    (map
      #(/ (apply + %) (count %))
      (partition cnt 1 (map (fn [[s t b e]] e) kline)))
    (apply conj
      (map
        #(/ (apply + %) (count %))
        (partition cnt 1 (map (fn [[s t b e]] e) kline)))
      ; dec 是因為取5筆平均值只有前4筆是無法計算的
      (take (dec cnt) (repeat -1)))))

(defn bias [cnt kline]
  (let [avg (average cnt kline)
        vs
        (map
          (fn [avg-v [_ _ _ e :as line]]
            (if (= -1 avg-v)
              -1
              (/ (- e avg-v) avg-v)))
          avg
          kline)]
    vs))

(defn main []
  (def draw (draw (.getElementById js/document "canvas")))
  (let [prices (rand-price (* 5 200) 100 0.07)
        kline (convert-kline prices 5)
        infos
        {
          :kline kline
          :bias
          (into {}
            (map
              (fn [cnt]
                [cnt (bias cnt kline)])
              '(10)))
          :avgs
          (into {}
            (map
              (fn [cnt]
                [cnt (average cnt kline)])
              '(5 10 20 50)))
        }]
    ;(.log js/console (pr-str infos))
    ;(.log js/console (pr-str (:bias infos)))
    (draw infos)
    (comment "end let")))

(main)
