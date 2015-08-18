// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj44357 = {"url":"/proxy","dataType":"text","data":(function (){var obj44359 = {"url":url};return obj44359;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_44366){var state_val_44367 = (state_44366[(1)]);if((state_val_44367 === (2)))
{var inst_44363 = (state_44366[(2)]);var inst_44364 = cljs.core.async.close_BANG_.call(null,ret);var state_44366__$1 = (function (){var statearr_44368 = state_44366;(statearr_44368[(7)] = inst_44363);
return statearr_44368;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44366__$1,inst_44364);
} else
{if((state_val_44367 === (1)))
{var inst_44360 = [null,data];var inst_44361 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44360,null));var state_44366__$1 = state_44366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44366__$1,(2),ret,inst_44361);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44372 = [null,null,null,null,null,null,null,null];(statearr_44372[(0)] = state_machine__6188__auto__);
(statearr_44372[(1)] = (1));
return statearr_44372;
});
var state_machine__6188__auto____1 = (function (state_44366){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44373){if((e44373 instanceof Object))
{var ex__6191__auto__ = e44373;var statearr_44374_44392 = state_44366;(statearr_44374_44392[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44393 = state_44366;
state_44366 = G__44393;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44366){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_44375 = f__6203__auto__.call(null);(statearr_44375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_44382){var state_val_44383 = (state_44382[(1)]);if((state_val_44383 === (2)))
{var inst_44379 = (state_44382[(2)]);var inst_44380 = cljs.core.async.close_BANG_.call(null,ret);var state_44382__$1 = (function (){var statearr_44384 = state_44382;(statearr_44384[(7)] = inst_44379);
return statearr_44384;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44382__$1,inst_44380);
} else
{if((state_val_44383 === (1)))
{var inst_44376 = [err];var inst_44377 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44376,null));var state_44382__$1 = state_44382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44382__$1,(2),ret,inst_44377);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44388 = [null,null,null,null,null,null,null,null];(statearr_44388[(0)] = state_machine__6188__auto__);
(statearr_44388[(1)] = (1));
return statearr_44388;
});
var state_machine__6188__auto____1 = (function (state_44382){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44382);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44389){if((e44389 instanceof Object))
{var ex__6191__auto__ = e44389;var statearr_44390_44394 = state_44382;(statearr_44390_44394[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44395 = state_44382;
state_44382 = G__44395;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44382){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_44391 = f__6203__auto__.call(null);(statearr_44391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj44357;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__44404(s__44405){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__44405__$1 = s__44405;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44405__$1);if(temp__4126__auto__)
{var s__44405__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44405__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__44405__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__44407 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__44406 = (0);while(true){
if((i__44406 < size__4275__auto__))
{var vec__44410 = cljs.core._nth.call(null,c__4274__auto__,i__44406);var _ = cljs.core.nth.call(null,vec__44410,(0),null);var date = cljs.core.nth.call(null,vec__44410,(1),null);var open = cljs.core.nth.call(null,vec__44410,(2),null);var high = cljs.core.nth.call(null,vec__44410,(3),null);var low = cljs.core.nth.call(null,vec__44410,(4),null);var close = cljs.core.nth.call(null,vec__44410,(5),null);var volume = cljs.core.nth.call(null,vec__44410,(6),null);cljs.core.chunk_append.call(null,b__44407,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__44412 = (i__44406 + (1));
i__44406 = G__44412;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44407),iter__44404.call(null,cljs.core.chunk_rest.call(null,s__44405__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44407),null);
}
} else
{var vec__44411 = cljs.core.first.call(null,s__44405__$2);var _ = cljs.core.nth.call(null,vec__44411,(0),null);var date = cljs.core.nth.call(null,vec__44411,(1),null);var open = cljs.core.nth.call(null,vec__44411,(2),null);var high = cljs.core.nth.call(null,vec__44411,(3),null);var low = cljs.core.nth.call(null,vec__44411,(4),null);var close = cljs.core.nth.call(null,vec__44411,(5),null);var volume = cljs.core.nth.call(null,vec__44411,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__44404.call(null,cljs.core.rest.call(null,s__44405__$2)));
}
} else
{return null;
}
break;
}
});})(infos))
,null,null));
});})(infos))
;return iter__4276__auto__.call(null,infos);
});
stock.tool.stock_info = (function stock_info(all,id,startdate,start,num){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_44490){var state_val_44491 = (state_44490[(1)]);if((state_val_44491 === (9)))
{var inst_44480 = (state_44490[(2)]);var state_44490__$1 = state_44490;var statearr_44492_44509 = state_44490__$1;(statearr_44492_44509[(2)] = inst_44480);
(statearr_44492_44509[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44491 === (8)))
{var inst_44486 = (state_44490[(2)]);var state_44490__$1 = state_44490;var statearr_44493_44510 = state_44490__$1;(statearr_44493_44510[(2)] = inst_44486);
(statearr_44493_44510[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44491 === (7)))
{var inst_44472 = (state_44490[(7)]);var inst_44482 = cljs.core.concat.call(null,all,inst_44472);var inst_44483 = [null,inst_44482];var inst_44484 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44483,null));var state_44490__$1 = state_44490;var statearr_44494_44511 = state_44490__$1;(statearr_44494_44511[(2)] = inst_44484);
(statearr_44494_44511[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44491 === (6)))
{var inst_44472 = (state_44490[(7)]);var inst_44476 = cljs.core.concat.call(null,all,inst_44472);var inst_44477 = (start + num);var inst_44478 = stock_info.call(null,inst_44476,id,startdate,inst_44477,num);var state_44490__$1 = state_44490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44490__$1,(9),inst_44478);
} else
{if((state_val_44491 === (5)))
{var inst_44488 = (state_44490[(2)]);var state_44490__$1 = state_44490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44490__$1,inst_44488);
} else
{if((state_val_44491 === (4)))
{var inst_44467 = (state_44490[(8)]);var inst_44472 = (state_44490[(7)]);var inst_44472__$1 = stock.tool.parse_info.call(null,inst_44467);var inst_44473 = cljs.core.count.call(null,inst_44472__$1);var inst_44474 = cljs.core._EQ_.call(null,num,inst_44473);var state_44490__$1 = (function (){var statearr_44495 = state_44490;(statearr_44495[(7)] = inst_44472__$1);
return statearr_44495;
})();if(inst_44474)
{var statearr_44496_44512 = state_44490__$1;(statearr_44496_44512[(1)] = (6));
} else
{var statearr_44497_44513 = state_44490__$1;(statearr_44497_44513[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44491 === (3)))
{var inst_44466 = (state_44490[(9)]);var inst_44469 = [inst_44466];var inst_44470 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44469,null));var state_44490__$1 = state_44490;var statearr_44498_44514 = state_44490__$1;(statearr_44498_44514[(2)] = inst_44470);
(statearr_44498_44514[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44491 === (2)))
{var inst_44466 = (state_44490[(9)]);var inst_44465 = (state_44490[(2)]);var inst_44466__$1 = cljs.core.nth.call(null,inst_44465,(0),null);var inst_44467 = cljs.core.nth.call(null,inst_44465,(1),null);var state_44490__$1 = (function (){var statearr_44499 = state_44490;(statearr_44499[(9)] = inst_44466__$1);
(statearr_44499[(8)] = inst_44467);
return statearr_44499;
})();if(cljs.core.truth_(inst_44466__$1))
{var statearr_44500_44515 = state_44490__$1;(statearr_44500_44515[(1)] = (3));
} else
{var statearr_44501_44516 = state_44490__$1;(statearr_44501_44516[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44491 === (1)))
{var inst_44462 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_44463 = stock.tool.content.call(null,inst_44462);var state_44490__$1 = state_44490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44490__$1,(2),inst_44463);
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
var state_machine__6188__auto____0 = (function (){var statearr_44505 = [null,null,null,null,null,null,null,null,null,null];(statearr_44505[(0)] = state_machine__6188__auto__);
(statearr_44505[(1)] = (1));
return statearr_44505;
});
var state_machine__6188__auto____1 = (function (state_44490){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44506){if((e44506 instanceof Object))
{var ex__6191__auto__ = e44506;var statearr_44507_44517 = state_44490;(statearr_44507_44517[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44518 = state_44490;
state_44490 = G__44518;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44490){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_44508 = f__6203__auto__.call(null);(statearr_44508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__44520 = kline;var _ = cljs.core.nth.call(null,vec__44520,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44520,(1),null);var high__$1 = cljs.core.nth.call(null,vec__44520,(2),null);var ___$2 = cljs.core.nth.call(null,vec__44520,(3),null);var ___$3 = cljs.core.nth.call(null,vec__44520,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44520,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__44522 = kline;var _ = cljs.core.nth.call(null,vec__44522,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44522,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44522,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44522,(3),null);var open__$1 = cljs.core.nth.call(null,vec__44522,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44522,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__44524 = kline;var _ = cljs.core.nth.call(null,vec__44524,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44524,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44524,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44524,(3),null);var close__$1 = cljs.core.nth.call(null,vec__44524,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44524,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__44526 = kline;var _ = cljs.core.nth.call(null,vec__44526,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44526,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44526,(2),null);var low__$1 = cljs.core.nth.call(null,vec__44526,(3),null);var ___$3 = cljs.core.nth.call(null,vec__44526,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44526,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__44528 = kline;var _ = cljs.core.nth.call(null,vec__44528,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44528,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44528,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44528,(3),null);var ___$4 = cljs.core.nth.call(null,vec__44528,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__44528,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__44530 = kline;var _ = cljs.core.nth.call(null,vec__44530,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44530,(1),null);var high = cljs.core.nth.call(null,vec__44530,(2),null);var low = cljs.core.nth.call(null,vec__44530,(3),null);var close = cljs.core.nth.call(null,vec__44530,(4),null);var ___$2 = cljs.core.nth.call(null,vec__44530,(5),null);return (((high + low) + close) / (3));
}
});
