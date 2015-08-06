// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__22531_SHARP_,p2__22530_SHARP_){return (p2__22530_SHARP_ - p1__22531_SHARP_);
}),vs,cljs.core.rest.call(null,vs));
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
return (function (p__22534){var vec__22535 = p__22534;var prev_ema = cljs.core.nth.call(null,vec__22535,(0),null);var vs__$1 = cljs.core.nth.call(null,vec__22535,(1),null);var idx = cljs.core.nth.call(null,vec__22535,(2),null);var v__$1 = cljs.core.first.call(null,vs__$1);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((v__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx)))),cljs.core.rest.call(null,vs__$1),(idx + (1))], null);
});})(v))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.rest.call(null,vs),((1) + (1))], null))));
});
/**
* Standard Deviation 標準差
* n設為30很像不錯
*/
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__22536_SHARP_){return Math.pow((p1__22536_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__22537_SHARP_){return (p1__22537_SHARP_ / sd);
});})(offsets))
,offsets);return vs__$1;
});
stock.formula.clock = (function clock(n,kline){var cs = stock.formula.sma_seq.call(null,n,stock.tool.close.call(null,kline));var avg = stock.formula.average.call(null,cs);var sd = stock.formula.StandardDeviation.call(null,avg,cs);var z = stock.formula.z_score.call(null,avg,sd,cs);var vs = stock.formula.sma_seq.call(null,n,stock.tool.volume.call(null,kline));var v_avg = stock.formula.average.call(null,vs);var v_sd = stock.formula.StandardDeviation.call(null,v_avg,vs);var v_z = stock.formula.z_score.call(null,v_avg,v_sd,vs);return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"sma","sma",960324195),cs,new cljs.core.Keyword(null,"avg","avg",197406200),avg,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd,new cljs.core.Keyword(null,"z","z",-789527183),z,new cljs.core.Keyword(null,"v-sma","v-sma",-813352103),vs,new cljs.core.Keyword(null,"v-avg","v-avg",1458874070),v_avg,new cljs.core.Keyword(null,"v-sd","v-sd",569101608),v_sd,new cljs.core.Keyword(null,"v-z","v-z",-1235194156),v_z], null);
});
stock.formula.xy_direction = (function xy_direction(n,x,y){var v = (((Math.atan2(y,x) + (-3.14 / n)) * ((1) / (6.28 / n))) | (0));return v;
});
stock.formula.clock_direction = (function clock_direction(x_seq,y_seq){return cljs.core.map.call(null,cljs.core.partial.call(null,stock.formula.xy_direction,(8)),stock.formula.offset_seq.call(null,x_seq),stock.formula.offset_seq.call(null,y_seq));
});
/**
* Bull and Bear Index 多空指標
*/
stock.formula.BBI = (function BBI(n,kline){var n1 = stock.formula.sma_seq.call(null,n,stock.tool.close.call(null,kline));var n2 = stock.formula.sma_seq.call(null,(n * (2)),stock.tool.close.call(null,kline));var n3 = stock.formula.sma_seq.call(null,(n * (4)),stock.tool.close.call(null,kline));var n4 = stock.formula.sma_seq.call(null,(n * (8)),stock.tool.close.call(null,kline));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__22538__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__22538 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22538__delegate.call(this,args);};
G__22538.cljs$lang$maxFixedArity = 0;
G__22538.cljs$lang$applyTo = (function (arglist__22539){
var args = cljs.core.seq(arglist__22539);
return G__22538__delegate(args);
});
G__22538.cljs$core$IFn$_invoke$arity$variadic = G__22538__delegate;
return G__22538;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 這個指標很像實做的不太正確
*/
stock.formula.EBBI = (function EBBI(n,kline){var n1 = stock.formula.ema_seq.call(null,n,(1),stock.tool.close.call(null,kline));var n2 = stock.formula.ema_seq.call(null,(n * (2)),(1),stock.tool.close.call(null,kline));var n3 = stock.formula.ema_seq.call(null,(n * (4)),(1),stock.tool.close.call(null,kline));var n4 = stock.formula.ema_seq.call(null,(n * (8)),(1),stock.tool.close.call(null,kline));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__22540__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__22540 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22540__delegate.call(this,args);};
G__22540.cljs$lang$maxFixedArity = 0;
G__22540.cljs$lang$applyTo = (function (arglist__22541){
var args = cljs.core.seq(arglist__22541);
return G__22540__delegate(args);
});
G__22540.cljs$core$IFn$_invoke$arity$variadic = G__22540__delegate;
return G__22540;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
