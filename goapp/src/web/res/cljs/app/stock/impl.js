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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__112002 = data;var err = cljs.core.nth.call(null,vec__112002,(0),null);var data__$1 = cljs.core.nth.call(null,vec__112002,(1),null);var request = cljs.core.nth.call(null,vec__112002,(2),null);var c__6202__auto___112020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___112020,vec__112002,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___112020,vec__112002,err,data__$1,request){
return (function (state_112011){var state_val_112012 = (state_112011[(1)]);if((state_val_112012 === (2)))
{var inst_112009 = (state_112011[(2)]);var state_112011__$1 = state_112011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112011__$1,inst_112009);
} else
{if((state_val_112012 === (1)))
{var inst_112003 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_112006 = {"err":err,"data":data__$1,"request":request};var inst_112007 = [type,inst_112006];var state_112011__$1 = state_112011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112011__$1,(2),inst_112003,inst_112007);
} else
{return null;
}
}
});})(c__6202__auto___112020,vec__112002,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___112020,vec__112002,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_112016 = [null,null,null,null,null,null,null];(statearr_112016[(0)] = state_machine__6188__auto__);
(statearr_112016[(1)] = (1));
return statearr_112016;
});
var state_machine__6188__auto____1 = (function (state_112011){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_112011);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e112017){if((e112017 instanceof Object))
{var ex__6191__auto__ = e112017;var statearr_112018_112021 = state_112011;(statearr_112018_112021[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e112017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__112022 = state_112011;
state_112011 = G__112022;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_112011){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_112011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___112020,vec__112002,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_112019 = f__6203__auto__.call(null);(statearr_112019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___112020);
return statearr_112019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___112020,vec__112002,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__112023 = data;var err = cljs.core.nth.call(null,vec__112023,(0),null);var kline = cljs.core.nth.call(null,vec__112023,(1),null);var id = cljs.core.nth.call(null,vec__112023,(2),null);var date = cljs.core.nth.call(null,vec__112023,(3),null);var request = cljs.core.nth.call(null,vec__112023,(4),null);var c__6202__auto___112041 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___112041,vec__112023,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___112041,vec__112023,err,kline,id,date,request){
return (function (state_112032){var state_val_112033 = (state_112032[(1)]);if((state_val_112033 === (2)))
{var inst_112030 = (state_112032[(2)]);var state_112032__$1 = state_112032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112032__$1,inst_112030);
} else
{if((state_val_112033 === (1)))
{var inst_112024 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_112027 = {"err":err,"data":id,"request":request};var inst_112028 = [type,inst_112027];var state_112032__$1 = state_112032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112032__$1,(2),inst_112024,inst_112028);
} else
{return null;
}
}
});})(c__6202__auto___112041,vec__112023,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___112041,vec__112023,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_112037 = [null,null,null,null,null,null,null];(statearr_112037[(0)] = state_machine__6188__auto__);
(statearr_112037[(1)] = (1));
return statearr_112037;
});
var state_machine__6188__auto____1 = (function (state_112032){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_112032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e112038){if((e112038 instanceof Object))
{var ex__6191__auto__ = e112038;var statearr_112039_112042 = state_112032;(statearr_112039_112042[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e112038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__112043 = state_112032;
state_112032 = G__112043;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_112032){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_112032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___112041,vec__112023,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_112040 = f__6203__auto__.call(null);(statearr_112040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___112041);
return statearr_112040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___112041,vec__112023,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__112051 = cljs.core._EQ_;var expr__112052 = cljs.core.type;if(cljs.core.truth_(pred__112051.call(null,"volume",expr__112052)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__112054 = cljs.core._EQ_;var expr__112055 = subt;if(cljs.core.truth_(pred__112054.call(null,"ma",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,vs),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"ema",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"bbi",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"yu-car",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vec__112057 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));var dirs = cljs.core.nth.call(null,vec__112057,(0),null);var ranges = cljs.core.nth.call(null,vec__112057,(1),null);var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,avg),cljs.core.reverse.call(null,cljs.core.drop.call(null,(20),dirs))),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),avg),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"yu-macd",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));var bbi = stock.formula.BBI.call(null,m,vs);var dif = cljs.core.map.call(null,cljs.core._,ema,bbi);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"yu-clock",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,kline)),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"yu-sd",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"macd",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"kd",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var rsv = stock.formula.rsv_seq.call(null,n,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(50)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"Chaikin",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vs__$1 = cljs.core.reverse.call(null,stock.formula.Chaikin.call(null,n,m,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
} else
{if(cljs.core.truth_(pred__112054.call(null,"eom",expr__112055)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var vs__$1 = stock.formula.EOM.call(null,n,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray"], null)], null);
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
}),sub));
});
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__112058 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__112058,(0),null);var kline = cljs.core.nth.call(null,vec__112058,(1),null);var id = cljs.core.nth.call(null,vec__112058,(2),null);var date = cljs.core.nth.call(null,vec__112058,(3),null);var stock__$1 = vec__112058;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__112059 = cljs.core._EQ_;var expr__112060 = type;if(cljs.core.truth_(pred__112059.call(null,"volume",expr__112060)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__112059.call(null,"clock",expr__112060)))
{var map__112062 = stock.formula.clock.call(null,(10),kline__$1);var map__112062__$1 = ((cljs.core.seq_QMARK_.call(null,map__112062))?cljs.core.apply.call(null,cljs.core.hash_map,map__112062):map__112062);var cs = cljs.core.get.call(null,map__112062__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__112062__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__112062__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__112059.call(null,"kline",expr__112060)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}
}
}
})(),app.stock.impl.jsobj__GT_drawer_info.call(null,kline__$1,sub))], null),canvas.width,canvas.height,canvas.getContext("2d"));
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_112080 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_112081 = (data["id"]);var stock_info_112082 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_112081], null));var c__6202__auto___112083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___112083,onSys_112080,stock_id_112081,stock_info_112082){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___112083,onSys_112080,stock_id_112081,stock_info_112082){
return (function (state_112071){var state_val_112072 = (state_112071[(1)]);if((state_val_112072 === (2)))
{var inst_112069 = (state_112071[(2)]);var state_112071__$1 = state_112071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112071__$1,inst_112069);
} else
{if((state_val_112072 === (1)))
{var inst_112063 = cljs.core.clj__GT_js.call(null,stock_info_112082);var inst_112064 = [null,inst_112063,data];var inst_112065 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_112064,null));var inst_112066 = ["view",inst_112065];var inst_112067 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_112066,null));var state_112071__$1 = state_112071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112071__$1,(2),onSys_112080,inst_112067);
} else
{return null;
}
}
});})(c__6202__auto___112083,onSys_112080,stock_id_112081,stock_info_112082))
;return ((function (switch__6187__auto__,c__6202__auto___112083,onSys_112080,stock_id_112081,stock_info_112082){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_112076 = [null,null,null,null,null,null,null];(statearr_112076[(0)] = state_machine__6188__auto__);
(statearr_112076[(1)] = (1));
return statearr_112076;
});
var state_machine__6188__auto____1 = (function (state_112071){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_112071);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e112077){if((e112077 instanceof Object))
{var ex__6191__auto__ = e112077;var statearr_112078_112084 = state_112071;(statearr_112078_112084[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e112077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__112085 = state_112071;
state_112071 = G__112085;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_112071){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_112071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___112083,onSys_112080,stock_id_112081,stock_info_112082))
})();var state__6204__auto__ = (function (){var statearr_112079 = f__6203__auto__.call(null);(statearr_112079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___112083);
return statearr_112079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___112083,onSys_112080,stock_id_112081,stock_info_112082))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__112086){var map__112087 = p__112086;var map__112087__$1 = ((cljs.core.seq_QMARK_.call(null,map__112087))?cljs.core.apply.call(null,cljs.core.hash_map,map__112087):map__112087);var ctx = map__112087__$1;var onSys = cljs.core.get.call(null,map__112087__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_112088 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_112088,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__112089){var map__112090 = p__112089;var map__112090__$1 = ((cljs.core.seq_QMARK_.call(null,map__112090))?cljs.core.apply.call(null,cljs.core.hash_map,map__112090):map__112090);var ctx = map__112090__$1;var onSys = cljs.core.get.call(null,map__112090__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_112091 = (data["fbid"]);var user_112092 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_112091,user_112092,data);
return ctx;
}));
