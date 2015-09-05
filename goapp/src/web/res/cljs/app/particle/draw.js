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
return (function (p__74381){var map__74382 = p__74381;var map__74382__$1 = ((cljs.core.seq_QMARK_.call(null,map__74382))?cljs.core.apply.call(null,cljs.core.hash_map,map__74382):map__74382);var ctx = map__74382__$1;var map__74383 = cljs.core.get.call(null,map__74382__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__74383__$1 = ((cljs.core.seq_QMARK_.call(null,map__74383))?cljs.core.apply.call(null,cljs.core.hash_map,map__74383):map__74383);var ps = cljs.core.get.call(null,map__74383__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__74384_74399 = canvas_ctx;(G__74384_74399["fillStyle"] = "white");
G__74384_74399.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__74384_74399["fillStyle"] = "red");
G__74384_74399.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__74385_74400 = cljs.core.seq.call(null,ps);var chunk__74386_74401 = null;var count__74387_74402 = (0);var i__74388_74403 = (0);while(true){
if((i__74388_74403 < count__74387_74402))
{var map__74389_74404 = cljs.core._nth.call(null,chunk__74386_74401,i__74388_74403);var map__74389_74405__$1 = ((cljs.core.seq_QMARK_.call(null,map__74389_74404))?cljs.core.apply.call(null,cljs.core.hash_map,map__74389_74404):map__74389_74404);var p_74406 = map__74389_74405__$1;var vec__74390_74407 = cljs.core.get.call(null,map__74389_74405__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_74408 = cljs.core.nth.call(null,vec__74390_74407,(0),null);var y_74409 = cljs.core.nth.call(null,vec__74390_74407,(1),null);var rot_74410 = cljs.core.nth.call(null,vec__74390_74407,(2),null);var vec__74391_74411 = cljs.core.get.call(null,map__74389_74405__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_74412 = cljs.core.nth.call(null,vec__74391_74411,(0),null);var ys_74413 = cljs.core.nth.call(null,vec__74391_74411,(1),null);var vec__74392_74414 = cljs.core.get.call(null,map__74389_74405__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_74415 = cljs.core.nth.call(null,vec__74392_74414,(0),null);var g_74416 = cljs.core.nth.call(null,vec__74392_74414,(1),null);var b_74417 = cljs.core.nth.call(null,vec__74392_74414,(2),null);var a_74418 = cljs.core.nth.call(null,vec__74392_74414,(3),null);var G__74393_74419 = canvas_ctx;G__74393_74419.save();
G__74393_74419.translate(x_74408,y_74409);
G__74393_74419.rotate(rot_74410);
(G__74393_74419["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_74415 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_74416 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_74417 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_74418)+")"));
G__74393_74419.fillRect((- (xs_74412 / (2))),(- (ys_74413 / (2))),xs_74412,ys_74413);
G__74393_74419.restore();
{
var G__74420 = seq__74385_74400;
var G__74421 = chunk__74386_74401;
var G__74422 = count__74387_74402;
var G__74423 = (i__74388_74403 + (1));
seq__74385_74400 = G__74420;
chunk__74386_74401 = G__74421;
count__74387_74402 = G__74422;
i__74388_74403 = G__74423;
continue;
}
} else
{var temp__4126__auto___74424 = cljs.core.seq.call(null,seq__74385_74400);if(temp__4126__auto___74424)
{var seq__74385_74425__$1 = temp__4126__auto___74424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__74385_74425__$1))
{var c__4307__auto___74426 = cljs.core.chunk_first.call(null,seq__74385_74425__$1);{
var G__74427 = cljs.core.chunk_rest.call(null,seq__74385_74425__$1);
var G__74428 = c__4307__auto___74426;
var G__74429 = cljs.core.count.call(null,c__4307__auto___74426);
var G__74430 = (0);
seq__74385_74400 = G__74427;
chunk__74386_74401 = G__74428;
count__74387_74402 = G__74429;
i__74388_74403 = G__74430;
continue;
}
} else
{var map__74394_74431 = cljs.core.first.call(null,seq__74385_74425__$1);var map__74394_74432__$1 = ((cljs.core.seq_QMARK_.call(null,map__74394_74431))?cljs.core.apply.call(null,cljs.core.hash_map,map__74394_74431):map__74394_74431);var p_74433 = map__74394_74432__$1;var vec__74395_74434 = cljs.core.get.call(null,map__74394_74432__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_74435 = cljs.core.nth.call(null,vec__74395_74434,(0),null);var y_74436 = cljs.core.nth.call(null,vec__74395_74434,(1),null);var rot_74437 = cljs.core.nth.call(null,vec__74395_74434,(2),null);var vec__74396_74438 = cljs.core.get.call(null,map__74394_74432__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_74439 = cljs.core.nth.call(null,vec__74396_74438,(0),null);var ys_74440 = cljs.core.nth.call(null,vec__74396_74438,(1),null);var vec__74397_74441 = cljs.core.get.call(null,map__74394_74432__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_74442 = cljs.core.nth.call(null,vec__74397_74441,(0),null);var g_74443 = cljs.core.nth.call(null,vec__74397_74441,(1),null);var b_74444 = cljs.core.nth.call(null,vec__74397_74441,(2),null);var a_74445 = cljs.core.nth.call(null,vec__74397_74441,(3),null);var G__74398_74446 = canvas_ctx;G__74398_74446.save();
G__74398_74446.translate(x_74435,y_74436);
G__74398_74446.rotate(rot_74437);
(G__74398_74446["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_74442 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_74443 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_74444 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_74445)+")"));
G__74398_74446.fillRect((- (xs_74439 / (2))),(- (ys_74440 / (2))),xs_74439,ys_74440);
G__74398_74446.restore();
{
var G__74447 = cljs.core.next.call(null,seq__74385_74425__$1);
var G__74448 = null;
var G__74449 = (0);
var G__74450 = (0);
seq__74385_74400 = G__74447;
chunk__74386_74401 = G__74448;
count__74387_74402 = G__74449;
i__74388_74403 = G__74450;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__74479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__74479,(0),null);var ch = cljs.core.nth.call(null,vec__74479,(1),null);var proj = (function (){var G__74480 = (new THREE.Matrix4());G__74480.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__74480;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__74479,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__74481){var map__74482 = p__74481;var map__74482__$1 = ((cljs.core.seq_QMARK_.call(null,map__74482))?cljs.core.apply.call(null,cljs.core.hash_map,map__74482):map__74482);var ctx = map__74482__$1;var vec__74483 = cljs.core.get.call(null,map__74482__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__74483,(0),null);var cy = cljs.core.nth.call(null,vec__74483,(1),null);var timer = cljs.core.get.call(null,map__74482__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__74484 = cljs.core.get.call(null,map__74482__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__74484__$1 = ((cljs.core.seq_QMARK_.call(null,map__74484))?cljs.core.apply.call(null,cljs.core.hash_map,map__74484):map__74484);var ps = cljs.core.get.call(null,map__74484__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__74482,map__74482__$1,ctx,vec__74483,cx,cy,timer,map__74484,map__74484__$1,ps,canvas_dom,mesh,sprite_shader,vec__74479,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){var seq__74485 = cljs.core.seq.call(null,ps);var chunk__74486 = null;var count__74487 = (0);var i__74488 = (0);while(true){
if((i__74488 < count__74487))
{var map__74489 = cljs.core._nth.call(null,chunk__74486,i__74488);var map__74489__$1 = ((cljs.core.seq_QMARK_.call(null,map__74489))?cljs.core.apply.call(null,cljs.core.hash_map,map__74489):map__74489);var p = map__74489__$1;var vec__74490 = cljs.core.get.call(null,map__74489__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__74490,(0),null);var y = cljs.core.nth.call(null,vec__74490,(1),null);var rot = cljs.core.nth.call(null,vec__74490,(2),null);var vec__74491 = cljs.core.get.call(null,map__74489__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__74491,(0),null);var ys = cljs.core.nth.call(null,vec__74491,(1),null);var vec__74492 = cljs.core.get.call(null,map__74489__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__74492,(0),null);var g = cljs.core.nth.call(null,vec__74492,(1),null);var b = cljs.core.nth.call(null,vec__74492,(2),null);var a = cljs.core.nth.call(null,vec__74492,(3),null);var tex = cljs.core.get.call(null,map__74489__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_74507 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__74493_74508 = rotMat;G__74493_74508.makeRotationZ(rot);
var G__74494_74509 = scaleMat;G__74494_74509.makeScale(xs,ys,(1));
var G__74495_74510 = tras;G__74495_74510.makeTranslation((cx + x),(cy + y),(0));
G__74495_74510.multiply(rotMat);
G__74495_74510.multiply(scaleMat);
var G__74496_74511 = colorTx;G__74496_74511.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__74497 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__74497__$1 = (cljs.core.truth_(texObj_74507)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_74507,(0)], null)], null),G__74497):G__74497);return G__74497__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__74512 = seq__74485;
var G__74513 = chunk__74486;
var G__74514 = count__74487;
var G__74515 = (i__74488 + (1));
seq__74485 = G__74512;
chunk__74486 = G__74513;
count__74487 = G__74514;
i__74488 = G__74515;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__74485);if(temp__4126__auto__)
{var seq__74485__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__74485__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__74485__$1);{
var G__74516 = cljs.core.chunk_rest.call(null,seq__74485__$1);
var G__74517 = c__4307__auto__;
var G__74518 = cljs.core.count.call(null,c__4307__auto__);
var G__74519 = (0);
seq__74485 = G__74516;
chunk__74486 = G__74517;
count__74487 = G__74518;
i__74488 = G__74519;
continue;
}
} else
{var map__74498 = cljs.core.first.call(null,seq__74485__$1);var map__74498__$1 = ((cljs.core.seq_QMARK_.call(null,map__74498))?cljs.core.apply.call(null,cljs.core.hash_map,map__74498):map__74498);var p = map__74498__$1;var vec__74499 = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__74499,(0),null);var y = cljs.core.nth.call(null,vec__74499,(1),null);var rot = cljs.core.nth.call(null,vec__74499,(2),null);var vec__74500 = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__74500,(0),null);var ys = cljs.core.nth.call(null,vec__74500,(1),null);var vec__74501 = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__74501,(0),null);var g = cljs.core.nth.call(null,vec__74501,(1),null);var b = cljs.core.nth.call(null,vec__74501,(2),null);var a = cljs.core.nth.call(null,vec__74501,(3),null);var tex = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_74520 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__74502_74521 = rotMat;G__74502_74521.makeRotationZ(rot);
var G__74503_74522 = scaleMat;G__74503_74522.makeScale(xs,ys,(1));
var G__74504_74523 = tras;G__74504_74523.makeTranslation((cx + x),(cy + y),(0));
G__74504_74523.multiply(rotMat);
G__74504_74523.multiply(scaleMat);
var G__74505_74524 = colorTx;G__74505_74524.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__74506 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__74506__$1 = (cljs.core.truth_(texObj_74520)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_74520,(0)], null)], null),G__74506):G__74506);return G__74506__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__74525 = cljs.core.next.call(null,seq__74485__$1);
var G__74526 = null;
var G__74527 = (0);
var G__74528 = (0);
seq__74485 = G__74525;
chunk__74486 = G__74526;
count__74487 = G__74527;
i__74488 = G__74528;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__74482,map__74482__$1,ctx,vec__74483,cx,cy,timer,map__74484,map__74484__$1,ps,canvas_dom,mesh,sprite_shader,vec__74479,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__74479,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
