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
app.particle.draw.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__20157){var map__20158 = p__20157;var map__20158__$1 = ((cljs.core.seq_QMARK_.call(null,map__20158))?cljs.core.apply.call(null,cljs.core.hash_map,map__20158):map__20158);var ctx = map__20158__$1;var map__20159 = cljs.core.get.call(null,map__20158__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__20159__$1 = ((cljs.core.seq_QMARK_.call(null,map__20159))?cljs.core.apply.call(null,cljs.core.hash_map,map__20159):map__20159);var ps = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__20160_20175 = canvas_ctx;(G__20160_20175["fillStyle"] = "white");
G__20160_20175.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__20160_20175["fillStyle"] = "red");
G__20160_20175.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__20161_20176 = cljs.core.seq.call(null,ps);var chunk__20162_20177 = null;var count__20163_20178 = (0);var i__20164_20179 = (0);while(true){
if((i__20164_20179 < count__20163_20178))
{var map__20165_20180 = cljs.core._nth.call(null,chunk__20162_20177,i__20164_20179);var map__20165_20181__$1 = ((cljs.core.seq_QMARK_.call(null,map__20165_20180))?cljs.core.apply.call(null,cljs.core.hash_map,map__20165_20180):map__20165_20180);var p_20182 = map__20165_20181__$1;var vec__20166_20183 = cljs.core.get.call(null,map__20165_20181__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_20184 = cljs.core.nth.call(null,vec__20166_20183,(0),null);var y_20185 = cljs.core.nth.call(null,vec__20166_20183,(1),null);var rot_20186 = cljs.core.nth.call(null,vec__20166_20183,(2),null);var vec__20167_20187 = cljs.core.get.call(null,map__20165_20181__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_20188 = cljs.core.nth.call(null,vec__20167_20187,(0),null);var ys_20189 = cljs.core.nth.call(null,vec__20167_20187,(1),null);var vec__20168_20190 = cljs.core.get.call(null,map__20165_20181__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_20191 = cljs.core.nth.call(null,vec__20168_20190,(0),null);var g_20192 = cljs.core.nth.call(null,vec__20168_20190,(1),null);var b_20193 = cljs.core.nth.call(null,vec__20168_20190,(2),null);var a_20194 = cljs.core.nth.call(null,vec__20168_20190,(3),null);var G__20169_20195 = canvas_ctx;G__20169_20195.save();
G__20169_20195.translate(x_20184,y_20185);
G__20169_20195.rotate(rot_20186);
(G__20169_20195["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_20191 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_20192 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_20193 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_20194)+")"));
G__20169_20195.fillRect((- (xs_20188 / (2))),(- (ys_20189 / (2))),xs_20188,ys_20189);
G__20169_20195.restore();
{
var G__20196 = seq__20161_20176;
var G__20197 = chunk__20162_20177;
var G__20198 = count__20163_20178;
var G__20199 = (i__20164_20179 + (1));
seq__20161_20176 = G__20196;
chunk__20162_20177 = G__20197;
count__20163_20178 = G__20198;
i__20164_20179 = G__20199;
continue;
}
} else
{var temp__4126__auto___20200 = cljs.core.seq.call(null,seq__20161_20176);if(temp__4126__auto___20200)
{var seq__20161_20201__$1 = temp__4126__auto___20200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20161_20201__$1))
{var c__4307__auto___20202 = cljs.core.chunk_first.call(null,seq__20161_20201__$1);{
var G__20203 = cljs.core.chunk_rest.call(null,seq__20161_20201__$1);
var G__20204 = c__4307__auto___20202;
var G__20205 = cljs.core.count.call(null,c__4307__auto___20202);
var G__20206 = (0);
seq__20161_20176 = G__20203;
chunk__20162_20177 = G__20204;
count__20163_20178 = G__20205;
i__20164_20179 = G__20206;
continue;
}
} else
{var map__20170_20207 = cljs.core.first.call(null,seq__20161_20201__$1);var map__20170_20208__$1 = ((cljs.core.seq_QMARK_.call(null,map__20170_20207))?cljs.core.apply.call(null,cljs.core.hash_map,map__20170_20207):map__20170_20207);var p_20209 = map__20170_20208__$1;var vec__20171_20210 = cljs.core.get.call(null,map__20170_20208__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_20211 = cljs.core.nth.call(null,vec__20171_20210,(0),null);var y_20212 = cljs.core.nth.call(null,vec__20171_20210,(1),null);var rot_20213 = cljs.core.nth.call(null,vec__20171_20210,(2),null);var vec__20172_20214 = cljs.core.get.call(null,map__20170_20208__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_20215 = cljs.core.nth.call(null,vec__20172_20214,(0),null);var ys_20216 = cljs.core.nth.call(null,vec__20172_20214,(1),null);var vec__20173_20217 = cljs.core.get.call(null,map__20170_20208__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_20218 = cljs.core.nth.call(null,vec__20173_20217,(0),null);var g_20219 = cljs.core.nth.call(null,vec__20173_20217,(1),null);var b_20220 = cljs.core.nth.call(null,vec__20173_20217,(2),null);var a_20221 = cljs.core.nth.call(null,vec__20173_20217,(3),null);var G__20174_20222 = canvas_ctx;G__20174_20222.save();
G__20174_20222.translate(x_20211,y_20212);
G__20174_20222.rotate(rot_20213);
(G__20174_20222["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_20218 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_20219 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_20220 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_20221)+")"));
G__20174_20222.fillRect((- (xs_20215 / (2))),(- (ys_20216 / (2))),xs_20215,ys_20216);
G__20174_20222.restore();
{
var G__20223 = cljs.core.next.call(null,seq__20161_20201__$1);
var G__20224 = null;
var G__20225 = (0);
var G__20226 = (0);
seq__20161_20176 = G__20223;
chunk__20162_20177 = G__20224;
count__20163_20178 = G__20225;
i__20164_20179 = G__20226;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__20262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__20262,(0),null);var ch = cljs.core.nth.call(null,vec__20262,(1),null);var proj = (function (){var G__20263 = (new THREE.Matrix4());G__20263.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__20263;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__20262,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__20264){var map__20265 = p__20264;var map__20265__$1 = ((cljs.core.seq_QMARK_.call(null,map__20265))?cljs.core.apply.call(null,cljs.core.hash_map,map__20265):map__20265);var ctx = map__20265__$1;var vec__20266 = cljs.core.get.call(null,map__20265__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__20266,(0),null);var cy = cljs.core.nth.call(null,vec__20266,(1),null);var vec__20267 = cljs.core.get.call(null,map__20265__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__20267,(0),null);var bg = cljs.core.nth.call(null,vec__20267,(1),null);var bb = cljs.core.nth.call(null,vec__20267,(2),null);var map__20268 = cljs.core.get.call(null,map__20265__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__20268__$1 = ((cljs.core.seq_QMARK_.call(null,map__20268))?cljs.core.apply.call(null,cljs.core.hash_map,map__20268):map__20268);var ps = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(function (){var or__3551__auto__ = bg;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(function (){var or__3551__auto__ = bb;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__20265,map__20265__$1,ctx,vec__20266,cx,cy,vec__20267,br,bg,bb,map__20268,map__20268__$1,ps,canvas_dom,mesh,sprite_shader,vec__20262,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__20269 = cljs.core.seq.call(null,ps);var chunk__20270 = null;var count__20271 = (0);var i__20272 = (0);while(true){
if((i__20272 < count__20271))
{var map__20273 = cljs.core._nth.call(null,chunk__20270,i__20272);var map__20273__$1 = ((cljs.core.seq_QMARK_.call(null,map__20273))?cljs.core.apply.call(null,cljs.core.hash_map,map__20273):map__20273);var p = map__20273__$1;var vec__20274 = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__20274,(0),null);var y = cljs.core.nth.call(null,vec__20274,(1),null);var rot = cljs.core.nth.call(null,vec__20274,(2),null);var vec__20275 = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__20275,(0),null);var ys = cljs.core.nth.call(null,vec__20275,(1),null);var vec__20276 = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__20276,(0),null);var g = cljs.core.nth.call(null,vec__20276,(1),null);var b = cljs.core.nth.call(null,vec__20276,(2),null);var a = cljs.core.nth.call(null,vec__20276,(3),null);var tex = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_20297 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__20277_20298 = rotMat;G__20277_20298.makeRotationZ(rot);
var G__20278_20299 = scaleMat;G__20278_20299.makeScale(xs,ys,(1));
var G__20279_20300 = tras;G__20279_20300.makeTranslation((cx + x),(cy + y),(0));
G__20279_20300.multiply(rotMat);
G__20279_20300.multiply(scaleMat);
var G__20280_20301 = colorTx;G__20280_20301.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__20281 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__20281__$1 = (cljs.core.truth_(texObj_20297)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_20297,(0)], null)], null),G__20281):G__20281);return G__20281__$1;
})());
if(cljs.core.truth_(texObj_20297))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__20282_20302 = cljs.core._EQ_;var expr__20283_20303 = blending;if(cljs.core.truth_(pred__20282_20302.call(null,"normal",expr__20283_20303)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__20282_20302.call(null,"add",expr__20283_20303)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__20304 = seq__20269;
var G__20305 = chunk__20270;
var G__20306 = count__20271;
var G__20307 = (i__20272 + (1));
seq__20269 = G__20304;
chunk__20270 = G__20305;
count__20271 = G__20306;
i__20272 = G__20307;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20269);if(temp__4126__auto__)
{var seq__20269__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20269__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__20269__$1);{
var G__20308 = cljs.core.chunk_rest.call(null,seq__20269__$1);
var G__20309 = c__4307__auto__;
var G__20310 = cljs.core.count.call(null,c__4307__auto__);
var G__20311 = (0);
seq__20269 = G__20308;
chunk__20270 = G__20309;
count__20271 = G__20310;
i__20272 = G__20311;
continue;
}
} else
{var map__20285 = cljs.core.first.call(null,seq__20269__$1);var map__20285__$1 = ((cljs.core.seq_QMARK_.call(null,map__20285))?cljs.core.apply.call(null,cljs.core.hash_map,map__20285):map__20285);var p = map__20285__$1;var vec__20286 = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__20286,(0),null);var y = cljs.core.nth.call(null,vec__20286,(1),null);var rot = cljs.core.nth.call(null,vec__20286,(2),null);var vec__20287 = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__20287,(0),null);var ys = cljs.core.nth.call(null,vec__20287,(1),null);var vec__20288 = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__20288,(0),null);var g = cljs.core.nth.call(null,vec__20288,(1),null);var b = cljs.core.nth.call(null,vec__20288,(2),null);var a = cljs.core.nth.call(null,vec__20288,(3),null);var tex = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_20312 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__20289_20313 = rotMat;G__20289_20313.makeRotationZ(rot);
var G__20290_20314 = scaleMat;G__20290_20314.makeScale(xs,ys,(1));
var G__20291_20315 = tras;G__20291_20315.makeTranslation((cx + x),(cy + y),(0));
G__20291_20315.multiply(rotMat);
G__20291_20315.multiply(scaleMat);
var G__20292_20316 = colorTx;G__20292_20316.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__20293 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__20293__$1 = (cljs.core.truth_(texObj_20312)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_20312,(0)], null)], null),G__20293):G__20293);return G__20293__$1;
})());
if(cljs.core.truth_(texObj_20312))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__20294_20317 = cljs.core._EQ_;var expr__20295_20318 = blending;if(cljs.core.truth_(pred__20294_20317.call(null,"normal",expr__20295_20318)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__20294_20317.call(null,"add",expr__20295_20318)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__20319 = cljs.core.next.call(null,seq__20269__$1);
var G__20320 = null;
var G__20321 = (0);
var G__20322 = (0);
seq__20269 = G__20319;
chunk__20270 = G__20320;
count__20271 = G__20321;
i__20272 = G__20322;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__20265,map__20265__$1,ctx,vec__20266,cx,cy,vec__20267,br,bg,bb,map__20268,map__20268__$1,ps,canvas_dom,mesh,sprite_shader,vec__20262,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__20262,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
app.particle.draw.drawThree = (function drawThree(elem){var useWebgl_QMARK_ = true;var vec__20334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null);var w = cljs.core.nth.call(null,vec__20334,(0),null);var h = cljs.core.nth.call(null,vec__20334,(1),null);var scene = (new THREE.Scene());var camera = THREE.OrthographicCamera((w / (-2)),(w / (2)),(h / (2)),(h / (-2)),(-500),(1000));var renderer = ((useWebgl_QMARK_)?(new THREE.WebGLRenderer((function (){var obj20336 = {"antialias":true};return obj20336;
})())):(new THREE.CanvasRenderer((function (){var obj20338 = {"antialias":true};return obj20338;
})())));var objs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var dirtyTag = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var createObject = ((function (useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag){
return (function (scene__$1,id,part){var obj = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);if(cljs.core.not.call(null,obj))
{var mat = (function (){var G__20339 = (new THREE.MeshBasicMaterial());(G__20339["transparent"] = true);
return G__20339;
})();var mash = THREE.Mesh((new THREE.PlaneBufferGeometry((1),(1))),mat);cljs.core.swap_BANG_.call(null,objs,cljs.core.assoc,id,obj);
return scene__$1.add(obj);
} else
{return obj;
}
});})(useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag))
;var removeObject = ((function (useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject){
return (function (id){var temp__4124__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);if(cljs.core.truth_(temp__4124__auto__))
{var obj = temp__4124__auto__;return scene.remove(obj);
} else
{return null;
}
});})(useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject))
;var markDirty = ((function (useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject){
return (function (id){return cljs.core.swap_BANG_.call(null,dirtyTag,cljs.core.assoc,id,false);
});})(useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject))
;var clearDirtyTag = ((function (useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty){
return (function (f){return null;
});})(useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty))
;camera.position.set((0),(0),(200));
renderer.setSize(w,h);
renderer.setClearColor((0),(1));
$(renderer.domElement).appendTo(elem);
return ((function (useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag){
return (function (p__20340){var map__20341 = p__20340;var map__20341__$1 = ((cljs.core.seq_QMARK_.call(null,map__20341))?cljs.core.apply.call(null,cljs.core.hash_map,map__20341):map__20341);var ctx = map__20341__$1;var vec__20342 = cljs.core.get.call(null,map__20341__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__20342,(0),null);var cy = cljs.core.nth.call(null,vec__20342,(1),null);var vec__20343 = cljs.core.get.call(null,map__20341__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__20343,(0),null);var bg = cljs.core.nth.call(null,vec__20343,(1),null);var bb = cljs.core.nth.call(null,vec__20343,(2),null);var map__20344 = cljs.core.get.call(null,map__20341__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__20344__$1 = ((cljs.core.seq_QMARK_.call(null,map__20344))?cljs.core.apply.call(null,cljs.core.hash_map,map__20344):map__20344);var ps = cljs.core.get.call(null,map__20344__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return null;
});
;})(useWebgl_QMARK_,vec__20334,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag))
});
