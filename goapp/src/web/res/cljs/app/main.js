// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('cljs.core.async');
goog.require('app.react');
goog.require('app.react');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('tool.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('tool.particle');
goog.require('gl.mesh');
goog.require('clojure.data');
goog.require('clojure.walk');
goog.require('gl.util');
app.main.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main.draw = (function draw(canvas,p__17651){var map__17668 = p__17651;var map__17668__$1 = ((cljs.core.seq_QMARK_.call(null,map__17668))?cljs.core.apply.call(null,cljs.core.hash_map,map__17668):map__17668);var ctx = map__17668__$1;var ps = cljs.core.get.call(null,map__17668__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_17684 = (canvas[(0)]);var canvas_ctx_17685 = canvas_dom_17684.getContext("2d");var G__17669_17686 = canvas_ctx_17685;(G__17669_17686["fillStyle"] = "white");
G__17669_17686.fillRect((0),(0),canvas_dom_17684.width,canvas_dom_17684.height);
(G__17669_17686["fillStyle"] = "red");
G__17669_17686.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__17670_17687 = cljs.core.seq.call(null,ps);var chunk__17671_17688 = null;var count__17672_17689 = (0);var i__17673_17690 = (0);while(true){
if((i__17673_17690 < count__17672_17689))
{var map__17674_17691 = cljs.core._nth.call(null,chunk__17671_17688,i__17673_17690);var map__17674_17692__$1 = ((cljs.core.seq_QMARK_.call(null,map__17674_17691))?cljs.core.apply.call(null,cljs.core.hash_map,map__17674_17691):map__17674_17691);var p_17693 = map__17674_17692__$1;var vec__17675_17694 = cljs.core.get.call(null,map__17674_17692__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_17695 = cljs.core.nth.call(null,vec__17675_17694,(0),null);var y_17696 = cljs.core.nth.call(null,vec__17675_17694,(1),null);var r_17697 = cljs.core.nth.call(null,vec__17675_17694,(2),null);var vec__17676_17698 = cljs.core.get.call(null,map__17674_17692__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_17699 = cljs.core.nth.call(null,vec__17676_17698,(0),null);var ys_17700 = cljs.core.nth.call(null,vec__17676_17698,(1),null);var vec__17677_17701 = cljs.core.get.call(null,map__17674_17692__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_17702__$1 = cljs.core.nth.call(null,vec__17677_17701,(0),null);var g_17703 = cljs.core.nth.call(null,vec__17677_17701,(1),null);var b_17704 = cljs.core.nth.call(null,vec__17677_17701,(2),null);var a_17705 = cljs.core.nth.call(null,vec__17677_17701,(3),null);var G__17678_17706 = canvas_ctx_17685;(G__17678_17706["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_17702__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_17703 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_17704 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_17705)+")"));
G__17678_17706.fillRect(x_17695,y_17696,xs_17699,ys_17700);
{
var G__17707 = seq__17670_17687;
var G__17708 = chunk__17671_17688;
var G__17709 = count__17672_17689;
var G__17710 = (i__17673_17690 + (1));
seq__17670_17687 = G__17707;
chunk__17671_17688 = G__17708;
count__17672_17689 = G__17709;
i__17673_17690 = G__17710;
continue;
}
} else
{var temp__4126__auto___17711 = cljs.core.seq.call(null,seq__17670_17687);if(temp__4126__auto___17711)
{var seq__17670_17712__$1 = temp__4126__auto___17711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17670_17712__$1))
{var c__4307__auto___17713 = cljs.core.chunk_first.call(null,seq__17670_17712__$1);{
var G__17714 = cljs.core.chunk_rest.call(null,seq__17670_17712__$1);
var G__17715 = c__4307__auto___17713;
var G__17716 = cljs.core.count.call(null,c__4307__auto___17713);
var G__17717 = (0);
seq__17670_17687 = G__17714;
chunk__17671_17688 = G__17715;
count__17672_17689 = G__17716;
i__17673_17690 = G__17717;
continue;
}
} else
{var map__17679_17718 = cljs.core.first.call(null,seq__17670_17712__$1);var map__17679_17719__$1 = ((cljs.core.seq_QMARK_.call(null,map__17679_17718))?cljs.core.apply.call(null,cljs.core.hash_map,map__17679_17718):map__17679_17718);var p_17720 = map__17679_17719__$1;var vec__17680_17721 = cljs.core.get.call(null,map__17679_17719__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_17722 = cljs.core.nth.call(null,vec__17680_17721,(0),null);var y_17723 = cljs.core.nth.call(null,vec__17680_17721,(1),null);var r_17724 = cljs.core.nth.call(null,vec__17680_17721,(2),null);var vec__17681_17725 = cljs.core.get.call(null,map__17679_17719__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_17726 = cljs.core.nth.call(null,vec__17681_17725,(0),null);var ys_17727 = cljs.core.nth.call(null,vec__17681_17725,(1),null);var vec__17682_17728 = cljs.core.get.call(null,map__17679_17719__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_17729__$1 = cljs.core.nth.call(null,vec__17682_17728,(0),null);var g_17730 = cljs.core.nth.call(null,vec__17682_17728,(1),null);var b_17731 = cljs.core.nth.call(null,vec__17682_17728,(2),null);var a_17732 = cljs.core.nth.call(null,vec__17682_17728,(3),null);var G__17683_17733 = canvas_ctx_17685;(G__17683_17733["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_17729__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_17730 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_17731 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_17732)+")"));
G__17683_17733.fillRect(x_17722,y_17723,xs_17726,ys_17727);
{
var G__17734 = cljs.core.next.call(null,seq__17670_17712__$1);
var G__17735 = null;
var G__17736 = (0);
var G__17737 = (0);
seq__17670_17687 = G__17734;
chunk__17671_17688 = G__17735;
count__17672_17689 = G__17736;
i__17673_17690 = G__17737;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj17765 = {};return obj17765;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__17763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__17763,(0),null);var ch = cljs.core.nth.call(null,vec__17763,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__17763,cw,ch){
return (function (p__17766){var map__17767 = p__17766;var map__17767__$1 = ((cljs.core.seq_QMARK_.call(null,map__17767))?cljs.core.apply.call(null,cljs.core.hash_map,map__17767):map__17767);var ctx = map__17767__$1;var timer = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__17767,map__17767__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__17763,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__17767,map__17767__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__17763,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___17788 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___17788 == null))
{} else
{var faceImg_17789 = temp__4130__auto___17788;var tex_17790 = app.main.cacheTex.call(null,gl__$1,faceImg_17789);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_17790,faceImg_17789,temp__4130__auto___17788,map__17767,map__17767__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__17763,cw,ch){
return (function (pobj){var seq__17768 = cljs.core.seq.call(null,ps);var chunk__17769 = null;var count__17770 = (0);var i__17771 = (0);while(true){
if((i__17771 < count__17770))
{var map__17772 = cljs.core._nth.call(null,chunk__17769,i__17771);var map__17772__$1 = ((cljs.core.seq_QMARK_.call(null,map__17772))?cljs.core.apply.call(null,cljs.core.hash_map,map__17772):map__17772);var p = map__17772__$1;var vec__17773 = cljs.core.get.call(null,map__17772__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17773,(0),null);var y = cljs.core.nth.call(null,vec__17773,(1),null);var rot = cljs.core.nth.call(null,vec__17773,(2),null);var vec__17774 = cljs.core.get.call(null,map__17772__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__17774,(0),null);var ys = cljs.core.nth.call(null,vec__17774,(1),null);var vec__17775 = cljs.core.get.call(null,map__17772__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__17775,(0),null);var g = cljs.core.nth.call(null,vec__17775,(1),null);var b = cljs.core.nth.call(null,vec__17775,(2),null);var a = cljs.core.nth.call(null,vec__17775,(3),null);var proj_17791 = (function (){var G__17776 = (new THREE.Matrix4());G__17776.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17776;
})();var tras_17792 = (function (){var G__17777 = (new THREE.Matrix4());G__17777.makeTranslation(x,y,(0));
G__17777.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17777.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17777;
})();var texTx_17793 = (function (){var G__17778 = (new THREE.Matrix3());return G__17778;
})();var colorTx_17794 = (function (){var G__17779 = (new THREE.Matrix4());G__17779.makeTranslation(r,g,b);
return G__17779;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_17791.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_17792.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_17790,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_17793.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_17794.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__17795 = seq__17768;
var G__17796 = chunk__17769;
var G__17797 = count__17770;
var G__17798 = (i__17771 + (1));
seq__17768 = G__17795;
chunk__17769 = G__17796;
count__17770 = G__17797;
i__17771 = G__17798;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17768);if(temp__4126__auto__)
{var seq__17768__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17768__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__17768__$1);{
var G__17799 = cljs.core.chunk_rest.call(null,seq__17768__$1);
var G__17800 = c__4307__auto__;
var G__17801 = cljs.core.count.call(null,c__4307__auto__);
var G__17802 = (0);
seq__17768 = G__17799;
chunk__17769 = G__17800;
count__17770 = G__17801;
i__17771 = G__17802;
continue;
}
} else
{var map__17780 = cljs.core.first.call(null,seq__17768__$1);var map__17780__$1 = ((cljs.core.seq_QMARK_.call(null,map__17780))?cljs.core.apply.call(null,cljs.core.hash_map,map__17780):map__17780);var p = map__17780__$1;var vec__17781 = cljs.core.get.call(null,map__17780__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17781,(0),null);var y = cljs.core.nth.call(null,vec__17781,(1),null);var rot = cljs.core.nth.call(null,vec__17781,(2),null);var vec__17782 = cljs.core.get.call(null,map__17780__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__17782,(0),null);var ys = cljs.core.nth.call(null,vec__17782,(1),null);var vec__17783 = cljs.core.get.call(null,map__17780__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__17783,(0),null);var g = cljs.core.nth.call(null,vec__17783,(1),null);var b = cljs.core.nth.call(null,vec__17783,(2),null);var a = cljs.core.nth.call(null,vec__17783,(3),null);var proj_17803 = (function (){var G__17784 = (new THREE.Matrix4());G__17784.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17784;
})();var tras_17804 = (function (){var G__17785 = (new THREE.Matrix4());G__17785.makeTranslation(x,y,(0));
G__17785.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17785.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17785;
})();var texTx_17805 = (function (){var G__17786 = (new THREE.Matrix3());return G__17786;
})();var colorTx_17806 = (function (){var G__17787 = (new THREE.Matrix4());G__17787.makeTranslation(r,g,b);
return G__17787;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_17803.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_17804.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_17790,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_17805.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_17806.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__17807 = cljs.core.next.call(null,seq__17768__$1);
var G__17808 = null;
var G__17809 = (0);
var G__17810 = (0);
seq__17768 = G__17807;
chunk__17769 = G__17808;
count__17770 = G__17809;
i__17771 = G__17810;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_17790,faceImg_17789,temp__4130__auto___17788,map__17767,map__17767__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__17763,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__17763,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6202__auto___18201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___18201){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___18201){
return (function (state_18152){var state_val_18153 = (state_18152[(1)]);if((state_val_18153 === (7)))
{var inst_18147 = (state_18152[(2)]);var inst_18113 = inst_18147;var state_18152__$1 = (function (){var statearr_18154 = state_18152;(statearr_18154[(7)] = inst_18113);
return statearr_18154;
})();var statearr_18155_18202 = state_18152__$1;(statearr_18155_18202[(2)] = null);
(statearr_18155_18202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (1)))
{var inst_18006 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_18007 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_18008 = [(250),(250),(0)];var inst_18009 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18008,null));var inst_18010 = [(0),(0),(0)];var inst_18011 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18010,null));var inst_18012 = [(0),(0)];var inst_18013 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18012,null));var inst_18014 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_18015 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_18016 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_18017 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_18018 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_18019 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_18020 = [0.5];var inst_18021 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18019,inst_18020);var inst_18022 = [inst_18021];var inst_18023 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18022,null));var inst_18024 = [(1),0.9,(1000),inst_18023];var inst_18025 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18018,inst_18024);var inst_18026 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_18027 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18026,null));var inst_18028 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,state_val_18153,c__6202__auto___18201){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,state_val_18153,c__6202__auto___18201))
})();var inst_18029 = [inst_18027,inst_18028];var inst_18030 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18029,null));var inst_18031 = [inst_18030];var inst_18032 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18031,null));var inst_18033 = [(1),inst_18025,inst_18032];var inst_18034 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18017,inst_18033);var inst_18035 = [inst_18034];var inst_18036 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18035,null));var inst_18037 = [(1),0.1,inst_18036];var inst_18038 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18016,inst_18037);var inst_18039 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_18040 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18039,null));var inst_18041 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,state_val_18153,c__6202__auto___18201){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,state_val_18153,c__6202__auto___18201))
})();var inst_18042 = [inst_18040,inst_18041];var inst_18043 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18042,null));var inst_18044 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_18045 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18044,null));var inst_18046 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,state_val_18153,c__6202__auto___18201){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,state_val_18153,c__6202__auto___18201))
})();var inst_18047 = [inst_18045,inst_18046];var inst_18048 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18047,null));var inst_18049 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_18050 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18049,null));var inst_18051 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,state_val_18153,c__6202__auto___18201){
return (function (life,v){return v;
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,state_val_18153,c__6202__auto___18201))
})();var inst_18052 = [inst_18050,inst_18051];var inst_18053 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18052,null));var inst_18054 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_18055 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18054,null));var inst_18056 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,state_val_18153,c__6202__auto___18201){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,state_val_18153,c__6202__auto___18201))
})();var inst_18057 = [inst_18055,inst_18056];var inst_18058 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18057,null));var inst_18059 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_18060 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18059,null));var inst_18061 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,state_val_18153,c__6202__auto___18201){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,state_val_18153,c__6202__auto___18201))
})();var inst_18062 = [inst_18060,inst_18061];var inst_18063 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18062,null));var inst_18064 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_18065 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18064,null));var inst_18066 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,state_val_18153,c__6202__auto___18201){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,state_val_18153,c__6202__auto___18201))
})();var inst_18067 = [inst_18065,inst_18066];var inst_18068 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18067,null));var inst_18069 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_18070 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18069,null));var inst_18071 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,state_val_18153,c__6202__auto___18201){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,state_val_18153,c__6202__auto___18201))
})();var inst_18072 = [inst_18070,inst_18071];var inst_18073 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18072,null));var inst_18074 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_18075 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18074,null));var inst_18076 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,state_val_18153,c__6202__auto___18201){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,state_val_18153,c__6202__auto___18201))
})();var inst_18077 = [inst_18075,inst_18076];var inst_18078 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18077,null));var inst_18079 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_18080 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18079,null));var inst_18081 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,state_val_18153,c__6202__auto___18201){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,state_val_18153,c__6202__auto___18201))
})();var inst_18082 = [inst_18080,inst_18081];var inst_18083 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18082,null));var inst_18084 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_18085 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18084,null));var inst_18086 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,inst_18081,inst_18082,inst_18083,inst_18084,inst_18085,state_val_18153,c__6202__auto___18201){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,inst_18081,inst_18082,inst_18083,inst_18084,inst_18085,state_val_18153,c__6202__auto___18201))
})();var inst_18087 = [inst_18085,inst_18086];var inst_18088 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18087,null));var inst_18089 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_18090 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18089,null));var inst_18091 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,inst_18081,inst_18082,inst_18083,inst_18084,inst_18085,inst_18086,inst_18087,inst_18088,inst_18089,inst_18090,state_val_18153,c__6202__auto___18201){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,inst_18081,inst_18082,inst_18083,inst_18084,inst_18085,inst_18086,inst_18087,inst_18088,inst_18089,inst_18090,state_val_18153,c__6202__auto___18201))
})();var inst_18092 = [inst_18090,inst_18091];var inst_18093 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18092,null));var inst_18094 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_18095 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18094,null));var inst_18096 = (function (){return ((function (inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,inst_18081,inst_18082,inst_18083,inst_18084,inst_18085,inst_18086,inst_18087,inst_18088,inst_18089,inst_18090,inst_18091,inst_18092,inst_18093,inst_18094,inst_18095,state_val_18153,c__6202__auto___18201){
return (function (life,v){return life;
});
;})(inst_18006,inst_18007,inst_18008,inst_18009,inst_18010,inst_18011,inst_18012,inst_18013,inst_18014,inst_18015,inst_18016,inst_18017,inst_18018,inst_18019,inst_18020,inst_18021,inst_18022,inst_18023,inst_18024,inst_18025,inst_18026,inst_18027,inst_18028,inst_18029,inst_18030,inst_18031,inst_18032,inst_18033,inst_18034,inst_18035,inst_18036,inst_18037,inst_18038,inst_18039,inst_18040,inst_18041,inst_18042,inst_18043,inst_18044,inst_18045,inst_18046,inst_18047,inst_18048,inst_18049,inst_18050,inst_18051,inst_18052,inst_18053,inst_18054,inst_18055,inst_18056,inst_18057,inst_18058,inst_18059,inst_18060,inst_18061,inst_18062,inst_18063,inst_18064,inst_18065,inst_18066,inst_18067,inst_18068,inst_18069,inst_18070,inst_18071,inst_18072,inst_18073,inst_18074,inst_18075,inst_18076,inst_18077,inst_18078,inst_18079,inst_18080,inst_18081,inst_18082,inst_18083,inst_18084,inst_18085,inst_18086,inst_18087,inst_18088,inst_18089,inst_18090,inst_18091,inst_18092,inst_18093,inst_18094,inst_18095,state_val_18153,c__6202__auto___18201))
})();var inst_18097 = [inst_18095,inst_18096];var inst_18098 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18097,null));var inst_18099 = [inst_18043,inst_18048,inst_18053,inst_18058,inst_18063,inst_18068,inst_18073,inst_18078,inst_18083,inst_18088,inst_18093,inst_18098];var inst_18100 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18099,null));var inst_18101 = [(2),inst_18038,inst_18100];var inst_18102 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18015,inst_18101);var inst_18103 = [inst_18102];var inst_18104 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18103,null));var inst_18105 = [(1),0.1,-1.57,1.57,(50),inst_18104];var inst_18106 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18014,inst_18105);var inst_18107 = [(-1),inst_18009,inst_18011,inst_18013,inst_18106];var inst_18108 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18007,inst_18107);var inst_18109 = tool.particle.particle.call(null,inst_18108);var inst_18110 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_18109);var inst_18111 = [(0),inst_18110];var inst_18112 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18006,inst_18111);var inst_18113 = inst_18112;var state_18152__$1 = (function (){var statearr_18156 = state_18152;(statearr_18156[(7)] = inst_18113);
return statearr_18156;
})();var statearr_18157_18203 = state_18152__$1;(statearr_18157_18203[(2)] = null);
(statearr_18157_18203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (4)))
{var inst_18121 = (state_18152[(8)]);var inst_18119 = (state_18152[(2)]);var inst_18120 = cljs.core.nth.call(null,inst_18119,(0),null);var inst_18121__$1 = cljs.core.nth.call(null,inst_18119,(1),null);var inst_18125 = cljs.core._EQ_.call(null,app.react.onTick,inst_18121__$1);var state_18152__$1 = (function (){var statearr_18158 = state_18152;(statearr_18158[(9)] = inst_18120);
(statearr_18158[(8)] = inst_18121__$1);
return statearr_18158;
})();if(inst_18125)
{var statearr_18159_18204 = state_18152__$1;(statearr_18159_18204[(1)] = (5));
} else
{var statearr_18160_18205 = state_18152__$1;(statearr_18160_18205[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (6)))
{var inst_18121 = (state_18152[(8)]);var inst_18135 = cljs.core._EQ_.call(null,app.react.onImage,inst_18121);var state_18152__$1 = state_18152;if(inst_18135)
{var statearr_18161_18206 = state_18152__$1;(statearr_18161_18206[(1)] = (8));
} else
{var statearr_18162_18207 = state_18152__$1;(statearr_18162_18207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (3)))
{var inst_18150 = (state_18152[(2)]);var state_18152__$1 = state_18152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18152__$1,inst_18150);
} else
{if((state_val_18153 === (2)))
{var inst_18116 = [app.react.onTick,app.react.onImage];var inst_18117 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18116,null));var state_18152__$1 = state_18152;return cljs.core.async.ioc_alts_BANG_.call(null,state_18152__$1,(4),inst_18117);
} else
{if((state_val_18153 === (9)))
{var inst_18113 = (state_18152[(7)]);var state_18152__$1 = state_18152;var statearr_18163_18208 = state_18152__$1;(statearr_18163_18208[(2)] = inst_18113);
(statearr_18163_18208[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (5)))
{var inst_18120 = (state_18152[(9)]);var inst_18113 = (state_18152[(7)]);var inst_18127 = $("#canvas");var inst_18128 = tool.particle.update.call(null,inst_18120,inst_18113);var inst_18129 = app.main.draw.call(null,inst_18127,inst_18128);var inst_18130 = app.main.draw3D.call(null,inst_18129);var inst_18131 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_18132 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18131,null));var inst_18133 = cljs.core.update_in.call(null,inst_18130,inst_18132,cljs.core._PLUS_,inst_18120);var state_18152__$1 = state_18152;var statearr_18164_18209 = state_18152__$1;(statearr_18164_18209[(2)] = inst_18133);
(statearr_18164_18209[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (10)))
{var inst_18145 = (state_18152[(2)]);var state_18152__$1 = state_18152;var statearr_18165_18210 = state_18152__$1;(statearr_18165_18210[(2)] = inst_18145);
(statearr_18165_18210[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18153 === (8)))
{var inst_18120 = (state_18152[(9)]);var inst_18113 = (state_18152[(7)]);var inst_18138 = cljs.core.nth.call(null,inst_18120,(0),null);var inst_18139 = cljs.core.nth.call(null,inst_18120,(1),null);var inst_18140 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_18138];var inst_18141 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18140,null));var inst_18142 = cljs.core.assoc_in.call(null,inst_18113,inst_18141,inst_18139);var state_18152__$1 = state_18152;var statearr_18166_18211 = state_18152__$1;(statearr_18166_18211[(2)] = inst_18142);
(statearr_18166_18211[(1)] = (10));
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
});})(c__6202__auto___18201))
;return ((function (switch__6187__auto__,c__6202__auto___18201){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18170 = [null,null,null,null,null,null,null,null,null,null];(statearr_18170[(0)] = state_machine__6188__auto__);
(statearr_18170[(1)] = (1));
return statearr_18170;
});
var state_machine__6188__auto____1 = (function (state_18152){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18171){if((e18171 instanceof Object))
{var ex__6191__auto__ = e18171;var statearr_18172_18212 = state_18152;(statearr_18172_18212[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18213 = state_18152;
state_18152 = G__18213;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18152){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___18201))
})();var state__6204__auto__ = (function (){var statearr_18173 = f__6203__auto__.call(null);(statearr_18173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___18201);
return statearr_18173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___18201))
);
var face_18214 = (new Image());face_18214.src = "res/images/m_gr.jpg";
face_18214.onload = ((function (face_18214){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,face_18214){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,face_18214){
return (function (state_18179){var state_val_18180 = (state_18179[(1)]);if((state_val_18180 === (2)))
{var inst_18177 = (state_18179[(2)]);var state_18179__$1 = state_18179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18179__$1,inst_18177);
} else
{if((state_val_18180 === (1)))
{var inst_18174 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_18214];var inst_18175 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18174,null));var state_18179__$1 = state_18179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18179__$1,(2),app.react.onImage,inst_18175);
} else
{return null;
}
}
});})(c__6202__auto__,face_18214))
;return ((function (switch__6187__auto__,c__6202__auto__,face_18214){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18184 = [null,null,null,null,null,null,null];(statearr_18184[(0)] = state_machine__6188__auto__);
(statearr_18184[(1)] = (1));
return statearr_18184;
});
var state_machine__6188__auto____1 = (function (state_18179){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18185){if((e18185 instanceof Object))
{var ex__6191__auto__ = e18185;var statearr_18186_18215 = state_18179;(statearr_18186_18215[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18216 = state_18179;
state_18179 = G__18216;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18179){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,face_18214))
})();var state__6204__auto__ = (function (){var statearr_18187 = f__6203__auto__.call(null);(statearr_18187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_18187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,face_18214))
);
return c__6202__auto__;
});})(face_18214))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6202__auto___18217 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___18217,curr_time__$1,elapsed,last_time){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___18217,curr_time__$1,elapsed,last_time){
return (function (state_18192){var state_val_18193 = (state_18192[(1)]);if((state_val_18193 === (2)))
{var inst_18190 = (state_18192[(2)]);var state_18192__$1 = state_18192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18192__$1,inst_18190);
} else
{if((state_val_18193 === (1)))
{var inst_18188 = (elapsed / (1000));var state_18192__$1 = state_18192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18192__$1,(2),app.react.onTick,inst_18188);
} else
{return null;
}
}
});})(c__6202__auto___18217,curr_time__$1,elapsed,last_time))
;return ((function (switch__6187__auto__,c__6202__auto___18217,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18197 = [null,null,null,null,null,null,null];(statearr_18197[(0)] = state_machine__6188__auto__);
(statearr_18197[(1)] = (1));
return statearr_18197;
});
var state_machine__6188__auto____1 = (function (state_18192){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18192);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18198){if((e18198 instanceof Object))
{var ex__6191__auto__ = e18198;var statearr_18199_18218 = state_18192;(statearr_18199_18218[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18219 = state_18192;
state_18192 = G__18219;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18192){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___18217,curr_time__$1,elapsed,last_time))
})();var state__6204__auto__ = (function (){var statearr_18200 = f__6203__auto__.call(null);(statearr_18200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___18217);
return statearr_18200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___18217,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
