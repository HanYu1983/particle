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
  "22001.json"
  "22002.json"
  "22003.json"
  "22004.json"
  "22005.json"
  "22006.json"
  "22007.json"
  "22008.json"
  "22009.json"
  "22010.json"
  "22011.json"
  "22012.json"
  "22013.json"
  "22014.json"
  "22015.json"
  "22016.json"
  "22017.json"
  "22018.json"
  "22019.json"
  "22020.json"
  "22021.json"
  "22022.json"
  "22023.json"
  "22024.json"
  "22025.json"
  "22026.json"
  "22027.json"
  "22028.json"
  "22029.json"
  "22034.json"
  "22035.json"
  "22036.json"
  "22037.json"
  "22038.json"
  "22039.json"
  "22040.json"
  "22041.json"
  "22042.json"
  "22043.json"
  "22044.json"
  "22045.json"
  "22901.json"
  ])
(defn printFileList []
  (.readdir fs output
    (fn [err files]
      (.log js/console files))))
            
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
        (.map async (clj->js (map #(str output %) prods)) t/getFile cb))
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



