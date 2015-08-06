// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21636){var map__21637 = p__21636;var map__21637__$1 = ((cljs.core.seq_QMARK_.call(null,map__21637))?cljs.core.apply.call(null,cljs.core.hash_map,map__21637):map__21637);var t = cljs.core.get.call(null,map__21637__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21638){var map__21639 = p__21638;var map__21639__$1 = ((cljs.core.seq_QMARK_.call(null,map__21639))?cljs.core.apply.call(null,cljs.core.hash_map,map__21639):map__21639);var t = cljs.core.get.call(null,map__21639__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21640){var map__21641 = p__21640;var map__21641__$1 = ((cljs.core.seq_QMARK_.call(null,map__21641))?cljs.core.apply.call(null,cljs.core.hash_map,map__21641):map__21641);var t = cljs.core.get.call(null,map__21641__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__21642,base,ctx){var map__21643 = p__21642;var map__21643__$1 = ((cljs.core.seq_QMARK_.call(null,map__21643))?cljs.core.apply.call(null,cljs.core.hash_map,map__21643):map__21643);var t = cljs.core.get.call(null,map__21643__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__21644,w,h,ctx){var map__21650 = p__21644;var map__21650__$1 = ((cljs.core.seq_QMARK_.call(null,map__21650))?cljs.core.apply.call(null,cljs.core.hash_map,map__21650):map__21650);var info = map__21650__$1;var drawers = cljs.core.get.call(null,map__21650__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__21651 = cljs.core.seq.call(null,drawers);var chunk__21652 = null;var count__21653 = (0);var i__21654 = (0);while(true){
if((i__21654 < count__21653))
{var drawer = cljs.core._nth.call(null,chunk__21652,i__21654);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__21655 = seq__21651;
var G__21656 = chunk__21652;
var G__21657 = count__21653;
var G__21658 = (i__21654 + (1));
seq__21651 = G__21655;
chunk__21652 = G__21656;
count__21653 = G__21657;
i__21654 = G__21658;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21651);if(temp__4126__auto__)
{var seq__21651__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21651__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21651__$1);{
var G__21659 = cljs.core.chunk_rest.call(null,seq__21651__$1);
var G__21660 = c__4307__auto__;
var G__21661 = cljs.core.count.call(null,c__4307__auto__);
var G__21662 = (0);
seq__21651 = G__21659;
chunk__21652 = G__21660;
count__21653 = G__21661;
i__21654 = G__21662;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__21651__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__21663 = cljs.core.next.call(null,seq__21651__$1);
var G__21664 = null;
var G__21665 = (0);
var G__21666 = (0);
seq__21651 = G__21663;
chunk__21652 = G__21664;
count__21653 = G__21665;
i__21654 = G__21666;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21667){var map__21668 = p__21667;var map__21668__$1 = ((cljs.core.seq_QMARK_.call(null,map__21668))?cljs.core.apply.call(null,cljs.core.hash_map,map__21668):map__21668);var line = cljs.core.get.call(null,map__21668__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21669){var map__21670 = p__21669;var map__21670__$1 = ((cljs.core.seq_QMARK_.call(null,map__21670))?cljs.core.apply.call(null,cljs.core.hash_map,map__21670):map__21670);var line = cljs.core.get.call(null,map__21670__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21671){var map__21672 = p__21671;var map__21672__$1 = ((cljs.core.seq_QMARK_.call(null,map__21672))?cljs.core.apply.call(null,cljs.core.hash_map,map__21672):map__21672);var line = cljs.core.get.call(null,map__21672__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__21673,base,ctx){var map__21674 = p__21673;var map__21674__$1 = ((cljs.core.seq_QMARK_.call(null,map__21674))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);var line = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__21675 = base;var w = cljs.core.nth.call(null,vec__21675,(0),null);var h = cljs.core.nth.call(null,vec__21675,(1),null);var max_v = cljs.core.nth.call(null,vec__21675,(2),null);var min_v = cljs.core.nth.call(null,vec__21675,(3),null);var offset_v = cljs.core.nth.call(null,vec__21675,(4),null);var offset_x = cljs.core.nth.call(null,vec__21675,(5),null);var pos_y = cljs.core.nth.call(null,vec__21675,(6),null);(ctx["strokeStyle"] = color);
var seq__21676 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__21675,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21674,map__21674__$1,line,color){
return (function() { 
var G__21682__delegate = function (args){return args;
};
var G__21682 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21682__delegate.call(this,args);};
G__21682.cljs$lang$maxFixedArity = 0;
G__21682.cljs$lang$applyTo = (function (arglist__21683){
var args = cljs.core.seq(arglist__21683);
return G__21682__delegate(args);
});
G__21682.cljs$core$IFn$_invoke$arity$variadic = G__21682__delegate;
return G__21682;
})()
;})(vec__21675,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21674,map__21674__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__21677 = null;var count__21678 = (0);var i__21679 = (0);while(true){
if((i__21679 < count__21678))
{var vec__21680 = cljs.core._nth.call(null,chunk__21677,i__21679);var idx = cljs.core.nth.call(null,vec__21680,(0),null);var prev = cljs.core.nth.call(null,vec__21680,(1),null);var curr = cljs.core.nth.call(null,vec__21680,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__21684 = seq__21676;
var G__21685 = chunk__21677;
var G__21686 = count__21678;
var G__21687 = (i__21679 + (1));
seq__21676 = G__21684;
chunk__21677 = G__21685;
count__21678 = G__21686;
i__21679 = G__21687;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21676);if(temp__4126__auto__)
{var seq__21676__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21676__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21676__$1);{
var G__21688 = cljs.core.chunk_rest.call(null,seq__21676__$1);
var G__21689 = c__4307__auto__;
var G__21690 = cljs.core.count.call(null,c__4307__auto__);
var G__21691 = (0);
seq__21676 = G__21688;
chunk__21677 = G__21689;
count__21678 = G__21690;
i__21679 = G__21691;
continue;
}
} else
{var vec__21681 = cljs.core.first.call(null,seq__21676__$1);var idx = cljs.core.nth.call(null,vec__21681,(0),null);var prev = cljs.core.nth.call(null,vec__21681,(1),null);var curr = cljs.core.nth.call(null,vec__21681,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__21692 = cljs.core.next.call(null,seq__21676__$1);
var G__21693 = null;
var G__21694 = (0);
var G__21695 = (0);
seq__21676 = G__21692;
chunk__21677 = G__21693;
count__21678 = G__21694;
i__21679 = G__21695;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21696){var map__21697 = p__21696;var map__21697__$1 = ((cljs.core.seq_QMARK_.call(null,map__21697))?cljs.core.apply.call(null,cljs.core.hash_map,map__21697):map__21697);var kline = cljs.core.get.call(null,map__21697__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21698){var map__21699 = p__21698;var map__21699__$1 = ((cljs.core.seq_QMARK_.call(null,map__21699))?cljs.core.apply.call(null,cljs.core.hash_map,map__21699):map__21699);var kline = cljs.core.get.call(null,map__21699__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21700){var map__21701 = p__21700;var map__21701__$1 = ((cljs.core.seq_QMARK_.call(null,map__21701))?cljs.core.apply.call(null,cljs.core.hash_map,map__21701):map__21701);var kline = cljs.core.get.call(null,map__21701__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__21702,base,ctx){var map__21703 = p__21702;var map__21703__$1 = ((cljs.core.seq_QMARK_.call(null,map__21703))?cljs.core.apply.call(null,cljs.core.hash_map,map__21703):map__21703);var kline = cljs.core.get.call(null,map__21703__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__21703__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__21704 = base;var w = cljs.core.nth.call(null,vec__21704,(0),null);var h = cljs.core.nth.call(null,vec__21704,(1),null);var max_v = cljs.core.nth.call(null,vec__21704,(2),null);var min_v = cljs.core.nth.call(null,vec__21704,(3),null);var offset_v = cljs.core.nth.call(null,vec__21704,(4),null);var offset_x = cljs.core.nth.call(null,vec__21704,(5),null);var pos_y = cljs.core.nth.call(null,vec__21704,(6),null);(ctx["fillStyle"] = "black");
var seq__21705 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__21704,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21703,map__21703__$1,kline,info){
return (function() { 
var G__21713__delegate = function (args){return args;
};
var G__21713 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21713__delegate.call(this,args);};
G__21713.cljs$lang$maxFixedArity = 0;
G__21713.cljs$lang$applyTo = (function (arglist__21714){
var args = cljs.core.seq(arglist__21714);
return G__21713__delegate(args);
});
G__21713.cljs$core$IFn$_invoke$arity$variadic = G__21713__delegate;
return G__21713;
})()
;})(vec__21704,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21703,map__21703__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__21706 = null;var count__21707 = (0);var i__21708 = (0);while(true){
if((i__21708 < count__21707))
{var vec__21709 = cljs.core._nth.call(null,chunk__21706,i__21708);var idx = cljs.core.nth.call(null,vec__21709,(0),null);var vec__21710 = cljs.core.nth.call(null,vec__21709,(1),null);var date = cljs.core.nth.call(null,vec__21710,(0),null);var open = cljs.core.nth.call(null,vec__21710,(1),null);var high = cljs.core.nth.call(null,vec__21710,(2),null);var low = cljs.core.nth.call(null,vec__21710,(3),null);var close = cljs.core.nth.call(null,vec__21710,(4),null);var volume = cljs.core.nth.call(null,vec__21710,(5),null);var info__$1 = cljs.core.nth.call(null,vec__21709,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
ctx.fillText(info__$1,(idx * offset_x),h);
{
var G__21715 = seq__21705;
var G__21716 = chunk__21706;
var G__21717 = count__21707;
var G__21718 = (i__21708 + (1));
seq__21705 = G__21715;
chunk__21706 = G__21716;
count__21707 = G__21717;
i__21708 = G__21718;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21705);if(temp__4126__auto__)
{var seq__21705__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21705__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21705__$1);{
var G__21719 = cljs.core.chunk_rest.call(null,seq__21705__$1);
var G__21720 = c__4307__auto__;
var G__21721 = cljs.core.count.call(null,c__4307__auto__);
var G__21722 = (0);
seq__21705 = G__21719;
chunk__21706 = G__21720;
count__21707 = G__21721;
i__21708 = G__21722;
continue;
}
} else
{var vec__21711 = cljs.core.first.call(null,seq__21705__$1);var idx = cljs.core.nth.call(null,vec__21711,(0),null);var vec__21712 = cljs.core.nth.call(null,vec__21711,(1),null);var date = cljs.core.nth.call(null,vec__21712,(0),null);var open = cljs.core.nth.call(null,vec__21712,(1),null);var high = cljs.core.nth.call(null,vec__21712,(2),null);var low = cljs.core.nth.call(null,vec__21712,(3),null);var close = cljs.core.nth.call(null,vec__21712,(4),null);var volume = cljs.core.nth.call(null,vec__21712,(5),null);var info__$1 = cljs.core.nth.call(null,vec__21711,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
ctx.fillText(info__$1,(idx * offset_x),h);
{
var G__21723 = cljs.core.next.call(null,seq__21705__$1);
var G__21724 = null;
var G__21725 = (0);
var G__21726 = (0);
seq__21705 = G__21723;
chunk__21706 = G__21724;
count__21707 = G__21725;
i__21708 = G__21726;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__21727){var map__21728 = p__21727;var map__21728__$1 = ((cljs.core.seq_QMARK_.call(null,map__21728))?cljs.core.apply.call(null,cljs.core.hash_map,map__21728):map__21728);var cz = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__21729){var map__21730 = p__21729;var map__21730__$1 = ((cljs.core.seq_QMARK_.call(null,map__21730))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730):map__21730);var cz = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__21731,base,ctx){var map__21732 = p__21731;var map__21732__$1 = ((cljs.core.seq_QMARK_.call(null,map__21732))?cljs.core.apply.call(null,cljs.core.hash_map,map__21732):map__21732);var cz = cljs.core.get.call(null,map__21732__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__21732__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__21733 = base;var w = cljs.core.nth.call(null,vec__21733,(0),null);var h = cljs.core.nth.call(null,vec__21733,(1),null);var max_v = cljs.core.nth.call(null,vec__21733,(2),null);var min_v = cljs.core.nth.call(null,vec__21733,(3),null);var offset_v = cljs.core.nth.call(null,vec__21733,(4),null);var offset_x = cljs.core.nth.call(null,vec__21733,(5),null);var pos_y = cljs.core.nth.call(null,vec__21733,(6),null);var proj_x = ((function (vec__21733,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21732,map__21732__$1,cz,vz){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(vec__21733,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__21732,map__21732__$1,cz,vz))
;var proj_y = ((function (vec__21733,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__21732,map__21732__$1,cz,vz){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(vec__21733,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__21732,map__21732__$1,cz,vz))
;(ctx["fillStyle"] = "red");
(ctx["strokeStyle"] = "red");
var seq__21734 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__21733,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__21732,map__21732__$1,cz,vz){
return (function() { 
var G__21740__delegate = function (args){return args;
};
var G__21740 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21740__delegate.call(this,args);};
G__21740.cljs$lang$maxFixedArity = 0;
G__21740.cljs$lang$applyTo = (function (arglist__21741){
var args = cljs.core.seq(arglist__21741);
return G__21740__delegate(args);
});
G__21740.cljs$core$IFn$_invoke$arity$variadic = G__21740__delegate;
return G__21740;
})()
;})(vec__21733,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__21732,map__21732__$1,cz,vz))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__21735 = null;var count__21736 = (0);var i__21737 = (0);while(true){
if((i__21737 < count__21736))
{var vec__21738 = cljs.core._nth.call(null,chunk__21735,i__21737);var idx = cljs.core.nth.call(null,vec__21738,(0),null);var pc = cljs.core.nth.call(null,vec__21738,(1),null);var cc = cljs.core.nth.call(null,vec__21738,(2),null);var pv = cljs.core.nth.call(null,vec__21738,(3),null);var cv = cljs.core.nth.call(null,vec__21738,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__21742 = seq__21734;
var G__21743 = chunk__21735;
var G__21744 = count__21736;
var G__21745 = (i__21737 + (1));
seq__21734 = G__21742;
chunk__21735 = G__21743;
count__21736 = G__21744;
i__21737 = G__21745;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21734);if(temp__4126__auto__)
{var seq__21734__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21734__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__21734__$1);{
var G__21746 = cljs.core.chunk_rest.call(null,seq__21734__$1);
var G__21747 = c__4307__auto__;
var G__21748 = cljs.core.count.call(null,c__4307__auto__);
var G__21749 = (0);
seq__21734 = G__21746;
chunk__21735 = G__21747;
count__21736 = G__21748;
i__21737 = G__21749;
continue;
}
} else
{var vec__21739 = cljs.core.first.call(null,seq__21734__$1);var idx = cljs.core.nth.call(null,vec__21739,(0),null);var pc = cljs.core.nth.call(null,vec__21739,(1),null);var cc = cljs.core.nth.call(null,vec__21739,(2),null);var pv = cljs.core.nth.call(null,vec__21739,(3),null);var cv = cljs.core.nth.call(null,vec__21739,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__21750 = cljs.core.next.call(null,seq__21734__$1);
var G__21751 = null;
var G__21752 = (0);
var G__21753 = (0);
seq__21734 = G__21750;
chunk__21735 = G__21751;
count__21736 = G__21752;
i__21737 = G__21753;
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
