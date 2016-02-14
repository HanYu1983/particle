(ns app.main)

(defn -main []
  (.log js/console "cljs"))
  
;沒有這兩行nodejs跑不動
(enable-console-print!)
(set! *main-cli-fn* -main)