// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.particle.draw');
goog.require('cljs.core');
goog.require('gl.util');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.shader');
goog.require('tool.particle');
app.particle.draw.draw2D = (function app$particle$draw$draw2D(canvas){
var canvas_dom = (canvas[(0)]);
var canvas_ctx = canvas_dom.getContext("2d");
return ((function (canvas_dom,canvas_ctx){
return (function (p__9044){
var map__9045 = p__9044;
var map__9045__$1 = ((((!((map__9045 == null)))?(((((map__9045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9045):map__9045);
var ctx = map__9045__$1;
var map__9046 = cljs.core.get.call(null,map__9045__$1,new cljs.core.Keyword(null,"part","part",77757738));
var map__9046__$1 = ((((!((map__9046 == null)))?(((((map__9046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9046):map__9046);
var ps = cljs.core.get.call(null,map__9046__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var G__9049_9078 = canvas_ctx;
(G__9049_9078["fillStyle"] = "white");

G__9049_9078.fillRect((0),(0),canvas_dom.width,canvas_dom.height);

(G__9049_9078["fillStyle"] = "red");

G__9049_9078.fillText(["count:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))].join(''),(50),(50));


var seq__9050_9079 = cljs.core.seq.call(null,ps);
var chunk__9051_9080 = null;
var count__9052_9081 = (0);
var i__9053_9082 = (0);
while(true){
if((i__9053_9082 < count__9052_9081)){
var map__9054_9083 = cljs.core._nth.call(null,chunk__9051_9080,i__9053_9082);
var map__9054_9084__$1 = ((((!((map__9054_9083 == null)))?(((((map__9054_9083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9054_9083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9054_9083):map__9054_9083);
var p_9085 = map__9054_9084__$1;
var vec__9055_9086 = cljs.core.get.call(null,map__9054_9084__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x_9087 = cljs.core.nth.call(null,vec__9055_9086,(0),null);
var y_9088 = cljs.core.nth.call(null,vec__9055_9086,(1),null);
var rot_9089 = cljs.core.nth.call(null,vec__9055_9086,(2),null);
var vec__9058_9090 = cljs.core.get.call(null,map__9054_9084__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs_9091 = cljs.core.nth.call(null,vec__9058_9090,(0),null);
var ys_9092 = cljs.core.nth.call(null,vec__9058_9090,(1),null);
var vec__9061_9093 = cljs.core.get.call(null,map__9054_9084__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r_9094 = cljs.core.nth.call(null,vec__9061_9093,(0),null);
var g_9095 = cljs.core.nth.call(null,vec__9061_9093,(1),null);
var b_9096 = cljs.core.nth.call(null,vec__9061_9093,(2),null);
var a_9097 = cljs.core.nth.call(null,vec__9061_9093,(3),null);
var G__9065_9098 = canvas_ctx;
G__9065_9098.save();

G__9065_9098.translate(x_9087,y_9088);

G__9065_9098.rotate(rot_9089);

(G__9065_9098["fillStyle"] = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9094 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9095 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9096 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9097),")"].join(''));

G__9065_9098.fillRect((- (xs_9091 / (2))),(- (ys_9092 / (2))),xs_9091,ys_9092);

G__9065_9098.restore();



var G__9099 = seq__9050_9079;
var G__9100 = chunk__9051_9080;
var G__9101 = count__9052_9081;
var G__9102 = (i__9053_9082 + (1));
seq__9050_9079 = G__9099;
chunk__9051_9080 = G__9100;
count__9052_9081 = G__9101;
i__9053_9082 = G__9102;
continue;
} else {
var temp__5457__auto___9103 = cljs.core.seq.call(null,seq__9050_9079);
if(temp__5457__auto___9103){
var seq__9050_9104__$1 = temp__5457__auto___9103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9050_9104__$1)){
var c__4319__auto___9105 = cljs.core.chunk_first.call(null,seq__9050_9104__$1);
var G__9106 = cljs.core.chunk_rest.call(null,seq__9050_9104__$1);
var G__9107 = c__4319__auto___9105;
var G__9108 = cljs.core.count.call(null,c__4319__auto___9105);
var G__9109 = (0);
seq__9050_9079 = G__9106;
chunk__9051_9080 = G__9107;
count__9052_9081 = G__9108;
i__9053_9082 = G__9109;
continue;
} else {
var map__9066_9110 = cljs.core.first.call(null,seq__9050_9104__$1);
var map__9066_9111__$1 = ((((!((map__9066_9110 == null)))?(((((map__9066_9110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9066_9110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9066_9110):map__9066_9110);
var p_9112 = map__9066_9111__$1;
var vec__9067_9113 = cljs.core.get.call(null,map__9066_9111__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x_9114 = cljs.core.nth.call(null,vec__9067_9113,(0),null);
var y_9115 = cljs.core.nth.call(null,vec__9067_9113,(1),null);
var rot_9116 = cljs.core.nth.call(null,vec__9067_9113,(2),null);
var vec__9070_9117 = cljs.core.get.call(null,map__9066_9111__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs_9118 = cljs.core.nth.call(null,vec__9070_9117,(0),null);
var ys_9119 = cljs.core.nth.call(null,vec__9070_9117,(1),null);
var vec__9073_9120 = cljs.core.get.call(null,map__9066_9111__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r_9121 = cljs.core.nth.call(null,vec__9073_9120,(0),null);
var g_9122 = cljs.core.nth.call(null,vec__9073_9120,(1),null);
var b_9123 = cljs.core.nth.call(null,vec__9073_9120,(2),null);
var a_9124 = cljs.core.nth.call(null,vec__9073_9120,(3),null);
var G__9077_9125 = canvas_ctx;
G__9077_9125.save();

G__9077_9125.translate(x_9114,y_9115);

G__9077_9125.rotate(rot_9116);

(G__9077_9125["fillStyle"] = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9121 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9122 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9123 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9124),")"].join(''));

G__9077_9125.fillRect((- (xs_9118 / (2))),(- (ys_9119 / (2))),xs_9118,ys_9119);

G__9077_9125.restore();



var G__9126 = cljs.core.next.call(null,seq__9050_9104__$1);
var G__9127 = null;
var G__9128 = (0);
var G__9129 = (0);
seq__9050_9079 = G__9126;
chunk__9051_9080 = G__9127;
count__9052_9081 = G__9128;
i__9053_9082 = G__9129;
continue;
}
} else {
}
}
break;
}

return ctx;
});
;})(canvas_dom,canvas_ctx))
});
app.particle.draw.draw3D = (function app$particle$draw$draw3D(canvas,gl__$1){
var canvas_dom = canvas;
var mesh = gl.mesh.plain.call(null,gl__$1);
var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);
var vec__9130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);
var cw = cljs.core.nth.call(null,vec__9130,(0),null);
var ch = cljs.core.nth.call(null,vec__9130,(1),null);
var proj = (function (){var G__9133 = (new THREE.Matrix4());
G__9133.makeOrthographic((0),cw,ch,(0),(1),(-1));

return G__9133;
})();
var tras = (new THREE.Matrix4());
var rotMat = (new THREE.Matrix4());
var scaleMat = (new THREE.Matrix4());
var texTx = (new THREE.Matrix3());
var colorTx = (new THREE.Matrix4());
gl__$1.viewport((0),(0),cw,ch);

return ((function (canvas_dom,mesh,sprite_shader,vec__9130,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__9134){
var map__9135 = p__9134;
var map__9135__$1 = ((((!((map__9135 == null)))?(((((map__9135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9135):map__9135);
var ctx = map__9135__$1;
var vec__9136 = cljs.core.get.call(null,map__9135__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));
var cx = cljs.core.nth.call(null,vec__9136,(0),null);
var cy = cljs.core.nth.call(null,vec__9136,(1),null);
var vec__9139 = cljs.core.get.call(null,map__9135__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));
var br = cljs.core.nth.call(null,vec__9139,(0),null);
var bg = cljs.core.nth.call(null,vec__9139,(1),null);
var bb = cljs.core.nth.call(null,vec__9139,(2),null);
var map__9142 = cljs.core.get.call(null,map__9135__$1,new cljs.core.Keyword(null,"part","part",77757738));
var map__9142__$1 = ((((!((map__9142 == null)))?(((((map__9142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9142):map__9142);
var ps = cljs.core.get.call(null,map__9142__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
gl__$1.clearColor((function (){var or__3922__auto__ = br;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),(function (){var or__3922__auto__ = bg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),(function (){var or__3922__auto__ = bb;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),(1));

gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);

gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__9135,map__9135__$1,ctx,vec__9136,cx,cy,vec__9139,br,bg,bb,map__9142,map__9142__$1,ps,canvas_dom,mesh,sprite_shader,vec__9130,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));

gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));

var seq__9145 = cljs.core.seq.call(null,ps);
var chunk__9146 = null;
var count__9147 = (0);
var i__9148 = (0);
while(true){
if((i__9148 < count__9147)){
var map__9149 = cljs.core._nth.call(null,chunk__9146,i__9148);
var map__9149__$1 = ((((!((map__9149 == null)))?(((((map__9149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9149):map__9149);
var p = map__9149__$1;
var vec__9150 = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__9150,(0),null);
var y = cljs.core.nth.call(null,vec__9150,(1),null);
var rot = cljs.core.nth.call(null,vec__9150,(2),null);
var vec__9153 = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs = cljs.core.nth.call(null,vec__9153,(0),null);
var ys = cljs.core.nth.call(null,vec__9153,(1),null);
var vec__9156 = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r = cljs.core.nth.call(null,vec__9156,(0),null);
var g = cljs.core.nth.call(null,vec__9156,(1),null);
var b = cljs.core.nth.call(null,vec__9156,(2),null);
var a = cljs.core.nth.call(null,vec__9156,(3),null);
var tex = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var blending = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"blending","blending",31165821));
var texObj_9187 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));
var G__9160_9188 = rotMat;
G__9160_9188.makeRotationZ(rot);


var G__9161_9189 = scaleMat;
G__9161_9189.makeScale(xs,ys,(1));


var G__9162_9190 = tras;
G__9162_9190.makeTranslation((cx + x),(cy + y),(0));

G__9162_9190.multiply(rotMat);

G__9162_9190.multiply(scaleMat);


var G__9163_9191 = colorTx;
G__9163_9191.makeTranslation(r,g,b);


cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__9164 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
if(cljs.core.truth_(texObj_9187)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_9187,(0)], null)], null),G__9164);
} else {
return G__9164;
}
})());

if(cljs.core.truth_(texObj_9187)){
} else {
gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}

if(cljs.core.truth_(blending)){
var pred__9165_9192 = cljs.core._EQ_;
var expr__9166_9193 = blending;
if(cljs.core.truth_(pred__9165_9192.call(null,"normal",expr__9166_9193))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else {
if(cljs.core.truth_(pred__9165_9192.call(null,"add",expr__9166_9193))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else {
gl__$1.disable(gl__$1.BLEND);
}
}
} else {
}

gl.mesh.draw.call(null,gl__$1,mesh,null);


var G__9194 = seq__9145;
var G__9195 = chunk__9146;
var G__9196 = count__9147;
var G__9197 = (i__9148 + (1));
seq__9145 = G__9194;
chunk__9146 = G__9195;
count__9147 = G__9196;
i__9148 = G__9197;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9145);
if(temp__5457__auto__){
var seq__9145__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9145__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9145__$1);
var G__9198 = cljs.core.chunk_rest.call(null,seq__9145__$1);
var G__9199 = c__4319__auto__;
var G__9200 = cljs.core.count.call(null,c__4319__auto__);
var G__9201 = (0);
seq__9145 = G__9198;
chunk__9146 = G__9199;
count__9147 = G__9200;
i__9148 = G__9201;
continue;
} else {
var map__9168 = cljs.core.first.call(null,seq__9145__$1);
var map__9168__$1 = ((((!((map__9168 == null)))?(((((map__9168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9168):map__9168);
var p = map__9168__$1;
var vec__9169 = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__9169,(0),null);
var y = cljs.core.nth.call(null,vec__9169,(1),null);
var rot = cljs.core.nth.call(null,vec__9169,(2),null);
var vec__9172 = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs = cljs.core.nth.call(null,vec__9172,(0),null);
var ys = cljs.core.nth.call(null,vec__9172,(1),null);
var vec__9175 = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r = cljs.core.nth.call(null,vec__9175,(0),null);
var g = cljs.core.nth.call(null,vec__9175,(1),null);
var b = cljs.core.nth.call(null,vec__9175,(2),null);
var a = cljs.core.nth.call(null,vec__9175,(3),null);
var tex = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var blending = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"blending","blending",31165821));
var texObj_9202 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));
var G__9179_9203 = rotMat;
G__9179_9203.makeRotationZ(rot);


var G__9180_9204 = scaleMat;
G__9180_9204.makeScale(xs,ys,(1));


var G__9181_9205 = tras;
G__9181_9205.makeTranslation((cx + x),(cy + y),(0));

G__9181_9205.multiply(rotMat);

G__9181_9205.multiply(scaleMat);


var G__9182_9206 = colorTx;
G__9182_9206.makeTranslation(r,g,b);


cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__9183 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
if(cljs.core.truth_(texObj_9202)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_9202,(0)], null)], null),G__9183);
} else {
return G__9183;
}
})());

if(cljs.core.truth_(texObj_9202)){
} else {
gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}

if(cljs.core.truth_(blending)){
var pred__9184_9207 = cljs.core._EQ_;
var expr__9185_9208 = blending;
if(cljs.core.truth_(pred__9184_9207.call(null,"normal",expr__9185_9208))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else {
if(cljs.core.truth_(pred__9184_9207.call(null,"add",expr__9185_9208))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else {
gl__$1.disable(gl__$1.BLEND);
}
}
} else {
}

gl.mesh.draw.call(null,gl__$1,mesh,null);


var G__9209 = cljs.core.next.call(null,seq__9145__$1);
var G__9210 = null;
var G__9211 = (0);
var G__9212 = (0);
seq__9145 = G__9209;
chunk__9146 = G__9210;
count__9147 = G__9211;
i__9148 = G__9212;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__9135,map__9135__$1,ctx,vec__9136,cx,cy,vec__9139,br,bg,bb,map__9142,map__9142__$1,ps,canvas_dom,mesh,sprite_shader,vec__9130,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);

return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__9130,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
app.particle.draw.drawThree = (function app$particle$draw$drawThree(elem){
var useWebgl_QMARK_ = true;
var vec__9213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null);
var w = cljs.core.nth.call(null,vec__9213,(0),null);
var h = cljs.core.nth.call(null,vec__9213,(1),null);
var scene = (new THREE.Scene());
var camera = THREE.OrthographicCamera((w / (-2)),(w / (2)),(h / (2)),(h / (-2)),(-500),(1000));
var renderer = ((useWebgl_QMARK_)?(new THREE.WebGLRenderer((function (){var obj9217 = {"antialias":true};
return obj9217;
})())):(new THREE.CanvasRenderer((function (){var obj9219 = {"antialias":true};
return obj9219;
})())));
var objs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var dirtyTag = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var createObject = ((function (useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag){
return (function (scene__$1,id,part){
var obj = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);
if(cljs.core.not.call(null,obj)){
var mat = (function (){var G__9220 = (new THREE.MeshBasicMaterial());
(G__9220["transparent"] = true);

return G__9220;
})();
var mash = THREE.Mesh((new THREE.PlaneBufferGeometry((1),(1))),mat);
cljs.core.swap_BANG_.call(null,objs,cljs.core.assoc,id,obj);

return scene__$1.add(obj);
} else {
return obj;
}
});})(useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag))
;
var removeObject = ((function (useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject){
return (function (id){
var temp__5455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return scene.remove(obj);
} else {
return null;
}
});})(useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject))
;
var markDirty = ((function (useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject){
return (function (id){
return cljs.core.swap_BANG_.call(null,dirtyTag,cljs.core.assoc,id,false);
});})(useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject))
;
var clearDirtyTag = ((function (useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty){
return (function (f){
return null;
});})(useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty))
;
camera.position.set((0),(0),(200));

renderer.setSize(w,h);

renderer.setClearColor((0),(1));

$(renderer.domElement).appendTo(elem);

return ((function (useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag){
return (function (p__9221){
var map__9222 = p__9221;
var map__9222__$1 = ((((!((map__9222 == null)))?(((((map__9222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9222):map__9222);
var ctx = map__9222__$1;
var vec__9223 = cljs.core.get.call(null,map__9222__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));
var cx = cljs.core.nth.call(null,vec__9223,(0),null);
var cy = cljs.core.nth.call(null,vec__9223,(1),null);
var vec__9226 = cljs.core.get.call(null,map__9222__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));
var br = cljs.core.nth.call(null,vec__9226,(0),null);
var bg = cljs.core.nth.call(null,vec__9226,(1),null);
var bb = cljs.core.nth.call(null,vec__9226,(2),null);
var map__9229 = cljs.core.get.call(null,map__9222__$1,new cljs.core.Keyword(null,"part","part",77757738));
var map__9229__$1 = ((((!((map__9229 == null)))?(((((map__9229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9229):map__9229);
var ps = cljs.core.get.call(null,map__9229__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
return null;
});
;})(useWebgl_QMARK_,vec__9213,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag))
});

//# sourceMappingURL=draw.js.map
