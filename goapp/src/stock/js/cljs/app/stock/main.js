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
app.stock.main.main = (function main(){var onView_48774 = cljs.core.async.chan.call(null);var onModel_48775 = cljs.core.async.chan.call(null);var onSys_48776 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_48774,onModel_48775,onSys_48776){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_48774,onModel_48775,onSys_48776){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_48774,onModel_48775,onSys_48776){
return (function (state_48687){var state_val_48688 = (state_48687[(1)]);if((state_val_48688 === (2)))
{var inst_48685 = (state_48687[(2)]);var state_48687__$1 = state_48687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48687__$1,inst_48685);
} else
{if((state_val_48688 === (1)))
{var state_48687__$1 = state_48687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48687__$1,(2),onView_48774,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_48774,onModel_48775,onSys_48776))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_48774,onModel_48775,onSys_48776){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48692 = [null,null,null,null,null,null,null];(statearr_48692[(0)] = state_machine__6188__auto__);
(statearr_48692[(1)] = (1));
return statearr_48692;
});
var state_machine__6188__auto____1 = (function (state_48687){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48693){if((e48693 instanceof Object))
{var ex__6191__auto__ = e48693;var statearr_48694_48777 = state_48687;(statearr_48694_48777[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48778 = state_48687;
state_48687 = G__48778;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48687){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_48774,onModel_48775,onSys_48776))
})();var state__6204__auto__ = (function (){var statearr_48695 = f__6203__auto__.call(null);(statearr_48695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_48774,onModel_48775,onSys_48776))
);
return c__6202__auto__;
});})(onView_48774,onModel_48775,onSys_48776))
);
var c__6202__auto___48779 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48779,onView_48774,onModel_48775,onSys_48776){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48779,onView_48774,onModel_48775,onSys_48776){
return (function (state_48704){var state_val_48705 = (state_48704[(1)]);if((state_val_48705 === (4)))
{var inst_48698 = (state_48704[(2)]);var inst_48699 = common.onModel.onNext(inst_48698);var state_48704__$1 = (function (){var statearr_48706 = state_48704;(statearr_48706[(7)] = inst_48699);
return statearr_48706;
})();var statearr_48707_48780 = state_48704__$1;(statearr_48707_48780[(2)] = null);
(statearr_48707_48780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48705 === (3)))
{var inst_48702 = (state_48704[(2)]);var state_48704__$1 = state_48704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48704__$1,inst_48702);
} else
{if((state_val_48705 === (2)))
{var state_48704__$1 = state_48704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48704__$1,(4),onModel_48775);
} else
{if((state_val_48705 === (1)))
{var state_48704__$1 = state_48704;var statearr_48708_48781 = state_48704__$1;(statearr_48708_48781[(2)] = null);
(statearr_48708_48781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___48779,onView_48774,onModel_48775,onSys_48776))
;return ((function (switch__6187__auto__,c__6202__auto___48779,onView_48774,onModel_48775,onSys_48776){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48712 = [null,null,null,null,null,null,null,null];(statearr_48712[(0)] = state_machine__6188__auto__);
(statearr_48712[(1)] = (1));
return statearr_48712;
});
var state_machine__6188__auto____1 = (function (state_48704){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48704);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48713){if((e48713 instanceof Object))
{var ex__6191__auto__ = e48713;var statearr_48714_48782 = state_48704;(statearr_48714_48782[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48783 = state_48704;
state_48704 = G__48783;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48704){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48779,onView_48774,onModel_48775,onSys_48776))
})();var state__6204__auto__ = (function (){var statearr_48715 = f__6203__auto__.call(null);(statearr_48715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48779);
return statearr_48715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48779,onView_48774,onModel_48775,onSys_48776))
);
var c__6202__auto___48784 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48784,onView_48774,onModel_48775,onSys_48776){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48784,onView_48774,onModel_48775,onSys_48776){
return (function (state_48752){var state_val_48753 = (state_48752[(1)]);if((state_val_48753 === (7)))
{var inst_48747 = (state_48752[(2)]);var inst_48719 = inst_48747;var state_48752__$1 = (function (){var statearr_48754 = state_48752;(statearr_48754[(7)] = inst_48719);
return statearr_48754;
})();var statearr_48755_48785 = state_48752__$1;(statearr_48755_48785[(2)] = null);
(statearr_48755_48785[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (1)))
{var inst_48716 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_48717 = [onView_48774,onModel_48775,onSys_48776,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_48718 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_48716,inst_48717);var inst_48719 = inst_48718;var state_48752__$1 = (function (){var statearr_48756 = state_48752;(statearr_48756[(7)] = inst_48719);
return statearr_48756;
})();var statearr_48757_48786 = state_48752__$1;(statearr_48757_48786[(2)] = null);
(statearr_48757_48786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (4)))
{var inst_48727 = (state_48752[(8)]);var inst_48725 = (state_48752[(2)]);var inst_48726 = cljs.core.nth.call(null,inst_48725,(0),null);var inst_48727__$1 = cljs.core.nth.call(null,inst_48725,(1),null);var inst_48731 = cljs.core._EQ_.call(null,onSys_48776,inst_48727__$1);var state_48752__$1 = (function (){var statearr_48758 = state_48752;(statearr_48758[(8)] = inst_48727__$1);
(statearr_48758[(9)] = inst_48726);
return statearr_48758;
})();if(inst_48731)
{var statearr_48759_48787 = state_48752__$1;(statearr_48759_48787[(1)] = (5));
} else
{var statearr_48760_48788 = state_48752__$1;(statearr_48760_48788[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (6)))
{var inst_48727 = (state_48752[(8)]);var inst_48738 = cljs.core._EQ_.call(null,onView_48774,inst_48727);var state_48752__$1 = state_48752;if(inst_48738)
{var statearr_48761_48789 = state_48752__$1;(statearr_48761_48789[(1)] = (8));
} else
{var statearr_48762_48790 = state_48752__$1;(statearr_48762_48790[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (3)))
{var inst_48750 = (state_48752[(2)]);var state_48752__$1 = state_48752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48752__$1,inst_48750);
} else
{if((state_val_48753 === (2)))
{var inst_48722 = [onView_48774,onSys_48776];var inst_48723 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48722,null));var state_48752__$1 = state_48752;return cljs.core.async.ioc_alts_BANG_.call(null,state_48752__$1,(4),inst_48723);
} else
{if((state_val_48753 === (9)))
{var inst_48719 = (state_48752[(7)]);var state_48752__$1 = state_48752;var statearr_48763_48791 = state_48752__$1;(statearr_48763_48791[(2)] = inst_48719);
(statearr_48763_48791[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (5)))
{var inst_48719 = (state_48752[(7)]);var inst_48726 = (state_48752[(9)]);var inst_48734 = cljs.core.nth.call(null,inst_48726,(0),null);var inst_48735 = cljs.core.nth.call(null,inst_48726,(1),null);var inst_48736 = app.stock.abstract$.onSystem.call(null,inst_48734,inst_48735,inst_48719);var state_48752__$1 = state_48752;var statearr_48764_48792 = state_48752__$1;(statearr_48764_48792[(2)] = inst_48736);
(statearr_48764_48792[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (10)))
{var inst_48745 = (state_48752[(2)]);var state_48752__$1 = state_48752;var statearr_48765_48793 = state_48752__$1;(statearr_48765_48793[(2)] = inst_48745);
(statearr_48765_48793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48753 === (8)))
{var inst_48719 = (state_48752[(7)]);var inst_48726 = (state_48752[(9)]);var inst_48740 = (inst_48726[(0)]);var inst_48741 = (inst_48726[(1)]);var inst_48742 = app.stock.abstract$.onViewCommand.call(null,inst_48740,inst_48741,inst_48719);var state_48752__$1 = state_48752;var statearr_48766_48794 = state_48752__$1;(statearr_48766_48794[(2)] = inst_48742);
(statearr_48766_48794[(1)] = (10));
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
});})(c__6202__auto___48784,onView_48774,onModel_48775,onSys_48776))
;return ((function (switch__6187__auto__,c__6202__auto___48784,onView_48774,onModel_48775,onSys_48776){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48770 = [null,null,null,null,null,null,null,null,null,null];(statearr_48770[(0)] = state_machine__6188__auto__);
(statearr_48770[(1)] = (1));
return statearr_48770;
});
var state_machine__6188__auto____1 = (function (state_48752){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48771){if((e48771 instanceof Object))
{var ex__6191__auto__ = e48771;var statearr_48772_48795 = state_48752;(statearr_48772_48795[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48796 = state_48752;
state_48752 = G__48796;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48752){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48784,onView_48774,onModel_48775,onSys_48776))
})();var state__6204__auto__ = (function (){var statearr_48773 = f__6203__auto__.call(null);(statearr_48773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48784);
return statearr_48773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48784,onView_48774,onModel_48775,onSys_48776))
);
return null;
});
app.stock.main.main.call(null);
