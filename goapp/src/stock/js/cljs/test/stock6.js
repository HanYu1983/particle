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
return (function (state_24054){var state_val_24055 = (state_24054[(1)]);if((state_val_24055 === (5)))
{var inst_23936 = (state_24054[(7)]);var inst_23941 = (state_24054[(8)]);var inst_23933 = (state_24054[(9)]);var inst_23930 = (state_24054[(10)]);var inst_23934 = (state_24054[(11)]);var inst_23942 = (state_24054[(12)]);var inst_23935 = (state_24054[(13)]);var inst_23931 = (state_24054[(14)]);var inst_23932 = (state_24054[(15)]);var inst_23929 = (state_24054[(16)]);var inst_23940 = (state_24054[(17)]);var inst_23949 = (state_24054[(2)]);var inst_23950 = cljs.core.get.call(null,inst_23949,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_23951 = cljs.core.get.call(null,inst_23949,new cljs.core.Keyword(null,"z","z",-789527183));var inst_23952 = cljs.core.get.call(null,inst_23949,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_23953 = cljs.core.repeat.call(null,(5),(0));var inst_23954 = (function (){var ctx = inst_23936;var map__23926 = inst_23949;var canvas4 = inst_23932;var w = inst_23941;var cs = inst_23950;var err = inst_23930;var infos = inst_23931;var canvas = inst_23935;var canvas3 = inst_23933;var vec__23924 = inst_23929;var z = inst_23951;var vec__23925 = inst_23940;var v_z = inst_23952;var h = inst_23942;var canvas2 = inst_23934;return ((function (ctx,map__23926,canvas4,w,cs,err,infos,canvas,canvas3,vec__23924,z,vec__23925,v_z,h,canvas2,inst_23936,inst_23941,inst_23933,inst_23930,inst_23934,inst_23942,inst_23935,inst_23931,inst_23932,inst_23929,inst_23940,inst_23949,inst_23950,inst_23951,inst_23952,inst_23953,state_val_24055,c__6202__auto__){
return (function (p1__23778_SHARP_){return Math.abs(p1__23778_SHARP_);
});
;})(ctx,map__23926,canvas4,w,cs,err,infos,canvas,canvas3,vec__23924,z,vec__23925,v_z,h,canvas2,inst_23936,inst_23941,inst_23933,inst_23930,inst_23934,inst_23942,inst_23935,inst_23931,inst_23932,inst_23929,inst_23940,inst_23949,inst_23950,inst_23951,inst_23952,inst_23953,state_val_24055,c__6202__auto__))
})();var inst_23955 = cljs.core.map.call(null,cljs.core._PLUS_,inst_23951,inst_23952);var inst_23956 = cljs.core.map.call(null,inst_23954,inst_23955);var inst_23957 = cljs.core.reverse.call(null,inst_23956);var inst_23958 = cljs.core.into.call(null,inst_23953,inst_23957);var inst_23959 = stock.formula.clock_direction.call(null,inst_23952,inst_23951);var inst_23960 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_23931);var inst_23961 = cljs.core.reverse.call(null,inst_23931);var inst_23962 = stock.formula.sar_seq.call(null,(3),inst_23961);var inst_23963 = cljs.core.reverse.call(null,inst_23962);var inst_23964 = cljs.core.reverse.call(null,inst_23931);var inst_23965 = stock.formula.Chaikin.call(null,(3),(9),inst_23964);var inst_23966 = cljs.core.reverse.call(null,inst_23965);var inst_23967 = cljs.core.reverse.call(null,inst_23931);var inst_23968 = stock.formula.EOM.call(null,(14),inst_23967);var inst_23969 = cljs.core.reverse.call(null,inst_23968);var inst_23970 = stock.formula.yu_gv.call(null,(20),inst_23931);var inst_23971 = stock.formula.yu_clock.call(null,(20),inst_23931);var inst_23972 = stock.formula.macd_dif.call(null,(20),(100),inst_23931);var inst_23973 = stock.tool.close.call(null,inst_23931);var inst_23974 = cljs.core.reverse.call(null,inst_23973);var inst_23975 = stock.formula.ema_seq.call(null,(5),inst_23974);var inst_23976 = cljs.core.reverse.call(null,inst_23975);var inst_23977 = cljs.core.map.call(null,cljs.core._,inst_23976,inst_23960);var inst_23978 = stock.formula.rsv_seq.call(null,(100),inst_23931);var inst_23979 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23980 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23981 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23977,"black"];var inst_23982 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23980,inst_23981);var inst_23983 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23984 = stock.formula.sma_seq.call(null,(9),inst_23977);var inst_23985 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23984,"yellow"];var inst_23986 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23983,inst_23985);var inst_23987 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_23988 = cljs.core.count.call(null,inst_23931);var inst_23989 = cljs.core.repeat.call(null,inst_23988,(0));var inst_23990 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23989];var inst_23991 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23987,inst_23990);var inst_23992 = [inst_23982,inst_23986,inst_23991];var inst_23993 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23992,null));var inst_23994 = [inst_23993];var inst_23995 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23979,inst_23994);var inst_23996 = inst_23932.width;var inst_23997 = inst_23932.height;var inst_23998 = inst_23932.getContext("2d");var inst_23999 = stock.drawer.draw.call(null,inst_23995,inst_23996,inst_23997,inst_23998);var inst_24000 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24001 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24002 = stock.formula.sma_seq.call(null,(3),inst_23978);var inst_24003 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24002,"black"];var inst_24004 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24001,inst_24003);var inst_24005 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24006 = stock.formula.sma_seq.call(null,(9),inst_23978);var inst_24007 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24006,"yellow"];var inst_24008 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24005,inst_24007);var inst_24009 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_24010 = cljs.core.count.call(null,inst_23931);var inst_24011 = cljs.core.repeat.call(null,inst_24010,(50));var inst_24012 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24011];var inst_24013 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24009,inst_24012);var inst_24014 = [inst_24004,inst_24008,inst_24013];var inst_24015 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24014,null));var inst_24016 = [inst_24015];var inst_24017 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24000,inst_24016);var inst_24018 = inst_23933.width;var inst_24019 = inst_23933.height;var inst_24020 = inst_23933.getContext("2d");var inst_24021 = stock.drawer.draw.call(null,inst_24017,inst_24018,inst_24019,inst_24020);var inst_24022 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24023 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24024 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_23951,inst_23952,"blue"];var inst_24025 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24023,inst_24024);var inst_24026 = [inst_24025];var inst_24027 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24026,null));var inst_24028 = [inst_24027];var inst_24029 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24022,inst_24028);var inst_24030 = inst_23934.width;var inst_24031 = inst_23934.height;var inst_24032 = inst_23934.getContext("2d");var inst_24033 = stock.drawer.draw.call(null,inst_24029,inst_24030,inst_24031,inst_24032);var inst_24034 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24035 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_24036 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_23931];var inst_24037 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24035,inst_24036);var inst_24038 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24039 = stock.tool.close.call(null,inst_23931);var inst_24040 = cljs.core.reverse.call(null,inst_24039);var inst_24041 = stock.formula.ema_seq.call(null,(5),inst_24040);var inst_24042 = cljs.core.reverse.call(null,inst_24041);var inst_24043 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24042,"blue"];var inst_24044 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24038,inst_24043);var inst_24045 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24046 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23960,"yellow"];var inst_24047 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24045,inst_24046);var inst_24048 = [inst_24037,inst_24044,inst_24047];var inst_24049 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24048,null));var inst_24050 = [inst_24049];var inst_24051 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24034,inst_24050);var inst_24052 = stock.drawer.draw.call(null,inst_24051,inst_23941,inst_23942,inst_23936);var state_24054__$1 = (function (){var statearr_24056 = state_24054;(statearr_24056[(18)] = inst_23959);
(statearr_24056[(19)] = inst_23972);
(statearr_24056[(20)] = inst_23963);
(statearr_24056[(21)] = inst_24021);
(statearr_24056[(22)] = inst_23958);
(statearr_24056[(23)] = inst_24033);
(statearr_24056[(24)] = inst_23966);
(statearr_24056[(25)] = inst_23970);
(statearr_24056[(26)] = inst_23969);
(statearr_24056[(27)] = inst_23971);
(statearr_24056[(28)] = inst_23999);
return statearr_24056;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24054__$1,inst_24052);
} else
{if((state_val_24055 === (4)))
{var inst_23943 = (state_24054[(29)]);var state_24054__$1 = state_24054;var statearr_24057_24069 = state_24054__$1;(statearr_24057_24069[(2)] = inst_23943);
(statearr_24057_24069[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24055 === (3)))
{var inst_23943 = (state_24054[(29)]);var inst_23946 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23943);var state_24054__$1 = state_24054;var statearr_24058_24070 = state_24054__$1;(statearr_24058_24070[(2)] = inst_23946);
(statearr_24058_24070[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24055 === (2)))
{var inst_23943 = (state_24054[(29)]);var inst_23935 = (state_24054[(13)]);var inst_23931 = (state_24054[(14)]);var inst_23929 = (state_24054[(16)]);var inst_23940 = (state_24054[(17)]);var inst_23929__$1 = (state_24054[(2)]);var inst_23930 = cljs.core.nth.call(null,inst_23929__$1,(0),null);var inst_23931__$1 = cljs.core.nth.call(null,inst_23929__$1,(1),null);var inst_23932 = document.getElementById("index2");var inst_23933 = document.getElementById("index");var inst_23934 = document.getElementById("clock");var inst_23935__$1 = document.getElementById("kline");var inst_23936 = inst_23935__$1.getContext("2d");var inst_23937 = inst_23935__$1.width;var inst_23938 = inst_23935__$1.height;var inst_23939 = [inst_23937,inst_23938];var inst_23940__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23939,null));var inst_23941 = cljs.core.nth.call(null,inst_23940__$1,(0),null);var inst_23942 = cljs.core.nth.call(null,inst_23940__$1,(1),null);var inst_23943__$1 = stock.formula.clock.call(null,(20),inst_23931__$1);var inst_23944 = cljs.core.seq_QMARK_.call(null,inst_23943__$1);var state_24054__$1 = (function (){var statearr_24059 = state_24054;(statearr_24059[(29)] = inst_23943__$1);
(statearr_24059[(7)] = inst_23936);
(statearr_24059[(8)] = inst_23941);
(statearr_24059[(9)] = inst_23933);
(statearr_24059[(10)] = inst_23930);
(statearr_24059[(11)] = inst_23934);
(statearr_24059[(12)] = inst_23942);
(statearr_24059[(13)] = inst_23935__$1);
(statearr_24059[(14)] = inst_23931__$1);
(statearr_24059[(15)] = inst_23932);
(statearr_24059[(16)] = inst_23929__$1);
(statearr_24059[(17)] = inst_23940__$1);
return statearr_24059;
})();if(inst_23944)
{var statearr_24060_24071 = state_24054__$1;(statearr_24060_24071[(1)] = (3));
} else
{var statearr_24061_24072 = state_24054__$1;(statearr_24061_24072[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24055 === (1)))
{var inst_23927 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_24054__$1 = state_24054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24054__$1,(2),inst_23927);
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
var state_machine__6188__auto____0 = (function (){var statearr_24065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24065[(0)] = state_machine__6188__auto__);
(statearr_24065[(1)] = (1));
return statearr_24065;
});
var state_machine__6188__auto____1 = (function (state_24054){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24066){if((e24066 instanceof Object))
{var ex__6191__auto__ = e24066;var statearr_24067_24073 = state_24054;(statearr_24067_24073[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24074 = state_24054;
state_24054 = G__24074;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24054){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_24068 = f__6203__auto__.call(null);(statearr_24068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
