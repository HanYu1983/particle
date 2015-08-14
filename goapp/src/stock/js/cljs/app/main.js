// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('cljs.core.async');
goog.require('app.react');
goog.require('app.react');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('tool.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('tool.particle');
goog.require('gl.mesh');
goog.require('clojure.data');
goog.require('clojure.walk');
goog.require('gl.util');
app.main.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main.draw = (function draw(canvas,p__9190){var map__9207 = p__9190;var map__9207__$1 = ((cljs.core.seq_QMARK_.call(null,map__9207))?cljs.core.apply.call(null,cljs.core.hash_map,map__9207):map__9207);var ctx = map__9207__$1;var ps = cljs.core.get.call(null,map__9207__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_9223 = (canvas[(0)]);var canvas_ctx_9224 = canvas_dom_9223.getContext("2d");var G__9208_9225 = canvas_ctx_9224;(G__9208_9225["fillStyle"] = "white");
G__9208_9225.fillRect((0),(0),canvas_dom_9223.width,canvas_dom_9223.height);
(G__9208_9225["fillStyle"] = "red");
G__9208_9225.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__9209_9226 = cljs.core.seq.call(null,ps);var chunk__9210_9227 = null;var count__9211_9228 = (0);var i__9212_9229 = (0);while(true){
if((i__9212_9229 < count__9211_9228))
{var map__9213_9230 = cljs.core._nth.call(null,chunk__9210_9227,i__9212_9229);var map__9213_9231__$1 = ((cljs.core.seq_QMARK_.call(null,map__9213_9230))?cljs.core.apply.call(null,cljs.core.hash_map,map__9213_9230):map__9213_9230);var p_9232 = map__9213_9231__$1;var vec__9214_9233 = cljs.core.get.call(null,map__9213_9231__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9234 = cljs.core.nth.call(null,vec__9214_9233,(0),null);var y_9235 = cljs.core.nth.call(null,vec__9214_9233,(1),null);var r_9236 = cljs.core.nth.call(null,vec__9214_9233,(2),null);var vec__9215_9237 = cljs.core.get.call(null,map__9213_9231__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9238 = cljs.core.nth.call(null,vec__9215_9237,(0),null);var ys_9239 = cljs.core.nth.call(null,vec__9215_9237,(1),null);var vec__9216_9240 = cljs.core.get.call(null,map__9213_9231__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9241__$1 = cljs.core.nth.call(null,vec__9216_9240,(0),null);var g_9242 = cljs.core.nth.call(null,vec__9216_9240,(1),null);var b_9243 = cljs.core.nth.call(null,vec__9216_9240,(2),null);var a_9244 = cljs.core.nth.call(null,vec__9216_9240,(3),null);var G__9217_9245 = canvas_ctx_9224;(G__9217_9245["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9241__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9242 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9243 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9244)+")"));
G__9217_9245.fillRect(x_9234,y_9235,xs_9238,ys_9239);
{
var G__9246 = seq__9209_9226;
var G__9247 = chunk__9210_9227;
var G__9248 = count__9211_9228;
var G__9249 = (i__9212_9229 + (1));
seq__9209_9226 = G__9246;
chunk__9210_9227 = G__9247;
count__9211_9228 = G__9248;
i__9212_9229 = G__9249;
continue;
}
} else
{var temp__4126__auto___9250 = cljs.core.seq.call(null,seq__9209_9226);if(temp__4126__auto___9250)
{var seq__9209_9251__$1 = temp__4126__auto___9250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9209_9251__$1))
{var c__4307__auto___9252 = cljs.core.chunk_first.call(null,seq__9209_9251__$1);{
var G__9253 = cljs.core.chunk_rest.call(null,seq__9209_9251__$1);
var G__9254 = c__4307__auto___9252;
var G__9255 = cljs.core.count.call(null,c__4307__auto___9252);
var G__9256 = (0);
seq__9209_9226 = G__9253;
chunk__9210_9227 = G__9254;
count__9211_9228 = G__9255;
i__9212_9229 = G__9256;
continue;
}
} else
{var map__9218_9257 = cljs.core.first.call(null,seq__9209_9251__$1);var map__9218_9258__$1 = ((cljs.core.seq_QMARK_.call(null,map__9218_9257))?cljs.core.apply.call(null,cljs.core.hash_map,map__9218_9257):map__9218_9257);var p_9259 = map__9218_9258__$1;var vec__9219_9260 = cljs.core.get.call(null,map__9218_9258__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9261 = cljs.core.nth.call(null,vec__9219_9260,(0),null);var y_9262 = cljs.core.nth.call(null,vec__9219_9260,(1),null);var r_9263 = cljs.core.nth.call(null,vec__9219_9260,(2),null);var vec__9220_9264 = cljs.core.get.call(null,map__9218_9258__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9265 = cljs.core.nth.call(null,vec__9220_9264,(0),null);var ys_9266 = cljs.core.nth.call(null,vec__9220_9264,(1),null);var vec__9221_9267 = cljs.core.get.call(null,map__9218_9258__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9268__$1 = cljs.core.nth.call(null,vec__9221_9267,(0),null);var g_9269 = cljs.core.nth.call(null,vec__9221_9267,(1),null);var b_9270 = cljs.core.nth.call(null,vec__9221_9267,(2),null);var a_9271 = cljs.core.nth.call(null,vec__9221_9267,(3),null);var G__9222_9272 = canvas_ctx_9224;(G__9222_9272["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9268__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9269 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9270 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9271)+")"));
G__9222_9272.fillRect(x_9261,y_9262,xs_9265,ys_9266);
{
var G__9273 = cljs.core.next.call(null,seq__9209_9251__$1);
var G__9274 = null;
var G__9275 = (0);
var G__9276 = (0);
seq__9209_9226 = G__9273;
chunk__9210_9227 = G__9274;
count__9211_9228 = G__9275;
i__9212_9229 = G__9276;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj9304 = {};return obj9304;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__9302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__9302,(0),null);var ch = cljs.core.nth.call(null,vec__9302,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9302,cw,ch){
return (function (p__9305){var map__9306 = p__9305;var map__9306__$1 = ((cljs.core.seq_QMARK_.call(null,map__9306))?cljs.core.apply.call(null,cljs.core.hash_map,map__9306):map__9306);var ctx = map__9306__$1;var timer = cljs.core.get.call(null,map__9306__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__9306__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__9306,map__9306__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9302,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__9306,map__9306__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9302,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___9327 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___9327 == null))
{} else
{var faceImg_9328 = temp__4130__auto___9327;var tex_9329 = app.main.cacheTex.call(null,gl__$1,faceImg_9328);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_9329,faceImg_9328,temp__4130__auto___9327,map__9306,map__9306__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9302,cw,ch){
return (function (pobj){var seq__9307 = cljs.core.seq.call(null,ps);var chunk__9308 = null;var count__9309 = (0);var i__9310 = (0);while(true){
if((i__9310 < count__9309))
{var map__9311 = cljs.core._nth.call(null,chunk__9308,i__9310);var map__9311__$1 = ((cljs.core.seq_QMARK_.call(null,map__9311))?cljs.core.apply.call(null,cljs.core.hash_map,map__9311):map__9311);var p = map__9311__$1;var vec__9312 = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9312,(0),null);var y = cljs.core.nth.call(null,vec__9312,(1),null);var rot = cljs.core.nth.call(null,vec__9312,(2),null);var vec__9313 = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9313,(0),null);var ys = cljs.core.nth.call(null,vec__9313,(1),null);var vec__9314 = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9314,(0),null);var g = cljs.core.nth.call(null,vec__9314,(1),null);var b = cljs.core.nth.call(null,vec__9314,(2),null);var a = cljs.core.nth.call(null,vec__9314,(3),null);var proj_9330 = (function (){var G__9315 = (new THREE.Matrix4());G__9315.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9315;
})();var tras_9331 = (function (){var G__9316 = (new THREE.Matrix4());G__9316.makeTranslation(x,y,(0));
G__9316.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9316.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9316;
})();var texTx_9332 = (function (){var G__9317 = (new THREE.Matrix3());return G__9317;
})();var colorTx_9333 = (function (){var G__9318 = (new THREE.Matrix4());G__9318.makeTranslation(r,g,b);
return G__9318;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9330.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9331.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9329,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9332.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9333.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9334 = seq__9307;
var G__9335 = chunk__9308;
var G__9336 = count__9309;
var G__9337 = (i__9310 + (1));
seq__9307 = G__9334;
chunk__9308 = G__9335;
count__9309 = G__9336;
i__9310 = G__9337;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9307);if(temp__4126__auto__)
{var seq__9307__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9307__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__9307__$1);{
var G__9338 = cljs.core.chunk_rest.call(null,seq__9307__$1);
var G__9339 = c__4307__auto__;
var G__9340 = cljs.core.count.call(null,c__4307__auto__);
var G__9341 = (0);
seq__9307 = G__9338;
chunk__9308 = G__9339;
count__9309 = G__9340;
i__9310 = G__9341;
continue;
}
} else
{var map__9319 = cljs.core.first.call(null,seq__9307__$1);var map__9319__$1 = ((cljs.core.seq_QMARK_.call(null,map__9319))?cljs.core.apply.call(null,cljs.core.hash_map,map__9319):map__9319);var p = map__9319__$1;var vec__9320 = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9320,(0),null);var y = cljs.core.nth.call(null,vec__9320,(1),null);var rot = cljs.core.nth.call(null,vec__9320,(2),null);var vec__9321 = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9321,(0),null);var ys = cljs.core.nth.call(null,vec__9321,(1),null);var vec__9322 = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9322,(0),null);var g = cljs.core.nth.call(null,vec__9322,(1),null);var b = cljs.core.nth.call(null,vec__9322,(2),null);var a = cljs.core.nth.call(null,vec__9322,(3),null);var proj_9342 = (function (){var G__9323 = (new THREE.Matrix4());G__9323.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9323;
})();var tras_9343 = (function (){var G__9324 = (new THREE.Matrix4());G__9324.makeTranslation(x,y,(0));
G__9324.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9324.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9324;
})();var texTx_9344 = (function (){var G__9325 = (new THREE.Matrix3());return G__9325;
})();var colorTx_9345 = (function (){var G__9326 = (new THREE.Matrix4());G__9326.makeTranslation(r,g,b);
return G__9326;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9342.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9343.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9329,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9344.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9345.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9346 = cljs.core.next.call(null,seq__9307__$1);
var G__9347 = null;
var G__9348 = (0);
var G__9349 = (0);
seq__9307 = G__9346;
chunk__9308 = G__9347;
count__9309 = G__9348;
i__9310 = G__9349;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_9329,faceImg_9328,temp__4130__auto___9327,map__9306,map__9306__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9302,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9302,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6203__auto___9740 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___9740){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___9740){
return (function (state_9691){var state_val_9692 = (state_9691[(1)]);if((state_val_9692 === (7)))
{var inst_9686 = (state_9691[(2)]);var inst_9652 = inst_9686;var state_9691__$1 = (function (){var statearr_9693 = state_9691;(statearr_9693[(7)] = inst_9652);
return statearr_9693;
})();var statearr_9694_9741 = state_9691__$1;(statearr_9694_9741[(2)] = null);
(statearr_9694_9741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (1)))
{var inst_9545 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_9546 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_9547 = [(250),(250),(0)];var inst_9548 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9547,null));var inst_9549 = [(0),(0),(0)];var inst_9550 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9549,null));var inst_9551 = [(0),(0)];var inst_9552 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9551,null));var inst_9553 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9554 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9555 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9556 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9557 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9558 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9559 = [0.5];var inst_9560 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9558,inst_9559);var inst_9561 = [inst_9560];var inst_9562 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9561,null));var inst_9563 = [(1),0.9,(1000),inst_9562];var inst_9564 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9557,inst_9563);var inst_9565 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9566 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9565,null));var inst_9567 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,state_val_9692,c__6203__auto___9740){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,state_val_9692,c__6203__auto___9740))
})();var inst_9568 = [inst_9566,inst_9567];var inst_9569 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9568,null));var inst_9570 = [inst_9569];var inst_9571 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9570,null));var inst_9572 = [(1),inst_9564,inst_9571];var inst_9573 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9556,inst_9572);var inst_9574 = [inst_9573];var inst_9575 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9574,null));var inst_9576 = [(1),0.1,inst_9575];var inst_9577 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9555,inst_9576);var inst_9578 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_9579 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9578,null));var inst_9580 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,state_val_9692,c__6203__auto___9740){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,state_val_9692,c__6203__auto___9740))
})();var inst_9581 = [inst_9579,inst_9580];var inst_9582 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9581,null));var inst_9583 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_9584 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9583,null));var inst_9585 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,state_val_9692,c__6203__auto___9740){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,state_val_9692,c__6203__auto___9740))
})();var inst_9586 = [inst_9584,inst_9585];var inst_9587 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9586,null));var inst_9588 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9589 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9588,null));var inst_9590 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,state_val_9692,c__6203__auto___9740){
return (function (life,v){return v;
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,state_val_9692,c__6203__auto___9740))
})();var inst_9591 = [inst_9589,inst_9590];var inst_9592 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9591,null));var inst_9593 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9594 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9593,null));var inst_9595 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,state_val_9692,c__6203__auto___9740){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,state_val_9692,c__6203__auto___9740))
})();var inst_9596 = [inst_9594,inst_9595];var inst_9597 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9596,null));var inst_9598 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_9599 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9598,null));var inst_9600 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,state_val_9692,c__6203__auto___9740){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,state_val_9692,c__6203__auto___9740))
})();var inst_9601 = [inst_9599,inst_9600];var inst_9602 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9601,null));var inst_9603 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9604 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9603,null));var inst_9605 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,state_val_9692,c__6203__auto___9740){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,state_val_9692,c__6203__auto___9740))
})();var inst_9606 = [inst_9604,inst_9605];var inst_9607 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9606,null));var inst_9608 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9609 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9608,null));var inst_9610 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,state_val_9692,c__6203__auto___9740){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,state_val_9692,c__6203__auto___9740))
})();var inst_9611 = [inst_9609,inst_9610];var inst_9612 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9611,null));var inst_9613 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_9614 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9613,null));var inst_9615 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,state_val_9692,c__6203__auto___9740){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,state_val_9692,c__6203__auto___9740))
})();var inst_9616 = [inst_9614,inst_9615];var inst_9617 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9616,null));var inst_9618 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9619 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9618,null));var inst_9620 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,state_val_9692,c__6203__auto___9740){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,state_val_9692,c__6203__auto___9740))
})();var inst_9621 = [inst_9619,inst_9620];var inst_9622 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9621,null));var inst_9623 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_9624 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9623,null));var inst_9625 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,state_val_9692,c__6203__auto___9740){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,state_val_9692,c__6203__auto___9740))
})();var inst_9626 = [inst_9624,inst_9625];var inst_9627 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9626,null));var inst_9628 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_9629 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9628,null));var inst_9630 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,inst_9625,inst_9626,inst_9627,inst_9628,inst_9629,state_val_9692,c__6203__auto___9740){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,inst_9625,inst_9626,inst_9627,inst_9628,inst_9629,state_val_9692,c__6203__auto___9740))
})();var inst_9631 = [inst_9629,inst_9630];var inst_9632 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9631,null));var inst_9633 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_9634 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9633,null));var inst_9635 = (function (){return ((function (inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,inst_9625,inst_9626,inst_9627,inst_9628,inst_9629,inst_9630,inst_9631,inst_9632,inst_9633,inst_9634,state_val_9692,c__6203__auto___9740){
return (function (life,v){return life;
});
;})(inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,inst_9599,inst_9600,inst_9601,inst_9602,inst_9603,inst_9604,inst_9605,inst_9606,inst_9607,inst_9608,inst_9609,inst_9610,inst_9611,inst_9612,inst_9613,inst_9614,inst_9615,inst_9616,inst_9617,inst_9618,inst_9619,inst_9620,inst_9621,inst_9622,inst_9623,inst_9624,inst_9625,inst_9626,inst_9627,inst_9628,inst_9629,inst_9630,inst_9631,inst_9632,inst_9633,inst_9634,state_val_9692,c__6203__auto___9740))
})();var inst_9636 = [inst_9634,inst_9635];var inst_9637 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9636,null));var inst_9638 = [inst_9582,inst_9587,inst_9592,inst_9597,inst_9602,inst_9607,inst_9612,inst_9617,inst_9622,inst_9627,inst_9632,inst_9637];var inst_9639 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9638,null));var inst_9640 = [(2),inst_9577,inst_9639];var inst_9641 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9554,inst_9640);var inst_9642 = [inst_9641];var inst_9643 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9642,null));var inst_9644 = [(1),0.1,-1.57,1.57,(50),inst_9643];var inst_9645 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9553,inst_9644);var inst_9646 = [(-1),inst_9548,inst_9550,inst_9552,inst_9645];var inst_9647 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9546,inst_9646);var inst_9648 = tool.particle.particle.call(null,inst_9647);var inst_9649 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9648);var inst_9650 = [(0),inst_9649];var inst_9651 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9545,inst_9650);var inst_9652 = inst_9651;var state_9691__$1 = (function (){var statearr_9695 = state_9691;(statearr_9695[(7)] = inst_9652);
return statearr_9695;
})();var statearr_9696_9742 = state_9691__$1;(statearr_9696_9742[(2)] = null);
(statearr_9696_9742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (4)))
{var inst_9660 = (state_9691[(8)]);var inst_9658 = (state_9691[(2)]);var inst_9659 = cljs.core.nth.call(null,inst_9658,(0),null);var inst_9660__$1 = cljs.core.nth.call(null,inst_9658,(1),null);var inst_9664 = cljs.core._EQ_.call(null,app.react.onTick,inst_9660__$1);var state_9691__$1 = (function (){var statearr_9697 = state_9691;(statearr_9697[(8)] = inst_9660__$1);
(statearr_9697[(9)] = inst_9659);
return statearr_9697;
})();if(inst_9664)
{var statearr_9698_9743 = state_9691__$1;(statearr_9698_9743[(1)] = (5));
} else
{var statearr_9699_9744 = state_9691__$1;(statearr_9699_9744[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (6)))
{var inst_9660 = (state_9691[(8)]);var inst_9674 = cljs.core._EQ_.call(null,app.react.onImage,inst_9660);var state_9691__$1 = state_9691;if(inst_9674)
{var statearr_9700_9745 = state_9691__$1;(statearr_9700_9745[(1)] = (8));
} else
{var statearr_9701_9746 = state_9691__$1;(statearr_9701_9746[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (3)))
{var inst_9689 = (state_9691[(2)]);var state_9691__$1 = state_9691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9691__$1,inst_9689);
} else
{if((state_val_9692 === (2)))
{var inst_9655 = [app.react.onTick,app.react.onImage];var inst_9656 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9655,null));var state_9691__$1 = state_9691;return cljs.core.async.ioc_alts_BANG_.call(null,state_9691__$1,(4),inst_9656);
} else
{if((state_val_9692 === (9)))
{var inst_9652 = (state_9691[(7)]);var state_9691__$1 = state_9691;var statearr_9702_9747 = state_9691__$1;(statearr_9702_9747[(2)] = inst_9652);
(statearr_9702_9747[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (5)))
{var inst_9652 = (state_9691[(7)]);var inst_9659 = (state_9691[(9)]);var inst_9666 = $("#canvas");var inst_9667 = tool.particle.update.call(null,inst_9659,inst_9652);var inst_9668 = app.main.draw.call(null,inst_9666,inst_9667);var inst_9669 = app.main.draw3D.call(null,inst_9668);var inst_9670 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_9671 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9670,null));var inst_9672 = cljs.core.update_in.call(null,inst_9669,inst_9671,cljs.core._PLUS_,inst_9659);var state_9691__$1 = state_9691;var statearr_9703_9748 = state_9691__$1;(statearr_9703_9748[(2)] = inst_9672);
(statearr_9703_9748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (10)))
{var inst_9684 = (state_9691[(2)]);var state_9691__$1 = state_9691;var statearr_9704_9749 = state_9691__$1;(statearr_9704_9749[(2)] = inst_9684);
(statearr_9704_9749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9692 === (8)))
{var inst_9652 = (state_9691[(7)]);var inst_9659 = (state_9691[(9)]);var inst_9677 = cljs.core.nth.call(null,inst_9659,(0),null);var inst_9678 = cljs.core.nth.call(null,inst_9659,(1),null);var inst_9679 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_9677];var inst_9680 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9679,null));var inst_9681 = cljs.core.assoc_in.call(null,inst_9652,inst_9680,inst_9678);var state_9691__$1 = state_9691;var statearr_9705_9750 = state_9691__$1;(statearr_9705_9750[(2)] = inst_9681);
(statearr_9705_9750[(1)] = (10));
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
});})(c__6203__auto___9740))
;return ((function (switch__6188__auto__,c__6203__auto___9740){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9709 = [null,null,null,null,null,null,null,null,null,null];(statearr_9709[(0)] = state_machine__6189__auto__);
(statearr_9709[(1)] = (1));
return statearr_9709;
});
var state_machine__6189__auto____1 = (function (state_9691){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9691);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9710){if((e9710 instanceof Object))
{var ex__6192__auto__ = e9710;var statearr_9711_9751 = state_9691;(statearr_9711_9751[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9691);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9752 = state_9691;
state_9691 = G__9752;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9691){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___9740))
})();var state__6205__auto__ = (function (){var statearr_9712 = f__6204__auto__.call(null);(statearr_9712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___9740);
return statearr_9712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___9740))
);
var face_9753 = (new Image());face_9753.src = "res/images/m_gr.jpg";
face_9753.onload = ((function (face_9753){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,face_9753){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,face_9753){
return (function (state_9718){var state_val_9719 = (state_9718[(1)]);if((state_val_9719 === (2)))
{var inst_9716 = (state_9718[(2)]);var state_9718__$1 = state_9718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9718__$1,inst_9716);
} else
{if((state_val_9719 === (1)))
{var inst_9713 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_9753];var inst_9714 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9713,null));var state_9718__$1 = state_9718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9718__$1,(2),app.react.onImage,inst_9714);
} else
{return null;
}
}
});})(c__6203__auto__,face_9753))
;return ((function (switch__6188__auto__,c__6203__auto__,face_9753){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9723 = [null,null,null,null,null,null,null];(statearr_9723[(0)] = state_machine__6189__auto__);
(statearr_9723[(1)] = (1));
return statearr_9723;
});
var state_machine__6189__auto____1 = (function (state_9718){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9724){if((e9724 instanceof Object))
{var ex__6192__auto__ = e9724;var statearr_9725_9754 = state_9718;(statearr_9725_9754[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9755 = state_9718;
state_9718 = G__9755;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9718){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,face_9753))
})();var state__6205__auto__ = (function (){var statearr_9726 = f__6204__auto__.call(null);(statearr_9726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,face_9753))
);
return c__6203__auto__;
});})(face_9753))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6203__auto___9756 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___9756,curr_time__$1,elapsed,last_time){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___9756,curr_time__$1,elapsed,last_time){
return (function (state_9731){var state_val_9732 = (state_9731[(1)]);if((state_val_9732 === (2)))
{var inst_9729 = (state_9731[(2)]);var state_9731__$1 = state_9731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9731__$1,inst_9729);
} else
{if((state_val_9732 === (1)))
{var inst_9727 = (elapsed / (1000));var state_9731__$1 = state_9731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9731__$1,(2),app.react.onTick,inst_9727);
} else
{return null;
}
}
});})(c__6203__auto___9756,curr_time__$1,elapsed,last_time))
;return ((function (switch__6188__auto__,c__6203__auto___9756,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9736 = [null,null,null,null,null,null,null];(statearr_9736[(0)] = state_machine__6189__auto__);
(statearr_9736[(1)] = (1));
return statearr_9736;
});
var state_machine__6189__auto____1 = (function (state_9731){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9731);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9737){if((e9737 instanceof Object))
{var ex__6192__auto__ = e9737;var statearr_9738_9757 = state_9731;(statearr_9738_9757[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9758 = state_9731;
state_9731 = G__9758;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9731){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___9756,curr_time__$1,elapsed,last_time))
})();var state__6205__auto__ = (function (){var statearr_9739 = f__6204__auto__.call(null);(statearr_9739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___9756);
return statearr_9739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___9756,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
