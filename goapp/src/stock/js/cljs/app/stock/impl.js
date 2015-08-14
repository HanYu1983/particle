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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__22773 = data;var err = cljs.core.nth.call(null,vec__22773,(0),null);var kline = cljs.core.nth.call(null,vec__22773,(1),null);var id = cljs.core.nth.call(null,vec__22773,(2),null);var date = cljs.core.nth.call(null,vec__22773,(3),null);var request = cljs.core.nth.call(null,vec__22773,(4),null);var c__6202__auto___22791 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22791,vec__22773,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22791,vec__22773,err,kline,id,date,request){
return (function (state_22782){var state_val_22783 = (state_22782[(1)]);if((state_val_22783 === (2)))
{var inst_22780 = (state_22782[(2)]);var state_22782__$1 = state_22782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22782__$1,inst_22780);
} else
{if((state_val_22783 === (1)))
{var inst_22774 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_22777 = {"id":id,"request":request};var inst_22778 = [type,inst_22777];var state_22782__$1 = state_22782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22782__$1,(2),inst_22774,inst_22778);
} else
{return null;
}
}
});})(c__6202__auto___22791,vec__22773,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___22791,vec__22773,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22787 = [null,null,null,null,null,null,null];(statearr_22787[(0)] = state_machine__6188__auto__);
(statearr_22787[(1)] = (1));
return statearr_22787;
});
var state_machine__6188__auto____1 = (function (state_22782){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22782);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22788){if((e22788 instanceof Object))
{var ex__6191__auto__ = e22788;var statearr_22789_22792 = state_22782;(statearr_22789_22792[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22793 = state_22782;
state_22782 = G__22793;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22782){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22791,vec__22773,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_22790 = f__6203__auto__.call(null);(statearr_22790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22791);
return statearr_22790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22791,vec__22773,err,kline,id,date,request))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId_22805 = (data["id"]);var type_22806 = (data["type"]);var canvas_22807 = (data["canvas"]);var sub_22808 = cljs.core.js__GT_clj.call(null,(data["sub"]));var map__22794_22809 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stockId_22805], null));var map__22794_22810__$1 = ((cljs.core.seq_QMARK_.call(null,map__22794_22809))?cljs.core.apply.call(null,cljs.core.hash_map,map__22794_22809):map__22794_22809);var stock_22811__$1 = map__22794_22810__$1;var kline_22812 = cljs.core.get.call(null,map__22794_22810__$1,"data");if(cljs.core.truth_(kline_22812))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__22795 = cljs.core._EQ_;var expr__22796 = type_22806;if(cljs.core.truth_(pred__22795.call(null,"volume",expr__22796)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline_22812)], null);
} else
{if(cljs.core.truth_(pred__22795.call(null,"clock",expr__22796)))
{var map__22798 = stock.formula.clock.call(null,(10),cljs.core.reverse.call(null,kline_22812));var map__22798__$1 = ((cljs.core.seq_QMARK_.call(null,map__22798))?cljs.core.apply.call(null,cljs.core.hash_map,map__22798):map__22798);var cs = cljs.core.get.call(null,map__22798__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__22798__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__22798__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline_22812], null);
}
}
})(),cljs.core.map.call(null,((function (stockId_22805,type_22806,canvas_22807,sub_22808,map__22794_22809,map__22794_22810__$1,stock_22811__$1,kline_22812){
return (function (data__$1){var subt = cljs.core.get.call(null,data__$1,"t");var subd = cljs.core.get.call(null,data__$1,"d");var vs = (function (){var pred__22799 = cljs.core._EQ_;var expr__22800 = type_22806;if(cljs.core.truth_(pred__22799.call(null,"volume",expr__22800)))
{return stock.tool.volume.call(null,kline_22812);
} else
{return stock.tool.close.call(null,kline_22812);
}
})();var pred__22802 = cljs.core._EQ_;var expr__22803 = subt;if(cljs.core.truth_(pred__22802.call(null,"ma",expr__22803)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
});})(stockId_22805,type_22806,canvas_22807,sub_22808,map__22794_22809,map__22794_22810__$1,stock_22811__$1,kline_22812))
,sub_22808))], null),canvas_22807.width,canvas_22807.height,canvas_22807.getContext("2d"));
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
