// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__12924_SHARP_,p2__12923_SHARP_){return (p2__12923_SHARP_ - p1__12924_SHARP_);
}),vs,cljs.core.rest.call(null,vs));
});
stock.formula.nkline = (function nkline(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__12933 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__12933,(0),null);var open = cljs.core.nth.call(null,vec__12933,(1),null);var _ = cljs.core.nth.call(null,vec__12933,(2),null);var ___$1 = cljs.core.nth.call(null,vec__12933,(3),null);var ___$2 = cljs.core.nth.call(null,vec__12933,(4),null);var ___$3 = cljs.core.nth.call(null,vec__12933,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__12933,date,open,_,___$1,___$2,___$3){
return (function (p__12935){var vec__12936 = p__12935;var ___$4 = cljs.core.nth.call(null,vec__12936,(0),null);var ___$5 = cljs.core.nth.call(null,vec__12936,(1),null);var high = cljs.core.nth.call(null,vec__12936,(2),null);var ___$6 = cljs.core.nth.call(null,vec__12936,(3),null);var ___$7 = cljs.core.nth.call(null,vec__12936,(4),null);var ___$8 = cljs.core.nth.call(null,vec__12936,(5),null);return high;
});})(group,vec__12933,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__12933,date,open,_,___$1,___$2,___$3,high){
return (function (p__12937){var vec__12938 = p__12937;var ___$4 = cljs.core.nth.call(null,vec__12938,(0),null);var ___$5 = cljs.core.nth.call(null,vec__12938,(1),null);var ___$6 = cljs.core.nth.call(null,vec__12938,(2),null);var low = cljs.core.nth.call(null,vec__12938,(3),null);var ___$7 = cljs.core.nth.call(null,vec__12938,(4),null);var ___$8 = cljs.core.nth.call(null,vec__12938,(5),null);return low;
});})(group,vec__12933,date,open,_,___$1,___$2,___$3,high))
,group));var vec__12934 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__12934,(0),null);var ___$5 = cljs.core.nth.call(null,vec__12934,(1),null);var ___$6 = cljs.core.nth.call(null,vec__12934,(2),null);var ___$7 = cljs.core.nth.call(null,vec__12934,(3),null);var close = cljs.core.nth.call(null,vec__12934,(4),null);var ___$8 = cljs.core.nth.call(null,vec__12934,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__12933,date,open,_,___$1,___$2,___$3,high,low,vec__12934,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__12939){var vec__12940 = p__12939;var ___$9 = cljs.core.nth.call(null,vec__12940,(0),null);var ___$10 = cljs.core.nth.call(null,vec__12940,(1),null);var ___$11 = cljs.core.nth.call(null,vec__12940,(2),null);var ___$12 = cljs.core.nth.call(null,vec__12940,(3),null);var ___$13 = cljs.core.nth.call(null,vec__12940,(4),null);var volume = cljs.core.nth.call(null,vec__12940,(5),null);return volume;
});})(group,vec__12933,date,open,_,___$1,___$2,___$3,high,low,vec__12934,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__12933,date,open,_,___$1,___$2,___$3,high,low,vec__12934,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return nkline.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__12933,date,open,_,___$1,___$2,___$3,high,low,vec__12934,___$4,___$5,___$6,___$7,close,___$8,volume))
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
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__12941_SHARP_){return Math.pow((p1__12941_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__12942_SHARP_){return (p1__12942_SHARP_ / sd);
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
return (function (p1__12943_SHARP_){return (p1__12943_SHARP_ / length.call(null,line));
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
var G__12944__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__12944 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12944__delegate.call(this,args);};
G__12944.cljs$lang$maxFixedArity = 0;
G__12944.cljs$lang$applyTo = (function (arglist__12945){
var args = cljs.core.seq(arglist__12945);
return G__12944__delegate(args);
});
G__12944.cljs$core$IFn$_invoke$arity$variadic = G__12944__delegate;
return G__12944;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 指數多空指標
*/
stock.formula.EBBI = (function EBBI(n,m,o,p,vs){var n1 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));var n2 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs)));var n3 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs)));var n4 = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs)));return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__12946__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__12946 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12946__delegate.call(this,args);};
G__12946.cljs$lang$maxFixedArity = 0;
G__12946.cljs$lang$applyTo = (function (arglist__12947){
var args = cljs.core.seq(arglist__12947);
return G__12946__delegate(args);
});
G__12946.cljs$core$IFn$_invoke$arity$variadic = G__12946__delegate;
return G__12946;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(n,reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= n))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__12970){var vec__12971 = p__12970;var _ = cljs.core.nth.call(null,vec__12971,(0),null);var ___$1 = cljs.core.nth.call(null,vec__12971,(1),null);var ___$2 = cljs.core.nth.call(null,vec__12971,(2),null);var low = cljs.core.nth.call(null,vec__12971,(3),null);var ___$3 = cljs.core.nth.call(null,vec__12971,(4),null);var ___$4 = cljs.core.nth.call(null,vec__12971,(5),null);return low;
}),cljs.core.take.call(null,n,reverse_kline)));return cljs.core.drop_last.call(null,(n - (1)),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__12972){var vec__12973 = p__12972;var value = cljs.core.nth.call(null,vec__12973,(0),null);var ori = cljs.core.nth.call(null,vec__12973,(1),null);var prev = cljs.core.nth.call(null,vec__12973,(2),null);var curr = cljs.core.nth.call(null,vec__12973,(3),null);var act = cljs.core.nth.call(null,vec__12973,(4),null);var af = cljs.core.nth.call(null,vec__12973,(5),null);var vec__12974 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__12974,(0),null);var ___$1 = cljs.core.nth.call(null,vec__12974,(1),null);var ph = cljs.core.nth.call(null,vec__12974,(2),null);var pl = cljs.core.nth.call(null,vec__12974,(3),null);var ___$2 = cljs.core.nth.call(null,vec__12974,(4),null);var ___$3 = cljs.core.nth.call(null,vec__12974,(5),null);var prev_line = vec__12974;var vec__12975 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__12975,(0),null);var ___$5 = cljs.core.nth.call(null,vec__12975,(1),null);var ch = cljs.core.nth.call(null,vec__12975,(2),null);var cl = cljs.core.nth.call(null,vec__12975,(3),null);var ___$6 = cljs.core.nth.call(null,vec__12975,(4),null);var ___$7 = cljs.core.nth.call(null,vec__12975,(5),null);var curr_line = vec__12975;var should_turn = (function (){var pred__12976 = cljs.core._EQ_;var expr__12977 = act;if(cljs.core.truth_(pred__12976.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12977)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__12976.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12977)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12977))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__12979 = cljs.core._EQ_;var expr__12980 = act;if(cljs.core.truth_(pred__12979.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12980)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__12979,expr__12980,vec__12974,_,___$1,ph,pl,___$2,___$3,prev_line,vec__12975,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__12973,value,ori,prev,curr,act,af,low){
return (function (p__12982){var vec__12983 = p__12982;var ___$8 = cljs.core.nth.call(null,vec__12983,(0),null);var ___$9 = cljs.core.nth.call(null,vec__12983,(1),null);var high = cljs.core.nth.call(null,vec__12983,(2),null);var ___$10 = cljs.core.nth.call(null,vec__12983,(3),null);var ___$11 = cljs.core.nth.call(null,vec__12983,(4),null);var ___$12 = cljs.core.nth.call(null,vec__12983,(5),null);return high;
});})(pred__12979,expr__12980,vec__12974,_,___$1,ph,pl,___$2,___$3,prev_line,vec__12975,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__12973,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{if(cljs.core.truth_(pred__12979.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12980)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__12979,expr__12980,vec__12974,_,___$1,ph,pl,___$2,___$3,prev_line,vec__12975,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__12973,value,ori,prev,curr,act,af,low){
return (function (p__12984){var vec__12985 = p__12984;var ___$8 = cljs.core.nth.call(null,vec__12985,(0),null);var ___$9 = cljs.core.nth.call(null,vec__12985,(1),null);var ___$10 = cljs.core.nth.call(null,vec__12985,(2),null);var low__$1 = cljs.core.nth.call(null,vec__12985,(3),null);var ___$11 = cljs.core.nth.call(null,vec__12985,(4),null);var ___$12 = cljs.core.nth.call(null,vec__12985,(5),null);return low__$1;
});})(pred__12979,expr__12980,vec__12974,_,___$1,ph,pl,___$2,___$3,prev_line,vec__12975,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__12973,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12980))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__12986 = cljs.core._EQ_;var expr__12987 = act;if(cljs.core.truth_(pred__12986.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12987)))
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
{if(cljs.core.truth_(pred__12986.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12987)))
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
{if(cljs.core.truth_(pred__12986.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__12987)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12987))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__12989 = cljs.core._EQ_;var expr__12990 = act;if(cljs.core.truth_(pred__12989.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__12990)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__12989.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__12990)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12990))));
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
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__12994){var vec__12995 = p__12994;var _ = cljs.core.nth.call(null,vec__12995,(0),null);var open = cljs.core.nth.call(null,vec__12995,(1),null);var high = cljs.core.nth.call(null,vec__12995,(2),null);var low = cljs.core.nth.call(null,vec__12995,(3),null);var close = cljs.core.nth.call(null,vec__12995,(4),null);var volume = cljs.core.nth.call(null,vec__12995,(5),null);if(cljs.core._EQ_.call(null,high,low))
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
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__12996_SHARP_,p2__12997_SHARP_){return (p1__12996_SHARP_ - p2__12997_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__13002){var vec__13003 = p__13002;var _ = cljs.core.nth.call(null,vec__13003,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13003,(1),null);var high = cljs.core.nth.call(null,vec__13003,(2),null);var low = cljs.core.nth.call(null,vec__13003,(3),null);var ___$2 = cljs.core.nth.call(null,vec__13003,(4),null);var volume = cljs.core.nth.call(null,vec__13003,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__12998_SHARP_,p2__12999_SHARP_){return (p1__12998_SHARP_ / p2__12999_SHARP_);
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
stock.formula.rsv_seq = (function rsv_seq(n,kline){var h9 = stock.formula.maxN_seq.call(null,n,(function (p1__13004_SHARP_){return cljs.core.apply.call(null,cljs.core.max,p1__13004_SHARP_);
}),stock.tool.high.call(null,kline));var l9 = stock.formula.maxN_seq.call(null,n,((function (h9){
return (function (p1__13005_SHARP_){return cljs.core.apply.call(null,cljs.core.min,p1__13005_SHARP_);
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
return (function (p__13008,up_offset){var vec__13009 = p__13008;var prev = cljs.core.nth.call(null,vec__13009,(0),null);var ran = cljs.core.nth.call(null,vec__13009,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
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
stock.formula.volatility_seq = (function volatility_seq(n,vs){return cljs.core.map.call(null,(function (p1__13010_SHARP_,p2__13011_SHARP_){return ((p1__13010_SHARP_ - p2__13011_SHARP_) / p2__13011_SHARP_);
}),vs,cljs.core.drop.call(null,n,vs));
});
/**
* 振盪量指標osc
* 可以取代mtm動量指標
*/
stock.formula.osc_seq = (function osc_seq(n,vs){return cljs.core.map.call(null,(function (p1__13012_SHARP_,p2__13013_SHARP_){return (p1__13012_SHARP_ / p2__13013_SHARP_);
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
return (function (p1__13014_SHARP_){return (m * p1__13014_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,m,bp))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__13015_SHARP_){return (n * p1__13015_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,n,bp))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__13016_SHARP_){return (o * p1__13016_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,o,bp))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__13017_SHARP_){return (m * p1__13017_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,m,tr))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__13018_SHARP_){return (n * p1__13018_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,n,tr))),cljs.core.reverse.call(null,cljs.core.map.call(null,((function (tl,bp,tr){
return (function (p1__13019_SHARP_){return (o * p1__13019_SHARP_);
});})(tl,bp,tr))
,stock.formula.sma_seq.call(null,o,tr))));var uos = cljs.core.map.call(null,((function (tl,bp,tr,ruo){
return (function (p1__13020_SHARP_){return (((100) / (7)) * p1__13020_SHARP_);
});})(tl,bp,tr,ruo))
,ruo);return cljs.core.reverse.call(null,uos);
});
/**
* 趨向變動值
* 從前面計算
*/
stock.formula.dm_seq = (function dm_seq(kline){return cljs.core.map.call(null,(function (p__13026){var vec__13027 = p__13026;var v1 = cljs.core.nth.call(null,vec__13027,(0),null);var v2 = cljs.core.nth.call(null,vec__13027,(1),null);var pred__13028 = cljs.core._EQ_;var expr__13029 = (function (){var x__3858__auto__ = v1;var y__3859__auto__ = v2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();if(cljs.core.truth_(pred__13028.call(null,v1,expr__13029)))
{return v1;
} else
{if(cljs.core.truth_(pred__13028.call(null,v2,expr__13029)))
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
return (function (p1__13031_SHARP_){return (p1__13031_SHARP_ - start);
});})(group,start))
,group);var v = ((cljs.core.apply.call(null,cljs.core._PLUS_,offset) / n) / start);return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,start,offset,v){
return (function (){return money_line.call(null,n,cljs.core.rest.call(null,vs));
});})(group,start,offset,v))
,null,null)));
} else
{return null;
}
});
stock.formula.kline_red = (function kline_red(kline){return cljs.core.map.call(null,(function (p__13034){var vec__13035 = p__13034;var _ = cljs.core.nth.call(null,vec__13035,(0),null);var o = cljs.core.nth.call(null,vec__13035,(1),null);var h = cljs.core.nth.call(null,vec__13035,(2),null);var l = cljs.core.nth.call(null,vec__13035,(3),null);var c = cljs.core.nth.call(null,vec__13035,(4),null);var ___$1 = cljs.core.nth.call(null,vec__13035,(5),null);return ((function (){var x__3858__auto__ = (0);var y__3859__auto__ = (h - o);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() + (function (){var x__3858__auto__ = (0);var y__3859__auto__ = (c - l);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})());
}),kline);
});
stock.formula.kline_green = (function kline_green(kline){return cljs.core.map.call(null,(function (p__13038){var vec__13039 = p__13038;var _ = cljs.core.nth.call(null,vec__13039,(0),null);var o = cljs.core.nth.call(null,vec__13039,(1),null);var h = cljs.core.nth.call(null,vec__13039,(2),null);var l = cljs.core.nth.call(null,vec__13039,(3),null);var c = cljs.core.nth.call(null,vec__13039,(4),null);var ___$1 = cljs.core.nth.call(null,vec__13039,(5),null);return ((function (){var x__3858__auto__ = (0);var y__3859__auto__ = (o - l);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() + (function (){var x__3858__auto__ = (0);var y__3859__auto__ = (h - c);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})());
}),kline);
});
stock.formula.up_rate = (function up_rate(vs){return cljs.core.map.call(null,(function (p,c){return ((c - p) / p);
}),vs,cljs.core.rest.call(null,vs));
});
