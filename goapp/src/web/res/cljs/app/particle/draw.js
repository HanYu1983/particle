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
return (function (p__41758){var map__41759 = p__41758;var map__41759__$1 = ((cljs.core.seq_QMARK_.call(null,map__41759))?cljs.core.apply.call(null,cljs.core.hash_map,map__41759):map__41759);var ctx = map__41759__$1;var map__41760 = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41760__$1 = ((cljs.core.seq_QMARK_.call(null,map__41760))?cljs.core.apply.call(null,cljs.core.hash_map,map__41760):map__41760);var ps = cljs.core.get.call(null,map__41760__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__41761_41776 = canvas_ctx;(G__41761_41776["fillStyle"] = "white");
G__41761_41776.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__41761_41776["fillStyle"] = "red");
G__41761_41776.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__41762_41777 = cljs.core.seq.call(null,ps);var chunk__41763_41778 = null;var count__41764_41779 = (0);var i__41765_41780 = (0);while(true){
if((i__41765_41780 < count__41764_41779))
{var map__41766_41781 = cljs.core._nth.call(null,chunk__41763_41778,i__41765_41780);var map__41766_41782__$1 = ((cljs.core.seq_QMARK_.call(null,map__41766_41781))?cljs.core.apply.call(null,cljs.core.hash_map,map__41766_41781):map__41766_41781);var p_41783 = map__41766_41782__$1;var vec__41767_41784 = cljs.core.get.call(null,map__41766_41782__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41785 = cljs.core.nth.call(null,vec__41767_41784,(0),null);var y_41786 = cljs.core.nth.call(null,vec__41767_41784,(1),null);var rot_41787 = cljs.core.nth.call(null,vec__41767_41784,(2),null);var vec__41768_41788 = cljs.core.get.call(null,map__41766_41782__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41789 = cljs.core.nth.call(null,vec__41768_41788,(0),null);var ys_41790 = cljs.core.nth.call(null,vec__41768_41788,(1),null);var vec__41769_41791 = cljs.core.get.call(null,map__41766_41782__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41792 = cljs.core.nth.call(null,vec__41769_41791,(0),null);var g_41793 = cljs.core.nth.call(null,vec__41769_41791,(1),null);var b_41794 = cljs.core.nth.call(null,vec__41769_41791,(2),null);var a_41795 = cljs.core.nth.call(null,vec__41769_41791,(3),null);var G__41770_41796 = canvas_ctx;G__41770_41796.save();
G__41770_41796.translate(x_41785,y_41786);
G__41770_41796.rotate(rot_41787);
(G__41770_41796["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41792 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41793 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41794 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41795)+")"));
G__41770_41796.fillRect((- (xs_41789 / (2))),(- (ys_41790 / (2))),xs_41789,ys_41790);
G__41770_41796.restore();
{
var G__41797 = seq__41762_41777;
var G__41798 = chunk__41763_41778;
var G__41799 = count__41764_41779;
var G__41800 = (i__41765_41780 + (1));
seq__41762_41777 = G__41797;
chunk__41763_41778 = G__41798;
count__41764_41779 = G__41799;
i__41765_41780 = G__41800;
continue;
}
} else
{var temp__4126__auto___41801 = cljs.core.seq.call(null,seq__41762_41777);if(temp__4126__auto___41801)
{var seq__41762_41802__$1 = temp__4126__auto___41801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41762_41802__$1))
{var c__4307__auto___41803 = cljs.core.chunk_first.call(null,seq__41762_41802__$1);{
var G__41804 = cljs.core.chunk_rest.call(null,seq__41762_41802__$1);
var G__41805 = c__4307__auto___41803;
var G__41806 = cljs.core.count.call(null,c__4307__auto___41803);
var G__41807 = (0);
seq__41762_41777 = G__41804;
chunk__41763_41778 = G__41805;
count__41764_41779 = G__41806;
i__41765_41780 = G__41807;
continue;
}
} else
{var map__41771_41808 = cljs.core.first.call(null,seq__41762_41802__$1);var map__41771_41809__$1 = ((cljs.core.seq_QMARK_.call(null,map__41771_41808))?cljs.core.apply.call(null,cljs.core.hash_map,map__41771_41808):map__41771_41808);var p_41810 = map__41771_41809__$1;var vec__41772_41811 = cljs.core.get.call(null,map__41771_41809__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_41812 = cljs.core.nth.call(null,vec__41772_41811,(0),null);var y_41813 = cljs.core.nth.call(null,vec__41772_41811,(1),null);var rot_41814 = cljs.core.nth.call(null,vec__41772_41811,(2),null);var vec__41773_41815 = cljs.core.get.call(null,map__41771_41809__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_41816 = cljs.core.nth.call(null,vec__41773_41815,(0),null);var ys_41817 = cljs.core.nth.call(null,vec__41773_41815,(1),null);var vec__41774_41818 = cljs.core.get.call(null,map__41771_41809__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_41819 = cljs.core.nth.call(null,vec__41774_41818,(0),null);var g_41820 = cljs.core.nth.call(null,vec__41774_41818,(1),null);var b_41821 = cljs.core.nth.call(null,vec__41774_41818,(2),null);var a_41822 = cljs.core.nth.call(null,vec__41774_41818,(3),null);var G__41775_41823 = canvas_ctx;G__41775_41823.save();
G__41775_41823.translate(x_41812,y_41813);
G__41775_41823.rotate(rot_41814);
(G__41775_41823["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_41819 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_41820 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_41821 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_41822)+")"));
G__41775_41823.fillRect((- (xs_41816 / (2))),(- (ys_41817 / (2))),xs_41816,ys_41817);
G__41775_41823.restore();
{
var G__41824 = cljs.core.next.call(null,seq__41762_41802__$1);
var G__41825 = null;
var G__41826 = (0);
var G__41827 = (0);
seq__41762_41777 = G__41824;
chunk__41763_41778 = G__41825;
count__41764_41779 = G__41826;
i__41765_41780 = G__41827;
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
app.particle.draw.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj41857 = {};return obj41857;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__41855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__41855,(0),null);var ch = cljs.core.nth.call(null,vec__41855,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__41855,cw,ch){
return (function (p__41858){var map__41859 = p__41858;var map__41859__$1 = ((cljs.core.seq_QMARK_.call(null,map__41859))?cljs.core.apply.call(null,cljs.core.hash_map,map__41859):map__41859);var ctx = map__41859__$1;var vec__41860 = cljs.core.get.call(null,map__41859__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));var cx = cljs.core.nth.call(null,vec__41860,(0),null);var cy = cljs.core.nth.call(null,vec__41860,(1),null);var timer = cljs.core.get.call(null,map__41859__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__41861 = cljs.core.get.call(null,map__41859__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__41861__$1 = ((cljs.core.seq_QMARK_.call(null,map__41861))?cljs.core.apply.call(null,cljs.core.hash_map,map__41861):map__41861);var ps = cljs.core.get.call(null,map__41861__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__41859,map__41859__$1,ctx,vec__41860,cx,cy,timer,map__41861,map__41861__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__41855,cw,ch){
return (function (pobj){var seq__41862 = cljs.core.seq.call(null,ps);var chunk__41863 = null;var count__41864 = (0);var i__41865 = (0);while(true){
if((i__41865 < count__41864))
{var map__41866 = cljs.core._nth.call(null,chunk__41863,i__41865);var map__41866__$1 = ((cljs.core.seq_QMARK_.call(null,map__41866))?cljs.core.apply.call(null,cljs.core.hash_map,map__41866):map__41866);var p = map__41866__$1;var vec__41867 = cljs.core.get.call(null,map__41866__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41867,(0),null);var y = cljs.core.nth.call(null,vec__41867,(1),null);var rot = cljs.core.nth.call(null,vec__41867,(2),null);var vec__41868 = cljs.core.get.call(null,map__41866__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41868,(0),null);var ys = cljs.core.nth.call(null,vec__41868,(1),null);var vec__41869 = cljs.core.get.call(null,map__41866__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41869,(0),null);var g = cljs.core.nth.call(null,vec__41869,(1),null);var b = cljs.core.nth.call(null,vec__41869,(2),null);var a = cljs.core.nth.call(null,vec__41869,(3),null);var proj_41882 = (function (){var G__41870 = (new THREE.Matrix4());G__41870.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__41870;
})();var tras_41883 = (function (){var G__41871 = (new THREE.Matrix4());G__41871.makeTranslation((cx + x),(cy + y),(0));
G__41871.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__41871.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__41871;
})();var texTx_41884 = (function (){var G__41872 = (new THREE.Matrix3());return G__41872;
})();var colorTx_41885 = (function (){var G__41873 = (new THREE.Matrix4());G__41873.makeTranslation(r,g,b);
return G__41873;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_41882.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_41883.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_41884.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_41885.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__41886 = seq__41862;
var G__41887 = chunk__41863;
var G__41888 = count__41864;
var G__41889 = (i__41865 + (1));
seq__41862 = G__41886;
chunk__41863 = G__41887;
count__41864 = G__41888;
i__41865 = G__41889;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__41862);if(temp__4126__auto__)
{var seq__41862__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41862__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__41862__$1);{
var G__41890 = cljs.core.chunk_rest.call(null,seq__41862__$1);
var G__41891 = c__4307__auto__;
var G__41892 = cljs.core.count.call(null,c__4307__auto__);
var G__41893 = (0);
seq__41862 = G__41890;
chunk__41863 = G__41891;
count__41864 = G__41892;
i__41865 = G__41893;
continue;
}
} else
{var map__41874 = cljs.core.first.call(null,seq__41862__$1);var map__41874__$1 = ((cljs.core.seq_QMARK_.call(null,map__41874))?cljs.core.apply.call(null,cljs.core.hash_map,map__41874):map__41874);var p = map__41874__$1;var vec__41875 = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__41875,(0),null);var y = cljs.core.nth.call(null,vec__41875,(1),null);var rot = cljs.core.nth.call(null,vec__41875,(2),null);var vec__41876 = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__41876,(0),null);var ys = cljs.core.nth.call(null,vec__41876,(1),null);var vec__41877 = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__41877,(0),null);var g = cljs.core.nth.call(null,vec__41877,(1),null);var b = cljs.core.nth.call(null,vec__41877,(2),null);var a = cljs.core.nth.call(null,vec__41877,(3),null);var proj_41894 = (function (){var G__41878 = (new THREE.Matrix4());G__41878.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__41878;
})();var tras_41895 = (function (){var G__41879 = (new THREE.Matrix4());G__41879.makeTranslation((cx + x),(cy + y),(0));
G__41879.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__41879.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__41879;
})();var texTx_41896 = (function (){var G__41880 = (new THREE.Matrix3());return G__41880;
})();var colorTx_41897 = (function (){var G__41881 = (new THREE.Matrix4());G__41881.makeTranslation(r,g,b);
return G__41881;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_41894.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_41895.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_41896.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_41897.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__41898 = cljs.core.next.call(null,seq__41862__$1);
var G__41899 = null;
var G__41900 = (0);
var G__41901 = (0);
seq__41862 = G__41898;
chunk__41863 = G__41899;
count__41864 = G__41900;
i__41865 = G__41901;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(map__41859,map__41859__$1,ctx,vec__41860,cx,cy,timer,map__41861,map__41861__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__41855,cw,ch))
);
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__41855,cw,ch))
});
