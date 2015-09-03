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
app.particle.draw.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.particle.draw.draw2D = (function draw2D(canvas){var canvas_dom = (canvas[(0)]);var canvas_ctx = canvas_dom.getContext("2d");return ((function (canvas_dom,canvas_ctx){
return (function (p__41596){var map__41597 = p__41596;var map__41597__$1 = ((cljs.core.seq_QMARK_.call(null,map__41597))?cljs.core.apply.call(null,cljs.core.hash_map,map__41597):map__41597);var ctx = map__41597__$1;var map__41598 = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41598__$1 = ((cljs.core.seq_QMARK_.call(null,map__41598))?cljs.core.apply.call(null,cljs.core.hash_map,map__41598):map__41598);var ps = cljs.core.get.call(null,map__41598__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__41599_41614 = canvas_ctx;(G__41599_41614["fillStyle"] = "white");
G__41599_41614.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__41599_41614["fillStyle"] = "red");
G__41599_41614.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__41600_41615 = cljs.core.seq.call(null,ps);var chunk__41601_41616 = null;var count__41602_41617 = (0);var i__41603_41618 = (0);while(true){
if((i__41603_41618 < count__41602_41617))
{var map__41604_41619 = cljs.core._nth.call(null,chunk__41601_41616,i__41603_41618);var map__41604_41620__$1 = ((cljs.core.seq_QMARK_.call(null,map__41604_41619))?cljs.core.apply.call(null,cljs.core.hash_map,map__41604_41619):map__41604_41619);var p_41621 = map__41604_41620__$1;var vec__41605_41622 = cljs.core.get.call(null,map__41604_41620__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41623 = cljs.core.nth.call(null,vec__41605_41622,(0),null);var y_41624 = cljs.core.nth.call(null,vec__41605_41622,(1),null);var rot_41625 = cljs.core.nth.call(null,vec__41605_41622,(2),null);var vec__41606_41626 = cljs.core.get.call(null,map__41604_41620__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41627 = cljs.core.nth.call(null,vec__41606_41626,(0),null);var ys_41628 = cljs.core.nth.call(null,vec__41606_41626,(1),null);var vec__41607_41629 = cljs.core.get.call(null,map__41604_41620__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41630 = cljs.core.nth.call(null,vec__41607_41629,(0),null);var g_41631 = cljs.core.nth.call(null,vec__41607_41629,(1),null);var b_41632 = cljs.core.nth.call(null,vec__41607_41629,(2),null);var a_41633 = cljs.core.nth.call(null,vec__41607_41629,(3),null);var G__41608_41634 = canvas_ctx;G__41608_41634.save();
G__41608_41634.translate(x_41623,y_41624);
G__41608_41634.rotate(rot_41625);
(G__41608_41634["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41630 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41631 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41632 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41633)+")"));
G__41608_41634.fillRect((- (xs_41627 / (2))),(- (ys_41628 / (2))),xs_41627,ys_41628);
G__41608_41634.restore();
{
var G__41635 = seq__41600_41615;
var G__41636 = chunk__41601_41616;
var G__41637 = count__41602_41617;
var G__41638 = (i__41603_41618 + (1));
seq__41600_41615 = G__41635;
chunk__41601_41616 = G__41636;
count__41602_41617 = G__41637;
i__41603_41618 = G__41638;
continue;
}
} else
{var temp__4126__auto___41639 = cljs.core.seq.call(null,seq__41600_41615);if(temp__4126__auto___41639)
{var seq__41600_41640__$1 = temp__4126__auto___41639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41600_41640__$1))
{var c__4307__auto___41641 = cljs.core.chunk_first.call(null,seq__41600_41640__$1);{
var G__41642 = cljs.core.chunk_rest.call(null,seq__41600_41640__$1);
var G__41643 = c__4307__auto___41641;
var G__41644 = cljs.core.count.call(null,c__4307__auto___41641);
var G__41645 = (0);
seq__41600_41615 = G__41642;
chunk__41601_41616 = G__41643;
count__41602_41617 = G__41644;
i__41603_41618 = G__41645;
continue;
}
} else
{var map__41609_41646 = cljs.core.first.call(null,seq__41600_41640__$1);var map__41609_41647__$1 = ((cljs.core.seq_QMARK_.call(null,map__41609_41646))?cljs.core.apply.call(null,cljs.core.hash_map,map__41609_41646):map__41609_41646);var p_41648 = map__41609_41647__$1;var vec__41610_41649 = cljs.core.get.call(null,map__41609_41647__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41650 = cljs.core.nth.call(null,vec__41610_41649,(0),null);var y_41651 = cljs.core.nth.call(null,vec__41610_41649,(1),null);var rot_41652 = cljs.core.nth.call(null,vec__41610_41649,(2),null);var vec__41611_41653 = cljs.core.get.call(null,map__41609_41647__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41654 = cljs.core.nth.call(null,vec__41611_41653,(0),null);var ys_41655 = cljs.core.nth.call(null,vec__41611_41653,(1),null);var vec__41612_41656 = cljs.core.get.call(null,map__41609_41647__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41657 = cljs.core.nth.call(null,vec__41612_41656,(0),null);var g_41658 = cljs.core.nth.call(null,vec__41612_41656,(1),null);var b_41659 = cljs.core.nth.call(null,vec__41612_41656,(2),null);var a_41660 = cljs.core.nth.call(null,vec__41612_41656,(3),null);var G__41613_41661 = canvas_ctx;G__41613_41661.save();
G__41613_41661.translate(x_41650,y_41651);
G__41613_41661.rotate(rot_41652);
(G__41613_41661["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41657 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41658 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41659 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41660)+")"));
G__41613_41661.fillRect((- (xs_41654 / (2))),(- (ys_41655 / (2))),xs_41654,ys_41655);
G__41613_41661.restore();
{
var G__41662 = cljs.core.next.call(null,seq__41600_41640__$1);
var G__41663 = null;
var G__41664 = (0);
var G__41665 = (0);
seq__41600_41615 = G__41662;
chunk__41601_41616 = G__41663;
count__41602_41617 = G__41664;
i__41603_41618 = G__41665;
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
app.particle.draw.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj41695 = {};return obj41695;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__41693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__41693,(0),null);var ch = cljs.core.nth.call(null,vec__41693,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__41693,cw,ch){
return (function (p__41696){var map__41697 = p__41696;var map__41697__$1 = ((cljs.core.seq_QMARK_.call(null,map__41697))?cljs.core.apply.call(null,cljs.core.hash_map,map__41697):map__41697);var ctx = map__41697__$1;var vec__41698 = cljs.core.get.call(null,map__41697__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__41698,(0),null);var cy = cljs.core.nth.call(null,vec__41698,(1),null);var timer = cljs.core.get.call(null,map__41697__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__41699 = cljs.core.get.call(null,map__41697__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41699__$1 = ((cljs.core.seq_QMARK_.call(null,map__41699))?cljs.core.apply.call(null,cljs.core.hash_map,map__41699):map__41699);var ps = cljs.core.get.call(null,map__41699__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__41697,map__41697__$1,ctx,vec__41698,cx,cy,timer,map__41699,map__41699__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__41693,cw,ch){
return (function (pobj){var seq__41700 = cljs.core.seq.call(null,ps);var chunk__41701 = null;var count__41702 = (0);var i__41703 = (0);while(true){
if((i__41703 < count__41702))
{var map__41704 = cljs.core._nth.call(null,chunk__41701,i__41703);var map__41704__$1 = ((cljs.core.seq_QMARK_.call(null,map__41704))?cljs.core.apply.call(null,cljs.core.hash_map,map__41704):map__41704);var p = map__41704__$1;var vec__41705 = cljs.core.get.call(null,map__41704__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41705,(0),null);var y = cljs.core.nth.call(null,vec__41705,(1),null);var rot = cljs.core.nth.call(null,vec__41705,(2),null);var vec__41706 = cljs.core.get.call(null,map__41704__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41706,(0),null);var ys = cljs.core.nth.call(null,vec__41706,(1),null);var vec__41707 = cljs.core.get.call(null,map__41704__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41707,(0),null);var g = cljs.core.nth.call(null,vec__41707,(1),null);var b = cljs.core.nth.call(null,vec__41707,(2),null);var a = cljs.core.nth.call(null,vec__41707,(3),null);var proj_41720 = (function (){var G__41708 = (new THREE.Matrix4());G__41708.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__41708;
})();var tras_41721 = (function (){var G__41709 = (new THREE.Matrix4());G__41709.makeTranslation((cx + x),(cy + y),(0));
G__41709.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__41709.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__41709;
})();var texTx_41722 = (function (){var G__41710 = (new THREE.Matrix3());return G__41710;
})();var colorTx_41723 = (function (){var G__41711 = (new THREE.Matrix4());G__41711.makeTranslation(r,g,b);
return G__41711;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_41720.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_41721.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_41722.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_41723.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__41724 = seq__41700;
var G__41725 = chunk__41701;
var G__41726 = count__41702;
var G__41727 = (i__41703 + (1));
seq__41700 = G__41724;
chunk__41701 = G__41725;
count__41702 = G__41726;
i__41703 = G__41727;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__41700);if(temp__4126__auto__)
{var seq__41700__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41700__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__41700__$1);{
var G__41728 = cljs.core.chunk_rest.call(null,seq__41700__$1);
var G__41729 = c__4307__auto__;
var G__41730 = cljs.core.count.call(null,c__4307__auto__);
var G__41731 = (0);
seq__41700 = G__41728;
chunk__41701 = G__41729;
count__41702 = G__41730;
i__41703 = G__41731;
continue;
}
} else
{var map__41712 = cljs.core.first.call(null,seq__41700__$1);var map__41712__$1 = ((cljs.core.seq_QMARK_.call(null,map__41712))?cljs.core.apply.call(null,cljs.core.hash_map,map__41712):map__41712);var p = map__41712__$1;var vec__41713 = cljs.core.get.call(null,map__41712__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41713,(0),null);var y = cljs.core.nth.call(null,vec__41713,(1),null);var rot = cljs.core.nth.call(null,vec__41713,(2),null);var vec__41714 = cljs.core.get.call(null,map__41712__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41714,(0),null);var ys = cljs.core.nth.call(null,vec__41714,(1),null);var vec__41715 = cljs.core.get.call(null,map__41712__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41715,(0),null);var g = cljs.core.nth.call(null,vec__41715,(1),null);var b = cljs.core.nth.call(null,vec__41715,(2),null);var a = cljs.core.nth.call(null,vec__41715,(3),null);var proj_41732 = (function (){var G__41716 = (new THREE.Matrix4());G__41716.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__41716;
})();var tras_41733 = (function (){var G__41717 = (new THREE.Matrix4());G__41717.makeTranslation((cx + x),(cy + y),(0));
G__41717.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__41717.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__41717;
})();var texTx_41734 = (function (){var G__41718 = (new THREE.Matrix3());return G__41718;
})();var colorTx_41735 = (function (){var G__41719 = (new THREE.Matrix4());G__41719.makeTranslation(r,g,b);
return G__41719;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_41732.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_41733.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_41734.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_41735.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__41736 = cljs.core.next.call(null,seq__41700__$1);
var G__41737 = null;
var G__41738 = (0);
var G__41739 = (0);
seq__41700 = G__41736;
chunk__41701 = G__41737;
count__41702 = G__41738;
i__41703 = G__41739;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__41697,map__41697__$1,ctx,vec__41698,cx,cy,timer,map__41699,map__41699__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__41693,cw,ch))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__41693,cw,ch))
});
