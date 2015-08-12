// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33715){var map__33716 = p__33715;var map__33716__$1 = ((cljs.core.seq_QMARK_.call(null,map__33716))?cljs.core.apply.call(null,cljs.core.hash_map,map__33716):map__33716);var t = cljs.core.get.call(null,map__33716__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33717){var map__33718 = p__33717;var map__33718__$1 = ((cljs.core.seq_QMARK_.call(null,map__33718))?cljs.core.apply.call(null,cljs.core.hash_map,map__33718):map__33718);var t = cljs.core.get.call(null,map__33718__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33719){var map__33720 = p__33719;var map__33720__$1 = ((cljs.core.seq_QMARK_.call(null,map__33720))?cljs.core.apply.call(null,cljs.core.hash_map,map__33720):map__33720);var t = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33721,base,ctx){var map__33722 = p__33721;var map__33722__$1 = ((cljs.core.seq_QMARK_.call(null,map__33722))?cljs.core.apply.call(null,cljs.core.hash_map,map__33722):map__33722);var t = cljs.core.get.call(null,map__33722__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__33723,w,h,ctx){var map__33729 = p__33723;var map__33729__$1 = ((cljs.core.seq_QMARK_.call(null,map__33729))?cljs.core.apply.call(null,cljs.core.hash_map,map__33729):map__33729);var info = map__33729__$1;var drawers = cljs.core.get.call(null,map__33729__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "lightgray");
ctx.fillRect((0),(0),w,h);
var seq__33730 = cljs.core.seq.call(null,drawers);var chunk__33731 = null;var count__33732 = (0);var i__33733 = (0);while(true){
if((i__33733 < count__33732))
{var drawer = cljs.core._nth.call(null,chunk__33731,i__33733);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__33734 = seq__33730;
var G__33735 = chunk__33731;
var G__33736 = count__33732;
var G__33737 = (i__33733 + (1));
seq__33730 = G__33734;
chunk__33731 = G__33735;
count__33732 = G__33736;
i__33733 = G__33737;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33730);if(temp__4126__auto__)
{var seq__33730__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33730__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33730__$1);{
var G__33738 = cljs.core.chunk_rest.call(null,seq__33730__$1);
var G__33739 = c__4307__auto__;
var G__33740 = cljs.core.count.call(null,c__4307__auto__);
var G__33741 = (0);
seq__33730 = G__33738;
chunk__33731 = G__33739;
count__33732 = G__33740;
i__33733 = G__33741;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__33730__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__33742 = cljs.core.next.call(null,seq__33730__$1);
var G__33743 = null;
var G__33744 = (0);
var G__33745 = (0);
seq__33730 = G__33742;
chunk__33731 = G__33743;
count__33732 = G__33744;
i__33733 = G__33745;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33746){var map__33747 = p__33746;var map__33747__$1 = ((cljs.core.seq_QMARK_.call(null,map__33747))?cljs.core.apply.call(null,cljs.core.hash_map,map__33747):map__33747);var line = cljs.core.get.call(null,map__33747__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33748){var map__33749 = p__33748;var map__33749__$1 = ((cljs.core.seq_QMARK_.call(null,map__33749))?cljs.core.apply.call(null,cljs.core.hash_map,map__33749):map__33749);var line = cljs.core.get.call(null,map__33749__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33750){var map__33751 = p__33750;var map__33751__$1 = ((cljs.core.seq_QMARK_.call(null,map__33751))?cljs.core.apply.call(null,cljs.core.hash_map,map__33751):map__33751);var line = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33752,base,ctx){var map__33753 = p__33752;var map__33753__$1 = ((cljs.core.seq_QMARK_.call(null,map__33753))?cljs.core.apply.call(null,cljs.core.hash_map,map__33753):map__33753);var line = cljs.core.get.call(null,map__33753__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__33753__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__33754 = base;var w = cljs.core.nth.call(null,vec__33754,(0),null);var h = cljs.core.nth.call(null,vec__33754,(1),null);var max_v = cljs.core.nth.call(null,vec__33754,(2),null);var min_v = cljs.core.nth.call(null,vec__33754,(3),null);var offset_v = cljs.core.nth.call(null,vec__33754,(4),null);var offset_x = cljs.core.nth.call(null,vec__33754,(5),null);var pos_y = cljs.core.nth.call(null,vec__33754,(6),null);(ctx["strokeStyle"] = color);
var seq__33755 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33754,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33753,map__33753__$1,line,color){
return (function() { 
var G__33761__delegate = function (args){return args;
};
var G__33761 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33761__delegate.call(this,args);};
G__33761.cljs$lang$maxFixedArity = 0;
G__33761.cljs$lang$applyTo = (function (arglist__33762){
var args = cljs.core.seq(arglist__33762);
return G__33761__delegate(args);
});
G__33761.cljs$core$IFn$_invoke$arity$variadic = G__33761__delegate;
return G__33761;
})()
;})(vec__33754,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33753,map__33753__$1,line,color))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__33756 = null;var count__33757 = (0);var i__33758 = (0);while(true){
if((i__33758 < count__33757))
{var vec__33759 = cljs.core._nth.call(null,chunk__33756,i__33758);var idx = cljs.core.nth.call(null,vec__33759,(0),null);var prev = cljs.core.nth.call(null,vec__33759,(1),null);var curr = cljs.core.nth.call(null,vec__33759,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__33763 = seq__33755;
var G__33764 = chunk__33756;
var G__33765 = count__33757;
var G__33766 = (i__33758 + (1));
seq__33755 = G__33763;
chunk__33756 = G__33764;
count__33757 = G__33765;
i__33758 = G__33766;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33755);if(temp__4126__auto__)
{var seq__33755__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33755__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33755__$1);{
var G__33767 = cljs.core.chunk_rest.call(null,seq__33755__$1);
var G__33768 = c__4307__auto__;
var G__33769 = cljs.core.count.call(null,c__4307__auto__);
var G__33770 = (0);
seq__33755 = G__33767;
chunk__33756 = G__33768;
count__33757 = G__33769;
i__33758 = G__33770;
continue;
}
} else
{var vec__33760 = cljs.core.first.call(null,seq__33755__$1);var idx = cljs.core.nth.call(null,vec__33760,(0),null);var prev = cljs.core.nth.call(null,vec__33760,(1),null);var curr = cljs.core.nth.call(null,vec__33760,(2),null);(ctx["lineWidth"] = (1));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,prev));
ctx.lineTo(((idx + (1)) * offset_x),pos_y.call(null,curr));
ctx.stroke();
{
var G__33771 = cljs.core.next.call(null,seq__33755__$1);
var G__33772 = null;
var G__33773 = (0);
var G__33774 = (0);
seq__33755 = G__33771;
chunk__33756 = G__33772;
count__33757 = G__33773;
i__33758 = G__33774;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33775){var map__33776 = p__33775;var map__33776__$1 = ((cljs.core.seq_QMARK_.call(null,map__33776))?cljs.core.apply.call(null,cljs.core.hash_map,map__33776):map__33776);var kline = cljs.core.get.call(null,map__33776__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33777){var map__33778 = p__33777;var map__33778__$1 = ((cljs.core.seq_QMARK_.call(null,map__33778))?cljs.core.apply.call(null,cljs.core.hash_map,map__33778):map__33778);var kline = cljs.core.get.call(null,map__33778__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33779){var map__33780 = p__33779;var map__33780__$1 = ((cljs.core.seq_QMARK_.call(null,map__33780))?cljs.core.apply.call(null,cljs.core.hash_map,map__33780):map__33780);var kline = cljs.core.get.call(null,map__33780__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33781,base,ctx){var map__33782 = p__33781;var map__33782__$1 = ((cljs.core.seq_QMARK_.call(null,map__33782))?cljs.core.apply.call(null,cljs.core.hash_map,map__33782):map__33782);var kline = cljs.core.get.call(null,map__33782__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__33782__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__33783 = base;var w = cljs.core.nth.call(null,vec__33783,(0),null);var h = cljs.core.nth.call(null,vec__33783,(1),null);var max_v = cljs.core.nth.call(null,vec__33783,(2),null);var min_v = cljs.core.nth.call(null,vec__33783,(3),null);var offset_v = cljs.core.nth.call(null,vec__33783,(4),null);var offset_x = cljs.core.nth.call(null,vec__33783,(5),null);var pos_y = cljs.core.nth.call(null,vec__33783,(6),null);(ctx["fillStyle"] = "black");
var seq__33784 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33783,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33782,map__33782__$1,kline,info){
return (function() { 
var G__33792__delegate = function (args){return args;
};
var G__33792 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33792__delegate.call(this,args);};
G__33792.cljs$lang$maxFixedArity = 0;
G__33792.cljs$lang$applyTo = (function (arglist__33793){
var args = cljs.core.seq(arglist__33793);
return G__33792__delegate(args);
});
G__33792.cljs$core$IFn$_invoke$arity$variadic = G__33792__delegate;
return G__33792;
})()
;})(vec__33783,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33782,map__33782__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__33785 = null;var count__33786 = (0);var i__33787 = (0);while(true){
if((i__33787 < count__33786))
{var vec__33788 = cljs.core._nth.call(null,chunk__33785,i__33787);var idx = cljs.core.nth.call(null,vec__33788,(0),null);var vec__33789 = cljs.core.nth.call(null,vec__33788,(1),null);var date = cljs.core.nth.call(null,vec__33789,(0),null);var open = cljs.core.nth.call(null,vec__33789,(1),null);var high = cljs.core.nth.call(null,vec__33789,(2),null);var low = cljs.core.nth.call(null,vec__33789,(3),null);var close = cljs.core.nth.call(null,vec__33789,(4),null);var volume = cljs.core.nth.call(null,vec__33789,(5),null);var info__$1 = cljs.core.nth.call(null,vec__33788,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__33794 = seq__33784;
var G__33795 = chunk__33785;
var G__33796 = count__33786;
var G__33797 = (i__33787 + (1));
seq__33784 = G__33794;
chunk__33785 = G__33795;
count__33786 = G__33796;
i__33787 = G__33797;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33784);if(temp__4126__auto__)
{var seq__33784__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33784__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33784__$1);{
var G__33798 = cljs.core.chunk_rest.call(null,seq__33784__$1);
var G__33799 = c__4307__auto__;
var G__33800 = cljs.core.count.call(null,c__4307__auto__);
var G__33801 = (0);
seq__33784 = G__33798;
chunk__33785 = G__33799;
count__33786 = G__33800;
i__33787 = G__33801;
continue;
}
} else
{var vec__33790 = cljs.core.first.call(null,seq__33784__$1);var idx = cljs.core.nth.call(null,vec__33790,(0),null);var vec__33791 = cljs.core.nth.call(null,vec__33790,(1),null);var date = cljs.core.nth.call(null,vec__33791,(0),null);var open = cljs.core.nth.call(null,vec__33791,(1),null);var high = cljs.core.nth.call(null,vec__33791,(2),null);var low = cljs.core.nth.call(null,vec__33791,(3),null);var close = cljs.core.nth.call(null,vec__33791,(4),null);var volume = cljs.core.nth.call(null,vec__33791,(5),null);var info__$1 = cljs.core.nth.call(null,vec__33790,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__33802 = cljs.core.next.call(null,seq__33784__$1);
var G__33803 = null;
var G__33804 = (0);
var G__33805 = (0);
seq__33784 = G__33802;
chunk__33785 = G__33803;
count__33786 = G__33804;
i__33787 = G__33805;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33806){var map__33807 = p__33806;var map__33807__$1 = ((cljs.core.seq_QMARK_.call(null,map__33807))?cljs.core.apply.call(null,cljs.core.hash_map,map__33807):map__33807);var cz = cljs.core.get.call(null,map__33807__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33808){var map__33809 = p__33808;var map__33809__$1 = ((cljs.core.seq_QMARK_.call(null,map__33809))?cljs.core.apply.call(null,cljs.core.hash_map,map__33809):map__33809);var cz = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33810,base,ctx){var map__33811 = p__33810;var map__33811__$1 = ((cljs.core.seq_QMARK_.call(null,map__33811))?cljs.core.apply.call(null,cljs.core.hash_map,map__33811):map__33811);var cz = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var vec__33812 = base;var w = cljs.core.nth.call(null,vec__33812,(0),null);var h = cljs.core.nth.call(null,vec__33812,(1),null);var max_v = cljs.core.nth.call(null,vec__33812,(2),null);var min_v = cljs.core.nth.call(null,vec__33812,(3),null);var offset_v = cljs.core.nth.call(null,vec__33812,(4),null);var offset_x = cljs.core.nth.call(null,vec__33812,(5),null);var pos_y = cljs.core.nth.call(null,vec__33812,(6),null);var proj_x = ((function (vec__33812,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33811,map__33811__$1,cz,vz){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(vec__33812,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33811,map__33811__$1,cz,vz))
;var proj_y = ((function (vec__33812,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__33811,map__33811__$1,cz,vz){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(vec__33812,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__33811,map__33811__$1,cz,vz))
;(ctx["fillStyle"] = "red");
(ctx["strokeStyle"] = "red");
var seq__33813 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33812,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__33811,map__33811__$1,cz,vz){
return (function() { 
var G__33819__delegate = function (args){return args;
};
var G__33819 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33819__delegate.call(this,args);};
G__33819.cljs$lang$maxFixedArity = 0;
G__33819.cljs$lang$applyTo = (function (arglist__33820){
var args = cljs.core.seq(arglist__33820);
return G__33819__delegate(args);
});
G__33819.cljs$core$IFn$_invoke$arity$variadic = G__33819__delegate;
return G__33819;
})()
;})(vec__33812,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__33811,map__33811__$1,cz,vz))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__33814 = null;var count__33815 = (0);var i__33816 = (0);while(true){
if((i__33816 < count__33815))
{var vec__33817 = cljs.core._nth.call(null,chunk__33814,i__33816);var idx = cljs.core.nth.call(null,vec__33817,(0),null);var pc = cljs.core.nth.call(null,vec__33817,(1),null);var cc = cljs.core.nth.call(null,vec__33817,(2),null);var pv = cljs.core.nth.call(null,vec__33817,(3),null);var cv = cljs.core.nth.call(null,vec__33817,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__33821 = seq__33813;
var G__33822 = chunk__33814;
var G__33823 = count__33815;
var G__33824 = (i__33816 + (1));
seq__33813 = G__33821;
chunk__33814 = G__33822;
count__33815 = G__33823;
i__33816 = G__33824;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33813);if(temp__4126__auto__)
{var seq__33813__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33813__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33813__$1);{
var G__33825 = cljs.core.chunk_rest.call(null,seq__33813__$1);
var G__33826 = c__4307__auto__;
var G__33827 = cljs.core.count.call(null,c__4307__auto__);
var G__33828 = (0);
seq__33813 = G__33825;
chunk__33814 = G__33826;
count__33815 = G__33827;
i__33816 = G__33828;
continue;
}
} else
{var vec__33818 = cljs.core.first.call(null,seq__33813__$1);var idx = cljs.core.nth.call(null,vec__33818,(0),null);var pc = cljs.core.nth.call(null,vec__33818,(1),null);var cc = cljs.core.nth.call(null,vec__33818,(2),null);var pv = cljs.core.nth.call(null,vec__33818,(3),null);var cv = cljs.core.nth.call(null,vec__33818,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__33829 = cljs.core.next.call(null,seq__33813__$1);
var G__33830 = null;
var G__33831 = (0);
var G__33832 = (0);
seq__33813 = G__33829;
chunk__33814 = G__33830;
count__33815 = G__33831;
i__33816 = G__33832;
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
