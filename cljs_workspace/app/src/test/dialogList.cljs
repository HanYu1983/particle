(ns test.dialogList
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! alts! chan timeout]]
    [tool.dialog :as dia]))


(defn step [{dialogs :dialogs curr-idx :curr-idx :as ctx}]
  (let 
    [
      updated
      (map
        (fn [idx dialog]
          (if (= idx curr-idx)
            (dia/step dialog)
            dialog))
        (range (count dialogs))
        dialogs)
      
      curr-dialog
      (nth updated curr-idx)
      
      last-line?
      (= (count dialogs) (inc curr-idx))
    ]
    (if (= :end (:state curr-dialog))
      (if last-line?
        (-> ctx
          (assoc :dialogs updated)
          (assoc :state :end))
        (-> ctx
          (assoc :dialogs updated)
          (update-in [:curr-idx] inc)))
      (-> ctx
        (assoc :dialogs updated)))))
      
(defn showstr [{dialogs :dialogs curr-idx :curr-idx :as ctx}]
  (let [curr-dialog (nth dialogs curr-idx)]
    (dia/showstr curr-dialog)))

(defn requestNext [{dialogs :dialogs curr-idx :curr-idx :as ctx}]
  (let 
    [
      updated
      (map
        (fn [idx dialog]
          (if (= idx curr-idx)
            (dia/requestNext dialog)
            dialog))
        (range (count dialogs))
        dialogs)
    ]
    (-> ctx
      (assoc :dialogs updated))))
      
      
      
(defn view [elem ctx]
  (let [show (showstr ctx)]
    (doto elem
      (.empty)
      (.html
        (apply str (interpose "<br>" show)))))
  ctx)
  
(def view (partial view (js/$ "#container")))

(defn main []
  (let 
    [
      test-str (dia/formatMessage "Hello, I'm Han\n我是中文!我是中文2!我是中文3!我是中文4!我是中文5!我是中文6!" 7)
      onTick (chan)
      onClick (chan)
    ]
    
    (go-loop 
      [
        ctx 
        {
          :curr-idx 0
          :dialogs
          (list
            (dia/dialog
              {
                :max-line 4
                :message test-str
              })
            (dia/dialog
              {
                :max-line 4
                :message test-str
              })
            )
        }
      ]
      (let [[v ch] (alts! [onTick onClick])]
        (recur
          (condp = ch
            onTick
            (-> ctx
              step
              view)
            
            onClick
            (requestNext ctx)
            
            ctx))))
    
    (go-loop [mspf 100]
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

