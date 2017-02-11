// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj57734 = {"url":"/proxy","dataType":"text","data":(function (){var obj57736 = {"url":url};return obj57736;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_57743){var state_val_57744 = (state_57743[(1)]);if((state_val_57744 === (2)))
{var inst_57740 = (state_57743[(2)]);var inst_57741 = cljs.core.async.close_BANG_.call(null,ret);var state_57743__$1 = (function (){var statearr_57745 = state_57743;(statearr_57745[(7)] = inst_57740);
return statearr_57745;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57743__$1,inst_57741);
} else
{if((state_val_57744 === (1)))
{var inst_57737 = [null,data];var inst_57738 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57737,null));var state_57743__$1 = state_57743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57743__$1,(2),ret,inst_57738);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57749 = [null,null,null,null,null,null,null,null];(statearr_57749[(0)] = state_machine__6188__auto__);
(statearr_57749[(1)] = (1));
return statearr_57749;
});
var state_machine__6188__auto____1 = (function (state_57743){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57750){if((e57750 instanceof Object))
{var ex__6191__auto__ = e57750;var statearr_57751_57769 = state_57743;(statearr_57751_57769[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57770 = state_57743;
state_57743 = G__57770;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57743){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_57752 = f__6203__auto__.call(null);(statearr_57752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_57759){var state_val_57760 = (state_57759[(1)]);if((state_val_57760 === (2)))
{var inst_57756 = (state_57759[(2)]);var inst_57757 = cljs.core.async.close_BANG_.call(null,ret);var state_57759__$1 = (function (){var statearr_57761 = state_57759;(statearr_57761[(7)] = inst_57756);
return statearr_57761;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57759__$1,inst_57757);
} else
{if((state_val_57760 === (1)))
{var inst_57753 = [err];var inst_57754 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57753,null));var state_57759__$1 = state_57759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57759__$1,(2),ret,inst_57754);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57765 = [null,null,null,null,null,null,null,null];(statearr_57765[(0)] = state_machine__6188__auto__);
(statearr_57765[(1)] = (1));
return statearr_57765;
});
var state_machine__6188__auto____1 = (function (state_57759){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57766){if((e57766 instanceof Object))
{var ex__6191__auto__ = e57766;var statearr_57767_57771 = state_57759;(statearr_57767_57771[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57772 = state_57759;
state_57759 = G__57772;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57759){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_57768 = f__6203__auto__.call(null);(statearr_57768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj57734;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){try{var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = (parseFloat(clojure.string.replace.call(null,json.vo,/M/,"")) * (1000000));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e57774){if((e57774 instanceof Object))
{var e = e57774;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57774;
} else
{return null;
}
}
}});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_57825){var state_val_57826 = (state_57825[(1)]);if((state_val_57826 === (5)))
{var inst_57823 = (state_57825[(2)]);var state_57825__$1 = state_57825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57825__$1,inst_57823);
} else
{if((state_val_57826 === (4)))
{var inst_57814 = (state_57825[(7)]);var inst_57819 = stock.tool.parse_info.call(null,inst_57814);var inst_57820 = [null,inst_57819];var inst_57821 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57820,null));var state_57825__$1 = state_57825;var statearr_57827_57839 = state_57825__$1;(statearr_57827_57839[(2)] = inst_57821);
(statearr_57827_57839[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57826 === (3)))
{var inst_57812 = (state_57825[(8)]);var inst_57816 = [inst_57812];var inst_57817 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57816,null));var state_57825__$1 = state_57825;var statearr_57828_57840 = state_57825__$1;(statearr_57828_57840[(2)] = inst_57817);
(statearr_57828_57840[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57826 === (2)))
{var inst_57812 = (state_57825[(8)]);var inst_57811 = (state_57825[(2)]);var inst_57812__$1 = cljs.core.nth.call(null,inst_57811,(0),null);var inst_57813 = cljs.core.nth.call(null,inst_57811,(1),null);var inst_57814 = clojure.string.replace.call(null,inst_57813,/\/\//,"");var state_57825__$1 = (function (){var statearr_57829 = state_57825;(statearr_57829[(8)] = inst_57812__$1);
(statearr_57829[(7)] = inst_57814);
return statearr_57829;
})();if(cljs.core.truth_(inst_57812__$1))
{var statearr_57830_57841 = state_57825__$1;(statearr_57830_57841[(1)] = (3));
} else
{var statearr_57831_57842 = state_57825__$1;(statearr_57831_57842[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57826 === (1)))
{var inst_57808 = stock.tool.goog_finance_info_url.call(null,id);var inst_57809 = stock.tool.content.call(null,inst_57808);var state_57825__$1 = state_57825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57825__$1,(2),inst_57809);
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
var state_machine__6188__auto____0 = (function (){var statearr_57835 = [null,null,null,null,null,null,null,null,null];(statearr_57835[(0)] = state_machine__6188__auto__);
(statearr_57835[(1)] = (1));
return statearr_57835;
});
var state_machine__6188__auto____1 = (function (state_57825){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57825);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57836){if((e57836 instanceof Object))
{var ex__6191__auto__ = e57836;var statearr_57837_57843 = state_57825;(statearr_57837_57843[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57844 = state_57825;
state_57825 = G__57844;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57825){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57838 = f__6203__auto__.call(null);(statearr_57838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 結合今天，如果今天已經抓到，就不結合
*/
stock.tool.combineToday = (function combineToday(todayLine,li){if(cljs.core.truth_(todayLine))
{var vec__57846 = cljs.core.first.call(null,li);var maybe_today = cljs.core.nth.call(null,vec__57846,(0),null);var _ = cljs.core.nth.call(null,vec__57846,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57846,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57846,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57846,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57846,(5),null);if(cljs.core.not.call(null,Date.today().equals((new Date(maybe_today)).clearTime())))
{return cljs.core.cons.call(null,todayLine,li);
} else
{return li;
}
} else
{return li;
}
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__57855(s__57856){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__57856__$1 = s__57856;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57856__$1);if(temp__4126__auto__)
{var s__57856__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57856__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__57856__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__57858 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__57857 = (0);while(true){
if((i__57857 < size__4275__auto__))
{var vec__57861 = cljs.core._nth.call(null,c__4274__auto__,i__57857);var _ = cljs.core.nth.call(null,vec__57861,(0),null);var date = cljs.core.nth.call(null,vec__57861,(1),null);var close = cljs.core.nth.call(null,vec__57861,(2),null);var high = cljs.core.nth.call(null,vec__57861,(3),null);var low = cljs.core.nth.call(null,vec__57861,(4),null);var open = cljs.core.nth.call(null,vec__57861,(5),null);var volume = cljs.core.nth.call(null,vec__57861,(6),null);cljs.core.chunk_append.call(null,b__57858,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__57863 = (i__57857 + (1));
i__57857 = G__57863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57858),iter__57855.call(null,cljs.core.chunk_rest.call(null,s__57856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57858),null);
}
} else
{var vec__57862 = cljs.core.first.call(null,s__57856__$2);var _ = cljs.core.nth.call(null,vec__57862,(0),null);var date = cljs.core.nth.call(null,vec__57862,(1),null);var close = cljs.core.nth.call(null,vec__57862,(2),null);var high = cljs.core.nth.call(null,vec__57862,(3),null);var low = cljs.core.nth.call(null,vec__57862,(4),null);var open = cljs.core.nth.call(null,vec__57862,(5),null);var volume = cljs.core.nth.call(null,vec__57862,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__57855.call(null,cljs.core.rest.call(null,s__57856__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__57878){var vec__57879 = p__57878;var d = cljs.core.nth.call(null,vec__57879,(0),null);var o = cljs.core.nth.call(null,vec__57879,(1),null);var h = cljs.core.nth.call(null,vec__57879,(2),null);var l = cljs.core.nth.call(null,vec__57879,(3),null);var c = cljs.core.nth.call(null,vec__57879,(4),null);var v = cljs.core.nth.call(null,vec__57879,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__57880,p__57881){var vec__57882 = p__57880;var d1 = cljs.core.nth.call(null,vec__57882,(0),null);var _ = cljs.core.nth.call(null,vec__57882,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57882,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57882,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57882,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57882,(5),null);var prev = vec__57882;var vec__57883 = p__57881;var d2 = cljs.core.nth.call(null,vec__57883,(0),null);var o = cljs.core.nth.call(null,vec__57883,(1),null);var h = cljs.core.nth.call(null,vec__57883,(2),null);var l = cljs.core.nth.call(null,vec__57883,(3),null);var c = cljs.core.nth.call(null,vec__57883,(4),null);var v = cljs.core.nth.call(null,vec__57883,(5),null);var curr = vec__57883;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__57884,p__57885){var vec__57886 = p__57884;var d1 = cljs.core.nth.call(null,vec__57886,(0),null);var _ = cljs.core.nth.call(null,vec__57886,(1),null);var ___$1 = cljs.core.nth.call(null,vec__57886,(2),null);var ___$2 = cljs.core.nth.call(null,vec__57886,(3),null);var ___$3 = cljs.core.nth.call(null,vec__57886,(4),null);var ___$4 = cljs.core.nth.call(null,vec__57886,(5),null);var prev = vec__57886;var vec__57887 = p__57885;var d2 = cljs.core.nth.call(null,vec__57887,(0),null);var o = cljs.core.nth.call(null,vec__57887,(1),null);var h = cljs.core.nth.call(null,vec__57887,(2),null);var l = cljs.core.nth.call(null,vec__57887,(3),null);var c = cljs.core.nth.call(null,vec__57887,(4),null);var v = cljs.core.nth.call(null,vec__57887,(5),null);var curr = vec__57887;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__57888){var vec__57889 = p__57888;var d = cljs.core.nth.call(null,vec__57889,(0),null);var o = cljs.core.nth.call(null,vec__57889,(1),null);var h = cljs.core.nth.call(null,vec__57889,(2),null);var l = cljs.core.nth.call(null,vec__57889,(3),null);var c = cljs.core.nth.call(null,vec__57889,(4),null);var v = cljs.core.nth.call(null,vec__57889,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__57890){var vec__57891 = p__57890;var d = cljs.core.nth.call(null,vec__57891,(0),null);var o = cljs.core.nth.call(null,vec__57891,(1),null);var h = cljs.core.nth.call(null,vec__57891,(2),null);var l = cljs.core.nth.call(null,vec__57891,(3),null);var c = cljs.core.nth.call(null,vec__57891,(4),null);var v = cljs.core.nth.call(null,vec__57891,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.get_goog_stock_prices = (function get_goog_stock_prices(id,range){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_57955){var state_val_57956 = (state_57955[(1)]);if((state_val_57956 === (6)))
{var inst_57947 = (state_57955[(7)]);var inst_57951 = (state_57955[(2)]);var inst_57952 = [inst_57951,inst_57947];var inst_57953 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57952,null));var state_57955__$1 = state_57955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57955__$1,inst_57953);
} else
{if((state_val_57956 === (5)))
{var inst_57942 = (state_57955[(8)]);var state_57955__$1 = state_57955;var statearr_57957_57970 = state_57955__$1;(statearr_57957_57970[(2)] = inst_57942);
(statearr_57957_57970[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57956 === (4)))
{var inst_57937 = (state_57955[(9)]);var state_57955__$1 = state_57955;var statearr_57958_57971 = state_57955__$1;(statearr_57958_57971[(2)] = inst_57937);
(statearr_57958_57971[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57956 === (3)))
{var inst_57937 = (state_57955[(9)]);var inst_57938 = (state_57955[(10)]);var inst_57941 = (state_57955[(2)]);var inst_57942 = cljs.core.nth.call(null,inst_57941,(0),null);var inst_57943 = cljs.core.nth.call(null,inst_57941,(1),null);var inst_57944 = stock.tool.parse_getprices.call(null,inst_57938);var inst_57945 = stock.tool.format_getprices.call(null,(86400),inst_57944);var inst_57946 = cljs.core.reverse.call(null,inst_57945);var inst_57947 = stock.tool.combineToday.call(null,inst_57943,inst_57946);var state_57955__$1 = (function (){var statearr_57959 = state_57955;(statearr_57959[(8)] = inst_57942);
(statearr_57959[(7)] = inst_57947);
return statearr_57959;
})();if(cljs.core.truth_(inst_57937))
{var statearr_57960_57972 = state_57955__$1;(statearr_57960_57972[(1)] = (4));
} else
{var statearr_57961_57973 = state_57955__$1;(statearr_57961_57973[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57956 === (2)))
{var inst_57936 = (state_57955[(2)]);var inst_57937 = cljs.core.nth.call(null,inst_57936,(0),null);var inst_57938 = cljs.core.nth.call(null,inst_57936,(1),null);var inst_57939 = stock.tool.todayPrice.call(null,id);var state_57955__$1 = (function (){var statearr_57962 = state_57955;(statearr_57962[(9)] = inst_57937);
(statearr_57962[(10)] = inst_57938);
return statearr_57962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57955__$1,(3),inst_57939);
} else
{if((state_val_57956 === (1)))
{var inst_57933 = stock.tool.goog_finance_getprices_url.call(null,id,range);var inst_57934 = stock.tool.content.call(null,inst_57933);var state_57955__$1 = state_57955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57955__$1,(2),inst_57934);
} else
{return null;
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
var state_machine__6188__auto____0 = (function (){var statearr_57966 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_57966[(0)] = state_machine__6188__auto__);
(statearr_57966[(1)] = (1));
return statearr_57966;
});
var state_machine__6188__auto____1 = (function (state_57955){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57967){if((e57967 instanceof Object))
{var ex__6191__auto__ = e57967;var statearr_57968_57974 = state_57955;(statearr_57968_57974[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57975 = state_57955;
state_57955 = G__57975;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57955){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57969 = f__6203__auto__.call(null);(statearr_57969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__57984(s__57985){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__57985__$1 = s__57985;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57985__$1);if(temp__4126__auto__)
{var s__57985__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57985__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__57985__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__57987 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__57986 = (0);while(true){
if((i__57986 < size__4275__auto__))
{var vec__57990 = cljs.core._nth.call(null,c__4274__auto__,i__57986);var _ = cljs.core.nth.call(null,vec__57990,(0),null);var date = cljs.core.nth.call(null,vec__57990,(1),null);var open = cljs.core.nth.call(null,vec__57990,(2),null);var high = cljs.core.nth.call(null,vec__57990,(3),null);var low = cljs.core.nth.call(null,vec__57990,(4),null);var close = cljs.core.nth.call(null,vec__57990,(5),null);var volume = cljs.core.nth.call(null,vec__57990,(6),null);cljs.core.chunk_append.call(null,b__57987,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__57992 = (i__57986 + (1));
i__57986 = G__57992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57987),iter__57984.call(null,cljs.core.chunk_rest.call(null,s__57985__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57987),null);
}
} else
{var vec__57991 = cljs.core.first.call(null,s__57985__$2);var _ = cljs.core.nth.call(null,vec__57991,(0),null);var date = cljs.core.nth.call(null,vec__57991,(1),null);var open = cljs.core.nth.call(null,vec__57991,(2),null);var high = cljs.core.nth.call(null,vec__57991,(3),null);var low = cljs.core.nth.call(null,vec__57991,(4),null);var close = cljs.core.nth.call(null,vec__57991,(5),null);var volume = cljs.core.nth.call(null,vec__57991,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__57984.call(null,cljs.core.rest.call(null,s__57985__$2)));
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
return (function (state_58070){var state_val_58071 = (state_58070[(1)]);if((state_val_58071 === (9)))
{var inst_58060 = (state_58070[(2)]);var state_58070__$1 = state_58070;var statearr_58072_58089 = state_58070__$1;(statearr_58072_58089[(2)] = inst_58060);
(statearr_58072_58089[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58071 === (8)))
{var inst_58066 = (state_58070[(2)]);var state_58070__$1 = state_58070;var statearr_58073_58090 = state_58070__$1;(statearr_58073_58090[(2)] = inst_58066);
(statearr_58073_58090[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58071 === (7)))
{var inst_58052 = (state_58070[(7)]);var inst_58062 = cljs.core.concat.call(null,all,inst_58052);var inst_58063 = [null,inst_58062];var inst_58064 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58063,null));var state_58070__$1 = state_58070;var statearr_58074_58091 = state_58070__$1;(statearr_58074_58091[(2)] = inst_58064);
(statearr_58074_58091[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58071 === (6)))
{var inst_58052 = (state_58070[(7)]);var inst_58056 = cljs.core.concat.call(null,all,inst_58052);var inst_58057 = (start + num);var inst_58058 = goog_historical_info.call(null,inst_58056,id,startdate,inst_58057,num);var state_58070__$1 = state_58070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58070__$1,(9),inst_58058);
} else
{if((state_val_58071 === (5)))
{var inst_58068 = (state_58070[(2)]);var state_58070__$1 = state_58070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58070__$1,inst_58068);
} else
{if((state_val_58071 === (4)))
{var inst_58052 = (state_58070[(7)]);var inst_58047 = (state_58070[(8)]);var inst_58052__$1 = stock.tool.parse_historical.call(null,inst_58047);var inst_58053 = cljs.core.count.call(null,inst_58052__$1);var inst_58054 = cljs.core._EQ_.call(null,num,inst_58053);var state_58070__$1 = (function (){var statearr_58075 = state_58070;(statearr_58075[(7)] = inst_58052__$1);
return statearr_58075;
})();if(inst_58054)
{var statearr_58076_58092 = state_58070__$1;(statearr_58076_58092[(1)] = (6));
} else
{var statearr_58077_58093 = state_58070__$1;(statearr_58077_58093[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58071 === (3)))
{var inst_58046 = (state_58070[(9)]);var inst_58049 = [inst_58046];var inst_58050 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58049,null));var state_58070__$1 = state_58070;var statearr_58078_58094 = state_58070__$1;(statearr_58078_58094[(2)] = inst_58050);
(statearr_58078_58094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58071 === (2)))
{var inst_58046 = (state_58070[(9)]);var inst_58045 = (state_58070[(2)]);var inst_58046__$1 = cljs.core.nth.call(null,inst_58045,(0),null);var inst_58047 = cljs.core.nth.call(null,inst_58045,(1),null);var state_58070__$1 = (function (){var statearr_58079 = state_58070;(statearr_58079[(8)] = inst_58047);
(statearr_58079[(9)] = inst_58046__$1);
return statearr_58079;
})();if(cljs.core.truth_(inst_58046__$1))
{var statearr_58080_58095 = state_58070__$1;(statearr_58080_58095[(1)] = (3));
} else
{var statearr_58081_58096 = state_58070__$1;(statearr_58081_58096[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58071 === (1)))
{var inst_58042 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_58043 = stock.tool.content.call(null,inst_58042);var state_58070__$1 = state_58070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58070__$1,(2),inst_58043);
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
var state_machine__6188__auto____0 = (function (){var statearr_58085 = [null,null,null,null,null,null,null,null,null,null];(statearr_58085[(0)] = state_machine__6188__auto__);
(statearr_58085[(1)] = (1));
return statearr_58085;
});
var state_machine__6188__auto____1 = (function (state_58070){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58086){if((e58086 instanceof Object))
{var ex__6191__auto__ = e58086;var statearr_58087_58097 = state_58070;(statearr_58087_58097[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58098 = state_58070;
state_58070 = G__58098;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58070){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_58088 = f__6203__auto__.call(null);(statearr_58088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_58088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__58100 = kline;var date__$1 = cljs.core.nth.call(null,vec__58100,(0),null);var _ = cljs.core.nth.call(null,vec__58100,(1),null);var ___$1 = cljs.core.nth.call(null,vec__58100,(2),null);var ___$2 = cljs.core.nth.call(null,vec__58100,(3),null);var ___$3 = cljs.core.nth.call(null,vec__58100,(4),null);var ___$4 = cljs.core.nth.call(null,vec__58100,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__58102 = kline;var _ = cljs.core.nth.call(null,vec__58102,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58102,(1),null);var high__$1 = cljs.core.nth.call(null,vec__58102,(2),null);var ___$2 = cljs.core.nth.call(null,vec__58102,(3),null);var ___$3 = cljs.core.nth.call(null,vec__58102,(4),null);var ___$4 = cljs.core.nth.call(null,vec__58102,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__58104 = kline;var _ = cljs.core.nth.call(null,vec__58104,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58104,(1),null);var ___$2 = cljs.core.nth.call(null,vec__58104,(2),null);var ___$3 = cljs.core.nth.call(null,vec__58104,(3),null);var open__$1 = cljs.core.nth.call(null,vec__58104,(4),null);var ___$4 = cljs.core.nth.call(null,vec__58104,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__58106 = kline;var _ = cljs.core.nth.call(null,vec__58106,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58106,(1),null);var ___$2 = cljs.core.nth.call(null,vec__58106,(2),null);var ___$3 = cljs.core.nth.call(null,vec__58106,(3),null);var close__$1 = cljs.core.nth.call(null,vec__58106,(4),null);var ___$4 = cljs.core.nth.call(null,vec__58106,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__58108 = kline;var _ = cljs.core.nth.call(null,vec__58108,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58108,(1),null);var ___$2 = cljs.core.nth.call(null,vec__58108,(2),null);var low__$1 = cljs.core.nth.call(null,vec__58108,(3),null);var ___$3 = cljs.core.nth.call(null,vec__58108,(4),null);var ___$4 = cljs.core.nth.call(null,vec__58108,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__58110 = kline;var _ = cljs.core.nth.call(null,vec__58110,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58110,(1),null);var ___$2 = cljs.core.nth.call(null,vec__58110,(2),null);var ___$3 = cljs.core.nth.call(null,vec__58110,(3),null);var ___$4 = cljs.core.nth.call(null,vec__58110,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__58110,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__58112 = kline;var _ = cljs.core.nth.call(null,vec__58112,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58112,(1),null);var high = cljs.core.nth.call(null,vec__58112,(2),null);var low = cljs.core.nth.call(null,vec__58112,(3),null);var ___$2 = cljs.core.nth.call(null,vec__58112,(4),null);var ___$3 = cljs.core.nth.call(null,vec__58112,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__58114 = kline;var _ = cljs.core.nth.call(null,vec__58114,(0),null);var ___$1 = cljs.core.nth.call(null,vec__58114,(1),null);var high = cljs.core.nth.call(null,vec__58114,(2),null);var low = cljs.core.nth.call(null,vec__58114,(3),null);var close = cljs.core.nth.call(null,vec__58114,(4),null);var ___$2 = cljs.core.nth.call(null,vec__58114,(5),null);return (((high + low) + close) / (3));
}
});
