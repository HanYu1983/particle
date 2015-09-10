// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.main.main = (function main(){var onView_20607 = cljs.core.async.chan.call(null);var onModel_20608 = cljs.core.async.chan.call(null);var onSys_20609 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_20607,onModel_20608,onSys_20609){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_20607,onModel_20608,onSys_20609){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_20607,onModel_20608,onSys_20609){
return (function (state_20520){var state_val_20521 = (state_20520[(1)]);if((state_val_20521 === (2)))
{var inst_20518 = (state_20520[(2)]);var state_20520__$1 = state_20520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20520__$1,inst_20518);
} else
{if((state_val_20521 === (1)))
{var state_20520__$1 = state_20520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20520__$1,(2),onView_20607,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_20607,onModel_20608,onSys_20609))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_20607,onModel_20608,onSys_20609){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20525 = [null,null,null,null,null,null,null];(statearr_20525[(0)] = state_machine__6188__auto__);
(statearr_20525[(1)] = (1));
return statearr_20525;
});
var state_machine__6188__auto____1 = (function (state_20520){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20526){if((e20526 instanceof Object))
{var ex__6191__auto__ = e20526;var statearr_20527_20610 = state_20520;(statearr_20527_20610[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20611 = state_20520;
state_20520 = G__20611;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20520){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_20607,onModel_20608,onSys_20609))
})();var state__6204__auto__ = (function (){var statearr_20528 = f__6203__auto__.call(null);(statearr_20528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_20607,onModel_20608,onSys_20609))
);
return c__6202__auto__;
});})(onView_20607,onModel_20608,onSys_20609))
);
var c__6202__auto___20612 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20612,onView_20607,onModel_20608,onSys_20609){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20612,onView_20607,onModel_20608,onSys_20609){
return (function (state_20537){var state_val_20538 = (state_20537[(1)]);if((state_val_20538 === (4)))
{var inst_20531 = (state_20537[(2)]);var inst_20532 = common.onModel.onNext(inst_20531);var state_20537__$1 = (function (){var statearr_20539 = state_20537;(statearr_20539[(7)] = inst_20532);
return statearr_20539;
})();var statearr_20540_20613 = state_20537__$1;(statearr_20540_20613[(2)] = null);
(statearr_20540_20613[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20538 === (3)))
{var inst_20535 = (state_20537[(2)]);var state_20537__$1 = state_20537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20537__$1,inst_20535);
} else
{if((state_val_20538 === (2)))
{var state_20537__$1 = state_20537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20537__$1,(4),onModel_20608);
} else
{if((state_val_20538 === (1)))
{var state_20537__$1 = state_20537;var statearr_20541_20614 = state_20537__$1;(statearr_20541_20614[(2)] = null);
(statearr_20541_20614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___20612,onView_20607,onModel_20608,onSys_20609))
;return ((function (switch__6187__auto__,c__6202__auto___20612,onView_20607,onModel_20608,onSys_20609){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20545 = [null,null,null,null,null,null,null,null];(statearr_20545[(0)] = state_machine__6188__auto__);
(statearr_20545[(1)] = (1));
return statearr_20545;
});
var state_machine__6188__auto____1 = (function (state_20537){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20537);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20546){if((e20546 instanceof Object))
{var ex__6191__auto__ = e20546;var statearr_20547_20615 = state_20537;(statearr_20547_20615[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20616 = state_20537;
state_20537 = G__20616;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20537){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20612,onView_20607,onModel_20608,onSys_20609))
})();var state__6204__auto__ = (function (){var statearr_20548 = f__6203__auto__.call(null);(statearr_20548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20612);
return statearr_20548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20612,onView_20607,onModel_20608,onSys_20609))
);
var c__6202__auto___20617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20617,onView_20607,onModel_20608,onSys_20609){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20617,onView_20607,onModel_20608,onSys_20609){
return (function (state_20585){var state_val_20586 = (state_20585[(1)]);if((state_val_20586 === (7)))
{var inst_20580 = (state_20585[(2)]);var inst_20552 = inst_20580;var state_20585__$1 = (function (){var statearr_20587 = state_20585;(statearr_20587[(7)] = inst_20552);
return statearr_20587;
})();var statearr_20588_20618 = state_20585__$1;(statearr_20588_20618[(2)] = null);
(statearr_20588_20618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (1)))
{var inst_20549 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_20550 = [onView_20607,onModel_20608,onSys_20609,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_20551 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20549,inst_20550);var inst_20552 = inst_20551;var state_20585__$1 = (function (){var statearr_20589 = state_20585;(statearr_20589[(7)] = inst_20552);
return statearr_20589;
})();var statearr_20590_20619 = state_20585__$1;(statearr_20590_20619[(2)] = null);
(statearr_20590_20619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (4)))
{var inst_20560 = (state_20585[(8)]);var inst_20558 = (state_20585[(2)]);var inst_20559 = cljs.core.nth.call(null,inst_20558,(0),null);var inst_20560__$1 = cljs.core.nth.call(null,inst_20558,(1),null);var inst_20564 = cljs.core._EQ_.call(null,onSys_20609,inst_20560__$1);var state_20585__$1 = (function (){var statearr_20591 = state_20585;(statearr_20591[(8)] = inst_20560__$1);
(statearr_20591[(9)] = inst_20559);
return statearr_20591;
})();if(inst_20564)
{var statearr_20592_20620 = state_20585__$1;(statearr_20592_20620[(1)] = (5));
} else
{var statearr_20593_20621 = state_20585__$1;(statearr_20593_20621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (6)))
{var inst_20560 = (state_20585[(8)]);var inst_20571 = cljs.core._EQ_.call(null,onView_20607,inst_20560);var state_20585__$1 = state_20585;if(inst_20571)
{var statearr_20594_20622 = state_20585__$1;(statearr_20594_20622[(1)] = (8));
} else
{var statearr_20595_20623 = state_20585__$1;(statearr_20595_20623[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (3)))
{var inst_20583 = (state_20585[(2)]);var state_20585__$1 = state_20585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20585__$1,inst_20583);
} else
{if((state_val_20586 === (2)))
{var inst_20555 = [onView_20607,onSys_20609];var inst_20556 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20555,null));var state_20585__$1 = state_20585;return cljs.core.async.ioc_alts_BANG_.call(null,state_20585__$1,(4),inst_20556);
} else
{if((state_val_20586 === (9)))
{var inst_20552 = (state_20585[(7)]);var state_20585__$1 = state_20585;var statearr_20596_20624 = state_20585__$1;(statearr_20596_20624[(2)] = inst_20552);
(statearr_20596_20624[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (5)))
{var inst_20552 = (state_20585[(7)]);var inst_20559 = (state_20585[(9)]);var inst_20567 = cljs.core.nth.call(null,inst_20559,(0),null);var inst_20568 = cljs.core.nth.call(null,inst_20559,(1),null);var inst_20569 = app.stock.abstract$.onSystem.call(null,inst_20567,inst_20568,inst_20552);var state_20585__$1 = state_20585;var statearr_20597_20625 = state_20585__$1;(statearr_20597_20625[(2)] = inst_20569);
(statearr_20597_20625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (10)))
{var inst_20578 = (state_20585[(2)]);var state_20585__$1 = state_20585;var statearr_20598_20626 = state_20585__$1;(statearr_20598_20626[(2)] = inst_20578);
(statearr_20598_20626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20586 === (8)))
{var inst_20552 = (state_20585[(7)]);var inst_20559 = (state_20585[(9)]);var inst_20573 = (inst_20559[(0)]);var inst_20574 = (inst_20559[(1)]);var inst_20575 = app.stock.abstract$.onViewCommand.call(null,inst_20573,inst_20574,inst_20552);var state_20585__$1 = state_20585;var statearr_20599_20627 = state_20585__$1;(statearr_20599_20627[(2)] = inst_20575);
(statearr_20599_20627[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__6202__auto___20617,onView_20607,onModel_20608,onSys_20609))
;return ((function (switch__6187__auto__,c__6202__auto___20617,onView_20607,onModel_20608,onSys_20609){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20603 = [null,null,null,null,null,null,null,null,null,null];(statearr_20603[(0)] = state_machine__6188__auto__);
(statearr_20603[(1)] = (1));
return statearr_20603;
});
var state_machine__6188__auto____1 = (function (state_20585){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20585);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20604){if((e20604 instanceof Object))
{var ex__6191__auto__ = e20604;var statearr_20605_20628 = state_20585;(statearr_20605_20628[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20629 = state_20585;
state_20585 = G__20629;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20585){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20617,onView_20607,onModel_20608,onSys_20609))
})();var state__6204__auto__ = (function (){var statearr_20606 = f__6203__auto__.call(null);(statearr_20606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20617);
return statearr_20606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20617,onView_20607,onModel_20608,onSys_20609))
);
return null;
});
app.stock.main.main.call(null);
