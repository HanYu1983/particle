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
return (function (state_17050){var state_val_17051 = (state_17050[(1)]);if((state_val_17051 === (2)))
{var inst_17015 = (state_17050[(2)]);var inst_17016 = cljs.core.nth.call(null,inst_17015,(0),null);var inst_17017 = cljs.core.nth.call(null,inst_17015,(1),null);var inst_17018 = document.getElementById("canvas2");var inst_17019 = inst_17018.width;var inst_17020 = inst_17018.height;var inst_17021 = [inst_17019,inst_17020];var inst_17022 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17021,null));var inst_17023 = cljs.core.nth.call(null,inst_17022,(0),null);var inst_17024 = cljs.core.nth.call(null,inst_17022,(1),null);var inst_17025 = inst_17018.getContext("2d");var inst_17026 = stock.tool.close.call(null,inst_17017);var inst_17027 = stock.formula.sma_seq.call(null,(12),inst_17026);var inst_17028 = stock.formula.average.call(null,inst_17027);var inst_17029 = stock.formula.StandardDeviation.call(null,inst_17028,inst_17027);var inst_17030 = stock.formula.z_score.call(null,inst_17028,inst_17029,inst_17027);var inst_17031 = stock.tool.volume.call(null,inst_17017);var inst_17032 = stock.formula.sma_seq.call(null,(12),inst_17031);var inst_17033 = stock.formula.average.call(null,inst_17032);var inst_17034 = stock.formula.StandardDeviation.call(null,inst_17033,inst_17032);var inst_17035 = stock.formula.z_score.call(null,inst_17033,inst_17034,inst_17032);var inst_17036 = stock.formula.BBI.call(null,(6),inst_17017);var inst_17037 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17038 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_17039 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_17017];var inst_17040 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17038,inst_17039);var inst_17041 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17042 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17036,"blue"];var inst_17043 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17041,inst_17042);var inst_17044 = [inst_17040,inst_17043];var inst_17045 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17044,null));var inst_17046 = [inst_17045];var inst_17047 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17037,inst_17046);var inst_17048 = stock.drawer.draw.call(null,inst_17047,inst_17023,inst_17024,inst_17025);var state_17050__$1 = (function (){var statearr_17052 = state_17050;(statearr_17052[(7)] = inst_17030);
(statearr_17052[(8)] = inst_17016);
(statearr_17052[(9)] = inst_17035);
return statearr_17052;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17050__$1,inst_17048);
} else
{if((state_val_17051 === (1)))
{var inst_17013 = stock.tool.stock_info.call(null,null,(2330),"2014/5/1",(0),(200));var state_17050__$1 = state_17050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17050__$1,(2),inst_17013);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17056 = [null,null,null,null,null,null,null,null,null,null];(statearr_17056[(0)] = state_machine__6188__auto__);
(statearr_17056[(1)] = (1));
return statearr_17056;
});
var state_machine__6188__auto____1 = (function (state_17050){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17050);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object))
{var ex__6191__auto__ = e17057;var statearr_17058_17060 = state_17050;(statearr_17058_17060[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17061 = state_17050;
state_17050 = G__17061;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17050){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_17059 = f__6203__auto__.call(null);(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
