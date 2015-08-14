// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.abstract$');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.abstract$');
goog.require('app.stock.impl');
app.stock.main.main = (function main(){var onView_21314 = cljs.core.async.chan.call(null);var onModel_21315 = cljs.core.async.chan.call(null);var onSys_21316 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_21314,onModel_21315,onSys_21316){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_21314,onModel_21315,onSys_21316){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_21314,onModel_21315,onSys_21316){
return (function (state_21215){var state_val_21216 = (state_21215[(1)]);if((state_val_21216 === (2)))
{var inst_21213 = (state_21215[(2)]);var state_21215__$1 = state_21215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21215__$1,inst_21213);
} else
{if((state_val_21216 === (1)))
{var state_21215__$1 = state_21215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21215__$1,(2),onView_21314,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_21314,onModel_21315,onSys_21316))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_21314,onModel_21315,onSys_21316){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21220 = [null,null,null,null,null,null,null];(statearr_21220[(0)] = state_machine__6188__auto__);
(statearr_21220[(1)] = (1));
return statearr_21220;
});
var state_machine__6188__auto____1 = (function (state_21215){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21221){if((e21221 instanceof Object))
{var ex__6191__auto__ = e21221;var statearr_21222_21317 = state_21215;(statearr_21222_21317[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21215);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21318 = state_21215;
state_21215 = G__21318;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21215){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_21314,onModel_21315,onSys_21316))
})();var state__6204__auto__ = (function (){var statearr_21223 = f__6203__auto__.call(null);(statearr_21223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_21314,onModel_21315,onSys_21316))
);
return c__6202__auto__;
});})(onView_21314,onModel_21315,onSys_21316))
);
var c__6202__auto___21319 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___21319,onView_21314,onModel_21315,onSys_21316){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___21319,onView_21314,onModel_21315,onSys_21316){
return (function (state_21232){var state_val_21233 = (state_21232[(1)]);if((state_val_21233 === (4)))
{var inst_21226 = (state_21232[(2)]);var inst_21227 = common.onModel.onNext(inst_21226);var state_21232__$1 = (function (){var statearr_21234 = state_21232;(statearr_21234[(7)] = inst_21227);
return statearr_21234;
})();var statearr_21235_21320 = state_21232__$1;(statearr_21235_21320[(2)] = null);
(statearr_21235_21320[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21233 === (3)))
{var inst_21230 = (state_21232[(2)]);var state_21232__$1 = state_21232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21232__$1,inst_21230);
} else
{if((state_val_21233 === (2)))
{var state_21232__$1 = state_21232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21232__$1,(4),onModel_21315);
} else
{if((state_val_21233 === (1)))
{var state_21232__$1 = state_21232;var statearr_21236_21321 = state_21232__$1;(statearr_21236_21321[(2)] = null);
(statearr_21236_21321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___21319,onView_21314,onModel_21315,onSys_21316))
;return ((function (switch__6187__auto__,c__6202__auto___21319,onView_21314,onModel_21315,onSys_21316){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21240 = [null,null,null,null,null,null,null,null];(statearr_21240[(0)] = state_machine__6188__auto__);
(statearr_21240[(1)] = (1));
return statearr_21240;
});
var state_machine__6188__auto____1 = (function (state_21232){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21232);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21241){if((e21241 instanceof Object))
{var ex__6191__auto__ = e21241;var statearr_21242_21322 = state_21232;(statearr_21242_21322[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21323 = state_21232;
state_21232 = G__21323;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21232){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___21319,onView_21314,onModel_21315,onSys_21316))
})();var state__6204__auto__ = (function (){var statearr_21243 = f__6203__auto__.call(null);(statearr_21243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___21319);
return statearr_21243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___21319,onView_21314,onModel_21315,onSys_21316))
);
var c__6202__auto___21324 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___21324,onView_21314,onModel_21315,onSys_21316){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___21324,onView_21314,onModel_21315,onSys_21316){
return (function (state_21288){var state_val_21289 = (state_21288[(1)]);if((state_val_21289 === (7)))
{var inst_21283 = (state_21288[(2)]);var inst_21247 = inst_21283;var state_21288__$1 = (function (){var statearr_21290 = state_21288;(statearr_21290[(7)] = inst_21247);
return statearr_21290;
})();var statearr_21291_21325 = state_21288__$1;(statearr_21291_21325[(2)] = null);
(statearr_21291_21325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (1)))
{var inst_21244 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022)];var inst_21245 = [onView_21314,onModel_21315,onSys_21316,cljs.core.PersistentHashMap.EMPTY];var inst_21246 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21244,inst_21245);var inst_21247 = inst_21246;var state_21288__$1 = (function (){var statearr_21292 = state_21288;(statearr_21292[(7)] = inst_21247);
return statearr_21292;
})();var statearr_21293_21326 = state_21288__$1;(statearr_21293_21326[(2)] = null);
(statearr_21293_21326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (4)))
{var inst_21255 = (state_21288[(8)]);var inst_21253 = (state_21288[(2)]);var inst_21254 = cljs.core.nth.call(null,inst_21253,(0),null);var inst_21255__$1 = cljs.core.nth.call(null,inst_21253,(1),null);var inst_21259 = cljs.core._EQ_.call(null,onSys_21316,inst_21255__$1);var state_21288__$1 = (function (){var statearr_21294 = state_21288;(statearr_21294[(8)] = inst_21255__$1);
(statearr_21294[(9)] = inst_21254);
return statearr_21294;
})();if(inst_21259)
{var statearr_21295_21327 = state_21288__$1;(statearr_21295_21327[(1)] = (5));
} else
{var statearr_21296_21328 = state_21288__$1;(statearr_21296_21328[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (13)))
{var inst_21279 = (state_21288[(2)]);var state_21288__$1 = state_21288;var statearr_21297_21329 = state_21288__$1;(statearr_21297_21329[(2)] = inst_21279);
(statearr_21297_21329[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (6)))
{var inst_21255 = (state_21288[(8)]);var inst_21266 = cljs.core._EQ_.call(null,onView_21314,inst_21255);var state_21288__$1 = state_21288;if(inst_21266)
{var statearr_21298_21330 = state_21288__$1;(statearr_21298_21330[(1)] = (8));
} else
{var statearr_21299_21331 = state_21288__$1;(statearr_21299_21331[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (3)))
{var inst_21286 = (state_21288[(2)]);var state_21288__$1 = state_21288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21288__$1,inst_21286);
} else
{if((state_val_21289 === (12)))
{var inst_21255 = (state_21288[(8)]);var inst_21275 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21255));var inst_21276 = (new Error(inst_21275));var inst_21277 = (function(){throw inst_21276})();var state_21288__$1 = state_21288;var statearr_21300_21332 = state_21288__$1;(statearr_21300_21332[(2)] = inst_21277);
(statearr_21300_21332[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (2)))
{var inst_21250 = [onView_21314,onSys_21316];var inst_21251 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21250,null));var state_21288__$1 = state_21288;return cljs.core.async.ioc_alts_BANG_.call(null,state_21288__$1,(4),inst_21251);
} else
{if((state_val_21289 === (11)))
{var inst_21247 = (state_21288[(7)]);var state_21288__$1 = state_21288;var statearr_21301_21333 = state_21288__$1;(statearr_21301_21333[(2)] = inst_21247);
(statearr_21301_21333[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (9)))
{var inst_21255 = (state_21288[(8)]);var inst_21272 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_21255);var state_21288__$1 = state_21288;if(inst_21272)
{var statearr_21302_21334 = state_21288__$1;(statearr_21302_21334[(1)] = (11));
} else
{var statearr_21303_21335 = state_21288__$1;(statearr_21303_21335[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (5)))
{var inst_21247 = (state_21288[(7)]);var inst_21254 = (state_21288[(9)]);var inst_21262 = cljs.core.nth.call(null,inst_21254,(0),null);var inst_21263 = cljs.core.nth.call(null,inst_21254,(1),null);var inst_21264 = app.stock.abstract$.onSystem.call(null,inst_21262,inst_21263,inst_21247);var state_21288__$1 = state_21288;var statearr_21304_21336 = state_21288__$1;(statearr_21304_21336[(2)] = inst_21264);
(statearr_21304_21336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (10)))
{var inst_21281 = (state_21288[(2)]);var state_21288__$1 = state_21288;var statearr_21305_21337 = state_21288__$1;(statearr_21305_21337[(2)] = inst_21281);
(statearr_21305_21337[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21289 === (8)))
{var inst_21247 = (state_21288[(7)]);var inst_21254 = (state_21288[(9)]);var inst_21268 = (inst_21254[(0)]);var inst_21269 = (inst_21254[(1)]);var inst_21270 = app.stock.abstract$.onViewCommand.call(null,inst_21268,inst_21269,inst_21247);var state_21288__$1 = state_21288;var statearr_21306_21338 = state_21288__$1;(statearr_21306_21338[(2)] = inst_21270);
(statearr_21306_21338[(1)] = (10));
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
}
}
}
});})(c__6202__auto___21324,onView_21314,onModel_21315,onSys_21316))
;return ((function (switch__6187__auto__,c__6202__auto___21324,onView_21314,onModel_21315,onSys_21316){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21310 = [null,null,null,null,null,null,null,null,null,null];(statearr_21310[(0)] = state_machine__6188__auto__);
(statearr_21310[(1)] = (1));
return statearr_21310;
});
var state_machine__6188__auto____1 = (function (state_21288){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21311){if((e21311 instanceof Object))
{var ex__6191__auto__ = e21311;var statearr_21312_21339 = state_21288;(statearr_21312_21339[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21340 = state_21288;
state_21288 = G__21340;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21288){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___21324,onView_21314,onModel_21315,onSys_21316))
})();var state__6204__auto__ = (function (){var statearr_21313 = f__6203__auto__.call(null);(statearr_21313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___21324);
return statearr_21313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___21324,onView_21314,onModel_21315,onSys_21316))
);
return null;
});
app.stock.main.main.call(null);
