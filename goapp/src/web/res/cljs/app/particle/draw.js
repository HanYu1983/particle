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
return (function (p__136815){var map__136816 = p__136815;var map__136816__$1 = ((cljs.core.seq_QMARK_.call(null,map__136816))?cljs.core.apply.call(null,cljs.core.hash_map,map__136816):map__136816);var ctx = map__136816__$1;var map__136817 = cljs.core.get.call(null,map__136816__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__136817__$1 = ((cljs.core.seq_QMARK_.call(null,map__136817))?cljs.core.apply.call(null,cljs.core.hash_map,map__136817):map__136817);var ps = cljs.core.get.call(null,map__136817__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__136818_136833 = canvas_ctx;(G__136818_136833["fillStyle"] = "white");
G__136818_136833.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__136818_136833["fillStyle"] = "red");
G__136818_136833.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__136819_136834 = cljs.core.seq.call(null,ps);var chunk__136820_136835 = null;var count__136821_136836 = (0);var i__136822_136837 = (0);while(true){
if((i__136822_136837 < count__136821_136836))
{var map__136823_136838 = cljs.core._nth.call(null,chunk__136820_136835,i__136822_136837);var map__136823_136839__$1 = ((cljs.core.seq_QMARK_.call(null,map__136823_136838))?cljs.core.apply.call(null,cljs.core.hash_map,map__136823_136838):map__136823_136838);var p_136840 = map__136823_136839__$1;var vec__136824_136841 = cljs.core.get.call(null,map__136823_136839__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_136842 = cljs.core.nth.call(null,vec__136824_136841,(0),null);var y_136843 = cljs.core.nth.call(null,vec__136824_136841,(1),null);var rot_136844 = cljs.core.nth.call(null,vec__136824_136841,(2),null);var vec__136825_136845 = cljs.core.get.call(null,map__136823_136839__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_136846 = cljs.core.nth.call(null,vec__136825_136845,(0),null);var ys_136847 = cljs.core.nth.call(null,vec__136825_136845,(1),null);var vec__136826_136848 = cljs.core.get.call(null,map__136823_136839__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_136849 = cljs.core.nth.call(null,vec__136826_136848,(0),null);var g_136850 = cljs.core.nth.call(null,vec__136826_136848,(1),null);var b_136851 = cljs.core.nth.call(null,vec__136826_136848,(2),null);var a_136852 = cljs.core.nth.call(null,vec__136826_136848,(3),null);var G__136827_136853 = canvas_ctx;G__136827_136853.save();
G__136827_136853.translate(x_136842,y_136843);
G__136827_136853.rotate(rot_136844);
(G__136827_136853["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_136849 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_136850 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_136851 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_136852)+")"));
G__136827_136853.fillRect((- (xs_136846 / (2))),(- (ys_136847 / (2))),xs_136846,ys_136847);
G__136827_136853.restore();
{
var G__136854 = seq__136819_136834;
var G__136855 = chunk__136820_136835;
var G__136856 = count__136821_136836;
var G__136857 = (i__136822_136837 + (1));
seq__136819_136834 = G__136854;
chunk__136820_136835 = G__136855;
count__136821_136836 = G__136856;
i__136822_136837 = G__136857;
continue;
}
} else
{var temp__4126__auto___136858 = cljs.core.seq.call(null,seq__136819_136834);if(temp__4126__auto___136858)
{var seq__136819_136859__$1 = temp__4126__auto___136858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136819_136859__$1))
{var c__4307__auto___136860 = cljs.core.chunk_first.call(null,seq__136819_136859__$1);{
var G__136861 = cljs.core.chunk_rest.call(null,seq__136819_136859__$1);
var G__136862 = c__4307__auto___136860;
var G__136863 = cljs.core.count.call(null,c__4307__auto___136860);
var G__136864 = (0);
seq__136819_136834 = G__136861;
chunk__136820_136835 = G__136862;
count__136821_136836 = G__136863;
i__136822_136837 = G__136864;
continue;
}
} else
{var map__136828_136865 = cljs.core.first.call(null,seq__136819_136859__$1);var map__136828_136866__$1 = ((cljs.core.seq_QMARK_.call(null,map__136828_136865))?cljs.core.apply.call(null,cljs.core.hash_map,map__136828_136865):map__136828_136865);var p_136867 = map__136828_136866__$1;var vec__136829_136868 = cljs.core.get.call(null,map__136828_136866__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_136869 = cljs.core.nth.call(null,vec__136829_136868,(0),null);var y_136870 = cljs.core.nth.call(null,vec__136829_136868,(1),null);var rot_136871 = cljs.core.nth.call(null,vec__136829_136868,(2),null);var vec__136830_136872 = cljs.core.get.call(null,map__136828_136866__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_136873 = cljs.core.nth.call(null,vec__136830_136872,(0),null);var ys_136874 = cljs.core.nth.call(null,vec__136830_136872,(1),null);var vec__136831_136875 = cljs.core.get.call(null,map__136828_136866__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_136876 = cljs.core.nth.call(null,vec__136831_136875,(0),null);var g_136877 = cljs.core.nth.call(null,vec__136831_136875,(1),null);var b_136878 = cljs.core.nth.call(null,vec__136831_136875,(2),null);var a_136879 = cljs.core.nth.call(null,vec__136831_136875,(3),null);var G__136832_136880 = canvas_ctx;G__136832_136880.save();
G__136832_136880.translate(x_136869,y_136870);
G__136832_136880.rotate(rot_136871);
(G__136832_136880["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_136876 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_136877 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_136878 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_136879)+")"));
G__136832_136880.fillRect((- (xs_136873 / (2))),(- (ys_136874 / (2))),xs_136873,ys_136874);
G__136832_136880.restore();
{
var G__136881 = cljs.core.next.call(null,seq__136819_136859__$1);
var G__136882 = null;
var G__136883 = (0);
var G__136884 = (0);
seq__136819_136834 = G__136881;
chunk__136820_136835 = G__136882;
count__136821_136836 = G__136883;
i__136822_136837 = G__136884;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__136913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__136913,(0),null);var ch = cljs.core.nth.call(null,vec__136913,(1),null);var proj = (function (){var G__136914 = (new THREE.Matrix4());G__136914.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__136914;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__136913,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__136915){var map__136916 = p__136915;var map__136916__$1 = ((cljs.core.seq_QMARK_.call(null,map__136916))?cljs.core.apply.call(null,cljs.core.hash_map,map__136916):map__136916);var ctx = map__136916__$1;var vec__136917 = cljs.core.get.call(null,map__136916__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__136917,(0),null);var cy = cljs.core.nth.call(null,vec__136917,(1),null);var timer = cljs.core.get.call(null,map__136916__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__136918 = cljs.core.get.call(null,map__136916__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__136918__$1 = ((cljs.core.seq_QMARK_.call(null,map__136918))?cljs.core.apply.call(null,cljs.core.hash_map,map__136918):map__136918);var ps = cljs.core.get.call(null,map__136918__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__136916,map__136916__$1,ctx,vec__136917,cx,cy,timer,map__136918,map__136918__$1,ps,canvas_dom,mesh,sprite_shader,vec__136913,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__136919 = cljs.core.seq.call(null,ps);var chunk__136920 = null;var count__136921 = (0);var i__136922 = (0);while(true){
if((i__136922 < count__136921))
{var map__136923 = cljs.core._nth.call(null,chunk__136920,i__136922);var map__136923__$1 = ((cljs.core.seq_QMARK_.call(null,map__136923))?cljs.core.apply.call(null,cljs.core.hash_map,map__136923):map__136923);var p = map__136923__$1;var vec__136924 = cljs.core.get.call(null,map__136923__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__136924,(0),null);var y = cljs.core.nth.call(null,vec__136924,(1),null);var rot = cljs.core.nth.call(null,vec__136924,(2),null);var vec__136925 = cljs.core.get.call(null,map__136923__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__136925,(0),null);var ys = cljs.core.nth.call(null,vec__136925,(1),null);var vec__136926 = cljs.core.get.call(null,map__136923__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__136926,(0),null);var g = cljs.core.nth.call(null,vec__136926,(1),null);var b = cljs.core.nth.call(null,vec__136926,(2),null);var a = cljs.core.nth.call(null,vec__136926,(3),null);var tex = cljs.core.get.call(null,map__136923__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_136941 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__136927_136942 = rotMat;G__136927_136942.makeRotationZ(rot);
var G__136928_136943 = scaleMat;G__136928_136943.makeScale(xs,ys,(1));
var G__136929_136944 = tras;G__136929_136944.makeTranslation((cx + x),(cy + y),(0));
G__136929_136944.multiply(rotMat);
G__136929_136944.multiply(scaleMat);
var G__136930_136945 = colorTx;G__136930_136945.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__136931 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__136931__$1 = (cljs.core.truth_(texObj_136941)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_136941,(0)], null)], null),G__136931):G__136931);return G__136931__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__136946 = seq__136919;
var G__136947 = chunk__136920;
var G__136948 = count__136921;
var G__136949 = (i__136922 + (1));
seq__136919 = G__136946;
chunk__136920 = G__136947;
count__136921 = G__136948;
i__136922 = G__136949;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__136919);if(temp__4126__auto__)
{var seq__136919__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136919__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__136919__$1);{
var G__136950 = cljs.core.chunk_rest.call(null,seq__136919__$1);
var G__136951 = c__4307__auto__;
var G__136952 = cljs.core.count.call(null,c__4307__auto__);
var G__136953 = (0);
seq__136919 = G__136950;
chunk__136920 = G__136951;
count__136921 = G__136952;
i__136922 = G__136953;
continue;
}
} else
{var map__136932 = cljs.core.first.call(null,seq__136919__$1);var map__136932__$1 = ((cljs.core.seq_QMARK_.call(null,map__136932))?cljs.core.apply.call(null,cljs.core.hash_map,map__136932):map__136932);var p = map__136932__$1;var vec__136933 = cljs.core.get.call(null,map__136932__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__136933,(0),null);var y = cljs.core.nth.call(null,vec__136933,(1),null);var rot = cljs.core.nth.call(null,vec__136933,(2),null);var vec__136934 = cljs.core.get.call(null,map__136932__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__136934,(0),null);var ys = cljs.core.nth.call(null,vec__136934,(1),null);var vec__136935 = cljs.core.get.call(null,map__136932__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__136935,(0),null);var g = cljs.core.nth.call(null,vec__136935,(1),null);var b = cljs.core.nth.call(null,vec__136935,(2),null);var a = cljs.core.nth.call(null,vec__136935,(3),null);var tex = cljs.core.get.call(null,map__136932__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_136954 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__136936_136955 = rotMat;G__136936_136955.makeRotationZ(rot);
var G__136937_136956 = scaleMat;G__136937_136956.makeScale(xs,ys,(1));
var G__136938_136957 = tras;G__136938_136957.makeTranslation((cx + x),(cy + y),(0));
G__136938_136957.multiply(rotMat);
G__136938_136957.multiply(scaleMat);
var G__136939_136958 = colorTx;G__136939_136958.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__136940 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__136940__$1 = (cljs.core.truth_(texObj_136954)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_136954,(0)], null)], null),G__136940):G__136940);return G__136940__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__136959 = cljs.core.next.call(null,seq__136919__$1);
var G__136960 = null;
var G__136961 = (0);
var G__136962 = (0);
seq__136919 = G__136959;
chunk__136920 = G__136960;
count__136921 = G__136961;
i__136922 = G__136962;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__136916,map__136916__$1,ctx,vec__136917,cx,cy,timer,map__136918,map__136918__$1,ps,canvas_dom,mesh,sprite_shader,vec__136913,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__136913,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
