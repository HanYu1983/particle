// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.draw');
goog.require('cljs.core');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('tool.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('tool.particle');
goog.require('gl.mesh');
goog.require('gl.util');
app.particle.draw.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__50171){var map__50172 = p__50171;var map__50172__$1 = ((cljs.core.seq_QMARK_.call(null,map__50172))?cljs.core.apply.call(null,cljs.core.hash_map,map__50172):map__50172);var ctx = map__50172__$1;var map__50173 = cljs.core.get.call(null,map__50172__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__50173__$1 = ((cljs.core.seq_QMARK_.call(null,map__50173))?cljs.core.apply.call(null,cljs.core.hash_map,map__50173):map__50173);var ps = cljs.core.get.call(null,map__50173__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__50174_50189 = canvas_ctx;(G__50174_50189["fillStyle"] = "white");
G__50174_50189.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__50174_50189["fillStyle"] = "red");
G__50174_50189.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__50175_50190 = cljs.core.seq.call(null,ps);var chunk__50176_50191 = null;var count__50177_50192 = (0);var i__50178_50193 = (0);while(true){
if((i__50178_50193 < count__50177_50192))
{var map__50179_50194 = cljs.core._nth.call(null,chunk__50176_50191,i__50178_50193);var map__50179_50195__$1 = ((cljs.core.seq_QMARK_.call(null,map__50179_50194))?cljs.core.apply.call(null,cljs.core.hash_map,map__50179_50194):map__50179_50194);var p_50196 = map__50179_50195__$1;var vec__50180_50197 = cljs.core.get.call(null,map__50179_50195__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_50198 = cljs.core.nth.call(null,vec__50180_50197,(0),null);var y_50199 = cljs.core.nth.call(null,vec__50180_50197,(1),null);var rot_50200 = cljs.core.nth.call(null,vec__50180_50197,(2),null);var vec__50181_50201 = cljs.core.get.call(null,map__50179_50195__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_50202 = cljs.core.nth.call(null,vec__50181_50201,(0),null);var ys_50203 = cljs.core.nth.call(null,vec__50181_50201,(1),null);var vec__50182_50204 = cljs.core.get.call(null,map__50179_50195__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_50205 = cljs.core.nth.call(null,vec__50182_50204,(0),null);var g_50206 = cljs.core.nth.call(null,vec__50182_50204,(1),null);var b_50207 = cljs.core.nth.call(null,vec__50182_50204,(2),null);var a_50208 = cljs.core.nth.call(null,vec__50182_50204,(3),null);var G__50183_50209 = canvas_ctx;G__50183_50209.save();
G__50183_50209.translate(x_50198,y_50199);
G__50183_50209.rotate(rot_50200);
(G__50183_50209["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_50205 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_50206 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_50207 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_50208)+")"));
G__50183_50209.fillRect((- (xs_50202 / (2))),(- (ys_50203 / (2))),xs_50202,ys_50203);
G__50183_50209.restore();
{
var G__50210 = seq__50175_50190;
var G__50211 = chunk__50176_50191;
var G__50212 = count__50177_50192;
var G__50213 = (i__50178_50193 + (1));
seq__50175_50190 = G__50210;
chunk__50176_50191 = G__50211;
count__50177_50192 = G__50212;
i__50178_50193 = G__50213;
continue;
}
} else
{var temp__4126__auto___50214 = cljs.core.seq.call(null,seq__50175_50190);if(temp__4126__auto___50214)
{var seq__50175_50215__$1 = temp__4126__auto___50214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50175_50215__$1))
{var c__4307__auto___50216 = cljs.core.chunk_first.call(null,seq__50175_50215__$1);{
var G__50217 = cljs.core.chunk_rest.call(null,seq__50175_50215__$1);
var G__50218 = c__4307__auto___50216;
var G__50219 = cljs.core.count.call(null,c__4307__auto___50216);
var G__50220 = (0);
seq__50175_50190 = G__50217;
chunk__50176_50191 = G__50218;
count__50177_50192 = G__50219;
i__50178_50193 = G__50220;
continue;
}
} else
{var map__50184_50221 = cljs.core.first.call(null,seq__50175_50215__$1);var map__50184_50222__$1 = ((cljs.core.seq_QMARK_.call(null,map__50184_50221))?cljs.core.apply.call(null,cljs.core.hash_map,map__50184_50221):map__50184_50221);var p_50223 = map__50184_50222__$1;var vec__50185_50224 = cljs.core.get.call(null,map__50184_50222__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_50225 = cljs.core.nth.call(null,vec__50185_50224,(0),null);var y_50226 = cljs.core.nth.call(null,vec__50185_50224,(1),null);var rot_50227 = cljs.core.nth.call(null,vec__50185_50224,(2),null);var vec__50186_50228 = cljs.core.get.call(null,map__50184_50222__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_50229 = cljs.core.nth.call(null,vec__50186_50228,(0),null);var ys_50230 = cljs.core.nth.call(null,vec__50186_50228,(1),null);var vec__50187_50231 = cljs.core.get.call(null,map__50184_50222__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_50232 = cljs.core.nth.call(null,vec__50187_50231,(0),null);var g_50233 = cljs.core.nth.call(null,vec__50187_50231,(1),null);var b_50234 = cljs.core.nth.call(null,vec__50187_50231,(2),null);var a_50235 = cljs.core.nth.call(null,vec__50187_50231,(3),null);var G__50188_50236 = canvas_ctx;G__50188_50236.save();
G__50188_50236.translate(x_50225,y_50226);
G__50188_50236.rotate(rot_50227);
(G__50188_50236["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_50232 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_50233 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_50234 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_50235)+")"));
G__50188_50236.fillRect((- (xs_50229 / (2))),(- (ys_50230 / (2))),xs_50229,ys_50230);
G__50188_50236.restore();
{
var G__50237 = cljs.core.next.call(null,seq__50175_50215__$1);
var G__50238 = null;
var G__50239 = (0);
var G__50240 = (0);
seq__50175_50190 = G__50237;
chunk__50176_50191 = G__50238;
count__50177_50192 = G__50239;
i__50178_50193 = G__50240;
continue;
}
}
} else
{}
}
break;
}
return ctx;
});
;})(canvas_dom,canvas_ctx))
});
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__50276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__50276,(0),null);var ch = cljs.core.nth.call(null,vec__50276,(1),null);var proj = (function (){var G__50277 = (new THREE.Matrix4());G__50277.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__50277;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__50276,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__50278){var map__50279 = p__50278;var map__50279__$1 = ((cljs.core.seq_QMARK_.call(null,map__50279))?cljs.core.apply.call(null,cljs.core.hash_map,map__50279):map__50279);var ctx = map__50279__$1;var vec__50280 = cljs.core.get.call(null,map__50279__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__50280,(0),null);var cy = cljs.core.nth.call(null,vec__50280,(1),null);var vec__50281 = cljs.core.get.call(null,map__50279__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__50281,(0),null);var bg = cljs.core.nth.call(null,vec__50281,(1),null);var bb = cljs.core.nth.call(null,vec__50281,(2),null);var map__50282 = cljs.core.get.call(null,map__50279__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__50282__$1 = ((cljs.core.seq_QMARK_.call(null,map__50282))?cljs.core.apply.call(null,cljs.core.hash_map,map__50282):map__50282);var ps = cljs.core.get.call(null,map__50282__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(function (){var or__3551__auto__ = bg;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(function (){var or__3551__auto__ = bb;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__50279,map__50279__$1,ctx,vec__50280,cx,cy,vec__50281,br,bg,bb,map__50282,map__50282__$1,ps,canvas_dom,mesh,sprite_shader,vec__50276,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__50283 = cljs.core.seq.call(null,ps);var chunk__50284 = null;var count__50285 = (0);var i__50286 = (0);while(true){
if((i__50286 < count__50285))
{var map__50287 = cljs.core._nth.call(null,chunk__50284,i__50286);var map__50287__$1 = ((cljs.core.seq_QMARK_.call(null,map__50287))?cljs.core.apply.call(null,cljs.core.hash_map,map__50287):map__50287);var p = map__50287__$1;var vec__50288 = cljs.core.get.call(null,map__50287__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__50288,(0),null);var y = cljs.core.nth.call(null,vec__50288,(1),null);var rot = cljs.core.nth.call(null,vec__50288,(2),null);var vec__50289 = cljs.core.get.call(null,map__50287__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__50289,(0),null);var ys = cljs.core.nth.call(null,vec__50289,(1),null);var vec__50290 = cljs.core.get.call(null,map__50287__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__50290,(0),null);var g = cljs.core.nth.call(null,vec__50290,(1),null);var b = cljs.core.nth.call(null,vec__50290,(2),null);var a = cljs.core.nth.call(null,vec__50290,(3),null);var tex = cljs.core.get.call(null,map__50287__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__50287__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_50311 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__50291_50312 = rotMat;G__50291_50312.makeRotationZ(rot);
var G__50292_50313 = scaleMat;G__50292_50313.makeScale(xs,ys,(1));
var G__50293_50314 = tras;G__50293_50314.makeTranslation((cx + x),(cy + y),(0));
G__50293_50314.multiply(rotMat);
G__50293_50314.multiply(scaleMat);
var G__50294_50315 = colorTx;G__50294_50315.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__50295 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__50295__$1 = (cljs.core.truth_(texObj_50311)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_50311,(0)], null)], null),G__50295):G__50295);return G__50295__$1;
})());
if(cljs.core.truth_(texObj_50311))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__50296_50316 = cljs.core._EQ_;var expr__50297_50317 = blending;if(cljs.core.truth_(pred__50296_50316.call(null,"normal",expr__50297_50317)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__50296_50316.call(null,"add",expr__50297_50317)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__50318 = seq__50283;
var G__50319 = chunk__50284;
var G__50320 = count__50285;
var G__50321 = (i__50286 + (1));
seq__50283 = G__50318;
chunk__50284 = G__50319;
count__50285 = G__50320;
i__50286 = G__50321;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50283);if(temp__4126__auto__)
{var seq__50283__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50283__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__50283__$1);{
var G__50322 = cljs.core.chunk_rest.call(null,seq__50283__$1);
var G__50323 = c__4307__auto__;
var G__50324 = cljs.core.count.call(null,c__4307__auto__);
var G__50325 = (0);
seq__50283 = G__50322;
chunk__50284 = G__50323;
count__50285 = G__50324;
i__50286 = G__50325;
continue;
}
} else
{var map__50299 = cljs.core.first.call(null,seq__50283__$1);var map__50299__$1 = ((cljs.core.seq_QMARK_.call(null,map__50299))?cljs.core.apply.call(null,cljs.core.hash_map,map__50299):map__50299);var p = map__50299__$1;var vec__50300 = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__50300,(0),null);var y = cljs.core.nth.call(null,vec__50300,(1),null);var rot = cljs.core.nth.call(null,vec__50300,(2),null);var vec__50301 = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__50301,(0),null);var ys = cljs.core.nth.call(null,vec__50301,(1),null);var vec__50302 = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__50302,(0),null);var g = cljs.core.nth.call(null,vec__50302,(1),null);var b = cljs.core.nth.call(null,vec__50302,(2),null);var a = cljs.core.nth.call(null,vec__50302,(3),null);var tex = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_50326 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__50303_50327 = rotMat;G__50303_50327.makeRotationZ(rot);
var G__50304_50328 = scaleMat;G__50304_50328.makeScale(xs,ys,(1));
var G__50305_50329 = tras;G__50305_50329.makeTranslation((cx + x),(cy + y),(0));
G__50305_50329.multiply(rotMat);
G__50305_50329.multiply(scaleMat);
var G__50306_50330 = colorTx;G__50306_50330.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__50307 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__50307__$1 = (cljs.core.truth_(texObj_50326)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_50326,(0)], null)], null),G__50307):G__50307);return G__50307__$1;
})());
if(cljs.core.truth_(texObj_50326))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__50308_50331 = cljs.core._EQ_;var expr__50309_50332 = blending;if(cljs.core.truth_(pred__50308_50331.call(null,"normal",expr__50309_50332)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__50308_50331.call(null,"add",expr__50309_50332)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__50333 = cljs.core.next.call(null,seq__50283__$1);
var G__50334 = null;
var G__50335 = (0);
var G__50336 = (0);
seq__50283 = G__50333;
chunk__50284 = G__50334;
count__50285 = G__50335;
i__50286 = G__50336;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__50279,map__50279__$1,ctx,vec__50280,cx,cy,vec__50281,br,bg,bb,map__50282,map__50282__$1,ps,canvas_dom,mesh,sprite_shader,vec__50276,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__50276,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
