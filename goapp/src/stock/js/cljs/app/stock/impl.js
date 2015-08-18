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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__48350 = data;var err = cljs.core.nth.call(null,vec__48350,(0),null);var data__$1 = cljs.core.nth.call(null,vec__48350,(1),null);var request = cljs.core.nth.call(null,vec__48350,(2),null);var c__6202__auto___48368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48368,vec__48350,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48368,vec__48350,err,data__$1,request){
return (function (state_48359){var state_val_48360 = (state_48359[(1)]);if((state_val_48360 === (2)))
{var inst_48357 = (state_48359[(2)]);var state_48359__$1 = state_48359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48359__$1,inst_48357);
} else
{if((state_val_48360 === (1)))
{var inst_48351 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_48354 = {"err":err,"data":data__$1,"request":request};var inst_48355 = [type,inst_48354];var state_48359__$1 = state_48359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48359__$1,(2),inst_48351,inst_48355);
} else
{return null;
}
}
});})(c__6202__auto___48368,vec__48350,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___48368,vec__48350,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48364 = [null,null,null,null,null,null,null];(statearr_48364[(0)] = state_machine__6188__auto__);
(statearr_48364[(1)] = (1));
return statearr_48364;
});
var state_machine__6188__auto____1 = (function (state_48359){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48365){if((e48365 instanceof Object))
{var ex__6191__auto__ = e48365;var statearr_48366_48369 = state_48359;(statearr_48366_48369[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48370 = state_48359;
state_48359 = G__48370;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48359){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48368,vec__48350,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_48367 = f__6203__auto__.call(null);(statearr_48367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48368);
return statearr_48367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48368,vec__48350,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){console.log("onSystem view");
var vec__48371 = data;var err = cljs.core.nth.call(null,vec__48371,(0),null);var kline = cljs.core.nth.call(null,vec__48371,(1),null);var id = cljs.core.nth.call(null,vec__48371,(2),null);var date = cljs.core.nth.call(null,vec__48371,(3),null);var request = cljs.core.nth.call(null,vec__48371,(4),null);var c__6202__auto___48389 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48389,vec__48371,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48389,vec__48371,err,kline,id,date,request){
return (function (state_48380){var state_val_48381 = (state_48380[(1)]);if((state_val_48381 === (2)))
{var inst_48378 = (state_48380[(2)]);var state_48380__$1 = state_48380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48380__$1,inst_48378);
} else
{if((state_val_48381 === (1)))
{var inst_48372 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_48375 = {"id":id,"request":request};var inst_48376 = [type,inst_48375];var state_48380__$1 = state_48380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48380__$1,(2),inst_48372,inst_48376);
} else
{return null;
}
}
});})(c__6202__auto___48389,vec__48371,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___48389,vec__48371,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48385 = [null,null,null,null,null,null,null];(statearr_48385[(0)] = state_machine__6188__auto__);
(statearr_48385[(1)] = (1));
return statearr_48385;
});
var state_machine__6188__auto____1 = (function (state_48380){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48380);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48386){if((e48386 instanceof Object))
{var ex__6191__auto__ = e48386;var statearr_48387_48390 = state_48380;(statearr_48387_48390[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48391 = state_48380;
state_48380 = G__48391;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48380){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48389,vec__48371,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_48388 = f__6203__auto__.call(null);(statearr_48388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48389);
return statearr_48388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48389,vec__48371,err,kline,id,date,request))
);
if(cljs.core.truth_(err))
{alert(err);
return ctx;
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__48398 = cljs.core._EQ_;var expr__48399 = cljs.core.type;if(cljs.core.truth_(pred__48398.call(null,"volume",expr__48399)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__48401 = cljs.core._EQ_;var expr__48402 = subt;if(cljs.core.truth_(pred__48401.call(null,"ma",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__48401.call(null,"ema",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__48401.call(null,"yu-clock",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.yu_clock.call(null,n,kline),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null);
} else
{if(cljs.core.truth_(pred__48401.call(null,"yu-sd",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__48401.call(null,"macd",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__48401.call(null,"kd",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var rsv = cljs.core.into.call(null,cljs.core.repeat.call(null,(n - (1)),(0)),cljs.core.reverse.call(null,stock.formula.rsv_seq.call(null,n,kline)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__48401.call(null,"Chaikin",expr__48402)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var vs__$1 = cljs.core.into.call(null,cljs.core.repeat.call(null,(m - (1)),(0)),stock.formula.Chaikin.call(null,n,m,cljs.core.reverse.call(null,kline)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,vs__$1),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}
}
}
}
}
}
}
}),sub));
});
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__48404 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__48404,(0),null);var kline = cljs.core.nth.call(null,vec__48404,(1),null);var id = cljs.core.nth.call(null,vec__48404,(2),null);var date = cljs.core.nth.call(null,vec__48404,(3),null);var stock__$1 = vec__48404;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__48405 = cljs.core._EQ_;var expr__48406 = type;if(cljs.core.truth_(pred__48405.call(null,"volume",expr__48406)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__48405.call(null,"clock",expr__48406)))
{var map__48408 = stock.formula.clock.call(null,(10),kline__$1);var map__48408__$1 = ((cljs.core.seq_QMARK_.call(null,map__48408))?cljs.core.apply.call(null,cljs.core.hash_map,map__48408):map__48408);var cs = cljs.core.get.call(null,map__48408__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__48408__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__48408__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__48405.call(null,"kline",expr__48406)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_48426 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_48427 = (data["id"]);var stock_info_48428 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_48427], null));var c__6202__auto___48429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48429,onSys_48426,stock_id_48427,stock_info_48428){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48429,onSys_48426,stock_id_48427,stock_info_48428){
return (function (state_48417){var state_val_48418 = (state_48417[(1)]);if((state_val_48418 === (2)))
{var inst_48415 = (state_48417[(2)]);var state_48417__$1 = state_48417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48417__$1,inst_48415);
} else
{if((state_val_48418 === (1)))
{var inst_48409 = cljs.core.clj__GT_js.call(null,stock_info_48428);var inst_48410 = [null,inst_48409,data];var inst_48411 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48410,null));var inst_48412 = ["view",inst_48411];var inst_48413 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48412,null));var state_48417__$1 = state_48417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48417__$1,(2),onSys_48426,inst_48413);
} else
{return null;
}
}
});})(c__6202__auto___48429,onSys_48426,stock_id_48427,stock_info_48428))
;return ((function (switch__6187__auto__,c__6202__auto___48429,onSys_48426,stock_id_48427,stock_info_48428){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48422 = [null,null,null,null,null,null,null];(statearr_48422[(0)] = state_machine__6188__auto__);
(statearr_48422[(1)] = (1));
return statearr_48422;
});
var state_machine__6188__auto____1 = (function (state_48417){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48423){if((e48423 instanceof Object))
{var ex__6191__auto__ = e48423;var statearr_48424_48430 = state_48417;(statearr_48424_48430[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48431 = state_48417;
state_48417 = G__48431;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48417){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48429,onSys_48426,stock_id_48427,stock_info_48428))
})();var state__6204__auto__ = (function (){var statearr_48425 = f__6203__auto__.call(null);(statearr_48425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48429);
return statearr_48425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48429,onSys_48426,stock_id_48427,stock_info_48428))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__48432){var map__48433 = p__48432;var map__48433__$1 = ((cljs.core.seq_QMARK_.call(null,map__48433))?cljs.core.apply.call(null,cljs.core.hash_map,map__48433):map__48433);var ctx = map__48433__$1;var onSys = cljs.core.get.call(null,map__48433__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_48434 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_48434,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__48435){var map__48436 = p__48435;var map__48436__$1 = ((cljs.core.seq_QMARK_.call(null,map__48436))?cljs.core.apply.call(null,cljs.core.hash_map,map__48436):map__48436);var ctx = map__48436__$1;var onSys = cljs.core.get.call(null,map__48436__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_48437 = (data["fbid"]);var user_48438 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_48437,user_48438,data);
return ctx;
}));
