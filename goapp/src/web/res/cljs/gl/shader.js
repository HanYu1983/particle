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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__136532_136533 = gl__$1;G__136532_136533.attachShader(p,vs);
G__136532_136533.attachShader(p,fs);
G__136532_136533.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__136534){var map__136542 = p__136534;var map__136542__$1 = ((cljs.core.seq_QMARK_.call(null,map__136542))?cljs.core.apply.call(null,cljs.core.hash_map,map__136542):map__136542);var info = map__136542__$1;var attrs = cljs.core.get.call(null,map__136542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__136542__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__136543_136549 = cljs.core.seq.call(null,attrs);var chunk__136544_136550 = null;var count__136545_136551 = (0);var i__136546_136552 = (0);while(true){
if((i__136546_136552 < count__136545_136551))
{var vec__136547_136553 = cljs.core._nth.call(null,chunk__136544_136550,i__136546_136552);var n_136554 = cljs.core.nth.call(null,vec__136547_136553,(0),null);var loc_136555 = cljs.core.nth.call(null,vec__136547_136553,(1),null);gl__$1.disableVertexAttribArray(loc_136555);
{
var G__136556 = seq__136543_136549;
var G__136557 = chunk__136544_136550;
var G__136558 = count__136545_136551;
var G__136559 = (i__136546_136552 + (1));
seq__136543_136549 = G__136556;
chunk__136544_136550 = G__136557;
count__136545_136551 = G__136558;
i__136546_136552 = G__136559;
continue;
}
} else
{var temp__4126__auto___136560 = cljs.core.seq.call(null,seq__136543_136549);if(temp__4126__auto___136560)
{var seq__136543_136561__$1 = temp__4126__auto___136560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136543_136561__$1))
{var c__4307__auto___136562 = cljs.core.chunk_first.call(null,seq__136543_136561__$1);{
var G__136563 = cljs.core.chunk_rest.call(null,seq__136543_136561__$1);
var G__136564 = c__4307__auto___136562;
var G__136565 = cljs.core.count.call(null,c__4307__auto___136562);
var G__136566 = (0);
seq__136543_136549 = G__136563;
chunk__136544_136550 = G__136564;
count__136545_136551 = G__136565;
i__136546_136552 = G__136566;
continue;
}
} else
{var vec__136548_136567 = cljs.core.first.call(null,seq__136543_136561__$1);var n_136568 = cljs.core.nth.call(null,vec__136548_136567,(0),null);var loc_136569 = cljs.core.nth.call(null,vec__136548_136567,(1),null);gl__$1.disableVertexAttribArray(loc_136569);
{
var G__136570 = cljs.core.next.call(null,seq__136543_136561__$1);
var G__136571 = null;
var G__136572 = (0);
var G__136573 = (0);
seq__136543_136549 = G__136570;
chunk__136544_136550 = G__136571;
count__136545_136551 = G__136572;
i__136546_136552 = G__136573;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__136574){var map__136576 = p__136574;var map__136576__$1 = ((cljs.core.seq_QMARK_.call(null,map__136576))?cljs.core.apply.call(null,cljs.core.hash_map,map__136576):map__136576);var info = map__136576__$1;var p = cljs.core.get.call(null,map__136576__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__136576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__136576__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__136576,map__136576__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__136576,map__136576__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__136576,map__136576__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__136576,map__136576__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__136591 = cljs.core.seq.call(null,unifs);var chunk__136592 = null;var count__136593 = (0);var i__136594 = (0);while(true){
if((i__136594 < count__136593))
{var vec__136595 = cljs.core._nth.call(null,chunk__136592,i__136594);var n = cljs.core.nth.call(null,vec__136595,(0),null);var type = cljs.core.nth.call(null,vec__136595,(1),null);var v = cljs.core.nth.call(null,vec__136595,(2),null);var pred__136596_136605 = cljs.core._EQ_;var expr__136597_136606 = type;if(cljs.core.truth_(pred__136596_136605.call(null,"s2d",expr__136597_136606)))
{var vec__136599_136607 = v;var tex_136608 = cljs.core.nth.call(null,vec__136599_136607,(0),null);var channel_136609 = cljs.core.nth.call(null,vec__136599_136607,(1),null);gl.texture.bind.call(null,gl__$1,tex_136608,channel_136609,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__136596_136605.call(null,"1f",expr__136597_136606)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__136596_136605.call(null,"2f",expr__136597_136606)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__136596_136605.call(null,"m3fv",expr__136597_136606)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__136596_136605.call(null,"m4fv",expr__136597_136606)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__136597_136606))));
}
}
}
}
}
{
var G__136610 = seq__136591;
var G__136611 = chunk__136592;
var G__136612 = count__136593;
var G__136613 = (i__136594 + (1));
seq__136591 = G__136610;
chunk__136592 = G__136611;
count__136593 = G__136612;
i__136594 = G__136613;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__136591);if(temp__4126__auto__)
{var seq__136591__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136591__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__136591__$1);{
var G__136614 = cljs.core.chunk_rest.call(null,seq__136591__$1);
var G__136615 = c__4307__auto__;
var G__136616 = cljs.core.count.call(null,c__4307__auto__);
var G__136617 = (0);
seq__136591 = G__136614;
chunk__136592 = G__136615;
count__136593 = G__136616;
i__136594 = G__136617;
continue;
}
} else
{var vec__136600 = cljs.core.first.call(null,seq__136591__$1);var n = cljs.core.nth.call(null,vec__136600,(0),null);var type = cljs.core.nth.call(null,vec__136600,(1),null);var v = cljs.core.nth.call(null,vec__136600,(2),null);var pred__136601_136618 = cljs.core._EQ_;var expr__136602_136619 = type;if(cljs.core.truth_(pred__136601_136618.call(null,"s2d",expr__136602_136619)))
{var vec__136604_136620 = v;var tex_136621 = cljs.core.nth.call(null,vec__136604_136620,(0),null);var channel_136622 = cljs.core.nth.call(null,vec__136604_136620,(1),null);gl.texture.bind.call(null,gl__$1,tex_136621,channel_136622,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__136601_136618.call(null,"1f",expr__136602_136619)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__136601_136618.call(null,"2f",expr__136602_136619)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__136601_136618.call(null,"m3fv",expr__136602_136619)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__136601_136618.call(null,"m4fv",expr__136602_136619)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__136602_136619))));
}
}
}
}
}
{
var G__136623 = cljs.core.next.call(null,seq__136591__$1);
var G__136624 = null;
var G__136625 = (0);
var G__136626 = (0);
seq__136591 = G__136623;
chunk__136592 = G__136624;
count__136593 = G__136625;
i__136594 = G__136626;
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
uniform.cljs$lang$applyTo = (function (arglist__136627){
var gl__$1 = cljs.core.first(arglist__136627);
arglist__136627 = cljs.core.next(arglist__136627);
var pobj = cljs.core.first(arglist__136627);
var unifs = cljs.core.rest(arglist__136627);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__136628,draw_fn){var map__136630 = p__136628;var map__136630__$1 = ((cljs.core.seq_QMARK_.call(null,map__136630))?cljs.core.apply.call(null,cljs.core.hash_map,map__136630):map__136630);var pobj = map__136630__$1;var program = cljs.core.get.call(null,map__136630__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
