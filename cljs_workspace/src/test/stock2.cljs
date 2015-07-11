(ns test.stock2
  (:require
    [ai.ann :as ann]))

(declare calculate-money)

(defn graphic-base [w h info]
  (let [max-v (apply max (map #(nth % 1) info))
        min-v (apply min (map #(nth % 2) info))
        offset-v (- max-v min-v)
        offset-x (/ w (inc (count info)))
        pos-y
        (fn [v]
          (* h (- 1 (/ (- v min-v) offset-v))))]
    [max-v min-v offset-v offset-x pos-y]))

(defn draw-brain [ctx w h info {steps :step :as brain}]
  (let [[max-v min-v offset-v offset-x pos-y] (graphic-base w h info)
        money (calculate-money 10000 100 steps)
        show-steps
        (replace
          (into {}
            (map
              (fn [[act line]]
                [line act])
            steps))
          info)]
    (aset ctx "fillStyle" "black")
    (.fillText ctx (str "money:" money) 20 20)
    (when (:stock brain)
      (.fillText ctx (str "stock:" (pr-str (:stock brain))) 20 40))
    (doseq
      [
        [idx curr]
        (map
          (fn [& args] args)
          (map inc (range (count show-steps)))
          show-steps)
      ]
      (condp = curr
        :buy (.fillText ctx "O" (* offset-x idx) h)
        :sell (.fillText ctx "X" (* offset-x idx) h)
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
    (fn [{info :info avgs :avgs brain :brain}]
      (aset ctx "fillStyle" "yellow")
      (.fillRect ctx 0 0 w h)
      (doseq [avg avgs]
        (draw-avg ctx w h info "#aaaaaa" avg))
      (draw-line ctx w h info)
      (when brain
        (draw-brain ctx w h info brain)))))

(defn rand-price [cnt start up-rate]
  (->
    (reduce
      (fn [[la & _ :as all] r]
        (cons (+ la (* la (- r (/ up-rate 1)))) all))
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

(defn convert-rates [curve normalize]
  (map
    (fn [prev curr]
      (let [v
            (->>
              (- curr prev)
              (* (/ 1 prev))
              (* (/ 1 normalize))
              (* 0.5)
              (+ 0.5))]
        v))
    curve
    (drop 1 curve)))

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
(defmulti think (fn [type brian line] type))

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


(defmethod prepare :ann1 [type info]
  (merge
    (prepare nil info)
    {
      :ws
      '(((3.0309727609504122 0.8958129837134047 1.5035815277093234 0.9456629358188376 1.3576705137689733 1.2631671445866242) (-0.31085424118702176 0.9340874822881315 0.5655820779573415 0.7585836548894886 0.06611942477303065 0.7940467160731797) (2.850307140147388 1.0756956641941802 1.5538502140350114 0.7274314323819675 1.5567211797840368 0.729486094825665) (2.2728224695552925 1.2083236755399938 1.0223688933595008 0.7836758956375489 1.054595369712162 0.5593937540954879) (3.0218162878485093 1.0503652785565414 1.604135048169243 1.2388330537952215 1.221090407169956 0.8350244798358218)) ((5.301581267749204 3.3609868593366343 -0.7394149388296283 3.0376961047533566 2.256700046977792 3.389521210235661)))
    }))

(defmethod think :ann1 [type {ws :ws info :info :as brain} line]
  (let [lines (take-while (partial not= line) info)
        recent-lines (take-last 5 lines)]
    (if (= (count recent-lines) 5)
      (let [avg1 (average recent-lines 1)
            rates (convert-rates avg1 0.41) ;0.41大約為連續跳停5次的漲幅
            value
            (->
              (ann/FeedForward (list rates) ws)
              flatten
              last)]
              ;(.log js/console (pr-str rates))
              ;(.log js/console value)
        (if (hasStock brain)
          (sell brain line)
          (if (> value 0.55)
            (buy brain line 100)
            brain)))
      brain)))

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
  (let [price-cnt (* 5 4 12)
        info (convert-kline (rand-price price-cnt 100 0.07) 5)
        avg1 (average info 1)
        {step :step :as brain} (play :ann1 info)]
    (draw {:info info :brain brain :avgs [avg1]})
    (comment "end let")))


(test-play)
