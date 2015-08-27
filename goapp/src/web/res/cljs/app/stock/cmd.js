// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.dbfile');
goog.require('app.dbfile');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84445){var state_val_84446 = (state_84445[(1)]);if((state_val_84446 === (3)))
{var inst_84443 = (state_84445[(2)]);var state_84445__$1 = state_84445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84445__$1,inst_84443);
} else
{if((state_val_84446 === (2)))
{var inst_84432 = (state_84445[(2)]);var inst_84433 = cljs.core.nth.call(null,inst_84432,(0),null);var inst_84434 = cljs.core.nth.call(null,inst_84432,(1),null);var inst_84435 = stock.tool.parse_getprices.call(null,inst_84434);var inst_84436 = stock.tool.format_getprices.call(null,(86400),inst_84435);var inst_84437 = cljs.core.reverse.call(null,inst_84436);var inst_84438 = [inst_84433,inst_84437,id,date,request];var inst_84439 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84438,null));var inst_84440 = ["loadStock",inst_84439];var inst_84441 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84440,null));var state_84445__$1 = state_84445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84445__$1,(3),ch,inst_84441);
} else
{if((state_val_84446 === (1)))
{var inst_84429 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_84430 = stock.tool.content.call(null,inst_84429);var state_84445__$1 = state_84445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84445__$1,(2),inst_84430);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84450 = [null,null,null,null,null,null,null];(statearr_84450[(0)] = state_machine__6188__auto__);
(statearr_84450[(1)] = (1));
return statearr_84450;
});
var state_machine__6188__auto____1 = (function (state_84445){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84445);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84451){if((e84451 instanceof Object))
{var ex__6191__auto__ = e84451;var statearr_84452_84454 = state_84445;(statearr_84452_84454[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84455 = state_84445;
state_84445 = G__84455;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84445){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84453 = f__6203__auto__.call(null);(statearr_84453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84419){var state_val_84420 = (state_84419[(1)]);if((state_val_84420 === (2)))
{var inst_84417 = (state_84419[(2)]);var state_84419__$1 = state_84419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84419__$1,inst_84417);
} else
{if((state_val_84420 === (1)))
{var inst_84408 = cljs.core.first.call(null,result);var inst_84409 = cljs.core.second.call(null,result);var inst_84410 = cljs.core.nth.call(null,result,(2));var inst_84411 = cljs.core.nth.call(null,result,(3));var inst_84412 = [inst_84408,inst_84409,inst_84410,inst_84411,request];var inst_84413 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84412,null));var inst_84414 = ["loadStock",inst_84413];var inst_84415 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84414,null));var state_84419__$1 = state_84419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84419__$1,(2),ch,inst_84415);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84424 = [null,null,null,null,null,null,null];(statearr_84424[(0)] = state_machine__6188__auto__);
(statearr_84424[(1)] = (1));
return statearr_84424;
});
var state_machine__6188__auto____1 = (function (state_84419){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84419);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84425){if((e84425 instanceof Object))
{var ex__6191__auto__ = e84425;var statearr_84426_84456 = state_84419;(statearr_84426_84456[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84457 = state_84419;
state_84419 = G__84457;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84419){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84427 = f__6203__auto__.call(null);(statearr_84427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
loadStock = function(ch,id,date,request,result){
switch(arguments.length){
case 4:
return loadStock__4.call(this,ch,id,date,request);
case 5:
return loadStock__5.call(this,ch,id,date,request,result);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
loadStock.cljs$core$IFn$_invoke$arity$4 = loadStock__4;
loadStock.cljs$core$IFn$_invoke$arity$5 = loadStock__5;
return loadStock;
})()
;
app.stock.cmd.loadUser = (function loadUser(ch,fbid,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84493){var state_val_84494 = (state_84493[(1)]);if((state_val_84494 === (3)))
{var inst_84491 = (state_84493[(2)]);var state_84493__$1 = state_84493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84493__$1,inst_84491);
} else
{if((state_val_84494 === (2)))
{var inst_84483 = (state_84493[(2)]);var inst_84484 = cljs.core.nth.call(null,inst_84483,(0),null);var inst_84485 = cljs.core.nth.call(null,inst_84483,(1),null);var inst_84486 = [inst_84484,inst_84485,request];var inst_84487 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84486,null));var inst_84488 = ["view",inst_84487];var inst_84489 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84488,null));var state_84493__$1 = state_84493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84493__$1,(3),ch,inst_84489);
} else
{if((state_val_84494 === (1)))
{var inst_84481 = app.dbfile.load.call(null,"stock",fbid);var state_84493__$1 = state_84493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84493__$1,(2),inst_84481);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84498 = [null,null,null,null,null,null,null];(statearr_84498[(0)] = state_machine__6188__auto__);
(statearr_84498[(1)] = (1));
return statearr_84498;
});
var state_machine__6188__auto____1 = (function (state_84493){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84493);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84499){if((e84499 instanceof Object))
{var ex__6191__auto__ = e84499;var statearr_84500_84502 = state_84493;(statearr_84500_84502[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84503 = state_84493;
state_84493 = G__84503;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84493){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84501 = f__6203__auto__.call(null);(statearr_84501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84541){var state_val_84542 = (state_84541[(1)]);if((state_val_84542 === (3)))
{var inst_84539 = (state_84541[(2)]);var state_84541__$1 = state_84541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84541__$1,inst_84539);
} else
{if((state_val_84542 === (2)))
{var inst_84531 = (state_84541[(2)]);var inst_84532 = cljs.core.nth.call(null,inst_84531,(0),null);var inst_84533 = cljs.core.nth.call(null,inst_84531,(1),null);var inst_84534 = [inst_84532,inst_84533,request];var inst_84535 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84534,null));var inst_84536 = ["view",inst_84535];var inst_84537 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84536,null));var state_84541__$1 = state_84541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84541__$1,(3),ch,inst_84537);
} else
{if((state_val_84542 === (1)))
{var inst_84528 = JSON.stringify(data);var inst_84529 = app.dbfile.save.call(null,"stock",fbid,inst_84528);var state_84541__$1 = state_84541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84541__$1,(2),inst_84529);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84546 = [null,null,null,null,null,null,null];(statearr_84546[(0)] = state_machine__6188__auto__);
(statearr_84546[(1)] = (1));
return statearr_84546;
});
var state_machine__6188__auto____1 = (function (state_84541){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84547){if((e84547 instanceof Object))
{var ex__6191__auto__ = e84547;var statearr_84548_84550 = state_84541;(statearr_84548_84550[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84551 = state_84541;
state_84541 = G__84551;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84541){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84549 = f__6203__auto__.call(null);(statearr_84549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
