(ns app.stock.cmd
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [stock.tool :as stl]
    [cljs.core.async :as a]))

(defn loadStock
  "request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊"
  [ch id date request]
  (am/go
    (let [[err infos] (a/<! (stl/stock-info nil id date 0 200))]
      (a/>! ch ["loadStock" [err infos id date request]]))))