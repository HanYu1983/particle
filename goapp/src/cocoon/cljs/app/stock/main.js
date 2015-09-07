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
app.stock.main.main = (function main(){var onView_12363 = cljs.core.async.chan.call(null);var onModel_12364 = cljs.core.async.chan.call(null);var onSys_12365 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_12363,onModel_12364,onSys_12365){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView_12363,onModel_12364,onSys_12365){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView_12363,onModel_12364,onSys_12365){
return (function (state_12276){var state_val_12277 = (state_12276[(1)]);if((state_val_12277 === (2)))
{var inst_12274 = (state_12276[(2)]);var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12276__$1,inst_12274);
} else
{if((state_val_12277 === (1)))
{var state_12276__$1 = state_12276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12276__$1,(2),onView_12363,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView_12363,onModel_12364,onSys_12365))
;return ((function (switch__6188__auto__,c__6203__auto__,onView_12363,onModel_12364,onSys_12365){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12281 = [null,null,null,null,null,null,null];(statearr_12281[(0)] = state_machine__6189__auto__);
(statearr_12281[(1)] = (1));
return statearr_12281;
});
var state_machine__6189__auto____1 = (function (state_12276){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12276);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12282){if((e12282 instanceof Object))
{var ex__6192__auto__ = e12282;var statearr_12283_12366 = state_12276;(statearr_12283_12366[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12367 = state_12276;
state_12276 = G__12367;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12276){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView_12363,onModel_12364,onSys_12365))
})();var state__6205__auto__ = (function (){var statearr_12284 = f__6204__auto__.call(null);(statearr_12284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView_12363,onModel_12364,onSys_12365))
);
return c__6203__auto__;
});})(onView_12363,onModel_12364,onSys_12365))
);
var c__6203__auto___12368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12368,onView_12363,onModel_12364,onSys_12365){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12368,onView_12363,onModel_12364,onSys_12365){
return (function (state_12293){var state_val_12294 = (state_12293[(1)]);if((state_val_12294 === (4)))
{var inst_12287 = (state_12293[(2)]);var inst_12288 = common.onModel.onNext(inst_12287);var state_12293__$1 = (function (){var statearr_12295 = state_12293;(statearr_12295[(7)] = inst_12288);
return statearr_12295;
})();var statearr_12296_12369 = state_12293__$1;(statearr_12296_12369[(2)] = null);
(statearr_12296_12369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12294 === (3)))
{var inst_12291 = (state_12293[(2)]);var state_12293__$1 = state_12293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12293__$1,inst_12291);
} else
{if((state_val_12294 === (2)))
{var state_12293__$1 = state_12293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12293__$1,(4),onModel_12364);
} else
{if((state_val_12294 === (1)))
{var state_12293__$1 = state_12293;var statearr_12297_12370 = state_12293__$1;(statearr_12297_12370[(2)] = null);
(statearr_12297_12370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___12368,onView_12363,onModel_12364,onSys_12365))
;return ((function (switch__6188__auto__,c__6203__auto___12368,onView_12363,onModel_12364,onSys_12365){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12301 = [null,null,null,null,null,null,null,null];(statearr_12301[(0)] = state_machine__6189__auto__);
(statearr_12301[(1)] = (1));
return statearr_12301;
});
var state_machine__6189__auto____1 = (function (state_12293){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12302){if((e12302 instanceof Object))
{var ex__6192__auto__ = e12302;var statearr_12303_12371 = state_12293;(statearr_12303_12371[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12372 = state_12293;
state_12293 = G__12372;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12293){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12368,onView_12363,onModel_12364,onSys_12365))
})();var state__6205__auto__ = (function (){var statearr_12304 = f__6204__auto__.call(null);(statearr_12304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12368);
return statearr_12304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12368,onView_12363,onModel_12364,onSys_12365))
);
var c__6203__auto___12373 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12373,onView_12363,onModel_12364,onSys_12365){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12373,onView_12363,onModel_12364,onSys_12365){
return (function (state_12341){var state_val_12342 = (state_12341[(1)]);if((state_val_12342 === (7)))
{var inst_12336 = (state_12341[(2)]);var inst_12308 = inst_12336;var state_12341__$1 = (function (){var statearr_12343 = state_12341;(statearr_12343[(7)] = inst_12308);
return statearr_12343;
})();var statearr_12344_12374 = state_12341__$1;(statearr_12344_12374[(2)] = null);
(statearr_12344_12374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (1)))
{var inst_12305 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_12306 = [onView_12363,onModel_12364,onSys_12365,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_12307 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12305,inst_12306);var inst_12308 = inst_12307;var state_12341__$1 = (function (){var statearr_12345 = state_12341;(statearr_12345[(7)] = inst_12308);
return statearr_12345;
})();var statearr_12346_12375 = state_12341__$1;(statearr_12346_12375[(2)] = null);
(statearr_12346_12375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (4)))
{var inst_12316 = (state_12341[(8)]);var inst_12314 = (state_12341[(2)]);var inst_12315 = cljs.core.nth.call(null,inst_12314,(0),null);var inst_12316__$1 = cljs.core.nth.call(null,inst_12314,(1),null);var inst_12320 = cljs.core._EQ_.call(null,onSys_12365,inst_12316__$1);var state_12341__$1 = (function (){var statearr_12347 = state_12341;(statearr_12347[(8)] = inst_12316__$1);
(statearr_12347[(9)] = inst_12315);
return statearr_12347;
})();if(inst_12320)
{var statearr_12348_12376 = state_12341__$1;(statearr_12348_12376[(1)] = (5));
} else
{var statearr_12349_12377 = state_12341__$1;(statearr_12349_12377[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (6)))
{var inst_12316 = (state_12341[(8)]);var inst_12327 = cljs.core._EQ_.call(null,onView_12363,inst_12316);var state_12341__$1 = state_12341;if(inst_12327)
{var statearr_12350_12378 = state_12341__$1;(statearr_12350_12378[(1)] = (8));
} else
{var statearr_12351_12379 = state_12341__$1;(statearr_12351_12379[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (3)))
{var inst_12339 = (state_12341[(2)]);var state_12341__$1 = state_12341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12341__$1,inst_12339);
} else
{if((state_val_12342 === (2)))
{var inst_12311 = [onView_12363,onSys_12365];var inst_12312 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12311,null));var state_12341__$1 = state_12341;return cljs.core.async.ioc_alts_BANG_.call(null,state_12341__$1,(4),inst_12312);
} else
{if((state_val_12342 === (9)))
{var inst_12308 = (state_12341[(7)]);var state_12341__$1 = state_12341;var statearr_12352_12380 = state_12341__$1;(statearr_12352_12380[(2)] = inst_12308);
(statearr_12352_12380[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (5)))
{var inst_12308 = (state_12341[(7)]);var inst_12315 = (state_12341[(9)]);var inst_12323 = cljs.core.nth.call(null,inst_12315,(0),null);var inst_12324 = cljs.core.nth.call(null,inst_12315,(1),null);var inst_12325 = app.stock.abstract$.onSystem.call(null,inst_12323,inst_12324,inst_12308);var state_12341__$1 = state_12341;var statearr_12353_12381 = state_12341__$1;(statearr_12353_12381[(2)] = inst_12325);
(statearr_12353_12381[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (10)))
{var inst_12334 = (state_12341[(2)]);var state_12341__$1 = state_12341;var statearr_12354_12382 = state_12341__$1;(statearr_12354_12382[(2)] = inst_12334);
(statearr_12354_12382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12342 === (8)))
{var inst_12308 = (state_12341[(7)]);var inst_12315 = (state_12341[(9)]);var inst_12329 = (inst_12315[(0)]);var inst_12330 = (inst_12315[(1)]);var inst_12331 = app.stock.abstract$.onViewCommand.call(null,inst_12329,inst_12330,inst_12308);var state_12341__$1 = state_12341;var statearr_12355_12383 = state_12341__$1;(statearr_12355_12383[(2)] = inst_12331);
(statearr_12355_12383[(1)] = (10));
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
});})(c__6203__auto___12373,onView_12363,onModel_12364,onSys_12365))
;return ((function (switch__6188__auto__,c__6203__auto___12373,onView_12363,onModel_12364,onSys_12365){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12359 = [null,null,null,null,null,null,null,null,null,null];(statearr_12359[(0)] = state_machine__6189__auto__);
(statearr_12359[(1)] = (1));
return statearr_12359;
});
var state_machine__6189__auto____1 = (function (state_12341){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12341);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12360){if((e12360 instanceof Object))
{var ex__6192__auto__ = e12360;var statearr_12361_12384 = state_12341;(statearr_12361_12384[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12385 = state_12341;
state_12341 = G__12385;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12341){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12373,onView_12363,onModel_12364,onSys_12365))
})();var state__6205__auto__ = (function (){var statearr_12362 = f__6204__auto__.call(null);(statearr_12362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12373);
return statearr_12362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12373,onView_12363,onModel_12364,onSys_12365))
);
return null;
});
app.stock.main.main.call(null);
