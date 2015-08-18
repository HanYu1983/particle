// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj10917 = {"url":"/proxy","dataType":"text","data":(function (){var obj10919 = {"url":url};return obj10919;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_10926){var state_val_10927 = (state_10926[(1)]);if((state_val_10927 === (2)))
{var inst_10923 = (state_10926[(2)]);var inst_10924 = cljs.core.async.close_BANG_.call(null,ret);var state_10926__$1 = (function (){var statearr_10928 = state_10926;(statearr_10928[(7)] = inst_10923);
return statearr_10928;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10926__$1,inst_10924);
} else
{if((state_val_10927 === (1)))
{var inst_10920 = [null,data];var inst_10921 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10920,null));var state_10926__$1 = state_10926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10926__$1,(2),ret,inst_10921);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10932 = [null,null,null,null,null,null,null,null];(statearr_10932[(0)] = state_machine__6188__auto__);
(statearr_10932[(1)] = (1));
return statearr_10932;
});
var state_machine__6188__auto____1 = (function (state_10926){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10926);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10933){if((e10933 instanceof Object))
{var ex__6191__auto__ = e10933;var statearr_10934_10952 = state_10926;(statearr_10934_10952[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10926);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10953 = state_10926;
state_10926 = G__10953;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10926){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_10935 = f__6203__auto__.call(null);(statearr_10935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_10942){var state_val_10943 = (state_10942[(1)]);if((state_val_10943 === (2)))
{var inst_10939 = (state_10942[(2)]);var inst_10940 = cljs.core.async.close_BANG_.call(null,ret);var state_10942__$1 = (function (){var statearr_10944 = state_10942;(statearr_10944[(7)] = inst_10939);
return statearr_10944;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10942__$1,inst_10940);
} else
{if((state_val_10943 === (1)))
{var inst_10936 = [err];var inst_10937 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10936,null));var state_10942__$1 = state_10942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10942__$1,(2),ret,inst_10937);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10948 = [null,null,null,null,null,null,null,null];(statearr_10948[(0)] = state_machine__6188__auto__);
(statearr_10948[(1)] = (1));
return statearr_10948;
});
var state_machine__6188__auto____1 = (function (state_10942){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10949){if((e10949 instanceof Object))
{var ex__6191__auto__ = e10949;var statearr_10950_10954 = state_10942;(statearr_10950_10954[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10955 = state_10942;
state_10942 = G__10955;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10942){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_10951 = f__6203__auto__.call(null);(statearr_10951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj10917;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__10964(s__10965){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__10965__$1 = s__10965;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10965__$1);if(temp__4126__auto__)
{var s__10965__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10965__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10965__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10967 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10966 = (0);while(true){
if((i__10966 < size__4275__auto__))
{var vec__10970 = cljs.core._nth.call(null,c__4274__auto__,i__10966);var _ = cljs.core.nth.call(null,vec__10970,(0),null);var date = cljs.core.nth.call(null,vec__10970,(1),null);var open = cljs.core.nth.call(null,vec__10970,(2),null);var high = cljs.core.nth.call(null,vec__10970,(3),null);var low = cljs.core.nth.call(null,vec__10970,(4),null);var close = cljs.core.nth.call(null,vec__10970,(5),null);var volume = cljs.core.nth.call(null,vec__10970,(6),null);cljs.core.chunk_append.call(null,b__10967,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__10972 = (i__10966 + (1));
i__10966 = G__10972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10967),iter__10964.call(null,cljs.core.chunk_rest.call(null,s__10965__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10967),null);
}
} else
{var vec__10971 = cljs.core.first.call(null,s__10965__$2);var _ = cljs.core.nth.call(null,vec__10971,(0),null);var date = cljs.core.nth.call(null,vec__10971,(1),null);var open = cljs.core.nth.call(null,vec__10971,(2),null);var high = cljs.core.nth.call(null,vec__10971,(3),null);var low = cljs.core.nth.call(null,vec__10971,(4),null);var close = cljs.core.nth.call(null,vec__10971,(5),null);var volume = cljs.core.nth.call(null,vec__10971,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__10964.call(null,cljs.core.rest.call(null,s__10965__$2)));
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
return (function (state_11050){var state_val_11051 = (state_11050[(1)]);if((state_val_11051 === (9)))
{var inst_11040 = (state_11050[(2)]);var state_11050__$1 = state_11050;var statearr_11052_11069 = state_11050__$1;(statearr_11052_11069[(2)] = inst_11040);
(statearr_11052_11069[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11051 === (8)))
{var inst_11046 = (state_11050[(2)]);var state_11050__$1 = state_11050;var statearr_11053_11070 = state_11050__$1;(statearr_11053_11070[(2)] = inst_11046);
(statearr_11053_11070[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11051 === (7)))
{var inst_11032 = (state_11050[(7)]);var inst_11042 = cljs.core.concat.call(null,all,inst_11032);var inst_11043 = [null,inst_11042];var inst_11044 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11043,null));var state_11050__$1 = state_11050;var statearr_11054_11071 = state_11050__$1;(statearr_11054_11071[(2)] = inst_11044);
(statearr_11054_11071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11051 === (6)))
{var inst_11032 = (state_11050[(7)]);var inst_11036 = cljs.core.concat.call(null,all,inst_11032);var inst_11037 = (start + num);var inst_11038 = stock_info.call(null,inst_11036,id,startdate,inst_11037,num);var state_11050__$1 = state_11050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11050__$1,(9),inst_11038);
} else
{if((state_val_11051 === (5)))
{var inst_11048 = (state_11050[(2)]);var state_11050__$1 = state_11050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11050__$1,inst_11048);
} else
{if((state_val_11051 === (4)))
{var inst_11032 = (state_11050[(7)]);var inst_11027 = (state_11050[(8)]);var inst_11032__$1 = stock.tool.parse_info.call(null,inst_11027);var inst_11033 = cljs.core.count.call(null,inst_11032__$1);var inst_11034 = cljs.core._EQ_.call(null,num,inst_11033);var state_11050__$1 = (function (){var statearr_11055 = state_11050;(statearr_11055[(7)] = inst_11032__$1);
return statearr_11055;
})();if(inst_11034)
{var statearr_11056_11072 = state_11050__$1;(statearr_11056_11072[(1)] = (6));
} else
{var statearr_11057_11073 = state_11050__$1;(statearr_11057_11073[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11051 === (3)))
{var inst_11026 = (state_11050[(9)]);var inst_11029 = [inst_11026];var inst_11030 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11029,null));var state_11050__$1 = state_11050;var statearr_11058_11074 = state_11050__$1;(statearr_11058_11074[(2)] = inst_11030);
(statearr_11058_11074[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11051 === (2)))
{var inst_11026 = (state_11050[(9)]);var inst_11025 = (state_11050[(2)]);var inst_11026__$1 = cljs.core.nth.call(null,inst_11025,(0),null);var inst_11027 = cljs.core.nth.call(null,inst_11025,(1),null);var state_11050__$1 = (function (){var statearr_11059 = state_11050;(statearr_11059[(8)] = inst_11027);
(statearr_11059[(9)] = inst_11026__$1);
return statearr_11059;
})();if(cljs.core.truth_(inst_11026__$1))
{var statearr_11060_11075 = state_11050__$1;(statearr_11060_11075[(1)] = (3));
} else
{var statearr_11061_11076 = state_11050__$1;(statearr_11061_11076[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11051 === (1)))
{var inst_11022 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_11023 = stock.tool.content.call(null,inst_11022);var state_11050__$1 = state_11050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11050__$1,(2),inst_11023);
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
var state_machine__6188__auto____0 = (function (){var statearr_11065 = [null,null,null,null,null,null,null,null,null,null];(statearr_11065[(0)] = state_machine__6188__auto__);
(statearr_11065[(1)] = (1));
return statearr_11065;
});
var state_machine__6188__auto____1 = (function (state_11050){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11050);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11066){if((e11066 instanceof Object))
{var ex__6191__auto__ = e11066;var statearr_11067_11077 = state_11050;(statearr_11067_11077[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11078 = state_11050;
state_11050 = G__11078;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11050){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_11068 = f__6203__auto__.call(null);(statearr_11068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_11068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__11080 = kline;var _ = cljs.core.nth.call(null,vec__11080,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11080,(1),null);var high__$1 = cljs.core.nth.call(null,vec__11080,(2),null);var ___$2 = cljs.core.nth.call(null,vec__11080,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11080,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11080,(5),null);return high__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__11082 = kline;var _ = cljs.core.nth.call(null,vec__11082,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11082,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11082,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11082,(3),null);var close__$1 = cljs.core.nth.call(null,vec__11082,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11082,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__11084 = kline;var _ = cljs.core.nth.call(null,vec__11084,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11084,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11084,(2),null);var low__$1 = cljs.core.nth.call(null,vec__11084,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11084,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11084,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__11086 = kline;var _ = cljs.core.nth.call(null,vec__11086,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11086,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11086,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11086,(3),null);var ___$4 = cljs.core.nth.call(null,vec__11086,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__11086,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__11088 = kline;var _ = cljs.core.nth.call(null,vec__11088,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11088,(1),null);var high = cljs.core.nth.call(null,vec__11088,(2),null);var low = cljs.core.nth.call(null,vec__11088,(3),null);var ___$2 = cljs.core.nth.call(null,vec__11088,(4),null);var ___$3 = cljs.core.nth.call(null,vec__11088,(5),null);return ((high + low) / (2));
}
});
