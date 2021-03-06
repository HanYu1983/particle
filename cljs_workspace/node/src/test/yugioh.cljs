(ns test.yugioh
  (:require
    [clojure.string :as string]))

(def async (js/require "async"))
(def fs (js/require "fs"))
(def SqliteDB
  (->
    (js/require "sqlite3")
    (.verbose)
    (.-Database)))

(def config
  {
    :en
    {
      :db "yugiohDoc/en/cards.cdb"
      :strings "yugiohDoc/en/strings.conf"
      :output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListEn.json" 
    }
    :ch
    {
      :db "yugiohDoc/ch/cards.cdb"
      :strings "yugiohDoc/ch/strings.conf"
      :output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListCh.json" 
    }
    :tf
    {
      :db "yugiohDoc/cards-tf.cdb"
      :strings "yugiohDoc/en/strings.conf"
      :output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListTf.json" 
    }
    :anime
    {
      :db "yugiohDoc/en/anime.cdb"
      :strings "yugiohDoc/en/strings.conf"
      :output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListAnime.json" 
    }
  })

(defn parseStrings [stringsPath cb]
  (.readFile fs
    stringsPath
    "utf8"
    (fn [err data]
      (let [parseRow
            (fn [row]
              (let [[_ value text] (js->clj (.split row " "))]
                [value text]))
            rows (.split data "\n")
            formated
            (reduce
              (fn [all row]
                (if (zero? (.lastIndexOf row "#" 0))
                  all
                  (conj all (parseRow row))))
              {}
              (js->clj rows))]
        (cb nil formated)))))
        
        
(defn formatTemplate [i cnt strs attr]
  (reduce
    (fn [all idx]
      (let [mask (bit-shift-left 1 idx)]
        (if (> (bit-and mask attr) 0)
          (conj all (get strs (str (+ i idx))))
          all)))
    []
    (range 0 cnt)))

(def formatAttribute (partial formatTemplate 1010 7))
(def formatRace (partial formatTemplate 1020 30))
(def formatType (partial formatTemplate 1050 30))

(defn parseCDB [db cb]
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
                    (cb nil @all)  
                    (comment "end when")))))))))))
                    
(defn parseFile [lan]
  (.parallel async
    (array
      (partial parseStrings (get-in config [lan :strings]))
      (partial parseCDB (SqliteDB. (get-in config [lan :db]))))
    (fn [err rets]
      (let [strs (aget rets 0)
            cards (aget rets 1)
            formatObj
            (fn [obj]
              (set!
                (.-id obj)
                (->
                  (.-id obj)
                  (.toString)))
              (set!
                (.-lscale obj)
                (->
                  (.-level obj)
                  (bit-shift-right 24)
                  (bit-and 0xff)))
              (set!
                (.-rscale obj)
                (->
                  (.-level obj)
                  (bit-shift-right 16)
                  (bit-and 0xff)))
              (set!
                (.-level obj)
                (->
                  (.-level obj)
                  (bit-and 0xff)))
              (set! 
                (.-attribute obj) 
                (->
                  (formatAttribute strs (.-attribute obj))
                  (clj->js)
                  (.join "|")))
              (set! 
                (.-type obj) 
                (->
                  (formatType strs (.-type obj))
                  (clj->js)
                  (.join "|")))
              (set! 
                (.-race obj) 
                (->
                  (formatRace strs (.-race obj))
                  (clj->js)
                  (.join "|")))
              obj)
            formatCards (map formatObj cards)]
        (.writeFile fs
          (get-in config [lan :output])
          (.stringify js/JSON (clj->js formatCards) nil "\t")
          (fn [err]
            (.log js/console "write file " (get-in config [lan :output]) "!")))))))