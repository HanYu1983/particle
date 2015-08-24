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
return (function iter__50270(s__50271){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__50271__$1 = s__50271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50271__$1);if(temp__4126__auto__)
{var s__50271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50271__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__50271__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__50273 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__50272 = (0);while(true){
if((i__50272 < size__4275__auto__))
{var vec__50276 = cljs.core._nth.call(null,c__4274__auto__,i__50272);var _ = cljs.core.nth.call(null,vec__50276,(0),null);var date = cljs.core.nth.call(null,vec__50276,(1),null);var close = cljs.core.nth.call(null,vec__50276,(2),null);var high = cljs.core.nth.call(null,vec__50276,(3),null);var low = cljs.core.nth.call(null,vec__50276,(4),null);var open = cljs.core.nth.call(null,vec__50276,(5),null);var volume = cljs.core.nth.call(null,vec__50276,(6),null);cljs.core.chunk_append.call(null,b__50273,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__50278 = (i__50272 + (1));
i__50272 = G__50278;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50273),iter__50270.call(null,cljs.core.chunk_rest.call(null,s__50271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50273),null);
}
} else
{var vec__50277 = cljs.core.first.call(null,s__50271__$2);var _ = cljs.core.nth.call(null,vec__50277,(0),null);var date = cljs.core.nth.call(null,vec__50277,(1),null);var close = cljs.core.nth.call(null,vec__50277,(2),null);var high = cljs.core.nth.call(null,vec__50277,(3),null);var low = cljs.core.nth.call(null,vec__50277,(4),null);var open = cljs.core.nth.call(null,vec__50277,(5),null);var volume = cljs.core.nth.call(null,vec__50277,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__50270.call(null,cljs.core.rest.call(null,s__50271__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__50291){var vec__50292 = p__50291;var d = cljs.core.nth.call(null,vec__50292,(0),null);var o = cljs.core.nth.call(null,vec__50292,(1),null);var h = cljs.core.nth.call(null,vec__50292,(2),null);var l = cljs.core.nth.call(null,vec__50292,(3),null);var c = cljs.core.nth.call(null,vec__50292,(4),null);var v = cljs.core.nth.call(null,vec__50292,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__50293,p__50294){var vec__50295 = p__50293;var d1 = cljs.core.nth.call(null,vec__50295,(0),null);var _ = cljs.core.nth.call(null,vec__50295,(1),null);var ___$1 = cljs.core.nth.call(null,vec__50295,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50295,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50295,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50295,(5),null);var prev = vec__50295;var vec__50296 = p__50294;var d2 = cljs.core.nth.call(null,vec__50296,(0),null);var o = cljs.core.nth.call(null,vec__50296,(1),null);var h = cljs.core.nth.call(null,vec__50296,(2),null);var l = cljs.core.nth.call(null,vec__50296,(3),null);var c = cljs.core.nth.call(null,vec__50296,(4),null);var v = cljs.core.nth.call(null,vec__50296,(5),null);var curr = vec__50296;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__50297,p__50298){var vec__50299 = p__50297;var d1 = cljs.core.nth.call(null,vec__50299,(0),null);var _ = cljs.core.nth.call(null,vec__50299,(1),null);var ___$1 = cljs.core.nth.call(null,vec__50299,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50299,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50299,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50299,(5),null);var prev = vec__50299;var vec__50300 = p__50298;var d2 = cljs.core.nth.call(null,vec__50300,(0),null);var o = cljs.core.nth.call(null,vec__50300,(1),null);var h = cljs.core.nth.call(null,vec__50300,(2),null);var l = cljs.core.nth.call(null,vec__50300,(3),null);var c = cljs.core.nth.call(null,vec__50300,(4),null);var v = cljs.core.nth.call(null,vec__50300,(5),null);var curr = vec__50300;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.map.call(null,((function (pass1,pass2,pass3){
return (function (p__50301){var vec__50302 = p__50301;var d = cljs.core.nth.call(null,vec__50302,(0),null);var o = cljs.core.nth.call(null,vec__50302,(1),null);var h = cljs.core.nth.call(null,vec__50302,(2),null);var l = cljs.core.nth.call(null,vec__50302,(3),null);var c = cljs.core.nth.call(null,vec__50302,(4),null);var v = cljs.core.nth.call(null,vec__50302,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3))
,pass3);return pass4;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj50340 = {"url":"/proxy","dataType":"text","data":(function (){var obj50342 = {"url":url};return obj50342;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_50349){var state_val_50350 = (state_50349[(1)]);if((state_val_50350 === (2)))
{var inst_50346 = (state_50349[(2)]);var inst_50347 = cljs.core.async.close_BANG_.call(null,ret);var state_50349__$1 = (function (){var statearr_50351 = state_50349;(statearr_50351[(7)] = inst_50346);
return statearr_50351;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50349__$1,inst_50347);
} else
{if((state_val_50350 === (1)))
{var inst_50343 = [null,data];var inst_50344 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50343,null));var state_50349__$1 = state_50349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50349__$1,(2),ret,inst_50344);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50355 = [null,null,null,null,null,null,null,null];(statearr_50355[(0)] = state_machine__6188__auto__);
(statearr_50355[(1)] = (1));
return statearr_50355;
});
var state_machine__6188__auto____1 = (function (state_50349){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50356){if((e50356 instanceof Object))
{var ex__6191__auto__ = e50356;var statearr_50357_50375 = state_50349;(statearr_50357_50375[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50349);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50376 = state_50349;
state_50349 = G__50376;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50349){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_50358 = f__6203__auto__.call(null);(statearr_50358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_50365){var state_val_50366 = (state_50365[(1)]);if((state_val_50366 === (2)))
{var inst_50362 = (state_50365[(2)]);var inst_50363 = cljs.core.async.close_BANG_.call(null,ret);var state_50365__$1 = (function (){var statearr_50367 = state_50365;(statearr_50367[(7)] = inst_50362);
return statearr_50367;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50365__$1,inst_50363);
} else
{if((state_val_50366 === (1)))
{var inst_50359 = [err];var inst_50360 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50359,null));var state_50365__$1 = state_50365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50365__$1,(2),ret,inst_50360);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50371 = [null,null,null,null,null,null,null,null];(statearr_50371[(0)] = state_machine__6188__auto__);
(statearr_50371[(1)] = (1));
return statearr_50371;
});
var state_machine__6188__auto____1 = (function (state_50365){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50365);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50372){if((e50372 instanceof Object))
{var ex__6191__auto__ = e50372;var statearr_50373_50377 = state_50365;(statearr_50373_50377[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50365);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50378 = state_50365;
state_50365 = G__50378;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50365){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_50374 = f__6203__auto__.call(null);(statearr_50374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj50340;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__50387(s__50388){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__50388__$1 = s__50388;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50388__$1);if(temp__4126__auto__)
{var s__50388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50388__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__50388__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__50390 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__50389 = (0);while(true){
if((i__50389 < size__4275__auto__))
{var vec__50393 = cljs.core._nth.call(null,c__4274__auto__,i__50389);var _ = cljs.core.nth.call(null,vec__50393,(0),null);var date = cljs.core.nth.call(null,vec__50393,(1),null);var open = cljs.core.nth.call(null,vec__50393,(2),null);var high = cljs.core.nth.call(null,vec__50393,(3),null);var low = cljs.core.nth.call(null,vec__50393,(4),null);var close = cljs.core.nth.call(null,vec__50393,(5),null);var volume = cljs.core.nth.call(null,vec__50393,(6),null);cljs.core.chunk_append.call(null,b__50390,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__50395 = (i__50389 + (1));
i__50389 = G__50395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50390),iter__50387.call(null,cljs.core.chunk_rest.call(null,s__50388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50390),null);
}
} else
{var vec__50394 = cljs.core.first.call(null,s__50388__$2);var _ = cljs.core.nth.call(null,vec__50394,(0),null);var date = cljs.core.nth.call(null,vec__50394,(1),null);var open = cljs.core.nth.call(null,vec__50394,(2),null);var high = cljs.core.nth.call(null,vec__50394,(3),null);var low = cljs.core.nth.call(null,vec__50394,(4),null);var close = cljs.core.nth.call(null,vec__50394,(5),null);var volume = cljs.core.nth.call(null,vec__50394,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__50387.call(null,cljs.core.rest.call(null,s__50388__$2)));
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
return (function (state_50473){var state_val_50474 = (state_50473[(1)]);if((state_val_50474 === (9)))
{var inst_50463 = (state_50473[(2)]);var state_50473__$1 = state_50473;var statearr_50475_50492 = state_50473__$1;(statearr_50475_50492[(2)] = inst_50463);
(statearr_50475_50492[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50474 === (8)))
{var inst_50469 = (state_50473[(2)]);var state_50473__$1 = state_50473;var statearr_50476_50493 = state_50473__$1;(statearr_50476_50493[(2)] = inst_50469);
(statearr_50476_50493[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50474 === (7)))
{var inst_50455 = (state_50473[(7)]);var inst_50465 = cljs.core.concat.call(null,all,inst_50455);var inst_50466 = [null,inst_50465];var inst_50467 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50466,null));var state_50473__$1 = state_50473;var statearr_50477_50494 = state_50473__$1;(statearr_50477_50494[(2)] = inst_50467);
(statearr_50477_50494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50474 === (6)))
{var inst_50455 = (state_50473[(7)]);var inst_50459 = cljs.core.concat.call(null,all,inst_50455);var inst_50460 = (start + num);var inst_50461 = goog_historical_info.call(null,inst_50459,id,startdate,inst_50460,num);var state_50473__$1 = state_50473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50473__$1,(9),inst_50461);
} else
{if((state_val_50474 === (5)))
{var inst_50471 = (state_50473[(2)]);var state_50473__$1 = state_50473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50473__$1,inst_50471);
} else
{if((state_val_50474 === (4)))
{var inst_50455 = (state_50473[(7)]);var inst_50450 = (state_50473[(8)]);var inst_50455__$1 = stock.tool.parse_historical.call(null,inst_50450);var inst_50456 = cljs.core.count.call(null,inst_50455__$1);var inst_50457 = cljs.core._EQ_.call(null,num,inst_50456);var state_50473__$1 = (function (){var statearr_50478 = state_50473;(statearr_50478[(7)] = inst_50455__$1);
return statearr_50478;
})();if(inst_50457)
{var statearr_50479_50495 = state_50473__$1;(statearr_50479_50495[(1)] = (6));
} else
{var statearr_50480_50496 = state_50473__$1;(statearr_50480_50496[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50474 === (3)))
{var inst_50449 = (state_50473[(9)]);var inst_50452 = [inst_50449];var inst_50453 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50452,null));var state_50473__$1 = state_50473;var statearr_50481_50497 = state_50473__$1;(statearr_50481_50497[(2)] = inst_50453);
(statearr_50481_50497[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50474 === (2)))
{var inst_50449 = (state_50473[(9)]);var inst_50448 = (state_50473[(2)]);var inst_50449__$1 = cljs.core.nth.call(null,inst_50448,(0),null);var inst_50450 = cljs.core.nth.call(null,inst_50448,(1),null);var state_50473__$1 = (function (){var statearr_50482 = state_50473;(statearr_50482[(9)] = inst_50449__$1);
(statearr_50482[(8)] = inst_50450);
return statearr_50482;
})();if(cljs.core.truth_(inst_50449__$1))
{var statearr_50483_50498 = state_50473__$1;(statearr_50483_50498[(1)] = (3));
} else
{var statearr_50484_50499 = state_50473__$1;(statearr_50484_50499[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50474 === (1)))
{var inst_50445 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_50446 = stock.tool.content.call(null,inst_50445);var state_50473__$1 = state_50473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50473__$1,(2),inst_50446);
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
var state_machine__6188__auto____0 = (function (){var statearr_50488 = [null,null,null,null,null,null,null,null,null,null];(statearr_50488[(0)] = state_machine__6188__auto__);
(statearr_50488[(1)] = (1));
return statearr_50488;
});
var state_machine__6188__auto____1 = (function (state_50473){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50489){if((e50489 instanceof Object))
{var ex__6191__auto__ = e50489;var statearr_50490_50500 = state_50473;(statearr_50490_50500[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50501 = state_50473;
state_50473 = G__50501;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50473){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_50491 = f__6203__auto__.call(null);(statearr_50491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__50503 = kline;var date__$1 = cljs.core.nth.call(null,vec__50503,(0),null);var _ = cljs.core.nth.call(null,vec__50503,(1),null);var ___$1 = cljs.core.nth.call(null,vec__50503,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50503,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50503,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50503,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__50505 = kline;var _ = cljs.core.nth.call(null,vec__50505,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50505,(1),null);var high__$1 = cljs.core.nth.call(null,vec__50505,(2),null);var ___$2 = cljs.core.nth.call(null,vec__50505,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50505,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50505,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__50507 = kline;var _ = cljs.core.nth.call(null,vec__50507,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50507,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50507,(2),null);var ___$3 = cljs.core.nth.call(null,vec__50507,(3),null);var open__$1 = cljs.core.nth.call(null,vec__50507,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50507,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__50509 = kline;var _ = cljs.core.nth.call(null,vec__50509,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50509,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50509,(2),null);var ___$3 = cljs.core.nth.call(null,vec__50509,(3),null);var close__$1 = cljs.core.nth.call(null,vec__50509,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50509,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__50511 = kline;var _ = cljs.core.nth.call(null,vec__50511,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50511,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50511,(2),null);var low__$1 = cljs.core.nth.call(null,vec__50511,(3),null);var ___$3 = cljs.core.nth.call(null,vec__50511,(4),null);var ___$4 = cljs.core.nth.call(null,vec__50511,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__50513 = kline;var _ = cljs.core.nth.call(null,vec__50513,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50513,(1),null);var ___$2 = cljs.core.nth.call(null,vec__50513,(2),null);var ___$3 = cljs.core.nth.call(null,vec__50513,(3),null);var ___$4 = cljs.core.nth.call(null,vec__50513,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__50513,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__50515 = kline;var _ = cljs.core.nth.call(null,vec__50515,(0),null);var ___$1 = cljs.core.nth.call(null,vec__50515,(1),null);var high = cljs.core.nth.call(null,vec__50515,(2),null);var low = cljs.core.nth.call(null,vec__50515,(3),null);var close = cljs.core.nth.call(null,vec__50515,(4),null);var ___$2 = cljs.core.nth.call(null,vec__50515,(5),null);return (((high + low) + close) / (3));
}
});
