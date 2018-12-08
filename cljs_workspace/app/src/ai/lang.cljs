(ns test.basic
  (:require
    [clojure.string :as str]))


(defn learnWord [tokens s]
  (reduce
    merge
    {}
    (map
      ; 計算出現次數。使用split
      (fn [t]
        (let [cnt (dec (.-length (.split s (re-pattern t))))]
          (when (> cnt 1)
            {t cnt})))
      (flatten
        (for 
          [token tokens]
          (concat
            (map
              #(map 
                (partial apply str)
                (partition %1 1 token))
              (range 2 (count token)))))))))

(js/describe "基本功能" (fn []
  
  (js/it "收集詞" (fn [done]
    (let [s "有一次，北風和太陽正在爭論誰比較有本事。他們正好看到有個人走過，那個人穿著一件斗篷。他們就說了，誰可以讓那個人脫掉那件斗篷，就算誰比較有本事。於是，北風就拚命地吹。怎知，他吹得越厲害，那個人就越是用斗篷包緊自己。最後，北風沒辦法，只好放棄。接著，太陽出來曬了一下，那個人就立刻把斗篷脫掉了。於是，北風只好認輸了。"
          tokens (str/split s #"[，,。.]")
          words (learnWord tokens s)
          test-token (second tokens)]
      (println words)
      (println test-token))
    (done)))
    
  (js/it "test3" (fn [done]
    (done)))
    
  (comment "end describe")))

