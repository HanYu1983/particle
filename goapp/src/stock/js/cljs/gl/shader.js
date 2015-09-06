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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__136432_136433 = gl__$1;G__136432_136433.attachShader(p,vs);
G__136432_136433.attachShader(p,fs);
G__136432_136433.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__136434){var map__136442 = p__136434;var map__136442__$1 = ((cljs.core.seq_QMARK_.call(null,map__136442))?cljs.core.apply.call(null,cljs.core.hash_map,map__136442):map__136442);var info = map__136442__$1;var attrs = cljs.core.get.call(null,map__136442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__136442__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__136443_136449 = cljs.core.seq.call(null,attrs);var chunk__136444_136450 = null;var count__136445_136451 = (0);var i__136446_136452 = (0);while(true){
if((i__136446_136452 < count__136445_136451))
{var vec__136447_136453 = cljs.core._nth.call(null,chunk__136444_136450,i__136446_136452);var n_136454 = cljs.core.nth.call(null,vec__136447_136453,(0),null);var loc_136455 = cljs.core.nth.call(null,vec__136447_136453,(1),null);gl__$1.disableVertexAttribArray(loc_136455);
{
var G__136456 = seq__136443_136449;
var G__136457 = chunk__136444_136450;
var G__136458 = count__136445_136451;
var G__136459 = (i__136446_136452 + (1));
seq__136443_136449 = G__136456;
chunk__136444_136450 = G__136457;
count__136445_136451 = G__136458;
i__136446_136452 = G__136459;
continue;
}
} else
{var temp__4126__auto___136460 = cljs.core.seq.call(null,seq__136443_136449);if(temp__4126__auto___136460)
{var seq__136443_136461__$1 = temp__4126__auto___136460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136443_136461__$1))
{var c__4307__auto___136462 = cljs.core.chunk_first.call(null,seq__136443_136461__$1);{
var G__136463 = cljs.core.chunk_rest.call(null,seq__136443_136461__$1);
var G__136464 = c__4307__auto___136462;
var G__136465 = cljs.core.count.call(null,c__4307__auto___136462);
var G__136466 = (0);
seq__136443_136449 = G__136463;
chunk__136444_136450 = G__136464;
count__136445_136451 = G__136465;
i__136446_136452 = G__136466;
continue;
}
} else
{var vec__136448_136467 = cljs.core.first.call(null,seq__136443_136461__$1);var n_136468 = cljs.core.nth.call(null,vec__136448_136467,(0),null);var loc_136469 = cljs.core.nth.call(null,vec__136448_136467,(1),null);gl__$1.disableVertexAttribArray(loc_136469);
{
var G__136470 = cljs.core.next.call(null,seq__136443_136461__$1);
var G__136471 = null;
var G__136472 = (0);
var G__136473 = (0);
seq__136443_136449 = G__136470;
chunk__136444_136450 = G__136471;
count__136445_136451 = G__136472;
i__136446_136452 = G__136473;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__136474){var map__136476 = p__136474;var map__136476__$1 = ((cljs.core.seq_QMARK_.call(null,map__136476))?cljs.core.apply.call(null,cljs.core.hash_map,map__136476):map__136476);var info = map__136476__$1;var p = cljs.core.get.call(null,map__136476__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__136476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__136476__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__136476,map__136476__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__136476,map__136476__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__136476,map__136476__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__136476,map__136476__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__136491 = cljs.core.seq.call(null,unifs);var chunk__136492 = null;var count__136493 = (0);var i__136494 = (0);while(true){
if((i__136494 < count__136493))
{var vec__136495 = cljs.core._nth.call(null,chunk__136492,i__136494);var n = cljs.core.nth.call(null,vec__136495,(0),null);var type = cljs.core.nth.call(null,vec__136495,(1),null);var v = cljs.core.nth.call(null,vec__136495,(2),null);var pred__136496_136505 = cljs.core._EQ_;var expr__136497_136506 = type;if(cljs.core.truth_(pred__136496_136505.call(null,"s2d",expr__136497_136506)))
{var vec__136499_136507 = v;var tex_136508 = cljs.core.nth.call(null,vec__136499_136507,(0),null);var channel_136509 = cljs.core.nth.call(null,vec__136499_136507,(1),null);gl.texture.bind.call(null,gl__$1,tex_136508,channel_136509,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__136496_136505.call(null,"1f",expr__136497_136506)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__136496_136505.call(null,"2f",expr__136497_136506)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__136496_136505.call(null,"m3fv",expr__136497_136506)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__136496_136505.call(null,"m4fv",expr__136497_136506)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__136497_136506))));
}
}
}
}
}
{
var G__136510 = seq__136491;
var G__136511 = chunk__136492;
var G__136512 = count__136493;
var G__136513 = (i__136494 + (1));
seq__136491 = G__136510;
chunk__136492 = G__136511;
count__136493 = G__136512;
i__136494 = G__136513;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__136491);if(temp__4126__auto__)
{var seq__136491__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136491__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__136491__$1);{
var G__136514 = cljs.core.chunk_rest.call(null,seq__136491__$1);
var G__136515 = c__4307__auto__;
var G__136516 = cljs.core.count.call(null,c__4307__auto__);
var G__136517 = (0);
seq__136491 = G__136514;
chunk__136492 = G__136515;
count__136493 = G__136516;
i__136494 = G__136517;
continue;
}
} else
{var vec__136500 = cljs.core.first.call(null,seq__136491__$1);var n = cljs.core.nth.call(null,vec__136500,(0),null);var type = cljs.core.nth.call(null,vec__136500,(1),null);var v = cljs.core.nth.call(null,vec__136500,(2),null);var pred__136501_136518 = cljs.core._EQ_;var expr__136502_136519 = type;if(cljs.core.truth_(pred__136501_136518.call(null,"s2d",expr__136502_136519)))
{var vec__136504_136520 = v;var tex_136521 = cljs.core.nth.call(null,vec__136504_136520,(0),null);var channel_136522 = cljs.core.nth.call(null,vec__136504_136520,(1),null);gl.texture.bind.call(null,gl__$1,tex_136521,channel_136522,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__136501_136518.call(null,"1f",expr__136502_136519)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__136501_136518.call(null,"2f",expr__136502_136519)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__136501_136518.call(null,"m3fv",expr__136502_136519)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__136501_136518.call(null,"m4fv",expr__136502_136519)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__136502_136519))));
}
}
}
}
}
{
var G__136523 = cljs.core.next.call(null,seq__136491__$1);
var G__136524 = null;
var G__136525 = (0);
var G__136526 = (0);
seq__136491 = G__136523;
chunk__136492 = G__136524;
count__136493 = G__136525;
i__136494 = G__136526;
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
uniform.cljs$lang$applyTo = (function (arglist__136527){
var gl__$1 = cljs.core.first(arglist__136527);
arglist__136527 = cljs.core.next(arglist__136527);
var pobj = cljs.core.first(arglist__136527);
var unifs = cljs.core.rest(arglist__136527);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__136528,draw_fn){var map__136530 = p__136528;var map__136530__$1 = ((cljs.core.seq_QMARK_.call(null,map__136530))?cljs.core.apply.call(null,cljs.core.hash_map,map__136530):map__136530);var pobj = map__136530__$1;var program = cljs.core.get.call(null,map__136530__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
