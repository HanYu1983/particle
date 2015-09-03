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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__39529_39530 = gl__$1;G__39529_39530.attachShader(p,vs);
G__39529_39530.attachShader(p,fs);
G__39529_39530.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__39531){var map__39539 = p__39531;var map__39539__$1 = ((cljs.core.seq_QMARK_.call(null,map__39539))?cljs.core.apply.call(null,cljs.core.hash_map,map__39539):map__39539);var info = map__39539__$1;var attrs = cljs.core.get.call(null,map__39539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39539__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__39540_39546 = cljs.core.seq.call(null,attrs);var chunk__39541_39547 = null;var count__39542_39548 = (0);var i__39543_39549 = (0);while(true){
if((i__39543_39549 < count__39542_39548))
{var vec__39544_39550 = cljs.core._nth.call(null,chunk__39541_39547,i__39543_39549);var n_39551 = cljs.core.nth.call(null,vec__39544_39550,(0),null);var loc_39552 = cljs.core.nth.call(null,vec__39544_39550,(1),null);gl__$1.disableVertexAttribArray(loc_39552);
{
var G__39553 = seq__39540_39546;
var G__39554 = chunk__39541_39547;
var G__39555 = count__39542_39548;
var G__39556 = (i__39543_39549 + (1));
seq__39540_39546 = G__39553;
chunk__39541_39547 = G__39554;
count__39542_39548 = G__39555;
i__39543_39549 = G__39556;
continue;
}
} else
{var temp__4126__auto___39557 = cljs.core.seq.call(null,seq__39540_39546);if(temp__4126__auto___39557)
{var seq__39540_39558__$1 = temp__4126__auto___39557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39540_39558__$1))
{var c__4307__auto___39559 = cljs.core.chunk_first.call(null,seq__39540_39558__$1);{
var G__39560 = cljs.core.chunk_rest.call(null,seq__39540_39558__$1);
var G__39561 = c__4307__auto___39559;
var G__39562 = cljs.core.count.call(null,c__4307__auto___39559);
var G__39563 = (0);
seq__39540_39546 = G__39560;
chunk__39541_39547 = G__39561;
count__39542_39548 = G__39562;
i__39543_39549 = G__39563;
continue;
}
} else
{var vec__39545_39564 = cljs.core.first.call(null,seq__39540_39558__$1);var n_39565 = cljs.core.nth.call(null,vec__39545_39564,(0),null);var loc_39566 = cljs.core.nth.call(null,vec__39545_39564,(1),null);gl__$1.disableVertexAttribArray(loc_39566);
{
var G__39567 = cljs.core.next.call(null,seq__39540_39558__$1);
var G__39568 = null;
var G__39569 = (0);
var G__39570 = (0);
seq__39540_39546 = G__39567;
chunk__39541_39547 = G__39568;
count__39542_39548 = G__39569;
i__39543_39549 = G__39570;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__39571){var map__39573 = p__39571;var map__39573__$1 = ((cljs.core.seq_QMARK_.call(null,map__39573))?cljs.core.apply.call(null,cljs.core.hash_map,map__39573):map__39573);var info = map__39573__$1;var p = cljs.core.get.call(null,map__39573__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__39573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39573__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__39573,map__39573__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__39573,map__39573__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__39573,map__39573__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__39573,map__39573__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__39588 = cljs.core.seq.call(null,unifs);var chunk__39589 = null;var count__39590 = (0);var i__39591 = (0);while(true){
if((i__39591 < count__39590))
{var vec__39592 = cljs.core._nth.call(null,chunk__39589,i__39591);var n = cljs.core.nth.call(null,vec__39592,(0),null);var type = cljs.core.nth.call(null,vec__39592,(1),null);var v = cljs.core.nth.call(null,vec__39592,(2),null);var pred__39593_39602 = cljs.core._EQ_;var expr__39594_39603 = type;if(cljs.core.truth_(pred__39593_39602.call(null,"s2d",expr__39594_39603)))
{var vec__39596_39604 = v;var tex_39605 = cljs.core.nth.call(null,vec__39596_39604,(0),null);var channel_39606 = cljs.core.nth.call(null,vec__39596_39604,(1),null);gl.texture.bind.call(null,gl__$1,tex_39605,channel_39606,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39593_39602.call(null,"1f",expr__39594_39603)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39593_39602.call(null,"2f",expr__39594_39603)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39593_39602.call(null,"m3fv",expr__39594_39603)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39593_39602.call(null,"m4fv",expr__39594_39603)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39594_39603))));
}
}
}
}
}
{
var G__39607 = seq__39588;
var G__39608 = chunk__39589;
var G__39609 = count__39590;
var G__39610 = (i__39591 + (1));
seq__39588 = G__39607;
chunk__39589 = G__39608;
count__39590 = G__39609;
i__39591 = G__39610;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39588);if(temp__4126__auto__)
{var seq__39588__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39588__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__39588__$1);{
var G__39611 = cljs.core.chunk_rest.call(null,seq__39588__$1);
var G__39612 = c__4307__auto__;
var G__39613 = cljs.core.count.call(null,c__4307__auto__);
var G__39614 = (0);
seq__39588 = G__39611;
chunk__39589 = G__39612;
count__39590 = G__39613;
i__39591 = G__39614;
continue;
}
} else
{var vec__39597 = cljs.core.first.call(null,seq__39588__$1);var n = cljs.core.nth.call(null,vec__39597,(0),null);var type = cljs.core.nth.call(null,vec__39597,(1),null);var v = cljs.core.nth.call(null,vec__39597,(2),null);var pred__39598_39615 = cljs.core._EQ_;var expr__39599_39616 = type;if(cljs.core.truth_(pred__39598_39615.call(null,"s2d",expr__39599_39616)))
{var vec__39601_39617 = v;var tex_39618 = cljs.core.nth.call(null,vec__39601_39617,(0),null);var channel_39619 = cljs.core.nth.call(null,vec__39601_39617,(1),null);gl.texture.bind.call(null,gl__$1,tex_39618,channel_39619,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39598_39615.call(null,"1f",expr__39599_39616)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39598_39615.call(null,"2f",expr__39599_39616)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39598_39615.call(null,"m3fv",expr__39599_39616)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39598_39615.call(null,"m4fv",expr__39599_39616)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39599_39616))));
}
}
}
}
}
{
var G__39620 = cljs.core.next.call(null,seq__39588__$1);
var G__39621 = null;
var G__39622 = (0);
var G__39623 = (0);
seq__39588 = G__39620;
chunk__39589 = G__39621;
count__39590 = G__39622;
i__39591 = G__39623;
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
uniform.cljs$lang$applyTo = (function (arglist__39624){
var gl__$1 = cljs.core.first(arglist__39624);
arglist__39624 = cljs.core.next(arglist__39624);
var pobj = cljs.core.first(arglist__39624);
var unifs = cljs.core.rest(arglist__39624);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__39625,draw_fn){var map__39627 = p__39625;var map__39627__$1 = ((cljs.core.seq_QMARK_.call(null,map__39627))?cljs.core.apply.call(null,cljs.core.hash_map,map__39627):map__39627);var pobj = map__39627__$1;var program = cljs.core.get.call(null,map__39627__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); color = u_colorTransform* color; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
