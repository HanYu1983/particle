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
return (function (state_24351){var state_val_24352 = (state_24351[(1)]);if((state_val_24352 === (5)))
{var inst_24226 = (state_24351[(7)]);var inst_24232 = (state_24351[(8)]);var inst_24238 = (state_24351[(9)]);var inst_24227 = (state_24351[(10)]);var inst_24228 = (state_24351[(11)]);var inst_24233 = (state_24351[(12)]);var inst_24239 = (state_24351[(13)]);var inst_24237 = (state_24351[(14)]);var inst_24230 = (state_24351[(15)]);var inst_24229 = (state_24351[(16)]);var inst_24231 = (state_24351[(17)]);var inst_24246 = (state_24351[(2)]);var inst_24247 = cljs.core.get.call(null,inst_24246,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_24248 = cljs.core.get.call(null,inst_24246,new cljs.core.Keyword(null,"z","z",-789527183));var inst_24249 = cljs.core.get.call(null,inst_24246,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_24250 = cljs.core.repeat.call(null,(5),(0));var inst_24251 = (function (){var ctx = inst_24233;var canvas4 = inst_24229;var w = inst_24238;var cs = inst_24247;var err = inst_24227;var infos = inst_24228;var map__24223 = inst_24246;var vec__24221 = inst_24226;var canvas = inst_24232;var canvas3 = inst_24230;var z = inst_24248;var v_z = inst_24249;var vec__24222 = inst_24237;var h = inst_24239;var canvas2 = inst_24231;return ((function (ctx,canvas4,w,cs,err,infos,map__24223,vec__24221,canvas,canvas3,z,v_z,vec__24222,h,canvas2,inst_24226,inst_24232,inst_24238,inst_24227,inst_24228,inst_24233,inst_24239,inst_24237,inst_24230,inst_24229,inst_24231,inst_24246,inst_24247,inst_24248,inst_24249,inst_24250,state_val_24352,c__6202__auto__){
return (function (p1__24075_SHARP_){return Math.abs(p1__24075_SHARP_);
});
;})(ctx,canvas4,w,cs,err,infos,map__24223,vec__24221,canvas,canvas3,z,v_z,vec__24222,h,canvas2,inst_24226,inst_24232,inst_24238,inst_24227,inst_24228,inst_24233,inst_24239,inst_24237,inst_24230,inst_24229,inst_24231,inst_24246,inst_24247,inst_24248,inst_24249,inst_24250,state_val_24352,c__6202__auto__))
})();var inst_24252 = cljs.core.map.call(null,cljs.core._PLUS_,inst_24248,inst_24249);var inst_24253 = cljs.core.map.call(null,inst_24251,inst_24252);var inst_24254 = cljs.core.reverse.call(null,inst_24253);var inst_24255 = cljs.core.into.call(null,inst_24250,inst_24254);var inst_24256 = stock.formula.clock_direction.call(null,inst_24249,inst_24248);var inst_24257 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_24228);var inst_24258 = cljs.core.reverse.call(null,inst_24228);var inst_24259 = stock.formula.sar_seq.call(null,(3),inst_24258);var inst_24260 = cljs.core.reverse.call(null,inst_24259);var inst_24261 = cljs.core.reverse.call(null,inst_24228);var inst_24262 = stock.formula.Chaikin.call(null,(3),(9),inst_24261);var inst_24263 = cljs.core.reverse.call(null,inst_24262);var inst_24264 = cljs.core.reverse.call(null,inst_24228);var inst_24265 = stock.formula.EOM.call(null,(14),inst_24264);var inst_24266 = cljs.core.reverse.call(null,inst_24265);var inst_24267 = stock.formula.yu_gv.call(null,(20),inst_24228);var inst_24268 = stock.formula.yu_clock.call(null,(20),inst_24228);var inst_24269 = stock.formula.macd_dif.call(null,(20),(100),inst_24228);var inst_24270 = stock.tool.close.call(null,inst_24228);var inst_24271 = cljs.core.reverse.call(null,inst_24270);var inst_24272 = stock.formula.ema_seq.call(null,(5),inst_24271);var inst_24273 = cljs.core.reverse.call(null,inst_24272);var inst_24274 = cljs.core.map.call(null,cljs.core._,inst_24273,inst_24257);var inst_24275 = stock.formula.rsv_seq.call(null,(100),inst_24228);var inst_24276 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24277 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24278 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24274,"black"];var inst_24279 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24277,inst_24278);var inst_24280 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24281 = stock.formula.sma_seq.call(null,(9),inst_24274);var inst_24282 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24281,"yellow"];var inst_24283 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24280,inst_24282);var inst_24284 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_24285 = cljs.core.count.call(null,inst_24228);var inst_24286 = cljs.core.repeat.call(null,inst_24285,(0));var inst_24287 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24286];var inst_24288 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24284,inst_24287);var inst_24289 = [inst_24279,inst_24283,inst_24288];var inst_24290 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24289,null));var inst_24291 = [inst_24290];var inst_24292 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24276,inst_24291);var inst_24293 = inst_24229.width;var inst_24294 = inst_24229.height;var inst_24295 = inst_24229.getContext("2d");var inst_24296 = stock.drawer.draw.call(null,inst_24292,inst_24293,inst_24294,inst_24295);var inst_24297 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24298 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24299 = stock.formula.sma_seq.call(null,(3),inst_24275);var inst_24300 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24299,"black"];var inst_24301 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24298,inst_24300);var inst_24302 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24303 = stock.formula.sma_seq.call(null,(9),inst_24275);var inst_24304 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24303,"yellow"];var inst_24305 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24302,inst_24304);var inst_24306 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_24307 = cljs.core.count.call(null,inst_24228);var inst_24308 = cljs.core.repeat.call(null,inst_24307,(50));var inst_24309 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24308];var inst_24310 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24306,inst_24309);var inst_24311 = [inst_24301,inst_24305,inst_24310];var inst_24312 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24311,null));var inst_24313 = [inst_24312];var inst_24314 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24297,inst_24313);var inst_24315 = inst_24230.width;var inst_24316 = inst_24230.height;var inst_24317 = inst_24230.getContext("2d");var inst_24318 = stock.drawer.draw.call(null,inst_24314,inst_24315,inst_24316,inst_24317);var inst_24319 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24320 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24321 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_24248,inst_24249,"blue"];var inst_24322 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24320,inst_24321);var inst_24323 = [inst_24322];var inst_24324 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24323,null));var inst_24325 = [inst_24324];var inst_24326 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24319,inst_24325);var inst_24327 = inst_24231.width;var inst_24328 = inst_24231.height;var inst_24329 = inst_24231.getContext("2d");var inst_24330 = stock.drawer.draw.call(null,inst_24326,inst_24327,inst_24328,inst_24329);var inst_24331 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24332 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_24333 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_24228];var inst_24334 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24332,inst_24333);var inst_24335 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24336 = stock.tool.close.call(null,inst_24228);var inst_24337 = cljs.core.reverse.call(null,inst_24336);var inst_24338 = stock.formula.ema_seq.call(null,(5),inst_24337);var inst_24339 = cljs.core.reverse.call(null,inst_24338);var inst_24340 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24339,"blue"];var inst_24341 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24335,inst_24340);var inst_24342 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24343 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24257,"yellow"];var inst_24344 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24342,inst_24343);var inst_24345 = [inst_24334,inst_24341,inst_24344];var inst_24346 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24345,null));var inst_24347 = [inst_24346];var inst_24348 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24331,inst_24347);var inst_24349 = stock.drawer.draw.call(null,inst_24348,inst_24238,inst_24239,inst_24233);var state_24351__$1 = (function (){var statearr_24353 = state_24351;(statearr_24353[(18)] = inst_24269);
(statearr_24353[(19)] = inst_24318);
(statearr_24353[(20)] = inst_24266);
(statearr_24353[(21)] = inst_24255);
(statearr_24353[(22)] = inst_24268);
(statearr_24353[(23)] = inst_24267);
(statearr_24353[(24)] = inst_24260);
(statearr_24353[(25)] = inst_24296);
(statearr_24353[(26)] = inst_24330);
(statearr_24353[(27)] = inst_24263);
(statearr_24353[(28)] = inst_24256);
return statearr_24353;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24351__$1,inst_24349);
} else
{if((state_val_24352 === (4)))
{var inst_24240 = (state_24351[(29)]);var state_24351__$1 = state_24351;var statearr_24354_24366 = state_24351__$1;(statearr_24354_24366[(2)] = inst_24240);
(statearr_24354_24366[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (3)))
{var inst_24240 = (state_24351[(29)]);var inst_24243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24240);var state_24351__$1 = state_24351;var statearr_24355_24367 = state_24351__$1;(statearr_24355_24367[(2)] = inst_24243);
(statearr_24355_24367[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (2)))
{var inst_24226 = (state_24351[(7)]);var inst_24240 = (state_24351[(29)]);var inst_24232 = (state_24351[(8)]);var inst_24228 = (state_24351[(11)]);var inst_24237 = (state_24351[(14)]);var inst_24226__$1 = (state_24351[(2)]);var inst_24227 = cljs.core.nth.call(null,inst_24226__$1,(0),null);var inst_24228__$1 = cljs.core.nth.call(null,inst_24226__$1,(1),null);var inst_24229 = document.getElementById("index2");var inst_24230 = document.getElementById("index");var inst_24231 = document.getElementById("clock");var inst_24232__$1 = document.getElementById("kline");var inst_24233 = inst_24232__$1.getContext("2d");var inst_24234 = inst_24232__$1.width;var inst_24235 = inst_24232__$1.height;var inst_24236 = [inst_24234,inst_24235];var inst_24237__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24236,null));var inst_24238 = cljs.core.nth.call(null,inst_24237__$1,(0),null);var inst_24239 = cljs.core.nth.call(null,inst_24237__$1,(1),null);var inst_24240__$1 = stock.formula.clock.call(null,(20),inst_24228__$1);var inst_24241 = cljs.core.seq_QMARK_.call(null,inst_24240__$1);var state_24351__$1 = (function (){var statearr_24356 = state_24351;(statearr_24356[(7)] = inst_24226__$1);
(statearr_24356[(29)] = inst_24240__$1);
(statearr_24356[(8)] = inst_24232__$1);
(statearr_24356[(9)] = inst_24238);
(statearr_24356[(10)] = inst_24227);
(statearr_24356[(11)] = inst_24228__$1);
(statearr_24356[(12)] = inst_24233);
(statearr_24356[(13)] = inst_24239);
(statearr_24356[(14)] = inst_24237__$1);
(statearr_24356[(15)] = inst_24230);
(statearr_24356[(16)] = inst_24229);
(statearr_24356[(17)] = inst_24231);
return statearr_24356;
})();if(inst_24241)
{var statearr_24357_24368 = state_24351__$1;(statearr_24357_24368[(1)] = (3));
} else
{var statearr_24358_24369 = state_24351__$1;(statearr_24358_24369[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (1)))
{var inst_24224 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_24351__$1 = state_24351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24351__$1,(2),inst_24224);
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
var state_machine__6188__auto____0 = (function (){var statearr_24362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24362[(0)] = state_machine__6188__auto__);
(statearr_24362[(1)] = (1));
return statearr_24362;
});
var state_machine__6188__auto____1 = (function (state_24351){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24363){if((e24363 instanceof Object))
{var ex__6191__auto__ = e24363;var statearr_24364_24370 = state_24351;(statearr_24364_24370[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24371 = state_24351;
state_24351 = G__24371;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24351){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_24365 = f__6203__auto__.call(null);(statearr_24365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
