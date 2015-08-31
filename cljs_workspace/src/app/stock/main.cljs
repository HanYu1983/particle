(ns app.stock.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [app.dbfile :as db]
    [cljs.core.async :as a]
    [app.stock.abstract :as abstract]
    [app.stock.impl]))


(defn main2 []
  (am/go
    (let [[err ret] (<! (db/makeDir 5489861557485568 "han"))
          [err dir] (<! (db/name->id 5489861557485568 "han"))
          [err ret] (<! (db/makeFile dir "userinfo.json" "{}" true))
          [err id] (<! (db/name->id dir "userinfo.json"))
          [err content] (<! (db/file id "json"))]
      (.log js/console err content))))

(defn main []
  (reset! db/*domain* "https://particle-979.appspot.com/")
  
  (let [onView (a/chan)
        onModel (a/chan)
        onSys (a/chan)]
        
    (.subscribe js/common.onView
      (fn [data]
        (am/go
          (a/>! onView data))))
    
    (am/go-loop []
      (let [data (a/<! onModel)]
        (.onNext js/common.onModel data))
      (recur))
    
    (am/go-loop 
      [
        ctx {
          :onView onView
          :onModel onModel
          :onSys onSys
          :store {}
          :temp {}
        }
      ]
      (let [[v ch] (a/alts! [onView onSys])]
        (recur
          (condp = ch
            onSys
            (let [[type data] v]
              (abstract/onSystem type data ctx))
            
            onView
            (let [type (aget v 0)
                  data (aget v 1)]
              (abstract/onViewCommand type data ctx))
            
            ctx))))
          
    (comment "end let"))
  (comment "end main"))
  
  
(main)