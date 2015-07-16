// Compiled by ClojureScript 0.0-2268
goog.provide('app.main2');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('app.particle');
goog.require('cljs.core.async');
goog.require('app.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.mesh');
goog.require('gl.util');
app.main2.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main2.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__35894){var map__35895 = p__35894;var map__35895__$1 = ((cljs.core.seq_QMARK_.call(null,map__35895))?cljs.core.apply.call(null,cljs.core.hash_map,map__35895):map__35895);var ctx = map__35895__$1;var map__35896 = cljs.core.get.call(null,map__35895__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__35896__$1 = ((cljs.core.seq_QMARK_.call(null,map__35896))?cljs.core.apply.call(null,cljs.core.hash_map,map__35896):map__35896);var ps = cljs.core.get.call(null,map__35896__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__35897_35912 = canvas_ctx;(G__35897_35912["fillStyle"] = "white");
G__35897_35912.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__35897_35912["fillStyle"] = "red");
G__35897_35912.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__35898_35913 = cljs.core.seq.call(null,ps);var chunk__35899_35914 = null;var count__35900_35915 = (0);var i__35901_35916 = (0);while(true){
if((i__35901_35916 < count__35900_35915))
{var map__35902_35917 = cljs.core._nth.call(null,chunk__35899_35914,i__35901_35916);var map__35902_35918__$1 = ((cljs.core.seq_QMARK_.call(null,map__35902_35917))?cljs.core.apply.call(null,cljs.core.hash_map,map__35902_35917):map__35902_35917);var p_35919 = map__35902_35918__$1;var vec__35903_35920 = cljs.core.get.call(null,map__35902_35918__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_35921 = cljs.core.nth.call(null,vec__35903_35920,(0),null);var y_35922 = cljs.core.nth.call(null,vec__35903_35920,(1),null);var rot_35923 = cljs.core.nth.call(null,vec__35903_35920,(2),null);var vec__35904_35924 = cljs.core.get.call(null,map__35902_35918__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_35925 = cljs.core.nth.call(null,vec__35904_35924,(0),null);var ys_35926 = cljs.core.nth.call(null,vec__35904_35924,(1),null);var vec__35905_35927 = cljs.core.get.call(null,map__35902_35918__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_35928 = cljs.core.nth.call(null,vec__35905_35927,(0),null);var g_35929 = cljs.core.nth.call(null,vec__35905_35927,(1),null);var b_35930 = cljs.core.nth.call(null,vec__35905_35927,(2),null);var a_35931 = cljs.core.nth.call(null,vec__35905_35927,(3),null);var G__35906_35932 = canvas_ctx;G__35906_35932.save();
G__35906_35932.translate(x_35921,y_35922);
G__35906_35932.rotate(rot_35923);
(G__35906_35932["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_35928 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_35929 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_35930 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_35931)+")"));
G__35906_35932.fillRect((- (xs_35925 / (2))),(- (ys_35926 / (2))),xs_35925,ys_35926);
G__35906_35932.restore();
{
var G__35933 = seq__35898_35913;
var G__35934 = chunk__35899_35914;
var G__35935 = count__35900_35915;
var G__35936 = (i__35901_35916 + (1));
seq__35898_35913 = G__35933;
chunk__35899_35914 = G__35934;
count__35900_35915 = G__35935;
i__35901_35916 = G__35936;
continue;
}
} else
{var temp__4126__auto___35937 = cljs.core.seq.call(null,seq__35898_35913);if(temp__4126__auto___35937)
{var seq__35898_35938__$1 = temp__4126__auto___35937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35898_35938__$1))
{var c__4307__auto___35939 = cljs.core.chunk_first.call(null,seq__35898_35938__$1);{
var G__35940 = cljs.core.chunk_rest.call(null,seq__35898_35938__$1);
var G__35941 = c__4307__auto___35939;
var G__35942 = cljs.core.count.call(null,c__4307__auto___35939);
var G__35943 = (0);
seq__35898_35913 = G__35940;
chunk__35899_35914 = G__35941;
count__35900_35915 = G__35942;
i__35901_35916 = G__35943;
continue;
}
} else
{var map__35907_35944 = cljs.core.first.call(null,seq__35898_35938__$1);var map__35907_35945__$1 = ((cljs.core.seq_QMARK_.call(null,map__35907_35944))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907_35944):map__35907_35944);var p_35946 = map__35907_35945__$1;var vec__35908_35947 = cljs.core.get.call(null,map__35907_35945__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_35948 = cljs.core.nth.call(null,vec__35908_35947,(0),null);var y_35949 = cljs.core.nth.call(null,vec__35908_35947,(1),null);var rot_35950 = cljs.core.nth.call(null,vec__35908_35947,(2),null);var vec__35909_35951 = cljs.core.get.call(null,map__35907_35945__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_35952 = cljs.core.nth.call(null,vec__35909_35951,(0),null);var ys_35953 = cljs.core.nth.call(null,vec__35909_35951,(1),null);var vec__35910_35954 = cljs.core.get.call(null,map__35907_35945__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_35955 = cljs.core.nth.call(null,vec__35910_35954,(0),null);var g_35956 = cljs.core.nth.call(null,vec__35910_35954,(1),null);var b_35957 = cljs.core.nth.call(null,vec__35910_35954,(2),null);var a_35958 = cljs.core.nth.call(null,vec__35910_35954,(3),null);var G__35911_35959 = canvas_ctx;G__35911_35959.save();
G__35911_35959.translate(x_35948,y_35949);
G__35911_35959.rotate(rot_35950);
(G__35911_35959["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_35955 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_35956 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_35957 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_35958)+")"));
G__35911_35959.fillRect((- (xs_35952 / (2))),(- (ys_35953 / (2))),xs_35952,ys_35953);
G__35911_35959.restore();
{
var G__35960 = cljs.core.next.call(null,seq__35898_35938__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35898_35913 = G__35960;
chunk__35899_35914 = G__35961;
count__35900_35915 = G__35962;
i__35901_35916 = G__35963;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj35992 = {};return obj35992;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__35990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__35990,(0),null);var ch = cljs.core.nth.call(null,vec__35990,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__35990,cw,ch){
return (function (p__35993){var map__35994 = p__35993;var map__35994__$1 = ((cljs.core.seq_QMARK_.call(null,map__35994))?cljs.core.apply.call(null,cljs.core.hash_map,map__35994):map__35994);var ctx = map__35994__$1;var timer = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__35995 = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__35995__$1 = ((cljs.core.seq_QMARK_.call(null,map__35995))?cljs.core.apply.call(null,cljs.core.hash_map,map__35995):map__35995);var ps = cljs.core.get.call(null,map__35995__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___36016 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___36016 == null))
{} else
{var faceImg_36017 = temp__4130__auto___36016;var tex_36018 = app.main2.cacheTex.call(null,gl__$1,faceImg_36017);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_36018,faceImg_36017,temp__4130__auto___36016,map__35994,map__35994__$1,ctx,timer,map__35995,map__35995__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__35990,cw,ch){
return (function (pobj){var seq__35996 = cljs.core.seq.call(null,ps);var chunk__35997 = null;var count__35998 = (0);var i__35999 = (0);while(true){
if((i__35999 < count__35998))
{var map__36000 = cljs.core._nth.call(null,chunk__35997,i__35999);var map__36000__$1 = ((cljs.core.seq_QMARK_.call(null,map__36000))?cljs.core.apply.call(null,cljs.core.hash_map,map__36000):map__36000);var p = map__36000__$1;var vec__36001 = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__36001,(0),null);var y = cljs.core.nth.call(null,vec__36001,(1),null);var rot = cljs.core.nth.call(null,vec__36001,(2),null);var vec__36002 = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__36002,(0),null);var ys = cljs.core.nth.call(null,vec__36002,(1),null);var vec__36003 = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__36003,(0),null);var g = cljs.core.nth.call(null,vec__36003,(1),null);var b = cljs.core.nth.call(null,vec__36003,(2),null);var a = cljs.core.nth.call(null,vec__36003,(3),null);var proj_36019 = (function (){var G__36004 = (new THREE.Matrix4());G__36004.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__36004;
})();var tras_36020 = (function (){var G__36005 = (new THREE.Matrix4());G__36005.makeTranslation(x,y,(0));
G__36005.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__36005.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__36005;
})();var texTx_36021 = (function (){var G__36006 = (new THREE.Matrix3());return G__36006;
})();var colorTx_36022 = (function (){var G__36007 = (new THREE.Matrix4());G__36007.makeTranslation(r,g,b);
return G__36007;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_36019.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_36020.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_36018,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_36021.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_36022.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__36023 = seq__35996;
var G__36024 = chunk__35997;
var G__36025 = count__35998;
var G__36026 = (i__35999 + (1));
seq__35996 = G__36023;
chunk__35997 = G__36024;
count__35998 = G__36025;
i__35999 = G__36026;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__35996);if(temp__4126__auto__)
{var seq__35996__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35996__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__35996__$1);{
var G__36027 = cljs.core.chunk_rest.call(null,seq__35996__$1);
var G__36028 = c__4307__auto__;
var G__36029 = cljs.core.count.call(null,c__4307__auto__);
var G__36030 = (0);
seq__35996 = G__36027;
chunk__35997 = G__36028;
count__35998 = G__36029;
i__35999 = G__36030;
continue;
}
} else
{var map__36008 = cljs.core.first.call(null,seq__35996__$1);var map__36008__$1 = ((cljs.core.seq_QMARK_.call(null,map__36008))?cljs.core.apply.call(null,cljs.core.hash_map,map__36008):map__36008);var p = map__36008__$1;var vec__36009 = cljs.core.get.call(null,map__36008__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__36009,(0),null);var y = cljs.core.nth.call(null,vec__36009,(1),null);var rot = cljs.core.nth.call(null,vec__36009,(2),null);var vec__36010 = cljs.core.get.call(null,map__36008__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__36010,(0),null);var ys = cljs.core.nth.call(null,vec__36010,(1),null);var vec__36011 = cljs.core.get.call(null,map__36008__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__36011,(0),null);var g = cljs.core.nth.call(null,vec__36011,(1),null);var b = cljs.core.nth.call(null,vec__36011,(2),null);var a = cljs.core.nth.call(null,vec__36011,(3),null);var proj_36031 = (function (){var G__36012 = (new THREE.Matrix4());G__36012.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__36012;
})();var tras_36032 = (function (){var G__36013 = (new THREE.Matrix4());G__36013.makeTranslation(x,y,(0));
G__36013.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__36013.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__36013;
})();var texTx_36033 = (function (){var G__36014 = (new THREE.Matrix3());return G__36014;
})();var colorTx_36034 = (function (){var G__36015 = (new THREE.Matrix4());G__36015.makeTranslation(r,g,b);
return G__36015;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_36031.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_36032.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_36018,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_36033.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_36034.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__36035 = cljs.core.next.call(null,seq__35996__$1);
var G__36036 = null;
var G__36037 = (0);
var G__36038 = (0);
seq__35996 = G__36035;
chunk__35997 = G__36036;
count__35998 = G__36037;
i__35999 = G__36038;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_36018,faceImg_36017,temp__4130__auto___36016,map__35994,map__35994__$1,ctx,timer,map__35995,map__35995__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__35990,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__35990,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36043){var vec__36044 = p__36043;var k = cljs.core.nth.call(null,vec__36044,(0),null);var v = cljs.core.nth.call(null,vec__36044,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__36045){var vec__36046 = p__36045;var k = cljs.core.nth.call(null,vec__36046,(0),null);var v = cljs.core.nth.call(null,vec__36046,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj){
return (function (ps){return cljs.core.mapv.call(null,createParticle,ps);
});})(obj))
);
});})(obj))
):obj);return app.particle.create.call(null,emit);
});
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_36293){var state_val_36294 = (state_36293[(1)]);if((state_val_36294 === (2)))
{var inst_36291 = (state_36293[(2)]);var state_36293__$1 = state_36293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36293__$1,inst_36291);
} else
{if((state_val_36294 === (1)))
{var state_36293__$1 = state_36293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36293__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36298 = [null,null,null,null,null,null,null];(statearr_36298[(0)] = state_machine__6188__auto__);
(statearr_36298[(1)] = (1));
return statearr_36298;
});
var state_machine__6188__auto____1 = (function (state_36293){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36299){if((e36299 instanceof Object))
{var ex__6191__auto__ = e36299;var statearr_36300_36532 = state_36293;(statearr_36300_36532[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36533 = state_36293;
state_36293 = G__36533;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36293){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36301 = f__6203__auto__.call(null);(statearr_36301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_36301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___36534 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36534,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36534,onView,onModel,onTick,mspf){
return (function (state_36310){var state_val_36311 = (state_36310[(1)]);if((state_val_36311 === (4)))
{var inst_36304 = (state_36310[(2)]);var inst_36305 = common.onModel.onNext(inst_36304);var state_36310__$1 = (function (){var statearr_36312 = state_36310;(statearr_36312[(7)] = inst_36305);
return statearr_36312;
})();var statearr_36313_36535 = state_36310__$1;(statearr_36313_36535[(2)] = null);
(statearr_36313_36535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36311 === (3)))
{var inst_36308 = (state_36310[(2)]);var state_36310__$1 = state_36310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36310__$1,inst_36308);
} else
{if((state_val_36311 === (2)))
{var state_36310__$1 = state_36310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36310__$1,(4),onModel);
} else
{if((state_val_36311 === (1)))
{var state_36310__$1 = state_36310;var statearr_36314_36536 = state_36310__$1;(statearr_36314_36536[(2)] = null);
(statearr_36314_36536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___36534,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36534,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36318 = [null,null,null,null,null,null,null,null];(statearr_36318[(0)] = state_machine__6188__auto__);
(statearr_36318[(1)] = (1));
return statearr_36318;
});
var state_machine__6188__auto____1 = (function (state_36310){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36319){if((e36319 instanceof Object))
{var ex__6191__auto__ = e36319;var statearr_36320_36537 = state_36310;(statearr_36320_36537[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36310);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36538 = state_36310;
state_36310 = G__36538;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36310){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36534,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36321 = f__6203__auto__.call(null);(statearr_36321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36534);
return statearr_36321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36534,onView,onModel,onTick,mspf))
);
var c__6202__auto___36539 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36539,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36539,onView,onModel,onTick,mspf){
return (function (state_36340){var state_val_36341 = (state_36340[(1)]);if((state_val_36341 === (5)))
{var inst_36324 = (state_36340[(7)]);var inst_36331 = (state_36340[(8)]);var inst_36335 = (state_36340[(2)]);var tmp36342 = inst_36324;var inst_36324__$1 = tmp36342;var inst_36325 = inst_36331;var state_36340__$1 = (function (){var statearr_36343 = state_36340;(statearr_36343[(7)] = inst_36324__$1);
(statearr_36343[(9)] = inst_36325);
(statearr_36343[(10)] = inst_36335);
return statearr_36343;
})();var statearr_36344_36540 = state_36340__$1;(statearr_36344_36540[(2)] = null);
(statearr_36344_36540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36341 === (4)))
{var inst_36325 = (state_36340[(9)]);var inst_36331 = (state_36340[(8)]);var inst_36329 = (state_36340[(2)]);var inst_36330 = (new Date());var inst_36331__$1 = inst_36330.getTime();var inst_36332 = (inst_36331__$1 - inst_36325);var inst_36333 = (inst_36332 / (1000));var state_36340__$1 = (function (){var statearr_36345 = state_36340;(statearr_36345[(11)] = inst_36329);
(statearr_36345[(8)] = inst_36331__$1);
return statearr_36345;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36340__$1,(5),onTick,inst_36333);
} else
{if((state_val_36341 === (3)))
{var inst_36338 = (state_36340[(2)]);var state_36340__$1 = state_36340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36340__$1,inst_36338);
} else
{if((state_val_36341 === (2)))
{var inst_36324 = (state_36340[(7)]);var inst_36327 = cljs.core.async.timeout.call(null,inst_36324);var state_36340__$1 = state_36340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36340__$1,(4),inst_36327);
} else
{if((state_val_36341 === (1)))
{var inst_36322 = (new Date());var inst_36323 = inst_36322.getTime();var inst_36324 = mspf;var inst_36325 = inst_36323;var state_36340__$1 = (function (){var statearr_36346 = state_36340;(statearr_36346[(7)] = inst_36324);
(statearr_36346[(9)] = inst_36325);
return statearr_36346;
})();var statearr_36347_36541 = state_36340__$1;(statearr_36347_36541[(2)] = null);
(statearr_36347_36541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___36539,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36539,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36351 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36351[(0)] = state_machine__6188__auto__);
(statearr_36351[(1)] = (1));
return statearr_36351;
});
var state_machine__6188__auto____1 = (function (state_36340){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36352){if((e36352 instanceof Object))
{var ex__6191__auto__ = e36352;var statearr_36353_36542 = state_36340;(statearr_36353_36542[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36543 = state_36340;
state_36340 = G__36543;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36539,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36354 = f__6203__auto__.call(null);(statearr_36354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36539);
return statearr_36354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36539,onView,onModel,onTick,mspf))
);
var c__6202__auto___36544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36544,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36544,onView,onModel,onTick,mspf){
return (function (state_36388){var state_val_36389 = (state_36388[(1)]);if((state_val_36389 === (5)))
{var inst_36386 = (state_36388[(2)]);var state_36388__$1 = state_36388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36388__$1,inst_36386);
} else
{if((state_val_36389 === (4)))
{var inst_36367 = (state_36388[(2)]);var inst_36374 = [(0),(0),(0)];var inst_36375 = [(10),(20)];var inst_36376 = [(100),(0),3.14];var inst_36377 = {"position":inst_36374,"size":inst_36375,"vel":inst_36376};var inst_36378 = [inst_36377];var inst_36379 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_36378};var inst_36380 = [(30),(10)];var inst_36381 = [(300),(300),(0)];var inst_36382 = [(100),(100),(0)];var inst_36383 = {"id":"x1","emit":inst_36379,"size":inst_36380,"pos":inst_36381,"vel":inst_36382};var inst_36384 = ["edit-particle",inst_36383];var state_36388__$1 = (function (){var statearr_36390 = state_36388;(statearr_36390[(7)] = inst_36367);
return statearr_36390;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36388__$1,(5),onView,inst_36384);
} else
{if((state_val_36389 === (3)))
{var inst_36364 = (state_36388[(2)]);var inst_36365 = cljs.core.async.timeout.call(null,(1100));var state_36388__$1 = (function (){var statearr_36391 = state_36388;(statearr_36391[(8)] = inst_36364);
return statearr_36391;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36388__$1,(4),inst_36365);
} else
{if((state_val_36389 === (2)))
{var inst_36357 = (state_36388[(2)]);var inst_36360 = [(300),(300),(0)];var inst_36361 = {"id":"x1","pos":inst_36360};var inst_36362 = ["edit-particle",inst_36361];var state_36388__$1 = (function (){var statearr_36392 = state_36388;(statearr_36392[(9)] = inst_36357);
return statearr_36392;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36388__$1,(3),onView,inst_36362);
} else
{if((state_val_36389 === (1)))
{var inst_36355 = cljs.core.async.timeout.call(null,(1000));var state_36388__$1 = state_36388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36388__$1,(2),inst_36355);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___36544,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36544,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36396 = [null,null,null,null,null,null,null,null,null,null];(statearr_36396[(0)] = state_machine__6188__auto__);
(statearr_36396[(1)] = (1));
return statearr_36396;
});
var state_machine__6188__auto____1 = (function (state_36388){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36388);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36397){if((e36397 instanceof Object))
{var ex__6191__auto__ = e36397;var statearr_36398_36545 = state_36388;(statearr_36398_36545[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36388);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36546 = state_36388;
state_36388 = G__36546;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36388){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36544,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36399 = f__6203__auto__.call(null);(statearr_36399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36544);
return statearr_36399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36544,onView,onModel,onTick,mspf))
);
var c__6202__auto___36547 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36547,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36547,onView,onModel,onTick,mspf){
return (function (state_36492){var state_val_36493 = (state_36492[(1)]);if((state_val_36493 === (7)))
{var inst_36487 = (state_36492[(2)]);var inst_36407 = inst_36487;var state_36492__$1 = (function (){var statearr_36494 = state_36492;(statearr_36494[(7)] = inst_36407);
return statearr_36494;
})();var statearr_36495_36548 = state_36492__$1;(statearr_36495_36548[(2)] = null);
(statearr_36495_36548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (20)))
{var inst_36407 = (state_36492[(7)]);var state_36492__$1 = state_36492;var statearr_36496_36549 = state_36492__$1;(statearr_36496_36549[(2)] = inst_36407);
(statearr_36496_36549[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (1)))
{var inst_36400 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_36401 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_36402 = cljs.core.List.EMPTY;var inst_36403 = [inst_36402];var inst_36404 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36401,inst_36403);var inst_36405 = [(0),inst_36404];var inst_36406 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36400,inst_36405);var inst_36407 = inst_36406;var state_36492__$1 = (function (){var statearr_36497 = state_36492;(statearr_36497[(7)] = inst_36407);
return statearr_36497;
})();var statearr_36498_36550 = state_36492__$1;(statearr_36498_36550[(2)] = null);
(statearr_36498_36550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (4)))
{var inst_36413 = (state_36492[(8)]);var inst_36415 = (state_36492[(9)]);var inst_36413__$1 = (state_36492[(2)]);var inst_36414 = cljs.core.nth.call(null,inst_36413__$1,(0),null);var inst_36415__$1 = cljs.core.nth.call(null,inst_36413__$1,(1),null);var inst_36419 = cljs.core._EQ_.call(null,onTick,inst_36415__$1);var state_36492__$1 = (function (){var statearr_36499 = state_36492;(statearr_36499[(8)] = inst_36413__$1);
(statearr_36499[(9)] = inst_36415__$1);
(statearr_36499[(10)] = inst_36414);
return statearr_36499;
})();if(inst_36419)
{var statearr_36500_36551 = state_36492__$1;(statearr_36500_36551[(1)] = (5));
} else
{var statearr_36501_36552 = state_36492__$1;(statearr_36501_36552[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (15)))
{var inst_36442 = (state_36492[(11)]);var inst_36407 = (state_36492[(7)]);var inst_36459 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_36460 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36459,null));var inst_36461 = cljs.core.update_in.call(null,inst_36407,inst_36460,cljs.core.conj,inst_36442);var state_36492__$1 = state_36492;var statearr_36502_36553 = state_36492__$1;(statearr_36502_36553[(2)] = inst_36461);
(statearr_36502_36553[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (21)))
{var inst_36415 = (state_36492[(9)]);var inst_36479 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36415));var inst_36480 = (new Error(inst_36479));var inst_36481 = (function(){throw inst_36480})();var state_36492__$1 = state_36492;var statearr_36503_36554 = state_36492__$1;(statearr_36503_36554[(2)] = inst_36481);
(statearr_36503_36554[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (13)))
{var inst_36474 = (state_36492[(2)]);var state_36492__$1 = state_36492;var statearr_36504_36555 = state_36492__$1;(statearr_36504_36555[(2)] = inst_36474);
(statearr_36504_36555[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (22)))
{var inst_36483 = (state_36492[(2)]);var state_36492__$1 = state_36492;var statearr_36505_36556 = state_36492__$1;(statearr_36505_36556[(2)] = inst_36483);
(statearr_36505_36556[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (6)))
{var inst_36415 = (state_36492[(9)]);var inst_36427 = cljs.core._EQ_.call(null,onView,inst_36415);var state_36492__$1 = state_36492;if(inst_36427)
{var statearr_36506_36557 = state_36492__$1;(statearr_36506_36557[(1)] = (8));
} else
{var statearr_36507_36558 = state_36492__$1;(statearr_36507_36558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (17)))
{var inst_36407 = (state_36492[(7)]);var state_36492__$1 = state_36492;var statearr_36508_36559 = state_36492__$1;(statearr_36508_36559[(2)] = inst_36407);
(statearr_36508_36559[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (3)))
{var inst_36490 = (state_36492[(2)]);var state_36492__$1 = state_36492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36492__$1,inst_36490);
} else
{if((state_val_36493 === (12)))
{var inst_36429 = (state_36492[(12)]);var inst_36465 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_36429);var state_36492__$1 = state_36492;if(inst_36465)
{var statearr_36509_36560 = state_36492__$1;(statearr_36509_36560[(1)] = (17));
} else
{var statearr_36510_36561 = state_36492__$1;(statearr_36510_36561[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (2)))
{var inst_36410 = [onView,onTick];var inst_36411 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36410,null));var state_36492__$1 = state_36492;return cljs.core.async.ioc_alts_BANG_.call(null,state_36492__$1,(4),inst_36411);
} else
{if((state_val_36493 === (19)))
{var inst_36472 = (state_36492[(2)]);var state_36492__$1 = state_36492;var statearr_36511_36562 = state_36492__$1;(statearr_36511_36562[(2)] = inst_36472);
(statearr_36511_36562[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (11)))
{var inst_36413 = (state_36492[(8)]);var inst_36415 = (state_36492[(9)]);var inst_36407 = (state_36492[(7)]);var inst_36430 = (state_36492[(13)]);var inst_36414 = (state_36492[(10)]);var inst_36441 = (state_36492[(14)]);var inst_36429 = (state_36492[(12)]);var inst_36436 = (function (){var expr__36417 = inst_36415;var ctx = inst_36407;var pred__36416 = cljs.core._EQ_;var partInfo = inst_36430;var v = inst_36414;var params = inst_36430;var expr__36432 = inst_36429;var ch = inst_36415;var event = inst_36429;var pred__36431 = cljs.core._EQ_;var vec__36409 = inst_36413;return ((function (expr__36417,ctx,pred__36416,partInfo,v,params,expr__36432,ch,event,pred__36431,vec__36409,inst_36413,inst_36415,inst_36407,inst_36430,inst_36414,inst_36441,inst_36429,state_val_36493,c__6202__auto___36547,onView,onModel,onTick,mspf){
return (function (p1__36047_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36047_SHARP_),partInfo.id);
});
;})(expr__36417,ctx,pred__36416,partInfo,v,params,expr__36432,ch,event,pred__36431,vec__36409,inst_36413,inst_36415,inst_36407,inst_36430,inst_36414,inst_36441,inst_36429,state_val_36493,c__6202__auto___36547,onView,onModel,onTick,mspf))
})();var inst_36437 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_36438 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36437,null));var inst_36439 = cljs.core.get_in.call(null,inst_36407,inst_36438);var inst_36440 = cljs.core.filter.call(null,inst_36436,inst_36439);var inst_36441__$1 = cljs.core.first.call(null,inst_36440);var inst_36442 = app.main2.createParticle.call(null,inst_36430);var inst_36443 = cljs.core.some_QMARK_.call(null,inst_36441__$1);var state_36492__$1 = (function (){var statearr_36512 = state_36492;(statearr_36512[(11)] = inst_36442);
(statearr_36512[(14)] = inst_36441__$1);
return statearr_36512;
})();if(inst_36443)
{var statearr_36513_36563 = state_36492__$1;(statearr_36513_36563[(1)] = (14));
} else
{var statearr_36514_36564 = state_36492__$1;(statearr_36514_36564[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (9)))
{var inst_36415 = (state_36492[(9)]);var inst_36476 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_36415);var state_36492__$1 = state_36492;if(inst_36476)
{var statearr_36515_36565 = state_36492__$1;(statearr_36515_36565[(1)] = (20));
} else
{var statearr_36516_36566 = state_36492__$1;(statearr_36516_36566[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (5)))
{var inst_36407 = (state_36492[(7)]);var inst_36414 = (state_36492[(10)]);var inst_36421 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_36422 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36421,null));var inst_36423 = cljs.core.partial.call(null,app.particle.update,inst_36414);var inst_36424 = cljs.core.update_in.call(null,inst_36407,inst_36422,inst_36423);var inst_36425 = app.main2.draw2D.call(null,inst_36424);var state_36492__$1 = state_36492;var statearr_36517_36567 = state_36492__$1;(statearr_36517_36567[(2)] = inst_36425);
(statearr_36517_36567[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (14)))
{var inst_36442 = (state_36492[(11)]);var inst_36407 = (state_36492[(7)]);var inst_36441 = (state_36492[(14)]);var inst_36445 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_36446 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36445,null));var inst_36447 = [inst_36441];var inst_36448 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_36449 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_36441);var inst_36450 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_36441);var inst_36451 = [inst_36449,inst_36450];var inst_36452 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36448,inst_36451);var inst_36453 = cljs.core.merge.call(null,inst_36442,inst_36452);var inst_36454 = [inst_36453];var inst_36455 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36447,inst_36454);var inst_36456 = cljs.core.partial.call(null,cljs.core.replace,inst_36455);var inst_36457 = cljs.core.update_in.call(null,inst_36407,inst_36446,inst_36456);var state_36492__$1 = state_36492;var statearr_36518_36568 = state_36492__$1;(statearr_36518_36568[(2)] = inst_36457);
(statearr_36518_36568[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (16)))
{var inst_36463 = (state_36492[(2)]);var state_36492__$1 = state_36492;var statearr_36519_36569 = state_36492__$1;(statearr_36519_36569[(2)] = inst_36463);
(statearr_36519_36569[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (10)))
{var inst_36485 = (state_36492[(2)]);var state_36492__$1 = state_36492;var statearr_36520_36570 = state_36492__$1;(statearr_36520_36570[(2)] = inst_36485);
(statearr_36520_36570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (18)))
{var inst_36429 = (state_36492[(12)]);var inst_36468 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36429));var inst_36469 = (new Error(inst_36468));var inst_36470 = (function(){throw inst_36469})();var state_36492__$1 = state_36492;var statearr_36521_36571 = state_36492__$1;(statearr_36521_36571[(2)] = inst_36470);
(statearr_36521_36571[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36493 === (8)))
{var inst_36414 = (state_36492[(10)]);var inst_36429 = (state_36492[(12)]);var inst_36429__$1 = (inst_36414[(0)]);var inst_36430 = (inst_36414[(1)]);var inst_36434 = cljs.core._EQ_.call(null,"edit-particle",inst_36429__$1);var state_36492__$1 = (function (){var statearr_36522 = state_36492;(statearr_36522[(13)] = inst_36430);
(statearr_36522[(12)] = inst_36429__$1);
return statearr_36522;
})();if(inst_36434)
{var statearr_36523_36572 = state_36492__$1;(statearr_36523_36572[(1)] = (11));
} else
{var statearr_36524_36573 = state_36492__$1;(statearr_36524_36573[(1)] = (12));
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
});})(c__6202__auto___36547,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36547,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36528[(0)] = state_machine__6188__auto__);
(statearr_36528[(1)] = (1));
return statearr_36528;
});
var state_machine__6188__auto____1 = (function (state_36492){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36529){if((e36529 instanceof Object))
{var ex__6191__auto__ = e36529;var statearr_36530_36574 = state_36492;(statearr_36530_36574[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36575 = state_36492;
state_36492 = G__36575;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36492){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36547,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36531 = f__6203__auto__.call(null);(statearr_36531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36547);
return statearr_36531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36547,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
