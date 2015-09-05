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
app.particle.draw.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.particle.draw.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__43025){var map__43026 = p__43025;var map__43026__$1 = ((cljs.core.seq_QMARK_.call(null,map__43026))?cljs.core.apply.call(null,cljs.core.hash_map,map__43026):map__43026);var ctx = map__43026__$1;var map__43027 = cljs.core.get.call(null,map__43026__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__43027__$1 = ((cljs.core.seq_QMARK_.call(null,map__43027))?cljs.core.apply.call(null,cljs.core.hash_map,map__43027):map__43027);var ps = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__43028_43043 = canvas_ctx;(G__43028_43043["fillStyle"] = "white");
G__43028_43043.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__43028_43043["fillStyle"] = "red");
G__43028_43043.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__43029_43044 = cljs.core.seq.call(null,ps);var chunk__43030_43045 = null;var count__43031_43046 = (0);var i__43032_43047 = (0);while(true){
if((i__43032_43047 < count__43031_43046))
{var map__43033_43048 = cljs.core._nth.call(null,chunk__43030_43045,i__43032_43047);var map__43033_43049__$1 = ((cljs.core.seq_QMARK_.call(null,map__43033_43048))?cljs.core.apply.call(null,cljs.core.hash_map,map__43033_43048):map__43033_43048);var p_43050 = map__43033_43049__$1;var vec__43034_43051 = cljs.core.get.call(null,map__43033_43049__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_43052 = cljs.core.nth.call(null,vec__43034_43051,(0),null);var y_43053 = cljs.core.nth.call(null,vec__43034_43051,(1),null);var rot_43054 = cljs.core.nth.call(null,vec__43034_43051,(2),null);var vec__43035_43055 = cljs.core.get.call(null,map__43033_43049__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_43056 = cljs.core.nth.call(null,vec__43035_43055,(0),null);var ys_43057 = cljs.core.nth.call(null,vec__43035_43055,(1),null);var vec__43036_43058 = cljs.core.get.call(null,map__43033_43049__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_43059 = cljs.core.nth.call(null,vec__43036_43058,(0),null);var g_43060 = cljs.core.nth.call(null,vec__43036_43058,(1),null);var b_43061 = cljs.core.nth.call(null,vec__43036_43058,(2),null);var a_43062 = cljs.core.nth.call(null,vec__43036_43058,(3),null);var G__43037_43063 = canvas_ctx;G__43037_43063.save();
G__43037_43063.translate(x_43052,y_43053);
G__43037_43063.rotate(rot_43054);
(G__43037_43063["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_43059 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_43060 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_43061 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_43062)+")"));
G__43037_43063.fillRect((- (xs_43056 / (2))),(- (ys_43057 / (2))),xs_43056,ys_43057);
G__43037_43063.restore();
{
var G__43064 = seq__43029_43044;
var G__43065 = chunk__43030_43045;
var G__43066 = count__43031_43046;
var G__43067 = (i__43032_43047 + (1));
seq__43029_43044 = G__43064;
chunk__43030_43045 = G__43065;
count__43031_43046 = G__43066;
i__43032_43047 = G__43067;
continue;
}
} else
{var temp__4126__auto___43068 = cljs.core.seq.call(null,seq__43029_43044);if(temp__4126__auto___43068)
{var seq__43029_43069__$1 = temp__4126__auto___43068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43029_43069__$1))
{var c__4307__auto___43070 = cljs.core.chunk_first.call(null,seq__43029_43069__$1);{
var G__43071 = cljs.core.chunk_rest.call(null,seq__43029_43069__$1);
var G__43072 = c__4307__auto___43070;
var G__43073 = cljs.core.count.call(null,c__4307__auto___43070);
var G__43074 = (0);
seq__43029_43044 = G__43071;
chunk__43030_43045 = G__43072;
count__43031_43046 = G__43073;
i__43032_43047 = G__43074;
continue;
}
} else
{var map__43038_43075 = cljs.core.first.call(null,seq__43029_43069__$1);var map__43038_43076__$1 = ((cljs.core.seq_QMARK_.call(null,map__43038_43075))?cljs.core.apply.call(null,cljs.core.hash_map,map__43038_43075):map__43038_43075);var p_43077 = map__43038_43076__$1;var vec__43039_43078 = cljs.core.get.call(null,map__43038_43076__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_43079 = cljs.core.nth.call(null,vec__43039_43078,(0),null);var y_43080 = cljs.core.nth.call(null,vec__43039_43078,(1),null);var rot_43081 = cljs.core.nth.call(null,vec__43039_43078,(2),null);var vec__43040_43082 = cljs.core.get.call(null,map__43038_43076__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_43083 = cljs.core.nth.call(null,vec__43040_43082,(0),null);var ys_43084 = cljs.core.nth.call(null,vec__43040_43082,(1),null);var vec__43041_43085 = cljs.core.get.call(null,map__43038_43076__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_43086 = cljs.core.nth.call(null,vec__43041_43085,(0),null);var g_43087 = cljs.core.nth.call(null,vec__43041_43085,(1),null);var b_43088 = cljs.core.nth.call(null,vec__43041_43085,(2),null);var a_43089 = cljs.core.nth.call(null,vec__43041_43085,(3),null);var G__43042_43090 = canvas_ctx;G__43042_43090.save();
G__43042_43090.translate(x_43079,y_43080);
G__43042_43090.rotate(rot_43081);
(G__43042_43090["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_43086 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_43087 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_43088 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_43089)+")"));
G__43042_43090.fillRect((- (xs_43083 / (2))),(- (ys_43084 / (2))),xs_43083,ys_43084);
G__43042_43090.restore();
{
var G__43091 = cljs.core.next.call(null,seq__43029_43069__$1);
var G__43092 = null;
var G__43093 = (0);
var G__43094 = (0);
seq__43029_43044 = G__43091;
chunk__43030_43045 = G__43092;
count__43031_43046 = G__43093;
i__43032_43047 = G__43094;
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
app.particle.draw.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj43125 = {};return obj43125;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__43123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__43123,(0),null);var ch = cljs.core.nth.call(null,vec__43123,(1),null);var proj = (function (){var G__43126 = (new THREE.Matrix4());G__43126.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__43126;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__43123,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__43127){var map__43128 = p__43127;var map__43128__$1 = ((cljs.core.seq_QMARK_.call(null,map__43128))?cljs.core.apply.call(null,cljs.core.hash_map,map__43128):map__43128);var ctx = map__43128__$1;var vec__43129 = cljs.core.get.call(null,map__43128__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__43129,(0),null);var cy = cljs.core.nth.call(null,vec__43129,(1),null);var timer = cljs.core.get.call(null,map__43128__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__43130 = cljs.core.get.call(null,map__43128__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__43130__$1 = ((cljs.core.seq_QMARK_.call(null,map__43130))?cljs.core.apply.call(null,cljs.core.hash_map,map__43130):map__43130);var ps = cljs.core.get.call(null,map__43130__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__43128,map__43128__$1,ctx,vec__43129,cx,cy,timer,map__43130,map__43130__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__43123,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){var seq__43131 = cljs.core.seq.call(null,ps);var chunk__43132 = null;var count__43133 = (0);var i__43134 = (0);while(true){
if((i__43134 < count__43133))
{var map__43135 = cljs.core._nth.call(null,chunk__43132,i__43134);var map__43135__$1 = ((cljs.core.seq_QMARK_.call(null,map__43135))?cljs.core.apply.call(null,cljs.core.hash_map,map__43135):map__43135);var p = map__43135__$1;var vec__43136 = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__43136,(0),null);var y = cljs.core.nth.call(null,vec__43136,(1),null);var rot = cljs.core.nth.call(null,vec__43136,(2),null);var vec__43137 = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__43137,(0),null);var ys = cljs.core.nth.call(null,vec__43137,(1),null);var vec__43138 = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__43138,(0),null);var g = cljs.core.nth.call(null,vec__43138,(1),null);var b = cljs.core.nth.call(null,vec__43138,(2),null);var a = cljs.core.nth.call(null,vec__43138,(3),null);var G__43139_43151 = rotMat;G__43139_43151.makeRotationZ(rot);
var G__43140_43152 = scaleMat;G__43140_43152.makeScale(xs,ys,(1));
var G__43141_43153 = tras;G__43141_43153.makeTranslation((cx + x),(cy + y),(0));
G__43141_43153.multiply(rotMat);
G__43141_43153.multiply(scaleMat);
var G__43142_43154 = colorTx;G__43142_43154.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__43155 = seq__43131;
var G__43156 = chunk__43132;
var G__43157 = count__43133;
var G__43158 = (i__43134 + (1));
seq__43131 = G__43155;
chunk__43132 = G__43156;
count__43133 = G__43157;
i__43134 = G__43158;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__43131);if(temp__4126__auto__)
{var seq__43131__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43131__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__43131__$1);{
var G__43159 = cljs.core.chunk_rest.call(null,seq__43131__$1);
var G__43160 = c__4307__auto__;
var G__43161 = cljs.core.count.call(null,c__4307__auto__);
var G__43162 = (0);
seq__43131 = G__43159;
chunk__43132 = G__43160;
count__43133 = G__43161;
i__43134 = G__43162;
continue;
}
} else
{var map__43143 = cljs.core.first.call(null,seq__43131__$1);var map__43143__$1 = ((cljs.core.seq_QMARK_.call(null,map__43143))?cljs.core.apply.call(null,cljs.core.hash_map,map__43143):map__43143);var p = map__43143__$1;var vec__43144 = cljs.core.get.call(null,map__43143__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__43144,(0),null);var y = cljs.core.nth.call(null,vec__43144,(1),null);var rot = cljs.core.nth.call(null,vec__43144,(2),null);var vec__43145 = cljs.core.get.call(null,map__43143__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__43145,(0),null);var ys = cljs.core.nth.call(null,vec__43145,(1),null);var vec__43146 = cljs.core.get.call(null,map__43143__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__43146,(0),null);var g = cljs.core.nth.call(null,vec__43146,(1),null);var b = cljs.core.nth.call(null,vec__43146,(2),null);var a = cljs.core.nth.call(null,vec__43146,(3),null);var G__43147_43163 = rotMat;G__43147_43163.makeRotationZ(rot);
var G__43148_43164 = scaleMat;G__43148_43164.makeScale(xs,ys,(1));
var G__43149_43165 = tras;G__43149_43165.makeTranslation((cx + x),(cy + y),(0));
G__43149_43165.multiply(rotMat);
G__43149_43165.multiply(scaleMat);
var G__43150_43166 = colorTx;G__43150_43166.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__43167 = cljs.core.next.call(null,seq__43131__$1);
var G__43168 = null;
var G__43169 = (0);
var G__43170 = (0);
seq__43131 = G__43167;
chunk__43132 = G__43168;
count__43133 = G__43169;
i__43134 = G__43170;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__43128,map__43128__$1,ctx,vec__43129,cx,cy,timer,map__43130,map__43130__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__43123,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__43123,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
