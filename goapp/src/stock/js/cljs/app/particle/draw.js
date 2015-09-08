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
return (function (p__40855){var map__40856 = p__40855;var map__40856__$1 = ((cljs.core.seq_QMARK_.call(null,map__40856))?cljs.core.apply.call(null,cljs.core.hash_map,map__40856):map__40856);var ctx = map__40856__$1;var map__40857 = cljs.core.get.call(null,map__40856__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40857__$1 = ((cljs.core.seq_QMARK_.call(null,map__40857))?cljs.core.apply.call(null,cljs.core.hash_map,map__40857):map__40857);var ps = cljs.core.get.call(null,map__40857__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__40858_40873 = canvas_ctx;(G__40858_40873["fillStyle"] = "white");
G__40858_40873.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__40858_40873["fillStyle"] = "red");
G__40858_40873.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__40859_40874 = cljs.core.seq.call(null,ps);var chunk__40860_40875 = null;var count__40861_40876 = (0);var i__40862_40877 = (0);while(true){
if((i__40862_40877 < count__40861_40876))
{var map__40863_40878 = cljs.core._nth.call(null,chunk__40860_40875,i__40862_40877);var map__40863_40879__$1 = ((cljs.core.seq_QMARK_.call(null,map__40863_40878))?cljs.core.apply.call(null,cljs.core.hash_map,map__40863_40878):map__40863_40878);var p_40880 = map__40863_40879__$1;var vec__40864_40881 = cljs.core.get.call(null,map__40863_40879__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40882 = cljs.core.nth.call(null,vec__40864_40881,(0),null);var y_40883 = cljs.core.nth.call(null,vec__40864_40881,(1),null);var rot_40884 = cljs.core.nth.call(null,vec__40864_40881,(2),null);var vec__40865_40885 = cljs.core.get.call(null,map__40863_40879__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40886 = cljs.core.nth.call(null,vec__40865_40885,(0),null);var ys_40887 = cljs.core.nth.call(null,vec__40865_40885,(1),null);var vec__40866_40888 = cljs.core.get.call(null,map__40863_40879__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40889 = cljs.core.nth.call(null,vec__40866_40888,(0),null);var g_40890 = cljs.core.nth.call(null,vec__40866_40888,(1),null);var b_40891 = cljs.core.nth.call(null,vec__40866_40888,(2),null);var a_40892 = cljs.core.nth.call(null,vec__40866_40888,(3),null);var G__40867_40893 = canvas_ctx;G__40867_40893.save();
G__40867_40893.translate(x_40882,y_40883);
G__40867_40893.rotate(rot_40884);
(G__40867_40893["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40889 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40890 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40891 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40892)+")"));
G__40867_40893.fillRect((- (xs_40886 / (2))),(- (ys_40887 / (2))),xs_40886,ys_40887);
G__40867_40893.restore();
{
var G__40894 = seq__40859_40874;
var G__40895 = chunk__40860_40875;
var G__40896 = count__40861_40876;
var G__40897 = (i__40862_40877 + (1));
seq__40859_40874 = G__40894;
chunk__40860_40875 = G__40895;
count__40861_40876 = G__40896;
i__40862_40877 = G__40897;
continue;
}
} else
{var temp__4126__auto___40898 = cljs.core.seq.call(null,seq__40859_40874);if(temp__4126__auto___40898)
{var seq__40859_40899__$1 = temp__4126__auto___40898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40859_40899__$1))
{var c__4307__auto___40900 = cljs.core.chunk_first.call(null,seq__40859_40899__$1);{
var G__40901 = cljs.core.chunk_rest.call(null,seq__40859_40899__$1);
var G__40902 = c__4307__auto___40900;
var G__40903 = cljs.core.count.call(null,c__4307__auto___40900);
var G__40904 = (0);
seq__40859_40874 = G__40901;
chunk__40860_40875 = G__40902;
count__40861_40876 = G__40903;
i__40862_40877 = G__40904;
continue;
}
} else
{var map__40868_40905 = cljs.core.first.call(null,seq__40859_40899__$1);var map__40868_40906__$1 = ((cljs.core.seq_QMARK_.call(null,map__40868_40905))?cljs.core.apply.call(null,cljs.core.hash_map,map__40868_40905):map__40868_40905);var p_40907 = map__40868_40906__$1;var vec__40869_40908 = cljs.core.get.call(null,map__40868_40906__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40909 = cljs.core.nth.call(null,vec__40869_40908,(0),null);var y_40910 = cljs.core.nth.call(null,vec__40869_40908,(1),null);var rot_40911 = cljs.core.nth.call(null,vec__40869_40908,(2),null);var vec__40870_40912 = cljs.core.get.call(null,map__40868_40906__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40913 = cljs.core.nth.call(null,vec__40870_40912,(0),null);var ys_40914 = cljs.core.nth.call(null,vec__40870_40912,(1),null);var vec__40871_40915 = cljs.core.get.call(null,map__40868_40906__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40916 = cljs.core.nth.call(null,vec__40871_40915,(0),null);var g_40917 = cljs.core.nth.call(null,vec__40871_40915,(1),null);var b_40918 = cljs.core.nth.call(null,vec__40871_40915,(2),null);var a_40919 = cljs.core.nth.call(null,vec__40871_40915,(3),null);var G__40872_40920 = canvas_ctx;G__40872_40920.save();
G__40872_40920.translate(x_40909,y_40910);
G__40872_40920.rotate(rot_40911);
(G__40872_40920["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40916 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40917 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40918 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40919)+")"));
G__40872_40920.fillRect((- (xs_40913 / (2))),(- (ys_40914 / (2))),xs_40913,ys_40914);
G__40872_40920.restore();
{
var G__40921 = cljs.core.next.call(null,seq__40859_40899__$1);
var G__40922 = null;
var G__40923 = (0);
var G__40924 = (0);
seq__40859_40874 = G__40921;
chunk__40860_40875 = G__40922;
count__40861_40876 = G__40923;
i__40862_40877 = G__40924;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__40960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__40960,(0),null);var ch = cljs.core.nth.call(null,vec__40960,(1),null);var proj = (function (){var G__40961 = (new THREE.Matrix4());G__40961.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__40961;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__40960,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__40962){var map__40963 = p__40962;var map__40963__$1 = ((cljs.core.seq_QMARK_.call(null,map__40963))?cljs.core.apply.call(null,cljs.core.hash_map,map__40963):map__40963);var ctx = map__40963__$1;var vec__40964 = cljs.core.get.call(null,map__40963__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__40964,(0),null);var cy = cljs.core.nth.call(null,vec__40964,(1),null);var timer = cljs.core.get.call(null,map__40963__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__40965 = cljs.core.get.call(null,map__40963__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40965__$1 = ((cljs.core.seq_QMARK_.call(null,map__40965))?cljs.core.apply.call(null,cljs.core.hash_map,map__40965):map__40965);var ps = cljs.core.get.call(null,map__40965__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var vec__40966 = cljs.core.get.call(null,map__40965__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__40966,(0),null);var bg = cljs.core.nth.call(null,vec__40966,(1),null);var bb = cljs.core.nth.call(null,vec__40966,(2),null);gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__40963,map__40963__$1,ctx,vec__40964,cx,cy,timer,map__40965,map__40965__$1,ps,vec__40966,br,bg,bb,canvas_dom,mesh,sprite_shader,vec__40960,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__40967 = cljs.core.seq.call(null,ps);var chunk__40968 = null;var count__40969 = (0);var i__40970 = (0);while(true){
if((i__40970 < count__40969))
{var map__40971 = cljs.core._nth.call(null,chunk__40968,i__40970);var map__40971__$1 = ((cljs.core.seq_QMARK_.call(null,map__40971))?cljs.core.apply.call(null,cljs.core.hash_map,map__40971):map__40971);var p = map__40971__$1;var vec__40972 = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40972,(0),null);var y = cljs.core.nth.call(null,vec__40972,(1),null);var rot = cljs.core.nth.call(null,vec__40972,(2),null);var vec__40973 = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40973,(0),null);var ys = cljs.core.nth.call(null,vec__40973,(1),null);var vec__40974 = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40974,(0),null);var g = cljs.core.nth.call(null,vec__40974,(1),null);var b = cljs.core.nth.call(null,vec__40974,(2),null);var a = cljs.core.nth.call(null,vec__40974,(3),null);var tex = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40995 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40975_40996 = rotMat;G__40975_40996.makeRotationZ(rot);
var G__40976_40997 = scaleMat;G__40976_40997.makeScale(xs,ys,(1));
var G__40977_40998 = tras;G__40977_40998.makeTranslation((cx + x),(cy + y),(0));
G__40977_40998.multiply(rotMat);
G__40977_40998.multiply(scaleMat);
var G__40978_40999 = colorTx;G__40978_40999.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40979 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40979__$1 = (cljs.core.truth_(texObj_40995)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40995,(0)], null)], null),G__40979):G__40979);return G__40979__$1;
})());
if(cljs.core.truth_(texObj_40995))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40980_41000 = cljs.core._EQ_;var expr__40981_41001 = blending;if(cljs.core.truth_(pred__40980_41000.call(null,"normal",expr__40981_41001)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40980_41000.call(null,"add",expr__40981_41001)))
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
var G__41002 = seq__40967;
var G__41003 = chunk__40968;
var G__41004 = count__40969;
var G__41005 = (i__40970 + (1));
seq__40967 = G__41002;
chunk__40968 = G__41003;
count__40969 = G__41004;
i__40970 = G__41005;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40967);if(temp__4126__auto__)
{var seq__40967__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40967__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40967__$1);{
var G__41006 = cljs.core.chunk_rest.call(null,seq__40967__$1);
var G__41007 = c__4307__auto__;
var G__41008 = cljs.core.count.call(null,c__4307__auto__);
var G__41009 = (0);
seq__40967 = G__41006;
chunk__40968 = G__41007;
count__40969 = G__41008;
i__40970 = G__41009;
continue;
}
} else
{var map__40983 = cljs.core.first.call(null,seq__40967__$1);var map__40983__$1 = ((cljs.core.seq_QMARK_.call(null,map__40983))?cljs.core.apply.call(null,cljs.core.hash_map,map__40983):map__40983);var p = map__40983__$1;var vec__40984 = cljs.core.get.call(null,map__40983__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40984,(0),null);var y = cljs.core.nth.call(null,vec__40984,(1),null);var rot = cljs.core.nth.call(null,vec__40984,(2),null);var vec__40985 = cljs.core.get.call(null,map__40983__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40985,(0),null);var ys = cljs.core.nth.call(null,vec__40985,(1),null);var vec__40986 = cljs.core.get.call(null,map__40983__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40986,(0),null);var g = cljs.core.nth.call(null,vec__40986,(1),null);var b = cljs.core.nth.call(null,vec__40986,(2),null);var a = cljs.core.nth.call(null,vec__40986,(3),null);var tex = cljs.core.get.call(null,map__40983__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40983__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_41010 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40987_41011 = rotMat;G__40987_41011.makeRotationZ(rot);
var G__40988_41012 = scaleMat;G__40988_41012.makeScale(xs,ys,(1));
var G__40989_41013 = tras;G__40989_41013.makeTranslation((cx + x),(cy + y),(0));
G__40989_41013.multiply(rotMat);
G__40989_41013.multiply(scaleMat);
var G__40990_41014 = colorTx;G__40990_41014.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40991 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40991__$1 = (cljs.core.truth_(texObj_41010)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_41010,(0)], null)], null),G__40991):G__40991);return G__40991__$1;
})());
if(cljs.core.truth_(texObj_41010))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40992_41015 = cljs.core._EQ_;var expr__40993_41016 = blending;if(cljs.core.truth_(pred__40992_41015.call(null,"normal",expr__40993_41016)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40992_41015.call(null,"add",expr__40993_41016)))
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
var G__41017 = cljs.core.next.call(null,seq__40967__$1);
var G__41018 = null;
var G__41019 = (0);
var G__41020 = (0);
seq__40967 = G__41017;
chunk__40968 = G__41018;
count__40969 = G__41019;
i__40970 = G__41020;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__40963,map__40963__$1,ctx,vec__40964,cx,cy,timer,map__40965,map__40965__$1,ps,vec__40966,br,bg,bb,canvas_dom,mesh,sprite_shader,vec__40960,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__40960,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
