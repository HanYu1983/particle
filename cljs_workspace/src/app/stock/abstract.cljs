(ns app.stock.abstract)

(defmulti onViewCommand (fn [type data ctx] type))