// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__11084(s__11085){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__11085__$1 = s__11085;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11085__$1);if(temp__4126__auto__)
{var s__11085__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11085__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11085__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11087 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11086 = (0);while(true){
if((i__11086 < size__4275__auto__))
{var vec__11090 = cljs.core._nth.call(null,c__4274__auto__,i__11086);var _ = cljs.core.nth.call(null,vec__11090,(0),null);var date = cljs.core.nth.call(null,vec__11090,(1),null);var close = cljs.core.nth.call(null,vec__11090,(2),null);var high = cljs.core.nth.call(null,vec__11090,(3),null);var low = cljs.core.nth.call(null,vec__11090,(4),null);var open = cljs.core.nth.call(null,vec__11090,(5),null);var volume = cljs.core.nth.call(null,vec__11090,(6),null);cljs.core.chunk_append.call(null,b__11087,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__11092 = (i__11086 + (1));
i__11086 = G__11092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11087),iter__11084.call(null,cljs.core.chunk_rest.call(null,s__11085__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11087),null);
}
} else
{var vec__11091 = cljs.core.first.call(null,s__11085__$2);var _ = cljs.core.nth.call(null,vec__11091,(0),null);var date = cljs.core.nth.call(null,vec__11091,(1),null);var close = cljs.core.nth.call(null,vec__11091,(2),null);var high = cljs.core.nth.call(null,vec__11091,(3),null);var low = cljs.core.nth.call(null,vec__11091,(4),null);var open = cljs.core.nth.call(null,vec__11091,(5),null);var volume = cljs.core.nth.call(null,vec__11091,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__11084.call(null,cljs.core.rest.call(null,s__11085__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__11105){var vec__11106 = p__11105;var d = cljs.core.nth.call(null,vec__11106,(0),null);var o = cljs.core.nth.call(null,vec__11106,(1),null);var h = cljs.core.nth.call(null,vec__11106,(2),null);var l = cljs.core.nth.call(null,vec__11106,(3),null);var c = cljs.core.nth.call(null,vec__11106,(4),null);var v = cljs.core.nth.call(null,vec__11106,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__11107,p__11108){var vec__11109 = p__11107;var d1 = cljs.core.nth.call(null,vec__11109,(0),null);var _ = cljs.core.nth.call(null,vec__11109,(1),null);var ___$1 = cljs.core.nth.call(null,vec__11109,(2),null);var ___$2 = cljs.core.nth.call(null,vec__11109,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11109,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11109,(5),null);var prev = vec__11109;var vec__11110 = p__11108;var d2 = cljs.core.nth.call(null,vec__11110,(0),null);var o = cljs.core.nth.call(null,vec__11110,(1),null);var h = cljs.core.nth.call(null,vec__11110,(2),null);var l = cljs.core.nth.call(null,vec__11110,(3),null);var c = cljs.core.nth.call(null,vec__11110,(4),null);var v = cljs.core.nth.call(null,vec__11110,(5),null);var curr = vec__11110;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__11111,p__11112){var vec__11113 = p__11111;var d1 = cljs.core.nth.call(null,vec__11113,(0),null);var _ = cljs.core.nth.call(null,vec__11113,(1),null);var ___$1 = cljs.core.nth.call(null,vec__11113,(2),null);var ___$2 = cljs.core.nth.call(null,vec__11113,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11113,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11113,(5),null);var prev = vec__11113;var vec__11114 = p__11112;var d2 = cljs.core.nth.call(null,vec__11114,(0),null);var o = cljs.core.nth.call(null,vec__11114,(1),null);var h = cljs.core.nth.call(null,vec__11114,(2),null);var l = cljs.core.nth.call(null,vec__11114,(3),null);var c = cljs.core.nth.call(null,vec__11114,(4),null);var v = cljs.core.nth.call(null,vec__11114,(5),null);var curr = vec__11114;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.map.call(null,((function (pass1,pass2,pass3){
return (function (p__11115){var vec__11116 = p__11115;var d = cljs.core.nth.call(null,vec__11116,(0),null);var o = cljs.core.nth.call(null,vec__11116,(1),null);var h = cljs.core.nth.call(null,vec__11116,(2),null);var l = cljs.core.nth.call(null,vec__11116,(3),null);var c = cljs.core.nth.call(null,vec__11116,(4),null);var v = cljs.core.nth.call(null,vec__11116,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3))
,pass3);return pass4;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj11154 = {"url":"/proxy","dataType":"text","data":(function (){var obj11156 = {"url":url};return obj11156;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_11163){var state_val_11164 = (state_11163[(1)]);if((state_val_11164 === (2)))
{var inst_11160 = (state_11163[(2)]);var inst_11161 = cljs.core.async.close_BANG_.call(null,ret);var state_11163__$1 = (function (){var statearr_11165 = state_11163;(statearr_11165[(7)] = inst_11160);
return statearr_11165;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11163__$1,inst_11161);
} else
{if((state_val_11164 === (1)))
{var inst_11157 = [null,data];var inst_11158 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11157,null));var state_11163__$1 = state_11163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11163__$1,(2),ret,inst_11158);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_11169 = [null,null,null,null,null,null,null,null];(statearr_11169[(0)] = state_machine__6188__auto__);
(statearr_11169[(1)] = (1));
return statearr_11169;
});
var state_machine__6188__auto____1 = (function (state_11163){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11163);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11170){if((e11170 instanceof Object))
{var ex__6191__auto__ = e11170;var statearr_11171_11189 = state_11163;(statearr_11171_11189[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11170;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11190 = state_11163;
state_11163 = G__11190;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11163){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_11172 = f__6203__auto__.call(null);(statearr_11172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_11172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_11179){var state_val_11180 = (state_11179[(1)]);if((state_val_11180 === (2)))
{var inst_11176 = (state_11179[(2)]);var inst_11177 = cljs.core.async.close_BANG_.call(null,ret);var state_11179__$1 = (function (){var statearr_11181 = state_11179;(statearr_11181[(7)] = inst_11176);
return statearr_11181;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11179__$1,inst_11177);
} else
{if((state_val_11180 === (1)))
{var inst_11173 = [err];var inst_11174 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11173,null));var state_11179__$1 = state_11179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11179__$1,(2),ret,inst_11174);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_11185 = [null,null,null,null,null,null,null,null];(statearr_11185[(0)] = state_machine__6188__auto__);
(statearr_11185[(1)] = (1));
return statearr_11185;
});
var state_machine__6188__auto____1 = (function (state_11179){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11186){if((e11186 instanceof Object))
{var ex__6191__auto__ = e11186;var statearr_11187_11191 = state_11179;(statearr_11187_11191[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11192 = state_11179;
state_11179 = G__11192;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11179){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_11188 = f__6203__auto__.call(null);(statearr_11188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_11188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj11154;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__11201(s__11202){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__11202__$1 = s__11202;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11202__$1);if(temp__4126__auto__)
{var s__11202__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11202__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11202__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11204 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11203 = (0);while(true){
if((i__11203 < size__4275__auto__))
{var vec__11207 = cljs.core._nth.call(null,c__4274__auto__,i__11203);var _ = cljs.core.nth.call(null,vec__11207,(0),null);var date = cljs.core.nth.call(null,vec__11207,(1),null);var open = cljs.core.nth.call(null,vec__11207,(2),null);var high = cljs.core.nth.call(null,vec__11207,(3),null);var low = cljs.core.nth.call(null,vec__11207,(4),null);var close = cljs.core.nth.call(null,vec__11207,(5),null);var volume = cljs.core.nth.call(null,vec__11207,(6),null);cljs.core.chunk_append.call(null,b__11204,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__11209 = (i__11203 + (1));
i__11203 = G__11209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11204),iter__11201.call(null,cljs.core.chunk_rest.call(null,s__11202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11204),null);
}
} else
{var vec__11208 = cljs.core.first.call(null,s__11202__$2);var _ = cljs.core.nth.call(null,vec__11208,(0),null);var date = cljs.core.nth.call(null,vec__11208,(1),null);var open = cljs.core.nth.call(null,vec__11208,(2),null);var high = cljs.core.nth.call(null,vec__11208,(3),null);var low = cljs.core.nth.call(null,vec__11208,(4),null);var close = cljs.core.nth.call(null,vec__11208,(5),null);var volume = cljs.core.nth.call(null,vec__11208,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__11201.call(null,cljs.core.rest.call(null,s__11202__$2)));
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
stock.tool.goog_historical_info = (function goog_historical_info(all,id,startdate,start,num){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_11287){var state_val_11288 = (state_11287[(1)]);if((state_val_11288 === (9)))
{var inst_11277 = (state_11287[(2)]);var state_11287__$1 = state_11287;var statearr_11289_11306 = state_11287__$1;(statearr_11289_11306[(2)] = inst_11277);
(statearr_11289_11306[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11288 === (8)))
{var inst_11283 = (state_11287[(2)]);var state_11287__$1 = state_11287;var statearr_11290_11307 = state_11287__$1;(statearr_11290_11307[(2)] = inst_11283);
(statearr_11290_11307[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11288 === (7)))
{var inst_11269 = (state_11287[(7)]);var inst_11279 = cljs.core.concat.call(null,all,inst_11269);var inst_11280 = [null,inst_11279];var inst_11281 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11280,null));var state_11287__$1 = state_11287;var statearr_11291_11308 = state_11287__$1;(statearr_11291_11308[(2)] = inst_11281);
(statearr_11291_11308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11288 === (6)))
{var inst_11269 = (state_11287[(7)]);var inst_11273 = cljs.core.concat.call(null,all,inst_11269);var inst_11274 = (start + num);var inst_11275 = goog_historical_info.call(null,inst_11273,id,startdate,inst_11274,num);var state_11287__$1 = state_11287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11287__$1,(9),inst_11275);
} else
{if((state_val_11288 === (5)))
{var inst_11285 = (state_11287[(2)]);var state_11287__$1 = state_11287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11287__$1,inst_11285);
} else
{if((state_val_11288 === (4)))
{var inst_11269 = (state_11287[(7)]);var inst_11264 = (state_11287[(8)]);var inst_11269__$1 = stock.tool.parse_historical.call(null,inst_11264);var inst_11270 = cljs.core.count.call(null,inst_11269__$1);var inst_11271 = cljs.core._EQ_.call(null,num,inst_11270);var state_11287__$1 = (function (){var statearr_11292 = state_11287;(statearr_11292[(7)] = inst_11269__$1);
return statearr_11292;
})();if(inst_11271)
{var statearr_11293_11309 = state_11287__$1;(statearr_11293_11309[(1)] = (6));
} else
{var statearr_11294_11310 = state_11287__$1;(statearr_11294_11310[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11288 === (3)))
{var inst_11263 = (state_11287[(9)]);var inst_11266 = [inst_11263];var inst_11267 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11266,null));var state_11287__$1 = state_11287;var statearr_11295_11311 = state_11287__$1;(statearr_11295_11311[(2)] = inst_11267);
(statearr_11295_11311[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11288 === (2)))
{var inst_11263 = (state_11287[(9)]);var inst_11262 = (state_11287[(2)]);var inst_11263__$1 = cljs.core.nth.call(null,inst_11262,(0),null);var inst_11264 = cljs.core.nth.call(null,inst_11262,(1),null);var state_11287__$1 = (function (){var statearr_11296 = state_11287;(statearr_11296[(9)] = inst_11263__$1);
(statearr_11296[(8)] = inst_11264);
return statearr_11296;
})();if(cljs.core.truth_(inst_11263__$1))
{var statearr_11297_11312 = state_11287__$1;(statearr_11297_11312[(1)] = (3));
} else
{var statearr_11298_11313 = state_11287__$1;(statearr_11298_11313[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11288 === (1)))
{var inst_11259 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_11260 = stock.tool.content.call(null,inst_11259);var state_11287__$1 = state_11287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11287__$1,(2),inst_11260);
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
var state_machine__6188__auto____0 = (function (){var statearr_11302 = [null,null,null,null,null,null,null,null,null,null];(statearr_11302[(0)] = state_machine__6188__auto__);
(statearr_11302[(1)] = (1));
return statearr_11302;
});
var state_machine__6188__auto____1 = (function (state_11287){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_11287);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e11303){if((e11303 instanceof Object))
{var ex__6191__auto__ = e11303;var statearr_11304_11314 = state_11287;(statearr_11304_11314[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11315 = state_11287;
state_11287 = G__11315;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_11287){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_11287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_11305 = f__6203__auto__.call(null);(statearr_11305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_11305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__11317 = kline;var date__$1 = cljs.core.nth.call(null,vec__11317,(0),null);var _ = cljs.core.nth.call(null,vec__11317,(1),null);var ___$1 = cljs.core.nth.call(null,vec__11317,(2),null);var ___$2 = cljs.core.nth.call(null,vec__11317,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11317,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11317,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__11319 = kline;var _ = cljs.core.nth.call(null,vec__11319,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11319,(1),null);var high__$1 = cljs.core.nth.call(null,vec__11319,(2),null);var ___$2 = cljs.core.nth.call(null,vec__11319,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11319,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11319,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__11321 = kline;var _ = cljs.core.nth.call(null,vec__11321,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11321,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11321,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11321,(3),null);var open__$1 = cljs.core.nth.call(null,vec__11321,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11321,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__11323 = kline;var _ = cljs.core.nth.call(null,vec__11323,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11323,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11323,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11323,(3),null);var close__$1 = cljs.core.nth.call(null,vec__11323,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11323,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__11325 = kline;var _ = cljs.core.nth.call(null,vec__11325,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11325,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11325,(2),null);var low__$1 = cljs.core.nth.call(null,vec__11325,(3),null);var ___$3 = cljs.core.nth.call(null,vec__11325,(4),null);var ___$4 = cljs.core.nth.call(null,vec__11325,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__11327 = kline;var _ = cljs.core.nth.call(null,vec__11327,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11327,(1),null);var ___$2 = cljs.core.nth.call(null,vec__11327,(2),null);var ___$3 = cljs.core.nth.call(null,vec__11327,(3),null);var ___$4 = cljs.core.nth.call(null,vec__11327,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__11327,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__11329 = kline;var _ = cljs.core.nth.call(null,vec__11329,(0),null);var ___$1 = cljs.core.nth.call(null,vec__11329,(1),null);var high = cljs.core.nth.call(null,vec__11329,(2),null);var low = cljs.core.nth.call(null,vec__11329,(3),null);var close = cljs.core.nth.call(null,vec__11329,(4),null);var ___$2 = cljs.core.nth.call(null,vec__11329,(5),null);return (((high + low) + close) / (3));
}
});
