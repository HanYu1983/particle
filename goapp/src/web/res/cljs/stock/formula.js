// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.sma_seq = (function sma_seq(n,vs){if((cljs.core.count.call(null,vs) >= n))
{return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,n,vs)) / n),(new cljs.core.LazySeq(null,(function (){return sma_seq.call(null,n,cljs.core.rest.call(null,vs));
}),null,null)));
} else
{return null;
}
});
/**
* 點線賺錢術的 Exponentional Moving Average 指數移動平均線
* 使用了加權型式，w為1可用於計算MACD
* 這個計算上較為正確，和yahoo股市算的很接近
*/
stock.formula.ema_seq = (function ema_seq(n,w,vs){var v = cljs.core.first.call(null,stock.formula.sma_seq.call(null,n,vs));return cljs.core.take.call(null,cljs.core.count.call(null,vs),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (v){
return (function (p__16846){var vec__16847 = p__16846;var prev_ema = cljs.core.nth.call(null,vec__16847,(0),null);var vs__$1 = cljs.core.nth.call(null,vec__16847,(1),null);var idx = cljs.core.nth.call(null,vec__16847,(2),null);var v__$1 = cljs.core.first.call(null,vs__$1);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((v__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx)))),cljs.core.rest.call(null,vs__$1),(idx + (1))], null);
});})(v))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.rest.call(null,vs),((1) + (1))], null))));
});
/**
* Standard Deviation 標準差
* n設為30很像不錯
*/
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__16848_SHARP_){return Math.pow((p1__16848_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__16849_SHARP_){return (p1__16849_SHARP_ / sd);
});})(offsets))
,offsets);return vs__$1;
});
/**
* Bull and Bear Index 多空指標
*/
stock.formula.BBI = (function BBI(n,kline){var n1 = stock.formula.sma_seq.call(null,n,stock.tool.close.call(null,kline));var n2 = stock.formula.sma_seq.call(null,(n * (2)),stock.tool.close.call(null,kline));var n3 = stock.formula.sma_seq.call(null,(n * (4)),stock.tool.close.call(null,kline));var n4 = stock.formula.sma_seq.call(null,(n * (8)),stock.tool.close.call(null,kline));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__16850__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__16850 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16850__delegate.call(this,args);};
G__16850.cljs$lang$maxFixedArity = 0;
G__16850.cljs$lang$applyTo = (function (arglist__16851){
var args = cljs.core.seq(arglist__16851);
return G__16850__delegate(args);
});
G__16850.cljs$core$IFn$_invoke$arity$variadic = G__16850__delegate;
return G__16850;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 這個指標很像實做的不太正確
*/
stock.formula.EBBI = (function EBBI(n,kline){var n1 = stock.formula.ema_seq.call(null,n,(1),stock.tool.close.call(null,kline));var n2 = stock.formula.ema_seq.call(null,(n * (2)),(1),stock.tool.close.call(null,kline));var n3 = stock.formula.ema_seq.call(null,(n * (4)),(1),stock.tool.close.call(null,kline));var n4 = stock.formula.ema_seq.call(null,(n * (8)),(1),stock.tool.close.call(null,kline));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__16852__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__16852 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16852__delegate.call(this,args);};
G__16852.cljs$lang$maxFixedArity = 0;
G__16852.cljs$lang$applyTo = (function (arglist__16853){
var args = cljs.core.seq(arglist__16853);
return G__16852__delegate(args);
});
G__16852.cljs$core$IFn$_invoke$arity$variadic = G__16852__delegate;
return G__16852;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
