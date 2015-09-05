// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27478){var map__27479 = p__27478;var map__27479__$1 = ((cljs.core.seq_QMARK_.call(null,map__27479))?cljs.core.apply.call(null,cljs.core.hash_map,map__27479):map__27479);var t = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27480){var map__27481 = p__27480;var map__27481__$1 = ((cljs.core.seq_QMARK_.call(null,map__27481))?cljs.core.apply.call(null,cljs.core.hash_map,map__27481):map__27481);var t = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27482){var map__27483 = p__27482;var map__27483__$1 = ((cljs.core.seq_QMARK_.call(null,map__27483))?cljs.core.apply.call(null,cljs.core.hash_map,map__27483):map__27483);var t = cljs.core.get.call(null,map__27483__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27484,base,ctx){var map__27485 = p__27484;var map__27485__$1 = ((cljs.core.seq_QMARK_.call(null,map__27485))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);var t = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__27486,w,h,ctx){var map__27492 = p__27486;var map__27492__$1 = ((cljs.core.seq_QMARK_.call(null,map__27492))?cljs.core.apply.call(null,cljs.core.hash_map,map__27492):map__27492);var info = map__27492__$1;var drawers = cljs.core.get.call(null,map__27492__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__27493 = cljs.core.seq.call(null,drawers);var chunk__27494 = null;var count__27495 = (0);var i__27496 = (0);while(true){
if((i__27496 < count__27495))
{var drawer = cljs.core._nth.call(null,chunk__27494,i__27496);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__27497 = seq__27493;
var G__27498 = chunk__27494;
var G__27499 = count__27495;
var G__27500 = (i__27496 + (1));
seq__27493 = G__27497;
chunk__27494 = G__27498;
count__27495 = G__27499;
i__27496 = G__27500;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27493);if(temp__4126__auto__)
{var seq__27493__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27493__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27493__$1);{
var G__27501 = cljs.core.chunk_rest.call(null,seq__27493__$1);
var G__27502 = c__4307__auto__;
var G__27503 = cljs.core.count.call(null,c__4307__auto__);
var G__27504 = (0);
seq__27493 = G__27501;
chunk__27494 = G__27502;
count__27495 = G__27503;
i__27496 = G__27504;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__27493__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__27505 = cljs.core.next.call(null,seq__27493__$1);
var G__27506 = null;
var G__27507 = (0);
var G__27508 = (0);
seq__27493 = G__27505;
chunk__27494 = G__27506;
count__27495 = G__27507;
i__27496 = G__27508;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27509){var map__27510 = p__27509;var map__27510__$1 = ((cljs.core.seq_QMARK_.call(null,map__27510))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510):map__27510);var line = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27511){var map__27512 = p__27511;var map__27512__$1 = ((cljs.core.seq_QMARK_.call(null,map__27512))?cljs.core.apply.call(null,cljs.core.hash_map,map__27512):map__27512);var line = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27513){var map__27514 = p__27513;var map__27514__$1 = ((cljs.core.seq_QMARK_.call(null,map__27514))?cljs.core.apply.call(null,cljs.core.hash_map,map__27514):map__27514);var line = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27515,base,ctx){var map__27516 = p__27515;var map__27516__$1 = ((cljs.core.seq_QMARK_.call(null,map__27516))?cljs.core.apply.call(null,cljs.core.hash_map,map__27516):map__27516);var line = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var centerY = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));var vec__27517 = base;var w = cljs.core.nth.call(null,vec__27517,(0),null);var h = cljs.core.nth.call(null,vec__27517,(1),null);var max_v = cljs.core.nth.call(null,vec__27517,(2),null);var min_v = cljs.core.nth.call(null,vec__27517,(3),null);var offset_v = cljs.core.nth.call(null,vec__27517,(4),null);var offset_x = cljs.core.nth.call(null,vec__27517,(5),null);var pos_y = cljs.core.nth.call(null,vec__27517,(6),null);var cnt = (10);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__27518_27530 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__27519_27531 = null;var count__27520_27532 = (0);var i__27521_27533 = (0);while(true){
if((i__27521_27533 < count__27520_27532))
{var i_27534 = cljs.core._nth.call(null,chunk__27519_27531,i__27521_27533);var v_27535 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_27534 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27535.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27535));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27535.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27535));
ctx.moveTo((0),pos_y.call(null,v_27535));
ctx.lineTo(w,pos_y.call(null,v_27535));
var v_27536 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_27534 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27536.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27536));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27536.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27536));
ctx.moveTo((0),pos_y.call(null,v_27536));
ctx.lineTo(w,pos_y.call(null,v_27536));
{
var G__27537 = seq__27518_27530;
var G__27538 = chunk__27519_27531;
var G__27539 = count__27520_27532;
var G__27540 = (i__27521_27533 + (1));
seq__27518_27530 = G__27537;
chunk__27519_27531 = G__27538;
count__27520_27532 = G__27539;
i__27521_27533 = G__27540;
continue;
}
} else
{var temp__4126__auto___27541 = cljs.core.seq.call(null,seq__27518_27530);if(temp__4126__auto___27541)
{var seq__27518_27542__$1 = temp__4126__auto___27541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27518_27542__$1))
{var c__4307__auto___27543 = cljs.core.chunk_first.call(null,seq__27518_27542__$1);{
var G__27544 = cljs.core.chunk_rest.call(null,seq__27518_27542__$1);
var G__27545 = c__4307__auto___27543;
var G__27546 = cljs.core.count.call(null,c__4307__auto___27543);
var G__27547 = (0);
seq__27518_27530 = G__27544;
chunk__27519_27531 = G__27545;
count__27520_27532 = G__27546;
i__27521_27533 = G__27547;
continue;
}
} else
{var i_27548 = cljs.core.first.call(null,seq__27518_27542__$1);var v_27549 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_27548 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27549.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27549));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27549.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27549));
ctx.moveTo((0),pos_y.call(null,v_27549));
ctx.lineTo(w,pos_y.call(null,v_27549));
var v_27550 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_27548 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27550.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27550));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27550.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27550));
ctx.moveTo((0),pos_y.call(null,v_27550));
ctx.lineTo(w,pos_y.call(null,v_27550));
{
var G__27551 = cljs.core.next.call(null,seq__27518_27542__$1);
var G__27552 = null;
var G__27553 = (0);
var G__27554 = (0);
seq__27518_27530 = G__27551;
chunk__27519_27531 = G__27552;
count__27520_27532 = G__27553;
i__27521_27533 = G__27554;
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
{var seq__27522_27555 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__27523_27556 = null;var count__27524_27557 = (0);var i__27525_27558 = (0);while(true){
if((i__27525_27558 < count__27524_27557))
{var i_27559 = cljs.core._nth.call(null,chunk__27523_27556,i__27525_27558);if((cljs.core.mod.call(null,i_27559,cntx) === (0)))
{var posx_27560 = ((offset_x / (2)) + (i_27559 * offset_x));ctx.moveTo(posx_27560,(0));
ctx.lineTo(posx_27560,h);
} else
{}
{
var G__27561 = seq__27522_27555;
var G__27562 = chunk__27523_27556;
var G__27563 = count__27524_27557;
var G__27564 = (i__27525_27558 + (1));
seq__27522_27555 = G__27561;
chunk__27523_27556 = G__27562;
count__27524_27557 = G__27563;
i__27525_27558 = G__27564;
continue;
}
} else
{var temp__4126__auto___27565 = cljs.core.seq.call(null,seq__27522_27555);if(temp__4126__auto___27565)
{var seq__27522_27566__$1 = temp__4126__auto___27565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27522_27566__$1))
{var c__4307__auto___27567 = cljs.core.chunk_first.call(null,seq__27522_27566__$1);{
var G__27568 = cljs.core.chunk_rest.call(null,seq__27522_27566__$1);
var G__27569 = c__4307__auto___27567;
var G__27570 = cljs.core.count.call(null,c__4307__auto___27567);
var G__27571 = (0);
seq__27522_27555 = G__27568;
chunk__27523_27556 = G__27569;
count__27524_27557 = G__27570;
i__27525_27558 = G__27571;
continue;
}
} else
{var i_27572 = cljs.core.first.call(null,seq__27522_27566__$1);if((cljs.core.mod.call(null,i_27572,cntx) === (0)))
{var posx_27573 = ((offset_x / (2)) + (i_27572 * offset_x));ctx.moveTo(posx_27573,(0));
ctx.lineTo(posx_27573,h);
} else
{}
{
var G__27574 = cljs.core.next.call(null,seq__27522_27566__$1);
var G__27575 = null;
var G__27576 = (0);
var G__27577 = (0);
seq__27522_27555 = G__27574;
chunk__27523_27556 = G__27575;
count__27524_27557 = G__27576;
i__27525_27558 = G__27577;
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
{var seq__27526_27578 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__27527_27579 = null;var count__27528_27580 = (0);var i__27529_27581 = (0);while(true){
if((i__27529_27581 < count__27528_27580))
{var i_27582 = cljs.core._nth.call(null,chunk__27527_27579,i__27529_27581);if((cljs.core.mod.call(null,i_27582,cntx) === (0)))
{var posx_27583 = ((offset_x / (2)) + (i_27582 * offset_x));ctx.moveTo(posx_27583,(0));
ctx.lineTo(posx_27583,h);
} else
{}
{
var G__27584 = seq__27526_27578;
var G__27585 = chunk__27527_27579;
var G__27586 = count__27528_27580;
var G__27587 = (i__27529_27581 + (1));
seq__27526_27578 = G__27584;
chunk__27527_27579 = G__27585;
count__27528_27580 = G__27586;
i__27529_27581 = G__27587;
continue;
}
} else
{var temp__4126__auto___27588 = cljs.core.seq.call(null,seq__27526_27578);if(temp__4126__auto___27588)
{var seq__27526_27589__$1 = temp__4126__auto___27588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27526_27589__$1))
{var c__4307__auto___27590 = cljs.core.chunk_first.call(null,seq__27526_27589__$1);{
var G__27591 = cljs.core.chunk_rest.call(null,seq__27526_27589__$1);
var G__27592 = c__4307__auto___27590;
var G__27593 = cljs.core.count.call(null,c__4307__auto___27590);
var G__27594 = (0);
seq__27526_27578 = G__27591;
chunk__27527_27579 = G__27592;
count__27528_27580 = G__27593;
i__27529_27581 = G__27594;
continue;
}
} else
{var i_27595 = cljs.core.first.call(null,seq__27526_27589__$1);if((cljs.core.mod.call(null,i_27595,cntx) === (0)))
{var posx_27596 = ((offset_x / (2)) + (i_27595 * offset_x));ctx.moveTo(posx_27596,(0));
ctx.lineTo(posx_27596,h);
} else
{}
{
var G__27597 = cljs.core.next.call(null,seq__27526_27589__$1);
var G__27598 = null;
var G__27599 = (0);
var G__27600 = (0);
seq__27526_27578 = G__27597;
chunk__27527_27579 = G__27598;
count__27528_27580 = G__27599;
i__27529_27581 = G__27600;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27601){var map__27602 = p__27601;var map__27602__$1 = ((cljs.core.seq_QMARK_.call(null,map__27602))?cljs.core.apply.call(null,cljs.core.hash_map,map__27602):map__27602);var line = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27603){var map__27604 = p__27603;var map__27604__$1 = ((cljs.core.seq_QMARK_.call(null,map__27604))?cljs.core.apply.call(null,cljs.core.hash_map,map__27604):map__27604);var line = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27605){var map__27606 = p__27605;var map__27606__$1 = ((cljs.core.seq_QMARK_.call(null,map__27606))?cljs.core.apply.call(null,cljs.core.hash_map,map__27606):map__27606);var line = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27607,base,ctx){var map__27608 = p__27607;var map__27608__$1 = ((cljs.core.seq_QMARK_.call(null,map__27608))?cljs.core.apply.call(null,cljs.core.hash_map,map__27608):map__27608);var line = cljs.core.get.call(null,map__27608__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__27608__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__27608__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__27608__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__27609 = base;var w = cljs.core.nth.call(null,vec__27609,(0),null);var h = cljs.core.nth.call(null,vec__27609,(1),null);var max_v = cljs.core.nth.call(null,vec__27609,(2),null);var min_v = cljs.core.nth.call(null,vec__27609,(3),null);var offset_v = cljs.core.nth.call(null,vec__27609,(4),null);var offset_x = cljs.core.nth.call(null,vec__27609,(5),null);var pos_y = cljs.core.nth.call(null,vec__27609,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__27610 = cljs.core._EQ_;var expr__27611 = style;if(cljs.core.truth_(pred__27610.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__27611)))
{(ctx["fillStyle"] = color);
var seq__27613 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__27614 = null;var count__27615 = (0);var i__27616 = (0);while(true){
if((i__27616 < count__27615))
{var vec__27617 = cljs.core._nth.call(null,chunk__27614,i__27616);var idx = cljs.core.nth.call(null,vec__27617,(0),null);var value = cljs.core.nth.call(null,vec__27617,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__27625 = seq__27613;
var G__27626 = chunk__27614;
var G__27627 = count__27615;
var G__27628 = (i__27616 + (1));
seq__27613 = G__27625;
chunk__27614 = G__27626;
count__27615 = G__27627;
i__27616 = G__27628;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27613);if(temp__4126__auto__)
{var seq__27613__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27613__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27613__$1);{
var G__27629 = cljs.core.chunk_rest.call(null,seq__27613__$1);
var G__27630 = c__4307__auto__;
var G__27631 = cljs.core.count.call(null,c__4307__auto__);
var G__27632 = (0);
seq__27613 = G__27629;
chunk__27614 = G__27630;
count__27615 = G__27631;
i__27616 = G__27632;
continue;
}
} else
{var vec__27618 = cljs.core.first.call(null,seq__27613__$1);var idx = cljs.core.nth.call(null,vec__27618,(0),null);var value = cljs.core.nth.call(null,vec__27618,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__27633 = cljs.core.next.call(null,seq__27613__$1);
var G__27634 = null;
var G__27635 = (0);
var G__27636 = (0);
seq__27613 = G__27633;
chunk__27614 = G__27634;
count__27615 = G__27635;
i__27616 = G__27636;
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
var seq__27619_27637 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__27610,expr__27611,vec__27609,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__27608,map__27608__$1,line,color,offset,style){
return (function() { 
var G__27641__delegate = function (args){return args;
};
var G__27641 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27641__delegate.call(this,args);};
G__27641.cljs$lang$maxFixedArity = 0;
G__27641.cljs$lang$applyTo = (function (arglist__27642){
var args = cljs.core.seq(arglist__27642);
return G__27641__delegate(args);
});
G__27641.cljs$core$IFn$_invoke$arity$variadic = G__27641__delegate;
return G__27641;
})()
;})(pred__27610,expr__27611,vec__27609,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__27608,map__27608__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__27620_27638 = null;var count__27621_27639 = (0);var i__27622_27640 = (0);while(true){
if((i__27622_27640 < count__27621_27639))
{var vec__27623_27643 = cljs.core._nth.call(null,chunk__27620_27638,i__27622_27640);var idx_27644 = cljs.core.nth.call(null,vec__27623_27643,(0),null);var prev_27645 = cljs.core.nth.call(null,vec__27623_27643,(1),null);var curr_27646 = cljs.core.nth.call(null,vec__27623_27643,(2),null);ctx.moveTo(((idx_27644 + offset__$1) * offset_x),pos_y.call(null,prev_27645));
ctx.lineTo((((idx_27644 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_27646));
{
var G__27647 = seq__27619_27637;
var G__27648 = chunk__27620_27638;
var G__27649 = count__27621_27639;
var G__27650 = (i__27622_27640 + (1));
seq__27619_27637 = G__27647;
chunk__27620_27638 = G__27648;
count__27621_27639 = G__27649;
i__27622_27640 = G__27650;
continue;
}
} else
{var temp__4126__auto___27651 = cljs.core.seq.call(null,seq__27619_27637);if(temp__4126__auto___27651)
{var seq__27619_27652__$1 = temp__4126__auto___27651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27619_27652__$1))
{var c__4307__auto___27653 = cljs.core.chunk_first.call(null,seq__27619_27652__$1);{
var G__27654 = cljs.core.chunk_rest.call(null,seq__27619_27652__$1);
var G__27655 = c__4307__auto___27653;
var G__27656 = cljs.core.count.call(null,c__4307__auto___27653);
var G__27657 = (0);
seq__27619_27637 = G__27654;
chunk__27620_27638 = G__27655;
count__27621_27639 = G__27656;
i__27622_27640 = G__27657;
continue;
}
} else
{var vec__27624_27658 = cljs.core.first.call(null,seq__27619_27652__$1);var idx_27659 = cljs.core.nth.call(null,vec__27624_27658,(0),null);var prev_27660 = cljs.core.nth.call(null,vec__27624_27658,(1),null);var curr_27661 = cljs.core.nth.call(null,vec__27624_27658,(2),null);ctx.moveTo(((idx_27659 + offset__$1) * offset_x),pos_y.call(null,prev_27660));
ctx.lineTo((((idx_27659 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_27661));
{
var G__27662 = cljs.core.next.call(null,seq__27619_27652__$1);
var G__27663 = null;
var G__27664 = (0);
var G__27665 = (0);
seq__27619_27637 = G__27662;
chunk__27620_27638 = G__27663;
count__27621_27639 = G__27664;
i__27622_27640 = G__27665;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27666){var map__27667 = p__27666;var map__27667__$1 = ((cljs.core.seq_QMARK_.call(null,map__27667))?cljs.core.apply.call(null,cljs.core.hash_map,map__27667):map__27667);var kline = cljs.core.get.call(null,map__27667__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27668){var map__27669 = p__27668;var map__27669__$1 = ((cljs.core.seq_QMARK_.call(null,map__27669))?cljs.core.apply.call(null,cljs.core.hash_map,map__27669):map__27669);var kline = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27670){var map__27671 = p__27670;var map__27671__$1 = ((cljs.core.seq_QMARK_.call(null,map__27671))?cljs.core.apply.call(null,cljs.core.hash_map,map__27671):map__27671);var kline = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27672,base,ctx){var map__27673 = p__27672;var map__27673__$1 = ((cljs.core.seq_QMARK_.call(null,map__27673))?cljs.core.apply.call(null,cljs.core.hash_map,map__27673):map__27673);var kline = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__27674 = base;var w = cljs.core.nth.call(null,vec__27674,(0),null);var h = cljs.core.nth.call(null,vec__27674,(1),null);var max_v = cljs.core.nth.call(null,vec__27674,(2),null);var min_v = cljs.core.nth.call(null,vec__27674,(3),null);var offset_v = cljs.core.nth.call(null,vec__27674,(4),null);var offset_x = cljs.core.nth.call(null,vec__27674,(5),null);var pos_y = cljs.core.nth.call(null,vec__27674,(6),null);(ctx["fillStyle"] = "black");
var seq__27675 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__27674,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27673,map__27673__$1,kline,info){
return (function() { 
var G__27683__delegate = function (args){return args;
};
var G__27683 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27683__delegate.call(this,args);};
G__27683.cljs$lang$maxFixedArity = 0;
G__27683.cljs$lang$applyTo = (function (arglist__27684){
var args = cljs.core.seq(arglist__27684);
return G__27683__delegate(args);
});
G__27683.cljs$core$IFn$_invoke$arity$variadic = G__27683__delegate;
return G__27683;
})()
;})(vec__27674,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27673,map__27673__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__27676 = null;var count__27677 = (0);var i__27678 = (0);while(true){
if((i__27678 < count__27677))
{var vec__27679 = cljs.core._nth.call(null,chunk__27676,i__27678);var idx = cljs.core.nth.call(null,vec__27679,(0),null);var vec__27680 = cljs.core.nth.call(null,vec__27679,(1),null);var date = cljs.core.nth.call(null,vec__27680,(0),null);var open = cljs.core.nth.call(null,vec__27680,(1),null);var high = cljs.core.nth.call(null,vec__27680,(2),null);var low = cljs.core.nth.call(null,vec__27680,(3),null);var close = cljs.core.nth.call(null,vec__27680,(4),null);var volume = cljs.core.nth.call(null,vec__27680,(5),null);var info__$1 = cljs.core.nth.call(null,vec__27679,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__27685 = seq__27675;
var G__27686 = chunk__27676;
var G__27687 = count__27677;
var G__27688 = (i__27678 + (1));
seq__27675 = G__27685;
chunk__27676 = G__27686;
count__27677 = G__27687;
i__27678 = G__27688;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27675);if(temp__4126__auto__)
{var seq__27675__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27675__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27675__$1);{
var G__27689 = cljs.core.chunk_rest.call(null,seq__27675__$1);
var G__27690 = c__4307__auto__;
var G__27691 = cljs.core.count.call(null,c__4307__auto__);
var G__27692 = (0);
seq__27675 = G__27689;
chunk__27676 = G__27690;
count__27677 = G__27691;
i__27678 = G__27692;
continue;
}
} else
{var vec__27681 = cljs.core.first.call(null,seq__27675__$1);var idx = cljs.core.nth.call(null,vec__27681,(0),null);var vec__27682 = cljs.core.nth.call(null,vec__27681,(1),null);var date = cljs.core.nth.call(null,vec__27682,(0),null);var open = cljs.core.nth.call(null,vec__27682,(1),null);var high = cljs.core.nth.call(null,vec__27682,(2),null);var low = cljs.core.nth.call(null,vec__27682,(3),null);var close = cljs.core.nth.call(null,vec__27682,(4),null);var volume = cljs.core.nth.call(null,vec__27682,(5),null);var info__$1 = cljs.core.nth.call(null,vec__27681,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__27693 = cljs.core.next.call(null,seq__27675__$1);
var G__27694 = null;
var G__27695 = (0);
var G__27696 = (0);
seq__27675 = G__27693;
chunk__27676 = G__27694;
count__27677 = G__27695;
i__27678 = G__27696;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__27697){var map__27698 = p__27697;var map__27698__$1 = ((cljs.core.seq_QMARK_.call(null,map__27698))?cljs.core.apply.call(null,cljs.core.hash_map,map__27698):map__27698);var cz = cljs.core.get.call(null,map__27698__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__27699){var map__27700 = p__27699;var map__27700__$1 = ((cljs.core.seq_QMARK_.call(null,map__27700))?cljs.core.apply.call(null,cljs.core.hash_map,map__27700):map__27700);var cz = cljs.core.get.call(null,map__27700__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__27701,base,ctx){var map__27702 = p__27701;var map__27702__$1 = ((cljs.core.seq_QMARK_.call(null,map__27702))?cljs.core.apply.call(null,cljs.core.hash_map,map__27702):map__27702);var cz = cljs.core.get.call(null,map__27702__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__27702__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__27702__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__27703 = base;var w = cljs.core.nth.call(null,vec__27703,(0),null);var h = cljs.core.nth.call(null,vec__27703,(1),null);var max_v = cljs.core.nth.call(null,vec__27703,(2),null);var min_v = cljs.core.nth.call(null,vec__27703,(3),null);var offset_v = cljs.core.nth.call(null,vec__27703,(4),null);var offset_x = cljs.core.nth.call(null,vec__27703,(5),null);var pos_y = cljs.core.nth.call(null,vec__27703,(6),null);var proj_x = ((function (vec__27703,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27702,map__27702__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__27703,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27702,map__27702__$1,cz,vz,color))
;var proj_y = ((function (vec__27703,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__27702,map__27702__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__27703,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__27702,map__27702__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__27704 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__27703,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__27702,map__27702__$1,cz,vz,color){
return (function() { 
var G__27710__delegate = function (args){return args;
};
var G__27710 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27710__delegate.call(this,args);};
G__27710.cljs$lang$maxFixedArity = 0;
G__27710.cljs$lang$applyTo = (function (arglist__27711){
var args = cljs.core.seq(arglist__27711);
return G__27710__delegate(args);
});
G__27710.cljs$core$IFn$_invoke$arity$variadic = G__27710__delegate;
return G__27710;
})()
;})(vec__27703,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__27702,map__27702__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__27705 = null;var count__27706 = (0);var i__27707 = (0);while(true){
if((i__27707 < count__27706))
{var vec__27708 = cljs.core._nth.call(null,chunk__27705,i__27707);var idx = cljs.core.nth.call(null,vec__27708,(0),null);var pc = cljs.core.nth.call(null,vec__27708,(1),null);var cc = cljs.core.nth.call(null,vec__27708,(2),null);var pv = cljs.core.nth.call(null,vec__27708,(3),null);var cv = cljs.core.nth.call(null,vec__27708,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__27712 = seq__27704;
var G__27713 = chunk__27705;
var G__27714 = count__27706;
var G__27715 = (i__27707 + (1));
seq__27704 = G__27712;
chunk__27705 = G__27713;
count__27706 = G__27714;
i__27707 = G__27715;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27704);if(temp__4126__auto__)
{var seq__27704__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27704__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27704__$1);{
var G__27716 = cljs.core.chunk_rest.call(null,seq__27704__$1);
var G__27717 = c__4307__auto__;
var G__27718 = cljs.core.count.call(null,c__4307__auto__);
var G__27719 = (0);
seq__27704 = G__27716;
chunk__27705 = G__27717;
count__27706 = G__27718;
i__27707 = G__27719;
continue;
}
} else
{var vec__27709 = cljs.core.first.call(null,seq__27704__$1);var idx = cljs.core.nth.call(null,vec__27709,(0),null);var pc = cljs.core.nth.call(null,vec__27709,(1),null);var cc = cljs.core.nth.call(null,vec__27709,(2),null);var pv = cljs.core.nth.call(null,vec__27709,(3),null);var cv = cljs.core.nth.call(null,vec__27709,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__27720 = cljs.core.next.call(null,seq__27704__$1);
var G__27721 = null;
var G__27722 = (0);
var G__27723 = (0);
seq__27704 = G__27720;
chunk__27705 = G__27721;
count__27706 = G__27722;
i__27707 = G__27723;
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
