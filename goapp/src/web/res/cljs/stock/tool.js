// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj44568 = {"url":"/proxy","dataType":"text","data":(function (){var obj44570 = {"url":url};return obj44570;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_44577){var state_val_44578 = (state_44577[(1)]);if((state_val_44578 === (2)))
{var inst_44574 = (state_44577[(2)]);var inst_44575 = cljs.core.async.close_BANG_.call(null,ret);var state_44577__$1 = (function (){var statearr_44579 = state_44577;(statearr_44579[(7)] = inst_44574);
return statearr_44579;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44577__$1,inst_44575);
} else
{if((state_val_44578 === (1)))
{var inst_44571 = [null,data];var inst_44572 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44571,null));var state_44577__$1 = state_44577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44577__$1,(2),ret,inst_44572);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44583 = [null,null,null,null,null,null,null,null];(statearr_44583[(0)] = state_machine__6188__auto__);
(statearr_44583[(1)] = (1));
return statearr_44583;
});
var state_machine__6188__auto____1 = (function (state_44577){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44577);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44584){if((e44584 instanceof Object))
{var ex__6191__auto__ = e44584;var statearr_44585_44603 = state_44577;(statearr_44585_44603[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44604 = state_44577;
state_44577 = G__44604;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44577){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_44586 = f__6203__auto__.call(null);(statearr_44586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_44593){var state_val_44594 = (state_44593[(1)]);if((state_val_44594 === (2)))
{var inst_44590 = (state_44593[(2)]);var inst_44591 = cljs.core.async.close_BANG_.call(null,ret);var state_44593__$1 = (function (){var statearr_44595 = state_44593;(statearr_44595[(7)] = inst_44590);
return statearr_44595;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44593__$1,inst_44591);
} else
{if((state_val_44594 === (1)))
{var inst_44587 = [err];var inst_44588 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44587,null));var state_44593__$1 = state_44593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44593__$1,(2),ret,inst_44588);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44599 = [null,null,null,null,null,null,null,null];(statearr_44599[(0)] = state_machine__6188__auto__);
(statearr_44599[(1)] = (1));
return statearr_44599;
});
var state_machine__6188__auto____1 = (function (state_44593){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44600){if((e44600 instanceof Object))
{var ex__6191__auto__ = e44600;var statearr_44601_44605 = state_44593;(statearr_44601_44605[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44606 = state_44593;
state_44593 = G__44606;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44593){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_44602 = f__6203__auto__.call(null);(statearr_44602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj44568;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__44615(s__44616){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__44616__$1 = s__44616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44616__$1);if(temp__4126__auto__)
{var s__44616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44616__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__44616__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__44618 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__44617 = (0);while(true){
if((i__44617 < size__4275__auto__))
{var vec__44621 = cljs.core._nth.call(null,c__4274__auto__,i__44617);var _ = cljs.core.nth.call(null,vec__44621,(0),null);var date = cljs.core.nth.call(null,vec__44621,(1),null);var open = cljs.core.nth.call(null,vec__44621,(2),null);var high = cljs.core.nth.call(null,vec__44621,(3),null);var low = cljs.core.nth.call(null,vec__44621,(4),null);var close = cljs.core.nth.call(null,vec__44621,(5),null);var volume = cljs.core.nth.call(null,vec__44621,(6),null);cljs.core.chunk_append.call(null,b__44618,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__44623 = (i__44617 + (1));
i__44617 = G__44623;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44618),iter__44615.call(null,cljs.core.chunk_rest.call(null,s__44616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44618),null);
}
} else
{var vec__44622 = cljs.core.first.call(null,s__44616__$2);var _ = cljs.core.nth.call(null,vec__44622,(0),null);var date = cljs.core.nth.call(null,vec__44622,(1),null);var open = cljs.core.nth.call(null,vec__44622,(2),null);var high = cljs.core.nth.call(null,vec__44622,(3),null);var low = cljs.core.nth.call(null,vec__44622,(4),null);var close = cljs.core.nth.call(null,vec__44622,(5),null);var volume = cljs.core.nth.call(null,vec__44622,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__44615.call(null,cljs.core.rest.call(null,s__44616__$2)));
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
return (function (state_44701){var state_val_44702 = (state_44701[(1)]);if((state_val_44702 === (9)))
{var inst_44691 = (state_44701[(2)]);var state_44701__$1 = state_44701;var statearr_44703_44720 = state_44701__$1;(statearr_44703_44720[(2)] = inst_44691);
(statearr_44703_44720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44702 === (8)))
{var inst_44697 = (state_44701[(2)]);var state_44701__$1 = state_44701;var statearr_44704_44721 = state_44701__$1;(statearr_44704_44721[(2)] = inst_44697);
(statearr_44704_44721[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44702 === (7)))
{var inst_44683 = (state_44701[(7)]);var inst_44693 = cljs.core.concat.call(null,all,inst_44683);var inst_44694 = [null,inst_44693];var inst_44695 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44694,null));var state_44701__$1 = state_44701;var statearr_44705_44722 = state_44701__$1;(statearr_44705_44722[(2)] = inst_44695);
(statearr_44705_44722[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44702 === (6)))
{var inst_44683 = (state_44701[(7)]);var inst_44687 = cljs.core.concat.call(null,all,inst_44683);var inst_44688 = (start + num);var inst_44689 = stock_info.call(null,inst_44687,id,startdate,inst_44688,num);var state_44701__$1 = state_44701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44701__$1,(9),inst_44689);
} else
{if((state_val_44702 === (5)))
{var inst_44699 = (state_44701[(2)]);var state_44701__$1 = state_44701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44701__$1,inst_44699);
} else
{if((state_val_44702 === (4)))
{var inst_44683 = (state_44701[(7)]);var inst_44678 = (state_44701[(8)]);var inst_44683__$1 = stock.tool.parse_info.call(null,inst_44678);var inst_44684 = cljs.core.count.call(null,inst_44683__$1);var inst_44685 = cljs.core._EQ_.call(null,num,inst_44684);var state_44701__$1 = (function (){var statearr_44706 = state_44701;(statearr_44706[(7)] = inst_44683__$1);
return statearr_44706;
})();if(inst_44685)
{var statearr_44707_44723 = state_44701__$1;(statearr_44707_44723[(1)] = (6));
} else
{var statearr_44708_44724 = state_44701__$1;(statearr_44708_44724[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44702 === (3)))
{var inst_44677 = (state_44701[(9)]);var inst_44680 = [inst_44677];var inst_44681 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44680,null));var state_44701__$1 = state_44701;var statearr_44709_44725 = state_44701__$1;(statearr_44709_44725[(2)] = inst_44681);
(statearr_44709_44725[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44702 === (2)))
{var inst_44677 = (state_44701[(9)]);var inst_44676 = (state_44701[(2)]);var inst_44677__$1 = cljs.core.nth.call(null,inst_44676,(0),null);var inst_44678 = cljs.core.nth.call(null,inst_44676,(1),null);var state_44701__$1 = (function (){var statearr_44710 = state_44701;(statearr_44710[(9)] = inst_44677__$1);
(statearr_44710[(8)] = inst_44678);
return statearr_44710;
})();if(cljs.core.truth_(inst_44677__$1))
{var statearr_44711_44726 = state_44701__$1;(statearr_44711_44726[(1)] = (3));
} else
{var statearr_44712_44727 = state_44701__$1;(statearr_44712_44727[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44702 === (1)))
{var inst_44673 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_44674 = stock.tool.content.call(null,inst_44673);var state_44701__$1 = state_44701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44701__$1,(2),inst_44674);
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
var state_machine__6188__auto____0 = (function (){var statearr_44716 = [null,null,null,null,null,null,null,null,null,null];(statearr_44716[(0)] = state_machine__6188__auto__);
(statearr_44716[(1)] = (1));
return statearr_44716;
});
var state_machine__6188__auto____1 = (function (state_44701){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44717){if((e44717 instanceof Object))
{var ex__6191__auto__ = e44717;var statearr_44718_44728 = state_44701;(statearr_44718_44728[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44729 = state_44701;
state_44701 = G__44729;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44701){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_44719 = f__6203__auto__.call(null);(statearr_44719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__44731 = kline;var _ = cljs.core.nth.call(null,vec__44731,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44731,(1),null);var high__$1 = cljs.core.nth.call(null,vec__44731,(2),null);var ___$2 = cljs.core.nth.call(null,vec__44731,(3),null);var ___$3 = cljs.core.nth.call(null,vec__44731,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44731,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__44733 = kline;var _ = cljs.core.nth.call(null,vec__44733,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44733,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44733,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44733,(3),null);var open__$1 = cljs.core.nth.call(null,vec__44733,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44733,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__44735 = kline;var _ = cljs.core.nth.call(null,vec__44735,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44735,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44735,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44735,(3),null);var close__$1 = cljs.core.nth.call(null,vec__44735,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44735,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__44737 = kline;var _ = cljs.core.nth.call(null,vec__44737,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44737,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44737,(2),null);var low__$1 = cljs.core.nth.call(null,vec__44737,(3),null);var ___$3 = cljs.core.nth.call(null,vec__44737,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44737,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__44739 = kline;var _ = cljs.core.nth.call(null,vec__44739,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44739,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44739,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44739,(3),null);var ___$4 = cljs.core.nth.call(null,vec__44739,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__44739,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__44741 = kline;var _ = cljs.core.nth.call(null,vec__44741,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44741,(1),null);var high = cljs.core.nth.call(null,vec__44741,(2),null);var low = cljs.core.nth.call(null,vec__44741,(3),null);var close = cljs.core.nth.call(null,vec__44741,(4),null);var ___$2 = cljs.core.nth.call(null,vec__44741,(5),null);return (((high + low) + close) / (3));
}
});
