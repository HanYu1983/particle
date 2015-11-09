(ns test.getMagicCard)
; 這個程式可以使用，但所用的網站會阻擋IP，所以目前這個程式沒有作用

(def async (js/require "async"))
(def request (js/require "request"))
(def fs (js/require "fs"))

(defn cardPath [id]
  (str "http://桌遊.net/mtg/singles_market/card.php?num=" id))
  
(defn getFile [filename cb]
  (.readFile fs
    filename
    "utf8"
    (fn [err data]
      (if err
        (.writeFile fs
          filename
          "{}"
          (fn [err]
            (cb err {"images" {}})))
        (cb nil (js->clj (.parse js/JSON data)))))))
        
        
(defn getUrl [url cb]
  (request 
    url
    (fn [err res body]
      (if err
        (cb err)
        (cb nil body)))))
        
(defn parseImageSrc [content]
  (let [tags
        (re-seq
          (->
            (str "<td valign=\"TOP\" align=\"center\" width=\"400\">.+\\s+<img src\\s*=\\s*\"(.+?)\" alt=\"(.+?)\"")
            re-pattern)
          content)]
    (->
      (for [[_ src title] tags]
        [title src])
      first)))
      
(defn getKeyAndImageSrc [id cb]
  (getUrl 
    (cardPath id)
    (fn [err data]
      (if err
        (cb err)
        (let [[_ src :as ret] (parseImageSrc data)]
          (cb nil [id src]))))))
          
(defn appendTo [a d id cb]
  (getKeyAndImageSrc id
    (fn [err data]
      (if err
        (cb err)
        (let [[id src] data]
          (println data)
          (reset! a (assoc-in @a ["images" id] src))
          (js/setTimeout cb d))))))
  
(defn main [start cnt delay]
  (getFile "magic.json"
    (fn [err data]
      (if err
        (println err)
        (let [da (atom data)]
          (.eachSeries async (clj->js (range start (+ start cnt))) (partial appendTo da delay) 
            (fn [err]
              (println err)
              (.writeFile fs
                "magic.json"
                (->>
                  (clj->js @da)
                  (.stringify js/JSON))
                (fn [err]
                  (if err
                    (println err)
                    (println "ok!"))))))))))
                    
  (comment "end"))