// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__20450){var map__20451 = p__20450;var map__20451__$1 = ((cljs.core.seq_QMARK_.call(null,map__20451))?cljs.core.apply.call(null,cljs.core.hash_map,map__20451):map__20451);var t = cljs.core.get.call(null,map__20451__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__20452){var map__20453 = p__20452;var map__20453__$1 = ((cljs.core.seq_QMARK_.call(null,map__20453))?cljs.core.apply.call(null,cljs.core.hash_map,map__20453):map__20453);var t = cljs.core.get.call(null,map__20453__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__20454){var map__20455 = p__20454;var map__20455__$1 = ((cljs.core.seq_QMARK_.call(null,map__20455))?cljs.core.apply.call(null,cljs.core.hash_map,map__20455):map__20455);var t = cljs.core.get.call(null,map__20455__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__20456,base,ctx){var map__20457 = p__20456;var map__20457__$1 = ((cljs.core.seq_QMARK_.call(null,map__20457))?cljs.core.apply.call(null,cljs.core.hash_map,map__20457):map__20457);var t = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__20458,w,h,ctx){var map__20464 = p__20458;var map__20464__$1 = ((cljs.core.seq_QMARK_.call(null,map__20464))?cljs.core.apply.call(null,cljs.core.hash_map,map__20464):map__20464);var info = map__20464__$1;var drawers = cljs.core.get.call(null,map__20464__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__20465 = cljs.core.seq.call(null,drawers);var chunk__20466 = null;var count__20467 = (0);var i__20468 = (0);while(true){
if((i__20468 < count__20467))
{var drawer = cljs.core._nth.call(null,chunk__20466,i__20468);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__20469 = seq__20465;
var G__20470 = chunk__20466;
var G__20471 = count__20467;
var G__20472 = (i__20468 + (1));
seq__20465 = G__20469;
chunk__20466 = G__20470;
count__20467 = G__20471;
i__20468 = G__20472;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20465);if(temp__4126__auto__)
{var seq__20465__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20465__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__20465__$1);{
var G__20473 = cljs.core.chunk_rest.call(null,seq__20465__$1);
var G__20474 = c__4307__auto__;
var G__20475 = cljs.core.count.call(null,c__4307__auto__);
var G__20476 = (0);
seq__20465 = G__20473;
chunk__20466 = G__20474;
count__20467 = G__20475;
i__20468 = G__20476;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__20465__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__20477 = cljs.core.next.call(null,seq__20465__$1);
var G__20478 = null;
var G__20479 = (0);
var G__20480 = (0);
seq__20465 = G__20477;
chunk__20466 = G__20478;
count__20467 = G__20479;
i__20468 = G__20480;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__20481){var map__20482 = p__20481;var map__20482__$1 = ((cljs.core.seq_QMARK_.call(null,map__20482))?cljs.core.apply.call(null,cljs.core.hash_map,map__20482):map__20482);var line = cljs.core.get.call(null,map__20482__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__20483){var map__20484 = p__20483;var map__20484__$1 = ((cljs.core.seq_QMARK_.call(null,map__20484))?cljs.core.apply.call(null,cljs.core.hash_map,map__20484):map__20484);var line = cljs.core.get.call(null,map__20484__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__20485){var map__20486 = p__20485;var map__20486__$1 = ((cljs.core.seq_QMARK_.call(null,map__20486))?cljs.core.apply.call(null,cljs.core.hash_map,map__20486):map__20486);var line = cljs.core.get.call(null,map__20486__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__20487,base,ctx){var map__20488 = p__20487;var map__20488__$1 = ((cljs.core.seq_QMARK_.call(null,map__20488))?cljs.core.apply.call(null,cljs.core.hash_map,map__20488):map__20488);var line = cljs.core.get.call(null,map__20488__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__20488__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__20489 = base;var w = cljs.core.nth.call(null,vec__20489,(0),null);var h = cljs.core.nth.call(null,vec__20489,(1),null);var max_v = cljs.core.nth.call(null,vec__20489,(2),null);var min_v = cljs.core.nth.call(null,vec__20489,(3),null);var offset_v = cljs.core.nth.call(null,vec__20489,(4),null);var offset_x = cljs.core.nth.call(null,vec__20489,(5),null);var pos_y = cljs.core.nth.call(null,vec__20489,(6),null);(ctx["strokeStyle"] = color);
var seq__20490 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__20489,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__20488,map__20488__$1,line,color){
return (function() { 
var G__20496__delegate = function (args){return args;
};
var G__20496 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20496__delegate.call(this,args);};
G__20496.cljs$lang$maxFixedArity = 0;
G__20496.cljs$lang$applyTo = (function (arglist__20497){
var args = cljs.core.seq(arglist__20497);
return G__20496__delegate(args);
});
G__20496.cljs$core$IFn$_invoke$arity$variadic = G__20496__delegate;
return G__20496;
})()
;})(vec__20489,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__20488,map__20488__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__20491 = null;var count__20492 = (0);var i__20493 = (0);while(true){
if((i__20493 < count__20492))
{var vec__20494 = cljs.core._nth.call(null,chunk__20491,i__20493);var idx = cljs.core.nth.call(null,vec__20494,(0),null);var prev = cljs.core.nth.call(null,vec__20494,(1),null);var curr = cljs.core.nth.call(null,vec__20494,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__20498 = seq__20490;
var G__20499 = chunk__20491;
var G__20500 = count__20492;
var G__20501 = (i__20493 + (1));
seq__20490 = G__20498;
chunk__20491 = G__20499;
count__20492 = G__20500;
i__20493 = G__20501;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20490);if(temp__4126__auto__)
{var seq__20490__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20490__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__20490__$1);{
var G__20502 = cljs.core.chunk_rest.call(null,seq__20490__$1);
var G__20503 = c__4307__auto__;
var G__20504 = cljs.core.count.call(null,c__4307__auto__);
var G__20505 = (0);
seq__20490 = G__20502;
chunk__20491 = G__20503;
count__20492 = G__20504;
i__20493 = G__20505;
continue;
}
} else
{var vec__20495 = cljs.core.first.call(null,seq__20490__$1);var idx = cljs.core.nth.call(null,vec__20495,(0),null);var prev = cljs.core.nth.call(null,vec__20495,(1),null);var curr = cljs.core.nth.call(null,vec__20495,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__20506 = cljs.core.next.call(null,seq__20490__$1);
var G__20507 = null;
var G__20508 = (0);
var G__20509 = (0);
seq__20490 = G__20506;
chunk__20491 = G__20507;
count__20492 = G__20508;
i__20493 = G__20509;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__20510){var map__20511 = p__20510;var map__20511__$1 = ((cljs.core.seq_QMARK_.call(null,map__20511))?cljs.core.apply.call(null,cljs.core.hash_map,map__20511):map__20511);var kline = cljs.core.get.call(null,map__20511__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__20512){var map__20513 = p__20512;var map__20513__$1 = ((cljs.core.seq_QMARK_.call(null,map__20513))?cljs.core.apply.call(null,cljs.core.hash_map,map__20513):map__20513);var kline = cljs.core.get.call(null,map__20513__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__20514){var map__20515 = p__20514;var map__20515__$1 = ((cljs.core.seq_QMARK_.call(null,map__20515))?cljs.core.apply.call(null,cljs.core.hash_map,map__20515):map__20515);var kline = cljs.core.get.call(null,map__20515__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__20516,base,ctx){var map__20517 = p__20516;var map__20517__$1 = ((cljs.core.seq_QMARK_.call(null,map__20517))?cljs.core.apply.call(null,cljs.core.hash_map,map__20517):map__20517);var kline = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__20518 = base;var w = cljs.core.nth.call(null,vec__20518,(0),null);var h = cljs.core.nth.call(null,vec__20518,(1),null);var max_v = cljs.core.nth.call(null,vec__20518,(2),null);var min_v = cljs.core.nth.call(null,vec__20518,(3),null);var offset_v = cljs.core.nth.call(null,vec__20518,(4),null);var offset_x = cljs.core.nth.call(null,vec__20518,(5),null);var pos_y = cljs.core.nth.call(null,vec__20518,(6),null);(ctx["fillStyle"] = "black");
var seq__20519 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__20518,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__20517,map__20517__$1,kline,info){
return (function() { 
var G__20527__delegate = function (args){return args;
};
var G__20527 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20527__delegate.call(this,args);};
G__20527.cljs$lang$maxFixedArity = 0;
G__20527.cljs$lang$applyTo = (function (arglist__20528){
var args = cljs.core.seq(arglist__20528);
return G__20527__delegate(args);
});
G__20527.cljs$core$IFn$_invoke$arity$variadic = G__20527__delegate;
return G__20527;
})()
;})(vec__20518,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__20517,map__20517__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__20520 = null;var count__20521 = (0);var i__20522 = (0);while(true){
if((i__20522 < count__20521))
{var vec__20523 = cljs.core._nth.call(null,chunk__20520,i__20522);var idx = cljs.core.nth.call(null,vec__20523,(0),null);var vec__20524 = cljs.core.nth.call(null,vec__20523,(1),null);var date = cljs.core.nth.call(null,vec__20524,(0),null);var open = cljs.core.nth.call(null,vec__20524,(1),null);var high = cljs.core.nth.call(null,vec__20524,(2),null);var low = cljs.core.nth.call(null,vec__20524,(3),null);var close = cljs.core.nth.call(null,vec__20524,(4),null);var volume = cljs.core.nth.call(null,vec__20524,(5),null);var info__$1 = cljs.core.nth.call(null,vec__20523,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__20529 = seq__20519;
var G__20530 = chunk__20520;
var G__20531 = count__20521;
var G__20532 = (i__20522 + (1));
seq__20519 = G__20529;
chunk__20520 = G__20530;
count__20521 = G__20531;
i__20522 = G__20532;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20519);if(temp__4126__auto__)
{var seq__20519__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20519__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__20519__$1);{
var G__20533 = cljs.core.chunk_rest.call(null,seq__20519__$1);
var G__20534 = c__4307__auto__;
var G__20535 = cljs.core.count.call(null,c__4307__auto__);
var G__20536 = (0);
seq__20519 = G__20533;
chunk__20520 = G__20534;
count__20521 = G__20535;
i__20522 = G__20536;
continue;
}
} else
{var vec__20525 = cljs.core.first.call(null,seq__20519__$1);var idx = cljs.core.nth.call(null,vec__20525,(0),null);var vec__20526 = cljs.core.nth.call(null,vec__20525,(1),null);var date = cljs.core.nth.call(null,vec__20526,(0),null);var open = cljs.core.nth.call(null,vec__20526,(1),null);var high = cljs.core.nth.call(null,vec__20526,(2),null);var low = cljs.core.nth.call(null,vec__20526,(3),null);var close = cljs.core.nth.call(null,vec__20526,(4),null);var volume = cljs.core.nth.call(null,vec__20526,(5),null);var info__$1 = cljs.core.nth.call(null,vec__20525,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__20537 = cljs.core.next.call(null,seq__20519__$1);
var G__20538 = null;
var G__20539 = (0);
var G__20540 = (0);
seq__20519 = G__20537;
chunk__20520 = G__20538;
count__20521 = G__20539;
i__20522 = G__20540;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__20541){var map__20542 = p__20541;var map__20542__$1 = ((cljs.core.seq_QMARK_.call(null,map__20542))?cljs.core.apply.call(null,cljs.core.hash_map,map__20542):map__20542);var cz = cljs.core.get.call(null,map__20542__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__20543){var map__20544 = p__20543;var map__20544__$1 = ((cljs.core.seq_QMARK_.call(null,map__20544))?cljs.core.apply.call(null,cljs.core.hash_map,map__20544):map__20544);var cz = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__20545,base,ctx){var map__20546 = p__20545;var map__20546__$1 = ((cljs.core.seq_QMARK_.call(null,map__20546))?cljs.core.apply.call(null,cljs.core.hash_map,map__20546):map__20546);var cz = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__20547 = base;var w = cljs.core.nth.call(null,vec__20547,(0),null);var h = cljs.core.nth.call(null,vec__20547,(1),null);var max_v = cljs.core.nth.call(null,vec__20547,(2),null);var min_v = cljs.core.nth.call(null,vec__20547,(3),null);var offset_v = cljs.core.nth.call(null,vec__20547,(4),null);var offset_x = cljs.core.nth.call(null,vec__20547,(5),null);var pos_y = cljs.core.nth.call(null,vec__20547,(6),null);var proj_x = ((function (vec__20547,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__20546,map__20546__$1,cz,vz){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(vec__20547,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__20546,map__20546__$1,cz,vz))
;var proj_y = ((function (vec__20547,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__20546,map__20546__$1,cz,vz){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(vec__20547,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__20546,map__20546__$1,cz,vz))
;(ctx["fillStyle"] = "red");
(ctx["strokeStyle"] = "red");
var seq__20548 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__20547,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__20546,map__20546__$1,cz,vz){
return (function() { 
var G__20554__delegate = function (args){return args;
};
var G__20554 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20554__delegate.call(this,args);};
G__20554.cljs$lang$maxFixedArity = 0;
G__20554.cljs$lang$applyTo = (function (arglist__20555){
var args = cljs.core.seq(arglist__20555);
return G__20554__delegate(args);
});
G__20554.cljs$core$IFn$_invoke$arity$variadic = G__20554__delegate;
return G__20554;
})()
;})(vec__20547,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__20546,map__20546__$1,cz,vz))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__20549 = null;var count__20550 = (0);var i__20551 = (0);while(true){
if((i__20551 < count__20550))
{var vec__20552 = cljs.core._nth.call(null,chunk__20549,i__20551);var idx = cljs.core.nth.call(null,vec__20552,(0),null);var pc = cljs.core.nth.call(null,vec__20552,(1),null);var cc = cljs.core.nth.call(null,vec__20552,(2),null);var pv = cljs.core.nth.call(null,vec__20552,(3),null);var cv = cljs.core.nth.call(null,vec__20552,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__20556 = seq__20548;
var G__20557 = chunk__20549;
var G__20558 = count__20550;
var G__20559 = (i__20551 + (1));
seq__20548 = G__20556;
chunk__20549 = G__20557;
count__20550 = G__20558;
i__20551 = G__20559;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20548);if(temp__4126__auto__)
{var seq__20548__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20548__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__20548__$1);{
var G__20560 = cljs.core.chunk_rest.call(null,seq__20548__$1);
var G__20561 = c__4307__auto__;
var G__20562 = cljs.core.count.call(null,c__4307__auto__);
var G__20563 = (0);
seq__20548 = G__20560;
chunk__20549 = G__20561;
count__20550 = G__20562;
i__20551 = G__20563;
continue;
}
} else
{var vec__20553 = cljs.core.first.call(null,seq__20548__$1);var idx = cljs.core.nth.call(null,vec__20553,(0),null);var pc = cljs.core.nth.call(null,vec__20553,(1),null);var cc = cljs.core.nth.call(null,vec__20553,(2),null);var pv = cljs.core.nth.call(null,vec__20553,(3),null);var cv = cljs.core.nth.call(null,vec__20553,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__20564 = cljs.core.next.call(null,seq__20548__$1);
var G__20565 = null;
var G__20566 = (0);
var G__20567 = (0);
seq__20548 = G__20564;
chunk__20549 = G__20565;
count__20550 = G__20566;
i__20551 = G__20567;
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
