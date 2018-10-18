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
app.main.draw = (function draw(canvas,p__9400){var map__9417 = p__9400;var map__9417__$1 = ((cljs.core.seq_QMARK_.call(null,map__9417))?cljs.core.apply.call(null,cljs.core.hash_map,map__9417):map__9417);var ctx = map__9417__$1;var ps = cljs.core.get.call(null,map__9417__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var canvas_dom_9433 = (canvas[(0)]);var canvas_ctx_9434 = canvas_dom_9433.getContext("2d");var G__9418_9435 = canvas_ctx_9434;(G__9418_9435["fillStyle"] = "white");
G__9418_9435.fillRect((0),(0),canvas_dom_9433.width,canvas_dom_9433.height);
(G__9418_9435["fillStyle"] = "red");
G__9418_9435.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__9419_9436 = cljs.core.seq.call(null,ps);var chunk__9420_9437 = null;var count__9421_9438 = (0);var i__9422_9439 = (0);while(true){
if((i__9422_9439 < count__9421_9438))
{var map__9423_9440 = cljs.core._nth.call(null,chunk__9420_9437,i__9422_9439);var map__9423_9441__$1 = ((cljs.core.seq_QMARK_.call(null,map__9423_9440))?cljs.core.apply.call(null,cljs.core.hash_map,map__9423_9440):map__9423_9440);var p_9442 = map__9423_9441__$1;var vec__9424_9443 = cljs.core.get.call(null,map__9423_9441__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9444 = cljs.core.nth.call(null,vec__9424_9443,(0),null);var y_9445 = cljs.core.nth.call(null,vec__9424_9443,(1),null);var r_9446 = cljs.core.nth.call(null,vec__9424_9443,(2),null);var vec__9425_9447 = cljs.core.get.call(null,map__9423_9441__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9448 = cljs.core.nth.call(null,vec__9425_9447,(0),null);var ys_9449 = cljs.core.nth.call(null,vec__9425_9447,(1),null);var vec__9426_9450 = cljs.core.get.call(null,map__9423_9441__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9451__$1 = cljs.core.nth.call(null,vec__9426_9450,(0),null);var g_9452 = cljs.core.nth.call(null,vec__9426_9450,(1),null);var b_9453 = cljs.core.nth.call(null,vec__9426_9450,(2),null);var a_9454 = cljs.core.nth.call(null,vec__9426_9450,(3),null);var G__9427_9455 = canvas_ctx_9434;(G__9427_9455["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9451__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9452 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9453 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9454)+")"));
G__9427_9455.fillRect(x_9444,y_9445,xs_9448,ys_9449);
{
var G__9456 = seq__9419_9436;
var G__9457 = chunk__9420_9437;
var G__9458 = count__9421_9438;
var G__9459 = (i__9422_9439 + (1));
seq__9419_9436 = G__9456;
chunk__9420_9437 = G__9457;
count__9421_9438 = G__9458;
i__9422_9439 = G__9459;
continue;
}
} else
{var temp__4126__auto___9460 = cljs.core.seq.call(null,seq__9419_9436);if(temp__4126__auto___9460)
{var seq__9419_9461__$1 = temp__4126__auto___9460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9419_9461__$1))
{var c__4307__auto___9462 = cljs.core.chunk_first.call(null,seq__9419_9461__$1);{
var G__9463 = cljs.core.chunk_rest.call(null,seq__9419_9461__$1);
var G__9464 = c__4307__auto___9462;
var G__9465 = cljs.core.count.call(null,c__4307__auto___9462);
var G__9466 = (0);
seq__9419_9436 = G__9463;
chunk__9420_9437 = G__9464;
count__9421_9438 = G__9465;
i__9422_9439 = G__9466;
continue;
}
} else
{var map__9428_9467 = cljs.core.first.call(null,seq__9419_9461__$1);var map__9428_9468__$1 = ((cljs.core.seq_QMARK_.call(null,map__9428_9467))?cljs.core.apply.call(null,cljs.core.hash_map,map__9428_9467):map__9428_9467);var p_9469 = map__9428_9468__$1;var vec__9429_9470 = cljs.core.get.call(null,map__9428_9468__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_9471 = cljs.core.nth.call(null,vec__9429_9470,(0),null);var y_9472 = cljs.core.nth.call(null,vec__9429_9470,(1),null);var r_9473 = cljs.core.nth.call(null,vec__9429_9470,(2),null);var vec__9430_9474 = cljs.core.get.call(null,map__9428_9468__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_9475 = cljs.core.nth.call(null,vec__9430_9474,(0),null);var ys_9476 = cljs.core.nth.call(null,vec__9430_9474,(1),null);var vec__9431_9477 = cljs.core.get.call(null,map__9428_9468__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_9478__$1 = cljs.core.nth.call(null,vec__9431_9477,(0),null);var g_9479 = cljs.core.nth.call(null,vec__9431_9477,(1),null);var b_9480 = cljs.core.nth.call(null,vec__9431_9477,(2),null);var a_9481 = cljs.core.nth.call(null,vec__9431_9477,(3),null);var G__9432_9482 = canvas_ctx_9434;(G__9432_9482["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_9478__$1 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_9479 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_9480 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_9481)+")"));
G__9432_9482.fillRect(x_9471,y_9472,xs_9475,ys_9476);
{
var G__9483 = cljs.core.next.call(null,seq__9419_9461__$1);
var G__9484 = null;
var G__9485 = (0);
var G__9486 = (0);
seq__9419_9436 = G__9483;
chunk__9420_9437 = G__9484;
count__9421_9438 = G__9485;
i__9422_9439 = G__9486;
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
app.main.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj9514 = {};return obj9514;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var spec_shader = gl.shader.programObject.call(null,gl__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)], null),gl.util.domContent.call(null,"vertexShader"),gl.util.domContent.call(null,"fragmentShader5"));var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__9512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__9512,(0),null);var ch = cljs.core.nth.call(null,vec__9512,(1),null);return ((function (canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9512,cw,ch){
return (function (p__9515){var map__9516 = p__9515;var map__9516__$1 = ((cljs.core.seq_QMARK_.call(null,map__9516))?cljs.core.apply.call(null,cljs.core.hash_map,map__9516):map__9516);var ctx = map__9516__$1;var timer = cljs.core.get.call(null,map__9516__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var ps = cljs.core.get.call(null,map__9516__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl.shader.use.call(null,gl__$1,spec_shader,((function (map__9516,map__9516__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9512,cw,ch){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});})(map__9516,map__9516__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9512,cw,ch))
);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE);
var temp__4130__auto___9537 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___9537 == null))
{} else
{var faceImg_9538 = temp__4130__auto___9537;var tex_9539 = app.main.cacheTex.call(null,gl__$1,faceImg_9538);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_9539,faceImg_9538,temp__4130__auto___9537,map__9516,map__9516__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9512,cw,ch){
return (function (pobj){var seq__9517 = cljs.core.seq.call(null,ps);var chunk__9518 = null;var count__9519 = (0);var i__9520 = (0);while(true){
if((i__9520 < count__9519))
{var map__9521 = cljs.core._nth.call(null,chunk__9518,i__9520);var map__9521__$1 = ((cljs.core.seq_QMARK_.call(null,map__9521))?cljs.core.apply.call(null,cljs.core.hash_map,map__9521):map__9521);var p = map__9521__$1;var vec__9522 = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9522,(0),null);var y = cljs.core.nth.call(null,vec__9522,(1),null);var rot = cljs.core.nth.call(null,vec__9522,(2),null);var vec__9523 = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9523,(0),null);var ys = cljs.core.nth.call(null,vec__9523,(1),null);var vec__9524 = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9524,(0),null);var g = cljs.core.nth.call(null,vec__9524,(1),null);var b = cljs.core.nth.call(null,vec__9524,(2),null);var a = cljs.core.nth.call(null,vec__9524,(3),null);var proj_9540 = (function (){var G__9525 = (new THREE.Matrix4());G__9525.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9525;
})();var tras_9541 = (function (){var G__9526 = (new THREE.Matrix4());G__9526.makeTranslation(x,y,(0));
G__9526.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9526.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9526;
})();var texTx_9542 = (function (){var G__9527 = (new THREE.Matrix3());return G__9527;
})();var colorTx_9543 = (function (){var G__9528 = (new THREE.Matrix4());G__9528.makeTranslation(r,g,b);
return G__9528;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9540.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9541.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9539,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9542.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9543.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9544 = seq__9517;
var G__9545 = chunk__9518;
var G__9546 = count__9519;
var G__9547 = (i__9520 + (1));
seq__9517 = G__9544;
chunk__9518 = G__9545;
count__9519 = G__9546;
i__9520 = G__9547;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9517);if(temp__4126__auto__)
{var seq__9517__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9517__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__9517__$1);{
var G__9548 = cljs.core.chunk_rest.call(null,seq__9517__$1);
var G__9549 = c__4307__auto__;
var G__9550 = cljs.core.count.call(null,c__4307__auto__);
var G__9551 = (0);
seq__9517 = G__9548;
chunk__9518 = G__9549;
count__9519 = G__9550;
i__9520 = G__9551;
continue;
}
} else
{var map__9529 = cljs.core.first.call(null,seq__9517__$1);var map__9529__$1 = ((cljs.core.seq_QMARK_.call(null,map__9529))?cljs.core.apply.call(null,cljs.core.hash_map,map__9529):map__9529);var p = map__9529__$1;var vec__9530 = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9530,(0),null);var y = cljs.core.nth.call(null,vec__9530,(1),null);var rot = cljs.core.nth.call(null,vec__9530,(2),null);var vec__9531 = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__9531,(0),null);var ys = cljs.core.nth.call(null,vec__9531,(1),null);var vec__9532 = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__9532,(0),null);var g = cljs.core.nth.call(null,vec__9532,(1),null);var b = cljs.core.nth.call(null,vec__9532,(2),null);var a = cljs.core.nth.call(null,vec__9532,(3),null);var proj_9552 = (function (){var G__9533 = (new THREE.Matrix4());G__9533.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__9533;
})();var tras_9553 = (function (){var G__9534 = (new THREE.Matrix4());G__9534.makeTranslation(x,y,(0));
G__9534.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__9534.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__9534;
})();var texTx_9554 = (function (){var G__9535 = (new THREE.Matrix3());return G__9535;
})();var colorTx_9555 = (function (){var G__9536 = (new THREE.Matrix4());G__9536.makeTranslation(r,g,b);
return G__9536;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_9552.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_9553.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_9539,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_9554.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_9555.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__9556 = cljs.core.next.call(null,seq__9517__$1);
var G__9557 = null;
var G__9558 = (0);
var G__9559 = (0);
seq__9517 = G__9556;
chunk__9518 = G__9557;
count__9519 = G__9558;
i__9520 = G__9559;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_9539,faceImg_9538,temp__4130__auto___9537,map__9516,map__9516__$1,ctx,timer,ps,canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9512,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,spec_shader,sprite_shader,vec__9512,cw,ch))
});
app.main.draw3D = app.main.draw3D.call(null,$("#canvas2"));
app.main.main = (function main(){var c__6203__auto___9950 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___9950){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___9950){
return (function (state_9901){var state_val_9902 = (state_9901[(1)]);if((state_val_9902 === (7)))
{var inst_9896 = (state_9901[(2)]);var inst_9862 = inst_9896;var state_9901__$1 = (function (){var statearr_9903 = state_9901;(statearr_9903[(7)] = inst_9862);
return statearr_9903;
})();var statearr_9904_9951 = state_9901__$1;(statearr_9904_9951[(2)] = null);
(statearr_9904_9951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (1)))
{var inst_9755 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_9756 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit","emit",-1327179018)];var inst_9757 = [(250),(250),(0)];var inst_9758 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9757,null));var inst_9759 = [(0),(0),(0)];var inst_9760 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9759,null));var inst_9761 = [(0),(0)];var inst_9762 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9761,null));var inst_9763 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9764 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9765 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9766 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689)];var inst_9767 = [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"prototype","prototype",-1121365005)];var inst_9768 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9769 = [0.5];var inst_9770 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9768,inst_9769);var inst_9771 = [inst_9770];var inst_9772 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9771,null));var inst_9773 = [(1),0.9,(1000),inst_9772];var inst_9774 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9767,inst_9773);var inst_9775 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9776 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9775,null));var inst_9777 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,state_val_9902,c__6203__auto___9950){
return (function (life,v){return ((-60) * ((1) - life));
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,state_val_9902,c__6203__auto___9950))
})();var inst_9778 = [inst_9776,inst_9777];var inst_9779 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9778,null));var inst_9780 = [inst_9779];var inst_9781 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9780,null));var inst_9782 = [(1),inst_9774,inst_9781];var inst_9783 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9766,inst_9782);var inst_9784 = [inst_9783];var inst_9785 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9784,null));var inst_9786 = [(1),0.1,inst_9785];var inst_9787 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9765,inst_9786);var inst_9788 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)];var inst_9789 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9788,null));var inst_9790 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,state_val_9902,c__6203__auto___9950){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,state_val_9902,c__6203__auto___9950))
})();var inst_9791 = [inst_9789,inst_9790];var inst_9792 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9791,null));var inst_9793 = [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)];var inst_9794 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9793,null));var inst_9795 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,state_val_9902,c__6203__auto___9950){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + (cljs.core.rand_int.call(null,(50)) - (25)));
} else
{return v;
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,state_val_9902,c__6203__auto___9950))
})();var inst_9796 = [inst_9794,inst_9795];var inst_9797 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9796,null));var inst_9798 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9799 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9798,null));var inst_9800 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,state_val_9902,c__6203__auto___9950){
return (function (life,v){return v;
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,state_val_9902,c__6203__auto___9950))
})();var inst_9801 = [inst_9799,inst_9800];var inst_9802 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9801,null));var inst_9803 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9804 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9803,null));var inst_9805 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,state_val_9902,c__6203__auto___9950){
return (function (life,v){if((life > 0.5))
{return (v + (10));
} else
{return v;
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,state_val_9902,c__6203__auto___9950))
})();var inst_9806 = [inst_9804,inst_9805];var inst_9807 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9806,null));var inst_9808 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)];var inst_9809 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9808,null));var inst_9810 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,state_val_9902,c__6203__auto___9950){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (cljs.core.rand.call(null,6.28) - 3.14);
} else
{return v;
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,state_val_9902,c__6203__auto___9950))
})();var inst_9811 = [inst_9809,inst_9810];var inst_9812 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9811,null));var inst_9813 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)];var inst_9814 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9813,null));var inst_9815 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,state_val_9902,c__6203__auto___9950){
return (function (life,v){return (v + cljs.core.rand.call(null,(1)));
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,state_val_9902,c__6203__auto___9950))
})();var inst_9816 = [inst_9814,inst_9815];var inst_9817 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9816,null));var inst_9818 = [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)];var inst_9819 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9818,null));var inst_9820 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,state_val_9902,c__6203__auto___9950){
return (function (life,v){if((life > 0.8))
{return (v / 1.2);
} else
{return v;
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,state_val_9902,c__6203__auto___9950))
})();var inst_9821 = [inst_9819,inst_9820];var inst_9822 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9821,null));var inst_9823 = [new cljs.core.Keyword(null,"size","size",1098693007),(0)];var inst_9824 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9823,null));var inst_9825 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,state_val_9902,c__6203__auto___9950){
return (function (life,v){if((life < 0.5))
{return (life * (100));
} else
{return (((1) - life) * (100));
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,state_val_9902,c__6203__auto___9950))
})();var inst_9826 = [inst_9824,inst_9825];var inst_9827 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9826,null));var inst_9828 = [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)];var inst_9829 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9828,null));var inst_9830 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,state_val_9902,c__6203__auto___9950){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return (v + cljs.core.rand_int.call(null,v));
} else
{return v;
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,state_val_9902,c__6203__auto___9950))
})();var inst_9831 = [inst_9829,inst_9830];var inst_9832 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9831,null));var inst_9833 = [new cljs.core.Keyword(null,"color","color",1011675173),(3)];var inst_9834 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9833,null));var inst_9835 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,inst_9830,inst_9831,inst_9832,inst_9833,inst_9834,state_val_9902,c__6203__auto___9950){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,inst_9830,inst_9831,inst_9832,inst_9833,inst_9834,state_val_9902,c__6203__auto___9950))
})();var inst_9836 = [inst_9834,inst_9835];var inst_9837 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9836,null));var inst_9838 = [new cljs.core.Keyword(null,"color","color",1011675173),(2)];var inst_9839 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9838,null));var inst_9840 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,inst_9830,inst_9831,inst_9832,inst_9833,inst_9834,inst_9835,inst_9836,inst_9837,inst_9838,inst_9839,state_val_9902,c__6203__auto___9950){
return (function (life,v){if((life < 0.5))
{return life;
} else
{return ((1) - life);
}
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,inst_9830,inst_9831,inst_9832,inst_9833,inst_9834,inst_9835,inst_9836,inst_9837,inst_9838,inst_9839,state_val_9902,c__6203__auto___9950))
})();var inst_9841 = [inst_9839,inst_9840];var inst_9842 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9841,null));var inst_9843 = [new cljs.core.Keyword(null,"color","color",1011675173),(1)];var inst_9844 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9843,null));var inst_9845 = (function (){return ((function (inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,inst_9830,inst_9831,inst_9832,inst_9833,inst_9834,inst_9835,inst_9836,inst_9837,inst_9838,inst_9839,inst_9840,inst_9841,inst_9842,inst_9843,inst_9844,state_val_9902,c__6203__auto___9950){
return (function (life,v){return life;
});
;})(inst_9755,inst_9756,inst_9757,inst_9758,inst_9759,inst_9760,inst_9761,inst_9762,inst_9763,inst_9764,inst_9765,inst_9766,inst_9767,inst_9768,inst_9769,inst_9770,inst_9771,inst_9772,inst_9773,inst_9774,inst_9775,inst_9776,inst_9777,inst_9778,inst_9779,inst_9780,inst_9781,inst_9782,inst_9783,inst_9784,inst_9785,inst_9786,inst_9787,inst_9788,inst_9789,inst_9790,inst_9791,inst_9792,inst_9793,inst_9794,inst_9795,inst_9796,inst_9797,inst_9798,inst_9799,inst_9800,inst_9801,inst_9802,inst_9803,inst_9804,inst_9805,inst_9806,inst_9807,inst_9808,inst_9809,inst_9810,inst_9811,inst_9812,inst_9813,inst_9814,inst_9815,inst_9816,inst_9817,inst_9818,inst_9819,inst_9820,inst_9821,inst_9822,inst_9823,inst_9824,inst_9825,inst_9826,inst_9827,inst_9828,inst_9829,inst_9830,inst_9831,inst_9832,inst_9833,inst_9834,inst_9835,inst_9836,inst_9837,inst_9838,inst_9839,inst_9840,inst_9841,inst_9842,inst_9843,inst_9844,state_val_9902,c__6203__auto___9950))
})();var inst_9846 = [inst_9844,inst_9845];var inst_9847 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9846,null));var inst_9848 = [inst_9792,inst_9797,inst_9802,inst_9807,inst_9812,inst_9817,inst_9822,inst_9827,inst_9832,inst_9837,inst_9842,inst_9847];var inst_9849 = (new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9848,null));var inst_9850 = [(2),inst_9787,inst_9849];var inst_9851 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9764,inst_9850);var inst_9852 = [inst_9851];var inst_9853 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9852,null));var inst_9854 = [(1),0.1,-1.57,1.57,(50),inst_9853];var inst_9855 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9763,inst_9854);var inst_9856 = [(-1),inst_9758,inst_9760,inst_9762,inst_9855];var inst_9857 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9756,inst_9856);var inst_9858 = tool.particle.particle.call(null,inst_9857);var inst_9859 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9858);var inst_9860 = [(0),inst_9859];var inst_9861 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9755,inst_9860);var inst_9862 = inst_9861;var state_9901__$1 = (function (){var statearr_9905 = state_9901;(statearr_9905[(7)] = inst_9862);
return statearr_9905;
})();var statearr_9906_9952 = state_9901__$1;(statearr_9906_9952[(2)] = null);
(statearr_9906_9952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (4)))
{var inst_9870 = (state_9901[(8)]);var inst_9868 = (state_9901[(2)]);var inst_9869 = cljs.core.nth.call(null,inst_9868,(0),null);var inst_9870__$1 = cljs.core.nth.call(null,inst_9868,(1),null);var inst_9874 = cljs.core._EQ_.call(null,app.react.onTick,inst_9870__$1);var state_9901__$1 = (function (){var statearr_9907 = state_9901;(statearr_9907[(9)] = inst_9869);
(statearr_9907[(8)] = inst_9870__$1);
return statearr_9907;
})();if(inst_9874)
{var statearr_9908_9953 = state_9901__$1;(statearr_9908_9953[(1)] = (5));
} else
{var statearr_9909_9954 = state_9901__$1;(statearr_9909_9954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (6)))
{var inst_9870 = (state_9901[(8)]);var inst_9884 = cljs.core._EQ_.call(null,app.react.onImage,inst_9870);var state_9901__$1 = state_9901;if(inst_9884)
{var statearr_9910_9955 = state_9901__$1;(statearr_9910_9955[(1)] = (8));
} else
{var statearr_9911_9956 = state_9901__$1;(statearr_9911_9956[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (3)))
{var inst_9899 = (state_9901[(2)]);var state_9901__$1 = state_9901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9901__$1,inst_9899);
} else
{if((state_val_9902 === (2)))
{var inst_9865 = [app.react.onTick,app.react.onImage];var inst_9866 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9865,null));var state_9901__$1 = state_9901;return cljs.core.async.ioc_alts_BANG_.call(null,state_9901__$1,(4),inst_9866);
} else
{if((state_val_9902 === (9)))
{var inst_9862 = (state_9901[(7)]);var state_9901__$1 = state_9901;var statearr_9912_9957 = state_9901__$1;(statearr_9912_9957[(2)] = inst_9862);
(statearr_9912_9957[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (5)))
{var inst_9862 = (state_9901[(7)]);var inst_9869 = (state_9901[(9)]);var inst_9876 = $("#canvas");var inst_9877 = tool.particle.update.call(null,inst_9869,inst_9862);var inst_9878 = app.main.draw.call(null,inst_9876,inst_9877);var inst_9879 = app.main.draw3D.call(null,inst_9878);var inst_9880 = [new cljs.core.Keyword(null,"timer","timer",-1266967739)];var inst_9881 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9880,null));var inst_9882 = cljs.core.update_in.call(null,inst_9879,inst_9881,cljs.core._PLUS_,inst_9869);var state_9901__$1 = state_9901;var statearr_9913_9958 = state_9901__$1;(statearr_9913_9958[(2)] = inst_9882);
(statearr_9913_9958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (10)))
{var inst_9894 = (state_9901[(2)]);var state_9901__$1 = state_9901;var statearr_9914_9959 = state_9901__$1;(statearr_9914_9959[(2)] = inst_9894);
(statearr_9914_9959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9902 === (8)))
{var inst_9862 = (state_9901[(7)]);var inst_9869 = (state_9901[(9)]);var inst_9887 = cljs.core.nth.call(null,inst_9869,(0),null);var inst_9888 = cljs.core.nth.call(null,inst_9869,(1),null);var inst_9889 = [new cljs.core.Keyword(null,"image","image",-58725096),inst_9887];var inst_9890 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9889,null));var inst_9891 = cljs.core.assoc_in.call(null,inst_9862,inst_9890,inst_9888);var state_9901__$1 = state_9901;var statearr_9915_9960 = state_9901__$1;(statearr_9915_9960[(2)] = inst_9891);
(statearr_9915_9960[(1)] = (10));
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
});})(c__6203__auto___9950))
;return ((function (switch__6188__auto__,c__6203__auto___9950){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9919 = [null,null,null,null,null,null,null,null,null,null];(statearr_9919[(0)] = state_machine__6189__auto__);
(statearr_9919[(1)] = (1));
return statearr_9919;
});
var state_machine__6189__auto____1 = (function (state_9901){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9901);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9920){if((e9920 instanceof Object))
{var ex__6192__auto__ = e9920;var statearr_9921_9961 = state_9901;(statearr_9921_9961[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9962 = state_9901;
state_9901 = G__9962;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9901){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___9950))
})();var state__6205__auto__ = (function (){var statearr_9922 = f__6204__auto__.call(null);(statearr_9922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___9950);
return statearr_9922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___9950))
);
var face_9963 = (new Image());face_9963.src = "res/images/m_gr.jpg";
face_9963.onload = ((function (face_9963){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,face_9963){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,face_9963){
return (function (state_9928){var state_val_9929 = (state_9928[(1)]);if((state_val_9929 === (2)))
{var inst_9926 = (state_9928[(2)]);var state_9928__$1 = state_9928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9928__$1,inst_9926);
} else
{if((state_val_9929 === (1)))
{var inst_9923 = [new cljs.core.Keyword(null,"face","face",-1356480717),face_9963];var inst_9924 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9923,null));var state_9928__$1 = state_9928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9928__$1,(2),app.react.onImage,inst_9924);
} else
{return null;
}
}
});})(c__6203__auto__,face_9963))
;return ((function (switch__6188__auto__,c__6203__auto__,face_9963){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9933 = [null,null,null,null,null,null,null];(statearr_9933[(0)] = state_machine__6189__auto__);
(statearr_9933[(1)] = (1));
return statearr_9933;
});
var state_machine__6189__auto____1 = (function (state_9928){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9934){if((e9934 instanceof Object))
{var ex__6192__auto__ = e9934;var statearr_9935_9964 = state_9928;(statearr_9935_9964[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9965 = state_9928;
state_9928 = G__9965;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9928){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,face_9963))
})();var state__6205__auto__ = (function (){var statearr_9936 = f__6204__auto__.call(null);(statearr_9936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,face_9963))
);
return c__6203__auto__;
});})(face_9963))
;
setInterval(cljs.core.apply.call(null,(function (curr_time){var last_time = cljs.core.atom.call(null,curr_time);return ((function (last_time){
return (function (){var curr_time__$1 = (new Date()).getTime();var elapsed = (curr_time__$1 - cljs.core.deref.call(null,last_time));var c__6203__auto___9966 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___9966,curr_time__$1,elapsed,last_time){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___9966,curr_time__$1,elapsed,last_time){
return (function (state_9941){var state_val_9942 = (state_9941[(1)]);if((state_val_9942 === (2)))
{var inst_9939 = (state_9941[(2)]);var state_9941__$1 = state_9941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9941__$1,inst_9939);
} else
{if((state_val_9942 === (1)))
{var inst_9937 = (elapsed / (1000));var state_9941__$1 = state_9941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9941__$1,(2),app.react.onTick,inst_9937);
} else
{return null;
}
}
});})(c__6203__auto___9966,curr_time__$1,elapsed,last_time))
;return ((function (switch__6188__auto__,c__6203__auto___9966,curr_time__$1,elapsed,last_time){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9946 = [null,null,null,null,null,null,null];(statearr_9946[(0)] = state_machine__6189__auto__);
(statearr_9946[(1)] = (1));
return statearr_9946;
});
var state_machine__6189__auto____1 = (function (state_9941){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9941);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9947){if((e9947 instanceof Object))
{var ex__6192__auto__ = e9947;var statearr_9948_9967 = state_9941;(statearr_9948_9967[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9941);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9968 = state_9941;
state_9941 = G__9968;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9941){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___9966,curr_time__$1,elapsed,last_time))
})();var state__6205__auto__ = (function (){var statearr_9949 = f__6204__auto__.call(null);(statearr_9949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___9966);
return statearr_9949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___9966,curr_time__$1,elapsed,last_time))
);
return cljs.core.reset_BANG_.call(null,last_time,curr_time__$1);
});
;})(last_time))
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Date()).getTime()], null)),(33));
return null;
});
app.main.main.call(null);
