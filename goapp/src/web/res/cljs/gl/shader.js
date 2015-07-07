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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__9823_9824 = gl__$1;G__9823_9824.attachShader(p,vs);
G__9823_9824.attachShader(p,fs);
G__9823_9824.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__9825){var map__9833 = p__9825;var map__9833__$1 = ((cljs.core.seq_QMARK_.call(null,map__9833))?cljs.core.apply.call(null,cljs.core.hash_map,map__9833):map__9833);var info = map__9833__$1;var attrs = cljs.core.get.call(null,map__9833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__9833__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__9834_9840 = cljs.core.seq.call(null,attrs);var chunk__9835_9841 = null;var count__9836_9842 = (0);var i__9837_9843 = (0);while(true){
if((i__9837_9843 < count__9836_9842))
{var vec__9838_9844 = cljs.core._nth.call(null,chunk__9835_9841,i__9837_9843);var n_9845 = cljs.core.nth.call(null,vec__9838_9844,(0),null);var loc_9846 = cljs.core.nth.call(null,vec__9838_9844,(1),null);gl__$1.disableVertexAttribArray(loc_9846);
{
var G__9847 = seq__9834_9840;
var G__9848 = chunk__9835_9841;
var G__9849 = count__9836_9842;
var G__9850 = (i__9837_9843 + (1));
seq__9834_9840 = G__9847;
chunk__9835_9841 = G__9848;
count__9836_9842 = G__9849;
i__9837_9843 = G__9850;
continue;
}
} else
{var temp__4126__auto___9851 = cljs.core.seq.call(null,seq__9834_9840);if(temp__4126__auto___9851)
{var seq__9834_9852__$1 = temp__4126__auto___9851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9834_9852__$1))
{var c__4307__auto___9853 = cljs.core.chunk_first.call(null,seq__9834_9852__$1);{
var G__9854 = cljs.core.chunk_rest.call(null,seq__9834_9852__$1);
var G__9855 = c__4307__auto___9853;
var G__9856 = cljs.core.count.call(null,c__4307__auto___9853);
var G__9857 = (0);
seq__9834_9840 = G__9854;
chunk__9835_9841 = G__9855;
count__9836_9842 = G__9856;
i__9837_9843 = G__9857;
continue;
}
} else
{var vec__9839_9858 = cljs.core.first.call(null,seq__9834_9852__$1);var n_9859 = cljs.core.nth.call(null,vec__9839_9858,(0),null);var loc_9860 = cljs.core.nth.call(null,vec__9839_9858,(1),null);gl__$1.disableVertexAttribArray(loc_9860);
{
var G__9861 = cljs.core.next.call(null,seq__9834_9852__$1);
var G__9862 = null;
var G__9863 = (0);
var G__9864 = (0);
seq__9834_9840 = G__9861;
chunk__9835_9841 = G__9862;
count__9836_9842 = G__9863;
i__9837_9843 = G__9864;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__9865){var map__9867 = p__9865;var map__9867__$1 = ((cljs.core.seq_QMARK_.call(null,map__9867))?cljs.core.apply.call(null,cljs.core.hash_map,map__9867):map__9867);var info = map__9867__$1;var p = cljs.core.get.call(null,map__9867__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__9867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__9867__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__9867,map__9867__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__9867,map__9867__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__9867,map__9867__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__9867,map__9867__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__9882 = cljs.core.seq.call(null,unifs);var chunk__9883 = null;var count__9884 = (0);var i__9885 = (0);while(true){
if((i__9885 < count__9884))
{var vec__9886 = cljs.core._nth.call(null,chunk__9883,i__9885);var n = cljs.core.nth.call(null,vec__9886,(0),null);var type = cljs.core.nth.call(null,vec__9886,(1),null);var v = cljs.core.nth.call(null,vec__9886,(2),null);var pred__9887_9896 = cljs.core._EQ_;var expr__9888_9897 = type;if(cljs.core.truth_(pred__9887_9896.call(null,"s2d",expr__9888_9897)))
{var vec__9890_9898 = v;var tex_9899 = cljs.core.nth.call(null,vec__9890_9898,(0),null);var channel_9900 = cljs.core.nth.call(null,vec__9890_9898,(1),null);gl.texture.bind.call(null,gl__$1,tex_9899,channel_9900,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__9887_9896.call(null,"1f",expr__9888_9897)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__9887_9896.call(null,"2f",expr__9888_9897)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__9887_9896.call(null,"m3fv",expr__9888_9897)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__9887_9896.call(null,"m4fv",expr__9888_9897)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9888_9897))));
}
}
}
}
}
{
var G__9901 = seq__9882;
var G__9902 = chunk__9883;
var G__9903 = count__9884;
var G__9904 = (i__9885 + (1));
seq__9882 = G__9901;
chunk__9883 = G__9902;
count__9884 = G__9903;
i__9885 = G__9904;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9882);if(temp__4126__auto__)
{var seq__9882__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9882__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__9882__$1);{
var G__9905 = cljs.core.chunk_rest.call(null,seq__9882__$1);
var G__9906 = c__4307__auto__;
var G__9907 = cljs.core.count.call(null,c__4307__auto__);
var G__9908 = (0);
seq__9882 = G__9905;
chunk__9883 = G__9906;
count__9884 = G__9907;
i__9885 = G__9908;
continue;
}
} else
{var vec__9891 = cljs.core.first.call(null,seq__9882__$1);var n = cljs.core.nth.call(null,vec__9891,(0),null);var type = cljs.core.nth.call(null,vec__9891,(1),null);var v = cljs.core.nth.call(null,vec__9891,(2),null);var pred__9892_9909 = cljs.core._EQ_;var expr__9893_9910 = type;if(cljs.core.truth_(pred__9892_9909.call(null,"s2d",expr__9893_9910)))
{var vec__9895_9911 = v;var tex_9912 = cljs.core.nth.call(null,vec__9895_9911,(0),null);var channel_9913 = cljs.core.nth.call(null,vec__9895_9911,(1),null);gl.texture.bind.call(null,gl__$1,tex_9912,channel_9913,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__9892_9909.call(null,"1f",expr__9893_9910)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__9892_9909.call(null,"2f",expr__9893_9910)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__9892_9909.call(null,"m3fv",expr__9893_9910)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__9892_9909.call(null,"m4fv",expr__9893_9910)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9893_9910))));
}
}
}
}
}
{
var G__9914 = cljs.core.next.call(null,seq__9882__$1);
var G__9915 = null;
var G__9916 = (0);
var G__9917 = (0);
seq__9882 = G__9914;
chunk__9883 = G__9915;
count__9884 = G__9916;
i__9885 = G__9917;
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
uniform.cljs$lang$applyTo = (function (arglist__9918){
var gl__$1 = cljs.core.first(arglist__9918);
arglist__9918 = cljs.core.next(arglist__9918);
var pobj = cljs.core.first(arglist__9918);
var unifs = cljs.core.rest(arglist__9918);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__9919,draw_fn){var map__9921 = p__9919;var map__9921__$1 = ((cljs.core.seq_QMARK_.call(null,map__9921))?cljs.core.apply.call(null,cljs.core.hash_map,map__9921):map__9921);var pobj = map__9921__$1;var program = cljs.core.get.call(null,map__9921__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); color = u_colorTransform* color; gl_FragColor = color;}"));
});
