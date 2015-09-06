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
return (function (p__133325){var map__133326 = p__133325;var map__133326__$1 = ((cljs.core.seq_QMARK_.call(null,map__133326))?cljs.core.apply.call(null,cljs.core.hash_map,map__133326):map__133326);var ctx = map__133326__$1;var map__133327 = cljs.core.get.call(null,map__133326__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__133327__$1 = ((cljs.core.seq_QMARK_.call(null,map__133327))?cljs.core.apply.call(null,cljs.core.hash_map,map__133327):map__133327);var ps = cljs.core.get.call(null,map__133327__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__133328_133343 = canvas_ctx;(G__133328_133343["fillStyle"] = "white");
G__133328_133343.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__133328_133343["fillStyle"] = "red");
G__133328_133343.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__133329_133344 = cljs.core.seq.call(null,ps);var chunk__133330_133345 = null;var count__133331_133346 = (0);var i__133332_133347 = (0);while(true){
if((i__133332_133347 < count__133331_133346))
{var map__133333_133348 = cljs.core._nth.call(null,chunk__133330_133345,i__133332_133347);var map__133333_133349__$1 = ((cljs.core.seq_QMARK_.call(null,map__133333_133348))?cljs.core.apply.call(null,cljs.core.hash_map,map__133333_133348):map__133333_133348);var p_133350 = map__133333_133349__$1;var vec__133334_133351 = cljs.core.get.call(null,map__133333_133349__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_133352 = cljs.core.nth.call(null,vec__133334_133351,(0),null);var y_133353 = cljs.core.nth.call(null,vec__133334_133351,(1),null);var rot_133354 = cljs.core.nth.call(null,vec__133334_133351,(2),null);var vec__133335_133355 = cljs.core.get.call(null,map__133333_133349__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_133356 = cljs.core.nth.call(null,vec__133335_133355,(0),null);var ys_133357 = cljs.core.nth.call(null,vec__133335_133355,(1),null);var vec__133336_133358 = cljs.core.get.call(null,map__133333_133349__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_133359 = cljs.core.nth.call(null,vec__133336_133358,(0),null);var g_133360 = cljs.core.nth.call(null,vec__133336_133358,(1),null);var b_133361 = cljs.core.nth.call(null,vec__133336_133358,(2),null);var a_133362 = cljs.core.nth.call(null,vec__133336_133358,(3),null);var G__133337_133363 = canvas_ctx;G__133337_133363.save();
G__133337_133363.translate(x_133352,y_133353);
G__133337_133363.rotate(rot_133354);
(G__133337_133363["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_133359 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_133360 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_133361 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_133362)+")"));
G__133337_133363.fillRect((- (xs_133356 / (2))),(- (ys_133357 / (2))),xs_133356,ys_133357);
G__133337_133363.restore();
{
var G__133364 = seq__133329_133344;
var G__133365 = chunk__133330_133345;
var G__133366 = count__133331_133346;
var G__133367 = (i__133332_133347 + (1));
seq__133329_133344 = G__133364;
chunk__133330_133345 = G__133365;
count__133331_133346 = G__133366;
i__133332_133347 = G__133367;
continue;
}
} else
{var temp__4126__auto___133368 = cljs.core.seq.call(null,seq__133329_133344);if(temp__4126__auto___133368)
{var seq__133329_133369__$1 = temp__4126__auto___133368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133329_133369__$1))
{var c__4307__auto___133370 = cljs.core.chunk_first.call(null,seq__133329_133369__$1);{
var G__133371 = cljs.core.chunk_rest.call(null,seq__133329_133369__$1);
var G__133372 = c__4307__auto___133370;
var G__133373 = cljs.core.count.call(null,c__4307__auto___133370);
var G__133374 = (0);
seq__133329_133344 = G__133371;
chunk__133330_133345 = G__133372;
count__133331_133346 = G__133373;
i__133332_133347 = G__133374;
continue;
}
} else
{var map__133338_133375 = cljs.core.first.call(null,seq__133329_133369__$1);var map__133338_133376__$1 = ((cljs.core.seq_QMARK_.call(null,map__133338_133375))?cljs.core.apply.call(null,cljs.core.hash_map,map__133338_133375):map__133338_133375);var p_133377 = map__133338_133376__$1;var vec__133339_133378 = cljs.core.get.call(null,map__133338_133376__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_133379 = cljs.core.nth.call(null,vec__133339_133378,(0),null);var y_133380 = cljs.core.nth.call(null,vec__133339_133378,(1),null);var rot_133381 = cljs.core.nth.call(null,vec__133339_133378,(2),null);var vec__133340_133382 = cljs.core.get.call(null,map__133338_133376__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_133383 = cljs.core.nth.call(null,vec__133340_133382,(0),null);var ys_133384 = cljs.core.nth.call(null,vec__133340_133382,(1),null);var vec__133341_133385 = cljs.core.get.call(null,map__133338_133376__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_133386 = cljs.core.nth.call(null,vec__133341_133385,(0),null);var g_133387 = cljs.core.nth.call(null,vec__133341_133385,(1),null);var b_133388 = cljs.core.nth.call(null,vec__133341_133385,(2),null);var a_133389 = cljs.core.nth.call(null,vec__133341_133385,(3),null);var G__133342_133390 = canvas_ctx;G__133342_133390.save();
G__133342_133390.translate(x_133379,y_133380);
G__133342_133390.rotate(rot_133381);
(G__133342_133390["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_133386 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_133387 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_133388 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_133389)+")"));
G__133342_133390.fillRect((- (xs_133383 / (2))),(- (ys_133384 / (2))),xs_133383,ys_133384);
G__133342_133390.restore();
{
var G__133391 = cljs.core.next.call(null,seq__133329_133369__$1);
var G__133392 = null;
var G__133393 = (0);
var G__133394 = (0);
seq__133329_133344 = G__133391;
chunk__133330_133345 = G__133392;
count__133331_133346 = G__133393;
i__133332_133347 = G__133394;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__133423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__133423,(0),null);var ch = cljs.core.nth.call(null,vec__133423,(1),null);var proj = (function (){var G__133424 = (new THREE.Matrix4());G__133424.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__133424;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__133423,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__133425){var map__133426 = p__133425;var map__133426__$1 = ((cljs.core.seq_QMARK_.call(null,map__133426))?cljs.core.apply.call(null,cljs.core.hash_map,map__133426):map__133426);var ctx = map__133426__$1;var vec__133427 = cljs.core.get.call(null,map__133426__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__133427,(0),null);var cy = cljs.core.nth.call(null,vec__133427,(1),null);var timer = cljs.core.get.call(null,map__133426__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__133428 = cljs.core.get.call(null,map__133426__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__133428__$1 = ((cljs.core.seq_QMARK_.call(null,map__133428))?cljs.core.apply.call(null,cljs.core.hash_map,map__133428):map__133428);var ps = cljs.core.get.call(null,map__133428__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__133426,map__133426__$1,ctx,vec__133427,cx,cy,timer,map__133428,map__133428__$1,ps,canvas_dom,mesh,sprite_shader,vec__133423,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__133429 = cljs.core.seq.call(null,ps);var chunk__133430 = null;var count__133431 = (0);var i__133432 = (0);while(true){
if((i__133432 < count__133431))
{var map__133433 = cljs.core._nth.call(null,chunk__133430,i__133432);var map__133433__$1 = ((cljs.core.seq_QMARK_.call(null,map__133433))?cljs.core.apply.call(null,cljs.core.hash_map,map__133433):map__133433);var p = map__133433__$1;var vec__133434 = cljs.core.get.call(null,map__133433__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__133434,(0),null);var y = cljs.core.nth.call(null,vec__133434,(1),null);var rot = cljs.core.nth.call(null,vec__133434,(2),null);var vec__133435 = cljs.core.get.call(null,map__133433__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__133435,(0),null);var ys = cljs.core.nth.call(null,vec__133435,(1),null);var vec__133436 = cljs.core.get.call(null,map__133433__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__133436,(0),null);var g = cljs.core.nth.call(null,vec__133436,(1),null);var b = cljs.core.nth.call(null,vec__133436,(2),null);var a = cljs.core.nth.call(null,vec__133436,(3),null);var tex = cljs.core.get.call(null,map__133433__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_133451 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__133437_133452 = rotMat;G__133437_133452.makeRotationZ(rot);
var G__133438_133453 = scaleMat;G__133438_133453.makeScale(xs,ys,(1));
var G__133439_133454 = tras;G__133439_133454.makeTranslation((cx + x),(cy + y),(0));
G__133439_133454.multiply(rotMat);
G__133439_133454.multiply(scaleMat);
var G__133440_133455 = colorTx;G__133440_133455.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__133441 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__133441__$1 = (cljs.core.truth_(texObj_133451)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_133451,(0)], null)], null),G__133441):G__133441);return G__133441__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__133456 = seq__133429;
var G__133457 = chunk__133430;
var G__133458 = count__133431;
var G__133459 = (i__133432 + (1));
seq__133429 = G__133456;
chunk__133430 = G__133457;
count__133431 = G__133458;
i__133432 = G__133459;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__133429);if(temp__4126__auto__)
{var seq__133429__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133429__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__133429__$1);{
var G__133460 = cljs.core.chunk_rest.call(null,seq__133429__$1);
var G__133461 = c__4307__auto__;
var G__133462 = cljs.core.count.call(null,c__4307__auto__);
var G__133463 = (0);
seq__133429 = G__133460;
chunk__133430 = G__133461;
count__133431 = G__133462;
i__133432 = G__133463;
continue;
}
} else
{var map__133442 = cljs.core.first.call(null,seq__133429__$1);var map__133442__$1 = ((cljs.core.seq_QMARK_.call(null,map__133442))?cljs.core.apply.call(null,cljs.core.hash_map,map__133442):map__133442);var p = map__133442__$1;var vec__133443 = cljs.core.get.call(null,map__133442__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__133443,(0),null);var y = cljs.core.nth.call(null,vec__133443,(1),null);var rot = cljs.core.nth.call(null,vec__133443,(2),null);var vec__133444 = cljs.core.get.call(null,map__133442__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__133444,(0),null);var ys = cljs.core.nth.call(null,vec__133444,(1),null);var vec__133445 = cljs.core.get.call(null,map__133442__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__133445,(0),null);var g = cljs.core.nth.call(null,vec__133445,(1),null);var b = cljs.core.nth.call(null,vec__133445,(2),null);var a = cljs.core.nth.call(null,vec__133445,(3),null);var tex = cljs.core.get.call(null,map__133442__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_133464 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__133446_133465 = rotMat;G__133446_133465.makeRotationZ(rot);
var G__133447_133466 = scaleMat;G__133447_133466.makeScale(xs,ys,(1));
var G__133448_133467 = tras;G__133448_133467.makeTranslation((cx + x),(cy + y),(0));
G__133448_133467.multiply(rotMat);
G__133448_133467.multiply(scaleMat);
var G__133449_133468 = colorTx;G__133449_133468.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__133450 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__133450__$1 = (cljs.core.truth_(texObj_133464)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_133464,(0)], null)], null),G__133450):G__133450);return G__133450__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__133469 = cljs.core.next.call(null,seq__133429__$1);
var G__133470 = null;
var G__133471 = (0);
var G__133472 = (0);
seq__133429 = G__133469;
chunk__133430 = G__133470;
count__133431 = G__133471;
i__133432 = G__133472;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__133426,map__133426__$1,ctx,vec__133427,cx,cy,timer,map__133428,map__133428__$1,ps,canvas_dom,mesh,sprite_shader,vec__133423,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__133423,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
