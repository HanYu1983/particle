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
var G__8857_8858 = gl__$1;
G__8857_8858.attachShader(p,vs);

G__8857_8858.attachShader(p,fs);

G__8857_8858.linkProgram(p);


if(cljs.core.truth_(gl__$1.getProgramParameter(p,gl__$1.LINK_STATUS))){
return p;
} else {
return console.log("Could not initialise shaders");
}
});
gl.shader.closeAttrsUnifs = (function gl$shader$closeAttrsUnifs(gl__$1,p__8859){
var map__8860 = p__8859;
var map__8860__$1 = ((((!((map__8860 == null)))?(((((map__8860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8860):map__8860);
var info = map__8860__$1;
var attrs = cljs.core.get.call(null,map__8860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var unifs = cljs.core.get.call(null,map__8860__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));
var seq__8862_8872 = cljs.core.seq.call(null,attrs);
var chunk__8863_8873 = null;
var count__8864_8874 = (0);
var i__8865_8875 = (0);
while(true){
if((i__8865_8875 < count__8864_8874)){
var vec__8866_8876 = cljs.core._nth.call(null,chunk__8863_8873,i__8865_8875);
var n_8877 = cljs.core.nth.call(null,vec__8866_8876,(0),null);
var loc_8878 = cljs.core.nth.call(null,vec__8866_8876,(1),null);
gl__$1.disableVertexAttribArray(loc_8878);


var G__8879 = seq__8862_8872;
var G__8880 = chunk__8863_8873;
var G__8881 = count__8864_8874;
var G__8882 = (i__8865_8875 + (1));
seq__8862_8872 = G__8879;
chunk__8863_8873 = G__8880;
count__8864_8874 = G__8881;
i__8865_8875 = G__8882;
continue;
} else {
var temp__5457__auto___8883 = cljs.core.seq.call(null,seq__8862_8872);
if(temp__5457__auto___8883){
var seq__8862_8884__$1 = temp__5457__auto___8883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8862_8884__$1)){
var c__4319__auto___8885 = cljs.core.chunk_first.call(null,seq__8862_8884__$1);
var G__8886 = cljs.core.chunk_rest.call(null,seq__8862_8884__$1);
var G__8887 = c__4319__auto___8885;
var G__8888 = cljs.core.count.call(null,c__4319__auto___8885);
var G__8889 = (0);
seq__8862_8872 = G__8886;
chunk__8863_8873 = G__8887;
count__8864_8874 = G__8888;
i__8865_8875 = G__8889;
continue;
} else {
var vec__8869_8890 = cljs.core.first.call(null,seq__8862_8884__$1);
var n_8891 = cljs.core.nth.call(null,vec__8869_8890,(0),null);
var loc_8892 = cljs.core.nth.call(null,vec__8869_8890,(1),null);
gl__$1.disableVertexAttribArray(loc_8892);


var G__8893 = cljs.core.next.call(null,seq__8862_8884__$1);
var G__8894 = null;
var G__8895 = (0);
var G__8896 = (0);
seq__8862_8872 = G__8893;
chunk__8863_8873 = G__8894;
count__8864_8874 = G__8895;
i__8865_8875 = G__8896;
continue;
}
} else {
}
}
break;
}

return info;
});
gl.shader.openAttrsUnifs = (function gl$shader$openAttrsUnifs(gl__$1,p__8897){
var map__8898 = p__8897;
var map__8898__$1 = ((((!((map__8898 == null)))?(((((map__8898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8898):map__8898);
var info = map__8898__$1;
var p = cljs.core.get.call(null,map__8898__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attrs = cljs.core.get.call(null,map__8898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var unifs = cljs.core.get.call(null,map__8898__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433));
var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__8898,map__8898__$1,info,p,attrs,unifs){
return (function (n){
var loc = gl__$1.getAttribLocation(p,cljs.core.name.call(null,n));
gl__$1.enableVertexAttribArray(loc);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,loc], null);
});})(map__8898,map__8898__$1,info,p,attrs,unifs))
,attrs));
var unifs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs__$1,map__8898,map__8898__$1,info,p,attrs,unifs){
return (function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,gl__$1.getUniformLocation(p,cljs.core.name.call(null,n))], null);
});})(attrs__$1,map__8898,map__8898__$1,info,p,attrs,unifs))
,unifs));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),p,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs__$1], null);
});
gl.shader.uniform = (function gl$shader$uniform(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8925 = arguments.length;
var i__4500__auto___8926 = (0);
while(true){
if((i__4500__auto___8926 < len__4499__auto___8925)){
args__4502__auto__.push((arguments[i__4500__auto___8926]));

var G__8927 = (i__4500__auto___8926 + (1));
i__4500__auto___8926 = G__8927;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return gl.shader.uniform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

gl.shader.uniform.cljs$core$IFn$_invoke$arity$variadic = (function (gl__$1,pobj,unifs){
var seq__8903 = cljs.core.seq.call(null,unifs);
var chunk__8904 = null;
var count__8905 = (0);
var i__8906 = (0);
while(true){
if((i__8906 < count__8905)){
var vec__8907 = cljs.core._nth.call(null,chunk__8904,i__8906);
var n = cljs.core.nth.call(null,vec__8907,(0),null);
var type = cljs.core.nth.call(null,vec__8907,(1),null);
var v = cljs.core.nth.call(null,vec__8907,(2),null);
var pred__8910_8928 = cljs.core._EQ_;
var expr__8911_8929 = type;
if(cljs.core.truth_(pred__8910_8928.call(null,"s2d",expr__8911_8929))){
var vec__8913_8930 = v;
var tex_8931 = cljs.core.nth.call(null,vec__8913_8930,(0),null);
var channel_8932 = cljs.core.nth.call(null,vec__8913_8930,(1),null);
gl.texture.bind.call(null,gl__$1,tex_8931,channel_8932,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else {
if(cljs.core.truth_(pred__8910_8928.call(null,"1f",expr__8911_8929))){
gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else {
if(cljs.core.truth_(pred__8910_8928.call(null,"2f",expr__8911_8929))){
gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else {
if(cljs.core.truth_(pred__8910_8928.call(null,"m3fv",expr__8911_8929))){
gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
if(cljs.core.truth_(pred__8910_8928.call(null,"m4fv",expr__8911_8929))){
gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8911_8929)].join('')));
}
}
}
}
}


var G__8933 = seq__8903;
var G__8934 = chunk__8904;
var G__8935 = count__8905;
var G__8936 = (i__8906 + (1));
seq__8903 = G__8933;
chunk__8904 = G__8934;
count__8905 = G__8935;
i__8906 = G__8936;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8903);
if(temp__5457__auto__){
var seq__8903__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8903__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8903__$1);
var G__8937 = cljs.core.chunk_rest.call(null,seq__8903__$1);
var G__8938 = c__4319__auto__;
var G__8939 = cljs.core.count.call(null,c__4319__auto__);
var G__8940 = (0);
seq__8903 = G__8937;
chunk__8904 = G__8938;
count__8905 = G__8939;
i__8906 = G__8940;
continue;
} else {
var vec__8916 = cljs.core.first.call(null,seq__8903__$1);
var n = cljs.core.nth.call(null,vec__8916,(0),null);
var type = cljs.core.nth.call(null,vec__8916,(1),null);
var v = cljs.core.nth.call(null,vec__8916,(2),null);
var pred__8919_8941 = cljs.core._EQ_;
var expr__8920_8942 = type;
if(cljs.core.truth_(pred__8919_8941.call(null,"s2d",expr__8920_8942))){
var vec__8922_8943 = v;
var tex_8944 = cljs.core.nth.call(null,vec__8922_8943,(0),null);
var channel_8945 = cljs.core.nth.call(null,vec__8922_8943,(1),null);
gl.texture.bind.call(null,gl__$1,tex_8944,channel_8945,cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)));
} else {
if(cljs.core.truth_(pred__8919_8941.call(null,"1f",expr__8920_8942))){
gl__$1.uniform1f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),v);
} else {
if(cljs.core.truth_(pred__8919_8941.call(null,"2f",expr__8920_8942))){
gl__$1.uniform2f(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),(v[(0)]),(v[(1)]));
} else {
if(cljs.core.truth_(pred__8919_8941.call(null,"m3fv",expr__8920_8942))){
gl__$1.uniformMatrix3fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
if(cljs.core.truth_(pred__8919_8941.call(null,"m4fv",expr__8920_8942))){
gl__$1.uniformMatrix4fv(cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unifs","unifs",-1297600433),n], null)),false,v);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8920_8942)].join('')));
}
}
}
}
}


var G__8946 = cljs.core.next.call(null,seq__8903__$1);
var G__8947 = null;
var G__8948 = (0);
var G__8949 = (0);
seq__8903 = G__8946;
chunk__8904 = G__8947;
count__8905 = G__8948;
i__8906 = G__8949;
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
gl.shader.uniform.cljs$lang$applyTo = (function (seq8900){
var G__8901 = cljs.core.first.call(null,seq8900);
var seq8900__$1 = cljs.core.next.call(null,seq8900);
var G__8902 = cljs.core.first.call(null,seq8900__$1);
var seq8900__$2 = cljs.core.next.call(null,seq8900__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8901,G__8902,seq8900__$2);
});

gl.shader.programObject = (function gl$shader$programObject(gl__$1,attrs,unifs,vs,fs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"unifs","unifs",-1297600433),unifs,new cljs.core.Keyword(null,"program","program",781564284),gl.shader.program.call(null,gl__$1,gl.shader.shader.call(null,gl__$1,gl__$1.VERTEX_SHADER,vs),gl.shader.shader.call(null,gl__$1,gl__$1.FRAGMENT_SHADER,fs))], null);
});
gl.shader.use = (function gl$shader$use(gl__$1,p__8950,draw_fn){
var map__8951 = p__8950;
var map__8951__$1 = ((((!((map__8951 == null)))?(((((map__8951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8951):map__8951);
var pobj = map__8951__$1;
var program = cljs.core.get.call(null,map__8951__$1,new cljs.core.Keyword(null,"program","program",781564284));
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
