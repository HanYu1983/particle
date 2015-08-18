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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__22813 = data;var err = cljs.core.nth.call(null,vec__22813,(0),null);var kline = cljs.core.nth.call(null,vec__22813,(1),null);var id = cljs.core.nth.call(null,vec__22813,(2),null);var date = cljs.core.nth.call(null,vec__22813,(3),null);var request = cljs.core.nth.call(null,vec__22813,(4),null);var c__6202__auto___22831 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22831,vec__22813,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22831,vec__22813,err,kline,id,date,request){
return (function (state_22822){var state_val_22823 = (state_22822[(1)]);if((state_val_22823 === (2)))
{var inst_22820 = (state_22822[(2)]);var state_22822__$1 = state_22822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22822__$1,inst_22820);
} else
{if((state_val_22823 === (1)))
{var inst_22814 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_22817 = {"id":id,"request":request};var inst_22818 = [type,inst_22817];var state_22822__$1 = state_22822;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22822__$1,(2),inst_22814,inst_22818);
} else
{return null;
}
}
});})(c__6202__auto___22831,vec__22813,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___22831,vec__22813,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22827 = [null,null,null,null,null,null,null];(statearr_22827[(0)] = state_machine__6188__auto__);
(statearr_22827[(1)] = (1));
return statearr_22827;
});
var state_machine__6188__auto____1 = (function (state_22822){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22822);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22828){if((e22828 instanceof Object))
{var ex__6191__auto__ = e22828;var statearr_22829_22832 = state_22822;(statearr_22829_22832[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22822);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22833 = state_22822;
state_22822 = G__22833;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22822){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22831,vec__22813,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_22830 = f__6203__auto__.call(null);(statearr_22830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22831);
return statearr_22830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22831,vec__22813,err,kline,id,date,request))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId_22845 = (data["id"]);var type_22846 = (data["type"]);var canvas_22847 = (data["canvas"]);var sub_22848 = cljs.core.js__GT_clj.call(null,(data["sub"]));var map__22834_22849 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stockId_22845], null));var map__22834_22850__$1 = ((cljs.core.seq_QMARK_.call(null,map__22834_22849))?cljs.core.apply.call(null,cljs.core.hash_map,map__22834_22849):map__22834_22849);var stock_22851__$1 = map__22834_22850__$1;var kline_22852 = cljs.core.get.call(null,map__22834_22850__$1,"data");if(cljs.core.truth_(kline_22852))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__22835 = cljs.core._EQ_;var expr__22836 = type_22846;if(cljs.core.truth_(pred__22835.call(null,"volume",expr__22836)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline_22852)], null);
} else
{if(cljs.core.truth_(pred__22835.call(null,"clock",expr__22836)))
{var map__22838 = stock.formula.clock.call(null,(10),kline_22852);var map__22838__$1 = ((cljs.core.seq_QMARK_.call(null,map__22838))?cljs.core.apply.call(null,cljs.core.hash_map,map__22838):map__22838);var cs = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline_22852], null);
}
}
})(),cljs.core.map.call(null,((function (stockId_22845,type_22846,canvas_22847,sub_22848,map__22834_22849,map__22834_22850__$1,stock_22851__$1,kline_22852){
return (function (data__$1){var subt = cljs.core.get.call(null,data__$1,"t");var subd = cljs.core.get.call(null,data__$1,"d");var vs = (function (){var pred__22839 = cljs.core._EQ_;var expr__22840 = type_22846;if(cljs.core.truth_(pred__22839.call(null,"volume",expr__22840)))
{return stock.tool.volume.call(null,kline_22852);
} else
{return stock.tool.close.call(null,kline_22852);
}
})();var pred__22842 = cljs.core._EQ_;var expr__22843 = subt;if(cljs.core.truth_(pred__22842.call(null,"ma",expr__22843)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
});})(stockId_22845,type_22846,canvas_22847,sub_22848,map__22834_22849,map__22834_22850__$1,stock_22851__$1,kline_22852))
,sub_22848))], null),canvas_22847.width,canvas_22847.height,canvas_22847.getContext("2d"));
} else
{}
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockId",(function (_,data,ctx){var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id = (data["id"]);var date = (data["date"]);var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stock_id], null));if(cljs.core.truth_(stock_info))
{return ctx;
} else
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data);
return ctx;
}
}));
