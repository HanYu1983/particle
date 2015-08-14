(ns app.stock.main
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]
    [app.stock.abstract :as abstract]
    [app.stock.impl]
    [stock.tool :as stl]
    [stock.formula :as stf]
    [stock.drawer :as std]))

(defn main []
  (let [onView (a/chan)
        onModel (a/chan)
        onSys (a/chan)]
        
    (.subscribe js/common.onView
      (fn [data]
        (am/go
          (a/>! onView data))))
    
    (am/go-loop []
      (let [data (a/<! onModel)]
        (js/common.onModel data))
      (recur))
    
    (am/go-loop 
      [
        ctx {
          :onModel onModel
          :onSys onSys
          :store {}
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
            
            :else
            ctx))))
          
    (comment "end let"))
  (comment "end main"))
  
  
(main)