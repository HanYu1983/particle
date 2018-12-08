(ns test.dragonZ
  (:require
    [lib.tool :as t]))

(def request (js/require "request"))
(def async (js/require "async"))
(def fs (js/require "fs"))
(def outputImageDir "output/dragonZ/")
(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/dragonZList.json")

(defn imageUrl [id]
  (str "http://www.dbztcg.com/Repository/Checklist/Images/" id ".jpg"))
  
(def regex-img
  (->
    (str "Repository\\/Checklist\\/Images\\/.+\\.jpg")
    re-pattern))
    
(def regex-g
  (->
    (str "(<tr id=\"sticker-\\w+\"[\\s\\S]+?<\\/tr>)")
    re-pattern))
    
(def regex-subg
  (->
    (str "<td>([\\s\\S]*?)<\\/td>")
    re-pattern))
    
(defn parseGroup [group]
  (->
    (->>
      (map rest (re-seq regex-subg group))
      (flatten)
      (zipmap ["id" "imgInfo" "name" "type" "rarity" "descrition" "edition"]))
    (dissoc "imgInfo")))
    
(defn parsePage [content]
  (let [ret (map (comp parseGroup second) (re-seq regex-g content))]
    ret))
    
(defn fetchImage [id cb]
  (.log js/console (str "fetchImage" id ".jpg"))
  (->
    (imageUrl id)
    (request)
    (.pipe (.createWriteStream fs (str outputImageDir id ".jpg")))
    (.on "close" 
      (fn [] 
        (.log js/console "ok for fetchImage" id)
        (js/setTimeout cb 3000)))))

(defn getJson [cb]
  (t/getFile "dragonZDoc/dragonballZList.html"
    (fn [err data]
      (if err
        (cb err)
        (cb nil (parsePage data))))))
        
(defn fetchAllImage []
  (.waterfall async
    (array
      getJson
      (fn [datas cb]
        (let [ids (clj->js (map #(get % "id") datas))]
          (.eachSeries async ids fetchImage
             (partial cb nil)))))
    (fn [err rets]
      (.log js/console "fetchAllImage done!"))))
    
(defn makeJson []
  (.waterfall async
    (array
      getJson
      (fn [datas cb]
        (.writeFile fs
          output
          (.stringify js/JSON (clj->js datas))
          (fn [err]
            (cb err)))))
    (fn [err]
      (.log js/console "ok!"))))
    
(defn test-base []
  (t/getFile "dragonZDoc/dragonballZList.html"
    (fn [err data]
      (let [formated (parsePage data)]
        (.log js/console (clj->js formated))))))
      