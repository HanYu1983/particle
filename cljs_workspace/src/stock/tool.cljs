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
  (if (seq? kline)
    (map high kline)
    (let [[_ _ high _ _ _] kline]
      high)))

(defn close [kline]
  (if (seq? kline)
    (map close kline)
    (let [[_ _ _ _ close _] kline]
      close)))
      
(defn low [kline]
  (if (seq? kline)
    (map low kline)
    (let [[_ _ _ low _ _] kline]
      low)))
    
(defn volume [kline]
  (if (seq? kline)
    (map volume kline)
    (let [[_ _ _ _ _ volume] kline]
      volume)))
    
(defn mid [kline]
  (if (seq? kline)
    (map mid kline)
    (let [[_ _ high low _ _] kline]
      (/ (+ high low) 2))))
      