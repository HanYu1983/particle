// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10824){var map__10825 = p__10824;var map__10825__$1 = ((cljs.core.seq_QMARK_.call(null,map__10825))?cljs.core.apply.call(null,cljs.core.hash_map,map__10825):map__10825);var t = cljs.core.get.call(null,map__10825__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10826){var map__10827 = p__10826;var map__10827__$1 = ((cljs.core.seq_QMARK_.call(null,map__10827))?cljs.core.apply.call(null,cljs.core.hash_map,map__10827):map__10827);var t = cljs.core.get.call(null,map__10827__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10828){var map__10829 = p__10828;var map__10829__$1 = ((cljs.core.seq_QMARK_.call(null,map__10829))?cljs.core.apply.call(null,cljs.core.hash_map,map__10829):map__10829);var t = cljs.core.get.call(null,map__10829__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10830,base,ctx){var map__10831 = p__10830;var map__10831__$1 = ((cljs.core.seq_QMARK_.call(null,map__10831))?cljs.core.apply.call(null,cljs.core.hash_map,map__10831):map__10831);var t = cljs.core.get.call(null,map__10831__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__10832,w,h,ctx){var map__10838 = p__10832;var map__10838__$1 = ((cljs.core.seq_QMARK_.call(null,map__10838))?cljs.core.apply.call(null,cljs.core.hash_map,map__10838):map__10838);var info = map__10838__$1;var drawers = cljs.core.get.call(null,map__10838__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__10839 = cljs.core.seq.call(null,drawers);var chunk__10840 = null;var count__10841 = (0);var i__10842 = (0);while(true){
if((i__10842 < count__10841))
{var drawer = cljs.core._nth.call(null,chunk__10840,i__10842);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__10843 = seq__10839;
var G__10844 = chunk__10840;
var G__10845 = count__10841;
var G__10846 = (i__10842 + (1));
seq__10839 = G__10843;
chunk__10840 = G__10844;
count__10841 = G__10845;
i__10842 = G__10846;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10839);if(temp__4126__auto__)
{var seq__10839__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10839__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10839__$1);{
var G__10847 = cljs.core.chunk_rest.call(null,seq__10839__$1);
var G__10848 = c__4307__auto__;
var G__10849 = cljs.core.count.call(null,c__4307__auto__);
var G__10850 = (0);
seq__10839 = G__10847;
chunk__10840 = G__10848;
count__10841 = G__10849;
i__10842 = G__10850;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__10839__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__10851 = cljs.core.next.call(null,seq__10839__$1);
var G__10852 = null;
var G__10853 = (0);
var G__10854 = (0);
seq__10839 = G__10851;
chunk__10840 = G__10852;
count__10841 = G__10853;
i__10842 = G__10854;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10855){var map__10856 = p__10855;var map__10856__$1 = ((cljs.core.seq_QMARK_.call(null,map__10856))?cljs.core.apply.call(null,cljs.core.hash_map,map__10856):map__10856);var line = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10857){var map__10858 = p__10857;var map__10858__$1 = ((cljs.core.seq_QMARK_.call(null,map__10858))?cljs.core.apply.call(null,cljs.core.hash_map,map__10858):map__10858);var line = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10859){var map__10860 = p__10859;var map__10860__$1 = ((cljs.core.seq_QMARK_.call(null,map__10860))?cljs.core.apply.call(null,cljs.core.hash_map,map__10860):map__10860);var line = cljs.core.get.call(null,map__10860__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10861,base,ctx){var map__10862 = p__10861;var map__10862__$1 = ((cljs.core.seq_QMARK_.call(null,map__10862))?cljs.core.apply.call(null,cljs.core.hash_map,map__10862):map__10862);var line = cljs.core.get.call(null,map__10862__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__10862__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__10863 = base;var w = cljs.core.nth.call(null,vec__10863,(0),null);var h = cljs.core.nth.call(null,vec__10863,(1),null);var max_v = cljs.core.nth.call(null,vec__10863,(2),null);var min_v = cljs.core.nth.call(null,vec__10863,(3),null);var offset_v = cljs.core.nth.call(null,vec__10863,(4),null);var offset_x = cljs.core.nth.call(null,vec__10863,(5),null);var pos_y = cljs.core.nth.call(null,vec__10863,(6),null);(ctx["strokeStyle"] = color);
var seq__10864 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10863,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10862,map__10862__$1,line,color){
return (function() { 
var G__10870__delegate = function (args){return args;
};
var G__10870 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10870__delegate.call(this,args);};
G__10870.cljs$lang$maxFixedArity = 0;
G__10870.cljs$lang$applyTo = (function (arglist__10871){
var args = cljs.core.seq(arglist__10871);
return G__10870__delegate(args);
});
G__10870.cljs$core$IFn$_invoke$arity$variadic = G__10870__delegate;
return G__10870;
})()
;})(vec__10863,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10862,map__10862__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__10865 = null;var count__10866 = (0);var i__10867 = (0);while(true){
if((i__10867 < count__10866))
{var vec__10868 = cljs.core._nth.call(null,chunk__10865,i__10867);var idx = cljs.core.nth.call(null,vec__10868,(0),null);var prev = cljs.core.nth.call(null,vec__10868,(1),null);var curr = cljs.core.nth.call(null,vec__10868,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__10872 = seq__10864;
var G__10873 = chunk__10865;
var G__10874 = count__10866;
var G__10875 = (i__10867 + (1));
seq__10864 = G__10872;
chunk__10865 = G__10873;
count__10866 = G__10874;
i__10867 = G__10875;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10864);if(temp__4126__auto__)
{var seq__10864__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10864__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10864__$1);{
var G__10876 = cljs.core.chunk_rest.call(null,seq__10864__$1);
var G__10877 = c__4307__auto__;
var G__10878 = cljs.core.count.call(null,c__4307__auto__);
var G__10879 = (0);
seq__10864 = G__10876;
chunk__10865 = G__10877;
count__10866 = G__10878;
i__10867 = G__10879;
continue;
}
} else
{var vec__10869 = cljs.core.first.call(null,seq__10864__$1);var idx = cljs.core.nth.call(null,vec__10869,(0),null);var prev = cljs.core.nth.call(null,vec__10869,(1),null);var curr = cljs.core.nth.call(null,vec__10869,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__10880 = cljs.core.next.call(null,seq__10864__$1);
var G__10881 = null;
var G__10882 = (0);
var G__10883 = (0);
seq__10864 = G__10880;
chunk__10865 = G__10881;
count__10866 = G__10882;
i__10867 = G__10883;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10884){var map__10885 = p__10884;var map__10885__$1 = ((cljs.core.seq_QMARK_.call(null,map__10885))?cljs.core.apply.call(null,cljs.core.hash_map,map__10885):map__10885);var kline = cljs.core.get.call(null,map__10885__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10886){var map__10887 = p__10886;var map__10887__$1 = ((cljs.core.seq_QMARK_.call(null,map__10887))?cljs.core.apply.call(null,cljs.core.hash_map,map__10887):map__10887);var kline = cljs.core.get.call(null,map__10887__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10888){var map__10889 = p__10888;var map__10889__$1 = ((cljs.core.seq_QMARK_.call(null,map__10889))?cljs.core.apply.call(null,cljs.core.hash_map,map__10889):map__10889);var kline = cljs.core.get.call(null,map__10889__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10890,base,ctx){var map__10891 = p__10890;var map__10891__$1 = ((cljs.core.seq_QMARK_.call(null,map__10891))?cljs.core.apply.call(null,cljs.core.hash_map,map__10891):map__10891);var kline = cljs.core.get.call(null,map__10891__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__10891__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__10892 = base;var w = cljs.core.nth.call(null,vec__10892,(0),null);var h = cljs.core.nth.call(null,vec__10892,(1),null);var max_v = cljs.core.nth.call(null,vec__10892,(2),null);var min_v = cljs.core.nth.call(null,vec__10892,(3),null);var offset_v = cljs.core.nth.call(null,vec__10892,(4),null);var offset_x = cljs.core.nth.call(null,vec__10892,(5),null);var pos_y = cljs.core.nth.call(null,vec__10892,(6),null);(ctx["fillStyle"] = "black");
var seq__10893 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10892,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10891,map__10891__$1,kline,info){
return (function() { 
var G__10901__delegate = function (args){return args;
};
var G__10901 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10901__delegate.call(this,args);};
G__10901.cljs$lang$maxFixedArity = 0;
G__10901.cljs$lang$applyTo = (function (arglist__10902){
var args = cljs.core.seq(arglist__10902);
return G__10901__delegate(args);
});
G__10901.cljs$core$IFn$_invoke$arity$variadic = G__10901__delegate;
return G__10901;
})()
;})(vec__10892,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10891,map__10891__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__10894 = null;var count__10895 = (0);var i__10896 = (0);while(true){
if((i__10896 < count__10895))
{var vec__10897 = cljs.core._nth.call(null,chunk__10894,i__10896);var idx = cljs.core.nth.call(null,vec__10897,(0),null);var vec__10898 = cljs.core.nth.call(null,vec__10897,(1),null);var date = cljs.core.nth.call(null,vec__10898,(0),null);var open = cljs.core.nth.call(null,vec__10898,(1),null);var high = cljs.core.nth.call(null,vec__10898,(2),null);var low = cljs.core.nth.call(null,vec__10898,(3),null);var close = cljs.core.nth.call(null,vec__10898,(4),null);var volume = cljs.core.nth.call(null,vec__10898,(5),null);var info__$1 = cljs.core.nth.call(null,vec__10897,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__10903 = seq__10893;
var G__10904 = chunk__10894;
var G__10905 = count__10895;
var G__10906 = (i__10896 + (1));
seq__10893 = G__10903;
chunk__10894 = G__10904;
count__10895 = G__10905;
i__10896 = G__10906;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10893);if(temp__4126__auto__)
{var seq__10893__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10893__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10893__$1);{
var G__10907 = cljs.core.chunk_rest.call(null,seq__10893__$1);
var G__10908 = c__4307__auto__;
var G__10909 = cljs.core.count.call(null,c__4307__auto__);
var G__10910 = (0);
seq__10893 = G__10907;
chunk__10894 = G__10908;
count__10895 = G__10909;
i__10896 = G__10910;
continue;
}
} else
{var vec__10899 = cljs.core.first.call(null,seq__10893__$1);var idx = cljs.core.nth.call(null,vec__10899,(0),null);var vec__10900 = cljs.core.nth.call(null,vec__10899,(1),null);var date = cljs.core.nth.call(null,vec__10900,(0),null);var open = cljs.core.nth.call(null,vec__10900,(1),null);var high = cljs.core.nth.call(null,vec__10900,(2),null);var low = cljs.core.nth.call(null,vec__10900,(3),null);var close = cljs.core.nth.call(null,vec__10900,(4),null);var volume = cljs.core.nth.call(null,vec__10900,(5),null);var info__$1 = cljs.core.nth.call(null,vec__10899,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__10911 = cljs.core.next.call(null,seq__10893__$1);
var G__10912 = null;
var G__10913 = (0);
var G__10914 = (0);
seq__10893 = G__10911;
chunk__10894 = G__10912;
count__10895 = G__10913;
i__10896 = G__10914;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10915){var map__10916 = p__10915;var map__10916__$1 = ((cljs.core.seq_QMARK_.call(null,map__10916))?cljs.core.apply.call(null,cljs.core.hash_map,map__10916):map__10916);var cz = cljs.core.get.call(null,map__10916__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10917){var map__10918 = p__10917;var map__10918__$1 = ((cljs.core.seq_QMARK_.call(null,map__10918))?cljs.core.apply.call(null,cljs.core.hash_map,map__10918):map__10918);var cz = cljs.core.get.call(null,map__10918__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10919,base,ctx){var map__10920 = p__10919;var map__10920__$1 = ((cljs.core.seq_QMARK_.call(null,map__10920))?cljs.core.apply.call(null,cljs.core.hash_map,map__10920):map__10920);var cz = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__10921 = base;var w = cljs.core.nth.call(null,vec__10921,(0),null);var h = cljs.core.nth.call(null,vec__10921,(1),null);var max_v = cljs.core.nth.call(null,vec__10921,(2),null);var min_v = cljs.core.nth.call(null,vec__10921,(3),null);var offset_v = cljs.core.nth.call(null,vec__10921,(4),null);var offset_x = cljs.core.nth.call(null,vec__10921,(5),null);var pos_y = cljs.core.nth.call(null,vec__10921,(6),null);var proj_x = ((function (vec__10921,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10920,map__10920__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__10921,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10920,map__10920__$1,cz,vz,color))
;var proj_y = ((function (vec__10921,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__10920,map__10920__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__10921,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__10920,map__10920__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__10922 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10921,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__10920,map__10920__$1,cz,vz,color){
return (function() { 
var G__10928__delegate = function (args){return args;
};
var G__10928 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10928__delegate.call(this,args);};
G__10928.cljs$lang$maxFixedArity = 0;
G__10928.cljs$lang$applyTo = (function (arglist__10929){
var args = cljs.core.seq(arglist__10929);
return G__10928__delegate(args);
});
G__10928.cljs$core$IFn$_invoke$arity$variadic = G__10928__delegate;
return G__10928;
})()
;})(vec__10921,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__10920,map__10920__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__10923 = null;var count__10924 = (0);var i__10925 = (0);while(true){
if((i__10925 < count__10924))
{var vec__10926 = cljs.core._nth.call(null,chunk__10923,i__10925);var idx = cljs.core.nth.call(null,vec__10926,(0),null);var pc = cljs.core.nth.call(null,vec__10926,(1),null);var cc = cljs.core.nth.call(null,vec__10926,(2),null);var pv = cljs.core.nth.call(null,vec__10926,(3),null);var cv = cljs.core.nth.call(null,vec__10926,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__10930 = seq__10922;
var G__10931 = chunk__10923;
var G__10932 = count__10924;
var G__10933 = (i__10925 + (1));
seq__10922 = G__10930;
chunk__10923 = G__10931;
count__10924 = G__10932;
i__10925 = G__10933;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10922);if(temp__4126__auto__)
{var seq__10922__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10922__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10922__$1);{
var G__10934 = cljs.core.chunk_rest.call(null,seq__10922__$1);
var G__10935 = c__4307__auto__;
var G__10936 = cljs.core.count.call(null,c__4307__auto__);
var G__10937 = (0);
seq__10922 = G__10934;
chunk__10923 = G__10935;
count__10924 = G__10936;
i__10925 = G__10937;
continue;
}
} else
{var vec__10927 = cljs.core.first.call(null,seq__10922__$1);var idx = cljs.core.nth.call(null,vec__10927,(0),null);var pc = cljs.core.nth.call(null,vec__10927,(1),null);var cc = cljs.core.nth.call(null,vec__10927,(2),null);var pv = cljs.core.nth.call(null,vec__10927,(3),null);var cv = cljs.core.nth.call(null,vec__10927,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__10938 = cljs.core.next.call(null,seq__10922__$1);
var G__10939 = null;
var G__10940 = (0);
var G__10941 = (0);
seq__10922 = G__10938;
chunk__10923 = G__10939;
count__10924 = G__10940;
i__10925 = G__10941;
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
