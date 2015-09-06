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
return (function (p__142411){var map__142412 = p__142411;var map__142412__$1 = ((cljs.core.seq_QMARK_.call(null,map__142412))?cljs.core.apply.call(null,cljs.core.hash_map,map__142412):map__142412);var ctx = map__142412__$1;var map__142413 = cljs.core.get.call(null,map__142412__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__142413__$1 = ((cljs.core.seq_QMARK_.call(null,map__142413))?cljs.core.apply.call(null,cljs.core.hash_map,map__142413):map__142413);var ps = cljs.core.get.call(null,map__142413__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__142414_142429 = canvas_ctx;(G__142414_142429["fillStyle"] = "white");
G__142414_142429.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__142414_142429["fillStyle"] = "red");
G__142414_142429.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__142415_142430 = cljs.core.seq.call(null,ps);var chunk__142416_142431 = null;var count__142417_142432 = (0);var i__142418_142433 = (0);while(true){
if((i__142418_142433 < count__142417_142432))
{var map__142419_142434 = cljs.core._nth.call(null,chunk__142416_142431,i__142418_142433);var map__142419_142435__$1 = ((cljs.core.seq_QMARK_.call(null,map__142419_142434))?cljs.core.apply.call(null,cljs.core.hash_map,map__142419_142434):map__142419_142434);var p_142436 = map__142419_142435__$1;var vec__142420_142437 = cljs.core.get.call(null,map__142419_142435__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_142438 = cljs.core.nth.call(null,vec__142420_142437,(0),null);var y_142439 = cljs.core.nth.call(null,vec__142420_142437,(1),null);var rot_142440 = cljs.core.nth.call(null,vec__142420_142437,(2),null);var vec__142421_142441 = cljs.core.get.call(null,map__142419_142435__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_142442 = cljs.core.nth.call(null,vec__142421_142441,(0),null);var ys_142443 = cljs.core.nth.call(null,vec__142421_142441,(1),null);var vec__142422_142444 = cljs.core.get.call(null,map__142419_142435__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_142445 = cljs.core.nth.call(null,vec__142422_142444,(0),null);var g_142446 = cljs.core.nth.call(null,vec__142422_142444,(1),null);var b_142447 = cljs.core.nth.call(null,vec__142422_142444,(2),null);var a_142448 = cljs.core.nth.call(null,vec__142422_142444,(3),null);var G__142423_142449 = canvas_ctx;G__142423_142449.save();
G__142423_142449.translate(x_142438,y_142439);
G__142423_142449.rotate(rot_142440);
(G__142423_142449["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_142445 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_142446 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_142447 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_142448)+")"));
G__142423_142449.fillRect((- (xs_142442 / (2))),(- (ys_142443 / (2))),xs_142442,ys_142443);
G__142423_142449.restore();
{
var G__142450 = seq__142415_142430;
var G__142451 = chunk__142416_142431;
var G__142452 = count__142417_142432;
var G__142453 = (i__142418_142433 + (1));
seq__142415_142430 = G__142450;
chunk__142416_142431 = G__142451;
count__142417_142432 = G__142452;
i__142418_142433 = G__142453;
continue;
}
} else
{var temp__4126__auto___142454 = cljs.core.seq.call(null,seq__142415_142430);if(temp__4126__auto___142454)
{var seq__142415_142455__$1 = temp__4126__auto___142454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__142415_142455__$1))
{var c__4307__auto___142456 = cljs.core.chunk_first.call(null,seq__142415_142455__$1);{
var G__142457 = cljs.core.chunk_rest.call(null,seq__142415_142455__$1);
var G__142458 = c__4307__auto___142456;
var G__142459 = cljs.core.count.call(null,c__4307__auto___142456);
var G__142460 = (0);
seq__142415_142430 = G__142457;
chunk__142416_142431 = G__142458;
count__142417_142432 = G__142459;
i__142418_142433 = G__142460;
continue;
}
} else
{var map__142424_142461 = cljs.core.first.call(null,seq__142415_142455__$1);var map__142424_142462__$1 = ((cljs.core.seq_QMARK_.call(null,map__142424_142461))?cljs.core.apply.call(null,cljs.core.hash_map,map__142424_142461):map__142424_142461);var p_142463 = map__142424_142462__$1;var vec__142425_142464 = cljs.core.get.call(null,map__142424_142462__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_142465 = cljs.core.nth.call(null,vec__142425_142464,(0),null);var y_142466 = cljs.core.nth.call(null,vec__142425_142464,(1),null);var rot_142467 = cljs.core.nth.call(null,vec__142425_142464,(2),null);var vec__142426_142468 = cljs.core.get.call(null,map__142424_142462__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_142469 = cljs.core.nth.call(null,vec__142426_142468,(0),null);var ys_142470 = cljs.core.nth.call(null,vec__142426_142468,(1),null);var vec__142427_142471 = cljs.core.get.call(null,map__142424_142462__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_142472 = cljs.core.nth.call(null,vec__142427_142471,(0),null);var g_142473 = cljs.core.nth.call(null,vec__142427_142471,(1),null);var b_142474 = cljs.core.nth.call(null,vec__142427_142471,(2),null);var a_142475 = cljs.core.nth.call(null,vec__142427_142471,(3),null);var G__142428_142476 = canvas_ctx;G__142428_142476.save();
G__142428_142476.translate(x_142465,y_142466);
G__142428_142476.rotate(rot_142467);
(G__142428_142476["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_142472 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_142473 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_142474 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_142475)+")"));
G__142428_142476.fillRect((- (xs_142469 / (2))),(- (ys_142470 / (2))),xs_142469,ys_142470);
G__142428_142476.restore();
{
var G__142477 = cljs.core.next.call(null,seq__142415_142455__$1);
var G__142478 = null;
var G__142479 = (0);
var G__142480 = (0);
seq__142415_142430 = G__142477;
chunk__142416_142431 = G__142478;
count__142417_142432 = G__142479;
i__142418_142433 = G__142480;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__142515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__142515,(0),null);var ch = cljs.core.nth.call(null,vec__142515,(1),null);var proj = (function (){var G__142516 = (new THREE.Matrix4());G__142516.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__142516;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__142515,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__142517){var map__142518 = p__142517;var map__142518__$1 = ((cljs.core.seq_QMARK_.call(null,map__142518))?cljs.core.apply.call(null,cljs.core.hash_map,map__142518):map__142518);var ctx = map__142518__$1;var vec__142519 = cljs.core.get.call(null,map__142518__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__142519,(0),null);var cy = cljs.core.nth.call(null,vec__142519,(1),null);var timer = cljs.core.get.call(null,map__142518__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__142520 = cljs.core.get.call(null,map__142518__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__142520__$1 = ((cljs.core.seq_QMARK_.call(null,map__142520))?cljs.core.apply.call(null,cljs.core.hash_map,map__142520):map__142520);var ps = cljs.core.get.call(null,map__142520__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__142518,map__142518__$1,ctx,vec__142519,cx,cy,timer,map__142520,map__142520__$1,ps,canvas_dom,mesh,sprite_shader,vec__142515,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__142521 = cljs.core.seq.call(null,ps);var chunk__142522 = null;var count__142523 = (0);var i__142524 = (0);while(true){
if((i__142524 < count__142523))
{var map__142525 = cljs.core._nth.call(null,chunk__142522,i__142524);var map__142525__$1 = ((cljs.core.seq_QMARK_.call(null,map__142525))?cljs.core.apply.call(null,cljs.core.hash_map,map__142525):map__142525);var p = map__142525__$1;var vec__142526 = cljs.core.get.call(null,map__142525__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__142526,(0),null);var y = cljs.core.nth.call(null,vec__142526,(1),null);var rot = cljs.core.nth.call(null,vec__142526,(2),null);var vec__142527 = cljs.core.get.call(null,map__142525__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__142527,(0),null);var ys = cljs.core.nth.call(null,vec__142527,(1),null);var vec__142528 = cljs.core.get.call(null,map__142525__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__142528,(0),null);var g = cljs.core.nth.call(null,vec__142528,(1),null);var b = cljs.core.nth.call(null,vec__142528,(2),null);var a = cljs.core.nth.call(null,vec__142528,(3),null);var tex = cljs.core.get.call(null,map__142525__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__142525__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_142549 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__142529_142550 = rotMat;G__142529_142550.makeRotationZ(rot);
var G__142530_142551 = scaleMat;G__142530_142551.makeScale(xs,ys,(1));
var G__142531_142552 = tras;G__142531_142552.makeTranslation((cx + x),(cy + y),(0));
G__142531_142552.multiply(rotMat);
G__142531_142552.multiply(scaleMat);
var G__142532_142553 = colorTx;G__142532_142553.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__142533 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__142533__$1 = (cljs.core.truth_(texObj_142549)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_142549,(0)], null)], null),G__142533):G__142533);return G__142533__$1;
})());
if(cljs.core.truth_(blending))
{var pred__142534_142554 = cljs.core._EQ_;var expr__142535_142555 = blending;if(cljs.core.truth_(pred__142534_142554.call(null,"normal",expr__142535_142555)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__142534_142554.call(null,"add",expr__142535_142555)))
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
var G__142556 = seq__142521;
var G__142557 = chunk__142522;
var G__142558 = count__142523;
var G__142559 = (i__142524 + (1));
seq__142521 = G__142556;
chunk__142522 = G__142557;
count__142523 = G__142558;
i__142524 = G__142559;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__142521);if(temp__4126__auto__)
{var seq__142521__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__142521__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__142521__$1);{
var G__142560 = cljs.core.chunk_rest.call(null,seq__142521__$1);
var G__142561 = c__4307__auto__;
var G__142562 = cljs.core.count.call(null,c__4307__auto__);
var G__142563 = (0);
seq__142521 = G__142560;
chunk__142522 = G__142561;
count__142523 = G__142562;
i__142524 = G__142563;
continue;
}
} else
{var map__142537 = cljs.core.first.call(null,seq__142521__$1);var map__142537__$1 = ((cljs.core.seq_QMARK_.call(null,map__142537))?cljs.core.apply.call(null,cljs.core.hash_map,map__142537):map__142537);var p = map__142537__$1;var vec__142538 = cljs.core.get.call(null,map__142537__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__142538,(0),null);var y = cljs.core.nth.call(null,vec__142538,(1),null);var rot = cljs.core.nth.call(null,vec__142538,(2),null);var vec__142539 = cljs.core.get.call(null,map__142537__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__142539,(0),null);var ys = cljs.core.nth.call(null,vec__142539,(1),null);var vec__142540 = cljs.core.get.call(null,map__142537__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__142540,(0),null);var g = cljs.core.nth.call(null,vec__142540,(1),null);var b = cljs.core.nth.call(null,vec__142540,(2),null);var a = cljs.core.nth.call(null,vec__142540,(3),null);var tex = cljs.core.get.call(null,map__142537__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__142537__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_142564 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__142541_142565 = rotMat;G__142541_142565.makeRotationZ(rot);
var G__142542_142566 = scaleMat;G__142542_142566.makeScale(xs,ys,(1));
var G__142543_142567 = tras;G__142543_142567.makeTranslation((cx + x),(cy + y),(0));
G__142543_142567.multiply(rotMat);
G__142543_142567.multiply(scaleMat);
var G__142544_142568 = colorTx;G__142544_142568.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__142545 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__142545__$1 = (cljs.core.truth_(texObj_142564)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_142564,(0)], null)], null),G__142545):G__142545);return G__142545__$1;
})());
if(cljs.core.truth_(blending))
{var pred__142546_142569 = cljs.core._EQ_;var expr__142547_142570 = blending;if(cljs.core.truth_(pred__142546_142569.call(null,"normal",expr__142547_142570)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__142546_142569.call(null,"add",expr__142547_142570)))
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
var G__142571 = cljs.core.next.call(null,seq__142521__$1);
var G__142572 = null;
var G__142573 = (0);
var G__142574 = (0);
seq__142521 = G__142571;
chunk__142522 = G__142572;
count__142523 = G__142573;
i__142524 = G__142574;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__142518,map__142518__$1,ctx,vec__142519,cx,cy,timer,map__142520,map__142520__$1,ps,canvas_dom,mesh,sprite_shader,vec__142515,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__142515,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
