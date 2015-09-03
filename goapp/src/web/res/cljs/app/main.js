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
app.main.draw = (function draw(canvas,p__38159){var map__38176 = p__38159;var map__38176__$1 = ((cljs.core.seq_QMARK_.call(null,map__38176))?cljs.core.apply.call(null,cljs.core.hash_map,map__38176):map__38176);var ctx = map__38176__$1;var ps = cljs.core.get.call(null,map__38176__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_38192 = (canvas[(0)]);var canvas_ctx_38193 = canvas_dom_38192.getContext("2d");var G__38177_38194 = canvas_ctx_38193;(G__38177_38194["fillStyle"] = "white");
G__38177_38194.fillRect((0),(0),canvas_dom_38192.width,canvas_dom_38192.height);
(G__38177_38194["fillStyle"] = "red");
G__38177_38194.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__38178_38195 = cljs.core.seq.call(null,ps);var chunk__38179_38196 = null;var count__38180_38197 = (0);var i__38181_38198 = (0);while(true){
if((i__38181_38198 < count__38180_38197))
{var map__38182_38199 = cljs.core._nth.call(null,chunk__38179_38196,i__38181_38198);var map__38182_38200__$1 = ((cljs.core.seq_QMARK_.call(null,map__38182_38199))?cljs.core.apply.call(null,cljs.core.hash_map,map__38182_38199):map__38182_38199);var p_38201 = map__38182_38200__$1;var vec__38183_38202 = cljs.core.get.call(null,map__38182_38200__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_38203 = cljs.core.nth.call(null,vec__38183_38202,(0),null);var y_38204 = cljs.core.nth.call(null,vec__38183_38202,(1),null);var r_38205 = cljs.core.nth.call(null,vec__38183_38202,(2),null);var vec__38184_38206 = cljs.core.get.call(null,map__38182_38200__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_38207 = cljs.core.nth.call(null,vec__38184_38206,(0),null);var ys_38208 = cljs.core.nth.call(null,vec__38184_38206,(1),null);var vec__38185_38209 = cljs.core.get.call(null,map__38182_38200__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_38210__$1 = cljs.core.nth.call(null,vec__38185_38209,(0),null);var g_38211 = cljs.core.nth.call(null,vec__38185_38209,(1),null);var b_38212 = cljs.core.nth.call(null,vec__38185_38209,(2),null);var a_38213 = cljs.core.nth.call(null,vec__38185_38209,(3),null);var G__38186_38214 = canvas_ctx_38193;(G__38186_38214["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_38210__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_38211 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_38212 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_38213)+")"));
G__38186_38214.fillRect(x_38203,y_38204,xs_38207,ys_38208);
{
var G__38215 = seq__38178_38195;
var G__38216 = chunk__38179_38196;
var G__38217 = count__38180_38197;
var G__38218 = (i__38181_38198 + (1));
seq__38178_38195 = G__38215;
chunk__38179_38196 = G__38216;
count__38180_38197 = G__38217;
i__38181_38198 = G__38218;
continue;
}
} else
{var temp__4126__auto___38219 = cljs.core.seq.call(null,seq__38178_38195);if(temp__4126__auto___38219)
{var seq__38178_38220__$1 = temp__4126__auto___38219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38178_38220__$1))
{var c__4307__auto___38221 = cljs.core.chunk_first.call(null,seq__38178_38220__$1);{
var G__38222 = cljs.core.chunk_rest.call(null,seq__38178_38220__$1);
var G__38223 = c__4307__auto___38221;
var G__38224 = cljs.core.count.call(null,c__4307__auto___38221);
var G__38225 = (0);
seq__38178_38195 = G__38222;
chunk__38179_38196 = G__38223;
count__38180_38197 = G__38224;
i__38181_38198 = G__38225;
continue;
}
} else
{var map__38187_38226 = cljs.core.first.call(null,seq__38178_38220__$1);var map__38187_38227__$1 = ((cljs.core.seq_QMARK_.call(null,map__38187_38226))?cljs.core.apply.call(null,cljs.core.hash_map,map__38187_38226):map__38187_38226);var p_38228 = map__38187_38227__$1;var vec__38188_38229 = cljs.core.get.call(null,map__38187_38227__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_38230 = cljs.core.nth.call(null,vec__38188_38229,(0),null);var y_38231 = cljs.core.nth.call(null,vec__38188_38229,(1),null);var r_38232 = cljs.core.nth.call(null,vec__38188_38229,(2),null);var vec__38189_38233 = cljs.core.get.call(null,map__38187_38227__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_38234 = cljs.core.nth.call(null,vec__38189_38233,(0),null);var ys_38235 = cljs.core.nth.call(null,vec__38189_38233,(1),null);var vec__38190_38236 = cljs.core.get.call(null,map__38187_38227__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_38237__$1 = cljs.core.nth.call(null,vec__38190_38236,(0),null);var g_38238 = cljs.core.nth.call(null,vec__38190_38236,(1),null);var b_38239 = cljs.core.nth.call(null,vec__38190_38236,(2),null);var a_38240 = cljs.core.nth.call(null,vec__38190_38236,(3),null);var G__38191_38241 = canvas_ctx_38193;(G__38191_38241["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_38237__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_38238 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_38239 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_38240)+")"));
G__38191_38241.fillRect(x_38230,y_38231,xs_38234,ys_38235);
{
var G__38242 = cljs.core.next.call(null,seq__38178_38220__$1);
var G__38243 = null;
var G__38244 = (0);
var G__38245 = (0);
seq__38178_38195 = G__38242;
chunk__38179_38196 = G__38243;
count__38180_38197 = G__38244;
i__38181_38198 = G__38245;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj38273 = {};return obj38273;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__38271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__38271,(0),null);var ch = cljs.core.nth.call(null,vec__38271,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__38271,cw,ch){
return (function (p__38274){var map__38275 = p__38274;var map__38275__$1 = ((cljs.core.seq_QMARK_.call(null,map__38275))?cljs.core.apply.call(null,cljs.core.hash_map,map__38275):map__38275);var ctx = map__38275__$1;var timer = cljs.core.get.call(null,map__38275__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__38275__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__38275,map__38275__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__38271,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__38275,map__38275__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__38271,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
var temp__4130__auto___38296 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___38296 == null))
{} else
{var faceImg_38297 = temp__4130__auto___38296;var tex_38298 = app.main.cacheTex.call(null,gl__$1,faceImg_38297);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_38298,faceImg_38297,temp__4130__auto___38296,map__38275,map__38275__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__38271,cw,ch){
return (function (pobj){var seq__38276 = cljs.core.seq.call(null,ps);var chunk__38277 = null;var count__38278 = (0);var i__38279 = (0);while(true){
if((i__38279 < count__38278))
{var map__38280 = cljs.core._nth.call(null,chunk__38277,i__38279);var map__38280__$1 = ((cljs.core.seq_QMARK_.call(null,map__38280))?cljs.core.apply.call(null,cljs.core.hash_map,map__38280):map__38280);var p = map__38280__$1;var vec__38281 = cljs.core.get.call(null,map__38280__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__38281,(0),null);var y = cljs.core.nth.call(null,vec__38281,(1),null);var rot = cljs.core.nth.call(null,vec__38281,(2),null);var vec__38282 = cljs.core.get.call(null,map__38280__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__38282,(0),null);var ys = cljs.core.nth.call(null,vec__38282,(1),null);var vec__38283 = cljs.core.get.call(null,map__38280__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__38283,(0),null);var g = cljs.core.nth.call(null,vec__38283,(1),null);var b = cljs.core.nth.call(null,vec__38283,(2),null);var a = cljs.core.nth.call(null,vec__38283,(3),null);var proj_38299 = (function (){var G__38284 = (new THREE.Matrix4());G__38284.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__38284;
})();var tras_38300 = (function (){var G__38285 = (new THREE.Matrix4());G__38285.makeTranslation(x,y,(0));
G__38285.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__38285.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__38285;
})();var texTx_38301 = (function (){var G__38286 = (new THREE.Matrix3());return G__38286;
})();var colorTx_38302 = (function (){var G__38287 = (new THREE.Matrix4());G__38287.makeTranslation(r,g,b);
return G__38287;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_38299.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_38300.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_38298,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_38301.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_38302.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__38303 = seq__38276;
var G__38304 = chunk__38277;
var G__38305 = count__38278;
var G__38306 = (i__38279 + (1));
seq__38276 = G__38303;
chunk__38277 = G__38304;
count__38278 = G__38305;
i__38279 = G__38306;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38276);if(temp__4126__auto__)
{var seq__38276__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38276__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38276__$1);{
var G__38307 = cljs.core.chunk_rest.call(null,seq__38276__$1);
var G__38308 = c__4307__auto__;
var G__38309 = cljs.core.count.call(null,c__4307__auto__);
var G__38310 = (0);
seq__38276 = G__38307;
chunk__38277 = G__38308;
count__38278 = G__38309;
i__38279 = G__38310;
continue;
}
} else
{var map__38288 = cljs.core.first.call(null,seq__38276__$1);var map__38288__$1 = ((cljs.core.seq_QMARK_.call(null,map__38288))?cljs.core.apply.call(null,cljs.core.hash_map,map__38288):map__38288);var p = map__38288__$1;var vec__38289 = cljs.core.get.call(null,map__38288__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__38289,(0),null);var y = cljs.core.nth.call(null,vec__38289,(1),null);var rot = cljs.core.nth.call(null,vec__38289,(2),null);var vec__38290 = cljs.core.get.call(null,map__38288__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__38290,(0),null);var ys = cljs.core.nth.call(null,vec__38290,(1),null);var vec__38291 = cljs.core.get.call(null,map__38288__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__38291,(0),null);var g = cljs.core.nth.call(null,vec__38291,(1),null);var b = cljs.core.nth.call(null,vec__38291,(2),null);var a = cljs.core.nth.call(null,vec__38291,(3),null);var proj_38311 = (function (){var G__38292 = (new THREE.Matrix4());G__38292.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__38292;
})();var tras_38312 = (function (){var G__38293 = (new THREE.Matrix4());G__38293.makeTranslation(x,y,(0));
G__38293.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__38293.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__38293;
})();var texTx_38313 = (function (){var G__38294 = (new THREE.Matrix3());return G__38294;
})();var colorTx_38314 = (function (){var G__38295 = (new THREE.Matrix4());G__38295.makeTranslation(r,g,b);
return G__38295;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_38311.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_38312.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_38298,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_38313.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_38314.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__38315 = cljs.core.next.call(null,seq__38276__$1);
var G__38316 = null;
var G__38317 = (0);
var G__38318 = (0);
seq__38276 = G__38315;
chunk__38277 = G__38316;
count__38278 = G__38317;
i__38279 = G__38318;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_38298,faceImg_38297,temp__4130__auto___38296,map__38275,map__38275__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__38271,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__38271,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6202__auto___38709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___38709){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___38709){
return (function (state_38660){var state_val_38661 = (state_38660[(1)]);if((state_val_38661 === (7)))
{var inst_38655 = (state_38660[(2)]);var inst_38621 = inst_38655;var state_38660__$1 = (function (){var statearr_38662 = state_38660;(statearr_38662[(7)] = inst_38621);
return statearr_38662;
})();var statearr_38663_38710 = state_38660__$1;(statearr_38663_38710[(2)] = null);
(statearr_38663_38710[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (1)))
{var inst_38514 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_38515 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_38516 = [(250),(250),(0)];var inst_38517 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38516,null));var inst_38518 = [(0),(0),(0)];var inst_38519 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38518,null));var inst_38520 = [(0),(0)];var inst_38521 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38520,null));var inst_38522 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_38523 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_38524 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_38525 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_38526 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_38527 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_38528 = [0.5];var inst_38529 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38527,inst_38528);var inst_38530 = [inst_38529];var inst_38531 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38530,null));var inst_38532 = [(1),0.9,(1000),inst_38531];var inst_38533 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38526,inst_38532);var inst_38534 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_38535 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38534,null));var inst_38536 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,state_val_38661,c__6202__auto___38709){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,state_val_38661,c__6202__auto___38709))
})();var inst_38537 = [inst_38535,inst_38536];var inst_38538 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38537,null));var inst_38539 = [inst_38538];var inst_38540 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38539,null));var inst_38541 = [(1),inst_38533,inst_38540];var inst_38542 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38525,inst_38541);var inst_38543 = [inst_38542];var inst_38544 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38543,null));var inst_38545 = [(1),0.1,inst_38544];var inst_38546 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38524,inst_38545);var inst_38547 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_38548 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38547,null));var inst_38549 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,state_val_38661,c__6202__auto___38709){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,state_val_38661,c__6202__auto___38709))
})();var inst_38550 = [inst_38548,inst_38549];var inst_38551 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38550,null));var inst_38552 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_38553 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38552,null));var inst_38554 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,state_val_38661,c__6202__auto___38709){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,state_val_38661,c__6202__auto___38709))
})();var inst_38555 = [inst_38553,inst_38554];var inst_38556 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38555,null));var inst_38557 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_38558 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38557,null));var inst_38559 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,state_val_38661,c__6202__auto___38709){
return (function (life,v){return v;
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,state_val_38661,c__6202__auto___38709))
})();var inst_38560 = [inst_38558,inst_38559];var inst_38561 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38560,null));var inst_38562 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_38563 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38562,null));var inst_38564 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,state_val_38661,c__6202__auto___38709){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,state_val_38661,c__6202__auto___38709))
})();var inst_38565 = [inst_38563,inst_38564];var inst_38566 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38565,null));var inst_38567 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_38568 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38567,null));var inst_38569 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,state_val_38661,c__6202__auto___38709){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,state_val_38661,c__6202__auto___38709))
})();var inst_38570 = [inst_38568,inst_38569];var inst_38571 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38570,null));var inst_38572 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_38573 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38572,null));var inst_38574 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,state_val_38661,c__6202__auto___38709){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,state_val_38661,c__6202__auto___38709))
})();var inst_38575 = [inst_38573,inst_38574];var inst_38576 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38575,null));var inst_38577 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_38578 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38577,null));var inst_38579 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,state_val_38661,c__6202__auto___38709){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,state_val_38661,c__6202__auto___38709))
})();var inst_38580 = [inst_38578,inst_38579];var inst_38581 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38580,null));var inst_38582 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_38583 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38582,null));var inst_38584 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,state_val_38661,c__6202__auto___38709){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,state_val_38661,c__6202__auto___38709))
})();var inst_38585 = [inst_38583,inst_38584];var inst_38586 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38585,null));var inst_38587 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_38588 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38587,null));var inst_38589 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,state_val_38661,c__6202__auto___38709){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,state_val_38661,c__6202__auto___38709))
})();var inst_38590 = [inst_38588,inst_38589];var inst_38591 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38590,null));var inst_38592 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_38593 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38592,null));var inst_38594 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,inst_38589,inst_38590,inst_38591,inst_38592,inst_38593,state_val_38661,c__6202__auto___38709){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,inst_38589,inst_38590,inst_38591,inst_38592,inst_38593,state_val_38661,c__6202__auto___38709))
})();var inst_38595 = [inst_38593,inst_38594];var inst_38596 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38595,null));var inst_38597 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_38598 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38597,null));var inst_38599 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,inst_38589,inst_38590,inst_38591,inst_38592,inst_38593,inst_38594,inst_38595,inst_38596,inst_38597,inst_38598,state_val_38661,c__6202__auto___38709){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,inst_38589,inst_38590,inst_38591,inst_38592,inst_38593,inst_38594,inst_38595,inst_38596,inst_38597,inst_38598,state_val_38661,c__6202__auto___38709))
})();var inst_38600 = [inst_38598,inst_38599];var inst_38601 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38600,null));var inst_38602 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_38603 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38602,null));var inst_38604 = (function (){return ((function (inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,inst_38589,inst_38590,inst_38591,inst_38592,inst_38593,inst_38594,inst_38595,inst_38596,inst_38597,inst_38598,inst_38599,inst_38600,inst_38601,inst_38602,inst_38603,state_val_38661,c__6202__auto___38709){
return (function (life,v){return life;
});
;})(inst_38514,inst_38515,inst_38516,inst_38517,inst_38518,inst_38519,inst_38520,inst_38521,inst_38522,inst_38523,inst_38524,inst_38525,inst_38526,inst_38527,inst_38528,inst_38529,inst_38530,inst_38531,inst_38532,inst_38533,inst_38534,inst_38535,inst_38536,inst_38537,inst_38538,inst_38539,inst_38540,inst_38541,inst_38542,inst_38543,inst_38544,inst_38545,inst_38546,inst_38547,inst_38548,inst_38549,inst_38550,inst_38551,inst_38552,inst_38553,inst_38554,inst_38555,inst_38556,inst_38557,inst_38558,inst_38559,inst_38560,inst_38561,inst_38562,inst_38563,inst_38564,inst_38565,inst_38566,inst_38567,inst_38568,inst_38569,inst_38570,inst_38571,inst_38572,inst_38573,inst_38574,inst_38575,inst_38576,inst_38577,inst_38578,inst_38579,inst_38580,inst_38581,inst_38582,inst_38583,inst_38584,inst_38585,inst_38586,inst_38587,inst_38588,inst_38589,inst_38590,inst_38591,inst_38592,inst_38593,inst_38594,inst_38595,inst_38596,inst_38597,inst_38598,inst_38599,inst_38600,inst_38601,inst_38602,inst_38603,state_val_38661,c__6202__auto___38709))
})();var inst_38605 = [inst_38603,inst_38604];var inst_38606 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38605,null));var inst_38607 = [inst_38551,inst_38556,inst_38561,inst_38566,inst_38571,inst_38576,inst_38581,inst_38586,inst_38591,inst_38596,inst_38601,inst_38606];var inst_38608 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38607,null));var inst_38609 = [(2),inst_38546,inst_38608];var inst_38610 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38523,inst_38609);var inst_38611 = [inst_38610];var inst_38612 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38611,null));var inst_38613 = [(1),0.1,-1.57,1.57,(50),inst_38612];var inst_38614 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38522,inst_38613);var inst_38615 = [(-1),inst_38517,inst_38519,inst_38521,inst_38614];var inst_38616 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38515,inst_38615);var inst_38617 = tool.particle.particle.call(null,inst_38616);var inst_38618 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_38617);var inst_38619 = [(0),inst_38618];var inst_38620 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_38514,inst_38619);var inst_38621 = inst_38620;var state_38660__$1 = (function (){var statearr_38664 = state_38660;(statearr_38664[(7)] = inst_38621);
return statearr_38664;
})();var statearr_38665_38711 = state_38660__$1;(statearr_38665_38711[(2)] = null);
(statearr_38665_38711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (4)))
{var inst_38629 = (state_38660[(8)]);var inst_38627 = (state_38660[(2)]);var inst_38628 = cljs.core.nth.call(null,inst_38627,(0),null);var inst_38629__$1 = cljs.core.nth.call(null,inst_38627,(1),null);var inst_38633 = cljs.core._EQ_.call(null,app.react.onTick,inst_38629__$1);var state_38660__$1 = (function (){var statearr_38666 = state_38660;(statearr_38666[(9)] = inst_38628);
(statearr_38666[(8)] = inst_38629__$1);
return statearr_38666;
})();if(inst_38633)
{var statearr_38667_38712 = state_38660__$1;(statearr_38667_38712[(1)] = (5));
} else
{var statearr_38668_38713 = state_38660__$1;(statearr_38668_38713[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (6)))
{var inst_38629 = (state_38660[(8)]);var inst_38643 = cljs.core._EQ_.call(null,app.react.onImage,inst_38629);var state_38660__$1 = state_38660;if(inst_38643)
{var statearr_38669_38714 = state_38660__$1;(statearr_38669_38714[(1)] = (8));
} else
{var statearr_38670_38715 = state_38660__$1;(statearr_38670_38715[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (3)))
{var inst_38658 = (state_38660[(2)]);var state_38660__$1 = state_38660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38660__$1,inst_38658);
} else
{if((state_val_38661 === (2)))
{var inst_38624 = [app.react.onTick,app.react.onImage];var inst_38625 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38624,null));var state_38660__$1 = state_38660;return cljs.core.async.ioc_alts_BANG_.call(null,state_38660__$1,(4),inst_38625);
} else
{if((state_val_38661 === (9)))
{var inst_38621 = (state_38660[(7)]);var state_38660__$1 = state_38660;var statearr_38671_38716 = state_38660__$1;(statearr_38671_38716[(2)] = inst_38621);
(statearr_38671_38716[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (5)))
{var inst_38628 = (state_38660[(9)]);var inst_38621 = (state_38660[(7)]);var inst_38635 = $("#canvas");var inst_38636 = tool.particle.update.call(null,inst_38628,inst_38621);var inst_38637 = app.main.draw.call(null,inst_38635,inst_38636);var inst_38638 = app.main.draw3D.call(null,inst_38637);var inst_38639 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_38640 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38639,null));var inst_38641 = cljs.core.update_in.call(null,inst_38638,inst_38640,cljs.core._PLUS_,inst_38628);var state_38660__$1 = state_38660;var statearr_38672_38717 = state_38660__$1;(statearr_38672_38717[(2)] = inst_38641);
(statearr_38672_38717[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (10)))
{var inst_38653 = (state_38660[(2)]);var state_38660__$1 = state_38660;var statearr_38673_38718 = state_38660__$1;(statearr_38673_38718[(2)] = inst_38653);
(statearr_38673_38718[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38661 === (8)))
{var inst_38628 = (state_38660[(9)]);var inst_38621 = (state_38660[(7)]);var inst_38646 = cljs.core.nth.call(null,inst_38628,(0),null);var inst_38647 = cljs.core.nth.call(null,inst_38628,(1),null);var inst_38648 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_38646];var inst_38649 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38648,null));var inst_38650 = cljs.core.assoc_in.call(null,inst_38621,inst_38649,inst_38647);var state_38660__$1 = state_38660;var statearr_38674_38719 = state_38660__$1;(statearr_38674_38719[(2)] = inst_38650);
(statearr_38674_38719[(1)] = (10));
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
});})(c__6202__auto___38709))
;return ((function (switch__6187__auto__,c__6202__auto___38709){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38678 = [null,null,null,null,null,null,null,null,null,null];(statearr_38678[(0)] = state_machine__6188__auto__);
(statearr_38678[(1)] = (1));
return statearr_38678;
});
var state_machine__6188__auto____1 = (function (state_38660){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38679){if((e38679 instanceof Object))
{var ex__6191__auto__ = e38679;var statearr_38680_38720 = state_38660;(statearr_38680_38720[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38721 = state_38660;
state_38660 = G__38721;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38660){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___38709))
})();var state__6204__auto__ = (function (){var statearr_38681 = f__6203__auto__.call(null);(statearr_38681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___38709);
return statearr_38681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___38709))
);
var face_38722 = (new Image());face_38722.src = "res/images/m_gr.jpg";
face_38722.onload = ((function (face_38722){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,face_38722){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,face_38722){
return (function (state_38687){var state_val_38688 = (state_38687[(1)]);if((state_val_38688 === (2)))
{var inst_38685 = (state_38687[(2)]);var state_38687__$1 = state_38687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38687__$1,inst_38685);
} else
{if((state_val_38688 === (1)))
{var inst_38682 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_38722];var inst_38683 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38682,null));var state_38687__$1 = state_38687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38687__$1,(2),app.react.onImage,inst_38683);
} else
{return null;
}
}
});})(c__6202__auto__,face_38722))
;return ((function (switch__6187__auto__,c__6202__auto__,face_38722){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38692 = [null,null,null,null,null,null,null];(statearr_38692[(0)] = state_machine__6188__auto__);
(statearr_38692[(1)] = (1));
return statearr_38692;
});
var state_machine__6188__auto____1 = (function (state_38687){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38693){if((e38693 instanceof Object))
{var ex__6191__auto__ = e38693;var statearr_38694_38723 = state_38687;(statearr_38694_38723[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38724 = state_38687;
state_38687 = G__38724;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38687){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,face_38722))
})();var state__6204__auto__ = (function (){var statearr_38695 = f__6203__auto__.call(null);(statearr_38695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,face_38722))
);
return c__6202__auto__;
});})(face_38722))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6202__auto___38725 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___38725,curr_time__$1,elapsed,last_time){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___38725,curr_time__$1,elapsed,last_time){
return (function (state_38700){var state_val_38701 = (state_38700[(1)]);if((state_val_38701 === (2)))
{var inst_38698 = (state_38700[(2)]);var state_38700__$1 = state_38700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38700__$1,inst_38698);
} else
{if((state_val_38701 === (1)))
{var inst_38696 = (elapsed / (1000));var state_38700__$1 = state_38700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38700__$1,(2),app.react.onTick,inst_38696);
} else
{return null;
}
}
});})(c__6202__auto___38725,curr_time__$1,elapsed,last_time))
;return ((function (switch__6187__auto__,c__6202__auto___38725,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38705 = [null,null,null,null,null,null,null];(statearr_38705[(0)] = state_machine__6188__auto__);
(statearr_38705[(1)] = (1));
return statearr_38705;
});
var state_machine__6188__auto____1 = (function (state_38700){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38706){if((e38706 instanceof Object))
{var ex__6191__auto__ = e38706;var statearr_38707_38726 = state_38700;(statearr_38707_38726[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38700);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38727 = state_38700;
state_38700 = G__38727;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38700){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___38725,curr_time__$1,elapsed,last_time))
})();var state__6204__auto__ = (function (){var statearr_38708 = f__6203__auto__.call(null);(statearr_38708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___38725);
return statearr_38708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___38725,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
