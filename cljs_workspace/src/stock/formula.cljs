(ns stock.formula
  (:require
    [stock.tool :as stl]))

(defn average [vs]
  (->
    (apply + vs)
    (/ (count vs))))

(defn avg-seq [n vs]
  (when (> (count vs) n)
    (cons 
      (->
        (apply + (take n vs))
        (/ n))
      (lazy-seq (avg-seq n (rest vs))))))
      
(defn StandardDeviation
  "Standard Deviation 標準差
  n設為30很像不錯"
  [avg vs]
  (let [v
        (->>
          (apply
            +
            (map
              #(.pow js/Math (- % avg) 2)
              vs))
          (* (/ 1 (dec (count vs))))
          (.sqrt js/Math))]
    v))
    
(defn z-score [avg sd vs]
  (let [offsets
        (map
          (fn [v]
            (- v avg))
          vs)
          
        vs
        (map
          #(/ % sd)
          offsets)]
    vs))