(ns lib.tool
  (:require
    [clojure.string :as str]
    [goog.string :as gstring]
    [goog.string.format]))

(def request (js/require "request"))
(def fs (js/require "fs"))
(def async (js/require "async"))
(def rx (js/require "rx"))

(defn getUrl [url cb]
  (request 
    url
    (fn [err res body]
      (if err
        (cb err)
        (cb nil body)))))
        
(defn postUrl [url data cb]
  (->
    request
    (.post 
      (js-obj
        "url" url
        "formData" (clj->js data))
      (fn [err res body]
        (if err
          (cb err)
          (cb nil body))))))
          
          
(defn getFile [filename cb]
  (.readFile fs
    filename
    "utf8"
    (fn [err data]
      (if err
        (cb err)
        (cb nil (str/replace data #"\r" ""))))))
        
        
(defn delayFn [t f cb]
  (f 
    (fn [err data]
      (if err
        (cb err)
        (js/setTimeout #(cb nil data) t)))))


(defn parseDownloadConfig [json]
  (condp = (.-type json)
    "range"
    (let [values (js->clj (.-value json))
          pattern (.-pattern json)]
      (for [v (apply range values)]
        (gstring/format pattern v)))
    []))
    
(defn parseDownloadConfig2 [json]
  {
    :type (.-type json)
    :data
    (let [seqs (.-seq json)
          seqvs (.-values seqs)
          option (.-option json)]
      (->>
        (condp = (.-type seqs)
          "ary"
          (map
            (partial apply gstring/format option)
            (js->clj seqvs))
          "range"
          (map
            (partial apply gstring/format option)
            (range (aget seqvs 0) (aget seqvs 1)))
          {})
        (map #(.parse js/JSON %))))
    :path (.-path json)
  })