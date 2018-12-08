(ns app.particle.main
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! alts! chan timeout]]
    [gl.util :as glutil]
    [app.particle.abstract :as abstract]
    [app.particle.impl]
    [app.particle.draw :as d]
    [tool.particle :as part]))
    
(defn demo [onView]
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
                "tex" "img_face"
                "formulaList"
                (array
                  (array "vr" "randStartAdd" 6.28 0 0 0 0)
                  (array "x" "randStartAdd" 200 0 0 0 0)
                  (array "y" "randStartAdd" 200 0 0 0 0)
                ))))
          "color" (array 0 0 1 1)
          "size" (array 100 100)
          "pos" (array 10 10 0) 
          "vel" (array 0 0 0)
          "tex" "img_face"
          "formulaList"
          (array
            (array "vx" "linear" 300 -300 0 0 0)
            (array "vy" "linear" 300 -300 0 0 0)
            (array "emit-angle" "linear" 0 6.28 0 0 0)
            (array "emit-force" "linear" 100 2000 0 0 0)))))))

(defn main []
  (let [onView (chan)
        onModel (chan)
        onModelEvent (chan)
        onTick (chan)
        fps 30
        mspf (int (/ 1000 fps))]
    
    ; 接收view的事件
    (.subscribe js/common.onView
      (fn [data]
        (go (>! onView data))))
    
    ; 處理callback
    (go-loop []
      (let [[err data request] (<! onModel)]
        (.onNext js/common.onModel (array err data request))
        (recur)))
    
    ; 發送model事件    
    (go-loop []
      (let [[type data] (<! onModelEvent)]
        (.onNext js/common.onModelEvent (array type data))
        (recur)))
        
    ; 發送tick事件
    (go-loop [mspf mspf
              last-time (.getTime (js/Date.))]
      (<! (timeout mspf))
      (let [curr-time (.getTime (js/Date.))
            elapsed (/ (- curr-time last-time) 1000)]
        (>! onTick elapsed)
        (recur mspf curr-time)))
          
    ; 主迴圈
    (go-loop 
      [
        ctx
        {
          :part {
            :ps '() 
            :limit 200
          }
          :bgColor [0 0 0]
          :centerPos [0 0]
          :onModel onModel
        } 
      ]
      (let [[v ch] (alts! [onView onTick])]
        (recur
          (condp = ch
            onTick
            (let [draw (or (:draw ctx) identity)]
              (go
                (>! onModelEvent ["tick" v]))
              (-> ctx
                (update-in [:part] (partial part/update v))
                (draw)))
            
            onView
            (let [event (aget v 0)
                  params (aget v 1)]
              (abstract/onViewCommand event params ctx))
              
            ctx))))
            
    ;(demo onView)
            
    (comment "end let")))
  
  
  
  
(main)