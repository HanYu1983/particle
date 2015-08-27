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
app.stock.main.main2 = (function main2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_78475){var state_val_78476 = (state_78475[(1)]);if((state_val_78476 === (6)))
{var inst_78470 = (state_78475[(2)]);var inst_78471 = cljs.core.nth.call(null,inst_78470,(0),null);var inst_78472 = cljs.core.nth.call(null,inst_78470,(1),null);var inst_78473 = console.log(inst_78471,inst_78472);var state_78475__$1 = state_78475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78475__$1,inst_78473);
} else
{if((state_val_78476 === (5)))
{var inst_78465 = (state_78475[(2)]);var inst_78466 = cljs.core.nth.call(null,inst_78465,(0),null);var inst_78467 = cljs.core.nth.call(null,inst_78465,(1),null);var inst_78468 = app.dbfile.file.call(null,inst_78467,"json");var state_78475__$1 = (function (){var statearr_78477 = state_78475;(statearr_78477[(7)] = inst_78466);
return statearr_78477;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78475__$1,(6),inst_78468);
} else
{if((state_val_78476 === (4)))
{var inst_78457 = (state_78475[(8)]);var inst_78460 = (state_78475[(2)]);var inst_78461 = cljs.core.nth.call(null,inst_78460,(0),null);var inst_78462 = cljs.core.nth.call(null,inst_78460,(1),null);var inst_78463 = app.dbfile.name__GT_id.call(null,inst_78457,"userinfo.json");var state_78475__$1 = (function (){var statearr_78478 = state_78475;(statearr_78478[(9)] = inst_78462);
(statearr_78478[(10)] = inst_78461);
return statearr_78478;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78475__$1,(5),inst_78463);
} else
{if((state_val_78476 === (3)))
{var inst_78457 = (state_78475[(8)]);var inst_78455 = (state_78475[(2)]);var inst_78456 = cljs.core.nth.call(null,inst_78455,(0),null);var inst_78457__$1 = cljs.core.nth.call(null,inst_78455,(1),null);var inst_78458 = app.dbfile.makeFile.call(null,inst_78457__$1,"userinfo.json","{}",true);var state_78475__$1 = (function (){var statearr_78479 = state_78475;(statearr_78479[(8)] = inst_78457__$1);
(statearr_78479[(11)] = inst_78456);
return statearr_78479;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78475__$1,(4),inst_78458);
} else
{if((state_val_78476 === (2)))
{var inst_78450 = (state_78475[(2)]);var inst_78451 = cljs.core.nth.call(null,inst_78450,(0),null);var inst_78452 = cljs.core.nth.call(null,inst_78450,(1),null);var inst_78453 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_78475__$1 = (function (){var statearr_78480 = state_78475;(statearr_78480[(12)] = inst_78452);
(statearr_78480[(13)] = inst_78451);
return statearr_78480;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78475__$1,(3),inst_78453);
} else
{if((state_val_78476 === (1)))
{var inst_78448 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_78475__$1 = state_78475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78475__$1,(2),inst_78448);
} else
{return null;
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
var state_machine__6188__auto____0 = (function (){var statearr_78484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78484[(0)] = state_machine__6188__auto__);
(statearr_78484[(1)] = (1));
return statearr_78484;
});
var state_machine__6188__auto____1 = (function (state_78475){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78485){if((e78485 instanceof Object))
{var ex__6191__auto__ = e78485;var statearr_78486_78488 = state_78475;(statearr_78486_78488[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78489 = state_78475;
state_78475 = G__78489;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78475){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_78487 = f__6203__auto__.call(null);(statearr_78487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){var onView_78670 = cljs.core.async.chan.call(null);var onModel_78671 = cljs.core.async.chan.call(null);var onSys_78672 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_78670,onModel_78671,onSys_78672){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_78670,onModel_78671,onSys_78672){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_78670,onModel_78671,onSys_78672){
return (function (state_78583){var state_val_78584 = (state_78583[(1)]);if((state_val_78584 === (2)))
{var inst_78581 = (state_78583[(2)]);var state_78583__$1 = state_78583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78583__$1,inst_78581);
} else
{if((state_val_78584 === (1)))
{var state_78583__$1 = state_78583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78583__$1,(2),onView_78670,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_78670,onModel_78671,onSys_78672))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_78670,onModel_78671,onSys_78672){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78588 = [null,null,null,null,null,null,null];(statearr_78588[(0)] = state_machine__6188__auto__);
(statearr_78588[(1)] = (1));
return statearr_78588;
});
var state_machine__6188__auto____1 = (function (state_78583){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78589){if((e78589 instanceof Object))
{var ex__6191__auto__ = e78589;var statearr_78590_78673 = state_78583;(statearr_78590_78673[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78674 = state_78583;
state_78583 = G__78674;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78583){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_78670,onModel_78671,onSys_78672))
})();var state__6204__auto__ = (function (){var statearr_78591 = f__6203__auto__.call(null);(statearr_78591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_78670,onModel_78671,onSys_78672))
);
return c__6202__auto__;
});})(onView_78670,onModel_78671,onSys_78672))
);
var c__6202__auto___78675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78675,onView_78670,onModel_78671,onSys_78672){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78675,onView_78670,onModel_78671,onSys_78672){
return (function (state_78600){var state_val_78601 = (state_78600[(1)]);if((state_val_78601 === (4)))
{var inst_78594 = (state_78600[(2)]);var inst_78595 = common.onModel.onNext(inst_78594);var state_78600__$1 = (function (){var statearr_78602 = state_78600;(statearr_78602[(7)] = inst_78595);
return statearr_78602;
})();var statearr_78603_78676 = state_78600__$1;(statearr_78603_78676[(2)] = null);
(statearr_78603_78676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78601 === (3)))
{var inst_78598 = (state_78600[(2)]);var state_78600__$1 = state_78600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78600__$1,inst_78598);
} else
{if((state_val_78601 === (2)))
{var state_78600__$1 = state_78600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78600__$1,(4),onModel_78671);
} else
{if((state_val_78601 === (1)))
{var state_78600__$1 = state_78600;var statearr_78604_78677 = state_78600__$1;(statearr_78604_78677[(2)] = null);
(statearr_78604_78677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___78675,onView_78670,onModel_78671,onSys_78672))
;return ((function (switch__6187__auto__,c__6202__auto___78675,onView_78670,onModel_78671,onSys_78672){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78608 = [null,null,null,null,null,null,null,null];(statearr_78608[(0)] = state_machine__6188__auto__);
(statearr_78608[(1)] = (1));
return statearr_78608;
});
var state_machine__6188__auto____1 = (function (state_78600){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78600);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78609){if((e78609 instanceof Object))
{var ex__6191__auto__ = e78609;var statearr_78610_78678 = state_78600;(statearr_78610_78678[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78600);
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
var G__78679 = state_78600;
state_78600 = G__78679;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78600){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78675,onView_78670,onModel_78671,onSys_78672))
})();var state__6204__auto__ = (function (){var statearr_78611 = f__6203__auto__.call(null);(statearr_78611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78675);
return statearr_78611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78675,onView_78670,onModel_78671,onSys_78672))
);
var c__6202__auto___78680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78680,onView_78670,onModel_78671,onSys_78672){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78680,onView_78670,onModel_78671,onSys_78672){
return (function (state_78648){var state_val_78649 = (state_78648[(1)]);if((state_val_78649 === (7)))
{var inst_78643 = (state_78648[(2)]);var inst_78615 = inst_78643;var state_78648__$1 = (function (){var statearr_78650 = state_78648;(statearr_78650[(7)] = inst_78615);
return statearr_78650;
})();var statearr_78651_78681 = state_78648__$1;(statearr_78651_78681[(2)] = null);
(statearr_78651_78681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (1)))
{var inst_78612 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_78613 = [onView_78670,onModel_78671,onSys_78672,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_78614 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78612,inst_78613);var inst_78615 = inst_78614;var state_78648__$1 = (function (){var statearr_78652 = state_78648;(statearr_78652[(7)] = inst_78615);
return statearr_78652;
})();var statearr_78653_78682 = state_78648__$1;(statearr_78653_78682[(2)] = null);
(statearr_78653_78682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (4)))
{var inst_78623 = (state_78648[(8)]);var inst_78621 = (state_78648[(2)]);var inst_78622 = cljs.core.nth.call(null,inst_78621,(0),null);var inst_78623__$1 = cljs.core.nth.call(null,inst_78621,(1),null);var inst_78627 = cljs.core._EQ_.call(null,onSys_78672,inst_78623__$1);var state_78648__$1 = (function (){var statearr_78654 = state_78648;(statearr_78654[(9)] = inst_78622);
(statearr_78654[(8)] = inst_78623__$1);
return statearr_78654;
})();if(inst_78627)
{var statearr_78655_78683 = state_78648__$1;(statearr_78655_78683[(1)] = (5));
} else
{var statearr_78656_78684 = state_78648__$1;(statearr_78656_78684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (6)))
{var inst_78623 = (state_78648[(8)]);var inst_78634 = cljs.core._EQ_.call(null,onView_78670,inst_78623);var state_78648__$1 = state_78648;if(inst_78634)
{var statearr_78657_78685 = state_78648__$1;(statearr_78657_78685[(1)] = (8));
} else
{var statearr_78658_78686 = state_78648__$1;(statearr_78658_78686[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (3)))
{var inst_78646 = (state_78648[(2)]);var state_78648__$1 = state_78648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78648__$1,inst_78646);
} else
{if((state_val_78649 === (2)))
{var inst_78618 = [onView_78670,onSys_78672];var inst_78619 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78618,null));var state_78648__$1 = state_78648;return cljs.core.async.ioc_alts_BANG_.call(null,state_78648__$1,(4),inst_78619);
} else
{if((state_val_78649 === (9)))
{var inst_78615 = (state_78648[(7)]);var state_78648__$1 = state_78648;var statearr_78659_78687 = state_78648__$1;(statearr_78659_78687[(2)] = inst_78615);
(statearr_78659_78687[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (5)))
{var inst_78622 = (state_78648[(9)]);var inst_78615 = (state_78648[(7)]);var inst_78630 = cljs.core.nth.call(null,inst_78622,(0),null);var inst_78631 = cljs.core.nth.call(null,inst_78622,(1),null);var inst_78632 = app.stock.abstract$.onSystem.call(null,inst_78630,inst_78631,inst_78615);var state_78648__$1 = state_78648;var statearr_78660_78688 = state_78648__$1;(statearr_78660_78688[(2)] = inst_78632);
(statearr_78660_78688[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (10)))
{var inst_78641 = (state_78648[(2)]);var state_78648__$1 = state_78648;var statearr_78661_78689 = state_78648__$1;(statearr_78661_78689[(2)] = inst_78641);
(statearr_78661_78689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78649 === (8)))
{var inst_78622 = (state_78648[(9)]);var inst_78615 = (state_78648[(7)]);var inst_78636 = (inst_78622[(0)]);var inst_78637 = (inst_78622[(1)]);var inst_78638 = app.stock.abstract$.onViewCommand.call(null,inst_78636,inst_78637,inst_78615);var state_78648__$1 = state_78648;var statearr_78662_78690 = state_78648__$1;(statearr_78662_78690[(2)] = inst_78638);
(statearr_78662_78690[(1)] = (10));
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
});})(c__6202__auto___78680,onView_78670,onModel_78671,onSys_78672))
;return ((function (switch__6187__auto__,c__6202__auto___78680,onView_78670,onModel_78671,onSys_78672){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78666 = [null,null,null,null,null,null,null,null,null,null];(statearr_78666[(0)] = state_machine__6188__auto__);
(statearr_78666[(1)] = (1));
return statearr_78666;
});
var state_machine__6188__auto____1 = (function (state_78648){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78667){if((e78667 instanceof Object))
{var ex__6191__auto__ = e78667;var statearr_78668_78691 = state_78648;(statearr_78668_78691[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78692 = state_78648;
state_78648 = G__78692;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78648){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78680,onView_78670,onModel_78671,onSys_78672))
})();var state__6204__auto__ = (function (){var statearr_78669 = f__6203__auto__.call(null);(statearr_78669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78680);
return statearr_78669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78680,onView_78670,onModel_78671,onSys_78672))
);
return null;
});
app.stock.main.main.call(null);
