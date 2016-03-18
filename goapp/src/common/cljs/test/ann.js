// Compiled by ClojureScript 0.0-2268
goog.provide('test.ann');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('cljs.core.async');
goog.require('ai.ann');
goog.require('cljs.core.async');
test.ann.test_neuron_value = (function test_neuron_value(){return console.log(ai.ann.NeuronValue.call(null,cljs.core.list((-1),(1),(1)),cljs.core.list(0.5,0.5,0.5)));
});
test.ann.test_reverse = (function test_reverse(){return console.log(cljs.core.pr_str.call(null,ai.ann.ReverseWeight.call(null,cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)))));
});
test.ann.test_errorvalueoutout = (function test_errorvalueoutout(){return console.log(cljs.core.pr_str.call(null,ai.ann.ErrorValueOutput.call(null,cljs.core.list(0.5,0.5),cljs.core.list((0),(1)))));
});
test.ann.test_errorvaluehidden = (function test_errorvaluehidden(){return console.log(cljs.core.pr_str.call(null,ai.ann.ErrorValueHidden.call(null,cljs.core.list((-1),0.5,0.5),cljs.core.list(-0.125,0.125),cljs.core.list(cljs.core.list(0.1,0.4),cljs.core.list(0.2,0.5),cljs.core.list(0.3,0.6)))));
});
test.ann.test_adjlayer = (function test_adjlayer(){return console.log(cljs.core.pr_str.call(null,ai.ann.AdjustWeightsLayer.call(null,(1),(1),cljs.core.list(0.5,0.5),cljs.core.list(-0.125,0.125))));
});
test.ann.test_errors = (function test_errors(){return console.log(cljs.core.pr_str.call(null,ai.ann.Errors.call(null,cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2,0.3,0.4,0.5,0.6),cljs.core.list(0.5,0.6)),cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6),cljs.core.list(0.7,0.8,0.9),cljs.core.list(0.7,0.8,0.9),cljs.core.list(0.7,0.8,0.9)),cljs.core.list(cljs.core.list(0.6,0.7,0.8,0.9,0.1,0.2),cljs.core.list(0.6,0.7,0.8,0.9,0.1,0.2))),cljs.core.list((1),(1)))));
});
test.ann.test_adjwes = (function test_adjwes(){return console.log(cljs.core.pr_str.call(null,ai.ann.AdjustWeights.call(null,(1),(1),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2,0.5),cljs.core.list(0.5)),ai.ann.Errors.call(null,cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2,0.5),cljs.core.list(0.5)),cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)),cljs.core.list(cljs.core.list(0.6,0.7,0.8))),cljs.core.list((1))))));
});
test.ann.test_newwes = (function test_newwes(){return console.log(cljs.core.pr_str.call(null,ai.ann.NewWeights.call(null,cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)),cljs.core.list(cljs.core.list(0.6,0.7,0.8))),cljs.core.list(cljs.core.list(cljs.core.list(-0.004000000000000001,(0),0.004000000000000001),cljs.core.list(-0.009375,(0),0.009375)),cljs.core.list(cljs.core.list(-0.125,0.025,0.0625))))));
});
test.ann.test_ff = (function test_ff(){return console.log(cljs.core.pr_str.call(null,ai.ann.FeedForward.call(null,cljs.core.list(cljs.core.list((0),(0))),cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6),cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)),cljs.core.list(cljs.core.list(0.6,0.7,0.8,0.9,0.1),cljs.core.list(0.6,0.7,0.8,0.9,0.1))))));
});
test.ann.test_nowerror = (function test_nowerror(){return console.log(cljs.core.pr_str.call(null,ai.ann.NowError.call(null,cljs.core.list(0.5,0.5),cljs.core.list((1),(0)))));
});
/**
* 這個會訓練比較久，因為節點比較複雜
*/
test.ann.test_train = (function test_train(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_22772){var state_val_22773 = (state_22772[(1)]);if((state_val_22773 === (4)))
{var inst_22742 = (state_22772[(7)]);var inst_22767 = (state_22772[(2)]);var inst_22737 = inst_22742;var state_22772__$1 = (function (){var statearr_22774 = state_22772;(statearr_22774[(8)] = inst_22767);
(statearr_22774[(9)] = inst_22737);
return statearr_22774;
})();var statearr_22775_22786 = state_22772__$1;(statearr_22775_22786[(2)] = null);
(statearr_22775_22786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22773 === (3)))
{var inst_22770 = (state_22772[(2)]);var state_22772__$1 = state_22772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22772__$1,inst_22770);
} else
{if((state_val_22773 === (2)))
{var inst_22742 = (state_22772[(7)]);var inst_22737 = (state_22772[(9)]);var inst_22740 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));var inst_22741 = ai.ann.Train.call(null,inst_22737,inst_22740,(1),0.01);var inst_22742__$1 = cljs.core.nth.call(null,inst_22741,(0),null);var inst_22743 = cljs.core.nth.call(null,inst_22741,(1),null);var inst_22744 = console.log(inst_22743);var inst_22745 = cljs.core.list(cljs.core.list((0),(0)));var inst_22746 = ai.ann.FeedForward.call(null,inst_22745,inst_22742__$1);var inst_22747 = cljs.core.reverse.call(null,inst_22746);var inst_22748 = cljs.core.pr_str.call(null,inst_22747);var inst_22749 = console.log(inst_22748);var inst_22750 = cljs.core.list(cljs.core.list((0),(1)));var inst_22751 = ai.ann.FeedForward.call(null,inst_22750,inst_22742__$1);var inst_22752 = cljs.core.reverse.call(null,inst_22751);var inst_22753 = cljs.core.pr_str.call(null,inst_22752);var inst_22754 = console.log(inst_22753);var inst_22755 = cljs.core.list(cljs.core.list((1),(1)));var inst_22756 = ai.ann.FeedForward.call(null,inst_22755,inst_22742__$1);var inst_22757 = cljs.core.reverse.call(null,inst_22756);var inst_22758 = cljs.core.pr_str.call(null,inst_22757);var inst_22759 = console.log(inst_22758);var inst_22760 = cljs.core.list(cljs.core.list((1),(0)));var inst_22761 = ai.ann.FeedForward.call(null,inst_22760,inst_22742__$1);var inst_22762 = cljs.core.reverse.call(null,inst_22761);var inst_22763 = cljs.core.pr_str.call(null,inst_22762);var inst_22764 = console.log(inst_22763);var inst_22765 = cljs.core.async.timeout.call(null,(30));var state_22772__$1 = (function (){var statearr_22776 = state_22772;(statearr_22776[(10)] = inst_22744);
(statearr_22776[(7)] = inst_22742__$1);
(statearr_22776[(11)] = inst_22754);
(statearr_22776[(12)] = inst_22749);
(statearr_22776[(13)] = inst_22759);
(statearr_22776[(14)] = inst_22764);
return statearr_22776;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22772__$1,(4),inst_22765);
} else
{if((state_val_22773 === (1)))
{var inst_22721 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22722 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22721);var inst_22723 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22722);var inst_22724 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_22725 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22724);var inst_22726 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_22727 = cljs.core._conj.call(null,inst_22725,inst_22726);var inst_22728 = cljs.core._conj.call(null,inst_22723,inst_22727);var inst_22729 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22730 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22729);var inst_22731 = cljs.core._conj.call(null,inst_22728,inst_22730);var inst_22732 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22733 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22732);var inst_22734 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22735 = cljs.core._conj.call(null,inst_22733,inst_22734);var inst_22736 = cljs.core._conj.call(null,inst_22731,inst_22735);var inst_22737 = inst_22736;var state_22772__$1 = (function (){var statearr_22777 = state_22772;(statearr_22777[(9)] = inst_22737);
return statearr_22777;
})();var statearr_22778_22787 = state_22772__$1;(statearr_22778_22787[(2)] = null);
(statearr_22778_22787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22782[(0)] = state_machine__6188__auto__);
(statearr_22782[(1)] = (1));
return statearr_22782;
});
var state_machine__6188__auto____1 = (function (state_22772){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22772);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22783){if((e22783 instanceof Object))
{var ex__6191__auto__ = e22783;var statearr_22784_22788 = state_22772;(statearr_22784_22788[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22789 = state_22772;
state_22772 = G__22789;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22772){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22785 = f__6203__auto__.call(null);(statearr_22785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.ann.test_train_2 = (function test_train_2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_22906){var state_val_22907 = (state_22906[(1)]);if((state_val_22907 === (4)))
{var inst_22876 = (state_22906[(7)]);var inst_22901 = (state_22906[(2)]);var inst_22871 = inst_22876;var state_22906__$1 = (function (){var statearr_22908 = state_22906;(statearr_22908[(8)] = inst_22901);
(statearr_22908[(9)] = inst_22871);
return statearr_22908;
})();var statearr_22909_22920 = state_22906__$1;(statearr_22909_22920[(2)] = null);
(statearr_22909_22920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22907 === (3)))
{var inst_22904 = (state_22906[(2)]);var state_22906__$1 = state_22906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22906__$1,inst_22904);
} else
{if((state_val_22907 === (2)))
{var inst_22876 = (state_22906[(7)]);var inst_22871 = (state_22906[(9)]);var inst_22874 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));var inst_22875 = ai.ann.Train.call(null,inst_22871,inst_22874,(1),0.01);var inst_22876__$1 = cljs.core.nth.call(null,inst_22875,(0),null);var inst_22877 = cljs.core.nth.call(null,inst_22875,(1),null);var inst_22878 = console.log(inst_22877);var inst_22879 = cljs.core.list(cljs.core.list((0),(0)));var inst_22880 = ai.ann.FeedForward.call(null,inst_22879,inst_22876__$1);var inst_22881 = cljs.core.reverse.call(null,inst_22880);var inst_22882 = cljs.core.pr_str.call(null,inst_22881);var inst_22883 = console.log(inst_22882);var inst_22884 = cljs.core.list(cljs.core.list((0),(1)));var inst_22885 = ai.ann.FeedForward.call(null,inst_22884,inst_22876__$1);var inst_22886 = cljs.core.reverse.call(null,inst_22885);var inst_22887 = cljs.core.pr_str.call(null,inst_22886);var inst_22888 = console.log(inst_22887);var inst_22889 = cljs.core.list(cljs.core.list((1),(1)));var inst_22890 = ai.ann.FeedForward.call(null,inst_22889,inst_22876__$1);var inst_22891 = cljs.core.reverse.call(null,inst_22890);var inst_22892 = cljs.core.pr_str.call(null,inst_22891);var inst_22893 = console.log(inst_22892);var inst_22894 = cljs.core.list(cljs.core.list((1),(0)));var inst_22895 = ai.ann.FeedForward.call(null,inst_22894,inst_22876__$1);var inst_22896 = cljs.core.reverse.call(null,inst_22895);var inst_22897 = cljs.core.pr_str.call(null,inst_22896);var inst_22898 = console.log(inst_22897);var inst_22899 = cljs.core.async.timeout.call(null,(100));var state_22906__$1 = (function (){var statearr_22910 = state_22906;(statearr_22910[(10)] = inst_22893);
(statearr_22910[(11)] = inst_22878);
(statearr_22910[(7)] = inst_22876__$1);
(statearr_22910[(12)] = inst_22898);
(statearr_22910[(13)] = inst_22883);
(statearr_22910[(14)] = inst_22888);
return statearr_22910;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22906__$1,(4),inst_22899);
} else
{if((state_val_22907 === (1)))
{var inst_22855 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_22856 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22855);var inst_22857 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_22858 = cljs.core._conj.call(null,inst_22856,inst_22857);var inst_22859 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22858);var inst_22860 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22861 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22860);var inst_22862 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22863 = cljs.core._conj.call(null,inst_22861,inst_22862);var inst_22864 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22865 = cljs.core._conj.call(null,inst_22863,inst_22864);var inst_22866 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22867 = cljs.core._conj.call(null,inst_22865,inst_22866);var inst_22868 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22869 = cljs.core._conj.call(null,inst_22867,inst_22868);var inst_22870 = cljs.core._conj.call(null,inst_22859,inst_22869);var inst_22871 = inst_22870;var state_22906__$1 = (function (){var statearr_22911 = state_22906;(statearr_22911[(9)] = inst_22871);
return statearr_22911;
})();var statearr_22912_22921 = state_22906__$1;(statearr_22912_22921[(2)] = null);
(statearr_22912_22921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22916[(0)] = state_machine__6188__auto__);
(statearr_22916[(1)] = (1));
return statearr_22916;
});
var state_machine__6188__auto____1 = (function (state_22906){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22906);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22917){if((e22917 instanceof Object))
{var ex__6191__auto__ = e22917;var statearr_22918_22922 = state_22906;(statearr_22918_22922[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22923 = state_22906;
state_22906 = G__22923;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22906){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22919 = f__6203__auto__.call(null);(statearr_22919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.ann.test_train_xor = (function test_train_xor(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_23024){var state_val_23025 = (state_23024[(1)]);if((state_val_23025 === (4)))
{var inst_22994 = (state_23024[(7)]);var inst_23019 = (state_23024[(2)]);var inst_22989 = inst_22994;var state_23024__$1 = (function (){var statearr_23026 = state_23024;(statearr_23026[(8)] = inst_23019);
(statearr_23026[(9)] = inst_22989);
return statearr_23026;
})();var statearr_23027_23038 = state_23024__$1;(statearr_23027_23038[(2)] = null);
(statearr_23027_23038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23025 === (3)))
{var inst_23022 = (state_23024[(2)]);var state_23024__$1 = state_23024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23024__$1,inst_23022);
} else
{if((state_val_23025 === (2)))
{var inst_22994 = (state_23024[(7)]);var inst_22989 = (state_23024[(9)]);var inst_22992 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_22993 = ai.ann.Train.call(null,inst_22989,inst_22992,(1),0.01);var inst_22994__$1 = cljs.core.nth.call(null,inst_22993,(0),null);var inst_22995 = cljs.core.nth.call(null,inst_22993,(1),null);var inst_22996 = console.log(inst_22995);var inst_22997 = cljs.core.list(cljs.core.list((0),(0)));var inst_22998 = ai.ann.FeedForward.call(null,inst_22997,inst_22994__$1);var inst_22999 = cljs.core.reverse.call(null,inst_22998);var inst_23000 = cljs.core.pr_str.call(null,inst_22999);var inst_23001 = console.log(inst_23000);var inst_23002 = cljs.core.list(cljs.core.list((0),(1)));var inst_23003 = ai.ann.FeedForward.call(null,inst_23002,inst_22994__$1);var inst_23004 = cljs.core.reverse.call(null,inst_23003);var inst_23005 = cljs.core.pr_str.call(null,inst_23004);var inst_23006 = console.log(inst_23005);var inst_23007 = cljs.core.list(cljs.core.list((1),(1)));var inst_23008 = ai.ann.FeedForward.call(null,inst_23007,inst_22994__$1);var inst_23009 = cljs.core.reverse.call(null,inst_23008);var inst_23010 = cljs.core.pr_str.call(null,inst_23009);var inst_23011 = console.log(inst_23010);var inst_23012 = cljs.core.list(cljs.core.list((1),(0)));var inst_23013 = ai.ann.FeedForward.call(null,inst_23012,inst_22994__$1);var inst_23014 = cljs.core.reverse.call(null,inst_23013);var inst_23015 = cljs.core.pr_str.call(null,inst_23014);var inst_23016 = console.log(inst_23015);var inst_23017 = cljs.core.async.timeout.call(null,(1000));var state_23024__$1 = (function (){var statearr_23028 = state_23024;(statearr_23028[(10)] = inst_23011);
(statearr_23028[(11)] = inst_23016);
(statearr_23028[(12)] = inst_22996);
(statearr_23028[(13)] = inst_23001);
(statearr_23028[(7)] = inst_22994__$1);
(statearr_23028[(14)] = inst_23006);
return statearr_23028;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23024__$1,(4),inst_23017);
} else
{if((state_val_23025 === (1)))
{var inst_22981 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22982 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22981);var inst_22983 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22982);var inst_22984 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22985 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_22984);var inst_22986 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_22987 = cljs.core._conj.call(null,inst_22985,inst_22986);var inst_22988 = cljs.core._conj.call(null,inst_22983,inst_22987);var inst_22989 = inst_22988;var state_23024__$1 = (function (){var statearr_23029 = state_23024;(statearr_23029[(9)] = inst_22989);
return statearr_23029;
})();var statearr_23030_23039 = state_23024__$1;(statearr_23030_23039[(2)] = null);
(statearr_23030_23039[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23034[(0)] = state_machine__6188__auto__);
(statearr_23034[(1)] = (1));
return statearr_23034;
});
var state_machine__6188__auto____1 = (function (state_23024){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23024);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23035){if((e23035 instanceof Object))
{var ex__6191__auto__ = e23035;var statearr_23036_23040 = state_23024;(statearr_23036_23040[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23041 = state_23024;
state_23024 = G__23041;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23024){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_23037 = f__6203__auto__.call(null);(statearr_23037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_23037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.ann.test_basic = (function test_basic(){test.ann.test_neuron_value.call(null);
test.ann.test_reverse.call(null);
test.ann.test_errorvalueoutout.call(null);
test.ann.test_errorvaluehidden.call(null);
test.ann.test_adjlayer.call(null);
test.ann.test_errors.call(null);
test.ann.test_adjwes.call(null);
test.ann.test_newwes.call(null);
test.ann.test_ff.call(null);
return test.ann.test_nowerror.call(null);
});
test.ann.test_train_xor.call(null);
