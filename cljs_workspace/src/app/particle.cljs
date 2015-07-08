(ns app.particle)

(defn create [{
  id :id
  {count :count duration :duration :as emit} :emit
  [x y rot :as pos] :pos 
  [vx vy vr :as vel] :vel
  lifetime :lifetime
  mass :mass
  formulaList :formulaList
  size :size
  color :color
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
    
    ; 計算用
    :timer 0
    :emit-times 0
    :forceVel [0 0 0]
  })
  

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
                                      (create 
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