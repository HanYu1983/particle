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
return (function iter__12878(s__12879){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__12879__$1 = s__12879;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12879__$1);if(temp__4126__auto__)
{var s__12879__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12879__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__12879__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__12881 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__12880 = (0);while(true){
if((i__12880 < size__4275__auto__))
{var vec__12884 = cljs.core._nth.call(null,c__4274__auto__,i__12880);var _ = cljs.core.nth.call(null,vec__12884,(0),null);var date = cljs.core.nth.call(null,vec__12884,(1),null);var close = cljs.core.nth.call(null,vec__12884,(2),null);var high = cljs.core.nth.call(null,vec__12884,(3),null);var low = cljs.core.nth.call(null,vec__12884,(4),null);var open = cljs.core.nth.call(null,vec__12884,(5),null);var volume = cljs.core.nth.call(null,vec__12884,(6),null);cljs.core.chunk_append.call(null,b__12881,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__12886 = (i__12880 + (1));
i__12880 = G__12886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12881),iter__12878.call(null,cljs.core.chunk_rest.call(null,s__12879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12881),null);
}
} else
{var vec__12885 = cljs.core.first.call(null,s__12879__$2);var _ = cljs.core.nth.call(null,vec__12885,(0),null);var date = cljs.core.nth.call(null,vec__12885,(1),null);var close = cljs.core.nth.call(null,vec__12885,(2),null);var high = cljs.core.nth.call(null,vec__12885,(3),null);var low = cljs.core.nth.call(null,vec__12885,(4),null);var open = cljs.core.nth.call(null,vec__12885,(5),null);var volume = cljs.core.nth.call(null,vec__12885,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__12878.call(null,cljs.core.rest.call(null,s__12879__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__12901){var vec__12902 = p__12901;var d = cljs.core.nth.call(null,vec__12902,(0),null);var o = cljs.core.nth.call(null,vec__12902,(1),null);var h = cljs.core.nth.call(null,vec__12902,(2),null);var l = cljs.core.nth.call(null,vec__12902,(3),null);var c = cljs.core.nth.call(null,vec__12902,(4),null);var v = cljs.core.nth.call(null,vec__12902,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__12903,p__12904){var vec__12905 = p__12903;var d1 = cljs.core.nth.call(null,vec__12905,(0),null);var _ = cljs.core.nth.call(null,vec__12905,(1),null);var ___$1 = cljs.core.nth.call(null,vec__12905,(2),null);var ___$2 = cljs.core.nth.call(null,vec__12905,(3),null);var ___$3 = cljs.core.nth.call(null,vec__12905,(4),null);var ___$4 = cljs.core.nth.call(null,vec__12905,(5),null);var prev = vec__12905;var vec__12906 = p__12904;var d2 = cljs.core.nth.call(null,vec__12906,(0),null);var o = cljs.core.nth.call(null,vec__12906,(1),null);var h = cljs.core.nth.call(null,vec__12906,(2),null);var l = cljs.core.nth.call(null,vec__12906,(3),null);var c = cljs.core.nth.call(null,vec__12906,(4),null);var v = cljs.core.nth.call(null,vec__12906,(5),null);var curr = vec__12906;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__12907,p__12908){var vec__12909 = p__12907;var d1 = cljs.core.nth.call(null,vec__12909,(0),null);var _ = cljs.core.nth.call(null,vec__12909,(1),null);var ___$1 = cljs.core.nth.call(null,vec__12909,(2),null);var ___$2 = cljs.core.nth.call(null,vec__12909,(3),null);var ___$3 = cljs.core.nth.call(null,vec__12909,(4),null);var ___$4 = cljs.core.nth.call(null,vec__12909,(5),null);var prev = vec__12909;var vec__12910 = p__12908;var d2 = cljs.core.nth.call(null,vec__12910,(0),null);var o = cljs.core.nth.call(null,vec__12910,(1),null);var h = cljs.core.nth.call(null,vec__12910,(2),null);var l = cljs.core.nth.call(null,vec__12910,(3),null);var c = cljs.core.nth.call(null,vec__12910,(4),null);var v = cljs.core.nth.call(null,vec__12910,(5),null);var curr = vec__12910;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__12911){var vec__12912 = p__12911;var d = cljs.core.nth.call(null,vec__12912,(0),null);var o = cljs.core.nth.call(null,vec__12912,(1),null);var h = cljs.core.nth.call(null,vec__12912,(2),null);var l = cljs.core.nth.call(null,vec__12912,(3),null);var c = cljs.core.nth.call(null,vec__12912,(4),null);var v = cljs.core.nth.call(null,vec__12912,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__12913){var vec__12914 = p__12913;var d = cljs.core.nth.call(null,vec__12914,(0),null);var o = cljs.core.nth.call(null,vec__12914,(1),null);var h = cljs.core.nth.call(null,vec__12914,(2),null);var l = cljs.core.nth.call(null,vec__12914,(3),null);var c = cljs.core.nth.call(null,vec__12914,(4),null);var v = cljs.core.nth.call(null,vec__12914,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj12952 = {"url":"/proxy","dataType":"text","data":(function (){var obj12954 = {"url":url};return obj12954;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_12961){var state_val_12962 = (state_12961[(1)]);if((state_val_12962 === (2)))
{var inst_12958 = (state_12961[(2)]);var inst_12959 = cljs.core.async.close_BANG_.call(null,ret);var state_12961__$1 = (function (){var statearr_12963 = state_12961;(statearr_12963[(7)] = inst_12958);
return statearr_12963;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12961__$1,inst_12959);
} else
{if((state_val_12962 === (1)))
{var inst_12955 = [null,data];var inst_12956 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12955,null));var state_12961__$1 = state_12961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12961__$1,(2),ret,inst_12956);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12967 = [null,null,null,null,null,null,null,null];(statearr_12967[(0)] = state_machine__6189__auto__);
(statearr_12967[(1)] = (1));
return statearr_12967;
});
var state_machine__6189__auto____1 = (function (state_12961){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12961);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12968){if((e12968 instanceof Object))
{var ex__6192__auto__ = e12968;var statearr_12969_12987 = state_12961;(statearr_12969_12987[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12988 = state_12961;
state_12961 = G__12988;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12961){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_12970 = f__6204__auto__.call(null);(statearr_12970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_12977){var state_val_12978 = (state_12977[(1)]);if((state_val_12978 === (2)))
{var inst_12974 = (state_12977[(2)]);var inst_12975 = cljs.core.async.close_BANG_.call(null,ret);var state_12977__$1 = (function (){var statearr_12979 = state_12977;(statearr_12979[(7)] = inst_12974);
return statearr_12979;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12977__$1,inst_12975);
} else
{if((state_val_12978 === (1)))
{var inst_12971 = [err];var inst_12972 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12971,null));var state_12977__$1 = state_12977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12977__$1,(2),ret,inst_12972);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12983 = [null,null,null,null,null,null,null,null];(statearr_12983[(0)] = state_machine__6189__auto__);
(statearr_12983[(1)] = (1));
return statearr_12983;
});
var state_machine__6189__auto____1 = (function (state_12977){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12984){if((e12984 instanceof Object))
{var ex__6192__auto__ = e12984;var statearr_12985_12989 = state_12977;(statearr_12985_12989[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12990 = state_12977;
state_12977 = G__12990;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12977){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_12986 = f__6204__auto__.call(null);(statearr_12986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj12952;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__12999(s__13000){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__13000__$1 = s__13000;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13000__$1);if(temp__4126__auto__)
{var s__13000__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13000__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13000__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13002 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13001 = (0);while(true){
if((i__13001 < size__4275__auto__))
{var vec__13005 = cljs.core._nth.call(null,c__4274__auto__,i__13001);var _ = cljs.core.nth.call(null,vec__13005,(0),null);var date = cljs.core.nth.call(null,vec__13005,(1),null);var open = cljs.core.nth.call(null,vec__13005,(2),null);var high = cljs.core.nth.call(null,vec__13005,(3),null);var low = cljs.core.nth.call(null,vec__13005,(4),null);var close = cljs.core.nth.call(null,vec__13005,(5),null);var volume = cljs.core.nth.call(null,vec__13005,(6),null);cljs.core.chunk_append.call(null,b__13002,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__13007 = (i__13001 + (1));
i__13001 = G__13007;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13002),iter__12999.call(null,cljs.core.chunk_rest.call(null,s__13000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13002),null);
}
} else
{var vec__13006 = cljs.core.first.call(null,s__13000__$2);var _ = cljs.core.nth.call(null,vec__13006,(0),null);var date = cljs.core.nth.call(null,vec__13006,(1),null);var open = cljs.core.nth.call(null,vec__13006,(2),null);var high = cljs.core.nth.call(null,vec__13006,(3),null);var low = cljs.core.nth.call(null,vec__13006,(4),null);var close = cljs.core.nth.call(null,vec__13006,(5),null);var volume = cljs.core.nth.call(null,vec__13006,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__12999.call(null,cljs.core.rest.call(null,s__13000__$2)));
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
stock.tool.goog_historical_info = (function goog_historical_info(all,id,startdate,start,num){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_13085){var state_val_13086 = (state_13085[(1)]);if((state_val_13086 === (9)))
{var inst_13075 = (state_13085[(2)]);var state_13085__$1 = state_13085;var statearr_13087_13104 = state_13085__$1;(statearr_13087_13104[(2)] = inst_13075);
(statearr_13087_13104[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13086 === (8)))
{var inst_13081 = (state_13085[(2)]);var state_13085__$1 = state_13085;var statearr_13088_13105 = state_13085__$1;(statearr_13088_13105[(2)] = inst_13081);
(statearr_13088_13105[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13086 === (7)))
{var inst_13067 = (state_13085[(7)]);var inst_13077 = cljs.core.concat.call(null,all,inst_13067);var inst_13078 = [null,inst_13077];var inst_13079 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13078,null));var state_13085__$1 = state_13085;var statearr_13089_13106 = state_13085__$1;(statearr_13089_13106[(2)] = inst_13079);
(statearr_13089_13106[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13086 === (6)))
{var inst_13067 = (state_13085[(7)]);var inst_13071 = cljs.core.concat.call(null,all,inst_13067);var inst_13072 = (start + num);var inst_13073 = goog_historical_info.call(null,inst_13071,id,startdate,inst_13072,num);var state_13085__$1 = state_13085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13085__$1,(9),inst_13073);
} else
{if((state_val_13086 === (5)))
{var inst_13083 = (state_13085[(2)]);var state_13085__$1 = state_13085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13085__$1,inst_13083);
} else
{if((state_val_13086 === (4)))
{var inst_13067 = (state_13085[(7)]);var inst_13062 = (state_13085[(8)]);var inst_13067__$1 = stock.tool.parse_historical.call(null,inst_13062);var inst_13068 = cljs.core.count.call(null,inst_13067__$1);var inst_13069 = cljs.core._EQ_.call(null,num,inst_13068);var state_13085__$1 = (function (){var statearr_13090 = state_13085;(statearr_13090[(7)] = inst_13067__$1);
return statearr_13090;
})();if(inst_13069)
{var statearr_13091_13107 = state_13085__$1;(statearr_13091_13107[(1)] = (6));
} else
{var statearr_13092_13108 = state_13085__$1;(statearr_13092_13108[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13086 === (3)))
{var inst_13061 = (state_13085[(9)]);var inst_13064 = [inst_13061];var inst_13065 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13064,null));var state_13085__$1 = state_13085;var statearr_13093_13109 = state_13085__$1;(statearr_13093_13109[(2)] = inst_13065);
(statearr_13093_13109[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13086 === (2)))
{var inst_13061 = (state_13085[(9)]);var inst_13060 = (state_13085[(2)]);var inst_13061__$1 = cljs.core.nth.call(null,inst_13060,(0),null);var inst_13062 = cljs.core.nth.call(null,inst_13060,(1),null);var state_13085__$1 = (function (){var statearr_13094 = state_13085;(statearr_13094[(9)] = inst_13061__$1);
(statearr_13094[(8)] = inst_13062);
return statearr_13094;
})();if(cljs.core.truth_(inst_13061__$1))
{var statearr_13095_13110 = state_13085__$1;(statearr_13095_13110[(1)] = (3));
} else
{var statearr_13096_13111 = state_13085__$1;(statearr_13096_13111[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13086 === (1)))
{var inst_13057 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_13058 = stock.tool.content.call(null,inst_13057);var state_13085__$1 = state_13085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13085__$1,(2),inst_13058);
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
var state_machine__6189__auto____0 = (function (){var statearr_13100 = [null,null,null,null,null,null,null,null,null,null];(statearr_13100[(0)] = state_machine__6189__auto__);
(statearr_13100[(1)] = (1));
return statearr_13100;
});
var state_machine__6189__auto____1 = (function (state_13085){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13085);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13101){if((e13101 instanceof Object))
{var ex__6192__auto__ = e13101;var statearr_13102_13112 = state_13085;(statearr_13102_13112[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13113 = state_13085;
state_13085 = G__13113;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13085){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13103 = f__6204__auto__.call(null);(statearr_13103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__13115 = kline;var date__$1 = cljs.core.nth.call(null,vec__13115,(0),null);var _ = cljs.core.nth.call(null,vec__13115,(1),null);var ___$1 = cljs.core.nth.call(null,vec__13115,(2),null);var ___$2 = cljs.core.nth.call(null,vec__13115,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13115,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13115,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__13117 = kline;var _ = cljs.core.nth.call(null,vec__13117,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13117,(1),null);var high__$1 = cljs.core.nth.call(null,vec__13117,(2),null);var ___$2 = cljs.core.nth.call(null,vec__13117,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13117,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13117,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__13119 = kline;var _ = cljs.core.nth.call(null,vec__13119,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13119,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13119,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13119,(3),null);var open__$1 = cljs.core.nth.call(null,vec__13119,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13119,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__13121 = kline;var _ = cljs.core.nth.call(null,vec__13121,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13121,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13121,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13121,(3),null);var close__$1 = cljs.core.nth.call(null,vec__13121,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13121,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__13123 = kline;var _ = cljs.core.nth.call(null,vec__13123,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13123,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13123,(2),null);var low__$1 = cljs.core.nth.call(null,vec__13123,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13123,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13123,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__13125 = kline;var _ = cljs.core.nth.call(null,vec__13125,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13125,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13125,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13125,(3),null);var ___$4 = cljs.core.nth.call(null,vec__13125,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__13125,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__13127 = kline;var _ = cljs.core.nth.call(null,vec__13127,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13127,(1),null);var high = cljs.core.nth.call(null,vec__13127,(2),null);var low = cljs.core.nth.call(null,vec__13127,(3),null);var ___$2 = cljs.core.nth.call(null,vec__13127,(4),null);var ___$3 = cljs.core.nth.call(null,vec__13127,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__13129 = kline;var _ = cljs.core.nth.call(null,vec__13129,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13129,(1),null);var high = cljs.core.nth.call(null,vec__13129,(2),null);var low = cljs.core.nth.call(null,vec__13129,(3),null);var close = cljs.core.nth.call(null,vec__13129,(4),null);var ___$2 = cljs.core.nth.call(null,vec__13129,(5),null);return (((high + low) + close) / (3));
}
});
