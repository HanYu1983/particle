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
return (function (state_15019){var state_val_15020 = (state_15019[(1)]);if((state_val_15020 === (5)))
{var inst_14898 = (state_15019[(7)]);var inst_14899 = (state_15019[(8)]);var inst_14891 = (state_15019[(9)]);var inst_14900 = (state_15019[(10)]);var inst_14892 = (state_15019[(11)]);var inst_14887 = (state_15019[(12)]);var inst_14889 = (state_15019[(13)]);var inst_14893 = (state_15019[(14)]);var inst_14890 = (state_15019[(15)]);var inst_14888 = (state_15019[(16)]);var inst_14894 = (state_15019[(17)]);var inst_14907 = (state_15019[(2)]);var inst_14908 = cljs.core.get.call(null,inst_14907,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_14909 = cljs.core.get.call(null,inst_14907,new cljs.core.Keyword(null,"z","z",-789527183));var inst_14910 = cljs.core.get.call(null,inst_14907,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_14911 = cljs.core.repeat.call(null,(5),(0));var inst_14912 = (function (){var ctx = inst_14894;var vec__14882 = inst_14887;var vec__14883 = inst_14898;var canvas4 = inst_14890;var w = inst_14899;var cs = inst_14908;var err = inst_14888;var infos = inst_14889;var canvas = inst_14893;var canvas3 = inst_14891;var map__14884 = inst_14907;var z = inst_14909;var v_z = inst_14910;var h = inst_14900;var canvas2 = inst_14892;return ((function (ctx,vec__14882,vec__14883,canvas4,w,cs,err,infos,canvas,canvas3,map__14884,z,v_z,h,canvas2,inst_14898,inst_14899,inst_14891,inst_14900,inst_14892,inst_14887,inst_14889,inst_14893,inst_14890,inst_14888,inst_14894,inst_14907,inst_14908,inst_14909,inst_14910,inst_14911,state_val_15020,c__6202__auto__){
return (function (p1__14729_SHARP_){return Math.abs(p1__14729_SHARP_);
});
;})(ctx,vec__14882,vec__14883,canvas4,w,cs,err,infos,canvas,canvas3,map__14884,z,v_z,h,canvas2,inst_14898,inst_14899,inst_14891,inst_14900,inst_14892,inst_14887,inst_14889,inst_14893,inst_14890,inst_14888,inst_14894,inst_14907,inst_14908,inst_14909,inst_14910,inst_14911,state_val_15020,c__6202__auto__))
})();var inst_14913 = cljs.core.map.call(null,cljs.core._PLUS_,inst_14909,inst_14910);var inst_14914 = cljs.core.map.call(null,inst_14912,inst_14913);var inst_14915 = cljs.core.reverse.call(null,inst_14914);var inst_14916 = cljs.core.into.call(null,inst_14911,inst_14915);var inst_14917 = stock.formula.clock_direction.call(null,inst_14910,inst_14909);var inst_14918 = stock.formula.BBI.call(null,(6),inst_14889);var inst_14919 = cljs.core.reverse.call(null,inst_14889);var inst_14920 = stock.formula.sar_seq.call(null,inst_14919);var inst_14921 = cljs.core.reverse.call(null,inst_14920);var inst_14922 = cljs.core.reverse.call(null,inst_14889);var inst_14923 = stock.formula.Chaikin.call(null,(3),(9),inst_14922);var inst_14924 = cljs.core.reverse.call(null,inst_14923);var inst_14925 = cljs.core.reverse.call(null,inst_14889);var inst_14926 = stock.formula.EOM.call(null,(14),inst_14925);var inst_14927 = cljs.core.reverse.call(null,inst_14926);var inst_14928 = stock.formula.yu_gv.call(null,(20),inst_14889);var inst_14929 = stock.formula.yu_clock.call(null,(20),inst_14889);var inst_14930 = stock.formula.macd_dif.call(null,(5),(10),inst_14889);var inst_14931 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14932 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14933 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14930,"blue"];var inst_14934 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14932,inst_14933);var inst_14935 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14936 = stock.formula.sma_seq.call(null,(9),inst_14930);var inst_14937 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14936,"yellow"];var inst_14938 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14935,inst_14937);var inst_14939 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14940 = cljs.core.count.call(null,inst_14930);var inst_14941 = cljs.core.repeat.call(null,inst_14940,(0));var inst_14942 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14941];var inst_14943 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14939,inst_14942);var inst_14944 = [inst_14934,inst_14938,inst_14943];var inst_14945 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14944,null));var inst_14946 = [inst_14945];var inst_14947 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14931,inst_14946);var inst_14948 = inst_14890.width;var inst_14949 = inst_14890.height;var inst_14950 = inst_14890.getContext("2d");var inst_14951 = stock.drawer.draw.call(null,inst_14947,inst_14948,inst_14949,inst_14950);var inst_14952 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14953 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14954 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14929,"blue"];var inst_14955 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14953,inst_14954);var inst_14956 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14957 = stock.formula.sma_seq.call(null,(10),inst_14929);var inst_14958 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14957,"yellow"];var inst_14959 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14956,inst_14958);var inst_14960 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14961 = cljs.core.count.call(null,inst_14929);var inst_14962 = cljs.core.repeat.call(null,inst_14961,(0));var inst_14963 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14962];var inst_14964 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14960,inst_14963);var inst_14965 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14966 = cljs.core.count.call(null,inst_14929);var inst_14967 = cljs.core.repeat.call(null,inst_14966,0.5);var inst_14968 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14967];var inst_14969 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14965,inst_14968);var inst_14970 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14971 = cljs.core.count.call(null,inst_14929);var inst_14972 = cljs.core.repeat.call(null,inst_14971,-0.5);var inst_14973 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14972];var inst_14974 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14970,inst_14973);var inst_14975 = [inst_14955,inst_14959,inst_14964,inst_14969,inst_14974];var inst_14976 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14975,null));var inst_14977 = [inst_14976];var inst_14978 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14952,inst_14977);var inst_14979 = inst_14891.width;var inst_14980 = inst_14891.height;var inst_14981 = inst_14891.getContext("2d");var inst_14982 = stock.drawer.draw.call(null,inst_14978,inst_14979,inst_14980,inst_14981);var inst_14983 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14984 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14985 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_14909,inst_14910,"blue"];var inst_14986 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14984,inst_14985);var inst_14987 = [inst_14986];var inst_14988 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14987,null));var inst_14989 = [inst_14988];var inst_14990 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14983,inst_14989);var inst_14991 = inst_14892.width;var inst_14992 = inst_14892.height;var inst_14993 = inst_14892.getContext("2d");var inst_14994 = stock.drawer.draw.call(null,inst_14990,inst_14991,inst_14992,inst_14993);var inst_14995 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14996 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_14997 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_14889];var inst_14998 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14996,inst_14997);var inst_14999 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_15000 = stock.tool.close.call(null,inst_14889);var inst_15001 = cljs.core.reverse.call(null,inst_15000);var inst_15002 = stock.formula.ema_seq.call(null,(5),inst_15001);var inst_15003 = cljs.core.reverse.call(null,inst_15002);var inst_15004 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15003,"blue"];var inst_15005 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14999,inst_15004);var inst_15006 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_15007 = stock.tool.close.call(null,inst_14889);var inst_15008 = cljs.core.reverse.call(null,inst_15007);var inst_15009 = stock.formula.ema_seq.call(null,(10),inst_15008);var inst_15010 = cljs.core.reverse.call(null,inst_15009);var inst_15011 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15010,"yellow"];var inst_15012 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15006,inst_15011);var inst_15013 = [inst_14998,inst_15005,inst_15012];var inst_15014 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15013,null));var inst_15015 = [inst_15014];var inst_15016 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14995,inst_15015);var inst_15017 = stock.drawer.draw.call(null,inst_15016,inst_14899,inst_14900,inst_14894);var state_15019__$1 = (function (){var statearr_15021 = state_15019;(statearr_15021[(18)] = inst_14917);
(statearr_15021[(19)] = inst_14982);
(statearr_15021[(20)] = inst_14951);
(statearr_15021[(21)] = inst_14994);
(statearr_15021[(22)] = inst_14918);
(statearr_15021[(23)] = inst_14928);
(statearr_15021[(24)] = inst_14924);
(statearr_15021[(25)] = inst_14921);
(statearr_15021[(26)] = inst_14916);
(statearr_15021[(27)] = inst_14927);
return statearr_15021;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15019__$1,inst_15017);
} else
{if((state_val_15020 === (4)))
{var inst_14901 = (state_15019[(28)]);var state_15019__$1 = state_15019;var statearr_15022_15034 = state_15019__$1;(statearr_15022_15034[(2)] = inst_14901);
(statearr_15022_15034[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15020 === (3)))
{var inst_14901 = (state_15019[(28)]);var inst_14904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14901);var state_15019__$1 = state_15019;var statearr_15023_15035 = state_15019__$1;(statearr_15023_15035[(2)] = inst_14904);
(statearr_15023_15035[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15020 === (2)))
{var inst_14898 = (state_15019[(7)]);var inst_14901 = (state_15019[(28)]);var inst_14887 = (state_15019[(12)]);var inst_14889 = (state_15019[(13)]);var inst_14893 = (state_15019[(14)]);var inst_14887__$1 = (state_15019[(2)]);var inst_14888 = cljs.core.nth.call(null,inst_14887__$1,(0),null);var inst_14889__$1 = cljs.core.nth.call(null,inst_14887__$1,(1),null);var inst_14890 = document.getElementById("index2");var inst_14891 = document.getElementById("index");var inst_14892 = document.getElementById("clock");var inst_14893__$1 = document.getElementById("kline");var inst_14894 = inst_14893__$1.getContext("2d");var inst_14895 = inst_14893__$1.width;var inst_14896 = inst_14893__$1.height;var inst_14897 = [inst_14895,inst_14896];var inst_14898__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14897,null));var inst_14899 = cljs.core.nth.call(null,inst_14898__$1,(0),null);var inst_14900 = cljs.core.nth.call(null,inst_14898__$1,(1),null);var inst_14901__$1 = stock.formula.clock.call(null,(20),inst_14889__$1);var inst_14902 = cljs.core.seq_QMARK_.call(null,inst_14901__$1);var state_15019__$1 = (function (){var statearr_15024 = state_15019;(statearr_15024[(7)] = inst_14898__$1);
(statearr_15024[(8)] = inst_14899);
(statearr_15024[(9)] = inst_14891);
(statearr_15024[(10)] = inst_14900);
(statearr_15024[(11)] = inst_14892);
(statearr_15024[(28)] = inst_14901__$1);
(statearr_15024[(12)] = inst_14887__$1);
(statearr_15024[(13)] = inst_14889__$1);
(statearr_15024[(14)] = inst_14893__$1);
(statearr_15024[(15)] = inst_14890);
(statearr_15024[(16)] = inst_14888);
(statearr_15024[(17)] = inst_14894);
return statearr_15024;
})();if(inst_14902)
{var statearr_15025_15036 = state_15019__$1;(statearr_15025_15036[(1)] = (3));
} else
{var statearr_15026_15037 = state_15019__$1;(statearr_15026_15037[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15020 === (1)))
{var inst_14885 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_15019__$1 = state_15019;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15019__$1,(2),inst_14885);
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
var state_machine__6188__auto____0 = (function (){var statearr_15030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15030[(0)] = state_machine__6188__auto__);
(statearr_15030[(1)] = (1));
return statearr_15030;
});
var state_machine__6188__auto____1 = (function (state_15019){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15019);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15031){if((e15031 instanceof Object))
{var ex__6191__auto__ = e15031;var statearr_15032_15038 = state_15019;(statearr_15032_15038[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15019);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15039 = state_15019;
state_15019 = G__15039;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15019){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_15033 = f__6203__auto__.call(null);(statearr_15033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
