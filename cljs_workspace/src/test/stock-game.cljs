(ns test.stock-game)


(defrecrod Order [id type price cnt time])

;(sort-by (fn [in] [(first in) (- (second in))]) [[2 3] [2 2] [2 4] [1 2] [1 1]])
;([1 2] [1 1] [2 4] [2 3] [2 2])