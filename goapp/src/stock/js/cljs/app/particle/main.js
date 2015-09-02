// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.draw');
goog.require('app.particle.impl');
goog.require('app.particle.abstract$');
goog.require('app.particle.abstract$');
goog.require('cljs.core.async');
app.particle.main.draw2D = app.particle.draw.draw2D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_36488){var state_val_36489 = (state_36488[(1)]);if((state_val_36489 === (2)))
{var inst_36486 = (state_36488[(2)]);var state_36488__$1 = state_36488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36488__$1,inst_36486);
} else
{if((state_val_36489 === (1)))
{var state_36488__$1 = state_36488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36488__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36493 = [null,null,null,null,null,null,null];(statearr_36493[(0)] = state_machine__6188__auto__);
(statearr_36493[(1)] = (1));
return statearr_36493;
});
var state_machine__6188__auto____1 = (function (state_36488){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36488);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36494){if((e36494 instanceof Object))
{var ex__6191__auto__ = e36494;var statearr_36495_36658 = state_36488;(statearr_36495_36658[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36659 = state_36488;
state_36488 = G__36659;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36488){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36496 = f__6203__auto__.call(null);(statearr_36496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_36496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___36660 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36660,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36660,onView,onModel,onTick,mspf){
return (function (state_36505){var state_val_36506 = (state_36505[(1)]);if((state_val_36506 === (4)))
{var inst_36499 = (state_36505[(2)]);var inst_36500 = common.onModel.onNext(inst_36499);var state_36505__$1 = (function (){var statearr_36507 = state_36505;(statearr_36507[(7)] = inst_36500);
return statearr_36507;
})();var statearr_36508_36661 = state_36505__$1;(statearr_36508_36661[(2)] = null);
(statearr_36508_36661[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36506 === (3)))
{var inst_36503 = (state_36505[(2)]);var state_36505__$1 = state_36505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36505__$1,inst_36503);
} else
{if((state_val_36506 === (2)))
{var state_36505__$1 = state_36505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36505__$1,(4),onModel);
} else
{if((state_val_36506 === (1)))
{var state_36505__$1 = state_36505;var statearr_36509_36662 = state_36505__$1;(statearr_36509_36662[(2)] = null);
(statearr_36509_36662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___36660,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36660,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36513 = [null,null,null,null,null,null,null,null];(statearr_36513[(0)] = state_machine__6188__auto__);
(statearr_36513[(1)] = (1));
return statearr_36513;
});
var state_machine__6188__auto____1 = (function (state_36505){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36514){if((e36514 instanceof Object))
{var ex__6191__auto__ = e36514;var statearr_36515_36663 = state_36505;(statearr_36515_36663[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36664 = state_36505;
state_36505 = G__36664;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36505){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36660,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36516 = f__6203__auto__.call(null);(statearr_36516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36660);
return statearr_36516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36660,onView,onModel,onTick,mspf))
);
var c__6202__auto___36665 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36665,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36665,onView,onModel,onTick,mspf){
return (function (state_36535){var state_val_36536 = (state_36535[(1)]);if((state_val_36536 === (5)))
{var inst_36526 = (state_36535[(7)]);var inst_36519 = (state_36535[(8)]);var inst_36530 = (state_36535[(2)]);var tmp36537 = inst_36519;var inst_36519__$1 = tmp36537;var inst_36520 = inst_36526;var state_36535__$1 = (function (){var statearr_36538 = state_36535;(statearr_36538[(9)] = inst_36530);
(statearr_36538[(8)] = inst_36519__$1);
(statearr_36538[(10)] = inst_36520);
return statearr_36538;
})();var statearr_36539_36666 = state_36535__$1;(statearr_36539_36666[(2)] = null);
(statearr_36539_36666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36536 === (4)))
{var inst_36526 = (state_36535[(7)]);var inst_36520 = (state_36535[(10)]);var inst_36524 = (state_36535[(2)]);var inst_36525 = (new Date());var inst_36526__$1 = inst_36525.getTime();var inst_36527 = (inst_36526__$1 - inst_36520);var inst_36528 = (inst_36527 / (1000));var state_36535__$1 = (function (){var statearr_36540 = state_36535;(statearr_36540[(7)] = inst_36526__$1);
(statearr_36540[(11)] = inst_36524);
return statearr_36540;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36535__$1,(5),onTick,inst_36528);
} else
{if((state_val_36536 === (3)))
{var inst_36533 = (state_36535[(2)]);var state_36535__$1 = state_36535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36535__$1,inst_36533);
} else
{if((state_val_36536 === (2)))
{var inst_36519 = (state_36535[(8)]);var inst_36522 = cljs.core.async.timeout.call(null,inst_36519);var state_36535__$1 = state_36535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36535__$1,(4),inst_36522);
} else
{if((state_val_36536 === (1)))
{var inst_36517 = (new Date());var inst_36518 = inst_36517.getTime();var inst_36519 = mspf;var inst_36520 = inst_36518;var state_36535__$1 = (function (){var statearr_36541 = state_36535;(statearr_36541[(8)] = inst_36519);
(statearr_36541[(10)] = inst_36520);
return statearr_36541;
})();var statearr_36542_36667 = state_36535__$1;(statearr_36542_36667[(2)] = null);
(statearr_36542_36667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___36665,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36665,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36546[(0)] = state_machine__6188__auto__);
(statearr_36546[(1)] = (1));
return statearr_36546;
});
var state_machine__6188__auto____1 = (function (state_36535){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36535);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36547){if((e36547 instanceof Object))
{var ex__6191__auto__ = e36547;var statearr_36548_36668 = state_36535;(statearr_36548_36668[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36669 = state_36535;
state_36535 = G__36669;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36535){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36665,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36549 = f__6203__auto__.call(null);(statearr_36549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36665);
return statearr_36549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36665,onView,onModel,onTick,mspf))
);
var c__6202__auto___36670 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36670,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36670,onView,onModel,onTick,mspf){
return (function (state_36583){var state_val_36584 = (state_36583[(1)]);if((state_val_36584 === (5)))
{var inst_36581 = (state_36583[(2)]);var state_36583__$1 = state_36583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36583__$1,inst_36581);
} else
{if((state_val_36584 === (4)))
{var inst_36562 = (state_36583[(2)]);var inst_36569 = [(0),(0),(0)];var inst_36570 = [(10),(20)];var inst_36571 = [(100),(0),3.14];var inst_36572 = {"position":inst_36569,"size":inst_36570,"vel":inst_36571};var inst_36573 = [inst_36572];var inst_36574 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_36573};var inst_36575 = [(30),(10)];var inst_36576 = [(300),(300),(0)];var inst_36577 = [(100),(100),(0)];var inst_36578 = {"id":"x1","emit":inst_36574,"size":inst_36575,"pos":inst_36576,"vel":inst_36577};var inst_36579 = ["edit-particle",inst_36578];var state_36583__$1 = (function (){var statearr_36585 = state_36583;(statearr_36585[(7)] = inst_36562);
return statearr_36585;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36583__$1,(5),onView,inst_36579);
} else
{if((state_val_36584 === (3)))
{var inst_36559 = (state_36583[(2)]);var inst_36560 = cljs.core.async.timeout.call(null,(1100));var state_36583__$1 = (function (){var statearr_36586 = state_36583;(statearr_36586[(8)] = inst_36559);
return statearr_36586;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36583__$1,(4),inst_36560);
} else
{if((state_val_36584 === (2)))
{var inst_36552 = (state_36583[(2)]);var inst_36555 = [(300),(300),(0)];var inst_36556 = {"id":"x1","pos":inst_36555};var inst_36557 = ["edit-particle",inst_36556];var state_36583__$1 = (function (){var statearr_36587 = state_36583;(statearr_36587[(9)] = inst_36552);
return statearr_36587;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36583__$1,(3),onView,inst_36557);
} else
{if((state_val_36584 === (1)))
{var inst_36550 = cljs.core.async.timeout.call(null,(1000));var state_36583__$1 = state_36583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36583__$1,(2),inst_36550);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___36670,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36670,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36591 = [null,null,null,null,null,null,null,null,null,null];(statearr_36591[(0)] = state_machine__6188__auto__);
(statearr_36591[(1)] = (1));
return statearr_36591;
});
var state_machine__6188__auto____1 = (function (state_36583){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36592){if((e36592 instanceof Object))
{var ex__6191__auto__ = e36592;var statearr_36593_36671 = state_36583;(statearr_36593_36671[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36672 = state_36583;
state_36583 = G__36672;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36583){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36670,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36594 = f__6203__auto__.call(null);(statearr_36594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36670);
return statearr_36594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36670,onView,onModel,onTick,mspf))
);
var c__6202__auto___36673 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___36673,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___36673,onView,onModel,onTick,mspf){
return (function (state_36636){var state_val_36637 = (state_36636[(1)]);if((state_val_36637 === (7)))
{var inst_36631 = (state_36636[(2)]);var inst_36602 = inst_36631;var state_36636__$1 = (function (){var statearr_36638 = state_36636;(statearr_36638[(7)] = inst_36602);
return statearr_36638;
})();var statearr_36639_36674 = state_36636__$1;(statearr_36639_36674[(2)] = null);
(statearr_36639_36674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (1)))
{var inst_36595 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_36596 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_36597 = cljs.core.List.EMPTY;var inst_36598 = [inst_36597];var inst_36599 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36596,inst_36598);var inst_36600 = [(0),inst_36599];var inst_36601 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36595,inst_36600);var inst_36602 = inst_36601;var state_36636__$1 = (function (){var statearr_36640 = state_36636;(statearr_36640[(7)] = inst_36602);
return statearr_36640;
})();var statearr_36641_36675 = state_36636__$1;(statearr_36641_36675[(2)] = null);
(statearr_36641_36675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (4)))
{var inst_36610 = (state_36636[(8)]);var inst_36608 = (state_36636[(2)]);var inst_36609 = cljs.core.nth.call(null,inst_36608,(0),null);var inst_36610__$1 = cljs.core.nth.call(null,inst_36608,(1),null);var inst_36614 = cljs.core._EQ_.call(null,onTick,inst_36610__$1);var state_36636__$1 = (function (){var statearr_36642 = state_36636;(statearr_36642[(8)] = inst_36610__$1);
(statearr_36642[(9)] = inst_36609);
return statearr_36642;
})();if(inst_36614)
{var statearr_36643_36676 = state_36636__$1;(statearr_36643_36676[(1)] = (5));
} else
{var statearr_36644_36677 = state_36636__$1;(statearr_36644_36677[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (6)))
{var inst_36610 = (state_36636[(8)]);var inst_36622 = cljs.core._EQ_.call(null,onView,inst_36610);var state_36636__$1 = state_36636;if(inst_36622)
{var statearr_36645_36678 = state_36636__$1;(statearr_36645_36678[(1)] = (8));
} else
{var statearr_36646_36679 = state_36636__$1;(statearr_36646_36679[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (3)))
{var inst_36634 = (state_36636[(2)]);var state_36636__$1 = state_36636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36636__$1,inst_36634);
} else
{if((state_val_36637 === (2)))
{var inst_36605 = [onView,onTick];var inst_36606 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36605,null));var state_36636__$1 = state_36636;return cljs.core.async.ioc_alts_BANG_.call(null,state_36636__$1,(4),inst_36606);
} else
{if((state_val_36637 === (9)))
{var inst_36602 = (state_36636[(7)]);var state_36636__$1 = state_36636;var statearr_36647_36680 = state_36636__$1;(statearr_36647_36680[(2)] = inst_36602);
(statearr_36647_36680[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (5)))
{var inst_36609 = (state_36636[(9)]);var inst_36602 = (state_36636[(7)]);var inst_36616 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_36617 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36616,null));var inst_36618 = cljs.core.partial.call(null,tool.particle.update,inst_36609);var inst_36619 = cljs.core.update_in.call(null,inst_36602,inst_36617,inst_36618);var inst_36620 = app.particle.main.draw2D.call(null,inst_36619);var state_36636__$1 = state_36636;var statearr_36648_36681 = state_36636__$1;(statearr_36648_36681[(2)] = inst_36620);
(statearr_36648_36681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (10)))
{var inst_36629 = (state_36636[(2)]);var state_36636__$1 = state_36636;var statearr_36649_36682 = state_36636__$1;(statearr_36649_36682[(2)] = inst_36629);
(statearr_36649_36682[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36637 === (8)))
{var inst_36609 = (state_36636[(9)]);var inst_36602 = (state_36636[(7)]);var inst_36624 = (inst_36609[(0)]);var inst_36625 = (inst_36609[(1)]);var inst_36626 = app.particle.abstract$.onViewCommand.call(null,inst_36624,inst_36625,inst_36602);var state_36636__$1 = state_36636;var statearr_36650_36683 = state_36636__$1;(statearr_36650_36683[(2)] = inst_36626);
(statearr_36650_36683[(1)] = (10));
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
});})(c__6202__auto___36673,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___36673,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36654 = [null,null,null,null,null,null,null,null,null,null];(statearr_36654[(0)] = state_machine__6188__auto__);
(statearr_36654[(1)] = (1));
return statearr_36654;
});
var state_machine__6188__auto____1 = (function (state_36636){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36636);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36655){if((e36655 instanceof Object))
{var ex__6191__auto__ = e36655;var statearr_36656_36684 = state_36636;(statearr_36656_36684[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36685 = state_36636;
state_36636 = G__36685;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36636){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___36673,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36657 = f__6203__auto__.call(null);(statearr_36657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___36673);
return statearr_36657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___36673,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
