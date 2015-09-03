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
app.main.draw = (function draw(canvas,p__37590){var map__37607 = p__37590;var map__37607__$1 = ((cljs.core.seq_QMARK_.call(null,map__37607))?cljs.core.apply.call(null,cljs.core.hash_map,map__37607):map__37607);var ctx = map__37607__$1;var ps = cljs.core.get.call(null,map__37607__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_37623 = (canvas[(0)]);var canvas_ctx_37624 = canvas_dom_37623.getContext("2d");var G__37608_37625 = canvas_ctx_37624;(G__37608_37625["fillStyle"] = "white");
G__37608_37625.fillRect((0),(0),canvas_dom_37623.width,canvas_dom_37623.height);
(G__37608_37625["fillStyle"] = "red");
G__37608_37625.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__37609_37626 = cljs.core.seq.call(null,ps);var chunk__37610_37627 = null;var count__37611_37628 = (0);var i__37612_37629 = (0);while(true){
if((i__37612_37629 < count__37611_37628))
{var map__37613_37630 = cljs.core._nth.call(null,chunk__37610_37627,i__37612_37629);var map__37613_37631__$1 = ((cljs.core.seq_QMARK_.call(null,map__37613_37630))?cljs.core.apply.call(null,cljs.core.hash_map,map__37613_37630):map__37613_37630);var p_37632 = map__37613_37631__$1;var vec__37614_37633 = cljs.core.get.call(null,map__37613_37631__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_37634 = cljs.core.nth.call(null,vec__37614_37633,(0),null);var y_37635 = cljs.core.nth.call(null,vec__37614_37633,(1),null);var r_37636 = cljs.core.nth.call(null,vec__37614_37633,(2),null);var vec__37615_37637 = cljs.core.get.call(null,map__37613_37631__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_37638 = cljs.core.nth.call(null,vec__37615_37637,(0),null);var ys_37639 = cljs.core.nth.call(null,vec__37615_37637,(1),null);var vec__37616_37640 = cljs.core.get.call(null,map__37613_37631__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_37641__$1 = cljs.core.nth.call(null,vec__37616_37640,(0),null);var g_37642 = cljs.core.nth.call(null,vec__37616_37640,(1),null);var b_37643 = cljs.core.nth.call(null,vec__37616_37640,(2),null);var a_37644 = cljs.core.nth.call(null,vec__37616_37640,(3),null);var G__37617_37645 = canvas_ctx_37624;(G__37617_37645["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_37641__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_37642 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_37643 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_37644)+")"));
G__37617_37645.fillRect(x_37634,y_37635,xs_37638,ys_37639);
{
var G__37646 = seq__37609_37626;
var G__37647 = chunk__37610_37627;
var G__37648 = count__37611_37628;
var G__37649 = (i__37612_37629 + (1));
seq__37609_37626 = G__37646;
chunk__37610_37627 = G__37647;
count__37611_37628 = G__37648;
i__37612_37629 = G__37649;
continue;
}
} else
{var temp__4126__auto___37650 = cljs.core.seq.call(null,seq__37609_37626);if(temp__4126__auto___37650)
{var seq__37609_37651__$1 = temp__4126__auto___37650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37609_37651__$1))
{var c__4307__auto___37652 = cljs.core.chunk_first.call(null,seq__37609_37651__$1);{
var G__37653 = cljs.core.chunk_rest.call(null,seq__37609_37651__$1);
var G__37654 = c__4307__auto___37652;
var G__37655 = cljs.core.count.call(null,c__4307__auto___37652);
var G__37656 = (0);
seq__37609_37626 = G__37653;
chunk__37610_37627 = G__37654;
count__37611_37628 = G__37655;
i__37612_37629 = G__37656;
continue;
}
} else
{var map__37618_37657 = cljs.core.first.call(null,seq__37609_37651__$1);var map__37618_37658__$1 = ((cljs.core.seq_QMARK_.call(null,map__37618_37657))?cljs.core.apply.call(null,cljs.core.hash_map,map__37618_37657):map__37618_37657);var p_37659 = map__37618_37658__$1;var vec__37619_37660 = cljs.core.get.call(null,map__37618_37658__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_37661 = cljs.core.nth.call(null,vec__37619_37660,(0),null);var y_37662 = cljs.core.nth.call(null,vec__37619_37660,(1),null);var r_37663 = cljs.core.nth.call(null,vec__37619_37660,(2),null);var vec__37620_37664 = cljs.core.get.call(null,map__37618_37658__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_37665 = cljs.core.nth.call(null,vec__37620_37664,(0),null);var ys_37666 = cljs.core.nth.call(null,vec__37620_37664,(1),null);var vec__37621_37667 = cljs.core.get.call(null,map__37618_37658__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_37668__$1 = cljs.core.nth.call(null,vec__37621_37667,(0),null);var g_37669 = cljs.core.nth.call(null,vec__37621_37667,(1),null);var b_37670 = cljs.core.nth.call(null,vec__37621_37667,(2),null);var a_37671 = cljs.core.nth.call(null,vec__37621_37667,(3),null);var G__37622_37672 = canvas_ctx_37624;(G__37622_37672["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_37668__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_37669 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_37670 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_37671)+")"));
G__37622_37672.fillRect(x_37661,y_37662,xs_37665,ys_37666);
{
var G__37673 = cljs.core.next.call(null,seq__37609_37651__$1);
var G__37674 = null;
var G__37675 = (0);
var G__37676 = (0);
seq__37609_37626 = G__37673;
chunk__37610_37627 = G__37674;
count__37611_37628 = G__37675;
i__37612_37629 = G__37676;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj37704 = {};return obj37704;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__37702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__37702,(0),null);var ch = cljs.core.nth.call(null,vec__37702,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__37702,cw,ch){
return (function (p__37705){var map__37706 = p__37705;var map__37706__$1 = ((cljs.core.seq_QMARK_.call(null,map__37706))?cljs.core.apply.call(null,cljs.core.hash_map,map__37706):map__37706);var ctx = map__37706__$1;var timer = cljs.core.get.call(null,map__37706__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__37706__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__37706,map__37706__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__37702,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__37706,map__37706__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__37702,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
var temp__4130__auto___37727 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___37727 == null))
{} else
{var faceImg_37728 = temp__4130__auto___37727;var tex_37729 = app.main.cacheTex.call(null,gl__$1,faceImg_37728);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_37729,faceImg_37728,temp__4130__auto___37727,map__37706,map__37706__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__37702,cw,ch){
return (function (pobj){var seq__37707 = cljs.core.seq.call(null,ps);var chunk__37708 = null;var count__37709 = (0);var i__37710 = (0);while(true){
if((i__37710 < count__37709))
{var map__37711 = cljs.core._nth.call(null,chunk__37708,i__37710);var map__37711__$1 = ((cljs.core.seq_QMARK_.call(null,map__37711))?cljs.core.apply.call(null,cljs.core.hash_map,map__37711):map__37711);var p = map__37711__$1;var vec__37712 = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__37712,(0),null);var y = cljs.core.nth.call(null,vec__37712,(1),null);var rot = cljs.core.nth.call(null,vec__37712,(2),null);var vec__37713 = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__37713,(0),null);var ys = cljs.core.nth.call(null,vec__37713,(1),null);var vec__37714 = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__37714,(0),null);var g = cljs.core.nth.call(null,vec__37714,(1),null);var b = cljs.core.nth.call(null,vec__37714,(2),null);var a = cljs.core.nth.call(null,vec__37714,(3),null);var proj_37730 = (function (){var G__37715 = (new THREE.Matrix4());G__37715.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__37715;
})();var tras_37731 = (function (){var G__37716 = (new THREE.Matrix4());G__37716.makeTranslation(x,y,(0));
G__37716.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__37716.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__37716;
})();var texTx_37732 = (function (){var G__37717 = (new THREE.Matrix3());return G__37717;
})();var colorTx_37733 = (function (){var G__37718 = (new THREE.Matrix4());G__37718.makeTranslation(r,g,b);
return G__37718;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_37730.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_37731.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_37729,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_37732.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_37733.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__37734 = seq__37707;
var G__37735 = chunk__37708;
var G__37736 = count__37709;
var G__37737 = (i__37710 + (1));
seq__37707 = G__37734;
chunk__37708 = G__37735;
count__37709 = G__37736;
i__37710 = G__37737;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37707);if(temp__4126__auto__)
{var seq__37707__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37707__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__37707__$1);{
var G__37738 = cljs.core.chunk_rest.call(null,seq__37707__$1);
var G__37739 = c__4307__auto__;
var G__37740 = cljs.core.count.call(null,c__4307__auto__);
var G__37741 = (0);
seq__37707 = G__37738;
chunk__37708 = G__37739;
count__37709 = G__37740;
i__37710 = G__37741;
continue;
}
} else
{var map__37719 = cljs.core.first.call(null,seq__37707__$1);var map__37719__$1 = ((cljs.core.seq_QMARK_.call(null,map__37719))?cljs.core.apply.call(null,cljs.core.hash_map,map__37719):map__37719);var p = map__37719__$1;var vec__37720 = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__37720,(0),null);var y = cljs.core.nth.call(null,vec__37720,(1),null);var rot = cljs.core.nth.call(null,vec__37720,(2),null);var vec__37721 = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__37721,(0),null);var ys = cljs.core.nth.call(null,vec__37721,(1),null);var vec__37722 = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__37722,(0),null);var g = cljs.core.nth.call(null,vec__37722,(1),null);var b = cljs.core.nth.call(null,vec__37722,(2),null);var a = cljs.core.nth.call(null,vec__37722,(3),null);var proj_37742 = (function (){var G__37723 = (new THREE.Matrix4());G__37723.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__37723;
})();var tras_37743 = (function (){var G__37724 = (new THREE.Matrix4());G__37724.makeTranslation(x,y,(0));
G__37724.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__37724.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__37724;
})();var texTx_37744 = (function (){var G__37725 = (new THREE.Matrix3());return G__37725;
})();var colorTx_37745 = (function (){var G__37726 = (new THREE.Matrix4());G__37726.makeTranslation(r,g,b);
return G__37726;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_37742.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_37743.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_37729,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_37744.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_37745.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__37746 = cljs.core.next.call(null,seq__37707__$1);
var G__37747 = null;
var G__37748 = (0);
var G__37749 = (0);
seq__37707 = G__37746;
chunk__37708 = G__37747;
count__37709 = G__37748;
i__37710 = G__37749;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_37729,faceImg_37728,temp__4130__auto___37727,map__37706,map__37706__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__37702,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__37702,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6202__auto___38140 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___38140){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___38140){
return (function (state_38091){var state_val_38092 = (state_38091[(1)]);if((state_val_38092 === (7)))
{var inst_38086 = (state_38091[(2)]);var inst_38052 = inst_38086;var state_38091__$1 = (function (){var statearr_38093 = state_38091;(statearr_38093[(7)] = inst_38052);
return statearr_38093;
})();var statearr_38094_38141 = state_38091__$1;(statearr_38094_38141[(2)] = null);
(statearr_38094_38141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (1)))
{var inst_37945 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_37946 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_37947 = [(250),(250),(0)];var inst_37948 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37947,null));var inst_37949 = [(0),(0),(0)];var inst_37950 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37949,null));var inst_37951 = [(0),(0)];var inst_37952 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37951,null));var inst_37953 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_37954 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_37955 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_37956 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_37957 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_37958 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_37959 = [0.5];var inst_37960 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37958,inst_37959);var inst_37961 = [inst_37960];var inst_37962 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37961,null));var inst_37963 = [(1),0.9,(1000),inst_37962];var inst_37964 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37957,inst_37963);var inst_37965 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_37966 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37965,null));var inst_37967 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,state_val_38092,c__6202__auto___38140){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,state_val_38092,c__6202__auto___38140))
})();var inst_37968 = [inst_37966,inst_37967];var inst_37969 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37968,null));var inst_37970 = [inst_37969];var inst_37971 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37970,null));var inst_37972 = [(1),inst_37964,inst_37971];var inst_37973 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37956,inst_37972);var inst_37974 = [inst_37973];var inst_37975 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37974,null));var inst_37976 = [(1),0.1,inst_37975];var inst_37977 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37955,inst_37976);var inst_37978 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_37979 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37978,null));var inst_37980 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,state_val_38092,c__6202__auto___38140){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,state_val_38092,c__6202__auto___38140))
})();var inst_37981 = [inst_37979,inst_37980];var inst_37982 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37981,null));var inst_37983 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_37984 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37983,null));var inst_37985 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,state_val_38092,c__6202__auto___38140){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,state_val_38092,c__6202__auto___38140))
})();var inst_37986 = [inst_37984,inst_37985];var inst_37987 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37986,null));var inst_37988 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_37989 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37988,null));var inst_37990 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,state_val_38092,c__6202__auto___38140){
return (function (life,v){return v;
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,state_val_38092,c__6202__auto___38140))
})();var inst_37991 = [inst_37989,inst_37990];var inst_37992 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37991,null));var inst_37993 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_37994 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37993,null));var inst_37995 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,state_val_38092,c__6202__auto___38140){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,state_val_38092,c__6202__auto___38140))
})();var inst_37996 = [inst_37994,inst_37995];var inst_37997 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37996,null));var inst_37998 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_37999 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37998,null));var inst_38000 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,state_val_38092,c__6202__auto___38140){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,state_val_38092,c__6202__auto___38140))
})();var inst_38001 = [inst_37999,inst_38000];var inst_38002 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38001,null));var inst_38003 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_38004 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38003,null));var inst_38005 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,state_val_38092,c__6202__auto___38140){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,state_val_38092,c__6202__auto___38140))
})();var inst_38006 = [inst_38004,inst_38005];var inst_38007 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38006,null));var inst_38008 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_38009 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38008,null));var inst_38010 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,state_val_38092,c__6202__auto___38140){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,state_val_38092,c__6202__auto___38140))
})();var inst_38011 = [inst_38009,inst_38010];var inst_38012 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38011,null));var inst_38013 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_38014 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38013,null));var inst_38015 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,state_val_38092,c__6202__auto___38140){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,state_val_38092,c__6202__auto___38140))
})();var inst_38016 = [inst_38014,inst_38015];var inst_38017 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38016,null));var inst_38018 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_38019 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38018,null));var inst_38020 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,state_val_38092,c__6202__auto___38140){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,state_val_38092,c__6202__auto___38140))
})();var inst_38021 = [inst_38019,inst_38020];var inst_38022 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38021,null));var inst_38023 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_38024 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38023,null));var inst_38025 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,inst_38020,inst_38021,inst_38022,inst_38023,inst_38024,state_val_38092,c__6202__auto___38140){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,inst_38020,inst_38021,inst_38022,inst_38023,inst_38024,state_val_38092,c__6202__auto___38140))
})();var inst_38026 = [inst_38024,inst_38025];var inst_38027 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38026,null));var inst_38028 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_38029 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38028,null));var inst_38030 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,inst_38020,inst_38021,inst_38022,inst_38023,inst_38024,inst_38025,inst_38026,inst_38027,inst_38028,inst_38029,state_val_38092,c__6202__auto___38140){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,inst_38020,inst_38021,inst_38022,inst_38023,inst_38024,inst_38025,inst_38026,inst_38027,inst_38028,inst_38029,state_val_38092,c__6202__auto___38140))
})();var inst_38031 = [inst_38029,inst_38030];var inst_38032 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38031,null));var inst_38033 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_38034 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38033,null));var inst_38035 = (function (){return ((function (inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,inst_38020,inst_38021,inst_38022,inst_38023,inst_38024,inst_38025,inst_38026,inst_38027,inst_38028,inst_38029,inst_38030,inst_38031,inst_38032,inst_38033,inst_38034,state_val_38092,c__6202__auto___38140){
return (function (life,v){return life;
});
;})(inst_37945,inst_37946,inst_37947,inst_37948,inst_37949,inst_37950,inst_37951,inst_37952,inst_37953,inst_37954,inst_37955,inst_37956,inst_37957,inst_37958,inst_37959,inst_37960,inst_37961,inst_37962,inst_37963,inst_37964,inst_37965,inst_37966,inst_37967,inst_37968,inst_37969,inst_37970,inst_37971,inst_37972,inst_37973,inst_37974,inst_37975,inst_37976,inst_37977,inst_37978,inst_37979,inst_37980,inst_37981,inst_37982,inst_37983,inst_37984,inst_37985,inst_37986,inst_37987,inst_37988,inst_37989,inst_37990,inst_37991,inst_37992,inst_37993,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,inst_38020,inst_38021,inst_38022,inst_38023,inst_38024,inst_38025,inst_38026,inst_38027,inst_38028,inst_38029,inst_38030,inst_38031,inst_38032,inst_38033,inst_38034,state_val_38092,c__6202__auto___38140))
})();var inst_38036 = [inst_38034,inst_38035];var inst_38037 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38036,null));var inst_38038 = [inst_37982,inst_37987,inst_37992,inst_37997,inst_38002,inst_38007,inst_38012,inst_38017,inst_38022,inst_38027,inst_38032,inst_38037];var inst_38039 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38038,null));var inst_38040 = [(2),inst_37977,inst_38039];var inst_38041 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37954,inst_38040);var inst_38042 = [inst_38041];var inst_38043 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38042,null));var inst_38044 = [(1),0.1,-1.57,1.57,(50),inst_38043];var inst_38045 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37953,inst_38044);var inst_38046 = [(-1),inst_37948,inst_37950,inst_37952,inst_38045];var inst_38047 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37946,inst_38046);var inst_38048 = tool.particle.particle.call(null,inst_38047);var inst_38049 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_38048);var inst_38050 = [(0),inst_38049];var inst_38051 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_37945,inst_38050);var inst_38052 = inst_38051;var state_38091__$1 = (function (){var statearr_38095 = state_38091;(statearr_38095[(7)] = inst_38052);
return statearr_38095;
})();var statearr_38096_38142 = state_38091__$1;(statearr_38096_38142[(2)] = null);
(statearr_38096_38142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (4)))
{var inst_38060 = (state_38091[(8)]);var inst_38058 = (state_38091[(2)]);var inst_38059 = cljs.core.nth.call(null,inst_38058,(0),null);var inst_38060__$1 = cljs.core.nth.call(null,inst_38058,(1),null);var inst_38064 = cljs.core._EQ_.call(null,app.react.onTick,inst_38060__$1);var state_38091__$1 = (function (){var statearr_38097 = state_38091;(statearr_38097[(8)] = inst_38060__$1);
(statearr_38097[(9)] = inst_38059);
return statearr_38097;
})();if(inst_38064)
{var statearr_38098_38143 = state_38091__$1;(statearr_38098_38143[(1)] = (5));
} else
{var statearr_38099_38144 = state_38091__$1;(statearr_38099_38144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (6)))
{var inst_38060 = (state_38091[(8)]);var inst_38074 = cljs.core._EQ_.call(null,app.react.onImage,inst_38060);var state_38091__$1 = state_38091;if(inst_38074)
{var statearr_38100_38145 = state_38091__$1;(statearr_38100_38145[(1)] = (8));
} else
{var statearr_38101_38146 = state_38091__$1;(statearr_38101_38146[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (3)))
{var inst_38089 = (state_38091[(2)]);var state_38091__$1 = state_38091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38091__$1,inst_38089);
} else
{if((state_val_38092 === (2)))
{var inst_38055 = [app.react.onTick,app.react.onImage];var inst_38056 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38055,null));var state_38091__$1 = state_38091;return cljs.core.async.ioc_alts_BANG_.call(null,state_38091__$1,(4),inst_38056);
} else
{if((state_val_38092 === (9)))
{var inst_38052 = (state_38091[(7)]);var state_38091__$1 = state_38091;var statearr_38102_38147 = state_38091__$1;(statearr_38102_38147[(2)] = inst_38052);
(statearr_38102_38147[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (5)))
{var inst_38052 = (state_38091[(7)]);var inst_38059 = (state_38091[(9)]);var inst_38066 = $("#canvas");var inst_38067 = tool.particle.update.call(null,inst_38059,inst_38052);var inst_38068 = app.main.draw.call(null,inst_38066,inst_38067);var inst_38069 = app.main.draw3D.call(null,inst_38068);var inst_38070 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_38071 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38070,null));var inst_38072 = cljs.core.update_in.call(null,inst_38069,inst_38071,cljs.core._PLUS_,inst_38059);var state_38091__$1 = state_38091;var statearr_38103_38148 = state_38091__$1;(statearr_38103_38148[(2)] = inst_38072);
(statearr_38103_38148[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (10)))
{var inst_38084 = (state_38091[(2)]);var state_38091__$1 = state_38091;var statearr_38104_38149 = state_38091__$1;(statearr_38104_38149[(2)] = inst_38084);
(statearr_38104_38149[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38092 === (8)))
{var inst_38052 = (state_38091[(7)]);var inst_38059 = (state_38091[(9)]);var inst_38077 = cljs.core.nth.call(null,inst_38059,(0),null);var inst_38078 = cljs.core.nth.call(null,inst_38059,(1),null);var inst_38079 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_38077];var inst_38080 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38079,null));var inst_38081 = cljs.core.assoc_in.call(null,inst_38052,inst_38080,inst_38078);var state_38091__$1 = state_38091;var statearr_38105_38150 = state_38091__$1;(statearr_38105_38150[(2)] = inst_38081);
(statearr_38105_38150[(1)] = (10));
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
});})(c__6202__auto___38140))
;return ((function (switch__6187__auto__,c__6202__auto___38140){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38109 = [null,null,null,null,null,null,null,null,null,null];(statearr_38109[(0)] = state_machine__6188__auto__);
(statearr_38109[(1)] = (1));
return statearr_38109;
});
var state_machine__6188__auto____1 = (function (state_38091){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38091);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38110){if((e38110 instanceof Object))
{var ex__6191__auto__ = e38110;var statearr_38111_38151 = state_38091;(statearr_38111_38151[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38152 = state_38091;
state_38091 = G__38152;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38091){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___38140))
})();var state__6204__auto__ = (function (){var statearr_38112 = f__6203__auto__.call(null);(statearr_38112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___38140);
return statearr_38112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___38140))
);
var face_38153 = (new Image());face_38153.src = "res/images/m_gr.jpg";
face_38153.onload = ((function (face_38153){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,face_38153){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,face_38153){
return (function (state_38118){var state_val_38119 = (state_38118[(1)]);if((state_val_38119 === (2)))
{var inst_38116 = (state_38118[(2)]);var state_38118__$1 = state_38118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38118__$1,inst_38116);
} else
{if((state_val_38119 === (1)))
{var inst_38113 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_38153];var inst_38114 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38113,null));var state_38118__$1 = state_38118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38118__$1,(2),app.react.onImage,inst_38114);
} else
{return null;
}
}
});})(c__6202__auto__,face_38153))
;return ((function (switch__6187__auto__,c__6202__auto__,face_38153){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38123 = [null,null,null,null,null,null,null];(statearr_38123[(0)] = state_machine__6188__auto__);
(statearr_38123[(1)] = (1));
return statearr_38123;
});
var state_machine__6188__auto____1 = (function (state_38118){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38118);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38124){if((e38124 instanceof Object))
{var ex__6191__auto__ = e38124;var statearr_38125_38154 = state_38118;(statearr_38125_38154[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38118);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38155 = state_38118;
state_38118 = G__38155;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38118){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,face_38153))
})();var state__6204__auto__ = (function (){var statearr_38126 = f__6203__auto__.call(null);(statearr_38126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,face_38153))
);
return c__6202__auto__;
});})(face_38153))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6202__auto___38156 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___38156,curr_time__$1,elapsed,last_time){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___38156,curr_time__$1,elapsed,last_time){
return (function (state_38131){var state_val_38132 = (state_38131[(1)]);if((state_val_38132 === (2)))
{var inst_38129 = (state_38131[(2)]);var state_38131__$1 = state_38131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38131__$1,inst_38129);
} else
{if((state_val_38132 === (1)))
{var inst_38127 = (elapsed / (1000));var state_38131__$1 = state_38131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38131__$1,(2),app.react.onTick,inst_38127);
} else
{return null;
}
}
});})(c__6202__auto___38156,curr_time__$1,elapsed,last_time))
;return ((function (switch__6187__auto__,c__6202__auto___38156,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38136 = [null,null,null,null,null,null,null];(statearr_38136[(0)] = state_machine__6188__auto__);
(statearr_38136[(1)] = (1));
return statearr_38136;
});
var state_machine__6188__auto____1 = (function (state_38131){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38131);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38137){if((e38137 instanceof Object))
{var ex__6191__auto__ = e38137;var statearr_38138_38157 = state_38131;(statearr_38138_38157[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38158 = state_38131;
state_38131 = G__38158;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38131){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___38156,curr_time__$1,elapsed,last_time))
})();var state__6204__auto__ = (function (){var statearr_38139 = f__6203__auto__.call(null);(statearr_38139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___38156);
return statearr_38139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___38156,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
