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
test.ann.test_train = (function test_train(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_9896){var state_val_9897 = (state_9896[(1)]);if((state_val_9897 === (4)))
{var inst_9866 = (state_9896[(7)]);var inst_9891 = (state_9896[(2)]);var inst_9861 = inst_9866;var state_9896__$1 = (function (){var statearr_9898 = state_9896;(statearr_9898[(8)] = inst_9861);
(statearr_9898[(9)] = inst_9891);
return statearr_9898;
})();var statearr_9899_9910 = state_9896__$1;(statearr_9899_9910[(2)] = null);
(statearr_9899_9910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9897 === (3)))
{var inst_9894 = (state_9896[(2)]);var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9896__$1,inst_9894);
} else
{if((state_val_9897 === (2)))
{var inst_9866 = (state_9896[(7)]);var inst_9861 = (state_9896[(8)]);var inst_9864 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));var inst_9865 = ai.ann.Train.call(null,inst_9861,inst_9864,(1),0.01);var inst_9866__$1 = cljs.core.nth.call(null,inst_9865,(0),null);var inst_9867 = cljs.core.nth.call(null,inst_9865,(1),null);var inst_9868 = console.log(inst_9867);var inst_9869 = cljs.core.list(cljs.core.list((0),(0)));var inst_9870 = ai.ann.FeedForward.call(null,inst_9869,inst_9866__$1);var inst_9871 = cljs.core.reverse.call(null,inst_9870);var inst_9872 = cljs.core.pr_str.call(null,inst_9871);var inst_9873 = console.log(inst_9872);var inst_9874 = cljs.core.list(cljs.core.list((0),(1)));var inst_9875 = ai.ann.FeedForward.call(null,inst_9874,inst_9866__$1);var inst_9876 = cljs.core.reverse.call(null,inst_9875);var inst_9877 = cljs.core.pr_str.call(null,inst_9876);var inst_9878 = console.log(inst_9877);var inst_9879 = cljs.core.list(cljs.core.list((1),(1)));var inst_9880 = ai.ann.FeedForward.call(null,inst_9879,inst_9866__$1);var inst_9881 = cljs.core.reverse.call(null,inst_9880);var inst_9882 = cljs.core.pr_str.call(null,inst_9881);var inst_9883 = console.log(inst_9882);var inst_9884 = cljs.core.list(cljs.core.list((1),(0)));var inst_9885 = ai.ann.FeedForward.call(null,inst_9884,inst_9866__$1);var inst_9886 = cljs.core.reverse.call(null,inst_9885);var inst_9887 = cljs.core.pr_str.call(null,inst_9886);var inst_9888 = console.log(inst_9887);var inst_9889 = cljs.core.async.timeout.call(null,(30));var state_9896__$1 = (function (){var statearr_9900 = state_9896;(statearr_9900[(7)] = inst_9866__$1);
(statearr_9900[(10)] = inst_9873);
(statearr_9900[(11)] = inst_9888);
(statearr_9900[(12)] = inst_9868);
(statearr_9900[(13)] = inst_9883);
(statearr_9900[(14)] = inst_9878);
return statearr_9900;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9896__$1,(4),inst_9889);
} else
{if((state_val_9897 === (1)))
{var inst_9845 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9846 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9845);var inst_9847 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9846);var inst_9848 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_9849 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9848);var inst_9850 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_9851 = cljs.core._conj.call(null,inst_9849,inst_9850);var inst_9852 = cljs.core._conj.call(null,inst_9847,inst_9851);var inst_9853 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9854 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9853);var inst_9855 = cljs.core._conj.call(null,inst_9852,inst_9854);var inst_9856 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9857 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9856);var inst_9858 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9859 = cljs.core._conj.call(null,inst_9857,inst_9858);var inst_9860 = cljs.core._conj.call(null,inst_9855,inst_9859);var inst_9861 = inst_9860;var state_9896__$1 = (function (){var statearr_9901 = state_9896;(statearr_9901[(8)] = inst_9861);
return statearr_9901;
})();var statearr_9902_9911 = state_9896__$1;(statearr_9902_9911[(2)] = null);
(statearr_9902_9911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9906[(0)] = state_machine__6189__auto__);
(statearr_9906[(1)] = (1));
return statearr_9906;
});
var state_machine__6189__auto____1 = (function (state_9896){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9896);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9907){if((e9907 instanceof Object))
{var ex__6192__auto__ = e9907;var statearr_9908_9912 = state_9896;(statearr_9908_9912[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9913 = state_9896;
state_9896 = G__9913;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9896){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_9909 = f__6204__auto__.call(null);(statearr_9909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_2 = (function test_train_2(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_10030){var state_val_10031 = (state_10030[(1)]);if((state_val_10031 === (4)))
{var inst_10000 = (state_10030[(7)]);var inst_10025 = (state_10030[(2)]);var inst_9995 = inst_10000;var state_10030__$1 = (function (){var statearr_10032 = state_10030;(statearr_10032[(8)] = inst_10025);
(statearr_10032[(9)] = inst_9995);
return statearr_10032;
})();var statearr_10033_10044 = state_10030__$1;(statearr_10033_10044[(2)] = null);
(statearr_10033_10044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (3)))
{var inst_10028 = (state_10030[(2)]);var state_10030__$1 = state_10030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else
{if((state_val_10031 === (2)))
{var inst_10000 = (state_10030[(7)]);var inst_9995 = (state_10030[(9)]);var inst_9998 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));var inst_9999 = ai.ann.Train.call(null,inst_9995,inst_9998,(1),0.01);var inst_10000__$1 = cljs.core.nth.call(null,inst_9999,(0),null);var inst_10001 = cljs.core.nth.call(null,inst_9999,(1),null);var inst_10002 = console.log(inst_10001);var inst_10003 = cljs.core.list(cljs.core.list((0),(0)));var inst_10004 = ai.ann.FeedForward.call(null,inst_10003,inst_10000__$1);var inst_10005 = cljs.core.reverse.call(null,inst_10004);var inst_10006 = cljs.core.pr_str.call(null,inst_10005);var inst_10007 = console.log(inst_10006);var inst_10008 = cljs.core.list(cljs.core.list((0),(1)));var inst_10009 = ai.ann.FeedForward.call(null,inst_10008,inst_10000__$1);var inst_10010 = cljs.core.reverse.call(null,inst_10009);var inst_10011 = cljs.core.pr_str.call(null,inst_10010);var inst_10012 = console.log(inst_10011);var inst_10013 = cljs.core.list(cljs.core.list((1),(1)));var inst_10014 = ai.ann.FeedForward.call(null,inst_10013,inst_10000__$1);var inst_10015 = cljs.core.reverse.call(null,inst_10014);var inst_10016 = cljs.core.pr_str.call(null,inst_10015);var inst_10017 = console.log(inst_10016);var inst_10018 = cljs.core.list(cljs.core.list((1),(0)));var inst_10019 = ai.ann.FeedForward.call(null,inst_10018,inst_10000__$1);var inst_10020 = cljs.core.reverse.call(null,inst_10019);var inst_10021 = cljs.core.pr_str.call(null,inst_10020);var inst_10022 = console.log(inst_10021);var inst_10023 = cljs.core.async.timeout.call(null,(100));var state_10030__$1 = (function (){var statearr_10034 = state_10030;(statearr_10034[(10)] = inst_10017);
(statearr_10034[(7)] = inst_10000__$1);
(statearr_10034[(11)] = inst_10002);
(statearr_10034[(12)] = inst_10012);
(statearr_10034[(13)] = inst_10022);
(statearr_10034[(14)] = inst_10007);
return statearr_10034;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(4),inst_10023);
} else
{if((state_val_10031 === (1)))
{var inst_9979 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_9980 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9979);var inst_9981 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_9982 = cljs.core._conj.call(null,inst_9980,inst_9981);var inst_9983 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9982);var inst_9984 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9985 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_9984);var inst_9986 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9987 = cljs.core._conj.call(null,inst_9985,inst_9986);var inst_9988 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9989 = cljs.core._conj.call(null,inst_9987,inst_9988);var inst_9990 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9991 = cljs.core._conj.call(null,inst_9989,inst_9990);var inst_9992 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_9993 = cljs.core._conj.call(null,inst_9991,inst_9992);var inst_9994 = cljs.core._conj.call(null,inst_9983,inst_9993);var inst_9995 = inst_9994;var state_10030__$1 = (function (){var statearr_10035 = state_10030;(statearr_10035[(9)] = inst_9995);
return statearr_10035;
})();var statearr_10036_10045 = state_10030__$1;(statearr_10036_10045[(2)] = null);
(statearr_10036_10045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10040[(0)] = state_machine__6189__auto__);
(statearr_10040[(1)] = (1));
return statearr_10040;
});
var state_machine__6189__auto____1 = (function (state_10030){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10041){if((e10041 instanceof Object))
{var ex__6192__auto__ = e10041;var statearr_10042_10046 = state_10030;(statearr_10042_10046[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10047 = state_10030;
state_10030 = G__10047;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10043 = f__6204__auto__.call(null);(statearr_10043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_xor = (function test_train_xor(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_10148){var state_val_10149 = (state_10148[(1)]);if((state_val_10149 === (4)))
{var inst_10118 = (state_10148[(7)]);var inst_10143 = (state_10148[(2)]);var inst_10113 = inst_10118;var state_10148__$1 = (function (){var statearr_10150 = state_10148;(statearr_10150[(8)] = inst_10143);
(statearr_10150[(9)] = inst_10113);
return statearr_10150;
})();var statearr_10151_10162 = state_10148__$1;(statearr_10151_10162[(2)] = null);
(statearr_10151_10162[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10149 === (3)))
{var inst_10146 = (state_10148[(2)]);var state_10148__$1 = state_10148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10148__$1,inst_10146);
} else
{if((state_val_10149 === (2)))
{var inst_10118 = (state_10148[(7)]);var inst_10113 = (state_10148[(9)]);var inst_10116 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_10117 = ai.ann.Train.call(null,inst_10113,inst_10116,(1),0.01);var inst_10118__$1 = cljs.core.nth.call(null,inst_10117,(0),null);var inst_10119 = cljs.core.nth.call(null,inst_10117,(1),null);var inst_10120 = console.log(inst_10119);var inst_10121 = cljs.core.list(cljs.core.list((0),(0)));var inst_10122 = ai.ann.FeedForward.call(null,inst_10121,inst_10118__$1);var inst_10123 = cljs.core.reverse.call(null,inst_10122);var inst_10124 = cljs.core.pr_str.call(null,inst_10123);var inst_10125 = console.log(inst_10124);var inst_10126 = cljs.core.list(cljs.core.list((0),(1)));var inst_10127 = ai.ann.FeedForward.call(null,inst_10126,inst_10118__$1);var inst_10128 = cljs.core.reverse.call(null,inst_10127);var inst_10129 = cljs.core.pr_str.call(null,inst_10128);var inst_10130 = console.log(inst_10129);var inst_10131 = cljs.core.list(cljs.core.list((1),(1)));var inst_10132 = ai.ann.FeedForward.call(null,inst_10131,inst_10118__$1);var inst_10133 = cljs.core.reverse.call(null,inst_10132);var inst_10134 = cljs.core.pr_str.call(null,inst_10133);var inst_10135 = console.log(inst_10134);var inst_10136 = cljs.core.list(cljs.core.list((1),(0)));var inst_10137 = ai.ann.FeedForward.call(null,inst_10136,inst_10118__$1);var inst_10138 = cljs.core.reverse.call(null,inst_10137);var inst_10139 = cljs.core.pr_str.call(null,inst_10138);var inst_10140 = console.log(inst_10139);var inst_10141 = cljs.core.async.timeout.call(null,(1000));var state_10148__$1 = (function (){var statearr_10152 = state_10148;(statearr_10152[(10)] = inst_10125);
(statearr_10152[(11)] = inst_10135);
(statearr_10152[(7)] = inst_10118__$1);
(statearr_10152[(12)] = inst_10130);
(statearr_10152[(13)] = inst_10140);
(statearr_10152[(14)] = inst_10120);
return statearr_10152;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10148__$1,(4),inst_10141);
} else
{if((state_val_10149 === (1)))
{var inst_10105 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10106 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10105);var inst_10107 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10106);var inst_10108 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10109 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10108);var inst_10110 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10111 = cljs.core._conj.call(null,inst_10109,inst_10110);var inst_10112 = cljs.core._conj.call(null,inst_10107,inst_10111);var inst_10113 = inst_10112;var state_10148__$1 = (function (){var statearr_10153 = state_10148;(statearr_10153[(9)] = inst_10113);
return statearr_10153;
})();var statearr_10154_10163 = state_10148__$1;(statearr_10154_10163[(2)] = null);
(statearr_10154_10163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10158[(0)] = state_machine__6189__auto__);
(statearr_10158[(1)] = (1));
return statearr_10158;
});
var state_machine__6189__auto____1 = (function (state_10148){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10148);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10159){if((e10159 instanceof Object))
{var ex__6192__auto__ = e10159;var statearr_10160_10164 = state_10148;(statearr_10160_10164[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10148);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10165 = state_10148;
state_10148 = G__10165;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10148){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10161 = f__6204__auto__.call(null);(statearr_10161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
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
