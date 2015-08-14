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
return (function (state_15110){var state_val_15111 = (state_15110[(1)]);if((state_val_15111 === (5)))
{var inst_15014 = (state_15110[(7)]);var inst_15004 = (state_15110[(8)]);var inst_15015 = (state_15110[(9)]);var inst_15009 = (state_15110[(10)]);var inst_15005 = (state_15110[(11)]);var inst_15007 = (state_15110[(12)]);var inst_15006 = (state_15110[(13)]);var inst_15023 = (state_15110[(2)]);var inst_15024 = cljs.core.get.call(null,inst_15023,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_15025 = cljs.core.get.call(null,inst_15023,new cljs.core.Keyword(null,"z","z",-789527183));var inst_15026 = cljs.core.get.call(null,inst_15023,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_15027 = stock.formula.clock_direction.call(null,inst_15026,inst_15025);var inst_15028 = stock.formula.BBI.call(null,(6),inst_15004);var inst_15029 = cljs.core.reverse.call(null,inst_15004);var inst_15030 = stock.formula.sar_seq.call(null,inst_15029);var inst_15031 = cljs.core.reverse.call(null,inst_15030);var inst_15032 = cljs.core.reverse.call(null,inst_15004);var inst_15033 = stock.formula.Chaikin.call(null,(3),(9),inst_15032);var inst_15034 = cljs.core.reverse.call(null,inst_15033);var inst_15035 = cljs.core.reverse.call(null,inst_15004);var inst_15036 = stock.formula.EOM.call(null,(14),inst_15035);var inst_15037 = cljs.core.reverse.call(null,inst_15036);var inst_15038 = stock.formula.yu_gv.call(null,(20),inst_15004);var inst_15039 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_15040 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_15041 = stock.tool.volume.call(null,inst_15004);var inst_15042 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15041,"blue"];var inst_15043 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15040,inst_15042);var inst_15044 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_15045 = stock.tool.volume.call(null,inst_15004);var inst_15046 = stock.formula.sma_seq.call(null,(6),inst_15045);var inst_15047 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15046,"yellow"];var inst_15048 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15044,inst_15047);var inst_15049 = [inst_15043,inst_15048];var inst_15050 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15049,null));var inst_15051 = [inst_15050];var inst_15052 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15039,inst_15051);var inst_15053 = inst_15005.width;var inst_15054 = inst_15005.height;var inst_15055 = inst_15005.getContext("2d");var inst_15056 = stock.drawer.draw.call(null,inst_15052,inst_15053,inst_15054,inst_15055);var inst_15057 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_15058 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_15059 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15034];var inst_15060 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15058,inst_15059);var inst_15061 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_15062 = cljs.core.count.call(null,inst_15034);var inst_15063 = cljs.core.repeat.call(null,inst_15062,(0));var inst_15064 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15063];var inst_15065 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15061,inst_15064);var inst_15066 = [inst_15060,inst_15065];var inst_15067 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15066,null));var inst_15068 = [inst_15067];var inst_15069 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15057,inst_15068);var inst_15070 = inst_15006.width;var inst_15071 = inst_15006.height;var inst_15072 = inst_15006.getContext("2d");var inst_15073 = stock.drawer.draw.call(null,inst_15069,inst_15070,inst_15071,inst_15072);var inst_15074 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_15075 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_15076 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_15025,inst_15026];var inst_15077 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15075,inst_15076);var inst_15078 = [inst_15077];var inst_15079 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15078,null));var inst_15080 = [inst_15079];var inst_15081 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15074,inst_15080);var inst_15082 = inst_15007.width;var inst_15083 = inst_15007.height;var inst_15084 = inst_15007.getContext("2d");var inst_15085 = stock.drawer.draw.call(null,inst_15081,inst_15082,inst_15083,inst_15084);var inst_15086 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_15087 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_15088 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_15004];var inst_15089 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15087,inst_15088);var inst_15090 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_15091 = stock.tool.close.call(null,inst_15004);var inst_15092 = cljs.core.reverse.call(null,inst_15091);var inst_15093 = stock.formula.ema_seq.call(null,(5),inst_15092);var inst_15094 = cljs.core.reverse.call(null,inst_15093);var inst_15095 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15094,"blue"];var inst_15096 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15090,inst_15095);var inst_15097 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_15098 = stock.tool.close.call(null,inst_15004);var inst_15099 = cljs.core.reverse.call(null,inst_15098);var inst_15100 = stock.formula.ema_seq.call(null,(10),inst_15099);var inst_15101 = cljs.core.reverse.call(null,inst_15100);var inst_15102 = [new cljs.core.Keyword(null,"line","line",212345235),inst_15101,"yellow"];var inst_15103 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15097,inst_15102);var inst_15104 = [inst_15089,inst_15096,inst_15103];var inst_15105 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15104,null));var inst_15106 = [inst_15105];var inst_15107 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15086,inst_15106);var inst_15108 = stock.drawer.draw.call(null,inst_15107,inst_15014,inst_15015,inst_15009);var state_15110__$1 = (function (){var statearr_15112 = state_15110;(statearr_15112[(14)] = inst_15024);
(statearr_15112[(15)] = inst_15028);
(statearr_15112[(16)] = inst_15027);
(statearr_15112[(17)] = inst_15073);
(statearr_15112[(18)] = inst_15037);
(statearr_15112[(19)] = inst_15038);
(statearr_15112[(20)] = inst_15056);
(statearr_15112[(21)] = inst_15031);
(statearr_15112[(22)] = inst_15085);
return statearr_15112;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15110__$1,inst_15108);
} else
{if((state_val_15111 === (4)))
{var inst_15017 = (state_15110[(23)]);var state_15110__$1 = state_15110;var statearr_15113_15125 = state_15110__$1;(statearr_15113_15125[(2)] = inst_15017);
(statearr_15113_15125[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (3)))
{var inst_15017 = (state_15110[(23)]);var inst_15020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15017);var state_15110__$1 = state_15110;var statearr_15114_15126 = state_15110__$1;(statearr_15114_15126[(2)] = inst_15020);
(statearr_15114_15126[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (2)))
{var inst_15004 = (state_15110[(8)]);var inst_15017 = (state_15110[(23)]);var inst_15002 = (state_15110[(2)]);var inst_15003 = cljs.core.nth.call(null,inst_15002,(0),null);var inst_15004__$1 = cljs.core.nth.call(null,inst_15002,(1),null);var inst_15005 = document.getElementById("index2");var inst_15006 = document.getElementById("index");var inst_15007 = document.getElementById("clock");var inst_15008 = document.getElementById("kline");var inst_15009 = inst_15008.getContext("2d");var inst_15010 = inst_15008.width;var inst_15011 = inst_15008.height;var inst_15012 = [inst_15010,inst_15011];var inst_15013 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15012,null));var inst_15014 = cljs.core.nth.call(null,inst_15013,(0),null);var inst_15015 = cljs.core.nth.call(null,inst_15013,(1),null);var inst_15016 = cljs.core.reverse.call(null,inst_15004__$1);var inst_15017__$1 = stock.formula.clock.call(null,(12),inst_15016);var inst_15018 = cljs.core.seq_QMARK_.call(null,inst_15017__$1);var state_15110__$1 = (function (){var statearr_15115 = state_15110;(statearr_15115[(7)] = inst_15014);
(statearr_15115[(8)] = inst_15004__$1);
(statearr_15115[(9)] = inst_15015);
(statearr_15115[(24)] = inst_15003);
(statearr_15115[(10)] = inst_15009);
(statearr_15115[(11)] = inst_15005);
(statearr_15115[(23)] = inst_15017__$1);
(statearr_15115[(12)] = inst_15007);
(statearr_15115[(13)] = inst_15006);
return statearr_15115;
})();if(inst_15018)
{var statearr_15116_15127 = state_15110__$1;(statearr_15116_15127[(1)] = (3));
} else
{var statearr_15117_15128 = state_15110__$1;(statearr_15117_15128[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (1)))
{var inst_15000 = stock.tool.stock_info.call(null,null,(5305),"2015/1/1",(0),(200));var state_15110__$1 = state_15110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15110__$1,(2),inst_15000);
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
var state_machine__6189__auto____0 = (function (){var statearr_15121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15121[(0)] = state_machine__6189__auto__);
(statearr_15121[(1)] = (1));
return statearr_15121;
});
var state_machine__6189__auto____1 = (function (state_15110){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15110);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15122){if((e15122 instanceof Object))
{var ex__6192__auto__ = e15122;var statearr_15123_15129 = state_15110;(statearr_15123_15129[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15110);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15130 = state_15110;
state_15110 = G__15130;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15110){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15124 = f__6204__auto__.call(null);(statearr_15124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock6.main.call(null);
