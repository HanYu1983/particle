// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__43292){var map__43293 = p__43292;var map__43293__$1 = ((cljs.core.seq_QMARK_.call(null,map__43293))?cljs.core.apply.call(null,cljs.core.hash_map,map__43293):map__43293);var t = cljs.core.get.call(null,map__43293__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__43294){var map__43295 = p__43294;var map__43295__$1 = ((cljs.core.seq_QMARK_.call(null,map__43295))?cljs.core.apply.call(null,cljs.core.hash_map,map__43295):map__43295);var t = cljs.core.get.call(null,map__43295__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__43296){var map__43297 = p__43296;var map__43297__$1 = ((cljs.core.seq_QMARK_.call(null,map__43297))?cljs.core.apply.call(null,cljs.core.hash_map,map__43297):map__43297);var t = cljs.core.get.call(null,map__43297__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__43298,base,ctx){var map__43299 = p__43298;var map__43299__$1 = ((cljs.core.seq_QMARK_.call(null,map__43299))?cljs.core.apply.call(null,cljs.core.hash_map,map__43299):map__43299);var t = cljs.core.get.call(null,map__43299__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__43300,w,h,ctx){var map__43306 = p__43300;var map__43306__$1 = ((cljs.core.seq_QMARK_.call(null,map__43306))?cljs.core.apply.call(null,cljs.core.hash_map,map__43306):map__43306);var info = map__43306__$1;var drawers = cljs.core.get.call(null,map__43306__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__43307 = cljs.core.seq.call(null,drawers);var chunk__43308 = null;var count__43309 = (0);var i__43310 = (0);while(true){
if((i__43310 < count__43309))
{var drawer = cljs.core._nth.call(null,chunk__43308,i__43310);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__43311 = seq__43307;
var G__43312 = chunk__43308;
var G__43313 = count__43309;
var G__43314 = (i__43310 + (1));
seq__43307 = G__43311;
chunk__43308 = G__43312;
count__43309 = G__43313;
i__43310 = G__43314;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__43307);if(temp__4126__auto__)
{var seq__43307__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43307__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__43307__$1);{
var G__43315 = cljs.core.chunk_rest.call(null,seq__43307__$1);
var G__43316 = c__4307__auto__;
var G__43317 = cljs.core.count.call(null,c__4307__auto__);
var G__43318 = (0);
seq__43307 = G__43315;
chunk__43308 = G__43316;
count__43309 = G__43317;
i__43310 = G__43318;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__43307__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__43319 = cljs.core.next.call(null,seq__43307__$1);
var G__43320 = null;
var G__43321 = (0);
var G__43322 = (0);
seq__43307 = G__43319;
chunk__43308 = G__43320;
count__43309 = G__43321;
i__43310 = G__43322;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__43323){var map__43324 = p__43323;var map__43324__$1 = ((cljs.core.seq_QMARK_.call(null,map__43324))?cljs.core.apply.call(null,cljs.core.hash_map,map__43324):map__43324);var line = cljs.core.get.call(null,map__43324__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__43325){var map__43326 = p__43325;var map__43326__$1 = ((cljs.core.seq_QMARK_.call(null,map__43326))?cljs.core.apply.call(null,cljs.core.hash_map,map__43326):map__43326);var line = cljs.core.get.call(null,map__43326__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__43327){var map__43328 = p__43327;var map__43328__$1 = ((cljs.core.seq_QMARK_.call(null,map__43328))?cljs.core.apply.call(null,cljs.core.hash_map,map__43328):map__43328);var line = cljs.core.get.call(null,map__43328__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__43329,base,ctx){var map__43330 = p__43329;var map__43330__$1 = ((cljs.core.seq_QMARK_.call(null,map__43330))?cljs.core.apply.call(null,cljs.core.hash_map,map__43330):map__43330);var line = cljs.core.get.call(null,map__43330__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__43330__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__43330__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var vec__43331 = base;var w = cljs.core.nth.call(null,vec__43331,(0),null);var h = cljs.core.nth.call(null,vec__43331,(1),null);var max_v = cljs.core.nth.call(null,vec__43331,(2),null);var min_v = cljs.core.nth.call(null,vec__43331,(3),null);var offset_v = cljs.core.nth.call(null,vec__43331,(4),null);var offset_x = cljs.core.nth.call(null,vec__43331,(5),null);var pos_y = cljs.core.nth.call(null,vec__43331,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
var seq__43332 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__43331,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__43330,map__43330__$1,line,color,offset){
return (function() { 
var G__43338__delegate = function (args){return args;
};
var G__43338 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43338__delegate.call(this,args);};
G__43338.cljs$lang$maxFixedArity = 0;
G__43338.cljs$lang$applyTo = (function (arglist__43339){
var args = cljs.core.seq(arglist__43339);
return G__43338__delegate(args);
});
G__43338.cljs$core$IFn$_invoke$arity$variadic = G__43338__delegate;
return G__43338;
})()
;})(vec__43331,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__43330,map__43330__$1,line,color,offset))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__43333 = null;var count__43334 = (0);var i__43335 = (0);while(true){
if((i__43335 < count__43334))
{var vec__43336 = cljs.core._nth.call(null,chunk__43333,i__43335);var idx = cljs.core.nth.call(null,vec__43336,(0),null);var prev = cljs.core.nth.call(null,vec__43336,(1),null);var curr = cljs.core.nth.call(null,vec__43336,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo(((idx + offset__$1) * offset_x),pos_y.call(null,prev));
ctx.lineTo((((idx + offset__$1) + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__43340 = seq__43332;
var G__43341 = chunk__43333;
var G__43342 = count__43334;
var G__43343 = (i__43335 + (1));
seq__43332 = G__43340;
chunk__43333 = G__43341;
count__43334 = G__43342;
i__43335 = G__43343;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__43332);if(temp__4126__auto__)
{var seq__43332__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43332__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__43332__$1);{
var G__43344 = cljs.core.chunk_rest.call(null,seq__43332__$1);
var G__43345 = c__4307__auto__;
var G__43346 = cljs.core.count.call(null,c__4307__auto__);
var G__43347 = (0);
seq__43332 = G__43344;
chunk__43333 = G__43345;
count__43334 = G__43346;
i__43335 = G__43347;
continue;
}
} else
{var vec__43337 = cljs.core.first.call(null,seq__43332__$1);var idx = cljs.core.nth.call(null,vec__43337,(0),null);var prev = cljs.core.nth.call(null,vec__43337,(1),null);var curr = cljs.core.nth.call(null,vec__43337,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo(((idx + offset__$1) * offset_x),pos_y.call(null,prev));
ctx.lineTo((((idx + offset__$1) + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__43348 = cljs.core.next.call(null,seq__43332__$1);
var G__43349 = null;
var G__43350 = (0);
var G__43351 = (0);
seq__43332 = G__43348;
chunk__43333 = G__43349;
count__43334 = G__43350;
i__43335 = G__43351;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__43352){var map__43353 = p__43352;var map__43353__$1 = ((cljs.core.seq_QMARK_.call(null,map__43353))?cljs.core.apply.call(null,cljs.core.hash_map,map__43353):map__43353);var kline = cljs.core.get.call(null,map__43353__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__43354){var map__43355 = p__43354;var map__43355__$1 = ((cljs.core.seq_QMARK_.call(null,map__43355))?cljs.core.apply.call(null,cljs.core.hash_map,map__43355):map__43355);var kline = cljs.core.get.call(null,map__43355__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__43356){var map__43357 = p__43356;var map__43357__$1 = ((cljs.core.seq_QMARK_.call(null,map__43357))?cljs.core.apply.call(null,cljs.core.hash_map,map__43357):map__43357);var kline = cljs.core.get.call(null,map__43357__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__43358,base,ctx){var map__43359 = p__43358;var map__43359__$1 = ((cljs.core.seq_QMARK_.call(null,map__43359))?cljs.core.apply.call(null,cljs.core.hash_map,map__43359):map__43359);var kline = cljs.core.get.call(null,map__43359__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__43359__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__43360 = base;var w = cljs.core.nth.call(null,vec__43360,(0),null);var h = cljs.core.nth.call(null,vec__43360,(1),null);var max_v = cljs.core.nth.call(null,vec__43360,(2),null);var min_v = cljs.core.nth.call(null,vec__43360,(3),null);var offset_v = cljs.core.nth.call(null,vec__43360,(4),null);var offset_x = cljs.core.nth.call(null,vec__43360,(5),null);var pos_y = cljs.core.nth.call(null,vec__43360,(6),null);(ctx["fillStyle"] = "black");
var seq__43361 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__43360,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__43359,map__43359__$1,kline,info){
return (function() { 
var G__43369__delegate = function (args){return args;
};
var G__43369 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43369__delegate.call(this,args);};
G__43369.cljs$lang$maxFixedArity = 0;
G__43369.cljs$lang$applyTo = (function (arglist__43370){
var args = cljs.core.seq(arglist__43370);
return G__43369__delegate(args);
});
G__43369.cljs$core$IFn$_invoke$arity$variadic = G__43369__delegate;
return G__43369;
})()
;})(vec__43360,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__43359,map__43359__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__43362 = null;var count__43363 = (0);var i__43364 = (0);while(true){
if((i__43364 < count__43363))
{var vec__43365 = cljs.core._nth.call(null,chunk__43362,i__43364);var idx = cljs.core.nth.call(null,vec__43365,(0),null);var vec__43366 = cljs.core.nth.call(null,vec__43365,(1),null);var date = cljs.core.nth.call(null,vec__43366,(0),null);var open = cljs.core.nth.call(null,vec__43366,(1),null);var high = cljs.core.nth.call(null,vec__43366,(2),null);var low = cljs.core.nth.call(null,vec__43366,(3),null);var close = cljs.core.nth.call(null,vec__43366,(4),null);var volume = cljs.core.nth.call(null,vec__43366,(5),null);var info__$1 = cljs.core.nth.call(null,vec__43365,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__43371 = seq__43361;
var G__43372 = chunk__43362;
var G__43373 = count__43363;
var G__43374 = (i__43364 + (1));
seq__43361 = G__43371;
chunk__43362 = G__43372;
count__43363 = G__43373;
i__43364 = G__43374;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__43361);if(temp__4126__auto__)
{var seq__43361__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43361__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__43361__$1);{
var G__43375 = cljs.core.chunk_rest.call(null,seq__43361__$1);
var G__43376 = c__4307__auto__;
var G__43377 = cljs.core.count.call(null,c__4307__auto__);
var G__43378 = (0);
seq__43361 = G__43375;
chunk__43362 = G__43376;
count__43363 = G__43377;
i__43364 = G__43378;
continue;
}
} else
{var vec__43367 = cljs.core.first.call(null,seq__43361__$1);var idx = cljs.core.nth.call(null,vec__43367,(0),null);var vec__43368 = cljs.core.nth.call(null,vec__43367,(1),null);var date = cljs.core.nth.call(null,vec__43368,(0),null);var open = cljs.core.nth.call(null,vec__43368,(1),null);var high = cljs.core.nth.call(null,vec__43368,(2),null);var low = cljs.core.nth.call(null,vec__43368,(3),null);var close = cljs.core.nth.call(null,vec__43368,(4),null);var volume = cljs.core.nth.call(null,vec__43368,(5),null);var info__$1 = cljs.core.nth.call(null,vec__43367,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__43379 = cljs.core.next.call(null,seq__43361__$1);
var G__43380 = null;
var G__43381 = (0);
var G__43382 = (0);
seq__43361 = G__43379;
chunk__43362 = G__43380;
count__43363 = G__43381;
i__43364 = G__43382;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__43383){var map__43384 = p__43383;var map__43384__$1 = ((cljs.core.seq_QMARK_.call(null,map__43384))?cljs.core.apply.call(null,cljs.core.hash_map,map__43384):map__43384);var cz = cljs.core.get.call(null,map__43384__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__43385){var map__43386 = p__43385;var map__43386__$1 = ((cljs.core.seq_QMARK_.call(null,map__43386))?cljs.core.apply.call(null,cljs.core.hash_map,map__43386):map__43386);var cz = cljs.core.get.call(null,map__43386__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__43387,base,ctx){var map__43388 = p__43387;var map__43388__$1 = ((cljs.core.seq_QMARK_.call(null,map__43388))?cljs.core.apply.call(null,cljs.core.hash_map,map__43388):map__43388);var cz = cljs.core.get.call(null,map__43388__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__43388__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__43388__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__43389 = base;var w = cljs.core.nth.call(null,vec__43389,(0),null);var h = cljs.core.nth.call(null,vec__43389,(1),null);var max_v = cljs.core.nth.call(null,vec__43389,(2),null);var min_v = cljs.core.nth.call(null,vec__43389,(3),null);var offset_v = cljs.core.nth.call(null,vec__43389,(4),null);var offset_x = cljs.core.nth.call(null,vec__43389,(5),null);var pos_y = cljs.core.nth.call(null,vec__43389,(6),null);var proj_x = ((function (vec__43389,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__43388,map__43388__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__43389,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__43388,map__43388__$1,cz,vz,color))
;var proj_y = ((function (vec__43389,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__43388,map__43388__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__43389,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__43388,map__43388__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__43390 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__43389,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__43388,map__43388__$1,cz,vz,color){
return (function() { 
var G__43396__delegate = function (args){return args;
};
var G__43396 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43396__delegate.call(this,args);};
G__43396.cljs$lang$maxFixedArity = 0;
G__43396.cljs$lang$applyTo = (function (arglist__43397){
var args = cljs.core.seq(arglist__43397);
return G__43396__delegate(args);
});
G__43396.cljs$core$IFn$_invoke$arity$variadic = G__43396__delegate;
return G__43396;
})()
;})(vec__43389,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__43388,map__43388__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__43391 = null;var count__43392 = (0);var i__43393 = (0);while(true){
if((i__43393 < count__43392))
{var vec__43394 = cljs.core._nth.call(null,chunk__43391,i__43393);var idx = cljs.core.nth.call(null,vec__43394,(0),null);var pc = cljs.core.nth.call(null,vec__43394,(1),null);var cc = cljs.core.nth.call(null,vec__43394,(2),null);var pv = cljs.core.nth.call(null,vec__43394,(3),null);var cv = cljs.core.nth.call(null,vec__43394,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__43398 = seq__43390;
var G__43399 = chunk__43391;
var G__43400 = count__43392;
var G__43401 = (i__43393 + (1));
seq__43390 = G__43398;
chunk__43391 = G__43399;
count__43392 = G__43400;
i__43393 = G__43401;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__43390);if(temp__4126__auto__)
{var seq__43390__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43390__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__43390__$1);{
var G__43402 = cljs.core.chunk_rest.call(null,seq__43390__$1);
var G__43403 = c__4307__auto__;
var G__43404 = cljs.core.count.call(null,c__4307__auto__);
var G__43405 = (0);
seq__43390 = G__43402;
chunk__43391 = G__43403;
count__43392 = G__43404;
i__43393 = G__43405;
continue;
}
} else
{var vec__43395 = cljs.core.first.call(null,seq__43390__$1);var idx = cljs.core.nth.call(null,vec__43395,(0),null);var pc = cljs.core.nth.call(null,vec__43395,(1),null);var cc = cljs.core.nth.call(null,vec__43395,(2),null);var pv = cljs.core.nth.call(null,vec__43395,(3),null);var cv = cljs.core.nth.call(null,vec__43395,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__43406 = cljs.core.next.call(null,seq__43390__$1);
var G__43407 = null;
var G__43408 = (0);
var G__43409 = (0);
seq__43390 = G__43406;
chunk__43391 = G__43407;
count__43392 = G__43408;
i__43393 = G__43409;
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
