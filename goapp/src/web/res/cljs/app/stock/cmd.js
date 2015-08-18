// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function loadStock(ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_10480){var state_val_10481 = (state_10480[(1)]);if((state_val_10481 === (3)))
{var inst_10478 = (state_10480[(2)]);var state_10480__$1 = state_10480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10480__$1,inst_10478);
} else
{if((state_val_10481 === (2)))
{var inst_10470 = (state_10480[(2)]);var inst_10471 = cljs.core.nth.call(null,inst_10470,(0),null);var inst_10472 = cljs.core.nth.call(null,inst_10470,(1),null);var inst_10473 = [inst_10471,inst_10472,id,date,request];var inst_10474 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10473,null));var inst_10475 = ["loadStock",inst_10474];var inst_10476 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10475,null));var state_10480__$1 = state_10480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10480__$1,(3),ch,inst_10476);
} else
{if((state_val_10481 === (1)))
{var inst_10468 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_10480__$1 = state_10480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10480__$1,(2),inst_10468);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10485 = [null,null,null,null,null,null,null];(statearr_10485[(0)] = state_machine__6188__auto__);
(statearr_10485[(1)] = (1));
return statearr_10485;
});
var state_machine__6188__auto____1 = (function (state_10480){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10486){if((e10486 instanceof Object))
{var ex__6191__auto__ = e10486;var statearr_10487_10489 = state_10480;(statearr_10487_10489[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10490 = state_10480;
state_10480 = G__10490;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10480){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_10488 = f__6203__auto__.call(null);(statearr_10488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
