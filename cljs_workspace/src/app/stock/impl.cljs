(ns app.stock.impl
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]
    [stock.formula :as stf]
    [stock.tool :as stl]
    [stock.drawer :as std]
    [app.stock.cmd :as cmd]
    [app.stock.abstract :as abstract]))
    
(defmethod abstract/onSystem :default [type data ctx]
  (.log js/console (str "onSystem-" type))
  (.log js/console (pr-str data))
  ctx)
  
(defmethod abstract/onSystem "view" [type data ctx]
  (let [[err data request] data]
    (am/go
      (a/>! (:onModel ctx) (array type (js-obj "err" err "data" data "request" request))))
    ctx))
    
(defmethod abstract/onSystem "loadStock" [type data ctx]
  (let [[err kline id date request] data]
    (am/go
      (a/>! (:onModel ctx) (array type (js-obj "err" err "data" id "request" request))))
    (if err
      ctx
      (assoc-in ctx [:temp "stocks" id] data))))

; view command

(defmethod abstract/onViewCommand :default [type data ctx]
  (.log js/console (str "onViewCommand-" type))
  (.log js/console data)
  ctx)

(defmethod abstract/onViewCommand "print" [_ data ctx]
  (.log js/console (pr-str ctx))
  ctx)
  
(defn jsobj->drawer-info [kline sub]
  (->
    (map
      (fn [data]
        (let [subt (get data "t")
              subd (get data "d")
              vs
              (condp = type
                "volume" (stl/volume kline)
                (stl/close kline))
              c4 "#FF00FF"
              c3 "#0000FF"
              c2 "#00FFFF"
              c1 "#FFFF00"]
          (condp = subt
            "ma"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")
                  color (get subd "color")]
              [
                {:type :line :line (stf/sma-seq n vs) :color c1}
                {:type :line :line (stf/sma-seq m vs) :color c2}
                {:type :line :line (stf/sma-seq o vs) :color c3}
                {:type :line :line (stf/sma-seq p vs) :color c4}
              ])
            
            "ema"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")]
              [
                {:type :line :line (reverse (stf/ema-seq n (reverse vs))) :color c1}
                {:type :line :line (reverse (stf/ema-seq m (reverse vs))) :color c2}
                {:type :line :line (reverse (stf/ema-seq o (reverse vs))) :color c3}
                {:type :line :line (reverse (stf/ema-seq p (reverse vs))) :color c4}
              ])
          
            "bbi"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")]
              [
                {:type :line :line (stf/BBI n (* n m) (* n m m) (* n m m m) vs) :color c1}
                {:type :line :line (stf/EBBI o (* o p) (* o p p) (* o p p p) vs) :color c2}
              ])
              
            "yu-car"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  [dirs ranges] (reverse (stf/yu-car n m o (reverse kline)))
                  avg (stf/average (stl/mid kline))]
              [
                {:type :line :line (map + (stl/mid kline) (reverse ranges)) :color c1 :offset -1}
                {:type :line :line (map - (stl/mid kline) (reverse ranges)) :color c1 :offset -1}
              ])
              
            "yu-macd"
            (let [n (get subd "n")
                  m (get subd "m")
                  ema (reverse (stf/ema-seq n (reverse vs)))
                  bbi (stf/BBI m (* m 2) (* m 4) (* m 8) vs)
                  dif (map - ema bbi)]
              [
                {:type :line :line dif :color c1}
                {:type :line :line (stf/sma-seq 9 dif) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line dif :color "gray" :hideY true}
              ])
            
            "yu-clock"
            (let [n (get subd "n")
                  m (get subd "m")
                  vs (stf/sma-seq m (stf/yu-clock n kline))]
              [
                {:type :line :line vs :color c1}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line vs :color "gray" :hideY true}
              ])
              
            "yu-sd"
            (let [n (get subd "n")
                
                  group (take n kline)
                  
                  vs
                  (stl/open group)
    
                  ; 每天和隔天的價差
                  offsets
                  (stf/offset-seq (reverse vs))
          
                  ; 價差的平均數
                  offsets-avg
                  (stf/average offsets)
          
                  ; 價差的標準差
                  sd
                  (stf/StandardDeviation offsets-avg offsets)
                  
                  sd2
                  (* sd 2)]
                [
                  {:type :line :line (map (partial + offsets-avg) vs) :color c2 :offset -1}
                  {:type :line :line (map (partial + (+ sd2) offsets-avg) vs) :color c2 :offset -1}
                  {:type :line :line (map (partial + (- sd2) offsets-avg) vs) :color c2 :offset -1}
                ])
            
            "macd"
            (let [n (get subd "n")
                  m (get subd "m")
                  dif (stf/macd-dif n m kline)]
              [
                {:type :line :line dif :color c1}
                {:type :line :line (stf/sma-seq 9 dif) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line dif :color "gray" :hideY true}
              ])
              
            "kd"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  rsv (stf/rsv-seq n kline)]
              [
                {:type :line :line (stf/sma-seq m rsv) :color c1}
                {:type :line :line (stf/sma-seq o rsv) :color c2}
                {:type :line :line (repeat (count kline) 50) :color "lightgray"}
                {:type :grid :line rsv :color "gray"}
              ])
          
            "Chaikin"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  vs 
                  (reverse (stf/Chaikin n m (reverse kline)))]
              [
                {:type :line :line vs :color c1}
                {:type :line :line (stf/sma-seq o vs) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line vs :color "gray"}
              ])
            
            "eom"
            (let [n (get subd "n")
                  m (get subd "m")
                  vs (stf/EOM n kline)]
              [
                {:type :line :line vs :color c1}
                {:type :line :line (stf/sma-seq m vs) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line vs :color "gray" :hideY true}
              ])
              
            "sar"
            (let [n (get subd "n")
                  sar (reverse (stf/sar-seq n (reverse kline)))]
              [
                {:type :line :line sar :color c1 :style :dot}
              ])
              
            "osc"
            (let [n (get subd "n")
                  m (get subd "m")
                  line (stf/osc-seq n (stl/close kline))]
              [
                {:type :line :line line :color c1}
                {:type :line :line (stf/sma-seq m line) :color c2}
                {:type :line :line (repeat (count kline) 1) :color "lightgray"}
              ])
            
            "rsi"
            (let [n (get subd "n")
                  m (get subd "m")
                  line (reverse (stf/rsi-seq n (stl/close (reverse kline))))]
              [
                {:type :line :line line :color c1}
                {:type :line :line (stf/sma-seq m line) :color c2}
                {:type :line :line (repeat (count kline) 0.5) :color "lightgray"}
              ])
              
            "atr"
            (let [n (get subd "n")
                  m (get subd "m")
                  line (reverse (stf/atr-seq n (reverse kline)))]
              [
                {:type :line :line line :color c1}
                ;{:type :line :line (stf/sma-seq m line) :color c2}
                {:type :grid :line line :color "gray"}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
              ])
              
            "dmi"
            (let [n (get subd "n")
                  m (get subd "m")
                  atr (reverse (stf/tr-seq (reverse kline)))
                  dm (reverse (stf/dm-seq (reverse kline)))
                  dip (map (fn [v v2] (if (pos? v) (/ v v2) 0)) dm atr)
                  did (map (fn [v v2] (if (neg? v) (/ (.abs js/Math v) v2) 0)) dm atr)
                  adip (stf/sma-seq n dip)
                  adid (stf/sma-seq n did)
                  dx 
                  (map
                    (fn [v1 v2]
                      (if (zero? (+ v1 v2))
                        0
                        (/ (.abs js/Math (- v1 v2)) (+ v1 v2))))
                    adip 
                    adid)]
              [
                {:type :line :line adip :color "red"}
                {:type :line :line adid :color "green"}
                {:type :line :line (stf/sma-seq m dx) :color c1}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
              ])
            {:type nil})))
      sub)
    (flatten)))
  
(defmethod abstract/onViewCommand "draw" [_ data ctx]
  (let [stockId (aget data "id")
        type (aget data "type")
        canvas (aget data "canvas")
        offset (aget data "offset")
        cnt (aget data "count")
        sub (js->clj (aget data "sub"))
        [err kline id date :as stock] (get-in ctx [:temp "stocks" stockId])
        kline 
        (->>
          kline
          (drop offset)
          (take cnt))]
    (when kline
      (std/draw
        {
          :drawers
          (concat
            (flatten
              (condp = type
                "volume"
                [
                  {:type :line :line (stl/volume kline) :color "red"}
                ]
              
                "clock"
                (let [{cs :sma z :z v-z :v-z} (stf/clock 10 kline)]
                  [
                    {:type :clock :cz z :vz v-z}
                  ])
              
                "kline"
                [
                  {:type :grid :kline kline :color "gray"}
                  {:type :kline :kline kline}
                ]
                {:type nil}))
            (jsobj->drawer-info kline sub))
        }
        (.-width canvas) (.-height canvas)
        (.getContext canvas "2d")))
    ctx))
  
(defmethod abstract/onViewCommand "stockId" [_ data ctx]
  (let [onSys (:onSys ctx)
        stock-id (aget data "id")
        date (aget data "date")
        stock-info (get-in ctx [:temp "stocks" stock-id])]
    (if stock-info
      (do
        (cmd/loadStock onSys stock-id date data stock-info)
        ctx)
      (do
        (cmd/loadStock onSys stock-id date data)
        ctx))))
        
(defmethod abstract/onViewCommand "stockInfo" [_ data ctx]
  (let [onSys (:onSys ctx)
        stock-id (aget data "id")
        stock-info (get-in ctx [:temp "stocks" stock-id])]
    (am/go
      (a/>! onSys ["view" [nil (clj->js stock-info) data]])))
  ctx)
        
(defmethod abstract/onViewCommand "load" [type data {onSys :onSys :as ctx}]
  (let [fbid (aget data "fbid")]
    (cmd/loadUser onSys fbid data))
  ctx)
  
(defmethod abstract/onViewCommand "save" [type data {onSys :onSys :as ctx}]
  (let [fbid (aget data "fbid")
        user (aget data "user")]
    (cmd/saveUser onSys fbid user data))
  ctx)