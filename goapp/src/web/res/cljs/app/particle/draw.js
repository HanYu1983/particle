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
return (function (p__139073){var map__139074 = p__139073;var map__139074__$1 = ((cljs.core.seq_QMARK_.call(null,map__139074))?cljs.core.apply.call(null,cljs.core.hash_map,map__139074):map__139074);var ctx = map__139074__$1;var map__139075 = cljs.core.get.call(null,map__139074__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__139075__$1 = ((cljs.core.seq_QMARK_.call(null,map__139075))?cljs.core.apply.call(null,cljs.core.hash_map,map__139075):map__139075);var ps = cljs.core.get.call(null,map__139075__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__139076_139091 = canvas_ctx;(G__139076_139091["fillStyle"] = "white");
G__139076_139091.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__139076_139091["fillStyle"] = "red");
G__139076_139091.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__139077_139092 = cljs.core.seq.call(null,ps);var chunk__139078_139093 = null;var count__139079_139094 = (0);var i__139080_139095 = (0);while(true){
if((i__139080_139095 < count__139079_139094))
{var map__139081_139096 = cljs.core._nth.call(null,chunk__139078_139093,i__139080_139095);var map__139081_139097__$1 = ((cljs.core.seq_QMARK_.call(null,map__139081_139096))?cljs.core.apply.call(null,cljs.core.hash_map,map__139081_139096):map__139081_139096);var p_139098 = map__139081_139097__$1;var vec__139082_139099 = cljs.core.get.call(null,map__139081_139097__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_139100 = cljs.core.nth.call(null,vec__139082_139099,(0),null);var y_139101 = cljs.core.nth.call(null,vec__139082_139099,(1),null);var rot_139102 = cljs.core.nth.call(null,vec__139082_139099,(2),null);var vec__139083_139103 = cljs.core.get.call(null,map__139081_139097__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_139104 = cljs.core.nth.call(null,vec__139083_139103,(0),null);var ys_139105 = cljs.core.nth.call(null,vec__139083_139103,(1),null);var vec__139084_139106 = cljs.core.get.call(null,map__139081_139097__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_139107 = cljs.core.nth.call(null,vec__139084_139106,(0),null);var g_139108 = cljs.core.nth.call(null,vec__139084_139106,(1),null);var b_139109 = cljs.core.nth.call(null,vec__139084_139106,(2),null);var a_139110 = cljs.core.nth.call(null,vec__139084_139106,(3),null);var G__139085_139111 = canvas_ctx;G__139085_139111.save();
G__139085_139111.translate(x_139100,y_139101);
G__139085_139111.rotate(rot_139102);
(G__139085_139111["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_139107 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_139108 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_139109 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_139110)+")"));
G__139085_139111.fillRect((- (xs_139104 / (2))),(- (ys_139105 / (2))),xs_139104,ys_139105);
G__139085_139111.restore();
{
var G__139112 = seq__139077_139092;
var G__139113 = chunk__139078_139093;
var G__139114 = count__139079_139094;
var G__139115 = (i__139080_139095 + (1));
seq__139077_139092 = G__139112;
chunk__139078_139093 = G__139113;
count__139079_139094 = G__139114;
i__139080_139095 = G__139115;
continue;
}
} else
{var temp__4126__auto___139116 = cljs.core.seq.call(null,seq__139077_139092);if(temp__4126__auto___139116)
{var seq__139077_139117__$1 = temp__4126__auto___139116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139077_139117__$1))
{var c__4307__auto___139118 = cljs.core.chunk_first.call(null,seq__139077_139117__$1);{
var G__139119 = cljs.core.chunk_rest.call(null,seq__139077_139117__$1);
var G__139120 = c__4307__auto___139118;
var G__139121 = cljs.core.count.call(null,c__4307__auto___139118);
var G__139122 = (0);
seq__139077_139092 = G__139119;
chunk__139078_139093 = G__139120;
count__139079_139094 = G__139121;
i__139080_139095 = G__139122;
continue;
}
} else
{var map__139086_139123 = cljs.core.first.call(null,seq__139077_139117__$1);var map__139086_139124__$1 = ((cljs.core.seq_QMARK_.call(null,map__139086_139123))?cljs.core.apply.call(null,cljs.core.hash_map,map__139086_139123):map__139086_139123);var p_139125 = map__139086_139124__$1;var vec__139087_139126 = cljs.core.get.call(null,map__139086_139124__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_139127 = cljs.core.nth.call(null,vec__139087_139126,(0),null);var y_139128 = cljs.core.nth.call(null,vec__139087_139126,(1),null);var rot_139129 = cljs.core.nth.call(null,vec__139087_139126,(2),null);var vec__139088_139130 = cljs.core.get.call(null,map__139086_139124__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_139131 = cljs.core.nth.call(null,vec__139088_139130,(0),null);var ys_139132 = cljs.core.nth.call(null,vec__139088_139130,(1),null);var vec__139089_139133 = cljs.core.get.call(null,map__139086_139124__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_139134 = cljs.core.nth.call(null,vec__139089_139133,(0),null);var g_139135 = cljs.core.nth.call(null,vec__139089_139133,(1),null);var b_139136 = cljs.core.nth.call(null,vec__139089_139133,(2),null);var a_139137 = cljs.core.nth.call(null,vec__139089_139133,(3),null);var G__139090_139138 = canvas_ctx;G__139090_139138.save();
G__139090_139138.translate(x_139127,y_139128);
G__139090_139138.rotate(rot_139129);
(G__139090_139138["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_139134 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_139135 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_139136 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_139137)+")"));
G__139090_139138.fillRect((- (xs_139131 / (2))),(- (ys_139132 / (2))),xs_139131,ys_139132);
G__139090_139138.restore();
{
var G__139139 = cljs.core.next.call(null,seq__139077_139117__$1);
var G__139140 = null;
var G__139141 = (0);
var G__139142 = (0);
seq__139077_139092 = G__139139;
chunk__139078_139093 = G__139140;
count__139079_139094 = G__139141;
i__139080_139095 = G__139142;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__139177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__139177,(0),null);var ch = cljs.core.nth.call(null,vec__139177,(1),null);var proj = (function (){var G__139178 = (new THREE.Matrix4());G__139178.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__139178;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__139177,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__139179){var map__139180 = p__139179;var map__139180__$1 = ((cljs.core.seq_QMARK_.call(null,map__139180))?cljs.core.apply.call(null,cljs.core.hash_map,map__139180):map__139180);var ctx = map__139180__$1;var vec__139181 = cljs.core.get.call(null,map__139180__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__139181,(0),null);var cy = cljs.core.nth.call(null,vec__139181,(1),null);var timer = cljs.core.get.call(null,map__139180__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__139182 = cljs.core.get.call(null,map__139180__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__139182__$1 = ((cljs.core.seq_QMARK_.call(null,map__139182))?cljs.core.apply.call(null,cljs.core.hash_map,map__139182):map__139182);var ps = cljs.core.get.call(null,map__139182__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__139180,map__139180__$1,ctx,vec__139181,cx,cy,timer,map__139182,map__139182__$1,ps,canvas_dom,mesh,sprite_shader,vec__139177,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__139183 = cljs.core.seq.call(null,ps);var chunk__139184 = null;var count__139185 = (0);var i__139186 = (0);while(true){
if((i__139186 < count__139185))
{var map__139187 = cljs.core._nth.call(null,chunk__139184,i__139186);var map__139187__$1 = ((cljs.core.seq_QMARK_.call(null,map__139187))?cljs.core.apply.call(null,cljs.core.hash_map,map__139187):map__139187);var p = map__139187__$1;var vec__139188 = cljs.core.get.call(null,map__139187__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__139188,(0),null);var y = cljs.core.nth.call(null,vec__139188,(1),null);var rot = cljs.core.nth.call(null,vec__139188,(2),null);var vec__139189 = cljs.core.get.call(null,map__139187__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__139189,(0),null);var ys = cljs.core.nth.call(null,vec__139189,(1),null);var vec__139190 = cljs.core.get.call(null,map__139187__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__139190,(0),null);var g = cljs.core.nth.call(null,vec__139190,(1),null);var b = cljs.core.nth.call(null,vec__139190,(2),null);var a = cljs.core.nth.call(null,vec__139190,(3),null);var tex = cljs.core.get.call(null,map__139187__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__139187__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_139211 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__139191_139212 = rotMat;G__139191_139212.makeRotationZ(rot);
var G__139192_139213 = scaleMat;G__139192_139213.makeScale(xs,ys,(1));
var G__139193_139214 = tras;G__139193_139214.makeTranslation((cx + x),(cy + y),(0));
G__139193_139214.multiply(rotMat);
G__139193_139214.multiply(scaleMat);
var G__139194_139215 = colorTx;G__139194_139215.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__139195 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__139195__$1 = (cljs.core.truth_(texObj_139211)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_139211,(0)], null)], null),G__139195):G__139195);return G__139195__$1;
})());
if(cljs.core.truth_(blending))
{var pred__139196_139216 = cljs.core._EQ_;var expr__139197_139217 = blending;if(cljs.core.truth_(pred__139196_139216.call(null,"add",expr__139197_139217)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__139218 = seq__139183;
var G__139219 = chunk__139184;
var G__139220 = count__139185;
var G__139221 = (i__139186 + (1));
seq__139183 = G__139218;
chunk__139184 = G__139219;
count__139185 = G__139220;
i__139186 = G__139221;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__139183);if(temp__4126__auto__)
{var seq__139183__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139183__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__139183__$1);{
var G__139222 = cljs.core.chunk_rest.call(null,seq__139183__$1);
var G__139223 = c__4307__auto__;
var G__139224 = cljs.core.count.call(null,c__4307__auto__);
var G__139225 = (0);
seq__139183 = G__139222;
chunk__139184 = G__139223;
count__139185 = G__139224;
i__139186 = G__139225;
continue;
}
} else
{var map__139199 = cljs.core.first.call(null,seq__139183__$1);var map__139199__$1 = ((cljs.core.seq_QMARK_.call(null,map__139199))?cljs.core.apply.call(null,cljs.core.hash_map,map__139199):map__139199);var p = map__139199__$1;var vec__139200 = cljs.core.get.call(null,map__139199__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__139200,(0),null);var y = cljs.core.nth.call(null,vec__139200,(1),null);var rot = cljs.core.nth.call(null,vec__139200,(2),null);var vec__139201 = cljs.core.get.call(null,map__139199__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__139201,(0),null);var ys = cljs.core.nth.call(null,vec__139201,(1),null);var vec__139202 = cljs.core.get.call(null,map__139199__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__139202,(0),null);var g = cljs.core.nth.call(null,vec__139202,(1),null);var b = cljs.core.nth.call(null,vec__139202,(2),null);var a = cljs.core.nth.call(null,vec__139202,(3),null);var tex = cljs.core.get.call(null,map__139199__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__139199__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_139226 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__139203_139227 = rotMat;G__139203_139227.makeRotationZ(rot);
var G__139204_139228 = scaleMat;G__139204_139228.makeScale(xs,ys,(1));
var G__139205_139229 = tras;G__139205_139229.makeTranslation((cx + x),(cy + y),(0));
G__139205_139229.multiply(rotMat);
G__139205_139229.multiply(scaleMat);
var G__139206_139230 = colorTx;G__139206_139230.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__139207 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__139207__$1 = (cljs.core.truth_(texObj_139226)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_139226,(0)], null)], null),G__139207):G__139207);return G__139207__$1;
})());
if(cljs.core.truth_(blending))
{var pred__139208_139231 = cljs.core._EQ_;var expr__139209_139232 = blending;if(cljs.core.truth_(pred__139208_139231.call(null,"add",expr__139209_139232)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__139233 = cljs.core.next.call(null,seq__139183__$1);
var G__139234 = null;
var G__139235 = (0);
var G__139236 = (0);
seq__139183 = G__139233;
chunk__139184 = G__139234;
count__139185 = G__139235;
i__139186 = G__139236;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__139180,map__139180__$1,ctx,vec__139181,cx,cy,timer,map__139182,map__139182__$1,ps,canvas_dom,mesh,sprite_shader,vec__139177,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__139177,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
