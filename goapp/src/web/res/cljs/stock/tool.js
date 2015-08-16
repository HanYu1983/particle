// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj22843 = {"url":"/proxy","dataType":"text","data":(function (){var obj22845 = {"url":url};return obj22845;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_22852){var state_val_22853 = (state_22852[(1)]);if((state_val_22853 === (2)))
{var inst_22849 = (state_22852[(2)]);var inst_22850 = cljs.core.async.close_BANG_.call(null,ret);var state_22852__$1 = (function (){var statearr_22854 = state_22852;(statearr_22854[(7)] = inst_22849);
return statearr_22854;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22852__$1,inst_22850);
} else
{if((state_val_22853 === (1)))
{var inst_22846 = [null,data];var inst_22847 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22846,null));var state_22852__$1 = state_22852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22852__$1,(2),ret,inst_22847);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22858 = [null,null,null,null,null,null,null,null];(statearr_22858[(0)] = state_machine__6188__auto__);
(statearr_22858[(1)] = (1));
return statearr_22858;
});
var state_machine__6188__auto____1 = (function (state_22852){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22852);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22859){if((e22859 instanceof Object))
{var ex__6191__auto__ = e22859;var statearr_22860_22878 = state_22852;(statearr_22860_22878[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22879 = state_22852;
state_22852 = G__22879;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22852){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_22861 = f__6203__auto__.call(null);(statearr_22861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_22868){var state_val_22869 = (state_22868[(1)]);if((state_val_22869 === (2)))
{var inst_22865 = (state_22868[(2)]);var inst_22866 = cljs.core.async.close_BANG_.call(null,ret);var state_22868__$1 = (function (){var statearr_22870 = state_22868;(statearr_22870[(7)] = inst_22865);
return statearr_22870;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22868__$1,inst_22866);
} else
{if((state_val_22869 === (1)))
{var inst_22862 = [err];var inst_22863 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22862,null));var state_22868__$1 = state_22868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22868__$1,(2),ret,inst_22863);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22874 = [null,null,null,null,null,null,null,null];(statearr_22874[(0)] = state_machine__6188__auto__);
(statearr_22874[(1)] = (1));
return statearr_22874;
});
var state_machine__6188__auto____1 = (function (state_22868){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22868);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22875){if((e22875 instanceof Object))
{var ex__6191__auto__ = e22875;var statearr_22876_22880 = state_22868;(statearr_22876_22880[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22881 = state_22868;
state_22868 = G__22881;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22868){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_22877 = f__6203__auto__.call(null);(statearr_22877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj22843;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__22890(s__22891){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__22891__$1 = s__22891;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22891__$1);if(temp__4126__auto__)
{var s__22891__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22891__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22891__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22893 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22892 = (0);while(true){
if((i__22892 < size__4275__auto__))
{var vec__22896 = cljs.core._nth.call(null,c__4274__auto__,i__22892);var _ = cljs.core.nth.call(null,vec__22896,(0),null);var date = cljs.core.nth.call(null,vec__22896,(1),null);var open = cljs.core.nth.call(null,vec__22896,(2),null);var high = cljs.core.nth.call(null,vec__22896,(3),null);var low = cljs.core.nth.call(null,vec__22896,(4),null);var close = cljs.core.nth.call(null,vec__22896,(5),null);var volume = cljs.core.nth.call(null,vec__22896,(6),null);cljs.core.chunk_append.call(null,b__22893,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__22898 = (i__22892 + (1));
i__22892 = G__22898;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22893),iter__22890.call(null,cljs.core.chunk_rest.call(null,s__22891__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22893),null);
}
} else
{var vec__22897 = cljs.core.first.call(null,s__22891__$2);var _ = cljs.core.nth.call(null,vec__22897,(0),null);var date = cljs.core.nth.call(null,vec__22897,(1),null);var open = cljs.core.nth.call(null,vec__22897,(2),null);var high = cljs.core.nth.call(null,vec__22897,(3),null);var low = cljs.core.nth.call(null,vec__22897,(4),null);var close = cljs.core.nth.call(null,vec__22897,(5),null);var volume = cljs.core.nth.call(null,vec__22897,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__22890.call(null,cljs.core.rest.call(null,s__22891__$2)));
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
return (function (state_22976){var state_val_22977 = (state_22976[(1)]);if((state_val_22977 === (9)))
{var inst_22966 = (state_22976[(2)]);var state_22976__$1 = state_22976;var statearr_22978_22995 = state_22976__$1;(statearr_22978_22995[(2)] = inst_22966);
(statearr_22978_22995[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22977 === (8)))
{var inst_22972 = (state_22976[(2)]);var state_22976__$1 = state_22976;var statearr_22979_22996 = state_22976__$1;(statearr_22979_22996[(2)] = inst_22972);
(statearr_22979_22996[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22977 === (7)))
{var inst_22958 = (state_22976[(7)]);var inst_22968 = cljs.core.concat.call(null,all,inst_22958);var inst_22969 = [null,inst_22968];var inst_22970 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22969,null));var state_22976__$1 = state_22976;var statearr_22980_22997 = state_22976__$1;(statearr_22980_22997[(2)] = inst_22970);
(statearr_22980_22997[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22977 === (6)))
{var inst_22958 = (state_22976[(7)]);var inst_22962 = cljs.core.concat.call(null,all,inst_22958);var inst_22963 = (start + num);var inst_22964 = stock_info.call(null,inst_22962,id,startdate,inst_22963,num);var state_22976__$1 = state_22976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22976__$1,(9),inst_22964);
} else
{if((state_val_22977 === (5)))
{var inst_22974 = (state_22976[(2)]);var state_22976__$1 = state_22976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22976__$1,inst_22974);
} else
{if((state_val_22977 === (4)))
{var inst_22958 = (state_22976[(7)]);var inst_22953 = (state_22976[(8)]);var inst_22958__$1 = stock.tool.parse_info.call(null,inst_22953);var inst_22959 = cljs.core.count.call(null,inst_22958__$1);var inst_22960 = cljs.core._EQ_.call(null,num,inst_22959);var state_22976__$1 = (function (){var statearr_22981 = state_22976;(statearr_22981[(7)] = inst_22958__$1);
return statearr_22981;
})();if(inst_22960)
{var statearr_22982_22998 = state_22976__$1;(statearr_22982_22998[(1)] = (6));
} else
{var statearr_22983_22999 = state_22976__$1;(statearr_22983_22999[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22977 === (3)))
{var inst_22952 = (state_22976[(9)]);var inst_22955 = [inst_22952];var inst_22956 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22955,null));var state_22976__$1 = state_22976;var statearr_22984_23000 = state_22976__$1;(statearr_22984_23000[(2)] = inst_22956);
(statearr_22984_23000[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22977 === (2)))
{var inst_22952 = (state_22976[(9)]);var inst_22951 = (state_22976[(2)]);var inst_22952__$1 = cljs.core.nth.call(null,inst_22951,(0),null);var inst_22953 = cljs.core.nth.call(null,inst_22951,(1),null);var state_22976__$1 = (function (){var statearr_22985 = state_22976;(statearr_22985[(9)] = inst_22952__$1);
(statearr_22985[(8)] = inst_22953);
return statearr_22985;
})();if(cljs.core.truth_(inst_22952__$1))
{var statearr_22986_23001 = state_22976__$1;(statearr_22986_23001[(1)] = (3));
} else
{var statearr_22987_23002 = state_22976__$1;(statearr_22987_23002[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22977 === (1)))
{var inst_22948 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_22949 = stock.tool.content.call(null,inst_22948);var state_22976__$1 = state_22976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22976__$1,(2),inst_22949);
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
var state_machine__6188__auto____0 = (function (){var statearr_22991 = [null,null,null,null,null,null,null,null,null,null];(statearr_22991[(0)] = state_machine__6188__auto__);
(statearr_22991[(1)] = (1));
return statearr_22991;
});
var state_machine__6188__auto____1 = (function (state_22976){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22976);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22992){if((e22992 instanceof Object))
{var ex__6191__auto__ = e22992;var statearr_22993_23003 = state_22976;(statearr_22993_23003[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23004 = state_22976;
state_22976 = G__23004;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22994 = f__6203__auto__.call(null);(statearr_22994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__23006 = kline;var _ = cljs.core.nth.call(null,vec__23006,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23006,(1),null);var high__$1 = cljs.core.nth.call(null,vec__23006,(2),null);var ___$2 = cljs.core.nth.call(null,vec__23006,(3),null);var ___$3 = cljs.core.nth.call(null,vec__23006,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23006,(5),null);return high__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__23008 = kline;var _ = cljs.core.nth.call(null,vec__23008,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23008,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23008,(2),null);var ___$3 = cljs.core.nth.call(null,vec__23008,(3),null);var close__$1 = cljs.core.nth.call(null,vec__23008,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23008,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__23010 = kline;var _ = cljs.core.nth.call(null,vec__23010,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23010,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23010,(2),null);var low__$1 = cljs.core.nth.call(null,vec__23010,(3),null);var ___$3 = cljs.core.nth.call(null,vec__23010,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23010,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__23012 = kline;var _ = cljs.core.nth.call(null,vec__23012,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23012,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23012,(2),null);var ___$3 = cljs.core.nth.call(null,vec__23012,(3),null);var ___$4 = cljs.core.nth.call(null,vec__23012,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__23012,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__23014 = kline;var _ = cljs.core.nth.call(null,vec__23014,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23014,(1),null);var high = cljs.core.nth.call(null,vec__23014,(2),null);var low = cljs.core.nth.call(null,vec__23014,(3),null);var ___$2 = cljs.core.nth.call(null,vec__23014,(4),null);var ___$3 = cljs.core.nth.call(null,vec__23014,(5),null);return ((high - low) / (2));
}
});
