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
app.stock.main.main = (function main(){var onView_64425 = cljs.core.async.chan.call(null);var onModel_64426 = cljs.core.async.chan.call(null);var onSys_64427 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_64425,onModel_64426,onSys_64427){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_64425,onModel_64426,onSys_64427){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_64425,onModel_64426,onSys_64427){
return (function (state_64338){var state_val_64339 = (state_64338[(1)]);if((state_val_64339 === (2)))
{var inst_64336 = (state_64338[(2)]);var state_64338__$1 = state_64338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64338__$1,inst_64336);
} else
{if((state_val_64339 === (1)))
{var state_64338__$1 = state_64338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64338__$1,(2),onView_64425,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_64425,onModel_64426,onSys_64427))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_64425,onModel_64426,onSys_64427){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64343 = [null,null,null,null,null,null,null];(statearr_64343[(0)] = state_machine__6188__auto__);
(statearr_64343[(1)] = (1));
return statearr_64343;
});
var state_machine__6188__auto____1 = (function (state_64338){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64338);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64344){if((e64344 instanceof Object))
{var ex__6191__auto__ = e64344;var statearr_64345_64428 = state_64338;(statearr_64345_64428[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64429 = state_64338;
state_64338 = G__64429;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64338){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_64425,onModel_64426,onSys_64427))
})();var state__6204__auto__ = (function (){var statearr_64346 = f__6203__auto__.call(null);(statearr_64346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_64346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_64425,onModel_64426,onSys_64427))
);
return c__6202__auto__;
});})(onView_64425,onModel_64426,onSys_64427))
);
var c__6202__auto___64430 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___64430,onView_64425,onModel_64426,onSys_64427){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___64430,onView_64425,onModel_64426,onSys_64427){
return (function (state_64355){var state_val_64356 = (state_64355[(1)]);if((state_val_64356 === (4)))
{var inst_64349 = (state_64355[(2)]);var inst_64350 = common.onModel.onNext(inst_64349);var state_64355__$1 = (function (){var statearr_64357 = state_64355;(statearr_64357[(7)] = inst_64350);
return statearr_64357;
})();var statearr_64358_64431 = state_64355__$1;(statearr_64358_64431[(2)] = null);
(statearr_64358_64431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64356 === (3)))
{var inst_64353 = (state_64355[(2)]);var state_64355__$1 = state_64355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64355__$1,inst_64353);
} else
{if((state_val_64356 === (2)))
{var state_64355__$1 = state_64355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64355__$1,(4),onModel_64426);
} else
{if((state_val_64356 === (1)))
{var state_64355__$1 = state_64355;var statearr_64359_64432 = state_64355__$1;(statearr_64359_64432[(2)] = null);
(statearr_64359_64432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___64430,onView_64425,onModel_64426,onSys_64427))
;return ((function (switch__6187__auto__,c__6202__auto___64430,onView_64425,onModel_64426,onSys_64427){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64363 = [null,null,null,null,null,null,null,null];(statearr_64363[(0)] = state_machine__6188__auto__);
(statearr_64363[(1)] = (1));
return statearr_64363;
});
var state_machine__6188__auto____1 = (function (state_64355){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64364){if((e64364 instanceof Object))
{var ex__6191__auto__ = e64364;var statearr_64365_64433 = state_64355;(statearr_64365_64433[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64434 = state_64355;
state_64355 = G__64434;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64355){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___64430,onView_64425,onModel_64426,onSys_64427))
})();var state__6204__auto__ = (function (){var statearr_64366 = f__6203__auto__.call(null);(statearr_64366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___64430);
return statearr_64366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___64430,onView_64425,onModel_64426,onSys_64427))
);
var c__6202__auto___64435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___64435,onView_64425,onModel_64426,onSys_64427){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___64435,onView_64425,onModel_64426,onSys_64427){
return (function (state_64403){var state_val_64404 = (state_64403[(1)]);if((state_val_64404 === (7)))
{var inst_64398 = (state_64403[(2)]);var inst_64370 = inst_64398;var state_64403__$1 = (function (){var statearr_64405 = state_64403;(statearr_64405[(7)] = inst_64370);
return statearr_64405;
})();var statearr_64406_64436 = state_64403__$1;(statearr_64406_64436[(2)] = null);
(statearr_64406_64436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (1)))
{var inst_64367 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_64368 = [onView_64425,onModel_64426,onSys_64427,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_64369 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64367,inst_64368);var inst_64370 = inst_64369;var state_64403__$1 = (function (){var statearr_64407 = state_64403;(statearr_64407[(7)] = inst_64370);
return statearr_64407;
})();var statearr_64408_64437 = state_64403__$1;(statearr_64408_64437[(2)] = null);
(statearr_64408_64437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (4)))
{var inst_64378 = (state_64403[(8)]);var inst_64376 = (state_64403[(2)]);var inst_64377 = cljs.core.nth.call(null,inst_64376,(0),null);var inst_64378__$1 = cljs.core.nth.call(null,inst_64376,(1),null);var inst_64382 = cljs.core._EQ_.call(null,onSys_64427,inst_64378__$1);var state_64403__$1 = (function (){var statearr_64409 = state_64403;(statearr_64409[(9)] = inst_64377);
(statearr_64409[(8)] = inst_64378__$1);
return statearr_64409;
})();if(inst_64382)
{var statearr_64410_64438 = state_64403__$1;(statearr_64410_64438[(1)] = (5));
} else
{var statearr_64411_64439 = state_64403__$1;(statearr_64411_64439[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (6)))
{var inst_64378 = (state_64403[(8)]);var inst_64389 = cljs.core._EQ_.call(null,onView_64425,inst_64378);var state_64403__$1 = state_64403;if(inst_64389)
{var statearr_64412_64440 = state_64403__$1;(statearr_64412_64440[(1)] = (8));
} else
{var statearr_64413_64441 = state_64403__$1;(statearr_64413_64441[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (3)))
{var inst_64401 = (state_64403[(2)]);var state_64403__$1 = state_64403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64403__$1,inst_64401);
} else
{if((state_val_64404 === (2)))
{var inst_64373 = [onView_64425,onSys_64427];var inst_64374 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64373,null));var state_64403__$1 = state_64403;return cljs.core.async.ioc_alts_BANG_.call(null,state_64403__$1,(4),inst_64374);
} else
{if((state_val_64404 === (9)))
{var inst_64370 = (state_64403[(7)]);var state_64403__$1 = state_64403;var statearr_64414_64442 = state_64403__$1;(statearr_64414_64442[(2)] = inst_64370);
(statearr_64414_64442[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (5)))
{var inst_64370 = (state_64403[(7)]);var inst_64377 = (state_64403[(9)]);var inst_64385 = cljs.core.nth.call(null,inst_64377,(0),null);var inst_64386 = cljs.core.nth.call(null,inst_64377,(1),null);var inst_64387 = app.stock.abstract$.onSystem.call(null,inst_64385,inst_64386,inst_64370);var state_64403__$1 = state_64403;var statearr_64415_64443 = state_64403__$1;(statearr_64415_64443[(2)] = inst_64387);
(statearr_64415_64443[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (10)))
{var inst_64396 = (state_64403[(2)]);var state_64403__$1 = state_64403;var statearr_64416_64444 = state_64403__$1;(statearr_64416_64444[(2)] = inst_64396);
(statearr_64416_64444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64404 === (8)))
{var inst_64370 = (state_64403[(7)]);var inst_64377 = (state_64403[(9)]);var inst_64391 = (inst_64377[(0)]);var inst_64392 = (inst_64377[(1)]);var inst_64393 = app.stock.abstract$.onViewCommand.call(null,inst_64391,inst_64392,inst_64370);var state_64403__$1 = state_64403;var statearr_64417_64445 = state_64403__$1;(statearr_64417_64445[(2)] = inst_64393);
(statearr_64417_64445[(1)] = (10));
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
});})(c__6202__auto___64435,onView_64425,onModel_64426,onSys_64427))
;return ((function (switch__6187__auto__,c__6202__auto___64435,onView_64425,onModel_64426,onSys_64427){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64421 = [null,null,null,null,null,null,null,null,null,null];(statearr_64421[(0)] = state_machine__6188__auto__);
(statearr_64421[(1)] = (1));
return statearr_64421;
});
var state_machine__6188__auto____1 = (function (state_64403){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64422){if((e64422 instanceof Object))
{var ex__6191__auto__ = e64422;var statearr_64423_64446 = state_64403;(statearr_64423_64446[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64447 = state_64403;
state_64403 = G__64447;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64403){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___64435,onView_64425,onModel_64426,onSys_64427))
})();var state__6204__auto__ = (function (){var statearr_64424 = f__6203__auto__.call(null);(statearr_64424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___64435);
return statearr_64424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___64435,onView_64425,onModel_64426,onSys_64427))
);
return null;
});
app.stock.main.main.call(null);
