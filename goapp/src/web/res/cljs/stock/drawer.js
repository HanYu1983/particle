// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40377){var map__40378 = p__40377;var map__40378__$1 = ((cljs.core.seq_QMARK_.call(null,map__40378))?cljs.core.apply.call(null,cljs.core.hash_map,map__40378):map__40378);var t = cljs.core.get.call(null,map__40378__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40379){var map__40380 = p__40379;var map__40380__$1 = ((cljs.core.seq_QMARK_.call(null,map__40380))?cljs.core.apply.call(null,cljs.core.hash_map,map__40380):map__40380);var t = cljs.core.get.call(null,map__40380__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40381){var map__40382 = p__40381;var map__40382__$1 = ((cljs.core.seq_QMARK_.call(null,map__40382))?cljs.core.apply.call(null,cljs.core.hash_map,map__40382):map__40382);var t = cljs.core.get.call(null,map__40382__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40383,base,ctx){var map__40384 = p__40383;var map__40384__$1 = ((cljs.core.seq_QMARK_.call(null,map__40384))?cljs.core.apply.call(null,cljs.core.hash_map,map__40384):map__40384);var t = cljs.core.get.call(null,map__40384__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__40385,w,h,ctx){var map__40391 = p__40385;var map__40391__$1 = ((cljs.core.seq_QMARK_.call(null,map__40391))?cljs.core.apply.call(null,cljs.core.hash_map,map__40391):map__40391);var info = map__40391__$1;var drawers = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__40392 = cljs.core.seq.call(null,drawers);var chunk__40393 = null;var count__40394 = (0);var i__40395 = (0);while(true){
if((i__40395 < count__40394))
{var drawer = cljs.core._nth.call(null,chunk__40393,i__40395);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__40396 = seq__40392;
var G__40397 = chunk__40393;
var G__40398 = count__40394;
var G__40399 = (i__40395 + (1));
seq__40392 = G__40396;
chunk__40393 = G__40397;
count__40394 = G__40398;
i__40395 = G__40399;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40392);if(temp__4126__auto__)
{var seq__40392__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40392__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40392__$1);{
var G__40400 = cljs.core.chunk_rest.call(null,seq__40392__$1);
var G__40401 = c__4307__auto__;
var G__40402 = cljs.core.count.call(null,c__4307__auto__);
var G__40403 = (0);
seq__40392 = G__40400;
chunk__40393 = G__40401;
count__40394 = G__40402;
i__40395 = G__40403;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__40392__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__40404 = cljs.core.next.call(null,seq__40392__$1);
var G__40405 = null;
var G__40406 = (0);
var G__40407 = (0);
seq__40392 = G__40404;
chunk__40393 = G__40405;
count__40394 = G__40406;
i__40395 = G__40407;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40408){var map__40409 = p__40408;var map__40409__$1 = ((cljs.core.seq_QMARK_.call(null,map__40409))?cljs.core.apply.call(null,cljs.core.hash_map,map__40409):map__40409);var line = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40410){var map__40411 = p__40410;var map__40411__$1 = ((cljs.core.seq_QMARK_.call(null,map__40411))?cljs.core.apply.call(null,cljs.core.hash_map,map__40411):map__40411);var line = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40412){var map__40413 = p__40412;var map__40413__$1 = ((cljs.core.seq_QMARK_.call(null,map__40413))?cljs.core.apply.call(null,cljs.core.hash_map,map__40413):map__40413);var line = cljs.core.get.call(null,map__40413__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40413__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40414,base,ctx){var map__40415 = p__40414;var map__40415__$1 = ((cljs.core.seq_QMARK_.call(null,map__40415))?cljs.core.apply.call(null,cljs.core.hash_map,map__40415):map__40415);var line = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__40416 = base;var w = cljs.core.nth.call(null,vec__40416,(0),null);var h = cljs.core.nth.call(null,vec__40416,(1),null);var max_v = cljs.core.nth.call(null,vec__40416,(2),null);var min_v = cljs.core.nth.call(null,vec__40416,(3),null);var offset_v = cljs.core.nth.call(null,vec__40416,(4),null);var offset_x = cljs.core.nth.call(null,vec__40416,(5),null);var pos_y = cljs.core.nth.call(null,vec__40416,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__40417_40429 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__40418_40430 = null;var count__40419_40431 = (0);var i__40420_40432 = (0);while(true){
if((i__40420_40432 < count__40419_40431))
{var i_40433 = cljs.core._nth.call(null,chunk__40418_40430,i__40420_40432);var v_40434 = (min_v + (i_40433 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40434)),(w * ((1) / (3))),pos_y.call(null,v_40434));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40434)),(w * ((2) / (3))),pos_y.call(null,v_40434));
ctx.moveTo((0),pos_y.call(null,v_40434));
ctx.lineTo(w,pos_y.call(null,v_40434));
{
var G__40435 = seq__40417_40429;
var G__40436 = chunk__40418_40430;
var G__40437 = count__40419_40431;
var G__40438 = (i__40420_40432 + (1));
seq__40417_40429 = G__40435;
chunk__40418_40430 = G__40436;
count__40419_40431 = G__40437;
i__40420_40432 = G__40438;
continue;
}
} else
{var temp__4126__auto___40439 = cljs.core.seq.call(null,seq__40417_40429);if(temp__4126__auto___40439)
{var seq__40417_40440__$1 = temp__4126__auto___40439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40417_40440__$1))
{var c__4307__auto___40441 = cljs.core.chunk_first.call(null,seq__40417_40440__$1);{
var G__40442 = cljs.core.chunk_rest.call(null,seq__40417_40440__$1);
var G__40443 = c__4307__auto___40441;
var G__40444 = cljs.core.count.call(null,c__4307__auto___40441);
var G__40445 = (0);
seq__40417_40429 = G__40442;
chunk__40418_40430 = G__40443;
count__40419_40431 = G__40444;
i__40420_40432 = G__40445;
continue;
}
} else
{var i_40446 = cljs.core.first.call(null,seq__40417_40440__$1);var v_40447 = (min_v + (i_40446 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40447)),(w * ((1) / (3))),pos_y.call(null,v_40447));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40447)),(w * ((2) / (3))),pos_y.call(null,v_40447));
ctx.moveTo((0),pos_y.call(null,v_40447));
ctx.lineTo(w,pos_y.call(null,v_40447));
{
var G__40448 = cljs.core.next.call(null,seq__40417_40440__$1);
var G__40449 = null;
var G__40450 = (0);
var G__40451 = (0);
seq__40417_40429 = G__40448;
chunk__40418_40430 = G__40449;
count__40419_40431 = G__40450;
i__40420_40432 = G__40451;
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
{var seq__40421_40452 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__40422_40453 = null;var count__40423_40454 = (0);var i__40424_40455 = (0);while(true){
if((i__40424_40455 < count__40423_40454))
{var i_40456 = cljs.core._nth.call(null,chunk__40422_40453,i__40424_40455);if((cljs.core.mod.call(null,i_40456,cntx) === (0)))
{var posx_40457 = ((offset_x / (2)) + (i_40456 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_40456)),posx_40457,h);
ctx.moveTo(posx_40457,(0));
ctx.lineTo(posx_40457,h);
} else
{}
{
var G__40458 = seq__40421_40452;
var G__40459 = chunk__40422_40453;
var G__40460 = count__40423_40454;
var G__40461 = (i__40424_40455 + (1));
seq__40421_40452 = G__40458;
chunk__40422_40453 = G__40459;
count__40423_40454 = G__40460;
i__40424_40455 = G__40461;
continue;
}
} else
{var temp__4126__auto___40462 = cljs.core.seq.call(null,seq__40421_40452);if(temp__4126__auto___40462)
{var seq__40421_40463__$1 = temp__4126__auto___40462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40421_40463__$1))
{var c__4307__auto___40464 = cljs.core.chunk_first.call(null,seq__40421_40463__$1);{
var G__40465 = cljs.core.chunk_rest.call(null,seq__40421_40463__$1);
var G__40466 = c__4307__auto___40464;
var G__40467 = cljs.core.count.call(null,c__4307__auto___40464);
var G__40468 = (0);
seq__40421_40452 = G__40465;
chunk__40422_40453 = G__40466;
count__40423_40454 = G__40467;
i__40424_40455 = G__40468;
continue;
}
} else
{var i_40469 = cljs.core.first.call(null,seq__40421_40463__$1);if((cljs.core.mod.call(null,i_40469,cntx) === (0)))
{var posx_40470 = ((offset_x / (2)) + (i_40469 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_40469)),posx_40470,h);
ctx.moveTo(posx_40470,(0));
ctx.lineTo(posx_40470,h);
} else
{}
{
var G__40471 = cljs.core.next.call(null,seq__40421_40463__$1);
var G__40472 = null;
var G__40473 = (0);
var G__40474 = (0);
seq__40421_40452 = G__40471;
chunk__40422_40453 = G__40472;
count__40423_40454 = G__40473;
i__40424_40455 = G__40474;
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
{var seq__40425_40475 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__40426_40476 = null;var count__40427_40477 = (0);var i__40428_40478 = (0);while(true){
if((i__40428_40478 < count__40427_40477))
{var i_40479 = cljs.core._nth.call(null,chunk__40426_40476,i__40428_40478);if((cljs.core.mod.call(null,i_40479,cntx) === (0)))
{var posx_40480 = ((offset_x / (2)) + (i_40479 * offset_x));ctx.moveTo(posx_40480,(0));
ctx.lineTo(posx_40480,h);
} else
{}
{
var G__40481 = seq__40425_40475;
var G__40482 = chunk__40426_40476;
var G__40483 = count__40427_40477;
var G__40484 = (i__40428_40478 + (1));
seq__40425_40475 = G__40481;
chunk__40426_40476 = G__40482;
count__40427_40477 = G__40483;
i__40428_40478 = G__40484;
continue;
}
} else
{var temp__4126__auto___40485 = cljs.core.seq.call(null,seq__40425_40475);if(temp__4126__auto___40485)
{var seq__40425_40486__$1 = temp__4126__auto___40485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40425_40486__$1))
{var c__4307__auto___40487 = cljs.core.chunk_first.call(null,seq__40425_40486__$1);{
var G__40488 = cljs.core.chunk_rest.call(null,seq__40425_40486__$1);
var G__40489 = c__4307__auto___40487;
var G__40490 = cljs.core.count.call(null,c__4307__auto___40487);
var G__40491 = (0);
seq__40425_40475 = G__40488;
chunk__40426_40476 = G__40489;
count__40427_40477 = G__40490;
i__40428_40478 = G__40491;
continue;
}
} else
{var i_40492 = cljs.core.first.call(null,seq__40425_40486__$1);if((cljs.core.mod.call(null,i_40492,cntx) === (0)))
{var posx_40493 = ((offset_x / (2)) + (i_40492 * offset_x));ctx.moveTo(posx_40493,(0));
ctx.lineTo(posx_40493,h);
} else
{}
{
var G__40494 = cljs.core.next.call(null,seq__40425_40486__$1);
var G__40495 = null;
var G__40496 = (0);
var G__40497 = (0);
seq__40425_40475 = G__40494;
chunk__40426_40476 = G__40495;
count__40427_40477 = G__40496;
i__40428_40478 = G__40497;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40498){var map__40499 = p__40498;var map__40499__$1 = ((cljs.core.seq_QMARK_.call(null,map__40499))?cljs.core.apply.call(null,cljs.core.hash_map,map__40499):map__40499);var line = cljs.core.get.call(null,map__40499__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40500){var map__40501 = p__40500;var map__40501__$1 = ((cljs.core.seq_QMARK_.call(null,map__40501))?cljs.core.apply.call(null,cljs.core.hash_map,map__40501):map__40501);var line = cljs.core.get.call(null,map__40501__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40502){var map__40503 = p__40502;var map__40503__$1 = ((cljs.core.seq_QMARK_.call(null,map__40503))?cljs.core.apply.call(null,cljs.core.hash_map,map__40503):map__40503);var line = cljs.core.get.call(null,map__40503__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40504,base,ctx){var map__40505 = p__40504;var map__40505__$1 = ((cljs.core.seq_QMARK_.call(null,map__40505))?cljs.core.apply.call(null,cljs.core.hash_map,map__40505):map__40505);var line = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__40506 = base;var w = cljs.core.nth.call(null,vec__40506,(0),null);var h = cljs.core.nth.call(null,vec__40506,(1),null);var max_v = cljs.core.nth.call(null,vec__40506,(2),null);var min_v = cljs.core.nth.call(null,vec__40506,(3),null);var offset_v = cljs.core.nth.call(null,vec__40506,(4),null);var offset_x = cljs.core.nth.call(null,vec__40506,(5),null);var pos_y = cljs.core.nth.call(null,vec__40506,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__40507 = cljs.core._EQ_;var expr__40508 = style;if(cljs.core.truth_(pred__40507.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__40508)))
{var seq__40510 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__40511 = null;var count__40512 = (0);var i__40513 = (0);while(true){
if((i__40513 < count__40512))
{var vec__40514 = cljs.core._nth.call(null,chunk__40511,i__40513);var idx = cljs.core.nth.call(null,vec__40514,(0),null);var value = cljs.core.nth.call(null,vec__40514,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__40522 = seq__40510;
var G__40523 = chunk__40511;
var G__40524 = count__40512;
var G__40525 = (i__40513 + (1));
seq__40510 = G__40522;
chunk__40511 = G__40523;
count__40512 = G__40524;
i__40513 = G__40525;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40510);if(temp__4126__auto__)
{var seq__40510__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40510__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40510__$1);{
var G__40526 = cljs.core.chunk_rest.call(null,seq__40510__$1);
var G__40527 = c__4307__auto__;
var G__40528 = cljs.core.count.call(null,c__4307__auto__);
var G__40529 = (0);
seq__40510 = G__40526;
chunk__40511 = G__40527;
count__40512 = G__40528;
i__40513 = G__40529;
continue;
}
} else
{var vec__40515 = cljs.core.first.call(null,seq__40510__$1);var idx = cljs.core.nth.call(null,vec__40515,(0),null);var value = cljs.core.nth.call(null,vec__40515,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__40530 = cljs.core.next.call(null,seq__40510__$1);
var G__40531 = null;
var G__40532 = (0);
var G__40533 = (0);
seq__40510 = G__40530;
chunk__40511 = G__40531;
count__40512 = G__40532;
i__40513 = G__40533;
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
var seq__40516_40534 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__40507,expr__40508,vec__40506,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__40505,map__40505__$1,line,color,offset,style){
return (function() { 
var G__40538__delegate = function (args){return args;
};
var G__40538 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40538__delegate.call(this,args);};
G__40538.cljs$lang$maxFixedArity = 0;
G__40538.cljs$lang$applyTo = (function (arglist__40539){
var args = cljs.core.seq(arglist__40539);
return G__40538__delegate(args);
});
G__40538.cljs$core$IFn$_invoke$arity$variadic = G__40538__delegate;
return G__40538;
})()
;})(pred__40507,expr__40508,vec__40506,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__40505,map__40505__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__40517_40535 = null;var count__40518_40536 = (0);var i__40519_40537 = (0);while(true){
if((i__40519_40537 < count__40518_40536))
{var vec__40520_40540 = cljs.core._nth.call(null,chunk__40517_40535,i__40519_40537);var idx_40541 = cljs.core.nth.call(null,vec__40520_40540,(0),null);var prev_40542 = cljs.core.nth.call(null,vec__40520_40540,(1),null);var curr_40543 = cljs.core.nth.call(null,vec__40520_40540,(2),null);ctx.moveTo(((idx_40541 + offset__$1) * offset_x),pos_y.call(null,prev_40542));
ctx.lineTo((((idx_40541 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_40543));
{
var G__40544 = seq__40516_40534;
var G__40545 = chunk__40517_40535;
var G__40546 = count__40518_40536;
var G__40547 = (i__40519_40537 + (1));
seq__40516_40534 = G__40544;
chunk__40517_40535 = G__40545;
count__40518_40536 = G__40546;
i__40519_40537 = G__40547;
continue;
}
} else
{var temp__4126__auto___40548 = cljs.core.seq.call(null,seq__40516_40534);if(temp__4126__auto___40548)
{var seq__40516_40549__$1 = temp__4126__auto___40548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40516_40549__$1))
{var c__4307__auto___40550 = cljs.core.chunk_first.call(null,seq__40516_40549__$1);{
var G__40551 = cljs.core.chunk_rest.call(null,seq__40516_40549__$1);
var G__40552 = c__4307__auto___40550;
var G__40553 = cljs.core.count.call(null,c__4307__auto___40550);
var G__40554 = (0);
seq__40516_40534 = G__40551;
chunk__40517_40535 = G__40552;
count__40518_40536 = G__40553;
i__40519_40537 = G__40554;
continue;
}
} else
{var vec__40521_40555 = cljs.core.first.call(null,seq__40516_40549__$1);var idx_40556 = cljs.core.nth.call(null,vec__40521_40555,(0),null);var prev_40557 = cljs.core.nth.call(null,vec__40521_40555,(1),null);var curr_40558 = cljs.core.nth.call(null,vec__40521_40555,(2),null);ctx.moveTo(((idx_40556 + offset__$1) * offset_x),pos_y.call(null,prev_40557));
ctx.lineTo((((idx_40556 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_40558));
{
var G__40559 = cljs.core.next.call(null,seq__40516_40549__$1);
var G__40560 = null;
var G__40561 = (0);
var G__40562 = (0);
seq__40516_40534 = G__40559;
chunk__40517_40535 = G__40560;
count__40518_40536 = G__40561;
i__40519_40537 = G__40562;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40563){var map__40564 = p__40563;var map__40564__$1 = ((cljs.core.seq_QMARK_.call(null,map__40564))?cljs.core.apply.call(null,cljs.core.hash_map,map__40564):map__40564);var kline = cljs.core.get.call(null,map__40564__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40565){var map__40566 = p__40565;var map__40566__$1 = ((cljs.core.seq_QMARK_.call(null,map__40566))?cljs.core.apply.call(null,cljs.core.hash_map,map__40566):map__40566);var kline = cljs.core.get.call(null,map__40566__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40567){var map__40568 = p__40567;var map__40568__$1 = ((cljs.core.seq_QMARK_.call(null,map__40568))?cljs.core.apply.call(null,cljs.core.hash_map,map__40568):map__40568);var kline = cljs.core.get.call(null,map__40568__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40569,base,ctx){var map__40570 = p__40569;var map__40570__$1 = ((cljs.core.seq_QMARK_.call(null,map__40570))?cljs.core.apply.call(null,cljs.core.hash_map,map__40570):map__40570);var kline = cljs.core.get.call(null,map__40570__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__40570__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__40571 = base;var w = cljs.core.nth.call(null,vec__40571,(0),null);var h = cljs.core.nth.call(null,vec__40571,(1),null);var max_v = cljs.core.nth.call(null,vec__40571,(2),null);var min_v = cljs.core.nth.call(null,vec__40571,(3),null);var offset_v = cljs.core.nth.call(null,vec__40571,(4),null);var offset_x = cljs.core.nth.call(null,vec__40571,(5),null);var pos_y = cljs.core.nth.call(null,vec__40571,(6),null);(ctx["fillStyle"] = "black");
var seq__40572 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__40571,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40570,map__40570__$1,kline,info){
return (function() { 
var G__40580__delegate = function (args){return args;
};
var G__40580 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40580__delegate.call(this,args);};
G__40580.cljs$lang$maxFixedArity = 0;
G__40580.cljs$lang$applyTo = (function (arglist__40581){
var args = cljs.core.seq(arglist__40581);
return G__40580__delegate(args);
});
G__40580.cljs$core$IFn$_invoke$arity$variadic = G__40580__delegate;
return G__40580;
})()
;})(vec__40571,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40570,map__40570__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__40573 = null;var count__40574 = (0);var i__40575 = (0);while(true){
if((i__40575 < count__40574))
{var vec__40576 = cljs.core._nth.call(null,chunk__40573,i__40575);var idx = cljs.core.nth.call(null,vec__40576,(0),null);var vec__40577 = cljs.core.nth.call(null,vec__40576,(1),null);var date = cljs.core.nth.call(null,vec__40577,(0),null);var open = cljs.core.nth.call(null,vec__40577,(1),null);var high = cljs.core.nth.call(null,vec__40577,(2),null);var low = cljs.core.nth.call(null,vec__40577,(3),null);var close = cljs.core.nth.call(null,vec__40577,(4),null);var volume = cljs.core.nth.call(null,vec__40577,(5),null);var info__$1 = cljs.core.nth.call(null,vec__40576,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__40582 = seq__40572;
var G__40583 = chunk__40573;
var G__40584 = count__40574;
var G__40585 = (i__40575 + (1));
seq__40572 = G__40582;
chunk__40573 = G__40583;
count__40574 = G__40584;
i__40575 = G__40585;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40572);if(temp__4126__auto__)
{var seq__40572__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40572__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40572__$1);{
var G__40586 = cljs.core.chunk_rest.call(null,seq__40572__$1);
var G__40587 = c__4307__auto__;
var G__40588 = cljs.core.count.call(null,c__4307__auto__);
var G__40589 = (0);
seq__40572 = G__40586;
chunk__40573 = G__40587;
count__40574 = G__40588;
i__40575 = G__40589;
continue;
}
} else
{var vec__40578 = cljs.core.first.call(null,seq__40572__$1);var idx = cljs.core.nth.call(null,vec__40578,(0),null);var vec__40579 = cljs.core.nth.call(null,vec__40578,(1),null);var date = cljs.core.nth.call(null,vec__40579,(0),null);var open = cljs.core.nth.call(null,vec__40579,(1),null);var high = cljs.core.nth.call(null,vec__40579,(2),null);var low = cljs.core.nth.call(null,vec__40579,(3),null);var close = cljs.core.nth.call(null,vec__40579,(4),null);var volume = cljs.core.nth.call(null,vec__40579,(5),null);var info__$1 = cljs.core.nth.call(null,vec__40578,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__40590 = cljs.core.next.call(null,seq__40572__$1);
var G__40591 = null;
var G__40592 = (0);
var G__40593 = (0);
seq__40572 = G__40590;
chunk__40573 = G__40591;
count__40574 = G__40592;
i__40575 = G__40593;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__40594){var map__40595 = p__40594;var map__40595__$1 = ((cljs.core.seq_QMARK_.call(null,map__40595))?cljs.core.apply.call(null,cljs.core.hash_map,map__40595):map__40595);var cz = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__40596){var map__40597 = p__40596;var map__40597__$1 = ((cljs.core.seq_QMARK_.call(null,map__40597))?cljs.core.apply.call(null,cljs.core.hash_map,map__40597):map__40597);var cz = cljs.core.get.call(null,map__40597__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__40598,base,ctx){var map__40599 = p__40598;var map__40599__$1 = ((cljs.core.seq_QMARK_.call(null,map__40599))?cljs.core.apply.call(null,cljs.core.hash_map,map__40599):map__40599);var cz = cljs.core.get.call(null,map__40599__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__40599__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__40599__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__40600 = base;var w = cljs.core.nth.call(null,vec__40600,(0),null);var h = cljs.core.nth.call(null,vec__40600,(1),null);var max_v = cljs.core.nth.call(null,vec__40600,(2),null);var min_v = cljs.core.nth.call(null,vec__40600,(3),null);var offset_v = cljs.core.nth.call(null,vec__40600,(4),null);var offset_x = cljs.core.nth.call(null,vec__40600,(5),null);var pos_y = cljs.core.nth.call(null,vec__40600,(6),null);var proj_x = ((function (vec__40600,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40599,map__40599__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__40600,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40599,map__40599__$1,cz,vz,color))
;var proj_y = ((function (vec__40600,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__40599,map__40599__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__40600,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__40599,map__40599__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__40601 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__40600,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__40599,map__40599__$1,cz,vz,color){
return (function() { 
var G__40607__delegate = function (args){return args;
};
var G__40607 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40607__delegate.call(this,args);};
G__40607.cljs$lang$maxFixedArity = 0;
G__40607.cljs$lang$applyTo = (function (arglist__40608){
var args = cljs.core.seq(arglist__40608);
return G__40607__delegate(args);
});
G__40607.cljs$core$IFn$_invoke$arity$variadic = G__40607__delegate;
return G__40607;
})()
;})(vec__40600,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__40599,map__40599__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__40602 = null;var count__40603 = (0);var i__40604 = (0);while(true){
if((i__40604 < count__40603))
{var vec__40605 = cljs.core._nth.call(null,chunk__40602,i__40604);var idx = cljs.core.nth.call(null,vec__40605,(0),null);var pc = cljs.core.nth.call(null,vec__40605,(1),null);var cc = cljs.core.nth.call(null,vec__40605,(2),null);var pv = cljs.core.nth.call(null,vec__40605,(3),null);var cv = cljs.core.nth.call(null,vec__40605,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__40609 = seq__40601;
var G__40610 = chunk__40602;
var G__40611 = count__40603;
var G__40612 = (i__40604 + (1));
seq__40601 = G__40609;
chunk__40602 = G__40610;
count__40603 = G__40611;
i__40604 = G__40612;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40601);if(temp__4126__auto__)
{var seq__40601__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40601__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40601__$1);{
var G__40613 = cljs.core.chunk_rest.call(null,seq__40601__$1);
var G__40614 = c__4307__auto__;
var G__40615 = cljs.core.count.call(null,c__4307__auto__);
var G__40616 = (0);
seq__40601 = G__40613;
chunk__40602 = G__40614;
count__40603 = G__40615;
i__40604 = G__40616;
continue;
}
} else
{var vec__40606 = cljs.core.first.call(null,seq__40601__$1);var idx = cljs.core.nth.call(null,vec__40606,(0),null);var pc = cljs.core.nth.call(null,vec__40606,(1),null);var cc = cljs.core.nth.call(null,vec__40606,(2),null);var pv = cljs.core.nth.call(null,vec__40606,(3),null);var cv = cljs.core.nth.call(null,vec__40606,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__40617 = cljs.core.next.call(null,seq__40601__$1);
var G__40618 = null;
var G__40619 = (0);
var G__40620 = (0);
seq__40601 = G__40617;
chunk__40602 = G__40618;
count__40603 = G__40619;
i__40604 = G__40620;
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
