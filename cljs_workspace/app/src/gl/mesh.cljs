(ns gl.mesh)

(defn create
  [gl 
  {
    drawType :drawType 
    size :size 
    va :vertex 
    ta :texture 
    ca :color 
    ia :index 
    na :normal
    :as option
  }]
  {
    :drawType drawType
    :size size
    :arrays 
    {
      :vertex va
      :texture ta
      :color ca
      :index ia
      :normal na
    }
    :buffers
    (into {}
      (map
        (fn [[k ary]]
          (when ary
            (let [bo (.createBuffer gl)
                  bufferType (if (= k :index) (.-ELEMENT_ARRAY_BUFFER gl) (.-ARRAY_BUFFER gl))]
              (.bindBuffer gl bufferType bo)
              (.bufferData gl bufferType ary (.-STATIC_DRAW gl))
              [k bo])))
        {:vertex va :texture ta :color ca :index ia :normal na}))
  })
  
(defn bind [gl {size :size :as mesh} where location]
  (when (get-in mesh [:buffers where])
    (doto gl
      (.bindBuffer (.-ARRAY_BUFFER gl) (get-in mesh [:buffers where]))
      (.vertexAttribPointer
        location 
        (/ (.-length (get-in mesh [:arrays where])) size)
        (.-FLOAT gl)
        false 0 0))))
        
        
(defn draw [gl {size :size :as mesh} drawType]
  (let [realType (or drawType (:drawType mesh))]
    (if (some? (get-in mesh [:buffers :index]))
      (doto gl
        (.bindBuffer (.-ELEMENT_ARRAY_BUFFER gl) (get-in mesh [:buffers :index]))
        (.drawElements
          realType 
          size
          (.-UNSIGNED_SHORT gl)
          0))
      (doto gl
        (.drawArrays
          realType
          0
          size)))))
          
(defn plain-2d 
  "模倣2D畫面的繪圖方式，錨點在左上角"
  [gl]
  (create gl
    {
      :vertex 
      (js/Float32Array.
        (array 
          0 0 0 1
          0 1 0 1
          1 0 0 1
          1 1 0 1
          ))
        
      :texture
      (js/Float32Array. 
        (array
          0 0
          0 1
          1 0
          1 1
        ))
      
      :index
      (js/Uint16Array. (array 0 1 2 3))
      
      :color
      (js/Float32Array.
        (array
          1 1 1 1
          1 0 0 1
          0 1 0 1
          0 0 1 1
        ))
        
      :size 4
      :drawType (.-TRIANGLE_STRIP gl)
    }))
    
(defn plain
  "錨點在中心點"
  [gl]
  (create gl
    {
      :vertex 
      (js/Float32Array.
        (array 
          -1 -1 0 1
          -1 1 0 1
          1 -1 0 1
          1 1 0 1
          ))
        
      :texture
      (js/Float32Array. 
        (array
          0 0
          0 1
          1 0
          1 1
        ))
      
      :index
      (js/Uint16Array. (array 0 1 2 3))
      
      :color
      (js/Float32Array.
        (array
          1 1 1 1
          1 0 0 1
          0 1 0 1
          0 0 1 1
        ))
        
      :size 4
      :drawType (.-TRIANGLE_STRIP gl)
    }))