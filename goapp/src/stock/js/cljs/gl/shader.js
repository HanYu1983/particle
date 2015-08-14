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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__10471_10472 = gl__$1;G__10471_10472.attachShader(p,vs);
G__10471_10472.attachShader(p,fs);
G__10471_10472.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__10473){var map__10481 = p__10473;var map__10481__$1 = ((cljs.core.seq_QMARK_.call(null,map__10481))?cljs.core.apply.call(null,cljs.core.hash_map,map__10481):map__10481);var info = map__10481__$1;var attrs = cljs.core.get.call(null,map__10481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__10481__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__10482_10488 = cljs.core.seq.call(null,attrs);var chunk__10483_10489 = null;var count__10484_10490 = (0);var i__10485_10491 = (0);while(true){
if((i__10485_10491 < count__10484_10490))
{var vec__10486_10492 = cljs.core._nth.call(null,chunk__10483_10489,i__10485_10491);var n_10493 = cljs.core.nth.call(null,vec__10486_10492,(0),null);var loc_10494 = cljs.core.nth.call(null,vec__10486_10492,(1),null);gl__$1.disableVertexAttribArray(loc_10494);
{
var G__10495 = seq__10482_10488;
var G__10496 = chunk__10483_10489;
var G__10497 = count__10484_10490;
var G__10498 = (i__10485_10491 + (1));
seq__10482_10488 = G__10495;
chunk__10483_10489 = G__10496;
count__10484_10490 = G__10497;
i__10485_10491 = G__10498;
continue;
}
} else
{var temp__4126__auto___10499 = cljs.core.seq.call(null,seq__10482_10488);if(temp__4126__auto___10499)
{var seq__10482_10500__$1 = temp__4126__auto___10499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10482_10500__$1))
{var c__4307__auto___10501 = cljs.core.chunk_first.call(null,seq__10482_10500__$1);{
var G__10502 = cljs.core.chunk_rest.call(null,seq__10482_10500__$1);
var G__10503 = c__4307__auto___10501;
var G__10504 = cljs.core.count.call(null,c__4307__auto___10501);
var G__10505 = (0);
seq__10482_10488 = G__10502;
chunk__10483_10489 = G__10503;
count__10484_10490 = G__10504;
i__10485_10491 = G__10505;
continue;
}
} else
{var vec__10487_10506 = cljs.core.first.call(null,seq__10482_10500__$1);var n_10507 = cljs.core.nth.call(null,vec__10487_10506,(0),null);var loc_10508 = cljs.core.nth.call(null,vec__10487_10506,(1),null);gl__$1.disableVertexAttribArray(loc_10508);
{
var G__10509 = cljs.core.next.call(null,seq__10482_10500__$1);
var G__10510 = null;
var G__10511 = (0);
var G__10512 = (0);
seq__10482_10488 = G__10509;
chunk__10483_10489 = G__10510;
count__10484_10490 = G__10511;
i__10485_10491 = G__10512;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__10513){var map__10515 = p__10513;var map__10515__$1 = ((cljs.core.seq_QMARK_.call(null,map__10515))?cljs.core.apply.call(null,cljs.core.hash_map,map__10515):map__10515);var info = map__10515__$1;var p = cljs.core.get.call(null,map__10515__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__10515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__10515__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__10515,map__10515__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__10515,map__10515__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__10515,map__10515__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__10515,map__10515__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__10530 = cljs.core.seq.call(null,unifs);var chunk__10531 = null;var count__10532 = (0);var i__10533 = (0);while(true){
if((i__10533 < count__10532))
{var vec__10534 = cljs.core._nth.call(null,chunk__10531,i__10533);var n = cljs.core.nth.call(null,vec__10534,(0),null);var type = cljs.core.nth.call(null,vec__10534,(1),null);var v = cljs.core.nth.call(null,vec__10534,(2),null);var pred__10535_10544 = cljs.core._EQ_;var expr__10536_10545 = type;if(cljs.core.truth_(pred__10535_10544.call(null,"s2d",expr__10536_10545)))
{var vec__10538_10546 = v;var tex_10547 = cljs.core.nth.call(null,vec__10538_10546,(0),null);var channel_10548 = cljs.core.nth.call(null,vec__10538_10546,(1),null);gl.texture.bind.call(null,gl__$1,tex_10547,channel_10548,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__10535_10544.call(null,"1f",expr__10536_10545)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__10535_10544.call(null,"2f",expr__10536_10545)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__10535_10544.call(null,"m3fv",expr__10536_10545)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__10535_10544.call(null,"m4fv",expr__10536_10545)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10536_10545))));
}
}
}
}
}
{
var G__10549 = seq__10530;
var G__10550 = chunk__10531;
var G__10551 = count__10532;
var G__10552 = (i__10533 + (1));
seq__10530 = G__10549;
chunk__10531 = G__10550;
count__10532 = G__10551;
i__10533 = G__10552;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10530);if(temp__4126__auto__)
{var seq__10530__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10530__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10530__$1);{
var G__10553 = cljs.core.chunk_rest.call(null,seq__10530__$1);
var G__10554 = c__4307__auto__;
var G__10555 = cljs.core.count.call(null,c__4307__auto__);
var G__10556 = (0);
seq__10530 = G__10553;
chunk__10531 = G__10554;
count__10532 = G__10555;
i__10533 = G__10556;
continue;
}
} else
{var vec__10539 = cljs.core.first.call(null,seq__10530__$1);var n = cljs.core.nth.call(null,vec__10539,(0),null);var type = cljs.core.nth.call(null,vec__10539,(1),null);var v = cljs.core.nth.call(null,vec__10539,(2),null);var pred__10540_10557 = cljs.core._EQ_;var expr__10541_10558 = type;if(cljs.core.truth_(pred__10540_10557.call(null,"s2d",expr__10541_10558)))
{var vec__10543_10559 = v;var tex_10560 = cljs.core.nth.call(null,vec__10543_10559,(0),null);var channel_10561 = cljs.core.nth.call(null,vec__10543_10559,(1),null);gl.texture.bind.call(null,gl__$1,tex_10560,channel_10561,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__10540_10557.call(null,"1f",expr__10541_10558)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__10540_10557.call(null,"2f",expr__10541_10558)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__10540_10557.call(null,"m3fv",expr__10541_10558)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__10540_10557.call(null,"m4fv",expr__10541_10558)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10541_10558))));
}
}
}
}
}
{
var G__10562 = cljs.core.next.call(null,seq__10530__$1);
var G__10563 = null;
var G__10564 = (0);
var G__10565 = (0);
seq__10530 = G__10562;
chunk__10531 = G__10563;
count__10532 = G__10564;
i__10533 = G__10565;
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
uniform.cljs$lang$applyTo = (function (arglist__10566){
var gl__$1 = cljs.core.first(arglist__10566);
arglist__10566 = cljs.core.next(arglist__10566);
var pobj = cljs.core.first(arglist__10566);
var unifs = cljs.core.rest(arglist__10566);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__10567,draw_fn){var map__10569 = p__10567;var map__10569__$1 = ((cljs.core.seq_QMARK_.call(null,map__10569))?cljs.core.apply.call(null,cljs.core.hash_map,map__10569):map__10569);var pobj = map__10569__$1;var program = cljs.core.get.call(null,map__10569__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); color = u_colorTransform* color; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
