// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26422){var map__26423 = p__26422;var map__26423__$1 = ((cljs.core.seq_QMARK_.call(null,map__26423))?cljs.core.apply.call(null,cljs.core.hash_map,map__26423):map__26423);var t = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26424){var map__26425 = p__26424;var map__26425__$1 = ((cljs.core.seq_QMARK_.call(null,map__26425))?cljs.core.apply.call(null,cljs.core.hash_map,map__26425):map__26425);var t = cljs.core.get.call(null,map__26425__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26426){var map__26427 = p__26426;var map__26427__$1 = ((cljs.core.seq_QMARK_.call(null,map__26427))?cljs.core.apply.call(null,cljs.core.hash_map,map__26427):map__26427);var t = cljs.core.get.call(null,map__26427__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26428,base,ctx){var map__26429 = p__26428;var map__26429__$1 = ((cljs.core.seq_QMARK_.call(null,map__26429))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);var t = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__26430,w,h,ctx){var map__26436 = p__26430;var map__26436__$1 = ((cljs.core.seq_QMARK_.call(null,map__26436))?cljs.core.apply.call(null,cljs.core.hash_map,map__26436):map__26436);var info = map__26436__$1;var drawers = cljs.core.get.call(null,map__26436__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__26437 = cljs.core.seq.call(null,drawers);var chunk__26438 = null;var count__26439 = (0);var i__26440 = (0);while(true){
if((i__26440 < count__26439))
{var drawer = cljs.core._nth.call(null,chunk__26438,i__26440);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__26441 = seq__26437;
var G__26442 = chunk__26438;
var G__26443 = count__26439;
var G__26444 = (i__26440 + (1));
seq__26437 = G__26441;
chunk__26438 = G__26442;
count__26439 = G__26443;
i__26440 = G__26444;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26437);if(temp__4126__auto__)
{var seq__26437__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26437__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26437__$1);{
var G__26445 = cljs.core.chunk_rest.call(null,seq__26437__$1);
var G__26446 = c__4307__auto__;
var G__26447 = cljs.core.count.call(null,c__4307__auto__);
var G__26448 = (0);
seq__26437 = G__26445;
chunk__26438 = G__26446;
count__26439 = G__26447;
i__26440 = G__26448;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__26437__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__26449 = cljs.core.next.call(null,seq__26437__$1);
var G__26450 = null;
var G__26451 = (0);
var G__26452 = (0);
seq__26437 = G__26449;
chunk__26438 = G__26450;
count__26439 = G__26451;
i__26440 = G__26452;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26453){var map__26454 = p__26453;var map__26454__$1 = ((cljs.core.seq_QMARK_.call(null,map__26454))?cljs.core.apply.call(null,cljs.core.hash_map,map__26454):map__26454);var line = cljs.core.get.call(null,map__26454__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26454__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26455){var map__26456 = p__26455;var map__26456__$1 = ((cljs.core.seq_QMARK_.call(null,map__26456))?cljs.core.apply.call(null,cljs.core.hash_map,map__26456):map__26456);var line = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26457){var map__26458 = p__26457;var map__26458__$1 = ((cljs.core.seq_QMARK_.call(null,map__26458))?cljs.core.apply.call(null,cljs.core.hash_map,map__26458):map__26458);var line = cljs.core.get.call(null,map__26458__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26458__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26459,base,ctx){var map__26460 = p__26459;var map__26460__$1 = ((cljs.core.seq_QMARK_.call(null,map__26460))?cljs.core.apply.call(null,cljs.core.hash_map,map__26460):map__26460);var line = cljs.core.get.call(null,map__26460__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26460__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__26460__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__26460__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__26461 = base;var w = cljs.core.nth.call(null,vec__26461,(0),null);var h = cljs.core.nth.call(null,vec__26461,(1),null);var max_v = cljs.core.nth.call(null,vec__26461,(2),null);var min_v = cljs.core.nth.call(null,vec__26461,(3),null);var offset_v = cljs.core.nth.call(null,vec__26461,(4),null);var offset_x = cljs.core.nth.call(null,vec__26461,(5),null);var pos_y = cljs.core.nth.call(null,vec__26461,(6),null);var cnt = (6);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__26462_26474 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__26463_26475 = null;var count__26464_26476 = (0);var i__26465_26477 = (0);while(true){
if((i__26465_26477 < count__26464_26476))
{var i_26478 = cljs.core._nth.call(null,chunk__26463_26475,i__26465_26477);var v_26479 = (min_v + (i_26478 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26479.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_26479));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26479.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_26479));
ctx.moveTo((0),pos_y.call(null,v_26479));
ctx.lineTo(w,pos_y.call(null,v_26479));
{
var G__26480 = seq__26462_26474;
var G__26481 = chunk__26463_26475;
var G__26482 = count__26464_26476;
var G__26483 = (i__26465_26477 + (1));
seq__26462_26474 = G__26480;
chunk__26463_26475 = G__26481;
count__26464_26476 = G__26482;
i__26465_26477 = G__26483;
continue;
}
} else
{var temp__4126__auto___26484 = cljs.core.seq.call(null,seq__26462_26474);if(temp__4126__auto___26484)
{var seq__26462_26485__$1 = temp__4126__auto___26484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26462_26485__$1))
{var c__4307__auto___26486 = cljs.core.chunk_first.call(null,seq__26462_26485__$1);{
var G__26487 = cljs.core.chunk_rest.call(null,seq__26462_26485__$1);
var G__26488 = c__4307__auto___26486;
var G__26489 = cljs.core.count.call(null,c__4307__auto___26486);
var G__26490 = (0);
seq__26462_26474 = G__26487;
chunk__26463_26475 = G__26488;
count__26464_26476 = G__26489;
i__26465_26477 = G__26490;
continue;
}
} else
{var i_26491 = cljs.core.first.call(null,seq__26462_26485__$1);var v_26492 = (min_v + (i_26491 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26492.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_26492));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26492.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_26492));
ctx.moveTo((0),pos_y.call(null,v_26492));
ctx.lineTo(w,pos_y.call(null,v_26492));
{
var G__26493 = cljs.core.next.call(null,seq__26462_26485__$1);
var G__26494 = null;
var G__26495 = (0);
var G__26496 = (0);
seq__26462_26474 = G__26493;
chunk__26463_26475 = G__26494;
count__26464_26476 = G__26495;
i__26465_26477 = G__26496;
continue;
}
}
} else
{}
}
break;
}
}
if(cljs.core.truth_(kline))
{var seq__26466_26497 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__26467_26498 = null;var count__26468_26499 = (0);var i__26469_26500 = (0);while(true){
if((i__26469_26500 < count__26468_26499))
{var i_26501 = cljs.core._nth.call(null,chunk__26467_26498,i__26469_26500);if((cljs.core.mod.call(null,i_26501,cntx) === (0)))
{var posx_26502 = ((offset_x / (2)) + (i_26501 * offset_x));ctx.moveTo(posx_26502,(0));
ctx.lineTo(posx_26502,h);
} else
{}
{
var G__26503 = seq__26466_26497;
var G__26504 = chunk__26467_26498;
var G__26505 = count__26468_26499;
var G__26506 = (i__26469_26500 + (1));
seq__26466_26497 = G__26503;
chunk__26467_26498 = G__26504;
count__26468_26499 = G__26505;
i__26469_26500 = G__26506;
continue;
}
} else
{var temp__4126__auto___26507 = cljs.core.seq.call(null,seq__26466_26497);if(temp__4126__auto___26507)
{var seq__26466_26508__$1 = temp__4126__auto___26507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26466_26508__$1))
{var c__4307__auto___26509 = cljs.core.chunk_first.call(null,seq__26466_26508__$1);{
var G__26510 = cljs.core.chunk_rest.call(null,seq__26466_26508__$1);
var G__26511 = c__4307__auto___26509;
var G__26512 = cljs.core.count.call(null,c__4307__auto___26509);
var G__26513 = (0);
seq__26466_26497 = G__26510;
chunk__26467_26498 = G__26511;
count__26468_26499 = G__26512;
i__26469_26500 = G__26513;
continue;
}
} else
{var i_26514 = cljs.core.first.call(null,seq__26466_26508__$1);if((cljs.core.mod.call(null,i_26514,cntx) === (0)))
{var posx_26515 = ((offset_x / (2)) + (i_26514 * offset_x));ctx.moveTo(posx_26515,(0));
ctx.lineTo(posx_26515,h);
} else
{}
{
var G__26516 = cljs.core.next.call(null,seq__26466_26508__$1);
var G__26517 = null;
var G__26518 = (0);
var G__26519 = (0);
seq__26466_26497 = G__26516;
chunk__26467_26498 = G__26517;
count__26468_26499 = G__26518;
i__26469_26500 = G__26519;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core.truth_(line))
{var seq__26470_26520 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__26471_26521 = null;var count__26472_26522 = (0);var i__26473_26523 = (0);while(true){
if((i__26473_26523 < count__26472_26522))
{var i_26524 = cljs.core._nth.call(null,chunk__26471_26521,i__26473_26523);if((cljs.core.mod.call(null,i_26524,cntx) === (0)))
{var posx_26525 = ((offset_x / (2)) + (i_26524 * offset_x));ctx.moveTo(posx_26525,(0));
ctx.lineTo(posx_26525,h);
} else
{}
{
var G__26526 = seq__26470_26520;
var G__26527 = chunk__26471_26521;
var G__26528 = count__26472_26522;
var G__26529 = (i__26473_26523 + (1));
seq__26470_26520 = G__26526;
chunk__26471_26521 = G__26527;
count__26472_26522 = G__26528;
i__26473_26523 = G__26529;
continue;
}
} else
{var temp__4126__auto___26530 = cljs.core.seq.call(null,seq__26470_26520);if(temp__4126__auto___26530)
{var seq__26470_26531__$1 = temp__4126__auto___26530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26470_26531__$1))
{var c__4307__auto___26532 = cljs.core.chunk_first.call(null,seq__26470_26531__$1);{
var G__26533 = cljs.core.chunk_rest.call(null,seq__26470_26531__$1);
var G__26534 = c__4307__auto___26532;
var G__26535 = cljs.core.count.call(null,c__4307__auto___26532);
var G__26536 = (0);
seq__26470_26520 = G__26533;
chunk__26471_26521 = G__26534;
count__26472_26522 = G__26535;
i__26473_26523 = G__26536;
continue;
}
} else
{var i_26537 = cljs.core.first.call(null,seq__26470_26531__$1);if((cljs.core.mod.call(null,i_26537,cntx) === (0)))
{var posx_26538 = ((offset_x / (2)) + (i_26537 * offset_x));ctx.moveTo(posx_26538,(0));
ctx.lineTo(posx_26538,h);
} else
{}
{
var G__26539 = cljs.core.next.call(null,seq__26470_26531__$1);
var G__26540 = null;
var G__26541 = (0);
var G__26542 = (0);
seq__26470_26520 = G__26539;
chunk__26471_26521 = G__26540;
count__26472_26522 = G__26541;
i__26473_26523 = G__26542;
continue;
}
}
} else
{}
}
break;
}
} else
{}
return ctx.stroke();
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26543){var map__26544 = p__26543;var map__26544__$1 = ((cljs.core.seq_QMARK_.call(null,map__26544))?cljs.core.apply.call(null,cljs.core.hash_map,map__26544):map__26544);var line = cljs.core.get.call(null,map__26544__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26545){var map__26546 = p__26545;var map__26546__$1 = ((cljs.core.seq_QMARK_.call(null,map__26546))?cljs.core.apply.call(null,cljs.core.hash_map,map__26546):map__26546);var line = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26547){var map__26548 = p__26547;var map__26548__$1 = ((cljs.core.seq_QMARK_.call(null,map__26548))?cljs.core.apply.call(null,cljs.core.hash_map,map__26548):map__26548);var line = cljs.core.get.call(null,map__26548__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26549,base,ctx){var map__26550 = p__26549;var map__26550__$1 = ((cljs.core.seq_QMARK_.call(null,map__26550))?cljs.core.apply.call(null,cljs.core.hash_map,map__26550):map__26550);var line = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__26551 = base;var w = cljs.core.nth.call(null,vec__26551,(0),null);var h = cljs.core.nth.call(null,vec__26551,(1),null);var max_v = cljs.core.nth.call(null,vec__26551,(2),null);var min_v = cljs.core.nth.call(null,vec__26551,(3),null);var offset_v = cljs.core.nth.call(null,vec__26551,(4),null);var offset_x = cljs.core.nth.call(null,vec__26551,(5),null);var pos_y = cljs.core.nth.call(null,vec__26551,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__26552 = cljs.core._EQ_;var expr__26553 = style;if(cljs.core.truth_(pred__26552.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__26553)))
{(ctx["fillStyle"] = color);
var seq__26555 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__26556 = null;var count__26557 = (0);var i__26558 = (0);while(true){
if((i__26558 < count__26557))
{var vec__26559 = cljs.core._nth.call(null,chunk__26556,i__26558);var idx = cljs.core.nth.call(null,vec__26559,(0),null);var value = cljs.core.nth.call(null,vec__26559,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__26567 = seq__26555;
var G__26568 = chunk__26556;
var G__26569 = count__26557;
var G__26570 = (i__26558 + (1));
seq__26555 = G__26567;
chunk__26556 = G__26568;
count__26557 = G__26569;
i__26558 = G__26570;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26555);if(temp__4126__auto__)
{var seq__26555__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26555__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26555__$1);{
var G__26571 = cljs.core.chunk_rest.call(null,seq__26555__$1);
var G__26572 = c__4307__auto__;
var G__26573 = cljs.core.count.call(null,c__4307__auto__);
var G__26574 = (0);
seq__26555 = G__26571;
chunk__26556 = G__26572;
count__26557 = G__26573;
i__26558 = G__26574;
continue;
}
} else
{var vec__26560 = cljs.core.first.call(null,seq__26555__$1);var idx = cljs.core.nth.call(null,vec__26560,(0),null);var value = cljs.core.nth.call(null,vec__26560,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__26575 = cljs.core.next.call(null,seq__26555__$1);
var G__26576 = null;
var G__26577 = (0);
var G__26578 = (0);
seq__26555 = G__26575;
chunk__26556 = G__26576;
count__26557 = G__26577;
i__26558 = G__26578;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{ctx.beginPath();
var seq__26561_26579 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__26552,expr__26553,vec__26551,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__26550,map__26550__$1,line,color,offset,style){
return (function() { 
var G__26583__delegate = function (args){return args;
};
var G__26583 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26583__delegate.call(this,args);};
G__26583.cljs$lang$maxFixedArity = 0;
G__26583.cljs$lang$applyTo = (function (arglist__26584){
var args = cljs.core.seq(arglist__26584);
return G__26583__delegate(args);
});
G__26583.cljs$core$IFn$_invoke$arity$variadic = G__26583__delegate;
return G__26583;
})()
;})(pred__26552,expr__26553,vec__26551,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__26550,map__26550__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__26562_26580 = null;var count__26563_26581 = (0);var i__26564_26582 = (0);while(true){
if((i__26564_26582 < count__26563_26581))
{var vec__26565_26585 = cljs.core._nth.call(null,chunk__26562_26580,i__26564_26582);var idx_26586 = cljs.core.nth.call(null,vec__26565_26585,(0),null);var prev_26587 = cljs.core.nth.call(null,vec__26565_26585,(1),null);var curr_26588 = cljs.core.nth.call(null,vec__26565_26585,(2),null);ctx.moveTo(((idx_26586 + offset__$1) * offset_x),pos_y.call(null,prev_26587));
ctx.lineTo((((idx_26586 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_26588));
{
var G__26589 = seq__26561_26579;
var G__26590 = chunk__26562_26580;
var G__26591 = count__26563_26581;
var G__26592 = (i__26564_26582 + (1));
seq__26561_26579 = G__26589;
chunk__26562_26580 = G__26590;
count__26563_26581 = G__26591;
i__26564_26582 = G__26592;
continue;
}
} else
{var temp__4126__auto___26593 = cljs.core.seq.call(null,seq__26561_26579);if(temp__4126__auto___26593)
{var seq__26561_26594__$1 = temp__4126__auto___26593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26561_26594__$1))
{var c__4307__auto___26595 = cljs.core.chunk_first.call(null,seq__26561_26594__$1);{
var G__26596 = cljs.core.chunk_rest.call(null,seq__26561_26594__$1);
var G__26597 = c__4307__auto___26595;
var G__26598 = cljs.core.count.call(null,c__4307__auto___26595);
var G__26599 = (0);
seq__26561_26579 = G__26596;
chunk__26562_26580 = G__26597;
count__26563_26581 = G__26598;
i__26564_26582 = G__26599;
continue;
}
} else
{var vec__26566_26600 = cljs.core.first.call(null,seq__26561_26594__$1);var idx_26601 = cljs.core.nth.call(null,vec__26566_26600,(0),null);var prev_26602 = cljs.core.nth.call(null,vec__26566_26600,(1),null);var curr_26603 = cljs.core.nth.call(null,vec__26566_26600,(2),null);ctx.moveTo(((idx_26601 + offset__$1) * offset_x),pos_y.call(null,prev_26602));
ctx.lineTo((((idx_26601 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_26603));
{
var G__26604 = cljs.core.next.call(null,seq__26561_26594__$1);
var G__26605 = null;
var G__26606 = (0);
var G__26607 = (0);
seq__26561_26579 = G__26604;
chunk__26562_26580 = G__26605;
count__26563_26581 = G__26606;
i__26564_26582 = G__26607;
continue;
}
}
} else
{}
}
break;
}
return ctx.stroke();
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26608){var map__26609 = p__26608;var map__26609__$1 = ((cljs.core.seq_QMARK_.call(null,map__26609))?cljs.core.apply.call(null,cljs.core.hash_map,map__26609):map__26609);var kline = cljs.core.get.call(null,map__26609__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26610){var map__26611 = p__26610;var map__26611__$1 = ((cljs.core.seq_QMARK_.call(null,map__26611))?cljs.core.apply.call(null,cljs.core.hash_map,map__26611):map__26611);var kline = cljs.core.get.call(null,map__26611__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26612){var map__26613 = p__26612;var map__26613__$1 = ((cljs.core.seq_QMARK_.call(null,map__26613))?cljs.core.apply.call(null,cljs.core.hash_map,map__26613):map__26613);var kline = cljs.core.get.call(null,map__26613__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26614,base,ctx){var map__26615 = p__26614;var map__26615__$1 = ((cljs.core.seq_QMARK_.call(null,map__26615))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615):map__26615);var kline = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__26616 = base;var w = cljs.core.nth.call(null,vec__26616,(0),null);var h = cljs.core.nth.call(null,vec__26616,(1),null);var max_v = cljs.core.nth.call(null,vec__26616,(2),null);var min_v = cljs.core.nth.call(null,vec__26616,(3),null);var offset_v = cljs.core.nth.call(null,vec__26616,(4),null);var offset_x = cljs.core.nth.call(null,vec__26616,(5),null);var pos_y = cljs.core.nth.call(null,vec__26616,(6),null);(ctx["fillStyle"] = "black");
var seq__26617 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__26616,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26615,map__26615__$1,kline,info){
return (function() { 
var G__26625__delegate = function (args){return args;
};
var G__26625 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26625__delegate.call(this,args);};
G__26625.cljs$lang$maxFixedArity = 0;
G__26625.cljs$lang$applyTo = (function (arglist__26626){
var args = cljs.core.seq(arglist__26626);
return G__26625__delegate(args);
});
G__26625.cljs$core$IFn$_invoke$arity$variadic = G__26625__delegate;
return G__26625;
})()
;})(vec__26616,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26615,map__26615__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__26618 = null;var count__26619 = (0);var i__26620 = (0);while(true){
if((i__26620 < count__26619))
{var vec__26621 = cljs.core._nth.call(null,chunk__26618,i__26620);var idx = cljs.core.nth.call(null,vec__26621,(0),null);var vec__26622 = cljs.core.nth.call(null,vec__26621,(1),null);var date = cljs.core.nth.call(null,vec__26622,(0),null);var open = cljs.core.nth.call(null,vec__26622,(1),null);var high = cljs.core.nth.call(null,vec__26622,(2),null);var low = cljs.core.nth.call(null,vec__26622,(3),null);var close = cljs.core.nth.call(null,vec__26622,(4),null);var volume = cljs.core.nth.call(null,vec__26622,(5),null);var info__$1 = cljs.core.nth.call(null,vec__26621,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__26627 = seq__26617;
var G__26628 = chunk__26618;
var G__26629 = count__26619;
var G__26630 = (i__26620 + (1));
seq__26617 = G__26627;
chunk__26618 = G__26628;
count__26619 = G__26629;
i__26620 = G__26630;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26617);if(temp__4126__auto__)
{var seq__26617__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26617__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26617__$1);{
var G__26631 = cljs.core.chunk_rest.call(null,seq__26617__$1);
var G__26632 = c__4307__auto__;
var G__26633 = cljs.core.count.call(null,c__4307__auto__);
var G__26634 = (0);
seq__26617 = G__26631;
chunk__26618 = G__26632;
count__26619 = G__26633;
i__26620 = G__26634;
continue;
}
} else
{var vec__26623 = cljs.core.first.call(null,seq__26617__$1);var idx = cljs.core.nth.call(null,vec__26623,(0),null);var vec__26624 = cljs.core.nth.call(null,vec__26623,(1),null);var date = cljs.core.nth.call(null,vec__26624,(0),null);var open = cljs.core.nth.call(null,vec__26624,(1),null);var high = cljs.core.nth.call(null,vec__26624,(2),null);var low = cljs.core.nth.call(null,vec__26624,(3),null);var close = cljs.core.nth.call(null,vec__26624,(4),null);var volume = cljs.core.nth.call(null,vec__26624,(5),null);var info__$1 = cljs.core.nth.call(null,vec__26623,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__26635 = cljs.core.next.call(null,seq__26617__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26617 = G__26635;
chunk__26618 = G__26636;
count__26619 = G__26637;
i__26620 = G__26638;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__26639){var map__26640 = p__26639;var map__26640__$1 = ((cljs.core.seq_QMARK_.call(null,map__26640))?cljs.core.apply.call(null,cljs.core.hash_map,map__26640):map__26640);var cz = cljs.core.get.call(null,map__26640__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__26641){var map__26642 = p__26641;var map__26642__$1 = ((cljs.core.seq_QMARK_.call(null,map__26642))?cljs.core.apply.call(null,cljs.core.hash_map,map__26642):map__26642);var cz = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__26643,base,ctx){var map__26644 = p__26643;var map__26644__$1 = ((cljs.core.seq_QMARK_.call(null,map__26644))?cljs.core.apply.call(null,cljs.core.hash_map,map__26644):map__26644);var cz = cljs.core.get.call(null,map__26644__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__26644__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__26644__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__26645 = base;var w = cljs.core.nth.call(null,vec__26645,(0),null);var h = cljs.core.nth.call(null,vec__26645,(1),null);var max_v = cljs.core.nth.call(null,vec__26645,(2),null);var min_v = cljs.core.nth.call(null,vec__26645,(3),null);var offset_v = cljs.core.nth.call(null,vec__26645,(4),null);var offset_x = cljs.core.nth.call(null,vec__26645,(5),null);var pos_y = cljs.core.nth.call(null,vec__26645,(6),null);var proj_x = ((function (vec__26645,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26644,map__26644__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__26645,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26644,map__26644__$1,cz,vz,color))
;var proj_y = ((function (vec__26645,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__26644,map__26644__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__26645,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__26644,map__26644__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__26646 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__26645,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__26644,map__26644__$1,cz,vz,color){
return (function() { 
var G__26652__delegate = function (args){return args;
};
var G__26652 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26652__delegate.call(this,args);};
G__26652.cljs$lang$maxFixedArity = 0;
G__26652.cljs$lang$applyTo = (function (arglist__26653){
var args = cljs.core.seq(arglist__26653);
return G__26652__delegate(args);
});
G__26652.cljs$core$IFn$_invoke$arity$variadic = G__26652__delegate;
return G__26652;
})()
;})(vec__26645,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__26644,map__26644__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__26647 = null;var count__26648 = (0);var i__26649 = (0);while(true){
if((i__26649 < count__26648))
{var vec__26650 = cljs.core._nth.call(null,chunk__26647,i__26649);var idx = cljs.core.nth.call(null,vec__26650,(0),null);var pc = cljs.core.nth.call(null,vec__26650,(1),null);var cc = cljs.core.nth.call(null,vec__26650,(2),null);var pv = cljs.core.nth.call(null,vec__26650,(3),null);var cv = cljs.core.nth.call(null,vec__26650,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__26654 = seq__26646;
var G__26655 = chunk__26647;
var G__26656 = count__26648;
var G__26657 = (i__26649 + (1));
seq__26646 = G__26654;
chunk__26647 = G__26655;
count__26648 = G__26656;
i__26649 = G__26657;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26646);if(temp__4126__auto__)
{var seq__26646__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26646__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26646__$1);{
var G__26658 = cljs.core.chunk_rest.call(null,seq__26646__$1);
var G__26659 = c__4307__auto__;
var G__26660 = cljs.core.count.call(null,c__4307__auto__);
var G__26661 = (0);
seq__26646 = G__26658;
chunk__26647 = G__26659;
count__26648 = G__26660;
i__26649 = G__26661;
continue;
}
} else
{var vec__26651 = cljs.core.first.call(null,seq__26646__$1);var idx = cljs.core.nth.call(null,vec__26651,(0),null);var pc = cljs.core.nth.call(null,vec__26651,(1),null);var cc = cljs.core.nth.call(null,vec__26651,(2),null);var pv = cljs.core.nth.call(null,vec__26651,(3),null);var cv = cljs.core.nth.call(null,vec__26651,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__26662 = cljs.core.next.call(null,seq__26646__$1);
var G__26663 = null;
var G__26664 = (0);
var G__26665 = (0);
seq__26646 = G__26662;
chunk__26647 = G__26663;
count__26648 = G__26664;
i__26649 = G__26665;
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
