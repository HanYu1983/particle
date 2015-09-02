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
app.particle.draw.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.particle.draw.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__24222){var map__24223 = p__24222;var map__24223__$1 = ((cljs.core.seq_QMARK_.call(null,map__24223))?cljs.core.apply.call(null,cljs.core.hash_map,map__24223):map__24223);var ctx = map__24223__$1;var map__24224 = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__24224__$1 = ((cljs.core.seq_QMARK_.call(null,map__24224))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);var ps = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__24225_24240 = canvas_ctx;(G__24225_24240["fillStyle"] = "white");
G__24225_24240.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__24225_24240["fillStyle"] = "red");
G__24225_24240.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__24226_24241 = cljs.core.seq.call(null,ps);var chunk__24227_24242 = null;var count__24228_24243 = (0);var i__24229_24244 = (0);while(true){
if((i__24229_24244 < count__24228_24243))
{var map__24230_24245 = cljs.core._nth.call(null,chunk__24227_24242,i__24229_24244);var map__24230_24246__$1 = ((cljs.core.seq_QMARK_.call(null,map__24230_24245))?cljs.core.apply.call(null,cljs.core.hash_map,map__24230_24245):map__24230_24245);var p_24247 = map__24230_24246__$1;var vec__24231_24248 = cljs.core.get.call(null,map__24230_24246__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_24249 = cljs.core.nth.call(null,vec__24231_24248,(0),null);var y_24250 = cljs.core.nth.call(null,vec__24231_24248,(1),null);var rot_24251 = cljs.core.nth.call(null,vec__24231_24248,(2),null);var vec__24232_24252 = cljs.core.get.call(null,map__24230_24246__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_24253 = cljs.core.nth.call(null,vec__24232_24252,(0),null);var ys_24254 = cljs.core.nth.call(null,vec__24232_24252,(1),null);var vec__24233_24255 = cljs.core.get.call(null,map__24230_24246__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_24256 = cljs.core.nth.call(null,vec__24233_24255,(0),null);var g_24257 = cljs.core.nth.call(null,vec__24233_24255,(1),null);var b_24258 = cljs.core.nth.call(null,vec__24233_24255,(2),null);var a_24259 = cljs.core.nth.call(null,vec__24233_24255,(3),null);var G__24234_24260 = canvas_ctx;G__24234_24260.save();
G__24234_24260.translate(x_24249,y_24250);
G__24234_24260.rotate(rot_24251);
(G__24234_24260["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_24256 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_24257 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_24258 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_24259)+")"));
G__24234_24260.fillRect((- (xs_24253 / (2))),(- (ys_24254 / (2))),xs_24253,ys_24254);
G__24234_24260.restore();
{
var G__24261 = seq__24226_24241;
var G__24262 = chunk__24227_24242;
var G__24263 = count__24228_24243;
var G__24264 = (i__24229_24244 + (1));
seq__24226_24241 = G__24261;
chunk__24227_24242 = G__24262;
count__24228_24243 = G__24263;
i__24229_24244 = G__24264;
continue;
}
} else
{var temp__4126__auto___24265 = cljs.core.seq.call(null,seq__24226_24241);if(temp__4126__auto___24265)
{var seq__24226_24266__$1 = temp__4126__auto___24265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24226_24266__$1))
{var c__4307__auto___24267 = cljs.core.chunk_first.call(null,seq__24226_24266__$1);{
var G__24268 = cljs.core.chunk_rest.call(null,seq__24226_24266__$1);
var G__24269 = c__4307__auto___24267;
var G__24270 = cljs.core.count.call(null,c__4307__auto___24267);
var G__24271 = (0);
seq__24226_24241 = G__24268;
chunk__24227_24242 = G__24269;
count__24228_24243 = G__24270;
i__24229_24244 = G__24271;
continue;
}
} else
{var map__24235_24272 = cljs.core.first.call(null,seq__24226_24266__$1);var map__24235_24273__$1 = ((cljs.core.seq_QMARK_.call(null,map__24235_24272))?cljs.core.apply.call(null,cljs.core.hash_map,map__24235_24272):map__24235_24272);var p_24274 = map__24235_24273__$1;var vec__24236_24275 = cljs.core.get.call(null,map__24235_24273__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_24276 = cljs.core.nth.call(null,vec__24236_24275,(0),null);var y_24277 = cljs.core.nth.call(null,vec__24236_24275,(1),null);var rot_24278 = cljs.core.nth.call(null,vec__24236_24275,(2),null);var vec__24237_24279 = cljs.core.get.call(null,map__24235_24273__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_24280 = cljs.core.nth.call(null,vec__24237_24279,(0),null);var ys_24281 = cljs.core.nth.call(null,vec__24237_24279,(1),null);var vec__24238_24282 = cljs.core.get.call(null,map__24235_24273__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_24283 = cljs.core.nth.call(null,vec__24238_24282,(0),null);var g_24284 = cljs.core.nth.call(null,vec__24238_24282,(1),null);var b_24285 = cljs.core.nth.call(null,vec__24238_24282,(2),null);var a_24286 = cljs.core.nth.call(null,vec__24238_24282,(3),null);var G__24239_24287 = canvas_ctx;G__24239_24287.save();
G__24239_24287.translate(x_24276,y_24277);
G__24239_24287.rotate(rot_24278);
(G__24239_24287["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_24283 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_24284 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_24285 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_24286)+")"));
G__24239_24287.fillRect((- (xs_24280 / (2))),(- (ys_24281 / (2))),xs_24280,ys_24281);
G__24239_24287.restore();
{
var G__24288 = cljs.core.next.call(null,seq__24226_24266__$1);
var G__24289 = null;
var G__24290 = (0);
var G__24291 = (0);
seq__24226_24241 = G__24288;
chunk__24227_24242 = G__24289;
count__24228_24243 = G__24290;
i__24229_24244 = G__24291;
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
app.particle.draw.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj24320 = {};return obj24320;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__24318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__24318,(0),null);var ch = cljs.core.nth.call(null,vec__24318,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__24318,cw,ch){
return (function (p__24321){var map__24322 = p__24321;var map__24322__$1 = ((cljs.core.seq_QMARK_.call(null,map__24322))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);var ctx = map__24322__$1;var timer = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__24323 = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__24323__$1 = ((cljs.core.seq_QMARK_.call(null,map__24323))?cljs.core.apply.call(null,cljs.core.hash_map,map__24323):map__24323);var ps = cljs.core.get.call(null,map__24323__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___24344 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___24344 == null))
{} else
{var faceImg_24345 = temp__4130__auto___24344;var tex_24346 = app.particle.draw.cacheTex.call(null,gl__$1,faceImg_24345);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_24346,faceImg_24345,temp__4130__auto___24344,map__24322,map__24322__$1,ctx,timer,map__24323,map__24323__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__24318,cw,ch){
return (function (pobj){var seq__24324 = cljs.core.seq.call(null,ps);var chunk__24325 = null;var count__24326 = (0);var i__24327 = (0);while(true){
if((i__24327 < count__24326))
{var map__24328 = cljs.core._nth.call(null,chunk__24325,i__24327);var map__24328__$1 = ((cljs.core.seq_QMARK_.call(null,map__24328))?cljs.core.apply.call(null,cljs.core.hash_map,map__24328):map__24328);var p = map__24328__$1;var vec__24329 = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__24329,(0),null);var y = cljs.core.nth.call(null,vec__24329,(1),null);var rot = cljs.core.nth.call(null,vec__24329,(2),null);var vec__24330 = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__24330,(0),null);var ys = cljs.core.nth.call(null,vec__24330,(1),null);var vec__24331 = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__24331,(0),null);var g = cljs.core.nth.call(null,vec__24331,(1),null);var b = cljs.core.nth.call(null,vec__24331,(2),null);var a = cljs.core.nth.call(null,vec__24331,(3),null);var proj_24347 = (function (){var G__24332 = (new THREE.Matrix4());G__24332.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__24332;
})();var tras_24348 = (function (){var G__24333 = (new THREE.Matrix4());G__24333.makeTranslation(x,y,(0));
G__24333.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__24333.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__24333;
})();var texTx_24349 = (function (){var G__24334 = (new THREE.Matrix3());return G__24334;
})();var colorTx_24350 = (function (){var G__24335 = (new THREE.Matrix4());G__24335.makeTranslation(r,g,b);
return G__24335;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_24347.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_24348.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_24346,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_24349.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_24350.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__24351 = seq__24324;
var G__24352 = chunk__24325;
var G__24353 = count__24326;
var G__24354 = (i__24327 + (1));
seq__24324 = G__24351;
chunk__24325 = G__24352;
count__24326 = G__24353;
i__24327 = G__24354;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24324);if(temp__4126__auto__)
{var seq__24324__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24324__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24324__$1);{
var G__24355 = cljs.core.chunk_rest.call(null,seq__24324__$1);
var G__24356 = c__4307__auto__;
var G__24357 = cljs.core.count.call(null,c__4307__auto__);
var G__24358 = (0);
seq__24324 = G__24355;
chunk__24325 = G__24356;
count__24326 = G__24357;
i__24327 = G__24358;
continue;
}
} else
{var map__24336 = cljs.core.first.call(null,seq__24324__$1);var map__24336__$1 = ((cljs.core.seq_QMARK_.call(null,map__24336))?cljs.core.apply.call(null,cljs.core.hash_map,map__24336):map__24336);var p = map__24336__$1;var vec__24337 = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__24337,(0),null);var y = cljs.core.nth.call(null,vec__24337,(1),null);var rot = cljs.core.nth.call(null,vec__24337,(2),null);var vec__24338 = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__24338,(0),null);var ys = cljs.core.nth.call(null,vec__24338,(1),null);var vec__24339 = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__24339,(0),null);var g = cljs.core.nth.call(null,vec__24339,(1),null);var b = cljs.core.nth.call(null,vec__24339,(2),null);var a = cljs.core.nth.call(null,vec__24339,(3),null);var proj_24359 = (function (){var G__24340 = (new THREE.Matrix4());G__24340.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__24340;
})();var tras_24360 = (function (){var G__24341 = (new THREE.Matrix4());G__24341.makeTranslation(x,y,(0));
G__24341.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__24341.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__24341;
})();var texTx_24361 = (function (){var G__24342 = (new THREE.Matrix3());return G__24342;
})();var colorTx_24362 = (function (){var G__24343 = (new THREE.Matrix4());G__24343.makeTranslation(r,g,b);
return G__24343;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_24359.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_24360.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_24346,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_24361.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_24362.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__24363 = cljs.core.next.call(null,seq__24324__$1);
var G__24364 = null;
var G__24365 = (0);
var G__24366 = (0);
seq__24324 = G__24363;
chunk__24325 = G__24364;
count__24326 = G__24365;
i__24327 = G__24366;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_24346,faceImg_24345,temp__4130__auto___24344,map__24322,map__24322__$1,ctx,timer,map__24323,map__24323__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__24318,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__24318,cw,ch))
});
