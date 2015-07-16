// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('app.particle');
goog.require('cljs.core.async');
goog.require('app.react');
goog.require('app.react');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('app.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.mesh');
goog.require('clojure.data');
goog.require('clojure.walk');
goog.require('gl.util');
app.main.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
app.main.draw = (function draw(canvas,p__15578){var map__15595 = p__15578;var map__15595__$1 = ((cljs.core.seq_QMARK_.call(null,map__15595))?cljs.core.apply.call(null,cljs.core.hash_map,map__15595):map__15595);var ctx = map__15595__$1;var ps = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_15611 = (canvas[(0)]);var canvas_ctx_15612 = canvas_dom_15611.getContext("2d");var G__15596_15613 = canvas_ctx_15612;(G__15596_15613["fillStyle"] = "white");
G__15596_15613.fillRect((0),(0),canvas_dom_15611.width,canvas_dom_15611.height);
(G__15596_15613["fillStyle"] = "red");
G__15596_15613.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__15597_15614 = cljs.core.seq.call(null,ps);var chunk__15598_15615 = null;var count__15599_15616 = (0);var i__15600_15617 = (0);while(true){
if((i__15600_15617 < count__15599_15616))
{var map__15601_15618 = cljs.core._nth.call(null,chunk__15598_15615,i__15600_15617);var map__15601_15619__$1 = ((cljs.core.seq_QMARK_.call(null,map__15601_15618))?cljs.core.apply.call(null,cljs.core.hash_map,map__15601_15618):map__15601_15618);var p_15620 = map__15601_15619__$1;var vec__15602_15621 = cljs.core.get.call(null,map__15601_15619__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_15622 = cljs.core.nth.call(null,vec__15602_15621,(0),null);var y_15623 = cljs.core.nth.call(null,vec__15602_15621,(1),null);var r_15624 = cljs.core.nth.call(null,vec__15602_15621,(2),null);var vec__15603_15625 = cljs.core.get.call(null,map__15601_15619__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_15626 = cljs.core.nth.call(null,vec__15603_15625,(0),null);var ys_15627 = cljs.core.nth.call(null,vec__15603_15625,(1),null);var vec__15604_15628 = cljs.core.get.call(null,map__15601_15619__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_15629__$1 = cljs.core.nth.call(null,vec__15604_15628,(0),null);var g_15630 = cljs.core.nth.call(null,vec__15604_15628,(1),null);var b_15631 = cljs.core.nth.call(null,vec__15604_15628,(2),null);var a_15632 = cljs.core.nth.call(null,vec__15604_15628,(3),null);var G__15605_15633 = canvas_ctx_15612;(G__15605_15633["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_15629__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_15630 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_15631 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_15632)+")"));
G__15605_15633.fillRect(x_15622,y_15623,xs_15626,ys_15627);
{
var G__15634 = seq__15597_15614;
var G__15635 = chunk__15598_15615;
var G__15636 = count__15599_15616;
var G__15637 = (i__15600_15617 + (1));
seq__15597_15614 = G__15634;
chunk__15598_15615 = G__15635;
count__15599_15616 = G__15636;
i__15600_15617 = G__15637;
continue;
}
} else
{var temp__4126__auto___15638 = cljs.core.seq.call(null,seq__15597_15614);if(temp__4126__auto___15638)
{var seq__15597_15639__$1 = temp__4126__auto___15638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15597_15639__$1))
{var c__4307__auto___15640 = cljs.core.chunk_first.call(null,seq__15597_15639__$1);{
var G__15641 = cljs.core.chunk_rest.call(null,seq__15597_15639__$1);
var G__15642 = c__4307__auto___15640;
var G__15643 = cljs.core.count.call(null,c__4307__auto___15640);
var G__15644 = (0);
seq__15597_15614 = G__15641;
chunk__15598_15615 = G__15642;
count__15599_15616 = G__15643;
i__15600_15617 = G__15644;
continue;
}
} else
{var map__15606_15645 = cljs.core.first.call(null,seq__15597_15639__$1);var map__15606_15646__$1 = ((cljs.core.seq_QMARK_.call(null,map__15606_15645))?cljs.core.apply.call(null,cljs.core.hash_map,map__15606_15645):map__15606_15645);var p_15647 = map__15606_15646__$1;var vec__15607_15648 = cljs.core.get.call(null,map__15606_15646__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_15649 = cljs.core.nth.call(null,vec__15607_15648,(0),null);var y_15650 = cljs.core.nth.call(null,vec__15607_15648,(1),null);var r_15651 = cljs.core.nth.call(null,vec__15607_15648,(2),null);var vec__15608_15652 = cljs.core.get.call(null,map__15606_15646__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_15653 = cljs.core.nth.call(null,vec__15608_15652,(0),null);var ys_15654 = cljs.core.nth.call(null,vec__15608_15652,(1),null);var vec__15609_15655 = cljs.core.get.call(null,map__15606_15646__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_15656__$1 = cljs.core.nth.call(null,vec__15609_15655,(0),null);var g_15657 = cljs.core.nth.call(null,vec__15609_15655,(1),null);var b_15658 = cljs.core.nth.call(null,vec__15609_15655,(2),null);var a_15659 = cljs.core.nth.call(null,vec__15609_15655,(3),null);var G__15610_15660 = canvas_ctx_15612;(G__15610_15660["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_15656__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_15657 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_15658 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_15659)+")"));
G__15610_15660.fillRect(x_15649,y_15650,xs_15653,ys_15654);
{
var G__15661 = cljs.core.next.call(null,seq__15597_15639__$1);
var G__15662 = null;
var G__15663 = (0);
var G__15664 = (0);
seq__15597_15614 = G__15661;
chunk__15598_15615 = G__15662;
count__15599_15616 = G__15663;
i__15600_15617 = G__15664;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj15692 = {};return obj15692;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__15690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__15690,(0),null);var ch = cljs.core.nth.call(null,vec__15690,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15690,cw,ch){
return (function (p__15693){var map__15694 = p__15693;var map__15694__$1 = ((cljs.core.seq_QMARK_.call(null,map__15694))?cljs.core.apply.call(null,cljs.core.hash_map,map__15694):map__15694);var ctx = map__15694__$1;var timer = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__15694,map__15694__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15690,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__15694,map__15694__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15690,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___15715 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___15715 == null))
{} else
{var faceImg_15716 = temp__4130__auto___15715;var tex_15717 = app.main.cacheTex.call(null,gl__$1,faceImg_15716);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_15717,faceImg_15716,temp__4130__auto___15715,map__15694,map__15694__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15690,cw,ch){
return (function (pobj){var seq__15695 = cljs.core.seq.call(null,ps);var chunk__15696 = null;var count__15697 = (0);var i__15698 = (0);while(true){
if((i__15698 < count__15697))
{var map__15699 = cljs.core._nth.call(null,chunk__15696,i__15698);var map__15699__$1 = ((cljs.core.seq_QMARK_.call(null,map__15699))?cljs.core.apply.call(null,cljs.core.hash_map,map__15699):map__15699);var p = map__15699__$1;var vec__15700 = cljs.core.get.call(null,map__15699__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__15700,(0),null);var y = cljs.core.nth.call(null,vec__15700,(1),null);var rot = cljs.core.nth.call(null,vec__15700,(2),null);var vec__15701 = cljs.core.get.call(null,map__15699__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__15701,(0),null);var ys = cljs.core.nth.call(null,vec__15701,(1),null);var vec__15702 = cljs.core.get.call(null,map__15699__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__15702,(0),null);var g = cljs.core.nth.call(null,vec__15702,(1),null);var b = cljs.core.nth.call(null,vec__15702,(2),null);var a = cljs.core.nth.call(null,vec__15702,(3),null);var proj_15718 = (function (){var G__15703 = (new THREE.Matrix4());G__15703.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__15703;
})();var tras_15719 = (function (){var G__15704 = (new THREE.Matrix4());G__15704.makeTranslation(x,y,(0));
G__15704.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__15704.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__15704;
})();var texTx_15720 = (function (){var G__15705 = (new THREE.Matrix3());return G__15705;
})();var colorTx_15721 = (function (){var G__15706 = (new THREE.Matrix4());G__15706.makeTranslation(r,g,b);
return G__15706;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_15718.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_15719.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_15717,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_15720.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_15721.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__15722 = seq__15695;
var G__15723 = chunk__15696;
var G__15724 = count__15697;
var G__15725 = (i__15698 + (1));
seq__15695 = G__15722;
chunk__15696 = G__15723;
count__15697 = G__15724;
i__15698 = G__15725;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15695);if(temp__4126__auto__)
{var seq__15695__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15695__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15695__$1);{
var G__15726 = cljs.core.chunk_rest.call(null,seq__15695__$1);
var G__15727 = c__4307__auto__;
var G__15728 = cljs.core.count.call(null,c__4307__auto__);
var G__15729 = (0);
seq__15695 = G__15726;
chunk__15696 = G__15727;
count__15697 = G__15728;
i__15698 = G__15729;
continue;
}
} else
{var map__15707 = cljs.core.first.call(null,seq__15695__$1);var map__15707__$1 = ((cljs.core.seq_QMARK_.call(null,map__15707))?cljs.core.apply.call(null,cljs.core.hash_map,map__15707):map__15707);var p = map__15707__$1;var vec__15708 = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__15708,(0),null);var y = cljs.core.nth.call(null,vec__15708,(1),null);var rot = cljs.core.nth.call(null,vec__15708,(2),null);var vec__15709 = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__15709,(0),null);var ys = cljs.core.nth.call(null,vec__15709,(1),null);var vec__15710 = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__15710,(0),null);var g = cljs.core.nth.call(null,vec__15710,(1),null);var b = cljs.core.nth.call(null,vec__15710,(2),null);var a = cljs.core.nth.call(null,vec__15710,(3),null);var proj_15730 = (function (){var G__15711 = (new THREE.Matrix4());G__15711.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__15711;
})();var tras_15731 = (function (){var G__15712 = (new THREE.Matrix4());G__15712.makeTranslation(x,y,(0));
G__15712.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__15712.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__15712;
})();var texTx_15732 = (function (){var G__15713 = (new THREE.Matrix3());return G__15713;
})();var colorTx_15733 = (function (){var G__15714 = (new THREE.Matrix4());G__15714.makeTranslation(r,g,b);
return G__15714;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_15730.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_15731.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_15717,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_15732.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_15733.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__15734 = cljs.core.next.call(null,seq__15695__$1);
var G__15735 = null;
var G__15736 = (0);
var G__15737 = (0);
seq__15695 = G__15734;
chunk__15696 = G__15735;
count__15697 = G__15736;
i__15698 = G__15737;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_15717,faceImg_15716,temp__4130__auto___15715,map__15694,map__15694__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15690,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__15690,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6202__auto___16128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___16128){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___16128){
return (function (state_16079){var state_val_16080 = (state_16079[(1)]);if((state_val_16080 === (7)))
{var inst_16074 = (state_16079[(2)]);var inst_16040 = inst_16074;var state_16079__$1 = (function (){var statearr_16081 = state_16079;(statearr_16081[(7)] = inst_16040);
return statearr_16081;
})();var statearr_16082_16129 = state_16079__$1;(statearr_16082_16129[(2)] = null);
(statearr_16082_16129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (1)))
{var inst_15933 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_15934 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_15935 = [(250),(250),(0)];var inst_15936 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15935,null));var inst_15937 = [(0),(0),(0)];var inst_15938 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15937,null));var inst_15939 = [(0),(0)];var inst_15940 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15939,null));var inst_15941 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_15942 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_15943 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_15944 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_15945 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_15946 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_15947 = [0.5];var inst_15948 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15946,inst_15947);var inst_15949 = [inst_15948];var inst_15950 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15949,null));var inst_15951 = [(1),0.9,(1000),inst_15950];var inst_15952 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15945,inst_15951);var inst_15953 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_15954 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15953,null));var inst_15955 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,state_val_16080,c__6202__auto___16128){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,state_val_16080,c__6202__auto___16128))
})();var inst_15956 = [inst_15954,inst_15955];var inst_15957 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15956,null));var inst_15958 = [inst_15957];var inst_15959 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15958,null));var inst_15960 = [(1),inst_15952,inst_15959];var inst_15961 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15944,inst_15960);var inst_15962 = [inst_15961];var inst_15963 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15962,null));var inst_15964 = [(1),0.1,inst_15963];var inst_15965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15943,inst_15964);var inst_15966 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_15967 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15966,null));var inst_15968 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,state_val_16080,c__6202__auto___16128){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,state_val_16080,c__6202__auto___16128))
})();var inst_15969 = [inst_15967,inst_15968];var inst_15970 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15969,null));var inst_15971 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_15972 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15971,null));var inst_15973 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,state_val_16080,c__6202__auto___16128){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,state_val_16080,c__6202__auto___16128))
})();var inst_15974 = [inst_15972,inst_15973];var inst_15975 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15974,null));var inst_15976 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_15977 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15976,null));var inst_15978 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,state_val_16080,c__6202__auto___16128){
return (function (life,v){return v;
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,state_val_16080,c__6202__auto___16128))
})();var inst_15979 = [inst_15977,inst_15978];var inst_15980 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15979,null));var inst_15981 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_15982 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15981,null));var inst_15983 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,state_val_16080,c__6202__auto___16128){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,state_val_16080,c__6202__auto___16128))
})();var inst_15984 = [inst_15982,inst_15983];var inst_15985 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15984,null));var inst_15986 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_15987 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15986,null));var inst_15988 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,state_val_16080,c__6202__auto___16128){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,state_val_16080,c__6202__auto___16128))
})();var inst_15989 = [inst_15987,inst_15988];var inst_15990 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15989,null));var inst_15991 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_15992 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15991,null));var inst_15993 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,state_val_16080,c__6202__auto___16128){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,state_val_16080,c__6202__auto___16128))
})();var inst_15994 = [inst_15992,inst_15993];var inst_15995 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15994,null));var inst_15996 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_15997 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15996,null));var inst_15998 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,state_val_16080,c__6202__auto___16128){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,state_val_16080,c__6202__auto___16128))
})();var inst_15999 = [inst_15997,inst_15998];var inst_16000 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15999,null));var inst_16001 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_16002 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16001,null));var inst_16003 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,state_val_16080,c__6202__auto___16128){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,state_val_16080,c__6202__auto___16128))
})();var inst_16004 = [inst_16002,inst_16003];var inst_16005 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16004,null));var inst_16006 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_16007 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16006,null));var inst_16008 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,state_val_16080,c__6202__auto___16128){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,state_val_16080,c__6202__auto___16128))
})();var inst_16009 = [inst_16007,inst_16008];var inst_16010 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16009,null));var inst_16011 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_16012 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16011,null));var inst_16013 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16080,c__6202__auto___16128){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,state_val_16080,c__6202__auto___16128))
})();var inst_16014 = [inst_16012,inst_16013];var inst_16015 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16014,null));var inst_16016 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_16017 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16016,null));var inst_16018 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,inst_16013,inst_16014,inst_16015,inst_16016,inst_16017,state_val_16080,c__6202__auto___16128){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,inst_16013,inst_16014,inst_16015,inst_16016,inst_16017,state_val_16080,c__6202__auto___16128))
})();var inst_16019 = [inst_16017,inst_16018];var inst_16020 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16019,null));var inst_16021 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_16022 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16021,null));var inst_16023 = (function (){return ((function (inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,inst_16013,inst_16014,inst_16015,inst_16016,inst_16017,inst_16018,inst_16019,inst_16020,inst_16021,inst_16022,state_val_16080,c__6202__auto___16128){
return (function (life,v){return life;
});
;})(inst_15933,inst_15934,inst_15935,inst_15936,inst_15937,inst_15938,inst_15939,inst_15940,inst_15941,inst_15942,inst_15943,inst_15944,inst_15945,inst_15946,inst_15947,inst_15948,inst_15949,inst_15950,inst_15951,inst_15952,inst_15953,inst_15954,inst_15955,inst_15956,inst_15957,inst_15958,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,inst_15967,inst_15968,inst_15969,inst_15970,inst_15971,inst_15972,inst_15973,inst_15974,inst_15975,inst_15976,inst_15977,inst_15978,inst_15979,inst_15980,inst_15981,inst_15982,inst_15983,inst_15984,inst_15985,inst_15986,inst_15987,inst_15988,inst_15989,inst_15990,inst_15991,inst_15992,inst_15993,inst_15994,inst_15995,inst_15996,inst_15997,inst_15998,inst_15999,inst_16000,inst_16001,inst_16002,inst_16003,inst_16004,inst_16005,inst_16006,inst_16007,inst_16008,inst_16009,inst_16010,inst_16011,inst_16012,inst_16013,inst_16014,inst_16015,inst_16016,inst_16017,inst_16018,inst_16019,inst_16020,inst_16021,inst_16022,state_val_16080,c__6202__auto___16128))
})();var inst_16024 = [inst_16022,inst_16023];var inst_16025 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16024,null));var inst_16026 = [inst_15970,inst_15975,inst_15980,inst_15985,inst_15990,inst_15995,inst_16000,inst_16005,inst_16010,inst_16015,inst_16020,inst_16025];var inst_16027 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16026,null));var inst_16028 = [(2),inst_15965,inst_16027];var inst_16029 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15942,inst_16028);var inst_16030 = [inst_16029];var inst_16031 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16030,null));var inst_16032 = [(1),0.1,-1.57,1.57,(50),inst_16031];var inst_16033 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15941,inst_16032);var inst_16034 = [(-1),inst_15936,inst_15938,inst_15940,inst_16033];var inst_16035 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15934,inst_16034);var inst_16036 = app.particle.particle.call(null,inst_16035);var inst_16037 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_16036);var inst_16038 = [(0),inst_16037];var inst_16039 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15933,inst_16038);var inst_16040 = inst_16039;var state_16079__$1 = (function (){var statearr_16083 = state_16079;(statearr_16083[(7)] = inst_16040);
return statearr_16083;
})();var statearr_16084_16130 = state_16079__$1;(statearr_16084_16130[(2)] = null);
(statearr_16084_16130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (4)))
{var inst_16048 = (state_16079[(8)]);var inst_16046 = (state_16079[(2)]);var inst_16047 = cljs.core.nth.call(null,inst_16046,(0),null);var inst_16048__$1 = cljs.core.nth.call(null,inst_16046,(1),null);var inst_16052 = cljs.core._EQ_.call(null,app.react.onTick,inst_16048__$1);var state_16079__$1 = (function (){var statearr_16085 = state_16079;(statearr_16085[(8)] = inst_16048__$1);
(statearr_16085[(9)] = inst_16047);
return statearr_16085;
})();if(inst_16052)
{var statearr_16086_16131 = state_16079__$1;(statearr_16086_16131[(1)] = (5));
} else
{var statearr_16087_16132 = state_16079__$1;(statearr_16087_16132[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (6)))
{var inst_16048 = (state_16079[(8)]);var inst_16062 = cljs.core._EQ_.call(null,app.react.onImage,inst_16048);var state_16079__$1 = state_16079;if(inst_16062)
{var statearr_16088_16133 = state_16079__$1;(statearr_16088_16133[(1)] = (8));
} else
{var statearr_16089_16134 = state_16079__$1;(statearr_16089_16134[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (3)))
{var inst_16077 = (state_16079[(2)]);var state_16079__$1 = state_16079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16079__$1,inst_16077);
} else
{if((state_val_16080 === (2)))
{var inst_16043 = [app.react.onTick,app.react.onImage];var inst_16044 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16043,null));var state_16079__$1 = state_16079;return cljs.core.async.ioc_alts_BANG_.call(null,state_16079__$1,(4),inst_16044);
} else
{if((state_val_16080 === (9)))
{var inst_16040 = (state_16079[(7)]);var state_16079__$1 = state_16079;var statearr_16090_16135 = state_16079__$1;(statearr_16090_16135[(2)] = inst_16040);
(statearr_16090_16135[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (5)))
{var inst_16047 = (state_16079[(9)]);var inst_16040 = (state_16079[(7)]);var inst_16054 = $("#canvas");var inst_16055 = app.particle.update.call(null,inst_16047,inst_16040);var inst_16056 = app.main.draw.call(null,inst_16054,inst_16055);var inst_16057 = app.main.draw3D.call(null,inst_16056);var inst_16058 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_16059 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16058,null));var inst_16060 = cljs.core.update_in.call(null,inst_16057,inst_16059,cljs.core._PLUS_,inst_16047);var state_16079__$1 = state_16079;var statearr_16091_16136 = state_16079__$1;(statearr_16091_16136[(2)] = inst_16060);
(statearr_16091_16136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (10)))
{var inst_16072 = (state_16079[(2)]);var state_16079__$1 = state_16079;var statearr_16092_16137 = state_16079__$1;(statearr_16092_16137[(2)] = inst_16072);
(statearr_16092_16137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (8)))
{var inst_16047 = (state_16079[(9)]);var inst_16040 = (state_16079[(7)]);var inst_16065 = cljs.core.nth.call(null,inst_16047,(0),null);var inst_16066 = cljs.core.nth.call(null,inst_16047,(1),null);var inst_16067 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_16065];var inst_16068 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16067,null));var inst_16069 = cljs.core.assoc_in.call(null,inst_16040,inst_16068,inst_16066);var state_16079__$1 = state_16079;var statearr_16093_16138 = state_16079__$1;(statearr_16093_16138[(2)] = inst_16069);
(statearr_16093_16138[(1)] = (10));
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
});})(c__6202__auto___16128))
;return ((function (switch__6187__auto__,c__6202__auto___16128){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16097 = [null,null,null,null,null,null,null,null,null,null];(statearr_16097[(0)] = state_machine__6188__auto__);
(statearr_16097[(1)] = (1));
return statearr_16097;
});
var state_machine__6188__auto____1 = (function (state_16079){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16098){if((e16098 instanceof Object))
{var ex__6191__auto__ = e16098;var statearr_16099_16139 = state_16079;(statearr_16099_16139[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16140 = state_16079;
state_16079 = G__16140;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16079){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___16128))
})();var state__6204__auto__ = (function (){var statearr_16100 = f__6203__auto__.call(null);(statearr_16100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___16128);
return statearr_16100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___16128))
);
var face_16141 = (new Image());face_16141.src = "res/images/m_gr.jpg";
face_16141.onload = ((function (face_16141){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,face_16141){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,face_16141){
return (function (state_16106){var state_val_16107 = (state_16106[(1)]);if((state_val_16107 === (2)))
{var inst_16104 = (state_16106[(2)]);var state_16106__$1 = state_16106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16106__$1,inst_16104);
} else
{if((state_val_16107 === (1)))
{var inst_16101 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_16141];var inst_16102 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16101,null));var state_16106__$1 = state_16106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16106__$1,(2),app.react.onImage,inst_16102);
} else
{return null;
}
}
});})(c__6202__auto__,face_16141))
;return ((function (switch__6187__auto__,c__6202__auto__,face_16141){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16111 = [null,null,null,null,null,null,null];(statearr_16111[(0)] = state_machine__6188__auto__);
(statearr_16111[(1)] = (1));
return statearr_16111;
});
var state_machine__6188__auto____1 = (function (state_16106){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16106);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16112){if((e16112 instanceof Object))
{var ex__6191__auto__ = e16112;var statearr_16113_16142 = state_16106;(statearr_16113_16142[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16143 = state_16106;
state_16106 = G__16143;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16106){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,face_16141))
})();var state__6204__auto__ = (function (){var statearr_16114 = f__6203__auto__.call(null);(statearr_16114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_16114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,face_16141))
);
return c__6202__auto__;
});})(face_16141))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6202__auto___16144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___16144,curr_time__$1,elapsed,last_time){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___16144,curr_time__$1,elapsed,last_time){
return (function (state_16119){var state_val_16120 = (state_16119[(1)]);if((state_val_16120 === (2)))
{var inst_16117 = (state_16119[(2)]);var state_16119__$1 = state_16119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16119__$1,inst_16117);
} else
{if((state_val_16120 === (1)))
{var inst_16115 = (elapsed / (1000));var state_16119__$1 = state_16119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16119__$1,(2),app.react.onTick,inst_16115);
} else
{return null;
}
}
});})(c__6202__auto___16144,curr_time__$1,elapsed,last_time))
;return ((function (switch__6187__auto__,c__6202__auto___16144,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16124 = [null,null,null,null,null,null,null];(statearr_16124[(0)] = state_machine__6188__auto__);
(statearr_16124[(1)] = (1));
return statearr_16124;
});
var state_machine__6188__auto____1 = (function (state_16119){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16125){if((e16125 instanceof Object))
{var ex__6191__auto__ = e16125;var statearr_16126_16145 = state_16119;(statearr_16126_16145[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16146 = state_16119;
state_16119 = G__16146;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16119){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___16144,curr_time__$1,elapsed,last_time))
})();var state__6204__auto__ = (function (){var statearr_16127 = f__6203__auto__.call(null);(statearr_16127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___16144);
return statearr_16127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___16144,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
