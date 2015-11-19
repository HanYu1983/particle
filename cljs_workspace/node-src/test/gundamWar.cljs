(ns test.gundamWar
  (:require
    [clojure.string :as str]
    [lib.tool :as t]))
    
(def async (js/require "async"))
(def fs (js/require "fs"))

(def gundamUrl "http://www.shiner96500.com/cards/gundamwar/search2.php")
(def downloadDir "downloadPages/")
(def output "gundamWarList.json")

(defn downloadPage [delayTime pageNum cb]
  (t/postUrl
    gundamUrl
    {"page" pageNum "rr2" "where true"}
    (fn [err ret]
      (if err
        (cb err)
        (.writeFile fs
          (str downloadDir pageNum ".html")
          ret
          (fn [err]
            (if err
              (cb err)
              (do
                (.log js/console "write file " pageNum ".html")
                (js/setTimeout cb delayTime)))))))))

(defn downloadPages [start cnt]
  (.eachSeries async 
    (clj->js (range start (+ start cnt)))
    (partial downloadPage 2000)
    (fn [err rets]
      (.log js/console err))))
      
      
(def regex-g
  (->
    (str "<center><table width='100%'>([\\s\\S]+?)<\\/center>")
    re-pattern))
    
(def regex-id
  (->
    (str "<td align=[\"']?center[\"']? bgcolor=[\"']?(#\\w{6})[\"']? width=[\"']?\\d+ height=[\"']?\\d+[\"']?\\s*>\\s+(\\S+)\\s+<\\/td>")
    re-pattern))
    
(def regex-name
  (->
    (str "<td bgcolor=[\"']?#.{6}[\"']width=[\"']?\\d+[\"']?>(.+)<\\/td>")
    re-pattern))
    
(def regex-belong
  (->
    (str "<td colspan=\"3\" valign=\"top\" align=\"right\" height=\"40\">\\s+(.+)<\\/td>")
    re-pattern))
    
(def regex-context
  (->
    (str "<td  colspan=\"3\" valign=\"top\" align=\"left\" height=\"120\" >([\\s\\S]+?)<\\/td>")
    re-pattern))
    
(def regex-cost
  (->
    ;(str "國力資源：(\\d\\.?\\d? - \\d+ - \\d+)")
    (str "國力資源：(\\W?\\d.?\\W?\\d? - \\d - \\d)")
    re-pattern))
    
(def regex-atkadj
  (->
    (str "戰鬥修正：(\\d) \\/ (\\d) \\/ (\\d)")
    re-pattern))
    
(def regex-atk
  (->
    (str "戰鬥力：(\\d+\\/?\\d?) \\/ (\\d+\\/?\\d?) \\/ (\\d+\\/?\\d?)")
    re-pattern))
    
(def regex-area
  (->
    (str "地形適性：([宇宙・地球]+)")
    re-pattern))
    
(def regex-image
  (->
    (str "card\\.php\\?img=image\\/\\d+\\/(\\d+\\.jpg)")
    re-pattern))
    
(defn parseGroup [group]
  (let [ids (map rest (re-seq regex-id group))
        images (map second (re-seq regex-image group))
        names (map second (re-seq regex-name group))
        pkgs (map second (re-seq regex-belong group))
        context (map second (re-seq regex-context group))]
    (when-not (apply = (map count [ids names pkgs context]))
      (throw "data lost!!"))
    (map
      (fn [[color id] image name pkg context]
        (let [cost (first (map second (re-seq regex-cost context)))
              atkadj (clj->js (first (map rest (re-seq regex-atkadj context))))
              atk (clj->js (first (map rest (re-seq regex-atk context))))
              area (first (map second (re-seq regex-area context)))
              colorMap
              {
                "#FAEBD7" "茶"
                "#B1E3FE" "藍"
                "#E7C0FE" "紫"
                "#F5F5F5" "白"
                "#BCF3C4" "綠"
                "#FFC1C1" "紅"
                "#C4C4C4" "黑"
              }]
          {
            "id" image
            "color" (get colorMap color)
            "name" (str/trim (str/replace name #"&nbsp;" ""))
            "pkg" (str/trim pkg)
            "cost" (when cost (str/replace cost #" " ""))
            "atk" (or atk atkadj)
            "area" (when area (str/replace area #"・" "/"))
            "card-id" id
            "context" context
          }))
      ids
      images
      names
      pkgs
      context)))
    
(defn parsePage [content]
  (let [ret (map (comp parseGroup second) (re-seq regex-g content))]
    (flatten ret)))
    
(defn parseInfo []
  (.waterfall async
    (array
      (fn [cb]
        (.parallel async
          (clj->js
            (map #(partial t/getFile (str "downloadPages/" % ".html")) (range 1 214)))
           cb))
      (fn [pages cb]
        (cb 
          nil 
          (->
            (reduce (fn [all curr] (concat all (parsePage curr))) '() pages)
            (clj->js)))))
    (fn [err ret]
      (if err
        (.log js/console err)
        (.writeFile fs
          output
          (.stringify js/JSON ret)
          (fn [err]
            (if err
              (println err)
              (println "ok!"))))))))