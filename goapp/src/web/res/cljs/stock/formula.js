// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__19918_SHARP_,p2__19917_SHARP_){return (p2__19917_SHARP_ - p1__19918_SHARP_);
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
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__19919_SHARP_){return Math.pow((p1__19919_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__19920_SHARP_){return (p1__19920_SHARP_ / sd);
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
return (function (p1__19921_SHARP_){return (p1__19921_SHARP_ / length.call(null,line));
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
stock.formula.BBI = (function BBI(n,vs){var n1 = stock.formula.sma_seq.call(null,n,vs);var n2 = stock.formula.sma_seq.call(null,(n * (2)),vs);var n3 = stock.formula.sma_seq.call(null,(n * (4)),vs);var n4 = stock.formula.sma_seq.call(null,(n * (8)),vs);return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__19922__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__19922 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19922__delegate.call(this,args);};
G__19922.cljs$lang$maxFixedArity = 0;
G__19922.cljs$lang$applyTo = (function (arglist__19923){
var args = cljs.core.seq(arglist__19923);
return G__19922__delegate(args);
});
G__19922.cljs$core$IFn$_invoke$arity$variadic = G__19922__delegate;
return G__19922;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= (3)))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__19946){var vec__19947 = p__19946;var _ = cljs.core.nth.call(null,vec__19947,(0),null);var ___$1 = cljs.core.nth.call(null,vec__19947,(1),null);var ___$2 = cljs.core.nth.call(null,vec__19947,(2),null);var low = cljs.core.nth.call(null,vec__19947,(3),null);var ___$3 = cljs.core.nth.call(null,vec__19947,(4),null);var ___$4 = cljs.core.nth.call(null,vec__19947,(5),null);return low;
}),cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.drop_last.call(null,(2),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__19948){var vec__19949 = p__19948;var value = cljs.core.nth.call(null,vec__19949,(0),null);var ori = cljs.core.nth.call(null,vec__19949,(1),null);var prev = cljs.core.nth.call(null,vec__19949,(2),null);var curr = cljs.core.nth.call(null,vec__19949,(3),null);var act = cljs.core.nth.call(null,vec__19949,(4),null);var af = cljs.core.nth.call(null,vec__19949,(5),null);var vec__19950 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__19950,(0),null);var ___$1 = cljs.core.nth.call(null,vec__19950,(1),null);var ph = cljs.core.nth.call(null,vec__19950,(2),null);var pl = cljs.core.nth.call(null,vec__19950,(3),null);var ___$2 = cljs.core.nth.call(null,vec__19950,(4),null);var ___$3 = cljs.core.nth.call(null,vec__19950,(5),null);var prev_line = vec__19950;var vec__19951 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__19951,(0),null);var ___$5 = cljs.core.nth.call(null,vec__19951,(1),null);var ch = cljs.core.nth.call(null,vec__19951,(2),null);var cl = cljs.core.nth.call(null,vec__19951,(3),null);var ___$6 = cljs.core.nth.call(null,vec__19951,(4),null);var ___$7 = cljs.core.nth.call(null,vec__19951,(5),null);var curr_line = vec__19951;var should_turn = (function (){var pred__19952 = cljs.core._EQ_;var expr__19953 = act;if(cljs.core.truth_(pred__19952.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__19953)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__19952.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__19953)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19953))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__19955 = cljs.core._EQ_;var expr__19956 = act;if(cljs.core.truth_(pred__19955.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__19956)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__19955,expr__19956,vec__19950,_,___$1,ph,pl,___$2,___$3,prev_line,vec__19951,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__19949,value,ori,prev,curr,act,af,low){
return (function (p__19958){var vec__19959 = p__19958;var ___$8 = cljs.core.nth.call(null,vec__19959,(0),null);var ___$9 = cljs.core.nth.call(null,vec__19959,(1),null);var high = cljs.core.nth.call(null,vec__19959,(2),null);var ___$10 = cljs.core.nth.call(null,vec__19959,(3),null);var ___$11 = cljs.core.nth.call(null,vec__19959,(4),null);var ___$12 = cljs.core.nth.call(null,vec__19959,(5),null);return high;
});})(pred__19955,expr__19956,vec__19950,_,___$1,ph,pl,___$2,___$3,prev_line,vec__19951,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__19949,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__19955.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__19956)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__19955,expr__19956,vec__19950,_,___$1,ph,pl,___$2,___$3,prev_line,vec__19951,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__19949,value,ori,prev,curr,act,af,low){
return (function (p__19960){var vec__19961 = p__19960;var ___$8 = cljs.core.nth.call(null,vec__19961,(0),null);var ___$9 = cljs.core.nth.call(null,vec__19961,(1),null);var ___$10 = cljs.core.nth.call(null,vec__19961,(2),null);var low__$1 = cljs.core.nth.call(null,vec__19961,(3),null);var ___$11 = cljs.core.nth.call(null,vec__19961,(4),null);var ___$12 = cljs.core.nth.call(null,vec__19961,(5),null);return low__$1;
});})(pred__19955,expr__19956,vec__19950,_,___$1,ph,pl,___$2,___$3,prev_line,vec__19951,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__19949,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19956))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__19962 = cljs.core._EQ_;var expr__19963 = act;if(cljs.core.truth_(pred__19962.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__19963)))
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
{if(cljs.core.truth_(pred__19962.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__19963)))
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
{if(cljs.core.truth_(pred__19962.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__19963)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19963))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__19965 = cljs.core._EQ_;var expr__19966 = act;if(cljs.core.truth_(pred__19965.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__19966)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__19965.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__19966)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19966))));
}
}
})():act);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_value,cljs.core.rest.call(null,ori),cljs.core.rest.call(null,prev),cljs.core.rest.call(null,curr),next_act,next_af], null);
});})(low))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [low,reverse_kline,cljs.core.drop.call(null,(2),reverse_kline),cljs.core.drop.call(null,(3),reverse_kline),new cljs.core.Keyword(null,"buy","buy",-794379565),0.2], null)))));
} else
{return null;
}
});
/**
* 累積/派發線
*/
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__19970){var vec__19971 = p__19970;var _ = cljs.core.nth.call(null,vec__19971,(0),null);var open = cljs.core.nth.call(null,vec__19971,(1),null);var high = cljs.core.nth.call(null,vec__19971,(2),null);var low = cljs.core.nth.call(null,vec__19971,(3),null);var close = cljs.core.nth.call(null,vec__19971,(4),null);var volume = cljs.core.nth.call(null,vec__19971,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return (((close - low) - (high - close)) * (volume / (high - low)));
}
}),kline));
});
/**
* 蔡金指標
*/
stock.formula.Chaikin = (function Chaikin(n,m,kline){return cljs.core.map.call(null,(function (p1__19972_SHARP_,p2__19973_SHARP_){return (p1__19972_SHARP_ - p2__19973_SHARP_);
}),stock.formula.ema_seq.call(null,n,stock.formula.AccDist.call(null,kline)),stock.formula.ema_seq.call(null,m,stock.formula.AccDist.call(null,kline)));
});
/**
* Ease Of Movement (EOM) 簡易波動指標
*/
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__19974_SHARP_,p2__19975_SHARP_){return (p1__19974_SHARP_ - p2__19975_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__19980){var vec__19981 = p__19980;var _ = cljs.core.nth.call(null,vec__19981,(0),null);var ___$1 = cljs.core.nth.call(null,vec__19981,(1),null);var high = cljs.core.nth.call(null,vec__19981,(2),null);var low = cljs.core.nth.call(null,vec__19981,(3),null);var ___$2 = cljs.core.nth.call(null,vec__19981,(4),null);var volume = cljs.core.nth.call(null,vec__19981,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__19976_SHARP_,p2__19977_SHARP_){return (p1__19976_SHARP_ / p2__19977_SHARP_);
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
{var group = cljs.core.take.call(null,n,kline);var vec__19987 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__19987,(0),null);var ___$1 = cljs.core.nth.call(null,vec__19987,(1),null);var ___$2 = cljs.core.nth.call(null,vec__19987,(2),null);var ___$3 = cljs.core.nth.call(null,vec__19987,(3),null);var ct = cljs.core.nth.call(null,vec__19987,(4),null);var ___$4 = cljs.core.nth.call(null,vec__19987,(5),null);var L = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__19987,_,___$1,___$2,___$3,ct,___$4){
return (function (p__19988){var vec__19989 = p__19988;var ___$5 = cljs.core.nth.call(null,vec__19989,(0),null);var ___$6 = cljs.core.nth.call(null,vec__19989,(1),null);var ___$7 = cljs.core.nth.call(null,vec__19989,(2),null);var low = cljs.core.nth.call(null,vec__19989,(3),null);var ___$8 = cljs.core.nth.call(null,vec__19989,(4),null);var ___$9 = cljs.core.nth.call(null,vec__19989,(5),null);return low;
});})(group,vec__19987,_,___$1,___$2,___$3,ct,___$4))
,group));var H = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__19987,_,___$1,___$2,___$3,ct,___$4,L){
return (function (p__19990){var vec__19991 = p__19990;var ___$5 = cljs.core.nth.call(null,vec__19991,(0),null);var ___$6 = cljs.core.nth.call(null,vec__19991,(1),null);var high = cljs.core.nth.call(null,vec__19991,(2),null);var ___$7 = cljs.core.nth.call(null,vec__19991,(3),null);var ___$8 = cljs.core.nth.call(null,vec__19991,(4),null);var ___$9 = cljs.core.nth.call(null,vec__19991,(5),null);return high;
});})(group,vec__19987,_,___$1,___$2,___$3,ct,___$4,L))
,group));var v = ((((ct - L) * ((1) / (H - L))) * (100)) | (0));return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,vec__19987,_,___$1,___$2,___$3,ct,___$4,L,H,v){
return (function (){return rsv_seq.call(null,n,cljs.core.rest.call(null,kline));
});})(group,vec__19987,_,___$1,___$2,___$3,ct,___$4,L,H,v))
,null,null)));
} else
{return null;
}
});
/**
* 余氏方向盤指標
*/
stock.formula.yu_car = (function yu_car(n,w,d,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / normal)),stock.formula.offset_seq.call(null,stock.tool.mid.call(null,reverse_kline)));var vs = cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__19994,up_offset){var vec__19995 = p__19994;var prev = cljs.core.nth.call(null,vec__19995,(0),null);var ran = cljs.core.nth.call(null,vec__19995,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * d)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.second,vs),cljs.core.map.call(null,cljs.core.first,vs)], null);
});
