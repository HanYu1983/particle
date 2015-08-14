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
return (function (state_11424){var state_val_11425 = (state_11424[(1)]);if((state_val_11425 === (4)))
{var inst_11394 = (state_11424[(7)]);var inst_11419 = (state_11424[(2)]);var inst_11389 = inst_11394;var state_11424__$1 = (function (){var statearr_11426 = state_11424;(statearr_11426[(8)] = inst_11419);
(statearr_11426[(9)] = inst_11389);
return statearr_11426;
})();var statearr_11427_11438 = state_11424__$1;(statearr_11427_11438[(2)] = null);
(statearr_11427_11438[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11425 === (3)))
{var inst_11422 = (state_11424[(2)]);var state_11424__$1 = state_11424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11424__$1,inst_11422);
} else
{if((state_val_11425 === (2)))
{var inst_11394 = (state_11424[(7)]);var inst_11389 = (state_11424[(9)]);var inst_11392 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));var inst_11393 = ai.ann.Train.call(null,inst_11389,inst_11392,(1),0.01);var inst_11394__$1 = cljs.core.nth.call(null,inst_11393,(0),null);var inst_11395 = cljs.core.nth.call(null,inst_11393,(1),null);var inst_11396 = console.log(inst_11395);var inst_11397 = cljs.core.list(cljs.core.list((0),(0)));var inst_11398 = ai.ann.FeedForward.call(null,inst_11397,inst_11394__$1);var inst_11399 = cljs.core.reverse.call(null,inst_11398);var inst_11400 = cljs.core.pr_str.call(null,inst_11399);var inst_11401 = console.log(inst_11400);var inst_11402 = cljs.core.list(cljs.core.list((0),(1)));var inst_11403 = ai.ann.FeedForward.call(null,inst_11402,inst_11394__$1);var inst_11404 = cljs.core.reverse.call(null,inst_11403);var inst_11405 = cljs.core.pr_str.call(null,inst_11404);var inst_11406 = console.log(inst_11405);var inst_11407 = cljs.core.list(cljs.core.list((1),(1)));var inst_11408 = ai.ann.FeedForward.call(null,inst_11407,inst_11394__$1);var inst_11409 = cljs.core.reverse.call(null,inst_11408);var inst_11410 = cljs.core.pr_str.call(null,inst_11409);var inst_11411 = console.log(inst_11410);var inst_11412 = cljs.core.list(cljs.core.list((1),(0)));var inst_11413 = ai.ann.FeedForward.call(null,inst_11412,inst_11394__$1);var inst_11414 = cljs.core.reverse.call(null,inst_11413);var inst_11415 = cljs.core.pr_str.call(null,inst_11414);var inst_11416 = console.log(inst_11415);var inst_11417 = cljs.core.async.timeout.call(null,(30));var state_11424__$1 = (function (){var statearr_11428 = state_11424;(statearr_11428[(10)] = inst_11396);
(statearr_11428[(11)] = inst_11406);
(statearr_11428[(12)] = inst_11401);
(statearr_11428[(13)] = inst_11411);
(statearr_11428[(7)] = inst_11394__$1);
(statearr_11428[(14)] = inst_11416);
return statearr_11428;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11424__$1,(4),inst_11417);
} else
{if((state_val_11425 === (1)))
{var inst_11373 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11374 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11373);var inst_11375 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11374);var inst_11376 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_11377 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11376);var inst_11378 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);var inst_11379 = cljs.core._conj.call(null,inst_11377,inst_11378);var inst_11380 = cljs.core._conj.call(null,inst_11375,inst_11379);var inst_11381 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11382 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11381);var inst_11383 = cljs.core._conj.call(null,inst_11380,inst_11382);var inst_11384 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11385 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11384);var inst_11386 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11387 = cljs.core._conj.call(null,inst_11385,inst_11386);var inst_11388 = cljs.core._conj.call(null,inst_11383,inst_11387);var inst_11389 = inst_11388;var state_11424__$1 = (function (){var statearr_11429 = state_11424;(statearr_11429[(9)] = inst_11389);
return statearr_11429;
})();var statearr_11430_11439 = state_11424__$1;(statearr_11430_11439[(2)] = null);
(statearr_11430_11439[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_11434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11434[(0)] = state_machine__6189__auto__);
(statearr_11434[(1)] = (1));
return statearr_11434;
});
var state_machine__6189__auto____1 = (function (state_11424){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11435){if((e11435 instanceof Object))
{var ex__6192__auto__ = e11435;var statearr_11436_11440 = state_11424;(statearr_11436_11440[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11441 = state_11424;
state_11424 = G__11441;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11437 = f__6204__auto__.call(null);(statearr_11437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_2 = (function test_train_2(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11558){var state_val_11559 = (state_11558[(1)]);if((state_val_11559 === (4)))
{var inst_11528 = (state_11558[(7)]);var inst_11553 = (state_11558[(2)]);var inst_11523 = inst_11528;var state_11558__$1 = (function (){var statearr_11560 = state_11558;(statearr_11560[(8)] = inst_11523);
(statearr_11560[(9)] = inst_11553);
return statearr_11560;
})();var statearr_11561_11572 = state_11558__$1;(statearr_11561_11572[(2)] = null);
(statearr_11561_11572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11559 === (3)))
{var inst_11556 = (state_11558[(2)]);var state_11558__$1 = state_11558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11558__$1,inst_11556);
} else
{if((state_val_11559 === (2)))
{var inst_11523 = (state_11558[(8)]);var inst_11528 = (state_11558[(7)]);var inst_11526 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));var inst_11527 = ai.ann.Train.call(null,inst_11523,inst_11526,(1),0.01);var inst_11528__$1 = cljs.core.nth.call(null,inst_11527,(0),null);var inst_11529 = cljs.core.nth.call(null,inst_11527,(1),null);var inst_11530 = console.log(inst_11529);var inst_11531 = cljs.core.list(cljs.core.list((0),(0)));var inst_11532 = ai.ann.FeedForward.call(null,inst_11531,inst_11528__$1);var inst_11533 = cljs.core.reverse.call(null,inst_11532);var inst_11534 = cljs.core.pr_str.call(null,inst_11533);var inst_11535 = console.log(inst_11534);var inst_11536 = cljs.core.list(cljs.core.list((0),(1)));var inst_11537 = ai.ann.FeedForward.call(null,inst_11536,inst_11528__$1);var inst_11538 = cljs.core.reverse.call(null,inst_11537);var inst_11539 = cljs.core.pr_str.call(null,inst_11538);var inst_11540 = console.log(inst_11539);var inst_11541 = cljs.core.list(cljs.core.list((1),(1)));var inst_11542 = ai.ann.FeedForward.call(null,inst_11541,inst_11528__$1);var inst_11543 = cljs.core.reverse.call(null,inst_11542);var inst_11544 = cljs.core.pr_str.call(null,inst_11543);var inst_11545 = console.log(inst_11544);var inst_11546 = cljs.core.list(cljs.core.list((1),(0)));var inst_11547 = ai.ann.FeedForward.call(null,inst_11546,inst_11528__$1);var inst_11548 = cljs.core.reverse.call(null,inst_11547);var inst_11549 = cljs.core.pr_str.call(null,inst_11548);var inst_11550 = console.log(inst_11549);var inst_11551 = cljs.core.async.timeout.call(null,(100));var state_11558__$1 = (function (){var statearr_11562 = state_11558;(statearr_11562[(10)] = inst_11535);
(statearr_11562[(11)] = inst_11545);
(statearr_11562[(12)] = inst_11540);
(statearr_11562[(13)] = inst_11550);
(statearr_11562[(14)] = inst_11530);
(statearr_11562[(7)] = inst_11528__$1);
return statearr_11562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11558__$1,(4),inst_11551);
} else
{if((state_val_11559 === (1)))
{var inst_11507 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_11508 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11507);var inst_11509 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);var inst_11510 = cljs.core._conj.call(null,inst_11508,inst_11509);var inst_11511 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11510);var inst_11512 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11513 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11512);var inst_11514 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11515 = cljs.core._conj.call(null,inst_11513,inst_11514);var inst_11516 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11517 = cljs.core._conj.call(null,inst_11515,inst_11516);var inst_11518 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11519 = cljs.core._conj.call(null,inst_11517,inst_11518);var inst_11520 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11521 = cljs.core._conj.call(null,inst_11519,inst_11520);var inst_11522 = cljs.core._conj.call(null,inst_11511,inst_11521);var inst_11523 = inst_11522;var state_11558__$1 = (function (){var statearr_11563 = state_11558;(statearr_11563[(8)] = inst_11523);
return statearr_11563;
})();var statearr_11564_11573 = state_11558__$1;(statearr_11564_11573[(2)] = null);
(statearr_11564_11573[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_11568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11568[(0)] = state_machine__6189__auto__);
(statearr_11568[(1)] = (1));
return statearr_11568;
});
var state_machine__6189__auto____1 = (function (state_11558){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11569){if((e11569 instanceof Object))
{var ex__6192__auto__ = e11569;var statearr_11570_11574 = state_11558;(statearr_11570_11574[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11575 = state_11558;
state_11558 = G__11575;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11558){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11571 = f__6204__auto__.call(null);(statearr_11571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann.test_train_xor = (function test_train_xor(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11676){var state_val_11677 = (state_11676[(1)]);if((state_val_11677 === (4)))
{var inst_11646 = (state_11676[(7)]);var inst_11671 = (state_11676[(2)]);var inst_11641 = inst_11646;var state_11676__$1 = (function (){var statearr_11678 = state_11676;(statearr_11678[(8)] = inst_11641);
(statearr_11678[(9)] = inst_11671);
return statearr_11678;
})();var statearr_11679_11690 = state_11676__$1;(statearr_11679_11690[(2)] = null);
(statearr_11679_11690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11677 === (3)))
{var inst_11674 = (state_11676[(2)]);var state_11676__$1 = state_11676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11676__$1,inst_11674);
} else
{if((state_val_11677 === (2)))
{var inst_11641 = (state_11676[(8)]);var inst_11646 = (state_11676[(7)]);var inst_11644 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_11645 = ai.ann.Train.call(null,inst_11641,inst_11644,(1),0.01);var inst_11646__$1 = cljs.core.nth.call(null,inst_11645,(0),null);var inst_11647 = cljs.core.nth.call(null,inst_11645,(1),null);var inst_11648 = console.log(inst_11647);var inst_11649 = cljs.core.list(cljs.core.list((0),(0)));var inst_11650 = ai.ann.FeedForward.call(null,inst_11649,inst_11646__$1);var inst_11651 = cljs.core.reverse.call(null,inst_11650);var inst_11652 = cljs.core.pr_str.call(null,inst_11651);var inst_11653 = console.log(inst_11652);var inst_11654 = cljs.core.list(cljs.core.list((0),(1)));var inst_11655 = ai.ann.FeedForward.call(null,inst_11654,inst_11646__$1);var inst_11656 = cljs.core.reverse.call(null,inst_11655);var inst_11657 = cljs.core.pr_str.call(null,inst_11656);var inst_11658 = console.log(inst_11657);var inst_11659 = cljs.core.list(cljs.core.list((1),(1)));var inst_11660 = ai.ann.FeedForward.call(null,inst_11659,inst_11646__$1);var inst_11661 = cljs.core.reverse.call(null,inst_11660);var inst_11662 = cljs.core.pr_str.call(null,inst_11661);var inst_11663 = console.log(inst_11662);var inst_11664 = cljs.core.list(cljs.core.list((1),(0)));var inst_11665 = ai.ann.FeedForward.call(null,inst_11664,inst_11646__$1);var inst_11666 = cljs.core.reverse.call(null,inst_11665);var inst_11667 = cljs.core.pr_str.call(null,inst_11666);var inst_11668 = console.log(inst_11667);var inst_11669 = cljs.core.async.timeout.call(null,(1000));var state_11676__$1 = (function (){var statearr_11680 = state_11676;(statearr_11680[(10)] = inst_11668);
(statearr_11680[(11)] = inst_11648);
(statearr_11680[(12)] = inst_11658);
(statearr_11680[(7)] = inst_11646__$1);
(statearr_11680[(13)] = inst_11663);
(statearr_11680[(14)] = inst_11653);
return statearr_11680;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11676__$1,(4),inst_11669);
} else
{if((state_val_11677 === (1)))
{var inst_11633 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11634 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11633);var inst_11635 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11634);var inst_11636 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11637 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_11636);var inst_11638 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);var inst_11639 = cljs.core._conj.call(null,inst_11637,inst_11638);var inst_11640 = cljs.core._conj.call(null,inst_11635,inst_11639);var inst_11641 = inst_11640;var state_11676__$1 = (function (){var statearr_11681 = state_11676;(statearr_11681[(8)] = inst_11641);
return statearr_11681;
})();var statearr_11682_11691 = state_11676__$1;(statearr_11682_11691[(2)] = null);
(statearr_11682_11691[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_11686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11686[(0)] = state_machine__6189__auto__);
(statearr_11686[(1)] = (1));
return statearr_11686;
});
var state_machine__6189__auto____1 = (function (state_11676){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11676);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11687){if((e11687 instanceof Object))
{var ex__6192__auto__ = e11687;var statearr_11688_11692 = state_11676;(statearr_11688_11692[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11676);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11693 = state_11676;
state_11676 = G__11693;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11676){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11689 = f__6204__auto__.call(null);(statearr_11689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11689;
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
