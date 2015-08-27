// Compiled by ClojureScript 0.0-2268
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
stock.tool.goog_finance_getprices_url = (function goog_finance_getprices_url(id,ran){return ("https://www.google.com/finance/getprices?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&x=TPE&i=86400&p="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran)+"&f=d,c,h,l,o,v");
});
stock.tool.parse_getprices = (function parse_getprices(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)")),clojure.string.replace.call(null,content,/\n/," "));var iter__4276__auto__ = ((function (infos){
return (function iter__38082(s__38083){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__38083__$1 = s__38083;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38083__$1);if(temp__4126__auto__)
{var s__38083__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38083__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__38083__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__38085 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__38084 = (0);while(true){
if((i__38084 < size__4275__auto__))
{var vec__38088 = cljs.core._nth.call(null,c__4274__auto__,i__38084);var _ = cljs.core.nth.call(null,vec__38088,(0),null);var date = cljs.core.nth.call(null,vec__38088,(1),null);var close = cljs.core.nth.call(null,vec__38088,(2),null);var high = cljs.core.nth.call(null,vec__38088,(3),null);var low = cljs.core.nth.call(null,vec__38088,(4),null);var open = cljs.core.nth.call(null,vec__38088,(5),null);var volume = cljs.core.nth.call(null,vec__38088,(6),null);cljs.core.chunk_append.call(null,b__38085,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));
{
var G__38090 = (i__38084 + (1));
i__38084 = G__38090;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38085),iter__38082.call(null,cljs.core.chunk_rest.call(null,s__38083__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38085),null);
}
} else
{var vec__38089 = cljs.core.first.call(null,s__38083__$2);var _ = cljs.core.nth.call(null,vec__38089,(0),null);var date = cljs.core.nth.call(null,vec__38089,(1),null);var close = cljs.core.nth.call(null,vec__38089,(2),null);var high = cljs.core.nth.call(null,vec__38089,(3),null);var low = cljs.core.nth.call(null,vec__38089,(4),null);var open = cljs.core.nth.call(null,vec__38089,(5),null);var volume = cljs.core.nth.call(null,vec__38089,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),iter__38082.call(null,cljs.core.rest.call(null,s__38083__$2)));
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
stock.tool.format_getprices = (function format_getprices(interval,data){var pass1 = cljs.core.map.call(null,(function (p__38105){var vec__38106 = p__38105;var d = cljs.core.nth.call(null,vec__38106,(0),null);var o = cljs.core.nth.call(null,vec__38106,(1),null);var h = cljs.core.nth.call(null,vec__38106,(2),null);var l = cljs.core.nth.call(null,vec__38106,(3),null);var c = cljs.core.nth.call(null,vec__38106,(4),null);var v = cljs.core.nth.call(null,vec__38106,(5),null);if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d)))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__38107,p__38108){var vec__38109 = p__38107;var d1 = cljs.core.nth.call(null,vec__38109,(0),null);var _ = cljs.core.nth.call(null,vec__38109,(1),null);var ___$1 = cljs.core.nth.call(null,vec__38109,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38109,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38109,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38109,(5),null);var prev = vec__38109;var vec__38110 = p__38108;var d2 = cljs.core.nth.call(null,vec__38110,(0),null);var o = cljs.core.nth.call(null,vec__38110,(1),null);var h = cljs.core.nth.call(null,vec__38110,(2),null);var l = cljs.core.nth.call(null,vec__38110,(3),null);var c = cljs.core.nth.call(null,vec__38110,(4),null);var v = cljs.core.nth.call(null,vec__38110,(5),null);var curr = vec__38110;if((typeof d1 === 'string') && (typeof d2 === 'string'))
{var offset = (parseInt(d2) - parseInt(d1));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__38111,p__38112){var vec__38113 = p__38111;var d1 = cljs.core.nth.call(null,vec__38113,(0),null);var _ = cljs.core.nth.call(null,vec__38113,(1),null);var ___$1 = cljs.core.nth.call(null,vec__38113,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38113,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38113,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38113,(5),null);var prev = vec__38113;var vec__38114 = p__38112;var d2 = cljs.core.nth.call(null,vec__38114,(0),null);var o = cljs.core.nth.call(null,vec__38114,(1),null);var h = cljs.core.nth.call(null,vec__38114,(2),null);var l = cljs.core.nth.call(null,vec__38114,(3),null);var c = cljs.core.nth.call(null,vec__38114,(4),null);var v = cljs.core.nth.call(null,vec__38114,(5),null);var curr = vec__38114;if((typeof d1 === 'number') && (typeof d2 === 'string'))
{var n = parseInt(d2);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else
{return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__38115){var vec__38116 = p__38115;var d = cljs.core.nth.call(null,vec__38116,(0),null);var o = cljs.core.nth.call(null,vec__38116,(1),null);var h = cljs.core.nth.call(null,vec__38116,(2),null);var l = cljs.core.nth.call(null,vec__38116,(3),null);var c = cljs.core.nth.call(null,vec__38116,(4),null);var v = cljs.core.nth.call(null,vec__38116,(5),null);var date = (new Date((d * (1000))));return (cljs.core.not_EQ_.call(null,date.getFullYear(),(2014))) || (cljs.core.not_EQ_.call(null,date.getMonth(),((12) - (1)))) || (cljs.core.not_EQ_.call(null,date.getDate(),(27)));
});})(pass1,pass2,pass3))
,pass3);var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__38117){var vec__38118 = p__38117;var d = cljs.core.nth.call(null,vec__38118,(0),null);var o = cljs.core.nth.call(null,vec__38118,(1),null);var h = cljs.core.nth.call(null,vec__38118,(2),null);var l = cljs.core.nth.call(null,vec__38118,(3),null);var c = cljs.core.nth.call(null,vec__38118,(4),null);var v = cljs.core.nth.call(null,vec__38118,(5),null);var date = (new Date((d * (1000))));return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);return pass5;
});
stock.tool.goog_finance_historical_url = (function goog_finance_historical_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
stock.tool.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj38156 = {"url":"/proxy","dataType":"text","data":(function (){var obj38158 = {"url":url};return obj38158;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_38165){var state_val_38166 = (state_38165[(1)]);if((state_val_38166 === (2)))
{var inst_38162 = (state_38165[(2)]);var inst_38163 = cljs.core.async.close_BANG_.call(null,ret);var state_38165__$1 = (function (){var statearr_38167 = state_38165;(statearr_38167[(7)] = inst_38162);
return statearr_38167;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38165__$1,inst_38163);
} else
{if((state_val_38166 === (1)))
{var inst_38159 = [null,data];var inst_38160 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38159,null));var state_38165__$1 = state_38165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38165__$1,(2),ret,inst_38160);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38171 = [null,null,null,null,null,null,null,null];(statearr_38171[(0)] = state_machine__6188__auto__);
(statearr_38171[(1)] = (1));
return statearr_38171;
});
var state_machine__6188__auto____1 = (function (state_38165){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38172){if((e38172 instanceof Object))
{var ex__6191__auto__ = e38172;var statearr_38173_38191 = state_38165;(statearr_38173_38191[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38165);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38192 = state_38165;
state_38165 = G__38192;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38165){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_38174 = f__6203__auto__.call(null);(statearr_38174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_38181){var state_val_38182 = (state_38181[(1)]);if((state_val_38182 === (2)))
{var inst_38178 = (state_38181[(2)]);var inst_38179 = cljs.core.async.close_BANG_.call(null,ret);var state_38181__$1 = (function (){var statearr_38183 = state_38181;(statearr_38183[(7)] = inst_38178);
return statearr_38183;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38181__$1,inst_38179);
} else
{if((state_val_38182 === (1)))
{var inst_38175 = [err];var inst_38176 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38175,null));var state_38181__$1 = state_38181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38181__$1,(2),ret,inst_38176);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38187 = [null,null,null,null,null,null,null,null];(statearr_38187[(0)] = state_machine__6188__auto__);
(statearr_38187[(1)] = (1));
return statearr_38187;
});
var state_machine__6188__auto____1 = (function (state_38181){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38181);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38188){if((e38188 instanceof Object))
{var ex__6191__auto__ = e38188;var statearr_38189_38193 = state_38181;(statearr_38189_38193[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38194 = state_38181;
state_38181 = G__38194;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38181){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_38190 = f__6203__auto__.call(null);(statearr_38190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj38156;
})());
return ret;
});
stock.tool.parse_historical = (function parse_historical(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__38203(s__38204){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__38204__$1 = s__38204;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38204__$1);if(temp__4126__auto__)
{var s__38204__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38204__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__38204__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__38206 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__38205 = (0);while(true){
if((i__38205 < size__4275__auto__))
{var vec__38209 = cljs.core._nth.call(null,c__4274__auto__,i__38205);var _ = cljs.core.nth.call(null,vec__38209,(0),null);var date = cljs.core.nth.call(null,vec__38209,(1),null);var open = cljs.core.nth.call(null,vec__38209,(2),null);var high = cljs.core.nth.call(null,vec__38209,(3),null);var low = cljs.core.nth.call(null,vec__38209,(4),null);var close = cljs.core.nth.call(null,vec__38209,(5),null);var volume = cljs.core.nth.call(null,vec__38209,(6),null);cljs.core.chunk_append.call(null,b__38206,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__38211 = (i__38205 + (1));
i__38205 = G__38211;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38206),iter__38203.call(null,cljs.core.chunk_rest.call(null,s__38204__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38206),null);
}
} else
{var vec__38210 = cljs.core.first.call(null,s__38204__$2);var _ = cljs.core.nth.call(null,vec__38210,(0),null);var date = cljs.core.nth.call(null,vec__38210,(1),null);var open = cljs.core.nth.call(null,vec__38210,(2),null);var high = cljs.core.nth.call(null,vec__38210,(3),null);var low = cljs.core.nth.call(null,vec__38210,(4),null);var close = cljs.core.nth.call(null,vec__38210,(5),null);var volume = cljs.core.nth.call(null,vec__38210,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__38203.call(null,cljs.core.rest.call(null,s__38204__$2)));
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
return (function (state_38289){var state_val_38290 = (state_38289[(1)]);if((state_val_38290 === (9)))
{var inst_38279 = (state_38289[(2)]);var state_38289__$1 = state_38289;var statearr_38291_38308 = state_38289__$1;(statearr_38291_38308[(2)] = inst_38279);
(statearr_38291_38308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38290 === (8)))
{var inst_38285 = (state_38289[(2)]);var state_38289__$1 = state_38289;var statearr_38292_38309 = state_38289__$1;(statearr_38292_38309[(2)] = inst_38285);
(statearr_38292_38309[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38290 === (7)))
{var inst_38271 = (state_38289[(7)]);var inst_38281 = cljs.core.concat.call(null,all,inst_38271);var inst_38282 = [null,inst_38281];var inst_38283 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38282,null));var state_38289__$1 = state_38289;var statearr_38293_38310 = state_38289__$1;(statearr_38293_38310[(2)] = inst_38283);
(statearr_38293_38310[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38290 === (6)))
{var inst_38271 = (state_38289[(7)]);var inst_38275 = cljs.core.concat.call(null,all,inst_38271);var inst_38276 = (start + num);var inst_38277 = goog_historical_info.call(null,inst_38275,id,startdate,inst_38276,num);var state_38289__$1 = state_38289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38289__$1,(9),inst_38277);
} else
{if((state_val_38290 === (5)))
{var inst_38287 = (state_38289[(2)]);var state_38289__$1 = state_38289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38289__$1,inst_38287);
} else
{if((state_val_38290 === (4)))
{var inst_38271 = (state_38289[(7)]);var inst_38266 = (state_38289[(8)]);var inst_38271__$1 = stock.tool.parse_historical.call(null,inst_38266);var inst_38272 = cljs.core.count.call(null,inst_38271__$1);var inst_38273 = cljs.core._EQ_.call(null,num,inst_38272);var state_38289__$1 = (function (){var statearr_38294 = state_38289;(statearr_38294[(7)] = inst_38271__$1);
return statearr_38294;
})();if(inst_38273)
{var statearr_38295_38311 = state_38289__$1;(statearr_38295_38311[(1)] = (6));
} else
{var statearr_38296_38312 = state_38289__$1;(statearr_38296_38312[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38290 === (3)))
{var inst_38265 = (state_38289[(9)]);var inst_38268 = [inst_38265];var inst_38269 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38268,null));var state_38289__$1 = state_38289;var statearr_38297_38313 = state_38289__$1;(statearr_38297_38313[(2)] = inst_38269);
(statearr_38297_38313[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38290 === (2)))
{var inst_38265 = (state_38289[(9)]);var inst_38264 = (state_38289[(2)]);var inst_38265__$1 = cljs.core.nth.call(null,inst_38264,(0),null);var inst_38266 = cljs.core.nth.call(null,inst_38264,(1),null);var state_38289__$1 = (function (){var statearr_38298 = state_38289;(statearr_38298[(9)] = inst_38265__$1);
(statearr_38298[(8)] = inst_38266);
return statearr_38298;
})();if(cljs.core.truth_(inst_38265__$1))
{var statearr_38299_38314 = state_38289__$1;(statearr_38299_38314[(1)] = (3));
} else
{var statearr_38300_38315 = state_38289__$1;(statearr_38300_38315[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38290 === (1)))
{var inst_38261 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);var inst_38262 = stock.tool.content.call(null,inst_38261);var state_38289__$1 = state_38289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38289__$1,(2),inst_38262);
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
var state_machine__6188__auto____0 = (function (){var statearr_38304 = [null,null,null,null,null,null,null,null,null,null];(statearr_38304[(0)] = state_machine__6188__auto__);
(statearr_38304[(1)] = (1));
return statearr_38304;
});
var state_machine__6188__auto____1 = (function (state_38289){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38289);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38305){if((e38305 instanceof Object))
{var ex__6191__auto__ = e38305;var statearr_38306_38316 = state_38289;(statearr_38306_38316[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38317 = state_38289;
state_38289 = G__38317;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38289){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_38307 = f__6203__auto__.call(null);(statearr_38307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
stock.tool.date = (function date(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,date,kline);
} else
{var vec__38319 = kline;var date__$1 = cljs.core.nth.call(null,vec__38319,(0),null);var _ = cljs.core.nth.call(null,vec__38319,(1),null);var ___$1 = cljs.core.nth.call(null,vec__38319,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38319,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38319,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38319,(5),null);return date__$1;
}
});
stock.tool.high = (function high(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,high,kline);
} else
{var vec__38321 = kline;var _ = cljs.core.nth.call(null,vec__38321,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38321,(1),null);var high__$1 = cljs.core.nth.call(null,vec__38321,(2),null);var ___$2 = cljs.core.nth.call(null,vec__38321,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38321,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38321,(5),null);return high__$1;
}
});
stock.tool.open = (function open(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,open,kline);
} else
{var vec__38323 = kline;var _ = cljs.core.nth.call(null,vec__38323,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38323,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38323,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38323,(3),null);var open__$1 = cljs.core.nth.call(null,vec__38323,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38323,(5),null);return open__$1;
}
});
stock.tool.close = (function close(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,close,kline);
} else
{var vec__38325 = kline;var _ = cljs.core.nth.call(null,vec__38325,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38325,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38325,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38325,(3),null);var close__$1 = cljs.core.nth.call(null,vec__38325,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38325,(5),null);return close__$1;
}
});
stock.tool.low = (function low(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,low,kline);
} else
{var vec__38327 = kline;var _ = cljs.core.nth.call(null,vec__38327,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38327,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38327,(2),null);var low__$1 = cljs.core.nth.call(null,vec__38327,(3),null);var ___$3 = cljs.core.nth.call(null,vec__38327,(4),null);var ___$4 = cljs.core.nth.call(null,vec__38327,(5),null);return low__$1;
}
});
stock.tool.volume = (function volume(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,volume,kline);
} else
{var vec__38329 = kline;var _ = cljs.core.nth.call(null,vec__38329,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38329,(1),null);var ___$2 = cljs.core.nth.call(null,vec__38329,(2),null);var ___$3 = cljs.core.nth.call(null,vec__38329,(3),null);var ___$4 = cljs.core.nth.call(null,vec__38329,(4),null);var volume__$1 = cljs.core.nth.call(null,vec__38329,(5),null);return volume__$1;
}
});
stock.tool.mid = (function mid(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,mid,kline);
} else
{var vec__38331 = kline;var _ = cljs.core.nth.call(null,vec__38331,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38331,(1),null);var high = cljs.core.nth.call(null,vec__38331,(2),null);var low = cljs.core.nth.call(null,vec__38331,(3),null);var ___$2 = cljs.core.nth.call(null,vec__38331,(4),null);var ___$3 = cljs.core.nth.call(null,vec__38331,(5),null);return ((high + low) / (2));
}
});
stock.tool.typical = (function typical(kline){if(cljs.core.seq_QMARK_.call(null,kline))
{return cljs.core.map.call(null,typical,kline);
} else
{var vec__38333 = kline;var _ = cljs.core.nth.call(null,vec__38333,(0),null);var ___$1 = cljs.core.nth.call(null,vec__38333,(1),null);var high = cljs.core.nth.call(null,vec__38333,(2),null);var low = cljs.core.nth.call(null,vec__38333,(3),null);var close = cljs.core.nth.call(null,vec__38333,(4),null);var ___$2 = cljs.core.nth.call(null,vec__38333,(5),null);return (((high + low) + close) / (3));
}
});
