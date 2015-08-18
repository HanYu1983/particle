// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj15959 = {"url":"/proxy","dataType":"text","data":(function (){var obj15961 = {"url":url};return obj15961;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_15968){var state_val_15969 = (state_15968[(1)]);if((state_val_15969 === (2)))
{var inst_15965 = (state_15968[(2)]);var inst_15966 = cljs.core.async.close_BANG_.call(null,ret);var state_15968__$1 = (function (){var statearr_15970 = state_15968;(statearr_15970[(7)] = inst_15965);
return statearr_15970;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15968__$1,inst_15966);
} else
{if((state_val_15969 === (1)))
{var inst_15962 = [null,data];var inst_15963 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15962,null));var state_15968__$1 = state_15968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15968__$1,(2),ret,inst_15963);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15974 = [null,null,null,null,null,null,null,null];(statearr_15974[(0)] = state_machine__6188__auto__);
(statearr_15974[(1)] = (1));
return statearr_15974;
});
var state_machine__6188__auto____1 = (function (state_15968){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15975){if((e15975 instanceof Object))
{var ex__6191__auto__ = e15975;var statearr_15976_15994 = state_15968;(statearr_15976_15994[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15995 = state_15968;
state_15968 = G__15995;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15968){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_15977 = f__6203__auto__.call(null);(statearr_15977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_15984){var state_val_15985 = (state_15984[(1)]);if((state_val_15985 === (2)))
{var inst_15981 = (state_15984[(2)]);var inst_15982 = cljs.core.async.close_BANG_.call(null,ret);var state_15984__$1 = (function (){var statearr_15986 = state_15984;(statearr_15986[(7)] = inst_15981);
return statearr_15986;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15984__$1,inst_15982);
} else
{if((state_val_15985 === (1)))
{var inst_15978 = [err];var inst_15979 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15978,null));var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15984__$1,(2),ret,inst_15979);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15990 = [null,null,null,null,null,null,null,null];(statearr_15990[(0)] = state_machine__6188__auto__);
(statearr_15990[(1)] = (1));
return statearr_15990;
});
var state_machine__6188__auto____1 = (function (state_15984){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15984);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15991){if((e15991 instanceof Object))
{var ex__6191__auto__ = e15991;var statearr_15992_15996 = state_15984;(statearr_15992_15996[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15997 = state_15984;
state_15984 = G__15997;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15984){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_15993 = f__6203__auto__.call(null);(statearr_15993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj15959;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__16006(s__16007){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__16007__$1 = s__16007;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16007__$1);if(temp__4126__auto__)
{var s__16007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16007__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16007__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16009 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16008 = (0);while(true){
if((i__16008 < size__4275__auto__))
{var vec__16012 = cljs.core._nth.call(null,c__4274__auto__,i__16008);var _ = cljs.core.nth.call(null,vec__16012,(0),null);var date = cljs.core.nth.call(null,vec__16012,(1),null);var open = cljs.core.nth.call(null,vec__16012,(2),null);var high = cljs.core.nth.call(null,vec__16012,(3),null);var low = cljs.core.nth.call(null,vec__16012,(4),null);var close = cljs.core.nth.call(null,vec__16012,(5),null);var volume = cljs.core.nth.call(null,vec__16012,(6),null);cljs.core.chunk_append.call(null,b__16009,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__16014 = (i__16008 + (1));
i__16008 = G__16014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16009),iter__16006.call(null,cljs.core.chunk_rest.call(null,s__16007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16009),null);
}
} else
{var vec__16013 = cljs.core.first.call(null,s__16007__$2);var _ = cljs.core.nth.call(null,vec__16013,(0),null);var date = cljs.core.nth.call(null,vec__16013,(1),null);var open = cljs.core.nth.call(null,vec__16013,(2),null);var high = cljs.core.nth.call(null,vec__16013,(3),null);var low = cljs.core.nth.call(null,vec__16013,(4),null);var close = cljs.core.nth.call(null,vec__16013,(5),null);var volume = cljs.core.nth.call(null,vec__16013,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__16006.call(null,cljs.core.rest.call(null,s__16007__$2)));
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
return (function (state_16092){var state_val_16093 = (state_16092[(1)]);if((state_val_16093 === (9)))
{var inst_16082 = (state_16092[(2)]);var state_16092__$1 = state_16092;var statearr_16094_16111 = state_16092__$1;(statearr_16094_16111[(2)] = inst_16082);
(statearr_16094_16111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16093 === (8)))
{var inst_16088 = (state_16092[(2)]);var state_16092__$1 = state_16092;var statearr_16095_16112 = state_16092__$1;(statearr_16095_16112[(2)] = inst_16088);
(statearr_16095_16112[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16093 === (7)))
{var inst_16074 = (state_16092[(7)]);var inst_16084 = cljs.core.concat.call(null,all,inst_16074);var inst_16085 = [null,inst_16084];var inst_16086 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16085,null));var state_16092__$1 = state_16092;var statearr_16096_16113 = state_16092__$1;(statearr_16096_16113[(2)] = inst_16086);
(statearr_16096_16113[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16093 === (6)))
{var inst_16074 = (state_16092[(7)]);var inst_16078 = cljs.core.concat.call(null,all,inst_16074);var inst_16079 = (start + num);var inst_16080 = stock_info.call(null,inst_16078,id,startdate,inst_16079,num);var state_16092__$1 = state_16092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16092__$1,(9),inst_16080);
} else
{if((state_val_16093 === (5)))
{var inst_16090 = (state_16092[(2)]);var state_16092__$1 = state_16092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16092__$1,inst_16090);
} else
{if((state_val_16093 === (4)))
{var inst_16074 = (state_16092[(7)]);var inst_16069 = (state_16092[(8)]);var inst_16074__$1 = stock.tool.parse_info.call(null,inst_16069);var inst_16075 = cljs.core.count.call(null,inst_16074__$1);var inst_16076 = cljs.core._EQ_.call(null,num,inst_16075);var state_16092__$1 = (function (){var statearr_16097 = state_16092;(statearr_16097[(7)] = inst_16074__$1);
return statearr_16097;
})();if(inst_16076)
{var statearr_16098_16114 = state_16092__$1;(statearr_16098_16114[(1)] = (6));
} else
{var statearr_16099_16115 = state_16092__$1;(statearr_16099_16115[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16093 === (3)))
{var inst_16068 = (state_16092[(9)]);var inst_16071 = [inst_16068];var inst_16072 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16071,null));var state_16092__$1 = state_16092;var statearr_16100_16116 = state_16092__$1;(statearr_16100_16116[(2)] = inst_16072);
(statearr_16100_16116[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16093 === (2)))
{var inst_16068 = (state_16092[(9)]);var inst_16067 = (state_16092[(2)]);var inst_16068__$1 = cljs.core.nth.call(null,inst_16067,(0),null);var inst_16069 = cljs.core.nth.call(null,inst_16067,(1),null);var state_16092__$1 = (function (){var statearr_16101 = state_16092;(statearr_16101[(9)] = inst_16068__$1);
(statearr_16101[(8)] = inst_16069);
return statearr_16101;
})();if(cljs.core.truth_(inst_16068__$1))
{var statearr_16102_16117 = state_16092__$1;(statearr_16102_16117[(1)] = (3));
} else
{var statearr_16103_16118 = state_16092__$1;(statearr_16103_16118[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16093 === (1)))
{var inst_16064 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_16065 = stock.tool.content.call(null,inst_16064);var state_16092__$1 = state_16092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16092__$1,(2),inst_16065);
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
var state_machine__6188__auto____0 = (function (){var statearr_16107 = [null,null,null,null,null,null,null,null,null,null];(statearr_16107[(0)] = state_machine__6188__auto__);
(statearr_16107[(1)] = (1));
return statearr_16107;
});
var state_machine__6188__auto____1 = (function (state_16092){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16108){if((e16108 instanceof Object))
{var ex__6191__auto__ = e16108;var statearr_16109_16119 = state_16092;(statearr_16109_16119[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16120 = state_16092;
state_16092 = G__16120;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16092){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_16110 = f__6203__auto__.call(null);(statearr_16110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_16110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__16122 = kline;var _ = cljs.core.nth.call(null,vec__16122,(0),null);var ___$1 = cljs.core.nth.call(null,vec__16122,(1),null);var high__$1 = cljs.core.nth.call(null,vec__16122,(2),null);var ___$2 = cljs.core.nth.call(null,vec__16122,(3),null);var ___$3 = cljs.core.nth.call(null,vec__16122,(4),null);var ___$4 = cljs.core.nth.call(null,vec__16122,(5),null);return high__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__16124 = kline;var _ = cljs.core.nth.call(null,vec__16124,(0),null);var ___$1 = cljs.core.nth.call(null,vec__16124,(1),null);var ___$2 = cljs.core.nth.call(null,vec__16124,(2),null);var ___$3 = cljs.core.nth.call(null,vec__16124,(3),null);var close__$1 = cljs.core.nth.call(null,vec__16124,(4),null);var ___$4 = cljs.core.nth.call(null,vec__16124,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__16126 = kline;var _ = cljs.core.nth.call(null,vec__16126,(0),null);var ___$1 = cljs.core.nth.call(null,vec__16126,(1),null);var ___$2 = cljs.core.nth.call(null,vec__16126,(2),null);var low__$1 = cljs.core.nth.call(null,vec__16126,(3),null);var ___$3 = cljs.core.nth.call(null,vec__16126,(4),null);var ___$4 = cljs.core.nth.call(null,vec__16126,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){return cljs.core.map.call(null,(function (p__16129){var vec__16130 = p__16129;var _ = cljs.core.nth.call(null,vec__16130,(0),null);var ___$1 = cljs.core.nth.call(null,vec__16130,(1),null);var ___$2 = cljs.core.nth.call(null,vec__16130,(2),null);var ___$3 = cljs.core.nth.call(null,vec__16130,(3),null);var ___$4 = cljs.core.nth.call(null,vec__16130,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__16130,(5),null);return volume__$1;
}),kline);
});
stock.tool.mid = (function mid(kline){return cljs.core.map.call(null,(function (p__16133){var vec__16134 = p__16133;var _ = cljs.core.nth.call(null,vec__16134,(0),null);var ___$1 = cljs.core.nth.call(null,vec__16134,(1),null);var high = cljs.core.nth.call(null,vec__16134,(2),null);var low = cljs.core.nth.call(null,vec__16134,(3),null);var ___$2 = cljs.core.nth.call(null,vec__16134,(4),null);var ___$3 = cljs.core.nth.call(null,vec__16134,(5),null);return ((high - low) / (2));
}),kline);
});
