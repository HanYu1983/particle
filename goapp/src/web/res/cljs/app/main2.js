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
return (function (p__22176){var map__22177 = p__22176;var map__22177__$1 = ((cljs.core.seq_QMARK_.call(null,map__22177))?cljs.core.apply.call(null,cljs.core.hash_map,map__22177):map__22177);var ctx = map__22177__$1;var map__22178 = cljs.core.get.call(null,map__22177__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__22178__$1 = ((cljs.core.seq_QMARK_.call(null,map__22178))?cljs.core.apply.call(null,cljs.core.hash_map,map__22178):map__22178);var ps = cljs.core.get.call(null,map__22178__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__22179_22194 = canvas_ctx;(G__22179_22194["fillStyle"] = "white");
G__22179_22194.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__22179_22194["fillStyle"] = "red");
G__22179_22194.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__22180_22195 = cljs.core.seq.call(null,ps);var chunk__22181_22196 = null;var count__22182_22197 = (0);var i__22183_22198 = (0);while(true){
if((i__22183_22198 < count__22182_22197))
{var map__22184_22199 = cljs.core._nth.call(null,chunk__22181_22196,i__22183_22198);var map__22184_22200__$1 = ((cljs.core.seq_QMARK_.call(null,map__22184_22199))?cljs.core.apply.call(null,cljs.core.hash_map,map__22184_22199):map__22184_22199);var p_22201 = map__22184_22200__$1;var vec__22185_22202 = cljs.core.get.call(null,map__22184_22200__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_22203 = cljs.core.nth.call(null,vec__22185_22202,(0),null);var y_22204 = cljs.core.nth.call(null,vec__22185_22202,(1),null);var r_22205 = cljs.core.nth.call(null,vec__22185_22202,(2),null);var vec__22186_22206 = cljs.core.get.call(null,map__22184_22200__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_22207 = cljs.core.nth.call(null,vec__22186_22206,(0),null);var ys_22208 = cljs.core.nth.call(null,vec__22186_22206,(1),null);var vec__22187_22209 = cljs.core.get.call(null,map__22184_22200__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_22210__$1 = cljs.core.nth.call(null,vec__22187_22209,(0),null);var g_22211 = cljs.core.nth.call(null,vec__22187_22209,(1),null);var b_22212 = cljs.core.nth.call(null,vec__22187_22209,(2),null);var a_22213 = cljs.core.nth.call(null,vec__22187_22209,(3),null);var G__22188_22214 = canvas_ctx;(G__22188_22214["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_22210__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_22211 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_22212 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_22213)+")"));
G__22188_22214.fillRect(x_22203,y_22204,xs_22207,ys_22208);
{
var G__22215 = seq__22180_22195;
var G__22216 = chunk__22181_22196;
var G__22217 = count__22182_22197;
var G__22218 = (i__22183_22198 + (1));
seq__22180_22195 = G__22215;
chunk__22181_22196 = G__22216;
count__22182_22197 = G__22217;
i__22183_22198 = G__22218;
continue;
}
} else
{var temp__4126__auto___22219 = cljs.core.seq.call(null,seq__22180_22195);if(temp__4126__auto___22219)
{var seq__22180_22220__$1 = temp__4126__auto___22219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22180_22220__$1))
{var c__4307__auto___22221 = cljs.core.chunk_first.call(null,seq__22180_22220__$1);{
var G__22222 = cljs.core.chunk_rest.call(null,seq__22180_22220__$1);
var G__22223 = c__4307__auto___22221;
var G__22224 = cljs.core.count.call(null,c__4307__auto___22221);
var G__22225 = (0);
seq__22180_22195 = G__22222;
chunk__22181_22196 = G__22223;
count__22182_22197 = G__22224;
i__22183_22198 = G__22225;
continue;
}
} else
{var map__22189_22226 = cljs.core.first.call(null,seq__22180_22220__$1);var map__22189_22227__$1 = ((cljs.core.seq_QMARK_.call(null,map__22189_22226))?cljs.core.apply.call(null,cljs.core.hash_map,map__22189_22226):map__22189_22226);var p_22228 = map__22189_22227__$1;var vec__22190_22229 = cljs.core.get.call(null,map__22189_22227__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_22230 = cljs.core.nth.call(null,vec__22190_22229,(0),null);var y_22231 = cljs.core.nth.call(null,vec__22190_22229,(1),null);var r_22232 = cljs.core.nth.call(null,vec__22190_22229,(2),null);var vec__22191_22233 = cljs.core.get.call(null,map__22189_22227__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_22234 = cljs.core.nth.call(null,vec__22191_22233,(0),null);var ys_22235 = cljs.core.nth.call(null,vec__22191_22233,(1),null);var vec__22192_22236 = cljs.core.get.call(null,map__22189_22227__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_22237__$1 = cljs.core.nth.call(null,vec__22192_22236,(0),null);var g_22238 = cljs.core.nth.call(null,vec__22192_22236,(1),null);var b_22239 = cljs.core.nth.call(null,vec__22192_22236,(2),null);var a_22240 = cljs.core.nth.call(null,vec__22192_22236,(3),null);var G__22193_22241 = canvas_ctx;(G__22193_22241["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_22237__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_22238 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_22239 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_22240)+")"));
G__22193_22241.fillRect(x_22230,y_22231,xs_22234,ys_22235);
{
var G__22242 = cljs.core.next.call(null,seq__22180_22220__$1);
var G__22243 = null;
var G__22244 = (0);
var G__22245 = (0);
seq__22180_22195 = G__22242;
chunk__22181_22196 = G__22243;
count__22182_22197 = G__22244;
i__22183_22198 = G__22245;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj22274 = {};return obj22274;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__22272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__22272,(0),null);var ch = cljs.core.nth.call(null,vec__22272,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__22272,cw,ch){
return (function (p__22275){var map__22276 = p__22275;var map__22276__$1 = ((cljs.core.seq_QMARK_.call(null,map__22276))?cljs.core.apply.call(null,cljs.core.hash_map,map__22276):map__22276);var ctx = map__22276__$1;var timer = cljs.core.get.call(null,map__22276__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__22277 = cljs.core.get.call(null,map__22276__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__22277__$1 = ((cljs.core.seq_QMARK_.call(null,map__22277))?cljs.core.apply.call(null,cljs.core.hash_map,map__22277):map__22277);var ps = cljs.core.get.call(null,map__22277__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___22298 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___22298 == null))
{} else
{var faceImg_22299 = temp__4130__auto___22298;var tex_22300 = app.main2.cacheTex.call(null,gl__$1,faceImg_22299);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_22300,faceImg_22299,temp__4130__auto___22298,map__22276,map__22276__$1,ctx,timer,map__22277,map__22277__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__22272,cw,ch){
return (function (pobj){var seq__22278 = cljs.core.seq.call(null,ps);var chunk__22279 = null;var count__22280 = (0);var i__22281 = (0);while(true){
if((i__22281 < count__22280))
{var map__22282 = cljs.core._nth.call(null,chunk__22279,i__22281);var map__22282__$1 = ((cljs.core.seq_QMARK_.call(null,map__22282))?cljs.core.apply.call(null,cljs.core.hash_map,map__22282):map__22282);var p = map__22282__$1;var vec__22283 = cljs.core.get.call(null,map__22282__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__22283,(0),null);var y = cljs.core.nth.call(null,vec__22283,(1),null);var rot = cljs.core.nth.call(null,vec__22283,(2),null);var vec__22284 = cljs.core.get.call(null,map__22282__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__22284,(0),null);var ys = cljs.core.nth.call(null,vec__22284,(1),null);var vec__22285 = cljs.core.get.call(null,map__22282__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__22285,(0),null);var g = cljs.core.nth.call(null,vec__22285,(1),null);var b = cljs.core.nth.call(null,vec__22285,(2),null);var a = cljs.core.nth.call(null,vec__22285,(3),null);var proj_22301 = (function (){var G__22286 = (new THREE.Matrix4());G__22286.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__22286;
})();var tras_22302 = (function (){var G__22287 = (new THREE.Matrix4());G__22287.makeTranslation(x,y,(0));
G__22287.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__22287.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__22287;
})();var texTx_22303 = (function (){var G__22288 = (new THREE.Matrix3());return G__22288;
})();var colorTx_22304 = (function (){var G__22289 = (new THREE.Matrix4());G__22289.makeTranslation(r,g,b);
return G__22289;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_22301.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_22302.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_22300,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_22303.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_22304.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__22305 = seq__22278;
var G__22306 = chunk__22279;
var G__22307 = count__22280;
var G__22308 = (i__22281 + (1));
seq__22278 = G__22305;
chunk__22279 = G__22306;
count__22280 = G__22307;
i__22281 = G__22308;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22278);if(temp__4126__auto__)
{var seq__22278__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22278__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__22278__$1);{
var G__22309 = cljs.core.chunk_rest.call(null,seq__22278__$1);
var G__22310 = c__4307__auto__;
var G__22311 = cljs.core.count.call(null,c__4307__auto__);
var G__22312 = (0);
seq__22278 = G__22309;
chunk__22279 = G__22310;
count__22280 = G__22311;
i__22281 = G__22312;
continue;
}
} else
{var map__22290 = cljs.core.first.call(null,seq__22278__$1);var map__22290__$1 = ((cljs.core.seq_QMARK_.call(null,map__22290))?cljs.core.apply.call(null,cljs.core.hash_map,map__22290):map__22290);var p = map__22290__$1;var vec__22291 = cljs.core.get.call(null,map__22290__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__22291,(0),null);var y = cljs.core.nth.call(null,vec__22291,(1),null);var rot = cljs.core.nth.call(null,vec__22291,(2),null);var vec__22292 = cljs.core.get.call(null,map__22290__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__22292,(0),null);var ys = cljs.core.nth.call(null,vec__22292,(1),null);var vec__22293 = cljs.core.get.call(null,map__22290__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__22293,(0),null);var g = cljs.core.nth.call(null,vec__22293,(1),null);var b = cljs.core.nth.call(null,vec__22293,(2),null);var a = cljs.core.nth.call(null,vec__22293,(3),null);var proj_22313 = (function (){var G__22294 = (new THREE.Matrix4());G__22294.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__22294;
})();var tras_22314 = (function (){var G__22295 = (new THREE.Matrix4());G__22295.makeTranslation(x,y,(0));
G__22295.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__22295.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__22295;
})();var texTx_22315 = (function (){var G__22296 = (new THREE.Matrix3());return G__22296;
})();var colorTx_22316 = (function (){var G__22297 = (new THREE.Matrix4());G__22297.makeTranslation(r,g,b);
return G__22297;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_22313.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_22314.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_22300,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_22315.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_22316.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__22317 = cljs.core.next.call(null,seq__22278__$1);
var G__22318 = null;
var G__22319 = (0);
var G__22320 = (0);
seq__22278 = G__22317;
chunk__22279 = G__22318;
count__22280 = G__22319;
i__22281 = G__22320;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_22300,faceImg_22299,temp__4130__auto___22298,map__22276,map__22276__$1,ctx,timer,map__22277,map__22277__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__22272,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__22272,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22325){var vec__22326 = p__22325;var k = cljs.core.nth.call(null,vec__22326,(0),null);var v = cljs.core.nth.call(null,vec__22326,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__22327){var vec__22328 = p__22327;var k = cljs.core.nth.call(null,vec__22328,(0),null);var v = cljs.core.nth.call(null,vec__22328,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
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
return (function (state_22572){var state_val_22573 = (state_22572[(1)]);if((state_val_22573 === (2)))
{var inst_22570 = (state_22572[(2)]);var state_22572__$1 = state_22572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22572__$1,inst_22570);
} else
{if((state_val_22573 === (1)))
{var state_22572__$1 = state_22572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22572__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22577 = [null,null,null,null,null,null,null];(statearr_22577[(0)] = state_machine__6188__auto__);
(statearr_22577[(1)] = (1));
return statearr_22577;
});
var state_machine__6188__auto____1 = (function (state_22572){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22578){if((e22578 instanceof Object))
{var ex__6191__auto__ = e22578;var statearr_22579_22808 = state_22572;(statearr_22579_22808[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22809 = state_22572;
state_22572 = G__22809;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22572){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_22580 = f__6203__auto__.call(null);(statearr_22580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___22810 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22810,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22810,onView,onModel,onTick,mspf){
return (function (state_22589){var state_val_22590 = (state_22589[(1)]);if((state_val_22590 === (4)))
{var inst_22583 = (state_22589[(2)]);var inst_22584 = common.onModel.onNext(inst_22583);var state_22589__$1 = (function (){var statearr_22591 = state_22589;(statearr_22591[(7)] = inst_22584);
return statearr_22591;
})();var statearr_22592_22811 = state_22589__$1;(statearr_22592_22811[(2)] = null);
(statearr_22592_22811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22590 === (3)))
{var inst_22587 = (state_22589[(2)]);var state_22589__$1 = state_22589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22589__$1,inst_22587);
} else
{if((state_val_22590 === (2)))
{var state_22589__$1 = state_22589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22589__$1,(4),onModel);
} else
{if((state_val_22590 === (1)))
{var state_22589__$1 = state_22589;var statearr_22593_22812 = state_22589__$1;(statearr_22593_22812[(2)] = null);
(statearr_22593_22812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___22810,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___22810,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22597 = [null,null,null,null,null,null,null,null];(statearr_22597[(0)] = state_machine__6188__auto__);
(statearr_22597[(1)] = (1));
return statearr_22597;
});
var state_machine__6188__auto____1 = (function (state_22589){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22598){if((e22598 instanceof Object))
{var ex__6191__auto__ = e22598;var statearr_22599_22813 = state_22589;(statearr_22599_22813[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22814 = state_22589;
state_22589 = G__22814;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22589){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22810,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_22600 = f__6203__auto__.call(null);(statearr_22600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22810);
return statearr_22600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22810,onView,onModel,onTick,mspf))
);
var c__6202__auto___22815 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22815,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22815,onView,onModel,onTick,mspf){
return (function (state_22619){var state_val_22620 = (state_22619[(1)]);if((state_val_22620 === (5)))
{var inst_22610 = (state_22619[(7)]);var inst_22603 = (state_22619[(8)]);var inst_22614 = (state_22619[(2)]);var tmp22621 = inst_22603;var inst_22603__$1 = tmp22621;var inst_22604 = inst_22610;var state_22619__$1 = (function (){var statearr_22622 = state_22619;(statearr_22622[(9)] = inst_22604);
(statearr_22622[(8)] = inst_22603__$1);
(statearr_22622[(10)] = inst_22614);
return statearr_22622;
})();var statearr_22623_22816 = state_22619__$1;(statearr_22623_22816[(2)] = null);
(statearr_22623_22816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22620 === (4)))
{var inst_22610 = (state_22619[(7)]);var inst_22604 = (state_22619[(9)]);var inst_22608 = (state_22619[(2)]);var inst_22609 = (new Date());var inst_22610__$1 = inst_22609.getTime();var inst_22611 = (inst_22610__$1 - inst_22604);var inst_22612 = (inst_22611 / (1000));var state_22619__$1 = (function (){var statearr_22624 = state_22619;(statearr_22624[(11)] = inst_22608);
(statearr_22624[(7)] = inst_22610__$1);
return statearr_22624;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22619__$1,(5),onTick,inst_22612);
} else
{if((state_val_22620 === (3)))
{var inst_22617 = (state_22619[(2)]);var state_22619__$1 = state_22619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22619__$1,inst_22617);
} else
{if((state_val_22620 === (2)))
{var inst_22603 = (state_22619[(8)]);var inst_22606 = cljs.core.async.timeout.call(null,inst_22603);var state_22619__$1 = state_22619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22619__$1,(4),inst_22606);
} else
{if((state_val_22620 === (1)))
{var inst_22601 = (new Date());var inst_22602 = inst_22601.getTime();var inst_22603 = mspf;var inst_22604 = inst_22602;var state_22619__$1 = (function (){var statearr_22625 = state_22619;(statearr_22625[(9)] = inst_22604);
(statearr_22625[(8)] = inst_22603);
return statearr_22625;
})();var statearr_22626_22817 = state_22619__$1;(statearr_22626_22817[(2)] = null);
(statearr_22626_22817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___22815,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___22815,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22630 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22630[(0)] = state_machine__6188__auto__);
(statearr_22630[(1)] = (1));
return statearr_22630;
});
var state_machine__6188__auto____1 = (function (state_22619){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22619);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22631){if((e22631 instanceof Object))
{var ex__6191__auto__ = e22631;var statearr_22632_22818 = state_22619;(statearr_22632_22818[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22619);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22819 = state_22619;
state_22619 = G__22819;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22619){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22815,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_22633 = f__6203__auto__.call(null);(statearr_22633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22815);
return statearr_22633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22815,onView,onModel,onTick,mspf))
);
var c__6202__auto___22820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22820,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22820,onView,onModel,onTick,mspf){
return (function (state_22664){var state_val_22665 = (state_22664[(1)]);if((state_val_22665 === (5)))
{var inst_22662 = (state_22664[(2)]);var state_22664__$1 = state_22664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22664__$1,inst_22662);
} else
{if((state_val_22665 === (4)))
{var inst_22646 = (state_22664[(2)]);var inst_22653 = [(100),(0),(0)];var inst_22654 = {"vel":inst_22653};var inst_22655 = [inst_22654];var inst_22656 = {"prototype":inst_22655};var inst_22657 = [(300),(300),(0)];var inst_22658 = [(100),(100),(0)];var inst_22659 = {"id":"x1","emit":inst_22656,"pos":inst_22657,"vel":inst_22658};var inst_22660 = ["edit-particle",inst_22659];var state_22664__$1 = (function (){var statearr_22666 = state_22664;(statearr_22666[(7)] = inst_22646);
return statearr_22666;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22664__$1,(5),onView,inst_22660);
} else
{if((state_val_22665 === (3)))
{var inst_22643 = (state_22664[(2)]);var inst_22644 = cljs.core.async.timeout.call(null,(1100));var state_22664__$1 = (function (){var statearr_22667 = state_22664;(statearr_22667[(8)] = inst_22643);
return statearr_22667;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22664__$1,(4),inst_22644);
} else
{if((state_val_22665 === (2)))
{var inst_22636 = (state_22664[(2)]);var inst_22639 = [(300),(300),(0)];var inst_22640 = {"id":"x1","pos":inst_22639};var inst_22641 = ["edit-particle",inst_22640];var state_22664__$1 = (function (){var statearr_22668 = state_22664;(statearr_22668[(9)] = inst_22636);
return statearr_22668;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22664__$1,(3),onView,inst_22641);
} else
{if((state_val_22665 === (1)))
{var inst_22634 = cljs.core.async.timeout.call(null,(1000));var state_22664__$1 = state_22664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22664__$1,(2),inst_22634);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___22820,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___22820,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22672 = [null,null,null,null,null,null,null,null,null,null];(statearr_22672[(0)] = state_machine__6188__auto__);
(statearr_22672[(1)] = (1));
return statearr_22672;
});
var state_machine__6188__auto____1 = (function (state_22664){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22664);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22673){if((e22673 instanceof Object))
{var ex__6191__auto__ = e22673;var statearr_22674_22821 = state_22664;(statearr_22674_22821[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22664);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22822 = state_22664;
state_22664 = G__22822;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22664){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22820,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_22675 = f__6203__auto__.call(null);(statearr_22675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22820);
return statearr_22675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22820,onView,onModel,onTick,mspf))
);
var c__6202__auto___22823 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22823,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22823,onView,onModel,onTick,mspf){
return (function (state_22768){var state_val_22769 = (state_22768[(1)]);if((state_val_22769 === (7)))
{var inst_22763 = (state_22768[(2)]);var inst_22683 = inst_22763;var state_22768__$1 = (function (){var statearr_22770 = state_22768;(statearr_22770[(7)] = inst_22683);
return statearr_22770;
})();var statearr_22771_22824 = state_22768__$1;(statearr_22771_22824[(2)] = null);
(statearr_22771_22824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (20)))
{var inst_22683 = (state_22768[(7)]);var state_22768__$1 = state_22768;var statearr_22772_22825 = state_22768__$1;(statearr_22772_22825[(2)] = inst_22683);
(statearr_22772_22825[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (1)))
{var inst_22676 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_22677 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_22678 = cljs.core.List.EMPTY;var inst_22679 = [inst_22678];var inst_22680 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22677,inst_22679);var inst_22681 = [(0),inst_22680];var inst_22682 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22676,inst_22681);var inst_22683 = inst_22682;var state_22768__$1 = (function (){var statearr_22773 = state_22768;(statearr_22773[(7)] = inst_22683);
return statearr_22773;
})();var statearr_22774_22826 = state_22768__$1;(statearr_22774_22826[(2)] = null);
(statearr_22774_22826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (4)))
{var inst_22689 = (state_22768[(8)]);var inst_22691 = (state_22768[(9)]);var inst_22689__$1 = (state_22768[(2)]);var inst_22690 = cljs.core.nth.call(null,inst_22689__$1,(0),null);var inst_22691__$1 = cljs.core.nth.call(null,inst_22689__$1,(1),null);var inst_22695 = cljs.core._EQ_.call(null,onTick,inst_22691__$1);var state_22768__$1 = (function (){var statearr_22775 = state_22768;(statearr_22775[(8)] = inst_22689__$1);
(statearr_22775[(9)] = inst_22691__$1);
(statearr_22775[(10)] = inst_22690);
return statearr_22775;
})();if(inst_22695)
{var statearr_22776_22827 = state_22768__$1;(statearr_22776_22827[(1)] = (5));
} else
{var statearr_22777_22828 = state_22768__$1;(statearr_22777_22828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (15)))
{var inst_22718 = (state_22768[(11)]);var inst_22683 = (state_22768[(7)]);var inst_22735 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_22736 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22735,null));var inst_22737 = cljs.core.update_in.call(null,inst_22683,inst_22736,cljs.core.conj,inst_22718);var state_22768__$1 = state_22768;var statearr_22778_22829 = state_22768__$1;(statearr_22778_22829[(2)] = inst_22737);
(statearr_22778_22829[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (21)))
{var inst_22691 = (state_22768[(9)]);var inst_22755 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22691));var inst_22756 = (new Error(inst_22755));var inst_22757 = (function(){throw inst_22756})();var state_22768__$1 = state_22768;var statearr_22779_22830 = state_22768__$1;(statearr_22779_22830[(2)] = inst_22757);
(statearr_22779_22830[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (13)))
{var inst_22750 = (state_22768[(2)]);var state_22768__$1 = state_22768;var statearr_22780_22831 = state_22768__$1;(statearr_22780_22831[(2)] = inst_22750);
(statearr_22780_22831[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (22)))
{var inst_22759 = (state_22768[(2)]);var state_22768__$1 = state_22768;var statearr_22781_22832 = state_22768__$1;(statearr_22781_22832[(2)] = inst_22759);
(statearr_22781_22832[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (6)))
{var inst_22691 = (state_22768[(9)]);var inst_22703 = cljs.core._EQ_.call(null,onView,inst_22691);var state_22768__$1 = state_22768;if(inst_22703)
{var statearr_22782_22833 = state_22768__$1;(statearr_22782_22833[(1)] = (8));
} else
{var statearr_22783_22834 = state_22768__$1;(statearr_22783_22834[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (17)))
{var inst_22683 = (state_22768[(7)]);var state_22768__$1 = state_22768;var statearr_22784_22835 = state_22768__$1;(statearr_22784_22835[(2)] = inst_22683);
(statearr_22784_22835[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (3)))
{var inst_22766 = (state_22768[(2)]);var state_22768__$1 = state_22768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22768__$1,inst_22766);
} else
{if((state_val_22769 === (12)))
{var inst_22705 = (state_22768[(12)]);var inst_22741 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_22705);var state_22768__$1 = state_22768;if(inst_22741)
{var statearr_22785_22836 = state_22768__$1;(statearr_22785_22836[(1)] = (17));
} else
{var statearr_22786_22837 = state_22768__$1;(statearr_22786_22837[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (2)))
{var inst_22686 = [onView,onTick];var inst_22687 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22686,null));var state_22768__$1 = state_22768;return cljs.core.async.ioc_alts_BANG_.call(null,state_22768__$1,(4),inst_22687);
} else
{if((state_val_22769 === (19)))
{var inst_22748 = (state_22768[(2)]);var state_22768__$1 = state_22768;var statearr_22787_22838 = state_22768__$1;(statearr_22787_22838[(2)] = inst_22748);
(statearr_22787_22838[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (11)))
{var inst_22689 = (state_22768[(8)]);var inst_22691 = (state_22768[(9)]);var inst_22706 = (state_22768[(13)]);var inst_22717 = (state_22768[(14)]);var inst_22690 = (state_22768[(10)]);var inst_22705 = (state_22768[(12)]);var inst_22683 = (state_22768[(7)]);var inst_22712 = (function (){var pred__22692 = cljs.core._EQ_;var ctx = inst_22683;var partInfo = inst_22706;var v = inst_22690;var vec__22685 = inst_22689;var expr__22708 = inst_22705;var pred__22707 = cljs.core._EQ_;var params = inst_22706;var expr__22693 = inst_22691;var ch = inst_22691;var event = inst_22705;return ((function (pred__22692,ctx,partInfo,v,vec__22685,expr__22708,pred__22707,params,expr__22693,ch,event,inst_22689,inst_22691,inst_22706,inst_22717,inst_22690,inst_22705,inst_22683,state_val_22769,c__6202__auto___22823,onView,onModel,onTick,mspf){
return (function (p1__22329_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22329_SHARP_),partInfo.id);
});
;})(pred__22692,ctx,partInfo,v,vec__22685,expr__22708,pred__22707,params,expr__22693,ch,event,inst_22689,inst_22691,inst_22706,inst_22717,inst_22690,inst_22705,inst_22683,state_val_22769,c__6202__auto___22823,onView,onModel,onTick,mspf))
})();var inst_22713 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_22714 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22713,null));var inst_22715 = cljs.core.get_in.call(null,inst_22683,inst_22714);var inst_22716 = cljs.core.filter.call(null,inst_22712,inst_22715);var inst_22717__$1 = cljs.core.first.call(null,inst_22716);var inst_22718 = app.main2.createParticle.call(null,inst_22706);var inst_22719 = cljs.core.some_QMARK_.call(null,inst_22717__$1);var state_22768__$1 = (function (){var statearr_22788 = state_22768;(statearr_22788[(11)] = inst_22718);
(statearr_22788[(14)] = inst_22717__$1);
return statearr_22788;
})();if(inst_22719)
{var statearr_22789_22839 = state_22768__$1;(statearr_22789_22839[(1)] = (14));
} else
{var statearr_22790_22840 = state_22768__$1;(statearr_22790_22840[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (9)))
{var inst_22691 = (state_22768[(9)]);var inst_22752 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_22691);var state_22768__$1 = state_22768;if(inst_22752)
{var statearr_22791_22841 = state_22768__$1;(statearr_22791_22841[(1)] = (20));
} else
{var statearr_22792_22842 = state_22768__$1;(statearr_22792_22842[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (5)))
{var inst_22690 = (state_22768[(10)]);var inst_22683 = (state_22768[(7)]);var inst_22697 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_22698 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22697,null));var inst_22699 = cljs.core.partial.call(null,app.particle.update,inst_22690);var inst_22700 = cljs.core.update_in.call(null,inst_22683,inst_22698,inst_22699);var inst_22701 = app.main2.draw2D.call(null,inst_22700);var state_22768__$1 = state_22768;var statearr_22793_22843 = state_22768__$1;(statearr_22793_22843[(2)] = inst_22701);
(statearr_22793_22843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (14)))
{var inst_22718 = (state_22768[(11)]);var inst_22717 = (state_22768[(14)]);var inst_22683 = (state_22768[(7)]);var inst_22721 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_22722 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22721,null));var inst_22723 = [inst_22717];var inst_22724 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_22725 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_22717);var inst_22726 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_22717);var inst_22727 = [inst_22725,inst_22726];var inst_22728 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22724,inst_22727);var inst_22729 = cljs.core.merge.call(null,inst_22718,inst_22728);var inst_22730 = [inst_22729];var inst_22731 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22723,inst_22730);var inst_22732 = cljs.core.partial.call(null,cljs.core.replace,inst_22731);var inst_22733 = cljs.core.update_in.call(null,inst_22683,inst_22722,inst_22732);var state_22768__$1 = state_22768;var statearr_22794_22844 = state_22768__$1;(statearr_22794_22844[(2)] = inst_22733);
(statearr_22794_22844[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (16)))
{var inst_22739 = (state_22768[(2)]);var state_22768__$1 = state_22768;var statearr_22795_22845 = state_22768__$1;(statearr_22795_22845[(2)] = inst_22739);
(statearr_22795_22845[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (10)))
{var inst_22761 = (state_22768[(2)]);var state_22768__$1 = state_22768;var statearr_22796_22846 = state_22768__$1;(statearr_22796_22846[(2)] = inst_22761);
(statearr_22796_22846[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (18)))
{var inst_22705 = (state_22768[(12)]);var inst_22744 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22705));var inst_22745 = (new Error(inst_22744));var inst_22746 = (function(){throw inst_22745})();var state_22768__$1 = state_22768;var statearr_22797_22847 = state_22768__$1;(statearr_22797_22847[(2)] = inst_22746);
(statearr_22797_22847[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22769 === (8)))
{var inst_22690 = (state_22768[(10)]);var inst_22705 = (state_22768[(12)]);var inst_22705__$1 = (inst_22690[(0)]);var inst_22706 = (inst_22690[(1)]);var inst_22710 = cljs.core._EQ_.call(null,"edit-particle",inst_22705__$1);var state_22768__$1 = (function (){var statearr_22798 = state_22768;(statearr_22798[(13)] = inst_22706);
(statearr_22798[(12)] = inst_22705__$1);
return statearr_22798;
})();if(inst_22710)
{var statearr_22799_22848 = state_22768__$1;(statearr_22799_22848[(1)] = (11));
} else
{var statearr_22800_22849 = state_22768__$1;(statearr_22800_22849[(1)] = (12));
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
});})(c__6202__auto___22823,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___22823,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22804[(0)] = state_machine__6188__auto__);
(statearr_22804[(1)] = (1));
return statearr_22804;
});
var state_machine__6188__auto____1 = (function (state_22768){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22805){if((e22805 instanceof Object))
{var ex__6191__auto__ = e22805;var statearr_22806_22850 = state_22768;(statearr_22806_22850[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22851 = state_22768;
state_22768 = G__22851;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22768){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22823,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_22807 = f__6203__auto__.call(null);(statearr_22807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22823);
return statearr_22807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22823,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
