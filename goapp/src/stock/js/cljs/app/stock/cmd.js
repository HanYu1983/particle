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
return (function (state_22017){var state_val_22018 = (state_22017[(1)]);if((state_val_22018 === (3)))
{var inst_22015 = (state_22017[(2)]);var state_22017__$1 = state_22017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22017__$1,inst_22015);
} else
{if((state_val_22018 === (2)))
{var inst_22007 = (state_22017[(2)]);var inst_22008 = cljs.core.nth.call(null,inst_22007,(0),null);var inst_22009 = cljs.core.nth.call(null,inst_22007,(1),null);var inst_22010 = [inst_22008,inst_22009,id,date,request];var inst_22011 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22010,null));var inst_22012 = ["loadStock",inst_22011];var inst_22013 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22012,null));var state_22017__$1 = state_22017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22017__$1,(3),ch,inst_22013);
} else
{if((state_val_22018 === (1)))
{var inst_22005 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_22017__$1 = state_22017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22017__$1,(2),inst_22005);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22022 = [null,null,null,null,null,null,null];(statearr_22022[(0)] = state_machine__6188__auto__);
(statearr_22022[(1)] = (1));
return statearr_22022;
});
var state_machine__6188__auto____1 = (function (state_22017){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22017);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22023){if((e22023 instanceof Object))
{var ex__6191__auto__ = e22023;var statearr_22024_22026 = state_22017;(statearr_22024_22026[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22027 = state_22017;
state_22017 = G__22027;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22017){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22025 = f__6203__auto__.call(null);(statearr_22025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
