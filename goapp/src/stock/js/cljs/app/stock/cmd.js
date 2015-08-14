// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.loadStock = (function loadStock(ch,id,date,cnt){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_19753){var state_val_19754 = (state_19753[(1)]);if((state_val_19754 === (3)))
{var inst_19751 = (state_19753[(2)]);var state_19753__$1 = state_19753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19753__$1,inst_19751);
} else
{if((state_val_19754 === (2)))
{var inst_19743 = (state_19753[(2)]);var inst_19744 = cljs.core.nth.call(null,inst_19743,(0),null);var inst_19745 = cljs.core.nth.call(null,inst_19743,(1),null);var inst_19746 = [inst_19744,inst_19745,id,date];var inst_19747 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19746,null));var inst_19748 = ["loadStock",inst_19747];var inst_19749 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19748,null));var state_19753__$1 = state_19753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19753__$1,(3),ch,inst_19749);
} else
{if((state_val_19754 === (1)))
{var inst_19739 = console.log("loadStock");var inst_19741 = stock.tool.stock_info.call(null,null,id,date,(0),cnt);var state_19753__$1 = (function (){var statearr_19755 = state_19753;(statearr_19755[(7)] = inst_19739);
return statearr_19755;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19753__$1,(2),inst_19741);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19759 = [null,null,null,null,null,null,null,null];(statearr_19759[(0)] = state_machine__6188__auto__);
(statearr_19759[(1)] = (1));
return statearr_19759;
});
var state_machine__6188__auto____1 = (function (state_19753){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19753);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19760){if((e19760 instanceof Object))
{var ex__6191__auto__ = e19760;var statearr_19761_19763 = state_19753;(statearr_19761_19763[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19760;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19764 = state_19753;
state_19753 = G__19764;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19753){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_19762 = f__6203__auto__.call(null);(statearr_19762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_19762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
