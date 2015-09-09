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
return (function (p__20396){var map__20397 = p__20396;var map__20397__$1 = ((cljs.core.seq_QMARK_.call(null,map__20397))?cljs.core.apply.call(null,cljs.core.hash_map,map__20397):map__20397);var ctx = map__20397__$1;var map__20398 = cljs.core.get.call(null,map__20397__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__20398__$1 = ((cljs.core.seq_QMARK_.call(null,map__20398))?cljs.core.apply.call(null,cljs.core.hash_map,map__20398):map__20398);var ps = cljs.core.get.call(null,map__20398__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__20399_20414 = canvas_ctx;(G__20399_20414["fillStyle"] = "white");
G__20399_20414.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__20399_20414["fillStyle"] = "red");
G__20399_20414.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__20400_20415 = cljs.core.seq.call(null,ps);var chunk__20401_20416 = null;var count__20402_20417 = (0);var i__20403_20418 = (0);while(true){
if((i__20403_20418 < count__20402_20417))
{var map__20404_20419 = cljs.core._nth.call(null,chunk__20401_20416,i__20403_20418);var map__20404_20420__$1 = ((cljs.core.seq_QMARK_.call(null,map__20404_20419))?cljs.core.apply.call(null,cljs.core.hash_map,map__20404_20419):map__20404_20419);var p_20421 = map__20404_20420__$1;var vec__20405_20422 = cljs.core.get.call(null,map__20404_20420__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_20423 = cljs.core.nth.call(null,vec__20405_20422,(0),null);var y_20424 = cljs.core.nth.call(null,vec__20405_20422,(1),null);var rot_20425 = cljs.core.nth.call(null,vec__20405_20422,(2),null);var vec__20406_20426 = cljs.core.get.call(null,map__20404_20420__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_20427 = cljs.core.nth.call(null,vec__20406_20426,(0),null);var ys_20428 = cljs.core.nth.call(null,vec__20406_20426,(1),null);var vec__20407_20429 = cljs.core.get.call(null,map__20404_20420__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_20430 = cljs.core.nth.call(null,vec__20407_20429,(0),null);var g_20431 = cljs.core.nth.call(null,vec__20407_20429,(1),null);var b_20432 = cljs.core.nth.call(null,vec__20407_20429,(2),null);var a_20433 = cljs.core.nth.call(null,vec__20407_20429,(3),null);var G__20408_20434 = canvas_ctx;G__20408_20434.save();
G__20408_20434.translate(x_20423,y_20424);
G__20408_20434.rotate(rot_20425);
(G__20408_20434["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_20430 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_20431 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_20432 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_20433)+")"));
G__20408_20434.fillRect((- (xs_20427 / (2))),(- (ys_20428 / (2))),xs_20427,ys_20428);
G__20408_20434.restore();
{
var G__20435 = seq__20400_20415;
var G__20436 = chunk__20401_20416;
var G__20437 = count__20402_20417;
var G__20438 = (i__20403_20418 + (1));
seq__20400_20415 = G__20435;
chunk__20401_20416 = G__20436;
count__20402_20417 = G__20437;
i__20403_20418 = G__20438;
continue;
}
} else
{var temp__4126__auto___20439 = cljs.core.seq.call(null,seq__20400_20415);if(temp__4126__auto___20439)
{var seq__20400_20440__$1 = temp__4126__auto___20439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20400_20440__$1))
{var c__4307__auto___20441 = cljs.core.chunk_first.call(null,seq__20400_20440__$1);{
var G__20442 = cljs.core.chunk_rest.call(null,seq__20400_20440__$1);
var G__20443 = c__4307__auto___20441;
var G__20444 = cljs.core.count.call(null,c__4307__auto___20441);
var G__20445 = (0);
seq__20400_20415 = G__20442;
chunk__20401_20416 = G__20443;
count__20402_20417 = G__20444;
i__20403_20418 = G__20445;
continue;
}
} else
{var map__20409_20446 = cljs.core.first.call(null,seq__20400_20440__$1);var map__20409_20447__$1 = ((cljs.core.seq_QMARK_.call(null,map__20409_20446))?cljs.core.apply.call(null,cljs.core.hash_map,map__20409_20446):map__20409_20446);var p_20448 = map__20409_20447__$1;var vec__20410_20449 = cljs.core.get.call(null,map__20409_20447__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_20450 = cljs.core.nth.call(null,vec__20410_20449,(0),null);var y_20451 = cljs.core.nth.call(null,vec__20410_20449,(1),null);var rot_20452 = cljs.core.nth.call(null,vec__20410_20449,(2),null);var vec__20411_20453 = cljs.core.get.call(null,map__20409_20447__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_20454 = cljs.core.nth.call(null,vec__20411_20453,(0),null);var ys_20455 = cljs.core.nth.call(null,vec__20411_20453,(1),null);var vec__20412_20456 = cljs.core.get.call(null,map__20409_20447__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_20457 = cljs.core.nth.call(null,vec__20412_20456,(0),null);var g_20458 = cljs.core.nth.call(null,vec__20412_20456,(1),null);var b_20459 = cljs.core.nth.call(null,vec__20412_20456,(2),null);var a_20460 = cljs.core.nth.call(null,vec__20412_20456,(3),null);var G__20413_20461 = canvas_ctx;G__20413_20461.save();
G__20413_20461.translate(x_20450,y_20451);
G__20413_20461.rotate(rot_20452);
(G__20413_20461["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_20457 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_20458 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_20459 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_20460)+")"));
G__20413_20461.fillRect((- (xs_20454 / (2))),(- (ys_20455 / (2))),xs_20454,ys_20455);
G__20413_20461.restore();
{
var G__20462 = cljs.core.next.call(null,seq__20400_20440__$1);
var G__20463 = null;
var G__20464 = (0);
var G__20465 = (0);
seq__20400_20415 = G__20462;
chunk__20401_20416 = G__20463;
count__20402_20417 = G__20464;
i__20403_20418 = G__20465;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__20501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__20501,(0),null);var ch = cljs.core.nth.call(null,vec__20501,(1),null);var proj = (function (){var G__20502 = (new THREE.Matrix4());G__20502.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__20502;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__20501,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__20503){var map__20504 = p__20503;var map__20504__$1 = ((cljs.core.seq_QMARK_.call(null,map__20504))?cljs.core.apply.call(null,cljs.core.hash_map,map__20504):map__20504);var ctx = map__20504__$1;var vec__20505 = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__20505,(0),null);var cy = cljs.core.nth.call(null,vec__20505,(1),null);var vec__20506 = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__20506,(0),null);var bg = cljs.core.nth.call(null,vec__20506,(1),null);var bb = cljs.core.nth.call(null,vec__20506,(2),null);var map__20507 = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__20507__$1 = ((cljs.core.seq_QMARK_.call(null,map__20507))?cljs.core.apply.call(null,cljs.core.hash_map,map__20507):map__20507);var ps = cljs.core.get.call(null,map__20507__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__20504,map__20504__$1,ctx,vec__20505,cx,cy,vec__20506,br,bg,bb,map__20507,map__20507__$1,ps,canvas_dom,mesh,sprite_shader,vec__20501,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__20508 = cljs.core.seq.call(null,ps);var chunk__20509 = null;var count__20510 = (0);var i__20511 = (0);while(true){
if((i__20511 < count__20510))
{var map__20512 = cljs.core._nth.call(null,chunk__20509,i__20511);var map__20512__$1 = ((cljs.core.seq_QMARK_.call(null,map__20512))?cljs.core.apply.call(null,cljs.core.hash_map,map__20512):map__20512);var p = map__20512__$1;var vec__20513 = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__20513,(0),null);var y = cljs.core.nth.call(null,vec__20513,(1),null);var rot = cljs.core.nth.call(null,vec__20513,(2),null);var vec__20514 = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__20514,(0),null);var ys = cljs.core.nth.call(null,vec__20514,(1),null);var vec__20515 = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__20515,(0),null);var g = cljs.core.nth.call(null,vec__20515,(1),null);var b = cljs.core.nth.call(null,vec__20515,(2),null);var a = cljs.core.nth.call(null,vec__20515,(3),null);var tex = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_20536 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__20516_20537 = rotMat;G__20516_20537.makeRotationZ(rot);
var G__20517_20538 = scaleMat;G__20517_20538.makeScale(xs,ys,(1));
var G__20518_20539 = tras;G__20518_20539.makeTranslation((cx + x),(cy + y),(0));
G__20518_20539.multiply(rotMat);
G__20518_20539.multiply(scaleMat);
var G__20519_20540 = colorTx;G__20519_20540.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__20520 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__20520__$1 = (cljs.core.truth_(texObj_20536)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_20536,(0)], null)], null),G__20520):G__20520);return G__20520__$1;
})());
if(cljs.core.truth_(texObj_20536))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__20521_20541 = cljs.core._EQ_;var expr__20522_20542 = blending;if(cljs.core.truth_(pred__20521_20541.call(null,"normal",expr__20522_20542)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__20521_20541.call(null,"add",expr__20522_20542)))
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
var G__20543 = seq__20508;
var G__20544 = chunk__20509;
var G__20545 = count__20510;
var G__20546 = (i__20511 + (1));
seq__20508 = G__20543;
chunk__20509 = G__20544;
count__20510 = G__20545;
i__20511 = G__20546;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20508);if(temp__4126__auto__)
{var seq__20508__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20508__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__20508__$1);{
var G__20547 = cljs.core.chunk_rest.call(null,seq__20508__$1);
var G__20548 = c__4307__auto__;
var G__20549 = cljs.core.count.call(null,c__4307__auto__);
var G__20550 = (0);
seq__20508 = G__20547;
chunk__20509 = G__20548;
count__20510 = G__20549;
i__20511 = G__20550;
continue;
}
} else
{var map__20524 = cljs.core.first.call(null,seq__20508__$1);var map__20524__$1 = ((cljs.core.seq_QMARK_.call(null,map__20524))?cljs.core.apply.call(null,cljs.core.hash_map,map__20524):map__20524);var p = map__20524__$1;var vec__20525 = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__20525,(0),null);var y = cljs.core.nth.call(null,vec__20525,(1),null);var rot = cljs.core.nth.call(null,vec__20525,(2),null);var vec__20526 = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__20526,(0),null);var ys = cljs.core.nth.call(null,vec__20526,(1),null);var vec__20527 = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__20527,(0),null);var g = cljs.core.nth.call(null,vec__20527,(1),null);var b = cljs.core.nth.call(null,vec__20527,(2),null);var a = cljs.core.nth.call(null,vec__20527,(3),null);var tex = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_20551 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__20528_20552 = rotMat;G__20528_20552.makeRotationZ(rot);
var G__20529_20553 = scaleMat;G__20529_20553.makeScale(xs,ys,(1));
var G__20530_20554 = tras;G__20530_20554.makeTranslation((cx + x),(cy + y),(0));
G__20530_20554.multiply(rotMat);
G__20530_20554.multiply(scaleMat);
var G__20531_20555 = colorTx;G__20531_20555.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__20532 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__20532__$1 = (cljs.core.truth_(texObj_20551)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_20551,(0)], null)], null),G__20532):G__20532);return G__20532__$1;
})());
if(cljs.core.truth_(texObj_20551))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__20533_20556 = cljs.core._EQ_;var expr__20534_20557 = blending;if(cljs.core.truth_(pred__20533_20556.call(null,"normal",expr__20534_20557)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__20533_20556.call(null,"add",expr__20534_20557)))
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
var G__20558 = cljs.core.next.call(null,seq__20508__$1);
var G__20559 = null;
var G__20560 = (0);
var G__20561 = (0);
seq__20508 = G__20558;
chunk__20509 = G__20559;
count__20510 = G__20560;
i__20511 = G__20561;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__20504,map__20504__$1,ctx,vec__20505,cx,cy,vec__20506,br,bg,bb,map__20507,map__20507__$1,ps,canvas_dom,mesh,sprite_shader,vec__20501,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__20501,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
