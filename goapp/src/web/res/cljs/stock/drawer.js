// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24872){var map__24873 = p__24872;var map__24873__$1 = ((cljs.core.seq_QMARK_.call(null,map__24873))?cljs.core.apply.call(null,cljs.core.hash_map,map__24873):map__24873);var t = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24874){var map__24875 = p__24874;var map__24875__$1 = ((cljs.core.seq_QMARK_.call(null,map__24875))?cljs.core.apply.call(null,cljs.core.hash_map,map__24875):map__24875);var t = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24876){var map__24877 = p__24876;var map__24877__$1 = ((cljs.core.seq_QMARK_.call(null,map__24877))?cljs.core.apply.call(null,cljs.core.hash_map,map__24877):map__24877);var t = cljs.core.get.call(null,map__24877__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24878,base,ctx){var map__24879 = p__24878;var map__24879__$1 = ((cljs.core.seq_QMARK_.call(null,map__24879))?cljs.core.apply.call(null,cljs.core.hash_map,map__24879):map__24879);var t = cljs.core.get.call(null,map__24879__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__24880,w,h,ctx){var map__24886 = p__24880;var map__24886__$1 = ((cljs.core.seq_QMARK_.call(null,map__24886))?cljs.core.apply.call(null,cljs.core.hash_map,map__24886):map__24886);var info = map__24886__$1;var drawers = cljs.core.get.call(null,map__24886__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__24887 = cljs.core.seq.call(null,drawers);var chunk__24888 = null;var count__24889 = (0);var i__24890 = (0);while(true){
if((i__24890 < count__24889))
{var drawer = cljs.core._nth.call(null,chunk__24888,i__24890);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__24891 = seq__24887;
var G__24892 = chunk__24888;
var G__24893 = count__24889;
var G__24894 = (i__24890 + (1));
seq__24887 = G__24891;
chunk__24888 = G__24892;
count__24889 = G__24893;
i__24890 = G__24894;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24887);if(temp__4126__auto__)
{var seq__24887__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24887__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24887__$1);{
var G__24895 = cljs.core.chunk_rest.call(null,seq__24887__$1);
var G__24896 = c__4307__auto__;
var G__24897 = cljs.core.count.call(null,c__4307__auto__);
var G__24898 = (0);
seq__24887 = G__24895;
chunk__24888 = G__24896;
count__24889 = G__24897;
i__24890 = G__24898;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__24887__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__24899 = cljs.core.next.call(null,seq__24887__$1);
var G__24900 = null;
var G__24901 = (0);
var G__24902 = (0);
seq__24887 = G__24899;
chunk__24888 = G__24900;
count__24889 = G__24901;
i__24890 = G__24902;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24903){var map__24904 = p__24903;var map__24904__$1 = ((cljs.core.seq_QMARK_.call(null,map__24904))?cljs.core.apply.call(null,cljs.core.hash_map,map__24904):map__24904);var line = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24905){var map__24906 = p__24905;var map__24906__$1 = ((cljs.core.seq_QMARK_.call(null,map__24906))?cljs.core.apply.call(null,cljs.core.hash_map,map__24906):map__24906);var line = cljs.core.get.call(null,map__24906__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24906__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24907){var map__24908 = p__24907;var map__24908__$1 = ((cljs.core.seq_QMARK_.call(null,map__24908))?cljs.core.apply.call(null,cljs.core.hash_map,map__24908):map__24908);var line = cljs.core.get.call(null,map__24908__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24908__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24909,base,ctx){var map__24910 = p__24909;var map__24910__$1 = ((cljs.core.seq_QMARK_.call(null,map__24910))?cljs.core.apply.call(null,cljs.core.hash_map,map__24910):map__24910);var line = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__24911 = base;var w = cljs.core.nth.call(null,vec__24911,(0),null);var h = cljs.core.nth.call(null,vec__24911,(1),null);var max_v = cljs.core.nth.call(null,vec__24911,(2),null);var min_v = cljs.core.nth.call(null,vec__24911,(3),null);var offset_v = cljs.core.nth.call(null,vec__24911,(4),null);var offset_x = cljs.core.nth.call(null,vec__24911,(5),null);var pos_y = cljs.core.nth.call(null,vec__24911,(6),null);var cnt = (6);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__24912_24924 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__24913_24925 = null;var count__24914_24926 = (0);var i__24915_24927 = (0);while(true){
if((i__24915_24927 < count__24914_24926))
{var i_24928 = cljs.core._nth.call(null,chunk__24913_24925,i__24915_24927);var v_24929 = (min_v + (i_24928 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24929.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_24929));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24929.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_24929));
ctx.moveTo((0),pos_y.call(null,v_24929));
ctx.lineTo(w,pos_y.call(null,v_24929));
{
var G__24930 = seq__24912_24924;
var G__24931 = chunk__24913_24925;
var G__24932 = count__24914_24926;
var G__24933 = (i__24915_24927 + (1));
seq__24912_24924 = G__24930;
chunk__24913_24925 = G__24931;
count__24914_24926 = G__24932;
i__24915_24927 = G__24933;
continue;
}
} else
{var temp__4126__auto___24934 = cljs.core.seq.call(null,seq__24912_24924);if(temp__4126__auto___24934)
{var seq__24912_24935__$1 = temp__4126__auto___24934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24912_24935__$1))
{var c__4307__auto___24936 = cljs.core.chunk_first.call(null,seq__24912_24935__$1);{
var G__24937 = cljs.core.chunk_rest.call(null,seq__24912_24935__$1);
var G__24938 = c__4307__auto___24936;
var G__24939 = cljs.core.count.call(null,c__4307__auto___24936);
var G__24940 = (0);
seq__24912_24924 = G__24937;
chunk__24913_24925 = G__24938;
count__24914_24926 = G__24939;
i__24915_24927 = G__24940;
continue;
}
} else
{var i_24941 = cljs.core.first.call(null,seq__24912_24935__$1);var v_24942 = (min_v + (i_24941 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24942.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_24942));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24942.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_24942));
ctx.moveTo((0),pos_y.call(null,v_24942));
ctx.lineTo(w,pos_y.call(null,v_24942));
{
var G__24943 = cljs.core.next.call(null,seq__24912_24935__$1);
var G__24944 = null;
var G__24945 = (0);
var G__24946 = (0);
seq__24912_24924 = G__24943;
chunk__24913_24925 = G__24944;
count__24914_24926 = G__24945;
i__24915_24927 = G__24946;
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
{var seq__24916_24947 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__24917_24948 = null;var count__24918_24949 = (0);var i__24919_24950 = (0);while(true){
if((i__24919_24950 < count__24918_24949))
{var i_24951 = cljs.core._nth.call(null,chunk__24917_24948,i__24919_24950);if((cljs.core.mod.call(null,i_24951,cntx) === (0)))
{var posx_24952 = ((offset_x / (2)) + (i_24951 * offset_x));ctx.moveTo(posx_24952,(0));
ctx.lineTo(posx_24952,h);
} else
{}
{
var G__24953 = seq__24916_24947;
var G__24954 = chunk__24917_24948;
var G__24955 = count__24918_24949;
var G__24956 = (i__24919_24950 + (1));
seq__24916_24947 = G__24953;
chunk__24917_24948 = G__24954;
count__24918_24949 = G__24955;
i__24919_24950 = G__24956;
continue;
}
} else
{var temp__4126__auto___24957 = cljs.core.seq.call(null,seq__24916_24947);if(temp__4126__auto___24957)
{var seq__24916_24958__$1 = temp__4126__auto___24957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24916_24958__$1))
{var c__4307__auto___24959 = cljs.core.chunk_first.call(null,seq__24916_24958__$1);{
var G__24960 = cljs.core.chunk_rest.call(null,seq__24916_24958__$1);
var G__24961 = c__4307__auto___24959;
var G__24962 = cljs.core.count.call(null,c__4307__auto___24959);
var G__24963 = (0);
seq__24916_24947 = G__24960;
chunk__24917_24948 = G__24961;
count__24918_24949 = G__24962;
i__24919_24950 = G__24963;
continue;
}
} else
{var i_24964 = cljs.core.first.call(null,seq__24916_24958__$1);if((cljs.core.mod.call(null,i_24964,cntx) === (0)))
{var posx_24965 = ((offset_x / (2)) + (i_24964 * offset_x));ctx.moveTo(posx_24965,(0));
ctx.lineTo(posx_24965,h);
} else
{}
{
var G__24966 = cljs.core.next.call(null,seq__24916_24958__$1);
var G__24967 = null;
var G__24968 = (0);
var G__24969 = (0);
seq__24916_24947 = G__24966;
chunk__24917_24948 = G__24967;
count__24918_24949 = G__24968;
i__24919_24950 = G__24969;
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
{var seq__24920_24970 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__24921_24971 = null;var count__24922_24972 = (0);var i__24923_24973 = (0);while(true){
if((i__24923_24973 < count__24922_24972))
{var i_24974 = cljs.core._nth.call(null,chunk__24921_24971,i__24923_24973);if((cljs.core.mod.call(null,i_24974,cntx) === (0)))
{var posx_24975 = ((offset_x / (2)) + (i_24974 * offset_x));ctx.moveTo(posx_24975,(0));
ctx.lineTo(posx_24975,h);
} else
{}
{
var G__24976 = seq__24920_24970;
var G__24977 = chunk__24921_24971;
var G__24978 = count__24922_24972;
var G__24979 = (i__24923_24973 + (1));
seq__24920_24970 = G__24976;
chunk__24921_24971 = G__24977;
count__24922_24972 = G__24978;
i__24923_24973 = G__24979;
continue;
}
} else
{var temp__4126__auto___24980 = cljs.core.seq.call(null,seq__24920_24970);if(temp__4126__auto___24980)
{var seq__24920_24981__$1 = temp__4126__auto___24980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24920_24981__$1))
{var c__4307__auto___24982 = cljs.core.chunk_first.call(null,seq__24920_24981__$1);{
var G__24983 = cljs.core.chunk_rest.call(null,seq__24920_24981__$1);
var G__24984 = c__4307__auto___24982;
var G__24985 = cljs.core.count.call(null,c__4307__auto___24982);
var G__24986 = (0);
seq__24920_24970 = G__24983;
chunk__24921_24971 = G__24984;
count__24922_24972 = G__24985;
i__24923_24973 = G__24986;
continue;
}
} else
{var i_24987 = cljs.core.first.call(null,seq__24920_24981__$1);if((cljs.core.mod.call(null,i_24987,cntx) === (0)))
{var posx_24988 = ((offset_x / (2)) + (i_24987 * offset_x));ctx.moveTo(posx_24988,(0));
ctx.lineTo(posx_24988,h);
} else
{}
{
var G__24989 = cljs.core.next.call(null,seq__24920_24981__$1);
var G__24990 = null;
var G__24991 = (0);
var G__24992 = (0);
seq__24920_24970 = G__24989;
chunk__24921_24971 = G__24990;
count__24922_24972 = G__24991;
i__24923_24973 = G__24992;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24993){var map__24994 = p__24993;var map__24994__$1 = ((cljs.core.seq_QMARK_.call(null,map__24994))?cljs.core.apply.call(null,cljs.core.hash_map,map__24994):map__24994);var line = cljs.core.get.call(null,map__24994__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24995){var map__24996 = p__24995;var map__24996__$1 = ((cljs.core.seq_QMARK_.call(null,map__24996))?cljs.core.apply.call(null,cljs.core.hash_map,map__24996):map__24996);var line = cljs.core.get.call(null,map__24996__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24997){var map__24998 = p__24997;var map__24998__$1 = ((cljs.core.seq_QMARK_.call(null,map__24998))?cljs.core.apply.call(null,cljs.core.hash_map,map__24998):map__24998);var line = cljs.core.get.call(null,map__24998__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24999,base,ctx){var map__25000 = p__24999;var map__25000__$1 = ((cljs.core.seq_QMARK_.call(null,map__25000))?cljs.core.apply.call(null,cljs.core.hash_map,map__25000):map__25000);var line = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__25001 = base;var w = cljs.core.nth.call(null,vec__25001,(0),null);var h = cljs.core.nth.call(null,vec__25001,(1),null);var max_v = cljs.core.nth.call(null,vec__25001,(2),null);var min_v = cljs.core.nth.call(null,vec__25001,(3),null);var offset_v = cljs.core.nth.call(null,vec__25001,(4),null);var offset_x = cljs.core.nth.call(null,vec__25001,(5),null);var pos_y = cljs.core.nth.call(null,vec__25001,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__25002 = cljs.core._EQ_;var expr__25003 = style;if(cljs.core.truth_(pred__25002.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__25003)))
{(ctx["fillStyle"] = color);
var seq__25005 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__25006 = null;var count__25007 = (0);var i__25008 = (0);while(true){
if((i__25008 < count__25007))
{var vec__25009 = cljs.core._nth.call(null,chunk__25006,i__25008);var idx = cljs.core.nth.call(null,vec__25009,(0),null);var value = cljs.core.nth.call(null,vec__25009,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__25017 = seq__25005;
var G__25018 = chunk__25006;
var G__25019 = count__25007;
var G__25020 = (i__25008 + (1));
seq__25005 = G__25017;
chunk__25006 = G__25018;
count__25007 = G__25019;
i__25008 = G__25020;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25005);if(temp__4126__auto__)
{var seq__25005__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25005__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25005__$1);{
var G__25021 = cljs.core.chunk_rest.call(null,seq__25005__$1);
var G__25022 = c__4307__auto__;
var G__25023 = cljs.core.count.call(null,c__4307__auto__);
var G__25024 = (0);
seq__25005 = G__25021;
chunk__25006 = G__25022;
count__25007 = G__25023;
i__25008 = G__25024;
continue;
}
} else
{var vec__25010 = cljs.core.first.call(null,seq__25005__$1);var idx = cljs.core.nth.call(null,vec__25010,(0),null);var value = cljs.core.nth.call(null,vec__25010,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__25025 = cljs.core.next.call(null,seq__25005__$1);
var G__25026 = null;
var G__25027 = (0);
var G__25028 = (0);
seq__25005 = G__25025;
chunk__25006 = G__25026;
count__25007 = G__25027;
i__25008 = G__25028;
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
var seq__25011_25029 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__25002,expr__25003,vec__25001,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__25000,map__25000__$1,line,color,offset,style){
return (function() { 
var G__25033__delegate = function (args){return args;
};
var G__25033 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25033__delegate.call(this,args);};
G__25033.cljs$lang$maxFixedArity = 0;
G__25033.cljs$lang$applyTo = (function (arglist__25034){
var args = cljs.core.seq(arglist__25034);
return G__25033__delegate(args);
});
G__25033.cljs$core$IFn$_invoke$arity$variadic = G__25033__delegate;
return G__25033;
})()
;})(pred__25002,expr__25003,vec__25001,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__25000,map__25000__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__25012_25030 = null;var count__25013_25031 = (0);var i__25014_25032 = (0);while(true){
if((i__25014_25032 < count__25013_25031))
{var vec__25015_25035 = cljs.core._nth.call(null,chunk__25012_25030,i__25014_25032);var idx_25036 = cljs.core.nth.call(null,vec__25015_25035,(0),null);var prev_25037 = cljs.core.nth.call(null,vec__25015_25035,(1),null);var curr_25038 = cljs.core.nth.call(null,vec__25015_25035,(2),null);ctx.moveTo(((idx_25036 + offset__$1) * offset_x),pos_y.call(null,prev_25037));
ctx.lineTo((((idx_25036 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25038));
{
var G__25039 = seq__25011_25029;
var G__25040 = chunk__25012_25030;
var G__25041 = count__25013_25031;
var G__25042 = (i__25014_25032 + (1));
seq__25011_25029 = G__25039;
chunk__25012_25030 = G__25040;
count__25013_25031 = G__25041;
i__25014_25032 = G__25042;
continue;
}
} else
{var temp__4126__auto___25043 = cljs.core.seq.call(null,seq__25011_25029);if(temp__4126__auto___25043)
{var seq__25011_25044__$1 = temp__4126__auto___25043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25011_25044__$1))
{var c__4307__auto___25045 = cljs.core.chunk_first.call(null,seq__25011_25044__$1);{
var G__25046 = cljs.core.chunk_rest.call(null,seq__25011_25044__$1);
var G__25047 = c__4307__auto___25045;
var G__25048 = cljs.core.count.call(null,c__4307__auto___25045);
var G__25049 = (0);
seq__25011_25029 = G__25046;
chunk__25012_25030 = G__25047;
count__25013_25031 = G__25048;
i__25014_25032 = G__25049;
continue;
}
} else
{var vec__25016_25050 = cljs.core.first.call(null,seq__25011_25044__$1);var idx_25051 = cljs.core.nth.call(null,vec__25016_25050,(0),null);var prev_25052 = cljs.core.nth.call(null,vec__25016_25050,(1),null);var curr_25053 = cljs.core.nth.call(null,vec__25016_25050,(2),null);ctx.moveTo(((idx_25051 + offset__$1) * offset_x),pos_y.call(null,prev_25052));
ctx.lineTo((((idx_25051 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25053));
{
var G__25054 = cljs.core.next.call(null,seq__25011_25044__$1);
var G__25055 = null;
var G__25056 = (0);
var G__25057 = (0);
seq__25011_25029 = G__25054;
chunk__25012_25030 = G__25055;
count__25013_25031 = G__25056;
i__25014_25032 = G__25057;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25058){var map__25059 = p__25058;var map__25059__$1 = ((cljs.core.seq_QMARK_.call(null,map__25059))?cljs.core.apply.call(null,cljs.core.hash_map,map__25059):map__25059);var kline = cljs.core.get.call(null,map__25059__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25060){var map__25061 = p__25060;var map__25061__$1 = ((cljs.core.seq_QMARK_.call(null,map__25061))?cljs.core.apply.call(null,cljs.core.hash_map,map__25061):map__25061);var kline = cljs.core.get.call(null,map__25061__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25062){var map__25063 = p__25062;var map__25063__$1 = ((cljs.core.seq_QMARK_.call(null,map__25063))?cljs.core.apply.call(null,cljs.core.hash_map,map__25063):map__25063);var kline = cljs.core.get.call(null,map__25063__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25064,base,ctx){var map__25065 = p__25064;var map__25065__$1 = ((cljs.core.seq_QMARK_.call(null,map__25065))?cljs.core.apply.call(null,cljs.core.hash_map,map__25065):map__25065);var kline = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__25066 = base;var w = cljs.core.nth.call(null,vec__25066,(0),null);var h = cljs.core.nth.call(null,vec__25066,(1),null);var max_v = cljs.core.nth.call(null,vec__25066,(2),null);var min_v = cljs.core.nth.call(null,vec__25066,(3),null);var offset_v = cljs.core.nth.call(null,vec__25066,(4),null);var offset_x = cljs.core.nth.call(null,vec__25066,(5),null);var pos_y = cljs.core.nth.call(null,vec__25066,(6),null);(ctx["fillStyle"] = "black");
var seq__25067 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25066,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25065,map__25065__$1,kline,info){
return (function() { 
var G__25075__delegate = function (args){return args;
};
var G__25075 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25075__delegate.call(this,args);};
G__25075.cljs$lang$maxFixedArity = 0;
G__25075.cljs$lang$applyTo = (function (arglist__25076){
var args = cljs.core.seq(arglist__25076);
return G__25075__delegate(args);
});
G__25075.cljs$core$IFn$_invoke$arity$variadic = G__25075__delegate;
return G__25075;
})()
;})(vec__25066,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25065,map__25065__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__25068 = null;var count__25069 = (0);var i__25070 = (0);while(true){
if((i__25070 < count__25069))
{var vec__25071 = cljs.core._nth.call(null,chunk__25068,i__25070);var idx = cljs.core.nth.call(null,vec__25071,(0),null);var vec__25072 = cljs.core.nth.call(null,vec__25071,(1),null);var date = cljs.core.nth.call(null,vec__25072,(0),null);var open = cljs.core.nth.call(null,vec__25072,(1),null);var high = cljs.core.nth.call(null,vec__25072,(2),null);var low = cljs.core.nth.call(null,vec__25072,(3),null);var close = cljs.core.nth.call(null,vec__25072,(4),null);var volume = cljs.core.nth.call(null,vec__25072,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25071,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25077 = seq__25067;
var G__25078 = chunk__25068;
var G__25079 = count__25069;
var G__25080 = (i__25070 + (1));
seq__25067 = G__25077;
chunk__25068 = G__25078;
count__25069 = G__25079;
i__25070 = G__25080;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25067);if(temp__4126__auto__)
{var seq__25067__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25067__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25067__$1);{
var G__25081 = cljs.core.chunk_rest.call(null,seq__25067__$1);
var G__25082 = c__4307__auto__;
var G__25083 = cljs.core.count.call(null,c__4307__auto__);
var G__25084 = (0);
seq__25067 = G__25081;
chunk__25068 = G__25082;
count__25069 = G__25083;
i__25070 = G__25084;
continue;
}
} else
{var vec__25073 = cljs.core.first.call(null,seq__25067__$1);var idx = cljs.core.nth.call(null,vec__25073,(0),null);var vec__25074 = cljs.core.nth.call(null,vec__25073,(1),null);var date = cljs.core.nth.call(null,vec__25074,(0),null);var open = cljs.core.nth.call(null,vec__25074,(1),null);var high = cljs.core.nth.call(null,vec__25074,(2),null);var low = cljs.core.nth.call(null,vec__25074,(3),null);var close = cljs.core.nth.call(null,vec__25074,(4),null);var volume = cljs.core.nth.call(null,vec__25074,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25073,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25085 = cljs.core.next.call(null,seq__25067__$1);
var G__25086 = null;
var G__25087 = (0);
var G__25088 = (0);
seq__25067 = G__25085;
chunk__25068 = G__25086;
count__25069 = G__25087;
i__25070 = G__25088;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25089){var map__25090 = p__25089;var map__25090__$1 = ((cljs.core.seq_QMARK_.call(null,map__25090))?cljs.core.apply.call(null,cljs.core.hash_map,map__25090):map__25090);var cz = cljs.core.get.call(null,map__25090__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25091){var map__25092 = p__25091;var map__25092__$1 = ((cljs.core.seq_QMARK_.call(null,map__25092))?cljs.core.apply.call(null,cljs.core.hash_map,map__25092):map__25092);var cz = cljs.core.get.call(null,map__25092__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25093,base,ctx){var map__25094 = p__25093;var map__25094__$1 = ((cljs.core.seq_QMARK_.call(null,map__25094))?cljs.core.apply.call(null,cljs.core.hash_map,map__25094):map__25094);var cz = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__25094__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__25095 = base;var w = cljs.core.nth.call(null,vec__25095,(0),null);var h = cljs.core.nth.call(null,vec__25095,(1),null);var max_v = cljs.core.nth.call(null,vec__25095,(2),null);var min_v = cljs.core.nth.call(null,vec__25095,(3),null);var offset_v = cljs.core.nth.call(null,vec__25095,(4),null);var offset_x = cljs.core.nth.call(null,vec__25095,(5),null);var pos_y = cljs.core.nth.call(null,vec__25095,(6),null);var proj_x = ((function (vec__25095,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25094,map__25094__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__25095,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25094,map__25094__$1,cz,vz,color))
;var proj_y = ((function (vec__25095,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25094,map__25094__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__25095,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25094,map__25094__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__25096 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25095,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25094,map__25094__$1,cz,vz,color){
return (function() { 
var G__25102__delegate = function (args){return args;
};
var G__25102 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25102__delegate.call(this,args);};
G__25102.cljs$lang$maxFixedArity = 0;
G__25102.cljs$lang$applyTo = (function (arglist__25103){
var args = cljs.core.seq(arglist__25103);
return G__25102__delegate(args);
});
G__25102.cljs$core$IFn$_invoke$arity$variadic = G__25102__delegate;
return G__25102;
})()
;})(vec__25095,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25094,map__25094__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__25097 = null;var count__25098 = (0);var i__25099 = (0);while(true){
if((i__25099 < count__25098))
{var vec__25100 = cljs.core._nth.call(null,chunk__25097,i__25099);var idx = cljs.core.nth.call(null,vec__25100,(0),null);var pc = cljs.core.nth.call(null,vec__25100,(1),null);var cc = cljs.core.nth.call(null,vec__25100,(2),null);var pv = cljs.core.nth.call(null,vec__25100,(3),null);var cv = cljs.core.nth.call(null,vec__25100,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25104 = seq__25096;
var G__25105 = chunk__25097;
var G__25106 = count__25098;
var G__25107 = (i__25099 + (1));
seq__25096 = G__25104;
chunk__25097 = G__25105;
count__25098 = G__25106;
i__25099 = G__25107;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25096);if(temp__4126__auto__)
{var seq__25096__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25096__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25096__$1);{
var G__25108 = cljs.core.chunk_rest.call(null,seq__25096__$1);
var G__25109 = c__4307__auto__;
var G__25110 = cljs.core.count.call(null,c__4307__auto__);
var G__25111 = (0);
seq__25096 = G__25108;
chunk__25097 = G__25109;
count__25098 = G__25110;
i__25099 = G__25111;
continue;
}
} else
{var vec__25101 = cljs.core.first.call(null,seq__25096__$1);var idx = cljs.core.nth.call(null,vec__25101,(0),null);var pc = cljs.core.nth.call(null,vec__25101,(1),null);var cc = cljs.core.nth.call(null,vec__25101,(2),null);var pv = cljs.core.nth.call(null,vec__25101,(3),null);var cv = cljs.core.nth.call(null,vec__25101,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25112 = cljs.core.next.call(null,seq__25096__$1);
var G__25113 = null;
var G__25114 = (0);
var G__25115 = (0);
seq__25096 = G__25112;
chunk__25097 = G__25113;
count__25098 = G__25114;
i__25099 = G__25115;
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
