(ns test.stock-game)

(defrecord Order [id type price cnt time])

(defn deal [orders]
  (let [{buys :buy sells :sell}
        (group-by :type orders)
        sortedBuys
        (sort-by 
          (fn [item]
            [(:price item) (- (:time item))])
          buys)
        sortedSells
        (sort-by 
          (fn [item]
            [(:price item) (- (:time item))])
          sells)]
    (iterate
      (fn [[buys sells deals]]
        (let [buy (first buys)
              sell (first sells)]
          (if (>= (:price buy) (:price sell))
            true false)))
      [sortedBuys sortedSells '()])))

;(sort-by (fn [in] [(first in) (- (second in))]) [[2 3] [2 2] [2 4] [1 2] [1 1]])
;([1 2] [1 1] [2 4] [2 3] [2 2])