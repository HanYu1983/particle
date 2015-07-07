// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('app.particle');
goog.require('cljs.core.async');
goog.require('app.react');
goog.require('app.react');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('app.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.mesh');
goog.require('clojure.data');
goog.require('clojure.walk');
goog.require('gl.util');
app.main.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main.draw = (function draw(canvas,p__9182){var map__9199 = p__9182;var map__9199__$1 = ((cljs.core.seq_QMARK_.call(null,map__9199))?cljs.core.apply.call(null,cljs.core.hash_map,map__9199):map__9199);var ctx = map__9199__$1;var ps = cljs.core.get.call(null,map__9199__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_9215 = (canvas[(0)]);var canvas_ctx_9216 = canvas_dom_9215.getContext("2d");var G__9200_9217 = canvas_ctx_9216;(G__9200_9217["fillStyle"] = "white");
G__9200_9217.fillRect((0),(0),canvas_dom_9215.width,canvas_dom_9215.height);
(G__9200_9217["fillStyle"] = "red");
G__9200_9217.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__9201_9218 = cljs.core.seq.call(null,ps);var chunk__9202_9219 = null;var count__9203_9220 = (0);var i__9204_9221 = (0);while(true){
if((i__9204_9221 < count__9203_9220))
{var map__9205_9222 = cljs.core._nth.call(null,chunk__9202_9219,i__9204_9221);var map__9205_9223__$1 = ((cljs.core.seq_QMARK_.call(null,map__9205_9222))?cljs.core.apply.call(null,cljs.core.hash_map,map__9205_9222):map__9205_9222);var p_9224 = map__9205_9223__$1;var vec__9206_9225 = cljs.core.get.call(null,map__9205_9223__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9226 = cljs.core.nth.call(null,vec__9206_9225,(0),null);var y_9227 = cljs.core.nth.call(null,vec__9206_9225,(1),null);var r_9228 = cljs.core.nth.call(null,vec__9206_9225,(2),null);var vec__9207_9229 = cljs.core.get.call(null,map__9205_9223__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9230 = cljs.core.nth.call(null,vec__9207_9229,(0),null);var ys_9231 = cljs.core.nth.call(null,vec__9207_9229,(1),null);var vec__9208_9232 = cljs.core.get.call(null,map__9205_9223__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9233__$1 = cljs.core.nth.call(null,vec__9208_9232,(0),null);var g_9234 = cljs.core.nth.call(null,vec__9208_9232,(1),null);var b_9235 = cljs.core.nth.call(null,vec__9208_9232,(2),null);var a_9236 = cljs.core.nth.call(null,vec__9208_9232,(3),null);var G__9209_9237 = canvas_ctx_9216;(G__9209_9237["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9233__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9234 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9235 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9236)+")"));
G__9209_9237.fillRect(x_9226,y_9227,xs_9230,ys_9231);
{
var G__9238 = seq__9201_9218;
var G__9239 = chunk__9202_9219;
var G__9240 = count__9203_9220;
var G__9241 = (i__9204_9221 + (1));
seq__9201_9218 = G__9238;
chunk__9202_9219 = G__9239;
count__9203_9220 = G__9240;
i__9204_9221 = G__9241;
continue;
}
} else
{var temp__4126__auto___9242 = cljs.core.seq.call(null,seq__9201_9218);if(temp__4126__auto___9242)
{var seq__9201_9243__$1 = temp__4126__auto___9242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9201_9243__$1))
{var c__4307__auto___9244 = cljs.core.chunk_first.call(null,seq__9201_9243__$1);{
var G__9245 = cljs.core.chunk_rest.call(null,seq__9201_9243__$1);
var G__9246 = c__4307__auto___9244;
var G__9247 = cljs.core.count.call(null,c__4307__auto___9244);
var G__9248 = (0);
seq__9201_9218 = G__9245;
chunk__9202_9219 = G__9246;
count__9203_9220 = G__9247;
i__9204_9221 = G__9248;
continue;
}
} else
{var map__9210_9249 = cljs.core.first.call(null,seq__9201_9243__$1);var map__9210_9250__$1 = ((cljs.core.seq_QMARK_.call(null,map__9210_9249))?cljs.core.apply.call(null,cljs.core.hash_map,map__9210_9249):map__9210_9249);var p_9251 = map__9210_9250__$1;var vec__9211_9252 = cljs.core.get.call(null,map__9210_9250__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9253 = cljs.core.nth.call(null,vec__9211_9252,(0),null);var y_9254 = cljs.core.nth.call(null,vec__9211_9252,(1),null);var r_9255 = cljs.core.nth.call(null,vec__9211_9252,(2),null);var vec__9212_9256 = cljs.core.get.call(null,map__9210_9250__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9257 = cljs.core.nth.call(null,vec__9212_9256,(0),null);var ys_9258 = cljs.core.nth.call(null,vec__9212_9256,(1),null);var vec__9213_9259 = cljs.core.get.call(null,map__9210_9250__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9260__$1 = cljs.core.nth.call(null,vec__9213_9259,(0),null);var g_9261 = cljs.core.nth.call(null,vec__9213_9259,(1),null);var b_9262 = cljs.core.nth.call(null,vec__9213_9259,(2),null);var a_9263 = cljs.core.nth.call(null,vec__9213_9259,(3),null);var G__9214_9264 = canvas_ctx_9216;(G__9214_9264["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9260__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9261 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9262 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9263)+")"));
G__9214_9264.fillRect(x_9253,y_9254,xs_9257,ys_9258);
{
var G__9265 = cljs.core.next.call(null,seq__9201_9243__$1);
var G__9266 = null;
var G__9267 = (0);
var G__9268 = (0);
seq__9201_9218 = G__9265;
chunk__9202_9219 = G__9266;
count__9203_9220 = G__9267;
i__9204_9221 = G__9268;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj9296 = {};return obj9296;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__9294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__9294,(0),null);var ch = cljs.core.nth.call(null,vec__9294,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9294,cw,ch){
return (function (p__9297){var map__9298 = p__9297;var map__9298__$1 = ((cljs.core.seq_QMARK_.call(null,map__9298))?cljs.core.apply.call(null,cljs.core.hash_map,map__9298):map__9298);var ctx = map__9298__$1;var timer = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__9298,map__9298__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9294,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__9298,map__9298__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9294,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___9319 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___9319 == null))
{} else
{var faceImg_9320 = temp__4130__auto___9319;var tex_9321 = app.main.cacheTex.call(null,gl__$1,faceImg_9320);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_9321,faceImg_9320,temp__4130__auto___9319,map__9298,map__9298__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9294,cw,ch){
return (function (pobj){var seq__9299 = cljs.core.seq.call(null,ps);var chunk__9300 = null;var count__9301 = (0);var i__9302 = (0);while(true){
if((i__9302 < count__9301))
{var map__9303 = cljs.core._nth.call(null,chunk__9300,i__9302);var map__9303__$1 = ((cljs.core.seq_QMARK_.call(null,map__9303))?cljs.core.apply.call(null,cljs.core.hash_map,map__9303):map__9303);var p = map__9303__$1;var vec__9304 = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9304,(0),null);var y = cljs.core.nth.call(null,vec__9304,(1),null);var rot = cljs.core.nth.call(null,vec__9304,(2),null);var vec__9305 = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9305,(0),null);var ys = cljs.core.nth.call(null,vec__9305,(1),null);var vec__9306 = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9306,(0),null);var g = cljs.core.nth.call(null,vec__9306,(1),null);var b = cljs.core.nth.call(null,vec__9306,(2),null);var a = cljs.core.nth.call(null,vec__9306,(3),null);var proj_9322 = (function (){var G__9307 = (new THREE.Matrix4());G__9307.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9307;
})();var tras_9323 = (function (){var G__9308 = (new THREE.Matrix4());G__9308.makeTranslation(x,y,(0));
G__9308.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9308.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9308;
})();var texTx_9324 = (function (){var G__9309 = (new THREE.Matrix3());return G__9309;
})();var colorTx_9325 = (function (){var G__9310 = (new THREE.Matrix4());G__9310.makeTranslation(r,g,b);
return G__9310;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9322.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9323.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9321,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9324.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9325.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9326 = seq__9299;
var G__9327 = chunk__9300;
var G__9328 = count__9301;
var G__9329 = (i__9302 + (1));
seq__9299 = G__9326;
chunk__9300 = G__9327;
count__9301 = G__9328;
i__9302 = G__9329;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9299);if(temp__4126__auto__)
{var seq__9299__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9299__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__9299__$1);{
var G__9330 = cljs.core.chunk_rest.call(null,seq__9299__$1);
var G__9331 = c__4307__auto__;
var G__9332 = cljs.core.count.call(null,c__4307__auto__);
var G__9333 = (0);
seq__9299 = G__9330;
chunk__9300 = G__9331;
count__9301 = G__9332;
i__9302 = G__9333;
continue;
}
} else
{var map__9311 = cljs.core.first.call(null,seq__9299__$1);var map__9311__$1 = ((cljs.core.seq_QMARK_.call(null,map__9311))?cljs.core.apply.call(null,cljs.core.hash_map,map__9311):map__9311);var p = map__9311__$1;var vec__9312 = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9312,(0),null);var y = cljs.core.nth.call(null,vec__9312,(1),null);var rot = cljs.core.nth.call(null,vec__9312,(2),null);var vec__9313 = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9313,(0),null);var ys = cljs.core.nth.call(null,vec__9313,(1),null);var vec__9314 = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9314,(0),null);var g = cljs.core.nth.call(null,vec__9314,(1),null);var b = cljs.core.nth.call(null,vec__9314,(2),null);var a = cljs.core.nth.call(null,vec__9314,(3),null);var proj_9334 = (function (){var G__9315 = (new THREE.Matrix4());G__9315.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9315;
})();var tras_9335 = (function (){var G__9316 = (new THREE.Matrix4());G__9316.makeTranslation(x,y,(0));
G__9316.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9316.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9316;
})();var texTx_9336 = (function (){var G__9317 = (new THREE.Matrix3());return G__9317;
})();var colorTx_9337 = (function (){var G__9318 = (new THREE.Matrix4());G__9318.makeTranslation(r,g,b);
return G__9318;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9334.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9335.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9321,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9336.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9337.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9338 = cljs.core.next.call(null,seq__9299__$1);
var G__9339 = null;
var G__9340 = (0);
var G__9341 = (0);
seq__9299 = G__9338;
chunk__9300 = G__9339;
count__9301 = G__9340;
i__9302 = G__9341;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_9321,faceImg_9320,temp__4130__auto___9319,map__9298,map__9298__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9294,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9294,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6203__auto___9732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___9732){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___9732){
return (function (state_9683){var state_val_9684 = (state_9683[(1)]);if((state_val_9684 === (7)))
{var inst_9678 = (state_9683[(2)]);var inst_9644 = inst_9678;var state_9683__$1 = (function (){var statearr_9685 = state_9683;(statearr_9685[(7)] = inst_9644);
return statearr_9685;
})();var statearr_9686_9733 = state_9683__$1;(statearr_9686_9733[(2)] = null);
(statearr_9686_9733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (1)))
{var inst_9537 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_9538 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_9539 = [(250),(250),(0)];var inst_9540 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9539,null));var inst_9541 = [(0),(0),(0)];var inst_9542 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9541,null));var inst_9543 = [(0),(0)];var inst_9544 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9543,null));var inst_9545 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9546 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9547 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9548 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9549 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9550 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9551 = [0.5];var inst_9552 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9550,inst_9551);var inst_9553 = [inst_9552];var inst_9554 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9553,null));var inst_9555 = [(1),0.9,(1000),inst_9554];var inst_9556 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9549,inst_9555);var inst_9557 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9558 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9557,null));var inst_9559 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,state_val_9684,c__6203__auto___9732){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,state_val_9684,c__6203__auto___9732))
})();var inst_9560 = [inst_9558,inst_9559];var inst_9561 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9560,null));var inst_9562 = [inst_9561];var inst_9563 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9562,null));var inst_9564 = [(1),inst_9556,inst_9563];var inst_9565 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9548,inst_9564);var inst_9566 = [inst_9565];var inst_9567 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9566,null));var inst_9568 = [(1),0.1,inst_9567];var inst_9569 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9547,inst_9568);var inst_9570 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_9571 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9570,null));var inst_9572 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,state_val_9684,c__6203__auto___9732){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,state_val_9684,c__6203__auto___9732))
})();var inst_9573 = [inst_9571,inst_9572];var inst_9574 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9573,null));var inst_9575 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_9576 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9575,null));var inst_9577 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,state_val_9684,c__6203__auto___9732){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,state_val_9684,c__6203__auto___9732))
})();var inst_9578 = [inst_9576,inst_9577];var inst_9579 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9578,null));var inst_9580 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9581 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9580,null));var inst_9582 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,state_val_9684,c__6203__auto___9732){
return (function (life,v){return v;
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,state_val_9684,c__6203__auto___9732))
})();var inst_9583 = [inst_9581,inst_9582];var inst_9584 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9583,null));var inst_9585 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9586 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9585,null));var inst_9587 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,state_val_9684,c__6203__auto___9732){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,state_val_9684,c__6203__auto___9732))
})();var inst_9588 = [inst_9586,inst_9587];var inst_9589 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9588,null));var inst_9590 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_9591 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9590,null));var inst_9592 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,state_val_9684,c__6203__auto___9732){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,state_val_9684,c__6203__auto___9732))
})();var inst_9593 = [inst_9591,inst_9592];var inst_9594 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9593,null));var inst_9595 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9596 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9595,null));var inst_9597 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,state_val_9684,c__6203__auto___9732){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,state_val_9684,c__6203__auto___9732))
})();var inst_9598 = [inst_9596,inst_9597];var inst_9599 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9598,null));var inst_9600 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9601 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9600,null));var inst_9602 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,state_val_9684,c__6203__auto___9732){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,state_val_9684,c__6203__auto___9732))
})();var inst_9603 = [inst_9601,inst_9602];var inst_9604 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9603,null));var inst_9605 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_9606 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9605,null));var inst_9607 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,state_val_9684,c__6203__auto___9732){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,state_val_9684,c__6203__auto___9732))
})();var inst_9608 = [inst_9606,inst_9607];var inst_9609 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9608,null));var inst_9610 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9611 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9610,null));var inst_9612 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,state_val_9684,c__6203__auto___9732){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,state_val_9684,c__6203__auto___9732))
})();var inst_9613 = [inst_9611,inst_9612];var inst_9614 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9613,null));var inst_9615 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_9616 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9615,null));var inst_9617 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,state_val_9684,c__6203__auto___9732){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,state_val_9684,c__6203__auto___9732))
})();var inst_9618 = [inst_9616,inst_9617];var inst_9619 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9618,null));var inst_9620 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_9621 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9620,null));var inst_9622 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,state_val_9684,c__6203__auto___9732){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,state_val_9684,c__6203__auto___9732))
})();var inst_9623 = [inst_9621,inst_9622];var inst_9624 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9623,null));var inst_9625 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_9626 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9625,null));var inst_9627 = (function (){return ((function (inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,inst_9625,inst_9626,state_val_9684,c__6203__auto___9732){
return (function (life,v){return life;
});
;})(inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,inst_9625,inst_9626,state_val_9684,c__6203__auto___9732))
})();var inst_9628 = [inst_9626,inst_9627];var inst_9629 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9628,null));var inst_9630 = [inst_9574,inst_9579,inst_9584,inst_9589,inst_9594,inst_9599,inst_9604,inst_9609,inst_9614,inst_9619,inst_9624,inst_9629];var inst_9631 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9630,null));var inst_9632 = [(2),inst_9569,inst_9631];var inst_9633 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9546,inst_9632);var inst_9634 = [inst_9633];var inst_9635 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9634,null));var inst_9636 = [(1),0.1,-1.57,1.57,(50),inst_9635];var inst_9637 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9545,inst_9636);var inst_9638 = [(-1),inst_9540,inst_9542,inst_9544,inst_9637];var inst_9639 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9538,inst_9638);var inst_9640 = app.particle.create.call(null,inst_9639);var inst_9641 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9640);var inst_9642 = [(0),inst_9641];var inst_9643 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9537,inst_9642);var inst_9644 = inst_9643;var state_9683__$1 = (function (){var statearr_9687 = state_9683;(statearr_9687[(7)] = inst_9644);
return statearr_9687;
})();var statearr_9688_9734 = state_9683__$1;(statearr_9688_9734[(2)] = null);
(statearr_9688_9734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (4)))
{var inst_9652 = (state_9683[(8)]);var inst_9650 = (state_9683[(2)]);var inst_9651 = cljs.core.nth.call(null,inst_9650,(0),null);var inst_9652__$1 = cljs.core.nth.call(null,inst_9650,(1),null);var inst_9656 = cljs.core._EQ_.call(null,app.react.onTick,inst_9652__$1);var state_9683__$1 = (function (){var statearr_9689 = state_9683;(statearr_9689[(8)] = inst_9652__$1);
(statearr_9689[(9)] = inst_9651);
return statearr_9689;
})();if(inst_9656)
{var statearr_9690_9735 = state_9683__$1;(statearr_9690_9735[(1)] = (5));
} else
{var statearr_9691_9736 = state_9683__$1;(statearr_9691_9736[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (6)))
{var inst_9652 = (state_9683[(8)]);var inst_9666 = cljs.core._EQ_.call(null,app.react.onImage,inst_9652);var state_9683__$1 = state_9683;if(inst_9666)
{var statearr_9692_9737 = state_9683__$1;(statearr_9692_9737[(1)] = (8));
} else
{var statearr_9693_9738 = state_9683__$1;(statearr_9693_9738[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (3)))
{var inst_9681 = (state_9683[(2)]);var state_9683__$1 = state_9683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9683__$1,inst_9681);
} else
{if((state_val_9684 === (2)))
{var inst_9647 = [app.react.onTick,app.react.onImage];var inst_9648 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9647,null));var state_9683__$1 = state_9683;return cljs.core.async.ioc_alts_BANG_.call(null,state_9683__$1,(4),inst_9648);
} else
{if((state_val_9684 === (9)))
{var inst_9644 = (state_9683[(7)]);var state_9683__$1 = state_9683;var statearr_9694_9739 = state_9683__$1;(statearr_9694_9739[(2)] = inst_9644);
(statearr_9694_9739[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (5)))
{var inst_9644 = (state_9683[(7)]);var inst_9651 = (state_9683[(9)]);var inst_9658 = $("#canvas");var inst_9659 = app.particle.update.call(null,inst_9651,inst_9644);var inst_9660 = app.main.draw.call(null,inst_9658,inst_9659);var inst_9661 = app.main.draw3D.call(null,inst_9660);var inst_9662 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_9663 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9662,null));var inst_9664 = cljs.core.update_in.call(null,inst_9661,inst_9663,cljs.core._PLUS_,inst_9651);var state_9683__$1 = state_9683;var statearr_9695_9740 = state_9683__$1;(statearr_9695_9740[(2)] = inst_9664);
(statearr_9695_9740[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (10)))
{var inst_9676 = (state_9683[(2)]);var state_9683__$1 = state_9683;var statearr_9696_9741 = state_9683__$1;(statearr_9696_9741[(2)] = inst_9676);
(statearr_9696_9741[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9684 === (8)))
{var inst_9644 = (state_9683[(7)]);var inst_9651 = (state_9683[(9)]);var inst_9669 = cljs.core.nth.call(null,inst_9651,(0),null);var inst_9670 = cljs.core.nth.call(null,inst_9651,(1),null);var inst_9671 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_9669];var inst_9672 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9671,null));var inst_9673 = cljs.core.assoc_in.call(null,inst_9644,inst_9672,inst_9670);var state_9683__$1 = state_9683;var statearr_9697_9742 = state_9683__$1;(statearr_9697_9742[(2)] = inst_9673);
(statearr_9697_9742[(1)] = (10));
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
});})(c__6203__auto___9732))
;return ((function (switch__6188__auto__,c__6203__auto___9732){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9701 = [null,null,null,null,null,null,null,null,null,null];(statearr_9701[(0)] = state_machine__6189__auto__);
(statearr_9701[(1)] = (1));
return statearr_9701;
});
var state_machine__6189__auto____1 = (function (state_9683){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9683);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9702){if((e9702 instanceof Object))
{var ex__6192__auto__ = e9702;var statearr_9703_9743 = state_9683;(statearr_9703_9743[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9744 = state_9683;
state_9683 = G__9744;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9683){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___9732))
})();var state__6205__auto__ = (function (){var statearr_9704 = f__6204__auto__.call(null);(statearr_9704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___9732);
return statearr_9704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___9732))
);
var face_9745 = (new Image());face_9745.src = "res/images/m_gr.jpg";
face_9745.onload = ((function (face_9745){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,face_9745){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,face_9745){
return (function (state_9710){var state_val_9711 = (state_9710[(1)]);if((state_val_9711 === (2)))
{var inst_9708 = (state_9710[(2)]);var state_9710__$1 = state_9710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9710__$1,inst_9708);
} else
{if((state_val_9711 === (1)))
{var inst_9705 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_9745];var inst_9706 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9705,null));var state_9710__$1 = state_9710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9710__$1,(2),app.react.onImage,inst_9706);
} else
{return null;
}
}
});})(c__6203__auto__,face_9745))
;return ((function (switch__6188__auto__,c__6203__auto__,face_9745){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9715 = [null,null,null,null,null,null,null];(statearr_9715[(0)] = state_machine__6189__auto__);
(statearr_9715[(1)] = (1));
return statearr_9715;
});
var state_machine__6189__auto____1 = (function (state_9710){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9710);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9716){if((e9716 instanceof Object))
{var ex__6192__auto__ = e9716;var statearr_9717_9746 = state_9710;(statearr_9717_9746[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9747 = state_9710;
state_9710 = G__9747;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9710){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,face_9745))
})();var state__6205__auto__ = (function (){var statearr_9718 = f__6204__auto__.call(null);(statearr_9718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,face_9745))
);
return c__6203__auto__;
});})(face_9745))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6203__auto___9748 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___9748,curr_time__$1,elapsed,last_time){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___9748,curr_time__$1,elapsed,last_time){
return (function (state_9723){var state_val_9724 = (state_9723[(1)]);if((state_val_9724 === (2)))
{var inst_9721 = (state_9723[(2)]);var state_9723__$1 = state_9723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9723__$1,inst_9721);
} else
{if((state_val_9724 === (1)))
{var inst_9719 = (elapsed / (1000));var state_9723__$1 = state_9723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9723__$1,(2),app.react.onTick,inst_9719);
} else
{return null;
}
}
});})(c__6203__auto___9748,curr_time__$1,elapsed,last_time))
;return ((function (switch__6188__auto__,c__6203__auto___9748,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9728 = [null,null,null,null,null,null,null];(statearr_9728[(0)] = state_machine__6189__auto__);
(statearr_9728[(1)] = (1));
return statearr_9728;
});
var state_machine__6189__auto____1 = (function (state_9723){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9729){if((e9729 instanceof Object))
{var ex__6192__auto__ = e9729;var statearr_9730_9749 = state_9723;(statearr_9730_9749[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9750 = state_9723;
state_9723 = G__9750;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9723){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___9748,curr_time__$1,elapsed,last_time))
})();var state__6205__auto__ = (function (){var statearr_9731 = f__6204__auto__.call(null);(statearr_9731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___9748);
return statearr_9731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___9748,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
