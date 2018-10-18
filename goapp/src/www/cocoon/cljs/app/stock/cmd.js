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
return (function (state_53362){var state_val_53363 = (state_53362[(1)]);if((state_val_53363 === (3)))
{var inst_53360 = (state_53362[(2)]);var state_53362__$1 = state_53362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53362__$1,inst_53360);
} else
{if((state_val_53363 === (2)))
{var inst_53352 = (state_53362[(2)]);var inst_53353 = cljs.core.nth.call(null,inst_53352,(0),null);var inst_53354 = cljs.core.nth.call(null,inst_53352,(1),null);var inst_53355 = [inst_53353,inst_53354,id,date,request];var inst_53356 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53355,null));var inst_53357 = ["loadStock",inst_53356];var inst_53358 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53357,null));var state_53362__$1 = state_53362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53362__$1,(3),ch,inst_53358);
} else
{if((state_val_53363 === (1)))
{var inst_53350 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_53362__$1 = state_53362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53362__$1,(2),inst_53350);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53367 = [null,null,null,null,null,null,null];(statearr_53367[(0)] = state_machine__6188__auto__);
(statearr_53367[(1)] = (1));
return statearr_53367;
});
var state_machine__6188__auto____1 = (function (state_53362){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53362);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53368){if((e53368 instanceof Object))
{var ex__6191__auto__ = e53368;var statearr_53369_53371 = state_53362;(statearr_53369_53371[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53372 = state_53362;
state_53362 = G__53372;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53362){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53370 = f__6203__auto__.call(null);(statearr_53370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_53340){var state_val_53341 = (state_53340[(1)]);if((state_val_53341 === (2)))
{var inst_53338 = (state_53340[(2)]);var state_53340__$1 = state_53340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53340__$1,inst_53338);
} else
{if((state_val_53341 === (1)))
{var inst_53329 = cljs.core.first.call(null,result);var inst_53330 = cljs.core.second.call(null,result);var inst_53331 = cljs.core.nth.call(null,result,(2));var inst_53332 = cljs.core.nth.call(null,result,(3));var inst_53333 = [inst_53329,inst_53330,inst_53331,inst_53332,request];var inst_53334 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53333,null));var inst_53335 = ["loadStock",inst_53334];var inst_53336 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53335,null));var state_53340__$1 = state_53340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53340__$1,(2),ch,inst_53336);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53345 = [null,null,null,null,null,null,null];(statearr_53345[(0)] = state_machine__6188__auto__);
(statearr_53345[(1)] = (1));
return statearr_53345;
});
var state_machine__6188__auto____1 = (function (state_53340){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53346){if((e53346 instanceof Object))
{var ex__6191__auto__ = e53346;var statearr_53347_53373 = state_53340;(statearr_53347_53373[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53374 = state_53340;
state_53340 = G__53374;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53340){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53348 = f__6203__auto__.call(null);(statearr_53348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53348;
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
return (function (state_53425){var state_val_53426 = (state_53425[(1)]);if((state_val_53426 === (6)))
{var inst_53412 = (state_53425[(7)]);var inst_53417 = (state_53425[(2)]);var inst_53418 = [inst_53417,inst_53412,request];var inst_53419 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53418,null));var inst_53420 = ["view",inst_53419];var inst_53421 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53420,null));var state_53425__$1 = state_53425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53425__$1,(3),ch,inst_53421);
} else
{if((state_val_53426 === (5)))
{var inst_53412 = (state_53425[(7)]);var inst_53415 = inst_53412.error;var state_53425__$1 = state_53425;var statearr_53427_53439 = state_53425__$1;(statearr_53427_53439[(2)] = inst_53415);
(statearr_53427_53439[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53426 === (4)))
{var inst_53411 = (state_53425[(8)]);var state_53425__$1 = state_53425;var statearr_53428_53440 = state_53425__$1;(statearr_53428_53440[(2)] = inst_53411);
(statearr_53428_53440[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53426 === (3)))
{var inst_53423 = (state_53425[(2)]);var state_53425__$1 = state_53425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53425__$1,inst_53423);
} else
{if((state_val_53426 === (2)))
{var inst_53411 = (state_53425[(8)]);var inst_53410 = (state_53425[(2)]);var inst_53411__$1 = cljs.core.nth.call(null,inst_53410,(0),null);var inst_53412 = cljs.core.nth.call(null,inst_53410,(1),null);var state_53425__$1 = (function (){var statearr_53429 = state_53425;(statearr_53429[(7)] = inst_53412);
(statearr_53429[(8)] = inst_53411__$1);
return statearr_53429;
})();if(cljs.core.truth_(inst_53411__$1))
{var statearr_53430_53441 = state_53425__$1;(statearr_53430_53441[(1)] = (4));
} else
{var statearr_53431_53442 = state_53425__$1;(statearr_53431_53442[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53426 === (1)))
{var inst_53408 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_53425__$1 = state_53425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53425__$1,(2),inst_53408);
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
var state_machine__6188__auto____0 = (function (){var statearr_53435 = [null,null,null,null,null,null,null,null,null];(statearr_53435[(0)] = state_machine__6188__auto__);
(statearr_53435[(1)] = (1));
return statearr_53435;
});
var state_machine__6188__auto____1 = (function (state_53425){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53425);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53436){if((e53436 instanceof Object))
{var ex__6191__auto__ = e53436;var statearr_53437_53443 = state_53425;(statearr_53437_53443[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53425);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53444 = state_53425;
state_53425 = G__53444;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53425){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53438 = f__6203__auto__.call(null);(statearr_53438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_53497){var state_val_53498 = (state_53497[(1)]);if((state_val_53498 === (6)))
{var inst_53484 = (state_53497[(7)]);var inst_53489 = (state_53497[(2)]);var inst_53490 = [inst_53489,inst_53484,request];var inst_53491 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53490,null));var inst_53492 = ["view",inst_53491];var inst_53493 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53492,null));var state_53497__$1 = state_53497;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53497__$1,(3),ch,inst_53493);
} else
{if((state_val_53498 === (5)))
{var inst_53484 = (state_53497[(7)]);var inst_53487 = inst_53484.error;var state_53497__$1 = state_53497;var statearr_53499_53511 = state_53497__$1;(statearr_53499_53511[(2)] = inst_53487);
(statearr_53499_53511[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53498 === (4)))
{var inst_53483 = (state_53497[(8)]);var state_53497__$1 = state_53497;var statearr_53500_53512 = state_53497__$1;(statearr_53500_53512[(2)] = inst_53483);
(statearr_53500_53512[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53498 === (3)))
{var inst_53495 = (state_53497[(2)]);var state_53497__$1 = state_53497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53497__$1,inst_53495);
} else
{if((state_val_53498 === (2)))
{var inst_53483 = (state_53497[(8)]);var inst_53482 = (state_53497[(2)]);var inst_53483__$1 = cljs.core.nth.call(null,inst_53482,(0),null);var inst_53484 = cljs.core.nth.call(null,inst_53482,(1),null);var state_53497__$1 = (function (){var statearr_53501 = state_53497;(statearr_53501[(7)] = inst_53484);
(statearr_53501[(8)] = inst_53483__$1);
return statearr_53501;
})();if(cljs.core.truth_(inst_53483__$1))
{var statearr_53502_53513 = state_53497__$1;(statearr_53502_53513[(1)] = (4));
} else
{var statearr_53503_53514 = state_53497__$1;(statearr_53503_53514[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53498 === (1)))
{var inst_53479 = JSON.stringify(data);var inst_53480 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_53479);var state_53497__$1 = state_53497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53497__$1,(2),inst_53480);
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
var state_machine__6188__auto____0 = (function (){var statearr_53507 = [null,null,null,null,null,null,null,null,null];(statearr_53507[(0)] = state_machine__6188__auto__);
(statearr_53507[(1)] = (1));
return statearr_53507;
});
var state_machine__6188__auto____1 = (function (state_53497){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53497);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53508){if((e53508 instanceof Object))
{var ex__6191__auto__ = e53508;var statearr_53509_53515 = state_53497;(statearr_53509_53515[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53497);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53516 = state_53497;
state_53497 = G__53516;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53497){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53510 = f__6203__auto__.call(null);(statearr_53510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
