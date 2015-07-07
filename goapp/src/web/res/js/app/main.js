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
app.main.draw = (function draw(canvas,p__15176){var map__15193 = p__15176;var map__15193__$1 = ((cljs.core.seq_QMARK_.call(null,map__15193))?cljs.core.apply.call(null,cljs.core.hash_map,map__15193):map__15193);var ctx = map__15193__$1;var ps = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_15209 = (canvas[(0)]);var canvas_ctx_15210 = canvas_dom_15209.getContext("2d");var G__15194_15211 = canvas_ctx_15210;(G__15194_15211["fillStyle"] = "white");
G__15194_15211.fillRect((0),(0),canvas_dom_15209.width,canvas_dom_15209.height);
(G__15194_15211["fillStyle"] = "red");
G__15194_15211.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__15195_15212 = cljs.core.seq.call(null,ps);var chunk__15196_15213 = null;var count__15197_15214 = (0);var i__15198_15215 = (0);while(true){
if((i__15198_15215 < count__15197_15214))
{var map__15199_15216 = cljs.core._nth.call(null,chunk__15196_15213,i__15198_15215);var map__15199_15217__$1 = ((cljs.core.seq_QMARK_.call(null,map__15199_15216))?cljs.core.apply.call(null,cljs.core.hash_map,map__15199_15216):map__15199_15216);var p_15218 = map__15199_15217__$1;var vec__15200_15219 = cljs.core.get.call(null,map__15199_15217__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_15220 = cljs.core.nth.call(null,vec__15200_15219,(0),null);var y_15221 = cljs.core.nth.call(null,vec__15200_15219,(1),null);var r_15222 = cljs.core.nth.call(null,vec__15200_15219,(2),null);var vec__15201_15223 = cljs.core.get.call(null,map__15199_15217__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_15224 = cljs.core.nth.call(null,vec__15201_15223,(0),null);var ys_15225 = cljs.core.nth.call(null,vec__15201_15223,(1),null);var vec__15202_15226 = cljs.core.get.call(null,map__15199_15217__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_15227__$1 = cljs.core.nth.call(null,vec__15202_15226,(0),null);var g_15228 = cljs.core.nth.call(null,vec__15202_15226,(1),null);var b_15229 = cljs.core.nth.call(null,vec__15202_15226,(2),null);var a_15230 = cljs.core.nth.call(null,vec__15202_15226,(3),null);var G__15203_15231 = canvas_ctx_15210;(G__15203_15231["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_15227__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_15228 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_15229 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_15230)+")"));
G__15203_15231.fillRect(x_15220,y_15221,xs_15224,ys_15225);
{
var G__15232 = seq__15195_15212;
var G__15233 = chunk__15196_15213;
var G__15234 = count__15197_15214;
var G__15235 = (i__15198_15215 + (1));
seq__15195_15212 = G__15232;
chunk__15196_15213 = G__15233;
count__15197_15214 = G__15234;
i__15198_15215 = G__15235;
continue;
}
} else
{var temp__4126__auto___15236 = cljs.core.seq.call(null,seq__15195_15212);if(temp__4126__auto___15236)
{var seq__15195_15237__$1 = temp__4126__auto___15236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15195_15237__$1))
{var c__4307__auto___15238 = cljs.core.chunk_first.call(null,seq__15195_15237__$1);{
var G__15239 = cljs.core.chunk_rest.call(null,seq__15195_15237__$1);
var G__15240 = c__4307__auto___15238;
var G__15241 = cljs.core.count.call(null,c__4307__auto___15238);
var G__15242 = (0);
seq__15195_15212 = G__15239;
chunk__15196_15213 = G__15240;
count__15197_15214 = G__15241;
i__15198_15215 = G__15242;
continue;
}
} else
{var map__15204_15243 = cljs.core.first.call(null,seq__15195_15237__$1);var map__15204_15244__$1 = ((cljs.core.seq_QMARK_.call(null,map__15204_15243))?cljs.core.apply.call(null,cljs.core.hash_map,map__15204_15243):map__15204_15243);var p_15245 = map__15204_15244__$1;var vec__15205_15246 = cljs.core.get.call(null,map__15204_15244__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_15247 = cljs.core.nth.call(null,vec__15205_15246,(0),null);var y_15248 = cljs.core.nth.call(null,vec__15205_15246,(1),null);var r_15249 = cljs.core.nth.call(null,vec__15205_15246,(2),null);var vec__15206_15250 = cljs.core.get.call(null,map__15204_15244__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_15251 = cljs.core.nth.call(null,vec__15206_15250,(0),null);var ys_15252 = cljs.core.nth.call(null,vec__15206_15250,(1),null);var vec__15207_15253 = cljs.core.get.call(null,map__15204_15244__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_15254__$1 = cljs.core.nth.call(null,vec__15207_15253,(0),null);var g_15255 = cljs.core.nth.call(null,vec__15207_15253,(1),null);var b_15256 = cljs.core.nth.call(null,vec__15207_15253,(2),null);var a_15257 = cljs.core.nth.call(null,vec__15207_15253,(3),null);var G__15208_15258 = canvas_ctx_15210;(G__15208_15258["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_15254__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_15255 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_15256 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_15257)+")"));
G__15208_15258.fillRect(x_15247,y_15248,xs_15251,ys_15252);
{
var G__15259 = cljs.core.next.call(null,seq__15195_15237__$1);
var G__15260 = null;
var G__15261 = (0);
var G__15262 = (0);
seq__15195_15212 = G__15259;
chunk__15196_15213 = G__15260;
count__15197_15214 = G__15261;
i__15198_15215 = G__15262;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj15290 = {};return obj15290;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__15288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__15288,(0),null);var ch = cljs.core.nth.call(null,vec__15288,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15288,cw,ch){
return (function (p__15291){var map__15292 = p__15291;var map__15292__$1 = ((cljs.core.seq_QMARK_.call(null,map__15292))?cljs.core.apply.call(null,cljs.core.hash_map,map__15292):map__15292);var ctx = map__15292__$1;var timer = cljs.core.get.call(null,map__15292__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__15292__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__15292,map__15292__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15288,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__15292,map__15292__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15288,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___15313 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___15313 == null))
{} else
{var faceImg_15314 = temp__4130__auto___15313;var tex_15315 = app.main.cacheTex.call(null,gl__$1,faceImg_15314);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_15315,faceImg_15314,temp__4130__auto___15313,map__15292,map__15292__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15288,cw,ch){
return (function (pobj){var seq__15293 = cljs.core.seq.call(null,ps);var chunk__15294 = null;var count__15295 = (0);var i__15296 = (0);while(true){
if((i__15296 < count__15295))
{var map__15297 = cljs.core._nth.call(null,chunk__15294,i__15296);var map__15297__$1 = ((cljs.core.seq_QMARK_.call(null,map__15297))?cljs.core.apply.call(null,cljs.core.hash_map,map__15297):map__15297);var p = map__15297__$1;var vec__15298 = cljs.core.get.call(null,map__15297__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__15298,(0),null);var y = cljs.core.nth.call(null,vec__15298,(1),null);var rot = cljs.core.nth.call(null,vec__15298,(2),null);var vec__15299 = cljs.core.get.call(null,map__15297__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__15299,(0),null);var ys = cljs.core.nth.call(null,vec__15299,(1),null);var vec__15300 = cljs.core.get.call(null,map__15297__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__15300,(0),null);var g = cljs.core.nth.call(null,vec__15300,(1),null);var b = cljs.core.nth.call(null,vec__15300,(2),null);var a = cljs.core.nth.call(null,vec__15300,(3),null);var proj_15316 = (function (){var G__15301 = (new THREE.Matrix4());G__15301.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__15301;
})();var tras_15317 = (function (){var G__15302 = (new THREE.Matrix4());G__15302.makeTranslation(x,y,(0));
G__15302.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__15302.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__15302;
})();var texTx_15318 = (function (){var G__15303 = (new THREE.Matrix3());return G__15303;
})();var colorTx_15319 = (function (){var G__15304 = (new THREE.Matrix4());G__15304.makeTranslation(r,g,b);
return G__15304;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_15316.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_15317.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_15315,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_15318.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_15319.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__15320 = seq__15293;
var G__15321 = chunk__15294;
var G__15322 = count__15295;
var G__15323 = (i__15296 + (1));
seq__15293 = G__15320;
chunk__15294 = G__15321;
count__15295 = G__15322;
i__15296 = G__15323;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15293);if(temp__4126__auto__)
{var seq__15293__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15293__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15293__$1);{
var G__15324 = cljs.core.chunk_rest.call(null,seq__15293__$1);
var G__15325 = c__4307__auto__;
var G__15326 = cljs.core.count.call(null,c__4307__auto__);
var G__15327 = (0);
seq__15293 = G__15324;
chunk__15294 = G__15325;
count__15295 = G__15326;
i__15296 = G__15327;
continue;
}
} else
{var map__15305 = cljs.core.first.call(null,seq__15293__$1);var map__15305__$1 = ((cljs.core.seq_QMARK_.call(null,map__15305))?cljs.core.apply.call(null,cljs.core.hash_map,map__15305):map__15305);var p = map__15305__$1;var vec__15306 = cljs.core.get.call(null,map__15305__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__15306,(0),null);var y = cljs.core.nth.call(null,vec__15306,(1),null);var rot = cljs.core.nth.call(null,vec__15306,(2),null);var vec__15307 = cljs.core.get.call(null,map__15305__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__15307,(0),null);var ys = cljs.core.nth.call(null,vec__15307,(1),null);var vec__15308 = cljs.core.get.call(null,map__15305__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__15308,(0),null);var g = cljs.core.nth.call(null,vec__15308,(1),null);var b = cljs.core.nth.call(null,vec__15308,(2),null);var a = cljs.core.nth.call(null,vec__15308,(3),null);var proj_15328 = (function (){var G__15309 = (new THREE.Matrix4());G__15309.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__15309;
})();var tras_15329 = (function (){var G__15310 = (new THREE.Matrix4());G__15310.makeTranslation(x,y,(0));
G__15310.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__15310.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__15310;
})();var texTx_15330 = (function (){var G__15311 = (new THREE.Matrix3());return G__15311;
})();var colorTx_15331 = (function (){var G__15312 = (new THREE.Matrix4());G__15312.makeTranslation(r,g,b);
return G__15312;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_15328.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_15329.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_15315,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_15330.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_15331.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__15332 = cljs.core.next.call(null,seq__15293__$1);
var G__15333 = null;
var G__15334 = (0);
var G__15335 = (0);
seq__15293 = G__15332;
chunk__15294 = G__15333;
count__15295 = G__15334;
i__15296 = G__15335;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_15315,faceImg_15314,temp__4130__auto___15313,map__15292,map__15292__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15288,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15288,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6202__auto___15726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___15726){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___15726){
return (function (state_15677){var state_val_15678 = (state_15677[(1)]);if((state_val_15678 === (7)))
{var inst_15672 = (state_15677[(2)]);var inst_15638 = inst_15672;var state_15677__$1 = (function (){var statearr_15679 = state_15677;(statearr_15679[(7)] = inst_15638);
return statearr_15679;
})();var statearr_15680_15727 = state_15677__$1;(statearr_15680_15727[(2)] = null);
(statearr_15680_15727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (1)))
{var inst_15531 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_15532 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_15533 = [(250),(250),(0)];var inst_15534 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15533,null));var inst_15535 = [(0),(0),(0)];var inst_15536 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15535,null));var inst_15537 = [(0),(0)];var inst_15538 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15537,null));var inst_15539 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_15540 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_15541 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_15542 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_15543 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_15544 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_15545 = [0.5];var inst_15546 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15544,inst_15545);var inst_15547 = [inst_15546];var inst_15548 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15547,null));var inst_15549 = [(1),0.9,(1000),inst_15548];var inst_15550 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15543,inst_15549);var inst_15551 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_15552 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15551,null));var inst_15553 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,state_val_15678,c__6202__auto___15726){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,state_val_15678,c__6202__auto___15726))
})();var inst_15554 = [inst_15552,inst_15553];var inst_15555 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15554,null));var inst_15556 = [inst_15555];var inst_15557 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15556,null));var inst_15558 = [(1),inst_15550,inst_15557];var inst_15559 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15542,inst_15558);var inst_15560 = [inst_15559];var inst_15561 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15560,null));var inst_15562 = [(1),0.1,inst_15561];var inst_15563 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15541,inst_15562);var inst_15564 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_15565 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15564,null));var inst_15566 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,state_val_15678,c__6202__auto___15726){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,state_val_15678,c__6202__auto___15726))
})();var inst_15567 = [inst_15565,inst_15566];var inst_15568 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15567,null));var inst_15569 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_15570 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15569,null));var inst_15571 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,state_val_15678,c__6202__auto___15726){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,state_val_15678,c__6202__auto___15726))
})();var inst_15572 = [inst_15570,inst_15571];var inst_15573 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15572,null));var inst_15574 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_15575 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15574,null));var inst_15576 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,state_val_15678,c__6202__auto___15726){
return (function (life,v){return v;
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,state_val_15678,c__6202__auto___15726))
})();var inst_15577 = [inst_15575,inst_15576];var inst_15578 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15577,null));var inst_15579 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_15580 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15579,null));var inst_15581 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,state_val_15678,c__6202__auto___15726){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,state_val_15678,c__6202__auto___15726))
})();var inst_15582 = [inst_15580,inst_15581];var inst_15583 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15582,null));var inst_15584 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_15585 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15584,null));var inst_15586 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,state_val_15678,c__6202__auto___15726){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,state_val_15678,c__6202__auto___15726))
})();var inst_15587 = [inst_15585,inst_15586];var inst_15588 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15587,null));var inst_15589 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_15590 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15589,null));var inst_15591 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,state_val_15678,c__6202__auto___15726){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,state_val_15678,c__6202__auto___15726))
})();var inst_15592 = [inst_15590,inst_15591];var inst_15593 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15592,null));var inst_15594 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_15595 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15594,null));var inst_15596 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,state_val_15678,c__6202__auto___15726){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,state_val_15678,c__6202__auto___15726))
})();var inst_15597 = [inst_15595,inst_15596];var inst_15598 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15597,null));var inst_15599 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_15600 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15599,null));var inst_15601 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,state_val_15678,c__6202__auto___15726){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,state_val_15678,c__6202__auto___15726))
})();var inst_15602 = [inst_15600,inst_15601];var inst_15603 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15602,null));var inst_15604 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_15605 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15604,null));var inst_15606 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,state_val_15678,c__6202__auto___15726){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,state_val_15678,c__6202__auto___15726))
})();var inst_15607 = [inst_15605,inst_15606];var inst_15608 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15607,null));var inst_15609 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_15610 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15609,null));var inst_15611 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,inst_15606,inst_15607,inst_15608,inst_15609,inst_15610,state_val_15678,c__6202__auto___15726){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,inst_15606,inst_15607,inst_15608,inst_15609,inst_15610,state_val_15678,c__6202__auto___15726))
})();var inst_15612 = [inst_15610,inst_15611];var inst_15613 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15612,null));var inst_15614 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_15615 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15614,null));var inst_15616 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,inst_15606,inst_15607,inst_15608,inst_15609,inst_15610,inst_15611,inst_15612,inst_15613,inst_15614,inst_15615,state_val_15678,c__6202__auto___15726){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,inst_15606,inst_15607,inst_15608,inst_15609,inst_15610,inst_15611,inst_15612,inst_15613,inst_15614,inst_15615,state_val_15678,c__6202__auto___15726))
})();var inst_15617 = [inst_15615,inst_15616];var inst_15618 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15617,null));var inst_15619 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_15620 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15619,null));var inst_15621 = (function (){return ((function (inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,inst_15606,inst_15607,inst_15608,inst_15609,inst_15610,inst_15611,inst_15612,inst_15613,inst_15614,inst_15615,inst_15616,inst_15617,inst_15618,inst_15619,inst_15620,state_val_15678,c__6202__auto___15726){
return (function (life,v){return life;
});
;})(inst_15531,inst_15532,inst_15533,inst_15534,inst_15535,inst_15536,inst_15537,inst_15538,inst_15539,inst_15540,inst_15541,inst_15542,inst_15543,inst_15544,inst_15545,inst_15546,inst_15547,inst_15548,inst_15549,inst_15550,inst_15551,inst_15552,inst_15553,inst_15554,inst_15555,inst_15556,inst_15557,inst_15558,inst_15559,inst_15560,inst_15561,inst_15562,inst_15563,inst_15564,inst_15565,inst_15566,inst_15567,inst_15568,inst_15569,inst_15570,inst_15571,inst_15572,inst_15573,inst_15574,inst_15575,inst_15576,inst_15577,inst_15578,inst_15579,inst_15580,inst_15581,inst_15582,inst_15583,inst_15584,inst_15585,inst_15586,inst_15587,inst_15588,inst_15589,inst_15590,inst_15591,inst_15592,inst_15593,inst_15594,inst_15595,inst_15596,inst_15597,inst_15598,inst_15599,inst_15600,inst_15601,inst_15602,inst_15603,inst_15604,inst_15605,inst_15606,inst_15607,inst_15608,inst_15609,inst_15610,inst_15611,inst_15612,inst_15613,inst_15614,inst_15615,inst_15616,inst_15617,inst_15618,inst_15619,inst_15620,state_val_15678,c__6202__auto___15726))
})();var inst_15622 = [inst_15620,inst_15621];var inst_15623 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15622,null));var inst_15624 = [inst_15568,inst_15573,inst_15578,inst_15583,inst_15588,inst_15593,inst_15598,inst_15603,inst_15608,inst_15613,inst_15618,inst_15623];var inst_15625 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15624,null));var inst_15626 = [(2),inst_15563,inst_15625];var inst_15627 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15540,inst_15626);var inst_15628 = [inst_15627];var inst_15629 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15628,null));var inst_15630 = [(1),0.1,-1.57,1.57,(50),inst_15629];var inst_15631 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15539,inst_15630);var inst_15632 = [(-1),inst_15534,inst_15536,inst_15538,inst_15631];var inst_15633 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15532,inst_15632);var inst_15634 = app.particle.create.call(null,inst_15633);var inst_15635 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_15634);var inst_15636 = [(0),inst_15635];var inst_15637 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15531,inst_15636);var inst_15638 = inst_15637;var state_15677__$1 = (function (){var statearr_15681 = state_15677;(statearr_15681[(7)] = inst_15638);
return statearr_15681;
})();var statearr_15682_15728 = state_15677__$1;(statearr_15682_15728[(2)] = null);
(statearr_15682_15728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (4)))
{var inst_15646 = (state_15677[(8)]);var inst_15644 = (state_15677[(2)]);var inst_15645 = cljs.core.nth.call(null,inst_15644,(0),null);var inst_15646__$1 = cljs.core.nth.call(null,inst_15644,(1),null);var inst_15650 = cljs.core._EQ_.call(null,app.react.onTick,inst_15646__$1);var state_15677__$1 = (function (){var statearr_15683 = state_15677;(statearr_15683[(8)] = inst_15646__$1);
(statearr_15683[(9)] = inst_15645);
return statearr_15683;
})();if(inst_15650)
{var statearr_15684_15729 = state_15677__$1;(statearr_15684_15729[(1)] = (5));
} else
{var statearr_15685_15730 = state_15677__$1;(statearr_15685_15730[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (6)))
{var inst_15646 = (state_15677[(8)]);var inst_15660 = cljs.core._EQ_.call(null,app.react.onImage,inst_15646);var state_15677__$1 = state_15677;if(inst_15660)
{var statearr_15686_15731 = state_15677__$1;(statearr_15686_15731[(1)] = (8));
} else
{var statearr_15687_15732 = state_15677__$1;(statearr_15687_15732[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (3)))
{var inst_15675 = (state_15677[(2)]);var state_15677__$1 = state_15677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15677__$1,inst_15675);
} else
{if((state_val_15678 === (2)))
{var inst_15641 = [app.react.onTick,app.react.onImage];var inst_15642 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15641,null));var state_15677__$1 = state_15677;return cljs.core.async.ioc_alts_BANG_.call(null,state_15677__$1,(4),inst_15642);
} else
{if((state_val_15678 === (9)))
{var inst_15638 = (state_15677[(7)]);var state_15677__$1 = state_15677;var statearr_15688_15733 = state_15677__$1;(statearr_15688_15733[(2)] = inst_15638);
(statearr_15688_15733[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (5)))
{var inst_15645 = (state_15677[(9)]);var inst_15638 = (state_15677[(7)]);var inst_15652 = $("#canvas");var inst_15653 = app.particle.update.call(null,inst_15645,inst_15638);var inst_15654 = app.main.draw.call(null,inst_15652,inst_15653);var inst_15655 = app.main.draw3D.call(null,inst_15654);var inst_15656 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_15657 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15656,null));var inst_15658 = cljs.core.update_in.call(null,inst_15655,inst_15657,cljs.core._PLUS_,inst_15645);var state_15677__$1 = state_15677;var statearr_15689_15734 = state_15677__$1;(statearr_15689_15734[(2)] = inst_15658);
(statearr_15689_15734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (10)))
{var inst_15670 = (state_15677[(2)]);var state_15677__$1 = state_15677;var statearr_15690_15735 = state_15677__$1;(statearr_15690_15735[(2)] = inst_15670);
(statearr_15690_15735[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15678 === (8)))
{var inst_15645 = (state_15677[(9)]);var inst_15638 = (state_15677[(7)]);var inst_15663 = cljs.core.nth.call(null,inst_15645,(0),null);var inst_15664 = cljs.core.nth.call(null,inst_15645,(1),null);var inst_15665 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_15663];var inst_15666 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15665,null));var inst_15667 = cljs.core.assoc_in.call(null,inst_15638,inst_15666,inst_15664);var state_15677__$1 = state_15677;var statearr_15691_15736 = state_15677__$1;(statearr_15691_15736[(2)] = inst_15667);
(statearr_15691_15736[(1)] = (10));
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
});})(c__6202__auto___15726))
;return ((function (switch__6187__auto__,c__6202__auto___15726){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15695 = [null,null,null,null,null,null,null,null,null,null];(statearr_15695[(0)] = state_machine__6188__auto__);
(statearr_15695[(1)] = (1));
return statearr_15695;
});
var state_machine__6188__auto____1 = (function (state_15677){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15677);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15696){if((e15696 instanceof Object))
{var ex__6191__auto__ = e15696;var statearr_15697_15737 = state_15677;(statearr_15697_15737[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15677);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15696;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15738 = state_15677;
state_15677 = G__15738;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15677){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___15726))
})();var state__6204__auto__ = (function (){var statearr_15698 = f__6203__auto__.call(null);(statearr_15698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___15726);
return statearr_15698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___15726))
);
var face_15739 = (new Image());face_15739.src = "res/images/m_gr.jpg";
face_15739.onload = ((function (face_15739){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,face_15739){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,face_15739){
return (function (state_15704){var state_val_15705 = (state_15704[(1)]);if((state_val_15705 === (2)))
{var inst_15702 = (state_15704[(2)]);var state_15704__$1 = state_15704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15704__$1,inst_15702);
} else
{if((state_val_15705 === (1)))
{var inst_15699 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_15739];var inst_15700 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15699,null));var state_15704__$1 = state_15704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15704__$1,(2),app.react.onImage,inst_15700);
} else
{return null;
}
}
});})(c__6202__auto__,face_15739))
;return ((function (switch__6187__auto__,c__6202__auto__,face_15739){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15709 = [null,null,null,null,null,null,null];(statearr_15709[(0)] = state_machine__6188__auto__);
(statearr_15709[(1)] = (1));
return statearr_15709;
});
var state_machine__6188__auto____1 = (function (state_15704){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15704);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15710){if((e15710 instanceof Object))
{var ex__6191__auto__ = e15710;var statearr_15711_15740 = state_15704;(statearr_15711_15740[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15741 = state_15704;
state_15704 = G__15741;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15704){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,face_15739))
})();var state__6204__auto__ = (function (){var statearr_15712 = f__6203__auto__.call(null);(statearr_15712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,face_15739))
);
return c__6202__auto__;
});})(face_15739))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6202__auto___15742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___15742,curr_time__$1,elapsed,last_time){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___15742,curr_time__$1,elapsed,last_time){
return (function (state_15717){var state_val_15718 = (state_15717[(1)]);if((state_val_15718 === (2)))
{var inst_15715 = (state_15717[(2)]);var state_15717__$1 = state_15717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15717__$1,inst_15715);
} else
{if((state_val_15718 === (1)))
{var inst_15713 = (elapsed / (1000));var state_15717__$1 = state_15717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15717__$1,(2),app.react.onTick,inst_15713);
} else
{return null;
}
}
});})(c__6202__auto___15742,curr_time__$1,elapsed,last_time))
;return ((function (switch__6187__auto__,c__6202__auto___15742,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15722 = [null,null,null,null,null,null,null];(statearr_15722[(0)] = state_machine__6188__auto__);
(statearr_15722[(1)] = (1));
return statearr_15722;
});
var state_machine__6188__auto____1 = (function (state_15717){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15717);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15723){if((e15723 instanceof Object))
{var ex__6191__auto__ = e15723;var statearr_15724_15743 = state_15717;(statearr_15724_15743[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15744 = state_15717;
state_15717 = G__15744;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15717){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___15742,curr_time__$1,elapsed,last_time))
})();var state__6204__auto__ = (function (){var statearr_15725 = f__6203__auto__.call(null);(statearr_15725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___15742);
return statearr_15725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___15742,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
