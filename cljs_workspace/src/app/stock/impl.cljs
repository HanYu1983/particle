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
  
(defn jsobj->drawer-info [type kline sub]
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
                  p (get subd "p")]
              (cond->> '()
                (> n 0) (cons {:type :line :line (reverse (stf/sma-seq n (reverse vs))) :color c1})
                (> m 0) (cons {:type :line :line (reverse (stf/sma-seq m (reverse vs))) :color c2})
                (> o 0) (cons {:type :line :line (reverse (stf/sma-seq o (reverse vs))) :color c3})
                (> p 0) (cons {:type :line :line (reverse (stf/sma-seq p (reverse vs))) :color c4})))
            
            "ema"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")]
              (cond->> '()
                (> n 0) (cons {:type :line :line (reverse (stf/ema-seq n (reverse vs))) :color c1})
                (> m 0) (cons {:type :line :line (reverse (stf/ema-seq m (reverse vs))) :color c2})
                (> o 0) (cons {:type :line :line (reverse (stf/ema-seq o (reverse vs))) :color c3})
                (> p 0) (cons {:type :line :line (reverse (stf/ema-seq p (reverse vs))) :color c4})))
          
            "bbi"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")]
              [
                {:type :line :line (stf/BBI n m o p vs) :color c1}
              ])
              
            "ebbi"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")]
              [
                {:type :line :line (stf/EBBI n m o p vs) :color c2}
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
                  o (get subd "o")
                  ema (reverse (stf/ema-seq n (reverse vs)))
                  ebbi (stf/EBBI m (* m 2) (* m 4) (* m 8) vs)
                  dif (map - ema ebbi)]
              [
                {:type :line :line dif :color c1}
                {:type :line :line (reverse (stf/sma-seq o (reverse dif))) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line dif :color "gray" :hideY true}
              ])
            
            "yu-clock"
            (let [n (get subd "n")
                  m (get subd "m")
                  vs (stf/sma-seq m (stf/yu-clock n (reverse kline)))]
              [
                {:type :line :line (reverse vs) :color c1}
                {:type :line :line (repeat (count kline) 1) :color "lightgray"}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :line :line (repeat (count kline) -1) :color "lightgray"}
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
                  o (get subd "o")
                  dif (stf/macd-dif n m kline)]
              [
                {:type :line :line dif :color c1}
                {:type :line :line (reverse (stf/sma-seq o (reverse dif))) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line dif :color "gray" :hideY true}
              ])
              
            "kd"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  rsv (stf/rsv-seq n kline)
                  k (reverse (stf/sma-seq m (reverse rsv)))
                  d (reverse (stf/sma-seq o (reverse k)))]
              [
                {:type :line :line k :color c1}
                {:type :line :line d :color c2}
                {:type :line :line (repeat (count kline) 0.5) :color "lightgray"}
                {:type :grid :line rsv :color "gray"}
              ])
              
            "yu-kd"
            (let [n (get subd "n")
                  h9 (stf/maxN-seq n #(apply max %) (stl/high kline))
                  l9 (stf/maxN-seq n #(apply min %) (stl/low kline))
                  c (stl/close kline)]
              [
                {:type :line :line h9 :color c1}
                {:type :line :line l9 :color c1}
                {:type :line :line c :color c2}
              ])
              
            "Chaikin"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  vs 
                  (stf/Chaikin n m kline)]
              [
                {:type :line :line vs :color c1}
                {:type :line :line (reverse (stf/sma-seq o (reverse vs))) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line vs :color "gray"}
              ])
              
            "cv"
            (let [n (get subd "n")
                  m (get subd "m")
                  rema 
                  (->>
                    (map 
                      - 
                      (stf/maxN-seq n #(apply max %) (stl/high kline))
                      (stf/maxN-seq n #(apply min %) (stl/low kline)))
                    reverse
                    (stf/ema-seq 1)
                    reverse)
                  vs
                  (stf/volatility-seq m rema)]
              [
                {:type :line :line vs :color c1}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :grid :line vs :color "gray"}
              ])
            
            "eom"
            (let [n (get subd "n")
                  m (get subd "m")
                  vs (stf/EOM n kline)]
              [
                {:type :line :line vs :color c1}
                {:type :line :line (reverse (stf/sma-seq m (reverse vs))) :color c2}
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
                {:type :line :line (reverse (stf/sma-seq m (reverse line))) :color c2}
                {:type :line :line (repeat (count kline) 1) :color "lightgray"}
              ])
            
            "rsi"
            (let [n (get subd "n")
                  m (get subd "m")
                  line (stf/rsi-seq n (stl/close (reverse kline)))]
              [
                {:type :line :line (reverse line) :color c1}
                {:type :line :line (reverse (stf/sma-seq m line)) :color c2}
                {:type :line :line (repeat (count kline) 0.5) :color "lightgray"}
              ])
              
            "atr"
            (let [n (get subd "n")
                  line (reverse (stf/atr-seq n (reverse kline)))
                  avg (stf/average line)]
              [
                {:type :line :line line :color c1}
                {:type :grid :line line :color "gray"}
                {:type :line :line (repeat (count kline) avg) :color "lightgray"}
              ])
              
            "dmi"
            (let [n (get subd "n")
                  m (get subd "m")
                  atr (stf/tr-seq (reverse kline))
                  dm (stf/dm-seq (reverse kline))
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
                {:type :line :line (reverse adip) :color "red"}
                {:type :line :line (reverse adid) :color "green"}
                {:type :line :line (reverse (stf/sma-seq m dx)) :color c1}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
              ])
              
            "AccDist"
            (let [n (get subd "n")
                  line (stf/AccDist (reverse kline))]
              [
                {:type :line :line (reverse line) :color c1}
                {:type :line :line (reverse (stf/sma-seq n line)) :color c2}
                {:type :grid :line line :color "gray"}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
              ])
              
            "cci"
            (let [n (get subd "n")
                  line (stf/cci-seq n (reverse kline))]
              [
                {:type :line :line (reverse line) :color c1}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :line :line (repeat (count kline) 100) :color "white"}
                {:type :line :line (repeat (count kline) -100) :color "white"}
              ])
            
            "dpo"
            (let [n (get subd "n")
                  m (get subd "m")
                  line (stf/dpo-seq n kline)]
              [
                {:type :line :line line :color c1}
                {:type :grid :line line :color "gray"}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
                {:type :line :line (repeat (count kline) m) :color "lightgray"}
                {:type :line :line (repeat (count kline) (- m)) :color "lightgray"}
              ])
              
            "trix"
            (let [n (get subd "n")
                  m (get subd "m")
                  line (stf/trix-seq n (stl/close kline))]
              [
                {:type :line :line line :color c1}
                {:type :line :line (reverse (stf/sma-seq m (reverse line))) :color c2}
                {:type :line :line (repeat (count kline) 0) :color "lightgray"}
              ])
              
            "uos"
            (let [n (get subd "n")
                  m (get subd "m")
                  o (get subd "o")
                  p (get subd "p")
                  line (stf/uos-seq n m o (reverse kline))]
              [
                {:type :line :line (reverse line) :color c1}
                {:type :line :line (reverse (stf/sma-seq p line)) :color c2}
                {:type :line :line (repeat (count kline) 50) :color "lightgray"}
                {:type :line :line (repeat (count kline) 30) :color "white"}
                {:type :line :line (repeat (count kline) 70) :color "white"}
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
            (jsobj->drawer-info type kline sub))
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