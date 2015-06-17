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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__21880_21881 = gl__$1;G__21880_21881.attachShader(p,vs);
G__21880_21881.attachShader(p,fs);
G__21880_21881.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__21882){var map__21890 = p__21882;var map__21890__$1 = ((cljs.core.seq_QMARK_.call(null,map__21890))?cljs.core.apply.call(null,cljs.core.hash_map,map__21890):map__21890);var info = map__21890__$1;var attrs = cljs.core.get.call(null,map__21890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__21890__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__21891_21897 = cljs.core.seq.call(null,attrs);var chunk__21892_21898 = null;var count__21893_21899 = (0);var i__21894_21900 = (0);while(true){
if((i__21894_21900 < count__21893_21899))
{var vec__21895_21901 = cljs.core._nth.call(null,chunk__21892_21898,i__21894_21900);var n_21902 = cljs.core.nth.call(null,vec__21895_21901,(0),null);var loc_21903 = cljs.core.nth.call(null,vec__21895_21901,(1),null);gl__$1.disableVertexAttribArray(loc_21903);
{
var G__21904 = seq__21891_21897;
var G__21905 = chunk__21892_21898;
var G__21906 = count__21893_21899;
var G__21907 = (i__21894_21900 + (1));
seq__21891_21897 = G__21904;
chunk__21892_21898 = G__21905;
count__21893_21899 = G__21906;
i__21894_21900 = G__21907;
continue;
}
} else
{var temp__4126__auto___21908 = cljs.core.seq.call(null,seq__21891_21897);if(temp__4126__auto___21908)
{var seq__21891_21909__$1 = temp__4126__auto___21908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21891_21909__$1))
{var c__4307__auto___21910 = cljs.core.chunk_first.call(null,seq__21891_21909__$1);{
var G__21911 = cljs.core.chunk_rest.call(null,seq__21891_21909__$1);
var G__21912 = c__4307__auto___21910;
var G__21913 = cljs.core.count.call(null,c__4307__auto___21910);
var G__21914 = (0);
seq__21891_21897 = G__21911;
chunk__21892_21898 = G__21912;
count__21893_21899 = G__21913;
i__21894_21900 = G__21914;
continue;
}
} else
{var vec__21896_21915 = cljs.core.first.call(null,seq__21891_21909__$1);var n_21916 = cljs.core.nth.call(null,vec__21896_21915,(0),null);var loc_21917 = cljs.core.nth.call(null,vec__21896_21915,(1),null);gl__$1.disableVertexAttribArray(loc_21917);
{
var G__21918 = cljs.core.next.call(null,seq__21891_21909__$1);
var G__21919 = null;
var G__21920 = (0);
var G__21921 = (0);
seq__21891_21897 = G__21918;
chunk__21892_21898 = G__21919;
count__21893_21899 = G__21920;
i__21894_21900 = G__21921;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__21922){var map__21924 = p__21922;var map__21924__$1 = ((cljs.core.seq_QMARK_.call(null,map__21924))?cljs.core.apply.call(null,cljs.core.hash_map,map__21924):map__21924);var info = map__21924__$1;var p = cljs.core.get.call(null,map__21924__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__21924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__21924__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__21924,map__21924__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__21924,map__21924__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__21924,map__21924__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__21924,map__21924__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__21939 = cljs.core.seq.call(null,unifs);var chunk__21940 = null;var count__21941 = (0);var i__21942 = (0);while(true){
if((i__21942 < count__21941))
{var vec__21943 = cljs.core._nth.call(null,chunk__21940,i__21942);var n = cljs.core.nth.call(null,vec__21943,(0),null);var type = cljs.core.nth.call(null,vec__21943,(1),null);var v = cljs.core.nth.call(null,vec__21943,(2),null);var pred__21944_21953 = cljs.core._EQ_;var expr__21945_21954 = type;if(cljs.core.truth_(pred__21944_21953.call(null,"s2d",expr__21945_21954)))
{var vec__21947_21955 = v;var tex_21956 = cljs.core.nth.call(null,vec__21947_21955,(0),null);var channel_21957 = cljs.core.nth.call(null,vec__21947_21955,(1),null);gl.texture.bind.call(null,gl__$1,tex_21956,channel_21957,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__21944_21953.call(null,"1f",expr__21945_21954)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__21944_21953.call(null,"2f",expr__21945_21954)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__21944_21953.call(null,"m3fv",expr__21945_21954)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__21944_21953.call(null,"m4fv",expr__21945_21954)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21945_21954))));
}
}
}
}
}
{
var G__21958 = seq__21939;
var G__21959 = chunk__21940;
var G__21960 = count__21941;
var G__21961 = (i__21942 + (1));
seq__21939 = G__21958;
chunk__21940 = G__21959;
count__21941 = G__21960;
i__21942 = G__21961;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21939);if(temp__4126__auto__)
{var seq__21939__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21939__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21939__$1);{
var G__21962 = cljs.core.chunk_rest.call(null,seq__21939__$1);
var G__21963 = c__4307__auto__;
var G__21964 = cljs.core.count.call(null,c__4307__auto__);
var G__21965 = (0);
seq__21939 = G__21962;
chunk__21940 = G__21963;
count__21941 = G__21964;
i__21942 = G__21965;
continue;
}
} else
{var vec__21948 = cljs.core.first.call(null,seq__21939__$1);var n = cljs.core.nth.call(null,vec__21948,(0),null);var type = cljs.core.nth.call(null,vec__21948,(1),null);var v = cljs.core.nth.call(null,vec__21948,(2),null);var pred__21949_21966 = cljs.core._EQ_;var expr__21950_21967 = type;if(cljs.core.truth_(pred__21949_21966.call(null,"s2d",expr__21950_21967)))
{var vec__21952_21968 = v;var tex_21969 = cljs.core.nth.call(null,vec__21952_21968,(0),null);var channel_21970 = cljs.core.nth.call(null,vec__21952_21968,(1),null);gl.texture.bind.call(null,gl__$1,tex_21969,channel_21970,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__21949_21966.call(null,"1f",expr__21950_21967)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__21949_21966.call(null,"2f",expr__21950_21967)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__21949_21966.call(null,"m3fv",expr__21950_21967)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__21949_21966.call(null,"m4fv",expr__21950_21967)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21950_21967))));
}
}
}
}
}
{
var G__21971 = cljs.core.next.call(null,seq__21939__$1);
var G__21972 = null;
var G__21973 = (0);
var G__21974 = (0);
seq__21939 = G__21971;
chunk__21940 = G__21972;
count__21941 = G__21973;
i__21942 = G__21974;
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
uniform.cljs$lang$applyTo = (function (arglist__21975){
var gl__$1 = cljs.core.first(arglist__21975);
arglist__21975 = cljs.core.next(arglist__21975);
var pobj = cljs.core.first(arglist__21975);
var unifs = cljs.core.rest(arglist__21975);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__21976,draw_fn){var map__21978 = p__21976;var map__21978__$1 = ((cljs.core.seq_QMARK_.call(null,map__21978))?cljs.core.apply.call(null,cljs.core.hash_map,map__21978):map__21978);var pobj = map__21978__$1;var program = cljs.core.get.call(null,map__21978__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); color = u_colorTransform* color; gl_FragColor = color;}"));
});
