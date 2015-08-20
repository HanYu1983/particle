// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38410){var map__38411 = p__38410;var map__38411__$1 = ((cljs.core.seq_QMARK_.call(null,map__38411))?cljs.core.apply.call(null,cljs.core.hash_map,map__38411):map__38411);var t = cljs.core.get.call(null,map__38411__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38412){var map__38413 = p__38412;var map__38413__$1 = ((cljs.core.seq_QMARK_.call(null,map__38413))?cljs.core.apply.call(null,cljs.core.hash_map,map__38413):map__38413);var t = cljs.core.get.call(null,map__38413__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38414){var map__38415 = p__38414;var map__38415__$1 = ((cljs.core.seq_QMARK_.call(null,map__38415))?cljs.core.apply.call(null,cljs.core.hash_map,map__38415):map__38415);var t = cljs.core.get.call(null,map__38415__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38416,base,ctx){var map__38417 = p__38416;var map__38417__$1 = ((cljs.core.seq_QMARK_.call(null,map__38417))?cljs.core.apply.call(null,cljs.core.hash_map,map__38417):map__38417);var t = cljs.core.get.call(null,map__38417__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__38418,w,h,ctx){var map__38424 = p__38418;var map__38424__$1 = ((cljs.core.seq_QMARK_.call(null,map__38424))?cljs.core.apply.call(null,cljs.core.hash_map,map__38424):map__38424);var info = map__38424__$1;var drawers = cljs.core.get.call(null,map__38424__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__38425 = cljs.core.seq.call(null,drawers);var chunk__38426 = null;var count__38427 = (0);var i__38428 = (0);while(true){
if((i__38428 < count__38427))
{var drawer = cljs.core._nth.call(null,chunk__38426,i__38428);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__38429 = seq__38425;
var G__38430 = chunk__38426;
var G__38431 = count__38427;
var G__38432 = (i__38428 + (1));
seq__38425 = G__38429;
chunk__38426 = G__38430;
count__38427 = G__38431;
i__38428 = G__38432;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38425);if(temp__4126__auto__)
{var seq__38425__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38425__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38425__$1);{
var G__38433 = cljs.core.chunk_rest.call(null,seq__38425__$1);
var G__38434 = c__4307__auto__;
var G__38435 = cljs.core.count.call(null,c__4307__auto__);
var G__38436 = (0);
seq__38425 = G__38433;
chunk__38426 = G__38434;
count__38427 = G__38435;
i__38428 = G__38436;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__38425__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__38437 = cljs.core.next.call(null,seq__38425__$1);
var G__38438 = null;
var G__38439 = (0);
var G__38440 = (0);
seq__38425 = G__38437;
chunk__38426 = G__38438;
count__38427 = G__38439;
i__38428 = G__38440;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38441){var map__38442 = p__38441;var map__38442__$1 = ((cljs.core.seq_QMARK_.call(null,map__38442))?cljs.core.apply.call(null,cljs.core.hash_map,map__38442):map__38442);var line = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38443){var map__38444 = p__38443;var map__38444__$1 = ((cljs.core.seq_QMARK_.call(null,map__38444))?cljs.core.apply.call(null,cljs.core.hash_map,map__38444):map__38444);var line = cljs.core.get.call(null,map__38444__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38444__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38445){var map__38446 = p__38445;var map__38446__$1 = ((cljs.core.seq_QMARK_.call(null,map__38446))?cljs.core.apply.call(null,cljs.core.hash_map,map__38446):map__38446);var line = cljs.core.get.call(null,map__38446__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38446__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38447,base,ctx){var map__38448 = p__38447;var map__38448__$1 = ((cljs.core.seq_QMARK_.call(null,map__38448))?cljs.core.apply.call(null,cljs.core.hash_map,map__38448):map__38448);var line = cljs.core.get.call(null,map__38448__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38448__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__38448__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__38448__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__38449 = base;var w = cljs.core.nth.call(null,vec__38449,(0),null);var h = cljs.core.nth.call(null,vec__38449,(1),null);var max_v = cljs.core.nth.call(null,vec__38449,(2),null);var min_v = cljs.core.nth.call(null,vec__38449,(3),null);var offset_v = cljs.core.nth.call(null,vec__38449,(4),null);var offset_x = cljs.core.nth.call(null,vec__38449,(5),null);var pos_y = cljs.core.nth.call(null,vec__38449,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__38450_38462 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__38451_38463 = null;var count__38452_38464 = (0);var i__38453_38465 = (0);while(true){
if((i__38453_38465 < count__38452_38464))
{var i_38466 = cljs.core._nth.call(null,chunk__38451_38463,i__38453_38465);var v_38467 = (min_v + (i_38466 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38467 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_38467));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38467 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_38467));
ctx.moveTo((0),pos_y.call(null,v_38467));
ctx.lineTo(w,pos_y.call(null,v_38467));
{
var G__38468 = seq__38450_38462;
var G__38469 = chunk__38451_38463;
var G__38470 = count__38452_38464;
var G__38471 = (i__38453_38465 + (1));
seq__38450_38462 = G__38468;
chunk__38451_38463 = G__38469;
count__38452_38464 = G__38470;
i__38453_38465 = G__38471;
continue;
}
} else
{var temp__4126__auto___38472 = cljs.core.seq.call(null,seq__38450_38462);if(temp__4126__auto___38472)
{var seq__38450_38473__$1 = temp__4126__auto___38472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38450_38473__$1))
{var c__4307__auto___38474 = cljs.core.chunk_first.call(null,seq__38450_38473__$1);{
var G__38475 = cljs.core.chunk_rest.call(null,seq__38450_38473__$1);
var G__38476 = c__4307__auto___38474;
var G__38477 = cljs.core.count.call(null,c__4307__auto___38474);
var G__38478 = (0);
seq__38450_38462 = G__38475;
chunk__38451_38463 = G__38476;
count__38452_38464 = G__38477;
i__38453_38465 = G__38478;
continue;
}
} else
{var i_38479 = cljs.core.first.call(null,seq__38450_38473__$1);var v_38480 = (min_v + (i_38479 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38480 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_38480));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38480 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_38480));
ctx.moveTo((0),pos_y.call(null,v_38480));
ctx.lineTo(w,pos_y.call(null,v_38480));
{
var G__38481 = cljs.core.next.call(null,seq__38450_38473__$1);
var G__38482 = null;
var G__38483 = (0);
var G__38484 = (0);
seq__38450_38462 = G__38481;
chunk__38451_38463 = G__38482;
count__38452_38464 = G__38483;
i__38453_38465 = G__38484;
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
{var seq__38454_38485 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__38455_38486 = null;var count__38456_38487 = (0);var i__38457_38488 = (0);while(true){
if((i__38457_38488 < count__38456_38487))
{var i_38489 = cljs.core._nth.call(null,chunk__38455_38486,i__38457_38488);if((cljs.core.mod.call(null,i_38489,cntx) === (0)))
{var posx_38490 = ((offset_x / (2)) + (i_38489 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_38489)),posx_38490,h);
ctx.moveTo(posx_38490,(0));
ctx.lineTo(posx_38490,h);
} else
{}
{
var G__38491 = seq__38454_38485;
var G__38492 = chunk__38455_38486;
var G__38493 = count__38456_38487;
var G__38494 = (i__38457_38488 + (1));
seq__38454_38485 = G__38491;
chunk__38455_38486 = G__38492;
count__38456_38487 = G__38493;
i__38457_38488 = G__38494;
continue;
}
} else
{var temp__4126__auto___38495 = cljs.core.seq.call(null,seq__38454_38485);if(temp__4126__auto___38495)
{var seq__38454_38496__$1 = temp__4126__auto___38495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38454_38496__$1))
{var c__4307__auto___38497 = cljs.core.chunk_first.call(null,seq__38454_38496__$1);{
var G__38498 = cljs.core.chunk_rest.call(null,seq__38454_38496__$1);
var G__38499 = c__4307__auto___38497;
var G__38500 = cljs.core.count.call(null,c__4307__auto___38497);
var G__38501 = (0);
seq__38454_38485 = G__38498;
chunk__38455_38486 = G__38499;
count__38456_38487 = G__38500;
i__38457_38488 = G__38501;
continue;
}
} else
{var i_38502 = cljs.core.first.call(null,seq__38454_38496__$1);if((cljs.core.mod.call(null,i_38502,cntx) === (0)))
{var posx_38503 = ((offset_x / (2)) + (i_38502 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_38502)),posx_38503,h);
ctx.moveTo(posx_38503,(0));
ctx.lineTo(posx_38503,h);
} else
{}
{
var G__38504 = cljs.core.next.call(null,seq__38454_38496__$1);
var G__38505 = null;
var G__38506 = (0);
var G__38507 = (0);
seq__38454_38485 = G__38504;
chunk__38455_38486 = G__38505;
count__38456_38487 = G__38506;
i__38457_38488 = G__38507;
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
{var seq__38458_38508 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__38459_38509 = null;var count__38460_38510 = (0);var i__38461_38511 = (0);while(true){
if((i__38461_38511 < count__38460_38510))
{var i_38512 = cljs.core._nth.call(null,chunk__38459_38509,i__38461_38511);if((cljs.core.mod.call(null,i_38512,cntx) === (0)))
{var posx_38513 = ((offset_x / (2)) + (i_38512 * offset_x));ctx.moveTo(posx_38513,(0));
ctx.lineTo(posx_38513,h);
} else
{}
{
var G__38514 = seq__38458_38508;
var G__38515 = chunk__38459_38509;
var G__38516 = count__38460_38510;
var G__38517 = (i__38461_38511 + (1));
seq__38458_38508 = G__38514;
chunk__38459_38509 = G__38515;
count__38460_38510 = G__38516;
i__38461_38511 = G__38517;
continue;
}
} else
{var temp__4126__auto___38518 = cljs.core.seq.call(null,seq__38458_38508);if(temp__4126__auto___38518)
{var seq__38458_38519__$1 = temp__4126__auto___38518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38458_38519__$1))
{var c__4307__auto___38520 = cljs.core.chunk_first.call(null,seq__38458_38519__$1);{
var G__38521 = cljs.core.chunk_rest.call(null,seq__38458_38519__$1);
var G__38522 = c__4307__auto___38520;
var G__38523 = cljs.core.count.call(null,c__4307__auto___38520);
var G__38524 = (0);
seq__38458_38508 = G__38521;
chunk__38459_38509 = G__38522;
count__38460_38510 = G__38523;
i__38461_38511 = G__38524;
continue;
}
} else
{var i_38525 = cljs.core.first.call(null,seq__38458_38519__$1);if((cljs.core.mod.call(null,i_38525,cntx) === (0)))
{var posx_38526 = ((offset_x / (2)) + (i_38525 * offset_x));ctx.moveTo(posx_38526,(0));
ctx.lineTo(posx_38526,h);
} else
{}
{
var G__38527 = cljs.core.next.call(null,seq__38458_38519__$1);
var G__38528 = null;
var G__38529 = (0);
var G__38530 = (0);
seq__38458_38508 = G__38527;
chunk__38459_38509 = G__38528;
count__38460_38510 = G__38529;
i__38461_38511 = G__38530;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38531){var map__38532 = p__38531;var map__38532__$1 = ((cljs.core.seq_QMARK_.call(null,map__38532))?cljs.core.apply.call(null,cljs.core.hash_map,map__38532):map__38532);var line = cljs.core.get.call(null,map__38532__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38533){var map__38534 = p__38533;var map__38534__$1 = ((cljs.core.seq_QMARK_.call(null,map__38534))?cljs.core.apply.call(null,cljs.core.hash_map,map__38534):map__38534);var line = cljs.core.get.call(null,map__38534__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38535){var map__38536 = p__38535;var map__38536__$1 = ((cljs.core.seq_QMARK_.call(null,map__38536))?cljs.core.apply.call(null,cljs.core.hash_map,map__38536):map__38536);var line = cljs.core.get.call(null,map__38536__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38537,base,ctx){var map__38538 = p__38537;var map__38538__$1 = ((cljs.core.seq_QMARK_.call(null,map__38538))?cljs.core.apply.call(null,cljs.core.hash_map,map__38538):map__38538);var line = cljs.core.get.call(null,map__38538__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__38538__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__38538__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var vec__38539 = base;var w = cljs.core.nth.call(null,vec__38539,(0),null);var h = cljs.core.nth.call(null,vec__38539,(1),null);var max_v = cljs.core.nth.call(null,vec__38539,(2),null);var min_v = cljs.core.nth.call(null,vec__38539,(3),null);var offset_v = cljs.core.nth.call(null,vec__38539,(4),null);var offset_x = cljs.core.nth.call(null,vec__38539,(5),null);var pos_y = cljs.core.nth.call(null,vec__38539,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
var seq__38540_38546 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__38539,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__38538,map__38538__$1,line,color,offset){
return (function() { 
var G__38550__delegate = function (args){return args;
};
var G__38550 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38550__delegate.call(this,args);};
G__38550.cljs$lang$maxFixedArity = 0;
G__38550.cljs$lang$applyTo = (function (arglist__38551){
var args = cljs.core.seq(arglist__38551);
return G__38550__delegate(args);
});
G__38550.cljs$core$IFn$_invoke$arity$variadic = G__38550__delegate;
return G__38550;
})()
;})(vec__38539,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__38538,map__38538__$1,line,color,offset))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__38541_38547 = null;var count__38542_38548 = (0);var i__38543_38549 = (0);while(true){
if((i__38543_38549 < count__38542_38548))
{var vec__38544_38552 = cljs.core._nth.call(null,chunk__38541_38547,i__38543_38549);var idx_38553 = cljs.core.nth.call(null,vec__38544_38552,(0),null);var prev_38554 = cljs.core.nth.call(null,vec__38544_38552,(1),null);var curr_38555 = cljs.core.nth.call(null,vec__38544_38552,(2),null);ctx.moveTo(((idx_38553 + offset__$1) * offset_x),pos_y.call(null,prev_38554));
ctx.lineTo((((idx_38553 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_38555));
{
var G__38556 = seq__38540_38546;
var G__38557 = chunk__38541_38547;
var G__38558 = count__38542_38548;
var G__38559 = (i__38543_38549 + (1));
seq__38540_38546 = G__38556;
chunk__38541_38547 = G__38557;
count__38542_38548 = G__38558;
i__38543_38549 = G__38559;
continue;
}
} else
{var temp__4126__auto___38560 = cljs.core.seq.call(null,seq__38540_38546);if(temp__4126__auto___38560)
{var seq__38540_38561__$1 = temp__4126__auto___38560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38540_38561__$1))
{var c__4307__auto___38562 = cljs.core.chunk_first.call(null,seq__38540_38561__$1);{
var G__38563 = cljs.core.chunk_rest.call(null,seq__38540_38561__$1);
var G__38564 = c__4307__auto___38562;
var G__38565 = cljs.core.count.call(null,c__4307__auto___38562);
var G__38566 = (0);
seq__38540_38546 = G__38563;
chunk__38541_38547 = G__38564;
count__38542_38548 = G__38565;
i__38543_38549 = G__38566;
continue;
}
} else
{var vec__38545_38567 = cljs.core.first.call(null,seq__38540_38561__$1);var idx_38568 = cljs.core.nth.call(null,vec__38545_38567,(0),null);var prev_38569 = cljs.core.nth.call(null,vec__38545_38567,(1),null);var curr_38570 = cljs.core.nth.call(null,vec__38545_38567,(2),null);ctx.moveTo(((idx_38568 + offset__$1) * offset_x),pos_y.call(null,prev_38569));
ctx.lineTo((((idx_38568 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_38570));
{
var G__38571 = cljs.core.next.call(null,seq__38540_38561__$1);
var G__38572 = null;
var G__38573 = (0);
var G__38574 = (0);
seq__38540_38546 = G__38571;
chunk__38541_38547 = G__38572;
count__38542_38548 = G__38573;
i__38543_38549 = G__38574;
continue;
}
}
} else
{}
}
break;
}
return ctx.stroke();
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38575){var map__38576 = p__38575;var map__38576__$1 = ((cljs.core.seq_QMARK_.call(null,map__38576))?cljs.core.apply.call(null,cljs.core.hash_map,map__38576):map__38576);var kline = cljs.core.get.call(null,map__38576__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38577){var map__38578 = p__38577;var map__38578__$1 = ((cljs.core.seq_QMARK_.call(null,map__38578))?cljs.core.apply.call(null,cljs.core.hash_map,map__38578):map__38578);var kline = cljs.core.get.call(null,map__38578__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38579){var map__38580 = p__38579;var map__38580__$1 = ((cljs.core.seq_QMARK_.call(null,map__38580))?cljs.core.apply.call(null,cljs.core.hash_map,map__38580):map__38580);var kline = cljs.core.get.call(null,map__38580__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38581,base,ctx){var map__38582 = p__38581;var map__38582__$1 = ((cljs.core.seq_QMARK_.call(null,map__38582))?cljs.core.apply.call(null,cljs.core.hash_map,map__38582):map__38582);var kline = cljs.core.get.call(null,map__38582__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__38582__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__38583 = base;var w = cljs.core.nth.call(null,vec__38583,(0),null);var h = cljs.core.nth.call(null,vec__38583,(1),null);var max_v = cljs.core.nth.call(null,vec__38583,(2),null);var min_v = cljs.core.nth.call(null,vec__38583,(3),null);var offset_v = cljs.core.nth.call(null,vec__38583,(4),null);var offset_x = cljs.core.nth.call(null,vec__38583,(5),null);var pos_y = cljs.core.nth.call(null,vec__38583,(6),null);(ctx["fillStyle"] = "black");
var seq__38584 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__38583,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38582,map__38582__$1,kline,info){
return (function() { 
var G__38592__delegate = function (args){return args;
};
var G__38592 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38592__delegate.call(this,args);};
G__38592.cljs$lang$maxFixedArity = 0;
G__38592.cljs$lang$applyTo = (function (arglist__38593){
var args = cljs.core.seq(arglist__38593);
return G__38592__delegate(args);
});
G__38592.cljs$core$IFn$_invoke$arity$variadic = G__38592__delegate;
return G__38592;
})()
;})(vec__38583,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38582,map__38582__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__38585 = null;var count__38586 = (0);var i__38587 = (0);while(true){
if((i__38587 < count__38586))
{var vec__38588 = cljs.core._nth.call(null,chunk__38585,i__38587);var idx = cljs.core.nth.call(null,vec__38588,(0),null);var vec__38589 = cljs.core.nth.call(null,vec__38588,(1),null);var date = cljs.core.nth.call(null,vec__38589,(0),null);var open = cljs.core.nth.call(null,vec__38589,(1),null);var high = cljs.core.nth.call(null,vec__38589,(2),null);var low = cljs.core.nth.call(null,vec__38589,(3),null);var close = cljs.core.nth.call(null,vec__38589,(4),null);var volume = cljs.core.nth.call(null,vec__38589,(5),null);var info__$1 = cljs.core.nth.call(null,vec__38588,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__38594 = seq__38584;
var G__38595 = chunk__38585;
var G__38596 = count__38586;
var G__38597 = (i__38587 + (1));
seq__38584 = G__38594;
chunk__38585 = G__38595;
count__38586 = G__38596;
i__38587 = G__38597;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38584);if(temp__4126__auto__)
{var seq__38584__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38584__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38584__$1);{
var G__38598 = cljs.core.chunk_rest.call(null,seq__38584__$1);
var G__38599 = c__4307__auto__;
var G__38600 = cljs.core.count.call(null,c__4307__auto__);
var G__38601 = (0);
seq__38584 = G__38598;
chunk__38585 = G__38599;
count__38586 = G__38600;
i__38587 = G__38601;
continue;
}
} else
{var vec__38590 = cljs.core.first.call(null,seq__38584__$1);var idx = cljs.core.nth.call(null,vec__38590,(0),null);var vec__38591 = cljs.core.nth.call(null,vec__38590,(1),null);var date = cljs.core.nth.call(null,vec__38591,(0),null);var open = cljs.core.nth.call(null,vec__38591,(1),null);var high = cljs.core.nth.call(null,vec__38591,(2),null);var low = cljs.core.nth.call(null,vec__38591,(3),null);var close = cljs.core.nth.call(null,vec__38591,(4),null);var volume = cljs.core.nth.call(null,vec__38591,(5),null);var info__$1 = cljs.core.nth.call(null,vec__38590,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__38602 = cljs.core.next.call(null,seq__38584__$1);
var G__38603 = null;
var G__38604 = (0);
var G__38605 = (0);
seq__38584 = G__38602;
chunk__38585 = G__38603;
count__38586 = G__38604;
i__38587 = G__38605;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__38606){var map__38607 = p__38606;var map__38607__$1 = ((cljs.core.seq_QMARK_.call(null,map__38607))?cljs.core.apply.call(null,cljs.core.hash_map,map__38607):map__38607);var cz = cljs.core.get.call(null,map__38607__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__38608){var map__38609 = p__38608;var map__38609__$1 = ((cljs.core.seq_QMARK_.call(null,map__38609))?cljs.core.apply.call(null,cljs.core.hash_map,map__38609):map__38609);var cz = cljs.core.get.call(null,map__38609__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__38610,base,ctx){var map__38611 = p__38610;var map__38611__$1 = ((cljs.core.seq_QMARK_.call(null,map__38611))?cljs.core.apply.call(null,cljs.core.hash_map,map__38611):map__38611);var cz = cljs.core.get.call(null,map__38611__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__38611__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__38611__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__38612 = base;var w = cljs.core.nth.call(null,vec__38612,(0),null);var h = cljs.core.nth.call(null,vec__38612,(1),null);var max_v = cljs.core.nth.call(null,vec__38612,(2),null);var min_v = cljs.core.nth.call(null,vec__38612,(3),null);var offset_v = cljs.core.nth.call(null,vec__38612,(4),null);var offset_x = cljs.core.nth.call(null,vec__38612,(5),null);var pos_y = cljs.core.nth.call(null,vec__38612,(6),null);var proj_x = ((function (vec__38612,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38611,map__38611__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__38612,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38611,map__38611__$1,cz,vz,color))
;var proj_y = ((function (vec__38612,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__38611,map__38611__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__38612,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__38611,map__38611__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__38613 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__38612,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__38611,map__38611__$1,cz,vz,color){
return (function() { 
var G__38619__delegate = function (args){return args;
};
var G__38619 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38619__delegate.call(this,args);};
G__38619.cljs$lang$maxFixedArity = 0;
G__38619.cljs$lang$applyTo = (function (arglist__38620){
var args = cljs.core.seq(arglist__38620);
return G__38619__delegate(args);
});
G__38619.cljs$core$IFn$_invoke$arity$variadic = G__38619__delegate;
return G__38619;
})()
;})(vec__38612,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__38611,map__38611__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__38614 = null;var count__38615 = (0);var i__38616 = (0);while(true){
if((i__38616 < count__38615))
{var vec__38617 = cljs.core._nth.call(null,chunk__38614,i__38616);var idx = cljs.core.nth.call(null,vec__38617,(0),null);var pc = cljs.core.nth.call(null,vec__38617,(1),null);var cc = cljs.core.nth.call(null,vec__38617,(2),null);var pv = cljs.core.nth.call(null,vec__38617,(3),null);var cv = cljs.core.nth.call(null,vec__38617,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__38621 = seq__38613;
var G__38622 = chunk__38614;
var G__38623 = count__38615;
var G__38624 = (i__38616 + (1));
seq__38613 = G__38621;
chunk__38614 = G__38622;
count__38615 = G__38623;
i__38616 = G__38624;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38613);if(temp__4126__auto__)
{var seq__38613__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38613__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38613__$1);{
var G__38625 = cljs.core.chunk_rest.call(null,seq__38613__$1);
var G__38626 = c__4307__auto__;
var G__38627 = cljs.core.count.call(null,c__4307__auto__);
var G__38628 = (0);
seq__38613 = G__38625;
chunk__38614 = G__38626;
count__38615 = G__38627;
i__38616 = G__38628;
continue;
}
} else
{var vec__38618 = cljs.core.first.call(null,seq__38613__$1);var idx = cljs.core.nth.call(null,vec__38618,(0),null);var pc = cljs.core.nth.call(null,vec__38618,(1),null);var cc = cljs.core.nth.call(null,vec__38618,(2),null);var pv = cljs.core.nth.call(null,vec__38618,(3),null);var cv = cljs.core.nth.call(null,vec__38618,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__38629 = cljs.core.next.call(null,seq__38613__$1);
var G__38630 = null;
var G__38631 = (0);
var G__38632 = (0);
seq__38613 = G__38629;
chunk__38614 = G__38630;
count__38615 = G__38631;
i__38616 = G__38632;
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
