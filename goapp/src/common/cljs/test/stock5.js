// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock5');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
test.stock5.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock5.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj16881 = {"url":"/proxy","dataType":"text","data":(function (){var obj16883 = {"url":url};return obj16883;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_16890){var state_val_16891 = (state_16890[(1)]);if((state_val_16891 === (2)))
{var inst_16887 = (state_16890[(2)]);var inst_16888 = cljs.core.async.close_BANG_.call(null,ret);var state_16890__$1 = (function (){var statearr_16892 = state_16890;(statearr_16892[(7)] = inst_16887);
return statearr_16892;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16890__$1,inst_16888);
} else
{if((state_val_16891 === (1)))
{var inst_16884 = [null,data];var inst_16885 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16884,null));var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16890__$1,(2),ret,inst_16885);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16896 = [null,null,null,null,null,null,null,null];(statearr_16896[(0)] = state_machine__6189__auto__);
(statearr_16896[(1)] = (1));
return statearr_16896;
});
var state_machine__6189__auto____1 = (function (state_16890){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16897){if((e16897 instanceof Object))
{var ex__6192__auto__ = e16897;var statearr_16898_16916 = state_16890;(statearr_16898_16916[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16917 = state_16890;
state_16890 = G__16917;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_16899 = f__6204__auto__.call(null);(statearr_16899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_16906){var state_val_16907 = (state_16906[(1)]);if((state_val_16907 === (2)))
{var inst_16903 = (state_16906[(2)]);var inst_16904 = cljs.core.async.close_BANG_.call(null,ret);var state_16906__$1 = (function (){var statearr_16908 = state_16906;(statearr_16908[(7)] = inst_16903);
return statearr_16908;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16906__$1,inst_16904);
} else
{if((state_val_16907 === (1)))
{var inst_16900 = [err];var inst_16901 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16900,null));var state_16906__$1 = state_16906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16906__$1,(2),ret,inst_16901);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16912 = [null,null,null,null,null,null,null,null];(statearr_16912[(0)] = state_machine__6189__auto__);
(statearr_16912[(1)] = (1));
return statearr_16912;
});
var state_machine__6189__auto____1 = (function (state_16906){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16906);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16913){if((e16913 instanceof Object))
{var ex__6192__auto__ = e16913;var statearr_16914_16918 = state_16906;(statearr_16914_16918[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16919 = state_16906;
state_16906 = G__16919;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16906){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_16915 = f__6204__auto__.call(null);(statearr_16915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj16881;
})());
return ret;
});
test.stock5.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__16928(s__16929){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__16929__$1 = s__16929;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16929__$1);if(temp__4126__auto__)
{var s__16929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16929__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16929__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16931 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16930 = (0);while(true){
if((i__16930 < size__4275__auto__))
{var vec__16934 = cljs.core._nth.call(null,c__4274__auto__,i__16930);var _ = cljs.core.nth.call(null,vec__16934,(0),null);var date = cljs.core.nth.call(null,vec__16934,(1),null);var open = cljs.core.nth.call(null,vec__16934,(2),null);var high = cljs.core.nth.call(null,vec__16934,(3),null);var low = cljs.core.nth.call(null,vec__16934,(4),null);var close = cljs.core.nth.call(null,vec__16934,(5),null);var volume = cljs.core.nth.call(null,vec__16934,(6),null);cljs.core.chunk_append.call(null,b__16931,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__16936 = (i__16930 + (1));
i__16930 = G__16936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16931),iter__16928.call(null,cljs.core.chunk_rest.call(null,s__16929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16931),null);
}
} else
{var vec__16935 = cljs.core.first.call(null,s__16929__$2);var _ = cljs.core.nth.call(null,vec__16935,(0),null);var date = cljs.core.nth.call(null,vec__16935,(1),null);var open = cljs.core.nth.call(null,vec__16935,(2),null);var high = cljs.core.nth.call(null,vec__16935,(3),null);var low = cljs.core.nth.call(null,vec__16935,(4),null);var close = cljs.core.nth.call(null,vec__16935,(5),null);var volume = cljs.core.nth.call(null,vec__16935,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__16928.call(null,cljs.core.rest.call(null,s__16929__$2)));
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
return (function (state_17014){var state_val_17015 = (state_17014[(1)]);if((state_val_17015 === (9)))
{var inst_17004 = (state_17014[(2)]);var state_17014__$1 = state_17014;var statearr_17016_17033 = state_17014__$1;(statearr_17016_17033[(2)] = inst_17004);
(statearr_17016_17033[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17015 === (8)))
{var inst_17010 = (state_17014[(2)]);var state_17014__$1 = state_17014;var statearr_17017_17034 = state_17014__$1;(statearr_17017_17034[(2)] = inst_17010);
(statearr_17017_17034[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17015 === (7)))
{var inst_16996 = (state_17014[(7)]);var inst_17006 = cljs.core.concat.call(null,all,inst_16996);var inst_17007 = [null,inst_17006];var inst_17008 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17007,null));var state_17014__$1 = state_17014;var statearr_17018_17035 = state_17014__$1;(statearr_17018_17035[(2)] = inst_17008);
(statearr_17018_17035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17015 === (6)))
{var inst_16996 = (state_17014[(7)]);var inst_17000 = cljs.core.concat.call(null,all,inst_16996);var inst_17001 = (start + num);var inst_17002 = stock_info.call(null,inst_17000,id,startdate,inst_17001,num);var state_17014__$1 = state_17014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17014__$1,(9),inst_17002);
} else
{if((state_val_17015 === (5)))
{var inst_17012 = (state_17014[(2)]);var state_17014__$1 = state_17014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17014__$1,inst_17012);
} else
{if((state_val_17015 === (4)))
{var inst_16996 = (state_17014[(7)]);var inst_16991 = (state_17014[(8)]);var inst_16996__$1 = test.stock5.parse_info.call(null,inst_16991);var inst_16997 = cljs.core.count.call(null,inst_16996__$1);var inst_16998 = cljs.core._EQ_.call(null,num,inst_16997);var state_17014__$1 = (function (){var statearr_17019 = state_17014;(statearr_17019[(7)] = inst_16996__$1);
return statearr_17019;
})();if(inst_16998)
{var statearr_17020_17036 = state_17014__$1;(statearr_17020_17036[(1)] = (6));
} else
{var statearr_17021_17037 = state_17014__$1;(statearr_17021_17037[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17015 === (3)))
{var inst_16990 = (state_17014[(9)]);var inst_16993 = [inst_16990];var inst_16994 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16993,null));var state_17014__$1 = state_17014;var statearr_17022_17038 = state_17014__$1;(statearr_17022_17038[(2)] = inst_16994);
(statearr_17022_17038[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17015 === (2)))
{var inst_16990 = (state_17014[(9)]);var inst_16989 = (state_17014[(2)]);var inst_16990__$1 = cljs.core.nth.call(null,inst_16989,(0),null);var inst_16991 = cljs.core.nth.call(null,inst_16989,(1),null);var state_17014__$1 = (function (){var statearr_17023 = state_17014;(statearr_17023[(9)] = inst_16990__$1);
(statearr_17023[(8)] = inst_16991);
return statearr_17023;
})();if(cljs.core.truth_(inst_16990__$1))
{var statearr_17024_17039 = state_17014__$1;(statearr_17024_17039[(1)] = (3));
} else
{var statearr_17025_17040 = state_17014__$1;(statearr_17025_17040[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17015 === (1)))
{var inst_16986 = test.stock5.stock_url.call(null,id,startdate,start,num);var inst_16987 = test.stock5.content.call(null,inst_16986);var state_17014__$1 = state_17014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17014__$1,(2),inst_16987);
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
var state_machine__6189__auto____0 = (function (){var statearr_17029 = [null,null,null,null,null,null,null,null,null,null];(statearr_17029[(0)] = state_machine__6189__auto__);
(statearr_17029[(1)] = (1));
return statearr_17029;
});
var state_machine__6189__auto____1 = (function (state_17014){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17030){if((e17030 instanceof Object))
{var ex__6192__auto__ = e17030;var statearr_17031_17041 = state_17014;(statearr_17031_17041[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17042 = state_17014;
state_17014 = G__17042;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17014){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17032 = f__6204__auto__.call(null);(statearr_17032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17032;
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
test.stock5.info__GT_data = (function info__GT_data(info){return google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p__17045){var vec__17046 = p__17045;var d = cljs.core.nth.call(null,vec__17046,(0),null);var o = cljs.core.nth.call(null,vec__17046,(1),null);var h = cljs.core.nth.call(null,vec__17046,(2),null);var l = cljs.core.nth.call(null,vec__17046,(3),null);var c = cljs.core.nth.call(null,vec__17046,(4),null);var _ = cljs.core.nth.call(null,vec__17046,(5),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,l,o,c,h], null);
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
draw_canvasjs_charts.cljs$lang$applyTo = (function (arglist__17047){
var elemId = cljs.core.first(arglist__17047);
var datas = cljs.core.rest(arglist__17047);
return draw_canvasjs_charts__delegate(elemId,datas);
});
draw_canvasjs_charts.cljs$core$IFn$_invoke$arity$variadic = draw_canvasjs_charts__delegate;
return draw_canvasjs_charts;
})()
;
test.stock5.test_draw = (function test_draw(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17121){var state_val_17122 = (state_17121[(1)]);if((state_val_17122 === (5)))
{var inst_17119 = (state_17121[(2)]);var state_17121__$1 = state_17121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17121__$1,inst_17119);
} else
{if((state_val_17122 === (4)))
{var inst_17098 = (state_17121[(7)]);var inst_17096 = (state_17121[(8)]);var inst_17097 = (state_17121[(9)]);var inst_17102 = ["type","showInLegend","legendMarkerColor","legendText","dataPoints"];var inst_17104 = (function (){var infos = inst_17098;var err = inst_17097;var vec__17093 = inst_17096;return ((function (infos,err,vec__17093,inst_17098,inst_17096,inst_17097,inst_17102,state_val_17122,c__6203__auto__){
return (function (p__17103){var vec__17123 = p__17103;var date = cljs.core.nth.call(null,vec__17123,(0),null);var _ = cljs.core.nth.call(null,vec__17123,(1),null);var ___$1 = cljs.core.nth.call(null,vec__17123,(2),null);var ___$2 = cljs.core.nth.call(null,vec__17123,(3),null);var ___$3 = cljs.core.nth.call(null,vec__17123,(4),null);var volume = cljs.core.nth.call(null,vec__17123,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",volume], null);
});
;})(infos,err,vec__17093,inst_17098,inst_17096,inst_17097,inst_17102,state_val_17122,c__6203__auto__))
})();var inst_17105 = cljs.core.map.call(null,inst_17104,inst_17098);var inst_17106 = ["column",false,"grey","volume",inst_17105];var inst_17107 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17102,inst_17106);var inst_17108 = cljs.core.clj__GT_js.call(null,inst_17107);var inst_17109 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer2",inst_17108);var inst_17110 = ["type","showInLegend","name","dataPoints"];var inst_17112 = (function (){var infos = inst_17098;var err = inst_17097;var vec__17093 = inst_17096;return ((function (infos,err,vec__17093,inst_17098,inst_17096,inst_17097,inst_17102,inst_17104,inst_17105,inst_17106,inst_17107,inst_17108,inst_17109,inst_17110,state_val_17122,c__6203__auto__){
return (function (p__17111){var vec__17124 = p__17111;var date = cljs.core.nth.call(null,vec__17124,(0),null);var open = cljs.core.nth.call(null,vec__17124,(1),null);var high = cljs.core.nth.call(null,vec__17124,(2),null);var low = cljs.core.nth.call(null,vec__17124,(3),null);var close = cljs.core.nth.call(null,vec__17124,(4),null);var _ = cljs.core.nth.call(null,vec__17124,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,high,low,close], null)], null);
});
;})(infos,err,vec__17093,inst_17098,inst_17096,inst_17097,inst_17102,inst_17104,inst_17105,inst_17106,inst_17107,inst_17108,inst_17109,inst_17110,state_val_17122,c__6203__auto__))
})();var inst_17113 = cljs.core.map.call(null,inst_17112,inst_17098);var inst_17114 = ["candlestick",false,"kline",inst_17113];var inst_17115 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_17110,inst_17114);var inst_17116 = cljs.core.clj__GT_js.call(null,inst_17115);var inst_17117 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer",inst_17116);var state_17121__$1 = (function (){var statearr_17125 = state_17121;(statearr_17125[(10)] = inst_17109);
return statearr_17125;
})();var statearr_17126_17138 = state_17121__$1;(statearr_17126_17138[(2)] = inst_17117);
(statearr_17126_17138[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17122 === (3)))
{var inst_17097 = (state_17121[(9)]);var inst_17100 = alert(inst_17097);var state_17121__$1 = state_17121;var statearr_17127_17139 = state_17121__$1;(statearr_17127_17139[(2)] = inst_17100);
(statearr_17127_17139[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17122 === (2)))
{var inst_17096 = (state_17121[(8)]);var inst_17097 = (state_17121[(9)]);var inst_17096__$1 = (state_17121[(2)]);var inst_17097__$1 = cljs.core.nth.call(null,inst_17096__$1,(0),null);var inst_17098 = cljs.core.nth.call(null,inst_17096__$1,(1),null);var state_17121__$1 = (function (){var statearr_17128 = state_17121;(statearr_17128[(7)] = inst_17098);
(statearr_17128[(8)] = inst_17096__$1);
(statearr_17128[(9)] = inst_17097__$1);
return statearr_17128;
})();if(cljs.core.truth_(inst_17097__$1))
{var statearr_17129_17140 = state_17121__$1;(statearr_17129_17140[(1)] = (3));
} else
{var statearr_17130_17141 = state_17121__$1;(statearr_17130_17141[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17122 === (1)))
{var inst_17094 = test.stock5.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_17121__$1 = state_17121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17121__$1,(2),inst_17094);
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
var state_machine__6189__auto____0 = (function (){var statearr_17134 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17134[(0)] = state_machine__6189__auto__);
(statearr_17134[(1)] = (1));
return statearr_17134;
});
var state_machine__6189__auto____1 = (function (state_17121){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17121);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17135){if((e17135 instanceof Object))
{var ex__6192__auto__ = e17135;var statearr_17136_17142 = state_17121;(statearr_17136_17142[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17143 = state_17121;
state_17121 = G__17143;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17121){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17137 = f__6204__auto__.call(null);(statearr_17137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock5.test_draw.call(null);
