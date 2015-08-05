// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__48837){var map__48838 = p__48837;var map__48838__$1 = ((cljs.core.seq_QMARK_.call(null,map__48838))?cljs.core.apply.call(null,cljs.core.hash_map,map__48838):map__48838);var t = cljs.core.get.call(null,map__48838__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__48839){var map__48840 = p__48839;var map__48840__$1 = ((cljs.core.seq_QMARK_.call(null,map__48840))?cljs.core.apply.call(null,cljs.core.hash_map,map__48840):map__48840);var t = cljs.core.get.call(null,map__48840__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__48841){var map__48842 = p__48841;var map__48842__$1 = ((cljs.core.seq_QMARK_.call(null,map__48842))?cljs.core.apply.call(null,cljs.core.hash_map,map__48842):map__48842);var t = cljs.core.get.call(null,map__48842__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__48843,base,ctx){var map__48844 = p__48843;var map__48844__$1 = ((cljs.core.seq_QMARK_.call(null,map__48844))?cljs.core.apply.call(null,cljs.core.hash_map,map__48844):map__48844);var t = cljs.core.get.call(null,map__48844__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__48845,w,h,ctx){var map__48851 = p__48845;var map__48851__$1 = ((cljs.core.seq_QMARK_.call(null,map__48851))?cljs.core.apply.call(null,cljs.core.hash_map,map__48851):map__48851);var info = map__48851__$1;var drawers = cljs.core.get.call(null,map__48851__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "gray");
ctx.fillRect((0),(0),w,h);
var seq__48852 = cljs.core.seq.call(null,drawers);var chunk__48853 = null;var count__48854 = (0);var i__48855 = (0);while(true){
if((i__48855 < count__48854))
{var drawer = cljs.core._nth.call(null,chunk__48853,i__48855);stock.drawer.draw_it.call(null,drawer,base,ctx);
{
var G__48856 = seq__48852;
var G__48857 = chunk__48853;
var G__48858 = count__48854;
var G__48859 = (i__48855 + (1));
seq__48852 = G__48856;
chunk__48853 = G__48857;
count__48854 = G__48858;
i__48855 = G__48859;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48852);if(temp__4126__auto__)
{var seq__48852__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48852__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__48852__$1);{
var G__48860 = cljs.core.chunk_rest.call(null,seq__48852__$1);
var G__48861 = c__4307__auto__;
var G__48862 = cljs.core.count.call(null,c__4307__auto__);
var G__48863 = (0);
seq__48852 = G__48860;
chunk__48853 = G__48861;
count__48854 = G__48862;
i__48855 = G__48863;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__48852__$1);stock.drawer.draw_it.call(null,drawer,base,ctx);
{
var G__48864 = cljs.core.next.call(null,seq__48852__$1);
var G__48865 = null;
var G__48866 = (0);
var G__48867 = (0);
seq__48852 = G__48864;
chunk__48853 = G__48865;
count__48854 = G__48866;
i__48855 = G__48867;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__48868){var map__48869 = p__48868;var map__48869__$1 = ((cljs.core.seq_QMARK_.call(null,map__48869))?cljs.core.apply.call(null,cljs.core.hash_map,map__48869):map__48869);var kline = cljs.core.get.call(null,map__48869__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return (0);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__48870){var map__48871 = p__48870;var map__48871__$1 = ((cljs.core.seq_QMARK_.call(null,map__48871))?cljs.core.apply.call(null,cljs.core.hash_map,map__48871):map__48871);var kline = cljs.core.get.call(null,map__48871__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return (0);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__48872){var map__48873 = p__48872;var map__48873__$1 = ((cljs.core.seq_QMARK_.call(null,map__48873))?cljs.core.apply.call(null,cljs.core.hash_map,map__48873):map__48873);var kline = cljs.core.get.call(null,map__48873__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return (0);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__48874,base,ctx){var map__48875 = p__48874;var map__48875__$1 = ((cljs.core.seq_QMARK_.call(null,map__48875))?cljs.core.apply.call(null,cljs.core.hash_map,map__48875):map__48875);var kline = cljs.core.get.call(null,map__48875__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return null;
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__48876){var map__48877 = p__48876;var map__48877__$1 = ((cljs.core.seq_QMARK_.call(null,map__48877))?cljs.core.apply.call(null,cljs.core.hash_map,map__48877):map__48877);var kline = cljs.core.get.call(null,map__48877__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__48878){var map__48879 = p__48878;var map__48879__$1 = ((cljs.core.seq_QMARK_.call(null,map__48879))?cljs.core.apply.call(null,cljs.core.hash_map,map__48879):map__48879);var kline = cljs.core.get.call(null,map__48879__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__48880){var map__48881 = p__48880;var map__48881__$1 = ((cljs.core.seq_QMARK_.call(null,map__48881))?cljs.core.apply.call(null,cljs.core.hash_map,map__48881):map__48881);var kline = cljs.core.get.call(null,map__48881__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__48882,base,ctx){var map__48883 = p__48882;var map__48883__$1 = ((cljs.core.seq_QMARK_.call(null,map__48883))?cljs.core.apply.call(null,cljs.core.hash_map,map__48883):map__48883);var kline = cljs.core.get.call(null,map__48883__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var vec__48884 = base;var w = cljs.core.nth.call(null,vec__48884,(0),null);var h = cljs.core.nth.call(null,vec__48884,(1),null);var max_v = cljs.core.nth.call(null,vec__48884,(2),null);var min_v = cljs.core.nth.call(null,vec__48884,(3),null);var offset_v = cljs.core.nth.call(null,vec__48884,(4),null);var offset_x = cljs.core.nth.call(null,vec__48884,(5),null);var pos_y = cljs.core.nth.call(null,vec__48884,(6),null);var seq__48885 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__48884,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__48883,map__48883__$1,kline){
return (function() { 
var G__48893__delegate = function (args){return args;
};
var G__48893 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48893__delegate.call(this,args);};
G__48893.cljs$lang$maxFixedArity = 0;
G__48893.cljs$lang$applyTo = (function (arglist__48894){
var args = cljs.core.seq(arglist__48894);
return G__48893__delegate(args);
});
G__48893.cljs$core$IFn$_invoke$arity$variadic = G__48893__delegate;
return G__48893;
})()
;})(vec__48884,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__48883,map__48883__$1,kline))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__48886 = null;var count__48887 = (0);var i__48888 = (0);while(true){
if((i__48888 < count__48887))
{var vec__48889 = cljs.core._nth.call(null,chunk__48886,i__48888);var idx = cljs.core.nth.call(null,vec__48889,(0),null);var vec__48890 = cljs.core.nth.call(null,vec__48889,(1),null);var date = cljs.core.nth.call(null,vec__48890,(0),null);var open = cljs.core.nth.call(null,vec__48890,(1),null);var high = cljs.core.nth.call(null,vec__48890,(2),null);var low = cljs.core.nth.call(null,vec__48890,(3),null);var close = cljs.core.nth.call(null,vec__48890,(4),null);var volume = cljs.core.nth.call(null,vec__48890,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__48895 = seq__48885;
var G__48896 = chunk__48886;
var G__48897 = count__48887;
var G__48898 = (i__48888 + (1));
seq__48885 = G__48895;
chunk__48886 = G__48896;
count__48887 = G__48897;
i__48888 = G__48898;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48885);if(temp__4126__auto__)
{var seq__48885__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48885__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__48885__$1);{
var G__48899 = cljs.core.chunk_rest.call(null,seq__48885__$1);
var G__48900 = c__4307__auto__;
var G__48901 = cljs.core.count.call(null,c__4307__auto__);
var G__48902 = (0);
seq__48885 = G__48899;
chunk__48886 = G__48900;
count__48887 = G__48901;
i__48888 = G__48902;
continue;
}
} else
{var vec__48891 = cljs.core.first.call(null,seq__48885__$1);var idx = cljs.core.nth.call(null,vec__48891,(0),null);var vec__48892 = cljs.core.nth.call(null,vec__48891,(1),null);var date = cljs.core.nth.call(null,vec__48892,(0),null);var open = cljs.core.nth.call(null,vec__48892,(1),null);var high = cljs.core.nth.call(null,vec__48892,(2),null);var low = cljs.core.nth.call(null,vec__48892,(3),null);var close = cljs.core.nth.call(null,vec__48892,(4),null);var volume = cljs.core.nth.call(null,vec__48892,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__48903 = cljs.core.next.call(null,seq__48885__$1);
var G__48904 = null;
var G__48905 = (0);
var G__48906 = (0);
seq__48885 = G__48903;
chunk__48886 = G__48904;
count__48887 = G__48905;
i__48888 = G__48906;
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
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__48907,base,ctx){var map__48908 = p__48907;var map__48908__$1 = ((cljs.core.seq_QMARK_.call(null,map__48908))?cljs.core.apply.call(null,cljs.core.hash_map,map__48908):map__48908);var cz = cljs.core.get.call(null,map__48908__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__48908__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__48909 = base;var w = cljs.core.nth.call(null,vec__48909,(0),null);var h = cljs.core.nth.call(null,vec__48909,(1),null);var max_v = cljs.core.nth.call(null,vec__48909,(2),null);var min_v = cljs.core.nth.call(null,vec__48909,(3),null);var offset_v = cljs.core.nth.call(null,vec__48909,(4),null);var offset_x = cljs.core.nth.call(null,vec__48909,(5),null);var pos_y = cljs.core.nth.call(null,vec__48909,(6),null);var proj_x = ((function (vec__48909,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__48908,map__48908__$1,cz,vz){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(vec__48909,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__48908,map__48908__$1,cz,vz))
;var proj_y = ((function (vec__48909,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__48908,map__48908__$1,cz,vz){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(vec__48909,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__48908,map__48908__$1,cz,vz))
;(ctx["strokeStyle"] = "red");
var seq__48910 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__48909,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__48908,map__48908__$1,cz,vz){
return (function() { 
var G__48916__delegate = function (args){return args;
};
var G__48916 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48916__delegate.call(this,args);};
G__48916.cljs$lang$maxFixedArity = 0;
G__48916.cljs$lang$applyTo = (function (arglist__48917){
var args = cljs.core.seq(arglist__48917);
return G__48916__delegate(args);
});
G__48916.cljs$core$IFn$_invoke$arity$variadic = G__48916__delegate;
return G__48916;
})()
;})(vec__48909,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__48908,map__48908__$1,cz,vz))
,cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__48911 = null;var count__48912 = (0);var i__48913 = (0);while(true){
if((i__48913 < count__48912))
{var vec__48914 = cljs.core._nth.call(null,chunk__48911,i__48913);var pc = cljs.core.nth.call(null,vec__48914,(0),null);var cc = cljs.core.nth.call(null,vec__48914,(1),null);var pv = cljs.core.nth.call(null,vec__48914,(2),null);var cv = cljs.core.nth.call(null,vec__48914,(3),null);ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__48918 = seq__48910;
var G__48919 = chunk__48911;
var G__48920 = count__48912;
var G__48921 = (i__48913 + (1));
seq__48910 = G__48918;
chunk__48911 = G__48919;
count__48912 = G__48920;
i__48913 = G__48921;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48910);if(temp__4126__auto__)
{var seq__48910__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48910__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__48910__$1);{
var G__48922 = cljs.core.chunk_rest.call(null,seq__48910__$1);
var G__48923 = c__4307__auto__;
var G__48924 = cljs.core.count.call(null,c__4307__auto__);
var G__48925 = (0);
seq__48910 = G__48922;
chunk__48911 = G__48923;
count__48912 = G__48924;
i__48913 = G__48925;
continue;
}
} else
{var vec__48915 = cljs.core.first.call(null,seq__48910__$1);var pc = cljs.core.nth.call(null,vec__48915,(0),null);var cc = cljs.core.nth.call(null,vec__48915,(1),null);var pv = cljs.core.nth.call(null,vec__48915,(2),null);var cv = cljs.core.nth.call(null,vec__48915,(3),null);ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__48926 = cljs.core.next.call(null,seq__48910__$1);
var G__48927 = null;
var G__48928 = (0);
var G__48929 = (0);
seq__48910 = G__48926;
chunk__48911 = G__48927;
count__48912 = G__48928;
i__48913 = G__48929;
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
