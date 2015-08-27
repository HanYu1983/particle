(ns app.stock.cmd
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [app.dbfile :as db]
    [stock.tool :as stl]
    [cljs.core.async :as a]))

(def stockDir 5489861557485568)

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
      
      
(defn loadUser [ch fbid request]
  (am/go
    (let [[_ userDir] (<! (db/name->id stockDir fbid))
          [_ fileId] (<! (db/name->id userDir "userinfo.json"))
          [err content] (<! (db/file fileId "json"))]
      (a/>! ch ["view" [err content request]]))))
  ;(am/go
  ;  (a/>! ch ["view" [nil (get @save-data (str fbid)) request]])))
    
(defn saveUser [ch fbid data request]
  (am/go
    (let [[_ _] (<! (db/makeDir stockDir fbid))
          _ (<! (a/timeout 1000)) ;不等一點時間新增的資料取不到!!
          [_ userDir] (<! (db/name->id stockDir fbid))
          [err ret] (<! (db/makeFile userDir "userinfo.json" (.stringify js/JSON data) true))]
      (a/>! ch ["view" [err ret request]]))))
  ;(swap! save-data assoc (str fbid) data)
  ;(am/go
  ;  (a/>! ch ["view" [nil nil request]])))