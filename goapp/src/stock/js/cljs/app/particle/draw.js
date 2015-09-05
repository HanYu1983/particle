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
return (function (p__74215){var map__74216 = p__74215;var map__74216__$1 = ((cljs.core.seq_QMARK_.call(null,map__74216))?cljs.core.apply.call(null,cljs.core.hash_map,map__74216):map__74216);var ctx = map__74216__$1;var map__74217 = cljs.core.get.call(null,map__74216__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__74217__$1 = ((cljs.core.seq_QMARK_.call(null,map__74217))?cljs.core.apply.call(null,cljs.core.hash_map,map__74217):map__74217);var ps = cljs.core.get.call(null,map__74217__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__74218_74233 = canvas_ctx;(G__74218_74233["fillStyle"] = "white");
G__74218_74233.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__74218_74233["fillStyle"] = "red");
G__74218_74233.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__74219_74234 = cljs.core.seq.call(null,ps);var chunk__74220_74235 = null;var count__74221_74236 = (0);var i__74222_74237 = (0);while(true){
if((i__74222_74237 < count__74221_74236))
{var map__74223_74238 = cljs.core._nth.call(null,chunk__74220_74235,i__74222_74237);var map__74223_74239__$1 = ((cljs.core.seq_QMARK_.call(null,map__74223_74238))?cljs.core.apply.call(null,cljs.core.hash_map,map__74223_74238):map__74223_74238);var p_74240 = map__74223_74239__$1;var vec__74224_74241 = cljs.core.get.call(null,map__74223_74239__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_74242 = cljs.core.nth.call(null,vec__74224_74241,(0),null);var y_74243 = cljs.core.nth.call(null,vec__74224_74241,(1),null);var rot_74244 = cljs.core.nth.call(null,vec__74224_74241,(2),null);var vec__74225_74245 = cljs.core.get.call(null,map__74223_74239__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_74246 = cljs.core.nth.call(null,vec__74225_74245,(0),null);var ys_74247 = cljs.core.nth.call(null,vec__74225_74245,(1),null);var vec__74226_74248 = cljs.core.get.call(null,map__74223_74239__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_74249 = cljs.core.nth.call(null,vec__74226_74248,(0),null);var g_74250 = cljs.core.nth.call(null,vec__74226_74248,(1),null);var b_74251 = cljs.core.nth.call(null,vec__74226_74248,(2),null);var a_74252 = cljs.core.nth.call(null,vec__74226_74248,(3),null);var G__74227_74253 = canvas_ctx;G__74227_74253.save();
G__74227_74253.translate(x_74242,y_74243);
G__74227_74253.rotate(rot_74244);
(G__74227_74253["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_74249 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_74250 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_74251 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_74252)+")"));
G__74227_74253.fillRect((- (xs_74246 / (2))),(- (ys_74247 / (2))),xs_74246,ys_74247);
G__74227_74253.restore();
{
var G__74254 = seq__74219_74234;
var G__74255 = chunk__74220_74235;
var G__74256 = count__74221_74236;
var G__74257 = (i__74222_74237 + (1));
seq__74219_74234 = G__74254;
chunk__74220_74235 = G__74255;
count__74221_74236 = G__74256;
i__74222_74237 = G__74257;
continue;
}
} else
{var temp__4126__auto___74258 = cljs.core.seq.call(null,seq__74219_74234);if(temp__4126__auto___74258)
{var seq__74219_74259__$1 = temp__4126__auto___74258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__74219_74259__$1))
{var c__4307__auto___74260 = cljs.core.chunk_first.call(null,seq__74219_74259__$1);{
var G__74261 = cljs.core.chunk_rest.call(null,seq__74219_74259__$1);
var G__74262 = c__4307__auto___74260;
var G__74263 = cljs.core.count.call(null,c__4307__auto___74260);
var G__74264 = (0);
seq__74219_74234 = G__74261;
chunk__74220_74235 = G__74262;
count__74221_74236 = G__74263;
i__74222_74237 = G__74264;
continue;
}
} else
{var map__74228_74265 = cljs.core.first.call(null,seq__74219_74259__$1);var map__74228_74266__$1 = ((cljs.core.seq_QMARK_.call(null,map__74228_74265))?cljs.core.apply.call(null,cljs.core.hash_map,map__74228_74265):map__74228_74265);var p_74267 = map__74228_74266__$1;var vec__74229_74268 = cljs.core.get.call(null,map__74228_74266__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_74269 = cljs.core.nth.call(null,vec__74229_74268,(0),null);var y_74270 = cljs.core.nth.call(null,vec__74229_74268,(1),null);var rot_74271 = cljs.core.nth.call(null,vec__74229_74268,(2),null);var vec__74230_74272 = cljs.core.get.call(null,map__74228_74266__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_74273 = cljs.core.nth.call(null,vec__74230_74272,(0),null);var ys_74274 = cljs.core.nth.call(null,vec__74230_74272,(1),null);var vec__74231_74275 = cljs.core.get.call(null,map__74228_74266__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_74276 = cljs.core.nth.call(null,vec__74231_74275,(0),null);var g_74277 = cljs.core.nth.call(null,vec__74231_74275,(1),null);var b_74278 = cljs.core.nth.call(null,vec__74231_74275,(2),null);var a_74279 = cljs.core.nth.call(null,vec__74231_74275,(3),null);var G__74232_74280 = canvas_ctx;G__74232_74280.save();
G__74232_74280.translate(x_74269,y_74270);
G__74232_74280.rotate(rot_74271);
(G__74232_74280["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_74276 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_74277 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_74278 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_74279)+")"));
G__74232_74280.fillRect((- (xs_74273 / (2))),(- (ys_74274 / (2))),xs_74273,ys_74274);
G__74232_74280.restore();
{
var G__74281 = cljs.core.next.call(null,seq__74219_74259__$1);
var G__74282 = null;
var G__74283 = (0);
var G__74284 = (0);
seq__74219_74234 = G__74281;
chunk__74220_74235 = G__74282;
count__74221_74236 = G__74283;
i__74222_74237 = G__74284;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__74313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__74313,(0),null);var ch = cljs.core.nth.call(null,vec__74313,(1),null);var proj = (function (){var G__74314 = (new THREE.Matrix4());G__74314.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__74314;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__74313,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__74315){var map__74316 = p__74315;var map__74316__$1 = ((cljs.core.seq_QMARK_.call(null,map__74316))?cljs.core.apply.call(null,cljs.core.hash_map,map__74316):map__74316);var ctx = map__74316__$1;var vec__74317 = cljs.core.get.call(null,map__74316__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__74317,(0),null);var cy = cljs.core.nth.call(null,vec__74317,(1),null);var timer = cljs.core.get.call(null,map__74316__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__74318 = cljs.core.get.call(null,map__74316__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__74318__$1 = ((cljs.core.seq_QMARK_.call(null,map__74318))?cljs.core.apply.call(null,cljs.core.hash_map,map__74318):map__74318);var ps = cljs.core.get.call(null,map__74318__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__74316,map__74316__$1,ctx,vec__74317,cx,cy,timer,map__74318,map__74318__$1,ps,canvas_dom,mesh,sprite_shader,vec__74313,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){var seq__74319 = cljs.core.seq.call(null,ps);var chunk__74320 = null;var count__74321 = (0);var i__74322 = (0);while(true){
if((i__74322 < count__74321))
{var map__74323 = cljs.core._nth.call(null,chunk__74320,i__74322);var map__74323__$1 = ((cljs.core.seq_QMARK_.call(null,map__74323))?cljs.core.apply.call(null,cljs.core.hash_map,map__74323):map__74323);var p = map__74323__$1;var vec__74324 = cljs.core.get.call(null,map__74323__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__74324,(0),null);var y = cljs.core.nth.call(null,vec__74324,(1),null);var rot = cljs.core.nth.call(null,vec__74324,(2),null);var vec__74325 = cljs.core.get.call(null,map__74323__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__74325,(0),null);var ys = cljs.core.nth.call(null,vec__74325,(1),null);var vec__74326 = cljs.core.get.call(null,map__74323__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__74326,(0),null);var g = cljs.core.nth.call(null,vec__74326,(1),null);var b = cljs.core.nth.call(null,vec__74326,(2),null);var a = cljs.core.nth.call(null,vec__74326,(3),null);var tex = cljs.core.get.call(null,map__74323__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_74341 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__74327_74342 = rotMat;G__74327_74342.makeRotationZ(rot);
var G__74328_74343 = scaleMat;G__74328_74343.makeScale(xs,ys,(1));
var G__74329_74344 = tras;G__74329_74344.makeTranslation((cx + x),(cy + y),(0));
G__74329_74344.multiply(rotMat);
G__74329_74344.multiply(scaleMat);
var G__74330_74345 = colorTx;G__74330_74345.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__74331 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__74331__$1 = (cljs.core.truth_(texObj_74341)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_74341,(0)], null)], null),G__74331):G__74331);return G__74331__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__74346 = seq__74319;
var G__74347 = chunk__74320;
var G__74348 = count__74321;
var G__74349 = (i__74322 + (1));
seq__74319 = G__74346;
chunk__74320 = G__74347;
count__74321 = G__74348;
i__74322 = G__74349;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__74319);if(temp__4126__auto__)
{var seq__74319__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__74319__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__74319__$1);{
var G__74350 = cljs.core.chunk_rest.call(null,seq__74319__$1);
var G__74351 = c__4307__auto__;
var G__74352 = cljs.core.count.call(null,c__4307__auto__);
var G__74353 = (0);
seq__74319 = G__74350;
chunk__74320 = G__74351;
count__74321 = G__74352;
i__74322 = G__74353;
continue;
}
} else
{var map__74332 = cljs.core.first.call(null,seq__74319__$1);var map__74332__$1 = ((cljs.core.seq_QMARK_.call(null,map__74332))?cljs.core.apply.call(null,cljs.core.hash_map,map__74332):map__74332);var p = map__74332__$1;var vec__74333 = cljs.core.get.call(null,map__74332__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__74333,(0),null);var y = cljs.core.nth.call(null,vec__74333,(1),null);var rot = cljs.core.nth.call(null,vec__74333,(2),null);var vec__74334 = cljs.core.get.call(null,map__74332__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__74334,(0),null);var ys = cljs.core.nth.call(null,vec__74334,(1),null);var vec__74335 = cljs.core.get.call(null,map__74332__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__74335,(0),null);var g = cljs.core.nth.call(null,vec__74335,(1),null);var b = cljs.core.nth.call(null,vec__74335,(2),null);var a = cljs.core.nth.call(null,vec__74335,(3),null);var tex = cljs.core.get.call(null,map__74332__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_74354 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__74336_74355 = rotMat;G__74336_74355.makeRotationZ(rot);
var G__74337_74356 = scaleMat;G__74337_74356.makeScale(xs,ys,(1));
var G__74338_74357 = tras;G__74338_74357.makeTranslation((cx + x),(cy + y),(0));
G__74338_74357.multiply(rotMat);
G__74338_74357.multiply(scaleMat);
var G__74339_74358 = colorTx;G__74339_74358.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__74340 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__74340__$1 = (cljs.core.truth_(texObj_74354)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_74354,(0)], null)], null),G__74340):G__74340);return G__74340__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__74359 = cljs.core.next.call(null,seq__74319__$1);
var G__74360 = null;
var G__74361 = (0);
var G__74362 = (0);
seq__74319 = G__74359;
chunk__74320 = G__74360;
count__74321 = G__74361;
i__74322 = G__74362;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__74316,map__74316__$1,ctx,vec__74317,cx,cy,timer,map__74318,map__74318__$1,ps,canvas_dom,mesh,sprite_shader,vec__74313,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__74313,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
