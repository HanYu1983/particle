// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__23089){var map__23090 = p__23089;var map__23090__$1 = ((cljs.core.seq_QMARK_.call(null,map__23090))?cljs.core.apply.call(null,cljs.core.hash_map,map__23090):map__23090);var t = cljs.core.get.call(null,map__23090__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__23091){var map__23092 = p__23091;var map__23092__$1 = ((cljs.core.seq_QMARK_.call(null,map__23092))?cljs.core.apply.call(null,cljs.core.hash_map,map__23092):map__23092);var t = cljs.core.get.call(null,map__23092__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__23093){var map__23094 = p__23093;var map__23094__$1 = ((cljs.core.seq_QMARK_.call(null,map__23094))?cljs.core.apply.call(null,cljs.core.hash_map,map__23094):map__23094);var t = cljs.core.get.call(null,map__23094__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__23095,base,ctx){var map__23096 = p__23095;var map__23096__$1 = ((cljs.core.seq_QMARK_.call(null,map__23096))?cljs.core.apply.call(null,cljs.core.hash_map,map__23096):map__23096);var t = cljs.core.get.call(null,map__23096__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__23097,w,h,ctx){var map__23103 = p__23097;var map__23103__$1 = ((cljs.core.seq_QMARK_.call(null,map__23103))?cljs.core.apply.call(null,cljs.core.hash_map,map__23103):map__23103);var info = map__23103__$1;var drawers = cljs.core.get.call(null,map__23103__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__23104 = cljs.core.seq.call(null,drawers);var chunk__23105 = null;var count__23106 = (0);var i__23107 = (0);while(true){
if((i__23107 < count__23106))
{var drawer = cljs.core._nth.call(null,chunk__23105,i__23107);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__23108 = seq__23104;
var G__23109 = chunk__23105;
var G__23110 = count__23106;
var G__23111 = (i__23107 + (1));
seq__23104 = G__23108;
chunk__23105 = G__23109;
count__23106 = G__23110;
i__23107 = G__23111;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23104);if(temp__4126__auto__)
{var seq__23104__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23104__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23104__$1);{
var G__23112 = cljs.core.chunk_rest.call(null,seq__23104__$1);
var G__23113 = c__4307__auto__;
var G__23114 = cljs.core.count.call(null,c__4307__auto__);
var G__23115 = (0);
seq__23104 = G__23112;
chunk__23105 = G__23113;
count__23106 = G__23114;
i__23107 = G__23115;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__23104__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__23116 = cljs.core.next.call(null,seq__23104__$1);
var G__23117 = null;
var G__23118 = (0);
var G__23119 = (0);
seq__23104 = G__23116;
chunk__23105 = G__23117;
count__23106 = G__23118;
i__23107 = G__23119;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__23120){var map__23121 = p__23120;var map__23121__$1 = ((cljs.core.seq_QMARK_.call(null,map__23121))?cljs.core.apply.call(null,cljs.core.hash_map,map__23121):map__23121);var line = cljs.core.get.call(null,map__23121__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__23122){var map__23123 = p__23122;var map__23123__$1 = ((cljs.core.seq_QMARK_.call(null,map__23123))?cljs.core.apply.call(null,cljs.core.hash_map,map__23123):map__23123);var line = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__23124){var map__23125 = p__23124;var map__23125__$1 = ((cljs.core.seq_QMARK_.call(null,map__23125))?cljs.core.apply.call(null,cljs.core.hash_map,map__23125):map__23125);var line = cljs.core.get.call(null,map__23125__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__23126,base,ctx){var map__23127 = p__23126;var map__23127__$1 = ((cljs.core.seq_QMARK_.call(null,map__23127))?cljs.core.apply.call(null,cljs.core.hash_map,map__23127):map__23127);var line = cljs.core.get.call(null,map__23127__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__23127__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__23128 = base;var w = cljs.core.nth.call(null,vec__23128,(0),null);var h = cljs.core.nth.call(null,vec__23128,(1),null);var max_v = cljs.core.nth.call(null,vec__23128,(2),null);var min_v = cljs.core.nth.call(null,vec__23128,(3),null);var offset_v = cljs.core.nth.call(null,vec__23128,(4),null);var offset_x = cljs.core.nth.call(null,vec__23128,(5),null);var pos_y = cljs.core.nth.call(null,vec__23128,(6),null);(ctx["strokeStyle"] = color);
var seq__23129 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__23128,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__23127,map__23127__$1,line,color){
return (function() { 
var G__23135__delegate = function (args){return args;
};
var G__23135 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23135__delegate.call(this,args);};
G__23135.cljs$lang$maxFixedArity = 0;
G__23135.cljs$lang$applyTo = (function (arglist__23136){
var args = cljs.core.seq(arglist__23136);
return G__23135__delegate(args);
});
G__23135.cljs$core$IFn$_invoke$arity$variadic = G__23135__delegate;
return G__23135;
})()
;})(vec__23128,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__23127,map__23127__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__23130 = null;var count__23131 = (0);var i__23132 = (0);while(true){
if((i__23132 < count__23131))
{var vec__23133 = cljs.core._nth.call(null,chunk__23130,i__23132);var idx = cljs.core.nth.call(null,vec__23133,(0),null);var prev = cljs.core.nth.call(null,vec__23133,(1),null);var curr = cljs.core.nth.call(null,vec__23133,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__23137 = seq__23129;
var G__23138 = chunk__23130;
var G__23139 = count__23131;
var G__23140 = (i__23132 + (1));
seq__23129 = G__23137;
chunk__23130 = G__23138;
count__23131 = G__23139;
i__23132 = G__23140;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23129);if(temp__4126__auto__)
{var seq__23129__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23129__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23129__$1);{
var G__23141 = cljs.core.chunk_rest.call(null,seq__23129__$1);
var G__23142 = c__4307__auto__;
var G__23143 = cljs.core.count.call(null,c__4307__auto__);
var G__23144 = (0);
seq__23129 = G__23141;
chunk__23130 = G__23142;
count__23131 = G__23143;
i__23132 = G__23144;
continue;
}
} else
{var vec__23134 = cljs.core.first.call(null,seq__23129__$1);var idx = cljs.core.nth.call(null,vec__23134,(0),null);var prev = cljs.core.nth.call(null,vec__23134,(1),null);var curr = cljs.core.nth.call(null,vec__23134,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__23145 = cljs.core.next.call(null,seq__23129__$1);
var G__23146 = null;
var G__23147 = (0);
var G__23148 = (0);
seq__23129 = G__23145;
chunk__23130 = G__23146;
count__23131 = G__23147;
i__23132 = G__23148;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__23149){var map__23150 = p__23149;var map__23150__$1 = ((cljs.core.seq_QMARK_.call(null,map__23150))?cljs.core.apply.call(null,cljs.core.hash_map,map__23150):map__23150);var kline = cljs.core.get.call(null,map__23150__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__23151){var map__23152 = p__23151;var map__23152__$1 = ((cljs.core.seq_QMARK_.call(null,map__23152))?cljs.core.apply.call(null,cljs.core.hash_map,map__23152):map__23152);var kline = cljs.core.get.call(null,map__23152__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__23153){var map__23154 = p__23153;var map__23154__$1 = ((cljs.core.seq_QMARK_.call(null,map__23154))?cljs.core.apply.call(null,cljs.core.hash_map,map__23154):map__23154);var kline = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__23155,base,ctx){var map__23156 = p__23155;var map__23156__$1 = ((cljs.core.seq_QMARK_.call(null,map__23156))?cljs.core.apply.call(null,cljs.core.hash_map,map__23156):map__23156);var kline = cljs.core.get.call(null,map__23156__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__23156__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__23157 = base;var w = cljs.core.nth.call(null,vec__23157,(0),null);var h = cljs.core.nth.call(null,vec__23157,(1),null);var max_v = cljs.core.nth.call(null,vec__23157,(2),null);var min_v = cljs.core.nth.call(null,vec__23157,(3),null);var offset_v = cljs.core.nth.call(null,vec__23157,(4),null);var offset_x = cljs.core.nth.call(null,vec__23157,(5),null);var pos_y = cljs.core.nth.call(null,vec__23157,(6),null);(ctx["fillStyle"] = "black");
var seq__23158 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__23157,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__23156,map__23156__$1,kline,info){
return (function() { 
var G__23166__delegate = function (args){return args;
};
var G__23166 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23166__delegate.call(this,args);};
G__23166.cljs$lang$maxFixedArity = 0;
G__23166.cljs$lang$applyTo = (function (arglist__23167){
var args = cljs.core.seq(arglist__23167);
return G__23166__delegate(args);
});
G__23166.cljs$core$IFn$_invoke$arity$variadic = G__23166__delegate;
return G__23166;
})()
;})(vec__23157,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__23156,map__23156__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__23159 = null;var count__23160 = (0);var i__23161 = (0);while(true){
if((i__23161 < count__23160))
{var vec__23162 = cljs.core._nth.call(null,chunk__23159,i__23161);var idx = cljs.core.nth.call(null,vec__23162,(0),null);var vec__23163 = cljs.core.nth.call(null,vec__23162,(1),null);var date = cljs.core.nth.call(null,vec__23163,(0),null);var open = cljs.core.nth.call(null,vec__23163,(1),null);var high = cljs.core.nth.call(null,vec__23163,(2),null);var low = cljs.core.nth.call(null,vec__23163,(3),null);var close = cljs.core.nth.call(null,vec__23163,(4),null);var volume = cljs.core.nth.call(null,vec__23163,(5),null);var info__$1 = cljs.core.nth.call(null,vec__23162,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__23168 = seq__23158;
var G__23169 = chunk__23159;
var G__23170 = count__23160;
var G__23171 = (i__23161 + (1));
seq__23158 = G__23168;
chunk__23159 = G__23169;
count__23160 = G__23170;
i__23161 = G__23171;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23158);if(temp__4126__auto__)
{var seq__23158__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23158__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23158__$1);{
var G__23172 = cljs.core.chunk_rest.call(null,seq__23158__$1);
var G__23173 = c__4307__auto__;
var G__23174 = cljs.core.count.call(null,c__4307__auto__);
var G__23175 = (0);
seq__23158 = G__23172;
chunk__23159 = G__23173;
count__23160 = G__23174;
i__23161 = G__23175;
continue;
}
} else
{var vec__23164 = cljs.core.first.call(null,seq__23158__$1);var idx = cljs.core.nth.call(null,vec__23164,(0),null);var vec__23165 = cljs.core.nth.call(null,vec__23164,(1),null);var date = cljs.core.nth.call(null,vec__23165,(0),null);var open = cljs.core.nth.call(null,vec__23165,(1),null);var high = cljs.core.nth.call(null,vec__23165,(2),null);var low = cljs.core.nth.call(null,vec__23165,(3),null);var close = cljs.core.nth.call(null,vec__23165,(4),null);var volume = cljs.core.nth.call(null,vec__23165,(5),null);var info__$1 = cljs.core.nth.call(null,vec__23164,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__23176 = cljs.core.next.call(null,seq__23158__$1);
var G__23177 = null;
var G__23178 = (0);
var G__23179 = (0);
seq__23158 = G__23176;
chunk__23159 = G__23177;
count__23160 = G__23178;
i__23161 = G__23179;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__23180){var map__23181 = p__23180;var map__23181__$1 = ((cljs.core.seq_QMARK_.call(null,map__23181))?cljs.core.apply.call(null,cljs.core.hash_map,map__23181):map__23181);var cz = cljs.core.get.call(null,map__23181__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__23182){var map__23183 = p__23182;var map__23183__$1 = ((cljs.core.seq_QMARK_.call(null,map__23183))?cljs.core.apply.call(null,cljs.core.hash_map,map__23183):map__23183);var cz = cljs.core.get.call(null,map__23183__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__23184,base,ctx){var map__23185 = p__23184;var map__23185__$1 = ((cljs.core.seq_QMARK_.call(null,map__23185))?cljs.core.apply.call(null,cljs.core.hash_map,map__23185):map__23185);var cz = cljs.core.get.call(null,map__23185__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__23185__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__23186 = base;var w = cljs.core.nth.call(null,vec__23186,(0),null);var h = cljs.core.nth.call(null,vec__23186,(1),null);var max_v = cljs.core.nth.call(null,vec__23186,(2),null);var min_v = cljs.core.nth.call(null,vec__23186,(3),null);var offset_v = cljs.core.nth.call(null,vec__23186,(4),null);var offset_x = cljs.core.nth.call(null,vec__23186,(5),null);var pos_y = cljs.core.nth.call(null,vec__23186,(6),null);var proj_x = ((function (vec__23186,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__23185,map__23185__$1,cz,vz){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__23186,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__23185,map__23185__$1,cz,vz))
;var proj_y = ((function (vec__23186,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__23185,map__23185__$1,cz,vz){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__23186,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__23185,map__23185__$1,cz,vz))
;(ctx["fillStyle"] = "red");
(ctx["strokeStyle"] = "red");
var seq__23187 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__23186,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__23185,map__23185__$1,cz,vz){
return (function() { 
var G__23193__delegate = function (args){return args;
};
var G__23193 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23193__delegate.call(this,args);};
G__23193.cljs$lang$maxFixedArity = 0;
G__23193.cljs$lang$applyTo = (function (arglist__23194){
var args = cljs.core.seq(arglist__23194);
return G__23193__delegate(args);
});
G__23193.cljs$core$IFn$_invoke$arity$variadic = G__23193__delegate;
return G__23193;
})()
;})(vec__23186,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__23185,map__23185__$1,cz,vz))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__23188 = null;var count__23189 = (0);var i__23190 = (0);while(true){
if((i__23190 < count__23189))
{var vec__23191 = cljs.core._nth.call(null,chunk__23188,i__23190);var idx = cljs.core.nth.call(null,vec__23191,(0),null);var pc = cljs.core.nth.call(null,vec__23191,(1),null);var cc = cljs.core.nth.call(null,vec__23191,(2),null);var pv = cljs.core.nth.call(null,vec__23191,(3),null);var cv = cljs.core.nth.call(null,vec__23191,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__23195 = seq__23187;
var G__23196 = chunk__23188;
var G__23197 = count__23189;
var G__23198 = (i__23190 + (1));
seq__23187 = G__23195;
chunk__23188 = G__23196;
count__23189 = G__23197;
i__23190 = G__23198;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23187);if(temp__4126__auto__)
{var seq__23187__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23187__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23187__$1);{
var G__23199 = cljs.core.chunk_rest.call(null,seq__23187__$1);
var G__23200 = c__4307__auto__;
var G__23201 = cljs.core.count.call(null,c__4307__auto__);
var G__23202 = (0);
seq__23187 = G__23199;
chunk__23188 = G__23200;
count__23189 = G__23201;
i__23190 = G__23202;
continue;
}
} else
{var vec__23192 = cljs.core.first.call(null,seq__23187__$1);var idx = cljs.core.nth.call(null,vec__23192,(0),null);var pc = cljs.core.nth.call(null,vec__23192,(1),null);var cc = cljs.core.nth.call(null,vec__23192,(2),null);var pv = cljs.core.nth.call(null,vec__23192,(3),null);var cv = cljs.core.nth.call(null,vec__23192,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__23203 = cljs.core.next.call(null,seq__23187__$1);
var G__23204 = null;
var G__23205 = (0);
var G__23206 = (0);
seq__23187 = G__23203;
chunk__23188 = G__23204;
count__23189 = G__23205;
i__23190 = G__23206;
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
