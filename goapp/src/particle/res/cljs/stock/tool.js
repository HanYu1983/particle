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
return (function iter__38342(s__38343){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__38343__$1 = s__38343;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38343__$1);if(temp__4126__auto__)
{var s__38343__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38343__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__38343__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__38345 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__38344 = (0);while(true){
if((i__38344 < size__4275__auto__))
{var vec__38348 = cljs.core._nth.call(null,c__4274__auto__,i__38344);var _ = cljs.core.nth.call(null,vec__38348,(0),null);var date = cljs.core.nth.call(null,vec__38348,(1),null);var close = cljs.core.nth.call(null,vec__38348,(2),null);var high = cljs.core.nth.call(null,vec__38348,(3),null);var low = cljs.core.nth.call(null,vec__38348,(4),null);var open = cljs.core.nth.call(null,vec__38348,(5),null);var volume = cljs.core.nth.call(null,vec__38348,(6),null);cljs.core.chunk_append.call(null,b__38345,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__38350 = (i__38344 + (1));
i__38344 = G__38350;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38345),iter__38342.call(null,cljs.core.chunk_rest.call(null,s__38343__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38345),null);
}
} else
{var vec__38349 = cljs.core.first.call(null,s__38343__$2);var _ = cljs.core.nth.call(null,vec__38349,(0),null);var date = cljs.core.nth.call(null,vec__38349,(1),null);var close = cljs.core.nth.call(null,vec__38349,(2),null);var high = cljs.core.nth.call(null,vec__38349,(3),null);var low = cljs.core.nth.call(null,vec__38349,(4),null);var open = cljs.core.nth.call(null,vec__38349,(5),null);var volume = cljs.core.nth.call(null,vec__38349,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__38342.call(null,cljs.core.rest.call(null,s__38343__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__38365){var vec__38366 = p__38365;var d = cljs.core.nth.call(null,vec__38366,(0),null);var o = cljs.core.nth.call(null,vec__38366,(1),null);var h = cljs.core.nth.call(null,vec__38366,(2),null);var l = cljs.core.nth.call(null,vec__38366,(3),null);var c = cljs.core.nth.call(null,vec__38366,(4),null);var v = cljs.core.nth.call(null,vec__38366,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__38367,p__38368){var vec__38369 = p__38367;var d1 = cljs.core.nth.call(null,vec__38369,(0),null);var _ = cljs.core.nth.call(null,vec__38369,(1),null);var ___$1 = cljs.core.nth.call(null,vec__38369,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38369,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38369,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38369,(5),null);var prev = vec__38369;var vec__38370 = p__38368;var d2 = cljs.core.nth.call(null,vec__38370,(0),null);var o = cljs.core.nth.call(null,vec__38370,(1),null);var h = cljs.core.nth.call(null,vec__38370,(2),null);var l = cljs.core.nth.call(null,vec__38370,(3),null);var c = cljs.core.nth.call(null,vec__38370,(4),null);var v = cljs.core.nth.call(null,vec__38370,(5),null);var curr = vec__38370;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__38371,p__38372){var vec__38373 = p__38371;var d1 = cljs.core.nth.call(null,vec__38373,(0),null);var _ = cljs.core.nth.call(null,vec__38373,(1),null);var ___$1 = cljs.core.nth.call(null,vec__38373,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38373,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38373,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38373,(5),null);var prev = vec__38373;var vec__38374 = p__38372;var d2 = cljs.core.nth.call(null,vec__38374,(0),null);var o = cljs.core.nth.call(null,vec__38374,(1),null);var h = cljs.core.nth.call(null,vec__38374,(2),null);var l = cljs.core.nth.call(null,vec__38374,(3),null);var c = cljs.core.nth.call(null,vec__38374,(4),null);var v = cljs.core.nth.call(null,vec__38374,(5),null);var curr = vec__38374;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__38375){var vec__38376 = p__38375;var d = cljs.core.nth.call(null,vec__38376,(0),null);var o = cljs.core.nth.call(null,vec__38376,(1),null);var h = cljs.core.nth.call(null,vec__38376,(2),null);var l = cljs.core.nth.call(null,vec__38376,(3),null);var c = cljs.core.nth.call(null,vec__38376,(4),null);var v = cljs.core.nth.call(null,vec__38376,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__38377){var vec__38378 = p__38377;var d = cljs.core.nth.call(null,vec__38378,(0),null);var o = cljs.core.nth.call(null,vec__38378,(1),null);var h = cljs.core.nth.call(null,vec__38378,(2),null);var l = cljs.core.nth.call(null,vec__38378,(3),null);var c = cljs.core.nth.call(null,vec__38378,(4),null);var v = cljs.core.nth.call(null,vec__38378,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj38416 = {"url":"/proxy","dataType":"text","data":(function (){var obj38418 = {"url":url};return obj38418;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_38425){var state_val_38426 = (state_38425[(1)]);if((state_val_38426 === (2)))
{var inst_38422 = (state_38425[(2)]);var inst_38423 = cljs.core.async.close_BANG_.call(null,ret);var state_38425__$1 = (function (){var statearr_38427 = state_38425;(statearr_38427[(7)] = inst_38422);
return statearr_38427;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38425__$1,inst_38423);
} else
{if((state_val_38426 === (1)))
{var inst_38419 = [null,data];var inst_38420 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38419,null));var state_38425__$1 = state_38425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38425__$1,(2),ret,inst_38420);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38431 = [null,null,null,null,null,null,null,null];(statearr_38431[(0)] = state_machine__6188__auto__);
(statearr_38431[(1)] = (1));
return statearr_38431;
});
var state_machine__6188__auto____1 = (function (state_38425){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38425);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38432){if((e38432 instanceof Object))
{var ex__6191__auto__ = e38432;var statearr_38433_38451 = state_38425;(statearr_38433_38451[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38425);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38452 = state_38425;
state_38425 = G__38452;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38425){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_38434 = f__6203__auto__.call(null);(statearr_38434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_38441){var state_val_38442 = (state_38441[(1)]);if((state_val_38442 === (2)))
{var inst_38438 = (state_38441[(2)]);var inst_38439 = cljs.core.async.close_BANG_.call(null,ret);var state_38441__$1 = (function (){var statearr_38443 = state_38441;(statearr_38443[(7)] = inst_38438);
return statearr_38443;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38441__$1,inst_38439);
} else
{if((state_val_38442 === (1)))
{var inst_38435 = [err];var inst_38436 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38435,null));var state_38441__$1 = state_38441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38441__$1,(2),ret,inst_38436);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38447 = [null,null,null,null,null,null,null,null];(statearr_38447[(0)] = state_machine__6188__auto__);
(statearr_38447[(1)] = (1));
return statearr_38447;
});
var state_machine__6188__auto____1 = (function (state_38441){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38448){if((e38448 instanceof Object))
{var ex__6191__auto__ = e38448;var statearr_38449_38453 = state_38441;(statearr_38449_38453[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38454 = state_38441;
state_38441 = G__38454;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38441){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_38450 = f__6203__auto__.call(null);(statearr_38450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj38416;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__38463(s__38464){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__38464__$1 = s__38464;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38464__$1);if(temp__4126__auto__)
{var s__38464__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38464__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__38464__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__38466 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__38465 = (0);while(true){
if((i__38465 < size__4275__auto__))
{var vec__38469 = cljs.core._nth.call(null,c__4274__auto__,i__38465);var _ = cljs.core.nth.call(null,vec__38469,(0),null);var date = cljs.core.nth.call(null,vec__38469,(1),null);var open = cljs.core.nth.call(null,vec__38469,(2),null);var high = cljs.core.nth.call(null,vec__38469,(3),null);var low = cljs.core.nth.call(null,vec__38469,(4),null);var close = cljs.core.nth.call(null,vec__38469,(5),null);var volume = cljs.core.nth.call(null,vec__38469,(6),null);cljs.core.chunk_append.call(null,b__38466,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__38471 = (i__38465 + (1));
i__38465 = G__38471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38466),iter__38463.call(null,cljs.core.chunk_rest.call(null,s__38464__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38466),null);
}
} else
{var vec__38470 = cljs.core.first.call(null,s__38464__$2);var _ = cljs.core.nth.call(null,vec__38470,(0),null);var date = cljs.core.nth.call(null,vec__38470,(1),null);var open = cljs.core.nth.call(null,vec__38470,(2),null);var high = cljs.core.nth.call(null,vec__38470,(3),null);var low = cljs.core.nth.call(null,vec__38470,(4),null);var close = cljs.core.nth.call(null,vec__38470,(5),null);var volume = cljs.core.nth.call(null,vec__38470,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__38463.call(null,cljs.core.rest.call(null,s__38464__$2)));
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
return (function (state_38549){var state_val_38550 = (state_38549[(1)]);if((state_val_38550 === (9)))
{var inst_38539 = (state_38549[(2)]);var state_38549__$1 = state_38549;var statearr_38551_38568 = state_38549__$1;(statearr_38551_38568[(2)] = inst_38539);
(statearr_38551_38568[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38550 === (8)))
{var inst_38545 = (state_38549[(2)]);var state_38549__$1 = state_38549;var statearr_38552_38569 = state_38549__$1;(statearr_38552_38569[(2)] = inst_38545);
(statearr_38552_38569[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38550 === (7)))
{var inst_38531 = (state_38549[(7)]);var inst_38541 = cljs.core.concat.call(null,all,inst_38531);var inst_38542 = [null,inst_38541];var inst_38543 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38542,null));var state_38549__$1 = state_38549;var statearr_38553_38570 = state_38549__$1;(statearr_38553_38570[(2)] = inst_38543);
(statearr_38553_38570[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38550 === (6)))
{var inst_38531 = (state_38549[(7)]);var inst_38535 = cljs.core.concat.call(null,all,inst_38531);var inst_38536 = (start + num);var inst_38537 = goog_historical_info.call(null,inst_38535,id,startdate,inst_38536,num);var state_38549__$1 = state_38549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38549__$1,(9),inst_38537);
} else
{if((state_val_38550 === (5)))
{var inst_38547 = (state_38549[(2)]);var state_38549__$1 = state_38549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38549__$1,inst_38547);
} else
{if((state_val_38550 === (4)))
{var inst_38531 = (state_38549[(7)]);var inst_38526 = (state_38549[(8)]);var inst_38531__$1 = stock.tool.parse_historical.call(null,inst_38526);var inst_38532 = cljs.core.count.call(null,inst_38531__$1);var inst_38533 = cljs.core._EQ_.call(null,num,inst_38532);var state_38549__$1 = (function (){var statearr_38554 = state_38549;(statearr_38554[(7)] = inst_38531__$1);
return statearr_38554;
})();if(inst_38533)
{var statearr_38555_38571 = state_38549__$1;(statearr_38555_38571[(1)] = (6));
} else
{var statearr_38556_38572 = state_38549__$1;(statearr_38556_38572[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38550 === (3)))
{var inst_38525 = (state_38549[(9)]);var inst_38528 = [inst_38525];var inst_38529 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38528,null));var state_38549__$1 = state_38549;var statearr_38557_38573 = state_38549__$1;(statearr_38557_38573[(2)] = inst_38529);
(statearr_38557_38573[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38550 === (2)))
{var inst_38525 = (state_38549[(9)]);var inst_38524 = (state_38549[(2)]);var inst_38525__$1 = cljs.core.nth.call(null,inst_38524,(0),null);var inst_38526 = cljs.core.nth.call(null,inst_38524,(1),null);var state_38549__$1 = (function (){var statearr_38558 = state_38549;(statearr_38558[(8)] = inst_38526);
(statearr_38558[(9)] = inst_38525__$1);
return statearr_38558;
})();if(cljs.core.truth_(inst_38525__$1))
{var statearr_38559_38574 = state_38549__$1;(statearr_38559_38574[(1)] = (3));
} else
{var statearr_38560_38575 = state_38549__$1;(statearr_38560_38575[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38550 === (1)))
{var inst_38521 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_38522 = stock.tool.content.call(null,inst_38521);var state_38549__$1 = state_38549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38549__$1,(2),inst_38522);
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
var state_machine__6188__auto____0 = (function (){var statearr_38564 = [null,null,null,null,null,null,null,null,null,null];(statearr_38564[(0)] = state_machine__6188__auto__);
(statearr_38564[(1)] = (1));
return statearr_38564;
});
var state_machine__6188__auto____1 = (function (state_38549){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38565){if((e38565 instanceof Object))
{var ex__6191__auto__ = e38565;var statearr_38566_38576 = state_38549;(statearr_38566_38576[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38577 = state_38549;
state_38549 = G__38577;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38549){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_38567 = f__6203__auto__.call(null);(statearr_38567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__38579 = kline;var date__$1 = cljs.core.nth.call(null,vec__38579,(0),null);var _ = cljs.core.nth.call(null,vec__38579,(1),null);var ___$1 = cljs.core.nth.call(null,vec__38579,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38579,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38579,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38579,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__38581 = kline;var _ = cljs.core.nth.call(null,vec__38581,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38581,(1),null);var high__$1 = cljs.core.nth.call(null,vec__38581,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38581,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38581,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38581,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__38583 = kline;var _ = cljs.core.nth.call(null,vec__38583,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38583,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38583,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38583,(3),null);var open__$1 = cljs.core.nth.call(null,vec__38583,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38583,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__38585 = kline;var _ = cljs.core.nth.call(null,vec__38585,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38585,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38585,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38585,(3),null);var close__$1 = cljs.core.nth.call(null,vec__38585,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38585,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__38587 = kline;var _ = cljs.core.nth.call(null,vec__38587,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38587,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38587,(2),null);var low__$1 = cljs.core.nth.call(null,vec__38587,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38587,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38587,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__38589 = kline;var _ = cljs.core.nth.call(null,vec__38589,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38589,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38589,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38589,(3),null);var ___$4 = cljs.core.nth.call(null,vec__38589,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__38589,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__38591 = kline;var _ = cljs.core.nth.call(null,vec__38591,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38591,(1),null);var high = cljs.core.nth.call(null,vec__38591,(2),null);var low = cljs.core.nth.call(null,vec__38591,(3),null);var ___$2 = cljs.core.nth.call(null,vec__38591,(4),null);var ___$3 = cljs.core.nth.call(null,vec__38591,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__38593 = kline;var _ = cljs.core.nth.call(null,vec__38593,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38593,(1),null);var high = cljs.core.nth.call(null,vec__38593,(2),null);var low = cljs.core.nth.call(null,vec__38593,(3),null);var close = cljs.core.nth.call(null,vec__38593,(4),null);var ___$2 = cljs.core.nth.call(null,vec__38593,(5),null);return (((high + low) + close) / (3));
}
});
