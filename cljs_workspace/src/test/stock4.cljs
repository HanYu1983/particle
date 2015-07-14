(ns test.stock4
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [clojure.string :as str]
    [cljs.core.async :refer [>! <! close! chan]]))

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
      [date open high low close volume])))

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

(defn main []
  (go
    (let [[err infos] (<! (stock-info nil 2330 "2014/1/1" 0 200))]
      (.log js/console (pr-str infos)))))

(main)
