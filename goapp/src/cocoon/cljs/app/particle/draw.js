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
return (function (p__50355){var map__50356 = p__50355;var map__50356__$1 = ((cljs.core.seq_QMARK_.call(null,map__50356))?cljs.core.apply.call(null,cljs.core.hash_map,map__50356):map__50356);var ctx = map__50356__$1;var map__50357 = cljs.core.get.call(null,map__50356__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__50357__$1 = ((cljs.core.seq_QMARK_.call(null,map__50357))?cljs.core.apply.call(null,cljs.core.hash_map,map__50357):map__50357);var ps = cljs.core.get.call(null,map__50357__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__50358_50373 = canvas_ctx;(G__50358_50373["fillStyle"] = "white");
G__50358_50373.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__50358_50373["fillStyle"] = "red");
G__50358_50373.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__50359_50374 = cljs.core.seq.call(null,ps);var chunk__50360_50375 = null;var count__50361_50376 = (0);var i__50362_50377 = (0);while(true){
if((i__50362_50377 < count__50361_50376))
{var map__50363_50378 = cljs.core._nth.call(null,chunk__50360_50375,i__50362_50377);var map__50363_50379__$1 = ((cljs.core.seq_QMARK_.call(null,map__50363_50378))?cljs.core.apply.call(null,cljs.core.hash_map,map__50363_50378):map__50363_50378);var p_50380 = map__50363_50379__$1;var vec__50364_50381 = cljs.core.get.call(null,map__50363_50379__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_50382 = cljs.core.nth.call(null,vec__50364_50381,(0),null);var y_50383 = cljs.core.nth.call(null,vec__50364_50381,(1),null);var rot_50384 = cljs.core.nth.call(null,vec__50364_50381,(2),null);var vec__50365_50385 = cljs.core.get.call(null,map__50363_50379__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_50386 = cljs.core.nth.call(null,vec__50365_50385,(0),null);var ys_50387 = cljs.core.nth.call(null,vec__50365_50385,(1),null);var vec__50366_50388 = cljs.core.get.call(null,map__50363_50379__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_50389 = cljs.core.nth.call(null,vec__50366_50388,(0),null);var g_50390 = cljs.core.nth.call(null,vec__50366_50388,(1),null);var b_50391 = cljs.core.nth.call(null,vec__50366_50388,(2),null);var a_50392 = cljs.core.nth.call(null,vec__50366_50388,(3),null);var G__50367_50393 = canvas_ctx;G__50367_50393.save();
G__50367_50393.translate(x_50382,y_50383);
G__50367_50393.rotate(rot_50384);
(G__50367_50393["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_50389 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_50390 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_50391 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_50392)+")"));
G__50367_50393.fillRect((- (xs_50386 / (2))),(- (ys_50387 / (2))),xs_50386,ys_50387);
G__50367_50393.restore();
{
var G__50394 = seq__50359_50374;
var G__50395 = chunk__50360_50375;
var G__50396 = count__50361_50376;
var G__50397 = (i__50362_50377 + (1));
seq__50359_50374 = G__50394;
chunk__50360_50375 = G__50395;
count__50361_50376 = G__50396;
i__50362_50377 = G__50397;
continue;
}
} else
{var temp__4126__auto___50398 = cljs.core.seq.call(null,seq__50359_50374);if(temp__4126__auto___50398)
{var seq__50359_50399__$1 = temp__4126__auto___50398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50359_50399__$1))
{var c__4307__auto___50400 = cljs.core.chunk_first.call(null,seq__50359_50399__$1);{
var G__50401 = cljs.core.chunk_rest.call(null,seq__50359_50399__$1);
var G__50402 = c__4307__auto___50400;
var G__50403 = cljs.core.count.call(null,c__4307__auto___50400);
var G__50404 = (0);
seq__50359_50374 = G__50401;
chunk__50360_50375 = G__50402;
count__50361_50376 = G__50403;
i__50362_50377 = G__50404;
continue;
}
} else
{var map__50368_50405 = cljs.core.first.call(null,seq__50359_50399__$1);var map__50368_50406__$1 = ((cljs.core.seq_QMARK_.call(null,map__50368_50405))?cljs.core.apply.call(null,cljs.core.hash_map,map__50368_50405):map__50368_50405);var p_50407 = map__50368_50406__$1;var vec__50369_50408 = cljs.core.get.call(null,map__50368_50406__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_50409 = cljs.core.nth.call(null,vec__50369_50408,(0),null);var y_50410 = cljs.core.nth.call(null,vec__50369_50408,(1),null);var rot_50411 = cljs.core.nth.call(null,vec__50369_50408,(2),null);var vec__50370_50412 = cljs.core.get.call(null,map__50368_50406__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_50413 = cljs.core.nth.call(null,vec__50370_50412,(0),null);var ys_50414 = cljs.core.nth.call(null,vec__50370_50412,(1),null);var vec__50371_50415 = cljs.core.get.call(null,map__50368_50406__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_50416 = cljs.core.nth.call(null,vec__50371_50415,(0),null);var g_50417 = cljs.core.nth.call(null,vec__50371_50415,(1),null);var b_50418 = cljs.core.nth.call(null,vec__50371_50415,(2),null);var a_50419 = cljs.core.nth.call(null,vec__50371_50415,(3),null);var G__50372_50420 = canvas_ctx;G__50372_50420.save();
G__50372_50420.translate(x_50409,y_50410);
G__50372_50420.rotate(rot_50411);
(G__50372_50420["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_50416 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_50417 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_50418 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_50419)+")"));
G__50372_50420.fillRect((- (xs_50413 / (2))),(- (ys_50414 / (2))),xs_50413,ys_50414);
G__50372_50420.restore();
{
var G__50421 = cljs.core.next.call(null,seq__50359_50399__$1);
var G__50422 = null;
var G__50423 = (0);
var G__50424 = (0);
seq__50359_50374 = G__50421;
chunk__50360_50375 = G__50422;
count__50361_50376 = G__50423;
i__50362_50377 = G__50424;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__50460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__50460,(0),null);var ch = cljs.core.nth.call(null,vec__50460,(1),null);var proj = (function (){var G__50461 = (new THREE.Matrix4());G__50461.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__50461;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__50460,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__50462){var map__50463 = p__50462;var map__50463__$1 = ((cljs.core.seq_QMARK_.call(null,map__50463))?cljs.core.apply.call(null,cljs.core.hash_map,map__50463):map__50463);var ctx = map__50463__$1;var vec__50464 = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__50464,(0),null);var cy = cljs.core.nth.call(null,vec__50464,(1),null);var vec__50465 = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__50465,(0),null);var bg = cljs.core.nth.call(null,vec__50465,(1),null);var bb = cljs.core.nth.call(null,vec__50465,(2),null);var map__50466 = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__50466__$1 = ((cljs.core.seq_QMARK_.call(null,map__50466))?cljs.core.apply.call(null,cljs.core.hash_map,map__50466):map__50466);var ps = cljs.core.get.call(null,map__50466__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__50463,map__50463__$1,ctx,vec__50464,cx,cy,vec__50465,br,bg,bb,map__50466,map__50466__$1,ps,canvas_dom,mesh,sprite_shader,vec__50460,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__50467 = cljs.core.seq.call(null,ps);var chunk__50468 = null;var count__50469 = (0);var i__50470 = (0);while(true){
if((i__50470 < count__50469))
{var map__50471 = cljs.core._nth.call(null,chunk__50468,i__50470);var map__50471__$1 = ((cljs.core.seq_QMARK_.call(null,map__50471))?cljs.core.apply.call(null,cljs.core.hash_map,map__50471):map__50471);var p = map__50471__$1;var vec__50472 = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__50472,(0),null);var y = cljs.core.nth.call(null,vec__50472,(1),null);var rot = cljs.core.nth.call(null,vec__50472,(2),null);var vec__50473 = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__50473,(0),null);var ys = cljs.core.nth.call(null,vec__50473,(1),null);var vec__50474 = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__50474,(0),null);var g = cljs.core.nth.call(null,vec__50474,(1),null);var b = cljs.core.nth.call(null,vec__50474,(2),null);var a = cljs.core.nth.call(null,vec__50474,(3),null);var tex = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__50471__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_50495 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__50475_50496 = rotMat;G__50475_50496.makeRotationZ(rot);
var G__50476_50497 = scaleMat;G__50476_50497.makeScale(xs,ys,(1));
var G__50477_50498 = tras;G__50477_50498.makeTranslation((cx + x),(cy + y),(0));
G__50477_50498.multiply(rotMat);
G__50477_50498.multiply(scaleMat);
var G__50478_50499 = colorTx;G__50478_50499.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__50479 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__50479__$1 = (cljs.core.truth_(texObj_50495)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_50495,(0)], null)], null),G__50479):G__50479);return G__50479__$1;
})());
if(cljs.core.truth_(texObj_50495))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__50480_50500 = cljs.core._EQ_;var expr__50481_50501 = blending;if(cljs.core.truth_(pred__50480_50500.call(null,"normal",expr__50481_50501)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__50480_50500.call(null,"add",expr__50481_50501)))
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
var G__50502 = seq__50467;
var G__50503 = chunk__50468;
var G__50504 = count__50469;
var G__50505 = (i__50470 + (1));
seq__50467 = G__50502;
chunk__50468 = G__50503;
count__50469 = G__50504;
i__50470 = G__50505;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50467);if(temp__4126__auto__)
{var seq__50467__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50467__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__50467__$1);{
var G__50506 = cljs.core.chunk_rest.call(null,seq__50467__$1);
var G__50507 = c__4307__auto__;
var G__50508 = cljs.core.count.call(null,c__4307__auto__);
var G__50509 = (0);
seq__50467 = G__50506;
chunk__50468 = G__50507;
count__50469 = G__50508;
i__50470 = G__50509;
continue;
}
} else
{var map__50483 = cljs.core.first.call(null,seq__50467__$1);var map__50483__$1 = ((cljs.core.seq_QMARK_.call(null,map__50483))?cljs.core.apply.call(null,cljs.core.hash_map,map__50483):map__50483);var p = map__50483__$1;var vec__50484 = cljs.core.get.call(null,map__50483__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__50484,(0),null);var y = cljs.core.nth.call(null,vec__50484,(1),null);var rot = cljs.core.nth.call(null,vec__50484,(2),null);var vec__50485 = cljs.core.get.call(null,map__50483__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__50485,(0),null);var ys = cljs.core.nth.call(null,vec__50485,(1),null);var vec__50486 = cljs.core.get.call(null,map__50483__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__50486,(0),null);var g = cljs.core.nth.call(null,vec__50486,(1),null);var b = cljs.core.nth.call(null,vec__50486,(2),null);var a = cljs.core.nth.call(null,vec__50486,(3),null);var tex = cljs.core.get.call(null,map__50483__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__50483__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_50510 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__50487_50511 = rotMat;G__50487_50511.makeRotationZ(rot);
var G__50488_50512 = scaleMat;G__50488_50512.makeScale(xs,ys,(1));
var G__50489_50513 = tras;G__50489_50513.makeTranslation((cx + x),(cy + y),(0));
G__50489_50513.multiply(rotMat);
G__50489_50513.multiply(scaleMat);
var G__50490_50514 = colorTx;G__50490_50514.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__50491 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__50491__$1 = (cljs.core.truth_(texObj_50510)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_50510,(0)], null)], null),G__50491):G__50491);return G__50491__$1;
})());
if(cljs.core.truth_(texObj_50510))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__50492_50515 = cljs.core._EQ_;var expr__50493_50516 = blending;if(cljs.core.truth_(pred__50492_50515.call(null,"normal",expr__50493_50516)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__50492_50515.call(null,"add",expr__50493_50516)))
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
var G__50517 = cljs.core.next.call(null,seq__50467__$1);
var G__50518 = null;
var G__50519 = (0);
var G__50520 = (0);
seq__50467 = G__50517;
chunk__50468 = G__50518;
count__50469 = G__50519;
i__50470 = G__50520;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__50463,map__50463__$1,ctx,vec__50464,cx,cy,vec__50465,br,bg,bb,map__50466,map__50466__$1,ps,canvas_dom,mesh,sprite_shader,vec__50460,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__50460,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
