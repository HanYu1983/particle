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
return (function (p__49724){var map__49725 = p__49724;var map__49725__$1 = ((cljs.core.seq_QMARK_.call(null,map__49725))?cljs.core.apply.call(null,cljs.core.hash_map,map__49725):map__49725);var ctx = map__49725__$1;var map__49726 = cljs.core.get.call(null,map__49725__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__49726__$1 = ((cljs.core.seq_QMARK_.call(null,map__49726))?cljs.core.apply.call(null,cljs.core.hash_map,map__49726):map__49726);var ps = cljs.core.get.call(null,map__49726__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__49727_49742 = canvas_ctx;(G__49727_49742["fillStyle"] = "white");
G__49727_49742.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__49727_49742["fillStyle"] = "red");
G__49727_49742.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__49728_49743 = cljs.core.seq.call(null,ps);var chunk__49729_49744 = null;var count__49730_49745 = (0);var i__49731_49746 = (0);while(true){
if((i__49731_49746 < count__49730_49745))
{var map__49732_49747 = cljs.core._nth.call(null,chunk__49729_49744,i__49731_49746);var map__49732_49748__$1 = ((cljs.core.seq_QMARK_.call(null,map__49732_49747))?cljs.core.apply.call(null,cljs.core.hash_map,map__49732_49747):map__49732_49747);var p_49749 = map__49732_49748__$1;var vec__49733_49750 = cljs.core.get.call(null,map__49732_49748__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_49751 = cljs.core.nth.call(null,vec__49733_49750,(0),null);var y_49752 = cljs.core.nth.call(null,vec__49733_49750,(1),null);var r_49753 = cljs.core.nth.call(null,vec__49733_49750,(2),null);var vec__49734_49754 = cljs.core.get.call(null,map__49732_49748__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_49755 = cljs.core.nth.call(null,vec__49734_49754,(0),null);var ys_49756 = cljs.core.nth.call(null,vec__49734_49754,(1),null);var vec__49735_49757 = cljs.core.get.call(null,map__49732_49748__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_49758__$1 = cljs.core.nth.call(null,vec__49735_49757,(0),null);var g_49759 = cljs.core.nth.call(null,vec__49735_49757,(1),null);var b_49760 = cljs.core.nth.call(null,vec__49735_49757,(2),null);var a_49761 = cljs.core.nth.call(null,vec__49735_49757,(3),null);var G__49736_49762 = canvas_ctx;(G__49736_49762["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_49758__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_49759 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_49760 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_49761)+")"));
G__49736_49762.fillRect(x_49751,y_49752,xs_49755,ys_49756);
{
var G__49763 = seq__49728_49743;
var G__49764 = chunk__49729_49744;
var G__49765 = count__49730_49745;
var G__49766 = (i__49731_49746 + (1));
seq__49728_49743 = G__49763;
chunk__49729_49744 = G__49764;
count__49730_49745 = G__49765;
i__49731_49746 = G__49766;
continue;
}
} else
{var temp__4126__auto___49767 = cljs.core.seq.call(null,seq__49728_49743);if(temp__4126__auto___49767)
{var seq__49728_49768__$1 = temp__4126__auto___49767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49728_49768__$1))
{var c__4307__auto___49769 = cljs.core.chunk_first.call(null,seq__49728_49768__$1);{
var G__49770 = cljs.core.chunk_rest.call(null,seq__49728_49768__$1);
var G__49771 = c__4307__auto___49769;
var G__49772 = cljs.core.count.call(null,c__4307__auto___49769);
var G__49773 = (0);
seq__49728_49743 = G__49770;
chunk__49729_49744 = G__49771;
count__49730_49745 = G__49772;
i__49731_49746 = G__49773;
continue;
}
} else
{var map__49737_49774 = cljs.core.first.call(null,seq__49728_49768__$1);var map__49737_49775__$1 = ((cljs.core.seq_QMARK_.call(null,map__49737_49774))?cljs.core.apply.call(null,cljs.core.hash_map,map__49737_49774):map__49737_49774);var p_49776 = map__49737_49775__$1;var vec__49738_49777 = cljs.core.get.call(null,map__49737_49775__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_49778 = cljs.core.nth.call(null,vec__49738_49777,(0),null);var y_49779 = cljs.core.nth.call(null,vec__49738_49777,(1),null);var r_49780 = cljs.core.nth.call(null,vec__49738_49777,(2),null);var vec__49739_49781 = cljs.core.get.call(null,map__49737_49775__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_49782 = cljs.core.nth.call(null,vec__49739_49781,(0),null);var ys_49783 = cljs.core.nth.call(null,vec__49739_49781,(1),null);var vec__49740_49784 = cljs.core.get.call(null,map__49737_49775__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_49785__$1 = cljs.core.nth.call(null,vec__49740_49784,(0),null);var g_49786 = cljs.core.nth.call(null,vec__49740_49784,(1),null);var b_49787 = cljs.core.nth.call(null,vec__49740_49784,(2),null);var a_49788 = cljs.core.nth.call(null,vec__49740_49784,(3),null);var G__49741_49789 = canvas_ctx;(G__49741_49789["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_49785__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_49786 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_49787 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_49788)+")"));
G__49741_49789.fillRect(x_49778,y_49779,xs_49782,ys_49783);
{
var G__49790 = cljs.core.next.call(null,seq__49728_49768__$1);
var G__49791 = null;
var G__49792 = (0);
var G__49793 = (0);
seq__49728_49743 = G__49790;
chunk__49729_49744 = G__49791;
count__49730_49745 = G__49792;
i__49731_49746 = G__49793;
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
app.main2.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj49822 = {};return obj49822;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__49820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__49820,(0),null);var ch = cljs.core.nth.call(null,vec__49820,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__49820,cw,ch){
return (function (p__49823){var map__49824 = p__49823;var map__49824__$1 = ((cljs.core.seq_QMARK_.call(null,map__49824))?cljs.core.apply.call(null,cljs.core.hash_map,map__49824):map__49824);var ctx = map__49824__$1;var timer = cljs.core.get.call(null,map__49824__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__49825 = cljs.core.get.call(null,map__49824__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__49825__$1 = ((cljs.core.seq_QMARK_.call(null,map__49825))?cljs.core.apply.call(null,cljs.core.hash_map,map__49825):map__49825);var ps = cljs.core.get.call(null,map__49825__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___49846 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___49846 == null))
{} else
{var faceImg_49847 = temp__4130__auto___49846;var tex_49848 = app.main2.cacheTex.call(null,gl__$1,faceImg_49847);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_49848,faceImg_49847,temp__4130__auto___49846,map__49824,map__49824__$1,ctx,timer,map__49825,map__49825__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__49820,cw,ch){
return (function (pobj){var seq__49826 = cljs.core.seq.call(null,ps);var chunk__49827 = null;var count__49828 = (0);var i__49829 = (0);while(true){
if((i__49829 < count__49828))
{var map__49830 = cljs.core._nth.call(null,chunk__49827,i__49829);var map__49830__$1 = ((cljs.core.seq_QMARK_.call(null,map__49830))?cljs.core.apply.call(null,cljs.core.hash_map,map__49830):map__49830);var p = map__49830__$1;var vec__49831 = cljs.core.get.call(null,map__49830__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__49831,(0),null);var y = cljs.core.nth.call(null,vec__49831,(1),null);var rot = cljs.core.nth.call(null,vec__49831,(2),null);var vec__49832 = cljs.core.get.call(null,map__49830__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__49832,(0),null);var ys = cljs.core.nth.call(null,vec__49832,(1),null);var vec__49833 = cljs.core.get.call(null,map__49830__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__49833,(0),null);var g = cljs.core.nth.call(null,vec__49833,(1),null);var b = cljs.core.nth.call(null,vec__49833,(2),null);var a = cljs.core.nth.call(null,vec__49833,(3),null);var proj_49849 = (function (){var G__49834 = (new THREE.Matrix4());G__49834.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__49834;
})();var tras_49850 = (function (){var G__49835 = (new THREE.Matrix4());G__49835.makeTranslation(x,y,(0));
G__49835.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__49835.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__49835;
})();var texTx_49851 = (function (){var G__49836 = (new THREE.Matrix3());return G__49836;
})();var colorTx_49852 = (function (){var G__49837 = (new THREE.Matrix4());G__49837.makeTranslation(r,g,b);
return G__49837;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_49849.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_49850.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_49848,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_49851.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_49852.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__49853 = seq__49826;
var G__49854 = chunk__49827;
var G__49855 = count__49828;
var G__49856 = (i__49829 + (1));
seq__49826 = G__49853;
chunk__49827 = G__49854;
count__49828 = G__49855;
i__49829 = G__49856;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49826);if(temp__4126__auto__)
{var seq__49826__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49826__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49826__$1);{
var G__49857 = cljs.core.chunk_rest.call(null,seq__49826__$1);
var G__49858 = c__4307__auto__;
var G__49859 = cljs.core.count.call(null,c__4307__auto__);
var G__49860 = (0);
seq__49826 = G__49857;
chunk__49827 = G__49858;
count__49828 = G__49859;
i__49829 = G__49860;
continue;
}
} else
{var map__49838 = cljs.core.first.call(null,seq__49826__$1);var map__49838__$1 = ((cljs.core.seq_QMARK_.call(null,map__49838))?cljs.core.apply.call(null,cljs.core.hash_map,map__49838):map__49838);var p = map__49838__$1;var vec__49839 = cljs.core.get.call(null,map__49838__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__49839,(0),null);var y = cljs.core.nth.call(null,vec__49839,(1),null);var rot = cljs.core.nth.call(null,vec__49839,(2),null);var vec__49840 = cljs.core.get.call(null,map__49838__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__49840,(0),null);var ys = cljs.core.nth.call(null,vec__49840,(1),null);var vec__49841 = cljs.core.get.call(null,map__49838__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__49841,(0),null);var g = cljs.core.nth.call(null,vec__49841,(1),null);var b = cljs.core.nth.call(null,vec__49841,(2),null);var a = cljs.core.nth.call(null,vec__49841,(3),null);var proj_49861 = (function (){var G__49842 = (new THREE.Matrix4());G__49842.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__49842;
})();var tras_49862 = (function (){var G__49843 = (new THREE.Matrix4());G__49843.makeTranslation(x,y,(0));
G__49843.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__49843.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__49843;
})();var texTx_49863 = (function (){var G__49844 = (new THREE.Matrix3());return G__49844;
})();var colorTx_49864 = (function (){var G__49845 = (new THREE.Matrix4());G__49845.makeTranslation(r,g,b);
return G__49845;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_49861.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_49862.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_49848,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_49863.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_49864.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__49865 = cljs.core.next.call(null,seq__49826__$1);
var G__49866 = null;
var G__49867 = (0);
var G__49868 = (0);
seq__49826 = G__49865;
chunk__49827 = G__49866;
count__49828 = G__49867;
i__49829 = G__49868;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_49848,faceImg_49847,temp__4130__auto___49846,map__49824,map__49824__$1,ctx,timer,map__49825,map__49825__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__49820,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__49820,cw,ch))
});
app.main2.draw2D = app.main2.draw2D.call(null,$("#webgl"));
app.main2.createParticle = (function createParticle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49871){var vec__49872 = p__49871;var k = cljs.core.nth.call(null,vec__49872,(0),null);var v = cljs.core.nth.call(null,vec__49872,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));return app.particle.create.call(null,obj);
});
app.main2.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onTick,mspf){
return (function (state_50100){var state_val_50101 = (state_50100[(1)]);if((state_val_50101 === (2)))
{var inst_50098 = (state_50100[(2)]);var state_50100__$1 = state_50100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50100__$1,inst_50098);
} else
{if((state_val_50101 === (1)))
{var state_50100__$1 = state_50100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50100__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_50105 = [null,null,null,null,null,null,null];(statearr_50105[(0)] = state_machine__6189__auto__);
(statearr_50105[(1)] = (1));
return statearr_50105;
});
var state_machine__6189__auto____1 = (function (state_50100){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_50100);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e50106){if((e50106 instanceof Object))
{var ex__6192__auto__ = e50106;var statearr_50107_50320 = state_50100;(statearr_50107_50320[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50321 = state_50100;
state_50100 = G__50321;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_50100){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_50100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_50108 = f__6204__auto__.call(null);(statearr_50108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_50108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onTick,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6203__auto___50322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___50322,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___50322,onView,onModel,onTick,mspf){
return (function (state_50117){var state_val_50118 = (state_50117[(1)]);if((state_val_50118 === (4)))
{var inst_50111 = (state_50117[(2)]);var inst_50112 = common.onModel.onNext(inst_50111);var state_50117__$1 = (function (){var statearr_50119 = state_50117;(statearr_50119[(7)] = inst_50112);
return statearr_50119;
})();var statearr_50120_50323 = state_50117__$1;(statearr_50120_50323[(2)] = null);
(statearr_50120_50323[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50118 === (3)))
{var inst_50115 = (state_50117[(2)]);var state_50117__$1 = state_50117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50117__$1,inst_50115);
} else
{if((state_val_50118 === (2)))
{var state_50117__$1 = state_50117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50117__$1,(4),onModel);
} else
{if((state_val_50118 === (1)))
{var state_50117__$1 = state_50117;var statearr_50121_50324 = state_50117__$1;(statearr_50121_50324[(2)] = null);
(statearr_50121_50324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___50322,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___50322,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_50125 = [null,null,null,null,null,null,null,null];(statearr_50125[(0)] = state_machine__6189__auto__);
(statearr_50125[(1)] = (1));
return statearr_50125;
});
var state_machine__6189__auto____1 = (function (state_50117){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_50117);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e50126){if((e50126 instanceof Object))
{var ex__6192__auto__ = e50126;var statearr_50127_50325 = state_50117;(statearr_50127_50325[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50326 = state_50117;
state_50117 = G__50326;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_50117){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_50117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___50322,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_50128 = f__6204__auto__.call(null);(statearr_50128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___50322);
return statearr_50128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___50322,onView,onModel,onTick,mspf))
);
var c__6203__auto___50327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___50327,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___50327,onView,onModel,onTick,mspf){
return (function (state_50147){var state_val_50148 = (state_50147[(1)]);if((state_val_50148 === (5)))
{var inst_50131 = (state_50147[(7)]);var inst_50138 = (state_50147[(8)]);var inst_50142 = (state_50147[(2)]);var tmp50149 = inst_50131;var inst_50131__$1 = tmp50149;var inst_50132 = inst_50138;var state_50147__$1 = (function (){var statearr_50150 = state_50147;(statearr_50150[(9)] = inst_50142);
(statearr_50150[(7)] = inst_50131__$1);
(statearr_50150[(10)] = inst_50132);
return statearr_50150;
})();var statearr_50151_50328 = state_50147__$1;(statearr_50151_50328[(2)] = null);
(statearr_50151_50328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (4)))
{var inst_50138 = (state_50147[(8)]);var inst_50132 = (state_50147[(10)]);var inst_50136 = (state_50147[(2)]);var inst_50137 = (new Date());var inst_50138__$1 = inst_50137.getTime();var inst_50139 = (inst_50138__$1 - inst_50132);var inst_50140 = (inst_50139 / (1000));var state_50147__$1 = (function (){var statearr_50152 = state_50147;(statearr_50152[(11)] = inst_50136);
(statearr_50152[(8)] = inst_50138__$1);
return statearr_50152;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50147__$1,(5),onTick,inst_50140);
} else
{if((state_val_50148 === (3)))
{var inst_50145 = (state_50147[(2)]);var state_50147__$1 = state_50147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50147__$1,inst_50145);
} else
{if((state_val_50148 === (2)))
{var inst_50131 = (state_50147[(7)]);var inst_50134 = cljs.core.async.timeout.call(null,inst_50131);var state_50147__$1 = state_50147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50147__$1,(4),inst_50134);
} else
{if((state_val_50148 === (1)))
{var inst_50129 = (new Date());var inst_50130 = inst_50129.getTime();var inst_50131 = mspf;var inst_50132 = inst_50130;var state_50147__$1 = (function (){var statearr_50153 = state_50147;(statearr_50153[(7)] = inst_50131);
(statearr_50153[(10)] = inst_50132);
return statearr_50153;
})();var statearr_50154_50329 = state_50147__$1;(statearr_50154_50329[(2)] = null);
(statearr_50154_50329[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___50327,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___50327,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_50158 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50158[(0)] = state_machine__6189__auto__);
(statearr_50158[(1)] = (1));
return statearr_50158;
});
var state_machine__6189__auto____1 = (function (state_50147){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_50147);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e50159){if((e50159 instanceof Object))
{var ex__6192__auto__ = e50159;var statearr_50160_50330 = state_50147;(statearr_50160_50330[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50331 = state_50147;
state_50147 = G__50331;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_50147){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_50147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___50327,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_50161 = f__6204__auto__.call(null);(statearr_50161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___50327);
return statearr_50161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___50327,onView,onModel,onTick,mspf))
);
var c__6203__auto___50332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___50332,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___50332,onView,onModel,onTick,mspf){
return (function (state_50182){var state_val_50183 = (state_50182[(1)]);if((state_val_50183 === (5)))
{var inst_50180 = (state_50182[(2)]);var state_50182__$1 = state_50182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50182__$1,inst_50180);
} else
{if((state_val_50183 === (4)))
{var inst_50173 = (state_50182[(2)]);var inst_50176 = [(100),(0),(0)];var inst_50177 = {"id":"ceta","vel":inst_50176};var inst_50178 = ["edit-particle",inst_50177];var state_50182__$1 = (function (){var statearr_50184 = state_50182;(statearr_50184[(7)] = inst_50173);
return statearr_50184;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50182__$1,(5),onView,inst_50178);
} else
{if((state_val_50183 === (3)))
{var inst_50170 = (state_50182[(2)]);var inst_50171 = cljs.core.async.timeout.call(null,(1000));var state_50182__$1 = (function (){var statearr_50185 = state_50182;(statearr_50185[(8)] = inst_50170);
return statearr_50185;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50182__$1,(4),inst_50171);
} else
{if((state_val_50183 === (2)))
{var inst_50164 = (state_50182[(2)]);var inst_50167 = {"id":"ceta"};var inst_50168 = ["edit-particle",inst_50167];var state_50182__$1 = (function (){var statearr_50186 = state_50182;(statearr_50186[(9)] = inst_50164);
return statearr_50186;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50182__$1,(3),onView,inst_50168);
} else
{if((state_val_50183 === (1)))
{var inst_50162 = cljs.core.async.timeout.call(null,(1000));var state_50182__$1 = state_50182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50182__$1,(2),inst_50162);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___50332,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___50332,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_50190 = [null,null,null,null,null,null,null,null,null,null];(statearr_50190[(0)] = state_machine__6189__auto__);
(statearr_50190[(1)] = (1));
return statearr_50190;
});
var state_machine__6189__auto____1 = (function (state_50182){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_50182);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e50191){if((e50191 instanceof Object))
{var ex__6192__auto__ = e50191;var statearr_50192_50333 = state_50182;(statearr_50192_50333[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50334 = state_50182;
state_50182 = G__50334;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_50182){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_50182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___50332,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_50193 = f__6204__auto__.call(null);(statearr_50193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___50332);
return statearr_50193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___50332,onView,onModel,onTick,mspf))
);
var c__6203__auto___50335 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___50335,onView,onModel,onTick,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___50335,onView,onModel,onTick,mspf){
return (function (state_50280){var state_val_50281 = (state_50280[(1)]);if((state_val_50281 === (7)))
{var inst_50275 = (state_50280[(2)]);var inst_50201 = inst_50275;var state_50280__$1 = (function (){var statearr_50282 = state_50280;(statearr_50282[(7)] = inst_50201);
return statearr_50282;
})();var statearr_50283_50336 = state_50280__$1;(statearr_50283_50336[(2)] = null);
(statearr_50283_50336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (20)))
{var inst_50201 = (state_50280[(7)]);var state_50280__$1 = state_50280;var statearr_50284_50337 = state_50280__$1;(statearr_50284_50337[(2)] = inst_50201);
(statearr_50284_50337[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (1)))
{var inst_50194 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_50195 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_50196 = cljs.core.List.EMPTY;var inst_50197 = [inst_50196];var inst_50198 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_50195,inst_50197);var inst_50199 = [(0),inst_50198];var inst_50200 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_50194,inst_50199);var inst_50201 = inst_50200;var state_50280__$1 = (function (){var statearr_50285 = state_50280;(statearr_50285[(7)] = inst_50201);
return statearr_50285;
})();var statearr_50286_50338 = state_50280__$1;(statearr_50286_50338[(2)] = null);
(statearr_50286_50338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (4)))
{var inst_50209 = (state_50280[(8)]);var inst_50207 = (state_50280[(9)]);var inst_50207__$1 = (state_50280[(2)]);var inst_50208 = cljs.core.nth.call(null,inst_50207__$1,(0),null);var inst_50209__$1 = cljs.core.nth.call(null,inst_50207__$1,(1),null);var inst_50213 = cljs.core._EQ_.call(null,onTick,inst_50209__$1);var state_50280__$1 = (function (){var statearr_50287 = state_50280;(statearr_50287[(8)] = inst_50209__$1);
(statearr_50287[(10)] = inst_50208);
(statearr_50287[(9)] = inst_50207__$1);
return statearr_50287;
})();if(inst_50213)
{var statearr_50288_50339 = state_50280__$1;(statearr_50288_50339[(1)] = (5));
} else
{var statearr_50289_50340 = state_50280__$1;(statearr_50289_50340[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (15)))
{var inst_50236 = (state_50280[(11)]);var inst_50201 = (state_50280[(7)]);var inst_50247 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_50248 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50247,null));var inst_50249 = cljs.core.update_in.call(null,inst_50201,inst_50248,cljs.core.conj,inst_50236);var state_50280__$1 = state_50280;var statearr_50290_50341 = state_50280__$1;(statearr_50290_50341[(2)] = inst_50249);
(statearr_50290_50341[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (21)))
{var inst_50209 = (state_50280[(8)]);var inst_50267 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50209));var inst_50268 = (new Error(inst_50267));var inst_50269 = (function(){throw inst_50268})();var state_50280__$1 = state_50280;var statearr_50291_50342 = state_50280__$1;(statearr_50291_50342[(2)] = inst_50269);
(statearr_50291_50342[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (13)))
{var inst_50262 = (state_50280[(2)]);var state_50280__$1 = state_50280;var statearr_50292_50343 = state_50280__$1;(statearr_50292_50343[(2)] = inst_50262);
(statearr_50292_50343[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (22)))
{var inst_50271 = (state_50280[(2)]);var state_50280__$1 = state_50280;var statearr_50293_50344 = state_50280__$1;(statearr_50293_50344[(2)] = inst_50271);
(statearr_50293_50344[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (6)))
{var inst_50209 = (state_50280[(8)]);var inst_50221 = cljs.core._EQ_.call(null,onView,inst_50209);var state_50280__$1 = state_50280;if(inst_50221)
{var statearr_50294_50345 = state_50280__$1;(statearr_50294_50345[(1)] = (8));
} else
{var statearr_50295_50346 = state_50280__$1;(statearr_50295_50346[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (17)))
{var inst_50201 = (state_50280[(7)]);var state_50280__$1 = state_50280;var statearr_50296_50347 = state_50280__$1;(statearr_50296_50347[(2)] = inst_50201);
(statearr_50296_50347[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (3)))
{var inst_50278 = (state_50280[(2)]);var state_50280__$1 = state_50280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50280__$1,inst_50278);
} else
{if((state_val_50281 === (12)))
{var inst_50223 = (state_50280[(12)]);var inst_50253 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_50223);var state_50280__$1 = state_50280;if(inst_50253)
{var statearr_50297_50348 = state_50280__$1;(statearr_50297_50348[(1)] = (17));
} else
{var statearr_50298_50349 = state_50280__$1;(statearr_50298_50349[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (2)))
{var inst_50204 = [onView,onTick];var inst_50205 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50204,null));var state_50280__$1 = state_50280;return cljs.core.async.ioc_alts_BANG_.call(null,state_50280__$1,(4),inst_50205);
} else
{if((state_val_50281 === (19)))
{var inst_50260 = (state_50280[(2)]);var state_50280__$1 = state_50280;var statearr_50299_50350 = state_50280__$1;(statearr_50299_50350[(2)] = inst_50260);
(statearr_50299_50350[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (11)))
{var inst_50224 = (state_50280[(13)]);var inst_50209 = (state_50280[(8)]);var inst_50208 = (state_50280[(10)]);var inst_50223 = (state_50280[(12)]);var inst_50201 = (state_50280[(7)]);var inst_50207 = (state_50280[(9)]);var inst_50235 = (state_50280[(14)]);var inst_50230 = (function (){var ctx = inst_50201;var pred__50210 = cljs.core._EQ_;var pred__50225 = cljs.core._EQ_;var partInfo = inst_50224;var v = inst_50208;var params = inst_50224;var vec__50203 = inst_50207;var ch = inst_50209;var expr__50211 = inst_50209;var event = inst_50223;var expr__50226 = inst_50223;return ((function (ctx,pred__50210,pred__50225,partInfo,v,params,vec__50203,ch,expr__50211,event,expr__50226,inst_50224,inst_50209,inst_50208,inst_50223,inst_50201,inst_50207,inst_50235,state_val_50281,c__6203__auto___50335,onView,onModel,onTick,mspf){
return (function (p1__49873_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49873_SHARP_),partInfo.id);
});
;})(ctx,pred__50210,pred__50225,partInfo,v,params,vec__50203,ch,expr__50211,event,expr__50226,inst_50224,inst_50209,inst_50208,inst_50223,inst_50201,inst_50207,inst_50235,state_val_50281,c__6203__auto___50335,onView,onModel,onTick,mspf))
})();var inst_50231 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_50232 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50231,null));var inst_50233 = cljs.core.get_in.call(null,inst_50201,inst_50232);var inst_50234 = cljs.core.filter.call(null,inst_50230,inst_50233);var inst_50235__$1 = cljs.core.first.call(null,inst_50234);var inst_50236 = app.main2.createParticle.call(null,inst_50224);var inst_50237 = cljs.core.some_QMARK_.call(null,inst_50235__$1);var state_50280__$1 = (function (){var statearr_50300 = state_50280;(statearr_50300[(11)] = inst_50236);
(statearr_50300[(14)] = inst_50235__$1);
return statearr_50300;
})();if(inst_50237)
{var statearr_50301_50351 = state_50280__$1;(statearr_50301_50351[(1)] = (14));
} else
{var statearr_50302_50352 = state_50280__$1;(statearr_50302_50352[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (9)))
{var inst_50209 = (state_50280[(8)]);var inst_50264 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_50209);var state_50280__$1 = state_50280;if(inst_50264)
{var statearr_50303_50353 = state_50280__$1;(statearr_50303_50353[(1)] = (20));
} else
{var statearr_50304_50354 = state_50280__$1;(statearr_50304_50354[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (5)))
{var inst_50208 = (state_50280[(10)]);var inst_50201 = (state_50280[(7)]);var inst_50215 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_50216 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50215,null));var inst_50217 = cljs.core.partial.call(null,app.particle.update,inst_50208);var inst_50218 = cljs.core.update_in.call(null,inst_50201,inst_50216,inst_50217);var inst_50219 = app.main2.draw2D.call(null,inst_50218);var state_50280__$1 = state_50280;var statearr_50305_50355 = state_50280__$1;(statearr_50305_50355[(2)] = inst_50219);
(statearr_50305_50355[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (14)))
{var inst_50236 = (state_50280[(11)]);var inst_50201 = (state_50280[(7)]);var inst_50235 = (state_50280[(14)]);var inst_50239 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_50240 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50239,null));var inst_50241 = [inst_50235];var inst_50242 = [inst_50236];var inst_50243 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_50241,inst_50242);var inst_50244 = cljs.core.partial.call(null,cljs.core.replace,inst_50243);var inst_50245 = cljs.core.update_in.call(null,inst_50201,inst_50240,inst_50244);var state_50280__$1 = state_50280;var statearr_50306_50356 = state_50280__$1;(statearr_50306_50356[(2)] = inst_50245);
(statearr_50306_50356[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (16)))
{var inst_50251 = (state_50280[(2)]);var state_50280__$1 = state_50280;var statearr_50307_50357 = state_50280__$1;(statearr_50307_50357[(2)] = inst_50251);
(statearr_50307_50357[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (10)))
{var inst_50273 = (state_50280[(2)]);var state_50280__$1 = state_50280;var statearr_50308_50358 = state_50280__$1;(statearr_50308_50358[(2)] = inst_50273);
(statearr_50308_50358[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (18)))
{var inst_50223 = (state_50280[(12)]);var inst_50256 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50223));var inst_50257 = (new Error(inst_50256));var inst_50258 = (function(){throw inst_50257})();var state_50280__$1 = state_50280;var statearr_50309_50359 = state_50280__$1;(statearr_50309_50359[(2)] = inst_50258);
(statearr_50309_50359[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50281 === (8)))
{var inst_50208 = (state_50280[(10)]);var inst_50223 = (state_50280[(12)]);var inst_50223__$1 = (inst_50208[(0)]);var inst_50224 = (inst_50208[(1)]);var inst_50228 = cljs.core._EQ_.call(null,"edit-particle",inst_50223__$1);var state_50280__$1 = (function (){var statearr_50310 = state_50280;(statearr_50310[(13)] = inst_50224);
(statearr_50310[(12)] = inst_50223__$1);
return statearr_50310;
})();if(inst_50228)
{var statearr_50311_50360 = state_50280__$1;(statearr_50311_50360[(1)] = (11));
} else
{var statearr_50312_50361 = state_50280__$1;(statearr_50312_50361[(1)] = (12));
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
});})(c__6203__auto___50335,onView,onModel,onTick,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___50335,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_50316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50316[(0)] = state_machine__6189__auto__);
(statearr_50316[(1)] = (1));
return statearr_50316;
});
var state_machine__6189__auto____1 = (function (state_50280){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_50280);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e50317){if((e50317 instanceof Object))
{var ex__6192__auto__ = e50317;var statearr_50318_50362 = state_50280;(statearr_50318_50362[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50363 = state_50280;
state_50280 = G__50363;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_50280){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_50280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___50335,onView,onModel,onTick,mspf))
})();var state__6205__auto__ = (function (){var statearr_50319 = f__6204__auto__.call(null);(statearr_50319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___50335);
return statearr_50319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___50335,onView,onModel,onTick,mspf))
);
return null;
});
app.main2.main.call(null);
