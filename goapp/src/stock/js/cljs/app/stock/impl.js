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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__44188 = data;var err = cljs.core.nth.call(null,vec__44188,(0),null);var data__$1 = cljs.core.nth.call(null,vec__44188,(1),null);var request = cljs.core.nth.call(null,vec__44188,(2),null);var c__6202__auto___44206 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44206,vec__44188,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44206,vec__44188,err,data__$1,request){
return (function (state_44197){var state_val_44198 = (state_44197[(1)]);if((state_val_44198 === (2)))
{var inst_44195 = (state_44197[(2)]);var state_44197__$1 = state_44197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44197__$1,inst_44195);
} else
{if((state_val_44198 === (1)))
{var inst_44189 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_44192 = {"err":err,"data":data__$1,"request":request};var inst_44193 = [type,inst_44192];var state_44197__$1 = state_44197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44197__$1,(2),inst_44189,inst_44193);
} else
{return null;
}
}
});})(c__6202__auto___44206,vec__44188,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___44206,vec__44188,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44202 = [null,null,null,null,null,null,null];(statearr_44202[(0)] = state_machine__6188__auto__);
(statearr_44202[(1)] = (1));
return statearr_44202;
});
var state_machine__6188__auto____1 = (function (state_44197){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44197);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44203){if((e44203 instanceof Object))
{var ex__6191__auto__ = e44203;var statearr_44204_44207 = state_44197;(statearr_44204_44207[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44208 = state_44197;
state_44197 = G__44208;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44197){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44206,vec__44188,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_44205 = f__6203__auto__.call(null);(statearr_44205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44206);
return statearr_44205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44206,vec__44188,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__44209 = data;var err = cljs.core.nth.call(null,vec__44209,(0),null);var kline = cljs.core.nth.call(null,vec__44209,(1),null);var id = cljs.core.nth.call(null,vec__44209,(2),null);var date = cljs.core.nth.call(null,vec__44209,(3),null);var request = cljs.core.nth.call(null,vec__44209,(4),null);var c__6202__auto___44227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44227,vec__44209,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44227,vec__44209,err,kline,id,date,request){
return (function (state_44218){var state_val_44219 = (state_44218[(1)]);if((state_val_44219 === (2)))
{var inst_44216 = (state_44218[(2)]);var state_44218__$1 = state_44218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44218__$1,inst_44216);
} else
{if((state_val_44219 === (1)))
{var inst_44210 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_44213 = {"id":id,"request":request};var inst_44214 = [type,inst_44213];var state_44218__$1 = state_44218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44218__$1,(2),inst_44210,inst_44214);
} else
{return null;
}
}
});})(c__6202__auto___44227,vec__44209,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___44227,vec__44209,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44223 = [null,null,null,null,null,null,null];(statearr_44223[(0)] = state_machine__6188__auto__);
(statearr_44223[(1)] = (1));
return statearr_44223;
});
var state_machine__6188__auto____1 = (function (state_44218){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44224){if((e44224 instanceof Object))
{var ex__6191__auto__ = e44224;var statearr_44225_44228 = state_44218;(statearr_44225_44228[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44229 = state_44218;
state_44218 = G__44229;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44218){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44227,vec__44209,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_44226 = f__6203__auto__.call(null);(statearr_44226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44227);
return statearr_44226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44227,vec__44209,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__44236 = cljs.core._EQ_;var expr__44237 = cljs.core.type;if(cljs.core.truth_(pred__44236.call(null,"volume",expr__44237)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__44239 = cljs.core._EQ_;var expr__44240 = subt;if(cljs.core.truth_(pred__44239.call(null,"ma",expr__44240)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__44239.call(null,"ema",expr__44240)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{if(cljs.core.truth_(pred__44239.call(null,"yu-clock",expr__44240)))
{var n = cljs.core.get.call(null,subd,"n");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.yu_clock.call(null,n,kline),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null);
} else
{if(cljs.core.truth_(pred__44239.call(null,"yu-sd",expr__44240)))
{var n = cljs.core.get.call(null,subd,"n");var group = cljs.core.take.call(null,n,kline);var vs__$1 = stock.tool.open.call(null,group);var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));var offsets_avg = stock.formula.average.call(null,offsets);var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);var sd2 = (sd * (2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else
{if(cljs.core.truth_(pred__44239.call(null,"macd",expr__44240)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var dif = stock.formula.macd_dif.call(null,n,m,kline);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(9),dif),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__44239.call(null,"kd",expr__44240)))
{var n = cljs.core.get.call(null,subd,"n");var m = cljs.core.get.call(null,subd,"m");var rsv = cljs.core.into.call(null,cljs.core.repeat.call(null,(n - (1)),(0)),cljs.core.reverse.call(null,stock.formula.rsv_seq.call(null,n,kline)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,m,rsv),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null)], null);
} else
{if(cljs.core.truth_(pred__44239.call(null,"Chaikin",expr__44240)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__44242 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__44242,(0),null);var kline = cljs.core.nth.call(null,vec__44242,(1),null);var id = cljs.core.nth.call(null,vec__44242,(2),null);var date = cljs.core.nth.call(null,vec__44242,(3),null);var stock__$1 = vec__44242;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__44243 = cljs.core._EQ_;var expr__44244 = type;if(cljs.core.truth_(pred__44243.call(null,"volume",expr__44244)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__44243.call(null,"clock",expr__44244)))
{var map__44246 = stock.formula.clock.call(null,(10),kline__$1);var map__44246__$1 = ((cljs.core.seq_QMARK_.call(null,map__44246))?cljs.core.apply.call(null,cljs.core.hash_map,map__44246):map__44246);var cs = cljs.core.get.call(null,map__44246__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__44246__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__44246__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{if(cljs.core.truth_(pred__44243.call(null,"kline",expr__44244)))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__44247){var map__44248 = p__44247;var map__44248__$1 = ((cljs.core.seq_QMARK_.call(null,map__44248))?cljs.core.apply.call(null,cljs.core.hash_map,map__44248):map__44248);var ctx = map__44248__$1;var onSys = cljs.core.get.call(null,map__44248__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_44249 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_44249,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__44250){var map__44251 = p__44250;var map__44251__$1 = ((cljs.core.seq_QMARK_.call(null,map__44251))?cljs.core.apply.call(null,cljs.core.hash_map,map__44251):map__44251);var ctx = map__44251__$1;var onSys = cljs.core.get.call(null,map__44251__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_44252 = (data["fbid"]);var user_44253 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_44252,user_44253,data);
return ctx;
}));
