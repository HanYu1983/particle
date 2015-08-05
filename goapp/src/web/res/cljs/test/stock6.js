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
return (function (state_49142){var state_val_49143 = (state_49142[(1)]);if((state_val_49143 === (2)))
{var inst_49108 = (state_49142[(2)]);var inst_49109 = cljs.core.nth.call(null,inst_49108,(0),null);var inst_49110 = cljs.core.nth.call(null,inst_49108,(1),null);var inst_49111 = document.getElementById("canvas2");var inst_49112 = inst_49111.width;var inst_49113 = inst_49111.height;var inst_49114 = [inst_49112,inst_49113];var inst_49115 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49114,null));var inst_49116 = cljs.core.nth.call(null,inst_49115,(0),null);var inst_49117 = cljs.core.nth.call(null,inst_49115,(1),null);var inst_49118 = inst_49111.getContext("2d");var inst_49119 = stock.tool.close.call(null,inst_49110);var inst_49120 = stock.formula.avg_seq.call(null,(10),inst_49119);var inst_49121 = stock.formula.average.call(null,inst_49120);var inst_49122 = stock.formula.StandardDeviation.call(null,inst_49121,inst_49120);var inst_49123 = stock.formula.z_score.call(null,inst_49121,inst_49122,inst_49120);var inst_49124 = stock.tool.volume.call(null,inst_49110);var inst_49125 = stock.formula.avg_seq.call(null,(10),inst_49124);var inst_49126 = stock.formula.average.call(null,inst_49125);var inst_49127 = stock.formula.StandardDeviation.call(null,inst_49126,inst_49125);var inst_49128 = stock.formula.z_score.call(null,inst_49126,inst_49127,inst_49125);var inst_49129 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_49130 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_49131 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_49110];var inst_49132 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_49130,inst_49131);var inst_49133 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_49134 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_49123,inst_49128];var inst_49135 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_49133,inst_49134);var inst_49136 = [inst_49132,inst_49135];var inst_49137 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49136,null));var inst_49138 = [inst_49137];var inst_49139 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_49129,inst_49138);var inst_49140 = stock.drawer.draw.call(null,inst_49139,inst_49116,inst_49117,inst_49118);var state_49142__$1 = (function (){var statearr_49144 = state_49142;(statearr_49144[(7)] = inst_49109);
return statearr_49144;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49142__$1,inst_49140);
} else
{if((state_val_49143 === (1)))
{var inst_49106 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_49142__$1 = state_49142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(2),inst_49106);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49148 = [null,null,null,null,null,null,null,null];(statearr_49148[(0)] = state_machine__6188__auto__);
(statearr_49148[(1)] = (1));
return statearr_49148;
});
var state_machine__6188__auto____1 = (function (state_49142){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49149){if((e49149 instanceof Object))
{var ex__6191__auto__ = e49149;var statearr_49150_49152 = state_49142;(statearr_49150_49152[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49153 = state_49142;
state_49142 = G__49153;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49142){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49151 = f__6203__auto__.call(null);(statearr_49151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
