// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21748){var map__21749 = p__21748;var map__21749__$1 = ((cljs.core.seq_QMARK_.call(null,map__21749))?cljs.core.apply.call(null,cljs.core.hash_map,map__21749):map__21749);var t = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21750){var map__21751 = p__21750;var map__21751__$1 = ((cljs.core.seq_QMARK_.call(null,map__21751))?cljs.core.apply.call(null,cljs.core.hash_map,map__21751):map__21751);var t = cljs.core.get.call(null,map__21751__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21752){var map__21753 = p__21752;var map__21753__$1 = ((cljs.core.seq_QMARK_.call(null,map__21753))?cljs.core.apply.call(null,cljs.core.hash_map,map__21753):map__21753);var t = cljs.core.get.call(null,map__21753__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21754,base,ctx){var map__21755 = p__21754;var map__21755__$1 = ((cljs.core.seq_QMARK_.call(null,map__21755))?cljs.core.apply.call(null,cljs.core.hash_map,map__21755):map__21755);var t = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__21756,w,h,ctx){var map__21762 = p__21756;var map__21762__$1 = ((cljs.core.seq_QMARK_.call(null,map__21762))?cljs.core.apply.call(null,cljs.core.hash_map,map__21762):map__21762);var info = map__21762__$1;var drawers = cljs.core.get.call(null,map__21762__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__21763 = cljs.core.seq.call(null,drawers);var chunk__21764 = null;var count__21765 = (0);var i__21766 = (0);while(true){
if((i__21766 < count__21765))
{var drawer = cljs.core._nth.call(null,chunk__21764,i__21766);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__21767 = seq__21763;
var G__21768 = chunk__21764;
var G__21769 = count__21765;
var G__21770 = (i__21766 + (1));
seq__21763 = G__21767;
chunk__21764 = G__21768;
count__21765 = G__21769;
i__21766 = G__21770;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21763);if(temp__4126__auto__)
{var seq__21763__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21763__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21763__$1);{
var G__21771 = cljs.core.chunk_rest.call(null,seq__21763__$1);
var G__21772 = c__4307__auto__;
var G__21773 = cljs.core.count.call(null,c__4307__auto__);
var G__21774 = (0);
seq__21763 = G__21771;
chunk__21764 = G__21772;
count__21765 = G__21773;
i__21766 = G__21774;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__21763__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__21775 = cljs.core.next.call(null,seq__21763__$1);
var G__21776 = null;
var G__21777 = (0);
var G__21778 = (0);
seq__21763 = G__21775;
chunk__21764 = G__21776;
count__21765 = G__21777;
i__21766 = G__21778;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__21779){var map__21780 = p__21779;var map__21780__$1 = ((cljs.core.seq_QMARK_.call(null,map__21780))?cljs.core.apply.call(null,cljs.core.hash_map,map__21780):map__21780);var line = cljs.core.get.call(null,map__21780__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__21780__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__21781){var map__21782 = p__21781;var map__21782__$1 = ((cljs.core.seq_QMARK_.call(null,map__21782))?cljs.core.apply.call(null,cljs.core.hash_map,map__21782):map__21782);var line = cljs.core.get.call(null,map__21782__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__21782__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__21783){var map__21784 = p__21783;var map__21784__$1 = ((cljs.core.seq_QMARK_.call(null,map__21784))?cljs.core.apply.call(null,cljs.core.hash_map,map__21784):map__21784);var line = cljs.core.get.call(null,map__21784__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__21784__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__21785,base,ctx){var map__21786 = p__21785;var map__21786__$1 = ((cljs.core.seq_QMARK_.call(null,map__21786))?cljs.core.apply.call(null,cljs.core.hash_map,map__21786):map__21786);var line = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var centerY = cljs.core.get.call(null,map__21786__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));var vec__21787 = base;var w = cljs.core.nth.call(null,vec__21787,(0),null);var h = cljs.core.nth.call(null,vec__21787,(1),null);var max_v = cljs.core.nth.call(null,vec__21787,(2),null);var min_v = cljs.core.nth.call(null,vec__21787,(3),null);var offset_v = cljs.core.nth.call(null,vec__21787,(4),null);var offset_x = cljs.core.nth.call(null,vec__21787,(5),null);var pos_y = cljs.core.nth.call(null,vec__21787,(6),null);var cnt = (10);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__21788_21800 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__21789_21801 = null;var count__21790_21802 = (0);var i__21791_21803 = (0);while(true){
if((i__21791_21803 < count__21790_21802))
{var i_21804 = cljs.core._nth.call(null,chunk__21789_21801,i__21791_21803);var v_21805 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_21804 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21805.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_21805));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21805.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_21805));
ctx.moveTo((0),pos_y.call(null,v_21805));
ctx.lineTo(w,pos_y.call(null,v_21805));
var v_21806 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_21804 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21806.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_21806));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21806.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_21806));
ctx.moveTo((0),pos_y.call(null,v_21806));
ctx.lineTo(w,pos_y.call(null,v_21806));
{
var G__21807 = seq__21788_21800;
var G__21808 = chunk__21789_21801;
var G__21809 = count__21790_21802;
var G__21810 = (i__21791_21803 + (1));
seq__21788_21800 = G__21807;
chunk__21789_21801 = G__21808;
count__21790_21802 = G__21809;
i__21791_21803 = G__21810;
continue;
}
} else
{var temp__4126__auto___21811 = cljs.core.seq.call(null,seq__21788_21800);if(temp__4126__auto___21811)
{var seq__21788_21812__$1 = temp__4126__auto___21811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21788_21812__$1))
{var c__4307__auto___21813 = cljs.core.chunk_first.call(null,seq__21788_21812__$1);{
var G__21814 = cljs.core.chunk_rest.call(null,seq__21788_21812__$1);
var G__21815 = c__4307__auto___21813;
var G__21816 = cljs.core.count.call(null,c__4307__auto___21813);
var G__21817 = (0);
seq__21788_21800 = G__21814;
chunk__21789_21801 = G__21815;
count__21790_21802 = G__21816;
i__21791_21803 = G__21817;
continue;
}
} else
{var i_21818 = cljs.core.first.call(null,seq__21788_21812__$1);var v_21819 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_21818 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21819.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_21819));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21819.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_21819));
ctx.moveTo((0),pos_y.call(null,v_21819));
ctx.lineTo(w,pos_y.call(null,v_21819));
var v_21820 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_21818 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21820.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_21820));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_21820.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_21820));
ctx.moveTo((0),pos_y.call(null,v_21820));
ctx.lineTo(w,pos_y.call(null,v_21820));
{
var G__21821 = cljs.core.next.call(null,seq__21788_21812__$1);
var G__21822 = null;
var G__21823 = (0);
var G__21824 = (0);
seq__21788_21800 = G__21821;
chunk__21789_21801 = G__21822;
count__21790_21802 = G__21823;
i__21791_21803 = G__21824;
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
{var seq__21792_21825 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__21793_21826 = null;var count__21794_21827 = (0);var i__21795_21828 = (0);while(true){
if((i__21795_21828 < count__21794_21827))
{var i_21829 = cljs.core._nth.call(null,chunk__21793_21826,i__21795_21828);if((cljs.core.mod.call(null,i_21829,cntx) === (0)))
{var posx_21830 = ((offset_x / (2)) + (i_21829 * offset_x));ctx.moveTo(posx_21830,(0));
ctx.lineTo(posx_21830,h);
} else
{}
{
var G__21831 = seq__21792_21825;
var G__21832 = chunk__21793_21826;
var G__21833 = count__21794_21827;
var G__21834 = (i__21795_21828 + (1));
seq__21792_21825 = G__21831;
chunk__21793_21826 = G__21832;
count__21794_21827 = G__21833;
i__21795_21828 = G__21834;
continue;
}
} else
{var temp__4126__auto___21835 = cljs.core.seq.call(null,seq__21792_21825);if(temp__4126__auto___21835)
{var seq__21792_21836__$1 = temp__4126__auto___21835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21792_21836__$1))
{var c__4307__auto___21837 = cljs.core.chunk_first.call(null,seq__21792_21836__$1);{
var G__21838 = cljs.core.chunk_rest.call(null,seq__21792_21836__$1);
var G__21839 = c__4307__auto___21837;
var G__21840 = cljs.core.count.call(null,c__4307__auto___21837);
var G__21841 = (0);
seq__21792_21825 = G__21838;
chunk__21793_21826 = G__21839;
count__21794_21827 = G__21840;
i__21795_21828 = G__21841;
continue;
}
} else
{var i_21842 = cljs.core.first.call(null,seq__21792_21836__$1);if((cljs.core.mod.call(null,i_21842,cntx) === (0)))
{var posx_21843 = ((offset_x / (2)) + (i_21842 * offset_x));ctx.moveTo(posx_21843,(0));
ctx.lineTo(posx_21843,h);
} else
{}
{
var G__21844 = cljs.core.next.call(null,seq__21792_21836__$1);
var G__21845 = null;
var G__21846 = (0);
var G__21847 = (0);
seq__21792_21825 = G__21844;
chunk__21793_21826 = G__21845;
count__21794_21827 = G__21846;
i__21795_21828 = G__21847;
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
{var seq__21796_21848 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__21797_21849 = null;var count__21798_21850 = (0);var i__21799_21851 = (0);while(true){
if((i__21799_21851 < count__21798_21850))
{var i_21852 = cljs.core._nth.call(null,chunk__21797_21849,i__21799_21851);if((cljs.core.mod.call(null,i_21852,cntx) === (0)))
{var posx_21853 = ((offset_x / (2)) + (i_21852 * offset_x));ctx.moveTo(posx_21853,(0));
ctx.lineTo(posx_21853,h);
} else
{}
{
var G__21854 = seq__21796_21848;
var G__21855 = chunk__21797_21849;
var G__21856 = count__21798_21850;
var G__21857 = (i__21799_21851 + (1));
seq__21796_21848 = G__21854;
chunk__21797_21849 = G__21855;
count__21798_21850 = G__21856;
i__21799_21851 = G__21857;
continue;
}
} else
{var temp__4126__auto___21858 = cljs.core.seq.call(null,seq__21796_21848);if(temp__4126__auto___21858)
{var seq__21796_21859__$1 = temp__4126__auto___21858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21796_21859__$1))
{var c__4307__auto___21860 = cljs.core.chunk_first.call(null,seq__21796_21859__$1);{
var G__21861 = cljs.core.chunk_rest.call(null,seq__21796_21859__$1);
var G__21862 = c__4307__auto___21860;
var G__21863 = cljs.core.count.call(null,c__4307__auto___21860);
var G__21864 = (0);
seq__21796_21848 = G__21861;
chunk__21797_21849 = G__21862;
count__21798_21850 = G__21863;
i__21799_21851 = G__21864;
continue;
}
} else
{var i_21865 = cljs.core.first.call(null,seq__21796_21859__$1);if((cljs.core.mod.call(null,i_21865,cntx) === (0)))
{var posx_21866 = ((offset_x / (2)) + (i_21865 * offset_x));ctx.moveTo(posx_21866,(0));
ctx.lineTo(posx_21866,h);
} else
{}
{
var G__21867 = cljs.core.next.call(null,seq__21796_21859__$1);
var G__21868 = null;
var G__21869 = (0);
var G__21870 = (0);
seq__21796_21848 = G__21867;
chunk__21797_21849 = G__21868;
count__21798_21850 = G__21869;
i__21799_21851 = G__21870;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21871){var map__21872 = p__21871;var map__21872__$1 = ((cljs.core.seq_QMARK_.call(null,map__21872))?cljs.core.apply.call(null,cljs.core.hash_map,map__21872):map__21872);var line = cljs.core.get.call(null,map__21872__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21873){var map__21874 = p__21873;var map__21874__$1 = ((cljs.core.seq_QMARK_.call(null,map__21874))?cljs.core.apply.call(null,cljs.core.hash_map,map__21874):map__21874);var line = cljs.core.get.call(null,map__21874__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21875){var map__21876 = p__21875;var map__21876__$1 = ((cljs.core.seq_QMARK_.call(null,map__21876))?cljs.core.apply.call(null,cljs.core.hash_map,map__21876):map__21876);var line = cljs.core.get.call(null,map__21876__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21877,base,ctx){var map__21878 = p__21877;var map__21878__$1 = ((cljs.core.seq_QMARK_.call(null,map__21878))?cljs.core.apply.call(null,cljs.core.hash_map,map__21878):map__21878);var line = cljs.core.get.call(null,map__21878__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__21878__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__21878__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__21878__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__21879 = base;var w = cljs.core.nth.call(null,vec__21879,(0),null);var h = cljs.core.nth.call(null,vec__21879,(1),null);var max_v = cljs.core.nth.call(null,vec__21879,(2),null);var min_v = cljs.core.nth.call(null,vec__21879,(3),null);var offset_v = cljs.core.nth.call(null,vec__21879,(4),null);var offset_x = cljs.core.nth.call(null,vec__21879,(5),null);var pos_y = cljs.core.nth.call(null,vec__21879,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__21880 = cljs.core._EQ_;var expr__21881 = style;if(cljs.core.truth_(pred__21880.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__21881)))
{(ctx["fillStyle"] = color);
var seq__21883 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__21884 = null;var count__21885 = (0);var i__21886 = (0);while(true){
if((i__21886 < count__21885))
{var vec__21887 = cljs.core._nth.call(null,chunk__21884,i__21886);var idx = cljs.core.nth.call(null,vec__21887,(0),null);var value = cljs.core.nth.call(null,vec__21887,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__21895 = seq__21883;
var G__21896 = chunk__21884;
var G__21897 = count__21885;
var G__21898 = (i__21886 + (1));
seq__21883 = G__21895;
chunk__21884 = G__21896;
count__21885 = G__21897;
i__21886 = G__21898;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21883);if(temp__4126__auto__)
{var seq__21883__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21883__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21883__$1);{
var G__21899 = cljs.core.chunk_rest.call(null,seq__21883__$1);
var G__21900 = c__4307__auto__;
var G__21901 = cljs.core.count.call(null,c__4307__auto__);
var G__21902 = (0);
seq__21883 = G__21899;
chunk__21884 = G__21900;
count__21885 = G__21901;
i__21886 = G__21902;
continue;
}
} else
{var vec__21888 = cljs.core.first.call(null,seq__21883__$1);var idx = cljs.core.nth.call(null,vec__21888,(0),null);var value = cljs.core.nth.call(null,vec__21888,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__21903 = cljs.core.next.call(null,seq__21883__$1);
var G__21904 = null;
var G__21905 = (0);
var G__21906 = (0);
seq__21883 = G__21903;
chunk__21884 = G__21904;
count__21885 = G__21905;
i__21886 = G__21906;
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
var seq__21889_21907 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__21880,expr__21881,vec__21879,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__21878,map__21878__$1,line,color,offset,style){
return (function() { 
var G__21911__delegate = function (args){return args;
};
var G__21911 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21911__delegate.call(this,args);};
G__21911.cljs$lang$maxFixedArity = 0;
G__21911.cljs$lang$applyTo = (function (arglist__21912){
var args = cljs.core.seq(arglist__21912);
return G__21911__delegate(args);
});
G__21911.cljs$core$IFn$_invoke$arity$variadic = G__21911__delegate;
return G__21911;
})()
;})(pred__21880,expr__21881,vec__21879,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__21878,map__21878__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__21890_21908 = null;var count__21891_21909 = (0);var i__21892_21910 = (0);while(true){
if((i__21892_21910 < count__21891_21909))
{var vec__21893_21913 = cljs.core._nth.call(null,chunk__21890_21908,i__21892_21910);var idx_21914 = cljs.core.nth.call(null,vec__21893_21913,(0),null);var prev_21915 = cljs.core.nth.call(null,vec__21893_21913,(1),null);var curr_21916 = cljs.core.nth.call(null,vec__21893_21913,(2),null);ctx.moveTo(((idx_21914 + offset__$1) * offset_x),pos_y.call(null,prev_21915));
ctx.lineTo((((idx_21914 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_21916));
{
var G__21917 = seq__21889_21907;
var G__21918 = chunk__21890_21908;
var G__21919 = count__21891_21909;
var G__21920 = (i__21892_21910 + (1));
seq__21889_21907 = G__21917;
chunk__21890_21908 = G__21918;
count__21891_21909 = G__21919;
i__21892_21910 = G__21920;
continue;
}
} else
{var temp__4126__auto___21921 = cljs.core.seq.call(null,seq__21889_21907);if(temp__4126__auto___21921)
{var seq__21889_21922__$1 = temp__4126__auto___21921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21889_21922__$1))
{var c__4307__auto___21923 = cljs.core.chunk_first.call(null,seq__21889_21922__$1);{
var G__21924 = cljs.core.chunk_rest.call(null,seq__21889_21922__$1);
var G__21925 = c__4307__auto___21923;
var G__21926 = cljs.core.count.call(null,c__4307__auto___21923);
var G__21927 = (0);
seq__21889_21907 = G__21924;
chunk__21890_21908 = G__21925;
count__21891_21909 = G__21926;
i__21892_21910 = G__21927;
continue;
}
} else
{var vec__21894_21928 = cljs.core.first.call(null,seq__21889_21922__$1);var idx_21929 = cljs.core.nth.call(null,vec__21894_21928,(0),null);var prev_21930 = cljs.core.nth.call(null,vec__21894_21928,(1),null);var curr_21931 = cljs.core.nth.call(null,vec__21894_21928,(2),null);ctx.moveTo(((idx_21929 + offset__$1) * offset_x),pos_y.call(null,prev_21930));
ctx.lineTo((((idx_21929 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_21931));
{
var G__21932 = cljs.core.next.call(null,seq__21889_21922__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__21889_21907 = G__21932;
chunk__21890_21908 = G__21933;
count__21891_21909 = G__21934;
i__21892_21910 = G__21935;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21936){var map__21937 = p__21936;var map__21937__$1 = ((cljs.core.seq_QMARK_.call(null,map__21937))?cljs.core.apply.call(null,cljs.core.hash_map,map__21937):map__21937);var kline = cljs.core.get.call(null,map__21937__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21938){var map__21939 = p__21938;var map__21939__$1 = ((cljs.core.seq_QMARK_.call(null,map__21939))?cljs.core.apply.call(null,cljs.core.hash_map,map__21939):map__21939);var kline = cljs.core.get.call(null,map__21939__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21940){var map__21941 = p__21940;var map__21941__$1 = ((cljs.core.seq_QMARK_.call(null,map__21941))?cljs.core.apply.call(null,cljs.core.hash_map,map__21941):map__21941);var kline = cljs.core.get.call(null,map__21941__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21942,base,ctx){var map__21943 = p__21942;var map__21943__$1 = ((cljs.core.seq_QMARK_.call(null,map__21943))?cljs.core.apply.call(null,cljs.core.hash_map,map__21943):map__21943);var kline = cljs.core.get.call(null,map__21943__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__21943__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__21944 = base;var w = cljs.core.nth.call(null,vec__21944,(0),null);var h = cljs.core.nth.call(null,vec__21944,(1),null);var max_v = cljs.core.nth.call(null,vec__21944,(2),null);var min_v = cljs.core.nth.call(null,vec__21944,(3),null);var offset_v = cljs.core.nth.call(null,vec__21944,(4),null);var offset_x = cljs.core.nth.call(null,vec__21944,(5),null);var pos_y = cljs.core.nth.call(null,vec__21944,(6),null);(ctx["fillStyle"] = "black");
var seq__21945 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__21944,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21943,map__21943__$1,kline,info){
return (function() { 
var G__21953__delegate = function (args){return args;
};
var G__21953 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21953__delegate.call(this,args);};
G__21953.cljs$lang$maxFixedArity = 0;
G__21953.cljs$lang$applyTo = (function (arglist__21954){
var args = cljs.core.seq(arglist__21954);
return G__21953__delegate(args);
});
G__21953.cljs$core$IFn$_invoke$arity$variadic = G__21953__delegate;
return G__21953;
})()
;})(vec__21944,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21943,map__21943__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__21946 = null;var count__21947 = (0);var i__21948 = (0);while(true){
if((i__21948 < count__21947))
{var vec__21949 = cljs.core._nth.call(null,chunk__21946,i__21948);var idx = cljs.core.nth.call(null,vec__21949,(0),null);var vec__21950 = cljs.core.nth.call(null,vec__21949,(1),null);var date = cljs.core.nth.call(null,vec__21950,(0),null);var open = cljs.core.nth.call(null,vec__21950,(1),null);var high = cljs.core.nth.call(null,vec__21950,(2),null);var low = cljs.core.nth.call(null,vec__21950,(3),null);var close = cljs.core.nth.call(null,vec__21950,(4),null);var volume = cljs.core.nth.call(null,vec__21950,(5),null);var info__$1 = cljs.core.nth.call(null,vec__21949,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__21955 = seq__21945;
var G__21956 = chunk__21946;
var G__21957 = count__21947;
var G__21958 = (i__21948 + (1));
seq__21945 = G__21955;
chunk__21946 = G__21956;
count__21947 = G__21957;
i__21948 = G__21958;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21945);if(temp__4126__auto__)
{var seq__21945__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21945__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21945__$1);{
var G__21959 = cljs.core.chunk_rest.call(null,seq__21945__$1);
var G__21960 = c__4307__auto__;
var G__21961 = cljs.core.count.call(null,c__4307__auto__);
var G__21962 = (0);
seq__21945 = G__21959;
chunk__21946 = G__21960;
count__21947 = G__21961;
i__21948 = G__21962;
continue;
}
} else
{var vec__21951 = cljs.core.first.call(null,seq__21945__$1);var idx = cljs.core.nth.call(null,vec__21951,(0),null);var vec__21952 = cljs.core.nth.call(null,vec__21951,(1),null);var date = cljs.core.nth.call(null,vec__21952,(0),null);var open = cljs.core.nth.call(null,vec__21952,(1),null);var high = cljs.core.nth.call(null,vec__21952,(2),null);var low = cljs.core.nth.call(null,vec__21952,(3),null);var close = cljs.core.nth.call(null,vec__21952,(4),null);var volume = cljs.core.nth.call(null,vec__21952,(5),null);var info__$1 = cljs.core.nth.call(null,vec__21951,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__21963 = cljs.core.next.call(null,seq__21945__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21945 = G__21963;
chunk__21946 = G__21964;
count__21947 = G__21965;
i__21948 = G__21966;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__21967){var map__21968 = p__21967;var map__21968__$1 = ((cljs.core.seq_QMARK_.call(null,map__21968))?cljs.core.apply.call(null,cljs.core.hash_map,map__21968):map__21968);var cz = cljs.core.get.call(null,map__21968__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__21969){var map__21970 = p__21969;var map__21970__$1 = ((cljs.core.seq_QMARK_.call(null,map__21970))?cljs.core.apply.call(null,cljs.core.hash_map,map__21970):map__21970);var cz = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__21971,base,ctx){var map__21972 = p__21971;var map__21972__$1 = ((cljs.core.seq_QMARK_.call(null,map__21972))?cljs.core.apply.call(null,cljs.core.hash_map,map__21972):map__21972);var cz = cljs.core.get.call(null,map__21972__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__21972__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__21972__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__21973 = base;var w = cljs.core.nth.call(null,vec__21973,(0),null);var h = cljs.core.nth.call(null,vec__21973,(1),null);var max_v = cljs.core.nth.call(null,vec__21973,(2),null);var min_v = cljs.core.nth.call(null,vec__21973,(3),null);var offset_v = cljs.core.nth.call(null,vec__21973,(4),null);var offset_x = cljs.core.nth.call(null,vec__21973,(5),null);var pos_y = cljs.core.nth.call(null,vec__21973,(6),null);var proj_x = ((function (vec__21973,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21972,map__21972__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__21973,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21972,map__21972__$1,cz,vz,color))
;var proj_y = ((function (vec__21973,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__21972,map__21972__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__21973,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__21972,map__21972__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__21974 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__21973,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__21972,map__21972__$1,cz,vz,color){
return (function() { 
var G__21980__delegate = function (args){return args;
};
var G__21980 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21980__delegate.call(this,args);};
G__21980.cljs$lang$maxFixedArity = 0;
G__21980.cljs$lang$applyTo = (function (arglist__21981){
var args = cljs.core.seq(arglist__21981);
return G__21980__delegate(args);
});
G__21980.cljs$core$IFn$_invoke$arity$variadic = G__21980__delegate;
return G__21980;
})()
;})(vec__21973,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__21972,map__21972__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__21975 = null;var count__21976 = (0);var i__21977 = (0);while(true){
if((i__21977 < count__21976))
{var vec__21978 = cljs.core._nth.call(null,chunk__21975,i__21977);var idx = cljs.core.nth.call(null,vec__21978,(0),null);var pc = cljs.core.nth.call(null,vec__21978,(1),null);var cc = cljs.core.nth.call(null,vec__21978,(2),null);var pv = cljs.core.nth.call(null,vec__21978,(3),null);var cv = cljs.core.nth.call(null,vec__21978,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__21982 = seq__21974;
var G__21983 = chunk__21975;
var G__21984 = count__21976;
var G__21985 = (i__21977 + (1));
seq__21974 = G__21982;
chunk__21975 = G__21983;
count__21976 = G__21984;
i__21977 = G__21985;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21974);if(temp__4126__auto__)
{var seq__21974__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21974__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21974__$1);{
var G__21986 = cljs.core.chunk_rest.call(null,seq__21974__$1);
var G__21987 = c__4307__auto__;
var G__21988 = cljs.core.count.call(null,c__4307__auto__);
var G__21989 = (0);
seq__21974 = G__21986;
chunk__21975 = G__21987;
count__21976 = G__21988;
i__21977 = G__21989;
continue;
}
} else
{var vec__21979 = cljs.core.first.call(null,seq__21974__$1);var idx = cljs.core.nth.call(null,vec__21979,(0),null);var pc = cljs.core.nth.call(null,vec__21979,(1),null);var cc = cljs.core.nth.call(null,vec__21979,(2),null);var pv = cljs.core.nth.call(null,vec__21979,(3),null);var cv = cljs.core.nth.call(null,vec__21979,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__21990 = cljs.core.next.call(null,seq__21974__$1);
var G__21991 = null;
var G__21992 = (0);
var G__21993 = (0);
seq__21974 = G__21990;
chunk__21975 = G__21991;
count__21976 = G__21992;
i__21977 = G__21993;
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
