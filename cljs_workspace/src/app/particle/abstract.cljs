(ns app.particle.abstract)

(defmulti onViewCommand (fn [type data ctx] type))