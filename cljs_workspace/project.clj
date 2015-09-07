(defproject lein-cljsbuild-example "1.2.3"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2268"]]
  :plugins [[lein-cljsbuild "1.0.4"]]
  :cljsbuild {
    :builds [
    {
      :id "stock"
      :source-paths ["src"]
      :compiler {
        :output-to "../goapp/src/stock/js/cljs/cljs.js"
        :output-dir "../goapp/src/stock/js/cljs"
        :optimizations :none
        :pretty-print true}
    }
    {
      :id "particle"
      :source-paths ["src"]
      :compiler {
        :output-to "../goapp/src/web/res/cljs/cljs.js"
        :output-dir "../goapp/src/web/res/cljs"
        :optimizations :none
        :pretty-print true
      }
    }
    {
      :id "cocoon"
      :source-paths ["src"]
      :compiler {
        :output-to "../goapp/src/cocoon/cljs/cljs.js"
        :output-dir "../goapp/src/cocoon/cljs"
        :optimizations :none
        :pretty-print true
      }
    }
    ]})