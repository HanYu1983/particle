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
return (function (p__16492){var map__16493 = p__16492;var map__16493__$1 = ((cljs.core.seq_QMARK_.call(null,map__16493))?cljs.core.apply.call(null,cljs.core.hash_map,map__16493):map__16493);var ctx = map__16493__$1;var map__16494 = cljs.core.get.call(null,map__16493__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__16494__$1 = ((cljs.core.seq_QMARK_.call(null,map__16494))?cljs.core.apply.call(null,cljs.core.hash_map,map__16494):map__16494);var ps = cljs.core.get.call(null,map__16494__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__16495_16510 = canvas_ctx;(G__16495_16510["fillStyle"] = "white");
G__16495_16510.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__16495_16510["fillStyle"] = "red");
G__16495_16510.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__16496_16511 = cljs.core.seq.call(null,ps);var chunk__16497_16512 = null;var count__16498_16513 = (0);var i__16499_16514 = (0);while(true){
if((i__16499_16514 < count__16498_16513))
{var map__16500_16515 = cljs.core._nth.call(null,chunk__16497_16512,i__16499_16514);var map__16500_16516__$1 = ((cljs.core.seq_QMARK_.call(null,map__16500_16515))?cljs.core.apply.call(null,cljs.core.hash_map,map__16500_16515):map__16500_16515);var p_16517 = map__16500_16516__$1;var vec__16501_16518 = cljs.core.get.call(null,map__16500_16516__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_16519 = cljs.core.nth.call(null,vec__16501_16518,(0),null);var y_16520 = cljs.core.nth.call(null,vec__16501_16518,(1),null);var rot_16521 = cljs.core.nth.call(null,vec__16501_16518,(2),null);var vec__16502_16522 = cljs.core.get.call(null,map__16500_16516__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_16523 = cljs.core.nth.call(null,vec__16502_16522,(0),null);var ys_16524 = cljs.core.nth.call(null,vec__16502_16522,(1),null);var vec__16503_16525 = cljs.core.get.call(null,map__16500_16516__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_16526 = cljs.core.nth.call(null,vec__16503_16525,(0),null);var g_16527 = cljs.core.nth.call(null,vec__16503_16525,(1),null);var b_16528 = cljs.core.nth.call(null,vec__16503_16525,(2),null);var a_16529 = cljs.core.nth.call(null,vec__16503_16525,(3),null);var G__16504_16530 = canvas_ctx;G__16504_16530.save();
G__16504_16530.translate(x_16519,y_16520);
G__16504_16530.rotate(rot_16521);
(G__16504_16530["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_16526 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_16527 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_16528 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_16529)+")"));
G__16504_16530.fillRect((- (xs_16523 / (2))),(- (ys_16524 / (2))),xs_16523,ys_16524);
G__16504_16530.restore();
{
var G__16531 = seq__16496_16511;
var G__16532 = chunk__16497_16512;
var G__16533 = count__16498_16513;
var G__16534 = (i__16499_16514 + (1));
seq__16496_16511 = G__16531;
chunk__16497_16512 = G__16532;
count__16498_16513 = G__16533;
i__16499_16514 = G__16534;
continue;
}
} else
{var temp__4126__auto___16535 = cljs.core.seq.call(null,seq__16496_16511);if(temp__4126__auto___16535)
{var seq__16496_16536__$1 = temp__4126__auto___16535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16496_16536__$1))
{var c__4307__auto___16537 = cljs.core.chunk_first.call(null,seq__16496_16536__$1);{
var G__16538 = cljs.core.chunk_rest.call(null,seq__16496_16536__$1);
var G__16539 = c__4307__auto___16537;
var G__16540 = cljs.core.count.call(null,c__4307__auto___16537);
var G__16541 = (0);
seq__16496_16511 = G__16538;
chunk__16497_16512 = G__16539;
count__16498_16513 = G__16540;
i__16499_16514 = G__16541;
continue;
}
} else
{var map__16505_16542 = cljs.core.first.call(null,seq__16496_16536__$1);var map__16505_16543__$1 = ((cljs.core.seq_QMARK_.call(null,map__16505_16542))?cljs.core.apply.call(null,cljs.core.hash_map,map__16505_16542):map__16505_16542);var p_16544 = map__16505_16543__$1;var vec__16506_16545 = cljs.core.get.call(null,map__16505_16543__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_16546 = cljs.core.nth.call(null,vec__16506_16545,(0),null);var y_16547 = cljs.core.nth.call(null,vec__16506_16545,(1),null);var rot_16548 = cljs.core.nth.call(null,vec__16506_16545,(2),null);var vec__16507_16549 = cljs.core.get.call(null,map__16505_16543__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_16550 = cljs.core.nth.call(null,vec__16507_16549,(0),null);var ys_16551 = cljs.core.nth.call(null,vec__16507_16549,(1),null);var vec__16508_16552 = cljs.core.get.call(null,map__16505_16543__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_16553 = cljs.core.nth.call(null,vec__16508_16552,(0),null);var g_16554 = cljs.core.nth.call(null,vec__16508_16552,(1),null);var b_16555 = cljs.core.nth.call(null,vec__16508_16552,(2),null);var a_16556 = cljs.core.nth.call(null,vec__16508_16552,(3),null);var G__16509_16557 = canvas_ctx;G__16509_16557.save();
G__16509_16557.translate(x_16546,y_16547);
G__16509_16557.rotate(rot_16548);
(G__16509_16557["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_16553 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_16554 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_16555 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_16556)+")"));
G__16509_16557.fillRect((- (xs_16550 / (2))),(- (ys_16551 / (2))),xs_16550,ys_16551);
G__16509_16557.restore();
{
var G__16558 = cljs.core.next.call(null,seq__16496_16536__$1);
var G__16559 = null;
var G__16560 = (0);
var G__16561 = (0);
seq__16496_16511 = G__16558;
chunk__16497_16512 = G__16559;
count__16498_16513 = G__16560;
i__16499_16514 = G__16561;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__16597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__16597,(0),null);var ch = cljs.core.nth.call(null,vec__16597,(1),null);var proj = (function (){var G__16598 = (new THREE.Matrix4());G__16598.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__16598;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__16597,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__16599){var map__16600 = p__16599;var map__16600__$1 = ((cljs.core.seq_QMARK_.call(null,map__16600))?cljs.core.apply.call(null,cljs.core.hash_map,map__16600):map__16600);var ctx = map__16600__$1;var vec__16601 = cljs.core.get.call(null,map__16600__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__16601,(0),null);var cy = cljs.core.nth.call(null,vec__16601,(1),null);var vec__16602 = cljs.core.get.call(null,map__16600__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__16602,(0),null);var bg = cljs.core.nth.call(null,vec__16602,(1),null);var bb = cljs.core.nth.call(null,vec__16602,(2),null);var map__16603 = cljs.core.get.call(null,map__16600__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__16603__$1 = ((cljs.core.seq_QMARK_.call(null,map__16603))?cljs.core.apply.call(null,cljs.core.hash_map,map__16603):map__16603);var ps = cljs.core.get.call(null,map__16603__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__16600,map__16600__$1,ctx,vec__16601,cx,cy,vec__16602,br,bg,bb,map__16603,map__16603__$1,ps,canvas_dom,mesh,sprite_shader,vec__16597,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__16604 = cljs.core.seq.call(null,ps);var chunk__16605 = null;var count__16606 = (0);var i__16607 = (0);while(true){
if((i__16607 < count__16606))
{var map__16608 = cljs.core._nth.call(null,chunk__16605,i__16607);var map__16608__$1 = ((cljs.core.seq_QMARK_.call(null,map__16608))?cljs.core.apply.call(null,cljs.core.hash_map,map__16608):map__16608);var p = map__16608__$1;var vec__16609 = cljs.core.get.call(null,map__16608__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__16609,(0),null);var y = cljs.core.nth.call(null,vec__16609,(1),null);var rot = cljs.core.nth.call(null,vec__16609,(2),null);var vec__16610 = cljs.core.get.call(null,map__16608__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__16610,(0),null);var ys = cljs.core.nth.call(null,vec__16610,(1),null);var vec__16611 = cljs.core.get.call(null,map__16608__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__16611,(0),null);var g = cljs.core.nth.call(null,vec__16611,(1),null);var b = cljs.core.nth.call(null,vec__16611,(2),null);var a = cljs.core.nth.call(null,vec__16611,(3),null);var tex = cljs.core.get.call(null,map__16608__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__16608__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_16632 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__16612_16633 = rotMat;G__16612_16633.makeRotationZ(rot);
var G__16613_16634 = scaleMat;G__16613_16634.makeScale(xs,ys,(1));
var G__16614_16635 = tras;G__16614_16635.makeTranslation((cx + x),(cy + y),(0));
G__16614_16635.multiply(rotMat);
G__16614_16635.multiply(scaleMat);
var G__16615_16636 = colorTx;G__16615_16636.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__16616 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__16616__$1 = (cljs.core.truth_(texObj_16632)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_16632,(0)], null)], null),G__16616):G__16616);return G__16616__$1;
})());
if(cljs.core.truth_(texObj_16632))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__16617_16637 = cljs.core._EQ_;var expr__16618_16638 = blending;if(cljs.core.truth_(pred__16617_16637.call(null,"normal",expr__16618_16638)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__16617_16637.call(null,"add",expr__16618_16638)))
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
var G__16639 = seq__16604;
var G__16640 = chunk__16605;
var G__16641 = count__16606;
var G__16642 = (i__16607 + (1));
seq__16604 = G__16639;
chunk__16605 = G__16640;
count__16606 = G__16641;
i__16607 = G__16642;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16604);if(temp__4126__auto__)
{var seq__16604__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16604__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__16604__$1);{
var G__16643 = cljs.core.chunk_rest.call(null,seq__16604__$1);
var G__16644 = c__4307__auto__;
var G__16645 = cljs.core.count.call(null,c__4307__auto__);
var G__16646 = (0);
seq__16604 = G__16643;
chunk__16605 = G__16644;
count__16606 = G__16645;
i__16607 = G__16646;
continue;
}
} else
{var map__16620 = cljs.core.first.call(null,seq__16604__$1);var map__16620__$1 = ((cljs.core.seq_QMARK_.call(null,map__16620))?cljs.core.apply.call(null,cljs.core.hash_map,map__16620):map__16620);var p = map__16620__$1;var vec__16621 = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__16621,(0),null);var y = cljs.core.nth.call(null,vec__16621,(1),null);var rot = cljs.core.nth.call(null,vec__16621,(2),null);var vec__16622 = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__16622,(0),null);var ys = cljs.core.nth.call(null,vec__16622,(1),null);var vec__16623 = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__16623,(0),null);var g = cljs.core.nth.call(null,vec__16623,(1),null);var b = cljs.core.nth.call(null,vec__16623,(2),null);var a = cljs.core.nth.call(null,vec__16623,(3),null);var tex = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_16647 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__16624_16648 = rotMat;G__16624_16648.makeRotationZ(rot);
var G__16625_16649 = scaleMat;G__16625_16649.makeScale(xs,ys,(1));
var G__16626_16650 = tras;G__16626_16650.makeTranslation((cx + x),(cy + y),(0));
G__16626_16650.multiply(rotMat);
G__16626_16650.multiply(scaleMat);
var G__16627_16651 = colorTx;G__16627_16651.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__16628 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__16628__$1 = (cljs.core.truth_(texObj_16647)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_16647,(0)], null)], null),G__16628):G__16628);return G__16628__$1;
})());
if(cljs.core.truth_(texObj_16647))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__16629_16652 = cljs.core._EQ_;var expr__16630_16653 = blending;if(cljs.core.truth_(pred__16629_16652.call(null,"normal",expr__16630_16653)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__16629_16652.call(null,"add",expr__16630_16653)))
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
var G__16654 = cljs.core.next.call(null,seq__16604__$1);
var G__16655 = null;
var G__16656 = (0);
var G__16657 = (0);
seq__16604 = G__16654;
chunk__16605 = G__16655;
count__16606 = G__16656;
i__16607 = G__16657;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__16600,map__16600__$1,ctx,vec__16601,cx,cy,vec__16602,br,bg,bb,map__16603,map__16603__$1,ps,canvas_dom,mesh,sprite_shader,vec__16597,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__16597,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
app.particle.draw.drawThree = (function drawThree(elem){var useWebgl_QMARK_ = true;var vec__16669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null);var w = cljs.core.nth.call(null,vec__16669,(0),null);var h = cljs.core.nth.call(null,vec__16669,(1),null);var scene = (new THREE.Scene());var camera = THREE.OrthographicCamera((w / (-2)),(w / (2)),(h / (2)),(h / (-2)),(-500),(1000));var renderer = ((useWebgl_QMARK_)?(new THREE.WebGLRenderer((function (){var obj16671 = {"antialias":true};return obj16671;
})())):(new THREE.CanvasRenderer((function (){var obj16673 = {"antialias":true};return obj16673;
})())));var objs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var dirtyTag = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var createObject = ((function (useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag){
return (function (scene__$1,id,part){var obj = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);if(cljs.core.not.call(null,obj))
{var mat = (function (){var G__16674 = (new THREE.MeshBasicMaterial());(G__16674["transparent"] = true);
return G__16674;
})();var mash = THREE.Mesh((new THREE.PlaneBufferGeometry((1),(1))),mat);cljs.core.swap_BANG_.call(null,objs,cljs.core.assoc,id,obj);
return scene__$1.add(obj);
} else
{return obj;
}
});})(useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag))
;var removeObject = ((function (useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject){
return (function (id){var temp__4124__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);if(cljs.core.truth_(temp__4124__auto__))
{var obj = temp__4124__auto__;return scene.remove(obj);
} else
{return null;
}
});})(useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject))
;var markDirty = ((function (useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject){
return (function (id){return cljs.core.swap_BANG_.call(null,dirtyTag,cljs.core.assoc,id,false);
});})(useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject))
;var clearDirtyTag = ((function (useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty){
return (function (f){return null;
});})(useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty))
;camera.position.set((0),(0),(200));
renderer.setSize(w,h);
renderer.setClearColor((0),(1));
$(renderer.domElement).appendTo(elem);
return ((function (useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag){
return (function (p__16675){var map__16676 = p__16675;var map__16676__$1 = ((cljs.core.seq_QMARK_.call(null,map__16676))?cljs.core.apply.call(null,cljs.core.hash_map,map__16676):map__16676);var ctx = map__16676__$1;var vec__16677 = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__16677,(0),null);var cy = cljs.core.nth.call(null,vec__16677,(1),null);var vec__16678 = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__16678,(0),null);var bg = cljs.core.nth.call(null,vec__16678,(1),null);var bb = cljs.core.nth.call(null,vec__16678,(2),null);var map__16679 = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__16679__$1 = ((cljs.core.seq_QMARK_.call(null,map__16679))?cljs.core.apply.call(null,cljs.core.hash_map,map__16679):map__16679);var ps = cljs.core.get.call(null,map__16679__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return null;
});
;})(useWebgl_QMARK_,vec__16669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag))
});
