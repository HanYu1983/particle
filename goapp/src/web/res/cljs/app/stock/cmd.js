// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.save_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49413){var state_val_49414 = (state_49413[(1)]);if((state_val_49414 === (3)))
{var inst_49411 = (state_49413[(2)]);var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49413__$1,inst_49411);
} else
{if((state_val_49414 === (2)))
{var inst_49400 = (state_49413[(2)]);var inst_49401 = cljs.core.nth.call(null,inst_49400,(0),null);var inst_49402 = cljs.core.nth.call(null,inst_49400,(1),null);var inst_49403 = stock.tool.parse_getprices.call(null,inst_49402);var inst_49404 = stock.tool.format_getprices.call(null,(86400),inst_49403);var inst_49405 = cljs.core.reverse.call(null,inst_49404);var inst_49406 = [inst_49401,inst_49405,id,date,request];var inst_49407 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49406,null));var inst_49408 = ["loadStock",inst_49407];var inst_49409 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49408,null));var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49413__$1,(3),ch,inst_49409);
} else
{if((state_val_49414 === (1)))
{var inst_49397 = stock.tool.goog_finance_getprices_url.call(null,id,"1Y");var inst_49398 = stock.tool.content.call(null,inst_49397);var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49413__$1,(2),inst_49398);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49418 = [null,null,null,null,null,null,null];(statearr_49418[(0)] = state_machine__6188__auto__);
(statearr_49418[(1)] = (1));
return statearr_49418;
});
var state_machine__6188__auto____1 = (function (state_49413){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49419){if((e49419 instanceof Object))
{var ex__6191__auto__ = e49419;var statearr_49420_49422 = state_49413;(statearr_49420_49422[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49423 = state_49413;
state_49413 = G__49423;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49413){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49421 = f__6203__auto__.call(null);(statearr_49421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49387){var state_val_49388 = (state_49387[(1)]);if((state_val_49388 === (2)))
{var inst_49385 = (state_49387[(2)]);var state_49387__$1 = state_49387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49387__$1,inst_49385);
} else
{if((state_val_49388 === (1)))
{var inst_49376 = cljs.core.first.call(null,result);var inst_49377 = cljs.core.second.call(null,result);var inst_49378 = cljs.core.nth.call(null,result,(2));var inst_49379 = cljs.core.nth.call(null,result,(3));var inst_49380 = [inst_49376,inst_49377,inst_49378,inst_49379,request];var inst_49381 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49380,null));var inst_49382 = ["loadStock",inst_49381];var inst_49383 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49382,null));var state_49387__$1 = state_49387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49387__$1,(2),ch,inst_49383);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49392 = [null,null,null,null,null,null,null];(statearr_49392[(0)] = state_machine__6188__auto__);
(statearr_49392[(1)] = (1));
return statearr_49392;
});
var state_machine__6188__auto____1 = (function (state_49387){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49393){if((e49393 instanceof Object))
{var ex__6191__auto__ = e49393;var statearr_49394_49424 = state_49387;(statearr_49394_49424[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49425 = state_49387;
state_49387 = G__49425;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49387){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49395 = f__6203__auto__.call(null);(statearr_49395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49395;
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
return (function (state_49455){var state_val_49456 = (state_49455[(1)]);if((state_val_49456 === (2)))
{var inst_49453 = (state_49455[(2)]);var state_49455__$1 = state_49455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49455__$1,inst_49453);
} else
{if((state_val_49456 === (1)))
{var inst_49445 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_49446 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_49447 = cljs.core.get.call(null,inst_49445,inst_49446);var inst_49448 = [null,inst_49447,request];var inst_49449 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49448,null));var inst_49450 = ["view",inst_49449];var inst_49451 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49450,null));var state_49455__$1 = state_49455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49455__$1,(2),ch,inst_49451);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49460 = [null,null,null,null,null,null,null];(statearr_49460[(0)] = state_machine__6188__auto__);
(statearr_49460[(1)] = (1));
return statearr_49460;
});
var state_machine__6188__auto____1 = (function (state_49455){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49455);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49461){if((e49461 instanceof Object))
{var ex__6191__auto__ = e49461;var statearr_49462_49464 = state_49455;(statearr_49462_49464[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49455);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49465 = state_49455;
state_49455 = G__49465;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49455){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49463 = f__6203__auto__.call(null);(statearr_49463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49489){var state_val_49490 = (state_49489[(1)]);if((state_val_49490 === (2)))
{var inst_49487 = (state_49489[(2)]);var state_49489__$1 = state_49489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49489__$1,inst_49487);
} else
{if((state_val_49490 === (1)))
{var inst_49482 = [null,null,request];var inst_49483 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49482,null));var inst_49484 = ["view",inst_49483];var inst_49485 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49484,null));var state_49489__$1 = state_49489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49489__$1,(2),ch,inst_49485);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49494 = [null,null,null,null,null,null,null];(statearr_49494[(0)] = state_machine__6188__auto__);
(statearr_49494[(1)] = (1));
return statearr_49494;
});
var state_machine__6188__auto____1 = (function (state_49489){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49495){if((e49495 instanceof Object))
{var ex__6191__auto__ = e49495;var statearr_49496_49498 = state_49489;(statearr_49496_49498[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49499 = state_49489;
state_49489 = G__49499;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49489){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49497 = f__6203__auto__.call(null);(statearr_49497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
