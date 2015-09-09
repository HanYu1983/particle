// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj51693 = {"url":"/proxy","dataType":"text","data":(function (){var obj51695 = {"url":url};return obj51695;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_51702){var state_val_51703 = (state_51702[(1)]);if((state_val_51703 === (2)))
{var inst_51699 = (state_51702[(2)]);var inst_51700 = cljs.core.async.close_BANG_.call(null,ret);var state_51702__$1 = (function (){var statearr_51704 = state_51702;(statearr_51704[(7)] = inst_51699);
return statearr_51704;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51702__$1,inst_51700);
} else
{if((state_val_51703 === (1)))
{var inst_51696 = [null,data];var inst_51697 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51696,null));var state_51702__$1 = state_51702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51702__$1,(2),ret,inst_51697);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51708 = [null,null,null,null,null,null,null,null];(statearr_51708[(0)] = state_machine__6188__auto__);
(statearr_51708[(1)] = (1));
return statearr_51708;
});
var state_machine__6188__auto____1 = (function (state_51702){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51709){if((e51709 instanceof Object))
{var ex__6191__auto__ = e51709;var statearr_51710_51728 = state_51702;(statearr_51710_51728[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51729 = state_51702;
state_51702 = G__51729;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51702){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_51711 = f__6203__auto__.call(null);(statearr_51711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_51718){var state_val_51719 = (state_51718[(1)]);if((state_val_51719 === (2)))
{var inst_51715 = (state_51718[(2)]);var inst_51716 = cljs.core.async.close_BANG_.call(null,ret);var state_51718__$1 = (function (){var statearr_51720 = state_51718;(statearr_51720[(7)] = inst_51715);
return statearr_51720;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51718__$1,inst_51716);
} else
{if((state_val_51719 === (1)))
{var inst_51712 = [err];var inst_51713 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51712,null));var state_51718__$1 = state_51718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51718__$1,(2),ret,inst_51713);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51724 = [null,null,null,null,null,null,null,null];(statearr_51724[(0)] = state_machine__6188__auto__);
(statearr_51724[(1)] = (1));
return statearr_51724;
});
var state_machine__6188__auto____1 = (function (state_51718){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51725){if((e51725 instanceof Object))
{var ex__6191__auto__ = e51725;var statearr_51726_51730 = state_51718;(statearr_51726_51730[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51731 = state_51718;
state_51718 = G__51731;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51718){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_51727 = f__6203__auto__.call(null);(statearr_51727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj51693;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = json.vo;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,(0)], null);
});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_51784){var state_val_51785 = (state_51784[(1)]);if((state_val_51785 === (5)))
{var inst_51782 = (state_51784[(2)]);var state_51784__$1 = state_51784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51784__$1,inst_51782);
} else
{if((state_val_51785 === (4)))
{var inst_51772 = (state_51784[(7)]);var inst_51778 = stock.tool.parse_info.call(null,inst_51772);var inst_51779 = [null,inst_51778];var inst_51780 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51779,null));var state_51784__$1 = state_51784;var statearr_51786_51798 = state_51784__$1;(statearr_51786_51798[(2)] = inst_51780);
(statearr_51786_51798[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51785 === (3)))
{var inst_51770 = (state_51784[(8)]);var inst_51775 = [inst_51770];var inst_51776 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51775,null));var state_51784__$1 = state_51784;var statearr_51787_51799 = state_51784__$1;(statearr_51787_51799[(2)] = inst_51776);
(statearr_51787_51799[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51785 === (2)))
{var inst_51770 = (state_51784[(8)]);var inst_51772 = (state_51784[(7)]);var inst_51769 = (state_51784[(2)]);var inst_51770__$1 = cljs.core.nth.call(null,inst_51769,(0),null);var inst_51771 = cljs.core.nth.call(null,inst_51769,(1),null);var inst_51772__$1 = clojure.string.replace.call(null,inst_51771,/\/\//,"");var inst_51773 = console.log(inst_51772__$1);var state_51784__$1 = (function (){var statearr_51788 = state_51784;(statearr_51788[(9)] = inst_51773);
(statearr_51788[(8)] = inst_51770__$1);
(statearr_51788[(7)] = inst_51772__$1);
return statearr_51788;
})();if(cljs.core.truth_(inst_51770__$1))
{var statearr_51789_51800 = state_51784__$1;(statearr_51789_51800[(1)] = (3));
} else
{var statearr_51790_51801 = state_51784__$1;(statearr_51790_51801[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51785 === (1)))
{var inst_51766 = stock.tool.goog_finance_info_url.call(null,id);var inst_51767 = stock.tool.content.call(null,inst_51766);var state_51784__$1 = state_51784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51784__$1,(2),inst_51767);
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
var state_machine__6188__auto____0 = (function (){var statearr_51794 = [null,null,null,null,null,null,null,null,null,null];(statearr_51794[(0)] = state_machine__6188__auto__);
(statearr_51794[(1)] = (1));
return statearr_51794;
});
var state_machine__6188__auto____1 = (function (state_51784){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51795){if((e51795 instanceof Object))
{var ex__6191__auto__ = e51795;var statearr_51796_51802 = state_51784;(statearr_51796_51802[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51803 = state_51784;
state_51784 = G__51803;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51784){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51797 = f__6203__auto__.call(null);(statearr_51797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__51812(s__51813){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__51813__$1 = s__51813;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51813__$1);if(temp__4126__auto__)
{var s__51813__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51813__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__51813__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__51815 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__51814 = (0);while(true){
if((i__51814 < size__4275__auto__))
{var vec__51818 = cljs.core._nth.call(null,c__4274__auto__,i__51814);var _ = cljs.core.nth.call(null,vec__51818,(0),null);var date = cljs.core.nth.call(null,vec__51818,(1),null);var close = cljs.core.nth.call(null,vec__51818,(2),null);var high = cljs.core.nth.call(null,vec__51818,(3),null);var low = cljs.core.nth.call(null,vec__51818,(4),null);var open = cljs.core.nth.call(null,vec__51818,(5),null);var volume = cljs.core.nth.call(null,vec__51818,(6),null);cljs.core.chunk_append.call(null,b__51815,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__51820 = (i__51814 + (1));
i__51814 = G__51820;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51815),iter__51812.call(null,cljs.core.chunk_rest.call(null,s__51813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51815),null);
}
} else
{var vec__51819 = cljs.core.first.call(null,s__51813__$2);var _ = cljs.core.nth.call(null,vec__51819,(0),null);var date = cljs.core.nth.call(null,vec__51819,(1),null);var close = cljs.core.nth.call(null,vec__51819,(2),null);var high = cljs.core.nth.call(null,vec__51819,(3),null);var low = cljs.core.nth.call(null,vec__51819,(4),null);var open = cljs.core.nth.call(null,vec__51819,(5),null);var volume = cljs.core.nth.call(null,vec__51819,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__51812.call(null,cljs.core.rest.call(null,s__51813__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__51835){var vec__51836 = p__51835;var d = cljs.core.nth.call(null,vec__51836,(0),null);var o = cljs.core.nth.call(null,vec__51836,(1),null);var h = cljs.core.nth.call(null,vec__51836,(2),null);var l = cljs.core.nth.call(null,vec__51836,(3),null);var c = cljs.core.nth.call(null,vec__51836,(4),null);var v = cljs.core.nth.call(null,vec__51836,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__51837,p__51838){var vec__51839 = p__51837;var d1 = cljs.core.nth.call(null,vec__51839,(0),null);var _ = cljs.core.nth.call(null,vec__51839,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51839,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51839,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51839,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51839,(5),null);var prev = vec__51839;var vec__51840 = p__51838;var d2 = cljs.core.nth.call(null,vec__51840,(0),null);var o = cljs.core.nth.call(null,vec__51840,(1),null);var h = cljs.core.nth.call(null,vec__51840,(2),null);var l = cljs.core.nth.call(null,vec__51840,(3),null);var c = cljs.core.nth.call(null,vec__51840,(4),null);var v = cljs.core.nth.call(null,vec__51840,(5),null);var curr = vec__51840;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__51841,p__51842){var vec__51843 = p__51841;var d1 = cljs.core.nth.call(null,vec__51843,(0),null);var _ = cljs.core.nth.call(null,vec__51843,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51843,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51843,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51843,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51843,(5),null);var prev = vec__51843;var vec__51844 = p__51842;var d2 = cljs.core.nth.call(null,vec__51844,(0),null);var o = cljs.core.nth.call(null,vec__51844,(1),null);var h = cljs.core.nth.call(null,vec__51844,(2),null);var l = cljs.core.nth.call(null,vec__51844,(3),null);var c = cljs.core.nth.call(null,vec__51844,(4),null);var v = cljs.core.nth.call(null,vec__51844,(5),null);var curr = vec__51844;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__51845){var vec__51846 = p__51845;var d = cljs.core.nth.call(null,vec__51846,(0),null);var o = cljs.core.nth.call(null,vec__51846,(1),null);var h = cljs.core.nth.call(null,vec__51846,(2),null);var l = cljs.core.nth.call(null,vec__51846,(3),null);var c = cljs.core.nth.call(null,vec__51846,(4),null);var v = cljs.core.nth.call(null,vec__51846,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__51847){var vec__51848 = p__51847;var d = cljs.core.nth.call(null,vec__51848,(0),null);var o = cljs.core.nth.call(null,vec__51848,(1),null);var h = cljs.core.nth.call(null,vec__51848,(2),null);var l = cljs.core.nth.call(null,vec__51848,(3),null);var c = cljs.core.nth.call(null,vec__51848,(4),null);var v = cljs.core.nth.call(null,vec__51848,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__51857(s__51858){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__51858__$1 = s__51858;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51858__$1);if(temp__4126__auto__)
{var s__51858__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51858__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__51858__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__51860 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__51859 = (0);while(true){
if((i__51859 < size__4275__auto__))
{var vec__51863 = cljs.core._nth.call(null,c__4274__auto__,i__51859);var _ = cljs.core.nth.call(null,vec__51863,(0),null);var date = cljs.core.nth.call(null,vec__51863,(1),null);var open = cljs.core.nth.call(null,vec__51863,(2),null);var high = cljs.core.nth.call(null,vec__51863,(3),null);var low = cljs.core.nth.call(null,vec__51863,(4),null);var close = cljs.core.nth.call(null,vec__51863,(5),null);var volume = cljs.core.nth.call(null,vec__51863,(6),null);cljs.core.chunk_append.call(null,b__51860,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__51865 = (i__51859 + (1));
i__51859 = G__51865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51860),iter__51857.call(null,cljs.core.chunk_rest.call(null,s__51858__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51860),null);
}
} else
{var vec__51864 = cljs.core.first.call(null,s__51858__$2);var _ = cljs.core.nth.call(null,vec__51864,(0),null);var date = cljs.core.nth.call(null,vec__51864,(1),null);var open = cljs.core.nth.call(null,vec__51864,(2),null);var high = cljs.core.nth.call(null,vec__51864,(3),null);var low = cljs.core.nth.call(null,vec__51864,(4),null);var close = cljs.core.nth.call(null,vec__51864,(5),null);var volume = cljs.core.nth.call(null,vec__51864,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__51857.call(null,cljs.core.rest.call(null,s__51858__$2)));
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
return (function (state_51943){var state_val_51944 = (state_51943[(1)]);if((state_val_51944 === (9)))
{var inst_51933 = (state_51943[(2)]);var state_51943__$1 = state_51943;var statearr_51945_51962 = state_51943__$1;(statearr_51945_51962[(2)] = inst_51933);
(statearr_51945_51962[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51944 === (8)))
{var inst_51939 = (state_51943[(2)]);var state_51943__$1 = state_51943;var statearr_51946_51963 = state_51943__$1;(statearr_51946_51963[(2)] = inst_51939);
(statearr_51946_51963[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51944 === (7)))
{var inst_51925 = (state_51943[(7)]);var inst_51935 = cljs.core.concat.call(null,all,inst_51925);var inst_51936 = [null,inst_51935];var inst_51937 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51936,null));var state_51943__$1 = state_51943;var statearr_51947_51964 = state_51943__$1;(statearr_51947_51964[(2)] = inst_51937);
(statearr_51947_51964[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51944 === (6)))
{var inst_51925 = (state_51943[(7)]);var inst_51929 = cljs.core.concat.call(null,all,inst_51925);var inst_51930 = (start + num);var inst_51931 = goog_historical_info.call(null,inst_51929,id,startdate,inst_51930,num);var state_51943__$1 = state_51943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51943__$1,(9),inst_51931);
} else
{if((state_val_51944 === (5)))
{var inst_51941 = (state_51943[(2)]);var state_51943__$1 = state_51943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51943__$1,inst_51941);
} else
{if((state_val_51944 === (4)))
{var inst_51925 = (state_51943[(7)]);var inst_51920 = (state_51943[(8)]);var inst_51925__$1 = stock.tool.parse_historical.call(null,inst_51920);var inst_51926 = cljs.core.count.call(null,inst_51925__$1);var inst_51927 = cljs.core._EQ_.call(null,num,inst_51926);var state_51943__$1 = (function (){var statearr_51948 = state_51943;(statearr_51948[(7)] = inst_51925__$1);
return statearr_51948;
})();if(inst_51927)
{var statearr_51949_51965 = state_51943__$1;(statearr_51949_51965[(1)] = (6));
} else
{var statearr_51950_51966 = state_51943__$1;(statearr_51950_51966[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51944 === (3)))
{var inst_51919 = (state_51943[(9)]);var inst_51922 = [inst_51919];var inst_51923 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51922,null));var state_51943__$1 = state_51943;var statearr_51951_51967 = state_51943__$1;(statearr_51951_51967[(2)] = inst_51923);
(statearr_51951_51967[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51944 === (2)))
{var inst_51919 = (state_51943[(9)]);var inst_51918 = (state_51943[(2)]);var inst_51919__$1 = cljs.core.nth.call(null,inst_51918,(0),null);var inst_51920 = cljs.core.nth.call(null,inst_51918,(1),null);var state_51943__$1 = (function (){var statearr_51952 = state_51943;(statearr_51952[(9)] = inst_51919__$1);
(statearr_51952[(8)] = inst_51920);
return statearr_51952;
})();if(cljs.core.truth_(inst_51919__$1))
{var statearr_51953_51968 = state_51943__$1;(statearr_51953_51968[(1)] = (3));
} else
{var statearr_51954_51969 = state_51943__$1;(statearr_51954_51969[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51944 === (1)))
{var inst_51915 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_51916 = stock.tool.content.call(null,inst_51915);var state_51943__$1 = state_51943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51943__$1,(2),inst_51916);
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
var state_machine__6188__auto____0 = (function (){var statearr_51958 = [null,null,null,null,null,null,null,null,null,null];(statearr_51958[(0)] = state_machine__6188__auto__);
(statearr_51958[(1)] = (1));
return statearr_51958;
});
var state_machine__6188__auto____1 = (function (state_51943){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51943);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51959){if((e51959 instanceof Object))
{var ex__6191__auto__ = e51959;var statearr_51960_51970 = state_51943;(statearr_51960_51970[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51971 = state_51943;
state_51943 = G__51971;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51943){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51961 = f__6203__auto__.call(null);(statearr_51961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__51973 = kline;var date__$1 = cljs.core.nth.call(null,vec__51973,(0),null);var _ = cljs.core.nth.call(null,vec__51973,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51973,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51973,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51973,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51973,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__51975 = kline;var _ = cljs.core.nth.call(null,vec__51975,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51975,(1),null);var high__$1 = cljs.core.nth.call(null,vec__51975,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51975,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51975,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51975,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__51977 = kline;var _ = cljs.core.nth.call(null,vec__51977,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51977,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51977,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51977,(3),null);var open__$1 = cljs.core.nth.call(null,vec__51977,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51977,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__51979 = kline;var _ = cljs.core.nth.call(null,vec__51979,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51979,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51979,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51979,(3),null);var close__$1 = cljs.core.nth.call(null,vec__51979,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51979,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__51981 = kline;var _ = cljs.core.nth.call(null,vec__51981,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51981,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51981,(2),null);var low__$1 = cljs.core.nth.call(null,vec__51981,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51981,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51981,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__51983 = kline;var _ = cljs.core.nth.call(null,vec__51983,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51983,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51983,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51983,(3),null);var ___$4 = cljs.core.nth.call(null,vec__51983,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__51983,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__51985 = kline;var _ = cljs.core.nth.call(null,vec__51985,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51985,(1),null);var high = cljs.core.nth.call(null,vec__51985,(2),null);var low = cljs.core.nth.call(null,vec__51985,(3),null);var ___$2 = cljs.core.nth.call(null,vec__51985,(4),null);var ___$3 = cljs.core.nth.call(null,vec__51985,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__51987 = kline;var _ = cljs.core.nth.call(null,vec__51987,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51987,(1),null);var high = cljs.core.nth.call(null,vec__51987,(2),null);var low = cljs.core.nth.call(null,vec__51987,(3),null);var close = cljs.core.nth.call(null,vec__51987,(4),null);var ___$2 = cljs.core.nth.call(null,vec__51987,(5),null);return (((high + low) + close) / (3));
}
});
