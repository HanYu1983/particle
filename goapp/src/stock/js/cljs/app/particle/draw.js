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
return (function (p__138891){var map__138892 = p__138891;var map__138892__$1 = ((cljs.core.seq_QMARK_.call(null,map__138892))?cljs.core.apply.call(null,cljs.core.hash_map,map__138892):map__138892);var ctx = map__138892__$1;var map__138893 = cljs.core.get.call(null,map__138892__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__138893__$1 = ((cljs.core.seq_QMARK_.call(null,map__138893))?cljs.core.apply.call(null,cljs.core.hash_map,map__138893):map__138893);var ps = cljs.core.get.call(null,map__138893__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__138894_138909 = canvas_ctx;(G__138894_138909["fillStyle"] = "white");
G__138894_138909.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__138894_138909["fillStyle"] = "red");
G__138894_138909.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__138895_138910 = cljs.core.seq.call(null,ps);var chunk__138896_138911 = null;var count__138897_138912 = (0);var i__138898_138913 = (0);while(true){
if((i__138898_138913 < count__138897_138912))
{var map__138899_138914 = cljs.core._nth.call(null,chunk__138896_138911,i__138898_138913);var map__138899_138915__$1 = ((cljs.core.seq_QMARK_.call(null,map__138899_138914))?cljs.core.apply.call(null,cljs.core.hash_map,map__138899_138914):map__138899_138914);var p_138916 = map__138899_138915__$1;var vec__138900_138917 = cljs.core.get.call(null,map__138899_138915__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_138918 = cljs.core.nth.call(null,vec__138900_138917,(0),null);var y_138919 = cljs.core.nth.call(null,vec__138900_138917,(1),null);var rot_138920 = cljs.core.nth.call(null,vec__138900_138917,(2),null);var vec__138901_138921 = cljs.core.get.call(null,map__138899_138915__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_138922 = cljs.core.nth.call(null,vec__138901_138921,(0),null);var ys_138923 = cljs.core.nth.call(null,vec__138901_138921,(1),null);var vec__138902_138924 = cljs.core.get.call(null,map__138899_138915__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_138925 = cljs.core.nth.call(null,vec__138902_138924,(0),null);var g_138926 = cljs.core.nth.call(null,vec__138902_138924,(1),null);var b_138927 = cljs.core.nth.call(null,vec__138902_138924,(2),null);var a_138928 = cljs.core.nth.call(null,vec__138902_138924,(3),null);var G__138903_138929 = canvas_ctx;G__138903_138929.save();
G__138903_138929.translate(x_138918,y_138919);
G__138903_138929.rotate(rot_138920);
(G__138903_138929["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_138925 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_138926 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_138927 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_138928)+")"));
G__138903_138929.fillRect((- (xs_138922 / (2))),(- (ys_138923 / (2))),xs_138922,ys_138923);
G__138903_138929.restore();
{
var G__138930 = seq__138895_138910;
var G__138931 = chunk__138896_138911;
var G__138932 = count__138897_138912;
var G__138933 = (i__138898_138913 + (1));
seq__138895_138910 = G__138930;
chunk__138896_138911 = G__138931;
count__138897_138912 = G__138932;
i__138898_138913 = G__138933;
continue;
}
} else
{var temp__4126__auto___138934 = cljs.core.seq.call(null,seq__138895_138910);if(temp__4126__auto___138934)
{var seq__138895_138935__$1 = temp__4126__auto___138934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__138895_138935__$1))
{var c__4307__auto___138936 = cljs.core.chunk_first.call(null,seq__138895_138935__$1);{
var G__138937 = cljs.core.chunk_rest.call(null,seq__138895_138935__$1);
var G__138938 = c__4307__auto___138936;
var G__138939 = cljs.core.count.call(null,c__4307__auto___138936);
var G__138940 = (0);
seq__138895_138910 = G__138937;
chunk__138896_138911 = G__138938;
count__138897_138912 = G__138939;
i__138898_138913 = G__138940;
continue;
}
} else
{var map__138904_138941 = cljs.core.first.call(null,seq__138895_138935__$1);var map__138904_138942__$1 = ((cljs.core.seq_QMARK_.call(null,map__138904_138941))?cljs.core.apply.call(null,cljs.core.hash_map,map__138904_138941):map__138904_138941);var p_138943 = map__138904_138942__$1;var vec__138905_138944 = cljs.core.get.call(null,map__138904_138942__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_138945 = cljs.core.nth.call(null,vec__138905_138944,(0),null);var y_138946 = cljs.core.nth.call(null,vec__138905_138944,(1),null);var rot_138947 = cljs.core.nth.call(null,vec__138905_138944,(2),null);var vec__138906_138948 = cljs.core.get.call(null,map__138904_138942__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_138949 = cljs.core.nth.call(null,vec__138906_138948,(0),null);var ys_138950 = cljs.core.nth.call(null,vec__138906_138948,(1),null);var vec__138907_138951 = cljs.core.get.call(null,map__138904_138942__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_138952 = cljs.core.nth.call(null,vec__138907_138951,(0),null);var g_138953 = cljs.core.nth.call(null,vec__138907_138951,(1),null);var b_138954 = cljs.core.nth.call(null,vec__138907_138951,(2),null);var a_138955 = cljs.core.nth.call(null,vec__138907_138951,(3),null);var G__138908_138956 = canvas_ctx;G__138908_138956.save();
G__138908_138956.translate(x_138945,y_138946);
G__138908_138956.rotate(rot_138947);
(G__138908_138956["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_138952 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_138953 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_138954 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_138955)+")"));
G__138908_138956.fillRect((- (xs_138949 / (2))),(- (ys_138950 / (2))),xs_138949,ys_138950);
G__138908_138956.restore();
{
var G__138957 = cljs.core.next.call(null,seq__138895_138935__$1);
var G__138958 = null;
var G__138959 = (0);
var G__138960 = (0);
seq__138895_138910 = G__138957;
chunk__138896_138911 = G__138958;
count__138897_138912 = G__138959;
i__138898_138913 = G__138960;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__138995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__138995,(0),null);var ch = cljs.core.nth.call(null,vec__138995,(1),null);var proj = (function (){var G__138996 = (new THREE.Matrix4());G__138996.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__138996;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__138995,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__138997){var map__138998 = p__138997;var map__138998__$1 = ((cljs.core.seq_QMARK_.call(null,map__138998))?cljs.core.apply.call(null,cljs.core.hash_map,map__138998):map__138998);var ctx = map__138998__$1;var vec__138999 = cljs.core.get.call(null,map__138998__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__138999,(0),null);var cy = cljs.core.nth.call(null,vec__138999,(1),null);var timer = cljs.core.get.call(null,map__138998__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__139000 = cljs.core.get.call(null,map__138998__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__139000__$1 = ((cljs.core.seq_QMARK_.call(null,map__139000))?cljs.core.apply.call(null,cljs.core.hash_map,map__139000):map__139000);var ps = cljs.core.get.call(null,map__139000__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__138998,map__138998__$1,ctx,vec__138999,cx,cy,timer,map__139000,map__139000__$1,ps,canvas_dom,mesh,sprite_shader,vec__138995,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__139001 = cljs.core.seq.call(null,ps);var chunk__139002 = null;var count__139003 = (0);var i__139004 = (0);while(true){
if((i__139004 < count__139003))
{var map__139005 = cljs.core._nth.call(null,chunk__139002,i__139004);var map__139005__$1 = ((cljs.core.seq_QMARK_.call(null,map__139005))?cljs.core.apply.call(null,cljs.core.hash_map,map__139005):map__139005);var p = map__139005__$1;var vec__139006 = cljs.core.get.call(null,map__139005__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__139006,(0),null);var y = cljs.core.nth.call(null,vec__139006,(1),null);var rot = cljs.core.nth.call(null,vec__139006,(2),null);var vec__139007 = cljs.core.get.call(null,map__139005__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__139007,(0),null);var ys = cljs.core.nth.call(null,vec__139007,(1),null);var vec__139008 = cljs.core.get.call(null,map__139005__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__139008,(0),null);var g = cljs.core.nth.call(null,vec__139008,(1),null);var b = cljs.core.nth.call(null,vec__139008,(2),null);var a = cljs.core.nth.call(null,vec__139008,(3),null);var tex = cljs.core.get.call(null,map__139005__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__139005__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_139029 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__139009_139030 = rotMat;G__139009_139030.makeRotationZ(rot);
var G__139010_139031 = scaleMat;G__139010_139031.makeScale(xs,ys,(1));
var G__139011_139032 = tras;G__139011_139032.makeTranslation((cx + x),(cy + y),(0));
G__139011_139032.multiply(rotMat);
G__139011_139032.multiply(scaleMat);
var G__139012_139033 = colorTx;G__139012_139033.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__139013 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__139013__$1 = (cljs.core.truth_(texObj_139029)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_139029,(0)], null)], null),G__139013):G__139013);return G__139013__$1;
})());
if(cljs.core.truth_(blending))
{var pred__139014_139034 = cljs.core._EQ_;var expr__139015_139035 = blending;if(cljs.core.truth_(pred__139014_139034.call(null,"add",expr__139015_139035)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__139036 = seq__139001;
var G__139037 = chunk__139002;
var G__139038 = count__139003;
var G__139039 = (i__139004 + (1));
seq__139001 = G__139036;
chunk__139002 = G__139037;
count__139003 = G__139038;
i__139004 = G__139039;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__139001);if(temp__4126__auto__)
{var seq__139001__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__139001__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__139001__$1);{
var G__139040 = cljs.core.chunk_rest.call(null,seq__139001__$1);
var G__139041 = c__4307__auto__;
var G__139042 = cljs.core.count.call(null,c__4307__auto__);
var G__139043 = (0);
seq__139001 = G__139040;
chunk__139002 = G__139041;
count__139003 = G__139042;
i__139004 = G__139043;
continue;
}
} else
{var map__139017 = cljs.core.first.call(null,seq__139001__$1);var map__139017__$1 = ((cljs.core.seq_QMARK_.call(null,map__139017))?cljs.core.apply.call(null,cljs.core.hash_map,map__139017):map__139017);var p = map__139017__$1;var vec__139018 = cljs.core.get.call(null,map__139017__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__139018,(0),null);var y = cljs.core.nth.call(null,vec__139018,(1),null);var rot = cljs.core.nth.call(null,vec__139018,(2),null);var vec__139019 = cljs.core.get.call(null,map__139017__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__139019,(0),null);var ys = cljs.core.nth.call(null,vec__139019,(1),null);var vec__139020 = cljs.core.get.call(null,map__139017__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__139020,(0),null);var g = cljs.core.nth.call(null,vec__139020,(1),null);var b = cljs.core.nth.call(null,vec__139020,(2),null);var a = cljs.core.nth.call(null,vec__139020,(3),null);var tex = cljs.core.get.call(null,map__139017__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__139017__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_139044 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__139021_139045 = rotMat;G__139021_139045.makeRotationZ(rot);
var G__139022_139046 = scaleMat;G__139022_139046.makeScale(xs,ys,(1));
var G__139023_139047 = tras;G__139023_139047.makeTranslation((cx + x),(cy + y),(0));
G__139023_139047.multiply(rotMat);
G__139023_139047.multiply(scaleMat);
var G__139024_139048 = colorTx;G__139024_139048.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__139025 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__139025__$1 = (cljs.core.truth_(texObj_139044)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_139044,(0)], null)], null),G__139025):G__139025);return G__139025__$1;
})());
if(cljs.core.truth_(blending))
{var pred__139026_139049 = cljs.core._EQ_;var expr__139027_139050 = blending;if(cljs.core.truth_(pred__139026_139049.call(null,"add",expr__139027_139050)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__139051 = cljs.core.next.call(null,seq__139001__$1);
var G__139052 = null;
var G__139053 = (0);
var G__139054 = (0);
seq__139001 = G__139051;
chunk__139002 = G__139052;
count__139003 = G__139053;
i__139004 = G__139054;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__138998,map__138998__$1,ctx,vec__138999,cx,cy,timer,map__139000,map__139000__$1,ps,canvas_dom,mesh,sprite_shader,vec__138995,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__138995,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
