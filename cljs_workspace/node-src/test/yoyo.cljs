(ns test.yoyo
  (:require
    [clojure.string :as str]))

(def rx (js/require "rx"))
(def fs (js/require "fs"))
(def _ (js/require "underscore"))
(def request (js/require "request"))

(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/wsList/")
(def outputImageDir "output/ws/")

(defn imageUrl [ori]
  (str "http://yuyu-tei.jp"
    (str/replace ori #"90_126" "front")))

(defn readdir [filepath]
  (.create rx.Observable 
    (fn [obs]
      (.readdir fs filepath
        (fn [err data]
          (if err
            (.onError obs err)
            (do
              (doall (for [da (js->clj data)]
                (.onNext obs da)))
              (.onCompleted obs))))))))
              
(defn readfile [filepath]
  (.create rx.Observable
    (fn [obs]
      (.readFile fs
        filepath
        "utf8"
        (fn [err data]
          (if err
            (.onError obs err)
            (doto obs
              (.onNext data)
              (.onCompleted))))))))
              
              
(defn parseTrigger [data]
  (let [triggerMark
        {
          "icon_tri_0.png" "なし"
          "icon_tri_1.png" "ソウル"
          "icon_tri_2.png" "ソウル"
          "icon_tri_B.png" "プール"
          "icon_tri_1A.png" "ソウル/リターン"
          "icon_tri_C.png" "カムバック"
          "icon_tri_D.png" "ドロー"
          "icon_tri_1E.png" "ソウル/ショット"
          "icon_tri_F.png" "トレジャー"
          "icon_tri_1G.png" "ソウル/ゲート"
        }]
    (update-in data [11] 
      (fn [data]
        (->>
          (map 
            (fn [k]
              [
                k
                (count (re-seq (re-pattern k) data))
              ])
            (keys triggerMark))
          (reduce
            (fn [all [k cnt]]
              (if (pos? cnt)
                (cons (get triggerMark k) all)
                all))
            [])
          (str/join ","))))))
      
(defn parseHtml [data]
  (.create rx.Observable 
    (fn [obs]
      ; 注意：它每一個彈的格式可能不一樣，看情況也許會須要重新定義regular
      (let [group 
            (map (comp parseTrigger (partial apply vector) rest) 
              (re-seq 
                #"[\s\S]+?<img src=\"(.+\.jpg)\" height=\"124\".+?/>[\s\S]+?<div class=\"data_box\">[\s\S]+?\"id\">(.+)</span> (.+?) (.+?)</p>[\s\S]+?<td class=\"w200\">(.+?)</td>[\s\S]+?<td class=\"w150\">(.+?)</td>[\s\S]+?<td class=\"w150\">(.+?)</td>[\s\S]+?<td class=\"w70\">(.+?)</td>[\s\S]+?<td class=\"w70\">(.+?)</td>[\s\S]+?<td class=\"w90\">(.+?)</td>[\s\S]+?<td class=\"w60\">(.+?)</td>[\s\S]+?<td class=\"w90\">([\s\S]+?)</td>[\s\S]+?<td class=\"text\">(.+?)</td>"
                data))]
        (doall
          (for [obj group]
            (.onNext obs (apply array obj))))
        (.onCompleted obs)))))

(defn writefile [output data]
  (.log js/console (.-length data))
  (.create rx.Observable
    (fn [obs]
      (.writeFile fs 
        output
        (.stringify js/JSON data nil "\t")
        (fn [err]
          (if err
            (.onError obs err)
            (doto obs
              (.onCompleted))))))))

(defn fetchImage [outputImageDir url]
  (.log js/console url)
  (.create rx.Observable
    (fn [obs]
      (->
        url
        (request)
        (.pipe 
          (.createWriteStream 
            fs 
            (str outputImageDir 
              (->
                url 
                (str/split #"/")
                (->>
                  (take-last 2)
                  (str/join "_"))))))
        (.on "close" 
          (fn [] 
            (.onCompleted obs)))))))
        
(defn parseInfo [pkgName]
  (.subscribe 
    (->
      (.of rx.Observable pkgName)
      (.map #(str "yoyoDoc/" % ".html"))
      (.flatMap readfile)
      (.flatMap parseHtml)
      (.reduce
        (fn [acc x]
          (doto acc
            (.push x))) 
        (array))
      (.flatMap (partial writefile (str output pkgName ".json"))))
    (fn [data])
    (fn [err] (.log js/console "err:" err))
    (fn [] (.log js/console "write ok!"))))
    
(defn getImage [pkgName]
  (.subscribe
    (->
      (readfile (str output pkgName ".json"))
      (.map #(.parse js/JSON %))
      (.flatMap #(.from rx.Observable %))
      (.map #(aget % 0))
      (.map imageUrl)
      (.flatMap (partial fetchImage outputImageDir)))
    (fn [data] (.log js/console data))
    (fn [err] (.log js/console "err:" err))
    (fn [] (.log js/console "get image ok!"))))