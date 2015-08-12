(ns stock.tool
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! close! chan]]
    [clojure.string :as str]))


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
            

(defn high [kline]
  (map
    (fn [[_ _ high _ _ _]] high)
    kline))

(defn low [kline]
  (map
    (fn [[_ _ _ low _ _]] low)
    kline))
    
(defn close [kline]
  (map
    (fn [[_ _ _ _ close _]] close)
    kline))
    
(defn volume [kline]
  (map
    (fn [[_ _ _ _ _ volume]] volume)
    kline))
    
(defn mid [kline]
  (map
    (fn [[_ _ high low _ _]] (/ (- high low) 2))
    kline))