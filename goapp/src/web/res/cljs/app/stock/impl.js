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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__48261 = data;var err = cljs.core.nth.call(null,vec__48261,(0),null);var data__$1 = cljs.core.nth.call(null,vec__48261,(1),null);var request = cljs.core.nth.call(null,vec__48261,(2),null);var c__6202__auto___48279 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48279,vec__48261,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48279,vec__48261,err,data__$1,request){
return (function (state_48270){var state_val_48271 = (state_48270[(1)]);if((state_val_48271 === (2)))
{var inst_48268 = (state_48270[(2)]);var state_48270__$1 = state_48270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48270__$1,inst_48268);
} else
{if((state_val_48271 === (1)))
{var inst_48262 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_48265 = {"err":err,"data":data__$1,"request":request};var inst_48266 = [type,inst_48265];var state_48270__$1 = state_48270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48270__$1,(2),inst_48262,inst_48266);
} else
{return null;
}
}
});})(c__6202__auto___48279,vec__48261,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___48279,vec__48261,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48275 = [null,null,null,null,null,null,null];(statearr_48275[(0)] = state_machine__6188__auto__);
(statearr_48275[(1)] = (1));
return statearr_48275;
});
var state_machine__6188__auto____1 = (function (state_48270){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48270);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48276){if((e48276 instanceof Object))
{var ex__6191__auto__ = e48276;var statearr_48277_48280 = state_48270;(statearr_48277_48280[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48281 = state_48270;
state_48270 = G__48281;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48270){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48279,vec__48261,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_48278 = f__6203__auto__.call(null);(statearr_48278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48279);
return statearr_48278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48279,vec__48261,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){console.log("onSystem view");
var vec__48282 = data;var err = cljs.core.nth.call(null,vec__48282,(0),null);var kline = cljs.core.nth.call(null,vec__48282,(1),null);var id = cljs.core.nth.call(null,vec__48282,(2),null);var date = cljs.core.nth.call(null,vec__48282,(3),null);var request = cljs.core.nth.call(null,vec__48282,(4),null);var c__6202__auto___48300 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48300,vec__48282,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48300,vec__48282,err,kline,id,date,request){
return (function (state_48291){var state_val_48292 = (state_48291[(1)]);if((state_val_48292 === (2)))
{var inst_48289 = (state_48291[(2)]);var state_48291__$1 = state_48291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48291__$1,inst_48289);
} else
{if((state_val_48292 === (1)))
{var inst_48283 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_48286 = {"id":id,"request":request};var inst_48287 = [type,inst_48286];var state_48291__$1 = state_48291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48291__$1,(2),inst_48283,inst_48287);
} else
{return null;
}
}
});})(c__6202__auto___48300,vec__48282,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___48300,vec__48282,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48296 = [null,null,null,null,null,null,null];(statearr_48296[(0)] = state_machine__6188__auto__);
(statearr_48296[(1)] = (1));
return statearr_48296;
});
var state_machine__6188__auto____1 = (function (state_48291){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48297){if((e48297 instanceof Object))
{var ex__6191__auto__ = e48297;var statearr_48298_48301 = state_48291;(statearr_48298_48301[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48302 = state_48291;
state_48291 = G__48302;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48291){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48300,vec__48282,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_48299 = f__6203__auto__.call(null);(statearr_48299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48300);
return statearr_48299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48300,vec__48282,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__48309 = cljs.core._EQ_;var expr__48310 = cljs.core.type;if(cljs.core.truth_(pred__48309.call(null,"volume",expr__48310)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__48312 = cljs.core._EQ_;var expr__48313 = subt;if(cljs.core.truth_(pred__48312.call(null,"ma",expr__48313)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__48312.call(null,"ema",expr__48313)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__48312.call(null,"yu-clock",expr__48313)))
{var n = cljs.core.get.call(null,subd,"n");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.yu_clock.call(null,n,kline),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null);
} else
{if(cljs.core.truth_(pred__48312.call(null,"yu-sd",expr__48313)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__48312.call(null,"macd",expr__48313)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__48312.call(null,"kd",expr__48313)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var rsv = cljs.core.into.call(null,cljs.core.repeat.call(null,(n - (1)),(0)),cljs.core.reverse.call(null,stock.formula.rsv_seq.call(null,n,kline)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__48312.call(null,"Chaikin",expr__48313)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__48315 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__48315,(0),null);var kline = cljs.core.nth.call(null,vec__48315,(1),null);var id = cljs.core.nth.call(null,vec__48315,(2),null);var date = cljs.core.nth.call(null,vec__48315,(3),null);var stock__$1 = vec__48315;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__48316 = cljs.core._EQ_;var expr__48317 = type;if(cljs.core.truth_(pred__48316.call(null,"volume",expr__48317)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__48316.call(null,"clock",expr__48317)))
{var map__48319 = stock.formula.clock.call(null,(10),kline__$1);var map__48319__$1 = ((cljs.core.seq_QMARK_.call(null,map__48319))?cljs.core.apply.call(null,cljs.core.hash_map,map__48319):map__48319);var cs = cljs.core.get.call(null,map__48319__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__48319__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__48319__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__48316.call(null,"kline",expr__48317)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){var onSys_48337 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id_48338 = (data["id"]);var stock_info_48339 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id_48338], null));var c__6202__auto___48340 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48340,onSys_48337,stock_id_48338,stock_info_48339){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48340,onSys_48337,stock_id_48338,stock_info_48339){
return (function (state_48328){var state_val_48329 = (state_48328[(1)]);if((state_val_48329 === (2)))
{var inst_48326 = (state_48328[(2)]);var state_48328__$1 = state_48328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48328__$1,inst_48326);
} else
{if((state_val_48329 === (1)))
{var inst_48320 = cljs.core.clj__GT_js.call(null,stock_info_48339);var inst_48321 = [null,inst_48320,data];var inst_48322 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48321,null));var inst_48323 = ["view",inst_48322];var inst_48324 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48323,null));var state_48328__$1 = state_48328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48328__$1,(2),onSys_48337,inst_48324);
} else
{return null;
}
}
});})(c__6202__auto___48340,onSys_48337,stock_id_48338,stock_info_48339))
;return ((function (switch__6187__auto__,c__6202__auto___48340,onSys_48337,stock_id_48338,stock_info_48339){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48333 = [null,null,null,null,null,null,null];(statearr_48333[(0)] = state_machine__6188__auto__);
(statearr_48333[(1)] = (1));
return statearr_48333;
});
var state_machine__6188__auto____1 = (function (state_48328){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48334){if((e48334 instanceof Object))
{var ex__6191__auto__ = e48334;var statearr_48335_48341 = state_48328;(statearr_48335_48341[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48342 = state_48328;
state_48328 = G__48342;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48328){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48340,onSys_48337,stock_id_48338,stock_info_48339))
})();var state__6204__auto__ = (function (){var statearr_48336 = f__6203__auto__.call(null);(statearr_48336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48340);
return statearr_48336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48340,onSys_48337,stock_id_48338,stock_info_48339))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__48343){var map__48344 = p__48343;var map__48344__$1 = ((cljs.core.seq_QMARK_.call(null,map__48344))?cljs.core.apply.call(null,cljs.core.hash_map,map__48344):map__48344);var ctx = map__48344__$1;var onSys = cljs.core.get.call(null,map__48344__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_48345 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_48345,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__48346){var map__48347 = p__48346;var map__48347__$1 = ((cljs.core.seq_QMARK_.call(null,map__48347))?cljs.core.apply.call(null,cljs.core.hash_map,map__48347):map__48347);var ctx = map__48347__$1;var onSys = cljs.core.get.call(null,map__48347__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_48348 = (data["fbid"]);var user_48349 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_48348,user_48349,data);
return ctx;
}));
