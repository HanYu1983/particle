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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__139638_139639 = gl__$1;G__139638_139639.attachShader(p,vs);
G__139638_139639.attachShader(p,fs);
G__139638_139639.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__139640){var map__139648 = p__139640;var map__139648__$1 = ((cljs.core.seq_QMARK_.call(null,map__139648))?cljs.core.apply.call(null,cljs.core.hash_map,map__139648):map__139648);var info = map__139648__$1;var attrs = cljs.core.get.call(null,map__139648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__139648__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__139649_139655 = cljs.core.seq.call(null,attrs);var chunk__139650_139656 = null;var count__139651_139657 = (0);var i__139652_139658 = (0);while(true){
if((i__139652_139658 < count__139651_139657))
{var vec__139653_139659 = cljs.core._nth.call(null,chunk__139650_139656,i__139652_139658);var n_139660 = cljs.core.nth.call(null,vec__139653_139659,(0),null);var loc_139661 = cljs.core.nth.call(null,vec__139653_139659,(1),null);gl__$1.disableVertexAttribArray(loc_139661);
{
var G__139662 = seq__139649_139655;
var G__139663 = chunk__139650_139656;
var G__139664 = count__139651_139657;
var G__139665 = (i__139652_139658 + (1));
seq__139649_139655 = G__139662;
chunk__139650_139656 = G__139663;
count__139651_139657 = G__139664;
i__139652_139658 = G__139665;
continue;
}
} else
{var temp__4126__auto___139666 = cljs.core.seq.call(null,seq__139649_139655);if(temp__4126__auto___139666)
{var seq__139649_139667__$1 = temp__4126__auto___139666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139649_139667__$1))
{var c__4307__auto___139668 = cljs.core.chunk_first.call(null,seq__139649_139667__$1);{
var G__139669 = cljs.core.chunk_rest.call(null,seq__139649_139667__$1);
var G__139670 = c__4307__auto___139668;
var G__139671 = cljs.core.count.call(null,c__4307__auto___139668);
var G__139672 = (0);
seq__139649_139655 = G__139669;
chunk__139650_139656 = G__139670;
count__139651_139657 = G__139671;
i__139652_139658 = G__139672;
continue;
}
} else
{var vec__139654_139673 = cljs.core.first.call(null,seq__139649_139667__$1);var n_139674 = cljs.core.nth.call(null,vec__139654_139673,(0),null);var loc_139675 = cljs.core.nth.call(null,vec__139654_139673,(1),null);gl__$1.disableVertexAttribArray(loc_139675);
{
var G__139676 = cljs.core.next.call(null,seq__139649_139667__$1);
var G__139677 = null;
var G__139678 = (0);
var G__139679 = (0);
seq__139649_139655 = G__139676;
chunk__139650_139656 = G__139677;
count__139651_139657 = G__139678;
i__139652_139658 = G__139679;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__139680){var map__139682 = p__139680;var map__139682__$1 = ((cljs.core.seq_QMARK_.call(null,map__139682))?cljs.core.apply.call(null,cljs.core.hash_map,map__139682):map__139682);var info = map__139682__$1;var p = cljs.core.get.call(null,map__139682__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__139682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__139682__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__139682,map__139682__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__139682,map__139682__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__139682,map__139682__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__139682,map__139682__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__139697 = cljs.core.seq.call(null,unifs);var chunk__139698 = null;var count__139699 = (0);var i__139700 = (0);while(true){
if((i__139700 < count__139699))
{var vec__139701 = cljs.core._nth.call(null,chunk__139698,i__139700);var n = cljs.core.nth.call(null,vec__139701,(0),null);var type = cljs.core.nth.call(null,vec__139701,(1),null);var v = cljs.core.nth.call(null,vec__139701,(2),null);var pred__139702_139711 = cljs.core._EQ_;var expr__139703_139712 = type;if(cljs.core.truth_(pred__139702_139711.call(null,"s2d",expr__139703_139712)))
{var vec__139705_139713 = v;var tex_139714 = cljs.core.nth.call(null,vec__139705_139713,(0),null);var channel_139715 = cljs.core.nth.call(null,vec__139705_139713,(1),null);gl.texture.bind.call(null,gl__$1,tex_139714,channel_139715,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__139702_139711.call(null,"1f",expr__139703_139712)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__139702_139711.call(null,"2f",expr__139703_139712)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__139702_139711.call(null,"m3fv",expr__139703_139712)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__139702_139711.call(null,"m4fv",expr__139703_139712)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__139703_139712))));
}
}
}
}
}
{
var G__139716 = seq__139697;
var G__139717 = chunk__139698;
var G__139718 = count__139699;
var G__139719 = (i__139700 + (1));
seq__139697 = G__139716;
chunk__139698 = G__139717;
count__139699 = G__139718;
i__139700 = G__139719;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__139697);if(temp__4126__auto__)
{var seq__139697__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139697__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__139697__$1);{
var G__139720 = cljs.core.chunk_rest.call(null,seq__139697__$1);
var G__139721 = c__4307__auto__;
var G__139722 = cljs.core.count.call(null,c__4307__auto__);
var G__139723 = (0);
seq__139697 = G__139720;
chunk__139698 = G__139721;
count__139699 = G__139722;
i__139700 = G__139723;
continue;
}
} else
{var vec__139706 = cljs.core.first.call(null,seq__139697__$1);var n = cljs.core.nth.call(null,vec__139706,(0),null);var type = cljs.core.nth.call(null,vec__139706,(1),null);var v = cljs.core.nth.call(null,vec__139706,(2),null);var pred__139707_139724 = cljs.core._EQ_;var expr__139708_139725 = type;if(cljs.core.truth_(pred__139707_139724.call(null,"s2d",expr__139708_139725)))
{var vec__139710_139726 = v;var tex_139727 = cljs.core.nth.call(null,vec__139710_139726,(0),null);var channel_139728 = cljs.core.nth.call(null,vec__139710_139726,(1),null);gl.texture.bind.call(null,gl__$1,tex_139727,channel_139728,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__139707_139724.call(null,"1f",expr__139708_139725)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__139707_139724.call(null,"2f",expr__139708_139725)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__139707_139724.call(null,"m3fv",expr__139708_139725)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__139707_139724.call(null,"m4fv",expr__139708_139725)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__139708_139725))));
}
}
}
}
}
{
var G__139729 = cljs.core.next.call(null,seq__139697__$1);
var G__139730 = null;
var G__139731 = (0);
var G__139732 = (0);
seq__139697 = G__139729;
chunk__139698 = G__139730;
count__139699 = G__139731;
i__139700 = G__139732;
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
uniform.cljs$lang$applyTo = (function (arglist__139733){
var gl__$1 = cljs.core.first(arglist__139733);
arglist__139733 = cljs.core.next(arglist__139733);
var pobj = cljs.core.first(arglist__139733);
var unifs = cljs.core.rest(arglist__139733);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__139734,draw_fn){var map__139736 = p__139734;var map__139736__$1 = ((cljs.core.seq_QMARK_.call(null,map__139736))?cljs.core.apply.call(null,cljs.core.hash_map,map__139736):map__139736);var pobj = map__139736__$1;var program = cljs.core.get.call(null,map__139736__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
