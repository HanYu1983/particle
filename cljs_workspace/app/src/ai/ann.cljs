(ns ai.ann)
    
(defn Dot 
  "點乘
  ins [float] 所有輸入的值
  ws [float] 每一輸入路線的權重"
  [ins ws]
  (reduce + (map * ins ws)))

(defn Logistic
  "激活函數
  必須使用這個，因為計算誤差必須用到激活函數的導數，而演算法就是使用這個函數的導數"
  [value]
  (/ 1 (+ 1 (Math/exp (- value)))))

(defn NeuronValue
  "計算神經節點的值
  func fn 激活函數
  ins [float] 所有輸入
  ws [float] 每一輸入路線的權重"
  [ins ws]
  (Logistic (Dot ins ws)))

(defn ErrorValueOutput
  "計算輸出層的誤差值
  values [float] 輸出層各個節點的值
  desire [float] 輸出層各個預期的值"
  [values desire]
  (map #(* (- %1 %2) %2 (- 1.0 %2)) desire values))

(defn ErrorValueHidden
  "計算隱藏層的誤差值
  values [float] 隱藏層各個節點的值
  errs [float] 上一層各個節點所計算的誤差值
  wsTranspose [[float]] '轉置'過的權重值，因為是倒過來計算。呼叫ReverseWeight來轉置"
  [values errs wsTranspose]
  (map #(* (Dot errs %1) %2 (- 1.0 %2)) wsTranspose values))

(defn ReverseWeight
  "轉置二維的權重矩陣，用來倒過來計算
  w [[float]]"
  [w]
  (apply map list w))
  
(defn Errors
  "計算每一節點的誤差
  之前xor訓練不出來是因為敗在這裡的wss忘了倒反!!"
  [ann wss desire]
  (let [CalcHidden 
        (fn [errs layer]
          (let [[values ws] layer
                noBias (map rest ws)]
            (ErrorValueHidden values errs (ReverseWeight noBias))))
        [outputValue & hiddenValues] (reverse ann)
        layers (partition 2 (interleave hiddenValues (reverse wss)))
        outputError (ErrorValueOutput outputValue desire)
        errors (reductions CalcHidden outputError layers)]
    (reverse errors)))
    
(defn AdjustWeightsLayer 
  "計算一層的調整矩陣"
  [learningRate mutateRate values errs]
  (let [wsTranspose 
        (map 
          (fn [value] 
            (map 
              (fn [err]
                (*
                  (if (< (rand) mutateRate) (- (rand) (rand)) 1)
                  learningRate 
                  value 
                  err))
              errs)) 
          (conj values -1))]
    (ReverseWeight wsTranspose)))

(defn AdjustWeights
  "計算每一層的調整權重矩陣"
  [learningRate mutateRate ann errs]
  (map 
    #(AdjustWeightsLayer learningRate mutateRate % %2)
    ;最後一層不會算到
    (drop-last 1 ann)
    ;輸入層節點沒有誤差值，將它移除。errs移除第一個，ann移除最後一個，所以err會配到上一層的ann
    (rest errs)))
  
(defn NewWeights 
  "調整權重"
  [ws adws]
  (map 
    (fn [w ad] 
      (map 
        (fn [wv adv] (map + wv adv)) 
        w 
        ad)) 
    ws 
    adws))
    
(defn RandWeights [& cnt]
  (->
    (reduce
      (fn [li [inCnt outCnt]]
        (cons 
          (repeatedly outCnt #(repeatedly (inc inCnt) rand))
          li))
        '()
      (partition 2 (interleave cnt (drop 1 cnt))))
    reverse))
    
(defn FeedForward
  "向前計算"
  [ann wss]
  (let [CalcLayer 
        (fn [inputs ws] 
          (let [includeBias (cons -1 inputs)
                outputs (map #(NeuronValue includeBias %) ws)]
            outputs))
        newAnn 
        (reductions CalcLayer (first ann) wss)]
    newAnn))
    
(defn NowError 
  "計算總誤差"
  [outputs desires]
  (/
    (apply + (map #(Math/pow (- %1 %2) 2) outputs desires)) 
    (count outputs)))

(defn Train 
  "訓練"
  [ws trainingSet learningRate mutateRate]
  (let [ForwardAndUpdateWeights
        (fn [[nowError ws] [inputs desires]]
          (let [newAnn (FeedForward (list inputs) ws)
                errs (Errors newAnn ws desires)
                adws (AdjustWeights learningRate mutateRate newAnn errs)
                newWs (NewWeights ws adws)]
            [(+ nowError (NowError (last newAnn) desires)) newWs]))
        [totalError newWs] (reduce ForwardAndUpdateWeights [0 ws] trainingSet)
        avgError (/ totalError (count trainingSet))]
    [newWs avgError]))
