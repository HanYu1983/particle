// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.impl');
goog.require('cljs.core');
goog.require('app.stock.abstract$');
goog.require('app.stock.cmd');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.abstract$');
goog.require('app.stock.cmd');
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){console.log(("onSystem-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
console.log(cljs.core.pr_str.call(null,data));
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__39157 = data;var err = cljs.core.nth.call(null,vec__39157,(0),null);var data__$1 = cljs.core.nth.call(null,vec__39157,(1),null);var request = cljs.core.nth.call(null,vec__39157,(2),null);var c__6202__auto___39175 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___39175,vec__39157,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___39175,vec__39157,err,data__$1,request){
return (function (state_39166){var state_val_39167 = (state_39166[(1)]);if((state_val_39167 === (2)))
{var inst_39164 = (state_39166[(2)]);var state_39166__$1 = state_39166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39166__$1,inst_39164);
} else
{if((state_val_39167 === (1)))
{var inst_39158 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_39161 = {"err":err,"data":data__$1,"request":request};var inst_39162 = [type,inst_39161];var state_39166__$1 = state_39166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39166__$1,(2),inst_39158,inst_39162);
} else
{return null;
}
}
});})(c__6202__auto___39175,vec__39157,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___39175,vec__39157,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39171 = [null,null,null,null,null,null,null];(statearr_39171[(0)] = state_machine__6188__auto__);
(statearr_39171[(1)] = (1));
return statearr_39171;
});
var state_machine__6188__auto____1 = (function (state_39166){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39172){if((e39172 instanceof Object))
{var ex__6191__auto__ = e39172;var statearr_39173_39176 = state_39166;(statearr_39173_39176[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39177 = state_39166;
state_39166 = G__39177;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39166){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___39175,vec__39157,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_39174 = f__6203__auto__.call(null);(statearr_39174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___39175);
return statearr_39174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___39175,vec__39157,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__39178 = data;var err = cljs.core.nth.call(null,vec__39178,(0),null);var kline = cljs.core.nth.call(null,vec__39178,(1),null);var id = cljs.core.nth.call(null,vec__39178,(2),null);var date = cljs.core.nth.call(null,vec__39178,(3),null);var request = cljs.core.nth.call(null,vec__39178,(4),null);var c__6202__auto___39196 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___39196,vec__39178,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___39196,vec__39178,err,kline,id,date,request){
return (function (state_39187){var state_val_39188 = (state_39187[(1)]);if((state_val_39188 === (2)))
{var inst_39185 = (state_39187[(2)]);var state_39187__$1 = state_39187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39187__$1,inst_39185);
} else
{if((state_val_39188 === (1)))
{var inst_39179 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_39182 = {"err":err,"data":id,"request":request};var inst_39183 = [type,inst_39182];var state_39187__$1 = state_39187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39187__$1,(2),inst_39179,inst_39183);
} else
{return null;
}
}
});})(c__6202__auto___39196,vec__39178,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___39196,vec__39178,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39192 = [null,null,null,null,null,null,null];(statearr_39192[(0)] = state_machine__6188__auto__);
(statearr_39192[(1)] = (1));
return statearr_39192;
});
var state_machine__6188__auto____1 = (function (state_39187){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39193){if((e39193 instanceof Object))
{var ex__6191__auto__ = e39193;var statearr_39194_39197 = state_39187;(statearr_39194_39197[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39198 = state_39187;
state_39187 = G__39198;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39187){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___39196,vec__39178,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_39195 = f__6203__auto__.call(null);(statearr_39195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___39196);
return statearr_39195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___39196,vec__39178,err,kline,id,date,request))
);
if(cljs.core.truth_(err))
{return ctx;
} else
{return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",id], null),data);
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){console.log(("onViewCommand-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
console.log(data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"print",(function (_,data,ctx){console.log(cljs.core.pr_str.call(null,ctx));
return ctx;
}));
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(type,kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__39212 = cljs.core._EQ_;var expr__39213 = type;if(cljs.core.truth_(pred__39212.call(null,"volume",expr__39213)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var c4 = "#FF00FF";var c3 = "#0000FF";var c2 = "#00FFFF";var c1 = "#FFFF00";var pred__39215 = cljs.core._EQ_;var expr__39216 = subt;if(cljs.core.truth_(pred__39215.call(null,"ma",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var G__39218 = cljs.core.List.EMPTY;var G__39218__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__39218):G__39218);var G__39218__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__39218__$1):G__39218__$1);var G__39218__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__39218__$2):G__39218__$2);var G__39218__$4 = (((p > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__39218__$3):G__39218__$3);return G__39218__$4;
} else
{if(cljs.core.truth_(pred__39215.call(null,"ema",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var G__39219 = cljs.core.List.EMPTY;var G__39219__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__39219):G__39219);var G__39219__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__39219__$1):G__39219__$1);var G__39219__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__39219__$2):G__39219__$2);var G__39219__$4 = (((p > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__39219__$3):G__39219__$3);return G__39219__$4;
} else
{if(cljs.core.truth_(pred__39215.call(null,"bbi",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c1], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"ebbi",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.EBBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c2], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"yu-car",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vec__39220 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));var dirs = cljs.core.nth.call(null,vec__39220,(0),null);var ranges = cljs.core.nth.call(null,vec__39220,(1),null);var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"yu-macd",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));var ebbi = stock.formula.EBBI.call(null,m,(m * (2)),(m * (4)),(m * (8)),vs);var dif = cljs.core.map.call(null,cljs.core._,ema,ebbi);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"yu-clock",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var vs__$1 = stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(1)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(-1)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"yu-sd",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"macd",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"kd",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var rsv = stock.formula.rsv_seq.call(null,n,kline);var k = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,rsv)));var d = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,k)));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),k,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),d,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"yu-kd",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var h9 = stock.formula.maxN_seq.call(null,n,((function (n,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (p1__39199_SHARP_){return cljs.core.apply.call(null,cljs.core.max,p1__39199_SHARP_);
});})(n,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,stock.tool.high.call(null,kline));var l9 = stock.formula.maxN_seq.call(null,n,((function (n,h9,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (p1__39200_SHARP_){return cljs.core.apply.call(null,cljs.core.min,p1__39200_SHARP_);
});})(n,h9,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,stock.tool.low.call(null,kline));var c = stock.tool.close.call(null,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),h9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),l9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),c,new cljs.core.Keyword(null,"color","color",1011675173),c2], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"Chaikin",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vs__$1 = stock.formula.Chaikin.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"cv",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var rema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,(1),cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core._,stock.formula.maxN_seq.call(null,n,((function (n,m,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (p1__39201_SHARP_){return cljs.core.apply.call(null,cljs.core.max,p1__39201_SHARP_);
});})(n,m,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,stock.tool.high.call(null,kline)),stock.formula.maxN_seq.call(null,n,((function (n,m,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (p1__39202_SHARP_){return cljs.core.apply.call(null,cljs.core.min,p1__39202_SHARP_);
});})(n,m,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,stock.tool.low.call(null,kline))))));var vs__$1 = stock.formula.volatility_seq.call(null,m,rema);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"eom",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var vs__$1 = stock.formula.EOM.call(null,n,kline);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"sar",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var sar = cljs.core.reverse.call(null,stock.formula.sar_seq.call(null,n,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),sar,new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dot","dot",1442709401)], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"osc",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var line = stock.formula.osc_seq.call(null,n,stock.tool.close.call(null,kline));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(1)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"rsi",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var line = stock.formula.rsi_seq.call(null,n,stock.tool.close.call(null,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"atr",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var line = cljs.core.reverse.call(null,stock.formula.atr_seq.call(null,n,cljs.core.reverse.call(null,kline)));var avg = stock.formula.average.call(null,line);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),avg),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"dmi",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var atr = stock.formula.tr_seq.call(null,cljs.core.reverse.call(null,kline));var dm = stock.formula.dm_seq.call(null,cljs.core.reverse.call(null,kline));var dip = cljs.core.map.call(null,((function (n,m,atr,dm,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (v,v2){if((v > (0)))
{return (v / v2);
} else
{return (0);
}
});})(n,m,atr,dm,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,dm,atr);var did = cljs.core.map.call(null,((function (n,m,atr,dm,dip,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (v,v2){if((v < (0)))
{return (Math.abs(v) / v2);
} else
{return (0);
}
});})(n,m,atr,dm,dip,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,dm,atr);var adip = stock.formula.sma_seq.call(null,n,dip);var adid = stock.formula.sma_seq.call(null,n,did);var dx = cljs.core.map.call(null,((function (n,m,atr,dm,dip,did,adip,adid,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1){
return (function (v1,v2){if(((v1 + v2) === (0)))
{return (0);
} else
{return (Math.abs((v1 - v2)) / (v1 + v2));
}
});})(n,m,atr,dm,dip,did,adip,adid,pred__39215,expr__39216,subt,subd,vs,c4,c3,c2,c1))
,adip,adid);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adip),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adid),new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"AccDist",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var line = stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__39215.call(null,"cci",expr__39216)))
{var n = cljs.core.get.call(null,subd,"n");var line = stock.formula.cci.call(null,n,cljs.core.reverse.call(null,kline));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(100)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(-100)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),sub));
});
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__39221 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__39221,(0),null);var kline = cljs.core.nth.call(null,vec__39221,(1),null);var id = cljs.core.nth.call(null,vec__39221,(2),null);var date = cljs.core.nth.call(null,vec__39221,(3),null);var stock__$1 = vec__39221;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.concat.call(null,cljs.core.flatten.call(null,(function (){var pred__39222 = cljs.core._EQ_;var expr__39223 = type;if(cljs.core.truth_(pred__39222.call(null,"volume",expr__39223)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null);
} else
{if(cljs.core.truth_(pred__39222.call(null,"clock",expr__39223)))
{var map__39225 = stock.formula.clock.call(null,(10),kline__$1);var map__39225__$1 = ((cljs.core.seq_QMARK_.call(null,map__39225))?cljs.core.apply.call(null,cljs.core.hash_map,map__39225):map__39225);var cs = cljs.core.get.call(null,map__39225__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__39225__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__39225__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null)], null);
} else
{if(cljs.core.truth_(pred__39222.call(null,"kline",expr__39223)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1,new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}
}
}
})()),app.stock.impl.jsobj__GT_drawer_info.call(null,type,kline__$1,sub))], null),canvas.width,canvas.height,canvas.getContext("2d"));
} else
{}
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockId",(function (_,data,ctx){var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id = (data["id"]);var date = (data["date"]);var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id], null));if(cljs.core.truth_(stock_info))
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data,stock_info);
return ctx;
} else
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data);
return ctx;
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_39243 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_39244 = (data["id"]);var stock_info_39245 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_39244], null));var c__6202__auto___39246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___39246,onSys_39243,stock_id_39244,stock_info_39245){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___39246,onSys_39243,stock_id_39244,stock_info_39245){
return (function (state_39234){var state_val_39235 = (state_39234[(1)]);if((state_val_39235 === (2)))
{var inst_39232 = (state_39234[(2)]);var state_39234__$1 = state_39234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39234__$1,inst_39232);
} else
{if((state_val_39235 === (1)))
{var inst_39226 = cljs.core.clj__GT_js.call(null,stock_info_39245);var inst_39227 = [null,inst_39226,data];var inst_39228 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39227,null));var inst_39229 = ["view",inst_39228];var inst_39230 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39229,null));var state_39234__$1 = state_39234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39234__$1,(2),onSys_39243,inst_39230);
} else
{return null;
}
}
});})(c__6202__auto___39246,onSys_39243,stock_id_39244,stock_info_39245))
;return ((function (switch__6187__auto__,c__6202__auto___39246,onSys_39243,stock_id_39244,stock_info_39245){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39239 = [null,null,null,null,null,null,null];(statearr_39239[(0)] = state_machine__6188__auto__);
(statearr_39239[(1)] = (1));
return statearr_39239;
});
var state_machine__6188__auto____1 = (function (state_39234){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39240){if((e39240 instanceof Object))
{var ex__6191__auto__ = e39240;var statearr_39241_39247 = state_39234;(statearr_39241_39247[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39248 = state_39234;
state_39234 = G__39248;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39234){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___39246,onSys_39243,stock_id_39244,stock_info_39245))
})();var state__6204__auto__ = (function (){var statearr_39242 = f__6203__auto__.call(null);(statearr_39242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___39246);
return statearr_39242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___39246,onSys_39243,stock_id_39244,stock_info_39245))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__39249){var map__39250 = p__39249;var map__39250__$1 = ((cljs.core.seq_QMARK_.call(null,map__39250))?cljs.core.apply.call(null,cljs.core.hash_map,map__39250):map__39250);var ctx = map__39250__$1;var onSys = cljs.core.get.call(null,map__39250__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_39251 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_39251,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__39252){var map__39253 = p__39252;var map__39253__$1 = ((cljs.core.seq_QMARK_.call(null,map__39253))?cljs.core.apply.call(null,cljs.core.hash_map,map__39253):map__39253);var ctx = map__39253__$1;var onSys = cljs.core.get.call(null,map__39253__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_39254 = (data["fbid"]);var user_39255 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_39254,user_39255,data);
return ctx;
}));
