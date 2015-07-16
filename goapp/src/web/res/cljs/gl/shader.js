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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__36768_36769 = gl__$1;G__36768_36769.attachShader(p,vs);
G__36768_36769.attachShader(p,fs);
G__36768_36769.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__36770){var map__36778 = p__36770;var map__36778__$1 = ((cljs.core.seq_QMARK_.call(null,map__36778))?cljs.core.apply.call(null,cljs.core.hash_map,map__36778):map__36778);var info = map__36778__$1;var attrs = cljs.core.get.call(null,map__36778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__36778__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__36779_36785 = cljs.core.seq.call(null,attrs);var chunk__36780_36786 = null;var count__36781_36787 = (0);var i__36782_36788 = (0);while(true){
if((i__36782_36788 < count__36781_36787))
{var vec__36783_36789 = cljs.core._nth.call(null,chunk__36780_36786,i__36782_36788);var n_36790 = cljs.core.nth.call(null,vec__36783_36789,(0),null);var loc_36791 = cljs.core.nth.call(null,vec__36783_36789,(1),null);gl__$1.disableVertexAttribArray(loc_36791);
{
var G__36792 = seq__36779_36785;
var G__36793 = chunk__36780_36786;
var G__36794 = count__36781_36787;
var G__36795 = (i__36782_36788 + (1));
seq__36779_36785 = G__36792;
chunk__36780_36786 = G__36793;
count__36781_36787 = G__36794;
i__36782_36788 = G__36795;
continue;
}
} else
{var temp__4126__auto___36796 = cljs.core.seq.call(null,seq__36779_36785);if(temp__4126__auto___36796)
{var seq__36779_36797__$1 = temp__4126__auto___36796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36779_36797__$1))
{var c__4307__auto___36798 = cljs.core.chunk_first.call(null,seq__36779_36797__$1);{
var G__36799 = cljs.core.chunk_rest.call(null,seq__36779_36797__$1);
var G__36800 = c__4307__auto___36798;
var G__36801 = cljs.core.count.call(null,c__4307__auto___36798);
var G__36802 = (0);
seq__36779_36785 = G__36799;
chunk__36780_36786 = G__36800;
count__36781_36787 = G__36801;
i__36782_36788 = G__36802;
continue;
}
} else
{var vec__36784_36803 = cljs.core.first.call(null,seq__36779_36797__$1);var n_36804 = cljs.core.nth.call(null,vec__36784_36803,(0),null);var loc_36805 = cljs.core.nth.call(null,vec__36784_36803,(1),null);gl__$1.disableVertexAttribArray(loc_36805);
{
var G__36806 = cljs.core.next.call(null,seq__36779_36797__$1);
var G__36807 = null;
var G__36808 = (0);
var G__36809 = (0);
seq__36779_36785 = G__36806;
chunk__36780_36786 = G__36807;
count__36781_36787 = G__36808;
i__36782_36788 = G__36809;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__36810){var map__36812 = p__36810;var map__36812__$1 = ((cljs.core.seq_QMARK_.call(null,map__36812))?cljs.core.apply.call(null,cljs.core.hash_map,map__36812):map__36812);var info = map__36812__$1;var p = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__36812,map__36812__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__36812,map__36812__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__36812,map__36812__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__36812,map__36812__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__36827 = cljs.core.seq.call(null,unifs);var chunk__36828 = null;var count__36829 = (0);var i__36830 = (0);while(true){
if((i__36830 < count__36829))
{var vec__36831 = cljs.core._nth.call(null,chunk__36828,i__36830);var n = cljs.core.nth.call(null,vec__36831,(0),null);var type = cljs.core.nth.call(null,vec__36831,(1),null);var v = cljs.core.nth.call(null,vec__36831,(2),null);var pred__36832_36841 = cljs.core._EQ_;var expr__36833_36842 = type;if(cljs.core.truth_(pred__36832_36841.call(null,"s2d",expr__36833_36842)))
{var vec__36835_36843 = v;var tex_36844 = cljs.core.nth.call(null,vec__36835_36843,(0),null);var channel_36845 = cljs.core.nth.call(null,vec__36835_36843,(1),null);gl.texture.bind.call(null,gl__$1,tex_36844,channel_36845,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__36832_36841.call(null,"1f",expr__36833_36842)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__36832_36841.call(null,"2f",expr__36833_36842)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__36832_36841.call(null,"m3fv",expr__36833_36842)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__36832_36841.call(null,"m4fv",expr__36833_36842)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36833_36842))));
}
}
}
}
}
{
var G__36846 = seq__36827;
var G__36847 = chunk__36828;
var G__36848 = count__36829;
var G__36849 = (i__36830 + (1));
seq__36827 = G__36846;
chunk__36828 = G__36847;
count__36829 = G__36848;
i__36830 = G__36849;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__36827);if(temp__4126__auto__)
{var seq__36827__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36827__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__36827__$1);{
var G__36850 = cljs.core.chunk_rest.call(null,seq__36827__$1);
var G__36851 = c__4307__auto__;
var G__36852 = cljs.core.count.call(null,c__4307__auto__);
var G__36853 = (0);
seq__36827 = G__36850;
chunk__36828 = G__36851;
count__36829 = G__36852;
i__36830 = G__36853;
continue;
}
} else
{var vec__36836 = cljs.core.first.call(null,seq__36827__$1);var n = cljs.core.nth.call(null,vec__36836,(0),null);var type = cljs.core.nth.call(null,vec__36836,(1),null);var v = cljs.core.nth.call(null,vec__36836,(2),null);var pred__36837_36854 = cljs.core._EQ_;var expr__36838_36855 = type;if(cljs.core.truth_(pred__36837_36854.call(null,"s2d",expr__36838_36855)))
{var vec__36840_36856 = v;var tex_36857 = cljs.core.nth.call(null,vec__36840_36856,(0),null);var channel_36858 = cljs.core.nth.call(null,vec__36840_36856,(1),null);gl.texture.bind.call(null,gl__$1,tex_36857,channel_36858,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__36837_36854.call(null,"1f",expr__36838_36855)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__36837_36854.call(null,"2f",expr__36838_36855)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__36837_36854.call(null,"m3fv",expr__36838_36855)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__36837_36854.call(null,"m4fv",expr__36838_36855)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36838_36855))));
}
}
}
}
}
{
var G__36859 = cljs.core.next.call(null,seq__36827__$1);
var G__36860 = null;
var G__36861 = (0);
var G__36862 = (0);
seq__36827 = G__36859;
chunk__36828 = G__36860;
count__36829 = G__36861;
i__36830 = G__36862;
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
uniform.cljs$lang$applyTo = (function (arglist__36863){
var gl__$1 = cljs.core.first(arglist__36863);
arglist__36863 = cljs.core.next(arglist__36863);
var pobj = cljs.core.first(arglist__36863);
var unifs = cljs.core.rest(arglist__36863);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__36864,draw_fn){var map__36866 = p__36864;var map__36866__$1 = ((cljs.core.seq_QMARK_.call(null,map__36866))?cljs.core.apply.call(null,cljs.core.hash_map,map__36866):map__36866);var pobj = map__36866__$1;var program = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); color = u_colorTransform* color; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
