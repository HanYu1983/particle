(ns test.stock4
  (:require
    [goog.string :as gstr]))

(defn stock-url [id startdate start num]
  (gstr/format
    "https://www.google.com/finance/historical?q=TPE:%s&startdate=%s&start=%d&num=%d"
    id
    startdate
    start
    num))

(defn main []
  (.log js/console (stock-url 2330 "2014/1/1" 0 30)))
