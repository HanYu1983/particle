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
gl.shader.program = (function program(gl__$1,vs,fs){var p = gl__$1.createProgram();var G__54180_54181 = gl__$1;G__54180_54181.attachShader(p,vs);
G__54180_54181.attachShader(p,fs);
G__54180_54181.linkProgram(p);
if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS)))
{return p;
} else
{return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function closeAttrsUnifs(gl__$1,p__54182){var map__54190 = p__54182;var map__54190__$1 = ((cljs.core.seq_QMARK_.call(null,map__54190))?cljs.core.apply.call(null,cljs.core.hash_map,map__54190):map__54190);var info = map__54190__$1;var attrs = cljs.core.get.call(null,map__54190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__54190__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var seq__54191_54197 = cljs.core.seq.call(null,attrs);var chunk__54192_54198 = null;var count__54193_54199 = (0);var i__54194_54200 = (0);while(true){
if((i__54194_54200 < count__54193_54199))
{var vec__54195_54201 = cljs.core._nth.call(null,chunk__54192_54198,i__54194_54200);var n_54202 = cljs.core.nth.call(null,vec__54195_54201,(0),null);var loc_54203 = cljs.core.nth.call(null,vec__54195_54201,(1),null);gl__$1.disableVertexAttribArray(loc_54203);
{
var G__54204 = seq__54191_54197;
var G__54205 = chunk__54192_54198;
var G__54206 = count__54193_54199;
var G__54207 = (i__54194_54200 + (1));
seq__54191_54197 = G__54204;
chunk__54192_54198 = G__54205;
count__54193_54199 = G__54206;
i__54194_54200 = G__54207;
continue;
}
} else
{var temp__4126__auto___54208 = cljs.core.seq.call(null,seq__54191_54197);if(temp__4126__auto___54208)
{var seq__54191_54209__$1 = temp__4126__auto___54208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54191_54209__$1))
{var c__4307__auto___54210 = cljs.core.chunk_first.call(null,seq__54191_54209__$1);{
var G__54211 = cljs.core.chunk_rest.call(null,seq__54191_54209__$1);
var G__54212 = c__4307__auto___54210;
var G__54213 = cljs.core.count.call(null,c__4307__auto___54210);
var G__54214 = (0);
seq__54191_54197 = G__54211;
chunk__54192_54198 = G__54212;
count__54193_54199 = G__54213;
i__54194_54200 = G__54214;
continue;
}
} else
{var vec__54196_54215 = cljs.core.first.call(null,seq__54191_54209__$1);var n_54216 = cljs.core.nth.call(null,vec__54196_54215,(0),null);var loc_54217 = cljs.core.nth.call(null,vec__54196_54215,(1),null);gl__$1.disableVertexAttribArray(loc_54217);
{
var G__54218 = cljs.core.next.call(null,seq__54191_54209__$1);
var G__54219 = null;
var G__54220 = (0);
var G__54221 = (0);
seq__54191_54197 = G__54218;
chunk__54192_54198 = G__54219;
count__54193_54199 = G__54220;
i__54194_54200 = G__54221;
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
gl.shader.openAttrsUnifs = (function openAttrsUnifs(gl__$1,p__54222){var map__54224 = p__54222;var map__54224__$1 = ((cljs.core.seq_QMARK_.call(null,map__54224))?cljs.core.apply.call(null,cljs.core.hash_map,map__54224):map__54224);var info = map__54224__$1;var p = cljs.core.get.call(null,map__54224__$1,new cljs.core.Keyword(null,"program","program",781564284));var attrs = cljs.core.get.call(null,map__54224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));var unifs = cljs.core.get.call(null,map__54224__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__54224,map__54224__$1,info,p,attrs,unifs){
return (function (n){var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));gl__$1.enableVertexAttribArray(loc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__54224,map__54224__$1,info,p,attrs,unifs))
,attrs));var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__54224,map__54224__$1,info,p,attrs,unifs){
return (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__54224,map__54224__$1,info,p,attrs,unifs))
,unifs));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
/**
* @param {...*} var_args
*/
gl.shader.uniform = (function() { 
var uniform__delegate = function (gl__$1,pobj,unifs){var seq__54239 = cljs.core.seq.call(null,unifs);var chunk__54240 = null;var count__54241 = (0);var i__54242 = (0);while(true){
if((i__54242 < count__54241))
{var vec__54243 = cljs.core._nth.call(null,chunk__54240,i__54242);var n = cljs.core.nth.call(null,vec__54243,(0),null);var type = cljs.core.nth.call(null,vec__54243,(1),null);var v = cljs.core.nth.call(null,vec__54243,(2),null);var pred__54244_54253 = cljs.core._EQ_;var expr__54245_54254 = type;if(cljs.core.truth_(pred__54244_54253.call(null,"s2d",expr__54245_54254)))
{var vec__54247_54255 = v;var tex_54256 = cljs.core.nth.call(null,vec__54247_54255,(0),null);var channel_54257 = cljs.core.nth.call(null,vec__54247_54255,(1),null);gl.texture.bind.call(null,gl__$1,tex_54256,channel_54257,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__54244_54253.call(null,"1f",expr__54245_54254)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__54244_54253.call(null,"2f",expr__54245_54254)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__54244_54253.call(null,"m3fv",expr__54245_54254)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__54244_54253.call(null,"m4fv",expr__54245_54254)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54245_54254))));
}
}
}
}
}
{
var G__54258 = seq__54239;
var G__54259 = chunk__54240;
var G__54260 = count__54241;
var G__54261 = (i__54242 + (1));
seq__54239 = G__54258;
chunk__54240 = G__54259;
count__54241 = G__54260;
i__54242 = G__54261;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54239);if(temp__4126__auto__)
{var seq__54239__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54239__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__54239__$1);{
var G__54262 = cljs.core.chunk_rest.call(null,seq__54239__$1);
var G__54263 = c__4307__auto__;
var G__54264 = cljs.core.count.call(null,c__4307__auto__);
var G__54265 = (0);
seq__54239 = G__54262;
chunk__54240 = G__54263;
count__54241 = G__54264;
i__54242 = G__54265;
continue;
}
} else
{var vec__54248 = cljs.core.first.call(null,seq__54239__$1);var n = cljs.core.nth.call(null,vec__54248,(0),null);var type = cljs.core.nth.call(null,vec__54248,(1),null);var v = cljs.core.nth.call(null,vec__54248,(2),null);var pred__54249_54266 = cljs.core._EQ_;var expr__54250_54267 = type;if(cljs.core.truth_(pred__54249_54266.call(null,"s2d",expr__54250_54267)))
{var vec__54252_54268 = v;var tex_54269 = cljs.core.nth.call(null,vec__54252_54268,(0),null);var channel_54270 = cljs.core.nth.call(null,vec__54252_54268,(1),null);gl.texture.bind.call(null,gl__$1,tex_54269,channel_54270,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else
{if(cljs.core.truth_(pred__54249_54266.call(null,"1f",expr__54250_54267)))
{gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else
{if(cljs.core.truth_(pred__54249_54266.call(null,"2f",expr__54250_54267)))
{gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else
{if(cljs.core.truth_(pred__54249_54266.call(null,"m3fv",expr__54250_54267)))
{gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{if(cljs.core.truth_(pred__54249_54266.call(null,"m4fv",expr__54250_54267)))
{gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54250_54267))));
}
}
}
}
}
{
var G__54271 = cljs.core.next.call(null,seq__54239__$1);
var G__54272 = null;
var G__54273 = (0);
var G__54274 = (0);
seq__54239 = G__54271;
chunk__54240 = G__54272;
count__54241 = G__54273;
i__54242 = G__54274;
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
uniform.cljs$lang$applyTo = (function (arglist__54275){
var gl__$1 = cljs.core.first(arglist__54275);
arglist__54275 = cljs.core.next(arglist__54275);
var pobj = cljs.core.first(arglist__54275);
var unifs = cljs.core.rest(arglist__54275);
return uniform__delegate(gl__$1,pobj,unifs);
});
uniform.cljs$core$IFn$_invoke$arity$variadic = uniform__delegate;
return uniform;
})()
;
gl.shader.programObject = (function programObject(gl__$1,attrs,unifs,vs,fs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function use(gl__$1,p__54276,draw_fn){var map__54278 = p__54276;var map__54278__$1 = ((cljs.core.seq_QMARK_.call(null,map__54278))?cljs.core.apply.call(null,cljs.core.hash_map,map__54278):map__54278);var pobj = map__54278__$1;var program = cljs.core.get.call(null,map__54278__$1,new cljs.core.Keyword(null,"program","program",781564284));var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);gl__$1.useProgram(program);
draw_fn.call(null,p);
return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function spriteProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),("attribute vec4 a_position;attribute vec2 a_texCoord;uniform mat4 u_projection;uniform mat4 u_transform;uniform mat3 u_texTransform;varying vec2 v_texCoord;void main(){ vec4 pos = u_projection* u_transform* a_position; gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w); v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_tex;uniform mat4 u_colorTransform;uniform float u_alpha;varying vec2 v_texCoord;void main(void){ vec4 color = texture2D( u_tex, v_texCoord ); vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0); color.r *= colorAdj.r; color.g *= colorAdj.g; color.b *= colorAdj.b; color.a *= u_alpha; gl_FragColor = color;}"));
});
gl.shader.waveProgramObject = (function waveProgramObject(gl__$1){return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),("attribute vec4 position;attribute vec4 inputTextureCoordinate;varying vec2 textureCoordinate;void main(){gl_Position = position;textureCoordinate = inputTextureCoordinate.xy;}"),("#ifdef GL_ES\nprecision highp float;\n#endif\nvarying highp vec2 textureCoordinate;uniform sampler2D inputImageTexture;uniform float normalizedPhase;uniform vec2 mouse;float m_pi = 3.14159265358979323846;void main() {vec4 color;float x = textureCoordinate.x - mouse.x;float y = textureCoordinate.y - mouse.y;float dist = sqrt(x*x + y*y);float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));}"));
});
