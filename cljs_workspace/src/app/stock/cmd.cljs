(ns app.stock.cmd
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [app.dbfile :as db]
    [stock.tool :as stl]
    [cljs.core.async :as a]))

(defn loadStock
  "request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊"
  ([ch id date request result]
    (am/go
      (a/>! ch ["loadStock" [(first result) (second result) (nth result 2) (nth result 3) request]])))
  ([ch id date request]
    (am/go
      (let [[err infos] (a/<! (stl/content (stl/goog-finance-getprices-url id "3Y")))
            infos
            (->>
              infos
              stl/parse-getprices
              (stl/format-getprices 86400)
              reverse)]
        (a/>! ch ["loadStock" [err infos id date request]])))))
      
      
(defn loadUser [ch fbid accessToken request]
  (am/go
    (let [[err content] (<! (db/load "stock" fbid accessToken))]
      (a/>! ch ["view" [(or err (.-error content)) content request]]))))
  ;(am/go
  ;  (a/>! ch ["view" [nil (get @save-data (str fbid)) request]])))
    
(defn saveUser [ch fbid accessToken data request]
  (am/go
    (let [[err ret] (<! (db/save "stock" fbid accessToken (.stringify js/JSON data)))]
      (a/>! ch ["view" [(or err (.-error ret)) ret request]]))))
  ;(swap! save-data assoc (str fbid) data)
  ;(am/go
  ;  (a/>! ch ["view" [nil nil request]])))