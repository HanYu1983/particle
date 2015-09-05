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
return (function (p__42861){var map__42862 = p__42861;var map__42862__$1 = ((cljs.core.seq_QMARK_.call(null,map__42862))?cljs.core.apply.call(null,cljs.core.hash_map,map__42862):map__42862);var ctx = map__42862__$1;var map__42863 = cljs.core.get.call(null,map__42862__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__42863__$1 = ((cljs.core.seq_QMARK_.call(null,map__42863))?cljs.core.apply.call(null,cljs.core.hash_map,map__42863):map__42863);var ps = cljs.core.get.call(null,map__42863__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__42864_42879 = canvas_ctx;(G__42864_42879["fillStyle"] = "white");
G__42864_42879.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__42864_42879["fillStyle"] = "red");
G__42864_42879.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__42865_42880 = cljs.core.seq.call(null,ps);var chunk__42866_42881 = null;var count__42867_42882 = (0);var i__42868_42883 = (0);while(true){
if((i__42868_42883 < count__42867_42882))
{var map__42869_42884 = cljs.core._nth.call(null,chunk__42866_42881,i__42868_42883);var map__42869_42885__$1 = ((cljs.core.seq_QMARK_.call(null,map__42869_42884))?cljs.core.apply.call(null,cljs.core.hash_map,map__42869_42884):map__42869_42884);var p_42886 = map__42869_42885__$1;var vec__42870_42887 = cljs.core.get.call(null,map__42869_42885__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_42888 = cljs.core.nth.call(null,vec__42870_42887,(0),null);var y_42889 = cljs.core.nth.call(null,vec__42870_42887,(1),null);var rot_42890 = cljs.core.nth.call(null,vec__42870_42887,(2),null);var vec__42871_42891 = cljs.core.get.call(null,map__42869_42885__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_42892 = cljs.core.nth.call(null,vec__42871_42891,(0),null);var ys_42893 = cljs.core.nth.call(null,vec__42871_42891,(1),null);var vec__42872_42894 = cljs.core.get.call(null,map__42869_42885__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_42895 = cljs.core.nth.call(null,vec__42872_42894,(0),null);var g_42896 = cljs.core.nth.call(null,vec__42872_42894,(1),null);var b_42897 = cljs.core.nth.call(null,vec__42872_42894,(2),null);var a_42898 = cljs.core.nth.call(null,vec__42872_42894,(3),null);var G__42873_42899 = canvas_ctx;G__42873_42899.save();
G__42873_42899.translate(x_42888,y_42889);
G__42873_42899.rotate(rot_42890);
(G__42873_42899["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_42895 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_42896 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_42897 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_42898)+")"));
G__42873_42899.fillRect((- (xs_42892 / (2))),(- (ys_42893 / (2))),xs_42892,ys_42893);
G__42873_42899.restore();
{
var G__42900 = seq__42865_42880;
var G__42901 = chunk__42866_42881;
var G__42902 = count__42867_42882;
var G__42903 = (i__42868_42883 + (1));
seq__42865_42880 = G__42900;
chunk__42866_42881 = G__42901;
count__42867_42882 = G__42902;
i__42868_42883 = G__42903;
continue;
}
} else
{var temp__4126__auto___42904 = cljs.core.seq.call(null,seq__42865_42880);if(temp__4126__auto___42904)
{var seq__42865_42905__$1 = temp__4126__auto___42904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42865_42905__$1))
{var c__4307__auto___42906 = cljs.core.chunk_first.call(null,seq__42865_42905__$1);{
var G__42907 = cljs.core.chunk_rest.call(null,seq__42865_42905__$1);
var G__42908 = c__4307__auto___42906;
var G__42909 = cljs.core.count.call(null,c__4307__auto___42906);
var G__42910 = (0);
seq__42865_42880 = G__42907;
chunk__42866_42881 = G__42908;
count__42867_42882 = G__42909;
i__42868_42883 = G__42910;
continue;
}
} else
{var map__42874_42911 = cljs.core.first.call(null,seq__42865_42905__$1);var map__42874_42912__$1 = ((cljs.core.seq_QMARK_.call(null,map__42874_42911))?cljs.core.apply.call(null,cljs.core.hash_map,map__42874_42911):map__42874_42911);var p_42913 = map__42874_42912__$1;var vec__42875_42914 = cljs.core.get.call(null,map__42874_42912__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_42915 = cljs.core.nth.call(null,vec__42875_42914,(0),null);var y_42916 = cljs.core.nth.call(null,vec__42875_42914,(1),null);var rot_42917 = cljs.core.nth.call(null,vec__42875_42914,(2),null);var vec__42876_42918 = cljs.core.get.call(null,map__42874_42912__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_42919 = cljs.core.nth.call(null,vec__42876_42918,(0),null);var ys_42920 = cljs.core.nth.call(null,vec__42876_42918,(1),null);var vec__42877_42921 = cljs.core.get.call(null,map__42874_42912__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_42922 = cljs.core.nth.call(null,vec__42877_42921,(0),null);var g_42923 = cljs.core.nth.call(null,vec__42877_42921,(1),null);var b_42924 = cljs.core.nth.call(null,vec__42877_42921,(2),null);var a_42925 = cljs.core.nth.call(null,vec__42877_42921,(3),null);var G__42878_42926 = canvas_ctx;G__42878_42926.save();
G__42878_42926.translate(x_42915,y_42916);
G__42878_42926.rotate(rot_42917);
(G__42878_42926["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_42922 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_42923 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_42924 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_42925)+")"));
G__42878_42926.fillRect((- (xs_42919 / (2))),(- (ys_42920 / (2))),xs_42919,ys_42920);
G__42878_42926.restore();
{
var G__42927 = cljs.core.next.call(null,seq__42865_42905__$1);
var G__42928 = null;
var G__42929 = (0);
var G__42930 = (0);
seq__42865_42880 = G__42927;
chunk__42866_42881 = G__42928;
count__42867_42882 = G__42929;
i__42868_42883 = G__42930;
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
app.particle.draw.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj42961 = {};return obj42961;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__42959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__42959,(0),null);var ch = cljs.core.nth.call(null,vec__42959,(1),null);var proj = (function (){var G__42962 = (new THREE.Matrix4());G__42962.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__42962;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__42959,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__42963){var map__42964 = p__42963;var map__42964__$1 = ((cljs.core.seq_QMARK_.call(null,map__42964))?cljs.core.apply.call(null,cljs.core.hash_map,map__42964):map__42964);var ctx = map__42964__$1;var vec__42965 = cljs.core.get.call(null,map__42964__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__42965,(0),null);var cy = cljs.core.nth.call(null,vec__42965,(1),null);var timer = cljs.core.get.call(null,map__42964__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__42966 = cljs.core.get.call(null,map__42964__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__42966__$1 = ((cljs.core.seq_QMARK_.call(null,map__42966))?cljs.core.apply.call(null,cljs.core.hash_map,map__42966):map__42966);var ps = cljs.core.get.call(null,map__42966__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__42964,map__42964__$1,ctx,vec__42965,cx,cy,timer,map__42966,map__42966__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__42959,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){var seq__42967 = cljs.core.seq.call(null,ps);var chunk__42968 = null;var count__42969 = (0);var i__42970 = (0);while(true){
if((i__42970 < count__42969))
{var map__42971 = cljs.core._nth.call(null,chunk__42968,i__42970);var map__42971__$1 = ((cljs.core.seq_QMARK_.call(null,map__42971))?cljs.core.apply.call(null,cljs.core.hash_map,map__42971):map__42971);var p = map__42971__$1;var vec__42972 = cljs.core.get.call(null,map__42971__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__42972,(0),null);var y = cljs.core.nth.call(null,vec__42972,(1),null);var rot = cljs.core.nth.call(null,vec__42972,(2),null);var vec__42973 = cljs.core.get.call(null,map__42971__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__42973,(0),null);var ys = cljs.core.nth.call(null,vec__42973,(1),null);var vec__42974 = cljs.core.get.call(null,map__42971__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__42974,(0),null);var g = cljs.core.nth.call(null,vec__42974,(1),null);var b = cljs.core.nth.call(null,vec__42974,(2),null);var a = cljs.core.nth.call(null,vec__42974,(3),null);var G__42975_42987 = rotMat;G__42975_42987.makeRotationZ(rot);
var G__42976_42988 = scaleMat;G__42976_42988.makeScale(xs,ys,(1));
var G__42977_42989 = tras;G__42977_42989.makeTranslation((cx + x),(cy + y),(0));
G__42977_42989.multiply(rotMat);
G__42977_42989.multiply(scaleMat);
var G__42978_42990 = colorTx;G__42978_42990.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__42991 = seq__42967;
var G__42992 = chunk__42968;
var G__42993 = count__42969;
var G__42994 = (i__42970 + (1));
seq__42967 = G__42991;
chunk__42968 = G__42992;
count__42969 = G__42993;
i__42970 = G__42994;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__42967);if(temp__4126__auto__)
{var seq__42967__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42967__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__42967__$1);{
var G__42995 = cljs.core.chunk_rest.call(null,seq__42967__$1);
var G__42996 = c__4307__auto__;
var G__42997 = cljs.core.count.call(null,c__4307__auto__);
var G__42998 = (0);
seq__42967 = G__42995;
chunk__42968 = G__42996;
count__42969 = G__42997;
i__42970 = G__42998;
continue;
}
} else
{var map__42979 = cljs.core.first.call(null,seq__42967__$1);var map__42979__$1 = ((cljs.core.seq_QMARK_.call(null,map__42979))?cljs.core.apply.call(null,cljs.core.hash_map,map__42979):map__42979);var p = map__42979__$1;var vec__42980 = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__42980,(0),null);var y = cljs.core.nth.call(null,vec__42980,(1),null);var rot = cljs.core.nth.call(null,vec__42980,(2),null);var vec__42981 = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__42981,(0),null);var ys = cljs.core.nth.call(null,vec__42981,(1),null);var vec__42982 = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__42982,(0),null);var g = cljs.core.nth.call(null,vec__42982,(1),null);var b = cljs.core.nth.call(null,vec__42982,(2),null);var a = cljs.core.nth.call(null,vec__42982,(3),null);var G__42983_42999 = rotMat;G__42983_42999.makeRotationZ(rot);
var G__42984_43000 = scaleMat;G__42984_43000.makeScale(xs,ys,(1));
var G__42985_43001 = tras;G__42985_43001.makeTranslation((cx + x),(cy + y),(0));
G__42985_43001.multiply(rotMat);
G__42985_43001.multiply(scaleMat);
var G__42986_43002 = colorTx;G__42986_43002.makeTranslation(r,g,b);
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__43003 = cljs.core.next.call(null,seq__42967__$1);
var G__43004 = null;
var G__43005 = (0);
var G__43006 = (0);
seq__42967 = G__43003;
chunk__42968 = G__43004;
count__42969 = G__43005;
i__42970 = G__43006;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__42964,map__42964__$1,ctx,vec__42965,cx,cy,timer,map__42966,map__42966__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__42959,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__42959,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
