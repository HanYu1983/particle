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
app.stock.main.main = (function main(){var onView_12533 = cljs.core.async.chan.call(null);var onModel_12534 = cljs.core.async.chan.call(null);var onSys_12535 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_12533,onModel_12534,onSys_12535){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView_12533,onModel_12534,onSys_12535){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView_12533,onModel_12534,onSys_12535){
return (function (state_12446){var state_val_12447 = (state_12446[(1)]);if((state_val_12447 === (2)))
{var inst_12444 = (state_12446[(2)]);var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12446__$1,inst_12444);
} else
{if((state_val_12447 === (1)))
{var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12446__$1,(2),onView_12533,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView_12533,onModel_12534,onSys_12535))
;return ((function (switch__6188__auto__,c__6203__auto__,onView_12533,onModel_12534,onSys_12535){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12451 = [null,null,null,null,null,null,null];(statearr_12451[(0)] = state_machine__6189__auto__);
(statearr_12451[(1)] = (1));
return statearr_12451;
});
var state_machine__6189__auto____1 = (function (state_12446){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12446);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12452){if((e12452 instanceof Object))
{var ex__6192__auto__ = e12452;var statearr_12453_12536 = state_12446;(statearr_12453_12536[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12537 = state_12446;
state_12446 = G__12537;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12446){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView_12533,onModel_12534,onSys_12535))
})();var state__6205__auto__ = (function (){var statearr_12454 = f__6204__auto__.call(null);(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView_12533,onModel_12534,onSys_12535))
);
return c__6203__auto__;
});})(onView_12533,onModel_12534,onSys_12535))
);
var c__6203__auto___12538 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12538,onView_12533,onModel_12534,onSys_12535){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12538,onView_12533,onModel_12534,onSys_12535){
return (function (state_12463){var state_val_12464 = (state_12463[(1)]);if((state_val_12464 === (4)))
{var inst_12457 = (state_12463[(2)]);var inst_12458 = common.onModel.onNext(inst_12457);var state_12463__$1 = (function (){var statearr_12465 = state_12463;(statearr_12465[(7)] = inst_12458);
return statearr_12465;
})();var statearr_12466_12539 = state_12463__$1;(statearr_12466_12539[(2)] = null);
(statearr_12466_12539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12464 === (3)))
{var inst_12461 = (state_12463[(2)]);var state_12463__$1 = state_12463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12463__$1,inst_12461);
} else
{if((state_val_12464 === (2)))
{var state_12463__$1 = state_12463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12463__$1,(4),onModel_12534);
} else
{if((state_val_12464 === (1)))
{var state_12463__$1 = state_12463;var statearr_12467_12540 = state_12463__$1;(statearr_12467_12540[(2)] = null);
(statearr_12467_12540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___12538,onView_12533,onModel_12534,onSys_12535))
;return ((function (switch__6188__auto__,c__6203__auto___12538,onView_12533,onModel_12534,onSys_12535){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12471 = [null,null,null,null,null,null,null,null];(statearr_12471[(0)] = state_machine__6189__auto__);
(statearr_12471[(1)] = (1));
return statearr_12471;
});
var state_machine__6189__auto____1 = (function (state_12463){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12463);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12472){if((e12472 instanceof Object))
{var ex__6192__auto__ = e12472;var statearr_12473_12541 = state_12463;(statearr_12473_12541[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12542 = state_12463;
state_12463 = G__12542;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12463){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12538,onView_12533,onModel_12534,onSys_12535))
})();var state__6205__auto__ = (function (){var statearr_12474 = f__6204__auto__.call(null);(statearr_12474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12538);
return statearr_12474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12538,onView_12533,onModel_12534,onSys_12535))
);
var c__6203__auto___12543 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12543,onView_12533,onModel_12534,onSys_12535){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12543,onView_12533,onModel_12534,onSys_12535){
return (function (state_12511){var state_val_12512 = (state_12511[(1)]);if((state_val_12512 === (7)))
{var inst_12506 = (state_12511[(2)]);var inst_12478 = inst_12506;var state_12511__$1 = (function (){var statearr_12513 = state_12511;(statearr_12513[(7)] = inst_12478);
return statearr_12513;
})();var statearr_12514_12544 = state_12511__$1;(statearr_12514_12544[(2)] = null);
(statearr_12514_12544[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (1)))
{var inst_12475 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_12476 = [onView_12533,onModel_12534,onSys_12535,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_12477 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12475,inst_12476);var inst_12478 = inst_12477;var state_12511__$1 = (function (){var statearr_12515 = state_12511;(statearr_12515[(7)] = inst_12478);
return statearr_12515;
})();var statearr_12516_12545 = state_12511__$1;(statearr_12516_12545[(2)] = null);
(statearr_12516_12545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (4)))
{var inst_12486 = (state_12511[(8)]);var inst_12484 = (state_12511[(2)]);var inst_12485 = cljs.core.nth.call(null,inst_12484,(0),null);var inst_12486__$1 = cljs.core.nth.call(null,inst_12484,(1),null);var inst_12490 = cljs.core._EQ_.call(null,onSys_12535,inst_12486__$1);var state_12511__$1 = (function (){var statearr_12517 = state_12511;(statearr_12517[(9)] = inst_12485);
(statearr_12517[(8)] = inst_12486__$1);
return statearr_12517;
})();if(inst_12490)
{var statearr_12518_12546 = state_12511__$1;(statearr_12518_12546[(1)] = (5));
} else
{var statearr_12519_12547 = state_12511__$1;(statearr_12519_12547[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (6)))
{var inst_12486 = (state_12511[(8)]);var inst_12497 = cljs.core._EQ_.call(null,onView_12533,inst_12486);var state_12511__$1 = state_12511;if(inst_12497)
{var statearr_12520_12548 = state_12511__$1;(statearr_12520_12548[(1)] = (8));
} else
{var statearr_12521_12549 = state_12511__$1;(statearr_12521_12549[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (3)))
{var inst_12509 = (state_12511[(2)]);var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12511__$1,inst_12509);
} else
{if((state_val_12512 === (2)))
{var inst_12481 = [onView_12533,onSys_12535];var inst_12482 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12481,null));var state_12511__$1 = state_12511;return cljs.core.async.ioc_alts_BANG_.call(null,state_12511__$1,(4),inst_12482);
} else
{if((state_val_12512 === (9)))
{var inst_12478 = (state_12511[(7)]);var state_12511__$1 = state_12511;var statearr_12522_12550 = state_12511__$1;(statearr_12522_12550[(2)] = inst_12478);
(statearr_12522_12550[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (5)))
{var inst_12485 = (state_12511[(9)]);var inst_12478 = (state_12511[(7)]);var inst_12493 = cljs.core.nth.call(null,inst_12485,(0),null);var inst_12494 = cljs.core.nth.call(null,inst_12485,(1),null);var inst_12495 = app.stock.abstract$.onSystem.call(null,inst_12493,inst_12494,inst_12478);var state_12511__$1 = state_12511;var statearr_12523_12551 = state_12511__$1;(statearr_12523_12551[(2)] = inst_12495);
(statearr_12523_12551[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (10)))
{var inst_12504 = (state_12511[(2)]);var state_12511__$1 = state_12511;var statearr_12524_12552 = state_12511__$1;(statearr_12524_12552[(2)] = inst_12504);
(statearr_12524_12552[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (8)))
{var inst_12485 = (state_12511[(9)]);var inst_12478 = (state_12511[(7)]);var inst_12499 = (inst_12485[(0)]);var inst_12500 = (inst_12485[(1)]);var inst_12501 = app.stock.abstract$.onViewCommand.call(null,inst_12499,inst_12500,inst_12478);var state_12511__$1 = state_12511;var statearr_12525_12553 = state_12511__$1;(statearr_12525_12553[(2)] = inst_12501);
(statearr_12525_12553[(1)] = (10));
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
});})(c__6203__auto___12543,onView_12533,onModel_12534,onSys_12535))
;return ((function (switch__6188__auto__,c__6203__auto___12543,onView_12533,onModel_12534,onSys_12535){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12529 = [null,null,null,null,null,null,null,null,null,null];(statearr_12529[(0)] = state_machine__6189__auto__);
(statearr_12529[(1)] = (1));
return statearr_12529;
});
var state_machine__6189__auto____1 = (function (state_12511){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12530){if((e12530 instanceof Object))
{var ex__6192__auto__ = e12530;var statearr_12531_12554 = state_12511;(statearr_12531_12554[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12555 = state_12511;
state_12511 = G__12555;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12511){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12543,onView_12533,onModel_12534,onSys_12535))
})();var state__6205__auto__ = (function (){var statearr_12532 = f__6204__auto__.call(null);(statearr_12532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12543);
return statearr_12532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12543,onView_12533,onModel_12534,onSys_12535))
);
return null;
});
app.stock.main.main.call(null);
