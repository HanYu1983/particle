// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10782){var map__10783 = p__10782;var map__10783__$1 = ((cljs.core.seq_QMARK_.call(null,map__10783))?cljs.core.apply.call(null,cljs.core.hash_map,map__10783):map__10783);var t = cljs.core.get.call(null,map__10783__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10784){var map__10785 = p__10784;var map__10785__$1 = ((cljs.core.seq_QMARK_.call(null,map__10785))?cljs.core.apply.call(null,cljs.core.hash_map,map__10785):map__10785);var t = cljs.core.get.call(null,map__10785__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10786){var map__10787 = p__10786;var map__10787__$1 = ((cljs.core.seq_QMARK_.call(null,map__10787))?cljs.core.apply.call(null,cljs.core.hash_map,map__10787):map__10787);var t = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__10788,base,ctx){var map__10789 = p__10788;var map__10789__$1 = ((cljs.core.seq_QMARK_.call(null,map__10789))?cljs.core.apply.call(null,cljs.core.hash_map,map__10789):map__10789);var t = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__10790,w,h,ctx){var map__10796 = p__10790;var map__10796__$1 = ((cljs.core.seq_QMARK_.call(null,map__10796))?cljs.core.apply.call(null,cljs.core.hash_map,map__10796):map__10796);var info = map__10796__$1;var drawers = cljs.core.get.call(null,map__10796__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__10797 = cljs.core.seq.call(null,drawers);var chunk__10798 = null;var count__10799 = (0);var i__10800 = (0);while(true){
if((i__10800 < count__10799))
{var drawer = cljs.core._nth.call(null,chunk__10798,i__10800);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__10801 = seq__10797;
var G__10802 = chunk__10798;
var G__10803 = count__10799;
var G__10804 = (i__10800 + (1));
seq__10797 = G__10801;
chunk__10798 = G__10802;
count__10799 = G__10803;
i__10800 = G__10804;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10797);if(temp__4126__auto__)
{var seq__10797__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10797__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10797__$1);{
var G__10805 = cljs.core.chunk_rest.call(null,seq__10797__$1);
var G__10806 = c__4307__auto__;
var G__10807 = cljs.core.count.call(null,c__4307__auto__);
var G__10808 = (0);
seq__10797 = G__10805;
chunk__10798 = G__10806;
count__10799 = G__10807;
i__10800 = G__10808;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__10797__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__10809 = cljs.core.next.call(null,seq__10797__$1);
var G__10810 = null;
var G__10811 = (0);
var G__10812 = (0);
seq__10797 = G__10809;
chunk__10798 = G__10810;
count__10799 = G__10811;
i__10800 = G__10812;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10813){var map__10814 = p__10813;var map__10814__$1 = ((cljs.core.seq_QMARK_.call(null,map__10814))?cljs.core.apply.call(null,cljs.core.hash_map,map__10814):map__10814);var line = cljs.core.get.call(null,map__10814__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10815){var map__10816 = p__10815;var map__10816__$1 = ((cljs.core.seq_QMARK_.call(null,map__10816))?cljs.core.apply.call(null,cljs.core.hash_map,map__10816):map__10816);var line = cljs.core.get.call(null,map__10816__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10817){var map__10818 = p__10817;var map__10818__$1 = ((cljs.core.seq_QMARK_.call(null,map__10818))?cljs.core.apply.call(null,cljs.core.hash_map,map__10818):map__10818);var line = cljs.core.get.call(null,map__10818__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10819,base,ctx){var map__10820 = p__10819;var map__10820__$1 = ((cljs.core.seq_QMARK_.call(null,map__10820))?cljs.core.apply.call(null,cljs.core.hash_map,map__10820):map__10820);var line = cljs.core.get.call(null,map__10820__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__10820__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__10821 = base;var w = cljs.core.nth.call(null,vec__10821,(0),null);var h = cljs.core.nth.call(null,vec__10821,(1),null);var max_v = cljs.core.nth.call(null,vec__10821,(2),null);var min_v = cljs.core.nth.call(null,vec__10821,(3),null);var offset_v = cljs.core.nth.call(null,vec__10821,(4),null);var offset_x = cljs.core.nth.call(null,vec__10821,(5),null);var pos_y = cljs.core.nth.call(null,vec__10821,(6),null);(ctx["strokeStyle"] = color);
var seq__10822 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10821,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10820,map__10820__$1,line,color){
return (function() { 
var G__10828__delegate = function (args){return args;
};
var G__10828 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10828__delegate.call(this,args);};
G__10828.cljs$lang$maxFixedArity = 0;
G__10828.cljs$lang$applyTo = (function (arglist__10829){
var args = cljs.core.seq(arglist__10829);
return G__10828__delegate(args);
});
G__10828.cljs$core$IFn$_invoke$arity$variadic = G__10828__delegate;
return G__10828;
})()
;})(vec__10821,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10820,map__10820__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__10823 = null;var count__10824 = (0);var i__10825 = (0);while(true){
if((i__10825 < count__10824))
{var vec__10826 = cljs.core._nth.call(null,chunk__10823,i__10825);var idx = cljs.core.nth.call(null,vec__10826,(0),null);var prev = cljs.core.nth.call(null,vec__10826,(1),null);var curr = cljs.core.nth.call(null,vec__10826,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__10830 = seq__10822;
var G__10831 = chunk__10823;
var G__10832 = count__10824;
var G__10833 = (i__10825 + (1));
seq__10822 = G__10830;
chunk__10823 = G__10831;
count__10824 = G__10832;
i__10825 = G__10833;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10822);if(temp__4126__auto__)
{var seq__10822__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10822__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10822__$1);{
var G__10834 = cljs.core.chunk_rest.call(null,seq__10822__$1);
var G__10835 = c__4307__auto__;
var G__10836 = cljs.core.count.call(null,c__4307__auto__);
var G__10837 = (0);
seq__10822 = G__10834;
chunk__10823 = G__10835;
count__10824 = G__10836;
i__10825 = G__10837;
continue;
}
} else
{var vec__10827 = cljs.core.first.call(null,seq__10822__$1);var idx = cljs.core.nth.call(null,vec__10827,(0),null);var prev = cljs.core.nth.call(null,vec__10827,(1),null);var curr = cljs.core.nth.call(null,vec__10827,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__10838 = cljs.core.next.call(null,seq__10822__$1);
var G__10839 = null;
var G__10840 = (0);
var G__10841 = (0);
seq__10822 = G__10838;
chunk__10823 = G__10839;
count__10824 = G__10840;
i__10825 = G__10841;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10842){var map__10843 = p__10842;var map__10843__$1 = ((cljs.core.seq_QMARK_.call(null,map__10843))?cljs.core.apply.call(null,cljs.core.hash_map,map__10843):map__10843);var kline = cljs.core.get.call(null,map__10843__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10844){var map__10845 = p__10844;var map__10845__$1 = ((cljs.core.seq_QMARK_.call(null,map__10845))?cljs.core.apply.call(null,cljs.core.hash_map,map__10845):map__10845);var kline = cljs.core.get.call(null,map__10845__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10846){var map__10847 = p__10846;var map__10847__$1 = ((cljs.core.seq_QMARK_.call(null,map__10847))?cljs.core.apply.call(null,cljs.core.hash_map,map__10847):map__10847);var kline = cljs.core.get.call(null,map__10847__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10848,base,ctx){var map__10849 = p__10848;var map__10849__$1 = ((cljs.core.seq_QMARK_.call(null,map__10849))?cljs.core.apply.call(null,cljs.core.hash_map,map__10849):map__10849);var kline = cljs.core.get.call(null,map__10849__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__10849__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__10850 = base;var w = cljs.core.nth.call(null,vec__10850,(0),null);var h = cljs.core.nth.call(null,vec__10850,(1),null);var max_v = cljs.core.nth.call(null,vec__10850,(2),null);var min_v = cljs.core.nth.call(null,vec__10850,(3),null);var offset_v = cljs.core.nth.call(null,vec__10850,(4),null);var offset_x = cljs.core.nth.call(null,vec__10850,(5),null);var pos_y = cljs.core.nth.call(null,vec__10850,(6),null);(ctx["fillStyle"] = "black");
var seq__10851 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10850,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10849,map__10849__$1,kline,info){
return (function() { 
var G__10859__delegate = function (args){return args;
};
var G__10859 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10859__delegate.call(this,args);};
G__10859.cljs$lang$maxFixedArity = 0;
G__10859.cljs$lang$applyTo = (function (arglist__10860){
var args = cljs.core.seq(arglist__10860);
return G__10859__delegate(args);
});
G__10859.cljs$core$IFn$_invoke$arity$variadic = G__10859__delegate;
return G__10859;
})()
;})(vec__10850,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10849,map__10849__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__10852 = null;var count__10853 = (0);var i__10854 = (0);while(true){
if((i__10854 < count__10853))
{var vec__10855 = cljs.core._nth.call(null,chunk__10852,i__10854);var idx = cljs.core.nth.call(null,vec__10855,(0),null);var vec__10856 = cljs.core.nth.call(null,vec__10855,(1),null);var date = cljs.core.nth.call(null,vec__10856,(0),null);var open = cljs.core.nth.call(null,vec__10856,(1),null);var high = cljs.core.nth.call(null,vec__10856,(2),null);var low = cljs.core.nth.call(null,vec__10856,(3),null);var close = cljs.core.nth.call(null,vec__10856,(4),null);var volume = cljs.core.nth.call(null,vec__10856,(5),null);var info__$1 = cljs.core.nth.call(null,vec__10855,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__10861 = seq__10851;
var G__10862 = chunk__10852;
var G__10863 = count__10853;
var G__10864 = (i__10854 + (1));
seq__10851 = G__10861;
chunk__10852 = G__10862;
count__10853 = G__10863;
i__10854 = G__10864;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10851);if(temp__4126__auto__)
{var seq__10851__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10851__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10851__$1);{
var G__10865 = cljs.core.chunk_rest.call(null,seq__10851__$1);
var G__10866 = c__4307__auto__;
var G__10867 = cljs.core.count.call(null,c__4307__auto__);
var G__10868 = (0);
seq__10851 = G__10865;
chunk__10852 = G__10866;
count__10853 = G__10867;
i__10854 = G__10868;
continue;
}
} else
{var vec__10857 = cljs.core.first.call(null,seq__10851__$1);var idx = cljs.core.nth.call(null,vec__10857,(0),null);var vec__10858 = cljs.core.nth.call(null,vec__10857,(1),null);var date = cljs.core.nth.call(null,vec__10858,(0),null);var open = cljs.core.nth.call(null,vec__10858,(1),null);var high = cljs.core.nth.call(null,vec__10858,(2),null);var low = cljs.core.nth.call(null,vec__10858,(3),null);var close = cljs.core.nth.call(null,vec__10858,(4),null);var volume = cljs.core.nth.call(null,vec__10858,(5),null);var info__$1 = cljs.core.nth.call(null,vec__10857,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__10869 = cljs.core.next.call(null,seq__10851__$1);
var G__10870 = null;
var G__10871 = (0);
var G__10872 = (0);
seq__10851 = G__10869;
chunk__10852 = G__10870;
count__10853 = G__10871;
i__10854 = G__10872;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10873){var map__10874 = p__10873;var map__10874__$1 = ((cljs.core.seq_QMARK_.call(null,map__10874))?cljs.core.apply.call(null,cljs.core.hash_map,map__10874):map__10874);var cz = cljs.core.get.call(null,map__10874__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10875){var map__10876 = p__10875;var map__10876__$1 = ((cljs.core.seq_QMARK_.call(null,map__10876))?cljs.core.apply.call(null,cljs.core.hash_map,map__10876):map__10876);var cz = cljs.core.get.call(null,map__10876__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10877,base,ctx){var map__10878 = p__10877;var map__10878__$1 = ((cljs.core.seq_QMARK_.call(null,map__10878))?cljs.core.apply.call(null,cljs.core.hash_map,map__10878):map__10878);var cz = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__10879 = base;var w = cljs.core.nth.call(null,vec__10879,(0),null);var h = cljs.core.nth.call(null,vec__10879,(1),null);var max_v = cljs.core.nth.call(null,vec__10879,(2),null);var min_v = cljs.core.nth.call(null,vec__10879,(3),null);var offset_v = cljs.core.nth.call(null,vec__10879,(4),null);var offset_x = cljs.core.nth.call(null,vec__10879,(5),null);var pos_y = cljs.core.nth.call(null,vec__10879,(6),null);var proj_x = ((function (vec__10879,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10878,map__10878__$1,cz,vz){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(vec__10879,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10878,map__10878__$1,cz,vz))
;var proj_y = ((function (vec__10879,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__10878,map__10878__$1,cz,vz){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(vec__10879,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__10878,map__10878__$1,cz,vz))
;(ctx["fillStyle"] = "red");
(ctx["strokeStyle"] = "red");
var seq__10880 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10879,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__10878,map__10878__$1,cz,vz){
return (function() { 
var G__10886__delegate = function (args){return args;
};
var G__10886 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10886__delegate.call(this,args);};
G__10886.cljs$lang$maxFixedArity = 0;
G__10886.cljs$lang$applyTo = (function (arglist__10887){
var args = cljs.core.seq(arglist__10887);
return G__10886__delegate(args);
});
G__10886.cljs$core$IFn$_invoke$arity$variadic = G__10886__delegate;
return G__10886;
})()
;})(vec__10879,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__10878,map__10878__$1,cz,vz))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__10881 = null;var count__10882 = (0);var i__10883 = (0);while(true){
if((i__10883 < count__10882))
{var vec__10884 = cljs.core._nth.call(null,chunk__10881,i__10883);var idx = cljs.core.nth.call(null,vec__10884,(0),null);var pc = cljs.core.nth.call(null,vec__10884,(1),null);var cc = cljs.core.nth.call(null,vec__10884,(2),null);var pv = cljs.core.nth.call(null,vec__10884,(3),null);var cv = cljs.core.nth.call(null,vec__10884,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__10888 = seq__10880;
var G__10889 = chunk__10881;
var G__10890 = count__10882;
var G__10891 = (i__10883 + (1));
seq__10880 = G__10888;
chunk__10881 = G__10889;
count__10882 = G__10890;
i__10883 = G__10891;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10880);if(temp__4126__auto__)
{var seq__10880__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10880__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__10880__$1);{
var G__10892 = cljs.core.chunk_rest.call(null,seq__10880__$1);
var G__10893 = c__4307__auto__;
var G__10894 = cljs.core.count.call(null,c__4307__auto__);
var G__10895 = (0);
seq__10880 = G__10892;
chunk__10881 = G__10893;
count__10882 = G__10894;
i__10883 = G__10895;
continue;
}
} else
{var vec__10885 = cljs.core.first.call(null,seq__10880__$1);var idx = cljs.core.nth.call(null,vec__10885,(0),null);var pc = cljs.core.nth.call(null,vec__10885,(1),null);var cc = cljs.core.nth.call(null,vec__10885,(2),null);var pv = cljs.core.nth.call(null,vec__10885,(3),null);var cv = cljs.core.nth.call(null,vec__10885,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__10896 = cljs.core.next.call(null,seq__10880__$1);
var G__10897 = null;
var G__10898 = (0);
var G__10899 = (0);
seq__10880 = G__10896;
chunk__10881 = G__10897;
count__10882 = G__10898;
i__10883 = G__10899;
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
