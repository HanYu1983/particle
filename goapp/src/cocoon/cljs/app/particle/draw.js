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
return (function (p__41223){var map__41224 = p__41223;var map__41224__$1 = ((cljs.core.seq_QMARK_.call(null,map__41224))?cljs.core.apply.call(null,cljs.core.hash_map,map__41224):map__41224);var ctx = map__41224__$1;var map__41225 = cljs.core.get.call(null,map__41224__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41225__$1 = ((cljs.core.seq_QMARK_.call(null,map__41225))?cljs.core.apply.call(null,cljs.core.hash_map,map__41225):map__41225);var ps = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__41226_41241 = canvas_ctx;(G__41226_41241["fillStyle"] = "white");
G__41226_41241.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__41226_41241["fillStyle"] = "red");
G__41226_41241.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__41227_41242 = cljs.core.seq.call(null,ps);var chunk__41228_41243 = null;var count__41229_41244 = (0);var i__41230_41245 = (0);while(true){
if((i__41230_41245 < count__41229_41244))
{var map__41231_41246 = cljs.core._nth.call(null,chunk__41228_41243,i__41230_41245);var map__41231_41247__$1 = ((cljs.core.seq_QMARK_.call(null,map__41231_41246))?cljs.core.apply.call(null,cljs.core.hash_map,map__41231_41246):map__41231_41246);var p_41248 = map__41231_41247__$1;var vec__41232_41249 = cljs.core.get.call(null,map__41231_41247__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41250 = cljs.core.nth.call(null,vec__41232_41249,(0),null);var y_41251 = cljs.core.nth.call(null,vec__41232_41249,(1),null);var rot_41252 = cljs.core.nth.call(null,vec__41232_41249,(2),null);var vec__41233_41253 = cljs.core.get.call(null,map__41231_41247__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41254 = cljs.core.nth.call(null,vec__41233_41253,(0),null);var ys_41255 = cljs.core.nth.call(null,vec__41233_41253,(1),null);var vec__41234_41256 = cljs.core.get.call(null,map__41231_41247__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41257 = cljs.core.nth.call(null,vec__41234_41256,(0),null);var g_41258 = cljs.core.nth.call(null,vec__41234_41256,(1),null);var b_41259 = cljs.core.nth.call(null,vec__41234_41256,(2),null);var a_41260 = cljs.core.nth.call(null,vec__41234_41256,(3),null);var G__41235_41261 = canvas_ctx;G__41235_41261.save();
G__41235_41261.translate(x_41250,y_41251);
G__41235_41261.rotate(rot_41252);
(G__41235_41261["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41257 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41258 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41259 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41260)+")"));
G__41235_41261.fillRect((- (xs_41254 / (2))),(- (ys_41255 / (2))),xs_41254,ys_41255);
G__41235_41261.restore();
{
var G__41262 = seq__41227_41242;
var G__41263 = chunk__41228_41243;
var G__41264 = count__41229_41244;
var G__41265 = (i__41230_41245 + (1));
seq__41227_41242 = G__41262;
chunk__41228_41243 = G__41263;
count__41229_41244 = G__41264;
i__41230_41245 = G__41265;
continue;
}
} else
{var temp__4126__auto___41266 = cljs.core.seq.call(null,seq__41227_41242);if(temp__4126__auto___41266)
{var seq__41227_41267__$1 = temp__4126__auto___41266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41227_41267__$1))
{var c__4307__auto___41268 = cljs.core.chunk_first.call(null,seq__41227_41267__$1);{
var G__41269 = cljs.core.chunk_rest.call(null,seq__41227_41267__$1);
var G__41270 = c__4307__auto___41268;
var G__41271 = cljs.core.count.call(null,c__4307__auto___41268);
var G__41272 = (0);
seq__41227_41242 = G__41269;
chunk__41228_41243 = G__41270;
count__41229_41244 = G__41271;
i__41230_41245 = G__41272;
continue;
}
} else
{var map__41236_41273 = cljs.core.first.call(null,seq__41227_41267__$1);var map__41236_41274__$1 = ((cljs.core.seq_QMARK_.call(null,map__41236_41273))?cljs.core.apply.call(null,cljs.core.hash_map,map__41236_41273):map__41236_41273);var p_41275 = map__41236_41274__$1;var vec__41237_41276 = cljs.core.get.call(null,map__41236_41274__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41277 = cljs.core.nth.call(null,vec__41237_41276,(0),null);var y_41278 = cljs.core.nth.call(null,vec__41237_41276,(1),null);var rot_41279 = cljs.core.nth.call(null,vec__41237_41276,(2),null);var vec__41238_41280 = cljs.core.get.call(null,map__41236_41274__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41281 = cljs.core.nth.call(null,vec__41238_41280,(0),null);var ys_41282 = cljs.core.nth.call(null,vec__41238_41280,(1),null);var vec__41239_41283 = cljs.core.get.call(null,map__41236_41274__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41284 = cljs.core.nth.call(null,vec__41239_41283,(0),null);var g_41285 = cljs.core.nth.call(null,vec__41239_41283,(1),null);var b_41286 = cljs.core.nth.call(null,vec__41239_41283,(2),null);var a_41287 = cljs.core.nth.call(null,vec__41239_41283,(3),null);var G__41240_41288 = canvas_ctx;G__41240_41288.save();
G__41240_41288.translate(x_41277,y_41278);
G__41240_41288.rotate(rot_41279);
(G__41240_41288["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41284 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41285 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41286 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41287)+")"));
G__41240_41288.fillRect((- (xs_41281 / (2))),(- (ys_41282 / (2))),xs_41281,ys_41282);
G__41240_41288.restore();
{
var G__41289 = cljs.core.next.call(null,seq__41227_41267__$1);
var G__41290 = null;
var G__41291 = (0);
var G__41292 = (0);
seq__41227_41242 = G__41289;
chunk__41228_41243 = G__41290;
count__41229_41244 = G__41291;
i__41230_41245 = G__41292;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__41328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__41328,(0),null);var ch = cljs.core.nth.call(null,vec__41328,(1),null);var proj = (function (){var G__41329 = (new THREE.Matrix4());G__41329.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__41329;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__41328,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__41330){var map__41331 = p__41330;var map__41331__$1 = ((cljs.core.seq_QMARK_.call(null,map__41331))?cljs.core.apply.call(null,cljs.core.hash_map,map__41331):map__41331);var ctx = map__41331__$1;var vec__41332 = cljs.core.get.call(null,map__41331__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__41332,(0),null);var cy = cljs.core.nth.call(null,vec__41332,(1),null);var timer = cljs.core.get.call(null,map__41331__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__41333 = cljs.core.get.call(null,map__41331__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41333__$1 = ((cljs.core.seq_QMARK_.call(null,map__41333))?cljs.core.apply.call(null,cljs.core.hash_map,map__41333):map__41333);var ps = cljs.core.get.call(null,map__41333__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var vec__41334 = cljs.core.get.call(null,map__41333__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__41334,(0),null);var bg = cljs.core.nth.call(null,vec__41334,(1),null);var bb = cljs.core.nth.call(null,vec__41334,(2),null);gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__41331,map__41331__$1,ctx,vec__41332,cx,cy,timer,map__41333,map__41333__$1,ps,vec__41334,br,bg,bb,canvas_dom,mesh,sprite_shader,vec__41328,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__41335 = cljs.core.seq.call(null,ps);var chunk__41336 = null;var count__41337 = (0);var i__41338 = (0);while(true){
if((i__41338 < count__41337))
{var map__41339 = cljs.core._nth.call(null,chunk__41336,i__41338);var map__41339__$1 = ((cljs.core.seq_QMARK_.call(null,map__41339))?cljs.core.apply.call(null,cljs.core.hash_map,map__41339):map__41339);var p = map__41339__$1;var vec__41340 = cljs.core.get.call(null,map__41339__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41340,(0),null);var y = cljs.core.nth.call(null,vec__41340,(1),null);var rot = cljs.core.nth.call(null,vec__41340,(2),null);var vec__41341 = cljs.core.get.call(null,map__41339__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41341,(0),null);var ys = cljs.core.nth.call(null,vec__41341,(1),null);var vec__41342 = cljs.core.get.call(null,map__41339__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41342,(0),null);var g = cljs.core.nth.call(null,vec__41342,(1),null);var b = cljs.core.nth.call(null,vec__41342,(2),null);var a = cljs.core.nth.call(null,vec__41342,(3),null);var tex = cljs.core.get.call(null,map__41339__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__41339__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_41363 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__41343_41364 = rotMat;G__41343_41364.makeRotationZ(rot);
var G__41344_41365 = scaleMat;G__41344_41365.makeScale(xs,ys,(1));
var G__41345_41366 = tras;G__41345_41366.makeTranslation((cx + x),(cy + y),(0));
G__41345_41366.multiply(rotMat);
G__41345_41366.multiply(scaleMat);
var G__41346_41367 = colorTx;G__41346_41367.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__41347 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__41347__$1 = (cljs.core.truth_(texObj_41363)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_41363,(0)], null)], null),G__41347):G__41347);return G__41347__$1;
})());
if(cljs.core.truth_(texObj_41363))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__41348_41368 = cljs.core._EQ_;var expr__41349_41369 = blending;if(cljs.core.truth_(pred__41348_41368.call(null,"normal",expr__41349_41369)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__41348_41368.call(null,"add",expr__41349_41369)))
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
var G__41370 = seq__41335;
var G__41371 = chunk__41336;
var G__41372 = count__41337;
var G__41373 = (i__41338 + (1));
seq__41335 = G__41370;
chunk__41336 = G__41371;
count__41337 = G__41372;
i__41338 = G__41373;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__41335);if(temp__4126__auto__)
{var seq__41335__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41335__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__41335__$1);{
var G__41374 = cljs.core.chunk_rest.call(null,seq__41335__$1);
var G__41375 = c__4307__auto__;
var G__41376 = cljs.core.count.call(null,c__4307__auto__);
var G__41377 = (0);
seq__41335 = G__41374;
chunk__41336 = G__41375;
count__41337 = G__41376;
i__41338 = G__41377;
continue;
}
} else
{var map__41351 = cljs.core.first.call(null,seq__41335__$1);var map__41351__$1 = ((cljs.core.seq_QMARK_.call(null,map__41351))?cljs.core.apply.call(null,cljs.core.hash_map,map__41351):map__41351);var p = map__41351__$1;var vec__41352 = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41352,(0),null);var y = cljs.core.nth.call(null,vec__41352,(1),null);var rot = cljs.core.nth.call(null,vec__41352,(2),null);var vec__41353 = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41353,(0),null);var ys = cljs.core.nth.call(null,vec__41353,(1),null);var vec__41354 = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41354,(0),null);var g = cljs.core.nth.call(null,vec__41354,(1),null);var b = cljs.core.nth.call(null,vec__41354,(2),null);var a = cljs.core.nth.call(null,vec__41354,(3),null);var tex = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_41378 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__41355_41379 = rotMat;G__41355_41379.makeRotationZ(rot);
var G__41356_41380 = scaleMat;G__41356_41380.makeScale(xs,ys,(1));
var G__41357_41381 = tras;G__41357_41381.makeTranslation((cx + x),(cy + y),(0));
G__41357_41381.multiply(rotMat);
G__41357_41381.multiply(scaleMat);
var G__41358_41382 = colorTx;G__41358_41382.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__41359 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__41359__$1 = (cljs.core.truth_(texObj_41378)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_41378,(0)], null)], null),G__41359):G__41359);return G__41359__$1;
})());
if(cljs.core.truth_(texObj_41378))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__41360_41383 = cljs.core._EQ_;var expr__41361_41384 = blending;if(cljs.core.truth_(pred__41360_41383.call(null,"normal",expr__41361_41384)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__41360_41383.call(null,"add",expr__41361_41384)))
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
var G__41385 = cljs.core.next.call(null,seq__41335__$1);
var G__41386 = null;
var G__41387 = (0);
var G__41388 = (0);
seq__41335 = G__41385;
chunk__41336 = G__41386;
count__41337 = G__41387;
i__41338 = G__41388;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__41331,map__41331__$1,ctx,vec__41332,cx,cy,timer,map__41333,map__41333__$1,ps,vec__41334,br,bg,bb,canvas_dom,mesh,sprite_shader,vec__41328,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__41328,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
