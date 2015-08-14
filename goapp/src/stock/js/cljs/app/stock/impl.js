// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.impl');
goog.require('cljs.core');
goog.require('app.stock.abstract$');
goog.require('app.stock.cmd');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.abstract$');
goog.require('app.stock.cmd');
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){console.log(("onSystem-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
console.log(cljs.core.pr_str.call(null,data));
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__20604 = data;var err = cljs.core.nth.call(null,vec__20604,(0),null);var kline = cljs.core.nth.call(null,vec__20604,(1),null);var id = cljs.core.nth.call(null,vec__20604,(2),null);var date = cljs.core.nth.call(null,vec__20604,(3),null);if(cljs.core.truth_(err))
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId_20615 = (data["id"]);var type_20616 = (data["type"]);var canvas_20617 = (data["canvas"]);var sub_20618 = cljs.core.js__GT_clj.call(null,(data["sub"]));var map__20605_20619 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stockId_20615], null));var map__20605_20620__$1 = ((cljs.core.seq_QMARK_.call(null,map__20605_20619))?cljs.core.apply.call(null,cljs.core.hash_map,map__20605_20619):map__20605_20619);var stock_20621__$1 = map__20605_20620__$1;var kline_20622 = cljs.core.get.call(null,map__20605_20620__$1,"data");var vs_20623 = (function (){var pred__20606 = cljs.core._EQ_;var expr__20607 = type_20616;if(cljs.core.truth_(pred__20606.call(null,"volume",expr__20607)))
{return stock.tool.volume.call(null,kline_20622);
} else
{return stock.tool.close.call(null,kline_20622);
}
})();if(cljs.core.truth_(kline_20622))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__20609 = cljs.core._EQ_;var expr__20610 = type_20616;if(cljs.core.truth_(pred__20609.call(null,"volume",expr__20610)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline_20622)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline_20622], null);
}
})(),cljs.core.map.call(null,((function (stockId_20615,type_20616,canvas_20617,sub_20618,map__20605_20619,map__20605_20620__$1,stock_20621__$1,kline_20622,vs_20623){
return (function (data__$1){var subt = cljs.core.get.call(null,data__$1,"t");var subd = cljs.core.get.call(null,data__$1,"d");var pred__20612 = cljs.core._EQ_;var expr__20613 = subt;if(cljs.core.truth_(pred__20612.call(null,"ma",expr__20613)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs_20623),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs_20623),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
});})(stockId_20615,type_20616,canvas_20617,sub_20618,map__20605_20619,map__20605_20620__$1,stock_20621__$1,kline_20622,vs_20623))
,sub_20618))], null),canvas_20617.width,canvas_20617.height,canvas_20617.getContext("2d"));
} else
{}
console.log(kline_20622);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stock-id",(function (_,data,ctx){var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id = (data["id"]);var date = (data["date"]);var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),"stocks",stock_id], null));if(cljs.core.truth_(stock_info))
{return ctx;
} else
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date);
return ctx;
}
}));
