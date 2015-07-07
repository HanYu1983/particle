(ns app.main2)

(defn main []
  (.subscribe js/common.onView
    (fn [data]
      (.log js/console "cljs" data)))
  (.onNext js/common.onModel (array "startapp" nil)))
  
  
(main)