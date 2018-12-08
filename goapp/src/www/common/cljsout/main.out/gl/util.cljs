(ns gl.util)

(defn getContext [canvas option]
  (reduce
    (fn [ctx test-name]
      (if (nil? ctx)
        (try
          (.getContext canvas test-name option)
          (catch js/Object e
            nil))
        ctx))
    nil
    ["webgl" "experimental-webgl" "webkit-3d" "moz-webgl"]))
    
    
(defn domContent [elemName]
  (-> 
    (.getElementById js/document elemName)
    (.-textContent)))