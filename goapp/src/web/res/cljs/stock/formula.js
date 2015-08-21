// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__38913_SHARP_,p2__38912_SHARP_){return (p2__38912_SHARP_ - p1__38913_SHARP_);
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
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__38914_SHARP_){return Math.pow((p1__38914_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__38915_SHARP_){return (p1__38915_SHARP_ / sd);
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
return (function (p1__38916_SHARP_){return (p1__38916_SHARP_ / length.call(null,line));
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
var G__38917__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__38917 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38917__delegate.call(this,args);};
G__38917.cljs$lang$maxFixedArity = 0;
G__38917.cljs$lang$applyTo = (function (arglist__38918){
var args = cljs.core.seq(arglist__38918);
return G__38917__delegate(args);
});
G__38917.cljs$core$IFn$_invoke$arity$variadic = G__38917__delegate;
return G__38917;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 指數多空指標
*/
stock.formula.EBBI = (function EBBI(n,m,o,p,vs){var n1 = stock.formula.ema_seq.call(null,n,vs);var n2 = stock.formula.ema_seq.call(null,m,vs);var n3 = stock.formula.ema_seq.call(null,o,vs);var n4 = stock.formula.ema_seq.call(null,p,vs);return cljs.core.map.call(null,((function (n1,n2,n3,n4){
return (function() { 
var G__38919__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__38919 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38919__delegate.call(this,args);};
G__38919.cljs$lang$maxFixedArity = 0;
G__38919.cljs$lang$applyTo = (function (arglist__38920){
var args = cljs.core.seq(arglist__38920);
return G__38919__delegate(args);
});
G__38919.cljs$core$IFn$_invoke$arity$variadic = G__38919__delegate;
return G__38919;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(n,reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= n))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__38943){var vec__38944 = p__38943;var _ = cljs.core.nth.call(null,vec__38944,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38944,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38944,(2),null);var low = cljs.core.nth.call(null,vec__38944,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38944,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38944,(5),null);return low;
}),cljs.core.take.call(null,n,reverse_kline)));return cljs.core.drop_last.call(null,(n - (1)),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__38945){var vec__38946 = p__38945;var value = cljs.core.nth.call(null,vec__38946,(0),null);var ori = cljs.core.nth.call(null,vec__38946,(1),null);var prev = cljs.core.nth.call(null,vec__38946,(2),null);var curr = cljs.core.nth.call(null,vec__38946,(3),null);var act = cljs.core.nth.call(null,vec__38946,(4),null);var af = cljs.core.nth.call(null,vec__38946,(5),null);var vec__38947 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__38947,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38947,(1),null);var ph = cljs.core.nth.call(null,vec__38947,(2),null);var pl = cljs.core.nth.call(null,vec__38947,(3),null);var ___$2 = cljs.core.nth.call(null,vec__38947,(4),null);var ___$3 = cljs.core.nth.call(null,vec__38947,(5),null);var prev_line = vec__38947;var vec__38948 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__38948,(0),null);var ___$5 = cljs.core.nth.call(null,vec__38948,(1),null);var ch = cljs.core.nth.call(null,vec__38948,(2),null);var cl = cljs.core.nth.call(null,vec__38948,(3),null);var ___$6 = cljs.core.nth.call(null,vec__38948,(4),null);var ___$7 = cljs.core.nth.call(null,vec__38948,(5),null);var curr_line = vec__38948;var should_turn = (function (){var pred__38949 = cljs.core._EQ_;var expr__38950 = act;if(cljs.core.truth_(pred__38949.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__38950)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__38949.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__38950)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38950))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__38952 = cljs.core._EQ_;var expr__38953 = act;if(cljs.core.truth_(pred__38952.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__38953)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__38952,expr__38953,vec__38947,_,___$1,ph,pl,___$2,___$3,prev_line,vec__38948,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__38946,value,ori,prev,curr,act,af,low){
return (function (p__38955){var vec__38956 = p__38955;var ___$8 = cljs.core.nth.call(null,vec__38956,(0),null);var ___$9 = cljs.core.nth.call(null,vec__38956,(1),null);var high = cljs.core.nth.call(null,vec__38956,(2),null);var ___$10 = cljs.core.nth.call(null,vec__38956,(3),null);var ___$11 = cljs.core.nth.call(null,vec__38956,(4),null);var ___$12 = cljs.core.nth.call(null,vec__38956,(5),null);return high;
});})(pred__38952,expr__38953,vec__38947,_,___$1,ph,pl,___$2,___$3,prev_line,vec__38948,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__38946,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{if(cljs.core.truth_(pred__38952.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__38953)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__38952,expr__38953,vec__38947,_,___$1,ph,pl,___$2,___$3,prev_line,vec__38948,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__38946,value,ori,prev,curr,act,af,low){
return (function (p__38957){var vec__38958 = p__38957;var ___$8 = cljs.core.nth.call(null,vec__38958,(0),null);var ___$9 = cljs.core.nth.call(null,vec__38958,(1),null);var ___$10 = cljs.core.nth.call(null,vec__38958,(2),null);var low__$1 = cljs.core.nth.call(null,vec__38958,(3),null);var ___$11 = cljs.core.nth.call(null,vec__38958,(4),null);var ___$12 = cljs.core.nth.call(null,vec__38958,(5),null);return low__$1;
});})(pred__38952,expr__38953,vec__38947,_,___$1,ph,pl,___$2,___$3,prev_line,vec__38948,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__38946,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,n,ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38953))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__38959 = cljs.core._EQ_;var expr__38960 = act;if(cljs.core.truth_(pred__38959.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__38960)))
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
{if(cljs.core.truth_(pred__38959.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__38960)))
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
{if(cljs.core.truth_(pred__38959.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__38960)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38960))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__38962 = cljs.core._EQ_;var expr__38963 = act;if(cljs.core.truth_(pred__38962.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__38963)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__38962.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__38963)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38963))));
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
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__38967){var vec__38968 = p__38967;var _ = cljs.core.nth.call(null,vec__38968,(0),null);var open = cljs.core.nth.call(null,vec__38968,(1),null);var high = cljs.core.nth.call(null,vec__38968,(2),null);var low = cljs.core.nth.call(null,vec__38968,(3),null);var close = cljs.core.nth.call(null,vec__38968,(4),null);var volume = cljs.core.nth.call(null,vec__38968,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return (((close - low) - (high - close)) * (volume / (high - low)));
}
}),kline));
});
/**
* 蔡金指標
*/
stock.formula.Chaikin = (function Chaikin(n,m,kline){return cljs.core.map.call(null,(function (p1__38969_SHARP_,p2__38970_SHARP_){return (p1__38969_SHARP_ - p2__38970_SHARP_);
}),stock.formula.ema_seq.call(null,n,stock.formula.AccDist.call(null,kline)),stock.formula.ema_seq.call(null,m,stock.formula.AccDist.call(null,kline)));
});
/**
* Ease Of Movement (EOM) 簡易波動指標
*/
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__38971_SHARP_,p2__38972_SHARP_){return (p1__38971_SHARP_ - p2__38972_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__38977){var vec__38978 = p__38977;var _ = cljs.core.nth.call(null,vec__38978,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38978,(1),null);var high = cljs.core.nth.call(null,vec__38978,(2),null);var low = cljs.core.nth.call(null,vec__38978,(3),null);var ___$2 = cljs.core.nth.call(null,vec__38978,(4),null);var volume = cljs.core.nth.call(null,vec__38978,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__38973_SHARP_,p2__38974_SHARP_){return (p1__38973_SHARP_ / p2__38974_SHARP_);
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
{var group = cljs.core.take.call(null,n,kline);var vec__38984 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__38984,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38984,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38984,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38984,(3),null);var ct = cljs.core.nth.call(null,vec__38984,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38984,(5),null);var L = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__38984,_,___$1,___$2,___$3,ct,___$4){
return (function (p__38985){var vec__38986 = p__38985;var ___$5 = cljs.core.nth.call(null,vec__38986,(0),null);var ___$6 = cljs.core.nth.call(null,vec__38986,(1),null);var ___$7 = cljs.core.nth.call(null,vec__38986,(2),null);var low = cljs.core.nth.call(null,vec__38986,(3),null);var ___$8 = cljs.core.nth.call(null,vec__38986,(4),null);var ___$9 = cljs.core.nth.call(null,vec__38986,(5),null);return low;
});})(group,vec__38984,_,___$1,___$2,___$3,ct,___$4))
,group));var H = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__38984,_,___$1,___$2,___$3,ct,___$4,L){
return (function (p__38987){var vec__38988 = p__38987;var ___$5 = cljs.core.nth.call(null,vec__38988,(0),null);var ___$6 = cljs.core.nth.call(null,vec__38988,(1),null);var high = cljs.core.nth.call(null,vec__38988,(2),null);var ___$7 = cljs.core.nth.call(null,vec__38988,(3),null);var ___$8 = cljs.core.nth.call(null,vec__38988,(4),null);var ___$9 = cljs.core.nth.call(null,vec__38988,(5),null);return high;
});})(group,vec__38984,_,___$1,___$2,___$3,ct,___$4,L))
,group));var v = ((((ct - L) * ((1) / (H - L))) * (100)) | (0));return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,vec__38984,_,___$1,___$2,___$3,ct,___$4,L,H,v){
return (function (){return rsv_seq.call(null,n,cljs.core.rest.call(null,kline));
});})(group,vec__38984,_,___$1,___$2,___$3,ct,___$4,L,H,v))
,null,null)));
} else
{return null;
}
});
/**
* 余氏方向盤指標
*/
stock.formula.yu_car = (function yu_car(n,w,d,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / normal)),stock.formula.offset_seq.call(null,stock.tool.mid.call(null,reverse_kline)));var vs = cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__38991,up_offset){var vec__38992 = p__38991;var prev = cljs.core.nth.call(null,vec__38992,(0),null);var ran = cljs.core.nth.call(null,vec__38992,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
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
