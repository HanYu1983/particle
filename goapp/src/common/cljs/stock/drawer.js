// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12677){var map__12678 = p__12677;var map__12678__$1 = ((cljs.core.seq_QMARK_.call(null,map__12678))?cljs.core.apply.call(null,cljs.core.hash_map,map__12678):map__12678);var t = cljs.core.get.call(null,map__12678__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12679){var map__12680 = p__12679;var map__12680__$1 = ((cljs.core.seq_QMARK_.call(null,map__12680))?cljs.core.apply.call(null,cljs.core.hash_map,map__12680):map__12680);var t = cljs.core.get.call(null,map__12680__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12681){var map__12682 = p__12681;var map__12682__$1 = ((cljs.core.seq_QMARK_.call(null,map__12682))?cljs.core.apply.call(null,cljs.core.hash_map,map__12682):map__12682);var t = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__12683,base,ctx){var map__12684 = p__12683;var map__12684__$1 = ((cljs.core.seq_QMARK_.call(null,map__12684))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684):map__12684);var t = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__12685,w,h,ctx){var map__12691 = p__12685;var map__12691__$1 = ((cljs.core.seq_QMARK_.call(null,map__12691))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);var info = map__12691__$1;var drawers = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__12692 = cljs.core.seq.call(null,drawers);var chunk__12693 = null;var count__12694 = (0);var i__12695 = (0);while(true){
if((i__12695 < count__12694))
{var drawer = cljs.core._nth.call(null,chunk__12693,i__12695);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__12696 = seq__12692;
var G__12697 = chunk__12693;
var G__12698 = count__12694;
var G__12699 = (i__12695 + (1));
seq__12692 = G__12696;
chunk__12693 = G__12697;
count__12694 = G__12698;
i__12695 = G__12699;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12692);if(temp__4126__auto__)
{var seq__12692__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12692__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12692__$1);{
var G__12700 = cljs.core.chunk_rest.call(null,seq__12692__$1);
var G__12701 = c__4307__auto__;
var G__12702 = cljs.core.count.call(null,c__4307__auto__);
var G__12703 = (0);
seq__12692 = G__12700;
chunk__12693 = G__12701;
count__12694 = G__12702;
i__12695 = G__12703;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__12692__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__12704 = cljs.core.next.call(null,seq__12692__$1);
var G__12705 = null;
var G__12706 = (0);
var G__12707 = (0);
seq__12692 = G__12704;
chunk__12693 = G__12705;
count__12694 = G__12706;
i__12695 = G__12707;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12708){var map__12709 = p__12708;var map__12709__$1 = ((cljs.core.seq_QMARK_.call(null,map__12709))?cljs.core.apply.call(null,cljs.core.hash_map,map__12709):map__12709);var line = cljs.core.get.call(null,map__12709__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12709__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12710){var map__12711 = p__12710;var map__12711__$1 = ((cljs.core.seq_QMARK_.call(null,map__12711))?cljs.core.apply.call(null,cljs.core.hash_map,map__12711):map__12711);var line = cljs.core.get.call(null,map__12711__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12711__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12712){var map__12713 = p__12712;var map__12713__$1 = ((cljs.core.seq_QMARK_.call(null,map__12713))?cljs.core.apply.call(null,cljs.core.hash_map,map__12713):map__12713);var line = cljs.core.get.call(null,map__12713__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12713__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__12714,base,ctx){var map__12715 = p__12714;var map__12715__$1 = ((cljs.core.seq_QMARK_.call(null,map__12715))?cljs.core.apply.call(null,cljs.core.hash_map,map__12715):map__12715);var line = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var centerY = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));var vec__12716 = base;var w = cljs.core.nth.call(null,vec__12716,(0),null);var h = cljs.core.nth.call(null,vec__12716,(1),null);var max_v = cljs.core.nth.call(null,vec__12716,(2),null);var min_v = cljs.core.nth.call(null,vec__12716,(3),null);var offset_v = cljs.core.nth.call(null,vec__12716,(4),null);var offset_x = cljs.core.nth.call(null,vec__12716,(5),null);var pos_y = cljs.core.nth.call(null,vec__12716,(6),null);var cnt = (10);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__12717_12729 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__12718_12730 = null;var count__12719_12731 = (0);var i__12720_12732 = (0);while(true){
if((i__12720_12732 < count__12719_12731))
{var i_12733 = cljs.core._nth.call(null,chunk__12718_12730,i__12720_12732);var v_12734 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_12733 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12734.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12734));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12734.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12734));
ctx.moveTo((0),pos_y.call(null,v_12734));
ctx.lineTo(w,pos_y.call(null,v_12734));
var v_12735 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_12733 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12735.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12735));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12735.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12735));
ctx.moveTo((0),pos_y.call(null,v_12735));
ctx.lineTo(w,pos_y.call(null,v_12735));
{
var G__12736 = seq__12717_12729;
var G__12737 = chunk__12718_12730;
var G__12738 = count__12719_12731;
var G__12739 = (i__12720_12732 + (1));
seq__12717_12729 = G__12736;
chunk__12718_12730 = G__12737;
count__12719_12731 = G__12738;
i__12720_12732 = G__12739;
continue;
}
} else
{var temp__4126__auto___12740 = cljs.core.seq.call(null,seq__12717_12729);if(temp__4126__auto___12740)
{var seq__12717_12741__$1 = temp__4126__auto___12740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12717_12741__$1))
{var c__4307__auto___12742 = cljs.core.chunk_first.call(null,seq__12717_12741__$1);{
var G__12743 = cljs.core.chunk_rest.call(null,seq__12717_12741__$1);
var G__12744 = c__4307__auto___12742;
var G__12745 = cljs.core.count.call(null,c__4307__auto___12742);
var G__12746 = (0);
seq__12717_12729 = G__12743;
chunk__12718_12730 = G__12744;
count__12719_12731 = G__12745;
i__12720_12732 = G__12746;
continue;
}
} else
{var i_12747 = cljs.core.first.call(null,seq__12717_12741__$1);var v_12748 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_12747 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12748.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12748));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12748.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12748));
ctx.moveTo((0),pos_y.call(null,v_12748));
ctx.lineTo(w,pos_y.call(null,v_12748));
var v_12749 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_12747 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12749.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_12749));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12749.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_12749));
ctx.moveTo((0),pos_y.call(null,v_12749));
ctx.lineTo(w,pos_y.call(null,v_12749));
{
var G__12750 = cljs.core.next.call(null,seq__12717_12741__$1);
var G__12751 = null;
var G__12752 = (0);
var G__12753 = (0);
seq__12717_12729 = G__12750;
chunk__12718_12730 = G__12751;
count__12719_12731 = G__12752;
i__12720_12732 = G__12753;
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
{var seq__12721_12754 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__12722_12755 = null;var count__12723_12756 = (0);var i__12724_12757 = (0);while(true){
if((i__12724_12757 < count__12723_12756))
{var i_12758 = cljs.core._nth.call(null,chunk__12722_12755,i__12724_12757);if((cljs.core.mod.call(null,i_12758,cntx) === (0)))
{var posx_12759 = ((offset_x / (2)) + (i_12758 * offset_x));ctx.moveTo(posx_12759,(0));
ctx.lineTo(posx_12759,h);
} else
{}
{
var G__12760 = seq__12721_12754;
var G__12761 = chunk__12722_12755;
var G__12762 = count__12723_12756;
var G__12763 = (i__12724_12757 + (1));
seq__12721_12754 = G__12760;
chunk__12722_12755 = G__12761;
count__12723_12756 = G__12762;
i__12724_12757 = G__12763;
continue;
}
} else
{var temp__4126__auto___12764 = cljs.core.seq.call(null,seq__12721_12754);if(temp__4126__auto___12764)
{var seq__12721_12765__$1 = temp__4126__auto___12764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12721_12765__$1))
{var c__4307__auto___12766 = cljs.core.chunk_first.call(null,seq__12721_12765__$1);{
var G__12767 = cljs.core.chunk_rest.call(null,seq__12721_12765__$1);
var G__12768 = c__4307__auto___12766;
var G__12769 = cljs.core.count.call(null,c__4307__auto___12766);
var G__12770 = (0);
seq__12721_12754 = G__12767;
chunk__12722_12755 = G__12768;
count__12723_12756 = G__12769;
i__12724_12757 = G__12770;
continue;
}
} else
{var i_12771 = cljs.core.first.call(null,seq__12721_12765__$1);if((cljs.core.mod.call(null,i_12771,cntx) === (0)))
{var posx_12772 = ((offset_x / (2)) + (i_12771 * offset_x));ctx.moveTo(posx_12772,(0));
ctx.lineTo(posx_12772,h);
} else
{}
{
var G__12773 = cljs.core.next.call(null,seq__12721_12765__$1);
var G__12774 = null;
var G__12775 = (0);
var G__12776 = (0);
seq__12721_12754 = G__12773;
chunk__12722_12755 = G__12774;
count__12723_12756 = G__12775;
i__12724_12757 = G__12776;
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
{var seq__12725_12777 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__12726_12778 = null;var count__12727_12779 = (0);var i__12728_12780 = (0);while(true){
if((i__12728_12780 < count__12727_12779))
{var i_12781 = cljs.core._nth.call(null,chunk__12726_12778,i__12728_12780);if((cljs.core.mod.call(null,i_12781,cntx) === (0)))
{var posx_12782 = ((offset_x / (2)) + (i_12781 * offset_x));ctx.moveTo(posx_12782,(0));
ctx.lineTo(posx_12782,h);
} else
{}
{
var G__12783 = seq__12725_12777;
var G__12784 = chunk__12726_12778;
var G__12785 = count__12727_12779;
var G__12786 = (i__12728_12780 + (1));
seq__12725_12777 = G__12783;
chunk__12726_12778 = G__12784;
count__12727_12779 = G__12785;
i__12728_12780 = G__12786;
continue;
}
} else
{var temp__4126__auto___12787 = cljs.core.seq.call(null,seq__12725_12777);if(temp__4126__auto___12787)
{var seq__12725_12788__$1 = temp__4126__auto___12787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12725_12788__$1))
{var c__4307__auto___12789 = cljs.core.chunk_first.call(null,seq__12725_12788__$1);{
var G__12790 = cljs.core.chunk_rest.call(null,seq__12725_12788__$1);
var G__12791 = c__4307__auto___12789;
var G__12792 = cljs.core.count.call(null,c__4307__auto___12789);
var G__12793 = (0);
seq__12725_12777 = G__12790;
chunk__12726_12778 = G__12791;
count__12727_12779 = G__12792;
i__12728_12780 = G__12793;
continue;
}
} else
{var i_12794 = cljs.core.first.call(null,seq__12725_12788__$1);if((cljs.core.mod.call(null,i_12794,cntx) === (0)))
{var posx_12795 = ((offset_x / (2)) + (i_12794 * offset_x));ctx.moveTo(posx_12795,(0));
ctx.lineTo(posx_12795,h);
} else
{}
{
var G__12796 = cljs.core.next.call(null,seq__12725_12788__$1);
var G__12797 = null;
var G__12798 = (0);
var G__12799 = (0);
seq__12725_12777 = G__12796;
chunk__12726_12778 = G__12797;
count__12727_12779 = G__12798;
i__12728_12780 = G__12799;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12800){var map__12801 = p__12800;var map__12801__$1 = ((cljs.core.seq_QMARK_.call(null,map__12801))?cljs.core.apply.call(null,cljs.core.hash_map,map__12801):map__12801);var line = cljs.core.get.call(null,map__12801__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12802){var map__12803 = p__12802;var map__12803__$1 = ((cljs.core.seq_QMARK_.call(null,map__12803))?cljs.core.apply.call(null,cljs.core.hash_map,map__12803):map__12803);var line = cljs.core.get.call(null,map__12803__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12804){var map__12805 = p__12804;var map__12805__$1 = ((cljs.core.seq_QMARK_.call(null,map__12805))?cljs.core.apply.call(null,cljs.core.hash_map,map__12805):map__12805);var line = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12806,base,ctx){var map__12807 = p__12806;var map__12807__$1 = ((cljs.core.seq_QMARK_.call(null,map__12807))?cljs.core.apply.call(null,cljs.core.hash_map,map__12807):map__12807);var line = cljs.core.get.call(null,map__12807__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__12807__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__12807__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__12807__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__12808 = base;var w = cljs.core.nth.call(null,vec__12808,(0),null);var h = cljs.core.nth.call(null,vec__12808,(1),null);var max_v = cljs.core.nth.call(null,vec__12808,(2),null);var min_v = cljs.core.nth.call(null,vec__12808,(3),null);var offset_v = cljs.core.nth.call(null,vec__12808,(4),null);var offset_x = cljs.core.nth.call(null,vec__12808,(5),null);var pos_y = cljs.core.nth.call(null,vec__12808,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__12809 = cljs.core._EQ_;var expr__12810 = style;if(cljs.core.truth_(pred__12809.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__12810)))
{(ctx["fillStyle"] = color);
var seq__12812 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__12813 = null;var count__12814 = (0);var i__12815 = (0);while(true){
if((i__12815 < count__12814))
{var vec__12816 = cljs.core._nth.call(null,chunk__12813,i__12815);var idx = cljs.core.nth.call(null,vec__12816,(0),null);var value = cljs.core.nth.call(null,vec__12816,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__12824 = seq__12812;
var G__12825 = chunk__12813;
var G__12826 = count__12814;
var G__12827 = (i__12815 + (1));
seq__12812 = G__12824;
chunk__12813 = G__12825;
count__12814 = G__12826;
i__12815 = G__12827;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12812);if(temp__4126__auto__)
{var seq__12812__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12812__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12812__$1);{
var G__12828 = cljs.core.chunk_rest.call(null,seq__12812__$1);
var G__12829 = c__4307__auto__;
var G__12830 = cljs.core.count.call(null,c__4307__auto__);
var G__12831 = (0);
seq__12812 = G__12828;
chunk__12813 = G__12829;
count__12814 = G__12830;
i__12815 = G__12831;
continue;
}
} else
{var vec__12817 = cljs.core.first.call(null,seq__12812__$1);var idx = cljs.core.nth.call(null,vec__12817,(0),null);var value = cljs.core.nth.call(null,vec__12817,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__12832 = cljs.core.next.call(null,seq__12812__$1);
var G__12833 = null;
var G__12834 = (0);
var G__12835 = (0);
seq__12812 = G__12832;
chunk__12813 = G__12833;
count__12814 = G__12834;
i__12815 = G__12835;
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
var seq__12818_12836 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__12809,expr__12810,vec__12808,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__12807,map__12807__$1,line,color,offset,style){
return (function() { 
var G__12840__delegate = function (args){return args;
};
var G__12840 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12840__delegate.call(this,args);};
G__12840.cljs$lang$maxFixedArity = 0;
G__12840.cljs$lang$applyTo = (function (arglist__12841){
var args = cljs.core.seq(arglist__12841);
return G__12840__delegate(args);
});
G__12840.cljs$core$IFn$_invoke$arity$variadic = G__12840__delegate;
return G__12840;
})()
;})(pred__12809,expr__12810,vec__12808,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__12807,map__12807__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__12819_12837 = null;var count__12820_12838 = (0);var i__12821_12839 = (0);while(true){
if((i__12821_12839 < count__12820_12838))
{var vec__12822_12842 = cljs.core._nth.call(null,chunk__12819_12837,i__12821_12839);var idx_12843 = cljs.core.nth.call(null,vec__12822_12842,(0),null);var prev_12844 = cljs.core.nth.call(null,vec__12822_12842,(1),null);var curr_12845 = cljs.core.nth.call(null,vec__12822_12842,(2),null);ctx.moveTo(((idx_12843 + offset__$1) * offset_x),pos_y.call(null,prev_12844));
ctx.lineTo((((idx_12843 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_12845));
{
var G__12846 = seq__12818_12836;
var G__12847 = chunk__12819_12837;
var G__12848 = count__12820_12838;
var G__12849 = (i__12821_12839 + (1));
seq__12818_12836 = G__12846;
chunk__12819_12837 = G__12847;
count__12820_12838 = G__12848;
i__12821_12839 = G__12849;
continue;
}
} else
{var temp__4126__auto___12850 = cljs.core.seq.call(null,seq__12818_12836);if(temp__4126__auto___12850)
{var seq__12818_12851__$1 = temp__4126__auto___12850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12818_12851__$1))
{var c__4307__auto___12852 = cljs.core.chunk_first.call(null,seq__12818_12851__$1);{
var G__12853 = cljs.core.chunk_rest.call(null,seq__12818_12851__$1);
var G__12854 = c__4307__auto___12852;
var G__12855 = cljs.core.count.call(null,c__4307__auto___12852);
var G__12856 = (0);
seq__12818_12836 = G__12853;
chunk__12819_12837 = G__12854;
count__12820_12838 = G__12855;
i__12821_12839 = G__12856;
continue;
}
} else
{var vec__12823_12857 = cljs.core.first.call(null,seq__12818_12851__$1);var idx_12858 = cljs.core.nth.call(null,vec__12823_12857,(0),null);var prev_12859 = cljs.core.nth.call(null,vec__12823_12857,(1),null);var curr_12860 = cljs.core.nth.call(null,vec__12823_12857,(2),null);ctx.moveTo(((idx_12858 + offset__$1) * offset_x),pos_y.call(null,prev_12859));
ctx.lineTo((((idx_12858 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_12860));
{
var G__12861 = cljs.core.next.call(null,seq__12818_12851__$1);
var G__12862 = null;
var G__12863 = (0);
var G__12864 = (0);
seq__12818_12836 = G__12861;
chunk__12819_12837 = G__12862;
count__12820_12838 = G__12863;
i__12821_12839 = G__12864;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12865){var map__12866 = p__12865;var map__12866__$1 = ((cljs.core.seq_QMARK_.call(null,map__12866))?cljs.core.apply.call(null,cljs.core.hash_map,map__12866):map__12866);var kline = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12867){var map__12868 = p__12867;var map__12868__$1 = ((cljs.core.seq_QMARK_.call(null,map__12868))?cljs.core.apply.call(null,cljs.core.hash_map,map__12868):map__12868);var kline = cljs.core.get.call(null,map__12868__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12869){var map__12870 = p__12869;var map__12870__$1 = ((cljs.core.seq_QMARK_.call(null,map__12870))?cljs.core.apply.call(null,cljs.core.hash_map,map__12870):map__12870);var kline = cljs.core.get.call(null,map__12870__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__12871,base,ctx){var map__12872 = p__12871;var map__12872__$1 = ((cljs.core.seq_QMARK_.call(null,map__12872))?cljs.core.apply.call(null,cljs.core.hash_map,map__12872):map__12872);var kline = cljs.core.get.call(null,map__12872__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__12872__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__12873 = base;var w = cljs.core.nth.call(null,vec__12873,(0),null);var h = cljs.core.nth.call(null,vec__12873,(1),null);var max_v = cljs.core.nth.call(null,vec__12873,(2),null);var min_v = cljs.core.nth.call(null,vec__12873,(3),null);var offset_v = cljs.core.nth.call(null,vec__12873,(4),null);var offset_x = cljs.core.nth.call(null,vec__12873,(5),null);var pos_y = cljs.core.nth.call(null,vec__12873,(6),null);(ctx["fillStyle"] = "black");
var seq__12874 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12873,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12872,map__12872__$1,kline,info){
return (function() { 
var G__12882__delegate = function (args){return args;
};
var G__12882 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12882__delegate.call(this,args);};
G__12882.cljs$lang$maxFixedArity = 0;
G__12882.cljs$lang$applyTo = (function (arglist__12883){
var args = cljs.core.seq(arglist__12883);
return G__12882__delegate(args);
});
G__12882.cljs$core$IFn$_invoke$arity$variadic = G__12882__delegate;
return G__12882;
})()
;})(vec__12873,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12872,map__12872__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__12875 = null;var count__12876 = (0);var i__12877 = (0);while(true){
if((i__12877 < count__12876))
{var vec__12878 = cljs.core._nth.call(null,chunk__12875,i__12877);var idx = cljs.core.nth.call(null,vec__12878,(0),null);var vec__12879 = cljs.core.nth.call(null,vec__12878,(1),null);var date = cljs.core.nth.call(null,vec__12879,(0),null);var open = cljs.core.nth.call(null,vec__12879,(1),null);var high = cljs.core.nth.call(null,vec__12879,(2),null);var low = cljs.core.nth.call(null,vec__12879,(3),null);var close = cljs.core.nth.call(null,vec__12879,(4),null);var volume = cljs.core.nth.call(null,vec__12879,(5),null);var info__$1 = cljs.core.nth.call(null,vec__12878,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__12884 = seq__12874;
var G__12885 = chunk__12875;
var G__12886 = count__12876;
var G__12887 = (i__12877 + (1));
seq__12874 = G__12884;
chunk__12875 = G__12885;
count__12876 = G__12886;
i__12877 = G__12887;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12874);if(temp__4126__auto__)
{var seq__12874__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12874__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12874__$1);{
var G__12888 = cljs.core.chunk_rest.call(null,seq__12874__$1);
var G__12889 = c__4307__auto__;
var G__12890 = cljs.core.count.call(null,c__4307__auto__);
var G__12891 = (0);
seq__12874 = G__12888;
chunk__12875 = G__12889;
count__12876 = G__12890;
i__12877 = G__12891;
continue;
}
} else
{var vec__12880 = cljs.core.first.call(null,seq__12874__$1);var idx = cljs.core.nth.call(null,vec__12880,(0),null);var vec__12881 = cljs.core.nth.call(null,vec__12880,(1),null);var date = cljs.core.nth.call(null,vec__12881,(0),null);var open = cljs.core.nth.call(null,vec__12881,(1),null);var high = cljs.core.nth.call(null,vec__12881,(2),null);var low = cljs.core.nth.call(null,vec__12881,(3),null);var close = cljs.core.nth.call(null,vec__12881,(4),null);var volume = cljs.core.nth.call(null,vec__12881,(5),null);var info__$1 = cljs.core.nth.call(null,vec__12880,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__12892 = cljs.core.next.call(null,seq__12874__$1);
var G__12893 = null;
var G__12894 = (0);
var G__12895 = (0);
seq__12874 = G__12892;
chunk__12875 = G__12893;
count__12876 = G__12894;
i__12877 = G__12895;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__12896){var map__12897 = p__12896;var map__12897__$1 = ((cljs.core.seq_QMARK_.call(null,map__12897))?cljs.core.apply.call(null,cljs.core.hash_map,map__12897):map__12897);var cz = cljs.core.get.call(null,map__12897__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__12898){var map__12899 = p__12898;var map__12899__$1 = ((cljs.core.seq_QMARK_.call(null,map__12899))?cljs.core.apply.call(null,cljs.core.hash_map,map__12899):map__12899);var cz = cljs.core.get.call(null,map__12899__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__12900,base,ctx){var map__12901 = p__12900;var map__12901__$1 = ((cljs.core.seq_QMARK_.call(null,map__12901))?cljs.core.apply.call(null,cljs.core.hash_map,map__12901):map__12901);var cz = cljs.core.get.call(null,map__12901__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__12901__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__12901__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__12902 = base;var w = cljs.core.nth.call(null,vec__12902,(0),null);var h = cljs.core.nth.call(null,vec__12902,(1),null);var max_v = cljs.core.nth.call(null,vec__12902,(2),null);var min_v = cljs.core.nth.call(null,vec__12902,(3),null);var offset_v = cljs.core.nth.call(null,vec__12902,(4),null);var offset_x = cljs.core.nth.call(null,vec__12902,(5),null);var pos_y = cljs.core.nth.call(null,vec__12902,(6),null);var proj_x = ((function (vec__12902,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12901,map__12901__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__12902,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__12901,map__12901__$1,cz,vz,color))
;var proj_y = ((function (vec__12902,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__12901,map__12901__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__12902,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__12901,map__12901__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__12903 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12902,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__12901,map__12901__$1,cz,vz,color){
return (function() { 
var G__12909__delegate = function (args){return args;
};
var G__12909 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12909__delegate.call(this,args);};
G__12909.cljs$lang$maxFixedArity = 0;
G__12909.cljs$lang$applyTo = (function (arglist__12910){
var args = cljs.core.seq(arglist__12910);
return G__12909__delegate(args);
});
G__12909.cljs$core$IFn$_invoke$arity$variadic = G__12909__delegate;
return G__12909;
})()
;})(vec__12902,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__12901,map__12901__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__12904 = null;var count__12905 = (0);var i__12906 = (0);while(true){
if((i__12906 < count__12905))
{var vec__12907 = cljs.core._nth.call(null,chunk__12904,i__12906);var idx = cljs.core.nth.call(null,vec__12907,(0),null);var pc = cljs.core.nth.call(null,vec__12907,(1),null);var cc = cljs.core.nth.call(null,vec__12907,(2),null);var pv = cljs.core.nth.call(null,vec__12907,(3),null);var cv = cljs.core.nth.call(null,vec__12907,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__12911 = seq__12903;
var G__12912 = chunk__12904;
var G__12913 = count__12905;
var G__12914 = (i__12906 + (1));
seq__12903 = G__12911;
chunk__12904 = G__12912;
count__12905 = G__12913;
i__12906 = G__12914;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12903);if(temp__4126__auto__)
{var seq__12903__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12903__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12903__$1);{
var G__12915 = cljs.core.chunk_rest.call(null,seq__12903__$1);
var G__12916 = c__4307__auto__;
var G__12917 = cljs.core.count.call(null,c__4307__auto__);
var G__12918 = (0);
seq__12903 = G__12915;
chunk__12904 = G__12916;
count__12905 = G__12917;
i__12906 = G__12918;
continue;
}
} else
{var vec__12908 = cljs.core.first.call(null,seq__12903__$1);var idx = cljs.core.nth.call(null,vec__12908,(0),null);var pc = cljs.core.nth.call(null,vec__12908,(1),null);var cc = cljs.core.nth.call(null,vec__12908,(2),null);var pv = cljs.core.nth.call(null,vec__12908,(3),null);var cv = cljs.core.nth.call(null,vec__12908,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__12919 = cljs.core.next.call(null,seq__12903__$1);
var G__12920 = null;
var G__12921 = (0);
var G__12922 = (0);
seq__12903 = G__12919;
chunk__12904 = G__12920;
count__12905 = G__12921;
i__12906 = G__12922;
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
