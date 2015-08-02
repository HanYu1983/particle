// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock5');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
test.stock5.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock5.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj30535 = {"url":"/proxy","dataType":"text","data":(function (){var obj30537 = {"url":url};return obj30537;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_30544){var state_val_30545 = (state_30544[(1)]);if((state_val_30545 === (2)))
{var inst_30541 = (state_30544[(2)]);var inst_30542 = cljs.core.async.close_BANG_.call(null,ret);var state_30544__$1 = (function (){var statearr_30546 = state_30544;(statearr_30546[(7)] = inst_30541);
return statearr_30546;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30544__$1,inst_30542);
} else
{if((state_val_30545 === (1)))
{var inst_30538 = [null,data];var inst_30539 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30538,null));var state_30544__$1 = state_30544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30544__$1,(2),ret,inst_30539);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30550 = [null,null,null,null,null,null,null,null];(statearr_30550[(0)] = state_machine__6188__auto__);
(statearr_30550[(1)] = (1));
return statearr_30550;
});
var state_machine__6188__auto____1 = (function (state_30544){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30544);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30551){if((e30551 instanceof Object))
{var ex__6191__auto__ = e30551;var statearr_30552_30570 = state_30544;(statearr_30552_30570[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30571 = state_30544;
state_30544 = G__30571;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30544){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_30553 = f__6203__auto__.call(null);(statearr_30553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_30560){var state_val_30561 = (state_30560[(1)]);if((state_val_30561 === (2)))
{var inst_30557 = (state_30560[(2)]);var inst_30558 = cljs.core.async.close_BANG_.call(null,ret);var state_30560__$1 = (function (){var statearr_30562 = state_30560;(statearr_30562[(7)] = inst_30557);
return statearr_30562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30560__$1,inst_30558);
} else
{if((state_val_30561 === (1)))
{var inst_30554 = [err];var inst_30555 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30554,null));var state_30560__$1 = state_30560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30560__$1,(2),ret,inst_30555);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30566 = [null,null,null,null,null,null,null,null];(statearr_30566[(0)] = state_machine__6188__auto__);
(statearr_30566[(1)] = (1));
return statearr_30566;
});
var state_machine__6188__auto____1 = (function (state_30560){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30560);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30567){if((e30567 instanceof Object))
{var ex__6191__auto__ = e30567;var statearr_30568_30572 = state_30560;(statearr_30568_30572[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30573 = state_30560;
state_30560 = G__30573;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30560){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_30569 = f__6203__auto__.call(null);(statearr_30569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj30535;
})());
return ret;
});
test.stock5.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__30582(s__30583){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__30583__$1 = s__30583;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30583__$1);if(temp__4126__auto__)
{var s__30583__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30583__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__30583__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__30585 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__30584 = (0);while(true){
if((i__30584 < size__4275__auto__))
{var vec__30588 = cljs.core._nth.call(null,c__4274__auto__,i__30584);var _ = cljs.core.nth.call(null,vec__30588,(0),null);var date = cljs.core.nth.call(null,vec__30588,(1),null);var open = cljs.core.nth.call(null,vec__30588,(2),null);var high = cljs.core.nth.call(null,vec__30588,(3),null);var low = cljs.core.nth.call(null,vec__30588,(4),null);var close = cljs.core.nth.call(null,vec__30588,(5),null);var volume = cljs.core.nth.call(null,vec__30588,(6),null);cljs.core.chunk_append.call(null,b__30585,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__30590 = (i__30584 + (1));
i__30584 = G__30590;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30585),iter__30582.call(null,cljs.core.chunk_rest.call(null,s__30583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30585),null);
}
} else
{var vec__30589 = cljs.core.first.call(null,s__30583__$2);var _ = cljs.core.nth.call(null,vec__30589,(0),null);var date = cljs.core.nth.call(null,vec__30589,(1),null);var open = cljs.core.nth.call(null,vec__30589,(2),null);var high = cljs.core.nth.call(null,vec__30589,(3),null);var low = cljs.core.nth.call(null,vec__30589,(4),null);var close = cljs.core.nth.call(null,vec__30589,(5),null);var volume = cljs.core.nth.call(null,vec__30589,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__30582.call(null,cljs.core.rest.call(null,s__30583__$2)));
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
return (function (state_30668){var state_val_30669 = (state_30668[(1)]);if((state_val_30669 === (9)))
{var inst_30658 = (state_30668[(2)]);var state_30668__$1 = state_30668;var statearr_30670_30687 = state_30668__$1;(statearr_30670_30687[(2)] = inst_30658);
(statearr_30670_30687[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30669 === (8)))
{var inst_30664 = (state_30668[(2)]);var state_30668__$1 = state_30668;var statearr_30671_30688 = state_30668__$1;(statearr_30671_30688[(2)] = inst_30664);
(statearr_30671_30688[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30669 === (7)))
{var inst_30650 = (state_30668[(7)]);var inst_30660 = cljs.core.concat.call(null,all,inst_30650);var inst_30661 = [null,inst_30660];var inst_30662 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30661,null));var state_30668__$1 = state_30668;var statearr_30672_30689 = state_30668__$1;(statearr_30672_30689[(2)] = inst_30662);
(statearr_30672_30689[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30669 === (6)))
{var inst_30650 = (state_30668[(7)]);var inst_30654 = cljs.core.concat.call(null,all,inst_30650);var inst_30655 = (start + num);var inst_30656 = stock_info.call(null,inst_30654,id,startdate,inst_30655,num);var state_30668__$1 = state_30668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30668__$1,(9),inst_30656);
} else
{if((state_val_30669 === (5)))
{var inst_30666 = (state_30668[(2)]);var state_30668__$1 = state_30668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30668__$1,inst_30666);
} else
{if((state_val_30669 === (4)))
{var inst_30650 = (state_30668[(7)]);var inst_30645 = (state_30668[(8)]);var inst_30650__$1 = test.stock5.parse_info.call(null,inst_30645);var inst_30651 = cljs.core.count.call(null,inst_30650__$1);var inst_30652 = cljs.core._EQ_.call(null,num,inst_30651);var state_30668__$1 = (function (){var statearr_30673 = state_30668;(statearr_30673[(7)] = inst_30650__$1);
return statearr_30673;
})();if(inst_30652)
{var statearr_30674_30690 = state_30668__$1;(statearr_30674_30690[(1)] = (6));
} else
{var statearr_30675_30691 = state_30668__$1;(statearr_30675_30691[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30669 === (3)))
{var inst_30644 = (state_30668[(9)]);var inst_30647 = [inst_30644];var inst_30648 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30647,null));var state_30668__$1 = state_30668;var statearr_30676_30692 = state_30668__$1;(statearr_30676_30692[(2)] = inst_30648);
(statearr_30676_30692[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30669 === (2)))
{var inst_30644 = (state_30668[(9)]);var inst_30643 = (state_30668[(2)]);var inst_30644__$1 = cljs.core.nth.call(null,inst_30643,(0),null);var inst_30645 = cljs.core.nth.call(null,inst_30643,(1),null);var state_30668__$1 = (function (){var statearr_30677 = state_30668;(statearr_30677[(9)] = inst_30644__$1);
(statearr_30677[(8)] = inst_30645);
return statearr_30677;
})();if(cljs.core.truth_(inst_30644__$1))
{var statearr_30678_30693 = state_30668__$1;(statearr_30678_30693[(1)] = (3));
} else
{var statearr_30679_30694 = state_30668__$1;(statearr_30679_30694[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30669 === (1)))
{var inst_30640 = test.stock5.stock_url.call(null,id,startdate,start,num);var inst_30641 = test.stock5.content.call(null,inst_30640);var state_30668__$1 = state_30668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30668__$1,(2),inst_30641);
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
var state_machine__6188__auto____0 = (function (){var statearr_30683 = [null,null,null,null,null,null,null,null,null,null];(statearr_30683[(0)] = state_machine__6188__auto__);
(statearr_30683[(1)] = (1));
return statearr_30683;
});
var state_machine__6188__auto____1 = (function (state_30668){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30684){if((e30684 instanceof Object))
{var ex__6191__auto__ = e30684;var statearr_30685_30695 = state_30668;(statearr_30685_30695[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30696 = state_30668;
state_30668 = G__30696;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30668){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30686 = f__6203__auto__.call(null);(statearr_30686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30686;
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
test.stock5.info__GT_data = (function info__GT_data(info){return google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p__30699){var vec__30700 = p__30699;var d = cljs.core.nth.call(null,vec__30700,(0),null);var o = cljs.core.nth.call(null,vec__30700,(1),null);var h = cljs.core.nth.call(null,vec__30700,(2),null);var l = cljs.core.nth.call(null,vec__30700,(3),null);var c = cljs.core.nth.call(null,vec__30700,(4),null);var _ = cljs.core.nth.call(null,vec__30700,(5),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,l,o,c,h], null);
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
draw_canvasjs_charts.cljs$lang$applyTo = (function (arglist__30701){
var elemId = cljs.core.first(arglist__30701);
var datas = cljs.core.rest(arglist__30701);
return draw_canvasjs_charts__delegate(elemId,datas);
});
draw_canvasjs_charts.cljs$core$IFn$_invoke$arity$variadic = draw_canvasjs_charts__delegate;
return draw_canvasjs_charts;
})()
;
test.stock5.test_draw = (function test_draw(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_30775){var state_val_30776 = (state_30775[(1)]);if((state_val_30776 === (5)))
{var inst_30773 = (state_30775[(2)]);var state_30775__$1 = state_30775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30775__$1,inst_30773);
} else
{if((state_val_30776 === (4)))
{var inst_30752 = (state_30775[(7)]);var inst_30751 = (state_30775[(8)]);var inst_30750 = (state_30775[(9)]);var inst_30756 = ["type","showInLegend","legendMarkerColor","legendText","dataPoints"];var inst_30758 = (function (){var infos = inst_30752;var err = inst_30751;var vec__30747 = inst_30750;return ((function (infos,err,vec__30747,inst_30752,inst_30751,inst_30750,inst_30756,state_val_30776,c__6202__auto__){
return (function (p__30757){var vec__30777 = p__30757;var date = cljs.core.nth.call(null,vec__30777,(0),null);var _ = cljs.core.nth.call(null,vec__30777,(1),null);var ___$1 = cljs.core.nth.call(null,vec__30777,(2),null);var ___$2 = cljs.core.nth.call(null,vec__30777,(3),null);var ___$3 = cljs.core.nth.call(null,vec__30777,(4),null);var volume = cljs.core.nth.call(null,vec__30777,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",volume], null);
});
;})(infos,err,vec__30747,inst_30752,inst_30751,inst_30750,inst_30756,state_val_30776,c__6202__auto__))
})();var inst_30759 = cljs.core.map.call(null,inst_30758,inst_30752);var inst_30760 = ["column",false,"grey","volume",inst_30759];var inst_30761 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30756,inst_30760);var inst_30762 = cljs.core.clj__GT_js.call(null,inst_30761);var inst_30763 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer2",inst_30762);var inst_30764 = ["type","showInLegend","name","dataPoints"];var inst_30766 = (function (){var infos = inst_30752;var err = inst_30751;var vec__30747 = inst_30750;return ((function (infos,err,vec__30747,inst_30752,inst_30751,inst_30750,inst_30756,inst_30758,inst_30759,inst_30760,inst_30761,inst_30762,inst_30763,inst_30764,state_val_30776,c__6202__auto__){
return (function (p__30765){var vec__30778 = p__30765;var date = cljs.core.nth.call(null,vec__30778,(0),null);var open = cljs.core.nth.call(null,vec__30778,(1),null);var high = cljs.core.nth.call(null,vec__30778,(2),null);var low = cljs.core.nth.call(null,vec__30778,(3),null);var close = cljs.core.nth.call(null,vec__30778,(4),null);var _ = cljs.core.nth.call(null,vec__30778,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,high,low,close], null)], null);
});
;})(infos,err,vec__30747,inst_30752,inst_30751,inst_30750,inst_30756,inst_30758,inst_30759,inst_30760,inst_30761,inst_30762,inst_30763,inst_30764,state_val_30776,c__6202__auto__))
})();var inst_30767 = cljs.core.map.call(null,inst_30766,inst_30752);var inst_30768 = ["candlestick",false,"kline",inst_30767];var inst_30769 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30764,inst_30768);var inst_30770 = cljs.core.clj__GT_js.call(null,inst_30769);var inst_30771 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer",inst_30770);var state_30775__$1 = (function (){var statearr_30779 = state_30775;(statearr_30779[(10)] = inst_30763);
return statearr_30779;
})();var statearr_30780_30792 = state_30775__$1;(statearr_30780_30792[(2)] = inst_30771);
(statearr_30780_30792[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30776 === (3)))
{var inst_30751 = (state_30775[(8)]);var inst_30754 = alert(inst_30751);var state_30775__$1 = state_30775;var statearr_30781_30793 = state_30775__$1;(statearr_30781_30793[(2)] = inst_30754);
(statearr_30781_30793[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30776 === (2)))
{var inst_30751 = (state_30775[(8)]);var inst_30750 = (state_30775[(9)]);var inst_30750__$1 = (state_30775[(2)]);var inst_30751__$1 = cljs.core.nth.call(null,inst_30750__$1,(0),null);var inst_30752 = cljs.core.nth.call(null,inst_30750__$1,(1),null);var state_30775__$1 = (function (){var statearr_30782 = state_30775;(statearr_30782[(7)] = inst_30752);
(statearr_30782[(8)] = inst_30751__$1);
(statearr_30782[(9)] = inst_30750__$1);
return statearr_30782;
})();if(cljs.core.truth_(inst_30751__$1))
{var statearr_30783_30794 = state_30775__$1;(statearr_30783_30794[(1)] = (3));
} else
{var statearr_30784_30795 = state_30775__$1;(statearr_30784_30795[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30776 === (1)))
{var inst_30748 = test.stock5.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_30775__$1 = state_30775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30775__$1,(2),inst_30748);
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
var state_machine__6188__auto____0 = (function (){var statearr_30788 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30788[(0)] = state_machine__6188__auto__);
(statearr_30788[(1)] = (1));
return statearr_30788;
});
var state_machine__6188__auto____1 = (function (state_30775){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30789){if((e30789 instanceof Object))
{var ex__6191__auto__ = e30789;var statearr_30790_30796 = state_30775;(statearr_30790_30796[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30797 = state_30775;
state_30775 = G__30797;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30775){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30791 = f__6203__auto__.call(null);(statearr_30791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock5.test_draw.call(null);
