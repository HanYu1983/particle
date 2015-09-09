// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj51361 = {"url":"/proxy","dataType":"text","data":(function (){var obj51363 = {"url":url};return obj51363;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_51370){var state_val_51371 = (state_51370[(1)]);if((state_val_51371 === (2)))
{var inst_51367 = (state_51370[(2)]);var inst_51368 = cljs.core.async.close_BANG_.call(null,ret);var state_51370__$1 = (function (){var statearr_51372 = state_51370;(statearr_51372[(7)] = inst_51367);
return statearr_51372;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51370__$1,inst_51368);
} else
{if((state_val_51371 === (1)))
{var inst_51364 = [null,data];var inst_51365 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51364,null));var state_51370__$1 = state_51370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51370__$1,(2),ret,inst_51365);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51376 = [null,null,null,null,null,null,null,null];(statearr_51376[(0)] = state_machine__6188__auto__);
(statearr_51376[(1)] = (1));
return statearr_51376;
});
var state_machine__6188__auto____1 = (function (state_51370){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51377){if((e51377 instanceof Object))
{var ex__6191__auto__ = e51377;var statearr_51378_51396 = state_51370;(statearr_51378_51396[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51397 = state_51370;
state_51370 = G__51397;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51370){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_51379 = f__6203__auto__.call(null);(statearr_51379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_51386){var state_val_51387 = (state_51386[(1)]);if((state_val_51387 === (2)))
{var inst_51383 = (state_51386[(2)]);var inst_51384 = cljs.core.async.close_BANG_.call(null,ret);var state_51386__$1 = (function (){var statearr_51388 = state_51386;(statearr_51388[(7)] = inst_51383);
return statearr_51388;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51386__$1,inst_51384);
} else
{if((state_val_51387 === (1)))
{var inst_51380 = [err];var inst_51381 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51380,null));var state_51386__$1 = state_51386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51386__$1,(2),ret,inst_51381);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51392 = [null,null,null,null,null,null,null,null];(statearr_51392[(0)] = state_machine__6188__auto__);
(statearr_51392[(1)] = (1));
return statearr_51392;
});
var state_machine__6188__auto____1 = (function (state_51386){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51393){if((e51393 instanceof Object))
{var ex__6191__auto__ = e51393;var statearr_51394_51398 = state_51386;(statearr_51394_51398[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51399 = state_51386;
state_51386 = G__51399;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51386){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_51395 = f__6203__auto__.call(null);(statearr_51395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj51361;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = json.vo;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,(0)], null);
});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_51452){var state_val_51453 = (state_51452[(1)]);if((state_val_51453 === (5)))
{var inst_51450 = (state_51452[(2)]);var state_51452__$1 = state_51452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51452__$1,inst_51450);
} else
{if((state_val_51453 === (4)))
{var inst_51440 = (state_51452[(7)]);var inst_51446 = stock.tool.parse_info.call(null,inst_51440);var inst_51447 = [null,inst_51446];var inst_51448 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51447,null));var state_51452__$1 = state_51452;var statearr_51454_51466 = state_51452__$1;(statearr_51454_51466[(2)] = inst_51448);
(statearr_51454_51466[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51453 === (3)))
{var inst_51438 = (state_51452[(8)]);var inst_51443 = [inst_51438];var inst_51444 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51443,null));var state_51452__$1 = state_51452;var statearr_51455_51467 = state_51452__$1;(statearr_51455_51467[(2)] = inst_51444);
(statearr_51455_51467[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51453 === (2)))
{var inst_51438 = (state_51452[(8)]);var inst_51440 = (state_51452[(7)]);var inst_51437 = (state_51452[(2)]);var inst_51438__$1 = cljs.core.nth.call(null,inst_51437,(0),null);var inst_51439 = cljs.core.nth.call(null,inst_51437,(1),null);var inst_51440__$1 = clojure.string.replace.call(null,inst_51439,/\/\//,"");var inst_51441 = console.log(inst_51440__$1);var state_51452__$1 = (function (){var statearr_51456 = state_51452;(statearr_51456[(8)] = inst_51438__$1);
(statearr_51456[(7)] = inst_51440__$1);
(statearr_51456[(9)] = inst_51441);
return statearr_51456;
})();if(cljs.core.truth_(inst_51438__$1))
{var statearr_51457_51468 = state_51452__$1;(statearr_51457_51468[(1)] = (3));
} else
{var statearr_51458_51469 = state_51452__$1;(statearr_51458_51469[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51453 === (1)))
{var inst_51434 = stock.tool.goog_finance_info_url.call(null,id);var inst_51435 = stock.tool.content.call(null,inst_51434);var state_51452__$1 = state_51452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51452__$1,(2),inst_51435);
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
var state_machine__6188__auto____0 = (function (){var statearr_51462 = [null,null,null,null,null,null,null,null,null,null];(statearr_51462[(0)] = state_machine__6188__auto__);
(statearr_51462[(1)] = (1));
return statearr_51462;
});
var state_machine__6188__auto____1 = (function (state_51452){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51463){if((e51463 instanceof Object))
{var ex__6191__auto__ = e51463;var statearr_51464_51470 = state_51452;(statearr_51464_51470[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51471 = state_51452;
state_51452 = G__51471;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51452){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51465 = f__6203__auto__.call(null);(statearr_51465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__51480(s__51481){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__51481__$1 = s__51481;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51481__$1);if(temp__4126__auto__)
{var s__51481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51481__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__51481__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__51483 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__51482 = (0);while(true){
if((i__51482 < size__4275__auto__))
{var vec__51486 = cljs.core._nth.call(null,c__4274__auto__,i__51482);var _ = cljs.core.nth.call(null,vec__51486,(0),null);var date = cljs.core.nth.call(null,vec__51486,(1),null);var close = cljs.core.nth.call(null,vec__51486,(2),null);var high = cljs.core.nth.call(null,vec__51486,(3),null);var low = cljs.core.nth.call(null,vec__51486,(4),null);var open = cljs.core.nth.call(null,vec__51486,(5),null);var volume = cljs.core.nth.call(null,vec__51486,(6),null);cljs.core.chunk_append.call(null,b__51483,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__51488 = (i__51482 + (1));
i__51482 = G__51488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51483),iter__51480.call(null,cljs.core.chunk_rest.call(null,s__51481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51483),null);
}
} else
{var vec__51487 = cljs.core.first.call(null,s__51481__$2);var _ = cljs.core.nth.call(null,vec__51487,(0),null);var date = cljs.core.nth.call(null,vec__51487,(1),null);var close = cljs.core.nth.call(null,vec__51487,(2),null);var high = cljs.core.nth.call(null,vec__51487,(3),null);var low = cljs.core.nth.call(null,vec__51487,(4),null);var open = cljs.core.nth.call(null,vec__51487,(5),null);var volume = cljs.core.nth.call(null,vec__51487,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__51480.call(null,cljs.core.rest.call(null,s__51481__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__51503){var vec__51504 = p__51503;var d = cljs.core.nth.call(null,vec__51504,(0),null);var o = cljs.core.nth.call(null,vec__51504,(1),null);var h = cljs.core.nth.call(null,vec__51504,(2),null);var l = cljs.core.nth.call(null,vec__51504,(3),null);var c = cljs.core.nth.call(null,vec__51504,(4),null);var v = cljs.core.nth.call(null,vec__51504,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__51505,p__51506){var vec__51507 = p__51505;var d1 = cljs.core.nth.call(null,vec__51507,(0),null);var _ = cljs.core.nth.call(null,vec__51507,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51507,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51507,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51507,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51507,(5),null);var prev = vec__51507;var vec__51508 = p__51506;var d2 = cljs.core.nth.call(null,vec__51508,(0),null);var o = cljs.core.nth.call(null,vec__51508,(1),null);var h = cljs.core.nth.call(null,vec__51508,(2),null);var l = cljs.core.nth.call(null,vec__51508,(3),null);var c = cljs.core.nth.call(null,vec__51508,(4),null);var v = cljs.core.nth.call(null,vec__51508,(5),null);var curr = vec__51508;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__51509,p__51510){var vec__51511 = p__51509;var d1 = cljs.core.nth.call(null,vec__51511,(0),null);var _ = cljs.core.nth.call(null,vec__51511,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51511,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51511,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51511,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51511,(5),null);var prev = vec__51511;var vec__51512 = p__51510;var d2 = cljs.core.nth.call(null,vec__51512,(0),null);var o = cljs.core.nth.call(null,vec__51512,(1),null);var h = cljs.core.nth.call(null,vec__51512,(2),null);var l = cljs.core.nth.call(null,vec__51512,(3),null);var c = cljs.core.nth.call(null,vec__51512,(4),null);var v = cljs.core.nth.call(null,vec__51512,(5),null);var curr = vec__51512;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__51513){var vec__51514 = p__51513;var d = cljs.core.nth.call(null,vec__51514,(0),null);var o = cljs.core.nth.call(null,vec__51514,(1),null);var h = cljs.core.nth.call(null,vec__51514,(2),null);var l = cljs.core.nth.call(null,vec__51514,(3),null);var c = cljs.core.nth.call(null,vec__51514,(4),null);var v = cljs.core.nth.call(null,vec__51514,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__51515){var vec__51516 = p__51515;var d = cljs.core.nth.call(null,vec__51516,(0),null);var o = cljs.core.nth.call(null,vec__51516,(1),null);var h = cljs.core.nth.call(null,vec__51516,(2),null);var l = cljs.core.nth.call(null,vec__51516,(3),null);var c = cljs.core.nth.call(null,vec__51516,(4),null);var v = cljs.core.nth.call(null,vec__51516,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__51525(s__51526){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__51526__$1 = s__51526;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51526__$1);if(temp__4126__auto__)
{var s__51526__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51526__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__51526__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__51528 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__51527 = (0);while(true){
if((i__51527 < size__4275__auto__))
{var vec__51531 = cljs.core._nth.call(null,c__4274__auto__,i__51527);var _ = cljs.core.nth.call(null,vec__51531,(0),null);var date = cljs.core.nth.call(null,vec__51531,(1),null);var open = cljs.core.nth.call(null,vec__51531,(2),null);var high = cljs.core.nth.call(null,vec__51531,(3),null);var low = cljs.core.nth.call(null,vec__51531,(4),null);var close = cljs.core.nth.call(null,vec__51531,(5),null);var volume = cljs.core.nth.call(null,vec__51531,(6),null);cljs.core.chunk_append.call(null,b__51528,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__51533 = (i__51527 + (1));
i__51527 = G__51533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51528),iter__51525.call(null,cljs.core.chunk_rest.call(null,s__51526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51528),null);
}
} else
{var vec__51532 = cljs.core.first.call(null,s__51526__$2);var _ = cljs.core.nth.call(null,vec__51532,(0),null);var date = cljs.core.nth.call(null,vec__51532,(1),null);var open = cljs.core.nth.call(null,vec__51532,(2),null);var high = cljs.core.nth.call(null,vec__51532,(3),null);var low = cljs.core.nth.call(null,vec__51532,(4),null);var close = cljs.core.nth.call(null,vec__51532,(5),null);var volume = cljs.core.nth.call(null,vec__51532,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__51525.call(null,cljs.core.rest.call(null,s__51526__$2)));
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
return (function (state_51611){var state_val_51612 = (state_51611[(1)]);if((state_val_51612 === (9)))
{var inst_51601 = (state_51611[(2)]);var state_51611__$1 = state_51611;var statearr_51613_51630 = state_51611__$1;(statearr_51613_51630[(2)] = inst_51601);
(statearr_51613_51630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51612 === (8)))
{var inst_51607 = (state_51611[(2)]);var state_51611__$1 = state_51611;var statearr_51614_51631 = state_51611__$1;(statearr_51614_51631[(2)] = inst_51607);
(statearr_51614_51631[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51612 === (7)))
{var inst_51593 = (state_51611[(7)]);var inst_51603 = cljs.core.concat.call(null,all,inst_51593);var inst_51604 = [null,inst_51603];var inst_51605 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51604,null));var state_51611__$1 = state_51611;var statearr_51615_51632 = state_51611__$1;(statearr_51615_51632[(2)] = inst_51605);
(statearr_51615_51632[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51612 === (6)))
{var inst_51593 = (state_51611[(7)]);var inst_51597 = cljs.core.concat.call(null,all,inst_51593);var inst_51598 = (start + num);var inst_51599 = goog_historical_info.call(null,inst_51597,id,startdate,inst_51598,num);var state_51611__$1 = state_51611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51611__$1,(9),inst_51599);
} else
{if((state_val_51612 === (5)))
{var inst_51609 = (state_51611[(2)]);var state_51611__$1 = state_51611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51611__$1,inst_51609);
} else
{if((state_val_51612 === (4)))
{var inst_51588 = (state_51611[(8)]);var inst_51593 = (state_51611[(7)]);var inst_51593__$1 = stock.tool.parse_historical.call(null,inst_51588);var inst_51594 = cljs.core.count.call(null,inst_51593__$1);var inst_51595 = cljs.core._EQ_.call(null,num,inst_51594);var state_51611__$1 = (function (){var statearr_51616 = state_51611;(statearr_51616[(7)] = inst_51593__$1);
return statearr_51616;
})();if(inst_51595)
{var statearr_51617_51633 = state_51611__$1;(statearr_51617_51633[(1)] = (6));
} else
{var statearr_51618_51634 = state_51611__$1;(statearr_51618_51634[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51612 === (3)))
{var inst_51587 = (state_51611[(9)]);var inst_51590 = [inst_51587];var inst_51591 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51590,null));var state_51611__$1 = state_51611;var statearr_51619_51635 = state_51611__$1;(statearr_51619_51635[(2)] = inst_51591);
(statearr_51619_51635[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51612 === (2)))
{var inst_51587 = (state_51611[(9)]);var inst_51586 = (state_51611[(2)]);var inst_51587__$1 = cljs.core.nth.call(null,inst_51586,(0),null);var inst_51588 = cljs.core.nth.call(null,inst_51586,(1),null);var state_51611__$1 = (function (){var statearr_51620 = state_51611;(statearr_51620[(8)] = inst_51588);
(statearr_51620[(9)] = inst_51587__$1);
return statearr_51620;
})();if(cljs.core.truth_(inst_51587__$1))
{var statearr_51621_51636 = state_51611__$1;(statearr_51621_51636[(1)] = (3));
} else
{var statearr_51622_51637 = state_51611__$1;(statearr_51622_51637[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51612 === (1)))
{var inst_51583 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_51584 = stock.tool.content.call(null,inst_51583);var state_51611__$1 = state_51611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51611__$1,(2),inst_51584);
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
var state_machine__6188__auto____0 = (function (){var statearr_51626 = [null,null,null,null,null,null,null,null,null,null];(statearr_51626[(0)] = state_machine__6188__auto__);
(statearr_51626[(1)] = (1));
return statearr_51626;
});
var state_machine__6188__auto____1 = (function (state_51611){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51611);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51627){if((e51627 instanceof Object))
{var ex__6191__auto__ = e51627;var statearr_51628_51638 = state_51611;(statearr_51628_51638[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51639 = state_51611;
state_51611 = G__51639;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51611){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51629 = f__6203__auto__.call(null);(statearr_51629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__51641 = kline;var date__$1 = cljs.core.nth.call(null,vec__51641,(0),null);var _ = cljs.core.nth.call(null,vec__51641,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51641,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51641,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51641,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51641,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__51643 = kline;var _ = cljs.core.nth.call(null,vec__51643,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51643,(1),null);var high__$1 = cljs.core.nth.call(null,vec__51643,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51643,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51643,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51643,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__51645 = kline;var _ = cljs.core.nth.call(null,vec__51645,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51645,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51645,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51645,(3),null);var open__$1 = cljs.core.nth.call(null,vec__51645,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51645,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__51647 = kline;var _ = cljs.core.nth.call(null,vec__51647,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51647,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51647,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51647,(3),null);var close__$1 = cljs.core.nth.call(null,vec__51647,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51647,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__51649 = kline;var _ = cljs.core.nth.call(null,vec__51649,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51649,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51649,(2),null);var low__$1 = cljs.core.nth.call(null,vec__51649,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51649,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51649,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__51651 = kline;var _ = cljs.core.nth.call(null,vec__51651,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51651,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51651,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51651,(3),null);var ___$4 = cljs.core.nth.call(null,vec__51651,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__51651,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__51653 = kline;var _ = cljs.core.nth.call(null,vec__51653,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51653,(1),null);var high = cljs.core.nth.call(null,vec__51653,(2),null);var low = cljs.core.nth.call(null,vec__51653,(3),null);var ___$2 = cljs.core.nth.call(null,vec__51653,(4),null);var ___$3 = cljs.core.nth.call(null,vec__51653,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__51655 = kline;var _ = cljs.core.nth.call(null,vec__51655,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51655,(1),null);var high = cljs.core.nth.call(null,vec__51655,(2),null);var low = cljs.core.nth.call(null,vec__51655,(3),null);var close = cljs.core.nth.call(null,vec__51655,(4),null);var ___$2 = cljs.core.nth.call(null,vec__51655,(5),null);return (((high + low) + close) / (3));
}
});
