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
return (function (state_13371){var state_val_13372 = (state_13371[(1)]);if((state_val_13372 === (4)))
{var inst_13341 = (state_13371[(7)]);var inst_13366 = (state_13371[(2)]);var inst_13336 = inst_13341;var state_13371__$1 = (function (){var statearr_13373 = state_13371;(statearr_13373[(8)] = inst_13366);
(statearr_13373[(9)] = inst_13336);
return statearr_13373;
})();var statearr_13374_13385 = state_13371__$1;(statearr_13374_13385[(2)] = null);
(statearr_13374_13385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13372 === (3)))
{var inst_13369 = (state_13371[(2)]);var state_13371__$1 = state_13371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13371__$1,inst_13369);
} else
{if((state_val_13372 === (2)))
{var inst_13341 = (state_13371[(7)]);var inst_13336 = (state_13371[(9)]);var inst_13339 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));var inst_13340 = ai.ann.Train.call(null,inst_13336,inst_13339,(1),0.01);var inst_13341__$1 = cljs.core.nth.call(null,inst_13340,(0),null);var inst_13342 = cljs.core.nth.call(null,inst_13340,(1),null);var inst_13343 = console.log(inst_13342);var inst_13344 = cljs.core.list(cljs.core.list((0),(0)));var inst_13345 = ai.ann.FeedForward.call(null,inst_13344,inst_13341__$1);var inst_13346 = cljs.core.reverse.call(null,inst_13345);var inst_13347 = cljs.core.pr_str.call(null,inst_13346);var inst_13348 = console.log(inst_13347);var inst_13349 = cljs.core.list(cljs.core.list((0),(1)));var inst_13350 = ai.ann.FeedForward.call(null,inst_13349,inst_13341__$1);var inst_13351 = cljs.core.reverse.call(null,inst_13350);var inst_13352 = cljs.core.pr_str.call(null,inst_13351);var inst_13353 = console.log(inst_13352);var inst_13354 = cljs.core.list(cljs.core.list((1),(1)));var inst_13355 = ai.ann.FeedForward.call(null,inst_13354,inst_13341__$1);var inst_13356 = cljs.core.reverse.call(null,inst_13355);var inst_13357 = cljs.core.pr_str.call(null,inst_13356);var inst_13358 = console.log(inst_13357);var inst_13359 = cljs.core.list(cljs.core.list((1),(0)));var inst_13360 = ai.ann.FeedForward.call(null,inst_13359,inst_13341__$1);var inst_13361 = cljs.core.reverse.call(null,inst_13360);var inst_13362 = cljs.core.pr_str.call(null,inst_13361);var inst_13363 = console.log(inst_13362);var inst_13364 = cljs.core.async.timeout.call(null,(30));var state_13371__$1 = (function (){var statearr_13375 = state_13371;(statearr_13375[(10)] = inst_13348);
(statearr_13375[(7)] = inst_13341__$1);
(statearr_13375[(11)] = inst_13343);
(statearr_13375[(12)] = inst_13363);
(statearr_13375[(13)] = inst_13353);
(statearr_13375[(14)] = inst_13358);
return statearr_13375;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13371__$1,(4),inst_13364);
} else
{if((state_val_13372 === (1)))
{var inst_13320 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13321 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13320);var inst_13322 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13321);var inst_13323 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_13324 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13323);var inst_13325 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_13326 = cljs.core._conj.call(null,inst_13324,inst_13325);var inst_13327 = cljs.core._conj.call(null,inst_13322,inst_13326);var inst_13328 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13329 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13328);var inst_13330 = cljs.core._conj.call(null,inst_13327,inst_13329);var inst_13331 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13332 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13331);var inst_13333 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13334 = cljs.core._conj.call(null,inst_13332,inst_13333);var inst_13335 = cljs.core._conj.call(null,inst_13330,inst_13334);var inst_13336 = inst_13335;var state_13371__$1 = (function (){var statearr_13376 = state_13371;(statearr_13376[(9)] = inst_13336);
return statearr_13376;
})();var statearr_13377_13386 = state_13371__$1;(statearr_13377_13386[(2)] = null);
(statearr_13377_13386[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13381[(0)] = state_machine__6189__auto__);
(statearr_13381[(1)] = (1));
return statearr_13381;
});
var state_machine__6189__auto____1 = (function (state_13371){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13382){if((e13382 instanceof Object))
{var ex__6192__auto__ = e13382;var statearr_13383_13387 = state_13371;(statearr_13383_13387[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13388 = state_13371;
state_13371 = G__13388;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13371){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13384 = f__6204__auto__.call(null);(statearr_13384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_2 = (function test_train_2(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_13505){var state_val_13506 = (state_13505[(1)]);if((state_val_13506 === (4)))
{var inst_13475 = (state_13505[(7)]);var inst_13500 = (state_13505[(2)]);var inst_13470 = inst_13475;var state_13505__$1 = (function (){var statearr_13507 = state_13505;(statearr_13507[(8)] = inst_13500);
(statearr_13507[(9)] = inst_13470);
return statearr_13507;
})();var statearr_13508_13519 = state_13505__$1;(statearr_13508_13519[(2)] = null);
(statearr_13508_13519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13506 === (3)))
{var inst_13503 = (state_13505[(2)]);var state_13505__$1 = state_13505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13505__$1,inst_13503);
} else
{if((state_val_13506 === (2)))
{var inst_13475 = (state_13505[(7)]);var inst_13470 = (state_13505[(9)]);var inst_13473 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));var inst_13474 = ai.ann.Train.call(null,inst_13470,inst_13473,(1),0.01);var inst_13475__$1 = cljs.core.nth.call(null,inst_13474,(0),null);var inst_13476 = cljs.core.nth.call(null,inst_13474,(1),null);var inst_13477 = console.log(inst_13476);var inst_13478 = cljs.core.list(cljs.core.list((0),(0)));var inst_13479 = ai.ann.FeedForward.call(null,inst_13478,inst_13475__$1);var inst_13480 = cljs.core.reverse.call(null,inst_13479);var inst_13481 = cljs.core.pr_str.call(null,inst_13480);var inst_13482 = console.log(inst_13481);var inst_13483 = cljs.core.list(cljs.core.list((0),(1)));var inst_13484 = ai.ann.FeedForward.call(null,inst_13483,inst_13475__$1);var inst_13485 = cljs.core.reverse.call(null,inst_13484);var inst_13486 = cljs.core.pr_str.call(null,inst_13485);var inst_13487 = console.log(inst_13486);var inst_13488 = cljs.core.list(cljs.core.list((1),(1)));var inst_13489 = ai.ann.FeedForward.call(null,inst_13488,inst_13475__$1);var inst_13490 = cljs.core.reverse.call(null,inst_13489);var inst_13491 = cljs.core.pr_str.call(null,inst_13490);var inst_13492 = console.log(inst_13491);var inst_13493 = cljs.core.list(cljs.core.list((1),(0)));var inst_13494 = ai.ann.FeedForward.call(null,inst_13493,inst_13475__$1);var inst_13495 = cljs.core.reverse.call(null,inst_13494);var inst_13496 = cljs.core.pr_str.call(null,inst_13495);var inst_13497 = console.log(inst_13496);var inst_13498 = cljs.core.async.timeout.call(null,(100));var state_13505__$1 = (function (){var statearr_13509 = state_13505;(statearr_13509[(10)] = inst_13497);
(statearr_13509[(11)] = inst_13477);
(statearr_13509[(12)] = inst_13492);
(statearr_13509[(13)] = inst_13482);
(statearr_13509[(7)] = inst_13475__$1);
(statearr_13509[(14)] = inst_13487);
return statearr_13509;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13505__$1,(4),inst_13498);
} else
{if((state_val_13506 === (1)))
{var inst_13454 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_13455 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13454);var inst_13456 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_13457 = cljs.core._conj.call(null,inst_13455,inst_13456);var inst_13458 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13457);var inst_13459 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13460 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13459);var inst_13461 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13462 = cljs.core._conj.call(null,inst_13460,inst_13461);var inst_13463 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13464 = cljs.core._conj.call(null,inst_13462,inst_13463);var inst_13465 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13466 = cljs.core._conj.call(null,inst_13464,inst_13465);var inst_13467 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13468 = cljs.core._conj.call(null,inst_13466,inst_13467);var inst_13469 = cljs.core._conj.call(null,inst_13458,inst_13468);var inst_13470 = inst_13469;var state_13505__$1 = (function (){var statearr_13510 = state_13505;(statearr_13510[(9)] = inst_13470);
return statearr_13510;
})();var statearr_13511_13520 = state_13505__$1;(statearr_13511_13520[(2)] = null);
(statearr_13511_13520[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13515[(0)] = state_machine__6189__auto__);
(statearr_13515[(1)] = (1));
return statearr_13515;
});
var state_machine__6189__auto____1 = (function (state_13505){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13516){if((e13516 instanceof Object))
{var ex__6192__auto__ = e13516;var statearr_13517_13521 = state_13505;(statearr_13517_13521[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13522 = state_13505;
state_13505 = G__13522;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13505){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13518 = f__6204__auto__.call(null);(statearr_13518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_xor = (function test_train_xor(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_13623){var state_val_13624 = (state_13623[(1)]);if((state_val_13624 === (4)))
{var inst_13593 = (state_13623[(7)]);var inst_13618 = (state_13623[(2)]);var inst_13588 = inst_13593;var state_13623__$1 = (function (){var statearr_13625 = state_13623;(statearr_13625[(8)] = inst_13618);
(statearr_13625[(9)] = inst_13588);
return statearr_13625;
})();var statearr_13626_13637 = state_13623__$1;(statearr_13626_13637[(2)] = null);
(statearr_13626_13637[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13624 === (3)))
{var inst_13621 = (state_13623[(2)]);var state_13623__$1 = state_13623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13623__$1,inst_13621);
} else
{if((state_val_13624 === (2)))
{var inst_13593 = (state_13623[(7)]);var inst_13588 = (state_13623[(9)]);var inst_13591 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_13592 = ai.ann.Train.call(null,inst_13588,inst_13591,(1),0.01);var inst_13593__$1 = cljs.core.nth.call(null,inst_13592,(0),null);var inst_13594 = cljs.core.nth.call(null,inst_13592,(1),null);var inst_13595 = console.log(inst_13594);var inst_13596 = cljs.core.list(cljs.core.list((0),(0)));var inst_13597 = ai.ann.FeedForward.call(null,inst_13596,inst_13593__$1);var inst_13598 = cljs.core.reverse.call(null,inst_13597);var inst_13599 = cljs.core.pr_str.call(null,inst_13598);var inst_13600 = console.log(inst_13599);var inst_13601 = cljs.core.list(cljs.core.list((0),(1)));var inst_13602 = ai.ann.FeedForward.call(null,inst_13601,inst_13593__$1);var inst_13603 = cljs.core.reverse.call(null,inst_13602);var inst_13604 = cljs.core.pr_str.call(null,inst_13603);var inst_13605 = console.log(inst_13604);var inst_13606 = cljs.core.list(cljs.core.list((1),(1)));var inst_13607 = ai.ann.FeedForward.call(null,inst_13606,inst_13593__$1);var inst_13608 = cljs.core.reverse.call(null,inst_13607);var inst_13609 = cljs.core.pr_str.call(null,inst_13608);var inst_13610 = console.log(inst_13609);var inst_13611 = cljs.core.list(cljs.core.list((1),(0)));var inst_13612 = ai.ann.FeedForward.call(null,inst_13611,inst_13593__$1);var inst_13613 = cljs.core.reverse.call(null,inst_13612);var inst_13614 = cljs.core.pr_str.call(null,inst_13613);var inst_13615 = console.log(inst_13614);var inst_13616 = cljs.core.async.timeout.call(null,(1000));var state_13623__$1 = (function (){var statearr_13627 = state_13623;(statearr_13627[(10)] = inst_13615);
(statearr_13627[(7)] = inst_13593__$1);
(statearr_13627[(11)] = inst_13595);
(statearr_13627[(12)] = inst_13605);
(statearr_13627[(13)] = inst_13610);
(statearr_13627[(14)] = inst_13600);
return statearr_13627;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13623__$1,(4),inst_13616);
} else
{if((state_val_13624 === (1)))
{var inst_13580 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13581 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13580);var inst_13582 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13581);var inst_13583 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13584 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13583);var inst_13585 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_13586 = cljs.core._conj.call(null,inst_13584,inst_13585);var inst_13587 = cljs.core._conj.call(null,inst_13582,inst_13586);var inst_13588 = inst_13587;var state_13623__$1 = (function (){var statearr_13628 = state_13623;(statearr_13628[(9)] = inst_13588);
return statearr_13628;
})();var statearr_13629_13638 = state_13623__$1;(statearr_13629_13638[(2)] = null);
(statearr_13629_13638[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13633[(0)] = state_machine__6189__auto__);
(statearr_13633[(1)] = (1));
return statearr_13633;
});
var state_machine__6189__auto____1 = (function (state_13623){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13623);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13634){if((e13634 instanceof Object))
{var ex__6192__auto__ = e13634;var statearr_13635_13639 = state_13623;(statearr_13635_13639[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13640 = state_13623;
state_13623 = G__13640;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13623){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13636 = f__6204__auto__.call(null);(statearr_13636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13636;
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
