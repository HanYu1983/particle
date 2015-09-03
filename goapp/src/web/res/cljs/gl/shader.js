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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__39629_39630 = gl__$1;G__39629_39630.attachShader(p,vs);
G__39629_39630.attachShader(p,fs);
G__39629_39630.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__39631){var map__39639 = p__39631;var map__39639__$1 = ((cljs.core.seq_QMARK_.call(null,map__39639))?cljs.core.apply.call(null,cljs.core.hash_map,map__39639):map__39639);var info = map__39639__$1;var attrs = cljs.core.get.call(null,map__39639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39639__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__39640_39646 = cljs.core.seq.call(null,attrs);var chunk__39641_39647 = null;var count__39642_39648 = (0);var i__39643_39649 = (0);while(true){
if((i__39643_39649 < count__39642_39648))
{var vec__39644_39650 = cljs.core._nth.call(null,chunk__39641_39647,i__39643_39649);var n_39651 = cljs.core.nth.call(null,vec__39644_39650,(0),null);var loc_39652 = cljs.core.nth.call(null,vec__39644_39650,(1),null);gl__$1.disableVertexAttribArray(loc_39652);
{
var G__39653 = seq__39640_39646;
var G__39654 = chunk__39641_39647;
var G__39655 = count__39642_39648;
var G__39656 = (i__39643_39649 + (1));
seq__39640_39646 = G__39653;
chunk__39641_39647 = G__39654;
count__39642_39648 = G__39655;
i__39643_39649 = G__39656;
continue;
}
} else
{var temp__4126__auto___39657 = cljs.core.seq.call(null,seq__39640_39646);if(temp__4126__auto___39657)
{var seq__39640_39658__$1 = temp__4126__auto___39657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39640_39658__$1))
{var c__4307__auto___39659 = cljs.core.chunk_first.call(null,seq__39640_39658__$1);{
var G__39660 = cljs.core.chunk_rest.call(null,seq__39640_39658__$1);
var G__39661 = c__4307__auto___39659;
var G__39662 = cljs.core.count.call(null,c__4307__auto___39659);
var G__39663 = (0);
seq__39640_39646 = G__39660;
chunk__39641_39647 = G__39661;
count__39642_39648 = G__39662;
i__39643_39649 = G__39663;
continue;
}
} else
{var vec__39645_39664 = cljs.core.first.call(null,seq__39640_39658__$1);var n_39665 = cljs.core.nth.call(null,vec__39645_39664,(0),null);var loc_39666 = cljs.core.nth.call(null,vec__39645_39664,(1),null);gl__$1.disableVertexAttribArray(loc_39666);
{
var G__39667 = cljs.core.next.call(null,seq__39640_39658__$1);
var G__39668 = null;
var G__39669 = (0);
var G__39670 = (0);
seq__39640_39646 = G__39667;
chunk__39641_39647 = G__39668;
count__39642_39648 = G__39669;
i__39643_39649 = G__39670;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__39671){var map__39673 = p__39671;var map__39673__$1 = ((cljs.core.seq_QMARK_.call(null,map__39673))?cljs.core.apply.call(null,cljs.core.hash_map,map__39673):map__39673);var info = map__39673__$1;var p = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__39673,map__39673__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__39673,map__39673__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__39673,map__39673__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__39673,map__39673__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__39688 = cljs.core.seq.call(null,unifs);var chunk__39689 = null;var count__39690 = (0);var i__39691 = (0);while(true){
if((i__39691 < count__39690))
{var vec__39692 = cljs.core._nth.call(null,chunk__39689,i__39691);var n = cljs.core.nth.call(null,vec__39692,(0),null);var type = cljs.core.nth.call(null,vec__39692,(1),null);var v = cljs.core.nth.call(null,vec__39692,(2),null);var pred__39693_39702 = cljs.core._EQ_;var expr__39694_39703 = type;if(cljs.core.truth_(pred__39693_39702.call(null,"s2d",expr__39694_39703)))
{var vec__39696_39704 = v;var tex_39705 = cljs.core.nth.call(null,vec__39696_39704,(0),null);var channel_39706 = cljs.core.nth.call(null,vec__39696_39704,(1),null);gl.texture.bind.call(null,gl__$1,tex_39705,channel_39706,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39693_39702.call(null,"1f",expr__39694_39703)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39693_39702.call(null,"2f",expr__39694_39703)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39693_39702.call(null,"m3fv",expr__39694_39703)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39693_39702.call(null,"m4fv",expr__39694_39703)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39694_39703))));
}
}
}
}
}
{
var G__39707 = seq__39688;
var G__39708 = chunk__39689;
var G__39709 = count__39690;
var G__39710 = (i__39691 + (1));
seq__39688 = G__39707;
chunk__39689 = G__39708;
count__39690 = G__39709;
i__39691 = G__39710;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39688);if(temp__4126__auto__)
{var seq__39688__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39688__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__39688__$1);{
var G__39711 = cljs.core.chunk_rest.call(null,seq__39688__$1);
var G__39712 = c__4307__auto__;
var G__39713 = cljs.core.count.call(null,c__4307__auto__);
var G__39714 = (0);
seq__39688 = G__39711;
chunk__39689 = G__39712;
count__39690 = G__39713;
i__39691 = G__39714;
continue;
}
} else
{var vec__39697 = cljs.core.first.call(null,seq__39688__$1);var n = cljs.core.nth.call(null,vec__39697,(0),null);var type = cljs.core.nth.call(null,vec__39697,(1),null);var v = cljs.core.nth.call(null,vec__39697,(2),null);var pred__39698_39715 = cljs.core._EQ_;var expr__39699_39716 = type;if(cljs.core.truth_(pred__39698_39715.call(null,"s2d",expr__39699_39716)))
{var vec__39701_39717 = v;var tex_39718 = cljs.core.nth.call(null,vec__39701_39717,(0),null);var channel_39719 = cljs.core.nth.call(null,vec__39701_39717,(1),null);gl.texture.bind.call(null,gl__$1,tex_39718,channel_39719,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__39698_39715.call(null,"1f",expr__39699_39716)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__39698_39715.call(null,"2f",expr__39699_39716)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__39698_39715.call(null,"m3fv",expr__39699_39716)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__39698_39715.call(null,"m4fv",expr__39699_39716)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39699_39716))));
}
}
}
}
}
{
var G__39720 = cljs.core.next.call(null,seq__39688__$1);
var G__39721 = null;
var G__39722 = (0);
var G__39723 = (0);
seq__39688 = G__39720;
chunk__39689 = G__39721;
count__39690 = G__39722;
i__39691 = G__39723;
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
uniform.cljs$lang$applyTo = (function (arglist__39724){
var gl__$1 = cljs.core.first(arglist__39724);
arglist__39724 = cljs.core.next(arglist__39724);
var pobj = cljs.core.first(arglist__39724);
var unifs = cljs.core.rest(arglist__39724);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__39725,draw_fn){var map__39727 = p__39725;var map__39727__$1 = ((cljs.core.seq_QMARK_.call(null,map__39727))?cljs.core.apply.call(null,cljs.core.hash_map,map__39727):map__39727);var pobj = map__39727__$1;var program = cljs.core.get.call(null,map__39727__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); color = u_colorTransform* color; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
