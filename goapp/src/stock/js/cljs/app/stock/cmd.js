// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.loadStock = (function loadStock(ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_21628){var state_val_21629 = (state_21628[(1)]);if((state_val_21629 === (3)))
{var inst_21626 = (state_21628[(2)]);var state_21628__$1 = state_21628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21628__$1,inst_21626);
} else
{if((state_val_21629 === (2)))
{var inst_21618 = (state_21628[(2)]);var inst_21619 = cljs.core.nth.call(null,inst_21618,(0),null);var inst_21620 = cljs.core.nth.call(null,inst_21618,(1),null);var inst_21621 = [inst_21619,inst_21620,id,date,request];var inst_21622 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21621,null));var inst_21623 = ["loadStock",inst_21622];var inst_21624 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21623,null));var state_21628__$1 = state_21628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21628__$1,(3),ch,inst_21624);
} else
{if((state_val_21629 === (1)))
{var inst_21616 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_21628__$1 = state_21628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21628__$1,(2),inst_21616);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21633 = [null,null,null,null,null,null,null];(statearr_21633[(0)] = state_machine__6188__auto__);
(statearr_21633[(1)] = (1));
return statearr_21633;
});
var state_machine__6188__auto____1 = (function (state_21628){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21628);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21634){if((e21634 instanceof Object))
{var ex__6191__auto__ = e21634;var statearr_21635_21637 = state_21628;(statearr_21635_21637[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21638 = state_21628;
state_21628 = G__21638;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21628){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_21636 = f__6203__auto__.call(null);(statearr_21636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
