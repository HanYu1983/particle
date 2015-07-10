// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ai.ann');
goog.require('ai.ann');
goog.require('cljs.core.async');
test.stock.k_line_count = (365);
test.stock.buy_rate = 0.5;
test.stock.start_money = (100000);
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__70552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__70552,(0),null);var h = cljs.core.nth.call(null,vec__70552,(1),null);return ((function (ctx,vec__70552,w,h){
return (function (curve,avg,avg2,vs,err,money){var max_v = cljs.core.apply.call(null,cljs.core.max,curve);var factor = ((1) / max_v);var xoffset = (w / cljs.core.count.call(null,curve));var vs__$1 = cljs.core.apply.call(null,cljs.core.conj,vs,cljs.core.take.call(null,(5),cljs.core.repeat.call(null,(0))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((0),(h * 0.5));
ctx.lineTo(w,(h * 0.5));
ctx.moveTo((0),(h * 0.25));
ctx.lineTo(w,(h * 0.25));
ctx.moveTo((0),(h * 0.75));
ctx.lineTo(w,(h * 0.75));
ctx.moveTo((0),(h * ((1) - test.stock.buy_rate)));
ctx.lineTo(w,(h * ((1) - test.stock.buy_rate)));
ctx.stroke();
var seq__70553_70571 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__70552,w,h){
return (function() { 
var G__70575__delegate = function (args){return args;
};
var G__70575 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__70575__delegate.call(this,args);};
G__70575.cljs$lang$maxFixedArity = 0;
G__70575.cljs$lang$applyTo = (function (arglist__70576){
var args = cljs.core.seq(arglist__70576);
return G__70575__delegate(args);
});
G__70575.cljs$core$IFn$_invoke$arity$variadic = G__70575__delegate;
return G__70575;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__70552,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__70554_70572 = null;var count__70555_70573 = (0);var i__70556_70574 = (0);while(true){
if((i__70556_70574 < count__70555_70573))
{var vec__70557_70577 = cljs.core._nth.call(null,chunk__70554_70572,i__70556_70574);var idx_70578 = cljs.core.nth.call(null,vec__70557_70577,(0),null);var prev_70579 = cljs.core.nth.call(null,vec__70557_70577,(1),null);var curr_70580 = cljs.core.nth.call(null,vec__70557_70577,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_70578),(h - ((prev_70579 * factor) * h)));
ctx.lineTo((xoffset * (idx_70578 + (1))),(h - ((curr_70580 * factor) * h)));
ctx.stroke();
{
var G__70581 = seq__70553_70571;
var G__70582 = chunk__70554_70572;
var G__70583 = count__70555_70573;
var G__70584 = (i__70556_70574 + (1));
seq__70553_70571 = G__70581;
chunk__70554_70572 = G__70582;
count__70555_70573 = G__70583;
i__70556_70574 = G__70584;
continue;
}
} else
{var temp__4126__auto___70585 = cljs.core.seq.call(null,seq__70553_70571);if(temp__4126__auto___70585)
{var seq__70553_70586__$1 = temp__4126__auto___70585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__70553_70586__$1))
{var c__4307__auto___70587 = cljs.core.chunk_first.call(null,seq__70553_70586__$1);{
var G__70588 = cljs.core.chunk_rest.call(null,seq__70553_70586__$1);
var G__70589 = c__4307__auto___70587;
var G__70590 = cljs.core.count.call(null,c__4307__auto___70587);
var G__70591 = (0);
seq__70553_70571 = G__70588;
chunk__70554_70572 = G__70589;
count__70555_70573 = G__70590;
i__70556_70574 = G__70591;
continue;
}
} else
{var vec__70558_70592 = cljs.core.first.call(null,seq__70553_70586__$1);var idx_70593 = cljs.core.nth.call(null,vec__70558_70592,(0),null);var prev_70594 = cljs.core.nth.call(null,vec__70558_70592,(1),null);var curr_70595 = cljs.core.nth.call(null,vec__70558_70592,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_70593),(h - ((prev_70594 * factor) * h)));
ctx.lineTo((xoffset * (idx_70593 + (1))),(h - ((curr_70595 * factor) * h)));
ctx.stroke();
{
var G__70596 = cljs.core.next.call(null,seq__70553_70586__$1);
var G__70597 = null;
var G__70598 = (0);
var G__70599 = (0);
seq__70553_70571 = G__70596;
chunk__70554_70572 = G__70597;
count__70555_70573 = G__70598;
i__70556_70574 = G__70599;
continue;
}
}
} else
{}
}
break;
}
var seq__70559_70600 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__70552,w,h){
return (function() { 
var G__70604__delegate = function (args){return args;
};
var G__70604 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__70604__delegate.call(this,args);};
G__70604.cljs$lang$maxFixedArity = 0;
G__70604.cljs$lang$applyTo = (function (arglist__70605){
var args = cljs.core.seq(arglist__70605);
return G__70604__delegate(args);
});
G__70604.cljs$core$IFn$_invoke$arity$variadic = G__70604__delegate;
return G__70604;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__70552,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__70560_70601 = null;var count__70561_70602 = (0);var i__70562_70603 = (0);while(true){
if((i__70562_70603 < count__70561_70602))
{var vec__70563_70606 = cljs.core._nth.call(null,chunk__70560_70601,i__70562_70603);var idx_70607 = cljs.core.nth.call(null,vec__70563_70606,(0),null);var prev_70608 = cljs.core.nth.call(null,vec__70563_70606,(1),null);var curr_70609 = cljs.core.nth.call(null,vec__70563_70606,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_70607),(h - ((prev_70608 * factor) * h)));
ctx.lineTo((xoffset * (idx_70607 + (1))),(h - ((curr_70609 * factor) * h)));
ctx.stroke();
{
var G__70610 = seq__70559_70600;
var G__70611 = chunk__70560_70601;
var G__70612 = count__70561_70602;
var G__70613 = (i__70562_70603 + (1));
seq__70559_70600 = G__70610;
chunk__70560_70601 = G__70611;
count__70561_70602 = G__70612;
i__70562_70603 = G__70613;
continue;
}
} else
{var temp__4126__auto___70614 = cljs.core.seq.call(null,seq__70559_70600);if(temp__4126__auto___70614)
{var seq__70559_70615__$1 = temp__4126__auto___70614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__70559_70615__$1))
{var c__4307__auto___70616 = cljs.core.chunk_first.call(null,seq__70559_70615__$1);{
var G__70617 = cljs.core.chunk_rest.call(null,seq__70559_70615__$1);
var G__70618 = c__4307__auto___70616;
var G__70619 = cljs.core.count.call(null,c__4307__auto___70616);
var G__70620 = (0);
seq__70559_70600 = G__70617;
chunk__70560_70601 = G__70618;
count__70561_70602 = G__70619;
i__70562_70603 = G__70620;
continue;
}
} else
{var vec__70564_70621 = cljs.core.first.call(null,seq__70559_70615__$1);var idx_70622 = cljs.core.nth.call(null,vec__70564_70621,(0),null);var prev_70623 = cljs.core.nth.call(null,vec__70564_70621,(1),null);var curr_70624 = cljs.core.nth.call(null,vec__70564_70621,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_70622),(h - ((prev_70623 * factor) * h)));
ctx.lineTo((xoffset * (idx_70622 + (1))),(h - ((curr_70624 * factor) * h)));
ctx.stroke();
{
var G__70625 = cljs.core.next.call(null,seq__70559_70615__$1);
var G__70626 = null;
var G__70627 = (0);
var G__70628 = (0);
seq__70559_70600 = G__70625;
chunk__70560_70601 = G__70626;
count__70561_70602 = G__70627;
i__70562_70603 = G__70628;
continue;
}
}
} else
{}
}
break;
}
var seq__70565_70629 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__70552,w,h){
return (function() { 
var G__70633__delegate = function (args){return args;
};
var G__70633 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__70633__delegate.call(this,args);};
G__70633.cljs$lang$maxFixedArity = 0;
G__70633.cljs$lang$applyTo = (function (arglist__70634){
var args = cljs.core.seq(arglist__70634);
return G__70633__delegate(args);
});
G__70633.cljs$core$IFn$_invoke$arity$variadic = G__70633__delegate;
return G__70633;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__70552,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__70566_70630 = null;var count__70567_70631 = (0);var i__70568_70632 = (0);while(true){
if((i__70568_70632 < count__70567_70631))
{var vec__70569_70635 = cljs.core._nth.call(null,chunk__70566_70630,i__70568_70632);var idx_70636 = cljs.core.nth.call(null,vec__70569_70635,(0),null);var prev_70637 = cljs.core.nth.call(null,vec__70569_70635,(1),null);var curr_70638 = cljs.core.nth.call(null,vec__70569_70635,(2),null);var v_70639 = cljs.core.nth.call(null,vec__70569_70635,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_70636),(h - ((prev_70637 * factor) * h)));
ctx.lineTo((xoffset * (idx_70636 + (1))),(h - ((curr_70638 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_70636)),h);
ctx.lineTo(((3) + (xoffset * idx_70636)),(h - (v_70639 * h)));
ctx.stroke();
{
var G__70640 = seq__70565_70629;
var G__70641 = chunk__70566_70630;
var G__70642 = count__70567_70631;
var G__70643 = (i__70568_70632 + (1));
seq__70565_70629 = G__70640;
chunk__70566_70630 = G__70641;
count__70567_70631 = G__70642;
i__70568_70632 = G__70643;
continue;
}
} else
{var temp__4126__auto___70644 = cljs.core.seq.call(null,seq__70565_70629);if(temp__4126__auto___70644)
{var seq__70565_70645__$1 = temp__4126__auto___70644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__70565_70645__$1))
{var c__4307__auto___70646 = cljs.core.chunk_first.call(null,seq__70565_70645__$1);{
var G__70647 = cljs.core.chunk_rest.call(null,seq__70565_70645__$1);
var G__70648 = c__4307__auto___70646;
var G__70649 = cljs.core.count.call(null,c__4307__auto___70646);
var G__70650 = (0);
seq__70565_70629 = G__70647;
chunk__70566_70630 = G__70648;
count__70567_70631 = G__70649;
i__70568_70632 = G__70650;
continue;
}
} else
{var vec__70570_70651 = cljs.core.first.call(null,seq__70565_70645__$1);var idx_70652 = cljs.core.nth.call(null,vec__70570_70651,(0),null);var prev_70653 = cljs.core.nth.call(null,vec__70570_70651,(1),null);var curr_70654 = cljs.core.nth.call(null,vec__70570_70651,(2),null);var v_70655 = cljs.core.nth.call(null,vec__70570_70651,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_70652),(h - ((prev_70653 * factor) * h)));
ctx.lineTo((xoffset * (idx_70652 + (1))),(h - ((curr_70654 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_70652)),h);
ctx.lineTo(((3) + (xoffset * idx_70652)),(h - (v_70655 * h)));
ctx.stroke();
{
var G__70656 = cljs.core.next.call(null,seq__70565_70645__$1);
var G__70657 = null;
var G__70658 = (0);
var G__70659 = (0);
seq__70565_70629 = G__70656;
chunk__70566_70630 = G__70657;
count__70567_70631 = G__70658;
i__70568_70632 = G__70659;
continue;
}
}
} else
{}
}
break;
}
(ctx["fillStyle"] = "#000000");
ctx.fillText(("err:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)),(100),(20));
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(100),(40));
ctx.fillText(("rate:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((money - test.stock.start_money) / test.stock.start_money))),(100),(60));
return null;
});
;})(ctx,vec__70552,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__70660_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__70660_SHARP_) / cljs.core.count.call(null,p1__70660_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / prev) * (curr - prev))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__70666 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__70667,p__70668){var vec__70669 = p__70667;var money__$1 = cljs.core.nth.call(null,vec__70669,(0),null);var isBuy = cljs.core.nth.call(null,vec__70669,(1),null);var vec__70670 = p__70668;var price = cljs.core.nth.call(null,vec__70670,(0),null);var rate = cljs.core.nth.call(null,vec__70670,(1),null);if(cljs.core.truth_(isBuy))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(money__$1 + (price * buy_count)),false], null);
} else
{if((rate > test.stock.buy_rate))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(money__$1 - (price * buy_count)),true], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [money__$1,false], null);
}
}
});})(buy_count,curve__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [money,false], null),cljs.core.map.call(null,((function (buy_count,curve__$1){
return (function() { 
var G__70671__delegate = function (args){return args;
};
var G__70671 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__70671__delegate.call(this,args);};
G__70671.cljs$lang$maxFixedArity = 0;
G__70671.cljs$lang$applyTo = (function (arglist__70672){
var args = cljs.core.seq(arglist__70672);
return G__70671__delegate(args);
});
G__70671.cljs$core$IFn$_invoke$arity$variadic = G__70671__delegate;
return G__70671;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__70666,(0),null);var isBuy = cljs.core.nth.call(null,vec__70666,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.075))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__70823__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__70823 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__70823__delegate.call(this,args);};
G__70823.cljs$lang$maxFixedArity = 0;
G__70823.cljs$lang$applyTo = (function (arglist__70824){
var args = cljs.core.seq(arglist__70824);
return G__70823__delegate(args);
});
G__70823.cljs$core$IFn$_invoke$arity$variadic = G__70823__delegate;
return G__70823;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20),test.stock.convert_rates.call(null,avg10),test.stock.convert_rates.call(null,curve));var init_weights = cljs.core.list(cljs.core.list(cljs.core.list(4.808192556097727,1.7825236021525466,1.608210082071203,2.1156349495503304,1.5374622502348625,1.6589628354630677),cljs.core.list(1.8100758846575082,0.51657025620818,0.30041899078071094,0.22014220256835185,-0.27067053120106493,-0.13603029039211637),cljs.core.list(11.901065000126607,4.42661026517148,4.076783752778851,4.943816687457568,4.7786243911947395,4.5354890627901465),cljs.core.list(5.548832136282166,2.2436687545792964,1.9812994019536085,1.7597841788025357,1.7329836036020687,2.4985535154061154),cljs.core.list(5.437276972146936,1.600671371074915,2.388054007759834,2.169804121695976,1.6002781408397109,2.2310725037032295)),cljs.core.list(cljs.core.list(9.908141461011681,3.469061590893719,-0.3901192250332968,11.334590770921867,4.290398679358419,4.165030023799448)));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6202__auto___70825 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___70825,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___70825,curve,avg10,avg20,rates,init_weights,info){
return (function (state_70775){var state_val_70776 = (state_70775[(1)]);if((state_val_70776 === (7)))
{var inst_70765 = (state_70775[(2)]);var state_70775__$1 = (function (){var statearr_70777 = state_70775;(statearr_70777[(7)] = inst_70765);
return statearr_70777;
})();var statearr_70778_70826 = state_70775__$1;(statearr_70778_70826[(2)] = null);
(statearr_70778_70826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70776 === (6)))
{var inst_70771 = (state_70775[(2)]);var state_70775__$1 = state_70775;var statearr_70779_70827 = state_70775__$1;(statearr_70779_70827[(2)] = inst_70771);
(statearr_70779_70827[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70776 === (5)))
{var inst_70756 = (state_70775[(8)]);var inst_70768 = cljs.core.pr_str.call(null,inst_70756);var inst_70769 = console.log(inst_70768);var state_70775__$1 = state_70775;var statearr_70780_70828 = state_70775__$1;(statearr_70780_70828[(2)] = inst_70769);
(statearr_70780_70828[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70776 === (4)))
{var inst_70763 = cljs.core.async.timeout.call(null,(1));var state_70775__$1 = state_70775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70775__$1,(7),inst_70763);
} else
{if((state_val_70776 === (3)))
{var inst_70773 = (state_70775[(2)]);var state_70775__$1 = state_70775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70775__$1,inst_70773);
} else
{if((state_val_70776 === (2)))
{var inst_70756 = (state_70775[(8)]);var inst_70751 = cljs.core.deref.call(null,info);var inst_70752 = cljs.core.nth.call(null,inst_70751,(0),null);var inst_70753 = cljs.core.nth.call(null,inst_70751,(1),null);var inst_70754 = cljs.core.list(cljs.core.list(cljs.core.list(0.535,0.535,0.535,0.535,0.535),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.465,0.465,0.465,0.465,0.465),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.25)));var inst_70755 = ai.ann.Train.call(null,inst_70752,inst_70754,(1),(0));var inst_70756__$1 = cljs.core.nth.call(null,inst_70755,(0),null);var inst_70757 = cljs.core.nth.call(null,inst_70755,(1),null);var inst_70758 = [inst_70756__$1,inst_70757];var inst_70759 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_70758,null));var inst_70760 = cljs.core.reset_BANG_.call(null,info,inst_70759);var inst_70761 = (inst_70757 > 0.005);var state_70775__$1 = (function (){var statearr_70781 = state_70775;(statearr_70781[(8)] = inst_70756__$1);
(statearr_70781[(9)] = inst_70753);
(statearr_70781[(10)] = inst_70760);
return statearr_70781;
})();if(cljs.core.truth_(inst_70761))
{var statearr_70782_70829 = state_70775__$1;(statearr_70782_70829[(1)] = (4));
} else
{var statearr_70783_70830 = state_70775__$1;(statearr_70783_70830[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70776 === (1)))
{var state_70775__$1 = state_70775;var statearr_70784_70831 = state_70775__$1;(statearr_70784_70831[(2)] = null);
(statearr_70784_70831[(1)] = (2));
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
});})(c__6202__auto___70825,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___70825,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_70788 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_70788[(0)] = state_machine__6188__auto__);
(statearr_70788[(1)] = (1));
return statearr_70788;
});
var state_machine__6188__auto____1 = (function (state_70775){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_70775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e70789){if((e70789 instanceof Object))
{var ex__6191__auto__ = e70789;var statearr_70790_70832 = state_70775;(statearr_70790_70832[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e70789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70833 = state_70775;
state_70775 = G__70833;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_70775){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_70775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___70825,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_70791 = f__6203__auto__.call(null);(statearr_70791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___70825);
return statearr_70791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___70825,curve,avg10,avg20,rates,init_weights,info))
);
var c__6202__auto___70834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___70834,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___70834,curve,avg10,avg20,rates,init_weights,info){
return (function (state_70808){var state_val_70809 = (state_70808[(1)]);if((state_val_70809 === (4)))
{var inst_70792 = (state_70808[(7)]);var inst_70803 = (state_70808[(2)]);var tmp70810 = inst_70792;var inst_70792__$1 = tmp70810;var state_70808__$1 = (function (){var statearr_70811 = state_70808;(statearr_70811[(7)] = inst_70792__$1);
(statearr_70811[(8)] = inst_70803);
return statearr_70811;
})();var statearr_70812_70835 = state_70808__$1;(statearr_70812_70835[(2)] = null);
(statearr_70812_70835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70809 === (3)))
{var inst_70806 = (state_70808[(2)]);var state_70808__$1 = state_70808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70808__$1,inst_70806);
} else
{if((state_val_70809 === (2)))
{var inst_70792 = (state_70808[(7)]);var inst_70795 = cljs.core.deref.call(null,info);var inst_70796 = cljs.core.nth.call(null,inst_70795,(0),null);var inst_70797 = cljs.core.nth.call(null,inst_70795,(1),null);var inst_70798 = test.stock.test_it.call(null,rates,inst_70796);var inst_70799 = test.stock.calculateMoney.call(null,curve,inst_70798,test.stock.start_money);var inst_70800 = test.stock.draw.call(null,curve,avg10,avg20,inst_70798,inst_70797,inst_70799);var inst_70801 = cljs.core.async.timeout.call(null,inst_70792);var state_70808__$1 = (function (){var statearr_70813 = state_70808;(statearr_70813[(9)] = inst_70800);
return statearr_70813;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70808__$1,(4),inst_70801);
} else
{if((state_val_70809 === (1)))
{var inst_70792 = (1000);var state_70808__$1 = (function (){var statearr_70814 = state_70808;(statearr_70814[(7)] = inst_70792);
return statearr_70814;
})();var statearr_70815_70836 = state_70808__$1;(statearr_70815_70836[(2)] = null);
(statearr_70815_70836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___70834,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___70834,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_70819 = [null,null,null,null,null,null,null,null,null,null];(statearr_70819[(0)] = state_machine__6188__auto__);
(statearr_70819[(1)] = (1));
return statearr_70819;
});
var state_machine__6188__auto____1 = (function (state_70808){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_70808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e70820){if((e70820 instanceof Object))
{var ex__6191__auto__ = e70820;var statearr_70821_70837 = state_70808;(statearr_70821_70837[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e70820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70838 = state_70808;
state_70808 = G__70838;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_70808){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_70808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___70834,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_70822 = f__6203__auto__.call(null);(statearr_70822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___70834);
return statearr_70822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___70834,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
