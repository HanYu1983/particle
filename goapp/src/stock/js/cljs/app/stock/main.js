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
app.stock.main.main2 = (function main2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26235){var state_val_26236 = (state_26235[(1)]);if((state_val_26236 === (6)))
{var inst_26230 = (state_26235[(2)]);var inst_26231 = cljs.core.nth.call(null,inst_26230,(0),null);var inst_26232 = cljs.core.nth.call(null,inst_26230,(1),null);var inst_26233 = console.log(inst_26231,inst_26232);var state_26235__$1 = state_26235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26235__$1,inst_26233);
} else
{if((state_val_26236 === (5)))
{var inst_26225 = (state_26235[(2)]);var inst_26226 = cljs.core.nth.call(null,inst_26225,(0),null);var inst_26227 = cljs.core.nth.call(null,inst_26225,(1),null);var inst_26228 = app.dbfile.file.call(null,inst_26227,"json");var state_26235__$1 = (function (){var statearr_26237 = state_26235;(statearr_26237[(7)] = inst_26226);
return statearr_26237;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(6),inst_26228);
} else
{if((state_val_26236 === (4)))
{var inst_26217 = (state_26235[(8)]);var inst_26220 = (state_26235[(2)]);var inst_26221 = cljs.core.nth.call(null,inst_26220,(0),null);var inst_26222 = cljs.core.nth.call(null,inst_26220,(1),null);var inst_26223 = app.dbfile.name__GT_id.call(null,inst_26217,"userinfo.json");var state_26235__$1 = (function (){var statearr_26238 = state_26235;(statearr_26238[(9)] = inst_26222);
(statearr_26238[(10)] = inst_26221);
return statearr_26238;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(5),inst_26223);
} else
{if((state_val_26236 === (3)))
{var inst_26217 = (state_26235[(8)]);var inst_26215 = (state_26235[(2)]);var inst_26216 = cljs.core.nth.call(null,inst_26215,(0),null);var inst_26217__$1 = cljs.core.nth.call(null,inst_26215,(1),null);var inst_26218 = app.dbfile.makeFile.call(null,inst_26217__$1,"userinfo.json","{}",true);var state_26235__$1 = (function (){var statearr_26239 = state_26235;(statearr_26239[(11)] = inst_26216);
(statearr_26239[(8)] = inst_26217__$1);
return statearr_26239;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(4),inst_26218);
} else
{if((state_val_26236 === (2)))
{var inst_26210 = (state_26235[(2)]);var inst_26211 = cljs.core.nth.call(null,inst_26210,(0),null);var inst_26212 = cljs.core.nth.call(null,inst_26210,(1),null);var inst_26213 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_26235__$1 = (function (){var statearr_26240 = state_26235;(statearr_26240[(12)] = inst_26211);
(statearr_26240[(13)] = inst_26212);
return statearr_26240;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(3),inst_26213);
} else
{if((state_val_26236 === (1)))
{var inst_26208 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_26235__$1 = state_26235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(2),inst_26208);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26244[(0)] = state_machine__6188__auto__);
(statearr_26244[(1)] = (1));
return statearr_26244;
});
var state_machine__6188__auto____1 = (function (state_26235){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26235);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26245){if((e26245 instanceof Object))
{var ex__6191__auto__ = e26245;var statearr_26246_26248 = state_26235;(statearr_26246_26248[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26249 = state_26235;
state_26235 = G__26249;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26235){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26247 = f__6203__auto__.call(null);(statearr_26247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){cljs.core.reset_BANG_.call(null,app.dbfile._STAR_domain_STAR_,"https://particle-979.appspot.com/");
var onView_26430 = cljs.core.async.chan.call(null);var onModel_26431 = cljs.core.async.chan.call(null);var onSys_26432 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_26430,onModel_26431,onSys_26432){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_26430,onModel_26431,onSys_26432){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_26430,onModel_26431,onSys_26432){
return (function (state_26343){var state_val_26344 = (state_26343[(1)]);if((state_val_26344 === (2)))
{var inst_26341 = (state_26343[(2)]);var state_26343__$1 = state_26343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26343__$1,inst_26341);
} else
{if((state_val_26344 === (1)))
{var state_26343__$1 = state_26343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26343__$1,(2),onView_26430,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_26430,onModel_26431,onSys_26432))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_26430,onModel_26431,onSys_26432){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26348 = [null,null,null,null,null,null,null];(statearr_26348[(0)] = state_machine__6188__auto__);
(statearr_26348[(1)] = (1));
return statearr_26348;
});
var state_machine__6188__auto____1 = (function (state_26343){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26343);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26349){if((e26349 instanceof Object))
{var ex__6191__auto__ = e26349;var statearr_26350_26433 = state_26343;(statearr_26350_26433[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26434 = state_26343;
state_26343 = G__26434;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26343){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_26430,onModel_26431,onSys_26432))
})();var state__6204__auto__ = (function (){var statearr_26351 = f__6203__auto__.call(null);(statearr_26351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_26430,onModel_26431,onSys_26432))
);
return c__6202__auto__;
});})(onView_26430,onModel_26431,onSys_26432))
);
var c__6202__auto___26435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26435,onView_26430,onModel_26431,onSys_26432){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26435,onView_26430,onModel_26431,onSys_26432){
return (function (state_26360){var state_val_26361 = (state_26360[(1)]);if((state_val_26361 === (4)))
{var inst_26354 = (state_26360[(2)]);var inst_26355 = common.onModel.onNext(inst_26354);var state_26360__$1 = (function (){var statearr_26362 = state_26360;(statearr_26362[(7)] = inst_26355);
return statearr_26362;
})();var statearr_26363_26436 = state_26360__$1;(statearr_26363_26436[(2)] = null);
(statearr_26363_26436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26361 === (3)))
{var inst_26358 = (state_26360[(2)]);var state_26360__$1 = state_26360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26360__$1,inst_26358);
} else
{if((state_val_26361 === (2)))
{var state_26360__$1 = state_26360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26360__$1,(4),onModel_26431);
} else
{if((state_val_26361 === (1)))
{var state_26360__$1 = state_26360;var statearr_26364_26437 = state_26360__$1;(statearr_26364_26437[(2)] = null);
(statearr_26364_26437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___26435,onView_26430,onModel_26431,onSys_26432))
;return ((function (switch__6187__auto__,c__6202__auto___26435,onView_26430,onModel_26431,onSys_26432){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26368 = [null,null,null,null,null,null,null,null];(statearr_26368[(0)] = state_machine__6188__auto__);
(statearr_26368[(1)] = (1));
return statearr_26368;
});
var state_machine__6188__auto____1 = (function (state_26360){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26360);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26369){if((e26369 instanceof Object))
{var ex__6191__auto__ = e26369;var statearr_26370_26438 = state_26360;(statearr_26370_26438[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26439 = state_26360;
state_26360 = G__26439;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26360){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26435,onView_26430,onModel_26431,onSys_26432))
})();var state__6204__auto__ = (function (){var statearr_26371 = f__6203__auto__.call(null);(statearr_26371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26435);
return statearr_26371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26435,onView_26430,onModel_26431,onSys_26432))
);
var c__6202__auto___26440 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26440,onView_26430,onModel_26431,onSys_26432){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26440,onView_26430,onModel_26431,onSys_26432){
return (function (state_26408){var state_val_26409 = (state_26408[(1)]);if((state_val_26409 === (7)))
{var inst_26403 = (state_26408[(2)]);var inst_26375 = inst_26403;var state_26408__$1 = (function (){var statearr_26410 = state_26408;(statearr_26410[(7)] = inst_26375);
return statearr_26410;
})();var statearr_26411_26441 = state_26408__$1;(statearr_26411_26441[(2)] = null);
(statearr_26411_26441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (1)))
{var inst_26372 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_26373 = [onView_26430,onModel_26431,onSys_26432,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_26374 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26372,inst_26373);var inst_26375 = inst_26374;var state_26408__$1 = (function (){var statearr_26412 = state_26408;(statearr_26412[(7)] = inst_26375);
return statearr_26412;
})();var statearr_26413_26442 = state_26408__$1;(statearr_26413_26442[(2)] = null);
(statearr_26413_26442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (4)))
{var inst_26383 = (state_26408[(8)]);var inst_26381 = (state_26408[(2)]);var inst_26382 = cljs.core.nth.call(null,inst_26381,(0),null);var inst_26383__$1 = cljs.core.nth.call(null,inst_26381,(1),null);var inst_26387 = cljs.core._EQ_.call(null,onSys_26432,inst_26383__$1);var state_26408__$1 = (function (){var statearr_26414 = state_26408;(statearr_26414[(9)] = inst_26382);
(statearr_26414[(8)] = inst_26383__$1);
return statearr_26414;
})();if(inst_26387)
{var statearr_26415_26443 = state_26408__$1;(statearr_26415_26443[(1)] = (5));
} else
{var statearr_26416_26444 = state_26408__$1;(statearr_26416_26444[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (6)))
{var inst_26383 = (state_26408[(8)]);var inst_26394 = cljs.core._EQ_.call(null,onView_26430,inst_26383);var state_26408__$1 = state_26408;if(inst_26394)
{var statearr_26417_26445 = state_26408__$1;(statearr_26417_26445[(1)] = (8));
} else
{var statearr_26418_26446 = state_26408__$1;(statearr_26418_26446[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (3)))
{var inst_26406 = (state_26408[(2)]);var state_26408__$1 = state_26408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26408__$1,inst_26406);
} else
{if((state_val_26409 === (2)))
{var inst_26378 = [onView_26430,onSys_26432];var inst_26379 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26378,null));var state_26408__$1 = state_26408;return cljs.core.async.ioc_alts_BANG_.call(null,state_26408__$1,(4),inst_26379);
} else
{if((state_val_26409 === (9)))
{var inst_26375 = (state_26408[(7)]);var state_26408__$1 = state_26408;var statearr_26419_26447 = state_26408__$1;(statearr_26419_26447[(2)] = inst_26375);
(statearr_26419_26447[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (5)))
{var inst_26382 = (state_26408[(9)]);var inst_26375 = (state_26408[(7)]);var inst_26390 = cljs.core.nth.call(null,inst_26382,(0),null);var inst_26391 = cljs.core.nth.call(null,inst_26382,(1),null);var inst_26392 = app.stock.abstract$.onSystem.call(null,inst_26390,inst_26391,inst_26375);var state_26408__$1 = state_26408;var statearr_26420_26448 = state_26408__$1;(statearr_26420_26448[(2)] = inst_26392);
(statearr_26420_26448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (10)))
{var inst_26401 = (state_26408[(2)]);var state_26408__$1 = state_26408;var statearr_26421_26449 = state_26408__$1;(statearr_26421_26449[(2)] = inst_26401);
(statearr_26421_26449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26409 === (8)))
{var inst_26382 = (state_26408[(9)]);var inst_26375 = (state_26408[(7)]);var inst_26396 = (inst_26382[(0)]);var inst_26397 = (inst_26382[(1)]);var inst_26398 = app.stock.abstract$.onViewCommand.call(null,inst_26396,inst_26397,inst_26375);var state_26408__$1 = state_26408;var statearr_26422_26450 = state_26408__$1;(statearr_26422_26450[(2)] = inst_26398);
(statearr_26422_26450[(1)] = (10));
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
});})(c__6202__auto___26440,onView_26430,onModel_26431,onSys_26432))
;return ((function (switch__6187__auto__,c__6202__auto___26440,onView_26430,onModel_26431,onSys_26432){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26426 = [null,null,null,null,null,null,null,null,null,null];(statearr_26426[(0)] = state_machine__6188__auto__);
(statearr_26426[(1)] = (1));
return statearr_26426;
});
var state_machine__6188__auto____1 = (function (state_26408){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26427){if((e26427 instanceof Object))
{var ex__6191__auto__ = e26427;var statearr_26428_26451 = state_26408;(statearr_26428_26451[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26452 = state_26408;
state_26408 = G__26452;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26408){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26440,onView_26430,onModel_26431,onSys_26432))
})();var state__6204__auto__ = (function (){var statearr_26429 = f__6203__auto__.call(null);(statearr_26429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26440);
return statearr_26429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26440,onView_26430,onModel_26431,onSys_26432))
);
return null;
});
app.stock.main.main.call(null);
