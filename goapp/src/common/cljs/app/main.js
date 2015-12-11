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
app.main.draw = (function draw(canvas,p__18186){var map__18203 = p__18186;var map__18203__$1 = ((cljs.core.seq_QMARK_.call(null,map__18203))?cljs.core.apply.call(null,cljs.core.hash_map,map__18203):map__18203);var ctx = map__18203__$1;var ps = cljs.core.get.call(null,map__18203__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_18219 = (canvas[(0)]);var canvas_ctx_18220 = canvas_dom_18219.getContext("2d");var G__18204_18221 = canvas_ctx_18220;(G__18204_18221["fillStyle"] = "white");
G__18204_18221.fillRect((0),(0),canvas_dom_18219.width,canvas_dom_18219.height);
(G__18204_18221["fillStyle"] = "red");
G__18204_18221.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__18205_18222 = cljs.core.seq.call(null,ps);var chunk__18206_18223 = null;var count__18207_18224 = (0);var i__18208_18225 = (0);while(true){
if((i__18208_18225 < count__18207_18224))
{var map__18209_18226 = cljs.core._nth.call(null,chunk__18206_18223,i__18208_18225);var map__18209_18227__$1 = ((cljs.core.seq_QMARK_.call(null,map__18209_18226))?cljs.core.apply.call(null,cljs.core.hash_map,map__18209_18226):map__18209_18226);var p_18228 = map__18209_18227__$1;var vec__18210_18229 = cljs.core.get.call(null,map__18209_18227__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_18230 = cljs.core.nth.call(null,vec__18210_18229,(0),null);var y_18231 = cljs.core.nth.call(null,vec__18210_18229,(1),null);var r_18232 = cljs.core.nth.call(null,vec__18210_18229,(2),null);var vec__18211_18233 = cljs.core.get.call(null,map__18209_18227__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_18234 = cljs.core.nth.call(null,vec__18211_18233,(0),null);var ys_18235 = cljs.core.nth.call(null,vec__18211_18233,(1),null);var vec__18212_18236 = cljs.core.get.call(null,map__18209_18227__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_18237__$1 = cljs.core.nth.call(null,vec__18212_18236,(0),null);var g_18238 = cljs.core.nth.call(null,vec__18212_18236,(1),null);var b_18239 = cljs.core.nth.call(null,vec__18212_18236,(2),null);var a_18240 = cljs.core.nth.call(null,vec__18212_18236,(3),null);var G__18213_18241 = canvas_ctx_18220;(G__18213_18241["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_18237__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_18238 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_18239 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_18240)+")"));
G__18213_18241.fillRect(x_18230,y_18231,xs_18234,ys_18235);
{
var G__18242 = seq__18205_18222;
var G__18243 = chunk__18206_18223;
var G__18244 = count__18207_18224;
var G__18245 = (i__18208_18225 + (1));
seq__18205_18222 = G__18242;
chunk__18206_18223 = G__18243;
count__18207_18224 = G__18244;
i__18208_18225 = G__18245;
continue;
}
} else
{var temp__4126__auto___18246 = cljs.core.seq.call(null,seq__18205_18222);if(temp__4126__auto___18246)
{var seq__18205_18247__$1 = temp__4126__auto___18246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18205_18247__$1))
{var c__4307__auto___18248 = cljs.core.chunk_first.call(null,seq__18205_18247__$1);{
var G__18249 = cljs.core.chunk_rest.call(null,seq__18205_18247__$1);
var G__18250 = c__4307__auto___18248;
var G__18251 = cljs.core.count.call(null,c__4307__auto___18248);
var G__18252 = (0);
seq__18205_18222 = G__18249;
chunk__18206_18223 = G__18250;
count__18207_18224 = G__18251;
i__18208_18225 = G__18252;
continue;
}
} else
{var map__18214_18253 = cljs.core.first.call(null,seq__18205_18247__$1);var map__18214_18254__$1 = ((cljs.core.seq_QMARK_.call(null,map__18214_18253))?cljs.core.apply.call(null,cljs.core.hash_map,map__18214_18253):map__18214_18253);var p_18255 = map__18214_18254__$1;var vec__18215_18256 = cljs.core.get.call(null,map__18214_18254__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_18257 = cljs.core.nth.call(null,vec__18215_18256,(0),null);var y_18258 = cljs.core.nth.call(null,vec__18215_18256,(1),null);var r_18259 = cljs.core.nth.call(null,vec__18215_18256,(2),null);var vec__18216_18260 = cljs.core.get.call(null,map__18214_18254__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_18261 = cljs.core.nth.call(null,vec__18216_18260,(0),null);var ys_18262 = cljs.core.nth.call(null,vec__18216_18260,(1),null);var vec__18217_18263 = cljs.core.get.call(null,map__18214_18254__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_18264__$1 = cljs.core.nth.call(null,vec__18217_18263,(0),null);var g_18265 = cljs.core.nth.call(null,vec__18217_18263,(1),null);var b_18266 = cljs.core.nth.call(null,vec__18217_18263,(2),null);var a_18267 = cljs.core.nth.call(null,vec__18217_18263,(3),null);var G__18218_18268 = canvas_ctx_18220;(G__18218_18268["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_18264__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_18265 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_18266 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_18267)+")"));
G__18218_18268.fillRect(x_18257,y_18258,xs_18261,ys_18262);
{
var G__18269 = cljs.core.next.call(null,seq__18205_18247__$1);
var G__18270 = null;
var G__18271 = (0);
var G__18272 = (0);
seq__18205_18222 = G__18269;
chunk__18206_18223 = G__18270;
count__18207_18224 = G__18271;
i__18208_18225 = G__18272;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj18300 = {};return obj18300;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__18298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__18298,(0),null);var ch = cljs.core.nth.call(null,vec__18298,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__18298,cw,ch){
return (function (p__18301){var map__18302 = p__18301;var map__18302__$1 = ((cljs.core.seq_QMARK_.call(null,map__18302))?cljs.core.apply.call(null,cljs.core.hash_map,map__18302):map__18302);var ctx = map__18302__$1;var timer = cljs.core.get.call(null,map__18302__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__18302__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__18302,map__18302__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__18298,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__18302,map__18302__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__18298,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
var temp__4130__auto___18323 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___18323 == null))
{} else
{var faceImg_18324 = temp__4130__auto___18323;var tex_18325 = app.main.cacheTex.call(null,gl__$1,faceImg_18324);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_18325,faceImg_18324,temp__4130__auto___18323,map__18302,map__18302__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__18298,cw,ch){
return (function (pobj){var seq__18303 = cljs.core.seq.call(null,ps);var chunk__18304 = null;var count__18305 = (0);var i__18306 = (0);while(true){
if((i__18306 < count__18305))
{var map__18307 = cljs.core._nth.call(null,chunk__18304,i__18306);var map__18307__$1 = ((cljs.core.seq_QMARK_.call(null,map__18307))?cljs.core.apply.call(null,cljs.core.hash_map,map__18307):map__18307);var p = map__18307__$1;var vec__18308 = cljs.core.get.call(null,map__18307__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__18308,(0),null);var y = cljs.core.nth.call(null,vec__18308,(1),null);var rot = cljs.core.nth.call(null,vec__18308,(2),null);var vec__18309 = cljs.core.get.call(null,map__18307__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__18309,(0),null);var ys = cljs.core.nth.call(null,vec__18309,(1),null);var vec__18310 = cljs.core.get.call(null,map__18307__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__18310,(0),null);var g = cljs.core.nth.call(null,vec__18310,(1),null);var b = cljs.core.nth.call(null,vec__18310,(2),null);var a = cljs.core.nth.call(null,vec__18310,(3),null);var proj_18326 = (function (){var G__18311 = (new THREE.Matrix4());G__18311.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__18311;
})();var tras_18327 = (function (){var G__18312 = (new THREE.Matrix4());G__18312.makeTranslation(x,y,(0));
G__18312.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__18312.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__18312;
})();var texTx_18328 = (function (){var G__18313 = (new THREE.Matrix3());return G__18313;
})();var colorTx_18329 = (function (){var G__18314 = (new THREE.Matrix4());G__18314.makeTranslation(r,g,b);
return G__18314;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_18326.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_18327.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_18325,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_18328.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_18329.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__18330 = seq__18303;
var G__18331 = chunk__18304;
var G__18332 = count__18305;
var G__18333 = (i__18306 + (1));
seq__18303 = G__18330;
chunk__18304 = G__18331;
count__18305 = G__18332;
i__18306 = G__18333;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18303);if(temp__4126__auto__)
{var seq__18303__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18303__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__18303__$1);{
var G__18334 = cljs.core.chunk_rest.call(null,seq__18303__$1);
var G__18335 = c__4307__auto__;
var G__18336 = cljs.core.count.call(null,c__4307__auto__);
var G__18337 = (0);
seq__18303 = G__18334;
chunk__18304 = G__18335;
count__18305 = G__18336;
i__18306 = G__18337;
continue;
}
} else
{var map__18315 = cljs.core.first.call(null,seq__18303__$1);var map__18315__$1 = ((cljs.core.seq_QMARK_.call(null,map__18315))?cljs.core.apply.call(null,cljs.core.hash_map,map__18315):map__18315);var p = map__18315__$1;var vec__18316 = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__18316,(0),null);var y = cljs.core.nth.call(null,vec__18316,(1),null);var rot = cljs.core.nth.call(null,vec__18316,(2),null);var vec__18317 = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__18317,(0),null);var ys = cljs.core.nth.call(null,vec__18317,(1),null);var vec__18318 = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__18318,(0),null);var g = cljs.core.nth.call(null,vec__18318,(1),null);var b = cljs.core.nth.call(null,vec__18318,(2),null);var a = cljs.core.nth.call(null,vec__18318,(3),null);var proj_18338 = (function (){var G__18319 = (new THREE.Matrix4());G__18319.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__18319;
})();var tras_18339 = (function (){var G__18320 = (new THREE.Matrix4());G__18320.makeTranslation(x,y,(0));
G__18320.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__18320.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__18320;
})();var texTx_18340 = (function (){var G__18321 = (new THREE.Matrix3());return G__18321;
})();var colorTx_18341 = (function (){var G__18322 = (new THREE.Matrix4());G__18322.makeTranslation(r,g,b);
return G__18322;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_18338.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_18339.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_18325,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_18340.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_18341.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__18342 = cljs.core.next.call(null,seq__18303__$1);
var G__18343 = null;
var G__18344 = (0);
var G__18345 = (0);
seq__18303 = G__18342;
chunk__18304 = G__18343;
count__18305 = G__18344;
i__18306 = G__18345;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_18325,faceImg_18324,temp__4130__auto___18323,map__18302,map__18302__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__18298,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__18298,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6202__auto___18736 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___18736){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___18736){
return (function (state_18687){var state_val_18688 = (state_18687[(1)]);if((state_val_18688 === (7)))
{var inst_18682 = (state_18687[(2)]);var inst_18648 = inst_18682;var state_18687__$1 = (function (){var statearr_18689 = state_18687;(statearr_18689[(7)] = inst_18648);
return statearr_18689;
})();var statearr_18690_18737 = state_18687__$1;(statearr_18690_18737[(2)] = null);
(statearr_18690_18737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (1)))
{var inst_18541 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_18542 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_18543 = [(250),(250),(0)];var inst_18544 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18543,null));var inst_18545 = [(0),(0),(0)];var inst_18546 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18545,null));var inst_18547 = [(0),(0)];var inst_18548 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18547,null));var inst_18549 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_18550 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_18551 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_18552 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_18553 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_18554 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_18555 = [0.5];var inst_18556 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18554,inst_18555);var inst_18557 = [inst_18556];var inst_18558 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18557,null));var inst_18559 = [(1),0.9,(1000),inst_18558];var inst_18560 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18553,inst_18559);var inst_18561 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_18562 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18561,null));var inst_18563 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,state_val_18688,c__6202__auto___18736){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,state_val_18688,c__6202__auto___18736))
})();var inst_18564 = [inst_18562,inst_18563];var inst_18565 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18564,null));var inst_18566 = [inst_18565];var inst_18567 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18566,null));var inst_18568 = [(1),inst_18560,inst_18567];var inst_18569 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18552,inst_18568);var inst_18570 = [inst_18569];var inst_18571 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18570,null));var inst_18572 = [(1),0.1,inst_18571];var inst_18573 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18551,inst_18572);var inst_18574 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_18575 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18574,null));var inst_18576 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,state_val_18688,c__6202__auto___18736){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,state_val_18688,c__6202__auto___18736))
})();var inst_18577 = [inst_18575,inst_18576];var inst_18578 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18577,null));var inst_18579 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_18580 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18579,null));var inst_18581 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,state_val_18688,c__6202__auto___18736){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,state_val_18688,c__6202__auto___18736))
})();var inst_18582 = [inst_18580,inst_18581];var inst_18583 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18582,null));var inst_18584 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_18585 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18584,null));var inst_18586 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,state_val_18688,c__6202__auto___18736){
return (function (life,v){return v;
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,state_val_18688,c__6202__auto___18736))
})();var inst_18587 = [inst_18585,inst_18586];var inst_18588 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18587,null));var inst_18589 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_18590 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18589,null));var inst_18591 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,state_val_18688,c__6202__auto___18736){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,state_val_18688,c__6202__auto___18736))
})();var inst_18592 = [inst_18590,inst_18591];var inst_18593 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18592,null));var inst_18594 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_18595 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18594,null));var inst_18596 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,state_val_18688,c__6202__auto___18736){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,state_val_18688,c__6202__auto___18736))
})();var inst_18597 = [inst_18595,inst_18596];var inst_18598 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18597,null));var inst_18599 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_18600 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18599,null));var inst_18601 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,state_val_18688,c__6202__auto___18736){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,state_val_18688,c__6202__auto___18736))
})();var inst_18602 = [inst_18600,inst_18601];var inst_18603 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18602,null));var inst_18604 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_18605 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18604,null));var inst_18606 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,state_val_18688,c__6202__auto___18736){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,state_val_18688,c__6202__auto___18736))
})();var inst_18607 = [inst_18605,inst_18606];var inst_18608 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18607,null));var inst_18609 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_18610 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18609,null));var inst_18611 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,state_val_18688,c__6202__auto___18736){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,state_val_18688,c__6202__auto___18736))
})();var inst_18612 = [inst_18610,inst_18611];var inst_18613 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18612,null));var inst_18614 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_18615 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18614,null));var inst_18616 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,state_val_18688,c__6202__auto___18736){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,state_val_18688,c__6202__auto___18736))
})();var inst_18617 = [inst_18615,inst_18616];var inst_18618 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18617,null));var inst_18619 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_18620 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18619,null));var inst_18621 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,inst_18616,inst_18617,inst_18618,inst_18619,inst_18620,state_val_18688,c__6202__auto___18736){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,inst_18616,inst_18617,inst_18618,inst_18619,inst_18620,state_val_18688,c__6202__auto___18736))
})();var inst_18622 = [inst_18620,inst_18621];var inst_18623 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18622,null));var inst_18624 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_18625 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18624,null));var inst_18626 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,inst_18616,inst_18617,inst_18618,inst_18619,inst_18620,inst_18621,inst_18622,inst_18623,inst_18624,inst_18625,state_val_18688,c__6202__auto___18736){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,inst_18616,inst_18617,inst_18618,inst_18619,inst_18620,inst_18621,inst_18622,inst_18623,inst_18624,inst_18625,state_val_18688,c__6202__auto___18736))
})();var inst_18627 = [inst_18625,inst_18626];var inst_18628 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18627,null));var inst_18629 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_18630 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18629,null));var inst_18631 = (function (){return ((function (inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,inst_18616,inst_18617,inst_18618,inst_18619,inst_18620,inst_18621,inst_18622,inst_18623,inst_18624,inst_18625,inst_18626,inst_18627,inst_18628,inst_18629,inst_18630,state_val_18688,c__6202__auto___18736){
return (function (life,v){return life;
});
;})(inst_18541,inst_18542,inst_18543,inst_18544,inst_18545,inst_18546,inst_18547,inst_18548,inst_18549,inst_18550,inst_18551,inst_18552,inst_18553,inst_18554,inst_18555,inst_18556,inst_18557,inst_18558,inst_18559,inst_18560,inst_18561,inst_18562,inst_18563,inst_18564,inst_18565,inst_18566,inst_18567,inst_18568,inst_18569,inst_18570,inst_18571,inst_18572,inst_18573,inst_18574,inst_18575,inst_18576,inst_18577,inst_18578,inst_18579,inst_18580,inst_18581,inst_18582,inst_18583,inst_18584,inst_18585,inst_18586,inst_18587,inst_18588,inst_18589,inst_18590,inst_18591,inst_18592,inst_18593,inst_18594,inst_18595,inst_18596,inst_18597,inst_18598,inst_18599,inst_18600,inst_18601,inst_18602,inst_18603,inst_18604,inst_18605,inst_18606,inst_18607,inst_18608,inst_18609,inst_18610,inst_18611,inst_18612,inst_18613,inst_18614,inst_18615,inst_18616,inst_18617,inst_18618,inst_18619,inst_18620,inst_18621,inst_18622,inst_18623,inst_18624,inst_18625,inst_18626,inst_18627,inst_18628,inst_18629,inst_18630,state_val_18688,c__6202__auto___18736))
})();var inst_18632 = [inst_18630,inst_18631];var inst_18633 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18632,null));var inst_18634 = [inst_18578,inst_18583,inst_18588,inst_18593,inst_18598,inst_18603,inst_18608,inst_18613,inst_18618,inst_18623,inst_18628,inst_18633];var inst_18635 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18634,null));var inst_18636 = [(2),inst_18573,inst_18635];var inst_18637 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18550,inst_18636);var inst_18638 = [inst_18637];var inst_18639 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18638,null));var inst_18640 = [(1),0.1,-1.57,1.57,(50),inst_18639];var inst_18641 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18549,inst_18640);var inst_18642 = [(-1),inst_18544,inst_18546,inst_18548,inst_18641];var inst_18643 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18542,inst_18642);var inst_18644 = tool.particle.particle.call(null,inst_18643);var inst_18645 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_18644);var inst_18646 = [(0),inst_18645];var inst_18647 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18541,inst_18646);var inst_18648 = inst_18647;var state_18687__$1 = (function (){var statearr_18691 = state_18687;(statearr_18691[(7)] = inst_18648);
return statearr_18691;
})();var statearr_18692_18738 = state_18687__$1;(statearr_18692_18738[(2)] = null);
(statearr_18692_18738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (4)))
{var inst_18656 = (state_18687[(8)]);var inst_18654 = (state_18687[(2)]);var inst_18655 = cljs.core.nth.call(null,inst_18654,(0),null);var inst_18656__$1 = cljs.core.nth.call(null,inst_18654,(1),null);var inst_18660 = cljs.core._EQ_.call(null,app.react.onTick,inst_18656__$1);var state_18687__$1 = (function (){var statearr_18693 = state_18687;(statearr_18693[(9)] = inst_18655);
(statearr_18693[(8)] = inst_18656__$1);
return statearr_18693;
})();if(inst_18660)
{var statearr_18694_18739 = state_18687__$1;(statearr_18694_18739[(1)] = (5));
} else
{var statearr_18695_18740 = state_18687__$1;(statearr_18695_18740[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (6)))
{var inst_18656 = (state_18687[(8)]);var inst_18670 = cljs.core._EQ_.call(null,app.react.onImage,inst_18656);var state_18687__$1 = state_18687;if(inst_18670)
{var statearr_18696_18741 = state_18687__$1;(statearr_18696_18741[(1)] = (8));
} else
{var statearr_18697_18742 = state_18687__$1;(statearr_18697_18742[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (3)))
{var inst_18685 = (state_18687[(2)]);var state_18687__$1 = state_18687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18687__$1,inst_18685);
} else
{if((state_val_18688 === (2)))
{var inst_18651 = [app.react.onTick,app.react.onImage];var inst_18652 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18651,null));var state_18687__$1 = state_18687;return cljs.core.async.ioc_alts_BANG_.call(null,state_18687__$1,(4),inst_18652);
} else
{if((state_val_18688 === (9)))
{var inst_18648 = (state_18687[(7)]);var state_18687__$1 = state_18687;var statearr_18698_18743 = state_18687__$1;(statearr_18698_18743[(2)] = inst_18648);
(statearr_18698_18743[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (5)))
{var inst_18655 = (state_18687[(9)]);var inst_18648 = (state_18687[(7)]);var inst_18662 = $("#canvas");var inst_18663 = tool.particle.update.call(null,inst_18655,inst_18648);var inst_18664 = app.main.draw.call(null,inst_18662,inst_18663);var inst_18665 = app.main.draw3D.call(null,inst_18664);var inst_18666 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_18667 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18666,null));var inst_18668 = cljs.core.update_in.call(null,inst_18665,inst_18667,cljs.core._PLUS_,inst_18655);var state_18687__$1 = state_18687;var statearr_18699_18744 = state_18687__$1;(statearr_18699_18744[(2)] = inst_18668);
(statearr_18699_18744[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (10)))
{var inst_18680 = (state_18687[(2)]);var state_18687__$1 = state_18687;var statearr_18700_18745 = state_18687__$1;(statearr_18700_18745[(2)] = inst_18680);
(statearr_18700_18745[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18688 === (8)))
{var inst_18655 = (state_18687[(9)]);var inst_18648 = (state_18687[(7)]);var inst_18673 = cljs.core.nth.call(null,inst_18655,(0),null);var inst_18674 = cljs.core.nth.call(null,inst_18655,(1),null);var inst_18675 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_18673];var inst_18676 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18675,null));var inst_18677 = cljs.core.assoc_in.call(null,inst_18648,inst_18676,inst_18674);var state_18687__$1 = state_18687;var statearr_18701_18746 = state_18687__$1;(statearr_18701_18746[(2)] = inst_18677);
(statearr_18701_18746[(1)] = (10));
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
});})(c__6202__auto___18736))
;return ((function (switch__6187__auto__,c__6202__auto___18736){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18705 = [null,null,null,null,null,null,null,null,null,null];(statearr_18705[(0)] = state_machine__6188__auto__);
(statearr_18705[(1)] = (1));
return statearr_18705;
});
var state_machine__6188__auto____1 = (function (state_18687){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18706){if((e18706 instanceof Object))
{var ex__6191__auto__ = e18706;var statearr_18707_18747 = state_18687;(statearr_18707_18747[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18748 = state_18687;
state_18687 = G__18748;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18687){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___18736))
})();var state__6204__auto__ = (function (){var statearr_18708 = f__6203__auto__.call(null);(statearr_18708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___18736);
return statearr_18708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___18736))
);
var face_18749 = (new Image());face_18749.src = "res/images/m_gr.jpg";
face_18749.onload = ((function (face_18749){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,face_18749){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,face_18749){
return (function (state_18714){var state_val_18715 = (state_18714[(1)]);if((state_val_18715 === (2)))
{var inst_18712 = (state_18714[(2)]);var state_18714__$1 = state_18714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18714__$1,inst_18712);
} else
{if((state_val_18715 === (1)))
{var inst_18709 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_18749];var inst_18710 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18709,null));var state_18714__$1 = state_18714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18714__$1,(2),app.react.onImage,inst_18710);
} else
{return null;
}
}
});})(c__6202__auto__,face_18749))
;return ((function (switch__6187__auto__,c__6202__auto__,face_18749){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18719 = [null,null,null,null,null,null,null];(statearr_18719[(0)] = state_machine__6188__auto__);
(statearr_18719[(1)] = (1));
return statearr_18719;
});
var state_machine__6188__auto____1 = (function (state_18714){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18720){if((e18720 instanceof Object))
{var ex__6191__auto__ = e18720;var statearr_18721_18750 = state_18714;(statearr_18721_18750[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18751 = state_18714;
state_18714 = G__18751;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18714){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,face_18749))
})();var state__6204__auto__ = (function (){var statearr_18722 = f__6203__auto__.call(null);(statearr_18722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_18722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,face_18749))
);
return c__6202__auto__;
});})(face_18749))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6202__auto___18752 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___18752,curr_time__$1,elapsed,last_time){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___18752,curr_time__$1,elapsed,last_time){
return (function (state_18727){var state_val_18728 = (state_18727[(1)]);if((state_val_18728 === (2)))
{var inst_18725 = (state_18727[(2)]);var state_18727__$1 = state_18727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18727__$1,inst_18725);
} else
{if((state_val_18728 === (1)))
{var inst_18723 = (elapsed / (1000));var state_18727__$1 = state_18727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18727__$1,(2),app.react.onTick,inst_18723);
} else
{return null;
}
}
});})(c__6202__auto___18752,curr_time__$1,elapsed,last_time))
;return ((function (switch__6187__auto__,c__6202__auto___18752,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18732 = [null,null,null,null,null,null,null];(statearr_18732[(0)] = state_machine__6188__auto__);
(statearr_18732[(1)] = (1));
return statearr_18732;
});
var state_machine__6188__auto____1 = (function (state_18727){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18733){if((e18733 instanceof Object))
{var ex__6191__auto__ = e18733;var statearr_18734_18753 = state_18727;(statearr_18734_18753[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18754 = state_18727;
state_18727 = G__18754;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18727){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___18752,curr_time__$1,elapsed,last_time))
})();var state__6204__auto__ = (function (){var statearr_18735 = f__6203__auto__.call(null);(statearr_18735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___18752);
return statearr_18735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___18752,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
