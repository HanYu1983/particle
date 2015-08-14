// Compiled by ClojureScript 0.0-2268
goog.provide('stock.formula');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.formula.average = (function average(vs){return (cljs.core.apply.call(null,cljs.core._PLUS_,vs) / cljs.core.count.call(null,vs));
});
stock.formula.offset_seq = (function offset_seq(vs){return cljs.core.map.call(null,(function (p1__10901_SHARP_,p2__10900_SHARP_){return (p2__10900_SHARP_ - p1__10901_SHARP_);
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
stock.formula.StandardDeviation = (function StandardDeviation(avg,vs){var v = Math.sqrt((((1) / (cljs.core.count.call(null,vs) - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__10902_SHARP_){return Math.pow((p1__10902_SHARP_ - avg),(2));
}),vs))));return v;
});
stock.formula.z_score = (function z_score(avg,sd,vs){var offsets = cljs.core.map.call(null,(function (v){return (v - avg);
}),vs);var vs__$1 = cljs.core.map.call(null,((function (offsets){
return (function (p1__10903_SHARP_){return (p1__10903_SHARP_ / sd);
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
var G__10904__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / (4));
};
var G__10904 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10904__delegate.call(this,args);};
G__10904.cljs$lang$maxFixedArity = 0;
G__10904.cljs$lang$applyTo = (function (arglist__10905){
var args = cljs.core.seq(arglist__10905);
return G__10904__delegate(args);
});
G__10904.cljs$core$IFn$_invoke$arity$variadic = G__10904__delegate;
return G__10904;
})()
;})(n1,n2,n3,n4))
,n1,n2,n3,n4);
});
/**
* 拋物線指標
*/
stock.formula.sar_seq = (function sar_seq(reverse_kline){if((cljs.core.count.call(null,reverse_kline) >= (3)))
{var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p__10928){var vec__10929 = p__10928;var _ = cljs.core.nth.call(null,vec__10929,(0),null);var ___$1 = cljs.core.nth.call(null,vec__10929,(1),null);var ___$2 = cljs.core.nth.call(null,vec__10929,(2),null);var low = cljs.core.nth.call(null,vec__10929,(3),null);var ___$3 = cljs.core.nth.call(null,vec__10929,(4),null);var ___$4 = cljs.core.nth.call(null,vec__10929,(5),null);return low;
}),cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.drop_last.call(null,(2),cljs.core.take.call(null,cljs.core.count.call(null,reverse_kline),cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (low){
return (function (p__10930){var vec__10931 = p__10930;var value = cljs.core.nth.call(null,vec__10931,(0),null);var ori = cljs.core.nth.call(null,vec__10931,(1),null);var prev = cljs.core.nth.call(null,vec__10931,(2),null);var curr = cljs.core.nth.call(null,vec__10931,(3),null);var act = cljs.core.nth.call(null,vec__10931,(4),null);var af = cljs.core.nth.call(null,vec__10931,(5),null);var vec__10932 = cljs.core.first.call(null,prev);var _ = cljs.core.nth.call(null,vec__10932,(0),null);var ___$1 = cljs.core.nth.call(null,vec__10932,(1),null);var ph = cljs.core.nth.call(null,vec__10932,(2),null);var pl = cljs.core.nth.call(null,vec__10932,(3),null);var ___$2 = cljs.core.nth.call(null,vec__10932,(4),null);var ___$3 = cljs.core.nth.call(null,vec__10932,(5),null);var prev_line = vec__10932;var vec__10933 = cljs.core.first.call(null,curr);var ___$4 = cljs.core.nth.call(null,vec__10933,(0),null);var ___$5 = cljs.core.nth.call(null,vec__10933,(1),null);var ch = cljs.core.nth.call(null,vec__10933,(2),null);var cl = cljs.core.nth.call(null,vec__10933,(3),null);var ___$6 = cljs.core.nth.call(null,vec__10933,(4),null);var ___$7 = cljs.core.nth.call(null,vec__10933,(5),null);var curr_line = vec__10933;var should_turn = (function (){var pred__10934 = cljs.core._EQ_;var expr__10935 = act;if(cljs.core.truth_(pred__10934.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__10935)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__10934.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__10935)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10935))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__10937 = cljs.core._EQ_;var expr__10938 = act;if(cljs.core.truth_(pred__10937.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__10938)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__10937,expr__10938,vec__10932,_,___$1,ph,pl,___$2,___$3,prev_line,vec__10933,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__10931,value,ori,prev,curr,act,af,low){
return (function (p__10940){var vec__10941 = p__10940;var ___$8 = cljs.core.nth.call(null,vec__10941,(0),null);var ___$9 = cljs.core.nth.call(null,vec__10941,(1),null);var high = cljs.core.nth.call(null,vec__10941,(2),null);var ___$10 = cljs.core.nth.call(null,vec__10941,(3),null);var ___$11 = cljs.core.nth.call(null,vec__10941,(4),null);var ___$12 = cljs.core.nth.call(null,vec__10941,(5),null);return high;
});})(pred__10937,expr__10938,vec__10932,_,___$1,ph,pl,___$2,___$3,prev_line,vec__10933,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__10931,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__10937.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__10938)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__10937,expr__10938,vec__10932,_,___$1,ph,pl,___$2,___$3,prev_line,vec__10933,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__10931,value,ori,prev,curr,act,af,low){
return (function (p__10942){var vec__10943 = p__10942;var ___$8 = cljs.core.nth.call(null,vec__10943,(0),null);var ___$9 = cljs.core.nth.call(null,vec__10943,(1),null);var ___$10 = cljs.core.nth.call(null,vec__10943,(2),null);var low__$1 = cljs.core.nth.call(null,vec__10943,(3),null);var ___$11 = cljs.core.nth.call(null,vec__10943,(4),null);var ___$12 = cljs.core.nth.call(null,vec__10943,(5),null);return low__$1;
});})(pred__10937,expr__10938,vec__10932,_,___$1,ph,pl,___$2,___$3,prev_line,vec__10933,___$4,___$5,ch,cl,___$6,___$7,curr_line,should_turn,vec__10931,value,ori,prev,curr,act,af,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10938))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__10944 = cljs.core._EQ_;var expr__10945 = act;if(cljs.core.truth_(pred__10944.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__10945)))
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
{if(cljs.core.truth_(pred__10944.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__10945)))
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
{if(cljs.core.truth_(pred__10944.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__10945)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10945))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__10947 = cljs.core._EQ_;var expr__10948 = act;if(cljs.core.truth_(pred__10947.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__10948)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__10947.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__10948)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10948))));
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
stock.formula.AccDist = (function AccDist(kline){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p__10952){var vec__10953 = p__10952;var _ = cljs.core.nth.call(null,vec__10953,(0),null);var open = cljs.core.nth.call(null,vec__10953,(1),null);var high = cljs.core.nth.call(null,vec__10953,(2),null);var low = cljs.core.nth.call(null,vec__10953,(3),null);var close = cljs.core.nth.call(null,vec__10953,(4),null);var volume = cljs.core.nth.call(null,vec__10953,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return (((close - low) - (high - close)) * (volume / (high - low)));
}
}),kline));
});
/**
* 蔡金指標
*/
stock.formula.Chaikin = (function Chaikin(n,m,kline){return cljs.core.map.call(null,(function (p1__10954_SHARP_,p2__10955_SHARP_){return (p1__10954_SHARP_ - p2__10955_SHARP_);
}),stock.formula.ema_seq.call(null,n,stock.formula.AccDist.call(null,kline)),stock.formula.ema_seq.call(null,m,stock.formula.AccDist.call(null,kline)));
});
/**
* Ease Of Movement (EOM) 簡易波動指標
*/
stock.formula.EOM = (function EOM(n,kline){var mid_move = cljs.core.map.call(null,(function (p1__10956_SHARP_,p2__10957_SHARP_){return (p1__10956_SHARP_ - p2__10957_SHARP_);
}),stock.tool.mid.call(null,kline),cljs.core.rest.call(null,stock.tool.mid.call(null,kline)));var BoxRatio = cljs.core.map.call(null,((function (mid_move){
return (function (p__10962){var vec__10963 = p__10962;var _ = cljs.core.nth.call(null,vec__10963,(0),null);var ___$1 = cljs.core.nth.call(null,vec__10963,(1),null);var high = cljs.core.nth.call(null,vec__10963,(2),null);var low = cljs.core.nth.call(null,vec__10963,(3),null);var ___$2 = cljs.core.nth.call(null,vec__10963,(4),null);var volume = cljs.core.nth.call(null,vec__10963,(5),null);return (volume / (high - low));
});})(mid_move))
,kline);var eom = cljs.core.map.call(null,((function (mid_move,BoxRatio){
return (function (p1__10958_SHARP_,p2__10959_SHARP_){return (p1__10958_SHARP_ / p2__10959_SHARP_);
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
