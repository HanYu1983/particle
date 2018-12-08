(ns gl.texture)

(defn parameterTexMode
  "REPEAT | MIRRORED_REPEAT | CLAMP_TO_EDGE | GLAMP_TO_BORDER"
  [gl sm tm]
  (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_S gl) sm)
  (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_T gl) tm))
  
(defn parameterDefault
  "貼圖被放大時使用線性內插 | 貼圖被放大時使用線性內插 | webgl預設是repeat模式"
  [gl]
  (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_MAG_FILTER gl) (.-LINEAR gl))
  (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_MIN_FILTER gl) (.-LINEAR gl))
  (parameterTexMode gl (.-CLAMP_TO_EDGE gl) (.-CLAMP_TO_EDGE gl)))
  
(defn texture [gl img]
  (let [tex (.createTexture gl)]
    (.bindTexture gl (.-TEXTURE_2D gl) tex)
    (.texImage2D gl (.-TEXTURE_2D gl) 0 (.-RGBA gl) (.-RGBA gl) (.-UNSIGNED_BYTE gl) img)
    (parameterDefault gl)
    tex))
    
(defn bind [gl tex channel loc]
  (.activeTexture gl (+ channel (.-TEXTURE0 gl)))
  (.bindTexture gl (.-TEXTURE_2D gl) tex)
  (.uniform1i gl loc channel))