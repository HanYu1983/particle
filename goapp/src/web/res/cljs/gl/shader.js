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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__39646_39647 = gl__$1;G__39646_39647.attachShader(p,vs);
G__39646_39647.attachShader(p,fs);
G__39646_39647.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__39648){var map__39656 = p__39648;var map__39656__$1 = ((cljs.core.seq_QMARK_.call(null,map__39656))?cljs.core.apply.call(null,cljs.core.hash_map,map__39656):map__39656);var info = map__39656__$1;var attrs = cljs.core.get.call(null,map__39656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39656__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__39657_39663 = cljs.core.seq.call(null,attrs);var chunk__39658_39664 = null;var count__39659_39665 = (0);var i__39660_39666 = (0);while(true){
if((i__39660_39666 < count__39659_39665))
{var vec__39661_39667 = cljs.core._nth.call(null,chunk__39658_39664,i__39660_39666);var n_39668 = cljs.core.nth.call(null,vec__39661_39667,(0),null);var loc_39669 = cljs.core.nth.call(null,vec__39661_39667,(1),null);gl__$1.disableVertexAttribArray(loc_39669);
{
var G__39670 = seq__39657_39663;
var G__39671 = chunk__39658_39664;
var G__39672 = count__39659_39665;
var G__39673 = (i__39660_39666 + (1));
seq__39657_39663 = G__39670;
chunk__39658_39664 = G__39671;
count__39659_39665 = G__39672;
i__39660_39666 = G__39673;
continue;
}
} else
{var temp__4126__auto___39674 = cljs.core.seq.call(null,seq__39657_39663);if(temp__4126__auto___39674)
{var seq__39657_39675__$1 = temp__4126__auto___39674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39657_39675__$1))
{var c__4307__auto___39676 = cljs.core.chunk_first.call(null,seq__39657_39675__$1);{
var G__39677 = cljs.core.chunk_rest.call(null,seq__39657_39675__$1);
var G__39678 = c__4307__auto___39676;
var G__39679 = cljs.core.count.call(null,c__4307__auto___39676);
var G__39680 = (0);
seq__39657_39663 = G__39677;
chunk__39658_39664 = G__39678;
count__39659_39665 = G__39679;
i__39660_39666 = G__39680;
continue;
}
} else
{var vec__39662_39681 = cljs.core.first.call(null,seq__39657_39675__$1);var n_39682 = cljs.core.nth.call(null,vec__39662_39681,(0),null);var loc_39683 = cljs.core.nth.call(null,vec__39662_39681,(1),null);gl__$1.disableVertexAttribArray(loc_39683);
{
var G__39684 = cljs.core.next.call(null,seq__39657_39675__$1);
var G__39685 = null;
var G__39686 = (0);
var G__39687 = (0);
seq__39657_39663 = G__39684;
chunk__39658_39664 = G__39685;
count__39659_39665 = G__39686;
i__39660_39666 = G__39687;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__39688){var map__39690 = p__39688;var map__39690__$1 = ((cljs.core.seq_QMARK_.call(null,map__39690))?cljs.core.apply.call(null,cljs.core.hash_map,map__39690):map__39690);var info = map__39690__$1;var p = cljs.core.get.call(null,map__39690__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__39690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39690__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__39690,map__39690__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__39690,map__39690__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__39690,map__39690__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__39690,map__39690__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__39705 = cljs.core.seq.call(null,unifs);var chunk__39706 = null;var count__39707 = (0);var i__39708 = (0);while(true){
if((i__39708 < count__39707))
{var vec__39709 = cljs.core._nth.call(null,chunk__39706,i__39708);var n = cljs.core.nth.call(null,vec__39709,(0),null);var type = cljs.core.nth.call(null,vec__39709,(1),null);var v = cljs.core.nth.call(null,vec__39709,(2),null);var pred__39710_39719 = cljs.core._EQ_;var expr__39711_39720 = type;if(cljs.core.truth_(pred__39710_39719.call(null,"s2d",expr__39711_39720)))
{var vec__39713_39721 = v;var tex_39722 = cljs.core.nth.call(null,vec__39713_39721,(0),null);var channel_39723 = cljs.core.nth.call(null,vec__39713_39721,(1),null);gl.texture.bind.call(null,gl__$1,tex_39722,channel_39723,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39710_39719.call(null,"1f",expr__39711_39720)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39710_39719.call(null,"2f",expr__39711_39720)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39710_39719.call(null,"m3fv",expr__39711_39720)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39710_39719.call(null,"m4fv",expr__39711_39720)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39711_39720))));
}
}
}
}
}
{
var G__39724 = seq__39705;
var G__39725 = chunk__39706;
var G__39726 = count__39707;
var G__39727 = (i__39708 + (1));
seq__39705 = G__39724;
chunk__39706 = G__39725;
count__39707 = G__39726;
i__39708 = G__39727;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39705);if(temp__4126__auto__)
{var seq__39705__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39705__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__39705__$1);{
var G__39728 = cljs.core.chunk_rest.call(null,seq__39705__$1);
var G__39729 = c__4307__auto__;
var G__39730 = cljs.core.count.call(null,c__4307__auto__);
var G__39731 = (0);
seq__39705 = G__39728;
chunk__39706 = G__39729;
count__39707 = G__39730;
i__39708 = G__39731;
continue;
}
} else
{var vec__39714 = cljs.core.first.call(null,seq__39705__$1);var n = cljs.core.nth.call(null,vec__39714,(0),null);var type = cljs.core.nth.call(null,vec__39714,(1),null);var v = cljs.core.nth.call(null,vec__39714,(2),null);var pred__39715_39732 = cljs.core._EQ_;var expr__39716_39733 = type;if(cljs.core.truth_(pred__39715_39732.call(null,"s2d",expr__39716_39733)))
{var vec__39718_39734 = v;var tex_39735 = cljs.core.nth.call(null,vec__39718_39734,(0),null);var channel_39736 = cljs.core.nth.call(null,vec__39718_39734,(1),null);gl.texture.bind.call(null,gl__$1,tex_39735,channel_39736,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39715_39732.call(null,"1f",expr__39716_39733)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39715_39732.call(null,"2f",expr__39716_39733)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39715_39732.call(null,"m3fv",expr__39716_39733)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39715_39732.call(null,"m4fv",expr__39716_39733)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39716_39733))));
}
}
}
}
}
{
var G__39737 = cljs.core.next.call(null,seq__39705__$1);
var G__39738 = null;
var G__39739 = (0);
var G__39740 = (0);
seq__39705 = G__39737;
chunk__39706 = G__39738;
count__39707 = G__39739;
i__39708 = G__39740;
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
uniform.cljs$lang$applyTo = (function (arglist__39741){
var gl__$1 = cljs.core.first(arglist__39741);
arglist__39741 = cljs.core.next(arglist__39741);
var pobj = cljs.core.first(arglist__39741);
var unifs = cljs.core.rest(arglist__39741);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__39742,draw_fn){var map__39744 = p__39742;var map__39744__$1 = ((cljs.core.seq_QMARK_.call(null,map__39744))?cljs.core.apply.call(null,cljs.core.hash_map,map__39744):map__39744);var pobj = map__39744__$1;var program = cljs.core.get.call(null,map__39744__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a = u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
