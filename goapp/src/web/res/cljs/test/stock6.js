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
return (function (state_51953){var state_val_51954 = (state_51953[(1)]);if((state_val_51954 === (2)))
{var inst_51914 = (state_51953[(2)]);var inst_51915 = cljs.core.nth.call(null,inst_51914,(0),null);var inst_51916 = cljs.core.nth.call(null,inst_51914,(1),null);var inst_51917 = document.getElementById("canvas2");var inst_51918 = inst_51917.width;var inst_51919 = inst_51917.height;var inst_51920 = [inst_51918,inst_51919];var inst_51921 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51920,null));var inst_51922 = cljs.core.nth.call(null,inst_51921,(0),null);var inst_51923 = cljs.core.nth.call(null,inst_51921,(1),null);var inst_51924 = inst_51917.getContext("2d");var inst_51925 = stock.tool.close.call(null,inst_51916);var inst_51926 = stock.formula.avg_seq.call(null,(12),inst_51925);var inst_51927 = stock.formula.average.call(null,inst_51926);var inst_51928 = stock.formula.StandardDeviation.call(null,inst_51927,inst_51926);var inst_51929 = stock.formula.z_score.call(null,inst_51927,inst_51928,inst_51926);var inst_51930 = stock.tool.volume.call(null,inst_51916);var inst_51931 = stock.formula.avg_seq.call(null,(12),inst_51930);var inst_51932 = stock.formula.average.call(null,inst_51931);var inst_51933 = stock.formula.StandardDeviation.call(null,inst_51932,inst_51931);var inst_51934 = stock.formula.z_score.call(null,inst_51932,inst_51933,inst_51931);var inst_51935 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_51936 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_51937 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_51916];var inst_51938 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51936,inst_51937);var inst_51939 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_51940 = [new cljs.core.Keyword(null,"line","line",212345235),inst_51926,"blue"];var inst_51941 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51939,inst_51940);var inst_51942 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_51943 = stock.tool.close.call(null,inst_51916);var inst_51944 = stock.formula.avg_seq.call(null,(60),inst_51943);var inst_51945 = [new cljs.core.Keyword(null,"line","line",212345235),inst_51944,"yellow"];var inst_51946 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51942,inst_51945);var inst_51947 = [inst_51938,inst_51941,inst_51946];var inst_51948 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51947,null));var inst_51949 = [inst_51948];var inst_51950 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51935,inst_51949);var inst_51951 = stock.drawer.draw.call(null,inst_51950,inst_51922,inst_51923,inst_51924);var state_51953__$1 = (function (){var statearr_51955 = state_51953;(statearr_51955[(7)] = inst_51929);
(statearr_51955[(8)] = inst_51915);
(statearr_51955[(9)] = inst_51934);
return statearr_51955;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51953__$1,inst_51951);
} else
{if((state_val_51954 === (1)))
{var inst_51912 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_51953__$1 = state_51953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51953__$1,(2),inst_51912);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51959 = [null,null,null,null,null,null,null,null,null,null];(statearr_51959[(0)] = state_machine__6188__auto__);
(statearr_51959[(1)] = (1));
return statearr_51959;
});
var state_machine__6188__auto____1 = (function (state_51953){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51960){if((e51960 instanceof Object))
{var ex__6191__auto__ = e51960;var statearr_51961_51963 = state_51953;(statearr_51961_51963[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51964 = state_51953;
state_51953 = G__51964;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51953){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51962 = f__6203__auto__.call(null);(statearr_51962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
