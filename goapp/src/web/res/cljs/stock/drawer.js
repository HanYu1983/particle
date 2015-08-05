// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__46162){var map__46163 = p__46162;var map__46163__$1 = ((cljs.core.seq_QMARK_.call(null,map__46163))?cljs.core.apply.call(null,cljs.core.hash_map,map__46163):map__46163);var t = cljs.core.get.call(null,map__46163__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__46164){var map__46165 = p__46164;var map__46165__$1 = ((cljs.core.seq_QMARK_.call(null,map__46165))?cljs.core.apply.call(null,cljs.core.hash_map,map__46165):map__46165);var t = cljs.core.get.call(null,map__46165__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__46166){var map__46167 = p__46166;var map__46167__$1 = ((cljs.core.seq_QMARK_.call(null,map__46167))?cljs.core.apply.call(null,cljs.core.hash_map,map__46167):map__46167);var t = cljs.core.get.call(null,map__46167__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__46168,base,ctx){var map__46169 = p__46168;var map__46169__$1 = ((cljs.core.seq_QMARK_.call(null,map__46169))?cljs.core.apply.call(null,cljs.core.hash_map,map__46169):map__46169);var t = cljs.core.get.call(null,map__46169__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__46170,w,h,ctx){var map__46176 = p__46170;var map__46176__$1 = ((cljs.core.seq_QMARK_.call(null,map__46176))?cljs.core.apply.call(null,cljs.core.hash_map,map__46176):map__46176);var info = map__46176__$1;var drawers = cljs.core.get.call(null,map__46176__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "gray");
ctx.fillRect((0),(0),w,h);
var seq__46177 = cljs.core.seq.call(null,drawers);var chunk__46178 = null;var count__46179 = (0);var i__46180 = (0);while(true){
if((i__46180 < count__46179))
{var drawer = cljs.core._nth.call(null,chunk__46178,i__46180);stock.drawer.draw_it.call(null,drawer,base,ctx);
{
var G__46181 = seq__46177;
var G__46182 = chunk__46178;
var G__46183 = count__46179;
var G__46184 = (i__46180 + (1));
seq__46177 = G__46181;
chunk__46178 = G__46182;
count__46179 = G__46183;
i__46180 = G__46184;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46177);if(temp__4126__auto__)
{var seq__46177__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46177__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__46177__$1);{
var G__46185 = cljs.core.chunk_rest.call(null,seq__46177__$1);
var G__46186 = c__4307__auto__;
var G__46187 = cljs.core.count.call(null,c__4307__auto__);
var G__46188 = (0);
seq__46177 = G__46185;
chunk__46178 = G__46186;
count__46179 = G__46187;
i__46180 = G__46188;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__46177__$1);stock.drawer.draw_it.call(null,drawer,base,ctx);
{
var G__46189 = cljs.core.next.call(null,seq__46177__$1);
var G__46190 = null;
var G__46191 = (0);
var G__46192 = (0);
seq__46177 = G__46189;
chunk__46178 = G__46190;
count__46179 = G__46191;
i__46180 = G__46192;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__46193){var map__46194 = p__46193;var map__46194__$1 = ((cljs.core.seq_QMARK_.call(null,map__46194))?cljs.core.apply.call(null,cljs.core.hash_map,map__46194):map__46194);var kline = cljs.core.get.call(null,map__46194__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__46195){var map__46196 = p__46195;var map__46196__$1 = ((cljs.core.seq_QMARK_.call(null,map__46196))?cljs.core.apply.call(null,cljs.core.hash_map,map__46196):map__46196);var kline = cljs.core.get.call(null,map__46196__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__46197){var map__46198 = p__46197;var map__46198__$1 = ((cljs.core.seq_QMARK_.call(null,map__46198))?cljs.core.apply.call(null,cljs.core.hash_map,map__46198):map__46198);var kline = cljs.core.get.call(null,map__46198__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__46199,base,ctx){var map__46200 = p__46199;var map__46200__$1 = ((cljs.core.seq_QMARK_.call(null,map__46200))?cljs.core.apply.call(null,cljs.core.hash_map,map__46200):map__46200);var kline = cljs.core.get.call(null,map__46200__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var vec__46201 = base;var max_v = cljs.core.nth.call(null,vec__46201,(0),null);var min_v = cljs.core.nth.call(null,vec__46201,(1),null);var offset_v = cljs.core.nth.call(null,vec__46201,(2),null);var offset_x = cljs.core.nth.call(null,vec__46201,(3),null);var pos_y = cljs.core.nth.call(null,vec__46201,(4),null);var seq__46202 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__46201,max_v,min_v,offset_v,offset_x,pos_y,map__46200,map__46200__$1,kline){
return (function() { 
var G__46210__delegate = function (args){return args;
};
var G__46210 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46210__delegate.call(this,args);};
G__46210.cljs$lang$maxFixedArity = 0;
G__46210.cljs$lang$applyTo = (function (arglist__46211){
var args = cljs.core.seq(arglist__46211);
return G__46210__delegate(args);
});
G__46210.cljs$core$IFn$_invoke$arity$variadic = G__46210__delegate;
return G__46210;
})()
;})(vec__46201,max_v,min_v,offset_v,offset_x,pos_y,map__46200,map__46200__$1,kline))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__46203 = null;var count__46204 = (0);var i__46205 = (0);while(true){
if((i__46205 < count__46204))
{var vec__46206 = cljs.core._nth.call(null,chunk__46203,i__46205);var idx = cljs.core.nth.call(null,vec__46206,(0),null);var vec__46207 = cljs.core.nth.call(null,vec__46206,(1),null);var date = cljs.core.nth.call(null,vec__46207,(0),null);var open = cljs.core.nth.call(null,vec__46207,(1),null);var high = cljs.core.nth.call(null,vec__46207,(2),null);var low = cljs.core.nth.call(null,vec__46207,(3),null);var close = cljs.core.nth.call(null,vec__46207,(4),null);var volume = cljs.core.nth.call(null,vec__46207,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__46212 = seq__46202;
var G__46213 = chunk__46203;
var G__46214 = count__46204;
var G__46215 = (i__46205 + (1));
seq__46202 = G__46212;
chunk__46203 = G__46213;
count__46204 = G__46214;
i__46205 = G__46215;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46202);if(temp__4126__auto__)
{var seq__46202__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46202__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__46202__$1);{
var G__46216 = cljs.core.chunk_rest.call(null,seq__46202__$1);
var G__46217 = c__4307__auto__;
var G__46218 = cljs.core.count.call(null,c__4307__auto__);
var G__46219 = (0);
seq__46202 = G__46216;
chunk__46203 = G__46217;
count__46204 = G__46218;
i__46205 = G__46219;
continue;
}
} else
{var vec__46208 = cljs.core.first.call(null,seq__46202__$1);var idx = cljs.core.nth.call(null,vec__46208,(0),null);var vec__46209 = cljs.core.nth.call(null,vec__46208,(1),null);var date = cljs.core.nth.call(null,vec__46209,(0),null);var open = cljs.core.nth.call(null,vec__46209,(1),null);var high = cljs.core.nth.call(null,vec__46209,(2),null);var low = cljs.core.nth.call(null,vec__46209,(3),null);var close = cljs.core.nth.call(null,vec__46209,(4),null);var volume = cljs.core.nth.call(null,vec__46209,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__46220 = cljs.core.next.call(null,seq__46202__$1);
var G__46221 = null;
var G__46222 = (0);
var G__46223 = (0);
seq__46202 = G__46220;
chunk__46203 = G__46221;
count__46204 = G__46222;
i__46205 = G__46223;
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
