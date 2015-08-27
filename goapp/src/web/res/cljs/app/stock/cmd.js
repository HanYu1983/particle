// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.dbfile');
goog.require('app.dbfile');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_85261){var state_val_85262 = (state_85261[(1)]);if((state_val_85262 === (3)))
{var inst_85259 = (state_85261[(2)]);var state_85261__$1 = state_85261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85261__$1,inst_85259);
} else
{if((state_val_85262 === (2)))
{var inst_85248 = (state_85261[(2)]);var inst_85249 = cljs.core.nth.call(null,inst_85248,(0),null);var inst_85250 = cljs.core.nth.call(null,inst_85248,(1),null);var inst_85251 = stock.tool.parse_getprices.call(null,inst_85250);var inst_85252 = stock.tool.format_getprices.call(null,(86400),inst_85251);var inst_85253 = cljs.core.reverse.call(null,inst_85252);var inst_85254 = [inst_85249,inst_85253,id,date,request];var inst_85255 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85254,null));var inst_85256 = ["loadStock",inst_85255];var inst_85257 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85256,null));var state_85261__$1 = state_85261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85261__$1,(3),ch,inst_85257);
} else
{if((state_val_85262 === (1)))
{var inst_85245 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_85246 = stock.tool.content.call(null,inst_85245);var state_85261__$1 = state_85261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85261__$1,(2),inst_85246);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85266 = [null,null,null,null,null,null,null];(statearr_85266[(0)] = state_machine__6188__auto__);
(statearr_85266[(1)] = (1));
return statearr_85266;
});
var state_machine__6188__auto____1 = (function (state_85261){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85267){if((e85267 instanceof Object))
{var ex__6191__auto__ = e85267;var statearr_85268_85270 = state_85261;(statearr_85268_85270[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85271 = state_85261;
state_85261 = G__85271;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85261){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85269 = f__6203__auto__.call(null);(statearr_85269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_85235){var state_val_85236 = (state_85235[(1)]);if((state_val_85236 === (2)))
{var inst_85233 = (state_85235[(2)]);var state_85235__$1 = state_85235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85235__$1,inst_85233);
} else
{if((state_val_85236 === (1)))
{var inst_85224 = cljs.core.first.call(null,result);var inst_85225 = cljs.core.second.call(null,result);var inst_85226 = cljs.core.nth.call(null,result,(2));var inst_85227 = cljs.core.nth.call(null,result,(3));var inst_85228 = [inst_85224,inst_85225,inst_85226,inst_85227,request];var inst_85229 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85228,null));var inst_85230 = ["loadStock",inst_85229];var inst_85231 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85230,null));var state_85235__$1 = state_85235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85235__$1,(2),ch,inst_85231);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85240 = [null,null,null,null,null,null,null];(statearr_85240[(0)] = state_machine__6188__auto__);
(statearr_85240[(1)] = (1));
return statearr_85240;
});
var state_machine__6188__auto____1 = (function (state_85235){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85235);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85241){if((e85241 instanceof Object))
{var ex__6191__auto__ = e85241;var statearr_85242_85272 = state_85235;(statearr_85242_85272[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85273 = state_85235;
state_85235 = G__85273;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85235){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85243 = f__6203__auto__.call(null);(statearr_85243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
loadStock = function(ch,id,date,request,result){
switch(arguments.length){
case 4:
return loadStock__4.call(this,ch,id,date,request);
case 5:
return loadStock__5.call(this,ch,id,date,request,result);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
loadStock.cljs$core$IFn$_invoke$arity$4 = loadStock__4;
loadStock.cljs$core$IFn$_invoke$arity$5 = loadStock__5;
return loadStock;
})()
;
app.stock.cmd.loadUser = (function loadUser(ch,fbid,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_85324){var state_val_85325 = (state_85324[(1)]);if((state_val_85325 === (6)))
{var inst_85311 = (state_85324[(7)]);var inst_85316 = (state_85324[(2)]);var inst_85317 = [inst_85316,inst_85311,request];var inst_85318 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85317,null));var inst_85319 = ["view",inst_85318];var inst_85320 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85319,null));var state_85324__$1 = state_85324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85324__$1,(3),ch,inst_85320);
} else
{if((state_val_85325 === (5)))
{var inst_85311 = (state_85324[(7)]);var inst_85314 = inst_85311.error;var state_85324__$1 = state_85324;var statearr_85326_85338 = state_85324__$1;(statearr_85326_85338[(2)] = inst_85314);
(statearr_85326_85338[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85325 === (4)))
{var inst_85310 = (state_85324[(8)]);var state_85324__$1 = state_85324;var statearr_85327_85339 = state_85324__$1;(statearr_85327_85339[(2)] = inst_85310);
(statearr_85327_85339[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85325 === (3)))
{var inst_85322 = (state_85324[(2)]);var state_85324__$1 = state_85324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85324__$1,inst_85322);
} else
{if((state_val_85325 === (2)))
{var inst_85310 = (state_85324[(8)]);var inst_85309 = (state_85324[(2)]);var inst_85310__$1 = cljs.core.nth.call(null,inst_85309,(0),null);var inst_85311 = cljs.core.nth.call(null,inst_85309,(1),null);var state_85324__$1 = (function (){var statearr_85328 = state_85324;(statearr_85328[(8)] = inst_85310__$1);
(statearr_85328[(7)] = inst_85311);
return statearr_85328;
})();if(cljs.core.truth_(inst_85310__$1))
{var statearr_85329_85340 = state_85324__$1;(statearr_85329_85340[(1)] = (4));
} else
{var statearr_85330_85341 = state_85324__$1;(statearr_85330_85341[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85325 === (1)))
{var inst_85307 = app.dbfile.load.call(null,"stock",fbid);var state_85324__$1 = state_85324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85324__$1,(2),inst_85307);
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
var state_machine__6188__auto____0 = (function (){var statearr_85334 = [null,null,null,null,null,null,null,null,null];(statearr_85334[(0)] = state_machine__6188__auto__);
(statearr_85334[(1)] = (1));
return statearr_85334;
});
var state_machine__6188__auto____1 = (function (state_85324){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85335){if((e85335 instanceof Object))
{var ex__6191__auto__ = e85335;var statearr_85336_85342 = state_85324;(statearr_85336_85342[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85343 = state_85324;
state_85324 = G__85343;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85324){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85337 = f__6203__auto__.call(null);(statearr_85337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_85396){var state_val_85397 = (state_85396[(1)]);if((state_val_85397 === (6)))
{var inst_85383 = (state_85396[(7)]);var inst_85388 = (state_85396[(2)]);var inst_85389 = [inst_85388,inst_85383,request];var inst_85390 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85389,null));var inst_85391 = ["view",inst_85390];var inst_85392 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85391,null));var state_85396__$1 = state_85396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85396__$1,(3),ch,inst_85392);
} else
{if((state_val_85397 === (5)))
{var inst_85383 = (state_85396[(7)]);var inst_85386 = inst_85383.error;var state_85396__$1 = state_85396;var statearr_85398_85410 = state_85396__$1;(statearr_85398_85410[(2)] = inst_85386);
(statearr_85398_85410[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85397 === (4)))
{var inst_85382 = (state_85396[(8)]);var state_85396__$1 = state_85396;var statearr_85399_85411 = state_85396__$1;(statearr_85399_85411[(2)] = inst_85382);
(statearr_85399_85411[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85397 === (3)))
{var inst_85394 = (state_85396[(2)]);var state_85396__$1 = state_85396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85396__$1,inst_85394);
} else
{if((state_val_85397 === (2)))
{var inst_85382 = (state_85396[(8)]);var inst_85381 = (state_85396[(2)]);var inst_85382__$1 = cljs.core.nth.call(null,inst_85381,(0),null);var inst_85383 = cljs.core.nth.call(null,inst_85381,(1),null);var state_85396__$1 = (function (){var statearr_85400 = state_85396;(statearr_85400[(8)] = inst_85382__$1);
(statearr_85400[(7)] = inst_85383);
return statearr_85400;
})();if(cljs.core.truth_(inst_85382__$1))
{var statearr_85401_85412 = state_85396__$1;(statearr_85401_85412[(1)] = (4));
} else
{var statearr_85402_85413 = state_85396__$1;(statearr_85402_85413[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85397 === (1)))
{var inst_85378 = JSON.stringify(data);var inst_85379 = app.dbfile.save.call(null,"stock",fbid,inst_85378);var state_85396__$1 = state_85396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85396__$1,(2),inst_85379);
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
var state_machine__6188__auto____0 = (function (){var statearr_85406 = [null,null,null,null,null,null,null,null,null];(statearr_85406[(0)] = state_machine__6188__auto__);
(statearr_85406[(1)] = (1));
return statearr_85406;
});
var state_machine__6188__auto____1 = (function (state_85396){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85407){if((e85407 instanceof Object))
{var ex__6191__auto__ = e85407;var statearr_85408_85414 = state_85396;(statearr_85408_85414[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85415 = state_85396;
state_85396 = G__85415;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85396){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85409 = f__6203__auto__.call(null);(statearr_85409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
