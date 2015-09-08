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
return (function (p__41039){var map__41040 = p__41039;var map__41040__$1 = ((cljs.core.seq_QMARK_.call(null,map__41040))?cljs.core.apply.call(null,cljs.core.hash_map,map__41040):map__41040);var ctx = map__41040__$1;var map__41041 = cljs.core.get.call(null,map__41040__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41041__$1 = ((cljs.core.seq_QMARK_.call(null,map__41041))?cljs.core.apply.call(null,cljs.core.hash_map,map__41041):map__41041);var ps = cljs.core.get.call(null,map__41041__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__41042_41057 = canvas_ctx;(G__41042_41057["fillStyle"] = "white");
G__41042_41057.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__41042_41057["fillStyle"] = "red");
G__41042_41057.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__41043_41058 = cljs.core.seq.call(null,ps);var chunk__41044_41059 = null;var count__41045_41060 = (0);var i__41046_41061 = (0);while(true){
if((i__41046_41061 < count__41045_41060))
{var map__41047_41062 = cljs.core._nth.call(null,chunk__41044_41059,i__41046_41061);var map__41047_41063__$1 = ((cljs.core.seq_QMARK_.call(null,map__41047_41062))?cljs.core.apply.call(null,cljs.core.hash_map,map__41047_41062):map__41047_41062);var p_41064 = map__41047_41063__$1;var vec__41048_41065 = cljs.core.get.call(null,map__41047_41063__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41066 = cljs.core.nth.call(null,vec__41048_41065,(0),null);var y_41067 = cljs.core.nth.call(null,vec__41048_41065,(1),null);var rot_41068 = cljs.core.nth.call(null,vec__41048_41065,(2),null);var vec__41049_41069 = cljs.core.get.call(null,map__41047_41063__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41070 = cljs.core.nth.call(null,vec__41049_41069,(0),null);var ys_41071 = cljs.core.nth.call(null,vec__41049_41069,(1),null);var vec__41050_41072 = cljs.core.get.call(null,map__41047_41063__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41073 = cljs.core.nth.call(null,vec__41050_41072,(0),null);var g_41074 = cljs.core.nth.call(null,vec__41050_41072,(1),null);var b_41075 = cljs.core.nth.call(null,vec__41050_41072,(2),null);var a_41076 = cljs.core.nth.call(null,vec__41050_41072,(3),null);var G__41051_41077 = canvas_ctx;G__41051_41077.save();
G__41051_41077.translate(x_41066,y_41067);
G__41051_41077.rotate(rot_41068);
(G__41051_41077["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41073 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41074 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41075 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41076)+")"));
G__41051_41077.fillRect((- (xs_41070 / (2))),(- (ys_41071 / (2))),xs_41070,ys_41071);
G__41051_41077.restore();
{
var G__41078 = seq__41043_41058;
var G__41079 = chunk__41044_41059;
var G__41080 = count__41045_41060;
var G__41081 = (i__41046_41061 + (1));
seq__41043_41058 = G__41078;
chunk__41044_41059 = G__41079;
count__41045_41060 = G__41080;
i__41046_41061 = G__41081;
continue;
}
} else
{var temp__4126__auto___41082 = cljs.core.seq.call(null,seq__41043_41058);if(temp__4126__auto___41082)
{var seq__41043_41083__$1 = temp__4126__auto___41082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41043_41083__$1))
{var c__4307__auto___41084 = cljs.core.chunk_first.call(null,seq__41043_41083__$1);{
var G__41085 = cljs.core.chunk_rest.call(null,seq__41043_41083__$1);
var G__41086 = c__4307__auto___41084;
var G__41087 = cljs.core.count.call(null,c__4307__auto___41084);
var G__41088 = (0);
seq__41043_41058 = G__41085;
chunk__41044_41059 = G__41086;
count__41045_41060 = G__41087;
i__41046_41061 = G__41088;
continue;
}
} else
{var map__41052_41089 = cljs.core.first.call(null,seq__41043_41083__$1);var map__41052_41090__$1 = ((cljs.core.seq_QMARK_.call(null,map__41052_41089))?cljs.core.apply.call(null,cljs.core.hash_map,map__41052_41089):map__41052_41089);var p_41091 = map__41052_41090__$1;var vec__41053_41092 = cljs.core.get.call(null,map__41052_41090__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41093 = cljs.core.nth.call(null,vec__41053_41092,(0),null);var y_41094 = cljs.core.nth.call(null,vec__41053_41092,(1),null);var rot_41095 = cljs.core.nth.call(null,vec__41053_41092,(2),null);var vec__41054_41096 = cljs.core.get.call(null,map__41052_41090__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41097 = cljs.core.nth.call(null,vec__41054_41096,(0),null);var ys_41098 = cljs.core.nth.call(null,vec__41054_41096,(1),null);var vec__41055_41099 = cljs.core.get.call(null,map__41052_41090__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41100 = cljs.core.nth.call(null,vec__41055_41099,(0),null);var g_41101 = cljs.core.nth.call(null,vec__41055_41099,(1),null);var b_41102 = cljs.core.nth.call(null,vec__41055_41099,(2),null);var a_41103 = cljs.core.nth.call(null,vec__41055_41099,(3),null);var G__41056_41104 = canvas_ctx;G__41056_41104.save();
G__41056_41104.translate(x_41093,y_41094);
G__41056_41104.rotate(rot_41095);
(G__41056_41104["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41100 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41101 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41102 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41103)+")"));
G__41056_41104.fillRect((- (xs_41097 / (2))),(- (ys_41098 / (2))),xs_41097,ys_41098);
G__41056_41104.restore();
{
var G__41105 = cljs.core.next.call(null,seq__41043_41083__$1);
var G__41106 = null;
var G__41107 = (0);
var G__41108 = (0);
seq__41043_41058 = G__41105;
chunk__41044_41059 = G__41106;
count__41045_41060 = G__41107;
i__41046_41061 = G__41108;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__41144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__41144,(0),null);var ch = cljs.core.nth.call(null,vec__41144,(1),null);var proj = (function (){var G__41145 = (new THREE.Matrix4());G__41145.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__41145;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__41144,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__41146){var map__41147 = p__41146;var map__41147__$1 = ((cljs.core.seq_QMARK_.call(null,map__41147))?cljs.core.apply.call(null,cljs.core.hash_map,map__41147):map__41147);var ctx = map__41147__$1;var vec__41148 = cljs.core.get.call(null,map__41147__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__41148,(0),null);var cy = cljs.core.nth.call(null,vec__41148,(1),null);var timer = cljs.core.get.call(null,map__41147__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__41149 = cljs.core.get.call(null,map__41147__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41149__$1 = ((cljs.core.seq_QMARK_.call(null,map__41149))?cljs.core.apply.call(null,cljs.core.hash_map,map__41149):map__41149);var ps = cljs.core.get.call(null,map__41149__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var vec__41150 = cljs.core.get.call(null,map__41149__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__41150,(0),null);var bg = cljs.core.nth.call(null,vec__41150,(1),null);var bb = cljs.core.nth.call(null,vec__41150,(2),null);gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__41147,map__41147__$1,ctx,vec__41148,cx,cy,timer,map__41149,map__41149__$1,ps,vec__41150,br,bg,bb,canvas_dom,mesh,sprite_shader,vec__41144,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__41151 = cljs.core.seq.call(null,ps);var chunk__41152 = null;var count__41153 = (0);var i__41154 = (0);while(true){
if((i__41154 < count__41153))
{var map__41155 = cljs.core._nth.call(null,chunk__41152,i__41154);var map__41155__$1 = ((cljs.core.seq_QMARK_.call(null,map__41155))?cljs.core.apply.call(null,cljs.core.hash_map,map__41155):map__41155);var p = map__41155__$1;var vec__41156 = cljs.core.get.call(null,map__41155__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41156,(0),null);var y = cljs.core.nth.call(null,vec__41156,(1),null);var rot = cljs.core.nth.call(null,vec__41156,(2),null);var vec__41157 = cljs.core.get.call(null,map__41155__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41157,(0),null);var ys = cljs.core.nth.call(null,vec__41157,(1),null);var vec__41158 = cljs.core.get.call(null,map__41155__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41158,(0),null);var g = cljs.core.nth.call(null,vec__41158,(1),null);var b = cljs.core.nth.call(null,vec__41158,(2),null);var a = cljs.core.nth.call(null,vec__41158,(3),null);var tex = cljs.core.get.call(null,map__41155__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__41155__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_41179 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__41159_41180 = rotMat;G__41159_41180.makeRotationZ(rot);
var G__41160_41181 = scaleMat;G__41160_41181.makeScale(xs,ys,(1));
var G__41161_41182 = tras;G__41161_41182.makeTranslation((cx + x),(cy + y),(0));
G__41161_41182.multiply(rotMat);
G__41161_41182.multiply(scaleMat);
var G__41162_41183 = colorTx;G__41162_41183.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__41163 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__41163__$1 = (cljs.core.truth_(texObj_41179)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_41179,(0)], null)], null),G__41163):G__41163);return G__41163__$1;
})());
if(cljs.core.truth_(texObj_41179))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__41164_41184 = cljs.core._EQ_;var expr__41165_41185 = blending;if(cljs.core.truth_(pred__41164_41184.call(null,"normal",expr__41165_41185)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__41164_41184.call(null,"add",expr__41165_41185)))
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
var G__41186 = seq__41151;
var G__41187 = chunk__41152;
var G__41188 = count__41153;
var G__41189 = (i__41154 + (1));
seq__41151 = G__41186;
chunk__41152 = G__41187;
count__41153 = G__41188;
i__41154 = G__41189;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__41151);if(temp__4126__auto__)
{var seq__41151__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41151__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__41151__$1);{
var G__41190 = cljs.core.chunk_rest.call(null,seq__41151__$1);
var G__41191 = c__4307__auto__;
var G__41192 = cljs.core.count.call(null,c__4307__auto__);
var G__41193 = (0);
seq__41151 = G__41190;
chunk__41152 = G__41191;
count__41153 = G__41192;
i__41154 = G__41193;
continue;
}
} else
{var map__41167 = cljs.core.first.call(null,seq__41151__$1);var map__41167__$1 = ((cljs.core.seq_QMARK_.call(null,map__41167))?cljs.core.apply.call(null,cljs.core.hash_map,map__41167):map__41167);var p = map__41167__$1;var vec__41168 = cljs.core.get.call(null,map__41167__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41168,(0),null);var y = cljs.core.nth.call(null,vec__41168,(1),null);var rot = cljs.core.nth.call(null,vec__41168,(2),null);var vec__41169 = cljs.core.get.call(null,map__41167__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41169,(0),null);var ys = cljs.core.nth.call(null,vec__41169,(1),null);var vec__41170 = cljs.core.get.call(null,map__41167__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41170,(0),null);var g = cljs.core.nth.call(null,vec__41170,(1),null);var b = cljs.core.nth.call(null,vec__41170,(2),null);var a = cljs.core.nth.call(null,vec__41170,(3),null);var tex = cljs.core.get.call(null,map__41167__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__41167__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_41194 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__41171_41195 = rotMat;G__41171_41195.makeRotationZ(rot);
var G__41172_41196 = scaleMat;G__41172_41196.makeScale(xs,ys,(1));
var G__41173_41197 = tras;G__41173_41197.makeTranslation((cx + x),(cy + y),(0));
G__41173_41197.multiply(rotMat);
G__41173_41197.multiply(scaleMat);
var G__41174_41198 = colorTx;G__41174_41198.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__41175 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__41175__$1 = (cljs.core.truth_(texObj_41194)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_41194,(0)], null)], null),G__41175):G__41175);return G__41175__$1;
})());
if(cljs.core.truth_(texObj_41194))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__41176_41199 = cljs.core._EQ_;var expr__41177_41200 = blending;if(cljs.core.truth_(pred__41176_41199.call(null,"normal",expr__41177_41200)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__41176_41199.call(null,"add",expr__41177_41200)))
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
var G__41201 = cljs.core.next.call(null,seq__41151__$1);
var G__41202 = null;
var G__41203 = (0);
var G__41204 = (0);
seq__41151 = G__41201;
chunk__41152 = G__41202;
count__41153 = G__41203;
i__41154 = G__41204;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__41147,map__41147__$1,ctx,vec__41148,cx,cy,timer,map__41149,map__41149__$1,ps,vec__41150,br,bg,bb,canvas_dom,mesh,sprite_shader,vec__41144,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__41144,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
