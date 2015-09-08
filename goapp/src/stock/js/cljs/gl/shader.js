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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__54080_54081 = gl__$1;G__54080_54081.attachShader(p,vs);
G__54080_54081.attachShader(p,fs);
G__54080_54081.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__54082){var map__54090 = p__54082;var map__54090__$1 = ((cljs.core.seq_QMARK_.call(null,map__54090))?cljs.core.apply.call(null,cljs.core.hash_map,map__54090):map__54090);var info = map__54090__$1;var attrs = cljs.core.get.call(null,map__54090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__54090__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__54091_54097 = cljs.core.seq.call(null,attrs);var chunk__54092_54098 = null;var count__54093_54099 = (0);var i__54094_54100 = (0);while(true){
if((i__54094_54100 < count__54093_54099))
{var vec__54095_54101 = cljs.core._nth.call(null,chunk__54092_54098,i__54094_54100);var n_54102 = cljs.core.nth.call(null,vec__54095_54101,(0),null);var loc_54103 = cljs.core.nth.call(null,vec__54095_54101,(1),null);gl__$1.disableVertexAttribArray(loc_54103);
{
var G__54104 = seq__54091_54097;
var G__54105 = chunk__54092_54098;
var G__54106 = count__54093_54099;
var G__54107 = (i__54094_54100 + (1));
seq__54091_54097 = G__54104;
chunk__54092_54098 = G__54105;
count__54093_54099 = G__54106;
i__54094_54100 = G__54107;
continue;
}
} else
{var temp__4126__auto___54108 = cljs.core.seq.call(null,seq__54091_54097);if(temp__4126__auto___54108)
{var seq__54091_54109__$1 = temp__4126__auto___54108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54091_54109__$1))
{var c__4307__auto___54110 = cljs.core.chunk_first.call(null,seq__54091_54109__$1);{
var G__54111 = cljs.core.chunk_rest.call(null,seq__54091_54109__$1);
var G__54112 = c__4307__auto___54110;
var G__54113 = cljs.core.count.call(null,c__4307__auto___54110);
var G__54114 = (0);
seq__54091_54097 = G__54111;
chunk__54092_54098 = G__54112;
count__54093_54099 = G__54113;
i__54094_54100 = G__54114;
continue;
}
} else
{var vec__54096_54115 = cljs.core.first.call(null,seq__54091_54109__$1);var n_54116 = cljs.core.nth.call(null,vec__54096_54115,(0),null);var loc_54117 = cljs.core.nth.call(null,vec__54096_54115,(1),null);gl__$1.disableVertexAttribArray(loc_54117);
{
var G__54118 = cljs.core.next.call(null,seq__54091_54109__$1);
var G__54119 = null;
var G__54120 = (0);
var G__54121 = (0);
seq__54091_54097 = G__54118;
chunk__54092_54098 = G__54119;
count__54093_54099 = G__54120;
i__54094_54100 = G__54121;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__54122){var map__54124 = p__54122;var map__54124__$1 = ((cljs.core.seq_QMARK_.call(null,map__54124))?cljs.core.apply.call(null,cljs.core.hash_map,map__54124):map__54124);var info = map__54124__$1;var p = cljs.core.get.call(null,map__54124__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__54124__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__54124__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__54124,map__54124__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__54124,map__54124__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__54124,map__54124__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__54124,map__54124__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__54139 = cljs.core.seq.call(null,unifs);var chunk__54140 = null;var count__54141 = (0);var i__54142 = (0);while(true){
if((i__54142 < count__54141))
{var vec__54143 = cljs.core._nth.call(null,chunk__54140,i__54142);var n = cljs.core.nth.call(null,vec__54143,(0),null);var type = cljs.core.nth.call(null,vec__54143,(1),null);var v = cljs.core.nth.call(null,vec__54143,(2),null);var pred__54144_54153 = cljs.core._EQ_;var expr__54145_54154 = type;if(cljs.core.truth_(pred__54144_54153.call(null,"s2d",expr__54145_54154)))
{var vec__54147_54155 = v;var tex_54156 = cljs.core.nth.call(null,vec__54147_54155,(0),null);var channel_54157 = cljs.core.nth.call(null,vec__54147_54155,(1),null);gl.texture.bind.call(null,gl__$1,tex_54156,channel_54157,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__54144_54153.call(null,"1f",expr__54145_54154)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__54144_54153.call(null,"2f",expr__54145_54154)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__54144_54153.call(null,"m3fv",expr__54145_54154)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__54144_54153.call(null,"m4fv",expr__54145_54154)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54145_54154))));
}
}
}
}
}
{
var G__54158 = seq__54139;
var G__54159 = chunk__54140;
var G__54160 = count__54141;
var G__54161 = (i__54142 + (1));
seq__54139 = G__54158;
chunk__54140 = G__54159;
count__54141 = G__54160;
i__54142 = G__54161;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54139);if(temp__4126__auto__)
{var seq__54139__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54139__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__54139__$1);{
var G__54162 = cljs.core.chunk_rest.call(null,seq__54139__$1);
var G__54163 = c__4307__auto__;
var G__54164 = cljs.core.count.call(null,c__4307__auto__);
var G__54165 = (0);
seq__54139 = G__54162;
chunk__54140 = G__54163;
count__54141 = G__54164;
i__54142 = G__54165;
continue;
}
} else
{var vec__54148 = cljs.core.first.call(null,seq__54139__$1);var n = cljs.core.nth.call(null,vec__54148,(0),null);var type = cljs.core.nth.call(null,vec__54148,(1),null);var v = cljs.core.nth.call(null,vec__54148,(2),null);var pred__54149_54166 = cljs.core._EQ_;var expr__54150_54167 = type;if(cljs.core.truth_(pred__54149_54166.call(null,"s2d",expr__54150_54167)))
{var vec__54152_54168 = v;var tex_54169 = cljs.core.nth.call(null,vec__54152_54168,(0),null);var channel_54170 = cljs.core.nth.call(null,vec__54152_54168,(1),null);gl.texture.bind.call(null,gl__$1,tex_54169,channel_54170,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__54149_54166.call(null,"1f",expr__54150_54167)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__54149_54166.call(null,"2f",expr__54150_54167)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__54149_54166.call(null,"m3fv",expr__54150_54167)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__54149_54166.call(null,"m4fv",expr__54150_54167)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54150_54167))));
}
}
}
}
}
{
var G__54171 = cljs.core.next.call(null,seq__54139__$1);
var G__54172 = null;
var G__54173 = (0);
var G__54174 = (0);
seq__54139 = G__54171;
chunk__54140 = G__54172;
count__54141 = G__54173;
i__54142 = G__54174;
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
uniform.cljs$lang$applyTo = (function (arglist__54175){
var gl__$1 = cljs.core.first(arglist__54175);
arglist__54175 = cljs.core.next(arglist__54175);
var pobj = cljs.core.first(arglist__54175);
var unifs = cljs.core.rest(arglist__54175);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__54176,draw_fn){var map__54178 = p__54176;var map__54178__$1 = ((cljs.core.seq_QMARK_.call(null,map__54178))?cljs.core.apply.call(null,cljs.core.hash_map,map__54178):map__54178);var pobj = map__54178__$1;var program = cljs.core.get.call(null,map__54178__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a *= u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
