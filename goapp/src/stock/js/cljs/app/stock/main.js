// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.abstract$');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.abstract$');
goog.require('app.stock.viewcmd');
app.stock.main.main = (function main(){var onView_19686 = cljs.core.async.chan.call(null);var onModel_19687 = cljs.core.async.chan.call(null);var onSys_19688 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_19686,onModel_19687,onSys_19688){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_19686,onModel_19687,onSys_19688){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_19686,onModel_19687,onSys_19688){
return (function (state_19587){var state_val_19588 = (state_19587[(1)]);if((state_val_19588 === (2)))
{var inst_19585 = (state_19587[(2)]);var state_19587__$1 = state_19587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19587__$1,inst_19585);
} else
{if((state_val_19588 === (1)))
{var state_19587__$1 = state_19587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19587__$1,(2),onView_19686,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_19686,onModel_19687,onSys_19688))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_19686,onModel_19687,onSys_19688){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19592 = [null,null,null,null,null,null,null];(statearr_19592[(0)] = state_machine__6188__auto__);
(statearr_19592[(1)] = (1));
return statearr_19592;
});
var state_machine__6188__auto____1 = (function (state_19587){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19587);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19593){if((e19593 instanceof Object))
{var ex__6191__auto__ = e19593;var statearr_19594_19689 = state_19587;(statearr_19594_19689[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19593;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19690 = state_19587;
state_19587 = G__19690;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19587){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_19686,onModel_19687,onSys_19688))
})();var state__6204__auto__ = (function (){var statearr_19595 = f__6203__auto__.call(null);(statearr_19595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_19595;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_19686,onModel_19687,onSys_19688))
);
return c__6202__auto__;
});})(onView_19686,onModel_19687,onSys_19688))
);
var c__6202__auto___19691 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___19691,onView_19686,onModel_19687,onSys_19688){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___19691,onView_19686,onModel_19687,onSys_19688){
return (function (state_19604){var state_val_19605 = (state_19604[(1)]);if((state_val_19605 === (4)))
{var inst_19598 = (state_19604[(2)]);var inst_19599 = common.onModel(inst_19598);var state_19604__$1 = (function (){var statearr_19606 = state_19604;(statearr_19606[(7)] = inst_19599);
return statearr_19606;
})();var statearr_19607_19692 = state_19604__$1;(statearr_19607_19692[(2)] = null);
(statearr_19607_19692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19605 === (3)))
{var inst_19602 = (state_19604[(2)]);var state_19604__$1 = state_19604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19604__$1,inst_19602);
} else
{if((state_val_19605 === (2)))
{var state_19604__$1 = state_19604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19604__$1,(4),onModel_19687);
} else
{if((state_val_19605 === (1)))
{var state_19604__$1 = state_19604;var statearr_19608_19693 = state_19604__$1;(statearr_19608_19693[(2)] = null);
(statearr_19608_19693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___19691,onView_19686,onModel_19687,onSys_19688))
;return ((function (switch__6187__auto__,c__6202__auto___19691,onView_19686,onModel_19687,onSys_19688){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19612 = [null,null,null,null,null,null,null,null];(statearr_19612[(0)] = state_machine__6188__auto__);
(statearr_19612[(1)] = (1));
return statearr_19612;
});
var state_machine__6188__auto____1 = (function (state_19604){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19613){if((e19613 instanceof Object))
{var ex__6191__auto__ = e19613;var statearr_19614_19694 = state_19604;(statearr_19614_19694[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19695 = state_19604;
state_19604 = G__19695;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19604){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___19691,onView_19686,onModel_19687,onSys_19688))
})();var state__6204__auto__ = (function (){var statearr_19615 = f__6203__auto__.call(null);(statearr_19615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___19691);
return statearr_19615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___19691,onView_19686,onModel_19687,onSys_19688))
);
var c__6202__auto___19696 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___19696,onView_19686,onModel_19687,onSys_19688){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___19696,onView_19686,onModel_19687,onSys_19688){
return (function (state_19660){var state_val_19661 = (state_19660[(1)]);if((state_val_19661 === (7)))
{var inst_19655 = (state_19660[(2)]);var inst_19619 = inst_19655;var state_19660__$1 = (function (){var statearr_19662 = state_19660;(statearr_19662[(7)] = inst_19619);
return statearr_19662;
})();var statearr_19663_19697 = state_19660__$1;(statearr_19663_19697[(2)] = null);
(statearr_19663_19697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (1)))
{var inst_19616 = [new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022)];var inst_19617 = [onModel_19687,onSys_19688,cljs.core.PersistentHashMap.EMPTY];var inst_19618 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19616,inst_19617);var inst_19619 = inst_19618;var state_19660__$1 = (function (){var statearr_19664 = state_19660;(statearr_19664[(7)] = inst_19619);
return statearr_19664;
})();var statearr_19665_19698 = state_19660__$1;(statearr_19665_19698[(2)] = null);
(statearr_19665_19698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (4)))
{var inst_19627 = (state_19660[(8)]);var inst_19625 = (state_19660[(2)]);var inst_19626 = cljs.core.nth.call(null,inst_19625,(0),null);var inst_19627__$1 = cljs.core.nth.call(null,inst_19625,(1),null);var inst_19631 = cljs.core._EQ_.call(null,onSys_19688,inst_19627__$1);var state_19660__$1 = (function (){var statearr_19666 = state_19660;(statearr_19666[(9)] = inst_19626);
(statearr_19666[(8)] = inst_19627__$1);
return statearr_19666;
})();if(inst_19631)
{var statearr_19667_19699 = state_19660__$1;(statearr_19667_19699[(1)] = (5));
} else
{var statearr_19668_19700 = state_19660__$1;(statearr_19668_19700[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (13)))
{var inst_19651 = (state_19660[(2)]);var state_19660__$1 = state_19660;var statearr_19669_19701 = state_19660__$1;(statearr_19669_19701[(2)] = inst_19651);
(statearr_19669_19701[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (6)))
{var inst_19627 = (state_19660[(8)]);var inst_19638 = cljs.core._EQ_.call(null,onView_19686,inst_19627);var state_19660__$1 = state_19660;if(inst_19638)
{var statearr_19670_19702 = state_19660__$1;(statearr_19670_19702[(1)] = (8));
} else
{var statearr_19671_19703 = state_19660__$1;(statearr_19671_19703[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (3)))
{var inst_19658 = (state_19660[(2)]);var state_19660__$1 = state_19660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19660__$1,inst_19658);
} else
{if((state_val_19661 === (12)))
{var inst_19627 = (state_19660[(8)]);var inst_19647 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19627));var inst_19648 = (new Error(inst_19647));var inst_19649 = (function(){throw inst_19648})();var state_19660__$1 = state_19660;var statearr_19672_19704 = state_19660__$1;(statearr_19672_19704[(2)] = inst_19649);
(statearr_19672_19704[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (2)))
{var inst_19622 = [onView_19686,onSys_19688];var inst_19623 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19622,null));var state_19660__$1 = state_19660;return cljs.core.async.ioc_alts_BANG_.call(null,state_19660__$1,(4),inst_19623);
} else
{if((state_val_19661 === (11)))
{var inst_19619 = (state_19660[(7)]);var state_19660__$1 = state_19660;var statearr_19673_19705 = state_19660__$1;(statearr_19673_19705[(2)] = inst_19619);
(statearr_19673_19705[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (9)))
{var inst_19627 = (state_19660[(8)]);var inst_19644 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_19627);var state_19660__$1 = state_19660;if(inst_19644)
{var statearr_19674_19706 = state_19660__$1;(statearr_19674_19706[(1)] = (11));
} else
{var statearr_19675_19707 = state_19660__$1;(statearr_19675_19707[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (5)))
{var inst_19626 = (state_19660[(9)]);var inst_19619 = (state_19660[(7)]);var inst_19634 = cljs.core.nth.call(null,inst_19626,(0),null);var inst_19635 = cljs.core.nth.call(null,inst_19626,(1),null);var inst_19636 = app.stock.abstract$.onSystem.call(null,inst_19634,inst_19635,inst_19619);var state_19660__$1 = state_19660;var statearr_19676_19708 = state_19660__$1;(statearr_19676_19708[(2)] = inst_19636);
(statearr_19676_19708[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (10)))
{var inst_19653 = (state_19660[(2)]);var state_19660__$1 = state_19660;var statearr_19677_19709 = state_19660__$1;(statearr_19677_19709[(2)] = inst_19653);
(statearr_19677_19709[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (8)))
{var inst_19626 = (state_19660[(9)]);var inst_19619 = (state_19660[(7)]);var inst_19640 = (inst_19626[(0)]);var inst_19641 = (inst_19626[(1)]);var inst_19642 = app.stock.abstract$.onViewCommand.call(null,inst_19640,inst_19641,inst_19619);var state_19660__$1 = state_19660;var statearr_19678_19710 = state_19660__$1;(statearr_19678_19710[(2)] = inst_19642);
(statearr_19678_19710[(1)] = (10));
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
}
}
}
});})(c__6202__auto___19696,onView_19686,onModel_19687,onSys_19688))
;return ((function (switch__6187__auto__,c__6202__auto___19696,onView_19686,onModel_19687,onSys_19688){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19682 = [null,null,null,null,null,null,null,null,null,null];(statearr_19682[(0)] = state_machine__6188__auto__);
(statearr_19682[(1)] = (1));
return statearr_19682;
});
var state_machine__6188__auto____1 = (function (state_19660){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19683){if((e19683 instanceof Object))
{var ex__6191__auto__ = e19683;var statearr_19684_19711 = state_19660;(statearr_19684_19711[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19712 = state_19660;
state_19660 = G__19712;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19660){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___19696,onView_19686,onModel_19687,onSys_19688))
})();var state__6204__auto__ = (function (){var statearr_19685 = f__6203__auto__.call(null);(statearr_19685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___19696);
return statearr_19685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___19696,onView_19686,onModel_19687,onSys_19688))
);
return null;
});
app.stock.main.main.call(null);
