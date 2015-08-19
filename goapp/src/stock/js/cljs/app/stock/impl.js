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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__109383 = data;var err = cljs.core.nth.call(null,vec__109383,(0),null);var data__$1 = cljs.core.nth.call(null,vec__109383,(1),null);var request = cljs.core.nth.call(null,vec__109383,(2),null);var c__6202__auto___109401 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___109401,vec__109383,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___109401,vec__109383,err,data__$1,request){
return (function (state_109392){var state_val_109393 = (state_109392[(1)]);if((state_val_109393 === (2)))
{var inst_109390 = (state_109392[(2)]);var state_109392__$1 = state_109392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109392__$1,inst_109390);
} else
{if((state_val_109393 === (1)))
{var inst_109384 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_109387 = {"err":err,"data":data__$1,"request":request};var inst_109388 = [type,inst_109387];var state_109392__$1 = state_109392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109392__$1,(2),inst_109384,inst_109388);
} else
{return null;
}
}
});})(c__6202__auto___109401,vec__109383,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___109401,vec__109383,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_109397 = [null,null,null,null,null,null,null];(statearr_109397[(0)] = state_machine__6188__auto__);
(statearr_109397[(1)] = (1));
return statearr_109397;
});
var state_machine__6188__auto____1 = (function (state_109392){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_109392);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e109398){if((e109398 instanceof Object))
{var ex__6191__auto__ = e109398;var statearr_109399_109402 = state_109392;(statearr_109399_109402[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e109398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__109403 = state_109392;
state_109392 = G__109403;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_109392){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_109392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___109401,vec__109383,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_109400 = f__6203__auto__.call(null);(statearr_109400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___109401);
return statearr_109400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___109401,vec__109383,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__109404 = data;var err = cljs.core.nth.call(null,vec__109404,(0),null);var kline = cljs.core.nth.call(null,vec__109404,(1),null);var id = cljs.core.nth.call(null,vec__109404,(2),null);var date = cljs.core.nth.call(null,vec__109404,(3),null);var request = cljs.core.nth.call(null,vec__109404,(4),null);var c__6202__auto___109422 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___109422,vec__109404,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___109422,vec__109404,err,kline,id,date,request){
return (function (state_109413){var state_val_109414 = (state_109413[(1)]);if((state_val_109414 === (2)))
{var inst_109411 = (state_109413[(2)]);var state_109413__$1 = state_109413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109413__$1,inst_109411);
} else
{if((state_val_109414 === (1)))
{var inst_109405 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_109408 = {"err":err,"data":id,"request":request};var inst_109409 = [type,inst_109408];var state_109413__$1 = state_109413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109413__$1,(2),inst_109405,inst_109409);
} else
{return null;
}
}
});})(c__6202__auto___109422,vec__109404,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___109422,vec__109404,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_109418 = [null,null,null,null,null,null,null];(statearr_109418[(0)] = state_machine__6188__auto__);
(statearr_109418[(1)] = (1));
return statearr_109418;
});
var state_machine__6188__auto____1 = (function (state_109413){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_109413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e109419){if((e109419 instanceof Object))
{var ex__6191__auto__ = e109419;var statearr_109420_109423 = state_109413;(statearr_109420_109423[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e109419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__109424 = state_109413;
state_109413 = G__109424;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_109413){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_109413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___109422,vec__109404,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_109421 = f__6203__auto__.call(null);(statearr_109421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___109422);
return statearr_109421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___109422,vec__109404,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__109432 = cljs.core._EQ_;var expr__109433 = cljs.core.type;if(cljs.core.truth_(pred__109432.call(null,"volume",expr__109433)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__109435 = cljs.core._EQ_;var expr__109436 = subt;if(cljs.core.truth_(pred__109435.call(null,"ma",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,vs),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"ema",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var p = cljs.core.get.call(null,subd,"p");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"bbi",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"yu-car",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vec__109438 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));var dirs = cljs.core.nth.call(null,vec__109438,(0),null);var ranges = cljs.core.nth.call(null,vec__109438,(1),null);var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,avg),cljs.core.reverse.call(null,cljs.core.drop.call(null,(20),dirs))),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),avg),new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"yu-macd",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));var bbi = stock.formula.BBI.call(null,m,vs);var dif = cljs.core.map.call(null,cljs.core._,ema,bbi);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"yu-clock",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,kline)),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"yu-sd",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"macd",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"kd",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var rsv = stock.formula.rsv_seq.call(null,n,kline);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"Chaikin",expr__109436)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var o = cljs.core.get.call(null,subd,"o");var vs__$1 = cljs.core.reverse.call(null,stock.formula.Chaikin.call(null,n,m,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,o,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null);
} else
{if(cljs.core.truth_(pred__109435.call(null,"eom",expr__109436)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__109439 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__109439,(0),null);var kline = cljs.core.nth.call(null,vec__109439,(1),null);var id = cljs.core.nth.call(null,vec__109439,(2),null);var date = cljs.core.nth.call(null,vec__109439,(3),null);var stock__$1 = vec__109439;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__109440 = cljs.core._EQ_;var expr__109441 = type;if(cljs.core.truth_(pred__109440.call(null,"volume",expr__109441)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__109440.call(null,"clock",expr__109441)))
{var map__109443 = stock.formula.clock.call(null,(10),kline__$1);var map__109443__$1 = ((cljs.core.seq_QMARK_.call(null,map__109443))?cljs.core.apply.call(null,cljs.core.hash_map,map__109443):map__109443);var cs = cljs.core.get.call(null,map__109443__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__109443__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__109443__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__109440.call(null,"kline",expr__109441)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_109461 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_109462 = (data["id"]);var stock_info_109463 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_109462], null));var c__6202__auto___109464 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___109464,onSys_109461,stock_id_109462,stock_info_109463){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___109464,onSys_109461,stock_id_109462,stock_info_109463){
return (function (state_109452){var state_val_109453 = (state_109452[(1)]);if((state_val_109453 === (2)))
{var inst_109450 = (state_109452[(2)]);var state_109452__$1 = state_109452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109452__$1,inst_109450);
} else
{if((state_val_109453 === (1)))
{var inst_109444 = cljs.core.clj__GT_js.call(null,stock_info_109463);var inst_109445 = [null,inst_109444,data];var inst_109446 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_109445,null));var inst_109447 = ["view",inst_109446];var inst_109448 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_109447,null));var state_109452__$1 = state_109452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109452__$1,(2),onSys_109461,inst_109448);
} else
{return null;
}
}
});})(c__6202__auto___109464,onSys_109461,stock_id_109462,stock_info_109463))
;return ((function (switch__6187__auto__,c__6202__auto___109464,onSys_109461,stock_id_109462,stock_info_109463){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_109457 = [null,null,null,null,null,null,null];(statearr_109457[(0)] = state_machine__6188__auto__);
(statearr_109457[(1)] = (1));
return statearr_109457;
});
var state_machine__6188__auto____1 = (function (state_109452){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_109452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e109458){if((e109458 instanceof Object))
{var ex__6191__auto__ = e109458;var statearr_109459_109465 = state_109452;(statearr_109459_109465[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e109458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__109466 = state_109452;
state_109452 = G__109466;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_109452){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_109452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___109464,onSys_109461,stock_id_109462,stock_info_109463))
})();var state__6204__auto__ = (function (){var statearr_109460 = f__6203__auto__.call(null);(statearr_109460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___109464);
return statearr_109460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___109464,onSys_109461,stock_id_109462,stock_info_109463))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__109467){var map__109468 = p__109467;var map__109468__$1 = ((cljs.core.seq_QMARK_.call(null,map__109468))?cljs.core.apply.call(null,cljs.core.hash_map,map__109468):map__109468);var ctx = map__109468__$1;var onSys = cljs.core.get.call(null,map__109468__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_109469 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_109469,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__109470){var map__109471 = p__109470;var map__109471__$1 = ((cljs.core.seq_QMARK_.call(null,map__109471))?cljs.core.apply.call(null,cljs.core.hash_map,map__109471):map__109471);var ctx = map__109471__$1;var onSys = cljs.core.get.call(null,map__109471__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_109472 = (data["fbid"]);var user_109473 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_109472,user_109473,data);
return ctx;
}));
