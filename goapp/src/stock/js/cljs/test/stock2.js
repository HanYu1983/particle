// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('ai.ann');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__12466_SHARP_){return cljs.core.nth.call(null,p1__12466_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__12467_SHARP_){return cljs.core.nth.call(null,p1__12467_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_brain = (function draw_brain(ctx,w,h,info,p__12468){var map__12485 = p__12468;var map__12485__$1 = ((cljs.core.seq_QMARK_.call(null,map__12485))?cljs.core.apply.call(null,cljs.core.hash_map,map__12485):map__12485);var brain = map__12485__$1;var steps = cljs.core.get.call(null,map__12485__$1,new cljs.core.Keyword(null,"step","step",1288888124));var vec__12486 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__12486,(0),null);var min_v = cljs.core.nth.call(null,vec__12486,(1),null);var offset_v = cljs.core.nth.call(null,vec__12486,(2),null);var offset_x = cljs.core.nth.call(null,vec__12486,(3),null);var pos_y = cljs.core.nth.call(null,vec__12486,(4),null);var money = test.stock2.calculate_money.call(null,(10000),(100),steps);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__12486,max_v,min_v,offset_v,offset_x,pos_y,money,map__12485,map__12485__$1,brain,steps){
return (function (p__12487){var vec__12488 = p__12487;var act = cljs.core.nth.call(null,vec__12488,(0),null);var line = cljs.core.nth.call(null,vec__12488,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__12486,max_v,min_v,offset_v,offset_x,pos_y,money,map__12485,map__12485__$1,brain,steps))
,steps)),info);(ctx["fillStyle"] = "black");
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(20),(20));
if(cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))
{ctx.fillText(("stock:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))),(20),(40));
} else
{}
var seq__12489 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12486,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__12485,map__12485__$1,brain,steps){
return (function() { 
var G__12501__delegate = function (args){return args;
};
var G__12501 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12501__delegate.call(this,args);};
G__12501.cljs$lang$maxFixedArity = 0;
G__12501.cljs$lang$applyTo = (function (arglist__12502){
var args = cljs.core.seq(arglist__12502);
return G__12501__delegate(args);
});
G__12501.cljs$core$IFn$_invoke$arity$variadic = G__12501__delegate;
return G__12501;
})()
;})(vec__12486,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__12485,map__12485__$1,brain,steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__12490 = null;var count__12491 = (0);var i__12492 = (0);while(true){
if((i__12492 < count__12491))
{var vec__12493 = cljs.core._nth.call(null,chunk__12490,i__12492);var idx = cljs.core.nth.call(null,vec__12493,(0),null);var curr = cljs.core.nth.call(null,vec__12493,(1),null);var pred__12494_12503 = cljs.core._EQ_;var expr__12495_12504 = curr;if(cljs.core.truth_(pred__12494_12503.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12495_12504)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__12494_12503.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12495_12504)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__12505 = seq__12489;
var G__12506 = chunk__12490;
var G__12507 = count__12491;
var G__12508 = (i__12492 + (1));
seq__12489 = G__12505;
chunk__12490 = G__12506;
count__12491 = G__12507;
i__12492 = G__12508;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12489);if(temp__4126__auto__)
{var seq__12489__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12489__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12489__$1);{
var G__12509 = cljs.core.chunk_rest.call(null,seq__12489__$1);
var G__12510 = c__4307__auto__;
var G__12511 = cljs.core.count.call(null,c__4307__auto__);
var G__12512 = (0);
seq__12489 = G__12509;
chunk__12490 = G__12510;
count__12491 = G__12511;
i__12492 = G__12512;
continue;
}
} else
{var vec__12497 = cljs.core.first.call(null,seq__12489__$1);var idx = cljs.core.nth.call(null,vec__12497,(0),null);var curr = cljs.core.nth.call(null,vec__12497,(1),null);var pred__12498_12513 = cljs.core._EQ_;var expr__12499_12514 = curr;if(cljs.core.truth_(pred__12498_12513.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12499_12514)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__12498_12513.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12499_12514)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__12515 = cljs.core.next.call(null,seq__12489__$1);
var G__12516 = null;
var G__12517 = (0);
var G__12518 = (0);
seq__12489 = G__12515;
chunk__12490 = G__12516;
count__12491 = G__12517;
i__12492 = G__12518;
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
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__12526 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__12526,(0),null);var min_v = cljs.core.nth.call(null,vec__12526,(1),null);var offset_v = cljs.core.nth.call(null,vec__12526,(2),null);var offset_x = cljs.core.nth.call(null,vec__12526,(3),null);var pos_y = cljs.core.nth.call(null,vec__12526,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__12527 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12526,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__12533__delegate = function (args){return args;
};
var G__12533 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12533__delegate.call(this,args);};
G__12533.cljs$lang$maxFixedArity = 0;
G__12533.cljs$lang$applyTo = (function (arglist__12534){
var args = cljs.core.seq(arglist__12534);
return G__12533__delegate(args);
});
G__12533.cljs$core$IFn$_invoke$arity$variadic = G__12533__delegate;
return G__12533;
})()
;})(vec__12526,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__12528 = null;var count__12529 = (0);var i__12530 = (0);while(true){
if((i__12530 < count__12529))
{var vec__12531 = cljs.core._nth.call(null,chunk__12528,i__12530);var idx = cljs.core.nth.call(null,vec__12531,(0),null);var prev = cljs.core.nth.call(null,vec__12531,(1),null);var curr = cljs.core.nth.call(null,vec__12531,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__12535 = seq__12527;
var G__12536 = chunk__12528;
var G__12537 = count__12529;
var G__12538 = (i__12530 + (1));
seq__12527 = G__12535;
chunk__12528 = G__12536;
count__12529 = G__12537;
i__12530 = G__12538;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12527);if(temp__4126__auto__)
{var seq__12527__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12527__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12527__$1);{
var G__12539 = cljs.core.chunk_rest.call(null,seq__12527__$1);
var G__12540 = c__4307__auto__;
var G__12541 = cljs.core.count.call(null,c__4307__auto__);
var G__12542 = (0);
seq__12527 = G__12539;
chunk__12528 = G__12540;
count__12529 = G__12541;
i__12530 = G__12542;
continue;
}
} else
{var vec__12532 = cljs.core.first.call(null,seq__12527__$1);var idx = cljs.core.nth.call(null,vec__12532,(0),null);var prev = cljs.core.nth.call(null,vec__12532,(1),null);var curr = cljs.core.nth.call(null,vec__12532,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__12543 = cljs.core.next.call(null,seq__12527__$1);
var G__12544 = null;
var G__12545 = (0);
var G__12546 = (0);
seq__12527 = G__12543;
chunk__12528 = G__12544;
count__12529 = G__12545;
i__12530 = G__12546;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__12556 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__12556,(0),null);var min_v = cljs.core.nth.call(null,vec__12556,(1),null);var offset_v = cljs.core.nth.call(null,vec__12556,(2),null);var offset_x = cljs.core.nth.call(null,vec__12556,(3),null);var pos_y = cljs.core.nth.call(null,vec__12556,(4),null);var seq__12557 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12556,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__12565__delegate = function (args){return args;
};
var G__12565 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12565__delegate.call(this,args);};
G__12565.cljs$lang$maxFixedArity = 0;
G__12565.cljs$lang$applyTo = (function (arglist__12566){
var args = cljs.core.seq(arglist__12566);
return G__12565__delegate(args);
});
G__12565.cljs$core$IFn$_invoke$arity$variadic = G__12565__delegate;
return G__12565;
})()
;})(vec__12556,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__12558 = null;var count__12559 = (0);var i__12560 = (0);while(true){
if((i__12560 < count__12559))
{var vec__12561 = cljs.core._nth.call(null,chunk__12558,i__12560);var idx = cljs.core.nth.call(null,vec__12561,(0),null);var vec__12562 = cljs.core.nth.call(null,vec__12561,(1),null);var start = cljs.core.nth.call(null,vec__12562,(0),null);var top = cljs.core.nth.call(null,vec__12562,(1),null);var bottom = cljs.core.nth.call(null,vec__12562,(2),null);var end = cljs.core.nth.call(null,vec__12562,(3),null);(ctx["strokeStyle"] = "black");
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
var G__12567 = seq__12557;
var G__12568 = chunk__12558;
var G__12569 = count__12559;
var G__12570 = (i__12560 + (1));
seq__12557 = G__12567;
chunk__12558 = G__12568;
count__12559 = G__12569;
i__12560 = G__12570;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12557);if(temp__4126__auto__)
{var seq__12557__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12557__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12557__$1);{
var G__12571 = cljs.core.chunk_rest.call(null,seq__12557__$1);
var G__12572 = c__4307__auto__;
var G__12573 = cljs.core.count.call(null,c__4307__auto__);
var G__12574 = (0);
seq__12557 = G__12571;
chunk__12558 = G__12572;
count__12559 = G__12573;
i__12560 = G__12574;
continue;
}
} else
{var vec__12563 = cljs.core.first.call(null,seq__12557__$1);var idx = cljs.core.nth.call(null,vec__12563,(0),null);var vec__12564 = cljs.core.nth.call(null,vec__12563,(1),null);var start = cljs.core.nth.call(null,vec__12564,(0),null);var top = cljs.core.nth.call(null,vec__12564,(1),null);var bottom = cljs.core.nth.call(null,vec__12564,(2),null);var end = cljs.core.nth.call(null,vec__12564,(3),null);(ctx["strokeStyle"] = "black");
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
var G__12575 = cljs.core.next.call(null,seq__12557__$1);
var G__12576 = null;
var G__12577 = (0);
var G__12578 = (0);
seq__12557 = G__12575;
chunk__12558 = G__12576;
count__12559 = G__12577;
i__12560 = G__12578;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__12586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__12586,(0),null);var h = cljs.core.nth.call(null,vec__12586,(1),null);return ((function (ctx,vec__12586,w,h){
return (function (p__12587){var map__12588 = p__12587;var map__12588__$1 = ((cljs.core.seq_QMARK_.call(null,map__12588))?cljs.core.apply.call(null,cljs.core.hash_map,map__12588):map__12588);var info = cljs.core.get.call(null,map__12588__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__12588__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var brain = cljs.core.get.call(null,map__12588__$1,new cljs.core.Keyword(null,"brain","brain",428499577));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__12589_12593 = cljs.core.seq.call(null,avgs);var chunk__12590_12594 = null;var count__12591_12595 = (0);var i__12592_12596 = (0);while(true){
if((i__12592_12596 < count__12591_12595))
{var avg_12597 = cljs.core._nth.call(null,chunk__12590_12594,i__12592_12596);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_12597);
{
var G__12598 = seq__12589_12593;
var G__12599 = chunk__12590_12594;
var G__12600 = count__12591_12595;
var G__12601 = (i__12592_12596 + (1));
seq__12589_12593 = G__12598;
chunk__12590_12594 = G__12599;
count__12591_12595 = G__12600;
i__12592_12596 = G__12601;
continue;
}
} else
{var temp__4126__auto___12602 = cljs.core.seq.call(null,seq__12589_12593);if(temp__4126__auto___12602)
{var seq__12589_12603__$1 = temp__4126__auto___12602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12589_12603__$1))
{var c__4307__auto___12604 = cljs.core.chunk_first.call(null,seq__12589_12603__$1);{
var G__12605 = cljs.core.chunk_rest.call(null,seq__12589_12603__$1);
var G__12606 = c__4307__auto___12604;
var G__12607 = cljs.core.count.call(null,c__4307__auto___12604);
var G__12608 = (0);
seq__12589_12593 = G__12605;
chunk__12590_12594 = G__12606;
count__12591_12595 = G__12607;
i__12592_12596 = G__12608;
continue;
}
} else
{var avg_12609 = cljs.core.first.call(null,seq__12589_12603__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_12609);
{
var G__12610 = cljs.core.next.call(null,seq__12589_12603__$1);
var G__12611 = null;
var G__12612 = (0);
var G__12613 = (0);
seq__12589_12593 = G__12610;
chunk__12590_12594 = G__12611;
count__12591_12595 = G__12612;
i__12592_12596 = G__12613;
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
;})(ctx,vec__12586,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__12616,r){var vec__12617 = p__12616;var la = cljs.core.nth.call(null,vec__12617,(0),null);var _ = cljs.core.nthnext.call(null,vec__12617,(1));var all = vec__12617;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__12618_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__12618_SHARP_) / cljs.core.count.call(null,p1__12618_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__12624){var vec__12625 = p__12624;var s = cljs.core.nth.call(null,vec__12625,(0),null);var t = cljs.core.nth.call(null,vec__12625,(1),null);var b = cljs.core.nth.call(null,vec__12625,(2),null);var e = cljs.core.nth.call(null,vec__12625,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__12619_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__12619_SHARP_) / cljs.core.count.call(null,p1__12619_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__12626){var vec__12627 = p__12626;var s = cljs.core.nth.call(null,vec__12627,(0),null);var t = cljs.core.nth.call(null,vec__12627,(1),null);var b = cljs.core.nth.call(null,vec__12627,(2),null);var e = cljs.core.nth.call(null,vec__12627,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__12629 = line;var start = cljs.core.nth.call(null,vec__12629,(0),null);var top = cljs.core.nth.call(null,vec__12629,(1),null);var bottom = cljs.core.nth.call(null,vec__12629,(2),null);var end = cljs.core.nth.call(null,vec__12629,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
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
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__12630){var vec__12631 = p__12630;var start_price = cljs.core.nth.call(null,vec__12631,(0),null);var _ = cljs.core.nth.call(null,vec__12631,(1),null);var ___$1 = cljs.core.nth.call(null,vec__12631,(2),null);var ___$2 = cljs.core.nth.call(null,vec__12631,(3),null);var line = vec__12631;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,info){return cljs.core.merge.call(null,test.stock2.prepare.call(null,null,info),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.list(cljs.core.list(cljs.core.list(3.0309727609504122,0.8958129837134047,1.5035815277093234,0.9456629358188376,1.3576705137689733,1.2631671445866242),cljs.core.list(-0.31085424118702176,0.9340874822881315,0.5655820779573415,0.7585836548894886,0.06611942477303065,0.7940467160731797),cljs.core.list(2.850307140147388,1.0756956641941802,1.5538502140350114,0.7274314323819675,1.5567211797840368,0.729486094825665),cljs.core.list(2.2728224695552925,1.2083236755399938,1.0223688933595008,0.7836758956375489,1.054595369712162,0.5593937540954879),cljs.core.list(3.0218162878485093,1.0503652785565414,1.604135048169243,1.2388330537952215,1.221090407169956,0.8350244798358218)),cljs.core.list(cljs.core.list(5.301581267749204,3.3609868593366343,-0.7394149388296283,3.0376961047533566,2.256700046977792,3.389521210235661)))], null));
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,p__12632,line){var map__12633 = p__12632;var map__12633__$1 = ((cljs.core.seq_QMARK_.call(null,map__12633))?cljs.core.apply.call(null,cljs.core.hash_map,map__12633):map__12633);var brain = map__12633__$1;var ws = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"ws","ws",86841443));var info = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"info","info",-317069002));var lines = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,line),info);var recent_lines = cljs.core.take_last.call(null,(5),lines);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,recent_lines),(5)))
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
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__12640){var vec__12641 = p__12640;var act = cljs.core.nth.call(null,vec__12641,(0),null);var vec__12642 = cljs.core.nth.call(null,vec__12641,(1),null);var start_price = cljs.core.nth.call(null,vec__12642,(0),null);var _ = cljs.core.nthnext.call(null,vec__12642,(1));var line = vec__12642;var step = vec__12641;var pred__12643 = cljs.core._EQ_;var expr__12644 = act;if(cljs.core.truth_(pred__12643.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12644)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__12643.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12644)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (((5) * (4)) * (12));var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var avg1 = test.stock2.average.call(null,info,(1));var map__12647 = test.stock2.play.call(null,new cljs.core.Keyword(null,"ann1","ann1",-999246990),info);var map__12647__$1 = ((cljs.core.seq_QMARK_.call(null,map__12647))?cljs.core.apply.call(null,cljs.core.hash_map,map__12647):map__12647);var brain = map__12647__$1;var step = cljs.core.get.call(null,map__12647__$1,new cljs.core.Keyword(null,"step","step",1288888124));test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg1], null)], null));
return null;
});
test.stock2.test_play.call(null);
