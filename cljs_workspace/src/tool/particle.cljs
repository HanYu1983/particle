(ns tool.particle)

(defn particle [{
  id :id
  {count :count duration :duration :as emit} :emit
  [x y rot :as pos] :pos 
  [vx vy vr :as vel] :vel
  lifetime :lifetime
  mass :mass
  formulaList :formulaList
  size :size
  color :color
  tex :tex
  }]
  {
    :id (or id (gensym "particle"))
    :emit
    (when emit
      (merge 
        {
          :count 1      ; 一次射出幾層(prototype列表)
          :duration 1   ; 間隔（秒）
          :angle 0      ; 角度（弧度）
          :range 0      ; 範圍（弧度）
          :force 0      ; 發射力道
        }
        emit))
    :formulaList (or formulaList nil) ; 改變函式
    :lifetime (or lifetime 10)        ; 生命
    :pos (or pos [0 0 0])             ; 位置
    :vel (or vel [0 0 0])             ; 速度
    :color (or color [1 0 0 1])       ; 顏色
    :mass (or mass 1)                 ; 質量（還沒有作用）
    :size (or size [10 10])           ; 大小
    :tex (or tex nil)                 ; 材質id
    
    ; 計算用
    :timer 0
    :emit-times 0
    :forceVel [0 0 0]
  })
  
  
(defn jsobj->target [jsobj]
  (condp = jsobj
    "x"
    [:pos 0]
    
    "y"
    [:pos 1]
    
    "rot"
    [:pos 2]
    
    "vx"
    [:vel 0]
    
    "vy"
    [:vel 1]
    
    "vr"
    [:vel 2]
    
    "scale-x"
    [:size 0]
    
    "scale-y"
    [:size 1]
    
    "r"
    [:color 0]
    
    "g"
    [:color 1]
    
    "b"
    [:color 2]
    
    "a"
    [:color 3]
    
    "emit-angle"
    [:emit :angle]
    
    "emit-range"
    [:emit :range]
    
    "emit-count"
    [:emit :count]
    
    "emit-duration"
    [:emit :duration]
    
    "emit-force"
    [:emit :force]
    nil))
  
(defn jsobj->formula [jsobj]
  (let [target (get jsobj 0)
        type (get jsobj 1)
        p1 (get jsobj 2)
        p2 (get jsobj 3)
        p3 (get jsobj 4)
        p4 (get jsobj 5)
        p5 (get jsobj 6)]
    (when-let [t (jsobj->target target)]
      (when-let [f
                (condp = type
                  "const"
                  (fn [life v]
                    p1)
                            
                  "constAdd"
                  (fn [life v]
                    (+ v p1))
                    
                  "linear"
                  (fn [life v]
                    (let [offset (- p2 p1)
                          adj (+ p1 (* offset life))]
                      (+ 0 adj)))
                      
                  "linearAdd"
                  (fn [life v]
                    (let [offset (- p2 p1)
                          adj (+ p1 (* offset life))]
                      (+ v adj)))
                      
                  "randStartAdd"
                  (fn [life v]
                    (let [adj (- (* p1 (rand)) (/ p1 2))]
                      (if (zero? life)
                        (+ v adj)
                        v)))
                  nil)]
        [t f]))))

(defn jsobj->particle [jsobj]
  (let [obj 
        (into {}
          (map
            (fn [[k v]]
              [(keyword k) v])
            (js->clj jsobj)))
            
        formula
        (if (:formulaList obj)
          (assoc obj :formulaList
            (reduce
              (fn [all curr]
                (if-let [f (jsobj->formula curr)]
                  (cons f all)
                  all))
              '()
              (:formulaList obj)))
          obj)
            
        emit
        (if (:emit formula)
          (update-in formula [:emit]
            (fn [ori]
              (->
                (into {}
                  (map
                    (fn [[k v]]
                      [(keyword k) v])
                    ori))
                (update-in
                  [:prototype]
                  (fn [ps] (mapv jsobj->particle ps))))))
          formula)]
    (particle emit)))

(defn updatePos [{pos :pos vel :vel fvel :forceVel :as particle} t]
  (let [newpos (map + pos (map #(* t %) vel) (map #(* t %) fvel))]
    (assoc-in particle [:pos] (apply vector newpos))))

(defn updateTimer [{timer :timer :as particle} t]
  (assoc particle :timer (+ timer t)))
    
(defn updateFormula [{formulaList :formulaList :as particle}]
  (if (some? formulaList)
    (reduce
      (fn [{timer :timer lifetime :lifetime :as particle} [target formula]]
        (update-in particle target (partial formula (/ timer lifetime))))
      particle
      formulaList)
    particle))

(defn forceIt [{vel :forceVel mass :mass :as particle} f]
  (let [accel (map #(/ % mass) f)]
    (assoc particle :forceVel (map + vel accel))))
    
(defn update [t ctx]
  (let [update-each 
        (fn [{ps :ps :as ctx}]
          (assoc ctx :ps
            (map 
              #(-> %
                updateFormula
                (updatePos t)
                (updateTimer t))
              ps)))
              
        update-emit
        (fn [{ps :ps :as ctx}]
          (reduce 
            (fn [ctx 
                {
                  pos :pos 
                  timer :timer 
                  emit-times :emit-times 
                  {
                    count :count
                    duration :duration
                    angle :angle
                    range :range
                    force :force
                    prototype :prototype
                    :as emit
                  } :emit 
                  :as part
                }]
              (if (nil? emit)
                (update-in ctx [:ps] conj part)
                (let [should-times (int (/ timer duration))
                      emit-times-now (* count (- should-times emit-times))
                      emit-particle
                      (fn [ctx]
                        (reduce
                          (fn [ctx n]
                            (let [targetangle (+ angle (- (rand range) (/ range 2)))]
                              (reduce
                                (fn [ctx proto]
                                  (update-in ctx [:ps] conj 
                                    (-> 
                                      (particle 
                                        (merge proto 
                                          {:pos pos}))
                                      (forceIt [
                                        (* force (.cos js/Math targetangle))
                                        (* force (.sin js/Math targetangle))
                                        0]))))
                                ctx
                                prototype)))
                          ctx
                          (cljs.core/range emit-times-now)))]
                  (-> ctx
                    emit-particle
                    (update-in [:ps] conj (assoc part :emit-times should-times))))))
            (assoc ctx :ps [])
            ps))
            
        update-remove
        (fn [{ps :ps :as ctx}]
          (let [remove-self 
                (remove 
                  #(and 
                    (> (:lifetime %) 0)
                    (> (:timer %) (:lifetime %)))
                  ps)]
            (assoc ctx :ps remove-self)))]
    (-> ctx update-emit update-each update-remove)))