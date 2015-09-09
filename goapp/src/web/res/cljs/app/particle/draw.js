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
return (function (p__66422){var map__66423 = p__66422;var map__66423__$1 = ((cljs.core.seq_QMARK_.call(null,map__66423))?cljs.core.apply.call(null,cljs.core.hash_map,map__66423):map__66423);var ctx = map__66423__$1;var map__66424 = cljs.core.get.call(null,map__66423__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__66424__$1 = ((cljs.core.seq_QMARK_.call(null,map__66424))?cljs.core.apply.call(null,cljs.core.hash_map,map__66424):map__66424);var ps = cljs.core.get.call(null,map__66424__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__66425_66440 = canvas_ctx;(G__66425_66440["fillStyle"] = "white");
G__66425_66440.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__66425_66440["fillStyle"] = "red");
G__66425_66440.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__66426_66441 = cljs.core.seq.call(null,ps);var chunk__66427_66442 = null;var count__66428_66443 = (0);var i__66429_66444 = (0);while(true){
if((i__66429_66444 < count__66428_66443))
{var map__66430_66445 = cljs.core._nth.call(null,chunk__66427_66442,i__66429_66444);var map__66430_66446__$1 = ((cljs.core.seq_QMARK_.call(null,map__66430_66445))?cljs.core.apply.call(null,cljs.core.hash_map,map__66430_66445):map__66430_66445);var p_66447 = map__66430_66446__$1;var vec__66431_66448 = cljs.core.get.call(null,map__66430_66446__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_66449 = cljs.core.nth.call(null,vec__66431_66448,(0),null);var y_66450 = cljs.core.nth.call(null,vec__66431_66448,(1),null);var rot_66451 = cljs.core.nth.call(null,vec__66431_66448,(2),null);var vec__66432_66452 = cljs.core.get.call(null,map__66430_66446__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_66453 = cljs.core.nth.call(null,vec__66432_66452,(0),null);var ys_66454 = cljs.core.nth.call(null,vec__66432_66452,(1),null);var vec__66433_66455 = cljs.core.get.call(null,map__66430_66446__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_66456 = cljs.core.nth.call(null,vec__66433_66455,(0),null);var g_66457 = cljs.core.nth.call(null,vec__66433_66455,(1),null);var b_66458 = cljs.core.nth.call(null,vec__66433_66455,(2),null);var a_66459 = cljs.core.nth.call(null,vec__66433_66455,(3),null);var G__66434_66460 = canvas_ctx;G__66434_66460.save();
G__66434_66460.translate(x_66449,y_66450);
G__66434_66460.rotate(rot_66451);
(G__66434_66460["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_66456 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_66457 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_66458 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_66459)+")"));
G__66434_66460.fillRect((- (xs_66453 / (2))),(- (ys_66454 / (2))),xs_66453,ys_66454);
G__66434_66460.restore();
{
var G__66461 = seq__66426_66441;
var G__66462 = chunk__66427_66442;
var G__66463 = count__66428_66443;
var G__66464 = (i__66429_66444 + (1));
seq__66426_66441 = G__66461;
chunk__66427_66442 = G__66462;
count__66428_66443 = G__66463;
i__66429_66444 = G__66464;
continue;
}
} else
{var temp__4126__auto___66465 = cljs.core.seq.call(null,seq__66426_66441);if(temp__4126__auto___66465)
{var seq__66426_66466__$1 = temp__4126__auto___66465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66426_66466__$1))
{var c__4307__auto___66467 = cljs.core.chunk_first.call(null,seq__66426_66466__$1);{
var G__66468 = cljs.core.chunk_rest.call(null,seq__66426_66466__$1);
var G__66469 = c__4307__auto___66467;
var G__66470 = cljs.core.count.call(null,c__4307__auto___66467);
var G__66471 = (0);
seq__66426_66441 = G__66468;
chunk__66427_66442 = G__66469;
count__66428_66443 = G__66470;
i__66429_66444 = G__66471;
continue;
}
} else
{var map__66435_66472 = cljs.core.first.call(null,seq__66426_66466__$1);var map__66435_66473__$1 = ((cljs.core.seq_QMARK_.call(null,map__66435_66472))?cljs.core.apply.call(null,cljs.core.hash_map,map__66435_66472):map__66435_66472);var p_66474 = map__66435_66473__$1;var vec__66436_66475 = cljs.core.get.call(null,map__66435_66473__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_66476 = cljs.core.nth.call(null,vec__66436_66475,(0),null);var y_66477 = cljs.core.nth.call(null,vec__66436_66475,(1),null);var rot_66478 = cljs.core.nth.call(null,vec__66436_66475,(2),null);var vec__66437_66479 = cljs.core.get.call(null,map__66435_66473__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_66480 = cljs.core.nth.call(null,vec__66437_66479,(0),null);var ys_66481 = cljs.core.nth.call(null,vec__66437_66479,(1),null);var vec__66438_66482 = cljs.core.get.call(null,map__66435_66473__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_66483 = cljs.core.nth.call(null,vec__66438_66482,(0),null);var g_66484 = cljs.core.nth.call(null,vec__66438_66482,(1),null);var b_66485 = cljs.core.nth.call(null,vec__66438_66482,(2),null);var a_66486 = cljs.core.nth.call(null,vec__66438_66482,(3),null);var G__66439_66487 = canvas_ctx;G__66439_66487.save();
G__66439_66487.translate(x_66476,y_66477);
G__66439_66487.rotate(rot_66478);
(G__66439_66487["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_66483 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_66484 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_66485 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_66486)+")"));
G__66439_66487.fillRect((- (xs_66480 / (2))),(- (ys_66481 / (2))),xs_66480,ys_66481);
G__66439_66487.restore();
{
var G__66488 = cljs.core.next.call(null,seq__66426_66466__$1);
var G__66489 = null;
var G__66490 = (0);
var G__66491 = (0);
seq__66426_66441 = G__66488;
chunk__66427_66442 = G__66489;
count__66428_66443 = G__66490;
i__66429_66444 = G__66491;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__66527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__66527,(0),null);var ch = cljs.core.nth.call(null,vec__66527,(1),null);var proj = (function (){var G__66528 = (new THREE.Matrix4());G__66528.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__66528;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__66527,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__66529){var map__66530 = p__66529;var map__66530__$1 = ((cljs.core.seq_QMARK_.call(null,map__66530))?cljs.core.apply.call(null,cljs.core.hash_map,map__66530):map__66530);var ctx = map__66530__$1;var vec__66531 = cljs.core.get.call(null,map__66530__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__66531,(0),null);var cy = cljs.core.nth.call(null,vec__66531,(1),null);var vec__66532 = cljs.core.get.call(null,map__66530__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__66532,(0),null);var bg = cljs.core.nth.call(null,vec__66532,(1),null);var bb = cljs.core.nth.call(null,vec__66532,(2),null);var map__66533 = cljs.core.get.call(null,map__66530__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__66533__$1 = ((cljs.core.seq_QMARK_.call(null,map__66533))?cljs.core.apply.call(null,cljs.core.hash_map,map__66533):map__66533);var ps = cljs.core.get.call(null,map__66533__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__66530,map__66530__$1,ctx,vec__66531,cx,cy,vec__66532,br,bg,bb,map__66533,map__66533__$1,ps,canvas_dom,mesh,sprite_shader,vec__66527,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__66534 = cljs.core.seq.call(null,ps);var chunk__66535 = null;var count__66536 = (0);var i__66537 = (0);while(true){
if((i__66537 < count__66536))
{var map__66538 = cljs.core._nth.call(null,chunk__66535,i__66537);var map__66538__$1 = ((cljs.core.seq_QMARK_.call(null,map__66538))?cljs.core.apply.call(null,cljs.core.hash_map,map__66538):map__66538);var p = map__66538__$1;var vec__66539 = cljs.core.get.call(null,map__66538__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__66539,(0),null);var y = cljs.core.nth.call(null,vec__66539,(1),null);var rot = cljs.core.nth.call(null,vec__66539,(2),null);var vec__66540 = cljs.core.get.call(null,map__66538__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__66540,(0),null);var ys = cljs.core.nth.call(null,vec__66540,(1),null);var vec__66541 = cljs.core.get.call(null,map__66538__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__66541,(0),null);var g = cljs.core.nth.call(null,vec__66541,(1),null);var b = cljs.core.nth.call(null,vec__66541,(2),null);var a = cljs.core.nth.call(null,vec__66541,(3),null);var tex = cljs.core.get.call(null,map__66538__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__66538__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_66562 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__66542_66563 = rotMat;G__66542_66563.makeRotationZ(rot);
var G__66543_66564 = scaleMat;G__66543_66564.makeScale(xs,ys,(1));
var G__66544_66565 = tras;G__66544_66565.makeTranslation((cx + x),(cy + y),(0));
G__66544_66565.multiply(rotMat);
G__66544_66565.multiply(scaleMat);
var G__66545_66566 = colorTx;G__66545_66566.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__66546 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__66546__$1 = (cljs.core.truth_(texObj_66562)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_66562,(0)], null)], null),G__66546):G__66546);return G__66546__$1;
})());
if(cljs.core.truth_(texObj_66562))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__66547_66567 = cljs.core._EQ_;var expr__66548_66568 = blending;if(cljs.core.truth_(pred__66547_66567.call(null,"normal",expr__66548_66568)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__66547_66567.call(null,"add",expr__66548_66568)))
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
var G__66569 = seq__66534;
var G__66570 = chunk__66535;
var G__66571 = count__66536;
var G__66572 = (i__66537 + (1));
seq__66534 = G__66569;
chunk__66535 = G__66570;
count__66536 = G__66571;
i__66537 = G__66572;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__66534);if(temp__4126__auto__)
{var seq__66534__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66534__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__66534__$1);{
var G__66573 = cljs.core.chunk_rest.call(null,seq__66534__$1);
var G__66574 = c__4307__auto__;
var G__66575 = cljs.core.count.call(null,c__4307__auto__);
var G__66576 = (0);
seq__66534 = G__66573;
chunk__66535 = G__66574;
count__66536 = G__66575;
i__66537 = G__66576;
continue;
}
} else
{var map__66550 = cljs.core.first.call(null,seq__66534__$1);var map__66550__$1 = ((cljs.core.seq_QMARK_.call(null,map__66550))?cljs.core.apply.call(null,cljs.core.hash_map,map__66550):map__66550);var p = map__66550__$1;var vec__66551 = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__66551,(0),null);var y = cljs.core.nth.call(null,vec__66551,(1),null);var rot = cljs.core.nth.call(null,vec__66551,(2),null);var vec__66552 = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__66552,(0),null);var ys = cljs.core.nth.call(null,vec__66552,(1),null);var vec__66553 = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__66553,(0),null);var g = cljs.core.nth.call(null,vec__66553,(1),null);var b = cljs.core.nth.call(null,vec__66553,(2),null);var a = cljs.core.nth.call(null,vec__66553,(3),null);var tex = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_66577 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__66554_66578 = rotMat;G__66554_66578.makeRotationZ(rot);
var G__66555_66579 = scaleMat;G__66555_66579.makeScale(xs,ys,(1));
var G__66556_66580 = tras;G__66556_66580.makeTranslation((cx + x),(cy + y),(0));
G__66556_66580.multiply(rotMat);
G__66556_66580.multiply(scaleMat);
var G__66557_66581 = colorTx;G__66557_66581.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__66558 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__66558__$1 = (cljs.core.truth_(texObj_66577)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_66577,(0)], null)], null),G__66558):G__66558);return G__66558__$1;
})());
if(cljs.core.truth_(texObj_66577))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__66559_66582 = cljs.core._EQ_;var expr__66560_66583 = blending;if(cljs.core.truth_(pred__66559_66582.call(null,"normal",expr__66560_66583)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__66559_66582.call(null,"add",expr__66560_66583)))
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
var G__66584 = cljs.core.next.call(null,seq__66534__$1);
var G__66585 = null;
var G__66586 = (0);
var G__66587 = (0);
seq__66534 = G__66584;
chunk__66535 = G__66585;
count__66536 = G__66586;
i__66537 = G__66587;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__66530,map__66530__$1,ctx,vec__66531,cx,cy,vec__66532,br,bg,bb,map__66533,map__66533__$1,ps,canvas_dom,mesh,sprite_shader,vec__66527,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__66527,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
