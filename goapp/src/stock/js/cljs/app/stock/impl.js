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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__49386 = data;var err = cljs.core.nth.call(null,vec__49386,(0),null);var data__$1 = cljs.core.nth.call(null,vec__49386,(1),null);var request = cljs.core.nth.call(null,vec__49386,(2),null);var c__6202__auto___49404 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___49404,vec__49386,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___49404,vec__49386,err,data__$1,request){
return (function (state_49395){var state_val_49396 = (state_49395[(1)]);if((state_val_49396 === (2)))
{var inst_49393 = (state_49395[(2)]);var state_49395__$1 = state_49395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49395__$1,inst_49393);
} else
{if((state_val_49396 === (1)))
{var inst_49387 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_49390 = {"err":err,"data":data__$1,"request":request};var inst_49391 = [type,inst_49390];var state_49395__$1 = state_49395;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49395__$1,(2),inst_49387,inst_49391);
} else
{return null;
}
}
});})(c__6202__auto___49404,vec__49386,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___49404,vec__49386,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49400 = [null,null,null,null,null,null,null];(statearr_49400[(0)] = state_machine__6188__auto__);
(statearr_49400[(1)] = (1));
return statearr_49400;
});
var state_machine__6188__auto____1 = (function (state_49395){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49395);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49401){if((e49401 instanceof Object))
{var ex__6191__auto__ = e49401;var statearr_49402_49405 = state_49395;(statearr_49402_49405[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49395);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49406 = state_49395;
state_49395 = G__49406;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49395){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___49404,vec__49386,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_49403 = f__6203__auto__.call(null);(statearr_49403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___49404);
return statearr_49403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___49404,vec__49386,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__49407 = data;var err = cljs.core.nth.call(null,vec__49407,(0),null);var kline = cljs.core.nth.call(null,vec__49407,(1),null);var id = cljs.core.nth.call(null,vec__49407,(2),null);var date = cljs.core.nth.call(null,vec__49407,(3),null);var request = cljs.core.nth.call(null,vec__49407,(4),null);var c__6202__auto___49425 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___49425,vec__49407,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___49425,vec__49407,err,kline,id,date,request){
return (function (state_49416){var state_val_49417 = (state_49416[(1)]);if((state_val_49417 === (2)))
{var inst_49414 = (state_49416[(2)]);var state_49416__$1 = state_49416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49416__$1,inst_49414);
} else
{if((state_val_49417 === (1)))
{var inst_49408 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_49411 = {"err":err,"data":id,"request":request};var inst_49412 = [type,inst_49411];var state_49416__$1 = state_49416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49416__$1,(2),inst_49408,inst_49412);
} else
{return null;
}
}
});})(c__6202__auto___49425,vec__49407,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___49425,vec__49407,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49421 = [null,null,null,null,null,null,null];(statearr_49421[(0)] = state_machine__6188__auto__);
(statearr_49421[(1)] = (1));
return statearr_49421;
});
var state_machine__6188__auto____1 = (function (state_49416){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49422){if((e49422 instanceof Object))
{var ex__6191__auto__ = e49422;var statearr_49423_49426 = state_49416;(statearr_49423_49426[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49427 = state_49416;
state_49416 = G__49427;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49416){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___49425,vec__49407,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_49424 = f__6203__auto__.call(null);(statearr_49424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___49425);
return statearr_49424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___49425,vec__49407,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__49434 = cljs.core._EQ_;var expr__49435 = cljs.core.type;if(cljs.core.truth_(pred__49434.call(null,"volume",expr__49435)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__49437 = cljs.core._EQ_;var expr__49438 = subt;if(cljs.core.truth_(pred__49437.call(null,"ma",expr__49438)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__49437.call(null,"ema",expr__49438)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__49437.call(null,"yu-clock",expr__49438)))
{var n = cljs.core.get.call(null,subd,"n");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.yu_clock.call(null,n,kline),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null);
} else
{if(cljs.core.truth_(pred__49437.call(null,"yu-sd",expr__49438)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__49437.call(null,"macd",expr__49438)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__49437.call(null,"kd",expr__49438)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var rsv = cljs.core.into.call(null,cljs.core.repeat.call(null,(n - (1)),(0)),cljs.core.reverse.call(null,stock.formula.rsv_seq.call(null,n,kline)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__49437.call(null,"Chaikin",expr__49438)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__49440 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__49440,(0),null);var kline = cljs.core.nth.call(null,vec__49440,(1),null);var id = cljs.core.nth.call(null,vec__49440,(2),null);var date = cljs.core.nth.call(null,vec__49440,(3),null);var stock__$1 = vec__49440;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__49441 = cljs.core._EQ_;var expr__49442 = type;if(cljs.core.truth_(pred__49441.call(null,"volume",expr__49442)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__49441.call(null,"clock",expr__49442)))
{var map__49444 = stock.formula.clock.call(null,(10),kline__$1);var map__49444__$1 = ((cljs.core.seq_QMARK_.call(null,map__49444))?cljs.core.apply.call(null,cljs.core.hash_map,map__49444):map__49444);var cs = cljs.core.get.call(null,map__49444__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__49444__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__49444__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__49441.call(null,"kline",expr__49442)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_49462 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_49463 = (data["id"]);var stock_info_49464 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_49463], null));var c__6202__auto___49465 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___49465,onSys_49462,stock_id_49463,stock_info_49464){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___49465,onSys_49462,stock_id_49463,stock_info_49464){
return (function (state_49453){var state_val_49454 = (state_49453[(1)]);if((state_val_49454 === (2)))
{var inst_49451 = (state_49453[(2)]);var state_49453__$1 = state_49453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49453__$1,inst_49451);
} else
{if((state_val_49454 === (1)))
{var inst_49445 = cljs.core.clj__GT_js.call(null,stock_info_49464);var inst_49446 = [null,inst_49445,data];var inst_49447 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49446,null));var inst_49448 = ["view",inst_49447];var inst_49449 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49448,null));var state_49453__$1 = state_49453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49453__$1,(2),onSys_49462,inst_49449);
} else
{return null;
}
}
});})(c__6202__auto___49465,onSys_49462,stock_id_49463,stock_info_49464))
;return ((function (switch__6187__auto__,c__6202__auto___49465,onSys_49462,stock_id_49463,stock_info_49464){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49458 = [null,null,null,null,null,null,null];(statearr_49458[(0)] = state_machine__6188__auto__);
(statearr_49458[(1)] = (1));
return statearr_49458;
});
var state_machine__6188__auto____1 = (function (state_49453){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49453);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49459){if((e49459 instanceof Object))
{var ex__6191__auto__ = e49459;var statearr_49460_49466 = state_49453;(statearr_49460_49466[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49467 = state_49453;
state_49453 = G__49467;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49453){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___49465,onSys_49462,stock_id_49463,stock_info_49464))
})();var state__6204__auto__ = (function (){var statearr_49461 = f__6203__auto__.call(null);(statearr_49461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___49465);
return statearr_49461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___49465,onSys_49462,stock_id_49463,stock_info_49464))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__49468){var map__49469 = p__49468;var map__49469__$1 = ((cljs.core.seq_QMARK_.call(null,map__49469))?cljs.core.apply.call(null,cljs.core.hash_map,map__49469):map__49469);var ctx = map__49469__$1;var onSys = cljs.core.get.call(null,map__49469__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_49470 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_49470,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__49471){var map__49472 = p__49471;var map__49472__$1 = ((cljs.core.seq_QMARK_.call(null,map__49472))?cljs.core.apply.call(null,cljs.core.hash_map,map__49472):map__49472);var ctx = map__49472__$1;var onSys = cljs.core.get.call(null,map__49472__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_49473 = (data["fbid"]);var user_49474 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_49473,user_49474,data);
return ctx;
}));
