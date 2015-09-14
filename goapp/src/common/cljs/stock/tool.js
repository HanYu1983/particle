// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj22752 = {"url":"/proxy","dataType":"text","data":(function (){var obj22754 = {"url":url};return obj22754;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_22761){var state_val_22762 = (state_22761[(1)]);if((state_val_22762 === (2)))
{var inst_22758 = (state_22761[(2)]);var inst_22759 = cljs.core.async.close_BANG_.call(null,ret);var state_22761__$1 = (function (){var statearr_22763 = state_22761;(statearr_22763[(7)] = inst_22758);
return statearr_22763;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22761__$1,inst_22759);
} else
{if((state_val_22762 === (1)))
{var inst_22755 = [null,data];var inst_22756 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22755,null));var state_22761__$1 = state_22761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22761__$1,(2),ret,inst_22756);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_22767 = [null,null,null,null,null,null,null,null];(statearr_22767[(0)] = state_machine__6189__auto__);
(statearr_22767[(1)] = (1));
return statearr_22767;
});
var state_machine__6189__auto____1 = (function (state_22761){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_22761);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e22768){if((e22768 instanceof Object))
{var ex__6192__auto__ = e22768;var statearr_22769_22787 = state_22761;(statearr_22769_22787[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22788 = state_22761;
state_22761 = G__22788;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_22761){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_22761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_22770 = f__6204__auto__.call(null);(statearr_22770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_22770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_22777){var state_val_22778 = (state_22777[(1)]);if((state_val_22778 === (2)))
{var inst_22774 = (state_22777[(2)]);var inst_22775 = cljs.core.async.close_BANG_.call(null,ret);var state_22777__$1 = (function (){var statearr_22779 = state_22777;(statearr_22779[(7)] = inst_22774);
return statearr_22779;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22777__$1,inst_22775);
} else
{if((state_val_22778 === (1)))
{var inst_22771 = [err];var inst_22772 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22771,null));var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22777__$1,(2),ret,inst_22772);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_22783 = [null,null,null,null,null,null,null,null];(statearr_22783[(0)] = state_machine__6189__auto__);
(statearr_22783[(1)] = (1));
return statearr_22783;
});
var state_machine__6189__auto____1 = (function (state_22777){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_22777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object))
{var ex__6192__auto__ = e22784;var statearr_22785_22789 = state_22777;(statearr_22785_22789[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22777);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22790 = state_22777;
state_22777 = G__22790;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_22786 = f__6204__auto__.call(null);(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_22786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj22752;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){try{var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = (parseFloat(clojure.string.replace.call(null,json.vo,/M/,"")) * (1000000));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e22792){if((e22792 instanceof Object))
{var e = e22792;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22792;
} else
{return null;
}
}
}});
stock.tool.todayPrice = (function todayPrice(id){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_22843){var state_val_22844 = (state_22843[(1)]);if((state_val_22844 === (5)))
{var inst_22841 = (state_22843[(2)]);var state_22843__$1 = state_22843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22843__$1,inst_22841);
} else
{if((state_val_22844 === (4)))
{var inst_22832 = (state_22843[(7)]);var inst_22837 = stock.tool.parse_info.call(null,inst_22832);var inst_22838 = [null,inst_22837];var inst_22839 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22838,null));var state_22843__$1 = state_22843;var statearr_22845_22857 = state_22843__$1;(statearr_22845_22857[(2)] = inst_22839);
(statearr_22845_22857[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22844 === (3)))
{var inst_22830 = (state_22843[(8)]);var inst_22834 = [inst_22830];var inst_22835 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22834,null));var state_22843__$1 = state_22843;var statearr_22846_22858 = state_22843__$1;(statearr_22846_22858[(2)] = inst_22835);
(statearr_22846_22858[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22844 === (2)))
{var inst_22830 = (state_22843[(8)]);var inst_22829 = (state_22843[(2)]);var inst_22830__$1 = cljs.core.nth.call(null,inst_22829,(0),null);var inst_22831 = cljs.core.nth.call(null,inst_22829,(1),null);var inst_22832 = clojure.string.replace.call(null,inst_22831,/\/\//,"");var state_22843__$1 = (function (){var statearr_22847 = state_22843;(statearr_22847[(7)] = inst_22832);
(statearr_22847[(8)] = inst_22830__$1);
return statearr_22847;
})();if(cljs.core.truth_(inst_22830__$1))
{var statearr_22848_22859 = state_22843__$1;(statearr_22848_22859[(1)] = (3));
} else
{var statearr_22849_22860 = state_22843__$1;(statearr_22849_22860[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22844 === (1)))
{var inst_22826 = stock.tool.goog_finance_info_url.call(null,id);var inst_22827 = stock.tool.content.call(null,inst_22826);var state_22843__$1 = state_22843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22843__$1,(2),inst_22827);
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
var state_machine__6189__auto____0 = (function (){var statearr_22853 = [null,null,null,null,null,null,null,null,null];(statearr_22853[(0)] = state_machine__6189__auto__);
(statearr_22853[(1)] = (1));
return statearr_22853;
});
var state_machine__6189__auto____1 = (function (state_22843){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_22843);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e22854){if((e22854 instanceof Object))
{var ex__6192__auto__ = e22854;var statearr_22855_22861 = state_22843;(statearr_22855_22861[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22862 = state_22843;
state_22843 = G__22862;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_22843){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_22843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_22856 = f__6204__auto__.call(null);(statearr_22856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_22856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
/**
* 結合今天，如果今天已經抓到，就不結合
*/
stock.tool.combineToday = (function combineToday(todayLine,li){if(cljs.core.truth_(todayLine))
{var vec__22865 = cljs.core.first.call(null,li);var maybe_today = cljs.core.nth.call(null,vec__22865,(0),null);var _ = cljs.core.nth.call(null,vec__22865,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22865,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22865,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22865,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22865,(5),null);var vec__22866 = todayLine;var today_date = cljs.core.nth.call(null,vec__22866,(0),null);var ___$5 = cljs.core.nth.call(null,vec__22866,(1),null);var ___$6 = cljs.core.nth.call(null,vec__22866,(2),null);var ___$7 = cljs.core.nth.call(null,vec__22866,(3),null);var ___$8 = cljs.core.nth.call(null,vec__22866,(4),null);var ___$9 = cljs.core.nth.call(null,vec__22866,(5),null);if(cljs.core.not.call(null,(new Date(today_date)).clearTime().equals((new Date(maybe_today)).clearTime())))
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
return (function iter__22875(s__22876){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__22876__$1 = s__22876;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22876__$1);if(temp__4126__auto__)
{var s__22876__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22876__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22876__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22878 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22877 = (0);while(true){
if((i__22877 < size__4275__auto__))
{var vec__22881 = cljs.core._nth.call(null,c__4274__auto__,i__22877);var _ = cljs.core.nth.call(null,vec__22881,(0),null);var date = cljs.core.nth.call(null,vec__22881,(1),null);var close = cljs.core.nth.call(null,vec__22881,(2),null);var high = cljs.core.nth.call(null,vec__22881,(3),null);var low = cljs.core.nth.call(null,vec__22881,(4),null);var open = cljs.core.nth.call(null,vec__22881,(5),null);var volume = cljs.core.nth.call(null,vec__22881,(6),null);cljs.core.chunk_append.call(null,b__22878,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__22883 = (i__22877 + (1));
i__22877 = G__22883;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22878),iter__22875.call(null,cljs.core.chunk_rest.call(null,s__22876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22878),null);
}
} else
{var vec__22882 = cljs.core.first.call(null,s__22876__$2);var _ = cljs.core.nth.call(null,vec__22882,(0),null);var date = cljs.core.nth.call(null,vec__22882,(1),null);var close = cljs.core.nth.call(null,vec__22882,(2),null);var high = cljs.core.nth.call(null,vec__22882,(3),null);var low = cljs.core.nth.call(null,vec__22882,(4),null);var open = cljs.core.nth.call(null,vec__22882,(5),null);var volume = cljs.core.nth.call(null,vec__22882,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__22875.call(null,cljs.core.rest.call(null,s__22876__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__22898){var vec__22899 = p__22898;var d = cljs.core.nth.call(null,vec__22899,(0),null);var o = cljs.core.nth.call(null,vec__22899,(1),null);var h = cljs.core.nth.call(null,vec__22899,(2),null);var l = cljs.core.nth.call(null,vec__22899,(3),null);var c = cljs.core.nth.call(null,vec__22899,(4),null);var v = cljs.core.nth.call(null,vec__22899,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__22900,p__22901){var vec__22902 = p__22900;var d1 = cljs.core.nth.call(null,vec__22902,(0),null);var _ = cljs.core.nth.call(null,vec__22902,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22902,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22902,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22902,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22902,(5),null);var prev = vec__22902;var vec__22903 = p__22901;var d2 = cljs.core.nth.call(null,vec__22903,(0),null);var o = cljs.core.nth.call(null,vec__22903,(1),null);var h = cljs.core.nth.call(null,vec__22903,(2),null);var l = cljs.core.nth.call(null,vec__22903,(3),null);var c = cljs.core.nth.call(null,vec__22903,(4),null);var v = cljs.core.nth.call(null,vec__22903,(5),null);var curr = vec__22903;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__22904,p__22905){var vec__22906 = p__22904;var d1 = cljs.core.nth.call(null,vec__22906,(0),null);var _ = cljs.core.nth.call(null,vec__22906,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22906,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22906,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22906,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22906,(5),null);var prev = vec__22906;var vec__22907 = p__22905;var d2 = cljs.core.nth.call(null,vec__22907,(0),null);var o = cljs.core.nth.call(null,vec__22907,(1),null);var h = cljs.core.nth.call(null,vec__22907,(2),null);var l = cljs.core.nth.call(null,vec__22907,(3),null);var c = cljs.core.nth.call(null,vec__22907,(4),null);var v = cljs.core.nth.call(null,vec__22907,(5),null);var curr = vec__22907;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__22908){var vec__22909 = p__22908;var d = cljs.core.nth.call(null,vec__22909,(0),null);var o = cljs.core.nth.call(null,vec__22909,(1),null);var h = cljs.core.nth.call(null,vec__22909,(2),null);var l = cljs.core.nth.call(null,vec__22909,(3),null);var c = cljs.core.nth.call(null,vec__22909,(4),null);var v = cljs.core.nth.call(null,vec__22909,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__22910){var vec__22911 = p__22910;var d = cljs.core.nth.call(null,vec__22911,(0),null);var o = cljs.core.nth.call(null,vec__22911,(1),null);var h = cljs.core.nth.call(null,vec__22911,(2),null);var l = cljs.core.nth.call(null,vec__22911,(3),null);var c = cljs.core.nth.call(null,vec__22911,(4),null);var v = cljs.core.nth.call(null,vec__22911,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.get_goog_stock_prices = (function get_goog_stock_prices(id,range){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_22975){var state_val_22976 = (state_22975[(1)]);if((state_val_22976 === (6)))
{var inst_22967 = (state_22975[(7)]);var inst_22971 = (state_22975[(2)]);var inst_22972 = [inst_22971,inst_22967];var inst_22973 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22972,null));var state_22975__$1 = state_22975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22975__$1,inst_22973);
} else
{if((state_val_22976 === (5)))
{var inst_22962 = (state_22975[(8)]);var state_22975__$1 = state_22975;var statearr_22977_22990 = state_22975__$1;(statearr_22977_22990[(2)] = inst_22962);
(statearr_22977_22990[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22976 === (4)))
{var inst_22957 = (state_22975[(9)]);var state_22975__$1 = state_22975;var statearr_22978_22991 = state_22975__$1;(statearr_22978_22991[(2)] = inst_22957);
(statearr_22978_22991[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22976 === (3)))
{var inst_22957 = (state_22975[(9)]);var inst_22958 = (state_22975[(10)]);var inst_22961 = (state_22975[(2)]);var inst_22962 = cljs.core.nth.call(null,inst_22961,(0),null);var inst_22963 = cljs.core.nth.call(null,inst_22961,(1),null);var inst_22964 = stock.tool.parse_getprices.call(null,inst_22958);var inst_22965 = stock.tool.format_getprices.call(null,(86400),inst_22964);var inst_22966 = cljs.core.reverse.call(null,inst_22965);var inst_22967 = stock.tool.combineToday.call(null,inst_22963,inst_22966);var state_22975__$1 = (function (){var statearr_22979 = state_22975;(statearr_22979[(8)] = inst_22962);
(statearr_22979[(7)] = inst_22967);
return statearr_22979;
})();if(cljs.core.truth_(inst_22957))
{var statearr_22980_22992 = state_22975__$1;(statearr_22980_22992[(1)] = (4));
} else
{var statearr_22981_22993 = state_22975__$1;(statearr_22981_22993[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22976 === (2)))
{var inst_22956 = (state_22975[(2)]);var inst_22957 = cljs.core.nth.call(null,inst_22956,(0),null);var inst_22958 = cljs.core.nth.call(null,inst_22956,(1),null);var inst_22959 = stock.tool.todayPrice.call(null,id);var state_22975__$1 = (function (){var statearr_22982 = state_22975;(statearr_22982[(9)] = inst_22957);
(statearr_22982[(10)] = inst_22958);
return statearr_22982;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22975__$1,(3),inst_22959);
} else
{if((state_val_22976 === (1)))
{var inst_22953 = stock.tool.goog_finance_getprices_url.call(null,id,range);var inst_22954 = stock.tool.content.call(null,inst_22953);var state_22975__$1 = state_22975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22975__$1,(2),inst_22954);
} else
{return null;
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
var state_machine__6189__auto____0 = (function (){var statearr_22986 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22986[(0)] = state_machine__6189__auto__);
(statearr_22986[(1)] = (1));
return statearr_22986;
});
var state_machine__6189__auto____1 = (function (state_22975){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_22975);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e22987){if((e22987 instanceof Object))
{var ex__6192__auto__ = e22987;var statearr_22988_22994 = state_22975;(statearr_22988_22994[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22995 = state_22975;
state_22975 = G__22995;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_22975){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_22975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_22989 = f__6204__auto__.call(null);(statearr_22989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_22989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__23004(s__23005){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__23005__$1 = s__23005;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23005__$1);if(temp__4126__auto__)
{var s__23005__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23005__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__23005__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__23007 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__23006 = (0);while(true){
if((i__23006 < size__4275__auto__))
{var vec__23010 = cljs.core._nth.call(null,c__4274__auto__,i__23006);var _ = cljs.core.nth.call(null,vec__23010,(0),null);var date = cljs.core.nth.call(null,vec__23010,(1),null);var open = cljs.core.nth.call(null,vec__23010,(2),null);var high = cljs.core.nth.call(null,vec__23010,(3),null);var low = cljs.core.nth.call(null,vec__23010,(4),null);var close = cljs.core.nth.call(null,vec__23010,(5),null);var volume = cljs.core.nth.call(null,vec__23010,(6),null);cljs.core.chunk_append.call(null,b__23007,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__23012 = (i__23006 + (1));
i__23006 = G__23012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23007),iter__23004.call(null,cljs.core.chunk_rest.call(null,s__23005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23007),null);
}
} else
{var vec__23011 = cljs.core.first.call(null,s__23005__$2);var _ = cljs.core.nth.call(null,vec__23011,(0),null);var date = cljs.core.nth.call(null,vec__23011,(1),null);var open = cljs.core.nth.call(null,vec__23011,(2),null);var high = cljs.core.nth.call(null,vec__23011,(3),null);var low = cljs.core.nth.call(null,vec__23011,(4),null);var close = cljs.core.nth.call(null,vec__23011,(5),null);var volume = cljs.core.nth.call(null,vec__23011,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__23004.call(null,cljs.core.rest.call(null,s__23005__$2)));
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
stock.tool.goog_historical_info = (function goog_historical_info(all,id,startdate,start,num){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_23090){var state_val_23091 = (state_23090[(1)]);if((state_val_23091 === (9)))
{var inst_23080 = (state_23090[(2)]);var state_23090__$1 = state_23090;var statearr_23092_23109 = state_23090__$1;(statearr_23092_23109[(2)] = inst_23080);
(statearr_23092_23109[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23091 === (8)))
{var inst_23086 = (state_23090[(2)]);var state_23090__$1 = state_23090;var statearr_23093_23110 = state_23090__$1;(statearr_23093_23110[(2)] = inst_23086);
(statearr_23093_23110[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23091 === (7)))
{var inst_23072 = (state_23090[(7)]);var inst_23082 = cljs.core.concat.call(null,all,inst_23072);var inst_23083 = [null,inst_23082];var inst_23084 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23083,null));var state_23090__$1 = state_23090;var statearr_23094_23111 = state_23090__$1;(statearr_23094_23111[(2)] = inst_23084);
(statearr_23094_23111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23091 === (6)))
{var inst_23072 = (state_23090[(7)]);var inst_23076 = cljs.core.concat.call(null,all,inst_23072);var inst_23077 = (start + num);var inst_23078 = goog_historical_info.call(null,inst_23076,id,startdate,inst_23077,num);var state_23090__$1 = state_23090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23090__$1,(9),inst_23078);
} else
{if((state_val_23091 === (5)))
{var inst_23088 = (state_23090[(2)]);var state_23090__$1 = state_23090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23090__$1,inst_23088);
} else
{if((state_val_23091 === (4)))
{var inst_23072 = (state_23090[(7)]);var inst_23067 = (state_23090[(8)]);var inst_23072__$1 = stock.tool.parse_historical.call(null,inst_23067);var inst_23073 = cljs.core.count.call(null,inst_23072__$1);var inst_23074 = cljs.core._EQ_.call(null,num,inst_23073);var state_23090__$1 = (function (){var statearr_23095 = state_23090;(statearr_23095[(7)] = inst_23072__$1);
return statearr_23095;
})();if(inst_23074)
{var statearr_23096_23112 = state_23090__$1;(statearr_23096_23112[(1)] = (6));
} else
{var statearr_23097_23113 = state_23090__$1;(statearr_23097_23113[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23091 === (3)))
{var inst_23066 = (state_23090[(9)]);var inst_23069 = [inst_23066];var inst_23070 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23069,null));var state_23090__$1 = state_23090;var statearr_23098_23114 = state_23090__$1;(statearr_23098_23114[(2)] = inst_23070);
(statearr_23098_23114[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23091 === (2)))
{var inst_23066 = (state_23090[(9)]);var inst_23065 = (state_23090[(2)]);var inst_23066__$1 = cljs.core.nth.call(null,inst_23065,(0),null);var inst_23067 = cljs.core.nth.call(null,inst_23065,(1),null);var state_23090__$1 = (function (){var statearr_23099 = state_23090;(statearr_23099[(9)] = inst_23066__$1);
(statearr_23099[(8)] = inst_23067);
return statearr_23099;
})();if(cljs.core.truth_(inst_23066__$1))
{var statearr_23100_23115 = state_23090__$1;(statearr_23100_23115[(1)] = (3));
} else
{var statearr_23101_23116 = state_23090__$1;(statearr_23101_23116[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23091 === (1)))
{var inst_23062 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_23063 = stock.tool.content.call(null,inst_23062);var state_23090__$1 = state_23090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23090__$1,(2),inst_23063);
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
var state_machine__6189__auto____0 = (function (){var statearr_23105 = [null,null,null,null,null,null,null,null,null,null];(statearr_23105[(0)] = state_machine__6189__auto__);
(statearr_23105[(1)] = (1));
return statearr_23105;
});
var state_machine__6189__auto____1 = (function (state_23090){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_23090);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e23106){if((e23106 instanceof Object))
{var ex__6192__auto__ = e23106;var statearr_23107_23117 = state_23090;(statearr_23107_23117[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23118 = state_23090;
state_23090 = G__23118;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_23090){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_23090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_23108 = f__6204__auto__.call(null);(statearr_23108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_23108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__23120 = kline;var date__$1 = cljs.core.nth.call(null,vec__23120,(0),null);var _ = cljs.core.nth.call(null,vec__23120,(1),null);var ___$1 = cljs.core.nth.call(null,vec__23120,(2),null);var ___$2 = cljs.core.nth.call(null,vec__23120,(3),null);var ___$3 = cljs.core.nth.call(null,vec__23120,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23120,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__23122 = kline;var _ = cljs.core.nth.call(null,vec__23122,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23122,(1),null);var high__$1 = cljs.core.nth.call(null,vec__23122,(2),null);var ___$2 = cljs.core.nth.call(null,vec__23122,(3),null);var ___$3 = cljs.core.nth.call(null,vec__23122,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23122,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__23124 = kline;var _ = cljs.core.nth.call(null,vec__23124,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23124,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23124,(2),null);var ___$3 = cljs.core.nth.call(null,vec__23124,(3),null);var open__$1 = cljs.core.nth.call(null,vec__23124,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23124,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__23126 = kline;var _ = cljs.core.nth.call(null,vec__23126,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23126,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23126,(2),null);var ___$3 = cljs.core.nth.call(null,vec__23126,(3),null);var close__$1 = cljs.core.nth.call(null,vec__23126,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23126,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__23128 = kline;var _ = cljs.core.nth.call(null,vec__23128,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23128,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23128,(2),null);var low__$1 = cljs.core.nth.call(null,vec__23128,(3),null);var ___$3 = cljs.core.nth.call(null,vec__23128,(4),null);var ___$4 = cljs.core.nth.call(null,vec__23128,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__23130 = kline;var _ = cljs.core.nth.call(null,vec__23130,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23130,(1),null);var ___$2 = cljs.core.nth.call(null,vec__23130,(2),null);var ___$3 = cljs.core.nth.call(null,vec__23130,(3),null);var ___$4 = cljs.core.nth.call(null,vec__23130,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__23130,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__23132 = kline;var _ = cljs.core.nth.call(null,vec__23132,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23132,(1),null);var high = cljs.core.nth.call(null,vec__23132,(2),null);var low = cljs.core.nth.call(null,vec__23132,(3),null);var ___$2 = cljs.core.nth.call(null,vec__23132,(4),null);var ___$3 = cljs.core.nth.call(null,vec__23132,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__23134 = kline;var _ = cljs.core.nth.call(null,vec__23134,(0),null);var ___$1 = cljs.core.nth.call(null,vec__23134,(1),null);var high = cljs.core.nth.call(null,vec__23134,(2),null);var low = cljs.core.nth.call(null,vec__23134,(3),null);var close = cljs.core.nth.call(null,vec__23134,(4),null);var ___$2 = cljs.core.nth.call(null,vec__23134,(5),null);return (((high + low) + close) / (3));
}
});
