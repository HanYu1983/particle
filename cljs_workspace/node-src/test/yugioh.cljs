(ns test.yugioh)

(def fs (js/require "fs"))
(def SqliteDB
  (->
    (js/require "sqlite3")
    (.verbose)
    (.-Database)))

(def db (SqliteDB. "yugiohDoc/cards.cdb"))
(def outputFile "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/cardPackage/yugioh/cardlist.json")

(defn parseCDB []
  (.serialize db 
    (fn []
      (let [output (array)]
        (.each db "select count(*) as cnt from datas,texts where datas.id=texts.id"
          (fn [err row]
            (let [total (.-cnt row)
                  all (atom [])]
              (.each db "select * from datas,texts where datas.id=texts.id"
                (fn [err row]
                  (swap! all conj row)
                  (when (= (count @all) total)
                    (.writeFile fs
                      outputFile
                      (js/JSON.stringify (clj->js @all))
                      (fn [err]
                        (.log js/console "write file " outputFile "!")))))))))))))