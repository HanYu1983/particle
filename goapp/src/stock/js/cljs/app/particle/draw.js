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
return (function (p__136649){var map__136650 = p__136649;var map__136650__$1 = ((cljs.core.seq_QMARK_.call(null,map__136650))?cljs.core.apply.call(null,cljs.core.hash_map,map__136650):map__136650);var ctx = map__136650__$1;var map__136651 = cljs.core.get.call(null,map__136650__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__136651__$1 = ((cljs.core.seq_QMARK_.call(null,map__136651))?cljs.core.apply.call(null,cljs.core.hash_map,map__136651):map__136651);var ps = cljs.core.get.call(null,map__136651__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__136652_136667 = canvas_ctx;(G__136652_136667["fillStyle"] = "white");
G__136652_136667.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__136652_136667["fillStyle"] = "red");
G__136652_136667.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__136653_136668 = cljs.core.seq.call(null,ps);var chunk__136654_136669 = null;var count__136655_136670 = (0);var i__136656_136671 = (0);while(true){
if((i__136656_136671 < count__136655_136670))
{var map__136657_136672 = cljs.core._nth.call(null,chunk__136654_136669,i__136656_136671);var map__136657_136673__$1 = ((cljs.core.seq_QMARK_.call(null,map__136657_136672))?cljs.core.apply.call(null,cljs.core.hash_map,map__136657_136672):map__136657_136672);var p_136674 = map__136657_136673__$1;var vec__136658_136675 = cljs.core.get.call(null,map__136657_136673__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_136676 = cljs.core.nth.call(null,vec__136658_136675,(0),null);var y_136677 = cljs.core.nth.call(null,vec__136658_136675,(1),null);var rot_136678 = cljs.core.nth.call(null,vec__136658_136675,(2),null);var vec__136659_136679 = cljs.core.get.call(null,map__136657_136673__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_136680 = cljs.core.nth.call(null,vec__136659_136679,(0),null);var ys_136681 = cljs.core.nth.call(null,vec__136659_136679,(1),null);var vec__136660_136682 = cljs.core.get.call(null,map__136657_136673__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_136683 = cljs.core.nth.call(null,vec__136660_136682,(0),null);var g_136684 = cljs.core.nth.call(null,vec__136660_136682,(1),null);var b_136685 = cljs.core.nth.call(null,vec__136660_136682,(2),null);var a_136686 = cljs.core.nth.call(null,vec__136660_136682,(3),null);var G__136661_136687 = canvas_ctx;G__136661_136687.save();
G__136661_136687.translate(x_136676,y_136677);
G__136661_136687.rotate(rot_136678);
(G__136661_136687["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_136683 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_136684 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_136685 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_136686)+")"));
G__136661_136687.fillRect((- (xs_136680 / (2))),(- (ys_136681 / (2))),xs_136680,ys_136681);
G__136661_136687.restore();
{
var G__136688 = seq__136653_136668;
var G__136689 = chunk__136654_136669;
var G__136690 = count__136655_136670;
var G__136691 = (i__136656_136671 + (1));
seq__136653_136668 = G__136688;
chunk__136654_136669 = G__136689;
count__136655_136670 = G__136690;
i__136656_136671 = G__136691;
continue;
}
} else
{var temp__4126__auto___136692 = cljs.core.seq.call(null,seq__136653_136668);if(temp__4126__auto___136692)
{var seq__136653_136693__$1 = temp__4126__auto___136692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136653_136693__$1))
{var c__4307__auto___136694 = cljs.core.chunk_first.call(null,seq__136653_136693__$1);{
var G__136695 = cljs.core.chunk_rest.call(null,seq__136653_136693__$1);
var G__136696 = c__4307__auto___136694;
var G__136697 = cljs.core.count.call(null,c__4307__auto___136694);
var G__136698 = (0);
seq__136653_136668 = G__136695;
chunk__136654_136669 = G__136696;
count__136655_136670 = G__136697;
i__136656_136671 = G__136698;
continue;
}
} else
{var map__136662_136699 = cljs.core.first.call(null,seq__136653_136693__$1);var map__136662_136700__$1 = ((cljs.core.seq_QMARK_.call(null,map__136662_136699))?cljs.core.apply.call(null,cljs.core.hash_map,map__136662_136699):map__136662_136699);var p_136701 = map__136662_136700__$1;var vec__136663_136702 = cljs.core.get.call(null,map__136662_136700__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_136703 = cljs.core.nth.call(null,vec__136663_136702,(0),null);var y_136704 = cljs.core.nth.call(null,vec__136663_136702,(1),null);var rot_136705 = cljs.core.nth.call(null,vec__136663_136702,(2),null);var vec__136664_136706 = cljs.core.get.call(null,map__136662_136700__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_136707 = cljs.core.nth.call(null,vec__136664_136706,(0),null);var ys_136708 = cljs.core.nth.call(null,vec__136664_136706,(1),null);var vec__136665_136709 = cljs.core.get.call(null,map__136662_136700__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_136710 = cljs.core.nth.call(null,vec__136665_136709,(0),null);var g_136711 = cljs.core.nth.call(null,vec__136665_136709,(1),null);var b_136712 = cljs.core.nth.call(null,vec__136665_136709,(2),null);var a_136713 = cljs.core.nth.call(null,vec__136665_136709,(3),null);var G__136666_136714 = canvas_ctx;G__136666_136714.save();
G__136666_136714.translate(x_136703,y_136704);
G__136666_136714.rotate(rot_136705);
(G__136666_136714["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_136710 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_136711 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_136712 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_136713)+")"));
G__136666_136714.fillRect((- (xs_136707 / (2))),(- (ys_136708 / (2))),xs_136707,ys_136708);
G__136666_136714.restore();
{
var G__136715 = cljs.core.next.call(null,seq__136653_136693__$1);
var G__136716 = null;
var G__136717 = (0);
var G__136718 = (0);
seq__136653_136668 = G__136715;
chunk__136654_136669 = G__136716;
count__136655_136670 = G__136717;
i__136656_136671 = G__136718;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = (canvas[(0)]);var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__136747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__136747,(0),null);var ch = cljs.core.nth.call(null,vec__136747,(1),null);var proj = (function (){var G__136748 = (new THREE.Matrix4());G__136748.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__136748;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__136747,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__136749){var map__136750 = p__136749;var map__136750__$1 = ((cljs.core.seq_QMARK_.call(null,map__136750))?cljs.core.apply.call(null,cljs.core.hash_map,map__136750):map__136750);var ctx = map__136750__$1;var vec__136751 = cljs.core.get.call(null,map__136750__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__136751,(0),null);var cy = cljs.core.nth.call(null,vec__136751,(1),null);var timer = cljs.core.get.call(null,map__136750__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__136752 = cljs.core.get.call(null,map__136750__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__136752__$1 = ((cljs.core.seq_QMARK_.call(null,map__136752))?cljs.core.apply.call(null,cljs.core.hash_map,map__136752):map__136752);var ps = cljs.core.get.call(null,map__136752__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__136750,map__136750__$1,ctx,vec__136751,cx,cy,timer,map__136752,map__136752__$1,ps,canvas_dom,mesh,sprite_shader,vec__136747,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__136753 = cljs.core.seq.call(null,ps);var chunk__136754 = null;var count__136755 = (0);var i__136756 = (0);while(true){
if((i__136756 < count__136755))
{var map__136757 = cljs.core._nth.call(null,chunk__136754,i__136756);var map__136757__$1 = ((cljs.core.seq_QMARK_.call(null,map__136757))?cljs.core.apply.call(null,cljs.core.hash_map,map__136757):map__136757);var p = map__136757__$1;var vec__136758 = cljs.core.get.call(null,map__136757__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__136758,(0),null);var y = cljs.core.nth.call(null,vec__136758,(1),null);var rot = cljs.core.nth.call(null,vec__136758,(2),null);var vec__136759 = cljs.core.get.call(null,map__136757__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__136759,(0),null);var ys = cljs.core.nth.call(null,vec__136759,(1),null);var vec__136760 = cljs.core.get.call(null,map__136757__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__136760,(0),null);var g = cljs.core.nth.call(null,vec__136760,(1),null);var b = cljs.core.nth.call(null,vec__136760,(2),null);var a = cljs.core.nth.call(null,vec__136760,(3),null);var tex = cljs.core.get.call(null,map__136757__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_136775 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__136761_136776 = rotMat;G__136761_136776.makeRotationZ(rot);
var G__136762_136777 = scaleMat;G__136762_136777.makeScale(xs,ys,(1));
var G__136763_136778 = tras;G__136763_136778.makeTranslation((cx + x),(cy + y),(0));
G__136763_136778.multiply(rotMat);
G__136763_136778.multiply(scaleMat);
var G__136764_136779 = colorTx;G__136764_136779.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__136765 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__136765__$1 = (cljs.core.truth_(texObj_136775)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_136775,(0)], null)], null),G__136765):G__136765);return G__136765__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__136780 = seq__136753;
var G__136781 = chunk__136754;
var G__136782 = count__136755;
var G__136783 = (i__136756 + (1));
seq__136753 = G__136780;
chunk__136754 = G__136781;
count__136755 = G__136782;
i__136756 = G__136783;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__136753);if(temp__4126__auto__)
{var seq__136753__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136753__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__136753__$1);{
var G__136784 = cljs.core.chunk_rest.call(null,seq__136753__$1);
var G__136785 = c__4307__auto__;
var G__136786 = cljs.core.count.call(null,c__4307__auto__);
var G__136787 = (0);
seq__136753 = G__136784;
chunk__136754 = G__136785;
count__136755 = G__136786;
i__136756 = G__136787;
continue;
}
} else
{var map__136766 = cljs.core.first.call(null,seq__136753__$1);var map__136766__$1 = ((cljs.core.seq_QMARK_.call(null,map__136766))?cljs.core.apply.call(null,cljs.core.hash_map,map__136766):map__136766);var p = map__136766__$1;var vec__136767 = cljs.core.get.call(null,map__136766__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__136767,(0),null);var y = cljs.core.nth.call(null,vec__136767,(1),null);var rot = cljs.core.nth.call(null,vec__136767,(2),null);var vec__136768 = cljs.core.get.call(null,map__136766__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__136768,(0),null);var ys = cljs.core.nth.call(null,vec__136768,(1),null);var vec__136769 = cljs.core.get.call(null,map__136766__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__136769,(0),null);var g = cljs.core.nth.call(null,vec__136769,(1),null);var b = cljs.core.nth.call(null,vec__136769,(2),null);var a = cljs.core.nth.call(null,vec__136769,(3),null);var tex = cljs.core.get.call(null,map__136766__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var texObj_136788 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__136770_136789 = rotMat;G__136770_136789.makeRotationZ(rot);
var G__136771_136790 = scaleMat;G__136771_136790.makeScale(xs,ys,(1));
var G__136772_136791 = tras;G__136772_136791.makeTranslation((cx + x),(cy + y),(0));
G__136772_136791.multiply(rotMat);
G__136772_136791.multiply(scaleMat);
var G__136773_136792 = colorTx;G__136773_136792.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__136774 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__136774__$1 = (cljs.core.truth_(texObj_136788)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_136788,(0)], null)], null),G__136774):G__136774);return G__136774__$1;
})());
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__136793 = cljs.core.next.call(null,seq__136753__$1);
var G__136794 = null;
var G__136795 = (0);
var G__136796 = (0);
seq__136753 = G__136793;
chunk__136754 = G__136794;
count__136755 = G__136795;
i__136756 = G__136796;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__136750,map__136750__$1,ctx,vec__136751,cx,cy,timer,map__136752,map__136752__$1,ps,canvas_dom,mesh,sprite_shader,vec__136747,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__136747,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
