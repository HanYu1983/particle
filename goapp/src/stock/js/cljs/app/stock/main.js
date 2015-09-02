// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.main.main = (function main(){var onView_11361 = cljs.core.async.chan.call(null);var onModel_11362 = cljs.core.async.chan.call(null);var onSys_11363 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_11361,onModel_11362,onSys_11363){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_11361,onModel_11362,onSys_11363){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_11361,onModel_11362,onSys_11363){
return (function (state_11274){var state_val_11275 = (state_11274[(1)]);if((state_val_11275 === (2)))
{var inst_11272 = (state_11274[(2)]);var state_11274__$1 = state_11274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11274__$1,inst_11272);
} else
{if((state_val_11275 === (1)))
{var state_11274__$1 = state_11274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11274__$1,(2),onView_11361,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_11361,onModel_11362,onSys_11363))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_11361,onModel_11362,onSys_11363){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_11279 = [null,null,null,null,null,null,null];(statearr_11279[(0)] = state_machine__6188__auto__);
(statearr_11279[(1)] = (1));
return statearr_11279;
});
var state_machine__6188__auto____1 = (function (state_11274){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11280){if((e11280 instanceof Object))
{var ex__6191__auto__ = e11280;var statearr_11281_11364 = state_11274;(statearr_11281_11364[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11365 = state_11274;
state_11274 = G__11365;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11274){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_11361,onModel_11362,onSys_11363))
})();var state__6204__auto__ = (function (){var statearr_11282 = f__6203__auto__.call(null);(statearr_11282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_11282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_11361,onModel_11362,onSys_11363))
);
return c__6202__auto__;
});})(onView_11361,onModel_11362,onSys_11363))
);
var c__6202__auto___11366 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___11366,onView_11361,onModel_11362,onSys_11363){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___11366,onView_11361,onModel_11362,onSys_11363){
return (function (state_11291){var state_val_11292 = (state_11291[(1)]);if((state_val_11292 === (4)))
{var inst_11285 = (state_11291[(2)]);var inst_11286 = common.onModel.onNext(inst_11285);var state_11291__$1 = (function (){var statearr_11293 = state_11291;(statearr_11293[(7)] = inst_11286);
return statearr_11293;
})();var statearr_11294_11367 = state_11291__$1;(statearr_11294_11367[(2)] = null);
(statearr_11294_11367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (3)))
{var inst_11289 = (state_11291[(2)]);var state_11291__$1 = state_11291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11291__$1,inst_11289);
} else
{if((state_val_11292 === (2)))
{var state_11291__$1 = state_11291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11291__$1,(4),onModel_11362);
} else
{if((state_val_11292 === (1)))
{var state_11291__$1 = state_11291;var statearr_11295_11368 = state_11291__$1;(statearr_11295_11368[(2)] = null);
(statearr_11295_11368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___11366,onView_11361,onModel_11362,onSys_11363))
;return ((function (switch__6187__auto__,c__6202__auto___11366,onView_11361,onModel_11362,onSys_11363){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_11299 = [null,null,null,null,null,null,null,null];(statearr_11299[(0)] = state_machine__6188__auto__);
(statearr_11299[(1)] = (1));
return statearr_11299;
});
var state_machine__6188__auto____1 = (function (state_11291){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11300){if((e11300 instanceof Object))
{var ex__6191__auto__ = e11300;var statearr_11301_11369 = state_11291;(statearr_11301_11369[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11370 = state_11291;
state_11291 = G__11370;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11291){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___11366,onView_11361,onModel_11362,onSys_11363))
})();var state__6204__auto__ = (function (){var statearr_11302 = f__6203__auto__.call(null);(statearr_11302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___11366);
return statearr_11302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___11366,onView_11361,onModel_11362,onSys_11363))
);
var c__6202__auto___11371 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___11371,onView_11361,onModel_11362,onSys_11363){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___11371,onView_11361,onModel_11362,onSys_11363){
return (function (state_11339){var state_val_11340 = (state_11339[(1)]);if((state_val_11340 === (7)))
{var inst_11334 = (state_11339[(2)]);var inst_11306 = inst_11334;var state_11339__$1 = (function (){var statearr_11341 = state_11339;(statearr_11341[(7)] = inst_11306);
return statearr_11341;
})();var statearr_11342_11372 = state_11339__$1;(statearr_11342_11372[(2)] = null);
(statearr_11342_11372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (1)))
{var inst_11303 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_11304 = [onView_11361,onModel_11362,onSys_11363,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_11305 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11303,inst_11304);var inst_11306 = inst_11305;var state_11339__$1 = (function (){var statearr_11343 = state_11339;(statearr_11343[(7)] = inst_11306);
return statearr_11343;
})();var statearr_11344_11373 = state_11339__$1;(statearr_11344_11373[(2)] = null);
(statearr_11344_11373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (4)))
{var inst_11314 = (state_11339[(8)]);var inst_11312 = (state_11339[(2)]);var inst_11313 = cljs.core.nth.call(null,inst_11312,(0),null);var inst_11314__$1 = cljs.core.nth.call(null,inst_11312,(1),null);var inst_11318 = cljs.core._EQ_.call(null,onSys_11363,inst_11314__$1);var state_11339__$1 = (function (){var statearr_11345 = state_11339;(statearr_11345[(8)] = inst_11314__$1);
(statearr_11345[(9)] = inst_11313);
return statearr_11345;
})();if(inst_11318)
{var statearr_11346_11374 = state_11339__$1;(statearr_11346_11374[(1)] = (5));
} else
{var statearr_11347_11375 = state_11339__$1;(statearr_11347_11375[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (6)))
{var inst_11314 = (state_11339[(8)]);var inst_11325 = cljs.core._EQ_.call(null,onView_11361,inst_11314);var state_11339__$1 = state_11339;if(inst_11325)
{var statearr_11348_11376 = state_11339__$1;(statearr_11348_11376[(1)] = (8));
} else
{var statearr_11349_11377 = state_11339__$1;(statearr_11349_11377[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (3)))
{var inst_11337 = (state_11339[(2)]);var state_11339__$1 = state_11339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11339__$1,inst_11337);
} else
{if((state_val_11340 === (2)))
{var inst_11309 = [onView_11361,onSys_11363];var inst_11310 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11309,null));var state_11339__$1 = state_11339;return cljs.core.async.ioc_alts_BANG_.call(null,state_11339__$1,(4),inst_11310);
} else
{if((state_val_11340 === (9)))
{var inst_11306 = (state_11339[(7)]);var state_11339__$1 = state_11339;var statearr_11350_11378 = state_11339__$1;(statearr_11350_11378[(2)] = inst_11306);
(statearr_11350_11378[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (5)))
{var inst_11306 = (state_11339[(7)]);var inst_11313 = (state_11339[(9)]);var inst_11321 = cljs.core.nth.call(null,inst_11313,(0),null);var inst_11322 = cljs.core.nth.call(null,inst_11313,(1),null);var inst_11323 = app.stock.abstract$.onSystem.call(null,inst_11321,inst_11322,inst_11306);var state_11339__$1 = state_11339;var statearr_11351_11379 = state_11339__$1;(statearr_11351_11379[(2)] = inst_11323);
(statearr_11351_11379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (10)))
{var inst_11332 = (state_11339[(2)]);var state_11339__$1 = state_11339;var statearr_11352_11380 = state_11339__$1;(statearr_11352_11380[(2)] = inst_11332);
(statearr_11352_11380[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11340 === (8)))
{var inst_11306 = (state_11339[(7)]);var inst_11313 = (state_11339[(9)]);var inst_11327 = (inst_11313[(0)]);var inst_11328 = (inst_11313[(1)]);var inst_11329 = app.stock.abstract$.onViewCommand.call(null,inst_11327,inst_11328,inst_11306);var state_11339__$1 = state_11339;var statearr_11353_11381 = state_11339__$1;(statearr_11353_11381[(2)] = inst_11329);
(statearr_11353_11381[(1)] = (10));
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
});})(c__6202__auto___11371,onView_11361,onModel_11362,onSys_11363))
;return ((function (switch__6187__auto__,c__6202__auto___11371,onView_11361,onModel_11362,onSys_11363){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_11357 = [null,null,null,null,null,null,null,null,null,null];(statearr_11357[(0)] = state_machine__6188__auto__);
(statearr_11357[(1)] = (1));
return statearr_11357;
});
var state_machine__6188__auto____1 = (function (state_11339){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11339);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11358){if((e11358 instanceof Object))
{var ex__6191__auto__ = e11358;var statearr_11359_11382 = state_11339;(statearr_11359_11382[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11339);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11383 = state_11339;
state_11339 = G__11383;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___11371,onView_11361,onModel_11362,onSys_11363))
})();var state__6204__auto__ = (function (){var statearr_11360 = f__6203__auto__.call(null);(statearr_11360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___11371);
return statearr_11360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___11371,onView_11361,onModel_11362,onSys_11363))
);
return null;
});
app.stock.main.main.call(null);
