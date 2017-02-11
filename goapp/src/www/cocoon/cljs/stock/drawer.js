// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12507){var map__12508 = p__12507;var map__12508__$1 = ((cljs.core.seq_QMARK_.call(null,map__12508))?cljs.core.apply.call(null,cljs.core.hash_map,map__12508):map__12508);var t = cljs.core.get.call(null,map__12508__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12509){var map__12510 = p__12509;var map__12510__$1 = ((cljs.core.seq_QMARK_.call(null,map__12510))?cljs.core.apply.call(null,cljs.core.hash_map,map__12510):map__12510);var t = cljs.core.get.call(null,map__12510__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12511){var map__12512 = p__12511;var map__12512__$1 = ((cljs.core.seq_QMARK_.call(null,map__12512))?cljs.core.apply.call(null,cljs.core.hash_map,map__12512):map__12512);var t = cljs.core.get.call(null,map__12512__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12513,base,ctx){var map__12514 = p__12513;var map__12514__$1 = ((cljs.core.seq_QMARK_.call(null,map__12514))?cljs.core.apply.call(null,cljs.core.hash_map,map__12514):map__12514);var t = cljs.core.get.call(null,map__12514__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__12515,w,h,ctx){var map__12521 = p__12515;var map__12521__$1 = ((cljs.core.seq_QMARK_.call(null,map__12521))?cljs.core.apply.call(null,cljs.core.hash_map,map__12521):map__12521);var info = map__12521__$1;var drawers = cljs.core.get.call(null,map__12521__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__12522 = cljs.core.seq.call(null,drawers);var chunk__12523 = null;var count__12524 = (0);var i__12525 = (0);while(true){
if((i__12525 < count__12524))
{var drawer = cljs.core._nth.call(null,chunk__12523,i__12525);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__12526 = seq__12522;
var G__12527 = chunk__12523;
var G__12528 = count__12524;
var G__12529 = (i__12525 + (1));
seq__12522 = G__12526;
chunk__12523 = G__12527;
count__12524 = G__12528;
i__12525 = G__12529;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12522);if(temp__4126__auto__)
{var seq__12522__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12522__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12522__$1);{
var G__12530 = cljs.core.chunk_rest.call(null,seq__12522__$1);
var G__12531 = c__4307__auto__;
var G__12532 = cljs.core.count.call(null,c__4307__auto__);
var G__12533 = (0);
seq__12522 = G__12530;
chunk__12523 = G__12531;
count__12524 = G__12532;
i__12525 = G__12533;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__12522__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__12534 = cljs.core.next.call(null,seq__12522__$1);
var G__12535 = null;
var G__12536 = (0);
var G__12537 = (0);
seq__12522 = G__12534;
chunk__12523 = G__12535;
count__12524 = G__12536;
i__12525 = G__12537;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12538){var map__12539 = p__12538;var map__12539__$1 = ((cljs.core.seq_QMARK_.call(null,map__12539))?cljs.core.apply.call(null,cljs.core.hash_map,map__12539):map__12539);var line = cljs.core.get.call(null,map__12539__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12539__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12540){var map__12541 = p__12540;var map__12541__$1 = ((cljs.core.seq_QMARK_.call(null,map__12541))?cljs.core.apply.call(null,cljs.core.hash_map,map__12541):map__12541);var line = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12542){var map__12543 = p__12542;var map__12543__$1 = ((cljs.core.seq_QMARK_.call(null,map__12543))?cljs.core.apply.call(null,cljs.core.hash_map,map__12543):map__12543);var line = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12544,base,ctx){var map__12545 = p__12544;var map__12545__$1 = ((cljs.core.seq_QMARK_.call(null,map__12545))?cljs.core.apply.call(null,cljs.core.hash_map,map__12545):map__12545);var line = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var centerY = cljs.core.get.call(null,map__12545__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));var vec__12546 = base;var w = cljs.core.nth.call(null,vec__12546,(0),null);var h = cljs.core.nth.call(null,vec__12546,(1),null);var max_v = cljs.core.nth.call(null,vec__12546,(2),null);var min_v = cljs.core.nth.call(null,vec__12546,(3),null);var offset_v = cljs.core.nth.call(null,vec__12546,(4),null);var offset_x = cljs.core.nth.call(null,vec__12546,(5),null);var pos_y = cljs.core.nth.call(null,vec__12546,(6),null);var cnt = (10);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__12547_12559 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__12548_12560 = null;var count__12549_12561 = (0);var i__12550_12562 = (0);while(true){
if((i__12550_12562 < count__12549_12561))
{var i_12563 = cljs.core._nth.call(null,chunk__12548_12560,i__12550_12562);var v_12564 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_12563 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12564.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12564));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12564.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12564));
ctx.moveTo((0),pos_y.call(null,v_12564));
ctx.lineTo(w,pos_y.call(null,v_12564));
var v_12565 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_12563 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12565.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12565));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12565.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12565));
ctx.moveTo((0),pos_y.call(null,v_12565));
ctx.lineTo(w,pos_y.call(null,v_12565));
{
var G__12566 = seq__12547_12559;
var G__12567 = chunk__12548_12560;
var G__12568 = count__12549_12561;
var G__12569 = (i__12550_12562 + (1));
seq__12547_12559 = G__12566;
chunk__12548_12560 = G__12567;
count__12549_12561 = G__12568;
i__12550_12562 = G__12569;
continue;
}
} else
{var temp__4126__auto___12570 = cljs.core.seq.call(null,seq__12547_12559);if(temp__4126__auto___12570)
{var seq__12547_12571__$1 = temp__4126__auto___12570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12547_12571__$1))
{var c__4307__auto___12572 = cljs.core.chunk_first.call(null,seq__12547_12571__$1);{
var G__12573 = cljs.core.chunk_rest.call(null,seq__12547_12571__$1);
var G__12574 = c__4307__auto___12572;
var G__12575 = cljs.core.count.call(null,c__4307__auto___12572);
var G__12576 = (0);
seq__12547_12559 = G__12573;
chunk__12548_12560 = G__12574;
count__12549_12561 = G__12575;
i__12550_12562 = G__12576;
continue;
}
} else
{var i_12577 = cljs.core.first.call(null,seq__12547_12571__$1);var v_12578 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_12577 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12578.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12578));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12578.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12578));
ctx.moveTo((0),pos_y.call(null,v_12578));
ctx.lineTo(w,pos_y.call(null,v_12578));
var v_12579 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_12577 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12579.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12579));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12579.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12579));
ctx.moveTo((0),pos_y.call(null,v_12579));
ctx.lineTo(w,pos_y.call(null,v_12579));
{
var G__12580 = cljs.core.next.call(null,seq__12547_12571__$1);
var G__12581 = null;
var G__12582 = (0);
var G__12583 = (0);
seq__12547_12559 = G__12580;
chunk__12548_12560 = G__12581;
count__12549_12561 = G__12582;
i__12550_12562 = G__12583;
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
{var seq__12551_12584 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__12552_12585 = null;var count__12553_12586 = (0);var i__12554_12587 = (0);while(true){
if((i__12554_12587 < count__12553_12586))
{var i_12588 = cljs.core._nth.call(null,chunk__12552_12585,i__12554_12587);if((cljs.core.mod.call(null,i_12588,cntx) === (0)))
{var posx_12589 = ((offset_x / (2)) + (i_12588 * offset_x));ctx.moveTo(posx_12589,(0));
ctx.lineTo(posx_12589,h);
} else
{}
{
var G__12590 = seq__12551_12584;
var G__12591 = chunk__12552_12585;
var G__12592 = count__12553_12586;
var G__12593 = (i__12554_12587 + (1));
seq__12551_12584 = G__12590;
chunk__12552_12585 = G__12591;
count__12553_12586 = G__12592;
i__12554_12587 = G__12593;
continue;
}
} else
{var temp__4126__auto___12594 = cljs.core.seq.call(null,seq__12551_12584);if(temp__4126__auto___12594)
{var seq__12551_12595__$1 = temp__4126__auto___12594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12551_12595__$1))
{var c__4307__auto___12596 = cljs.core.chunk_first.call(null,seq__12551_12595__$1);{
var G__12597 = cljs.core.chunk_rest.call(null,seq__12551_12595__$1);
var G__12598 = c__4307__auto___12596;
var G__12599 = cljs.core.count.call(null,c__4307__auto___12596);
var G__12600 = (0);
seq__12551_12584 = G__12597;
chunk__12552_12585 = G__12598;
count__12553_12586 = G__12599;
i__12554_12587 = G__12600;
continue;
}
} else
{var i_12601 = cljs.core.first.call(null,seq__12551_12595__$1);if((cljs.core.mod.call(null,i_12601,cntx) === (0)))
{var posx_12602 = ((offset_x / (2)) + (i_12601 * offset_x));ctx.moveTo(posx_12602,(0));
ctx.lineTo(posx_12602,h);
} else
{}
{
var G__12603 = cljs.core.next.call(null,seq__12551_12595__$1);
var G__12604 = null;
var G__12605 = (0);
var G__12606 = (0);
seq__12551_12584 = G__12603;
chunk__12552_12585 = G__12604;
count__12553_12586 = G__12605;
i__12554_12587 = G__12606;
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
{var seq__12555_12607 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__12556_12608 = null;var count__12557_12609 = (0);var i__12558_12610 = (0);while(true){
if((i__12558_12610 < count__12557_12609))
{var i_12611 = cljs.core._nth.call(null,chunk__12556_12608,i__12558_12610);if((cljs.core.mod.call(null,i_12611,cntx) === (0)))
{var posx_12612 = ((offset_x / (2)) + (i_12611 * offset_x));ctx.moveTo(posx_12612,(0));
ctx.lineTo(posx_12612,h);
} else
{}
{
var G__12613 = seq__12555_12607;
var G__12614 = chunk__12556_12608;
var G__12615 = count__12557_12609;
var G__12616 = (i__12558_12610 + (1));
seq__12555_12607 = G__12613;
chunk__12556_12608 = G__12614;
count__12557_12609 = G__12615;
i__12558_12610 = G__12616;
continue;
}
} else
{var temp__4126__auto___12617 = cljs.core.seq.call(null,seq__12555_12607);if(temp__4126__auto___12617)
{var seq__12555_12618__$1 = temp__4126__auto___12617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12555_12618__$1))
{var c__4307__auto___12619 = cljs.core.chunk_first.call(null,seq__12555_12618__$1);{
var G__12620 = cljs.core.chunk_rest.call(null,seq__12555_12618__$1);
var G__12621 = c__4307__auto___12619;
var G__12622 = cljs.core.count.call(null,c__4307__auto___12619);
var G__12623 = (0);
seq__12555_12607 = G__12620;
chunk__12556_12608 = G__12621;
count__12557_12609 = G__12622;
i__12558_12610 = G__12623;
continue;
}
} else
{var i_12624 = cljs.core.first.call(null,seq__12555_12618__$1);if((cljs.core.mod.call(null,i_12624,cntx) === (0)))
{var posx_12625 = ((offset_x / (2)) + (i_12624 * offset_x));ctx.moveTo(posx_12625,(0));
ctx.lineTo(posx_12625,h);
} else
{}
{
var G__12626 = cljs.core.next.call(null,seq__12555_12618__$1);
var G__12627 = null;
var G__12628 = (0);
var G__12629 = (0);
seq__12555_12607 = G__12626;
chunk__12556_12608 = G__12627;
count__12557_12609 = G__12628;
i__12558_12610 = G__12629;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12630){var map__12631 = p__12630;var map__12631__$1 = ((cljs.core.seq_QMARK_.call(null,map__12631))?cljs.core.apply.call(null,cljs.core.hash_map,map__12631):map__12631);var line = cljs.core.get.call(null,map__12631__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12632){var map__12633 = p__12632;var map__12633__$1 = ((cljs.core.seq_QMARK_.call(null,map__12633))?cljs.core.apply.call(null,cljs.core.hash_map,map__12633):map__12633);var line = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12634){var map__12635 = p__12634;var map__12635__$1 = ((cljs.core.seq_QMARK_.call(null,map__12635))?cljs.core.apply.call(null,cljs.core.hash_map,map__12635):map__12635);var line = cljs.core.get.call(null,map__12635__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12636,base,ctx){var map__12637 = p__12636;var map__12637__$1 = ((cljs.core.seq_QMARK_.call(null,map__12637))?cljs.core.apply.call(null,cljs.core.hash_map,map__12637):map__12637);var line = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__12638 = base;var w = cljs.core.nth.call(null,vec__12638,(0),null);var h = cljs.core.nth.call(null,vec__12638,(1),null);var max_v = cljs.core.nth.call(null,vec__12638,(2),null);var min_v = cljs.core.nth.call(null,vec__12638,(3),null);var offset_v = cljs.core.nth.call(null,vec__12638,(4),null);var offset_x = cljs.core.nth.call(null,vec__12638,(5),null);var pos_y = cljs.core.nth.call(null,vec__12638,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__12639 = cljs.core._EQ_;var expr__12640 = style;if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__12640)))
{(ctx["fillStyle"] = color);
var seq__12642 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__12643 = null;var count__12644 = (0);var i__12645 = (0);while(true){
if((i__12645 < count__12644))
{var vec__12646 = cljs.core._nth.call(null,chunk__12643,i__12645);var idx = cljs.core.nth.call(null,vec__12646,(0),null);var value = cljs.core.nth.call(null,vec__12646,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__12654 = seq__12642;
var G__12655 = chunk__12643;
var G__12656 = count__12644;
var G__12657 = (i__12645 + (1));
seq__12642 = G__12654;
chunk__12643 = G__12655;
count__12644 = G__12656;
i__12645 = G__12657;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12642);if(temp__4126__auto__)
{var seq__12642__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12642__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12642__$1);{
var G__12658 = cljs.core.chunk_rest.call(null,seq__12642__$1);
var G__12659 = c__4307__auto__;
var G__12660 = cljs.core.count.call(null,c__4307__auto__);
var G__12661 = (0);
seq__12642 = G__12658;
chunk__12643 = G__12659;
count__12644 = G__12660;
i__12645 = G__12661;
continue;
}
} else
{var vec__12647 = cljs.core.first.call(null,seq__12642__$1);var idx = cljs.core.nth.call(null,vec__12647,(0),null);var value = cljs.core.nth.call(null,vec__12647,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__12662 = cljs.core.next.call(null,seq__12642__$1);
var G__12663 = null;
var G__12664 = (0);
var G__12665 = (0);
seq__12642 = G__12662;
chunk__12643 = G__12663;
count__12644 = G__12664;
i__12645 = G__12665;
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
var seq__12648_12666 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__12639,expr__12640,vec__12638,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__12637,map__12637__$1,line,color,offset,style){
return (function() { 
var G__12670__delegate = function (args){return args;
};
var G__12670 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12670__delegate.call(this,args);};
G__12670.cljs$lang$maxFixedArity = 0;
G__12670.cljs$lang$applyTo = (function (arglist__12671){
var args = cljs.core.seq(arglist__12671);
return G__12670__delegate(args);
});
G__12670.cljs$core$IFn$_invoke$arity$variadic = G__12670__delegate;
return G__12670;
})()
;})(pred__12639,expr__12640,vec__12638,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__12637,map__12637__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__12649_12667 = null;var count__12650_12668 = (0);var i__12651_12669 = (0);while(true){
if((i__12651_12669 < count__12650_12668))
{var vec__12652_12672 = cljs.core._nth.call(null,chunk__12649_12667,i__12651_12669);var idx_12673 = cljs.core.nth.call(null,vec__12652_12672,(0),null);var prev_12674 = cljs.core.nth.call(null,vec__12652_12672,(1),null);var curr_12675 = cljs.core.nth.call(null,vec__12652_12672,(2),null);ctx.moveTo(((idx_12673 + offset__$1) * offset_x),pos_y.call(null,prev_12674));
ctx.lineTo((((idx_12673 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_12675));
{
var G__12676 = seq__12648_12666;
var G__12677 = chunk__12649_12667;
var G__12678 = count__12650_12668;
var G__12679 = (i__12651_12669 + (1));
seq__12648_12666 = G__12676;
chunk__12649_12667 = G__12677;
count__12650_12668 = G__12678;
i__12651_12669 = G__12679;
continue;
}
} else
{var temp__4126__auto___12680 = cljs.core.seq.call(null,seq__12648_12666);if(temp__4126__auto___12680)
{var seq__12648_12681__$1 = temp__4126__auto___12680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12648_12681__$1))
{var c__4307__auto___12682 = cljs.core.chunk_first.call(null,seq__12648_12681__$1);{
var G__12683 = cljs.core.chunk_rest.call(null,seq__12648_12681__$1);
var G__12684 = c__4307__auto___12682;
var G__12685 = cljs.core.count.call(null,c__4307__auto___12682);
var G__12686 = (0);
seq__12648_12666 = G__12683;
chunk__12649_12667 = G__12684;
count__12650_12668 = G__12685;
i__12651_12669 = G__12686;
continue;
}
} else
{var vec__12653_12687 = cljs.core.first.call(null,seq__12648_12681__$1);var idx_12688 = cljs.core.nth.call(null,vec__12653_12687,(0),null);var prev_12689 = cljs.core.nth.call(null,vec__12653_12687,(1),null);var curr_12690 = cljs.core.nth.call(null,vec__12653_12687,(2),null);ctx.moveTo(((idx_12688 + offset__$1) * offset_x),pos_y.call(null,prev_12689));
ctx.lineTo((((idx_12688 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_12690));
{
var G__12691 = cljs.core.next.call(null,seq__12648_12681__$1);
var G__12692 = null;
var G__12693 = (0);
var G__12694 = (0);
seq__12648_12666 = G__12691;
chunk__12649_12667 = G__12692;
count__12650_12668 = G__12693;
i__12651_12669 = G__12694;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12695){var map__12696 = p__12695;var map__12696__$1 = ((cljs.core.seq_QMARK_.call(null,map__12696))?cljs.core.apply.call(null,cljs.core.hash_map,map__12696):map__12696);var kline = cljs.core.get.call(null,map__12696__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12697){var map__12698 = p__12697;var map__12698__$1 = ((cljs.core.seq_QMARK_.call(null,map__12698))?cljs.core.apply.call(null,cljs.core.hash_map,map__12698):map__12698);var kline = cljs.core.get.call(null,map__12698__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12699){var map__12700 = p__12699;var map__12700__$1 = ((cljs.core.seq_QMARK_.call(null,map__12700))?cljs.core.apply.call(null,cljs.core.hash_map,map__12700):map__12700);var kline = cljs.core.get.call(null,map__12700__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12701,base,ctx){var map__12702 = p__12701;var map__12702__$1 = ((cljs.core.seq_QMARK_.call(null,map__12702))?cljs.core.apply.call(null,cljs.core.hash_map,map__12702):map__12702);var kline = cljs.core.get.call(null,map__12702__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__12702__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__12703 = base;var w = cljs.core.nth.call(null,vec__12703,(0),null);var h = cljs.core.nth.call(null,vec__12703,(1),null);var max_v = cljs.core.nth.call(null,vec__12703,(2),null);var min_v = cljs.core.nth.call(null,vec__12703,(3),null);var offset_v = cljs.core.nth.call(null,vec__12703,(4),null);var offset_x = cljs.core.nth.call(null,vec__12703,(5),null);var pos_y = cljs.core.nth.call(null,vec__12703,(6),null);(ctx["fillStyle"] = "black");
var seq__12704 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12703,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12702,map__12702__$1,kline,info){
return (function() { 
var G__12712__delegate = function (args){return args;
};
var G__12712 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12712__delegate.call(this,args);};
G__12712.cljs$lang$maxFixedArity = 0;
G__12712.cljs$lang$applyTo = (function (arglist__12713){
var args = cljs.core.seq(arglist__12713);
return G__12712__delegate(args);
});
G__12712.cljs$core$IFn$_invoke$arity$variadic = G__12712__delegate;
return G__12712;
})()
;})(vec__12703,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12702,map__12702__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__12705 = null;var count__12706 = (0);var i__12707 = (0);while(true){
if((i__12707 < count__12706))
{var vec__12708 = cljs.core._nth.call(null,chunk__12705,i__12707);var idx = cljs.core.nth.call(null,vec__12708,(0),null);var vec__12709 = cljs.core.nth.call(null,vec__12708,(1),null);var date = cljs.core.nth.call(null,vec__12709,(0),null);var open = cljs.core.nth.call(null,vec__12709,(1),null);var high = cljs.core.nth.call(null,vec__12709,(2),null);var low = cljs.core.nth.call(null,vec__12709,(3),null);var close = cljs.core.nth.call(null,vec__12709,(4),null);var volume = cljs.core.nth.call(null,vec__12709,(5),null);var info__$1 = cljs.core.nth.call(null,vec__12708,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__12714 = seq__12704;
var G__12715 = chunk__12705;
var G__12716 = count__12706;
var G__12717 = (i__12707 + (1));
seq__12704 = G__12714;
chunk__12705 = G__12715;
count__12706 = G__12716;
i__12707 = G__12717;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12704);if(temp__4126__auto__)
{var seq__12704__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12704__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12704__$1);{
var G__12718 = cljs.core.chunk_rest.call(null,seq__12704__$1);
var G__12719 = c__4307__auto__;
var G__12720 = cljs.core.count.call(null,c__4307__auto__);
var G__12721 = (0);
seq__12704 = G__12718;
chunk__12705 = G__12719;
count__12706 = G__12720;
i__12707 = G__12721;
continue;
}
} else
{var vec__12710 = cljs.core.first.call(null,seq__12704__$1);var idx = cljs.core.nth.call(null,vec__12710,(0),null);var vec__12711 = cljs.core.nth.call(null,vec__12710,(1),null);var date = cljs.core.nth.call(null,vec__12711,(0),null);var open = cljs.core.nth.call(null,vec__12711,(1),null);var high = cljs.core.nth.call(null,vec__12711,(2),null);var low = cljs.core.nth.call(null,vec__12711,(3),null);var close = cljs.core.nth.call(null,vec__12711,(4),null);var volume = cljs.core.nth.call(null,vec__12711,(5),null);var info__$1 = cljs.core.nth.call(null,vec__12710,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__12722 = cljs.core.next.call(null,seq__12704__$1);
var G__12723 = null;
var G__12724 = (0);
var G__12725 = (0);
seq__12704 = G__12722;
chunk__12705 = G__12723;
count__12706 = G__12724;
i__12707 = G__12725;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__12726){var map__12727 = p__12726;var map__12727__$1 = ((cljs.core.seq_QMARK_.call(null,map__12727))?cljs.core.apply.call(null,cljs.core.hash_map,map__12727):map__12727);var cz = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__12728){var map__12729 = p__12728;var map__12729__$1 = ((cljs.core.seq_QMARK_.call(null,map__12729))?cljs.core.apply.call(null,cljs.core.hash_map,map__12729):map__12729);var cz = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__12730,base,ctx){var map__12731 = p__12730;var map__12731__$1 = ((cljs.core.seq_QMARK_.call(null,map__12731))?cljs.core.apply.call(null,cljs.core.hash_map,map__12731):map__12731);var cz = cljs.core.get.call(null,map__12731__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__12731__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__12731__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__12732 = base;var w = cljs.core.nth.call(null,vec__12732,(0),null);var h = cljs.core.nth.call(null,vec__12732,(1),null);var max_v = cljs.core.nth.call(null,vec__12732,(2),null);var min_v = cljs.core.nth.call(null,vec__12732,(3),null);var offset_v = cljs.core.nth.call(null,vec__12732,(4),null);var offset_x = cljs.core.nth.call(null,vec__12732,(5),null);var pos_y = cljs.core.nth.call(null,vec__12732,(6),null);var proj_x = ((function (vec__12732,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12731,map__12731__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__12732,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12731,map__12731__$1,cz,vz,color))
;var proj_y = ((function (vec__12732,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__12731,map__12731__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__12732,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__12731,map__12731__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__12733 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12732,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__12731,map__12731__$1,cz,vz,color){
return (function() { 
var G__12739__delegate = function (args){return args;
};
var G__12739 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12739__delegate.call(this,args);};
G__12739.cljs$lang$maxFixedArity = 0;
G__12739.cljs$lang$applyTo = (function (arglist__12740){
var args = cljs.core.seq(arglist__12740);
return G__12739__delegate(args);
});
G__12739.cljs$core$IFn$_invoke$arity$variadic = G__12739__delegate;
return G__12739;
})()
;})(vec__12732,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__12731,map__12731__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__12734 = null;var count__12735 = (0);var i__12736 = (0);while(true){
if((i__12736 < count__12735))
{var vec__12737 = cljs.core._nth.call(null,chunk__12734,i__12736);var idx = cljs.core.nth.call(null,vec__12737,(0),null);var pc = cljs.core.nth.call(null,vec__12737,(1),null);var cc = cljs.core.nth.call(null,vec__12737,(2),null);var pv = cljs.core.nth.call(null,vec__12737,(3),null);var cv = cljs.core.nth.call(null,vec__12737,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__12741 = seq__12733;
var G__12742 = chunk__12734;
var G__12743 = count__12735;
var G__12744 = (i__12736 + (1));
seq__12733 = G__12741;
chunk__12734 = G__12742;
count__12735 = G__12743;
i__12736 = G__12744;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12733);if(temp__4126__auto__)
{var seq__12733__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12733__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12733__$1);{
var G__12745 = cljs.core.chunk_rest.call(null,seq__12733__$1);
var G__12746 = c__4307__auto__;
var G__12747 = cljs.core.count.call(null,c__4307__auto__);
var G__12748 = (0);
seq__12733 = G__12745;
chunk__12734 = G__12746;
count__12735 = G__12747;
i__12736 = G__12748;
continue;
}
} else
{var vec__12738 = cljs.core.first.call(null,seq__12733__$1);var idx = cljs.core.nth.call(null,vec__12738,(0),null);var pc = cljs.core.nth.call(null,vec__12738,(1),null);var cc = cljs.core.nth.call(null,vec__12738,(2),null);var pv = cljs.core.nth.call(null,vec__12738,(3),null);var cv = cljs.core.nth.call(null,vec__12738,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__12749 = cljs.core.next.call(null,seq__12733__$1);
var G__12750 = null;
var G__12751 = (0);
var G__12752 = (0);
seq__12733 = G__12749;
chunk__12734 = G__12750;
count__12735 = G__12751;
i__12736 = G__12752;
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
