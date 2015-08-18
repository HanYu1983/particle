// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj15217 = {"url":"/proxy","dataType":"text","data":(function (){var obj15219 = {"url":url};return obj15219;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_15226){var state_val_15227 = (state_15226[(1)]);if((state_val_15227 === (2)))
{var inst_15223 = (state_15226[(2)]);var inst_15224 = cljs.core.async.close_BANG_.call(null,ret);var state_15226__$1 = (function (){var statearr_15228 = state_15226;(statearr_15228[(7)] = inst_15223);
return statearr_15228;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15226__$1,inst_15224);
} else
{if((state_val_15227 === (1)))
{var inst_15220 = [null,data];var inst_15221 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15220,null));var state_15226__$1 = state_15226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15226__$1,(2),ret,inst_15221);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15232 = [null,null,null,null,null,null,null,null];(statearr_15232[(0)] = state_machine__6188__auto__);
(statearr_15232[(1)] = (1));
return statearr_15232;
});
var state_machine__6188__auto____1 = (function (state_15226){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15226);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15233){if((e15233 instanceof Object))
{var ex__6191__auto__ = e15233;var statearr_15234_15252 = state_15226;(statearr_15234_15252[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15253 = state_15226;
state_15226 = G__15253;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15226){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_15235 = f__6203__auto__.call(null);(statearr_15235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_15242){var state_val_15243 = (state_15242[(1)]);if((state_val_15243 === (2)))
{var inst_15239 = (state_15242[(2)]);var inst_15240 = cljs.core.async.close_BANG_.call(null,ret);var state_15242__$1 = (function (){var statearr_15244 = state_15242;(statearr_15244[(7)] = inst_15239);
return statearr_15244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15242__$1,inst_15240);
} else
{if((state_val_15243 === (1)))
{var inst_15236 = [err];var inst_15237 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15236,null));var state_15242__$1 = state_15242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15242__$1,(2),ret,inst_15237);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15248 = [null,null,null,null,null,null,null,null];(statearr_15248[(0)] = state_machine__6188__auto__);
(statearr_15248[(1)] = (1));
return statearr_15248;
});
var state_machine__6188__auto____1 = (function (state_15242){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15242);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15249){if((e15249 instanceof Object))
{var ex__6191__auto__ = e15249;var statearr_15250_15254 = state_15242;(statearr_15250_15254[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15255 = state_15242;
state_15242 = G__15255;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15242){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_15251 = f__6203__auto__.call(null);(statearr_15251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj15217;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__15264(s__15265){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__15265__$1 = s__15265;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15265__$1);if(temp__4126__auto__)
{var s__15265__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15265__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15265__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15267 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15266 = (0);while(true){
if((i__15266 < size__4275__auto__))
{var vec__15270 = cljs.core._nth.call(null,c__4274__auto__,i__15266);var _ = cljs.core.nth.call(null,vec__15270,(0),null);var date = cljs.core.nth.call(null,vec__15270,(1),null);var open = cljs.core.nth.call(null,vec__15270,(2),null);var high = cljs.core.nth.call(null,vec__15270,(3),null);var low = cljs.core.nth.call(null,vec__15270,(4),null);var close = cljs.core.nth.call(null,vec__15270,(5),null);var volume = cljs.core.nth.call(null,vec__15270,(6),null);cljs.core.chunk_append.call(null,b__15267,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__15272 = (i__15266 + (1));
i__15266 = G__15272;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15267),iter__15264.call(null,cljs.core.chunk_rest.call(null,s__15265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15267),null);
}
} else
{var vec__15271 = cljs.core.first.call(null,s__15265__$2);var _ = cljs.core.nth.call(null,vec__15271,(0),null);var date = cljs.core.nth.call(null,vec__15271,(1),null);var open = cljs.core.nth.call(null,vec__15271,(2),null);var high = cljs.core.nth.call(null,vec__15271,(3),null);var low = cljs.core.nth.call(null,vec__15271,(4),null);var close = cljs.core.nth.call(null,vec__15271,(5),null);var volume = cljs.core.nth.call(null,vec__15271,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__15264.call(null,cljs.core.rest.call(null,s__15265__$2)));
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
stock.tool.stock_info = (function stock_info(all,id,startdate,start,num){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_15350){var state_val_15351 = (state_15350[(1)]);if((state_val_15351 === (9)))
{var inst_15340 = (state_15350[(2)]);var state_15350__$1 = state_15350;var statearr_15352_15369 = state_15350__$1;(statearr_15352_15369[(2)] = inst_15340);
(statearr_15352_15369[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15351 === (8)))
{var inst_15346 = (state_15350[(2)]);var state_15350__$1 = state_15350;var statearr_15353_15370 = state_15350__$1;(statearr_15353_15370[(2)] = inst_15346);
(statearr_15353_15370[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15351 === (7)))
{var inst_15332 = (state_15350[(7)]);var inst_15342 = cljs.core.concat.call(null,all,inst_15332);var inst_15343 = [null,inst_15342];var inst_15344 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15343,null));var state_15350__$1 = state_15350;var statearr_15354_15371 = state_15350__$1;(statearr_15354_15371[(2)] = inst_15344);
(statearr_15354_15371[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15351 === (6)))
{var inst_15332 = (state_15350[(7)]);var inst_15336 = cljs.core.concat.call(null,all,inst_15332);var inst_15337 = (start + num);var inst_15338 = stock_info.call(null,inst_15336,id,startdate,inst_15337,num);var state_15350__$1 = state_15350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15350__$1,(9),inst_15338);
} else
{if((state_val_15351 === (5)))
{var inst_15348 = (state_15350[(2)]);var state_15350__$1 = state_15350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15350__$1,inst_15348);
} else
{if((state_val_15351 === (4)))
{var inst_15332 = (state_15350[(7)]);var inst_15327 = (state_15350[(8)]);var inst_15332__$1 = stock.tool.parse_info.call(null,inst_15327);var inst_15333 = cljs.core.count.call(null,inst_15332__$1);var inst_15334 = cljs.core._EQ_.call(null,num,inst_15333);var state_15350__$1 = (function (){var statearr_15355 = state_15350;(statearr_15355[(7)] = inst_15332__$1);
return statearr_15355;
})();if(inst_15334)
{var statearr_15356_15372 = state_15350__$1;(statearr_15356_15372[(1)] = (6));
} else
{var statearr_15357_15373 = state_15350__$1;(statearr_15357_15373[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15351 === (3)))
{var inst_15326 = (state_15350[(9)]);var inst_15329 = [inst_15326];var inst_15330 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15329,null));var state_15350__$1 = state_15350;var statearr_15358_15374 = state_15350__$1;(statearr_15358_15374[(2)] = inst_15330);
(statearr_15358_15374[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15351 === (2)))
{var inst_15326 = (state_15350[(9)]);var inst_15325 = (state_15350[(2)]);var inst_15326__$1 = cljs.core.nth.call(null,inst_15325,(0),null);var inst_15327 = cljs.core.nth.call(null,inst_15325,(1),null);var state_15350__$1 = (function (){var statearr_15359 = state_15350;(statearr_15359[(9)] = inst_15326__$1);
(statearr_15359[(8)] = inst_15327);
return statearr_15359;
})();if(cljs.core.truth_(inst_15326__$1))
{var statearr_15360_15375 = state_15350__$1;(statearr_15360_15375[(1)] = (3));
} else
{var statearr_15361_15376 = state_15350__$1;(statearr_15361_15376[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15351 === (1)))
{var inst_15322 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_15323 = stock.tool.content.call(null,inst_15322);var state_15350__$1 = state_15350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15350__$1,(2),inst_15323);
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
var state_machine__6188__auto____0 = (function (){var statearr_15365 = [null,null,null,null,null,null,null,null,null,null];(statearr_15365[(0)] = state_machine__6188__auto__);
(statearr_15365[(1)] = (1));
return statearr_15365;
});
var state_machine__6188__auto____1 = (function (state_15350){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15366){if((e15366 instanceof Object))
{var ex__6191__auto__ = e15366;var statearr_15367_15377 = state_15350;(statearr_15367_15377[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15378 = state_15350;
state_15350 = G__15378;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_15368 = f__6203__auto__.call(null);(statearr_15368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_15368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__15380 = kline;var _ = cljs.core.nth.call(null,vec__15380,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15380,(1),null);var high__$1 = cljs.core.nth.call(null,vec__15380,(2),null);var ___$2 = cljs.core.nth.call(null,vec__15380,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15380,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15380,(5),null);return high__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__15382 = kline;var _ = cljs.core.nth.call(null,vec__15382,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15382,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15382,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15382,(3),null);var close__$1 = cljs.core.nth.call(null,vec__15382,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15382,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__15384 = kline;var _ = cljs.core.nth.call(null,vec__15384,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15384,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15384,(2),null);var low__$1 = cljs.core.nth.call(null,vec__15384,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15384,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15384,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__15386 = kline;var _ = cljs.core.nth.call(null,vec__15386,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15386,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15386,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15386,(3),null);var ___$4 = cljs.core.nth.call(null,vec__15386,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__15386,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__15388 = kline;var _ = cljs.core.nth.call(null,vec__15388,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15388,(1),null);var high = cljs.core.nth.call(null,vec__15388,(2),null);var low = cljs.core.nth.call(null,vec__15388,(3),null);var ___$2 = cljs.core.nth.call(null,vec__15388,(4),null);var ___$3 = cljs.core.nth.call(null,vec__15388,(5),null);return ((high + low) / (2));
}
});
