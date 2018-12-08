(ns test.ann-xor
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [clojure.walk :as walk]
    [cljs.core.async :refer [>! <! timeout chan]]
    [ai.ann :as ann]))
    
(defn draw [canvas]
  (let [ctx (.getContext canvas "2d")]
    (fn [ws err]
      (let [[w h] [(.-width canvas) (.-height canvas)]
            xoffset (/ w 5)
            values 
            (map 
              (fn [input]
                (->
                  (ann/FeedForward (list input) ws)
                  last
                  first))
              '((0 0) (0 1) (1 0) (1 1)))]
        (aset ctx "fillStyle" "#FFFF00")
        (.fillRect ctx 0 0 w h)
        
        (aset ctx "fillStyle" "#000")
        (doseq [[idx v] (map (fn [id v] [id v]) (range (count values)) values)]
          (doto ctx
            (.beginPath)
            (.moveTo (* xoffset (inc idx)) h)
            (.lineTo (* xoffset (inc idx)) (- h (* v h)))
            (aset "lineWidth" 3)
            (aset "strokeStyle" "#000000")
            (.stroke)
            
            (.fillText
              (condp = idx
                0 "X X"
                1 "X O"
                2 "O X"
                3 "O O")
              (+ 10 (* xoffset (inc idx)))
              h)
            (comment "end doto")))
        
        (.fillText ctx (str "誤差:" err) 20 20)
        (comment "end let")))))

(def draw (draw (.getElementById js/document "canvas")))

(defn main []
  (go-loop [sleepTime 10
            ws (ann/RandWeights 2 2 1)]
    (let [xor-trainset 
          '(((0 0) (0))
            ((0 1) (1))
            ((1 1) (0))
            ((1 0) (1)))
          [ws2 err] (ann/Train ws xor-trainset 0.25 0.01)]
      (draw ws2 err)
      (<! (timeout sleepTime))
      (recur sleepTime ws2))))
  
(main)
