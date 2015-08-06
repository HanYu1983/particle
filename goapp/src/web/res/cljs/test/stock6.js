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
return (function (state_22977){var state_val_22978 = (state_22977[(1)]);if((state_val_22978 === (5)))
{var inst_22929 = (state_22977[(7)]);var inst_22934 = (state_22977[(8)]);var inst_22935 = (state_22977[(9)]);var inst_22926 = (state_22977[(10)]);var inst_22927 = (state_22977[(11)]);var inst_22943 = (state_22977[(2)]);var inst_22944 = cljs.core.get.call(null,inst_22943,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_22945 = cljs.core.get.call(null,inst_22943,new cljs.core.Keyword(null,"z","z",-789527183));var inst_22946 = cljs.core.get.call(null,inst_22943,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_22947 = stock.formula.clock_direction.call(null,inst_22946,inst_22945);var inst_22948 = stock.formula.BBI.call(null,(6),inst_22926);var inst_22949 = cljs.core.pr_str.call(null,inst_22947);var inst_22950 = console.log(inst_22949);var inst_22951 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_22952 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_22953 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_22945,inst_22946];var inst_22954 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22952,inst_22953);var inst_22955 = [inst_22954];var inst_22956 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22955,null));var inst_22957 = [inst_22956];var inst_22958 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22951,inst_22957);var inst_22959 = inst_22927.width;var inst_22960 = inst_22927.height;var inst_22961 = inst_22927.getContext("2d");var inst_22962 = stock.drawer.draw.call(null,inst_22958,inst_22959,inst_22960,inst_22961);var inst_22963 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_22964 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"info","info",-317069002)];var inst_22965 = cljs.core.reverse.call(null,inst_22947);var inst_22966 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_22926,inst_22965];var inst_22967 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22964,inst_22966);var inst_22968 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_22969 = [new cljs.core.Keyword(null,"line","line",212345235),inst_22944,"blue"];var inst_22970 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22968,inst_22969);var inst_22971 = [inst_22967,inst_22970];var inst_22972 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22971,null));var inst_22973 = [inst_22972];var inst_22974 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22963,inst_22973);var inst_22975 = stock.drawer.draw.call(null,inst_22974,inst_22934,inst_22935,inst_22929);var state_22977__$1 = (function (){var statearr_22979 = state_22977;(statearr_22979[(12)] = inst_22948);
(statearr_22979[(13)] = inst_22962);
(statearr_22979[(14)] = inst_22950);
return statearr_22979;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22977__$1,inst_22975);
} else
{if((state_val_22978 === (4)))
{var inst_22937 = (state_22977[(15)]);var state_22977__$1 = state_22977;var statearr_22980_22992 = state_22977__$1;(statearr_22980_22992[(2)] = inst_22937);
(statearr_22980_22992[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22978 === (3)))
{var inst_22937 = (state_22977[(15)]);var inst_22940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22937);var state_22977__$1 = state_22977;var statearr_22981_22993 = state_22977__$1;(statearr_22981_22993[(2)] = inst_22940);
(statearr_22981_22993[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22978 === (2)))
{var inst_22937 = (state_22977[(15)]);var inst_22926 = (state_22977[(10)]);var inst_22924 = (state_22977[(2)]);var inst_22925 = cljs.core.nth.call(null,inst_22924,(0),null);var inst_22926__$1 = cljs.core.nth.call(null,inst_22924,(1),null);var inst_22927 = document.getElementById("clock");var inst_22928 = document.getElementById("kline");var inst_22929 = inst_22928.getContext("2d");var inst_22930 = inst_22928.width;var inst_22931 = inst_22928.height;var inst_22932 = [inst_22930,inst_22931];var inst_22933 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22932,null));var inst_22934 = cljs.core.nth.call(null,inst_22933,(0),null);var inst_22935 = cljs.core.nth.call(null,inst_22933,(1),null);var inst_22936 = cljs.core.reverse.call(null,inst_22926__$1);var inst_22937__$1 = stock.formula.clock.call(null,(12),inst_22936);var inst_22938 = cljs.core.seq_QMARK_.call(null,inst_22937__$1);var state_22977__$1 = (function (){var statearr_22982 = state_22977;(statearr_22982[(7)] = inst_22929);
(statearr_22982[(8)] = inst_22934);
(statearr_22982[(16)] = inst_22925);
(statearr_22982[(15)] = inst_22937__$1);
(statearr_22982[(9)] = inst_22935);
(statearr_22982[(10)] = inst_22926__$1);
(statearr_22982[(11)] = inst_22927);
return statearr_22982;
})();if(inst_22938)
{var statearr_22983_22994 = state_22977__$1;(statearr_22983_22994[(1)] = (3));
} else
{var statearr_22984_22995 = state_22977__$1;(statearr_22984_22995[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22978 === (1)))
{var inst_22922 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_22977__$1 = state_22977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22977__$1,(2),inst_22922);
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
var state_machine__6188__auto____0 = (function (){var statearr_22988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22988[(0)] = state_machine__6188__auto__);
(statearr_22988[(1)] = (1));
return statearr_22988;
});
var state_machine__6188__auto____1 = (function (state_22977){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22989){if((e22989 instanceof Object))
{var ex__6191__auto__ = e22989;var statearr_22990_22996 = state_22977;(statearr_22990_22996[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22997 = state_22977;
state_22977 = G__22997;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22977){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22991 = f__6203__auto__.call(null);(statearr_22991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
