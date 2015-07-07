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
return (function (p__53680){var map__53681 = p__53680;var map__53681__$1 = ((cljs.core.seq_QMARK_.call(null,map__53681))?cljs.core.apply.call(null,cljs.core.hash_map,map__53681):map__53681);var ctx = map__53681__$1;var map__53682 = cljs.core.get.call(null,map__53681__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__53682__$1 = ((cljs.core.seq_QMARK_.call(null,map__53682))?cljs.core.apply.call(null,cljs.core.hash_map,map__53682):map__53682);var ps = cljs.core.get.call(null,map__53682__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__53683_53698 = canvas_ctx;(G__53683_53698["fillStyle"] = "white");
G__53683_53698.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__53683_53698["fillStyle"] = "red");
G__53683_53698.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__53684_53699 = cljs.core.seq.call(null,ps);var chunk__53685_53700 = null;var count__53686_53701 = (0);var i__53687_53702 = (0);while(true){
if((i__53687_53702 < count__53686_53701))
{var map__53688_53703 = cljs.core._nth.call(null,chunk__53685_53700,i__53687_53702);var map__53688_53704__$1 = ((cljs.core.seq_QMARK_.call(null,map__53688_53703))?cljs.core.apply.call(null,cljs.core.hash_map,map__53688_53703):map__53688_53703);var p_53705 = map__53688_53704__$1;var vec__53689_53706 = cljs.core.get.call(null,map__53688_53704__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_53707 = cljs.core.nth.call(null,vec__53689_53706,(0),null);var y_53708 = cljs.core.nth.call(null,vec__53689_53706,(1),null);var r_53709 = cljs.core.nth.call(null,vec__53689_53706,(2),null);var vec__53690_53710 = cljs.core.get.call(null,map__53688_53704__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_53711 = cljs.core.nth.call(null,vec__53690_53710,(0),null);var ys_53712 = cljs.core.nth.call(null,vec__53690_53710,(1),null);var vec__53691_53713 = cljs.core.get.call(null,map__53688_53704__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_53714__$1 = cljs.core.nth.call(null,vec__53691_53713,(0),null);var g_53715 = cljs.core.nth.call(null,vec__53691_53713,(1),null);var b_53716 = cljs.core.nth.call(null,vec__53691_53713,(2),null);var a_53717 = cljs.core.nth.call(null,vec__53691_53713,(3),null);var G__53692_53718 = canvas_ctx;(G__53692_53718["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_53714__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_53715 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_53716 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_53717)+")"));
G__53692_53718.fillRect(x_53707,y_53708,xs_53711,ys_53712);
{
var G__53719 = seq__53684_53699;
var G__53720 = chunk__53685_53700;
var G__53721 = count__53686_53701;
var G__53722 = (i__53687_53702 + (1));
seq__53684_53699 = G__53719;
chunk__53685_53700 = G__53720;
count__53686_53701 = G__53721;
i__53687_53702 = G__53722;
continue;
}
} else
{var temp__4126__auto___53723 = cljs.core.seq.call(null,seq__53684_53699);if(temp__4126__auto___53723)
{var seq__53684_53724__$1 = temp__4126__auto___53723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53684_53724__$1))
{var c__4307__auto___53725 = cljs.core.chunk_first.call(null,seq__53684_53724__$1);{
var G__53726 = cljs.core.chunk_rest.call(null,seq__53684_53724__$1);
var G__53727 = c__4307__auto___53725;
var G__53728 = cljs.core.count.call(null,c__4307__auto___53725);
var G__53729 = (0);
seq__53684_53699 = G__53726;
chunk__53685_53700 = G__53727;
count__53686_53701 = G__53728;
i__53687_53702 = G__53729;
continue;
}
} else
{var map__53693_53730 = cljs.core.first.call(null,seq__53684_53724__$1);var map__53693_53731__$1 = ((cljs.core.seq_QMARK_.call(null,map__53693_53730))?cljs.core.apply.call(null,cljs.core.hash_map,map__53693_53730):map__53693_53730);var p_53732 = map__53693_53731__$1;var vec__53694_53733 = cljs.core.get.call(null,map__53693_53731__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_53734 = cljs.core.nth.call(null,vec__53694_53733,(0),null);var y_53735 = cljs.core.nth.call(null,vec__53694_53733,(1),null);var r_53736 = cljs.core.nth.call(null,vec__53694_53733,(2),null);var vec__53695_53737 = cljs.core.get.call(null,map__53693_53731__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_53738 = cljs.core.nth.call(null,vec__53695_53737,(0),null);var ys_53739 = cljs.core.nth.call(null,vec__53695_53737,(1),null);var vec__53696_53740 = cljs.core.get.call(null,map__53693_53731__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_53741__$1 = cljs.core.nth.call(null,vec__53696_53740,(0),null);var g_53742 = cljs.core.nth.call(null,vec__53696_53740,(1),null);var b_53743 = cljs.core.nth.call(null,vec__53696_53740,(2),null);var a_53744 = cljs.core.nth.call(null,vec__53696_53740,(3),null);var G__53697_53745 = canvas_ctx;(G__53697_53745["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_53741__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_53742 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_53743 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_53744)+")"));
G__53697_53745.fillRect(x_53734,y_53735,xs_53738,ys_53739);
{
var G__53746 = cljs.core.next.call(null,seq__53684_53724__$1);
var G__53747 = null;
var G__53748 = (0);
var G__53749 = (0);
seq__53684_53699 = G__53746;
chunk__53685_53700 = G__53747;
count__53686_53701 = G__53748;
i__53687_53702 = G__53749;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj53778 = {};return obj53778;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__53776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__53776,(0),null);var ch = cljs.core.nth.call(null,vec__53776,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__53776,cw,ch){
return (function (p__53779){var map__53780 = p__53779;var map__53780__$1 = ((cljs.core.seq_QMARK_.call(null,map__53780))?cljs.core.apply.call(null,cljs.core.hash_map,map__53780):map__53780);var ctx = map__53780__$1;var timer = cljs.core.get.call(null,map__53780__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__53781 = cljs.core.get.call(null,map__53780__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__53781__$1 = ((cljs.core.seq_QMARK_.call(null,map__53781))?cljs.core.apply.call(null,cljs.core.hash_map,map__53781):map__53781);var ps = cljs.core.get.call(null,map__53781__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___53802 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___53802 == null))
{} else
{var faceImg_53803 = temp__4130__auto___53802;var tex_53804 = app.main2.cacheTex.call(null,gl__$1,faceImg_53803);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_53804,faceImg_53803,temp__4130__auto___53802,map__53780,map__53780__$1,ctx,timer,map__53781,map__53781__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__53776,cw,ch){
return (function (pobj){var seq__53782 = cljs.core.seq.call(null,ps);var chunk__53783 = null;var count__53784 = (0);var i__53785 = (0);while(true){
if((i__53785 < count__53784))
{var map__53786 = cljs.core._nth.call(null,chunk__53783,i__53785);var map__53786__$1 = ((cljs.core.seq_QMARK_.call(null,map__53786))?cljs.core.apply.call(null,cljs.core.hash_map,map__53786):map__53786);var p = map__53786__$1;var vec__53787 = cljs.core.get.call(null,map__53786__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__53787,(0),null);var y = cljs.core.nth.call(null,vec__53787,(1),null);var rot = cljs.core.nth.call(null,vec__53787,(2),null);var vec__53788 = cljs.core.get.call(null,map__53786__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__53788,(0),null);var ys = cljs.core.nth.call(null,vec__53788,(1),null);var vec__53789 = cljs.core.get.call(null,map__53786__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__53789,(0),null);var g = cljs.core.nth.call(null,vec__53789,(1),null);var b = cljs.core.nth.call(null,vec__53789,(2),null);var a = cljs.core.nth.call(null,vec__53789,(3),null);var proj_53805 = (function (){var G__53790 = (new THREE.Matrix4());G__53790.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__53790;
})();var tras_53806 = (function (){var G__53791 = (new THREE.Matrix4());G__53791.makeTranslation(x,y,(0));
G__53791.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__53791.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__53791;
})();var texTx_53807 = (function (){var G__53792 = (new THREE.Matrix3());return G__53792;
})();var colorTx_53808 = (function (){var G__53793 = (new THREE.Matrix4());G__53793.makeTranslation(r,g,b);
return G__53793;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_53805.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_53806.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_53804,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_53807.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_53808.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__53809 = seq__53782;
var G__53810 = chunk__53783;
var G__53811 = count__53784;
var G__53812 = (i__53785 + (1));
seq__53782 = G__53809;
chunk__53783 = G__53810;
count__53784 = G__53811;
i__53785 = G__53812;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__53782);if(temp__4126__auto__)
{var seq__53782__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53782__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__53782__$1);{
var G__53813 = cljs.core.chunk_rest.call(null,seq__53782__$1);
var G__53814 = c__4307__auto__;
var G__53815 = cljs.core.count.call(null,c__4307__auto__);
var G__53816 = (0);
seq__53782 = G__53813;
chunk__53783 = G__53814;
count__53784 = G__53815;
i__53785 = G__53816;
continue;
}
} else
{var map__53794 = cljs.core.first.call(null,seq__53782__$1);var map__53794__$1 = ((cljs.core.seq_QMARK_.call(null,map__53794))?cljs.core.apply.call(null,cljs.core.hash_map,map__53794):map__53794);var p = map__53794__$1;var vec__53795 = cljs.core.get.call(null,map__53794__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__53795,(0),null);var y = cljs.core.nth.call(null,vec__53795,(1),null);var rot = cljs.core.nth.call(null,vec__53795,(2),null);var vec__53796 = cljs.core.get.call(null,map__53794__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__53796,(0),null);var ys = cljs.core.nth.call(null,vec__53796,(1),null);var vec__53797 = cljs.core.get.call(null,map__53794__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__53797,(0),null);var g = cljs.core.nth.call(null,vec__53797,(1),null);var b = cljs.core.nth.call(null,vec__53797,(2),null);var a = cljs.core.nth.call(null,vec__53797,(3),null);var proj_53817 = (function (){var G__53798 = (new THREE.Matrix4());G__53798.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__53798;
})();var tras_53818 = (function (){var G__53799 = (new THREE.Matrix4());G__53799.makeTranslation(x,y,(0));
G__53799.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__53799.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__53799;
})();var texTx_53819 = (function (){var G__53800 = (new THREE.Matrix3());return G__53800;
})();var colorTx_53820 = (function (){var G__53801 = (new THREE.Matrix4());G__53801.makeTranslation(r,g,b);
return G__53801;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_53817.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_53818.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_53804,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_53819.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_53820.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__53821 = cljs.core.next.call(null,seq__53782__$1);
var G__53822 = null;
var G__53823 = (0);
var G__53824 = (0);
seq__53782 = G__53821;
chunk__53783 = G__53822;
count__53784 = G__53823;
i__53785 = G__53824;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_53804,faceImg_53803,temp__4130__auto___53802,map__53780,map__53780__$1,ctx,timer,map__53781,map__53781__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__53776,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__53776,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__53827){var vec__53828 = p__53827;var k = cljs.core.nth.call(null,vec__53828,(0),null);var v = cljs.core.nth.call(null,vec__53828,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));return app.particle.create.call(null,obj);
});
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (state_54057){var state_val_54058 = (state_54057[(1)]);if((state_val_54058 === (2)))
{var inst_54055 = (state_54057[(2)]);var state_54057__$1 = state_54057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54057__$1,inst_54055);
} else
{if((state_val_54058 === (1)))
{var state_54057__$1 = state_54057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54057__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_54062 = [null,null,null,null,null,null,null];(statearr_54062[(0)] = state_machine__6189__auto__);
(statearr_54062[(1)] = (1));
return statearr_54062;
});
var state_machine__6189__auto____1 = (function (state_54057){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_54057);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e54063){if((e54063 instanceof Object))
{var ex__6192__auto__ = e54063;var statearr_54064_54278 = state_54057;(statearr_54064_54278[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54057);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54279 = state_54057;
state_54057 = G__54279;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_54057){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_54057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_54065 = f__6204__auto__.call(null);(statearr_54065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_54065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onTick,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6203__auto___54280 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___54280,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___54280,onView,onModel,onTick,mspf){
return (function (state_54074){var state_val_54075 = (state_54074[(1)]);if((state_val_54075 === (4)))
{var inst_54068 = (state_54074[(2)]);var inst_54069 = common.onModel.onNext(inst_54068);var state_54074__$1 = (function (){var statearr_54076 = state_54074;(statearr_54076[(7)] = inst_54069);
return statearr_54076;
})();var statearr_54077_54281 = state_54074__$1;(statearr_54077_54281[(2)] = null);
(statearr_54077_54281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54075 === (3)))
{var inst_54072 = (state_54074[(2)]);var state_54074__$1 = state_54074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54074__$1,inst_54072);
} else
{if((state_val_54075 === (2)))
{var state_54074__$1 = state_54074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54074__$1,(4),onModel);
} else
{if((state_val_54075 === (1)))
{var state_54074__$1 = state_54074;var statearr_54078_54282 = state_54074__$1;(statearr_54078_54282[(2)] = null);
(statearr_54078_54282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___54280,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___54280,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_54082 = [null,null,null,null,null,null,null,null];(statearr_54082[(0)] = state_machine__6189__auto__);
(statearr_54082[(1)] = (1));
return statearr_54082;
});
var state_machine__6189__auto____1 = (function (state_54074){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_54074);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e54083){if((e54083 instanceof Object))
{var ex__6192__auto__ = e54083;var statearr_54084_54283 = state_54074;(statearr_54084_54283[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54284 = state_54074;
state_54074 = G__54284;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_54074){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_54074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___54280,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_54085 = f__6204__auto__.call(null);(statearr_54085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___54280);
return statearr_54085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___54280,onView,onModel,onTick,mspf))
);
var c__6203__auto___54285 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___54285,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___54285,onView,onModel,onTick,mspf){
return (function (state_54104){var state_val_54105 = (state_54104[(1)]);if((state_val_54105 === (5)))
{var inst_54088 = (state_54104[(7)]);var inst_54095 = (state_54104[(8)]);var inst_54099 = (state_54104[(2)]);var tmp54106 = inst_54088;var inst_54088__$1 = tmp54106;var inst_54089 = inst_54095;var state_54104__$1 = (function (){var statearr_54107 = state_54104;(statearr_54107[(9)] = inst_54099);
(statearr_54107[(10)] = inst_54089);
(statearr_54107[(7)] = inst_54088__$1);
return statearr_54107;
})();var statearr_54108_54286 = state_54104__$1;(statearr_54108_54286[(2)] = null);
(statearr_54108_54286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54105 === (4)))
{var inst_54089 = (state_54104[(10)]);var inst_54095 = (state_54104[(8)]);var inst_54093 = (state_54104[(2)]);var inst_54094 = (new Date());var inst_54095__$1 = inst_54094.getTime();var inst_54096 = (inst_54095__$1 - inst_54089);var inst_54097 = (inst_54096 / (1000));var state_54104__$1 = (function (){var statearr_54109 = state_54104;(statearr_54109[(11)] = inst_54093);
(statearr_54109[(8)] = inst_54095__$1);
return statearr_54109;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54104__$1,(5),onTick,inst_54097);
} else
{if((state_val_54105 === (3)))
{var inst_54102 = (state_54104[(2)]);var state_54104__$1 = state_54104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54104__$1,inst_54102);
} else
{if((state_val_54105 === (2)))
{var inst_54088 = (state_54104[(7)]);var inst_54091 = cljs.core.async.timeout.call(null,inst_54088);var state_54104__$1 = state_54104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54104__$1,(4),inst_54091);
} else
{if((state_val_54105 === (1)))
{var inst_54086 = (new Date());var inst_54087 = inst_54086.getTime();var inst_54088 = mspf;var inst_54089 = inst_54087;var state_54104__$1 = (function (){var statearr_54110 = state_54104;(statearr_54110[(10)] = inst_54089);
(statearr_54110[(7)] = inst_54088);
return statearr_54110;
})();var statearr_54111_54287 = state_54104__$1;(statearr_54111_54287[(2)] = null);
(statearr_54111_54287[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___54285,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___54285,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_54115 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54115[(0)] = state_machine__6189__auto__);
(statearr_54115[(1)] = (1));
return statearr_54115;
});
var state_machine__6189__auto____1 = (function (state_54104){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_54104);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e54116){if((e54116 instanceof Object))
{var ex__6192__auto__ = e54116;var statearr_54117_54288 = state_54104;(statearr_54117_54288[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54289 = state_54104;
state_54104 = G__54289;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_54104){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_54104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___54285,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_54118 = f__6204__auto__.call(null);(statearr_54118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___54285);
return statearr_54118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___54285,onView,onModel,onTick,mspf))
);
var c__6203__auto___54290 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___54290,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___54290,onView,onModel,onTick,mspf){
return (function (state_54140){var state_val_54141 = (state_54140[(1)]);if((state_val_54141 === (5)))
{var inst_54138 = (state_54140[(2)]);var state_54140__$1 = state_54140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54140__$1,inst_54138);
} else
{if((state_val_54141 === (4)))
{var inst_54131 = (state_54140[(2)]);var inst_54134 = [(100),(0),(0)];var inst_54135 = {"id":"x1","pos":inst_54134};var inst_54136 = ["edit-particle",inst_54135];var state_54140__$1 = (function (){var statearr_54142 = state_54140;(statearr_54142[(7)] = inst_54131);
return statearr_54142;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54140__$1,(5),onView,inst_54136);
} else
{if((state_val_54141 === (3)))
{var inst_54128 = (state_54140[(2)]);var inst_54129 = cljs.core.async.timeout.call(null,(1000));var state_54140__$1 = (function (){var statearr_54143 = state_54140;(statearr_54143[(8)] = inst_54128);
return statearr_54143;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54140__$1,(4),inst_54129);
} else
{if((state_val_54141 === (2)))
{var inst_54121 = (state_54140[(2)]);var inst_54124 = [(0),(0),(0)];var inst_54125 = {"id":"x1","pos":inst_54124};var inst_54126 = ["edit-particle",inst_54125];var state_54140__$1 = (function (){var statearr_54144 = state_54140;(statearr_54144[(9)] = inst_54121);
return statearr_54144;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54140__$1,(3),onView,inst_54126);
} else
{if((state_val_54141 === (1)))
{var inst_54119 = cljs.core.async.timeout.call(null,(1000));var state_54140__$1 = state_54140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54140__$1,(2),inst_54119);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___54290,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___54290,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_54148 = [null,null,null,null,null,null,null,null,null,null];(statearr_54148[(0)] = state_machine__6189__auto__);
(statearr_54148[(1)] = (1));
return statearr_54148;
});
var state_machine__6189__auto____1 = (function (state_54140){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_54140);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e54149){if((e54149 instanceof Object))
{var ex__6192__auto__ = e54149;var statearr_54150_54291 = state_54140;(statearr_54150_54291[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54292 = state_54140;
state_54140 = G__54292;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_54140){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_54140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___54290,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_54151 = f__6204__auto__.call(null);(statearr_54151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___54290);
return statearr_54151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___54290,onView,onModel,onTick,mspf))
);
var c__6203__auto___54293 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___54293,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___54293,onView,onModel,onTick,mspf){
return (function (state_54238){var state_val_54239 = (state_54238[(1)]);if((state_val_54239 === (7)))
{var inst_54233 = (state_54238[(2)]);var inst_54159 = inst_54233;var state_54238__$1 = (function (){var statearr_54240 = state_54238;(statearr_54240[(7)] = inst_54159);
return statearr_54240;
})();var statearr_54241_54294 = state_54238__$1;(statearr_54241_54294[(2)] = null);
(statearr_54241_54294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (20)))
{var inst_54159 = (state_54238[(7)]);var state_54238__$1 = state_54238;var statearr_54242_54295 = state_54238__$1;(statearr_54242_54295[(2)] = inst_54159);
(statearr_54242_54295[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (1)))
{var inst_54152 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_54153 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_54154 = cljs.core.List.EMPTY;var inst_54155 = [inst_54154];var inst_54156 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_54153,inst_54155);var inst_54157 = [(0),inst_54156];var inst_54158 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_54152,inst_54157);var inst_54159 = inst_54158;var state_54238__$1 = (function (){var statearr_54243 = state_54238;(statearr_54243[(7)] = inst_54159);
return statearr_54243;
})();var statearr_54244_54296 = state_54238__$1;(statearr_54244_54296[(2)] = null);
(statearr_54244_54296[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (4)))
{var inst_54167 = (state_54238[(8)]);var inst_54165 = (state_54238[(9)]);var inst_54165__$1 = (state_54238[(2)]);var inst_54166 = cljs.core.nth.call(null,inst_54165__$1,(0),null);var inst_54167__$1 = cljs.core.nth.call(null,inst_54165__$1,(1),null);var inst_54171 = cljs.core._EQ_.call(null,onTick,inst_54167__$1);var state_54238__$1 = (function (){var statearr_54245 = state_54238;(statearr_54245[(8)] = inst_54167__$1);
(statearr_54245[(10)] = inst_54166);
(statearr_54245[(9)] = inst_54165__$1);
return statearr_54245;
})();if(inst_54171)
{var statearr_54246_54297 = state_54238__$1;(statearr_54246_54297[(1)] = (5));
} else
{var statearr_54247_54298 = state_54238__$1;(statearr_54247_54298[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (15)))
{var inst_54159 = (state_54238[(7)]);var inst_54194 = (state_54238[(11)]);var inst_54205 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_54206 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_54205,null));var inst_54207 = cljs.core.update_in.call(null,inst_54159,inst_54206,cljs.core.conj,inst_54194);var state_54238__$1 = state_54238;var statearr_54248_54299 = state_54238__$1;(statearr_54248_54299[(2)] = inst_54207);
(statearr_54248_54299[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (21)))
{var inst_54167 = (state_54238[(8)]);var inst_54225 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54167));var inst_54226 = (new Error(inst_54225));var inst_54227 = (function(){throw inst_54226})();var state_54238__$1 = state_54238;var statearr_54249_54300 = state_54238__$1;(statearr_54249_54300[(2)] = inst_54227);
(statearr_54249_54300[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (13)))
{var inst_54220 = (state_54238[(2)]);var state_54238__$1 = state_54238;var statearr_54250_54301 = state_54238__$1;(statearr_54250_54301[(2)] = inst_54220);
(statearr_54250_54301[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (22)))
{var inst_54229 = (state_54238[(2)]);var state_54238__$1 = state_54238;var statearr_54251_54302 = state_54238__$1;(statearr_54251_54302[(2)] = inst_54229);
(statearr_54251_54302[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (6)))
{var inst_54167 = (state_54238[(8)]);var inst_54179 = cljs.core._EQ_.call(null,onView,inst_54167);var state_54238__$1 = state_54238;if(inst_54179)
{var statearr_54252_54303 = state_54238__$1;(statearr_54252_54303[(1)] = (8));
} else
{var statearr_54253_54304 = state_54238__$1;(statearr_54253_54304[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (17)))
{var inst_54159 = (state_54238[(7)]);var state_54238__$1 = state_54238;var statearr_54254_54305 = state_54238__$1;(statearr_54254_54305[(2)] = inst_54159);
(statearr_54254_54305[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (3)))
{var inst_54236 = (state_54238[(2)]);var state_54238__$1 = state_54238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54238__$1,inst_54236);
} else
{if((state_val_54239 === (12)))
{var inst_54181 = (state_54238[(12)]);var inst_54211 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_54181);var state_54238__$1 = state_54238;if(inst_54211)
{var statearr_54255_54306 = state_54238__$1;(statearr_54255_54306[(1)] = (17));
} else
{var statearr_54256_54307 = state_54238__$1;(statearr_54256_54307[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (2)))
{var inst_54162 = [onView,onTick];var inst_54163 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_54162,null));var state_54238__$1 = state_54238;return cljs.core.async.ioc_alts_BANG_.call(null,state_54238__$1,(4),inst_54163);
} else
{if((state_val_54239 === (19)))
{var inst_54218 = (state_54238[(2)]);var state_54238__$1 = state_54238;var statearr_54257_54308 = state_54238__$1;(statearr_54257_54308[(2)] = inst_54218);
(statearr_54257_54308[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (11)))
{var inst_54167 = (state_54238[(8)]);var inst_54193 = (state_54238[(13)]);var inst_54166 = (state_54238[(10)]);var inst_54181 = (state_54238[(12)]);var inst_54165 = (state_54238[(9)]);var inst_54159 = (state_54238[(7)]);var inst_54182 = (state_54238[(14)]);var inst_54188 = (function (){var ctx = inst_54159;var pred__54183 = cljs.core._EQ_;var pred__54168 = cljs.core._EQ_;var expr__54184 = inst_54181;var partInfo = inst_54182;var v = inst_54166;var params = inst_54182;var expr__54169 = inst_54167;var ch = inst_54167;var event = inst_54181;var vec__54161 = inst_54165;return ((function (ctx,pred__54183,pred__54168,expr__54184,partInfo,v,params,expr__54169,ch,event,vec__54161,inst_54167,inst_54193,inst_54166,inst_54181,inst_54165,inst_54159,inst_54182,state_val_54239,c__6203__auto___54293,onView,onModel,onTick,mspf){
return (function (p1__53829_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53829_SHARP_),partInfo.id);
});
;})(ctx,pred__54183,pred__54168,expr__54184,partInfo,v,params,expr__54169,ch,event,vec__54161,inst_54167,inst_54193,inst_54166,inst_54181,inst_54165,inst_54159,inst_54182,state_val_54239,c__6203__auto___54293,onView,onModel,onTick,mspf))
})();var inst_54189 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_54190 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_54189,null));var inst_54191 = cljs.core.get_in.call(null,inst_54159,inst_54190);var inst_54192 = cljs.core.filter.call(null,inst_54188,inst_54191);var inst_54193__$1 = cljs.core.first.call(null,inst_54192);var inst_54194 = app.main2.createParticle.call(null,inst_54182);var inst_54195 = cljs.core.some_QMARK_.call(null,inst_54193__$1);var state_54238__$1 = (function (){var statearr_54258 = state_54238;(statearr_54258[(13)] = inst_54193__$1);
(statearr_54258[(11)] = inst_54194);
return statearr_54258;
})();if(inst_54195)
{var statearr_54259_54309 = state_54238__$1;(statearr_54259_54309[(1)] = (14));
} else
{var statearr_54260_54310 = state_54238__$1;(statearr_54260_54310[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (9)))
{var inst_54167 = (state_54238[(8)]);var inst_54222 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_54167);var state_54238__$1 = state_54238;if(inst_54222)
{var statearr_54261_54311 = state_54238__$1;(statearr_54261_54311[(1)] = (20));
} else
{var statearr_54262_54312 = state_54238__$1;(statearr_54262_54312[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (5)))
{var inst_54166 = (state_54238[(10)]);var inst_54159 = (state_54238[(7)]);var inst_54173 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_54174 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_54173,null));var inst_54175 = cljs.core.partial.call(null,app.particle.update,inst_54166);var inst_54176 = cljs.core.update_in.call(null,inst_54159,inst_54174,inst_54175);var inst_54177 = app.main2.draw2D.call(null,inst_54176);var state_54238__$1 = state_54238;var statearr_54263_54313 = state_54238__$1;(statearr_54263_54313[(2)] = inst_54177);
(statearr_54263_54313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (14)))
{var inst_54193 = (state_54238[(13)]);var inst_54159 = (state_54238[(7)]);var inst_54194 = (state_54238[(11)]);var inst_54197 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_54198 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_54197,null));var inst_54199 = [inst_54193];var inst_54200 = [inst_54194];var inst_54201 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_54199,inst_54200);var inst_54202 = cljs.core.partial.call(null,cljs.core.replace,inst_54201);var inst_54203 = cljs.core.update_in.call(null,inst_54159,inst_54198,inst_54202);var state_54238__$1 = state_54238;var statearr_54264_54314 = state_54238__$1;(statearr_54264_54314[(2)] = inst_54203);
(statearr_54264_54314[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (16)))
{var inst_54209 = (state_54238[(2)]);var state_54238__$1 = state_54238;var statearr_54265_54315 = state_54238__$1;(statearr_54265_54315[(2)] = inst_54209);
(statearr_54265_54315[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (10)))
{var inst_54231 = (state_54238[(2)]);var state_54238__$1 = state_54238;var statearr_54266_54316 = state_54238__$1;(statearr_54266_54316[(2)] = inst_54231);
(statearr_54266_54316[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (18)))
{var inst_54181 = (state_54238[(12)]);var inst_54214 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54181));var inst_54215 = (new Error(inst_54214));var inst_54216 = (function(){throw inst_54215})();var state_54238__$1 = state_54238;var statearr_54267_54317 = state_54238__$1;(statearr_54267_54317[(2)] = inst_54216);
(statearr_54267_54317[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54239 === (8)))
{var inst_54166 = (state_54238[(10)]);var inst_54181 = (state_54238[(12)]);var inst_54181__$1 = (inst_54166[(0)]);var inst_54182 = (inst_54166[(1)]);var inst_54186 = cljs.core._EQ_.call(null,"edit-particle",inst_54181__$1);var state_54238__$1 = (function (){var statearr_54268 = state_54238;(statearr_54268[(12)] = inst_54181__$1);
(statearr_54268[(14)] = inst_54182);
return statearr_54268;
})();if(inst_54186)
{var statearr_54269_54318 = state_54238__$1;(statearr_54269_54318[(1)] = (11));
} else
{var statearr_54270_54319 = state_54238__$1;(statearr_54270_54319[(1)] = (12));
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
});})(c__6203__auto___54293,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___54293,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_54274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54274[(0)] = state_machine__6189__auto__);
(statearr_54274[(1)] = (1));
return statearr_54274;
});
var state_machine__6189__auto____1 = (function (state_54238){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_54238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e54275){if((e54275 instanceof Object))
{var ex__6192__auto__ = e54275;var statearr_54276_54320 = state_54238;(statearr_54276_54320[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54321 = state_54238;
state_54238 = G__54321;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_54238){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_54238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___54293,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_54277 = f__6204__auto__.call(null);(statearr_54277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___54293);
return statearr_54277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___54293,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
