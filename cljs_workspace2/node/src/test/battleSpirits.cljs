(ns test.battleSpirits
  (:require
    [lib.tool :as t]))
    
(def _ (js/require "underscore"))
(def request (js/require "request"))
(def async (js/require "async"))
(def fs (js/require "fs"))

(def cardInfoUrl "http://tw.battlespirits.com/mydeck/request.php")
(defn imageUrl [id]
  (str "http://tw.battlespirits.com/image/card_serch/card/" id ".jpg"))

(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/battleSpiritsList/")
(def outputImageDir "output/battleSpirits/")

(def prods
  [
    "62003"
    "62007"
    "62008"
    "62009"
    "62010"
    "62012"
    "62014"
    "62015"
    "62017"
    "62020"
    "62021"
    "62022"
    "62023"
    "62025"
    "62026"
    "62027"
    "62028"
    "62029"
    "62032"
    "62037"
    "62038"
    "62040"
    "62041"
    "62045"
    "62049"
    "62051"
    "62055"
    "62057"
    "62060"
    "62063"
    "62068"
    "62071"
    "62073"
    "62019"
    "62046"
    "62050"
    "62056"
    "62064"
    "62065"
    "62069"
    "62072"
    "62011"
    "62013"
    "62018"
    "62024"
    "62030"
    "62031"
    "62033"
    "62034"
    "62035"
    "62036"
    "62039"
    "62043"
    "62044"
    "62047"
    "62048"
    "62053"
    "62054"
    "62059"
    "62061"
    "62062"
    "62066"
    "62067"
    "62070"
    "62075"
    "62016"
    "62074"
    "62058"
    "62052"
    "62042"
    "62901"
  ])


(defn fetchInfo [id cb]
  (.log js/console "fetchInfo" id)
  (t/postUrl 
    cardInfoUrl
    {
      "cmdno" 1
      "prod" id
    }
    (fn [err ret]
      (.writeFile fs
        (str output id ".json")
        (js/JSON.stringify (.parse js/JSON ret))
        (fn [err]
          (.log js/console "write file" id)
          (if err
            (cb err)
            (js/setTimeout (partial cb nil) 3000)))))))
            
(defn fetchImage [id cb]
  (.log js/console "fetchImage" id)
  (-> id
    (imageUrl)
    (request)
    (.pipe (.createWriteStream fs (str outputImageDir id ".jpg")))
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
        (let [ids 
              (->>
                (map #(.-info_27 %) datas)
                (clj->js))]
          (.eachSeries async ids fetchImage
            (cb nil)))))
    (fn [err rets]
      (.log js/console "fetchAllImage done!"))))
  

(defn fetchAll []
  (.eachSeries async
    (clj->js prods)
    fetchInfo)
    (fn [err]
      (.log js/console err)))

(defn test-base []
  (fetchInfo 62008
    (fn [err]
      (.log js/console err))))

