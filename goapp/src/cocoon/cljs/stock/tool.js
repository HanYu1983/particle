// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = json.vo;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,(0)], null);
});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_47779){var state_val_47780 = (state_47779[(1)]);if((state_val_47780 === (5)))
{var inst_47777 = (state_47779[(2)]);var state_47779__$1 = state_47779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47779__$1,inst_47777);
} else
{if((state_val_47780 === (4)))
{var inst_47767 = (state_47779[(7)]);var inst_47773 = stock.tool.parse_info.call(null,inst_47767);var inst_47774 = [null,inst_47773];var inst_47775 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47774,null));var state_47779__$1 = state_47779;var statearr_47781_47793 = state_47779__$1;(statearr_47781_47793[(2)] = inst_47775);
(statearr_47781_47793[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47780 === (3)))
{var inst_47765 = (state_47779[(8)]);var inst_47770 = [inst_47765];var inst_47771 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47770,null));var state_47779__$1 = state_47779;var statearr_47782_47794 = state_47779__$1;(statearr_47782_47794[(2)] = inst_47771);
(statearr_47782_47794[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47780 === (2)))
{var inst_47765 = (state_47779[(8)]);var inst_47767 = (state_47779[(7)]);var inst_47764 = (state_47779[(2)]);var inst_47765__$1 = cljs.core.nth.call(null,inst_47764,(0),null);var inst_47766 = cljs.core.nth.call(null,inst_47764,(1),null);var inst_47767__$1 = clojure.string.replace.call(null,inst_47766,/\/\//,"");var inst_47768 = console.log(inst_47767__$1);var state_47779__$1 = (function (){var statearr_47783 = state_47779;(statearr_47783[(8)] = inst_47765__$1);
(statearr_47783[(7)] = inst_47767__$1);
(statearr_47783[(9)] = inst_47768);
return statearr_47783;
})();if(cljs.core.truth_(inst_47765__$1))
{var statearr_47784_47795 = state_47779__$1;(statearr_47784_47795[(1)] = (3));
} else
{var statearr_47785_47796 = state_47779__$1;(statearr_47785_47796[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47780 === (1)))
{var inst_47761 = stock.tool.goog_finance_info_url.call(null,id);var inst_47762 = stock.tool.content.call(null,inst_47761);var state_47779__$1 = state_47779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47779__$1,(2),inst_47762);
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
var state_machine__6188__auto____0 = (function (){var statearr_47789 = [null,null,null,null,null,null,null,null,null,null];(statearr_47789[(0)] = state_machine__6188__auto__);
(statearr_47789[(1)] = (1));
return statearr_47789;
});
var state_machine__6188__auto____1 = (function (state_47779){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47779);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47790){if((e47790 instanceof Object))
{var ex__6191__auto__ = e47790;var statearr_47791_47797 = state_47779;(statearr_47791_47797[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47779);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47798 = state_47779;
state_47779 = G__47798;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47779){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_47792 = f__6203__auto__.call(null);(statearr_47792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__47807(s__47808){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__47808__$1 = s__47808;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47808__$1);if(temp__4126__auto__)
{var s__47808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47808__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__47808__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__47810 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__47809 = (0);while(true){
if((i__47809 < size__4275__auto__))
{var vec__47813 = cljs.core._nth.call(null,c__4274__auto__,i__47809);var _ = cljs.core.nth.call(null,vec__47813,(0),null);var date = cljs.core.nth.call(null,vec__47813,(1),null);var close = cljs.core.nth.call(null,vec__47813,(2),null);var high = cljs.core.nth.call(null,vec__47813,(3),null);var low = cljs.core.nth.call(null,vec__47813,(4),null);var open = cljs.core.nth.call(null,vec__47813,(5),null);var volume = cljs.core.nth.call(null,vec__47813,(6),null);cljs.core.chunk_append.call(null,b__47810,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__47815 = (i__47809 + (1));
i__47809 = G__47815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47810),iter__47807.call(null,cljs.core.chunk_rest.call(null,s__47808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47810),null);
}
} else
{var vec__47814 = cljs.core.first.call(null,s__47808__$2);var _ = cljs.core.nth.call(null,vec__47814,(0),null);var date = cljs.core.nth.call(null,vec__47814,(1),null);var close = cljs.core.nth.call(null,vec__47814,(2),null);var high = cljs.core.nth.call(null,vec__47814,(3),null);var low = cljs.core.nth.call(null,vec__47814,(4),null);var open = cljs.core.nth.call(null,vec__47814,(5),null);var volume = cljs.core.nth.call(null,vec__47814,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__47807.call(null,cljs.core.rest.call(null,s__47808__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__47830){var vec__47831 = p__47830;var d = cljs.core.nth.call(null,vec__47831,(0),null);var o = cljs.core.nth.call(null,vec__47831,(1),null);var h = cljs.core.nth.call(null,vec__47831,(2),null);var l = cljs.core.nth.call(null,vec__47831,(3),null);var c = cljs.core.nth.call(null,vec__47831,(4),null);var v = cljs.core.nth.call(null,vec__47831,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__47832,p__47833){var vec__47834 = p__47832;var d1 = cljs.core.nth.call(null,vec__47834,(0),null);var _ = cljs.core.nth.call(null,vec__47834,(1),null);var ___$1 = cljs.core.nth.call(null,vec__47834,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47834,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47834,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47834,(5),null);var prev = vec__47834;var vec__47835 = p__47833;var d2 = cljs.core.nth.call(null,vec__47835,(0),null);var o = cljs.core.nth.call(null,vec__47835,(1),null);var h = cljs.core.nth.call(null,vec__47835,(2),null);var l = cljs.core.nth.call(null,vec__47835,(3),null);var c = cljs.core.nth.call(null,vec__47835,(4),null);var v = cljs.core.nth.call(null,vec__47835,(5),null);var curr = vec__47835;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__47836,p__47837){var vec__47838 = p__47836;var d1 = cljs.core.nth.call(null,vec__47838,(0),null);var _ = cljs.core.nth.call(null,vec__47838,(1),null);var ___$1 = cljs.core.nth.call(null,vec__47838,(2),null);var ___$2 = cljs.core.nth.call(null,vec__47838,(3),null);var ___$3 = cljs.core.nth.call(null,vec__47838,(4),null);var ___$4 = cljs.core.nth.call(null,vec__47838,(5),null);var prev = vec__47838;var vec__47839 = p__47837;var d2 = cljs.core.nth.call(null,vec__47839,(0),null);var o = cljs.core.nth.call(null,vec__47839,(1),null);var h = cljs.core.nth.call(null,vec__47839,(2),null);var l = cljs.core.nth.call(null,vec__47839,(3),null);var c = cljs.core.nth.call(null,vec__47839,(4),null);var v = cljs.core.nth.call(null,vec__47839,(5),null);var curr = vec__47839;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__47840){var vec__47841 = p__47840;var d = cljs.core.nth.call(null,vec__47841,(0),null);var o = cljs.core.nth.call(null,vec__47841,(1),null);var h = cljs.core.nth.call(null,vec__47841,(2),null);var l = cljs.core.nth.call(null,vec__47841,(3),null);var c = cljs.core.nth.call(null,vec__47841,(4),null);var v = cljs.core.nth.call(null,vec__47841,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__47842){var vec__47843 = p__47842;var d = cljs.core.nth.call(null,vec__47843,(0),null);var o = cljs.core.nth.call(null,vec__47843,(1),null);var h = cljs.core.nth.call(null,vec__47843,(2),null);var l = cljs.core.nth.call(null,vec__47843,(3),null);var c = cljs.core.nth.call(null,vec__47843,(4),null);var v = cljs.core.nth.call(null,vec__47843,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj47881 = {"url":"/proxy","dataType":"text","data":(function (){var obj47883 = {"url":url};return obj47883;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_47890){var state_val_47891 = (state_47890[(1)]);if((state_val_47891 === (2)))
{var inst_47887 = (state_47890[(2)]);var inst_47888 = cljs.core.async.close_BANG_.call(null,ret);var state_47890__$1 = (function (){var statearr_47892 = state_47890;(statearr_47892[(7)] = inst_47887);
return statearr_47892;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47890__$1,inst_47888);
} else
{if((state_val_47891 === (1)))
{var inst_47884 = [null,data];var inst_47885 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47884,null));var state_47890__$1 = state_47890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47890__$1,(2),ret,inst_47885);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47896 = [null,null,null,null,null,null,null,null];(statearr_47896[(0)] = state_machine__6188__auto__);
(statearr_47896[(1)] = (1));
return statearr_47896;
});
var state_machine__6188__auto____1 = (function (state_47890){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47897){if((e47897 instanceof Object))
{var ex__6191__auto__ = e47897;var statearr_47898_47916 = state_47890;(statearr_47898_47916[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47917 = state_47890;
state_47890 = G__47917;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47890){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_47899 = f__6203__auto__.call(null);(statearr_47899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_47906){var state_val_47907 = (state_47906[(1)]);if((state_val_47907 === (2)))
{var inst_47903 = (state_47906[(2)]);var inst_47904 = cljs.core.async.close_BANG_.call(null,ret);var state_47906__$1 = (function (){var statearr_47908 = state_47906;(statearr_47908[(7)] = inst_47903);
return statearr_47908;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47906__$1,inst_47904);
} else
{if((state_val_47907 === (1)))
{var inst_47900 = [err];var inst_47901 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47900,null));var state_47906__$1 = state_47906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47906__$1,(2),ret,inst_47901);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47912 = [null,null,null,null,null,null,null,null];(statearr_47912[(0)] = state_machine__6188__auto__);
(statearr_47912[(1)] = (1));
return statearr_47912;
});
var state_machine__6188__auto____1 = (function (state_47906){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47906);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47913){if((e47913 instanceof Object))
{var ex__6191__auto__ = e47913;var statearr_47914_47918 = state_47906;(statearr_47914_47918[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47919 = state_47906;
state_47906 = G__47919;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47906){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_47915 = f__6203__auto__.call(null);(statearr_47915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj47881;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__47928(s__47929){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__47929__$1 = s__47929;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47929__$1);if(temp__4126__auto__)
{var s__47929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47929__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__47929__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__47931 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__47930 = (0);while(true){
if((i__47930 < size__4275__auto__))
{var vec__47934 = cljs.core._nth.call(null,c__4274__auto__,i__47930);var _ = cljs.core.nth.call(null,vec__47934,(0),null);var date = cljs.core.nth.call(null,vec__47934,(1),null);var open = cljs.core.nth.call(null,vec__47934,(2),null);var high = cljs.core.nth.call(null,vec__47934,(3),null);var low = cljs.core.nth.call(null,vec__47934,(4),null);var close = cljs.core.nth.call(null,vec__47934,(5),null);var volume = cljs.core.nth.call(null,vec__47934,(6),null);cljs.core.chunk_append.call(null,b__47931,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__47936 = (i__47930 + (1));
i__47930 = G__47936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47931),iter__47928.call(null,cljs.core.chunk_rest.call(null,s__47929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47931),null);
}
} else
{var vec__47935 = cljs.core.first.call(null,s__47929__$2);var _ = cljs.core.nth.call(null,vec__47935,(0),null);var date = cljs.core.nth.call(null,vec__47935,(1),null);var open = cljs.core.nth.call(null,vec__47935,(2),null);var high = cljs.core.nth.call(null,vec__47935,(3),null);var low = cljs.core.nth.call(null,vec__47935,(4),null);var close = cljs.core.nth.call(null,vec__47935,(5),null);var volume = cljs.core.nth.call(null,vec__47935,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__47928.call(null,cljs.core.rest.call(null,s__47929__$2)));
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
return (function (state_48014){var state_val_48015 = (state_48014[(1)]);if((state_val_48015 === (9)))
{var inst_48004 = (state_48014[(2)]);var state_48014__$1 = state_48014;var statearr_48016_48033 = state_48014__$1;(statearr_48016_48033[(2)] = inst_48004);
(statearr_48016_48033[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48015 === (8)))
{var inst_48010 = (state_48014[(2)]);var state_48014__$1 = state_48014;var statearr_48017_48034 = state_48014__$1;(statearr_48017_48034[(2)] = inst_48010);
(statearr_48017_48034[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48015 === (7)))
{var inst_47996 = (state_48014[(7)]);var inst_48006 = cljs.core.concat.call(null,all,inst_47996);var inst_48007 = [null,inst_48006];var inst_48008 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48007,null));var state_48014__$1 = state_48014;var statearr_48018_48035 = state_48014__$1;(statearr_48018_48035[(2)] = inst_48008);
(statearr_48018_48035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48015 === (6)))
{var inst_47996 = (state_48014[(7)]);var inst_48000 = cljs.core.concat.call(null,all,inst_47996);var inst_48001 = (start + num);var inst_48002 = goog_historical_info.call(null,inst_48000,id,startdate,inst_48001,num);var state_48014__$1 = state_48014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48014__$1,(9),inst_48002);
} else
{if((state_val_48015 === (5)))
{var inst_48012 = (state_48014[(2)]);var state_48014__$1 = state_48014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48014__$1,inst_48012);
} else
{if((state_val_48015 === (4)))
{var inst_47991 = (state_48014[(8)]);var inst_47996 = (state_48014[(7)]);var inst_47996__$1 = stock.tool.parse_historical.call(null,inst_47991);var inst_47997 = cljs.core.count.call(null,inst_47996__$1);var inst_47998 = cljs.core._EQ_.call(null,num,inst_47997);var state_48014__$1 = (function (){var statearr_48019 = state_48014;(statearr_48019[(7)] = inst_47996__$1);
return statearr_48019;
})();if(inst_47998)
{var statearr_48020_48036 = state_48014__$1;(statearr_48020_48036[(1)] = (6));
} else
{var statearr_48021_48037 = state_48014__$1;(statearr_48021_48037[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48015 === (3)))
{var inst_47990 = (state_48014[(9)]);var inst_47993 = [inst_47990];var inst_47994 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47993,null));var state_48014__$1 = state_48014;var statearr_48022_48038 = state_48014__$1;(statearr_48022_48038[(2)] = inst_47994);
(statearr_48022_48038[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48015 === (2)))
{var inst_47990 = (state_48014[(9)]);var inst_47989 = (state_48014[(2)]);var inst_47990__$1 = cljs.core.nth.call(null,inst_47989,(0),null);var inst_47991 = cljs.core.nth.call(null,inst_47989,(1),null);var state_48014__$1 = (function (){var statearr_48023 = state_48014;(statearr_48023[(8)] = inst_47991);
(statearr_48023[(9)] = inst_47990__$1);
return statearr_48023;
})();if(cljs.core.truth_(inst_47990__$1))
{var statearr_48024_48039 = state_48014__$1;(statearr_48024_48039[(1)] = (3));
} else
{var statearr_48025_48040 = state_48014__$1;(statearr_48025_48040[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48015 === (1)))
{var inst_47986 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_47987 = stock.tool.content.call(null,inst_47986);var state_48014__$1 = state_48014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48014__$1,(2),inst_47987);
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
var state_machine__6188__auto____0 = (function (){var statearr_48029 = [null,null,null,null,null,null,null,null,null,null];(statearr_48029[(0)] = state_machine__6188__auto__);
(statearr_48029[(1)] = (1));
return statearr_48029;
});
var state_machine__6188__auto____1 = (function (state_48014){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48030){if((e48030 instanceof Object))
{var ex__6191__auto__ = e48030;var statearr_48031_48041 = state_48014;(statearr_48031_48041[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48042 = state_48014;
state_48014 = G__48042;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48014){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48032 = f__6203__auto__.call(null);(statearr_48032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__48044 = kline;var date__$1 = cljs.core.nth.call(null,vec__48044,(0),null);var _ = cljs.core.nth.call(null,vec__48044,(1),null);var ___$1 = cljs.core.nth.call(null,vec__48044,(2),null);var ___$2 = cljs.core.nth.call(null,vec__48044,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48044,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48044,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__48046 = kline;var _ = cljs.core.nth.call(null,vec__48046,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48046,(1),null);var high__$1 = cljs.core.nth.call(null,vec__48046,(2),null);var ___$2 = cljs.core.nth.call(null,vec__48046,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48046,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48046,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__48048 = kline;var _ = cljs.core.nth.call(null,vec__48048,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48048,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48048,(2),null);var ___$3 = cljs.core.nth.call(null,vec__48048,(3),null);var open__$1 = cljs.core.nth.call(null,vec__48048,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48048,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__48050 = kline;var _ = cljs.core.nth.call(null,vec__48050,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48050,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48050,(2),null);var ___$3 = cljs.core.nth.call(null,vec__48050,(3),null);var close__$1 = cljs.core.nth.call(null,vec__48050,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48050,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__48052 = kline;var _ = cljs.core.nth.call(null,vec__48052,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48052,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48052,(2),null);var low__$1 = cljs.core.nth.call(null,vec__48052,(3),null);var ___$3 = cljs.core.nth.call(null,vec__48052,(4),null);var ___$4 = cljs.core.nth.call(null,vec__48052,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__48054 = kline;var _ = cljs.core.nth.call(null,vec__48054,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48054,(1),null);var ___$2 = cljs.core.nth.call(null,vec__48054,(2),null);var ___$3 = cljs.core.nth.call(null,vec__48054,(3),null);var ___$4 = cljs.core.nth.call(null,vec__48054,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__48054,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__48056 = kline;var _ = cljs.core.nth.call(null,vec__48056,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48056,(1),null);var high = cljs.core.nth.call(null,vec__48056,(2),null);var low = cljs.core.nth.call(null,vec__48056,(3),null);var ___$2 = cljs.core.nth.call(null,vec__48056,(4),null);var ___$3 = cljs.core.nth.call(null,vec__48056,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__48058 = kline;var _ = cljs.core.nth.call(null,vec__48058,(0),null);var ___$1 = cljs.core.nth.call(null,vec__48058,(1),null);var high = cljs.core.nth.call(null,vec__48058,(2),null);var low = cljs.core.nth.call(null,vec__48058,(3),null);var close = cljs.core.nth.call(null,vec__48058,(4),null);var ___$2 = cljs.core.nth.call(null,vec__48058,(5),null);return (((high + low) + close) / (3));
}
});
