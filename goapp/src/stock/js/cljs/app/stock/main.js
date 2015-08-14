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
app.stock.main.main = (function main(){var onView_16822 = cljs.core.async.chan.call(null);var onModel_16823 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_16822,onModel_16823){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_16822,onModel_16823){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_16822,onModel_16823){
return (function (state_16736){var state_val_16737 = (state_16736[(1)]);if((state_val_16737 === (2)))
{var inst_16734 = (state_16736[(2)]);var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16736__$1,inst_16734);
} else
{if((state_val_16737 === (1)))
{var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16736__$1,(2),onView_16822,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_16822,onModel_16823))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_16822,onModel_16823){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16741 = [null,null,null,null,null,null,null];(statearr_16741[(0)] = state_machine__6188__auto__);
(statearr_16741[(1)] = (1));
return statearr_16741;
});
var state_machine__6188__auto____1 = (function (state_16736){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16736);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16742){if((e16742 instanceof Object))
{var ex__6191__auto__ = e16742;var statearr_16743_16824 = state_16736;(statearr_16743_16824[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16825 = state_16736;
state_16736 = G__16825;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16736){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_16822,onModel_16823))
})();var state__6204__auto__ = (function (){var statearr_16744 = f__6203__auto__.call(null);(statearr_16744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_16744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_16822,onModel_16823))
);
return c__6202__auto__;
});})(onView_16822,onModel_16823))
);
var c__6202__auto___16826 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___16826,onView_16822,onModel_16823){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___16826,onView_16822,onModel_16823){
return (function (state_16753){var state_val_16754 = (state_16753[(1)]);if((state_val_16754 === (4)))
{var inst_16747 = (state_16753[(2)]);var inst_16748 = common.onModel(inst_16747);var state_16753__$1 = (function (){var statearr_16755 = state_16753;(statearr_16755[(7)] = inst_16748);
return statearr_16755;
})();var statearr_16756_16827 = state_16753__$1;(statearr_16756_16827[(2)] = null);
(statearr_16756_16827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16754 === (3)))
{var inst_16751 = (state_16753[(2)]);var state_16753__$1 = state_16753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16753__$1,inst_16751);
} else
{if((state_val_16754 === (2)))
{var state_16753__$1 = state_16753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16753__$1,(4),onModel_16823);
} else
{if((state_val_16754 === (1)))
{var state_16753__$1 = state_16753;var statearr_16757_16828 = state_16753__$1;(statearr_16757_16828[(2)] = null);
(statearr_16757_16828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___16826,onView_16822,onModel_16823))
;return ((function (switch__6187__auto__,c__6202__auto___16826,onView_16822,onModel_16823){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16761 = [null,null,null,null,null,null,null,null];(statearr_16761[(0)] = state_machine__6188__auto__);
(statearr_16761[(1)] = (1));
return statearr_16761;
});
var state_machine__6188__auto____1 = (function (state_16753){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16753);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16762){if((e16762 instanceof Object))
{var ex__6191__auto__ = e16762;var statearr_16763_16829 = state_16753;(statearr_16763_16829[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16830 = state_16753;
state_16753 = G__16830;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16753){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___16826,onView_16822,onModel_16823))
})();var state__6204__auto__ = (function (){var statearr_16764 = f__6203__auto__.call(null);(statearr_16764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___16826);
return statearr_16764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___16826,onView_16822,onModel_16823))
);
var c__6202__auto___16831 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___16831,onView_16822,onModel_16823){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___16831,onView_16822,onModel_16823){
return (function (state_16800){var state_val_16801 = (state_16800[(1)]);if((state_val_16801 === (7)))
{var inst_16795 = (state_16800[(2)]);var inst_16768 = inst_16795;var state_16800__$1 = (function (){var statearr_16802 = state_16800;(statearr_16802[(7)] = inst_16768);
return statearr_16802;
})();var statearr_16803_16832 = state_16800__$1;(statearr_16803_16832[(2)] = null);
(statearr_16803_16832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (1)))
{var inst_16765 = [new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_16766 = [onModel_16823];var inst_16767 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16765,inst_16766);var inst_16768 = inst_16767;var state_16800__$1 = (function (){var statearr_16804 = state_16800;(statearr_16804[(7)] = inst_16768);
return statearr_16804;
})();var statearr_16805_16833 = state_16800__$1;(statearr_16805_16833[(2)] = null);
(statearr_16805_16833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (4)))
{var inst_16776 = (state_16800[(8)]);var inst_16774 = (state_16800[(2)]);var inst_16775 = cljs.core.nth.call(null,inst_16774,(0),null);var inst_16776__$1 = cljs.core.nth.call(null,inst_16774,(1),null);var inst_16780 = cljs.core._EQ_.call(null,onView_16822,inst_16776__$1);var state_16800__$1 = (function (){var statearr_16806 = state_16800;(statearr_16806[(9)] = inst_16775);
(statearr_16806[(8)] = inst_16776__$1);
return statearr_16806;
})();if(inst_16780)
{var statearr_16807_16834 = state_16800__$1;(statearr_16807_16834[(1)] = (5));
} else
{var statearr_16808_16835 = state_16800__$1;(statearr_16808_16835[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (6)))
{var inst_16776 = (state_16800[(8)]);var inst_16786 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_16776);var state_16800__$1 = state_16800;if(inst_16786)
{var statearr_16809_16836 = state_16800__$1;(statearr_16809_16836[(1)] = (8));
} else
{var statearr_16810_16837 = state_16800__$1;(statearr_16810_16837[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (3)))
{var inst_16798 = (state_16800[(2)]);var state_16800__$1 = state_16800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16800__$1,inst_16798);
} else
{if((state_val_16801 === (2)))
{var inst_16771 = [onView_16822];var inst_16772 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16771,null));var state_16800__$1 = state_16800;return cljs.core.async.ioc_alts_BANG_.call(null,state_16800__$1,(4),inst_16772);
} else
{if((state_val_16801 === (9)))
{var inst_16776 = (state_16800[(8)]);var inst_16789 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16776));var inst_16790 = (new Error(inst_16789));var inst_16791 = (function(){throw inst_16790})();var state_16800__$1 = state_16800;var statearr_16811_16838 = state_16800__$1;(statearr_16811_16838[(2)] = inst_16791);
(statearr_16811_16838[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (5)))
{var inst_16768 = (state_16800[(7)]);var inst_16775 = (state_16800[(9)]);var inst_16782 = (inst_16775[(0)]);var inst_16783 = (inst_16775[(1)]);var inst_16784 = app.stock.abstract$.onViewCommand.call(null,inst_16782,inst_16783,inst_16768);var state_16800__$1 = state_16800;var statearr_16812_16839 = state_16800__$1;(statearr_16812_16839[(2)] = inst_16784);
(statearr_16812_16839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (10)))
{var inst_16793 = (state_16800[(2)]);var state_16800__$1 = state_16800;var statearr_16813_16840 = state_16800__$1;(statearr_16813_16840[(2)] = inst_16793);
(statearr_16813_16840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16801 === (8)))
{var inst_16768 = (state_16800[(7)]);var state_16800__$1 = state_16800;var statearr_16814_16841 = state_16800__$1;(statearr_16814_16841[(2)] = inst_16768);
(statearr_16814_16841[(1)] = (10));
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
});})(c__6202__auto___16831,onView_16822,onModel_16823))
;return ((function (switch__6187__auto__,c__6202__auto___16831,onView_16822,onModel_16823){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16818 = [null,null,null,null,null,null,null,null,null,null];(statearr_16818[(0)] = state_machine__6188__auto__);
(statearr_16818[(1)] = (1));
return statearr_16818;
});
var state_machine__6188__auto____1 = (function (state_16800){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16800);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16819){if((e16819 instanceof Object))
{var ex__6191__auto__ = e16819;var statearr_16820_16842 = state_16800;(statearr_16820_16842[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16843 = state_16800;
state_16800 = G__16843;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16800){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___16831,onView_16822,onModel_16823))
})();var state__6204__auto__ = (function (){var statearr_16821 = f__6203__auto__.call(null);(statearr_16821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___16831);
return statearr_16821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___16831,onView_16822,onModel_16823))
);
return null;
});
app.stock.main.main.call(null);
