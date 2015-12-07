(ns app.main
  (:require
    [test.getSangoCard]
    [test.getMagicCard]
    [test.getGundamCard]
    [test.crusade]
    [test.yugioh]
    [test.gundamWar]
    [test.gundamWarN]
    [test.dragonZ]
    [test.sanguosha]
    [lib.tool :as t]
    [clojure.string :as str]))

(def yargs (js/require "yargs"))
(def async (js/require "async"))
(def fs (js/require "fs"))
  
(defn -main []
  (let [argv
        (->
          yargs
          (.usage "Usage: $0 -c [cmd]")
          (.demand (array "c"))
          (aget "argv"))]
    (condp = (.-c argv)
      "downloadUrl"
      (.waterfall async
        (array
          (partial t/getFile "config/sgs.json")
          (fn [file cb]
            (let [config (.parse js/JSON file)
                  urls (t/parseDownloadConfig config)
                  t (.-delay config)]
              (.eachSeries async
                (clj->js urls)
                (fn [url cb]
                  (.log js/console url)
                  (.waterfall async
                    (array
                      (partial t/getUrl url)
                      (fn [data cb]
                        (.log js/console "write")
                        (.writeFile fs
                          (str 
                            (.-dir config)
                            (->
                              url
                              (str/split #"/")
                              last)
                            ".html")
                          data
                          (cb))))
                    (fn [err]
                      (if err
                        (cb err)
                        (js/setTimeout cb t))))
                    (comment "end fn"))
                cb))))
        (fn [err]
          (.log js/console err)))
    
      "parseYugiohCDB"
      (test.yugioh/parseFile)
    
      "getSangoCard"
      (test.getSangoCard/testGetAll)
      
      "getMagicCard"
      (test.getMagicCard/main 110 10 1000)
      
      "getGundamCard"
      (test.getGundamCard/getInfo)
      
      "downloadGundamPage"
      (test.gundamWar.downloadPages 213 1)
      
      "gundamWar.parseInfo"
      (test.gundamWar.parseInfo 213 1)
      
      "bs.fetch"
      (test.battleSpirits/fetchAll)
      
      "bs.fetchImage"
      (test.battleSpirits/fetchAllImage)
      
      "crusade.fetchImage"
      (test.crusade/fetchAllImage)
      
      "gundamWarN.test"
      (test.gundamWarN/test-base)
      
      "gundamWarN.fetchImage"
      (test.gundamWarN/fetchAllImage)
      
      "dragonZ.test"
      (test.dragonZ/test-base)
      
      "dragonZ.fetchImage"
      (test.dragonZ/fetchAllImage)
      
      "dragonZ.makeJson"
      (test.dragonZ/makeJson)
      
      "sgs.test"
      (test.sanguosha/test-base)
      
      (println "no cmd"))))
;沒有這兩行nodejs跑不動
(enable-console-print!)
(set! *main-cli-fn* -main)