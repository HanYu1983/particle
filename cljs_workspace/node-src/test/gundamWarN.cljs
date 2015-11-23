(ns test.gundamWarN
  (:require
    [lib.tool :as t]))
    
(def fs (js/require "fs"))
(def async (js/require "async"))

(def cardInfoUrl "http://www.carddass.com/cdmasters/nexa/cardlist/controller/request.php")
(defn imageUrl [prod name]
  (str "http://www.carddass.com/cdmasters/nexa/images/cardlist/" prod "/" name ".png"))
  
(def clusadeUrl "http://www.carddass.com/crusade/cardlist/request.php")

(def prods 
  [
    "179030" 
    "179029" 
    "179028"
    "179027"
    "179026"
    "179025"
    "179024"
    "179023"
    "179022"
    "179021"
    "179020"
    "179019"
    "179018"
    "179017"
    "179016"
    "179015"
    "179014"
    "179013"
    "179012"
    "179011"
    "179010"
    "179009"
    "179008"
    "179007"
    "179006"
    "179005"
    "179004"
    "179003"
    "179002"
    "179001"
    "179901"
  ])
  
(defn fetchInfo [id cb]
  (t/postUrl 
    cardInfoUrl
    {
      "cmdno" 1
      "prod" id
    }
    (fn [err ret]
      (.writeFile fs
        (str "gundamWarN" id ".json")
        (js/JSON.stringify (.parse js/JSON ret))
        (fn [err]
          (cb err))))))

(defn test-base []
  (fetchInfo "179030"
    (fn [err]
      (.log js/console err))))

