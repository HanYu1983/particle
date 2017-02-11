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
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.main.main = (function main(){var onView_48571 = cljs.core.async.chan.call(null);var onModel_48572 = cljs.core.async.chan.call(null);var onSys_48573 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_48571,onModel_48572,onSys_48573){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_48571,onModel_48572,onSys_48573){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_48571,onModel_48572,onSys_48573){
return (function (state_48484){var state_val_48485 = (state_48484[(1)]);if((state_val_48485 === (2)))
{var inst_48482 = (state_48484[(2)]);var state_48484__$1 = state_48484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48484__$1,inst_48482);
} else
{if((state_val_48485 === (1)))
{var state_48484__$1 = state_48484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48484__$1,(2),onView_48571,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_48571,onModel_48572,onSys_48573))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_48571,onModel_48572,onSys_48573){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48489 = [null,null,null,null,null,null,null];(statearr_48489[(0)] = state_machine__6188__auto__);
(statearr_48489[(1)] = (1));
return statearr_48489;
});
var state_machine__6188__auto____1 = (function (state_48484){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48484);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48490){if((e48490 instanceof Object))
{var ex__6191__auto__ = e48490;var statearr_48491_48574 = state_48484;(statearr_48491_48574[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48575 = state_48484;
state_48484 = G__48575;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48484){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_48571,onModel_48572,onSys_48573))
})();var state__6204__auto__ = (function (){var statearr_48492 = f__6203__auto__.call(null);(statearr_48492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_48571,onModel_48572,onSys_48573))
);
return c__6202__auto__;
});})(onView_48571,onModel_48572,onSys_48573))
);
var c__6202__auto___48576 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48576,onView_48571,onModel_48572,onSys_48573){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48576,onView_48571,onModel_48572,onSys_48573){
return (function (state_48501){var state_val_48502 = (state_48501[(1)]);if((state_val_48502 === (4)))
{var inst_48495 = (state_48501[(2)]);var inst_48496 = common.onModel.onNext(inst_48495);var state_48501__$1 = (function (){var statearr_48503 = state_48501;(statearr_48503[(7)] = inst_48496);
return statearr_48503;
})();var statearr_48504_48577 = state_48501__$1;(statearr_48504_48577[(2)] = null);
(statearr_48504_48577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48502 === (3)))
{var inst_48499 = (state_48501[(2)]);var state_48501__$1 = state_48501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48501__$1,inst_48499);
} else
{if((state_val_48502 === (2)))
{var state_48501__$1 = state_48501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48501__$1,(4),onModel_48572);
} else
{if((state_val_48502 === (1)))
{var state_48501__$1 = state_48501;var statearr_48505_48578 = state_48501__$1;(statearr_48505_48578[(2)] = null);
(statearr_48505_48578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___48576,onView_48571,onModel_48572,onSys_48573))
;return ((function (switch__6187__auto__,c__6202__auto___48576,onView_48571,onModel_48572,onSys_48573){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48509 = [null,null,null,null,null,null,null,null];(statearr_48509[(0)] = state_machine__6188__auto__);
(statearr_48509[(1)] = (1));
return statearr_48509;
});
var state_machine__6188__auto____1 = (function (state_48501){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48510){if((e48510 instanceof Object))
{var ex__6191__auto__ = e48510;var statearr_48511_48579 = state_48501;(statearr_48511_48579[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48501);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48580 = state_48501;
state_48501 = G__48580;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48501){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48576,onView_48571,onModel_48572,onSys_48573))
})();var state__6204__auto__ = (function (){var statearr_48512 = f__6203__auto__.call(null);(statearr_48512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48576);
return statearr_48512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48576,onView_48571,onModel_48572,onSys_48573))
);
var c__6202__auto___48581 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48581,onView_48571,onModel_48572,onSys_48573){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48581,onView_48571,onModel_48572,onSys_48573){
return (function (state_48549){var state_val_48550 = (state_48549[(1)]);if((state_val_48550 === (7)))
{var inst_48544 = (state_48549[(2)]);var inst_48516 = inst_48544;var state_48549__$1 = (function (){var statearr_48551 = state_48549;(statearr_48551[(7)] = inst_48516);
return statearr_48551;
})();var statearr_48552_48582 = state_48549__$1;(statearr_48552_48582[(2)] = null);
(statearr_48552_48582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (1)))
{var inst_48513 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_48514 = [onView_48571,onModel_48572,onSys_48573,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_48515 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_48513,inst_48514);var inst_48516 = inst_48515;var state_48549__$1 = (function (){var statearr_48553 = state_48549;(statearr_48553[(7)] = inst_48516);
return statearr_48553;
})();var statearr_48554_48583 = state_48549__$1;(statearr_48554_48583[(2)] = null);
(statearr_48554_48583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (4)))
{var inst_48524 = (state_48549[(8)]);var inst_48522 = (state_48549[(2)]);var inst_48523 = cljs.core.nth.call(null,inst_48522,(0),null);var inst_48524__$1 = cljs.core.nth.call(null,inst_48522,(1),null);var inst_48528 = cljs.core._EQ_.call(null,onSys_48573,inst_48524__$1);var state_48549__$1 = (function (){var statearr_48555 = state_48549;(statearr_48555[(9)] = inst_48523);
(statearr_48555[(8)] = inst_48524__$1);
return statearr_48555;
})();if(inst_48528)
{var statearr_48556_48584 = state_48549__$1;(statearr_48556_48584[(1)] = (5));
} else
{var statearr_48557_48585 = state_48549__$1;(statearr_48557_48585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (6)))
{var inst_48524 = (state_48549[(8)]);var inst_48535 = cljs.core._EQ_.call(null,onView_48571,inst_48524);var state_48549__$1 = state_48549;if(inst_48535)
{var statearr_48558_48586 = state_48549__$1;(statearr_48558_48586[(1)] = (8));
} else
{var statearr_48559_48587 = state_48549__$1;(statearr_48559_48587[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (3)))
{var inst_48547 = (state_48549[(2)]);var state_48549__$1 = state_48549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48549__$1,inst_48547);
} else
{if((state_val_48550 === (2)))
{var inst_48519 = [onView_48571,onSys_48573];var inst_48520 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48519,null));var state_48549__$1 = state_48549;return cljs.core.async.ioc_alts_BANG_.call(null,state_48549__$1,(4),inst_48520);
} else
{if((state_val_48550 === (9)))
{var inst_48516 = (state_48549[(7)]);var state_48549__$1 = state_48549;var statearr_48560_48588 = state_48549__$1;(statearr_48560_48588[(2)] = inst_48516);
(statearr_48560_48588[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (5)))
{var inst_48523 = (state_48549[(9)]);var inst_48516 = (state_48549[(7)]);var inst_48531 = cljs.core.nth.call(null,inst_48523,(0),null);var inst_48532 = cljs.core.nth.call(null,inst_48523,(1),null);var inst_48533 = app.stock.abstract$.onSystem.call(null,inst_48531,inst_48532,inst_48516);var state_48549__$1 = state_48549;var statearr_48561_48589 = state_48549__$1;(statearr_48561_48589[(2)] = inst_48533);
(statearr_48561_48589[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (10)))
{var inst_48542 = (state_48549[(2)]);var state_48549__$1 = state_48549;var statearr_48562_48590 = state_48549__$1;(statearr_48562_48590[(2)] = inst_48542);
(statearr_48562_48590[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48550 === (8)))
{var inst_48523 = (state_48549[(9)]);var inst_48516 = (state_48549[(7)]);var inst_48537 = (inst_48523[(0)]);var inst_48538 = (inst_48523[(1)]);var inst_48539 = app.stock.abstract$.onViewCommand.call(null,inst_48537,inst_48538,inst_48516);var state_48549__$1 = state_48549;var statearr_48563_48591 = state_48549__$1;(statearr_48563_48591[(2)] = inst_48539);
(statearr_48563_48591[(1)] = (10));
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
});})(c__6202__auto___48581,onView_48571,onModel_48572,onSys_48573))
;return ((function (switch__6187__auto__,c__6202__auto___48581,onView_48571,onModel_48572,onSys_48573){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48567 = [null,null,null,null,null,null,null,null,null,null];(statearr_48567[(0)] = state_machine__6188__auto__);
(statearr_48567[(1)] = (1));
return statearr_48567;
});
var state_machine__6188__auto____1 = (function (state_48549){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48568){if((e48568 instanceof Object))
{var ex__6191__auto__ = e48568;var statearr_48569_48592 = state_48549;(statearr_48569_48592[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48593 = state_48549;
state_48549 = G__48593;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48549){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48581,onView_48571,onModel_48572,onSys_48573))
})();var state__6204__auto__ = (function (){var statearr_48570 = f__6203__auto__.call(null);(statearr_48570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48581);
return statearr_48570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48581,onView_48571,onModel_48572,onSys_48573))
);
return null;
});
app.stock.main.main.call(null);
