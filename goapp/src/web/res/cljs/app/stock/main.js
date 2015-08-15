// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.main.main = (function main(){var onView_10837 = cljs.core.async.chan.call(null);var onModel_10838 = cljs.core.async.chan.call(null);var onSys_10839 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_10837,onModel_10838,onSys_10839){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_10837,onModel_10838,onSys_10839){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_10837,onModel_10838,onSys_10839){
return (function (state_10750){var state_val_10751 = (state_10750[(1)]);if((state_val_10751 === (2)))
{var inst_10748 = (state_10750[(2)]);var state_10750__$1 = state_10750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10750__$1,inst_10748);
} else
{if((state_val_10751 === (1)))
{var state_10750__$1 = state_10750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10750__$1,(2),onView_10837,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_10837,onModel_10838,onSys_10839))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_10837,onModel_10838,onSys_10839){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10755 = [null,null,null,null,null,null,null];(statearr_10755[(0)] = state_machine__6188__auto__);
(statearr_10755[(1)] = (1));
return statearr_10755;
});
var state_machine__6188__auto____1 = (function (state_10750){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10756){if((e10756 instanceof Object))
{var ex__6191__auto__ = e10756;var statearr_10757_10840 = state_10750;(statearr_10757_10840[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10841 = state_10750;
state_10750 = G__10841;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10750){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_10837,onModel_10838,onSys_10839))
})();var state__6204__auto__ = (function (){var statearr_10758 = f__6203__auto__.call(null);(statearr_10758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_10837,onModel_10838,onSys_10839))
);
return c__6202__auto__;
});})(onView_10837,onModel_10838,onSys_10839))
);
var c__6202__auto___10842 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___10842,onView_10837,onModel_10838,onSys_10839){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___10842,onView_10837,onModel_10838,onSys_10839){
return (function (state_10767){var state_val_10768 = (state_10767[(1)]);if((state_val_10768 === (4)))
{var inst_10761 = (state_10767[(2)]);var inst_10762 = common.onModel.onNext(inst_10761);var state_10767__$1 = (function (){var statearr_10769 = state_10767;(statearr_10769[(7)] = inst_10762);
return statearr_10769;
})();var statearr_10770_10843 = state_10767__$1;(statearr_10770_10843[(2)] = null);
(statearr_10770_10843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10768 === (3)))
{var inst_10765 = (state_10767[(2)]);var state_10767__$1 = state_10767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10767__$1,inst_10765);
} else
{if((state_val_10768 === (2)))
{var state_10767__$1 = state_10767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10767__$1,(4),onModel_10838);
} else
{if((state_val_10768 === (1)))
{var state_10767__$1 = state_10767;var statearr_10771_10844 = state_10767__$1;(statearr_10771_10844[(2)] = null);
(statearr_10771_10844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___10842,onView_10837,onModel_10838,onSys_10839))
;return ((function (switch__6187__auto__,c__6202__auto___10842,onView_10837,onModel_10838,onSys_10839){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10775 = [null,null,null,null,null,null,null,null];(statearr_10775[(0)] = state_machine__6188__auto__);
(statearr_10775[(1)] = (1));
return statearr_10775;
});
var state_machine__6188__auto____1 = (function (state_10767){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10776){if((e10776 instanceof Object))
{var ex__6191__auto__ = e10776;var statearr_10777_10845 = state_10767;(statearr_10777_10845[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10846 = state_10767;
state_10767 = G__10846;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10767){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___10842,onView_10837,onModel_10838,onSys_10839))
})();var state__6204__auto__ = (function (){var statearr_10778 = f__6203__auto__.call(null);(statearr_10778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___10842);
return statearr_10778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___10842,onView_10837,onModel_10838,onSys_10839))
);
var c__6202__auto___10847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___10847,onView_10837,onModel_10838,onSys_10839){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___10847,onView_10837,onModel_10838,onSys_10839){
return (function (state_10815){var state_val_10816 = (state_10815[(1)]);if((state_val_10816 === (7)))
{var inst_10810 = (state_10815[(2)]);var inst_10782 = inst_10810;var state_10815__$1 = (function (){var statearr_10817 = state_10815;(statearr_10817[(7)] = inst_10782);
return statearr_10817;
})();var statearr_10818_10848 = state_10815__$1;(statearr_10818_10848[(2)] = null);
(statearr_10818_10848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (1)))
{var inst_10779 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022)];var inst_10780 = [onView_10837,onModel_10838,onSys_10839,cljs.core.PersistentHashMap.EMPTY];var inst_10781 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10779,inst_10780);var inst_10782 = inst_10781;var state_10815__$1 = (function (){var statearr_10819 = state_10815;(statearr_10819[(7)] = inst_10782);
return statearr_10819;
})();var statearr_10820_10849 = state_10815__$1;(statearr_10820_10849[(2)] = null);
(statearr_10820_10849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (4)))
{var inst_10790 = (state_10815[(8)]);var inst_10788 = (state_10815[(2)]);var inst_10789 = cljs.core.nth.call(null,inst_10788,(0),null);var inst_10790__$1 = cljs.core.nth.call(null,inst_10788,(1),null);var inst_10794 = cljs.core._EQ_.call(null,onSys_10839,inst_10790__$1);var state_10815__$1 = (function (){var statearr_10821 = state_10815;(statearr_10821[(8)] = inst_10790__$1);
(statearr_10821[(9)] = inst_10789);
return statearr_10821;
})();if(inst_10794)
{var statearr_10822_10850 = state_10815__$1;(statearr_10822_10850[(1)] = (5));
} else
{var statearr_10823_10851 = state_10815__$1;(statearr_10823_10851[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (6)))
{var inst_10790 = (state_10815[(8)]);var inst_10801 = cljs.core._EQ_.call(null,onView_10837,inst_10790);var state_10815__$1 = state_10815;if(inst_10801)
{var statearr_10824_10852 = state_10815__$1;(statearr_10824_10852[(1)] = (8));
} else
{var statearr_10825_10853 = state_10815__$1;(statearr_10825_10853[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (3)))
{var inst_10813 = (state_10815[(2)]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else
{if((state_val_10816 === (2)))
{var inst_10785 = [onView_10837,onSys_10839];var inst_10786 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10785,null));var state_10815__$1 = state_10815;return cljs.core.async.ioc_alts_BANG_.call(null,state_10815__$1,(4),inst_10786);
} else
{if((state_val_10816 === (9)))
{var inst_10782 = (state_10815[(7)]);var state_10815__$1 = state_10815;var statearr_10826_10854 = state_10815__$1;(statearr_10826_10854[(2)] = inst_10782);
(statearr_10826_10854[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (5)))
{var inst_10782 = (state_10815[(7)]);var inst_10789 = (state_10815[(9)]);var inst_10797 = cljs.core.nth.call(null,inst_10789,(0),null);var inst_10798 = cljs.core.nth.call(null,inst_10789,(1),null);var inst_10799 = app.stock.abstract$.onSystem.call(null,inst_10797,inst_10798,inst_10782);var state_10815__$1 = state_10815;var statearr_10827_10855 = state_10815__$1;(statearr_10827_10855[(2)] = inst_10799);
(statearr_10827_10855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (10)))
{var inst_10808 = (state_10815[(2)]);var state_10815__$1 = state_10815;var statearr_10828_10856 = state_10815__$1;(statearr_10828_10856[(2)] = inst_10808);
(statearr_10828_10856[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10816 === (8)))
{var inst_10782 = (state_10815[(7)]);var inst_10789 = (state_10815[(9)]);var inst_10803 = (inst_10789[(0)]);var inst_10804 = (inst_10789[(1)]);var inst_10805 = app.stock.abstract$.onViewCommand.call(null,inst_10803,inst_10804,inst_10782);var state_10815__$1 = state_10815;var statearr_10829_10857 = state_10815__$1;(statearr_10829_10857[(2)] = inst_10805);
(statearr_10829_10857[(1)] = (10));
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
});})(c__6202__auto___10847,onView_10837,onModel_10838,onSys_10839))
;return ((function (switch__6187__auto__,c__6202__auto___10847,onView_10837,onModel_10838,onSys_10839){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10833 = [null,null,null,null,null,null,null,null,null,null];(statearr_10833[(0)] = state_machine__6188__auto__);
(statearr_10833[(1)] = (1));
return statearr_10833;
});
var state_machine__6188__auto____1 = (function (state_10815){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10815);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10834){if((e10834 instanceof Object))
{var ex__6191__auto__ = e10834;var statearr_10835_10858 = state_10815;(statearr_10835_10858[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10859 = state_10815;
state_10815 = G__10859;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___10847,onView_10837,onModel_10838,onSys_10839))
})();var state__6204__auto__ = (function (){var statearr_10836 = f__6203__auto__.call(null);(statearr_10836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___10847);
return statearr_10836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___10847,onView_10837,onModel_10838,onSys_10839))
);
return null;
});
app.stock.main.main.call(null);
