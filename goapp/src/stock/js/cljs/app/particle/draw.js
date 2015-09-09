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
return (function (p__66238){var map__66239 = p__66238;var map__66239__$1 = ((cljs.core.seq_QMARK_.call(null,map__66239))?cljs.core.apply.call(null,cljs.core.hash_map,map__66239):map__66239);var ctx = map__66239__$1;var map__66240 = cljs.core.get.call(null,map__66239__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__66240__$1 = ((cljs.core.seq_QMARK_.call(null,map__66240))?cljs.core.apply.call(null,cljs.core.hash_map,map__66240):map__66240);var ps = cljs.core.get.call(null,map__66240__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__66241_66256 = canvas_ctx;(G__66241_66256["fillStyle"] = "white");
G__66241_66256.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__66241_66256["fillStyle"] = "red");
G__66241_66256.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__66242_66257 = cljs.core.seq.call(null,ps);var chunk__66243_66258 = null;var count__66244_66259 = (0);var i__66245_66260 = (0);while(true){
if((i__66245_66260 < count__66244_66259))
{var map__66246_66261 = cljs.core._nth.call(null,chunk__66243_66258,i__66245_66260);var map__66246_66262__$1 = ((cljs.core.seq_QMARK_.call(null,map__66246_66261))?cljs.core.apply.call(null,cljs.core.hash_map,map__66246_66261):map__66246_66261);var p_66263 = map__66246_66262__$1;var vec__66247_66264 = cljs.core.get.call(null,map__66246_66262__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_66265 = cljs.core.nth.call(null,vec__66247_66264,(0),null);var y_66266 = cljs.core.nth.call(null,vec__66247_66264,(1),null);var rot_66267 = cljs.core.nth.call(null,vec__66247_66264,(2),null);var vec__66248_66268 = cljs.core.get.call(null,map__66246_66262__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_66269 = cljs.core.nth.call(null,vec__66248_66268,(0),null);var ys_66270 = cljs.core.nth.call(null,vec__66248_66268,(1),null);var vec__66249_66271 = cljs.core.get.call(null,map__66246_66262__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_66272 = cljs.core.nth.call(null,vec__66249_66271,(0),null);var g_66273 = cljs.core.nth.call(null,vec__66249_66271,(1),null);var b_66274 = cljs.core.nth.call(null,vec__66249_66271,(2),null);var a_66275 = cljs.core.nth.call(null,vec__66249_66271,(3),null);var G__66250_66276 = canvas_ctx;G__66250_66276.save();
G__66250_66276.translate(x_66265,y_66266);
G__66250_66276.rotate(rot_66267);
(G__66250_66276["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_66272 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_66273 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_66274 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_66275)+")"));
G__66250_66276.fillRect((- (xs_66269 / (2))),(- (ys_66270 / (2))),xs_66269,ys_66270);
G__66250_66276.restore();
{
var G__66277 = seq__66242_66257;
var G__66278 = chunk__66243_66258;
var G__66279 = count__66244_66259;
var G__66280 = (i__66245_66260 + (1));
seq__66242_66257 = G__66277;
chunk__66243_66258 = G__66278;
count__66244_66259 = G__66279;
i__66245_66260 = G__66280;
continue;
}
} else
{var temp__4126__auto___66281 = cljs.core.seq.call(null,seq__66242_66257);if(temp__4126__auto___66281)
{var seq__66242_66282__$1 = temp__4126__auto___66281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66242_66282__$1))
{var c__4307__auto___66283 = cljs.core.chunk_first.call(null,seq__66242_66282__$1);{
var G__66284 = cljs.core.chunk_rest.call(null,seq__66242_66282__$1);
var G__66285 = c__4307__auto___66283;
var G__66286 = cljs.core.count.call(null,c__4307__auto___66283);
var G__66287 = (0);
seq__66242_66257 = G__66284;
chunk__66243_66258 = G__66285;
count__66244_66259 = G__66286;
i__66245_66260 = G__66287;
continue;
}
} else
{var map__66251_66288 = cljs.core.first.call(null,seq__66242_66282__$1);var map__66251_66289__$1 = ((cljs.core.seq_QMARK_.call(null,map__66251_66288))?cljs.core.apply.call(null,cljs.core.hash_map,map__66251_66288):map__66251_66288);var p_66290 = map__66251_66289__$1;var vec__66252_66291 = cljs.core.get.call(null,map__66251_66289__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_66292 = cljs.core.nth.call(null,vec__66252_66291,(0),null);var y_66293 = cljs.core.nth.call(null,vec__66252_66291,(1),null);var rot_66294 = cljs.core.nth.call(null,vec__66252_66291,(2),null);var vec__66253_66295 = cljs.core.get.call(null,map__66251_66289__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_66296 = cljs.core.nth.call(null,vec__66253_66295,(0),null);var ys_66297 = cljs.core.nth.call(null,vec__66253_66295,(1),null);var vec__66254_66298 = cljs.core.get.call(null,map__66251_66289__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_66299 = cljs.core.nth.call(null,vec__66254_66298,(0),null);var g_66300 = cljs.core.nth.call(null,vec__66254_66298,(1),null);var b_66301 = cljs.core.nth.call(null,vec__66254_66298,(2),null);var a_66302 = cljs.core.nth.call(null,vec__66254_66298,(3),null);var G__66255_66303 = canvas_ctx;G__66255_66303.save();
G__66255_66303.translate(x_66292,y_66293);
G__66255_66303.rotate(rot_66294);
(G__66255_66303["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_66299 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_66300 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_66301 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_66302)+")"));
G__66255_66303.fillRect((- (xs_66296 / (2))),(- (ys_66297 / (2))),xs_66296,ys_66297);
G__66255_66303.restore();
{
var G__66304 = cljs.core.next.call(null,seq__66242_66282__$1);
var G__66305 = null;
var G__66306 = (0);
var G__66307 = (0);
seq__66242_66257 = G__66304;
chunk__66243_66258 = G__66305;
count__66244_66259 = G__66306;
i__66245_66260 = G__66307;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__66343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__66343,(0),null);var ch = cljs.core.nth.call(null,vec__66343,(1),null);var proj = (function (){var G__66344 = (new THREE.Matrix4());G__66344.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__66344;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__66343,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__66345){var map__66346 = p__66345;var map__66346__$1 = ((cljs.core.seq_QMARK_.call(null,map__66346))?cljs.core.apply.call(null,cljs.core.hash_map,map__66346):map__66346);var ctx = map__66346__$1;var vec__66347 = cljs.core.get.call(null,map__66346__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__66347,(0),null);var cy = cljs.core.nth.call(null,vec__66347,(1),null);var vec__66348 = cljs.core.get.call(null,map__66346__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__66348,(0),null);var bg = cljs.core.nth.call(null,vec__66348,(1),null);var bb = cljs.core.nth.call(null,vec__66348,(2),null);var map__66349 = cljs.core.get.call(null,map__66346__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__66349__$1 = ((cljs.core.seq_QMARK_.call(null,map__66349))?cljs.core.apply.call(null,cljs.core.hash_map,map__66349):map__66349);var ps = cljs.core.get.call(null,map__66349__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__66346,map__66346__$1,ctx,vec__66347,cx,cy,vec__66348,br,bg,bb,map__66349,map__66349__$1,ps,canvas_dom,mesh,sprite_shader,vec__66343,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__66350 = cljs.core.seq.call(null,ps);var chunk__66351 = null;var count__66352 = (0);var i__66353 = (0);while(true){
if((i__66353 < count__66352))
{var map__66354 = cljs.core._nth.call(null,chunk__66351,i__66353);var map__66354__$1 = ((cljs.core.seq_QMARK_.call(null,map__66354))?cljs.core.apply.call(null,cljs.core.hash_map,map__66354):map__66354);var p = map__66354__$1;var vec__66355 = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__66355,(0),null);var y = cljs.core.nth.call(null,vec__66355,(1),null);var rot = cljs.core.nth.call(null,vec__66355,(2),null);var vec__66356 = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__66356,(0),null);var ys = cljs.core.nth.call(null,vec__66356,(1),null);var vec__66357 = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__66357,(0),null);var g = cljs.core.nth.call(null,vec__66357,(1),null);var b = cljs.core.nth.call(null,vec__66357,(2),null);var a = cljs.core.nth.call(null,vec__66357,(3),null);var tex = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_66378 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__66358_66379 = rotMat;G__66358_66379.makeRotationZ(rot);
var G__66359_66380 = scaleMat;G__66359_66380.makeScale(xs,ys,(1));
var G__66360_66381 = tras;G__66360_66381.makeTranslation((cx + x),(cy + y),(0));
G__66360_66381.multiply(rotMat);
G__66360_66381.multiply(scaleMat);
var G__66361_66382 = colorTx;G__66361_66382.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__66362 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__66362__$1 = (cljs.core.truth_(texObj_66378)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_66378,(0)], null)], null),G__66362):G__66362);return G__66362__$1;
})());
if(cljs.core.truth_(texObj_66378))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__66363_66383 = cljs.core._EQ_;var expr__66364_66384 = blending;if(cljs.core.truth_(pred__66363_66383.call(null,"normal",expr__66364_66384)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__66363_66383.call(null,"add",expr__66364_66384)))
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
var G__66385 = seq__66350;
var G__66386 = chunk__66351;
var G__66387 = count__66352;
var G__66388 = (i__66353 + (1));
seq__66350 = G__66385;
chunk__66351 = G__66386;
count__66352 = G__66387;
i__66353 = G__66388;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__66350);if(temp__4126__auto__)
{var seq__66350__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66350__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__66350__$1);{
var G__66389 = cljs.core.chunk_rest.call(null,seq__66350__$1);
var G__66390 = c__4307__auto__;
var G__66391 = cljs.core.count.call(null,c__4307__auto__);
var G__66392 = (0);
seq__66350 = G__66389;
chunk__66351 = G__66390;
count__66352 = G__66391;
i__66353 = G__66392;
continue;
}
} else
{var map__66366 = cljs.core.first.call(null,seq__66350__$1);var map__66366__$1 = ((cljs.core.seq_QMARK_.call(null,map__66366))?cljs.core.apply.call(null,cljs.core.hash_map,map__66366):map__66366);var p = map__66366__$1;var vec__66367 = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__66367,(0),null);var y = cljs.core.nth.call(null,vec__66367,(1),null);var rot = cljs.core.nth.call(null,vec__66367,(2),null);var vec__66368 = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__66368,(0),null);var ys = cljs.core.nth.call(null,vec__66368,(1),null);var vec__66369 = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__66369,(0),null);var g = cljs.core.nth.call(null,vec__66369,(1),null);var b = cljs.core.nth.call(null,vec__66369,(2),null);var a = cljs.core.nth.call(null,vec__66369,(3),null);var tex = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_66393 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__66370_66394 = rotMat;G__66370_66394.makeRotationZ(rot);
var G__66371_66395 = scaleMat;G__66371_66395.makeScale(xs,ys,(1));
var G__66372_66396 = tras;G__66372_66396.makeTranslation((cx + x),(cy + y),(0));
G__66372_66396.multiply(rotMat);
G__66372_66396.multiply(scaleMat);
var G__66373_66397 = colorTx;G__66373_66397.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__66374 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__66374__$1 = (cljs.core.truth_(texObj_66393)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_66393,(0)], null)], null),G__66374):G__66374);return G__66374__$1;
})());
if(cljs.core.truth_(texObj_66393))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__66375_66398 = cljs.core._EQ_;var expr__66376_66399 = blending;if(cljs.core.truth_(pred__66375_66398.call(null,"normal",expr__66376_66399)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__66375_66398.call(null,"add",expr__66376_66399)))
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
var G__66400 = cljs.core.next.call(null,seq__66350__$1);
var G__66401 = null;
var G__66402 = (0);
var G__66403 = (0);
seq__66350 = G__66400;
chunk__66351 = G__66401;
count__66352 = G__66402;
i__66353 = G__66403;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__66346,map__66346__$1,ctx,vec__66347,cx,cy,vec__66348,br,bg,bb,map__66349,map__66349__$1,ps,canvas_dom,mesh,sprite_shader,vec__66343,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__66343,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
