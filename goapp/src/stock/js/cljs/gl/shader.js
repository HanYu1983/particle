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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__39546_39547 = gl__$1;G__39546_39547.attachShader(p,vs);
G__39546_39547.attachShader(p,fs);
G__39546_39547.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__39548){var map__39556 = p__39548;var map__39556__$1 = ((cljs.core.seq_QMARK_.call(null,map__39556))?cljs.core.apply.call(null,cljs.core.hash_map,map__39556):map__39556);var info = map__39556__$1;var attrs = cljs.core.get.call(null,map__39556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39556__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__39557_39563 = cljs.core.seq.call(null,attrs);var chunk__39558_39564 = null;var count__39559_39565 = (0);var i__39560_39566 = (0);while(true){
if((i__39560_39566 < count__39559_39565))
{var vec__39561_39567 = cljs.core._nth.call(null,chunk__39558_39564,i__39560_39566);var n_39568 = cljs.core.nth.call(null,vec__39561_39567,(0),null);var loc_39569 = cljs.core.nth.call(null,vec__39561_39567,(1),null);gl__$1.disableVertexAttribArray(loc_39569);
{
var G__39570 = seq__39557_39563;
var G__39571 = chunk__39558_39564;
var G__39572 = count__39559_39565;
var G__39573 = (i__39560_39566 + (1));
seq__39557_39563 = G__39570;
chunk__39558_39564 = G__39571;
count__39559_39565 = G__39572;
i__39560_39566 = G__39573;
continue;
}
} else
{var temp__4126__auto___39574 = cljs.core.seq.call(null,seq__39557_39563);if(temp__4126__auto___39574)
{var seq__39557_39575__$1 = temp__4126__auto___39574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39557_39575__$1))
{var c__4307__auto___39576 = cljs.core.chunk_first.call(null,seq__39557_39575__$1);{
var G__39577 = cljs.core.chunk_rest.call(null,seq__39557_39575__$1);
var G__39578 = c__4307__auto___39576;
var G__39579 = cljs.core.count.call(null,c__4307__auto___39576);
var G__39580 = (0);
seq__39557_39563 = G__39577;
chunk__39558_39564 = G__39578;
count__39559_39565 = G__39579;
i__39560_39566 = G__39580;
continue;
}
} else
{var vec__39562_39581 = cljs.core.first.call(null,seq__39557_39575__$1);var n_39582 = cljs.core.nth.call(null,vec__39562_39581,(0),null);var loc_39583 = cljs.core.nth.call(null,vec__39562_39581,(1),null);gl__$1.disableVertexAttribArray(loc_39583);
{
var G__39584 = cljs.core.next.call(null,seq__39557_39575__$1);
var G__39585 = null;
var G__39586 = (0);
var G__39587 = (0);
seq__39557_39563 = G__39584;
chunk__39558_39564 = G__39585;
count__39559_39565 = G__39586;
i__39560_39566 = G__39587;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__39588){var map__39590 = p__39588;var map__39590__$1 = ((cljs.core.seq_QMARK_.call(null,map__39590))?cljs.core.apply.call(null,cljs.core.hash_map,map__39590):map__39590);var info = map__39590__$1;var p = cljs.core.get.call(null,map__39590__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__39590__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39590__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__39590,map__39590__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__39590,map__39590__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__39590,map__39590__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__39590,map__39590__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__39605 = cljs.core.seq.call(null,unifs);var chunk__39606 = null;var count__39607 = (0);var i__39608 = (0);while(true){
if((i__39608 < count__39607))
{var vec__39609 = cljs.core._nth.call(null,chunk__39606,i__39608);var n = cljs.core.nth.call(null,vec__39609,(0),null);var type = cljs.core.nth.call(null,vec__39609,(1),null);var v = cljs.core.nth.call(null,vec__39609,(2),null);var pred__39610_39619 = cljs.core._EQ_;var expr__39611_39620 = type;if(cljs.core.truth_(pred__39610_39619.call(null,"s2d",expr__39611_39620)))
{var vec__39613_39621 = v;var tex_39622 = cljs.core.nth.call(null,vec__39613_39621,(0),null);var channel_39623 = cljs.core.nth.call(null,vec__39613_39621,(1),null);gl.texture.bind.call(null,gl__$1,tex_39622,channel_39623,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39610_39619.call(null,"1f",expr__39611_39620)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39610_39619.call(null,"2f",expr__39611_39620)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39610_39619.call(null,"m3fv",expr__39611_39620)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39610_39619.call(null,"m4fv",expr__39611_39620)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39611_39620))));
}
}
}
}
}
{
var G__39624 = seq__39605;
var G__39625 = chunk__39606;
var G__39626 = count__39607;
var G__39627 = (i__39608 + (1));
seq__39605 = G__39624;
chunk__39606 = G__39625;
count__39607 = G__39626;
i__39608 = G__39627;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39605);if(temp__4126__auto__)
{var seq__39605__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39605__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__39605__$1);{
var G__39628 = cljs.core.chunk_rest.call(null,seq__39605__$1);
var G__39629 = c__4307__auto__;
var G__39630 = cljs.core.count.call(null,c__4307__auto__);
var G__39631 = (0);
seq__39605 = G__39628;
chunk__39606 = G__39629;
count__39607 = G__39630;
i__39608 = G__39631;
continue;
}
} else
{var vec__39614 = cljs.core.first.call(null,seq__39605__$1);var n = cljs.core.nth.call(null,vec__39614,(0),null);var type = cljs.core.nth.call(null,vec__39614,(1),null);var v = cljs.core.nth.call(null,vec__39614,(2),null);var pred__39615_39632 = cljs.core._EQ_;var expr__39616_39633 = type;if(cljs.core.truth_(pred__39615_39632.call(null,"s2d",expr__39616_39633)))
{var vec__39618_39634 = v;var tex_39635 = cljs.core.nth.call(null,vec__39618_39634,(0),null);var channel_39636 = cljs.core.nth.call(null,vec__39618_39634,(1),null);gl.texture.bind.call(null,gl__$1,tex_39635,channel_39636,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39615_39632.call(null,"1f",expr__39616_39633)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39615_39632.call(null,"2f",expr__39616_39633)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39615_39632.call(null,"m3fv",expr__39616_39633)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39615_39632.call(null,"m4fv",expr__39616_39633)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39616_39633))));
}
}
}
}
}
{
var G__39637 = cljs.core.next.call(null,seq__39605__$1);
var G__39638 = null;
var G__39639 = (0);
var G__39640 = (0);
seq__39605 = G__39637;
chunk__39606 = G__39638;
count__39607 = G__39639;
i__39608 = G__39640;
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
uniform.cljs$lang$applyTo = (function (arglist__39641){
var gl__$1 = cljs.core.first(arglist__39641);
arglist__39641 = cljs.core.next(arglist__39641);
var pobj = cljs.core.first(arglist__39641);
var unifs = cljs.core.rest(arglist__39641);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__39642,draw_fn){var map__39644 = p__39642;var map__39644__$1 = ((cljs.core.seq_QMARK_.call(null,map__39644))?cljs.core.apply.call(null,cljs.core.hash_map,map__39644):map__39644);var pobj = map__39644__$1;var program = cljs.core.get.call(null,map__39644__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a = u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
