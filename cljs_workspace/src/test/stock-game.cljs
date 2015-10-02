(ns test.stock-game)

(defrecord Order [id type price cnt time])
(defrecord Deal [id buy sell time])

(defn deal [orders]
  (let [{buys :buy sells :sell}
        (group-by :type orders)
        sortedBuys
        (sort-by 
          (fn [item]
            [(- (:price item)) (:time item)])
          buys)
        sortedSells
        (sort-by 
          (fn [item]
            [(- (:price item)) (:time item)])
          sells)]
    (->>
      (iterate
        (fn [[buys sells deals]]
          (let [buy (first buys)
                sell (first sells)]
            (if (>= (:price buy) (:price sell))
              (cond
                (> (:cnt buy) (:cnt sell))
                [
                  (cons 
                    (assoc buy :cnt (- (:cnt buy) (:cnt sell)))
                    (rest buys))
                  (rest sells)
                  (cons (Deal. 0 buy sell 0) deals)
                ]
              
                (< (:cnt buy) (:cnt sell))
                [
                  (rest buys)
                  (cons 
                    (assoc sell :cnt (- (:cnt sell) (:cnt buy)))
                    (rest sells))
                  (cons (Deal. 0 buy sell 0) deals)
                ]
              
                :else
                [
                  (rest buys)
                  (rest sells)
                  (cons (Deal. 0 buy sell 0) deals)
                ])
              nil)))
        [sortedBuys sortedSells '()])
      (take-while (comp not nil?)))))

;(sort-by (fn [in] [(first in) (- (second in))]) [[2 3] [2 2] [2 4] [1 2] [1 1]])
;([1 2] [1 1] [2 4] [2 3] [2 2])