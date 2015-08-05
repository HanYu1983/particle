// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__52561){var map__52562 = p__52561;var map__52562__$1 = ((cljs.core.seq_QMARK_.call(null,map__52562))?cljs.core.apply.call(null,cljs.core.hash_map,map__52562):map__52562);var t = cljs.core.get.call(null,map__52562__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__52563){var map__52564 = p__52563;var map__52564__$1 = ((cljs.core.seq_QMARK_.call(null,map__52564))?cljs.core.apply.call(null,cljs.core.hash_map,map__52564):map__52564);var t = cljs.core.get.call(null,map__52564__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__52565){var map__52566 = p__52565;var map__52566__$1 = ((cljs.core.seq_QMARK_.call(null,map__52566))?cljs.core.apply.call(null,cljs.core.hash_map,map__52566):map__52566);var t = cljs.core.get.call(null,map__52566__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__52567,base,ctx){var map__52568 = p__52567;var map__52568__$1 = ((cljs.core.seq_QMARK_.call(null,map__52568))?cljs.core.apply.call(null,cljs.core.hash_map,map__52568):map__52568);var t = cljs.core.get.call(null,map__52568__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__52569,w,h,ctx){var map__52575 = p__52569;var map__52575__$1 = ((cljs.core.seq_QMARK_.call(null,map__52575))?cljs.core.apply.call(null,cljs.core.hash_map,map__52575):map__52575);var info = map__52575__$1;var drawers = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__52576 = cljs.core.seq.call(null,drawers);var chunk__52577 = null;var count__52578 = (0);var i__52579 = (0);while(true){
if((i__52579 < count__52578))
{var drawer = cljs.core._nth.call(null,chunk__52577,i__52579);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__52580 = seq__52576;
var G__52581 = chunk__52577;
var G__52582 = count__52578;
var G__52583 = (i__52579 + (1));
seq__52576 = G__52580;
chunk__52577 = G__52581;
count__52578 = G__52582;
i__52579 = G__52583;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52576);if(temp__4126__auto__)
{var seq__52576__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52576__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__52576__$1);{
var G__52584 = cljs.core.chunk_rest.call(null,seq__52576__$1);
var G__52585 = c__4307__auto__;
var G__52586 = cljs.core.count.call(null,c__4307__auto__);
var G__52587 = (0);
seq__52576 = G__52584;
chunk__52577 = G__52585;
count__52578 = G__52586;
i__52579 = G__52587;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__52576__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__52588 = cljs.core.next.call(null,seq__52576__$1);
var G__52589 = null;
var G__52590 = (0);
var G__52591 = (0);
seq__52576 = G__52588;
chunk__52577 = G__52589;
count__52578 = G__52590;
i__52579 = G__52591;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__52592){var map__52593 = p__52592;var map__52593__$1 = ((cljs.core.seq_QMARK_.call(null,map__52593))?cljs.core.apply.call(null,cljs.core.hash_map,map__52593):map__52593);var line = cljs.core.get.call(null,map__52593__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__52594){var map__52595 = p__52594;var map__52595__$1 = ((cljs.core.seq_QMARK_.call(null,map__52595))?cljs.core.apply.call(null,cljs.core.hash_map,map__52595):map__52595);var line = cljs.core.get.call(null,map__52595__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__52596){var map__52597 = p__52596;var map__52597__$1 = ((cljs.core.seq_QMARK_.call(null,map__52597))?cljs.core.apply.call(null,cljs.core.hash_map,map__52597):map__52597);var line = cljs.core.get.call(null,map__52597__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__52598,base,ctx){var map__52599 = p__52598;var map__52599__$1 = ((cljs.core.seq_QMARK_.call(null,map__52599))?cljs.core.apply.call(null,cljs.core.hash_map,map__52599):map__52599);var line = cljs.core.get.call(null,map__52599__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__52599__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__52600 = base;var w = cljs.core.nth.call(null,vec__52600,(0),null);var h = cljs.core.nth.call(null,vec__52600,(1),null);var max_v = cljs.core.nth.call(null,vec__52600,(2),null);var min_v = cljs.core.nth.call(null,vec__52600,(3),null);var offset_v = cljs.core.nth.call(null,vec__52600,(4),null);var offset_x = cljs.core.nth.call(null,vec__52600,(5),null);var pos_y = cljs.core.nth.call(null,vec__52600,(6),null);(ctx["strokeStyle"] = color);
var seq__52601 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__52600,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__52599,map__52599__$1,line,color){
return (function() { 
var G__52607__delegate = function (args){return args;
};
var G__52607 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__52607__delegate.call(this,args);};
G__52607.cljs$lang$maxFixedArity = 0;
G__52607.cljs$lang$applyTo = (function (arglist__52608){
var args = cljs.core.seq(arglist__52608);
return G__52607__delegate(args);
});
G__52607.cljs$core$IFn$_invoke$arity$variadic = G__52607__delegate;
return G__52607;
})()
;})(vec__52600,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__52599,map__52599__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__52602 = null;var count__52603 = (0);var i__52604 = (0);while(true){
if((i__52604 < count__52603))
{var vec__52605 = cljs.core._nth.call(null,chunk__52602,i__52604);var idx = cljs.core.nth.call(null,vec__52605,(0),null);var prev = cljs.core.nth.call(null,vec__52605,(1),null);var curr = cljs.core.nth.call(null,vec__52605,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__52609 = seq__52601;
var G__52610 = chunk__52602;
var G__52611 = count__52603;
var G__52612 = (i__52604 + (1));
seq__52601 = G__52609;
chunk__52602 = G__52610;
count__52603 = G__52611;
i__52604 = G__52612;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52601);if(temp__4126__auto__)
{var seq__52601__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52601__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__52601__$1);{
var G__52613 = cljs.core.chunk_rest.call(null,seq__52601__$1);
var G__52614 = c__4307__auto__;
var G__52615 = cljs.core.count.call(null,c__4307__auto__);
var G__52616 = (0);
seq__52601 = G__52613;
chunk__52602 = G__52614;
count__52603 = G__52615;
i__52604 = G__52616;
continue;
}
} else
{var vec__52606 = cljs.core.first.call(null,seq__52601__$1);var idx = cljs.core.nth.call(null,vec__52606,(0),null);var prev = cljs.core.nth.call(null,vec__52606,(1),null);var curr = cljs.core.nth.call(null,vec__52606,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__52617 = cljs.core.next.call(null,seq__52601__$1);
var G__52618 = null;
var G__52619 = (0);
var G__52620 = (0);
seq__52601 = G__52617;
chunk__52602 = G__52618;
count__52603 = G__52619;
i__52604 = G__52620;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__52621){var map__52622 = p__52621;var map__52622__$1 = ((cljs.core.seq_QMARK_.call(null,map__52622))?cljs.core.apply.call(null,cljs.core.hash_map,map__52622):map__52622);var kline = cljs.core.get.call(null,map__52622__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__52623){var map__52624 = p__52623;var map__52624__$1 = ((cljs.core.seq_QMARK_.call(null,map__52624))?cljs.core.apply.call(null,cljs.core.hash_map,map__52624):map__52624);var kline = cljs.core.get.call(null,map__52624__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__52625){var map__52626 = p__52625;var map__52626__$1 = ((cljs.core.seq_QMARK_.call(null,map__52626))?cljs.core.apply.call(null,cljs.core.hash_map,map__52626):map__52626);var kline = cljs.core.get.call(null,map__52626__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__52627,base,ctx){var map__52628 = p__52627;var map__52628__$1 = ((cljs.core.seq_QMARK_.call(null,map__52628))?cljs.core.apply.call(null,cljs.core.hash_map,map__52628):map__52628);var kline = cljs.core.get.call(null,map__52628__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var vec__52629 = base;var w = cljs.core.nth.call(null,vec__52629,(0),null);var h = cljs.core.nth.call(null,vec__52629,(1),null);var max_v = cljs.core.nth.call(null,vec__52629,(2),null);var min_v = cljs.core.nth.call(null,vec__52629,(3),null);var offset_v = cljs.core.nth.call(null,vec__52629,(4),null);var offset_x = cljs.core.nth.call(null,vec__52629,(5),null);var pos_y = cljs.core.nth.call(null,vec__52629,(6),null);var seq__52630 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__52629,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__52628,map__52628__$1,kline){
return (function() { 
var G__52638__delegate = function (args){return args;
};
var G__52638 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__52638__delegate.call(this,args);};
G__52638.cljs$lang$maxFixedArity = 0;
G__52638.cljs$lang$applyTo = (function (arglist__52639){
var args = cljs.core.seq(arglist__52639);
return G__52638__delegate(args);
});
G__52638.cljs$core$IFn$_invoke$arity$variadic = G__52638__delegate;
return G__52638;
})()
;})(vec__52629,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__52628,map__52628__$1,kline))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__52631 = null;var count__52632 = (0);var i__52633 = (0);while(true){
if((i__52633 < count__52632))
{var vec__52634 = cljs.core._nth.call(null,chunk__52631,i__52633);var idx = cljs.core.nth.call(null,vec__52634,(0),null);var vec__52635 = cljs.core.nth.call(null,vec__52634,(1),null);var date = cljs.core.nth.call(null,vec__52635,(0),null);var open = cljs.core.nth.call(null,vec__52635,(1),null);var high = cljs.core.nth.call(null,vec__52635,(2),null);var low = cljs.core.nth.call(null,vec__52635,(3),null);var close = cljs.core.nth.call(null,vec__52635,(4),null);var volume = cljs.core.nth.call(null,vec__52635,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__52640 = seq__52630;
var G__52641 = chunk__52631;
var G__52642 = count__52632;
var G__52643 = (i__52633 + (1));
seq__52630 = G__52640;
chunk__52631 = G__52641;
count__52632 = G__52642;
i__52633 = G__52643;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52630);if(temp__4126__auto__)
{var seq__52630__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52630__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__52630__$1);{
var G__52644 = cljs.core.chunk_rest.call(null,seq__52630__$1);
var G__52645 = c__4307__auto__;
var G__52646 = cljs.core.count.call(null,c__4307__auto__);
var G__52647 = (0);
seq__52630 = G__52644;
chunk__52631 = G__52645;
count__52632 = G__52646;
i__52633 = G__52647;
continue;
}
} else
{var vec__52636 = cljs.core.first.call(null,seq__52630__$1);var idx = cljs.core.nth.call(null,vec__52636,(0),null);var vec__52637 = cljs.core.nth.call(null,vec__52636,(1),null);var date = cljs.core.nth.call(null,vec__52637,(0),null);var open = cljs.core.nth.call(null,vec__52637,(1),null);var high = cljs.core.nth.call(null,vec__52637,(2),null);var low = cljs.core.nth.call(null,vec__52637,(3),null);var close = cljs.core.nth.call(null,vec__52637,(4),null);var volume = cljs.core.nth.call(null,vec__52637,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__52648 = cljs.core.next.call(null,seq__52630__$1);
var G__52649 = null;
var G__52650 = (0);
var G__52651 = (0);
seq__52630 = G__52648;
chunk__52631 = G__52649;
count__52632 = G__52650;
i__52633 = G__52651;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__52652){var map__52653 = p__52652;var map__52653__$1 = ((cljs.core.seq_QMARK_.call(null,map__52653))?cljs.core.apply.call(null,cljs.core.hash_map,map__52653):map__52653);var cz = cljs.core.get.call(null,map__52653__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__52654){var map__52655 = p__52654;var map__52655__$1 = ((cljs.core.seq_QMARK_.call(null,map__52655))?cljs.core.apply.call(null,cljs.core.hash_map,map__52655):map__52655);var cz = cljs.core.get.call(null,map__52655__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__52656,base,ctx){var map__52657 = p__52656;var map__52657__$1 = ((cljs.core.seq_QMARK_.call(null,map__52657))?cljs.core.apply.call(null,cljs.core.hash_map,map__52657):map__52657);var cz = cljs.core.get.call(null,map__52657__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__52657__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__52658 = base;var w = cljs.core.nth.call(null,vec__52658,(0),null);var h = cljs.core.nth.call(null,vec__52658,(1),null);var max_v = cljs.core.nth.call(null,vec__52658,(2),null);var min_v = cljs.core.nth.call(null,vec__52658,(3),null);var offset_v = cljs.core.nth.call(null,vec__52658,(4),null);var offset_x = cljs.core.nth.call(null,vec__52658,(5),null);var pos_y = cljs.core.nth.call(null,vec__52658,(6),null);var proj_x = ((function (vec__52658,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__52657,map__52657__$1,cz,vz){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(vec__52658,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__52657,map__52657__$1,cz,vz))
;var proj_y = ((function (vec__52658,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__52657,map__52657__$1,cz,vz){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(vec__52658,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__52657,map__52657__$1,cz,vz))
;(ctx["strokeStyle"] = "red");
var seq__52659 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__52658,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__52657,map__52657__$1,cz,vz){
return (function() { 
var G__52665__delegate = function (args){return args;
};
var G__52665 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__52665__delegate.call(this,args);};
G__52665.cljs$lang$maxFixedArity = 0;
G__52665.cljs$lang$applyTo = (function (arglist__52666){
var args = cljs.core.seq(arglist__52666);
return G__52665__delegate(args);
});
G__52665.cljs$core$IFn$_invoke$arity$variadic = G__52665__delegate;
return G__52665;
})()
;})(vec__52658,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__52657,map__52657__$1,cz,vz))
,cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__52660 = null;var count__52661 = (0);var i__52662 = (0);while(true){
if((i__52662 < count__52661))
{var vec__52663 = cljs.core._nth.call(null,chunk__52660,i__52662);var pc = cljs.core.nth.call(null,vec__52663,(0),null);var cc = cljs.core.nth.call(null,vec__52663,(1),null);var pv = cljs.core.nth.call(null,vec__52663,(2),null);var cv = cljs.core.nth.call(null,vec__52663,(3),null);ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__52667 = seq__52659;
var G__52668 = chunk__52660;
var G__52669 = count__52661;
var G__52670 = (i__52662 + (1));
seq__52659 = G__52667;
chunk__52660 = G__52668;
count__52661 = G__52669;
i__52662 = G__52670;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52659);if(temp__4126__auto__)
{var seq__52659__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52659__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__52659__$1);{
var G__52671 = cljs.core.chunk_rest.call(null,seq__52659__$1);
var G__52672 = c__4307__auto__;
var G__52673 = cljs.core.count.call(null,c__4307__auto__);
var G__52674 = (0);
seq__52659 = G__52671;
chunk__52660 = G__52672;
count__52661 = G__52673;
i__52662 = G__52674;
continue;
}
} else
{var vec__52664 = cljs.core.first.call(null,seq__52659__$1);var pc = cljs.core.nth.call(null,vec__52664,(0),null);var cc = cljs.core.nth.call(null,vec__52664,(1),null);var pv = cljs.core.nth.call(null,vec__52664,(2),null);var cv = cljs.core.nth.call(null,vec__52664,(3),null);ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__52675 = cljs.core.next.call(null,seq__52659__$1);
var G__52676 = null;
var G__52677 = (0);
var G__52678 = (0);
seq__52659 = G__52675;
chunk__52660 = G__52676;
count__52661 = G__52677;
i__52662 = G__52678;
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
