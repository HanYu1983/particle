// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38633){var map__38634 = p__38633;var map__38634__$1 = ((cljs.core.seq_QMARK_.call(null,map__38634))?cljs.core.apply.call(null,cljs.core.hash_map,map__38634):map__38634);var t = cljs.core.get.call(null,map__38634__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38635){var map__38636 = p__38635;var map__38636__$1 = ((cljs.core.seq_QMARK_.call(null,map__38636))?cljs.core.apply.call(null,cljs.core.hash_map,map__38636):map__38636);var t = cljs.core.get.call(null,map__38636__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38637){var map__38638 = p__38637;var map__38638__$1 = ((cljs.core.seq_QMARK_.call(null,map__38638))?cljs.core.apply.call(null,cljs.core.hash_map,map__38638):map__38638);var t = cljs.core.get.call(null,map__38638__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__38639,base,ctx){var map__38640 = p__38639;var map__38640__$1 = ((cljs.core.seq_QMARK_.call(null,map__38640))?cljs.core.apply.call(null,cljs.core.hash_map,map__38640):map__38640);var t = cljs.core.get.call(null,map__38640__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__38641,w,h,ctx){var map__38647 = p__38641;var map__38647__$1 = ((cljs.core.seq_QMARK_.call(null,map__38647))?cljs.core.apply.call(null,cljs.core.hash_map,map__38647):map__38647);var info = map__38647__$1;var drawers = cljs.core.get.call(null,map__38647__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__38648 = cljs.core.seq.call(null,drawers);var chunk__38649 = null;var count__38650 = (0);var i__38651 = (0);while(true){
if((i__38651 < count__38650))
{var drawer = cljs.core._nth.call(null,chunk__38649,i__38651);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__38652 = seq__38648;
var G__38653 = chunk__38649;
var G__38654 = count__38650;
var G__38655 = (i__38651 + (1));
seq__38648 = G__38652;
chunk__38649 = G__38653;
count__38650 = G__38654;
i__38651 = G__38655;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38648);if(temp__4126__auto__)
{var seq__38648__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38648__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38648__$1);{
var G__38656 = cljs.core.chunk_rest.call(null,seq__38648__$1);
var G__38657 = c__4307__auto__;
var G__38658 = cljs.core.count.call(null,c__4307__auto__);
var G__38659 = (0);
seq__38648 = G__38656;
chunk__38649 = G__38657;
count__38650 = G__38658;
i__38651 = G__38659;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__38648__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__38660 = cljs.core.next.call(null,seq__38648__$1);
var G__38661 = null;
var G__38662 = (0);
var G__38663 = (0);
seq__38648 = G__38660;
chunk__38649 = G__38661;
count__38650 = G__38662;
i__38651 = G__38663;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38664){var map__38665 = p__38664;var map__38665__$1 = ((cljs.core.seq_QMARK_.call(null,map__38665))?cljs.core.apply.call(null,cljs.core.hash_map,map__38665):map__38665);var line = cljs.core.get.call(null,map__38665__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38665__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38666){var map__38667 = p__38666;var map__38667__$1 = ((cljs.core.seq_QMARK_.call(null,map__38667))?cljs.core.apply.call(null,cljs.core.hash_map,map__38667):map__38667);var line = cljs.core.get.call(null,map__38667__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38667__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38668){var map__38669 = p__38668;var map__38669__$1 = ((cljs.core.seq_QMARK_.call(null,map__38669))?cljs.core.apply.call(null,cljs.core.hash_map,map__38669):map__38669);var line = cljs.core.get.call(null,map__38669__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38669__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__38670,base,ctx){var map__38671 = p__38670;var map__38671__$1 = ((cljs.core.seq_QMARK_.call(null,map__38671))?cljs.core.apply.call(null,cljs.core.hash_map,map__38671):map__38671);var line = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__38672 = base;var w = cljs.core.nth.call(null,vec__38672,(0),null);var h = cljs.core.nth.call(null,vec__38672,(1),null);var max_v = cljs.core.nth.call(null,vec__38672,(2),null);var min_v = cljs.core.nth.call(null,vec__38672,(3),null);var offset_v = cljs.core.nth.call(null,vec__38672,(4),null);var offset_x = cljs.core.nth.call(null,vec__38672,(5),null);var pos_y = cljs.core.nth.call(null,vec__38672,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__38673_38685 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__38674_38686 = null;var count__38675_38687 = (0);var i__38676_38688 = (0);while(true){
if((i__38676_38688 < count__38675_38687))
{var i_38689 = cljs.core._nth.call(null,chunk__38674_38686,i__38676_38688);var v_38690 = (min_v + (i_38689 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38690 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_38690));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38690 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_38690));
ctx.moveTo((0),pos_y.call(null,v_38690));
ctx.lineTo(w,pos_y.call(null,v_38690));
{
var G__38691 = seq__38673_38685;
var G__38692 = chunk__38674_38686;
var G__38693 = count__38675_38687;
var G__38694 = (i__38676_38688 + (1));
seq__38673_38685 = G__38691;
chunk__38674_38686 = G__38692;
count__38675_38687 = G__38693;
i__38676_38688 = G__38694;
continue;
}
} else
{var temp__4126__auto___38695 = cljs.core.seq.call(null,seq__38673_38685);if(temp__4126__auto___38695)
{var seq__38673_38696__$1 = temp__4126__auto___38695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38673_38696__$1))
{var c__4307__auto___38697 = cljs.core.chunk_first.call(null,seq__38673_38696__$1);{
var G__38698 = cljs.core.chunk_rest.call(null,seq__38673_38696__$1);
var G__38699 = c__4307__auto___38697;
var G__38700 = cljs.core.count.call(null,c__4307__auto___38697);
var G__38701 = (0);
seq__38673_38685 = G__38698;
chunk__38674_38686 = G__38699;
count__38675_38687 = G__38700;
i__38676_38688 = G__38701;
continue;
}
} else
{var i_38702 = cljs.core.first.call(null,seq__38673_38696__$1);var v_38703 = (min_v + (i_38702 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38703 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_38703));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_38703 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_38703));
ctx.moveTo((0),pos_y.call(null,v_38703));
ctx.lineTo(w,pos_y.call(null,v_38703));
{
var G__38704 = cljs.core.next.call(null,seq__38673_38696__$1);
var G__38705 = null;
var G__38706 = (0);
var G__38707 = (0);
seq__38673_38685 = G__38704;
chunk__38674_38686 = G__38705;
count__38675_38687 = G__38706;
i__38676_38688 = G__38707;
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
{var seq__38677_38708 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__38678_38709 = null;var count__38679_38710 = (0);var i__38680_38711 = (0);while(true){
if((i__38680_38711 < count__38679_38710))
{var i_38712 = cljs.core._nth.call(null,chunk__38678_38709,i__38680_38711);if((cljs.core.mod.call(null,i_38712,cntx) === (0)))
{var posx_38713 = ((offset_x / (2)) + (i_38712 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_38712)),posx_38713,h);
ctx.moveTo(posx_38713,(0));
ctx.lineTo(posx_38713,h);
} else
{}
{
var G__38714 = seq__38677_38708;
var G__38715 = chunk__38678_38709;
var G__38716 = count__38679_38710;
var G__38717 = (i__38680_38711 + (1));
seq__38677_38708 = G__38714;
chunk__38678_38709 = G__38715;
count__38679_38710 = G__38716;
i__38680_38711 = G__38717;
continue;
}
} else
{var temp__4126__auto___38718 = cljs.core.seq.call(null,seq__38677_38708);if(temp__4126__auto___38718)
{var seq__38677_38719__$1 = temp__4126__auto___38718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38677_38719__$1))
{var c__4307__auto___38720 = cljs.core.chunk_first.call(null,seq__38677_38719__$1);{
var G__38721 = cljs.core.chunk_rest.call(null,seq__38677_38719__$1);
var G__38722 = c__4307__auto___38720;
var G__38723 = cljs.core.count.call(null,c__4307__auto___38720);
var G__38724 = (0);
seq__38677_38708 = G__38721;
chunk__38678_38709 = G__38722;
count__38679_38710 = G__38723;
i__38680_38711 = G__38724;
continue;
}
} else
{var i_38725 = cljs.core.first.call(null,seq__38677_38719__$1);if((cljs.core.mod.call(null,i_38725,cntx) === (0)))
{var posx_38726 = ((offset_x / (2)) + (i_38725 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_38725)),posx_38726,h);
ctx.moveTo(posx_38726,(0));
ctx.lineTo(posx_38726,h);
} else
{}
{
var G__38727 = cljs.core.next.call(null,seq__38677_38719__$1);
var G__38728 = null;
var G__38729 = (0);
var G__38730 = (0);
seq__38677_38708 = G__38727;
chunk__38678_38709 = G__38728;
count__38679_38710 = G__38729;
i__38680_38711 = G__38730;
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
{var seq__38681_38731 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__38682_38732 = null;var count__38683_38733 = (0);var i__38684_38734 = (0);while(true){
if((i__38684_38734 < count__38683_38733))
{var i_38735 = cljs.core._nth.call(null,chunk__38682_38732,i__38684_38734);if((cljs.core.mod.call(null,i_38735,cntx) === (0)))
{var posx_38736 = ((offset_x / (2)) + (i_38735 * offset_x));ctx.moveTo(posx_38736,(0));
ctx.lineTo(posx_38736,h);
} else
{}
{
var G__38737 = seq__38681_38731;
var G__38738 = chunk__38682_38732;
var G__38739 = count__38683_38733;
var G__38740 = (i__38684_38734 + (1));
seq__38681_38731 = G__38737;
chunk__38682_38732 = G__38738;
count__38683_38733 = G__38739;
i__38684_38734 = G__38740;
continue;
}
} else
{var temp__4126__auto___38741 = cljs.core.seq.call(null,seq__38681_38731);if(temp__4126__auto___38741)
{var seq__38681_38742__$1 = temp__4126__auto___38741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38681_38742__$1))
{var c__4307__auto___38743 = cljs.core.chunk_first.call(null,seq__38681_38742__$1);{
var G__38744 = cljs.core.chunk_rest.call(null,seq__38681_38742__$1);
var G__38745 = c__4307__auto___38743;
var G__38746 = cljs.core.count.call(null,c__4307__auto___38743);
var G__38747 = (0);
seq__38681_38731 = G__38744;
chunk__38682_38732 = G__38745;
count__38683_38733 = G__38746;
i__38684_38734 = G__38747;
continue;
}
} else
{var i_38748 = cljs.core.first.call(null,seq__38681_38742__$1);if((cljs.core.mod.call(null,i_38748,cntx) === (0)))
{var posx_38749 = ((offset_x / (2)) + (i_38748 * offset_x));ctx.moveTo(posx_38749,(0));
ctx.lineTo(posx_38749,h);
} else
{}
{
var G__38750 = cljs.core.next.call(null,seq__38681_38742__$1);
var G__38751 = null;
var G__38752 = (0);
var G__38753 = (0);
seq__38681_38731 = G__38750;
chunk__38682_38732 = G__38751;
count__38683_38733 = G__38752;
i__38684_38734 = G__38753;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38754){var map__38755 = p__38754;var map__38755__$1 = ((cljs.core.seq_QMARK_.call(null,map__38755))?cljs.core.apply.call(null,cljs.core.hash_map,map__38755):map__38755);var line = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38756){var map__38757 = p__38756;var map__38757__$1 = ((cljs.core.seq_QMARK_.call(null,map__38757))?cljs.core.apply.call(null,cljs.core.hash_map,map__38757):map__38757);var line = cljs.core.get.call(null,map__38757__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38758){var map__38759 = p__38758;var map__38759__$1 = ((cljs.core.seq_QMARK_.call(null,map__38759))?cljs.core.apply.call(null,cljs.core.hash_map,map__38759):map__38759);var line = cljs.core.get.call(null,map__38759__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38760,base,ctx){var map__38761 = p__38760;var map__38761__$1 = ((cljs.core.seq_QMARK_.call(null,map__38761))?cljs.core.apply.call(null,cljs.core.hash_map,map__38761):map__38761);var line = cljs.core.get.call(null,map__38761__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__38761__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__38761__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var vec__38762 = base;var w = cljs.core.nth.call(null,vec__38762,(0),null);var h = cljs.core.nth.call(null,vec__38762,(1),null);var max_v = cljs.core.nth.call(null,vec__38762,(2),null);var min_v = cljs.core.nth.call(null,vec__38762,(3),null);var offset_v = cljs.core.nth.call(null,vec__38762,(4),null);var offset_x = cljs.core.nth.call(null,vec__38762,(5),null);var pos_y = cljs.core.nth.call(null,vec__38762,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
var seq__38763_38769 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__38762,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__38761,map__38761__$1,line,color,offset){
return (function() { 
var G__38773__delegate = function (args){return args;
};
var G__38773 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38773__delegate.call(this,args);};
G__38773.cljs$lang$maxFixedArity = 0;
G__38773.cljs$lang$applyTo = (function (arglist__38774){
var args = cljs.core.seq(arglist__38774);
return G__38773__delegate(args);
});
G__38773.cljs$core$IFn$_invoke$arity$variadic = G__38773__delegate;
return G__38773;
})()
;})(vec__38762,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__38761,map__38761__$1,line,color,offset))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__38764_38770 = null;var count__38765_38771 = (0);var i__38766_38772 = (0);while(true){
if((i__38766_38772 < count__38765_38771))
{var vec__38767_38775 = cljs.core._nth.call(null,chunk__38764_38770,i__38766_38772);var idx_38776 = cljs.core.nth.call(null,vec__38767_38775,(0),null);var prev_38777 = cljs.core.nth.call(null,vec__38767_38775,(1),null);var curr_38778 = cljs.core.nth.call(null,vec__38767_38775,(2),null);ctx.moveTo(((idx_38776 + offset__$1) * offset_x),pos_y.call(null,prev_38777));
ctx.lineTo((((idx_38776 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_38778));
{
var G__38779 = seq__38763_38769;
var G__38780 = chunk__38764_38770;
var G__38781 = count__38765_38771;
var G__38782 = (i__38766_38772 + (1));
seq__38763_38769 = G__38779;
chunk__38764_38770 = G__38780;
count__38765_38771 = G__38781;
i__38766_38772 = G__38782;
continue;
}
} else
{var temp__4126__auto___38783 = cljs.core.seq.call(null,seq__38763_38769);if(temp__4126__auto___38783)
{var seq__38763_38784__$1 = temp__4126__auto___38783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38763_38784__$1))
{var c__4307__auto___38785 = cljs.core.chunk_first.call(null,seq__38763_38784__$1);{
var G__38786 = cljs.core.chunk_rest.call(null,seq__38763_38784__$1);
var G__38787 = c__4307__auto___38785;
var G__38788 = cljs.core.count.call(null,c__4307__auto___38785);
var G__38789 = (0);
seq__38763_38769 = G__38786;
chunk__38764_38770 = G__38787;
count__38765_38771 = G__38788;
i__38766_38772 = G__38789;
continue;
}
} else
{var vec__38768_38790 = cljs.core.first.call(null,seq__38763_38784__$1);var idx_38791 = cljs.core.nth.call(null,vec__38768_38790,(0),null);var prev_38792 = cljs.core.nth.call(null,vec__38768_38790,(1),null);var curr_38793 = cljs.core.nth.call(null,vec__38768_38790,(2),null);ctx.moveTo(((idx_38791 + offset__$1) * offset_x),pos_y.call(null,prev_38792));
ctx.lineTo((((idx_38791 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_38793));
{
var G__38794 = cljs.core.next.call(null,seq__38763_38784__$1);
var G__38795 = null;
var G__38796 = (0);
var G__38797 = (0);
seq__38763_38769 = G__38794;
chunk__38764_38770 = G__38795;
count__38765_38771 = G__38796;
i__38766_38772 = G__38797;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38798){var map__38799 = p__38798;var map__38799__$1 = ((cljs.core.seq_QMARK_.call(null,map__38799))?cljs.core.apply.call(null,cljs.core.hash_map,map__38799):map__38799);var kline = cljs.core.get.call(null,map__38799__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38800){var map__38801 = p__38800;var map__38801__$1 = ((cljs.core.seq_QMARK_.call(null,map__38801))?cljs.core.apply.call(null,cljs.core.hash_map,map__38801):map__38801);var kline = cljs.core.get.call(null,map__38801__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38802){var map__38803 = p__38802;var map__38803__$1 = ((cljs.core.seq_QMARK_.call(null,map__38803))?cljs.core.apply.call(null,cljs.core.hash_map,map__38803):map__38803);var kline = cljs.core.get.call(null,map__38803__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__38804,base,ctx){var map__38805 = p__38804;var map__38805__$1 = ((cljs.core.seq_QMARK_.call(null,map__38805))?cljs.core.apply.call(null,cljs.core.hash_map,map__38805):map__38805);var kline = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__38805__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__38806 = base;var w = cljs.core.nth.call(null,vec__38806,(0),null);var h = cljs.core.nth.call(null,vec__38806,(1),null);var max_v = cljs.core.nth.call(null,vec__38806,(2),null);var min_v = cljs.core.nth.call(null,vec__38806,(3),null);var offset_v = cljs.core.nth.call(null,vec__38806,(4),null);var offset_x = cljs.core.nth.call(null,vec__38806,(5),null);var pos_y = cljs.core.nth.call(null,vec__38806,(6),null);(ctx["fillStyle"] = "black");
var seq__38807 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__38806,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38805,map__38805__$1,kline,info){
return (function() { 
var G__38815__delegate = function (args){return args;
};
var G__38815 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38815__delegate.call(this,args);};
G__38815.cljs$lang$maxFixedArity = 0;
G__38815.cljs$lang$applyTo = (function (arglist__38816){
var args = cljs.core.seq(arglist__38816);
return G__38815__delegate(args);
});
G__38815.cljs$core$IFn$_invoke$arity$variadic = G__38815__delegate;
return G__38815;
})()
;})(vec__38806,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38805,map__38805__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__38808 = null;var count__38809 = (0);var i__38810 = (0);while(true){
if((i__38810 < count__38809))
{var vec__38811 = cljs.core._nth.call(null,chunk__38808,i__38810);var idx = cljs.core.nth.call(null,vec__38811,(0),null);var vec__38812 = cljs.core.nth.call(null,vec__38811,(1),null);var date = cljs.core.nth.call(null,vec__38812,(0),null);var open = cljs.core.nth.call(null,vec__38812,(1),null);var high = cljs.core.nth.call(null,vec__38812,(2),null);var low = cljs.core.nth.call(null,vec__38812,(3),null);var close = cljs.core.nth.call(null,vec__38812,(4),null);var volume = cljs.core.nth.call(null,vec__38812,(5),null);var info__$1 = cljs.core.nth.call(null,vec__38811,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__38817 = seq__38807;
var G__38818 = chunk__38808;
var G__38819 = count__38809;
var G__38820 = (i__38810 + (1));
seq__38807 = G__38817;
chunk__38808 = G__38818;
count__38809 = G__38819;
i__38810 = G__38820;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38807);if(temp__4126__auto__)
{var seq__38807__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38807__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38807__$1);{
var G__38821 = cljs.core.chunk_rest.call(null,seq__38807__$1);
var G__38822 = c__4307__auto__;
var G__38823 = cljs.core.count.call(null,c__4307__auto__);
var G__38824 = (0);
seq__38807 = G__38821;
chunk__38808 = G__38822;
count__38809 = G__38823;
i__38810 = G__38824;
continue;
}
} else
{var vec__38813 = cljs.core.first.call(null,seq__38807__$1);var idx = cljs.core.nth.call(null,vec__38813,(0),null);var vec__38814 = cljs.core.nth.call(null,vec__38813,(1),null);var date = cljs.core.nth.call(null,vec__38814,(0),null);var open = cljs.core.nth.call(null,vec__38814,(1),null);var high = cljs.core.nth.call(null,vec__38814,(2),null);var low = cljs.core.nth.call(null,vec__38814,(3),null);var close = cljs.core.nth.call(null,vec__38814,(4),null);var volume = cljs.core.nth.call(null,vec__38814,(5),null);var info__$1 = cljs.core.nth.call(null,vec__38813,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__38825 = cljs.core.next.call(null,seq__38807__$1);
var G__38826 = null;
var G__38827 = (0);
var G__38828 = (0);
seq__38807 = G__38825;
chunk__38808 = G__38826;
count__38809 = G__38827;
i__38810 = G__38828;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__38829){var map__38830 = p__38829;var map__38830__$1 = ((cljs.core.seq_QMARK_.call(null,map__38830))?cljs.core.apply.call(null,cljs.core.hash_map,map__38830):map__38830);var cz = cljs.core.get.call(null,map__38830__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__38831){var map__38832 = p__38831;var map__38832__$1 = ((cljs.core.seq_QMARK_.call(null,map__38832))?cljs.core.apply.call(null,cljs.core.hash_map,map__38832):map__38832);var cz = cljs.core.get.call(null,map__38832__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__38833,base,ctx){var map__38834 = p__38833;var map__38834__$1 = ((cljs.core.seq_QMARK_.call(null,map__38834))?cljs.core.apply.call(null,cljs.core.hash_map,map__38834):map__38834);var cz = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__38835 = base;var w = cljs.core.nth.call(null,vec__38835,(0),null);var h = cljs.core.nth.call(null,vec__38835,(1),null);var max_v = cljs.core.nth.call(null,vec__38835,(2),null);var min_v = cljs.core.nth.call(null,vec__38835,(3),null);var offset_v = cljs.core.nth.call(null,vec__38835,(4),null);var offset_x = cljs.core.nth.call(null,vec__38835,(5),null);var pos_y = cljs.core.nth.call(null,vec__38835,(6),null);var proj_x = ((function (vec__38835,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38834,map__38834__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__38835,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__38834,map__38834__$1,cz,vz,color))
;var proj_y = ((function (vec__38835,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__38834,map__38834__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__38835,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__38834,map__38834__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__38836 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__38835,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__38834,map__38834__$1,cz,vz,color){
return (function() { 
var G__38842__delegate = function (args){return args;
};
var G__38842 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38842__delegate.call(this,args);};
G__38842.cljs$lang$maxFixedArity = 0;
G__38842.cljs$lang$applyTo = (function (arglist__38843){
var args = cljs.core.seq(arglist__38843);
return G__38842__delegate(args);
});
G__38842.cljs$core$IFn$_invoke$arity$variadic = G__38842__delegate;
return G__38842;
})()
;})(vec__38835,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__38834,map__38834__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__38837 = null;var count__38838 = (0);var i__38839 = (0);while(true){
if((i__38839 < count__38838))
{var vec__38840 = cljs.core._nth.call(null,chunk__38837,i__38839);var idx = cljs.core.nth.call(null,vec__38840,(0),null);var pc = cljs.core.nth.call(null,vec__38840,(1),null);var cc = cljs.core.nth.call(null,vec__38840,(2),null);var pv = cljs.core.nth.call(null,vec__38840,(3),null);var cv = cljs.core.nth.call(null,vec__38840,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__38844 = seq__38836;
var G__38845 = chunk__38837;
var G__38846 = count__38838;
var G__38847 = (i__38839 + (1));
seq__38836 = G__38844;
chunk__38837 = G__38845;
count__38838 = G__38846;
i__38839 = G__38847;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38836);if(temp__4126__auto__)
{var seq__38836__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38836__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__38836__$1);{
var G__38848 = cljs.core.chunk_rest.call(null,seq__38836__$1);
var G__38849 = c__4307__auto__;
var G__38850 = cljs.core.count.call(null,c__4307__auto__);
var G__38851 = (0);
seq__38836 = G__38848;
chunk__38837 = G__38849;
count__38838 = G__38850;
i__38839 = G__38851;
continue;
}
} else
{var vec__38841 = cljs.core.first.call(null,seq__38836__$1);var idx = cljs.core.nth.call(null,vec__38841,(0),null);var pc = cljs.core.nth.call(null,vec__38841,(1),null);var cc = cljs.core.nth.call(null,vec__38841,(2),null);var pv = cljs.core.nth.call(null,vec__38841,(3),null);var cv = cljs.core.nth.call(null,vec__38841,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__38852 = cljs.core.next.call(null,seq__38836__$1);
var G__38853 = null;
var G__38854 = (0);
var G__38855 = (0);
seq__38836 = G__38852;
chunk__38837 = G__38853;
count__38838 = G__38854;
i__38839 = G__38855;
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
