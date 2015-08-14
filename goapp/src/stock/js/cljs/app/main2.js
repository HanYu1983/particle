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
return (function (p__9777){var map__9778 = p__9777;var map__9778__$1 = ((cljs.core.seq_QMARK_.call(null,map__9778))?cljs.core.apply.call(null,cljs.core.hash_map,map__9778):map__9778);var ctx = map__9778__$1;var map__9779 = cljs.core.get.call(null,map__9778__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__9779__$1 = ((cljs.core.seq_QMARK_.call(null,map__9779))?cljs.core.apply.call(null,cljs.core.hash_map,map__9779):map__9779);var ps = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__9780_9795 = canvas_ctx;(G__9780_9795["fillStyle"] = "white");
G__9780_9795.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__9780_9795["fillStyle"] = "red");
G__9780_9795.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__9781_9796 = cljs.core.seq.call(null,ps);var chunk__9782_9797 = null;var count__9783_9798 = (0);var i__9784_9799 = (0);while(true){
if((i__9784_9799 < count__9783_9798))
{var map__9785_9800 = cljs.core._nth.call(null,chunk__9782_9797,i__9784_9799);var map__9785_9801__$1 = ((cljs.core.seq_QMARK_.call(null,map__9785_9800))?cljs.core.apply.call(null,cljs.core.hash_map,map__9785_9800):map__9785_9800);var p_9802 = map__9785_9801__$1;var vec__9786_9803 = cljs.core.get.call(null,map__9785_9801__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9804 = cljs.core.nth.call(null,vec__9786_9803,(0),null);var y_9805 = cljs.core.nth.call(null,vec__9786_9803,(1),null);var rot_9806 = cljs.core.nth.call(null,vec__9786_9803,(2),null);var vec__9787_9807 = cljs.core.get.call(null,map__9785_9801__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9808 = cljs.core.nth.call(null,vec__9787_9807,(0),null);var ys_9809 = cljs.core.nth.call(null,vec__9787_9807,(1),null);var vec__9788_9810 = cljs.core.get.call(null,map__9785_9801__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9811 = cljs.core.nth.call(null,vec__9788_9810,(0),null);var g_9812 = cljs.core.nth.call(null,vec__9788_9810,(1),null);var b_9813 = cljs.core.nth.call(null,vec__9788_9810,(2),null);var a_9814 = cljs.core.nth.call(null,vec__9788_9810,(3),null);var G__9789_9815 = canvas_ctx;G__9789_9815.save();
G__9789_9815.translate(x_9804,y_9805);
G__9789_9815.rotate(rot_9806);
(G__9789_9815["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9811 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9812 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9813 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9814)+")"));
G__9789_9815.fillRect((- (xs_9808 / (2))),(- (ys_9809 / (2))),xs_9808,ys_9809);
G__9789_9815.restore();
{
var G__9816 = seq__9781_9796;
var G__9817 = chunk__9782_9797;
var G__9818 = count__9783_9798;
var G__9819 = (i__9784_9799 + (1));
seq__9781_9796 = G__9816;
chunk__9782_9797 = G__9817;
count__9783_9798 = G__9818;
i__9784_9799 = G__9819;
continue;
}
} else
{var temp__4126__auto___9820 = cljs.core.seq.call(null,seq__9781_9796);if(temp__4126__auto___9820)
{var seq__9781_9821__$1 = temp__4126__auto___9820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9781_9821__$1))
{var c__4307__auto___9822 = cljs.core.chunk_first.call(null,seq__9781_9821__$1);{
var G__9823 = cljs.core.chunk_rest.call(null,seq__9781_9821__$1);
var G__9824 = c__4307__auto___9822;
var G__9825 = cljs.core.count.call(null,c__4307__auto___9822);
var G__9826 = (0);
seq__9781_9796 = G__9823;
chunk__9782_9797 = G__9824;
count__9783_9798 = G__9825;
i__9784_9799 = G__9826;
continue;
}
} else
{var map__9790_9827 = cljs.core.first.call(null,seq__9781_9821__$1);var map__9790_9828__$1 = ((cljs.core.seq_QMARK_.call(null,map__9790_9827))?cljs.core.apply.call(null,cljs.core.hash_map,map__9790_9827):map__9790_9827);var p_9829 = map__9790_9828__$1;var vec__9791_9830 = cljs.core.get.call(null,map__9790_9828__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9831 = cljs.core.nth.call(null,vec__9791_9830,(0),null);var y_9832 = cljs.core.nth.call(null,vec__9791_9830,(1),null);var rot_9833 = cljs.core.nth.call(null,vec__9791_9830,(2),null);var vec__9792_9834 = cljs.core.get.call(null,map__9790_9828__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9835 = cljs.core.nth.call(null,vec__9792_9834,(0),null);var ys_9836 = cljs.core.nth.call(null,vec__9792_9834,(1),null);var vec__9793_9837 = cljs.core.get.call(null,map__9790_9828__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9838 = cljs.core.nth.call(null,vec__9793_9837,(0),null);var g_9839 = cljs.core.nth.call(null,vec__9793_9837,(1),null);var b_9840 = cljs.core.nth.call(null,vec__9793_9837,(2),null);var a_9841 = cljs.core.nth.call(null,vec__9793_9837,(3),null);var G__9794_9842 = canvas_ctx;G__9794_9842.save();
G__9794_9842.translate(x_9831,y_9832);
G__9794_9842.rotate(rot_9833);
(G__9794_9842["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9838 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9839 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9840 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9841)+")"));
G__9794_9842.fillRect((- (xs_9835 / (2))),(- (ys_9836 / (2))),xs_9835,ys_9836);
G__9794_9842.restore();
{
var G__9843 = cljs.core.next.call(null,seq__9781_9821__$1);
var G__9844 = null;
var G__9845 = (0);
var G__9846 = (0);
seq__9781_9796 = G__9843;
chunk__9782_9797 = G__9844;
count__9783_9798 = G__9845;
i__9784_9799 = G__9846;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj9875 = {};return obj9875;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__9873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__9873,(0),null);var ch = cljs.core.nth.call(null,vec__9873,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__9873,cw,ch){
return (function (p__9876){var map__9877 = p__9876;var map__9877__$1 = ((cljs.core.seq_QMARK_.call(null,map__9877))?cljs.core.apply.call(null,cljs.core.hash_map,map__9877):map__9877);var ctx = map__9877__$1;var timer = cljs.core.get.call(null,map__9877__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__9878 = cljs.core.get.call(null,map__9877__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__9878__$1 = ((cljs.core.seq_QMARK_.call(null,map__9878))?cljs.core.apply.call(null,cljs.core.hash_map,map__9878):map__9878);var ps = cljs.core.get.call(null,map__9878__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___9899 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___9899 == null))
{} else
{var faceImg_9900 = temp__4130__auto___9899;var tex_9901 = app.main2.cacheTex.call(null,gl__$1,faceImg_9900);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_9901,faceImg_9900,temp__4130__auto___9899,map__9877,map__9877__$1,ctx,timer,map__9878,map__9878__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__9873,cw,ch){
return (function (pobj){var seq__9879 = cljs.core.seq.call(null,ps);var chunk__9880 = null;var count__9881 = (0);var i__9882 = (0);while(true){
if((i__9882 < count__9881))
{var map__9883 = cljs.core._nth.call(null,chunk__9880,i__9882);var map__9883__$1 = ((cljs.core.seq_QMARK_.call(null,map__9883))?cljs.core.apply.call(null,cljs.core.hash_map,map__9883):map__9883);var p = map__9883__$1;var vec__9884 = cljs.core.get.call(null,map__9883__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9884,(0),null);var y = cljs.core.nth.call(null,vec__9884,(1),null);var rot = cljs.core.nth.call(null,vec__9884,(2),null);var vec__9885 = cljs.core.get.call(null,map__9883__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9885,(0),null);var ys = cljs.core.nth.call(null,vec__9885,(1),null);var vec__9886 = cljs.core.get.call(null,map__9883__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9886,(0),null);var g = cljs.core.nth.call(null,vec__9886,(1),null);var b = cljs.core.nth.call(null,vec__9886,(2),null);var a = cljs.core.nth.call(null,vec__9886,(3),null);var proj_9902 = (function (){var G__9887 = (new THREE.Matrix4());G__9887.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9887;
})();var tras_9903 = (function (){var G__9888 = (new THREE.Matrix4());G__9888.makeTranslation(x,y,(0));
G__9888.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9888.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9888;
})();var texTx_9904 = (function (){var G__9889 = (new THREE.Matrix3());return G__9889;
})();var colorTx_9905 = (function (){var G__9890 = (new THREE.Matrix4());G__9890.makeTranslation(r,g,b);
return G__9890;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9902.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9903.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9901,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9904.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9905.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9906 = seq__9879;
var G__9907 = chunk__9880;
var G__9908 = count__9881;
var G__9909 = (i__9882 + (1));
seq__9879 = G__9906;
chunk__9880 = G__9907;
count__9881 = G__9908;
i__9882 = G__9909;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9879);if(temp__4126__auto__)
{var seq__9879__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9879__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__9879__$1);{
var G__9910 = cljs.core.chunk_rest.call(null,seq__9879__$1);
var G__9911 = c__4307__auto__;
var G__9912 = cljs.core.count.call(null,c__4307__auto__);
var G__9913 = (0);
seq__9879 = G__9910;
chunk__9880 = G__9911;
count__9881 = G__9912;
i__9882 = G__9913;
continue;
}
} else
{var map__9891 = cljs.core.first.call(null,seq__9879__$1);var map__9891__$1 = ((cljs.core.seq_QMARK_.call(null,map__9891))?cljs.core.apply.call(null,cljs.core.hash_map,map__9891):map__9891);var p = map__9891__$1;var vec__9892 = cljs.core.get.call(null,map__9891__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9892,(0),null);var y = cljs.core.nth.call(null,vec__9892,(1),null);var rot = cljs.core.nth.call(null,vec__9892,(2),null);var vec__9893 = cljs.core.get.call(null,map__9891__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9893,(0),null);var ys = cljs.core.nth.call(null,vec__9893,(1),null);var vec__9894 = cljs.core.get.call(null,map__9891__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9894,(0),null);var g = cljs.core.nth.call(null,vec__9894,(1),null);var b = cljs.core.nth.call(null,vec__9894,(2),null);var a = cljs.core.nth.call(null,vec__9894,(3),null);var proj_9914 = (function (){var G__9895 = (new THREE.Matrix4());G__9895.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9895;
})();var tras_9915 = (function (){var G__9896 = (new THREE.Matrix4());G__9896.makeTranslation(x,y,(0));
G__9896.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9896.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9896;
})();var texTx_9916 = (function (){var G__9897 = (new THREE.Matrix3());return G__9897;
})();var colorTx_9917 = (function (){var G__9898 = (new THREE.Matrix4());G__9898.makeTranslation(r,g,b);
return G__9898;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9914.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9915.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9901,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9916.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9917.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9918 = cljs.core.next.call(null,seq__9879__$1);
var G__9919 = null;
var G__9920 = (0);
var G__9921 = (0);
seq__9879 = G__9918;
chunk__9880 = G__9919;
count__9881 = G__9920;
i__9882 = G__9921;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_9901,faceImg_9900,temp__4130__auto___9899,map__9877,map__9877__$1,ctx,timer,map__9878,map__9878__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__9873,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__9873,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (state_10168){var state_val_10169 = (state_10168[(1)]);if((state_val_10169 === (2)))
{var inst_10166 = (state_10168[(2)]);var state_10168__$1 = state_10168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10168__$1,inst_10166);
} else
{if((state_val_10169 === (1)))
{var state_10168__$1 = state_10168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10168__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10173 = [null,null,null,null,null,null,null];(statearr_10173[(0)] = state_machine__6189__auto__);
(statearr_10173[(1)] = (1));
return statearr_10173;
});
var state_machine__6189__auto____1 = (function (state_10168){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10174){if((e10174 instanceof Object))
{var ex__6192__auto__ = e10174;var statearr_10175_10407 = state_10168;(statearr_10175_10407[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10408 = state_10168;
state_10168 = G__10408;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10168){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10176 = f__6204__auto__.call(null);(statearr_10176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onTick,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6203__auto___10409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10409,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10409,onView,onModel,onTick,mspf){
return (function (state_10185){var state_val_10186 = (state_10185[(1)]);if((state_val_10186 === (4)))
{var inst_10179 = (state_10185[(2)]);var inst_10180 = common.onModel.onNext(inst_10179);var state_10185__$1 = (function (){var statearr_10187 = state_10185;(statearr_10187[(7)] = inst_10180);
return statearr_10187;
})();var statearr_10188_10410 = state_10185__$1;(statearr_10188_10410[(2)] = null);
(statearr_10188_10410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10186 === (3)))
{var inst_10183 = (state_10185[(2)]);var state_10185__$1 = state_10185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10185__$1,inst_10183);
} else
{if((state_val_10186 === (2)))
{var state_10185__$1 = state_10185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10185__$1,(4),onModel);
} else
{if((state_val_10186 === (1)))
{var state_10185__$1 = state_10185;var statearr_10189_10411 = state_10185__$1;(statearr_10189_10411[(2)] = null);
(statearr_10189_10411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___10409,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10409,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10193 = [null,null,null,null,null,null,null,null];(statearr_10193[(0)] = state_machine__6189__auto__);
(statearr_10193[(1)] = (1));
return statearr_10193;
});
var state_machine__6189__auto____1 = (function (state_10185){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10194){if((e10194 instanceof Object))
{var ex__6192__auto__ = e10194;var statearr_10195_10412 = state_10185;(statearr_10195_10412[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10413 = state_10185;
state_10185 = G__10413;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10185){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10409,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10196 = f__6204__auto__.call(null);(statearr_10196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10409);
return statearr_10196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10409,onView,onModel,onTick,mspf))
);
var c__6203__auto___10414 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10414,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10414,onView,onModel,onTick,mspf){
return (function (state_10215){var state_val_10216 = (state_10215[(1)]);if((state_val_10216 === (5)))
{var inst_10199 = (state_10215[(7)]);var inst_10206 = (state_10215[(8)]);var inst_10210 = (state_10215[(2)]);var tmp10217 = inst_10199;var inst_10199__$1 = tmp10217;var inst_10200 = inst_10206;var state_10215__$1 = (function (){var statearr_10218 = state_10215;(statearr_10218[(9)] = inst_10210);
(statearr_10218[(10)] = inst_10200);
(statearr_10218[(7)] = inst_10199__$1);
return statearr_10218;
})();var statearr_10219_10415 = state_10215__$1;(statearr_10219_10415[(2)] = null);
(statearr_10219_10415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10216 === (4)))
{var inst_10200 = (state_10215[(10)]);var inst_10206 = (state_10215[(8)]);var inst_10204 = (state_10215[(2)]);var inst_10205 = (new Date());var inst_10206__$1 = inst_10205.getTime();var inst_10207 = (inst_10206__$1 - inst_10200);var inst_10208 = (inst_10207 / (1000));var state_10215__$1 = (function (){var statearr_10220 = state_10215;(statearr_10220[(11)] = inst_10204);
(statearr_10220[(8)] = inst_10206__$1);
return statearr_10220;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10215__$1,(5),onTick,inst_10208);
} else
{if((state_val_10216 === (3)))
{var inst_10213 = (state_10215[(2)]);var state_10215__$1 = state_10215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10215__$1,inst_10213);
} else
{if((state_val_10216 === (2)))
{var inst_10199 = (state_10215[(7)]);var inst_10202 = cljs.core.async.timeout.call(null,inst_10199);var state_10215__$1 = state_10215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10215__$1,(4),inst_10202);
} else
{if((state_val_10216 === (1)))
{var inst_10197 = (new Date());var inst_10198 = inst_10197.getTime();var inst_10199 = mspf;var inst_10200 = inst_10198;var state_10215__$1 = (function (){var statearr_10221 = state_10215;(statearr_10221[(10)] = inst_10200);
(statearr_10221[(7)] = inst_10199);
return statearr_10221;
})();var statearr_10222_10416 = state_10215__$1;(statearr_10222_10416[(2)] = null);
(statearr_10222_10416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10414,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10414,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10226 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10226[(0)] = state_machine__6189__auto__);
(statearr_10226[(1)] = (1));
return statearr_10226;
});
var state_machine__6189__auto____1 = (function (state_10215){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10227){if((e10227 instanceof Object))
{var ex__6192__auto__ = e10227;var statearr_10228_10417 = state_10215;(statearr_10228_10417[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10215);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10418 = state_10215;
state_10215 = G__10418;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10215){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10414,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10229 = f__6204__auto__.call(null);(statearr_10229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10414);
return statearr_10229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10414,onView,onModel,onTick,mspf))
);
var c__6203__auto___10419 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10419,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10419,onView,onModel,onTick,mspf){
return (function (state_10263){var state_val_10264 = (state_10263[(1)]);if((state_val_10264 === (5)))
{var inst_10261 = (state_10263[(2)]);var state_10263__$1 = state_10263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10263__$1,inst_10261);
} else
{if((state_val_10264 === (4)))
{var inst_10242 = (state_10263[(2)]);var inst_10249 = [(0),(0),(0)];var inst_10250 = [(10),(20)];var inst_10251 = [(100),(0),3.14];var inst_10252 = {"position":inst_10249,"size":inst_10250,"vel":inst_10251};var inst_10253 = [inst_10252];var inst_10254 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_10253};var inst_10255 = [(30),(10)];var inst_10256 = [(300),(300),(0)];var inst_10257 = [(100),(100),(0)];var inst_10258 = {"id":"x1","emit":inst_10254,"size":inst_10255,"pos":inst_10256,"vel":inst_10257};var inst_10259 = ["edit-particle",inst_10258];var state_10263__$1 = (function (){var statearr_10265 = state_10263;(statearr_10265[(7)] = inst_10242);
return statearr_10265;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10263__$1,(5),onView,inst_10259);
} else
{if((state_val_10264 === (3)))
{var inst_10239 = (state_10263[(2)]);var inst_10240 = cljs.core.async.timeout.call(null,(1100));var state_10263__$1 = (function (){var statearr_10266 = state_10263;(statearr_10266[(8)] = inst_10239);
return statearr_10266;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10263__$1,(4),inst_10240);
} else
{if((state_val_10264 === (2)))
{var inst_10232 = (state_10263[(2)]);var inst_10235 = [(300),(300),(0)];var inst_10236 = {"id":"x1","pos":inst_10235};var inst_10237 = ["edit-particle",inst_10236];var state_10263__$1 = (function (){var statearr_10267 = state_10263;(statearr_10267[(9)] = inst_10232);
return statearr_10267;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10263__$1,(3),onView,inst_10237);
} else
{if((state_val_10264 === (1)))
{var inst_10230 = cljs.core.async.timeout.call(null,(1000));var state_10263__$1 = state_10263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10263__$1,(2),inst_10230);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10419,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10419,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10271 = [null,null,null,null,null,null,null,null,null,null];(statearr_10271[(0)] = state_machine__6189__auto__);
(statearr_10271[(1)] = (1));
return statearr_10271;
});
var state_machine__6189__auto____1 = (function (state_10263){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10272){if((e10272 instanceof Object))
{var ex__6192__auto__ = e10272;var statearr_10273_10420 = state_10263;(statearr_10273_10420[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10421 = state_10263;
state_10263 = G__10421;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10263){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10419,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10274 = f__6204__auto__.call(null);(statearr_10274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10419);
return statearr_10274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10419,onView,onModel,onTick,mspf))
);
var c__6203__auto___10422 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10422,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10422,onView,onModel,onTick,mspf){
return (function (state_10367){var state_val_10368 = (state_10367[(1)]);if((state_val_10368 === (7)))
{var inst_10362 = (state_10367[(2)]);var inst_10282 = inst_10362;var state_10367__$1 = (function (){var statearr_10369 = state_10367;(statearr_10369[(7)] = inst_10282);
return statearr_10369;
})();var statearr_10370_10423 = state_10367__$1;(statearr_10370_10423[(2)] = null);
(statearr_10370_10423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (20)))
{var inst_10282 = (state_10367[(7)]);var state_10367__$1 = state_10367;var statearr_10371_10424 = state_10367__$1;(statearr_10371_10424[(2)] = inst_10282);
(statearr_10371_10424[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (1)))
{var inst_10275 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_10276 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10277 = cljs.core.List.EMPTY;var inst_10278 = [inst_10277];var inst_10279 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10276,inst_10278);var inst_10280 = [(0),inst_10279];var inst_10281 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10275,inst_10280);var inst_10282 = inst_10281;var state_10367__$1 = (function (){var statearr_10372 = state_10367;(statearr_10372[(7)] = inst_10282);
return statearr_10372;
})();var statearr_10373_10425 = state_10367__$1;(statearr_10373_10425[(2)] = null);
(statearr_10373_10425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (4)))
{var inst_10290 = (state_10367[(8)]);var inst_10288 = (state_10367[(9)]);var inst_10288__$1 = (state_10367[(2)]);var inst_10289 = cljs.core.nth.call(null,inst_10288__$1,(0),null);var inst_10290__$1 = cljs.core.nth.call(null,inst_10288__$1,(1),null);var inst_10294 = cljs.core._EQ_.call(null,onTick,inst_10290__$1);var state_10367__$1 = (function (){var statearr_10374 = state_10367;(statearr_10374[(10)] = inst_10289);
(statearr_10374[(8)] = inst_10290__$1);
(statearr_10374[(9)] = inst_10288__$1);
return statearr_10374;
})();if(inst_10294)
{var statearr_10375_10426 = state_10367__$1;(statearr_10375_10426[(1)] = (5));
} else
{var statearr_10376_10427 = state_10367__$1;(statearr_10376_10427[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (15)))
{var inst_10317 = (state_10367[(11)]);var inst_10282 = (state_10367[(7)]);var inst_10334 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10335 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10334,null));var inst_10336 = cljs.core.update_in.call(null,inst_10282,inst_10335,cljs.core.conj,inst_10317);var state_10367__$1 = state_10367;var statearr_10377_10428 = state_10367__$1;(statearr_10377_10428[(2)] = inst_10336);
(statearr_10377_10428[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (21)))
{var inst_10290 = (state_10367[(8)]);var inst_10354 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10290));var inst_10355 = (new Error(inst_10354));var inst_10356 = (function(){throw inst_10355})();var state_10367__$1 = state_10367;var statearr_10378_10429 = state_10367__$1;(statearr_10378_10429[(2)] = inst_10356);
(statearr_10378_10429[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (13)))
{var inst_10349 = (state_10367[(2)]);var state_10367__$1 = state_10367;var statearr_10379_10430 = state_10367__$1;(statearr_10379_10430[(2)] = inst_10349);
(statearr_10379_10430[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (22)))
{var inst_10358 = (state_10367[(2)]);var state_10367__$1 = state_10367;var statearr_10380_10431 = state_10367__$1;(statearr_10380_10431[(2)] = inst_10358);
(statearr_10380_10431[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (6)))
{var inst_10290 = (state_10367[(8)]);var inst_10302 = cljs.core._EQ_.call(null,onView,inst_10290);var state_10367__$1 = state_10367;if(inst_10302)
{var statearr_10381_10432 = state_10367__$1;(statearr_10381_10432[(1)] = (8));
} else
{var statearr_10382_10433 = state_10367__$1;(statearr_10382_10433[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (17)))
{var inst_10282 = (state_10367[(7)]);var state_10367__$1 = state_10367;var statearr_10383_10434 = state_10367__$1;(statearr_10383_10434[(2)] = inst_10282);
(statearr_10383_10434[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (3)))
{var inst_10365 = (state_10367[(2)]);var state_10367__$1 = state_10367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10367__$1,inst_10365);
} else
{if((state_val_10368 === (12)))
{var inst_10304 = (state_10367[(12)]);var inst_10340 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_10304);var state_10367__$1 = state_10367;if(inst_10340)
{var statearr_10384_10435 = state_10367__$1;(statearr_10384_10435[(1)] = (17));
} else
{var statearr_10385_10436 = state_10367__$1;(statearr_10385_10436[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (2)))
{var inst_10285 = [onView,onTick];var inst_10286 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10285,null));var state_10367__$1 = state_10367;return cljs.core.async.ioc_alts_BANG_.call(null,state_10367__$1,(4),inst_10286);
} else
{if((state_val_10368 === (19)))
{var inst_10347 = (state_10367[(2)]);var state_10367__$1 = state_10367;var statearr_10386_10437 = state_10367__$1;(statearr_10386_10437[(2)] = inst_10347);
(statearr_10386_10437[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (11)))
{var inst_10289 = (state_10367[(10)]);var inst_10316 = (state_10367[(13)]);var inst_10290 = (state_10367[(8)]);var inst_10305 = (state_10367[(14)]);var inst_10282 = (state_10367[(7)]);var inst_10288 = (state_10367[(9)]);var inst_10304 = (state_10367[(12)]);var inst_10311 = (function (){var ctx = inst_10282;var partInfo = inst_10305;var v = inst_10289;var pred__10306 = cljs.core._EQ_;var expr__10292 = inst_10290;var vec__10284 = inst_10288;var pred__10291 = cljs.core._EQ_;var params = inst_10305;var ch = inst_10290;var event = inst_10304;var expr__10307 = inst_10304;return ((function (ctx,partInfo,v,pred__10306,expr__10292,vec__10284,pred__10291,params,ch,event,expr__10307,inst_10289,inst_10316,inst_10290,inst_10305,inst_10282,inst_10288,inst_10304,state_val_10368,c__6203__auto___10422,onView,onModel,onTick,mspf){
return (function (p1__9922_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__9922_SHARP_),partInfo.id);
});
;})(ctx,partInfo,v,pred__10306,expr__10292,vec__10284,pred__10291,params,ch,event,expr__10307,inst_10289,inst_10316,inst_10290,inst_10305,inst_10282,inst_10288,inst_10304,state_val_10368,c__6203__auto___10422,onView,onModel,onTick,mspf))
})();var inst_10312 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10313 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10312,null));var inst_10314 = cljs.core.get_in.call(null,inst_10282,inst_10313);var inst_10315 = cljs.core.filter.call(null,inst_10311,inst_10314);var inst_10316__$1 = cljs.core.first.call(null,inst_10315);var inst_10317 = tool.particle.jsobj__GT_particle.call(null,inst_10305);var inst_10318 = cljs.core.some_QMARK_.call(null,inst_10316__$1);var state_10367__$1 = (function (){var statearr_10387 = state_10367;(statearr_10387[(13)] = inst_10316__$1);
(statearr_10387[(11)] = inst_10317);
return statearr_10387;
})();if(inst_10318)
{var statearr_10388_10438 = state_10367__$1;(statearr_10388_10438[(1)] = (14));
} else
{var statearr_10389_10439 = state_10367__$1;(statearr_10389_10439[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (9)))
{var inst_10290 = (state_10367[(8)]);var inst_10351 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_10290);var state_10367__$1 = state_10367;if(inst_10351)
{var statearr_10390_10440 = state_10367__$1;(statearr_10390_10440[(1)] = (20));
} else
{var statearr_10391_10441 = state_10367__$1;(statearr_10391_10441[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (5)))
{var inst_10289 = (state_10367[(10)]);var inst_10282 = (state_10367[(7)]);var inst_10296 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_10297 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10296,null));var inst_10298 = cljs.core.partial.call(null,tool.particle.update,inst_10289);var inst_10299 = cljs.core.update_in.call(null,inst_10282,inst_10297,inst_10298);var inst_10300 = app.main2.draw2D.call(null,inst_10299);var state_10367__$1 = state_10367;var statearr_10392_10442 = state_10367__$1;(statearr_10392_10442[(2)] = inst_10300);
(statearr_10392_10442[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (14)))
{var inst_10316 = (state_10367[(13)]);var inst_10317 = (state_10367[(11)]);var inst_10282 = (state_10367[(7)]);var inst_10320 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10321 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10320,null));var inst_10322 = [inst_10316];var inst_10323 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_10324 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_10316);var inst_10325 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_10316);var inst_10326 = [inst_10324,inst_10325];var inst_10327 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10323,inst_10326);var inst_10328 = cljs.core.merge.call(null,inst_10317,inst_10327);var inst_10329 = [inst_10328];var inst_10330 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10322,inst_10329);var inst_10331 = cljs.core.partial.call(null,cljs.core.replace,inst_10330);var inst_10332 = cljs.core.update_in.call(null,inst_10282,inst_10321,inst_10331);var state_10367__$1 = state_10367;var statearr_10393_10443 = state_10367__$1;(statearr_10393_10443[(2)] = inst_10332);
(statearr_10393_10443[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (16)))
{var inst_10338 = (state_10367[(2)]);var state_10367__$1 = state_10367;var statearr_10394_10444 = state_10367__$1;(statearr_10394_10444[(2)] = inst_10338);
(statearr_10394_10444[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (10)))
{var inst_10360 = (state_10367[(2)]);var state_10367__$1 = state_10367;var statearr_10395_10445 = state_10367__$1;(statearr_10395_10445[(2)] = inst_10360);
(statearr_10395_10445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (18)))
{var inst_10304 = (state_10367[(12)]);var inst_10343 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10304));var inst_10344 = (new Error(inst_10343));var inst_10345 = (function(){throw inst_10344})();var state_10367__$1 = state_10367;var statearr_10396_10446 = state_10367__$1;(statearr_10396_10446[(2)] = inst_10345);
(statearr_10396_10446[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10368 === (8)))
{var inst_10289 = (state_10367[(10)]);var inst_10304 = (state_10367[(12)]);var inst_10304__$1 = (inst_10289[(0)]);var inst_10305 = (inst_10289[(1)]);var inst_10309 = cljs.core._EQ_.call(null,"edit-particle",inst_10304__$1);var state_10367__$1 = (function (){var statearr_10397 = state_10367;(statearr_10397[(14)] = inst_10305);
(statearr_10397[(12)] = inst_10304__$1);
return statearr_10397;
})();if(inst_10309)
{var statearr_10398_10447 = state_10367__$1;(statearr_10398_10447[(1)] = (11));
} else
{var statearr_10399_10448 = state_10367__$1;(statearr_10399_10448[(1)] = (12));
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
});})(c__6203__auto___10422,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___10422,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10403[(0)] = state_machine__6189__auto__);
(statearr_10403[(1)] = (1));
return statearr_10403;
});
var state_machine__6189__auto____1 = (function (state_10367){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10404){if((e10404 instanceof Object))
{var ex__6192__auto__ = e10404;var statearr_10405_10449 = state_10367;(statearr_10405_10449[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10367);
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
var G__10450 = state_10367;
state_10367 = G__10450;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10367){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10422,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_10406 = f__6204__auto__.call(null);(statearr_10406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10422);
return statearr_10406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10422,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
