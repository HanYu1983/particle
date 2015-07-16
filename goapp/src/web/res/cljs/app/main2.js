// Compiled by ClojureScript 0.0-2268
goog.provide('app.main2');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('tool.particle');
goog.require('gl.mesh');
goog.require('gl.util');
app.main2.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main2.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__16977){var map__16978 = p__16977;var map__16978__$1 = ((cljs.core.seq_QMARK_.call(null,map__16978))?cljs.core.apply.call(null,cljs.core.hash_map,map__16978):map__16978);var ctx = map__16978__$1;var map__16979 = cljs.core.get.call(null,map__16978__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__16979__$1 = ((cljs.core.seq_QMARK_.call(null,map__16979))?cljs.core.apply.call(null,cljs.core.hash_map,map__16979):map__16979);var ps = cljs.core.get.call(null,map__16979__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__16980_16995 = canvas_ctx;(G__16980_16995["fillStyle"] = "white");
G__16980_16995.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__16980_16995["fillStyle"] = "red");
G__16980_16995.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__16981_16996 = cljs.core.seq.call(null,ps);var chunk__16982_16997 = null;var count__16983_16998 = (0);var i__16984_16999 = (0);while(true){
if((i__16984_16999 < count__16983_16998))
{var map__16985_17000 = cljs.core._nth.call(null,chunk__16982_16997,i__16984_16999);var map__16985_17001__$1 = ((cljs.core.seq_QMARK_.call(null,map__16985_17000))?cljs.core.apply.call(null,cljs.core.hash_map,map__16985_17000):map__16985_17000);var p_17002 = map__16985_17001__$1;var vec__16986_17003 = cljs.core.get.call(null,map__16985_17001__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_17004 = cljs.core.nth.call(null,vec__16986_17003,(0),null);var y_17005 = cljs.core.nth.call(null,vec__16986_17003,(1),null);var rot_17006 = cljs.core.nth.call(null,vec__16986_17003,(2),null);var vec__16987_17007 = cljs.core.get.call(null,map__16985_17001__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_17008 = cljs.core.nth.call(null,vec__16987_17007,(0),null);var ys_17009 = cljs.core.nth.call(null,vec__16987_17007,(1),null);var vec__16988_17010 = cljs.core.get.call(null,map__16985_17001__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_17011 = cljs.core.nth.call(null,vec__16988_17010,(0),null);var g_17012 = cljs.core.nth.call(null,vec__16988_17010,(1),null);var b_17013 = cljs.core.nth.call(null,vec__16988_17010,(2),null);var a_17014 = cljs.core.nth.call(null,vec__16988_17010,(3),null);var G__16989_17015 = canvas_ctx;G__16989_17015.save();
G__16989_17015.translate(x_17004,y_17005);
G__16989_17015.rotate(rot_17006);
(G__16989_17015["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_17011 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_17012 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_17013 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_17014)+")"));
G__16989_17015.fillRect((- (xs_17008 / (2))),(- (ys_17009 / (2))),xs_17008,ys_17009);
G__16989_17015.restore();
{
var G__17016 = seq__16981_16996;
var G__17017 = chunk__16982_16997;
var G__17018 = count__16983_16998;
var G__17019 = (i__16984_16999 + (1));
seq__16981_16996 = G__17016;
chunk__16982_16997 = G__17017;
count__16983_16998 = G__17018;
i__16984_16999 = G__17019;
continue;
}
} else
{var temp__4126__auto___17020 = cljs.core.seq.call(null,seq__16981_16996);if(temp__4126__auto___17020)
{var seq__16981_17021__$1 = temp__4126__auto___17020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16981_17021__$1))
{var c__4307__auto___17022 = cljs.core.chunk_first.call(null,seq__16981_17021__$1);{
var G__17023 = cljs.core.chunk_rest.call(null,seq__16981_17021__$1);
var G__17024 = c__4307__auto___17022;
var G__17025 = cljs.core.count.call(null,c__4307__auto___17022);
var G__17026 = (0);
seq__16981_16996 = G__17023;
chunk__16982_16997 = G__17024;
count__16983_16998 = G__17025;
i__16984_16999 = G__17026;
continue;
}
} else
{var map__16990_17027 = cljs.core.first.call(null,seq__16981_17021__$1);var map__16990_17028__$1 = ((cljs.core.seq_QMARK_.call(null,map__16990_17027))?cljs.core.apply.call(null,cljs.core.hash_map,map__16990_17027):map__16990_17027);var p_17029 = map__16990_17028__$1;var vec__16991_17030 = cljs.core.get.call(null,map__16990_17028__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_17031 = cljs.core.nth.call(null,vec__16991_17030,(0),null);var y_17032 = cljs.core.nth.call(null,vec__16991_17030,(1),null);var rot_17033 = cljs.core.nth.call(null,vec__16991_17030,(2),null);var vec__16992_17034 = cljs.core.get.call(null,map__16990_17028__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_17035 = cljs.core.nth.call(null,vec__16992_17034,(0),null);var ys_17036 = cljs.core.nth.call(null,vec__16992_17034,(1),null);var vec__16993_17037 = cljs.core.get.call(null,map__16990_17028__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_17038 = cljs.core.nth.call(null,vec__16993_17037,(0),null);var g_17039 = cljs.core.nth.call(null,vec__16993_17037,(1),null);var b_17040 = cljs.core.nth.call(null,vec__16993_17037,(2),null);var a_17041 = cljs.core.nth.call(null,vec__16993_17037,(3),null);var G__16994_17042 = canvas_ctx;G__16994_17042.save();
G__16994_17042.translate(x_17031,y_17032);
G__16994_17042.rotate(rot_17033);
(G__16994_17042["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_17038 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_17039 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_17040 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_17041)+")"));
G__16994_17042.fillRect((- (xs_17035 / (2))),(- (ys_17036 / (2))),xs_17035,ys_17036);
G__16994_17042.restore();
{
var G__17043 = cljs.core.next.call(null,seq__16981_17021__$1);
var G__17044 = null;
var G__17045 = (0);
var G__17046 = (0);
seq__16981_16996 = G__17043;
chunk__16982_16997 = G__17044;
count__16983_16998 = G__17045;
i__16984_16999 = G__17046;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj17075 = {};return obj17075;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__17073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__17073,(0),null);var ch = cljs.core.nth.call(null,vec__17073,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__17073,cw,ch){
return (function (p__17076){var map__17077 = p__17076;var map__17077__$1 = ((cljs.core.seq_QMARK_.call(null,map__17077))?cljs.core.apply.call(null,cljs.core.hash_map,map__17077):map__17077);var ctx = map__17077__$1;var timer = cljs.core.get.call(null,map__17077__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__17078 = cljs.core.get.call(null,map__17077__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__17078__$1 = ((cljs.core.seq_QMARK_.call(null,map__17078))?cljs.core.apply.call(null,cljs.core.hash_map,map__17078):map__17078);var ps = cljs.core.get.call(null,map__17078__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___17099 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___17099 == null))
{} else
{var faceImg_17100 = temp__4130__auto___17099;var tex_17101 = app.main2.cacheTex.call(null,gl__$1,faceImg_17100);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_17101,faceImg_17100,temp__4130__auto___17099,map__17077,map__17077__$1,ctx,timer,map__17078,map__17078__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__17073,cw,ch){
return (function (pobj){var seq__17079 = cljs.core.seq.call(null,ps);var chunk__17080 = null;var count__17081 = (0);var i__17082 = (0);while(true){
if((i__17082 < count__17081))
{var map__17083 = cljs.core._nth.call(null,chunk__17080,i__17082);var map__17083__$1 = ((cljs.core.seq_QMARK_.call(null,map__17083))?cljs.core.apply.call(null,cljs.core.hash_map,map__17083):map__17083);var p = map__17083__$1;var vec__17084 = cljs.core.get.call(null,map__17083__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17084,(0),null);var y = cljs.core.nth.call(null,vec__17084,(1),null);var rot = cljs.core.nth.call(null,vec__17084,(2),null);var vec__17085 = cljs.core.get.call(null,map__17083__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__17085,(0),null);var ys = cljs.core.nth.call(null,vec__17085,(1),null);var vec__17086 = cljs.core.get.call(null,map__17083__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__17086,(0),null);var g = cljs.core.nth.call(null,vec__17086,(1),null);var b = cljs.core.nth.call(null,vec__17086,(2),null);var a = cljs.core.nth.call(null,vec__17086,(3),null);var proj_17102 = (function (){var G__17087 = (new THREE.Matrix4());G__17087.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17087;
})();var tras_17103 = (function (){var G__17088 = (new THREE.Matrix4());G__17088.makeTranslation(x,y,(0));
G__17088.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17088.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17088;
})();var texTx_17104 = (function (){var G__17089 = (new THREE.Matrix3());return G__17089;
})();var colorTx_17105 = (function (){var G__17090 = (new THREE.Matrix4());G__17090.makeTranslation(r,g,b);
return G__17090;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_17102.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_17103.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_17101,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_17104.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_17105.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__17106 = seq__17079;
var G__17107 = chunk__17080;
var G__17108 = count__17081;
var G__17109 = (i__17082 + (1));
seq__17079 = G__17106;
chunk__17080 = G__17107;
count__17081 = G__17108;
i__17082 = G__17109;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17079);if(temp__4126__auto__)
{var seq__17079__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17079__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__17079__$1);{
var G__17110 = cljs.core.chunk_rest.call(null,seq__17079__$1);
var G__17111 = c__4307__auto__;
var G__17112 = cljs.core.count.call(null,c__4307__auto__);
var G__17113 = (0);
seq__17079 = G__17110;
chunk__17080 = G__17111;
count__17081 = G__17112;
i__17082 = G__17113;
continue;
}
} else
{var map__17091 = cljs.core.first.call(null,seq__17079__$1);var map__17091__$1 = ((cljs.core.seq_QMARK_.call(null,map__17091))?cljs.core.apply.call(null,cljs.core.hash_map,map__17091):map__17091);var p = map__17091__$1;var vec__17092 = cljs.core.get.call(null,map__17091__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17092,(0),null);var y = cljs.core.nth.call(null,vec__17092,(1),null);var rot = cljs.core.nth.call(null,vec__17092,(2),null);var vec__17093 = cljs.core.get.call(null,map__17091__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__17093,(0),null);var ys = cljs.core.nth.call(null,vec__17093,(1),null);var vec__17094 = cljs.core.get.call(null,map__17091__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__17094,(0),null);var g = cljs.core.nth.call(null,vec__17094,(1),null);var b = cljs.core.nth.call(null,vec__17094,(2),null);var a = cljs.core.nth.call(null,vec__17094,(3),null);var proj_17114 = (function (){var G__17095 = (new THREE.Matrix4());G__17095.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17095;
})();var tras_17115 = (function (){var G__17096 = (new THREE.Matrix4());G__17096.makeTranslation(x,y,(0));
G__17096.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17096.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17096;
})();var texTx_17116 = (function (){var G__17097 = (new THREE.Matrix3());return G__17097;
})();var colorTx_17117 = (function (){var G__17098 = (new THREE.Matrix4());G__17098.makeTranslation(r,g,b);
return G__17098;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_17114.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_17115.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_17101,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_17116.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_17117.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__17118 = cljs.core.next.call(null,seq__17079__$1);
var G__17119 = null;
var G__17120 = (0);
var G__17121 = (0);
seq__17079 = G__17118;
chunk__17080 = G__17119;
count__17081 = G__17120;
i__17082 = G__17121;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_17101,faceImg_17100,temp__4130__auto___17099,map__17077,map__17077__$1,ctx,timer,map__17078,map__17078__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__17073,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__17073,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_17368){var state_val_17369 = (state_17368[(1)]);if((state_val_17369 === (2)))
{var inst_17366 = (state_17368[(2)]);var state_17368__$1 = state_17368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17368__$1,inst_17366);
} else
{if((state_val_17369 === (1)))
{var state_17368__$1 = state_17368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17368__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17373 = [null,null,null,null,null,null,null];(statearr_17373[(0)] = state_machine__6188__auto__);
(statearr_17373[(1)] = (1));
return statearr_17373;
});
var state_machine__6188__auto____1 = (function (state_17368){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17368);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object))
{var ex__6191__auto__ = e17374;var statearr_17375_17607 = state_17368;(statearr_17375_17607[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17368);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17608 = state_17368;
state_17368 = G__17608;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17368){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17376 = f__6203__auto__.call(null);(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___17609 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17609,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17609,onView,onModel,onTick,mspf){
return (function (state_17385){var state_val_17386 = (state_17385[(1)]);if((state_val_17386 === (4)))
{var inst_17379 = (state_17385[(2)]);var inst_17380 = common.onModel.onNext(inst_17379);var state_17385__$1 = (function (){var statearr_17387 = state_17385;(statearr_17387[(7)] = inst_17380);
return statearr_17387;
})();var statearr_17388_17610 = state_17385__$1;(statearr_17388_17610[(2)] = null);
(statearr_17388_17610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17386 === (3)))
{var inst_17383 = (state_17385[(2)]);var state_17385__$1 = state_17385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17385__$1,inst_17383);
} else
{if((state_val_17386 === (2)))
{var state_17385__$1 = state_17385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17385__$1,(4),onModel);
} else
{if((state_val_17386 === (1)))
{var state_17385__$1 = state_17385;var statearr_17389_17611 = state_17385__$1;(statearr_17389_17611[(2)] = null);
(statearr_17389_17611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___17609,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17609,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17393 = [null,null,null,null,null,null,null,null];(statearr_17393[(0)] = state_machine__6188__auto__);
(statearr_17393[(1)] = (1));
return statearr_17393;
});
var state_machine__6188__auto____1 = (function (state_17385){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17385);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17394){if((e17394 instanceof Object))
{var ex__6191__auto__ = e17394;var statearr_17395_17612 = state_17385;(statearr_17395_17612[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17613 = state_17385;
state_17385 = G__17613;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17385){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17609,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17396 = f__6203__auto__.call(null);(statearr_17396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17609);
return statearr_17396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17609,onView,onModel,onTick,mspf))
);
var c__6202__auto___17614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17614,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17614,onView,onModel,onTick,mspf){
return (function (state_17415){var state_val_17416 = (state_17415[(1)]);if((state_val_17416 === (5)))
{var inst_17406 = (state_17415[(7)]);var inst_17399 = (state_17415[(8)]);var inst_17410 = (state_17415[(2)]);var tmp17417 = inst_17399;var inst_17399__$1 = tmp17417;var inst_17400 = inst_17406;var state_17415__$1 = (function (){var statearr_17418 = state_17415;(statearr_17418[(9)] = inst_17410);
(statearr_17418[(10)] = inst_17400);
(statearr_17418[(8)] = inst_17399__$1);
return statearr_17418;
})();var statearr_17419_17615 = state_17415__$1;(statearr_17419_17615[(2)] = null);
(statearr_17419_17615[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17416 === (4)))
{var inst_17406 = (state_17415[(7)]);var inst_17400 = (state_17415[(10)]);var inst_17404 = (state_17415[(2)]);var inst_17405 = (new Date());var inst_17406__$1 = inst_17405.getTime();var inst_17407 = (inst_17406__$1 - inst_17400);var inst_17408 = (inst_17407 / (1000));var state_17415__$1 = (function (){var statearr_17420 = state_17415;(statearr_17420[(11)] = inst_17404);
(statearr_17420[(7)] = inst_17406__$1);
return statearr_17420;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17415__$1,(5),onTick,inst_17408);
} else
{if((state_val_17416 === (3)))
{var inst_17413 = (state_17415[(2)]);var state_17415__$1 = state_17415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17415__$1,inst_17413);
} else
{if((state_val_17416 === (2)))
{var inst_17399 = (state_17415[(8)]);var inst_17402 = cljs.core.async.timeout.call(null,inst_17399);var state_17415__$1 = state_17415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17415__$1,(4),inst_17402);
} else
{if((state_val_17416 === (1)))
{var inst_17397 = (new Date());var inst_17398 = inst_17397.getTime();var inst_17399 = mspf;var inst_17400 = inst_17398;var state_17415__$1 = (function (){var statearr_17421 = state_17415;(statearr_17421[(10)] = inst_17400);
(statearr_17421[(8)] = inst_17399);
return statearr_17421;
})();var statearr_17422_17616 = state_17415__$1;(statearr_17422_17616[(2)] = null);
(statearr_17422_17616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___17614,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17614,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17426 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17426[(0)] = state_machine__6188__auto__);
(statearr_17426[(1)] = (1));
return statearr_17426;
});
var state_machine__6188__auto____1 = (function (state_17415){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17415);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17427){if((e17427 instanceof Object))
{var ex__6191__auto__ = e17427;var statearr_17428_17617 = state_17415;(statearr_17428_17617[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17618 = state_17415;
state_17415 = G__17618;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17415){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17614,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17429 = f__6203__auto__.call(null);(statearr_17429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17614);
return statearr_17429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17614,onView,onModel,onTick,mspf))
);
var c__6202__auto___17619 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17619,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17619,onView,onModel,onTick,mspf){
return (function (state_17463){var state_val_17464 = (state_17463[(1)]);if((state_val_17464 === (5)))
{var inst_17461 = (state_17463[(2)]);var state_17463__$1 = state_17463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17463__$1,inst_17461);
} else
{if((state_val_17464 === (4)))
{var inst_17442 = (state_17463[(2)]);var inst_17449 = [(0),(0),(0)];var inst_17450 = [(10),(20)];var inst_17451 = [(100),(0),3.14];var inst_17452 = {"position":inst_17449,"size":inst_17450,"vel":inst_17451};var inst_17453 = [inst_17452];var inst_17454 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_17453};var inst_17455 = [(30),(10)];var inst_17456 = [(300),(300),(0)];var inst_17457 = [(100),(100),(0)];var inst_17458 = {"id":"x1","emit":inst_17454,"size":inst_17455,"pos":inst_17456,"vel":inst_17457};var inst_17459 = ["edit-particle",inst_17458];var state_17463__$1 = (function (){var statearr_17465 = state_17463;(statearr_17465[(7)] = inst_17442);
return statearr_17465;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17463__$1,(5),onView,inst_17459);
} else
{if((state_val_17464 === (3)))
{var inst_17439 = (state_17463[(2)]);var inst_17440 = cljs.core.async.timeout.call(null,(1100));var state_17463__$1 = (function (){var statearr_17466 = state_17463;(statearr_17466[(8)] = inst_17439);
return statearr_17466;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17463__$1,(4),inst_17440);
} else
{if((state_val_17464 === (2)))
{var inst_17432 = (state_17463[(2)]);var inst_17435 = [(300),(300),(0)];var inst_17436 = {"id":"x1","pos":inst_17435};var inst_17437 = ["edit-particle",inst_17436];var state_17463__$1 = (function (){var statearr_17467 = state_17463;(statearr_17467[(9)] = inst_17432);
return statearr_17467;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17463__$1,(3),onView,inst_17437);
} else
{if((state_val_17464 === (1)))
{var inst_17430 = cljs.core.async.timeout.call(null,(1000));var state_17463__$1 = state_17463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17463__$1,(2),inst_17430);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___17619,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17619,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17471 = [null,null,null,null,null,null,null,null,null,null];(statearr_17471[(0)] = state_machine__6188__auto__);
(statearr_17471[(1)] = (1));
return statearr_17471;
});
var state_machine__6188__auto____1 = (function (state_17463){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17463);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17472){if((e17472 instanceof Object))
{var ex__6191__auto__ = e17472;var statearr_17473_17620 = state_17463;(statearr_17473_17620[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17621 = state_17463;
state_17463 = G__17621;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17463){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17619,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17474 = f__6203__auto__.call(null);(statearr_17474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17619);
return statearr_17474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17619,onView,onModel,onTick,mspf))
);
var c__6202__auto___17622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___17622,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___17622,onView,onModel,onTick,mspf){
return (function (state_17567){var state_val_17568 = (state_17567[(1)]);if((state_val_17568 === (7)))
{var inst_17562 = (state_17567[(2)]);var inst_17482 = inst_17562;var state_17567__$1 = (function (){var statearr_17569 = state_17567;(statearr_17569[(7)] = inst_17482);
return statearr_17569;
})();var statearr_17570_17623 = state_17567__$1;(statearr_17570_17623[(2)] = null);
(statearr_17570_17623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (20)))
{var inst_17482 = (state_17567[(7)]);var state_17567__$1 = state_17567;var statearr_17571_17624 = state_17567__$1;(statearr_17571_17624[(2)] = inst_17482);
(statearr_17571_17624[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (1)))
{var inst_17475 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_17476 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17477 = cljs.core.List.EMPTY;var inst_17478 = [inst_17477];var inst_17479 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17476,inst_17478);var inst_17480 = [(0),inst_17479];var inst_17481 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17475,inst_17480);var inst_17482 = inst_17481;var state_17567__$1 = (function (){var statearr_17572 = state_17567;(statearr_17572[(7)] = inst_17482);
return statearr_17572;
})();var statearr_17573_17625 = state_17567__$1;(statearr_17573_17625[(2)] = null);
(statearr_17573_17625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (4)))
{var inst_17490 = (state_17567[(8)]);var inst_17488 = (state_17567[(9)]);var inst_17488__$1 = (state_17567[(2)]);var inst_17489 = cljs.core.nth.call(null,inst_17488__$1,(0),null);var inst_17490__$1 = cljs.core.nth.call(null,inst_17488__$1,(1),null);var inst_17494 = cljs.core._EQ_.call(null,onTick,inst_17490__$1);var state_17567__$1 = (function (){var statearr_17574 = state_17567;(statearr_17574[(8)] = inst_17490__$1);
(statearr_17574[(9)] = inst_17488__$1);
(statearr_17574[(10)] = inst_17489);
return statearr_17574;
})();if(inst_17494)
{var statearr_17575_17626 = state_17567__$1;(statearr_17575_17626[(1)] = (5));
} else
{var statearr_17576_17627 = state_17567__$1;(statearr_17576_17627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (15)))
{var inst_17517 = (state_17567[(11)]);var inst_17482 = (state_17567[(7)]);var inst_17534 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17535 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17534,null));var inst_17536 = cljs.core.update_in.call(null,inst_17482,inst_17535,cljs.core.conj,inst_17517);var state_17567__$1 = state_17567;var statearr_17577_17628 = state_17567__$1;(statearr_17577_17628[(2)] = inst_17536);
(statearr_17577_17628[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (21)))
{var inst_17490 = (state_17567[(8)]);var inst_17554 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17490));var inst_17555 = (new Error(inst_17554));var inst_17556 = (function(){throw inst_17555})();var state_17567__$1 = state_17567;var statearr_17578_17629 = state_17567__$1;(statearr_17578_17629[(2)] = inst_17556);
(statearr_17578_17629[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (13)))
{var inst_17549 = (state_17567[(2)]);var state_17567__$1 = state_17567;var statearr_17579_17630 = state_17567__$1;(statearr_17579_17630[(2)] = inst_17549);
(statearr_17579_17630[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (22)))
{var inst_17558 = (state_17567[(2)]);var state_17567__$1 = state_17567;var statearr_17580_17631 = state_17567__$1;(statearr_17580_17631[(2)] = inst_17558);
(statearr_17580_17631[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (6)))
{var inst_17490 = (state_17567[(8)]);var inst_17502 = cljs.core._EQ_.call(null,onView,inst_17490);var state_17567__$1 = state_17567;if(inst_17502)
{var statearr_17581_17632 = state_17567__$1;(statearr_17581_17632[(1)] = (8));
} else
{var statearr_17582_17633 = state_17567__$1;(statearr_17582_17633[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (17)))
{var inst_17482 = (state_17567[(7)]);var state_17567__$1 = state_17567;var statearr_17583_17634 = state_17567__$1;(statearr_17583_17634[(2)] = inst_17482);
(statearr_17583_17634[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (3)))
{var inst_17565 = (state_17567[(2)]);var state_17567__$1 = state_17567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17567__$1,inst_17565);
} else
{if((state_val_17568 === (12)))
{var inst_17504 = (state_17567[(12)]);var inst_17540 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_17504);var state_17567__$1 = state_17567;if(inst_17540)
{var statearr_17584_17635 = state_17567__$1;(statearr_17584_17635[(1)] = (17));
} else
{var statearr_17585_17636 = state_17567__$1;(statearr_17585_17636[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (2)))
{var inst_17485 = [onView,onTick];var inst_17486 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17485,null));var state_17567__$1 = state_17567;return cljs.core.async.ioc_alts_BANG_.call(null,state_17567__$1,(4),inst_17486);
} else
{if((state_val_17568 === (19)))
{var inst_17547 = (state_17567[(2)]);var state_17567__$1 = state_17567;var statearr_17586_17637 = state_17567__$1;(statearr_17586_17637[(2)] = inst_17547);
(statearr_17586_17637[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (11)))
{var inst_17490 = (state_17567[(8)]);var inst_17505 = (state_17567[(13)]);var inst_17516 = (state_17567[(14)]);var inst_17488 = (state_17567[(9)]);var inst_17489 = (state_17567[(10)]);var inst_17482 = (state_17567[(7)]);var inst_17504 = (state_17567[(12)]);var inst_17511 = (function (){var ctx = inst_17482;var pred__17506 = cljs.core._EQ_;var pred__17491 = cljs.core._EQ_;var partInfo = inst_17505;var v = inst_17489;var params = inst_17505;var expr__17507 = inst_17504;var ch = inst_17490;var event = inst_17504;var expr__17492 = inst_17490;var vec__17484 = inst_17488;return ((function (ctx,pred__17506,pred__17491,partInfo,v,params,expr__17507,ch,event,expr__17492,vec__17484,inst_17490,inst_17505,inst_17516,inst_17488,inst_17489,inst_17482,inst_17504,state_val_17568,c__6202__auto___17622,onView,onModel,onTick,mspf){
return (function (p1__17122_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17122_SHARP_),partInfo.id);
});
;})(ctx,pred__17506,pred__17491,partInfo,v,params,expr__17507,ch,event,expr__17492,vec__17484,inst_17490,inst_17505,inst_17516,inst_17488,inst_17489,inst_17482,inst_17504,state_val_17568,c__6202__auto___17622,onView,onModel,onTick,mspf))
})();var inst_17512 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17513 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17512,null));var inst_17514 = cljs.core.get_in.call(null,inst_17482,inst_17513);var inst_17515 = cljs.core.filter.call(null,inst_17511,inst_17514);var inst_17516__$1 = cljs.core.first.call(null,inst_17515);var inst_17517 = tool.particle.jsobj__GT_particle.call(null,inst_17505);var inst_17518 = cljs.core.some_QMARK_.call(null,inst_17516__$1);var state_17567__$1 = (function (){var statearr_17587 = state_17567;(statearr_17587[(14)] = inst_17516__$1);
(statearr_17587[(11)] = inst_17517);
return statearr_17587;
})();if(inst_17518)
{var statearr_17588_17638 = state_17567__$1;(statearr_17588_17638[(1)] = (14));
} else
{var statearr_17589_17639 = state_17567__$1;(statearr_17589_17639[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (9)))
{var inst_17490 = (state_17567[(8)]);var inst_17551 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_17490);var state_17567__$1 = state_17567;if(inst_17551)
{var statearr_17590_17640 = state_17567__$1;(statearr_17590_17640[(1)] = (20));
} else
{var statearr_17591_17641 = state_17567__$1;(statearr_17591_17641[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (5)))
{var inst_17489 = (state_17567[(10)]);var inst_17482 = (state_17567[(7)]);var inst_17496 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_17497 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17496,null));var inst_17498 = cljs.core.partial.call(null,tool.particle.update,inst_17489);var inst_17499 = cljs.core.update_in.call(null,inst_17482,inst_17497,inst_17498);var inst_17500 = app.main2.draw2D.call(null,inst_17499);var state_17567__$1 = state_17567;var statearr_17592_17642 = state_17567__$1;(statearr_17592_17642[(2)] = inst_17500);
(statearr_17592_17642[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (14)))
{var inst_17516 = (state_17567[(14)]);var inst_17517 = (state_17567[(11)]);var inst_17482 = (state_17567[(7)]);var inst_17520 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_17521 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17520,null));var inst_17522 = [inst_17516];var inst_17523 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_17524 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_17516);var inst_17525 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_17516);var inst_17526 = [inst_17524,inst_17525];var inst_17527 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17523,inst_17526);var inst_17528 = cljs.core.merge.call(null,inst_17517,inst_17527);var inst_17529 = [inst_17528];var inst_17530 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17522,inst_17529);var inst_17531 = cljs.core.partial.call(null,cljs.core.replace,inst_17530);var inst_17532 = cljs.core.update_in.call(null,inst_17482,inst_17521,inst_17531);var state_17567__$1 = state_17567;var statearr_17593_17643 = state_17567__$1;(statearr_17593_17643[(2)] = inst_17532);
(statearr_17593_17643[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (16)))
{var inst_17538 = (state_17567[(2)]);var state_17567__$1 = state_17567;var statearr_17594_17644 = state_17567__$1;(statearr_17594_17644[(2)] = inst_17538);
(statearr_17594_17644[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (10)))
{var inst_17560 = (state_17567[(2)]);var state_17567__$1 = state_17567;var statearr_17595_17645 = state_17567__$1;(statearr_17595_17645[(2)] = inst_17560);
(statearr_17595_17645[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (18)))
{var inst_17504 = (state_17567[(12)]);var inst_17543 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17504));var inst_17544 = (new Error(inst_17543));var inst_17545 = (function(){throw inst_17544})();var state_17567__$1 = state_17567;var statearr_17596_17646 = state_17567__$1;(statearr_17596_17646[(2)] = inst_17545);
(statearr_17596_17646[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17568 === (8)))
{var inst_17489 = (state_17567[(10)]);var inst_17504 = (state_17567[(12)]);var inst_17504__$1 = (inst_17489[(0)]);var inst_17505 = (inst_17489[(1)]);var inst_17509 = cljs.core._EQ_.call(null,"edit-particle",inst_17504__$1);var state_17567__$1 = (function (){var statearr_17597 = state_17567;(statearr_17597[(13)] = inst_17505);
(statearr_17597[(12)] = inst_17504__$1);
return statearr_17597;
})();if(inst_17509)
{var statearr_17598_17647 = state_17567__$1;(statearr_17598_17647[(1)] = (11));
} else
{var statearr_17599_17648 = state_17567__$1;(statearr_17599_17648[(1)] = (12));
}
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
}
}
});})(c__6202__auto___17622,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___17622,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17603[(0)] = state_machine__6188__auto__);
(statearr_17603[(1)] = (1));
return statearr_17603;
});
var state_machine__6188__auto____1 = (function (state_17567){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17567);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17604){if((e17604 instanceof Object))
{var ex__6191__auto__ = e17604;var statearr_17605_17649 = state_17567;(statearr_17605_17649[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17567);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17650 = state_17567;
state_17567 = G__17650;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17567){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___17622,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_17606 = f__6203__auto__.call(null);(statearr_17606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___17622);
return statearr_17606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___17622,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
