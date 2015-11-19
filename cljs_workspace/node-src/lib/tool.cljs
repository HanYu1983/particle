(ns lib.tool
  (:require
    [clojure.string :as str]))

(def request (js/require "request"))
(def fs (js/require "fs"))

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
