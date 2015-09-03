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
app.particle.main.draw = app.particle.draw.draw3D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_78480){var state_val_78481 = (state_78480[(1)]);if((state_val_78481 === (2)))
{var inst_78478 = (state_78480[(2)]);var state_78480__$1 = state_78480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78480__$1,inst_78478);
} else
{if((state_val_78481 === (1)))
{var state_78480__$1 = state_78480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78480__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78485 = [null,null,null,null,null,null,null];(statearr_78485[(0)] = state_machine__6188__auto__);
(statearr_78485[(1)] = (1));
return statearr_78485;
});
var state_machine__6188__auto____1 = (function (state_78480){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78486){if((e78486 instanceof Object))
{var ex__6191__auto__ = e78486;var statearr_78487_78664 = state_78480;(statearr_78487_78664[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78665 = state_78480;
state_78480 = G__78665;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78480){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78488 = f__6203__auto__.call(null);(statearr_78488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___78666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78666,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78666,onView,onModel,onTick,mspf){
return (function (state_78502){var state_val_78503 = (state_78502[(1)]);if((state_val_78503 === (4)))
{var inst_78492 = (state_78502[(2)]);var inst_78493 = cljs.core.nth.call(null,inst_78492,(0),null);var inst_78494 = cljs.core.nth.call(null,inst_78492,(1),null);var inst_78495 = cljs.core.nth.call(null,inst_78492,(2),null);var inst_78496 = [inst_78493,inst_78494,inst_78495];var inst_78497 = common.onModel.onNext(inst_78496);var state_78502__$1 = (function (){var statearr_78504 = state_78502;(statearr_78504[(7)] = inst_78497);
return statearr_78504;
})();var statearr_78505_78667 = state_78502__$1;(statearr_78505_78667[(2)] = null);
(statearr_78505_78667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78503 === (3)))
{var inst_78500 = (state_78502[(2)]);var state_78502__$1 = state_78502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78502__$1,inst_78500);
} else
{if((state_val_78503 === (2)))
{var state_78502__$1 = state_78502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78502__$1,(4),onModel);
} else
{if((state_val_78503 === (1)))
{var state_78502__$1 = state_78502;var statearr_78506_78668 = state_78502__$1;(statearr_78506_78668[(2)] = null);
(statearr_78506_78668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___78666,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78666,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78510 = [null,null,null,null,null,null,null,null];(statearr_78510[(0)] = state_machine__6188__auto__);
(statearr_78510[(1)] = (1));
return statearr_78510;
});
var state_machine__6188__auto____1 = (function (state_78502){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78502);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78511){if((e78511 instanceof Object))
{var ex__6191__auto__ = e78511;var statearr_78512_78669 = state_78502;(statearr_78512_78669[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78670 = state_78502;
state_78502 = G__78670;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78502){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78666,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78513 = f__6203__auto__.call(null);(statearr_78513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78666);
return statearr_78513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78666,onView,onModel,onTick,mspf))
);
var c__6202__auto___78671 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78671,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78671,onView,onModel,onTick,mspf){
return (function (state_78532){var state_val_78533 = (state_78532[(1)]);if((state_val_78533 === (5)))
{var inst_78516 = (state_78532[(7)]);var inst_78523 = (state_78532[(8)]);var inst_78527 = (state_78532[(2)]);var tmp78534 = inst_78516;var inst_78516__$1 = tmp78534;var inst_78517 = inst_78523;var state_78532__$1 = (function (){var statearr_78535 = state_78532;(statearr_78535[(7)] = inst_78516__$1);
(statearr_78535[(9)] = inst_78517);
(statearr_78535[(10)] = inst_78527);
return statearr_78535;
})();var statearr_78536_78672 = state_78532__$1;(statearr_78536_78672[(2)] = null);
(statearr_78536_78672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78533 === (4)))
{var inst_78517 = (state_78532[(9)]);var inst_78523 = (state_78532[(8)]);var inst_78521 = (state_78532[(2)]);var inst_78522 = (new Date());var inst_78523__$1 = inst_78522.getTime();var inst_78524 = (inst_78523__$1 - inst_78517);var inst_78525 = (inst_78524 / (1000));var state_78532__$1 = (function (){var statearr_78537 = state_78532;(statearr_78537[(8)] = inst_78523__$1);
(statearr_78537[(11)] = inst_78521);
return statearr_78537;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78532__$1,(5),onTick,inst_78525);
} else
{if((state_val_78533 === (3)))
{var inst_78530 = (state_78532[(2)]);var state_78532__$1 = state_78532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78532__$1,inst_78530);
} else
{if((state_val_78533 === (2)))
{var inst_78516 = (state_78532[(7)]);var inst_78519 = cljs.core.async.timeout.call(null,inst_78516);var state_78532__$1 = state_78532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78532__$1,(4),inst_78519);
} else
{if((state_val_78533 === (1)))
{var inst_78514 = (new Date());var inst_78515 = inst_78514.getTime();var inst_78516 = mspf;var inst_78517 = inst_78515;var state_78532__$1 = (function (){var statearr_78538 = state_78532;(statearr_78538[(7)] = inst_78516);
(statearr_78538[(9)] = inst_78517);
return statearr_78538;
})();var statearr_78539_78673 = state_78532__$1;(statearr_78539_78673[(2)] = null);
(statearr_78539_78673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___78671,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78671,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78543 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78543[(0)] = state_machine__6188__auto__);
(statearr_78543[(1)] = (1));
return statearr_78543;
});
var state_machine__6188__auto____1 = (function (state_78532){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78544){if((e78544 instanceof Object))
{var ex__6191__auto__ = e78544;var statearr_78545_78674 = state_78532;(statearr_78545_78674[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78675 = state_78532;
state_78532 = G__78675;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78532){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78671,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78546 = f__6203__auto__.call(null);(statearr_78546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78671);
return statearr_78546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78671,onView,onModel,onTick,mspf))
);
var c__6202__auto___78676 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78676,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78676,onView,onModel,onTick,mspf){
return (function (state_78590){var state_val_78591 = (state_78590[(1)]);if((state_val_78591 === (7)))
{var inst_78585 = (state_78590[(2)]);var inst_78556 = inst_78585;var state_78590__$1 = (function (){var statearr_78592 = state_78590;(statearr_78592[(7)] = inst_78556);
return statearr_78592;
})();var statearr_78593_78677 = state_78590__$1;(statearr_78593_78677[(2)] = null);
(statearr_78593_78677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (1)))
{var inst_78547 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_78548 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_78549 = cljs.core.List.EMPTY;var inst_78550 = [inst_78549];var inst_78551 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78548,inst_78550);var inst_78552 = [(0),(0)];var inst_78553 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78552,null));var inst_78554 = [(0),inst_78551,inst_78553,onModel];var inst_78555 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78547,inst_78554);var inst_78556 = inst_78555;var state_78590__$1 = (function (){var statearr_78594 = state_78590;(statearr_78594[(7)] = inst_78556);
return statearr_78594;
})();var statearr_78595_78678 = state_78590__$1;(statearr_78595_78678[(2)] = null);
(statearr_78595_78678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (4)))
{var inst_78564 = (state_78590[(8)]);var inst_78562 = (state_78590[(2)]);var inst_78563 = cljs.core.nth.call(null,inst_78562,(0),null);var inst_78564__$1 = cljs.core.nth.call(null,inst_78562,(1),null);var inst_78568 = cljs.core._EQ_.call(null,onTick,inst_78564__$1);var state_78590__$1 = (function (){var statearr_78596 = state_78590;(statearr_78596[(9)] = inst_78563);
(statearr_78596[(8)] = inst_78564__$1);
return statearr_78596;
})();if(inst_78568)
{var statearr_78597_78679 = state_78590__$1;(statearr_78597_78679[(1)] = (5));
} else
{var statearr_78598_78680 = state_78590__$1;(statearr_78598_78680[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (6)))
{var inst_78564 = (state_78590[(8)]);var inst_78576 = cljs.core._EQ_.call(null,onView,inst_78564);var state_78590__$1 = state_78590;if(inst_78576)
{var statearr_78599_78681 = state_78590__$1;(statearr_78599_78681[(1)] = (8));
} else
{var statearr_78600_78682 = state_78590__$1;(statearr_78600_78682[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (3)))
{var inst_78588 = (state_78590[(2)]);var state_78590__$1 = state_78590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78590__$1,inst_78588);
} else
{if((state_val_78591 === (2)))
{var inst_78559 = [onView,onTick];var inst_78560 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78559,null));var state_78590__$1 = state_78590;return cljs.core.async.ioc_alts_BANG_.call(null,state_78590__$1,(4),inst_78560);
} else
{if((state_val_78591 === (9)))
{var inst_78556 = (state_78590[(7)]);var state_78590__$1 = state_78590;var statearr_78601_78683 = state_78590__$1;(statearr_78601_78683[(2)] = inst_78556);
(statearr_78601_78683[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (5)))
{var inst_78563 = (state_78590[(9)]);var inst_78556 = (state_78590[(7)]);var inst_78570 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_78571 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78570,null));var inst_78572 = cljs.core.partial.call(null,tool.particle.update,inst_78563);var inst_78573 = cljs.core.update_in.call(null,inst_78556,inst_78571,inst_78572);var inst_78574 = app.particle.main.draw.call(null,inst_78573);var state_78590__$1 = state_78590;var statearr_78602_78684 = state_78590__$1;(statearr_78602_78684[(2)] = inst_78574);
(statearr_78602_78684[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (10)))
{var inst_78583 = (state_78590[(2)]);var state_78590__$1 = state_78590;var statearr_78603_78685 = state_78590__$1;(statearr_78603_78685[(2)] = inst_78583);
(statearr_78603_78685[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78591 === (8)))
{var inst_78563 = (state_78590[(9)]);var inst_78556 = (state_78590[(7)]);var inst_78578 = (inst_78563[(0)]);var inst_78579 = (inst_78563[(1)]);var inst_78580 = app.particle.abstract$.onViewCommand.call(null,inst_78578,inst_78579,inst_78556);var state_78590__$1 = state_78590;var statearr_78604_78686 = state_78590__$1;(statearr_78604_78686[(2)] = inst_78580);
(statearr_78604_78686[(1)] = (10));
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
});})(c__6202__auto___78676,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78676,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78608 = [null,null,null,null,null,null,null,null,null,null];(statearr_78608[(0)] = state_machine__6188__auto__);
(statearr_78608[(1)] = (1));
return statearr_78608;
});
var state_machine__6188__auto____1 = (function (state_78590){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78609){if((e78609 instanceof Object))
{var ex__6191__auto__ = e78609;var statearr_78610_78687 = state_78590;(statearr_78610_78687[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78688 = state_78590;
state_78590 = G__78688;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78590){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78676,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78611 = f__6203__auto__.call(null);(statearr_78611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78676);
return statearr_78611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78676,onView,onModel,onTick,mspf))
);
var c__6202__auto___78689 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78689,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78689,onView,onModel,onTick,mspf){
return (function (state_78652){var state_val_78653 = (state_78652[(1)]);if((state_val_78653 === (5)))
{var inst_78650 = (state_78652[(2)]);var state_78652__$1 = state_78652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78652__$1,inst_78650);
} else
{if((state_val_78653 === (4)))
{var inst_78624 = (state_78652[(2)]);var inst_78631 = [(0),(0),(0)];var inst_78632 = [(1),(0),(1),(1)];var inst_78633 = [(10),(20)];var inst_78634 = [(0),(0),3.14];var inst_78635 = {"position":inst_78631,"color":inst_78632,"size":inst_78633,"vel":inst_78634};var inst_78636 = [inst_78635];var inst_78637 = {"duration":0.05,"angle":(0),"force":(200),"range":(0),"prototype":inst_78636};var inst_78638 = [(0),(0),(1),(1)];var inst_78639 = [(30),(10)];var inst_78640 = [(10),(10),(0)];var inst_78641 = [(0),(0),(0)];var inst_78642 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_78643 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_78644 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_78645 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_78646 = [inst_78642,inst_78643,inst_78644,inst_78645];var inst_78647 = {"id":"x1","emit":inst_78637,"color":inst_78638,"size":inst_78639,"pos":inst_78640,"vel":inst_78641,"formulaList":inst_78646};var inst_78648 = ["edit-particle",inst_78647];var state_78652__$1 = (function (){var statearr_78654 = state_78652;(statearr_78654[(7)] = inst_78624);
return statearr_78654;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78652__$1,(5),onView,inst_78648);
} else
{if((state_val_78653 === (3)))
{var inst_78621 = (state_78652[(2)]);var inst_78622 = cljs.core.async.timeout.call(null,(1100));var state_78652__$1 = (function (){var statearr_78655 = state_78652;(statearr_78655[(8)] = inst_78621);
return statearr_78655;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78652__$1,(4),inst_78622);
} else
{if((state_val_78653 === (2)))
{var inst_78614 = (state_78652[(2)]);var inst_78617 = [(10),(10),(0)];var inst_78618 = {"id":"x1","pos":inst_78617};var inst_78619 = ["edit-particle",inst_78618];var state_78652__$1 = (function (){var statearr_78656 = state_78652;(statearr_78656[(9)] = inst_78614);
return statearr_78656;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78652__$1,(3),onView,inst_78619);
} else
{if((state_val_78653 === (1)))
{var inst_78612 = cljs.core.async.timeout.call(null,(1000));var state_78652__$1 = state_78652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78652__$1,(2),inst_78612);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___78689,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78689,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78660 = [null,null,null,null,null,null,null,null,null,null];(statearr_78660[(0)] = state_machine__6188__auto__);
(statearr_78660[(1)] = (1));
return statearr_78660;
});
var state_machine__6188__auto____1 = (function (state_78652){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78652);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78661){if((e78661 instanceof Object))
{var ex__6191__auto__ = e78661;var statearr_78662_78690 = state_78652;(statearr_78662_78690[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78652);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78691 = state_78652;
state_78652 = G__78691;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78652){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78689,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78663 = f__6203__auto__.call(null);(statearr_78663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78689);
return statearr_78663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78689,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
