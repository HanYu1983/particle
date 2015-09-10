// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock5');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
test.stock5.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock5.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj31233 = {"url":"/proxy","dataType":"text","data":(function (){var obj31235 = {"url":url};return obj31235;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_31242){var state_val_31243 = (state_31242[(1)]);if((state_val_31243 === (2)))
{var inst_31239 = (state_31242[(2)]);var inst_31240 = cljs.core.async.close_BANG_.call(null,ret);var state_31242__$1 = (function (){var statearr_31244 = state_31242;(statearr_31244[(7)] = inst_31239);
return statearr_31244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31242__$1,inst_31240);
} else
{if((state_val_31243 === (1)))
{var inst_31236 = [null,data];var inst_31237 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31236,null));var state_31242__$1 = state_31242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31242__$1,(2),ret,inst_31237);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31248 = [null,null,null,null,null,null,null,null];(statearr_31248[(0)] = state_machine__6188__auto__);
(statearr_31248[(1)] = (1));
return statearr_31248;
});
var state_machine__6188__auto____1 = (function (state_31242){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31242);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31249){if((e31249 instanceof Object))
{var ex__6191__auto__ = e31249;var statearr_31250_31268 = state_31242;(statearr_31250_31268[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31269 = state_31242;
state_31242 = G__31269;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31242){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_31251 = f__6203__auto__.call(null);(statearr_31251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_31258){var state_val_31259 = (state_31258[(1)]);if((state_val_31259 === (2)))
{var inst_31255 = (state_31258[(2)]);var inst_31256 = cljs.core.async.close_BANG_.call(null,ret);var state_31258__$1 = (function (){var statearr_31260 = state_31258;(statearr_31260[(7)] = inst_31255);
return statearr_31260;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31258__$1,inst_31256);
} else
{if((state_val_31259 === (1)))
{var inst_31252 = [err];var inst_31253 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31252,null));var state_31258__$1 = state_31258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31258__$1,(2),ret,inst_31253);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31264 = [null,null,null,null,null,null,null,null];(statearr_31264[(0)] = state_machine__6188__auto__);
(statearr_31264[(1)] = (1));
return statearr_31264;
});
var state_machine__6188__auto____1 = (function (state_31258){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31258);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31265){if((e31265 instanceof Object))
{var ex__6191__auto__ = e31265;var statearr_31266_31270 = state_31258;(statearr_31266_31270[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31271 = state_31258;
state_31258 = G__31271;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31258){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_31267 = f__6203__auto__.call(null);(statearr_31267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj31233;
})());
return ret;
});
test.stock5.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__31280(s__31281){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__31281__$1 = s__31281;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31281__$1);if(temp__4126__auto__)
{var s__31281__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31281__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__31281__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__31283 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__31282 = (0);while(true){
if((i__31282 < size__4275__auto__))
{var vec__31286 = cljs.core._nth.call(null,c__4274__auto__,i__31282);var _ = cljs.core.nth.call(null,vec__31286,(0),null);var date = cljs.core.nth.call(null,vec__31286,(1),null);var open = cljs.core.nth.call(null,vec__31286,(2),null);var high = cljs.core.nth.call(null,vec__31286,(3),null);var low = cljs.core.nth.call(null,vec__31286,(4),null);var close = cljs.core.nth.call(null,vec__31286,(5),null);var volume = cljs.core.nth.call(null,vec__31286,(6),null);cljs.core.chunk_append.call(null,b__31283,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__31288 = (i__31282 + (1));
i__31282 = G__31288;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31283),iter__31280.call(null,cljs.core.chunk_rest.call(null,s__31281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31283),null);
}
} else
{var vec__31287 = cljs.core.first.call(null,s__31281__$2);var _ = cljs.core.nth.call(null,vec__31287,(0),null);var date = cljs.core.nth.call(null,vec__31287,(1),null);var open = cljs.core.nth.call(null,vec__31287,(2),null);var high = cljs.core.nth.call(null,vec__31287,(3),null);var low = cljs.core.nth.call(null,vec__31287,(4),null);var close = cljs.core.nth.call(null,vec__31287,(5),null);var volume = cljs.core.nth.call(null,vec__31287,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__31280.call(null,cljs.core.rest.call(null,s__31281__$2)));
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
test.stock5.stock_info = (function stock_info(all,id,startdate,start,num){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_31366){var state_val_31367 = (state_31366[(1)]);if((state_val_31367 === (9)))
{var inst_31356 = (state_31366[(2)]);var state_31366__$1 = state_31366;var statearr_31368_31385 = state_31366__$1;(statearr_31368_31385[(2)] = inst_31356);
(statearr_31368_31385[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31367 === (8)))
{var inst_31362 = (state_31366[(2)]);var state_31366__$1 = state_31366;var statearr_31369_31386 = state_31366__$1;(statearr_31369_31386[(2)] = inst_31362);
(statearr_31369_31386[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31367 === (7)))
{var inst_31348 = (state_31366[(7)]);var inst_31358 = cljs.core.concat.call(null,all,inst_31348);var inst_31359 = [null,inst_31358];var inst_31360 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31359,null));var state_31366__$1 = state_31366;var statearr_31370_31387 = state_31366__$1;(statearr_31370_31387[(2)] = inst_31360);
(statearr_31370_31387[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31367 === (6)))
{var inst_31348 = (state_31366[(7)]);var inst_31352 = cljs.core.concat.call(null,all,inst_31348);var inst_31353 = (start + num);var inst_31354 = stock_info.call(null,inst_31352,id,startdate,inst_31353,num);var state_31366__$1 = state_31366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31366__$1,(9),inst_31354);
} else
{if((state_val_31367 === (5)))
{var inst_31364 = (state_31366[(2)]);var state_31366__$1 = state_31366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31366__$1,inst_31364);
} else
{if((state_val_31367 === (4)))
{var inst_31348 = (state_31366[(7)]);var inst_31343 = (state_31366[(8)]);var inst_31348__$1 = test.stock5.parse_info.call(null,inst_31343);var inst_31349 = cljs.core.count.call(null,inst_31348__$1);var inst_31350 = cljs.core._EQ_.call(null,num,inst_31349);var state_31366__$1 = (function (){var statearr_31371 = state_31366;(statearr_31371[(7)] = inst_31348__$1);
return statearr_31371;
})();if(inst_31350)
{var statearr_31372_31388 = state_31366__$1;(statearr_31372_31388[(1)] = (6));
} else
{var statearr_31373_31389 = state_31366__$1;(statearr_31373_31389[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31367 === (3)))
{var inst_31342 = (state_31366[(9)]);var inst_31345 = [inst_31342];var inst_31346 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31345,null));var state_31366__$1 = state_31366;var statearr_31374_31390 = state_31366__$1;(statearr_31374_31390[(2)] = inst_31346);
(statearr_31374_31390[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31367 === (2)))
{var inst_31342 = (state_31366[(9)]);var inst_31341 = (state_31366[(2)]);var inst_31342__$1 = cljs.core.nth.call(null,inst_31341,(0),null);var inst_31343 = cljs.core.nth.call(null,inst_31341,(1),null);var state_31366__$1 = (function (){var statearr_31375 = state_31366;(statearr_31375[(9)] = inst_31342__$1);
(statearr_31375[(8)] = inst_31343);
return statearr_31375;
})();if(cljs.core.truth_(inst_31342__$1))
{var statearr_31376_31391 = state_31366__$1;(statearr_31376_31391[(1)] = (3));
} else
{var statearr_31377_31392 = state_31366__$1;(statearr_31377_31392[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31367 === (1)))
{var inst_31338 = test.stock5.stock_url.call(null,id,startdate,start,num);var inst_31339 = test.stock5.content.call(null,inst_31338);var state_31366__$1 = state_31366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31366__$1,(2),inst_31339);
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
var state_machine__6188__auto____0 = (function (){var statearr_31381 = [null,null,null,null,null,null,null,null,null,null];(statearr_31381[(0)] = state_machine__6188__auto__);
(statearr_31381[(1)] = (1));
return statearr_31381;
});
var state_machine__6188__auto____1 = (function (state_31366){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object))
{var ex__6191__auto__ = e31382;var statearr_31383_31393 = state_31366;(statearr_31383_31393[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31394 = state_31366;
state_31366 = G__31394;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_31384 = f__6203__auto__.call(null);(statearr_31384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 似乎不能套用async，不然callback沒有反應
*/
test.stock5.load_google_visualization = (function load_google_visualization(onLoad){google.load("visualization","1",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["packages",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["corechart"], null)], null)));
return google.setOnLoadCallback(onLoad);
});
test.stock5.info__GT_data = (function info__GT_data(info){return google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p__31397){var vec__31398 = p__31397;var d = cljs.core.nth.call(null,vec__31398,(0),null);var o = cljs.core.nth.call(null,vec__31398,(1),null);var h = cljs.core.nth.call(null,vec__31398,(2),null);var l = cljs.core.nth.call(null,vec__31398,(3),null);var c = cljs.core.nth.call(null,vec__31398,(4),null);var _ = cljs.core.nth.call(null,vec__31398,(5),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,l,o,c,h], null);
}),info)),true);
});
test.stock5.test_charts = (function test_charts(){google.load("visualization","1",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["packages",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["corechart"], null)], null)));
return google.setOnLoadCallback((function (){var data = google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mon",(0),(1),(2),(3)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tue",(38),(0),(55),(55)], null)], null)),true);var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["legend","none","bar",new cljs.core.PersistentArrayMap(null, 1, ["groupWidth","100%"], null),"candlestick",new cljs.core.PersistentArrayMap(null, 2, ["risingColor",new cljs.core.PersistentArrayMap(null, 2, ["strokeWidth",(0),"fill","#a52714"], null),"fallingColor",new cljs.core.PersistentArrayMap(null, 2, ["strokeWidth",(0),"fill","#0f9d58"], null)], null)], null));var chart = (new google.visualization.CandlestickChart(document.getElementById("chart_div")));return chart.draw(data,options);
}));
});
/**
* @param {...*} var_args
*/
test.stock5.draw_canvasjs_charts = (function() { 
var draw_canvasjs_charts__delegate = function (elemId,datas){var chart = (new CanvasJS.Chart(elemId,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, ["title",new cljs.core.PersistentArrayMap(null, 1, ["text","Stock Prices"], null),"exportEnabled",true,"axisY",new cljs.core.PersistentArrayMap(null, 1, ["includeZero",false], null),"axisX",new cljs.core.PersistentArrayMap(null, 2, ["interval",(1),"valueFormatString","MMM-DD"], null),"toolTip",new cljs.core.PersistentArrayMap(null, 1, ["shared",true], null),"data",datas], null))));return chart.render();
};
var draw_canvasjs_charts = function (elemId,var_args){
var datas = null;if (arguments.length > 1) {
  datas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return draw_canvasjs_charts__delegate.call(this,elemId,datas);};
draw_canvasjs_charts.cljs$lang$maxFixedArity = 1;
draw_canvasjs_charts.cljs$lang$applyTo = (function (arglist__31399){
var elemId = cljs.core.first(arglist__31399);
var datas = cljs.core.rest(arglist__31399);
return draw_canvasjs_charts__delegate(elemId,datas);
});
draw_canvasjs_charts.cljs$core$IFn$_invoke$arity$variadic = draw_canvasjs_charts__delegate;
return draw_canvasjs_charts;
})()
;
test.stock5.test_draw = (function test_draw(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_31473){var state_val_31474 = (state_31473[(1)]);if((state_val_31474 === (5)))
{var inst_31471 = (state_31473[(2)]);var state_31473__$1 = state_31473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31473__$1,inst_31471);
} else
{if((state_val_31474 === (4)))
{var inst_31450 = (state_31473[(7)]);var inst_31448 = (state_31473[(8)]);var inst_31449 = (state_31473[(9)]);var inst_31454 = ["type","showInLegend","legendMarkerColor","legendText","dataPoints"];var inst_31456 = (function (){var infos = inst_31450;var err = inst_31449;var vec__31445 = inst_31448;return ((function (infos,err,vec__31445,inst_31450,inst_31448,inst_31449,inst_31454,state_val_31474,c__6202__auto__){
return (function (p__31455){var vec__31475 = p__31455;var date = cljs.core.nth.call(null,vec__31475,(0),null);var _ = cljs.core.nth.call(null,vec__31475,(1),null);var ___$1 = cljs.core.nth.call(null,vec__31475,(2),null);var ___$2 = cljs.core.nth.call(null,vec__31475,(3),null);var ___$3 = cljs.core.nth.call(null,vec__31475,(4),null);var volume = cljs.core.nth.call(null,vec__31475,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",volume], null);
});
;})(infos,err,vec__31445,inst_31450,inst_31448,inst_31449,inst_31454,state_val_31474,c__6202__auto__))
})();var inst_31457 = cljs.core.map.call(null,inst_31456,inst_31450);var inst_31458 = ["column",false,"grey","volume",inst_31457];var inst_31459 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31454,inst_31458);var inst_31460 = cljs.core.clj__GT_js.call(null,inst_31459);var inst_31461 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer2",inst_31460);var inst_31462 = ["type","showInLegend","name","dataPoints"];var inst_31464 = (function (){var infos = inst_31450;var err = inst_31449;var vec__31445 = inst_31448;return ((function (infos,err,vec__31445,inst_31450,inst_31448,inst_31449,inst_31454,inst_31456,inst_31457,inst_31458,inst_31459,inst_31460,inst_31461,inst_31462,state_val_31474,c__6202__auto__){
return (function (p__31463){var vec__31476 = p__31463;var date = cljs.core.nth.call(null,vec__31476,(0),null);var open = cljs.core.nth.call(null,vec__31476,(1),null);var high = cljs.core.nth.call(null,vec__31476,(2),null);var low = cljs.core.nth.call(null,vec__31476,(3),null);var close = cljs.core.nth.call(null,vec__31476,(4),null);var _ = cljs.core.nth.call(null,vec__31476,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,high,low,close], null)], null);
});
;})(infos,err,vec__31445,inst_31450,inst_31448,inst_31449,inst_31454,inst_31456,inst_31457,inst_31458,inst_31459,inst_31460,inst_31461,inst_31462,state_val_31474,c__6202__auto__))
})();var inst_31465 = cljs.core.map.call(null,inst_31464,inst_31450);var inst_31466 = ["candlestick",false,"kline",inst_31465];var inst_31467 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_31462,inst_31466);var inst_31468 = cljs.core.clj__GT_js.call(null,inst_31467);var inst_31469 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer",inst_31468);var state_31473__$1 = (function (){var statearr_31477 = state_31473;(statearr_31477[(10)] = inst_31461);
return statearr_31477;
})();var statearr_31478_31490 = state_31473__$1;(statearr_31478_31490[(2)] = inst_31469);
(statearr_31478_31490[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31474 === (3)))
{var inst_31449 = (state_31473[(9)]);var inst_31452 = alert(inst_31449);var state_31473__$1 = state_31473;var statearr_31479_31491 = state_31473__$1;(statearr_31479_31491[(2)] = inst_31452);
(statearr_31479_31491[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31474 === (2)))
{var inst_31448 = (state_31473[(8)]);var inst_31449 = (state_31473[(9)]);var inst_31448__$1 = (state_31473[(2)]);var inst_31449__$1 = cljs.core.nth.call(null,inst_31448__$1,(0),null);var inst_31450 = cljs.core.nth.call(null,inst_31448__$1,(1),null);var state_31473__$1 = (function (){var statearr_31480 = state_31473;(statearr_31480[(7)] = inst_31450);
(statearr_31480[(8)] = inst_31448__$1);
(statearr_31480[(9)] = inst_31449__$1);
return statearr_31480;
})();if(cljs.core.truth_(inst_31449__$1))
{var statearr_31481_31492 = state_31473__$1;(statearr_31481_31492[(1)] = (3));
} else
{var statearr_31482_31493 = state_31473__$1;(statearr_31482_31493[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31474 === (1)))
{var inst_31446 = test.stock5.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_31473__$1 = state_31473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31473__$1,(2),inst_31446);
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
var state_machine__6188__auto____0 = (function (){var statearr_31486 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31486[(0)] = state_machine__6188__auto__);
(statearr_31486[(1)] = (1));
return statearr_31486;
});
var state_machine__6188__auto____1 = (function (state_31473){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31487){if((e31487 instanceof Object))
{var ex__6191__auto__ = e31487;var statearr_31488_31494 = state_31473;(statearr_31488_31494[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31495 = state_31473;
state_31473 = G__31495;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31473){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_31489 = f__6203__auto__.call(null);(statearr_31489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock5.test_draw.call(null);
