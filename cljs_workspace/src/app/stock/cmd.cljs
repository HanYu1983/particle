(ns app.stock.cmd
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [stock.tool :as stl]
    [cljs.core.async :as a]))

(defn loadStock [ch id date]
  (am/go
    (let [[err infos] (a/<! (stl/stock-info nil id date 0 200))]
      (a/>! ch ["loadStock" [err infos id date]]))))