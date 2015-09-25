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
    {
      :source-paths ["node-src"]
      :compiler {
        :output-to "../node_workspace/getMagicCard/main.js"
        :output-dir "../node_workspace/getMagicCard/"
        :target :nodejs
        ; 不要用advanced，不然不能跑
        :optimizations :simple  
        :pretty-print false
      }
    }
    ]})