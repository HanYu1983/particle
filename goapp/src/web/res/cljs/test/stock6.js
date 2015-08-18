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
return (function (state_23374){var state_val_23375 = (state_23374[(1)]);if((state_val_23375 === (5)))
{var inst_23255 = (state_23374[(7)]);var inst_23247 = (state_23374[(8)]);var inst_23246 = (state_23374[(9)]);var inst_23244 = (state_23374[(10)]);var inst_23245 = (state_23374[(11)]);var inst_23254 = (state_23374[(12)]);var inst_23243 = (state_23374[(13)]);var inst_23248 = (state_23374[(14)]);var inst_23253 = (state_23374[(15)]);var inst_23249 = (state_23374[(16)]);var inst_23242 = (state_23374[(17)]);var inst_23262 = (state_23374[(2)]);var inst_23263 = cljs.core.get.call(null,inst_23262,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_23264 = cljs.core.get.call(null,inst_23262,new cljs.core.Keyword(null,"z","z",-789527183));var inst_23265 = cljs.core.get.call(null,inst_23262,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_23266 = cljs.core.repeat.call(null,(5),(0));var inst_23267 = (function (){var map__23239 = inst_23262;var ctx = inst_23249;var canvas4 = inst_23245;var w = inst_23254;var cs = inst_23263;var err = inst_23243;var vec__23237 = inst_23242;var infos = inst_23244;var canvas = inst_23248;var canvas3 = inst_23246;var z = inst_23264;var v_z = inst_23265;var h = inst_23255;var canvas2 = inst_23247;var vec__23238 = inst_23253;return ((function (map__23239,ctx,canvas4,w,cs,err,vec__23237,infos,canvas,canvas3,z,v_z,h,canvas2,vec__23238,inst_23255,inst_23247,inst_23246,inst_23244,inst_23245,inst_23254,inst_23243,inst_23248,inst_23253,inst_23249,inst_23242,inst_23262,inst_23263,inst_23264,inst_23265,inst_23266,state_val_23375,c__6202__auto__){
return (function (p1__23084_SHARP_){return Math.abs(p1__23084_SHARP_);
});
;})(map__23239,ctx,canvas4,w,cs,err,vec__23237,infos,canvas,canvas3,z,v_z,h,canvas2,vec__23238,inst_23255,inst_23247,inst_23246,inst_23244,inst_23245,inst_23254,inst_23243,inst_23248,inst_23253,inst_23249,inst_23242,inst_23262,inst_23263,inst_23264,inst_23265,inst_23266,state_val_23375,c__6202__auto__))
})();var inst_23268 = cljs.core.map.call(null,cljs.core._PLUS_,inst_23264,inst_23265);var inst_23269 = cljs.core.map.call(null,inst_23267,inst_23268);var inst_23270 = cljs.core.reverse.call(null,inst_23269);var inst_23271 = cljs.core.into.call(null,inst_23266,inst_23270);var inst_23272 = stock.formula.clock_direction.call(null,inst_23265,inst_23264);var inst_23273 = stock.formula.BBI.call(null,(6),inst_23244);var inst_23274 = cljs.core.reverse.call(null,inst_23244);var inst_23275 = stock.formula.sar_seq.call(null,inst_23274);var inst_23276 = cljs.core.reverse.call(null,inst_23275);var inst_23277 = cljs.core.reverse.call(null,inst_23244);var inst_23278 = stock.formula.Chaikin.call(null,(3),(9),inst_23277);var inst_23279 = cljs.core.reverse.call(null,inst_23278);var inst_23280 = cljs.core.reverse.call(null,inst_23244);var inst_23281 = stock.formula.EOM.call(null,(14),inst_23280);var inst_23282 = cljs.core.reverse.call(null,inst_23281);var inst_23283 = stock.formula.yu_gv.call(null,(20),inst_23244);var inst_23284 = stock.formula.yu_clock.call(null,(20),inst_23244);var inst_23285 = stock.formula.macd_dif.call(null,(5),(10),inst_23244);var inst_23286 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23287 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23288 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23285,"blue"];var inst_23289 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23287,inst_23288);var inst_23290 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23291 = stock.formula.sma_seq.call(null,(9),inst_23285);var inst_23292 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23291,"yellow"];var inst_23293 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23290,inst_23292);var inst_23294 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_23295 = cljs.core.count.call(null,inst_23285);var inst_23296 = cljs.core.repeat.call(null,inst_23295,(0));var inst_23297 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23296];var inst_23298 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23294,inst_23297);var inst_23299 = [inst_23289,inst_23293,inst_23298];var inst_23300 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23299,null));var inst_23301 = [inst_23300];var inst_23302 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23286,inst_23301);var inst_23303 = inst_23245.width;var inst_23304 = inst_23245.height;var inst_23305 = inst_23245.getContext("2d");var inst_23306 = stock.drawer.draw.call(null,inst_23302,inst_23303,inst_23304,inst_23305);var inst_23307 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23308 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23309 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23284,"blue"];var inst_23310 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23308,inst_23309);var inst_23311 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23312 = stock.formula.sma_seq.call(null,(10),inst_23284);var inst_23313 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23312,"yellow"];var inst_23314 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23311,inst_23313);var inst_23315 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_23316 = cljs.core.count.call(null,inst_23284);var inst_23317 = cljs.core.repeat.call(null,inst_23316,(0));var inst_23318 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23317];var inst_23319 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23315,inst_23318);var inst_23320 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_23321 = cljs.core.count.call(null,inst_23284);var inst_23322 = cljs.core.repeat.call(null,inst_23321,0.5);var inst_23323 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23322];var inst_23324 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23320,inst_23323);var inst_23325 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_23326 = cljs.core.count.call(null,inst_23284);var inst_23327 = cljs.core.repeat.call(null,inst_23326,-0.5);var inst_23328 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23327];var inst_23329 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23325,inst_23328);var inst_23330 = [inst_23310,inst_23314,inst_23319,inst_23324,inst_23329];var inst_23331 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23330,null));var inst_23332 = [inst_23331];var inst_23333 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23307,inst_23332);var inst_23334 = inst_23246.width;var inst_23335 = inst_23246.height;var inst_23336 = inst_23246.getContext("2d");var inst_23337 = stock.drawer.draw.call(null,inst_23333,inst_23334,inst_23335,inst_23336);var inst_23338 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23339 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23340 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_23264,inst_23265,"blue"];var inst_23341 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23339,inst_23340);var inst_23342 = [inst_23341];var inst_23343 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23342,null));var inst_23344 = [inst_23343];var inst_23345 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23338,inst_23344);var inst_23346 = inst_23247.width;var inst_23347 = inst_23247.height;var inst_23348 = inst_23247.getContext("2d");var inst_23349 = stock.drawer.draw.call(null,inst_23345,inst_23346,inst_23347,inst_23348);var inst_23350 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23351 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_23352 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_23244];var inst_23353 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23351,inst_23352);var inst_23354 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23355 = stock.tool.close.call(null,inst_23244);var inst_23356 = cljs.core.reverse.call(null,inst_23355);var inst_23357 = stock.formula.ema_seq.call(null,(5),inst_23356);var inst_23358 = cljs.core.reverse.call(null,inst_23357);var inst_23359 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23358,"blue"];var inst_23360 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23354,inst_23359);var inst_23361 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23362 = stock.tool.close.call(null,inst_23244);var inst_23363 = cljs.core.reverse.call(null,inst_23362);var inst_23364 = stock.formula.ema_seq.call(null,(10),inst_23363);var inst_23365 = cljs.core.reverse.call(null,inst_23364);var inst_23366 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23365,"yellow"];var inst_23367 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23361,inst_23366);var inst_23368 = [inst_23353,inst_23360,inst_23367];var inst_23369 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23368,null));var inst_23370 = [inst_23369];var inst_23371 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23350,inst_23370);var inst_23372 = stock.drawer.draw.call(null,inst_23371,inst_23254,inst_23255,inst_23249);var state_23374__$1 = (function (){var statearr_23376 = state_23374;(statearr_23376[(18)] = inst_23282);
(statearr_23376[(19)] = inst_23337);
(statearr_23376[(20)] = inst_23306);
(statearr_23376[(21)] = inst_23276);
(statearr_23376[(22)] = inst_23273);
(statearr_23376[(23)] = inst_23349);
(statearr_23376[(24)] = inst_23283);
(statearr_23376[(25)] = inst_23279);
(statearr_23376[(26)] = inst_23272);
(statearr_23376[(27)] = inst_23271);
return statearr_23376;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23374__$1,inst_23372);
} else
{if((state_val_23375 === (4)))
{var inst_23256 = (state_23374[(28)]);var state_23374__$1 = state_23374;var statearr_23377_23389 = state_23374__$1;(statearr_23377_23389[(2)] = inst_23256);
(statearr_23377_23389[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23375 === (3)))
{var inst_23256 = (state_23374[(28)]);var inst_23259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23256);var state_23374__$1 = state_23374;var statearr_23378_23390 = state_23374__$1;(statearr_23378_23390[(2)] = inst_23259);
(statearr_23378_23390[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23375 === (2)))
{var inst_23244 = (state_23374[(10)]);var inst_23256 = (state_23374[(28)]);var inst_23248 = (state_23374[(14)]);var inst_23253 = (state_23374[(15)]);var inst_23242 = (state_23374[(17)]);var inst_23242__$1 = (state_23374[(2)]);var inst_23243 = cljs.core.nth.call(null,inst_23242__$1,(0),null);var inst_23244__$1 = cljs.core.nth.call(null,inst_23242__$1,(1),null);var inst_23245 = document.getElementById("index2");var inst_23246 = document.getElementById("index");var inst_23247 = document.getElementById("clock");var inst_23248__$1 = document.getElementById("kline");var inst_23249 = inst_23248__$1.getContext("2d");var inst_23250 = inst_23248__$1.width;var inst_23251 = inst_23248__$1.height;var inst_23252 = [inst_23250,inst_23251];var inst_23253__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23252,null));var inst_23254 = cljs.core.nth.call(null,inst_23253__$1,(0),null);var inst_23255 = cljs.core.nth.call(null,inst_23253__$1,(1),null);var inst_23256__$1 = stock.formula.clock.call(null,(20),inst_23244__$1);var inst_23257 = cljs.core.seq_QMARK_.call(null,inst_23256__$1);var state_23374__$1 = (function (){var statearr_23379 = state_23374;(statearr_23379[(7)] = inst_23255);
(statearr_23379[(8)] = inst_23247);
(statearr_23379[(9)] = inst_23246);
(statearr_23379[(10)] = inst_23244__$1);
(statearr_23379[(28)] = inst_23256__$1);
(statearr_23379[(11)] = inst_23245);
(statearr_23379[(12)] = inst_23254);
(statearr_23379[(13)] = inst_23243);
(statearr_23379[(14)] = inst_23248__$1);
(statearr_23379[(15)] = inst_23253__$1);
(statearr_23379[(16)] = inst_23249);
(statearr_23379[(17)] = inst_23242__$1);
return statearr_23379;
})();if(inst_23257)
{var statearr_23380_23391 = state_23374__$1;(statearr_23380_23391[(1)] = (3));
} else
{var statearr_23381_23392 = state_23374__$1;(statearr_23381_23392[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23375 === (1)))
{var inst_23240 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_23374__$1 = state_23374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23374__$1,(2),inst_23240);
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
var state_machine__6188__auto____0 = (function (){var statearr_23385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23385[(0)] = state_machine__6188__auto__);
(statearr_23385[(1)] = (1));
return statearr_23385;
});
var state_machine__6188__auto____1 = (function (state_23374){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23386){if((e23386 instanceof Object))
{var ex__6191__auto__ = e23386;var statearr_23387_23393 = state_23374;(statearr_23387_23393[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23394 = state_23374;
state_23374 = G__23394;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23374){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_23388 = f__6203__auto__.call(null);(statearr_23388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_23388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
