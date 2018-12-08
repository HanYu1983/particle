(ns test.getGundamCard
  (:require
    [lib.tool :as t]))


(def gundamUrl "http://www.shiner96500.com/cards/gundamwar/search2.php")

(def regex-id
  (->
    (str "<td align=[\"']?center[\"']? bgcolor=[\"']?#\\w{6}[\"']? width=[\"']?\\d+ height=[\"']?\\d+[\"']?\\s*>\\s+(\\S+)\\s+<\\/td>")
    re-pattern))
    
(def regex-g
  (->
    (str "<center><table width='100%'>([\\s\\S]+?)<\\/center>")
    re-pattern))
    
(defn getInfo []
  (t/postUrl
    gundamUrl
    {"page" 2 "rr2" "where true"}
    (fn [err ret]
      (let [ids (map second (re-seq regex-g ret))]
        (.log js/console (pr-str (first ids)))
        (.log js/console (count ids))))))