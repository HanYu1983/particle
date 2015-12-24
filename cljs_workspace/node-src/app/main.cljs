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
    [test.ws]
    [test.yoyo]
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
      "downloadUrl2"
      (.waterfall async
        (array
          (partial t/getFile "config/crusade.json")
          (fn [file cb]
            (let [configJson (.parse js/JSON file)
                  {
                    type :type
                    datas :data
                    p :path
                    :as config
                  } 
                  (t/parseDownloadConfig2 configJson)]
              (.log js/console (pr-str config))
              (.eachSeries async
                (clj->js datas)
                (fn [data cb]
                  (.log js/console data)
                  (.waterfall async
                    (array
                      (partial 
                        t/postUrl p data)
                      (fn [res cb]
                        (.log js/console "return")
                        (.log js/console res)
                        ;(.log js/console "write")
                        ;(.writeFile fs
                        ;  (str 
                        ;    (.-dir config)
                        ;    (->
                        ;      url
                        ;      (str/split #"/")
                        ;      last)
                        ;  ".html")
                        ;  res
                        ;  (cb))
                        (cb)))
                    (fn [err]
                      (if err
                        (cb err)
                        (js/setTimeout cb 3000))))
                    (comment "end fn"))
                  cb)
              (comment "end let"))))
        (fn [err]
          (.log js/console "end")))
    
      "downloadUrl"
      (.waterfall async
        (array
          (partial t/getFile "config/crusade.json")
          (fn [file cb]
            (let [config (.parse js/JSON file)
                  type (.-type config)
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
      (do
        (test.yugioh/parseFile :anime)
        (test.yugioh/parseFile :en)
        (test.yugioh/parseFile :ch))
    
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
      
      "crusade.printFileList"
      (test.crusade/printFileList)
      
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
      
      "ws.test"
      (test.ws/test-base)
      
      "yoyo.parseInfo"
      (test.yoyo/parseInfo (.-n argv))
      
      "yoyo.getImage"
      (test.yoyo/getImage (.-n argv))
      
      (println "no cmd"))))
;沒有這兩行nodejs跑不動
(enable-console-print!)
(set! *main-cli-fn* -main)