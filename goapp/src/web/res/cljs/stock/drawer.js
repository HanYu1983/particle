// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110519){var map__110520 = p__110519;var map__110520__$1 = ((cljs.core.seq_QMARK_.call(null,map__110520))?cljs.core.apply.call(null,cljs.core.hash_map,map__110520):map__110520);var t = cljs.core.get.call(null,map__110520__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110521){var map__110522 = p__110521;var map__110522__$1 = ((cljs.core.seq_QMARK_.call(null,map__110522))?cljs.core.apply.call(null,cljs.core.hash_map,map__110522):map__110522);var t = cljs.core.get.call(null,map__110522__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110523){var map__110524 = p__110523;var map__110524__$1 = ((cljs.core.seq_QMARK_.call(null,map__110524))?cljs.core.apply.call(null,cljs.core.hash_map,map__110524):map__110524);var t = cljs.core.get.call(null,map__110524__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__110525,base,ctx){var map__110526 = p__110525;var map__110526__$1 = ((cljs.core.seq_QMARK_.call(null,map__110526))?cljs.core.apply.call(null,cljs.core.hash_map,map__110526):map__110526);var t = cljs.core.get.call(null,map__110526__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__110527,w,h,ctx){var map__110533 = p__110527;var map__110533__$1 = ((cljs.core.seq_QMARK_.call(null,map__110533))?cljs.core.apply.call(null,cljs.core.hash_map,map__110533):map__110533);var info = map__110533__$1;var drawers = cljs.core.get.call(null,map__110533__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__110534 = cljs.core.seq.call(null,drawers);var chunk__110535 = null;var count__110536 = (0);var i__110537 = (0);while(true){
if((i__110537 < count__110536))
{var drawer = cljs.core._nth.call(null,chunk__110535,i__110537);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__110538 = seq__110534;
var G__110539 = chunk__110535;
var G__110540 = count__110536;
var G__110541 = (i__110537 + (1));
seq__110534 = G__110538;
chunk__110535 = G__110539;
count__110536 = G__110540;
i__110537 = G__110541;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110534);if(temp__4126__auto__)
{var seq__110534__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110534__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110534__$1);{
var G__110542 = cljs.core.chunk_rest.call(null,seq__110534__$1);
var G__110543 = c__4307__auto__;
var G__110544 = cljs.core.count.call(null,c__4307__auto__);
var G__110545 = (0);
seq__110534 = G__110542;
chunk__110535 = G__110543;
count__110536 = G__110544;
i__110537 = G__110545;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__110534__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__110546 = cljs.core.next.call(null,seq__110534__$1);
var G__110547 = null;
var G__110548 = (0);
var G__110549 = (0);
seq__110534 = G__110546;
chunk__110535 = G__110547;
count__110536 = G__110548;
i__110537 = G__110549;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110550){var map__110551 = p__110550;var map__110551__$1 = ((cljs.core.seq_QMARK_.call(null,map__110551))?cljs.core.apply.call(null,cljs.core.hash_map,map__110551):map__110551);var line = cljs.core.get.call(null,map__110551__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110552){var map__110553 = p__110552;var map__110553__$1 = ((cljs.core.seq_QMARK_.call(null,map__110553))?cljs.core.apply.call(null,cljs.core.hash_map,map__110553):map__110553);var line = cljs.core.get.call(null,map__110553__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110554){var map__110555 = p__110554;var map__110555__$1 = ((cljs.core.seq_QMARK_.call(null,map__110555))?cljs.core.apply.call(null,cljs.core.hash_map,map__110555):map__110555);var line = cljs.core.get.call(null,map__110555__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__110556,base,ctx){var map__110557 = p__110556;var map__110557__$1 = ((cljs.core.seq_QMARK_.call(null,map__110557))?cljs.core.apply.call(null,cljs.core.hash_map,map__110557):map__110557);var line = cljs.core.get.call(null,map__110557__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__110557__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__110557__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var vec__110558 = base;var w = cljs.core.nth.call(null,vec__110558,(0),null);var h = cljs.core.nth.call(null,vec__110558,(1),null);var max_v = cljs.core.nth.call(null,vec__110558,(2),null);var min_v = cljs.core.nth.call(null,vec__110558,(3),null);var offset_v = cljs.core.nth.call(null,vec__110558,(4),null);var offset_x = cljs.core.nth.call(null,vec__110558,(5),null);var pos_y = cljs.core.nth.call(null,vec__110558,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
var seq__110559 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__110558,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__110557,map__110557__$1,line,color,offset){
return (function() { 
var G__110565__delegate = function (args){return args;
};
var G__110565 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__110565__delegate.call(this,args);};
G__110565.cljs$lang$maxFixedArity = 0;
G__110565.cljs$lang$applyTo = (function (arglist__110566){
var args = cljs.core.seq(arglist__110566);
return G__110565__delegate(args);
});
G__110565.cljs$core$IFn$_invoke$arity$variadic = G__110565__delegate;
return G__110565;
})()
;})(vec__110558,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__110557,map__110557__$1,line,color,offset))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__110560 = null;var count__110561 = (0);var i__110562 = (0);while(true){
if((i__110562 < count__110561))
{var vec__110563 = cljs.core._nth.call(null,chunk__110560,i__110562);var idx = cljs.core.nth.call(null,vec__110563,(0),null);var prev = cljs.core.nth.call(null,vec__110563,(1),null);var curr = cljs.core.nth.call(null,vec__110563,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo(((idx + offset__$1) * offset_x),pos_y.call(null,prev));
ctx.lineTo((((idx + offset__$1) + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__110567 = seq__110559;
var G__110568 = chunk__110560;
var G__110569 = count__110561;
var G__110570 = (i__110562 + (1));
seq__110559 = G__110567;
chunk__110560 = G__110568;
count__110561 = G__110569;
i__110562 = G__110570;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110559);if(temp__4126__auto__)
{var seq__110559__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110559__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110559__$1);{
var G__110571 = cljs.core.chunk_rest.call(null,seq__110559__$1);
var G__110572 = c__4307__auto__;
var G__110573 = cljs.core.count.call(null,c__4307__auto__);
var G__110574 = (0);
seq__110559 = G__110571;
chunk__110560 = G__110572;
count__110561 = G__110573;
i__110562 = G__110574;
continue;
}
} else
{var vec__110564 = cljs.core.first.call(null,seq__110559__$1);var idx = cljs.core.nth.call(null,vec__110564,(0),null);var prev = cljs.core.nth.call(null,vec__110564,(1),null);var curr = cljs.core.nth.call(null,vec__110564,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo(((idx + offset__$1) * offset_x),pos_y.call(null,prev));
ctx.lineTo((((idx + offset__$1) + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__110575 = cljs.core.next.call(null,seq__110559__$1);
var G__110576 = null;
var G__110577 = (0);
var G__110578 = (0);
seq__110559 = G__110575;
chunk__110560 = G__110576;
count__110561 = G__110577;
i__110562 = G__110578;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110579){var map__110580 = p__110579;var map__110580__$1 = ((cljs.core.seq_QMARK_.call(null,map__110580))?cljs.core.apply.call(null,cljs.core.hash_map,map__110580):map__110580);var kline = cljs.core.get.call(null,map__110580__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110581){var map__110582 = p__110581;var map__110582__$1 = ((cljs.core.seq_QMARK_.call(null,map__110582))?cljs.core.apply.call(null,cljs.core.hash_map,map__110582):map__110582);var kline = cljs.core.get.call(null,map__110582__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110583){var map__110584 = p__110583;var map__110584__$1 = ((cljs.core.seq_QMARK_.call(null,map__110584))?cljs.core.apply.call(null,cljs.core.hash_map,map__110584):map__110584);var kline = cljs.core.get.call(null,map__110584__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__110585,base,ctx){var map__110586 = p__110585;var map__110586__$1 = ((cljs.core.seq_QMARK_.call(null,map__110586))?cljs.core.apply.call(null,cljs.core.hash_map,map__110586):map__110586);var kline = cljs.core.get.call(null,map__110586__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__110586__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__110587 = base;var w = cljs.core.nth.call(null,vec__110587,(0),null);var h = cljs.core.nth.call(null,vec__110587,(1),null);var max_v = cljs.core.nth.call(null,vec__110587,(2),null);var min_v = cljs.core.nth.call(null,vec__110587,(3),null);var offset_v = cljs.core.nth.call(null,vec__110587,(4),null);var offset_x = cljs.core.nth.call(null,vec__110587,(5),null);var pos_y = cljs.core.nth.call(null,vec__110587,(6),null);(ctx["fillStyle"] = "black");
var seq__110588 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__110587,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110586,map__110586__$1,kline,info){
return (function() { 
var G__110596__delegate = function (args){return args;
};
var G__110596 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__110596__delegate.call(this,args);};
G__110596.cljs$lang$maxFixedArity = 0;
G__110596.cljs$lang$applyTo = (function (arglist__110597){
var args = cljs.core.seq(arglist__110597);
return G__110596__delegate(args);
});
G__110596.cljs$core$IFn$_invoke$arity$variadic = G__110596__delegate;
return G__110596;
})()
;})(vec__110587,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110586,map__110586__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__110589 = null;var count__110590 = (0);var i__110591 = (0);while(true){
if((i__110591 < count__110590))
{var vec__110592 = cljs.core._nth.call(null,chunk__110589,i__110591);var idx = cljs.core.nth.call(null,vec__110592,(0),null);var vec__110593 = cljs.core.nth.call(null,vec__110592,(1),null);var date = cljs.core.nth.call(null,vec__110593,(0),null);var open = cljs.core.nth.call(null,vec__110593,(1),null);var high = cljs.core.nth.call(null,vec__110593,(2),null);var low = cljs.core.nth.call(null,vec__110593,(3),null);var close = cljs.core.nth.call(null,vec__110593,(4),null);var volume = cljs.core.nth.call(null,vec__110593,(5),null);var info__$1 = cljs.core.nth.call(null,vec__110592,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__110598 = seq__110588;
var G__110599 = chunk__110589;
var G__110600 = count__110590;
var G__110601 = (i__110591 + (1));
seq__110588 = G__110598;
chunk__110589 = G__110599;
count__110590 = G__110600;
i__110591 = G__110601;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110588);if(temp__4126__auto__)
{var seq__110588__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110588__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110588__$1);{
var G__110602 = cljs.core.chunk_rest.call(null,seq__110588__$1);
var G__110603 = c__4307__auto__;
var G__110604 = cljs.core.count.call(null,c__4307__auto__);
var G__110605 = (0);
seq__110588 = G__110602;
chunk__110589 = G__110603;
count__110590 = G__110604;
i__110591 = G__110605;
continue;
}
} else
{var vec__110594 = cljs.core.first.call(null,seq__110588__$1);var idx = cljs.core.nth.call(null,vec__110594,(0),null);var vec__110595 = cljs.core.nth.call(null,vec__110594,(1),null);var date = cljs.core.nth.call(null,vec__110595,(0),null);var open = cljs.core.nth.call(null,vec__110595,(1),null);var high = cljs.core.nth.call(null,vec__110595,(2),null);var low = cljs.core.nth.call(null,vec__110595,(3),null);var close = cljs.core.nth.call(null,vec__110595,(4),null);var volume = cljs.core.nth.call(null,vec__110595,(5),null);var info__$1 = cljs.core.nth.call(null,vec__110594,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__110606 = cljs.core.next.call(null,seq__110588__$1);
var G__110607 = null;
var G__110608 = (0);
var G__110609 = (0);
seq__110588 = G__110606;
chunk__110589 = G__110607;
count__110590 = G__110608;
i__110591 = G__110609;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__110610){var map__110611 = p__110610;var map__110611__$1 = ((cljs.core.seq_QMARK_.call(null,map__110611))?cljs.core.apply.call(null,cljs.core.hash_map,map__110611):map__110611);var cz = cljs.core.get.call(null,map__110611__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__110612){var map__110613 = p__110612;var map__110613__$1 = ((cljs.core.seq_QMARK_.call(null,map__110613))?cljs.core.apply.call(null,cljs.core.hash_map,map__110613):map__110613);var cz = cljs.core.get.call(null,map__110613__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__110614,base,ctx){var map__110615 = p__110614;var map__110615__$1 = ((cljs.core.seq_QMARK_.call(null,map__110615))?cljs.core.apply.call(null,cljs.core.hash_map,map__110615):map__110615);var cz = cljs.core.get.call(null,map__110615__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__110615__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__110615__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__110616 = base;var w = cljs.core.nth.call(null,vec__110616,(0),null);var h = cljs.core.nth.call(null,vec__110616,(1),null);var max_v = cljs.core.nth.call(null,vec__110616,(2),null);var min_v = cljs.core.nth.call(null,vec__110616,(3),null);var offset_v = cljs.core.nth.call(null,vec__110616,(4),null);var offset_x = cljs.core.nth.call(null,vec__110616,(5),null);var pos_y = cljs.core.nth.call(null,vec__110616,(6),null);var proj_x = ((function (vec__110616,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110615,map__110615__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__110616,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__110615,map__110615__$1,cz,vz,color))
;var proj_y = ((function (vec__110616,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__110615,map__110615__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__110616,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__110615,map__110615__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__110617 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__110616,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__110615,map__110615__$1,cz,vz,color){
return (function() { 
var G__110623__delegate = function (args){return args;
};
var G__110623 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__110623__delegate.call(this,args);};
G__110623.cljs$lang$maxFixedArity = 0;
G__110623.cljs$lang$applyTo = (function (arglist__110624){
var args = cljs.core.seq(arglist__110624);
return G__110623__delegate(args);
});
G__110623.cljs$core$IFn$_invoke$arity$variadic = G__110623__delegate;
return G__110623;
})()
;})(vec__110616,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__110615,map__110615__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__110618 = null;var count__110619 = (0);var i__110620 = (0);while(true){
if((i__110620 < count__110619))
{var vec__110621 = cljs.core._nth.call(null,chunk__110618,i__110620);var idx = cljs.core.nth.call(null,vec__110621,(0),null);var pc = cljs.core.nth.call(null,vec__110621,(1),null);var cc = cljs.core.nth.call(null,vec__110621,(2),null);var pv = cljs.core.nth.call(null,vec__110621,(3),null);var cv = cljs.core.nth.call(null,vec__110621,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__110625 = seq__110617;
var G__110626 = chunk__110618;
var G__110627 = count__110619;
var G__110628 = (i__110620 + (1));
seq__110617 = G__110625;
chunk__110618 = G__110626;
count__110619 = G__110627;
i__110620 = G__110628;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__110617);if(temp__4126__auto__)
{var seq__110617__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__110617__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__110617__$1);{
var G__110629 = cljs.core.chunk_rest.call(null,seq__110617__$1);
var G__110630 = c__4307__auto__;
var G__110631 = cljs.core.count.call(null,c__4307__auto__);
var G__110632 = (0);
seq__110617 = G__110629;
chunk__110618 = G__110630;
count__110619 = G__110631;
i__110620 = G__110632;
continue;
}
} else
{var vec__110622 = cljs.core.first.call(null,seq__110617__$1);var idx = cljs.core.nth.call(null,vec__110622,(0),null);var pc = cljs.core.nth.call(null,vec__110622,(1),null);var cc = cljs.core.nth.call(null,vec__110622,(2),null);var pv = cljs.core.nth.call(null,vec__110622,(3),null);var cv = cljs.core.nth.call(null,vec__110622,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__110633 = cljs.core.next.call(null,seq__110617__$1);
var G__110634 = null;
var G__110635 = (0);
var G__110636 = (0);
seq__110617 = G__110633;
chunk__110618 = G__110634;
count__110619 = G__110635;
i__110620 = G__110636;
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
