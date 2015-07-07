(defproject lein-cljsbuild-example "1.2.3"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2268"]]
  :plugins [[lein-cljsbuild "1.0.4"]]
  :cljsbuild {
    :builds [{
        :id "cljstestproject.js"
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "../goapp/src/web/res/cljs/cljs.js"  ; default: target/cljsbuild-main.js
          :output-dir "../goapp/src/web/res/cljs"
          :optimizations :none
          :pretty-print true}}]})