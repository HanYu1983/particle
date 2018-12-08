// Compiled by ClojureScript 1.10.238 {}
goog.provide('gl.texture');
goog.require('cljs.core');
/**
 * REPEAT | MIRRORED_REPEAT | CLAMP_TO_EDGE | GLAMP_TO_BORDER
 */
gl.texture.parameterTexMode = (function gl$texture$parameterTexMode(gl__$1,sm,tm){
gl__$1.texParameteri(gl__$1.TEXTURE_2D,gl__$1.TEXTURE_WRAP_S,sm);

return gl__$1.texParameteri(gl__$1.TEXTURE_2D,gl__$1.TEXTURE_WRAP_T,tm);
});
/**
 * 貼圖被放大時使用線性內插 | 貼圖被放大時使用線性內插 | webgl預設是repeat模式
 */
gl.texture.parameterDefault = (function gl$texture$parameterDefault(gl__$1){
gl__$1.texParameteri(gl__$1.TEXTURE_2D,gl__$1.TEXTURE_MAG_FILTER,gl__$1.LINEAR);

gl__$1.texParameteri(gl__$1.TEXTURE_2D,gl__$1.TEXTURE_MIN_FILTER,gl__$1.LINEAR);

return gl.texture.parameterTexMode.call(null,gl__$1,gl__$1.CLAMP_TO_EDGE,gl__$1.CLAMP_TO_EDGE);
});
gl.texture.texture = (function gl$texture$texture(gl__$1,img){
var tex = gl__$1.createTexture();
gl__$1.bindTexture(gl__$1.TEXTURE_2D,tex);

gl__$1.texImage2D(gl__$1.TEXTURE_2D,(0),gl__$1.RGBA,gl__$1.RGBA,gl__$1.UNSIGNED_BYTE,img);

gl.texture.parameterDefault.call(null,gl__$1);

return tex;
});
gl.texture.bind = (function gl$texture$bind(gl__$1,tex,channel,loc){
gl__$1.activeTexture((channel + gl__$1.TEXTURE0));

gl__$1.bindTexture(gl__$1.TEXTURE_2D,tex);

return gl__$1.uniform1i(loc,channel);
});

//# sourceMappingURL=texture.js.map
