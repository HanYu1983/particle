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
return (function (p__19479){var map__19480 = p__19479;var map__19480__$1 = ((cljs.core.seq_QMARK_.call(null,map__19480))?cljs.core.apply.call(null,cljs.core.hash_map,map__19480):map__19480);var ctx = map__19480__$1;var map__19481 = cljs.core.get.call(null,map__19480__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__19481__$1 = ((cljs.core.seq_QMARK_.call(null,map__19481))?cljs.core.apply.call(null,cljs.core.hash_map,map__19481):map__19481);var ps = cljs.core.get.call(null,map__19481__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__19482_19497 = canvas_ctx;(G__19482_19497["fillStyle"] = "white");
G__19482_19497.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__19482_19497["fillStyle"] = "red");
G__19482_19497.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__19483_19498 = cljs.core.seq.call(null,ps);var chunk__19484_19499 = null;var count__19485_19500 = (0);var i__19486_19501 = (0);while(true){
if((i__19486_19501 < count__19485_19500))
{var map__19487_19502 = cljs.core._nth.call(null,chunk__19484_19499,i__19486_19501);var map__19487_19503__$1 = ((cljs.core.seq_QMARK_.call(null,map__19487_19502))?cljs.core.apply.call(null,cljs.core.hash_map,map__19487_19502):map__19487_19502);var p_19504 = map__19487_19503__$1;var vec__19488_19505 = cljs.core.get.call(null,map__19487_19503__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_19506 = cljs.core.nth.call(null,vec__19488_19505,(0),null);var y_19507 = cljs.core.nth.call(null,vec__19488_19505,(1),null);var r_19508 = cljs.core.nth.call(null,vec__19488_19505,(2),null);var vec__19489_19509 = cljs.core.get.call(null,map__19487_19503__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_19510 = cljs.core.nth.call(null,vec__19489_19509,(0),null);var ys_19511 = cljs.core.nth.call(null,vec__19489_19509,(1),null);var vec__19490_19512 = cljs.core.get.call(null,map__19487_19503__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_19513__$1 = cljs.core.nth.call(null,vec__19490_19512,(0),null);var g_19514 = cljs.core.nth.call(null,vec__19490_19512,(1),null);var b_19515 = cljs.core.nth.call(null,vec__19490_19512,(2),null);var a_19516 = cljs.core.nth.call(null,vec__19490_19512,(3),null);var G__19491_19517 = canvas_ctx;(G__19491_19517["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_19513__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_19514 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_19515 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_19516)+")"));
G__19491_19517.fillRect(x_19506,y_19507,xs_19510,ys_19511);
{
var G__19518 = seq__19483_19498;
var G__19519 = chunk__19484_19499;
var G__19520 = count__19485_19500;
var G__19521 = (i__19486_19501 + (1));
seq__19483_19498 = G__19518;
chunk__19484_19499 = G__19519;
count__19485_19500 = G__19520;
i__19486_19501 = G__19521;
continue;
}
} else
{var temp__4126__auto___19522 = cljs.core.seq.call(null,seq__19483_19498);if(temp__4126__auto___19522)
{var seq__19483_19523__$1 = temp__4126__auto___19522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19483_19523__$1))
{var c__4307__auto___19524 = cljs.core.chunk_first.call(null,seq__19483_19523__$1);{
var G__19525 = cljs.core.chunk_rest.call(null,seq__19483_19523__$1);
var G__19526 = c__4307__auto___19524;
var G__19527 = cljs.core.count.call(null,c__4307__auto___19524);
var G__19528 = (0);
seq__19483_19498 = G__19525;
chunk__19484_19499 = G__19526;
count__19485_19500 = G__19527;
i__19486_19501 = G__19528;
continue;
}
} else
{var map__19492_19529 = cljs.core.first.call(null,seq__19483_19523__$1);var map__19492_19530__$1 = ((cljs.core.seq_QMARK_.call(null,map__19492_19529))?cljs.core.apply.call(null,cljs.core.hash_map,map__19492_19529):map__19492_19529);var p_19531 = map__19492_19530__$1;var vec__19493_19532 = cljs.core.get.call(null,map__19492_19530__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_19533 = cljs.core.nth.call(null,vec__19493_19532,(0),null);var y_19534 = cljs.core.nth.call(null,vec__19493_19532,(1),null);var r_19535 = cljs.core.nth.call(null,vec__19493_19532,(2),null);var vec__19494_19536 = cljs.core.get.call(null,map__19492_19530__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_19537 = cljs.core.nth.call(null,vec__19494_19536,(0),null);var ys_19538 = cljs.core.nth.call(null,vec__19494_19536,(1),null);var vec__19495_19539 = cljs.core.get.call(null,map__19492_19530__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_19540__$1 = cljs.core.nth.call(null,vec__19495_19539,(0),null);var g_19541 = cljs.core.nth.call(null,vec__19495_19539,(1),null);var b_19542 = cljs.core.nth.call(null,vec__19495_19539,(2),null);var a_19543 = cljs.core.nth.call(null,vec__19495_19539,(3),null);var G__19496_19544 = canvas_ctx;(G__19496_19544["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_19540__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_19541 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_19542 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_19543)+")"));
G__19496_19544.fillRect(x_19533,y_19534,xs_19537,ys_19538);
{
var G__19545 = cljs.core.next.call(null,seq__19483_19523__$1);
var G__19546 = null;
var G__19547 = (0);
var G__19548 = (0);
seq__19483_19498 = G__19545;
chunk__19484_19499 = G__19546;
count__19485_19500 = G__19547;
i__19486_19501 = G__19548;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj19577 = {};return obj19577;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__19575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__19575,(0),null);var ch = cljs.core.nth.call(null,vec__19575,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__19575,cw,ch){
return (function (p__19578){var map__19579 = p__19578;var map__19579__$1 = ((cljs.core.seq_QMARK_.call(null,map__19579))?cljs.core.apply.call(null,cljs.core.hash_map,map__19579):map__19579);var ctx = map__19579__$1;var timer = cljs.core.get.call(null,map__19579__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__19580 = cljs.core.get.call(null,map__19579__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__19580__$1 = ((cljs.core.seq_QMARK_.call(null,map__19580))?cljs.core.apply.call(null,cljs.core.hash_map,map__19580):map__19580);var ps = cljs.core.get.call(null,map__19580__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___19601 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___19601 == null))
{} else
{var faceImg_19602 = temp__4130__auto___19601;var tex_19603 = app.main2.cacheTex.call(null,gl__$1,faceImg_19602);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_19603,faceImg_19602,temp__4130__auto___19601,map__19579,map__19579__$1,ctx,timer,map__19580,map__19580__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__19575,cw,ch){
return (function (pobj){var seq__19581 = cljs.core.seq.call(null,ps);var chunk__19582 = null;var count__19583 = (0);var i__19584 = (0);while(true){
if((i__19584 < count__19583))
{var map__19585 = cljs.core._nth.call(null,chunk__19582,i__19584);var map__19585__$1 = ((cljs.core.seq_QMARK_.call(null,map__19585))?cljs.core.apply.call(null,cljs.core.hash_map,map__19585):map__19585);var p = map__19585__$1;var vec__19586 = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__19586,(0),null);var y = cljs.core.nth.call(null,vec__19586,(1),null);var rot = cljs.core.nth.call(null,vec__19586,(2),null);var vec__19587 = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__19587,(0),null);var ys = cljs.core.nth.call(null,vec__19587,(1),null);var vec__19588 = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__19588,(0),null);var g = cljs.core.nth.call(null,vec__19588,(1),null);var b = cljs.core.nth.call(null,vec__19588,(2),null);var a = cljs.core.nth.call(null,vec__19588,(3),null);var proj_19604 = (function (){var G__19589 = (new THREE.Matrix4());G__19589.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__19589;
})();var tras_19605 = (function (){var G__19590 = (new THREE.Matrix4());G__19590.makeTranslation(x,y,(0));
G__19590.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__19590.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__19590;
})();var texTx_19606 = (function (){var G__19591 = (new THREE.Matrix3());return G__19591;
})();var colorTx_19607 = (function (){var G__19592 = (new THREE.Matrix4());G__19592.makeTranslation(r,g,b);
return G__19592;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_19604.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_19605.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_19603,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_19606.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_19607.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__19608 = seq__19581;
var G__19609 = chunk__19582;
var G__19610 = count__19583;
var G__19611 = (i__19584 + (1));
seq__19581 = G__19608;
chunk__19582 = G__19609;
count__19583 = G__19610;
i__19584 = G__19611;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19581);if(temp__4126__auto__)
{var seq__19581__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19581__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__19581__$1);{
var G__19612 = cljs.core.chunk_rest.call(null,seq__19581__$1);
var G__19613 = c__4307__auto__;
var G__19614 = cljs.core.count.call(null,c__4307__auto__);
var G__19615 = (0);
seq__19581 = G__19612;
chunk__19582 = G__19613;
count__19583 = G__19614;
i__19584 = G__19615;
continue;
}
} else
{var map__19593 = cljs.core.first.call(null,seq__19581__$1);var map__19593__$1 = ((cljs.core.seq_QMARK_.call(null,map__19593))?cljs.core.apply.call(null,cljs.core.hash_map,map__19593):map__19593);var p = map__19593__$1;var vec__19594 = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__19594,(0),null);var y = cljs.core.nth.call(null,vec__19594,(1),null);var rot = cljs.core.nth.call(null,vec__19594,(2),null);var vec__19595 = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__19595,(0),null);var ys = cljs.core.nth.call(null,vec__19595,(1),null);var vec__19596 = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__19596,(0),null);var g = cljs.core.nth.call(null,vec__19596,(1),null);var b = cljs.core.nth.call(null,vec__19596,(2),null);var a = cljs.core.nth.call(null,vec__19596,(3),null);var proj_19616 = (function (){var G__19597 = (new THREE.Matrix4());G__19597.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__19597;
})();var tras_19617 = (function (){var G__19598 = (new THREE.Matrix4());G__19598.makeTranslation(x,y,(0));
G__19598.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__19598.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__19598;
})();var texTx_19618 = (function (){var G__19599 = (new THREE.Matrix3());return G__19599;
})();var colorTx_19619 = (function (){var G__19600 = (new THREE.Matrix4());G__19600.makeTranslation(r,g,b);
return G__19600;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_19616.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_19617.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_19603,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_19618.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_19619.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__19620 = cljs.core.next.call(null,seq__19581__$1);
var G__19621 = null;
var G__19622 = (0);
var G__19623 = (0);
seq__19581 = G__19620;
chunk__19582 = G__19621;
count__19583 = G__19622;
i__19584 = G__19623;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_19603,faceImg_19602,temp__4130__auto___19601,map__19579,map__19579__$1,ctx,timer,map__19580,map__19580__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__19575,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__19575,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19628){var vec__19629 = p__19628;var k = cljs.core.nth.call(null,vec__19629,(0),null);var v = cljs.core.nth.call(null,vec__19629,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__19630){var vec__19631 = p__19630;var k = cljs.core.nth.call(null,vec__19631,(0),null);var v = cljs.core.nth.call(null,vec__19631,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
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
return (function (state_19876){var state_val_19877 = (state_19876[(1)]);if((state_val_19877 === (2)))
{var inst_19874 = (state_19876[(2)]);var state_19876__$1 = state_19876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19876__$1,inst_19874);
} else
{if((state_val_19877 === (1)))
{var state_19876__$1 = state_19876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19876__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19881 = [null,null,null,null,null,null,null];(statearr_19881[(0)] = state_machine__6188__auto__);
(statearr_19881[(1)] = (1));
return statearr_19881;
});
var state_machine__6188__auto____1 = (function (state_19876){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19876);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19882){if((e19882 instanceof Object))
{var ex__6191__auto__ = e19882;var statearr_19883_20113 = state_19876;(statearr_19883_20113[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20114 = state_19876;
state_19876 = G__20114;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19876){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_19884 = f__6203__auto__.call(null);(statearr_19884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_19884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___20115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20115,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20115,onView,onModel,onTick,mspf){
return (function (state_19893){var state_val_19894 = (state_19893[(1)]);if((state_val_19894 === (4)))
{var inst_19887 = (state_19893[(2)]);var inst_19888 = common.onModel.onNext(inst_19887);var state_19893__$1 = (function (){var statearr_19895 = state_19893;(statearr_19895[(7)] = inst_19888);
return statearr_19895;
})();var statearr_19896_20116 = state_19893__$1;(statearr_19896_20116[(2)] = null);
(statearr_19896_20116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19894 === (3)))
{var inst_19891 = (state_19893[(2)]);var state_19893__$1 = state_19893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19893__$1,inst_19891);
} else
{if((state_val_19894 === (2)))
{var state_19893__$1 = state_19893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19893__$1,(4),onModel);
} else
{if((state_val_19894 === (1)))
{var state_19893__$1 = state_19893;var statearr_19897_20117 = state_19893__$1;(statearr_19897_20117[(2)] = null);
(statearr_19897_20117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___20115,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20115,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19901 = [null,null,null,null,null,null,null,null];(statearr_19901[(0)] = state_machine__6188__auto__);
(statearr_19901[(1)] = (1));
return statearr_19901;
});
var state_machine__6188__auto____1 = (function (state_19893){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19893);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19902){if((e19902 instanceof Object))
{var ex__6191__auto__ = e19902;var statearr_19903_20118 = state_19893;(statearr_19903_20118[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20119 = state_19893;
state_19893 = G__20119;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19893){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20115,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_19904 = f__6203__auto__.call(null);(statearr_19904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20115);
return statearr_19904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20115,onView,onModel,onTick,mspf))
);
var c__6202__auto___20120 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20120,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20120,onView,onModel,onTick,mspf){
return (function (state_19923){var state_val_19924 = (state_19923[(1)]);if((state_val_19924 === (5)))
{var inst_19914 = (state_19923[(7)]);var inst_19907 = (state_19923[(8)]);var inst_19918 = (state_19923[(2)]);var tmp19925 = inst_19907;var inst_19907__$1 = tmp19925;var inst_19908 = inst_19914;var state_19923__$1 = (function (){var statearr_19926 = state_19923;(statearr_19926[(9)] = inst_19918);
(statearr_19926[(10)] = inst_19908);
(statearr_19926[(8)] = inst_19907__$1);
return statearr_19926;
})();var statearr_19927_20121 = state_19923__$1;(statearr_19927_20121[(2)] = null);
(statearr_19927_20121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19924 === (4)))
{var inst_19914 = (state_19923[(7)]);var inst_19908 = (state_19923[(10)]);var inst_19912 = (state_19923[(2)]);var inst_19913 = (new Date());var inst_19914__$1 = inst_19913.getTime();var inst_19915 = (inst_19914__$1 - inst_19908);var inst_19916 = (inst_19915 / (1000));var state_19923__$1 = (function (){var statearr_19928 = state_19923;(statearr_19928[(11)] = inst_19912);
(statearr_19928[(7)] = inst_19914__$1);
return statearr_19928;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19923__$1,(5),onTick,inst_19916);
} else
{if((state_val_19924 === (3)))
{var inst_19921 = (state_19923[(2)]);var state_19923__$1 = state_19923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19923__$1,inst_19921);
} else
{if((state_val_19924 === (2)))
{var inst_19907 = (state_19923[(8)]);var inst_19910 = cljs.core.async.timeout.call(null,inst_19907);var state_19923__$1 = state_19923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19923__$1,(4),inst_19910);
} else
{if((state_val_19924 === (1)))
{var inst_19905 = (new Date());var inst_19906 = inst_19905.getTime();var inst_19907 = mspf;var inst_19908 = inst_19906;var state_19923__$1 = (function (){var statearr_19929 = state_19923;(statearr_19929[(10)] = inst_19908);
(statearr_19929[(8)] = inst_19907);
return statearr_19929;
})();var statearr_19930_20122 = state_19923__$1;(statearr_19930_20122[(2)] = null);
(statearr_19930_20122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___20120,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20120,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19934 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19934[(0)] = state_machine__6188__auto__);
(statearr_19934[(1)] = (1));
return statearr_19934;
});
var state_machine__6188__auto____1 = (function (state_19923){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19923);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19935){if((e19935 instanceof Object))
{var ex__6191__auto__ = e19935;var statearr_19936_20123 = state_19923;(statearr_19936_20123[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20124 = state_19923;
state_19923 = G__20124;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19923){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20120,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_19937 = f__6203__auto__.call(null);(statearr_19937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20120);
return statearr_19937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20120,onView,onModel,onTick,mspf))
);
var c__6202__auto___20125 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20125,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20125,onView,onModel,onTick,mspf){
return (function (state_19969){var state_val_19970 = (state_19969[(1)]);if((state_val_19970 === (5)))
{var inst_19967 = (state_19969[(2)]);var state_19969__$1 = state_19969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19969__$1,inst_19967);
} else
{if((state_val_19970 === (4)))
{var inst_19950 = (state_19969[(2)]);var inst_19957 = [(10),(20)];var inst_19958 = [(100),(0),(0)];var inst_19959 = {"size":inst_19957,"vel":inst_19958};var inst_19960 = [inst_19959];var inst_19961 = {"duration":0.1,"angle":(0),"force":(100),"range":6.28,"prototype":inst_19960};var inst_19962 = [(300),(300),(0)];var inst_19963 = [(100),(100),(0)];var inst_19964 = {"id":"x1","emit":inst_19961,"pos":inst_19962,"vel":inst_19963};var inst_19965 = ["edit-particle",inst_19964];var state_19969__$1 = (function (){var statearr_19971 = state_19969;(statearr_19971[(7)] = inst_19950);
return statearr_19971;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19969__$1,(5),onView,inst_19965);
} else
{if((state_val_19970 === (3)))
{var inst_19947 = (state_19969[(2)]);var inst_19948 = cljs.core.async.timeout.call(null,(1100));var state_19969__$1 = (function (){var statearr_19972 = state_19969;(statearr_19972[(8)] = inst_19947);
return statearr_19972;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19969__$1,(4),inst_19948);
} else
{if((state_val_19970 === (2)))
{var inst_19940 = (state_19969[(2)]);var inst_19943 = [(300),(300),(0)];var inst_19944 = {"id":"x1","pos":inst_19943};var inst_19945 = ["edit-particle",inst_19944];var state_19969__$1 = (function (){var statearr_19973 = state_19969;(statearr_19973[(9)] = inst_19940);
return statearr_19973;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19969__$1,(3),onView,inst_19945);
} else
{if((state_val_19970 === (1)))
{var inst_19938 = cljs.core.async.timeout.call(null,(1000));var state_19969__$1 = state_19969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19969__$1,(2),inst_19938);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___20125,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20125,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19977 = [null,null,null,null,null,null,null,null,null,null];(statearr_19977[(0)] = state_machine__6188__auto__);
(statearr_19977[(1)] = (1));
return statearr_19977;
});
var state_machine__6188__auto____1 = (function (state_19969){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19969);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19978){if((e19978 instanceof Object))
{var ex__6191__auto__ = e19978;var statearr_19979_20126 = state_19969;(statearr_19979_20126[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20127 = state_19969;
state_19969 = G__20127;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19969){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20125,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_19980 = f__6203__auto__.call(null);(statearr_19980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20125);
return statearr_19980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20125,onView,onModel,onTick,mspf))
);
var c__6202__auto___20128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20128,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20128,onView,onModel,onTick,mspf){
return (function (state_20073){var state_val_20074 = (state_20073[(1)]);if((state_val_20074 === (7)))
{var inst_20068 = (state_20073[(2)]);var inst_19988 = inst_20068;var state_20073__$1 = (function (){var statearr_20075 = state_20073;(statearr_20075[(7)] = inst_19988);
return statearr_20075;
})();var statearr_20076_20129 = state_20073__$1;(statearr_20076_20129[(2)] = null);
(statearr_20076_20129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (20)))
{var inst_19988 = (state_20073[(7)]);var state_20073__$1 = state_20073;var statearr_20077_20130 = state_20073__$1;(statearr_20077_20130[(2)] = inst_19988);
(statearr_20077_20130[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (1)))
{var inst_19981 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_19982 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_19983 = cljs.core.List.EMPTY;var inst_19984 = [inst_19983];var inst_19985 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19982,inst_19984);var inst_19986 = [(0),inst_19985];var inst_19987 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19981,inst_19986);var inst_19988 = inst_19987;var state_20073__$1 = (function (){var statearr_20078 = state_20073;(statearr_20078[(7)] = inst_19988);
return statearr_20078;
})();var statearr_20079_20131 = state_20073__$1;(statearr_20079_20131[(2)] = null);
(statearr_20079_20131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (4)))
{var inst_19996 = (state_20073[(8)]);var inst_19994 = (state_20073[(9)]);var inst_19994__$1 = (state_20073[(2)]);var inst_19995 = cljs.core.nth.call(null,inst_19994__$1,(0),null);var inst_19996__$1 = cljs.core.nth.call(null,inst_19994__$1,(1),null);var inst_20000 = cljs.core._EQ_.call(null,onTick,inst_19996__$1);var state_20073__$1 = (function (){var statearr_20080 = state_20073;(statearr_20080[(8)] = inst_19996__$1);
(statearr_20080[(10)] = inst_19995);
(statearr_20080[(9)] = inst_19994__$1);
return statearr_20080;
})();if(inst_20000)
{var statearr_20081_20132 = state_20073__$1;(statearr_20081_20132[(1)] = (5));
} else
{var statearr_20082_20133 = state_20073__$1;(statearr_20082_20133[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (15)))
{var inst_19988 = (state_20073[(7)]);var inst_20023 = (state_20073[(11)]);var inst_20040 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_20041 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20040,null));var inst_20042 = cljs.core.update_in.call(null,inst_19988,inst_20041,cljs.core.conj,inst_20023);var state_20073__$1 = state_20073;var statearr_20083_20134 = state_20073__$1;(statearr_20083_20134[(2)] = inst_20042);
(statearr_20083_20134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (21)))
{var inst_19996 = (state_20073[(8)]);var inst_20060 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19996));var inst_20061 = (new Error(inst_20060));var inst_20062 = (function(){throw inst_20061})();var state_20073__$1 = state_20073;var statearr_20084_20135 = state_20073__$1;(statearr_20084_20135[(2)] = inst_20062);
(statearr_20084_20135[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (13)))
{var inst_20055 = (state_20073[(2)]);var state_20073__$1 = state_20073;var statearr_20085_20136 = state_20073__$1;(statearr_20085_20136[(2)] = inst_20055);
(statearr_20085_20136[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (22)))
{var inst_20064 = (state_20073[(2)]);var state_20073__$1 = state_20073;var statearr_20086_20137 = state_20073__$1;(statearr_20086_20137[(2)] = inst_20064);
(statearr_20086_20137[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (6)))
{var inst_19996 = (state_20073[(8)]);var inst_20008 = cljs.core._EQ_.call(null,onView,inst_19996);var state_20073__$1 = state_20073;if(inst_20008)
{var statearr_20087_20138 = state_20073__$1;(statearr_20087_20138[(1)] = (8));
} else
{var statearr_20088_20139 = state_20073__$1;(statearr_20088_20139[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (17)))
{var inst_19988 = (state_20073[(7)]);var state_20073__$1 = state_20073;var statearr_20089_20140 = state_20073__$1;(statearr_20089_20140[(2)] = inst_19988);
(statearr_20089_20140[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (3)))
{var inst_20071 = (state_20073[(2)]);var state_20073__$1 = state_20073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20073__$1,inst_20071);
} else
{if((state_val_20074 === (12)))
{var inst_20010 = (state_20073[(12)]);var inst_20046 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_20010);var state_20073__$1 = state_20073;if(inst_20046)
{var statearr_20090_20141 = state_20073__$1;(statearr_20090_20141[(1)] = (17));
} else
{var statearr_20091_20142 = state_20073__$1;(statearr_20091_20142[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (2)))
{var inst_19991 = [onView,onTick];var inst_19992 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19991,null));var state_20073__$1 = state_20073;return cljs.core.async.ioc_alts_BANG_.call(null,state_20073__$1,(4),inst_19992);
} else
{if((state_val_20074 === (19)))
{var inst_20053 = (state_20073[(2)]);var state_20073__$1 = state_20073;var statearr_20092_20143 = state_20073__$1;(statearr_20092_20143[(2)] = inst_20053);
(statearr_20092_20143[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (11)))
{var inst_20011 = (state_20073[(13)]);var inst_19996 = (state_20073[(8)]);var inst_19995 = (state_20073[(10)]);var inst_19988 = (state_20073[(7)]);var inst_20022 = (state_20073[(14)]);var inst_20010 = (state_20073[(12)]);var inst_19994 = (state_20073[(9)]);var inst_20017 = (function (){var ctx = inst_19988;var expr__19998 = inst_19996;var pred__20012 = cljs.core._EQ_;var partInfo = inst_20011;var vec__19990 = inst_19994;var v = inst_19995;var params = inst_20011;var ch = inst_19996;var event = inst_20010;var expr__20013 = inst_20010;var pred__19997 = cljs.core._EQ_;return ((function (ctx,expr__19998,pred__20012,partInfo,vec__19990,v,params,ch,event,expr__20013,pred__19997,inst_20011,inst_19996,inst_19995,inst_19988,inst_20022,inst_20010,inst_19994,state_val_20074,c__6202__auto___20128,onView,onModel,onTick,mspf){
return (function (p1__19632_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19632_SHARP_),partInfo.id);
});
;})(ctx,expr__19998,pred__20012,partInfo,vec__19990,v,params,ch,event,expr__20013,pred__19997,inst_20011,inst_19996,inst_19995,inst_19988,inst_20022,inst_20010,inst_19994,state_val_20074,c__6202__auto___20128,onView,onModel,onTick,mspf))
})();var inst_20018 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_20019 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20018,null));var inst_20020 = cljs.core.get_in.call(null,inst_19988,inst_20019);var inst_20021 = cljs.core.filter.call(null,inst_20017,inst_20020);var inst_20022__$1 = cljs.core.first.call(null,inst_20021);var inst_20023 = app.main2.createParticle.call(null,inst_20011);var inst_20024 = cljs.core.some_QMARK_.call(null,inst_20022__$1);var state_20073__$1 = (function (){var statearr_20093 = state_20073;(statearr_20093[(14)] = inst_20022__$1);
(statearr_20093[(11)] = inst_20023);
return statearr_20093;
})();if(inst_20024)
{var statearr_20094_20144 = state_20073__$1;(statearr_20094_20144[(1)] = (14));
} else
{var statearr_20095_20145 = state_20073__$1;(statearr_20095_20145[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (9)))
{var inst_19996 = (state_20073[(8)]);var inst_20057 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_19996);var state_20073__$1 = state_20073;if(inst_20057)
{var statearr_20096_20146 = state_20073__$1;(statearr_20096_20146[(1)] = (20));
} else
{var statearr_20097_20147 = state_20073__$1;(statearr_20097_20147[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (5)))
{var inst_19995 = (state_20073[(10)]);var inst_19988 = (state_20073[(7)]);var inst_20002 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_20003 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20002,null));var inst_20004 = cljs.core.partial.call(null,app.particle.update,inst_19995);var inst_20005 = cljs.core.update_in.call(null,inst_19988,inst_20003,inst_20004);var inst_20006 = app.main2.draw2D.call(null,inst_20005);var state_20073__$1 = state_20073;var statearr_20098_20148 = state_20073__$1;(statearr_20098_20148[(2)] = inst_20006);
(statearr_20098_20148[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (14)))
{var inst_19988 = (state_20073[(7)]);var inst_20022 = (state_20073[(14)]);var inst_20023 = (state_20073[(11)]);var inst_20026 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_20027 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20026,null));var inst_20028 = [inst_20022];var inst_20029 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_20030 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_20022);var inst_20031 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_20022);var inst_20032 = [inst_20030,inst_20031];var inst_20033 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20029,inst_20032);var inst_20034 = cljs.core.merge.call(null,inst_20023,inst_20033);var inst_20035 = [inst_20034];var inst_20036 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20028,inst_20035);var inst_20037 = cljs.core.partial.call(null,cljs.core.replace,inst_20036);var inst_20038 = cljs.core.update_in.call(null,inst_19988,inst_20027,inst_20037);var state_20073__$1 = state_20073;var statearr_20099_20149 = state_20073__$1;(statearr_20099_20149[(2)] = inst_20038);
(statearr_20099_20149[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (16)))
{var inst_20044 = (state_20073[(2)]);var state_20073__$1 = state_20073;var statearr_20100_20150 = state_20073__$1;(statearr_20100_20150[(2)] = inst_20044);
(statearr_20100_20150[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (10)))
{var inst_20066 = (state_20073[(2)]);var state_20073__$1 = state_20073;var statearr_20101_20151 = state_20073__$1;(statearr_20101_20151[(2)] = inst_20066);
(statearr_20101_20151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (18)))
{var inst_20010 = (state_20073[(12)]);var inst_20049 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20010));var inst_20050 = (new Error(inst_20049));var inst_20051 = (function(){throw inst_20050})();var state_20073__$1 = state_20073;var statearr_20102_20152 = state_20073__$1;(statearr_20102_20152[(2)] = inst_20051);
(statearr_20102_20152[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20074 === (8)))
{var inst_19995 = (state_20073[(10)]);var inst_20010 = (state_20073[(12)]);var inst_20010__$1 = (inst_19995[(0)]);var inst_20011 = (inst_19995[(1)]);var inst_20015 = cljs.core._EQ_.call(null,"edit-particle",inst_20010__$1);var state_20073__$1 = (function (){var statearr_20103 = state_20073;(statearr_20103[(13)] = inst_20011);
(statearr_20103[(12)] = inst_20010__$1);
return statearr_20103;
})();if(inst_20015)
{var statearr_20104_20153 = state_20073__$1;(statearr_20104_20153[(1)] = (11));
} else
{var statearr_20105_20154 = state_20073__$1;(statearr_20105_20154[(1)] = (12));
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
});})(c__6202__auto___20128,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20128,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20109[(0)] = state_machine__6188__auto__);
(statearr_20109[(1)] = (1));
return statearr_20109;
});
var state_machine__6188__auto____1 = (function (state_20073){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20073);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20110){if((e20110 instanceof Object))
{var ex__6191__auto__ = e20110;var statearr_20111_20155 = state_20073;(statearr_20111_20155[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20156 = state_20073;
state_20073 = G__20156;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20073){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20128,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_20112 = f__6203__auto__.call(null);(statearr_20112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20128);
return statearr_20112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20128,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
