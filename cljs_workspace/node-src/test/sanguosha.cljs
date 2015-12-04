(ns test.sanguosha
  (:require
    [lib.tool :as t]))
    
(def async (js/require "async"))

(defn url [page]
  (str "http://tcg.sanguosha.com/card/list?page=" page))
    
(defn detail [id]
  (str "http://tcg.sanguosha.com/card/" id "/detail"))
    
(defn test-base []
  (.series async
    (->>
      (map url (range 0 2))
      (map #(partial t/getUrl %))
      (map #(partial t/delayFn 1000 %))
      (clj->js))
    (fn [err datas]
      (.log js/console err))))