(ns test.bs
  (:require
    [clojure.string :as str]))

(def rx (js/require "rx"))
(def fs (js/require "fs"))
(def _ (js/require "underscore"))
(def request (js/require "request"))

(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/bsList/")
(def outputImageDir "output/bs/")

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
              
              
(defn dbc2sbc [s]
  (when s
    (str/replace s #"[\uff01-\uff5e]" #(.fromCharCode js/String (- (.charCodeAt % 0) 65248)))))

      
(defn parseHtml [data]
  (.create rx.Observable 
    (fn [obs]
      ; 注意：它每一個彈的格式可能不一樣，看情況也許會須要重新定義regular
      (let [group 
            (map rest
              (re-seq
                #"real_src\s?=\"(.+?)\"[\s\S]+?<div>(.*?)</DIV>([\s\S.]*?)<br /></DIV>([\s\S.]*?)<div>卡牌解说</DIV>([\s\S.]*?)<br /></DIV>"
                data))
                
            urlidpair
            (->
              (map
                vector
                (map first group)
                (map
                  #(->>
                    (nth % 2)
                    (re-find #"编号：(.*?)　收录")
                    second
                    dbc2sbc)
                  group)))]
        (doall
          (for [obj urlidpair]
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

(defn fetchImage [outputImage url]
  (.log js/console url)
  (.create rx.Observable
    (fn [obs]
      (->
        url
        (request)
        (.pipe 
          (.createWriteStream 
            fs 
            outputImage))
        (.on "close" 
          (fn [] 
            (.onCompleted obs)))))))
            
        
    
(defn parseAll []
  (.subscribe 
    (->
      (readdir "bsDoc")
      (.map (fn [filename] (str "bsDoc/" filename)))
      (.flatMap readfile)
      (.flatMap parseHtml)
      (.reduce
        (fn [acc x]
          (doto acc
            (.push x))) 
        (array))
      (.flatMap (partial writefile (str output "all.json"))))
    (fn [data])
    (fn [err] (.log js/console "err:" err))
    (fn [] (.log js/console "write ok!"))))
  
        
(defn parseInfo [pkgName]
  (.subscribe 
    (->
      (.of rx.Observable pkgName)
      (.map #(str "bsDoc/" % ".html"))
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
  (def idx (atom 0))
  (.subscribe
    (->
      (readfile (str output pkgName ".json"))
      (.map #(.parse js/JSON %))
      (.flatMap #(.from rx.Observable %))
      (.delay
        (.timer rx.Observable 0)
        (fn [x]
          (swap! idx inc)
          (.timer rx.Observable (* @idx 10000))))
      (.timeInterval)
      (.flatMap
        (fn [obj]
          (let [v (.-value obj)
                [url id] v]
            (if id
              (fetchImage (str outputImageDir id ".jpg") url)
              (.just rx.Observable nil))))))
    (fn [data] (.log js/console "wow!" data))
    (fn [err] (.log js/console "err:" err))
    (fn [] (.log js/console "get image ok!"))))
    
    
    
(defn compress
  "這個函式不能使用，imagemin套件不能用"
  [p]
  (let [imagemin (js/require "imagemin")]
    (->
      (imagemin.)
      (.src (str p "/*.{gif,jpg,png,svg}"))
      (.dest "output/compress/")
      (.use (.jpegtran imagemin (js-obj "progressive" false)))
      (.run 
        (fn [err files] 
          (.log js/console "end")
          (.log js/console err))))))