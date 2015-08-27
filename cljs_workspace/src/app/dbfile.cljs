(ns app.dbfile
  (:require-macros
    [cljs.core.async.macros :as am])
  (:require
    [cljs.core.async :as a]))

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
  (ajax (str "../dbfile/" dirId) "GET" "json" nil))
  
(defn makeDir [parent dirname]
  (ajax "../dbfile/" "POST" nil 
    (js-obj
      "Parent" parent
      "Name" dirname)))
      
(defn makeFile [parent filename content]
  (ajax "../dbfile/" "POST" nil 
    (js-obj
      "Parent" parent
      "Name" filename
      "Content" content)))
      
(defn deleteFile [id]
  (ajax "../dbfile/" "POST" nil
    (js-obj
      "Key" id
      "Delete" true)))
      
(defn name->id [dir filename]
  (am/go
    (let [[err content] (a/<! (fileList dir))]
      (if err
        [err]
        (let [origin (filter (fn [data] (= (.-Name data) filename)) content)
              exist? (not (empty? origin))]
              (.log js/console (pr-str origin))
              (.log js/console exist?)
              (.log js/console (-> (first origin) (.-Key)))
          (if exist?
            [nil (-> (first origin) (.-Key))]
            [nil nil]))))))