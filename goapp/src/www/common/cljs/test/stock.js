// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ai.ann');
goog.require('ai.ann');
goog.require('cljs.core.async');
test.stock.k_line_count = (100);
test.stock.buy_rate = 0.5;
test.stock.start_money = (100000);
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__23539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__23539,(0),null);var h = cljs.core.nth.call(null,vec__23539,(1),null);return ((function (ctx,vec__23539,w,h){
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
var seq__23540_23558 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__23539,w,h){
return (function() { 
var G__23562__delegate = function (args){return args;
};
var G__23562 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23562__delegate.call(this,args);};
G__23562.cljs$lang$maxFixedArity = 0;
G__23562.cljs$lang$applyTo = (function (arglist__23563){
var args = cljs.core.seq(arglist__23563);
return G__23562__delegate(args);
});
G__23562.cljs$core$IFn$_invoke$arity$variadic = G__23562__delegate;
return G__23562;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__23539,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__23541_23559 = null;var count__23542_23560 = (0);var i__23543_23561 = (0);while(true){
if((i__23543_23561 < count__23542_23560))
{var vec__23544_23564 = cljs.core._nth.call(null,chunk__23541_23559,i__23543_23561);var idx_23565 = cljs.core.nth.call(null,vec__23544_23564,(0),null);var prev_23566 = cljs.core.nth.call(null,vec__23544_23564,(1),null);var curr_23567 = cljs.core.nth.call(null,vec__23544_23564,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_23565),(h - ((prev_23566 * factor) * h)));
ctx.lineTo((xoffset * (idx_23565 + (1))),(h - ((curr_23567 * factor) * h)));
ctx.stroke();
{
var G__23568 = seq__23540_23558;
var G__23569 = chunk__23541_23559;
var G__23570 = count__23542_23560;
var G__23571 = (i__23543_23561 + (1));
seq__23540_23558 = G__23568;
chunk__23541_23559 = G__23569;
count__23542_23560 = G__23570;
i__23543_23561 = G__23571;
continue;
}
} else
{var temp__4126__auto___23572 = cljs.core.seq.call(null,seq__23540_23558);if(temp__4126__auto___23572)
{var seq__23540_23573__$1 = temp__4126__auto___23572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23540_23573__$1))
{var c__4307__auto___23574 = cljs.core.chunk_first.call(null,seq__23540_23573__$1);{
var G__23575 = cljs.core.chunk_rest.call(null,seq__23540_23573__$1);
var G__23576 = c__4307__auto___23574;
var G__23577 = cljs.core.count.call(null,c__4307__auto___23574);
var G__23578 = (0);
seq__23540_23558 = G__23575;
chunk__23541_23559 = G__23576;
count__23542_23560 = G__23577;
i__23543_23561 = G__23578;
continue;
}
} else
{var vec__23545_23579 = cljs.core.first.call(null,seq__23540_23573__$1);var idx_23580 = cljs.core.nth.call(null,vec__23545_23579,(0),null);var prev_23581 = cljs.core.nth.call(null,vec__23545_23579,(1),null);var curr_23582 = cljs.core.nth.call(null,vec__23545_23579,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_23580),(h - ((prev_23581 * factor) * h)));
ctx.lineTo((xoffset * (idx_23580 + (1))),(h - ((curr_23582 * factor) * h)));
ctx.stroke();
{
var G__23583 = cljs.core.next.call(null,seq__23540_23573__$1);
var G__23584 = null;
var G__23585 = (0);
var G__23586 = (0);
seq__23540_23558 = G__23583;
chunk__23541_23559 = G__23584;
count__23542_23560 = G__23585;
i__23543_23561 = G__23586;
continue;
}
}
} else
{}
}
break;
}
var seq__23546_23587 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__23539,w,h){
return (function() { 
var G__23591__delegate = function (args){return args;
};
var G__23591 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23591__delegate.call(this,args);};
G__23591.cljs$lang$maxFixedArity = 0;
G__23591.cljs$lang$applyTo = (function (arglist__23592){
var args = cljs.core.seq(arglist__23592);
return G__23591__delegate(args);
});
G__23591.cljs$core$IFn$_invoke$arity$variadic = G__23591__delegate;
return G__23591;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__23539,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__23547_23588 = null;var count__23548_23589 = (0);var i__23549_23590 = (0);while(true){
if((i__23549_23590 < count__23548_23589))
{var vec__23550_23593 = cljs.core._nth.call(null,chunk__23547_23588,i__23549_23590);var idx_23594 = cljs.core.nth.call(null,vec__23550_23593,(0),null);var prev_23595 = cljs.core.nth.call(null,vec__23550_23593,(1),null);var curr_23596 = cljs.core.nth.call(null,vec__23550_23593,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_23594),(h - ((prev_23595 * factor) * h)));
ctx.lineTo((xoffset * (idx_23594 + (1))),(h - ((curr_23596 * factor) * h)));
ctx.stroke();
{
var G__23597 = seq__23546_23587;
var G__23598 = chunk__23547_23588;
var G__23599 = count__23548_23589;
var G__23600 = (i__23549_23590 + (1));
seq__23546_23587 = G__23597;
chunk__23547_23588 = G__23598;
count__23548_23589 = G__23599;
i__23549_23590 = G__23600;
continue;
}
} else
{var temp__4126__auto___23601 = cljs.core.seq.call(null,seq__23546_23587);if(temp__4126__auto___23601)
{var seq__23546_23602__$1 = temp__4126__auto___23601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23546_23602__$1))
{var c__4307__auto___23603 = cljs.core.chunk_first.call(null,seq__23546_23602__$1);{
var G__23604 = cljs.core.chunk_rest.call(null,seq__23546_23602__$1);
var G__23605 = c__4307__auto___23603;
var G__23606 = cljs.core.count.call(null,c__4307__auto___23603);
var G__23607 = (0);
seq__23546_23587 = G__23604;
chunk__23547_23588 = G__23605;
count__23548_23589 = G__23606;
i__23549_23590 = G__23607;
continue;
}
} else
{var vec__23551_23608 = cljs.core.first.call(null,seq__23546_23602__$1);var idx_23609 = cljs.core.nth.call(null,vec__23551_23608,(0),null);var prev_23610 = cljs.core.nth.call(null,vec__23551_23608,(1),null);var curr_23611 = cljs.core.nth.call(null,vec__23551_23608,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_23609),(h - ((prev_23610 * factor) * h)));
ctx.lineTo((xoffset * (idx_23609 + (1))),(h - ((curr_23611 * factor) * h)));
ctx.stroke();
{
var G__23612 = cljs.core.next.call(null,seq__23546_23602__$1);
var G__23613 = null;
var G__23614 = (0);
var G__23615 = (0);
seq__23546_23587 = G__23612;
chunk__23547_23588 = G__23613;
count__23548_23589 = G__23614;
i__23549_23590 = G__23615;
continue;
}
}
} else
{}
}
break;
}
var seq__23552_23616 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__23539,w,h){
return (function() { 
var G__23620__delegate = function (args){return args;
};
var G__23620 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23620__delegate.call(this,args);};
G__23620.cljs$lang$maxFixedArity = 0;
G__23620.cljs$lang$applyTo = (function (arglist__23621){
var args = cljs.core.seq(arglist__23621);
return G__23620__delegate(args);
});
G__23620.cljs$core$IFn$_invoke$arity$variadic = G__23620__delegate;
return G__23620;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__23539,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__23553_23617 = null;var count__23554_23618 = (0);var i__23555_23619 = (0);while(true){
if((i__23555_23619 < count__23554_23618))
{var vec__23556_23622 = cljs.core._nth.call(null,chunk__23553_23617,i__23555_23619);var idx_23623 = cljs.core.nth.call(null,vec__23556_23622,(0),null);var prev_23624 = cljs.core.nth.call(null,vec__23556_23622,(1),null);var curr_23625 = cljs.core.nth.call(null,vec__23556_23622,(2),null);var v_23626 = cljs.core.nth.call(null,vec__23556_23622,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_23623),(h - ((prev_23624 * factor) * h)));
ctx.lineTo((xoffset * (idx_23623 + (1))),(h - ((curr_23625 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_23623)),h);
ctx.lineTo(((3) + (xoffset * idx_23623)),(h - (v_23626 * h)));
ctx.stroke();
{
var G__23627 = seq__23552_23616;
var G__23628 = chunk__23553_23617;
var G__23629 = count__23554_23618;
var G__23630 = (i__23555_23619 + (1));
seq__23552_23616 = G__23627;
chunk__23553_23617 = G__23628;
count__23554_23618 = G__23629;
i__23555_23619 = G__23630;
continue;
}
} else
{var temp__4126__auto___23631 = cljs.core.seq.call(null,seq__23552_23616);if(temp__4126__auto___23631)
{var seq__23552_23632__$1 = temp__4126__auto___23631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23552_23632__$1))
{var c__4307__auto___23633 = cljs.core.chunk_first.call(null,seq__23552_23632__$1);{
var G__23634 = cljs.core.chunk_rest.call(null,seq__23552_23632__$1);
var G__23635 = c__4307__auto___23633;
var G__23636 = cljs.core.count.call(null,c__4307__auto___23633);
var G__23637 = (0);
seq__23552_23616 = G__23634;
chunk__23553_23617 = G__23635;
count__23554_23618 = G__23636;
i__23555_23619 = G__23637;
continue;
}
} else
{var vec__23557_23638 = cljs.core.first.call(null,seq__23552_23632__$1);var idx_23639 = cljs.core.nth.call(null,vec__23557_23638,(0),null);var prev_23640 = cljs.core.nth.call(null,vec__23557_23638,(1),null);var curr_23641 = cljs.core.nth.call(null,vec__23557_23638,(2),null);var v_23642 = cljs.core.nth.call(null,vec__23557_23638,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_23639),(h - ((prev_23640 * factor) * h)));
ctx.lineTo((xoffset * (idx_23639 + (1))),(h - ((curr_23641 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_23639)),h);
ctx.lineTo(((3) + (xoffset * idx_23639)),(h - (v_23642 * h)));
ctx.stroke();
{
var G__23643 = cljs.core.next.call(null,seq__23552_23632__$1);
var G__23644 = null;
var G__23645 = (0);
var G__23646 = (0);
seq__23552_23616 = G__23643;
chunk__23553_23617 = G__23644;
count__23554_23618 = G__23645;
i__23555_23619 = G__23646;
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
;})(ctx,vec__23539,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__23647_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__23647_SHARP_) / cljs.core.count.call(null,p1__23647_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__23653 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__23654,p__23655){var vec__23656 = p__23654;var money__$1 = cljs.core.nth.call(null,vec__23656,(0),null);var isBuy = cljs.core.nth.call(null,vec__23656,(1),null);var vec__23657 = p__23655;var price = cljs.core.nth.call(null,vec__23657,(0),null);var rate = cljs.core.nth.call(null,vec__23657,(1),null);if(cljs.core.truth_(isBuy))
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
var G__23658__delegate = function (args){return args;
};
var G__23658 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23658__delegate.call(this,args);};
G__23658.cljs$lang$maxFixedArity = 0;
G__23658.cljs$lang$applyTo = (function (arglist__23659){
var args = cljs.core.seq(arglist__23659);
return G__23658__delegate(args);
});
G__23658.cljs$core$IFn$_invoke$arity$variadic = G__23658__delegate;
return G__23658;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__23653,(0),null);var isBuy = cljs.core.nth.call(null,vec__23653,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.07))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__23810__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__23810 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23810__delegate.call(this,args);};
G__23810.cljs$lang$maxFixedArity = 0;
G__23810.cljs$lang$applyTo = (function (arglist__23811){
var args = cljs.core.seq(arglist__23811);
return G__23810__delegate(args);
});
G__23810.cljs$core$IFn$_invoke$arity$variadic = G__23810__delegate;
return G__23810;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20,0.07),test.stock.convert_rates.call(null,avg10,0.07),test.stock.convert_rates.call(null,curve,0.07));var init_weights = ai.ann.RandWeights.call(null,(5),(5),(1));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6202__auto___23812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___23812,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___23812,curve,avg10,avg20,rates,init_weights,info){
return (function (state_23762){var state_val_23763 = (state_23762[(1)]);if((state_val_23763 === (7)))
{var inst_23752 = (state_23762[(2)]);var state_23762__$1 = (function (){var statearr_23764 = state_23762;(statearr_23764[(7)] = inst_23752);
return statearr_23764;
})();var statearr_23765_23813 = state_23762__$1;(statearr_23765_23813[(2)] = null);
(statearr_23765_23813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23763 === (6)))
{var inst_23758 = (state_23762[(2)]);var state_23762__$1 = state_23762;var statearr_23766_23814 = state_23762__$1;(statearr_23766_23814[(2)] = inst_23758);
(statearr_23766_23814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23763 === (5)))
{var inst_23743 = (state_23762[(8)]);var inst_23755 = cljs.core.pr_str.call(null,inst_23743);var inst_23756 = console.log(inst_23755);var state_23762__$1 = state_23762;var statearr_23767_23815 = state_23762__$1;(statearr_23767_23815[(2)] = inst_23756);
(statearr_23767_23815[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23763 === (4)))
{var inst_23750 = cljs.core.async.timeout.call(null,(1));var state_23762__$1 = state_23762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23762__$1,(7),inst_23750);
} else
{if((state_val_23763 === (3)))
{var inst_23760 = (state_23762[(2)]);var state_23762__$1 = state_23762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23762__$1,inst_23760);
} else
{if((state_val_23763 === (2)))
{var inst_23743 = (state_23762[(8)]);var inst_23738 = cljs.core.deref.call(null,info);var inst_23739 = cljs.core.nth.call(null,inst_23738,(0),null);var inst_23740 = cljs.core.nth.call(null,inst_23738,(1),null);var inst_23741 = cljs.core.list(cljs.core.list(cljs.core.list(0.75,0.75,0.75,0.75,0.75),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.25,0.25,0.25,0.25,0.25),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.5)));var inst_23742 = ai.ann.Train.call(null,inst_23739,inst_23741,(1),(0));var inst_23743__$1 = cljs.core.nth.call(null,inst_23742,(0),null);var inst_23744 = cljs.core.nth.call(null,inst_23742,(1),null);var inst_23745 = [inst_23743__$1,inst_23744];var inst_23746 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23745,null));var inst_23747 = cljs.core.reset_BANG_.call(null,info,inst_23746);var inst_23748 = (inst_23744 > 5.0E-4);var state_23762__$1 = (function (){var statearr_23768 = state_23762;(statearr_23768[(9)] = inst_23747);
(statearr_23768[(10)] = inst_23740);
(statearr_23768[(8)] = inst_23743__$1);
return statearr_23768;
})();if(cljs.core.truth_(inst_23748))
{var statearr_23769_23816 = state_23762__$1;(statearr_23769_23816[(1)] = (4));
} else
{var statearr_23770_23817 = state_23762__$1;(statearr_23770_23817[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23763 === (1)))
{var state_23762__$1 = state_23762;var statearr_23771_23818 = state_23762__$1;(statearr_23771_23818[(2)] = null);
(statearr_23771_23818[(1)] = (2));
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
});})(c__6202__auto___23812,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___23812,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23775 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23775[(0)] = state_machine__6188__auto__);
(statearr_23775[(1)] = (1));
return statearr_23775;
});
var state_machine__6188__auto____1 = (function (state_23762){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23776){if((e23776 instanceof Object))
{var ex__6191__auto__ = e23776;var statearr_23777_23819 = state_23762;(statearr_23777_23819[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23820 = state_23762;
state_23762 = G__23820;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23762){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___23812,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_23778 = f__6203__auto__.call(null);(statearr_23778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___23812);
return statearr_23778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___23812,curve,avg10,avg20,rates,init_weights,info))
);
var c__6202__auto___23821 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___23821,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___23821,curve,avg10,avg20,rates,init_weights,info){
return (function (state_23795){var state_val_23796 = (state_23795[(1)]);if((state_val_23796 === (4)))
{var inst_23779 = (state_23795[(7)]);var inst_23790 = (state_23795[(2)]);var tmp23797 = inst_23779;var inst_23779__$1 = tmp23797;var state_23795__$1 = (function (){var statearr_23798 = state_23795;(statearr_23798[(7)] = inst_23779__$1);
(statearr_23798[(8)] = inst_23790);
return statearr_23798;
})();var statearr_23799_23822 = state_23795__$1;(statearr_23799_23822[(2)] = null);
(statearr_23799_23822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23796 === (3)))
{var inst_23793 = (state_23795[(2)]);var state_23795__$1 = state_23795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23795__$1,inst_23793);
} else
{if((state_val_23796 === (2)))
{var inst_23779 = (state_23795[(7)]);var inst_23782 = cljs.core.deref.call(null,info);var inst_23783 = cljs.core.nth.call(null,inst_23782,(0),null);var inst_23784 = cljs.core.nth.call(null,inst_23782,(1),null);var inst_23785 = test.stock.test_it.call(null,rates,inst_23783);var inst_23786 = test.stock.calculateMoney.call(null,curve,inst_23785,test.stock.start_money);var inst_23787 = test.stock.draw.call(null,curve,avg10,avg20,inst_23785,inst_23784,inst_23786);var inst_23788 = cljs.core.async.timeout.call(null,inst_23779);var state_23795__$1 = (function (){var statearr_23800 = state_23795;(statearr_23800[(9)] = inst_23787);
return statearr_23800;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23795__$1,(4),inst_23788);
} else
{if((state_val_23796 === (1)))
{var inst_23779 = (1000);var state_23795__$1 = (function (){var statearr_23801 = state_23795;(statearr_23801[(7)] = inst_23779);
return statearr_23801;
})();var statearr_23802_23823 = state_23795__$1;(statearr_23802_23823[(2)] = null);
(statearr_23802_23823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___23821,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___23821,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23806 = [null,null,null,null,null,null,null,null,null,null];(statearr_23806[(0)] = state_machine__6188__auto__);
(statearr_23806[(1)] = (1));
return statearr_23806;
});
var state_machine__6188__auto____1 = (function (state_23795){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23795);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23807){if((e23807 instanceof Object))
{var ex__6191__auto__ = e23807;var statearr_23808_23824 = state_23795;(statearr_23808_23824[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23825 = state_23795;
state_23795 = G__23825;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23795){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___23821,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_23809 = f__6203__auto__.call(null);(statearr_23809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___23821);
return statearr_23809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___23821,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
