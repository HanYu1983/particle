(ns app.basic
  (:require
    [app.fns :as fns]
    [clojure.string :as str]))

(def rx (js/require "rx"))
(def script (js/require "./script.js"))

(defn parseFile [pattern scriptFn [filepath filecontent]]
  (let [data (map (comp js->clj scriptFn clj->js rest) (re-seq pattern filecontent))]
    (->
      (.just rx.Observable [filepath data]))))

(defn sangoWar []
  "haha")

(defn parseInfo [cfg]
  (let [{
          dir "dir"
          outputDir "outputDir"
          pattern "pattern"
          s "script"
        } cfg
        scriptFn
        (or (aget script s) identity)]
    (.subscribe
      (->
        (.just rx.Observable dir)
        (.flatMap fns/readdir)
        (.map 
          #(str dir %))
        (.flatMap fns/readfile)
        (.flatMap (partial parseFile (re-pattern pattern) scriptFn))
        (.flatMap
          (fn [[filepath data]]
            (.log js/console (count data))
            (fns/writefile 
              (-> 
                filepath 
                (str/split #"/")
                last
                (str/split #"\.")
                first
                (->>
                  (str outputDir))
                (str ".json")) 
              (.stringify js/JSON (clj->js data) nil "\t")))))
      (fn [data] (.log js/console "success"))
      (fn [err] (.log js/console err))
      (fn [] (.log js/console "completed")))))
      
(defn main [filepath]
  (.subscribe
    (->
      (.just rx.Observable filepath)
      (.flatMap fns/readfile))
    (fn [[filepath content]] 
      (parseInfo (js->clj (.parse js/JSON content))))
    (fn [err] (.log js/console err))
    (fn [] (.log js/console "completed"))))