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
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__14454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__14454,(0),null);var h = cljs.core.nth.call(null,vec__14454,(1),null);return ((function (ctx,vec__14454,w,h){
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
var seq__14455_14473 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__14454,w,h){
return (function() { 
var G__14477__delegate = function (args){return args;
};
var G__14477 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14477__delegate.call(this,args);};
G__14477.cljs$lang$maxFixedArity = 0;
G__14477.cljs$lang$applyTo = (function (arglist__14478){
var args = cljs.core.seq(arglist__14478);
return G__14477__delegate(args);
});
G__14477.cljs$core$IFn$_invoke$arity$variadic = G__14477__delegate;
return G__14477;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__14454,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__14456_14474 = null;var count__14457_14475 = (0);var i__14458_14476 = (0);while(true){
if((i__14458_14476 < count__14457_14475))
{var vec__14459_14479 = cljs.core._nth.call(null,chunk__14456_14474,i__14458_14476);var idx_14480 = cljs.core.nth.call(null,vec__14459_14479,(0),null);var prev_14481 = cljs.core.nth.call(null,vec__14459_14479,(1),null);var curr_14482 = cljs.core.nth.call(null,vec__14459_14479,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_14480),(h - ((prev_14481 * factor) * h)));
ctx.lineTo((xoffset * (idx_14480 + (1))),(h - ((curr_14482 * factor) * h)));
ctx.stroke();
{
var G__14483 = seq__14455_14473;
var G__14484 = chunk__14456_14474;
var G__14485 = count__14457_14475;
var G__14486 = (i__14458_14476 + (1));
seq__14455_14473 = G__14483;
chunk__14456_14474 = G__14484;
count__14457_14475 = G__14485;
i__14458_14476 = G__14486;
continue;
}
} else
{var temp__4126__auto___14487 = cljs.core.seq.call(null,seq__14455_14473);if(temp__4126__auto___14487)
{var seq__14455_14488__$1 = temp__4126__auto___14487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14455_14488__$1))
{var c__4307__auto___14489 = cljs.core.chunk_first.call(null,seq__14455_14488__$1);{
var G__14490 = cljs.core.chunk_rest.call(null,seq__14455_14488__$1);
var G__14491 = c__4307__auto___14489;
var G__14492 = cljs.core.count.call(null,c__4307__auto___14489);
var G__14493 = (0);
seq__14455_14473 = G__14490;
chunk__14456_14474 = G__14491;
count__14457_14475 = G__14492;
i__14458_14476 = G__14493;
continue;
}
} else
{var vec__14460_14494 = cljs.core.first.call(null,seq__14455_14488__$1);var idx_14495 = cljs.core.nth.call(null,vec__14460_14494,(0),null);var prev_14496 = cljs.core.nth.call(null,vec__14460_14494,(1),null);var curr_14497 = cljs.core.nth.call(null,vec__14460_14494,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_14495),(h - ((prev_14496 * factor) * h)));
ctx.lineTo((xoffset * (idx_14495 + (1))),(h - ((curr_14497 * factor) * h)));
ctx.stroke();
{
var G__14498 = cljs.core.next.call(null,seq__14455_14488__$1);
var G__14499 = null;
var G__14500 = (0);
var G__14501 = (0);
seq__14455_14473 = G__14498;
chunk__14456_14474 = G__14499;
count__14457_14475 = G__14500;
i__14458_14476 = G__14501;
continue;
}
}
} else
{}
}
break;
}
var seq__14461_14502 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__14454,w,h){
return (function() { 
var G__14506__delegate = function (args){return args;
};
var G__14506 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14506__delegate.call(this,args);};
G__14506.cljs$lang$maxFixedArity = 0;
G__14506.cljs$lang$applyTo = (function (arglist__14507){
var args = cljs.core.seq(arglist__14507);
return G__14506__delegate(args);
});
G__14506.cljs$core$IFn$_invoke$arity$variadic = G__14506__delegate;
return G__14506;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__14454,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__14462_14503 = null;var count__14463_14504 = (0);var i__14464_14505 = (0);while(true){
if((i__14464_14505 < count__14463_14504))
{var vec__14465_14508 = cljs.core._nth.call(null,chunk__14462_14503,i__14464_14505);var idx_14509 = cljs.core.nth.call(null,vec__14465_14508,(0),null);var prev_14510 = cljs.core.nth.call(null,vec__14465_14508,(1),null);var curr_14511 = cljs.core.nth.call(null,vec__14465_14508,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_14509),(h - ((prev_14510 * factor) * h)));
ctx.lineTo((xoffset * (idx_14509 + (1))),(h - ((curr_14511 * factor) * h)));
ctx.stroke();
{
var G__14512 = seq__14461_14502;
var G__14513 = chunk__14462_14503;
var G__14514 = count__14463_14504;
var G__14515 = (i__14464_14505 + (1));
seq__14461_14502 = G__14512;
chunk__14462_14503 = G__14513;
count__14463_14504 = G__14514;
i__14464_14505 = G__14515;
continue;
}
} else
{var temp__4126__auto___14516 = cljs.core.seq.call(null,seq__14461_14502);if(temp__4126__auto___14516)
{var seq__14461_14517__$1 = temp__4126__auto___14516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14461_14517__$1))
{var c__4307__auto___14518 = cljs.core.chunk_first.call(null,seq__14461_14517__$1);{
var G__14519 = cljs.core.chunk_rest.call(null,seq__14461_14517__$1);
var G__14520 = c__4307__auto___14518;
var G__14521 = cljs.core.count.call(null,c__4307__auto___14518);
var G__14522 = (0);
seq__14461_14502 = G__14519;
chunk__14462_14503 = G__14520;
count__14463_14504 = G__14521;
i__14464_14505 = G__14522;
continue;
}
} else
{var vec__14466_14523 = cljs.core.first.call(null,seq__14461_14517__$1);var idx_14524 = cljs.core.nth.call(null,vec__14466_14523,(0),null);var prev_14525 = cljs.core.nth.call(null,vec__14466_14523,(1),null);var curr_14526 = cljs.core.nth.call(null,vec__14466_14523,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_14524),(h - ((prev_14525 * factor) * h)));
ctx.lineTo((xoffset * (idx_14524 + (1))),(h - ((curr_14526 * factor) * h)));
ctx.stroke();
{
var G__14527 = cljs.core.next.call(null,seq__14461_14517__$1);
var G__14528 = null;
var G__14529 = (0);
var G__14530 = (0);
seq__14461_14502 = G__14527;
chunk__14462_14503 = G__14528;
count__14463_14504 = G__14529;
i__14464_14505 = G__14530;
continue;
}
}
} else
{}
}
break;
}
var seq__14467_14531 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__14454,w,h){
return (function() { 
var G__14535__delegate = function (args){return args;
};
var G__14535 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14535__delegate.call(this,args);};
G__14535.cljs$lang$maxFixedArity = 0;
G__14535.cljs$lang$applyTo = (function (arglist__14536){
var args = cljs.core.seq(arglist__14536);
return G__14535__delegate(args);
});
G__14535.cljs$core$IFn$_invoke$arity$variadic = G__14535__delegate;
return G__14535;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__14454,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__14468_14532 = null;var count__14469_14533 = (0);var i__14470_14534 = (0);while(true){
if((i__14470_14534 < count__14469_14533))
{var vec__14471_14537 = cljs.core._nth.call(null,chunk__14468_14532,i__14470_14534);var idx_14538 = cljs.core.nth.call(null,vec__14471_14537,(0),null);var prev_14539 = cljs.core.nth.call(null,vec__14471_14537,(1),null);var curr_14540 = cljs.core.nth.call(null,vec__14471_14537,(2),null);var v_14541 = cljs.core.nth.call(null,vec__14471_14537,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_14538),(h - ((prev_14539 * factor) * h)));
ctx.lineTo((xoffset * (idx_14538 + (1))),(h - ((curr_14540 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_14538)),h);
ctx.lineTo(((3) + (xoffset * idx_14538)),(h - (v_14541 * h)));
ctx.stroke();
{
var G__14542 = seq__14467_14531;
var G__14543 = chunk__14468_14532;
var G__14544 = count__14469_14533;
var G__14545 = (i__14470_14534 + (1));
seq__14467_14531 = G__14542;
chunk__14468_14532 = G__14543;
count__14469_14533 = G__14544;
i__14470_14534 = G__14545;
continue;
}
} else
{var temp__4126__auto___14546 = cljs.core.seq.call(null,seq__14467_14531);if(temp__4126__auto___14546)
{var seq__14467_14547__$1 = temp__4126__auto___14546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14467_14547__$1))
{var c__4307__auto___14548 = cljs.core.chunk_first.call(null,seq__14467_14547__$1);{
var G__14549 = cljs.core.chunk_rest.call(null,seq__14467_14547__$1);
var G__14550 = c__4307__auto___14548;
var G__14551 = cljs.core.count.call(null,c__4307__auto___14548);
var G__14552 = (0);
seq__14467_14531 = G__14549;
chunk__14468_14532 = G__14550;
count__14469_14533 = G__14551;
i__14470_14534 = G__14552;
continue;
}
} else
{var vec__14472_14553 = cljs.core.first.call(null,seq__14467_14547__$1);var idx_14554 = cljs.core.nth.call(null,vec__14472_14553,(0),null);var prev_14555 = cljs.core.nth.call(null,vec__14472_14553,(1),null);var curr_14556 = cljs.core.nth.call(null,vec__14472_14553,(2),null);var v_14557 = cljs.core.nth.call(null,vec__14472_14553,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_14554),(h - ((prev_14555 * factor) * h)));
ctx.lineTo((xoffset * (idx_14554 + (1))),(h - ((curr_14556 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_14554)),h);
ctx.lineTo(((3) + (xoffset * idx_14554)),(h - (v_14557 * h)));
ctx.stroke();
{
var G__14558 = cljs.core.next.call(null,seq__14467_14547__$1);
var G__14559 = null;
var G__14560 = (0);
var G__14561 = (0);
seq__14467_14531 = G__14558;
chunk__14468_14532 = G__14559;
count__14469_14533 = G__14560;
i__14470_14534 = G__14561;
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
;})(ctx,vec__14454,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14562_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14562_SHARP_) / cljs.core.count.call(null,p1__14562_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__14568 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__14569,p__14570){var vec__14571 = p__14569;var money__$1 = cljs.core.nth.call(null,vec__14571,(0),null);var isBuy = cljs.core.nth.call(null,vec__14571,(1),null);var vec__14572 = p__14570;var price = cljs.core.nth.call(null,vec__14572,(0),null);var rate = cljs.core.nth.call(null,vec__14572,(1),null);if(cljs.core.truth_(isBuy))
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
var G__14573__delegate = function (args){return args;
};
var G__14573 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14573__delegate.call(this,args);};
G__14573.cljs$lang$maxFixedArity = 0;
G__14573.cljs$lang$applyTo = (function (arglist__14574){
var args = cljs.core.seq(arglist__14574);
return G__14573__delegate(args);
});
G__14573.cljs$core$IFn$_invoke$arity$variadic = G__14573__delegate;
return G__14573;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__14568,(0),null);var isBuy = cljs.core.nth.call(null,vec__14568,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.07))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__14725__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__14725 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14725__delegate.call(this,args);};
G__14725.cljs$lang$maxFixedArity = 0;
G__14725.cljs$lang$applyTo = (function (arglist__14726){
var args = cljs.core.seq(arglist__14726);
return G__14725__delegate(args);
});
G__14725.cljs$core$IFn$_invoke$arity$variadic = G__14725__delegate;
return G__14725;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20,0.07),test.stock.convert_rates.call(null,avg10,0.07),test.stock.convert_rates.call(null,curve,0.07));var init_weights = ai.ann.RandWeights.call(null,(5),(5),(1));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6203__auto___14727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14727,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14727,curve,avg10,avg20,rates,init_weights,info){
return (function (state_14677){var state_val_14678 = (state_14677[(1)]);if((state_val_14678 === (7)))
{var inst_14667 = (state_14677[(2)]);var state_14677__$1 = (function (){var statearr_14679 = state_14677;(statearr_14679[(7)] = inst_14667);
return statearr_14679;
})();var statearr_14680_14728 = state_14677__$1;(statearr_14680_14728[(2)] = null);
(statearr_14680_14728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14678 === (6)))
{var inst_14673 = (state_14677[(2)]);var state_14677__$1 = state_14677;var statearr_14681_14729 = state_14677__$1;(statearr_14681_14729[(2)] = inst_14673);
(statearr_14681_14729[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14678 === (5)))
{var inst_14658 = (state_14677[(8)]);var inst_14670 = cljs.core.pr_str.call(null,inst_14658);var inst_14671 = console.log(inst_14670);var state_14677__$1 = state_14677;var statearr_14682_14730 = state_14677__$1;(statearr_14682_14730[(2)] = inst_14671);
(statearr_14682_14730[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14678 === (4)))
{var inst_14665 = cljs.core.async.timeout.call(null,(1));var state_14677__$1 = state_14677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14677__$1,(7),inst_14665);
} else
{if((state_val_14678 === (3)))
{var inst_14675 = (state_14677[(2)]);var state_14677__$1 = state_14677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14677__$1,inst_14675);
} else
{if((state_val_14678 === (2)))
{var inst_14658 = (state_14677[(8)]);var inst_14653 = cljs.core.deref.call(null,info);var inst_14654 = cljs.core.nth.call(null,inst_14653,(0),null);var inst_14655 = cljs.core.nth.call(null,inst_14653,(1),null);var inst_14656 = cljs.core.list(cljs.core.list(cljs.core.list(0.75,0.75,0.75,0.75,0.75),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.25,0.25,0.25,0.25,0.25),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.5)));var inst_14657 = ai.ann.Train.call(null,inst_14654,inst_14656,(1),(0));var inst_14658__$1 = cljs.core.nth.call(null,inst_14657,(0),null);var inst_14659 = cljs.core.nth.call(null,inst_14657,(1),null);var inst_14660 = [inst_14658__$1,inst_14659];var inst_14661 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14660,null));var inst_14662 = cljs.core.reset_BANG_.call(null,info,inst_14661);var inst_14663 = (inst_14659 > 5.0E-4);var state_14677__$1 = (function (){var statearr_14683 = state_14677;(statearr_14683[(9)] = inst_14662);
(statearr_14683[(8)] = inst_14658__$1);
(statearr_14683[(10)] = inst_14655);
return statearr_14683;
})();if(cljs.core.truth_(inst_14663))
{var statearr_14684_14731 = state_14677__$1;(statearr_14684_14731[(1)] = (4));
} else
{var statearr_14685_14732 = state_14677__$1;(statearr_14685_14732[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14678 === (1)))
{var state_14677__$1 = state_14677;var statearr_14686_14733 = state_14677__$1;(statearr_14686_14733[(2)] = null);
(statearr_14686_14733[(1)] = (2));
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
});})(c__6203__auto___14727,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6188__auto__,c__6203__auto___14727,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14690 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14690[(0)] = state_machine__6189__auto__);
(statearr_14690[(1)] = (1));
return statearr_14690;
});
var state_machine__6189__auto____1 = (function (state_14677){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14677);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14691){if((e14691 instanceof Object))
{var ex__6192__auto__ = e14691;var statearr_14692_14734 = state_14677;(statearr_14692_14734[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14677);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14735 = state_14677;
state_14677 = G__14735;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14677){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14727,curve,avg10,avg20,rates,init_weights,info))
})();var state__6205__auto__ = (function (){var statearr_14693 = f__6204__auto__.call(null);(statearr_14693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14727);
return statearr_14693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14727,curve,avg10,avg20,rates,init_weights,info))
);
var c__6203__auto___14736 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14736,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14736,curve,avg10,avg20,rates,init_weights,info){
return (function (state_14710){var state_val_14711 = (state_14710[(1)]);if((state_val_14711 === (4)))
{var inst_14694 = (state_14710[(7)]);var inst_14705 = (state_14710[(2)]);var tmp14712 = inst_14694;var inst_14694__$1 = tmp14712;var state_14710__$1 = (function (){var statearr_14713 = state_14710;(statearr_14713[(8)] = inst_14705);
(statearr_14713[(7)] = inst_14694__$1);
return statearr_14713;
})();var statearr_14714_14737 = state_14710__$1;(statearr_14714_14737[(2)] = null);
(statearr_14714_14737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14711 === (3)))
{var inst_14708 = (state_14710[(2)]);var state_14710__$1 = state_14710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14710__$1,inst_14708);
} else
{if((state_val_14711 === (2)))
{var inst_14694 = (state_14710[(7)]);var inst_14697 = cljs.core.deref.call(null,info);var inst_14698 = cljs.core.nth.call(null,inst_14697,(0),null);var inst_14699 = cljs.core.nth.call(null,inst_14697,(1),null);var inst_14700 = test.stock.test_it.call(null,rates,inst_14698);var inst_14701 = test.stock.calculateMoney.call(null,curve,inst_14700,test.stock.start_money);var inst_14702 = test.stock.draw.call(null,curve,avg10,avg20,inst_14700,inst_14699,inst_14701);var inst_14703 = cljs.core.async.timeout.call(null,inst_14694);var state_14710__$1 = (function (){var statearr_14715 = state_14710;(statearr_14715[(9)] = inst_14702);
return statearr_14715;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14710__$1,(4),inst_14703);
} else
{if((state_val_14711 === (1)))
{var inst_14694 = (1000);var state_14710__$1 = (function (){var statearr_14716 = state_14710;(statearr_14716[(7)] = inst_14694);
return statearr_14716;
})();var statearr_14717_14738 = state_14710__$1;(statearr_14717_14738[(2)] = null);
(statearr_14717_14738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___14736,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6188__auto__,c__6203__auto___14736,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14721 = [null,null,null,null,null,null,null,null,null,null];(statearr_14721[(0)] = state_machine__6189__auto__);
(statearr_14721[(1)] = (1));
return statearr_14721;
});
var state_machine__6189__auto____1 = (function (state_14710){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14710);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14722){if((e14722 instanceof Object))
{var ex__6192__auto__ = e14722;var statearr_14723_14739 = state_14710;(statearr_14723_14739[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14740 = state_14710;
state_14710 = G__14740;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14710){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14736,curve,avg10,avg20,rates,init_weights,info))
})();var state__6205__auto__ = (function (){var statearr_14724 = f__6204__auto__.call(null);(statearr_14724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14736);
return statearr_14724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14736,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
