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
return (function iter__35186(s__35187){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__35187__$1 = s__35187;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35187__$1);if(temp__4126__auto__)
{var s__35187__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35187__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__35187__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__35189 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__35188 = (0);while(true){
if((i__35188 < size__4275__auto__))
{var vec__35192 = cljs.core._nth.call(null,c__4274__auto__,i__35188);var _ = cljs.core.nth.call(null,vec__35192,(0),null);var date = cljs.core.nth.call(null,vec__35192,(1),null);var close = cljs.core.nth.call(null,vec__35192,(2),null);var high = cljs.core.nth.call(null,vec__35192,(3),null);var low = cljs.core.nth.call(null,vec__35192,(4),null);var open = cljs.core.nth.call(null,vec__35192,(5),null);var volume = cljs.core.nth.call(null,vec__35192,(6),null);cljs.core.chunk_append.call(null,b__35189,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__35194 = (i__35188 + (1));
i__35188 = G__35194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35189),iter__35186.call(null,cljs.core.chunk_rest.call(null,s__35187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35189),null);
}
} else
{var vec__35193 = cljs.core.first.call(null,s__35187__$2);var _ = cljs.core.nth.call(null,vec__35193,(0),null);var date = cljs.core.nth.call(null,vec__35193,(1),null);var close = cljs.core.nth.call(null,vec__35193,(2),null);var high = cljs.core.nth.call(null,vec__35193,(3),null);var low = cljs.core.nth.call(null,vec__35193,(4),null);var open = cljs.core.nth.call(null,vec__35193,(5),null);var volume = cljs.core.nth.call(null,vec__35193,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__35186.call(null,cljs.core.rest.call(null,s__35187__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__35207){var vec__35208 = p__35207;var d = cljs.core.nth.call(null,vec__35208,(0),null);var o = cljs.core.nth.call(null,vec__35208,(1),null);var h = cljs.core.nth.call(null,vec__35208,(2),null);var l = cljs.core.nth.call(null,vec__35208,(3),null);var c = cljs.core.nth.call(null,vec__35208,(4),null);var v = cljs.core.nth.call(null,vec__35208,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__35209,p__35210){var vec__35211 = p__35209;var d1 = cljs.core.nth.call(null,vec__35211,(0),null);var _ = cljs.core.nth.call(null,vec__35211,(1),null);var ___$1 = cljs.core.nth.call(null,vec__35211,(2),null);var ___$2 = cljs.core.nth.call(null,vec__35211,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35211,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35211,(5),null);var prev = vec__35211;var vec__35212 = p__35210;var d2 = cljs.core.nth.call(null,vec__35212,(0),null);var o = cljs.core.nth.call(null,vec__35212,(1),null);var h = cljs.core.nth.call(null,vec__35212,(2),null);var l = cljs.core.nth.call(null,vec__35212,(3),null);var c = cljs.core.nth.call(null,vec__35212,(4),null);var v = cljs.core.nth.call(null,vec__35212,(5),null);var curr = vec__35212;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__35213,p__35214){var vec__35215 = p__35213;var d1 = cljs.core.nth.call(null,vec__35215,(0),null);var _ = cljs.core.nth.call(null,vec__35215,(1),null);var ___$1 = cljs.core.nth.call(null,vec__35215,(2),null);var ___$2 = cljs.core.nth.call(null,vec__35215,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35215,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35215,(5),null);var prev = vec__35215;var vec__35216 = p__35214;var d2 = cljs.core.nth.call(null,vec__35216,(0),null);var o = cljs.core.nth.call(null,vec__35216,(1),null);var h = cljs.core.nth.call(null,vec__35216,(2),null);var l = cljs.core.nth.call(null,vec__35216,(3),null);var c = cljs.core.nth.call(null,vec__35216,(4),null);var v = cljs.core.nth.call(null,vec__35216,(5),null);var curr = vec__35216;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.map.call(null,((function (pass1,pass2,pass3){
return (function (p__35217){var vec__35218 = p__35217;var d = cljs.core.nth.call(null,vec__35218,(0),null);var o = cljs.core.nth.call(null,vec__35218,(1),null);var h = cljs.core.nth.call(null,vec__35218,(2),null);var l = cljs.core.nth.call(null,vec__35218,(3),null);var c = cljs.core.nth.call(null,vec__35218,(4),null);var v = cljs.core.nth.call(null,vec__35218,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3))
,pass3);return pass4;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj35256 = {"url":"/proxy","dataType":"text","data":(function (){var obj35258 = {"url":url};return obj35258;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_35265){var state_val_35266 = (state_35265[(1)]);if((state_val_35266 === (2)))
{var inst_35262 = (state_35265[(2)]);var inst_35263 = cljs.core.async.close_BANG_.call(null,ret);var state_35265__$1 = (function (){var statearr_35267 = state_35265;(statearr_35267[(7)] = inst_35262);
return statearr_35267;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35265__$1,inst_35263);
} else
{if((state_val_35266 === (1)))
{var inst_35259 = [null,data];var inst_35260 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35259,null));var state_35265__$1 = state_35265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35265__$1,(2),ret,inst_35260);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35271 = [null,null,null,null,null,null,null,null];(statearr_35271[(0)] = state_machine__6188__auto__);
(statearr_35271[(1)] = (1));
return statearr_35271;
});
var state_machine__6188__auto____1 = (function (state_35265){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35265);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35272){if((e35272 instanceof Object))
{var ex__6191__auto__ = e35272;var statearr_35273_35291 = state_35265;(statearr_35273_35291[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35292 = state_35265;
state_35265 = G__35292;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35265){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_35274 = f__6203__auto__.call(null);(statearr_35274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_35281){var state_val_35282 = (state_35281[(1)]);if((state_val_35282 === (2)))
{var inst_35278 = (state_35281[(2)]);var inst_35279 = cljs.core.async.close_BANG_.call(null,ret);var state_35281__$1 = (function (){var statearr_35283 = state_35281;(statearr_35283[(7)] = inst_35278);
return statearr_35283;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35281__$1,inst_35279);
} else
{if((state_val_35282 === (1)))
{var inst_35275 = [err];var inst_35276 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35275,null));var state_35281__$1 = state_35281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35281__$1,(2),ret,inst_35276);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35287 = [null,null,null,null,null,null,null,null];(statearr_35287[(0)] = state_machine__6188__auto__);
(statearr_35287[(1)] = (1));
return statearr_35287;
});
var state_machine__6188__auto____1 = (function (state_35281){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35288){if((e35288 instanceof Object))
{var ex__6191__auto__ = e35288;var statearr_35289_35293 = state_35281;(statearr_35289_35293[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35294 = state_35281;
state_35281 = G__35294;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35281){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_35290 = f__6203__auto__.call(null);(statearr_35290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj35256;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__35303(s__35304){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__35304__$1 = s__35304;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35304__$1);if(temp__4126__auto__)
{var s__35304__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35304__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__35304__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__35306 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__35305 = (0);while(true){
if((i__35305 < size__4275__auto__))
{var vec__35309 = cljs.core._nth.call(null,c__4274__auto__,i__35305);var _ = cljs.core.nth.call(null,vec__35309,(0),null);var date = cljs.core.nth.call(null,vec__35309,(1),null);var open = cljs.core.nth.call(null,vec__35309,(2),null);var high = cljs.core.nth.call(null,vec__35309,(3),null);var low = cljs.core.nth.call(null,vec__35309,(4),null);var close = cljs.core.nth.call(null,vec__35309,(5),null);var volume = cljs.core.nth.call(null,vec__35309,(6),null);cljs.core.chunk_append.call(null,b__35306,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__35311 = (i__35305 + (1));
i__35305 = G__35311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35306),iter__35303.call(null,cljs.core.chunk_rest.call(null,s__35304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35306),null);
}
} else
{var vec__35310 = cljs.core.first.call(null,s__35304__$2);var _ = cljs.core.nth.call(null,vec__35310,(0),null);var date = cljs.core.nth.call(null,vec__35310,(1),null);var open = cljs.core.nth.call(null,vec__35310,(2),null);var high = cljs.core.nth.call(null,vec__35310,(3),null);var low = cljs.core.nth.call(null,vec__35310,(4),null);var close = cljs.core.nth.call(null,vec__35310,(5),null);var volume = cljs.core.nth.call(null,vec__35310,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__35303.call(null,cljs.core.rest.call(null,s__35304__$2)));
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
return (function (state_35389){var state_val_35390 = (state_35389[(1)]);if((state_val_35390 === (9)))
{var inst_35379 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35391_35408 = state_35389__$1;(statearr_35391_35408[(2)] = inst_35379);
(statearr_35391_35408[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35390 === (8)))
{var inst_35385 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35392_35409 = state_35389__$1;(statearr_35392_35409[(2)] = inst_35385);
(statearr_35392_35409[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35390 === (7)))
{var inst_35371 = (state_35389[(7)]);var inst_35381 = cljs.core.concat.call(null,all,inst_35371);var inst_35382 = [null,inst_35381];var inst_35383 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35382,null));var state_35389__$1 = state_35389;var statearr_35393_35410 = state_35389__$1;(statearr_35393_35410[(2)] = inst_35383);
(statearr_35393_35410[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35390 === (6)))
{var inst_35371 = (state_35389[(7)]);var inst_35375 = cljs.core.concat.call(null,all,inst_35371);var inst_35376 = (start + num);var inst_35377 = goog_historical_info.call(null,inst_35375,id,startdate,inst_35376,num);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35389__$1,(9),inst_35377);
} else
{if((state_val_35390 === (5)))
{var inst_35387 = (state_35389[(2)]);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35389__$1,inst_35387);
} else
{if((state_val_35390 === (4)))
{var inst_35366 = (state_35389[(8)]);var inst_35371 = (state_35389[(7)]);var inst_35371__$1 = stock.tool.parse_historical.call(null,inst_35366);var inst_35372 = cljs.core.count.call(null,inst_35371__$1);var inst_35373 = cljs.core._EQ_.call(null,num,inst_35372);var state_35389__$1 = (function (){var statearr_35394 = state_35389;(statearr_35394[(7)] = inst_35371__$1);
return statearr_35394;
})();if(inst_35373)
{var statearr_35395_35411 = state_35389__$1;(statearr_35395_35411[(1)] = (6));
} else
{var statearr_35396_35412 = state_35389__$1;(statearr_35396_35412[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35390 === (3)))
{var inst_35365 = (state_35389[(9)]);var inst_35368 = [inst_35365];var inst_35369 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35368,null));var state_35389__$1 = state_35389;var statearr_35397_35413 = state_35389__$1;(statearr_35397_35413[(2)] = inst_35369);
(statearr_35397_35413[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35390 === (2)))
{var inst_35365 = (state_35389[(9)]);var inst_35364 = (state_35389[(2)]);var inst_35365__$1 = cljs.core.nth.call(null,inst_35364,(0),null);var inst_35366 = cljs.core.nth.call(null,inst_35364,(1),null);var state_35389__$1 = (function (){var statearr_35398 = state_35389;(statearr_35398[(8)] = inst_35366);
(statearr_35398[(9)] = inst_35365__$1);
return statearr_35398;
})();if(cljs.core.truth_(inst_35365__$1))
{var statearr_35399_35414 = state_35389__$1;(statearr_35399_35414[(1)] = (3));
} else
{var statearr_35400_35415 = state_35389__$1;(statearr_35400_35415[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35390 === (1)))
{var inst_35361 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_35362 = stock.tool.content.call(null,inst_35361);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35389__$1,(2),inst_35362);
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
var state_machine__6188__auto____0 = (function (){var statearr_35404 = [null,null,null,null,null,null,null,null,null,null];(statearr_35404[(0)] = state_machine__6188__auto__);
(statearr_35404[(1)] = (1));
return statearr_35404;
});
var state_machine__6188__auto____1 = (function (state_35389){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35405){if((e35405 instanceof Object))
{var ex__6191__auto__ = e35405;var statearr_35406_35416 = state_35389;(statearr_35406_35416[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35417 = state_35389;
state_35389 = G__35417;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35389){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_35407 = f__6203__auto__.call(null);(statearr_35407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__35419 = kline;var date__$1 = cljs.core.nth.call(null,vec__35419,(0),null);var _ = cljs.core.nth.call(null,vec__35419,(1),null);var ___$1 = cljs.core.nth.call(null,vec__35419,(2),null);var ___$2 = cljs.core.nth.call(null,vec__35419,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35419,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35419,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__35421 = kline;var _ = cljs.core.nth.call(null,vec__35421,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35421,(1),null);var high__$1 = cljs.core.nth.call(null,vec__35421,(2),null);var ___$2 = cljs.core.nth.call(null,vec__35421,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35421,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35421,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__35423 = kline;var _ = cljs.core.nth.call(null,vec__35423,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35423,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35423,(2),null);var ___$3 = cljs.core.nth.call(null,vec__35423,(3),null);var open__$1 = cljs.core.nth.call(null,vec__35423,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35423,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__35425 = kline;var _ = cljs.core.nth.call(null,vec__35425,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35425,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35425,(2),null);var ___$3 = cljs.core.nth.call(null,vec__35425,(3),null);var close__$1 = cljs.core.nth.call(null,vec__35425,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35425,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__35427 = kline;var _ = cljs.core.nth.call(null,vec__35427,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35427,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35427,(2),null);var low__$1 = cljs.core.nth.call(null,vec__35427,(3),null);var ___$3 = cljs.core.nth.call(null,vec__35427,(4),null);var ___$4 = cljs.core.nth.call(null,vec__35427,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__35429 = kline;var _ = cljs.core.nth.call(null,vec__35429,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35429,(1),null);var ___$2 = cljs.core.nth.call(null,vec__35429,(2),null);var ___$3 = cljs.core.nth.call(null,vec__35429,(3),null);var ___$4 = cljs.core.nth.call(null,vec__35429,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__35429,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__35431 = kline;var _ = cljs.core.nth.call(null,vec__35431,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35431,(1),null);var high = cljs.core.nth.call(null,vec__35431,(2),null);var low = cljs.core.nth.call(null,vec__35431,(3),null);var ___$2 = cljs.core.nth.call(null,vec__35431,(4),null);var ___$3 = cljs.core.nth.call(null,vec__35431,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__35433 = kline;var _ = cljs.core.nth.call(null,vec__35433,(0),null);var ___$1 = cljs.core.nth.call(null,vec__35433,(1),null);var high = cljs.core.nth.call(null,vec__35433,(2),null);var low = cljs.core.nth.call(null,vec__35433,(3),null);var close = cljs.core.nth.call(null,vec__35433,(4),null);var ___$2 = cljs.core.nth.call(null,vec__35433,(5),null);return (((high + low) + close) / (3));
}
});
