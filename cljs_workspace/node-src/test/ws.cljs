(ns test.ws
  (:require
    [clojure.string :as str]))

(def rx (js/require "rx"))
(def fs (js/require "fs"))

(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/wsList.json")

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

(defn parseGroup [data]
  ; 注意：它每一個彈的格式可能不一樣，看情況也許會須要重新定義regular
  (let [img
        (->
          (re-find #"<a href=\"(http:.+?).gif\"" data)
          second
          (str/split #"/")
          last)
        [_ id na] (re-find #"\n([\w\d]+/[\w\d-]+)([\s\S].+?)<[/pbr]+>" data)
        chars (map second (re-seq #"《(.+?)》" data))]
    (js-obj
      "img" img
      "id" id
      "name" na
      "chars" 
      (->
        (apply array chars)
        (.join ","))
      "text" data)))
      
(defn parseHtml [data]
  (.create rx.Observable 
    (fn [obs]
      ; 注意：它每一個彈的格式可能不一樣，看情況也許會須要重新定義regular
      (let [[_ body] (re-find #"(<div class=\"post-body entry-content\"[\s\S]{3000}[\s\S]+?</div>)" data)
            group (map second (re-seq #"(<a href=[\s\S]{250}[\s\S]+?)\n<[/pbr]+>\n" body))]
        (doall
          (for [obj group]
            (.onNext obs (parseGroup obj))))
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

(defn test-base []
  (.subscribe 
    (->
      (readdir "wsDoc")
      (.map #(str "wsDoc/" %))
      (.flatMap readfile)
      (.flatMap parseHtml)
      (.reduce
        (fn [acc x]
          (doto acc
            (.push x))) 
        (array))
      (.flatMap (partial writefile output)))
    (fn [data])
    (fn [err] (.log js/console "err:" err))
    (fn [] (.log js/console "write ok!"))))