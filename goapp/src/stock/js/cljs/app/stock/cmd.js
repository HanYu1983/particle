// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.loadStock = (function loadStock(ch,id,date){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_20179){var state_val_20180 = (state_20179[(1)]);if((state_val_20180 === (3)))
{var inst_20177 = (state_20179[(2)]);var state_20179__$1 = state_20179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20179__$1,inst_20177);
} else
{if((state_val_20180 === (2)))
{var inst_20169 = (state_20179[(2)]);var inst_20170 = cljs.core.nth.call(null,inst_20169,(0),null);var inst_20171 = cljs.core.nth.call(null,inst_20169,(1),null);var inst_20172 = [inst_20170,inst_20171,id,date];var inst_20173 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20172,null));var inst_20174 = ["loadStock",inst_20173];var inst_20175 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20174,null));var state_20179__$1 = state_20179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20179__$1,(3),ch,inst_20175);
} else
{if((state_val_20180 === (1)))
{var inst_20167 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_20179__$1 = state_20179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20179__$1,(2),inst_20167);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20184 = [null,null,null,null,null,null,null];(statearr_20184[(0)] = state_machine__6188__auto__);
(statearr_20184[(1)] = (1));
return statearr_20184;
});
var state_machine__6188__auto____1 = (function (state_20179){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20185){if((e20185 instanceof Object))
{var ex__6191__auto__ = e20185;var statearr_20186_20188 = state_20179;(statearr_20186_20188[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20189 = state_20179;
state_20179 = G__20189;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20179){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20187 = f__6203__auto__.call(null);(statearr_20187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
