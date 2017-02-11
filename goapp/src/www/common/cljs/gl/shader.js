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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__21647_21648 = gl__$1;G__21647_21648.attachShader(p,vs);
G__21647_21648.attachShader(p,fs);
G__21647_21648.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__21649){var map__21657 = p__21649;var map__21657__$1 = ((cljs.core.seq_QMARK_.call(null,map__21657))?cljs.core.apply.call(null,cljs.core.hash_map,map__21657):map__21657);var info = map__21657__$1;var attrs = cljs.core.get.call(null,map__21657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__21657__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__21658_21664 = cljs.core.seq.call(null,attrs);var chunk__21659_21665 = null;var count__21660_21666 = (0);var i__21661_21667 = (0);while(true){
if((i__21661_21667 < count__21660_21666))
{var vec__21662_21668 = cljs.core._nth.call(null,chunk__21659_21665,i__21661_21667);var n_21669 = cljs.core.nth.call(null,vec__21662_21668,(0),null);var loc_21670 = cljs.core.nth.call(null,vec__21662_21668,(1),null);gl__$1.disableVertexAttribArray(loc_21670);
{
var G__21671 = seq__21658_21664;
var G__21672 = chunk__21659_21665;
var G__21673 = count__21660_21666;
var G__21674 = (i__21661_21667 + (1));
seq__21658_21664 = G__21671;
chunk__21659_21665 = G__21672;
count__21660_21666 = G__21673;
i__21661_21667 = G__21674;
continue;
}
} else
{var temp__4126__auto___21675 = cljs.core.seq.call(null,seq__21658_21664);if(temp__4126__auto___21675)
{var seq__21658_21676__$1 = temp__4126__auto___21675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21658_21676__$1))
{var c__4307__auto___21677 = cljs.core.chunk_first.call(null,seq__21658_21676__$1);{
var G__21678 = cljs.core.chunk_rest.call(null,seq__21658_21676__$1);
var G__21679 = c__4307__auto___21677;
var G__21680 = cljs.core.count.call(null,c__4307__auto___21677);
var G__21681 = (0);
seq__21658_21664 = G__21678;
chunk__21659_21665 = G__21679;
count__21660_21666 = G__21680;
i__21661_21667 = G__21681;
continue;
}
} else
{var vec__21663_21682 = cljs.core.first.call(null,seq__21658_21676__$1);var n_21683 = cljs.core.nth.call(null,vec__21663_21682,(0),null);var loc_21684 = cljs.core.nth.call(null,vec__21663_21682,(1),null);gl__$1.disableVertexAttribArray(loc_21684);
{
var G__21685 = cljs.core.next.call(null,seq__21658_21676__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__21658_21664 = G__21685;
chunk__21659_21665 = G__21686;
count__21660_21666 = G__21687;
i__21661_21667 = G__21688;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__21689){var map__21691 = p__21689;var map__21691__$1 = ((cljs.core.seq_QMARK_.call(null,map__21691))?cljs.core.apply.call(null,cljs.core.hash_map,map__21691):map__21691);var info = map__21691__$1;var p = cljs.core.get.call(null,map__21691__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__21691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__21691__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__21691,map__21691__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__21691,map__21691__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__21691,map__21691__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__21691,map__21691__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__21706 = cljs.core.seq.call(null,unifs);var chunk__21707 = null;var count__21708 = (0);var i__21709 = (0);while(true){
if((i__21709 < count__21708))
{var vec__21710 = cljs.core._nth.call(null,chunk__21707,i__21709);var n = cljs.core.nth.call(null,vec__21710,(0),null);var type = cljs.core.nth.call(null,vec__21710,(1),null);var v = cljs.core.nth.call(null,vec__21710,(2),null);var pred__21711_21720 = cljs.core._EQ_;var expr__21712_21721 = type;if(cljs.core.truth_(pred__21711_21720.call(null,"s2d",expr__21712_21721)))
{var vec__21714_21722 = v;var tex_21723 = cljs.core.nth.call(null,vec__21714_21722,(0),null);var channel_21724 = cljs.core.nth.call(null,vec__21714_21722,(1),null);gl.texture.bind.call(null,gl__$1,tex_21723,channel_21724,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__21711_21720.call(null,"1f",expr__21712_21721)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__21711_21720.call(null,"2f",expr__21712_21721)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__21711_21720.call(null,"m3fv",expr__21712_21721)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__21711_21720.call(null,"m4fv",expr__21712_21721)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21712_21721))));
}
}
}
}
}
{
var G__21725 = seq__21706;
var G__21726 = chunk__21707;
var G__21727 = count__21708;
var G__21728 = (i__21709 + (1));
seq__21706 = G__21725;
chunk__21707 = G__21726;
count__21708 = G__21727;
i__21709 = G__21728;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21706);if(temp__4126__auto__)
{var seq__21706__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21706__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21706__$1);{
var G__21729 = cljs.core.chunk_rest.call(null,seq__21706__$1);
var G__21730 = c__4307__auto__;
var G__21731 = cljs.core.count.call(null,c__4307__auto__);
var G__21732 = (0);
seq__21706 = G__21729;
chunk__21707 = G__21730;
count__21708 = G__21731;
i__21709 = G__21732;
continue;
}
} else
{var vec__21715 = cljs.core.first.call(null,seq__21706__$1);var n = cljs.core.nth.call(null,vec__21715,(0),null);var type = cljs.core.nth.call(null,vec__21715,(1),null);var v = cljs.core.nth.call(null,vec__21715,(2),null);var pred__21716_21733 = cljs.core._EQ_;var expr__21717_21734 = type;if(cljs.core.truth_(pred__21716_21733.call(null,"s2d",expr__21717_21734)))
{var vec__21719_21735 = v;var tex_21736 = cljs.core.nth.call(null,vec__21719_21735,(0),null);var channel_21737 = cljs.core.nth.call(null,vec__21719_21735,(1),null);gl.texture.bind.call(null,gl__$1,tex_21736,channel_21737,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__21716_21733.call(null,"1f",expr__21717_21734)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__21716_21733.call(null,"2f",expr__21717_21734)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__21716_21733.call(null,"m3fv",expr__21717_21734)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__21716_21733.call(null,"m4fv",expr__21717_21734)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21717_21734))));
}
}
}
}
}
{
var G__21738 = cljs.core.next.call(null,seq__21706__$1);
var G__21739 = null;
var G__21740 = (0);
var G__21741 = (0);
seq__21706 = G__21738;
chunk__21707 = G__21739;
count__21708 = G__21740;
i__21709 = G__21741;
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
uniform.cljs$lang$applyTo = (function (arglist__21742){
var gl__$1 = cljs.core.first(arglist__21742);
arglist__21742 = cljs.core.next(arglist__21742);
var pobj = cljs.core.first(arglist__21742);
var unifs = cljs.core.rest(arglist__21742);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__21743,draw_fn){var map__21745 = p__21743;var map__21745__$1 = ((cljs.core.seq_QMARK_.call(null,map__21745))?cljs.core.apply.call(null,cljs.core.hash_map,map__21745):map__21745);var pobj = map__21745__$1;var program = cljs.core.get.call(null,map__21745__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a *= u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
