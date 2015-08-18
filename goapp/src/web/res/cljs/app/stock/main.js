// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.main.main = (function main(){var onView_24360 = cljs.core.async.chan.call(null);var onModel_24361 = cljs.core.async.chan.call(null);var onSys_24362 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_24360,onModel_24361,onSys_24362){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_24360,onModel_24361,onSys_24362){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_24360,onModel_24361,onSys_24362){
return (function (state_24273){var state_val_24274 = (state_24273[(1)]);if((state_val_24274 === (2)))
{var inst_24271 = (state_24273[(2)]);var state_24273__$1 = state_24273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24273__$1,inst_24271);
} else
{if((state_val_24274 === (1)))
{var state_24273__$1 = state_24273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24273__$1,(2),onView_24360,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_24360,onModel_24361,onSys_24362))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_24360,onModel_24361,onSys_24362){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24278 = [null,null,null,null,null,null,null];(statearr_24278[(0)] = state_machine__6188__auto__);
(statearr_24278[(1)] = (1));
return statearr_24278;
});
var state_machine__6188__auto____1 = (function (state_24273){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24273);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24279){if((e24279 instanceof Object))
{var ex__6191__auto__ = e24279;var statearr_24280_24363 = state_24273;(statearr_24280_24363[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24364 = state_24273;
state_24273 = G__24364;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24273){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_24360,onModel_24361,onSys_24362))
})();var state__6204__auto__ = (function (){var statearr_24281 = f__6203__auto__.call(null);(statearr_24281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_24360,onModel_24361,onSys_24362))
);
return c__6202__auto__;
});})(onView_24360,onModel_24361,onSys_24362))
);
var c__6202__auto___24365 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___24365,onView_24360,onModel_24361,onSys_24362){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___24365,onView_24360,onModel_24361,onSys_24362){
return (function (state_24290){var state_val_24291 = (state_24290[(1)]);if((state_val_24291 === (4)))
{var inst_24284 = (state_24290[(2)]);var inst_24285 = common.onModel.onNext(inst_24284);var state_24290__$1 = (function (){var statearr_24292 = state_24290;(statearr_24292[(7)] = inst_24285);
return statearr_24292;
})();var statearr_24293_24366 = state_24290__$1;(statearr_24293_24366[(2)] = null);
(statearr_24293_24366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24291 === (3)))
{var inst_24288 = (state_24290[(2)]);var state_24290__$1 = state_24290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24290__$1,inst_24288);
} else
{if((state_val_24291 === (2)))
{var state_24290__$1 = state_24290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(4),onModel_24361);
} else
{if((state_val_24291 === (1)))
{var state_24290__$1 = state_24290;var statearr_24294_24367 = state_24290__$1;(statearr_24294_24367[(2)] = null);
(statearr_24294_24367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___24365,onView_24360,onModel_24361,onSys_24362))
;return ((function (switch__6187__auto__,c__6202__auto___24365,onView_24360,onModel_24361,onSys_24362){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24298 = [null,null,null,null,null,null,null,null];(statearr_24298[(0)] = state_machine__6188__auto__);
(statearr_24298[(1)] = (1));
return statearr_24298;
});
var state_machine__6188__auto____1 = (function (state_24290){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24299){if((e24299 instanceof Object))
{var ex__6191__auto__ = e24299;var statearr_24300_24368 = state_24290;(statearr_24300_24368[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24369 = state_24290;
state_24290 = G__24369;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24290){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___24365,onView_24360,onModel_24361,onSys_24362))
})();var state__6204__auto__ = (function (){var statearr_24301 = f__6203__auto__.call(null);(statearr_24301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___24365);
return statearr_24301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___24365,onView_24360,onModel_24361,onSys_24362))
);
var c__6202__auto___24370 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___24370,onView_24360,onModel_24361,onSys_24362){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___24370,onView_24360,onModel_24361,onSys_24362){
return (function (state_24338){var state_val_24339 = (state_24338[(1)]);if((state_val_24339 === (7)))
{var inst_24333 = (state_24338[(2)]);var inst_24305 = inst_24333;var state_24338__$1 = (function (){var statearr_24340 = state_24338;(statearr_24340[(7)] = inst_24305);
return statearr_24340;
})();var statearr_24341_24371 = state_24338__$1;(statearr_24341_24371[(2)] = null);
(statearr_24341_24371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (1)))
{var inst_24302 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_24303 = [onView_24360,onModel_24361,onSys_24362,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_24304 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24302,inst_24303);var inst_24305 = inst_24304;var state_24338__$1 = (function (){var statearr_24342 = state_24338;(statearr_24342[(7)] = inst_24305);
return statearr_24342;
})();var statearr_24343_24372 = state_24338__$1;(statearr_24343_24372[(2)] = null);
(statearr_24343_24372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (4)))
{var inst_24313 = (state_24338[(8)]);var inst_24311 = (state_24338[(2)]);var inst_24312 = cljs.core.nth.call(null,inst_24311,(0),null);var inst_24313__$1 = cljs.core.nth.call(null,inst_24311,(1),null);var inst_24317 = cljs.core._EQ_.call(null,onSys_24362,inst_24313__$1);var state_24338__$1 = (function (){var statearr_24344 = state_24338;(statearr_24344[(8)] = inst_24313__$1);
(statearr_24344[(9)] = inst_24312);
return statearr_24344;
})();if(inst_24317)
{var statearr_24345_24373 = state_24338__$1;(statearr_24345_24373[(1)] = (5));
} else
{var statearr_24346_24374 = state_24338__$1;(statearr_24346_24374[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (6)))
{var inst_24313 = (state_24338[(8)]);var inst_24324 = cljs.core._EQ_.call(null,onView_24360,inst_24313);var state_24338__$1 = state_24338;if(inst_24324)
{var statearr_24347_24375 = state_24338__$1;(statearr_24347_24375[(1)] = (8));
} else
{var statearr_24348_24376 = state_24338__$1;(statearr_24348_24376[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (3)))
{var inst_24336 = (state_24338[(2)]);var state_24338__$1 = state_24338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24338__$1,inst_24336);
} else
{if((state_val_24339 === (2)))
{var inst_24308 = [onView_24360,onSys_24362];var inst_24309 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24308,null));var state_24338__$1 = state_24338;return cljs.core.async.ioc_alts_BANG_.call(null,state_24338__$1,(4),inst_24309);
} else
{if((state_val_24339 === (9)))
{var inst_24305 = (state_24338[(7)]);var state_24338__$1 = state_24338;var statearr_24349_24377 = state_24338__$1;(statearr_24349_24377[(2)] = inst_24305);
(statearr_24349_24377[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (5)))
{var inst_24305 = (state_24338[(7)]);var inst_24312 = (state_24338[(9)]);var inst_24320 = cljs.core.nth.call(null,inst_24312,(0),null);var inst_24321 = cljs.core.nth.call(null,inst_24312,(1),null);var inst_24322 = app.stock.abstract$.onSystem.call(null,inst_24320,inst_24321,inst_24305);var state_24338__$1 = state_24338;var statearr_24350_24378 = state_24338__$1;(statearr_24350_24378[(2)] = inst_24322);
(statearr_24350_24378[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (10)))
{var inst_24331 = (state_24338[(2)]);var state_24338__$1 = state_24338;var statearr_24351_24379 = state_24338__$1;(statearr_24351_24379[(2)] = inst_24331);
(statearr_24351_24379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24339 === (8)))
{var inst_24305 = (state_24338[(7)]);var inst_24312 = (state_24338[(9)]);var inst_24326 = (inst_24312[(0)]);var inst_24327 = (inst_24312[(1)]);var inst_24328 = app.stock.abstract$.onViewCommand.call(null,inst_24326,inst_24327,inst_24305);var state_24338__$1 = state_24338;var statearr_24352_24380 = state_24338__$1;(statearr_24352_24380[(2)] = inst_24328);
(statearr_24352_24380[(1)] = (10));
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
});})(c__6202__auto___24370,onView_24360,onModel_24361,onSys_24362))
;return ((function (switch__6187__auto__,c__6202__auto___24370,onView_24360,onModel_24361,onSys_24362){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24356 = [null,null,null,null,null,null,null,null,null,null];(statearr_24356[(0)] = state_machine__6188__auto__);
(statearr_24356[(1)] = (1));
return statearr_24356;
});
var state_machine__6188__auto____1 = (function (state_24338){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24338);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24357){if((e24357 instanceof Object))
{var ex__6191__auto__ = e24357;var statearr_24358_24381 = state_24338;(statearr_24358_24381[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24382 = state_24338;
state_24338 = G__24382;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24338){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___24370,onView_24360,onModel_24361,onSys_24362))
})();var state__6204__auto__ = (function (){var statearr_24359 = f__6203__auto__.call(null);(statearr_24359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___24370);
return statearr_24359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___24370,onView_24360,onModel_24361,onSys_24362))
);
return null;
});
app.stock.main.main.call(null);
