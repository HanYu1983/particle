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
return (function iter__34930(s__34931){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__34931__$1 = s__34931;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34931__$1);if(temp__4126__auto__)
{var s__34931__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34931__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__34931__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__34933 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__34932 = (0);while(true){
if((i__34932 < size__4275__auto__))
{var vec__34936 = cljs.core._nth.call(null,c__4274__auto__,i__34932);var _ = cljs.core.nth.call(null,vec__34936,(0),null);var date = cljs.core.nth.call(null,vec__34936,(1),null);var close = cljs.core.nth.call(null,vec__34936,(2),null);var high = cljs.core.nth.call(null,vec__34936,(3),null);var low = cljs.core.nth.call(null,vec__34936,(4),null);var open = cljs.core.nth.call(null,vec__34936,(5),null);var volume = cljs.core.nth.call(null,vec__34936,(6),null);cljs.core.chunk_append.call(null,b__34933,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__34938 = (i__34932 + (1));
i__34932 = G__34938;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34933),iter__34930.call(null,cljs.core.chunk_rest.call(null,s__34931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34933),null);
}
} else
{var vec__34937 = cljs.core.first.call(null,s__34931__$2);var _ = cljs.core.nth.call(null,vec__34937,(0),null);var date = cljs.core.nth.call(null,vec__34937,(1),null);var close = cljs.core.nth.call(null,vec__34937,(2),null);var high = cljs.core.nth.call(null,vec__34937,(3),null);var low = cljs.core.nth.call(null,vec__34937,(4),null);var open = cljs.core.nth.call(null,vec__34937,(5),null);var volume = cljs.core.nth.call(null,vec__34937,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__34930.call(null,cljs.core.rest.call(null,s__34931__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__34951){var vec__34952 = p__34951;var d = cljs.core.nth.call(null,vec__34952,(0),null);var o = cljs.core.nth.call(null,vec__34952,(1),null);var h = cljs.core.nth.call(null,vec__34952,(2),null);var l = cljs.core.nth.call(null,vec__34952,(3),null);var c = cljs.core.nth.call(null,vec__34952,(4),null);var v = cljs.core.nth.call(null,vec__34952,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__34953,p__34954){var vec__34955 = p__34953;var d1 = cljs.core.nth.call(null,vec__34955,(0),null);var _ = cljs.core.nth.call(null,vec__34955,(1),null);var ___$1 = cljs.core.nth.call(null,vec__34955,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34955,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34955,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34955,(5),null);var prev = vec__34955;var vec__34956 = p__34954;var d2 = cljs.core.nth.call(null,vec__34956,(0),null);var o = cljs.core.nth.call(null,vec__34956,(1),null);var h = cljs.core.nth.call(null,vec__34956,(2),null);var l = cljs.core.nth.call(null,vec__34956,(3),null);var c = cljs.core.nth.call(null,vec__34956,(4),null);var v = cljs.core.nth.call(null,vec__34956,(5),null);var curr = vec__34956;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__34957,p__34958){var vec__34959 = p__34957;var d1 = cljs.core.nth.call(null,vec__34959,(0),null);var _ = cljs.core.nth.call(null,vec__34959,(1),null);var ___$1 = cljs.core.nth.call(null,vec__34959,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34959,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34959,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34959,(5),null);var prev = vec__34959;var vec__34960 = p__34958;var d2 = cljs.core.nth.call(null,vec__34960,(0),null);var o = cljs.core.nth.call(null,vec__34960,(1),null);var h = cljs.core.nth.call(null,vec__34960,(2),null);var l = cljs.core.nth.call(null,vec__34960,(3),null);var c = cljs.core.nth.call(null,vec__34960,(4),null);var v = cljs.core.nth.call(null,vec__34960,(5),null);var curr = vec__34960;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.map.call(null,((function (pass1,pass2,pass3){
return (function (p__34961){var vec__34962 = p__34961;var d = cljs.core.nth.call(null,vec__34962,(0),null);var o = cljs.core.nth.call(null,vec__34962,(1),null);var h = cljs.core.nth.call(null,vec__34962,(2),null);var l = cljs.core.nth.call(null,vec__34962,(3),null);var c = cljs.core.nth.call(null,vec__34962,(4),null);var v = cljs.core.nth.call(null,vec__34962,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3))
,pass3);return pass4;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj35000 = {"url":"/proxy","dataType":"text","data":(function (){var obj35002 = {"url":url};return obj35002;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_35009){var state_val_35010 = (state_35009[(1)]);if((state_val_35010 === (2)))
{var inst_35006 = (state_35009[(2)]);var inst_35007 = cljs.core.async.close_BANG_.call(null,ret);var state_35009__$1 = (function (){var statearr_35011 = state_35009;(statearr_35011[(7)] = inst_35006);
return statearr_35011;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35009__$1,inst_35007);
} else
{if((state_val_35010 === (1)))
{var inst_35003 = [null,data];var inst_35004 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35003,null));var state_35009__$1 = state_35009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35009__$1,(2),ret,inst_35004);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35015 = [null,null,null,null,null,null,null,null];(statearr_35015[(0)] = state_machine__6188__auto__);
(statearr_35015[(1)] = (1));
return statearr_35015;
});
var state_machine__6188__auto____1 = (function (state_35009){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35009);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35016){if((e35016 instanceof Object))
{var ex__6191__auto__ = e35016;var statearr_35017_35035 = state_35009;(statearr_35017_35035[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35036 = state_35009;
state_35009 = G__35036;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35009){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_35018 = f__6203__auto__.call(null);(statearr_35018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_35025){var state_val_35026 = (state_35025[(1)]);if((state_val_35026 === (2)))
{var inst_35022 = (state_35025[(2)]);var inst_35023 = cljs.core.async.close_BANG_.call(null,ret);var state_35025__$1 = (function (){var statearr_35027 = state_35025;(statearr_35027[(7)] = inst_35022);
return statearr_35027;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35025__$1,inst_35023);
} else
{if((state_val_35026 === (1)))
{var inst_35019 = [err];var inst_35020 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35019,null));var state_35025__$1 = state_35025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35025__$1,(2),ret,inst_35020);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35031 = [null,null,null,null,null,null,null,null];(statearr_35031[(0)] = state_machine__6188__auto__);
(statearr_35031[(1)] = (1));
return statearr_35031;
});
var state_machine__6188__auto____1 = (function (state_35025){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35025);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35032){if((e35032 instanceof Object))
{var ex__6191__auto__ = e35032;var statearr_35033_35037 = state_35025;(statearr_35033_35037[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35038 = state_35025;
state_35025 = G__35038;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35025){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_35034 = f__6203__auto__.call(null);(statearr_35034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj35000;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__35047(s__35048){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__35048__$1 = s__35048;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35048__$1);if(temp__4126__auto__)
{var s__35048__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35048__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__35048__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__35050 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__35049 = (0);while(true){
if((i__35049 < size__4275__auto__))
{var vec__35053 = cljs.core._nth.call(null,c__4274__auto__,i__35049);var _ = cljs.core.nth.call(null,vec__35053,(0),null);var date = cljs.core.nth.call(null,vec__35053,(1),null);var open = cljs.core.nth.call(null,vec__35053,(2),null);var high = cljs.core.nth.call(null,vec__35053,(3),null);var low = cljs.core.nth.call(null,vec__35053,(4),null);var close = cljs.core.nth.call(null,vec__35053,(5),null);var volume = cljs.core.nth.call(null,vec__35053,(6),null);cljs.core.chunk_append.call(null,b__35050,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__35055 = (i__35049 + (1));
i__35049 = G__35055;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35050),iter__35047.call(null,cljs.core.chunk_rest.call(null,s__35048__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35050),null);
}
} else
{var vec__35054 = cljs.core.first.call(null,s__35048__$2);var _ = cljs.core.nth.call(null,vec__35054,(0),null);var date = cljs.core.nth.call(null,vec__35054,(1),null);var open = cljs.core.nth.call(null,vec__35054,(2),null);var high = cljs.core.nth.call(null,vec__35054,(3),null);var low = cljs.core.nth.call(null,vec__35054,(4),null);var close = cljs.core.nth.call(null,vec__35054,(5),null);var volume = cljs.core.nth.call(null,vec__35054,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__35047.call(null,cljs.core.rest.call(null,s__35048__$2)));
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
return (function (state_35133){var state_val_35134 = (state_35133[(1)]);if((state_val_35134 === (9)))
{var inst_35123 = (state_35133[(2)]);var state_35133__$1 = state_35133;var statearr_35135_35152 = state_35133__$1;(statearr_35135_35152[(2)] = inst_35123);
(statearr_35135_35152[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35134 === (8)))
{var inst_35129 = (state_35133[(2)]);var state_35133__$1 = state_35133;var statearr_35136_35153 = state_35133__$1;(statearr_35136_35153[(2)] = inst_35129);
(statearr_35136_35153[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35134 === (7)))
{var inst_35115 = (state_35133[(7)]);var inst_35125 = cljs.core.concat.call(null,all,inst_35115);var inst_35126 = [null,inst_35125];var inst_35127 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35126,null));var state_35133__$1 = state_35133;var statearr_35137_35154 = state_35133__$1;(statearr_35137_35154[(2)] = inst_35127);
(statearr_35137_35154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35134 === (6)))
{var inst_35115 = (state_35133[(7)]);var inst_35119 = cljs.core.concat.call(null,all,inst_35115);var inst_35120 = (start + num);var inst_35121 = goog_historical_info.call(null,inst_35119,id,startdate,inst_35120,num);var state_35133__$1 = state_35133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35133__$1,(9),inst_35121);
} else
{if((state_val_35134 === (5)))
{var inst_35131 = (state_35133[(2)]);var state_35133__$1 = state_35133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35133__$1,inst_35131);
} else
{if((state_val_35134 === (4)))
{var inst_35110 = (state_35133[(8)]);var inst_35115 = (state_35133[(7)]);var inst_35115__$1 = stock.tool.parse_historical.call(null,inst_35110);var inst_35116 = cljs.core.count.call(null,inst_35115__$1);var inst_35117 = cljs.core._EQ_.call(null,num,inst_35116);var state_35133__$1 = (function (){var statearr_35138 = state_35133;(statearr_35138[(7)] = inst_35115__$1);
return statearr_35138;
})();if(inst_35117)
{var statearr_35139_35155 = state_35133__$1;(statearr_35139_35155[(1)] = (6));
} else
{var statearr_35140_35156 = state_35133__$1;(statearr_35140_35156[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35134 === (3)))
{var inst_35109 = (state_35133[(9)]);var inst_35112 = [inst_35109];var inst_35113 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35112,null));var state_35133__$1 = state_35133;var statearr_35141_35157 = state_35133__$1;(statearr_35141_35157[(2)] = inst_35113);
(statearr_35141_35157[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35134 === (2)))
{var inst_35109 = (state_35133[(9)]);var inst_35108 = (state_35133[(2)]);var inst_35109__$1 = cljs.core.nth.call(null,inst_35108,(0),null);var inst_35110 = cljs.core.nth.call(null,inst_35108,(1),null);var state_35133__$1 = (function (){var statearr_35142 = state_35133;(statearr_35142[(9)] = inst_35109__$1);
(statearr_35142[(8)] = inst_35110);
return statearr_35142;
})();if(cljs.core.truth_(inst_35109__$1))
{var statearr_35143_35158 = state_35133__$1;(statearr_35143_35158[(1)] = (3));
} else
{var statearr_35144_35159 = state_35133__$1;(statearr_35144_35159[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35134 === (1)))
{var inst_35105 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_35106 = stock.tool.content.call(null,inst_35105);var state_35133__$1 = state_35133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35133__$1,(2),inst_35106);
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
var state_machine__6188__auto____0 = (function (){var statearr_35148 = [null,null,null,null,null,null,null,null,null,null];(statearr_35148[(0)] = state_machine__6188__auto__);
(statearr_35148[(1)] = (1));
return statearr_35148;
});
var state_machine__6188__auto____1 = (function (state_35133){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35149){if((e35149 instanceof Object))
{var ex__6191__auto__ = e35149;var statearr_35150_35160 = state_35133;(statearr_35150_35160[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35161 = state_35133;
state_35133 = G__35161;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35133){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_35151 = f__6203__auto__.call(null);(statearr_35151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__35163 = kline;var date__$1 = cljs.core.nth.call(null,vec__35163,(0),null);var _ = cljs.core.nth.call(null,vec__35163,(1),null);var ___$1 = cljs.core.nth.call(null,vec__35163,(2),null);var ___$2 = cljs.core.nth.call(null,vec__35163,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35163,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35163,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__35165 = kline;var _ = cljs.core.nth.call(null,vec__35165,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35165,(1),null);var high__$1 = cljs.core.nth.call(null,vec__35165,(2),null);var ___$2 = cljs.core.nth.call(null,vec__35165,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35165,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35165,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__35167 = kline;var _ = cljs.core.nth.call(null,vec__35167,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35167,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35167,(2),null);var ___$3 = cljs.core.nth.call(null,vec__35167,(3),null);var open__$1 = cljs.core.nth.call(null,vec__35167,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35167,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__35169 = kline;var _ = cljs.core.nth.call(null,vec__35169,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35169,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35169,(2),null);var ___$3 = cljs.core.nth.call(null,vec__35169,(3),null);var close__$1 = cljs.core.nth.call(null,vec__35169,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35169,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__35171 = kline;var _ = cljs.core.nth.call(null,vec__35171,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35171,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35171,(2),null);var low__$1 = cljs.core.nth.call(null,vec__35171,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35171,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35171,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__35173 = kline;var _ = cljs.core.nth.call(null,vec__35173,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35173,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35173,(2),null);var ___$3 = cljs.core.nth.call(null,vec__35173,(3),null);var ___$4 = cljs.core.nth.call(null,vec__35173,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__35173,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__35175 = kline;var _ = cljs.core.nth.call(null,vec__35175,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35175,(1),null);var high = cljs.core.nth.call(null,vec__35175,(2),null);var low = cljs.core.nth.call(null,vec__35175,(3),null);var ___$2 = cljs.core.nth.call(null,vec__35175,(4),null);var ___$3 = cljs.core.nth.call(null,vec__35175,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__35177 = kline;var _ = cljs.core.nth.call(null,vec__35177,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35177,(1),null);var high = cljs.core.nth.call(null,vec__35177,(2),null);var low = cljs.core.nth.call(null,vec__35177,(3),null);var close = cljs.core.nth.call(null,vec__35177,(4),null);var ___$2 = cljs.core.nth.call(null,vec__35177,(5),null);return (((high + low) + close) / (3));
}
});
