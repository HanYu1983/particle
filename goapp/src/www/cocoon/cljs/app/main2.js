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
return (function (p__9987){var map__9988 = p__9987;var map__9988__$1 = ((cljs.core.seq_QMARK_.call(null,map__9988))?cljs.core.apply.call(null,cljs.core.hash_map,map__9988):map__9988);var ctx = map__9988__$1;var map__9989 = cljs.core.get.call(null,map__9988__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__9989__$1 = ((cljs.core.seq_QMARK_.call(null,map__9989))?cljs.core.apply.call(null,cljs.core.hash_map,map__9989):map__9989);var ps = cljs.core.get.call(null,map__9989__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__9990_10005 = canvas_ctx;(G__9990_10005["fillStyle"] = "white");
G__9990_10005.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__9990_10005["fillStyle"] = "red");
G__9990_10005.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__9991_10006 = cljs.core.seq.call(null,ps);var chunk__9992_10007 = null;var count__9993_10008 = (0);var i__9994_10009 = (0);while(true){
if((i__9994_10009 < count__9993_10008))
{var map__9995_10010 = cljs.core._nth.call(null,chunk__9992_10007,i__9994_10009);var map__9995_10011__$1 = ((cljs.core.seq_QMARK_.call(null,map__9995_10010))?cljs.core.apply.call(null,cljs.core.hash_map,map__9995_10010):map__9995_10010);var p_10012 = map__9995_10011__$1;var vec__9996_10013 = cljs.core.get.call(null,map__9995_10011__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_10014 = cljs.core.nth.call(null,vec__9996_10013,(0),null);var y_10015 = cljs.core.nth.call(null,vec__9996_10013,(1),null);var rot_10016 = cljs.core.nth.call(null,vec__9996_10013,(2),null);var vec__9997_10017 = cljs.core.get.call(null,map__9995_10011__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_10018 = cljs.core.nth.call(null,vec__9997_10017,(0),null);var ys_10019 = cljs.core.nth.call(null,vec__9997_10017,(1),null);var vec__9998_10020 = cljs.core.get.call(null,map__9995_10011__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_10021 = cljs.core.nth.call(null,vec__9998_10020,(0),null);var g_10022 = cljs.core.nth.call(null,vec__9998_10020,(1),null);var b_10023 = cljs.core.nth.call(null,vec__9998_10020,(2),null);var a_10024 = cljs.core.nth.call(null,vec__9998_10020,(3),null);var G__9999_10025 = canvas_ctx;G__9999_10025.save();
G__9999_10025.translate(x_10014,y_10015);
G__9999_10025.rotate(rot_10016);
(G__9999_10025["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_10021 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_10022 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_10023 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_10024)+")"));
G__9999_10025.fillRect((- (xs_10018 / (2))),(- (ys_10019 / (2))),xs_10018,ys_10019);
G__9999_10025.restore();
{
var G__10026 = seq__9991_10006;
var G__10027 = chunk__9992_10007;
var G__10028 = count__9993_10008;
var G__10029 = (i__9994_10009 + (1));
seq__9991_10006 = G__10026;
chunk__9992_10007 = G__10027;
count__9993_10008 = G__10028;
i__9994_10009 = G__10029;
continue;
}
} else
{var temp__4126__auto___10030 = cljs.core.seq.call(null,seq__9991_10006);if(temp__4126__auto___10030)
{var seq__9991_10031__$1 = temp__4126__auto___10030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9991_10031__$1))
{var c__4307__auto___10032 = cljs.core.chunk_first.call(null,seq__9991_10031__$1);{
var G__10033 = cljs.core.chunk_rest.call(null,seq__9991_10031__$1);
var G__10034 = c__4307__auto___10032;
var G__10035 = cljs.core.count.call(null,c__4307__auto___10032);
var G__10036 = (0);
seq__9991_10006 = G__10033;
chunk__9992_10007 = G__10034;
count__9993_10008 = G__10035;
i__9994_10009 = G__10036;
continue;
}
} else
{var map__10000_10037 = cljs.core.first.call(null,seq__9991_10031__$1);var map__10000_10038__$1 = ((cljs.core.seq_QMARK_.call(null,map__10000_10037))?cljs.core.apply.call(null,cljs.core.hash_map,map__10000_10037):map__10000_10037);var p_10039 = map__10000_10038__$1;var vec__10001_10040 = cljs.core.get.call(null,map__10000_10038__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_10041 = cljs.core.nth.call(null,vec__10001_10040,(0),null);var y_10042 = cljs.core.nth.call(null,vec__10001_10040,(1),null);var rot_10043 = cljs.core.nth.call(null,vec__10001_10040,(2),null);var vec__10002_10044 = cljs.core.get.call(null,map__10000_10038__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_10045 = cljs.core.nth.call(null,vec__10002_10044,(0),null);var ys_10046 = cljs.core.nth.call(null,vec__10002_10044,(1),null);var vec__10003_10047 = cljs.core.get.call(null,map__10000_10038__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_10048 = cljs.core.nth.call(null,vec__10003_10047,(0),null);var g_10049 = cljs.core.nth.call(null,vec__10003_10047,(1),null);var b_10050 = cljs.core.nth.call(null,vec__10003_10047,(2),null);var a_10051 = cljs.core.nth.call(null,vec__10003_10047,(3),null);var G__10004_10052 = canvas_ctx;G__10004_10052.save();
G__10004_10052.translate(x_10041,y_10042);
G__10004_10052.rotate(rot_10043);
(G__10004_10052["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_10048 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_10049 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_10050 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_10051)+")"));
G__10004_10052.fillRect((- (xs_10045 / (2))),(- (ys_10046 / (2))),xs_10045,ys_10046);
G__10004_10052.restore();
{
var G__10053 = cljs.core.next.call(null,seq__9991_10031__$1);
var G__10054 = null;
var G__10055 = (0);
var G__10056 = (0);
seq__9991_10006 = G__10053;
chunk__9992_10007 = G__10054;
count__9993_10008 = G__10055;
i__9994_10009 = G__10056;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj10085 = {};return obj10085;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__10083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__10083,(0),null);var ch = cljs.core.nth.call(null,vec__10083,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__10083,cw,ch){
return (function (p__10086){var map__10087 = p__10086;var map__10087__$1 = ((cljs.core.seq_QMARK_.call(null,map__10087))?cljs.core.apply.call(null,cljs.core.hash_map,map__10087):map__10087);var ctx = map__10087__$1;var timer = cljs.core.get.call(null,map__10087__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__10088 = cljs.core.get.call(null,map__10087__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__10088__$1 = ((cljs.core.seq_QMARK_.call(null,map__10088))?cljs.core.apply.call(null,cljs.core.hash_map,map__10088):map__10088);var ps = cljs.core.get.call(null,map__10088__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___10109 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___10109 == null))
{} else
{var faceImg_10110 = temp__4130__auto___10109;var tex_10111 = app.main2.cacheTex.call(null,gl__$1,faceImg_10110);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_10111,faceImg_10110,temp__4130__auto___10109,map__10087,map__10087__$1,ctx,timer,map__10088,map__10088__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__10083,cw,ch){
return (function (pobj){var seq__10089 = cljs.core.seq.call(null,ps);var chunk__10090 = null;var count__10091 = (0);var i__10092 = (0);while(true){
if((i__10092 < count__10091))
{var map__10093 = cljs.core._nth.call(null,chunk__10090,i__10092);var map__10093__$1 = ((cljs.core.seq_QMARK_.call(null,map__10093))?cljs.core.apply.call(null,cljs.core.hash_map,map__10093):map__10093);var p = map__10093__$1;var vec__10094 = cljs.core.get.call(null,map__10093__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__10094,(0),null);var y = cljs.core.nth.call(null,vec__10094,(1),null);var rot = cljs.core.nth.call(null,vec__10094,(2),null);var vec__10095 = cljs.core.get.call(null,map__10093__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__10095,(0),null);var ys = cljs.core.nth.call(null,vec__10095,(1),null);var vec__10096 = cljs.core.get.call(null,map__10093__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__10096,(0),null);var g = cljs.core.nth.call(null,vec__10096,(1),null);var b = cljs.core.nth.call(null,vec__10096,(2),null);var a = cljs.core.nth.call(null,vec__10096,(3),null);var proj_10112 = (function (){var G__10097 = (new THREE.Matrix4());G__10097.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__10097;
})();var tras_10113 = (function (){var G__10098 = (new THREE.Matrix4());G__10098.makeTranslation(x,y,(0));
G__10098.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__10098.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__10098;
})();var texTx_10114 = (function (){var G__10099 = (new THREE.Matrix3());return G__10099;
})();var colorTx_10115 = (function (){var G__10100 = (new THREE.Matrix4());G__10100.makeTranslation(r,g,b);
return G__10100;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_10112.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_10113.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_10111,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_10114.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_10115.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__10116 = seq__10089;
var G__10117 = chunk__10090;
var G__10118 = count__10091;
var G__10119 = (i__10092 + (1));
seq__10089 = G__10116;
chunk__10090 = G__10117;
count__10091 = G__10118;
i__10092 = G__10119;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10089);if(temp__4126__auto__)
{var seq__10089__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10089__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10089__$1);{
var G__10120 = cljs.core.chunk_rest.call(null,seq__10089__$1);
var G__10121 = c__4307__auto__;
var G__10122 = cljs.core.count.call(null,c__4307__auto__);
var G__10123 = (0);
seq__10089 = G__10120;
chunk__10090 = G__10121;
count__10091 = G__10122;
i__10092 = G__10123;
continue;
}
} else
{var map__10101 = cljs.core.first.call(null,seq__10089__$1);var map__10101__$1 = ((cljs.core.seq_QMARK_.call(null,map__10101))?cljs.core.apply.call(null,cljs.core.hash_map,map__10101):map__10101);var p = map__10101__$1;var vec__10102 = cljs.core.get.call(null,map__10101__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__10102,(0),null);var y = cljs.core.nth.call(null,vec__10102,(1),null);var rot = cljs.core.nth.call(null,vec__10102,(2),null);var vec__10103 = cljs.core.get.call(null,map__10101__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__10103,(0),null);var ys = cljs.core.nth.call(null,vec__10103,(1),null);var vec__10104 = cljs.core.get.call(null,map__10101__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__10104,(0),null);var g = cljs.core.nth.call(null,vec__10104,(1),null);var b = cljs.core.nth.call(null,vec__10104,(2),null);var a = cljs.core.nth.call(null,vec__10104,(3),null);var proj_10124 = (function (){var G__10105 = (new THREE.Matrix4());G__10105.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__10105;
})();var tras_10125 = (function (){var G__10106 = (new THREE.Matrix4());G__10106.makeTranslation(x,y,(0));
G__10106.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__10106.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__10106;
})();var texTx_10126 = (function (){var G__10107 = (new THREE.Matrix3());return G__10107;
})();var colorTx_10127 = (function (){var G__10108 = (new THREE.Matrix4());G__10108.makeTranslation(r,g,b);
return G__10108;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_10124.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_10125.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_10111,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_10126.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_10127.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__10128 = cljs.core.next.call(null,seq__10089__$1);
var G__10129 = null;
var G__10130 = (0);
var G__10131 = (0);
seq__10089 = G__10128;
chunk__10090 = G__10129;
count__10091 = G__10130;
i__10092 = G__10131;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_10111,faceImg_10110,temp__4130__auto___10109,map__10087,map__10087__$1,ctx,timer,map__10088,map__10088__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__10083,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__10083,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (state_10378){var state_val_10379 = (state_10378[(1)]);if((state_val_10379 === (2)))
{var inst_10376 = (state_10378[(2)]);var state_10378__$1 = state_10378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10378__$1,inst_10376);
} else
{if((state_val_10379 === (1)))
{var state_10378__$1 = state_10378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10378__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10383 = [null,null,null,null,null,null,null];(statearr_10383[(0)] = state_machine__6189__auto__);
(statearr_10383[(1)] = (1));
return statearr_10383;
});
var state_machine__6189__auto____1 = (function (state_10378){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10378);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10384){if((e10384 instanceof Object))
{var ex__6192__auto__ = e10384;var statearr_10385_10617 = state_10378;(statearr_10385_10617[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10618 = state_10378;
state_10378 = G__10618;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10378){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10386 = f__6204__auto__.call(null);(statearr_10386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onTick,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6203__auto___10619 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10619,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10619,onView,onModel,onTick,mspf){
return (function (state_10395){var state_val_10396 = (state_10395[(1)]);if((state_val_10396 === (4)))
{var inst_10389 = (state_10395[(2)]);var inst_10390 = common.onModel.onNext(inst_10389);var state_10395__$1 = (function (){var statearr_10397 = state_10395;(statearr_10397[(7)] = inst_10390);
return statearr_10397;
})();var statearr_10398_10620 = state_10395__$1;(statearr_10398_10620[(2)] = null);
(statearr_10398_10620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10396 === (3)))
{var inst_10393 = (state_10395[(2)]);var state_10395__$1 = state_10395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10395__$1,inst_10393);
} else
{if((state_val_10396 === (2)))
{var state_10395__$1 = state_10395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10395__$1,(4),onModel);
} else
{if((state_val_10396 === (1)))
{var state_10395__$1 = state_10395;var statearr_10399_10621 = state_10395__$1;(statearr_10399_10621[(2)] = null);
(statearr_10399_10621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___10619,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10619,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10403 = [null,null,null,null,null,null,null,null];(statearr_10403[(0)] = state_machine__6189__auto__);
(statearr_10403[(1)] = (1));
return statearr_10403;
});
var state_machine__6189__auto____1 = (function (state_10395){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10395);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10404){if((e10404 instanceof Object))
{var ex__6192__auto__ = e10404;var statearr_10405_10622 = state_10395;(statearr_10405_10622[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10395);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10623 = state_10395;
state_10395 = G__10623;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10395){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10619,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10406 = f__6204__auto__.call(null);(statearr_10406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10619);
return statearr_10406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10619,onView,onModel,onTick,mspf))
);
var c__6203__auto___10624 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10624,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10624,onView,onModel,onTick,mspf){
return (function (state_10425){var state_val_10426 = (state_10425[(1)]);if((state_val_10426 === (5)))
{var inst_10416 = (state_10425[(7)]);var inst_10409 = (state_10425[(8)]);var inst_10420 = (state_10425[(2)]);var tmp10427 = inst_10409;var inst_10409__$1 = tmp10427;var inst_10410 = inst_10416;var state_10425__$1 = (function (){var statearr_10428 = state_10425;(statearr_10428[(9)] = inst_10420);
(statearr_10428[(8)] = inst_10409__$1);
(statearr_10428[(10)] = inst_10410);
return statearr_10428;
})();var statearr_10429_10625 = state_10425__$1;(statearr_10429_10625[(2)] = null);
(statearr_10429_10625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10426 === (4)))
{var inst_10416 = (state_10425[(7)]);var inst_10410 = (state_10425[(10)]);var inst_10414 = (state_10425[(2)]);var inst_10415 = (new Date());var inst_10416__$1 = inst_10415.getTime();var inst_10417 = (inst_10416__$1 - inst_10410);var inst_10418 = (inst_10417 / (1000));var state_10425__$1 = (function (){var statearr_10430 = state_10425;(statearr_10430[(7)] = inst_10416__$1);
(statearr_10430[(11)] = inst_10414);
return statearr_10430;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10425__$1,(5),onTick,inst_10418);
} else
{if((state_val_10426 === (3)))
{var inst_10423 = (state_10425[(2)]);var state_10425__$1 = state_10425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10425__$1,inst_10423);
} else
{if((state_val_10426 === (2)))
{var inst_10409 = (state_10425[(8)]);var inst_10412 = cljs.core.async.timeout.call(null,inst_10409);var state_10425__$1 = state_10425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10425__$1,(4),inst_10412);
} else
{if((state_val_10426 === (1)))
{var inst_10407 = (new Date());var inst_10408 = inst_10407.getTime();var inst_10409 = mspf;var inst_10410 = inst_10408;var state_10425__$1 = (function (){var statearr_10431 = state_10425;(statearr_10431[(8)] = inst_10409);
(statearr_10431[(10)] = inst_10410);
return statearr_10431;
})();var statearr_10432_10626 = state_10425__$1;(statearr_10432_10626[(2)] = null);
(statearr_10432_10626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10624,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10624,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10436 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10436[(0)] = state_machine__6189__auto__);
(statearr_10436[(1)] = (1));
return statearr_10436;
});
var state_machine__6189__auto____1 = (function (state_10425){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10425);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10437){if((e10437 instanceof Object))
{var ex__6192__auto__ = e10437;var statearr_10438_10627 = state_10425;(statearr_10438_10627[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10425);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10628 = state_10425;
state_10425 = G__10628;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10425){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10624,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10439 = f__6204__auto__.call(null);(statearr_10439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10624);
return statearr_10439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10624,onView,onModel,onTick,mspf))
);
var c__6203__auto___10629 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10629,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10629,onView,onModel,onTick,mspf){
return (function (state_10473){var state_val_10474 = (state_10473[(1)]);if((state_val_10474 === (5)))
{var inst_10471 = (state_10473[(2)]);var state_10473__$1 = state_10473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10473__$1,inst_10471);
} else
{if((state_val_10474 === (4)))
{var inst_10452 = (state_10473[(2)]);var inst_10459 = [(0),(0),(0)];var inst_10460 = [(10),(20)];var inst_10461 = [(100),(0),3.14];var inst_10462 = {"position":inst_10459,"size":inst_10460,"vel":inst_10461};var inst_10463 = [inst_10462];var inst_10464 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_10463};var inst_10465 = [(30),(10)];var inst_10466 = [(300),(300),(0)];var inst_10467 = [(100),(100),(0)];var inst_10468 = {"id":"x1","emit":inst_10464,"size":inst_10465,"pos":inst_10466,"vel":inst_10467};var inst_10469 = ["edit-particle",inst_10468];var state_10473__$1 = (function (){var statearr_10475 = state_10473;(statearr_10475[(7)] = inst_10452);
return statearr_10475;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10473__$1,(5),onView,inst_10469);
} else
{if((state_val_10474 === (3)))
{var inst_10449 = (state_10473[(2)]);var inst_10450 = cljs.core.async.timeout.call(null,(1100));var state_10473__$1 = (function (){var statearr_10476 = state_10473;(statearr_10476[(8)] = inst_10449);
return statearr_10476;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10473__$1,(4),inst_10450);
} else
{if((state_val_10474 === (2)))
{var inst_10442 = (state_10473[(2)]);var inst_10445 = [(300),(300),(0)];var inst_10446 = {"id":"x1","pos":inst_10445};var inst_10447 = ["edit-particle",inst_10446];var state_10473__$1 = (function (){var statearr_10477 = state_10473;(statearr_10477[(9)] = inst_10442);
return statearr_10477;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10473__$1,(3),onView,inst_10447);
} else
{if((state_val_10474 === (1)))
{var inst_10440 = cljs.core.async.timeout.call(null,(1000));var state_10473__$1 = state_10473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10473__$1,(2),inst_10440);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10629,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10629,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10481 = [null,null,null,null,null,null,null,null,null,null];(statearr_10481[(0)] = state_machine__6189__auto__);
(statearr_10481[(1)] = (1));
return statearr_10481;
});
var state_machine__6189__auto____1 = (function (state_10473){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10482){if((e10482 instanceof Object))
{var ex__6192__auto__ = e10482;var statearr_10483_10630 = state_10473;(statearr_10483_10630[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10631 = state_10473;
state_10473 = G__10631;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10473){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10629,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10484 = f__6204__auto__.call(null);(statearr_10484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10629);
return statearr_10484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10629,onView,onModel,onTick,mspf))
);
var c__6203__auto___10632 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10632,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10632,onView,onModel,onTick,mspf){
return (function (state_10577){var state_val_10578 = (state_10577[(1)]);if((state_val_10578 === (7)))
{var inst_10572 = (state_10577[(2)]);var inst_10492 = inst_10572;var state_10577__$1 = (function (){var statearr_10579 = state_10577;(statearr_10579[(7)] = inst_10492);
return statearr_10579;
})();var statearr_10580_10633 = state_10577__$1;(statearr_10580_10633[(2)] = null);
(statearr_10580_10633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (20)))
{var inst_10492 = (state_10577[(7)]);var state_10577__$1 = state_10577;var statearr_10581_10634 = state_10577__$1;(statearr_10581_10634[(2)] = inst_10492);
(statearr_10581_10634[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (1)))
{var inst_10485 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_10486 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10487 = cljs.core.List.EMPTY;var inst_10488 = [inst_10487];var inst_10489 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10486,inst_10488);var inst_10490 = [(0),inst_10489];var inst_10491 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10485,inst_10490);var inst_10492 = inst_10491;var state_10577__$1 = (function (){var statearr_10582 = state_10577;(statearr_10582[(7)] = inst_10492);
return statearr_10582;
})();var statearr_10583_10635 = state_10577__$1;(statearr_10583_10635[(2)] = null);
(statearr_10583_10635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (4)))
{var inst_10500 = (state_10577[(8)]);var inst_10498 = (state_10577[(9)]);var inst_10498__$1 = (state_10577[(2)]);var inst_10499 = cljs.core.nth.call(null,inst_10498__$1,(0),null);var inst_10500__$1 = cljs.core.nth.call(null,inst_10498__$1,(1),null);var inst_10504 = cljs.core._EQ_.call(null,onTick,inst_10500__$1);var state_10577__$1 = (function (){var statearr_10584 = state_10577;(statearr_10584[(8)] = inst_10500__$1);
(statearr_10584[(9)] = inst_10498__$1);
(statearr_10584[(10)] = inst_10499);
return statearr_10584;
})();if(inst_10504)
{var statearr_10585_10636 = state_10577__$1;(statearr_10585_10636[(1)] = (5));
} else
{var statearr_10586_10637 = state_10577__$1;(statearr_10586_10637[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (15)))
{var inst_10492 = (state_10577[(7)]);var inst_10527 = (state_10577[(11)]);var inst_10544 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10545 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10544,null));var inst_10546 = cljs.core.update_in.call(null,inst_10492,inst_10545,cljs.core.conj,inst_10527);var state_10577__$1 = state_10577;var statearr_10587_10638 = state_10577__$1;(statearr_10587_10638[(2)] = inst_10546);
(statearr_10587_10638[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (21)))
{var inst_10500 = (state_10577[(8)]);var inst_10564 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10500));var inst_10565 = (new Error(inst_10564));var inst_10566 = (function(){throw inst_10565})();var state_10577__$1 = state_10577;var statearr_10588_10639 = state_10577__$1;(statearr_10588_10639[(2)] = inst_10566);
(statearr_10588_10639[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (13)))
{var inst_10559 = (state_10577[(2)]);var state_10577__$1 = state_10577;var statearr_10589_10640 = state_10577__$1;(statearr_10589_10640[(2)] = inst_10559);
(statearr_10589_10640[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (22)))
{var inst_10568 = (state_10577[(2)]);var state_10577__$1 = state_10577;var statearr_10590_10641 = state_10577__$1;(statearr_10590_10641[(2)] = inst_10568);
(statearr_10590_10641[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (6)))
{var inst_10500 = (state_10577[(8)]);var inst_10512 = cljs.core._EQ_.call(null,onView,inst_10500);var state_10577__$1 = state_10577;if(inst_10512)
{var statearr_10591_10642 = state_10577__$1;(statearr_10591_10642[(1)] = (8));
} else
{var statearr_10592_10643 = state_10577__$1;(statearr_10592_10643[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (17)))
{var inst_10492 = (state_10577[(7)]);var state_10577__$1 = state_10577;var statearr_10593_10644 = state_10577__$1;(statearr_10593_10644[(2)] = inst_10492);
(statearr_10593_10644[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (3)))
{var inst_10575 = (state_10577[(2)]);var state_10577__$1 = state_10577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10577__$1,inst_10575);
} else
{if((state_val_10578 === (12)))
{var inst_10514 = (state_10577[(12)]);var inst_10550 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_10514);var state_10577__$1 = state_10577;if(inst_10550)
{var statearr_10594_10645 = state_10577__$1;(statearr_10594_10645[(1)] = (17));
} else
{var statearr_10595_10646 = state_10577__$1;(statearr_10595_10646[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (2)))
{var inst_10495 = [onView,onTick];var inst_10496 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10495,null));var state_10577__$1 = state_10577;return cljs.core.async.ioc_alts_BANG_.call(null,state_10577__$1,(4),inst_10496);
} else
{if((state_val_10578 === (19)))
{var inst_10557 = (state_10577[(2)]);var state_10577__$1 = state_10577;var statearr_10596_10647 = state_10577__$1;(statearr_10596_10647[(2)] = inst_10557);
(statearr_10596_10647[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (11)))
{var inst_10500 = (state_10577[(8)]);var inst_10526 = (state_10577[(13)]);var inst_10498 = (state_10577[(9)]);var inst_10492 = (state_10577[(7)]);var inst_10515 = (state_10577[(14)]);var inst_10514 = (state_10577[(12)]);var inst_10499 = (state_10577[(10)]);var inst_10521 = (function (){var ctx = inst_10492;var pred__10516 = cljs.core._EQ_;var partInfo = inst_10515;var v = inst_10499;var pred__10501 = cljs.core._EQ_;var vec__10494 = inst_10498;var params = inst_10515;var ch = inst_10500;var event = inst_10514;var expr__10517 = inst_10514;var expr__10502 = inst_10500;return ((function (ctx,pred__10516,partInfo,v,pred__10501,vec__10494,params,ch,event,expr__10517,expr__10502,inst_10500,inst_10526,inst_10498,inst_10492,inst_10515,inst_10514,inst_10499,state_val_10578,c__6203__auto___10632,onView,onModel,onTick,mspf){
return (function (p1__10132_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10132_SHARP_),partInfo.id);
});
;})(ctx,pred__10516,partInfo,v,pred__10501,vec__10494,params,ch,event,expr__10517,expr__10502,inst_10500,inst_10526,inst_10498,inst_10492,inst_10515,inst_10514,inst_10499,state_val_10578,c__6203__auto___10632,onView,onModel,onTick,mspf))
})();var inst_10522 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10523 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10522,null));var inst_10524 = cljs.core.get_in.call(null,inst_10492,inst_10523);var inst_10525 = cljs.core.filter.call(null,inst_10521,inst_10524);var inst_10526__$1 = cljs.core.first.call(null,inst_10525);var inst_10527 = tool.particle.jsobj__GT_particle.call(null,inst_10515);var inst_10528 = cljs.core.some_QMARK_.call(null,inst_10526__$1);var state_10577__$1 = (function (){var statearr_10597 = state_10577;(statearr_10597[(13)] = inst_10526__$1);
(statearr_10597[(11)] = inst_10527);
return statearr_10597;
})();if(inst_10528)
{var statearr_10598_10648 = state_10577__$1;(statearr_10598_10648[(1)] = (14));
} else
{var statearr_10599_10649 = state_10577__$1;(statearr_10599_10649[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (9)))
{var inst_10500 = (state_10577[(8)]);var inst_10561 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_10500);var state_10577__$1 = state_10577;if(inst_10561)
{var statearr_10600_10650 = state_10577__$1;(statearr_10600_10650[(1)] = (20));
} else
{var statearr_10601_10651 = state_10577__$1;(statearr_10601_10651[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (5)))
{var inst_10492 = (state_10577[(7)]);var inst_10499 = (state_10577[(10)]);var inst_10506 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_10507 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10506,null));var inst_10508 = cljs.core.partial.call(null,tool.particle.update,inst_10499);var inst_10509 = cljs.core.update_in.call(null,inst_10492,inst_10507,inst_10508);var inst_10510 = app.main2.draw2D.call(null,inst_10509);var state_10577__$1 = state_10577;var statearr_10602_10652 = state_10577__$1;(statearr_10602_10652[(2)] = inst_10510);
(statearr_10602_10652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (14)))
{var inst_10526 = (state_10577[(13)]);var inst_10492 = (state_10577[(7)]);var inst_10527 = (state_10577[(11)]);var inst_10530 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10531 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10530,null));var inst_10532 = [inst_10526];var inst_10533 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_10534 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_10526);var inst_10535 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_10526);var inst_10536 = [inst_10534,inst_10535];var inst_10537 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10533,inst_10536);var inst_10538 = cljs.core.merge.call(null,inst_10527,inst_10537);var inst_10539 = [inst_10538];var inst_10540 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10532,inst_10539);var inst_10541 = cljs.core.partial.call(null,cljs.core.replace,inst_10540);var inst_10542 = cljs.core.update_in.call(null,inst_10492,inst_10531,inst_10541);var state_10577__$1 = state_10577;var statearr_10603_10653 = state_10577__$1;(statearr_10603_10653[(2)] = inst_10542);
(statearr_10603_10653[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (16)))
{var inst_10548 = (state_10577[(2)]);var state_10577__$1 = state_10577;var statearr_10604_10654 = state_10577__$1;(statearr_10604_10654[(2)] = inst_10548);
(statearr_10604_10654[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (10)))
{var inst_10570 = (state_10577[(2)]);var state_10577__$1 = state_10577;var statearr_10605_10655 = state_10577__$1;(statearr_10605_10655[(2)] = inst_10570);
(statearr_10605_10655[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (18)))
{var inst_10514 = (state_10577[(12)]);var inst_10553 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10514));var inst_10554 = (new Error(inst_10553));var inst_10555 = (function(){throw inst_10554})();var state_10577__$1 = state_10577;var statearr_10606_10656 = state_10577__$1;(statearr_10606_10656[(2)] = inst_10555);
(statearr_10606_10656[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10578 === (8)))
{var inst_10514 = (state_10577[(12)]);var inst_10499 = (state_10577[(10)]);var inst_10514__$1 = (inst_10499[(0)]);var inst_10515 = (inst_10499[(1)]);var inst_10519 = cljs.core._EQ_.call(null,"edit-particle",inst_10514__$1);var state_10577__$1 = (function (){var statearr_10607 = state_10577;(statearr_10607[(14)] = inst_10515);
(statearr_10607[(12)] = inst_10514__$1);
return statearr_10607;
})();if(inst_10519)
{var statearr_10608_10657 = state_10577__$1;(statearr_10608_10657[(1)] = (11));
} else
{var statearr_10609_10658 = state_10577__$1;(statearr_10609_10658[(1)] = (12));
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
});})(c__6203__auto___10632,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10632,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10613[(0)] = state_machine__6189__auto__);
(statearr_10613[(1)] = (1));
return statearr_10613;
});
var state_machine__6189__auto____1 = (function (state_10577){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10577);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10614){if((e10614 instanceof Object))
{var ex__6192__auto__ = e10614;var statearr_10615_10659 = state_10577;(statearr_10615_10659[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10660 = state_10577;
state_10577 = G__10660;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10577){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10632,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10616 = f__6204__auto__.call(null);(statearr_10616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10632);
return statearr_10616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10632,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
