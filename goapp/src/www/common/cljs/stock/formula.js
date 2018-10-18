// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__21995_SHARP_,p2__21994_SHARP_){return (p2__21994_SHARP_ - p1__21995_SHARP_);
}),vs,cljs.core.rest.call(null,vs));
});
stock.formula.nkline = (function nkline(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__22004 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__22004,(0),null);var open = cljs.core.nth.call(null,vec__22004,(1),null);var _ = cljs.core.nth.call(null,vec__22004,(2),null);var ___$1 = cljs.core.nth.call(null,vec__22004,(3),null);var ___$2 = cljs.core.nth.call(null,vec__22004,(4),null);var ___$3 = cljs.core.nth.call(null,vec__22004,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__22004,date,open,_,___$1,___$2,___$3){
return (function (p__22006){var vec__22007 = p__22006;var ___$4 = cljs.core.nth.call(null,vec__22007,(0),null);var ___$5 = cljs.core.nth.call(null,vec__22007,(1),null);var high = cljs.core.nth.call(null,vec__22007,(2),null);var ___$6 = cljs.core.nth.call(null,vec__22007,(3),null);var ___$7 = cljs.core.nth.call(null,vec__22007,(4),null);var ___$8 = cljs.core.nth.call(null,vec__22007,(5),null);return high;
});})(group,vec__22004,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__22004,date,open,_,___$1,___$2,___$3,high){
return (function (p__22008){var vec__22009 = p__22008;var ___$4 = cljs.core.nth.call(null,vec__22009,(0),null);var ___$5 = cljs.core.nth.call(null,vec__22009,(1),null);var ___$6 = cljs.core.nth.call(null,vec__22009,(2),null);var low = cljs.core.nth.call(null,vec__22009,(3),null);var ___$7 = cljs.core.nth.call(null,vec__22009,(4),null);var ___$8 = cljs.core.nth.call(null,vec__22009,(5),null);return low;
});})(group,vec__22004,date,open,_,___$1,___$2,___$3,high))
,group));var vec__22005 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__22005,(0),null);var ___$5 = cljs.core.nth.call(null,vec__22005,(1),null);var ___$6 = cljs.core.nth.call(null,vec__22005,(2),null);var ___$7 = cljs.core.nth.call(null,vec__22005,(3),null);var close = cljs.core.nth.call(null,vec__22005,(4),null);var ___$8 = cljs.core.nth.call(null,vec__22005,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__22004,date,open,_,___$1,___$2,___$3,high,low,vec__22005,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__22010){var vec__22011 = p__22010;var ___$9 = cljs.core.nth.call(null,vec__22011,(0),null);var ___$10 = cljs.core.nth.call(null,vec__22011,(1),null);var ___$11 = cljs.core.nth.call(null,vec__22011,(2),null);var ___$12 = cljs.core.nth.call(null,vec__22011,(3),null);var ___$13 = cljs.core.nth.call(null,vec__22011,(4),null);var volume = cljs.core.nth.call(null,vec__22011,(5),null);return volume;
});})(group,vec__22004,date,open,_,___$1,___$2,___$3,high,low,vec__22005,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__22004,date,open,_,___$1,___$2,___$3,high,low,vec__22005,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return nkline.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__22004,date,open,_,___$1,___$2,___$3,high,low,vec__22005,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
/**
* 移動平均線
*/
stock.formula.sma_seq = (function sma_seq(n,vs){if((cljs.core.count.call(null,vs) >= n))
{var fv = stock.formula.average.call(null,cljs.core.take.call(null,n,vs));return cljs.core.reductions.call(null,((function (fv){
return (function (ma,v){return ((ma * ((n - (1)) / n)) + (v / n));
});})(fv))
,fv,cljs.core.drop.call(null,n,vs));
} else
{return null;
}
});
/**
* 指數移動平均線
*/
stock.formula.ema_seq = (function ema_seq(n,vs){var fv = cljs.core.first.call(null,stock.formula.sma_seq.call(null,n,vs));var alpha = ((2) / (n + (1)));return cljs.core.reductions.call(null,((function (fv,alpha){
return (function (ema,v){return (((v - ema) * alpha) + ema);
});})(fv,alpha))
,fv,cljs.core.drop.call(null,n,vs));
});
/**
* 指數差離指標
*/
stock.formula.macd_dif = (function macd_dif(n,m,kline){return cljs.core.map.call(null,cljs.core._,cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,stock.tool.close.call(null,kline)))),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,stock.tool.close.call(null,kline)))));
});
/**
* Standard Deviation 標準差
*/
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__22012_SHARP_){return Math.pow((p1__22012_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__22013_SHARP_){return (p1__22013_SHARP_ / sd);
});})(offsets))
,offsets);return vs__$1;
});
/**
* 余氏背離線
*/
stock.formula.yu_clock = (function yu_clock(n,kline){var ps = stock.formula.sma_seq.call(null,n,stock.tool.mid.call(null,kline));var ps_avg = stock.formula.average.call(null,ps);var ps_sd = stock.formula.StandardDeviation.call(null,ps_avg,ps);var ps_z = stock.formula.z_score.call(null,ps_avg,ps_sd,ps);var vs = stock.formula.sma_seq.call(null,n,stock.tool.volume.call(null,kline));var vs_avg = stock.formula.average.call(null,vs);var vs_sd = stock.formula.StandardDeviation.call(null,vs_avg,vs);var vs_z = stock.formula.z_score.call(null,vs_avg,vs_sd,vs);var ps__$1 = cljs.core.map.call(null,cljs.core.vector,vs_z,ps_z);var axis = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.707,-0.707], null);var dot = ((function (ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis){
return (function (l1,l2){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,l1,l2));
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis))
;var length = ((function (ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot){
return (function (line){return Math.sqrt(dot.call(null,line,line));
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot))
;var normalize = ((function (ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length){
return (function (line){return cljs.core.map.call(null,((function (ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length){
return (function (p1__22014_SHARP_){return (p1__22014_SHARP_ / length.call(null,line));
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length))
,line);
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length))
;var projs = cljs.core.map.call(null,((function (ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length,normalize){
return (function (prev,curr){var dir = cljs.core.mapv.call(null,cljs.core._,curr,prev);return dot.call(null,normalize.call(null,dir),axis);
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length,normalize))
,ps__$1,cljs.core.rest.call(null,ps__$1));return projs;
});
stock.formula.clock = (function clock(n,kline){var cs = stock.formula.sma_seq.call(null,n,stock.tool.mid.call(null,kline));var avg = stock.formula.average.call(null,cs);var sd = stock.formula.StandardDeviation.call(null,avg,cs);var z = stock.formula.z_score.call(null,avg,sd,cs);var vs = stock.formula.sma_seq.call(null,n,stock.tool.volume.call(null,kline));var v_avg = stock.formula.average.call(null,vs);var v_sd = stock.formula.StandardDeviation.call(null,v_avg,vs);var v_z = stock.formula.z_score.call(null,v_avg,v_sd,vs);return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"sma","sma",960324195),cs,new cljs.core.Keyword(null,"avg","avg",197406200),avg,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd,new cljs.core.Keyword(null,"z","z",-789527183),z,new cljs.core.Keyword(null,"v-sma","v-sma",-813352103),vs,new cljs.core.Keyword(null,"v-avg","v-avg",1458874070),v_avg,new cljs.core.Keyword(null,"v-sd","v-sd",569101608),v_sd,new cljs.core.Keyword(null,"v-z","v-z",-1235194156),v_z], null);
});
stock.formula.xy_direction = (function xy_direction(n,x,y){var v = (((Math.atan2(y,x) + (-3.14 / n)) * ((1) / (6.28 / n))) | (0));return v;
});
stock.formula.clock_direction = (function clock_direction(x_seq,y_seq){return cljs.core.map.call(null,cljs.core.partial.call(null,stock.formula.xy_direction,(8)),stock.formula.offset_seq.call(null,x_seq),stock.formula.offset_seq.call(null,y_seq));
});
/**
* Bull and Bear Index 多空指標
* 利用ema(5)和BBI(12)的差離值(macd)的圖形，和rsv(100)後的sma(3)和sma(9)的曲線圖形幾乎無二致!!
*/
stock.formula.BBI = (function BBI(n,m,o,p,vs){var n1 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,cljs.core.reverse.call(null,vs)));var n2 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs)));var n3 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs)));var n4 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,vs)));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__22015__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__22015 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22015__delegate.call(this,args);};
G__22015.cljs$lang$maxFixedArity = 0;
G__22015.cljs$lang$applyTo = (function (arglist__22016){
var args = cljs.core.seq(arglist__22016);
return G__22015__delegate(args);
});
G__22015.cljs$core$IFn$_invoke$arity$variadic = G__22015__delegate;
return G__22015;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 指數多空指標
*/
stock.formula.EBBI = (function EBBI(n,m,o,p,vs){var n1 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));var n2 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs)));var n3 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs)));var n4 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs)));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__22017__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__22017 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22017__delegate.call(this,args);};
G__22017.cljs$lang$maxFixedArity = 0;
G__22017.cljs$lang$applyTo = (function (arglist__22018){
var args = cljs.core.seq(arglist__22018);
return G__22017__delegate(args);
});
G__22017.cljs$core$IFn$_invoke$arity$variadic = G__22017__delegate;
return G__22017;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(n,reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= n))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__22041){var vec__22042 = p__22041;var _ = cljs.core.nth.call(null,vec__22042,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22042,(1),null);var ___$2 = cljs.core.nth.call(null,vec__22042,(2),null);var low = cljs.core.nth.call(null,vec__22042,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22042,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22042,(5),null);return low;
}),cljs.core.take.call(null,n,reverse_kline)));return cljs.core.drop_last.call(null,(n - (1)),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__22043){var vec__22044 = p__22043;var value = cljs.core.nth.call(null,vec__22044,(0),null);var ori = cljs.core.nth.call(null,vec__22044,(1),null);var prev = cljs.core.nth.call(null,vec__22044,(2),null);var curr = cljs.core.nth.call(null,vec__22044,(3),null);var act = cljs.core.nth.call(null,vec__22044,(4),null);var af = cljs.core.nth.call(null,vec__22044,(5),null);var vec__22045 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__22045,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22045,(1),null);var ph = cljs.core.nth.call(null,vec__22045,(2),null);var pl = cljs.core.nth.call(null,vec__22045,(3),null);var ___$2 = cljs.core.nth.call(null,vec__22045,(4),null);var ___$3 = cljs.core.nth.call(null,vec__22045,(5),null);var prev_line = vec__22045;var vec__22046 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__22046,(0),null);var ___$5 = cljs.core.nth.call(null,vec__22046,(1),null);var ch = cljs.core.nth.call(null,vec__22046,(2),null);var cl = cljs.core.nth.call(null,vec__22046,(3),null);var ___$6 = cljs.core.nth.call(null,vec__22046,(4),null);var ___$7 = cljs.core.nth.call(null,vec__22046,(5),null);var curr_line = vec__22046;var should_turn = (function (){var pred__22047 = cljs.core._EQ_;var expr__22048 = act;if(cljs.core.truth_(pred__22047.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__22048)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__22047.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__22048)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22048))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__22050 = cljs.core._EQ_;var expr__22051 = act;if(cljs.core.truth_(pred__22050.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__22051)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__22050,expr__22051,vec__22045,_,___$1,ph,pl,___$2,___$3,prev_line,vec__22046,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__22044,value,ori,prev,curr,act,af,low){
return (function (p__22053){var vec__22054 = p__22053;var ___$8 = cljs.core.nth.call(null,vec__22054,(0),null);var ___$9 = cljs.core.nth.call(null,vec__22054,(1),null);var high = cljs.core.nth.call(null,vec__22054,(2),null);var ___$10 = cljs.core.nth.call(null,vec__22054,(3),null);var ___$11 = cljs.core.nth.call(null,vec__22054,(4),null);var ___$12 = cljs.core.nth.call(null,vec__22054,(5),null);return high;
});})(pred__22050,expr__22051,vec__22045,_,___$1,ph,pl,___$2,___$3,prev_line,vec__22046,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__22044,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{if(cljs.core.truth_(pred__22050.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__22051)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__22050,expr__22051,vec__22045,_,___$1,ph,pl,___$2,___$3,prev_line,vec__22046,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__22044,value,ori,prev,curr,act,af,low){
return (function (p__22055){var vec__22056 = p__22055;var ___$8 = cljs.core.nth.call(null,vec__22056,(0),null);var ___$9 = cljs.core.nth.call(null,vec__22056,(1),null);var ___$10 = cljs.core.nth.call(null,vec__22056,(2),null);var low__$1 = cljs.core.nth.call(null,vec__22056,(3),null);var ___$11 = cljs.core.nth.call(null,vec__22056,(4),null);var ___$12 = cljs.core.nth.call(null,vec__22056,(5),null);return low__$1;
});})(pred__22050,expr__22051,vec__22045,_,___$1,ph,pl,___$2,___$3,prev_line,vec__22046,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__22044,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22051))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__22057 = cljs.core._EQ_;var expr__22058 = act;if(cljs.core.truth_(pred__22057.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__22058)))
{if(should_turn)
{return 0.02;
} else
{if((ch > ph))
{var x__3858__auto__ = (0.04 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
} else
{var x__3858__auto__ = (0.02 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
}
}
} else
{if(cljs.core.truth_(pred__22057.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__22058)))
{if(should_turn)
{return 0.02;
} else
{if((cl < pl))
{var x__3858__auto__ = (0.04 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
} else
{var x__3858__auto__ = (0.02 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
}
}
} else
{if(cljs.core.truth_(pred__22057.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__22058)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22058))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__22060 = cljs.core._EQ_;var expr__22061 = act;if(cljs.core.truth_(pred__22060.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__22061)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__22060.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__22061)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22061))));
}
}
})():act);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_value,cljs.core.rest.call(null,ori),cljs.core.rest.call(null,prev),cljs.core.rest.call(null,curr),next_act,next_af], null);
});})(low))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [low,reverse_kline,cljs.core.drop.call(null,(n - (1)),reverse_kline),cljs.core.drop.call(null,n,reverse_kline),new cljs.core.Keyword(null,"buy","buy",-794379565),0.2], null)))));
} else
{return null;
}
});
/**
* 累積/派發線
*/
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__22065){var vec__22066 = p__22065;var _ = cljs.core.nth.call(null,vec__22066,(0),null);var open = cljs.core.nth.call(null,vec__22066,(1),null);var high = cljs.core.nth.call(null,vec__22066,(2),null);var low = cljs.core.nth.call(null,vec__22066,(3),null);var close = cljs.core.nth.call(null,vec__22066,(4),null);var volume = cljs.core.nth.call(null,vec__22066,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return (((close - low) - (high - close)) * (volume / (high - low)));
}
}),kline));
});
/**
* 蔡金指標
*/
stock.formula.Chaikin = (function Chaikin(n,m,kline){return cljs.core.map.call(null,cljs.core._,cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline)))),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline)))));
});
/**
* Ease Of Movement (EOM) 簡易波動指標
*/
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__22067_SHARP_,p2__22068_SHARP_){return (p1__22067_SHARP_ - p2__22068_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__22073){var vec__22074 = p__22073;var _ = cljs.core.nth.call(null,vec__22074,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22074,(1),null);var high = cljs.core.nth.call(null,vec__22074,(2),null);var low = cljs.core.nth.call(null,vec__22074,(3),null);var ___$2 = cljs.core.nth.call(null,vec__22074,(4),null);var volume = cljs.core.nth.call(null,vec__22074,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__22069_SHARP_,p2__22070_SHARP_){return (p1__22069_SHARP_ / p2__22070_SHARP_);
});})(mid_move,BoxRatio))
,mid_move,cljs.core.rest.call(null,BoxRatio));return cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,cljs.core.reverse.call(null,eom)));
});
/**
* 地量
*/
stock.formula.yu_gv = (function yu_gv(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var group = cljs.core.take.call(null,n,kline);var vs = stock.tool.volume.call(null,group);var avg = stock.formula.average.call(null,vs);var sd = stock.formula.StandardDeviation.call(null,avg,vs);var z = stock.formula.z_score.call(null,avg,sd,vs);return cljs.core.cons.call(null,cljs.core.first.call(null,z),(new cljs.core.LazySeq(null,((function (group,vs,avg,sd,z){
return (function (){return yu_gv.call(null,n,cljs.core.rest.call(null,kline));
});})(group,vs,avg,sd,z))
,null,null)));
} else
{return null;
}
});
stock.formula.maxN_seq = (function maxN_seq(n,f,vs){if((cljs.core.count.call(null,vs) >= n))
{var g = cljs.core.take.call(null,n,vs);var k = f.call(null,g);return cljs.core.cons.call(null,k,(new cljs.core.LazySeq(null,((function (g,k){
return (function (){return maxN_seq.call(null,n,f,cljs.core.rest.call(null,vs));
});})(g,k))
,null,null)));
} else
{return null;
}
});
/**
* 未成熟隨機值
*/
stock.formula.rsv_seq = (function rsv_seq(n,kline){var h9 = stock.formula.maxN_seq.call(null,n,(function (p1__22075_SHARP_){return cljs.core.apply.call(null,cljs.core.max,p1__22075_SHARP_);
}),stock.tool.high.call(null,kline));var l9 = stock.formula.maxN_seq.call(null,n,((function (h9){
return (function (p1__22076_SHARP_){return cljs.core.apply.call(null,cljs.core.min,p1__22076_SHARP_);
});})(h9))
,stock.tool.low.call(null,kline));var c = stock.tool.close.call(null,kline);return cljs.core.map.call(null,((function (h9,l9,c){
return (function (c__$1,l,h){return ((c__$1 - l) * ((1) / (h - l)));
});})(h9,l9,c))
,c,l9,h9);
});
/**
* 余氏方向盤指標
*/
stock.formula.yu_car = (function yu_car(n,w,d,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / normal)),stock.formula.offset_seq.call(null,stock.tool.mid.call(null,reverse_kline)));var vs = cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__22079,up_offset){var vec__22080 = p__22079;var prev = cljs.core.nth.call(null,vec__22080,(0),null);var ran = cljs.core.nth.call(null,vec__22080,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * d)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.second,vs),cljs.core.map.call(null,cljs.core.first,vs)], null);
});
/**
* 計算波動
* 從後面計算
*/
stock.formula.volatility_seq = (function volatility_seq(n,vs){return cljs.core.map.call(null,(function (p1__22081_SHARP_,p2__22082_SHARP_){return ((p1__22081_SHARP_ - p2__22082_SHARP_) / p2__22082_SHARP_);
}),vs,cljs.core.drop.call(null,n,vs));
});
/**
* 振盪量指標osc
* 可以取代mtm動量指標
*/
stock.formula.osc_seq = (function osc_seq(n,vs){return cljs.core.map.call(null,(function (p1__22083_SHARP_,p2__22084_SHARP_){return (p1__22083_SHARP_ / p2__22084_SHARP_);
}),vs,cljs.core.drop.call(null,n,vs));
});
/**
* Detrended Price Oscillator (DPO) 區間震蕩線
*/
stock.formula.dpo_seq = (function dpo_seq(n,kline){var ma = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,stock.tool.close.call(null,cljs.core.reverse.call(null,kline))));var c = stock.tool.close.call(null,kline);return cljs.core.map.call(null,cljs.core._,c,cljs.core.drop.call(null,((n / (2)) + (1)),ma));
});
/**
* 強弱指標
*/
stock.formula.rsi_seq = (function rsi_seq(n,vs){var offsets = stock.formula.offset_seq.call(null,vs);var upavg = stock.formula.sma_seq.call(null,n,cljs.core.map.call(null,((function (offsets){
return (function (v){if((v > (0)))
{return v;
} else
{return (0);
}
});})(offsets))
,offsets));var downavg = stock.formula.sma_seq.call(null,n,cljs.core.map.call(null,((function (offsets,upavg){
return (function (v){if((v < (0)))
{return Math.abs(v);
} else
{return (0);
}
});})(offsets,upavg))
,offsets));return cljs.core.map.call(null,((function (offsets,upavg,downavg){
return (function (u,d){return (u / (u + d));
});})(offsets,upavg,downavg))
,upavg,downavg);
});
/**
* 真實波幅
* 從前面計算
*/
stock.formula.tr_seq = (function tr_seq(kline){return cljs.core.map.call(null,(function (close,high,low){var x__3858__auto__ = (function (){var x__3858__auto__ = (high - low);var y__3859__auto__ = Math.abs((high - close));return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();var y__3859__auto__ = Math.abs((low - close));return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
}),stock.tool.close.call(null,kline),cljs.core.rest.call(null,stock.tool.high.call(null,kline)),cljs.core.rest.call(null,stock.tool.low.call(null,kline)));
});
/**
* 真實低價
* 從前面計算
*/
stock.formula.tl_seq = (function tl_seq(kline){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.min),stock.tool.close.call(null,kline),cljs.core.rest.call(null,stock.tool.low.call(null,kline)));
});
/**
* 終極指標
* 從前面計算
*/
stock.formula.uos_seq = (function uos_seq(m,n,o,kline){var tl = stock.formula.tl_seq.call(null,kline);var bp = cljs.core.map.call(null,cljs.core._,cljs.core.rest.call(null,stock.tool.close.call(null,kline)),tl);var tr = stock.formula.tr_seq.call(null,kline);var ruo = cljs.core.map.call(null,((function (tl,bp,tr){
return (function (b1,b2,b3,t1,t2,t3){return ((((4) * (b1 / t1)) + ((2) * (b2 / t2))) + (b3 / t3));
});})(tl,bp,tr))
,cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__22085_SHARP_){return (m * p1__22085_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,m,bp))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__22086_SHARP_){return (n * p1__22086_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,n,bp))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__22087_SHARP_){return (o * p1__22087_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,o,bp))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__22088_SHARP_){return (m * p1__22088_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,m,tr))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__22089_SHARP_){return (n * p1__22089_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,n,tr))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__22090_SHARP_){return (o * p1__22090_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,o,tr))));var uos = cljs.core.map.call(null,((function (tl,bp,tr,ruo){
return (function (p1__22091_SHARP_){return (((100) / (7)) * p1__22091_SHARP_);
});})(tl,bp,tr,ruo))
,ruo);return cljs.core.reverse.call(null,uos);
});
/**
* 趨向變動值
* 從前面計算
*/
stock.formula.dm_seq = (function dm_seq(kline){return cljs.core.map.call(null,(function (p__22097){var vec__22098 = p__22097;var v1 = cljs.core.nth.call(null,vec__22098,(0),null);var v2 = cljs.core.nth.call(null,vec__22098,(1),null);var pred__22099 = cljs.core._EQ_;var expr__22100 = (function (){var x__3858__auto__ = v1;var y__3859__auto__ = v2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();if(cljs.core.truth_(pred__22099.call(null,v1,expr__22100)))
{return v1;
} else
{if(cljs.core.truth_(pred__22099.call(null,v2,expr__22100)))
{return (- v2);
} else
{return (0);
}
}
}),cljs.core.map.call(null,(function (a,b,c,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__3858__auto__ = (0);var y__3859__auto__ = (c - a);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})(),(function (){var x__3858__auto__ = (0);var y__3859__auto__ = (b - d);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})()], null);
}),stock.tool.high.call(null,kline),stock.tool.low.call(null,kline),cljs.core.rest.call(null,stock.tool.high.call(null,kline)),cljs.core.rest.call(null,stock.tool.low.call(null,kline))));
});
/**
* 真實波幅
*/
stock.formula.atr_seq = (function atr_seq(n,kline){return stock.formula.sma_seq.call(null,n,stock.formula.tr_seq.call(null,kline));
});
/**
* Commodity Channel Index (CCI) 順勢指標
*/
stock.formula.cci_seq = (function cci_seq(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var factor = ((1) / 0.015);var ps = cljs.core.take.call(null,n,stock.tool.typical.call(null,kline));var ps_avg = stock.formula.average.call(null,ps);var ps_sd = stock.formula.StandardDeviation.call(null,ps_avg,ps);var z = cljs.core.last.call(null,stock.formula.z_score.call(null,ps_avg,ps_sd,ps));var v = (factor * z);return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (factor,ps,ps_avg,ps_sd,z,v){
return (function (){return cci_seq.call(null,n,cljs.core.rest.call(null,kline));
});})(factor,ps,ps_avg,ps_sd,z,v))
,null,null)));
} else
{return null;
}
});
/**
* Triple Exponential (TRIX) 三重指數平滑移動平均指標
* 從後面算
*/
stock.formula.trix_seq = (function trix_seq(n,vs){var ax = stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs));var bx = stock.formula.ema_seq.call(null,n,ax);var cx = stock.formula.ema_seq.call(null,n,bx);var vs__$1 = stock.formula.volatility_seq.call(null,(1),cljs.core.reverse.call(null,cx));return vs__$1;
});
stock.formula.money_line = (function money_line(n,vs){if((cljs.core.count.call(null,vs) >= n))
{var group = cljs.core.take.call(null,n,vs);var start = cljs.core.last.call(null,group);var offset = cljs.core.map.call(null,((function (group,start){
return (function (p1__22102_SHARP_){return (p1__22102_SHARP_ - start);
});})(group,start))
,group);var v = ((cljs.core.apply.call(null,cljs.core._PLUS_,offset) / n) / start);return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,start,offset,v){
return (function (){return money_line.call(null,n,cljs.core.rest.call(null,vs));
});})(group,start,offset,v))
,null,null)));
} else
{return null;
}
});
stock.formula.kline_red = (function kline_red(kline){return cljs.core.map.call(null,(function (p__22105){var vec__22106 = p__22105;var _ = cljs.core.nth.call(null,vec__22106,(0),null);var o = cljs.core.nth.call(null,vec__22106,(1),null);var h = cljs.core.nth.call(null,vec__22106,(2),null);var l = cljs.core.nth.call(null,vec__22106,(3),null);var c = cljs.core.nth.call(null,vec__22106,(4),null);var ___$1 = cljs.core.nth.call(null,vec__22106,(5),null);return ((function (){var x__3858__auto__ = (0);var y__3859__auto__ = (h - o);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() + (function (){var x__3858__auto__ = (0);var y__3859__auto__ = (c - l);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})());
}),kline);
});
stock.formula.kline_green = (function kline_green(kline){return cljs.core.map.call(null,(function (p__22109){var vec__22110 = p__22109;var _ = cljs.core.nth.call(null,vec__22110,(0),null);var o = cljs.core.nth.call(null,vec__22110,(1),null);var h = cljs.core.nth.call(null,vec__22110,(2),null);var l = cljs.core.nth.call(null,vec__22110,(3),null);var c = cljs.core.nth.call(null,vec__22110,(4),null);var ___$1 = cljs.core.nth.call(null,vec__22110,(5),null);return ((function (){var x__3858__auto__ = (0);var y__3859__auto__ = (o - l);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() + (function (){var x__3858__auto__ = (0);var y__3859__auto__ = (h - c);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})());
}),kline);
});
stock.formula.up_rate = (function up_rate(vs){return cljs.core.map.call(null,(function (p,c){return ((c - p) / p);
}),vs,cljs.core.rest.call(null,vs));
});
