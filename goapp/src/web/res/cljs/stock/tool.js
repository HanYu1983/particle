// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj47308 = {"url":"/proxy","dataType":"text","data":(function (){var obj47310 = {"url":url};return obj47310;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_47317){var state_val_47318 = (state_47317[(1)]);if((state_val_47318 === (2)))
{var inst_47314 = (state_47317[(2)]);var inst_47315 = cljs.core.async.close_BANG_.call(null,ret);var state_47317__$1 = (function (){var statearr_47319 = state_47317;(statearr_47319[(7)] = inst_47314);
return statearr_47319;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47317__$1,inst_47315);
} else
{if((state_val_47318 === (1)))
{var inst_47311 = [null,data];var inst_47312 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47311,null));var state_47317__$1 = state_47317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47317__$1,(2),ret,inst_47312);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47323 = [null,null,null,null,null,null,null,null];(statearr_47323[(0)] = state_machine__6188__auto__);
(statearr_47323[(1)] = (1));
return statearr_47323;
});
var state_machine__6188__auto____1 = (function (state_47317){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47317);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47324){if((e47324 instanceof Object))
{var ex__6191__auto__ = e47324;var statearr_47325_47343 = state_47317;(statearr_47325_47343[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47317);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47344 = state_47317;
state_47317 = G__47344;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47317){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_47326 = f__6203__auto__.call(null);(statearr_47326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_47333){var state_val_47334 = (state_47333[(1)]);if((state_val_47334 === (2)))
{var inst_47330 = (state_47333[(2)]);var inst_47331 = cljs.core.async.close_BANG_.call(null,ret);var state_47333__$1 = (function (){var statearr_47335 = state_47333;(statearr_47335[(7)] = inst_47330);
return statearr_47335;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47333__$1,inst_47331);
} else
{if((state_val_47334 === (1)))
{var inst_47327 = [err];var inst_47328 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47327,null));var state_47333__$1 = state_47333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47333__$1,(2),ret,inst_47328);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47339 = [null,null,null,null,null,null,null,null];(statearr_47339[(0)] = state_machine__6188__auto__);
(statearr_47339[(1)] = (1));
return statearr_47339;
});
var state_machine__6188__auto____1 = (function (state_47333){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47333);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47340){if((e47340 instanceof Object))
{var ex__6191__auto__ = e47340;var statearr_47341_47345 = state_47333;(statearr_47341_47345[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47333);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47346 = state_47333;
state_47333 = G__47346;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47333){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_47342 = f__6203__auto__.call(null);(statearr_47342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj47308;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__47355(s__47356){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__47356__$1 = s__47356;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47356__$1);if(temp__4126__auto__)
{var s__47356__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47356__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__47356__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__47358 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__47357 = (0);while(true){
if((i__47357 < size__4275__auto__))
{var vec__47361 = cljs.core._nth.call(null,c__4274__auto__,i__47357);var _ = cljs.core.nth.call(null,vec__47361,(0),null);var date = cljs.core.nth.call(null,vec__47361,(1),null);var open = cljs.core.nth.call(null,vec__47361,(2),null);var high = cljs.core.nth.call(null,vec__47361,(3),null);var low = cljs.core.nth.call(null,vec__47361,(4),null);var close = cljs.core.nth.call(null,vec__47361,(5),null);var volume = cljs.core.nth.call(null,vec__47361,(6),null);cljs.core.chunk_append.call(null,b__47358,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__47363 = (i__47357 + (1));
i__47357 = G__47363;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47358),iter__47355.call(null,cljs.core.chunk_rest.call(null,s__47356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47358),null);
}
} else
{var vec__47362 = cljs.core.first.call(null,s__47356__$2);var _ = cljs.core.nth.call(null,vec__47362,(0),null);var date = cljs.core.nth.call(null,vec__47362,(1),null);var open = cljs.core.nth.call(null,vec__47362,(2),null);var high = cljs.core.nth.call(null,vec__47362,(3),null);var low = cljs.core.nth.call(null,vec__47362,(4),null);var close = cljs.core.nth.call(null,vec__47362,(5),null);var volume = cljs.core.nth.call(null,vec__47362,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__47355.call(null,cljs.core.rest.call(null,s__47356__$2)));
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
return (function (state_47441){var state_val_47442 = (state_47441[(1)]);if((state_val_47442 === (9)))
{var inst_47431 = (state_47441[(2)]);var state_47441__$1 = state_47441;var statearr_47443_47460 = state_47441__$1;(statearr_47443_47460[(2)] = inst_47431);
(statearr_47443_47460[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47442 === (8)))
{var inst_47437 = (state_47441[(2)]);var state_47441__$1 = state_47441;var statearr_47444_47461 = state_47441__$1;(statearr_47444_47461[(2)] = inst_47437);
(statearr_47444_47461[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47442 === (7)))
{var inst_47423 = (state_47441[(7)]);var inst_47433 = cljs.core.concat.call(null,all,inst_47423);var inst_47434 = [null,inst_47433];var inst_47435 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47434,null));var state_47441__$1 = state_47441;var statearr_47445_47462 = state_47441__$1;(statearr_47445_47462[(2)] = inst_47435);
(statearr_47445_47462[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47442 === (6)))
{var inst_47423 = (state_47441[(7)]);var inst_47427 = cljs.core.concat.call(null,all,inst_47423);var inst_47428 = (start + num);var inst_47429 = stock_info.call(null,inst_47427,id,startdate,inst_47428,num);var state_47441__$1 = state_47441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47441__$1,(9),inst_47429);
} else
{if((state_val_47442 === (5)))
{var inst_47439 = (state_47441[(2)]);var state_47441__$1 = state_47441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47441__$1,inst_47439);
} else
{if((state_val_47442 === (4)))
{var inst_47423 = (state_47441[(7)]);var inst_47418 = (state_47441[(8)]);var inst_47423__$1 = stock.tool.parse_info.call(null,inst_47418);var inst_47424 = cljs.core.count.call(null,inst_47423__$1);var inst_47425 = cljs.core._EQ_.call(null,num,inst_47424);var state_47441__$1 = (function (){var statearr_47446 = state_47441;(statearr_47446[(7)] = inst_47423__$1);
return statearr_47446;
})();if(inst_47425)
{var statearr_47447_47463 = state_47441__$1;(statearr_47447_47463[(1)] = (6));
} else
{var statearr_47448_47464 = state_47441__$1;(statearr_47448_47464[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47442 === (3)))
{var inst_47417 = (state_47441[(9)]);var inst_47420 = [inst_47417];var inst_47421 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47420,null));var state_47441__$1 = state_47441;var statearr_47449_47465 = state_47441__$1;(statearr_47449_47465[(2)] = inst_47421);
(statearr_47449_47465[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47442 === (2)))
{var inst_47417 = (state_47441[(9)]);var inst_47416 = (state_47441[(2)]);var inst_47417__$1 = cljs.core.nth.call(null,inst_47416,(0),null);var inst_47418 = cljs.core.nth.call(null,inst_47416,(1),null);var state_47441__$1 = (function (){var statearr_47450 = state_47441;(statearr_47450[(9)] = inst_47417__$1);
(statearr_47450[(8)] = inst_47418);
return statearr_47450;
})();if(cljs.core.truth_(inst_47417__$1))
{var statearr_47451_47466 = state_47441__$1;(statearr_47451_47466[(1)] = (3));
} else
{var statearr_47452_47467 = state_47441__$1;(statearr_47452_47467[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47442 === (1)))
{var inst_47413 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_47414 = stock.tool.content.call(null,inst_47413);var state_47441__$1 = state_47441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47441__$1,(2),inst_47414);
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
var state_machine__6188__auto____0 = (function (){var statearr_47456 = [null,null,null,null,null,null,null,null,null,null];(statearr_47456[(0)] = state_machine__6188__auto__);
(statearr_47456[(1)] = (1));
return statearr_47456;
});
var state_machine__6188__auto____1 = (function (state_47441){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47457){if((e47457 instanceof Object))
{var ex__6191__auto__ = e47457;var statearr_47458_47468 = state_47441;(statearr_47458_47468[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47469 = state_47441;
state_47441 = G__47469;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47441){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_47459 = f__6203__auto__.call(null);(statearr_47459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){return cljs.core.map.call(null,(function (p__47472){var vec__47473 = p__47472;var _ = cljs.core.nth.call(null,vec__47473,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47473,(1),null);var high__$1 = cljs.core.nth.call(null,vec__47473,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47473,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47473,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47473,(5),null);return high__$1;
}),kline);
});
stock.tool.low = (function low(kline){return cljs.core.map.call(null,(function (p__47476){var vec__47477 = p__47476;var _ = cljs.core.nth.call(null,vec__47477,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47477,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47477,(2),null);var low__$1 = cljs.core.nth.call(null,vec__47477,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47477,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47477,(5),null);return low__$1;
}),kline);
});
stock.tool.close = (function close(kline){return cljs.core.map.call(null,(function (p__47480){var vec__47481 = p__47480;var _ = cljs.core.nth.call(null,vec__47481,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47481,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47481,(2),null);var ___$3 = cljs.core.nth.call(null,vec__47481,(3),null);var close__$1 = cljs.core.nth.call(null,vec__47481,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47481,(5),null);return close__$1;
}),kline);
});
stock.tool.volume = (function volume(kline){return cljs.core.map.call(null,(function (p__47484){var vec__47485 = p__47484;var _ = cljs.core.nth.call(null,vec__47485,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47485,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47485,(2),null);var ___$3 = cljs.core.nth.call(null,vec__47485,(3),null);var ___$4 = cljs.core.nth.call(null,vec__47485,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__47485,(5),null);return volume__$1;
}),kline);
});
