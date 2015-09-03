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
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_45329){var state_val_45330 = (state_45329[(1)]);if((state_val_45330 === (2)))
{var inst_45327 = (state_45329[(2)]);var state_45329__$1 = state_45329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45329__$1,inst_45327);
} else
{if((state_val_45330 === (1)))
{var state_45329__$1 = state_45329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45329__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45334 = [null,null,null,null,null,null,null];(statearr_45334[(0)] = state_machine__6188__auto__);
(statearr_45334[(1)] = (1));
return statearr_45334;
});
var state_machine__6188__auto____1 = (function (state_45329){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45335){if((e45335 instanceof Object))
{var ex__6191__auto__ = e45335;var statearr_45336_45508 = state_45329;(statearr_45336_45508[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45509 = state_45329;
state_45329 = G__45509;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45329){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45337 = f__6203__auto__.call(null);(statearr_45337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_45337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___45510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45510,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45510,onView,onModel,onTick,mspf){
return (function (state_45351){var state_val_45352 = (state_45351[(1)]);if((state_val_45352 === (4)))
{var inst_45341 = (state_45351[(2)]);var inst_45342 = cljs.core.nth.call(null,inst_45341,(0),null);var inst_45343 = cljs.core.nth.call(null,inst_45341,(1),null);var inst_45344 = cljs.core.nth.call(null,inst_45341,(2),null);var inst_45345 = [inst_45342,inst_45343,inst_45344];var inst_45346 = common.onModel.onNext(inst_45345);var state_45351__$1 = (function (){var statearr_45353 = state_45351;(statearr_45353[(7)] = inst_45346);
return statearr_45353;
})();var statearr_45354_45511 = state_45351__$1;(statearr_45354_45511[(2)] = null);
(statearr_45354_45511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45352 === (3)))
{var inst_45349 = (state_45351[(2)]);var state_45351__$1 = state_45351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45351__$1,inst_45349);
} else
{if((state_val_45352 === (2)))
{var state_45351__$1 = state_45351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45351__$1,(4),onModel);
} else
{if((state_val_45352 === (1)))
{var state_45351__$1 = state_45351;var statearr_45355_45512 = state_45351__$1;(statearr_45355_45512[(2)] = null);
(statearr_45355_45512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___45510,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45510,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45359 = [null,null,null,null,null,null,null,null];(statearr_45359[(0)] = state_machine__6188__auto__);
(statearr_45359[(1)] = (1));
return statearr_45359;
});
var state_machine__6188__auto____1 = (function (state_45351){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45360){if((e45360 instanceof Object))
{var ex__6191__auto__ = e45360;var statearr_45361_45513 = state_45351;(statearr_45361_45513[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45514 = state_45351;
state_45351 = G__45514;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45351){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45510,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45362 = f__6203__auto__.call(null);(statearr_45362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45510);
return statearr_45362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45510,onView,onModel,onTick,mspf))
);
var c__6202__auto___45515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45515,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45515,onView,onModel,onTick,mspf){
return (function (state_45381){var state_val_45382 = (state_45381[(1)]);if((state_val_45382 === (5)))
{var inst_45372 = (state_45381[(7)]);var inst_45365 = (state_45381[(8)]);var inst_45376 = (state_45381[(2)]);var tmp45383 = inst_45365;var inst_45365__$1 = tmp45383;var inst_45366 = inst_45372;var state_45381__$1 = (function (){var statearr_45384 = state_45381;(statearr_45384[(9)] = inst_45366);
(statearr_45384[(10)] = inst_45376);
(statearr_45384[(8)] = inst_45365__$1);
return statearr_45384;
})();var statearr_45385_45516 = state_45381__$1;(statearr_45385_45516[(2)] = null);
(statearr_45385_45516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45382 === (4)))
{var inst_45372 = (state_45381[(7)]);var inst_45366 = (state_45381[(9)]);var inst_45370 = (state_45381[(2)]);var inst_45371 = (new Date());var inst_45372__$1 = inst_45371.getTime();var inst_45373 = (inst_45372__$1 - inst_45366);var inst_45374 = (inst_45373 / (1000));var state_45381__$1 = (function (){var statearr_45386 = state_45381;(statearr_45386[(7)] = inst_45372__$1);
(statearr_45386[(11)] = inst_45370);
return statearr_45386;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45381__$1,(5),onTick,inst_45374);
} else
{if((state_val_45382 === (3)))
{var inst_45379 = (state_45381[(2)]);var state_45381__$1 = state_45381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45381__$1,inst_45379);
} else
{if((state_val_45382 === (2)))
{var inst_45365 = (state_45381[(8)]);var inst_45368 = cljs.core.async.timeout.call(null,inst_45365);var state_45381__$1 = state_45381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45381__$1,(4),inst_45368);
} else
{if((state_val_45382 === (1)))
{var inst_45363 = (new Date());var inst_45364 = inst_45363.getTime();var inst_45365 = mspf;var inst_45366 = inst_45364;var state_45381__$1 = (function (){var statearr_45387 = state_45381;(statearr_45387[(9)] = inst_45366);
(statearr_45387[(8)] = inst_45365);
return statearr_45387;
})();var statearr_45388_45517 = state_45381__$1;(statearr_45388_45517[(2)] = null);
(statearr_45388_45517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___45515,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45515,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45392 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45392[(0)] = state_machine__6188__auto__);
(statearr_45392[(1)] = (1));
return statearr_45392;
});
var state_machine__6188__auto____1 = (function (state_45381){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45381);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45393){if((e45393 instanceof Object))
{var ex__6191__auto__ = e45393;var statearr_45394_45518 = state_45381;(statearr_45394_45518[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45519 = state_45381;
state_45381 = G__45519;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45381){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45515,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45395 = f__6203__auto__.call(null);(statearr_45395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45515);
return statearr_45395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45515,onView,onModel,onTick,mspf))
);
var c__6202__auto___45520 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45520,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45520,onView,onModel,onTick,mspf){
return (function (state_45439){var state_val_45440 = (state_45439[(1)]);if((state_val_45440 === (7)))
{var inst_45434 = (state_45439[(2)]);var inst_45405 = inst_45434;var state_45439__$1 = (function (){var statearr_45441 = state_45439;(statearr_45441[(7)] = inst_45405);
return statearr_45441;
})();var statearr_45442_45521 = state_45439__$1;(statearr_45442_45521[(2)] = null);
(statearr_45442_45521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (1)))
{var inst_45396 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_45397 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_45398 = cljs.core.List.EMPTY;var inst_45399 = [inst_45398];var inst_45400 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45397,inst_45399);var inst_45401 = [(0),(0)];var inst_45402 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45401,null));var inst_45403 = [(0),inst_45400,inst_45402,onModel];var inst_45404 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45396,inst_45403);var inst_45405 = inst_45404;var state_45439__$1 = (function (){var statearr_45443 = state_45439;(statearr_45443[(7)] = inst_45405);
return statearr_45443;
})();var statearr_45444_45522 = state_45439__$1;(statearr_45444_45522[(2)] = null);
(statearr_45444_45522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (4)))
{var inst_45413 = (state_45439[(8)]);var inst_45411 = (state_45439[(2)]);var inst_45412 = cljs.core.nth.call(null,inst_45411,(0),null);var inst_45413__$1 = cljs.core.nth.call(null,inst_45411,(1),null);var inst_45417 = cljs.core._EQ_.call(null,onTick,inst_45413__$1);var state_45439__$1 = (function (){var statearr_45445 = state_45439;(statearr_45445[(8)] = inst_45413__$1);
(statearr_45445[(9)] = inst_45412);
return statearr_45445;
})();if(inst_45417)
{var statearr_45446_45523 = state_45439__$1;(statearr_45446_45523[(1)] = (5));
} else
{var statearr_45447_45524 = state_45439__$1;(statearr_45447_45524[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (6)))
{var inst_45413 = (state_45439[(8)]);var inst_45425 = cljs.core._EQ_.call(null,onView,inst_45413);var state_45439__$1 = state_45439;if(inst_45425)
{var statearr_45448_45525 = state_45439__$1;(statearr_45448_45525[(1)] = (8));
} else
{var statearr_45449_45526 = state_45439__$1;(statearr_45449_45526[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (3)))
{var inst_45437 = (state_45439[(2)]);var state_45439__$1 = state_45439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45439__$1,inst_45437);
} else
{if((state_val_45440 === (2)))
{var inst_45408 = [onView,onTick];var inst_45409 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45408,null));var state_45439__$1 = state_45439;return cljs.core.async.ioc_alts_BANG_.call(null,state_45439__$1,(4),inst_45409);
} else
{if((state_val_45440 === (9)))
{var inst_45405 = (state_45439[(7)]);var state_45439__$1 = state_45439;var statearr_45450_45527 = state_45439__$1;(statearr_45450_45527[(2)] = inst_45405);
(statearr_45450_45527[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (5)))
{var inst_45405 = (state_45439[(7)]);var inst_45412 = (state_45439[(9)]);var inst_45419 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_45420 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45419,null));var inst_45421 = cljs.core.partial.call(null,tool.particle.update,inst_45412);var inst_45422 = cljs.core.update_in.call(null,inst_45405,inst_45420,inst_45421);var inst_45423 = app.particle.main.draw.call(null,inst_45422);var state_45439__$1 = state_45439;var statearr_45451_45528 = state_45439__$1;(statearr_45451_45528[(2)] = inst_45423);
(statearr_45451_45528[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (10)))
{var inst_45432 = (state_45439[(2)]);var state_45439__$1 = state_45439;var statearr_45452_45529 = state_45439__$1;(statearr_45452_45529[(2)] = inst_45432);
(statearr_45452_45529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45440 === (8)))
{var inst_45405 = (state_45439[(7)]);var inst_45412 = (state_45439[(9)]);var inst_45427 = (inst_45412[(0)]);var inst_45428 = (inst_45412[(1)]);var inst_45429 = app.particle.abstract$.onViewCommand.call(null,inst_45427,inst_45428,inst_45405);var state_45439__$1 = state_45439;var statearr_45453_45530 = state_45439__$1;(statearr_45453_45530[(2)] = inst_45429);
(statearr_45453_45530[(1)] = (10));
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
});})(c__6202__auto___45520,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45520,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45457 = [null,null,null,null,null,null,null,null,null,null];(statearr_45457[(0)] = state_machine__6188__auto__);
(statearr_45457[(1)] = (1));
return statearr_45457;
});
var state_machine__6188__auto____1 = (function (state_45439){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45439);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45458){if((e45458 instanceof Object))
{var ex__6191__auto__ = e45458;var statearr_45459_45531 = state_45439;(statearr_45459_45531[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45532 = state_45439;
state_45439 = G__45532;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45439){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45520,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45460 = f__6203__auto__.call(null);(statearr_45460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45520);
return statearr_45460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45520,onView,onModel,onTick,mspf))
);
var c__6202__auto___45533 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45533,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45533,onView,onModel,onTick,mspf){
return (function (state_45496){var state_val_45497 = (state_45496[(1)]);if((state_val_45497 === (5)))
{var inst_45494 = (state_45496[(2)]);var state_45496__$1 = state_45496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45496__$1,inst_45494);
} else
{if((state_val_45497 === (4)))
{var inst_45473 = (state_45496[(2)]);var inst_45480 = [(0),(0),(0)];var inst_45481 = [(1),(0),(1),(1)];var inst_45482 = [(10),(20)];var inst_45483 = [(100),(0),3.14];var inst_45484 = {"position":inst_45480,"color":inst_45481,"size":inst_45482,"vel":inst_45483};var inst_45485 = [inst_45484];var inst_45486 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_45485};var inst_45487 = [(0),(0),(1),(1)];var inst_45488 = [(30),(10)];var inst_45489 = [(10),(10),(0)];var inst_45490 = [(100),(100),(0)];var inst_45491 = {"id":"x1","emit":inst_45486,"color":inst_45487,"size":inst_45488,"pos":inst_45489,"vel":inst_45490};var inst_45492 = ["edit-particle",inst_45491];var state_45496__$1 = (function (){var statearr_45498 = state_45496;(statearr_45498[(7)] = inst_45473);
return statearr_45498;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45496__$1,(5),onView,inst_45492);
} else
{if((state_val_45497 === (3)))
{var inst_45470 = (state_45496[(2)]);var inst_45471 = cljs.core.async.timeout.call(null,(1100));var state_45496__$1 = (function (){var statearr_45499 = state_45496;(statearr_45499[(8)] = inst_45470);
return statearr_45499;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45496__$1,(4),inst_45471);
} else
{if((state_val_45497 === (2)))
{var inst_45463 = (state_45496[(2)]);var inst_45466 = [(10),(10),(0)];var inst_45467 = {"id":"x1","pos":inst_45466};var inst_45468 = ["edit-particle",inst_45467];var state_45496__$1 = (function (){var statearr_45500 = state_45496;(statearr_45500[(9)] = inst_45463);
return statearr_45500;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45496__$1,(3),onView,inst_45468);
} else
{if((state_val_45497 === (1)))
{var inst_45461 = cljs.core.async.timeout.call(null,(1000));var state_45496__$1 = state_45496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45496__$1,(2),inst_45461);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___45533,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45533,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45504 = [null,null,null,null,null,null,null,null,null,null];(statearr_45504[(0)] = state_machine__6188__auto__);
(statearr_45504[(1)] = (1));
return statearr_45504;
});
var state_machine__6188__auto____1 = (function (state_45496){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45505){if((e45505 instanceof Object))
{var ex__6191__auto__ = e45505;var statearr_45506_45534 = state_45496;(statearr_45506_45534[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45535 = state_45496;
state_45496 = G__45535;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45496){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45533,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45507 = f__6203__auto__.call(null);(statearr_45507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45533);
return statearr_45507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45533,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
