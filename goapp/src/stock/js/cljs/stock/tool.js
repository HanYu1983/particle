// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("http://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__50016(s__50017){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__50017__$1 = s__50017;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50017__$1);if(temp__4126__auto__)
{var s__50017__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50017__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__50017__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__50019 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__50018 = (0);while(true){
if((i__50018 < size__4275__auto__))
{var vec__50022 = cljs.core._nth.call(null,c__4274__auto__,i__50018);var _ = cljs.core.nth.call(null,vec__50022,(0),null);var date = cljs.core.nth.call(null,vec__50022,(1),null);var close = cljs.core.nth.call(null,vec__50022,(2),null);var high = cljs.core.nth.call(null,vec__50022,(3),null);var low = cljs.core.nth.call(null,vec__50022,(4),null);var open = cljs.core.nth.call(null,vec__50022,(5),null);var volume = cljs.core.nth.call(null,vec__50022,(6),null);cljs.core.chunk_append.call(null,b__50019,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__50024 = (i__50018 + (1));
i__50018 = G__50024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50019),iter__50016.call(null,cljs.core.chunk_rest.call(null,s__50017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50019),null);
}
} else
{var vec__50023 = cljs.core.first.call(null,s__50017__$2);var _ = cljs.core.nth.call(null,vec__50023,(0),null);var date = cljs.core.nth.call(null,vec__50023,(1),null);var close = cljs.core.nth.call(null,vec__50023,(2),null);var high = cljs.core.nth.call(null,vec__50023,(3),null);var low = cljs.core.nth.call(null,vec__50023,(4),null);var open = cljs.core.nth.call(null,vec__50023,(5),null);var volume = cljs.core.nth.call(null,vec__50023,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__50016.call(null,cljs.core.rest.call(null,s__50017__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__50037){var vec__50038 = p__50037;var d = cljs.core.nth.call(null,vec__50038,(0),null);var o = cljs.core.nth.call(null,vec__50038,(1),null);var h = cljs.core.nth.call(null,vec__50038,(2),null);var l = cljs.core.nth.call(null,vec__50038,(3),null);var c = cljs.core.nth.call(null,vec__50038,(4),null);var v = cljs.core.nth.call(null,vec__50038,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__50039,p__50040){var vec__50041 = p__50039;var d1 = cljs.core.nth.call(null,vec__50041,(0),null);var _ = cljs.core.nth.call(null,vec__50041,(1),null);var ___$1 = cljs.core.nth.call(null,vec__50041,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50041,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50041,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50041,(5),null);var prev = vec__50041;var vec__50042 = p__50040;var d2 = cljs.core.nth.call(null,vec__50042,(0),null);var o = cljs.core.nth.call(null,vec__50042,(1),null);var h = cljs.core.nth.call(null,vec__50042,(2),null);var l = cljs.core.nth.call(null,vec__50042,(3),null);var c = cljs.core.nth.call(null,vec__50042,(4),null);var v = cljs.core.nth.call(null,vec__50042,(5),null);var curr = vec__50042;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__50043,p__50044){var vec__50045 = p__50043;var d1 = cljs.core.nth.call(null,vec__50045,(0),null);var _ = cljs.core.nth.call(null,vec__50045,(1),null);var ___$1 = cljs.core.nth.call(null,vec__50045,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50045,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50045,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50045,(5),null);var prev = vec__50045;var vec__50046 = p__50044;var d2 = cljs.core.nth.call(null,vec__50046,(0),null);var o = cljs.core.nth.call(null,vec__50046,(1),null);var h = cljs.core.nth.call(null,vec__50046,(2),null);var l = cljs.core.nth.call(null,vec__50046,(3),null);var c = cljs.core.nth.call(null,vec__50046,(4),null);var v = cljs.core.nth.call(null,vec__50046,(5),null);var curr = vec__50046;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.map.call(null,((function (pass1,pass2,pass3){
return (function (p__50047){var vec__50048 = p__50047;var d = cljs.core.nth.call(null,vec__50048,(0),null);var o = cljs.core.nth.call(null,vec__50048,(1),null);var h = cljs.core.nth.call(null,vec__50048,(2),null);var l = cljs.core.nth.call(null,vec__50048,(3),null);var c = cljs.core.nth.call(null,vec__50048,(4),null);var v = cljs.core.nth.call(null,vec__50048,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3))
,pass3);return pass4;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj50086 = {"url":"/proxy","dataType":"text","data":(function (){var obj50088 = {"url":url};return obj50088;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_50095){var state_val_50096 = (state_50095[(1)]);if((state_val_50096 === (2)))
{var inst_50092 = (state_50095[(2)]);var inst_50093 = cljs.core.async.close_BANG_.call(null,ret);var state_50095__$1 = (function (){var statearr_50097 = state_50095;(statearr_50097[(7)] = inst_50092);
return statearr_50097;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50095__$1,inst_50093);
} else
{if((state_val_50096 === (1)))
{var inst_50089 = [null,data];var inst_50090 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50089,null));var state_50095__$1 = state_50095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50095__$1,(2),ret,inst_50090);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50101 = [null,null,null,null,null,null,null,null];(statearr_50101[(0)] = state_machine__6188__auto__);
(statearr_50101[(1)] = (1));
return statearr_50101;
});
var state_machine__6188__auto____1 = (function (state_50095){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50102){if((e50102 instanceof Object))
{var ex__6191__auto__ = e50102;var statearr_50103_50121 = state_50095;(statearr_50103_50121[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50122 = state_50095;
state_50095 = G__50122;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50095){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_50104 = f__6203__auto__.call(null);(statearr_50104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_50111){var state_val_50112 = (state_50111[(1)]);if((state_val_50112 === (2)))
{var inst_50108 = (state_50111[(2)]);var inst_50109 = cljs.core.async.close_BANG_.call(null,ret);var state_50111__$1 = (function (){var statearr_50113 = state_50111;(statearr_50113[(7)] = inst_50108);
return statearr_50113;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50111__$1,inst_50109);
} else
{if((state_val_50112 === (1)))
{var inst_50105 = [err];var inst_50106 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50105,null));var state_50111__$1 = state_50111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50111__$1,(2),ret,inst_50106);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50117 = [null,null,null,null,null,null,null,null];(statearr_50117[(0)] = state_machine__6188__auto__);
(statearr_50117[(1)] = (1));
return statearr_50117;
});
var state_machine__6188__auto____1 = (function (state_50111){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50118){if((e50118 instanceof Object))
{var ex__6191__auto__ = e50118;var statearr_50119_50123 = state_50111;(statearr_50119_50123[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50124 = state_50111;
state_50111 = G__50124;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50111){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_50120 = f__6203__auto__.call(null);(statearr_50120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj50086;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__50133(s__50134){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__50134__$1 = s__50134;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50134__$1);if(temp__4126__auto__)
{var s__50134__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50134__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__50134__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__50136 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__50135 = (0);while(true){
if((i__50135 < size__4275__auto__))
{var vec__50139 = cljs.core._nth.call(null,c__4274__auto__,i__50135);var _ = cljs.core.nth.call(null,vec__50139,(0),null);var date = cljs.core.nth.call(null,vec__50139,(1),null);var open = cljs.core.nth.call(null,vec__50139,(2),null);var high = cljs.core.nth.call(null,vec__50139,(3),null);var low = cljs.core.nth.call(null,vec__50139,(4),null);var close = cljs.core.nth.call(null,vec__50139,(5),null);var volume = cljs.core.nth.call(null,vec__50139,(6),null);cljs.core.chunk_append.call(null,b__50136,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__50141 = (i__50135 + (1));
i__50135 = G__50141;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50136),iter__50133.call(null,cljs.core.chunk_rest.call(null,s__50134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50136),null);
}
} else
{var vec__50140 = cljs.core.first.call(null,s__50134__$2);var _ = cljs.core.nth.call(null,vec__50140,(0),null);var date = cljs.core.nth.call(null,vec__50140,(1),null);var open = cljs.core.nth.call(null,vec__50140,(2),null);var high = cljs.core.nth.call(null,vec__50140,(3),null);var low = cljs.core.nth.call(null,vec__50140,(4),null);var close = cljs.core.nth.call(null,vec__50140,(5),null);var volume = cljs.core.nth.call(null,vec__50140,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__50133.call(null,cljs.core.rest.call(null,s__50134__$2)));
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
return (function (state_50219){var state_val_50220 = (state_50219[(1)]);if((state_val_50220 === (9)))
{var inst_50209 = (state_50219[(2)]);var state_50219__$1 = state_50219;var statearr_50221_50238 = state_50219__$1;(statearr_50221_50238[(2)] = inst_50209);
(statearr_50221_50238[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50220 === (8)))
{var inst_50215 = (state_50219[(2)]);var state_50219__$1 = state_50219;var statearr_50222_50239 = state_50219__$1;(statearr_50222_50239[(2)] = inst_50215);
(statearr_50222_50239[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50220 === (7)))
{var inst_50201 = (state_50219[(7)]);var inst_50211 = cljs.core.concat.call(null,all,inst_50201);var inst_50212 = [null,inst_50211];var inst_50213 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50212,null));var state_50219__$1 = state_50219;var statearr_50223_50240 = state_50219__$1;(statearr_50223_50240[(2)] = inst_50213);
(statearr_50223_50240[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50220 === (6)))
{var inst_50201 = (state_50219[(7)]);var inst_50205 = cljs.core.concat.call(null,all,inst_50201);var inst_50206 = (start + num);var inst_50207 = goog_historical_info.call(null,inst_50205,id,startdate,inst_50206,num);var state_50219__$1 = state_50219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50219__$1,(9),inst_50207);
} else
{if((state_val_50220 === (5)))
{var inst_50217 = (state_50219[(2)]);var state_50219__$1 = state_50219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50219__$1,inst_50217);
} else
{if((state_val_50220 === (4)))
{var inst_50196 = (state_50219[(8)]);var inst_50201 = (state_50219[(7)]);var inst_50201__$1 = stock.tool.parse_historical.call(null,inst_50196);var inst_50202 = cljs.core.count.call(null,inst_50201__$1);var inst_50203 = cljs.core._EQ_.call(null,num,inst_50202);var state_50219__$1 = (function (){var statearr_50224 = state_50219;(statearr_50224[(7)] = inst_50201__$1);
return statearr_50224;
})();if(inst_50203)
{var statearr_50225_50241 = state_50219__$1;(statearr_50225_50241[(1)] = (6));
} else
{var statearr_50226_50242 = state_50219__$1;(statearr_50226_50242[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50220 === (3)))
{var inst_50195 = (state_50219[(9)]);var inst_50198 = [inst_50195];var inst_50199 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50198,null));var state_50219__$1 = state_50219;var statearr_50227_50243 = state_50219__$1;(statearr_50227_50243[(2)] = inst_50199);
(statearr_50227_50243[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50220 === (2)))
{var inst_50195 = (state_50219[(9)]);var inst_50194 = (state_50219[(2)]);var inst_50195__$1 = cljs.core.nth.call(null,inst_50194,(0),null);var inst_50196 = cljs.core.nth.call(null,inst_50194,(1),null);var state_50219__$1 = (function (){var statearr_50228 = state_50219;(statearr_50228[(8)] = inst_50196);
(statearr_50228[(9)] = inst_50195__$1);
return statearr_50228;
})();if(cljs.core.truth_(inst_50195__$1))
{var statearr_50229_50244 = state_50219__$1;(statearr_50229_50244[(1)] = (3));
} else
{var statearr_50230_50245 = state_50219__$1;(statearr_50230_50245[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50220 === (1)))
{var inst_50191 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_50192 = stock.tool.content.call(null,inst_50191);var state_50219__$1 = state_50219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50219__$1,(2),inst_50192);
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
var state_machine__6188__auto____0 = (function (){var statearr_50234 = [null,null,null,null,null,null,null,null,null,null];(statearr_50234[(0)] = state_machine__6188__auto__);
(statearr_50234[(1)] = (1));
return statearr_50234;
});
var state_machine__6188__auto____1 = (function (state_50219){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50219);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50235){if((e50235 instanceof Object))
{var ex__6191__auto__ = e50235;var statearr_50236_50246 = state_50219;(statearr_50236_50246[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50219);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50247 = state_50219;
state_50219 = G__50247;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50219){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_50237 = f__6203__auto__.call(null);(statearr_50237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__50249 = kline;var date__$1 = cljs.core.nth.call(null,vec__50249,(0),null);var _ = cljs.core.nth.call(null,vec__50249,(1),null);var ___$1 = cljs.core.nth.call(null,vec__50249,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50249,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50249,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50249,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__50251 = kline;var _ = cljs.core.nth.call(null,vec__50251,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50251,(1),null);var high__$1 = cljs.core.nth.call(null,vec__50251,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50251,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50251,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50251,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__50253 = kline;var _ = cljs.core.nth.call(null,vec__50253,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50253,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50253,(2),null);var ___$3 = cljs.core.nth.call(null,vec__50253,(3),null);var open__$1 = cljs.core.nth.call(null,vec__50253,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50253,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__50255 = kline;var _ = cljs.core.nth.call(null,vec__50255,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50255,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50255,(2),null);var ___$3 = cljs.core.nth.call(null,vec__50255,(3),null);var close__$1 = cljs.core.nth.call(null,vec__50255,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50255,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__50257 = kline;var _ = cljs.core.nth.call(null,vec__50257,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50257,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50257,(2),null);var low__$1 = cljs.core.nth.call(null,vec__50257,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50257,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50257,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__50259 = kline;var _ = cljs.core.nth.call(null,vec__50259,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50259,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50259,(2),null);var ___$3 = cljs.core.nth.call(null,vec__50259,(3),null);var ___$4 = cljs.core.nth.call(null,vec__50259,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__50259,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__50261 = kline;var _ = cljs.core.nth.call(null,vec__50261,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50261,(1),null);var high = cljs.core.nth.call(null,vec__50261,(2),null);var low = cljs.core.nth.call(null,vec__50261,(3),null);var close = cljs.core.nth.call(null,vec__50261,(4),null);var ___$2 = cljs.core.nth.call(null,vec__50261,(5),null);return (((high + low) + close) / (3));
}
});
