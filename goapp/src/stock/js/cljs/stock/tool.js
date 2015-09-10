// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj56898 = {"url":"/proxy","dataType":"text","data":(function (){var obj56900 = {"url":url};return obj56900;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_56907){var state_val_56908 = (state_56907[(1)]);if((state_val_56908 === (2)))
{var inst_56904 = (state_56907[(2)]);var inst_56905 = cljs.core.async.close_BANG_.call(null,ret);var state_56907__$1 = (function (){var statearr_56909 = state_56907;(statearr_56909[(7)] = inst_56904);
return statearr_56909;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56907__$1,inst_56905);
} else
{if((state_val_56908 === (1)))
{var inst_56901 = [null,data];var inst_56902 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56901,null));var state_56907__$1 = state_56907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56907__$1,(2),ret,inst_56902);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56913 = [null,null,null,null,null,null,null,null];(statearr_56913[(0)] = state_machine__6188__auto__);
(statearr_56913[(1)] = (1));
return statearr_56913;
});
var state_machine__6188__auto____1 = (function (state_56907){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56907);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56914){if((e56914 instanceof Object))
{var ex__6191__auto__ = e56914;var statearr_56915_56933 = state_56907;(statearr_56915_56933[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56934 = state_56907;
state_56907 = G__56934;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56907){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_56916 = f__6203__auto__.call(null);(statearr_56916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_56916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_56923){var state_val_56924 = (state_56923[(1)]);if((state_val_56924 === (2)))
{var inst_56920 = (state_56923[(2)]);var inst_56921 = cljs.core.async.close_BANG_.call(null,ret);var state_56923__$1 = (function (){var statearr_56925 = state_56923;(statearr_56925[(7)] = inst_56920);
return statearr_56925;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56923__$1,inst_56921);
} else
{if((state_val_56924 === (1)))
{var inst_56917 = [err];var inst_56918 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56917,null));var state_56923__$1 = state_56923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56923__$1,(2),ret,inst_56918);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56929 = [null,null,null,null,null,null,null,null];(statearr_56929[(0)] = state_machine__6188__auto__);
(statearr_56929[(1)] = (1));
return statearr_56929;
});
var state_machine__6188__auto____1 = (function (state_56923){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56923);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56930){if((e56930 instanceof Object))
{var ex__6191__auto__ = e56930;var statearr_56931_56935 = state_56923;(statearr_56931_56935[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56936 = state_56923;
state_56923 = G__56936;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56923){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_56932 = f__6203__auto__.call(null);(statearr_56932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_56932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj56898;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){try{var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = (parseFloat(clojure.string.replace.call(null,json.vo,/M/,"")) * (1000000));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e56938){if((e56938 instanceof Object))
{var e = e56938;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56938;
} else
{return null;
}
}
}});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_56989){var state_val_56990 = (state_56989[(1)]);if((state_val_56990 === (5)))
{var inst_56987 = (state_56989[(2)]);var state_56989__$1 = state_56989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56989__$1,inst_56987);
} else
{if((state_val_56990 === (4)))
{var inst_56978 = (state_56989[(7)]);var inst_56983 = stock.tool.parse_info.call(null,inst_56978);var inst_56984 = [null,inst_56983];var inst_56985 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56984,null));var state_56989__$1 = state_56989;var statearr_56991_57003 = state_56989__$1;(statearr_56991_57003[(2)] = inst_56985);
(statearr_56991_57003[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56990 === (3)))
{var inst_56976 = (state_56989[(8)]);var inst_56980 = [inst_56976];var inst_56981 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56980,null));var state_56989__$1 = state_56989;var statearr_56992_57004 = state_56989__$1;(statearr_56992_57004[(2)] = inst_56981);
(statearr_56992_57004[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56990 === (2)))
{var inst_56976 = (state_56989[(8)]);var inst_56975 = (state_56989[(2)]);var inst_56976__$1 = cljs.core.nth.call(null,inst_56975,(0),null);var inst_56977 = cljs.core.nth.call(null,inst_56975,(1),null);var inst_56978 = clojure.string.replace.call(null,inst_56977,/\/\//,"");var state_56989__$1 = (function (){var statearr_56993 = state_56989;(statearr_56993[(8)] = inst_56976__$1);
(statearr_56993[(7)] = inst_56978);
return statearr_56993;
})();if(cljs.core.truth_(inst_56976__$1))
{var statearr_56994_57005 = state_56989__$1;(statearr_56994_57005[(1)] = (3));
} else
{var statearr_56995_57006 = state_56989__$1;(statearr_56995_57006[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56990 === (1)))
{var inst_56972 = stock.tool.goog_finance_info_url.call(null,id);var inst_56973 = stock.tool.content.call(null,inst_56972);var state_56989__$1 = state_56989;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56989__$1,(2),inst_56973);
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
var state_machine__6188__auto____0 = (function (){var statearr_56999 = [null,null,null,null,null,null,null,null,null];(statearr_56999[(0)] = state_machine__6188__auto__);
(statearr_56999[(1)] = (1));
return statearr_56999;
});
var state_machine__6188__auto____1 = (function (state_56989){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56989);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57000){if((e57000 instanceof Object))
{var ex__6191__auto__ = e57000;var statearr_57001_57007 = state_56989;(statearr_57001_57007[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57008 = state_56989;
state_56989 = G__57008;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56989){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57002 = f__6203__auto__.call(null);(statearr_57002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 結合今天，如果今天已經抓到，就不結合
*/
stock.tool.combineToday = (function combineToday(todayLine,li){if(cljs.core.truth_(todayLine))
{var vec__57010 = cljs.core.first.call(null,li);var maybe_today = cljs.core.nth.call(null,vec__57010,(0),null);var _ = cljs.core.nth.call(null,vec__57010,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57010,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57010,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57010,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57010,(5),null);if(cljs.core.not.call(null,Date.today().equals((new Date(maybe_today)).clearTime())))
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
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__57019(s__57020){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__57020__$1 = s__57020;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57020__$1);if(temp__4126__auto__)
{var s__57020__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57020__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__57020__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__57022 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__57021 = (0);while(true){
if((i__57021 < size__4275__auto__))
{var vec__57025 = cljs.core._nth.call(null,c__4274__auto__,i__57021);var _ = cljs.core.nth.call(null,vec__57025,(0),null);var date = cljs.core.nth.call(null,vec__57025,(1),null);var close = cljs.core.nth.call(null,vec__57025,(2),null);var high = cljs.core.nth.call(null,vec__57025,(3),null);var low = cljs.core.nth.call(null,vec__57025,(4),null);var open = cljs.core.nth.call(null,vec__57025,(5),null);var volume = cljs.core.nth.call(null,vec__57025,(6),null);cljs.core.chunk_append.call(null,b__57022,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__57027 = (i__57021 + (1));
i__57021 = G__57027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57022),iter__57019.call(null,cljs.core.chunk_rest.call(null,s__57020__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57022),null);
}
} else
{var vec__57026 = cljs.core.first.call(null,s__57020__$2);var _ = cljs.core.nth.call(null,vec__57026,(0),null);var date = cljs.core.nth.call(null,vec__57026,(1),null);var close = cljs.core.nth.call(null,vec__57026,(2),null);var high = cljs.core.nth.call(null,vec__57026,(3),null);var low = cljs.core.nth.call(null,vec__57026,(4),null);var open = cljs.core.nth.call(null,vec__57026,(5),null);var volume = cljs.core.nth.call(null,vec__57026,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__57019.call(null,cljs.core.rest.call(null,s__57020__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__57042){var vec__57043 = p__57042;var d = cljs.core.nth.call(null,vec__57043,(0),null);var o = cljs.core.nth.call(null,vec__57043,(1),null);var h = cljs.core.nth.call(null,vec__57043,(2),null);var l = cljs.core.nth.call(null,vec__57043,(3),null);var c = cljs.core.nth.call(null,vec__57043,(4),null);var v = cljs.core.nth.call(null,vec__57043,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__57044,p__57045){var vec__57046 = p__57044;var d1 = cljs.core.nth.call(null,vec__57046,(0),null);var _ = cljs.core.nth.call(null,vec__57046,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57046,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57046,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57046,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57046,(5),null);var prev = vec__57046;var vec__57047 = p__57045;var d2 = cljs.core.nth.call(null,vec__57047,(0),null);var o = cljs.core.nth.call(null,vec__57047,(1),null);var h = cljs.core.nth.call(null,vec__57047,(2),null);var l = cljs.core.nth.call(null,vec__57047,(3),null);var c = cljs.core.nth.call(null,vec__57047,(4),null);var v = cljs.core.nth.call(null,vec__57047,(5),null);var curr = vec__57047;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__57048,p__57049){var vec__57050 = p__57048;var d1 = cljs.core.nth.call(null,vec__57050,(0),null);var _ = cljs.core.nth.call(null,vec__57050,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57050,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57050,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57050,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57050,(5),null);var prev = vec__57050;var vec__57051 = p__57049;var d2 = cljs.core.nth.call(null,vec__57051,(0),null);var o = cljs.core.nth.call(null,vec__57051,(1),null);var h = cljs.core.nth.call(null,vec__57051,(2),null);var l = cljs.core.nth.call(null,vec__57051,(3),null);var c = cljs.core.nth.call(null,vec__57051,(4),null);var v = cljs.core.nth.call(null,vec__57051,(5),null);var curr = vec__57051;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__57052){var vec__57053 = p__57052;var d = cljs.core.nth.call(null,vec__57053,(0),null);var o = cljs.core.nth.call(null,vec__57053,(1),null);var h = cljs.core.nth.call(null,vec__57053,(2),null);var l = cljs.core.nth.call(null,vec__57053,(3),null);var c = cljs.core.nth.call(null,vec__57053,(4),null);var v = cljs.core.nth.call(null,vec__57053,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__57054){var vec__57055 = p__57054;var d = cljs.core.nth.call(null,vec__57055,(0),null);var o = cljs.core.nth.call(null,vec__57055,(1),null);var h = cljs.core.nth.call(null,vec__57055,(2),null);var l = cljs.core.nth.call(null,vec__57055,(3),null);var c = cljs.core.nth.call(null,vec__57055,(4),null);var v = cljs.core.nth.call(null,vec__57055,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.get_goog_stock_prices = (function get_goog_stock_prices(id,range){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_57119){var state_val_57120 = (state_57119[(1)]);if((state_val_57120 === (6)))
{var inst_57111 = (state_57119[(7)]);var inst_57115 = (state_57119[(2)]);var inst_57116 = [inst_57115,inst_57111];var inst_57117 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57116,null));var state_57119__$1 = state_57119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57119__$1,inst_57117);
} else
{if((state_val_57120 === (5)))
{var inst_57106 = (state_57119[(8)]);var state_57119__$1 = state_57119;var statearr_57121_57134 = state_57119__$1;(statearr_57121_57134[(2)] = inst_57106);
(statearr_57121_57134[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57120 === (4)))
{var inst_57101 = (state_57119[(9)]);var state_57119__$1 = state_57119;var statearr_57122_57135 = state_57119__$1;(statearr_57122_57135[(2)] = inst_57101);
(statearr_57122_57135[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57120 === (3)))
{var inst_57101 = (state_57119[(9)]);var inst_57102 = (state_57119[(10)]);var inst_57105 = (state_57119[(2)]);var inst_57106 = cljs.core.nth.call(null,inst_57105,(0),null);var inst_57107 = cljs.core.nth.call(null,inst_57105,(1),null);var inst_57108 = stock.tool.parse_getprices.call(null,inst_57102);var inst_57109 = stock.tool.format_getprices.call(null,(86400),inst_57108);var inst_57110 = cljs.core.reverse.call(null,inst_57109);var inst_57111 = stock.tool.combineToday.call(null,inst_57107,inst_57110);var state_57119__$1 = (function (){var statearr_57123 = state_57119;(statearr_57123[(7)] = inst_57111);
(statearr_57123[(8)] = inst_57106);
return statearr_57123;
})();if(cljs.core.truth_(inst_57101))
{var statearr_57124_57136 = state_57119__$1;(statearr_57124_57136[(1)] = (4));
} else
{var statearr_57125_57137 = state_57119__$1;(statearr_57125_57137[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57120 === (2)))
{var inst_57100 = (state_57119[(2)]);var inst_57101 = cljs.core.nth.call(null,inst_57100,(0),null);var inst_57102 = cljs.core.nth.call(null,inst_57100,(1),null);var inst_57103 = stock.tool.todayPrice.call(null,id);var state_57119__$1 = (function (){var statearr_57126 = state_57119;(statearr_57126[(9)] = inst_57101);
(statearr_57126[(10)] = inst_57102);
return statearr_57126;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57119__$1,(3),inst_57103);
} else
{if((state_val_57120 === (1)))
{var inst_57097 = stock.tool.goog_finance_getprices_url.call(null,id,range);var inst_57098 = stock.tool.content.call(null,inst_57097);var state_57119__$1 = state_57119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57119__$1,(2),inst_57098);
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
var state_machine__6188__auto____0 = (function (){var statearr_57130 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_57130[(0)] = state_machine__6188__auto__);
(statearr_57130[(1)] = (1));
return statearr_57130;
});
var state_machine__6188__auto____1 = (function (state_57119){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57131){if((e57131 instanceof Object))
{var ex__6191__auto__ = e57131;var statearr_57132_57138 = state_57119;(statearr_57132_57138[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57139 = state_57119;
state_57119 = G__57139;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57119){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57133 = f__6203__auto__.call(null);(statearr_57133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__57148(s__57149){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__57149__$1 = s__57149;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57149__$1);if(temp__4126__auto__)
{var s__57149__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57149__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__57149__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__57151 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__57150 = (0);while(true){
if((i__57150 < size__4275__auto__))
{var vec__57154 = cljs.core._nth.call(null,c__4274__auto__,i__57150);var _ = cljs.core.nth.call(null,vec__57154,(0),null);var date = cljs.core.nth.call(null,vec__57154,(1),null);var open = cljs.core.nth.call(null,vec__57154,(2),null);var high = cljs.core.nth.call(null,vec__57154,(3),null);var low = cljs.core.nth.call(null,vec__57154,(4),null);var close = cljs.core.nth.call(null,vec__57154,(5),null);var volume = cljs.core.nth.call(null,vec__57154,(6),null);cljs.core.chunk_append.call(null,b__57151,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__57156 = (i__57150 + (1));
i__57150 = G__57156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57151),iter__57148.call(null,cljs.core.chunk_rest.call(null,s__57149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57151),null);
}
} else
{var vec__57155 = cljs.core.first.call(null,s__57149__$2);var _ = cljs.core.nth.call(null,vec__57155,(0),null);var date = cljs.core.nth.call(null,vec__57155,(1),null);var open = cljs.core.nth.call(null,vec__57155,(2),null);var high = cljs.core.nth.call(null,vec__57155,(3),null);var low = cljs.core.nth.call(null,vec__57155,(4),null);var close = cljs.core.nth.call(null,vec__57155,(5),null);var volume = cljs.core.nth.call(null,vec__57155,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__57148.call(null,cljs.core.rest.call(null,s__57149__$2)));
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
return (function (state_57234){var state_val_57235 = (state_57234[(1)]);if((state_val_57235 === (9)))
{var inst_57224 = (state_57234[(2)]);var state_57234__$1 = state_57234;var statearr_57236_57253 = state_57234__$1;(statearr_57236_57253[(2)] = inst_57224);
(statearr_57236_57253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57235 === (8)))
{var inst_57230 = (state_57234[(2)]);var state_57234__$1 = state_57234;var statearr_57237_57254 = state_57234__$1;(statearr_57237_57254[(2)] = inst_57230);
(statearr_57237_57254[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57235 === (7)))
{var inst_57216 = (state_57234[(7)]);var inst_57226 = cljs.core.concat.call(null,all,inst_57216);var inst_57227 = [null,inst_57226];var inst_57228 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57227,null));var state_57234__$1 = state_57234;var statearr_57238_57255 = state_57234__$1;(statearr_57238_57255[(2)] = inst_57228);
(statearr_57238_57255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57235 === (6)))
{var inst_57216 = (state_57234[(7)]);var inst_57220 = cljs.core.concat.call(null,all,inst_57216);var inst_57221 = (start + num);var inst_57222 = goog_historical_info.call(null,inst_57220,id,startdate,inst_57221,num);var state_57234__$1 = state_57234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57234__$1,(9),inst_57222);
} else
{if((state_val_57235 === (5)))
{var inst_57232 = (state_57234[(2)]);var state_57234__$1 = state_57234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57234__$1,inst_57232);
} else
{if((state_val_57235 === (4)))
{var inst_57211 = (state_57234[(8)]);var inst_57216 = (state_57234[(7)]);var inst_57216__$1 = stock.tool.parse_historical.call(null,inst_57211);var inst_57217 = cljs.core.count.call(null,inst_57216__$1);var inst_57218 = cljs.core._EQ_.call(null,num,inst_57217);var state_57234__$1 = (function (){var statearr_57239 = state_57234;(statearr_57239[(7)] = inst_57216__$1);
return statearr_57239;
})();if(inst_57218)
{var statearr_57240_57256 = state_57234__$1;(statearr_57240_57256[(1)] = (6));
} else
{var statearr_57241_57257 = state_57234__$1;(statearr_57241_57257[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57235 === (3)))
{var inst_57210 = (state_57234[(9)]);var inst_57213 = [inst_57210];var inst_57214 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57213,null));var state_57234__$1 = state_57234;var statearr_57242_57258 = state_57234__$1;(statearr_57242_57258[(2)] = inst_57214);
(statearr_57242_57258[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57235 === (2)))
{var inst_57210 = (state_57234[(9)]);var inst_57209 = (state_57234[(2)]);var inst_57210__$1 = cljs.core.nth.call(null,inst_57209,(0),null);var inst_57211 = cljs.core.nth.call(null,inst_57209,(1),null);var state_57234__$1 = (function (){var statearr_57243 = state_57234;(statearr_57243[(8)] = inst_57211);
(statearr_57243[(9)] = inst_57210__$1);
return statearr_57243;
})();if(cljs.core.truth_(inst_57210__$1))
{var statearr_57244_57259 = state_57234__$1;(statearr_57244_57259[(1)] = (3));
} else
{var statearr_57245_57260 = state_57234__$1;(statearr_57245_57260[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57235 === (1)))
{var inst_57206 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_57207 = stock.tool.content.call(null,inst_57206);var state_57234__$1 = state_57234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57234__$1,(2),inst_57207);
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
var state_machine__6188__auto____0 = (function (){var statearr_57249 = [null,null,null,null,null,null,null,null,null,null];(statearr_57249[(0)] = state_machine__6188__auto__);
(statearr_57249[(1)] = (1));
return statearr_57249;
});
var state_machine__6188__auto____1 = (function (state_57234){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57250){if((e57250 instanceof Object))
{var ex__6191__auto__ = e57250;var statearr_57251_57261 = state_57234;(statearr_57251_57261[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57262 = state_57234;
state_57234 = G__57262;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57234){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57252 = f__6203__auto__.call(null);(statearr_57252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__57264 = kline;var date__$1 = cljs.core.nth.call(null,vec__57264,(0),null);var _ = cljs.core.nth.call(null,vec__57264,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57264,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57264,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57264,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57264,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__57266 = kline;var _ = cljs.core.nth.call(null,vec__57266,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57266,(1),null);var high__$1 = cljs.core.nth.call(null,vec__57266,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57266,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57266,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57266,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__57268 = kline;var _ = cljs.core.nth.call(null,vec__57268,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57268,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57268,(2),null);var ___$3 = cljs.core.nth.call(null,vec__57268,(3),null);var open__$1 = cljs.core.nth.call(null,vec__57268,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57268,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__57270 = kline;var _ = cljs.core.nth.call(null,vec__57270,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57270,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57270,(2),null);var ___$3 = cljs.core.nth.call(null,vec__57270,(3),null);var close__$1 = cljs.core.nth.call(null,vec__57270,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57270,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__57272 = kline;var _ = cljs.core.nth.call(null,vec__57272,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57272,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57272,(2),null);var low__$1 = cljs.core.nth.call(null,vec__57272,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57272,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57272,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__57274 = kline;var _ = cljs.core.nth.call(null,vec__57274,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57274,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57274,(2),null);var ___$3 = cljs.core.nth.call(null,vec__57274,(3),null);var ___$4 = cljs.core.nth.call(null,vec__57274,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__57274,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__57276 = kline;var _ = cljs.core.nth.call(null,vec__57276,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57276,(1),null);var high = cljs.core.nth.call(null,vec__57276,(2),null);var low = cljs.core.nth.call(null,vec__57276,(3),null);var ___$2 = cljs.core.nth.call(null,vec__57276,(4),null);var ___$3 = cljs.core.nth.call(null,vec__57276,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__57278 = kline;var _ = cljs.core.nth.call(null,vec__57278,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57278,(1),null);var high = cljs.core.nth.call(null,vec__57278,(2),null);var low = cljs.core.nth.call(null,vec__57278,(3),null);var close = cljs.core.nth.call(null,vec__57278,(4),null);var ___$2 = cljs.core.nth.call(null,vec__57278,(5),null);return (((high + low) + close) / (3));
}
});
