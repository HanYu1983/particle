// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj28569 = {"url":"/proxy","dataType":"text","data":(function (){var obj28571 = {"url":url};return obj28571;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_28578){var state_val_28579 = (state_28578[(1)]);if((state_val_28579 === (2)))
{var inst_28575 = (state_28578[(2)]);var inst_28576 = cljs.core.async.close_BANG_.call(null,ret);var state_28578__$1 = (function (){var statearr_28580 = state_28578;(statearr_28580[(7)] = inst_28575);
return statearr_28580;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28578__$1,inst_28576);
} else
{if((state_val_28579 === (1)))
{var inst_28572 = [null,data];var inst_28573 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28572,null));var state_28578__$1 = state_28578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28578__$1,(2),ret,inst_28573);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28584 = [null,null,null,null,null,null,null,null];(statearr_28584[(0)] = state_machine__6188__auto__);
(statearr_28584[(1)] = (1));
return statearr_28584;
});
var state_machine__6188__auto____1 = (function (state_28578){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28578);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28585){if((e28585 instanceof Object))
{var ex__6191__auto__ = e28585;var statearr_28586_28604 = state_28578;(statearr_28586_28604[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28578);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28605 = state_28578;
state_28578 = G__28605;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28578){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_28587 = f__6203__auto__.call(null);(statearr_28587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_28594){var state_val_28595 = (state_28594[(1)]);if((state_val_28595 === (2)))
{var inst_28591 = (state_28594[(2)]);var inst_28592 = cljs.core.async.close_BANG_.call(null,ret);var state_28594__$1 = (function (){var statearr_28596 = state_28594;(statearr_28596[(7)] = inst_28591);
return statearr_28596;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28594__$1,inst_28592);
} else
{if((state_val_28595 === (1)))
{var inst_28588 = [err];var inst_28589 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28588,null));var state_28594__$1 = state_28594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28594__$1,(2),ret,inst_28589);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28600 = [null,null,null,null,null,null,null,null];(statearr_28600[(0)] = state_machine__6188__auto__);
(statearr_28600[(1)] = (1));
return statearr_28600;
});
var state_machine__6188__auto____1 = (function (state_28594){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28594);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28601){if((e28601 instanceof Object))
{var ex__6191__auto__ = e28601;var statearr_28602_28606 = state_28594;(statearr_28602_28606[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28607 = state_28594;
state_28594 = G__28607;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28594){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_28603 = f__6203__auto__.call(null);(statearr_28603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj28569;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__28616(s__28617){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__28617__$1 = s__28617;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28617__$1);if(temp__4126__auto__)
{var s__28617__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28617__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__28617__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__28619 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__28618 = (0);while(true){
if((i__28618 < size__4275__auto__))
{var vec__28622 = cljs.core._nth.call(null,c__4274__auto__,i__28618);var _ = cljs.core.nth.call(null,vec__28622,(0),null);var date = cljs.core.nth.call(null,vec__28622,(1),null);var open = cljs.core.nth.call(null,vec__28622,(2),null);var high = cljs.core.nth.call(null,vec__28622,(3),null);var low = cljs.core.nth.call(null,vec__28622,(4),null);var close = cljs.core.nth.call(null,vec__28622,(5),null);var volume = cljs.core.nth.call(null,vec__28622,(6),null);cljs.core.chunk_append.call(null,b__28619,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__28624 = (i__28618 + (1));
i__28618 = G__28624;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28619),iter__28616.call(null,cljs.core.chunk_rest.call(null,s__28617__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28619),null);
}
} else
{var vec__28623 = cljs.core.first.call(null,s__28617__$2);var _ = cljs.core.nth.call(null,vec__28623,(0),null);var date = cljs.core.nth.call(null,vec__28623,(1),null);var open = cljs.core.nth.call(null,vec__28623,(2),null);var high = cljs.core.nth.call(null,vec__28623,(3),null);var low = cljs.core.nth.call(null,vec__28623,(4),null);var close = cljs.core.nth.call(null,vec__28623,(5),null);var volume = cljs.core.nth.call(null,vec__28623,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__28616.call(null,cljs.core.rest.call(null,s__28617__$2)));
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
return (function (state_28702){var state_val_28703 = (state_28702[(1)]);if((state_val_28703 === (9)))
{var inst_28692 = (state_28702[(2)]);var state_28702__$1 = state_28702;var statearr_28704_28721 = state_28702__$1;(statearr_28704_28721[(2)] = inst_28692);
(statearr_28704_28721[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28703 === (8)))
{var inst_28698 = (state_28702[(2)]);var state_28702__$1 = state_28702;var statearr_28705_28722 = state_28702__$1;(statearr_28705_28722[(2)] = inst_28698);
(statearr_28705_28722[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28703 === (7)))
{var inst_28684 = (state_28702[(7)]);var inst_28694 = cljs.core.concat.call(null,all,inst_28684);var inst_28695 = [null,inst_28694];var inst_28696 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28695,null));var state_28702__$1 = state_28702;var statearr_28706_28723 = state_28702__$1;(statearr_28706_28723[(2)] = inst_28696);
(statearr_28706_28723[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28703 === (6)))
{var inst_28684 = (state_28702[(7)]);var inst_28688 = cljs.core.concat.call(null,all,inst_28684);var inst_28689 = (start + num);var inst_28690 = stock_info.call(null,inst_28688,id,startdate,inst_28689,num);var state_28702__$1 = state_28702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28702__$1,(9),inst_28690);
} else
{if((state_val_28703 === (5)))
{var inst_28700 = (state_28702[(2)]);var state_28702__$1 = state_28702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28702__$1,inst_28700);
} else
{if((state_val_28703 === (4)))
{var inst_28679 = (state_28702[(8)]);var inst_28684 = (state_28702[(7)]);var inst_28684__$1 = stock.tool.parse_info.call(null,inst_28679);var inst_28685 = cljs.core.count.call(null,inst_28684__$1);var inst_28686 = cljs.core._EQ_.call(null,num,inst_28685);var state_28702__$1 = (function (){var statearr_28707 = state_28702;(statearr_28707[(7)] = inst_28684__$1);
return statearr_28707;
})();if(inst_28686)
{var statearr_28708_28724 = state_28702__$1;(statearr_28708_28724[(1)] = (6));
} else
{var statearr_28709_28725 = state_28702__$1;(statearr_28709_28725[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28703 === (3)))
{var inst_28678 = (state_28702[(9)]);var inst_28681 = [inst_28678];var inst_28682 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28681,null));var state_28702__$1 = state_28702;var statearr_28710_28726 = state_28702__$1;(statearr_28710_28726[(2)] = inst_28682);
(statearr_28710_28726[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28703 === (2)))
{var inst_28678 = (state_28702[(9)]);var inst_28677 = (state_28702[(2)]);var inst_28678__$1 = cljs.core.nth.call(null,inst_28677,(0),null);var inst_28679 = cljs.core.nth.call(null,inst_28677,(1),null);var state_28702__$1 = (function (){var statearr_28711 = state_28702;(statearr_28711[(8)] = inst_28679);
(statearr_28711[(9)] = inst_28678__$1);
return statearr_28711;
})();if(cljs.core.truth_(inst_28678__$1))
{var statearr_28712_28727 = state_28702__$1;(statearr_28712_28727[(1)] = (3));
} else
{var statearr_28713_28728 = state_28702__$1;(statearr_28713_28728[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28703 === (1)))
{var inst_28674 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_28675 = stock.tool.content.call(null,inst_28674);var state_28702__$1 = state_28702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28702__$1,(2),inst_28675);
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
var state_machine__6188__auto____0 = (function (){var statearr_28717 = [null,null,null,null,null,null,null,null,null,null];(statearr_28717[(0)] = state_machine__6188__auto__);
(statearr_28717[(1)] = (1));
return statearr_28717;
});
var state_machine__6188__auto____1 = (function (state_28702){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28718){if((e28718 instanceof Object))
{var ex__6191__auto__ = e28718;var statearr_28719_28729 = state_28702;(statearr_28719_28729[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28730 = state_28702;
state_28702 = G__28730;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28702){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_28720 = f__6203__auto__.call(null);(statearr_28720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__28732 = kline;var date__$1 = cljs.core.nth.call(null,vec__28732,(0),null);var _ = cljs.core.nth.call(null,vec__28732,(1),null);var ___$1 = cljs.core.nth.call(null,vec__28732,(2),null);var ___$2 = cljs.core.nth.call(null,vec__28732,(3),null);var ___$3 = cljs.core.nth.call(null,vec__28732,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28732,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__28734 = kline;var _ = cljs.core.nth.call(null,vec__28734,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28734,(1),null);var high__$1 = cljs.core.nth.call(null,vec__28734,(2),null);var ___$2 = cljs.core.nth.call(null,vec__28734,(3),null);var ___$3 = cljs.core.nth.call(null,vec__28734,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28734,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__28736 = kline;var _ = cljs.core.nth.call(null,vec__28736,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28736,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28736,(2),null);var ___$3 = cljs.core.nth.call(null,vec__28736,(3),null);var open__$1 = cljs.core.nth.call(null,vec__28736,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28736,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__28738 = kline;var _ = cljs.core.nth.call(null,vec__28738,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28738,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28738,(2),null);var ___$3 = cljs.core.nth.call(null,vec__28738,(3),null);var close__$1 = cljs.core.nth.call(null,vec__28738,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28738,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__28740 = kline;var _ = cljs.core.nth.call(null,vec__28740,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28740,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28740,(2),null);var low__$1 = cljs.core.nth.call(null,vec__28740,(3),null);var ___$3 = cljs.core.nth.call(null,vec__28740,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28740,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__28742 = kline;var _ = cljs.core.nth.call(null,vec__28742,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28742,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28742,(2),null);var ___$3 = cljs.core.nth.call(null,vec__28742,(3),null);var ___$4 = cljs.core.nth.call(null,vec__28742,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__28742,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__28744 = kline;var _ = cljs.core.nth.call(null,vec__28744,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28744,(1),null);var high = cljs.core.nth.call(null,vec__28744,(2),null);var low = cljs.core.nth.call(null,vec__28744,(3),null);var close = cljs.core.nth.call(null,vec__28744,(4),null);var ___$2 = cljs.core.nth.call(null,vec__28744,(5),null);return (((high + low) + close) / (3));
}
});
