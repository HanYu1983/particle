// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24844){var map__24845 = p__24844;var map__24845__$1 = ((cljs.core.seq_QMARK_.call(null,map__24845))?cljs.core.apply.call(null,cljs.core.hash_map,map__24845):map__24845);var t = cljs.core.get.call(null,map__24845__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24846){var map__24847 = p__24846;var map__24847__$1 = ((cljs.core.seq_QMARK_.call(null,map__24847))?cljs.core.apply.call(null,cljs.core.hash_map,map__24847):map__24847);var t = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24848){var map__24849 = p__24848;var map__24849__$1 = ((cljs.core.seq_QMARK_.call(null,map__24849))?cljs.core.apply.call(null,cljs.core.hash_map,map__24849):map__24849);var t = cljs.core.get.call(null,map__24849__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__24850,base,ctx){var map__24851 = p__24850;var map__24851__$1 = ((cljs.core.seq_QMARK_.call(null,map__24851))?cljs.core.apply.call(null,cljs.core.hash_map,map__24851):map__24851);var t = cljs.core.get.call(null,map__24851__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__24852,w,h,ctx){var map__24858 = p__24852;var map__24858__$1 = ((cljs.core.seq_QMARK_.call(null,map__24858))?cljs.core.apply.call(null,cljs.core.hash_map,map__24858):map__24858);var info = map__24858__$1;var drawers = cljs.core.get.call(null,map__24858__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__24859 = cljs.core.seq.call(null,drawers);var chunk__24860 = null;var count__24861 = (0);var i__24862 = (0);while(true){
if((i__24862 < count__24861))
{var drawer = cljs.core._nth.call(null,chunk__24860,i__24862);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__24863 = seq__24859;
var G__24864 = chunk__24860;
var G__24865 = count__24861;
var G__24866 = (i__24862 + (1));
seq__24859 = G__24863;
chunk__24860 = G__24864;
count__24861 = G__24865;
i__24862 = G__24866;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24859);if(temp__4126__auto__)
{var seq__24859__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24859__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24859__$1);{
var G__24867 = cljs.core.chunk_rest.call(null,seq__24859__$1);
var G__24868 = c__4307__auto__;
var G__24869 = cljs.core.count.call(null,c__4307__auto__);
var G__24870 = (0);
seq__24859 = G__24867;
chunk__24860 = G__24868;
count__24861 = G__24869;
i__24862 = G__24870;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__24859__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__24871 = cljs.core.next.call(null,seq__24859__$1);
var G__24872 = null;
var G__24873 = (0);
var G__24874 = (0);
seq__24859 = G__24871;
chunk__24860 = G__24872;
count__24861 = G__24873;
i__24862 = G__24874;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24875){var map__24876 = p__24875;var map__24876__$1 = ((cljs.core.seq_QMARK_.call(null,map__24876))?cljs.core.apply.call(null,cljs.core.hash_map,map__24876):map__24876);var line = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24877){var map__24878 = p__24877;var map__24878__$1 = ((cljs.core.seq_QMARK_.call(null,map__24878))?cljs.core.apply.call(null,cljs.core.hash_map,map__24878):map__24878);var line = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24879){var map__24880 = p__24879;var map__24880__$1 = ((cljs.core.seq_QMARK_.call(null,map__24880))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);var line = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__24881,base,ctx){var map__24882 = p__24881;var map__24882__$1 = ((cljs.core.seq_QMARK_.call(null,map__24882))?cljs.core.apply.call(null,cljs.core.hash_map,map__24882):map__24882);var line = cljs.core.get.call(null,map__24882__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__24882__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__24882__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__24882__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__24883 = base;var w = cljs.core.nth.call(null,vec__24883,(0),null);var h = cljs.core.nth.call(null,vec__24883,(1),null);var max_v = cljs.core.nth.call(null,vec__24883,(2),null);var min_v = cljs.core.nth.call(null,vec__24883,(3),null);var offset_v = cljs.core.nth.call(null,vec__24883,(4),null);var offset_x = cljs.core.nth.call(null,vec__24883,(5),null);var pos_y = cljs.core.nth.call(null,vec__24883,(6),null);var cnt = (6);var cntx = (20);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__24884_24896 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__24885_24897 = null;var count__24886_24898 = (0);var i__24887_24899 = (0);while(true){
if((i__24887_24899 < count__24886_24898))
{var i_24900 = cljs.core._nth.call(null,chunk__24885_24897,i__24887_24899);var v_24901 = (min_v + (i_24900 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24901.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_24901));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24901.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_24901));
ctx.moveTo((0),pos_y.call(null,v_24901));
ctx.lineTo(w,pos_y.call(null,v_24901));
{
var G__24902 = seq__24884_24896;
var G__24903 = chunk__24885_24897;
var G__24904 = count__24886_24898;
var G__24905 = (i__24887_24899 + (1));
seq__24884_24896 = G__24902;
chunk__24885_24897 = G__24903;
count__24886_24898 = G__24904;
i__24887_24899 = G__24905;
continue;
}
} else
{var temp__4126__auto___24906 = cljs.core.seq.call(null,seq__24884_24896);if(temp__4126__auto___24906)
{var seq__24884_24907__$1 = temp__4126__auto___24906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24884_24907__$1))
{var c__4307__auto___24908 = cljs.core.chunk_first.call(null,seq__24884_24907__$1);{
var G__24909 = cljs.core.chunk_rest.call(null,seq__24884_24907__$1);
var G__24910 = c__4307__auto___24908;
var G__24911 = cljs.core.count.call(null,c__4307__auto___24908);
var G__24912 = (0);
seq__24884_24896 = G__24909;
chunk__24885_24897 = G__24910;
count__24886_24898 = G__24911;
i__24887_24899 = G__24912;
continue;
}
} else
{var i_24913 = cljs.core.first.call(null,seq__24884_24907__$1);var v_24914 = (min_v + (i_24913 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24914.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_24914));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_24914.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_24914));
ctx.moveTo((0),pos_y.call(null,v_24914));
ctx.lineTo(w,pos_y.call(null,v_24914));
{
var G__24915 = cljs.core.next.call(null,seq__24884_24907__$1);
var G__24916 = null;
var G__24917 = (0);
var G__24918 = (0);
seq__24884_24896 = G__24915;
chunk__24885_24897 = G__24916;
count__24886_24898 = G__24917;
i__24887_24899 = G__24918;
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
{var seq__24888_24919 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__24889_24920 = null;var count__24890_24921 = (0);var i__24891_24922 = (0);while(true){
if((i__24891_24922 < count__24890_24921))
{var i_24923 = cljs.core._nth.call(null,chunk__24889_24920,i__24891_24922);if((cljs.core.mod.call(null,i_24923,cntx) === (0)))
{var posx_24924 = ((offset_x / (2)) + (i_24923 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_24923)),posx_24924,h);
ctx.moveTo(posx_24924,(0));
ctx.lineTo(posx_24924,h);
} else
{}
{
var G__24925 = seq__24888_24919;
var G__24926 = chunk__24889_24920;
var G__24927 = count__24890_24921;
var G__24928 = (i__24891_24922 + (1));
seq__24888_24919 = G__24925;
chunk__24889_24920 = G__24926;
count__24890_24921 = G__24927;
i__24891_24922 = G__24928;
continue;
}
} else
{var temp__4126__auto___24929 = cljs.core.seq.call(null,seq__24888_24919);if(temp__4126__auto___24929)
{var seq__24888_24930__$1 = temp__4126__auto___24929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24888_24930__$1))
{var c__4307__auto___24931 = cljs.core.chunk_first.call(null,seq__24888_24930__$1);{
var G__24932 = cljs.core.chunk_rest.call(null,seq__24888_24930__$1);
var G__24933 = c__4307__auto___24931;
var G__24934 = cljs.core.count.call(null,c__4307__auto___24931);
var G__24935 = (0);
seq__24888_24919 = G__24932;
chunk__24889_24920 = G__24933;
count__24890_24921 = G__24934;
i__24891_24922 = G__24935;
continue;
}
} else
{var i_24936 = cljs.core.first.call(null,seq__24888_24930__$1);if((cljs.core.mod.call(null,i_24936,cntx) === (0)))
{var posx_24937 = ((offset_x / (2)) + (i_24936 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_24936)),posx_24937,h);
ctx.moveTo(posx_24937,(0));
ctx.lineTo(posx_24937,h);
} else
{}
{
var G__24938 = cljs.core.next.call(null,seq__24888_24930__$1);
var G__24939 = null;
var G__24940 = (0);
var G__24941 = (0);
seq__24888_24919 = G__24938;
chunk__24889_24920 = G__24939;
count__24890_24921 = G__24940;
i__24891_24922 = G__24941;
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
{var seq__24892_24942 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__24893_24943 = null;var count__24894_24944 = (0);var i__24895_24945 = (0);while(true){
if((i__24895_24945 < count__24894_24944))
{var i_24946 = cljs.core._nth.call(null,chunk__24893_24943,i__24895_24945);if((cljs.core.mod.call(null,i_24946,cntx) === (0)))
{var posx_24947 = ((offset_x / (2)) + (i_24946 * offset_x));ctx.moveTo(posx_24947,(0));
ctx.lineTo(posx_24947,h);
} else
{}
{
var G__24948 = seq__24892_24942;
var G__24949 = chunk__24893_24943;
var G__24950 = count__24894_24944;
var G__24951 = (i__24895_24945 + (1));
seq__24892_24942 = G__24948;
chunk__24893_24943 = G__24949;
count__24894_24944 = G__24950;
i__24895_24945 = G__24951;
continue;
}
} else
{var temp__4126__auto___24952 = cljs.core.seq.call(null,seq__24892_24942);if(temp__4126__auto___24952)
{var seq__24892_24953__$1 = temp__4126__auto___24952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24892_24953__$1))
{var c__4307__auto___24954 = cljs.core.chunk_first.call(null,seq__24892_24953__$1);{
var G__24955 = cljs.core.chunk_rest.call(null,seq__24892_24953__$1);
var G__24956 = c__4307__auto___24954;
var G__24957 = cljs.core.count.call(null,c__4307__auto___24954);
var G__24958 = (0);
seq__24892_24942 = G__24955;
chunk__24893_24943 = G__24956;
count__24894_24944 = G__24957;
i__24895_24945 = G__24958;
continue;
}
} else
{var i_24959 = cljs.core.first.call(null,seq__24892_24953__$1);if((cljs.core.mod.call(null,i_24959,cntx) === (0)))
{var posx_24960 = ((offset_x / (2)) + (i_24959 * offset_x));ctx.moveTo(posx_24960,(0));
ctx.lineTo(posx_24960,h);
} else
{}
{
var G__24961 = cljs.core.next.call(null,seq__24892_24953__$1);
var G__24962 = null;
var G__24963 = (0);
var G__24964 = (0);
seq__24892_24942 = G__24961;
chunk__24893_24943 = G__24962;
count__24894_24944 = G__24963;
i__24895_24945 = G__24964;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24965){var map__24966 = p__24965;var map__24966__$1 = ((cljs.core.seq_QMARK_.call(null,map__24966))?cljs.core.apply.call(null,cljs.core.hash_map,map__24966):map__24966);var line = cljs.core.get.call(null,map__24966__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24967){var map__24968 = p__24967;var map__24968__$1 = ((cljs.core.seq_QMARK_.call(null,map__24968))?cljs.core.apply.call(null,cljs.core.hash_map,map__24968):map__24968);var line = cljs.core.get.call(null,map__24968__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24969){var map__24970 = p__24969;var map__24970__$1 = ((cljs.core.seq_QMARK_.call(null,map__24970))?cljs.core.apply.call(null,cljs.core.hash_map,map__24970):map__24970);var line = cljs.core.get.call(null,map__24970__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24971,base,ctx){var map__24972 = p__24971;var map__24972__$1 = ((cljs.core.seq_QMARK_.call(null,map__24972))?cljs.core.apply.call(null,cljs.core.hash_map,map__24972):map__24972);var line = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__24973 = base;var w = cljs.core.nth.call(null,vec__24973,(0),null);var h = cljs.core.nth.call(null,vec__24973,(1),null);var max_v = cljs.core.nth.call(null,vec__24973,(2),null);var min_v = cljs.core.nth.call(null,vec__24973,(3),null);var offset_v = cljs.core.nth.call(null,vec__24973,(4),null);var offset_x = cljs.core.nth.call(null,vec__24973,(5),null);var pos_y = cljs.core.nth.call(null,vec__24973,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__24974 = cljs.core._EQ_;var expr__24975 = style;if(cljs.core.truth_(pred__24974.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__24975)))
{(ctx["fillStyle"] = color);
var seq__24977 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__24978 = null;var count__24979 = (0);var i__24980 = (0);while(true){
if((i__24980 < count__24979))
{var vec__24981 = cljs.core._nth.call(null,chunk__24978,i__24980);var idx = cljs.core.nth.call(null,vec__24981,(0),null);var value = cljs.core.nth.call(null,vec__24981,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__24989 = seq__24977;
var G__24990 = chunk__24978;
var G__24991 = count__24979;
var G__24992 = (i__24980 + (1));
seq__24977 = G__24989;
chunk__24978 = G__24990;
count__24979 = G__24991;
i__24980 = G__24992;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24977);if(temp__4126__auto__)
{var seq__24977__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24977__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24977__$1);{
var G__24993 = cljs.core.chunk_rest.call(null,seq__24977__$1);
var G__24994 = c__4307__auto__;
var G__24995 = cljs.core.count.call(null,c__4307__auto__);
var G__24996 = (0);
seq__24977 = G__24993;
chunk__24978 = G__24994;
count__24979 = G__24995;
i__24980 = G__24996;
continue;
}
} else
{var vec__24982 = cljs.core.first.call(null,seq__24977__$1);var idx = cljs.core.nth.call(null,vec__24982,(0),null);var value = cljs.core.nth.call(null,vec__24982,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__24997 = cljs.core.next.call(null,seq__24977__$1);
var G__24998 = null;
var G__24999 = (0);
var G__25000 = (0);
seq__24977 = G__24997;
chunk__24978 = G__24998;
count__24979 = G__24999;
i__24980 = G__25000;
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
var seq__24983_25001 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__24974,expr__24975,vec__24973,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__24972,map__24972__$1,line,color,offset,style){
return (function() { 
var G__25005__delegate = function (args){return args;
};
var G__25005 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25005__delegate.call(this,args);};
G__25005.cljs$lang$maxFixedArity = 0;
G__25005.cljs$lang$applyTo = (function (arglist__25006){
var args = cljs.core.seq(arglist__25006);
return G__25005__delegate(args);
});
G__25005.cljs$core$IFn$_invoke$arity$variadic = G__25005__delegate;
return G__25005;
})()
;})(pred__24974,expr__24975,vec__24973,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__24972,map__24972__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__24984_25002 = null;var count__24985_25003 = (0);var i__24986_25004 = (0);while(true){
if((i__24986_25004 < count__24985_25003))
{var vec__24987_25007 = cljs.core._nth.call(null,chunk__24984_25002,i__24986_25004);var idx_25008 = cljs.core.nth.call(null,vec__24987_25007,(0),null);var prev_25009 = cljs.core.nth.call(null,vec__24987_25007,(1),null);var curr_25010 = cljs.core.nth.call(null,vec__24987_25007,(2),null);ctx.moveTo(((idx_25008 + offset__$1) * offset_x),pos_y.call(null,prev_25009));
ctx.lineTo((((idx_25008 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25010));
{
var G__25011 = seq__24983_25001;
var G__25012 = chunk__24984_25002;
var G__25013 = count__24985_25003;
var G__25014 = (i__24986_25004 + (1));
seq__24983_25001 = G__25011;
chunk__24984_25002 = G__25012;
count__24985_25003 = G__25013;
i__24986_25004 = G__25014;
continue;
}
} else
{var temp__4126__auto___25015 = cljs.core.seq.call(null,seq__24983_25001);if(temp__4126__auto___25015)
{var seq__24983_25016__$1 = temp__4126__auto___25015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24983_25016__$1))
{var c__4307__auto___25017 = cljs.core.chunk_first.call(null,seq__24983_25016__$1);{
var G__25018 = cljs.core.chunk_rest.call(null,seq__24983_25016__$1);
var G__25019 = c__4307__auto___25017;
var G__25020 = cljs.core.count.call(null,c__4307__auto___25017);
var G__25021 = (0);
seq__24983_25001 = G__25018;
chunk__24984_25002 = G__25019;
count__24985_25003 = G__25020;
i__24986_25004 = G__25021;
continue;
}
} else
{var vec__24988_25022 = cljs.core.first.call(null,seq__24983_25016__$1);var idx_25023 = cljs.core.nth.call(null,vec__24988_25022,(0),null);var prev_25024 = cljs.core.nth.call(null,vec__24988_25022,(1),null);var curr_25025 = cljs.core.nth.call(null,vec__24988_25022,(2),null);ctx.moveTo(((idx_25023 + offset__$1) * offset_x),pos_y.call(null,prev_25024));
ctx.lineTo((((idx_25023 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25025));
{
var G__25026 = cljs.core.next.call(null,seq__24983_25016__$1);
var G__25027 = null;
var G__25028 = (0);
var G__25029 = (0);
seq__24983_25001 = G__25026;
chunk__24984_25002 = G__25027;
count__24985_25003 = G__25028;
i__24986_25004 = G__25029;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25030){var map__25031 = p__25030;var map__25031__$1 = ((cljs.core.seq_QMARK_.call(null,map__25031))?cljs.core.apply.call(null,cljs.core.hash_map,map__25031):map__25031);var kline = cljs.core.get.call(null,map__25031__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25032){var map__25033 = p__25032;var map__25033__$1 = ((cljs.core.seq_QMARK_.call(null,map__25033))?cljs.core.apply.call(null,cljs.core.hash_map,map__25033):map__25033);var kline = cljs.core.get.call(null,map__25033__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25034){var map__25035 = p__25034;var map__25035__$1 = ((cljs.core.seq_QMARK_.call(null,map__25035))?cljs.core.apply.call(null,cljs.core.hash_map,map__25035):map__25035);var kline = cljs.core.get.call(null,map__25035__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25036,base,ctx){var map__25037 = p__25036;var map__25037__$1 = ((cljs.core.seq_QMARK_.call(null,map__25037))?cljs.core.apply.call(null,cljs.core.hash_map,map__25037):map__25037);var kline = cljs.core.get.call(null,map__25037__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__25037__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__25038 = base;var w = cljs.core.nth.call(null,vec__25038,(0),null);var h = cljs.core.nth.call(null,vec__25038,(1),null);var max_v = cljs.core.nth.call(null,vec__25038,(2),null);var min_v = cljs.core.nth.call(null,vec__25038,(3),null);var offset_v = cljs.core.nth.call(null,vec__25038,(4),null);var offset_x = cljs.core.nth.call(null,vec__25038,(5),null);var pos_y = cljs.core.nth.call(null,vec__25038,(6),null);(ctx["fillStyle"] = "black");
var seq__25039 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25038,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25037,map__25037__$1,kline,info){
return (function() { 
var G__25047__delegate = function (args){return args;
};
var G__25047 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25047__delegate.call(this,args);};
G__25047.cljs$lang$maxFixedArity = 0;
G__25047.cljs$lang$applyTo = (function (arglist__25048){
var args = cljs.core.seq(arglist__25048);
return G__25047__delegate(args);
});
G__25047.cljs$core$IFn$_invoke$arity$variadic = G__25047__delegate;
return G__25047;
})()
;})(vec__25038,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25037,map__25037__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__25040 = null;var count__25041 = (0);var i__25042 = (0);while(true){
if((i__25042 < count__25041))
{var vec__25043 = cljs.core._nth.call(null,chunk__25040,i__25042);var idx = cljs.core.nth.call(null,vec__25043,(0),null);var vec__25044 = cljs.core.nth.call(null,vec__25043,(1),null);var date = cljs.core.nth.call(null,vec__25044,(0),null);var open = cljs.core.nth.call(null,vec__25044,(1),null);var high = cljs.core.nth.call(null,vec__25044,(2),null);var low = cljs.core.nth.call(null,vec__25044,(3),null);var close = cljs.core.nth.call(null,vec__25044,(4),null);var volume = cljs.core.nth.call(null,vec__25044,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25043,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25049 = seq__25039;
var G__25050 = chunk__25040;
var G__25051 = count__25041;
var G__25052 = (i__25042 + (1));
seq__25039 = G__25049;
chunk__25040 = G__25050;
count__25041 = G__25051;
i__25042 = G__25052;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25039);if(temp__4126__auto__)
{var seq__25039__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25039__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25039__$1);{
var G__25053 = cljs.core.chunk_rest.call(null,seq__25039__$1);
var G__25054 = c__4307__auto__;
var G__25055 = cljs.core.count.call(null,c__4307__auto__);
var G__25056 = (0);
seq__25039 = G__25053;
chunk__25040 = G__25054;
count__25041 = G__25055;
i__25042 = G__25056;
continue;
}
} else
{var vec__25045 = cljs.core.first.call(null,seq__25039__$1);var idx = cljs.core.nth.call(null,vec__25045,(0),null);var vec__25046 = cljs.core.nth.call(null,vec__25045,(1),null);var date = cljs.core.nth.call(null,vec__25046,(0),null);var open = cljs.core.nth.call(null,vec__25046,(1),null);var high = cljs.core.nth.call(null,vec__25046,(2),null);var low = cljs.core.nth.call(null,vec__25046,(3),null);var close = cljs.core.nth.call(null,vec__25046,(4),null);var volume = cljs.core.nth.call(null,vec__25046,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25045,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25057 = cljs.core.next.call(null,seq__25039__$1);
var G__25058 = null;
var G__25059 = (0);
var G__25060 = (0);
seq__25039 = G__25057;
chunk__25040 = G__25058;
count__25041 = G__25059;
i__25042 = G__25060;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25061){var map__25062 = p__25061;var map__25062__$1 = ((cljs.core.seq_QMARK_.call(null,map__25062))?cljs.core.apply.call(null,cljs.core.hash_map,map__25062):map__25062);var cz = cljs.core.get.call(null,map__25062__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25063){var map__25064 = p__25063;var map__25064__$1 = ((cljs.core.seq_QMARK_.call(null,map__25064))?cljs.core.apply.call(null,cljs.core.hash_map,map__25064):map__25064);var cz = cljs.core.get.call(null,map__25064__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25065,base,ctx){var map__25066 = p__25065;var map__25066__$1 = ((cljs.core.seq_QMARK_.call(null,map__25066))?cljs.core.apply.call(null,cljs.core.hash_map,map__25066):map__25066);var cz = cljs.core.get.call(null,map__25066__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__25066__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__25066__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__25067 = base;var w = cljs.core.nth.call(null,vec__25067,(0),null);var h = cljs.core.nth.call(null,vec__25067,(1),null);var max_v = cljs.core.nth.call(null,vec__25067,(2),null);var min_v = cljs.core.nth.call(null,vec__25067,(3),null);var offset_v = cljs.core.nth.call(null,vec__25067,(4),null);var offset_x = cljs.core.nth.call(null,vec__25067,(5),null);var pos_y = cljs.core.nth.call(null,vec__25067,(6),null);var proj_x = ((function (vec__25067,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25066,map__25066__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__25067,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25066,map__25066__$1,cz,vz,color))
;var proj_y = ((function (vec__25067,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25066,map__25066__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__25067,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25066,map__25066__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__25068 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25067,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25066,map__25066__$1,cz,vz,color){
return (function() { 
var G__25074__delegate = function (args){return args;
};
var G__25074 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25074__delegate.call(this,args);};
G__25074.cljs$lang$maxFixedArity = 0;
G__25074.cljs$lang$applyTo = (function (arglist__25075){
var args = cljs.core.seq(arglist__25075);
return G__25074__delegate(args);
});
G__25074.cljs$core$IFn$_invoke$arity$variadic = G__25074__delegate;
return G__25074;
})()
;})(vec__25067,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25066,map__25066__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__25069 = null;var count__25070 = (0);var i__25071 = (0);while(true){
if((i__25071 < count__25070))
{var vec__25072 = cljs.core._nth.call(null,chunk__25069,i__25071);var idx = cljs.core.nth.call(null,vec__25072,(0),null);var pc = cljs.core.nth.call(null,vec__25072,(1),null);var cc = cljs.core.nth.call(null,vec__25072,(2),null);var pv = cljs.core.nth.call(null,vec__25072,(3),null);var cv = cljs.core.nth.call(null,vec__25072,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25076 = seq__25068;
var G__25077 = chunk__25069;
var G__25078 = count__25070;
var G__25079 = (i__25071 + (1));
seq__25068 = G__25076;
chunk__25069 = G__25077;
count__25070 = G__25078;
i__25071 = G__25079;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25068);if(temp__4126__auto__)
{var seq__25068__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25068__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25068__$1);{
var G__25080 = cljs.core.chunk_rest.call(null,seq__25068__$1);
var G__25081 = c__4307__auto__;
var G__25082 = cljs.core.count.call(null,c__4307__auto__);
var G__25083 = (0);
seq__25068 = G__25080;
chunk__25069 = G__25081;
count__25070 = G__25082;
i__25071 = G__25083;
continue;
}
} else
{var vec__25073 = cljs.core.first.call(null,seq__25068__$1);var idx = cljs.core.nth.call(null,vec__25073,(0),null);var pc = cljs.core.nth.call(null,vec__25073,(1),null);var cc = cljs.core.nth.call(null,vec__25073,(2),null);var pv = cljs.core.nth.call(null,vec__25073,(3),null);var cv = cljs.core.nth.call(null,vec__25073,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25084 = cljs.core.next.call(null,seq__25068__$1);
var G__25085 = null;
var G__25086 = (0);
var G__25087 = (0);
seq__25068 = G__25084;
chunk__25069 = G__25085;
count__25070 = G__25086;
i__25071 = G__25087;
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
