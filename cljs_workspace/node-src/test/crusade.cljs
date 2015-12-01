(ns test.crusade
  (:require
    [lib.tool :as t]))
    
(def _ (js/require "underscore"))
(def request (js/require "request"))
(def async (js/require "async"))
(def fs (js/require "fs"))

(defn imageUrl [prod id]
  (str "http://www.carddass.com/crusade/image/cardlist/" prod "/" id ".jpg"))

(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/crusadeList/")
(def outputImageDir "output/crusade/")

(def prods
  [
  "123901"
  "123001"
  "221901"
  "240201"
  "86004"
  "86011"
  "86901"
  "123002"
  "193001"
  "235001"
  "240202"
  "86005"
  "86012"
  "123003"
  "193002"
  "235002"
  "240203"
  "86006"
  "86013"
  "123004"
  "193003"
  "235901"
  "240901"
  "86007"
  "86014"
  "123005"
  "193004"
  "240001"
  "86001"
  "86008"
  "86015"
  "123006"
  "193901"
  "240002"
  "86002"
  "86009"
  "86016"
  "123101"
  "221001"
  "240101"
  "86003"
  "86010"
  "86017"
  ])
  
            
(defn fetchImage [[prod id] cb]
  (.log js/console (str "fetchImage" prod "_" id ".jpg"))
  (->
    (imageUrl prod id)
    (request)
    (.pipe (.createWriteStream fs (str outputImageDir prod "_" id ".jpg")))
    (.on "close" 
      (fn [] 
        (.log js/console "ok for fetchImage" id)
        (js/setTimeout cb 3000)))))
      
(defn fetchAllImage []
  (.waterfall async
    (array
      (fn [cb]
        (.map async (clj->js (map #(str output % ".json") prods)) t/getFile cb))
      (fn [datas cb]
        (let [alls
              (->>
                (js->clj datas)
                (map #(.parse js/JSON %))
                (map #(.-data %))
                (reduce #(concat %1 %2) '()))]
          (.log js/console "start fetch image length:" (count alls))
          (cb nil alls)))
      (fn [datas cb]
        (let [pids 
              (->>
                (map 
                  (fn [data]
                    (vector (.-prodid data) (.-info_18 data)))
                  datas)
                (clj->js))]
          (.eachSeries async pids fetchImage
            (cb nil))
            
            )))
    (fn [err rets]
      (.log js/console "fetchAllImage done!"))))



