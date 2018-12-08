// Compiled by ClojureScript 1.10.238 {}
goog.provide('gl.shader');
goog.require('cljs.core');
goog.require('gl.texture');
gl.shader.shader = (function gl$shader$shader(gl__$1,type,v){
var shader = gl__$1.createShader(type);
gl__$1.shaderSource(shader,v);

gl__$1.compileShader(shader);

if(cljs.core.truth_(gl__$1.getShaderParameter(shader,gl__$1.COMPILE_STATUS))){
return shader;
} else {
return console.log(gl__$1.getShaderInfoLog(shader));
}
});
gl.shader.program = (function gl$shader$program(gl__$1,vs,fs){
var p = gl__$1.createProgram();
var G__5313_5314 = gl__$1;
G__5313_5314.attachShader(p,vs);

G__5313_5314.attachShader(p,fs);

G__5313_5314.linkProgram(p);


if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS))){
return p;
} else {
return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function gl$shader$closeAttrsUnifs(gl__$1,p__5315){
var map__5316 = p__5315;
var map__5316__$1 = ((((!((map__5316 == null)))?(((((map__5316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5316):map__5316);
var info = map__5316__$1;
var attrs = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var unifs = cljs.core.get.call(null,map__5316__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));
var seq__5318_5328 = cljs.core.seq.call(null,attrs);
var chunk__5319_5329 = null;
var count__5320_5330 = (0);
var i__5321_5331 = (0);
while(true){
if((i__5321_5331 < count__5320_5330)){
var vec__5322_5332 = cljs.core._nth.call(null,chunk__5319_5329,i__5321_5331);
var n_5333 = cljs.core.nth.call(null,vec__5322_5332,(0),null);
var loc_5334 = cljs.core.nth.call(null,vec__5322_5332,(1),null);
gl__$1.disableVertexAttribArray(loc_5334);


var G__5335 = seq__5318_5328;
var G__5336 = chunk__5319_5329;
var G__5337 = count__5320_5330;
var G__5338 = (i__5321_5331 + (1));
seq__5318_5328 = G__5335;
chunk__5319_5329 = G__5336;
count__5320_5330 = G__5337;
i__5321_5331 = G__5338;
continue;
} else {
var temp__5457__auto___5339 = cljs.core.seq.call(null,seq__5318_5328);
if(temp__5457__auto___5339){
var seq__5318_5340__$1 = temp__5457__auto___5339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5318_5340__$1)){
var c__4319__auto___5341 = cljs.core.chunk_first.call(null,seq__5318_5340__$1);
var G__5342 = cljs.core.chunk_rest.call(null,seq__5318_5340__$1);
var G__5343 = c__4319__auto___5341;
var G__5344 = cljs.core.count.call(null,c__4319__auto___5341);
var G__5345 = (0);
seq__5318_5328 = G__5342;
chunk__5319_5329 = G__5343;
count__5320_5330 = G__5344;
i__5321_5331 = G__5345;
continue;
} else {
var vec__5325_5346 = cljs.core.first.call(null,seq__5318_5340__$1);
var n_5347 = cljs.core.nth.call(null,vec__5325_5346,(0),null);
var loc_5348 = cljs.core.nth.call(null,vec__5325_5346,(1),null);
gl__$1.disableVertexAttribArray(loc_5348);


var G__5349 = cljs.core.next.call(null,seq__5318_5340__$1);
var G__5350 = null;
var G__5351 = (0);
var G__5352 = (0);
seq__5318_5328 = G__5349;
chunk__5319_5329 = G__5350;
count__5320_5330 = G__5351;
i__5321_5331 = G__5352;
continue;
}
} else {
}
}
break;
}

return info;
});
gl.shader.openAttrsUnifs = (function gl$shader$openAttrsUnifs(gl__$1,p__5353){
var map__5354 = p__5353;
var map__5354__$1 = ((((!((map__5354 == null)))?(((((map__5354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5354):map__5354);
var info = map__5354__$1;
var p = cljs.core.get.call(null,map__5354__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attrs = cljs.core.get.call(null,map__5354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var unifs = cljs.core.get.call(null,map__5354__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));
var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__5354,map__5354__$1,info,p,attrs,unifs){
return (function (n){
var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));
gl__$1.enableVertexAttribArray(loc);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__5354,map__5354__$1,info,p,attrs,unifs))
,attrs));
var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__5354,map__5354__$1,info,p,attrs,unifs){
return (function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__5354,map__5354__$1,info,p,attrs,unifs))
,unifs));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
gl.shader.uniform = (function gl$shader$uniform(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5381 = arguments.length;
var i__4500__auto___5382 = (0);
while(true){
if((i__4500__auto___5382 < len__4499__auto___5381)){
args__4502__auto__.push((arguments[i__4500__auto___5382]));

var G__5383 = (i__4500__auto___5382 + (1));
i__4500__auto___5382 = G__5383;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return gl.shader.uniform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

gl.shader.uniform.cljs$core$IFn$_invoke$arity$variadic = (function (gl__$1,pobj,unifs){
var seq__5359 = cljs.core.seq.call(null,unifs);
var chunk__5360 = null;
var count__5361 = (0);
var i__5362 = (0);
while(true){
if((i__5362 < count__5361)){
var vec__5363 = cljs.core._nth.call(null,chunk__5360,i__5362);
var n = cljs.core.nth.call(null,vec__5363,(0),null);
var type = cljs.core.nth.call(null,vec__5363,(1),null);
var v = cljs.core.nth.call(null,vec__5363,(2),null);
var pred__5366_5384 = cljs.core._EQ_;
var expr__5367_5385 = type;
if(cljs.core.truth_(pred__5366_5384.call(null,"s2d",expr__5367_5385))){
var vec__5369_5386 = v;
var tex_5387 = cljs.core.nth.call(null,vec__5369_5386,(0),null);
var channel_5388 = cljs.core.nth.call(null,vec__5369_5386,(1),null);
gl.texture.bind.call(null,gl__$1,tex_5387,channel_5388,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else {
if(cljs.core.truth_(pred__5366_5384.call(null,"1f",expr__5367_5385))){
gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else {
if(cljs.core.truth_(pred__5366_5384.call(null,"2f",expr__5367_5385))){
gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else {
if(cljs.core.truth_(pred__5366_5384.call(null,"m3fv",expr__5367_5385))){
gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
if(cljs.core.truth_(pred__5366_5384.call(null,"m4fv",expr__5367_5385))){
gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5367_5385)].join('')));
}
}
}
}
}


var G__5389 = seq__5359;
var G__5390 = chunk__5360;
var G__5391 = count__5361;
var G__5392 = (i__5362 + (1));
seq__5359 = G__5389;
chunk__5360 = G__5390;
count__5361 = G__5391;
i__5362 = G__5392;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5359);
if(temp__5457__auto__){
var seq__5359__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5359__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5359__$1);
var G__5393 = cljs.core.chunk_rest.call(null,seq__5359__$1);
var G__5394 = c__4319__auto__;
var G__5395 = cljs.core.count.call(null,c__4319__auto__);
var G__5396 = (0);
seq__5359 = G__5393;
chunk__5360 = G__5394;
count__5361 = G__5395;
i__5362 = G__5396;
continue;
} else {
var vec__5372 = cljs.core.first.call(null,seq__5359__$1);
var n = cljs.core.nth.call(null,vec__5372,(0),null);
var type = cljs.core.nth.call(null,vec__5372,(1),null);
var v = cljs.core.nth.call(null,vec__5372,(2),null);
var pred__5375_5397 = cljs.core._EQ_;
var expr__5376_5398 = type;
if(cljs.core.truth_(pred__5375_5397.call(null,"s2d",expr__5376_5398))){
var vec__5378_5399 = v;
var tex_5400 = cljs.core.nth.call(null,vec__5378_5399,(0),null);
var channel_5401 = cljs.core.nth.call(null,vec__5378_5399,(1),null);
gl.texture.bind.call(null,gl__$1,tex_5400,channel_5401,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else {
if(cljs.core.truth_(pred__5375_5397.call(null,"1f",expr__5376_5398))){
gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else {
if(cljs.core.truth_(pred__5375_5397.call(null,"2f",expr__5376_5398))){
gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else {
if(cljs.core.truth_(pred__5375_5397.call(null,"m3fv",expr__5376_5398))){
gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
if(cljs.core.truth_(pred__5375_5397.call(null,"m4fv",expr__5376_5398))){
gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5376_5398)].join('')));
}
}
}
}
}


var G__5402 = cljs.core.next.call(null,seq__5359__$1);
var G__5403 = null;
var G__5404 = (0);
var G__5405 = (0);
seq__5359 = G__5402;
chunk__5360 = G__5403;
count__5361 = G__5404;
i__5362 = G__5405;
continue;
}
} else {
return null;
}
}
break;
}
});

gl.shader.uniform.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
gl.shader.uniform.cljs$lang$applyTo = (function (seq5356){
var G__5357 = cljs.core.first.call(null,seq5356);
var seq5356__$1 = cljs.core.next.call(null,seq5356);
var G__5358 = cljs.core.first.call(null,seq5356__$1);
var seq5356__$2 = cljs.core.next.call(null,seq5356__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5357,G__5358,seq5356__$2);
});

gl.shader.programObject = (function gl$shader$programObject(gl__$1,attrs,unifs,vs,fs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function gl$shader$use(gl__$1,p__5406,draw_fn){
var map__5407 = p__5406;
var map__5407__$1 = ((((!((map__5407 == null)))?(((((map__5407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5407):map__5407);
var pobj = map__5407__$1;
var program = cljs.core.get.call(null,map__5407__$1,new cljs.core.Keyword(null,"program","program",781564284));
var p = gl.shader.openAttrsUnifs.call(null,gl__$1,pobj);
gl__$1.useProgram(program);

draw_fn.call(null,p);

return gl.shader.closeAttrsUnifs.call(null,gl__$1,p);
});
gl.shader.spriteProgramObject = (function gl$shader$spriteProgramObject(gl__$1){
return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),new cljs.core.Keyword(null,"u_tex","u_tex",722131582),new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099)], null),["attribute vec4"," a_position;","attribute vec2"," a_texCoord;","uniform mat4"," u_projection;","uniform mat4"," u_transform;","uniform mat3"," u_texTransform;","varying vec2"," v_texCoord;","void main(){"," vec4 pos = u_projection* u_transform* a_position;"," gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w);"," v_texCoord = ( u_texTransform* vec3( a_texCoord.st, 1 )).xy;","}"].join(''),["#ifdef GL_ES\n","precision highp float;\n","#endif\n","uniform sampler2D u_tex;","uniform mat4 u_colorTransform;","uniform float u_alpha;","varying vec2 v_texCoord;","void main(void){"," vec4 color = texture2D( u_tex, v_texCoord );"," vec4 colorAdj = u_colorTransform* vec4(0.0,0.0,0.0,1.0);"," color.r *= colorAdj.r;"," color.g *= colorAdj.g;"," color.b *= colorAdj.b;"," color.a *= u_alpha;"," gl_FragColor = color;","}"].join(''));
});
gl.shader.waveProgramObject = (function gl$shader$waveProgramObject(gl__$1){
return gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),["attribute vec4 position;","attribute vec4 inputTextureCoordinate;","varying vec2 textureCoordinate;","void main(){","gl_Position = position;","textureCoordinate = inputTextureCoordinate.xy;","}"].join(''),["#ifdef GL_ES\n","precision highp float;\n","#endif\n","varying highp vec2 textureCoordinate;","uniform sampler2D inputImageTexture;","uniform float normalizedPhase;","uniform vec2 mouse;","float m_pi = 3.14159265358979323846;","void main() {","vec4 color;","float x = textureCoordinate.x - mouse.x;","float y = textureCoordinate.y - mouse.y;","float dist = sqrt(x*x + y*y);","float delt = 0.004 / dist * sin(dist * dist * m_pi / 0.06 + normalizedPhase * 2.0 * m_pi);","gl_FragColor = texture2D(inputImageTexture, textureCoordinate + vec2(x / dist * delt, y / dist * delt));","}"].join(''));
});

//# sourceMappingURL=shader.js.map
