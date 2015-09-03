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
return (function (state_27120){var state_val_27121 = (state_27120[(1)]);if((state_val_27121 === (6)))
{var inst_27115 = (state_27120[(2)]);var inst_27116 = cljs.core.nth.call(null,inst_27115,(0),null);var inst_27117 = cljs.core.nth.call(null,inst_27115,(1),null);var inst_27118 = console.log(inst_27116,inst_27117);var state_27120__$1 = state_27120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27120__$1,inst_27118);
} else
{if((state_val_27121 === (5)))
{var inst_27110 = (state_27120[(2)]);var inst_27111 = cljs.core.nth.call(null,inst_27110,(0),null);var inst_27112 = cljs.core.nth.call(null,inst_27110,(1),null);var inst_27113 = app.dbfile.file.call(null,inst_27112,"json");var state_27120__$1 = (function (){var statearr_27122 = state_27120;(statearr_27122[(7)] = inst_27111);
return statearr_27122;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27120__$1,(6),inst_27113);
} else
{if((state_val_27121 === (4)))
{var inst_27102 = (state_27120[(8)]);var inst_27105 = (state_27120[(2)]);var inst_27106 = cljs.core.nth.call(null,inst_27105,(0),null);var inst_27107 = cljs.core.nth.call(null,inst_27105,(1),null);var inst_27108 = app.dbfile.name__GT_id.call(null,inst_27102,"userinfo.json");var state_27120__$1 = (function (){var statearr_27123 = state_27120;(statearr_27123[(9)] = inst_27107);
(statearr_27123[(10)] = inst_27106);
return statearr_27123;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27120__$1,(5),inst_27108);
} else
{if((state_val_27121 === (3)))
{var inst_27102 = (state_27120[(8)]);var inst_27100 = (state_27120[(2)]);var inst_27101 = cljs.core.nth.call(null,inst_27100,(0),null);var inst_27102__$1 = cljs.core.nth.call(null,inst_27100,(1),null);var inst_27103 = app.dbfile.makeFile.call(null,inst_27102__$1,"userinfo.json","{}",true);var state_27120__$1 = (function (){var statearr_27124 = state_27120;(statearr_27124[(8)] = inst_27102__$1);
(statearr_27124[(11)] = inst_27101);
return statearr_27124;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27120__$1,(4),inst_27103);
} else
{if((state_val_27121 === (2)))
{var inst_27095 = (state_27120[(2)]);var inst_27096 = cljs.core.nth.call(null,inst_27095,(0),null);var inst_27097 = cljs.core.nth.call(null,inst_27095,(1),null);var inst_27098 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_27120__$1 = (function (){var statearr_27125 = state_27120;(statearr_27125[(12)] = inst_27096);
(statearr_27125[(13)] = inst_27097);
return statearr_27125;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27120__$1,(3),inst_27098);
} else
{if((state_val_27121 === (1)))
{var inst_27093 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_27120__$1 = state_27120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27120__$1,(2),inst_27093);
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
var state_machine__6188__auto____0 = (function (){var statearr_27129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27129[(0)] = state_machine__6188__auto__);
(statearr_27129[(1)] = (1));
return statearr_27129;
});
var state_machine__6188__auto____1 = (function (state_27120){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27120);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object))
{var ex__6191__auto__ = e27130;var statearr_27131_27133 = state_27120;(statearr_27131_27133[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27134 = state_27120;
state_27120 = G__27134;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27120){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_27132 = f__6203__auto__.call(null);(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){var onView_27315 = cljs.core.async.chan.call(null);var onModel_27316 = cljs.core.async.chan.call(null);var onSys_27317 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_27315,onModel_27316,onSys_27317){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_27315,onModel_27316,onSys_27317){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_27315,onModel_27316,onSys_27317){
return (function (state_27228){var state_val_27229 = (state_27228[(1)]);if((state_val_27229 === (2)))
{var inst_27226 = (state_27228[(2)]);var state_27228__$1 = state_27228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27228__$1,inst_27226);
} else
{if((state_val_27229 === (1)))
{var state_27228__$1 = state_27228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27228__$1,(2),onView_27315,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_27315,onModel_27316,onSys_27317))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_27315,onModel_27316,onSys_27317){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27233 = [null,null,null,null,null,null,null];(statearr_27233[(0)] = state_machine__6188__auto__);
(statearr_27233[(1)] = (1));
return statearr_27233;
});
var state_machine__6188__auto____1 = (function (state_27228){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27234){if((e27234 instanceof Object))
{var ex__6191__auto__ = e27234;var statearr_27235_27318 = state_27228;(statearr_27235_27318[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27319 = state_27228;
state_27228 = G__27319;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27228){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_27315,onModel_27316,onSys_27317))
})();var state__6204__auto__ = (function (){var statearr_27236 = f__6203__auto__.call(null);(statearr_27236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_27315,onModel_27316,onSys_27317))
);
return c__6202__auto__;
});})(onView_27315,onModel_27316,onSys_27317))
);
var c__6202__auto___27320 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___27320,onView_27315,onModel_27316,onSys_27317){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___27320,onView_27315,onModel_27316,onSys_27317){
return (function (state_27245){var state_val_27246 = (state_27245[(1)]);if((state_val_27246 === (4)))
{var inst_27239 = (state_27245[(2)]);var inst_27240 = common.onModel.onNext(inst_27239);var state_27245__$1 = (function (){var statearr_27247 = state_27245;(statearr_27247[(7)] = inst_27240);
return statearr_27247;
})();var statearr_27248_27321 = state_27245__$1;(statearr_27248_27321[(2)] = null);
(statearr_27248_27321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27246 === (3)))
{var inst_27243 = (state_27245[(2)]);var state_27245__$1 = state_27245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27245__$1,inst_27243);
} else
{if((state_val_27246 === (2)))
{var state_27245__$1 = state_27245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(4),onModel_27316);
} else
{if((state_val_27246 === (1)))
{var state_27245__$1 = state_27245;var statearr_27249_27322 = state_27245__$1;(statearr_27249_27322[(2)] = null);
(statearr_27249_27322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___27320,onView_27315,onModel_27316,onSys_27317))
;return ((function (switch__6187__auto__,c__6202__auto___27320,onView_27315,onModel_27316,onSys_27317){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27253 = [null,null,null,null,null,null,null,null];(statearr_27253[(0)] = state_machine__6188__auto__);
(statearr_27253[(1)] = (1));
return statearr_27253;
});
var state_machine__6188__auto____1 = (function (state_27245){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27245);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27254){if((e27254 instanceof Object))
{var ex__6191__auto__ = e27254;var statearr_27255_27323 = state_27245;(statearr_27255_27323[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27324 = state_27245;
state_27245 = G__27324;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27245){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___27320,onView_27315,onModel_27316,onSys_27317))
})();var state__6204__auto__ = (function (){var statearr_27256 = f__6203__auto__.call(null);(statearr_27256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___27320);
return statearr_27256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___27320,onView_27315,onModel_27316,onSys_27317))
);
var c__6202__auto___27325 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___27325,onView_27315,onModel_27316,onSys_27317){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___27325,onView_27315,onModel_27316,onSys_27317){
return (function (state_27293){var state_val_27294 = (state_27293[(1)]);if((state_val_27294 === (7)))
{var inst_27288 = (state_27293[(2)]);var inst_27260 = inst_27288;var state_27293__$1 = (function (){var statearr_27295 = state_27293;(statearr_27295[(7)] = inst_27260);
return statearr_27295;
})();var statearr_27296_27326 = state_27293__$1;(statearr_27296_27326[(2)] = null);
(statearr_27296_27326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (1)))
{var inst_27257 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_27258 = [onView_27315,onModel_27316,onSys_27317,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_27259 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_27257,inst_27258);var inst_27260 = inst_27259;var state_27293__$1 = (function (){var statearr_27297 = state_27293;(statearr_27297[(7)] = inst_27260);
return statearr_27297;
})();var statearr_27298_27327 = state_27293__$1;(statearr_27298_27327[(2)] = null);
(statearr_27298_27327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (4)))
{var inst_27268 = (state_27293[(8)]);var inst_27266 = (state_27293[(2)]);var inst_27267 = cljs.core.nth.call(null,inst_27266,(0),null);var inst_27268__$1 = cljs.core.nth.call(null,inst_27266,(1),null);var inst_27272 = cljs.core._EQ_.call(null,onSys_27317,inst_27268__$1);var state_27293__$1 = (function (){var statearr_27299 = state_27293;(statearr_27299[(8)] = inst_27268__$1);
(statearr_27299[(9)] = inst_27267);
return statearr_27299;
})();if(inst_27272)
{var statearr_27300_27328 = state_27293__$1;(statearr_27300_27328[(1)] = (5));
} else
{var statearr_27301_27329 = state_27293__$1;(statearr_27301_27329[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (6)))
{var inst_27268 = (state_27293[(8)]);var inst_27279 = cljs.core._EQ_.call(null,onView_27315,inst_27268);var state_27293__$1 = state_27293;if(inst_27279)
{var statearr_27302_27330 = state_27293__$1;(statearr_27302_27330[(1)] = (8));
} else
{var statearr_27303_27331 = state_27293__$1;(statearr_27303_27331[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (3)))
{var inst_27291 = (state_27293[(2)]);var state_27293__$1 = state_27293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27293__$1,inst_27291);
} else
{if((state_val_27294 === (2)))
{var inst_27263 = [onView_27315,onSys_27317];var inst_27264 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27263,null));var state_27293__$1 = state_27293;return cljs.core.async.ioc_alts_BANG_.call(null,state_27293__$1,(4),inst_27264);
} else
{if((state_val_27294 === (9)))
{var inst_27260 = (state_27293[(7)]);var state_27293__$1 = state_27293;var statearr_27304_27332 = state_27293__$1;(statearr_27304_27332[(2)] = inst_27260);
(statearr_27304_27332[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (5)))
{var inst_27260 = (state_27293[(7)]);var inst_27267 = (state_27293[(9)]);var inst_27275 = cljs.core.nth.call(null,inst_27267,(0),null);var inst_27276 = cljs.core.nth.call(null,inst_27267,(1),null);var inst_27277 = app.stock.abstract$.onSystem.call(null,inst_27275,inst_27276,inst_27260);var state_27293__$1 = state_27293;var statearr_27305_27333 = state_27293__$1;(statearr_27305_27333[(2)] = inst_27277);
(statearr_27305_27333[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (10)))
{var inst_27286 = (state_27293[(2)]);var state_27293__$1 = state_27293;var statearr_27306_27334 = state_27293__$1;(statearr_27306_27334[(2)] = inst_27286);
(statearr_27306_27334[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27294 === (8)))
{var inst_27260 = (state_27293[(7)]);var inst_27267 = (state_27293[(9)]);var inst_27281 = (inst_27267[(0)]);var inst_27282 = (inst_27267[(1)]);var inst_27283 = app.stock.abstract$.onViewCommand.call(null,inst_27281,inst_27282,inst_27260);var state_27293__$1 = state_27293;var statearr_27307_27335 = state_27293__$1;(statearr_27307_27335[(2)] = inst_27283);
(statearr_27307_27335[(1)] = (10));
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
});})(c__6202__auto___27325,onView_27315,onModel_27316,onSys_27317))
;return ((function (switch__6187__auto__,c__6202__auto___27325,onView_27315,onModel_27316,onSys_27317){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27311 = [null,null,null,null,null,null,null,null,null,null];(statearr_27311[(0)] = state_machine__6188__auto__);
(statearr_27311[(1)] = (1));
return statearr_27311;
});
var state_machine__6188__auto____1 = (function (state_27293){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27312){if((e27312 instanceof Object))
{var ex__6191__auto__ = e27312;var statearr_27313_27336 = state_27293;(statearr_27313_27336[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27337 = state_27293;
state_27293 = G__27337;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27293){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___27325,onView_27315,onModel_27316,onSys_27317))
})();var state__6204__auto__ = (function (){var statearr_27314 = f__6203__auto__.call(null);(statearr_27314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___27325);
return statearr_27314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___27325,onView_27315,onModel_27316,onSys_27317))
);
return null;
});
app.stock.main.main.call(null);
