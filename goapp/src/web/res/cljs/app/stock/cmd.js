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
return (function (state_82413){var state_val_82414 = (state_82413[(1)]);if((state_val_82414 === (3)))
{var inst_82411 = (state_82413[(2)]);var state_82413__$1 = state_82413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82413__$1,inst_82411);
} else
{if((state_val_82414 === (2)))
{var inst_82400 = (state_82413[(2)]);var inst_82401 = cljs.core.nth.call(null,inst_82400,(0),null);var inst_82402 = cljs.core.nth.call(null,inst_82400,(1),null);var inst_82403 = stock.tool.parse_getprices.call(null,inst_82402);var inst_82404 = stock.tool.format_getprices.call(null,(86400),inst_82403);var inst_82405 = cljs.core.reverse.call(null,inst_82404);var inst_82406 = [inst_82401,inst_82405,id,date,request];var inst_82407 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82406,null));var inst_82408 = ["loadStock",inst_82407];var inst_82409 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82408,null));var state_82413__$1 = state_82413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82413__$1,(3),ch,inst_82409);
} else
{if((state_val_82414 === (1)))
{var inst_82397 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_82398 = stock.tool.content.call(null,inst_82397);var state_82413__$1 = state_82413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82413__$1,(2),inst_82398);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_82418 = [null,null,null,null,null,null,null];(statearr_82418[(0)] = state_machine__6188__auto__);
(statearr_82418[(1)] = (1));
return statearr_82418;
});
var state_machine__6188__auto____1 = (function (state_82413){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82419){if((e82419 instanceof Object))
{var ex__6191__auto__ = e82419;var statearr_82420_82422 = state_82413;(statearr_82420_82422[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82423 = state_82413;
state_82413 = G__82423;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82413){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82421 = f__6203__auto__.call(null);(statearr_82421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_82387){var state_val_82388 = (state_82387[(1)]);if((state_val_82388 === (2)))
{var inst_82385 = (state_82387[(2)]);var state_82387__$1 = state_82387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82387__$1,inst_82385);
} else
{if((state_val_82388 === (1)))
{var inst_82376 = cljs.core.first.call(null,result);var inst_82377 = cljs.core.second.call(null,result);var inst_82378 = cljs.core.nth.call(null,result,(2));var inst_82379 = cljs.core.nth.call(null,result,(3));var inst_82380 = [inst_82376,inst_82377,inst_82378,inst_82379,request];var inst_82381 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82380,null));var inst_82382 = ["loadStock",inst_82381];var inst_82383 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82382,null));var state_82387__$1 = state_82387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82387__$1,(2),ch,inst_82383);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_82392 = [null,null,null,null,null,null,null];(statearr_82392[(0)] = state_machine__6188__auto__);
(statearr_82392[(1)] = (1));
return statearr_82392;
});
var state_machine__6188__auto____1 = (function (state_82387){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82393){if((e82393 instanceof Object))
{var ex__6191__auto__ = e82393;var statearr_82394_82424 = state_82387;(statearr_82394_82424[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82425 = state_82387;
state_82387 = G__82425;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82387){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82395 = f__6203__auto__.call(null);(statearr_82395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82395;
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
return (function (state_82513){var state_val_82514 = (state_82513[(1)]);if((state_val_82514 === (7)))
{var inst_82511 = (state_82513[(2)]);var state_82513__$1 = state_82513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82513__$1,inst_82511);
} else
{if((state_val_82514 === (6)))
{var inst_82503 = (state_82513[(2)]);var inst_82504 = cljs.core.nth.call(null,inst_82503,(0),null);var inst_82505 = cljs.core.nth.call(null,inst_82503,(1),null);var inst_82506 = [inst_82504,inst_82505,request];var inst_82507 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82506,null));var inst_82508 = ["view",inst_82507];var inst_82509 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82508,null));var state_82513__$1 = state_82513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82513__$1,(7),ch,inst_82509);
} else
{if((state_val_82514 === (5)))
{var inst_82498 = (state_82513[(2)]);var inst_82499 = cljs.core.nth.call(null,inst_82498,(0),null);var inst_82500 = cljs.core.nth.call(null,inst_82498,(1),null);var inst_82501 = app.dbfile.file.call(null,inst_82500,"json");var state_82513__$1 = (function (){var statearr_82515 = state_82513;(statearr_82515[(7)] = inst_82499);
return statearr_82515;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82513__$1,(6),inst_82501);
} else
{if((state_val_82514 === (4)))
{var inst_82493 = (state_82513[(2)]);var inst_82494 = cljs.core.nth.call(null,inst_82493,(0),null);var inst_82495 = cljs.core.nth.call(null,inst_82493,(1),null);var inst_82496 = app.dbfile.name__GT_id.call(null,inst_82495,"userinfo.json");var state_82513__$1 = (function (){var statearr_82516 = state_82513;(statearr_82516[(8)] = inst_82494);
return statearr_82516;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82513__$1,(5),inst_82496);
} else
{if((state_val_82514 === (3)))
{var inst_82488 = (state_82513[(2)]);var inst_82489 = cljs.core.nth.call(null,inst_82488,(0),null);var inst_82490 = cljs.core.nth.call(null,inst_82488,(1),null);var inst_82491 = app.dbfile.name__GT_id.call(null,inst_82490,fbid);var state_82513__$1 = (function (){var statearr_82517 = state_82513;(statearr_82517[(9)] = inst_82489);
return statearr_82517;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82513__$1,(4),inst_82491);
} else
{if((state_val_82514 === (2)))
{var inst_82483 = (state_82513[(2)]);var inst_82484 = cljs.core.nth.call(null,inst_82483,(0),null);var inst_82485 = cljs.core.nth.call(null,inst_82483,(1),null);var inst_82486 = app.dbfile.name__GT_id.call(null,inst_82485,"stock");var state_82513__$1 = (function (){var statearr_82518 = state_82513;(statearr_82518[(10)] = inst_82484);
return statearr_82518;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82513__$1,(3),inst_82486);
} else
{if((state_val_82514 === (1)))
{var inst_82481 = app.dbfile.name__GT_id.call(null,(0),"root");var state_82513__$1 = state_82513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82513__$1,(2),inst_82481);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_82522 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_82522[(0)] = state_machine__6188__auto__);
(statearr_82522[(1)] = (1));
return statearr_82522;
});
var state_machine__6188__auto____1 = (function (state_82513){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82523){if((e82523 instanceof Object))
{var ex__6191__auto__ = e82523;var statearr_82524_82526 = state_82513;(statearr_82524_82526[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82527 = state_82513;
state_82513 = G__82527;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82513){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82525 = f__6203__auto__.call(null);(statearr_82525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_82624){var state_val_82625 = (state_82624[(1)]);if((state_val_82625 === (8)))
{var inst_82622 = (state_82624[(2)]);var state_82624__$1 = state_82624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82624__$1,inst_82622);
} else
{if((state_val_82625 === (7)))
{var inst_82614 = (state_82624[(2)]);var inst_82615 = cljs.core.nth.call(null,inst_82614,(0),null);var inst_82616 = cljs.core.nth.call(null,inst_82614,(1),null);var inst_82617 = [inst_82615,inst_82616,request];var inst_82618 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82617,null));var inst_82619 = ["view",inst_82618];var inst_82620 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82619,null));var state_82624__$1 = state_82624;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82624__$1,(8),ch,inst_82620);
} else
{if((state_val_82625 === (6)))
{var inst_82608 = (state_82624[(2)]);var inst_82609 = cljs.core.nth.call(null,inst_82608,(0),null);var inst_82610 = cljs.core.nth.call(null,inst_82608,(1),null);var inst_82611 = JSON.stringify(data);var inst_82612 = app.dbfile.makeFile.call(null,inst_82610,"userinfo.json",inst_82611,true);var state_82624__$1 = (function (){var statearr_82626 = state_82624;(statearr_82626[(7)] = inst_82609);
return statearr_82626;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82624__$1,(7),inst_82612);
} else
{if((state_val_82625 === (5)))
{var inst_82597 = (state_82624[(8)]);var inst_82605 = (state_82624[(2)]);var inst_82606 = app.dbfile.name__GT_id.call(null,inst_82597,fbid);var state_82624__$1 = (function (){var statearr_82627 = state_82624;(statearr_82627[(9)] = inst_82605);
return statearr_82627;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82624__$1,(6),inst_82606);
} else
{if((state_val_82625 === (4)))
{var inst_82600 = (state_82624[(2)]);var inst_82601 = cljs.core.nth.call(null,inst_82600,(0),null);var inst_82602 = cljs.core.nth.call(null,inst_82600,(1),null);var inst_82603 = cljs.core.async.timeout.call(null,(1000));var state_82624__$1 = (function (){var statearr_82628 = state_82624;(statearr_82628[(10)] = inst_82601);
(statearr_82628[(11)] = inst_82602);
return statearr_82628;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82624__$1,(5),inst_82603);
} else
{if((state_val_82625 === (3)))
{var inst_82597 = (state_82624[(8)]);var inst_82595 = (state_82624[(2)]);var inst_82596 = cljs.core.nth.call(null,inst_82595,(0),null);var inst_82597__$1 = cljs.core.nth.call(null,inst_82595,(1),null);var inst_82598 = app.dbfile.makeDir.call(null,inst_82597__$1,fbid);var state_82624__$1 = (function (){var statearr_82629 = state_82624;(statearr_82629[(12)] = inst_82596);
(statearr_82629[(8)] = inst_82597__$1);
return statearr_82629;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82624__$1,(4),inst_82598);
} else
{if((state_val_82625 === (2)))
{var inst_82590 = (state_82624[(2)]);var inst_82591 = cljs.core.nth.call(null,inst_82590,(0),null);var inst_82592 = cljs.core.nth.call(null,inst_82590,(1),null);var inst_82593 = app.dbfile.name__GT_id.call(null,inst_82592,"stock");var state_82624__$1 = (function (){var statearr_82630 = state_82624;(statearr_82630[(13)] = inst_82591);
return statearr_82630;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82624__$1,(3),inst_82593);
} else
{if((state_val_82625 === (1)))
{var inst_82588 = app.dbfile.name__GT_id.call(null,(0),"root");var state_82624__$1 = state_82624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82624__$1,(2),inst_82588);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_82634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_82634[(0)] = state_machine__6188__auto__);
(statearr_82634[(1)] = (1));
return statearr_82634;
});
var state_machine__6188__auto____1 = (function (state_82624){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82624);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82635){if((e82635 instanceof Object))
{var ex__6191__auto__ = e82635;var statearr_82636_82638 = state_82624;(statearr_82636_82638[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82639 = state_82624;
state_82624 = G__82639;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82624){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82637 = f__6203__auto__.call(null);(statearr_82637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
