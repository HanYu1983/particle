// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock5');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
test.stock5.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock5.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj25966 = {"url":"/proxy","dataType":"text","data":(function (){var obj25968 = {"url":url};return obj25968;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_25975){var state_val_25976 = (state_25975[(1)]);if((state_val_25976 === (2)))
{var inst_25972 = (state_25975[(2)]);var inst_25973 = cljs.core.async.close_BANG_.call(null,ret);var state_25975__$1 = (function (){var statearr_25977 = state_25975;(statearr_25977[(7)] = inst_25972);
return statearr_25977;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25975__$1,inst_25973);
} else
{if((state_val_25976 === (1)))
{var inst_25969 = [null,data];var inst_25970 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25969,null));var state_25975__$1 = state_25975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25975__$1,(2),ret,inst_25970);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25981 = [null,null,null,null,null,null,null,null];(statearr_25981[(0)] = state_machine__6188__auto__);
(statearr_25981[(1)] = (1));
return statearr_25981;
});
var state_machine__6188__auto____1 = (function (state_25975){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25975);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25982){if((e25982 instanceof Object))
{var ex__6191__auto__ = e25982;var statearr_25983_26001 = state_25975;(statearr_25983_26001[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26002 = state_25975;
state_25975 = G__26002;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25975){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_25984 = f__6203__auto__.call(null);(statearr_25984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_25991){var state_val_25992 = (state_25991[(1)]);if((state_val_25992 === (2)))
{var inst_25988 = (state_25991[(2)]);var inst_25989 = cljs.core.async.close_BANG_.call(null,ret);var state_25991__$1 = (function (){var statearr_25993 = state_25991;(statearr_25993[(7)] = inst_25988);
return statearr_25993;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25991__$1,inst_25989);
} else
{if((state_val_25992 === (1)))
{var inst_25985 = [err];var inst_25986 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25985,null));var state_25991__$1 = state_25991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25991__$1,(2),ret,inst_25986);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25997 = [null,null,null,null,null,null,null,null];(statearr_25997[(0)] = state_machine__6188__auto__);
(statearr_25997[(1)] = (1));
return statearr_25997;
});
var state_machine__6188__auto____1 = (function (state_25991){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25991);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25998){if((e25998 instanceof Object))
{var ex__6191__auto__ = e25998;var statearr_25999_26003 = state_25991;(statearr_25999_26003[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26004 = state_25991;
state_25991 = G__26004;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25991){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_26000 = f__6203__auto__.call(null);(statearr_26000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj25966;
})());
return ret;
});
test.stock5.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__26013(s__26014){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__26014__$1 = s__26014;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26014__$1);if(temp__4126__auto__)
{var s__26014__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26014__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__26014__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__26016 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__26015 = (0);while(true){
if((i__26015 < size__4275__auto__))
{var vec__26019 = cljs.core._nth.call(null,c__4274__auto__,i__26015);var _ = cljs.core.nth.call(null,vec__26019,(0),null);var date = cljs.core.nth.call(null,vec__26019,(1),null);var open = cljs.core.nth.call(null,vec__26019,(2),null);var high = cljs.core.nth.call(null,vec__26019,(3),null);var low = cljs.core.nth.call(null,vec__26019,(4),null);var close = cljs.core.nth.call(null,vec__26019,(5),null);var volume = cljs.core.nth.call(null,vec__26019,(6),null);cljs.core.chunk_append.call(null,b__26016,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__26021 = (i__26015 + (1));
i__26015 = G__26021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26016),iter__26013.call(null,cljs.core.chunk_rest.call(null,s__26014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26016),null);
}
} else
{var vec__26020 = cljs.core.first.call(null,s__26014__$2);var _ = cljs.core.nth.call(null,vec__26020,(0),null);var date = cljs.core.nth.call(null,vec__26020,(1),null);var open = cljs.core.nth.call(null,vec__26020,(2),null);var high = cljs.core.nth.call(null,vec__26020,(3),null);var low = cljs.core.nth.call(null,vec__26020,(4),null);var close = cljs.core.nth.call(null,vec__26020,(5),null);var volume = cljs.core.nth.call(null,vec__26020,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__26013.call(null,cljs.core.rest.call(null,s__26014__$2)));
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
return (function (state_26099){var state_val_26100 = (state_26099[(1)]);if((state_val_26100 === (9)))
{var inst_26089 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26101_26118 = state_26099__$1;(statearr_26101_26118[(2)] = inst_26089);
(statearr_26101_26118[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (8)))
{var inst_26095 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26102_26119 = state_26099__$1;(statearr_26102_26119[(2)] = inst_26095);
(statearr_26102_26119[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (7)))
{var inst_26081 = (state_26099[(7)]);var inst_26091 = cljs.core.concat.call(null,all,inst_26081);var inst_26092 = [null,inst_26091];var inst_26093 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26092,null));var state_26099__$1 = state_26099;var statearr_26103_26120 = state_26099__$1;(statearr_26103_26120[(2)] = inst_26093);
(statearr_26103_26120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (6)))
{var inst_26081 = (state_26099[(7)]);var inst_26085 = cljs.core.concat.call(null,all,inst_26081);var inst_26086 = (start + num);var inst_26087 = stock_info.call(null,inst_26085,id,startdate,inst_26086,num);var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26099__$1,(9),inst_26087);
} else
{if((state_val_26100 === (5)))
{var inst_26097 = (state_26099[(2)]);var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26099__$1,inst_26097);
} else
{if((state_val_26100 === (4)))
{var inst_26076 = (state_26099[(8)]);var inst_26081 = (state_26099[(7)]);var inst_26081__$1 = test.stock5.parse_info.call(null,inst_26076);var inst_26082 = cljs.core.count.call(null,inst_26081__$1);var inst_26083 = cljs.core._EQ_.call(null,num,inst_26082);var state_26099__$1 = (function (){var statearr_26104 = state_26099;(statearr_26104[(7)] = inst_26081__$1);
return statearr_26104;
})();if(inst_26083)
{var statearr_26105_26121 = state_26099__$1;(statearr_26105_26121[(1)] = (6));
} else
{var statearr_26106_26122 = state_26099__$1;(statearr_26106_26122[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (3)))
{var inst_26075 = (state_26099[(9)]);var inst_26078 = [inst_26075];var inst_26079 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26078,null));var state_26099__$1 = state_26099;var statearr_26107_26123 = state_26099__$1;(statearr_26107_26123[(2)] = inst_26079);
(statearr_26107_26123[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (2)))
{var inst_26075 = (state_26099[(9)]);var inst_26074 = (state_26099[(2)]);var inst_26075__$1 = cljs.core.nth.call(null,inst_26074,(0),null);var inst_26076 = cljs.core.nth.call(null,inst_26074,(1),null);var state_26099__$1 = (function (){var statearr_26108 = state_26099;(statearr_26108[(8)] = inst_26076);
(statearr_26108[(9)] = inst_26075__$1);
return statearr_26108;
})();if(cljs.core.truth_(inst_26075__$1))
{var statearr_26109_26124 = state_26099__$1;(statearr_26109_26124[(1)] = (3));
} else
{var statearr_26110_26125 = state_26099__$1;(statearr_26110_26125[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (1)))
{var inst_26071 = test.stock5.stock_url.call(null,id,startdate,start,num);var inst_26072 = test.stock5.content.call(null,inst_26071);var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26099__$1,(2),inst_26072);
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
var state_machine__6188__auto____0 = (function (){var statearr_26114 = [null,null,null,null,null,null,null,null,null,null];(statearr_26114[(0)] = state_machine__6188__auto__);
(statearr_26114[(1)] = (1));
return statearr_26114;
});
var state_machine__6188__auto____1 = (function (state_26099){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26115){if((e26115 instanceof Object))
{var ex__6191__auto__ = e26115;var statearr_26116_26126 = state_26099;(statearr_26116_26126[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26127 = state_26099;
state_26099 = G__26127;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26099){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26117 = f__6203__auto__.call(null);(statearr_26117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26117;
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
test.stock5.info__GT_data = (function info__GT_data(info){return google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p__26130){var vec__26131 = p__26130;var d = cljs.core.nth.call(null,vec__26131,(0),null);var o = cljs.core.nth.call(null,vec__26131,(1),null);var h = cljs.core.nth.call(null,vec__26131,(2),null);var l = cljs.core.nth.call(null,vec__26131,(3),null);var c = cljs.core.nth.call(null,vec__26131,(4),null);var _ = cljs.core.nth.call(null,vec__26131,(5),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,l,o,c,h], null);
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
draw_canvasjs_charts.cljs$lang$applyTo = (function (arglist__26132){
var elemId = cljs.core.first(arglist__26132);
var datas = cljs.core.rest(arglist__26132);
return draw_canvasjs_charts__delegate(elemId,datas);
});
draw_canvasjs_charts.cljs$core$IFn$_invoke$arity$variadic = draw_canvasjs_charts__delegate;
return draw_canvasjs_charts;
})()
;
test.stock5.test_draw = (function test_draw(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26206){var state_val_26207 = (state_26206[(1)]);if((state_val_26207 === (5)))
{var inst_26204 = (state_26206[(2)]);var state_26206__$1 = state_26206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26206__$1,inst_26204);
} else
{if((state_val_26207 === (4)))
{var inst_26183 = (state_26206[(7)]);var inst_26182 = (state_26206[(8)]);var inst_26181 = (state_26206[(9)]);var inst_26187 = ["type","showInLegend","legendMarkerColor","legendText","dataPoints"];var inst_26189 = (function (){var infos = inst_26183;var err = inst_26182;var vec__26178 = inst_26181;return ((function (infos,err,vec__26178,inst_26183,inst_26182,inst_26181,inst_26187,state_val_26207,c__6202__auto__){
return (function (p__26188){var vec__26208 = p__26188;var date = cljs.core.nth.call(null,vec__26208,(0),null);var _ = cljs.core.nth.call(null,vec__26208,(1),null);var ___$1 = cljs.core.nth.call(null,vec__26208,(2),null);var ___$2 = cljs.core.nth.call(null,vec__26208,(3),null);var ___$3 = cljs.core.nth.call(null,vec__26208,(4),null);var volume = cljs.core.nth.call(null,vec__26208,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",volume], null);
});
;})(infos,err,vec__26178,inst_26183,inst_26182,inst_26181,inst_26187,state_val_26207,c__6202__auto__))
})();var inst_26190 = cljs.core.map.call(null,inst_26189,inst_26183);var inst_26191 = ["column",false,"grey","volume",inst_26190];var inst_26192 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26187,inst_26191);var inst_26193 = cljs.core.clj__GT_js.call(null,inst_26192);var inst_26194 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer2",inst_26193);var inst_26195 = ["type","showInLegend","name","dataPoints"];var inst_26197 = (function (){var infos = inst_26183;var err = inst_26182;var vec__26178 = inst_26181;return ((function (infos,err,vec__26178,inst_26183,inst_26182,inst_26181,inst_26187,inst_26189,inst_26190,inst_26191,inst_26192,inst_26193,inst_26194,inst_26195,state_val_26207,c__6202__auto__){
return (function (p__26196){var vec__26209 = p__26196;var date = cljs.core.nth.call(null,vec__26209,(0),null);var open = cljs.core.nth.call(null,vec__26209,(1),null);var high = cljs.core.nth.call(null,vec__26209,(2),null);var low = cljs.core.nth.call(null,vec__26209,(3),null);var close = cljs.core.nth.call(null,vec__26209,(4),null);var _ = cljs.core.nth.call(null,vec__26209,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,high,low,close], null)], null);
});
;})(infos,err,vec__26178,inst_26183,inst_26182,inst_26181,inst_26187,inst_26189,inst_26190,inst_26191,inst_26192,inst_26193,inst_26194,inst_26195,state_val_26207,c__6202__auto__))
})();var inst_26198 = cljs.core.map.call(null,inst_26197,inst_26183);var inst_26199 = ["candlestick",false,"kline",inst_26198];var inst_26200 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26195,inst_26199);var inst_26201 = cljs.core.clj__GT_js.call(null,inst_26200);var inst_26202 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer",inst_26201);var state_26206__$1 = (function (){var statearr_26210 = state_26206;(statearr_26210[(10)] = inst_26194);
return statearr_26210;
})();var statearr_26211_26223 = state_26206__$1;(statearr_26211_26223[(2)] = inst_26202);
(statearr_26211_26223[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26207 === (3)))
{var inst_26182 = (state_26206[(8)]);var inst_26185 = alert(inst_26182);var state_26206__$1 = state_26206;var statearr_26212_26224 = state_26206__$1;(statearr_26212_26224[(2)] = inst_26185);
(statearr_26212_26224[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26207 === (2)))
{var inst_26182 = (state_26206[(8)]);var inst_26181 = (state_26206[(9)]);var inst_26181__$1 = (state_26206[(2)]);var inst_26182__$1 = cljs.core.nth.call(null,inst_26181__$1,(0),null);var inst_26183 = cljs.core.nth.call(null,inst_26181__$1,(1),null);var state_26206__$1 = (function (){var statearr_26213 = state_26206;(statearr_26213[(7)] = inst_26183);
(statearr_26213[(8)] = inst_26182__$1);
(statearr_26213[(9)] = inst_26181__$1);
return statearr_26213;
})();if(cljs.core.truth_(inst_26182__$1))
{var statearr_26214_26225 = state_26206__$1;(statearr_26214_26225[(1)] = (3));
} else
{var statearr_26215_26226 = state_26206__$1;(statearr_26215_26226[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26207 === (1)))
{var inst_26179 = test.stock5.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_26206__$1 = state_26206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26206__$1,(2),inst_26179);
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
var state_machine__6188__auto____0 = (function (){var statearr_26219 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26219[(0)] = state_machine__6188__auto__);
(statearr_26219[(1)] = (1));
return statearr_26219;
});
var state_machine__6188__auto____1 = (function (state_26206){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26206);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26220){if((e26220 instanceof Object))
{var ex__6191__auto__ = e26220;var statearr_26221_26227 = state_26206;(statearr_26221_26227[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26228 = state_26206;
state_26206 = G__26228;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26206){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26222 = f__6203__auto__.call(null);(statearr_26222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock5.test_draw.call(null);
