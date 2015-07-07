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
return (function (state_10165){var state_val_10166 = (state_10165[(1)]);if((state_val_10166 === (4)))
{var inst_10135 = (state_10165[(7)]);var inst_10160 = (state_10165[(2)]);var inst_10130 = inst_10135;var state_10165__$1 = (function (){var statearr_10167 = state_10165;(statearr_10167[(8)] = inst_10130);
(statearr_10167[(9)] = inst_10160);
return statearr_10167;
})();var statearr_10168_10179 = state_10165__$1;(statearr_10168_10179[(2)] = null);
(statearr_10168_10179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10166 === (3)))
{var inst_10163 = (state_10165[(2)]);var state_10165__$1 = state_10165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10165__$1,inst_10163);
} else
{if((state_val_10166 === (2)))
{var inst_10135 = (state_10165[(7)]);var inst_10130 = (state_10165[(8)]);var inst_10133 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));var inst_10134 = ai.ann.Train.call(null,inst_10130,inst_10133,(1),0.01);var inst_10135__$1 = cljs.core.nth.call(null,inst_10134,(0),null);var inst_10136 = cljs.core.nth.call(null,inst_10134,(1),null);var inst_10137 = console.log(inst_10136);var inst_10138 = cljs.core.list(cljs.core.list((0),(0)));var inst_10139 = ai.ann.FeedForward.call(null,inst_10138,inst_10135__$1);var inst_10140 = cljs.core.reverse.call(null,inst_10139);var inst_10141 = cljs.core.pr_str.call(null,inst_10140);var inst_10142 = console.log(inst_10141);var inst_10143 = cljs.core.list(cljs.core.list((0),(1)));var inst_10144 = ai.ann.FeedForward.call(null,inst_10143,inst_10135__$1);var inst_10145 = cljs.core.reverse.call(null,inst_10144);var inst_10146 = cljs.core.pr_str.call(null,inst_10145);var inst_10147 = console.log(inst_10146);var inst_10148 = cljs.core.list(cljs.core.list((1),(1)));var inst_10149 = ai.ann.FeedForward.call(null,inst_10148,inst_10135__$1);var inst_10150 = cljs.core.reverse.call(null,inst_10149);var inst_10151 = cljs.core.pr_str.call(null,inst_10150);var inst_10152 = console.log(inst_10151);var inst_10153 = cljs.core.list(cljs.core.list((1),(0)));var inst_10154 = ai.ann.FeedForward.call(null,inst_10153,inst_10135__$1);var inst_10155 = cljs.core.reverse.call(null,inst_10154);var inst_10156 = cljs.core.pr_str.call(null,inst_10155);var inst_10157 = console.log(inst_10156);var inst_10158 = cljs.core.async.timeout.call(null,(30));var state_10165__$1 = (function (){var statearr_10169 = state_10165;(statearr_10169[(7)] = inst_10135__$1);
(statearr_10169[(10)] = inst_10137);
(statearr_10169[(11)] = inst_10152);
(statearr_10169[(12)] = inst_10157);
(statearr_10169[(13)] = inst_10147);
(statearr_10169[(14)] = inst_10142);
return statearr_10169;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10165__$1,(4),inst_10158);
} else
{if((state_val_10166 === (1)))
{var inst_10114 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10115 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10114);var inst_10116 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10115);var inst_10117 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_10118 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10117);var inst_10119 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_10120 = cljs.core._conj.call(null,inst_10118,inst_10119);var inst_10121 = cljs.core._conj.call(null,inst_10116,inst_10120);var inst_10122 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10123 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10122);var inst_10124 = cljs.core._conj.call(null,inst_10121,inst_10123);var inst_10125 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10126 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10125);var inst_10127 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10128 = cljs.core._conj.call(null,inst_10126,inst_10127);var inst_10129 = cljs.core._conj.call(null,inst_10124,inst_10128);var inst_10130 = inst_10129;var state_10165__$1 = (function (){var statearr_10170 = state_10165;(statearr_10170[(8)] = inst_10130);
return statearr_10170;
})();var statearr_10171_10180 = state_10165__$1;(statearr_10171_10180[(2)] = null);
(statearr_10171_10180[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_10175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10175[(0)] = state_machine__6189__auto__);
(statearr_10175[(1)] = (1));
return statearr_10175;
});
var state_machine__6189__auto____1 = (function (state_10165){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10176){if((e10176 instanceof Object))
{var ex__6192__auto__ = e10176;var statearr_10177_10181 = state_10165;(statearr_10177_10181[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10165);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10182 = state_10165;
state_10165 = G__10182;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10165){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10178 = f__6204__auto__.call(null);(statearr_10178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_2 = (function test_train_2(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_10299){var state_val_10300 = (state_10299[(1)]);if((state_val_10300 === (4)))
{var inst_10269 = (state_10299[(7)]);var inst_10294 = (state_10299[(2)]);var inst_10264 = inst_10269;var state_10299__$1 = (function (){var statearr_10301 = state_10299;(statearr_10301[(8)] = inst_10264);
(statearr_10301[(9)] = inst_10294);
return statearr_10301;
})();var statearr_10302_10313 = state_10299__$1;(statearr_10302_10313[(2)] = null);
(statearr_10302_10313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10300 === (3)))
{var inst_10297 = (state_10299[(2)]);var state_10299__$1 = state_10299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10299__$1,inst_10297);
} else
{if((state_val_10300 === (2)))
{var inst_10269 = (state_10299[(7)]);var inst_10264 = (state_10299[(8)]);var inst_10267 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));var inst_10268 = ai.ann.Train.call(null,inst_10264,inst_10267,(1),0.01);var inst_10269__$1 = cljs.core.nth.call(null,inst_10268,(0),null);var inst_10270 = cljs.core.nth.call(null,inst_10268,(1),null);var inst_10271 = console.log(inst_10270);var inst_10272 = cljs.core.list(cljs.core.list((0),(0)));var inst_10273 = ai.ann.FeedForward.call(null,inst_10272,inst_10269__$1);var inst_10274 = cljs.core.reverse.call(null,inst_10273);var inst_10275 = cljs.core.pr_str.call(null,inst_10274);var inst_10276 = console.log(inst_10275);var inst_10277 = cljs.core.list(cljs.core.list((0),(1)));var inst_10278 = ai.ann.FeedForward.call(null,inst_10277,inst_10269__$1);var inst_10279 = cljs.core.reverse.call(null,inst_10278);var inst_10280 = cljs.core.pr_str.call(null,inst_10279);var inst_10281 = console.log(inst_10280);var inst_10282 = cljs.core.list(cljs.core.list((1),(1)));var inst_10283 = ai.ann.FeedForward.call(null,inst_10282,inst_10269__$1);var inst_10284 = cljs.core.reverse.call(null,inst_10283);var inst_10285 = cljs.core.pr_str.call(null,inst_10284);var inst_10286 = console.log(inst_10285);var inst_10287 = cljs.core.list(cljs.core.list((1),(0)));var inst_10288 = ai.ann.FeedForward.call(null,inst_10287,inst_10269__$1);var inst_10289 = cljs.core.reverse.call(null,inst_10288);var inst_10290 = cljs.core.pr_str.call(null,inst_10289);var inst_10291 = console.log(inst_10290);var inst_10292 = cljs.core.async.timeout.call(null,(100));var state_10299__$1 = (function (){var statearr_10303 = state_10299;(statearr_10303[(10)] = inst_10281);
(statearr_10303[(11)] = inst_10271);
(statearr_10303[(12)] = inst_10276);
(statearr_10303[(7)] = inst_10269__$1);
(statearr_10303[(13)] = inst_10291);
(statearr_10303[(14)] = inst_10286);
return statearr_10303;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10299__$1,(4),inst_10292);
} else
{if((state_val_10300 === (1)))
{var inst_10248 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_10249 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10248);var inst_10250 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_10251 = cljs.core._conj.call(null,inst_10249,inst_10250);var inst_10252 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10251);var inst_10253 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10254 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10253);var inst_10255 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10256 = cljs.core._conj.call(null,inst_10254,inst_10255);var inst_10257 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10258 = cljs.core._conj.call(null,inst_10256,inst_10257);var inst_10259 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10260 = cljs.core._conj.call(null,inst_10258,inst_10259);var inst_10261 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10262 = cljs.core._conj.call(null,inst_10260,inst_10261);var inst_10263 = cljs.core._conj.call(null,inst_10252,inst_10262);var inst_10264 = inst_10263;var state_10299__$1 = (function (){var statearr_10304 = state_10299;(statearr_10304[(8)] = inst_10264);
return statearr_10304;
})();var statearr_10305_10314 = state_10299__$1;(statearr_10305_10314[(2)] = null);
(statearr_10305_10314[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_10309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10309[(0)] = state_machine__6189__auto__);
(statearr_10309[(1)] = (1));
return statearr_10309;
});
var state_machine__6189__auto____1 = (function (state_10299){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10299);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10310){if((e10310 instanceof Object))
{var ex__6192__auto__ = e10310;var statearr_10311_10315 = state_10299;(statearr_10311_10315[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10299);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10316 = state_10299;
state_10299 = G__10316;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10299){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10312 = f__6204__auto__.call(null);(statearr_10312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_xor = (function test_train_xor(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_10417){var state_val_10418 = (state_10417[(1)]);if((state_val_10418 === (4)))
{var inst_10387 = (state_10417[(7)]);var inst_10412 = (state_10417[(2)]);var inst_10382 = inst_10387;var state_10417__$1 = (function (){var statearr_10419 = state_10417;(statearr_10419[(8)] = inst_10382);
(statearr_10419[(9)] = inst_10412);
return statearr_10419;
})();var statearr_10420_10431 = state_10417__$1;(statearr_10420_10431[(2)] = null);
(statearr_10420_10431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10418 === (3)))
{var inst_10415 = (state_10417[(2)]);var state_10417__$1 = state_10417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10417__$1,inst_10415);
} else
{if((state_val_10418 === (2)))
{var inst_10382 = (state_10417[(8)]);var inst_10387 = (state_10417[(7)]);var inst_10385 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_10386 = ai.ann.Train.call(null,inst_10382,inst_10385,(1),0.01);var inst_10387__$1 = cljs.core.nth.call(null,inst_10386,(0),null);var inst_10388 = cljs.core.nth.call(null,inst_10386,(1),null);var inst_10389 = console.log(inst_10388);var inst_10390 = cljs.core.list(cljs.core.list((0),(0)));var inst_10391 = ai.ann.FeedForward.call(null,inst_10390,inst_10387__$1);var inst_10392 = cljs.core.reverse.call(null,inst_10391);var inst_10393 = cljs.core.pr_str.call(null,inst_10392);var inst_10394 = console.log(inst_10393);var inst_10395 = cljs.core.list(cljs.core.list((0),(1)));var inst_10396 = ai.ann.FeedForward.call(null,inst_10395,inst_10387__$1);var inst_10397 = cljs.core.reverse.call(null,inst_10396);var inst_10398 = cljs.core.pr_str.call(null,inst_10397);var inst_10399 = console.log(inst_10398);var inst_10400 = cljs.core.list(cljs.core.list((1),(1)));var inst_10401 = ai.ann.FeedForward.call(null,inst_10400,inst_10387__$1);var inst_10402 = cljs.core.reverse.call(null,inst_10401);var inst_10403 = cljs.core.pr_str.call(null,inst_10402);var inst_10404 = console.log(inst_10403);var inst_10405 = cljs.core.list(cljs.core.list((1),(0)));var inst_10406 = ai.ann.FeedForward.call(null,inst_10405,inst_10387__$1);var inst_10407 = cljs.core.reverse.call(null,inst_10406);var inst_10408 = cljs.core.pr_str.call(null,inst_10407);var inst_10409 = console.log(inst_10408);var inst_10410 = cljs.core.async.timeout.call(null,(1000));var state_10417__$1 = (function (){var statearr_10421 = state_10417;(statearr_10421[(10)] = inst_10399);
(statearr_10421[(11)] = inst_10404);
(statearr_10421[(12)] = inst_10394);
(statearr_10421[(13)] = inst_10389);
(statearr_10421[(7)] = inst_10387__$1);
(statearr_10421[(14)] = inst_10409);
return statearr_10421;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10417__$1,(4),inst_10410);
} else
{if((state_val_10418 === (1)))
{var inst_10374 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10375 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10374);var inst_10376 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10375);var inst_10377 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10378 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10377);var inst_10379 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_10380 = cljs.core._conj.call(null,inst_10378,inst_10379);var inst_10381 = cljs.core._conj.call(null,inst_10376,inst_10380);var inst_10382 = inst_10381;var state_10417__$1 = (function (){var statearr_10422 = state_10417;(statearr_10422[(8)] = inst_10382);
return statearr_10422;
})();var statearr_10423_10432 = state_10417__$1;(statearr_10423_10432[(2)] = null);
(statearr_10423_10432[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_10427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10427[(0)] = state_machine__6189__auto__);
(statearr_10427[(1)] = (1));
return statearr_10427;
});
var state_machine__6189__auto____1 = (function (state_10417){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10428){if((e10428 instanceof Object))
{var ex__6192__auto__ = e10428;var statearr_10429_10433 = state_10417;(statearr_10429_10433[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10434 = state_10417;
state_10417 = G__10434;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10417){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10430 = f__6204__auto__.call(null);(statearr_10430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10430;
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
