// Compiled by ClojureScript 0.0-2268
goog.provide('app.main2');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('app.particle');
goog.require('cljs.core.async');
goog.require('app.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.mesh');
goog.require('gl.util');
app.main2.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main2.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__14335){var map__14336 = p__14335;var map__14336__$1 = ((cljs.core.seq_QMARK_.call(null,map__14336))?cljs.core.apply.call(null,cljs.core.hash_map,map__14336):map__14336);var ctx = map__14336__$1;var map__14337 = cljs.core.get.call(null,map__14336__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__14337__$1 = ((cljs.core.seq_QMARK_.call(null,map__14337))?cljs.core.apply.call(null,cljs.core.hash_map,map__14337):map__14337);var ps = cljs.core.get.call(null,map__14337__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__14338_14353 = canvas_ctx;(G__14338_14353["fillStyle"] = "white");
G__14338_14353.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__14338_14353["fillStyle"] = "red");
G__14338_14353.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__14339_14354 = cljs.core.seq.call(null,ps);var chunk__14340_14355 = null;var count__14341_14356 = (0);var i__14342_14357 = (0);while(true){
if((i__14342_14357 < count__14341_14356))
{var map__14343_14358 = cljs.core._nth.call(null,chunk__14340_14355,i__14342_14357);var map__14343_14359__$1 = ((cljs.core.seq_QMARK_.call(null,map__14343_14358))?cljs.core.apply.call(null,cljs.core.hash_map,map__14343_14358):map__14343_14358);var p_14360 = map__14343_14359__$1;var vec__14344_14361 = cljs.core.get.call(null,map__14343_14359__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_14362 = cljs.core.nth.call(null,vec__14344_14361,(0),null);var y_14363 = cljs.core.nth.call(null,vec__14344_14361,(1),null);var rot_14364 = cljs.core.nth.call(null,vec__14344_14361,(2),null);var vec__14345_14365 = cljs.core.get.call(null,map__14343_14359__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_14366 = cljs.core.nth.call(null,vec__14345_14365,(0),null);var ys_14367 = cljs.core.nth.call(null,vec__14345_14365,(1),null);var vec__14346_14368 = cljs.core.get.call(null,map__14343_14359__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_14369 = cljs.core.nth.call(null,vec__14346_14368,(0),null);var g_14370 = cljs.core.nth.call(null,vec__14346_14368,(1),null);var b_14371 = cljs.core.nth.call(null,vec__14346_14368,(2),null);var a_14372 = cljs.core.nth.call(null,vec__14346_14368,(3),null);var G__14347_14373 = canvas_ctx;G__14347_14373.save();
G__14347_14373.translate(x_14362,y_14363);
G__14347_14373.rotate(rot_14364);
(G__14347_14373["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_14369 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_14370 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_14371 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_14372)+")"));
G__14347_14373.fillRect((- (xs_14366 / (2))),(- (ys_14367 / (2))),xs_14366,ys_14367);
G__14347_14373.restore();
{
var G__14374 = seq__14339_14354;
var G__14375 = chunk__14340_14355;
var G__14376 = count__14341_14356;
var G__14377 = (i__14342_14357 + (1));
seq__14339_14354 = G__14374;
chunk__14340_14355 = G__14375;
count__14341_14356 = G__14376;
i__14342_14357 = G__14377;
continue;
}
} else
{var temp__4126__auto___14378 = cljs.core.seq.call(null,seq__14339_14354);if(temp__4126__auto___14378)
{var seq__14339_14379__$1 = temp__4126__auto___14378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14339_14379__$1))
{var c__4307__auto___14380 = cljs.core.chunk_first.call(null,seq__14339_14379__$1);{
var G__14381 = cljs.core.chunk_rest.call(null,seq__14339_14379__$1);
var G__14382 = c__4307__auto___14380;
var G__14383 = cljs.core.count.call(null,c__4307__auto___14380);
var G__14384 = (0);
seq__14339_14354 = G__14381;
chunk__14340_14355 = G__14382;
count__14341_14356 = G__14383;
i__14342_14357 = G__14384;
continue;
}
} else
{var map__14348_14385 = cljs.core.first.call(null,seq__14339_14379__$1);var map__14348_14386__$1 = ((cljs.core.seq_QMARK_.call(null,map__14348_14385))?cljs.core.apply.call(null,cljs.core.hash_map,map__14348_14385):map__14348_14385);var p_14387 = map__14348_14386__$1;var vec__14349_14388 = cljs.core.get.call(null,map__14348_14386__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_14389 = cljs.core.nth.call(null,vec__14349_14388,(0),null);var y_14390 = cljs.core.nth.call(null,vec__14349_14388,(1),null);var rot_14391 = cljs.core.nth.call(null,vec__14349_14388,(2),null);var vec__14350_14392 = cljs.core.get.call(null,map__14348_14386__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_14393 = cljs.core.nth.call(null,vec__14350_14392,(0),null);var ys_14394 = cljs.core.nth.call(null,vec__14350_14392,(1),null);var vec__14351_14395 = cljs.core.get.call(null,map__14348_14386__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_14396 = cljs.core.nth.call(null,vec__14351_14395,(0),null);var g_14397 = cljs.core.nth.call(null,vec__14351_14395,(1),null);var b_14398 = cljs.core.nth.call(null,vec__14351_14395,(2),null);var a_14399 = cljs.core.nth.call(null,vec__14351_14395,(3),null);var G__14352_14400 = canvas_ctx;G__14352_14400.save();
G__14352_14400.translate(x_14389,y_14390);
G__14352_14400.rotate(rot_14391);
(G__14352_14400["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_14396 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_14397 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_14398 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_14399)+")"));
G__14352_14400.fillRect((- (xs_14393 / (2))),(- (ys_14394 / (2))),xs_14393,ys_14394);
G__14352_14400.restore();
{
var G__14401 = cljs.core.next.call(null,seq__14339_14379__$1);
var G__14402 = null;
var G__14403 = (0);
var G__14404 = (0);
seq__14339_14354 = G__14401;
chunk__14340_14355 = G__14402;
count__14341_14356 = G__14403;
i__14342_14357 = G__14404;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj14433 = {};return obj14433;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__14431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__14431,(0),null);var ch = cljs.core.nth.call(null,vec__14431,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__14431,cw,ch){
return (function (p__14434){var map__14435 = p__14434;var map__14435__$1 = ((cljs.core.seq_QMARK_.call(null,map__14435))?cljs.core.apply.call(null,cljs.core.hash_map,map__14435):map__14435);var ctx = map__14435__$1;var timer = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__14436 = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__14436__$1 = ((cljs.core.seq_QMARK_.call(null,map__14436))?cljs.core.apply.call(null,cljs.core.hash_map,map__14436):map__14436);var ps = cljs.core.get.call(null,map__14436__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___14457 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___14457 == null))
{} else
{var faceImg_14458 = temp__4130__auto___14457;var tex_14459 = app.main2.cacheTex.call(null,gl__$1,faceImg_14458);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_14459,faceImg_14458,temp__4130__auto___14457,map__14435,map__14435__$1,ctx,timer,map__14436,map__14436__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__14431,cw,ch){
return (function (pobj){var seq__14437 = cljs.core.seq.call(null,ps);var chunk__14438 = null;var count__14439 = (0);var i__14440 = (0);while(true){
if((i__14440 < count__14439))
{var map__14441 = cljs.core._nth.call(null,chunk__14438,i__14440);var map__14441__$1 = ((cljs.core.seq_QMARK_.call(null,map__14441))?cljs.core.apply.call(null,cljs.core.hash_map,map__14441):map__14441);var p = map__14441__$1;var vec__14442 = cljs.core.get.call(null,map__14441__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__14442,(0),null);var y = cljs.core.nth.call(null,vec__14442,(1),null);var rot = cljs.core.nth.call(null,vec__14442,(2),null);var vec__14443 = cljs.core.get.call(null,map__14441__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__14443,(0),null);var ys = cljs.core.nth.call(null,vec__14443,(1),null);var vec__14444 = cljs.core.get.call(null,map__14441__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__14444,(0),null);var g = cljs.core.nth.call(null,vec__14444,(1),null);var b = cljs.core.nth.call(null,vec__14444,(2),null);var a = cljs.core.nth.call(null,vec__14444,(3),null);var proj_14460 = (function (){var G__14445 = (new THREE.Matrix4());G__14445.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__14445;
})();var tras_14461 = (function (){var G__14446 = (new THREE.Matrix4());G__14446.makeTranslation(x,y,(0));
G__14446.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__14446.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__14446;
})();var texTx_14462 = (function (){var G__14447 = (new THREE.Matrix3());return G__14447;
})();var colorTx_14463 = (function (){var G__14448 = (new THREE.Matrix4());G__14448.makeTranslation(r,g,b);
return G__14448;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_14460.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_14461.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_14459,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_14462.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_14463.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__14464 = seq__14437;
var G__14465 = chunk__14438;
var G__14466 = count__14439;
var G__14467 = (i__14440 + (1));
seq__14437 = G__14464;
chunk__14438 = G__14465;
count__14439 = G__14466;
i__14440 = G__14467;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14437);if(temp__4126__auto__)
{var seq__14437__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14437__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14437__$1);{
var G__14468 = cljs.core.chunk_rest.call(null,seq__14437__$1);
var G__14469 = c__4307__auto__;
var G__14470 = cljs.core.count.call(null,c__4307__auto__);
var G__14471 = (0);
seq__14437 = G__14468;
chunk__14438 = G__14469;
count__14439 = G__14470;
i__14440 = G__14471;
continue;
}
} else
{var map__14449 = cljs.core.first.call(null,seq__14437__$1);var map__14449__$1 = ((cljs.core.seq_QMARK_.call(null,map__14449))?cljs.core.apply.call(null,cljs.core.hash_map,map__14449):map__14449);var p = map__14449__$1;var vec__14450 = cljs.core.get.call(null,map__14449__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__14450,(0),null);var y = cljs.core.nth.call(null,vec__14450,(1),null);var rot = cljs.core.nth.call(null,vec__14450,(2),null);var vec__14451 = cljs.core.get.call(null,map__14449__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__14451,(0),null);var ys = cljs.core.nth.call(null,vec__14451,(1),null);var vec__14452 = cljs.core.get.call(null,map__14449__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__14452,(0),null);var g = cljs.core.nth.call(null,vec__14452,(1),null);var b = cljs.core.nth.call(null,vec__14452,(2),null);var a = cljs.core.nth.call(null,vec__14452,(3),null);var proj_14472 = (function (){var G__14453 = (new THREE.Matrix4());G__14453.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__14453;
})();var tras_14473 = (function (){var G__14454 = (new THREE.Matrix4());G__14454.makeTranslation(x,y,(0));
G__14454.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__14454.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__14454;
})();var texTx_14474 = (function (){var G__14455 = (new THREE.Matrix3());return G__14455;
})();var colorTx_14475 = (function (){var G__14456 = (new THREE.Matrix4());G__14456.makeTranslation(r,g,b);
return G__14456;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_14472.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_14473.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_14459,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_14474.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_14475.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__14476 = cljs.core.next.call(null,seq__14437__$1);
var G__14477 = null;
var G__14478 = (0);
var G__14479 = (0);
seq__14437 = G__14476;
chunk__14438 = G__14477;
count__14439 = G__14478;
i__14440 = G__14479;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_14459,faceImg_14458,temp__4130__auto___14457,map__14435,map__14435__$1,ctx,timer,map__14436,map__14436__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__14431,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__14431,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_14726){var state_val_14727 = (state_14726[(1)]);if((state_val_14727 === (2)))
{var inst_14724 = (state_14726[(2)]);var state_14726__$1 = state_14726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14726__$1,inst_14724);
} else
{if((state_val_14727 === (1)))
{var state_14726__$1 = state_14726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14726__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14731 = [null,null,null,null,null,null,null];(statearr_14731[(0)] = state_machine__6188__auto__);
(statearr_14731[(1)] = (1));
return statearr_14731;
});
var state_machine__6188__auto____1 = (function (state_14726){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14726);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14732){if((e14732 instanceof Object))
{var ex__6191__auto__ = e14732;var statearr_14733_14965 = state_14726;(statearr_14733_14965[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14726);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14966 = state_14726;
state_14726 = G__14966;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14726){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_14734 = f__6203__auto__.call(null);(statearr_14734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_14734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___14967 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___14967,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___14967,onView,onModel,onTick,mspf){
return (function (state_14743){var state_val_14744 = (state_14743[(1)]);if((state_val_14744 === (4)))
{var inst_14737 = (state_14743[(2)]);var inst_14738 = common.onModel.onNext(inst_14737);var state_14743__$1 = (function (){var statearr_14745 = state_14743;(statearr_14745[(7)] = inst_14738);
return statearr_14745;
})();var statearr_14746_14968 = state_14743__$1;(statearr_14746_14968[(2)] = null);
(statearr_14746_14968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14744 === (3)))
{var inst_14741 = (state_14743[(2)]);var state_14743__$1 = state_14743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14743__$1,inst_14741);
} else
{if((state_val_14744 === (2)))
{var state_14743__$1 = state_14743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14743__$1,(4),onModel);
} else
{if((state_val_14744 === (1)))
{var state_14743__$1 = state_14743;var statearr_14747_14969 = state_14743__$1;(statearr_14747_14969[(2)] = null);
(statearr_14747_14969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___14967,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___14967,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14751 = [null,null,null,null,null,null,null,null];(statearr_14751[(0)] = state_machine__6188__auto__);
(statearr_14751[(1)] = (1));
return statearr_14751;
});
var state_machine__6188__auto____1 = (function (state_14743){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14752){if((e14752 instanceof Object))
{var ex__6191__auto__ = e14752;var statearr_14753_14970 = state_14743;(statearr_14753_14970[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14971 = state_14743;
state_14743 = G__14971;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14743){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___14967,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_14754 = f__6203__auto__.call(null);(statearr_14754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___14967);
return statearr_14754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___14967,onView,onModel,onTick,mspf))
);
var c__6202__auto___14972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___14972,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___14972,onView,onModel,onTick,mspf){
return (function (state_14773){var state_val_14774 = (state_14773[(1)]);if((state_val_14774 === (5)))
{var inst_14764 = (state_14773[(7)]);var inst_14757 = (state_14773[(8)]);var inst_14768 = (state_14773[(2)]);var tmp14775 = inst_14757;var inst_14757__$1 = tmp14775;var inst_14758 = inst_14764;var state_14773__$1 = (function (){var statearr_14776 = state_14773;(statearr_14776[(9)] = inst_14758);
(statearr_14776[(8)] = inst_14757__$1);
(statearr_14776[(10)] = inst_14768);
return statearr_14776;
})();var statearr_14777_14973 = state_14773__$1;(statearr_14777_14973[(2)] = null);
(statearr_14777_14973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14774 === (4)))
{var inst_14758 = (state_14773[(9)]);var inst_14764 = (state_14773[(7)]);var inst_14762 = (state_14773[(2)]);var inst_14763 = (new Date());var inst_14764__$1 = inst_14763.getTime();var inst_14765 = (inst_14764__$1 - inst_14758);var inst_14766 = (inst_14765 / (1000));var state_14773__$1 = (function (){var statearr_14778 = state_14773;(statearr_14778[(11)] = inst_14762);
(statearr_14778[(7)] = inst_14764__$1);
return statearr_14778;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14773__$1,(5),onTick,inst_14766);
} else
{if((state_val_14774 === (3)))
{var inst_14771 = (state_14773[(2)]);var state_14773__$1 = state_14773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14773__$1,inst_14771);
} else
{if((state_val_14774 === (2)))
{var inst_14757 = (state_14773[(8)]);var inst_14760 = cljs.core.async.timeout.call(null,inst_14757);var state_14773__$1 = state_14773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14773__$1,(4),inst_14760);
} else
{if((state_val_14774 === (1)))
{var inst_14755 = (new Date());var inst_14756 = inst_14755.getTime();var inst_14757 = mspf;var inst_14758 = inst_14756;var state_14773__$1 = (function (){var statearr_14779 = state_14773;(statearr_14779[(9)] = inst_14758);
(statearr_14779[(8)] = inst_14757);
return statearr_14779;
})();var statearr_14780_14974 = state_14773__$1;(statearr_14780_14974[(2)] = null);
(statearr_14780_14974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___14972,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___14972,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14784 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14784[(0)] = state_machine__6188__auto__);
(statearr_14784[(1)] = (1));
return statearr_14784;
});
var state_machine__6188__auto____1 = (function (state_14773){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14773);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14785){if((e14785 instanceof Object))
{var ex__6191__auto__ = e14785;var statearr_14786_14975 = state_14773;(statearr_14786_14975[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14976 = state_14773;
state_14773 = G__14976;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14773){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___14972,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_14787 = f__6203__auto__.call(null);(statearr_14787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___14972);
return statearr_14787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___14972,onView,onModel,onTick,mspf))
);
var c__6202__auto___14977 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___14977,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___14977,onView,onModel,onTick,mspf){
return (function (state_14821){var state_val_14822 = (state_14821[(1)]);if((state_val_14822 === (5)))
{var inst_14819 = (state_14821[(2)]);var state_14821__$1 = state_14821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14821__$1,inst_14819);
} else
{if((state_val_14822 === (4)))
{var inst_14800 = (state_14821[(2)]);var inst_14807 = [(0),(0),(0)];var inst_14808 = [(10),(20)];var inst_14809 = [(100),(0),3.14];var inst_14810 = {"position":inst_14807,"size":inst_14808,"vel":inst_14809};var inst_14811 = [inst_14810];var inst_14812 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_14811};var inst_14813 = [(30),(10)];var inst_14814 = [(300),(300),(0)];var inst_14815 = [(100),(100),(0)];var inst_14816 = {"id":"x1","emit":inst_14812,"size":inst_14813,"pos":inst_14814,"vel":inst_14815};var inst_14817 = ["edit-particle",inst_14816];var state_14821__$1 = (function (){var statearr_14823 = state_14821;(statearr_14823[(7)] = inst_14800);
return statearr_14823;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14821__$1,(5),onView,inst_14817);
} else
{if((state_val_14822 === (3)))
{var inst_14797 = (state_14821[(2)]);var inst_14798 = cljs.core.async.timeout.call(null,(1100));var state_14821__$1 = (function (){var statearr_14824 = state_14821;(statearr_14824[(8)] = inst_14797);
return statearr_14824;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14821__$1,(4),inst_14798);
} else
{if((state_val_14822 === (2)))
{var inst_14790 = (state_14821[(2)]);var inst_14793 = [(300),(300),(0)];var inst_14794 = {"id":"x1","pos":inst_14793};var inst_14795 = ["edit-particle",inst_14794];var state_14821__$1 = (function (){var statearr_14825 = state_14821;(statearr_14825[(9)] = inst_14790);
return statearr_14825;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14821__$1,(3),onView,inst_14795);
} else
{if((state_val_14822 === (1)))
{var inst_14788 = cljs.core.async.timeout.call(null,(1000));var state_14821__$1 = state_14821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14821__$1,(2),inst_14788);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___14977,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___14977,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14829 = [null,null,null,null,null,null,null,null,null,null];(statearr_14829[(0)] = state_machine__6188__auto__);
(statearr_14829[(1)] = (1));
return statearr_14829;
});
var state_machine__6188__auto____1 = (function (state_14821){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14821);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14830){if((e14830 instanceof Object))
{var ex__6191__auto__ = e14830;var statearr_14831_14978 = state_14821;(statearr_14831_14978[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14979 = state_14821;
state_14821 = G__14979;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14821){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___14977,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_14832 = f__6203__auto__.call(null);(statearr_14832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___14977);
return statearr_14832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___14977,onView,onModel,onTick,mspf))
);
var c__6202__auto___14980 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___14980,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___14980,onView,onModel,onTick,mspf){
return (function (state_14925){var state_val_14926 = (state_14925[(1)]);if((state_val_14926 === (7)))
{var inst_14920 = (state_14925[(2)]);var inst_14840 = inst_14920;var state_14925__$1 = (function (){var statearr_14927 = state_14925;(statearr_14927[(7)] = inst_14840);
return statearr_14927;
})();var statearr_14928_14981 = state_14925__$1;(statearr_14928_14981[(2)] = null);
(statearr_14928_14981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (20)))
{var inst_14840 = (state_14925[(7)]);var state_14925__$1 = state_14925;var statearr_14929_14982 = state_14925__$1;(statearr_14929_14982[(2)] = inst_14840);
(statearr_14929_14982[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (1)))
{var inst_14833 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_14834 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_14835 = cljs.core.List.EMPTY;var inst_14836 = [inst_14835];var inst_14837 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14834,inst_14836);var inst_14838 = [(0),inst_14837];var inst_14839 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14833,inst_14838);var inst_14840 = inst_14839;var state_14925__$1 = (function (){var statearr_14930 = state_14925;(statearr_14930[(7)] = inst_14840);
return statearr_14930;
})();var statearr_14931_14983 = state_14925__$1;(statearr_14931_14983[(2)] = null);
(statearr_14931_14983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (4)))
{var inst_14846 = (state_14925[(8)]);var inst_14848 = (state_14925[(9)]);var inst_14846__$1 = (state_14925[(2)]);var inst_14847 = cljs.core.nth.call(null,inst_14846__$1,(0),null);var inst_14848__$1 = cljs.core.nth.call(null,inst_14846__$1,(1),null);var inst_14852 = cljs.core._EQ_.call(null,onTick,inst_14848__$1);var state_14925__$1 = (function (){var statearr_14932 = state_14925;(statearr_14932[(10)] = inst_14847);
(statearr_14932[(8)] = inst_14846__$1);
(statearr_14932[(9)] = inst_14848__$1);
return statearr_14932;
})();if(inst_14852)
{var statearr_14933_14984 = state_14925__$1;(statearr_14933_14984[(1)] = (5));
} else
{var statearr_14934_14985 = state_14925__$1;(statearr_14934_14985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (15)))
{var inst_14840 = (state_14925[(7)]);var inst_14875 = (state_14925[(11)]);var inst_14892 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_14893 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14892,null));var inst_14894 = cljs.core.update_in.call(null,inst_14840,inst_14893,cljs.core.conj,inst_14875);var state_14925__$1 = state_14925;var statearr_14935_14986 = state_14925__$1;(statearr_14935_14986[(2)] = inst_14894);
(statearr_14935_14986[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (21)))
{var inst_14848 = (state_14925[(9)]);var inst_14912 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14848));var inst_14913 = (new Error(inst_14912));var inst_14914 = (function(){throw inst_14913})();var state_14925__$1 = state_14925;var statearr_14936_14987 = state_14925__$1;(statearr_14936_14987[(2)] = inst_14914);
(statearr_14936_14987[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (13)))
{var inst_14907 = (state_14925[(2)]);var state_14925__$1 = state_14925;var statearr_14937_14988 = state_14925__$1;(statearr_14937_14988[(2)] = inst_14907);
(statearr_14937_14988[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (22)))
{var inst_14916 = (state_14925[(2)]);var state_14925__$1 = state_14925;var statearr_14938_14989 = state_14925__$1;(statearr_14938_14989[(2)] = inst_14916);
(statearr_14938_14989[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (6)))
{var inst_14848 = (state_14925[(9)]);var inst_14860 = cljs.core._EQ_.call(null,onView,inst_14848);var state_14925__$1 = state_14925;if(inst_14860)
{var statearr_14939_14990 = state_14925__$1;(statearr_14939_14990[(1)] = (8));
} else
{var statearr_14940_14991 = state_14925__$1;(statearr_14940_14991[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (17)))
{var inst_14840 = (state_14925[(7)]);var state_14925__$1 = state_14925;var statearr_14941_14992 = state_14925__$1;(statearr_14941_14992[(2)] = inst_14840);
(statearr_14941_14992[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (3)))
{var inst_14923 = (state_14925[(2)]);var state_14925__$1 = state_14925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14925__$1,inst_14923);
} else
{if((state_val_14926 === (12)))
{var inst_14862 = (state_14925[(12)]);var inst_14898 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_14862);var state_14925__$1 = state_14925;if(inst_14898)
{var statearr_14942_14993 = state_14925__$1;(statearr_14942_14993[(1)] = (17));
} else
{var statearr_14943_14994 = state_14925__$1;(statearr_14943_14994[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (2)))
{var inst_14843 = [onView,onTick];var inst_14844 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14843,null));var state_14925__$1 = state_14925;return cljs.core.async.ioc_alts_BANG_.call(null,state_14925__$1,(4),inst_14844);
} else
{if((state_val_14926 === (19)))
{var inst_14905 = (state_14925[(2)]);var state_14925__$1 = state_14925;var statearr_14944_14995 = state_14925__$1;(statearr_14944_14995[(2)] = inst_14905);
(statearr_14944_14995[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (11)))
{var inst_14847 = (state_14925[(10)]);var inst_14840 = (state_14925[(7)]);var inst_14846 = (state_14925[(8)]);var inst_14862 = (state_14925[(12)]);var inst_14848 = (state_14925[(9)]);var inst_14863 = (state_14925[(13)]);var inst_14874 = (state_14925[(14)]);var inst_14869 = (function (){var expr__14850 = inst_14848;var ctx = inst_14840;var expr__14865 = inst_14862;var vec__14842 = inst_14846;var partInfo = inst_14863;var v = inst_14847;var params = inst_14863;var pred__14849 = cljs.core._EQ_;var ch = inst_14848;var event = inst_14862;var pred__14864 = cljs.core._EQ_;return ((function (expr__14850,ctx,expr__14865,vec__14842,partInfo,v,params,pred__14849,ch,event,pred__14864,inst_14847,inst_14840,inst_14846,inst_14862,inst_14848,inst_14863,inst_14874,state_val_14926,c__6202__auto___14980,onView,onModel,onTick,mspf){
return (function (p1__14480_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14480_SHARP_),partInfo.id);
});
;})(expr__14850,ctx,expr__14865,vec__14842,partInfo,v,params,pred__14849,ch,event,pred__14864,inst_14847,inst_14840,inst_14846,inst_14862,inst_14848,inst_14863,inst_14874,state_val_14926,c__6202__auto___14980,onView,onModel,onTick,mspf))
})();var inst_14870 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_14871 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14870,null));var inst_14872 = cljs.core.get_in.call(null,inst_14840,inst_14871);var inst_14873 = cljs.core.filter.call(null,inst_14869,inst_14872);var inst_14874__$1 = cljs.core.first.call(null,inst_14873);var inst_14875 = app.particle.jsobj__GT_particle.call(null,inst_14863);var inst_14876 = cljs.core.some_QMARK_.call(null,inst_14874__$1);var state_14925__$1 = (function (){var statearr_14945 = state_14925;(statearr_14945[(11)] = inst_14875);
(statearr_14945[(14)] = inst_14874__$1);
return statearr_14945;
})();if(inst_14876)
{var statearr_14946_14996 = state_14925__$1;(statearr_14946_14996[(1)] = (14));
} else
{var statearr_14947_14997 = state_14925__$1;(statearr_14947_14997[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (9)))
{var inst_14848 = (state_14925[(9)]);var inst_14909 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_14848);var state_14925__$1 = state_14925;if(inst_14909)
{var statearr_14948_14998 = state_14925__$1;(statearr_14948_14998[(1)] = (20));
} else
{var statearr_14949_14999 = state_14925__$1;(statearr_14949_14999[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (5)))
{var inst_14847 = (state_14925[(10)]);var inst_14840 = (state_14925[(7)]);var inst_14854 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_14855 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14854,null));var inst_14856 = cljs.core.partial.call(null,app.particle.update,inst_14847);var inst_14857 = cljs.core.update_in.call(null,inst_14840,inst_14855,inst_14856);var inst_14858 = app.main2.draw2D.call(null,inst_14857);var state_14925__$1 = state_14925;var statearr_14950_15000 = state_14925__$1;(statearr_14950_15000[(2)] = inst_14858);
(statearr_14950_15000[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (14)))
{var inst_14840 = (state_14925[(7)]);var inst_14875 = (state_14925[(11)]);var inst_14874 = (state_14925[(14)]);var inst_14878 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_14879 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14878,null));var inst_14880 = [inst_14874];var inst_14881 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_14882 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_14874);var inst_14883 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_14874);var inst_14884 = [inst_14882,inst_14883];var inst_14885 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14881,inst_14884);var inst_14886 = cljs.core.merge.call(null,inst_14875,inst_14885);var inst_14887 = [inst_14886];var inst_14888 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14880,inst_14887);var inst_14889 = cljs.core.partial.call(null,cljs.core.replace,inst_14888);var inst_14890 = cljs.core.update_in.call(null,inst_14840,inst_14879,inst_14889);var state_14925__$1 = state_14925;var statearr_14951_15001 = state_14925__$1;(statearr_14951_15001[(2)] = inst_14890);
(statearr_14951_15001[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (16)))
{var inst_14896 = (state_14925[(2)]);var state_14925__$1 = state_14925;var statearr_14952_15002 = state_14925__$1;(statearr_14952_15002[(2)] = inst_14896);
(statearr_14952_15002[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (10)))
{var inst_14918 = (state_14925[(2)]);var state_14925__$1 = state_14925;var statearr_14953_15003 = state_14925__$1;(statearr_14953_15003[(2)] = inst_14918);
(statearr_14953_15003[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (18)))
{var inst_14862 = (state_14925[(12)]);var inst_14901 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14862));var inst_14902 = (new Error(inst_14901));var inst_14903 = (function(){throw inst_14902})();var state_14925__$1 = state_14925;var statearr_14954_15004 = state_14925__$1;(statearr_14954_15004[(2)] = inst_14903);
(statearr_14954_15004[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14926 === (8)))
{var inst_14847 = (state_14925[(10)]);var inst_14862 = (state_14925[(12)]);var inst_14862__$1 = (inst_14847[(0)]);var inst_14863 = (inst_14847[(1)]);var inst_14867 = cljs.core._EQ_.call(null,"edit-particle",inst_14862__$1);var state_14925__$1 = (function (){var statearr_14955 = state_14925;(statearr_14955[(12)] = inst_14862__$1);
(statearr_14955[(13)] = inst_14863);
return statearr_14955;
})();if(inst_14867)
{var statearr_14956_15005 = state_14925__$1;(statearr_14956_15005[(1)] = (11));
} else
{var statearr_14957_15006 = state_14925__$1;(statearr_14957_15006[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___14980,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___14980,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14961[(0)] = state_machine__6188__auto__);
(statearr_14961[(1)] = (1));
return statearr_14961;
});
var state_machine__6188__auto____1 = (function (state_14925){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14925);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14962){if((e14962 instanceof Object))
{var ex__6191__auto__ = e14962;var statearr_14963_15007 = state_14925;(statearr_14963_15007[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15008 = state_14925;
state_14925 = G__15008;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14925){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___14980,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_14964 = f__6203__auto__.call(null);(statearr_14964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___14980);
return statearr_14964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___14980,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
