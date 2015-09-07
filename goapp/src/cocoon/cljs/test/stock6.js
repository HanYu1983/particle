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
test.stock6.main = (function main(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17092){var state_val_17093 = (state_17092[(1)]);if((state_val_17093 === (5)))
{var inst_16973 = (state_17092[(7)]);var inst_16969 = (state_17092[(8)]);var inst_16978 = (state_17092[(9)]);var inst_16967 = (state_17092[(10)]);var inst_16970 = (state_17092[(11)]);var inst_16971 = (state_17092[(12)]);var inst_16980 = (state_17092[(13)]);var inst_16974 = (state_17092[(14)]);var inst_16972 = (state_17092[(15)]);var inst_16979 = (state_17092[(16)]);var inst_16968 = (state_17092[(17)]);var inst_16987 = (state_17092[(2)]);var inst_16988 = cljs.core.get.call(null,inst_16987,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_16989 = cljs.core.get.call(null,inst_16987,new cljs.core.Keyword(null,"z","z",-789527183));var inst_16990 = cljs.core.get.call(null,inst_16987,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_16991 = cljs.core.repeat.call(null,(5),(0));var inst_16992 = (function (){var ctx = inst_16974;var vec__16962 = inst_16967;var canvas4 = inst_16970;var w = inst_16979;var cs = inst_16988;var err = inst_16968;var infos = inst_16969;var canvas = inst_16973;var canvas3 = inst_16971;var z = inst_16989;var v_z = inst_16990;var vec__16963 = inst_16978;var h = inst_16980;var canvas2 = inst_16972;var map__16964 = inst_16987;return ((function (ctx,vec__16962,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,vec__16963,h,canvas2,map__16964,inst_16973,inst_16969,inst_16978,inst_16967,inst_16970,inst_16971,inst_16980,inst_16974,inst_16972,inst_16979,inst_16968,inst_16987,inst_16988,inst_16989,inst_16990,inst_16991,state_val_17093,c__6203__auto__){
return (function (p1__16816_SHARP_){return Math.abs(p1__16816_SHARP_);
});
;})(ctx,vec__16962,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,vec__16963,h,canvas2,map__16964,inst_16973,inst_16969,inst_16978,inst_16967,inst_16970,inst_16971,inst_16980,inst_16974,inst_16972,inst_16979,inst_16968,inst_16987,inst_16988,inst_16989,inst_16990,inst_16991,state_val_17093,c__6203__auto__))
})();var inst_16993 = cljs.core.map.call(null,cljs.core._PLUS_,inst_16989,inst_16990);var inst_16994 = cljs.core.map.call(null,inst_16992,inst_16993);var inst_16995 = cljs.core.reverse.call(null,inst_16994);var inst_16996 = cljs.core.into.call(null,inst_16991,inst_16995);var inst_16997 = stock.formula.clock_direction.call(null,inst_16990,inst_16989);var inst_16998 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_16969);var inst_16999 = cljs.core.reverse.call(null,inst_16969);var inst_17000 = stock.formula.sar_seq.call(null,(3),inst_16999);var inst_17001 = cljs.core.reverse.call(null,inst_17000);var inst_17002 = cljs.core.reverse.call(null,inst_16969);var inst_17003 = stock.formula.Chaikin.call(null,(3),(9),inst_17002);var inst_17004 = cljs.core.reverse.call(null,inst_17003);var inst_17005 = cljs.core.reverse.call(null,inst_16969);var inst_17006 = stock.formula.EOM.call(null,(14),inst_17005);var inst_17007 = cljs.core.reverse.call(null,inst_17006);var inst_17008 = stock.formula.yu_gv.call(null,(20),inst_16969);var inst_17009 = stock.formula.yu_clock.call(null,(20),inst_16969);var inst_17010 = stock.formula.macd_dif.call(null,(20),(100),inst_16969);var inst_17011 = stock.tool.close.call(null,inst_16969);var inst_17012 = cljs.core.reverse.call(null,inst_17011);var inst_17013 = stock.formula.ema_seq.call(null,(5),inst_17012);var inst_17014 = cljs.core.reverse.call(null,inst_17013);var inst_17015 = cljs.core.map.call(null,cljs.core._,inst_17014,inst_16998);var inst_17016 = stock.formula.rsv_seq.call(null,(100),inst_16969);var inst_17017 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17018 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17019 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17015,"black"];var inst_17020 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17018,inst_17019);var inst_17021 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17022 = stock.formula.sma_seq.call(null,(9),inst_17015);var inst_17023 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17022,"yellow"];var inst_17024 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17021,inst_17023);var inst_17025 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_17026 = cljs.core.count.call(null,inst_16969);var inst_17027 = cljs.core.repeat.call(null,inst_17026,(0));var inst_17028 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17027];var inst_17029 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17025,inst_17028);var inst_17030 = [inst_17020,inst_17024,inst_17029];var inst_17031 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17030,null));var inst_17032 = [inst_17031];var inst_17033 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17017,inst_17032);var inst_17034 = inst_16970.width;var inst_17035 = inst_16970.height;var inst_17036 = inst_16970.getContext("2d");var inst_17037 = stock.drawer.draw.call(null,inst_17033,inst_17034,inst_17035,inst_17036);var inst_17038 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17039 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17040 = stock.formula.sma_seq.call(null,(3),inst_17016);var inst_17041 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17040,"black"];var inst_17042 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17039,inst_17041);var inst_17043 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17044 = stock.formula.sma_seq.call(null,(9),inst_17016);var inst_17045 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17044,"yellow"];var inst_17046 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17043,inst_17045);var inst_17047 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_17048 = cljs.core.count.call(null,inst_16969);var inst_17049 = cljs.core.repeat.call(null,inst_17048,(50));var inst_17050 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17049];var inst_17051 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17047,inst_17050);var inst_17052 = [inst_17042,inst_17046,inst_17051];var inst_17053 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17052,null));var inst_17054 = [inst_17053];var inst_17055 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17038,inst_17054);var inst_17056 = inst_16971.width;var inst_17057 = inst_16971.height;var inst_17058 = inst_16971.getContext("2d");var inst_17059 = stock.drawer.draw.call(null,inst_17055,inst_17056,inst_17057,inst_17058);var inst_17060 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17061 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17062 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_16989,inst_16990,"blue"];var inst_17063 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17061,inst_17062);var inst_17064 = [inst_17063];var inst_17065 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17064,null));var inst_17066 = [inst_17065];var inst_17067 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17060,inst_17066);var inst_17068 = inst_16972.width;var inst_17069 = inst_16972.height;var inst_17070 = inst_16972.getContext("2d");var inst_17071 = stock.drawer.draw.call(null,inst_17067,inst_17068,inst_17069,inst_17070);var inst_17072 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17073 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_17074 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_16969];var inst_17075 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17073,inst_17074);var inst_17076 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17077 = stock.tool.close.call(null,inst_16969);var inst_17078 = cljs.core.reverse.call(null,inst_17077);var inst_17079 = stock.formula.ema_seq.call(null,(5),inst_17078);var inst_17080 = cljs.core.reverse.call(null,inst_17079);var inst_17081 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17080,"blue"];var inst_17082 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17076,inst_17081);var inst_17083 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17084 = [new cljs.core.Keyword(null,"line","line",212345235),inst_16998,"yellow"];var inst_17085 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17083,inst_17084);var inst_17086 = [inst_17075,inst_17082,inst_17085];var inst_17087 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17086,null));var inst_17088 = [inst_17087];var inst_17089 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17072,inst_17088);var inst_17090 = stock.drawer.draw.call(null,inst_17089,inst_16979,inst_16980,inst_16974);var state_17092__$1 = (function (){var statearr_17094 = state_17092;(statearr_17094[(18)] = inst_17007);
(statearr_17094[(19)] = inst_17001);
(statearr_17094[(20)] = inst_16996);
(statearr_17094[(21)] = inst_16997);
(statearr_17094[(22)] = inst_17004);
(statearr_17094[(23)] = inst_17009);
(statearr_17094[(24)] = inst_17071);
(statearr_17094[(25)] = inst_17008);
(statearr_17094[(26)] = inst_17010);
(statearr_17094[(27)] = inst_17037);
(statearr_17094[(28)] = inst_17059);
return statearr_17094;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17092__$1,inst_17090);
} else
{if((state_val_17093 === (4)))
{var inst_16981 = (state_17092[(29)]);var state_17092__$1 = state_17092;var statearr_17095_17107 = state_17092__$1;(statearr_17095_17107[(2)] = inst_16981);
(statearr_17095_17107[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17093 === (3)))
{var inst_16981 = (state_17092[(29)]);var inst_16984 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16981);var state_17092__$1 = state_17092;var statearr_17096_17108 = state_17092__$1;(statearr_17096_17108[(2)] = inst_16984);
(statearr_17096_17108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17093 === (2)))
{var inst_16973 = (state_17092[(7)]);var inst_16969 = (state_17092[(8)]);var inst_16978 = (state_17092[(9)]);var inst_16967 = (state_17092[(10)]);var inst_16981 = (state_17092[(29)]);var inst_16967__$1 = (state_17092[(2)]);var inst_16968 = cljs.core.nth.call(null,inst_16967__$1,(0),null);var inst_16969__$1 = cljs.core.nth.call(null,inst_16967__$1,(1),null);var inst_16970 = document.getElementById("index2");var inst_16971 = document.getElementById("index");var inst_16972 = document.getElementById("clock");var inst_16973__$1 = document.getElementById("kline");var inst_16974 = inst_16973__$1.getContext("2d");var inst_16975 = inst_16973__$1.width;var inst_16976 = inst_16973__$1.height;var inst_16977 = [inst_16975,inst_16976];var inst_16978__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16977,null));var inst_16979 = cljs.core.nth.call(null,inst_16978__$1,(0),null);var inst_16980 = cljs.core.nth.call(null,inst_16978__$1,(1),null);var inst_16981__$1 = stock.formula.clock.call(null,(20),inst_16969__$1);var inst_16982 = cljs.core.seq_QMARK_.call(null,inst_16981__$1);var state_17092__$1 = (function (){var statearr_17097 = state_17092;(statearr_17097[(7)] = inst_16973__$1);
(statearr_17097[(8)] = inst_16969__$1);
(statearr_17097[(9)] = inst_16978__$1);
(statearr_17097[(10)] = inst_16967__$1);
(statearr_17097[(11)] = inst_16970);
(statearr_17097[(12)] = inst_16971);
(statearr_17097[(13)] = inst_16980);
(statearr_17097[(14)] = inst_16974);
(statearr_17097[(15)] = inst_16972);
(statearr_17097[(29)] = inst_16981__$1);
(statearr_17097[(16)] = inst_16979);
(statearr_17097[(17)] = inst_16968);
return statearr_17097;
})();if(inst_16982)
{var statearr_17098_17109 = state_17092__$1;(statearr_17098_17109[(1)] = (3));
} else
{var statearr_17099_17110 = state_17092__$1;(statearr_17099_17110[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17093 === (1)))
{var inst_16965 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_17092__$1 = state_17092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17092__$1,(2),inst_16965);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17103[(0)] = state_machine__6189__auto__);
(statearr_17103[(1)] = (1));
return statearr_17103;
});
var state_machine__6189__auto____1 = (function (state_17092){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17104){if((e17104 instanceof Object))
{var ex__6192__auto__ = e17104;var statearr_17105_17111 = state_17092;(statearr_17105_17111[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17112 = state_17092;
state_17092 = G__17112;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17092){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17106 = f__6204__auto__.call(null);(statearr_17106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock6.main.call(null);
