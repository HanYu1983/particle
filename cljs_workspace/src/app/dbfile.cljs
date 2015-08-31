(ns app.dbfile
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]))
    
(def *domain* (atom "../"))

(defn ajax [url type dataType data]
  (let [ret (a/chan)]
    (.ajax js/$ (js-obj
      "url" url
      "type" type
      "dataType" dataType
      "data" data
      "success"
      (fn [data]
        (am/go
          (a/>! ret [nil data])
          (a/close! ret)))
      "error"
      (fn [xhr _ err]
        (am/go
          (a/>! ret [err])
          (a/close! ret)))))
    ret))
    
(defn fileList [dirId]
  (ajax (str @*domain* "dbfile/" dirId) "GET" "json" nil))
  
(defn file [id type]
  (ajax (str @*domain* "dbfile/" id) "GET" type nil))
  
(defn makeDir [parent dirname]
  (ajax (str @*domain* "dbfile/") "POST" nil 
    (js-obj
      "Parent" parent
      "Name" dirname)))
      
(defn makeFile [parent filename content override]
  (ajax (str @*domain* "dbfile/") "POST" nil 
    (js-obj
      "Override" (if override "on" "off")
      "Parent" parent
      "Name" filename
      "Content" content)))
      
(defn deleteFile [id]
  (ajax (str @*domain* "dbfile/") "POST" nil
    (js-obj
      "Key" id
      "Delete" true)))
      
(defn save [target fbid data]
  (ajax (str @*domain* "simple/save") "POST" nil
    (js-obj
      "Target" target
      "FBID" fbid
      "Data" data)))
      
(defn load [target fbid]
  (ajax (str @*domain* "simple/load") "POST" "json"
    (js-obj
      "Target" target
      "FBID" fbid)))
      
(defn name->id [dir filename]
  (am/go
    (let [[err content] (a/<! (fileList dir))]
      (if err
        [err]
        (let [origin (filter (fn [data] (= (.-Name data) filename)) content)
              exist? (not (empty? origin))]
          (if exist?
            [nil (-> (first origin) (.-Key))]
            [nil nil]))))))