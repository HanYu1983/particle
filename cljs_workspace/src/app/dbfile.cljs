(ns app.dbfile
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]))
      
(defn saveToUser [fbid accessToken data]
  (let [ret (a/chan)
        filename 
        (.sf js/db2path (.-stockInfoJson js/db2path) (array fbid))]
    (.writefile
      filename
      (js-obj
        "FBID" fbid
        "AccessToken" accessToken
        "Content" data
        "Override" "on")
      (fn [err data]
        (am/go
          (a/>! ret [err data])
          (a/close! ret))))
    ret))
    
(defn loadFromUser [fbid accessToken]
  (let [ret (a/chan)
        filename 
        (.sf js/db2path (.-stockInfoJson js/db2path) (array fbid))]
    (.file
      filename
      (js-obj
        "FBID" fbid
        "AccessToken" accessToken)
      "json"
      (fn [err data]
        (am/go
          (a/>! ret [err data])
          (a/close! ret))))
    ret))