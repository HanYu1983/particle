// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('ai.ann');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__14413_SHARP_){return cljs.core.nth.call(null,p1__14413_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__14414_SHARP_){return cljs.core.nth.call(null,p1__14414_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_brain = (function draw_brain(ctx,w,h,info,p__14415){var map__14432 = p__14415;var map__14432__$1 = ((cljs.core.seq_QMARK_.call(null,map__14432))?cljs.core.apply.call(null,cljs.core.hash_map,map__14432):map__14432);var brain = map__14432__$1;var steps = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"step","step",1288888124));var vec__14433 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14433,(0),null);var min_v = cljs.core.nth.call(null,vec__14433,(1),null);var offset_v = cljs.core.nth.call(null,vec__14433,(2),null);var offset_x = cljs.core.nth.call(null,vec__14433,(3),null);var pos_y = cljs.core.nth.call(null,vec__14433,(4),null);var money = test.stock2.calculate_money.call(null,(10000),(100),steps);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__14433,max_v,min_v,offset_v,offset_x,pos_y,money,map__14432,map__14432__$1,brain,steps){
return (function (p__14434){var vec__14435 = p__14434;var act = cljs.core.nth.call(null,vec__14435,(0),null);var line = cljs.core.nth.call(null,vec__14435,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__14433,max_v,min_v,offset_v,offset_x,pos_y,money,map__14432,map__14432__$1,brain,steps))
,steps)),info);(ctx["fillStyle"] = "black");
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(20),(20));
if(cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))
{ctx.fillText(("stock:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))),(20),(40));
} else
{}
var seq__14436 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14433,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__14432,map__14432__$1,brain,steps){
return (function() { 
var G__14448__delegate = function (args){return args;
};
var G__14448 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14448__delegate.call(this,args);};
G__14448.cljs$lang$maxFixedArity = 0;
G__14448.cljs$lang$applyTo = (function (arglist__14449){
var args = cljs.core.seq(arglist__14449);
return G__14448__delegate(args);
});
G__14448.cljs$core$IFn$_invoke$arity$variadic = G__14448__delegate;
return G__14448;
})()
;})(vec__14433,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__14432,map__14432__$1,brain,steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__14437 = null;var count__14438 = (0);var i__14439 = (0);while(true){
if((i__14439 < count__14438))
{var vec__14440 = cljs.core._nth.call(null,chunk__14437,i__14439);var idx = cljs.core.nth.call(null,vec__14440,(0),null);var curr = cljs.core.nth.call(null,vec__14440,(1),null);var pred__14441_14450 = cljs.core._EQ_;var expr__14442_14451 = curr;if(cljs.core.truth_(pred__14441_14450.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__14442_14451)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__14441_14450.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__14442_14451)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__14452 = seq__14436;
var G__14453 = chunk__14437;
var G__14454 = count__14438;
var G__14455 = (i__14439 + (1));
seq__14436 = G__14452;
chunk__14437 = G__14453;
count__14438 = G__14454;
i__14439 = G__14455;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14436);if(temp__4126__auto__)
{var seq__14436__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14436__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14436__$1);{
var G__14456 = cljs.core.chunk_rest.call(null,seq__14436__$1);
var G__14457 = c__4307__auto__;
var G__14458 = cljs.core.count.call(null,c__4307__auto__);
var G__14459 = (0);
seq__14436 = G__14456;
chunk__14437 = G__14457;
count__14438 = G__14458;
i__14439 = G__14459;
continue;
}
} else
{var vec__14444 = cljs.core.first.call(null,seq__14436__$1);var idx = cljs.core.nth.call(null,vec__14444,(0),null);var curr = cljs.core.nth.call(null,vec__14444,(1),null);var pred__14445_14460 = cljs.core._EQ_;var expr__14446_14461 = curr;if(cljs.core.truth_(pred__14445_14460.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__14446_14461)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__14445_14460.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__14446_14461)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__14462 = cljs.core.next.call(null,seq__14436__$1);
var G__14463 = null;
var G__14464 = (0);
var G__14465 = (0);
seq__14436 = G__14462;
chunk__14437 = G__14463;
count__14438 = G__14464;
i__14439 = G__14465;
continue;
}
}
} else
{return null;
}
}
break;
}
});
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__14473 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14473,(0),null);var min_v = cljs.core.nth.call(null,vec__14473,(1),null);var offset_v = cljs.core.nth.call(null,vec__14473,(2),null);var offset_x = cljs.core.nth.call(null,vec__14473,(3),null);var pos_y = cljs.core.nth.call(null,vec__14473,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__14474 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14473,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14480__delegate = function (args){return args;
};
var G__14480 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14480__delegate.call(this,args);};
G__14480.cljs$lang$maxFixedArity = 0;
G__14480.cljs$lang$applyTo = (function (arglist__14481){
var args = cljs.core.seq(arglist__14481);
return G__14480__delegate(args);
});
G__14480.cljs$core$IFn$_invoke$arity$variadic = G__14480__delegate;
return G__14480;
})()
;})(vec__14473,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__14475 = null;var count__14476 = (0);var i__14477 = (0);while(true){
if((i__14477 < count__14476))
{var vec__14478 = cljs.core._nth.call(null,chunk__14475,i__14477);var idx = cljs.core.nth.call(null,vec__14478,(0),null);var prev = cljs.core.nth.call(null,vec__14478,(1),null);var curr = cljs.core.nth.call(null,vec__14478,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14482 = seq__14474;
var G__14483 = chunk__14475;
var G__14484 = count__14476;
var G__14485 = (i__14477 + (1));
seq__14474 = G__14482;
chunk__14475 = G__14483;
count__14476 = G__14484;
i__14477 = G__14485;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14474);if(temp__4126__auto__)
{var seq__14474__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14474__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14474__$1);{
var G__14486 = cljs.core.chunk_rest.call(null,seq__14474__$1);
var G__14487 = c__4307__auto__;
var G__14488 = cljs.core.count.call(null,c__4307__auto__);
var G__14489 = (0);
seq__14474 = G__14486;
chunk__14475 = G__14487;
count__14476 = G__14488;
i__14477 = G__14489;
continue;
}
} else
{var vec__14479 = cljs.core.first.call(null,seq__14474__$1);var idx = cljs.core.nth.call(null,vec__14479,(0),null);var prev = cljs.core.nth.call(null,vec__14479,(1),null);var curr = cljs.core.nth.call(null,vec__14479,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14490 = cljs.core.next.call(null,seq__14474__$1);
var G__14491 = null;
var G__14492 = (0);
var G__14493 = (0);
seq__14474 = G__14490;
chunk__14475 = G__14491;
count__14476 = G__14492;
i__14477 = G__14493;
continue;
}
}
} else
{return null;
}
}
break;
}
});
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__14503 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14503,(0),null);var min_v = cljs.core.nth.call(null,vec__14503,(1),null);var offset_v = cljs.core.nth.call(null,vec__14503,(2),null);var offset_x = cljs.core.nth.call(null,vec__14503,(3),null);var pos_y = cljs.core.nth.call(null,vec__14503,(4),null);var seq__14504 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14503,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14512__delegate = function (args){return args;
};
var G__14512 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14512__delegate.call(this,args);};
G__14512.cljs$lang$maxFixedArity = 0;
G__14512.cljs$lang$applyTo = (function (arglist__14513){
var args = cljs.core.seq(arglist__14513);
return G__14512__delegate(args);
});
G__14512.cljs$core$IFn$_invoke$arity$variadic = G__14512__delegate;
return G__14512;
})()
;})(vec__14503,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__14505 = null;var count__14506 = (0);var i__14507 = (0);while(true){
if((i__14507 < count__14506))
{var vec__14508 = cljs.core._nth.call(null,chunk__14505,i__14507);var idx = cljs.core.nth.call(null,vec__14508,(0),null);var vec__14509 = cljs.core.nth.call(null,vec__14508,(1),null);var start = cljs.core.nth.call(null,vec__14509,(0),null);var top = cljs.core.nth.call(null,vec__14509,(1),null);var bottom = cljs.core.nth.call(null,vec__14509,(2),null);var end = cljs.core.nth.call(null,vec__14509,(3),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,bottom));
ctx.lineTo((idx * offset_x),pos_y.call(null,top));
ctx.stroke();
(ctx["strokeStyle"] = (((end > start))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,start));
ctx.lineTo((idx * offset_x),pos_y.call(null,end));
ctx.stroke();
{
var G__14514 = seq__14504;
var G__14515 = chunk__14505;
var G__14516 = count__14506;
var G__14517 = (i__14507 + (1));
seq__14504 = G__14514;
chunk__14505 = G__14515;
count__14506 = G__14516;
i__14507 = G__14517;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14504);if(temp__4126__auto__)
{var seq__14504__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14504__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14504__$1);{
var G__14518 = cljs.core.chunk_rest.call(null,seq__14504__$1);
var G__14519 = c__4307__auto__;
var G__14520 = cljs.core.count.call(null,c__4307__auto__);
var G__14521 = (0);
seq__14504 = G__14518;
chunk__14505 = G__14519;
count__14506 = G__14520;
i__14507 = G__14521;
continue;
}
} else
{var vec__14510 = cljs.core.first.call(null,seq__14504__$1);var idx = cljs.core.nth.call(null,vec__14510,(0),null);var vec__14511 = cljs.core.nth.call(null,vec__14510,(1),null);var start = cljs.core.nth.call(null,vec__14511,(0),null);var top = cljs.core.nth.call(null,vec__14511,(1),null);var bottom = cljs.core.nth.call(null,vec__14511,(2),null);var end = cljs.core.nth.call(null,vec__14511,(3),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,bottom));
ctx.lineTo((idx * offset_x),pos_y.call(null,top));
ctx.stroke();
(ctx["strokeStyle"] = (((end > start))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,start));
ctx.lineTo((idx * offset_x),pos_y.call(null,end));
ctx.stroke();
{
var G__14522 = cljs.core.next.call(null,seq__14504__$1);
var G__14523 = null;
var G__14524 = (0);
var G__14525 = (0);
seq__14504 = G__14522;
chunk__14505 = G__14523;
count__14506 = G__14524;
i__14507 = G__14525;
continue;
}
}
} else
{return null;
}
}
break;
}
});
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__14533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__14533,(0),null);var h = cljs.core.nth.call(null,vec__14533,(1),null);return ((function (ctx,vec__14533,w,h){
return (function (p__14534){var map__14535 = p__14534;var map__14535__$1 = ((cljs.core.seq_QMARK_.call(null,map__14535))?cljs.core.apply.call(null,cljs.core.hash_map,map__14535):map__14535);var info = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var brain = cljs.core.get.call(null,map__14535__$1,new cljs.core.Keyword(null,"brain","brain",428499577));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__14536_14540 = cljs.core.seq.call(null,avgs);var chunk__14537_14541 = null;var count__14538_14542 = (0);var i__14539_14543 = (0);while(true){
if((i__14539_14543 < count__14538_14542))
{var avg_14544 = cljs.core._nth.call(null,chunk__14537_14541,i__14539_14543);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_14544);
{
var G__14545 = seq__14536_14540;
var G__14546 = chunk__14537_14541;
var G__14547 = count__14538_14542;
var G__14548 = (i__14539_14543 + (1));
seq__14536_14540 = G__14545;
chunk__14537_14541 = G__14546;
count__14538_14542 = G__14547;
i__14539_14543 = G__14548;
continue;
}
} else
{var temp__4126__auto___14549 = cljs.core.seq.call(null,seq__14536_14540);if(temp__4126__auto___14549)
{var seq__14536_14550__$1 = temp__4126__auto___14549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14536_14550__$1))
{var c__4307__auto___14551 = cljs.core.chunk_first.call(null,seq__14536_14550__$1);{
var G__14552 = cljs.core.chunk_rest.call(null,seq__14536_14550__$1);
var G__14553 = c__4307__auto___14551;
var G__14554 = cljs.core.count.call(null,c__4307__auto___14551);
var G__14555 = (0);
seq__14536_14540 = G__14552;
chunk__14537_14541 = G__14553;
count__14538_14542 = G__14554;
i__14539_14543 = G__14555;
continue;
}
} else
{var avg_14556 = cljs.core.first.call(null,seq__14536_14550__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_14556);
{
var G__14557 = cljs.core.next.call(null,seq__14536_14550__$1);
var G__14558 = null;
var G__14559 = (0);
var G__14560 = (0);
seq__14536_14540 = G__14557;
chunk__14537_14541 = G__14558;
count__14538_14542 = G__14559;
i__14539_14543 = G__14560;
continue;
}
}
} else
{}
}
break;
}
test.stock2.draw_line.call(null,ctx,w,h,info);
if(cljs.core.truth_(brain))
{return test.stock2.draw_brain.call(null,ctx,w,h,info,brain);
} else
{return null;
}
});
;})(ctx,vec__14533,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__14563,r){var vec__14564 = p__14563;var la = cljs.core.nth.call(null,vec__14564,(0),null);var _ = cljs.core.nthnext.call(null,vec__14564,(1));var all = vec__14564;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__14565_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14565_SHARP_) / cljs.core.count.call(null,p1__14565_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__14571){var vec__14572 = p__14571;var s = cljs.core.nth.call(null,vec__14572,(0),null);var t = cljs.core.nth.call(null,vec__14572,(1),null);var b = cljs.core.nth.call(null,vec__14572,(2),null);var e = cljs.core.nth.call(null,vec__14572,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14566_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14566_SHARP_) / cljs.core.count.call(null,p1__14566_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__14573){var vec__14574 = p__14573;var s = cljs.core.nth.call(null,vec__14574,(0),null);var t = cljs.core.nth.call(null,vec__14574,(1),null);var b = cljs.core.nth.call(null,vec__14574,(2),null);var e = cljs.core.nth.call(null,vec__14574,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__14576 = line;var start = cljs.core.nth.call(null,vec__14576,(0),null);var top = cljs.core.nth.call(null,vec__14576,(1),null);var bottom = cljs.core.nth.call(null,vec__14576,(2),null);var end = cljs.core.nth.call(null,vec__14576,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u9577\u7D05",solid_rate,line_rate], null);
} else
{if(((solid_rate < 0.7)) && ((line_rate > 0.2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u9577\u9ED1",solid_rate], null);
} else
{if(((Math.abs(solid_rate) < 0.35)) && (true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u5341\u5B57\u7DDA",solid_rate,line_rate], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unknown"], null);
} else
{return null;
}
}
}
}
});
test.stock2.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock2.draw = test.stock2.draw.call(null,document.getElementById("canvas"));
test.stock2.main = (function main(){var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,(50),(100),0.07),(5));var styles = cljs.core.map.call(null,cljs.core.partial.call(null,test.stock2.check_one_style,((5) * 0.07)),info);var avg5 = test.stock2.average.call(null,info,(5));var avg10 = test.stock2.average.call(null,info,(10));return test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg5,avg10], null)], null));
});
test.stock2.hasStock = (function hasStock(brain){return new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);
});
test.stock2.buy = (function buy(brain,line,cnt){var temp__4124__auto__ = new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);if(cljs.core.truth_(temp__4124__auto__))
{var stock__$1 = temp__4124__auto__;return brain;
} else
{return cljs.core.assoc.call(null,cljs.core.update_in.call(null,brain,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buy","buy",-794379565),line], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),line);
}
});
test.stock2.sell = (function sell(brain,line){var temp__4124__auto__ = new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);if(cljs.core.truth_(temp__4124__auto__))
{var ori_line = temp__4124__auto__;return cljs.core.assoc.call(null,cljs.core.update_in.call(null,brain,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sell","sell",-1949004143),(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return ori_line;
}
})()], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),null);
} else
{return brain;
}
});
test.stock2.prepare = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("prepare",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,info){return type;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
test.stock2.think = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("think",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,brian,line){return type;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
test.stock2.play = (function play(type,info){var brain = test.stock2.prepare.call(null,type,info);return cljs.core.reduce.call(null,cljs.core.partial.call(null,test.stock2.think,type),brain,info);
});
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,info){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.List.EMPTY], null);
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__14577){var vec__14578 = p__14577;var start_price = cljs.core.nth.call(null,vec__14578,(0),null);var _ = cljs.core.nth.call(null,vec__14578,(1),null);var ___$1 = cljs.core.nth.call(null,vec__14578,(2),null);var ___$2 = cljs.core.nth.call(null,vec__14578,(3),null);var line = vec__14578;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,info){return cljs.core.merge.call(null,test.stock2.prepare.call(null,null,info),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.list(cljs.core.list(cljs.core.list(3.0309727609504122,0.8958129837134047,1.5035815277093234,0.9456629358188376,1.3576705137689733,1.2631671445866242),cljs.core.list(-0.31085424118702176,0.9340874822881315,0.5655820779573415,0.7585836548894886,0.06611942477303065,0.7940467160731797),cljs.core.list(2.850307140147388,1.0756956641941802,1.5538502140350114,0.7274314323819675,1.5567211797840368,0.729486094825665),cljs.core.list(2.2728224695552925,1.2083236755399938,1.0223688933595008,0.7836758956375489,1.054595369712162,0.5593937540954879),cljs.core.list(3.0218162878485093,1.0503652785565414,1.604135048169243,1.2388330537952215,1.221090407169956,0.8350244798358218)),cljs.core.list(cljs.core.list(5.301581267749204,3.3609868593366343,-0.7394149388296283,3.0376961047533566,2.256700046977792,3.389521210235661)))], null));
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,p__14579,line){var map__14580 = p__14579;var map__14580__$1 = ((cljs.core.seq_QMARK_.call(null,map__14580))?cljs.core.apply.call(null,cljs.core.hash_map,map__14580):map__14580);var brain = map__14580__$1;var ws = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"ws","ws",86841443));var info = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"info","info",-317069002));var lines = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,line),info);var recent_lines = cljs.core.take_last.call(null,(5),lines);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,recent_lines),(5)))
{var avg1 = test.stock2.average.call(null,recent_lines,(1));var rates = test.stock2.convert_rates.call(null,avg1,0.41);var value = cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,rates),ws)));if(cljs.core.truth_(test.stock2.hasStock.call(null,brain)))
{return test.stock2.sell.call(null,brain,line);
} else
{if((value > 0.55))
{return test.stock2.buy.call(null,brain,line,(100));
} else
{return brain;
}
}
} else
{return brain;
}
}));
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__14587){var vec__14588 = p__14587;var act = cljs.core.nth.call(null,vec__14588,(0),null);var vec__14589 = cljs.core.nth.call(null,vec__14588,(1),null);var start_price = cljs.core.nth.call(null,vec__14589,(0),null);var _ = cljs.core.nthnext.call(null,vec__14589,(1));var line = vec__14589;var step = vec__14588;var pred__14590 = cljs.core._EQ_;var expr__14591 = act;if(cljs.core.truth_(pred__14590.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__14591)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__14590.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__14591)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (((5) * (4)) * (12));var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var avg1 = test.stock2.average.call(null,info,(1));var map__14594 = test.stock2.play.call(null,new cljs.core.Keyword(null,"ann1","ann1",-999246990),info);var map__14594__$1 = ((cljs.core.seq_QMARK_.call(null,map__14594))?cljs.core.apply.call(null,cljs.core.hash_map,map__14594):map__14594);var brain = map__14594__$1;var step = cljs.core.get.call(null,map__14594__$1,new cljs.core.Keyword(null,"step","step",1288888124));test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg1], null)], null));
return null;
});
test.stock2.test_play.call(null);
