(ns app.particle.main
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! alts! chan timeout]]
    [app.particle.abstract :as abstract]
    [app.particle.impl]
    [app.particle.draw :as d]
    [tool.particle :as part]))

;(def draw (d/draw2D (js/$ "#webgl")))
(def draw (d/draw3D (js/$ "#webgl")))

(defn main []
  (let [onView (chan)
        onModel (chan)
        onTick (chan)
        mspf (int (/ 1000 60))]
    
    ; 接收view的事件
    (.subscribe js/common.onView
      (fn [data]
        (go (>! onView data))))
    
    ; 發送model事件
    (go-loop []
      (let [[err data request] (<! onModel)]
        (.onNext js/common.onModel (array err data request))
        (recur)))
        
    ; update event
    (go-loop [mspf mspf
              last-time (.getTime (js/Date.))]
      (<! (timeout mspf))
      (let [curr-time (.getTime (js/Date.))
            elapsed (/ (- curr-time last-time) 1000)]
        (>! onTick elapsed)
        (recur mspf curr-time)))
          
    ; main-loop
    (go-loop 
      [
        ctx
        {
          :timer 0
          :part {:ps '()}
          :centerPos [0 0]
          :onModel onModel
        } 
      ]
      (let [[v ch] (alts! [onView onTick])]
        ;(.log js/console (pr-str ctx))
        (recur
          (condp = ch
            onTick
            (-> ctx
              (update-in [:part] (partial part/update v))
              (draw))
            
            onView
            (let [event (aget v 0)
                  params (aget v 1)]
              (abstract/onViewCommand event params ctx))
              
            ctx))))
  
    (go
      (<! (timeout 1000))
      (>! onView (array "edit-particle" (js-obj "id" "x1" "pos" (array 10 10 0))))
      (<! (timeout 1100))
      (>! onView 
        (array "edit-particle" 
          (js-obj 
            "id" "x1"
            "emit" 
            (js-obj
              "duration" 0.05
              "angle" 0
              "force" 10
              "range" 0
              "prototype"
              (array
                (js-obj
                  "position" (array 0 0 0)
                  "color" (array 1 0 1 1)
                  "size" (array 10 20)
                  "vel" (array 0 0 0)
                  "formulaList"
                  (array
                    (array "vr" "randStartAdd" 6.28 0 0 0 0)
                    (array "x" "randStartAdd" 200 0 0 0 0)
                    (array "y" "randStartAdd" 200 0 0 0 0)
                  ))))
            "color" (array 0 0 1 1)
            "size" (array 30 10)
            "pos" (array 10 10 0) 
            "vel" (array 0 0 0)
            "formulaList"
            (array
              (array "vx" "linear" 300 -300 0 0 0)
              (array "vy" "linear" 300 -300 0 0 0)
              (array "emit-angle" "linear" 0 6.28 0 0 0)
              (array "emit-force" "linear" 100 2000 0 0 0)
              )
            ))))
            
    (comment "end let")))
  
  
(main)