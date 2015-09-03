(ns gl.shader
  (:require 
    [gl.texture :as gltex]))
  
(defn shader [gl type v]
  (let [shader (.createShader gl type)]
    (.shaderSource gl shader v)
    (.compileShader gl shader)
    (if (.getShaderParameter gl shader (.-COMPILE_STATUS gl))
      shader
      (.log js/console (.getShaderInfoLog gl shader)))))
      
(defn program [gl vs fs]
  (let [p (.createProgram gl)]
    (doto gl
      (.attachShader p vs)
      (.attachShader p fs)
      (.linkProgram p))
    (if (.getProgramParameter gl p (.-LINK_STATUS gl))
      p
      (.log js/console "Could not initialise shaders"))))
      
  
(defn closeAttrsUnifs [gl {attrs :attrs unifs :unifs :as info}]
  (doseq [[n loc] attrs]
    (.disableVertexAttribArray gl loc))
  info)
  
(defn openAttrsUnifs [gl {p :program attrs :attrs unifs :unifs :as info}]
  (let [attrs
        (into {}
          (map
            (fn [n]
              (let [loc (.getAttribLocation gl p (name n))]
                (.enableVertexAttribArray gl loc)
                [n loc]))
            attrs))
        unifs
        (into {}
          (map
            (fn [n]
              [n (.getUniformLocation gl p (name n))])
            unifs))]
    {
      :program p
      :attrs attrs
      :unifs unifs
    }))
    
    
(defn uniform [gl pobj & unifs]
  (doseq [[n type v] unifs]
    (condp = type
      "s2d"
      (let [[tex channel] v]
        (gltex/bind gl tex channel (get-in pobj [:unifs n])))
      
      "1f"
      (.uniform1f gl (get-in pobj [:unifs n]) v)
    
      "2f"
      (.uniform2f gl (get-in pobj [:unifs n]) (aget v 0) (aget v 1))
      
      "m3fv"
      (.uniformMatrix3fv gl (get-in pobj [:unifs n]) false v)
      
      "m4fv"
      (.uniformMatrix4fv gl (get-in pobj [:unifs n]) false v))))
      
(defn programObject [gl attrs unifs vs fs]
  {
    :attrs attrs
    :unifs unifs
    :program
    (program 
      gl
      (shader gl (.-VERTEX_SHADER gl) vs)
      (shader gl (.-FRAGMENT_SHADER gl) fs))
  })

(defn use [gl {program :program :as pobj} draw-fn]
  (let [p (openAttrsUnifs gl pobj)]
    (.useProgram gl program)
    (draw-fn p)
    (closeAttrsUnifs gl p)))
    
(defn spriteProgramObject [gl]
  (programObject
    gl
    [:a_position :a_texCoord]
    [:u_projection :u_transform :u_texTransform :u_tex :u_colorTransform]
    (str
      "attribute vec4"
      " a_position;"
      "attribute vec2"
      " a_texCoord;"
      
      "uniform mat4"
      " u_projection;"
      "uniform mat4"
      " u_transform;"
      "uniform mat3"
      " u_texTransform;"
      "varying vec2"
      " v_texCoord;"

      "void main(){"
      " vec4 pos = u_projection* u_transform* a_position;"
      ; 1. 因為我會將物件都畫在xy平面的第一象現內（y朝上）
      ; 2. 從html的image創建的材質貼圖剛好為上下相反的
      ; 所以直接將座標系上下反轉（y朝下）就可以模擬2D座標系
      " gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w);"
      " v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;"
      "}")
    (str
      "#ifdef GL_ES\n"
      "precision highp float;\n"
      "#endif\n"
  
      "uniform sampler2D"
      " u_tex;"
      "uniform mat4"
      " u_colorTransform;"
      
      "varying vec2"
      " v_texCoord;"
  
      "void main(void){"
      " vec4 color = texture2D( u_tex, v_texCoord );"
      " color = u_colorTransform* color;"
      " gl_FragColor = color;"
      "}")))
      
      
(defn waveProgramObject [gl]
  (programObject
    gl
    [:position :inputTextureCoordinate]
    [:inputImageTexture :normalizedPhase :mouse]
    (str
      "attribute vec4 position;"
      "attribute vec4 inputTextureCoordinate;"
      "varying vec2 textureCoordinate;"
       "void main(){"
          "gl_Position = position;"
           "textureCoordinate = inputTextureCoordinate.xy;"
       "}")
       
    (str
      "#ifdef GL_ES\n"
      "precision highp float;\n"
      "#endif\n"
      
      "varying highp vec2 textureCoordinate;"
      "uniform sampler2D inputImageTexture;"
 
      "uniform float normalizedPhase;"
      
      "uniform vec2 mouse;"
 
      "float m_pi = 3.14159265358979323846;"
 
      "void main() {"
        "vec4 color;"
        "float x = textureCoordinate.x - mouse.x;"
        "float y = textureCoordinate.y - mouse.y;"
        "float dist = sqrt(x*x + y*y);"
        "float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);"
        "gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));"
      "}")))
      
      