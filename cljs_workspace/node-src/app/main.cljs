(ns app.main
  (:require
    [test.getSangoCard]))

(def yargs (js/require "yargs"))
  
(defn -main []
  (let [argv
        (->
          yargs
          (.usage "Usage: $0 -c [cmd]")
          (.demand (array "c"))
          (aget "argv"))]
    (condp = (.-c argv)
      "getMagicCard"
      (test.getSangoCard/testGetAll)
      
      (println "no cmd"))))
;沒有這兩行nodejs跑不動
(enable-console-print!)
(set! *main-cli-fn* -main)