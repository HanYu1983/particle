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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__21801 = data;var err = cljs.core.nth.call(null,vec__21801,(0),null);var kline = cljs.core.nth.call(null,vec__21801,(1),null);var id = cljs.core.nth.call(null,vec__21801,(2),null);var date = cljs.core.nth.call(null,vec__21801,(3),null);var request = cljs.core.nth.call(null,vec__21801,(4),null);var c__6202__auto___21819 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___21819,vec__21801,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___21819,vec__21801,err,kline,id,date,request){
return (function (state_21810){var state_val_21811 = (state_21810[(1)]);if((state_val_21811 === (2)))
{var inst_21808 = (state_21810[(2)]);var state_21810__$1 = state_21810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21810__$1,inst_21808);
} else
{if((state_val_21811 === (1)))
{var inst_21802 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_21805 = {"id":id,"request":request};var inst_21806 = [type,inst_21805];var state_21810__$1 = state_21810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21810__$1,(2),inst_21802,inst_21806);
} else
{return null;
}
}
});})(c__6202__auto___21819,vec__21801,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___21819,vec__21801,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21815 = [null,null,null,null,null,null,null];(statearr_21815[(0)] = state_machine__6188__auto__);
(statearr_21815[(1)] = (1));
return statearr_21815;
});
var state_machine__6188__auto____1 = (function (state_21810){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21816){if((e21816 instanceof Object))
{var ex__6191__auto__ = e21816;var statearr_21817_21820 = state_21810;(statearr_21817_21820[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21821 = state_21810;
state_21810 = G__21821;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21810){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___21819,vec__21801,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_21818 = f__6203__auto__.call(null);(statearr_21818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___21819);
return statearr_21818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___21819,vec__21801,err,kline,id,date,request))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId_21833 = (data["id"]);var type_21834 = (data["type"]);var canvas_21835 = (data["canvas"]);var sub_21836 = cljs.core.js__GT_clj.call(null,(data["sub"]));var map__21822_21837 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stockId_21833], null));var map__21822_21838__$1 = ((cljs.core.seq_QMARK_.call(null,map__21822_21837))?cljs.core.apply.call(null,cljs.core.hash_map,map__21822_21837):map__21822_21837);var stock_21839__$1 = map__21822_21838__$1;var kline_21840 = cljs.core.get.call(null,map__21822_21838__$1,"data");var vs_21841 = (function (){var pred__21823 = cljs.core._EQ_;var expr__21824 = type_21834;if(cljs.core.truth_(pred__21823.call(null,"volume",expr__21824)))
{return stock.tool.volume.call(null,kline_21840);
} else
{return stock.tool.close.call(null,kline_21840);
}
})();if(cljs.core.truth_(kline_21840))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__21826 = cljs.core._EQ_;var expr__21827 = type_21834;if(cljs.core.truth_(pred__21826.call(null,"volume",expr__21827)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline_21840)], null);
} else
{if(cljs.core.truth_(pred__21826.call(null,"clock",expr__21827)))
{var map__21829 = stock.formula.clock.call(null,(10),cljs.core.reverse.call(null,kline_21840));var map__21829__$1 = ((cljs.core.seq_QMARK_.call(null,map__21829))?cljs.core.apply.call(null,cljs.core.hash_map,map__21829):map__21829);var cs = cljs.core.get.call(null,map__21829__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__21829__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__21829__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline_21840], null);
}
}
})(),cljs.core.map.call(null,((function (stockId_21833,type_21834,canvas_21835,sub_21836,map__21822_21837,map__21822_21838__$1,stock_21839__$1,kline_21840,vs_21841){
return (function (data__$1){var subt = cljs.core.get.call(null,data__$1,"t");var subd = cljs.core.get.call(null,data__$1,"d");var pred__21830 = cljs.core._EQ_;var expr__21831 = subt;if(cljs.core.truth_(pred__21830.call(null,"ma",expr__21831)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs_21841),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs_21841),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
});})(stockId_21833,type_21834,canvas_21835,sub_21836,map__21822_21837,map__21822_21838__$1,stock_21839__$1,kline_21840,vs_21841))
,sub_21836))], null),canvas_21835.width,canvas_21835.height,canvas_21835.getContext("2d"));
} else
{}
console.log(kline_21840);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockId",(function (_,data,ctx){var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id = (data["id"]);var date = (data["date"]);var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stock_id], null));if(cljs.core.truth_(stock_info))
{return ctx;
} else
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data);
return ctx;
}
}));
