// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj32371 = {"url":"/proxy","dataType":"text","data":(function (){var obj32373 = {"url":url};return obj32373;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_32380){var state_val_32381 = (state_32380[(1)]);if((state_val_32381 === (2)))
{var inst_32377 = (state_32380[(2)]);var inst_32378 = cljs.core.async.close_BANG_.call(null,ret);var state_32380__$1 = (function (){var statearr_32382 = state_32380;(statearr_32382[(7)] = inst_32377);
return statearr_32382;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32380__$1,inst_32378);
} else
{if((state_val_32381 === (1)))
{var inst_32374 = [null,data];var inst_32375 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32374,null));var state_32380__$1 = state_32380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32380__$1,(2),ret,inst_32375);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_32386 = [null,null,null,null,null,null,null,null];(statearr_32386[(0)] = state_machine__6188__auto__);
(statearr_32386[(1)] = (1));
return statearr_32386;
});
var state_machine__6188__auto____1 = (function (state_32380){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_32380);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e32387){if((e32387 instanceof Object))
{var ex__6191__auto__ = e32387;var statearr_32388_32406 = state_32380;(statearr_32388_32406[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32407 = state_32380;
state_32380 = G__32407;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_32380){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_32380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_32389 = f__6203__auto__.call(null);(statearr_32389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_32389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_32396){var state_val_32397 = (state_32396[(1)]);if((state_val_32397 === (2)))
{var inst_32393 = (state_32396[(2)]);var inst_32394 = cljs.core.async.close_BANG_.call(null,ret);var state_32396__$1 = (function (){var statearr_32398 = state_32396;(statearr_32398[(7)] = inst_32393);
return statearr_32398;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32396__$1,inst_32394);
} else
{if((state_val_32397 === (1)))
{var inst_32390 = [err];var inst_32391 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32390,null));var state_32396__$1 = state_32396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32396__$1,(2),ret,inst_32391);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_32402 = [null,null,null,null,null,null,null,null];(statearr_32402[(0)] = state_machine__6188__auto__);
(statearr_32402[(1)] = (1));
return statearr_32402;
});
var state_machine__6188__auto____1 = (function (state_32396){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_32396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e32403){if((e32403 instanceof Object))
{var ex__6191__auto__ = e32403;var statearr_32404_32408 = state_32396;(statearr_32404_32408[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32409 = state_32396;
state_32396 = G__32409;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_32396){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_32396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_32405 = f__6203__auto__.call(null);(statearr_32405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_32405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj32371;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__32418(s__32419){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__32419__$1 = s__32419;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32419__$1);if(temp__4126__auto__)
{var s__32419__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32419__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__32419__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__32421 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__32420 = (0);while(true){
if((i__32420 < size__4275__auto__))
{var vec__32424 = cljs.core._nth.call(null,c__4274__auto__,i__32420);var _ = cljs.core.nth.call(null,vec__32424,(0),null);var date = cljs.core.nth.call(null,vec__32424,(1),null);var open = cljs.core.nth.call(null,vec__32424,(2),null);var high = cljs.core.nth.call(null,vec__32424,(3),null);var low = cljs.core.nth.call(null,vec__32424,(4),null);var close = cljs.core.nth.call(null,vec__32424,(5),null);var volume = cljs.core.nth.call(null,vec__32424,(6),null);cljs.core.chunk_append.call(null,b__32421,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__32426 = (i__32420 + (1));
i__32420 = G__32426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32421),iter__32418.call(null,cljs.core.chunk_rest.call(null,s__32419__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32421),null);
}
} else
{var vec__32425 = cljs.core.first.call(null,s__32419__$2);var _ = cljs.core.nth.call(null,vec__32425,(0),null);var date = cljs.core.nth.call(null,vec__32425,(1),null);var open = cljs.core.nth.call(null,vec__32425,(2),null);var high = cljs.core.nth.call(null,vec__32425,(3),null);var low = cljs.core.nth.call(null,vec__32425,(4),null);var close = cljs.core.nth.call(null,vec__32425,(5),null);var volume = cljs.core.nth.call(null,vec__32425,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__32418.call(null,cljs.core.rest.call(null,s__32419__$2)));
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
return (function (state_32504){var state_val_32505 = (state_32504[(1)]);if((state_val_32505 === (9)))
{var inst_32494 = (state_32504[(2)]);var state_32504__$1 = state_32504;var statearr_32506_32523 = state_32504__$1;(statearr_32506_32523[(2)] = inst_32494);
(statearr_32506_32523[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32505 === (8)))
{var inst_32500 = (state_32504[(2)]);var state_32504__$1 = state_32504;var statearr_32507_32524 = state_32504__$1;(statearr_32507_32524[(2)] = inst_32500);
(statearr_32507_32524[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32505 === (7)))
{var inst_32486 = (state_32504[(7)]);var inst_32496 = cljs.core.concat.call(null,all,inst_32486);var inst_32497 = [null,inst_32496];var inst_32498 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32497,null));var state_32504__$1 = state_32504;var statearr_32508_32525 = state_32504__$1;(statearr_32508_32525[(2)] = inst_32498);
(statearr_32508_32525[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32505 === (6)))
{var inst_32486 = (state_32504[(7)]);var inst_32490 = cljs.core.concat.call(null,all,inst_32486);var inst_32491 = (start + num);var inst_32492 = stock_info.call(null,inst_32490,id,startdate,inst_32491,num);var state_32504__$1 = state_32504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32504__$1,(9),inst_32492);
} else
{if((state_val_32505 === (5)))
{var inst_32502 = (state_32504[(2)]);var state_32504__$1 = state_32504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32504__$1,inst_32502);
} else
{if((state_val_32505 === (4)))
{var inst_32481 = (state_32504[(8)]);var inst_32486 = (state_32504[(7)]);var inst_32486__$1 = stock.tool.parse_info.call(null,inst_32481);var inst_32487 = cljs.core.count.call(null,inst_32486__$1);var inst_32488 = cljs.core._EQ_.call(null,num,inst_32487);var state_32504__$1 = (function (){var statearr_32509 = state_32504;(statearr_32509[(7)] = inst_32486__$1);
return statearr_32509;
})();if(inst_32488)
{var statearr_32510_32526 = state_32504__$1;(statearr_32510_32526[(1)] = (6));
} else
{var statearr_32511_32527 = state_32504__$1;(statearr_32511_32527[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32505 === (3)))
{var inst_32480 = (state_32504[(9)]);var inst_32483 = [inst_32480];var inst_32484 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_32483,null));var state_32504__$1 = state_32504;var statearr_32512_32528 = state_32504__$1;(statearr_32512_32528[(2)] = inst_32484);
(statearr_32512_32528[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32505 === (2)))
{var inst_32480 = (state_32504[(9)]);var inst_32479 = (state_32504[(2)]);var inst_32480__$1 = cljs.core.nth.call(null,inst_32479,(0),null);var inst_32481 = cljs.core.nth.call(null,inst_32479,(1),null);var state_32504__$1 = (function (){var statearr_32513 = state_32504;(statearr_32513[(9)] = inst_32480__$1);
(statearr_32513[(8)] = inst_32481);
return statearr_32513;
})();if(cljs.core.truth_(inst_32480__$1))
{var statearr_32514_32529 = state_32504__$1;(statearr_32514_32529[(1)] = (3));
} else
{var statearr_32515_32530 = state_32504__$1;(statearr_32515_32530[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32505 === (1)))
{var inst_32476 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_32477 = stock.tool.content.call(null,inst_32476);var state_32504__$1 = state_32504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32504__$1,(2),inst_32477);
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
var state_machine__6188__auto____0 = (function (){var statearr_32519 = [null,null,null,null,null,null,null,null,null,null];(statearr_32519[(0)] = state_machine__6188__auto__);
(statearr_32519[(1)] = (1));
return statearr_32519;
});
var state_machine__6188__auto____1 = (function (state_32504){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_32504);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e32520){if((e32520 instanceof Object))
{var ex__6191__auto__ = e32520;var statearr_32521_32531 = state_32504;(statearr_32521_32531[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32532 = state_32504;
state_32504 = G__32532;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_32504){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_32504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_32522 = f__6203__auto__.call(null);(statearr_32522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_32522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){return cljs.core.map.call(null,(function (p__32535){var vec__32536 = p__32535;var _ = cljs.core.nth.call(null,vec__32536,(0),null);var ___$1 = cljs.core.nth.call(null,vec__32536,(1),null);var high__$1 = cljs.core.nth.call(null,vec__32536,(2),null);var ___$2 = cljs.core.nth.call(null,vec__32536,(3),null);var ___$3 = cljs.core.nth.call(null,vec__32536,(4),null);var ___$4 = cljs.core.nth.call(null,vec__32536,(5),null);return high__$1;
}),kline);
});
stock.tool.low = (function low(kline){return cljs.core.map.call(null,(function (p__32539){var vec__32540 = p__32539;var _ = cljs.core.nth.call(null,vec__32540,(0),null);var ___$1 = cljs.core.nth.call(null,vec__32540,(1),null);var ___$2 = cljs.core.nth.call(null,vec__32540,(2),null);var low__$1 = cljs.core.nth.call(null,vec__32540,(3),null);var ___$3 = cljs.core.nth.call(null,vec__32540,(4),null);var ___$4 = cljs.core.nth.call(null,vec__32540,(5),null);return low__$1;
}),kline);
});
stock.tool.close = (function close(kline){return cljs.core.map.call(null,(function (p__32543){var vec__32544 = p__32543;var _ = cljs.core.nth.call(null,vec__32544,(0),null);var ___$1 = cljs.core.nth.call(null,vec__32544,(1),null);var ___$2 = cljs.core.nth.call(null,vec__32544,(2),null);var ___$3 = cljs.core.nth.call(null,vec__32544,(3),null);var close__$1 = cljs.core.nth.call(null,vec__32544,(4),null);var ___$4 = cljs.core.nth.call(null,vec__32544,(5),null);return close__$1;
}),kline);
});
stock.tool.volume = (function volume(kline){return cljs.core.map.call(null,(function (p__32547){var vec__32548 = p__32547;var _ = cljs.core.nth.call(null,vec__32548,(0),null);var ___$1 = cljs.core.nth.call(null,vec__32548,(1),null);var ___$2 = cljs.core.nth.call(null,vec__32548,(2),null);var ___$3 = cljs.core.nth.call(null,vec__32548,(3),null);var ___$4 = cljs.core.nth.call(null,vec__32548,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__32548,(5),null);return volume__$1;
}),kline);
});
stock.tool.mid = (function mid(kline){return cljs.core.map.call(null,(function (p__32551){var vec__32552 = p__32551;var _ = cljs.core.nth.call(null,vec__32552,(0),null);var ___$1 = cljs.core.nth.call(null,vec__32552,(1),null);var high = cljs.core.nth.call(null,vec__32552,(2),null);var low = cljs.core.nth.call(null,vec__32552,(3),null);var ___$2 = cljs.core.nth.call(null,vec__32552,(4),null);var ___$3 = cljs.core.nth.call(null,vec__32552,(5),null);return ((high - low) / (2));
}),kline);
});
