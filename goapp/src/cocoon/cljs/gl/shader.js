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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__39446_39447 = gl__$1;G__39446_39447.attachShader(p,vs);
G__39446_39447.attachShader(p,fs);
G__39446_39447.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__39448){var map__39456 = p__39448;var map__39456__$1 = ((cljs.core.seq_QMARK_.call(null,map__39456))?cljs.core.apply.call(null,cljs.core.hash_map,map__39456):map__39456);var info = map__39456__$1;var attrs = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__39457_39463 = cljs.core.seq.call(null,attrs);var chunk__39458_39464 = null;var count__39459_39465 = (0);var i__39460_39466 = (0);while(true){
if((i__39460_39466 < count__39459_39465))
{var vec__39461_39467 = cljs.core._nth.call(null,chunk__39458_39464,i__39460_39466);var n_39468 = cljs.core.nth.call(null,vec__39461_39467,(0),null);var loc_39469 = cljs.core.nth.call(null,vec__39461_39467,(1),null);gl__$1.disableVertexAttribArray(loc_39469);
{
var G__39470 = seq__39457_39463;
var G__39471 = chunk__39458_39464;
var G__39472 = count__39459_39465;
var G__39473 = (i__39460_39466 + (1));
seq__39457_39463 = G__39470;
chunk__39458_39464 = G__39471;
count__39459_39465 = G__39472;
i__39460_39466 = G__39473;
continue;
}
} else
{var temp__4126__auto___39474 = cljs.core.seq.call(null,seq__39457_39463);if(temp__4126__auto___39474)
{var seq__39457_39475__$1 = temp__4126__auto___39474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39457_39475__$1))
{var c__4307__auto___39476 = cljs.core.chunk_first.call(null,seq__39457_39475__$1);{
var G__39477 = cljs.core.chunk_rest.call(null,seq__39457_39475__$1);
var G__39478 = c__4307__auto___39476;
var G__39479 = cljs.core.count.call(null,c__4307__auto___39476);
var G__39480 = (0);
seq__39457_39463 = G__39477;
chunk__39458_39464 = G__39478;
count__39459_39465 = G__39479;
i__39460_39466 = G__39480;
continue;
}
} else
{var vec__39462_39481 = cljs.core.first.call(null,seq__39457_39475__$1);var n_39482 = cljs.core.nth.call(null,vec__39462_39481,(0),null);var loc_39483 = cljs.core.nth.call(null,vec__39462_39481,(1),null);gl__$1.disableVertexAttribArray(loc_39483);
{
var G__39484 = cljs.core.next.call(null,seq__39457_39475__$1);
var G__39485 = null;
var G__39486 = (0);
var G__39487 = (0);
seq__39457_39463 = G__39484;
chunk__39458_39464 = G__39485;
count__39459_39465 = G__39486;
i__39460_39466 = G__39487;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__39488){var map__39490 = p__39488;var map__39490__$1 = ((cljs.core.seq_QMARK_.call(null,map__39490))?cljs.core.apply.call(null,cljs.core.hash_map,map__39490):map__39490);var info = map__39490__$1;var p = cljs.core.get.call(null,map__39490__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__39490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39490__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__39490,map__39490__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__39490,map__39490__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__39490,map__39490__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__39490,map__39490__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__39505 = cljs.core.seq.call(null,unifs);var chunk__39506 = null;var count__39507 = (0);var i__39508 = (0);while(true){
if((i__39508 < count__39507))
{var vec__39509 = cljs.core._nth.call(null,chunk__39506,i__39508);var n = cljs.core.nth.call(null,vec__39509,(0),null);var type = cljs.core.nth.call(null,vec__39509,(1),null);var v = cljs.core.nth.call(null,vec__39509,(2),null);var pred__39510_39519 = cljs.core._EQ_;var expr__39511_39520 = type;if(cljs.core.truth_(pred__39510_39519.call(null,"s2d",expr__39511_39520)))
{var vec__39513_39521 = v;var tex_39522 = cljs.core.nth.call(null,vec__39513_39521,(0),null);var channel_39523 = cljs.core.nth.call(null,vec__39513_39521,(1),null);gl.texture.bind.call(null,gl__$1,tex_39522,channel_39523,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39510_39519.call(null,"1f",expr__39511_39520)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39510_39519.call(null,"2f",expr__39511_39520)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39510_39519.call(null,"m3fv",expr__39511_39520)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39510_39519.call(null,"m4fv",expr__39511_39520)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39511_39520))));
}
}
}
}
}
{
var G__39524 = seq__39505;
var G__39525 = chunk__39506;
var G__39526 = count__39507;
var G__39527 = (i__39508 + (1));
seq__39505 = G__39524;
chunk__39506 = G__39525;
count__39507 = G__39526;
i__39508 = G__39527;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39505);if(temp__4126__auto__)
{var seq__39505__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39505__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__39505__$1);{
var G__39528 = cljs.core.chunk_rest.call(null,seq__39505__$1);
var G__39529 = c__4307__auto__;
var G__39530 = cljs.core.count.call(null,c__4307__auto__);
var G__39531 = (0);
seq__39505 = G__39528;
chunk__39506 = G__39529;
count__39507 = G__39530;
i__39508 = G__39531;
continue;
}
} else
{var vec__39514 = cljs.core.first.call(null,seq__39505__$1);var n = cljs.core.nth.call(null,vec__39514,(0),null);var type = cljs.core.nth.call(null,vec__39514,(1),null);var v = cljs.core.nth.call(null,vec__39514,(2),null);var pred__39515_39532 = cljs.core._EQ_;var expr__39516_39533 = type;if(cljs.core.truth_(pred__39515_39532.call(null,"s2d",expr__39516_39533)))
{var vec__39518_39534 = v;var tex_39535 = cljs.core.nth.call(null,vec__39518_39534,(0),null);var channel_39536 = cljs.core.nth.call(null,vec__39518_39534,(1),null);gl.texture.bind.call(null,gl__$1,tex_39535,channel_39536,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39515_39532.call(null,"1f",expr__39516_39533)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39515_39532.call(null,"2f",expr__39516_39533)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39515_39532.call(null,"m3fv",expr__39516_39533)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39515_39532.call(null,"m4fv",expr__39516_39533)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39516_39533))));
}
}
}
}
}
{
var G__39537 = cljs.core.next.call(null,seq__39505__$1);
var G__39538 = null;
var G__39539 = (0);
var G__39540 = (0);
seq__39505 = G__39537;
chunk__39506 = G__39538;
count__39507 = G__39539;
i__39508 = G__39540;
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
uniform.cljs$lang$applyTo = (function (arglist__39541){
var gl__$1 = cljs.core.first(arglist__39541);
arglist__39541 = cljs.core.next(arglist__39541);
var pobj = cljs.core.first(arglist__39541);
var unifs = cljs.core.rest(arglist__39541);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__39542,draw_fn){var map__39544 = p__39542;var map__39544__$1 = ((cljs.core.seq_QMARK_.call(null,map__39544))?cljs.core.apply.call(null,cljs.core.hash_map,map__39544):map__39544);var pobj = map__39544__$1;var program = cljs.core.get.call(null,map__39544__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a = u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
