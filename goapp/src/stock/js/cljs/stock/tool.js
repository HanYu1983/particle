// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj51029 = {"url":"/proxy","dataType":"text","data":(function (){var obj51031 = {"url":url};return obj51031;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_51038){var state_val_51039 = (state_51038[(1)]);if((state_val_51039 === (2)))
{var inst_51035 = (state_51038[(2)]);var inst_51036 = cljs.core.async.close_BANG_.call(null,ret);var state_51038__$1 = (function (){var statearr_51040 = state_51038;(statearr_51040[(7)] = inst_51035);
return statearr_51040;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51038__$1,inst_51036);
} else
{if((state_val_51039 === (1)))
{var inst_51032 = [null,data];var inst_51033 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51032,null));var state_51038__$1 = state_51038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51038__$1,(2),ret,inst_51033);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51044 = [null,null,null,null,null,null,null,null];(statearr_51044[(0)] = state_machine__6188__auto__);
(statearr_51044[(1)] = (1));
return statearr_51044;
});
var state_machine__6188__auto____1 = (function (state_51038){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51038);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51045){if((e51045 instanceof Object))
{var ex__6191__auto__ = e51045;var statearr_51046_51064 = state_51038;(statearr_51046_51064[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51065 = state_51038;
state_51038 = G__51065;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51038){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_51047 = f__6203__auto__.call(null);(statearr_51047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_51054){var state_val_51055 = (state_51054[(1)]);if((state_val_51055 === (2)))
{var inst_51051 = (state_51054[(2)]);var inst_51052 = cljs.core.async.close_BANG_.call(null,ret);var state_51054__$1 = (function (){var statearr_51056 = state_51054;(statearr_51056[(7)] = inst_51051);
return statearr_51056;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51054__$1,inst_51052);
} else
{if((state_val_51055 === (1)))
{var inst_51048 = [err];var inst_51049 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51048,null));var state_51054__$1 = state_51054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51054__$1,(2),ret,inst_51049);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51060 = [null,null,null,null,null,null,null,null];(statearr_51060[(0)] = state_machine__6188__auto__);
(statearr_51060[(1)] = (1));
return statearr_51060;
});
var state_machine__6188__auto____1 = (function (state_51054){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51061){if((e51061 instanceof Object))
{var ex__6191__auto__ = e51061;var statearr_51062_51066 = state_51054;(statearr_51062_51066[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51067 = state_51054;
state_51054 = G__51067;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51054){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_51063 = f__6203__auto__.call(null);(statearr_51063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj51029;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = json.vo;return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,(0)], null);
});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_51120){var state_val_51121 = (state_51120[(1)]);if((state_val_51121 === (5)))
{var inst_51118 = (state_51120[(2)]);var state_51120__$1 = state_51120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51120__$1,inst_51118);
} else
{if((state_val_51121 === (4)))
{var inst_51108 = (state_51120[(7)]);var inst_51114 = stock.tool.parse_info.call(null,inst_51108);var inst_51115 = [null,inst_51114];var inst_51116 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51115,null));var state_51120__$1 = state_51120;var statearr_51122_51134 = state_51120__$1;(statearr_51122_51134[(2)] = inst_51116);
(statearr_51122_51134[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51121 === (3)))
{var inst_51106 = (state_51120[(8)]);var inst_51111 = [inst_51106];var inst_51112 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51111,null));var state_51120__$1 = state_51120;var statearr_51123_51135 = state_51120__$1;(statearr_51123_51135[(2)] = inst_51112);
(statearr_51123_51135[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51121 === (2)))
{var inst_51108 = (state_51120[(7)]);var inst_51106 = (state_51120[(8)]);var inst_51105 = (state_51120[(2)]);var inst_51106__$1 = cljs.core.nth.call(null,inst_51105,(0),null);var inst_51107 = cljs.core.nth.call(null,inst_51105,(1),null);var inst_51108__$1 = clojure.string.replace.call(null,inst_51107,/\/\//,"");var inst_51109 = console.log(inst_51108__$1);var state_51120__$1 = (function (){var statearr_51124 = state_51120;(statearr_51124[(7)] = inst_51108__$1);
(statearr_51124[(9)] = inst_51109);
(statearr_51124[(8)] = inst_51106__$1);
return statearr_51124;
})();if(cljs.core.truth_(inst_51106__$1))
{var statearr_51125_51136 = state_51120__$1;(statearr_51125_51136[(1)] = (3));
} else
{var statearr_51126_51137 = state_51120__$1;(statearr_51126_51137[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51121 === (1)))
{var inst_51102 = stock.tool.goog_finance_info_url.call(null,id);var inst_51103 = stock.tool.content.call(null,inst_51102);var state_51120__$1 = state_51120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51120__$1,(2),inst_51103);
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
var state_machine__6188__auto____0 = (function (){var statearr_51130 = [null,null,null,null,null,null,null,null,null,null];(statearr_51130[(0)] = state_machine__6188__auto__);
(statearr_51130[(1)] = (1));
return statearr_51130;
});
var state_machine__6188__auto____1 = (function (state_51120){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51120);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51131){if((e51131 instanceof Object))
{var ex__6191__auto__ = e51131;var statearr_51132_51138 = state_51120;(statearr_51132_51138[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51139 = state_51120;
state_51120 = G__51139;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51120){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51133 = f__6203__auto__.call(null);(statearr_51133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__51148(s__51149){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__51149__$1 = s__51149;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51149__$1);if(temp__4126__auto__)
{var s__51149__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51149__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__51149__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__51151 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__51150 = (0);while(true){
if((i__51150 < size__4275__auto__))
{var vec__51154 = cljs.core._nth.call(null,c__4274__auto__,i__51150);var _ = cljs.core.nth.call(null,vec__51154,(0),null);var date = cljs.core.nth.call(null,vec__51154,(1),null);var close = cljs.core.nth.call(null,vec__51154,(2),null);var high = cljs.core.nth.call(null,vec__51154,(3),null);var low = cljs.core.nth.call(null,vec__51154,(4),null);var open = cljs.core.nth.call(null,vec__51154,(5),null);var volume = cljs.core.nth.call(null,vec__51154,(6),null);cljs.core.chunk_append.call(null,b__51151,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__51156 = (i__51150 + (1));
i__51150 = G__51156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51151),iter__51148.call(null,cljs.core.chunk_rest.call(null,s__51149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51151),null);
}
} else
{var vec__51155 = cljs.core.first.call(null,s__51149__$2);var _ = cljs.core.nth.call(null,vec__51155,(0),null);var date = cljs.core.nth.call(null,vec__51155,(1),null);var close = cljs.core.nth.call(null,vec__51155,(2),null);var high = cljs.core.nth.call(null,vec__51155,(3),null);var low = cljs.core.nth.call(null,vec__51155,(4),null);var open = cljs.core.nth.call(null,vec__51155,(5),null);var volume = cljs.core.nth.call(null,vec__51155,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__51148.call(null,cljs.core.rest.call(null,s__51149__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__51171){var vec__51172 = p__51171;var d = cljs.core.nth.call(null,vec__51172,(0),null);var o = cljs.core.nth.call(null,vec__51172,(1),null);var h = cljs.core.nth.call(null,vec__51172,(2),null);var l = cljs.core.nth.call(null,vec__51172,(3),null);var c = cljs.core.nth.call(null,vec__51172,(4),null);var v = cljs.core.nth.call(null,vec__51172,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__51173,p__51174){var vec__51175 = p__51173;var d1 = cljs.core.nth.call(null,vec__51175,(0),null);var _ = cljs.core.nth.call(null,vec__51175,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51175,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51175,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51175,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51175,(5),null);var prev = vec__51175;var vec__51176 = p__51174;var d2 = cljs.core.nth.call(null,vec__51176,(0),null);var o = cljs.core.nth.call(null,vec__51176,(1),null);var h = cljs.core.nth.call(null,vec__51176,(2),null);var l = cljs.core.nth.call(null,vec__51176,(3),null);var c = cljs.core.nth.call(null,vec__51176,(4),null);var v = cljs.core.nth.call(null,vec__51176,(5),null);var curr = vec__51176;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__51177,p__51178){var vec__51179 = p__51177;var d1 = cljs.core.nth.call(null,vec__51179,(0),null);var _ = cljs.core.nth.call(null,vec__51179,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51179,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51179,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51179,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51179,(5),null);var prev = vec__51179;var vec__51180 = p__51178;var d2 = cljs.core.nth.call(null,vec__51180,(0),null);var o = cljs.core.nth.call(null,vec__51180,(1),null);var h = cljs.core.nth.call(null,vec__51180,(2),null);var l = cljs.core.nth.call(null,vec__51180,(3),null);var c = cljs.core.nth.call(null,vec__51180,(4),null);var v = cljs.core.nth.call(null,vec__51180,(5),null);var curr = vec__51180;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__51181){var vec__51182 = p__51181;var d = cljs.core.nth.call(null,vec__51182,(0),null);var o = cljs.core.nth.call(null,vec__51182,(1),null);var h = cljs.core.nth.call(null,vec__51182,(2),null);var l = cljs.core.nth.call(null,vec__51182,(3),null);var c = cljs.core.nth.call(null,vec__51182,(4),null);var v = cljs.core.nth.call(null,vec__51182,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__51183){var vec__51184 = p__51183;var d = cljs.core.nth.call(null,vec__51184,(0),null);var o = cljs.core.nth.call(null,vec__51184,(1),null);var h = cljs.core.nth.call(null,vec__51184,(2),null);var l = cljs.core.nth.call(null,vec__51184,(3),null);var c = cljs.core.nth.call(null,vec__51184,(4),null);var v = cljs.core.nth.call(null,vec__51184,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__51193(s__51194){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__51194__$1 = s__51194;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51194__$1);if(temp__4126__auto__)
{var s__51194__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51194__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__51194__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__51196 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__51195 = (0);while(true){
if((i__51195 < size__4275__auto__))
{var vec__51199 = cljs.core._nth.call(null,c__4274__auto__,i__51195);var _ = cljs.core.nth.call(null,vec__51199,(0),null);var date = cljs.core.nth.call(null,vec__51199,(1),null);var open = cljs.core.nth.call(null,vec__51199,(2),null);var high = cljs.core.nth.call(null,vec__51199,(3),null);var low = cljs.core.nth.call(null,vec__51199,(4),null);var close = cljs.core.nth.call(null,vec__51199,(5),null);var volume = cljs.core.nth.call(null,vec__51199,(6),null);cljs.core.chunk_append.call(null,b__51196,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__51201 = (i__51195 + (1));
i__51195 = G__51201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51196),iter__51193.call(null,cljs.core.chunk_rest.call(null,s__51194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51196),null);
}
} else
{var vec__51200 = cljs.core.first.call(null,s__51194__$2);var _ = cljs.core.nth.call(null,vec__51200,(0),null);var date = cljs.core.nth.call(null,vec__51200,(1),null);var open = cljs.core.nth.call(null,vec__51200,(2),null);var high = cljs.core.nth.call(null,vec__51200,(3),null);var low = cljs.core.nth.call(null,vec__51200,(4),null);var close = cljs.core.nth.call(null,vec__51200,(5),null);var volume = cljs.core.nth.call(null,vec__51200,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__51193.call(null,cljs.core.rest.call(null,s__51194__$2)));
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
return (function (state_51279){var state_val_51280 = (state_51279[(1)]);if((state_val_51280 === (9)))
{var inst_51269 = (state_51279[(2)]);var state_51279__$1 = state_51279;var statearr_51281_51298 = state_51279__$1;(statearr_51281_51298[(2)] = inst_51269);
(statearr_51281_51298[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51280 === (8)))
{var inst_51275 = (state_51279[(2)]);var state_51279__$1 = state_51279;var statearr_51282_51299 = state_51279__$1;(statearr_51282_51299[(2)] = inst_51275);
(statearr_51282_51299[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51280 === (7)))
{var inst_51261 = (state_51279[(7)]);var inst_51271 = cljs.core.concat.call(null,all,inst_51261);var inst_51272 = [null,inst_51271];var inst_51273 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51272,null));var state_51279__$1 = state_51279;var statearr_51283_51300 = state_51279__$1;(statearr_51283_51300[(2)] = inst_51273);
(statearr_51283_51300[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51280 === (6)))
{var inst_51261 = (state_51279[(7)]);var inst_51265 = cljs.core.concat.call(null,all,inst_51261);var inst_51266 = (start + num);var inst_51267 = goog_historical_info.call(null,inst_51265,id,startdate,inst_51266,num);var state_51279__$1 = state_51279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51279__$1,(9),inst_51267);
} else
{if((state_val_51280 === (5)))
{var inst_51277 = (state_51279[(2)]);var state_51279__$1 = state_51279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51279__$1,inst_51277);
} else
{if((state_val_51280 === (4)))
{var inst_51256 = (state_51279[(8)]);var inst_51261 = (state_51279[(7)]);var inst_51261__$1 = stock.tool.parse_historical.call(null,inst_51256);var inst_51262 = cljs.core.count.call(null,inst_51261__$1);var inst_51263 = cljs.core._EQ_.call(null,num,inst_51262);var state_51279__$1 = (function (){var statearr_51284 = state_51279;(statearr_51284[(7)] = inst_51261__$1);
return statearr_51284;
})();if(inst_51263)
{var statearr_51285_51301 = state_51279__$1;(statearr_51285_51301[(1)] = (6));
} else
{var statearr_51286_51302 = state_51279__$1;(statearr_51286_51302[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51280 === (3)))
{var inst_51255 = (state_51279[(9)]);var inst_51258 = [inst_51255];var inst_51259 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51258,null));var state_51279__$1 = state_51279;var statearr_51287_51303 = state_51279__$1;(statearr_51287_51303[(2)] = inst_51259);
(statearr_51287_51303[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51280 === (2)))
{var inst_51255 = (state_51279[(9)]);var inst_51254 = (state_51279[(2)]);var inst_51255__$1 = cljs.core.nth.call(null,inst_51254,(0),null);var inst_51256 = cljs.core.nth.call(null,inst_51254,(1),null);var state_51279__$1 = (function (){var statearr_51288 = state_51279;(statearr_51288[(8)] = inst_51256);
(statearr_51288[(9)] = inst_51255__$1);
return statearr_51288;
})();if(cljs.core.truth_(inst_51255__$1))
{var statearr_51289_51304 = state_51279__$1;(statearr_51289_51304[(1)] = (3));
} else
{var statearr_51290_51305 = state_51279__$1;(statearr_51290_51305[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51280 === (1)))
{var inst_51251 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_51252 = stock.tool.content.call(null,inst_51251);var state_51279__$1 = state_51279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51279__$1,(2),inst_51252);
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
var state_machine__6188__auto____0 = (function (){var statearr_51294 = [null,null,null,null,null,null,null,null,null,null];(statearr_51294[(0)] = state_machine__6188__auto__);
(statearr_51294[(1)] = (1));
return statearr_51294;
});
var state_machine__6188__auto____1 = (function (state_51279){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51295){if((e51295 instanceof Object))
{var ex__6191__auto__ = e51295;var statearr_51296_51306 = state_51279;(statearr_51296_51306[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51307 = state_51279;
state_51279 = G__51307;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51279){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51297 = f__6203__auto__.call(null);(statearr_51297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__51309 = kline;var date__$1 = cljs.core.nth.call(null,vec__51309,(0),null);var _ = cljs.core.nth.call(null,vec__51309,(1),null);var ___$1 = cljs.core.nth.call(null,vec__51309,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51309,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51309,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51309,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__51311 = kline;var _ = cljs.core.nth.call(null,vec__51311,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51311,(1),null);var high__$1 = cljs.core.nth.call(null,vec__51311,(2),null);var ___$2 = cljs.core.nth.call(null,vec__51311,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51311,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51311,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__51313 = kline;var _ = cljs.core.nth.call(null,vec__51313,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51313,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51313,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51313,(3),null);var open__$1 = cljs.core.nth.call(null,vec__51313,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51313,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__51315 = kline;var _ = cljs.core.nth.call(null,vec__51315,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51315,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51315,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51315,(3),null);var close__$1 = cljs.core.nth.call(null,vec__51315,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51315,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__51317 = kline;var _ = cljs.core.nth.call(null,vec__51317,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51317,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51317,(2),null);var low__$1 = cljs.core.nth.call(null,vec__51317,(3),null);var ___$3 = cljs.core.nth.call(null,vec__51317,(4),null);var ___$4 = cljs.core.nth.call(null,vec__51317,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__51319 = kline;var _ = cljs.core.nth.call(null,vec__51319,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51319,(1),null);var ___$2 = cljs.core.nth.call(null,vec__51319,(2),null);var ___$3 = cljs.core.nth.call(null,vec__51319,(3),null);var ___$4 = cljs.core.nth.call(null,vec__51319,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__51319,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__51321 = kline;var _ = cljs.core.nth.call(null,vec__51321,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51321,(1),null);var high = cljs.core.nth.call(null,vec__51321,(2),null);var low = cljs.core.nth.call(null,vec__51321,(3),null);var ___$2 = cljs.core.nth.call(null,vec__51321,(4),null);var ___$3 = cljs.core.nth.call(null,vec__51321,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__51323 = kline;var _ = cljs.core.nth.call(null,vec__51323,(0),null);var ___$1 = cljs.core.nth.call(null,vec__51323,(1),null);var high = cljs.core.nth.call(null,vec__51323,(2),null);var low = cljs.core.nth.call(null,vec__51323,(3),null);var close = cljs.core.nth.call(null,vec__51323,(4),null);var ___$2 = cljs.core.nth.call(null,vec__51323,(5),null);return (((high + low) + close) / (3));
}
});
