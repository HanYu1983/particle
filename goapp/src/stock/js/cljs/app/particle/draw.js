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
return (function (p__10449){var map__10450 = p__10449;var map__10450__$1 = ((cljs.core.seq_QMARK_.call(null,map__10450))?cljs.core.apply.call(null,cljs.core.hash_map,map__10450):map__10450);var ctx = map__10450__$1;var map__10451 = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__10451__$1 = ((cljs.core.seq_QMARK_.call(null,map__10451))?cljs.core.apply.call(null,cljs.core.hash_map,map__10451):map__10451);var ps = cljs.core.get.call(null,map__10451__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__10452_10467 = canvas_ctx;(G__10452_10467["fillStyle"] = "white");
G__10452_10467.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__10452_10467["fillStyle"] = "red");
G__10452_10467.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__10453_10468 = cljs.core.seq.call(null,ps);var chunk__10454_10469 = null;var count__10455_10470 = (0);var i__10456_10471 = (0);while(true){
if((i__10456_10471 < count__10455_10470))
{var map__10457_10472 = cljs.core._nth.call(null,chunk__10454_10469,i__10456_10471);var map__10457_10473__$1 = ((cljs.core.seq_QMARK_.call(null,map__10457_10472))?cljs.core.apply.call(null,cljs.core.hash_map,map__10457_10472):map__10457_10472);var p_10474 = map__10457_10473__$1;var vec__10458_10475 = cljs.core.get.call(null,map__10457_10473__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_10476 = cljs.core.nth.call(null,vec__10458_10475,(0),null);var y_10477 = cljs.core.nth.call(null,vec__10458_10475,(1),null);var rot_10478 = cljs.core.nth.call(null,vec__10458_10475,(2),null);var vec__10459_10479 = cljs.core.get.call(null,map__10457_10473__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_10480 = cljs.core.nth.call(null,vec__10459_10479,(0),null);var ys_10481 = cljs.core.nth.call(null,vec__10459_10479,(1),null);var vec__10460_10482 = cljs.core.get.call(null,map__10457_10473__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_10483 = cljs.core.nth.call(null,vec__10460_10482,(0),null);var g_10484 = cljs.core.nth.call(null,vec__10460_10482,(1),null);var b_10485 = cljs.core.nth.call(null,vec__10460_10482,(2),null);var a_10486 = cljs.core.nth.call(null,vec__10460_10482,(3),null);var G__10461_10487 = canvas_ctx;G__10461_10487.save();
G__10461_10487.translate(x_10476,y_10477);
G__10461_10487.rotate(rot_10478);
(G__10461_10487["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_10483 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_10484 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_10485 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_10486)+")"));
G__10461_10487.fillRect((- (xs_10480 / (2))),(- (ys_10481 / (2))),xs_10480,ys_10481);
G__10461_10487.restore();
{
var G__10488 = seq__10453_10468;
var G__10489 = chunk__10454_10469;
var G__10490 = count__10455_10470;
var G__10491 = (i__10456_10471 + (1));
seq__10453_10468 = G__10488;
chunk__10454_10469 = G__10489;
count__10455_10470 = G__10490;
i__10456_10471 = G__10491;
continue;
}
} else
{var temp__4126__auto___10492 = cljs.core.seq.call(null,seq__10453_10468);if(temp__4126__auto___10492)
{var seq__10453_10493__$1 = temp__4126__auto___10492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10453_10493__$1))
{var c__4307__auto___10494 = cljs.core.chunk_first.call(null,seq__10453_10493__$1);{
var G__10495 = cljs.core.chunk_rest.call(null,seq__10453_10493__$1);
var G__10496 = c__4307__auto___10494;
var G__10497 = cljs.core.count.call(null,c__4307__auto___10494);
var G__10498 = (0);
seq__10453_10468 = G__10495;
chunk__10454_10469 = G__10496;
count__10455_10470 = G__10497;
i__10456_10471 = G__10498;
continue;
}
} else
{var map__10462_10499 = cljs.core.first.call(null,seq__10453_10493__$1);var map__10462_10500__$1 = ((cljs.core.seq_QMARK_.call(null,map__10462_10499))?cljs.core.apply.call(null,cljs.core.hash_map,map__10462_10499):map__10462_10499);var p_10501 = map__10462_10500__$1;var vec__10463_10502 = cljs.core.get.call(null,map__10462_10500__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_10503 = cljs.core.nth.call(null,vec__10463_10502,(0),null);var y_10504 = cljs.core.nth.call(null,vec__10463_10502,(1),null);var rot_10505 = cljs.core.nth.call(null,vec__10463_10502,(2),null);var vec__10464_10506 = cljs.core.get.call(null,map__10462_10500__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_10507 = cljs.core.nth.call(null,vec__10464_10506,(0),null);var ys_10508 = cljs.core.nth.call(null,vec__10464_10506,(1),null);var vec__10465_10509 = cljs.core.get.call(null,map__10462_10500__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_10510 = cljs.core.nth.call(null,vec__10465_10509,(0),null);var g_10511 = cljs.core.nth.call(null,vec__10465_10509,(1),null);var b_10512 = cljs.core.nth.call(null,vec__10465_10509,(2),null);var a_10513 = cljs.core.nth.call(null,vec__10465_10509,(3),null);var G__10466_10514 = canvas_ctx;G__10466_10514.save();
G__10466_10514.translate(x_10503,y_10504);
G__10466_10514.rotate(rot_10505);
(G__10466_10514["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_10510 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_10511 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_10512 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_10513)+")"));
G__10466_10514.fillRect((- (xs_10507 / (2))),(- (ys_10508 / (2))),xs_10507,ys_10508);
G__10466_10514.restore();
{
var G__10515 = cljs.core.next.call(null,seq__10453_10493__$1);
var G__10516 = null;
var G__10517 = (0);
var G__10518 = (0);
seq__10453_10468 = G__10515;
chunk__10454_10469 = G__10516;
count__10455_10470 = G__10517;
i__10456_10471 = G__10518;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__10554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__10554,(0),null);var ch = cljs.core.nth.call(null,vec__10554,(1),null);var proj = (function (){var G__10555 = (new THREE.Matrix4());G__10555.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__10555;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__10554,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__10556){var map__10557 = p__10556;var map__10557__$1 = ((cljs.core.seq_QMARK_.call(null,map__10557))?cljs.core.apply.call(null,cljs.core.hash_map,map__10557):map__10557);var ctx = map__10557__$1;var vec__10558 = cljs.core.get.call(null,map__10557__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__10558,(0),null);var cy = cljs.core.nth.call(null,vec__10558,(1),null);var vec__10559 = cljs.core.get.call(null,map__10557__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__10559,(0),null);var bg = cljs.core.nth.call(null,vec__10559,(1),null);var bb = cljs.core.nth.call(null,vec__10559,(2),null);var map__10560 = cljs.core.get.call(null,map__10557__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__10560__$1 = ((cljs.core.seq_QMARK_.call(null,map__10560))?cljs.core.apply.call(null,cljs.core.hash_map,map__10560):map__10560);var ps = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__10557,map__10557__$1,ctx,vec__10558,cx,cy,vec__10559,br,bg,bb,map__10560,map__10560__$1,ps,canvas_dom,mesh,sprite_shader,vec__10554,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__10561 = cljs.core.seq.call(null,ps);var chunk__10562 = null;var count__10563 = (0);var i__10564 = (0);while(true){
if((i__10564 < count__10563))
{var map__10565 = cljs.core._nth.call(null,chunk__10562,i__10564);var map__10565__$1 = ((cljs.core.seq_QMARK_.call(null,map__10565))?cljs.core.apply.call(null,cljs.core.hash_map,map__10565):map__10565);var p = map__10565__$1;var vec__10566 = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__10566,(0),null);var y = cljs.core.nth.call(null,vec__10566,(1),null);var rot = cljs.core.nth.call(null,vec__10566,(2),null);var vec__10567 = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__10567,(0),null);var ys = cljs.core.nth.call(null,vec__10567,(1),null);var vec__10568 = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__10568,(0),null);var g = cljs.core.nth.call(null,vec__10568,(1),null);var b = cljs.core.nth.call(null,vec__10568,(2),null);var a = cljs.core.nth.call(null,vec__10568,(3),null);var tex = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_10589 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__10569_10590 = rotMat;G__10569_10590.makeRotationZ(rot);
var G__10570_10591 = scaleMat;G__10570_10591.makeScale(xs,ys,(1));
var G__10571_10592 = tras;G__10571_10592.makeTranslation((cx + x),(cy + y),(0));
G__10571_10592.multiply(rotMat);
G__10571_10592.multiply(scaleMat);
var G__10572_10593 = colorTx;G__10572_10593.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__10573 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__10573__$1 = (cljs.core.truth_(texObj_10589)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_10589,(0)], null)], null),G__10573):G__10573);return G__10573__$1;
})());
if(cljs.core.truth_(texObj_10589))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__10574_10594 = cljs.core._EQ_;var expr__10575_10595 = blending;if(cljs.core.truth_(pred__10574_10594.call(null,"normal",expr__10575_10595)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__10574_10594.call(null,"add",expr__10575_10595)))
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
var G__10596 = seq__10561;
var G__10597 = chunk__10562;
var G__10598 = count__10563;
var G__10599 = (i__10564 + (1));
seq__10561 = G__10596;
chunk__10562 = G__10597;
count__10563 = G__10598;
i__10564 = G__10599;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10561);if(temp__4126__auto__)
{var seq__10561__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10561__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10561__$1);{
var G__10600 = cljs.core.chunk_rest.call(null,seq__10561__$1);
var G__10601 = c__4307__auto__;
var G__10602 = cljs.core.count.call(null,c__4307__auto__);
var G__10603 = (0);
seq__10561 = G__10600;
chunk__10562 = G__10601;
count__10563 = G__10602;
i__10564 = G__10603;
continue;
}
} else
{var map__10577 = cljs.core.first.call(null,seq__10561__$1);var map__10577__$1 = ((cljs.core.seq_QMARK_.call(null,map__10577))?cljs.core.apply.call(null,cljs.core.hash_map,map__10577):map__10577);var p = map__10577__$1;var vec__10578 = cljs.core.get.call(null,map__10577__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__10578,(0),null);var y = cljs.core.nth.call(null,vec__10578,(1),null);var rot = cljs.core.nth.call(null,vec__10578,(2),null);var vec__10579 = cljs.core.get.call(null,map__10577__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__10579,(0),null);var ys = cljs.core.nth.call(null,vec__10579,(1),null);var vec__10580 = cljs.core.get.call(null,map__10577__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__10580,(0),null);var g = cljs.core.nth.call(null,vec__10580,(1),null);var b = cljs.core.nth.call(null,vec__10580,(2),null);var a = cljs.core.nth.call(null,vec__10580,(3),null);var tex = cljs.core.get.call(null,map__10577__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__10577__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_10604 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__10581_10605 = rotMat;G__10581_10605.makeRotationZ(rot);
var G__10582_10606 = scaleMat;G__10582_10606.makeScale(xs,ys,(1));
var G__10583_10607 = tras;G__10583_10607.makeTranslation((cx + x),(cy + y),(0));
G__10583_10607.multiply(rotMat);
G__10583_10607.multiply(scaleMat);
var G__10584_10608 = colorTx;G__10584_10608.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__10585 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__10585__$1 = (cljs.core.truth_(texObj_10604)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_10604,(0)], null)], null),G__10585):G__10585);return G__10585__$1;
})());
if(cljs.core.truth_(texObj_10604))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__10586_10609 = cljs.core._EQ_;var expr__10587_10610 = blending;if(cljs.core.truth_(pred__10586_10609.call(null,"normal",expr__10587_10610)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__10586_10609.call(null,"add",expr__10587_10610)))
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
var G__10611 = cljs.core.next.call(null,seq__10561__$1);
var G__10612 = null;
var G__10613 = (0);
var G__10614 = (0);
seq__10561 = G__10611;
chunk__10562 = G__10612;
count__10563 = G__10613;
i__10564 = G__10614;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__10557,map__10557__$1,ctx,vec__10558,cx,cy,vec__10559,br,bg,bb,map__10560,map__10560__$1,ps,canvas_dom,mesh,sprite_shader,vec__10554,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__10554,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
