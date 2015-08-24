// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31501){var map__31502 = p__31501;var map__31502__$1 = ((cljs.core.seq_QMARK_.call(null,map__31502))?cljs.core.apply.call(null,cljs.core.hash_map,map__31502):map__31502);var t = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31503){var map__31504 = p__31503;var map__31504__$1 = ((cljs.core.seq_QMARK_.call(null,map__31504))?cljs.core.apply.call(null,cljs.core.hash_map,map__31504):map__31504);var t = cljs.core.get.call(null,map__31504__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31505){var map__31506 = p__31505;var map__31506__$1 = ((cljs.core.seq_QMARK_.call(null,map__31506))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506):map__31506);var t = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31507,base,ctx){var map__31508 = p__31507;var map__31508__$1 = ((cljs.core.seq_QMARK_.call(null,map__31508))?cljs.core.apply.call(null,cljs.core.hash_map,map__31508):map__31508);var t = cljs.core.get.call(null,map__31508__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__31509,w,h,ctx){var map__31515 = p__31509;var map__31515__$1 = ((cljs.core.seq_QMARK_.call(null,map__31515))?cljs.core.apply.call(null,cljs.core.hash_map,map__31515):map__31515);var info = map__31515__$1;var drawers = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__31516 = cljs.core.seq.call(null,drawers);var chunk__31517 = null;var count__31518 = (0);var i__31519 = (0);while(true){
if((i__31519 < count__31518))
{var drawer = cljs.core._nth.call(null,chunk__31517,i__31519);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__31520 = seq__31516;
var G__31521 = chunk__31517;
var G__31522 = count__31518;
var G__31523 = (i__31519 + (1));
seq__31516 = G__31520;
chunk__31517 = G__31521;
count__31518 = G__31522;
i__31519 = G__31523;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31516);if(temp__4126__auto__)
{var seq__31516__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31516__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31516__$1);{
var G__31524 = cljs.core.chunk_rest.call(null,seq__31516__$1);
var G__31525 = c__4307__auto__;
var G__31526 = cljs.core.count.call(null,c__4307__auto__);
var G__31527 = (0);
seq__31516 = G__31524;
chunk__31517 = G__31525;
count__31518 = G__31526;
i__31519 = G__31527;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__31516__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__31528 = cljs.core.next.call(null,seq__31516__$1);
var G__31529 = null;
var G__31530 = (0);
var G__31531 = (0);
seq__31516 = G__31528;
chunk__31517 = G__31529;
count__31518 = G__31530;
i__31519 = G__31531;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31532){var map__31533 = p__31532;var map__31533__$1 = ((cljs.core.seq_QMARK_.call(null,map__31533))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);var line = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31534){var map__31535 = p__31534;var map__31535__$1 = ((cljs.core.seq_QMARK_.call(null,map__31535))?cljs.core.apply.call(null,cljs.core.hash_map,map__31535):map__31535);var line = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31536){var map__31537 = p__31536;var map__31537__$1 = ((cljs.core.seq_QMARK_.call(null,map__31537))?cljs.core.apply.call(null,cljs.core.hash_map,map__31537):map__31537);var line = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31538,base,ctx){var map__31539 = p__31538;var map__31539__$1 = ((cljs.core.seq_QMARK_.call(null,map__31539))?cljs.core.apply.call(null,cljs.core.hash_map,map__31539):map__31539);var line = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__31540 = base;var w = cljs.core.nth.call(null,vec__31540,(0),null);var h = cljs.core.nth.call(null,vec__31540,(1),null);var max_v = cljs.core.nth.call(null,vec__31540,(2),null);var min_v = cljs.core.nth.call(null,vec__31540,(3),null);var offset_v = cljs.core.nth.call(null,vec__31540,(4),null);var offset_x = cljs.core.nth.call(null,vec__31540,(5),null);var pos_y = cljs.core.nth.call(null,vec__31540,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__31541_31553 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__31542_31554 = null;var count__31543_31555 = (0);var i__31544_31556 = (0);while(true){
if((i__31544_31556 < count__31543_31555))
{var i_31557 = cljs.core._nth.call(null,chunk__31542_31554,i__31544_31556);var v_31558 = (min_v + (i_31557 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31558.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_31558));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31558.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_31558));
ctx.moveTo((0),pos_y.call(null,v_31558));
ctx.lineTo(w,pos_y.call(null,v_31558));
{
var G__31559 = seq__31541_31553;
var G__31560 = chunk__31542_31554;
var G__31561 = count__31543_31555;
var G__31562 = (i__31544_31556 + (1));
seq__31541_31553 = G__31559;
chunk__31542_31554 = G__31560;
count__31543_31555 = G__31561;
i__31544_31556 = G__31562;
continue;
}
} else
{var temp__4126__auto___31563 = cljs.core.seq.call(null,seq__31541_31553);if(temp__4126__auto___31563)
{var seq__31541_31564__$1 = temp__4126__auto___31563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31541_31564__$1))
{var c__4307__auto___31565 = cljs.core.chunk_first.call(null,seq__31541_31564__$1);{
var G__31566 = cljs.core.chunk_rest.call(null,seq__31541_31564__$1);
var G__31567 = c__4307__auto___31565;
var G__31568 = cljs.core.count.call(null,c__4307__auto___31565);
var G__31569 = (0);
seq__31541_31553 = G__31566;
chunk__31542_31554 = G__31567;
count__31543_31555 = G__31568;
i__31544_31556 = G__31569;
continue;
}
} else
{var i_31570 = cljs.core.first.call(null,seq__31541_31564__$1);var v_31571 = (min_v + (i_31570 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31571.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_31571));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31571.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_31571));
ctx.moveTo((0),pos_y.call(null,v_31571));
ctx.lineTo(w,pos_y.call(null,v_31571));
{
var G__31572 = cljs.core.next.call(null,seq__31541_31564__$1);
var G__31573 = null;
var G__31574 = (0);
var G__31575 = (0);
seq__31541_31553 = G__31572;
chunk__31542_31554 = G__31573;
count__31543_31555 = G__31574;
i__31544_31556 = G__31575;
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
{var seq__31545_31576 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__31546_31577 = null;var count__31547_31578 = (0);var i__31548_31579 = (0);while(true){
if((i__31548_31579 < count__31547_31578))
{var i_31580 = cljs.core._nth.call(null,chunk__31546_31577,i__31548_31579);if((cljs.core.mod.call(null,i_31580,cntx) === (0)))
{var posx_31581 = ((offset_x / (2)) + (i_31580 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_31580)),posx_31581,h);
ctx.moveTo(posx_31581,(0));
ctx.lineTo(posx_31581,h);
} else
{}
{
var G__31582 = seq__31545_31576;
var G__31583 = chunk__31546_31577;
var G__31584 = count__31547_31578;
var G__31585 = (i__31548_31579 + (1));
seq__31545_31576 = G__31582;
chunk__31546_31577 = G__31583;
count__31547_31578 = G__31584;
i__31548_31579 = G__31585;
continue;
}
} else
{var temp__4126__auto___31586 = cljs.core.seq.call(null,seq__31545_31576);if(temp__4126__auto___31586)
{var seq__31545_31587__$1 = temp__4126__auto___31586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31545_31587__$1))
{var c__4307__auto___31588 = cljs.core.chunk_first.call(null,seq__31545_31587__$1);{
var G__31589 = cljs.core.chunk_rest.call(null,seq__31545_31587__$1);
var G__31590 = c__4307__auto___31588;
var G__31591 = cljs.core.count.call(null,c__4307__auto___31588);
var G__31592 = (0);
seq__31545_31576 = G__31589;
chunk__31546_31577 = G__31590;
count__31547_31578 = G__31591;
i__31548_31579 = G__31592;
continue;
}
} else
{var i_31593 = cljs.core.first.call(null,seq__31545_31587__$1);if((cljs.core.mod.call(null,i_31593,cntx) === (0)))
{var posx_31594 = ((offset_x / (2)) + (i_31593 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_31593)),posx_31594,h);
ctx.moveTo(posx_31594,(0));
ctx.lineTo(posx_31594,h);
} else
{}
{
var G__31595 = cljs.core.next.call(null,seq__31545_31587__$1);
var G__31596 = null;
var G__31597 = (0);
var G__31598 = (0);
seq__31545_31576 = G__31595;
chunk__31546_31577 = G__31596;
count__31547_31578 = G__31597;
i__31548_31579 = G__31598;
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
{var seq__31549_31599 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__31550_31600 = null;var count__31551_31601 = (0);var i__31552_31602 = (0);while(true){
if((i__31552_31602 < count__31551_31601))
{var i_31603 = cljs.core._nth.call(null,chunk__31550_31600,i__31552_31602);if((cljs.core.mod.call(null,i_31603,cntx) === (0)))
{var posx_31604 = ((offset_x / (2)) + (i_31603 * offset_x));ctx.moveTo(posx_31604,(0));
ctx.lineTo(posx_31604,h);
} else
{}
{
var G__31605 = seq__31549_31599;
var G__31606 = chunk__31550_31600;
var G__31607 = count__31551_31601;
var G__31608 = (i__31552_31602 + (1));
seq__31549_31599 = G__31605;
chunk__31550_31600 = G__31606;
count__31551_31601 = G__31607;
i__31552_31602 = G__31608;
continue;
}
} else
{var temp__4126__auto___31609 = cljs.core.seq.call(null,seq__31549_31599);if(temp__4126__auto___31609)
{var seq__31549_31610__$1 = temp__4126__auto___31609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31549_31610__$1))
{var c__4307__auto___31611 = cljs.core.chunk_first.call(null,seq__31549_31610__$1);{
var G__31612 = cljs.core.chunk_rest.call(null,seq__31549_31610__$1);
var G__31613 = c__4307__auto___31611;
var G__31614 = cljs.core.count.call(null,c__4307__auto___31611);
var G__31615 = (0);
seq__31549_31599 = G__31612;
chunk__31550_31600 = G__31613;
count__31551_31601 = G__31614;
i__31552_31602 = G__31615;
continue;
}
} else
{var i_31616 = cljs.core.first.call(null,seq__31549_31610__$1);if((cljs.core.mod.call(null,i_31616,cntx) === (0)))
{var posx_31617 = ((offset_x / (2)) + (i_31616 * offset_x));ctx.moveTo(posx_31617,(0));
ctx.lineTo(posx_31617,h);
} else
{}
{
var G__31618 = cljs.core.next.call(null,seq__31549_31610__$1);
var G__31619 = null;
var G__31620 = (0);
var G__31621 = (0);
seq__31549_31599 = G__31618;
chunk__31550_31600 = G__31619;
count__31551_31601 = G__31620;
i__31552_31602 = G__31621;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31622){var map__31623 = p__31622;var map__31623__$1 = ((cljs.core.seq_QMARK_.call(null,map__31623))?cljs.core.apply.call(null,cljs.core.hash_map,map__31623):map__31623);var line = cljs.core.get.call(null,map__31623__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31624){var map__31625 = p__31624;var map__31625__$1 = ((cljs.core.seq_QMARK_.call(null,map__31625))?cljs.core.apply.call(null,cljs.core.hash_map,map__31625):map__31625);var line = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31626){var map__31627 = p__31626;var map__31627__$1 = ((cljs.core.seq_QMARK_.call(null,map__31627))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);var line = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31628,base,ctx){var map__31629 = p__31628;var map__31629__$1 = ((cljs.core.seq_QMARK_.call(null,map__31629))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);var line = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__31630 = base;var w = cljs.core.nth.call(null,vec__31630,(0),null);var h = cljs.core.nth.call(null,vec__31630,(1),null);var max_v = cljs.core.nth.call(null,vec__31630,(2),null);var min_v = cljs.core.nth.call(null,vec__31630,(3),null);var offset_v = cljs.core.nth.call(null,vec__31630,(4),null);var offset_x = cljs.core.nth.call(null,vec__31630,(5),null);var pos_y = cljs.core.nth.call(null,vec__31630,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__31631 = cljs.core._EQ_;var expr__31632 = style;if(cljs.core.truth_(pred__31631.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__31632)))
{(ctx["fillStyle"] = color);
var seq__31634 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__31635 = null;var count__31636 = (0);var i__31637 = (0);while(true){
if((i__31637 < count__31636))
{var vec__31638 = cljs.core._nth.call(null,chunk__31635,i__31637);var idx = cljs.core.nth.call(null,vec__31638,(0),null);var value = cljs.core.nth.call(null,vec__31638,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__31646 = seq__31634;
var G__31647 = chunk__31635;
var G__31648 = count__31636;
var G__31649 = (i__31637 + (1));
seq__31634 = G__31646;
chunk__31635 = G__31647;
count__31636 = G__31648;
i__31637 = G__31649;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31634);if(temp__4126__auto__)
{var seq__31634__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31634__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31634__$1);{
var G__31650 = cljs.core.chunk_rest.call(null,seq__31634__$1);
var G__31651 = c__4307__auto__;
var G__31652 = cljs.core.count.call(null,c__4307__auto__);
var G__31653 = (0);
seq__31634 = G__31650;
chunk__31635 = G__31651;
count__31636 = G__31652;
i__31637 = G__31653;
continue;
}
} else
{var vec__31639 = cljs.core.first.call(null,seq__31634__$1);var idx = cljs.core.nth.call(null,vec__31639,(0),null);var value = cljs.core.nth.call(null,vec__31639,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__31654 = cljs.core.next.call(null,seq__31634__$1);
var G__31655 = null;
var G__31656 = (0);
var G__31657 = (0);
seq__31634 = G__31654;
chunk__31635 = G__31655;
count__31636 = G__31656;
i__31637 = G__31657;
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
var seq__31640_31658 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__31631,expr__31632,vec__31630,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__31629,map__31629__$1,line,color,offset,style){
return (function() { 
var G__31662__delegate = function (args){return args;
};
var G__31662 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31662__delegate.call(this,args);};
G__31662.cljs$lang$maxFixedArity = 0;
G__31662.cljs$lang$applyTo = (function (arglist__31663){
var args = cljs.core.seq(arglist__31663);
return G__31662__delegate(args);
});
G__31662.cljs$core$IFn$_invoke$arity$variadic = G__31662__delegate;
return G__31662;
})()
;})(pred__31631,expr__31632,vec__31630,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__31629,map__31629__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__31641_31659 = null;var count__31642_31660 = (0);var i__31643_31661 = (0);while(true){
if((i__31643_31661 < count__31642_31660))
{var vec__31644_31664 = cljs.core._nth.call(null,chunk__31641_31659,i__31643_31661);var idx_31665 = cljs.core.nth.call(null,vec__31644_31664,(0),null);var prev_31666 = cljs.core.nth.call(null,vec__31644_31664,(1),null);var curr_31667 = cljs.core.nth.call(null,vec__31644_31664,(2),null);ctx.moveTo(((idx_31665 + offset__$1) * offset_x),pos_y.call(null,prev_31666));
ctx.lineTo((((idx_31665 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_31667));
{
var G__31668 = seq__31640_31658;
var G__31669 = chunk__31641_31659;
var G__31670 = count__31642_31660;
var G__31671 = (i__31643_31661 + (1));
seq__31640_31658 = G__31668;
chunk__31641_31659 = G__31669;
count__31642_31660 = G__31670;
i__31643_31661 = G__31671;
continue;
}
} else
{var temp__4126__auto___31672 = cljs.core.seq.call(null,seq__31640_31658);if(temp__4126__auto___31672)
{var seq__31640_31673__$1 = temp__4126__auto___31672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31640_31673__$1))
{var c__4307__auto___31674 = cljs.core.chunk_first.call(null,seq__31640_31673__$1);{
var G__31675 = cljs.core.chunk_rest.call(null,seq__31640_31673__$1);
var G__31676 = c__4307__auto___31674;
var G__31677 = cljs.core.count.call(null,c__4307__auto___31674);
var G__31678 = (0);
seq__31640_31658 = G__31675;
chunk__31641_31659 = G__31676;
count__31642_31660 = G__31677;
i__31643_31661 = G__31678;
continue;
}
} else
{var vec__31645_31679 = cljs.core.first.call(null,seq__31640_31673__$1);var idx_31680 = cljs.core.nth.call(null,vec__31645_31679,(0),null);var prev_31681 = cljs.core.nth.call(null,vec__31645_31679,(1),null);var curr_31682 = cljs.core.nth.call(null,vec__31645_31679,(2),null);ctx.moveTo(((idx_31680 + offset__$1) * offset_x),pos_y.call(null,prev_31681));
ctx.lineTo((((idx_31680 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_31682));
{
var G__31683 = cljs.core.next.call(null,seq__31640_31673__$1);
var G__31684 = null;
var G__31685 = (0);
var G__31686 = (0);
seq__31640_31658 = G__31683;
chunk__31641_31659 = G__31684;
count__31642_31660 = G__31685;
i__31643_31661 = G__31686;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31687){var map__31688 = p__31687;var map__31688__$1 = ((cljs.core.seq_QMARK_.call(null,map__31688))?cljs.core.apply.call(null,cljs.core.hash_map,map__31688):map__31688);var kline = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31689){var map__31690 = p__31689;var map__31690__$1 = ((cljs.core.seq_QMARK_.call(null,map__31690))?cljs.core.apply.call(null,cljs.core.hash_map,map__31690):map__31690);var kline = cljs.core.get.call(null,map__31690__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31691){var map__31692 = p__31691;var map__31692__$1 = ((cljs.core.seq_QMARK_.call(null,map__31692))?cljs.core.apply.call(null,cljs.core.hash_map,map__31692):map__31692);var kline = cljs.core.get.call(null,map__31692__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31693,base,ctx){var map__31694 = p__31693;var map__31694__$1 = ((cljs.core.seq_QMARK_.call(null,map__31694))?cljs.core.apply.call(null,cljs.core.hash_map,map__31694):map__31694);var kline = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__31695 = base;var w = cljs.core.nth.call(null,vec__31695,(0),null);var h = cljs.core.nth.call(null,vec__31695,(1),null);var max_v = cljs.core.nth.call(null,vec__31695,(2),null);var min_v = cljs.core.nth.call(null,vec__31695,(3),null);var offset_v = cljs.core.nth.call(null,vec__31695,(4),null);var offset_x = cljs.core.nth.call(null,vec__31695,(5),null);var pos_y = cljs.core.nth.call(null,vec__31695,(6),null);(ctx["fillStyle"] = "black");
var seq__31696 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__31695,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31694,map__31694__$1,kline,info){
return (function() { 
var G__31704__delegate = function (args){return args;
};
var G__31704 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31704__delegate.call(this,args);};
G__31704.cljs$lang$maxFixedArity = 0;
G__31704.cljs$lang$applyTo = (function (arglist__31705){
var args = cljs.core.seq(arglist__31705);
return G__31704__delegate(args);
});
G__31704.cljs$core$IFn$_invoke$arity$variadic = G__31704__delegate;
return G__31704;
})()
;})(vec__31695,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31694,map__31694__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__31697 = null;var count__31698 = (0);var i__31699 = (0);while(true){
if((i__31699 < count__31698))
{var vec__31700 = cljs.core._nth.call(null,chunk__31697,i__31699);var idx = cljs.core.nth.call(null,vec__31700,(0),null);var vec__31701 = cljs.core.nth.call(null,vec__31700,(1),null);var date = cljs.core.nth.call(null,vec__31701,(0),null);var open = cljs.core.nth.call(null,vec__31701,(1),null);var high = cljs.core.nth.call(null,vec__31701,(2),null);var low = cljs.core.nth.call(null,vec__31701,(3),null);var close = cljs.core.nth.call(null,vec__31701,(4),null);var volume = cljs.core.nth.call(null,vec__31701,(5),null);var info__$1 = cljs.core.nth.call(null,vec__31700,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__31706 = seq__31696;
var G__31707 = chunk__31697;
var G__31708 = count__31698;
var G__31709 = (i__31699 + (1));
seq__31696 = G__31706;
chunk__31697 = G__31707;
count__31698 = G__31708;
i__31699 = G__31709;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31696);if(temp__4126__auto__)
{var seq__31696__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31696__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31696__$1);{
var G__31710 = cljs.core.chunk_rest.call(null,seq__31696__$1);
var G__31711 = c__4307__auto__;
var G__31712 = cljs.core.count.call(null,c__4307__auto__);
var G__31713 = (0);
seq__31696 = G__31710;
chunk__31697 = G__31711;
count__31698 = G__31712;
i__31699 = G__31713;
continue;
}
} else
{var vec__31702 = cljs.core.first.call(null,seq__31696__$1);var idx = cljs.core.nth.call(null,vec__31702,(0),null);var vec__31703 = cljs.core.nth.call(null,vec__31702,(1),null);var date = cljs.core.nth.call(null,vec__31703,(0),null);var open = cljs.core.nth.call(null,vec__31703,(1),null);var high = cljs.core.nth.call(null,vec__31703,(2),null);var low = cljs.core.nth.call(null,vec__31703,(3),null);var close = cljs.core.nth.call(null,vec__31703,(4),null);var volume = cljs.core.nth.call(null,vec__31703,(5),null);var info__$1 = cljs.core.nth.call(null,vec__31702,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__31714 = cljs.core.next.call(null,seq__31696__$1);
var G__31715 = null;
var G__31716 = (0);
var G__31717 = (0);
seq__31696 = G__31714;
chunk__31697 = G__31715;
count__31698 = G__31716;
i__31699 = G__31717;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__31718){var map__31719 = p__31718;var map__31719__$1 = ((cljs.core.seq_QMARK_.call(null,map__31719))?cljs.core.apply.call(null,cljs.core.hash_map,map__31719):map__31719);var cz = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__31720){var map__31721 = p__31720;var map__31721__$1 = ((cljs.core.seq_QMARK_.call(null,map__31721))?cljs.core.apply.call(null,cljs.core.hash_map,map__31721):map__31721);var cz = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__31722,base,ctx){var map__31723 = p__31722;var map__31723__$1 = ((cljs.core.seq_QMARK_.call(null,map__31723))?cljs.core.apply.call(null,cljs.core.hash_map,map__31723):map__31723);var cz = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__31723__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__31724 = base;var w = cljs.core.nth.call(null,vec__31724,(0),null);var h = cljs.core.nth.call(null,vec__31724,(1),null);var max_v = cljs.core.nth.call(null,vec__31724,(2),null);var min_v = cljs.core.nth.call(null,vec__31724,(3),null);var offset_v = cljs.core.nth.call(null,vec__31724,(4),null);var offset_x = cljs.core.nth.call(null,vec__31724,(5),null);var pos_y = cljs.core.nth.call(null,vec__31724,(6),null);var proj_x = ((function (vec__31724,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31723,map__31723__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__31724,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31723,map__31723__$1,cz,vz,color))
;var proj_y = ((function (vec__31724,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__31723,map__31723__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__31724,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__31723,map__31723__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__31725 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__31724,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__31723,map__31723__$1,cz,vz,color){
return (function() { 
var G__31731__delegate = function (args){return args;
};
var G__31731 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31731__delegate.call(this,args);};
G__31731.cljs$lang$maxFixedArity = 0;
G__31731.cljs$lang$applyTo = (function (arglist__31732){
var args = cljs.core.seq(arglist__31732);
return G__31731__delegate(args);
});
G__31731.cljs$core$IFn$_invoke$arity$variadic = G__31731__delegate;
return G__31731;
})()
;})(vec__31724,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__31723,map__31723__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__31726 = null;var count__31727 = (0);var i__31728 = (0);while(true){
if((i__31728 < count__31727))
{var vec__31729 = cljs.core._nth.call(null,chunk__31726,i__31728);var idx = cljs.core.nth.call(null,vec__31729,(0),null);var pc = cljs.core.nth.call(null,vec__31729,(1),null);var cc = cljs.core.nth.call(null,vec__31729,(2),null);var pv = cljs.core.nth.call(null,vec__31729,(3),null);var cv = cljs.core.nth.call(null,vec__31729,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__31733 = seq__31725;
var G__31734 = chunk__31726;
var G__31735 = count__31727;
var G__31736 = (i__31728 + (1));
seq__31725 = G__31733;
chunk__31726 = G__31734;
count__31727 = G__31735;
i__31728 = G__31736;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31725);if(temp__4126__auto__)
{var seq__31725__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31725__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31725__$1);{
var G__31737 = cljs.core.chunk_rest.call(null,seq__31725__$1);
var G__31738 = c__4307__auto__;
var G__31739 = cljs.core.count.call(null,c__4307__auto__);
var G__31740 = (0);
seq__31725 = G__31737;
chunk__31726 = G__31738;
count__31727 = G__31739;
i__31728 = G__31740;
continue;
}
} else
{var vec__31730 = cljs.core.first.call(null,seq__31725__$1);var idx = cljs.core.nth.call(null,vec__31730,(0),null);var pc = cljs.core.nth.call(null,vec__31730,(1),null);var cc = cljs.core.nth.call(null,vec__31730,(2),null);var pv = cljs.core.nth.call(null,vec__31730,(3),null);var cv = cljs.core.nth.call(null,vec__31730,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__31741 = cljs.core.next.call(null,seq__31725__$1);
var G__31742 = null;
var G__31743 = (0);
var G__31744 = (0);
seq__31725 = G__31741;
chunk__31726 = G__31742;
count__31727 = G__31743;
i__31728 = G__31744;
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
