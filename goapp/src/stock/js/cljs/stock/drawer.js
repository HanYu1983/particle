// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__32820){var map__32821 = p__32820;var map__32821__$1 = ((cljs.core.seq_QMARK_.call(null,map__32821))?cljs.core.apply.call(null,cljs.core.hash_map,map__32821):map__32821);var t = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__32822){var map__32823 = p__32822;var map__32823__$1 = ((cljs.core.seq_QMARK_.call(null,map__32823))?cljs.core.apply.call(null,cljs.core.hash_map,map__32823):map__32823);var t = cljs.core.get.call(null,map__32823__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__32824){var map__32825 = p__32824;var map__32825__$1 = ((cljs.core.seq_QMARK_.call(null,map__32825))?cljs.core.apply.call(null,cljs.core.hash_map,map__32825):map__32825);var t = cljs.core.get.call(null,map__32825__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__32826,base,ctx){var map__32827 = p__32826;var map__32827__$1 = ((cljs.core.seq_QMARK_.call(null,map__32827))?cljs.core.apply.call(null,cljs.core.hash_map,map__32827):map__32827);var t = cljs.core.get.call(null,map__32827__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__32828,w,h,ctx){var map__32834 = p__32828;var map__32834__$1 = ((cljs.core.seq_QMARK_.call(null,map__32834))?cljs.core.apply.call(null,cljs.core.hash_map,map__32834):map__32834);var info = map__32834__$1;var drawers = cljs.core.get.call(null,map__32834__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__32835 = cljs.core.seq.call(null,drawers);var chunk__32836 = null;var count__32837 = (0);var i__32838 = (0);while(true){
if((i__32838 < count__32837))
{var drawer = cljs.core._nth.call(null,chunk__32836,i__32838);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__32839 = seq__32835;
var G__32840 = chunk__32836;
var G__32841 = count__32837;
var G__32842 = (i__32838 + (1));
seq__32835 = G__32839;
chunk__32836 = G__32840;
count__32837 = G__32841;
i__32838 = G__32842;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32835);if(temp__4126__auto__)
{var seq__32835__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32835__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__32835__$1);{
var G__32843 = cljs.core.chunk_rest.call(null,seq__32835__$1);
var G__32844 = c__4307__auto__;
var G__32845 = cljs.core.count.call(null,c__4307__auto__);
var G__32846 = (0);
seq__32835 = G__32843;
chunk__32836 = G__32844;
count__32837 = G__32845;
i__32838 = G__32846;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__32835__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__32847 = cljs.core.next.call(null,seq__32835__$1);
var G__32848 = null;
var G__32849 = (0);
var G__32850 = (0);
seq__32835 = G__32847;
chunk__32836 = G__32848;
count__32837 = G__32849;
i__32838 = G__32850;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__32851){var map__32852 = p__32851;var map__32852__$1 = ((cljs.core.seq_QMARK_.call(null,map__32852))?cljs.core.apply.call(null,cljs.core.hash_map,map__32852):map__32852);var line = cljs.core.get.call(null,map__32852__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__32852__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__32853){var map__32854 = p__32853;var map__32854__$1 = ((cljs.core.seq_QMARK_.call(null,map__32854))?cljs.core.apply.call(null,cljs.core.hash_map,map__32854):map__32854);var line = cljs.core.get.call(null,map__32854__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__32854__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__32855){var map__32856 = p__32855;var map__32856__$1 = ((cljs.core.seq_QMARK_.call(null,map__32856))?cljs.core.apply.call(null,cljs.core.hash_map,map__32856):map__32856);var line = cljs.core.get.call(null,map__32856__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__32856__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__32857,base,ctx){var map__32858 = p__32857;var map__32858__$1 = ((cljs.core.seq_QMARK_.call(null,map__32858))?cljs.core.apply.call(null,cljs.core.hash_map,map__32858):map__32858);var line = cljs.core.get.call(null,map__32858__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__32858__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__32858__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__32858__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__32859 = base;var w = cljs.core.nth.call(null,vec__32859,(0),null);var h = cljs.core.nth.call(null,vec__32859,(1),null);var max_v = cljs.core.nth.call(null,vec__32859,(2),null);var min_v = cljs.core.nth.call(null,vec__32859,(3),null);var offset_v = cljs.core.nth.call(null,vec__32859,(4),null);var offset_x = cljs.core.nth.call(null,vec__32859,(5),null);var pos_y = cljs.core.nth.call(null,vec__32859,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__32860_32872 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__32861_32873 = null;var count__32862_32874 = (0);var i__32863_32875 = (0);while(true){
if((i__32863_32875 < count__32862_32874))
{var i_32876 = cljs.core._nth.call(null,chunk__32861_32873,i__32863_32875);var v_32877 = (min_v + (i_32876 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_32877 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_32877));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_32877 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_32877));
ctx.moveTo((0),pos_y.call(null,v_32877));
ctx.lineTo(w,pos_y.call(null,v_32877));
{
var G__32878 = seq__32860_32872;
var G__32879 = chunk__32861_32873;
var G__32880 = count__32862_32874;
var G__32881 = (i__32863_32875 + (1));
seq__32860_32872 = G__32878;
chunk__32861_32873 = G__32879;
count__32862_32874 = G__32880;
i__32863_32875 = G__32881;
continue;
}
} else
{var temp__4126__auto___32882 = cljs.core.seq.call(null,seq__32860_32872);if(temp__4126__auto___32882)
{var seq__32860_32883__$1 = temp__4126__auto___32882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32860_32883__$1))
{var c__4307__auto___32884 = cljs.core.chunk_first.call(null,seq__32860_32883__$1);{
var G__32885 = cljs.core.chunk_rest.call(null,seq__32860_32883__$1);
var G__32886 = c__4307__auto___32884;
var G__32887 = cljs.core.count.call(null,c__4307__auto___32884);
var G__32888 = (0);
seq__32860_32872 = G__32885;
chunk__32861_32873 = G__32886;
count__32862_32874 = G__32887;
i__32863_32875 = G__32888;
continue;
}
} else
{var i_32889 = cljs.core.first.call(null,seq__32860_32883__$1);var v_32890 = (min_v + (i_32889 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_32890 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_32890));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_32890 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_32890));
ctx.moveTo((0),pos_y.call(null,v_32890));
ctx.lineTo(w,pos_y.call(null,v_32890));
{
var G__32891 = cljs.core.next.call(null,seq__32860_32883__$1);
var G__32892 = null;
var G__32893 = (0);
var G__32894 = (0);
seq__32860_32872 = G__32891;
chunk__32861_32873 = G__32892;
count__32862_32874 = G__32893;
i__32863_32875 = G__32894;
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
{var seq__32864_32895 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__32865_32896 = null;var count__32866_32897 = (0);var i__32867_32898 = (0);while(true){
if((i__32867_32898 < count__32866_32897))
{var i_32899 = cljs.core._nth.call(null,chunk__32865_32896,i__32867_32898);if((cljs.core.mod.call(null,i_32899,cntx) === (0)))
{var posx_32900 = ((offset_x / (2)) + (i_32899 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_32899)),posx_32900,h);
ctx.moveTo(posx_32900,(0));
ctx.lineTo(posx_32900,h);
} else
{}
{
var G__32901 = seq__32864_32895;
var G__32902 = chunk__32865_32896;
var G__32903 = count__32866_32897;
var G__32904 = (i__32867_32898 + (1));
seq__32864_32895 = G__32901;
chunk__32865_32896 = G__32902;
count__32866_32897 = G__32903;
i__32867_32898 = G__32904;
continue;
}
} else
{var temp__4126__auto___32905 = cljs.core.seq.call(null,seq__32864_32895);if(temp__4126__auto___32905)
{var seq__32864_32906__$1 = temp__4126__auto___32905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32864_32906__$1))
{var c__4307__auto___32907 = cljs.core.chunk_first.call(null,seq__32864_32906__$1);{
var G__32908 = cljs.core.chunk_rest.call(null,seq__32864_32906__$1);
var G__32909 = c__4307__auto___32907;
var G__32910 = cljs.core.count.call(null,c__4307__auto___32907);
var G__32911 = (0);
seq__32864_32895 = G__32908;
chunk__32865_32896 = G__32909;
count__32866_32897 = G__32910;
i__32867_32898 = G__32911;
continue;
}
} else
{var i_32912 = cljs.core.first.call(null,seq__32864_32906__$1);if((cljs.core.mod.call(null,i_32912,cntx) === (0)))
{var posx_32913 = ((offset_x / (2)) + (i_32912 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_32912)),posx_32913,h);
ctx.moveTo(posx_32913,(0));
ctx.lineTo(posx_32913,h);
} else
{}
{
var G__32914 = cljs.core.next.call(null,seq__32864_32906__$1);
var G__32915 = null;
var G__32916 = (0);
var G__32917 = (0);
seq__32864_32895 = G__32914;
chunk__32865_32896 = G__32915;
count__32866_32897 = G__32916;
i__32867_32898 = G__32917;
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
{var seq__32868_32918 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__32869_32919 = null;var count__32870_32920 = (0);var i__32871_32921 = (0);while(true){
if((i__32871_32921 < count__32870_32920))
{var i_32922 = cljs.core._nth.call(null,chunk__32869_32919,i__32871_32921);if((cljs.core.mod.call(null,i_32922,cntx) === (0)))
{var posx_32923 = ((offset_x / (2)) + (i_32922 * offset_x));ctx.moveTo(posx_32923,(0));
ctx.lineTo(posx_32923,h);
} else
{}
{
var G__32924 = seq__32868_32918;
var G__32925 = chunk__32869_32919;
var G__32926 = count__32870_32920;
var G__32927 = (i__32871_32921 + (1));
seq__32868_32918 = G__32924;
chunk__32869_32919 = G__32925;
count__32870_32920 = G__32926;
i__32871_32921 = G__32927;
continue;
}
} else
{var temp__4126__auto___32928 = cljs.core.seq.call(null,seq__32868_32918);if(temp__4126__auto___32928)
{var seq__32868_32929__$1 = temp__4126__auto___32928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32868_32929__$1))
{var c__4307__auto___32930 = cljs.core.chunk_first.call(null,seq__32868_32929__$1);{
var G__32931 = cljs.core.chunk_rest.call(null,seq__32868_32929__$1);
var G__32932 = c__4307__auto___32930;
var G__32933 = cljs.core.count.call(null,c__4307__auto___32930);
var G__32934 = (0);
seq__32868_32918 = G__32931;
chunk__32869_32919 = G__32932;
count__32870_32920 = G__32933;
i__32871_32921 = G__32934;
continue;
}
} else
{var i_32935 = cljs.core.first.call(null,seq__32868_32929__$1);if((cljs.core.mod.call(null,i_32935,cntx) === (0)))
{var posx_32936 = ((offset_x / (2)) + (i_32935 * offset_x));ctx.moveTo(posx_32936,(0));
ctx.lineTo(posx_32936,h);
} else
{}
{
var G__32937 = cljs.core.next.call(null,seq__32868_32929__$1);
var G__32938 = null;
var G__32939 = (0);
var G__32940 = (0);
seq__32868_32918 = G__32937;
chunk__32869_32919 = G__32938;
count__32870_32920 = G__32939;
i__32871_32921 = G__32940;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__32941){var map__32942 = p__32941;var map__32942__$1 = ((cljs.core.seq_QMARK_.call(null,map__32942))?cljs.core.apply.call(null,cljs.core.hash_map,map__32942):map__32942);var line = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__32943){var map__32944 = p__32943;var map__32944__$1 = ((cljs.core.seq_QMARK_.call(null,map__32944))?cljs.core.apply.call(null,cljs.core.hash_map,map__32944):map__32944);var line = cljs.core.get.call(null,map__32944__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__32945){var map__32946 = p__32945;var map__32946__$1 = ((cljs.core.seq_QMARK_.call(null,map__32946))?cljs.core.apply.call(null,cljs.core.hash_map,map__32946):map__32946);var line = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__32947,base,ctx){var map__32948 = p__32947;var map__32948__$1 = ((cljs.core.seq_QMARK_.call(null,map__32948))?cljs.core.apply.call(null,cljs.core.hash_map,map__32948):map__32948);var line = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__32949 = base;var w = cljs.core.nth.call(null,vec__32949,(0),null);var h = cljs.core.nth.call(null,vec__32949,(1),null);var max_v = cljs.core.nth.call(null,vec__32949,(2),null);var min_v = cljs.core.nth.call(null,vec__32949,(3),null);var offset_v = cljs.core.nth.call(null,vec__32949,(4),null);var offset_x = cljs.core.nth.call(null,vec__32949,(5),null);var pos_y = cljs.core.nth.call(null,vec__32949,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__32950 = cljs.core._EQ_;var expr__32951 = style;if(cljs.core.truth_(pred__32950.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__32951)))
{var seq__32953 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__32954 = null;var count__32955 = (0);var i__32956 = (0);while(true){
if((i__32956 < count__32955))
{var vec__32957 = cljs.core._nth.call(null,chunk__32954,i__32956);var idx = cljs.core.nth.call(null,vec__32957,(0),null);var value = cljs.core.nth.call(null,vec__32957,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__32965 = seq__32953;
var G__32966 = chunk__32954;
var G__32967 = count__32955;
var G__32968 = (i__32956 + (1));
seq__32953 = G__32965;
chunk__32954 = G__32966;
count__32955 = G__32967;
i__32956 = G__32968;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32953);if(temp__4126__auto__)
{var seq__32953__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32953__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__32953__$1);{
var G__32969 = cljs.core.chunk_rest.call(null,seq__32953__$1);
var G__32970 = c__4307__auto__;
var G__32971 = cljs.core.count.call(null,c__4307__auto__);
var G__32972 = (0);
seq__32953 = G__32969;
chunk__32954 = G__32970;
count__32955 = G__32971;
i__32956 = G__32972;
continue;
}
} else
{var vec__32958 = cljs.core.first.call(null,seq__32953__$1);var idx = cljs.core.nth.call(null,vec__32958,(0),null);var value = cljs.core.nth.call(null,vec__32958,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__32973 = cljs.core.next.call(null,seq__32953__$1);
var G__32974 = null;
var G__32975 = (0);
var G__32976 = (0);
seq__32953 = G__32973;
chunk__32954 = G__32974;
count__32955 = G__32975;
i__32956 = G__32976;
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
var seq__32959_32977 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__32950,expr__32951,vec__32949,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__32948,map__32948__$1,line,color,offset,style){
return (function() { 
var G__32981__delegate = function (args){return args;
};
var G__32981 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32981__delegate.call(this,args);};
G__32981.cljs$lang$maxFixedArity = 0;
G__32981.cljs$lang$applyTo = (function (arglist__32982){
var args = cljs.core.seq(arglist__32982);
return G__32981__delegate(args);
});
G__32981.cljs$core$IFn$_invoke$arity$variadic = G__32981__delegate;
return G__32981;
})()
;})(pred__32950,expr__32951,vec__32949,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__32948,map__32948__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__32960_32978 = null;var count__32961_32979 = (0);var i__32962_32980 = (0);while(true){
if((i__32962_32980 < count__32961_32979))
{var vec__32963_32983 = cljs.core._nth.call(null,chunk__32960_32978,i__32962_32980);var idx_32984 = cljs.core.nth.call(null,vec__32963_32983,(0),null);var prev_32985 = cljs.core.nth.call(null,vec__32963_32983,(1),null);var curr_32986 = cljs.core.nth.call(null,vec__32963_32983,(2),null);ctx.moveTo(((idx_32984 + offset__$1) * offset_x),pos_y.call(null,prev_32985));
ctx.lineTo((((idx_32984 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_32986));
{
var G__32987 = seq__32959_32977;
var G__32988 = chunk__32960_32978;
var G__32989 = count__32961_32979;
var G__32990 = (i__32962_32980 + (1));
seq__32959_32977 = G__32987;
chunk__32960_32978 = G__32988;
count__32961_32979 = G__32989;
i__32962_32980 = G__32990;
continue;
}
} else
{var temp__4126__auto___32991 = cljs.core.seq.call(null,seq__32959_32977);if(temp__4126__auto___32991)
{var seq__32959_32992__$1 = temp__4126__auto___32991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32959_32992__$1))
{var c__4307__auto___32993 = cljs.core.chunk_first.call(null,seq__32959_32992__$1);{
var G__32994 = cljs.core.chunk_rest.call(null,seq__32959_32992__$1);
var G__32995 = c__4307__auto___32993;
var G__32996 = cljs.core.count.call(null,c__4307__auto___32993);
var G__32997 = (0);
seq__32959_32977 = G__32994;
chunk__32960_32978 = G__32995;
count__32961_32979 = G__32996;
i__32962_32980 = G__32997;
continue;
}
} else
{var vec__32964_32998 = cljs.core.first.call(null,seq__32959_32992__$1);var idx_32999 = cljs.core.nth.call(null,vec__32964_32998,(0),null);var prev_33000 = cljs.core.nth.call(null,vec__32964_32998,(1),null);var curr_33001 = cljs.core.nth.call(null,vec__32964_32998,(2),null);ctx.moveTo(((idx_32999 + offset__$1) * offset_x),pos_y.call(null,prev_33000));
ctx.lineTo((((idx_32999 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_33001));
{
var G__33002 = cljs.core.next.call(null,seq__32959_32992__$1);
var G__33003 = null;
var G__33004 = (0);
var G__33005 = (0);
seq__32959_32977 = G__33002;
chunk__32960_32978 = G__33003;
count__32961_32979 = G__33004;
i__32962_32980 = G__33005;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33006){var map__33007 = p__33006;var map__33007__$1 = ((cljs.core.seq_QMARK_.call(null,map__33007))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);var kline = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33008){var map__33009 = p__33008;var map__33009__$1 = ((cljs.core.seq_QMARK_.call(null,map__33009))?cljs.core.apply.call(null,cljs.core.hash_map,map__33009):map__33009);var kline = cljs.core.get.call(null,map__33009__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33010){var map__33011 = p__33010;var map__33011__$1 = ((cljs.core.seq_QMARK_.call(null,map__33011))?cljs.core.apply.call(null,cljs.core.hash_map,map__33011):map__33011);var kline = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33012,base,ctx){var map__33013 = p__33012;var map__33013__$1 = ((cljs.core.seq_QMARK_.call(null,map__33013))?cljs.core.apply.call(null,cljs.core.hash_map,map__33013):map__33013);var kline = cljs.core.get.call(null,map__33013__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__33013__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__33014 = base;var w = cljs.core.nth.call(null,vec__33014,(0),null);var h = cljs.core.nth.call(null,vec__33014,(1),null);var max_v = cljs.core.nth.call(null,vec__33014,(2),null);var min_v = cljs.core.nth.call(null,vec__33014,(3),null);var offset_v = cljs.core.nth.call(null,vec__33014,(4),null);var offset_x = cljs.core.nth.call(null,vec__33014,(5),null);var pos_y = cljs.core.nth.call(null,vec__33014,(6),null);(ctx["fillStyle"] = "black");
var seq__33015 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33014,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33013,map__33013__$1,kline,info){
return (function() { 
var G__33023__delegate = function (args){return args;
};
var G__33023 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33023__delegate.call(this,args);};
G__33023.cljs$lang$maxFixedArity = 0;
G__33023.cljs$lang$applyTo = (function (arglist__33024){
var args = cljs.core.seq(arglist__33024);
return G__33023__delegate(args);
});
G__33023.cljs$core$IFn$_invoke$arity$variadic = G__33023__delegate;
return G__33023;
})()
;})(vec__33014,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33013,map__33013__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__33016 = null;var count__33017 = (0);var i__33018 = (0);while(true){
if((i__33018 < count__33017))
{var vec__33019 = cljs.core._nth.call(null,chunk__33016,i__33018);var idx = cljs.core.nth.call(null,vec__33019,(0),null);var vec__33020 = cljs.core.nth.call(null,vec__33019,(1),null);var date = cljs.core.nth.call(null,vec__33020,(0),null);var open = cljs.core.nth.call(null,vec__33020,(1),null);var high = cljs.core.nth.call(null,vec__33020,(2),null);var low = cljs.core.nth.call(null,vec__33020,(3),null);var close = cljs.core.nth.call(null,vec__33020,(4),null);var volume = cljs.core.nth.call(null,vec__33020,(5),null);var info__$1 = cljs.core.nth.call(null,vec__33019,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__33025 = seq__33015;
var G__33026 = chunk__33016;
var G__33027 = count__33017;
var G__33028 = (i__33018 + (1));
seq__33015 = G__33025;
chunk__33016 = G__33026;
count__33017 = G__33027;
i__33018 = G__33028;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33015);if(temp__4126__auto__)
{var seq__33015__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33015__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33015__$1);{
var G__33029 = cljs.core.chunk_rest.call(null,seq__33015__$1);
var G__33030 = c__4307__auto__;
var G__33031 = cljs.core.count.call(null,c__4307__auto__);
var G__33032 = (0);
seq__33015 = G__33029;
chunk__33016 = G__33030;
count__33017 = G__33031;
i__33018 = G__33032;
continue;
}
} else
{var vec__33021 = cljs.core.first.call(null,seq__33015__$1);var idx = cljs.core.nth.call(null,vec__33021,(0),null);var vec__33022 = cljs.core.nth.call(null,vec__33021,(1),null);var date = cljs.core.nth.call(null,vec__33022,(0),null);var open = cljs.core.nth.call(null,vec__33022,(1),null);var high = cljs.core.nth.call(null,vec__33022,(2),null);var low = cljs.core.nth.call(null,vec__33022,(3),null);var close = cljs.core.nth.call(null,vec__33022,(4),null);var volume = cljs.core.nth.call(null,vec__33022,(5),null);var info__$1 = cljs.core.nth.call(null,vec__33021,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__33033 = cljs.core.next.call(null,seq__33015__$1);
var G__33034 = null;
var G__33035 = (0);
var G__33036 = (0);
seq__33015 = G__33033;
chunk__33016 = G__33034;
count__33017 = G__33035;
i__33018 = G__33036;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33037){var map__33038 = p__33037;var map__33038__$1 = ((cljs.core.seq_QMARK_.call(null,map__33038))?cljs.core.apply.call(null,cljs.core.hash_map,map__33038):map__33038);var cz = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33039){var map__33040 = p__33039;var map__33040__$1 = ((cljs.core.seq_QMARK_.call(null,map__33040))?cljs.core.apply.call(null,cljs.core.hash_map,map__33040):map__33040);var cz = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33041,base,ctx){var map__33042 = p__33041;var map__33042__$1 = ((cljs.core.seq_QMARK_.call(null,map__33042))?cljs.core.apply.call(null,cljs.core.hash_map,map__33042):map__33042);var cz = cljs.core.get.call(null,map__33042__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__33042__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__33042__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__33043 = base;var w = cljs.core.nth.call(null,vec__33043,(0),null);var h = cljs.core.nth.call(null,vec__33043,(1),null);var max_v = cljs.core.nth.call(null,vec__33043,(2),null);var min_v = cljs.core.nth.call(null,vec__33043,(3),null);var offset_v = cljs.core.nth.call(null,vec__33043,(4),null);var offset_x = cljs.core.nth.call(null,vec__33043,(5),null);var pos_y = cljs.core.nth.call(null,vec__33043,(6),null);var proj_x = ((function (vec__33043,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33042,map__33042__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__33043,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33042,map__33042__$1,cz,vz,color))
;var proj_y = ((function (vec__33043,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__33042,map__33042__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__33043,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__33042,map__33042__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__33044 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33043,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__33042,map__33042__$1,cz,vz,color){
return (function() { 
var G__33050__delegate = function (args){return args;
};
var G__33050 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33050__delegate.call(this,args);};
G__33050.cljs$lang$maxFixedArity = 0;
G__33050.cljs$lang$applyTo = (function (arglist__33051){
var args = cljs.core.seq(arglist__33051);
return G__33050__delegate(args);
});
G__33050.cljs$core$IFn$_invoke$arity$variadic = G__33050__delegate;
return G__33050;
})()
;})(vec__33043,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__33042,map__33042__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__33045 = null;var count__33046 = (0);var i__33047 = (0);while(true){
if((i__33047 < count__33046))
{var vec__33048 = cljs.core._nth.call(null,chunk__33045,i__33047);var idx = cljs.core.nth.call(null,vec__33048,(0),null);var pc = cljs.core.nth.call(null,vec__33048,(1),null);var cc = cljs.core.nth.call(null,vec__33048,(2),null);var pv = cljs.core.nth.call(null,vec__33048,(3),null);var cv = cljs.core.nth.call(null,vec__33048,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__33052 = seq__33044;
var G__33053 = chunk__33045;
var G__33054 = count__33046;
var G__33055 = (i__33047 + (1));
seq__33044 = G__33052;
chunk__33045 = G__33053;
count__33046 = G__33054;
i__33047 = G__33055;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33044);if(temp__4126__auto__)
{var seq__33044__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33044__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33044__$1);{
var G__33056 = cljs.core.chunk_rest.call(null,seq__33044__$1);
var G__33057 = c__4307__auto__;
var G__33058 = cljs.core.count.call(null,c__4307__auto__);
var G__33059 = (0);
seq__33044 = G__33056;
chunk__33045 = G__33057;
count__33046 = G__33058;
i__33047 = G__33059;
continue;
}
} else
{var vec__33049 = cljs.core.first.call(null,seq__33044__$1);var idx = cljs.core.nth.call(null,vec__33049,(0),null);var pc = cljs.core.nth.call(null,vec__33049,(1),null);var cc = cljs.core.nth.call(null,vec__33049,(2),null);var pv = cljs.core.nth.call(null,vec__33049,(3),null);var cv = cljs.core.nth.call(null,vec__33049,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__33060 = cljs.core.next.call(null,seq__33044__$1);
var G__33061 = null;
var G__33062 = (0);
var G__33063 = (0);
seq__33044 = G__33060;
chunk__33045 = G__33061;
count__33046 = G__33062;
i__33047 = G__33063;
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
