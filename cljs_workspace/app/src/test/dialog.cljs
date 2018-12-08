(ns test.dialog
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :as async :refer [chan <! >! alts! timeout]]
    [tool.dialog :as dialog]))
    
(defn view [elem ctx]
  (let [show (dialog/showstr ctx)]
    (doto elem
      (.empty)
      (.html
        (apply str (interpose "<br>" show)))))
  ctx)
  
(def view (partial view (js/$ "#container")))
    
(defn main
  []
  (let [test-str (dialog/formatMessage "Hello, I'm Han\n我是中文!我是中文!我是中文!我是中文!我是中文!我是中文!" 7)
        onTick (chan)
        onClick (chan)]
    (go-loop [ctx (dialog/dialog
              {
                :max-line 4
                :message test-str
              })
             ]
      (recur
        (let [[v ch] (alts! [onTick onClick])]
          (condp = ch
            onTick
            (-> ctx
              dialog/step
              view)
              
            onClick
            (->
              ctx
              dialog/requestNext)
          
            ctx))))
          
    (go-loop [mspf 33]
      (<! (timeout mspf))
      (>! onTick mspf)
      (recur mspf))
      
    (doto (js/$ "body")
          (.on "click"
            (fn []
              (go
                (>! onClick 0)))))
      
    (comment "end let")))
      
(main)