(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.9.0" :scope "provided"]
                  [adzerk/boot-cljs "2.1.4" :scope "test"]
                  [adzerk/boot-reload "0.5.2" :scope "test"]
                  ; project deps
                  [org.clojure/clojurescript "1.10.238"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]])

(def targetDir "../../node_workspace/cljs_node")

(deftask run []
  (comp
    (watch)
    (cljs :optimizations :simple :compiler-options {:target :nodejs})
    (target :dir #{targetDir} :no-clean true)))

(deftask build []
  (comp
    (cljs :optimizations :advanced :compiler-options {:target :nodejs})
    (target :dir #{targetDir} :no-clean true)))

