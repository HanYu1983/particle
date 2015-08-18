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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__44254 = data;var err = cljs.core.nth.call(null,vec__44254,(0),null);var data__$1 = cljs.core.nth.call(null,vec__44254,(1),null);var request = cljs.core.nth.call(null,vec__44254,(2),null);var c__6202__auto___44272 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44272,vec__44254,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44272,vec__44254,err,data__$1,request){
return (function (state_44263){var state_val_44264 = (state_44263[(1)]);if((state_val_44264 === (2)))
{var inst_44261 = (state_44263[(2)]);var state_44263__$1 = state_44263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44263__$1,inst_44261);
} else
{if((state_val_44264 === (1)))
{var inst_44255 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_44258 = {"err":err,"data":data__$1,"request":request};var inst_44259 = [type,inst_44258];var state_44263__$1 = state_44263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44263__$1,(2),inst_44255,inst_44259);
} else
{return null;
}
}
});})(c__6202__auto___44272,vec__44254,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___44272,vec__44254,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44268 = [null,null,null,null,null,null,null];(statearr_44268[(0)] = state_machine__6188__auto__);
(statearr_44268[(1)] = (1));
return statearr_44268;
});
var state_machine__6188__auto____1 = (function (state_44263){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44269){if((e44269 instanceof Object))
{var ex__6191__auto__ = e44269;var statearr_44270_44273 = state_44263;(statearr_44270_44273[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44274 = state_44263;
state_44263 = G__44274;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44263){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44272,vec__44254,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_44271 = f__6203__auto__.call(null);(statearr_44271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44272);
return statearr_44271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44272,vec__44254,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__44275 = data;var err = cljs.core.nth.call(null,vec__44275,(0),null);var kline = cljs.core.nth.call(null,vec__44275,(1),null);var id = cljs.core.nth.call(null,vec__44275,(2),null);var date = cljs.core.nth.call(null,vec__44275,(3),null);var request = cljs.core.nth.call(null,vec__44275,(4),null);var c__6202__auto___44293 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44293,vec__44275,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44293,vec__44275,err,kline,id,date,request){
return (function (state_44284){var state_val_44285 = (state_44284[(1)]);if((state_val_44285 === (2)))
{var inst_44282 = (state_44284[(2)]);var state_44284__$1 = state_44284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44284__$1,inst_44282);
} else
{if((state_val_44285 === (1)))
{var inst_44276 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_44279 = {"id":id,"request":request};var inst_44280 = [type,inst_44279];var state_44284__$1 = state_44284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44284__$1,(2),inst_44276,inst_44280);
} else
{return null;
}
}
});})(c__6202__auto___44293,vec__44275,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___44293,vec__44275,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44289 = [null,null,null,null,null,null,null];(statearr_44289[(0)] = state_machine__6188__auto__);
(statearr_44289[(1)] = (1));
return statearr_44289;
});
var state_machine__6188__auto____1 = (function (state_44284){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44284);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44290){if((e44290 instanceof Object))
{var ex__6191__auto__ = e44290;var statearr_44291_44294 = state_44284;(statearr_44291_44294[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44295 = state_44284;
state_44284 = G__44295;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44284){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44293,vec__44275,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_44292 = f__6203__auto__.call(null);(statearr_44292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44293);
return statearr_44292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44293,vec__44275,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__44302 = cljs.core._EQ_;var expr__44303 = cljs.core.type;if(cljs.core.truth_(pred__44302.call(null,"volume",expr__44303)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__44305 = cljs.core._EQ_;var expr__44306 = subt;if(cljs.core.truth_(pred__44305.call(null,"ma",expr__44306)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__44305.call(null,"ema",expr__44306)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__44305.call(null,"yu-clock",expr__44306)))
{var n = cljs.core.get.call(null,subd,"n");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.yu_clock.call(null,n,kline),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null);
} else
{if(cljs.core.truth_(pred__44305.call(null,"yu-sd",expr__44306)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__44305.call(null,"macd",expr__44306)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__44305.call(null,"kd",expr__44306)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var rsv = cljs.core.into.call(null,cljs.core.repeat.call(null,(n - (1)),(0)),cljs.core.reverse.call(null,stock.formula.rsv_seq.call(null,n,kline)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__44305.call(null,"Chaikin",expr__44306)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__44308 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__44308,(0),null);var kline = cljs.core.nth.call(null,vec__44308,(1),null);var id = cljs.core.nth.call(null,vec__44308,(2),null);var date = cljs.core.nth.call(null,vec__44308,(3),null);var stock__$1 = vec__44308;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__44309 = cljs.core._EQ_;var expr__44310 = type;if(cljs.core.truth_(pred__44309.call(null,"volume",expr__44310)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__44309.call(null,"clock",expr__44310)))
{var map__44312 = stock.formula.clock.call(null,(10),kline__$1);var map__44312__$1 = ((cljs.core.seq_QMARK_.call(null,map__44312))?cljs.core.apply.call(null,cljs.core.hash_map,map__44312):map__44312);var cs = cljs.core.get.call(null,map__44312__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__44312__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__44312__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__44309.call(null,"kline",expr__44310)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__44313){var map__44314 = p__44313;var map__44314__$1 = ((cljs.core.seq_QMARK_.call(null,map__44314))?cljs.core.apply.call(null,cljs.core.hash_map,map__44314):map__44314);var ctx = map__44314__$1;var onSys = cljs.core.get.call(null,map__44314__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_44315 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_44315,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__44316){var map__44317 = p__44316;var map__44317__$1 = ((cljs.core.seq_QMARK_.call(null,map__44317))?cljs.core.apply.call(null,cljs.core.hash_map,map__44317):map__44317);var ctx = map__44317__$1;var onSys = cljs.core.get.call(null,map__44317__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_44318 = (data["fbid"]);var user_44319 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_44318,user_44319,data);
return ctx;
}));
