(ns test.stock
  (:require-macros
    [cljs.core.async.macros :refer [go-loop go]])
  (:require
    [cljs.core.async :refer [<! timeout]]
    [ai.ann :as ann]))

(def k-line-count 365)
(def buy-rate 0.5)
(def start-money 100000)

(defn draw [canvas]
  (let [ctx (.getContext canvas "2d")
        [w h] [(.-width canvas) (.-height canvas)]]
    (fn [curve avg avg2 vs err money]
      (let [max-v (apply max curve)
            factor (/ 1 max-v)
            xoffset (/ w (count curve))
            vs (apply conj vs (take 5 (repeat 0)))]
        (aset ctx "fillStyle" "#FFFF00")
        (.fillRect ctx 0 0 w h)

        (.beginPath ctx)
        (aset ctx "lineWidth" 1)
        (aset ctx "strokeStyle" "#aaaaaa")
        (.moveTo ctx 0 (* h 0.5))
        (.lineTo ctx w (* h 0.5))

        (.moveTo ctx 0 (* h 0.25))
        (.lineTo ctx w (* h 0.25))

        (.moveTo ctx 0 (* h 0.75))
        (.lineTo ctx w (* h 0.75))

        (.moveTo ctx 0 (* h (- 1 buy-rate)))
        (.lineTo ctx w (* h (- 1 buy-rate)))

        (.stroke ctx)

        (doseq
          [
            [idx prev curr]
            (map
              (fn [& args] args)
              (range (count avg))
              avg
              (drop 1 avg))
          ]
          (.beginPath ctx)
          (aset ctx "lineWidth" 2)
          (aset ctx "strokeStyle" "#aaaaaa")
          (.moveTo ctx (* xoffset idx) (- h (* prev factor h)))
          (.lineTo ctx (* xoffset (inc idx)) (- h (* curr factor h)))
          (.stroke ctx))

          (doseq
            [
              [idx prev curr]
              (map
                (fn [& args] args)
                (range (count avg2))
                avg2
                (drop 1 avg2))
            ]
            (.beginPath ctx)
            (aset ctx "lineWidth" 2)
            (aset ctx "strokeStyle" "#bbbbbb")
            (.moveTo ctx (* xoffset idx) (- h (* prev factor h)))
            (.lineTo ctx (* xoffset (inc idx)) (- h (* curr factor h)))
            (.stroke ctx))

        (doseq
          [
            [idx prev curr v]
            (map
              (fn [& args] args)
              (range (count curve))
              curve
              (drop 1 curve)
              vs)
          ]
          (.beginPath ctx)
          (aset ctx "lineWidth" 2)
          (aset ctx "strokeStyle" "#00ff00")
          (.moveTo ctx (* xoffset idx) (- h (* prev factor h)))
          (.lineTo ctx (* xoffset (inc idx)) (- h (* curr factor h)))
          (.stroke ctx)

          (.beginPath ctx)
          (aset ctx "strokeStyle" "#ff0000")
          (.moveTo ctx (+ 3 (* xoffset idx)) h)
          (.lineTo ctx (+ 3 (* xoffset idx)) (- h (* v h)))
          (.stroke ctx))

        (aset ctx "fillStyle" "#000000")
        (.fillText ctx (str "err:" err) 100 20)
        (.fillText ctx (str "money:" money) 100 40)
        (.fillText ctx (str "rate:" (/ (- money start-money) start-money)) 100 60)
        (comment "end let")))))

(def draw (draw (.getElementById js/document "canvas")))

(defn average [curve cnt]
  (apply conj
    (map
      #(/ (apply + %) (count %))
      (partition cnt 1 curve))
    (take cnt (repeat 0))))

(defn convert-rates [curve]
  (map
    (fn [prev curr]
      (let [v
            (->>
              (- curr prev)
              (* (/ 1 prev))
              (* 0.5)
              (+ 0.5))]
        v))
    curve
    (drop 1 curve)))

(defn test-it [rates ws]
  (let [values
        (map
          (fn [input]
            (->
              (ann/FeedForward (list input) ws)
              flatten
              last))
          (partition 5 1 rates))]
    values))

(defn calculateMoney [curve vs money]
  (let [buy-count (int (/ money 100))
        curve (drop 5 curve)
        [money isBuy]
        (reduce
          (fn [[money isBuy] [price rate]]
            (if isBuy
              [(+ money (* price buy-count)) false]
              (if (> rate buy-rate)
                [(- money (* price buy-count)) true]
                [money false])))
          [money false]
          (map (fn [& args] args) curve vs))]
    (if isBuy
      (+ money (* (last curve) buy-count))
      money)))

(defn fast []
  (let [curve
        (reduce
          (fn [all r]
            (let [la
                  (if (> (count all) 0)
                    (first all)
                    100)]
              (cons (+ la (* la (- r 0.075))) all)))
          '()
          (repeatedly k-line-count #(* (rand) 0.14)))
        avg10 (average curve 5)
        avg20 (average curve 10)
        rates
        (map
          (fn [& args] (/ (apply + args) (count args)))
          (convert-rates avg20)
          (convert-rates avg10)
          (convert-rates curve))

        init-weights
        ;(ann/RandWeights 5 5 1)
        '(((4.808192556097727 1.7825236021525466 1.608210082071203 2.1156349495503304 1.5374622502348625 1.6589628354630677) (1.8100758846575082 0.51657025620818 0.30041899078071094 0.22014220256835185 -0.27067053120106493 -0.13603029039211637) (11.901065000126607 4.42661026517148 4.076783752778851 4.943816687457568 4.7786243911947395 4.5354890627901465) (5.548832136282166 2.2436687545792964 1.9812994019536085 1.7597841788025357 1.7329836036020687 2.4985535154061154) (5.437276972146936 1.600671371074915 2.388054007759834 2.169804121695976 1.6002781408397109 2.2310725037032295)) ((9.908141461011681 3.469061590893719 -0.3901192250332968 11.334590770921867 4.290398679358419 4.165030023799448)))


        info (atom [init-weights 0])]

    (go-loop []
      (let [[ws err] @info
            xor-trainset
            '(((0.535 0.535 0.535 0.535 0.535) (1))
              ((0.465 0.465 0.465 0.465 0.465) (0))
              ((0.5 0.5 0.5 0.5 0.5) (0.25)))
            [ws2 err] (ann/Train ws xor-trainset 1 0)]
        (reset! info [ws2 err])
        (if (> err 0.005)
          (do
            (<! (timeout 1))
            (recur))
          (.log js/console (pr-str ws2)))))

    (go-loop [sleepTime 1000]
      (let [[ws err] @info
            vs (test-it rates ws)
            money (calculateMoney curve vs start-money)]
        (draw curve avg10 avg20 vs err money)
        (<! (timeout sleepTime))
        (recur sleepTime)))

    (comment "end let")))

(fast)
