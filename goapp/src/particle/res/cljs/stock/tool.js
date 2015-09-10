// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj57316 = {"url":"/proxy","dataType":"text","data":(function (){var obj57318 = {"url":url};return obj57318;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_57325){var state_val_57326 = (state_57325[(1)]);if((state_val_57326 === (2)))
{var inst_57322 = (state_57325[(2)]);var inst_57323 = cljs.core.async.close_BANG_.call(null,ret);var state_57325__$1 = (function (){var statearr_57327 = state_57325;(statearr_57327[(7)] = inst_57322);
return statearr_57327;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57325__$1,inst_57323);
} else
{if((state_val_57326 === (1)))
{var inst_57319 = [null,data];var inst_57320 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57319,null));var state_57325__$1 = state_57325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57325__$1,(2),ret,inst_57320);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57331 = [null,null,null,null,null,null,null,null];(statearr_57331[(0)] = state_machine__6188__auto__);
(statearr_57331[(1)] = (1));
return statearr_57331;
});
var state_machine__6188__auto____1 = (function (state_57325){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57332){if((e57332 instanceof Object))
{var ex__6191__auto__ = e57332;var statearr_57333_57351 = state_57325;(statearr_57333_57351[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57352 = state_57325;
state_57325 = G__57352;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57325){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_57334 = f__6203__auto__.call(null);(statearr_57334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_57341){var state_val_57342 = (state_57341[(1)]);if((state_val_57342 === (2)))
{var inst_57338 = (state_57341[(2)]);var inst_57339 = cljs.core.async.close_BANG_.call(null,ret);var state_57341__$1 = (function (){var statearr_57343 = state_57341;(statearr_57343[(7)] = inst_57338);
return statearr_57343;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57341__$1,inst_57339);
} else
{if((state_val_57342 === (1)))
{var inst_57335 = [err];var inst_57336 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57335,null));var state_57341__$1 = state_57341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57341__$1,(2),ret,inst_57336);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57347 = [null,null,null,null,null,null,null,null];(statearr_57347[(0)] = state_machine__6188__auto__);
(statearr_57347[(1)] = (1));
return statearr_57347;
});
var state_machine__6188__auto____1 = (function (state_57341){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57341);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57348){if((e57348 instanceof Object))
{var ex__6191__auto__ = e57348;var statearr_57349_57353 = state_57341;(statearr_57349_57353[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57354 = state_57341;
state_57341 = G__57354;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57341){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_57350 = f__6203__auto__.call(null);(statearr_57350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj57316;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){try{var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = (parseFloat(clojure.string.replace.call(null,json.vo,/M/,"")) * (1000000));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e57356){if((e57356 instanceof Object))
{var e = e57356;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57356;
} else
{return null;
}
}
}});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_57407){var state_val_57408 = (state_57407[(1)]);if((state_val_57408 === (5)))
{var inst_57405 = (state_57407[(2)]);var state_57407__$1 = state_57407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57407__$1,inst_57405);
} else
{if((state_val_57408 === (4)))
{var inst_57396 = (state_57407[(7)]);var inst_57401 = stock.tool.parse_info.call(null,inst_57396);var inst_57402 = [null,inst_57401];var inst_57403 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57402,null));var state_57407__$1 = state_57407;var statearr_57409_57421 = state_57407__$1;(statearr_57409_57421[(2)] = inst_57403);
(statearr_57409_57421[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57408 === (3)))
{var inst_57394 = (state_57407[(8)]);var inst_57398 = [inst_57394];var inst_57399 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57398,null));var state_57407__$1 = state_57407;var statearr_57410_57422 = state_57407__$1;(statearr_57410_57422[(2)] = inst_57399);
(statearr_57410_57422[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57408 === (2)))
{var inst_57394 = (state_57407[(8)]);var inst_57393 = (state_57407[(2)]);var inst_57394__$1 = cljs.core.nth.call(null,inst_57393,(0),null);var inst_57395 = cljs.core.nth.call(null,inst_57393,(1),null);var inst_57396 = clojure.string.replace.call(null,inst_57395,/\/\//,"");var state_57407__$1 = (function (){var statearr_57411 = state_57407;(statearr_57411[(8)] = inst_57394__$1);
(statearr_57411[(7)] = inst_57396);
return statearr_57411;
})();if(cljs.core.truth_(inst_57394__$1))
{var statearr_57412_57423 = state_57407__$1;(statearr_57412_57423[(1)] = (3));
} else
{var statearr_57413_57424 = state_57407__$1;(statearr_57413_57424[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57408 === (1)))
{var inst_57390 = stock.tool.goog_finance_info_url.call(null,id);var inst_57391 = stock.tool.content.call(null,inst_57390);var state_57407__$1 = state_57407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57407__$1,(2),inst_57391);
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
var state_machine__6188__auto____0 = (function (){var statearr_57417 = [null,null,null,null,null,null,null,null,null];(statearr_57417[(0)] = state_machine__6188__auto__);
(statearr_57417[(1)] = (1));
return statearr_57417;
});
var state_machine__6188__auto____1 = (function (state_57407){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57407);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57418){if((e57418 instanceof Object))
{var ex__6191__auto__ = e57418;var statearr_57419_57425 = state_57407;(statearr_57419_57425[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57407);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57426 = state_57407;
state_57407 = G__57426;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57407){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57420 = f__6203__auto__.call(null);(statearr_57420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 結合今天，如果今天已經抓到，就不結合
*/
stock.tool.combineToday = (function combineToday(todayLine,li){if(cljs.core.truth_(todayLine))
{var vec__57428 = cljs.core.first.call(null,li);var maybe_today = cljs.core.nth.call(null,vec__57428,(0),null);var _ = cljs.core.nth.call(null,vec__57428,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57428,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57428,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57428,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57428,(5),null);if(cljs.core.not.call(null,Date.today().equals((new Date(maybe_today)).clearTime())))
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
return (function iter__57437(s__57438){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__57438__$1 = s__57438;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57438__$1);if(temp__4126__auto__)
{var s__57438__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57438__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__57438__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__57440 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__57439 = (0);while(true){
if((i__57439 < size__4275__auto__))
{var vec__57443 = cljs.core._nth.call(null,c__4274__auto__,i__57439);var _ = cljs.core.nth.call(null,vec__57443,(0),null);var date = cljs.core.nth.call(null,vec__57443,(1),null);var close = cljs.core.nth.call(null,vec__57443,(2),null);var high = cljs.core.nth.call(null,vec__57443,(3),null);var low = cljs.core.nth.call(null,vec__57443,(4),null);var open = cljs.core.nth.call(null,vec__57443,(5),null);var volume = cljs.core.nth.call(null,vec__57443,(6),null);cljs.core.chunk_append.call(null,b__57440,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__57445 = (i__57439 + (1));
i__57439 = G__57445;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57440),iter__57437.call(null,cljs.core.chunk_rest.call(null,s__57438__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57440),null);
}
} else
{var vec__57444 = cljs.core.first.call(null,s__57438__$2);var _ = cljs.core.nth.call(null,vec__57444,(0),null);var date = cljs.core.nth.call(null,vec__57444,(1),null);var close = cljs.core.nth.call(null,vec__57444,(2),null);var high = cljs.core.nth.call(null,vec__57444,(3),null);var low = cljs.core.nth.call(null,vec__57444,(4),null);var open = cljs.core.nth.call(null,vec__57444,(5),null);var volume = cljs.core.nth.call(null,vec__57444,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__57437.call(null,cljs.core.rest.call(null,s__57438__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__57460){var vec__57461 = p__57460;var d = cljs.core.nth.call(null,vec__57461,(0),null);var o = cljs.core.nth.call(null,vec__57461,(1),null);var h = cljs.core.nth.call(null,vec__57461,(2),null);var l = cljs.core.nth.call(null,vec__57461,(3),null);var c = cljs.core.nth.call(null,vec__57461,(4),null);var v = cljs.core.nth.call(null,vec__57461,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__57462,p__57463){var vec__57464 = p__57462;var d1 = cljs.core.nth.call(null,vec__57464,(0),null);var _ = cljs.core.nth.call(null,vec__57464,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57464,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57464,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57464,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57464,(5),null);var prev = vec__57464;var vec__57465 = p__57463;var d2 = cljs.core.nth.call(null,vec__57465,(0),null);var o = cljs.core.nth.call(null,vec__57465,(1),null);var h = cljs.core.nth.call(null,vec__57465,(2),null);var l = cljs.core.nth.call(null,vec__57465,(3),null);var c = cljs.core.nth.call(null,vec__57465,(4),null);var v = cljs.core.nth.call(null,vec__57465,(5),null);var curr = vec__57465;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__57466,p__57467){var vec__57468 = p__57466;var d1 = cljs.core.nth.call(null,vec__57468,(0),null);var _ = cljs.core.nth.call(null,vec__57468,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57468,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57468,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57468,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57468,(5),null);var prev = vec__57468;var vec__57469 = p__57467;var d2 = cljs.core.nth.call(null,vec__57469,(0),null);var o = cljs.core.nth.call(null,vec__57469,(1),null);var h = cljs.core.nth.call(null,vec__57469,(2),null);var l = cljs.core.nth.call(null,vec__57469,(3),null);var c = cljs.core.nth.call(null,vec__57469,(4),null);var v = cljs.core.nth.call(null,vec__57469,(5),null);var curr = vec__57469;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__57470){var vec__57471 = p__57470;var d = cljs.core.nth.call(null,vec__57471,(0),null);var o = cljs.core.nth.call(null,vec__57471,(1),null);var h = cljs.core.nth.call(null,vec__57471,(2),null);var l = cljs.core.nth.call(null,vec__57471,(3),null);var c = cljs.core.nth.call(null,vec__57471,(4),null);var v = cljs.core.nth.call(null,vec__57471,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__57472){var vec__57473 = p__57472;var d = cljs.core.nth.call(null,vec__57473,(0),null);var o = cljs.core.nth.call(null,vec__57473,(1),null);var h = cljs.core.nth.call(null,vec__57473,(2),null);var l = cljs.core.nth.call(null,vec__57473,(3),null);var c = cljs.core.nth.call(null,vec__57473,(4),null);var v = cljs.core.nth.call(null,vec__57473,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.get_goog_stock_prices = (function get_goog_stock_prices(id,range){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_57537){var state_val_57538 = (state_57537[(1)]);if((state_val_57538 === (6)))
{var inst_57529 = (state_57537[(7)]);var inst_57533 = (state_57537[(2)]);var inst_57534 = [inst_57533,inst_57529];var inst_57535 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57534,null));var state_57537__$1 = state_57537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57537__$1,inst_57535);
} else
{if((state_val_57538 === (5)))
{var inst_57524 = (state_57537[(8)]);var state_57537__$1 = state_57537;var statearr_57539_57552 = state_57537__$1;(statearr_57539_57552[(2)] = inst_57524);
(statearr_57539_57552[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57538 === (4)))
{var inst_57519 = (state_57537[(9)]);var state_57537__$1 = state_57537;var statearr_57540_57553 = state_57537__$1;(statearr_57540_57553[(2)] = inst_57519);
(statearr_57540_57553[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57538 === (3)))
{var inst_57519 = (state_57537[(9)]);var inst_57520 = (state_57537[(10)]);var inst_57523 = (state_57537[(2)]);var inst_57524 = cljs.core.nth.call(null,inst_57523,(0),null);var inst_57525 = cljs.core.nth.call(null,inst_57523,(1),null);var inst_57526 = stock.tool.parse_getprices.call(null,inst_57520);var inst_57527 = stock.tool.format_getprices.call(null,(86400),inst_57526);var inst_57528 = cljs.core.reverse.call(null,inst_57527);var inst_57529 = stock.tool.combineToday.call(null,inst_57525,inst_57528);var state_57537__$1 = (function (){var statearr_57541 = state_57537;(statearr_57541[(7)] = inst_57529);
(statearr_57541[(8)] = inst_57524);
return statearr_57541;
})();if(cljs.core.truth_(inst_57519))
{var statearr_57542_57554 = state_57537__$1;(statearr_57542_57554[(1)] = (4));
} else
{var statearr_57543_57555 = state_57537__$1;(statearr_57543_57555[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57538 === (2)))
{var inst_57518 = (state_57537[(2)]);var inst_57519 = cljs.core.nth.call(null,inst_57518,(0),null);var inst_57520 = cljs.core.nth.call(null,inst_57518,(1),null);var inst_57521 = stock.tool.todayPrice.call(null,id);var state_57537__$1 = (function (){var statearr_57544 = state_57537;(statearr_57544[(9)] = inst_57519);
(statearr_57544[(10)] = inst_57520);
return statearr_57544;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57537__$1,(3),inst_57521);
} else
{if((state_val_57538 === (1)))
{var inst_57515 = stock.tool.goog_finance_getprices_url.call(null,id,range);var inst_57516 = stock.tool.content.call(null,inst_57515);var state_57537__$1 = state_57537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57537__$1,(2),inst_57516);
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
var state_machine__6188__auto____0 = (function (){var statearr_57548 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_57548[(0)] = state_machine__6188__auto__);
(statearr_57548[(1)] = (1));
return statearr_57548;
});
var state_machine__6188__auto____1 = (function (state_57537){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57537);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57549){if((e57549 instanceof Object))
{var ex__6191__auto__ = e57549;var statearr_57550_57556 = state_57537;(statearr_57550_57556[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57557 = state_57537;
state_57537 = G__57557;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57537){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57551 = f__6203__auto__.call(null);(statearr_57551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__57566(s__57567){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__57567__$1 = s__57567;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57567__$1);if(temp__4126__auto__)
{var s__57567__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57567__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__57567__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__57569 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__57568 = (0);while(true){
if((i__57568 < size__4275__auto__))
{var vec__57572 = cljs.core._nth.call(null,c__4274__auto__,i__57568);var _ = cljs.core.nth.call(null,vec__57572,(0),null);var date = cljs.core.nth.call(null,vec__57572,(1),null);var open = cljs.core.nth.call(null,vec__57572,(2),null);var high = cljs.core.nth.call(null,vec__57572,(3),null);var low = cljs.core.nth.call(null,vec__57572,(4),null);var close = cljs.core.nth.call(null,vec__57572,(5),null);var volume = cljs.core.nth.call(null,vec__57572,(6),null);cljs.core.chunk_append.call(null,b__57569,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__57574 = (i__57568 + (1));
i__57568 = G__57574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57569),iter__57566.call(null,cljs.core.chunk_rest.call(null,s__57567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57569),null);
}
} else
{var vec__57573 = cljs.core.first.call(null,s__57567__$2);var _ = cljs.core.nth.call(null,vec__57573,(0),null);var date = cljs.core.nth.call(null,vec__57573,(1),null);var open = cljs.core.nth.call(null,vec__57573,(2),null);var high = cljs.core.nth.call(null,vec__57573,(3),null);var low = cljs.core.nth.call(null,vec__57573,(4),null);var close = cljs.core.nth.call(null,vec__57573,(5),null);var volume = cljs.core.nth.call(null,vec__57573,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__57566.call(null,cljs.core.rest.call(null,s__57567__$2)));
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
return (function (state_57652){var state_val_57653 = (state_57652[(1)]);if((state_val_57653 === (9)))
{var inst_57642 = (state_57652[(2)]);var state_57652__$1 = state_57652;var statearr_57654_57671 = state_57652__$1;(statearr_57654_57671[(2)] = inst_57642);
(statearr_57654_57671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57653 === (8)))
{var inst_57648 = (state_57652[(2)]);var state_57652__$1 = state_57652;var statearr_57655_57672 = state_57652__$1;(statearr_57655_57672[(2)] = inst_57648);
(statearr_57655_57672[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57653 === (7)))
{var inst_57634 = (state_57652[(7)]);var inst_57644 = cljs.core.concat.call(null,all,inst_57634);var inst_57645 = [null,inst_57644];var inst_57646 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57645,null));var state_57652__$1 = state_57652;var statearr_57656_57673 = state_57652__$1;(statearr_57656_57673[(2)] = inst_57646);
(statearr_57656_57673[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57653 === (6)))
{var inst_57634 = (state_57652[(7)]);var inst_57638 = cljs.core.concat.call(null,all,inst_57634);var inst_57639 = (start + num);var inst_57640 = goog_historical_info.call(null,inst_57638,id,startdate,inst_57639,num);var state_57652__$1 = state_57652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57652__$1,(9),inst_57640);
} else
{if((state_val_57653 === (5)))
{var inst_57650 = (state_57652[(2)]);var state_57652__$1 = state_57652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57652__$1,inst_57650);
} else
{if((state_val_57653 === (4)))
{var inst_57634 = (state_57652[(7)]);var inst_57629 = (state_57652[(8)]);var inst_57634__$1 = stock.tool.parse_historical.call(null,inst_57629);var inst_57635 = cljs.core.count.call(null,inst_57634__$1);var inst_57636 = cljs.core._EQ_.call(null,num,inst_57635);var state_57652__$1 = (function (){var statearr_57657 = state_57652;(statearr_57657[(7)] = inst_57634__$1);
return statearr_57657;
})();if(inst_57636)
{var statearr_57658_57674 = state_57652__$1;(statearr_57658_57674[(1)] = (6));
} else
{var statearr_57659_57675 = state_57652__$1;(statearr_57659_57675[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57653 === (3)))
{var inst_57628 = (state_57652[(9)]);var inst_57631 = [inst_57628];var inst_57632 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57631,null));var state_57652__$1 = state_57652;var statearr_57660_57676 = state_57652__$1;(statearr_57660_57676[(2)] = inst_57632);
(statearr_57660_57676[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57653 === (2)))
{var inst_57628 = (state_57652[(9)]);var inst_57627 = (state_57652[(2)]);var inst_57628__$1 = cljs.core.nth.call(null,inst_57627,(0),null);var inst_57629 = cljs.core.nth.call(null,inst_57627,(1),null);var state_57652__$1 = (function (){var statearr_57661 = state_57652;(statearr_57661[(9)] = inst_57628__$1);
(statearr_57661[(8)] = inst_57629);
return statearr_57661;
})();if(cljs.core.truth_(inst_57628__$1))
{var statearr_57662_57677 = state_57652__$1;(statearr_57662_57677[(1)] = (3));
} else
{var statearr_57663_57678 = state_57652__$1;(statearr_57663_57678[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57653 === (1)))
{var inst_57624 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_57625 = stock.tool.content.call(null,inst_57624);var state_57652__$1 = state_57652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57652__$1,(2),inst_57625);
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
var state_machine__6188__auto____0 = (function (){var statearr_57667 = [null,null,null,null,null,null,null,null,null,null];(statearr_57667[(0)] = state_machine__6188__auto__);
(statearr_57667[(1)] = (1));
return statearr_57667;
});
var state_machine__6188__auto____1 = (function (state_57652){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57652);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57668){if((e57668 instanceof Object))
{var ex__6191__auto__ = e57668;var statearr_57669_57679 = state_57652;(statearr_57669_57679[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57652);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57668;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57680 = state_57652;
state_57652 = G__57680;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57652){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57670 = f__6203__auto__.call(null);(statearr_57670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__57682 = kline;var date__$1 = cljs.core.nth.call(null,vec__57682,(0),null);var _ = cljs.core.nth.call(null,vec__57682,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57682,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57682,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57682,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57682,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__57684 = kline;var _ = cljs.core.nth.call(null,vec__57684,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57684,(1),null);var high__$1 = cljs.core.nth.call(null,vec__57684,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57684,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57684,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57684,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__57686 = kline;var _ = cljs.core.nth.call(null,vec__57686,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57686,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57686,(2),null);var ___$3 = cljs.core.nth.call(null,vec__57686,(3),null);var open__$1 = cljs.core.nth.call(null,vec__57686,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57686,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__57688 = kline;var _ = cljs.core.nth.call(null,vec__57688,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57688,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57688,(2),null);var ___$3 = cljs.core.nth.call(null,vec__57688,(3),null);var close__$1 = cljs.core.nth.call(null,vec__57688,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57688,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__57690 = kline;var _ = cljs.core.nth.call(null,vec__57690,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57690,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57690,(2),null);var low__$1 = cljs.core.nth.call(null,vec__57690,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57690,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57690,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__57692 = kline;var _ = cljs.core.nth.call(null,vec__57692,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57692,(1),null);var ___$2 = cljs.core.nth.call(null,vec__57692,(2),null);var ___$3 = cljs.core.nth.call(null,vec__57692,(3),null);var ___$4 = cljs.core.nth.call(null,vec__57692,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__57692,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__57694 = kline;var _ = cljs.core.nth.call(null,vec__57694,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57694,(1),null);var high = cljs.core.nth.call(null,vec__57694,(2),null);var low = cljs.core.nth.call(null,vec__57694,(3),null);var ___$2 = cljs.core.nth.call(null,vec__57694,(4),null);var ___$3 = cljs.core.nth.call(null,vec__57694,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__57696 = kline;var _ = cljs.core.nth.call(null,vec__57696,(0),null);var ___$1 = cljs.core.nth.call(null,vec__57696,(1),null);var high = cljs.core.nth.call(null,vec__57696,(2),null);var low = cljs.core.nth.call(null,vec__57696,(3),null);var close = cljs.core.nth.call(null,vec__57696,(4),null);var ___$2 = cljs.core.nth.call(null,vec__57696,(5),null);return (((high + low) + close) / (3));
}
});
