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
return (function (state_23283){var state_val_23284 = (state_23283[(1)]);if((state_val_23284 === (5)))
{var inst_23232 = (state_23283[(7)]);var inst_23231 = (state_23283[(8)]);var inst_23234 = (state_23283[(9)]);var inst_23240 = (state_23283[(10)]);var inst_23239 = (state_23283[(11)]);var inst_23248 = (state_23283[(2)]);var inst_23249 = cljs.core.get.call(null,inst_23248,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_23250 = cljs.core.get.call(null,inst_23248,new cljs.core.Keyword(null,"z","z",-789527183));var inst_23251 = cljs.core.get.call(null,inst_23248,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_23252 = stock.formula.clock_direction.call(null,inst_23251,inst_23250);var inst_23253 = stock.formula.BBI.call(null,(6),inst_23231);var inst_23254 = cljs.core.pr_str.call(null,inst_23252);var inst_23255 = console.log(inst_23254);var inst_23256 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23257 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_23258 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_23250,inst_23251];var inst_23259 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23257,inst_23258);var inst_23260 = [inst_23259];var inst_23261 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23260,null));var inst_23262 = [inst_23261];var inst_23263 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23256,inst_23262);var inst_23264 = inst_23232.width;var inst_23265 = inst_23232.height;var inst_23266 = inst_23232.getContext("2d");var inst_23267 = stock.drawer.draw.call(null,inst_23263,inst_23264,inst_23265,inst_23266);var inst_23268 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_23269 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"info","info",-317069002)];var inst_23270 = cljs.core.reverse.call(null,inst_23252);var inst_23271 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_23231,inst_23270];var inst_23272 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23269,inst_23271);var inst_23273 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_23274 = cljs.core.reverse.call(null,inst_23249);var inst_23275 = [new cljs.core.Keyword(null,"line","line",212345235),inst_23274,"blue"];var inst_23276 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23273,inst_23275);var inst_23277 = [inst_23272,inst_23276];var inst_23278 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23277,null));var inst_23279 = [inst_23278];var inst_23280 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23268,inst_23279);var inst_23281 = stock.drawer.draw.call(null,inst_23280,inst_23239,inst_23240,inst_23234);var state_23283__$1 = (function (){var statearr_23285 = state_23283;(statearr_23285[(12)] = inst_23255);
(statearr_23285[(13)] = inst_23267);
(statearr_23285[(14)] = inst_23253);
return statearr_23285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23283__$1,inst_23281);
} else
{if((state_val_23284 === (4)))
{var inst_23242 = (state_23283[(15)]);var state_23283__$1 = state_23283;var statearr_23286_23298 = state_23283__$1;(statearr_23286_23298[(2)] = inst_23242);
(statearr_23286_23298[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (3)))
{var inst_23242 = (state_23283[(15)]);var inst_23245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23242);var state_23283__$1 = state_23283;var statearr_23287_23299 = state_23283__$1;(statearr_23287_23299[(2)] = inst_23245);
(statearr_23287_23299[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (2)))
{var inst_23231 = (state_23283[(8)]);var inst_23242 = (state_23283[(15)]);var inst_23229 = (state_23283[(2)]);var inst_23230 = cljs.core.nth.call(null,inst_23229,(0),null);var inst_23231__$1 = cljs.core.nth.call(null,inst_23229,(1),null);var inst_23232 = document.getElementById("clock");var inst_23233 = document.getElementById("kline");var inst_23234 = inst_23233.getContext("2d");var inst_23235 = inst_23233.width;var inst_23236 = inst_23233.height;var inst_23237 = [inst_23235,inst_23236];var inst_23238 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23237,null));var inst_23239 = cljs.core.nth.call(null,inst_23238,(0),null);var inst_23240 = cljs.core.nth.call(null,inst_23238,(1),null);var inst_23241 = cljs.core.reverse.call(null,inst_23231__$1);var inst_23242__$1 = stock.formula.clock.call(null,(12),inst_23241);var inst_23243 = cljs.core.seq_QMARK_.call(null,inst_23242__$1);var state_23283__$1 = (function (){var statearr_23288 = state_23283;(statearr_23288[(7)] = inst_23232);
(statearr_23288[(16)] = inst_23230);
(statearr_23288[(8)] = inst_23231__$1);
(statearr_23288[(9)] = inst_23234);
(statearr_23288[(10)] = inst_23240);
(statearr_23288[(11)] = inst_23239);
(statearr_23288[(15)] = inst_23242__$1);
return statearr_23288;
})();if(inst_23243)
{var statearr_23289_23300 = state_23283__$1;(statearr_23289_23300[(1)] = (3));
} else
{var statearr_23290_23301 = state_23283__$1;(statearr_23290_23301[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (1)))
{var inst_23227 = stock.tool.stock_info.call(null,null,(2454),"2015/1/1",(0),(200));var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23283__$1,(2),inst_23227);
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
var state_machine__6188__auto____0 = (function (){var statearr_23294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23294[(0)] = state_machine__6188__auto__);
(statearr_23294[(1)] = (1));
return statearr_23294;
});
var state_machine__6188__auto____1 = (function (state_23283){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23295){if((e23295 instanceof Object))
{var ex__6191__auto__ = e23295;var statearr_23296_23302 = state_23283;(statearr_23296_23302[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23303 = state_23283;
state_23283 = G__23303;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23283){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_23297 = f__6203__auto__.call(null);(statearr_23297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_23297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
