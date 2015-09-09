// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = json.vo;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,(0)], null);
});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_48111){var state_val_48112 = (state_48111[(1)]);if((state_val_48112 === (5)))
{var inst_48109 = (state_48111[(2)]);var state_48111__$1 = state_48111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48111__$1,inst_48109);
} else
{if((state_val_48112 === (4)))
{var inst_48099 = (state_48111[(7)]);var inst_48105 = stock.tool.parse_info.call(null,inst_48099);var inst_48106 = [null,inst_48105];var inst_48107 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48106,null));var state_48111__$1 = state_48111;var statearr_48113_48125 = state_48111__$1;(statearr_48113_48125[(2)] = inst_48107);
(statearr_48113_48125[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48112 === (3)))
{var inst_48097 = (state_48111[(8)]);var inst_48102 = [inst_48097];var inst_48103 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48102,null));var state_48111__$1 = state_48111;var statearr_48114_48126 = state_48111__$1;(statearr_48114_48126[(2)] = inst_48103);
(statearr_48114_48126[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48112 === (2)))
{var inst_48097 = (state_48111[(8)]);var inst_48099 = (state_48111[(7)]);var inst_48096 = (state_48111[(2)]);var inst_48097__$1 = cljs.core.nth.call(null,inst_48096,(0),null);var inst_48098 = cljs.core.nth.call(null,inst_48096,(1),null);var inst_48099__$1 = clojure.string.replace.call(null,inst_48098,/\/\//,"");var inst_48100 = console.log(inst_48099__$1);var state_48111__$1 = (function (){var statearr_48115 = state_48111;(statearr_48115[(8)] = inst_48097__$1);
(statearr_48115[(7)] = inst_48099__$1);
(statearr_48115[(9)] = inst_48100);
return statearr_48115;
})();if(cljs.core.truth_(inst_48097__$1))
{var statearr_48116_48127 = state_48111__$1;(statearr_48116_48127[(1)] = (3));
} else
{var statearr_48117_48128 = state_48111__$1;(statearr_48117_48128[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48112 === (1)))
{var inst_48093 = stock.tool.goog_finance_info_url.call(null,id);var inst_48094 = stock.tool.content.call(null,inst_48093);var state_48111__$1 = state_48111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48111__$1,(2),inst_48094);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48121 = [null,null,null,null,null,null,null,null,null,null];(statearr_48121[(0)] = state_machine__6188__auto__);
(statearr_48121[(1)] = (1));
return statearr_48121;
});
var state_machine__6188__auto____1 = (function (state_48111){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48122){if((e48122 instanceof Object))
{var ex__6191__auto__ = e48122;var statearr_48123_48129 = state_48111;(statearr_48123_48129[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48130 = state_48111;
state_48111 = G__48130;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48111){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48124 = f__6203__auto__.call(null);(statearr_48124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__48139(s__48140){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__48140__$1 = s__48140;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__48140__$1);if(temp__4126__auto__)
{var s__48140__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48140__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__48140__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__48142 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__48141 = (0);while(true){
if((i__48141 < size__4275__auto__))
{var vec__48145 = cljs.core._nth.call(null,c__4274__auto__,i__48141);var _ = cljs.core.nth.call(null,vec__48145,(0),null);var date = cljs.core.nth.call(null,vec__48145,(1),null);var close = cljs.core.nth.call(null,vec__48145,(2),null);var high = cljs.core.nth.call(null,vec__48145,(3),null);var low = cljs.core.nth.call(null,vec__48145,(4),null);var open = cljs.core.nth.call(null,vec__48145,(5),null);var volume = cljs.core.nth.call(null,vec__48145,(6),null);cljs.core.chunk_append.call(null,b__48142,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__48147 = (i__48141 + (1));
i__48141 = G__48147;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48142),iter__48139.call(null,cljs.core.chunk_rest.call(null,s__48140__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48142),null);
}
} else
{var vec__48146 = cljs.core.first.call(null,s__48140__$2);var _ = cljs.core.nth.call(null,vec__48146,(0),null);var date = cljs.core.nth.call(null,vec__48146,(1),null);var close = cljs.core.nth.call(null,vec__48146,(2),null);var high = cljs.core.nth.call(null,vec__48146,(3),null);var low = cljs.core.nth.call(null,vec__48146,(4),null);var open = cljs.core.nth.call(null,vec__48146,(5),null);var volume = cljs.core.nth.call(null,vec__48146,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__48139.call(null,cljs.core.rest.call(null,s__48140__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__48162){var vec__48163 = p__48162;var d = cljs.core.nth.call(null,vec__48163,(0),null);var o = cljs.core.nth.call(null,vec__48163,(1),null);var h = cljs.core.nth.call(null,vec__48163,(2),null);var l = cljs.core.nth.call(null,vec__48163,(3),null);var c = cljs.core.nth.call(null,vec__48163,(4),null);var v = cljs.core.nth.call(null,vec__48163,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__48164,p__48165){var vec__48166 = p__48164;var d1 = cljs.core.nth.call(null,vec__48166,(0),null);var _ = cljs.core.nth.call(null,vec__48166,(1),null);var ___$1 = cljs.core.nth.call(null,vec__48166,(2),null);var ___$2 = cljs.core.nth.call(null,vec__48166,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48166,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48166,(5),null);var prev = vec__48166;var vec__48167 = p__48165;var d2 = cljs.core.nth.call(null,vec__48167,(0),null);var o = cljs.core.nth.call(null,vec__48167,(1),null);var h = cljs.core.nth.call(null,vec__48167,(2),null);var l = cljs.core.nth.call(null,vec__48167,(3),null);var c = cljs.core.nth.call(null,vec__48167,(4),null);var v = cljs.core.nth.call(null,vec__48167,(5),null);var curr = vec__48167;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__48168,p__48169){var vec__48170 = p__48168;var d1 = cljs.core.nth.call(null,vec__48170,(0),null);var _ = cljs.core.nth.call(null,vec__48170,(1),null);var ___$1 = cljs.core.nth.call(null,vec__48170,(2),null);var ___$2 = cljs.core.nth.call(null,vec__48170,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48170,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48170,(5),null);var prev = vec__48170;var vec__48171 = p__48169;var d2 = cljs.core.nth.call(null,vec__48171,(0),null);var o = cljs.core.nth.call(null,vec__48171,(1),null);var h = cljs.core.nth.call(null,vec__48171,(2),null);var l = cljs.core.nth.call(null,vec__48171,(3),null);var c = cljs.core.nth.call(null,vec__48171,(4),null);var v = cljs.core.nth.call(null,vec__48171,(5),null);var curr = vec__48171;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__48172){var vec__48173 = p__48172;var d = cljs.core.nth.call(null,vec__48173,(0),null);var o = cljs.core.nth.call(null,vec__48173,(1),null);var h = cljs.core.nth.call(null,vec__48173,(2),null);var l = cljs.core.nth.call(null,vec__48173,(3),null);var c = cljs.core.nth.call(null,vec__48173,(4),null);var v = cljs.core.nth.call(null,vec__48173,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__48174){var vec__48175 = p__48174;var d = cljs.core.nth.call(null,vec__48175,(0),null);var o = cljs.core.nth.call(null,vec__48175,(1),null);var h = cljs.core.nth.call(null,vec__48175,(2),null);var l = cljs.core.nth.call(null,vec__48175,(3),null);var c = cljs.core.nth.call(null,vec__48175,(4),null);var v = cljs.core.nth.call(null,vec__48175,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj48213 = {"url":"/proxy","dataType":"text","data":(function (){var obj48215 = {"url":url};return obj48215;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_48222){var state_val_48223 = (state_48222[(1)]);if((state_val_48223 === (2)))
{var inst_48219 = (state_48222[(2)]);var inst_48220 = cljs.core.async.close_BANG_.call(null,ret);var state_48222__$1 = (function (){var statearr_48224 = state_48222;(statearr_48224[(7)] = inst_48219);
return statearr_48224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48222__$1,inst_48220);
} else
{if((state_val_48223 === (1)))
{var inst_48216 = [null,data];var inst_48217 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48216,null));var state_48222__$1 = state_48222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48222__$1,(2),ret,inst_48217);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48228 = [null,null,null,null,null,null,null,null];(statearr_48228[(0)] = state_machine__6188__auto__);
(statearr_48228[(1)] = (1));
return statearr_48228;
});
var state_machine__6188__auto____1 = (function (state_48222){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48229){if((e48229 instanceof Object))
{var ex__6191__auto__ = e48229;var statearr_48230_48248 = state_48222;(statearr_48230_48248[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48249 = state_48222;
state_48222 = G__48249;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48222){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_48231 = f__6203__auto__.call(null);(statearr_48231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_48238){var state_val_48239 = (state_48238[(1)]);if((state_val_48239 === (2)))
{var inst_48235 = (state_48238[(2)]);var inst_48236 = cljs.core.async.close_BANG_.call(null,ret);var state_48238__$1 = (function (){var statearr_48240 = state_48238;(statearr_48240[(7)] = inst_48235);
return statearr_48240;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48238__$1,inst_48236);
} else
{if((state_val_48239 === (1)))
{var inst_48232 = [err];var inst_48233 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48232,null));var state_48238__$1 = state_48238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48238__$1,(2),ret,inst_48233);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48244 = [null,null,null,null,null,null,null,null];(statearr_48244[(0)] = state_machine__6188__auto__);
(statearr_48244[(1)] = (1));
return statearr_48244;
});
var state_machine__6188__auto____1 = (function (state_48238){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48245){if((e48245 instanceof Object))
{var ex__6191__auto__ = e48245;var statearr_48246_48250 = state_48238;(statearr_48246_48250[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48251 = state_48238;
state_48238 = G__48251;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48238){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_48247 = f__6203__auto__.call(null);(statearr_48247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj48213;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__48260(s__48261){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__48261__$1 = s__48261;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__48261__$1);if(temp__4126__auto__)
{var s__48261__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48261__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__48261__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__48263 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__48262 = (0);while(true){
if((i__48262 < size__4275__auto__))
{var vec__48266 = cljs.core._nth.call(null,c__4274__auto__,i__48262);var _ = cljs.core.nth.call(null,vec__48266,(0),null);var date = cljs.core.nth.call(null,vec__48266,(1),null);var open = cljs.core.nth.call(null,vec__48266,(2),null);var high = cljs.core.nth.call(null,vec__48266,(3),null);var low = cljs.core.nth.call(null,vec__48266,(4),null);var close = cljs.core.nth.call(null,vec__48266,(5),null);var volume = cljs.core.nth.call(null,vec__48266,(6),null);cljs.core.chunk_append.call(null,b__48263,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__48268 = (i__48262 + (1));
i__48262 = G__48268;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48263),iter__48260.call(null,cljs.core.chunk_rest.call(null,s__48261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48263),null);
}
} else
{var vec__48267 = cljs.core.first.call(null,s__48261__$2);var _ = cljs.core.nth.call(null,vec__48267,(0),null);var date = cljs.core.nth.call(null,vec__48267,(1),null);var open = cljs.core.nth.call(null,vec__48267,(2),null);var high = cljs.core.nth.call(null,vec__48267,(3),null);var low = cljs.core.nth.call(null,vec__48267,(4),null);var close = cljs.core.nth.call(null,vec__48267,(5),null);var volume = cljs.core.nth.call(null,vec__48267,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__48260.call(null,cljs.core.rest.call(null,s__48261__$2)));
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
return (function (state_48346){var state_val_48347 = (state_48346[(1)]);if((state_val_48347 === (9)))
{var inst_48336 = (state_48346[(2)]);var state_48346__$1 = state_48346;var statearr_48348_48365 = state_48346__$1;(statearr_48348_48365[(2)] = inst_48336);
(statearr_48348_48365[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48347 === (8)))
{var inst_48342 = (state_48346[(2)]);var state_48346__$1 = state_48346;var statearr_48349_48366 = state_48346__$1;(statearr_48349_48366[(2)] = inst_48342);
(statearr_48349_48366[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48347 === (7)))
{var inst_48328 = (state_48346[(7)]);var inst_48338 = cljs.core.concat.call(null,all,inst_48328);var inst_48339 = [null,inst_48338];var inst_48340 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48339,null));var state_48346__$1 = state_48346;var statearr_48350_48367 = state_48346__$1;(statearr_48350_48367[(2)] = inst_48340);
(statearr_48350_48367[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48347 === (6)))
{var inst_48328 = (state_48346[(7)]);var inst_48332 = cljs.core.concat.call(null,all,inst_48328);var inst_48333 = (start + num);var inst_48334 = goog_historical_info.call(null,inst_48332,id,startdate,inst_48333,num);var state_48346__$1 = state_48346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48346__$1,(9),inst_48334);
} else
{if((state_val_48347 === (5)))
{var inst_48344 = (state_48346[(2)]);var state_48346__$1 = state_48346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48346__$1,inst_48344);
} else
{if((state_val_48347 === (4)))
{var inst_48323 = (state_48346[(8)]);var inst_48328 = (state_48346[(7)]);var inst_48328__$1 = stock.tool.parse_historical.call(null,inst_48323);var inst_48329 = cljs.core.count.call(null,inst_48328__$1);var inst_48330 = cljs.core._EQ_.call(null,num,inst_48329);var state_48346__$1 = (function (){var statearr_48351 = state_48346;(statearr_48351[(7)] = inst_48328__$1);
return statearr_48351;
})();if(inst_48330)
{var statearr_48352_48368 = state_48346__$1;(statearr_48352_48368[(1)] = (6));
} else
{var statearr_48353_48369 = state_48346__$1;(statearr_48353_48369[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48347 === (3)))
{var inst_48322 = (state_48346[(9)]);var inst_48325 = [inst_48322];var inst_48326 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48325,null));var state_48346__$1 = state_48346;var statearr_48354_48370 = state_48346__$1;(statearr_48354_48370[(2)] = inst_48326);
(statearr_48354_48370[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48347 === (2)))
{var inst_48322 = (state_48346[(9)]);var inst_48321 = (state_48346[(2)]);var inst_48322__$1 = cljs.core.nth.call(null,inst_48321,(0),null);var inst_48323 = cljs.core.nth.call(null,inst_48321,(1),null);var state_48346__$1 = (function (){var statearr_48355 = state_48346;(statearr_48355[(8)] = inst_48323);
(statearr_48355[(9)] = inst_48322__$1);
return statearr_48355;
})();if(cljs.core.truth_(inst_48322__$1))
{var statearr_48356_48371 = state_48346__$1;(statearr_48356_48371[(1)] = (3));
} else
{var statearr_48357_48372 = state_48346__$1;(statearr_48357_48372[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48347 === (1)))
{var inst_48318 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_48319 = stock.tool.content.call(null,inst_48318);var state_48346__$1 = state_48346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48346__$1,(2),inst_48319);
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
var state_machine__6188__auto____0 = (function (){var statearr_48361 = [null,null,null,null,null,null,null,null,null,null];(statearr_48361[(0)] = state_machine__6188__auto__);
(statearr_48361[(1)] = (1));
return statearr_48361;
});
var state_machine__6188__auto____1 = (function (state_48346){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48362){if((e48362 instanceof Object))
{var ex__6191__auto__ = e48362;var statearr_48363_48373 = state_48346;(statearr_48363_48373[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48374 = state_48346;
state_48346 = G__48374;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48346){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48364 = f__6203__auto__.call(null);(statearr_48364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__48376 = kline;var date__$1 = cljs.core.nth.call(null,vec__48376,(0),null);var _ = cljs.core.nth.call(null,vec__48376,(1),null);var ___$1 = cljs.core.nth.call(null,vec__48376,(2),null);var ___$2 = cljs.core.nth.call(null,vec__48376,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48376,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48376,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__48378 = kline;var _ = cljs.core.nth.call(null,vec__48378,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48378,(1),null);var high__$1 = cljs.core.nth.call(null,vec__48378,(2),null);var ___$2 = cljs.core.nth.call(null,vec__48378,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48378,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48378,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__48380 = kline;var _ = cljs.core.nth.call(null,vec__48380,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48380,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48380,(2),null);var ___$3 = cljs.core.nth.call(null,vec__48380,(3),null);var open__$1 = cljs.core.nth.call(null,vec__48380,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48380,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__48382 = kline;var _ = cljs.core.nth.call(null,vec__48382,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48382,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48382,(2),null);var ___$3 = cljs.core.nth.call(null,vec__48382,(3),null);var close__$1 = cljs.core.nth.call(null,vec__48382,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48382,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__48384 = kline;var _ = cljs.core.nth.call(null,vec__48384,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48384,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48384,(2),null);var low__$1 = cljs.core.nth.call(null,vec__48384,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48384,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48384,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__48386 = kline;var _ = cljs.core.nth.call(null,vec__48386,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48386,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48386,(2),null);var ___$3 = cljs.core.nth.call(null,vec__48386,(3),null);var ___$4 = cljs.core.nth.call(null,vec__48386,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__48386,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__48388 = kline;var _ = cljs.core.nth.call(null,vec__48388,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48388,(1),null);var high = cljs.core.nth.call(null,vec__48388,(2),null);var low = cljs.core.nth.call(null,vec__48388,(3),null);var ___$2 = cljs.core.nth.call(null,vec__48388,(4),null);var ___$3 = cljs.core.nth.call(null,vec__48388,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__48390 = kline;var _ = cljs.core.nth.call(null,vec__48390,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48390,(1),null);var high = cljs.core.nth.call(null,vec__48390,(2),null);var low = cljs.core.nth.call(null,vec__48390,(3),null);var close = cljs.core.nth.call(null,vec__48390,(4),null);var ___$2 = cljs.core.nth.call(null,vec__48390,(5),null);return (((high + low) + close) / (3));
}
});
