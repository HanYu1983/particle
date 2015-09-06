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
return (function (p__142229){var map__142230 = p__142229;var map__142230__$1 = ((cljs.core.seq_QMARK_.call(null,map__142230))?cljs.core.apply.call(null,cljs.core.hash_map,map__142230):map__142230);var ctx = map__142230__$1;var map__142231 = cljs.core.get.call(null,map__142230__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__142231__$1 = ((cljs.core.seq_QMARK_.call(null,map__142231))?cljs.core.apply.call(null,cljs.core.hash_map,map__142231):map__142231);var ps = cljs.core.get.call(null,map__142231__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__142232_142247 = canvas_ctx;(G__142232_142247["fillStyle"] = "white");
G__142232_142247.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__142232_142247["fillStyle"] = "red");
G__142232_142247.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__142233_142248 = cljs.core.seq.call(null,ps);var chunk__142234_142249 = null;var count__142235_142250 = (0);var i__142236_142251 = (0);while(true){
if((i__142236_142251 < count__142235_142250))
{var map__142237_142252 = cljs.core._nth.call(null,chunk__142234_142249,i__142236_142251);var map__142237_142253__$1 = ((cljs.core.seq_QMARK_.call(null,map__142237_142252))?cljs.core.apply.call(null,cljs.core.hash_map,map__142237_142252):map__142237_142252);var p_142254 = map__142237_142253__$1;var vec__142238_142255 = cljs.core.get.call(null,map__142237_142253__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_142256 = cljs.core.nth.call(null,vec__142238_142255,(0),null);var y_142257 = cljs.core.nth.call(null,vec__142238_142255,(1),null);var rot_142258 = cljs.core.nth.call(null,vec__142238_142255,(2),null);var vec__142239_142259 = cljs.core.get.call(null,map__142237_142253__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_142260 = cljs.core.nth.call(null,vec__142239_142259,(0),null);var ys_142261 = cljs.core.nth.call(null,vec__142239_142259,(1),null);var vec__142240_142262 = cljs.core.get.call(null,map__142237_142253__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_142263 = cljs.core.nth.call(null,vec__142240_142262,(0),null);var g_142264 = cljs.core.nth.call(null,vec__142240_142262,(1),null);var b_142265 = cljs.core.nth.call(null,vec__142240_142262,(2),null);var a_142266 = cljs.core.nth.call(null,vec__142240_142262,(3),null);var G__142241_142267 = canvas_ctx;G__142241_142267.save();
G__142241_142267.translate(x_142256,y_142257);
G__142241_142267.rotate(rot_142258);
(G__142241_142267["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_142263 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_142264 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_142265 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_142266)+")"));
G__142241_142267.fillRect((- (xs_142260 / (2))),(- (ys_142261 / (2))),xs_142260,ys_142261);
G__142241_142267.restore();
{
var G__142268 = seq__142233_142248;
var G__142269 = chunk__142234_142249;
var G__142270 = count__142235_142250;
var G__142271 = (i__142236_142251 + (1));
seq__142233_142248 = G__142268;
chunk__142234_142249 = G__142269;
count__142235_142250 = G__142270;
i__142236_142251 = G__142271;
continue;
}
} else
{var temp__4126__auto___142272 = cljs.core.seq.call(null,seq__142233_142248);if(temp__4126__auto___142272)
{var seq__142233_142273__$1 = temp__4126__auto___142272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__142233_142273__$1))
{var c__4307__auto___142274 = cljs.core.chunk_first.call(null,seq__142233_142273__$1);{
var G__142275 = cljs.core.chunk_rest.call(null,seq__142233_142273__$1);
var G__142276 = c__4307__auto___142274;
var G__142277 = cljs.core.count.call(null,c__4307__auto___142274);
var G__142278 = (0);
seq__142233_142248 = G__142275;
chunk__142234_142249 = G__142276;
count__142235_142250 = G__142277;
i__142236_142251 = G__142278;
continue;
}
} else
{var map__142242_142279 = cljs.core.first.call(null,seq__142233_142273__$1);var map__142242_142280__$1 = ((cljs.core.seq_QMARK_.call(null,map__142242_142279))?cljs.core.apply.call(null,cljs.core.hash_map,map__142242_142279):map__142242_142279);var p_142281 = map__142242_142280__$1;var vec__142243_142282 = cljs.core.get.call(null,map__142242_142280__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_142283 = cljs.core.nth.call(null,vec__142243_142282,(0),null);var y_142284 = cljs.core.nth.call(null,vec__142243_142282,(1),null);var rot_142285 = cljs.core.nth.call(null,vec__142243_142282,(2),null);var vec__142244_142286 = cljs.core.get.call(null,map__142242_142280__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_142287 = cljs.core.nth.call(null,vec__142244_142286,(0),null);var ys_142288 = cljs.core.nth.call(null,vec__142244_142286,(1),null);var vec__142245_142289 = cljs.core.get.call(null,map__142242_142280__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_142290 = cljs.core.nth.call(null,vec__142245_142289,(0),null);var g_142291 = cljs.core.nth.call(null,vec__142245_142289,(1),null);var b_142292 = cljs.core.nth.call(null,vec__142245_142289,(2),null);var a_142293 = cljs.core.nth.call(null,vec__142245_142289,(3),null);var G__142246_142294 = canvas_ctx;G__142246_142294.save();
G__142246_142294.translate(x_142283,y_142284);
G__142246_142294.rotate(rot_142285);
(G__142246_142294["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_142290 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_142291 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_142292 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_142293)+")"));
G__142246_142294.fillRect((- (xs_142287 / (2))),(- (ys_142288 / (2))),xs_142287,ys_142288);
G__142246_142294.restore();
{
var G__142295 = cljs.core.next.call(null,seq__142233_142273__$1);
var G__142296 = null;
var G__142297 = (0);
var G__142298 = (0);
seq__142233_142248 = G__142295;
chunk__142234_142249 = G__142296;
count__142235_142250 = G__142297;
i__142236_142251 = G__142298;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__142333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__142333,(0),null);var ch = cljs.core.nth.call(null,vec__142333,(1),null);var proj = (function (){var G__142334 = (new THREE.Matrix4());G__142334.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__142334;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__142333,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__142335){var map__142336 = p__142335;var map__142336__$1 = ((cljs.core.seq_QMARK_.call(null,map__142336))?cljs.core.apply.call(null,cljs.core.hash_map,map__142336):map__142336);var ctx = map__142336__$1;var vec__142337 = cljs.core.get.call(null,map__142336__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__142337,(0),null);var cy = cljs.core.nth.call(null,vec__142337,(1),null);var timer = cljs.core.get.call(null,map__142336__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__142338 = cljs.core.get.call(null,map__142336__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__142338__$1 = ((cljs.core.seq_QMARK_.call(null,map__142338))?cljs.core.apply.call(null,cljs.core.hash_map,map__142338):map__142338);var ps = cljs.core.get.call(null,map__142338__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__142336,map__142336__$1,ctx,vec__142337,cx,cy,timer,map__142338,map__142338__$1,ps,canvas_dom,mesh,sprite_shader,vec__142333,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__142339 = cljs.core.seq.call(null,ps);var chunk__142340 = null;var count__142341 = (0);var i__142342 = (0);while(true){
if((i__142342 < count__142341))
{var map__142343 = cljs.core._nth.call(null,chunk__142340,i__142342);var map__142343__$1 = ((cljs.core.seq_QMARK_.call(null,map__142343))?cljs.core.apply.call(null,cljs.core.hash_map,map__142343):map__142343);var p = map__142343__$1;var vec__142344 = cljs.core.get.call(null,map__142343__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__142344,(0),null);var y = cljs.core.nth.call(null,vec__142344,(1),null);var rot = cljs.core.nth.call(null,vec__142344,(2),null);var vec__142345 = cljs.core.get.call(null,map__142343__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__142345,(0),null);var ys = cljs.core.nth.call(null,vec__142345,(1),null);var vec__142346 = cljs.core.get.call(null,map__142343__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__142346,(0),null);var g = cljs.core.nth.call(null,vec__142346,(1),null);var b = cljs.core.nth.call(null,vec__142346,(2),null);var a = cljs.core.nth.call(null,vec__142346,(3),null);var tex = cljs.core.get.call(null,map__142343__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__142343__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_142367 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__142347_142368 = rotMat;G__142347_142368.makeRotationZ(rot);
var G__142348_142369 = scaleMat;G__142348_142369.makeScale(xs,ys,(1));
var G__142349_142370 = tras;G__142349_142370.makeTranslation((cx + x),(cy + y),(0));
G__142349_142370.multiply(rotMat);
G__142349_142370.multiply(scaleMat);
var G__142350_142371 = colorTx;G__142350_142371.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__142351 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__142351__$1 = (cljs.core.truth_(texObj_142367)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_142367,(0)], null)], null),G__142351):G__142351);return G__142351__$1;
})());
if(cljs.core.truth_(blending))
{var pred__142352_142372 = cljs.core._EQ_;var expr__142353_142373 = blending;if(cljs.core.truth_(pred__142352_142372.call(null,"normal",expr__142353_142373)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__142352_142372.call(null,"add",expr__142353_142373)))
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
var G__142374 = seq__142339;
var G__142375 = chunk__142340;
var G__142376 = count__142341;
var G__142377 = (i__142342 + (1));
seq__142339 = G__142374;
chunk__142340 = G__142375;
count__142341 = G__142376;
i__142342 = G__142377;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__142339);if(temp__4126__auto__)
{var seq__142339__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__142339__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__142339__$1);{
var G__142378 = cljs.core.chunk_rest.call(null,seq__142339__$1);
var G__142379 = c__4307__auto__;
var G__142380 = cljs.core.count.call(null,c__4307__auto__);
var G__142381 = (0);
seq__142339 = G__142378;
chunk__142340 = G__142379;
count__142341 = G__142380;
i__142342 = G__142381;
continue;
}
} else
{var map__142355 = cljs.core.first.call(null,seq__142339__$1);var map__142355__$1 = ((cljs.core.seq_QMARK_.call(null,map__142355))?cljs.core.apply.call(null,cljs.core.hash_map,map__142355):map__142355);var p = map__142355__$1;var vec__142356 = cljs.core.get.call(null,map__142355__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__142356,(0),null);var y = cljs.core.nth.call(null,vec__142356,(1),null);var rot = cljs.core.nth.call(null,vec__142356,(2),null);var vec__142357 = cljs.core.get.call(null,map__142355__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__142357,(0),null);var ys = cljs.core.nth.call(null,vec__142357,(1),null);var vec__142358 = cljs.core.get.call(null,map__142355__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__142358,(0),null);var g = cljs.core.nth.call(null,vec__142358,(1),null);var b = cljs.core.nth.call(null,vec__142358,(2),null);var a = cljs.core.nth.call(null,vec__142358,(3),null);var tex = cljs.core.get.call(null,map__142355__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__142355__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_142382 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__142359_142383 = rotMat;G__142359_142383.makeRotationZ(rot);
var G__142360_142384 = scaleMat;G__142360_142384.makeScale(xs,ys,(1));
var G__142361_142385 = tras;G__142361_142385.makeTranslation((cx + x),(cy + y),(0));
G__142361_142385.multiply(rotMat);
G__142361_142385.multiply(scaleMat);
var G__142362_142386 = colorTx;G__142362_142386.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__142363 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__142363__$1 = (cljs.core.truth_(texObj_142382)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_142382,(0)], null)], null),G__142363):G__142363);return G__142363__$1;
})());
if(cljs.core.truth_(blending))
{var pred__142364_142387 = cljs.core._EQ_;var expr__142365_142388 = blending;if(cljs.core.truth_(pred__142364_142387.call(null,"normal",expr__142365_142388)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__142364_142387.call(null,"add",expr__142365_142388)))
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
var G__142389 = cljs.core.next.call(null,seq__142339__$1);
var G__142390 = null;
var G__142391 = (0);
var G__142392 = (0);
seq__142339 = G__142389;
chunk__142340 = G__142390;
count__142341 = G__142391;
i__142342 = G__142392;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__142336,map__142336__$1,ctx,vec__142337,cx,cy,timer,map__142338,map__142338__$1,ps,canvas_dom,mesh,sprite_shader,vec__142333,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__142333,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
