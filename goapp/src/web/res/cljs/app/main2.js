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
return (function (p__51698){var map__51699 = p__51698;var map__51699__$1 = ((cljs.core.seq_QMARK_.call(null,map__51699))?cljs.core.apply.call(null,cljs.core.hash_map,map__51699):map__51699);var ctx = map__51699__$1;var map__51700 = cljs.core.get.call(null,map__51699__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__51700__$1 = ((cljs.core.seq_QMARK_.call(null,map__51700))?cljs.core.apply.call(null,cljs.core.hash_map,map__51700):map__51700);var ps = cljs.core.get.call(null,map__51700__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__51701_51716 = canvas_ctx;(G__51701_51716["fillStyle"] = "white");
G__51701_51716.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__51701_51716["fillStyle"] = "red");
G__51701_51716.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__51702_51717 = cljs.core.seq.call(null,ps);var chunk__51703_51718 = null;var count__51704_51719 = (0);var i__51705_51720 = (0);while(true){
if((i__51705_51720 < count__51704_51719))
{var map__51706_51721 = cljs.core._nth.call(null,chunk__51703_51718,i__51705_51720);var map__51706_51722__$1 = ((cljs.core.seq_QMARK_.call(null,map__51706_51721))?cljs.core.apply.call(null,cljs.core.hash_map,map__51706_51721):map__51706_51721);var p_51723 = map__51706_51722__$1;var vec__51707_51724 = cljs.core.get.call(null,map__51706_51722__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_51725 = cljs.core.nth.call(null,vec__51707_51724,(0),null);var y_51726 = cljs.core.nth.call(null,vec__51707_51724,(1),null);var r_51727 = cljs.core.nth.call(null,vec__51707_51724,(2),null);var vec__51708_51728 = cljs.core.get.call(null,map__51706_51722__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_51729 = cljs.core.nth.call(null,vec__51708_51728,(0),null);var ys_51730 = cljs.core.nth.call(null,vec__51708_51728,(1),null);var vec__51709_51731 = cljs.core.get.call(null,map__51706_51722__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_51732__$1 = cljs.core.nth.call(null,vec__51709_51731,(0),null);var g_51733 = cljs.core.nth.call(null,vec__51709_51731,(1),null);var b_51734 = cljs.core.nth.call(null,vec__51709_51731,(2),null);var a_51735 = cljs.core.nth.call(null,vec__51709_51731,(3),null);var G__51710_51736 = canvas_ctx;(G__51710_51736["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_51732__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_51733 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_51734 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_51735)+")"));
G__51710_51736.fillRect(x_51725,y_51726,xs_51729,ys_51730);
{
var G__51737 = seq__51702_51717;
var G__51738 = chunk__51703_51718;
var G__51739 = count__51704_51719;
var G__51740 = (i__51705_51720 + (1));
seq__51702_51717 = G__51737;
chunk__51703_51718 = G__51738;
count__51704_51719 = G__51739;
i__51705_51720 = G__51740;
continue;
}
} else
{var temp__4126__auto___51741 = cljs.core.seq.call(null,seq__51702_51717);if(temp__4126__auto___51741)
{var seq__51702_51742__$1 = temp__4126__auto___51741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51702_51742__$1))
{var c__4307__auto___51743 = cljs.core.chunk_first.call(null,seq__51702_51742__$1);{
var G__51744 = cljs.core.chunk_rest.call(null,seq__51702_51742__$1);
var G__51745 = c__4307__auto___51743;
var G__51746 = cljs.core.count.call(null,c__4307__auto___51743);
var G__51747 = (0);
seq__51702_51717 = G__51744;
chunk__51703_51718 = G__51745;
count__51704_51719 = G__51746;
i__51705_51720 = G__51747;
continue;
}
} else
{var map__51711_51748 = cljs.core.first.call(null,seq__51702_51742__$1);var map__51711_51749__$1 = ((cljs.core.seq_QMARK_.call(null,map__51711_51748))?cljs.core.apply.call(null,cljs.core.hash_map,map__51711_51748):map__51711_51748);var p_51750 = map__51711_51749__$1;var vec__51712_51751 = cljs.core.get.call(null,map__51711_51749__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_51752 = cljs.core.nth.call(null,vec__51712_51751,(0),null);var y_51753 = cljs.core.nth.call(null,vec__51712_51751,(1),null);var r_51754 = cljs.core.nth.call(null,vec__51712_51751,(2),null);var vec__51713_51755 = cljs.core.get.call(null,map__51711_51749__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_51756 = cljs.core.nth.call(null,vec__51713_51755,(0),null);var ys_51757 = cljs.core.nth.call(null,vec__51713_51755,(1),null);var vec__51714_51758 = cljs.core.get.call(null,map__51711_51749__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_51759__$1 = cljs.core.nth.call(null,vec__51714_51758,(0),null);var g_51760 = cljs.core.nth.call(null,vec__51714_51758,(1),null);var b_51761 = cljs.core.nth.call(null,vec__51714_51758,(2),null);var a_51762 = cljs.core.nth.call(null,vec__51714_51758,(3),null);var G__51715_51763 = canvas_ctx;(G__51715_51763["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_51759__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_51760 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_51761 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_51762)+")"));
G__51715_51763.fillRect(x_51752,y_51753,xs_51756,ys_51757);
{
var G__51764 = cljs.core.next.call(null,seq__51702_51742__$1);
var G__51765 = null;
var G__51766 = (0);
var G__51767 = (0);
seq__51702_51717 = G__51764;
chunk__51703_51718 = G__51765;
count__51704_51719 = G__51766;
i__51705_51720 = G__51767;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj51796 = {};return obj51796;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__51794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__51794,(0),null);var ch = cljs.core.nth.call(null,vec__51794,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__51794,cw,ch){
return (function (p__51797){var map__51798 = p__51797;var map__51798__$1 = ((cljs.core.seq_QMARK_.call(null,map__51798))?cljs.core.apply.call(null,cljs.core.hash_map,map__51798):map__51798);var ctx = map__51798__$1;var timer = cljs.core.get.call(null,map__51798__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__51799 = cljs.core.get.call(null,map__51798__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__51799__$1 = ((cljs.core.seq_QMARK_.call(null,map__51799))?cljs.core.apply.call(null,cljs.core.hash_map,map__51799):map__51799);var ps = cljs.core.get.call(null,map__51799__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___51820 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___51820 == null))
{} else
{var faceImg_51821 = temp__4130__auto___51820;var tex_51822 = app.main2.cacheTex.call(null,gl__$1,faceImg_51821);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_51822,faceImg_51821,temp__4130__auto___51820,map__51798,map__51798__$1,ctx,timer,map__51799,map__51799__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__51794,cw,ch){
return (function (pobj){var seq__51800 = cljs.core.seq.call(null,ps);var chunk__51801 = null;var count__51802 = (0);var i__51803 = (0);while(true){
if((i__51803 < count__51802))
{var map__51804 = cljs.core._nth.call(null,chunk__51801,i__51803);var map__51804__$1 = ((cljs.core.seq_QMARK_.call(null,map__51804))?cljs.core.apply.call(null,cljs.core.hash_map,map__51804):map__51804);var p = map__51804__$1;var vec__51805 = cljs.core.get.call(null,map__51804__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__51805,(0),null);var y = cljs.core.nth.call(null,vec__51805,(1),null);var rot = cljs.core.nth.call(null,vec__51805,(2),null);var vec__51806 = cljs.core.get.call(null,map__51804__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__51806,(0),null);var ys = cljs.core.nth.call(null,vec__51806,(1),null);var vec__51807 = cljs.core.get.call(null,map__51804__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__51807,(0),null);var g = cljs.core.nth.call(null,vec__51807,(1),null);var b = cljs.core.nth.call(null,vec__51807,(2),null);var a = cljs.core.nth.call(null,vec__51807,(3),null);var proj_51823 = (function (){var G__51808 = (new THREE.Matrix4());G__51808.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__51808;
})();var tras_51824 = (function (){var G__51809 = (new THREE.Matrix4());G__51809.makeTranslation(x,y,(0));
G__51809.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__51809.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__51809;
})();var texTx_51825 = (function (){var G__51810 = (new THREE.Matrix3());return G__51810;
})();var colorTx_51826 = (function (){var G__51811 = (new THREE.Matrix4());G__51811.makeTranslation(r,g,b);
return G__51811;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_51823.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_51824.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_51822,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_51825.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_51826.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__51827 = seq__51800;
var G__51828 = chunk__51801;
var G__51829 = count__51802;
var G__51830 = (i__51803 + (1));
seq__51800 = G__51827;
chunk__51801 = G__51828;
count__51802 = G__51829;
i__51803 = G__51830;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51800);if(temp__4126__auto__)
{var seq__51800__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51800__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__51800__$1);{
var G__51831 = cljs.core.chunk_rest.call(null,seq__51800__$1);
var G__51832 = c__4307__auto__;
var G__51833 = cljs.core.count.call(null,c__4307__auto__);
var G__51834 = (0);
seq__51800 = G__51831;
chunk__51801 = G__51832;
count__51802 = G__51833;
i__51803 = G__51834;
continue;
}
} else
{var map__51812 = cljs.core.first.call(null,seq__51800__$1);var map__51812__$1 = ((cljs.core.seq_QMARK_.call(null,map__51812))?cljs.core.apply.call(null,cljs.core.hash_map,map__51812):map__51812);var p = map__51812__$1;var vec__51813 = cljs.core.get.call(null,map__51812__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__51813,(0),null);var y = cljs.core.nth.call(null,vec__51813,(1),null);var rot = cljs.core.nth.call(null,vec__51813,(2),null);var vec__51814 = cljs.core.get.call(null,map__51812__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__51814,(0),null);var ys = cljs.core.nth.call(null,vec__51814,(1),null);var vec__51815 = cljs.core.get.call(null,map__51812__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__51815,(0),null);var g = cljs.core.nth.call(null,vec__51815,(1),null);var b = cljs.core.nth.call(null,vec__51815,(2),null);var a = cljs.core.nth.call(null,vec__51815,(3),null);var proj_51835 = (function (){var G__51816 = (new THREE.Matrix4());G__51816.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__51816;
})();var tras_51836 = (function (){var G__51817 = (new THREE.Matrix4());G__51817.makeTranslation(x,y,(0));
G__51817.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__51817.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__51817;
})();var texTx_51837 = (function (){var G__51818 = (new THREE.Matrix3());return G__51818;
})();var colorTx_51838 = (function (){var G__51819 = (new THREE.Matrix4());G__51819.makeTranslation(r,g,b);
return G__51819;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_51835.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_51836.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_51822,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_51837.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_51838.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__51839 = cljs.core.next.call(null,seq__51800__$1);
var G__51840 = null;
var G__51841 = (0);
var G__51842 = (0);
seq__51800 = G__51839;
chunk__51801 = G__51840;
count__51802 = G__51841;
i__51803 = G__51842;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_51822,faceImg_51821,temp__4130__auto___51820,map__51798,map__51798__$1,ctx,timer,map__51799,map__51799__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__51794,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__51794,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51845){var vec__51846 = p__51845;var k = cljs.core.nth.call(null,vec__51846,(0),null);var v = cljs.core.nth.call(null,vec__51846,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));return app.particle.create.call(null,obj);
});
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (state_52075){var state_val_52076 = (state_52075[(1)]);if((state_val_52076 === (2)))
{var inst_52073 = (state_52075[(2)]);var state_52075__$1 = state_52075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52075__$1,inst_52073);
} else
{if((state_val_52076 === (1)))
{var state_52075__$1 = state_52075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52075__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_52080 = [null,null,null,null,null,null,null];(statearr_52080[(0)] = state_machine__6189__auto__);
(statearr_52080[(1)] = (1));
return statearr_52080;
});
var state_machine__6189__auto____1 = (function (state_52075){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_52075);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e52081){if((e52081 instanceof Object))
{var ex__6192__auto__ = e52081;var statearr_52082_52296 = state_52075;(statearr_52082_52296[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52297 = state_52075;
state_52075 = G__52297;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_52075){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_52075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_52083 = f__6204__auto__.call(null);(statearr_52083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_52083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onTick,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6203__auto___52298 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___52298,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___52298,onView,onModel,onTick,mspf){
return (function (state_52092){var state_val_52093 = (state_52092[(1)]);if((state_val_52093 === (4)))
{var inst_52086 = (state_52092[(2)]);var inst_52087 = common.onModel.onNext(inst_52086);var state_52092__$1 = (function (){var statearr_52094 = state_52092;(statearr_52094[(7)] = inst_52087);
return statearr_52094;
})();var statearr_52095_52299 = state_52092__$1;(statearr_52095_52299[(2)] = null);
(statearr_52095_52299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52093 === (3)))
{var inst_52090 = (state_52092[(2)]);var state_52092__$1 = state_52092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52092__$1,inst_52090);
} else
{if((state_val_52093 === (2)))
{var state_52092__$1 = state_52092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52092__$1,(4),onModel);
} else
{if((state_val_52093 === (1)))
{var state_52092__$1 = state_52092;var statearr_52096_52300 = state_52092__$1;(statearr_52096_52300[(2)] = null);
(statearr_52096_52300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___52298,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___52298,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_52100 = [null,null,null,null,null,null,null,null];(statearr_52100[(0)] = state_machine__6189__auto__);
(statearr_52100[(1)] = (1));
return statearr_52100;
});
var state_machine__6189__auto____1 = (function (state_52092){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_52092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e52101){if((e52101 instanceof Object))
{var ex__6192__auto__ = e52101;var statearr_52102_52301 = state_52092;(statearr_52102_52301[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52302 = state_52092;
state_52092 = G__52302;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_52092){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_52092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___52298,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_52103 = f__6204__auto__.call(null);(statearr_52103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___52298);
return statearr_52103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___52298,onView,onModel,onTick,mspf))
);
var c__6203__auto___52303 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___52303,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___52303,onView,onModel,onTick,mspf){
return (function (state_52122){var state_val_52123 = (state_52122[(1)]);if((state_val_52123 === (5)))
{var inst_52106 = (state_52122[(7)]);var inst_52113 = (state_52122[(8)]);var inst_52117 = (state_52122[(2)]);var tmp52124 = inst_52106;var inst_52106__$1 = tmp52124;var inst_52107 = inst_52113;var state_52122__$1 = (function (){var statearr_52125 = state_52122;(statearr_52125[(7)] = inst_52106__$1);
(statearr_52125[(9)] = inst_52107);
(statearr_52125[(10)] = inst_52117);
return statearr_52125;
})();var statearr_52126_52304 = state_52122__$1;(statearr_52126_52304[(2)] = null);
(statearr_52126_52304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52123 === (4)))
{var inst_52113 = (state_52122[(8)]);var inst_52107 = (state_52122[(9)]);var inst_52111 = (state_52122[(2)]);var inst_52112 = (new Date());var inst_52113__$1 = inst_52112.getTime();var inst_52114 = (inst_52113__$1 - inst_52107);var inst_52115 = (inst_52114 / (1000));var state_52122__$1 = (function (){var statearr_52127 = state_52122;(statearr_52127[(8)] = inst_52113__$1);
(statearr_52127[(11)] = inst_52111);
return statearr_52127;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52122__$1,(5),onTick,inst_52115);
} else
{if((state_val_52123 === (3)))
{var inst_52120 = (state_52122[(2)]);var state_52122__$1 = state_52122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52122__$1,inst_52120);
} else
{if((state_val_52123 === (2)))
{var inst_52106 = (state_52122[(7)]);var inst_52109 = cljs.core.async.timeout.call(null,inst_52106);var state_52122__$1 = state_52122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52122__$1,(4),inst_52109);
} else
{if((state_val_52123 === (1)))
{var inst_52104 = (new Date());var inst_52105 = inst_52104.getTime();var inst_52106 = mspf;var inst_52107 = inst_52105;var state_52122__$1 = (function (){var statearr_52128 = state_52122;(statearr_52128[(7)] = inst_52106);
(statearr_52128[(9)] = inst_52107);
return statearr_52128;
})();var statearr_52129_52305 = state_52122__$1;(statearr_52129_52305[(2)] = null);
(statearr_52129_52305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___52303,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___52303,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_52133 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52133[(0)] = state_machine__6189__auto__);
(statearr_52133[(1)] = (1));
return statearr_52133;
});
var state_machine__6189__auto____1 = (function (state_52122){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_52122);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e52134){if((e52134 instanceof Object))
{var ex__6192__auto__ = e52134;var statearr_52135_52306 = state_52122;(statearr_52135_52306[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52307 = state_52122;
state_52122 = G__52307;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_52122){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_52122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___52303,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_52136 = f__6204__auto__.call(null);(statearr_52136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___52303);
return statearr_52136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___52303,onView,onModel,onTick,mspf))
);
var c__6203__auto___52308 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___52308,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___52308,onView,onModel,onTick,mspf){
return (function (state_52158){var state_val_52159 = (state_52158[(1)]);if((state_val_52159 === (5)))
{var inst_52156 = (state_52158[(2)]);var state_52158__$1 = state_52158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52158__$1,inst_52156);
} else
{if((state_val_52159 === (4)))
{var inst_52149 = (state_52158[(2)]);var inst_52152 = [(100),(0),(0)];var inst_52153 = {"id":"x1","pos":inst_52152};var inst_52154 = ["edit-particle",inst_52153];var state_52158__$1 = (function (){var statearr_52160 = state_52158;(statearr_52160[(7)] = inst_52149);
return statearr_52160;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52158__$1,(5),onView,inst_52154);
} else
{if((state_val_52159 === (3)))
{var inst_52146 = (state_52158[(2)]);var inst_52147 = cljs.core.async.timeout.call(null,(1000));var state_52158__$1 = (function (){var statearr_52161 = state_52158;(statearr_52161[(8)] = inst_52146);
return statearr_52161;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52158__$1,(4),inst_52147);
} else
{if((state_val_52159 === (2)))
{var inst_52139 = (state_52158[(2)]);var inst_52142 = [(0),(0),(0)];var inst_52143 = {"id":"x1","pos":inst_52142};var inst_52144 = ["edit-particle",inst_52143];var state_52158__$1 = (function (){var statearr_52162 = state_52158;(statearr_52162[(9)] = inst_52139);
return statearr_52162;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52158__$1,(3),onView,inst_52144);
} else
{if((state_val_52159 === (1)))
{var inst_52137 = cljs.core.async.timeout.call(null,(1000));var state_52158__$1 = state_52158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52158__$1,(2),inst_52137);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___52308,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___52308,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_52166 = [null,null,null,null,null,null,null,null,null,null];(statearr_52166[(0)] = state_machine__6189__auto__);
(statearr_52166[(1)] = (1));
return statearr_52166;
});
var state_machine__6189__auto____1 = (function (state_52158){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_52158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e52167){if((e52167 instanceof Object))
{var ex__6192__auto__ = e52167;var statearr_52168_52309 = state_52158;(statearr_52168_52309[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52167;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52310 = state_52158;
state_52158 = G__52310;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_52158){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_52158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___52308,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_52169 = f__6204__auto__.call(null);(statearr_52169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___52308);
return statearr_52169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___52308,onView,onModel,onTick,mspf))
);
var c__6203__auto___52311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___52311,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___52311,onView,onModel,onTick,mspf){
return (function (state_52256){var state_val_52257 = (state_52256[(1)]);if((state_val_52257 === (7)))
{var inst_52251 = (state_52256[(2)]);var inst_52177 = inst_52251;var state_52256__$1 = (function (){var statearr_52258 = state_52256;(statearr_52258[(7)] = inst_52177);
return statearr_52258;
})();var statearr_52259_52312 = state_52256__$1;(statearr_52259_52312[(2)] = null);
(statearr_52259_52312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (20)))
{var inst_52177 = (state_52256[(7)]);var state_52256__$1 = state_52256;var statearr_52260_52313 = state_52256__$1;(statearr_52260_52313[(2)] = inst_52177);
(statearr_52260_52313[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (1)))
{var inst_52170 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_52171 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_52172 = cljs.core.List.EMPTY;var inst_52173 = [inst_52172];var inst_52174 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_52171,inst_52173);var inst_52175 = [(0),inst_52174];var inst_52176 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_52170,inst_52175);var inst_52177 = inst_52176;var state_52256__$1 = (function (){var statearr_52261 = state_52256;(statearr_52261[(7)] = inst_52177);
return statearr_52261;
})();var statearr_52262_52314 = state_52256__$1;(statearr_52262_52314[(2)] = null);
(statearr_52262_52314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (4)))
{var inst_52183 = (state_52256[(8)]);var inst_52185 = (state_52256[(9)]);var inst_52183__$1 = (state_52256[(2)]);var inst_52184 = cljs.core.nth.call(null,inst_52183__$1,(0),null);var inst_52185__$1 = cljs.core.nth.call(null,inst_52183__$1,(1),null);var inst_52189 = cljs.core._EQ_.call(null,onTick,inst_52185__$1);var state_52256__$1 = (function (){var statearr_52263 = state_52256;(statearr_52263[(10)] = inst_52184);
(statearr_52263[(8)] = inst_52183__$1);
(statearr_52263[(9)] = inst_52185__$1);
return statearr_52263;
})();if(inst_52189)
{var statearr_52264_52315 = state_52256__$1;(statearr_52264_52315[(1)] = (5));
} else
{var statearr_52265_52316 = state_52256__$1;(statearr_52265_52316[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (15)))
{var inst_52212 = (state_52256[(11)]);var inst_52177 = (state_52256[(7)]);var inst_52223 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_52224 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52223,null));var inst_52225 = cljs.core.update_in.call(null,inst_52177,inst_52224,cljs.core.conj,inst_52212);var state_52256__$1 = state_52256;var statearr_52266_52317 = state_52256__$1;(statearr_52266_52317[(2)] = inst_52225);
(statearr_52266_52317[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (21)))
{var inst_52185 = (state_52256[(9)]);var inst_52243 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52185));var inst_52244 = (new Error(inst_52243));var inst_52245 = (function(){throw inst_52244})();var state_52256__$1 = state_52256;var statearr_52267_52318 = state_52256__$1;(statearr_52267_52318[(2)] = inst_52245);
(statearr_52267_52318[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (13)))
{var inst_52238 = (state_52256[(2)]);var state_52256__$1 = state_52256;var statearr_52268_52319 = state_52256__$1;(statearr_52268_52319[(2)] = inst_52238);
(statearr_52268_52319[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (22)))
{var inst_52247 = (state_52256[(2)]);var state_52256__$1 = state_52256;var statearr_52269_52320 = state_52256__$1;(statearr_52269_52320[(2)] = inst_52247);
(statearr_52269_52320[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (6)))
{var inst_52185 = (state_52256[(9)]);var inst_52197 = cljs.core._EQ_.call(null,onView,inst_52185);var state_52256__$1 = state_52256;if(inst_52197)
{var statearr_52270_52321 = state_52256__$1;(statearr_52270_52321[(1)] = (8));
} else
{var statearr_52271_52322 = state_52256__$1;(statearr_52271_52322[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (17)))
{var inst_52177 = (state_52256[(7)]);var state_52256__$1 = state_52256;var statearr_52272_52323 = state_52256__$1;(statearr_52272_52323[(2)] = inst_52177);
(statearr_52272_52323[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (3)))
{var inst_52254 = (state_52256[(2)]);var state_52256__$1 = state_52256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52256__$1,inst_52254);
} else
{if((state_val_52257 === (12)))
{var inst_52199 = (state_52256[(12)]);var inst_52229 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_52199);var state_52256__$1 = state_52256;if(inst_52229)
{var statearr_52273_52324 = state_52256__$1;(statearr_52273_52324[(1)] = (17));
} else
{var statearr_52274_52325 = state_52256__$1;(statearr_52274_52325[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (2)))
{var inst_52180 = [onView,onTick];var inst_52181 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52180,null));var state_52256__$1 = state_52256;return cljs.core.async.ioc_alts_BANG_.call(null,state_52256__$1,(4),inst_52181);
} else
{if((state_val_52257 === (19)))
{var inst_52236 = (state_52256[(2)]);var state_52256__$1 = state_52256;var statearr_52275_52326 = state_52256__$1;(statearr_52275_52326[(2)] = inst_52236);
(statearr_52275_52326[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (11)))
{var inst_52211 = (state_52256[(13)]);var inst_52184 = (state_52256[(10)]);var inst_52199 = (state_52256[(12)]);var inst_52183 = (state_52256[(8)]);var inst_52185 = (state_52256[(9)]);var inst_52200 = (state_52256[(14)]);var inst_52177 = (state_52256[(7)]);var inst_52206 = (function (){var ctx = inst_52177;var expr__52202 = inst_52199;var partInfo = inst_52200;var v = inst_52184;var pred__52186 = cljs.core._EQ_;var params = inst_52200;var ch = inst_52185;var event = inst_52199;var pred__52201 = cljs.core._EQ_;var vec__52179 = inst_52183;var expr__52187 = inst_52185;return ((function (ctx,expr__52202,partInfo,v,pred__52186,params,ch,event,pred__52201,vec__52179,expr__52187,inst_52211,inst_52184,inst_52199,inst_52183,inst_52185,inst_52200,inst_52177,state_val_52257,c__6203__auto___52311,onView,onModel,onTick,mspf){
return (function (p1__51847_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51847_SHARP_),partInfo.id);
});
;})(ctx,expr__52202,partInfo,v,pred__52186,params,ch,event,pred__52201,vec__52179,expr__52187,inst_52211,inst_52184,inst_52199,inst_52183,inst_52185,inst_52200,inst_52177,state_val_52257,c__6203__auto___52311,onView,onModel,onTick,mspf))
})();var inst_52207 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_52208 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52207,null));var inst_52209 = cljs.core.get_in.call(null,inst_52177,inst_52208);var inst_52210 = cljs.core.filter.call(null,inst_52206,inst_52209);var inst_52211__$1 = cljs.core.first.call(null,inst_52210);var inst_52212 = app.main2.createParticle.call(null,inst_52200);var inst_52213 = cljs.core.some_QMARK_.call(null,inst_52211__$1);var state_52256__$1 = (function (){var statearr_52276 = state_52256;(statearr_52276[(13)] = inst_52211__$1);
(statearr_52276[(11)] = inst_52212);
return statearr_52276;
})();if(inst_52213)
{var statearr_52277_52327 = state_52256__$1;(statearr_52277_52327[(1)] = (14));
} else
{var statearr_52278_52328 = state_52256__$1;(statearr_52278_52328[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (9)))
{var inst_52185 = (state_52256[(9)]);var inst_52240 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_52185);var state_52256__$1 = state_52256;if(inst_52240)
{var statearr_52279_52329 = state_52256__$1;(statearr_52279_52329[(1)] = (20));
} else
{var statearr_52280_52330 = state_52256__$1;(statearr_52280_52330[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (5)))
{var inst_52184 = (state_52256[(10)]);var inst_52177 = (state_52256[(7)]);var inst_52191 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_52192 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52191,null));var inst_52193 = cljs.core.partial.call(null,app.particle.update,inst_52184);var inst_52194 = cljs.core.update_in.call(null,inst_52177,inst_52192,inst_52193);var inst_52195 = app.main2.draw2D.call(null,inst_52194);var state_52256__$1 = state_52256;var statearr_52281_52331 = state_52256__$1;(statearr_52281_52331[(2)] = inst_52195);
(statearr_52281_52331[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (14)))
{var inst_52211 = (state_52256[(13)]);var inst_52212 = (state_52256[(11)]);var inst_52177 = (state_52256[(7)]);var inst_52215 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_52216 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52215,null));var inst_52217 = [inst_52211];var inst_52218 = [inst_52212];var inst_52219 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_52217,inst_52218);var inst_52220 = cljs.core.partial.call(null,cljs.core.replace,inst_52219);var inst_52221 = cljs.core.update_in.call(null,inst_52177,inst_52216,inst_52220);var state_52256__$1 = state_52256;var statearr_52282_52332 = state_52256__$1;(statearr_52282_52332[(2)] = inst_52221);
(statearr_52282_52332[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (16)))
{var inst_52227 = (state_52256[(2)]);var state_52256__$1 = state_52256;var statearr_52283_52333 = state_52256__$1;(statearr_52283_52333[(2)] = inst_52227);
(statearr_52283_52333[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (10)))
{var inst_52249 = (state_52256[(2)]);var state_52256__$1 = state_52256;var statearr_52284_52334 = state_52256__$1;(statearr_52284_52334[(2)] = inst_52249);
(statearr_52284_52334[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (18)))
{var inst_52199 = (state_52256[(12)]);var inst_52232 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52199));var inst_52233 = (new Error(inst_52232));var inst_52234 = (function(){throw inst_52233})();var state_52256__$1 = state_52256;var statearr_52285_52335 = state_52256__$1;(statearr_52285_52335[(2)] = inst_52234);
(statearr_52285_52335[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52257 === (8)))
{var inst_52184 = (state_52256[(10)]);var inst_52199 = (state_52256[(12)]);var inst_52199__$1 = (inst_52184[(0)]);var inst_52200 = (inst_52184[(1)]);var inst_52204 = cljs.core._EQ_.call(null,"edit-particle",inst_52199__$1);var state_52256__$1 = (function (){var statearr_52286 = state_52256;(statearr_52286[(12)] = inst_52199__$1);
(statearr_52286[(14)] = inst_52200);
return statearr_52286;
})();if(inst_52204)
{var statearr_52287_52336 = state_52256__$1;(statearr_52287_52336[(1)] = (11));
} else
{var statearr_52288_52337 = state_52256__$1;(statearr_52288_52337[(1)] = (12));
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
});})(c__6203__auto___52311,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___52311,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_52292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52292[(0)] = state_machine__6189__auto__);
(statearr_52292[(1)] = (1));
return statearr_52292;
});
var state_machine__6189__auto____1 = (function (state_52256){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_52256);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e52293){if((e52293 instanceof Object))
{var ex__6192__auto__ = e52293;var statearr_52294_52338 = state_52256;(statearr_52294_52338[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52339 = state_52256;
state_52256 = G__52339;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_52256){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_52256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___52311,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_52295 = f__6204__auto__.call(null);(statearr_52295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___52311);
return statearr_52295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___52311,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
