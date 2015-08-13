// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__55278_SHARP_,p2__55277_SHARP_){return (p2__55277_SHARP_ - p1__55278_SHARP_);
}),vs,cljs.core.rest.call(null,vs));
});
stock.formula.sma_seq = (function sma_seq(n,vs){if((cljs.core.count.call(null,vs) >= n))
{return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,n,vs)) / n),(new cljs.core.LazySeq(null,(function (){return sma_seq.call(null,n,cljs.core.rest.call(null,vs));
}),null,null)));
} else
{return null;
}
});
stock.formula.ema_seq = (function ema_seq(n,vs){var fv = cljs.core.first.call(null,stock.formula.sma_seq.call(null,n,vs));var alpha = ((2) / (n + (1)));return cljs.core.reductions.call(null,((function (fv,alpha){
return (function (ema,v){return (((v - ema) * alpha) + ema);
});})(fv,alpha))
,fv,cljs.core.rest.call(null,vs));
});
/**
* Standard Deviation 標準差
*/
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__55279_SHARP_){return Math.pow((p1__55279_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__55280_SHARP_){return (p1__55280_SHARP_ / sd);
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
var G__55281__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__55281 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55281__delegate.call(this,args);};
G__55281.cljs$lang$maxFixedArity = 0;
G__55281.cljs$lang$applyTo = (function (arglist__55282){
var args = cljs.core.seq(arglist__55282);
return G__55281__delegate(args);
});
G__55281.cljs$core$IFn$_invoke$arity$variadic = G__55281__delegate;
return G__55281;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= (3)))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__55305){var vec__55306 = p__55305;var _ = cljs.core.nth.call(null,vec__55306,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55306,(1),null);var ___$2 = cljs.core.nth.call(null,vec__55306,(2),null);var low = cljs.core.nth.call(null,vec__55306,(3),null);var ___$3 = cljs.core.nth.call(null,vec__55306,(4),null);var ___$4 = cljs.core.nth.call(null,vec__55306,(5),null);return low;
}),cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.drop_last.call(null,(2),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__55307){var vec__55308 = p__55307;var value = cljs.core.nth.call(null,vec__55308,(0),null);var ori = cljs.core.nth.call(null,vec__55308,(1),null);var prev = cljs.core.nth.call(null,vec__55308,(2),null);var curr = cljs.core.nth.call(null,vec__55308,(3),null);var act = cljs.core.nth.call(null,vec__55308,(4),null);var af = cljs.core.nth.call(null,vec__55308,(5),null);var vec__55309 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__55309,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55309,(1),null);var ph = cljs.core.nth.call(null,vec__55309,(2),null);var pl = cljs.core.nth.call(null,vec__55309,(3),null);var ___$2 = cljs.core.nth.call(null,vec__55309,(4),null);var ___$3 = cljs.core.nth.call(null,vec__55309,(5),null);var prev_line = vec__55309;var vec__55310 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__55310,(0),null);var ___$5 = cljs.core.nth.call(null,vec__55310,(1),null);var ch = cljs.core.nth.call(null,vec__55310,(2),null);var cl = cljs.core.nth.call(null,vec__55310,(3),null);var ___$6 = cljs.core.nth.call(null,vec__55310,(4),null);var ___$7 = cljs.core.nth.call(null,vec__55310,(5),null);var curr_line = vec__55310;var should_turn = (function (){var pred__55311 = cljs.core._EQ_;var expr__55312 = act;if(cljs.core.truth_(pred__55311.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__55312)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__55311.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__55312)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__55312))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__55314 = cljs.core._EQ_;var expr__55315 = act;if(cljs.core.truth_(pred__55314.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__55315)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__55314,expr__55315,vec__55309,_,___$1,ph,pl,___$2,___$3,prev_line,vec__55310,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__55308,value,ori,prev,curr,act,af,low){
return (function (p__55317){var vec__55318 = p__55317;var ___$8 = cljs.core.nth.call(null,vec__55318,(0),null);var ___$9 = cljs.core.nth.call(null,vec__55318,(1),null);var high = cljs.core.nth.call(null,vec__55318,(2),null);var ___$10 = cljs.core.nth.call(null,vec__55318,(3),null);var ___$11 = cljs.core.nth.call(null,vec__55318,(4),null);var ___$12 = cljs.core.nth.call(null,vec__55318,(5),null);return high;
});})(pred__55314,expr__55315,vec__55309,_,___$1,ph,pl,___$2,___$3,prev_line,vec__55310,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__55308,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__55314.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__55315)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__55314,expr__55315,vec__55309,_,___$1,ph,pl,___$2,___$3,prev_line,vec__55310,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__55308,value,ori,prev,curr,act,af,low){
return (function (p__55319){var vec__55320 = p__55319;var ___$8 = cljs.core.nth.call(null,vec__55320,(0),null);var ___$9 = cljs.core.nth.call(null,vec__55320,(1),null);var ___$10 = cljs.core.nth.call(null,vec__55320,(2),null);var low__$1 = cljs.core.nth.call(null,vec__55320,(3),null);var ___$11 = cljs.core.nth.call(null,vec__55320,(4),null);var ___$12 = cljs.core.nth.call(null,vec__55320,(5),null);return low__$1;
});})(pred__55314,expr__55315,vec__55309,_,___$1,ph,pl,___$2,___$3,prev_line,vec__55310,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__55308,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__55315))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__55321 = cljs.core._EQ_;var expr__55322 = act;if(cljs.core.truth_(pred__55321.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__55322)))
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
{if(cljs.core.truth_(pred__55321.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__55322)))
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
{if(cljs.core.truth_(pred__55321.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__55322)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__55322))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__55324 = cljs.core._EQ_;var expr__55325 = act;if(cljs.core.truth_(pred__55324.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__55325)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__55324.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__55325)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__55325))));
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
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__55329){var vec__55330 = p__55329;var _ = cljs.core.nth.call(null,vec__55330,(0),null);var open = cljs.core.nth.call(null,vec__55330,(1),null);var high = cljs.core.nth.call(null,vec__55330,(2),null);var low = cljs.core.nth.call(null,vec__55330,(3),null);var close = cljs.core.nth.call(null,vec__55330,(4),null);var volume = cljs.core.nth.call(null,vec__55330,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return (((close - low) - (high - close)) * (volume / (high - low)));
}
}),kline));
});
/**
* 蔡金指標
*/
stock.formula.Chaikin = (function Chaikin(n,m,kline){return cljs.core.map.call(null,(function (p1__55331_SHARP_,p2__55332_SHARP_){return (p1__55331_SHARP_ - p2__55332_SHARP_);
}),stock.formula.ema_seq.call(null,n,stock.formula.AccDist.call(null,kline)),stock.formula.ema_seq.call(null,m,stock.formula.AccDist.call(null,kline)));
});
/**
* Ease Of Movement (EOM) 簡易波動指標
*/
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__55333_SHARP_,p2__55334_SHARP_){return (p1__55333_SHARP_ - p2__55334_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__55339){var vec__55340 = p__55339;var _ = cljs.core.nth.call(null,vec__55340,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55340,(1),null);var high = cljs.core.nth.call(null,vec__55340,(2),null);var low = cljs.core.nth.call(null,vec__55340,(3),null);var ___$2 = cljs.core.nth.call(null,vec__55340,(4),null);var volume = cljs.core.nth.call(null,vec__55340,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__55335_SHARP_,p2__55336_SHARP_){return (p1__55335_SHARP_ / p2__55336_SHARP_);
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
