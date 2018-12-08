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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_11410){
var state_val_11411 = (state_11410[(1)]);
if((state_val_11411 === (1))){
var inst_11357 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11358 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11359 = (new cljs.core.List(null,inst_11358,null,(1),null));
var inst_11360 = (new cljs.core.List(null,inst_11357,inst_11359,(2),null));
var inst_11361 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11362 = (new cljs.core.List(null,inst_11361,null,(1),null));
var inst_11363 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);
var inst_11364 = cljs.core.repeatedly.call(null,(2),cljs.core.rand);
var inst_11365 = (new cljs.core.List(null,inst_11364,null,(1),null));
var inst_11366 = (new cljs.core.List(null,inst_11363,inst_11365,(2),null));
var inst_11367 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11368 = (new cljs.core.List(null,inst_11367,null,(1),null));
var inst_11369 = (new cljs.core.List(null,inst_11368,null,(1),null));
var inst_11370 = (new cljs.core.List(null,inst_11366,inst_11369,(2),null));
var inst_11371 = (new cljs.core.List(null,inst_11362,inst_11370,(3),null));
var inst_11372 = (new cljs.core.List(null,inst_11360,inst_11371,(4),null));
var inst_11373 = inst_11372;
var state_11410__$1 = (function (){var statearr_11412 = state_11410;
(statearr_11412[(7)] = inst_11373);

return statearr_11412;
})();
var statearr_11413_11421 = state_11410__$1;
(statearr_11413_11421[(2)] = null);

(statearr_11413_11421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (2))){
var inst_11373 = (state_11410[(7)]);
var inst_11380 = (state_11410[(8)]);
var inst_11378 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list(0.5)),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.2)));
var inst_11379 = ai.ann.Train.call(null,inst_11373,inst_11378,(1),0.01);
var inst_11380__$1 = cljs.core.nth.call(null,inst_11379,(0),null);
var inst_11381 = cljs.core.nth.call(null,inst_11379,(1),null);
var inst_11382 = console.log(inst_11381);
var inst_11383 = cljs.core.list(cljs.core.list((0),(0)));
var inst_11384 = ai.ann.FeedForward.call(null,inst_11383,inst_11380__$1);
var inst_11385 = cljs.core.reverse.call(null,inst_11384);
var inst_11386 = cljs.core.pr_str.call(null,inst_11385);
var inst_11387 = console.log(inst_11386);
var inst_11388 = cljs.core.list(cljs.core.list((0),(1)));
var inst_11389 = ai.ann.FeedForward.call(null,inst_11388,inst_11380__$1);
var inst_11390 = cljs.core.reverse.call(null,inst_11389);
var inst_11391 = cljs.core.pr_str.call(null,inst_11390);
var inst_11392 = console.log(inst_11391);
var inst_11393 = cljs.core.list(cljs.core.list((1),(1)));
var inst_11394 = ai.ann.FeedForward.call(null,inst_11393,inst_11380__$1);
var inst_11395 = cljs.core.reverse.call(null,inst_11394);
var inst_11396 = cljs.core.pr_str.call(null,inst_11395);
var inst_11397 = console.log(inst_11396);
var inst_11398 = cljs.core.list(cljs.core.list((1),(0)));
var inst_11399 = ai.ann.FeedForward.call(null,inst_11398,inst_11380__$1);
var inst_11400 = cljs.core.reverse.call(null,inst_11399);
var inst_11401 = cljs.core.pr_str.call(null,inst_11400);
var inst_11402 = console.log(inst_11401);
var inst_11403 = cljs.core.async.timeout.call(null,(30));
var state_11410__$1 = (function (){var statearr_11414 = state_11410;
(statearr_11414[(9)] = inst_11392);

(statearr_11414[(10)] = inst_11402);

(statearr_11414[(11)] = inst_11382);

(statearr_11414[(8)] = inst_11380__$1);

(statearr_11414[(12)] = inst_11387);

(statearr_11414[(13)] = inst_11397);

return statearr_11414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11410__$1,(4),inst_11403);
} else {
if((state_val_11411 === (3))){
var inst_11408 = (state_11410[(2)]);
var state_11410__$1 = state_11410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11410__$1,inst_11408);
} else {
if((state_val_11411 === (4))){
var inst_11380 = (state_11410[(8)]);
var inst_11405 = (state_11410[(2)]);
var inst_11373 = inst_11380;
var state_11410__$1 = (function (){var statearr_11415 = state_11410;
(statearr_11415[(7)] = inst_11373);

(statearr_11415[(14)] = inst_11405);

return statearr_11415;
})();
var statearr_11416_11422 = state_11410__$1;
(statearr_11416_11422[(2)] = null);

(statearr_11416_11422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$ann$test_train_$_state_machine__3172__auto__ = null;
var test$ann$test_train_$_state_machine__3172__auto____0 = (function (){
var statearr_11417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11417[(0)] = test$ann$test_train_$_state_machine__3172__auto__);

(statearr_11417[(1)] = (1));

return statearr_11417;
});
var test$ann$test_train_$_state_machine__3172__auto____1 = (function (state_11410){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11418){if((e11418 instanceof Object)){
var ex__3175__auto__ = e11418;
var statearr_11419_11423 = state_11410;
(statearr_11419_11423[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11424 = state_11410;
state_11410 = G__11424;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$ann$test_train_$_state_machine__3172__auto__ = function(state_11410){
switch(arguments.length){
case 0:
return test$ann$test_train_$_state_machine__3172__auto____0.call(this);
case 1:
return test$ann$test_train_$_state_machine__3172__auto____1.call(this,state_11410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann$test_train_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann$test_train_$_state_machine__3172__auto____0;
test$ann$test_train_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann$test_train_$_state_machine__3172__auto____1;
return test$ann$test_train_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11420 = f__3262__auto__.call(null);
(statearr_11420[(6)] = c__3261__auto__);

return statearr_11420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
test.ann.test_train_2 = (function test$ann$test_train_2(){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_11478){
var state_val_11479 = (state_11478[(1)]);
if((state_val_11479 === (1))){
var inst_11425 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11426 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11427 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11428 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11429 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11430 = (new cljs.core.List(null,inst_11429,null,(1),null));
var inst_11431 = (new cljs.core.List(null,inst_11428,inst_11430,(2),null));
var inst_11432 = (new cljs.core.List(null,inst_11427,inst_11431,(3),null));
var inst_11433 = (new cljs.core.List(null,inst_11426,inst_11432,(4),null));
var inst_11434 = (new cljs.core.List(null,inst_11425,inst_11433,(5),null));
var inst_11435 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);
var inst_11436 = cljs.core.repeatedly.call(null,(6),cljs.core.rand);
var inst_11437 = (new cljs.core.List(null,inst_11436,null,(1),null));
var inst_11438 = (new cljs.core.List(null,inst_11435,inst_11437,(2),null));
var inst_11439 = (new cljs.core.List(null,inst_11438,null,(1),null));
var inst_11440 = (new cljs.core.List(null,inst_11434,inst_11439,(2),null));
var inst_11441 = inst_11440;
var state_11478__$1 = (function (){var statearr_11480 = state_11478;
(statearr_11480[(7)] = inst_11441);

return statearr_11480;
})();
var statearr_11481_11489 = state_11478__$1;
(statearr_11481_11489[(2)] = null);

(statearr_11481_11489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11479 === (2))){
var inst_11441 = (state_11478[(7)]);
var inst_11448 = (state_11478[(8)]);
var inst_11446 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list(0.5,(1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((1),(0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1),0.5)));
var inst_11447 = ai.ann.Train.call(null,inst_11441,inst_11446,(1),0.01);
var inst_11448__$1 = cljs.core.nth.call(null,inst_11447,(0),null);
var inst_11449 = cljs.core.nth.call(null,inst_11447,(1),null);
var inst_11450 = console.log(inst_11449);
var inst_11451 = cljs.core.list(cljs.core.list((0),(0)));
var inst_11452 = ai.ann.FeedForward.call(null,inst_11451,inst_11448__$1);
var inst_11453 = cljs.core.reverse.call(null,inst_11452);
var inst_11454 = cljs.core.pr_str.call(null,inst_11453);
var inst_11455 = console.log(inst_11454);
var inst_11456 = cljs.core.list(cljs.core.list((0),(1)));
var inst_11457 = ai.ann.FeedForward.call(null,inst_11456,inst_11448__$1);
var inst_11458 = cljs.core.reverse.call(null,inst_11457);
var inst_11459 = cljs.core.pr_str.call(null,inst_11458);
var inst_11460 = console.log(inst_11459);
var inst_11461 = cljs.core.list(cljs.core.list((1),(1)));
var inst_11462 = ai.ann.FeedForward.call(null,inst_11461,inst_11448__$1);
var inst_11463 = cljs.core.reverse.call(null,inst_11462);
var inst_11464 = cljs.core.pr_str.call(null,inst_11463);
var inst_11465 = console.log(inst_11464);
var inst_11466 = cljs.core.list(cljs.core.list((1),(0)));
var inst_11467 = ai.ann.FeedForward.call(null,inst_11466,inst_11448__$1);
var inst_11468 = cljs.core.reverse.call(null,inst_11467);
var inst_11469 = cljs.core.pr_str.call(null,inst_11468);
var inst_11470 = console.log(inst_11469);
var inst_11471 = cljs.core.async.timeout.call(null,(100));
var state_11478__$1 = (function (){var statearr_11482 = state_11478;
(statearr_11482[(9)] = inst_11460);

(statearr_11482[(10)] = inst_11450);

(statearr_11482[(8)] = inst_11448__$1);

(statearr_11482[(11)] = inst_11470);

(statearr_11482[(12)] = inst_11465);

(statearr_11482[(13)] = inst_11455);

return statearr_11482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11478__$1,(4),inst_11471);
} else {
if((state_val_11479 === (3))){
var inst_11476 = (state_11478[(2)]);
var state_11478__$1 = state_11478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11478__$1,inst_11476);
} else {
if((state_val_11479 === (4))){
var inst_11448 = (state_11478[(8)]);
var inst_11473 = (state_11478[(2)]);
var inst_11441 = inst_11448;
var state_11478__$1 = (function (){var statearr_11483 = state_11478;
(statearr_11483[(7)] = inst_11441);

(statearr_11483[(14)] = inst_11473);

return statearr_11483;
})();
var statearr_11484_11490 = state_11478__$1;
(statearr_11484_11490[(2)] = null);

(statearr_11484_11490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$ann$test_train_2_$_state_machine__3172__auto__ = null;
var test$ann$test_train_2_$_state_machine__3172__auto____0 = (function (){
var statearr_11485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11485[(0)] = test$ann$test_train_2_$_state_machine__3172__auto__);

(statearr_11485[(1)] = (1));

return statearr_11485;
});
var test$ann$test_train_2_$_state_machine__3172__auto____1 = (function (state_11478){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11486){if((e11486 instanceof Object)){
var ex__3175__auto__ = e11486;
var statearr_11487_11491 = state_11478;
(statearr_11487_11491[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11492 = state_11478;
state_11478 = G__11492;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$ann$test_train_2_$_state_machine__3172__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return test$ann$test_train_2_$_state_machine__3172__auto____0.call(this);
case 1:
return test$ann$test_train_2_$_state_machine__3172__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann$test_train_2_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann$test_train_2_$_state_machine__3172__auto____0;
test$ann$test_train_2_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann$test_train_2_$_state_machine__3172__auto____1;
return test$ann$test_train_2_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11488 = f__3262__auto__.call(null);
(statearr_11488[(6)] = c__3261__auto__);

return statearr_11488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
test.ann.test_train_xor = (function test$ann$test_train_xor(){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_11538){
var state_val_11539 = (state_11538[(1)]);
if((state_val_11539 === (1))){
var inst_11493 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11494 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11495 = (new cljs.core.List(null,inst_11494,null,(1),null));
var inst_11496 = (new cljs.core.List(null,inst_11493,inst_11495,(2),null));
var inst_11497 = cljs.core.repeatedly.call(null,(3),cljs.core.rand);
var inst_11498 = (new cljs.core.List(null,inst_11497,null,(1),null));
var inst_11499 = (new cljs.core.List(null,inst_11498,null,(1),null));
var inst_11500 = (new cljs.core.List(null,inst_11496,inst_11499,(2),null));
var inst_11501 = inst_11500;
var state_11538__$1 = (function (){var statearr_11540 = state_11538;
(statearr_11540[(7)] = inst_11501);

return statearr_11540;
})();
var statearr_11541_11549 = state_11538__$1;
(statearr_11541_11549[(2)] = null);

(statearr_11541_11549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11539 === (2))){
var inst_11501 = (state_11538[(7)]);
var inst_11508 = (state_11538[(8)]);
var inst_11506 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));
var inst_11507 = ai.ann.Train.call(null,inst_11501,inst_11506,(1),0.01);
var inst_11508__$1 = cljs.core.nth.call(null,inst_11507,(0),null);
var inst_11509 = cljs.core.nth.call(null,inst_11507,(1),null);
var inst_11510 = console.log(inst_11509);
var inst_11511 = cljs.core.list(cljs.core.list((0),(0)));
var inst_11512 = ai.ann.FeedForward.call(null,inst_11511,inst_11508__$1);
var inst_11513 = cljs.core.reverse.call(null,inst_11512);
var inst_11514 = cljs.core.pr_str.call(null,inst_11513);
var inst_11515 = console.log(inst_11514);
var inst_11516 = cljs.core.list(cljs.core.list((0),(1)));
var inst_11517 = ai.ann.FeedForward.call(null,inst_11516,inst_11508__$1);
var inst_11518 = cljs.core.reverse.call(null,inst_11517);
var inst_11519 = cljs.core.pr_str.call(null,inst_11518);
var inst_11520 = console.log(inst_11519);
var inst_11521 = cljs.core.list(cljs.core.list((1),(1)));
var inst_11522 = ai.ann.FeedForward.call(null,inst_11521,inst_11508__$1);
var inst_11523 = cljs.core.reverse.call(null,inst_11522);
var inst_11524 = cljs.core.pr_str.call(null,inst_11523);
var inst_11525 = console.log(inst_11524);
var inst_11526 = cljs.core.list(cljs.core.list((1),(0)));
var inst_11527 = ai.ann.FeedForward.call(null,inst_11526,inst_11508__$1);
var inst_11528 = cljs.core.reverse.call(null,inst_11527);
var inst_11529 = cljs.core.pr_str.call(null,inst_11528);
var inst_11530 = console.log(inst_11529);
var inst_11531 = cljs.core.async.timeout.call(null,(1000));
var state_11538__$1 = (function (){var statearr_11542 = state_11538;
(statearr_11542[(9)] = inst_11525);

(statearr_11542[(8)] = inst_11508__$1);

(statearr_11542[(10)] = inst_11520);

(statearr_11542[(11)] = inst_11530);

(statearr_11542[(12)] = inst_11515);

(statearr_11542[(13)] = inst_11510);

return statearr_11542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11538__$1,(4),inst_11531);
} else {
if((state_val_11539 === (3))){
var inst_11536 = (state_11538[(2)]);
var state_11538__$1 = state_11538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11538__$1,inst_11536);
} else {
if((state_val_11539 === (4))){
var inst_11508 = (state_11538[(8)]);
var inst_11533 = (state_11538[(2)]);
var inst_11501 = inst_11508;
var state_11538__$1 = (function (){var statearr_11543 = state_11538;
(statearr_11543[(7)] = inst_11501);

(statearr_11543[(14)] = inst_11533);

return statearr_11543;
})();
var statearr_11544_11550 = state_11538__$1;
(statearr_11544_11550[(2)] = null);

(statearr_11544_11550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$ann$test_train_xor_$_state_machine__3172__auto__ = null;
var test$ann$test_train_xor_$_state_machine__3172__auto____0 = (function (){
var statearr_11545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11545[(0)] = test$ann$test_train_xor_$_state_machine__3172__auto__);

(statearr_11545[(1)] = (1));

return statearr_11545;
});
var test$ann$test_train_xor_$_state_machine__3172__auto____1 = (function (state_11538){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11546){if((e11546 instanceof Object)){
var ex__3175__auto__ = e11546;
var statearr_11547_11551 = state_11538;
(statearr_11547_11551[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11552 = state_11538;
state_11538 = G__11552;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$ann$test_train_xor_$_state_machine__3172__auto__ = function(state_11538){
switch(arguments.length){
case 0:
return test$ann$test_train_xor_$_state_machine__3172__auto____0.call(this);
case 1:
return test$ann$test_train_xor_$_state_machine__3172__auto____1.call(this,state_11538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann$test_train_xor_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann$test_train_xor_$_state_machine__3172__auto____0;
test$ann$test_train_xor_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann$test_train_xor_$_state_machine__3172__auto____1;
return test$ann$test_train_xor_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11548 = f__3262__auto__.call(null);
(statearr_11548[(6)] = c__3261__auto__);

return statearr_11548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
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
