(ns app.stock.abstract)

(defmulti onViewCommand (fn [type data ctx] type))
(defmulti onSystem (fn [type data ctx] type))