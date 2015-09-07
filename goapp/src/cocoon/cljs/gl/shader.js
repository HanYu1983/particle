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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__12406_12407 = gl__$1;G__12406_12407.attachShader(p,vs);
G__12406_12407.attachShader(p,fs);
G__12406_12407.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__12408){var map__12416 = p__12408;var map__12416__$1 = ((cljs.core.seq_QMARK_.call(null,map__12416))?cljs.core.apply.call(null,cljs.core.hash_map,map__12416):map__12416);var info = map__12416__$1;var attrs = cljs.core.get.call(null,map__12416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__12416__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__12417_12423 = cljs.core.seq.call(null,attrs);var chunk__12418_12424 = null;var count__12419_12425 = (0);var i__12420_12426 = (0);while(true){
if((i__12420_12426 < count__12419_12425))
{var vec__12421_12427 = cljs.core._nth.call(null,chunk__12418_12424,i__12420_12426);var n_12428 = cljs.core.nth.call(null,vec__12421_12427,(0),null);var loc_12429 = cljs.core.nth.call(null,vec__12421_12427,(1),null);gl__$1.disableVertexAttribArray(loc_12429);
{
var G__12430 = seq__12417_12423;
var G__12431 = chunk__12418_12424;
var G__12432 = count__12419_12425;
var G__12433 = (i__12420_12426 + (1));
seq__12417_12423 = G__12430;
chunk__12418_12424 = G__12431;
count__12419_12425 = G__12432;
i__12420_12426 = G__12433;
continue;
}
} else
{var temp__4126__auto___12434 = cljs.core.seq.call(null,seq__12417_12423);if(temp__4126__auto___12434)
{var seq__12417_12435__$1 = temp__4126__auto___12434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12417_12435__$1))
{var c__4307__auto___12436 = cljs.core.chunk_first.call(null,seq__12417_12435__$1);{
var G__12437 = cljs.core.chunk_rest.call(null,seq__12417_12435__$1);
var G__12438 = c__4307__auto___12436;
var G__12439 = cljs.core.count.call(null,c__4307__auto___12436);
var G__12440 = (0);
seq__12417_12423 = G__12437;
chunk__12418_12424 = G__12438;
count__12419_12425 = G__12439;
i__12420_12426 = G__12440;
continue;
}
} else
{var vec__12422_12441 = cljs.core.first.call(null,seq__12417_12435__$1);var n_12442 = cljs.core.nth.call(null,vec__12422_12441,(0),null);var loc_12443 = cljs.core.nth.call(null,vec__12422_12441,(1),null);gl__$1.disableVertexAttribArray(loc_12443);
{
var G__12444 = cljs.core.next.call(null,seq__12417_12435__$1);
var G__12445 = null;
var G__12446 = (0);
var G__12447 = (0);
seq__12417_12423 = G__12444;
chunk__12418_12424 = G__12445;
count__12419_12425 = G__12446;
i__12420_12426 = G__12447;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__12448){var map__12450 = p__12448;var map__12450__$1 = ((cljs.core.seq_QMARK_.call(null,map__12450))?cljs.core.apply.call(null,cljs.core.hash_map,map__12450):map__12450);var info = map__12450__$1;var p = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__12450,map__12450__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__12450,map__12450__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__12450,map__12450__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__12450,map__12450__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__12465 = cljs.core.seq.call(null,unifs);var chunk__12466 = null;var count__12467 = (0);var i__12468 = (0);while(true){
if((i__12468 < count__12467))
{var vec__12469 = cljs.core._nth.call(null,chunk__12466,i__12468);var n = cljs.core.nth.call(null,vec__12469,(0),null);var type = cljs.core.nth.call(null,vec__12469,(1),null);var v = cljs.core.nth.call(null,vec__12469,(2),null);var pred__12470_12479 = cljs.core._EQ_;var expr__12471_12480 = type;if(cljs.core.truth_(pred__12470_12479.call(null,"s2d",expr__12471_12480)))
{var vec__12473_12481 = v;var tex_12482 = cljs.core.nth.call(null,vec__12473_12481,(0),null);var channel_12483 = cljs.core.nth.call(null,vec__12473_12481,(1),null);gl.texture.bind.call(null,gl__$1,tex_12482,channel_12483,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__12470_12479.call(null,"1f",expr__12471_12480)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__12470_12479.call(null,"2f",expr__12471_12480)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__12470_12479.call(null,"m3fv",expr__12471_12480)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__12470_12479.call(null,"m4fv",expr__12471_12480)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12471_12480))));
}
}
}
}
}
{
var G__12484 = seq__12465;
var G__12485 = chunk__12466;
var G__12486 = count__12467;
var G__12487 = (i__12468 + (1));
seq__12465 = G__12484;
chunk__12466 = G__12485;
count__12467 = G__12486;
i__12468 = G__12487;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12465);if(temp__4126__auto__)
{var seq__12465__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12465__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12465__$1);{
var G__12488 = cljs.core.chunk_rest.call(null,seq__12465__$1);
var G__12489 = c__4307__auto__;
var G__12490 = cljs.core.count.call(null,c__4307__auto__);
var G__12491 = (0);
seq__12465 = G__12488;
chunk__12466 = G__12489;
count__12467 = G__12490;
i__12468 = G__12491;
continue;
}
} else
{var vec__12474 = cljs.core.first.call(null,seq__12465__$1);var n = cljs.core.nth.call(null,vec__12474,(0),null);var type = cljs.core.nth.call(null,vec__12474,(1),null);var v = cljs.core.nth.call(null,vec__12474,(2),null);var pred__12475_12492 = cljs.core._EQ_;var expr__12476_12493 = type;if(cljs.core.truth_(pred__12475_12492.call(null,"s2d",expr__12476_12493)))
{var vec__12478_12494 = v;var tex_12495 = cljs.core.nth.call(null,vec__12478_12494,(0),null);var channel_12496 = cljs.core.nth.call(null,vec__12478_12494,(1),null);gl.texture.bind.call(null,gl__$1,tex_12495,channel_12496,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__12475_12492.call(null,"1f",expr__12476_12493)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__12475_12492.call(null,"2f",expr__12476_12493)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__12475_12492.call(null,"m3fv",expr__12476_12493)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__12475_12492.call(null,"m4fv",expr__12476_12493)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12476_12493))));
}
}
}
}
}
{
var G__12497 = cljs.core.next.call(null,seq__12465__$1);
var G__12498 = null;
var G__12499 = (0);
var G__12500 = (0);
seq__12465 = G__12497;
chunk__12466 = G__12498;
count__12467 = G__12499;
i__12468 = G__12500;
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
uniform.cljs$lang$applyTo = (function (arglist__12501){
var gl__$1 = cljs.core.first(arglist__12501);
arglist__12501 = cljs.core.next(arglist__12501);
var pobj = cljs.core.first(arglist__12501);
var unifs = cljs.core.rest(arglist__12501);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__12502,draw_fn){var map__12504 = p__12502;var map__12504__$1 = ((cljs.core.seq_QMARK_.call(null,map__12504))?cljs.core.apply.call(null,cljs.core.hash_map,map__12504):map__12504);var pobj = map__12504__$1;var program = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
