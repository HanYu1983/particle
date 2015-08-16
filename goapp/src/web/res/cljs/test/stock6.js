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
return (function (state_29312){var state_val_29313 = (state_29312[(1)]);if((state_val_29313 === (5)))
{var inst_29194 = (state_29312[(7)]);var inst_29188 = (state_29312[(8)]);var inst_29187 = (state_29312[(9)]);var inst_29191 = (state_29312[(10)]);var inst_29189 = (state_29312[(11)]);var inst_29192 = (state_29312[(12)]);var inst_29200 = (state_29312[(13)]);var inst_29190 = (state_29312[(14)]);var inst_29199 = (state_29312[(15)]);var inst_29193 = (state_29312[(16)]);var inst_29198 = (state_29312[(17)]);var inst_29207 = (state_29312[(2)]);var inst_29208 = cljs.core.get.call(null,inst_29207,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_29209 = cljs.core.get.call(null,inst_29207,new cljs.core.Keyword(null,"z","z",-789527183));var inst_29210 = cljs.core.get.call(null,inst_29207,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_29211 = cljs.core.repeat.call(null,(5),(0));var inst_29212 = (function (){var ctx = inst_29194;var vec__29183 = inst_29198;var map__29184 = inst_29207;var canvas4 = inst_29190;var w = inst_29199;var cs = inst_29208;var err = inst_29188;var infos = inst_29189;var canvas = inst_29193;var canvas3 = inst_29191;var z = inst_29209;var v_z = inst_29210;var h = inst_29200;var canvas2 = inst_29192;var vec__29182 = inst_29187;return ((function (ctx,vec__29183,map__29184,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,h,canvas2,vec__29182,inst_29194,inst_29188,inst_29187,inst_29191,inst_29189,inst_29192,inst_29200,inst_29190,inst_29199,inst_29193,inst_29198,inst_29207,inst_29208,inst_29209,inst_29210,inst_29211,state_val_29313,c__6202__auto__){
return (function (p1__29036_SHARP_){return Math.abs(p1__29036_SHARP_);
});
;})(ctx,vec__29183,map__29184,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,h,canvas2,vec__29182,inst_29194,inst_29188,inst_29187,inst_29191,inst_29189,inst_29192,inst_29200,inst_29190,inst_29199,inst_29193,inst_29198,inst_29207,inst_29208,inst_29209,inst_29210,inst_29211,state_val_29313,c__6202__auto__))
})();var inst_29213 = cljs.core.map.call(null,cljs.core._PLUS_,inst_29209,inst_29210);var inst_29214 = cljs.core.map.call(null,inst_29212,inst_29213);var inst_29215 = cljs.core.reverse.call(null,inst_29214);var inst_29216 = cljs.core.into.call(null,inst_29211,inst_29215);var inst_29217 = stock.formula.clock_direction.call(null,inst_29210,inst_29209);var inst_29218 = stock.formula.BBI.call(null,(6),inst_29189);var inst_29219 = cljs.core.reverse.call(null,inst_29189);var inst_29220 = stock.formula.sar_seq.call(null,inst_29219);var inst_29221 = cljs.core.reverse.call(null,inst_29220);var inst_29222 = cljs.core.reverse.call(null,inst_29189);var inst_29223 = stock.formula.Chaikin.call(null,(3),(9),inst_29222);var inst_29224 = cljs.core.reverse.call(null,inst_29223);var inst_29225 = cljs.core.reverse.call(null,inst_29189);var inst_29226 = stock.formula.EOM.call(null,(14),inst_29225);var inst_29227 = cljs.core.reverse.call(null,inst_29226);var inst_29228 = stock.formula.yu_gv.call(null,(20),inst_29189);var inst_29229 = stock.formula.yu_clock.call(null,(40),inst_29189);var inst_29230 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_29231 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29232 = stock.tool.volume.call(null,inst_29189);var inst_29233 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29232,"blue"];var inst_29234 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29231,inst_29233);var inst_29235 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29236 = stock.tool.volume.call(null,inst_29189);var inst_29237 = stock.formula.sma_seq.call(null,(6),inst_29236);var inst_29238 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29237,"yellow"];var inst_29239 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29235,inst_29238);var inst_29240 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29241 = stock.tool.volume.call(null,inst_29189);var inst_29242 = stock.formula.sma_seq.call(null,(12),inst_29241);var inst_29243 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29242,"purple"];var inst_29244 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29240,inst_29243);var inst_29245 = [inst_29234,inst_29239,inst_29244];var inst_29246 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29245,null));var inst_29247 = [inst_29246];var inst_29248 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29230,inst_29247);var inst_29249 = inst_29190.width;var inst_29250 = inst_29190.height;var inst_29251 = inst_29190.getContext("2d");var inst_29252 = stock.drawer.draw.call(null,inst_29248,inst_29249,inst_29250,inst_29251);var inst_29253 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_29254 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29255 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29229,"blue"];var inst_29256 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29254,inst_29255);var inst_29257 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_29258 = cljs.core.count.call(null,inst_29229);var inst_29259 = cljs.core.repeat.call(null,inst_29258,(0));var inst_29260 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29259];var inst_29261 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29257,inst_29260);var inst_29262 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_29263 = cljs.core.count.call(null,inst_29229);var inst_29264 = cljs.core.repeat.call(null,inst_29263,0.1);var inst_29265 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29264];var inst_29266 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29262,inst_29265);var inst_29267 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_29268 = cljs.core.count.call(null,inst_29229);var inst_29269 = cljs.core.repeat.call(null,inst_29268,-0.1);var inst_29270 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29269];var inst_29271 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29267,inst_29270);var inst_29272 = [inst_29256,inst_29261,inst_29266,inst_29271];var inst_29273 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29272,null));var inst_29274 = [inst_29273];var inst_29275 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29253,inst_29274);var inst_29276 = inst_29191.width;var inst_29277 = inst_29191.height;var inst_29278 = inst_29191.getContext("2d");var inst_29279 = stock.drawer.draw.call(null,inst_29275,inst_29276,inst_29277,inst_29278);var inst_29280 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_29281 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29282 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_29209,inst_29210,"blue"];var inst_29283 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29281,inst_29282);var inst_29284 = [inst_29283];var inst_29285 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29284,null));var inst_29286 = [inst_29285];var inst_29287 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29280,inst_29286);var inst_29288 = inst_29192.width;var inst_29289 = inst_29192.height;var inst_29290 = inst_29192.getContext("2d");var inst_29291 = stock.drawer.draw.call(null,inst_29287,inst_29288,inst_29289,inst_29290);var inst_29292 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_29293 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_29294 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_29189];var inst_29295 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29293,inst_29294);var inst_29296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29297 = stock.tool.close.call(null,inst_29189);var inst_29298 = stock.formula.sma_seq.call(null,(5),inst_29297);var inst_29299 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29298,"purple"];var inst_29300 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29296,inst_29299);var inst_29301 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_29302 = stock.tool.close.call(null,inst_29189);var inst_29303 = stock.formula.sma_seq.call(null,(10),inst_29302);var inst_29304 = [new cljs.core.Keyword(null,"line","line",212345235),inst_29303,"black"];var inst_29305 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29301,inst_29304);var inst_29306 = [inst_29295,inst_29300,inst_29305];var inst_29307 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29306,null));var inst_29308 = [inst_29307];var inst_29309 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29292,inst_29308);var inst_29310 = stock.drawer.draw.call(null,inst_29309,inst_29199,inst_29200,inst_29194);var state_29312__$1 = (function (){var statearr_29314 = state_29312;(statearr_29314[(18)] = inst_29279);
(statearr_29314[(19)] = inst_29227);
(statearr_29314[(20)] = inst_29224);
(statearr_29314[(21)] = inst_29218);
(statearr_29314[(22)] = inst_29217);
(statearr_29314[(23)] = inst_29216);
(statearr_29314[(24)] = inst_29221);
(statearr_29314[(25)] = inst_29228);
(statearr_29314[(26)] = inst_29252);
(statearr_29314[(27)] = inst_29291);
return statearr_29314;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29312__$1,inst_29310);
} else
{if((state_val_29313 === (4)))
{var inst_29201 = (state_29312[(28)]);var state_29312__$1 = state_29312;var statearr_29315_29327 = state_29312__$1;(statearr_29315_29327[(2)] = inst_29201);
(statearr_29315_29327[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29313 === (3)))
{var inst_29201 = (state_29312[(28)]);var inst_29204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29201);var state_29312__$1 = state_29312;var statearr_29316_29328 = state_29312__$1;(statearr_29316_29328[(2)] = inst_29204);
(statearr_29316_29328[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29313 === (2)))
{var inst_29201 = (state_29312[(28)]);var inst_29187 = (state_29312[(9)]);var inst_29189 = (state_29312[(11)]);var inst_29193 = (state_29312[(16)]);var inst_29198 = (state_29312[(17)]);var inst_29187__$1 = (state_29312[(2)]);var inst_29188 = cljs.core.nth.call(null,inst_29187__$1,(0),null);var inst_29189__$1 = cljs.core.nth.call(null,inst_29187__$1,(1),null);var inst_29190 = document.getElementById("index2");var inst_29191 = document.getElementById("index");var inst_29192 = document.getElementById("clock");var inst_29193__$1 = document.getElementById("kline");var inst_29194 = inst_29193__$1.getContext("2d");var inst_29195 = inst_29193__$1.width;var inst_29196 = inst_29193__$1.height;var inst_29197 = [inst_29195,inst_29196];var inst_29198__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29197,null));var inst_29199 = cljs.core.nth.call(null,inst_29198__$1,(0),null);var inst_29200 = cljs.core.nth.call(null,inst_29198__$1,(1),null);var inst_29201__$1 = stock.formula.clock.call(null,(40),inst_29189__$1);var inst_29202 = cljs.core.seq_QMARK_.call(null,inst_29201__$1);var state_29312__$1 = (function (){var statearr_29317 = state_29312;(statearr_29317[(28)] = inst_29201__$1);
(statearr_29317[(7)] = inst_29194);
(statearr_29317[(8)] = inst_29188);
(statearr_29317[(9)] = inst_29187__$1);
(statearr_29317[(10)] = inst_29191);
(statearr_29317[(11)] = inst_29189__$1);
(statearr_29317[(12)] = inst_29192);
(statearr_29317[(13)] = inst_29200);
(statearr_29317[(14)] = inst_29190);
(statearr_29317[(15)] = inst_29199);
(statearr_29317[(16)] = inst_29193__$1);
(statearr_29317[(17)] = inst_29198__$1);
return statearr_29317;
})();if(inst_29202)
{var statearr_29318_29329 = state_29312__$1;(statearr_29318_29329[(1)] = (3));
} else
{var statearr_29319_29330 = state_29312__$1;(statearr_29319_29330[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29313 === (1)))
{var inst_29185 = stock.tool.stock_info.call(null,null,(1464),"2015/1/1",(0),(200));var state_29312__$1 = state_29312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29312__$1,(2),inst_29185);
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
var state_machine__6188__auto____0 = (function (){var statearr_29323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29323[(0)] = state_machine__6188__auto__);
(statearr_29323[(1)] = (1));
return statearr_29323;
});
var state_machine__6188__auto____1 = (function (state_29312){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29324){if((e29324 instanceof Object))
{var ex__6191__auto__ = e29324;var statearr_29325_29331 = state_29312;(statearr_29325_29331[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29332 = state_29312;
state_29312 = G__29332;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29312){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_29326 = f__6203__auto__.call(null);(statearr_29326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_29326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
