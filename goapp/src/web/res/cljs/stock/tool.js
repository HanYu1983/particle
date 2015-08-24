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
return (function iter__20276(s__20277){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__20277__$1 = s__20277;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20277__$1);if(temp__4126__auto__)
{var s__20277__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20277__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__20277__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__20279 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__20278 = (0);while(true){
if((i__20278 < size__4275__auto__))
{var vec__20282 = cljs.core._nth.call(null,c__4274__auto__,i__20278);var _ = cljs.core.nth.call(null,vec__20282,(0),null);var date = cljs.core.nth.call(null,vec__20282,(1),null);var close = cljs.core.nth.call(null,vec__20282,(2),null);var high = cljs.core.nth.call(null,vec__20282,(3),null);var low = cljs.core.nth.call(null,vec__20282,(4),null);var open = cljs.core.nth.call(null,vec__20282,(5),null);var volume = cljs.core.nth.call(null,vec__20282,(6),null);cljs.core.chunk_append.call(null,b__20279,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__20284 = (i__20278 + (1));
i__20278 = G__20284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20279),iter__20276.call(null,cljs.core.chunk_rest.call(null,s__20277__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20279),null);
}
} else
{var vec__20283 = cljs.core.first.call(null,s__20277__$2);var _ = cljs.core.nth.call(null,vec__20283,(0),null);var date = cljs.core.nth.call(null,vec__20283,(1),null);var close = cljs.core.nth.call(null,vec__20283,(2),null);var high = cljs.core.nth.call(null,vec__20283,(3),null);var low = cljs.core.nth.call(null,vec__20283,(4),null);var open = cljs.core.nth.call(null,vec__20283,(5),null);var volume = cljs.core.nth.call(null,vec__20283,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__20276.call(null,cljs.core.rest.call(null,s__20277__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__20297){var vec__20298 = p__20297;var d = cljs.core.nth.call(null,vec__20298,(0),null);var o = cljs.core.nth.call(null,vec__20298,(1),null);var h = cljs.core.nth.call(null,vec__20298,(2),null);var l = cljs.core.nth.call(null,vec__20298,(3),null);var c = cljs.core.nth.call(null,vec__20298,(4),null);var v = cljs.core.nth.call(null,vec__20298,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__20299,p__20300){var vec__20301 = p__20299;var d1 = cljs.core.nth.call(null,vec__20301,(0),null);var _ = cljs.core.nth.call(null,vec__20301,(1),null);var ___$1 = cljs.core.nth.call(null,vec__20301,(2),null);var ___$2 = cljs.core.nth.call(null,vec__20301,(3),null);var ___$3 = cljs.core.nth.call(null,vec__20301,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20301,(5),null);var prev = vec__20301;var vec__20302 = p__20300;var d2 = cljs.core.nth.call(null,vec__20302,(0),null);var o = cljs.core.nth.call(null,vec__20302,(1),null);var h = cljs.core.nth.call(null,vec__20302,(2),null);var l = cljs.core.nth.call(null,vec__20302,(3),null);var c = cljs.core.nth.call(null,vec__20302,(4),null);var v = cljs.core.nth.call(null,vec__20302,(5),null);var curr = vec__20302;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__20303,p__20304){var vec__20305 = p__20303;var d1 = cljs.core.nth.call(null,vec__20305,(0),null);var _ = cljs.core.nth.call(null,vec__20305,(1),null);var ___$1 = cljs.core.nth.call(null,vec__20305,(2),null);var ___$2 = cljs.core.nth.call(null,vec__20305,(3),null);var ___$3 = cljs.core.nth.call(null,vec__20305,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20305,(5),null);var prev = vec__20305;var vec__20306 = p__20304;var d2 = cljs.core.nth.call(null,vec__20306,(0),null);var o = cljs.core.nth.call(null,vec__20306,(1),null);var h = cljs.core.nth.call(null,vec__20306,(2),null);var l = cljs.core.nth.call(null,vec__20306,(3),null);var c = cljs.core.nth.call(null,vec__20306,(4),null);var v = cljs.core.nth.call(null,vec__20306,(5),null);var curr = vec__20306;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.map.call(null,((function (pass1,pass2,pass3){
return (function (p__20307){var vec__20308 = p__20307;var d = cljs.core.nth.call(null,vec__20308,(0),null);var o = cljs.core.nth.call(null,vec__20308,(1),null);var h = cljs.core.nth.call(null,vec__20308,(2),null);var l = cljs.core.nth.call(null,vec__20308,(3),null);var c = cljs.core.nth.call(null,vec__20308,(4),null);var v = cljs.core.nth.call(null,vec__20308,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3))
,pass3);return pass4;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj20346 = {"url":"/proxy","dataType":"text","data":(function (){var obj20348 = {"url":url};return obj20348;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_20355){var state_val_20356 = (state_20355[(1)]);if((state_val_20356 === (2)))
{var inst_20352 = (state_20355[(2)]);var inst_20353 = cljs.core.async.close_BANG_.call(null,ret);var state_20355__$1 = (function (){var statearr_20357 = state_20355;(statearr_20357[(7)] = inst_20352);
return statearr_20357;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20355__$1,inst_20353);
} else
{if((state_val_20356 === (1)))
{var inst_20349 = [null,data];var inst_20350 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20349,null));var state_20355__$1 = state_20355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20355__$1,(2),ret,inst_20350);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20361 = [null,null,null,null,null,null,null,null];(statearr_20361[(0)] = state_machine__6188__auto__);
(statearr_20361[(1)] = (1));
return statearr_20361;
});
var state_machine__6188__auto____1 = (function (state_20355){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20362){if((e20362 instanceof Object))
{var ex__6191__auto__ = e20362;var statearr_20363_20381 = state_20355;(statearr_20363_20381[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20382 = state_20355;
state_20355 = G__20382;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20355){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_20364 = f__6203__auto__.call(null);(statearr_20364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_20371){var state_val_20372 = (state_20371[(1)]);if((state_val_20372 === (2)))
{var inst_20368 = (state_20371[(2)]);var inst_20369 = cljs.core.async.close_BANG_.call(null,ret);var state_20371__$1 = (function (){var statearr_20373 = state_20371;(statearr_20373[(7)] = inst_20368);
return statearr_20373;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20371__$1,inst_20369);
} else
{if((state_val_20372 === (1)))
{var inst_20365 = [err];var inst_20366 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20365,null));var state_20371__$1 = state_20371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20371__$1,(2),ret,inst_20366);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20377 = [null,null,null,null,null,null,null,null];(statearr_20377[(0)] = state_machine__6188__auto__);
(statearr_20377[(1)] = (1));
return statearr_20377;
});
var state_machine__6188__auto____1 = (function (state_20371){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20378){if((e20378 instanceof Object))
{var ex__6191__auto__ = e20378;var statearr_20379_20383 = state_20371;(statearr_20379_20383[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20384 = state_20371;
state_20371 = G__20384;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20371){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_20380 = f__6203__auto__.call(null);(statearr_20380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj20346;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__20393(s__20394){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__20394__$1 = s__20394;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20394__$1);if(temp__4126__auto__)
{var s__20394__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20394__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__20394__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__20396 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__20395 = (0);while(true){
if((i__20395 < size__4275__auto__))
{var vec__20399 = cljs.core._nth.call(null,c__4274__auto__,i__20395);var _ = cljs.core.nth.call(null,vec__20399,(0),null);var date = cljs.core.nth.call(null,vec__20399,(1),null);var open = cljs.core.nth.call(null,vec__20399,(2),null);var high = cljs.core.nth.call(null,vec__20399,(3),null);var low = cljs.core.nth.call(null,vec__20399,(4),null);var close = cljs.core.nth.call(null,vec__20399,(5),null);var volume = cljs.core.nth.call(null,vec__20399,(6),null);cljs.core.chunk_append.call(null,b__20396,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__20401 = (i__20395 + (1));
i__20395 = G__20401;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20396),iter__20393.call(null,cljs.core.chunk_rest.call(null,s__20394__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20396),null);
}
} else
{var vec__20400 = cljs.core.first.call(null,s__20394__$2);var _ = cljs.core.nth.call(null,vec__20400,(0),null);var date = cljs.core.nth.call(null,vec__20400,(1),null);var open = cljs.core.nth.call(null,vec__20400,(2),null);var high = cljs.core.nth.call(null,vec__20400,(3),null);var low = cljs.core.nth.call(null,vec__20400,(4),null);var close = cljs.core.nth.call(null,vec__20400,(5),null);var volume = cljs.core.nth.call(null,vec__20400,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__20393.call(null,cljs.core.rest.call(null,s__20394__$2)));
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
return (function (state_20479){var state_val_20480 = (state_20479[(1)]);if((state_val_20480 === (9)))
{var inst_20469 = (state_20479[(2)]);var state_20479__$1 = state_20479;var statearr_20481_20498 = state_20479__$1;(statearr_20481_20498[(2)] = inst_20469);
(statearr_20481_20498[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (8)))
{var inst_20475 = (state_20479[(2)]);var state_20479__$1 = state_20479;var statearr_20482_20499 = state_20479__$1;(statearr_20482_20499[(2)] = inst_20475);
(statearr_20482_20499[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (7)))
{var inst_20461 = (state_20479[(7)]);var inst_20471 = cljs.core.concat.call(null,all,inst_20461);var inst_20472 = [null,inst_20471];var inst_20473 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20472,null));var state_20479__$1 = state_20479;var statearr_20483_20500 = state_20479__$1;(statearr_20483_20500[(2)] = inst_20473);
(statearr_20483_20500[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (6)))
{var inst_20461 = (state_20479[(7)]);var inst_20465 = cljs.core.concat.call(null,all,inst_20461);var inst_20466 = (start + num);var inst_20467 = goog_historical_info.call(null,inst_20465,id,startdate,inst_20466,num);var state_20479__$1 = state_20479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20479__$1,(9),inst_20467);
} else
{if((state_val_20480 === (5)))
{var inst_20477 = (state_20479[(2)]);var state_20479__$1 = state_20479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20479__$1,inst_20477);
} else
{if((state_val_20480 === (4)))
{var inst_20461 = (state_20479[(7)]);var inst_20456 = (state_20479[(8)]);var inst_20461__$1 = stock.tool.parse_historical.call(null,inst_20456);var inst_20462 = cljs.core.count.call(null,inst_20461__$1);var inst_20463 = cljs.core._EQ_.call(null,num,inst_20462);var state_20479__$1 = (function (){var statearr_20484 = state_20479;(statearr_20484[(7)] = inst_20461__$1);
return statearr_20484;
})();if(inst_20463)
{var statearr_20485_20501 = state_20479__$1;(statearr_20485_20501[(1)] = (6));
} else
{var statearr_20486_20502 = state_20479__$1;(statearr_20486_20502[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (3)))
{var inst_20455 = (state_20479[(9)]);var inst_20458 = [inst_20455];var inst_20459 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20458,null));var state_20479__$1 = state_20479;var statearr_20487_20503 = state_20479__$1;(statearr_20487_20503[(2)] = inst_20459);
(statearr_20487_20503[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (2)))
{var inst_20455 = (state_20479[(9)]);var inst_20454 = (state_20479[(2)]);var inst_20455__$1 = cljs.core.nth.call(null,inst_20454,(0),null);var inst_20456 = cljs.core.nth.call(null,inst_20454,(1),null);var state_20479__$1 = (function (){var statearr_20488 = state_20479;(statearr_20488[(8)] = inst_20456);
(statearr_20488[(9)] = inst_20455__$1);
return statearr_20488;
})();if(cljs.core.truth_(inst_20455__$1))
{var statearr_20489_20504 = state_20479__$1;(statearr_20489_20504[(1)] = (3));
} else
{var statearr_20490_20505 = state_20479__$1;(statearr_20490_20505[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (1)))
{var inst_20451 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_20452 = stock.tool.content.call(null,inst_20451);var state_20479__$1 = state_20479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20479__$1,(2),inst_20452);
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
var state_machine__6188__auto____0 = (function (){var statearr_20494 = [null,null,null,null,null,null,null,null,null,null];(statearr_20494[(0)] = state_machine__6188__auto__);
(statearr_20494[(1)] = (1));
return statearr_20494;
});
var state_machine__6188__auto____1 = (function (state_20479){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20479);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20495){if((e20495 instanceof Object))
{var ex__6191__auto__ = e20495;var statearr_20496_20506 = state_20479;(statearr_20496_20506[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20507 = state_20479;
state_20479 = G__20507;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20479){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20497 = f__6203__auto__.call(null);(statearr_20497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__20509 = kline;var date__$1 = cljs.core.nth.call(null,vec__20509,(0),null);var _ = cljs.core.nth.call(null,vec__20509,(1),null);var ___$1 = cljs.core.nth.call(null,vec__20509,(2),null);var ___$2 = cljs.core.nth.call(null,vec__20509,(3),null);var ___$3 = cljs.core.nth.call(null,vec__20509,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20509,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__20511 = kline;var _ = cljs.core.nth.call(null,vec__20511,(0),null);var ___$1 = cljs.core.nth.call(null,vec__20511,(1),null);var high__$1 = cljs.core.nth.call(null,vec__20511,(2),null);var ___$2 = cljs.core.nth.call(null,vec__20511,(3),null);var ___$3 = cljs.core.nth.call(null,vec__20511,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20511,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__20513 = kline;var _ = cljs.core.nth.call(null,vec__20513,(0),null);var ___$1 = cljs.core.nth.call(null,vec__20513,(1),null);var ___$2 = cljs.core.nth.call(null,vec__20513,(2),null);var ___$3 = cljs.core.nth.call(null,vec__20513,(3),null);var open__$1 = cljs.core.nth.call(null,vec__20513,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20513,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__20515 = kline;var _ = cljs.core.nth.call(null,vec__20515,(0),null);var ___$1 = cljs.core.nth.call(null,vec__20515,(1),null);var ___$2 = cljs.core.nth.call(null,vec__20515,(2),null);var ___$3 = cljs.core.nth.call(null,vec__20515,(3),null);var close__$1 = cljs.core.nth.call(null,vec__20515,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20515,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__20517 = kline;var _ = cljs.core.nth.call(null,vec__20517,(0),null);var ___$1 = cljs.core.nth.call(null,vec__20517,(1),null);var ___$2 = cljs.core.nth.call(null,vec__20517,(2),null);var low__$1 = cljs.core.nth.call(null,vec__20517,(3),null);var ___$3 = cljs.core.nth.call(null,vec__20517,(4),null);var ___$4 = cljs.core.nth.call(null,vec__20517,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__20519 = kline;var _ = cljs.core.nth.call(null,vec__20519,(0),null);var ___$1 = cljs.core.nth.call(null,vec__20519,(1),null);var ___$2 = cljs.core.nth.call(null,vec__20519,(2),null);var ___$3 = cljs.core.nth.call(null,vec__20519,(3),null);var ___$4 = cljs.core.nth.call(null,vec__20519,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__20519,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__20521 = kline;var _ = cljs.core.nth.call(null,vec__20521,(0),null);var ___$1 = cljs.core.nth.call(null,vec__20521,(1),null);var high = cljs.core.nth.call(null,vec__20521,(2),null);var low = cljs.core.nth.call(null,vec__20521,(3),null);var close = cljs.core.nth.call(null,vec__20521,(4),null);var ___$2 = cljs.core.nth.call(null,vec__20521,(5),null);return (((high + low) + close) / (3));
}
});
