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
return (function (p__30343){var map__30344 = p__30343;var map__30344__$1 = ((cljs.core.seq_QMARK_.call(null,map__30344))?cljs.core.apply.call(null,cljs.core.hash_map,map__30344):map__30344);var ctx = map__30344__$1;var map__30345 = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__30345__$1 = ((cljs.core.seq_QMARK_.call(null,map__30345))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);var ps = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__30346_30361 = canvas_ctx;(G__30346_30361["fillStyle"] = "white");
G__30346_30361.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__30346_30361["fillStyle"] = "red");
G__30346_30361.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__30347_30362 = cljs.core.seq.call(null,ps);var chunk__30348_30363 = null;var count__30349_30364 = (0);var i__30350_30365 = (0);while(true){
if((i__30350_30365 < count__30349_30364))
{var map__30351_30366 = cljs.core._nth.call(null,chunk__30348_30363,i__30350_30365);var map__30351_30367__$1 = ((cljs.core.seq_QMARK_.call(null,map__30351_30366))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351_30366):map__30351_30366);var p_30368 = map__30351_30367__$1;var vec__30352_30369 = cljs.core.get.call(null,map__30351_30367__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_30370 = cljs.core.nth.call(null,vec__30352_30369,(0),null);var y_30371 = cljs.core.nth.call(null,vec__30352_30369,(1),null);var rot_30372 = cljs.core.nth.call(null,vec__30352_30369,(2),null);var vec__30353_30373 = cljs.core.get.call(null,map__30351_30367__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_30374 = cljs.core.nth.call(null,vec__30353_30373,(0),null);var ys_30375 = cljs.core.nth.call(null,vec__30353_30373,(1),null);var vec__30354_30376 = cljs.core.get.call(null,map__30351_30367__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_30377 = cljs.core.nth.call(null,vec__30354_30376,(0),null);var g_30378 = cljs.core.nth.call(null,vec__30354_30376,(1),null);var b_30379 = cljs.core.nth.call(null,vec__30354_30376,(2),null);var a_30380 = cljs.core.nth.call(null,vec__30354_30376,(3),null);var G__30355_30381 = canvas_ctx;G__30355_30381.save();
G__30355_30381.translate(x_30370,y_30371);
G__30355_30381.rotate(rot_30372);
(G__30355_30381["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_30377 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_30378 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_30379 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_30380)+")"));
G__30355_30381.fillRect((- (xs_30374 / (2))),(- (ys_30375 / (2))),xs_30374,ys_30375);
G__30355_30381.restore();
{
var G__30382 = seq__30347_30362;
var G__30383 = chunk__30348_30363;
var G__30384 = count__30349_30364;
var G__30385 = (i__30350_30365 + (1));
seq__30347_30362 = G__30382;
chunk__30348_30363 = G__30383;
count__30349_30364 = G__30384;
i__30350_30365 = G__30385;
continue;
}
} else
{var temp__4126__auto___30386 = cljs.core.seq.call(null,seq__30347_30362);if(temp__4126__auto___30386)
{var seq__30347_30387__$1 = temp__4126__auto___30386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30347_30387__$1))
{var c__4307__auto___30388 = cljs.core.chunk_first.call(null,seq__30347_30387__$1);{
var G__30389 = cljs.core.chunk_rest.call(null,seq__30347_30387__$1);
var G__30390 = c__4307__auto___30388;
var G__30391 = cljs.core.count.call(null,c__4307__auto___30388);
var G__30392 = (0);
seq__30347_30362 = G__30389;
chunk__30348_30363 = G__30390;
count__30349_30364 = G__30391;
i__30350_30365 = G__30392;
continue;
}
} else
{var map__30356_30393 = cljs.core.first.call(null,seq__30347_30387__$1);var map__30356_30394__$1 = ((cljs.core.seq_QMARK_.call(null,map__30356_30393))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356_30393):map__30356_30393);var p_30395 = map__30356_30394__$1;var vec__30357_30396 = cljs.core.get.call(null,map__30356_30394__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_30397 = cljs.core.nth.call(null,vec__30357_30396,(0),null);var y_30398 = cljs.core.nth.call(null,vec__30357_30396,(1),null);var rot_30399 = cljs.core.nth.call(null,vec__30357_30396,(2),null);var vec__30358_30400 = cljs.core.get.call(null,map__30356_30394__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_30401 = cljs.core.nth.call(null,vec__30358_30400,(0),null);var ys_30402 = cljs.core.nth.call(null,vec__30358_30400,(1),null);var vec__30359_30403 = cljs.core.get.call(null,map__30356_30394__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_30404 = cljs.core.nth.call(null,vec__30359_30403,(0),null);var g_30405 = cljs.core.nth.call(null,vec__30359_30403,(1),null);var b_30406 = cljs.core.nth.call(null,vec__30359_30403,(2),null);var a_30407 = cljs.core.nth.call(null,vec__30359_30403,(3),null);var G__30360_30408 = canvas_ctx;G__30360_30408.save();
G__30360_30408.translate(x_30397,y_30398);
G__30360_30408.rotate(rot_30399);
(G__30360_30408["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_30404 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_30405 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_30406 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_30407)+")"));
G__30360_30408.fillRect((- (xs_30401 / (2))),(- (ys_30402 / (2))),xs_30401,ys_30402);
G__30360_30408.restore();
{
var G__30409 = cljs.core.next.call(null,seq__30347_30387__$1);
var G__30410 = null;
var G__30411 = (0);
var G__30412 = (0);
seq__30347_30362 = G__30409;
chunk__30348_30363 = G__30410;
count__30349_30364 = G__30411;
i__30350_30365 = G__30412;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__30448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__30448,(0),null);var ch = cljs.core.nth.call(null,vec__30448,(1),null);var proj = (function (){var G__30449 = (new THREE.Matrix4());G__30449.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__30449;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__30448,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__30450){var map__30451 = p__30450;var map__30451__$1 = ((cljs.core.seq_QMARK_.call(null,map__30451))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);var ctx = map__30451__$1;var vec__30452 = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__30452,(0),null);var cy = cljs.core.nth.call(null,vec__30452,(1),null);var vec__30453 = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__30453,(0),null);var bg = cljs.core.nth.call(null,vec__30453,(1),null);var bb = cljs.core.nth.call(null,vec__30453,(2),null);var map__30454 = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__30454__$1 = ((cljs.core.seq_QMARK_.call(null,map__30454))?cljs.core.apply.call(null,cljs.core.hash_map,map__30454):map__30454);var ps = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__30451,map__30451__$1,ctx,vec__30452,cx,cy,vec__30453,br,bg,bb,map__30454,map__30454__$1,ps,canvas_dom,mesh,sprite_shader,vec__30448,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__30455 = cljs.core.seq.call(null,ps);var chunk__30456 = null;var count__30457 = (0);var i__30458 = (0);while(true){
if((i__30458 < count__30457))
{var map__30459 = cljs.core._nth.call(null,chunk__30456,i__30458);var map__30459__$1 = ((cljs.core.seq_QMARK_.call(null,map__30459))?cljs.core.apply.call(null,cljs.core.hash_map,map__30459):map__30459);var p = map__30459__$1;var vec__30460 = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__30460,(0),null);var y = cljs.core.nth.call(null,vec__30460,(1),null);var rot = cljs.core.nth.call(null,vec__30460,(2),null);var vec__30461 = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__30461,(0),null);var ys = cljs.core.nth.call(null,vec__30461,(1),null);var vec__30462 = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__30462,(0),null);var g = cljs.core.nth.call(null,vec__30462,(1),null);var b = cljs.core.nth.call(null,vec__30462,(2),null);var a = cljs.core.nth.call(null,vec__30462,(3),null);var tex = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_30483 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__30463_30484 = rotMat;G__30463_30484.makeRotationZ(rot);
var G__30464_30485 = scaleMat;G__30464_30485.makeScale(xs,ys,(1));
var G__30465_30486 = tras;G__30465_30486.makeTranslation((cx + x),(cy + y),(0));
G__30465_30486.multiply(rotMat);
G__30465_30486.multiply(scaleMat);
var G__30466_30487 = colorTx;G__30466_30487.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__30467 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__30467__$1 = (cljs.core.truth_(texObj_30483)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_30483,(0)], null)], null),G__30467):G__30467);return G__30467__$1;
})());
if(cljs.core.truth_(texObj_30483))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__30468_30488 = cljs.core._EQ_;var expr__30469_30489 = blending;if(cljs.core.truth_(pred__30468_30488.call(null,"normal",expr__30469_30489)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__30468_30488.call(null,"add",expr__30469_30489)))
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
var G__30490 = seq__30455;
var G__30491 = chunk__30456;
var G__30492 = count__30457;
var G__30493 = (i__30458 + (1));
seq__30455 = G__30490;
chunk__30456 = G__30491;
count__30457 = G__30492;
i__30458 = G__30493;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30455);if(temp__4126__auto__)
{var seq__30455__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30455__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__30455__$1);{
var G__30494 = cljs.core.chunk_rest.call(null,seq__30455__$1);
var G__30495 = c__4307__auto__;
var G__30496 = cljs.core.count.call(null,c__4307__auto__);
var G__30497 = (0);
seq__30455 = G__30494;
chunk__30456 = G__30495;
count__30457 = G__30496;
i__30458 = G__30497;
continue;
}
} else
{var map__30471 = cljs.core.first.call(null,seq__30455__$1);var map__30471__$1 = ((cljs.core.seq_QMARK_.call(null,map__30471))?cljs.core.apply.call(null,cljs.core.hash_map,map__30471):map__30471);var p = map__30471__$1;var vec__30472 = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__30472,(0),null);var y = cljs.core.nth.call(null,vec__30472,(1),null);var rot = cljs.core.nth.call(null,vec__30472,(2),null);var vec__30473 = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__30473,(0),null);var ys = cljs.core.nth.call(null,vec__30473,(1),null);var vec__30474 = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__30474,(0),null);var g = cljs.core.nth.call(null,vec__30474,(1),null);var b = cljs.core.nth.call(null,vec__30474,(2),null);var a = cljs.core.nth.call(null,vec__30474,(3),null);var tex = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_30498 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__30475_30499 = rotMat;G__30475_30499.makeRotationZ(rot);
var G__30476_30500 = scaleMat;G__30476_30500.makeScale(xs,ys,(1));
var G__30477_30501 = tras;G__30477_30501.makeTranslation((cx + x),(cy + y),(0));
G__30477_30501.multiply(rotMat);
G__30477_30501.multiply(scaleMat);
var G__30478_30502 = colorTx;G__30478_30502.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__30479 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__30479__$1 = (cljs.core.truth_(texObj_30498)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_30498,(0)], null)], null),G__30479):G__30479);return G__30479__$1;
})());
if(cljs.core.truth_(texObj_30498))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__30480_30503 = cljs.core._EQ_;var expr__30481_30504 = blending;if(cljs.core.truth_(pred__30480_30503.call(null,"normal",expr__30481_30504)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__30480_30503.call(null,"add",expr__30481_30504)))
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
var G__30505 = cljs.core.next.call(null,seq__30455__$1);
var G__30506 = null;
var G__30507 = (0);
var G__30508 = (0);
seq__30455 = G__30505;
chunk__30456 = G__30506;
count__30457 = G__30507;
i__30458 = G__30508;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__30451,map__30451__$1,ctx,vec__30452,cx,cy,vec__30453,br,bg,bb,map__30454,map__30454__$1,ps,canvas_dom,mesh,sprite_shader,vec__30448,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__30448,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
