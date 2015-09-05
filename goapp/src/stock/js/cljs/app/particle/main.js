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
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_40613){var state_val_40614 = (state_40613[(1)]);if((state_val_40614 === (2)))
{var inst_40611 = (state_40613[(2)]);var state_40613__$1 = state_40613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40613__$1,inst_40611);
} else
{if((state_val_40614 === (1)))
{var state_40613__$1 = state_40613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40613__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_40618 = [null,null,null,null,null,null,null];(statearr_40618[(0)] = state_machine__6188__auto__);
(statearr_40618[(1)] = (1));
return statearr_40618;
});
var state_machine__6188__auto____1 = (function (state_40613){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_40613);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e40619){if((e40619 instanceof Object))
{var ex__6191__auto__ = e40619;var statearr_40620_40797 = state_40613;(statearr_40620_40797[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40798 = state_40613;
state_40613 = G__40798;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_40613){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_40613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_40621 = f__6203__auto__.call(null);(statearr_40621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_40621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___40799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___40799,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___40799,onView,onModel,onTick,mspf){
return (function (state_40635){var state_val_40636 = (state_40635[(1)]);if((state_val_40636 === (4)))
{var inst_40625 = (state_40635[(2)]);var inst_40626 = cljs.core.nth.call(null,inst_40625,(0),null);var inst_40627 = cljs.core.nth.call(null,inst_40625,(1),null);var inst_40628 = cljs.core.nth.call(null,inst_40625,(2),null);var inst_40629 = [inst_40626,inst_40627,inst_40628];var inst_40630 = common.onModel.onNext(inst_40629);var state_40635__$1 = (function (){var statearr_40637 = state_40635;(statearr_40637[(7)] = inst_40630);
return statearr_40637;
})();var statearr_40638_40800 = state_40635__$1;(statearr_40638_40800[(2)] = null);
(statearr_40638_40800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40636 === (3)))
{var inst_40633 = (state_40635[(2)]);var state_40635__$1 = state_40635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40635__$1,inst_40633);
} else
{if((state_val_40636 === (2)))
{var state_40635__$1 = state_40635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40635__$1,(4),onModel);
} else
{if((state_val_40636 === (1)))
{var state_40635__$1 = state_40635;var statearr_40639_40801 = state_40635__$1;(statearr_40639_40801[(2)] = null);
(statearr_40639_40801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___40799,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___40799,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_40643 = [null,null,null,null,null,null,null,null];(statearr_40643[(0)] = state_machine__6188__auto__);
(statearr_40643[(1)] = (1));
return statearr_40643;
});
var state_machine__6188__auto____1 = (function (state_40635){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_40635);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e40644){if((e40644 instanceof Object))
{var ex__6191__auto__ = e40644;var statearr_40645_40802 = state_40635;(statearr_40645_40802[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40635);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40803 = state_40635;
state_40635 = G__40803;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_40635){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_40635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___40799,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_40646 = f__6203__auto__.call(null);(statearr_40646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___40799);
return statearr_40646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___40799,onView,onModel,onTick,mspf))
);
var c__6202__auto___40804 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___40804,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___40804,onView,onModel,onTick,mspf){
return (function (state_40665){var state_val_40666 = (state_40665[(1)]);if((state_val_40666 === (5)))
{var inst_40656 = (state_40665[(7)]);var inst_40649 = (state_40665[(8)]);var inst_40660 = (state_40665[(2)]);var tmp40667 = inst_40649;var inst_40649__$1 = tmp40667;var inst_40650 = inst_40656;var state_40665__$1 = (function (){var statearr_40668 = state_40665;(statearr_40668[(8)] = inst_40649__$1);
(statearr_40668[(9)] = inst_40650);
(statearr_40668[(10)] = inst_40660);
return statearr_40668;
})();var statearr_40669_40805 = state_40665__$1;(statearr_40669_40805[(2)] = null);
(statearr_40669_40805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40666 === (4)))
{var inst_40656 = (state_40665[(7)]);var inst_40650 = (state_40665[(9)]);var inst_40654 = (state_40665[(2)]);var inst_40655 = (new Date());var inst_40656__$1 = inst_40655.getTime();var inst_40657 = (inst_40656__$1 - inst_40650);var inst_40658 = (inst_40657 / (1000));var state_40665__$1 = (function (){var statearr_40670 = state_40665;(statearr_40670[(7)] = inst_40656__$1);
(statearr_40670[(11)] = inst_40654);
return statearr_40670;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40665__$1,(5),onTick,inst_40658);
} else
{if((state_val_40666 === (3)))
{var inst_40663 = (state_40665[(2)]);var state_40665__$1 = state_40665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40665__$1,inst_40663);
} else
{if((state_val_40666 === (2)))
{var inst_40649 = (state_40665[(8)]);var inst_40652 = cljs.core.async.timeout.call(null,inst_40649);var state_40665__$1 = state_40665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40665__$1,(4),inst_40652);
} else
{if((state_val_40666 === (1)))
{var inst_40647 = (new Date());var inst_40648 = inst_40647.getTime();var inst_40649 = mspf;var inst_40650 = inst_40648;var state_40665__$1 = (function (){var statearr_40671 = state_40665;(statearr_40671[(8)] = inst_40649);
(statearr_40671[(9)] = inst_40650);
return statearr_40671;
})();var statearr_40672_40806 = state_40665__$1;(statearr_40672_40806[(2)] = null);
(statearr_40672_40806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___40804,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___40804,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_40676 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40676[(0)] = state_machine__6188__auto__);
(statearr_40676[(1)] = (1));
return statearr_40676;
});
var state_machine__6188__auto____1 = (function (state_40665){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_40665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e40677){if((e40677 instanceof Object))
{var ex__6191__auto__ = e40677;var statearr_40678_40807 = state_40665;(statearr_40678_40807[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40808 = state_40665;
state_40665 = G__40808;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_40665){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_40665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___40804,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_40679 = f__6203__auto__.call(null);(statearr_40679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___40804);
return statearr_40679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___40804,onView,onModel,onTick,mspf))
);
var c__6202__auto___40809 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___40809,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___40809,onView,onModel,onTick,mspf){
return (function (state_40723){var state_val_40724 = (state_40723[(1)]);if((state_val_40724 === (7)))
{var inst_40718 = (state_40723[(2)]);var inst_40689 = inst_40718;var state_40723__$1 = (function (){var statearr_40725 = state_40723;(statearr_40725[(7)] = inst_40689);
return statearr_40725;
})();var statearr_40726_40810 = state_40723__$1;(statearr_40726_40810[(2)] = null);
(statearr_40726_40810[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (1)))
{var inst_40680 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_40681 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_40682 = cljs.core.List.EMPTY;var inst_40683 = [inst_40682];var inst_40684 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40681,inst_40683);var inst_40685 = [(0),(0)];var inst_40686 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40685,null));var inst_40687 = [(0),inst_40684,inst_40686,onModel];var inst_40688 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_40680,inst_40687);var inst_40689 = inst_40688;var state_40723__$1 = (function (){var statearr_40727 = state_40723;(statearr_40727[(7)] = inst_40689);
return statearr_40727;
})();var statearr_40728_40811 = state_40723__$1;(statearr_40728_40811[(2)] = null);
(statearr_40728_40811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (4)))
{var inst_40697 = (state_40723[(8)]);var inst_40695 = (state_40723[(2)]);var inst_40696 = cljs.core.nth.call(null,inst_40695,(0),null);var inst_40697__$1 = cljs.core.nth.call(null,inst_40695,(1),null);var inst_40701 = cljs.core._EQ_.call(null,onTick,inst_40697__$1);var state_40723__$1 = (function (){var statearr_40729 = state_40723;(statearr_40729[(9)] = inst_40696);
(statearr_40729[(8)] = inst_40697__$1);
return statearr_40729;
})();if(inst_40701)
{var statearr_40730_40812 = state_40723__$1;(statearr_40730_40812[(1)] = (5));
} else
{var statearr_40731_40813 = state_40723__$1;(statearr_40731_40813[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (6)))
{var inst_40697 = (state_40723[(8)]);var inst_40709 = cljs.core._EQ_.call(null,onView,inst_40697);var state_40723__$1 = state_40723;if(inst_40709)
{var statearr_40732_40814 = state_40723__$1;(statearr_40732_40814[(1)] = (8));
} else
{var statearr_40733_40815 = state_40723__$1;(statearr_40733_40815[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (3)))
{var inst_40721 = (state_40723[(2)]);var state_40723__$1 = state_40723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40723__$1,inst_40721);
} else
{if((state_val_40724 === (2)))
{var inst_40692 = [onView,onTick];var inst_40693 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40692,null));var state_40723__$1 = state_40723;return cljs.core.async.ioc_alts_BANG_.call(null,state_40723__$1,(4),inst_40693);
} else
{if((state_val_40724 === (9)))
{var inst_40689 = (state_40723[(7)]);var state_40723__$1 = state_40723;var statearr_40734_40816 = state_40723__$1;(statearr_40734_40816[(2)] = inst_40689);
(statearr_40734_40816[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (5)))
{var inst_40689 = (state_40723[(7)]);var inst_40696 = (state_40723[(9)]);var inst_40703 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_40704 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_40703,null));var inst_40705 = cljs.core.partial.call(null,tool.particle.update,inst_40696);var inst_40706 = cljs.core.update_in.call(null,inst_40689,inst_40704,inst_40705);var inst_40707 = app.particle.main.draw.call(null,inst_40706);var state_40723__$1 = state_40723;var statearr_40735_40817 = state_40723__$1;(statearr_40735_40817[(2)] = inst_40707);
(statearr_40735_40817[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (10)))
{var inst_40716 = (state_40723[(2)]);var state_40723__$1 = state_40723;var statearr_40736_40818 = state_40723__$1;(statearr_40736_40818[(2)] = inst_40716);
(statearr_40736_40818[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40724 === (8)))
{var inst_40689 = (state_40723[(7)]);var inst_40696 = (state_40723[(9)]);var inst_40711 = (inst_40696[(0)]);var inst_40712 = (inst_40696[(1)]);var inst_40713 = app.particle.abstract$.onViewCommand.call(null,inst_40711,inst_40712,inst_40689);var state_40723__$1 = state_40723;var statearr_40737_40819 = state_40723__$1;(statearr_40737_40819[(2)] = inst_40713);
(statearr_40737_40819[(1)] = (10));
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
});})(c__6202__auto___40809,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___40809,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_40741 = [null,null,null,null,null,null,null,null,null,null];(statearr_40741[(0)] = state_machine__6188__auto__);
(statearr_40741[(1)] = (1));
return statearr_40741;
});
var state_machine__6188__auto____1 = (function (state_40723){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_40723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e40742){if((e40742 instanceof Object))
{var ex__6191__auto__ = e40742;var statearr_40743_40820 = state_40723;(statearr_40743_40820[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40821 = state_40723;
state_40723 = G__40821;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_40723){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_40723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___40809,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_40744 = f__6203__auto__.call(null);(statearr_40744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___40809);
return statearr_40744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___40809,onView,onModel,onTick,mspf))
);
var c__6202__auto___40822 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___40822,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___40822,onView,onModel,onTick,mspf){
return (function (state_40785){var state_val_40786 = (state_40785[(1)]);if((state_val_40786 === (5)))
{var inst_40783 = (state_40785[(2)]);var state_40785__$1 = state_40785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40785__$1,inst_40783);
} else
{if((state_val_40786 === (4)))
{var inst_40757 = (state_40785[(2)]);var inst_40764 = [(0),(0),(0)];var inst_40765 = [(1),(0),(1),(1)];var inst_40766 = [(10),(20)];var inst_40767 = [(0),(0),3.14];var inst_40768 = {"position":inst_40764,"color":inst_40765,"size":inst_40766,"vel":inst_40767};var inst_40769 = [inst_40768];var inst_40770 = {"duration":0.05,"angle":(0),"force":(200),"range":(0),"prototype":inst_40769};var inst_40771 = [(0),(0),(1),(1)];var inst_40772 = [(30),(10)];var inst_40773 = [(10),(10),(0)];var inst_40774 = [(0),(0),(0)];var inst_40775 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_40776 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_40777 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_40778 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_40779 = [inst_40775,inst_40776,inst_40777,inst_40778];var inst_40780 = {"id":"x1","emit":inst_40770,"color":inst_40771,"size":inst_40772,"pos":inst_40773,"vel":inst_40774,"formulaList":inst_40779};var inst_40781 = ["edit-particle",inst_40780];var state_40785__$1 = (function (){var statearr_40787 = state_40785;(statearr_40787[(7)] = inst_40757);
return statearr_40787;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40785__$1,(5),onView,inst_40781);
} else
{if((state_val_40786 === (3)))
{var inst_40754 = (state_40785[(2)]);var inst_40755 = cljs.core.async.timeout.call(null,(1100));var state_40785__$1 = (function (){var statearr_40788 = state_40785;(statearr_40788[(8)] = inst_40754);
return statearr_40788;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40785__$1,(4),inst_40755);
} else
{if((state_val_40786 === (2)))
{var inst_40747 = (state_40785[(2)]);var inst_40750 = [(10),(10),(0)];var inst_40751 = {"id":"x1","pos":inst_40750};var inst_40752 = ["edit-particle",inst_40751];var state_40785__$1 = (function (){var statearr_40789 = state_40785;(statearr_40789[(9)] = inst_40747);
return statearr_40789;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40785__$1,(3),onView,inst_40752);
} else
{if((state_val_40786 === (1)))
{var inst_40745 = cljs.core.async.timeout.call(null,(1000));var state_40785__$1 = state_40785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40785__$1,(2),inst_40745);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___40822,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___40822,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_40793 = [null,null,null,null,null,null,null,null,null,null];(statearr_40793[(0)] = state_machine__6188__auto__);
(statearr_40793[(1)] = (1));
return statearr_40793;
});
var state_machine__6188__auto____1 = (function (state_40785){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_40785);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e40794){if((e40794 instanceof Object))
{var ex__6191__auto__ = e40794;var statearr_40795_40823 = state_40785;(statearr_40795_40823[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40824 = state_40785;
state_40785 = G__40824;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_40785){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_40785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___40822,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_40796 = f__6203__auto__.call(null);(statearr_40796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___40822);
return statearr_40796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___40822,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
