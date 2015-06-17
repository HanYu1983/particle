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
      " gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w);" ;將座標系上下反轉
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