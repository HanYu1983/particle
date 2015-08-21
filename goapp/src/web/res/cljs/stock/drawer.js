// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49362){var map__49363 = p__49362;var map__49363__$1 = ((cljs.core.seq_QMARK_.call(null,map__49363))?cljs.core.apply.call(null,cljs.core.hash_map,map__49363):map__49363);var t = cljs.core.get.call(null,map__49363__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49364){var map__49365 = p__49364;var map__49365__$1 = ((cljs.core.seq_QMARK_.call(null,map__49365))?cljs.core.apply.call(null,cljs.core.hash_map,map__49365):map__49365);var t = cljs.core.get.call(null,map__49365__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49366){var map__49367 = p__49366;var map__49367__$1 = ((cljs.core.seq_QMARK_.call(null,map__49367))?cljs.core.apply.call(null,cljs.core.hash_map,map__49367):map__49367);var t = cljs.core.get.call(null,map__49367__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49368,base,ctx){var map__49369 = p__49368;var map__49369__$1 = ((cljs.core.seq_QMARK_.call(null,map__49369))?cljs.core.apply.call(null,cljs.core.hash_map,map__49369):map__49369);var t = cljs.core.get.call(null,map__49369__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__49370,w,h,ctx){var map__49376 = p__49370;var map__49376__$1 = ((cljs.core.seq_QMARK_.call(null,map__49376))?cljs.core.apply.call(null,cljs.core.hash_map,map__49376):map__49376);var info = map__49376__$1;var drawers = cljs.core.get.call(null,map__49376__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__49377 = cljs.core.seq.call(null,drawers);var chunk__49378 = null;var count__49379 = (0);var i__49380 = (0);while(true){
if((i__49380 < count__49379))
{var drawer = cljs.core._nth.call(null,chunk__49378,i__49380);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__49381 = seq__49377;
var G__49382 = chunk__49378;
var G__49383 = count__49379;
var G__49384 = (i__49380 + (1));
seq__49377 = G__49381;
chunk__49378 = G__49382;
count__49379 = G__49383;
i__49380 = G__49384;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49377);if(temp__4126__auto__)
{var seq__49377__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49377__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49377__$1);{
var G__49385 = cljs.core.chunk_rest.call(null,seq__49377__$1);
var G__49386 = c__4307__auto__;
var G__49387 = cljs.core.count.call(null,c__4307__auto__);
var G__49388 = (0);
seq__49377 = G__49385;
chunk__49378 = G__49386;
count__49379 = G__49387;
i__49380 = G__49388;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__49377__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__49389 = cljs.core.next.call(null,seq__49377__$1);
var G__49390 = null;
var G__49391 = (0);
var G__49392 = (0);
seq__49377 = G__49389;
chunk__49378 = G__49390;
count__49379 = G__49391;
i__49380 = G__49392;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49393){var map__49394 = p__49393;var map__49394__$1 = ((cljs.core.seq_QMARK_.call(null,map__49394))?cljs.core.apply.call(null,cljs.core.hash_map,map__49394):map__49394);var line = cljs.core.get.call(null,map__49394__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49394__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49395){var map__49396 = p__49395;var map__49396__$1 = ((cljs.core.seq_QMARK_.call(null,map__49396))?cljs.core.apply.call(null,cljs.core.hash_map,map__49396):map__49396);var line = cljs.core.get.call(null,map__49396__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49396__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49397){var map__49398 = p__49397;var map__49398__$1 = ((cljs.core.seq_QMARK_.call(null,map__49398))?cljs.core.apply.call(null,cljs.core.hash_map,map__49398):map__49398);var line = cljs.core.get.call(null,map__49398__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49398__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49399,base,ctx){var map__49400 = p__49399;var map__49400__$1 = ((cljs.core.seq_QMARK_.call(null,map__49400))?cljs.core.apply.call(null,cljs.core.hash_map,map__49400):map__49400);var line = cljs.core.get.call(null,map__49400__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49400__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__49400__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__49400__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__49401 = base;var w = cljs.core.nth.call(null,vec__49401,(0),null);var h = cljs.core.nth.call(null,vec__49401,(1),null);var max_v = cljs.core.nth.call(null,vec__49401,(2),null);var min_v = cljs.core.nth.call(null,vec__49401,(3),null);var offset_v = cljs.core.nth.call(null,vec__49401,(4),null);var offset_x = cljs.core.nth.call(null,vec__49401,(5),null);var pos_y = cljs.core.nth.call(null,vec__49401,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__49402_49414 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__49403_49415 = null;var count__49404_49416 = (0);var i__49405_49417 = (0);while(true){
if((i__49405_49417 < count__49404_49416))
{var i_49418 = cljs.core._nth.call(null,chunk__49403_49415,i__49405_49417);var v_49419 = (min_v + (i_49418 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49419.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_49419));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49419.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_49419));
ctx.moveTo((0),pos_y.call(null,v_49419));
ctx.lineTo(w,pos_y.call(null,v_49419));
{
var G__49420 = seq__49402_49414;
var G__49421 = chunk__49403_49415;
var G__49422 = count__49404_49416;
var G__49423 = (i__49405_49417 + (1));
seq__49402_49414 = G__49420;
chunk__49403_49415 = G__49421;
count__49404_49416 = G__49422;
i__49405_49417 = G__49423;
continue;
}
} else
{var temp__4126__auto___49424 = cljs.core.seq.call(null,seq__49402_49414);if(temp__4126__auto___49424)
{var seq__49402_49425__$1 = temp__4126__auto___49424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49402_49425__$1))
{var c__4307__auto___49426 = cljs.core.chunk_first.call(null,seq__49402_49425__$1);{
var G__49427 = cljs.core.chunk_rest.call(null,seq__49402_49425__$1);
var G__49428 = c__4307__auto___49426;
var G__49429 = cljs.core.count.call(null,c__4307__auto___49426);
var G__49430 = (0);
seq__49402_49414 = G__49427;
chunk__49403_49415 = G__49428;
count__49404_49416 = G__49429;
i__49405_49417 = G__49430;
continue;
}
} else
{var i_49431 = cljs.core.first.call(null,seq__49402_49425__$1);var v_49432 = (min_v + (i_49431 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49432.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_49432));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49432.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_49432));
ctx.moveTo((0),pos_y.call(null,v_49432));
ctx.lineTo(w,pos_y.call(null,v_49432));
{
var G__49433 = cljs.core.next.call(null,seq__49402_49425__$1);
var G__49434 = null;
var G__49435 = (0);
var G__49436 = (0);
seq__49402_49414 = G__49433;
chunk__49403_49415 = G__49434;
count__49404_49416 = G__49435;
i__49405_49417 = G__49436;
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
{var seq__49406_49437 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__49407_49438 = null;var count__49408_49439 = (0);var i__49409_49440 = (0);while(true){
if((i__49409_49440 < count__49408_49439))
{var i_49441 = cljs.core._nth.call(null,chunk__49407_49438,i__49409_49440);if((cljs.core.mod.call(null,i_49441,cntx) === (0)))
{var posx_49442 = ((offset_x / (2)) + (i_49441 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_49441)),posx_49442,h);
ctx.moveTo(posx_49442,(0));
ctx.lineTo(posx_49442,h);
} else
{}
{
var G__49443 = seq__49406_49437;
var G__49444 = chunk__49407_49438;
var G__49445 = count__49408_49439;
var G__49446 = (i__49409_49440 + (1));
seq__49406_49437 = G__49443;
chunk__49407_49438 = G__49444;
count__49408_49439 = G__49445;
i__49409_49440 = G__49446;
continue;
}
} else
{var temp__4126__auto___49447 = cljs.core.seq.call(null,seq__49406_49437);if(temp__4126__auto___49447)
{var seq__49406_49448__$1 = temp__4126__auto___49447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49406_49448__$1))
{var c__4307__auto___49449 = cljs.core.chunk_first.call(null,seq__49406_49448__$1);{
var G__49450 = cljs.core.chunk_rest.call(null,seq__49406_49448__$1);
var G__49451 = c__4307__auto___49449;
var G__49452 = cljs.core.count.call(null,c__4307__auto___49449);
var G__49453 = (0);
seq__49406_49437 = G__49450;
chunk__49407_49438 = G__49451;
count__49408_49439 = G__49452;
i__49409_49440 = G__49453;
continue;
}
} else
{var i_49454 = cljs.core.first.call(null,seq__49406_49448__$1);if((cljs.core.mod.call(null,i_49454,cntx) === (0)))
{var posx_49455 = ((offset_x / (2)) + (i_49454 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_49454)),posx_49455,h);
ctx.moveTo(posx_49455,(0));
ctx.lineTo(posx_49455,h);
} else
{}
{
var G__49456 = cljs.core.next.call(null,seq__49406_49448__$1);
var G__49457 = null;
var G__49458 = (0);
var G__49459 = (0);
seq__49406_49437 = G__49456;
chunk__49407_49438 = G__49457;
count__49408_49439 = G__49458;
i__49409_49440 = G__49459;
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
{var seq__49410_49460 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__49411_49461 = null;var count__49412_49462 = (0);var i__49413_49463 = (0);while(true){
if((i__49413_49463 < count__49412_49462))
{var i_49464 = cljs.core._nth.call(null,chunk__49411_49461,i__49413_49463);if((cljs.core.mod.call(null,i_49464,cntx) === (0)))
{var posx_49465 = ((offset_x / (2)) + (i_49464 * offset_x));ctx.moveTo(posx_49465,(0));
ctx.lineTo(posx_49465,h);
} else
{}
{
var G__49466 = seq__49410_49460;
var G__49467 = chunk__49411_49461;
var G__49468 = count__49412_49462;
var G__49469 = (i__49413_49463 + (1));
seq__49410_49460 = G__49466;
chunk__49411_49461 = G__49467;
count__49412_49462 = G__49468;
i__49413_49463 = G__49469;
continue;
}
} else
{var temp__4126__auto___49470 = cljs.core.seq.call(null,seq__49410_49460);if(temp__4126__auto___49470)
{var seq__49410_49471__$1 = temp__4126__auto___49470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49410_49471__$1))
{var c__4307__auto___49472 = cljs.core.chunk_first.call(null,seq__49410_49471__$1);{
var G__49473 = cljs.core.chunk_rest.call(null,seq__49410_49471__$1);
var G__49474 = c__4307__auto___49472;
var G__49475 = cljs.core.count.call(null,c__4307__auto___49472);
var G__49476 = (0);
seq__49410_49460 = G__49473;
chunk__49411_49461 = G__49474;
count__49412_49462 = G__49475;
i__49413_49463 = G__49476;
continue;
}
} else
{var i_49477 = cljs.core.first.call(null,seq__49410_49471__$1);if((cljs.core.mod.call(null,i_49477,cntx) === (0)))
{var posx_49478 = ((offset_x / (2)) + (i_49477 * offset_x));ctx.moveTo(posx_49478,(0));
ctx.lineTo(posx_49478,h);
} else
{}
{
var G__49479 = cljs.core.next.call(null,seq__49410_49471__$1);
var G__49480 = null;
var G__49481 = (0);
var G__49482 = (0);
seq__49410_49460 = G__49479;
chunk__49411_49461 = G__49480;
count__49412_49462 = G__49481;
i__49413_49463 = G__49482;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49483){var map__49484 = p__49483;var map__49484__$1 = ((cljs.core.seq_QMARK_.call(null,map__49484))?cljs.core.apply.call(null,cljs.core.hash_map,map__49484):map__49484);var line = cljs.core.get.call(null,map__49484__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49485){var map__49486 = p__49485;var map__49486__$1 = ((cljs.core.seq_QMARK_.call(null,map__49486))?cljs.core.apply.call(null,cljs.core.hash_map,map__49486):map__49486);var line = cljs.core.get.call(null,map__49486__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49487){var map__49488 = p__49487;var map__49488__$1 = ((cljs.core.seq_QMARK_.call(null,map__49488))?cljs.core.apply.call(null,cljs.core.hash_map,map__49488):map__49488);var line = cljs.core.get.call(null,map__49488__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49489,base,ctx){var map__49490 = p__49489;var map__49490__$1 = ((cljs.core.seq_QMARK_.call(null,map__49490))?cljs.core.apply.call(null,cljs.core.hash_map,map__49490):map__49490);var line = cljs.core.get.call(null,map__49490__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__49490__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__49490__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__49490__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__49491 = base;var w = cljs.core.nth.call(null,vec__49491,(0),null);var h = cljs.core.nth.call(null,vec__49491,(1),null);var max_v = cljs.core.nth.call(null,vec__49491,(2),null);var min_v = cljs.core.nth.call(null,vec__49491,(3),null);var offset_v = cljs.core.nth.call(null,vec__49491,(4),null);var offset_x = cljs.core.nth.call(null,vec__49491,(5),null);var pos_y = cljs.core.nth.call(null,vec__49491,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__49492 = cljs.core._EQ_;var expr__49493 = style;if(cljs.core.truth_(pred__49492.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__49493)))
{var seq__49495 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__49496 = null;var count__49497 = (0);var i__49498 = (0);while(true){
if((i__49498 < count__49497))
{var vec__49499 = cljs.core._nth.call(null,chunk__49496,i__49498);var idx = cljs.core.nth.call(null,vec__49499,(0),null);var value = cljs.core.nth.call(null,vec__49499,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__49507 = seq__49495;
var G__49508 = chunk__49496;
var G__49509 = count__49497;
var G__49510 = (i__49498 + (1));
seq__49495 = G__49507;
chunk__49496 = G__49508;
count__49497 = G__49509;
i__49498 = G__49510;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49495);if(temp__4126__auto__)
{var seq__49495__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49495__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49495__$1);{
var G__49511 = cljs.core.chunk_rest.call(null,seq__49495__$1);
var G__49512 = c__4307__auto__;
var G__49513 = cljs.core.count.call(null,c__4307__auto__);
var G__49514 = (0);
seq__49495 = G__49511;
chunk__49496 = G__49512;
count__49497 = G__49513;
i__49498 = G__49514;
continue;
}
} else
{var vec__49500 = cljs.core.first.call(null,seq__49495__$1);var idx = cljs.core.nth.call(null,vec__49500,(0),null);var value = cljs.core.nth.call(null,vec__49500,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__49515 = cljs.core.next.call(null,seq__49495__$1);
var G__49516 = null;
var G__49517 = (0);
var G__49518 = (0);
seq__49495 = G__49515;
chunk__49496 = G__49516;
count__49497 = G__49517;
i__49498 = G__49518;
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
var seq__49501_49519 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__49492,expr__49493,vec__49491,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__49490,map__49490__$1,line,color,offset,style){
return (function() { 
var G__49523__delegate = function (args){return args;
};
var G__49523 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49523__delegate.call(this,args);};
G__49523.cljs$lang$maxFixedArity = 0;
G__49523.cljs$lang$applyTo = (function (arglist__49524){
var args = cljs.core.seq(arglist__49524);
return G__49523__delegate(args);
});
G__49523.cljs$core$IFn$_invoke$arity$variadic = G__49523__delegate;
return G__49523;
})()
;})(pred__49492,expr__49493,vec__49491,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__49490,map__49490__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__49502_49520 = null;var count__49503_49521 = (0);var i__49504_49522 = (0);while(true){
if((i__49504_49522 < count__49503_49521))
{var vec__49505_49525 = cljs.core._nth.call(null,chunk__49502_49520,i__49504_49522);var idx_49526 = cljs.core.nth.call(null,vec__49505_49525,(0),null);var prev_49527 = cljs.core.nth.call(null,vec__49505_49525,(1),null);var curr_49528 = cljs.core.nth.call(null,vec__49505_49525,(2),null);ctx.moveTo(((idx_49526 + offset__$1) * offset_x),pos_y.call(null,prev_49527));
ctx.lineTo((((idx_49526 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_49528));
{
var G__49529 = seq__49501_49519;
var G__49530 = chunk__49502_49520;
var G__49531 = count__49503_49521;
var G__49532 = (i__49504_49522 + (1));
seq__49501_49519 = G__49529;
chunk__49502_49520 = G__49530;
count__49503_49521 = G__49531;
i__49504_49522 = G__49532;
continue;
}
} else
{var temp__4126__auto___49533 = cljs.core.seq.call(null,seq__49501_49519);if(temp__4126__auto___49533)
{var seq__49501_49534__$1 = temp__4126__auto___49533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49501_49534__$1))
{var c__4307__auto___49535 = cljs.core.chunk_first.call(null,seq__49501_49534__$1);{
var G__49536 = cljs.core.chunk_rest.call(null,seq__49501_49534__$1);
var G__49537 = c__4307__auto___49535;
var G__49538 = cljs.core.count.call(null,c__4307__auto___49535);
var G__49539 = (0);
seq__49501_49519 = G__49536;
chunk__49502_49520 = G__49537;
count__49503_49521 = G__49538;
i__49504_49522 = G__49539;
continue;
}
} else
{var vec__49506_49540 = cljs.core.first.call(null,seq__49501_49534__$1);var idx_49541 = cljs.core.nth.call(null,vec__49506_49540,(0),null);var prev_49542 = cljs.core.nth.call(null,vec__49506_49540,(1),null);var curr_49543 = cljs.core.nth.call(null,vec__49506_49540,(2),null);ctx.moveTo(((idx_49541 + offset__$1) * offset_x),pos_y.call(null,prev_49542));
ctx.lineTo((((idx_49541 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_49543));
{
var G__49544 = cljs.core.next.call(null,seq__49501_49534__$1);
var G__49545 = null;
var G__49546 = (0);
var G__49547 = (0);
seq__49501_49519 = G__49544;
chunk__49502_49520 = G__49545;
count__49503_49521 = G__49546;
i__49504_49522 = G__49547;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49548){var map__49549 = p__49548;var map__49549__$1 = ((cljs.core.seq_QMARK_.call(null,map__49549))?cljs.core.apply.call(null,cljs.core.hash_map,map__49549):map__49549);var kline = cljs.core.get.call(null,map__49549__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49550){var map__49551 = p__49550;var map__49551__$1 = ((cljs.core.seq_QMARK_.call(null,map__49551))?cljs.core.apply.call(null,cljs.core.hash_map,map__49551):map__49551);var kline = cljs.core.get.call(null,map__49551__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49552){var map__49553 = p__49552;var map__49553__$1 = ((cljs.core.seq_QMARK_.call(null,map__49553))?cljs.core.apply.call(null,cljs.core.hash_map,map__49553):map__49553);var kline = cljs.core.get.call(null,map__49553__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49554,base,ctx){var map__49555 = p__49554;var map__49555__$1 = ((cljs.core.seq_QMARK_.call(null,map__49555))?cljs.core.apply.call(null,cljs.core.hash_map,map__49555):map__49555);var kline = cljs.core.get.call(null,map__49555__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__49555__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__49556 = base;var w = cljs.core.nth.call(null,vec__49556,(0),null);var h = cljs.core.nth.call(null,vec__49556,(1),null);var max_v = cljs.core.nth.call(null,vec__49556,(2),null);var min_v = cljs.core.nth.call(null,vec__49556,(3),null);var offset_v = cljs.core.nth.call(null,vec__49556,(4),null);var offset_x = cljs.core.nth.call(null,vec__49556,(5),null);var pos_y = cljs.core.nth.call(null,vec__49556,(6),null);(ctx["fillStyle"] = "black");
var seq__49557 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49556,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49555,map__49555__$1,kline,info){
return (function() { 
var G__49565__delegate = function (args){return args;
};
var G__49565 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49565__delegate.call(this,args);};
G__49565.cljs$lang$maxFixedArity = 0;
G__49565.cljs$lang$applyTo = (function (arglist__49566){
var args = cljs.core.seq(arglist__49566);
return G__49565__delegate(args);
});
G__49565.cljs$core$IFn$_invoke$arity$variadic = G__49565__delegate;
return G__49565;
})()
;})(vec__49556,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49555,map__49555__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__49558 = null;var count__49559 = (0);var i__49560 = (0);while(true){
if((i__49560 < count__49559))
{var vec__49561 = cljs.core._nth.call(null,chunk__49558,i__49560);var idx = cljs.core.nth.call(null,vec__49561,(0),null);var vec__49562 = cljs.core.nth.call(null,vec__49561,(1),null);var date = cljs.core.nth.call(null,vec__49562,(0),null);var open = cljs.core.nth.call(null,vec__49562,(1),null);var high = cljs.core.nth.call(null,vec__49562,(2),null);var low = cljs.core.nth.call(null,vec__49562,(3),null);var close = cljs.core.nth.call(null,vec__49562,(4),null);var volume = cljs.core.nth.call(null,vec__49562,(5),null);var info__$1 = cljs.core.nth.call(null,vec__49561,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__49567 = seq__49557;
var G__49568 = chunk__49558;
var G__49569 = count__49559;
var G__49570 = (i__49560 + (1));
seq__49557 = G__49567;
chunk__49558 = G__49568;
count__49559 = G__49569;
i__49560 = G__49570;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49557);if(temp__4126__auto__)
{var seq__49557__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49557__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49557__$1);{
var G__49571 = cljs.core.chunk_rest.call(null,seq__49557__$1);
var G__49572 = c__4307__auto__;
var G__49573 = cljs.core.count.call(null,c__4307__auto__);
var G__49574 = (0);
seq__49557 = G__49571;
chunk__49558 = G__49572;
count__49559 = G__49573;
i__49560 = G__49574;
continue;
}
} else
{var vec__49563 = cljs.core.first.call(null,seq__49557__$1);var idx = cljs.core.nth.call(null,vec__49563,(0),null);var vec__49564 = cljs.core.nth.call(null,vec__49563,(1),null);var date = cljs.core.nth.call(null,vec__49564,(0),null);var open = cljs.core.nth.call(null,vec__49564,(1),null);var high = cljs.core.nth.call(null,vec__49564,(2),null);var low = cljs.core.nth.call(null,vec__49564,(3),null);var close = cljs.core.nth.call(null,vec__49564,(4),null);var volume = cljs.core.nth.call(null,vec__49564,(5),null);var info__$1 = cljs.core.nth.call(null,vec__49563,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__49575 = cljs.core.next.call(null,seq__49557__$1);
var G__49576 = null;
var G__49577 = (0);
var G__49578 = (0);
seq__49557 = G__49575;
chunk__49558 = G__49576;
count__49559 = G__49577;
i__49560 = G__49578;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__49579){var map__49580 = p__49579;var map__49580__$1 = ((cljs.core.seq_QMARK_.call(null,map__49580))?cljs.core.apply.call(null,cljs.core.hash_map,map__49580):map__49580);var cz = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__49581){var map__49582 = p__49581;var map__49582__$1 = ((cljs.core.seq_QMARK_.call(null,map__49582))?cljs.core.apply.call(null,cljs.core.hash_map,map__49582):map__49582);var cz = cljs.core.get.call(null,map__49582__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__49583,base,ctx){var map__49584 = p__49583;var map__49584__$1 = ((cljs.core.seq_QMARK_.call(null,map__49584))?cljs.core.apply.call(null,cljs.core.hash_map,map__49584):map__49584);var cz = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__49585 = base;var w = cljs.core.nth.call(null,vec__49585,(0),null);var h = cljs.core.nth.call(null,vec__49585,(1),null);var max_v = cljs.core.nth.call(null,vec__49585,(2),null);var min_v = cljs.core.nth.call(null,vec__49585,(3),null);var offset_v = cljs.core.nth.call(null,vec__49585,(4),null);var offset_x = cljs.core.nth.call(null,vec__49585,(5),null);var pos_y = cljs.core.nth.call(null,vec__49585,(6),null);var proj_x = ((function (vec__49585,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49584,map__49584__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__49585,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49584,map__49584__$1,cz,vz,color))
;var proj_y = ((function (vec__49585,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__49584,map__49584__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__49585,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__49584,map__49584__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__49586 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49585,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__49584,map__49584__$1,cz,vz,color){
return (function() { 
var G__49592__delegate = function (args){return args;
};
var G__49592 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49592__delegate.call(this,args);};
G__49592.cljs$lang$maxFixedArity = 0;
G__49592.cljs$lang$applyTo = (function (arglist__49593){
var args = cljs.core.seq(arglist__49593);
return G__49592__delegate(args);
});
G__49592.cljs$core$IFn$_invoke$arity$variadic = G__49592__delegate;
return G__49592;
})()
;})(vec__49585,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__49584,map__49584__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__49587 = null;var count__49588 = (0);var i__49589 = (0);while(true){
if((i__49589 < count__49588))
{var vec__49590 = cljs.core._nth.call(null,chunk__49587,i__49589);var idx = cljs.core.nth.call(null,vec__49590,(0),null);var pc = cljs.core.nth.call(null,vec__49590,(1),null);var cc = cljs.core.nth.call(null,vec__49590,(2),null);var pv = cljs.core.nth.call(null,vec__49590,(3),null);var cv = cljs.core.nth.call(null,vec__49590,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__49594 = seq__49586;
var G__49595 = chunk__49587;
var G__49596 = count__49588;
var G__49597 = (i__49589 + (1));
seq__49586 = G__49594;
chunk__49587 = G__49595;
count__49588 = G__49596;
i__49589 = G__49597;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49586);if(temp__4126__auto__)
{var seq__49586__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49586__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49586__$1);{
var G__49598 = cljs.core.chunk_rest.call(null,seq__49586__$1);
var G__49599 = c__4307__auto__;
var G__49600 = cljs.core.count.call(null,c__4307__auto__);
var G__49601 = (0);
seq__49586 = G__49598;
chunk__49587 = G__49599;
count__49588 = G__49600;
i__49589 = G__49601;
continue;
}
} else
{var vec__49591 = cljs.core.first.call(null,seq__49586__$1);var idx = cljs.core.nth.call(null,vec__49591,(0),null);var pc = cljs.core.nth.call(null,vec__49591,(1),null);var cc = cljs.core.nth.call(null,vec__49591,(2),null);var pv = cljs.core.nth.call(null,vec__49591,(3),null);var cv = cljs.core.nth.call(null,vec__49591,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__49602 = cljs.core.next.call(null,seq__49586__$1);
var G__49603 = null;
var G__49604 = (0);
var G__49605 = (0);
seq__49586 = G__49602;
chunk__49587 = G__49603;
count__49588 = G__49604;
i__49589 = G__49605;
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
