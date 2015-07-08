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
return (function (p__17276){var map__17277 = p__17276;var map__17277__$1 = ((cljs.core.seq_QMARK_.call(null,map__17277))?cljs.core.apply.call(null,cljs.core.hash_map,map__17277):map__17277);var ctx = map__17277__$1;var map__17278 = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__17278__$1 = ((cljs.core.seq_QMARK_.call(null,map__17278))?cljs.core.apply.call(null,cljs.core.hash_map,map__17278):map__17278);var ps = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__17279_17294 = canvas_ctx;(G__17279_17294["fillStyle"] = "white");
G__17279_17294.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__17279_17294["fillStyle"] = "red");
G__17279_17294.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__17280_17295 = cljs.core.seq.call(null,ps);var chunk__17281_17296 = null;var count__17282_17297 = (0);var i__17283_17298 = (0);while(true){
if((i__17283_17298 < count__17282_17297))
{var map__17284_17299 = cljs.core._nth.call(null,chunk__17281_17296,i__17283_17298);var map__17284_17300__$1 = ((cljs.core.seq_QMARK_.call(null,map__17284_17299))?cljs.core.apply.call(null,cljs.core.hash_map,map__17284_17299):map__17284_17299);var p_17301 = map__17284_17300__$1;var vec__17285_17302 = cljs.core.get.call(null,map__17284_17300__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_17303 = cljs.core.nth.call(null,vec__17285_17302,(0),null);var y_17304 = cljs.core.nth.call(null,vec__17285_17302,(1),null);var r_17305 = cljs.core.nth.call(null,vec__17285_17302,(2),null);var vec__17286_17306 = cljs.core.get.call(null,map__17284_17300__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_17307 = cljs.core.nth.call(null,vec__17286_17306,(0),null);var ys_17308 = cljs.core.nth.call(null,vec__17286_17306,(1),null);var vec__17287_17309 = cljs.core.get.call(null,map__17284_17300__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_17310__$1 = cljs.core.nth.call(null,vec__17287_17309,(0),null);var g_17311 = cljs.core.nth.call(null,vec__17287_17309,(1),null);var b_17312 = cljs.core.nth.call(null,vec__17287_17309,(2),null);var a_17313 = cljs.core.nth.call(null,vec__17287_17309,(3),null);var G__17288_17314 = canvas_ctx;(G__17288_17314["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_17310__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_17311 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_17312 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_17313)+")"));
G__17288_17314.fillRect(x_17303,y_17304,xs_17307,ys_17308);
{
var G__17315 = seq__17280_17295;
var G__17316 = chunk__17281_17296;
var G__17317 = count__17282_17297;
var G__17318 = (i__17283_17298 + (1));
seq__17280_17295 = G__17315;
chunk__17281_17296 = G__17316;
count__17282_17297 = G__17317;
i__17283_17298 = G__17318;
continue;
}
} else
{var temp__4126__auto___17319 = cljs.core.seq.call(null,seq__17280_17295);if(temp__4126__auto___17319)
{var seq__17280_17320__$1 = temp__4126__auto___17319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17280_17320__$1))
{var c__4307__auto___17321 = cljs.core.chunk_first.call(null,seq__17280_17320__$1);{
var G__17322 = cljs.core.chunk_rest.call(null,seq__17280_17320__$1);
var G__17323 = c__4307__auto___17321;
var G__17324 = cljs.core.count.call(null,c__4307__auto___17321);
var G__17325 = (0);
seq__17280_17295 = G__17322;
chunk__17281_17296 = G__17323;
count__17282_17297 = G__17324;
i__17283_17298 = G__17325;
continue;
}
} else
{var map__17289_17326 = cljs.core.first.call(null,seq__17280_17320__$1);var map__17289_17327__$1 = ((cljs.core.seq_QMARK_.call(null,map__17289_17326))?cljs.core.apply.call(null,cljs.core.hash_map,map__17289_17326):map__17289_17326);var p_17328 = map__17289_17327__$1;var vec__17290_17329 = cljs.core.get.call(null,map__17289_17327__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_17330 = cljs.core.nth.call(null,vec__17290_17329,(0),null);var y_17331 = cljs.core.nth.call(null,vec__17290_17329,(1),null);var r_17332 = cljs.core.nth.call(null,vec__17290_17329,(2),null);var vec__17291_17333 = cljs.core.get.call(null,map__17289_17327__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_17334 = cljs.core.nth.call(null,vec__17291_17333,(0),null);var ys_17335 = cljs.core.nth.call(null,vec__17291_17333,(1),null);var vec__17292_17336 = cljs.core.get.call(null,map__17289_17327__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_17337__$1 = cljs.core.nth.call(null,vec__17292_17336,(0),null);var g_17338 = cljs.core.nth.call(null,vec__17292_17336,(1),null);var b_17339 = cljs.core.nth.call(null,vec__17292_17336,(2),null);var a_17340 = cljs.core.nth.call(null,vec__17292_17336,(3),null);var G__17293_17341 = canvas_ctx;(G__17293_17341["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_17337__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_17338 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_17339 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_17340)+")"));
G__17293_17341.fillRect(x_17330,y_17331,xs_17334,ys_17335);
{
var G__17342 = cljs.core.next.call(null,seq__17280_17320__$1);
var G__17343 = null;
var G__17344 = (0);
var G__17345 = (0);
seq__17280_17295 = G__17342;
chunk__17281_17296 = G__17343;
count__17282_17297 = G__17344;
i__17283_17298 = G__17345;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj17374 = {};return obj17374;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__17372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__17372,(0),null);var ch = cljs.core.nth.call(null,vec__17372,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__17372,cw,ch){
return (function (p__17375){var map__17376 = p__17375;var map__17376__$1 = ((cljs.core.seq_QMARK_.call(null,map__17376))?cljs.core.apply.call(null,cljs.core.hash_map,map__17376):map__17376);var ctx = map__17376__$1;var timer = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__17377 = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__17377__$1 = ((cljs.core.seq_QMARK_.call(null,map__17377))?cljs.core.apply.call(null,cljs.core.hash_map,map__17377):map__17377);var ps = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___17398 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___17398 == null))
{} else
{var faceImg_17399 = temp__4130__auto___17398;var tex_17400 = app.main2.cacheTex.call(null,gl__$1,faceImg_17399);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_17400,faceImg_17399,temp__4130__auto___17398,map__17376,map__17376__$1,ctx,timer,map__17377,map__17377__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__17372,cw,ch){
return (function (pobj){var seq__17378 = cljs.core.seq.call(null,ps);var chunk__17379 = null;var count__17380 = (0);var i__17381 = (0);while(true){
if((i__17381 < count__17380))
{var map__17382 = cljs.core._nth.call(null,chunk__17379,i__17381);var map__17382__$1 = ((cljs.core.seq_QMARK_.call(null,map__17382))?cljs.core.apply.call(null,cljs.core.hash_map,map__17382):map__17382);var p = map__17382__$1;var vec__17383 = cljs.core.get.call(null,map__17382__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17383,(0),null);var y = cljs.core.nth.call(null,vec__17383,(1),null);var rot = cljs.core.nth.call(null,vec__17383,(2),null);var vec__17384 = cljs.core.get.call(null,map__17382__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__17384,(0),null);var ys = cljs.core.nth.call(null,vec__17384,(1),null);var vec__17385 = cljs.core.get.call(null,map__17382__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__17385,(0),null);var g = cljs.core.nth.call(null,vec__17385,(1),null);var b = cljs.core.nth.call(null,vec__17385,(2),null);var a = cljs.core.nth.call(null,vec__17385,(3),null);var proj_17401 = (function (){var G__17386 = (new THREE.Matrix4());G__17386.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17386;
})();var tras_17402 = (function (){var G__17387 = (new THREE.Matrix4());G__17387.makeTranslation(x,y,(0));
G__17387.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17387.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17387;
})();var texTx_17403 = (function (){var G__17388 = (new THREE.Matrix3());return G__17388;
})();var colorTx_17404 = (function (){var G__17389 = (new THREE.Matrix4());G__17389.makeTranslation(r,g,b);
return G__17389;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_17401.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_17402.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_17400,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_17403.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_17404.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__17405 = seq__17378;
var G__17406 = chunk__17379;
var G__17407 = count__17380;
var G__17408 = (i__17381 + (1));
seq__17378 = G__17405;
chunk__17379 = G__17406;
count__17380 = G__17407;
i__17381 = G__17408;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17378);if(temp__4126__auto__)
{var seq__17378__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17378__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__17378__$1);{
var G__17409 = cljs.core.chunk_rest.call(null,seq__17378__$1);
var G__17410 = c__4307__auto__;
var G__17411 = cljs.core.count.call(null,c__4307__auto__);
var G__17412 = (0);
seq__17378 = G__17409;
chunk__17379 = G__17410;
count__17380 = G__17411;
i__17381 = G__17412;
continue;
}
} else
{var map__17390 = cljs.core.first.call(null,seq__17378__$1);var map__17390__$1 = ((cljs.core.seq_QMARK_.call(null,map__17390))?cljs.core.apply.call(null,cljs.core.hash_map,map__17390):map__17390);var p = map__17390__$1;var vec__17391 = cljs.core.get.call(null,map__17390__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17391,(0),null);var y = cljs.core.nth.call(null,vec__17391,(1),null);var rot = cljs.core.nth.call(null,vec__17391,(2),null);var vec__17392 = cljs.core.get.call(null,map__17390__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__17392,(0),null);var ys = cljs.core.nth.call(null,vec__17392,(1),null);var vec__17393 = cljs.core.get.call(null,map__17390__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__17393,(0),null);var g = cljs.core.nth.call(null,vec__17393,(1),null);var b = cljs.core.nth.call(null,vec__17393,(2),null);var a = cljs.core.nth.call(null,vec__17393,(3),null);var proj_17413 = (function (){var G__17394 = (new THREE.Matrix4());G__17394.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17394;
})();var tras_17414 = (function (){var G__17395 = (new THREE.Matrix4());G__17395.makeTranslation(x,y,(0));
G__17395.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17395.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17395;
})();var texTx_17415 = (function (){var G__17396 = (new THREE.Matrix3());return G__17396;
})();var colorTx_17416 = (function (){var G__17397 = (new THREE.Matrix4());G__17397.makeTranslation(r,g,b);
return G__17397;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_17413.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_17414.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_17400,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_17415.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_17416.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__17417 = cljs.core.next.call(null,seq__17378__$1);
var G__17418 = null;
var G__17419 = (0);
var G__17420 = (0);
seq__17378 = G__17417;
chunk__17379 = G__17418;
count__17380 = G__17419;
i__17381 = G__17420;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_17400,faceImg_17399,temp__4130__auto___17398,map__17376,map__17376__$1,ctx,timer,map__17377,map__17377__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__17372,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__17372,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17425){var vec__17426 = p__17425;var k = cljs.core.nth.call(null,vec__17426,(0),null);var v = cljs.core.nth.call(null,vec__17426,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__17427){var vec__17428 = p__17427;var k = cljs.core.nth.call(null,vec__17428,(0),null);var v = cljs.core.nth.call(null,vec__17428,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj){
return (function (ps){return cljs.core.mapv.call(null,createParticle,ps);
});})(obj))
);
});})(obj))
):obj);return app.particle.create.call(null,emit);
});
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_17666){var state_val_17667 = (state_17666[(1)]);if((state_val_17667 === (2)))
{var inst_17664 = (state_17666[(2)]);var state_17666__$1 = state_17666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17666__$1,inst_17664);
} else
{if((state_val_17667 === (1)))
{var state_17666__$1 = state_17666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17666__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17671 = [null,null,null,null,null,null,null];(statearr_17671[(0)] = state_machine__6188__auto__);
(statearr_17671[(1)] = (1));
return statearr_17671;
});
var state_machine__6188__auto____1 = (function (state_17666){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17672){if((e17672 instanceof Object))
{var ex__6191__auto__ = e17672;var statearr_17673_17896 = state_17666;(statearr_17673_17896[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17897 = state_17666;
state_17666 = G__17897;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17666){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17674 = f__6203__auto__.call(null);(statearr_17674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___17898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17898,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17898,onView,onModel,onTick,mspf){
return (function (state_17683){var state_val_17684 = (state_17683[(1)]);if((state_val_17684 === (4)))
{var inst_17677 = (state_17683[(2)]);var inst_17678 = common.onModel.onNext(inst_17677);var state_17683__$1 = (function (){var statearr_17685 = state_17683;(statearr_17685[(7)] = inst_17678);
return statearr_17685;
})();var statearr_17686_17899 = state_17683__$1;(statearr_17686_17899[(2)] = null);
(statearr_17686_17899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17684 === (3)))
{var inst_17681 = (state_17683[(2)]);var state_17683__$1 = state_17683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17683__$1,inst_17681);
} else
{if((state_val_17684 === (2)))
{var state_17683__$1 = state_17683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17683__$1,(4),onModel);
} else
{if((state_val_17684 === (1)))
{var state_17683__$1 = state_17683;var statearr_17687_17900 = state_17683__$1;(statearr_17687_17900[(2)] = null);
(statearr_17687_17900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___17898,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17898,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17691 = [null,null,null,null,null,null,null,null];(statearr_17691[(0)] = state_machine__6188__auto__);
(statearr_17691[(1)] = (1));
return statearr_17691;
});
var state_machine__6188__auto____1 = (function (state_17683){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17683);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17692){if((e17692 instanceof Object))
{var ex__6191__auto__ = e17692;var statearr_17693_17901 = state_17683;(statearr_17693_17901[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17902 = state_17683;
state_17683 = G__17902;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17683){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17898,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17694 = f__6203__auto__.call(null);(statearr_17694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17898);
return statearr_17694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17898,onView,onModel,onTick,mspf))
);
var c__6202__auto___17903 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17903,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17903,onView,onModel,onTick,mspf){
return (function (state_17713){var state_val_17714 = (state_17713[(1)]);if((state_val_17714 === (5)))
{var inst_17697 = (state_17713[(7)]);var inst_17704 = (state_17713[(8)]);var inst_17708 = (state_17713[(2)]);var tmp17715 = inst_17697;var inst_17697__$1 = tmp17715;var inst_17698 = inst_17704;var state_17713__$1 = (function (){var statearr_17716 = state_17713;(statearr_17716[(7)] = inst_17697__$1);
(statearr_17716[(9)] = inst_17698);
(statearr_17716[(10)] = inst_17708);
return statearr_17716;
})();var statearr_17717_17904 = state_17713__$1;(statearr_17717_17904[(2)] = null);
(statearr_17717_17904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17714 === (4)))
{var inst_17698 = (state_17713[(9)]);var inst_17704 = (state_17713[(8)]);var inst_17702 = (state_17713[(2)]);var inst_17703 = (new Date());var inst_17704__$1 = inst_17703.getTime();var inst_17705 = (inst_17704__$1 - inst_17698);var inst_17706 = (inst_17705 / (1000));var state_17713__$1 = (function (){var statearr_17718 = state_17713;(statearr_17718[(11)] = inst_17702);
(statearr_17718[(8)] = inst_17704__$1);
return statearr_17718;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17713__$1,(5),onTick,inst_17706);
} else
{if((state_val_17714 === (3)))
{var inst_17711 = (state_17713[(2)]);var state_17713__$1 = state_17713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17713__$1,inst_17711);
} else
{if((state_val_17714 === (2)))
{var inst_17697 = (state_17713[(7)]);var inst_17700 = cljs.core.async.timeout.call(null,inst_17697);var state_17713__$1 = state_17713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17713__$1,(4),inst_17700);
} else
{if((state_val_17714 === (1)))
{var inst_17695 = (new Date());var inst_17696 = inst_17695.getTime();var inst_17697 = mspf;var inst_17698 = inst_17696;var state_17713__$1 = (function (){var statearr_17719 = state_17713;(statearr_17719[(7)] = inst_17697);
(statearr_17719[(9)] = inst_17698);
return statearr_17719;
})();var statearr_17720_17905 = state_17713__$1;(statearr_17720_17905[(2)] = null);
(statearr_17720_17905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___17903,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17903,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17724 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17724[(0)] = state_machine__6188__auto__);
(statearr_17724[(1)] = (1));
return statearr_17724;
});
var state_machine__6188__auto____1 = (function (state_17713){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17713);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17725){if((e17725 instanceof Object))
{var ex__6191__auto__ = e17725;var statearr_17726_17906 = state_17713;(statearr_17726_17906[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17907 = state_17713;
state_17713 = G__17907;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17713){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17903,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17727 = f__6203__auto__.call(null);(statearr_17727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17903);
return statearr_17727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17903,onView,onModel,onTick,mspf))
);
var c__6202__auto___17908 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17908,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17908,onView,onModel,onTick,mspf){
return (function (state_17758){var state_val_17759 = (state_17758[(1)]);if((state_val_17759 === (5)))
{var inst_17756 = (state_17758[(2)]);var state_17758__$1 = state_17758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17758__$1,inst_17756);
} else
{if((state_val_17759 === (4)))
{var inst_17740 = (state_17758[(2)]);var inst_17747 = [(100),(0),(0)];var inst_17748 = {"vel":inst_17747};var inst_17749 = [inst_17748];var inst_17750 = {"prototype":inst_17749};var inst_17751 = [(300),(300),(0)];var inst_17752 = [(100),(100),(0)];var inst_17753 = {"id":"x1","emit":inst_17750,"pos":inst_17751,"vel":inst_17752};var inst_17754 = ["edit-particle",inst_17753];var state_17758__$1 = (function (){var statearr_17760 = state_17758;(statearr_17760[(7)] = inst_17740);
return statearr_17760;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17758__$1,(5),onView,inst_17754);
} else
{if((state_val_17759 === (3)))
{var inst_17737 = (state_17758[(2)]);var inst_17738 = cljs.core.async.timeout.call(null,(1100));var state_17758__$1 = (function (){var statearr_17761 = state_17758;(statearr_17761[(8)] = inst_17737);
return statearr_17761;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17758__$1,(4),inst_17738);
} else
{if((state_val_17759 === (2)))
{var inst_17730 = (state_17758[(2)]);var inst_17733 = [(300),(300),(0)];var inst_17734 = {"id":"x1","pos":inst_17733};var inst_17735 = ["edit-particle",inst_17734];var state_17758__$1 = (function (){var statearr_17762 = state_17758;(statearr_17762[(9)] = inst_17730);
return statearr_17762;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17758__$1,(3),onView,inst_17735);
} else
{if((state_val_17759 === (1)))
{var inst_17728 = cljs.core.async.timeout.call(null,(1000));var state_17758__$1 = state_17758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17758__$1,(2),inst_17728);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___17908,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17908,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17766 = [null,null,null,null,null,null,null,null,null,null];(statearr_17766[(0)] = state_machine__6188__auto__);
(statearr_17766[(1)] = (1));
return statearr_17766;
});
var state_machine__6188__auto____1 = (function (state_17758){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17767){if((e17767 instanceof Object))
{var ex__6191__auto__ = e17767;var statearr_17768_17909 = state_17758;(statearr_17768_17909[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17910 = state_17758;
state_17758 = G__17910;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17758){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17908,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17769 = f__6203__auto__.call(null);(statearr_17769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17908);
return statearr_17769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17908,onView,onModel,onTick,mspf))
);
var c__6202__auto___17911 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17911,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17911,onView,onModel,onTick,mspf){
return (function (state_17856){var state_val_17857 = (state_17856[(1)]);if((state_val_17857 === (7)))
{var inst_17851 = (state_17856[(2)]);var inst_17777 = inst_17851;var state_17856__$1 = (function (){var statearr_17858 = state_17856;(statearr_17858[(7)] = inst_17777);
return statearr_17858;
})();var statearr_17859_17912 = state_17856__$1;(statearr_17859_17912[(2)] = null);
(statearr_17859_17912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (20)))
{var inst_17777 = (state_17856[(7)]);var state_17856__$1 = state_17856;var statearr_17860_17913 = state_17856__$1;(statearr_17860_17913[(2)] = inst_17777);
(statearr_17860_17913[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (1)))
{var inst_17770 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_17771 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17772 = cljs.core.List.EMPTY;var inst_17773 = [inst_17772];var inst_17774 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17771,inst_17773);var inst_17775 = [(0),inst_17774];var inst_17776 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17770,inst_17775);var inst_17777 = inst_17776;var state_17856__$1 = (function (){var statearr_17861 = state_17856;(statearr_17861[(7)] = inst_17777);
return statearr_17861;
})();var statearr_17862_17914 = state_17856__$1;(statearr_17862_17914[(2)] = null);
(statearr_17862_17914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (4)))
{var inst_17785 = (state_17856[(8)]);var inst_17783 = (state_17856[(9)]);var inst_17783__$1 = (state_17856[(2)]);var inst_17784 = cljs.core.nth.call(null,inst_17783__$1,(0),null);var inst_17785__$1 = cljs.core.nth.call(null,inst_17783__$1,(1),null);var inst_17789 = cljs.core._EQ_.call(null,onTick,inst_17785__$1);var state_17856__$1 = (function (){var statearr_17863 = state_17856;(statearr_17863[(8)] = inst_17785__$1);
(statearr_17863[(9)] = inst_17783__$1);
(statearr_17863[(10)] = inst_17784);
return statearr_17863;
})();if(inst_17789)
{var statearr_17864_17915 = state_17856__$1;(statearr_17864_17915[(1)] = (5));
} else
{var statearr_17865_17916 = state_17856__$1;(statearr_17865_17916[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (15)))
{var inst_17812 = (state_17856[(11)]);var inst_17777 = (state_17856[(7)]);var inst_17823 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17824 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17823,null));var inst_17825 = cljs.core.update_in.call(null,inst_17777,inst_17824,cljs.core.conj,inst_17812);var state_17856__$1 = state_17856;var statearr_17866_17917 = state_17856__$1;(statearr_17866_17917[(2)] = inst_17825);
(statearr_17866_17917[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (21)))
{var inst_17785 = (state_17856[(8)]);var inst_17843 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17785));var inst_17844 = (new Error(inst_17843));var inst_17845 = (function(){throw inst_17844})();var state_17856__$1 = state_17856;var statearr_17867_17918 = state_17856__$1;(statearr_17867_17918[(2)] = inst_17845);
(statearr_17867_17918[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (13)))
{var inst_17838 = (state_17856[(2)]);var state_17856__$1 = state_17856;var statearr_17868_17919 = state_17856__$1;(statearr_17868_17919[(2)] = inst_17838);
(statearr_17868_17919[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (22)))
{var inst_17847 = (state_17856[(2)]);var state_17856__$1 = state_17856;var statearr_17869_17920 = state_17856__$1;(statearr_17869_17920[(2)] = inst_17847);
(statearr_17869_17920[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (6)))
{var inst_17785 = (state_17856[(8)]);var inst_17797 = cljs.core._EQ_.call(null,onView,inst_17785);var state_17856__$1 = state_17856;if(inst_17797)
{var statearr_17870_17921 = state_17856__$1;(statearr_17870_17921[(1)] = (8));
} else
{var statearr_17871_17922 = state_17856__$1;(statearr_17871_17922[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (17)))
{var inst_17777 = (state_17856[(7)]);var state_17856__$1 = state_17856;var statearr_17872_17923 = state_17856__$1;(statearr_17872_17923[(2)] = inst_17777);
(statearr_17872_17923[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (3)))
{var inst_17854 = (state_17856[(2)]);var state_17856__$1 = state_17856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17856__$1,inst_17854);
} else
{if((state_val_17857 === (12)))
{var inst_17799 = (state_17856[(12)]);var inst_17829 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_17799);var state_17856__$1 = state_17856;if(inst_17829)
{var statearr_17873_17924 = state_17856__$1;(statearr_17873_17924[(1)] = (17));
} else
{var statearr_17874_17925 = state_17856__$1;(statearr_17874_17925[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (2)))
{var inst_17780 = [onView,onTick];var inst_17781 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17780,null));var state_17856__$1 = state_17856;return cljs.core.async.ioc_alts_BANG_.call(null,state_17856__$1,(4),inst_17781);
} else
{if((state_val_17857 === (19)))
{var inst_17836 = (state_17856[(2)]);var state_17856__$1 = state_17856;var statearr_17875_17926 = state_17856__$1;(statearr_17875_17926[(2)] = inst_17836);
(statearr_17875_17926[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (11)))
{var inst_17799 = (state_17856[(12)]);var inst_17811 = (state_17856[(13)]);var inst_17777 = (state_17856[(7)]);var inst_17800 = (state_17856[(14)]);var inst_17785 = (state_17856[(8)]);var inst_17783 = (state_17856[(9)]);var inst_17784 = (state_17856[(10)]);var inst_17806 = (function (){var ctx = inst_17777;var expr__17802 = inst_17799;var expr__17787 = inst_17785;var partInfo = inst_17800;var pred__17786 = cljs.core._EQ_;var v = inst_17784;var pred__17801 = cljs.core._EQ_;var params = inst_17800;var ch = inst_17785;var event = inst_17799;var vec__17779 = inst_17783;return ((function (ctx,expr__17802,expr__17787,partInfo,pred__17786,v,pred__17801,params,ch,event,vec__17779,inst_17799,inst_17811,inst_17777,inst_17800,inst_17785,inst_17783,inst_17784,state_val_17857,c__6202__auto___17911,onView,onModel,onTick,mspf){
return (function (p1__17429_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17429_SHARP_),partInfo.id);
});
;})(ctx,expr__17802,expr__17787,partInfo,pred__17786,v,pred__17801,params,ch,event,vec__17779,inst_17799,inst_17811,inst_17777,inst_17800,inst_17785,inst_17783,inst_17784,state_val_17857,c__6202__auto___17911,onView,onModel,onTick,mspf))
})();var inst_17807 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17808 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17807,null));var inst_17809 = cljs.core.get_in.call(null,inst_17777,inst_17808);var inst_17810 = cljs.core.filter.call(null,inst_17806,inst_17809);var inst_17811__$1 = cljs.core.first.call(null,inst_17810);var inst_17812 = app.main2.createParticle.call(null,inst_17800);var inst_17813 = cljs.core.some_QMARK_.call(null,inst_17811__$1);var state_17856__$1 = (function (){var statearr_17876 = state_17856;(statearr_17876[(13)] = inst_17811__$1);
(statearr_17876[(11)] = inst_17812);
return statearr_17876;
})();if(inst_17813)
{var statearr_17877_17927 = state_17856__$1;(statearr_17877_17927[(1)] = (14));
} else
{var statearr_17878_17928 = state_17856__$1;(statearr_17878_17928[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (9)))
{var inst_17785 = (state_17856[(8)]);var inst_17840 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_17785);var state_17856__$1 = state_17856;if(inst_17840)
{var statearr_17879_17929 = state_17856__$1;(statearr_17879_17929[(1)] = (20));
} else
{var statearr_17880_17930 = state_17856__$1;(statearr_17880_17930[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (5)))
{var inst_17777 = (state_17856[(7)]);var inst_17784 = (state_17856[(10)]);var inst_17791 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_17792 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17791,null));var inst_17793 = cljs.core.partial.call(null,app.particle.update,inst_17784);var inst_17794 = cljs.core.update_in.call(null,inst_17777,inst_17792,inst_17793);var inst_17795 = app.main2.draw2D.call(null,inst_17794);var state_17856__$1 = state_17856;var statearr_17881_17931 = state_17856__$1;(statearr_17881_17931[(2)] = inst_17795);
(statearr_17881_17931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (14)))
{var inst_17811 = (state_17856[(13)]);var inst_17812 = (state_17856[(11)]);var inst_17777 = (state_17856[(7)]);var inst_17815 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17816 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17815,null));var inst_17817 = [inst_17811];var inst_17818 = [inst_17812];var inst_17819 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17817,inst_17818);var inst_17820 = cljs.core.partial.call(null,cljs.core.replace,inst_17819);var inst_17821 = cljs.core.update_in.call(null,inst_17777,inst_17816,inst_17820);var state_17856__$1 = state_17856;var statearr_17882_17932 = state_17856__$1;(statearr_17882_17932[(2)] = inst_17821);
(statearr_17882_17932[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (16)))
{var inst_17827 = (state_17856[(2)]);var state_17856__$1 = state_17856;var statearr_17883_17933 = state_17856__$1;(statearr_17883_17933[(2)] = inst_17827);
(statearr_17883_17933[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (10)))
{var inst_17849 = (state_17856[(2)]);var state_17856__$1 = state_17856;var statearr_17884_17934 = state_17856__$1;(statearr_17884_17934[(2)] = inst_17849);
(statearr_17884_17934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (18)))
{var inst_17799 = (state_17856[(12)]);var inst_17832 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17799));var inst_17833 = (new Error(inst_17832));var inst_17834 = (function(){throw inst_17833})();var state_17856__$1 = state_17856;var statearr_17885_17935 = state_17856__$1;(statearr_17885_17935[(2)] = inst_17834);
(statearr_17885_17935[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17857 === (8)))
{var inst_17799 = (state_17856[(12)]);var inst_17784 = (state_17856[(10)]);var inst_17799__$1 = (inst_17784[(0)]);var inst_17800 = (inst_17784[(1)]);var inst_17804 = cljs.core._EQ_.call(null,"edit-particle",inst_17799__$1);var state_17856__$1 = (function (){var statearr_17886 = state_17856;(statearr_17886[(12)] = inst_17799__$1);
(statearr_17886[(14)] = inst_17800);
return statearr_17886;
})();if(inst_17804)
{var statearr_17887_17936 = state_17856__$1;(statearr_17887_17936[(1)] = (11));
} else
{var statearr_17888_17937 = state_17856__$1;(statearr_17888_17937[(1)] = (12));
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
});})(c__6202__auto___17911,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17911,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17892[(0)] = state_machine__6188__auto__);
(statearr_17892[(1)] = (1));
return statearr_17892;
});
var state_machine__6188__auto____1 = (function (state_17856){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17856);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17893){if((e17893 instanceof Object))
{var ex__6191__auto__ = e17893;var statearr_17894_17938 = state_17856;(statearr_17894_17938[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17939 = state_17856;
state_17856 = G__17939;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17856){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17911,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17895 = f__6203__auto__.call(null);(statearr_17895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17911);
return statearr_17895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17911,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
