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
return (function (state_13699){var state_val_13700 = (state_13699[(1)]);if((state_val_13700 === (4)))
{var inst_13669 = (state_13699[(7)]);var inst_13694 = (state_13699[(2)]);var inst_13664 = inst_13669;var state_13699__$1 = (function (){var statearr_13701 = state_13699;(statearr_13701[(8)] = inst_13694);
(statearr_13701[(9)] = inst_13664);
return statearr_13701;
})();var statearr_13702_13713 = state_13699__$1;(statearr_13702_13713[(2)] = null);
(statearr_13702_13713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13700 === (3)))
{var inst_13697 = (state_13699[(2)]);var state_13699__$1 = state_13699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13699__$1,inst_13697);
} else
{if((state_val_13700 === (2)))
{var inst_13664 = (state_13699[(9)]);var inst_13669 = (state_13699[(7)]);var inst_13667 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));var inst_13668 = ai.ann.Train.call(null,inst_13664,inst_13667,(1),0.01);var inst_13669__$1 = cljs.core.nth.call(null,inst_13668,(0),null);var inst_13670 = cljs.core.nth.call(null,inst_13668,(1),null);var inst_13671 = console.log(inst_13670);var inst_13672 = cljs.core.list(cljs.core.list((0),(0)));var inst_13673 = ai.ann.FeedForward.call(null,inst_13672,inst_13669__$1);var inst_13674 = cljs.core.reverse.call(null,inst_13673);var inst_13675 = cljs.core.pr_str.call(null,inst_13674);var inst_13676 = console.log(inst_13675);var inst_13677 = cljs.core.list(cljs.core.list((0),(1)));var inst_13678 = ai.ann.FeedForward.call(null,inst_13677,inst_13669__$1);var inst_13679 = cljs.core.reverse.call(null,inst_13678);var inst_13680 = cljs.core.pr_str.call(null,inst_13679);var inst_13681 = console.log(inst_13680);var inst_13682 = cljs.core.list(cljs.core.list((1),(1)));var inst_13683 = ai.ann.FeedForward.call(null,inst_13682,inst_13669__$1);var inst_13684 = cljs.core.reverse.call(null,inst_13683);var inst_13685 = cljs.core.pr_str.call(null,inst_13684);var inst_13686 = console.log(inst_13685);var inst_13687 = cljs.core.list(cljs.core.list((1),(0)));var inst_13688 = ai.ann.FeedForward.call(null,inst_13687,inst_13669__$1);var inst_13689 = cljs.core.reverse.call(null,inst_13688);var inst_13690 = cljs.core.pr_str.call(null,inst_13689);var inst_13691 = console.log(inst_13690);var inst_13692 = cljs.core.async.timeout.call(null,(30));var state_13699__$1 = (function (){var statearr_13703 = state_13699;(statearr_13703[(10)] = inst_13671);
(statearr_13703[(11)] = inst_13681);
(statearr_13703[(12)] = inst_13691);
(statearr_13703[(13)] = inst_13686);
(statearr_13703[(14)] = inst_13676);
(statearr_13703[(7)] = inst_13669__$1);
return statearr_13703;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13699__$1,(4),inst_13692);
} else
{if((state_val_13700 === (1)))
{var inst_13648 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13649 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13648);var inst_13650 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13649);var inst_13651 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_13652 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13651);var inst_13653 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_13654 = cljs.core._conj.call(null,inst_13652,inst_13653);var inst_13655 = cljs.core._conj.call(null,inst_13650,inst_13654);var inst_13656 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13657 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13656);var inst_13658 = cljs.core._conj.call(null,inst_13655,inst_13657);var inst_13659 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13660 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13659);var inst_13661 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13662 = cljs.core._conj.call(null,inst_13660,inst_13661);var inst_13663 = cljs.core._conj.call(null,inst_13658,inst_13662);var inst_13664 = inst_13663;var state_13699__$1 = (function (){var statearr_13704 = state_13699;(statearr_13704[(9)] = inst_13664);
return statearr_13704;
})();var statearr_13705_13714 = state_13699__$1;(statearr_13705_13714[(2)] = null);
(statearr_13705_13714[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13709[(0)] = state_machine__6189__auto__);
(statearr_13709[(1)] = (1));
return statearr_13709;
});
var state_machine__6189__auto____1 = (function (state_13699){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13699);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13710){if((e13710 instanceof Object))
{var ex__6192__auto__ = e13710;var statearr_13711_13715 = state_13699;(statearr_13711_13715[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13699);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13716 = state_13699;
state_13699 = G__13716;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13699){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13712 = f__6204__auto__.call(null);(statearr_13712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_2 = (function test_train_2(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_13833){var state_val_13834 = (state_13833[(1)]);if((state_val_13834 === (4)))
{var inst_13803 = (state_13833[(7)]);var inst_13828 = (state_13833[(2)]);var inst_13798 = inst_13803;var state_13833__$1 = (function (){var statearr_13835 = state_13833;(statearr_13835[(8)] = inst_13798);
(statearr_13835[(9)] = inst_13828);
return statearr_13835;
})();var statearr_13836_13847 = state_13833__$1;(statearr_13836_13847[(2)] = null);
(statearr_13836_13847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13834 === (3)))
{var inst_13831 = (state_13833[(2)]);var state_13833__$1 = state_13833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13833__$1,inst_13831);
} else
{if((state_val_13834 === (2)))
{var inst_13798 = (state_13833[(8)]);var inst_13803 = (state_13833[(7)]);var inst_13801 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));var inst_13802 = ai.ann.Train.call(null,inst_13798,inst_13801,(1),0.01);var inst_13803__$1 = cljs.core.nth.call(null,inst_13802,(0),null);var inst_13804 = cljs.core.nth.call(null,inst_13802,(1),null);var inst_13805 = console.log(inst_13804);var inst_13806 = cljs.core.list(cljs.core.list((0),(0)));var inst_13807 = ai.ann.FeedForward.call(null,inst_13806,inst_13803__$1);var inst_13808 = cljs.core.reverse.call(null,inst_13807);var inst_13809 = cljs.core.pr_str.call(null,inst_13808);var inst_13810 = console.log(inst_13809);var inst_13811 = cljs.core.list(cljs.core.list((0),(1)));var inst_13812 = ai.ann.FeedForward.call(null,inst_13811,inst_13803__$1);var inst_13813 = cljs.core.reverse.call(null,inst_13812);var inst_13814 = cljs.core.pr_str.call(null,inst_13813);var inst_13815 = console.log(inst_13814);var inst_13816 = cljs.core.list(cljs.core.list((1),(1)));var inst_13817 = ai.ann.FeedForward.call(null,inst_13816,inst_13803__$1);var inst_13818 = cljs.core.reverse.call(null,inst_13817);var inst_13819 = cljs.core.pr_str.call(null,inst_13818);var inst_13820 = console.log(inst_13819);var inst_13821 = cljs.core.list(cljs.core.list((1),(0)));var inst_13822 = ai.ann.FeedForward.call(null,inst_13821,inst_13803__$1);var inst_13823 = cljs.core.reverse.call(null,inst_13822);var inst_13824 = cljs.core.pr_str.call(null,inst_13823);var inst_13825 = console.log(inst_13824);var inst_13826 = cljs.core.async.timeout.call(null,(100));var state_13833__$1 = (function (){var statearr_13837 = state_13833;(statearr_13837[(10)] = inst_13805);
(statearr_13837[(11)] = inst_13820);
(statearr_13837[(12)] = inst_13815);
(statearr_13837[(13)] = inst_13825);
(statearr_13837[(7)] = inst_13803__$1);
(statearr_13837[(14)] = inst_13810);
return statearr_13837;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13833__$1,(4),inst_13826);
} else
{if((state_val_13834 === (1)))
{var inst_13782 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_13783 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13782);var inst_13784 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_13785 = cljs.core._conj.call(null,inst_13783,inst_13784);var inst_13786 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13785);var inst_13787 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13788 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13787);var inst_13789 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13790 = cljs.core._conj.call(null,inst_13788,inst_13789);var inst_13791 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13792 = cljs.core._conj.call(null,inst_13790,inst_13791);var inst_13793 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13794 = cljs.core._conj.call(null,inst_13792,inst_13793);var inst_13795 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13796 = cljs.core._conj.call(null,inst_13794,inst_13795);var inst_13797 = cljs.core._conj.call(null,inst_13786,inst_13796);var inst_13798 = inst_13797;var state_13833__$1 = (function (){var statearr_13838 = state_13833;(statearr_13838[(8)] = inst_13798);
return statearr_13838;
})();var statearr_13839_13848 = state_13833__$1;(statearr_13839_13848[(2)] = null);
(statearr_13839_13848[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13843[(0)] = state_machine__6189__auto__);
(statearr_13843[(1)] = (1));
return statearr_13843;
});
var state_machine__6189__auto____1 = (function (state_13833){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13833);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13844){if((e13844 instanceof Object))
{var ex__6192__auto__ = e13844;var statearr_13845_13849 = state_13833;(statearr_13845_13849[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13850 = state_13833;
state_13833 = G__13850;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13833){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13846 = f__6204__auto__.call(null);(statearr_13846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_xor = (function test_train_xor(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_13951){var state_val_13952 = (state_13951[(1)]);if((state_val_13952 === (4)))
{var inst_13921 = (state_13951[(7)]);var inst_13946 = (state_13951[(2)]);var inst_13916 = inst_13921;var state_13951__$1 = (function (){var statearr_13953 = state_13951;(statearr_13953[(8)] = inst_13946);
(statearr_13953[(9)] = inst_13916);
return statearr_13953;
})();var statearr_13954_13965 = state_13951__$1;(statearr_13954_13965[(2)] = null);
(statearr_13954_13965[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13952 === (3)))
{var inst_13949 = (state_13951[(2)]);var state_13951__$1 = state_13951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13951__$1,inst_13949);
} else
{if((state_val_13952 === (2)))
{var inst_13921 = (state_13951[(7)]);var inst_13916 = (state_13951[(9)]);var inst_13919 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_13920 = ai.ann.Train.call(null,inst_13916,inst_13919,(1),0.01);var inst_13921__$1 = cljs.core.nth.call(null,inst_13920,(0),null);var inst_13922 = cljs.core.nth.call(null,inst_13920,(1),null);var inst_13923 = console.log(inst_13922);var inst_13924 = cljs.core.list(cljs.core.list((0),(0)));var inst_13925 = ai.ann.FeedForward.call(null,inst_13924,inst_13921__$1);var inst_13926 = cljs.core.reverse.call(null,inst_13925);var inst_13927 = cljs.core.pr_str.call(null,inst_13926);var inst_13928 = console.log(inst_13927);var inst_13929 = cljs.core.list(cljs.core.list((0),(1)));var inst_13930 = ai.ann.FeedForward.call(null,inst_13929,inst_13921__$1);var inst_13931 = cljs.core.reverse.call(null,inst_13930);var inst_13932 = cljs.core.pr_str.call(null,inst_13931);var inst_13933 = console.log(inst_13932);var inst_13934 = cljs.core.list(cljs.core.list((1),(1)));var inst_13935 = ai.ann.FeedForward.call(null,inst_13934,inst_13921__$1);var inst_13936 = cljs.core.reverse.call(null,inst_13935);var inst_13937 = cljs.core.pr_str.call(null,inst_13936);var inst_13938 = console.log(inst_13937);var inst_13939 = cljs.core.list(cljs.core.list((1),(0)));var inst_13940 = ai.ann.FeedForward.call(null,inst_13939,inst_13921__$1);var inst_13941 = cljs.core.reverse.call(null,inst_13940);var inst_13942 = cljs.core.pr_str.call(null,inst_13941);var inst_13943 = console.log(inst_13942);var inst_13944 = cljs.core.async.timeout.call(null,(1000));var state_13951__$1 = (function (){var statearr_13955 = state_13951;(statearr_13955[(10)] = inst_13923);
(statearr_13955[(7)] = inst_13921__$1);
(statearr_13955[(11)] = inst_13938);
(statearr_13955[(12)] = inst_13928);
(statearr_13955[(13)] = inst_13943);
(statearr_13955[(14)] = inst_13933);
return statearr_13955;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13951__$1,(4),inst_13944);
} else
{if((state_val_13952 === (1)))
{var inst_13908 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13909 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13908);var inst_13910 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13909);var inst_13911 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13912 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13911);var inst_13913 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13914 = cljs.core._conj.call(null,inst_13912,inst_13913);var inst_13915 = cljs.core._conj.call(null,inst_13910,inst_13914);var inst_13916 = inst_13915;var state_13951__$1 = (function (){var statearr_13956 = state_13951;(statearr_13956[(9)] = inst_13916);
return statearr_13956;
})();var statearr_13957_13966 = state_13951__$1;(statearr_13957_13966[(2)] = null);
(statearr_13957_13966[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13961[(0)] = state_machine__6189__auto__);
(statearr_13961[(1)] = (1));
return statearr_13961;
});
var state_machine__6189__auto____1 = (function (state_13951){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13962){if((e13962 instanceof Object))
{var ex__6192__auto__ = e13962;var statearr_13963_13967 = state_13951;(statearr_13963_13967[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13968 = state_13951;
state_13951 = G__13968;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13951){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13964 = f__6204__auto__.call(null);(statearr_13964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13964;
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
