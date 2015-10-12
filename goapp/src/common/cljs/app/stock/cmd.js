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
return (function (state_17259){var state_val_17260 = (state_17259[(1)]);if((state_val_17260 === (3)))
{var inst_17257 = (state_17259[(2)]);var state_17259__$1 = state_17259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17259__$1,inst_17257);
} else
{if((state_val_17260 === (2)))
{var inst_17249 = (state_17259[(2)]);var inst_17250 = cljs.core.nth.call(null,inst_17249,(0),null);var inst_17251 = cljs.core.nth.call(null,inst_17249,(1),null);var inst_17252 = [inst_17250,inst_17251,id,date,request];var inst_17253 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17252,null));var inst_17254 = ["loadStock",inst_17253];var inst_17255 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17254,null));var state_17259__$1 = state_17259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17259__$1,(3),ch,inst_17255);
} else
{if((state_val_17260 === (1)))
{var inst_17247 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_17259__$1 = state_17259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17259__$1,(2),inst_17247);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17264 = [null,null,null,null,null,null,null];(statearr_17264[(0)] = state_machine__6188__auto__);
(statearr_17264[(1)] = (1));
return statearr_17264;
});
var state_machine__6188__auto____1 = (function (state_17259){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17259);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17265){if((e17265 instanceof Object))
{var ex__6191__auto__ = e17265;var statearr_17266_17268 = state_17259;(statearr_17266_17268[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17269 = state_17259;
state_17259 = G__17269;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17259){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_17267 = f__6203__auto__.call(null);(statearr_17267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_17237){var state_val_17238 = (state_17237[(1)]);if((state_val_17238 === (2)))
{var inst_17235 = (state_17237[(2)]);var state_17237__$1 = state_17237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17237__$1,inst_17235);
} else
{if((state_val_17238 === (1)))
{var inst_17226 = cljs.core.first.call(null,result);var inst_17227 = cljs.core.second.call(null,result);var inst_17228 = cljs.core.nth.call(null,result,(2));var inst_17229 = cljs.core.nth.call(null,result,(3));var inst_17230 = [inst_17226,inst_17227,inst_17228,inst_17229,request];var inst_17231 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17230,null));var inst_17232 = ["loadStock",inst_17231];var inst_17233 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17232,null));var state_17237__$1 = state_17237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17237__$1,(2),ch,inst_17233);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17242 = [null,null,null,null,null,null,null];(statearr_17242[(0)] = state_machine__6188__auto__);
(statearr_17242[(1)] = (1));
return statearr_17242;
});
var state_machine__6188__auto____1 = (function (state_17237){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17243){if((e17243 instanceof Object))
{var ex__6191__auto__ = e17243;var statearr_17244_17270 = state_17237;(statearr_17244_17270[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17271 = state_17237;
state_17237 = G__17271;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17237){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_17245 = f__6203__auto__.call(null);(statearr_17245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17245;
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
app.stock.cmd.loadUser = (function loadUser(ch,fbid,accessToken,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_17347){var state_val_17348 = (state_17347[(1)]);if((state_val_17348 === (9)))
{var inst_17334 = (state_17347[(7)]);var inst_17339 = (state_17347[(2)]);var inst_17340 = [inst_17339,inst_17334,request];var inst_17341 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17340,null));var inst_17342 = ["view",inst_17341];var inst_17343 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17342,null));var state_17347__$1 = state_17347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17347__$1,(6),ch,inst_17343);
} else
{if((state_val_17348 === (8)))
{var inst_17334 = (state_17347[(7)]);var inst_17337 = inst_17334.error;var state_17347__$1 = state_17347;var statearr_17349_17366 = state_17347__$1;(statearr_17349_17366[(2)] = inst_17337);
(statearr_17349_17366[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17348 === (7)))
{var inst_17323 = (state_17347[(8)]);var state_17347__$1 = state_17347;var statearr_17350_17367 = state_17347__$1;(statearr_17350_17367[(2)] = inst_17323);
(statearr_17350_17367[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17348 === (6)))
{var inst_17345 = (state_17347[(2)]);var state_17347__$1 = state_17347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17347__$1,inst_17345);
} else
{if((state_val_17348 === (5)))
{var inst_17323 = (state_17347[(8)]);var inst_17334 = (state_17347[(2)]);var state_17347__$1 = (function (){var statearr_17351 = state_17347;(statearr_17351[(7)] = inst_17334);
return statearr_17351;
})();if(cljs.core.truth_(inst_17323))
{var statearr_17352_17368 = state_17347__$1;(statearr_17352_17368[(1)] = (7));
} else
{var statearr_17353_17369 = state_17347__$1;(statearr_17353_17369[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17348 === (4)))
{var inst_17324 = (state_17347[(9)]);var inst_17332 = JSON.parse(inst_17324);var state_17347__$1 = state_17347;var statearr_17354_17370 = state_17347__$1;(statearr_17354_17370[(2)] = inst_17332);
(statearr_17354_17370[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17348 === (3)))
{var inst_17329 = [];var inst_17330 = {"stocks":inst_17329};var state_17347__$1 = state_17347;var statearr_17355_17371 = state_17347__$1;(statearr_17355_17371[(2)] = inst_17330);
(statearr_17355_17371[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17348 === (2)))
{var inst_17324 = (state_17347[(9)]);var inst_17322 = (state_17347[(2)]);var inst_17323 = cljs.core.nth.call(null,inst_17322,(0),null);var inst_17324__$1 = cljs.core.nth.call(null,inst_17322,(1),null);var inst_17325 = cljs.core._EQ_.call(null,inst_17324__$1,"");var state_17347__$1 = (function (){var statearr_17356 = state_17347;(statearr_17356[(8)] = inst_17323);
(statearr_17356[(9)] = inst_17324__$1);
return statearr_17356;
})();if(inst_17325)
{var statearr_17357_17372 = state_17347__$1;(statearr_17357_17372[(1)] = (3));
} else
{var statearr_17358_17373 = state_17347__$1;(statearr_17358_17373[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17348 === (1)))
{var inst_17320 = app.dbfile.loadFromUser.call(null,fbid,accessToken,"stock.json");var state_17347__$1 = state_17347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17347__$1,(2),inst_17320);
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
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17362 = [null,null,null,null,null,null,null,null,null,null];(statearr_17362[(0)] = state_machine__6188__auto__);
(statearr_17362[(1)] = (1));
return statearr_17362;
});
var state_machine__6188__auto____1 = (function (state_17347){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17347);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17363){if((e17363 instanceof Object))
{var ex__6191__auto__ = e17363;var statearr_17364_17374 = state_17347;(statearr_17364_17374[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17375 = state_17347;
state_17347 = G__17375;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17347){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_17365 = f__6203__auto__.call(null);(statearr_17365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_17428){var state_val_17429 = (state_17428[(1)]);if((state_val_17429 === (6)))
{var inst_17415 = (state_17428[(7)]);var inst_17420 = (state_17428[(2)]);var inst_17421 = [inst_17420,inst_17415,request];var inst_17422 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17421,null));var inst_17423 = ["view",inst_17422];var inst_17424 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17423,null));var state_17428__$1 = state_17428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17428__$1,(3),ch,inst_17424);
} else
{if((state_val_17429 === (5)))
{var inst_17415 = (state_17428[(7)]);var inst_17418 = inst_17415.error;var state_17428__$1 = state_17428;var statearr_17430_17442 = state_17428__$1;(statearr_17430_17442[(2)] = inst_17418);
(statearr_17430_17442[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17429 === (4)))
{var inst_17414 = (state_17428[(8)]);var state_17428__$1 = state_17428;var statearr_17431_17443 = state_17428__$1;(statearr_17431_17443[(2)] = inst_17414);
(statearr_17431_17443[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17429 === (3)))
{var inst_17426 = (state_17428[(2)]);var state_17428__$1 = state_17428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17428__$1,inst_17426);
} else
{if((state_val_17429 === (2)))
{var inst_17414 = (state_17428[(8)]);var inst_17413 = (state_17428[(2)]);var inst_17414__$1 = cljs.core.nth.call(null,inst_17413,(0),null);var inst_17415 = cljs.core.nth.call(null,inst_17413,(1),null);var state_17428__$1 = (function (){var statearr_17432 = state_17428;(statearr_17432[(7)] = inst_17415);
(statearr_17432[(8)] = inst_17414__$1);
return statearr_17432;
})();if(cljs.core.truth_(inst_17414__$1))
{var statearr_17433_17444 = state_17428__$1;(statearr_17433_17444[(1)] = (4));
} else
{var statearr_17434_17445 = state_17428__$1;(statearr_17434_17445[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17429 === (1)))
{var inst_17410 = JSON.stringify(data);var inst_17411 = app.dbfile.saveToUser.call(null,fbid,accessToken,"stock.json",inst_17410);var state_17428__$1 = state_17428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17428__$1,(2),inst_17411);
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
var state_machine__6188__auto____0 = (function (){var statearr_17438 = [null,null,null,null,null,null,null,null,null];(statearr_17438[(0)] = state_machine__6188__auto__);
(statearr_17438[(1)] = (1));
return statearr_17438;
});
var state_machine__6188__auto____1 = (function (state_17428){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17428);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17439){if((e17439 instanceof Object))
{var ex__6191__auto__ = e17439;var statearr_17440_17446 = state_17428;(statearr_17440_17446[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17447 = state_17428;
state_17428 = G__17447;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17428){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_17441 = f__6203__auto__.call(null);(statearr_17441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
