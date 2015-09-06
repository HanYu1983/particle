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
return (function (p__133491){var map__133492 = p__133491;var map__133492__$1 = ((cljs.core.seq_QMARK_.call(null,map__133492))?cljs.core.apply.call(null,cljs.core.hash_map,map__133492):map__133492);var ctx = map__133492__$1;var map__133493 = cljs.core.get.call(null,map__133492__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__133493__$1 = ((cljs.core.seq_QMARK_.call(null,map__133493))?cljs.core.apply.call(null,cljs.core.hash_map,map__133493):map__133493);var ps = cljs.core.get.call(null,map__133493__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__133494_133509 = canvas_ctx;(G__133494_133509["fillStyle"] = "white");
G__133494_133509.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__133494_133509["fillStyle"] = "red");
G__133494_133509.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__133495_133510 = cljs.core.seq.call(null,ps);var chunk__133496_133511 = null;var count__133497_133512 = (0);var i__133498_133513 = (0);while(true){
if((i__133498_133513 < count__133497_133512))
{var map__133499_133514 = cljs.core._nth.call(null,chunk__133496_133511,i__133498_133513);var map__133499_133515__$1 = ((cljs.core.seq_QMARK_.call(null,map__133499_133514))?cljs.core.apply.call(null,cljs.core.hash_map,map__133499_133514):map__133499_133514);var p_133516 = map__133499_133515__$1;var vec__133500_133517 = cljs.core.get.call(null,map__133499_133515__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_133518 = cljs.core.nth.call(null,vec__133500_133517,(0),null);var y_133519 = cljs.core.nth.call(null,vec__133500_133517,(1),null);var rot_133520 = cljs.core.nth.call(null,vec__133500_133517,(2),null);var vec__133501_133521 = cljs.core.get.call(null,map__133499_133515__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_133522 = cljs.core.nth.call(null,vec__133501_133521,(0),null);var ys_133523 = cljs.core.nth.call(null,vec__133501_133521,(1),null);var vec__133502_133524 = cljs.core.get.call(null,map__133499_133515__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_133525 = cljs.core.nth.call(null,vec__133502_133524,(0),null);var g_133526 = cljs.core.nth.call(null,vec__133502_133524,(1),null);var b_133527 = cljs.core.nth.call(null,vec__133502_133524,(2),null);var a_133528 = cljs.core.nth.call(null,vec__133502_133524,(3),null);var G__133503_133529 = canvas_ctx;G__133503_133529.save();
G__133503_133529.translate(x_133518,y_133519);
G__133503_133529.rotate(rot_133520);
(G__133503_133529["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_133525 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_133526 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_133527 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_133528)+")"));
G__133503_133529.fillRect((- (xs_133522 / (2))),(- (ys_133523 / (2))),xs_133522,ys_133523);
G__133503_133529.restore();
{
var G__133530 = seq__133495_133510;
var G__133531 = chunk__133496_133511;
var G__133532 = count__133497_133512;
var G__133533 = (i__133498_133513 + (1));
seq__133495_133510 = G__133530;
chunk__133496_133511 = G__133531;
count__133497_133512 = G__133532;
i__133498_133513 = G__133533;
continue;
}
} else
{var temp__4126__auto___133534 = cljs.core.seq.call(null,seq__133495_133510);if(temp__4126__auto___133534)
{var seq__133495_133535__$1 = temp__4126__auto___133534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133495_133535__$1))
{var c__4307__auto___133536 = cljs.core.chunk_first.call(null,seq__133495_133535__$1);{
var G__133537 = cljs.core.chunk_rest.call(null,seq__133495_133535__$1);
var G__133538 = c__4307__auto___133536;
var G__133539 = cljs.core.count.call(null,c__4307__auto___133536);
var G__133540 = (0);
seq__133495_133510 = G__133537;
chunk__133496_133511 = G__133538;
count__133497_133512 = G__133539;
i__133498_133513 = G__133540;
continue;
}
} else
{var map__133504_133541 = cljs.core.first.call(null,seq__133495_133535__$1);var map__133504_133542__$1 = ((cljs.core.seq_QMARK_.call(null,map__133504_133541))?cljs.core.apply.call(null,cljs.core.hash_map,map__133504_133541):map__133504_133541);var p_133543 = map__133504_133542__$1;var vec__133505_133544 = cljs.core.get.call(null,map__133504_133542__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_133545 = cljs.core.nth.call(null,vec__133505_133544,(0),null);var y_133546 = cljs.core.nth.call(null,vec__133505_133544,(1),null);var rot_133547 = cljs.core.nth.call(null,vec__133505_133544,(2),null);var vec__133506_133548 = cljs.core.get.call(null,map__133504_133542__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_133549 = cljs.core.nth.call(null,vec__133506_133548,(0),null);var ys_133550 = cljs.core.nth.call(null,vec__133506_133548,(1),null);var vec__133507_133551 = cljs.core.get.call(null,map__133504_133542__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_133552 = cljs.core.nth.call(null,vec__133507_133551,(0),null);var g_133553 = cljs.core.nth.call(null,vec__133507_133551,(1),null);var b_133554 = cljs.core.nth.call(null,vec__133507_133551,(2),null);var a_133555 = cljs.core.nth.call(null,vec__133507_133551,(3),null);var G__133508_133556 = canvas_ctx;G__133508_133556.save();
G__133508_133556.translate(x_133545,y_133546);
G__133508_133556.rotate(rot_133547);
(G__133508_133556["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_133552 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_133553 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_133554 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_133555)+")"));
G__133508_133556.fillRect((- (xs_133549 / (2))),(- (ys_133550 / (2))),xs_133549,ys_133550);
G__133508_133556.restore();
{
var G__133557 = cljs.core.next.call(null,seq__133495_133535__$1);
var G__133558 = null;
var G__133559 = (0);
var G__133560 = (0);
seq__133495_133510 = G__133557;
chunk__133496_133511 = G__133558;
count__133497_133512 = G__133559;
i__133498_133513 = G__133560;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__133589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__133589,(0),null);var ch = cljs.core.nth.call(null,vec__133589,(1),null);var proj = (function (){var G__133590 = (new THREE.Matrix4());G__133590.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__133590;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__133589,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__133591){var map__133592 = p__133591;var map__133592__$1 = ((cljs.core.seq_QMARK_.call(null,map__133592))?cljs.core.apply.call(null,cljs.core.hash_map,map__133592):map__133592);var ctx = map__133592__$1;var vec__133593 = cljs.core.get.call(null,map__133592__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__133593,(0),null);var cy = cljs.core.nth.call(null,vec__133593,(1),null);var timer = cljs.core.get.call(null,map__133592__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__133594 = cljs.core.get.call(null,map__133592__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__133594__$1 = ((cljs.core.seq_QMARK_.call(null,map__133594))?cljs.core.apply.call(null,cljs.core.hash_map,map__133594):map__133594);var ps = cljs.core.get.call(null,map__133594__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__133592,map__133592__$1,ctx,vec__133593,cx,cy,timer,map__133594,map__133594__$1,ps,canvas_dom,mesh,sprite_shader,vec__133589,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__133595 = cljs.core.seq.call(null,ps);var chunk__133596 = null;var count__133597 = (0);var i__133598 = (0);while(true){
if((i__133598 < count__133597))
{var map__133599 = cljs.core._nth.call(null,chunk__133596,i__133598);var map__133599__$1 = ((cljs.core.seq_QMARK_.call(null,map__133599))?cljs.core.apply.call(null,cljs.core.hash_map,map__133599):map__133599);var p = map__133599__$1;var vec__133600 = cljs.core.get.call(null,map__133599__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__133600,(0),null);var y = cljs.core.nth.call(null,vec__133600,(1),null);var rot = cljs.core.nth.call(null,vec__133600,(2),null);var vec__133601 = cljs.core.get.call(null,map__133599__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__133601,(0),null);var ys = cljs.core.nth.call(null,vec__133601,(1),null);var vec__133602 = cljs.core.get.call(null,map__133599__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__133602,(0),null);var g = cljs.core.nth.call(null,vec__133602,(1),null);var b = cljs.core.nth.call(null,vec__133602,(2),null);var a = cljs.core.nth.call(null,vec__133602,(3),null);var tex = cljs.core.get.call(null,map__133599__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_133617 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__133603_133618 = rotMat;G__133603_133618.makeRotationZ(rot);
var G__133604_133619 = scaleMat;G__133604_133619.makeScale(xs,ys,(1));
var G__133605_133620 = tras;G__133605_133620.makeTranslation((cx + x),(cy + y),(0));
G__133605_133620.multiply(rotMat);
G__133605_133620.multiply(scaleMat);
var G__133606_133621 = colorTx;G__133606_133621.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__133607 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__133607__$1 = (cljs.core.truth_(texObj_133617)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_133617,(0)], null)], null),G__133607):G__133607);return G__133607__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__133622 = seq__133595;
var G__133623 = chunk__133596;
var G__133624 = count__133597;
var G__133625 = (i__133598 + (1));
seq__133595 = G__133622;
chunk__133596 = G__133623;
count__133597 = G__133624;
i__133598 = G__133625;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__133595);if(temp__4126__auto__)
{var seq__133595__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133595__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__133595__$1);{
var G__133626 = cljs.core.chunk_rest.call(null,seq__133595__$1);
var G__133627 = c__4307__auto__;
var G__133628 = cljs.core.count.call(null,c__4307__auto__);
var G__133629 = (0);
seq__133595 = G__133626;
chunk__133596 = G__133627;
count__133597 = G__133628;
i__133598 = G__133629;
continue;
}
} else
{var map__133608 = cljs.core.first.call(null,seq__133595__$1);var map__133608__$1 = ((cljs.core.seq_QMARK_.call(null,map__133608))?cljs.core.apply.call(null,cljs.core.hash_map,map__133608):map__133608);var p = map__133608__$1;var vec__133609 = cljs.core.get.call(null,map__133608__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__133609,(0),null);var y = cljs.core.nth.call(null,vec__133609,(1),null);var rot = cljs.core.nth.call(null,vec__133609,(2),null);var vec__133610 = cljs.core.get.call(null,map__133608__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__133610,(0),null);var ys = cljs.core.nth.call(null,vec__133610,(1),null);var vec__133611 = cljs.core.get.call(null,map__133608__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__133611,(0),null);var g = cljs.core.nth.call(null,vec__133611,(1),null);var b = cljs.core.nth.call(null,vec__133611,(2),null);var a = cljs.core.nth.call(null,vec__133611,(3),null);var tex = cljs.core.get.call(null,map__133608__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_133630 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__133612_133631 = rotMat;G__133612_133631.makeRotationZ(rot);
var G__133613_133632 = scaleMat;G__133613_133632.makeScale(xs,ys,(1));
var G__133614_133633 = tras;G__133614_133633.makeTranslation((cx + x),(cy + y),(0));
G__133614_133633.multiply(rotMat);
G__133614_133633.multiply(scaleMat);
var G__133615_133634 = colorTx;G__133615_133634.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__133616 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__133616__$1 = (cljs.core.truth_(texObj_133630)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_133630,(0)], null)], null),G__133616):G__133616);return G__133616__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__133635 = cljs.core.next.call(null,seq__133595__$1);
var G__133636 = null;
var G__133637 = (0);
var G__133638 = (0);
seq__133595 = G__133635;
chunk__133596 = G__133636;
count__133597 = G__133637;
i__133598 = G__133638;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__133592,map__133592__$1,ctx,vec__133593,cx,cy,timer,map__133594,map__133594__$1,ps,canvas_dom,mesh,sprite_shader,vec__133589,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__133589,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
