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
return (function (state_47447){var state_val_47448 = (state_47447[(1)]);if((state_val_47448 === (5)))
{var inst_47445 = (state_47447[(2)]);var state_47447__$1 = state_47447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47447__$1,inst_47445);
} else
{if((state_val_47448 === (4)))
{var inst_47435 = (state_47447[(7)]);var inst_47441 = stock.tool.parse_info.call(null,inst_47435);var inst_47442 = [null,inst_47441];var inst_47443 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47442,null));var state_47447__$1 = state_47447;var statearr_47449_47461 = state_47447__$1;(statearr_47449_47461[(2)] = inst_47443);
(statearr_47449_47461[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47448 === (3)))
{var inst_47433 = (state_47447[(8)]);var inst_47438 = [inst_47433];var inst_47439 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47438,null));var state_47447__$1 = state_47447;var statearr_47450_47462 = state_47447__$1;(statearr_47450_47462[(2)] = inst_47439);
(statearr_47450_47462[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47448 === (2)))
{var inst_47433 = (state_47447[(8)]);var inst_47435 = (state_47447[(7)]);var inst_47432 = (state_47447[(2)]);var inst_47433__$1 = cljs.core.nth.call(null,inst_47432,(0),null);var inst_47434 = cljs.core.nth.call(null,inst_47432,(1),null);var inst_47435__$1 = clojure.string.replace.call(null,inst_47434,/\/\//,"");var inst_47436 = console.log(inst_47435__$1);var state_47447__$1 = (function (){var statearr_47451 = state_47447;(statearr_47451[(9)] = inst_47436);
(statearr_47451[(8)] = inst_47433__$1);
(statearr_47451[(7)] = inst_47435__$1);
return statearr_47451;
})();if(cljs.core.truth_(inst_47433__$1))
{var statearr_47452_47463 = state_47447__$1;(statearr_47452_47463[(1)] = (3));
} else
{var statearr_47453_47464 = state_47447__$1;(statearr_47453_47464[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47448 === (1)))
{var inst_47429 = stock.tool.goog_finance_info_url.call(null,id);var inst_47430 = stock.tool.content.call(null,inst_47429);var state_47447__$1 = state_47447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47447__$1,(2),inst_47430);
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
var state_machine__6188__auto____0 = (function (){var statearr_47457 = [null,null,null,null,null,null,null,null,null,null];(statearr_47457[(0)] = state_machine__6188__auto__);
(statearr_47457[(1)] = (1));
return statearr_47457;
});
var state_machine__6188__auto____1 = (function (state_47447){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47458){if((e47458 instanceof Object))
{var ex__6191__auto__ = e47458;var statearr_47459_47465 = state_47447;(statearr_47459_47465[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47466 = state_47447;
state_47447 = G__47466;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_47460 = f__6203__auto__.call(null);(statearr_47460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__47475(s__47476){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__47476__$1 = s__47476;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47476__$1);if(temp__4126__auto__)
{var s__47476__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47476__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__47476__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__47478 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__47477 = (0);while(true){
if((i__47477 < size__4275__auto__))
{var vec__47481 = cljs.core._nth.call(null,c__4274__auto__,i__47477);var _ = cljs.core.nth.call(null,vec__47481,(0),null);var date = cljs.core.nth.call(null,vec__47481,(1),null);var close = cljs.core.nth.call(null,vec__47481,(2),null);var high = cljs.core.nth.call(null,vec__47481,(3),null);var low = cljs.core.nth.call(null,vec__47481,(4),null);var open = cljs.core.nth.call(null,vec__47481,(5),null);var volume = cljs.core.nth.call(null,vec__47481,(6),null);cljs.core.chunk_append.call(null,b__47478,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__47483 = (i__47477 + (1));
i__47477 = G__47483;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47478),iter__47475.call(null,cljs.core.chunk_rest.call(null,s__47476__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47478),null);
}
} else
{var vec__47482 = cljs.core.first.call(null,s__47476__$2);var _ = cljs.core.nth.call(null,vec__47482,(0),null);var date = cljs.core.nth.call(null,vec__47482,(1),null);var close = cljs.core.nth.call(null,vec__47482,(2),null);var high = cljs.core.nth.call(null,vec__47482,(3),null);var low = cljs.core.nth.call(null,vec__47482,(4),null);var open = cljs.core.nth.call(null,vec__47482,(5),null);var volume = cljs.core.nth.call(null,vec__47482,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__47475.call(null,cljs.core.rest.call(null,s__47476__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__47498){var vec__47499 = p__47498;var d = cljs.core.nth.call(null,vec__47499,(0),null);var o = cljs.core.nth.call(null,vec__47499,(1),null);var h = cljs.core.nth.call(null,vec__47499,(2),null);var l = cljs.core.nth.call(null,vec__47499,(3),null);var c = cljs.core.nth.call(null,vec__47499,(4),null);var v = cljs.core.nth.call(null,vec__47499,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__47500,p__47501){var vec__47502 = p__47500;var d1 = cljs.core.nth.call(null,vec__47502,(0),null);var _ = cljs.core.nth.call(null,vec__47502,(1),null);var ___$1 = cljs.core.nth.call(null,vec__47502,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47502,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47502,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47502,(5),null);var prev = vec__47502;var vec__47503 = p__47501;var d2 = cljs.core.nth.call(null,vec__47503,(0),null);var o = cljs.core.nth.call(null,vec__47503,(1),null);var h = cljs.core.nth.call(null,vec__47503,(2),null);var l = cljs.core.nth.call(null,vec__47503,(3),null);var c = cljs.core.nth.call(null,vec__47503,(4),null);var v = cljs.core.nth.call(null,vec__47503,(5),null);var curr = vec__47503;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__47504,p__47505){var vec__47506 = p__47504;var d1 = cljs.core.nth.call(null,vec__47506,(0),null);var _ = cljs.core.nth.call(null,vec__47506,(1),null);var ___$1 = cljs.core.nth.call(null,vec__47506,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47506,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47506,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47506,(5),null);var prev = vec__47506;var vec__47507 = p__47505;var d2 = cljs.core.nth.call(null,vec__47507,(0),null);var o = cljs.core.nth.call(null,vec__47507,(1),null);var h = cljs.core.nth.call(null,vec__47507,(2),null);var l = cljs.core.nth.call(null,vec__47507,(3),null);var c = cljs.core.nth.call(null,vec__47507,(4),null);var v = cljs.core.nth.call(null,vec__47507,(5),null);var curr = vec__47507;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__47508){var vec__47509 = p__47508;var d = cljs.core.nth.call(null,vec__47509,(0),null);var o = cljs.core.nth.call(null,vec__47509,(1),null);var h = cljs.core.nth.call(null,vec__47509,(2),null);var l = cljs.core.nth.call(null,vec__47509,(3),null);var c = cljs.core.nth.call(null,vec__47509,(4),null);var v = cljs.core.nth.call(null,vec__47509,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__47510){var vec__47511 = p__47510;var d = cljs.core.nth.call(null,vec__47511,(0),null);var o = cljs.core.nth.call(null,vec__47511,(1),null);var h = cljs.core.nth.call(null,vec__47511,(2),null);var l = cljs.core.nth.call(null,vec__47511,(3),null);var c = cljs.core.nth.call(null,vec__47511,(4),null);var v = cljs.core.nth.call(null,vec__47511,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj47549 = {"url":"/proxy","dataType":"text","data":(function (){var obj47551 = {"url":url};return obj47551;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_47558){var state_val_47559 = (state_47558[(1)]);if((state_val_47559 === (2)))
{var inst_47555 = (state_47558[(2)]);var inst_47556 = cljs.core.async.close_BANG_.call(null,ret);var state_47558__$1 = (function (){var statearr_47560 = state_47558;(statearr_47560[(7)] = inst_47555);
return statearr_47560;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47558__$1,inst_47556);
} else
{if((state_val_47559 === (1)))
{var inst_47552 = [null,data];var inst_47553 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47552,null));var state_47558__$1 = state_47558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47558__$1,(2),ret,inst_47553);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47564 = [null,null,null,null,null,null,null,null];(statearr_47564[(0)] = state_machine__6188__auto__);
(statearr_47564[(1)] = (1));
return statearr_47564;
});
var state_machine__6188__auto____1 = (function (state_47558){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47565){if((e47565 instanceof Object))
{var ex__6191__auto__ = e47565;var statearr_47566_47584 = state_47558;(statearr_47566_47584[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47585 = state_47558;
state_47558 = G__47585;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47558){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_47567 = f__6203__auto__.call(null);(statearr_47567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_47574){var state_val_47575 = (state_47574[(1)]);if((state_val_47575 === (2)))
{var inst_47571 = (state_47574[(2)]);var inst_47572 = cljs.core.async.close_BANG_.call(null,ret);var state_47574__$1 = (function (){var statearr_47576 = state_47574;(statearr_47576[(7)] = inst_47571);
return statearr_47576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47574__$1,inst_47572);
} else
{if((state_val_47575 === (1)))
{var inst_47568 = [err];var inst_47569 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47568,null));var state_47574__$1 = state_47574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47574__$1,(2),ret,inst_47569);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47580 = [null,null,null,null,null,null,null,null];(statearr_47580[(0)] = state_machine__6188__auto__);
(statearr_47580[(1)] = (1));
return statearr_47580;
});
var state_machine__6188__auto____1 = (function (state_47574){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47581){if((e47581 instanceof Object))
{var ex__6191__auto__ = e47581;var statearr_47582_47586 = state_47574;(statearr_47582_47586[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47587 = state_47574;
state_47574 = G__47587;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47574){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_47583 = f__6203__auto__.call(null);(statearr_47583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj47549;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__47596(s__47597){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__47597__$1 = s__47597;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47597__$1);if(temp__4126__auto__)
{var s__47597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47597__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__47597__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__47599 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__47598 = (0);while(true){
if((i__47598 < size__4275__auto__))
{var vec__47602 = cljs.core._nth.call(null,c__4274__auto__,i__47598);var _ = cljs.core.nth.call(null,vec__47602,(0),null);var date = cljs.core.nth.call(null,vec__47602,(1),null);var open = cljs.core.nth.call(null,vec__47602,(2),null);var high = cljs.core.nth.call(null,vec__47602,(3),null);var low = cljs.core.nth.call(null,vec__47602,(4),null);var close = cljs.core.nth.call(null,vec__47602,(5),null);var volume = cljs.core.nth.call(null,vec__47602,(6),null);cljs.core.chunk_append.call(null,b__47599,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__47604 = (i__47598 + (1));
i__47598 = G__47604;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47599),iter__47596.call(null,cljs.core.chunk_rest.call(null,s__47597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47599),null);
}
} else
{var vec__47603 = cljs.core.first.call(null,s__47597__$2);var _ = cljs.core.nth.call(null,vec__47603,(0),null);var date = cljs.core.nth.call(null,vec__47603,(1),null);var open = cljs.core.nth.call(null,vec__47603,(2),null);var high = cljs.core.nth.call(null,vec__47603,(3),null);var low = cljs.core.nth.call(null,vec__47603,(4),null);var close = cljs.core.nth.call(null,vec__47603,(5),null);var volume = cljs.core.nth.call(null,vec__47603,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__47596.call(null,cljs.core.rest.call(null,s__47597__$2)));
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
return (function (state_47682){var state_val_47683 = (state_47682[(1)]);if((state_val_47683 === (9)))
{var inst_47672 = (state_47682[(2)]);var state_47682__$1 = state_47682;var statearr_47684_47701 = state_47682__$1;(statearr_47684_47701[(2)] = inst_47672);
(statearr_47684_47701[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47683 === (8)))
{var inst_47678 = (state_47682[(2)]);var state_47682__$1 = state_47682;var statearr_47685_47702 = state_47682__$1;(statearr_47685_47702[(2)] = inst_47678);
(statearr_47685_47702[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47683 === (7)))
{var inst_47664 = (state_47682[(7)]);var inst_47674 = cljs.core.concat.call(null,all,inst_47664);var inst_47675 = [null,inst_47674];var inst_47676 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47675,null));var state_47682__$1 = state_47682;var statearr_47686_47703 = state_47682__$1;(statearr_47686_47703[(2)] = inst_47676);
(statearr_47686_47703[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47683 === (6)))
{var inst_47664 = (state_47682[(7)]);var inst_47668 = cljs.core.concat.call(null,all,inst_47664);var inst_47669 = (start + num);var inst_47670 = goog_historical_info.call(null,inst_47668,id,startdate,inst_47669,num);var state_47682__$1 = state_47682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47682__$1,(9),inst_47670);
} else
{if((state_val_47683 === (5)))
{var inst_47680 = (state_47682[(2)]);var state_47682__$1 = state_47682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47682__$1,inst_47680);
} else
{if((state_val_47683 === (4)))
{var inst_47659 = (state_47682[(8)]);var inst_47664 = (state_47682[(7)]);var inst_47664__$1 = stock.tool.parse_historical.call(null,inst_47659);var inst_47665 = cljs.core.count.call(null,inst_47664__$1);var inst_47666 = cljs.core._EQ_.call(null,num,inst_47665);var state_47682__$1 = (function (){var statearr_47687 = state_47682;(statearr_47687[(7)] = inst_47664__$1);
return statearr_47687;
})();if(inst_47666)
{var statearr_47688_47704 = state_47682__$1;(statearr_47688_47704[(1)] = (6));
} else
{var statearr_47689_47705 = state_47682__$1;(statearr_47689_47705[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47683 === (3)))
{var inst_47658 = (state_47682[(9)]);var inst_47661 = [inst_47658];var inst_47662 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47661,null));var state_47682__$1 = state_47682;var statearr_47690_47706 = state_47682__$1;(statearr_47690_47706[(2)] = inst_47662);
(statearr_47690_47706[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47683 === (2)))
{var inst_47658 = (state_47682[(9)]);var inst_47657 = (state_47682[(2)]);var inst_47658__$1 = cljs.core.nth.call(null,inst_47657,(0),null);var inst_47659 = cljs.core.nth.call(null,inst_47657,(1),null);var state_47682__$1 = (function (){var statearr_47691 = state_47682;(statearr_47691[(8)] = inst_47659);
(statearr_47691[(9)] = inst_47658__$1);
return statearr_47691;
})();if(cljs.core.truth_(inst_47658__$1))
{var statearr_47692_47707 = state_47682__$1;(statearr_47692_47707[(1)] = (3));
} else
{var statearr_47693_47708 = state_47682__$1;(statearr_47693_47708[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47683 === (1)))
{var inst_47654 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_47655 = stock.tool.content.call(null,inst_47654);var state_47682__$1 = state_47682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47682__$1,(2),inst_47655);
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
var state_machine__6188__auto____0 = (function (){var statearr_47697 = [null,null,null,null,null,null,null,null,null,null];(statearr_47697[(0)] = state_machine__6188__auto__);
(statearr_47697[(1)] = (1));
return statearr_47697;
});
var state_machine__6188__auto____1 = (function (state_47682){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47682);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47698){if((e47698 instanceof Object))
{var ex__6191__auto__ = e47698;var statearr_47699_47709 = state_47682;(statearr_47699_47709[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47710 = state_47682;
state_47682 = G__47710;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47682){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_47700 = f__6203__auto__.call(null);(statearr_47700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__47712 = kline;var date__$1 = cljs.core.nth.call(null,vec__47712,(0),null);var _ = cljs.core.nth.call(null,vec__47712,(1),null);var ___$1 = cljs.core.nth.call(null,vec__47712,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47712,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47712,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47712,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__47714 = kline;var _ = cljs.core.nth.call(null,vec__47714,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47714,(1),null);var high__$1 = cljs.core.nth.call(null,vec__47714,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47714,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47714,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47714,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__47716 = kline;var _ = cljs.core.nth.call(null,vec__47716,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47716,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47716,(2),null);var ___$3 = cljs.core.nth.call(null,vec__47716,(3),null);var open__$1 = cljs.core.nth.call(null,vec__47716,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47716,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__47718 = kline;var _ = cljs.core.nth.call(null,vec__47718,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47718,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47718,(2),null);var ___$3 = cljs.core.nth.call(null,vec__47718,(3),null);var close__$1 = cljs.core.nth.call(null,vec__47718,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47718,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__47720 = kline;var _ = cljs.core.nth.call(null,vec__47720,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47720,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47720,(2),null);var low__$1 = cljs.core.nth.call(null,vec__47720,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47720,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47720,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__47722 = kline;var _ = cljs.core.nth.call(null,vec__47722,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47722,(1),null);var ___$2 = cljs.core.nth.call(null,vec__47722,(2),null);var ___$3 = cljs.core.nth.call(null,vec__47722,(3),null);var ___$4 = cljs.core.nth.call(null,vec__47722,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__47722,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__47724 = kline;var _ = cljs.core.nth.call(null,vec__47724,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47724,(1),null);var high = cljs.core.nth.call(null,vec__47724,(2),null);var low = cljs.core.nth.call(null,vec__47724,(3),null);var ___$2 = cljs.core.nth.call(null,vec__47724,(4),null);var ___$3 = cljs.core.nth.call(null,vec__47724,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__47726 = kline;var _ = cljs.core.nth.call(null,vec__47726,(0),null);var ___$1 = cljs.core.nth.call(null,vec__47726,(1),null);var high = cljs.core.nth.call(null,vec__47726,(2),null);var low = cljs.core.nth.call(null,vec__47726,(3),null);var close = cljs.core.nth.call(null,vec__47726,(4),null);var ___$2 = cljs.core.nth.call(null,vec__47726,(5),null);return (((high + low) + close) / (3));
}
});
