(ns app.fns)

(def rx (js/require "rx"))
(def fs (js/require "fs"))

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
              (.onNext [filepath data])
              (.onCompleted))))))))
              
(defn writefile [output data]
  (.create rx.Observable
    (fn [obs]
      (.writeFile fs 
        output
        data
        (fn [err]
          (if err
            (.onError obs err)
            (doto obs
              (.onCompleted))))))))