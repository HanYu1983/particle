// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.particle.draw');
goog.require('cljs.core');
goog.require('gl.util');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.shader');
goog.require('tool.particle');
app.particle.draw.draw2D = (function app$particle$draw$draw2D(canvas){
var canvas_dom = (canvas[(0)]);
var canvas_ctx = canvas_dom.getContext("2d");
return ((function (canvas_dom,canvas_ctx){
return (function (p__5500){
var map__5501 = p__5500;
var map__5501__$1 = ((((!((map__5501 == null)))?(((((map__5501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5501):map__5501);
var ctx = map__5501__$1;
var map__5502 = cljs.core.get.call(null,map__5501__$1,new cljs.core.Keyword(null,"part","part",77757738));
var map__5502__$1 = ((((!((map__5502 == null)))?(((((map__5502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5502):map__5502);
var ps = cljs.core.get.call(null,map__5502__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var G__5505_5534 = canvas_ctx;
(G__5505_5534["fillStyle"] = "white");

G__5505_5534.fillRect((0),(0),canvas_dom.width,canvas_dom.height);

(G__5505_5534["fillStyle"] = "red");

G__5505_5534.fillText(["count:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,ps))].join(''),(50),(50));


var seq__5506_5535 = cljs.core.seq.call(null,ps);
var chunk__5507_5536 = null;
var count__5508_5537 = (0);
var i__5509_5538 = (0);
while(true){
if((i__5509_5538 < count__5508_5537)){
var map__5510_5539 = cljs.core._nth.call(null,chunk__5507_5536,i__5509_5538);
var map__5510_5540__$1 = ((((!((map__5510_5539 == null)))?(((((map__5510_5539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5510_5539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5510_5539):map__5510_5539);
var p_5541 = map__5510_5540__$1;
var vec__5511_5542 = cljs.core.get.call(null,map__5510_5540__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x_5543 = cljs.core.nth.call(null,vec__5511_5542,(0),null);
var y_5544 = cljs.core.nth.call(null,vec__5511_5542,(1),null);
var rot_5545 = cljs.core.nth.call(null,vec__5511_5542,(2),null);
var vec__5514_5546 = cljs.core.get.call(null,map__5510_5540__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs_5547 = cljs.core.nth.call(null,vec__5514_5546,(0),null);
var ys_5548 = cljs.core.nth.call(null,vec__5514_5546,(1),null);
var vec__5517_5549 = cljs.core.get.call(null,map__5510_5540__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r_5550 = cljs.core.nth.call(null,vec__5517_5549,(0),null);
var g_5551 = cljs.core.nth.call(null,vec__5517_5549,(1),null);
var b_5552 = cljs.core.nth.call(null,vec__5517_5549,(2),null);
var a_5553 = cljs.core.nth.call(null,vec__5517_5549,(3),null);
var G__5521_5554 = canvas_ctx;
G__5521_5554.save();

G__5521_5554.translate(x_5543,y_5544);

G__5521_5554.rotate(rot_5545);

(G__5521_5554["fillStyle"] = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_5550 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_5551 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_5552 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_5553),")"].join(''));

G__5521_5554.fillRect((- (xs_5547 / (2))),(- (ys_5548 / (2))),xs_5547,ys_5548);

G__5521_5554.restore();



var G__5555 = seq__5506_5535;
var G__5556 = chunk__5507_5536;
var G__5557 = count__5508_5537;
var G__5558 = (i__5509_5538 + (1));
seq__5506_5535 = G__5555;
chunk__5507_5536 = G__5556;
count__5508_5537 = G__5557;
i__5509_5538 = G__5558;
continue;
} else {
var temp__5457__auto___5559 = cljs.core.seq.call(null,seq__5506_5535);
if(temp__5457__auto___5559){
var seq__5506_5560__$1 = temp__5457__auto___5559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5506_5560__$1)){
var c__4319__auto___5561 = cljs.core.chunk_first.call(null,seq__5506_5560__$1);
var G__5562 = cljs.core.chunk_rest.call(null,seq__5506_5560__$1);
var G__5563 = c__4319__auto___5561;
var G__5564 = cljs.core.count.call(null,c__4319__auto___5561);
var G__5565 = (0);
seq__5506_5535 = G__5562;
chunk__5507_5536 = G__5563;
count__5508_5537 = G__5564;
i__5509_5538 = G__5565;
continue;
} else {
var map__5522_5566 = cljs.core.first.call(null,seq__5506_5560__$1);
var map__5522_5567__$1 = ((((!((map__5522_5566 == null)))?(((((map__5522_5566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5522_5566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5522_5566):map__5522_5566);
var p_5568 = map__5522_5567__$1;
var vec__5523_5569 = cljs.core.get.call(null,map__5522_5567__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x_5570 = cljs.core.nth.call(null,vec__5523_5569,(0),null);
var y_5571 = cljs.core.nth.call(null,vec__5523_5569,(1),null);
var rot_5572 = cljs.core.nth.call(null,vec__5523_5569,(2),null);
var vec__5526_5573 = cljs.core.get.call(null,map__5522_5567__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs_5574 = cljs.core.nth.call(null,vec__5526_5573,(0),null);
var ys_5575 = cljs.core.nth.call(null,vec__5526_5573,(1),null);
var vec__5529_5576 = cljs.core.get.call(null,map__5522_5567__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r_5577 = cljs.core.nth.call(null,vec__5529_5576,(0),null);
var g_5578 = cljs.core.nth.call(null,vec__5529_5576,(1),null);
var b_5579 = cljs.core.nth.call(null,vec__5529_5576,(2),null);
var a_5580 = cljs.core.nth.call(null,vec__5529_5576,(3),null);
var G__5533_5581 = canvas_ctx;
G__5533_5581.save();

G__5533_5581.translate(x_5570,y_5571);

G__5533_5581.rotate(rot_5572);

(G__5533_5581["fillStyle"] = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((r_5577 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((g_5578 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((b_5579 * (255)) | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_5580),")"].join(''));

G__5533_5581.fillRect((- (xs_5574 / (2))),(- (ys_5575 / (2))),xs_5574,ys_5575);

G__5533_5581.restore();



var G__5582 = cljs.core.next.call(null,seq__5506_5560__$1);
var G__5583 = null;
var G__5584 = (0);
var G__5585 = (0);
seq__5506_5535 = G__5582;
chunk__5507_5536 = G__5583;
count__5508_5537 = G__5584;
i__5509_5538 = G__5585;
continue;
}
} else {
}
}
break;
}

return ctx;
});
;})(canvas_dom,canvas_ctx))
});
app.particle.draw.draw3D = (function app$particle$draw$draw3D(canvas,gl__$1){
var canvas_dom = canvas;
var mesh = gl.mesh.plain.call(null,gl__$1);
var sprite_shader = gl.shader.spriteProgramObject.call(null,gl__$1);
var vec__5586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_dom.width,canvas_dom.height], null);
var cw = cljs.core.nth.call(null,vec__5586,(0),null);
var ch = cljs.core.nth.call(null,vec__5586,(1),null);
var proj = (function (){var G__5589 = (new THREE.Matrix4());
G__5589.makeOrthographic((0),cw,ch,(0),(1),(-1));

return G__5589;
})();
var tras = (new THREE.Matrix4());
var rotMat = (new THREE.Matrix4());
var scaleMat = (new THREE.Matrix4());
var texTx = (new THREE.Matrix3());
var colorTx = (new THREE.Matrix4());
gl__$1.viewport((0),(0),cw,ch);

return ((function (canvas_dom,mesh,sprite_shader,vec__5586,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (p__5590){
var map__5591 = p__5590;
var map__5591__$1 = ((((!((map__5591 == null)))?(((((map__5591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5591):map__5591);
var ctx = map__5591__$1;
var vec__5592 = cljs.core.get.call(null,map__5591__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));
var cx = cljs.core.nth.call(null,vec__5592,(0),null);
var cy = cljs.core.nth.call(null,vec__5592,(1),null);
var vec__5595 = cljs.core.get.call(null,map__5591__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));
var br = cljs.core.nth.call(null,vec__5595,(0),null);
var bg = cljs.core.nth.call(null,vec__5595,(1),null);
var bb = cljs.core.nth.call(null,vec__5595,(2),null);
var map__5598 = cljs.core.get.call(null,map__5591__$1,new cljs.core.Keyword(null,"part","part",77757738));
var map__5598__$1 = ((((!((map__5598 == null)))?(((((map__5598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5598):map__5598);
var ps = cljs.core.get.call(null,map__5598__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
gl__$1.clearColor((function (){var or__3922__auto__ = br;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),(function (){var or__3922__auto__ = bg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),(function (){var or__3922__auto__ = bb;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),(1));

gl__$1.clear(gl__$1.COLOR_BUFFER_BIT);

gl.shader.use.call(null,gl__$1,sprite_shader,((function (map__5591,map__5591__$1,ctx,vec__5592,cx,cy,vec__5595,br,bg,bb,map__5598,map__5598__$1,ps,canvas_dom,mesh,sprite_shader,vec__5586,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx){
return (function (pobj){
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));

gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));

var seq__5601 = cljs.core.seq.call(null,ps);
var chunk__5602 = null;
var count__5603 = (0);
var i__5604 = (0);
while(true){
if((i__5604 < count__5603)){
var map__5605 = cljs.core._nth.call(null,chunk__5602,i__5604);
var map__5605__$1 = ((((!((map__5605 == null)))?(((((map__5605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5605):map__5605);
var p = map__5605__$1;
var vec__5606 = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__5606,(0),null);
var y = cljs.core.nth.call(null,vec__5606,(1),null);
var rot = cljs.core.nth.call(null,vec__5606,(2),null);
var vec__5609 = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs = cljs.core.nth.call(null,vec__5609,(0),null);
var ys = cljs.core.nth.call(null,vec__5609,(1),null);
var vec__5612 = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r = cljs.core.nth.call(null,vec__5612,(0),null);
var g = cljs.core.nth.call(null,vec__5612,(1),null);
var b = cljs.core.nth.call(null,vec__5612,(2),null);
var a = cljs.core.nth.call(null,vec__5612,(3),null);
var tex = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var blending = cljs.core.get.call(null,map__5605__$1,new cljs.core.Keyword(null,"blending","blending",31165821));
var texObj_5643 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));
var G__5616_5644 = rotMat;
G__5616_5644.makeRotationZ(rot);


var G__5617_5645 = scaleMat;
G__5617_5645.makeScale(xs,ys,(1));


var G__5618_5646 = tras;
G__5618_5646.makeTranslation((cx + x),(cy + y),(0));

G__5618_5646.multiply(rotMat);

G__5618_5646.multiply(scaleMat);


var G__5619_5647 = colorTx;
G__5619_5647.makeTranslation(r,g,b);


cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__5620 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
if(cljs.core.truth_(texObj_5643)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_5643,(0)], null)], null),G__5620);
} else {
return G__5620;
}
})());

if(cljs.core.truth_(texObj_5643)){
} else {
gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}

if(cljs.core.truth_(blending)){
var pred__5621_5648 = cljs.core._EQ_;
var expr__5622_5649 = blending;
if(cljs.core.truth_(pred__5621_5648.call(null,"normal",expr__5622_5649))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else {
if(cljs.core.truth_(pred__5621_5648.call(null,"add",expr__5622_5649))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else {
gl__$1.disable(gl__$1.BLEND);
}
}
} else {
}

gl.mesh.draw.call(null,gl__$1,mesh,null);


var G__5650 = seq__5601;
var G__5651 = chunk__5602;
var G__5652 = count__5603;
var G__5653 = (i__5604 + (1));
seq__5601 = G__5650;
chunk__5602 = G__5651;
count__5603 = G__5652;
i__5604 = G__5653;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5601);
if(temp__5457__auto__){
var seq__5601__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5601__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5601__$1);
var G__5654 = cljs.core.chunk_rest.call(null,seq__5601__$1);
var G__5655 = c__4319__auto__;
var G__5656 = cljs.core.count.call(null,c__4319__auto__);
var G__5657 = (0);
seq__5601 = G__5654;
chunk__5602 = G__5655;
count__5603 = G__5656;
i__5604 = G__5657;
continue;
} else {
var map__5624 = cljs.core.first.call(null,seq__5601__$1);
var map__5624__$1 = ((((!((map__5624 == null)))?(((((map__5624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5624):map__5624);
var p = map__5624__$1;
var vec__5625 = cljs.core.get.call(null,map__5624__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__5625,(0),null);
var y = cljs.core.nth.call(null,vec__5625,(1),null);
var rot = cljs.core.nth.call(null,vec__5625,(2),null);
var vec__5628 = cljs.core.get.call(null,map__5624__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var xs = cljs.core.nth.call(null,vec__5628,(0),null);
var ys = cljs.core.nth.call(null,vec__5628,(1),null);
var vec__5631 = cljs.core.get.call(null,map__5624__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r = cljs.core.nth.call(null,vec__5631,(0),null);
var g = cljs.core.nth.call(null,vec__5631,(1),null);
var b = cljs.core.nth.call(null,vec__5631,(2),null);
var a = cljs.core.nth.call(null,vec__5631,(3),null);
var tex = cljs.core.get.call(null,map__5624__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var blending = cljs.core.get.call(null,map__5624__$1,new cljs.core.Keyword(null,"blending","blending",31165821));
var texObj_5658 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),tex], null));
var G__5635_5659 = rotMat;
G__5635_5659.makeRotationZ(rot);


var G__5636_5660 = scaleMat;
G__5636_5660.makeScale(xs,ys,(1));


var G__5637_5661 = tras;
G__5637_5661.makeTranslation((cx + x),(cy + y),(0));

G__5637_5661.multiply(rotMat);

G__5637_5661.multiply(scaleMat);


var G__5638_5662 = colorTx;
G__5638_5662.makeTranslation(r,g,b);


cljs.core.apply.call(null,cljs.core.partial.call(null,gl.shader.uniform,gl__$1,pobj),(function (){var G__5639 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_alpha","u_alpha",-1812334099),"1f",a], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
if(cljs.core.truth_(texObj_5658)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [texObj_5658,(0)], null)], null),G__5639);
} else {
return G__5639;
}
})());

if(cljs.core.truth_(texObj_5658)){
} else {
gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
}

if(cljs.core.truth_(blending)){
var pred__5640_5663 = cljs.core._EQ_;
var expr__5641_5664 = blending;
if(cljs.core.truth_(pred__5640_5663.call(null,"normal",expr__5641_5664))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.SRC_ALPHA,gl__$1.ONE_MINUS_SRC_ALPHA);
} else {
if(cljs.core.truth_(pred__5640_5663.call(null,"add",expr__5641_5664))){
gl__$1.enable(gl__$1.BLEND);

gl__$1.blendFunc(gl__$1.ONE,gl__$1.ONE);
} else {
gl__$1.disable(gl__$1.BLEND);
}
}
} else {
}

gl.mesh.draw.call(null,gl__$1,mesh,null);


var G__5665 = cljs.core.next.call(null,seq__5601__$1);
var G__5666 = null;
var G__5667 = (0);
var G__5668 = (0);
seq__5601 = G__5665;
chunk__5602 = G__5666;
count__5603 = G__5667;
i__5604 = G__5668;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__5591,map__5591__$1,ctx,vec__5592,cx,cy,vec__5595,br,bg,bb,map__5598,map__5598__$1,ps,canvas_dom,mesh,sprite_shader,vec__5586,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
);

return ctx;
});
;})(canvas_dom,mesh,sprite_shader,vec__5586,cw,ch,proj,tras,rotMat,scaleMat,texTx,colorTx))
});
app.particle.draw.drawThree = (function app$particle$draw$drawThree(elem){
var useWebgl_QMARK_ = true;
var vec__5669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null);
var w = cljs.core.nth.call(null,vec__5669,(0),null);
var h = cljs.core.nth.call(null,vec__5669,(1),null);
var scene = (new THREE.Scene());
var camera = THREE.OrthographicCamera((w / (-2)),(w / (2)),(h / (2)),(h / (-2)),(-500),(1000));
var renderer = ((useWebgl_QMARK_)?(new THREE.WebGLRenderer((function (){var obj5673 = {"antialias":true};
return obj5673;
})())):(new THREE.CanvasRenderer((function (){var obj5675 = {"antialias":true};
return obj5675;
})())));
var objs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var dirtyTag = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var createObject = ((function (useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag){
return (function (scene__$1,id,part){
var obj = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);
if(cljs.core.not.call(null,obj)){
var mat = (function (){var G__5676 = (new THREE.MeshBasicMaterial());
(G__5676["transparent"] = true);

return G__5676;
})();
var mash = THREE.Mesh((new THREE.PlaneBufferGeometry((1),(1))),mat);
cljs.core.swap_BANG_.call(null,objs,cljs.core.assoc,id,obj);

return scene__$1.add(obj);
} else {
return obj;
}
});})(useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag))
;
var removeObject = ((function (useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject){
return (function (id){
var temp__5455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,objs),id);
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return scene.remove(obj);
} else {
return null;
}
});})(useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject))
;
var markDirty = ((function (useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject){
return (function (id){
return cljs.core.swap_BANG_.call(null,dirtyTag,cljs.core.assoc,id,false);
});})(useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject))
;
var clearDirtyTag = ((function (useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty){
return (function (f){
return null;
});})(useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty))
;
camera.position.set((0),(0),(200));

renderer.setSize(w,h);

renderer.setClearColor((0),(1));

$(renderer.domElement).appendTo(elem);

return ((function (useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag){
return (function (p__5677){
var map__5678 = p__5677;
var map__5678__$1 = ((((!((map__5678 == null)))?(((((map__5678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5678):map__5678);
var ctx = map__5678__$1;
var vec__5679 = cljs.core.get.call(null,map__5678__$1,new cljs.core.Keyword(null,"centerPos","centerPos",-882328787));
var cx = cljs.core.nth.call(null,vec__5679,(0),null);
var cy = cljs.core.nth.call(null,vec__5679,(1),null);
var vec__5682 = cljs.core.get.call(null,map__5678__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));
var br = cljs.core.nth.call(null,vec__5682,(0),null);
var bg = cljs.core.nth.call(null,vec__5682,(1),null);
var bb = cljs.core.nth.call(null,vec__5682,(2),null);
var map__5685 = cljs.core.get.call(null,map__5678__$1,new cljs.core.Keyword(null,"part","part",77757738));
var map__5685__$1 = ((((!((map__5685 == null)))?(((((map__5685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5685):map__5685);
var ps = cljs.core.get.call(null,map__5685__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
return null;
});
;})(useWebgl_QMARK_,vec__5669,w,h,scene,camera,renderer,objs,dirtyTag,createObject,removeObject,markDirty,clearDirtyTag))
});

//# sourceMappingURL=draw.js.map
