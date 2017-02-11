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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__54280_54281 = gl__$1;G__54280_54281.attachShader(p,vs);
G__54280_54281.attachShader(p,fs);
G__54280_54281.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__54282){var map__54290 = p__54282;var map__54290__$1 = ((cljs.core.seq_QMARK_.call(null,map__54290))?cljs.core.apply.call(null,cljs.core.hash_map,map__54290):map__54290);var info = map__54290__$1;var attrs = cljs.core.get.call(null,map__54290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__54290__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__54291_54297 = cljs.core.seq.call(null,attrs);var chunk__54292_54298 = null;var count__54293_54299 = (0);var i__54294_54300 = (0);while(true){
if((i__54294_54300 < count__54293_54299))
{var vec__54295_54301 = cljs.core._nth.call(null,chunk__54292_54298,i__54294_54300);var n_54302 = cljs.core.nth.call(null,vec__54295_54301,(0),null);var loc_54303 = cljs.core.nth.call(null,vec__54295_54301,(1),null);gl__$1.disableVertexAttribArray(loc_54303);
{
var G__54304 = seq__54291_54297;
var G__54305 = chunk__54292_54298;
var G__54306 = count__54293_54299;
var G__54307 = (i__54294_54300 + (1));
seq__54291_54297 = G__54304;
chunk__54292_54298 = G__54305;
count__54293_54299 = G__54306;
i__54294_54300 = G__54307;
continue;
}
} else
{var temp__4126__auto___54308 = cljs.core.seq.call(null,seq__54291_54297);if(temp__4126__auto___54308)
{var seq__54291_54309__$1 = temp__4126__auto___54308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54291_54309__$1))
{var c__4307__auto___54310 = cljs.core.chunk_first.call(null,seq__54291_54309__$1);{
var G__54311 = cljs.core.chunk_rest.call(null,seq__54291_54309__$1);
var G__54312 = c__4307__auto___54310;
var G__54313 = cljs.core.count.call(null,c__4307__auto___54310);
var G__54314 = (0);
seq__54291_54297 = G__54311;
chunk__54292_54298 = G__54312;
count__54293_54299 = G__54313;
i__54294_54300 = G__54314;
continue;
}
} else
{var vec__54296_54315 = cljs.core.first.call(null,seq__54291_54309__$1);var n_54316 = cljs.core.nth.call(null,vec__54296_54315,(0),null);var loc_54317 = cljs.core.nth.call(null,vec__54296_54315,(1),null);gl__$1.disableVertexAttribArray(loc_54317);
{
var G__54318 = cljs.core.next.call(null,seq__54291_54309__$1);
var G__54319 = null;
var G__54320 = (0);
var G__54321 = (0);
seq__54291_54297 = G__54318;
chunk__54292_54298 = G__54319;
count__54293_54299 = G__54320;
i__54294_54300 = G__54321;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__54322){var map__54324 = p__54322;var map__54324__$1 = ((cljs.core.seq_QMARK_.call(null,map__54324))?cljs.core.apply.call(null,cljs.core.hash_map,map__54324):map__54324);var info = map__54324__$1;var p = cljs.core.get.call(null,map__54324__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__54324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__54324__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__54324,map__54324__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__54324,map__54324__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__54324,map__54324__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__54324,map__54324__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__54339 = cljs.core.seq.call(null,unifs);var chunk__54340 = null;var count__54341 = (0);var i__54342 = (0);while(true){
if((i__54342 < count__54341))
{var vec__54343 = cljs.core._nth.call(null,chunk__54340,i__54342);var n = cljs.core.nth.call(null,vec__54343,(0),null);var type = cljs.core.nth.call(null,vec__54343,(1),null);var v = cljs.core.nth.call(null,vec__54343,(2),null);var pred__54344_54353 = cljs.core._EQ_;var expr__54345_54354 = type;if(cljs.core.truth_(pred__54344_54353.call(null,"s2d",expr__54345_54354)))
{var vec__54347_54355 = v;var tex_54356 = cljs.core.nth.call(null,vec__54347_54355,(0),null);var channel_54357 = cljs.core.nth.call(null,vec__54347_54355,(1),null);gl.texture.bind.call(null,gl__$1,tex_54356,channel_54357,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__54344_54353.call(null,"1f",expr__54345_54354)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__54344_54353.call(null,"2f",expr__54345_54354)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__54344_54353.call(null,"m3fv",expr__54345_54354)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__54344_54353.call(null,"m4fv",expr__54345_54354)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54345_54354))));
}
}
}
}
}
{
var G__54358 = seq__54339;
var G__54359 = chunk__54340;
var G__54360 = count__54341;
var G__54361 = (i__54342 + (1));
seq__54339 = G__54358;
chunk__54340 = G__54359;
count__54341 = G__54360;
i__54342 = G__54361;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54339);if(temp__4126__auto__)
{var seq__54339__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54339__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__54339__$1);{
var G__54362 = cljs.core.chunk_rest.call(null,seq__54339__$1);
var G__54363 = c__4307__auto__;
var G__54364 = cljs.core.count.call(null,c__4307__auto__);
var G__54365 = (0);
seq__54339 = G__54362;
chunk__54340 = G__54363;
count__54341 = G__54364;
i__54342 = G__54365;
continue;
}
} else
{var vec__54348 = cljs.core.first.call(null,seq__54339__$1);var n = cljs.core.nth.call(null,vec__54348,(0),null);var type = cljs.core.nth.call(null,vec__54348,(1),null);var v = cljs.core.nth.call(null,vec__54348,(2),null);var pred__54349_54366 = cljs.core._EQ_;var expr__54350_54367 = type;if(cljs.core.truth_(pred__54349_54366.call(null,"s2d",expr__54350_54367)))
{var vec__54352_54368 = v;var tex_54369 = cljs.core.nth.call(null,vec__54352_54368,(0),null);var channel_54370 = cljs.core.nth.call(null,vec__54352_54368,(1),null);gl.texture.bind.call(null,gl__$1,tex_54369,channel_54370,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__54349_54366.call(null,"1f",expr__54350_54367)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__54349_54366.call(null,"2f",expr__54350_54367)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__54349_54366.call(null,"m3fv",expr__54350_54367)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__54349_54366.call(null,"m4fv",expr__54350_54367)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54350_54367))));
}
}
}
}
}
{
var G__54371 = cljs.core.next.call(null,seq__54339__$1);
var G__54372 = null;
var G__54373 = (0);
var G__54374 = (0);
seq__54339 = G__54371;
chunk__54340 = G__54372;
count__54341 = G__54373;
i__54342 = G__54374;
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
uniform.cljs$lang$applyTo = (function (arglist__54375){
var gl__$1 = cljs.core.first(arglist__54375);
arglist__54375 = cljs.core.next(arglist__54375);
var pobj = cljs.core.first(arglist__54375);
var unifs = cljs.core.rest(arglist__54375);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__54376,draw_fn){var map__54378 = p__54376;var map__54378__$1 = ((cljs.core.seq_QMARK_.call(null,map__54378))?cljs.core.apply.call(null,cljs.core.hash_map,map__54378):map__54378);var pobj = map__54378__$1;var program = cljs.core.get.call(null,map__54378__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a *= u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
