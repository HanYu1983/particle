(ns test.battleSpirits
  (:require
    [lib.tool :as t]))
    
(def fs (js/require "fs"))
(def cardInfoUrl "http://www.carddass.com/cdmasters/nexa/cardlist/controller/request.php")


(defn fetchInfo [id cb]
  (t/postUrl 
    cardInfoUrl
    {
      "cmdno" 1
      "prod" id
    }
    (fn [err ret]
      (.writeFile fs
        (str "bs" id ".json")
        (js/JSON.stringify (.parse js/JSON ret))
        (fn [err]
          (cb err))))))

(defn test-base []
  (fetchInfo 62008
    (fn [err]
      (.log js/console err))))

