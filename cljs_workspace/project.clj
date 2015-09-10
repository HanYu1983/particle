(defproject lein-cljsbuild-example "1.2.3"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2268"]]
  :plugins [[lein-cljsbuild "1.0.4"]]
  :cljsbuild {
    :builds [
    {
      :id "common"
      :source-paths ["src"]
      :compiler {
        :output-to "../goapp/src/common/cljs/cljs.js"
        :output-dir "../goapp/src/common/cljs"
        :optimizations :none
        :pretty-print true}
    }
    ]})