(ns tool.dialog
  (:require [clojure.string :as str]))

(defn dialog [info]
  (merge
    {
      :state :typing
      :curr-idx 0
      :curr-line 0
      :max-line 3
      :message []
      :request-next false
    }
    info))
    
(defn formatMessage [msg length]
  (->>
    msg
    str/split-lines
    (map #(partition length length nil %))
    (map 
      (fn [origin]
        (map
          (fn [parts]
            (apply str parts))
          origin)))
    (flatten)))

(defn requestNext [ctx]
  (assoc ctx :request-next true))

(defn step
  [
    {
      state :state
      curr-idx :curr-idx
      curr-line :curr-line
      max-line :max-line
      message :message
      request-next :request-next
      :as ctx
    }
  ]
  (condp = state
    :typing
    (let [curr-msg (nth message curr-line)
          curr-msg-length (count curr-msg)
          final-line? (= (inc curr-line) (count message))
          endline? 
          (or
            (zero? (mod (inc curr-line) max-line))
            final-line?)]
      (if (= curr-msg-length curr-idx)
        (if endline?
          (-> ctx
            (assoc :state (if final-line? :end :wait)))
          (-> ctx
            (assoc :curr-line (inc curr-line))
            (assoc :curr-idx 0)))
            
        (if request-next
          (let [line-offset (- max-line (mod (inc curr-line) max-line))
                curr-final-line (min (+ curr-line line-offset) (dec (count message)))
                curr-final-line-length (count (nth message curr-final-line))
                final-line? (= (inc curr-final-line) (count message))]
            (-> ctx
              (assoc :state (if final-line? :end :wait))
              (assoc :request-next false)
              (assoc :curr-line curr-final-line)
              (assoc :curr-idx curr-final-line-length)))
          (-> ctx
            (assoc :curr-idx (inc curr-idx))))))
      
    :wait
    (if request-next
      (-> ctx
        (assoc :request-next false)
        (assoc :state :next))
      ctx)
    
    :next
    (-> ctx
      (assoc :request-next false)
      (assoc :curr-line (inc curr-line))
      (assoc :curr-idx 0)
      (assoc :state :typing))
    
    ctx))
    
(defn showstr [{curr-idx :curr-idx curr-line :curr-line max-line :max-line message :message :as ctx}]
  (let [prevcount (mod curr-line max-line)
        showstr 
        (reduce
          (fn [all idx]
            (let [currstr (nth message (- curr-line idx))]
              (if (zero? idx)
                (let [typingstr (.substring currstr 0 curr-idx)]
                  (cons typingstr all))
                (cons currstr all))))
          '()
          (range (inc prevcount)))]
    showstr))