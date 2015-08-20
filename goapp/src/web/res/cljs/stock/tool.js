// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj28782 = {"url":"/proxy","dataType":"text","data":(function (){var obj28784 = {"url":url};return obj28784;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_28791){var state_val_28792 = (state_28791[(1)]);if((state_val_28792 === (2)))
{var inst_28788 = (state_28791[(2)]);var inst_28789 = cljs.core.async.close_BANG_.call(null,ret);var state_28791__$1 = (function (){var statearr_28793 = state_28791;(statearr_28793[(7)] = inst_28788);
return statearr_28793;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else
{if((state_val_28792 === (1)))
{var inst_28785 = [null,data];var inst_28786 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28785,null));var state_28791__$1 = state_28791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28791__$1,(2),ret,inst_28786);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28797 = [null,null,null,null,null,null,null,null];(statearr_28797[(0)] = state_machine__6188__auto__);
(statearr_28797[(1)] = (1));
return statearr_28797;
});
var state_machine__6188__auto____1 = (function (state_28791){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28791);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28798){if((e28798 instanceof Object))
{var ex__6191__auto__ = e28798;var statearr_28799_28817 = state_28791;(statearr_28799_28817[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28818 = state_28791;
state_28791 = G__28818;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_28800 = f__6203__auto__.call(null);(statearr_28800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_28807){var state_val_28808 = (state_28807[(1)]);if((state_val_28808 === (2)))
{var inst_28804 = (state_28807[(2)]);var inst_28805 = cljs.core.async.close_BANG_.call(null,ret);var state_28807__$1 = (function (){var statearr_28809 = state_28807;(statearr_28809[(7)] = inst_28804);
return statearr_28809;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28807__$1,inst_28805);
} else
{if((state_val_28808 === (1)))
{var inst_28801 = [err];var inst_28802 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28801,null));var state_28807__$1 = state_28807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28807__$1,(2),ret,inst_28802);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28813 = [null,null,null,null,null,null,null,null];(statearr_28813[(0)] = state_machine__6188__auto__);
(statearr_28813[(1)] = (1));
return statearr_28813;
});
var state_machine__6188__auto____1 = (function (state_28807){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28807);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28814){if((e28814 instanceof Object))
{var ex__6191__auto__ = e28814;var statearr_28815_28819 = state_28807;(statearr_28815_28819[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28820 = state_28807;
state_28807 = G__28820;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28807){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_28816 = f__6203__auto__.call(null);(statearr_28816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj28782;
})());
return ret;
});
stock.tool.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__28829(s__28830){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__28830__$1 = s__28830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28830__$1);if(temp__4126__auto__)
{var s__28830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28830__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__28830__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__28832 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__28831 = (0);while(true){
if((i__28831 < size__4275__auto__))
{var vec__28835 = cljs.core._nth.call(null,c__4274__auto__,i__28831);var _ = cljs.core.nth.call(null,vec__28835,(0),null);var date = cljs.core.nth.call(null,vec__28835,(1),null);var open = cljs.core.nth.call(null,vec__28835,(2),null);var high = cljs.core.nth.call(null,vec__28835,(3),null);var low = cljs.core.nth.call(null,vec__28835,(4),null);var close = cljs.core.nth.call(null,vec__28835,(5),null);var volume = cljs.core.nth.call(null,vec__28835,(6),null);cljs.core.chunk_append.call(null,b__28832,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__28837 = (i__28831 + (1));
i__28831 = G__28837;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28832),iter__28829.call(null,cljs.core.chunk_rest.call(null,s__28830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28832),null);
}
} else
{var vec__28836 = cljs.core.first.call(null,s__28830__$2);var _ = cljs.core.nth.call(null,vec__28836,(0),null);var date = cljs.core.nth.call(null,vec__28836,(1),null);var open = cljs.core.nth.call(null,vec__28836,(2),null);var high = cljs.core.nth.call(null,vec__28836,(3),null);var low = cljs.core.nth.call(null,vec__28836,(4),null);var close = cljs.core.nth.call(null,vec__28836,(5),null);var volume = cljs.core.nth.call(null,vec__28836,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__28829.call(null,cljs.core.rest.call(null,s__28830__$2)));
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
return (function (state_28915){var state_val_28916 = (state_28915[(1)]);if((state_val_28916 === (9)))
{var inst_28905 = (state_28915[(2)]);var state_28915__$1 = state_28915;var statearr_28917_28934 = state_28915__$1;(statearr_28917_28934[(2)] = inst_28905);
(statearr_28917_28934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28916 === (8)))
{var inst_28911 = (state_28915[(2)]);var state_28915__$1 = state_28915;var statearr_28918_28935 = state_28915__$1;(statearr_28918_28935[(2)] = inst_28911);
(statearr_28918_28935[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28916 === (7)))
{var inst_28897 = (state_28915[(7)]);var inst_28907 = cljs.core.concat.call(null,all,inst_28897);var inst_28908 = [null,inst_28907];var inst_28909 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28908,null));var state_28915__$1 = state_28915;var statearr_28919_28936 = state_28915__$1;(statearr_28919_28936[(2)] = inst_28909);
(statearr_28919_28936[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28916 === (6)))
{var inst_28897 = (state_28915[(7)]);var inst_28901 = cljs.core.concat.call(null,all,inst_28897);var inst_28902 = (start + num);var inst_28903 = stock_info.call(null,inst_28901,id,startdate,inst_28902,num);var state_28915__$1 = state_28915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28915__$1,(9),inst_28903);
} else
{if((state_val_28916 === (5)))
{var inst_28913 = (state_28915[(2)]);var state_28915__$1 = state_28915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28915__$1,inst_28913);
} else
{if((state_val_28916 === (4)))
{var inst_28897 = (state_28915[(7)]);var inst_28892 = (state_28915[(8)]);var inst_28897__$1 = stock.tool.parse_info.call(null,inst_28892);var inst_28898 = cljs.core.count.call(null,inst_28897__$1);var inst_28899 = cljs.core._EQ_.call(null,num,inst_28898);var state_28915__$1 = (function (){var statearr_28920 = state_28915;(statearr_28920[(7)] = inst_28897__$1);
return statearr_28920;
})();if(inst_28899)
{var statearr_28921_28937 = state_28915__$1;(statearr_28921_28937[(1)] = (6));
} else
{var statearr_28922_28938 = state_28915__$1;(statearr_28922_28938[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28916 === (3)))
{var inst_28891 = (state_28915[(9)]);var inst_28894 = [inst_28891];var inst_28895 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28894,null));var state_28915__$1 = state_28915;var statearr_28923_28939 = state_28915__$1;(statearr_28923_28939[(2)] = inst_28895);
(statearr_28923_28939[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28916 === (2)))
{var inst_28891 = (state_28915[(9)]);var inst_28890 = (state_28915[(2)]);var inst_28891__$1 = cljs.core.nth.call(null,inst_28890,(0),null);var inst_28892 = cljs.core.nth.call(null,inst_28890,(1),null);var state_28915__$1 = (function (){var statearr_28924 = state_28915;(statearr_28924[(9)] = inst_28891__$1);
(statearr_28924[(8)] = inst_28892);
return statearr_28924;
})();if(cljs.core.truth_(inst_28891__$1))
{var statearr_28925_28940 = state_28915__$1;(statearr_28925_28940[(1)] = (3));
} else
{var statearr_28926_28941 = state_28915__$1;(statearr_28926_28941[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28916 === (1)))
{var inst_28887 = stock.tool.stock_url.call(null,id,startdate,start,num);var inst_28888 = stock.tool.content.call(null,inst_28887);var state_28915__$1 = state_28915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28915__$1,(2),inst_28888);
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
var state_machine__6188__auto____0 = (function (){var statearr_28930 = [null,null,null,null,null,null,null,null,null,null];(statearr_28930[(0)] = state_machine__6188__auto__);
(statearr_28930[(1)] = (1));
return statearr_28930;
});
var state_machine__6188__auto____1 = (function (state_28915){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28915);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28931){if((e28931 instanceof Object))
{var ex__6191__auto__ = e28931;var statearr_28932_28942 = state_28915;(statearr_28932_28942[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28943 = state_28915;
state_28915 = G__28943;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28915){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_28933 = f__6203__auto__.call(null);(statearr_28933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__28945 = kline;var date__$1 = cljs.core.nth.call(null,vec__28945,(0),null);var _ = cljs.core.nth.call(null,vec__28945,(1),null);var ___$1 = cljs.core.nth.call(null,vec__28945,(2),null);var ___$2 = cljs.core.nth.call(null,vec__28945,(3),null);var ___$3 = cljs.core.nth.call(null,vec__28945,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28945,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__28947 = kline;var _ = cljs.core.nth.call(null,vec__28947,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28947,(1),null);var high__$1 = cljs.core.nth.call(null,vec__28947,(2),null);var ___$2 = cljs.core.nth.call(null,vec__28947,(3),null);var ___$3 = cljs.core.nth.call(null,vec__28947,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28947,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__28949 = kline;var _ = cljs.core.nth.call(null,vec__28949,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28949,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28949,(2),null);var ___$3 = cljs.core.nth.call(null,vec__28949,(3),null);var open__$1 = cljs.core.nth.call(null,vec__28949,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28949,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__28951 = kline;var _ = cljs.core.nth.call(null,vec__28951,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28951,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28951,(2),null);var ___$3 = cljs.core.nth.call(null,vec__28951,(3),null);var close__$1 = cljs.core.nth.call(null,vec__28951,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28951,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__28953 = kline;var _ = cljs.core.nth.call(null,vec__28953,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28953,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28953,(2),null);var low__$1 = cljs.core.nth.call(null,vec__28953,(3),null);var ___$3 = cljs.core.nth.call(null,vec__28953,(4),null);var ___$4 = cljs.core.nth.call(null,vec__28953,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__28955 = kline;var _ = cljs.core.nth.call(null,vec__28955,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28955,(1),null);var ___$2 = cljs.core.nth.call(null,vec__28955,(2),null);var ___$3 = cljs.core.nth.call(null,vec__28955,(3),null);var ___$4 = cljs.core.nth.call(null,vec__28955,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__28955,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__28957 = kline;var _ = cljs.core.nth.call(null,vec__28957,(0),null);var ___$1 = cljs.core.nth.call(null,vec__28957,(1),null);var high = cljs.core.nth.call(null,vec__28957,(2),null);var low = cljs.core.nth.call(null,vec__28957,(3),null);var close = cljs.core.nth.call(null,vec__28957,(4),null);var ___$2 = cljs.core.nth.call(null,vec__28957,(5),null);return (((high + low) + close) / (3));
}
});
