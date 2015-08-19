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
return (function (state_80397){var state_val_80398 = (state_80397[(1)]);if((state_val_80398 === (5)))
{var inst_80278 = (state_80397[(7)]);var inst_80276 = (state_80397[(8)]);var inst_80277 = (state_80397[(9)]);var inst_80273 = (state_80397[(10)]);var inst_80284 = (state_80397[(11)]);var inst_80283 = (state_80397[(12)]);var inst_80275 = (state_80397[(13)]);var inst_80274 = (state_80397[(14)]);var inst_80279 = (state_80397[(15)]);var inst_80272 = (state_80397[(16)]);var inst_80285 = (state_80397[(17)]);var inst_80292 = (state_80397[(2)]);var inst_80293 = cljs.core.get.call(null,inst_80292,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_80294 = cljs.core.get.call(null,inst_80292,new cljs.core.Keyword(null,"z","z",-789527183));var inst_80295 = cljs.core.get.call(null,inst_80292,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_80296 = cljs.core.repeat.call(null,(5),(0));var inst_80297 = (function (){var ctx = inst_80279;var vec__80267 = inst_80272;var map__80269 = inst_80292;var canvas4 = inst_80275;var w = inst_80284;var cs = inst_80293;var err = inst_80273;var infos = inst_80274;var canvas = inst_80278;var canvas3 = inst_80276;var vec__80268 = inst_80283;var z = inst_80294;var v_z = inst_80295;var h = inst_80285;var canvas2 = inst_80277;return ((function (ctx,vec__80267,map__80269,canvas4,w,cs,err,infos,canvas,canvas3,vec__80268,z,v_z,h,canvas2,inst_80278,inst_80276,inst_80277,inst_80273,inst_80284,inst_80283,inst_80275,inst_80274,inst_80279,inst_80272,inst_80285,inst_80292,inst_80293,inst_80294,inst_80295,inst_80296,state_val_80398,c__6202__auto__){
return (function (p1__80121_SHARP_){return Math.abs(p1__80121_SHARP_);
});
;})(ctx,vec__80267,map__80269,canvas4,w,cs,err,infos,canvas,canvas3,vec__80268,z,v_z,h,canvas2,inst_80278,inst_80276,inst_80277,inst_80273,inst_80284,inst_80283,inst_80275,inst_80274,inst_80279,inst_80272,inst_80285,inst_80292,inst_80293,inst_80294,inst_80295,inst_80296,state_val_80398,c__6202__auto__))
})();var inst_80298 = cljs.core.map.call(null,cljs.core._PLUS_,inst_80294,inst_80295);var inst_80299 = cljs.core.map.call(null,inst_80297,inst_80298);var inst_80300 = cljs.core.reverse.call(null,inst_80299);var inst_80301 = cljs.core.into.call(null,inst_80296,inst_80300);var inst_80302 = stock.formula.clock_direction.call(null,inst_80295,inst_80294);var inst_80303 = stock.formula.BBI.call(null,(12),inst_80274);var inst_80304 = cljs.core.reverse.call(null,inst_80274);var inst_80305 = stock.formula.sar_seq.call(null,inst_80304);var inst_80306 = cljs.core.reverse.call(null,inst_80305);var inst_80307 = cljs.core.reverse.call(null,inst_80274);var inst_80308 = stock.formula.Chaikin.call(null,(3),(9),inst_80307);var inst_80309 = cljs.core.reverse.call(null,inst_80308);var inst_80310 = cljs.core.reverse.call(null,inst_80274);var inst_80311 = stock.formula.EOM.call(null,(14),inst_80310);var inst_80312 = cljs.core.reverse.call(null,inst_80311);var inst_80313 = stock.formula.yu_gv.call(null,(20),inst_80274);var inst_80314 = stock.formula.yu_clock.call(null,(20),inst_80274);var inst_80315 = stock.formula.macd_dif.call(null,(20),(100),inst_80274);var inst_80316 = stock.tool.close.call(null,inst_80274);var inst_80317 = cljs.core.reverse.call(null,inst_80316);var inst_80318 = stock.formula.ema_seq.call(null,(5),inst_80317);var inst_80319 = cljs.core.reverse.call(null,inst_80318);var inst_80320 = cljs.core.map.call(null,cljs.core._,inst_80319,inst_80303);var inst_80321 = stock.formula.rsv_seq.call(null,(100),inst_80274);var inst_80322 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80323 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80324 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80320,"black"];var inst_80325 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80323,inst_80324);var inst_80326 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80327 = stock.formula.sma_seq.call(null,(9),inst_80320);var inst_80328 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80327,"yellow"];var inst_80329 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80326,inst_80328);var inst_80330 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_80331 = cljs.core.count.call(null,inst_80274);var inst_80332 = cljs.core.repeat.call(null,inst_80331,(0));var inst_80333 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80332];var inst_80334 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80330,inst_80333);var inst_80335 = [inst_80325,inst_80329,inst_80334];var inst_80336 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80335,null));var inst_80337 = [inst_80336];var inst_80338 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80322,inst_80337);var inst_80339 = inst_80275.width;var inst_80340 = inst_80275.height;var inst_80341 = inst_80275.getContext("2d");var inst_80342 = stock.drawer.draw.call(null,inst_80338,inst_80339,inst_80340,inst_80341);var inst_80343 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80344 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80345 = stock.formula.sma_seq.call(null,(3),inst_80321);var inst_80346 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80345,"black"];var inst_80347 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80344,inst_80346);var inst_80348 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80349 = stock.formula.sma_seq.call(null,(9),inst_80321);var inst_80350 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80349,"yellow"];var inst_80351 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80348,inst_80350);var inst_80352 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_80353 = cljs.core.count.call(null,inst_80274);var inst_80354 = cljs.core.repeat.call(null,inst_80353,(50));var inst_80355 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80354];var inst_80356 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80352,inst_80355);var inst_80357 = [inst_80347,inst_80351,inst_80356];var inst_80358 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80357,null));var inst_80359 = [inst_80358];var inst_80360 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80343,inst_80359);var inst_80361 = inst_80276.width;var inst_80362 = inst_80276.height;var inst_80363 = inst_80276.getContext("2d");var inst_80364 = stock.drawer.draw.call(null,inst_80360,inst_80361,inst_80362,inst_80363);var inst_80365 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80366 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80367 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_80294,inst_80295,"blue"];var inst_80368 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80366,inst_80367);var inst_80369 = [inst_80368];var inst_80370 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80369,null));var inst_80371 = [inst_80370];var inst_80372 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80365,inst_80371);var inst_80373 = inst_80277.width;var inst_80374 = inst_80277.height;var inst_80375 = inst_80277.getContext("2d");var inst_80376 = stock.drawer.draw.call(null,inst_80372,inst_80373,inst_80374,inst_80375);var inst_80377 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80378 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_80379 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_80274];var inst_80380 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80378,inst_80379);var inst_80381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80382 = stock.tool.close.call(null,inst_80274);var inst_80383 = cljs.core.reverse.call(null,inst_80382);var inst_80384 = stock.formula.ema_seq.call(null,(5),inst_80383);var inst_80385 = cljs.core.reverse.call(null,inst_80384);var inst_80386 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80385,"blue"];var inst_80387 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80381,inst_80386);var inst_80388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80389 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80303,"yellow"];var inst_80390 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80388,inst_80389);var inst_80391 = [inst_80380,inst_80387,inst_80390];var inst_80392 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80391,null));var inst_80393 = [inst_80392];var inst_80394 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80377,inst_80393);var inst_80395 = stock.drawer.draw.call(null,inst_80394,inst_80284,inst_80285,inst_80279);var state_80397__$1 = (function (){var statearr_80399 = state_80397;(statearr_80399[(18)] = inst_80309);
(statearr_80399[(19)] = inst_80315);
(statearr_80399[(20)] = inst_80314);
(statearr_80399[(21)] = inst_80342);
(statearr_80399[(22)] = inst_80313);
(statearr_80399[(23)] = inst_80312);
(statearr_80399[(24)] = inst_80364);
(statearr_80399[(25)] = inst_80376);
(statearr_80399[(26)] = inst_80306);
(statearr_80399[(27)] = inst_80301);
(statearr_80399[(28)] = inst_80302);
return statearr_80399;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80397__$1,inst_80395);
} else
{if((state_val_80398 === (4)))
{var inst_80286 = (state_80397[(29)]);var state_80397__$1 = state_80397;var statearr_80400_80412 = state_80397__$1;(statearr_80400_80412[(2)] = inst_80286);
(statearr_80400_80412[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80398 === (3)))
{var inst_80286 = (state_80397[(29)]);var inst_80289 = cljs.core.apply.call(null,cljs.core.hash_map,inst_80286);var state_80397__$1 = state_80397;var statearr_80401_80413 = state_80397__$1;(statearr_80401_80413[(2)] = inst_80289);
(statearr_80401_80413[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80398 === (2)))
{var inst_80278 = (state_80397[(7)]);var inst_80286 = (state_80397[(29)]);var inst_80283 = (state_80397[(12)]);var inst_80274 = (state_80397[(14)]);var inst_80272 = (state_80397[(16)]);var inst_80272__$1 = (state_80397[(2)]);var inst_80273 = cljs.core.nth.call(null,inst_80272__$1,(0),null);var inst_80274__$1 = cljs.core.nth.call(null,inst_80272__$1,(1),null);var inst_80275 = document.getElementById("index2");var inst_80276 = document.getElementById("index");var inst_80277 = document.getElementById("clock");var inst_80278__$1 = document.getElementById("kline");var inst_80279 = inst_80278__$1.getContext("2d");var inst_80280 = inst_80278__$1.width;var inst_80281 = inst_80278__$1.height;var inst_80282 = [inst_80280,inst_80281];var inst_80283__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80282,null));var inst_80284 = cljs.core.nth.call(null,inst_80283__$1,(0),null);var inst_80285 = cljs.core.nth.call(null,inst_80283__$1,(1),null);var inst_80286__$1 = stock.formula.clock.call(null,(20),inst_80274__$1);var inst_80287 = cljs.core.seq_QMARK_.call(null,inst_80286__$1);var state_80397__$1 = (function (){var statearr_80402 = state_80397;(statearr_80402[(7)] = inst_80278__$1);
(statearr_80402[(8)] = inst_80276);
(statearr_80402[(9)] = inst_80277);
(statearr_80402[(10)] = inst_80273);
(statearr_80402[(29)] = inst_80286__$1);
(statearr_80402[(11)] = inst_80284);
(statearr_80402[(12)] = inst_80283__$1);
(statearr_80402[(13)] = inst_80275);
(statearr_80402[(14)] = inst_80274__$1);
(statearr_80402[(15)] = inst_80279);
(statearr_80402[(16)] = inst_80272__$1);
(statearr_80402[(17)] = inst_80285);
return statearr_80402;
})();if(inst_80287)
{var statearr_80403_80414 = state_80397__$1;(statearr_80403_80414[(1)] = (3));
} else
{var statearr_80404_80415 = state_80397__$1;(statearr_80404_80415[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80398 === (1)))
{var inst_80270 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_80397__$1 = state_80397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80397__$1,(2),inst_80270);
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
var state_machine__6188__auto____0 = (function (){var statearr_80408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_80408[(0)] = state_machine__6188__auto__);
(statearr_80408[(1)] = (1));
return statearr_80408;
});
var state_machine__6188__auto____1 = (function (state_80397){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_80397);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e80409){if((e80409 instanceof Object))
{var ex__6191__auto__ = e80409;var statearr_80410_80416 = state_80397;(statearr_80410_80416[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e80409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80417 = state_80397;
state_80397 = G__80417;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_80397){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_80397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_80411 = f__6203__auto__.call(null);(statearr_80411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_80411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
