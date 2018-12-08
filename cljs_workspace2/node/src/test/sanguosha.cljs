(ns test.sanguosha
  (:require
    [lib.tool :as t]))
    
(def async (js/require "async"))
(def fs (js/require "fs"))
(def dir "sgsDoc/html/")
(def output "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/sgsList.json")

(defn parseContent [content]
  (let [[_ na] (re-find #"<div class=\"name\">(.*)</div>" content)
        [_ cost] (re-find #"<td class=\"key\">费用：</td>\s+<td class=\"value\">(\d)</td>" content)
        [_ power] (re-find #"<td class=\"key\">武/体：</td>\s+<td class=\"value\">(.*)</td>" content)
        [_ color] (re-find #"<td class=\"key\">势力：</td>\s+<td class=\"value\">(.*)</td>" content)
        [_ type] (re-find #"<td class=\"key\">类别：</td>\s+<td class=\"value\" colspan=\"3\">(.*)</td>" content)
        [_ pkg] (re-find #"<td class=\"key\">系列名称：</td>\s+<td class=\"value\">(.*)</td>" content)
        [_ id] (re-find #"<td class=\"key\">卡牌编号：</td>\s+<td class=\"value\">(.*)</td>" content)
        [_ text] (re-find #"<div class=\"content\">([\s\S]+?)</div>" content)
        [_ img] (re-find #"<img src=\"/upload/cards/.+/(.+).jpg\" class=\"pic\" />" content)]
    (js-obj 
      "id" id
      "img" img
      "pkg" pkg
      "name" na
      "type" type
      "color" color
      "cost" (int cost)
      "power" power
      "text" text)))
  
(defn callback [cb err delayFn]
  (if err
    (cb err)
    (cb nil (force delayFn))))

(defn test-base []
  (let [result (array)]
    (.readdir fs dir
      (fn [err files]
        (.eachSeries async
          files
          (fn [file cb]
            (t/getFile (str dir file) 
              (fn [err content]
                (.push result (parseContent content))
                (callback cb err (delay (comment "ok"))))))
          (fn [err]
            (if err
              (.log js/console err)
              (.writeFile fs 
                output
                (.stringify js/JSON result nil "\t")
                (fn [err]
                  (.log js/console err))))))))))