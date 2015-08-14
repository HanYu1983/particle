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
return (function (state_72340){var state_val_72341 = (state_72340[(1)]);if((state_val_72341 === (5)))
{var inst_72245 = (state_72340[(7)]);var inst_72239 = (state_72340[(8)]);var inst_72237 = (state_72340[(9)]);var inst_72234 = (state_72340[(10)]);var inst_72244 = (state_72340[(11)]);var inst_72235 = (state_72340[(12)]);var inst_72236 = (state_72340[(13)]);var inst_72253 = (state_72340[(2)]);var inst_72254 = cljs.core.get.call(null,inst_72253,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_72255 = cljs.core.get.call(null,inst_72253,new cljs.core.Keyword(null,"z","z",-789527183));var inst_72256 = cljs.core.get.call(null,inst_72253,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_72257 = stock.formula.clock_direction.call(null,inst_72256,inst_72255);var inst_72258 = stock.formula.BBI.call(null,(6),inst_72234);var inst_72259 = cljs.core.reverse.call(null,inst_72234);var inst_72260 = stock.formula.sar_seq.call(null,inst_72259);var inst_72261 = cljs.core.reverse.call(null,inst_72260);var inst_72262 = cljs.core.reverse.call(null,inst_72234);var inst_72263 = stock.formula.Chaikin.call(null,(3),(9),inst_72262);var inst_72264 = cljs.core.reverse.call(null,inst_72263);var inst_72265 = cljs.core.reverse.call(null,inst_72234);var inst_72266 = stock.formula.EOM.call(null,(14),inst_72265);var inst_72267 = cljs.core.reverse.call(null,inst_72266);var inst_72268 = stock.formula.yu_gv.call(null,(20),inst_72234);var inst_72269 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_72270 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_72271 = stock.tool.volume.call(null,inst_72234);var inst_72272 = [new cljs.core.Keyword(null,"line","line",212345235),inst_72271,"blue"];var inst_72273 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72270,inst_72272);var inst_72274 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_72275 = stock.tool.volume.call(null,inst_72234);var inst_72276 = stock.formula.sma_seq.call(null,(6),inst_72275);var inst_72277 = [new cljs.core.Keyword(null,"line","line",212345235),inst_72276,"yellow"];var inst_72278 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72274,inst_72277);var inst_72279 = [inst_72273,inst_72278];var inst_72280 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_72279,null));var inst_72281 = [inst_72280];var inst_72282 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72269,inst_72281);var inst_72283 = inst_72235.width;var inst_72284 = inst_72235.height;var inst_72285 = inst_72235.getContext("2d");var inst_72286 = stock.drawer.draw.call(null,inst_72282,inst_72283,inst_72284,inst_72285);var inst_72287 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_72288 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_72289 = [new cljs.core.Keyword(null,"line","line",212345235),inst_72264];var inst_72290 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72288,inst_72289);var inst_72291 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_72292 = cljs.core.count.call(null,inst_72264);var inst_72293 = cljs.core.repeat.call(null,inst_72292,(0));var inst_72294 = [new cljs.core.Keyword(null,"line","line",212345235),inst_72293];var inst_72295 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72291,inst_72294);var inst_72296 = [inst_72290,inst_72295];var inst_72297 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_72296,null));var inst_72298 = [inst_72297];var inst_72299 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72287,inst_72298);var inst_72300 = inst_72236.width;var inst_72301 = inst_72236.height;var inst_72302 = inst_72236.getContext("2d");var inst_72303 = stock.drawer.draw.call(null,inst_72299,inst_72300,inst_72301,inst_72302);var inst_72304 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_72305 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_72306 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_72255,inst_72256];var inst_72307 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72305,inst_72306);var inst_72308 = [inst_72307];var inst_72309 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_72308,null));var inst_72310 = [inst_72309];var inst_72311 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72304,inst_72310);var inst_72312 = inst_72237.width;var inst_72313 = inst_72237.height;var inst_72314 = inst_72237.getContext("2d");var inst_72315 = stock.drawer.draw.call(null,inst_72311,inst_72312,inst_72313,inst_72314);var inst_72316 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_72317 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_72318 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_72234];var inst_72319 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72317,inst_72318);var inst_72320 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_72321 = stock.tool.close.call(null,inst_72234);var inst_72322 = cljs.core.reverse.call(null,inst_72321);var inst_72323 = stock.formula.ema_seq.call(null,(5),inst_72322);var inst_72324 = cljs.core.reverse.call(null,inst_72323);var inst_72325 = [new cljs.core.Keyword(null,"line","line",212345235),inst_72324,"blue"];var inst_72326 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72320,inst_72325);var inst_72327 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_72328 = stock.tool.close.call(null,inst_72234);var inst_72329 = cljs.core.reverse.call(null,inst_72328);var inst_72330 = stock.formula.ema_seq.call(null,(10),inst_72329);var inst_72331 = cljs.core.reverse.call(null,inst_72330);var inst_72332 = [new cljs.core.Keyword(null,"line","line",212345235),inst_72331,"yellow"];var inst_72333 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72327,inst_72332);var inst_72334 = [inst_72319,inst_72326,inst_72333];var inst_72335 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_72334,null));var inst_72336 = [inst_72335];var inst_72337 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_72316,inst_72336);var inst_72338 = stock.drawer.draw.call(null,inst_72337,inst_72244,inst_72245,inst_72239);var state_72340__$1 = (function (){var statearr_72342 = state_72340;(statearr_72342[(14)] = inst_72257);
(statearr_72342[(15)] = inst_72267);
(statearr_72342[(16)] = inst_72261);
(statearr_72342[(17)] = inst_72268);
(statearr_72342[(18)] = inst_72303);
(statearr_72342[(19)] = inst_72258);
(statearr_72342[(20)] = inst_72286);
(statearr_72342[(21)] = inst_72254);
(statearr_72342[(22)] = inst_72315);
return statearr_72342;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72340__$1,inst_72338);
} else
{if((state_val_72341 === (4)))
{var inst_72247 = (state_72340[(23)]);var state_72340__$1 = state_72340;var statearr_72343_72355 = state_72340__$1;(statearr_72343_72355[(2)] = inst_72247);
(statearr_72343_72355[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_72341 === (3)))
{var inst_72247 = (state_72340[(23)]);var inst_72250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72247);var state_72340__$1 = state_72340;var statearr_72344_72356 = state_72340__$1;(statearr_72344_72356[(2)] = inst_72250);
(statearr_72344_72356[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_72341 === (2)))
{var inst_72247 = (state_72340[(23)]);var inst_72234 = (state_72340[(10)]);var inst_72232 = (state_72340[(2)]);var inst_72233 = cljs.core.nth.call(null,inst_72232,(0),null);var inst_72234__$1 = cljs.core.nth.call(null,inst_72232,(1),null);var inst_72235 = document.getElementById("index2");var inst_72236 = document.getElementById("index");var inst_72237 = document.getElementById("clock");var inst_72238 = document.getElementById("kline");var inst_72239 = inst_72238.getContext("2d");var inst_72240 = inst_72238.width;var inst_72241 = inst_72238.height;var inst_72242 = [inst_72240,inst_72241];var inst_72243 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_72242,null));var inst_72244 = cljs.core.nth.call(null,inst_72243,(0),null);var inst_72245 = cljs.core.nth.call(null,inst_72243,(1),null);var inst_72246 = cljs.core.reverse.call(null,inst_72234__$1);var inst_72247__$1 = stock.formula.clock.call(null,(12),inst_72246);var inst_72248 = cljs.core.seq_QMARK_.call(null,inst_72247__$1);var state_72340__$1 = (function (){var statearr_72345 = state_72340;(statearr_72345[(7)] = inst_72245);
(statearr_72345[(8)] = inst_72239);
(statearr_72345[(23)] = inst_72247__$1);
(statearr_72345[(9)] = inst_72237);
(statearr_72345[(10)] = inst_72234__$1);
(statearr_72345[(11)] = inst_72244);
(statearr_72345[(24)] = inst_72233);
(statearr_72345[(12)] = inst_72235);
(statearr_72345[(13)] = inst_72236);
return statearr_72345;
})();if(inst_72248)
{var statearr_72346_72357 = state_72340__$1;(statearr_72346_72357[(1)] = (3));
} else
{var statearr_72347_72358 = state_72340__$1;(statearr_72347_72358[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_72341 === (1)))
{var inst_72230 = stock.tool.stock_info.call(null,null,(5305),"2015/1/1",(0),(200));var state_72340__$1 = state_72340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72340__$1,(2),inst_72230);
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
var state_machine__6188__auto____0 = (function (){var statearr_72351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_72351[(0)] = state_machine__6188__auto__);
(statearr_72351[(1)] = (1));
return statearr_72351;
});
var state_machine__6188__auto____1 = (function (state_72340){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_72340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e72352){if((e72352 instanceof Object))
{var ex__6191__auto__ = e72352;var statearr_72353_72359 = state_72340;(statearr_72353_72359[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e72352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__72360 = state_72340;
state_72340 = G__72360;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_72340){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_72340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_72354 = f__6203__auto__.call(null);(statearr_72354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_72354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
