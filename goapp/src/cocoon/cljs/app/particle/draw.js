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
return (function (p__66606){var map__66607 = p__66606;var map__66607__$1 = ((cljs.core.seq_QMARK_.call(null,map__66607))?cljs.core.apply.call(null,cljs.core.hash_map,map__66607):map__66607);var ctx = map__66607__$1;var map__66608 = cljs.core.get.call(null,map__66607__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__66608__$1 = ((cljs.core.seq_QMARK_.call(null,map__66608))?cljs.core.apply.call(null,cljs.core.hash_map,map__66608):map__66608);var ps = cljs.core.get.call(null,map__66608__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__66609_66624 = canvas_ctx;(G__66609_66624["fillStyle"] = "white");
G__66609_66624.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__66609_66624["fillStyle"] = "red");
G__66609_66624.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__66610_66625 = cljs.core.seq.call(null,ps);var chunk__66611_66626 = null;var count__66612_66627 = (0);var i__66613_66628 = (0);while(true){
if((i__66613_66628 < count__66612_66627))
{var map__66614_66629 = cljs.core._nth.call(null,chunk__66611_66626,i__66613_66628);var map__66614_66630__$1 = ((cljs.core.seq_QMARK_.call(null,map__66614_66629))?cljs.core.apply.call(null,cljs.core.hash_map,map__66614_66629):map__66614_66629);var p_66631 = map__66614_66630__$1;var vec__66615_66632 = cljs.core.get.call(null,map__66614_66630__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_66633 = cljs.core.nth.call(null,vec__66615_66632,(0),null);var y_66634 = cljs.core.nth.call(null,vec__66615_66632,(1),null);var rot_66635 = cljs.core.nth.call(null,vec__66615_66632,(2),null);var vec__66616_66636 = cljs.core.get.call(null,map__66614_66630__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_66637 = cljs.core.nth.call(null,vec__66616_66636,(0),null);var ys_66638 = cljs.core.nth.call(null,vec__66616_66636,(1),null);var vec__66617_66639 = cljs.core.get.call(null,map__66614_66630__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_66640 = cljs.core.nth.call(null,vec__66617_66639,(0),null);var g_66641 = cljs.core.nth.call(null,vec__66617_66639,(1),null);var b_66642 = cljs.core.nth.call(null,vec__66617_66639,(2),null);var a_66643 = cljs.core.nth.call(null,vec__66617_66639,(3),null);var G__66618_66644 = canvas_ctx;G__66618_66644.save();
G__66618_66644.translate(x_66633,y_66634);
G__66618_66644.rotate(rot_66635);
(G__66618_66644["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_66640 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_66641 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_66642 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_66643)+")"));
G__66618_66644.fillRect((- (xs_66637 / (2))),(- (ys_66638 / (2))),xs_66637,ys_66638);
G__66618_66644.restore();
{
var G__66645 = seq__66610_66625;
var G__66646 = chunk__66611_66626;
var G__66647 = count__66612_66627;
var G__66648 = (i__66613_66628 + (1));
seq__66610_66625 = G__66645;
chunk__66611_66626 = G__66646;
count__66612_66627 = G__66647;
i__66613_66628 = G__66648;
continue;
}
} else
{var temp__4126__auto___66649 = cljs.core.seq.call(null,seq__66610_66625);if(temp__4126__auto___66649)
{var seq__66610_66650__$1 = temp__4126__auto___66649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66610_66650__$1))
{var c__4307__auto___66651 = cljs.core.chunk_first.call(null,seq__66610_66650__$1);{
var G__66652 = cljs.core.chunk_rest.call(null,seq__66610_66650__$1);
var G__66653 = c__4307__auto___66651;
var G__66654 = cljs.core.count.call(null,c__4307__auto___66651);
var G__66655 = (0);
seq__66610_66625 = G__66652;
chunk__66611_66626 = G__66653;
count__66612_66627 = G__66654;
i__66613_66628 = G__66655;
continue;
}
} else
{var map__66619_66656 = cljs.core.first.call(null,seq__66610_66650__$1);var map__66619_66657__$1 = ((cljs.core.seq_QMARK_.call(null,map__66619_66656))?cljs.core.apply.call(null,cljs.core.hash_map,map__66619_66656):map__66619_66656);var p_66658 = map__66619_66657__$1;var vec__66620_66659 = cljs.core.get.call(null,map__66619_66657__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_66660 = cljs.core.nth.call(null,vec__66620_66659,(0),null);var y_66661 = cljs.core.nth.call(null,vec__66620_66659,(1),null);var rot_66662 = cljs.core.nth.call(null,vec__66620_66659,(2),null);var vec__66621_66663 = cljs.core.get.call(null,map__66619_66657__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_66664 = cljs.core.nth.call(null,vec__66621_66663,(0),null);var ys_66665 = cljs.core.nth.call(null,vec__66621_66663,(1),null);var vec__66622_66666 = cljs.core.get.call(null,map__66619_66657__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_66667 = cljs.core.nth.call(null,vec__66622_66666,(0),null);var g_66668 = cljs.core.nth.call(null,vec__66622_66666,(1),null);var b_66669 = cljs.core.nth.call(null,vec__66622_66666,(2),null);var a_66670 = cljs.core.nth.call(null,vec__66622_66666,(3),null);var G__66623_66671 = canvas_ctx;G__66623_66671.save();
G__66623_66671.translate(x_66660,y_66661);
G__66623_66671.rotate(rot_66662);
(G__66623_66671["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_66667 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_66668 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_66669 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_66670)+")"));
G__66623_66671.fillRect((- (xs_66664 / (2))),(- (ys_66665 / (2))),xs_66664,ys_66665);
G__66623_66671.restore();
{
var G__66672 = cljs.core.next.call(null,seq__66610_66650__$1);
var G__66673 = null;
var G__66674 = (0);
var G__66675 = (0);
seq__66610_66625 = G__66672;
chunk__66611_66626 = G__66673;
count__66612_66627 = G__66674;
i__66613_66628 = G__66675;
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
app.particle.draw.draw3D = (function draw3D(canvas,gl__$1){var canvas_dom = canvas;var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__66711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__66711,(0),null);var ch = cljs.core.nth.call(null,vec__66711,(1),null);var proj = (function (){var G__66712 = (new THREE.Matrix4());G__66712.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__66712;
})();var tras = (new THREE.Matrix4());var rotMat = (new THREE.Matrix4());var scaleMat = (new THREE.Matrix4());var texTx = (new THREE.Matrix3());var colorTx = (new THREE.Matrix4());gl__$1.viewport((0),(0),cw,ch);
return ((function (canvas_dom,mesh,sprite_shader,vec__66711,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__66713){var map__66714 = p__66713;var map__66714__$1 = ((cljs.core.seq_QMARK_.call(null,map__66714))?cljs.core.apply.call(null,cljs.core.hash_map,map__66714):map__66714);var ctx = map__66714__$1;var vec__66715 = cljs.core.get.call(null,map__66714__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__66715,(0),null);var cy = cljs.core.nth.call(null,vec__66715,(1),null);var vec__66716 = cljs.core.get.call(null,map__66714__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));var br = cljs.core.nth.call(null,vec__66716,(0),null);var bg = cljs.core.nth.call(null,vec__66716,(1),null);var bb = cljs.core.nth.call(null,vec__66716,(2),null);var map__66717 = cljs.core.get.call(null,map__66714__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__66717__$1 = ((cljs.core.seq_QMARK_.call(null,map__66717))?cljs.core.apply.call(null,cljs.core.hash_map,map__66717):map__66717);var ps = cljs.core.get.call(null,map__66717__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.clearColor((function (){var or__3551__auto__ = br;if(cljs.core.truth_(or__3551__auto__))
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
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__66714,map__66714__$1,ctx,vec__66715,cx,cy,vec__66716,br,bg,bb,map__66717,map__66717__$1,ps,canvas_dom,mesh,sprite_shader,vec__66711,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
var seq__66718 = cljs.core.seq.call(null,ps);var chunk__66719 = null;var count__66720 = (0);var i__66721 = (0);while(true){
if((i__66721 < count__66720))
{var map__66722 = cljs.core._nth.call(null,chunk__66719,i__66721);var map__66722__$1 = ((cljs.core.seq_QMARK_.call(null,map__66722))?cljs.core.apply.call(null,cljs.core.hash_map,map__66722):map__66722);var p = map__66722__$1;var vec__66723 = cljs.core.get.call(null,map__66722__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__66723,(0),null);var y = cljs.core.nth.call(null,vec__66723,(1),null);var rot = cljs.core.nth.call(null,vec__66723,(2),null);var vec__66724 = cljs.core.get.call(null,map__66722__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__66724,(0),null);var ys = cljs.core.nth.call(null,vec__66724,(1),null);var vec__66725 = cljs.core.get.call(null,map__66722__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__66725,(0),null);var g = cljs.core.nth.call(null,vec__66725,(1),null);var b = cljs.core.nth.call(null,vec__66725,(2),null);var a = cljs.core.nth.call(null,vec__66725,(3),null);var tex = cljs.core.get.call(null,map__66722__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__66722__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_66746 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__66726_66747 = rotMat;G__66726_66747.makeRotationZ(rot);
var G__66727_66748 = scaleMat;G__66727_66748.makeScale(xs,ys,(1));
var G__66728_66749 = tras;G__66728_66749.makeTranslation((cx + x),(cy + y),(0));
G__66728_66749.multiply(rotMat);
G__66728_66749.multiply(scaleMat);
var G__66729_66750 = colorTx;G__66729_66750.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__66730 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__66730__$1 = (cljs.core.truth_(texObj_66746)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_66746,(0)], null)], null),G__66730):G__66730);return G__66730__$1;
})());
if(cljs.core.truth_(texObj_66746))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__66731_66751 = cljs.core._EQ_;var expr__66732_66752 = blending;if(cljs.core.truth_(pred__66731_66751.call(null,"normal",expr__66732_66752)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__66731_66751.call(null,"add",expr__66732_66752)))
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
var G__66753 = seq__66718;
var G__66754 = chunk__66719;
var G__66755 = count__66720;
var G__66756 = (i__66721 + (1));
seq__66718 = G__66753;
chunk__66719 = G__66754;
count__66720 = G__66755;
i__66721 = G__66756;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__66718);if(temp__4126__auto__)
{var seq__66718__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66718__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__66718__$1);{
var G__66757 = cljs.core.chunk_rest.call(null,seq__66718__$1);
var G__66758 = c__4307__auto__;
var G__66759 = cljs.core.count.call(null,c__4307__auto__);
var G__66760 = (0);
seq__66718 = G__66757;
chunk__66719 = G__66758;
count__66720 = G__66759;
i__66721 = G__66760;
continue;
}
} else
{var map__66734 = cljs.core.first.call(null,seq__66718__$1);var map__66734__$1 = ((cljs.core.seq_QMARK_.call(null,map__66734))?cljs.core.apply.call(null,cljs.core.hash_map,map__66734):map__66734);var p = map__66734__$1;var vec__66735 = cljs.core.get.call(null,map__66734__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__66735,(0),null);var y = cljs.core.nth.call(null,vec__66735,(1),null);var rot = cljs.core.nth.call(null,vec__66735,(2),null);var vec__66736 = cljs.core.get.call(null,map__66734__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__66736,(0),null);var ys = cljs.core.nth.call(null,vec__66736,(1),null);var vec__66737 = cljs.core.get.call(null,map__66734__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__66737,(0),null);var g = cljs.core.nth.call(null,vec__66737,(1),null);var b = cljs.core.nth.call(null,vec__66737,(2),null);var a = cljs.core.nth.call(null,vec__66737,(3),null);var tex = cljs.core.get.call(null,map__66734__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var blending = cljs.core.get.call(null,map__66734__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var texObj_66761 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));var G__66738_66762 = rotMat;G__66738_66762.makeRotationZ(rot);
var G__66739_66763 = scaleMat;G__66739_66763.makeScale(xs,ys,(1));
var G__66740_66764 = tras;G__66740_66764.makeTranslation((cx + x),(cy + y),(0));
G__66740_66764.multiply(rotMat);
G__66740_66764.multiply(scaleMat);
var G__66741_66765 = colorTx;G__66741_66765.makeTranslation(r,g,b);
cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__66742 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null));var G__66742__$1 = (cljs.core.truth_(texObj_66761)?cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_66761,(0)], null)], null),G__66742):G__66742);return G__66742__$1;
})());
if(cljs.core.truth_(texObj_66761))
{} else
{gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}
if(cljs.core.truth_(blending))
{var pred__66743_66766 = cljs.core._EQ_;var expr__66744_66767 = blending;if(cljs.core.truth_(pred__66743_66766.call(null,"normal",expr__66744_66767)))
{gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else
{if(cljs.core.truth_(pred__66743_66766.call(null,"add",expr__66744_66767)))
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
var G__66768 = cljs.core.next.call(null,seq__66718__$1);
var G__66769 = null;
var G__66770 = (0);
var G__66771 = (0);
seq__66718 = G__66768;
chunk__66719 = G__66769;
count__66720 = G__66770;
i__66721 = G__66771;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__66714,map__66714__$1,ctx,vec__66715,cx,cy,vec__66716,br,bg,bb,map__66717,map__66717__$1,ps,canvas_dom,mesh,sprite_shader,vec__66711,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);
return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__66711,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
