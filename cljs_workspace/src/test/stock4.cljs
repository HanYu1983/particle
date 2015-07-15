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
      (aset ctx "strokeStyle" "black")
      (aset ctx "lineWidth" 2)
      (.beginPath ctx)
      (.moveTo ctx (* idx offset-x) (pos-y low))
      (.lineTo ctx (* idx offset-x) (pos-y high))
      (.stroke ctx)

      (aset ctx "strokeStyle" (if (> close open) "red" "black"))
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
    (fn [{kline :kline turn :turn avgs :avgs bias :bias :as appctx}]
      (aset ctx "fillStyle" "yellow")
      (.fillRect ctx 0 0 w h)

      ;(doseq [[bia-cnt bia] bias]
      ;  (draw-bias ctx w h kline "#aaaaaa" bia))

      ;(doseq [[avg-cnt avg] avgs]
      ;  (draw-avg ctx w h kline "#aaaaaa" avg))

      (draw-line ctx w h kline)
      (when turn
        (draw-turn ctx w h kline turn))
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
    (if (zero? (count group))
      nil
      (cons [date open high low close volume] (lazy-seq (average cnt (drop cnt kline)))))))

(defn check-turn [kline]
  (if (>= (count kline) 3)
    (let [[_ _ _ _ c1 _ :as l1] (first kline)
          [date _ _ _ c2 _ :as l2] (second kline)
          [_ _ _ _ c3 _ :as l3] (nth kline 2)
          rate (/ (- c1 c2) c2)
          rate2 (/ (- c2 c3) c3)
          isReturn (neg? (* rate rate2))]
      (if isReturn
        (cons date (lazy-seq (check-turn (rest kline))))
        (check-turn (rest kline))))))
  

(defn main []

  (let [draw (draw (.getElementById js/document "canvas"))
        onSystem (chan)
        onView (chan)]

    (.subscribe js/window.onView
      (fn [data]
        (go (>! onView (js->clj data)))))

    (go
      (let [[err infos] (<! (stock-info nil 2330 "2014/1/1" 0 200))]
        (if err
          (js/alert err)
          (>! onSystem [:loaded infos]))))

    (go-loop [{cnt :cnt :as ctx} {:cnt 100}]
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
