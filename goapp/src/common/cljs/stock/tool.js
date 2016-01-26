// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj33890 = {"url":"/proxy","dataType":"text","data":(function (){var obj33892 = {"url":url};return obj33892;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_33899){var state_val_33900 = (state_33899[(1)]);if((state_val_33900 === (2)))
{var inst_33896 = (state_33899[(2)]);var inst_33897 = cljs.core.async.close_BANG_.call(null,ret);var state_33899__$1 = (function (){var statearr_33901 = state_33899;(statearr_33901[(7)] = inst_33896);
return statearr_33901;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33899__$1,inst_33897);
} else
{if((state_val_33900 === (1)))
{var inst_33893 = [null,data];var inst_33894 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33893,null));var state_33899__$1 = state_33899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33899__$1,(2),ret,inst_33894);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_33905 = [null,null,null,null,null,null,null,null];(statearr_33905[(0)] = state_machine__6188__auto__);
(statearr_33905[(1)] = (1));
return statearr_33905;
});
var state_machine__6188__auto____1 = (function (state_33899){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_33899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e33906){if((e33906 instanceof Object))
{var ex__6191__auto__ = e33906;var statearr_33907_33925 = state_33899;(statearr_33907_33925[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33926 = state_33899;
state_33899 = G__33926;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_33899){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_33899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_33908 = f__6203__auto__.call(null);(statearr_33908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_33908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_33915){var state_val_33916 = (state_33915[(1)]);if((state_val_33916 === (2)))
{var inst_33912 = (state_33915[(2)]);var inst_33913 = cljs.core.async.close_BANG_.call(null,ret);var state_33915__$1 = (function (){var statearr_33917 = state_33915;(statearr_33917[(7)] = inst_33912);
return statearr_33917;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33915__$1,inst_33913);
} else
{if((state_val_33916 === (1)))
{var inst_33909 = [err];var inst_33910 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33909,null));var state_33915__$1 = state_33915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33915__$1,(2),ret,inst_33910);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_33921 = [null,null,null,null,null,null,null,null];(statearr_33921[(0)] = state_machine__6188__auto__);
(statearr_33921[(1)] = (1));
return statearr_33921;
});
var state_machine__6188__auto____1 = (function (state_33915){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_33915);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e33922){if((e33922 instanceof Object))
{var ex__6191__auto__ = e33922;var statearr_33923_33927 = state_33915;(statearr_33923_33927[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33928 = state_33915;
state_33915 = G__33928;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_33915){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_33915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_33924 = f__6203__auto__.call(null);(statearr_33924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_33924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj33890;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){try{var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = (parseFloat(json.vo.replace(/M/,"")) * (1000000));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e33930){if((e33930 instanceof Object))
{var e = e33930;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33930;
} else
{return null;
}
}
}});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_33981){var state_val_33982 = (state_33981[(1)]);if((state_val_33982 === (5)))
{var inst_33979 = (state_33981[(2)]);var state_33981__$1 = state_33981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33981__$1,inst_33979);
} else
{if((state_val_33982 === (4)))
{var inst_33970 = (state_33981[(7)]);var inst_33975 = stock.tool.parse_info.call(null,inst_33970);var inst_33976 = [null,inst_33975];var inst_33977 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33976,null));var state_33981__$1 = state_33981;var statearr_33983_33995 = state_33981__$1;(statearr_33983_33995[(2)] = inst_33977);
(statearr_33983_33995[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33982 === (3)))
{var inst_33968 = (state_33981[(8)]);var inst_33972 = [inst_33968];var inst_33973 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33972,null));var state_33981__$1 = state_33981;var statearr_33984_33996 = state_33981__$1;(statearr_33984_33996[(2)] = inst_33973);
(statearr_33984_33996[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33982 === (2)))
{var inst_33968 = (state_33981[(8)]);var inst_33967 = (state_33981[(2)]);var inst_33968__$1 = cljs.core.nth.call(null,inst_33967,(0),null);var inst_33969 = cljs.core.nth.call(null,inst_33967,(1),null);var inst_33970 = inst_33969.replace(/\/\//,"");var state_33981__$1 = (function (){var statearr_33985 = state_33981;(statearr_33985[(7)] = inst_33970);
(statearr_33985[(8)] = inst_33968__$1);
return statearr_33985;
})();if(cljs.core.truth_(inst_33968__$1))
{var statearr_33986_33997 = state_33981__$1;(statearr_33986_33997[(1)] = (3));
} else
{var statearr_33987_33998 = state_33981__$1;(statearr_33987_33998[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33982 === (1)))
{var inst_33964 = stock.tool.goog_finance_info_url.call(null,id);var inst_33965 = stock.tool.content.call(null,inst_33964);var state_33981__$1 = state_33981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33981__$1,(2),inst_33965);
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
var state_machine__6188__auto____0 = (function (){var statearr_33991 = [null,null,null,null,null,null,null,null,null];(statearr_33991[(0)] = state_machine__6188__auto__);
(statearr_33991[(1)] = (1));
return statearr_33991;
});
var state_machine__6188__auto____1 = (function (state_33981){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_33981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e33992){if((e33992 instanceof Object))
{var ex__6191__auto__ = e33992;var statearr_33993_33999 = state_33981;(statearr_33993_33999[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34000 = state_33981;
state_33981 = G__34000;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_33981){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_33981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_33994 = f__6203__auto__.call(null);(statearr_33994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_33994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 結合今天，如果今天已經抓到，就不結合
*/
stock.tool.combineToday = (function combineToday(todayLine,li){if(cljs.core.truth_(todayLine))
{var vec__34003 = cljs.core.first.call(null,li);var maybe_today = cljs.core.nth.call(null,vec__34003,(0),null);var _ = cljs.core.nth.call(null,vec__34003,(1),null);var ___$1 = cljs.core.nth.call(null,vec__34003,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34003,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34003,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34003,(5),null);var vec__34004 = todayLine;var today_date = cljs.core.nth.call(null,vec__34004,(0),null);var ___$5 = cljs.core.nth.call(null,vec__34004,(1),null);var ___$6 = cljs.core.nth.call(null,vec__34004,(2),null);var ___$7 = cljs.core.nth.call(null,vec__34004,(3),null);var ___$8 = cljs.core.nth.call(null,vec__34004,(4),null);var ___$9 = cljs.core.nth.call(null,vec__34004,(5),null);if(cljs.core.not.call(null,(new Date(today_date)).clearTime().equals((new Date(maybe_today)).clearTime())))
{return cljs.core.cons.call(null,todayLine,li);
} else
{return li;
}
} else
{return li;
}
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),content.replace(/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__34013(s__34014){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__34014__$1 = s__34014;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34014__$1);if(temp__4126__auto__)
{var s__34014__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34014__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__34014__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__34016 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__34015 = (0);while(true){
if((i__34015 < size__4275__auto__))
{var vec__34019 = cljs.core._nth.call(null,c__4274__auto__,i__34015);var _ = cljs.core.nth.call(null,vec__34019,(0),null);var date = cljs.core.nth.call(null,vec__34019,(1),null);var close = cljs.core.nth.call(null,vec__34019,(2),null);var high = cljs.core.nth.call(null,vec__34019,(3),null);var low = cljs.core.nth.call(null,vec__34019,(4),null);var open = cljs.core.nth.call(null,vec__34019,(5),null);var volume = cljs.core.nth.call(null,vec__34019,(6),null);cljs.core.chunk_append.call(null,b__34016,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__34021 = (i__34015 + (1));
i__34015 = G__34021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34016),iter__34013.call(null,cljs.core.chunk_rest.call(null,s__34014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34016),null);
}
} else
{var vec__34020 = cljs.core.first.call(null,s__34014__$2);var _ = cljs.core.nth.call(null,vec__34020,(0),null);var date = cljs.core.nth.call(null,vec__34020,(1),null);var close = cljs.core.nth.call(null,vec__34020,(2),null);var high = cljs.core.nth.call(null,vec__34020,(3),null);var low = cljs.core.nth.call(null,vec__34020,(4),null);var open = cljs.core.nth.call(null,vec__34020,(5),null);var volume = cljs.core.nth.call(null,vec__34020,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__34013.call(null,cljs.core.rest.call(null,s__34014__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__34036){var vec__34037 = p__34036;var d = cljs.core.nth.call(null,vec__34037,(0),null);var o = cljs.core.nth.call(null,vec__34037,(1),null);var h = cljs.core.nth.call(null,vec__34037,(2),null);var l = cljs.core.nth.call(null,vec__34037,(3),null);var c = cljs.core.nth.call(null,vec__34037,(4),null);var v = cljs.core.nth.call(null,vec__34037,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__34038,p__34039){var vec__34040 = p__34038;var d1 = cljs.core.nth.call(null,vec__34040,(0),null);var _ = cljs.core.nth.call(null,vec__34040,(1),null);var ___$1 = cljs.core.nth.call(null,vec__34040,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34040,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34040,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34040,(5),null);var prev = vec__34040;var vec__34041 = p__34039;var d2 = cljs.core.nth.call(null,vec__34041,(0),null);var o = cljs.core.nth.call(null,vec__34041,(1),null);var h = cljs.core.nth.call(null,vec__34041,(2),null);var l = cljs.core.nth.call(null,vec__34041,(3),null);var c = cljs.core.nth.call(null,vec__34041,(4),null);var v = cljs.core.nth.call(null,vec__34041,(5),null);var curr = vec__34041;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__34042,p__34043){var vec__34044 = p__34042;var d1 = cljs.core.nth.call(null,vec__34044,(0),null);var _ = cljs.core.nth.call(null,vec__34044,(1),null);var ___$1 = cljs.core.nth.call(null,vec__34044,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34044,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34044,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34044,(5),null);var prev = vec__34044;var vec__34045 = p__34043;var d2 = cljs.core.nth.call(null,vec__34045,(0),null);var o = cljs.core.nth.call(null,vec__34045,(1),null);var h = cljs.core.nth.call(null,vec__34045,(2),null);var l = cljs.core.nth.call(null,vec__34045,(3),null);var c = cljs.core.nth.call(null,vec__34045,(4),null);var v = cljs.core.nth.call(null,vec__34045,(5),null);var curr = vec__34045;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__34046){var vec__34047 = p__34046;var d = cljs.core.nth.call(null,vec__34047,(0),null);var o = cljs.core.nth.call(null,vec__34047,(1),null);var h = cljs.core.nth.call(null,vec__34047,(2),null);var l = cljs.core.nth.call(null,vec__34047,(3),null);var c = cljs.core.nth.call(null,vec__34047,(4),null);var v = cljs.core.nth.call(null,vec__34047,(5),null);return true;
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__34048){var vec__34049 = p__34048;var d = cljs.core.nth.call(null,vec__34049,(0),null);var o = cljs.core.nth.call(null,vec__34049,(1),null);var h = cljs.core.nth.call(null,vec__34049,(2),null);var l = cljs.core.nth.call(null,vec__34049,(3),null);var c = cljs.core.nth.call(null,vec__34049,(4),null);var v = cljs.core.nth.call(null,vec__34049,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.get_goog_stock_prices = (function get_goog_stock_prices(id,range){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_34113){var state_val_34114 = (state_34113[(1)]);if((state_val_34114 === (6)))
{var inst_34105 = (state_34113[(7)]);var inst_34109 = (state_34113[(2)]);var inst_34110 = [inst_34109,inst_34105];var inst_34111 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34110,null));var state_34113__$1 = state_34113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34113__$1,inst_34111);
} else
{if((state_val_34114 === (5)))
{var inst_34100 = (state_34113[(8)]);var state_34113__$1 = state_34113;var statearr_34115_34128 = state_34113__$1;(statearr_34115_34128[(2)] = inst_34100);
(statearr_34115_34128[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34114 === (4)))
{var inst_34095 = (state_34113[(9)]);var state_34113__$1 = state_34113;var statearr_34116_34129 = state_34113__$1;(statearr_34116_34129[(2)] = inst_34095);
(statearr_34116_34129[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34114 === (3)))
{var inst_34095 = (state_34113[(9)]);var inst_34096 = (state_34113[(10)]);var inst_34099 = (state_34113[(2)]);var inst_34100 = cljs.core.nth.call(null,inst_34099,(0),null);var inst_34101 = cljs.core.nth.call(null,inst_34099,(1),null);var inst_34102 = stock.tool.parse_getprices.call(null,inst_34096);var inst_34103 = stock.tool.format_getprices.call(null,(86400),inst_34102);var inst_34104 = cljs.core.reverse.call(null,inst_34103);var inst_34105 = stock.tool.combineToday.call(null,inst_34101,inst_34104);var state_34113__$1 = (function (){var statearr_34117 = state_34113;(statearr_34117[(8)] = inst_34100);
(statearr_34117[(7)] = inst_34105);
return statearr_34117;
})();if(cljs.core.truth_(inst_34095))
{var statearr_34118_34130 = state_34113__$1;(statearr_34118_34130[(1)] = (4));
} else
{var statearr_34119_34131 = state_34113__$1;(statearr_34119_34131[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34114 === (2)))
{var inst_34094 = (state_34113[(2)]);var inst_34095 = cljs.core.nth.call(null,inst_34094,(0),null);var inst_34096 = cljs.core.nth.call(null,inst_34094,(1),null);var inst_34097 = stock.tool.todayPrice.call(null,id);var state_34113__$1 = (function (){var statearr_34120 = state_34113;(statearr_34120[(9)] = inst_34095);
(statearr_34120[(10)] = inst_34096);
return statearr_34120;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34113__$1,(3),inst_34097);
} else
{if((state_val_34114 === (1)))
{var inst_34091 = stock.tool.goog_finance_getprices_url.call(null,id,range);var inst_34092 = stock.tool.content.call(null,inst_34091);var state_34113__$1 = state_34113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34113__$1,(2),inst_34092);
} else
{return null;
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
var state_machine__6188__auto____0 = (function (){var statearr_34124 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34124[(0)] = state_machine__6188__auto__);
(statearr_34124[(1)] = (1));
return statearr_34124;
});
var state_machine__6188__auto____1 = (function (state_34113){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34113);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34125){if((e34125 instanceof Object))
{var ex__6191__auto__ = e34125;var statearr_34126_34132 = state_34113;(statearr_34126_34132[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34133 = state_34113;
state_34113 = G__34133;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34113){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34127 = f__6203__auto__.call(null);(statearr_34127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),content.replace(/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__34142(s__34143){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__34143__$1 = s__34143;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34143__$1);if(temp__4126__auto__)
{var s__34143__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34143__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__34143__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__34145 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__34144 = (0);while(true){
if((i__34144 < size__4275__auto__))
{var vec__34148 = cljs.core._nth.call(null,c__4274__auto__,i__34144);var _ = cljs.core.nth.call(null,vec__34148,(0),null);var date = cljs.core.nth.call(null,vec__34148,(1),null);var open = cljs.core.nth.call(null,vec__34148,(2),null);var high = cljs.core.nth.call(null,vec__34148,(3),null);var low = cljs.core.nth.call(null,vec__34148,(4),null);var close = cljs.core.nth.call(null,vec__34148,(5),null);var volume = cljs.core.nth.call(null,vec__34148,(6),null);cljs.core.chunk_append.call(null,b__34145,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null));
{
var G__34150 = (i__34144 + (1));
i__34144 = G__34150;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34145),iter__34142.call(null,cljs.core.chunk_rest.call(null,s__34143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34145),null);
}
} else
{var vec__34149 = cljs.core.first.call(null,s__34143__$2);var _ = cljs.core.nth.call(null,vec__34149,(0),null);var date = cljs.core.nth.call(null,vec__34149,(1),null);var open = cljs.core.nth.call(null,vec__34149,(2),null);var high = cljs.core.nth.call(null,vec__34149,(3),null);var low = cljs.core.nth.call(null,vec__34149,(4),null);var close = cljs.core.nth.call(null,vec__34149,(5),null);var volume = cljs.core.nth.call(null,vec__34149,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null),iter__34142.call(null,cljs.core.rest.call(null,s__34143__$2)));
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
return (function (state_34228){var state_val_34229 = (state_34228[(1)]);if((state_val_34229 === (9)))
{var inst_34218 = (state_34228[(2)]);var state_34228__$1 = state_34228;var statearr_34230_34247 = state_34228__$1;(statearr_34230_34247[(2)] = inst_34218);
(statearr_34230_34247[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34229 === (8)))
{var inst_34224 = (state_34228[(2)]);var state_34228__$1 = state_34228;var statearr_34231_34248 = state_34228__$1;(statearr_34231_34248[(2)] = inst_34224);
(statearr_34231_34248[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34229 === (7)))
{var inst_34210 = (state_34228[(7)]);var inst_34220 = cljs.core.concat.call(null,all,inst_34210);var inst_34221 = [null,inst_34220];var inst_34222 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34221,null));var state_34228__$1 = state_34228;var statearr_34232_34249 = state_34228__$1;(statearr_34232_34249[(2)] = inst_34222);
(statearr_34232_34249[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34229 === (6)))
{var inst_34210 = (state_34228[(7)]);var inst_34214 = cljs.core.concat.call(null,all,inst_34210);var inst_34215 = (start + num);var inst_34216 = goog_historical_info.call(null,inst_34214,id,startdate,inst_34215,num);var state_34228__$1 = state_34228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34228__$1,(9),inst_34216);
} else
{if((state_val_34229 === (5)))
{var inst_34226 = (state_34228[(2)]);var state_34228__$1 = state_34228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34228__$1,inst_34226);
} else
{if((state_val_34229 === (4)))
{var inst_34210 = (state_34228[(7)]);var inst_34205 = (state_34228[(8)]);var inst_34210__$1 = stock.tool.parse_historical.call(null,inst_34205);var inst_34211 = cljs.core.count.call(null,inst_34210__$1);var inst_34212 = cljs.core._EQ_.call(null,num,inst_34211);var state_34228__$1 = (function (){var statearr_34233 = state_34228;(statearr_34233[(7)] = inst_34210__$1);
return statearr_34233;
})();if(inst_34212)
{var statearr_34234_34250 = state_34228__$1;(statearr_34234_34250[(1)] = (6));
} else
{var statearr_34235_34251 = state_34228__$1;(statearr_34235_34251[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34229 === (3)))
{var inst_34204 = (state_34228[(9)]);var inst_34207 = [inst_34204];var inst_34208 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34207,null));var state_34228__$1 = state_34228;var statearr_34236_34252 = state_34228__$1;(statearr_34236_34252[(2)] = inst_34208);
(statearr_34236_34252[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34229 === (2)))
{var inst_34204 = (state_34228[(9)]);var inst_34203 = (state_34228[(2)]);var inst_34204__$1 = cljs.core.nth.call(null,inst_34203,(0),null);var inst_34205 = cljs.core.nth.call(null,inst_34203,(1),null);var state_34228__$1 = (function (){var statearr_34237 = state_34228;(statearr_34237[(8)] = inst_34205);
(statearr_34237[(9)] = inst_34204__$1);
return statearr_34237;
})();if(cljs.core.truth_(inst_34204__$1))
{var statearr_34238_34253 = state_34228__$1;(statearr_34238_34253[(1)] = (3));
} else
{var statearr_34239_34254 = state_34228__$1;(statearr_34239_34254[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34229 === (1)))
{var inst_34200 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_34201 = stock.tool.content.call(null,inst_34200);var state_34228__$1 = state_34228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34228__$1,(2),inst_34201);
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
var state_machine__6188__auto____0 = (function (){var statearr_34243 = [null,null,null,null,null,null,null,null,null,null];(statearr_34243[(0)] = state_machine__6188__auto__);
(statearr_34243[(1)] = (1));
return statearr_34243;
});
var state_machine__6188__auto____1 = (function (state_34228){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34244){if((e34244 instanceof Object))
{var ex__6191__auto__ = e34244;var statearr_34245_34255 = state_34228;(statearr_34245_34255[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34256 = state_34228;
state_34228 = G__34256;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34228){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34246 = f__6203__auto__.call(null);(statearr_34246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__34258 = kline;var date__$1 = cljs.core.nth.call(null,vec__34258,(0),null);var _ = cljs.core.nth.call(null,vec__34258,(1),null);var ___$1 = cljs.core.nth.call(null,vec__34258,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34258,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34258,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34258,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__34260 = kline;var _ = cljs.core.nth.call(null,vec__34260,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34260,(1),null);var high__$1 = cljs.core.nth.call(null,vec__34260,(2),null);var ___$2 = cljs.core.nth.call(null,vec__34260,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34260,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34260,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__34262 = kline;var _ = cljs.core.nth.call(null,vec__34262,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34262,(1),null);var ___$2 = cljs.core.nth.call(null,vec__34262,(2),null);var ___$3 = cljs.core.nth.call(null,vec__34262,(3),null);var open__$1 = cljs.core.nth.call(null,vec__34262,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34262,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__34264 = kline;var _ = cljs.core.nth.call(null,vec__34264,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34264,(1),null);var ___$2 = cljs.core.nth.call(null,vec__34264,(2),null);var ___$3 = cljs.core.nth.call(null,vec__34264,(3),null);var close__$1 = cljs.core.nth.call(null,vec__34264,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34264,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__34266 = kline;var _ = cljs.core.nth.call(null,vec__34266,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34266,(1),null);var ___$2 = cljs.core.nth.call(null,vec__34266,(2),null);var low__$1 = cljs.core.nth.call(null,vec__34266,(3),null);var ___$3 = cljs.core.nth.call(null,vec__34266,(4),null);var ___$4 = cljs.core.nth.call(null,vec__34266,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__34268 = kline;var _ = cljs.core.nth.call(null,vec__34268,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34268,(1),null);var ___$2 = cljs.core.nth.call(null,vec__34268,(2),null);var ___$3 = cljs.core.nth.call(null,vec__34268,(3),null);var ___$4 = cljs.core.nth.call(null,vec__34268,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__34268,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__34270 = kline;var _ = cljs.core.nth.call(null,vec__34270,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34270,(1),null);var high = cljs.core.nth.call(null,vec__34270,(2),null);var low = cljs.core.nth.call(null,vec__34270,(3),null);var ___$2 = cljs.core.nth.call(null,vec__34270,(4),null);var ___$3 = cljs.core.nth.call(null,vec__34270,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__34272 = kline;var _ = cljs.core.nth.call(null,vec__34272,(0),null);var ___$1 = cljs.core.nth.call(null,vec__34272,(1),null);var high = cljs.core.nth.call(null,vec__34272,(2),null);var low = cljs.core.nth.call(null,vec__34272,(3),null);var close = cljs.core.nth.call(null,vec__34272,(4),null);var ___$2 = cljs.core.nth.call(null,vec__34272,(5),null);return (((high + low) + close) / (3));
}
});
