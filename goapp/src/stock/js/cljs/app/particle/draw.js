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
return (function (p__40309){var map__40310 = p__40309;var map__40310__$1 = ((cljs.core.seq_QMARK_.call(null,map__40310))?cljs.core.apply.call(null,cljs.core.hash_map,map__40310):map__40310);var ctx = map__40310__$1;var map__40311 = cljs.core.get.call(null,map__40310__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40311__$1 = ((cljs.core.seq_QMARK_.call(null,map__40311))?cljs.core.apply.call(null,cljs.core.hash_map,map__40311):map__40311);var ps = cljs.core.get.call(null,map__40311__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__40312_40327 = canvas_ctx;(G__40312_40327["fillStyle"] = "white");
G__40312_40327.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__40312_40327["fillStyle"] = "red");
G__40312_40327.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__40313_40328 = cljs.core.seq.call(null,ps);var chunk__40314_40329 = null;var count__40315_40330 = (0);var i__40316_40331 = (0);while(true){
if((i__40316_40331 < count__40315_40330))
{var map__40317_40332 = cljs.core._nth.call(null,chunk__40314_40329,i__40316_40331);var map__40317_40333__$1 = ((cljs.core.seq_QMARK_.call(null,map__40317_40332))?cljs.core.apply.call(null,cljs.core.hash_map,map__40317_40332):map__40317_40332);var p_40334 = map__40317_40333__$1;var vec__40318_40335 = cljs.core.get.call(null,map__40317_40333__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40336 = cljs.core.nth.call(null,vec__40318_40335,(0),null);var y_40337 = cljs.core.nth.call(null,vec__40318_40335,(1),null);var rot_40338 = cljs.core.nth.call(null,vec__40318_40335,(2),null);var vec__40319_40339 = cljs.core.get.call(null,map__40317_40333__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40340 = cljs.core.nth.call(null,vec__40319_40339,(0),null);var ys_40341 = cljs.core.nth.call(null,vec__40319_40339,(1),null);var vec__40320_40342 = cljs.core.get.call(null,map__40317_40333__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40343 = cljs.core.nth.call(null,vec__40320_40342,(0),null);var g_40344 = cljs.core.nth.call(null,vec__40320_40342,(1),null);var b_40345 = cljs.core.nth.call(null,vec__40320_40342,(2),null);var a_40346 = cljs.core.nth.call(null,vec__40320_40342,(3),null);var G__40321_40347 = canvas_ctx;G__40321_40347.save();
G__40321_40347.translate(x_40336,y_40337);
G__40321_40347.rotate(rot_40338);
(G__40321_40347["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40343 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40344 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40345 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40346)+")"));
G__40321_40347.fillRect((- (xs_40340 / (2))),(- (ys_40341 / (2))),xs_40340,ys_40341);
G__40321_40347.restore();
{
var G__40348 = seq__40313_40328;
var G__40349 = chunk__40314_40329;
var G__40350 = count__40315_40330;
var G__40351 = (i__40316_40331 + (1));
seq__40313_40328 = G__40348;
chunk__40314_40329 = G__40349;
count__40315_40330 = G__40350;
i__40316_40331 = G__40351;
continue;
}
} else
{var temp__4126__auto___40352 = cljs.core.seq.call(null,seq__40313_40328);if(temp__4126__auto___40352)
{var seq__40313_40353__$1 = temp__4126__auto___40352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40313_40353__$1))
{var c__4307__auto___40354 = cljs.core.chunk_first.call(null,seq__40313_40353__$1);{
var G__40355 = cljs.core.chunk_rest.call(null,seq__40313_40353__$1);
var G__40356 = c__4307__auto___40354;
var G__40357 = cljs.core.count.call(null,c__4307__auto___40354);
var G__40358 = (0);
seq__40313_40328 = G__40355;
chunk__40314_40329 = G__40356;
count__40315_40330 = G__40357;
i__40316_40331 = G__40358;
continue;
}
} else
{var map__40322_40359 = cljs.core.first.call(null,seq__40313_40353__$1);var map__40322_40360__$1 = ((cljs.core.seq_QMARK_.call(null,map__40322_40359))?cljs.core.apply.call(null,cljs.core.hash_map,map__40322_40359):map__40322_40359);var p_40361 = map__40322_40360__$1;var vec__40323_40362 = cljs.core.get.call(null,map__40322_40360__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40363 = cljs.core.nth.call(null,vec__40323_40362,(0),null);var y_40364 = cljs.core.nth.call(null,vec__40323_40362,(1),null);var rot_40365 = cljs.core.nth.call(null,vec__40323_40362,(2),null);var vec__40324_40366 = cljs.core.get.call(null,map__40322_40360__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40367 = cljs.core.nth.call(null,vec__40324_40366,(0),null);var ys_40368 = cljs.core.nth.call(null,vec__40324_40366,(1),null);var vec__40325_40369 = cljs.core.get.call(null,map__40322_40360__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40370 = cljs.core.nth.call(null,vec__40325_40369,(0),null);var g_40371 = cljs.core.nth.call(null,vec__40325_40369,(1),null);var b_40372 = cljs.core.nth.call(null,vec__40325_40369,(2),null);var a_40373 = cljs.core.nth.call(null,vec__40325_40369,(3),null);var G__40326_40374 = canvas_ctx;G__40326_40374.save();
G__40326_40374.translate(x_40363,y_40364);
G__40326_40374.rotate(rot_40365);
(G__40326_40374["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40370 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40371 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40372 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40373)+")"));
G__40326_40374.fillRect((- (xs_40367 / (2))),(- (ys_40368 / (2))),xs_40367,ys_40368);
G__40326_40374.restore();
{
var G__40375 = cljs.core.next.call(null,seq__40313_40353__$1);
var G__40376 = null;
var G__40377 = (0);
var G__40378 = (0);
seq__40313_40328 = G__40375;
chunk__40314_40329 = G__40376;
count__40315_40330 = G__40377;
i__40316_40331 = G__40378;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__40413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__40413,(0),null);var ch = cljs.core.nth.call(null,vec__40413,(1),null);var proj = (function (){var G__40414 = (new THREE.Matrix4());G__40414.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__40414;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__40413,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__40415){var map__40416 = p__40415;var map__40416__$1 = ((cljs.core.seq_QMARK_.call(null,map__40416))?cljs.core.apply.call(null,cljs.core.hash_map,map__40416):map__40416);var ctx = map__40416__$1;var vec__40417 = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__40417,(0),null);var cy = cljs.core.nth.call(null,vec__40417,(1),null);var timer = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__40418 = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40418__$1 = ((cljs.core.seq_QMARK_.call(null,map__40418))?cljs.core.apply.call(null,cljs.core.hash_map,map__40418):map__40418);var ps = cljs.core.get.call(null,map__40418__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__40416,map__40416__$1,ctx,vec__40417,cx,cy,timer,map__40418,map__40418__$1,ps,canvas_dom,mesh,sprite_shader,vec__40413,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__40419 = cljs.core.seq.call(null,ps);var chunk__40420 = null;var count__40421 = (0);var i__40422 = (0);while(true){
if((i__40422 < count__40421))
{var map__40423 = cljs.core._nth.call(null,chunk__40420,i__40422);var map__40423__$1 = ((cljs.core.seq_QMARK_.call(null,map__40423))?cljs.core.apply.call(null,cljs.core.hash_map,map__40423):map__40423);var p = map__40423__$1;var vec__40424 = cljs.core.get.call(null,map__40423__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40424,(0),null);var y = cljs.core.nth.call(null,vec__40424,(1),null);var rot = cljs.core.nth.call(null,vec__40424,(2),null);var vec__40425 = cljs.core.get.call(null,map__40423__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40425,(0),null);var ys = cljs.core.nth.call(null,vec__40425,(1),null);var vec__40426 = cljs.core.get.call(null,map__40423__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40426,(0),null);var g = cljs.core.nth.call(null,vec__40426,(1),null);var b = cljs.core.nth.call(null,vec__40426,(2),null);var a = cljs.core.nth.call(null,vec__40426,(3),null);var tex = cljs.core.get.call(null,map__40423__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40423__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40447 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40427_40448 = rotMat;G__40427_40448.makeRotationZ(rot);
var G__40428_40449 = scaleMat;G__40428_40449.makeScale(xs,ys,(1));
var G__40429_40450 = tras;G__40429_40450.makeTranslation((cx + x),(cy + y),(0));
G__40429_40450.multiply(rotMat);
G__40429_40450.multiply(scaleMat);
var G__40430_40451 = colorTx;G__40430_40451.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40431 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40431__$1 = (cljs.core.truth_(texObj_40447)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40447,(0)], null)], null),G__40431):G__40431);return G__40431__$1;
})());
if(cljs.core.truth_(texObj_40447))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40432_40452 = cljs.core._EQ_;var expr__40433_40453 = blending;if(cljs.core.truth_(pred__40432_40452.call(null,"normal",expr__40433_40453)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40432_40452.call(null,"add",expr__40433_40453)))
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
var G__40454 = seq__40419;
var G__40455 = chunk__40420;
var G__40456 = count__40421;
var G__40457 = (i__40422 + (1));
seq__40419 = G__40454;
chunk__40420 = G__40455;
count__40421 = G__40456;
i__40422 = G__40457;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40419);if(temp__4126__auto__)
{var seq__40419__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40419__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40419__$1);{
var G__40458 = cljs.core.chunk_rest.call(null,seq__40419__$1);
var G__40459 = c__4307__auto__;
var G__40460 = cljs.core.count.call(null,c__4307__auto__);
var G__40461 = (0);
seq__40419 = G__40458;
chunk__40420 = G__40459;
count__40421 = G__40460;
i__40422 = G__40461;
continue;
}
} else
{var map__40435 = cljs.core.first.call(null,seq__40419__$1);var map__40435__$1 = ((cljs.core.seq_QMARK_.call(null,map__40435))?cljs.core.apply.call(null,cljs.core.hash_map,map__40435):map__40435);var p = map__40435__$1;var vec__40436 = cljs.core.get.call(null,map__40435__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40436,(0),null);var y = cljs.core.nth.call(null,vec__40436,(1),null);var rot = cljs.core.nth.call(null,vec__40436,(2),null);var vec__40437 = cljs.core.get.call(null,map__40435__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40437,(0),null);var ys = cljs.core.nth.call(null,vec__40437,(1),null);var vec__40438 = cljs.core.get.call(null,map__40435__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40438,(0),null);var g = cljs.core.nth.call(null,vec__40438,(1),null);var b = cljs.core.nth.call(null,vec__40438,(2),null);var a = cljs.core.nth.call(null,vec__40438,(3),null);var tex = cljs.core.get.call(null,map__40435__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40435__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40462 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40439_40463 = rotMat;G__40439_40463.makeRotationZ(rot);
var G__40440_40464 = scaleMat;G__40440_40464.makeScale(xs,ys,(1));
var G__40441_40465 = tras;G__40441_40465.makeTranslation((cx + x),(cy + y),(0));
G__40441_40465.multiply(rotMat);
G__40441_40465.multiply(scaleMat);
var G__40442_40466 = colorTx;G__40442_40466.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40443 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40443__$1 = (cljs.core.truth_(texObj_40462)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40462,(0)], null)], null),G__40443):G__40443);return G__40443__$1;
})());
if(cljs.core.truth_(texObj_40462))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40444_40467 = cljs.core._EQ_;var expr__40445_40468 = blending;if(cljs.core.truth_(pred__40444_40467.call(null,"normal",expr__40445_40468)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40444_40467.call(null,"add",expr__40445_40468)))
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
var G__40469 = cljs.core.next.call(null,seq__40419__$1);
var G__40470 = null;
var G__40471 = (0);
var G__40472 = (0);
seq__40419 = G__40469;
chunk__40420 = G__40470;
count__40421 = G__40471;
i__40422 = G__40472;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__40416,map__40416__$1,ctx,vec__40417,cx,cy,timer,map__40418,map__40418__$1,ps,canvas_dom,mesh,sprite_shader,vec__40413,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__40413,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
