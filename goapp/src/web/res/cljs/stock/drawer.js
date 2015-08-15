// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__14919){var map__14920 = p__14919;var map__14920__$1 = ((cljs.core.seq_QMARK_.call(null,map__14920))?cljs.core.apply.call(null,cljs.core.hash_map,map__14920):map__14920);var t = cljs.core.get.call(null,map__14920__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__14921){var map__14922 = p__14921;var map__14922__$1 = ((cljs.core.seq_QMARK_.call(null,map__14922))?cljs.core.apply.call(null,cljs.core.hash_map,map__14922):map__14922);var t = cljs.core.get.call(null,map__14922__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__14923){var map__14924 = p__14923;var map__14924__$1 = ((cljs.core.seq_QMARK_.call(null,map__14924))?cljs.core.apply.call(null,cljs.core.hash_map,map__14924):map__14924);var t = cljs.core.get.call(null,map__14924__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__14925,base,ctx){var map__14926 = p__14925;var map__14926__$1 = ((cljs.core.seq_QMARK_.call(null,map__14926))?cljs.core.apply.call(null,cljs.core.hash_map,map__14926):map__14926);var t = cljs.core.get.call(null,map__14926__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__14927,w,h,ctx){var map__14933 = p__14927;var map__14933__$1 = ((cljs.core.seq_QMARK_.call(null,map__14933))?cljs.core.apply.call(null,cljs.core.hash_map,map__14933):map__14933);var info = map__14933__$1;var drawers = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__14934 = cljs.core.seq.call(null,drawers);var chunk__14935 = null;var count__14936 = (0);var i__14937 = (0);while(true){
if((i__14937 < count__14936))
{var drawer = cljs.core._nth.call(null,chunk__14935,i__14937);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__14938 = seq__14934;
var G__14939 = chunk__14935;
var G__14940 = count__14936;
var G__14941 = (i__14937 + (1));
seq__14934 = G__14938;
chunk__14935 = G__14939;
count__14936 = G__14940;
i__14937 = G__14941;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14934);if(temp__4126__auto__)
{var seq__14934__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14934__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14934__$1);{
var G__14942 = cljs.core.chunk_rest.call(null,seq__14934__$1);
var G__14943 = c__4307__auto__;
var G__14944 = cljs.core.count.call(null,c__4307__auto__);
var G__14945 = (0);
seq__14934 = G__14942;
chunk__14935 = G__14943;
count__14936 = G__14944;
i__14937 = G__14945;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__14934__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__14946 = cljs.core.next.call(null,seq__14934__$1);
var G__14947 = null;
var G__14948 = (0);
var G__14949 = (0);
seq__14934 = G__14946;
chunk__14935 = G__14947;
count__14936 = G__14948;
i__14937 = G__14949;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__14950){var map__14951 = p__14950;var map__14951__$1 = ((cljs.core.seq_QMARK_.call(null,map__14951))?cljs.core.apply.call(null,cljs.core.hash_map,map__14951):map__14951);var line = cljs.core.get.call(null,map__14951__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__14952){var map__14953 = p__14952;var map__14953__$1 = ((cljs.core.seq_QMARK_.call(null,map__14953))?cljs.core.apply.call(null,cljs.core.hash_map,map__14953):map__14953);var line = cljs.core.get.call(null,map__14953__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__14954){var map__14955 = p__14954;var map__14955__$1 = ((cljs.core.seq_QMARK_.call(null,map__14955))?cljs.core.apply.call(null,cljs.core.hash_map,map__14955):map__14955);var line = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__14956,base,ctx){var map__14957 = p__14956;var map__14957__$1 = ((cljs.core.seq_QMARK_.call(null,map__14957))?cljs.core.apply.call(null,cljs.core.hash_map,map__14957):map__14957);var line = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__14958 = base;var w = cljs.core.nth.call(null,vec__14958,(0),null);var h = cljs.core.nth.call(null,vec__14958,(1),null);var max_v = cljs.core.nth.call(null,vec__14958,(2),null);var min_v = cljs.core.nth.call(null,vec__14958,(3),null);var offset_v = cljs.core.nth.call(null,vec__14958,(4),null);var offset_x = cljs.core.nth.call(null,vec__14958,(5),null);var pos_y = cljs.core.nth.call(null,vec__14958,(6),null);(ctx["strokeStyle"] = color);
var seq__14959 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14958,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__14957,map__14957__$1,line,color){
return (function() { 
var G__14965__delegate = function (args){return args;
};
var G__14965 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14965__delegate.call(this,args);};
G__14965.cljs$lang$maxFixedArity = 0;
G__14965.cljs$lang$applyTo = (function (arglist__14966){
var args = cljs.core.seq(arglist__14966);
return G__14965__delegate(args);
});
G__14965.cljs$core$IFn$_invoke$arity$variadic = G__14965__delegate;
return G__14965;
})()
;})(vec__14958,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__14957,map__14957__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__14960 = null;var count__14961 = (0);var i__14962 = (0);while(true){
if((i__14962 < count__14961))
{var vec__14963 = cljs.core._nth.call(null,chunk__14960,i__14962);var idx = cljs.core.nth.call(null,vec__14963,(0),null);var prev = cljs.core.nth.call(null,vec__14963,(1),null);var curr = cljs.core.nth.call(null,vec__14963,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__14967 = seq__14959;
var G__14968 = chunk__14960;
var G__14969 = count__14961;
var G__14970 = (i__14962 + (1));
seq__14959 = G__14967;
chunk__14960 = G__14968;
count__14961 = G__14969;
i__14962 = G__14970;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14959);if(temp__4126__auto__)
{var seq__14959__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14959__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14959__$1);{
var G__14971 = cljs.core.chunk_rest.call(null,seq__14959__$1);
var G__14972 = c__4307__auto__;
var G__14973 = cljs.core.count.call(null,c__4307__auto__);
var G__14974 = (0);
seq__14959 = G__14971;
chunk__14960 = G__14972;
count__14961 = G__14973;
i__14962 = G__14974;
continue;
}
} else
{var vec__14964 = cljs.core.first.call(null,seq__14959__$1);var idx = cljs.core.nth.call(null,vec__14964,(0),null);var prev = cljs.core.nth.call(null,vec__14964,(1),null);var curr = cljs.core.nth.call(null,vec__14964,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__14975 = cljs.core.next.call(null,seq__14959__$1);
var G__14976 = null;
var G__14977 = (0);
var G__14978 = (0);
seq__14959 = G__14975;
chunk__14960 = G__14976;
count__14961 = G__14977;
i__14962 = G__14978;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__14979){var map__14980 = p__14979;var map__14980__$1 = ((cljs.core.seq_QMARK_.call(null,map__14980))?cljs.core.apply.call(null,cljs.core.hash_map,map__14980):map__14980);var kline = cljs.core.get.call(null,map__14980__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__14981){var map__14982 = p__14981;var map__14982__$1 = ((cljs.core.seq_QMARK_.call(null,map__14982))?cljs.core.apply.call(null,cljs.core.hash_map,map__14982):map__14982);var kline = cljs.core.get.call(null,map__14982__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__14983){var map__14984 = p__14983;var map__14984__$1 = ((cljs.core.seq_QMARK_.call(null,map__14984))?cljs.core.apply.call(null,cljs.core.hash_map,map__14984):map__14984);var kline = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__14985,base,ctx){var map__14986 = p__14985;var map__14986__$1 = ((cljs.core.seq_QMARK_.call(null,map__14986))?cljs.core.apply.call(null,cljs.core.hash_map,map__14986):map__14986);var kline = cljs.core.get.call(null,map__14986__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__14986__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__14987 = base;var w = cljs.core.nth.call(null,vec__14987,(0),null);var h = cljs.core.nth.call(null,vec__14987,(1),null);var max_v = cljs.core.nth.call(null,vec__14987,(2),null);var min_v = cljs.core.nth.call(null,vec__14987,(3),null);var offset_v = cljs.core.nth.call(null,vec__14987,(4),null);var offset_x = cljs.core.nth.call(null,vec__14987,(5),null);var pos_y = cljs.core.nth.call(null,vec__14987,(6),null);(ctx["fillStyle"] = "black");
var seq__14988 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14987,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__14986,map__14986__$1,kline,info){
return (function() { 
var G__14996__delegate = function (args){return args;
};
var G__14996 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14996__delegate.call(this,args);};
G__14996.cljs$lang$maxFixedArity = 0;
G__14996.cljs$lang$applyTo = (function (arglist__14997){
var args = cljs.core.seq(arglist__14997);
return G__14996__delegate(args);
});
G__14996.cljs$core$IFn$_invoke$arity$variadic = G__14996__delegate;
return G__14996;
})()
;})(vec__14987,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__14986,map__14986__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__14989 = null;var count__14990 = (0);var i__14991 = (0);while(true){
if((i__14991 < count__14990))
{var vec__14992 = cljs.core._nth.call(null,chunk__14989,i__14991);var idx = cljs.core.nth.call(null,vec__14992,(0),null);var vec__14993 = cljs.core.nth.call(null,vec__14992,(1),null);var date = cljs.core.nth.call(null,vec__14993,(0),null);var open = cljs.core.nth.call(null,vec__14993,(1),null);var high = cljs.core.nth.call(null,vec__14993,(2),null);var low = cljs.core.nth.call(null,vec__14993,(3),null);var close = cljs.core.nth.call(null,vec__14993,(4),null);var volume = cljs.core.nth.call(null,vec__14993,(5),null);var info__$1 = cljs.core.nth.call(null,vec__14992,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__14998 = seq__14988;
var G__14999 = chunk__14989;
var G__15000 = count__14990;
var G__15001 = (i__14991 + (1));
seq__14988 = G__14998;
chunk__14989 = G__14999;
count__14990 = G__15000;
i__14991 = G__15001;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14988);if(temp__4126__auto__)
{var seq__14988__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14988__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14988__$1);{
var G__15002 = cljs.core.chunk_rest.call(null,seq__14988__$1);
var G__15003 = c__4307__auto__;
var G__15004 = cljs.core.count.call(null,c__4307__auto__);
var G__15005 = (0);
seq__14988 = G__15002;
chunk__14989 = G__15003;
count__14990 = G__15004;
i__14991 = G__15005;
continue;
}
} else
{var vec__14994 = cljs.core.first.call(null,seq__14988__$1);var idx = cljs.core.nth.call(null,vec__14994,(0),null);var vec__14995 = cljs.core.nth.call(null,vec__14994,(1),null);var date = cljs.core.nth.call(null,vec__14995,(0),null);var open = cljs.core.nth.call(null,vec__14995,(1),null);var high = cljs.core.nth.call(null,vec__14995,(2),null);var low = cljs.core.nth.call(null,vec__14995,(3),null);var close = cljs.core.nth.call(null,vec__14995,(4),null);var volume = cljs.core.nth.call(null,vec__14995,(5),null);var info__$1 = cljs.core.nth.call(null,vec__14994,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__15006 = cljs.core.next.call(null,seq__14988__$1);
var G__15007 = null;
var G__15008 = (0);
var G__15009 = (0);
seq__14988 = G__15006;
chunk__14989 = G__15007;
count__14990 = G__15008;
i__14991 = G__15009;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__15010){var map__15011 = p__15010;var map__15011__$1 = ((cljs.core.seq_QMARK_.call(null,map__15011))?cljs.core.apply.call(null,cljs.core.hash_map,map__15011):map__15011);var cz = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__15012){var map__15013 = p__15012;var map__15013__$1 = ((cljs.core.seq_QMARK_.call(null,map__15013))?cljs.core.apply.call(null,cljs.core.hash_map,map__15013):map__15013);var cz = cljs.core.get.call(null,map__15013__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__15014,base,ctx){var map__15015 = p__15014;var map__15015__$1 = ((cljs.core.seq_QMARK_.call(null,map__15015))?cljs.core.apply.call(null,cljs.core.hash_map,map__15015):map__15015);var cz = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__15016 = base;var w = cljs.core.nth.call(null,vec__15016,(0),null);var h = cljs.core.nth.call(null,vec__15016,(1),null);var max_v = cljs.core.nth.call(null,vec__15016,(2),null);var min_v = cljs.core.nth.call(null,vec__15016,(3),null);var offset_v = cljs.core.nth.call(null,vec__15016,(4),null);var offset_x = cljs.core.nth.call(null,vec__15016,(5),null);var pos_y = cljs.core.nth.call(null,vec__15016,(6),null);var proj_x = ((function (vec__15016,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__15015,map__15015__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__15016,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__15015,map__15015__$1,cz,vz,color))
;var proj_y = ((function (vec__15016,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__15015,map__15015__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__15016,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__15015,map__15015__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__15017 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15016,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__15015,map__15015__$1,cz,vz,color){
return (function() { 
var G__15023__delegate = function (args){return args;
};
var G__15023 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15023__delegate.call(this,args);};
G__15023.cljs$lang$maxFixedArity = 0;
G__15023.cljs$lang$applyTo = (function (arglist__15024){
var args = cljs.core.seq(arglist__15024);
return G__15023__delegate(args);
});
G__15023.cljs$core$IFn$_invoke$arity$variadic = G__15023__delegate;
return G__15023;
})()
;})(vec__15016,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__15015,map__15015__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__15018 = null;var count__15019 = (0);var i__15020 = (0);while(true){
if((i__15020 < count__15019))
{var vec__15021 = cljs.core._nth.call(null,chunk__15018,i__15020);var idx = cljs.core.nth.call(null,vec__15021,(0),null);var pc = cljs.core.nth.call(null,vec__15021,(1),null);var cc = cljs.core.nth.call(null,vec__15021,(2),null);var pv = cljs.core.nth.call(null,vec__15021,(3),null);var cv = cljs.core.nth.call(null,vec__15021,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__15025 = seq__15017;
var G__15026 = chunk__15018;
var G__15027 = count__15019;
var G__15028 = (i__15020 + (1));
seq__15017 = G__15025;
chunk__15018 = G__15026;
count__15019 = G__15027;
i__15020 = G__15028;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15017);if(temp__4126__auto__)
{var seq__15017__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15017__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15017__$1);{
var G__15029 = cljs.core.chunk_rest.call(null,seq__15017__$1);
var G__15030 = c__4307__auto__;
var G__15031 = cljs.core.count.call(null,c__4307__auto__);
var G__15032 = (0);
seq__15017 = G__15029;
chunk__15018 = G__15030;
count__15019 = G__15031;
i__15020 = G__15032;
continue;
}
} else
{var vec__15022 = cljs.core.first.call(null,seq__15017__$1);var idx = cljs.core.nth.call(null,vec__15022,(0),null);var pc = cljs.core.nth.call(null,vec__15022,(1),null);var cc = cljs.core.nth.call(null,vec__15022,(2),null);var pv = cljs.core.nth.call(null,vec__15022,(3),null);var cv = cljs.core.nth.call(null,vec__15022,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__15033 = cljs.core.next.call(null,seq__15017__$1);
var G__15034 = null;
var G__15035 = (0);
var G__15036 = (0);
seq__15017 = G__15033;
chunk__15018 = G__15034;
count__15019 = G__15035;
i__15020 = G__15036;
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
