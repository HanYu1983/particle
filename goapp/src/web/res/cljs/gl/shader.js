// Compiled by ClojureScript 0.0-2268
goog.provide('gl.shader');
goog.require('cljs.core');
goog.require('gl.texture');
goog.require('gl.texture');
gl.shader.shader = (function shader(gl__$1,type,v){var shader__$1 = gl__$1.createShader(type);gl__$1.shaderSource(shader__$1,v);
gl__$1.compileShader(shader__$1);
if(cljs.core.truth_(gl__$1.getShaderParameter(shader__$1,gl__$1.COMPILE_STATUS)))
{return shader__$1;
} else
{return console.log(gl__$1.getShaderInfoLog(shader__$1));
}
});
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__139738_139739 = gl__$1;G__139738_139739.attachShader(p,vs);
G__139738_139739.attachShader(p,fs);
G__139738_139739.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__139740){var map__139748 = p__139740;var map__139748__$1 = ((cljs.core.seq_QMARK_.call(null,map__139748))?cljs.core.apply.call(null,cljs.core.hash_map,map__139748):map__139748);var info = map__139748__$1;var attrs = cljs.core.get.call(null,map__139748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__139748__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__139749_139755 = cljs.core.seq.call(null,attrs);var chunk__139750_139756 = null;var count__139751_139757 = (0);var i__139752_139758 = (0);while(true){
if((i__139752_139758 < count__139751_139757))
{var vec__139753_139759 = cljs.core._nth.call(null,chunk__139750_139756,i__139752_139758);var n_139760 = cljs.core.nth.call(null,vec__139753_139759,(0),null);var loc_139761 = cljs.core.nth.call(null,vec__139753_139759,(1),null);gl__$1.disableVertexAttribArray(loc_139761);
{
var G__139762 = seq__139749_139755;
var G__139763 = chunk__139750_139756;
var G__139764 = count__139751_139757;
var G__139765 = (i__139752_139758 + (1));
seq__139749_139755 = G__139762;
chunk__139750_139756 = G__139763;
count__139751_139757 = G__139764;
i__139752_139758 = G__139765;
continue;
}
} else
{var temp__4126__auto___139766 = cljs.core.seq.call(null,seq__139749_139755);if(temp__4126__auto___139766)
{var seq__139749_139767__$1 = temp__4126__auto___139766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139749_139767__$1))
{var c__4307__auto___139768 = cljs.core.chunk_first.call(null,seq__139749_139767__$1);{
var G__139769 = cljs.core.chunk_rest.call(null,seq__139749_139767__$1);
var G__139770 = c__4307__auto___139768;
var G__139771 = cljs.core.count.call(null,c__4307__auto___139768);
var G__139772 = (0);
seq__139749_139755 = G__139769;
chunk__139750_139756 = G__139770;
count__139751_139757 = G__139771;
i__139752_139758 = G__139772;
continue;
}
} else
{var vec__139754_139773 = cljs.core.first.call(null,seq__139749_139767__$1);var n_139774 = cljs.core.nth.call(null,vec__139754_139773,(0),null);var loc_139775 = cljs.core.nth.call(null,vec__139754_139773,(1),null);gl__$1.disableVertexAttribArray(loc_139775);
{
var G__139776 = cljs.core.next.call(null,seq__139749_139767__$1);
var G__139777 = null;
var G__139778 = (0);
var G__139779 = (0);
seq__139749_139755 = G__139776;
chunk__139750_139756 = G__139777;
count__139751_139757 = G__139778;
i__139752_139758 = G__139779;
continue;
}
}
} else
{}
}
break;
}
return info;
});
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__139780){var map__139782 = p__139780;var map__139782__$1 = ((cljs.core.seq_QMARK_.call(null,map__139782))?cljs.core.apply.call(null,cljs.core.hash_map,map__139782):map__139782);var info = map__139782__$1;var p = cljs.core.get.call(null,map__139782__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__139782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__139782__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__139782,map__139782__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__139782,map__139782__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__139782,map__139782__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__139782,map__139782__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__139797 = cljs.core.seq.call(null,unifs);var chunk__139798 = null;var count__139799 = (0);var i__139800 = (0);while(true){
if((i__139800 < count__139799))
{var vec__139801 = cljs.core._nth.call(null,chunk__139798,i__139800);var n = cljs.core.nth.call(null,vec__139801,(0),null);var type = cljs.core.nth.call(null,vec__139801,(1),null);var v = cljs.core.nth.call(null,vec__139801,(2),null);var pred__139802_139811 = cljs.core._EQ_;var expr__139803_139812 = type;if(cljs.core.truth_(pred__139802_139811.call(null,"s2d",expr__139803_139812)))
{var vec__139805_139813 = v;var tex_139814 = cljs.core.nth.call(null,vec__139805_139813,(0),null);var channel_139815 = cljs.core.nth.call(null,vec__139805_139813,(1),null);gl.texture.bind.call(null,gl__$1,tex_139814,channel_139815,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__139802_139811.call(null,"1f",expr__139803_139812)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__139802_139811.call(null,"2f",expr__139803_139812)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__139802_139811.call(null,"m3fv",expr__139803_139812)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__139802_139811.call(null,"m4fv",expr__139803_139812)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__139803_139812))));
}
}
}
}
}
{
var G__139816 = seq__139797;
var G__139817 = chunk__139798;
var G__139818 = count__139799;
var G__139819 = (i__139800 + (1));
seq__139797 = G__139816;
chunk__139798 = G__139817;
count__139799 = G__139818;
i__139800 = G__139819;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__139797);if(temp__4126__auto__)
{var seq__139797__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139797__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__139797__$1);{
var G__139820 = cljs.core.chunk_rest.call(null,seq__139797__$1);
var G__139821 = c__4307__auto__;
var G__139822 = cljs.core.count.call(null,c__4307__auto__);
var G__139823 = (0);
seq__139797 = G__139820;
chunk__139798 = G__139821;
count__139799 = G__139822;
i__139800 = G__139823;
continue;
}
} else
{var vec__139806 = cljs.core.first.call(null,seq__139797__$1);var n = cljs.core.nth.call(null,vec__139806,(0),null);var type = cljs.core.nth.call(null,vec__139806,(1),null);var v = cljs.core.nth.call(null,vec__139806,(2),null);var pred__139807_139824 = cljs.core._EQ_;var expr__139808_139825 = type;if(cljs.core.truth_(pred__139807_139824.call(null,"s2d",expr__139808_139825)))
{var vec__139810_139826 = v;var tex_139827 = cljs.core.nth.call(null,vec__139810_139826,(0),null);var channel_139828 = cljs.core.nth.call(null,vec__139810_139826,(1),null);gl.texture.bind.call(null,gl__$1,tex_139827,channel_139828,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__139807_139824.call(null,"1f",expr__139808_139825)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__139807_139824.call(null,"2f",expr__139808_139825)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__139807_139824.call(null,"m3fv",expr__139808_139825)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__139807_139824.call(null,"m4fv",expr__139808_139825)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__139808_139825))));
}
}
}
}
}
{
var G__139829 = cljs.core.next.call(null,seq__139797__$1);
var G__139830 = null;
var G__139831 = (0);
var G__139832 = (0);
seq__139797 = G__139829;
chunk__139798 = G__139830;
count__139799 = G__139831;
i__139800 = G__139832;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var uniform = function (gl__$1,pobj,var_args){
var unifs = null;if (arguments.length > 2) {
  unifs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return uniform__delegate.call(this,gl__$1,pobj,unifs);};
uniform.cljs$lang$maxFixedArity = 2;
uniform.cljs$lang$applyTo = (function (arglist__139833){
var gl__$1 = cljs.core.first(arglist__139833);
arglist__139833 = cljs.core.next(arglist__139833);
var pobj = cljs.core.first(arglist__139833);
var unifs = cljs.core.rest(arglist__139833);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__139834,draw_fn){var map__139836 = p__139834;var map__139836__$1 = ((cljs.core.seq_QMARK_.call(null,map__139836))?cljs.core.apply.call(null,cljs.core.hash_map,map__139836):map__139836);var pobj = map__139836__$1;var program = cljs.core.get.call(null,map__139836__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
