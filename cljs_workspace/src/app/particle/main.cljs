(ns app.particle.main
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! alts! chan timeout]]
    [app.particle.abstract :as abstract]
    [app.particle.impl]
    [app.particle.draw :as d]
    [tool.particle :as part]))

(def draw2D (d/draw2D (js/$ "#webgl")))
;(def draw3D (d/draw3D (js/$ "#webgl")))

(defn main []
  (let [onView (chan)
        onModel (chan)
        onTick (chan)
        mspf 33]
    
    ; 接收view的事件
    (.subscribe js/common.onView
      (fn [data]
        (go (>! onView data))))
    
    ; 發送model事件
    (go-loop []
      (let [data (<! onModel)]
        (.onNext js/common.onModel data)
        (recur)))
        
    ; update event
    (go-loop [mspf mspf
              last-time (.getTime (js/Date.))]
      (<! (timeout mspf))
      (let [curr-time (.getTime (js/Date.))
            elapsed (/ (- curr-time last-time) 1000)]
        (>! onTick elapsed)
        (recur mspf curr-time)))
        
    (go
      (<! (timeout 1000))
      (>! onView (array "edit-particle" (js-obj "id" "x1" "pos" (array 300 300 0))))
      (<! (timeout 1100))
      (>! onView 
        (array "edit-particle" 
          (js-obj 
            "id" "x1"
            "emit" 
            (js-obj
              "duration" 1
              "angle" 0
              "force" 100
              "range" 6.28
              "prototype"
              (array
                (js-obj
                  "position" (array 0 0 0)
                  "size" (array 10 20)
                  "vel" (array 100 0 3.14))))
            "size" (array 30 10)
            "pos" (array 300 300 0) 
            "vel" (array 100 100 0)))))
      
    ; main-loop
    (go-loop 
      [
        ctx
        {
          :timer 0
          :part {:ps '()}
        } 
      ]
      (let [[v ch] (alts! [onView onTick])]
        ;(.log js/console (pr-str ctx))
        (recur
          (condp = ch
            onTick
            (-> ctx
              (update-in [:part] (partial part/update v))
              (draw2D))
            
            onView
            (let [event (aget v 0)
                  params (aget v 1)]
              (abstract/onViewCommand event params ctx))
              
            ctx))))
            
  
    (comment "end let")))
  
  
(main)