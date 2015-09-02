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
return (function (p__24385){var map__24386 = p__24385;var map__24386__$1 = ((cljs.core.seq_QMARK_.call(null,map__24386))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);var ctx = map__24386__$1;var map__24387 = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__24387__$1 = ((cljs.core.seq_QMARK_.call(null,map__24387))?cljs.core.apply.call(null,cljs.core.hash_map,map__24387):map__24387);var ps = cljs.core.get.call(null,map__24387__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var G__24388_24403 = canvas_ctx;(G__24388_24403["fillStyle"] = "white");
G__24388_24403.fillRect((0),(0),canvas_dom.width,canvas_dom.height);
(G__24388_24403["fillStyle"] = "red");
G__24388_24403.fillText(("count:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))),(50),(50));
var seq__24389_24404 = cljs.core.seq.call(null,ps);var chunk__24390_24405 = null;var count__24391_24406 = (0);var i__24392_24407 = (0);while(true){
if((i__24392_24407 < count__24391_24406))
{var map__24393_24408 = cljs.core._nth.call(null,chunk__24390_24405,i__24392_24407);var map__24393_24409__$1 = ((cljs.core.seq_QMARK_.call(null,map__24393_24408))?cljs.core.apply.call(null,cljs.core.hash_map,map__24393_24408):map__24393_24408);var p_24410 = map__24393_24409__$1;var vec__24394_24411 = cljs.core.get.call(null,map__24393_24409__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_24412 = cljs.core.nth.call(null,vec__24394_24411,(0),null);var y_24413 = cljs.core.nth.call(null,vec__24394_24411,(1),null);var rot_24414 = cljs.core.nth.call(null,vec__24394_24411,(2),null);var vec__24395_24415 = cljs.core.get.call(null,map__24393_24409__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_24416 = cljs.core.nth.call(null,vec__24395_24415,(0),null);var ys_24417 = cljs.core.nth.call(null,vec__24395_24415,(1),null);var vec__24396_24418 = cljs.core.get.call(null,map__24393_24409__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_24419 = cljs.core.nth.call(null,vec__24396_24418,(0),null);var g_24420 = cljs.core.nth.call(null,vec__24396_24418,(1),null);var b_24421 = cljs.core.nth.call(null,vec__24396_24418,(2),null);var a_24422 = cljs.core.nth.call(null,vec__24396_24418,(3),null);var G__24397_24423 = canvas_ctx;G__24397_24423.save();
G__24397_24423.translate(x_24412,y_24413);
G__24397_24423.rotate(rot_24414);
(G__24397_24423["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_24419 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_24420 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_24421 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_24422)+")"));
G__24397_24423.fillRect((- (xs_24416 / (2))),(- (ys_24417 / (2))),xs_24416,ys_24417);
G__24397_24423.restore();
{
var G__24424 = seq__24389_24404;
var G__24425 = chunk__24390_24405;
var G__24426 = count__24391_24406;
var G__24427 = (i__24392_24407 + (1));
seq__24389_24404 = G__24424;
chunk__24390_24405 = G__24425;
count__24391_24406 = G__24426;
i__24392_24407 = G__24427;
continue;
}
} else
{var temp__4126__auto___24428 = cljs.core.seq.call(null,seq__24389_24404);if(temp__4126__auto___24428)
{var seq__24389_24429__$1 = temp__4126__auto___24428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24389_24429__$1))
{var c__4307__auto___24430 = cljs.core.chunk_first.call(null,seq__24389_24429__$1);{
var G__24431 = cljs.core.chunk_rest.call(null,seq__24389_24429__$1);
var G__24432 = c__4307__auto___24430;
var G__24433 = cljs.core.count.call(null,c__4307__auto___24430);
var G__24434 = (0);
seq__24389_24404 = G__24431;
chunk__24390_24405 = G__24432;
count__24391_24406 = G__24433;
i__24392_24407 = G__24434;
continue;
}
} else
{var map__24398_24435 = cljs.core.first.call(null,seq__24389_24429__$1);var map__24398_24436__$1 = ((cljs.core.seq_QMARK_.call(null,map__24398_24435))?cljs.core.apply.call(null,cljs.core.hash_map,map__24398_24435):map__24398_24435);var p_24437 = map__24398_24436__$1;var vec__24399_24438 = cljs.core.get.call(null,map__24398_24436__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x_24439 = cljs.core.nth.call(null,vec__24399_24438,(0),null);var y_24440 = cljs.core.nth.call(null,vec__24399_24438,(1),null);var rot_24441 = cljs.core.nth.call(null,vec__24399_24438,(2),null);var vec__24400_24442 = cljs.core.get.call(null,map__24398_24436__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs_24443 = cljs.core.nth.call(null,vec__24400_24442,(0),null);var ys_24444 = cljs.core.nth.call(null,vec__24400_24442,(1),null);var vec__24401_24445 = cljs.core.get.call(null,map__24398_24436__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r_24446 = cljs.core.nth.call(null,vec__24401_24445,(0),null);var g_24447 = cljs.core.nth.call(null,vec__24401_24445,(1),null);var b_24448 = cljs.core.nth.call(null,vec__24401_24445,(2),null);var a_24449 = cljs.core.nth.call(null,vec__24401_24445,(3),null);var G__24402_24450 = canvas_ctx;G__24402_24450.save();
G__24402_24450.translate(x_24439,y_24440);
G__24402_24450.rotate(rot_24441);
(G__24402_24450["fillStyle"] = ("rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_24446 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_24447 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_24448 * (255)) | (0)))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_24449)+")"));
G__24402_24450.fillRect((- (xs_24443 / (2))),(- (ys_24444 / (2))),xs_24443,ys_24444);
G__24402_24450.restore();
{
var G__24451 = cljs.core.next.call(null,seq__24389_24429__$1);
var G__24452 = null;
var G__24453 = (0);
var G__24454 = (0);
seq__24389_24404 = G__24451;
chunk__24390_24405 = G__24452;
count__24391_24406 = G__24453;
i__24392_24407 = G__24454;
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
app.particle.draw.draw3D = (function draw3D(canvas){var canvas_dom = (canvas[(0)]);var gl__$1 = gl.util.getContext.call(null,canvas_dom,(function (){var obj24483 = {};return obj24483;
})());var mesh = gl.mesh.plain.call(null,gl__$1);var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);var vec__24481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);var cw = cljs.core.nth.call(null,vec__24481,(0),null);var ch = cljs.core.nth.call(null,vec__24481,(1),null);return ((function (canvas_dom,gl__$1,mesh,sprite_shader,vec__24481,cw,ch){
return (function (p__24484){var map__24485 = p__24484;var map__24485__$1 = ((cljs.core.seq_QMARK_.call(null,map__24485))?cljs.core.apply.call(null,cljs.core.hash_map,map__24485):map__24485);var ctx = map__24485__$1;var timer = cljs.core.get.call(null,map__24485__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var map__24486 = cljs.core.get.call(null,map__24485__$1,new cljs.core.Keyword(null,"part","part",77757738));var map__24486__$1 = ((cljs.core.seq_QMARK_.call(null,map__24486))?cljs.core.apply.call(null,cljs.core.hash_map,map__24486):map__24486);var ps = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"ps","ps",292358046));gl__$1.viewport((0),(0),cw,ch);
gl__$1.clearColor((0),(0),(0),(1));
gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);
gl__$1.enable(gl__$1.BLEND);
gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
var temp__4130__auto___24507 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"face","face",-1356480717)], null));if((temp__4130__auto___24507 == null))
{} else
{var faceImg_24508 = temp__4130__auto___24507;var tex_24509 = app.particle.draw.cacheTex.call(null,gl__$1,faceImg_24508);gl.shader.use.call(null,gl__$1,sprite_shader,((function (tex_24509,faceImg_24508,temp__4130__auto___24507,map__24485,map__24485__$1,ctx,timer,map__24486,map__24486__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__24481,cw,ch){
return (function (pobj){var seq__24487 = cljs.core.seq.call(null,ps);var chunk__24488 = null;var count__24489 = (0);var i__24490 = (0);while(true){
if((i__24490 < count__24489))
{var map__24491 = cljs.core._nth.call(null,chunk__24488,i__24490);var map__24491__$1 = ((cljs.core.seq_QMARK_.call(null,map__24491))?cljs.core.apply.call(null,cljs.core.hash_map,map__24491):map__24491);var p = map__24491__$1;var vec__24492 = cljs.core.get.call(null,map__24491__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__24492,(0),null);var y = cljs.core.nth.call(null,vec__24492,(1),null);var rot = cljs.core.nth.call(null,vec__24492,(2),null);var vec__24493 = cljs.core.get.call(null,map__24491__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__24493,(0),null);var ys = cljs.core.nth.call(null,vec__24493,(1),null);var vec__24494 = cljs.core.get.call(null,map__24491__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__24494,(0),null);var g = cljs.core.nth.call(null,vec__24494,(1),null);var b = cljs.core.nth.call(null,vec__24494,(2),null);var a = cljs.core.nth.call(null,vec__24494,(3),null);var proj_24510 = (function (){var G__24495 = (new THREE.Matrix4());G__24495.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__24495;
})();var tras_24511 = (function (){var G__24496 = (new THREE.Matrix4());G__24496.makeTranslation(x,y,(0));
G__24496.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__24496.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__24496;
})();var texTx_24512 = (function (){var G__24497 = (new THREE.Matrix3());return G__24497;
})();var colorTx_24513 = (function (){var G__24498 = (new THREE.Matrix4());G__24498.makeTranslation(r,g,b);
return G__24498;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_24510.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_24511.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_24509,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_24512.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_24513.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__24514 = seq__24487;
var G__24515 = chunk__24488;
var G__24516 = count__24489;
var G__24517 = (i__24490 + (1));
seq__24487 = G__24514;
chunk__24488 = G__24515;
count__24489 = G__24516;
i__24490 = G__24517;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24487);if(temp__4126__auto__)
{var seq__24487__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24487__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24487__$1);{
var G__24518 = cljs.core.chunk_rest.call(null,seq__24487__$1);
var G__24519 = c__4307__auto__;
var G__24520 = cljs.core.count.call(null,c__4307__auto__);
var G__24521 = (0);
seq__24487 = G__24518;
chunk__24488 = G__24519;
count__24489 = G__24520;
i__24490 = G__24521;
continue;
}
} else
{var map__24499 = cljs.core.first.call(null,seq__24487__$1);var map__24499__$1 = ((cljs.core.seq_QMARK_.call(null,map__24499))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);var p = map__24499__$1;var vec__24500 = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__24500,(0),null);var y = cljs.core.nth.call(null,vec__24500,(1),null);var rot = cljs.core.nth.call(null,vec__24500,(2),null);var vec__24501 = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"size","size",1098693007));var xs = cljs.core.nth.call(null,vec__24501,(0),null);var ys = cljs.core.nth.call(null,vec__24501,(1),null);var vec__24502 = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"color","color",1011675173));var r = cljs.core.nth.call(null,vec__24502,(0),null);var g = cljs.core.nth.call(null,vec__24502,(1),null);var b = cljs.core.nth.call(null,vec__24502,(2),null);var a = cljs.core.nth.call(null,vec__24502,(3),null);var proj_24522 = (function (){var G__24503 = (new THREE.Matrix4());G__24503.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__24503;
})();var tras_24523 = (function (){var G__24504 = (new THREE.Matrix4());G__24504.makeTranslation(x,y,(0));
G__24504.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__24504.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__24504;
})();var texTx_24524 = (function (){var G__24505 = (new THREE.Matrix3());return G__24505;
})();var colorTx_24525 = (function (){var G__24506 = (new THREE.Matrix4());G__24506.makeTranslation(r,g,b);
return G__24506;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj_24522.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras_24523.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex_24509,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx_24524.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx_24525.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
{
var G__24526 = cljs.core.next.call(null,seq__24487__$1);
var G__24527 = null;
var G__24528 = (0);
var G__24529 = (0);
seq__24487 = G__24526;
chunk__24488 = G__24527;
count__24489 = G__24528;
i__24490 = G__24529;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(tex_24509,faceImg_24508,temp__4130__auto___24507,map__24485,map__24485__$1,ctx,timer,map__24486,map__24486__$1,ps,canvas_dom,gl__$1,mesh,sprite_shader,vec__24481,cw,ch))
);
}
gl__$1.disable(gl__$1.BLEND);
return ctx;
});
;})(canvas_dom,gl__$1,mesh,sprite_shader,vec__24481,cw,ch))
});
