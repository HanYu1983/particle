// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock6');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('stock.formula');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.drawer');
goog.require('stock.tool');
goog.require('stock.tool');
test.stock6.main = (function main(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_64986){var state_val_64987 = (state_64986[(1)]);if((state_val_64987 === (5)))
{var inst_64883 = (state_64986[(7)]);var inst_64881 = (state_64986[(8)]);var inst_64880 = (state_64986[(9)]);var inst_64891 = (state_64986[(10)]);var inst_64890 = (state_64986[(11)]);var inst_64885 = (state_64986[(12)]);var inst_64882 = (state_64986[(13)]);var inst_64899 = (state_64986[(2)]);var inst_64900 = cljs.core.get.call(null,inst_64899,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_64901 = cljs.core.get.call(null,inst_64899,new cljs.core.Keyword(null,"z","z",-789527183));var inst_64902 = cljs.core.get.call(null,inst_64899,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_64903 = stock.formula.clock_direction.call(null,inst_64902,inst_64901);var inst_64904 = stock.formula.BBI.call(null,(6),inst_64880);var inst_64905 = cljs.core.reverse.call(null,inst_64880);var inst_64906 = stock.formula.sar_seq.call(null,inst_64905);var inst_64907 = cljs.core.reverse.call(null,inst_64906);var inst_64908 = cljs.core.reverse.call(null,inst_64880);var inst_64909 = stock.formula.Chaikin.call(null,(3),(9),inst_64908);var inst_64910 = cljs.core.reverse.call(null,inst_64909);var inst_64911 = cljs.core.reverse.call(null,inst_64880);var inst_64912 = stock.formula.EOM.call(null,(14),inst_64911);var inst_64913 = cljs.core.reverse.call(null,inst_64912);var inst_64914 = stock.formula.yu_gv.call(null,(20),inst_64880);var inst_64915 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_64916 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_64917 = stock.tool.volume.call(null,inst_64880);var inst_64918 = [new cljs.core.Keyword(null,"line","line",212345235),inst_64917,"blue"];var inst_64919 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64916,inst_64918);var inst_64920 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_64921 = stock.tool.volume.call(null,inst_64880);var inst_64922 = stock.formula.sma_seq.call(null,(6),inst_64921);var inst_64923 = [new cljs.core.Keyword(null,"line","line",212345235),inst_64922,"yellow"];var inst_64924 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64920,inst_64923);var inst_64925 = [inst_64919,inst_64924];var inst_64926 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64925,null));var inst_64927 = [inst_64926];var inst_64928 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64915,inst_64927);var inst_64929 = inst_64881.width;var inst_64930 = inst_64881.height;var inst_64931 = inst_64881.getContext("2d");var inst_64932 = stock.drawer.draw.call(null,inst_64928,inst_64929,inst_64930,inst_64931);var inst_64933 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_64934 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_64935 = [new cljs.core.Keyword(null,"line","line",212345235),inst_64910];var inst_64936 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64934,inst_64935);var inst_64937 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_64938 = cljs.core.count.call(null,inst_64910);var inst_64939 = cljs.core.repeat.call(null,inst_64938,(0));var inst_64940 = [new cljs.core.Keyword(null,"line","line",212345235),inst_64939];var inst_64941 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64937,inst_64940);var inst_64942 = [inst_64936,inst_64941];var inst_64943 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64942,null));var inst_64944 = [inst_64943];var inst_64945 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64933,inst_64944);var inst_64946 = inst_64882.width;var inst_64947 = inst_64882.height;var inst_64948 = inst_64882.getContext("2d");var inst_64949 = stock.drawer.draw.call(null,inst_64945,inst_64946,inst_64947,inst_64948);var inst_64950 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_64951 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_64952 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_64901,inst_64902];var inst_64953 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64951,inst_64952);var inst_64954 = [inst_64953];var inst_64955 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64954,null));var inst_64956 = [inst_64955];var inst_64957 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64950,inst_64956);var inst_64958 = inst_64883.width;var inst_64959 = inst_64883.height;var inst_64960 = inst_64883.getContext("2d");var inst_64961 = stock.drawer.draw.call(null,inst_64957,inst_64958,inst_64959,inst_64960);var inst_64962 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_64963 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_64964 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_64880];var inst_64965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64963,inst_64964);var inst_64966 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_64967 = stock.tool.close.call(null,inst_64880);var inst_64968 = cljs.core.reverse.call(null,inst_64967);var inst_64969 = stock.formula.ema_seq.call(null,(12),inst_64968);var inst_64970 = cljs.core.reverse.call(null,inst_64969);var inst_64971 = [new cljs.core.Keyword(null,"line","line",212345235),inst_64970,"blue"];var inst_64972 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64966,inst_64971);var inst_64973 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_64974 = stock.tool.close.call(null,inst_64880);var inst_64975 = cljs.core.reverse.call(null,inst_64974);var inst_64976 = stock.formula.ema_seq.call(null,(26),inst_64975);var inst_64977 = cljs.core.reverse.call(null,inst_64976);var inst_64978 = [new cljs.core.Keyword(null,"line","line",212345235),inst_64977,"yellow"];var inst_64979 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64973,inst_64978);var inst_64980 = [inst_64965,inst_64972,inst_64979];var inst_64981 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64980,null));var inst_64982 = [inst_64981];var inst_64983 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64962,inst_64982);var inst_64984 = stock.drawer.draw.call(null,inst_64983,inst_64890,inst_64891,inst_64885);var state_64986__$1 = (function (){var statearr_64988 = state_64986;(statearr_64988[(14)] = inst_64913);
(statearr_64988[(15)] = inst_64932);
(statearr_64988[(16)] = inst_64961);
(statearr_64988[(17)] = inst_64907);
(statearr_64988[(18)] = inst_64914);
(statearr_64988[(19)] = inst_64900);
(statearr_64988[(20)] = inst_64903);
(statearr_64988[(21)] = inst_64949);
(statearr_64988[(22)] = inst_64904);
return statearr_64988;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64986__$1,inst_64984);
} else
{if((state_val_64987 === (4)))
{var inst_64893 = (state_64986[(23)]);var state_64986__$1 = state_64986;var statearr_64989_65001 = state_64986__$1;(statearr_64989_65001[(2)] = inst_64893);
(statearr_64989_65001[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64987 === (3)))
{var inst_64893 = (state_64986[(23)]);var inst_64896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64893);var state_64986__$1 = state_64986;var statearr_64990_65002 = state_64986__$1;(statearr_64990_65002[(2)] = inst_64896);
(statearr_64990_65002[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64987 === (2)))
{var inst_64880 = (state_64986[(9)]);var inst_64893 = (state_64986[(23)]);var inst_64878 = (state_64986[(2)]);var inst_64879 = cljs.core.nth.call(null,inst_64878,(0),null);var inst_64880__$1 = cljs.core.nth.call(null,inst_64878,(1),null);var inst_64881 = document.getElementById("index2");var inst_64882 = document.getElementById("index");var inst_64883 = document.getElementById("clock");var inst_64884 = document.getElementById("kline");var inst_64885 = inst_64884.getContext("2d");var inst_64886 = inst_64884.width;var inst_64887 = inst_64884.height;var inst_64888 = [inst_64886,inst_64887];var inst_64889 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64888,null));var inst_64890 = cljs.core.nth.call(null,inst_64889,(0),null);var inst_64891 = cljs.core.nth.call(null,inst_64889,(1),null);var inst_64892 = cljs.core.reverse.call(null,inst_64880__$1);var inst_64893__$1 = stock.formula.clock.call(null,(12),inst_64892);var inst_64894 = cljs.core.seq_QMARK_.call(null,inst_64893__$1);var state_64986__$1 = (function (){var statearr_64991 = state_64986;(statearr_64991[(7)] = inst_64883);
(statearr_64991[(8)] = inst_64881);
(statearr_64991[(9)] = inst_64880__$1);
(statearr_64991[(10)] = inst_64891);
(statearr_64991[(24)] = inst_64879);
(statearr_64991[(11)] = inst_64890);
(statearr_64991[(23)] = inst_64893__$1);
(statearr_64991[(12)] = inst_64885);
(statearr_64991[(13)] = inst_64882);
return statearr_64991;
})();if(inst_64894)
{var statearr_64992_65003 = state_64986__$1;(statearr_64992_65003[(1)] = (3));
} else
{var statearr_64993_65004 = state_64986__$1;(statearr_64993_65004[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64987 === (1)))
{var inst_64876 = stock.tool.stock_info.call(null,null,(2412),"2015/1/1",(0),(200));var state_64986__$1 = state_64986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64986__$1,(2),inst_64876);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64997[(0)] = state_machine__6188__auto__);
(statearr_64997[(1)] = (1));
return statearr_64997;
});
var state_machine__6188__auto____1 = (function (state_64986){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64986);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64998){if((e64998 instanceof Object))
{var ex__6191__auto__ = e64998;var statearr_64999_65005 = state_64986;(statearr_64999_65005[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65006 = state_64986;
state_64986 = G__65006;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64986){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_65000 = f__6203__auto__.call(null);(statearr_65000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_65000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
