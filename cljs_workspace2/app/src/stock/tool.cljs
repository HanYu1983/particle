(ns stock.tool
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! close! chan]]
    [clojure.string :as s]))

(defn content [url]
  (let [ret (chan)]
    (.ajax js/$ (js-obj
      "url" "/proxy"
      "dataType" "text"
      "data"
      (js-obj
        "url" url)
      "success"
      (fn [data]
        (go
          (>! ret [nil data])
          (close! ret)))
      "error"
      (fn [xhr _ err]
        (go
          (>! ret [err])
          (close! ret)))))
    ret))
    
(defn goog-finance-info-url [id]
  (str 
    "https://www.google.com/finance/info?infotype=infoquoteall"
    "&q=" id))
    
(defn parse-info [content]
  (try
    (let [json (aget (.parse js/JSON content) 0)
          date 
          (.toString (js/Date. (.-lt_dts json)))
          volume 
          (->
            (.-vo json)
            (.replace #"M" "")  ;有時候無法使用clojure內建的replace，所以改用js自帶的
            (js/parseFloat)
            (* 1000000))]
      [date (.-op json) (.-hi json) (.-lo json) (.-l_fix json) volume])
    (catch js/Object e 
      nil)))
  
(defn todayPrice [id]
  (go
    (let [url (goog-finance-info-url id)
          [err content] (<! (content url))
          content (.replace content #"//" "")]
      (if err
        [err]
        [nil (parse-info content)]))))
        
(defn combineToday 
  "結合今天，如果今天已經抓到，就不結合"
  [todayLine li]
  (if todayLine
    (let [[maybe-today _ _ _ _ _] (first li)
          [today-date _ _ _ _ _] todayLine]
      (if-not 
        (.equals 
          (.clearTime (js/Date. today-date)) 
          (.clearTime (js/Date. maybe-today)))
        (cons todayLine li)
        li))
    li))

(defn goog-finance-getprices-url [id ran]
  (str
    "https://www.google.com/finance/getprices?q=" id
    "&x=TPE&i=86400&p=" ran
    "&f=d,c,h,l,o,v"))

(defn parse-getprices [content]
  (let [infos
        (re-seq
          (->
            (str
              "([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")
            re-pattern)
          (->
            content
            (.replace #"\n" " ")))]
    (for
      [
        [_ date close high low open volume]
        infos
      ]
      [date (js/parseFloat open) (js/parseFloat high) (js/parseFloat low) (js/parseFloat close) (js/parseInt volume)])))

(defn format-getprices [interval data]
  (let [; 先把種子日期變為數字（1970到現在的豪秒數，非微秒）
        pass1
        (map
          (fn [[d o h l c v]]
            (if (= \a (first d))
              [(js/parseInt (subs d 1)) o h l c v]
              [d o h l c v]))
          data)
        
        ; 剩下字串的數字是和種子日期的interval間隔數量，計算出數字與上一個數字的差，為了用累計計算。注意，又將結果轉為文字，為了和種子做區別
        pass2
        (cons
          (first pass1)
          (map
            (fn [[d1 _ _ _ _ _ :as prev] [d2 o h l c v :as curr]]
              (if (and (string? d1) (string? d2))
                (let [offset (- (js/parseInt d2) (js/parseInt d1))]
                  [(str offset) o h l c v])
                  curr))
            pass1
            (rest pass1)))
        
        ; 累算時間
        pass3
        (reductions
          (fn [[d1 _ _ _ _ _ :as prev] [d2 o h l c v :as curr]]
            (if (and (number? d1) (string? d2))
              (let [n (js/parseInt d2)]
                [(+ d1 (* n interval)) o h l c v])
              curr))
          (first pass2)
          (rest pass2))
          
        ; 2014/12/27的量有問題所以過濾掉
        ; 2015/12/28的量也有問題，所以先不管這個過濾
        pass4
        (filter
          (fn [[d o h l c v]] true)
            ;(let [date (js/Date. (* d 1000))]
            ;  (or 
            ;    (not= (.getFullYear date) 2014)
            ;    (not= (.getMonth date) (dec 12))
            ;    (not= (.getDate date) 27))))
          pass3)
          
        ; 將豪秒變為微秒建立Date物件，使用它的時間字串
        pass5
        (map
          (fn [[d o h l c v]]
            (let [date (js/Date. (* d 1000))]
              [(.toString date) o h l c v]))
          pass4)]
    pass5))
    
(defn get-goog-stock-prices [id range]
  (go
    (let [[err infos] (<! (content (goog-finance-getprices-url id range)))
          [err2 todayLine] (<! (todayPrice id))
          infos
          (->>
            infos
            parse-getprices
            (format-getprices 86400)
            reverse
            (combineToday todayLine))]
      [(or err err2) infos])))

(defn goog-finance-historical-url [id startdate start num]
  (str
    "https://www.google.com/finance/historical?q=TPE:" id
    "&startdate=" startdate
    "&start=" start
    "&num=" num))

;<tr>
;<td class="lm">Jun 25, 2015
;<td class="rgt">145.00
;<td class="rgt">147.00
;<td class="rgt">145.00
;<td class="rgt">146.50
;<td class="rgt rm">43,496,000

(defn parse-historical [content]
  (let [infos
        (re-seq
          (->
            (str
              "<tr>"
              "<td class=\"lm\">(\\D{3} \\d+, \\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt\">(\\d+\\.\\d+)"
              "<td class=\"rgt rm\">([\\d,]+)")
            re-pattern)
          (->
            content
            (.replace #"\n" "")))]
    (for
      [
        [_ date open high low close volume]
        infos
      ]
      [date (js/parseFloat open) (js/parseFloat high) (js/parseFloat low) (js/parseFloat close) (-> volume (.replace #"," "") js/parseInt)])))

; num最高為200
(defn goog-historical-info [all id startdate start num]
  (go
    (let [url (goog-finance-historical-url id startdate start num)
          [err content] (<! (content url))]
      (if err
        [err]
        (let [infos (parse-historical content)]
          (if (= num (count infos))
            (<! (goog-historical-info (concat all infos) id startdate (+ start num) num))
            [nil (concat all infos)]))))))
            

(defn date [kline]
  (if (seq? kline)
    (map date kline)
    (let [[date _ _ _ _ _] kline]
      date)))
      
(defn high [kline]
  (if (seq? kline)
    (map high kline)
    (let [[_ _ high _ _ _] kline]
      high)))

(defn open [kline]
  (if (seq? kline)
    (map open kline)
    (let [[_ _ _ _ open _] kline]
      open)))
      
(defn close [kline]
  (if (seq? kline)
    (map close kline)
    (let [[_ _ _ _ close _] kline]
      close)))
      
(defn low [kline]
  (if (seq? kline)
    (map low kline)
    (let [[_ _ _ low _ _] kline]
      low)))
    
(defn volume [kline]
  (if (seq? kline)
    (map volume kline)
    (let [[_ _ _ _ _ volume] kline]
      volume)))
    
(defn mid [kline]
  (if (seq? kline)
    (map mid kline)
    (let [[_ _ high low _ _] kline]
      (/ (+ high low) 2))))
      
(defn typical [kline]
  (if (seq? kline)
    (map typical kline)
    (let [[_ _ high low close _] kline]
      (/ (+ high low close) 3))))