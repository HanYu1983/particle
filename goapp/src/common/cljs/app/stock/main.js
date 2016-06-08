// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('app.stock.dbfile');
goog.require('app.stock.dbfile');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.main.main = (function main(){var onView_21604 = cljs.core.async.chan.call(null);var onModel_21605 = cljs.core.async.chan.call(null);var onSys_21606 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_21604,onModel_21605,onSys_21606){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_21604,onModel_21605,onSys_21606){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_21604,onModel_21605,onSys_21606){
return (function (state_21517){var state_val_21518 = (state_21517[(1)]);if((state_val_21518 === (2)))
{var inst_21515 = (state_21517[(2)]);var state_21517__$1 = state_21517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21517__$1,inst_21515);
} else
{if((state_val_21518 === (1)))
{var state_21517__$1 = state_21517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21517__$1,(2),onView_21604,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_21604,onModel_21605,onSys_21606))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_21604,onModel_21605,onSys_21606){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21522 = [null,null,null,null,null,null,null];(statearr_21522[(0)] = state_machine__6188__auto__);
(statearr_21522[(1)] = (1));
return statearr_21522;
});
var state_machine__6188__auto____1 = (function (state_21517){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21523){if((e21523 instanceof Object))
{var ex__6191__auto__ = e21523;var statearr_21524_21607 = state_21517;(statearr_21524_21607[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21608 = state_21517;
state_21517 = G__21608;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21517){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_21604,onModel_21605,onSys_21606))
})();var state__6204__auto__ = (function (){var statearr_21525 = f__6203__auto__.call(null);(statearr_21525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_21604,onModel_21605,onSys_21606))
);
return c__6202__auto__;
});})(onView_21604,onModel_21605,onSys_21606))
);
var c__6202__auto___21609 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___21609,onView_21604,onModel_21605,onSys_21606){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___21609,onView_21604,onModel_21605,onSys_21606){
return (function (state_21534){var state_val_21535 = (state_21534[(1)]);if((state_val_21535 === (4)))
{var inst_21528 = (state_21534[(2)]);var inst_21529 = common.onModel.onNext(inst_21528);var state_21534__$1 = (function (){var statearr_21536 = state_21534;(statearr_21536[(7)] = inst_21529);
return statearr_21536;
})();var statearr_21537_21610 = state_21534__$1;(statearr_21537_21610[(2)] = null);
(statearr_21537_21610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21535 === (3)))
{var inst_21532 = (state_21534[(2)]);var state_21534__$1 = state_21534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21534__$1,inst_21532);
} else
{if((state_val_21535 === (2)))
{var state_21534__$1 = state_21534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21534__$1,(4),onModel_21605);
} else
{if((state_val_21535 === (1)))
{var state_21534__$1 = state_21534;var statearr_21538_21611 = state_21534__$1;(statearr_21538_21611[(2)] = null);
(statearr_21538_21611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___21609,onView_21604,onModel_21605,onSys_21606))
;return ((function (switch__6187__auto__,c__6202__auto___21609,onView_21604,onModel_21605,onSys_21606){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21542 = [null,null,null,null,null,null,null,null];(statearr_21542[(0)] = state_machine__6188__auto__);
(statearr_21542[(1)] = (1));
return statearr_21542;
});
var state_machine__6188__auto____1 = (function (state_21534){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21543){if((e21543 instanceof Object))
{var ex__6191__auto__ = e21543;var statearr_21544_21612 = state_21534;(statearr_21544_21612[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21613 = state_21534;
state_21534 = G__21613;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21534){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___21609,onView_21604,onModel_21605,onSys_21606))
})();var state__6204__auto__ = (function (){var statearr_21545 = f__6203__auto__.call(null);(statearr_21545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___21609);
return statearr_21545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___21609,onView_21604,onModel_21605,onSys_21606))
);
var c__6202__auto___21614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___21614,onView_21604,onModel_21605,onSys_21606){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___21614,onView_21604,onModel_21605,onSys_21606){
return (function (state_21582){var state_val_21583 = (state_21582[(1)]);if((state_val_21583 === (7)))
{var inst_21577 = (state_21582[(2)]);var inst_21549 = inst_21577;var state_21582__$1 = (function (){var statearr_21584 = state_21582;(statearr_21584[(7)] = inst_21549);
return statearr_21584;
})();var statearr_21585_21615 = state_21582__$1;(statearr_21585_21615[(2)] = null);
(statearr_21585_21615[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (1)))
{var inst_21546 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_21547 = [onView_21604,onModel_21605,onSys_21606,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_21548 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21546,inst_21547);var inst_21549 = inst_21548;var state_21582__$1 = (function (){var statearr_21586 = state_21582;(statearr_21586[(7)] = inst_21549);
return statearr_21586;
})();var statearr_21587_21616 = state_21582__$1;(statearr_21587_21616[(2)] = null);
(statearr_21587_21616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (4)))
{var inst_21557 = (state_21582[(8)]);var inst_21555 = (state_21582[(2)]);var inst_21556 = cljs.core.nth.call(null,inst_21555,(0),null);var inst_21557__$1 = cljs.core.nth.call(null,inst_21555,(1),null);var inst_21561 = cljs.core._EQ_.call(null,onSys_21606,inst_21557__$1);var state_21582__$1 = (function (){var statearr_21588 = state_21582;(statearr_21588[(9)] = inst_21556);
(statearr_21588[(8)] = inst_21557__$1);
return statearr_21588;
})();if(inst_21561)
{var statearr_21589_21617 = state_21582__$1;(statearr_21589_21617[(1)] = (5));
} else
{var statearr_21590_21618 = state_21582__$1;(statearr_21590_21618[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (6)))
{var inst_21557 = (state_21582[(8)]);var inst_21568 = cljs.core._EQ_.call(null,onView_21604,inst_21557);var state_21582__$1 = state_21582;if(inst_21568)
{var statearr_21591_21619 = state_21582__$1;(statearr_21591_21619[(1)] = (8));
} else
{var statearr_21592_21620 = state_21582__$1;(statearr_21592_21620[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (3)))
{var inst_21580 = (state_21582[(2)]);var state_21582__$1 = state_21582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21582__$1,inst_21580);
} else
{if((state_val_21583 === (2)))
{var inst_21552 = [onView_21604,onSys_21606];var inst_21553 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21552,null));var state_21582__$1 = state_21582;return cljs.core.async.ioc_alts_BANG_.call(null,state_21582__$1,(4),inst_21553);
} else
{if((state_val_21583 === (9)))
{var inst_21549 = (state_21582[(7)]);var state_21582__$1 = state_21582;var statearr_21593_21621 = state_21582__$1;(statearr_21593_21621[(2)] = inst_21549);
(statearr_21593_21621[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (5)))
{var inst_21556 = (state_21582[(9)]);var inst_21549 = (state_21582[(7)]);var inst_21564 = cljs.core.nth.call(null,inst_21556,(0),null);var inst_21565 = cljs.core.nth.call(null,inst_21556,(1),null);var inst_21566 = app.stock.abstract$.onSystem.call(null,inst_21564,inst_21565,inst_21549);var state_21582__$1 = state_21582;var statearr_21594_21622 = state_21582__$1;(statearr_21594_21622[(2)] = inst_21566);
(statearr_21594_21622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (10)))
{var inst_21575 = (state_21582[(2)]);var state_21582__$1 = state_21582;var statearr_21595_21623 = state_21582__$1;(statearr_21595_21623[(2)] = inst_21575);
(statearr_21595_21623[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21583 === (8)))
{var inst_21556 = (state_21582[(9)]);var inst_21549 = (state_21582[(7)]);var inst_21570 = (inst_21556[(0)]);var inst_21571 = (inst_21556[(1)]);var inst_21572 = app.stock.abstract$.onViewCommand.call(null,inst_21570,inst_21571,inst_21549);var state_21582__$1 = state_21582;var statearr_21596_21624 = state_21582__$1;(statearr_21596_21624[(2)] = inst_21572);
(statearr_21596_21624[(1)] = (10));
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
});})(c__6202__auto___21614,onView_21604,onModel_21605,onSys_21606))
;return ((function (switch__6187__auto__,c__6202__auto___21614,onView_21604,onModel_21605,onSys_21606){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21600 = [null,null,null,null,null,null,null,null,null,null];(statearr_21600[(0)] = state_machine__6188__auto__);
(statearr_21600[(1)] = (1));
return statearr_21600;
});
var state_machine__6188__auto____1 = (function (state_21582){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21582);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21601){if((e21601 instanceof Object))
{var ex__6191__auto__ = e21601;var statearr_21602_21625 = state_21582;(statearr_21602_21625[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21582);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21626 = state_21582;
state_21582 = G__21626;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21582){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___21614,onView_21604,onModel_21605,onSys_21606))
})();var state__6204__auto__ = (function (){var statearr_21603 = f__6203__auto__.call(null);(statearr_21603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___21614);
return statearr_21603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___21614,onView_21604,onModel_21605,onSys_21606))
);
return null;
});
app.stock.main.main.call(null);
