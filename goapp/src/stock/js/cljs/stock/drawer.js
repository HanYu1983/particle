// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110401){var map__110402 = p__110401;var map__110402__$1 = ((cljs.core.seq_QMARK_.call(null,map__110402))?cljs.core.apply.call(null,cljs.core.hash_map,map__110402):map__110402);var t = cljs.core.get.call(null,map__110402__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110403){var map__110404 = p__110403;var map__110404__$1 = ((cljs.core.seq_QMARK_.call(null,map__110404))?cljs.core.apply.call(null,cljs.core.hash_map,map__110404):map__110404);var t = cljs.core.get.call(null,map__110404__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110405){var map__110406 = p__110405;var map__110406__$1 = ((cljs.core.seq_QMARK_.call(null,map__110406))?cljs.core.apply.call(null,cljs.core.hash_map,map__110406):map__110406);var t = cljs.core.get.call(null,map__110406__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110407,base,ctx){var map__110408 = p__110407;var map__110408__$1 = ((cljs.core.seq_QMARK_.call(null,map__110408))?cljs.core.apply.call(null,cljs.core.hash_map,map__110408):map__110408);var t = cljs.core.get.call(null,map__110408__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__110409,w,h,ctx){var map__110415 = p__110409;var map__110415__$1 = ((cljs.core.seq_QMARK_.call(null,map__110415))?cljs.core.apply.call(null,cljs.core.hash_map,map__110415):map__110415);var info = map__110415__$1;var drawers = cljs.core.get.call(null,map__110415__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__110416 = cljs.core.seq.call(null,drawers);var chunk__110417 = null;var count__110418 = (0);var i__110419 = (0);while(true){
if((i__110419 < count__110418))
{var drawer = cljs.core._nth.call(null,chunk__110417,i__110419);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__110420 = seq__110416;
var G__110421 = chunk__110417;
var G__110422 = count__110418;
var G__110423 = (i__110419 + (1));
seq__110416 = G__110420;
chunk__110417 = G__110421;
count__110418 = G__110422;
i__110419 = G__110423;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110416);if(temp__4126__auto__)
{var seq__110416__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110416__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110416__$1);{
var G__110424 = cljs.core.chunk_rest.call(null,seq__110416__$1);
var G__110425 = c__4307__auto__;
var G__110426 = cljs.core.count.call(null,c__4307__auto__);
var G__110427 = (0);
seq__110416 = G__110424;
chunk__110417 = G__110425;
count__110418 = G__110426;
i__110419 = G__110427;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__110416__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__110428 = cljs.core.next.call(null,seq__110416__$1);
var G__110429 = null;
var G__110430 = (0);
var G__110431 = (0);
seq__110416 = G__110428;
chunk__110417 = G__110429;
count__110418 = G__110430;
i__110419 = G__110431;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info){return (0);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info){return (0);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info){return (0);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info,base,ctx){return null;
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110432){var map__110433 = p__110432;var map__110433__$1 = ((cljs.core.seq_QMARK_.call(null,map__110433))?cljs.core.apply.call(null,cljs.core.hash_map,map__110433):map__110433);var line = cljs.core.get.call(null,map__110433__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110434){var map__110435 = p__110434;var map__110435__$1 = ((cljs.core.seq_QMARK_.call(null,map__110435))?cljs.core.apply.call(null,cljs.core.hash_map,map__110435):map__110435);var line = cljs.core.get.call(null,map__110435__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110436){var map__110437 = p__110436;var map__110437__$1 = ((cljs.core.seq_QMARK_.call(null,map__110437))?cljs.core.apply.call(null,cljs.core.hash_map,map__110437):map__110437);var line = cljs.core.get.call(null,map__110437__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110438,base,ctx){var map__110439 = p__110438;var map__110439__$1 = ((cljs.core.seq_QMARK_.call(null,map__110439))?cljs.core.apply.call(null,cljs.core.hash_map,map__110439):map__110439);var line = cljs.core.get.call(null,map__110439__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__110439__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__110439__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var vec__110440 = base;var w = cljs.core.nth.call(null,vec__110440,(0),null);var h = cljs.core.nth.call(null,vec__110440,(1),null);var max_v = cljs.core.nth.call(null,vec__110440,(2),null);var min_v = cljs.core.nth.call(null,vec__110440,(3),null);var offset_v = cljs.core.nth.call(null,vec__110440,(4),null);var offset_x = cljs.core.nth.call(null,vec__110440,(5),null);var pos_y = cljs.core.nth.call(null,vec__110440,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
var seq__110441 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__110440,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__110439,map__110439__$1,line,color,offset){
return (function() { 
var G__110447__delegate = function (args){return args;
};
var G__110447 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__110447__delegate.call(this,args);};
G__110447.cljs$lang$maxFixedArity = 0;
G__110447.cljs$lang$applyTo = (function (arglist__110448){
var args = cljs.core.seq(arglist__110448);
return G__110447__delegate(args);
});
G__110447.cljs$core$IFn$_invoke$arity$variadic = G__110447__delegate;
return G__110447;
})()
;})(vec__110440,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__110439,map__110439__$1,line,color,offset))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__110442 = null;var count__110443 = (0);var i__110444 = (0);while(true){
if((i__110444 < count__110443))
{var vec__110445 = cljs.core._nth.call(null,chunk__110442,i__110444);var idx = cljs.core.nth.call(null,vec__110445,(0),null);var prev = cljs.core.nth.call(null,vec__110445,(1),null);var curr = cljs.core.nth.call(null,vec__110445,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo(((idx + offset__$1) * offset_x),pos_y.call(null,prev));
ctx.lineTo((((idx + offset__$1) + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__110449 = seq__110441;
var G__110450 = chunk__110442;
var G__110451 = count__110443;
var G__110452 = (i__110444 + (1));
seq__110441 = G__110449;
chunk__110442 = G__110450;
count__110443 = G__110451;
i__110444 = G__110452;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110441);if(temp__4126__auto__)
{var seq__110441__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110441__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110441__$1);{
var G__110453 = cljs.core.chunk_rest.call(null,seq__110441__$1);
var G__110454 = c__4307__auto__;
var G__110455 = cljs.core.count.call(null,c__4307__auto__);
var G__110456 = (0);
seq__110441 = G__110453;
chunk__110442 = G__110454;
count__110443 = G__110455;
i__110444 = G__110456;
continue;
}
} else
{var vec__110446 = cljs.core.first.call(null,seq__110441__$1);var idx = cljs.core.nth.call(null,vec__110446,(0),null);var prev = cljs.core.nth.call(null,vec__110446,(1),null);var curr = cljs.core.nth.call(null,vec__110446,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo(((idx + offset__$1) * offset_x),pos_y.call(null,prev));
ctx.lineTo((((idx + offset__$1) + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__110457 = cljs.core.next.call(null,seq__110441__$1);
var G__110458 = null;
var G__110459 = (0);
var G__110460 = (0);
seq__110441 = G__110457;
chunk__110442 = G__110458;
count__110443 = G__110459;
i__110444 = G__110460;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110461){var map__110462 = p__110461;var map__110462__$1 = ((cljs.core.seq_QMARK_.call(null,map__110462))?cljs.core.apply.call(null,cljs.core.hash_map,map__110462):map__110462);var kline = cljs.core.get.call(null,map__110462__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110463){var map__110464 = p__110463;var map__110464__$1 = ((cljs.core.seq_QMARK_.call(null,map__110464))?cljs.core.apply.call(null,cljs.core.hash_map,map__110464):map__110464);var kline = cljs.core.get.call(null,map__110464__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110465){var map__110466 = p__110465;var map__110466__$1 = ((cljs.core.seq_QMARK_.call(null,map__110466))?cljs.core.apply.call(null,cljs.core.hash_map,map__110466):map__110466);var kline = cljs.core.get.call(null,map__110466__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110467,base,ctx){var map__110468 = p__110467;var map__110468__$1 = ((cljs.core.seq_QMARK_.call(null,map__110468))?cljs.core.apply.call(null,cljs.core.hash_map,map__110468):map__110468);var kline = cljs.core.get.call(null,map__110468__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__110468__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__110469 = base;var w = cljs.core.nth.call(null,vec__110469,(0),null);var h = cljs.core.nth.call(null,vec__110469,(1),null);var max_v = cljs.core.nth.call(null,vec__110469,(2),null);var min_v = cljs.core.nth.call(null,vec__110469,(3),null);var offset_v = cljs.core.nth.call(null,vec__110469,(4),null);var offset_x = cljs.core.nth.call(null,vec__110469,(5),null);var pos_y = cljs.core.nth.call(null,vec__110469,(6),null);(ctx["fillStyle"] = "black");
var seq__110470 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__110469,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110468,map__110468__$1,kline,info){
return (function() { 
var G__110478__delegate = function (args){return args;
};
var G__110478 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__110478__delegate.call(this,args);};
G__110478.cljs$lang$maxFixedArity = 0;
G__110478.cljs$lang$applyTo = (function (arglist__110479){
var args = cljs.core.seq(arglist__110479);
return G__110478__delegate(args);
});
G__110478.cljs$core$IFn$_invoke$arity$variadic = G__110478__delegate;
return G__110478;
})()
;})(vec__110469,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110468,map__110468__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__110471 = null;var count__110472 = (0);var i__110473 = (0);while(true){
if((i__110473 < count__110472))
{var vec__110474 = cljs.core._nth.call(null,chunk__110471,i__110473);var idx = cljs.core.nth.call(null,vec__110474,(0),null);var vec__110475 = cljs.core.nth.call(null,vec__110474,(1),null);var date = cljs.core.nth.call(null,vec__110475,(0),null);var open = cljs.core.nth.call(null,vec__110475,(1),null);var high = cljs.core.nth.call(null,vec__110475,(2),null);var low = cljs.core.nth.call(null,vec__110475,(3),null);var close = cljs.core.nth.call(null,vec__110475,(4),null);var volume = cljs.core.nth.call(null,vec__110475,(5),null);var info__$1 = cljs.core.nth.call(null,vec__110474,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__110480 = seq__110470;
var G__110481 = chunk__110471;
var G__110482 = count__110472;
var G__110483 = (i__110473 + (1));
seq__110470 = G__110480;
chunk__110471 = G__110481;
count__110472 = G__110482;
i__110473 = G__110483;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110470);if(temp__4126__auto__)
{var seq__110470__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110470__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110470__$1);{
var G__110484 = cljs.core.chunk_rest.call(null,seq__110470__$1);
var G__110485 = c__4307__auto__;
var G__110486 = cljs.core.count.call(null,c__4307__auto__);
var G__110487 = (0);
seq__110470 = G__110484;
chunk__110471 = G__110485;
count__110472 = G__110486;
i__110473 = G__110487;
continue;
}
} else
{var vec__110476 = cljs.core.first.call(null,seq__110470__$1);var idx = cljs.core.nth.call(null,vec__110476,(0),null);var vec__110477 = cljs.core.nth.call(null,vec__110476,(1),null);var date = cljs.core.nth.call(null,vec__110477,(0),null);var open = cljs.core.nth.call(null,vec__110477,(1),null);var high = cljs.core.nth.call(null,vec__110477,(2),null);var low = cljs.core.nth.call(null,vec__110477,(3),null);var close = cljs.core.nth.call(null,vec__110477,(4),null);var volume = cljs.core.nth.call(null,vec__110477,(5),null);var info__$1 = cljs.core.nth.call(null,vec__110476,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__110488 = cljs.core.next.call(null,seq__110470__$1);
var G__110489 = null;
var G__110490 = (0);
var G__110491 = (0);
seq__110470 = G__110488;
chunk__110471 = G__110489;
count__110472 = G__110490;
i__110473 = G__110491;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__110492){var map__110493 = p__110492;var map__110493__$1 = ((cljs.core.seq_QMARK_.call(null,map__110493))?cljs.core.apply.call(null,cljs.core.hash_map,map__110493):map__110493);var cz = cljs.core.get.call(null,map__110493__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__110494){var map__110495 = p__110494;var map__110495__$1 = ((cljs.core.seq_QMARK_.call(null,map__110495))?cljs.core.apply.call(null,cljs.core.hash_map,map__110495):map__110495);var cz = cljs.core.get.call(null,map__110495__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__110496,base,ctx){var map__110497 = p__110496;var map__110497__$1 = ((cljs.core.seq_QMARK_.call(null,map__110497))?cljs.core.apply.call(null,cljs.core.hash_map,map__110497):map__110497);var cz = cljs.core.get.call(null,map__110497__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__110497__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__110497__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__110498 = base;var w = cljs.core.nth.call(null,vec__110498,(0),null);var h = cljs.core.nth.call(null,vec__110498,(1),null);var max_v = cljs.core.nth.call(null,vec__110498,(2),null);var min_v = cljs.core.nth.call(null,vec__110498,(3),null);var offset_v = cljs.core.nth.call(null,vec__110498,(4),null);var offset_x = cljs.core.nth.call(null,vec__110498,(5),null);var pos_y = cljs.core.nth.call(null,vec__110498,(6),null);var proj_x = ((function (vec__110498,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110497,map__110497__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__110498,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110497,map__110497__$1,cz,vz,color))
;var proj_y = ((function (vec__110498,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__110497,map__110497__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__110498,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__110497,map__110497__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__110499 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__110498,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__110497,map__110497__$1,cz,vz,color){
return (function() { 
var G__110505__delegate = function (args){return args;
};
var G__110505 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__110505__delegate.call(this,args);};
G__110505.cljs$lang$maxFixedArity = 0;
G__110505.cljs$lang$applyTo = (function (arglist__110506){
var args = cljs.core.seq(arglist__110506);
return G__110505__delegate(args);
});
G__110505.cljs$core$IFn$_invoke$arity$variadic = G__110505__delegate;
return G__110505;
})()
;})(vec__110498,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__110497,map__110497__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__110500 = null;var count__110501 = (0);var i__110502 = (0);while(true){
if((i__110502 < count__110501))
{var vec__110503 = cljs.core._nth.call(null,chunk__110500,i__110502);var idx = cljs.core.nth.call(null,vec__110503,(0),null);var pc = cljs.core.nth.call(null,vec__110503,(1),null);var cc = cljs.core.nth.call(null,vec__110503,(2),null);var pv = cljs.core.nth.call(null,vec__110503,(3),null);var cv = cljs.core.nth.call(null,vec__110503,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__110507 = seq__110499;
var G__110508 = chunk__110500;
var G__110509 = count__110501;
var G__110510 = (i__110502 + (1));
seq__110499 = G__110507;
chunk__110500 = G__110508;
count__110501 = G__110509;
i__110502 = G__110510;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110499);if(temp__4126__auto__)
{var seq__110499__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110499__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110499__$1);{
var G__110511 = cljs.core.chunk_rest.call(null,seq__110499__$1);
var G__110512 = c__4307__auto__;
var G__110513 = cljs.core.count.call(null,c__4307__auto__);
var G__110514 = (0);
seq__110499 = G__110511;
chunk__110500 = G__110512;
count__110501 = G__110513;
i__110502 = G__110514;
continue;
}
} else
{var vec__110504 = cljs.core.first.call(null,seq__110499__$1);var idx = cljs.core.nth.call(null,vec__110504,(0),null);var pc = cljs.core.nth.call(null,vec__110504,(1),null);var cc = cljs.core.nth.call(null,vec__110504,(2),null);var pv = cljs.core.nth.call(null,vec__110504,(3),null);var cv = cljs.core.nth.call(null,vec__110504,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__110515 = cljs.core.next.call(null,seq__110499__$1);
var G__110516 = null;
var G__110517 = (0);
var G__110518 = (0);
seq__110499 = G__110515;
chunk__110500 = G__110516;
count__110501 = G__110517;
i__110502 = G__110518;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
