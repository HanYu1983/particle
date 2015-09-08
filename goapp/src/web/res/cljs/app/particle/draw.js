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
return (function (p__40491){var map__40492 = p__40491;var map__40492__$1 = ((cljs.core.seq_QMARK_.call(null,map__40492))?cljs.core.apply.call(null,cljs.core.hash_map,map__40492):map__40492);var ctx = map__40492__$1;var map__40493 = cljs.core.get.call(null,map__40492__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40493__$1 = ((cljs.core.seq_QMARK_.call(null,map__40493))?cljs.core.apply.call(null,cljs.core.hash_map,map__40493):map__40493);var ps = cljs.core.get.call(null,map__40493__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__40494_40509 = canvas_ctx;(G__40494_40509["fillStyle"] = "white");
G__40494_40509.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__40494_40509["fillStyle"] = "red");
G__40494_40509.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__40495_40510 = cljs.core.seq.call(null,ps);var chunk__40496_40511 = null;var count__40497_40512 = (0);var i__40498_40513 = (0);while(true){
if((i__40498_40513 < count__40497_40512))
{var map__40499_40514 = cljs.core._nth.call(null,chunk__40496_40511,i__40498_40513);var map__40499_40515__$1 = ((cljs.core.seq_QMARK_.call(null,map__40499_40514))?cljs.core.apply.call(null,cljs.core.hash_map,map__40499_40514):map__40499_40514);var p_40516 = map__40499_40515__$1;var vec__40500_40517 = cljs.core.get.call(null,map__40499_40515__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40518 = cljs.core.nth.call(null,vec__40500_40517,(0),null);var y_40519 = cljs.core.nth.call(null,vec__40500_40517,(1),null);var rot_40520 = cljs.core.nth.call(null,vec__40500_40517,(2),null);var vec__40501_40521 = cljs.core.get.call(null,map__40499_40515__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40522 = cljs.core.nth.call(null,vec__40501_40521,(0),null);var ys_40523 = cljs.core.nth.call(null,vec__40501_40521,(1),null);var vec__40502_40524 = cljs.core.get.call(null,map__40499_40515__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40525 = cljs.core.nth.call(null,vec__40502_40524,(0),null);var g_40526 = cljs.core.nth.call(null,vec__40502_40524,(1),null);var b_40527 = cljs.core.nth.call(null,vec__40502_40524,(2),null);var a_40528 = cljs.core.nth.call(null,vec__40502_40524,(3),null);var G__40503_40529 = canvas_ctx;G__40503_40529.save();
G__40503_40529.translate(x_40518,y_40519);
G__40503_40529.rotate(rot_40520);
(G__40503_40529["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40525 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40526 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40527 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40528)+")"));
G__40503_40529.fillRect((- (xs_40522 / (2))),(- (ys_40523 / (2))),xs_40522,ys_40523);
G__40503_40529.restore();
{
var G__40530 = seq__40495_40510;
var G__40531 = chunk__40496_40511;
var G__40532 = count__40497_40512;
var G__40533 = (i__40498_40513 + (1));
seq__40495_40510 = G__40530;
chunk__40496_40511 = G__40531;
count__40497_40512 = G__40532;
i__40498_40513 = G__40533;
continue;
}
} else
{var temp__4126__auto___40534 = cljs.core.seq.call(null,seq__40495_40510);if(temp__4126__auto___40534)
{var seq__40495_40535__$1 = temp__4126__auto___40534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40495_40535__$1))
{var c__4307__auto___40536 = cljs.core.chunk_first.call(null,seq__40495_40535__$1);{
var G__40537 = cljs.core.chunk_rest.call(null,seq__40495_40535__$1);
var G__40538 = c__4307__auto___40536;
var G__40539 = cljs.core.count.call(null,c__4307__auto___40536);
var G__40540 = (0);
seq__40495_40510 = G__40537;
chunk__40496_40511 = G__40538;
count__40497_40512 = G__40539;
i__40498_40513 = G__40540;
continue;
}
} else
{var map__40504_40541 = cljs.core.first.call(null,seq__40495_40535__$1);var map__40504_40542__$1 = ((cljs.core.seq_QMARK_.call(null,map__40504_40541))?cljs.core.apply.call(null,cljs.core.hash_map,map__40504_40541):map__40504_40541);var p_40543 = map__40504_40542__$1;var vec__40505_40544 = cljs.core.get.call(null,map__40504_40542__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40545 = cljs.core.nth.call(null,vec__40505_40544,(0),null);var y_40546 = cljs.core.nth.call(null,vec__40505_40544,(1),null);var rot_40547 = cljs.core.nth.call(null,vec__40505_40544,(2),null);var vec__40506_40548 = cljs.core.get.call(null,map__40504_40542__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40549 = cljs.core.nth.call(null,vec__40506_40548,(0),null);var ys_40550 = cljs.core.nth.call(null,vec__40506_40548,(1),null);var vec__40507_40551 = cljs.core.get.call(null,map__40504_40542__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40552 = cljs.core.nth.call(null,vec__40507_40551,(0),null);var g_40553 = cljs.core.nth.call(null,vec__40507_40551,(1),null);var b_40554 = cljs.core.nth.call(null,vec__40507_40551,(2),null);var a_40555 = cljs.core.nth.call(null,vec__40507_40551,(3),null);var G__40508_40556 = canvas_ctx;G__40508_40556.save();
G__40508_40556.translate(x_40545,y_40546);
G__40508_40556.rotate(rot_40547);
(G__40508_40556["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40552 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40553 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40554 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40555)+")"));
G__40508_40556.fillRect((- (xs_40549 / (2))),(- (ys_40550 / (2))),xs_40549,ys_40550);
G__40508_40556.restore();
{
var G__40557 = cljs.core.next.call(null,seq__40495_40535__$1);
var G__40558 = null;
var G__40559 = (0);
var G__40560 = (0);
seq__40495_40510 = G__40557;
chunk__40496_40511 = G__40558;
count__40497_40512 = G__40559;
i__40498_40513 = G__40560;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__40595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__40595,(0),null);var ch = cljs.core.nth.call(null,vec__40595,(1),null);var proj = (function (){var G__40596 = (new THREE.Matrix4());G__40596.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__40596;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__40595,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__40597){var map__40598 = p__40597;var map__40598__$1 = ((cljs.core.seq_QMARK_.call(null,map__40598))?cljs.core.apply.call(null,cljs.core.hash_map,map__40598):map__40598);var ctx = map__40598__$1;var vec__40599 = cljs.core.get.call(null,map__40598__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__40599,(0),null);var cy = cljs.core.nth.call(null,vec__40599,(1),null);var timer = cljs.core.get.call(null,map__40598__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__40600 = cljs.core.get.call(null,map__40598__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40600__$1 = ((cljs.core.seq_QMARK_.call(null,map__40600))?cljs.core.apply.call(null,cljs.core.hash_map,map__40600):map__40600);var ps = cljs.core.get.call(null,map__40600__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__40598,map__40598__$1,ctx,vec__40599,cx,cy,timer,map__40600,map__40600__$1,ps,canvas_dom,mesh,sprite_shader,vec__40595,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__40601 = cljs.core.seq.call(null,ps);var chunk__40602 = null;var count__40603 = (0);var i__40604 = (0);while(true){
if((i__40604 < count__40603))
{var map__40605 = cljs.core._nth.call(null,chunk__40602,i__40604);var map__40605__$1 = ((cljs.core.seq_QMARK_.call(null,map__40605))?cljs.core.apply.call(null,cljs.core.hash_map,map__40605):map__40605);var p = map__40605__$1;var vec__40606 = cljs.core.get.call(null,map__40605__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40606,(0),null);var y = cljs.core.nth.call(null,vec__40606,(1),null);var rot = cljs.core.nth.call(null,vec__40606,(2),null);var vec__40607 = cljs.core.get.call(null,map__40605__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40607,(0),null);var ys = cljs.core.nth.call(null,vec__40607,(1),null);var vec__40608 = cljs.core.get.call(null,map__40605__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40608,(0),null);var g = cljs.core.nth.call(null,vec__40608,(1),null);var b = cljs.core.nth.call(null,vec__40608,(2),null);var a = cljs.core.nth.call(null,vec__40608,(3),null);var tex = cljs.core.get.call(null,map__40605__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40605__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40629 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40609_40630 = rotMat;G__40609_40630.makeRotationZ(rot);
var G__40610_40631 = scaleMat;G__40610_40631.makeScale(xs,ys,(1));
var G__40611_40632 = tras;G__40611_40632.makeTranslation((cx + x),(cy + y),(0));
G__40611_40632.multiply(rotMat);
G__40611_40632.multiply(scaleMat);
var G__40612_40633 = colorTx;G__40612_40633.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40613 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40613__$1 = (cljs.core.truth_(texObj_40629)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40629,(0)], null)], null),G__40613):G__40613);return G__40613__$1;
})());
if(cljs.core.truth_(texObj_40629))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40614_40634 = cljs.core._EQ_;var expr__40615_40635 = blending;if(cljs.core.truth_(pred__40614_40634.call(null,"normal",expr__40615_40635)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40614_40634.call(null,"add",expr__40615_40635)))
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
var G__40636 = seq__40601;
var G__40637 = chunk__40602;
var G__40638 = count__40603;
var G__40639 = (i__40604 + (1));
seq__40601 = G__40636;
chunk__40602 = G__40637;
count__40603 = G__40638;
i__40604 = G__40639;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40601);if(temp__4126__auto__)
{var seq__40601__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40601__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40601__$1);{
var G__40640 = cljs.core.chunk_rest.call(null,seq__40601__$1);
var G__40641 = c__4307__auto__;
var G__40642 = cljs.core.count.call(null,c__4307__auto__);
var G__40643 = (0);
seq__40601 = G__40640;
chunk__40602 = G__40641;
count__40603 = G__40642;
i__40604 = G__40643;
continue;
}
} else
{var map__40617 = cljs.core.first.call(null,seq__40601__$1);var map__40617__$1 = ((cljs.core.seq_QMARK_.call(null,map__40617))?cljs.core.apply.call(null,cljs.core.hash_map,map__40617):map__40617);var p = map__40617__$1;var vec__40618 = cljs.core.get.call(null,map__40617__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40618,(0),null);var y = cljs.core.nth.call(null,vec__40618,(1),null);var rot = cljs.core.nth.call(null,vec__40618,(2),null);var vec__40619 = cljs.core.get.call(null,map__40617__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40619,(0),null);var ys = cljs.core.nth.call(null,vec__40619,(1),null);var vec__40620 = cljs.core.get.call(null,map__40617__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40620,(0),null);var g = cljs.core.nth.call(null,vec__40620,(1),null);var b = cljs.core.nth.call(null,vec__40620,(2),null);var a = cljs.core.nth.call(null,vec__40620,(3),null);var tex = cljs.core.get.call(null,map__40617__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40617__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40644 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40621_40645 = rotMat;G__40621_40645.makeRotationZ(rot);
var G__40622_40646 = scaleMat;G__40622_40646.makeScale(xs,ys,(1));
var G__40623_40647 = tras;G__40623_40647.makeTranslation((cx + x),(cy + y),(0));
G__40623_40647.multiply(rotMat);
G__40623_40647.multiply(scaleMat);
var G__40624_40648 = colorTx;G__40624_40648.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40625 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40625__$1 = (cljs.core.truth_(texObj_40644)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40644,(0)], null)], null),G__40625):G__40625);return G__40625__$1;
})());
if(cljs.core.truth_(texObj_40644))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40626_40649 = cljs.core._EQ_;var expr__40627_40650 = blending;if(cljs.core.truth_(pred__40626_40649.call(null,"normal",expr__40627_40650)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40626_40649.call(null,"add",expr__40627_40650)))
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
var G__40651 = cljs.core.next.call(null,seq__40601__$1);
var G__40652 = null;
var G__40653 = (0);
var G__40654 = (0);
seq__40601 = G__40651;
chunk__40602 = G__40652;
count__40603 = G__40653;
i__40604 = G__40654;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__40598,map__40598__$1,ctx,vec__40599,cx,cy,timer,map__40600,map__40600__$1,ps,canvas_dom,mesh,sprite_shader,vec__40595,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__40595,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
