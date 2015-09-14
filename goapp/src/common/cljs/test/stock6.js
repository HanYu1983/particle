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
test.stock6.main = (function main(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17420){var state_val_17421 = (state_17420[(1)]);if((state_val_17421 === (5)))
{var inst_17298 = (state_17420[(7)]);var inst_17308 = (state_17420[(8)]);var inst_17295 = (state_17420[(9)]);var inst_17300 = (state_17420[(10)]);var inst_17296 = (state_17420[(11)]);var inst_17302 = (state_17420[(12)]);var inst_17297 = (state_17420[(13)]);var inst_17301 = (state_17420[(14)]);var inst_17299 = (state_17420[(15)]);var inst_17306 = (state_17420[(16)]);var inst_17307 = (state_17420[(17)]);var inst_17315 = (state_17420[(2)]);var inst_17316 = cljs.core.get.call(null,inst_17315,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_17317 = cljs.core.get.call(null,inst_17315,new cljs.core.Keyword(null,"z","z",-789527183));var inst_17318 = cljs.core.get.call(null,inst_17315,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_17319 = cljs.core.repeat.call(null,(5),(0));var inst_17320 = (function (){var ctx = inst_17302;var vec__17291 = inst_17306;var canvas4 = inst_17298;var w = inst_17307;var cs = inst_17316;var err = inst_17296;var vec__17290 = inst_17295;var infos = inst_17297;var canvas = inst_17301;var canvas3 = inst_17299;var z = inst_17317;var v_z = inst_17318;var map__17292 = inst_17315;var h = inst_17308;var canvas2 = inst_17300;return ((function (ctx,vec__17291,canvas4,w,cs,err,vec__17290,infos,canvas,canvas3,z,v_z,map__17292,h,canvas2,inst_17298,inst_17308,inst_17295,inst_17300,inst_17296,inst_17302,inst_17297,inst_17301,inst_17299,inst_17306,inst_17307,inst_17315,inst_17316,inst_17317,inst_17318,inst_17319,state_val_17421,c__6203__auto__){
return (function (p1__17144_SHARP_){return Math.abs(p1__17144_SHARP_);
});
;})(ctx,vec__17291,canvas4,w,cs,err,vec__17290,infos,canvas,canvas3,z,v_z,map__17292,h,canvas2,inst_17298,inst_17308,inst_17295,inst_17300,inst_17296,inst_17302,inst_17297,inst_17301,inst_17299,inst_17306,inst_17307,inst_17315,inst_17316,inst_17317,inst_17318,inst_17319,state_val_17421,c__6203__auto__))
})();var inst_17321 = cljs.core.map.call(null,cljs.core._PLUS_,inst_17317,inst_17318);var inst_17322 = cljs.core.map.call(null,inst_17320,inst_17321);var inst_17323 = cljs.core.reverse.call(null,inst_17322);var inst_17324 = cljs.core.into.call(null,inst_17319,inst_17323);var inst_17325 = stock.formula.clock_direction.call(null,inst_17318,inst_17317);var inst_17326 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_17297);var inst_17327 = cljs.core.reverse.call(null,inst_17297);var inst_17328 = stock.formula.sar_seq.call(null,(3),inst_17327);var inst_17329 = cljs.core.reverse.call(null,inst_17328);var inst_17330 = cljs.core.reverse.call(null,inst_17297);var inst_17331 = stock.formula.Chaikin.call(null,(3),(9),inst_17330);var inst_17332 = cljs.core.reverse.call(null,inst_17331);var inst_17333 = cljs.core.reverse.call(null,inst_17297);var inst_17334 = stock.formula.EOM.call(null,(14),inst_17333);var inst_17335 = cljs.core.reverse.call(null,inst_17334);var inst_17336 = stock.formula.yu_gv.call(null,(20),inst_17297);var inst_17337 = stock.formula.yu_clock.call(null,(20),inst_17297);var inst_17338 = stock.formula.macd_dif.call(null,(20),(100),inst_17297);var inst_17339 = stock.tool.close.call(null,inst_17297);var inst_17340 = cljs.core.reverse.call(null,inst_17339);var inst_17341 = stock.formula.ema_seq.call(null,(5),inst_17340);var inst_17342 = cljs.core.reverse.call(null,inst_17341);var inst_17343 = cljs.core.map.call(null,cljs.core._,inst_17342,inst_17326);var inst_17344 = stock.formula.rsv_seq.call(null,(100),inst_17297);var inst_17345 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17346 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17347 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17343,"black"];var inst_17348 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17346,inst_17347);var inst_17349 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17350 = stock.formula.sma_seq.call(null,(9),inst_17343);var inst_17351 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17350,"yellow"];var inst_17352 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17349,inst_17351);var inst_17353 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_17354 = cljs.core.count.call(null,inst_17297);var inst_17355 = cljs.core.repeat.call(null,inst_17354,(0));var inst_17356 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17355];var inst_17357 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17353,inst_17356);var inst_17358 = [inst_17348,inst_17352,inst_17357];var inst_17359 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17358,null));var inst_17360 = [inst_17359];var inst_17361 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17345,inst_17360);var inst_17362 = inst_17298.width;var inst_17363 = inst_17298.height;var inst_17364 = inst_17298.getContext("2d");var inst_17365 = stock.drawer.draw.call(null,inst_17361,inst_17362,inst_17363,inst_17364);var inst_17366 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17367 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17368 = stock.formula.sma_seq.call(null,(3),inst_17344);var inst_17369 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17368,"black"];var inst_17370 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17367,inst_17369);var inst_17371 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17372 = stock.formula.sma_seq.call(null,(9),inst_17344);var inst_17373 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17372,"yellow"];var inst_17374 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17371,inst_17373);var inst_17375 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_17376 = cljs.core.count.call(null,inst_17297);var inst_17377 = cljs.core.repeat.call(null,inst_17376,(50));var inst_17378 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17377];var inst_17379 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17375,inst_17378);var inst_17380 = [inst_17370,inst_17374,inst_17379];var inst_17381 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17380,null));var inst_17382 = [inst_17381];var inst_17383 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17366,inst_17382);var inst_17384 = inst_17299.width;var inst_17385 = inst_17299.height;var inst_17386 = inst_17299.getContext("2d");var inst_17387 = stock.drawer.draw.call(null,inst_17383,inst_17384,inst_17385,inst_17386);var inst_17388 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17389 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17390 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_17317,inst_17318,"blue"];var inst_17391 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17389,inst_17390);var inst_17392 = [inst_17391];var inst_17393 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17392,null));var inst_17394 = [inst_17393];var inst_17395 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17388,inst_17394);var inst_17396 = inst_17300.width;var inst_17397 = inst_17300.height;var inst_17398 = inst_17300.getContext("2d");var inst_17399 = stock.drawer.draw.call(null,inst_17395,inst_17396,inst_17397,inst_17398);var inst_17400 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_17401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_17402 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_17297];var inst_17403 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17401,inst_17402);var inst_17404 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17405 = stock.tool.close.call(null,inst_17297);var inst_17406 = cljs.core.reverse.call(null,inst_17405);var inst_17407 = stock.formula.ema_seq.call(null,(5),inst_17406);var inst_17408 = cljs.core.reverse.call(null,inst_17407);var inst_17409 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17408,"blue"];var inst_17410 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17404,inst_17409);var inst_17411 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_17412 = [new cljs.core.Keyword(null,"line","line",212345235),inst_17326,"yellow"];var inst_17413 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17411,inst_17412);var inst_17414 = [inst_17403,inst_17410,inst_17413];var inst_17415 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17414,null));var inst_17416 = [inst_17415];var inst_17417 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17400,inst_17416);var inst_17418 = stock.drawer.draw.call(null,inst_17417,inst_17307,inst_17308,inst_17302);var state_17420__$1 = (function (){var statearr_17422 = state_17420;(statearr_17422[(18)] = inst_17329);
(statearr_17422[(19)] = inst_17335);
(statearr_17422[(20)] = inst_17338);
(statearr_17422[(21)] = inst_17336);
(statearr_17422[(22)] = inst_17337);
(statearr_17422[(23)] = inst_17387);
(statearr_17422[(24)] = inst_17325);
(statearr_17422[(25)] = inst_17332);
(statearr_17422[(26)] = inst_17324);
(statearr_17422[(27)] = inst_17365);
(statearr_17422[(28)] = inst_17399);
return statearr_17422;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17420__$1,inst_17418);
} else
{if((state_val_17421 === (4)))
{var inst_17309 = (state_17420[(29)]);var state_17420__$1 = state_17420;var statearr_17423_17435 = state_17420__$1;(statearr_17423_17435[(2)] = inst_17309);
(statearr_17423_17435[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17421 === (3)))
{var inst_17309 = (state_17420[(29)]);var inst_17312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17309);var state_17420__$1 = state_17420;var statearr_17424_17436 = state_17420__$1;(statearr_17424_17436[(2)] = inst_17312);
(statearr_17424_17436[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17421 === (2)))
{var inst_17295 = (state_17420[(9)]);var inst_17309 = (state_17420[(29)]);var inst_17297 = (state_17420[(13)]);var inst_17301 = (state_17420[(14)]);var inst_17306 = (state_17420[(16)]);var inst_17295__$1 = (state_17420[(2)]);var inst_17296 = cljs.core.nth.call(null,inst_17295__$1,(0),null);var inst_17297__$1 = cljs.core.nth.call(null,inst_17295__$1,(1),null);var inst_17298 = document.getElementById("index2");var inst_17299 = document.getElementById("index");var inst_17300 = document.getElementById("clock");var inst_17301__$1 = document.getElementById("kline");var inst_17302 = inst_17301__$1.getContext("2d");var inst_17303 = inst_17301__$1.width;var inst_17304 = inst_17301__$1.height;var inst_17305 = [inst_17303,inst_17304];var inst_17306__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17305,null));var inst_17307 = cljs.core.nth.call(null,inst_17306__$1,(0),null);var inst_17308 = cljs.core.nth.call(null,inst_17306__$1,(1),null);var inst_17309__$1 = stock.formula.clock.call(null,(20),inst_17297__$1);var inst_17310 = cljs.core.seq_QMARK_.call(null,inst_17309__$1);var state_17420__$1 = (function (){var statearr_17425 = state_17420;(statearr_17425[(7)] = inst_17298);
(statearr_17425[(8)] = inst_17308);
(statearr_17425[(9)] = inst_17295__$1);
(statearr_17425[(10)] = inst_17300);
(statearr_17425[(11)] = inst_17296);
(statearr_17425[(12)] = inst_17302);
(statearr_17425[(29)] = inst_17309__$1);
(statearr_17425[(13)] = inst_17297__$1);
(statearr_17425[(14)] = inst_17301__$1);
(statearr_17425[(15)] = inst_17299);
(statearr_17425[(16)] = inst_17306__$1);
(statearr_17425[(17)] = inst_17307);
return statearr_17425;
})();if(inst_17310)
{var statearr_17426_17437 = state_17420__$1;(statearr_17426_17437[(1)] = (3));
} else
{var statearr_17427_17438 = state_17420__$1;(statearr_17427_17438[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17421 === (1)))
{var inst_17293 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_17420__$1 = state_17420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17420__$1,(2),inst_17293);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17431[(0)] = state_machine__6189__auto__);
(statearr_17431[(1)] = (1));
return statearr_17431;
});
var state_machine__6189__auto____1 = (function (state_17420){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17432){if((e17432 instanceof Object))
{var ex__6192__auto__ = e17432;var statearr_17433_17439 = state_17420;(statearr_17433_17439[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17440 = state_17420;
state_17420 = G__17440;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17420){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17434 = f__6204__auto__.call(null);(statearr_17434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock6.main.call(null);
