(ns app.main
  (:require
    [test.getSangoCard]
    [test.getMagicCard]
    [test.getGundamCard]
    [test.crusade]
    [test.yugioh]
    [test.gundamWar]
    [test.gundamWarN]))

(def yargs (js/require "yargs"))
  
(defn -main []
  (let [argv
        (->
          yargs
          (.usage "Usage: $0 -c [cmd]")
          (.demand (array "c"))
          (aget "argv"))]
    (condp = (.-c argv)
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
      
      (println "no cmd"))))
;沒有這兩行nodejs跑不動
(enable-console-print!)
(set! *main-cli-fn* -main)