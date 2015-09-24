; 抓三國卡牌的程式
(ns test.main)

(def async (js/require "async"))
(def request (js/require "request"))
(def fs (js/require "fs"))

(def outputDir "output/")
(def host "http://sangokushi-taisen-tcg.segataiwan.com.tw/")
(def packages 
  ["第一彈：魏" "第一彈：蜀" "第一彈：吳" "第一彈：群"])
(def page 2)

(defn parseGroup [content]
  (let [group
        (re-seq
          (->
            (str "<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")
            re-pattern)
          content)]
    (for [[_ pkgName links] group]
      [pkgName links])))
    
(defn parseOne [link]
  (let [group
        (re-seq
          (->
            (str "<li><a href=\"([\\w|.|?|=]+)\">(\\D+)<\\/a><\\/li>")
            re-pattern)
          link)]
    (for [[_ li na] group]
      [li na])))
      
(defn parseCardInfo [content]
  (let [group
        (re-seq
          (->
            (str "<div class=\"cardinfo\">([\\D|\\d]{500})")
            re-pattern)
          content)]
    (map second group)))
    
(defn parseIdAndImage [content]
  (let [ids
        (re-seq
          (->
            (str "<span>([\\d|-]+)<\\/span>")
            re-pattern)
          content)
        imgsrcs
        (re-seq
          (->
            (str "img src\\s*=\\s*\"(.+?)\"")
            re-pattern)
          content)]
    (map
      list
      (map second ids)
      (map 
        (fn [[_ src]]
          (cond
            (= 0 (.indexOf src "http")) src
            :else (str host src))) 
        imgsrcs))))
      
(defn testGetOne []
  (request 
    (str host "cardlist.php")
    (fn [err res body]
      (let [tabs (parseGroup body)
            links 
            (map
              parseOne
              (map second tabs))
            [li na :as test-link] (ffirst links)]
        (request
          (str host li)
          (fn [err res body]
            (let [cardInfo (parseCardInfo body)
                  [id src :as result] (first (parseIdAndImage (first cardInfo)))]
              (-> src
                (request)
                (.pipe (.createWriteStream fs (str outputDir id ".jpg")))
                (.on "close" (fn [] (println "ok")))))))))))

(defn testGetAll []
  (request 
    (str host "cardlist.php")
    (fn [err res body]
      (let [tabs (parseGroup body)
            links 
            (->>
              (map
                parseOne
                (map second tabs))
              (reduce concat '())
              (filter (fn [[_ na]] (some #(= % na) packages)))
              (map (fn [[li na]] [(str li "&page=" page) na])))
            parseCardInfos
            (for [[li na] links]
              (fn [cb]
                (request
                  (str host li)
                  (fn [err res body]
                    (println na li)
                    (if err
                      (cb err)
                      (let [cardInfo 
                            (->>
                              (parseCardInfo body)
                              (map parseIdAndImage)
                              (reduce concat '()))]
                        (js/setTimeout #(cb nil cardInfo) 1000)))))))
            writeImage
            (fn [[id src] cb]
              (println "writing... " src " to " id ".jpg ...")
              (-> src
                (request)
                (.pipe (.createWriteStream fs (str outputDir id ".jpg")))
                (.on "close" #(js/setTimeout cb 2000)))
              (comment "end write"))]
        (.series 
          async
          (clj->js parseCardInfos)
          (fn [err rets]
            (let [allList 
                  (->>
                    (js->clj rets)
                    (reduce concat '())
                    (clj->js))]
              (.eachSeries async allList writeImage 
                (fn [err ret] (println "ok!!"))))))))))

(defn -main [& args]
  (testGetAll))
    
;沒有這兩行nodejs跑不動
(enable-console-print!)
(set! *main-cli-fn* -main)