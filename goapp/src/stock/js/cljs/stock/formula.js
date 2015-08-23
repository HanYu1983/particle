// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__11054_SHARP_,p2__11053_SHARP_){return (p2__11053_SHARP_ - p1__11054_SHARP_);
}),vs,cljs.core.rest.call(null,vs));
});
/**
* 移動平均線
*/
stock.formula.sma_seq = (function sma_seq(n,vs){if((cljs.core.count.call(null,vs) >= n))
{return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,n,vs)) / n),(new cljs.core.LazySeq(null,(function (){return sma_seq.call(null,n,cljs.core.rest.call(null,vs));
}),null,null)));
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
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__11055_SHARP_){return Math.pow((p1__11055_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__11056_SHARP_){return (p1__11056_SHARP_ / sd);
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
return (function (p1__11057_SHARP_){return (p1__11057_SHARP_ / length.call(null,line));
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length))
,line);
});})(ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length))
;var projs = cljs.core.map.call(null,((function (ps,ps_avg,ps_sd,ps_z,vs,vs_avg,vs_sd,vs_z,ps__$1,axis,dot,length,normalize){
return (function (prev,curr){var dir = cljs.core.mapv.call(null,cljs.core._,prev,curr);return dot.call(null,normalize.call(null,dir),axis);
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
stock.formula.BBI = (function BBI(n,m,o,p,vs){var n1 = stock.formula.sma_seq.call(null,n,vs);var n2 = stock.formula.sma_seq.call(null,m,vs);var n3 = stock.formula.sma_seq.call(null,o,vs);var n4 = stock.formula.sma_seq.call(null,p,vs);return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__11058__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__11058 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11058__delegate.call(this,args);};
G__11058.cljs$lang$maxFixedArity = 0;
G__11058.cljs$lang$applyTo = (function (arglist__11059){
var args = cljs.core.seq(arglist__11059);
return G__11058__delegate(args);
});
G__11058.cljs$core$IFn$_invoke$arity$variadic = G__11058__delegate;
return G__11058;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 指數多空指標
*/
stock.formula.EBBI = (function EBBI(n,m,o,p,vs){var n1 = stock.formula.ema_seq.call(null,n,vs);var n2 = stock.formula.ema_seq.call(null,m,vs);var n3 = stock.formula.ema_seq.call(null,o,vs);var n4 = stock.formula.ema_seq.call(null,p,vs);return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__11060__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__11060 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11060__delegate.call(this,args);};
G__11060.cljs$lang$maxFixedArity = 0;
G__11060.cljs$lang$applyTo = (function (arglist__11061){
var args = cljs.core.seq(arglist__11061);
return G__11060__delegate(args);
});
G__11060.cljs$core$IFn$_invoke$arity$variadic = G__11060__delegate;
return G__11060;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(n,reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= n))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__11084){var vec__11085 = p__11084;var _ = cljs.core.nth.call(null,vec__11085,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11085,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11085,(2),null);var low = cljs.core.nth.call(null,vec__11085,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11085,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11085,(5),null);return low;
}),cljs.core.take.call(null,n,reverse_kline)));return cljs.core.drop_last.call(null,(n - (1)),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__11086){var vec__11087 = p__11086;var value = cljs.core.nth.call(null,vec__11087,(0),null);var ori = cljs.core.nth.call(null,vec__11087,(1),null);var prev = cljs.core.nth.call(null,vec__11087,(2),null);var curr = cljs.core.nth.call(null,vec__11087,(3),null);var act = cljs.core.nth.call(null,vec__11087,(4),null);var af = cljs.core.nth.call(null,vec__11087,(5),null);var vec__11088 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__11088,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11088,(1),null);var ph = cljs.core.nth.call(null,vec__11088,(2),null);var pl = cljs.core.nth.call(null,vec__11088,(3),null);var ___$2 = cljs.core.nth.call(null,vec__11088,(4),null);var ___$3 = cljs.core.nth.call(null,vec__11088,(5),null);var prev_line = vec__11088;var vec__11089 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__11089,(0),null);var ___$5 = cljs.core.nth.call(null,vec__11089,(1),null);var ch = cljs.core.nth.call(null,vec__11089,(2),null);var cl = cljs.core.nth.call(null,vec__11089,(3),null);var ___$6 = cljs.core.nth.call(null,vec__11089,(4),null);var ___$7 = cljs.core.nth.call(null,vec__11089,(5),null);var curr_line = vec__11089;var should_turn = (function (){var pred__11090 = cljs.core._EQ_;var expr__11091 = act;if(cljs.core.truth_(pred__11090.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__11091)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__11090.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__11091)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11091))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__11093 = cljs.core._EQ_;var expr__11094 = act;if(cljs.core.truth_(pred__11093.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__11094)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__11093,expr__11094,vec__11088,_,___$1,ph,pl,___$2,___$3,prev_line,vec__11089,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__11087,value,ori,prev,curr,act,af,low){
return (function (p__11096){var vec__11097 = p__11096;var ___$8 = cljs.core.nth.call(null,vec__11097,(0),null);var ___$9 = cljs.core.nth.call(null,vec__11097,(1),null);var high = cljs.core.nth.call(null,vec__11097,(2),null);var ___$10 = cljs.core.nth.call(null,vec__11097,(3),null);var ___$11 = cljs.core.nth.call(null,vec__11097,(4),null);var ___$12 = cljs.core.nth.call(null,vec__11097,(5),null);return high;
});})(pred__11093,expr__11094,vec__11088,_,___$1,ph,pl,___$2,___$3,prev_line,vec__11089,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__11087,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{if(cljs.core.truth_(pred__11093.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__11094)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__11093,expr__11094,vec__11088,_,___$1,ph,pl,___$2,___$3,prev_line,vec__11089,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__11087,value,ori,prev,curr,act,af,low){
return (function (p__11098){var vec__11099 = p__11098;var ___$8 = cljs.core.nth.call(null,vec__11099,(0),null);var ___$9 = cljs.core.nth.call(null,vec__11099,(1),null);var ___$10 = cljs.core.nth.call(null,vec__11099,(2),null);var low__$1 = cljs.core.nth.call(null,vec__11099,(3),null);var ___$11 = cljs.core.nth.call(null,vec__11099,(4),null);var ___$12 = cljs.core.nth.call(null,vec__11099,(5),null);return low__$1;
});})(pred__11093,expr__11094,vec__11088,_,___$1,ph,pl,___$2,___$3,prev_line,vec__11089,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__11087,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11094))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__11100 = cljs.core._EQ_;var expr__11101 = act;if(cljs.core.truth_(pred__11100.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__11101)))
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
{if(cljs.core.truth_(pred__11100.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__11101)))
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
{if(cljs.core.truth_(pred__11100.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__11101)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11101))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__11103 = cljs.core._EQ_;var expr__11104 = act;if(cljs.core.truth_(pred__11103.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__11104)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__11103.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__11104)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11104))));
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
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__11108){var vec__11109 = p__11108;var _ = cljs.core.nth.call(null,vec__11109,(0),null);var open = cljs.core.nth.call(null,vec__11109,(1),null);var high = cljs.core.nth.call(null,vec__11109,(2),null);var low = cljs.core.nth.call(null,vec__11109,(3),null);var close = cljs.core.nth.call(null,vec__11109,(4),null);var volume = cljs.core.nth.call(null,vec__11109,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return (((close - low) - (high - close)) * (volume / (high - low)));
}
}),kline));
});
/**
* 蔡金指標, 很像算錯了，後來修正
*/
stock.formula.Chaikin = (function Chaikin(n,m,kline){return cljs.core.map.call(null,(function (p1__11110_SHARP_,p2__11111_SHARP_){return (p1__11110_SHARP_ - p2__11111_SHARP_);
}),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline)))),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline)))));
});
/**
* Ease Of Movement (EOM) 簡易波動指標
*/
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__11112_SHARP_,p2__11113_SHARP_){return (p1__11112_SHARP_ - p2__11113_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__11118){var vec__11119 = p__11118;var _ = cljs.core.nth.call(null,vec__11119,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11119,(1),null);var high = cljs.core.nth.call(null,vec__11119,(2),null);var low = cljs.core.nth.call(null,vec__11119,(3),null);var ___$2 = cljs.core.nth.call(null,vec__11119,(4),null);var volume = cljs.core.nth.call(null,vec__11119,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__11114_SHARP_,p2__11115_SHARP_){return (p1__11114_SHARP_ / p2__11115_SHARP_);
});})(mid_move,BoxRatio))
,mid_move,cljs.core.rest.call(null,BoxRatio));return stock.formula.sma_seq.call(null,n,eom);
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
/**
* 未成熟隨機值
*/
stock.formula.rsv_seq = (function rsv_seq(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var group = cljs.core.take.call(null,n,kline);var vec__11125 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__11125,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11125,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11125,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11125,(3),null);var ct = cljs.core.nth.call(null,vec__11125,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11125,(5),null);var L = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__11125,_,___$1,___$2,___$3,ct,___$4){
return (function (p__11126){var vec__11127 = p__11126;var ___$5 = cljs.core.nth.call(null,vec__11127,(0),null);var ___$6 = cljs.core.nth.call(null,vec__11127,(1),null);var ___$7 = cljs.core.nth.call(null,vec__11127,(2),null);var low = cljs.core.nth.call(null,vec__11127,(3),null);var ___$8 = cljs.core.nth.call(null,vec__11127,(4),null);var ___$9 = cljs.core.nth.call(null,vec__11127,(5),null);return low;
});})(group,vec__11125,_,___$1,___$2,___$3,ct,___$4))
,group));var H = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__11125,_,___$1,___$2,___$3,ct,___$4,L){
return (function (p__11128){var vec__11129 = p__11128;var ___$5 = cljs.core.nth.call(null,vec__11129,(0),null);var ___$6 = cljs.core.nth.call(null,vec__11129,(1),null);var high = cljs.core.nth.call(null,vec__11129,(2),null);var ___$7 = cljs.core.nth.call(null,vec__11129,(3),null);var ___$8 = cljs.core.nth.call(null,vec__11129,(4),null);var ___$9 = cljs.core.nth.call(null,vec__11129,(5),null);return high;
});})(group,vec__11125,_,___$1,___$2,___$3,ct,___$4,L))
,group));var v = ((((ct - L) * ((1) / (H - L))) * (100)) | (0));return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,vec__11125,_,___$1,___$2,___$3,ct,___$4,L,H,v){
return (function (){return rsv_seq.call(null,n,cljs.core.rest.call(null,kline));
});})(group,vec__11125,_,___$1,___$2,___$3,ct,___$4,L,H,v))
,null,null)));
} else
{return null;
}
});
/**
* 余氏方向盤指標
*/
stock.formula.yu_car = (function yu_car(n,w,d,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / normal)),stock.formula.offset_seq.call(null,stock.tool.mid.call(null,reverse_kline)));var vs = cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__11132,up_offset){var vec__11133 = p__11132;var prev = cljs.core.nth.call(null,vec__11133,(0),null);var ran = cljs.core.nth.call(null,vec__11133,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * d)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.second,vs),cljs.core.map.call(null,cljs.core.first,vs)], null);
});
/**
* 振盪量指標osc
* 可以取代mtm動量指標
*/
stock.formula.osc_seq = (function osc_seq(n,vs){if((cljs.core.count.call(null,vs) >= n))
{var c1 = cljs.core.first.call(null,vs);var cn = cljs.core.nth.call(null,vs,(n - (1)));return cljs.core.cons.call(null,(c1 / cn),(new cljs.core.LazySeq(null,((function (c1,cn){
return (function (){return osc_seq.call(null,n,cljs.core.rest.call(null,vs));
});})(c1,cn))
,null,null)));
} else
{return null;
}
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
stock.formula.tr_seq = (function tr_seq(kline){if((cljs.core.count.call(null,kline) >= (2)))
{var vec__11136 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__11136,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11136,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11136,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11136,(3),null);var close = cljs.core.nth.call(null,vec__11136,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11136,(5),null);var vec__11137 = cljs.core.second.call(null,kline);var ___$5 = cljs.core.nth.call(null,vec__11137,(0),null);var ___$6 = cljs.core.nth.call(null,vec__11137,(1),null);var high = cljs.core.nth.call(null,vec__11137,(2),null);var low = cljs.core.nth.call(null,vec__11137,(3),null);var ___$7 = cljs.core.nth.call(null,vec__11137,(4),null);var ___$8 = cljs.core.nth.call(null,vec__11137,(5),null);var v = (function (){var x__3858__auto__ = (function (){var x__3858__auto__ = (high - low);var y__3859__auto__ = Math.abs((high - close));return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();var y__3859__auto__ = Math.abs((low - close));return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (vec__11136,_,___$1,___$2,___$3,close,___$4,vec__11137,___$5,___$6,high,low,___$7,___$8,v){
return (function (){return tr_seq.call(null,cljs.core.rest.call(null,kline));
});})(vec__11136,_,___$1,___$2,___$3,close,___$4,vec__11137,___$5,___$6,high,low,___$7,___$8,v))
,null,null)));
} else
{return null;
}
});
stock.formula.dm_seq = (function dm_seq(kline){if((cljs.core.count.call(null,kline) >= (2)))
{var vec__11143 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__11143,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11143,(1),null);var a = cljs.core.nth.call(null,vec__11143,(2),null);var b = cljs.core.nth.call(null,vec__11143,(3),null);var ___$2 = cljs.core.nth.call(null,vec__11143,(4),null);var ___$3 = cljs.core.nth.call(null,vec__11143,(5),null);var vec__11144 = cljs.core.second.call(null,kline);var ___$4 = cljs.core.nth.call(null,vec__11144,(0),null);var ___$5 = cljs.core.nth.call(null,vec__11144,(1),null);var c = cljs.core.nth.call(null,vec__11144,(2),null);var d = cljs.core.nth.call(null,vec__11144,(3),null);var ___$6 = cljs.core.nth.call(null,vec__11144,(4),null);var ___$7 = cljs.core.nth.call(null,vec__11144,(5),null);var v1 = (function (){var x__3858__auto__ = (0);var y__3859__auto__ = (c - a);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();var v2 = (function (){var x__3858__auto__ = (0);var y__3859__auto__ = (b - d);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();var v = (function (){var pred__11145 = cljs.core._EQ_;var expr__11146 = (function (){var x__3858__auto__ = v1;var y__3859__auto__ = v2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})();if(cljs.core.truth_(pred__11145.call(null,v1,expr__11146)))
{return v1;
} else
{if(cljs.core.truth_(pred__11145.call(null,v2,expr__11146)))
{return (- v2);
} else
{return (0);
}
}
})();return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (vec__11143,_,___$1,a,b,___$2,___$3,vec__11144,___$4,___$5,c,d,___$6,___$7,v1,v2,v){
return (function (){return dm_seq.call(null,cljs.core.rest.call(null,kline));
});})(vec__11143,_,___$1,a,b,___$2,___$3,vec__11144,___$4,___$5,c,d,___$6,___$7,v1,v2,v))
,null,null)));
} else
{return null;
}
});
/**
* 真實波幅
*/
stock.formula.atr_seq = (function atr_seq(n,kline){return stock.formula.sma_seq.call(null,n,stock.formula.tr_seq.call(null,kline));
});
