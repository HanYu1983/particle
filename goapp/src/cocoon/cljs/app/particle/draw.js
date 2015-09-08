// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.draw');
goog.require('cljs.core');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('tool.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('tool.particle');
goog.require('gl.mesh');
goog.require('gl.util');
app.particle.draw.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__40673){var map__40674 = p__40673;var map__40674__$1 = ((cljs.core.seq_QMARK_.call(null,map__40674))?cljs.core.apply.call(null,cljs.core.hash_map,map__40674):map__40674);var ctx = map__40674__$1;var map__40675 = cljs.core.get.call(null,map__40674__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40675__$1 = ((cljs.core.seq_QMARK_.call(null,map__40675))?cljs.core.apply.call(null,cljs.core.hash_map,map__40675):map__40675);var ps = cljs.core.get.call(null,map__40675__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__40676_40691 = canvas_ctx;(G__40676_40691["fillStyle"] = "white");
G__40676_40691.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__40676_40691["fillStyle"] = "red");
G__40676_40691.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__40677_40692 = cljs.core.seq.call(null,ps);var chunk__40678_40693 = null;var count__40679_40694 = (0);var i__40680_40695 = (0);while(true){
if((i__40680_40695 < count__40679_40694))
{var map__40681_40696 = cljs.core._nth.call(null,chunk__40678_40693,i__40680_40695);var map__40681_40697__$1 = ((cljs.core.seq_QMARK_.call(null,map__40681_40696))?cljs.core.apply.call(null,cljs.core.hash_map,map__40681_40696):map__40681_40696);var p_40698 = map__40681_40697__$1;var vec__40682_40699 = cljs.core.get.call(null,map__40681_40697__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40700 = cljs.core.nth.call(null,vec__40682_40699,(0),null);var y_40701 = cljs.core.nth.call(null,vec__40682_40699,(1),null);var rot_40702 = cljs.core.nth.call(null,vec__40682_40699,(2),null);var vec__40683_40703 = cljs.core.get.call(null,map__40681_40697__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40704 = cljs.core.nth.call(null,vec__40683_40703,(0),null);var ys_40705 = cljs.core.nth.call(null,vec__40683_40703,(1),null);var vec__40684_40706 = cljs.core.get.call(null,map__40681_40697__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40707 = cljs.core.nth.call(null,vec__40684_40706,(0),null);var g_40708 = cljs.core.nth.call(null,vec__40684_40706,(1),null);var b_40709 = cljs.core.nth.call(null,vec__40684_40706,(2),null);var a_40710 = cljs.core.nth.call(null,vec__40684_40706,(3),null);var G__40685_40711 = canvas_ctx;G__40685_40711.save();
G__40685_40711.translate(x_40700,y_40701);
G__40685_40711.rotate(rot_40702);
(G__40685_40711["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40707 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40708 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40709 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40710)+")"));
G__40685_40711.fillRect((- (xs_40704 / (2))),(- (ys_40705 / (2))),xs_40704,ys_40705);
G__40685_40711.restore();
{
var G__40712 = seq__40677_40692;
var G__40713 = chunk__40678_40693;
var G__40714 = count__40679_40694;
var G__40715 = (i__40680_40695 + (1));
seq__40677_40692 = G__40712;
chunk__40678_40693 = G__40713;
count__40679_40694 = G__40714;
i__40680_40695 = G__40715;
continue;
}
} else
{var temp__4126__auto___40716 = cljs.core.seq.call(null,seq__40677_40692);if(temp__4126__auto___40716)
{var seq__40677_40717__$1 = temp__4126__auto___40716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40677_40717__$1))
{var c__4307__auto___40718 = cljs.core.chunk_first.call(null,seq__40677_40717__$1);{
var G__40719 = cljs.core.chunk_rest.call(null,seq__40677_40717__$1);
var G__40720 = c__4307__auto___40718;
var G__40721 = cljs.core.count.call(null,c__4307__auto___40718);
var G__40722 = (0);
seq__40677_40692 = G__40719;
chunk__40678_40693 = G__40720;
count__40679_40694 = G__40721;
i__40680_40695 = G__40722;
continue;
}
} else
{var map__40686_40723 = cljs.core.first.call(null,seq__40677_40717__$1);var map__40686_40724__$1 = ((cljs.core.seq_QMARK_.call(null,map__40686_40723))?cljs.core.apply.call(null,cljs.core.hash_map,map__40686_40723):map__40686_40723);var p_40725 = map__40686_40724__$1;var vec__40687_40726 = cljs.core.get.call(null,map__40686_40724__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_40727 = cljs.core.nth.call(null,vec__40687_40726,(0),null);var y_40728 = cljs.core.nth.call(null,vec__40687_40726,(1),null);var rot_40729 = cljs.core.nth.call(null,vec__40687_40726,(2),null);var vec__40688_40730 = cljs.core.get.call(null,map__40686_40724__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_40731 = cljs.core.nth.call(null,vec__40688_40730,(0),null);var ys_40732 = cljs.core.nth.call(null,vec__40688_40730,(1),null);var vec__40689_40733 = cljs.core.get.call(null,map__40686_40724__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_40734 = cljs.core.nth.call(null,vec__40689_40733,(0),null);var g_40735 = cljs.core.nth.call(null,vec__40689_40733,(1),null);var b_40736 = cljs.core.nth.call(null,vec__40689_40733,(2),null);var a_40737 = cljs.core.nth.call(null,vec__40689_40733,(3),null);var G__40690_40738 = canvas_ctx;G__40690_40738.save();
G__40690_40738.translate(x_40727,y_40728);
G__40690_40738.rotate(rot_40729);
(G__40690_40738["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_40734 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_40735 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_40736 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_40737)+")"));
G__40690_40738.fillRect((- (xs_40731 / (2))),(- (ys_40732 / (2))),xs_40731,ys_40732);
G__40690_40738.restore();
{
var G__40739 = cljs.core.next.call(null,seq__40677_40717__$1);
var G__40740 = null;
var G__40741 = (0);
var G__40742 = (0);
seq__40677_40692 = G__40739;
chunk__40678_40693 = G__40740;
count__40679_40694 = G__40741;
i__40680_40695 = G__40742;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__40777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__40777,(0),null);var ch = cljs.core.nth.call(null,vec__40777,(1),null);var proj = (function (){var G__40778 = (new THREE.Matrix4());G__40778.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__40778;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__40777,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__40779){var map__40780 = p__40779;var map__40780__$1 = ((cljs.core.seq_QMARK_.call(null,map__40780))?cljs.core.apply.call(null,cljs.core.hash_map,map__40780):map__40780);var ctx = map__40780__$1;var vec__40781 = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__40781,(0),null);var cy = cljs.core.nth.call(null,vec__40781,(1),null);var timer = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__40782 = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__40782__$1 = ((cljs.core.seq_QMARK_.call(null,map__40782))?cljs.core.apply.call(null,cljs.core.hash_map,map__40782):map__40782);var ps = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__40780,map__40780__$1,ctx,vec__40781,cx,cy,timer,map__40782,map__40782__$1,ps,canvas_dom,mesh,sprite_shader,vec__40777,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__40783 = cljs.core.seq.call(null,ps);var chunk__40784 = null;var count__40785 = (0);var i__40786 = (0);while(true){
if((i__40786 < count__40785))
{var map__40787 = cljs.core._nth.call(null,chunk__40784,i__40786);var map__40787__$1 = ((cljs.core.seq_QMARK_.call(null,map__40787))?cljs.core.apply.call(null,cljs.core.hash_map,map__40787):map__40787);var p = map__40787__$1;var vec__40788 = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40788,(0),null);var y = cljs.core.nth.call(null,vec__40788,(1),null);var rot = cljs.core.nth.call(null,vec__40788,(2),null);var vec__40789 = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40789,(0),null);var ys = cljs.core.nth.call(null,vec__40789,(1),null);var vec__40790 = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40790,(0),null);var g = cljs.core.nth.call(null,vec__40790,(1),null);var b = cljs.core.nth.call(null,vec__40790,(2),null);var a = cljs.core.nth.call(null,vec__40790,(3),null);var tex = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40811 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40791_40812 = rotMat;G__40791_40812.makeRotationZ(rot);
var G__40792_40813 = scaleMat;G__40792_40813.makeScale(xs,ys,(1));
var G__40793_40814 = tras;G__40793_40814.makeTranslation((cx + x),(cy + y),(0));
G__40793_40814.multiply(rotMat);
G__40793_40814.multiply(scaleMat);
var G__40794_40815 = colorTx;G__40794_40815.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40795 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40795__$1 = (cljs.core.truth_(texObj_40811)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40811,(0)], null)], null),G__40795):G__40795);return G__40795__$1;
})());
if(cljs.core.truth_(texObj_40811))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40796_40816 = cljs.core._EQ_;var expr__40797_40817 = blending;if(cljs.core.truth_(pred__40796_40816.call(null,"normal",expr__40797_40817)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40796_40816.call(null,"add",expr__40797_40817)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__40818 = seq__40783;
var G__40819 = chunk__40784;
var G__40820 = count__40785;
var G__40821 = (i__40786 + (1));
seq__40783 = G__40818;
chunk__40784 = G__40819;
count__40785 = G__40820;
i__40786 = G__40821;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40783);if(temp__4126__auto__)
{var seq__40783__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40783__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40783__$1);{
var G__40822 = cljs.core.chunk_rest.call(null,seq__40783__$1);
var G__40823 = c__4307__auto__;
var G__40824 = cljs.core.count.call(null,c__4307__auto__);
var G__40825 = (0);
seq__40783 = G__40822;
chunk__40784 = G__40823;
count__40785 = G__40824;
i__40786 = G__40825;
continue;
}
} else
{var map__40799 = cljs.core.first.call(null,seq__40783__$1);var map__40799__$1 = ((cljs.core.seq_QMARK_.call(null,map__40799))?cljs.core.apply.call(null,cljs.core.hash_map,map__40799):map__40799);var p = map__40799__$1;var vec__40800 = cljs.core.get.call(null,map__40799__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__40800,(0),null);var y = cljs.core.nth.call(null,vec__40800,(1),null);var rot = cljs.core.nth.call(null,vec__40800,(2),null);var vec__40801 = cljs.core.get.call(null,map__40799__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__40801,(0),null);var ys = cljs.core.nth.call(null,vec__40801,(1),null);var vec__40802 = cljs.core.get.call(null,map__40799__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__40802,(0),null);var g = cljs.core.nth.call(null,vec__40802,(1),null);var b = cljs.core.nth.call(null,vec__40802,(2),null);var a = cljs.core.nth.call(null,vec__40802,(3),null);var tex = cljs.core.get.call(null,map__40799__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__40799__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_40826 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__40803_40827 = rotMat;G__40803_40827.makeRotationZ(rot);
var G__40804_40828 = scaleMat;G__40804_40828.makeScale(xs,ys,(1));
var G__40805_40829 = tras;G__40805_40829.makeTranslation((cx + x),(cy + y),(0));
G__40805_40829.multiply(rotMat);
G__40805_40829.multiply(scaleMat);
var G__40806_40830 = colorTx;G__40806_40830.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__40807 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__40807__$1 = (cljs.core.truth_(texObj_40826)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_40826,(0)], null)], null),G__40807):G__40807);return G__40807__$1;
})());
if(cljs.core.truth_(texObj_40826))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__40808_40831 = cljs.core._EQ_;var expr__40809_40832 = blending;if(cljs.core.truth_(pred__40808_40831.call(null,"normal",expr__40809_40832)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__40808_40831.call(null,"add",expr__40809_40832)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else
{gl__$1.disable(gl__$1.BLEND);
}
}
} else
{}
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__40833 = cljs.core.next.call(null,seq__40783__$1);
var G__40834 = null;
var G__40835 = (0);
var G__40836 = (0);
seq__40783 = G__40833;
chunk__40784 = G__40834;
count__40785 = G__40835;
i__40786 = G__40836;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__40780,map__40780__$1,ctx,vec__40781,cx,cy,timer,map__40782,map__40782__$1,ps,canvas_dom,mesh,sprite_shader,vec__40777,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__40777,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
