// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26666){var map__26667 = p__26666;var map__26667__$1 = ((cljs.core.seq_QMARK_.call(null,map__26667))?cljs.core.apply.call(null,cljs.core.hash_map,map__26667):map__26667);var t = cljs.core.get.call(null,map__26667__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26668){var map__26669 = p__26668;var map__26669__$1 = ((cljs.core.seq_QMARK_.call(null,map__26669))?cljs.core.apply.call(null,cljs.core.hash_map,map__26669):map__26669);var t = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26670){var map__26671 = p__26670;var map__26671__$1 = ((cljs.core.seq_QMARK_.call(null,map__26671))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);var t = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__26672,base,ctx){var map__26673 = p__26672;var map__26673__$1 = ((cljs.core.seq_QMARK_.call(null,map__26673))?cljs.core.apply.call(null,cljs.core.hash_map,map__26673):map__26673);var t = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__26674,w,h,ctx){var map__26680 = p__26674;var map__26680__$1 = ((cljs.core.seq_QMARK_.call(null,map__26680))?cljs.core.apply.call(null,cljs.core.hash_map,map__26680):map__26680);var info = map__26680__$1;var drawers = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__26681 = cljs.core.seq.call(null,drawers);var chunk__26682 = null;var count__26683 = (0);var i__26684 = (0);while(true){
if((i__26684 < count__26683))
{var drawer = cljs.core._nth.call(null,chunk__26682,i__26684);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__26685 = seq__26681;
var G__26686 = chunk__26682;
var G__26687 = count__26683;
var G__26688 = (i__26684 + (1));
seq__26681 = G__26685;
chunk__26682 = G__26686;
count__26683 = G__26687;
i__26684 = G__26688;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26681);if(temp__4126__auto__)
{var seq__26681__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26681__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26681__$1);{
var G__26689 = cljs.core.chunk_rest.call(null,seq__26681__$1);
var G__26690 = c__4307__auto__;
var G__26691 = cljs.core.count.call(null,c__4307__auto__);
var G__26692 = (0);
seq__26681 = G__26689;
chunk__26682 = G__26690;
count__26683 = G__26691;
i__26684 = G__26692;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__26681__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__26693 = cljs.core.next.call(null,seq__26681__$1);
var G__26694 = null;
var G__26695 = (0);
var G__26696 = (0);
seq__26681 = G__26693;
chunk__26682 = G__26694;
count__26683 = G__26695;
i__26684 = G__26696;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26697){var map__26698 = p__26697;var map__26698__$1 = ((cljs.core.seq_QMARK_.call(null,map__26698))?cljs.core.apply.call(null,cljs.core.hash_map,map__26698):map__26698);var line = cljs.core.get.call(null,map__26698__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26698__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26699){var map__26700 = p__26699;var map__26700__$1 = ((cljs.core.seq_QMARK_.call(null,map__26700))?cljs.core.apply.call(null,cljs.core.hash_map,map__26700):map__26700);var line = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26701){var map__26702 = p__26701;var map__26702__$1 = ((cljs.core.seq_QMARK_.call(null,map__26702))?cljs.core.apply.call(null,cljs.core.hash_map,map__26702):map__26702);var line = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__26703,base,ctx){var map__26704 = p__26703;var map__26704__$1 = ((cljs.core.seq_QMARK_.call(null,map__26704))?cljs.core.apply.call(null,cljs.core.hash_map,map__26704):map__26704);var line = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__26705 = base;var w = cljs.core.nth.call(null,vec__26705,(0),null);var h = cljs.core.nth.call(null,vec__26705,(1),null);var max_v = cljs.core.nth.call(null,vec__26705,(2),null);var min_v = cljs.core.nth.call(null,vec__26705,(3),null);var offset_v = cljs.core.nth.call(null,vec__26705,(4),null);var offset_x = cljs.core.nth.call(null,vec__26705,(5),null);var pos_y = cljs.core.nth.call(null,vec__26705,(6),null);var cnt = (6);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__26706_26718 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__26707_26719 = null;var count__26708_26720 = (0);var i__26709_26721 = (0);while(true){
if((i__26709_26721 < count__26708_26720))
{var i_26722 = cljs.core._nth.call(null,chunk__26707_26719,i__26709_26721);var v_26723 = (min_v + (i_26722 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26723.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_26723));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26723.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_26723));
ctx.moveTo((0),pos_y.call(null,v_26723));
ctx.lineTo(w,pos_y.call(null,v_26723));
{
var G__26724 = seq__26706_26718;
var G__26725 = chunk__26707_26719;
var G__26726 = count__26708_26720;
var G__26727 = (i__26709_26721 + (1));
seq__26706_26718 = G__26724;
chunk__26707_26719 = G__26725;
count__26708_26720 = G__26726;
i__26709_26721 = G__26727;
continue;
}
} else
{var temp__4126__auto___26728 = cljs.core.seq.call(null,seq__26706_26718);if(temp__4126__auto___26728)
{var seq__26706_26729__$1 = temp__4126__auto___26728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26706_26729__$1))
{var c__4307__auto___26730 = cljs.core.chunk_first.call(null,seq__26706_26729__$1);{
var G__26731 = cljs.core.chunk_rest.call(null,seq__26706_26729__$1);
var G__26732 = c__4307__auto___26730;
var G__26733 = cljs.core.count.call(null,c__4307__auto___26730);
var G__26734 = (0);
seq__26706_26718 = G__26731;
chunk__26707_26719 = G__26732;
count__26708_26720 = G__26733;
i__26709_26721 = G__26734;
continue;
}
} else
{var i_26735 = cljs.core.first.call(null,seq__26706_26729__$1);var v_26736 = (min_v + (i_26735 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26736.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_26736));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26736.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_26736));
ctx.moveTo((0),pos_y.call(null,v_26736));
ctx.lineTo(w,pos_y.call(null,v_26736));
{
var G__26737 = cljs.core.next.call(null,seq__26706_26729__$1);
var G__26738 = null;
var G__26739 = (0);
var G__26740 = (0);
seq__26706_26718 = G__26737;
chunk__26707_26719 = G__26738;
count__26708_26720 = G__26739;
i__26709_26721 = G__26740;
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
{var seq__26710_26741 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__26711_26742 = null;var count__26712_26743 = (0);var i__26713_26744 = (0);while(true){
if((i__26713_26744 < count__26712_26743))
{var i_26745 = cljs.core._nth.call(null,chunk__26711_26742,i__26713_26744);if((cljs.core.mod.call(null,i_26745,cntx) === (0)))
{var posx_26746 = ((offset_x / (2)) + (i_26745 * offset_x));ctx.moveTo(posx_26746,(0));
ctx.lineTo(posx_26746,h);
} else
{}
{
var G__26747 = seq__26710_26741;
var G__26748 = chunk__26711_26742;
var G__26749 = count__26712_26743;
var G__26750 = (i__26713_26744 + (1));
seq__26710_26741 = G__26747;
chunk__26711_26742 = G__26748;
count__26712_26743 = G__26749;
i__26713_26744 = G__26750;
continue;
}
} else
{var temp__4126__auto___26751 = cljs.core.seq.call(null,seq__26710_26741);if(temp__4126__auto___26751)
{var seq__26710_26752__$1 = temp__4126__auto___26751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26710_26752__$1))
{var c__4307__auto___26753 = cljs.core.chunk_first.call(null,seq__26710_26752__$1);{
var G__26754 = cljs.core.chunk_rest.call(null,seq__26710_26752__$1);
var G__26755 = c__4307__auto___26753;
var G__26756 = cljs.core.count.call(null,c__4307__auto___26753);
var G__26757 = (0);
seq__26710_26741 = G__26754;
chunk__26711_26742 = G__26755;
count__26712_26743 = G__26756;
i__26713_26744 = G__26757;
continue;
}
} else
{var i_26758 = cljs.core.first.call(null,seq__26710_26752__$1);if((cljs.core.mod.call(null,i_26758,cntx) === (0)))
{var posx_26759 = ((offset_x / (2)) + (i_26758 * offset_x));ctx.moveTo(posx_26759,(0));
ctx.lineTo(posx_26759,h);
} else
{}
{
var G__26760 = cljs.core.next.call(null,seq__26710_26752__$1);
var G__26761 = null;
var G__26762 = (0);
var G__26763 = (0);
seq__26710_26741 = G__26760;
chunk__26711_26742 = G__26761;
count__26712_26743 = G__26762;
i__26713_26744 = G__26763;
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
{var seq__26714_26764 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__26715_26765 = null;var count__26716_26766 = (0);var i__26717_26767 = (0);while(true){
if((i__26717_26767 < count__26716_26766))
{var i_26768 = cljs.core._nth.call(null,chunk__26715_26765,i__26717_26767);if((cljs.core.mod.call(null,i_26768,cntx) === (0)))
{var posx_26769 = ((offset_x / (2)) + (i_26768 * offset_x));ctx.moveTo(posx_26769,(0));
ctx.lineTo(posx_26769,h);
} else
{}
{
var G__26770 = seq__26714_26764;
var G__26771 = chunk__26715_26765;
var G__26772 = count__26716_26766;
var G__26773 = (i__26717_26767 + (1));
seq__26714_26764 = G__26770;
chunk__26715_26765 = G__26771;
count__26716_26766 = G__26772;
i__26717_26767 = G__26773;
continue;
}
} else
{var temp__4126__auto___26774 = cljs.core.seq.call(null,seq__26714_26764);if(temp__4126__auto___26774)
{var seq__26714_26775__$1 = temp__4126__auto___26774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26714_26775__$1))
{var c__4307__auto___26776 = cljs.core.chunk_first.call(null,seq__26714_26775__$1);{
var G__26777 = cljs.core.chunk_rest.call(null,seq__26714_26775__$1);
var G__26778 = c__4307__auto___26776;
var G__26779 = cljs.core.count.call(null,c__4307__auto___26776);
var G__26780 = (0);
seq__26714_26764 = G__26777;
chunk__26715_26765 = G__26778;
count__26716_26766 = G__26779;
i__26717_26767 = G__26780;
continue;
}
} else
{var i_26781 = cljs.core.first.call(null,seq__26714_26775__$1);if((cljs.core.mod.call(null,i_26781,cntx) === (0)))
{var posx_26782 = ((offset_x / (2)) + (i_26781 * offset_x));ctx.moveTo(posx_26782,(0));
ctx.lineTo(posx_26782,h);
} else
{}
{
var G__26783 = cljs.core.next.call(null,seq__26714_26775__$1);
var G__26784 = null;
var G__26785 = (0);
var G__26786 = (0);
seq__26714_26764 = G__26783;
chunk__26715_26765 = G__26784;
count__26716_26766 = G__26785;
i__26717_26767 = G__26786;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26787){var map__26788 = p__26787;var map__26788__$1 = ((cljs.core.seq_QMARK_.call(null,map__26788))?cljs.core.apply.call(null,cljs.core.hash_map,map__26788):map__26788);var line = cljs.core.get.call(null,map__26788__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26789){var map__26790 = p__26789;var map__26790__$1 = ((cljs.core.seq_QMARK_.call(null,map__26790))?cljs.core.apply.call(null,cljs.core.hash_map,map__26790):map__26790);var line = cljs.core.get.call(null,map__26790__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26791){var map__26792 = p__26791;var map__26792__$1 = ((cljs.core.seq_QMARK_.call(null,map__26792))?cljs.core.apply.call(null,cljs.core.hash_map,map__26792):map__26792);var line = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26793,base,ctx){var map__26794 = p__26793;var map__26794__$1 = ((cljs.core.seq_QMARK_.call(null,map__26794))?cljs.core.apply.call(null,cljs.core.hash_map,map__26794):map__26794);var line = cljs.core.get.call(null,map__26794__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__26794__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__26794__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__26794__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__26795 = base;var w = cljs.core.nth.call(null,vec__26795,(0),null);var h = cljs.core.nth.call(null,vec__26795,(1),null);var max_v = cljs.core.nth.call(null,vec__26795,(2),null);var min_v = cljs.core.nth.call(null,vec__26795,(3),null);var offset_v = cljs.core.nth.call(null,vec__26795,(4),null);var offset_x = cljs.core.nth.call(null,vec__26795,(5),null);var pos_y = cljs.core.nth.call(null,vec__26795,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__26796 = cljs.core._EQ_;var expr__26797 = style;if(cljs.core.truth_(pred__26796.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__26797)))
{(ctx["fillStyle"] = color);
var seq__26799 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__26800 = null;var count__26801 = (0);var i__26802 = (0);while(true){
if((i__26802 < count__26801))
{var vec__26803 = cljs.core._nth.call(null,chunk__26800,i__26802);var idx = cljs.core.nth.call(null,vec__26803,(0),null);var value = cljs.core.nth.call(null,vec__26803,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__26811 = seq__26799;
var G__26812 = chunk__26800;
var G__26813 = count__26801;
var G__26814 = (i__26802 + (1));
seq__26799 = G__26811;
chunk__26800 = G__26812;
count__26801 = G__26813;
i__26802 = G__26814;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26799);if(temp__4126__auto__)
{var seq__26799__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26799__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26799__$1);{
var G__26815 = cljs.core.chunk_rest.call(null,seq__26799__$1);
var G__26816 = c__4307__auto__;
var G__26817 = cljs.core.count.call(null,c__4307__auto__);
var G__26818 = (0);
seq__26799 = G__26815;
chunk__26800 = G__26816;
count__26801 = G__26817;
i__26802 = G__26818;
continue;
}
} else
{var vec__26804 = cljs.core.first.call(null,seq__26799__$1);var idx = cljs.core.nth.call(null,vec__26804,(0),null);var value = cljs.core.nth.call(null,vec__26804,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__26819 = cljs.core.next.call(null,seq__26799__$1);
var G__26820 = null;
var G__26821 = (0);
var G__26822 = (0);
seq__26799 = G__26819;
chunk__26800 = G__26820;
count__26801 = G__26821;
i__26802 = G__26822;
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
var seq__26805_26823 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__26796,expr__26797,vec__26795,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__26794,map__26794__$1,line,color,offset,style){
return (function() { 
var G__26827__delegate = function (args){return args;
};
var G__26827 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26827__delegate.call(this,args);};
G__26827.cljs$lang$maxFixedArity = 0;
G__26827.cljs$lang$applyTo = (function (arglist__26828){
var args = cljs.core.seq(arglist__26828);
return G__26827__delegate(args);
});
G__26827.cljs$core$IFn$_invoke$arity$variadic = G__26827__delegate;
return G__26827;
})()
;})(pred__26796,expr__26797,vec__26795,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__26794,map__26794__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__26806_26824 = null;var count__26807_26825 = (0);var i__26808_26826 = (0);while(true){
if((i__26808_26826 < count__26807_26825))
{var vec__26809_26829 = cljs.core._nth.call(null,chunk__26806_26824,i__26808_26826);var idx_26830 = cljs.core.nth.call(null,vec__26809_26829,(0),null);var prev_26831 = cljs.core.nth.call(null,vec__26809_26829,(1),null);var curr_26832 = cljs.core.nth.call(null,vec__26809_26829,(2),null);ctx.moveTo(((idx_26830 + offset__$1) * offset_x),pos_y.call(null,prev_26831));
ctx.lineTo((((idx_26830 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_26832));
{
var G__26833 = seq__26805_26823;
var G__26834 = chunk__26806_26824;
var G__26835 = count__26807_26825;
var G__26836 = (i__26808_26826 + (1));
seq__26805_26823 = G__26833;
chunk__26806_26824 = G__26834;
count__26807_26825 = G__26835;
i__26808_26826 = G__26836;
continue;
}
} else
{var temp__4126__auto___26837 = cljs.core.seq.call(null,seq__26805_26823);if(temp__4126__auto___26837)
{var seq__26805_26838__$1 = temp__4126__auto___26837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26805_26838__$1))
{var c__4307__auto___26839 = cljs.core.chunk_first.call(null,seq__26805_26838__$1);{
var G__26840 = cljs.core.chunk_rest.call(null,seq__26805_26838__$1);
var G__26841 = c__4307__auto___26839;
var G__26842 = cljs.core.count.call(null,c__4307__auto___26839);
var G__26843 = (0);
seq__26805_26823 = G__26840;
chunk__26806_26824 = G__26841;
count__26807_26825 = G__26842;
i__26808_26826 = G__26843;
continue;
}
} else
{var vec__26810_26844 = cljs.core.first.call(null,seq__26805_26838__$1);var idx_26845 = cljs.core.nth.call(null,vec__26810_26844,(0),null);var prev_26846 = cljs.core.nth.call(null,vec__26810_26844,(1),null);var curr_26847 = cljs.core.nth.call(null,vec__26810_26844,(2),null);ctx.moveTo(((idx_26845 + offset__$1) * offset_x),pos_y.call(null,prev_26846));
ctx.lineTo((((idx_26845 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_26847));
{
var G__26848 = cljs.core.next.call(null,seq__26805_26838__$1);
var G__26849 = null;
var G__26850 = (0);
var G__26851 = (0);
seq__26805_26823 = G__26848;
chunk__26806_26824 = G__26849;
count__26807_26825 = G__26850;
i__26808_26826 = G__26851;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26852){var map__26853 = p__26852;var map__26853__$1 = ((cljs.core.seq_QMARK_.call(null,map__26853))?cljs.core.apply.call(null,cljs.core.hash_map,map__26853):map__26853);var kline = cljs.core.get.call(null,map__26853__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26854){var map__26855 = p__26854;var map__26855__$1 = ((cljs.core.seq_QMARK_.call(null,map__26855))?cljs.core.apply.call(null,cljs.core.hash_map,map__26855):map__26855);var kline = cljs.core.get.call(null,map__26855__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26856){var map__26857 = p__26856;var map__26857__$1 = ((cljs.core.seq_QMARK_.call(null,map__26857))?cljs.core.apply.call(null,cljs.core.hash_map,map__26857):map__26857);var kline = cljs.core.get.call(null,map__26857__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__26858,base,ctx){var map__26859 = p__26858;var map__26859__$1 = ((cljs.core.seq_QMARK_.call(null,map__26859))?cljs.core.apply.call(null,cljs.core.hash_map,map__26859):map__26859);var kline = cljs.core.get.call(null,map__26859__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__26859__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__26860 = base;var w = cljs.core.nth.call(null,vec__26860,(0),null);var h = cljs.core.nth.call(null,vec__26860,(1),null);var max_v = cljs.core.nth.call(null,vec__26860,(2),null);var min_v = cljs.core.nth.call(null,vec__26860,(3),null);var offset_v = cljs.core.nth.call(null,vec__26860,(4),null);var offset_x = cljs.core.nth.call(null,vec__26860,(5),null);var pos_y = cljs.core.nth.call(null,vec__26860,(6),null);(ctx["fillStyle"] = "black");
var seq__26861 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__26860,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26859,map__26859__$1,kline,info){
return (function() { 
var G__26869__delegate = function (args){return args;
};
var G__26869 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26869__delegate.call(this,args);};
G__26869.cljs$lang$maxFixedArity = 0;
G__26869.cljs$lang$applyTo = (function (arglist__26870){
var args = cljs.core.seq(arglist__26870);
return G__26869__delegate(args);
});
G__26869.cljs$core$IFn$_invoke$arity$variadic = G__26869__delegate;
return G__26869;
})()
;})(vec__26860,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26859,map__26859__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__26862 = null;var count__26863 = (0);var i__26864 = (0);while(true){
if((i__26864 < count__26863))
{var vec__26865 = cljs.core._nth.call(null,chunk__26862,i__26864);var idx = cljs.core.nth.call(null,vec__26865,(0),null);var vec__26866 = cljs.core.nth.call(null,vec__26865,(1),null);var date = cljs.core.nth.call(null,vec__26866,(0),null);var open = cljs.core.nth.call(null,vec__26866,(1),null);var high = cljs.core.nth.call(null,vec__26866,(2),null);var low = cljs.core.nth.call(null,vec__26866,(3),null);var close = cljs.core.nth.call(null,vec__26866,(4),null);var volume = cljs.core.nth.call(null,vec__26866,(5),null);var info__$1 = cljs.core.nth.call(null,vec__26865,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__26871 = seq__26861;
var G__26872 = chunk__26862;
var G__26873 = count__26863;
var G__26874 = (i__26864 + (1));
seq__26861 = G__26871;
chunk__26862 = G__26872;
count__26863 = G__26873;
i__26864 = G__26874;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26861);if(temp__4126__auto__)
{var seq__26861__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26861__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26861__$1);{
var G__26875 = cljs.core.chunk_rest.call(null,seq__26861__$1);
var G__26876 = c__4307__auto__;
var G__26877 = cljs.core.count.call(null,c__4307__auto__);
var G__26878 = (0);
seq__26861 = G__26875;
chunk__26862 = G__26876;
count__26863 = G__26877;
i__26864 = G__26878;
continue;
}
} else
{var vec__26867 = cljs.core.first.call(null,seq__26861__$1);var idx = cljs.core.nth.call(null,vec__26867,(0),null);var vec__26868 = cljs.core.nth.call(null,vec__26867,(1),null);var date = cljs.core.nth.call(null,vec__26868,(0),null);var open = cljs.core.nth.call(null,vec__26868,(1),null);var high = cljs.core.nth.call(null,vec__26868,(2),null);var low = cljs.core.nth.call(null,vec__26868,(3),null);var close = cljs.core.nth.call(null,vec__26868,(4),null);var volume = cljs.core.nth.call(null,vec__26868,(5),null);var info__$1 = cljs.core.nth.call(null,vec__26867,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__26879 = cljs.core.next.call(null,seq__26861__$1);
var G__26880 = null;
var G__26881 = (0);
var G__26882 = (0);
seq__26861 = G__26879;
chunk__26862 = G__26880;
count__26863 = G__26881;
i__26864 = G__26882;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__26883){var map__26884 = p__26883;var map__26884__$1 = ((cljs.core.seq_QMARK_.call(null,map__26884))?cljs.core.apply.call(null,cljs.core.hash_map,map__26884):map__26884);var cz = cljs.core.get.call(null,map__26884__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__26885){var map__26886 = p__26885;var map__26886__$1 = ((cljs.core.seq_QMARK_.call(null,map__26886))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);var cz = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__26887,base,ctx){var map__26888 = p__26887;var map__26888__$1 = ((cljs.core.seq_QMARK_.call(null,map__26888))?cljs.core.apply.call(null,cljs.core.hash_map,map__26888):map__26888);var cz = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__26889 = base;var w = cljs.core.nth.call(null,vec__26889,(0),null);var h = cljs.core.nth.call(null,vec__26889,(1),null);var max_v = cljs.core.nth.call(null,vec__26889,(2),null);var min_v = cljs.core.nth.call(null,vec__26889,(3),null);var offset_v = cljs.core.nth.call(null,vec__26889,(4),null);var offset_x = cljs.core.nth.call(null,vec__26889,(5),null);var pos_y = cljs.core.nth.call(null,vec__26889,(6),null);var proj_x = ((function (vec__26889,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26888,map__26888__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__26889,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__26888,map__26888__$1,cz,vz,color))
;var proj_y = ((function (vec__26889,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__26888,map__26888__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__26889,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__26888,map__26888__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__26890 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__26889,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__26888,map__26888__$1,cz,vz,color){
return (function() { 
var G__26896__delegate = function (args){return args;
};
var G__26896 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26896__delegate.call(this,args);};
G__26896.cljs$lang$maxFixedArity = 0;
G__26896.cljs$lang$applyTo = (function (arglist__26897){
var args = cljs.core.seq(arglist__26897);
return G__26896__delegate(args);
});
G__26896.cljs$core$IFn$_invoke$arity$variadic = G__26896__delegate;
return G__26896;
})()
;})(vec__26889,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__26888,map__26888__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__26891 = null;var count__26892 = (0);var i__26893 = (0);while(true){
if((i__26893 < count__26892))
{var vec__26894 = cljs.core._nth.call(null,chunk__26891,i__26893);var idx = cljs.core.nth.call(null,vec__26894,(0),null);var pc = cljs.core.nth.call(null,vec__26894,(1),null);var cc = cljs.core.nth.call(null,vec__26894,(2),null);var pv = cljs.core.nth.call(null,vec__26894,(3),null);var cv = cljs.core.nth.call(null,vec__26894,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__26898 = seq__26890;
var G__26899 = chunk__26891;
var G__26900 = count__26892;
var G__26901 = (i__26893 + (1));
seq__26890 = G__26898;
chunk__26891 = G__26899;
count__26892 = G__26900;
i__26893 = G__26901;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26890);if(temp__4126__auto__)
{var seq__26890__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26890__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__26890__$1);{
var G__26902 = cljs.core.chunk_rest.call(null,seq__26890__$1);
var G__26903 = c__4307__auto__;
var G__26904 = cljs.core.count.call(null,c__4307__auto__);
var G__26905 = (0);
seq__26890 = G__26902;
chunk__26891 = G__26903;
count__26892 = G__26904;
i__26893 = G__26905;
continue;
}
} else
{var vec__26895 = cljs.core.first.call(null,seq__26890__$1);var idx = cljs.core.nth.call(null,vec__26895,(0),null);var pc = cljs.core.nth.call(null,vec__26895,(1),null);var cc = cljs.core.nth.call(null,vec__26895,(2),null);var pv = cljs.core.nth.call(null,vec__26895,(3),null);var cv = cljs.core.nth.call(null,vec__26895,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__26906 = cljs.core.next.call(null,seq__26890__$1);
var G__26907 = null;
var G__26908 = (0);
var G__26909 = (0);
seq__26890 = G__26906;
chunk__26891 = G__26907;
count__26892 = G__26908;
i__26893 = G__26909;
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
