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
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__13437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__13437,(0),null);var h = cljs.core.nth.call(null,vec__13437,(1),null);return ((function (ctx,vec__13437,w,h){
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
var seq__13438_13456 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__13437,w,h){
return (function() { 
var G__13460__delegate = function (args){return args;
};
var G__13460 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13460__delegate.call(this,args);};
G__13460.cljs$lang$maxFixedArity = 0;
G__13460.cljs$lang$applyTo = (function (arglist__13461){
var args = cljs.core.seq(arglist__13461);
return G__13460__delegate(args);
});
G__13460.cljs$core$IFn$_invoke$arity$variadic = G__13460__delegate;
return G__13460;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__13437,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__13439_13457 = null;var count__13440_13458 = (0);var i__13441_13459 = (0);while(true){
if((i__13441_13459 < count__13440_13458))
{var vec__13442_13462 = cljs.core._nth.call(null,chunk__13439_13457,i__13441_13459);var idx_13463 = cljs.core.nth.call(null,vec__13442_13462,(0),null);var prev_13464 = cljs.core.nth.call(null,vec__13442_13462,(1),null);var curr_13465 = cljs.core.nth.call(null,vec__13442_13462,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_13463),(h - ((prev_13464 * factor) * h)));
ctx.lineTo((xoffset * (idx_13463 + (1))),(h - ((curr_13465 * factor) * h)));
ctx.stroke();
{
var G__13466 = seq__13438_13456;
var G__13467 = chunk__13439_13457;
var G__13468 = count__13440_13458;
var G__13469 = (i__13441_13459 + (1));
seq__13438_13456 = G__13466;
chunk__13439_13457 = G__13467;
count__13440_13458 = G__13468;
i__13441_13459 = G__13469;
continue;
}
} else
{var temp__4126__auto___13470 = cljs.core.seq.call(null,seq__13438_13456);if(temp__4126__auto___13470)
{var seq__13438_13471__$1 = temp__4126__auto___13470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13438_13471__$1))
{var c__4307__auto___13472 = cljs.core.chunk_first.call(null,seq__13438_13471__$1);{
var G__13473 = cljs.core.chunk_rest.call(null,seq__13438_13471__$1);
var G__13474 = c__4307__auto___13472;
var G__13475 = cljs.core.count.call(null,c__4307__auto___13472);
var G__13476 = (0);
seq__13438_13456 = G__13473;
chunk__13439_13457 = G__13474;
count__13440_13458 = G__13475;
i__13441_13459 = G__13476;
continue;
}
} else
{var vec__13443_13477 = cljs.core.first.call(null,seq__13438_13471__$1);var idx_13478 = cljs.core.nth.call(null,vec__13443_13477,(0),null);var prev_13479 = cljs.core.nth.call(null,vec__13443_13477,(1),null);var curr_13480 = cljs.core.nth.call(null,vec__13443_13477,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_13478),(h - ((prev_13479 * factor) * h)));
ctx.lineTo((xoffset * (idx_13478 + (1))),(h - ((curr_13480 * factor) * h)));
ctx.stroke();
{
var G__13481 = cljs.core.next.call(null,seq__13438_13471__$1);
var G__13482 = null;
var G__13483 = (0);
var G__13484 = (0);
seq__13438_13456 = G__13481;
chunk__13439_13457 = G__13482;
count__13440_13458 = G__13483;
i__13441_13459 = G__13484;
continue;
}
}
} else
{}
}
break;
}
var seq__13444_13485 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__13437,w,h){
return (function() { 
var G__13489__delegate = function (args){return args;
};
var G__13489 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13489__delegate.call(this,args);};
G__13489.cljs$lang$maxFixedArity = 0;
G__13489.cljs$lang$applyTo = (function (arglist__13490){
var args = cljs.core.seq(arglist__13490);
return G__13489__delegate(args);
});
G__13489.cljs$core$IFn$_invoke$arity$variadic = G__13489__delegate;
return G__13489;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__13437,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__13445_13486 = null;var count__13446_13487 = (0);var i__13447_13488 = (0);while(true){
if((i__13447_13488 < count__13446_13487))
{var vec__13448_13491 = cljs.core._nth.call(null,chunk__13445_13486,i__13447_13488);var idx_13492 = cljs.core.nth.call(null,vec__13448_13491,(0),null);var prev_13493 = cljs.core.nth.call(null,vec__13448_13491,(1),null);var curr_13494 = cljs.core.nth.call(null,vec__13448_13491,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_13492),(h - ((prev_13493 * factor) * h)));
ctx.lineTo((xoffset * (idx_13492 + (1))),(h - ((curr_13494 * factor) * h)));
ctx.stroke();
{
var G__13495 = seq__13444_13485;
var G__13496 = chunk__13445_13486;
var G__13497 = count__13446_13487;
var G__13498 = (i__13447_13488 + (1));
seq__13444_13485 = G__13495;
chunk__13445_13486 = G__13496;
count__13446_13487 = G__13497;
i__13447_13488 = G__13498;
continue;
}
} else
{var temp__4126__auto___13499 = cljs.core.seq.call(null,seq__13444_13485);if(temp__4126__auto___13499)
{var seq__13444_13500__$1 = temp__4126__auto___13499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13444_13500__$1))
{var c__4307__auto___13501 = cljs.core.chunk_first.call(null,seq__13444_13500__$1);{
var G__13502 = cljs.core.chunk_rest.call(null,seq__13444_13500__$1);
var G__13503 = c__4307__auto___13501;
var G__13504 = cljs.core.count.call(null,c__4307__auto___13501);
var G__13505 = (0);
seq__13444_13485 = G__13502;
chunk__13445_13486 = G__13503;
count__13446_13487 = G__13504;
i__13447_13488 = G__13505;
continue;
}
} else
{var vec__13449_13506 = cljs.core.first.call(null,seq__13444_13500__$1);var idx_13507 = cljs.core.nth.call(null,vec__13449_13506,(0),null);var prev_13508 = cljs.core.nth.call(null,vec__13449_13506,(1),null);var curr_13509 = cljs.core.nth.call(null,vec__13449_13506,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_13507),(h - ((prev_13508 * factor) * h)));
ctx.lineTo((xoffset * (idx_13507 + (1))),(h - ((curr_13509 * factor) * h)));
ctx.stroke();
{
var G__13510 = cljs.core.next.call(null,seq__13444_13500__$1);
var G__13511 = null;
var G__13512 = (0);
var G__13513 = (0);
seq__13444_13485 = G__13510;
chunk__13445_13486 = G__13511;
count__13446_13487 = G__13512;
i__13447_13488 = G__13513;
continue;
}
}
} else
{}
}
break;
}
var seq__13450_13514 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__13437,w,h){
return (function() { 
var G__13518__delegate = function (args){return args;
};
var G__13518 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13518__delegate.call(this,args);};
G__13518.cljs$lang$maxFixedArity = 0;
G__13518.cljs$lang$applyTo = (function (arglist__13519){
var args = cljs.core.seq(arglist__13519);
return G__13518__delegate(args);
});
G__13518.cljs$core$IFn$_invoke$arity$variadic = G__13518__delegate;
return G__13518;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__13437,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__13451_13515 = null;var count__13452_13516 = (0);var i__13453_13517 = (0);while(true){
if((i__13453_13517 < count__13452_13516))
{var vec__13454_13520 = cljs.core._nth.call(null,chunk__13451_13515,i__13453_13517);var idx_13521 = cljs.core.nth.call(null,vec__13454_13520,(0),null);var prev_13522 = cljs.core.nth.call(null,vec__13454_13520,(1),null);var curr_13523 = cljs.core.nth.call(null,vec__13454_13520,(2),null);var v_13524 = cljs.core.nth.call(null,vec__13454_13520,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_13521),(h - ((prev_13522 * factor) * h)));
ctx.lineTo((xoffset * (idx_13521 + (1))),(h - ((curr_13523 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_13521)),h);
ctx.lineTo(((3) + (xoffset * idx_13521)),(h - (v_13524 * h)));
ctx.stroke();
{
var G__13525 = seq__13450_13514;
var G__13526 = chunk__13451_13515;
var G__13527 = count__13452_13516;
var G__13528 = (i__13453_13517 + (1));
seq__13450_13514 = G__13525;
chunk__13451_13515 = G__13526;
count__13452_13516 = G__13527;
i__13453_13517 = G__13528;
continue;
}
} else
{var temp__4126__auto___13529 = cljs.core.seq.call(null,seq__13450_13514);if(temp__4126__auto___13529)
{var seq__13450_13530__$1 = temp__4126__auto___13529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13450_13530__$1))
{var c__4307__auto___13531 = cljs.core.chunk_first.call(null,seq__13450_13530__$1);{
var G__13532 = cljs.core.chunk_rest.call(null,seq__13450_13530__$1);
var G__13533 = c__4307__auto___13531;
var G__13534 = cljs.core.count.call(null,c__4307__auto___13531);
var G__13535 = (0);
seq__13450_13514 = G__13532;
chunk__13451_13515 = G__13533;
count__13452_13516 = G__13534;
i__13453_13517 = G__13535;
continue;
}
} else
{var vec__13455_13536 = cljs.core.first.call(null,seq__13450_13530__$1);var idx_13537 = cljs.core.nth.call(null,vec__13455_13536,(0),null);var prev_13538 = cljs.core.nth.call(null,vec__13455_13536,(1),null);var curr_13539 = cljs.core.nth.call(null,vec__13455_13536,(2),null);var v_13540 = cljs.core.nth.call(null,vec__13455_13536,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_13537),(h - ((prev_13538 * factor) * h)));
ctx.lineTo((xoffset * (idx_13537 + (1))),(h - ((curr_13539 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_13537)),h);
ctx.lineTo(((3) + (xoffset * idx_13537)),(h - (v_13540 * h)));
ctx.stroke();
{
var G__13541 = cljs.core.next.call(null,seq__13450_13530__$1);
var G__13542 = null;
var G__13543 = (0);
var G__13544 = (0);
seq__13450_13514 = G__13541;
chunk__13451_13515 = G__13542;
count__13452_13516 = G__13543;
i__13453_13517 = G__13544;
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
;})(ctx,vec__13437,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__13545_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__13545_SHARP_) / cljs.core.count.call(null,p1__13545_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / prev) * (curr - prev))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__13551 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__13552,p__13553){var vec__13554 = p__13552;var money__$1 = cljs.core.nth.call(null,vec__13554,(0),null);var isBuy = cljs.core.nth.call(null,vec__13554,(1),null);var vec__13555 = p__13553;var price = cljs.core.nth.call(null,vec__13555,(0),null);var rate = cljs.core.nth.call(null,vec__13555,(1),null);if(cljs.core.truth_(isBuy))
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
var G__13556__delegate = function (args){return args;
};
var G__13556 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13556__delegate.call(this,args);};
G__13556.cljs$lang$maxFixedArity = 0;
G__13556.cljs$lang$applyTo = (function (arglist__13557){
var args = cljs.core.seq(arglist__13557);
return G__13556__delegate(args);
});
G__13556.cljs$core$IFn$_invoke$arity$variadic = G__13556__delegate;
return G__13556;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__13551,(0),null);var isBuy = cljs.core.nth.call(null,vec__13551,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.07))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__13708__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__13708 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13708__delegate.call(this,args);};
G__13708.cljs$lang$maxFixedArity = 0;
G__13708.cljs$lang$applyTo = (function (arglist__13709){
var args = cljs.core.seq(arglist__13709);
return G__13708__delegate(args);
});
G__13708.cljs$core$IFn$_invoke$arity$variadic = G__13708__delegate;
return G__13708;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20),test.stock.convert_rates.call(null,avg10),test.stock.convert_rates.call(null,curve));var init_weights = cljs.core.list(cljs.core.list(cljs.core.list(4.808192556097727,1.7825236021525466,1.608210082071203,2.1156349495503304,1.5374622502348625,1.6589628354630677),cljs.core.list(1.8100758846575082,0.51657025620818,0.30041899078071094,0.22014220256835185,-0.27067053120106493,-0.13603029039211637),cljs.core.list(11.901065000126607,4.42661026517148,4.076783752778851,4.943816687457568,4.7786243911947395,4.5354890627901465),cljs.core.list(5.548832136282166,2.2436687545792964,1.9812994019536085,1.7597841788025357,1.7329836036020687,2.4985535154061154),cljs.core.list(5.437276972146936,1.600671371074915,2.388054007759834,2.169804121695976,1.6002781408397109,2.2310725037032295)),cljs.core.list(cljs.core.list(9.908141461011681,3.469061590893719,-0.3901192250332968,11.334590770921867,4.290398679358419,4.165030023799448)));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6202__auto___13710 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___13710,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___13710,curve,avg10,avg20,rates,init_weights,info){
return (function (state_13660){var state_val_13661 = (state_13660[(1)]);if((state_val_13661 === (7)))
{var inst_13650 = (state_13660[(2)]);var state_13660__$1 = (function (){var statearr_13662 = state_13660;(statearr_13662[(7)] = inst_13650);
return statearr_13662;
})();var statearr_13663_13711 = state_13660__$1;(statearr_13663_13711[(2)] = null);
(statearr_13663_13711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (6)))
{var inst_13656 = (state_13660[(2)]);var state_13660__$1 = state_13660;var statearr_13664_13712 = state_13660__$1;(statearr_13664_13712[(2)] = inst_13656);
(statearr_13664_13712[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (5)))
{var inst_13641 = (state_13660[(8)]);var inst_13653 = cljs.core.pr_str.call(null,inst_13641);var inst_13654 = console.log(inst_13653);var state_13660__$1 = state_13660;var statearr_13665_13713 = state_13660__$1;(statearr_13665_13713[(2)] = inst_13654);
(statearr_13665_13713[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (4)))
{var inst_13648 = cljs.core.async.timeout.call(null,(1));var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13660__$1,(7),inst_13648);
} else
{if((state_val_13661 === (3)))
{var inst_13658 = (state_13660[(2)]);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13660__$1,inst_13658);
} else
{if((state_val_13661 === (2)))
{var inst_13641 = (state_13660[(8)]);var inst_13636 = cljs.core.deref.call(null,info);var inst_13637 = cljs.core.nth.call(null,inst_13636,(0),null);var inst_13638 = cljs.core.nth.call(null,inst_13636,(1),null);var inst_13639 = cljs.core.list(cljs.core.list(cljs.core.list(0.535,0.535,0.535,0.535,0.535),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.465,0.465,0.465,0.465,0.465),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.25)));var inst_13640 = ai.ann.Train.call(null,inst_13637,inst_13639,(1),(0));var inst_13641__$1 = cljs.core.nth.call(null,inst_13640,(0),null);var inst_13642 = cljs.core.nth.call(null,inst_13640,(1),null);var inst_13643 = [inst_13641__$1,inst_13642];var inst_13644 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13643,null));var inst_13645 = cljs.core.reset_BANG_.call(null,info,inst_13644);var inst_13646 = (inst_13642 > 0.005);var state_13660__$1 = (function (){var statearr_13666 = state_13660;(statearr_13666[(9)] = inst_13638);
(statearr_13666[(10)] = inst_13645);
(statearr_13666[(8)] = inst_13641__$1);
return statearr_13666;
})();if(cljs.core.truth_(inst_13646))
{var statearr_13667_13714 = state_13660__$1;(statearr_13667_13714[(1)] = (4));
} else
{var statearr_13668_13715 = state_13660__$1;(statearr_13668_13715[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (1)))
{var state_13660__$1 = state_13660;var statearr_13669_13716 = state_13660__$1;(statearr_13669_13716[(2)] = null);
(statearr_13669_13716[(1)] = (2));
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
});})(c__6202__auto___13710,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___13710,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_13673 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13673[(0)] = state_machine__6188__auto__);
(statearr_13673[(1)] = (1));
return statearr_13673;
});
var state_machine__6188__auto____1 = (function (state_13660){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_13660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e13674){if((e13674 instanceof Object))
{var ex__6191__auto__ = e13674;var statearr_13675_13717 = state_13660;(statearr_13675_13717[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13718 = state_13660;
state_13660 = G__13718;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_13660){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_13660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___13710,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_13676 = f__6203__auto__.call(null);(statearr_13676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___13710);
return statearr_13676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___13710,curve,avg10,avg20,rates,init_weights,info))
);
var c__6202__auto___13719 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___13719,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___13719,curve,avg10,avg20,rates,init_weights,info){
return (function (state_13693){var state_val_13694 = (state_13693[(1)]);if((state_val_13694 === (4)))
{var inst_13677 = (state_13693[(7)]);var inst_13688 = (state_13693[(2)]);var tmp13695 = inst_13677;var inst_13677__$1 = tmp13695;var state_13693__$1 = (function (){var statearr_13696 = state_13693;(statearr_13696[(8)] = inst_13688);
(statearr_13696[(7)] = inst_13677__$1);
return statearr_13696;
})();var statearr_13697_13720 = state_13693__$1;(statearr_13697_13720[(2)] = null);
(statearr_13697_13720[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13694 === (3)))
{var inst_13691 = (state_13693[(2)]);var state_13693__$1 = state_13693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13693__$1,inst_13691);
} else
{if((state_val_13694 === (2)))
{var inst_13677 = (state_13693[(7)]);var inst_13680 = cljs.core.deref.call(null,info);var inst_13681 = cljs.core.nth.call(null,inst_13680,(0),null);var inst_13682 = cljs.core.nth.call(null,inst_13680,(1),null);var inst_13683 = test.stock.test_it.call(null,rates,inst_13681);var inst_13684 = test.stock.calculateMoney.call(null,curve,inst_13683,test.stock.start_money);var inst_13685 = test.stock.draw.call(null,curve,avg10,avg20,inst_13683,inst_13682,inst_13684);var inst_13686 = cljs.core.async.timeout.call(null,inst_13677);var state_13693__$1 = (function (){var statearr_13698 = state_13693;(statearr_13698[(9)] = inst_13685);
return statearr_13698;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13693__$1,(4),inst_13686);
} else
{if((state_val_13694 === (1)))
{var inst_13677 = (1000);var state_13693__$1 = (function (){var statearr_13699 = state_13693;(statearr_13699[(7)] = inst_13677);
return statearr_13699;
})();var statearr_13700_13721 = state_13693__$1;(statearr_13700_13721[(2)] = null);
(statearr_13700_13721[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___13719,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___13719,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_13704 = [null,null,null,null,null,null,null,null,null,null];(statearr_13704[(0)] = state_machine__6188__auto__);
(statearr_13704[(1)] = (1));
return statearr_13704;
});
var state_machine__6188__auto____1 = (function (state_13693){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_13693);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e13705){if((e13705 instanceof Object))
{var ex__6191__auto__ = e13705;var statearr_13706_13722 = state_13693;(statearr_13706_13722[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13693);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13723 = state_13693;
state_13693 = G__13723;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_13693){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_13693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___13719,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_13707 = f__6203__auto__.call(null);(statearr_13707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___13719);
return statearr_13707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___13719,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
