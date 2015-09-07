// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock5');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
test.stock5.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock5.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj16553 = {"url":"/proxy","dataType":"text","data":(function (){var obj16555 = {"url":url};return obj16555;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_16562){var state_val_16563 = (state_16562[(1)]);if((state_val_16563 === (2)))
{var inst_16559 = (state_16562[(2)]);var inst_16560 = cljs.core.async.close_BANG_.call(null,ret);var state_16562__$1 = (function (){var statearr_16564 = state_16562;(statearr_16564[(7)] = inst_16559);
return statearr_16564;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16562__$1,inst_16560);
} else
{if((state_val_16563 === (1)))
{var inst_16556 = [null,data];var inst_16557 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16556,null));var state_16562__$1 = state_16562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16562__$1,(2),ret,inst_16557);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16568 = [null,null,null,null,null,null,null,null];(statearr_16568[(0)] = state_machine__6189__auto__);
(statearr_16568[(1)] = (1));
return statearr_16568;
});
var state_machine__6189__auto____1 = (function (state_16562){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16562);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16569){if((e16569 instanceof Object))
{var ex__6192__auto__ = e16569;var statearr_16570_16588 = state_16562;(statearr_16570_16588[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16589 = state_16562;
state_16562 = G__16589;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16562){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_16571 = f__6204__auto__.call(null);(statearr_16571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_16578){var state_val_16579 = (state_16578[(1)]);if((state_val_16579 === (2)))
{var inst_16575 = (state_16578[(2)]);var inst_16576 = cljs.core.async.close_BANG_.call(null,ret);var state_16578__$1 = (function (){var statearr_16580 = state_16578;(statearr_16580[(7)] = inst_16575);
return statearr_16580;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16578__$1,inst_16576);
} else
{if((state_val_16579 === (1)))
{var inst_16572 = [err];var inst_16573 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16572,null));var state_16578__$1 = state_16578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16578__$1,(2),ret,inst_16573);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16584 = [null,null,null,null,null,null,null,null];(statearr_16584[(0)] = state_machine__6189__auto__);
(statearr_16584[(1)] = (1));
return statearr_16584;
});
var state_machine__6189__auto____1 = (function (state_16578){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16578);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16585){if((e16585 instanceof Object))
{var ex__6192__auto__ = e16585;var statearr_16586_16590 = state_16578;(statearr_16586_16590[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16578);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16591 = state_16578;
state_16578 = G__16591;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16578){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_16587 = f__6204__auto__.call(null);(statearr_16587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj16553;
})());
return ret;
});
test.stock5.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__16600(s__16601){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__16601__$1 = s__16601;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16601__$1);if(temp__4126__auto__)
{var s__16601__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16601__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16601__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16603 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16602 = (0);while(true){
if((i__16602 < size__4275__auto__))
{var vec__16606 = cljs.core._nth.call(null,c__4274__auto__,i__16602);var _ = cljs.core.nth.call(null,vec__16606,(0),null);var date = cljs.core.nth.call(null,vec__16606,(1),null);var open = cljs.core.nth.call(null,vec__16606,(2),null);var high = cljs.core.nth.call(null,vec__16606,(3),null);var low = cljs.core.nth.call(null,vec__16606,(4),null);var close = cljs.core.nth.call(null,vec__16606,(5),null);var volume = cljs.core.nth.call(null,vec__16606,(6),null);cljs.core.chunk_append.call(null,b__16603,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__16608 = (i__16602 + (1));
i__16602 = G__16608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16603),iter__16600.call(null,cljs.core.chunk_rest.call(null,s__16601__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16603),null);
}
} else
{var vec__16607 = cljs.core.first.call(null,s__16601__$2);var _ = cljs.core.nth.call(null,vec__16607,(0),null);var date = cljs.core.nth.call(null,vec__16607,(1),null);var open = cljs.core.nth.call(null,vec__16607,(2),null);var high = cljs.core.nth.call(null,vec__16607,(3),null);var low = cljs.core.nth.call(null,vec__16607,(4),null);var close = cljs.core.nth.call(null,vec__16607,(5),null);var volume = cljs.core.nth.call(null,vec__16607,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__16600.call(null,cljs.core.rest.call(null,s__16601__$2)));
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
return (function (state_16686){var state_val_16687 = (state_16686[(1)]);if((state_val_16687 === (9)))
{var inst_16676 = (state_16686[(2)]);var state_16686__$1 = state_16686;var statearr_16688_16705 = state_16686__$1;(statearr_16688_16705[(2)] = inst_16676);
(statearr_16688_16705[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16687 === (8)))
{var inst_16682 = (state_16686[(2)]);var state_16686__$1 = state_16686;var statearr_16689_16706 = state_16686__$1;(statearr_16689_16706[(2)] = inst_16682);
(statearr_16689_16706[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16687 === (7)))
{var inst_16668 = (state_16686[(7)]);var inst_16678 = cljs.core.concat.call(null,all,inst_16668);var inst_16679 = [null,inst_16678];var inst_16680 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16679,null));var state_16686__$1 = state_16686;var statearr_16690_16707 = state_16686__$1;(statearr_16690_16707[(2)] = inst_16680);
(statearr_16690_16707[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16687 === (6)))
{var inst_16668 = (state_16686[(7)]);var inst_16672 = cljs.core.concat.call(null,all,inst_16668);var inst_16673 = (start + num);var inst_16674 = stock_info.call(null,inst_16672,id,startdate,inst_16673,num);var state_16686__$1 = state_16686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16686__$1,(9),inst_16674);
} else
{if((state_val_16687 === (5)))
{var inst_16684 = (state_16686[(2)]);var state_16686__$1 = state_16686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16686__$1,inst_16684);
} else
{if((state_val_16687 === (4)))
{var inst_16668 = (state_16686[(7)]);var inst_16663 = (state_16686[(8)]);var inst_16668__$1 = test.stock5.parse_info.call(null,inst_16663);var inst_16669 = cljs.core.count.call(null,inst_16668__$1);var inst_16670 = cljs.core._EQ_.call(null,num,inst_16669);var state_16686__$1 = (function (){var statearr_16691 = state_16686;(statearr_16691[(7)] = inst_16668__$1);
return statearr_16691;
})();if(inst_16670)
{var statearr_16692_16708 = state_16686__$1;(statearr_16692_16708[(1)] = (6));
} else
{var statearr_16693_16709 = state_16686__$1;(statearr_16693_16709[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16687 === (3)))
{var inst_16662 = (state_16686[(9)]);var inst_16665 = [inst_16662];var inst_16666 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16665,null));var state_16686__$1 = state_16686;var statearr_16694_16710 = state_16686__$1;(statearr_16694_16710[(2)] = inst_16666);
(statearr_16694_16710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16687 === (2)))
{var inst_16662 = (state_16686[(9)]);var inst_16661 = (state_16686[(2)]);var inst_16662__$1 = cljs.core.nth.call(null,inst_16661,(0),null);var inst_16663 = cljs.core.nth.call(null,inst_16661,(1),null);var state_16686__$1 = (function (){var statearr_16695 = state_16686;(statearr_16695[(9)] = inst_16662__$1);
(statearr_16695[(8)] = inst_16663);
return statearr_16695;
})();if(cljs.core.truth_(inst_16662__$1))
{var statearr_16696_16711 = state_16686__$1;(statearr_16696_16711[(1)] = (3));
} else
{var statearr_16697_16712 = state_16686__$1;(statearr_16697_16712[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16687 === (1)))
{var inst_16658 = test.stock5.stock_url.call(null,id,startdate,start,num);var inst_16659 = test.stock5.content.call(null,inst_16658);var state_16686__$1 = state_16686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16686__$1,(2),inst_16659);
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
var state_machine__6189__auto____0 = (function (){var statearr_16701 = [null,null,null,null,null,null,null,null,null,null];(statearr_16701[(0)] = state_machine__6189__auto__);
(statearr_16701[(1)] = (1));
return statearr_16701;
});
var state_machine__6189__auto____1 = (function (state_16686){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16686);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16702){if((e16702 instanceof Object))
{var ex__6192__auto__ = e16702;var statearr_16703_16713 = state_16686;(statearr_16703_16713[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16714 = state_16686;
state_16686 = G__16714;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16686){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_16704 = f__6204__auto__.call(null);(statearr_16704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16704;
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
test.stock5.info__GT_data = (function info__GT_data(info){return google.visualization.arrayToDataTable(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p__16717){var vec__16718 = p__16717;var d = cljs.core.nth.call(null,vec__16718,(0),null);var o = cljs.core.nth.call(null,vec__16718,(1),null);var h = cljs.core.nth.call(null,vec__16718,(2),null);var l = cljs.core.nth.call(null,vec__16718,(3),null);var c = cljs.core.nth.call(null,vec__16718,(4),null);var _ = cljs.core.nth.call(null,vec__16718,(5),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,l,o,c,h], null);
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
draw_canvasjs_charts.cljs$lang$applyTo = (function (arglist__16719){
var elemId = cljs.core.first(arglist__16719);
var datas = cljs.core.rest(arglist__16719);
return draw_canvasjs_charts__delegate(elemId,datas);
});
draw_canvasjs_charts.cljs$core$IFn$_invoke$arity$variadic = draw_canvasjs_charts__delegate;
return draw_canvasjs_charts;
})()
;
test.stock5.test_draw = (function test_draw(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_16793){var state_val_16794 = (state_16793[(1)]);if((state_val_16794 === (5)))
{var inst_16791 = (state_16793[(2)]);var state_16793__$1 = state_16793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16793__$1,inst_16791);
} else
{if((state_val_16794 === (4)))
{var inst_16768 = (state_16793[(7)]);var inst_16770 = (state_16793[(8)]);var inst_16769 = (state_16793[(9)]);var inst_16774 = ["type","showInLegend","legendMarkerColor","legendText","dataPoints"];var inst_16776 = (function (){var infos = inst_16770;var err = inst_16769;var vec__16765 = inst_16768;return ((function (infos,err,vec__16765,inst_16768,inst_16770,inst_16769,inst_16774,state_val_16794,c__6203__auto__){
return (function (p__16775){var vec__16795 = p__16775;var date = cljs.core.nth.call(null,vec__16795,(0),null);var _ = cljs.core.nth.call(null,vec__16795,(1),null);var ___$1 = cljs.core.nth.call(null,vec__16795,(2),null);var ___$2 = cljs.core.nth.call(null,vec__16795,(3),null);var ___$3 = cljs.core.nth.call(null,vec__16795,(4),null);var volume = cljs.core.nth.call(null,vec__16795,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",volume], null);
});
;})(infos,err,vec__16765,inst_16768,inst_16770,inst_16769,inst_16774,state_val_16794,c__6203__auto__))
})();var inst_16777 = cljs.core.map.call(null,inst_16776,inst_16770);var inst_16778 = ["column",false,"grey","volume",inst_16777];var inst_16779 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16774,inst_16778);var inst_16780 = cljs.core.clj__GT_js.call(null,inst_16779);var inst_16781 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer2",inst_16780);var inst_16782 = ["type","showInLegend","name","dataPoints"];var inst_16784 = (function (){var infos = inst_16770;var err = inst_16769;var vec__16765 = inst_16768;return ((function (infos,err,vec__16765,inst_16768,inst_16770,inst_16769,inst_16774,inst_16776,inst_16777,inst_16778,inst_16779,inst_16780,inst_16781,inst_16782,state_val_16794,c__6203__auto__){
return (function (p__16783){var vec__16796 = p__16783;var date = cljs.core.nth.call(null,vec__16796,(0),null);var open = cljs.core.nth.call(null,vec__16796,(1),null);var high = cljs.core.nth.call(null,vec__16796,(2),null);var low = cljs.core.nth.call(null,vec__16796,(3),null);var close = cljs.core.nth.call(null,vec__16796,(4),null);var _ = cljs.core.nth.call(null,vec__16796,(5),null);return new cljs.core.PersistentArrayMap(null, 2, ["label",(new Date(date)),"y",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,high,low,close], null)], null);
});
;})(infos,err,vec__16765,inst_16768,inst_16770,inst_16769,inst_16774,inst_16776,inst_16777,inst_16778,inst_16779,inst_16780,inst_16781,inst_16782,state_val_16794,c__6203__auto__))
})();var inst_16785 = cljs.core.map.call(null,inst_16784,inst_16770);var inst_16786 = ["candlestick",false,"kline",inst_16785];var inst_16787 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16782,inst_16786);var inst_16788 = cljs.core.clj__GT_js.call(null,inst_16787);var inst_16789 = test.stock5.draw_canvasjs_charts.call(null,"chartContainer",inst_16788);var state_16793__$1 = (function (){var statearr_16797 = state_16793;(statearr_16797[(10)] = inst_16781);
return statearr_16797;
})();var statearr_16798_16810 = state_16793__$1;(statearr_16798_16810[(2)] = inst_16789);
(statearr_16798_16810[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16794 === (3)))
{var inst_16769 = (state_16793[(9)]);var inst_16772 = alert(inst_16769);var state_16793__$1 = state_16793;var statearr_16799_16811 = state_16793__$1;(statearr_16799_16811[(2)] = inst_16772);
(statearr_16799_16811[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16794 === (2)))
{var inst_16768 = (state_16793[(7)]);var inst_16769 = (state_16793[(9)]);var inst_16768__$1 = (state_16793[(2)]);var inst_16769__$1 = cljs.core.nth.call(null,inst_16768__$1,(0),null);var inst_16770 = cljs.core.nth.call(null,inst_16768__$1,(1),null);var state_16793__$1 = (function (){var statearr_16800 = state_16793;(statearr_16800[(7)] = inst_16768__$1);
(statearr_16800[(8)] = inst_16770);
(statearr_16800[(9)] = inst_16769__$1);
return statearr_16800;
})();if(cljs.core.truth_(inst_16769__$1))
{var statearr_16801_16812 = state_16793__$1;(statearr_16801_16812[(1)] = (3));
} else
{var statearr_16802_16813 = state_16793__$1;(statearr_16802_16813[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16794 === (1)))
{var inst_16766 = test.stock5.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_16793__$1 = state_16793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16793__$1,(2),inst_16766);
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
var state_machine__6189__auto____0 = (function (){var statearr_16806 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16806[(0)] = state_machine__6189__auto__);
(statearr_16806[(1)] = (1));
return statearr_16806;
});
var state_machine__6189__auto____1 = (function (state_16793){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16793);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16807){if((e16807 instanceof Object))
{var ex__6192__auto__ = e16807;var statearr_16808_16814 = state_16793;(statearr_16808_16814[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16815 = state_16793;
state_16793 = G__16815;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16793){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_16809 = f__6204__auto__.call(null);(statearr_16809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock5.test_draw.call(null);
