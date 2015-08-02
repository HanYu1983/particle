(ns test.stock5
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [>! <! close! chan]]
    [clojure.string :as str]))



(defn stock-url [id startdate start num]
  (str
    "https://www.google.com/finance/historical?q=TPE:" id
    "&startdate=" startdate
    "&start=" start
    "&num=" num))

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

;<tr>
;<td class="lm">Jun 25, 2015
;<td class="rgt">145.00
;<td class="rgt">147.00
;<td class="rgt">145.00
;<td class="rgt">146.50
;<td class="rgt rm">43,496,000

(defn parse-info [content]
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
            (str/replace #"\n" "")))]
    (for
      [
        [_ date open high low close volume]
        infos
      ]
      [date (js/parseFloat open) (js/parseFloat high) (js/parseFloat low) (js/parseFloat close) (-> volume (str/replace #"," "") js/parseInt)])))

; num最高為200
(defn stock-info [all id startdate start num]
  (go
    (let [url (stock-url id startdate start num)
          [err content] (<! (content url))]
      (if err
        [err]
        (let [infos (parse-info content)]
          (if (= num (count infos))
            (<! (stock-info (concat all infos) id startdate (+ start num) num))
            [nil (concat all infos)]))))))
            
(defn load-google-visualization 
  "似乎不能套用async，不然callback沒有反應"
  [onLoad]
  (.load js/google "visualization" "1" (clj->js {"packages" ["corechart"]}))
  (.setOnLoadCallback js/google onLoad))

(defn info->data [info]
  (.arrayToDataTable js/google.visualization
    (clj->js
      (map
        (fn [[d o h l c _]]
          [d l o c h])
        info))
    true))
    
(comment (load-google-visualization
  (fn []
    (go
      (let [[err infos] (<! (stock-info nil 2450 "2014/1/1" 0 200))]
        (if err
          (js/alert err)
          (let [data (info->data (reverse infos))
                options
                (clj->js
                  {
                    "legend" "none"
                    "bar" { "groupWidth" "100%" }
                    "candlestick"
                    {
                      "risingColor" { "strokeWidth" 0 "fill" "#a52714" }
                      "fallingColor" { "strokeWidth" 0 "fill" "#0f9d58" }
                    }
                  })
                chart
                (js/google.visualization.CandlestickChart.
                  (.getElementById js/document "chart_div"))]
                (.log js/console data)
                (.log js/console (pr-str options))
            (.draw chart data options)
            (comment "end let")))))
    (comment "end fn"))))
        
(defn test-charts []
  (.load js/google "visualization" "1" (clj->js {"packages" ["corechart"]}))
  (.setOnLoadCallback js/google
    (fn []
      (let [data 
            (.arrayToDataTable js/google.visualization
              (clj->js
                [
                  ["Mon" 0 1 2 3]
                  ["Tue" 38 0 55, 55]
                ])
              true)
            options
            (clj->js
              {
                "legend" "none"
                "bar" { "groupWidth" "100%" }
                "candlestick"
                {
                  "risingColor" { "strokeWidth" 0 "fill" "#a52714" }
                  "fallingColor" { "strokeWidth" 0 "fill" "#0f9d58" }
                }
              })
            chart
            (js/google.visualization.CandlestickChart.
              (.getElementById js/document "chart_div"))]
        (.draw chart data options)))))

(defn draw-canvasjs-charts [elemId & datas]
  (let [chart 
        (js/CanvasJS.Chart. elemId
          (clj->js {
            "title" {
              "text" "Stock Prices"
            }
            "exportEnabled" true
            "axisY" {
              "includeZero" false
              ;"prefix" "$"
              ;"title" "Prices"
            }
            "axisX" {
              "interval" 1
              "valueFormatString" "MMM-DD"
            }
            "toolTip" {
              "shared" true
            }
            "data" datas
          }))]
    (.render chart)))



(defn test-draw []
  (go
    (let [[err infos] (<! (stock-info nil 2330 "2014/1/1" 0 200))]
      (if err
        (js/alert err)
        (let []
          (draw-canvasjs-charts
            "chartContainer2"
            (clj->js {       
              "type" "column" 
              "showInLegend" false 
              "legendMarkerColor" "grey"
              "legendText" "volume"
              "dataPoints"
              (map
                (fn [[date _ _ _ _ volume]]
                  {
                    "label" (js/Date. date)
                    "y" volume
                  })
                infos)
            }))
            
          (draw-canvasjs-charts
            "chartContainer"
            (clj->js {
              "type" "candlestick"
              "showInLegend" false
              "name" "kline"
              "dataPoints"
              (map
                (fn [[date open high low close _]]
                  {
                    "label" (js/Date. date)
                    "y" [open high low close]
                  })
                infos)
            }))
            
          
            
            )))))
              
(test-draw)