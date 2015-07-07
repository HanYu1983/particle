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
return (function (p__51040){var map__51041 = p__51040;var map__51041__$1 = ((cljs.core.seq_QMARK_.call(null,map__51041))?cljs.core.apply.call(null,cljs.core.hash_map,map__51041):map__51041);var ctx = map__51041__$1;var map__51042 = cljs.core.get.call(null,map__51041__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__51042__$1 = ((cljs.core.seq_QMARK_.call(null,map__51042))?cljs.core.apply.call(null,cljs.core.hash_map,map__51042):map__51042);var ps = cljs.core.get.call(null,map__51042__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__51043_51058 = canvas_ctx;(G__51043_51058["fillStyle"] = "white");
G__51043_51058.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__51043_51058["fillStyle"] = "red");
G__51043_51058.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__51044_51059 = cljs.core.seq.call(null,ps);var chunk__51045_51060 = null;var count__51046_51061 = (0);var i__51047_51062 = (0);while(true){
if((i__51047_51062 < count__51046_51061))
{var map__51048_51063 = cljs.core._nth.call(null,chunk__51045_51060,i__51047_51062);var map__51048_51064__$1 = ((cljs.core.seq_QMARK_.call(null,map__51048_51063))?cljs.core.apply.call(null,cljs.core.hash_map,map__51048_51063):map__51048_51063);var p_51065 = map__51048_51064__$1;var vec__51049_51066 = cljs.core.get.call(null,map__51048_51064__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_51067 = cljs.core.nth.call(null,vec__51049_51066,(0),null);var y_51068 = cljs.core.nth.call(null,vec__51049_51066,(1),null);var r_51069 = cljs.core.nth.call(null,vec__51049_51066,(2),null);var vec__51050_51070 = cljs.core.get.call(null,map__51048_51064__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_51071 = cljs.core.nth.call(null,vec__51050_51070,(0),null);var ys_51072 = cljs.core.nth.call(null,vec__51050_51070,(1),null);var vec__51051_51073 = cljs.core.get.call(null,map__51048_51064__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_51074__$1 = cljs.core.nth.call(null,vec__51051_51073,(0),null);var g_51075 = cljs.core.nth.call(null,vec__51051_51073,(1),null);var b_51076 = cljs.core.nth.call(null,vec__51051_51073,(2),null);var a_51077 = cljs.core.nth.call(null,vec__51051_51073,(3),null);var G__51052_51078 = canvas_ctx;(G__51052_51078["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_51074__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_51075 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_51076 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_51077)+")"));
G__51052_51078.fillRect(x_51067,y_51068,xs_51071,ys_51072);
{
var G__51079 = seq__51044_51059;
var G__51080 = chunk__51045_51060;
var G__51081 = count__51046_51061;
var G__51082 = (i__51047_51062 + (1));
seq__51044_51059 = G__51079;
chunk__51045_51060 = G__51080;
count__51046_51061 = G__51081;
i__51047_51062 = G__51082;
continue;
}
} else
{var temp__4126__auto___51083 = cljs.core.seq.call(null,seq__51044_51059);if(temp__4126__auto___51083)
{var seq__51044_51084__$1 = temp__4126__auto___51083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51044_51084__$1))
{var c__4307__auto___51085 = cljs.core.chunk_first.call(null,seq__51044_51084__$1);{
var G__51086 = cljs.core.chunk_rest.call(null,seq__51044_51084__$1);
var G__51087 = c__4307__auto___51085;
var G__51088 = cljs.core.count.call(null,c__4307__auto___51085);
var G__51089 = (0);
seq__51044_51059 = G__51086;
chunk__51045_51060 = G__51087;
count__51046_51061 = G__51088;
i__51047_51062 = G__51089;
continue;
}
} else
{var map__51053_51090 = cljs.core.first.call(null,seq__51044_51084__$1);var map__51053_51091__$1 = ((cljs.core.seq_QMARK_.call(null,map__51053_51090))?cljs.core.apply.call(null,cljs.core.hash_map,map__51053_51090):map__51053_51090);var p_51092 = map__51053_51091__$1;var vec__51054_51093 = cljs.core.get.call(null,map__51053_51091__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_51094 = cljs.core.nth.call(null,vec__51054_51093,(0),null);var y_51095 = cljs.core.nth.call(null,vec__51054_51093,(1),null);var r_51096 = cljs.core.nth.call(null,vec__51054_51093,(2),null);var vec__51055_51097 = cljs.core.get.call(null,map__51053_51091__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_51098 = cljs.core.nth.call(null,vec__51055_51097,(0),null);var ys_51099 = cljs.core.nth.call(null,vec__51055_51097,(1),null);var vec__51056_51100 = cljs.core.get.call(null,map__51053_51091__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_51101__$1 = cljs.core.nth.call(null,vec__51056_51100,(0),null);var g_51102 = cljs.core.nth.call(null,vec__51056_51100,(1),null);var b_51103 = cljs.core.nth.call(null,vec__51056_51100,(2),null);var a_51104 = cljs.core.nth.call(null,vec__51056_51100,(3),null);var G__51057_51105 = canvas_ctx;(G__51057_51105["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_51101__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_51102 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_51103 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_51104)+")"));
G__51057_51105.fillRect(x_51094,y_51095,xs_51098,ys_51099);
{
var G__51106 = cljs.core.next.call(null,seq__51044_51084__$1);
var G__51107 = null;
var G__51108 = (0);
var G__51109 = (0);
seq__51044_51059 = G__51106;
chunk__51045_51060 = G__51107;
count__51046_51061 = G__51108;
i__51047_51062 = G__51109;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj51138 = {};return obj51138;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__51136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__51136,(0),null);var ch = cljs.core.nth.call(null,vec__51136,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__51136,cw,ch){
return (function (p__51139){var map__51140 = p__51139;var map__51140__$1 = ((cljs.core.seq_QMARK_.call(null,map__51140))?cljs.core.apply.call(null,cljs.core.hash_map,map__51140):map__51140);var ctx = map__51140__$1;var timer = cljs.core.get.call(null,map__51140__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__51141 = cljs.core.get.call(null,map__51140__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__51141__$1 = ((cljs.core.seq_QMARK_.call(null,map__51141))?cljs.core.apply.call(null,cljs.core.hash_map,map__51141):map__51141);var ps = cljs.core.get.call(null,map__51141__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___51162 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___51162 == null))
{} else
{var faceImg_51163 = temp__4130__auto___51162;var tex_51164 = app.main2.cacheTex.call(null,gl__$1,faceImg_51163);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_51164,faceImg_51163,temp__4130__auto___51162,map__51140,map__51140__$1,ctx,timer,map__51141,map__51141__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__51136,cw,ch){
return (function (pobj){var seq__51142 = cljs.core.seq.call(null,ps);var chunk__51143 = null;var count__51144 = (0);var i__51145 = (0);while(true){
if((i__51145 < count__51144))
{var map__51146 = cljs.core._nth.call(null,chunk__51143,i__51145);var map__51146__$1 = ((cljs.core.seq_QMARK_.call(null,map__51146))?cljs.core.apply.call(null,cljs.core.hash_map,map__51146):map__51146);var p = map__51146__$1;var vec__51147 = cljs.core.get.call(null,map__51146__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__51147,(0),null);var y = cljs.core.nth.call(null,vec__51147,(1),null);var rot = cljs.core.nth.call(null,vec__51147,(2),null);var vec__51148 = cljs.core.get.call(null,map__51146__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__51148,(0),null);var ys = cljs.core.nth.call(null,vec__51148,(1),null);var vec__51149 = cljs.core.get.call(null,map__51146__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__51149,(0),null);var g = cljs.core.nth.call(null,vec__51149,(1),null);var b = cljs.core.nth.call(null,vec__51149,(2),null);var a = cljs.core.nth.call(null,vec__51149,(3),null);var proj_51165 = (function (){var G__51150 = (new THREE.Matrix4());G__51150.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__51150;
})();var tras_51166 = (function (){var G__51151 = (new THREE.Matrix4());G__51151.makeTranslation(x,y,(0));
G__51151.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__51151.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__51151;
})();var texTx_51167 = (function (){var G__51152 = (new THREE.Matrix3());return G__51152;
})();var colorTx_51168 = (function (){var G__51153 = (new THREE.Matrix4());G__51153.makeTranslation(r,g,b);
return G__51153;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_51165.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_51166.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_51164,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_51167.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_51168.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__51169 = seq__51142;
var G__51170 = chunk__51143;
var G__51171 = count__51144;
var G__51172 = (i__51145 + (1));
seq__51142 = G__51169;
chunk__51143 = G__51170;
count__51144 = G__51171;
i__51145 = G__51172;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51142);if(temp__4126__auto__)
{var seq__51142__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51142__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__51142__$1);{
var G__51173 = cljs.core.chunk_rest.call(null,seq__51142__$1);
var G__51174 = c__4307__auto__;
var G__51175 = cljs.core.count.call(null,c__4307__auto__);
var G__51176 = (0);
seq__51142 = G__51173;
chunk__51143 = G__51174;
count__51144 = G__51175;
i__51145 = G__51176;
continue;
}
} else
{var map__51154 = cljs.core.first.call(null,seq__51142__$1);var map__51154__$1 = ((cljs.core.seq_QMARK_.call(null,map__51154))?cljs.core.apply.call(null,cljs.core.hash_map,map__51154):map__51154);var p = map__51154__$1;var vec__51155 = cljs.core.get.call(null,map__51154__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__51155,(0),null);var y = cljs.core.nth.call(null,vec__51155,(1),null);var rot = cljs.core.nth.call(null,vec__51155,(2),null);var vec__51156 = cljs.core.get.call(null,map__51154__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__51156,(0),null);var ys = cljs.core.nth.call(null,vec__51156,(1),null);var vec__51157 = cljs.core.get.call(null,map__51154__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__51157,(0),null);var g = cljs.core.nth.call(null,vec__51157,(1),null);var b = cljs.core.nth.call(null,vec__51157,(2),null);var a = cljs.core.nth.call(null,vec__51157,(3),null);var proj_51177 = (function (){var G__51158 = (new THREE.Matrix4());G__51158.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__51158;
})();var tras_51178 = (function (){var G__51159 = (new THREE.Matrix4());G__51159.makeTranslation(x,y,(0));
G__51159.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__51159.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__51159;
})();var texTx_51179 = (function (){var G__51160 = (new THREE.Matrix3());return G__51160;
})();var colorTx_51180 = (function (){var G__51161 = (new THREE.Matrix4());G__51161.makeTranslation(r,g,b);
return G__51161;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_51177.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_51178.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_51164,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_51179.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_51180.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__51181 = cljs.core.next.call(null,seq__51142__$1);
var G__51182 = null;
var G__51183 = (0);
var G__51184 = (0);
seq__51142 = G__51181;
chunk__51143 = G__51182;
count__51144 = G__51183;
i__51145 = G__51184;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_51164,faceImg_51163,temp__4130__auto___51162,map__51140,map__51140__$1,ctx,timer,map__51141,map__51141__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__51136,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__51136,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51187){var vec__51188 = p__51187;var k = cljs.core.nth.call(null,vec__51188,(0),null);var v = cljs.core.nth.call(null,vec__51188,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));return app.particle.create.call(null,obj);
});
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (state_51416){var state_val_51417 = (state_51416[(1)]);if((state_val_51417 === (2)))
{var inst_51414 = (state_51416[(2)]);var state_51416__$1 = state_51416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51416__$1,inst_51414);
} else
{if((state_val_51417 === (1)))
{var state_51416__$1 = state_51416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51416__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_51421 = [null,null,null,null,null,null,null];(statearr_51421[(0)] = state_machine__6189__auto__);
(statearr_51421[(1)] = (1));
return statearr_51421;
});
var state_machine__6189__auto____1 = (function (state_51416){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_51416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e51422){if((e51422 instanceof Object))
{var ex__6192__auto__ = e51422;var statearr_51423_51636 = state_51416;(statearr_51423_51636[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51637 = state_51416;
state_51416 = G__51637;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_51416){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_51416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_51424 = f__6204__auto__.call(null);(statearr_51424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_51424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onTick,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6203__auto___51638 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___51638,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___51638,onView,onModel,onTick,mspf){
return (function (state_51433){var state_val_51434 = (state_51433[(1)]);if((state_val_51434 === (4)))
{var inst_51427 = (state_51433[(2)]);var inst_51428 = common.onModel.onNext(inst_51427);var state_51433__$1 = (function (){var statearr_51435 = state_51433;(statearr_51435[(7)] = inst_51428);
return statearr_51435;
})();var statearr_51436_51639 = state_51433__$1;(statearr_51436_51639[(2)] = null);
(statearr_51436_51639[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51434 === (3)))
{var inst_51431 = (state_51433[(2)]);var state_51433__$1 = state_51433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51433__$1,inst_51431);
} else
{if((state_val_51434 === (2)))
{var state_51433__$1 = state_51433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51433__$1,(4),onModel);
} else
{if((state_val_51434 === (1)))
{var state_51433__$1 = state_51433;var statearr_51437_51640 = state_51433__$1;(statearr_51437_51640[(2)] = null);
(statearr_51437_51640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___51638,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___51638,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_51441 = [null,null,null,null,null,null,null,null];(statearr_51441[(0)] = state_machine__6189__auto__);
(statearr_51441[(1)] = (1));
return statearr_51441;
});
var state_machine__6189__auto____1 = (function (state_51433){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_51433);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e51442){if((e51442 instanceof Object))
{var ex__6192__auto__ = e51442;var statearr_51443_51641 = state_51433;(statearr_51443_51641[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51642 = state_51433;
state_51433 = G__51642;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_51433){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_51433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___51638,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_51444 = f__6204__auto__.call(null);(statearr_51444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___51638);
return statearr_51444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___51638,onView,onModel,onTick,mspf))
);
var c__6203__auto___51643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___51643,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___51643,onView,onModel,onTick,mspf){
return (function (state_51463){var state_val_51464 = (state_51463[(1)]);if((state_val_51464 === (5)))
{var inst_51454 = (state_51463[(7)]);var inst_51447 = (state_51463[(8)]);var inst_51458 = (state_51463[(2)]);var tmp51465 = inst_51447;var inst_51447__$1 = tmp51465;var inst_51448 = inst_51454;var state_51463__$1 = (function (){var statearr_51466 = state_51463;(statearr_51466[(9)] = inst_51458);
(statearr_51466[(8)] = inst_51447__$1);
(statearr_51466[(10)] = inst_51448);
return statearr_51466;
})();var statearr_51467_51644 = state_51463__$1;(statearr_51467_51644[(2)] = null);
(statearr_51467_51644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51464 === (4)))
{var inst_51454 = (state_51463[(7)]);var inst_51448 = (state_51463[(10)]);var inst_51452 = (state_51463[(2)]);var inst_51453 = (new Date());var inst_51454__$1 = inst_51453.getTime();var inst_51455 = (inst_51454__$1 - inst_51448);var inst_51456 = (inst_51455 / (1000));var state_51463__$1 = (function (){var statearr_51468 = state_51463;(statearr_51468[(7)] = inst_51454__$1);
(statearr_51468[(11)] = inst_51452);
return statearr_51468;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51463__$1,(5),onTick,inst_51456);
} else
{if((state_val_51464 === (3)))
{var inst_51461 = (state_51463[(2)]);var state_51463__$1 = state_51463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51463__$1,inst_51461);
} else
{if((state_val_51464 === (2)))
{var inst_51447 = (state_51463[(8)]);var inst_51450 = cljs.core.async.timeout.call(null,inst_51447);var state_51463__$1 = state_51463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51463__$1,(4),inst_51450);
} else
{if((state_val_51464 === (1)))
{var inst_51445 = (new Date());var inst_51446 = inst_51445.getTime();var inst_51447 = mspf;var inst_51448 = inst_51446;var state_51463__$1 = (function (){var statearr_51469 = state_51463;(statearr_51469[(8)] = inst_51447);
(statearr_51469[(10)] = inst_51448);
return statearr_51469;
})();var statearr_51470_51645 = state_51463__$1;(statearr_51470_51645[(2)] = null);
(statearr_51470_51645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___51643,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___51643,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_51474 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51474[(0)] = state_machine__6189__auto__);
(statearr_51474[(1)] = (1));
return statearr_51474;
});
var state_machine__6189__auto____1 = (function (state_51463){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_51463);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e51475){if((e51475 instanceof Object))
{var ex__6192__auto__ = e51475;var statearr_51476_51646 = state_51463;(statearr_51476_51646[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51647 = state_51463;
state_51463 = G__51647;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_51463){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_51463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___51643,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_51477 = f__6204__auto__.call(null);(statearr_51477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___51643);
return statearr_51477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___51643,onView,onModel,onTick,mspf))
);
var c__6203__auto___51648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___51648,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___51648,onView,onModel,onTick,mspf){
return (function (state_51498){var state_val_51499 = (state_51498[(1)]);if((state_val_51499 === (5)))
{var inst_51496 = (state_51498[(2)]);var state_51498__$1 = state_51498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51498__$1,inst_51496);
} else
{if((state_val_51499 === (4)))
{var inst_51489 = (state_51498[(2)]);var inst_51492 = [(100),(0),(0)];var inst_51493 = {"id":"x2","vel":inst_51492};var inst_51494 = ["edit-particle",inst_51493];var state_51498__$1 = (function (){var statearr_51500 = state_51498;(statearr_51500[(7)] = inst_51489);
return statearr_51500;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51498__$1,(5),onView,inst_51494);
} else
{if((state_val_51499 === (3)))
{var inst_51486 = (state_51498[(2)]);var inst_51487 = cljs.core.async.timeout.call(null,(1000));var state_51498__$1 = (function (){var statearr_51501 = state_51498;(statearr_51501[(8)] = inst_51486);
return statearr_51501;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51498__$1,(4),inst_51487);
} else
{if((state_val_51499 === (2)))
{var inst_51480 = (state_51498[(2)]);var inst_51483 = {"id":"x1"};var inst_51484 = ["edit-particle",inst_51483];var state_51498__$1 = (function (){var statearr_51502 = state_51498;(statearr_51502[(9)] = inst_51480);
return statearr_51502;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51498__$1,(3),onView,inst_51484);
} else
{if((state_val_51499 === (1)))
{var inst_51478 = cljs.core.async.timeout.call(null,(1000));var state_51498__$1 = state_51498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51498__$1,(2),inst_51478);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___51648,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___51648,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_51506 = [null,null,null,null,null,null,null,null,null,null];(statearr_51506[(0)] = state_machine__6189__auto__);
(statearr_51506[(1)] = (1));
return statearr_51506;
});
var state_machine__6189__auto____1 = (function (state_51498){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_51498);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e51507){if((e51507 instanceof Object))
{var ex__6192__auto__ = e51507;var statearr_51508_51649 = state_51498;(statearr_51508_51649[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51650 = state_51498;
state_51498 = G__51650;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_51498){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_51498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___51648,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_51509 = f__6204__auto__.call(null);(statearr_51509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___51648);
return statearr_51509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___51648,onView,onModel,onTick,mspf))
);
var c__6203__auto___51651 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___51651,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___51651,onView,onModel,onTick,mspf){
return (function (state_51596){var state_val_51597 = (state_51596[(1)]);if((state_val_51597 === (7)))
{var inst_51591 = (state_51596[(2)]);var inst_51517 = inst_51591;var state_51596__$1 = (function (){var statearr_51598 = state_51596;(statearr_51598[(7)] = inst_51517);
return statearr_51598;
})();var statearr_51599_51652 = state_51596__$1;(statearr_51599_51652[(2)] = null);
(statearr_51599_51652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (20)))
{var inst_51517 = (state_51596[(7)]);var state_51596__$1 = state_51596;var statearr_51600_51653 = state_51596__$1;(statearr_51600_51653[(2)] = inst_51517);
(statearr_51600_51653[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (1)))
{var inst_51510 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_51511 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_51512 = cljs.core.List.EMPTY;var inst_51513 = [inst_51512];var inst_51514 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51511,inst_51513);var inst_51515 = [(0),inst_51514];var inst_51516 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51510,inst_51515);var inst_51517 = inst_51516;var state_51596__$1 = (function (){var statearr_51601 = state_51596;(statearr_51601[(7)] = inst_51517);
return statearr_51601;
})();var statearr_51602_51654 = state_51596__$1;(statearr_51602_51654[(2)] = null);
(statearr_51602_51654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (4)))
{var inst_51525 = (state_51596[(8)]);var inst_51523 = (state_51596[(9)]);var inst_51523__$1 = (state_51596[(2)]);var inst_51524 = cljs.core.nth.call(null,inst_51523__$1,(0),null);var inst_51525__$1 = cljs.core.nth.call(null,inst_51523__$1,(1),null);var inst_51529 = cljs.core._EQ_.call(null,onTick,inst_51525__$1);var state_51596__$1 = (function (){var statearr_51603 = state_51596;(statearr_51603[(8)] = inst_51525__$1);
(statearr_51603[(10)] = inst_51524);
(statearr_51603[(9)] = inst_51523__$1);
return statearr_51603;
})();if(inst_51529)
{var statearr_51604_51655 = state_51596__$1;(statearr_51604_51655[(1)] = (5));
} else
{var statearr_51605_51656 = state_51596__$1;(statearr_51605_51656[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (15)))
{var inst_51552 = (state_51596[(11)]);var inst_51517 = (state_51596[(7)]);var inst_51563 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_51564 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51563,null));var inst_51565 = cljs.core.update_in.call(null,inst_51517,inst_51564,cljs.core.conj,inst_51552);var state_51596__$1 = state_51596;var statearr_51606_51657 = state_51596__$1;(statearr_51606_51657[(2)] = inst_51565);
(statearr_51606_51657[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (21)))
{var inst_51525 = (state_51596[(8)]);var inst_51583 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51525));var inst_51584 = (new Error(inst_51583));var inst_51585 = (function(){throw inst_51584})();var state_51596__$1 = state_51596;var statearr_51607_51658 = state_51596__$1;(statearr_51607_51658[(2)] = inst_51585);
(statearr_51607_51658[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (13)))
{var inst_51578 = (state_51596[(2)]);var state_51596__$1 = state_51596;var statearr_51608_51659 = state_51596__$1;(statearr_51608_51659[(2)] = inst_51578);
(statearr_51608_51659[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (22)))
{var inst_51587 = (state_51596[(2)]);var state_51596__$1 = state_51596;var statearr_51609_51660 = state_51596__$1;(statearr_51609_51660[(2)] = inst_51587);
(statearr_51609_51660[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (6)))
{var inst_51525 = (state_51596[(8)]);var inst_51537 = cljs.core._EQ_.call(null,onView,inst_51525);var state_51596__$1 = state_51596;if(inst_51537)
{var statearr_51610_51661 = state_51596__$1;(statearr_51610_51661[(1)] = (8));
} else
{var statearr_51611_51662 = state_51596__$1;(statearr_51611_51662[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (17)))
{var inst_51517 = (state_51596[(7)]);var state_51596__$1 = state_51596;var statearr_51612_51663 = state_51596__$1;(statearr_51612_51663[(2)] = inst_51517);
(statearr_51612_51663[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (3)))
{var inst_51594 = (state_51596[(2)]);var state_51596__$1 = state_51596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51596__$1,inst_51594);
} else
{if((state_val_51597 === (12)))
{var inst_51539 = (state_51596[(12)]);var inst_51569 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_51539);var state_51596__$1 = state_51596;if(inst_51569)
{var statearr_51613_51664 = state_51596__$1;(statearr_51613_51664[(1)] = (17));
} else
{var statearr_51614_51665 = state_51596__$1;(statearr_51614_51665[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (2)))
{var inst_51520 = [onView,onTick];var inst_51521 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51520,null));var state_51596__$1 = state_51596;return cljs.core.async.ioc_alts_BANG_.call(null,state_51596__$1,(4),inst_51521);
} else
{if((state_val_51597 === (19)))
{var inst_51576 = (state_51596[(2)]);var state_51596__$1 = state_51596;var statearr_51615_51666 = state_51596__$1;(statearr_51615_51666[(2)] = inst_51576);
(statearr_51615_51666[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (11)))
{var inst_51525 = (state_51596[(8)]);var inst_51524 = (state_51596[(10)]);var inst_51523 = (state_51596[(9)]);var inst_51540 = (state_51596[(13)]);var inst_51539 = (state_51596[(12)]);var inst_51551 = (state_51596[(14)]);var inst_51517 = (state_51596[(7)]);var inst_51546 = (function (){var ctx = inst_51517;var expr__51542 = inst_51539;var partInfo = inst_51540;var v = inst_51524;var vec__51519 = inst_51523;var params = inst_51540;var ch = inst_51525;var pred__51526 = cljs.core._EQ_;var pred__51541 = cljs.core._EQ_;var event = inst_51539;var expr__51527 = inst_51525;return ((function (ctx,expr__51542,partInfo,v,vec__51519,params,ch,pred__51526,pred__51541,event,expr__51527,inst_51525,inst_51524,inst_51523,inst_51540,inst_51539,inst_51551,inst_51517,state_val_51597,c__6203__auto___51651,onView,onModel,onTick,mspf){
return (function (p1__51189_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51189_SHARP_),partInfo.id);
});
;})(ctx,expr__51542,partInfo,v,vec__51519,params,ch,pred__51526,pred__51541,event,expr__51527,inst_51525,inst_51524,inst_51523,inst_51540,inst_51539,inst_51551,inst_51517,state_val_51597,c__6203__auto___51651,onView,onModel,onTick,mspf))
})();var inst_51547 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_51548 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51547,null));var inst_51549 = cljs.core.get_in.call(null,inst_51517,inst_51548);var inst_51550 = cljs.core.filter.call(null,inst_51546,inst_51549);var inst_51551__$1 = cljs.core.first.call(null,inst_51550);var inst_51552 = app.main2.createParticle.call(null,inst_51540);var inst_51553 = cljs.core.some_QMARK_.call(null,inst_51551__$1);var state_51596__$1 = (function (){var statearr_51616 = state_51596;(statearr_51616[(11)] = inst_51552);
(statearr_51616[(14)] = inst_51551__$1);
return statearr_51616;
})();if(inst_51553)
{var statearr_51617_51667 = state_51596__$1;(statearr_51617_51667[(1)] = (14));
} else
{var statearr_51618_51668 = state_51596__$1;(statearr_51618_51668[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (9)))
{var inst_51525 = (state_51596[(8)]);var inst_51580 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_51525);var state_51596__$1 = state_51596;if(inst_51580)
{var statearr_51619_51669 = state_51596__$1;(statearr_51619_51669[(1)] = (20));
} else
{var statearr_51620_51670 = state_51596__$1;(statearr_51620_51670[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (5)))
{var inst_51524 = (state_51596[(10)]);var inst_51517 = (state_51596[(7)]);var inst_51531 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_51532 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51531,null));var inst_51533 = cljs.core.partial.call(null,app.particle.update,inst_51524);var inst_51534 = cljs.core.update_in.call(null,inst_51517,inst_51532,inst_51533);var inst_51535 = app.main2.draw2D.call(null,inst_51534);var state_51596__$1 = state_51596;var statearr_51621_51671 = state_51596__$1;(statearr_51621_51671[(2)] = inst_51535);
(statearr_51621_51671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (14)))
{var inst_51552 = (state_51596[(11)]);var inst_51551 = (state_51596[(14)]);var inst_51517 = (state_51596[(7)]);var inst_51555 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_51556 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51555,null));var inst_51557 = [inst_51551];var inst_51558 = [inst_51552];var inst_51559 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51557,inst_51558);var inst_51560 = cljs.core.partial.call(null,cljs.core.replace,inst_51559);var inst_51561 = cljs.core.update_in.call(null,inst_51517,inst_51556,inst_51560);var state_51596__$1 = state_51596;var statearr_51622_51672 = state_51596__$1;(statearr_51622_51672[(2)] = inst_51561);
(statearr_51622_51672[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (16)))
{var inst_51567 = (state_51596[(2)]);var state_51596__$1 = state_51596;var statearr_51623_51673 = state_51596__$1;(statearr_51623_51673[(2)] = inst_51567);
(statearr_51623_51673[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (10)))
{var inst_51589 = (state_51596[(2)]);var state_51596__$1 = state_51596;var statearr_51624_51674 = state_51596__$1;(statearr_51624_51674[(2)] = inst_51589);
(statearr_51624_51674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (18)))
{var inst_51539 = (state_51596[(12)]);var inst_51572 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51539));var inst_51573 = (new Error(inst_51572));var inst_51574 = (function(){throw inst_51573})();var state_51596__$1 = state_51596;var statearr_51625_51675 = state_51596__$1;(statearr_51625_51675[(2)] = inst_51574);
(statearr_51625_51675[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51597 === (8)))
{var inst_51524 = (state_51596[(10)]);var inst_51539 = (state_51596[(12)]);var inst_51539__$1 = (inst_51524[(0)]);var inst_51540 = (inst_51524[(1)]);var inst_51544 = cljs.core._EQ_.call(null,"edit-particle",inst_51539__$1);var state_51596__$1 = (function (){var statearr_51626 = state_51596;(statearr_51626[(13)] = inst_51540);
(statearr_51626[(12)] = inst_51539__$1);
return statearr_51626;
})();if(inst_51544)
{var statearr_51627_51676 = state_51596__$1;(statearr_51627_51676[(1)] = (11));
} else
{var statearr_51628_51677 = state_51596__$1;(statearr_51628_51677[(1)] = (12));
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
});})(c__6203__auto___51651,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___51651,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_51632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51632[(0)] = state_machine__6189__auto__);
(statearr_51632[(1)] = (1));
return statearr_51632;
});
var state_machine__6189__auto____1 = (function (state_51596){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_51596);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e51633){if((e51633 instanceof Object))
{var ex__6192__auto__ = e51633;var statearr_51634_51678 = state_51596;(statearr_51634_51678[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51679 = state_51596;
state_51596 = G__51679;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_51596){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_51596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___51651,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_51635 = f__6204__auto__.call(null);(statearr_51635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___51651);
return statearr_51635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___51651,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
