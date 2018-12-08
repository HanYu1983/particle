(ns test.ann
  (:require-macros
    [cljs.core.async.macros :refer [go-loop go]])
  (:require
    [cljs.core.async :refer [<! timeout]]
    [ai.ann :refer [NowError Train FeedForward NewWeights AdjustWeights Errors NeuronValue ReverseWeight ErrorValueOutput ErrorValueHidden AdjustWeightsLayer]]))

(defn test-neuron-value []
  (.log js/console (NeuronValue '(-1 1 1) '(0.5 0.5 0.5))))
  
(defn test-reverse []
  (.log js/console (pr-str (ReverseWeight '((0.1 0.2 0.3) (0.4 0.5 0.6))))))
  
(defn test-errorvalueoutout []
  (.log js/console (pr-str (ErrorValueOutput '(0.5 0.5) '(0 1)))))
  
(defn test-errorvaluehidden []
  (.log js/console (pr-str (ErrorValueHidden '(-1 0.5 0.5) '(-0.125 0.125) '((0.1 0.4) (0.2 0.5) (0.3 0.6))))))
  
(defn test-adjlayer []
  (.log js/console (pr-str (AdjustWeightsLayer 1 1 '(0.5 0.5) '(-0.125 0.125)))))
  
(defn test-errors []
  (.log js/console 
    (pr-str 
      (Errors 
        '((0 1) 
          (0.2 0.3 0.4 0.5 0.6) 
          (0.5 0.6)) 
        '(((0.1 0.2 0.3) (0.4 0.5 0.6) (0.7 0.8 0.9) (0.7 0.8 0.9) (0.7 0.8 0.9))
          ((0.6 0.7 0.8 0.9 0.1 0.2) (0.6 0.7 0.8 0.9 0.1 0.2)))
        '(1 1)))))
        
(defn test-adjwes []
  (.log js/console
    (pr-str
      (AdjustWeights
        1
        1
        '((0 1) 
          (0.2 0.5) 
          (0.5))
        (Errors 
          '((0 1) 
            (0.2 0.5) 
            (0.5)) 
          '(((0.1 0.2 0.3) (0.4 0.5 0.6))
            ((0.6 0.7 0.8)))
          '(1))))))
  
(defn test-newwes []
  (.log js/console
    (pr-str
      (NewWeights
        '(((0.1 0.2 0.3) (0.4 0.5 0.6))
          ((0.6 0.7 0.8)))
        '(((-0.004000000000000001 0 0.004000000000000001) (-0.009375 0 0.009375))
          ((-0.125 0.025 0.0625)))))))
  
(defn test-ff []
  (.log js/console
    (pr-str
      (FeedForward
        '((0 0)) 
        '(((0.1 0.2 0.3) (0.4 0.5 0.6) (0.1 0.2 0.3) (0.4 0.5 0.6))
          ((0.6 0.7 0.8 0.9 0.1) (0.6 0.7 0.8 0.9 0.1)))))))
  
(defn test-nowerror []
  (.log js/console
    (pr-str
      (NowError
        '(0.5 0.5)
        '(1 0)))))
  
(defn test-train 
  "這個會訓練比較久，因為節點比較複雜"
  []
  (go-loop [ws 
            ;可任意組合節點 input 2 > hidden 2 > hidden 1 > hidden 2 > output 1
            (list
              (list (repeatedly 3 rand) (repeatedly 3 rand))  ;當中list的第一項都是偏差項的權重
              (list (repeatedly 3 rand))
              (list (repeatedly 2 rand) (repeatedly 2 rand))
              (list (repeatedly 3 rand)))]
    (let [trainset 
          '(((0 0) (0))
            ((1 0) (0.5))
            ((1 1) (1))
            ((0 1) (0.2)))
          [nws err] (Train ws trainset 1 0.01)]
      (.log js/console err)
      (.log js/console (pr-str (reverse(FeedForward '((0 0)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((0 1)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((1 1)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((1 0)) nws))))
      (<! (timeout 30))
      (recur nws))))
  
(defn test-train-2 []
  (go-loop [ws 
            (list
              (list (repeatedly 3 rand) 
                    (repeatedly 3 rand) 
                    (repeatedly 3 rand) 
                    (repeatedly 3 rand) 
                    (repeatedly 3 rand))
              (list (repeatedly 6 rand)
                    (repeatedly 6 rand)))]
    (let [trainset 
          '(((0 0) (0 0))
            ((0 1) (0.5 1))
            ((1 1) (1 0))
            ((1 0) (1 0.5)))
          [nws err] (Train ws trainset 1 0.01)]
      (.log js/console err)
      (.log js/console (pr-str (reverse(FeedForward '((0 0)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((0 1)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((1 1)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((1 0)) nws))))
      (<! (timeout 100))
      (recur nws))))
  
(defn test-train-xor
  []
  (go-loop [ws
            (list
              (list (repeatedly 3 rand) (repeatedly 3 rand))
              (list (repeatedly 3 rand)))]
    (let [trainset 
          '(((0 0) (0))
            ((0 1) (1))
            ((1 1) (0))
            ((1 0) (1)))
          [nws err] (Train ws trainset 1 0.01)]
      (.log js/console err)
      (.log js/console (pr-str (reverse (FeedForward '((0 0)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((0 1)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((1 1)) nws))))
      (.log js/console (pr-str (reverse (FeedForward '((1 0)) nws))))
      (<! (timeout 1000))
      (recur nws))))
  
(defn test-basic []
  (test-neuron-value)
  (test-reverse)
  (test-errorvalueoutout)
  (test-errorvaluehidden)
  (test-adjlayer)
  (test-errors)
  (test-adjwes)
  (test-newwes)
  (test-ff)
  (test-nowerror))
  
(test-train-xor)