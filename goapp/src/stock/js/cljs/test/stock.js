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
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__12179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__12179,(0),null);var h = cljs.core.nth.call(null,vec__12179,(1),null);return ((function (ctx,vec__12179,w,h){
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
var seq__12180_12198 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__12179,w,h){
return (function() { 
var G__12202__delegate = function (args){return args;
};
var G__12202 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12202__delegate.call(this,args);};
G__12202.cljs$lang$maxFixedArity = 0;
G__12202.cljs$lang$applyTo = (function (arglist__12203){
var args = cljs.core.seq(arglist__12203);
return G__12202__delegate(args);
});
G__12202.cljs$core$IFn$_invoke$arity$variadic = G__12202__delegate;
return G__12202;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__12179,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__12181_12199 = null;var count__12182_12200 = (0);var i__12183_12201 = (0);while(true){
if((i__12183_12201 < count__12182_12200))
{var vec__12184_12204 = cljs.core._nth.call(null,chunk__12181_12199,i__12183_12201);var idx_12205 = cljs.core.nth.call(null,vec__12184_12204,(0),null);var prev_12206 = cljs.core.nth.call(null,vec__12184_12204,(1),null);var curr_12207 = cljs.core.nth.call(null,vec__12184_12204,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_12205),(h - ((prev_12206 * factor) * h)));
ctx.lineTo((xoffset * (idx_12205 + (1))),(h - ((curr_12207 * factor) * h)));
ctx.stroke();
{
var G__12208 = seq__12180_12198;
var G__12209 = chunk__12181_12199;
var G__12210 = count__12182_12200;
var G__12211 = (i__12183_12201 + (1));
seq__12180_12198 = G__12208;
chunk__12181_12199 = G__12209;
count__12182_12200 = G__12210;
i__12183_12201 = G__12211;
continue;
}
} else
{var temp__4126__auto___12212 = cljs.core.seq.call(null,seq__12180_12198);if(temp__4126__auto___12212)
{var seq__12180_12213__$1 = temp__4126__auto___12212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12180_12213__$1))
{var c__4307__auto___12214 = cljs.core.chunk_first.call(null,seq__12180_12213__$1);{
var G__12215 = cljs.core.chunk_rest.call(null,seq__12180_12213__$1);
var G__12216 = c__4307__auto___12214;
var G__12217 = cljs.core.count.call(null,c__4307__auto___12214);
var G__12218 = (0);
seq__12180_12198 = G__12215;
chunk__12181_12199 = G__12216;
count__12182_12200 = G__12217;
i__12183_12201 = G__12218;
continue;
}
} else
{var vec__12185_12219 = cljs.core.first.call(null,seq__12180_12213__$1);var idx_12220 = cljs.core.nth.call(null,vec__12185_12219,(0),null);var prev_12221 = cljs.core.nth.call(null,vec__12185_12219,(1),null);var curr_12222 = cljs.core.nth.call(null,vec__12185_12219,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_12220),(h - ((prev_12221 * factor) * h)));
ctx.lineTo((xoffset * (idx_12220 + (1))),(h - ((curr_12222 * factor) * h)));
ctx.stroke();
{
var G__12223 = cljs.core.next.call(null,seq__12180_12213__$1);
var G__12224 = null;
var G__12225 = (0);
var G__12226 = (0);
seq__12180_12198 = G__12223;
chunk__12181_12199 = G__12224;
count__12182_12200 = G__12225;
i__12183_12201 = G__12226;
continue;
}
}
} else
{}
}
break;
}
var seq__12186_12227 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__12179,w,h){
return (function() { 
var G__12231__delegate = function (args){return args;
};
var G__12231 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12231__delegate.call(this,args);};
G__12231.cljs$lang$maxFixedArity = 0;
G__12231.cljs$lang$applyTo = (function (arglist__12232){
var args = cljs.core.seq(arglist__12232);
return G__12231__delegate(args);
});
G__12231.cljs$core$IFn$_invoke$arity$variadic = G__12231__delegate;
return G__12231;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__12179,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__12187_12228 = null;var count__12188_12229 = (0);var i__12189_12230 = (0);while(true){
if((i__12189_12230 < count__12188_12229))
{var vec__12190_12233 = cljs.core._nth.call(null,chunk__12187_12228,i__12189_12230);var idx_12234 = cljs.core.nth.call(null,vec__12190_12233,(0),null);var prev_12235 = cljs.core.nth.call(null,vec__12190_12233,(1),null);var curr_12236 = cljs.core.nth.call(null,vec__12190_12233,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_12234),(h - ((prev_12235 * factor) * h)));
ctx.lineTo((xoffset * (idx_12234 + (1))),(h - ((curr_12236 * factor) * h)));
ctx.stroke();
{
var G__12237 = seq__12186_12227;
var G__12238 = chunk__12187_12228;
var G__12239 = count__12188_12229;
var G__12240 = (i__12189_12230 + (1));
seq__12186_12227 = G__12237;
chunk__12187_12228 = G__12238;
count__12188_12229 = G__12239;
i__12189_12230 = G__12240;
continue;
}
} else
{var temp__4126__auto___12241 = cljs.core.seq.call(null,seq__12186_12227);if(temp__4126__auto___12241)
{var seq__12186_12242__$1 = temp__4126__auto___12241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12186_12242__$1))
{var c__4307__auto___12243 = cljs.core.chunk_first.call(null,seq__12186_12242__$1);{
var G__12244 = cljs.core.chunk_rest.call(null,seq__12186_12242__$1);
var G__12245 = c__4307__auto___12243;
var G__12246 = cljs.core.count.call(null,c__4307__auto___12243);
var G__12247 = (0);
seq__12186_12227 = G__12244;
chunk__12187_12228 = G__12245;
count__12188_12229 = G__12246;
i__12189_12230 = G__12247;
continue;
}
} else
{var vec__12191_12248 = cljs.core.first.call(null,seq__12186_12242__$1);var idx_12249 = cljs.core.nth.call(null,vec__12191_12248,(0),null);var prev_12250 = cljs.core.nth.call(null,vec__12191_12248,(1),null);var curr_12251 = cljs.core.nth.call(null,vec__12191_12248,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_12249),(h - ((prev_12250 * factor) * h)));
ctx.lineTo((xoffset * (idx_12249 + (1))),(h - ((curr_12251 * factor) * h)));
ctx.stroke();
{
var G__12252 = cljs.core.next.call(null,seq__12186_12242__$1);
var G__12253 = null;
var G__12254 = (0);
var G__12255 = (0);
seq__12186_12227 = G__12252;
chunk__12187_12228 = G__12253;
count__12188_12229 = G__12254;
i__12189_12230 = G__12255;
continue;
}
}
} else
{}
}
break;
}
var seq__12192_12256 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__12179,w,h){
return (function() { 
var G__12260__delegate = function (args){return args;
};
var G__12260 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12260__delegate.call(this,args);};
G__12260.cljs$lang$maxFixedArity = 0;
G__12260.cljs$lang$applyTo = (function (arglist__12261){
var args = cljs.core.seq(arglist__12261);
return G__12260__delegate(args);
});
G__12260.cljs$core$IFn$_invoke$arity$variadic = G__12260__delegate;
return G__12260;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__12179,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__12193_12257 = null;var count__12194_12258 = (0);var i__12195_12259 = (0);while(true){
if((i__12195_12259 < count__12194_12258))
{var vec__12196_12262 = cljs.core._nth.call(null,chunk__12193_12257,i__12195_12259);var idx_12263 = cljs.core.nth.call(null,vec__12196_12262,(0),null);var prev_12264 = cljs.core.nth.call(null,vec__12196_12262,(1),null);var curr_12265 = cljs.core.nth.call(null,vec__12196_12262,(2),null);var v_12266 = cljs.core.nth.call(null,vec__12196_12262,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_12263),(h - ((prev_12264 * factor) * h)));
ctx.lineTo((xoffset * (idx_12263 + (1))),(h - ((curr_12265 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_12263)),h);
ctx.lineTo(((3) + (xoffset * idx_12263)),(h - (v_12266 * h)));
ctx.stroke();
{
var G__12267 = seq__12192_12256;
var G__12268 = chunk__12193_12257;
var G__12269 = count__12194_12258;
var G__12270 = (i__12195_12259 + (1));
seq__12192_12256 = G__12267;
chunk__12193_12257 = G__12268;
count__12194_12258 = G__12269;
i__12195_12259 = G__12270;
continue;
}
} else
{var temp__4126__auto___12271 = cljs.core.seq.call(null,seq__12192_12256);if(temp__4126__auto___12271)
{var seq__12192_12272__$1 = temp__4126__auto___12271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12192_12272__$1))
{var c__4307__auto___12273 = cljs.core.chunk_first.call(null,seq__12192_12272__$1);{
var G__12274 = cljs.core.chunk_rest.call(null,seq__12192_12272__$1);
var G__12275 = c__4307__auto___12273;
var G__12276 = cljs.core.count.call(null,c__4307__auto___12273);
var G__12277 = (0);
seq__12192_12256 = G__12274;
chunk__12193_12257 = G__12275;
count__12194_12258 = G__12276;
i__12195_12259 = G__12277;
continue;
}
} else
{var vec__12197_12278 = cljs.core.first.call(null,seq__12192_12272__$1);var idx_12279 = cljs.core.nth.call(null,vec__12197_12278,(0),null);var prev_12280 = cljs.core.nth.call(null,vec__12197_12278,(1),null);var curr_12281 = cljs.core.nth.call(null,vec__12197_12278,(2),null);var v_12282 = cljs.core.nth.call(null,vec__12197_12278,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_12279),(h - ((prev_12280 * factor) * h)));
ctx.lineTo((xoffset * (idx_12279 + (1))),(h - ((curr_12281 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_12279)),h);
ctx.lineTo(((3) + (xoffset * idx_12279)),(h - (v_12282 * h)));
ctx.stroke();
{
var G__12283 = cljs.core.next.call(null,seq__12192_12272__$1);
var G__12284 = null;
var G__12285 = (0);
var G__12286 = (0);
seq__12192_12256 = G__12283;
chunk__12193_12257 = G__12284;
count__12194_12258 = G__12285;
i__12195_12259 = G__12286;
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
;})(ctx,vec__12179,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__12287_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__12287_SHARP_) / cljs.core.count.call(null,p1__12287_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__12293 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__12294,p__12295){var vec__12296 = p__12294;var money__$1 = cljs.core.nth.call(null,vec__12296,(0),null);var isBuy = cljs.core.nth.call(null,vec__12296,(1),null);var vec__12297 = p__12295;var price = cljs.core.nth.call(null,vec__12297,(0),null);var rate = cljs.core.nth.call(null,vec__12297,(1),null);if(cljs.core.truth_(isBuy))
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
var G__12298__delegate = function (args){return args;
};
var G__12298 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12298__delegate.call(this,args);};
G__12298.cljs$lang$maxFixedArity = 0;
G__12298.cljs$lang$applyTo = (function (arglist__12299){
var args = cljs.core.seq(arglist__12299);
return G__12298__delegate(args);
});
G__12298.cljs$core$IFn$_invoke$arity$variadic = G__12298__delegate;
return G__12298;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__12293,(0),null);var isBuy = cljs.core.nth.call(null,vec__12293,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.07))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__12450__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__12450 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12450__delegate.call(this,args);};
G__12450.cljs$lang$maxFixedArity = 0;
G__12450.cljs$lang$applyTo = (function (arglist__12451){
var args = cljs.core.seq(arglist__12451);
return G__12450__delegate(args);
});
G__12450.cljs$core$IFn$_invoke$arity$variadic = G__12450__delegate;
return G__12450;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20,0.07),test.stock.convert_rates.call(null,avg10,0.07),test.stock.convert_rates.call(null,curve,0.07));var init_weights = ai.ann.RandWeights.call(null,(5),(5),(1));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6203__auto___12452 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12452,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12452,curve,avg10,avg20,rates,init_weights,info){
return (function (state_12402){var state_val_12403 = (state_12402[(1)]);if((state_val_12403 === (7)))
{var inst_12392 = (state_12402[(2)]);var state_12402__$1 = (function (){var statearr_12404 = state_12402;(statearr_12404[(7)] = inst_12392);
return statearr_12404;
})();var statearr_12405_12453 = state_12402__$1;(statearr_12405_12453[(2)] = null);
(statearr_12405_12453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12403 === (6)))
{var inst_12398 = (state_12402[(2)]);var state_12402__$1 = state_12402;var statearr_12406_12454 = state_12402__$1;(statearr_12406_12454[(2)] = inst_12398);
(statearr_12406_12454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12403 === (5)))
{var inst_12383 = (state_12402[(8)]);var inst_12395 = cljs.core.pr_str.call(null,inst_12383);var inst_12396 = console.log(inst_12395);var state_12402__$1 = state_12402;var statearr_12407_12455 = state_12402__$1;(statearr_12407_12455[(2)] = inst_12396);
(statearr_12407_12455[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12403 === (4)))
{var inst_12390 = cljs.core.async.timeout.call(null,(1));var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12402__$1,(7),inst_12390);
} else
{if((state_val_12403 === (3)))
{var inst_12400 = (state_12402[(2)]);var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12402__$1,inst_12400);
} else
{if((state_val_12403 === (2)))
{var inst_12383 = (state_12402[(8)]);var inst_12378 = cljs.core.deref.call(null,info);var inst_12379 = cljs.core.nth.call(null,inst_12378,(0),null);var inst_12380 = cljs.core.nth.call(null,inst_12378,(1),null);var inst_12381 = cljs.core.list(cljs.core.list(cljs.core.list(0.75,0.75,0.75,0.75,0.75),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.25,0.25,0.25,0.25,0.25),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.5)));var inst_12382 = ai.ann.Train.call(null,inst_12379,inst_12381,(1),(0));var inst_12383__$1 = cljs.core.nth.call(null,inst_12382,(0),null);var inst_12384 = cljs.core.nth.call(null,inst_12382,(1),null);var inst_12385 = [inst_12383__$1,inst_12384];var inst_12386 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12385,null));var inst_12387 = cljs.core.reset_BANG_.call(null,info,inst_12386);var inst_12388 = (inst_12384 > 5.0E-4);var state_12402__$1 = (function (){var statearr_12408 = state_12402;(statearr_12408[(8)] = inst_12383__$1);
(statearr_12408[(9)] = inst_12380);
(statearr_12408[(10)] = inst_12387);
return statearr_12408;
})();if(cljs.core.truth_(inst_12388))
{var statearr_12409_12456 = state_12402__$1;(statearr_12409_12456[(1)] = (4));
} else
{var statearr_12410_12457 = state_12402__$1;(statearr_12410_12457[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12403 === (1)))
{var state_12402__$1 = state_12402;var statearr_12411_12458 = state_12402__$1;(statearr_12411_12458[(2)] = null);
(statearr_12411_12458[(1)] = (2));
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
});})(c__6203__auto___12452,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6188__auto__,c__6203__auto___12452,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12415 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12415[(0)] = state_machine__6189__auto__);
(statearr_12415[(1)] = (1));
return statearr_12415;
});
var state_machine__6189__auto____1 = (function (state_12402){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12402);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12416){if((e12416 instanceof Object))
{var ex__6192__auto__ = e12416;var statearr_12417_12459 = state_12402;(statearr_12417_12459[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12402);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12460 = state_12402;
state_12402 = G__12460;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12402){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12452,curve,avg10,avg20,rates,init_weights,info))
})();var state__6205__auto__ = (function (){var statearr_12418 = f__6204__auto__.call(null);(statearr_12418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12452);
return statearr_12418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12452,curve,avg10,avg20,rates,init_weights,info))
);
var c__6203__auto___12461 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12461,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12461,curve,avg10,avg20,rates,init_weights,info){
return (function (state_12435){var state_val_12436 = (state_12435[(1)]);if((state_val_12436 === (4)))
{var inst_12419 = (state_12435[(7)]);var inst_12430 = (state_12435[(2)]);var tmp12437 = inst_12419;var inst_12419__$1 = tmp12437;var state_12435__$1 = (function (){var statearr_12438 = state_12435;(statearr_12438[(7)] = inst_12419__$1);
(statearr_12438[(8)] = inst_12430);
return statearr_12438;
})();var statearr_12439_12462 = state_12435__$1;(statearr_12439_12462[(2)] = null);
(statearr_12439_12462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12436 === (3)))
{var inst_12433 = (state_12435[(2)]);var state_12435__$1 = state_12435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12435__$1,inst_12433);
} else
{if((state_val_12436 === (2)))
{var inst_12419 = (state_12435[(7)]);var inst_12422 = cljs.core.deref.call(null,info);var inst_12423 = cljs.core.nth.call(null,inst_12422,(0),null);var inst_12424 = cljs.core.nth.call(null,inst_12422,(1),null);var inst_12425 = test.stock.test_it.call(null,rates,inst_12423);var inst_12426 = test.stock.calculateMoney.call(null,curve,inst_12425,test.stock.start_money);var inst_12427 = test.stock.draw.call(null,curve,avg10,avg20,inst_12425,inst_12424,inst_12426);var inst_12428 = cljs.core.async.timeout.call(null,inst_12419);var state_12435__$1 = (function (){var statearr_12440 = state_12435;(statearr_12440[(9)] = inst_12427);
return statearr_12440;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12435__$1,(4),inst_12428);
} else
{if((state_val_12436 === (1)))
{var inst_12419 = (1000);var state_12435__$1 = (function (){var statearr_12441 = state_12435;(statearr_12441[(7)] = inst_12419);
return statearr_12441;
})();var statearr_12442_12463 = state_12435__$1;(statearr_12442_12463[(2)] = null);
(statearr_12442_12463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___12461,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6188__auto__,c__6203__auto___12461,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12446 = [null,null,null,null,null,null,null,null,null,null];(statearr_12446[(0)] = state_machine__6189__auto__);
(statearr_12446[(1)] = (1));
return statearr_12446;
});
var state_machine__6189__auto____1 = (function (state_12435){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12447){if((e12447 instanceof Object))
{var ex__6192__auto__ = e12447;var statearr_12448_12464 = state_12435;(statearr_12448_12464[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12465 = state_12435;
state_12435 = G__12465;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12435){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12461,curve,avg10,avg20,rates,init_weights,info))
})();var state__6205__auto__ = (function (){var statearr_12449 = f__6204__auto__.call(null);(statearr_12449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12461);
return statearr_12449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12461,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
