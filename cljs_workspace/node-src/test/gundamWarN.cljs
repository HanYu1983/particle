(ns test.gundamWarN
  (:require
    [lib.tool :as t]))
    
(def fs (js/require "fs"))
(def async (js/require "async"))
(def request (js/require "request"))

(def cardInfoUrl "http://www.carddass.com/cdmasters/nexa/cardlist/controller/request.php")
(defn imageUrl [prod name]
  (str "http://www.carddass.com/cdmasters/nexa/images/cardlist/" prod "/" name ".png"))
(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/gundamWarNexAList/")
(def outputImageDir "output/gundamWarNexA/")
(def clusadeUrl "http://www.carddass.com/crusade/cardlist/request.php")

(def prods 
  [
    "179030" 
    "179029" 
    "179028"
    "179027"
    "179026"
    "179025"
    "179024"
    "179023"
    "179022"
    "179021"
    "179020"
    "179019"
    "179018"
    "179017"
    "179016"
    "179015"
    "179014"
    "179013"
    "179012"
    "179011"
    "179010"
    "179009"
    "179008"
    "179007"
    "179006"
    "179005"
    "179004"
    "179003"
    "179002"
    "179001"
    "179901"
  ])
  
(defn fetchInfo [id cb]
  (t/postUrl 
    cardInfoUrl
    {
      "cmdno" 1
      "prod" id
    }
    (fn [err ret]
      (.writeFile fs
        (str "gundamWarN" id ".json")
        (js/JSON.stringify (.parse js/JSON ret))
        (fn [err]
          (cb err))))))
          

(defn fetchImage [[prod id] cb]
  (.log js/console (str "fetchImage " (imageUrl prod id)))
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
                    (vector (.-prodid data) (.-info_25 data)))
                  datas)
                (clj->js))]
          (.eachSeries async pids fetchImage
            (cb nil))
            
            )))
    (fn [err rets]
      (.log js/console "fetchAllImage done!"))))
      
(defn test-base []
  (fetchInfo "179030"
    (fn [err]
      (.log js/console err))))

