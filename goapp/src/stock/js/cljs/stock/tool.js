// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj11001 = {"url":"/proxy","dataType":"text","data":(function (){var obj11003 = {"url":url};return obj11003;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_11010){var state_val_11011 = (state_11010[(1)]);if((state_val_11011 === (2)))
{var inst_11007 = (state_11010[(2)]);var inst_11008 = cljs.core.async.close_BANG_.call(null,ret);var state_11010__$1 = (function (){var statearr_11012 = state_11010;(statearr_11012[(7)] = inst_11007);
return statearr_11012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11010__$1,inst_11008);
} else
{if((state_val_11011 === (1)))
{var inst_11004 = [null,data];var inst_11005 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11004,null));var state_11010__$1 = state_11010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11010__$1,(2),ret,inst_11005);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11016 = [null,null,null,null,null,null,null,null];(statearr_11016[(0)] = state_machine__6189__auto__);
(statearr_11016[(1)] = (1));
return statearr_11016;
});
var state_machine__6189__auto____1 = (function (state_11010){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11010);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11017){if((e11017 instanceof Object))
{var ex__6192__auto__ = e11017;var statearr_11018_11036 = state_11010;(statearr_11018_11036[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11037 = state_11010;
state_11010 = G__11037;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11010){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_11019 = f__6204__auto__.call(null);(statearr_11019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_11026){var state_val_11027 = (state_11026[(1)]);if((state_val_11027 === (2)))
{var inst_11023 = (state_11026[(2)]);var inst_11024 = cljs.core.async.close_BANG_.call(null,ret);var state_11026__$1 = (function (){var statearr_11028 = state_11026;(statearr_11028[(7)] = inst_11023);
return statearr_11028;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11026__$1,inst_11024);
} else
{if((state_val_11027 === (1)))
{var inst_11020 = [err];var inst_11021 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11020,null));var state_11026__$1 = state_11026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11026__$1,(2),ret,inst_11021);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11032 = [null,null,null,null,null,null,null,null];(statearr_11032[(0)] = state_machine__6189__auto__);
(statearr_11032[(1)] = (1));
return statearr_11032;
});
var state_machine__6189__auto____1 = (function (state_11026){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11033){if((e11033 instanceof Object))
{var ex__6192__auto__ = e11033;var statearr_11034_11038 = state_11026;(statearr_11034_11038[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11039 = state_11026;
state_11026 = G__11039;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11026){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_11035 = f__6204__auto__.call(null);(statearr_11035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj11001;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__11048(s__11049){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__11049__$1 = s__11049;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11049__$1);if(temp__4126__auto__)
{var s__11049__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11049__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11049__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11051 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11050 = (0);while(true){
if((i__11050 < size__4275__auto__))
{var vec__11054 = cljs.core._nth.call(null,c__4274__auto__,i__11050);var _ = cljs.core.nth.call(null,vec__11054,(0),null);var date = cljs.core.nth.call(null,vec__11054,(1),null);var open = cljs.core.nth.call(null,vec__11054,(2),null);var high = cljs.core.nth.call(null,vec__11054,(3),null);var low = cljs.core.nth.call(null,vec__11054,(4),null);var close = cljs.core.nth.call(null,vec__11054,(5),null);var volume = cljs.core.nth.call(null,vec__11054,(6),null);cljs.core.chunk_append.call(null,b__11051,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__11056 = (i__11050 + (1));
i__11050 = G__11056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11051),iter__11048.call(null,cljs.core.chunk_rest.call(null,s__11049__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11051),null);
}
} else
{var vec__11055 = cljs.core.first.call(null,s__11049__$2);var _ = cljs.core.nth.call(null,vec__11055,(0),null);var date = cljs.core.nth.call(null,vec__11055,(1),null);var open = cljs.core.nth.call(null,vec__11055,(2),null);var high = cljs.core.nth.call(null,vec__11055,(3),null);var low = cljs.core.nth.call(null,vec__11055,(4),null);var close = cljs.core.nth.call(null,vec__11055,(5),null);var volume = cljs.core.nth.call(null,vec__11055,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__11048.call(null,cljs.core.rest.call(null,s__11049__$2)));
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
stock.tool.stock_info = (function stock_info(all,id,startdate,start,num){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11134){var state_val_11135 = (state_11134[(1)]);if((state_val_11135 === (9)))
{var inst_11124 = (state_11134[(2)]);var state_11134__$1 = state_11134;var statearr_11136_11153 = state_11134__$1;(statearr_11136_11153[(2)] = inst_11124);
(statearr_11136_11153[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11135 === (8)))
{var inst_11130 = (state_11134[(2)]);var state_11134__$1 = state_11134;var statearr_11137_11154 = state_11134__$1;(statearr_11137_11154[(2)] = inst_11130);
(statearr_11137_11154[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11135 === (7)))
{var inst_11116 = (state_11134[(7)]);var inst_11126 = cljs.core.concat.call(null,all,inst_11116);var inst_11127 = [null,inst_11126];var inst_11128 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11127,null));var state_11134__$1 = state_11134;var statearr_11138_11155 = state_11134__$1;(statearr_11138_11155[(2)] = inst_11128);
(statearr_11138_11155[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11135 === (6)))
{var inst_11116 = (state_11134[(7)]);var inst_11120 = cljs.core.concat.call(null,all,inst_11116);var inst_11121 = (start + num);var inst_11122 = stock_info.call(null,inst_11120,id,startdate,inst_11121,num);var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11134__$1,(9),inst_11122);
} else
{if((state_val_11135 === (5)))
{var inst_11132 = (state_11134[(2)]);var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11134__$1,inst_11132);
} else
{if((state_val_11135 === (4)))
{var inst_11111 = (state_11134[(8)]);var inst_11116 = (state_11134[(7)]);var inst_11116__$1 = stock.tool.parse_info.call(null,inst_11111);var inst_11117 = cljs.core.count.call(null,inst_11116__$1);var inst_11118 = cljs.core._EQ_.call(null,num,inst_11117);var state_11134__$1 = (function (){var statearr_11139 = state_11134;(statearr_11139[(7)] = inst_11116__$1);
return statearr_11139;
})();if(inst_11118)
{var statearr_11140_11156 = state_11134__$1;(statearr_11140_11156[(1)] = (6));
} else
{var statearr_11141_11157 = state_11134__$1;(statearr_11141_11157[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11135 === (3)))
{var inst_11110 = (state_11134[(9)]);var inst_11113 = [inst_11110];var inst_11114 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11113,null));var state_11134__$1 = state_11134;var statearr_11142_11158 = state_11134__$1;(statearr_11142_11158[(2)] = inst_11114);
(statearr_11142_11158[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11135 === (2)))
{var inst_11110 = (state_11134[(9)]);var inst_11109 = (state_11134[(2)]);var inst_11110__$1 = cljs.core.nth.call(null,inst_11109,(0),null);var inst_11111 = cljs.core.nth.call(null,inst_11109,(1),null);var state_11134__$1 = (function (){var statearr_11143 = state_11134;(statearr_11143[(8)] = inst_11111);
(statearr_11143[(9)] = inst_11110__$1);
return statearr_11143;
})();if(cljs.core.truth_(inst_11110__$1))
{var statearr_11144_11159 = state_11134__$1;(statearr_11144_11159[(1)] = (3));
} else
{var statearr_11145_11160 = state_11134__$1;(statearr_11145_11160[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11135 === (1)))
{var inst_11106 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_11107 = stock.tool.content.call(null,inst_11106);var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11134__$1,(2),inst_11107);
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11149 = [null,null,null,null,null,null,null,null,null,null];(statearr_11149[(0)] = state_machine__6189__auto__);
(statearr_11149[(1)] = (1));
return statearr_11149;
});
var state_machine__6189__auto____1 = (function (state_11134){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11134);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11150){if((e11150 instanceof Object))
{var ex__6192__auto__ = e11150;var statearr_11151_11161 = state_11134;(statearr_11151_11161[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11134);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11162 = state_11134;
state_11134 = G__11162;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11134){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11152 = f__6204__auto__.call(null);(statearr_11152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
stock.tool.high = (function high(kline){return cljs.core.map.call(null,(function (p__11165){var vec__11166 = p__11165;var _ = cljs.core.nth.call(null,vec__11166,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11166,(1),null);var high__$1 = cljs.core.nth.call(null,vec__11166,(2),null);var ___$2 = cljs.core.nth.call(null,vec__11166,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11166,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11166,(5),null);return high__$1;
}),kline);
});
stock.tool.low = (function low(kline){return cljs.core.map.call(null,(function (p__11169){var vec__11170 = p__11169;var _ = cljs.core.nth.call(null,vec__11170,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11170,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11170,(2),null);var low__$1 = cljs.core.nth.call(null,vec__11170,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11170,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11170,(5),null);return low__$1;
}),kline);
});
stock.tool.close = (function close(kline){return cljs.core.map.call(null,(function (p__11173){var vec__11174 = p__11173;var _ = cljs.core.nth.call(null,vec__11174,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11174,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11174,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11174,(3),null);var close__$1 = cljs.core.nth.call(null,vec__11174,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11174,(5),null);return close__$1;
}),kline);
});
stock.tool.volume = (function volume(kline){return cljs.core.map.call(null,(function (p__11177){var vec__11178 = p__11177;var _ = cljs.core.nth.call(null,vec__11178,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11178,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11178,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11178,(3),null);var ___$4 = cljs.core.nth.call(null,vec__11178,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__11178,(5),null);return volume__$1;
}),kline);
});
stock.tool.mid = (function mid(kline){return cljs.core.map.call(null,(function (p__11181){var vec__11182 = p__11181;var _ = cljs.core.nth.call(null,vec__11182,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11182,(1),null);var high = cljs.core.nth.call(null,vec__11182,(2),null);var low = cljs.core.nth.call(null,vec__11182,(3),null);var ___$2 = cljs.core.nth.call(null,vec__11182,(4),null);var ___$3 = cljs.core.nth.call(null,vec__11182,(5),null);return ((high - low) / (2));
}),kline);
});
