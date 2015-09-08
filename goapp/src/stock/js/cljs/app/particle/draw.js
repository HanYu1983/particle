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
return (function (p__49987){var map__49988 = p__49987;var map__49988__$1 = ((cljs.core.seq_QMARK_.call(null,map__49988))?cljs.core.apply.call(null,cljs.core.hash_map,map__49988):map__49988);var ctx = map__49988__$1;var map__49989 = cljs.core.get.call(null,map__49988__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__49989__$1 = ((cljs.core.seq_QMARK_.call(null,map__49989))?cljs.core.apply.call(null,cljs.core.hash_map,map__49989):map__49989);var ps = cljs.core.get.call(null,map__49989__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__49990_50005 = canvas_ctx;(G__49990_50005["fillStyle"] = "white");
G__49990_50005.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__49990_50005["fillStyle"] = "red");
G__49990_50005.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__49991_50006 = cljs.core.seq.call(null,ps);var chunk__49992_50007 = null;var count__49993_50008 = (0);var i__49994_50009 = (0);while(true){
if((i__49994_50009 < count__49993_50008))
{var map__49995_50010 = cljs.core._nth.call(null,chunk__49992_50007,i__49994_50009);var map__49995_50011__$1 = ((cljs.core.seq_QMARK_.call(null,map__49995_50010))?cljs.core.apply.call(null,cljs.core.hash_map,map__49995_50010):map__49995_50010);var p_50012 = map__49995_50011__$1;var vec__49996_50013 = cljs.core.get.call(null,map__49995_50011__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_50014 = cljs.core.nth.call(null,vec__49996_50013,(0),null);var y_50015 = cljs.core.nth.call(null,vec__49996_50013,(1),null);var rot_50016 = cljs.core.nth.call(null,vec__49996_50013,(2),null);var vec__49997_50017 = cljs.core.get.call(null,map__49995_50011__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_50018 = cljs.core.nth.call(null,vec__49997_50017,(0),null);var ys_50019 = cljs.core.nth.call(null,vec__49997_50017,(1),null);var vec__49998_50020 = cljs.core.get.call(null,map__49995_50011__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_50021 = cljs.core.nth.call(null,vec__49998_50020,(0),null);var g_50022 = cljs.core.nth.call(null,vec__49998_50020,(1),null);var b_50023 = cljs.core.nth.call(null,vec__49998_50020,(2),null);var a_50024 = cljs.core.nth.call(null,vec__49998_50020,(3),null);var G__49999_50025 = canvas_ctx;G__49999_50025.save();
G__49999_50025.translate(x_50014,y_50015);
G__49999_50025.rotate(rot_50016);
(G__49999_50025["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_50021 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_50022 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_50023 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_50024)+")"));
G__49999_50025.fillRect((- (xs_50018 / (2))),(- (ys_50019 / (2))),xs_50018,ys_50019);
G__49999_50025.restore();
{
var G__50026 = seq__49991_50006;
var G__50027 = chunk__49992_50007;
var G__50028 = count__49993_50008;
var G__50029 = (i__49994_50009 + (1));
seq__49991_50006 = G__50026;
chunk__49992_50007 = G__50027;
count__49993_50008 = G__50028;
i__49994_50009 = G__50029;
continue;
}
} else
{var temp__4126__auto___50030 = cljs.core.seq.call(null,seq__49991_50006);if(temp__4126__auto___50030)
{var seq__49991_50031__$1 = temp__4126__auto___50030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49991_50031__$1))
{var c__4307__auto___50032 = cljs.core.chunk_first.call(null,seq__49991_50031__$1);{
var G__50033 = cljs.core.chunk_rest.call(null,seq__49991_50031__$1);
var G__50034 = c__4307__auto___50032;
var G__50035 = cljs.core.count.call(null,c__4307__auto___50032);
var G__50036 = (0);
seq__49991_50006 = G__50033;
chunk__49992_50007 = G__50034;
count__49993_50008 = G__50035;
i__49994_50009 = G__50036;
continue;
}
} else
{var map__50000_50037 = cljs.core.first.call(null,seq__49991_50031__$1);var map__50000_50038__$1 = ((cljs.core.seq_QMARK_.call(null,map__50000_50037))?cljs.core.apply.call(null,cljs.core.hash_map,map__50000_50037):map__50000_50037);var p_50039 = map__50000_50038__$1;var vec__50001_50040 = cljs.core.get.call(null,map__50000_50038__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_50041 = cljs.core.nth.call(null,vec__50001_50040,(0),null);var y_50042 = cljs.core.nth.call(null,vec__50001_50040,(1),null);var rot_50043 = cljs.core.nth.call(null,vec__50001_50040,(2),null);var vec__50002_50044 = cljs.core.get.call(null,map__50000_50038__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_50045 = cljs.core.nth.call(null,vec__50002_50044,(0),null);var ys_50046 = cljs.core.nth.call(null,vec__50002_50044,(1),null);var vec__50003_50047 = cljs.core.get.call(null,map__50000_50038__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_50048 = cljs.core.nth.call(null,vec__50003_50047,(0),null);var g_50049 = cljs.core.nth.call(null,vec__50003_50047,(1),null);var b_50050 = cljs.core.nth.call(null,vec__50003_50047,(2),null);var a_50051 = cljs.core.nth.call(null,vec__50003_50047,(3),null);var G__50004_50052 = canvas_ctx;G__50004_50052.save();
G__50004_50052.translate(x_50041,y_50042);
G__50004_50052.rotate(rot_50043);
(G__50004_50052["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_50048 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_50049 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_50050 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_50051)+")"));
G__50004_50052.fillRect((- (xs_50045 / (2))),(- (ys_50046 / (2))),xs_50045,ys_50046);
G__50004_50052.restore();
{
var G__50053 = cljs.core.next.call(null,seq__49991_50031__$1);
var G__50054 = null;
var G__50055 = (0);
var G__50056 = (0);
seq__49991_50006 = G__50053;
chunk__49992_50007 = G__50054;
count__49993_50008 = G__50055;
i__49994_50009 = G__50056;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__50092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__50092,(0),null);var ch = cljs.core.nth.call(null,vec__50092,(1),null);var proj = (function (){var G__50093 = (new THREE.Matrix4());G__50093.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__50093;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__50092,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__50094){var map__50095 = p__50094;var map__50095__$1 = ((cljs.core.seq_QMARK_.call(null,map__50095))?cljs.core.apply.call(null,cljs.core.hash_map,map__50095):map__50095);var ctx = map__50095__$1;var vec__50096 = cljs.core.get.call(null,map__50095__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__50096,(0),null);var cy = cljs.core.nth.call(null,vec__50096,(1),null);var vec__50097 = cljs.core.get.call(null,map__50095__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__50097,(0),null);var bg = cljs.core.nth.call(null,vec__50097,(1),null);var bb = cljs.core.nth.call(null,vec__50097,(2),null);var map__50098 = cljs.core.get.call(null,map__50095__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__50098__$1 = ((cljs.core.seq_QMARK_.call(null,map__50098))?cljs.core.apply.call(null,cljs.core.hash_map,map__50098):map__50098);var ps = cljs.core.get.call(null,map__50098__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__50095,map__50095__$1,ctx,vec__50096,cx,cy,vec__50097,br,bg,bb,map__50098,map__50098__$1,ps,canvas_dom,mesh,sprite_shader,vec__50092,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__50099 = cljs.core.seq.call(null,ps);var chunk__50100 = null;var count__50101 = (0);var i__50102 = (0);while(true){
if((i__50102 < count__50101))
{var map__50103 = cljs.core._nth.call(null,chunk__50100,i__50102);var map__50103__$1 = ((cljs.core.seq_QMARK_.call(null,map__50103))?cljs.core.apply.call(null,cljs.core.hash_map,map__50103):map__50103);var p = map__50103__$1;var vec__50104 = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__50104,(0),null);var y = cljs.core.nth.call(null,vec__50104,(1),null);var rot = cljs.core.nth.call(null,vec__50104,(2),null);var vec__50105 = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__50105,(0),null);var ys = cljs.core.nth.call(null,vec__50105,(1),null);var vec__50106 = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__50106,(0),null);var g = cljs.core.nth.call(null,vec__50106,(1),null);var b = cljs.core.nth.call(null,vec__50106,(2),null);var a = cljs.core.nth.call(null,vec__50106,(3),null);var tex = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__50103__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_50127 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__50107_50128 = rotMat;G__50107_50128.makeRotationZ(rot);
var G__50108_50129 = scaleMat;G__50108_50129.makeScale(xs,ys,(1));
var G__50109_50130 = tras;G__50109_50130.makeTranslation((cx + x),(cy + y),(0));
G__50109_50130.multiply(rotMat);
G__50109_50130.multiply(scaleMat);
var G__50110_50131 = colorTx;G__50110_50131.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__50111 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__50111__$1 = (cljs.core.truth_(texObj_50127)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_50127,(0)], null)], null),G__50111):G__50111);return G__50111__$1;
})());
if(cljs.core.truth_(texObj_50127))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__50112_50132 = cljs.core._EQ_;var expr__50113_50133 = blending;if(cljs.core.truth_(pred__50112_50132.call(null,"normal",expr__50113_50133)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__50112_50132.call(null,"add",expr__50113_50133)))
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
var G__50134 = seq__50099;
var G__50135 = chunk__50100;
var G__50136 = count__50101;
var G__50137 = (i__50102 + (1));
seq__50099 = G__50134;
chunk__50100 = G__50135;
count__50101 = G__50136;
i__50102 = G__50137;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50099);if(temp__4126__auto__)
{var seq__50099__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50099__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__50099__$1);{
var G__50138 = cljs.core.chunk_rest.call(null,seq__50099__$1);
var G__50139 = c__4307__auto__;
var G__50140 = cljs.core.count.call(null,c__4307__auto__);
var G__50141 = (0);
seq__50099 = G__50138;
chunk__50100 = G__50139;
count__50101 = G__50140;
i__50102 = G__50141;
continue;
}
} else
{var map__50115 = cljs.core.first.call(null,seq__50099__$1);var map__50115__$1 = ((cljs.core.seq_QMARK_.call(null,map__50115))?cljs.core.apply.call(null,cljs.core.hash_map,map__50115):map__50115);var p = map__50115__$1;var vec__50116 = cljs.core.get.call(null,map__50115__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__50116,(0),null);var y = cljs.core.nth.call(null,vec__50116,(1),null);var rot = cljs.core.nth.call(null,vec__50116,(2),null);var vec__50117 = cljs.core.get.call(null,map__50115__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__50117,(0),null);var ys = cljs.core.nth.call(null,vec__50117,(1),null);var vec__50118 = cljs.core.get.call(null,map__50115__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__50118,(0),null);var g = cljs.core.nth.call(null,vec__50118,(1),null);var b = cljs.core.nth.call(null,vec__50118,(2),null);var a = cljs.core.nth.call(null,vec__50118,(3),null);var tex = cljs.core.get.call(null,map__50115__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__50115__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_50142 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__50119_50143 = rotMat;G__50119_50143.makeRotationZ(rot);
var G__50120_50144 = scaleMat;G__50120_50144.makeScale(xs,ys,(1));
var G__50121_50145 = tras;G__50121_50145.makeTranslation((cx + x),(cy + y),(0));
G__50121_50145.multiply(rotMat);
G__50121_50145.multiply(scaleMat);
var G__50122_50146 = colorTx;G__50122_50146.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__50123 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__50123__$1 = (cljs.core.truth_(texObj_50142)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_50142,(0)], null)], null),G__50123):G__50123);return G__50123__$1;
})());
if(cljs.core.truth_(texObj_50142))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__50124_50147 = cljs.core._EQ_;var expr__50125_50148 = blending;if(cljs.core.truth_(pred__50124_50147.call(null,"normal",expr__50125_50148)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__50124_50147.call(null,"add",expr__50125_50148)))
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
var G__50149 = cljs.core.next.call(null,seq__50099__$1);
var G__50150 = null;
var G__50151 = (0);
var G__50152 = (0);
seq__50099 = G__50149;
chunk__50100 = G__50150;
count__50101 = G__50151;
i__50102 = G__50152;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__50095,map__50095__$1,ctx,vec__50096,cx,cy,vec__50097,br,bg,bb,map__50098,map__50098__$1,ps,canvas_dom,mesh,sprite_shader,vec__50092,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__50092,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
