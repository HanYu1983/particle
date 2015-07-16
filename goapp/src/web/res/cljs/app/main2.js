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
return (function (p__35194){var map__35195 = p__35194;var map__35195__$1 = ((cljs.core.seq_QMARK_.call(null,map__35195))?cljs.core.apply.call(null,cljs.core.hash_map,map__35195):map__35195);var ctx = map__35195__$1;var map__35196 = cljs.core.get.call(null,map__35195__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__35196__$1 = ((cljs.core.seq_QMARK_.call(null,map__35196))?cljs.core.apply.call(null,cljs.core.hash_map,map__35196):map__35196);var ps = cljs.core.get.call(null,map__35196__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__35197_35212 = canvas_ctx;(G__35197_35212["fillStyle"] = "white");
G__35197_35212.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__35197_35212["fillStyle"] = "red");
G__35197_35212.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__35198_35213 = cljs.core.seq.call(null,ps);var chunk__35199_35214 = null;var count__35200_35215 = (0);var i__35201_35216 = (0);while(true){
if((i__35201_35216 < count__35200_35215))
{var map__35202_35217 = cljs.core._nth.call(null,chunk__35199_35214,i__35201_35216);var map__35202_35218__$1 = ((cljs.core.seq_QMARK_.call(null,map__35202_35217))?cljs.core.apply.call(null,cljs.core.hash_map,map__35202_35217):map__35202_35217);var p_35219 = map__35202_35218__$1;var vec__35203_35220 = cljs.core.get.call(null,map__35202_35218__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_35221 = cljs.core.nth.call(null,vec__35203_35220,(0),null);var y_35222 = cljs.core.nth.call(null,vec__35203_35220,(1),null);var rot_35223 = cljs.core.nth.call(null,vec__35203_35220,(2),null);var vec__35204_35224 = cljs.core.get.call(null,map__35202_35218__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_35225 = cljs.core.nth.call(null,vec__35204_35224,(0),null);var ys_35226 = cljs.core.nth.call(null,vec__35204_35224,(1),null);var vec__35205_35227 = cljs.core.get.call(null,map__35202_35218__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_35228 = cljs.core.nth.call(null,vec__35205_35227,(0),null);var g_35229 = cljs.core.nth.call(null,vec__35205_35227,(1),null);var b_35230 = cljs.core.nth.call(null,vec__35205_35227,(2),null);var a_35231 = cljs.core.nth.call(null,vec__35205_35227,(3),null);var G__35206_35232 = canvas_ctx;G__35206_35232.save();
G__35206_35232.translate(x_35221,y_35222);
G__35206_35232.rotate(rot_35223);
(G__35206_35232["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_35228 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_35229 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_35230 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_35231)+")"));
G__35206_35232.fillRect((0),(0),(- (xs_35225 / (2))),(- (ys_35226 / (2))));
G__35206_35232.restore();
{
var G__35233 = seq__35198_35213;
var G__35234 = chunk__35199_35214;
var G__35235 = count__35200_35215;
var G__35236 = (i__35201_35216 + (1));
seq__35198_35213 = G__35233;
chunk__35199_35214 = G__35234;
count__35200_35215 = G__35235;
i__35201_35216 = G__35236;
continue;
}
} else
{var temp__4126__auto___35237 = cljs.core.seq.call(null,seq__35198_35213);if(temp__4126__auto___35237)
{var seq__35198_35238__$1 = temp__4126__auto___35237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35198_35238__$1))
{var c__4307__auto___35239 = cljs.core.chunk_first.call(null,seq__35198_35238__$1);{
var G__35240 = cljs.core.chunk_rest.call(null,seq__35198_35238__$1);
var G__35241 = c__4307__auto___35239;
var G__35242 = cljs.core.count.call(null,c__4307__auto___35239);
var G__35243 = (0);
seq__35198_35213 = G__35240;
chunk__35199_35214 = G__35241;
count__35200_35215 = G__35242;
i__35201_35216 = G__35243;
continue;
}
} else
{var map__35207_35244 = cljs.core.first.call(null,seq__35198_35238__$1);var map__35207_35245__$1 = ((cljs.core.seq_QMARK_.call(null,map__35207_35244))?cljs.core.apply.call(null,cljs.core.hash_map,map__35207_35244):map__35207_35244);var p_35246 = map__35207_35245__$1;var vec__35208_35247 = cljs.core.get.call(null,map__35207_35245__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_35248 = cljs.core.nth.call(null,vec__35208_35247,(0),null);var y_35249 = cljs.core.nth.call(null,vec__35208_35247,(1),null);var rot_35250 = cljs.core.nth.call(null,vec__35208_35247,(2),null);var vec__35209_35251 = cljs.core.get.call(null,map__35207_35245__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_35252 = cljs.core.nth.call(null,vec__35209_35251,(0),null);var ys_35253 = cljs.core.nth.call(null,vec__35209_35251,(1),null);var vec__35210_35254 = cljs.core.get.call(null,map__35207_35245__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_35255 = cljs.core.nth.call(null,vec__35210_35254,(0),null);var g_35256 = cljs.core.nth.call(null,vec__35210_35254,(1),null);var b_35257 = cljs.core.nth.call(null,vec__35210_35254,(2),null);var a_35258 = cljs.core.nth.call(null,vec__35210_35254,(3),null);var G__35211_35259 = canvas_ctx;G__35211_35259.save();
G__35211_35259.translate(x_35248,y_35249);
G__35211_35259.rotate(rot_35250);
(G__35211_35259["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_35255 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_35256 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_35257 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_35258)+")"));
G__35211_35259.fillRect((0),(0),(- (xs_35252 / (2))),(- (ys_35253 / (2))));
G__35211_35259.restore();
{
var G__35260 = cljs.core.next.call(null,seq__35198_35238__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__35198_35213 = G__35260;
chunk__35199_35214 = G__35261;
count__35200_35215 = G__35262;
i__35201_35216 = G__35263;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj35292 = {};return obj35292;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__35290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__35290,(0),null);var ch = cljs.core.nth.call(null,vec__35290,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__35290,cw,ch){
return (function (p__35293){var map__35294 = p__35293;var map__35294__$1 = ((cljs.core.seq_QMARK_.call(null,map__35294))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);var ctx = map__35294__$1;var timer = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__35295 = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__35295__$1 = ((cljs.core.seq_QMARK_.call(null,map__35295))?cljs.core.apply.call(null,cljs.core.hash_map,map__35295):map__35295);var ps = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___35316 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___35316 == null))
{} else
{var faceImg_35317 = temp__4130__auto___35316;var tex_35318 = app.main2.cacheTex.call(null,gl__$1,faceImg_35317);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_35318,faceImg_35317,temp__4130__auto___35316,map__35294,map__35294__$1,ctx,timer,map__35295,map__35295__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__35290,cw,ch){
return (function (pobj){var seq__35296 = cljs.core.seq.call(null,ps);var chunk__35297 = null;var count__35298 = (0);var i__35299 = (0);while(true){
if((i__35299 < count__35298))
{var map__35300 = cljs.core._nth.call(null,chunk__35297,i__35299);var map__35300__$1 = ((cljs.core.seq_QMARK_.call(null,map__35300))?cljs.core.apply.call(null,cljs.core.hash_map,map__35300):map__35300);var p = map__35300__$1;var vec__35301 = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__35301,(0),null);var y = cljs.core.nth.call(null,vec__35301,(1),null);var rot = cljs.core.nth.call(null,vec__35301,(2),null);var vec__35302 = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__35302,(0),null);var ys = cljs.core.nth.call(null,vec__35302,(1),null);var vec__35303 = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__35303,(0),null);var g = cljs.core.nth.call(null,vec__35303,(1),null);var b = cljs.core.nth.call(null,vec__35303,(2),null);var a = cljs.core.nth.call(null,vec__35303,(3),null);var proj_35319 = (function (){var G__35304 = (new THREE.Matrix4());G__35304.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__35304;
})();var tras_35320 = (function (){var G__35305 = (new THREE.Matrix4());G__35305.makeTranslation(x,y,(0));
G__35305.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__35305.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__35305;
})();var texTx_35321 = (function (){var G__35306 = (new THREE.Matrix3());return G__35306;
})();var colorTx_35322 = (function (){var G__35307 = (new THREE.Matrix4());G__35307.makeTranslation(r,g,b);
return G__35307;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_35319.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_35320.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_35318,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_35321.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_35322.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__35323 = seq__35296;
var G__35324 = chunk__35297;
var G__35325 = count__35298;
var G__35326 = (i__35299 + (1));
seq__35296 = G__35323;
chunk__35297 = G__35324;
count__35298 = G__35325;
i__35299 = G__35326;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__35296);if(temp__4126__auto__)
{var seq__35296__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35296__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__35296__$1);{
var G__35327 = cljs.core.chunk_rest.call(null,seq__35296__$1);
var G__35328 = c__4307__auto__;
var G__35329 = cljs.core.count.call(null,c__4307__auto__);
var G__35330 = (0);
seq__35296 = G__35327;
chunk__35297 = G__35328;
count__35298 = G__35329;
i__35299 = G__35330;
continue;
}
} else
{var map__35308 = cljs.core.first.call(null,seq__35296__$1);var map__35308__$1 = ((cljs.core.seq_QMARK_.call(null,map__35308))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);var p = map__35308__$1;var vec__35309 = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__35309,(0),null);var y = cljs.core.nth.call(null,vec__35309,(1),null);var rot = cljs.core.nth.call(null,vec__35309,(2),null);var vec__35310 = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__35310,(0),null);var ys = cljs.core.nth.call(null,vec__35310,(1),null);var vec__35311 = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__35311,(0),null);var g = cljs.core.nth.call(null,vec__35311,(1),null);var b = cljs.core.nth.call(null,vec__35311,(2),null);var a = cljs.core.nth.call(null,vec__35311,(3),null);var proj_35331 = (function (){var G__35312 = (new THREE.Matrix4());G__35312.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__35312;
})();var tras_35332 = (function (){var G__35313 = (new THREE.Matrix4());G__35313.makeTranslation(x,y,(0));
G__35313.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__35313.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__35313;
})();var texTx_35333 = (function (){var G__35314 = (new THREE.Matrix3());return G__35314;
})();var colorTx_35334 = (function (){var G__35315 = (new THREE.Matrix4());G__35315.makeTranslation(r,g,b);
return G__35315;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_35331.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_35332.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_35318,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_35333.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_35334.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__35335 = cljs.core.next.call(null,seq__35296__$1);
var G__35336 = null;
var G__35337 = (0);
var G__35338 = (0);
seq__35296 = G__35335;
chunk__35297 = G__35336;
count__35298 = G__35337;
i__35299 = G__35338;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_35318,faceImg_35317,temp__4130__auto___35316,map__35294,map__35294__$1,ctx,timer,map__35295,map__35295__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__35290,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__35290,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35343){var vec__35344 = p__35343;var k = cljs.core.nth.call(null,vec__35344,(0),null);var v = cljs.core.nth.call(null,vec__35344,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__35345){var vec__35346 = p__35345;var k = cljs.core.nth.call(null,vec__35346,(0),null);var v = cljs.core.nth.call(null,vec__35346,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
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
return (function (state_35593){var state_val_35594 = (state_35593[(1)]);if((state_val_35594 === (2)))
{var inst_35591 = (state_35593[(2)]);var state_35593__$1 = state_35593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35593__$1,inst_35591);
} else
{if((state_val_35594 === (1)))
{var state_35593__$1 = state_35593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35593__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35598 = [null,null,null,null,null,null,null];(statearr_35598[(0)] = state_machine__6188__auto__);
(statearr_35598[(1)] = (1));
return statearr_35598;
});
var state_machine__6188__auto____1 = (function (state_35593){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35599){if((e35599 instanceof Object))
{var ex__6191__auto__ = e35599;var statearr_35600_35832 = state_35593;(statearr_35600_35832[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35833 = state_35593;
state_35593 = G__35833;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35593){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_35601 = f__6203__auto__.call(null);(statearr_35601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___35834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___35834,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___35834,onView,onModel,onTick,mspf){
return (function (state_35610){var state_val_35611 = (state_35610[(1)]);if((state_val_35611 === (4)))
{var inst_35604 = (state_35610[(2)]);var inst_35605 = common.onModel.onNext(inst_35604);var state_35610__$1 = (function (){var statearr_35612 = state_35610;(statearr_35612[(7)] = inst_35605);
return statearr_35612;
})();var statearr_35613_35835 = state_35610__$1;(statearr_35613_35835[(2)] = null);
(statearr_35613_35835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35611 === (3)))
{var inst_35608 = (state_35610[(2)]);var state_35610__$1 = state_35610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35610__$1,inst_35608);
} else
{if((state_val_35611 === (2)))
{var state_35610__$1 = state_35610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35610__$1,(4),onModel);
} else
{if((state_val_35611 === (1)))
{var state_35610__$1 = state_35610;var statearr_35614_35836 = state_35610__$1;(statearr_35614_35836[(2)] = null);
(statearr_35614_35836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___35834,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___35834,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35618 = [null,null,null,null,null,null,null,null];(statearr_35618[(0)] = state_machine__6188__auto__);
(statearr_35618[(1)] = (1));
return statearr_35618;
});
var state_machine__6188__auto____1 = (function (state_35610){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35619){if((e35619 instanceof Object))
{var ex__6191__auto__ = e35619;var statearr_35620_35837 = state_35610;(statearr_35620_35837[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35838 = state_35610;
state_35610 = G__35838;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35610){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___35834,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_35621 = f__6203__auto__.call(null);(statearr_35621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___35834);
return statearr_35621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___35834,onView,onModel,onTick,mspf))
);
var c__6202__auto___35839 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___35839,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___35839,onView,onModel,onTick,mspf){
return (function (state_35640){var state_val_35641 = (state_35640[(1)]);if((state_val_35641 === (5)))
{var inst_35631 = (state_35640[(7)]);var inst_35624 = (state_35640[(8)]);var inst_35635 = (state_35640[(2)]);var tmp35642 = inst_35624;var inst_35624__$1 = tmp35642;var inst_35625 = inst_35631;var state_35640__$1 = (function (){var statearr_35643 = state_35640;(statearr_35643[(9)] = inst_35635);
(statearr_35643[(10)] = inst_35625);
(statearr_35643[(8)] = inst_35624__$1);
return statearr_35643;
})();var statearr_35644_35840 = state_35640__$1;(statearr_35644_35840[(2)] = null);
(statearr_35644_35840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35641 === (4)))
{var inst_35625 = (state_35640[(10)]);var inst_35631 = (state_35640[(7)]);var inst_35629 = (state_35640[(2)]);var inst_35630 = (new Date());var inst_35631__$1 = inst_35630.getTime();var inst_35632 = (inst_35631__$1 - inst_35625);var inst_35633 = (inst_35632 / (1000));var state_35640__$1 = (function (){var statearr_35645 = state_35640;(statearr_35645[(11)] = inst_35629);
(statearr_35645[(7)] = inst_35631__$1);
return statearr_35645;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35640__$1,(5),onTick,inst_35633);
} else
{if((state_val_35641 === (3)))
{var inst_35638 = (state_35640[(2)]);var state_35640__$1 = state_35640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35640__$1,inst_35638);
} else
{if((state_val_35641 === (2)))
{var inst_35624 = (state_35640[(8)]);var inst_35627 = cljs.core.async.timeout.call(null,inst_35624);var state_35640__$1 = state_35640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35640__$1,(4),inst_35627);
} else
{if((state_val_35641 === (1)))
{var inst_35622 = (new Date());var inst_35623 = inst_35622.getTime();var inst_35624 = mspf;var inst_35625 = inst_35623;var state_35640__$1 = (function (){var statearr_35646 = state_35640;(statearr_35646[(10)] = inst_35625);
(statearr_35646[(8)] = inst_35624);
return statearr_35646;
})();var statearr_35647_35841 = state_35640__$1;(statearr_35647_35841[(2)] = null);
(statearr_35647_35841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___35839,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___35839,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35651 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35651[(0)] = state_machine__6188__auto__);
(statearr_35651[(1)] = (1));
return statearr_35651;
});
var state_machine__6188__auto____1 = (function (state_35640){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35640);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35652){if((e35652 instanceof Object))
{var ex__6191__auto__ = e35652;var statearr_35653_35842 = state_35640;(statearr_35653_35842[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35843 = state_35640;
state_35640 = G__35843;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35640){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___35839,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_35654 = f__6203__auto__.call(null);(statearr_35654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___35839);
return statearr_35654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___35839,onView,onModel,onTick,mspf))
);
var c__6202__auto___35844 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___35844,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___35844,onView,onModel,onTick,mspf){
return (function (state_35688){var state_val_35689 = (state_35688[(1)]);if((state_val_35689 === (5)))
{var inst_35686 = (state_35688[(2)]);var state_35688__$1 = state_35688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35688__$1,inst_35686);
} else
{if((state_val_35689 === (4)))
{var inst_35667 = (state_35688[(2)]);var inst_35674 = [(0),(0),(0)];var inst_35675 = [(10),(20)];var inst_35676 = [(100),(0),3.14];var inst_35677 = {"position":inst_35674,"size":inst_35675,"vel":inst_35676};var inst_35678 = [inst_35677];var inst_35679 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_35678};var inst_35680 = [(30),(10)];var inst_35681 = [(300),(300),(0)];var inst_35682 = [(100),(100),(0)];var inst_35683 = {"id":"x1","emit":inst_35679,"size":inst_35680,"pos":inst_35681,"vel":inst_35682};var inst_35684 = ["edit-particle",inst_35683];var state_35688__$1 = (function (){var statearr_35690 = state_35688;(statearr_35690[(7)] = inst_35667);
return statearr_35690;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35688__$1,(5),onView,inst_35684);
} else
{if((state_val_35689 === (3)))
{var inst_35664 = (state_35688[(2)]);var inst_35665 = cljs.core.async.timeout.call(null,(1100));var state_35688__$1 = (function (){var statearr_35691 = state_35688;(statearr_35691[(8)] = inst_35664);
return statearr_35691;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(4),inst_35665);
} else
{if((state_val_35689 === (2)))
{var inst_35657 = (state_35688[(2)]);var inst_35660 = [(300),(300),(0)];var inst_35661 = {"id":"x1","pos":inst_35660};var inst_35662 = ["edit-particle",inst_35661];var state_35688__$1 = (function (){var statearr_35692 = state_35688;(statearr_35692[(9)] = inst_35657);
return statearr_35692;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35688__$1,(3),onView,inst_35662);
} else
{if((state_val_35689 === (1)))
{var inst_35655 = cljs.core.async.timeout.call(null,(1000));var state_35688__$1 = state_35688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(2),inst_35655);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___35844,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___35844,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35696 = [null,null,null,null,null,null,null,null,null,null];(statearr_35696[(0)] = state_machine__6188__auto__);
(statearr_35696[(1)] = (1));
return statearr_35696;
});
var state_machine__6188__auto____1 = (function (state_35688){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35688);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35697){if((e35697 instanceof Object))
{var ex__6191__auto__ = e35697;var statearr_35698_35845 = state_35688;(statearr_35698_35845[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35846 = state_35688;
state_35688 = G__35846;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___35844,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_35699 = f__6203__auto__.call(null);(statearr_35699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___35844);
return statearr_35699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___35844,onView,onModel,onTick,mspf))
);
var c__6202__auto___35847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___35847,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___35847,onView,onModel,onTick,mspf){
return (function (state_35792){var state_val_35793 = (state_35792[(1)]);if((state_val_35793 === (7)))
{var inst_35787 = (state_35792[(2)]);var inst_35707 = inst_35787;var state_35792__$1 = (function (){var statearr_35794 = state_35792;(statearr_35794[(7)] = inst_35707);
return statearr_35794;
})();var statearr_35795_35848 = state_35792__$1;(statearr_35795_35848[(2)] = null);
(statearr_35795_35848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (20)))
{var inst_35707 = (state_35792[(7)]);var state_35792__$1 = state_35792;var statearr_35796_35849 = state_35792__$1;(statearr_35796_35849[(2)] = inst_35707);
(statearr_35796_35849[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (1)))
{var inst_35700 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_35701 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_35702 = cljs.core.List.EMPTY;var inst_35703 = [inst_35702];var inst_35704 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_35701,inst_35703);var inst_35705 = [(0),inst_35704];var inst_35706 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_35700,inst_35705);var inst_35707 = inst_35706;var state_35792__$1 = (function (){var statearr_35797 = state_35792;(statearr_35797[(7)] = inst_35707);
return statearr_35797;
})();var statearr_35798_35850 = state_35792__$1;(statearr_35798_35850[(2)] = null);
(statearr_35798_35850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (4)))
{var inst_35713 = (state_35792[(8)]);var inst_35715 = (state_35792[(9)]);var inst_35713__$1 = (state_35792[(2)]);var inst_35714 = cljs.core.nth.call(null,inst_35713__$1,(0),null);var inst_35715__$1 = cljs.core.nth.call(null,inst_35713__$1,(1),null);var inst_35719 = cljs.core._EQ_.call(null,onTick,inst_35715__$1);var state_35792__$1 = (function (){var statearr_35799 = state_35792;(statearr_35799[(8)] = inst_35713__$1);
(statearr_35799[(9)] = inst_35715__$1);
(statearr_35799[(10)] = inst_35714);
return statearr_35799;
})();if(inst_35719)
{var statearr_35800_35851 = state_35792__$1;(statearr_35800_35851[(1)] = (5));
} else
{var statearr_35801_35852 = state_35792__$1;(statearr_35801_35852[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (15)))
{var inst_35742 = (state_35792[(11)]);var inst_35707 = (state_35792[(7)]);var inst_35759 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_35760 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35759,null));var inst_35761 = cljs.core.update_in.call(null,inst_35707,inst_35760,cljs.core.conj,inst_35742);var state_35792__$1 = state_35792;var statearr_35802_35853 = state_35792__$1;(statearr_35802_35853[(2)] = inst_35761);
(statearr_35802_35853[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (21)))
{var inst_35715 = (state_35792[(9)]);var inst_35779 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35715));var inst_35780 = (new Error(inst_35779));var inst_35781 = (function(){throw inst_35780})();var state_35792__$1 = state_35792;var statearr_35803_35854 = state_35792__$1;(statearr_35803_35854[(2)] = inst_35781);
(statearr_35803_35854[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (13)))
{var inst_35774 = (state_35792[(2)]);var state_35792__$1 = state_35792;var statearr_35804_35855 = state_35792__$1;(statearr_35804_35855[(2)] = inst_35774);
(statearr_35804_35855[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (22)))
{var inst_35783 = (state_35792[(2)]);var state_35792__$1 = state_35792;var statearr_35805_35856 = state_35792__$1;(statearr_35805_35856[(2)] = inst_35783);
(statearr_35805_35856[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (6)))
{var inst_35715 = (state_35792[(9)]);var inst_35727 = cljs.core._EQ_.call(null,onView,inst_35715);var state_35792__$1 = state_35792;if(inst_35727)
{var statearr_35806_35857 = state_35792__$1;(statearr_35806_35857[(1)] = (8));
} else
{var statearr_35807_35858 = state_35792__$1;(statearr_35807_35858[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (17)))
{var inst_35707 = (state_35792[(7)]);var state_35792__$1 = state_35792;var statearr_35808_35859 = state_35792__$1;(statearr_35808_35859[(2)] = inst_35707);
(statearr_35808_35859[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (3)))
{var inst_35790 = (state_35792[(2)]);var state_35792__$1 = state_35792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35792__$1,inst_35790);
} else
{if((state_val_35793 === (12)))
{var inst_35729 = (state_35792[(12)]);var inst_35765 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_35729);var state_35792__$1 = state_35792;if(inst_35765)
{var statearr_35809_35860 = state_35792__$1;(statearr_35809_35860[(1)] = (17));
} else
{var statearr_35810_35861 = state_35792__$1;(statearr_35810_35861[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (2)))
{var inst_35710 = [onView,onTick];var inst_35711 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35710,null));var state_35792__$1 = state_35792;return cljs.core.async.ioc_alts_BANG_.call(null,state_35792__$1,(4),inst_35711);
} else
{if((state_val_35793 === (19)))
{var inst_35772 = (state_35792[(2)]);var state_35792__$1 = state_35792;var statearr_35811_35862 = state_35792__$1;(statearr_35811_35862[(2)] = inst_35772);
(statearr_35811_35862[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (11)))
{var inst_35730 = (state_35792[(13)]);var inst_35741 = (state_35792[(14)]);var inst_35713 = (state_35792[(8)]);var inst_35707 = (state_35792[(7)]);var inst_35715 = (state_35792[(9)]);var inst_35729 = (state_35792[(12)]);var inst_35714 = (state_35792[(10)]);var inst_35736 = (function (){var expr__35717 = inst_35715;var ctx = inst_35707;var pred__35716 = cljs.core._EQ_;var partInfo = inst_35730;var pred__35731 = cljs.core._EQ_;var v = inst_35714;var vec__35709 = inst_35713;var params = inst_35730;var expr__35732 = inst_35729;var ch = inst_35715;var event = inst_35729;return ((function (expr__35717,ctx,pred__35716,partInfo,pred__35731,v,vec__35709,params,expr__35732,ch,event,inst_35730,inst_35741,inst_35713,inst_35707,inst_35715,inst_35729,inst_35714,state_val_35793,c__6202__auto___35847,onView,onModel,onTick,mspf){
return (function (p1__35347_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35347_SHARP_),partInfo.id);
});
;})(expr__35717,ctx,pred__35716,partInfo,pred__35731,v,vec__35709,params,expr__35732,ch,event,inst_35730,inst_35741,inst_35713,inst_35707,inst_35715,inst_35729,inst_35714,state_val_35793,c__6202__auto___35847,onView,onModel,onTick,mspf))
})();var inst_35737 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_35738 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35737,null));var inst_35739 = cljs.core.get_in.call(null,inst_35707,inst_35738);var inst_35740 = cljs.core.filter.call(null,inst_35736,inst_35739);var inst_35741__$1 = cljs.core.first.call(null,inst_35740);var inst_35742 = app.main2.createParticle.call(null,inst_35730);var inst_35743 = cljs.core.some_QMARK_.call(null,inst_35741__$1);var state_35792__$1 = (function (){var statearr_35812 = state_35792;(statearr_35812[(11)] = inst_35742);
(statearr_35812[(14)] = inst_35741__$1);
return statearr_35812;
})();if(inst_35743)
{var statearr_35813_35863 = state_35792__$1;(statearr_35813_35863[(1)] = (14));
} else
{var statearr_35814_35864 = state_35792__$1;(statearr_35814_35864[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (9)))
{var inst_35715 = (state_35792[(9)]);var inst_35776 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_35715);var state_35792__$1 = state_35792;if(inst_35776)
{var statearr_35815_35865 = state_35792__$1;(statearr_35815_35865[(1)] = (20));
} else
{var statearr_35816_35866 = state_35792__$1;(statearr_35816_35866[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (5)))
{var inst_35707 = (state_35792[(7)]);var inst_35714 = (state_35792[(10)]);var inst_35721 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_35722 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35721,null));var inst_35723 = cljs.core.partial.call(null,app.particle.update,inst_35714);var inst_35724 = cljs.core.update_in.call(null,inst_35707,inst_35722,inst_35723);var inst_35725 = app.main2.draw2D.call(null,inst_35724);var state_35792__$1 = state_35792;var statearr_35817_35867 = state_35792__$1;(statearr_35817_35867[(2)] = inst_35725);
(statearr_35817_35867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (14)))
{var inst_35742 = (state_35792[(11)]);var inst_35741 = (state_35792[(14)]);var inst_35707 = (state_35792[(7)]);var inst_35745 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_35746 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35745,null));var inst_35747 = [inst_35741];var inst_35748 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_35749 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_35741);var inst_35750 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_35741);var inst_35751 = [inst_35749,inst_35750];var inst_35752 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_35748,inst_35751);var inst_35753 = cljs.core.merge.call(null,inst_35742,inst_35752);var inst_35754 = [inst_35753];var inst_35755 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_35747,inst_35754);var inst_35756 = cljs.core.partial.call(null,cljs.core.replace,inst_35755);var inst_35757 = cljs.core.update_in.call(null,inst_35707,inst_35746,inst_35756);var state_35792__$1 = state_35792;var statearr_35818_35868 = state_35792__$1;(statearr_35818_35868[(2)] = inst_35757);
(statearr_35818_35868[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (16)))
{var inst_35763 = (state_35792[(2)]);var state_35792__$1 = state_35792;var statearr_35819_35869 = state_35792__$1;(statearr_35819_35869[(2)] = inst_35763);
(statearr_35819_35869[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (10)))
{var inst_35785 = (state_35792[(2)]);var state_35792__$1 = state_35792;var statearr_35820_35870 = state_35792__$1;(statearr_35820_35870[(2)] = inst_35785);
(statearr_35820_35870[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (18)))
{var inst_35729 = (state_35792[(12)]);var inst_35768 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35729));var inst_35769 = (new Error(inst_35768));var inst_35770 = (function(){throw inst_35769})();var state_35792__$1 = state_35792;var statearr_35821_35871 = state_35792__$1;(statearr_35821_35871[(2)] = inst_35770);
(statearr_35821_35871[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35793 === (8)))
{var inst_35729 = (state_35792[(12)]);var inst_35714 = (state_35792[(10)]);var inst_35729__$1 = (inst_35714[(0)]);var inst_35730 = (inst_35714[(1)]);var inst_35734 = cljs.core._EQ_.call(null,"edit-particle",inst_35729__$1);var state_35792__$1 = (function (){var statearr_35822 = state_35792;(statearr_35822[(13)] = inst_35730);
(statearr_35822[(12)] = inst_35729__$1);
return statearr_35822;
})();if(inst_35734)
{var statearr_35823_35872 = state_35792__$1;(statearr_35823_35872[(1)] = (11));
} else
{var statearr_35824_35873 = state_35792__$1;(statearr_35824_35873[(1)] = (12));
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
});})(c__6202__auto___35847,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___35847,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35828[(0)] = state_machine__6188__auto__);
(statearr_35828[(1)] = (1));
return statearr_35828;
});
var state_machine__6188__auto____1 = (function (state_35792){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35792);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35829){if((e35829 instanceof Object))
{var ex__6191__auto__ = e35829;var statearr_35830_35874 = state_35792;(statearr_35830_35874[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35792);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35875 = state_35792;
state_35792 = G__35875;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35792){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___35847,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_35831 = f__6203__auto__.call(null);(statearr_35831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___35847);
return statearr_35831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___35847,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
