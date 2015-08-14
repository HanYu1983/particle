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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__21679 = data;var err = cljs.core.nth.call(null,vec__21679,(0),null);var kline = cljs.core.nth.call(null,vec__21679,(1),null);var id = cljs.core.nth.call(null,vec__21679,(2),null);var date = cljs.core.nth.call(null,vec__21679,(3),null);var request = cljs.core.nth.call(null,vec__21679,(4),null);var c__6202__auto___21697 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___21697,vec__21679,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___21697,vec__21679,err,kline,id,date,request){
return (function (state_21688){var state_val_21689 = (state_21688[(1)]);if((state_val_21689 === (2)))
{var inst_21686 = (state_21688[(2)]);var state_21688__$1 = state_21688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21688__$1,inst_21686);
} else
{if((state_val_21689 === (1)))
{var inst_21680 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_21683 = {"id":id,"request":request};var inst_21684 = [type,inst_21683];var state_21688__$1 = state_21688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21688__$1,(2),inst_21680,inst_21684);
} else
{return null;
}
}
});})(c__6202__auto___21697,vec__21679,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___21697,vec__21679,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21693 = [null,null,null,null,null,null,null];(statearr_21693[(0)] = state_machine__6188__auto__);
(statearr_21693[(1)] = (1));
return statearr_21693;
});
var state_machine__6188__auto____1 = (function (state_21688){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21688);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21694){if((e21694 instanceof Object))
{var ex__6191__auto__ = e21694;var statearr_21695_21698 = state_21688;(statearr_21695_21698[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21699 = state_21688;
state_21688 = G__21699;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21688){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___21697,vec__21679,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_21696 = f__6203__auto__.call(null);(statearr_21696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___21697);
return statearr_21696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___21697,vec__21679,err,kline,id,date,request))
);
if(cljs.core.truth_(err))
{alert(err);
return ctx;
} else
{return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",id,"data"], null),kline);
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){console.log(("onViewCommand-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
console.log(data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"print",(function (_,data,ctx){console.log(cljs.core.pr_str.call(null,ctx));
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId_21710 = (data["id"]);var type_21711 = (data["type"]);var canvas_21712 = (data["canvas"]);var sub_21713 = cljs.core.js__GT_clj.call(null,(data["sub"]));var map__21700_21714 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stockId_21710], null));var map__21700_21715__$1 = ((cljs.core.seq_QMARK_.call(null,map__21700_21714))?cljs.core.apply.call(null,cljs.core.hash_map,map__21700_21714):map__21700_21714);var stock_21716__$1 = map__21700_21715__$1;var kline_21717 = cljs.core.get.call(null,map__21700_21715__$1,"data");var vs_21718 = (function (){var pred__21701 = cljs.core._EQ_;var expr__21702 = type_21711;if(cljs.core.truth_(pred__21701.call(null,"volume",expr__21702)))
{return stock.tool.volume.call(null,kline_21717);
} else
{return stock.tool.close.call(null,kline_21717);
}
})();if(cljs.core.truth_(kline_21717))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__21704 = cljs.core._EQ_;var expr__21705 = type_21711;if(cljs.core.truth_(pred__21704.call(null,"volume",expr__21705)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline_21717)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline_21717], null);
}
})(),cljs.core.map.call(null,((function (stockId_21710,type_21711,canvas_21712,sub_21713,map__21700_21714,map__21700_21715__$1,stock_21716__$1,kline_21717,vs_21718){
return (function (data__$1){var subt = cljs.core.get.call(null,data__$1,"t");var subd = cljs.core.get.call(null,data__$1,"d");var pred__21707 = cljs.core._EQ_;var expr__21708 = subt;if(cljs.core.truth_(pred__21707.call(null,"ma",expr__21708)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs_21718),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs_21718),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
});})(stockId_21710,type_21711,canvas_21712,sub_21713,map__21700_21714,map__21700_21715__$1,stock_21716__$1,kline_21717,vs_21718))
,sub_21713))], null),canvas_21712.width,canvas_21712.height,canvas_21712.getContext("2d"));
} else
{}
console.log(kline_21717);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockId",(function (_,data,ctx){var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id = (data["id"]);var date = (data["date"]);var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stock_id], null));if(cljs.core.truth_(stock_info))
{return ctx;
} else
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data);
return ctx;
}
}));
