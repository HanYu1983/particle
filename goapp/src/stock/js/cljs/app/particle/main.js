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
return (function (state_56681){var state_val_56682 = (state_56681[(1)]);if((state_val_56682 === (2)))
{var inst_56679 = (state_56681[(2)]);var state_56681__$1 = state_56681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56681__$1,inst_56679);
} else
{if((state_val_56682 === (1)))
{var state_56681__$1 = state_56681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56681__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56686 = [null,null,null,null,null,null,null];(statearr_56686[(0)] = state_machine__6188__auto__);
(statearr_56686[(1)] = (1));
return statearr_56686;
});
var state_machine__6188__auto____1 = (function (state_56681){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56687){if((e56687 instanceof Object))
{var ex__6191__auto__ = e56687;var statearr_56688_56869 = state_56681;(statearr_56688_56869[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56870 = state_56681;
state_56681 = G__56870;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56681){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_56689 = f__6203__auto__.call(null);(statearr_56689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_56689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___56871 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___56871,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___56871,onView,onModel,onTick,mspf){
return (function (state_56703){var state_val_56704 = (state_56703[(1)]);if((state_val_56704 === (4)))
{var inst_56693 = (state_56703[(2)]);var inst_56694 = cljs.core.nth.call(null,inst_56693,(0),null);var inst_56695 = cljs.core.nth.call(null,inst_56693,(1),null);var inst_56696 = cljs.core.nth.call(null,inst_56693,(2),null);var inst_56697 = [inst_56694,inst_56695,inst_56696];var inst_56698 = common.onModel.onNext(inst_56697);var state_56703__$1 = (function (){var statearr_56705 = state_56703;(statearr_56705[(7)] = inst_56698);
return statearr_56705;
})();var statearr_56706_56872 = state_56703__$1;(statearr_56706_56872[(2)] = null);
(statearr_56706_56872[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56704 === (3)))
{var inst_56701 = (state_56703[(2)]);var state_56703__$1 = state_56703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56703__$1,inst_56701);
} else
{if((state_val_56704 === (2)))
{var state_56703__$1 = state_56703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56703__$1,(4),onModel);
} else
{if((state_val_56704 === (1)))
{var state_56703__$1 = state_56703;var statearr_56707_56873 = state_56703__$1;(statearr_56707_56873[(2)] = null);
(statearr_56707_56873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___56871,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___56871,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56711 = [null,null,null,null,null,null,null,null];(statearr_56711[(0)] = state_machine__6188__auto__);
(statearr_56711[(1)] = (1));
return statearr_56711;
});
var state_machine__6188__auto____1 = (function (state_56703){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56712){if((e56712 instanceof Object))
{var ex__6191__auto__ = e56712;var statearr_56713_56874 = state_56703;(statearr_56713_56874[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56875 = state_56703;
state_56703 = G__56875;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56703){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___56871,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_56714 = f__6203__auto__.call(null);(statearr_56714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___56871);
return statearr_56714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___56871,onView,onModel,onTick,mspf))
);
var c__6202__auto___56876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___56876,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___56876,onView,onModel,onTick,mspf){
return (function (state_56733){var state_val_56734 = (state_56733[(1)]);if((state_val_56734 === (5)))
{var inst_56717 = (state_56733[(7)]);var inst_56724 = (state_56733[(8)]);var inst_56728 = (state_56733[(2)]);var tmp56735 = inst_56717;var inst_56717__$1 = tmp56735;var inst_56718 = inst_56724;var state_56733__$1 = (function (){var statearr_56736 = state_56733;(statearr_56736[(7)] = inst_56717__$1);
(statearr_56736[(9)] = inst_56728);
(statearr_56736[(10)] = inst_56718);
return statearr_56736;
})();var statearr_56737_56877 = state_56733__$1;(statearr_56737_56877[(2)] = null);
(statearr_56737_56877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56734 === (4)))
{var inst_56724 = (state_56733[(8)]);var inst_56718 = (state_56733[(10)]);var inst_56722 = (state_56733[(2)]);var inst_56723 = (new Date());var inst_56724__$1 = inst_56723.getTime();var inst_56725 = (inst_56724__$1 - inst_56718);var inst_56726 = (inst_56725 / (1000));var state_56733__$1 = (function (){var statearr_56738 = state_56733;(statearr_56738[(8)] = inst_56724__$1);
(statearr_56738[(11)] = inst_56722);
return statearr_56738;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56733__$1,(5),onTick,inst_56726);
} else
{if((state_val_56734 === (3)))
{var inst_56731 = (state_56733[(2)]);var state_56733__$1 = state_56733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56733__$1,inst_56731);
} else
{if((state_val_56734 === (2)))
{var inst_56717 = (state_56733[(7)]);var inst_56720 = cljs.core.async.timeout.call(null,inst_56717);var state_56733__$1 = state_56733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56733__$1,(4),inst_56720);
} else
{if((state_val_56734 === (1)))
{var inst_56715 = (new Date());var inst_56716 = inst_56715.getTime();var inst_56717 = mspf;var inst_56718 = inst_56716;var state_56733__$1 = (function (){var statearr_56739 = state_56733;(statearr_56739[(7)] = inst_56717);
(statearr_56739[(10)] = inst_56718);
return statearr_56739;
})();var statearr_56740_56878 = state_56733__$1;(statearr_56740_56878[(2)] = null);
(statearr_56740_56878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___56876,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___56876,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56744 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56744[(0)] = state_machine__6188__auto__);
(statearr_56744[(1)] = (1));
return statearr_56744;
});
var state_machine__6188__auto____1 = (function (state_56733){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56733);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56745){if((e56745 instanceof Object))
{var ex__6191__auto__ = e56745;var statearr_56746_56879 = state_56733;(statearr_56746_56879[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56880 = state_56733;
state_56733 = G__56880;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56733){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___56876,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_56747 = f__6203__auto__.call(null);(statearr_56747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___56876);
return statearr_56747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___56876,onView,onModel,onTick,mspf))
);
var c__6202__auto___56881 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___56881,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___56881,onView,onModel,onTick,mspf){
return (function (state_56791){var state_val_56792 = (state_56791[(1)]);if((state_val_56792 === (7)))
{var inst_56786 = (state_56791[(2)]);var inst_56757 = inst_56786;var state_56791__$1 = (function (){var statearr_56793 = state_56791;(statearr_56793[(7)] = inst_56757);
return statearr_56793;
})();var statearr_56794_56882 = state_56791__$1;(statearr_56794_56882[(2)] = null);
(statearr_56794_56882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (1)))
{var inst_56748 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_56749 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_56750 = cljs.core.List.EMPTY;var inst_56751 = [inst_56750];var inst_56752 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_56749,inst_56751);var inst_56753 = [(0),(0)];var inst_56754 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56753,null));var inst_56755 = [(0),inst_56752,inst_56754,onModel];var inst_56756 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_56748,inst_56755);var inst_56757 = inst_56756;var state_56791__$1 = (function (){var statearr_56795 = state_56791;(statearr_56795[(7)] = inst_56757);
return statearr_56795;
})();var statearr_56796_56883 = state_56791__$1;(statearr_56796_56883[(2)] = null);
(statearr_56796_56883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (4)))
{var inst_56765 = (state_56791[(8)]);var inst_56763 = (state_56791[(2)]);var inst_56764 = cljs.core.nth.call(null,inst_56763,(0),null);var inst_56765__$1 = cljs.core.nth.call(null,inst_56763,(1),null);var inst_56769 = cljs.core._EQ_.call(null,onTick,inst_56765__$1);var state_56791__$1 = (function (){var statearr_56797 = state_56791;(statearr_56797[(9)] = inst_56764);
(statearr_56797[(8)] = inst_56765__$1);
return statearr_56797;
})();if(inst_56769)
{var statearr_56798_56884 = state_56791__$1;(statearr_56798_56884[(1)] = (5));
} else
{var statearr_56799_56885 = state_56791__$1;(statearr_56799_56885[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (6)))
{var inst_56765 = (state_56791[(8)]);var inst_56777 = cljs.core._EQ_.call(null,onView,inst_56765);var state_56791__$1 = state_56791;if(inst_56777)
{var statearr_56800_56886 = state_56791__$1;(statearr_56800_56886[(1)] = (8));
} else
{var statearr_56801_56887 = state_56791__$1;(statearr_56801_56887[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (3)))
{var inst_56789 = (state_56791[(2)]);var state_56791__$1 = state_56791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56791__$1,inst_56789);
} else
{if((state_val_56792 === (2)))
{var inst_56760 = [onView,onTick];var inst_56761 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56760,null));var state_56791__$1 = state_56791;return cljs.core.async.ioc_alts_BANG_.call(null,state_56791__$1,(4),inst_56761);
} else
{if((state_val_56792 === (9)))
{var inst_56757 = (state_56791[(7)]);var state_56791__$1 = state_56791;var statearr_56802_56888 = state_56791__$1;(statearr_56802_56888[(2)] = inst_56757);
(statearr_56802_56888[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (5)))
{var inst_56757 = (state_56791[(7)]);var inst_56764 = (state_56791[(9)]);var inst_56771 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_56772 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56771,null));var inst_56773 = cljs.core.partial.call(null,tool.particle.update,inst_56764);var inst_56774 = cljs.core.update_in.call(null,inst_56757,inst_56772,inst_56773);var inst_56775 = app.particle.main.draw.call(null,inst_56774);var state_56791__$1 = state_56791;var statearr_56803_56889 = state_56791__$1;(statearr_56803_56889[(2)] = inst_56775);
(statearr_56803_56889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (10)))
{var inst_56784 = (state_56791[(2)]);var state_56791__$1 = state_56791;var statearr_56804_56890 = state_56791__$1;(statearr_56804_56890[(2)] = inst_56784);
(statearr_56804_56890[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56792 === (8)))
{var inst_56757 = (state_56791[(7)]);var inst_56764 = (state_56791[(9)]);var inst_56779 = (inst_56764[(0)]);var inst_56780 = (inst_56764[(1)]);var inst_56781 = app.particle.abstract$.onViewCommand.call(null,inst_56779,inst_56780,inst_56757);var state_56791__$1 = state_56791;var statearr_56805_56891 = state_56791__$1;(statearr_56805_56891[(2)] = inst_56781);
(statearr_56805_56891[(1)] = (10));
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
});})(c__6202__auto___56881,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___56881,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56809 = [null,null,null,null,null,null,null,null,null,null];(statearr_56809[(0)] = state_machine__6188__auto__);
(statearr_56809[(1)] = (1));
return statearr_56809;
});
var state_machine__6188__auto____1 = (function (state_56791){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56791);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56810){if((e56810 instanceof Object))
{var ex__6191__auto__ = e56810;var statearr_56811_56892 = state_56791;(statearr_56811_56892[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56893 = state_56791;
state_56791 = G__56893;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56791){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___56881,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_56812 = f__6203__auto__.call(null);(statearr_56812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___56881);
return statearr_56812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___56881,onView,onModel,onTick,mspf))
);
var c__6202__auto___56894 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___56894,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___56894,onView,onModel,onTick,mspf){
return (function (state_56857){var state_val_56858 = (state_56857[(1)]);if((state_val_56858 === (5)))
{var inst_56855 = (state_56857[(2)]);var state_56857__$1 = state_56857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56857__$1,inst_56855);
} else
{if((state_val_56858 === (4)))
{var inst_56825 = (state_56857[(2)]);var inst_56832 = [(0),(0),(0)];var inst_56833 = [(1),(0),(1),(1)];var inst_56834 = [(10),(20)];var inst_56835 = [(0),(0),(0)];var inst_56836 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_56837 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_56838 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_56839 = [inst_56836,inst_56837,inst_56838];var inst_56840 = {"position":inst_56832,"color":inst_56833,"size":inst_56834,"vel":inst_56835,"formulaList":inst_56839};var inst_56841 = [inst_56840];var inst_56842 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_56841};var inst_56843 = [(0),(0),(1),(1)];var inst_56844 = [(30),(10)];var inst_56845 = [(10),(10),(0)];var inst_56846 = [(0),(0),(0)];var inst_56847 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_56848 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_56849 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_56850 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_56851 = [inst_56847,inst_56848,inst_56849,inst_56850];var inst_56852 = {"id":"x1","emit":inst_56842,"color":inst_56843,"size":inst_56844,"pos":inst_56845,"vel":inst_56846,"formulaList":inst_56851};var inst_56853 = ["edit-particle",inst_56852];var state_56857__$1 = (function (){var statearr_56859 = state_56857;(statearr_56859[(7)] = inst_56825);
return statearr_56859;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56857__$1,(5),onView,inst_56853);
} else
{if((state_val_56858 === (3)))
{var inst_56822 = (state_56857[(2)]);var inst_56823 = cljs.core.async.timeout.call(null,(1100));var state_56857__$1 = (function (){var statearr_56860 = state_56857;(statearr_56860[(8)] = inst_56822);
return statearr_56860;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56857__$1,(4),inst_56823);
} else
{if((state_val_56858 === (2)))
{var inst_56815 = (state_56857[(2)]);var inst_56818 = [(10),(10),(0)];var inst_56819 = {"id":"x1","pos":inst_56818};var inst_56820 = ["edit-particle",inst_56819];var state_56857__$1 = (function (){var statearr_56861 = state_56857;(statearr_56861[(9)] = inst_56815);
return statearr_56861;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56857__$1,(3),onView,inst_56820);
} else
{if((state_val_56858 === (1)))
{var inst_56813 = cljs.core.async.timeout.call(null,(1000));var state_56857__$1 = state_56857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56857__$1,(2),inst_56813);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___56894,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___56894,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56865 = [null,null,null,null,null,null,null,null,null,null];(statearr_56865[(0)] = state_machine__6188__auto__);
(statearr_56865[(1)] = (1));
return statearr_56865;
});
var state_machine__6188__auto____1 = (function (state_56857){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56857);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56866){if((e56866 instanceof Object))
{var ex__6191__auto__ = e56866;var statearr_56867_56895 = state_56857;(statearr_56867_56895[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56896 = state_56857;
state_56857 = G__56896;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56857){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___56894,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_56868 = f__6203__auto__.call(null);(statearr_56868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___56894);
return statearr_56868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___56894,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
