// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock6');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('stock.formula');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.drawer');
goog.require('stock.tool');
goog.require('stock.tool');
test.stock6.main = (function main(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26505){var state_val_26506 = (state_26505[(1)]);if((state_val_26506 === (5)))
{var inst_26386 = (state_26505[(7)]);var inst_26384 = (state_26505[(8)]);var inst_26387 = (state_26505[(9)]);var inst_26382 = (state_26505[(10)]);var inst_26391 = (state_26505[(11)]);var inst_26381 = (state_26505[(12)]);var inst_26383 = (state_26505[(13)]);var inst_26380 = (state_26505[(14)]);var inst_26393 = (state_26505[(15)]);var inst_26385 = (state_26505[(16)]);var inst_26392 = (state_26505[(17)]);var inst_26400 = (state_26505[(2)]);var inst_26401 = cljs.core.get.call(null,inst_26400,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_26402 = cljs.core.get.call(null,inst_26400,new cljs.core.Keyword(null,"z","z",-789527183));var inst_26403 = cljs.core.get.call(null,inst_26400,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_26404 = cljs.core.repeat.call(null,(5),(0));var inst_26405 = (function (){var ctx = inst_26387;var vec__26375 = inst_26380;var canvas4 = inst_26383;var w = inst_26392;var cs = inst_26401;var err = inst_26381;var infos = inst_26382;var canvas = inst_26386;var canvas3 = inst_26384;var z = inst_26402;var v_z = inst_26403;var h = inst_26393;var map__26377 = inst_26400;var canvas2 = inst_26385;var vec__26376 = inst_26391;return ((function (ctx,vec__26375,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,h,map__26377,canvas2,vec__26376,inst_26386,inst_26384,inst_26387,inst_26382,inst_26391,inst_26381,inst_26383,inst_26380,inst_26393,inst_26385,inst_26392,inst_26400,inst_26401,inst_26402,inst_26403,inst_26404,state_val_26506,c__6202__auto__){
return (function (p1__26229_SHARP_){return Math.abs(p1__26229_SHARP_);
});
;})(ctx,vec__26375,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,h,map__26377,canvas2,vec__26376,inst_26386,inst_26384,inst_26387,inst_26382,inst_26391,inst_26381,inst_26383,inst_26380,inst_26393,inst_26385,inst_26392,inst_26400,inst_26401,inst_26402,inst_26403,inst_26404,state_val_26506,c__6202__auto__))
})();var inst_26406 = cljs.core.map.call(null,cljs.core._PLUS_,inst_26402,inst_26403);var inst_26407 = cljs.core.map.call(null,inst_26405,inst_26406);var inst_26408 = cljs.core.reverse.call(null,inst_26407);var inst_26409 = cljs.core.into.call(null,inst_26404,inst_26408);var inst_26410 = stock.formula.clock_direction.call(null,inst_26403,inst_26402);var inst_26411 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_26382);var inst_26412 = cljs.core.reverse.call(null,inst_26382);var inst_26413 = stock.formula.sar_seq.call(null,(3),inst_26412);var inst_26414 = cljs.core.reverse.call(null,inst_26413);var inst_26415 = cljs.core.reverse.call(null,inst_26382);var inst_26416 = stock.formula.Chaikin.call(null,(3),(9),inst_26415);var inst_26417 = cljs.core.reverse.call(null,inst_26416);var inst_26418 = cljs.core.reverse.call(null,inst_26382);var inst_26419 = stock.formula.EOM.call(null,(14),inst_26418);var inst_26420 = cljs.core.reverse.call(null,inst_26419);var inst_26421 = stock.formula.yu_gv.call(null,(20),inst_26382);var inst_26422 = stock.formula.yu_clock.call(null,(20),inst_26382);var inst_26423 = stock.formula.macd_dif.call(null,(20),(100),inst_26382);var inst_26424 = stock.tool.close.call(null,inst_26382);var inst_26425 = cljs.core.reverse.call(null,inst_26424);var inst_26426 = stock.formula.ema_seq.call(null,(5),inst_26425);var inst_26427 = cljs.core.reverse.call(null,inst_26426);var inst_26428 = cljs.core.map.call(null,cljs.core._,inst_26427,inst_26411);var inst_26429 = stock.formula.rsv_seq.call(null,(100),inst_26382);var inst_26430 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_26431 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26432 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26428,"black"];var inst_26433 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26431,inst_26432);var inst_26434 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26435 = stock.formula.sma_seq.call(null,(9),inst_26428);var inst_26436 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26435,"yellow"];var inst_26437 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26434,inst_26436);var inst_26438 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_26439 = cljs.core.count.call(null,inst_26382);var inst_26440 = cljs.core.repeat.call(null,inst_26439,(0));var inst_26441 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26440];var inst_26442 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26438,inst_26441);var inst_26443 = [inst_26433,inst_26437,inst_26442];var inst_26444 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26443,null));var inst_26445 = [inst_26444];var inst_26446 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26430,inst_26445);var inst_26447 = inst_26383.width;var inst_26448 = inst_26383.height;var inst_26449 = inst_26383.getContext("2d");var inst_26450 = stock.drawer.draw.call(null,inst_26446,inst_26447,inst_26448,inst_26449);var inst_26451 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_26452 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26453 = stock.formula.sma_seq.call(null,(3),inst_26429);var inst_26454 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26453,"black"];var inst_26455 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26452,inst_26454);var inst_26456 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26457 = stock.formula.sma_seq.call(null,(9),inst_26429);var inst_26458 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26457,"yellow"];var inst_26459 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26456,inst_26458);var inst_26460 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_26461 = cljs.core.count.call(null,inst_26382);var inst_26462 = cljs.core.repeat.call(null,inst_26461,(50));var inst_26463 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26462];var inst_26464 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26460,inst_26463);var inst_26465 = [inst_26455,inst_26459,inst_26464];var inst_26466 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26465,null));var inst_26467 = [inst_26466];var inst_26468 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26451,inst_26467);var inst_26469 = inst_26384.width;var inst_26470 = inst_26384.height;var inst_26471 = inst_26384.getContext("2d");var inst_26472 = stock.drawer.draw.call(null,inst_26468,inst_26469,inst_26470,inst_26471);var inst_26473 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_26474 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26475 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_26402,inst_26403,"blue"];var inst_26476 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26474,inst_26475);var inst_26477 = [inst_26476];var inst_26478 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26477,null));var inst_26479 = [inst_26478];var inst_26480 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26473,inst_26479);var inst_26481 = inst_26385.width;var inst_26482 = inst_26385.height;var inst_26483 = inst_26385.getContext("2d");var inst_26484 = stock.drawer.draw.call(null,inst_26480,inst_26481,inst_26482,inst_26483);var inst_26485 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_26486 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_26487 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_26382];var inst_26488 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26486,inst_26487);var inst_26489 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26490 = stock.tool.close.call(null,inst_26382);var inst_26491 = cljs.core.reverse.call(null,inst_26490);var inst_26492 = stock.formula.ema_seq.call(null,(5),inst_26491);var inst_26493 = cljs.core.reverse.call(null,inst_26492);var inst_26494 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26493,"blue"];var inst_26495 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26489,inst_26494);var inst_26496 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_26497 = [new cljs.core.Keyword(null,"line","line",212345235),inst_26411,"yellow"];var inst_26498 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26496,inst_26497);var inst_26499 = [inst_26488,inst_26495,inst_26498];var inst_26500 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26499,null));var inst_26501 = [inst_26500];var inst_26502 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26485,inst_26501);var inst_26503 = stock.drawer.draw.call(null,inst_26502,inst_26392,inst_26393,inst_26387);var state_26505__$1 = (function (){var statearr_26507 = state_26505;(statearr_26507[(18)] = inst_26423);
(statearr_26507[(19)] = inst_26450);
(statearr_26507[(20)] = inst_26472);
(statearr_26507[(21)] = inst_26420);
(statearr_26507[(22)] = inst_26421);
(statearr_26507[(23)] = inst_26484);
(statearr_26507[(24)] = inst_26409);
(statearr_26507[(25)] = inst_26422);
(statearr_26507[(26)] = inst_26414);
(statearr_26507[(27)] = inst_26410);
(statearr_26507[(28)] = inst_26417);
return statearr_26507;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26505__$1,inst_26503);
} else
{if((state_val_26506 === (4)))
{var inst_26394 = (state_26505[(29)]);var state_26505__$1 = state_26505;var statearr_26508_26520 = state_26505__$1;(statearr_26508_26520[(2)] = inst_26394);
(statearr_26508_26520[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (3)))
{var inst_26394 = (state_26505[(29)]);var inst_26397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26394);var state_26505__$1 = state_26505;var statearr_26509_26521 = state_26505__$1;(statearr_26509_26521[(2)] = inst_26397);
(statearr_26509_26521[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (2)))
{var inst_26394 = (state_26505[(29)]);var inst_26386 = (state_26505[(7)]);var inst_26382 = (state_26505[(10)]);var inst_26391 = (state_26505[(11)]);var inst_26380 = (state_26505[(14)]);var inst_26380__$1 = (state_26505[(2)]);var inst_26381 = cljs.core.nth.call(null,inst_26380__$1,(0),null);var inst_26382__$1 = cljs.core.nth.call(null,inst_26380__$1,(1),null);var inst_26383 = document.getElementById("index2");var inst_26384 = document.getElementById("index");var inst_26385 = document.getElementById("clock");var inst_26386__$1 = document.getElementById("kline");var inst_26387 = inst_26386__$1.getContext("2d");var inst_26388 = inst_26386__$1.width;var inst_26389 = inst_26386__$1.height;var inst_26390 = [inst_26388,inst_26389];var inst_26391__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26390,null));var inst_26392 = cljs.core.nth.call(null,inst_26391__$1,(0),null);var inst_26393 = cljs.core.nth.call(null,inst_26391__$1,(1),null);var inst_26394__$1 = stock.formula.clock.call(null,(20),inst_26382__$1);var inst_26395 = cljs.core.seq_QMARK_.call(null,inst_26394__$1);var state_26505__$1 = (function (){var statearr_26510 = state_26505;(statearr_26510[(29)] = inst_26394__$1);
(statearr_26510[(7)] = inst_26386__$1);
(statearr_26510[(8)] = inst_26384);
(statearr_26510[(9)] = inst_26387);
(statearr_26510[(10)] = inst_26382__$1);
(statearr_26510[(11)] = inst_26391__$1);
(statearr_26510[(12)] = inst_26381);
(statearr_26510[(13)] = inst_26383);
(statearr_26510[(14)] = inst_26380__$1);
(statearr_26510[(15)] = inst_26393);
(statearr_26510[(16)] = inst_26385);
(statearr_26510[(17)] = inst_26392);
return statearr_26510;
})();if(inst_26395)
{var statearr_26511_26522 = state_26505__$1;(statearr_26511_26522[(1)] = (3));
} else
{var statearr_26512_26523 = state_26505__$1;(statearr_26512_26523[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26506 === (1)))
{var inst_26378 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_26505__$1 = state_26505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26505__$1,(2),inst_26378);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26516[(0)] = state_machine__6188__auto__);
(statearr_26516[(1)] = (1));
return statearr_26516;
});
var state_machine__6188__auto____1 = (function (state_26505){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26517){if((e26517 instanceof Object))
{var ex__6191__auto__ = e26517;var statearr_26518_26524 = state_26505;(statearr_26518_26524[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26525 = state_26505;
state_26505 = G__26525;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26505){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26519 = f__6203__auto__.call(null);(statearr_26519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
