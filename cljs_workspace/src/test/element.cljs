(ns test.element)

(defn next-generation [table elems]
  (let [{need :need result :result} (-> table shuffle first)
        newelems
        (->>
          need
          (reduce
            (fn [rl elem]
              (cons (filter #(= % elem) elems) rl))
            '())
          (apply
            map
            #(result))
          concat
          flatten)
        ;oldelems
        ;(->>
        ;  (reduce
        ;    (fn [rl elem]
        ;      (cons (filter #(= % elem) elems) rl))
        ;    '())
        ;  (drop (count newelems))
          ]
    (into elems newelems)))