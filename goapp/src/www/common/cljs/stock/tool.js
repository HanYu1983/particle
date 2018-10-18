// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj22148 = {"url":"/proxy","dataType":"text","data":(function (){var obj22150 = {"url":url};return obj22150;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_22157){var state_val_22158 = (state_22157[(1)]);if((state_val_22158 === (2)))
{var inst_22154 = (state_22157[(2)]);var inst_22155 = cljs.core.async.close_BANG_.call(null,ret);var state_22157__$1 = (function (){var statearr_22159 = state_22157;(statearr_22159[(7)] = inst_22154);
return statearr_22159;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22157__$1,inst_22155);
} else
{if((state_val_22158 === (1)))
{var inst_22151 = [null,data];var inst_22152 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22151,null));var state_22157__$1 = state_22157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22157__$1,(2),ret,inst_22152);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22163 = [null,null,null,null,null,null,null,null];(statearr_22163[(0)] = state_machine__6188__auto__);
(statearr_22163[(1)] = (1));
return statearr_22163;
});
var state_machine__6188__auto____1 = (function (state_22157){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22164){if((e22164 instanceof Object))
{var ex__6191__auto__ = e22164;var statearr_22165_22183 = state_22157;(statearr_22165_22183[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22184 = state_22157;
state_22157 = G__22184;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22157){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_22166 = f__6203__auto__.call(null);(statearr_22166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_22173){var state_val_22174 = (state_22173[(1)]);if((state_val_22174 === (2)))
{var inst_22170 = (state_22173[(2)]);var inst_22171 = cljs.core.async.close_BANG_.call(null,ret);var state_22173__$1 = (function (){var statearr_22175 = state_22173;(statearr_22175[(7)] = inst_22170);
return statearr_22175;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22173__$1,inst_22171);
} else
{if((state_val_22174 === (1)))
{var inst_22167 = [err];var inst_22168 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22167,null));var state_22173__$1 = state_22173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22173__$1,(2),ret,inst_22168);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22179 = [null,null,null,null,null,null,null,null];(statearr_22179[(0)] = state_machine__6188__auto__);
(statearr_22179[(1)] = (1));
return statearr_22179;
});
var state_machine__6188__auto____1 = (function (state_22173){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22180){if((e22180 instanceof Object))
{var ex__6191__auto__ = e22180;var statearr_22181_22185 = state_22173;(statearr_22181_22185[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22186 = state_22173;
state_22173 = G__22186;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22173){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_22182 = f__6203__auto__.call(null);(statearr_22182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj22148;
})());
return ret;
});
stock.tool.goog_finance_info_url = (function goog_finance_info_url(id){return ("https://www.google.com/finance/info?infotype=infoquoteall&q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
stock.tool.parse_info = (function parse_info(content){try{var json = (JSON.parse(content)[(0)]);var date = (new Date(json.lt_dts)).toString();var volume = (parseFloat(json.vo.replace(/M/,"")) * (1000000));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e22188){if((e22188 instanceof Object))
{var e = e22188;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22188;
} else
{return null;
}
}
}});
stock.tool.todayPrice = (function todayPrice(id){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_22239){var state_val_22240 = (state_22239[(1)]);if((state_val_22240 === (5)))
{var inst_22237 = (state_22239[(2)]);var state_22239__$1 = state_22239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22239__$1,inst_22237);
} else
{if((state_val_22240 === (4)))
{var inst_22228 = (state_22239[(7)]);var inst_22233 = stock.tool.parse_info.call(null,inst_22228);var inst_22234 = [null,inst_22233];var inst_22235 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22234,null));var state_22239__$1 = state_22239;var statearr_22241_22253 = state_22239__$1;(statearr_22241_22253[(2)] = inst_22235);
(statearr_22241_22253[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22240 === (3)))
{var inst_22226 = (state_22239[(8)]);var inst_22230 = [inst_22226];var inst_22231 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22230,null));var state_22239__$1 = state_22239;var statearr_22242_22254 = state_22239__$1;(statearr_22242_22254[(2)] = inst_22231);
(statearr_22242_22254[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22240 === (2)))
{var inst_22226 = (state_22239[(8)]);var inst_22225 = (state_22239[(2)]);var inst_22226__$1 = cljs.core.nth.call(null,inst_22225,(0),null);var inst_22227 = cljs.core.nth.call(null,inst_22225,(1),null);var inst_22228 = inst_22227.replace(/\/\//,"");var state_22239__$1 = (function (){var statearr_22243 = state_22239;(statearr_22243[(7)] = inst_22228);
(statearr_22243[(8)] = inst_22226__$1);
return statearr_22243;
})();if(cljs.core.truth_(inst_22226__$1))
{var statearr_22244_22255 = state_22239__$1;(statearr_22244_22255[(1)] = (3));
} else
{var statearr_22245_22256 = state_22239__$1;(statearr_22245_22256[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22240 === (1)))
{var inst_22222 = stock.tool.goog_finance_info_url.call(null,id);var inst_22223 = stock.tool.content.call(null,inst_22222);var state_22239__$1 = state_22239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22239__$1,(2),inst_22223);
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
var state_machine__6188__auto____0 = (function (){var statearr_22249 = [null,null,null,null,null,null,null,null,null];(statearr_22249[(0)] = state_machine__6188__auto__);
(statearr_22249[(1)] = (1));
return statearr_22249;
});
var state_machine__6188__auto____1 = (function (state_22239){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22239);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22250){if((e22250 instanceof Object))
{var ex__6191__auto__ = e22250;var statearr_22251_22257 = state_22239;(statearr_22251_22257[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22258 = state_22239;
state_22239 = G__22258;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22239){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22252 = f__6203__auto__.call(null);(statearr_22252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 結合今天，如果今天已經抓到，就不結合
*/
stock.tool.combineToday = (function combineToday(todayLine,li){if(cljs.core.truth_(todayLine))
{var vec__22261 = cljs.core.first.call(null,li);var maybe_today = cljs.core.nth.call(null,vec__22261,(0),null);var _ = cljs.core.nth.call(null,vec__22261,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22261,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22261,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22261,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22261,(5),null);var vec__22262 = todayLine;var today_date = cljs.core.nth.call(null,vec__22262,(0),null);var ___$5 = cljs.core.nth.call(null,vec__22262,(1),null);var ___$6 = cljs.core.nth.call(null,vec__22262,(2),null);var ___$7 = cljs.core.nth.call(null,vec__22262,(3),null);var ___$8 = cljs.core.nth.call(null,vec__22262,(4),null);var ___$9 = cljs.core.nth.call(null,vec__22262,(5),null);if(cljs.core.not.call(null,(new Date(today_date)).clearTime().equals((new Date(maybe_today)).clearTime())))
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
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),content.replace(/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__22271(s__22272){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__22272__$1 = s__22272;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22272__$1);if(temp__4126__auto__)
{var s__22272__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22272__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22272__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22274 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22273 = (0);while(true){
if((i__22273 < size__4275__auto__))
{var vec__22277 = cljs.core._nth.call(null,c__4274__auto__,i__22273);var _ = cljs.core.nth.call(null,vec__22277,(0),null);var date = cljs.core.nth.call(null,vec__22277,(1),null);var close = cljs.core.nth.call(null,vec__22277,(2),null);var high = cljs.core.nth.call(null,vec__22277,(3),null);var low = cljs.core.nth.call(null,vec__22277,(4),null);var open = cljs.core.nth.call(null,vec__22277,(5),null);var volume = cljs.core.nth.call(null,vec__22277,(6),null);cljs.core.chunk_append.call(null,b__22274,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__22279 = (i__22273 + (1));
i__22273 = G__22279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22274),iter__22271.call(null,cljs.core.chunk_rest.call(null,s__22272__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22274),null);
}
} else
{var vec__22278 = cljs.core.first.call(null,s__22272__$2);var _ = cljs.core.nth.call(null,vec__22278,(0),null);var date = cljs.core.nth.call(null,vec__22278,(1),null);var close = cljs.core.nth.call(null,vec__22278,(2),null);var high = cljs.core.nth.call(null,vec__22278,(3),null);var low = cljs.core.nth.call(null,vec__22278,(4),null);var open = cljs.core.nth.call(null,vec__22278,(5),null);var volume = cljs.core.nth.call(null,vec__22278,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__22271.call(null,cljs.core.rest.call(null,s__22272__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__22294){var vec__22295 = p__22294;var d = cljs.core.nth.call(null,vec__22295,(0),null);var o = cljs.core.nth.call(null,vec__22295,(1),null);var h = cljs.core.nth.call(null,vec__22295,(2),null);var l = cljs.core.nth.call(null,vec__22295,(3),null);var c = cljs.core.nth.call(null,vec__22295,(4),null);var v = cljs.core.nth.call(null,vec__22295,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__22296,p__22297){var vec__22298 = p__22296;var d1 = cljs.core.nth.call(null,vec__22298,(0),null);var _ = cljs.core.nth.call(null,vec__22298,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22298,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22298,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22298,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22298,(5),null);var prev = vec__22298;var vec__22299 = p__22297;var d2 = cljs.core.nth.call(null,vec__22299,(0),null);var o = cljs.core.nth.call(null,vec__22299,(1),null);var h = cljs.core.nth.call(null,vec__22299,(2),null);var l = cljs.core.nth.call(null,vec__22299,(3),null);var c = cljs.core.nth.call(null,vec__22299,(4),null);var v = cljs.core.nth.call(null,vec__22299,(5),null);var curr = vec__22299;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__22300,p__22301){var vec__22302 = p__22300;var d1 = cljs.core.nth.call(null,vec__22302,(0),null);var _ = cljs.core.nth.call(null,vec__22302,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22302,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22302,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22302,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22302,(5),null);var prev = vec__22302;var vec__22303 = p__22301;var d2 = cljs.core.nth.call(null,vec__22303,(0),null);var o = cljs.core.nth.call(null,vec__22303,(1),null);var h = cljs.core.nth.call(null,vec__22303,(2),null);var l = cljs.core.nth.call(null,vec__22303,(3),null);var c = cljs.core.nth.call(null,vec__22303,(4),null);var v = cljs.core.nth.call(null,vec__22303,(5),null);var curr = vec__22303;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__22304){var vec__22305 = p__22304;var d = cljs.core.nth.call(null,vec__22305,(0),null);var o = cljs.core.nth.call(null,vec__22305,(1),null);var h = cljs.core.nth.call(null,vec__22305,(2),null);var l = cljs.core.nth.call(null,vec__22305,(3),null);var c = cljs.core.nth.call(null,vec__22305,(4),null);var v = cljs.core.nth.call(null,vec__22305,(5),null);return true;
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__22306){var vec__22307 = p__22306;var d = cljs.core.nth.call(null,vec__22307,(0),null);var o = cljs.core.nth.call(null,vec__22307,(1),null);var h = cljs.core.nth.call(null,vec__22307,(2),null);var l = cljs.core.nth.call(null,vec__22307,(3),null);var c = cljs.core.nth.call(null,vec__22307,(4),null);var v = cljs.core.nth.call(null,vec__22307,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.get_goog_stock_prices = (function get_goog_stock_prices(id,range){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_22371){var state_val_22372 = (state_22371[(1)]);if((state_val_22372 === (6)))
{var inst_22363 = (state_22371[(7)]);var inst_22367 = (state_22371[(2)]);var inst_22368 = [inst_22367,inst_22363];var inst_22369 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22368,null));var state_22371__$1 = state_22371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22371__$1,inst_22369);
} else
{if((state_val_22372 === (5)))
{var inst_22358 = (state_22371[(8)]);var state_22371__$1 = state_22371;var statearr_22373_22386 = state_22371__$1;(statearr_22373_22386[(2)] = inst_22358);
(statearr_22373_22386[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22372 === (4)))
{var inst_22353 = (state_22371[(9)]);var state_22371__$1 = state_22371;var statearr_22374_22387 = state_22371__$1;(statearr_22374_22387[(2)] = inst_22353);
(statearr_22374_22387[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22372 === (3)))
{var inst_22354 = (state_22371[(10)]);var inst_22353 = (state_22371[(9)]);var inst_22357 = (state_22371[(2)]);var inst_22358 = cljs.core.nth.call(null,inst_22357,(0),null);var inst_22359 = cljs.core.nth.call(null,inst_22357,(1),null);var inst_22360 = stock.tool.parse_getprices.call(null,inst_22354);var inst_22361 = stock.tool.format_getprices.call(null,(86400),inst_22360);var inst_22362 = cljs.core.reverse.call(null,inst_22361);var inst_22363 = stock.tool.combineToday.call(null,inst_22359,inst_22362);var state_22371__$1 = (function (){var statearr_22375 = state_22371;(statearr_22375[(7)] = inst_22363);
(statearr_22375[(8)] = inst_22358);
return statearr_22375;
})();if(cljs.core.truth_(inst_22353))
{var statearr_22376_22388 = state_22371__$1;(statearr_22376_22388[(1)] = (4));
} else
{var statearr_22377_22389 = state_22371__$1;(statearr_22377_22389[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22372 === (2)))
{var inst_22352 = (state_22371[(2)]);var inst_22353 = cljs.core.nth.call(null,inst_22352,(0),null);var inst_22354 = cljs.core.nth.call(null,inst_22352,(1),null);var inst_22355 = stock.tool.todayPrice.call(null,id);var state_22371__$1 = (function (){var statearr_22378 = state_22371;(statearr_22378[(10)] = inst_22354);
(statearr_22378[(9)] = inst_22353);
return statearr_22378;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22371__$1,(3),inst_22355);
} else
{if((state_val_22372 === (1)))
{var inst_22349 = stock.tool.goog_finance_getprices_url.call(null,id,range);var inst_22350 = stock.tool.content.call(null,inst_22349);var state_22371__$1 = state_22371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22371__$1,(2),inst_22350);
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
var state_machine__6188__auto____0 = (function (){var statearr_22382 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22382[(0)] = state_machine__6188__auto__);
(statearr_22382[(1)] = (1));
return statearr_22382;
});
var state_machine__6188__auto____1 = (function (state_22371){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22383){if((e22383 instanceof Object))
{var ex__6191__auto__ = e22383;var statearr_22384_22390 = state_22371;(statearr_22384_22390[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22391 = state_22371;
state_22371 = G__22391;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22371){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22385 = f__6203__auto__.call(null);(statearr_22385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),content.replace(/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__22400(s__22401){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__22401__$1 = s__22401;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22401__$1);if(temp__4126__auto__)
{var s__22401__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22401__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__22401__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__22403 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__22402 = (0);while(true){
if((i__22402 < size__4275__auto__))
{var vec__22406 = cljs.core._nth.call(null,c__4274__auto__,i__22402);var _ = cljs.core.nth.call(null,vec__22406,(0),null);var date = cljs.core.nth.call(null,vec__22406,(1),null);var open = cljs.core.nth.call(null,vec__22406,(2),null);var high = cljs.core.nth.call(null,vec__22406,(3),null);var low = cljs.core.nth.call(null,vec__22406,(4),null);var close = cljs.core.nth.call(null,vec__22406,(5),null);var volume = cljs.core.nth.call(null,vec__22406,(6),null);cljs.core.chunk_append.call(null,b__22403,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null));
{
var G__22408 = (i__22402 + (1));
i__22402 = G__22408;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22403),iter__22400.call(null,cljs.core.chunk_rest.call(null,s__22401__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22403),null);
}
} else
{var vec__22407 = cljs.core.first.call(null,s__22401__$2);var _ = cljs.core.nth.call(null,vec__22407,(0),null);var date = cljs.core.nth.call(null,vec__22407,(1),null);var open = cljs.core.nth.call(null,vec__22407,(2),null);var high = cljs.core.nth.call(null,vec__22407,(3),null);var low = cljs.core.nth.call(null,vec__22407,(4),null);var close = cljs.core.nth.call(null,vec__22407,(5),null);var volume = cljs.core.nth.call(null,vec__22407,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null),iter__22400.call(null,cljs.core.rest.call(null,s__22401__$2)));
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
return (function (state_22486){var state_val_22487 = (state_22486[(1)]);if((state_val_22487 === (9)))
{var inst_22476 = (state_22486[(2)]);var state_22486__$1 = state_22486;var statearr_22488_22505 = state_22486__$1;(statearr_22488_22505[(2)] = inst_22476);
(statearr_22488_22505[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22487 === (8)))
{var inst_22482 = (state_22486[(2)]);var state_22486__$1 = state_22486;var statearr_22489_22506 = state_22486__$1;(statearr_22489_22506[(2)] = inst_22482);
(statearr_22489_22506[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22487 === (7)))
{var inst_22468 = (state_22486[(7)]);var inst_22478 = cljs.core.concat.call(null,all,inst_22468);var inst_22479 = [null,inst_22478];var inst_22480 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22479,null));var state_22486__$1 = state_22486;var statearr_22490_22507 = state_22486__$1;(statearr_22490_22507[(2)] = inst_22480);
(statearr_22490_22507[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22487 === (6)))
{var inst_22468 = (state_22486[(7)]);var inst_22472 = cljs.core.concat.call(null,all,inst_22468);var inst_22473 = (start + num);var inst_22474 = goog_historical_info.call(null,inst_22472,id,startdate,inst_22473,num);var state_22486__$1 = state_22486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22486__$1,(9),inst_22474);
} else
{if((state_val_22487 === (5)))
{var inst_22484 = (state_22486[(2)]);var state_22486__$1 = state_22486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22486__$1,inst_22484);
} else
{if((state_val_22487 === (4)))
{var inst_22463 = (state_22486[(8)]);var inst_22468 = (state_22486[(7)]);var inst_22468__$1 = stock.tool.parse_historical.call(null,inst_22463);var inst_22469 = cljs.core.count.call(null,inst_22468__$1);var inst_22470 = cljs.core._EQ_.call(null,num,inst_22469);var state_22486__$1 = (function (){var statearr_22491 = state_22486;(statearr_22491[(7)] = inst_22468__$1);
return statearr_22491;
})();if(inst_22470)
{var statearr_22492_22508 = state_22486__$1;(statearr_22492_22508[(1)] = (6));
} else
{var statearr_22493_22509 = state_22486__$1;(statearr_22493_22509[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22487 === (3)))
{var inst_22462 = (state_22486[(9)]);var inst_22465 = [inst_22462];var inst_22466 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22465,null));var state_22486__$1 = state_22486;var statearr_22494_22510 = state_22486__$1;(statearr_22494_22510[(2)] = inst_22466);
(statearr_22494_22510[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22487 === (2)))
{var inst_22462 = (state_22486[(9)]);var inst_22461 = (state_22486[(2)]);var inst_22462__$1 = cljs.core.nth.call(null,inst_22461,(0),null);var inst_22463 = cljs.core.nth.call(null,inst_22461,(1),null);var state_22486__$1 = (function (){var statearr_22495 = state_22486;(statearr_22495[(9)] = inst_22462__$1);
(statearr_22495[(8)] = inst_22463);
return statearr_22495;
})();if(cljs.core.truth_(inst_22462__$1))
{var statearr_22496_22511 = state_22486__$1;(statearr_22496_22511[(1)] = (3));
} else
{var statearr_22497_22512 = state_22486__$1;(statearr_22497_22512[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22487 === (1)))
{var inst_22458 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_22459 = stock.tool.content.call(null,inst_22458);var state_22486__$1 = state_22486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22486__$1,(2),inst_22459);
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
var state_machine__6188__auto____0 = (function (){var statearr_22501 = [null,null,null,null,null,null,null,null,null,null];(statearr_22501[(0)] = state_machine__6188__auto__);
(statearr_22501[(1)] = (1));
return statearr_22501;
});
var state_machine__6188__auto____1 = (function (state_22486){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22486);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22502){if((e22502 instanceof Object))
{var ex__6191__auto__ = e22502;var statearr_22503_22513 = state_22486;(statearr_22503_22513[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22514 = state_22486;
state_22486 = G__22514;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22486){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22504 = f__6203__auto__.call(null);(statearr_22504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__22516 = kline;var date__$1 = cljs.core.nth.call(null,vec__22516,(0),null);var _ = cljs.core.nth.call(null,vec__22516,(1),null);var ___$1 = cljs.core.nth.call(null,vec__22516,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22516,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22516,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22516,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__22518 = kline;var _ = cljs.core.nth.call(null,vec__22518,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22518,(1),null);var high__$1 = cljs.core.nth.call(null,vec__22518,(2),null);var ___$2 = cljs.core.nth.call(null,vec__22518,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22518,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22518,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__22520 = kline;var _ = cljs.core.nth.call(null,vec__22520,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22520,(1),null);var ___$2 = cljs.core.nth.call(null,vec__22520,(2),null);var ___$3 = cljs.core.nth.call(null,vec__22520,(3),null);var open__$1 = cljs.core.nth.call(null,vec__22520,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22520,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__22522 = kline;var _ = cljs.core.nth.call(null,vec__22522,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22522,(1),null);var ___$2 = cljs.core.nth.call(null,vec__22522,(2),null);var ___$3 = cljs.core.nth.call(null,vec__22522,(3),null);var close__$1 = cljs.core.nth.call(null,vec__22522,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22522,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__22524 = kline;var _ = cljs.core.nth.call(null,vec__22524,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22524,(1),null);var ___$2 = cljs.core.nth.call(null,vec__22524,(2),null);var low__$1 = cljs.core.nth.call(null,vec__22524,(3),null);var ___$3 = cljs.core.nth.call(null,vec__22524,(4),null);var ___$4 = cljs.core.nth.call(null,vec__22524,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__22526 = kline;var _ = cljs.core.nth.call(null,vec__22526,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22526,(1),null);var ___$2 = cljs.core.nth.call(null,vec__22526,(2),null);var ___$3 = cljs.core.nth.call(null,vec__22526,(3),null);var ___$4 = cljs.core.nth.call(null,vec__22526,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__22526,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__22528 = kline;var _ = cljs.core.nth.call(null,vec__22528,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22528,(1),null);var high = cljs.core.nth.call(null,vec__22528,(2),null);var low = cljs.core.nth.call(null,vec__22528,(3),null);var ___$2 = cljs.core.nth.call(null,vec__22528,(4),null);var ___$3 = cljs.core.nth.call(null,vec__22528,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__22530 = kline;var _ = cljs.core.nth.call(null,vec__22530,(0),null);var ___$1 = cljs.core.nth.call(null,vec__22530,(1),null);var high = cljs.core.nth.call(null,vec__22530,(2),null);var low = cljs.core.nth.call(null,vec__22530,(3),null);var close = cljs.core.nth.call(null,vec__22530,(4),null);var ___$2 = cljs.core.nth.call(null,vec__22530,(5),null);return (((high + low) + close) / (3));
}
});
