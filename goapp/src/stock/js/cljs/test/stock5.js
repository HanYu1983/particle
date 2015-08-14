// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock5');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
test.stock5.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock5.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj14606 = {"url":"/proxy","dataType":"text","data":(function (){var obj14608 = {"url":url};return obj14608;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_14615){var state_val_14616 = (state_14615[(1)]);if((state_val_14616 === (2)))
{var inst_14612 = (state_14615[(2)]);var inst_14613 = cljs.core.async.close_BANG_.call(null,ret);var state_14615__$1 = (function (){var statearr_14617 = state_14615;(statearr_14617[(7)] = inst_14612);
return statearr_14617;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14615__$1,inst_14613);
} else
{if((state_val_14616 === (1)))
{var inst_14609 = [null,data];var inst_14610 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14609,null));var state_14615__$1 = state_14615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14615__$1,(2),ret,inst_14610);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14621 = [null,null,null,null,null,null,null,null];(statearr_14621[(0)] = state_machine__6189__auto__);
(statearr_14621[(1)] = (1));
return statearr_14621;
});
var state_machine__6189__auto____1 = (function (state_14615){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14615);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14622){if((e14622 instanceof Object))
{var ex__6192__auto__ = e14622;var statearr_14623_14641 = state_14615;(statearr_14623_14641[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14642 = state_14615;
state_14615 = G__14642;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14615){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_14624 = f__6204__auto__.call(null);(statearr_14624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_14631){var state_val_14632 = (state_14631[(1)]);if((state_val_14632 === (2)))
{var inst_14628 = (state_14631[(2)]);var inst_14629 = cljs.core.async.close_BANG_.call(null,ret);var state_14631__$1 = (function (){var statearr_14633 = state_14631;(statearr_14633[(7)] = inst_14628);
return statearr_14633;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14631__$1,inst_14629);
} else
{if((state_val_14632 === (1)))
{var inst_14625 = [err];var inst_14626 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14625,null));var state_14631__$1 = state_14631;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14631__$1,(2),ret,inst_14626);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14637 = [null,null,null,null,null,null,null,null];(statearr_14637[(0)] = state_machine__6189__auto__);
(statearr_14637[(1)] = (1));
return statearr_14637;
});
var state_machine__6189__auto____1 = (function (state_14631){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14631);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14638){if((e14638 instanceof Object))
{var ex__6192__auto__ = e14638;var statearr_14639_14643 = state_14631;(statearr_14639_14643[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14631);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14644 = state_14631;
state_14631 = G__14644;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14631){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_14640 = f__6204__auto__.call(null);(statearr_14640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj14606;
})());
return ret;
});
test.stock5.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__14653(s__14654){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__14654__$1 = s__14654;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14654__$1);if(temp__4126__auto__)
{var s__14654__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14654__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14654__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14656 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14655 = (0);while(true){
if((i__14655 < size__4275__auto__))
{var vec__14659 = cljs.core._nth.call(null,c__4274__auto__,i__14655);var _ = cljs.core.nth.call(null,vec__14659,(0),null);var date = cljs.core.nth.call(null,vec__14659,(1),null);var open = cljs.core.nth.call(null,vec__14659,(2),null);var high = cljs.core.nth.call(null,vec__14659,(3),null);var low = cljs.core.nth.call(null,vec__14659,(4),null);var close = cljs.core.nth.call(null,vec__14659,(5),null);var volume = cljs.core.nth.call(null,vec__14659,(6),null);cljs.core.chunk_append.call(null,b__14656,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__14661 = (i__14655 + (1));
i__14655 = G__14661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14656),iter__14653.call(null,cljs.core.chunk_rest.call(null,s__14654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14656),null);
}
} else
{var vec__14660 = cljs.core.first.call(null,s__14654__$2);var _ = cljs.core.nth.call(null,vec__14660,(0),null);var date = cljs.core.nth.call(null,vec__14660,(1),null);var open = cljs.core.nth.call(null,vec__14660,(2),null);var high = cljs.core.nth.call(null,vec__14660,(3),null);var low = cljs.core.nth.call(null,vec__14660,(4),null);var close = cljs.core.nth.call(null,vec__14660,(5),null);var volume = cljs.core.nth.call(null,vec__14660,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__14653.call(null,cljs.core.rest.call(null,s__14654__$2)));
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
test.stock5.stock_info = (function stock_info(all,id,startdate,start,num){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_14739){var state_val_14740 = (state_14739[(1)]);if((state_val_14740 === (9)))
{var inst_14729 = (state_14739[(2)]);var state_14739__$1 = state_14739;var statearr_14741_14758 = state_14739__$1;(statearr_14741_14758[(2)] = inst_14729);
(statearr_14741_14758[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (8)))
{var inst_14735 = (state_14739[(2)]);var state_14739__$1 = state_14739;var statearr_14742_14759 = state_14739__$1;(statearr_14742_14759[(2)] = inst_14735);
(statearr_14742_14759[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (7)))
{var inst_14721 = (state_14739[(7)]);var inst_14731 = cljs.core.concat.call(null,all,inst_14721);var inst_14732 = [null,inst_14731];var inst_14733 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14732,null));var state_14739__$1 = state_14739;var statearr_14743_14760 = state_14739__$1;(statearr_14743_14760[(2)] = inst_14733);
(statearr_14743_14760[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (6)))
{var inst_14721 = (state_14739[(7)]);var inst_14725 = cljs.core.concat.call(null,all,inst_14721);var inst_14726 = (start + num);var inst_14727 = stock_info.call(null,inst_14725,id,startdate,inst_14726,num);var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14739__$1,(9),inst_14727);
} else
{if((state_val_14740 === (5)))
{var inst_14737 = (state_14739[(2)]);var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14739__$1,inst_14737);
} else
{if((state_val_14740 === (4)))
{var inst_14721 = (state_14739[(7)]);var inst_14716 = (state_14739[(8)]);var inst_14721__$1 = test.stock5.parse_info.call(null,inst_14716);var inst_14722 = cljs.core.count.call(null,inst_14721__$1);var inst_14723 = cljs.core._EQ_.call(null,num,inst_14722);var state_14739__$1 = (function (){var statearr_14744 = state_14739;(statearr_14744[(7)] = inst_14721__$1);
return statearr_14744;
})();if(inst_14723)
{var statearr_14745_14761 = state_14739__$1;(statearr_14745_14761[(1)] = (6));
} else
{var statearr_14746_14762 = state_14739__$1;(statearr_14746_14762[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (3)))
{var inst_14715 = (state_14739[(9)]);var inst_14718 = [inst_14715];var inst_14719 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14718,null));var state_14739__$1 = state_14739;var statearr_14747_14763 = state_14739__$1;(statearr_14747_14763[(2)] = inst_14719);
(statearr_14747_14763[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (2)))
{var inst_14715 = (state_14739[(9)]);var inst_14714 = (state_14739[(2)]);var inst_14715__$1 = cljs.core.nth.call(null,inst_14714,(0),null);var inst_14716 = cljs.core.nth.call(null,inst_14714,(1),null);var state_14739__$1 = (function (){var statearr_14748 = state_14739;(statearr_14748[(9)] = inst_14715__$1);
(statearr_14748[(8)] = inst_14716);
return statearr_14748;
})();if(cljs.core.truth_(inst_14715__$1))
{var statearr_14749_14764 = state_14739__$1;(statearr_14749_14764[(1)] = (3));
} else
{var statearr_14750_14765 = state_14739__$1;(statearr_14750_14765[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (1)))
{var inst_14711 = test.stock5.stock_url.call(null,id,startdate,start,num);var inst_14712 = test.stock5.content.call(null,inst_14711);var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14739__$1,(2),inst_14712);
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14754 = [null,null,null,null,null,null,null,null,null,null];(statearr_14754[(0)] = state_machine__6189__auto__);
(statearr_14754[(1)] = (1));
return statearr_14754;
});
var state_machine__6189__auto____1 = (function (state_14739){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14739);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14755){if((e14755 instanceof Object))
{var ex__6192__auto__ = e14755;var statearr_14756_14766 = state_14739;(statearr_14756_14766[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14767 = state_14739;
state_14739 = G__14767;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14739){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_14757 = f__6204__auto__.call(null);(statearr_14757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
/**
* 似乎不能套用async，不然callback沒有反應
*/
test.stock5.load_google_visualization = (function load_google_visualization(onLoad){google.load("visualization","1",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["packages",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["corechart"], null)], null)));
return google.setOnLoadCallback(onLoad);
});
test.stock5.info__GT_data = (function info__GT_data(info){return google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p__14770){var vec__14771 = p__14770;var d = cljs.core.nth.call(null,vec__14771,(0),null);var o = cljs.core.nth.call(null,vec__14771,(1),null);var h = cljs.core.nth.call(null,vec__14771,(2),null);var l = cljs.core.nth.call(null,vec__14771,(3),null);var c = cljs.core.nth.call(null,vec__14771,(4),null);var _ = cljs.core.nth.call(null,vec__14771,(5),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,l,o,c,h], null);
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
draw_canvasjs_charts.cljs$lang$applyTo = (function (arglist__14772){
var elemId = cljs.core.first(arglist__14772);
var datas = cljs.core.rest(arglist__14772);
return draw_canvasjs_charts__delegate(elemId,datas);
});
draw_canvasjs_charts.cljs$core$IFn$_invoke$arity$variadic = draw_canvasjs_charts__delegate;
return draw_canvasjs_charts;
})()
;
test.stock5.test_draw = (function test_draw(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_14846){var state_val_14847 = (state_14846[(1)]);if((state_val_14847 === (5)))
{var inst_14844 = (state_14846[(2)]);var state_14846__$1 = state_14846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14846__$1,inst_14844);
} else
{if((state_val_14847 === (4)))
{var inst_14823 = (state_14846[(7)]);var inst_14821 = (state_14846[(8)]);var inst_14822 = (state_14846[(9)]);var inst_14827 = ["type","showInLegend","legendMarkerColor","legendText","dataPoints"];var inst_14829 = (function (){var infos = inst_14823;var err = inst_14822;var vec__14818 = inst_14821;return ((function (infos,err,vec__14818,inst_14823,inst_14821,inst_14822,inst_14827,state_val_14847,c__6203__auto__){
return (function (p__14828){var vec__14848 = p__14828;var date = cljs.core.nth.call(null,vec__14848,(0),null);var _ = cljs.core.nth.call(null,vec__14848,(1),null);var ___$1 = cljs.core.nth.call(null,vec__14848,(2),null);var ___$2 = cljs.core.nth.call(null,vec__14848,(3),null);var ___$3 = cljs.core.nth.call(null,vec__14848,(4),null);var volume = cljs.core.nth.call(null,vec__14848,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",volume], null);
});
;})(infos,err,vec__14818,inst_14823,inst_14821,inst_14822,inst_14827,state_val_14847,c__6203__auto__))
})();var inst_14830 = cljs.core.map.call(null,inst_14829,inst_14823);var inst_14831 = ["column",false,"grey","volume",inst_14830];var inst_14832 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14827,inst_14831);var inst_14833 = cljs.core.clj__GT_js.call(null,inst_14832);var inst_14834 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer2",inst_14833);var inst_14835 = ["type","showInLegend","name","dataPoints"];var inst_14837 = (function (){var infos = inst_14823;var err = inst_14822;var vec__14818 = inst_14821;return ((function (infos,err,vec__14818,inst_14823,inst_14821,inst_14822,inst_14827,inst_14829,inst_14830,inst_14831,inst_14832,inst_14833,inst_14834,inst_14835,state_val_14847,c__6203__auto__){
return (function (p__14836){var vec__14849 = p__14836;var date = cljs.core.nth.call(null,vec__14849,(0),null);var open = cljs.core.nth.call(null,vec__14849,(1),null);var high = cljs.core.nth.call(null,vec__14849,(2),null);var low = cljs.core.nth.call(null,vec__14849,(3),null);var close = cljs.core.nth.call(null,vec__14849,(4),null);var _ = cljs.core.nth.call(null,vec__14849,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,high,low,close], null)], null);
});
;})(infos,err,vec__14818,inst_14823,inst_14821,inst_14822,inst_14827,inst_14829,inst_14830,inst_14831,inst_14832,inst_14833,inst_14834,inst_14835,state_val_14847,c__6203__auto__))
})();var inst_14838 = cljs.core.map.call(null,inst_14837,inst_14823);var inst_14839 = ["candlestick",false,"kline",inst_14838];var inst_14840 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14835,inst_14839);var inst_14841 = cljs.core.clj__GT_js.call(null,inst_14840);var inst_14842 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer",inst_14841);var state_14846__$1 = (function (){var statearr_14850 = state_14846;(statearr_14850[(10)] = inst_14834);
return statearr_14850;
})();var statearr_14851_14863 = state_14846__$1;(statearr_14851_14863[(2)] = inst_14842);
(statearr_14851_14863[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14847 === (3)))
{var inst_14822 = (state_14846[(9)]);var inst_14825 = alert(inst_14822);var state_14846__$1 = state_14846;var statearr_14852_14864 = state_14846__$1;(statearr_14852_14864[(2)] = inst_14825);
(statearr_14852_14864[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14847 === (2)))
{var inst_14821 = (state_14846[(8)]);var inst_14822 = (state_14846[(9)]);var inst_14821__$1 = (state_14846[(2)]);var inst_14822__$1 = cljs.core.nth.call(null,inst_14821__$1,(0),null);var inst_14823 = cljs.core.nth.call(null,inst_14821__$1,(1),null);var state_14846__$1 = (function (){var statearr_14853 = state_14846;(statearr_14853[(7)] = inst_14823);
(statearr_14853[(8)] = inst_14821__$1);
(statearr_14853[(9)] = inst_14822__$1);
return statearr_14853;
})();if(cljs.core.truth_(inst_14822__$1))
{var statearr_14854_14865 = state_14846__$1;(statearr_14854_14865[(1)] = (3));
} else
{var statearr_14855_14866 = state_14846__$1;(statearr_14855_14866[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14847 === (1)))
{var inst_14819 = test.stock5.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_14846__$1 = state_14846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14846__$1,(2),inst_14819);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14859 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14859[(0)] = state_machine__6189__auto__);
(statearr_14859[(1)] = (1));
return statearr_14859;
});
var state_machine__6189__auto____1 = (function (state_14846){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14846);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14860){if((e14860 instanceof Object))
{var ex__6192__auto__ = e14860;var statearr_14861_14867 = state_14846;(statearr_14861_14867[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14868 = state_14846;
state_14846 = G__14868;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14846){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_14862 = f__6204__auto__.call(null);(statearr_14862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock5.test_draw.call(null);
