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
      (let [[err infos] (a/<! (stl/get-goog-stock-prices id "3Y"))]
        (a/>! ch ["loadStock" [err infos id date request]])))))
      
      
(defn loadUser [ch fbid accessToken request]
  (am/go
    (let [[err content] (<! (db/loadFromUser fbid accessToken))
          content (if (= content "") (js-obj "stocks" (array)) (.parse js/JSON content))]
      (a/>! ch ["view" [err content request]]))))

(defn saveUser [ch fbid accessToken data request]
  (am/go
    (let [[err ret] (<! (db/saveToUser fbid accessToken (.stringify js/JSON data)))]
      (a/>! ch ["view" [err ret request]]))))