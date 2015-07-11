(ns test.stock2)

(defn graphic-base [w h info]
  (let [max-v (apply max (map #(nth % 1) info))
        min-v (apply min (map #(nth % 2) info))
        offset-v (- max-v min-v)
        offset-x (/ w (inc (count info)))
        pos-y
        (fn [v]
          (* h (- 1 (/ (- v min-v) offset-v))))]
    [max-v min-v offset-v offset-x pos-y]))

(defn draw-step [ctx w h info steps]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h info)
        show-steps
        (replace
          (into {}
            (map
              (fn [[act line]]
                [line act])
            steps))
          info)]
    (aset ctx "fillStyle" "black")
    (doseq
      [
        [idx curr]
        (map
          (fn [& args] args)
          (map inc (range (count show-steps)))
          show-steps)
      ]
      (condp = curr
        :buy (.fillText ctx "O" (* offset-x idx) 20)
        :sell (.fillText ctx "X" (* offset-x idx) 20)
        false))))

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

(defn draw-line [ctx w h info]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h info)]
    (doseq
      [
        [idx [start top bottom end]]
        (map
          (fn [& args] args)
          (map inc (range (count info)))
          info)
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
    (fn [{info :info avgs :avgs steps :steps}]
      (aset ctx "fillStyle" "yellow")
      (.fillRect ctx 0 0 w h)
      (doseq [avg avgs]
        (draw-avg ctx w h info "#aaaaaa" avg))
      (draw-line ctx w h info)
      (when steps
        (draw-step ctx w h info steps)))))

(defn rand-price [cnt start up-rate]
  (->
    (reduce
      (fn [[la & _ :as all] r]
        (cons (+ la (* la (- r up-rate))) all))
      (list start)
      ; cnt減掉1(start已經加入在初使值)
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

(defn average [kline cnt]
  (apply conj
    (map
      #(/ (apply + %) (count %))
      (partition cnt 1 (map (fn [[s t b e]] e) kline)))
    (take (dec cnt) (repeat -1))))

(defn check-one-style [max-up-rate line]
  (let [[start top bottom end] line
        h (- top bottom)
        solid-rate (/ (- end start) (if (zero? h) 1 h))
        line-rate
        (*
          (.abs js/Math (- top bottom))
          0.5
          (/ 1 start)
          (/ 1 max-up-rate))]
    ;(.log js/console (pr-str line))
    ;(.log js/console line-rate solid-rate)
    (cond
      (and
        (> solid-rate 0.7)
        (> line-rate 0.2))
      ["長紅" solid-rate line-rate]

      (and
        (< solid-rate 0.7)
        (> line-rate 0.2))
      ["長黑" solid-rate]

      (and
        (< (.abs js/Math solid-rate) 0.35)
        true)
      ["十字線" solid-rate line-rate]

      :else
      ["unknown"])))


(def draw (draw (.getElementById js/document "canvas")))

(defn main []
  (let [info (convert-kline (rand-price 50 100 0.07) 5)
        styles
        (map
          (partial check-one-style (* 5 0.07))
          info)
        avg5 (average info 5)
        avg10 (average info 10)]
    ;(.log js/console (pr-str styles))
    (draw {:info info :avgs [avg5 avg10]})))

; (main)


; test play

(defn hasStock [brain]
  (:stock brain))

(defn buy [brain line cnt]
  (if-let [stock (:stock brain)]
    brain
    (-> brain
      (update-in [:step] conj [:buy line])
      (assoc :stock line))))

(defn sell
  [brain line]
  (if-let [ori_line (:stock brain)]
    (-> brain
      (update-in [:step] conj [:sell (or line ori_line)])
      (assoc :stock nil))
    brain))

(defmulti prepare (fn [type info] type))
(defmulti think (fn [type brian line]))

(defn play [type info]
  (let [brain (prepare type info)]
    (->
      (reduce
        (partial think type)
        brain
        info))))

(defmethod prepare :default [type info]
  {
    :info info
    :step '()
  })

(defmethod think :default [type brian [start_price _ _ _ :as line]]
  (if (hasStock brian)
    (sell brian line)
    (buy brian line 100)))

(defn calculate-money [money cnt steps]
  (reduce
    (fn [money [act [start_price & _ :as line] :as step]]
      (condp = act
        :buy (- money (* start_price cnt))
        :sell (+ money (* start_price cnt))
        money))
    money
    steps))

(defn test-play []
  (let [price-cnt 200
        info (convert-kline (rand-price price-cnt 100 0.07) 5)
        {step :step :as result} (play nil info)
        money (calculate-money 10000 100 step)]
    (draw {:info info :steps step})
    (.log js/console (:stock result))
    (.log js/console money)
    (comment "end let")))


(test-play)
