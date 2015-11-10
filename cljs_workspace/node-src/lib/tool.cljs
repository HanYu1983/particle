(ns lib.tool)

(def request (js/require "request"))

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