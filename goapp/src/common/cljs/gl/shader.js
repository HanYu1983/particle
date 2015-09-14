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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__12576_12577 = gl__$1;G__12576_12577.attachShader(p,vs);
G__12576_12577.attachShader(p,fs);
G__12576_12577.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__12578){var map__12586 = p__12578;var map__12586__$1 = ((cljs.core.seq_QMARK_.call(null,map__12586))?cljs.core.apply.call(null,cljs.core.hash_map,map__12586):map__12586);var info = map__12586__$1;var attrs = cljs.core.get.call(null,map__12586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__12586__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__12587_12593 = cljs.core.seq.call(null,attrs);var chunk__12588_12594 = null;var count__12589_12595 = (0);var i__12590_12596 = (0);while(true){
if((i__12590_12596 < count__12589_12595))
{var vec__12591_12597 = cljs.core._nth.call(null,chunk__12588_12594,i__12590_12596);var n_12598 = cljs.core.nth.call(null,vec__12591_12597,(0),null);var loc_12599 = cljs.core.nth.call(null,vec__12591_12597,(1),null);gl__$1.disableVertexAttribArray(loc_12599);
{
var G__12600 = seq__12587_12593;
var G__12601 = chunk__12588_12594;
var G__12602 = count__12589_12595;
var G__12603 = (i__12590_12596 + (1));
seq__12587_12593 = G__12600;
chunk__12588_12594 = G__12601;
count__12589_12595 = G__12602;
i__12590_12596 = G__12603;
continue;
}
} else
{var temp__4126__auto___12604 = cljs.core.seq.call(null,seq__12587_12593);if(temp__4126__auto___12604)
{var seq__12587_12605__$1 = temp__4126__auto___12604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12587_12605__$1))
{var c__4307__auto___12606 = cljs.core.chunk_first.call(null,seq__12587_12605__$1);{
var G__12607 = cljs.core.chunk_rest.call(null,seq__12587_12605__$1);
var G__12608 = c__4307__auto___12606;
var G__12609 = cljs.core.count.call(null,c__4307__auto___12606);
var G__12610 = (0);
seq__12587_12593 = G__12607;
chunk__12588_12594 = G__12608;
count__12589_12595 = G__12609;
i__12590_12596 = G__12610;
continue;
}
} else
{var vec__12592_12611 = cljs.core.first.call(null,seq__12587_12605__$1);var n_12612 = cljs.core.nth.call(null,vec__12592_12611,(0),null);var loc_12613 = cljs.core.nth.call(null,vec__12592_12611,(1),null);gl__$1.disableVertexAttribArray(loc_12613);
{
var G__12614 = cljs.core.next.call(null,seq__12587_12605__$1);
var G__12615 = null;
var G__12616 = (0);
var G__12617 = (0);
seq__12587_12593 = G__12614;
chunk__12588_12594 = G__12615;
count__12589_12595 = G__12616;
i__12590_12596 = G__12617;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__12618){var map__12620 = p__12618;var map__12620__$1 = ((cljs.core.seq_QMARK_.call(null,map__12620))?cljs.core.apply.call(null,cljs.core.hash_map,map__12620):map__12620);var info = map__12620__$1;var p = cljs.core.get.call(null,map__12620__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__12620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__12620__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__12620,map__12620__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__12620,map__12620__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__12620,map__12620__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__12620,map__12620__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__12635 = cljs.core.seq.call(null,unifs);var chunk__12636 = null;var count__12637 = (0);var i__12638 = (0);while(true){
if((i__12638 < count__12637))
{var vec__12639 = cljs.core._nth.call(null,chunk__12636,i__12638);var n = cljs.core.nth.call(null,vec__12639,(0),null);var type = cljs.core.nth.call(null,vec__12639,(1),null);var v = cljs.core.nth.call(null,vec__12639,(2),null);var pred__12640_12649 = cljs.core._EQ_;var expr__12641_12650 = type;if(cljs.core.truth_(pred__12640_12649.call(null,"s2d",expr__12641_12650)))
{var vec__12643_12651 = v;var tex_12652 = cljs.core.nth.call(null,vec__12643_12651,(0),null);var channel_12653 = cljs.core.nth.call(null,vec__12643_12651,(1),null);gl.texture.bind.call(null,gl__$1,tex_12652,channel_12653,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__12640_12649.call(null,"1f",expr__12641_12650)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__12640_12649.call(null,"2f",expr__12641_12650)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__12640_12649.call(null,"m3fv",expr__12641_12650)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__12640_12649.call(null,"m4fv",expr__12641_12650)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12641_12650))));
}
}
}
}
}
{
var G__12654 = seq__12635;
var G__12655 = chunk__12636;
var G__12656 = count__12637;
var G__12657 = (i__12638 + (1));
seq__12635 = G__12654;
chunk__12636 = G__12655;
count__12637 = G__12656;
i__12638 = G__12657;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12635);if(temp__4126__auto__)
{var seq__12635__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12635__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12635__$1);{
var G__12658 = cljs.core.chunk_rest.call(null,seq__12635__$1);
var G__12659 = c__4307__auto__;
var G__12660 = cljs.core.count.call(null,c__4307__auto__);
var G__12661 = (0);
seq__12635 = G__12658;
chunk__12636 = G__12659;
count__12637 = G__12660;
i__12638 = G__12661;
continue;
}
} else
{var vec__12644 = cljs.core.first.call(null,seq__12635__$1);var n = cljs.core.nth.call(null,vec__12644,(0),null);var type = cljs.core.nth.call(null,vec__12644,(1),null);var v = cljs.core.nth.call(null,vec__12644,(2),null);var pred__12645_12662 = cljs.core._EQ_;var expr__12646_12663 = type;if(cljs.core.truth_(pred__12645_12662.call(null,"s2d",expr__12646_12663)))
{var vec__12648_12664 = v;var tex_12665 = cljs.core.nth.call(null,vec__12648_12664,(0),null);var channel_12666 = cljs.core.nth.call(null,vec__12648_12664,(1),null);gl.texture.bind.call(null,gl__$1,tex_12665,channel_12666,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__12645_12662.call(null,"1f",expr__12646_12663)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__12645_12662.call(null,"2f",expr__12646_12663)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__12645_12662.call(null,"m3fv",expr__12646_12663)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__12645_12662.call(null,"m4fv",expr__12646_12663)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12646_12663))));
}
}
}
}
}
{
var G__12667 = cljs.core.next.call(null,seq__12635__$1);
var G__12668 = null;
var G__12669 = (0);
var G__12670 = (0);
seq__12635 = G__12667;
chunk__12636 = G__12668;
count__12637 = G__12669;
i__12638 = G__12670;
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
uniform.cljs$lang$applyTo = (function (arglist__12671){
var gl__$1 = cljs.core.first(arglist__12671);
arglist__12671 = cljs.core.next(arglist__12671);
var pobj = cljs.core.first(arglist__12671);
var unifs = cljs.core.rest(arglist__12671);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__12672,draw_fn){var map__12674 = p__12672;var map__12674__$1 = ((cljs.core.seq_QMARK_.call(null,map__12674))?cljs.core.apply.call(null,cljs.core.hash_map,map__12674):map__12674);var pobj = map__12674__$1;var program = cljs.core.get.call(null,map__12674__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a *= u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
