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
return (function (p__10679){var map__10680 = p__10679;var map__10680__$1 = ((cljs.core.seq_QMARK_.call(null,map__10680))?cljs.core.apply.call(null,cljs.core.hash_map,map__10680):map__10680);var ctx = map__10680__$1;var map__10681 = cljs.core.get.call(null,map__10680__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__10681__$1 = ((cljs.core.seq_QMARK_.call(null,map__10681))?cljs.core.apply.call(null,cljs.core.hash_map,map__10681):map__10681);var ps = cljs.core.get.call(null,map__10681__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__10682_10697 = canvas_ctx;(G__10682_10697["fillStyle"] = "white");
G__10682_10697.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__10682_10697["fillStyle"] = "red");
G__10682_10697.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__10683_10698 = cljs.core.seq.call(null,ps);var chunk__10684_10699 = null;var count__10685_10700 = (0);var i__10686_10701 = (0);while(true){
if((i__10686_10701 < count__10685_10700))
{var map__10687_10702 = cljs.core._nth.call(null,chunk__10684_10699,i__10686_10701);var map__10687_10703__$1 = ((cljs.core.seq_QMARK_.call(null,map__10687_10702))?cljs.core.apply.call(null,cljs.core.hash_map,map__10687_10702):map__10687_10702);var p_10704 = map__10687_10703__$1;var vec__10688_10705 = cljs.core.get.call(null,map__10687_10703__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_10706 = cljs.core.nth.call(null,vec__10688_10705,(0),null);var y_10707 = cljs.core.nth.call(null,vec__10688_10705,(1),null);var rot_10708 = cljs.core.nth.call(null,vec__10688_10705,(2),null);var vec__10689_10709 = cljs.core.get.call(null,map__10687_10703__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_10710 = cljs.core.nth.call(null,vec__10689_10709,(0),null);var ys_10711 = cljs.core.nth.call(null,vec__10689_10709,(1),null);var vec__10690_10712 = cljs.core.get.call(null,map__10687_10703__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_10713 = cljs.core.nth.call(null,vec__10690_10712,(0),null);var g_10714 = cljs.core.nth.call(null,vec__10690_10712,(1),null);var b_10715 = cljs.core.nth.call(null,vec__10690_10712,(2),null);var a_10716 = cljs.core.nth.call(null,vec__10690_10712,(3),null);var G__10691_10717 = canvas_ctx;G__10691_10717.save();
G__10691_10717.translate(x_10706,y_10707);
G__10691_10717.rotate(rot_10708);
(G__10691_10717["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_10713 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_10714 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_10715 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_10716)+")"));
G__10691_10717.fillRect((- (xs_10710 / (2))),(- (ys_10711 / (2))),xs_10710,ys_10711);
G__10691_10717.restore();
{
var G__10718 = seq__10683_10698;
var G__10719 = chunk__10684_10699;
var G__10720 = count__10685_10700;
var G__10721 = (i__10686_10701 + (1));
seq__10683_10698 = G__10718;
chunk__10684_10699 = G__10719;
count__10685_10700 = G__10720;
i__10686_10701 = G__10721;
continue;
}
} else
{var temp__4126__auto___10722 = cljs.core.seq.call(null,seq__10683_10698);if(temp__4126__auto___10722)
{var seq__10683_10723__$1 = temp__4126__auto___10722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10683_10723__$1))
{var c__4307__auto___10724 = cljs.core.chunk_first.call(null,seq__10683_10723__$1);{
var G__10725 = cljs.core.chunk_rest.call(null,seq__10683_10723__$1);
var G__10726 = c__4307__auto___10724;
var G__10727 = cljs.core.count.call(null,c__4307__auto___10724);
var G__10728 = (0);
seq__10683_10698 = G__10725;
chunk__10684_10699 = G__10726;
count__10685_10700 = G__10727;
i__10686_10701 = G__10728;
continue;
}
} else
{var map__10692_10729 = cljs.core.first.call(null,seq__10683_10723__$1);var map__10692_10730__$1 = ((cljs.core.seq_QMARK_.call(null,map__10692_10729))?cljs.core.apply.call(null,cljs.core.hash_map,map__10692_10729):map__10692_10729);var p_10731 = map__10692_10730__$1;var vec__10693_10732 = cljs.core.get.call(null,map__10692_10730__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_10733 = cljs.core.nth.call(null,vec__10693_10732,(0),null);var y_10734 = cljs.core.nth.call(null,vec__10693_10732,(1),null);var rot_10735 = cljs.core.nth.call(null,vec__10693_10732,(2),null);var vec__10694_10736 = cljs.core.get.call(null,map__10692_10730__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_10737 = cljs.core.nth.call(null,vec__10694_10736,(0),null);var ys_10738 = cljs.core.nth.call(null,vec__10694_10736,(1),null);var vec__10695_10739 = cljs.core.get.call(null,map__10692_10730__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_10740 = cljs.core.nth.call(null,vec__10695_10739,(0),null);var g_10741 = cljs.core.nth.call(null,vec__10695_10739,(1),null);var b_10742 = cljs.core.nth.call(null,vec__10695_10739,(2),null);var a_10743 = cljs.core.nth.call(null,vec__10695_10739,(3),null);var G__10696_10744 = canvas_ctx;G__10696_10744.save();
G__10696_10744.translate(x_10733,y_10734);
G__10696_10744.rotate(rot_10735);
(G__10696_10744["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_10740 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_10741 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_10742 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_10743)+")"));
G__10696_10744.fillRect((- (xs_10737 / (2))),(- (ys_10738 / (2))),xs_10737,ys_10738);
G__10696_10744.restore();
{
var G__10745 = cljs.core.next.call(null,seq__10683_10723__$1);
var G__10746 = null;
var G__10747 = (0);
var G__10748 = (0);
seq__10683_10698 = G__10745;
chunk__10684_10699 = G__10746;
count__10685_10700 = G__10747;
i__10686_10701 = G__10748;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__10784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__10784,(0),null);var ch = cljs.core.nth.call(null,vec__10784,(1),null);var proj = (function (){var G__10785 = (new THREE.Matrix4());G__10785.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__10785;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__10784,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__10786){var map__10787 = p__10786;var map__10787__$1 = ((cljs.core.seq_QMARK_.call(null,map__10787))?cljs.core.apply.call(null,cljs.core.hash_map,map__10787):map__10787);var ctx = map__10787__$1;var vec__10788 = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__10788,(0),null);var cy = cljs.core.nth.call(null,vec__10788,(1),null);var vec__10789 = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__10789,(0),null);var bg = cljs.core.nth.call(null,vec__10789,(1),null);var bb = cljs.core.nth.call(null,vec__10789,(2),null);var map__10790 = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__10790__$1 = ((cljs.core.seq_QMARK_.call(null,map__10790))?cljs.core.apply.call(null,cljs.core.hash_map,map__10790):map__10790);var ps = cljs.core.get.call(null,map__10790__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(function (){var or__3551__auto__ = bg;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(function (){var or__3551__auto__ = bb;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})(),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__10787,map__10787__$1,ctx,vec__10788,cx,cy,vec__10789,br,bg,bb,map__10790,map__10790__$1,ps,canvas_dom,mesh,sprite_shader,vec__10784,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__10791 = cljs.core.seq.call(null,ps);var chunk__10792 = null;var count__10793 = (0);var i__10794 = (0);while(true){
if((i__10794 < count__10793))
{var map__10795 = cljs.core._nth.call(null,chunk__10792,i__10794);var map__10795__$1 = ((cljs.core.seq_QMARK_.call(null,map__10795))?cljs.core.apply.call(null,cljs.core.hash_map,map__10795):map__10795);var p = map__10795__$1;var vec__10796 = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__10796,(0),null);var y = cljs.core.nth.call(null,vec__10796,(1),null);var rot = cljs.core.nth.call(null,vec__10796,(2),null);var vec__10797 = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__10797,(0),null);var ys = cljs.core.nth.call(null,vec__10797,(1),null);var vec__10798 = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__10798,(0),null);var g = cljs.core.nth.call(null,vec__10798,(1),null);var b = cljs.core.nth.call(null,vec__10798,(2),null);var a = cljs.core.nth.call(null,vec__10798,(3),null);var tex = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_10819 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__10799_10820 = rotMat;G__10799_10820.makeRotationZ(rot);
var G__10800_10821 = scaleMat;G__10800_10821.makeScale(xs,ys,(1));
var G__10801_10822 = tras;G__10801_10822.makeTranslation((cx + x),(cy + y),(0));
G__10801_10822.multiply(rotMat);
G__10801_10822.multiply(scaleMat);
var G__10802_10823 = colorTx;G__10802_10823.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__10803 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__10803__$1 = (cljs.core.truth_(texObj_10819)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_10819,(0)], null)], null),G__10803):G__10803);return G__10803__$1;
})());
if(cljs.core.truth_(texObj_10819))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__10804_10824 = cljs.core._EQ_;var expr__10805_10825 = blending;if(cljs.core.truth_(pred__10804_10824.call(null,"normal",expr__10805_10825)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__10804_10824.call(null,"add",expr__10805_10825)))
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
var G__10826 = seq__10791;
var G__10827 = chunk__10792;
var G__10828 = count__10793;
var G__10829 = (i__10794 + (1));
seq__10791 = G__10826;
chunk__10792 = G__10827;
count__10793 = G__10828;
i__10794 = G__10829;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10791);if(temp__4126__auto__)
{var seq__10791__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10791__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10791__$1);{
var G__10830 = cljs.core.chunk_rest.call(null,seq__10791__$1);
var G__10831 = c__4307__auto__;
var G__10832 = cljs.core.count.call(null,c__4307__auto__);
var G__10833 = (0);
seq__10791 = G__10830;
chunk__10792 = G__10831;
count__10793 = G__10832;
i__10794 = G__10833;
continue;
}
} else
{var map__10807 = cljs.core.first.call(null,seq__10791__$1);var map__10807__$1 = ((cljs.core.seq_QMARK_.call(null,map__10807))?cljs.core.apply.call(null,cljs.core.hash_map,map__10807):map__10807);var p = map__10807__$1;var vec__10808 = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__10808,(0),null);var y = cljs.core.nth.call(null,vec__10808,(1),null);var rot = cljs.core.nth.call(null,vec__10808,(2),null);var vec__10809 = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__10809,(0),null);var ys = cljs.core.nth.call(null,vec__10809,(1),null);var vec__10810 = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__10810,(0),null);var g = cljs.core.nth.call(null,vec__10810,(1),null);var b = cljs.core.nth.call(null,vec__10810,(2),null);var a = cljs.core.nth.call(null,vec__10810,(3),null);var tex = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_10834 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__10811_10835 = rotMat;G__10811_10835.makeRotationZ(rot);
var G__10812_10836 = scaleMat;G__10812_10836.makeScale(xs,ys,(1));
var G__10813_10837 = tras;G__10813_10837.makeTranslation((cx + x),(cy + y),(0));
G__10813_10837.multiply(rotMat);
G__10813_10837.multiply(scaleMat);
var G__10814_10838 = colorTx;G__10814_10838.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__10815 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__10815__$1 = (cljs.core.truth_(texObj_10834)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_10834,(0)], null)], null),G__10815):G__10815);return G__10815__$1;
})());
if(cljs.core.truth_(texObj_10834))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__10816_10839 = cljs.core._EQ_;var expr__10817_10840 = blending;if(cljs.core.truth_(pred__10816_10839.call(null,"normal",expr__10817_10840)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__10816_10839.call(null,"add",expr__10817_10840)))
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
var G__10841 = cljs.core.next.call(null,seq__10791__$1);
var G__10842 = null;
var G__10843 = (0);
var G__10844 = (0);
seq__10791 = G__10841;
chunk__10792 = G__10842;
count__10793 = G__10843;
i__10794 = G__10844;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__10787,map__10787__$1,ctx,vec__10788,cx,cy,vec__10789,br,bg,bb,map__10790,map__10790__$1,ps,canvas_dom,mesh,sprite_shader,vec__10784,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__10784,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
