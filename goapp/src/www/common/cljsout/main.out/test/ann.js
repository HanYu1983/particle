// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.ann');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ai.ann');
test.ann.test_neuron_value = (function test$ann$test_neuron_value(){
return console.log(ai.ann.NeuronValue.call(null,cljs.core.list((-1),(1),(1)),cljs.core.list(0.5,0.5,0.5)));
});
test.ann.test_reverse = (function test$ann$test_reverse(){
return console.log(cljs.core.pr_str.call(null,ai.ann.ReverseWeight.call(null,cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)))));
});
test.ann.test_errorvalueoutout = (function test$ann$test_errorvalueoutout(){
return console.log(cljs.core.pr_str.call(null,ai.ann.ErrorValueOutput.call(null,cljs.core.list(0.5,0.5),cljs.core.list((0),(1)))));
});
test.ann.test_errorvaluehidden = (function test$ann$test_errorvaluehidden(){
return console.log(cljs.core.pr_str.call(null,ai.ann.ErrorValueHidden.call(null,cljs.core.list((-1),0.5,0.5),cljs.core.list(-0.125,0.125),cljs.core.list(cljs.core.list(0.1,0.4),cljs.core.list(0.2,0.5),cljs.core.list(0.3,0.6)))));
});
test.ann.test_adjlayer = (function test$ann$test_adjlayer(){
return console.log(cljs.core.pr_str.call(null,ai.ann.AdjustWeightsLayer.call(null,(1),(1),cljs.core.list(0.5,0.5),cljs.core.list(-0.125,0.125))));
});
test.ann.test_errors = (function test$ann$test_errors(){
return console.log(cljs.core.pr_str.call(null,ai.ann.Errors.call(null,cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2,0.3,0.4,0.5,0.6),cljs.core.list(0.5,0.6)),cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6),cljs.core.list(0.7,0.8,0.9),cljs.core.list(0.7,0.8,0.9),cljs.core.list(0.7,0.8,0.9)),cljs.core.list(cljs.core.list(0.6,0.7,0.8,0.9,0.1,0.2),cljs.core.list(0.6,0.7,0.8,0.9,0.1,0.2))),cljs.core.list((1),(1)))));
});
test.ann.test_adjwes = (function test$ann$test_adjwes(){
return console.log(cljs.core.pr_str.call(null,ai.ann.AdjustWeights.call(null,(1),(1),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2,0.5),cljs.core.list(0.5)),ai.ann.Errors.call(null,cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2,0.5),cljs.core.list(0.5)),cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)),cljs.core.list(cljs.core.list(0.6,0.7,0.8))),cljs.core.list((1))))));
});
test.ann.test_newwes = (function test$ann$test_newwes(){
return console.log(cljs.core.pr_str.call(null,ai.ann.NewWeights.call(null,cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)),cljs.core.list(cljs.core.list(0.6,0.7,0.8))),cljs.core.list(cljs.core.list(cljs.core.list(-0.004000000000000001,(0),0.004000000000000001),cljs.core.list(-0.009375,(0),0.009375)),cljs.core.list(cljs.core.list(-0.125,0.025,0.0625))))));
});
test.ann.test_ff = (function test$ann$test_ff(){
return console.log(cljs.core.pr_str.call(null,ai.ann.FeedForward.call(null,cljs.core.list(cljs.core.list((0),(0))),cljs.core.list(cljs.core.list(cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6),cljs.core.list(0.1,0.2,0.3),cljs.core.list(0.4,0.5,0.6)),cljs.core.list(cljs.core.list(0.6,0.7,0.8,0.9,0.1),cljs.core.list(0.6,0.7,0.8,0.9,0.1))))));
});
test.ann.test_nowerror = (function test$ann$test_nowerror(){
return console.log(cljs.core.pr_str.call(null,ai.ann.NowError.call(null,cljs.core.list(0.5,0.5),cljs.core.list((1),(0)))));
});
/**
 * 這個會訓練比較久，因為節點比較複雜
 */
test.ann.test_train = (function test$ann$test_train(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_4894){
var state_val_4895 = (state_4894[(1)]);
if((state_val_4895 === (1))){
var inst_4841 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4842 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4843 = (new cljs.core.List(null,inst_4842,null,(1),null));
var inst_4844 = (new cljs.core.List(null,inst_4841,inst_4843,(2),null));
var inst_4845 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4846 = (new cljs.core.List(null,inst_4845,null,(1),null));
var inst_4847 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);
var inst_4848 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);
var inst_4849 = (new cljs.core.List(null,inst_4848,null,(1),null));
var inst_4850 = (new cljs.core.List(null,inst_4847,inst_4849,(2),null));
var inst_4851 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4852 = (new cljs.core.List(null,inst_4851,null,(1),null));
var inst_4853 = (new cljs.core.List(null,inst_4852,null,(1),null));
var inst_4854 = (new cljs.core.List(null,inst_4850,inst_4853,(2),null));
var inst_4855 = (new cljs.core.List(null,inst_4846,inst_4854,(3),null));
var inst_4856 = (new cljs.core.List(null,inst_4844,inst_4855,(4),null));
var inst_4857 = inst_4856;
var state_4894__$1 = (function (){var statearr_4896 = state_4894;
(statearr_4896[(7)] = inst_4857);

return statearr_4896;
})();
var statearr_4897_4905 = state_4894__$1;
(statearr_4897_4905[(2)] = null);

(statearr_4897_4905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4895 === (2))){
var inst_4864 = (state_4894[(8)]);
var inst_4857 = (state_4894[(7)]);
var inst_4862 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));
var inst_4863 = ai.ann.Train.call(null,inst_4857,inst_4862,(1),0.01);
var inst_4864__$1 = cljs.core.nth.call(null,inst_4863,(0),null);
var inst_4865 = cljs.core.nth.call(null,inst_4863,(1),null);
var inst_4866 = console.log(inst_4865);
var inst_4867 = cljs.core.list(cljs.core.list((0),(0)));
var inst_4868 = ai.ann.FeedForward.call(null,inst_4867,inst_4864__$1);
var inst_4869 = cljs.core.reverse.call(null,inst_4868);
var inst_4870 = cljs.core.pr_str.call(null,inst_4869);
var inst_4871 = console.log(inst_4870);
var inst_4872 = cljs.core.list(cljs.core.list((0),(1)));
var inst_4873 = ai.ann.FeedForward.call(null,inst_4872,inst_4864__$1);
var inst_4874 = cljs.core.reverse.call(null,inst_4873);
var inst_4875 = cljs.core.pr_str.call(null,inst_4874);
var inst_4876 = console.log(inst_4875);
var inst_4877 = cljs.core.list(cljs.core.list((1),(1)));
var inst_4878 = ai.ann.FeedForward.call(null,inst_4877,inst_4864__$1);
var inst_4879 = cljs.core.reverse.call(null,inst_4878);
var inst_4880 = cljs.core.pr_str.call(null,inst_4879);
var inst_4881 = console.log(inst_4880);
var inst_4882 = cljs.core.list(cljs.core.list((1),(0)));
var inst_4883 = ai.ann.FeedForward.call(null,inst_4882,inst_4864__$1);
var inst_4884 = cljs.core.reverse.call(null,inst_4883);
var inst_4885 = cljs.core.pr_str.call(null,inst_4884);
var inst_4886 = console.log(inst_4885);
var inst_4887 = cljs.core.async.timeout.call(null,(30));
var state_4894__$1 = (function (){var statearr_4898 = state_4894;
(statearr_4898[(9)] = inst_4881);

(statearr_4898[(10)] = inst_4876);

(statearr_4898[(11)] = inst_4866);

(statearr_4898[(12)] = inst_4886);

(statearr_4898[(8)] = inst_4864__$1);

(statearr_4898[(13)] = inst_4871);

return statearr_4898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4894__$1,(4),inst_4887);
} else {
if((state_val_4895 === (3))){
var inst_4892 = (state_4894[(2)]);
var state_4894__$1 = state_4894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4894__$1,inst_4892);
} else {
if((state_val_4895 === (4))){
var inst_4864 = (state_4894[(8)]);
var inst_4889 = (state_4894[(2)]);
var inst_4857 = inst_4864;
var state_4894__$1 = (function (){var statearr_4899 = state_4894;
(statearr_4899[(14)] = inst_4889);

(statearr_4899[(7)] = inst_4857);

return statearr_4899;
})();
var statearr_4900_4906 = state_4894__$1;
(statearr_4900_4906[(2)] = null);

(statearr_4900_4906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$ann$test_train_$_state_machine__2793__auto__ = null;
var test$ann$test_train_$_state_machine__2793__auto____0 = (function (){
var statearr_4901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4901[(0)] = test$ann$test_train_$_state_machine__2793__auto__);

(statearr_4901[(1)] = (1));

return statearr_4901;
});
var test$ann$test_train_$_state_machine__2793__auto____1 = (function (state_4894){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4902){if((e4902 instanceof Object)){
var ex__2796__auto__ = e4902;
var statearr_4903_4907 = state_4894;
(statearr_4903_4907[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4908 = state_4894;
state_4894 = G__4908;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$ann$test_train_$_state_machine__2793__auto__ = function(state_4894){
switch(arguments.length){
case 0:
return test$ann$test_train_$_state_machine__2793__auto____0.call(this);
case 1:
return test$ann$test_train_$_state_machine__2793__auto____1.call(this,state_4894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann$test_train_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann$test_train_$_state_machine__2793__auto____0;
test$ann$test_train_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann$test_train_$_state_machine__2793__auto____1;
return test$ann$test_train_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_4904 = f__2883__auto__.call(null);
(statearr_4904[(6)] = c__2882__auto__);

return statearr_4904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
test.ann.test_train_2 = (function test$ann$test_train_2(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_4962){
var state_val_4963 = (state_4962[(1)]);
if((state_val_4963 === (1))){
var inst_4909 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4910 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4911 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4912 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4913 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4914 = (new cljs.core.List(null,inst_4913,null,(1),null));
var inst_4915 = (new cljs.core.List(null,inst_4912,inst_4914,(2),null));
var inst_4916 = (new cljs.core.List(null,inst_4911,inst_4915,(3),null));
var inst_4917 = (new cljs.core.List(null,inst_4910,inst_4916,(4),null));
var inst_4918 = (new cljs.core.List(null,inst_4909,inst_4917,(5),null));
var inst_4919 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);
var inst_4920 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);
var inst_4921 = (new cljs.core.List(null,inst_4920,null,(1),null));
var inst_4922 = (new cljs.core.List(null,inst_4919,inst_4921,(2),null));
var inst_4923 = (new cljs.core.List(null,inst_4922,null,(1),null));
var inst_4924 = (new cljs.core.List(null,inst_4918,inst_4923,(2),null));
var inst_4925 = inst_4924;
var state_4962__$1 = (function (){var statearr_4964 = state_4962;
(statearr_4964[(7)] = inst_4925);

return statearr_4964;
})();
var statearr_4965_4973 = state_4962__$1;
(statearr_4965_4973[(2)] = null);

(statearr_4965_4973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4963 === (2))){
var inst_4925 = (state_4962[(7)]);
var inst_4932 = (state_4962[(8)]);
var inst_4930 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));
var inst_4931 = ai.ann.Train.call(null,inst_4925,inst_4930,(1),0.01);
var inst_4932__$1 = cljs.core.nth.call(null,inst_4931,(0),null);
var inst_4933 = cljs.core.nth.call(null,inst_4931,(1),null);
var inst_4934 = console.log(inst_4933);
var inst_4935 = cljs.core.list(cljs.core.list((0),(0)));
var inst_4936 = ai.ann.FeedForward.call(null,inst_4935,inst_4932__$1);
var inst_4937 = cljs.core.reverse.call(null,inst_4936);
var inst_4938 = cljs.core.pr_str.call(null,inst_4937);
var inst_4939 = console.log(inst_4938);
var inst_4940 = cljs.core.list(cljs.core.list((0),(1)));
var inst_4941 = ai.ann.FeedForward.call(null,inst_4940,inst_4932__$1);
var inst_4942 = cljs.core.reverse.call(null,inst_4941);
var inst_4943 = cljs.core.pr_str.call(null,inst_4942);
var inst_4944 = console.log(inst_4943);
var inst_4945 = cljs.core.list(cljs.core.list((1),(1)));
var inst_4946 = ai.ann.FeedForward.call(null,inst_4945,inst_4932__$1);
var inst_4947 = cljs.core.reverse.call(null,inst_4946);
var inst_4948 = cljs.core.pr_str.call(null,inst_4947);
var inst_4949 = console.log(inst_4948);
var inst_4950 = cljs.core.list(cljs.core.list((1),(0)));
var inst_4951 = ai.ann.FeedForward.call(null,inst_4950,inst_4932__$1);
var inst_4952 = cljs.core.reverse.call(null,inst_4951);
var inst_4953 = cljs.core.pr_str.call(null,inst_4952);
var inst_4954 = console.log(inst_4953);
var inst_4955 = cljs.core.async.timeout.call(null,(100));
var state_4962__$1 = (function (){var statearr_4966 = state_4962;
(statearr_4966[(9)] = inst_4944);

(statearr_4966[(8)] = inst_4932__$1);

(statearr_4966[(10)] = inst_4954);

(statearr_4966[(11)] = inst_4934);

(statearr_4966[(12)] = inst_4949);

(statearr_4966[(13)] = inst_4939);

return statearr_4966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4962__$1,(4),inst_4955);
} else {
if((state_val_4963 === (3))){
var inst_4960 = (state_4962[(2)]);
var state_4962__$1 = state_4962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4962__$1,inst_4960);
} else {
if((state_val_4963 === (4))){
var inst_4932 = (state_4962[(8)]);
var inst_4957 = (state_4962[(2)]);
var inst_4925 = inst_4932;
var state_4962__$1 = (function (){var statearr_4967 = state_4962;
(statearr_4967[(7)] = inst_4925);

(statearr_4967[(14)] = inst_4957);

return statearr_4967;
})();
var statearr_4968_4974 = state_4962__$1;
(statearr_4968_4974[(2)] = null);

(statearr_4968_4974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$ann$test_train_2_$_state_machine__2793__auto__ = null;
var test$ann$test_train_2_$_state_machine__2793__auto____0 = (function (){
var statearr_4969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4969[(0)] = test$ann$test_train_2_$_state_machine__2793__auto__);

(statearr_4969[(1)] = (1));

return statearr_4969;
});
var test$ann$test_train_2_$_state_machine__2793__auto____1 = (function (state_4962){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4970){if((e4970 instanceof Object)){
var ex__2796__auto__ = e4970;
var statearr_4971_4975 = state_4962;
(statearr_4971_4975[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4976 = state_4962;
state_4962 = G__4976;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$ann$test_train_2_$_state_machine__2793__auto__ = function(state_4962){
switch(arguments.length){
case 0:
return test$ann$test_train_2_$_state_machine__2793__auto____0.call(this);
case 1:
return test$ann$test_train_2_$_state_machine__2793__auto____1.call(this,state_4962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann$test_train_2_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann$test_train_2_$_state_machine__2793__auto____0;
test$ann$test_train_2_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann$test_train_2_$_state_machine__2793__auto____1;
return test$ann$test_train_2_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_4972 = f__2883__auto__.call(null);
(statearr_4972[(6)] = c__2882__auto__);

return statearr_4972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
test.ann.test_train_xor = (function test$ann$test_train_xor(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_5022){
var state_val_5023 = (state_5022[(1)]);
if((state_val_5023 === (1))){
var inst_4977 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4978 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4979 = (new cljs.core.List(null,inst_4978,null,(1),null));
var inst_4980 = (new cljs.core.List(null,inst_4977,inst_4979,(2),null));
var inst_4981 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_4982 = (new cljs.core.List(null,inst_4981,null,(1),null));
var inst_4983 = (new cljs.core.List(null,inst_4982,null,(1),null));
var inst_4984 = (new cljs.core.List(null,inst_4980,inst_4983,(2),null));
var inst_4985 = inst_4984;
var state_5022__$1 = (function (){var statearr_5024 = state_5022;
(statearr_5024[(7)] = inst_4985);

return statearr_5024;
})();
var statearr_5025_5033 = state_5022__$1;
(statearr_5025_5033[(2)] = null);

(statearr_5025_5033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5023 === (2))){
var inst_4992 = (state_5022[(8)]);
var inst_4985 = (state_5022[(7)]);
var inst_4990 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));
var inst_4991 = ai.ann.Train.call(null,inst_4985,inst_4990,(1),0.01);
var inst_4992__$1 = cljs.core.nth.call(null,inst_4991,(0),null);
var inst_4993 = cljs.core.nth.call(null,inst_4991,(1),null);
var inst_4994 = console.log(inst_4993);
var inst_4995 = cljs.core.list(cljs.core.list((0),(0)));
var inst_4996 = ai.ann.FeedForward.call(null,inst_4995,inst_4992__$1);
var inst_4997 = cljs.core.reverse.call(null,inst_4996);
var inst_4998 = cljs.core.pr_str.call(null,inst_4997);
var inst_4999 = console.log(inst_4998);
var inst_5000 = cljs.core.list(cljs.core.list((0),(1)));
var inst_5001 = ai.ann.FeedForward.call(null,inst_5000,inst_4992__$1);
var inst_5002 = cljs.core.reverse.call(null,inst_5001);
var inst_5003 = cljs.core.pr_str.call(null,inst_5002);
var inst_5004 = console.log(inst_5003);
var inst_5005 = cljs.core.list(cljs.core.list((1),(1)));
var inst_5006 = ai.ann.FeedForward.call(null,inst_5005,inst_4992__$1);
var inst_5007 = cljs.core.reverse.call(null,inst_5006);
var inst_5008 = cljs.core.pr_str.call(null,inst_5007);
var inst_5009 = console.log(inst_5008);
var inst_5010 = cljs.core.list(cljs.core.list((1),(0)));
var inst_5011 = ai.ann.FeedForward.call(null,inst_5010,inst_4992__$1);
var inst_5012 = cljs.core.reverse.call(null,inst_5011);
var inst_5013 = cljs.core.pr_str.call(null,inst_5012);
var inst_5014 = console.log(inst_5013);
var inst_5015 = cljs.core.async.timeout.call(null,(1000));
var state_5022__$1 = (function (){var statearr_5026 = state_5022;
(statearr_5026[(9)] = inst_4994);

(statearr_5026[(10)] = inst_4999);

(statearr_5026[(11)] = inst_5014);

(statearr_5026[(8)] = inst_4992__$1);

(statearr_5026[(12)] = inst_5009);

(statearr_5026[(13)] = inst_5004);

return statearr_5026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5022__$1,(4),inst_5015);
} else {
if((state_val_5023 === (3))){
var inst_5020 = (state_5022[(2)]);
var state_5022__$1 = state_5022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5022__$1,inst_5020);
} else {
if((state_val_5023 === (4))){
var inst_4992 = (state_5022[(8)]);
var inst_5017 = (state_5022[(2)]);
var inst_4985 = inst_4992;
var state_5022__$1 = (function (){var statearr_5027 = state_5022;
(statearr_5027[(7)] = inst_4985);

(statearr_5027[(14)] = inst_5017);

return statearr_5027;
})();
var statearr_5028_5034 = state_5022__$1;
(statearr_5028_5034[(2)] = null);

(statearr_5028_5034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$ann$test_train_xor_$_state_machine__2793__auto__ = null;
var test$ann$test_train_xor_$_state_machine__2793__auto____0 = (function (){
var statearr_5029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5029[(0)] = test$ann$test_train_xor_$_state_machine__2793__auto__);

(statearr_5029[(1)] = (1));

return statearr_5029;
});
var test$ann$test_train_xor_$_state_machine__2793__auto____1 = (function (state_5022){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5030){if((e5030 instanceof Object)){
var ex__2796__auto__ = e5030;
var statearr_5031_5035 = state_5022;
(statearr_5031_5035[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5036 = state_5022;
state_5022 = G__5036;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$ann$test_train_xor_$_state_machine__2793__auto__ = function(state_5022){
switch(arguments.length){
case 0:
return test$ann$test_train_xor_$_state_machine__2793__auto____0.call(this);
case 1:
return test$ann$test_train_xor_$_state_machine__2793__auto____1.call(this,state_5022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann$test_train_xor_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann$test_train_xor_$_state_machine__2793__auto____0;
test$ann$test_train_xor_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann$test_train_xor_$_state_machine__2793__auto____1;
return test$ann$test_train_xor_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5032 = f__2883__auto__.call(null);
(statearr_5032[(6)] = c__2882__auto__);

return statearr_5032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
test.ann.test_basic = (function test$ann$test_basic(){
test.ann.test_neuron_value.call(null);

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

//# sourceMappingURL=ann.js.map
