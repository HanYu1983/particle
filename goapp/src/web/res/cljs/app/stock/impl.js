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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__109474 = data;var err = cljs.core.nth.call(null,vec__109474,(0),null);var data__$1 = cljs.core.nth.call(null,vec__109474,(1),null);var request = cljs.core.nth.call(null,vec__109474,(2),null);var c__6202__auto___109492 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___109492,vec__109474,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___109492,vec__109474,err,data__$1,request){
return (function (state_109483){var state_val_109484 = (state_109483[(1)]);if((state_val_109484 === (2)))
{var inst_109481 = (state_109483[(2)]);var state_109483__$1 = state_109483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109483__$1,inst_109481);
} else
{if((state_val_109484 === (1)))
{var inst_109475 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_109478 = {"err":err,"data":data__$1,"request":request};var inst_109479 = [type,inst_109478];var state_109483__$1 = state_109483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109483__$1,(2),inst_109475,inst_109479);
} else
{return null;
}
}
});})(c__6202__auto___109492,vec__109474,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___109492,vec__109474,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_109488 = [null,null,null,null,null,null,null];(statearr_109488[(0)] = state_machine__6188__auto__);
(statearr_109488[(1)] = (1));
return statearr_109488;
});
var state_machine__6188__auto____1 = (function (state_109483){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_109483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e109489){if((e109489 instanceof Object))
{var ex__6191__auto__ = e109489;var statearr_109490_109493 = state_109483;(statearr_109490_109493[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e109489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__109494 = state_109483;
state_109483 = G__109494;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_109483){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_109483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___109492,vec__109474,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_109491 = f__6203__auto__.call(null);(statearr_109491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___109492);
return statearr_109491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___109492,vec__109474,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__109495 = data;var err = cljs.core.nth.call(null,vec__109495,(0),null);var kline = cljs.core.nth.call(null,vec__109495,(1),null);var id = cljs.core.nth.call(null,vec__109495,(2),null);var date = cljs.core.nth.call(null,vec__109495,(3),null);var request = cljs.core.nth.call(null,vec__109495,(4),null);var c__6202__auto___109513 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___109513,vec__109495,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___109513,vec__109495,err,kline,id,date,request){
return (function (state_109504){var state_val_109505 = (state_109504[(1)]);if((state_val_109505 === (2)))
{var inst_109502 = (state_109504[(2)]);var state_109504__$1 = state_109504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109504__$1,inst_109502);
} else
{if((state_val_109505 === (1)))
{var inst_109496 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_109499 = {"err":err,"data":id,"request":request};var inst_109500 = [type,inst_109499];var state_109504__$1 = state_109504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109504__$1,(2),inst_109496,inst_109500);
} else
{return null;
}
}
});})(c__6202__auto___109513,vec__109495,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___109513,vec__109495,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_109509 = [null,null,null,null,null,null,null];(statearr_109509[(0)] = state_machine__6188__auto__);
(statearr_109509[(1)] = (1));
return statearr_109509;
});
var state_machine__6188__auto____1 = (function (state_109504){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_109504);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e109510){if((e109510 instanceof Object))
{var ex__6191__auto__ = e109510;var statearr_109511_109514 = state_109504;(statearr_109511_109514[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109504);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e109510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__109515 = state_109504;
state_109504 = G__109515;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_109504){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_109504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___109513,vec__109495,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_109512 = f__6203__auto__.call(null);(statearr_109512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___109513);
return statearr_109512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___109513,vec__109495,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__109523 = cljs.core._EQ_;var expr__109524 = cljs.core.type;if(cljs.core.truth_(pred__109523.call(null,"volume",expr__109524)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__109526 = cljs.core._EQ_;var expr__109527 = subt;if(cljs.core.truth_(pred__109526.call(null,"ma",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,vs),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"ema",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"bbi",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"yu-car",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vec__109529 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));var dirs = cljs.core.nth.call(null,vec__109529,(0),null);var ranges = cljs.core.nth.call(null,vec__109529,(1),null);var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,avg),cljs.core.reverse.call(null,cljs.core.drop.call(null,(20),dirs))),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),avg),new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"yu-macd",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));var bbi = stock.formula.BBI.call(null,m,vs);var dif = cljs.core.map.call(null,cljs.core._,ema,bbi);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"yu-clock",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,kline)),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"yu-sd",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"macd",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"kd",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var rsv = stock.formula.rsv_seq.call(null,n,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"Chaikin",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vs__$1 = cljs.core.reverse.call(null,stock.formula.Chaikin.call(null,n,m,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109526.call(null,"eom",expr__109527)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var vs__$1 = stock.formula.EOM.call(null,n,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__109530 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__109530,(0),null);var kline = cljs.core.nth.call(null,vec__109530,(1),null);var id = cljs.core.nth.call(null,vec__109530,(2),null);var date = cljs.core.nth.call(null,vec__109530,(3),null);var stock__$1 = vec__109530;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__109531 = cljs.core._EQ_;var expr__109532 = type;if(cljs.core.truth_(pred__109531.call(null,"volume",expr__109532)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__109531.call(null,"clock",expr__109532)))
{var map__109534 = stock.formula.clock.call(null,(10),kline__$1);var map__109534__$1 = ((cljs.core.seq_QMARK_.call(null,map__109534))?cljs.core.apply.call(null,cljs.core.hash_map,map__109534):map__109534);var cs = cljs.core.get.call(null,map__109534__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__109534__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__109534__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__109531.call(null,"kline",expr__109532)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_109552 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_109553 = (data["id"]);var stock_info_109554 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_109553], null));var c__6202__auto___109555 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___109555,onSys_109552,stock_id_109553,stock_info_109554){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___109555,onSys_109552,stock_id_109553,stock_info_109554){
return (function (state_109543){var state_val_109544 = (state_109543[(1)]);if((state_val_109544 === (2)))
{var inst_109541 = (state_109543[(2)]);var state_109543__$1 = state_109543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109543__$1,inst_109541);
} else
{if((state_val_109544 === (1)))
{var inst_109535 = cljs.core.clj__GT_js.call(null,stock_info_109554);var inst_109536 = [null,inst_109535,data];var inst_109537 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_109536,null));var inst_109538 = ["view",inst_109537];var inst_109539 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_109538,null));var state_109543__$1 = state_109543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109543__$1,(2),onSys_109552,inst_109539);
} else
{return null;
}
}
});})(c__6202__auto___109555,onSys_109552,stock_id_109553,stock_info_109554))
;return ((function (switch__6187__auto__,c__6202__auto___109555,onSys_109552,stock_id_109553,stock_info_109554){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_109548 = [null,null,null,null,null,null,null];(statearr_109548[(0)] = state_machine__6188__auto__);
(statearr_109548[(1)] = (1));
return statearr_109548;
});
var state_machine__6188__auto____1 = (function (state_109543){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_109543);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e109549){if((e109549 instanceof Object))
{var ex__6191__auto__ = e109549;var statearr_109550_109556 = state_109543;(statearr_109550_109556[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e109549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__109557 = state_109543;
state_109543 = G__109557;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_109543){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_109543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___109555,onSys_109552,stock_id_109553,stock_info_109554))
})();var state__6204__auto__ = (function (){var statearr_109551 = f__6203__auto__.call(null);(statearr_109551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___109555);
return statearr_109551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___109555,onSys_109552,stock_id_109553,stock_info_109554))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__109558){var map__109559 = p__109558;var map__109559__$1 = ((cljs.core.seq_QMARK_.call(null,map__109559))?cljs.core.apply.call(null,cljs.core.hash_map,map__109559):map__109559);var ctx = map__109559__$1;var onSys = cljs.core.get.call(null,map__109559__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_109560 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_109560,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__109561){var map__109562 = p__109561;var map__109562__$1 = ((cljs.core.seq_QMARK_.call(null,map__109562))?cljs.core.apply.call(null,cljs.core.hash_map,map__109562):map__109562);var ctx = map__109562__$1;var onSys = cljs.core.get.call(null,map__109562__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_109563 = (data["fbid"]);var user_109564 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_109563,user_109564,data);
return ctx;
}));
