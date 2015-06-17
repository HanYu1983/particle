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
app.main.draw = (function draw(canvas,p__9154){var map__9171 = p__9154;var map__9171__$1 = ((cljs.core.seq_QMARK_.call(null,map__9171))?cljs.core.apply.call(null,cljs.core.hash_map,map__9171):map__9171);var ctx = map__9171__$1;var ps = cljs.core.get.call(null,map__9171__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_9187 = (canvas[(0)]);var canvas_ctx_9188 = canvas_dom_9187.getContext("2d");var G__9172_9189 = canvas_ctx_9188;(G__9172_9189["fillStyle"] = "white");
G__9172_9189.fillRect((0),(0),canvas_dom_9187.width,canvas_dom_9187.height);
(G__9172_9189["fillStyle"] = "red");
G__9172_9189.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__9173_9190 = cljs.core.seq.call(null,ps);var chunk__9174_9191 = null;var count__9175_9192 = (0);var i__9176_9193 = (0);while(true){
if((i__9176_9193 < count__9175_9192))
{var map__9177_9194 = cljs.core._nth.call(null,chunk__9174_9191,i__9176_9193);var map__9177_9195__$1 = ((cljs.core.seq_QMARK_.call(null,map__9177_9194))?cljs.core.apply.call(null,cljs.core.hash_map,map__9177_9194):map__9177_9194);var p_9196 = map__9177_9195__$1;var vec__9178_9197 = cljs.core.get.call(null,map__9177_9195__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9198 = cljs.core.nth.call(null,vec__9178_9197,(0),null);var y_9199 = cljs.core.nth.call(null,vec__9178_9197,(1),null);var r_9200 = cljs.core.nth.call(null,vec__9178_9197,(2),null);var vec__9179_9201 = cljs.core.get.call(null,map__9177_9195__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9202 = cljs.core.nth.call(null,vec__9179_9201,(0),null);var ys_9203 = cljs.core.nth.call(null,vec__9179_9201,(1),null);var vec__9180_9204 = cljs.core.get.call(null,map__9177_9195__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9205__$1 = cljs.core.nth.call(null,vec__9180_9204,(0),null);var g_9206 = cljs.core.nth.call(null,vec__9180_9204,(1),null);var b_9207 = cljs.core.nth.call(null,vec__9180_9204,(2),null);var a_9208 = cljs.core.nth.call(null,vec__9180_9204,(3),null);var G__9181_9209 = canvas_ctx_9188;(G__9181_9209["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9205__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9206 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9207 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9208)+")"));
G__9181_9209.fillRect(x_9198,y_9199,xs_9202,ys_9203);
{
var G__9210 = seq__9173_9190;
var G__9211 = chunk__9174_9191;
var G__9212 = count__9175_9192;
var G__9213 = (i__9176_9193 + (1));
seq__9173_9190 = G__9210;
chunk__9174_9191 = G__9211;
count__9175_9192 = G__9212;
i__9176_9193 = G__9213;
continue;
}
} else
{var temp__4126__auto___9214 = cljs.core.seq.call(null,seq__9173_9190);if(temp__4126__auto___9214)
{var seq__9173_9215__$1 = temp__4126__auto___9214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9173_9215__$1))
{var c__4307__auto___9216 = cljs.core.chunk_first.call(null,seq__9173_9215__$1);{
var G__9217 = cljs.core.chunk_rest.call(null,seq__9173_9215__$1);
var G__9218 = c__4307__auto___9216;
var G__9219 = cljs.core.count.call(null,c__4307__auto___9216);
var G__9220 = (0);
seq__9173_9190 = G__9217;
chunk__9174_9191 = G__9218;
count__9175_9192 = G__9219;
i__9176_9193 = G__9220;
continue;
}
} else
{var map__9182_9221 = cljs.core.first.call(null,seq__9173_9215__$1);var map__9182_9222__$1 = ((cljs.core.seq_QMARK_.call(null,map__9182_9221))?cljs.core.apply.call(null,cljs.core.hash_map,map__9182_9221):map__9182_9221);var p_9223 = map__9182_9222__$1;var vec__9183_9224 = cljs.core.get.call(null,map__9182_9222__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9225 = cljs.core.nth.call(null,vec__9183_9224,(0),null);var y_9226 = cljs.core.nth.call(null,vec__9183_9224,(1),null);var r_9227 = cljs.core.nth.call(null,vec__9183_9224,(2),null);var vec__9184_9228 = cljs.core.get.call(null,map__9182_9222__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9229 = cljs.core.nth.call(null,vec__9184_9228,(0),null);var ys_9230 = cljs.core.nth.call(null,vec__9184_9228,(1),null);var vec__9185_9231 = cljs.core.get.call(null,map__9182_9222__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9232__$1 = cljs.core.nth.call(null,vec__9185_9231,(0),null);var g_9233 = cljs.core.nth.call(null,vec__9185_9231,(1),null);var b_9234 = cljs.core.nth.call(null,vec__9185_9231,(2),null);var a_9235 = cljs.core.nth.call(null,vec__9185_9231,(3),null);var G__9186_9236 = canvas_ctx_9188;(G__9186_9236["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9232__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9233 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9234 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9235)+")"));
G__9186_9236.fillRect(x_9225,y_9226,xs_9229,ys_9230);
{
var G__9237 = cljs.core.next.call(null,seq__9173_9215__$1);
var G__9238 = null;
var G__9239 = (0);
var G__9240 = (0);
seq__9173_9190 = G__9237;
chunk__9174_9191 = G__9238;
count__9175_9192 = G__9239;
i__9176_9193 = G__9240;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj9268 = {};return obj9268;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__9266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__9266,(0),null);var ch = cljs.core.nth.call(null,vec__9266,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9266,cw,ch){
return (function (p__9269){var map__9270 = p__9269;var map__9270__$1 = ((cljs.core.seq_QMARK_.call(null,map__9270))?cljs.core.apply.call(null,cljs.core.hash_map,map__9270):map__9270);var ctx = map__9270__$1;var timer = cljs.core.get.call(null,map__9270__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__9270__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__9270,map__9270__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9266,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__9270,map__9270__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9266,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___9291 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___9291 == null))
{} else
{var faceImg_9292 = temp__4130__auto___9291;var tex_9293 = app.main.cacheTex.call(null,gl__$1,faceImg_9292);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_9293,faceImg_9292,temp__4130__auto___9291,map__9270,map__9270__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9266,cw,ch){
return (function (pobj){var seq__9271 = cljs.core.seq.call(null,ps);var chunk__9272 = null;var count__9273 = (0);var i__9274 = (0);while(true){
if((i__9274 < count__9273))
{var map__9275 = cljs.core._nth.call(null,chunk__9272,i__9274);var map__9275__$1 = ((cljs.core.seq_QMARK_.call(null,map__9275))?cljs.core.apply.call(null,cljs.core.hash_map,map__9275):map__9275);var p = map__9275__$1;var vec__9276 = cljs.core.get.call(null,map__9275__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9276,(0),null);var y = cljs.core.nth.call(null,vec__9276,(1),null);var rot = cljs.core.nth.call(null,vec__9276,(2),null);var vec__9277 = cljs.core.get.call(null,map__9275__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9277,(0),null);var ys = cljs.core.nth.call(null,vec__9277,(1),null);var vec__9278 = cljs.core.get.call(null,map__9275__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9278,(0),null);var g = cljs.core.nth.call(null,vec__9278,(1),null);var b = cljs.core.nth.call(null,vec__9278,(2),null);var a = cljs.core.nth.call(null,vec__9278,(3),null);var proj_9294 = (function (){var G__9279 = (new THREE.Matrix4());G__9279.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9279;
})();var tras_9295 = (function (){var G__9280 = (new THREE.Matrix4());G__9280.makeTranslation(x,y,(0));
G__9280.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9280.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9280;
})();var texTx_9296 = (function (){var G__9281 = (new THREE.Matrix3());return G__9281;
})();var colorTx_9297 = (function (){var G__9282 = (new THREE.Matrix4());G__9282.makeTranslation(r,g,b);
return G__9282;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9294.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9295.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9293,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9296.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9297.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9298 = seq__9271;
var G__9299 = chunk__9272;
var G__9300 = count__9273;
var G__9301 = (i__9274 + (1));
seq__9271 = G__9298;
chunk__9272 = G__9299;
count__9273 = G__9300;
i__9274 = G__9301;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9271);if(temp__4126__auto__)
{var seq__9271__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9271__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__9271__$1);{
var G__9302 = cljs.core.chunk_rest.call(null,seq__9271__$1);
var G__9303 = c__4307__auto__;
var G__9304 = cljs.core.count.call(null,c__4307__auto__);
var G__9305 = (0);
seq__9271 = G__9302;
chunk__9272 = G__9303;
count__9273 = G__9304;
i__9274 = G__9305;
continue;
}
} else
{var map__9283 = cljs.core.first.call(null,seq__9271__$1);var map__9283__$1 = ((cljs.core.seq_QMARK_.call(null,map__9283))?cljs.core.apply.call(null,cljs.core.hash_map,map__9283):map__9283);var p = map__9283__$1;var vec__9284 = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9284,(0),null);var y = cljs.core.nth.call(null,vec__9284,(1),null);var rot = cljs.core.nth.call(null,vec__9284,(2),null);var vec__9285 = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9285,(0),null);var ys = cljs.core.nth.call(null,vec__9285,(1),null);var vec__9286 = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9286,(0),null);var g = cljs.core.nth.call(null,vec__9286,(1),null);var b = cljs.core.nth.call(null,vec__9286,(2),null);var a = cljs.core.nth.call(null,vec__9286,(3),null);var proj_9306 = (function (){var G__9287 = (new THREE.Matrix4());G__9287.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9287;
})();var tras_9307 = (function (){var G__9288 = (new THREE.Matrix4());G__9288.makeTranslation(x,y,(0));
G__9288.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9288.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9288;
})();var texTx_9308 = (function (){var G__9289 = (new THREE.Matrix3());return G__9289;
})();var colorTx_9309 = (function (){var G__9290 = (new THREE.Matrix4());G__9290.makeTranslation(r,g,b);
return G__9290;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9306.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9307.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9293,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9308.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9309.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9310 = cljs.core.next.call(null,seq__9271__$1);
var G__9311 = null;
var G__9312 = (0);
var G__9313 = (0);
seq__9271 = G__9310;
chunk__9272 = G__9311;
count__9273 = G__9312;
i__9274 = G__9313;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_9293,faceImg_9292,temp__4130__auto___9291,map__9270,map__9270__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9266,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9266,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__5715__auto___9704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5715__auto___9704){
return (function (){var f__5716__auto__ = (function (){var switch__5700__auto__ = ((function (c__5715__auto___9704){
return (function (state_9655){var state_val_9656 = (state_9655[(1)]);if((state_val_9656 === (7)))
{var inst_9650 = (state_9655[(2)]);var inst_9616 = inst_9650;var state_9655__$1 = (function (){var statearr_9657 = state_9655;(statearr_9657[(7)] = inst_9616);
return statearr_9657;
})();var statearr_9658_9705 = state_9655__$1;(statearr_9658_9705[(2)] = null);
(statearr_9658_9705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (1)))
{var inst_9509 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_9510 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_9511 = [(250),(250),(0)];var inst_9512 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9511,null));var inst_9513 = [(0),(0),(0)];var inst_9514 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9513,null));var inst_9515 = [(0),(0)];var inst_9516 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9515,null));var inst_9517 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9518 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9519 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9520 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9521 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9522 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9523 = [0.5];var inst_9524 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9522,inst_9523);var inst_9525 = [inst_9524];var inst_9526 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9525,null));var inst_9527 = [(1),0.9,(1000),inst_9526];var inst_9528 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9521,inst_9527);var inst_9529 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9530 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9529,null));var inst_9531 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,state_val_9656,c__5715__auto___9704){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,state_val_9656,c__5715__auto___9704))
})();var inst_9532 = [inst_9530,inst_9531];var inst_9533 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9532,null));var inst_9534 = [inst_9533];var inst_9535 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9534,null));var inst_9536 = [(1),inst_9528,inst_9535];var inst_9537 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9520,inst_9536);var inst_9538 = [inst_9537];var inst_9539 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9538,null));var inst_9540 = [(1),0.1,inst_9539];var inst_9541 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9519,inst_9540);var inst_9542 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_9543 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9542,null));var inst_9544 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,state_val_9656,c__5715__auto___9704){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,state_val_9656,c__5715__auto___9704))
})();var inst_9545 = [inst_9543,inst_9544];var inst_9546 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9545,null));var inst_9547 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_9548 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9547,null));var inst_9549 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,state_val_9656,c__5715__auto___9704){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,state_val_9656,c__5715__auto___9704))
})();var inst_9550 = [inst_9548,inst_9549];var inst_9551 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9550,null));var inst_9552 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9553 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9552,null));var inst_9554 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,state_val_9656,c__5715__auto___9704){
return (function (life,v){return v;
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,state_val_9656,c__5715__auto___9704))
})();var inst_9555 = [inst_9553,inst_9554];var inst_9556 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9555,null));var inst_9557 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9558 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9557,null));var inst_9559 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,state_val_9656,c__5715__auto___9704){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,state_val_9656,c__5715__auto___9704))
})();var inst_9560 = [inst_9558,inst_9559];var inst_9561 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9560,null));var inst_9562 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_9563 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9562,null));var inst_9564 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,state_val_9656,c__5715__auto___9704){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,state_val_9656,c__5715__auto___9704))
})();var inst_9565 = [inst_9563,inst_9564];var inst_9566 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9565,null));var inst_9567 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9568 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9567,null));var inst_9569 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,state_val_9656,c__5715__auto___9704){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,state_val_9656,c__5715__auto___9704))
})();var inst_9570 = [inst_9568,inst_9569];var inst_9571 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9570,null));var inst_9572 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9573 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9572,null));var inst_9574 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,state_val_9656,c__5715__auto___9704){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,state_val_9656,c__5715__auto___9704))
})();var inst_9575 = [inst_9573,inst_9574];var inst_9576 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9575,null));var inst_9577 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_9578 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9577,null));var inst_9579 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,state_val_9656,c__5715__auto___9704){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,state_val_9656,c__5715__auto___9704))
})();var inst_9580 = [inst_9578,inst_9579];var inst_9581 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9580,null));var inst_9582 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9583 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9582,null));var inst_9584 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,state_val_9656,c__5715__auto___9704){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,state_val_9656,c__5715__auto___9704))
})();var inst_9585 = [inst_9583,inst_9584];var inst_9586 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9585,null));var inst_9587 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_9588 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9587,null));var inst_9589 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,state_val_9656,c__5715__auto___9704){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,state_val_9656,c__5715__auto___9704))
})();var inst_9590 = [inst_9588,inst_9589];var inst_9591 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9590,null));var inst_9592 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_9593 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9592,null));var inst_9594 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,state_val_9656,c__5715__auto___9704){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,state_val_9656,c__5715__auto___9704))
})();var inst_9595 = [inst_9593,inst_9594];var inst_9596 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9595,null));var inst_9597 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_9598 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9597,null));var inst_9599 = (function (){return ((function (inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,state_val_9656,c__5715__auto___9704){
return (function (life,v){return life;
});
;})(inst_9509,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,inst_9525,inst_9526,inst_9527,inst_9528,inst_9529,inst_9530,inst_9531,inst_9532,inst_9533,inst_9534,inst_9535,inst_9536,inst_9537,inst_9538,inst_9539,inst_9540,inst_9541,inst_9542,inst_9543,inst_9544,inst_9545,inst_9546,inst_9547,inst_9548,inst_9549,inst_9550,inst_9551,inst_9552,inst_9553,inst_9554,inst_9555,inst_9556,inst_9557,inst_9558,inst_9559,inst_9560,inst_9561,inst_9562,inst_9563,inst_9564,inst_9565,inst_9566,inst_9567,inst_9568,inst_9569,inst_9570,inst_9571,inst_9572,inst_9573,inst_9574,inst_9575,inst_9576,inst_9577,inst_9578,inst_9579,inst_9580,inst_9581,inst_9582,inst_9583,inst_9584,inst_9585,inst_9586,inst_9587,inst_9588,inst_9589,inst_9590,inst_9591,inst_9592,inst_9593,inst_9594,inst_9595,inst_9596,inst_9597,inst_9598,state_val_9656,c__5715__auto___9704))
})();var inst_9600 = [inst_9598,inst_9599];var inst_9601 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9600,null));var inst_9602 = [inst_9546,inst_9551,inst_9556,inst_9561,inst_9566,inst_9571,inst_9576,inst_9581,inst_9586,inst_9591,inst_9596,inst_9601];var inst_9603 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9602,null));var inst_9604 = [(2),inst_9541,inst_9603];var inst_9605 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9518,inst_9604);var inst_9606 = [inst_9605];var inst_9607 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9606,null));var inst_9608 = [(1),0.1,-1.57,1.57,(50),inst_9607];var inst_9609 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9517,inst_9608);var inst_9610 = [(-1),inst_9512,inst_9514,inst_9516,inst_9609];var inst_9611 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9510,inst_9610);var inst_9612 = app.particle.create.call(null,inst_9611);var inst_9613 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9612);var inst_9614 = [(0),inst_9613];var inst_9615 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9509,inst_9614);var inst_9616 = inst_9615;var state_9655__$1 = (function (){var statearr_9659 = state_9655;(statearr_9659[(7)] = inst_9616);
return statearr_9659;
})();var statearr_9660_9706 = state_9655__$1;(statearr_9660_9706[(2)] = null);
(statearr_9660_9706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (4)))
{var inst_9624 = (state_9655[(8)]);var inst_9622 = (state_9655[(2)]);var inst_9623 = cljs.core.nth.call(null,inst_9622,(0),null);var inst_9624__$1 = cljs.core.nth.call(null,inst_9622,(1),null);var inst_9628 = cljs.core._EQ_.call(null,app.react.onTick,inst_9624__$1);var state_9655__$1 = (function (){var statearr_9661 = state_9655;(statearr_9661[(9)] = inst_9623);
(statearr_9661[(8)] = inst_9624__$1);
return statearr_9661;
})();if(inst_9628)
{var statearr_9662_9707 = state_9655__$1;(statearr_9662_9707[(1)] = (5));
} else
{var statearr_9663_9708 = state_9655__$1;(statearr_9663_9708[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (6)))
{var inst_9624 = (state_9655[(8)]);var inst_9638 = cljs.core._EQ_.call(null,app.react.onImage,inst_9624);var state_9655__$1 = state_9655;if(inst_9638)
{var statearr_9664_9709 = state_9655__$1;(statearr_9664_9709[(1)] = (8));
} else
{var statearr_9665_9710 = state_9655__$1;(statearr_9665_9710[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (3)))
{var inst_9653 = (state_9655[(2)]);var state_9655__$1 = state_9655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9655__$1,inst_9653);
} else
{if((state_val_9656 === (2)))
{var inst_9619 = [app.react.onTick,app.react.onImage];var inst_9620 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9619,null));var state_9655__$1 = state_9655;return cljs.core.async.ioc_alts_BANG_.call(null,state_9655__$1,(4),inst_9620);
} else
{if((state_val_9656 === (9)))
{var inst_9616 = (state_9655[(7)]);var state_9655__$1 = state_9655;var statearr_9666_9711 = state_9655__$1;(statearr_9666_9711[(2)] = inst_9616);
(statearr_9666_9711[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (5)))
{var inst_9623 = (state_9655[(9)]);var inst_9616 = (state_9655[(7)]);var inst_9630 = $("#canvas");var inst_9631 = app.particle.update.call(null,inst_9623,inst_9616);var inst_9632 = app.main.draw.call(null,inst_9630,inst_9631);var inst_9633 = app.main.draw3D.call(null,inst_9632);var inst_9634 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_9635 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9634,null));var inst_9636 = cljs.core.update_in.call(null,inst_9633,inst_9635,cljs.core._PLUS_,inst_9623);var state_9655__$1 = state_9655;var statearr_9667_9712 = state_9655__$1;(statearr_9667_9712[(2)] = inst_9636);
(statearr_9667_9712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (10)))
{var inst_9648 = (state_9655[(2)]);var state_9655__$1 = state_9655;var statearr_9668_9713 = state_9655__$1;(statearr_9668_9713[(2)] = inst_9648);
(statearr_9668_9713[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (8)))
{var inst_9623 = (state_9655[(9)]);var inst_9616 = (state_9655[(7)]);var inst_9641 = cljs.core.nth.call(null,inst_9623,(0),null);var inst_9642 = cljs.core.nth.call(null,inst_9623,(1),null);var inst_9643 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_9641];var inst_9644 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9643,null));var inst_9645 = cljs.core.assoc_in.call(null,inst_9616,inst_9644,inst_9642);var state_9655__$1 = state_9655;var statearr_9669_9714 = state_9655__$1;(statearr_9669_9714[(2)] = inst_9645);
(statearr_9669_9714[(1)] = (10));
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
});})(c__5715__auto___9704))
;return ((function (switch__5700__auto__,c__5715__auto___9704){
return (function() {
var state_machine__5701__auto__ = null;
var state_machine__5701__auto____0 = (function (){var statearr_9673 = [null,null,null,null,null,null,null,null,null,null];(statearr_9673[(0)] = state_machine__5701__auto__);
(statearr_9673[(1)] = (1));
return statearr_9673;
});
var state_machine__5701__auto____1 = (function (state_9655){while(true){
var ret_value__5702__auto__ = (function (){try{while(true){
var result__5703__auto__ = switch__5700__auto__.call(null,state_9655);if(cljs.core.keyword_identical_QMARK_.call(null,result__5703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5703__auto__;
}
break;
}
}catch (e9674){if((e9674 instanceof Object))
{var ex__5704__auto__ = e9674;var statearr_9675_9715 = state_9655;(statearr_9675_9715[(5)] = ex__5704__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9655);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9716 = state_9655;
state_9655 = G__9716;
continue;
}
} else
{return ret_value__5702__auto__;
}
break;
}
});
state_machine__5701__auto__ = function(state_9655){
switch(arguments.length){
case 0:
return state_machine__5701__auto____0.call(this);
case 1:
return state_machine__5701__auto____1.call(this,state_9655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5701__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5701__auto____0;
state_machine__5701__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5701__auto____1;
return state_machine__5701__auto__;
})()
;})(switch__5700__auto__,c__5715__auto___9704))
})();var state__5717__auto__ = (function (){var statearr_9676 = f__5716__auto__.call(null);(statearr_9676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5715__auto___9704);
return statearr_9676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5717__auto__);
});})(c__5715__auto___9704))
);
var face_9717 = (new Image());face_9717.src = "res/imgs/m_gr.jpg";
face_9717.onload = ((function (face_9717){
return (function (){var c__5715__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5715__auto__,face_9717){
return (function (){var f__5716__auto__ = (function (){var switch__5700__auto__ = ((function (c__5715__auto__,face_9717){
return (function (state_9682){var state_val_9683 = (state_9682[(1)]);if((state_val_9683 === (2)))
{var inst_9680 = (state_9682[(2)]);var state_9682__$1 = state_9682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9682__$1,inst_9680);
} else
{if((state_val_9683 === (1)))
{var inst_9677 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_9717];var inst_9678 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9677,null));var state_9682__$1 = state_9682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9682__$1,(2),app.react.onImage,inst_9678);
} else
{return null;
}
}
});})(c__5715__auto__,face_9717))
;return ((function (switch__5700__auto__,c__5715__auto__,face_9717){
return (function() {
var state_machine__5701__auto__ = null;
var state_machine__5701__auto____0 = (function (){var statearr_9687 = [null,null,null,null,null,null,null];(statearr_9687[(0)] = state_machine__5701__auto__);
(statearr_9687[(1)] = (1));
return statearr_9687;
});
var state_machine__5701__auto____1 = (function (state_9682){while(true){
var ret_value__5702__auto__ = (function (){try{while(true){
var result__5703__auto__ = switch__5700__auto__.call(null,state_9682);if(cljs.core.keyword_identical_QMARK_.call(null,result__5703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5703__auto__;
}
break;
}
}catch (e9688){if((e9688 instanceof Object))
{var ex__5704__auto__ = e9688;var statearr_9689_9718 = state_9682;(statearr_9689_9718[(5)] = ex__5704__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9719 = state_9682;
state_9682 = G__9719;
continue;
}
} else
{return ret_value__5702__auto__;
}
break;
}
});
state_machine__5701__auto__ = function(state_9682){
switch(arguments.length){
case 0:
return state_machine__5701__auto____0.call(this);
case 1:
return state_machine__5701__auto____1.call(this,state_9682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5701__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5701__auto____0;
state_machine__5701__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5701__auto____1;
return state_machine__5701__auto__;
})()
;})(switch__5700__auto__,c__5715__auto__,face_9717))
})();var state__5717__auto__ = (function (){var statearr_9690 = f__5716__auto__.call(null);(statearr_9690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5715__auto__);
return statearr_9690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5717__auto__);
});})(c__5715__auto__,face_9717))
);
return c__5715__auto__;
});})(face_9717))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__5715__auto___9720 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5715__auto___9720,curr_time__$1,elapsed,last_time){
return (function (){var f__5716__auto__ = (function (){var switch__5700__auto__ = ((function (c__5715__auto___9720,curr_time__$1,elapsed,last_time){
return (function (state_9695){var state_val_9696 = (state_9695[(1)]);if((state_val_9696 === (2)))
{var inst_9693 = (state_9695[(2)]);var state_9695__$1 = state_9695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9695__$1,inst_9693);
} else
{if((state_val_9696 === (1)))
{var inst_9691 = (elapsed / (1000));var state_9695__$1 = state_9695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9695__$1,(2),app.react.onTick,inst_9691);
} else
{return null;
}
}
});})(c__5715__auto___9720,curr_time__$1,elapsed,last_time))
;return ((function (switch__5700__auto__,c__5715__auto___9720,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__5701__auto__ = null;
var state_machine__5701__auto____0 = (function (){var statearr_9700 = [null,null,null,null,null,null,null];(statearr_9700[(0)] = state_machine__5701__auto__);
(statearr_9700[(1)] = (1));
return statearr_9700;
});
var state_machine__5701__auto____1 = (function (state_9695){while(true){
var ret_value__5702__auto__ = (function (){try{while(true){
var result__5703__auto__ = switch__5700__auto__.call(null,state_9695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5703__auto__;
}
break;
}
}catch (e9701){if((e9701 instanceof Object))
{var ex__5704__auto__ = e9701;var statearr_9702_9721 = state_9695;(statearr_9702_9721[(5)] = ex__5704__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9722 = state_9695;
state_9695 = G__9722;
continue;
}
} else
{return ret_value__5702__auto__;
}
break;
}
});
state_machine__5701__auto__ = function(state_9695){
switch(arguments.length){
case 0:
return state_machine__5701__auto____0.call(this);
case 1:
return state_machine__5701__auto____1.call(this,state_9695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5701__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5701__auto____0;
state_machine__5701__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5701__auto____1;
return state_machine__5701__auto__;
})()
;})(switch__5700__auto__,c__5715__auto___9720,curr_time__$1,elapsed,last_time))
})();var state__5717__auto__ = (function (){var statearr_9703 = f__5716__auto__.call(null);(statearr_9703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5715__auto___9720);
return statearr_9703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5717__auto__);
});})(c__5715__auto___9720,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
