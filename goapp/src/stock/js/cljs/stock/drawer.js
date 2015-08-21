// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40133){var map__40134 = p__40133;var map__40134__$1 = ((cljs.core.seq_QMARK_.call(null,map__40134))?cljs.core.apply.call(null,cljs.core.hash_map,map__40134):map__40134);var t = cljs.core.get.call(null,map__40134__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40135){var map__40136 = p__40135;var map__40136__$1 = ((cljs.core.seq_QMARK_.call(null,map__40136))?cljs.core.apply.call(null,cljs.core.hash_map,map__40136):map__40136);var t = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40137){var map__40138 = p__40137;var map__40138__$1 = ((cljs.core.seq_QMARK_.call(null,map__40138))?cljs.core.apply.call(null,cljs.core.hash_map,map__40138):map__40138);var t = cljs.core.get.call(null,map__40138__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__40139,base,ctx){var map__40140 = p__40139;var map__40140__$1 = ((cljs.core.seq_QMARK_.call(null,map__40140))?cljs.core.apply.call(null,cljs.core.hash_map,map__40140):map__40140);var t = cljs.core.get.call(null,map__40140__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__40141,w,h,ctx){var map__40147 = p__40141;var map__40147__$1 = ((cljs.core.seq_QMARK_.call(null,map__40147))?cljs.core.apply.call(null,cljs.core.hash_map,map__40147):map__40147);var info = map__40147__$1;var drawers = cljs.core.get.call(null,map__40147__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__40148 = cljs.core.seq.call(null,drawers);var chunk__40149 = null;var count__40150 = (0);var i__40151 = (0);while(true){
if((i__40151 < count__40150))
{var drawer = cljs.core._nth.call(null,chunk__40149,i__40151);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__40152 = seq__40148;
var G__40153 = chunk__40149;
var G__40154 = count__40150;
var G__40155 = (i__40151 + (1));
seq__40148 = G__40152;
chunk__40149 = G__40153;
count__40150 = G__40154;
i__40151 = G__40155;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40148);if(temp__4126__auto__)
{var seq__40148__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40148__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40148__$1);{
var G__40156 = cljs.core.chunk_rest.call(null,seq__40148__$1);
var G__40157 = c__4307__auto__;
var G__40158 = cljs.core.count.call(null,c__4307__auto__);
var G__40159 = (0);
seq__40148 = G__40156;
chunk__40149 = G__40157;
count__40150 = G__40158;
i__40151 = G__40159;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__40148__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__40160 = cljs.core.next.call(null,seq__40148__$1);
var G__40161 = null;
var G__40162 = (0);
var G__40163 = (0);
seq__40148 = G__40160;
chunk__40149 = G__40161;
count__40150 = G__40162;
i__40151 = G__40163;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40164){var map__40165 = p__40164;var map__40165__$1 = ((cljs.core.seq_QMARK_.call(null,map__40165))?cljs.core.apply.call(null,cljs.core.hash_map,map__40165):map__40165);var line = cljs.core.get.call(null,map__40165__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40165__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40166){var map__40167 = p__40166;var map__40167__$1 = ((cljs.core.seq_QMARK_.call(null,map__40167))?cljs.core.apply.call(null,cljs.core.hash_map,map__40167):map__40167);var line = cljs.core.get.call(null,map__40167__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40167__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40168){var map__40169 = p__40168;var map__40169__$1 = ((cljs.core.seq_QMARK_.call(null,map__40169))?cljs.core.apply.call(null,cljs.core.hash_map,map__40169):map__40169);var line = cljs.core.get.call(null,map__40169__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40169__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__40170,base,ctx){var map__40171 = p__40170;var map__40171__$1 = ((cljs.core.seq_QMARK_.call(null,map__40171))?cljs.core.apply.call(null,cljs.core.hash_map,map__40171):map__40171);var line = cljs.core.get.call(null,map__40171__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__40171__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__40171__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__40171__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__40172 = base;var w = cljs.core.nth.call(null,vec__40172,(0),null);var h = cljs.core.nth.call(null,vec__40172,(1),null);var max_v = cljs.core.nth.call(null,vec__40172,(2),null);var min_v = cljs.core.nth.call(null,vec__40172,(3),null);var offset_v = cljs.core.nth.call(null,vec__40172,(4),null);var offset_x = cljs.core.nth.call(null,vec__40172,(5),null);var pos_y = cljs.core.nth.call(null,vec__40172,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__40173_40185 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__40174_40186 = null;var count__40175_40187 = (0);var i__40176_40188 = (0);while(true){
if((i__40176_40188 < count__40175_40187))
{var i_40189 = cljs.core._nth.call(null,chunk__40174_40186,i__40176_40188);var v_40190 = (min_v + (i_40189 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40190)),(w * ((1) / (3))),pos_y.call(null,v_40190));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40190)),(w * ((2) / (3))),pos_y.call(null,v_40190));
ctx.moveTo((0),pos_y.call(null,v_40190));
ctx.lineTo(w,pos_y.call(null,v_40190));
{
var G__40191 = seq__40173_40185;
var G__40192 = chunk__40174_40186;
var G__40193 = count__40175_40187;
var G__40194 = (i__40176_40188 + (1));
seq__40173_40185 = G__40191;
chunk__40174_40186 = G__40192;
count__40175_40187 = G__40193;
i__40176_40188 = G__40194;
continue;
}
} else
{var temp__4126__auto___40195 = cljs.core.seq.call(null,seq__40173_40185);if(temp__4126__auto___40195)
{var seq__40173_40196__$1 = temp__4126__auto___40195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40173_40196__$1))
{var c__4307__auto___40197 = cljs.core.chunk_first.call(null,seq__40173_40196__$1);{
var G__40198 = cljs.core.chunk_rest.call(null,seq__40173_40196__$1);
var G__40199 = c__4307__auto___40197;
var G__40200 = cljs.core.count.call(null,c__4307__auto___40197);
var G__40201 = (0);
seq__40173_40185 = G__40198;
chunk__40174_40186 = G__40199;
count__40175_40187 = G__40200;
i__40176_40188 = G__40201;
continue;
}
} else
{var i_40202 = cljs.core.first.call(null,seq__40173_40196__$1);var v_40203 = (min_v + (i_40202 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40203)),(w * ((1) / (3))),pos_y.call(null,v_40203));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40203)),(w * ((2) / (3))),pos_y.call(null,v_40203));
ctx.moveTo((0),pos_y.call(null,v_40203));
ctx.lineTo(w,pos_y.call(null,v_40203));
{
var G__40204 = cljs.core.next.call(null,seq__40173_40196__$1);
var G__40205 = null;
var G__40206 = (0);
var G__40207 = (0);
seq__40173_40185 = G__40204;
chunk__40174_40186 = G__40205;
count__40175_40187 = G__40206;
i__40176_40188 = G__40207;
continue;
}
}
} else
{}
}
break;
}
}
if(cljs.core.truth_(kline))
{var seq__40177_40208 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__40178_40209 = null;var count__40179_40210 = (0);var i__40180_40211 = (0);while(true){
if((i__40180_40211 < count__40179_40210))
{var i_40212 = cljs.core._nth.call(null,chunk__40178_40209,i__40180_40211);if((cljs.core.mod.call(null,i_40212,cntx) === (0)))
{var posx_40213 = ((offset_x / (2)) + (i_40212 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_40212)),posx_40213,h);
ctx.moveTo(posx_40213,(0));
ctx.lineTo(posx_40213,h);
} else
{}
{
var G__40214 = seq__40177_40208;
var G__40215 = chunk__40178_40209;
var G__40216 = count__40179_40210;
var G__40217 = (i__40180_40211 + (1));
seq__40177_40208 = G__40214;
chunk__40178_40209 = G__40215;
count__40179_40210 = G__40216;
i__40180_40211 = G__40217;
continue;
}
} else
{var temp__4126__auto___40218 = cljs.core.seq.call(null,seq__40177_40208);if(temp__4126__auto___40218)
{var seq__40177_40219__$1 = temp__4126__auto___40218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40177_40219__$1))
{var c__4307__auto___40220 = cljs.core.chunk_first.call(null,seq__40177_40219__$1);{
var G__40221 = cljs.core.chunk_rest.call(null,seq__40177_40219__$1);
var G__40222 = c__4307__auto___40220;
var G__40223 = cljs.core.count.call(null,c__4307__auto___40220);
var G__40224 = (0);
seq__40177_40208 = G__40221;
chunk__40178_40209 = G__40222;
count__40179_40210 = G__40223;
i__40180_40211 = G__40224;
continue;
}
} else
{var i_40225 = cljs.core.first.call(null,seq__40177_40219__$1);if((cljs.core.mod.call(null,i_40225,cntx) === (0)))
{var posx_40226 = ((offset_x / (2)) + (i_40225 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_40225)),posx_40226,h);
ctx.moveTo(posx_40226,(0));
ctx.lineTo(posx_40226,h);
} else
{}
{
var G__40227 = cljs.core.next.call(null,seq__40177_40219__$1);
var G__40228 = null;
var G__40229 = (0);
var G__40230 = (0);
seq__40177_40208 = G__40227;
chunk__40178_40209 = G__40228;
count__40179_40210 = G__40229;
i__40180_40211 = G__40230;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core.truth_(line))
{var seq__40181_40231 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__40182_40232 = null;var count__40183_40233 = (0);var i__40184_40234 = (0);while(true){
if((i__40184_40234 < count__40183_40233))
{var i_40235 = cljs.core._nth.call(null,chunk__40182_40232,i__40184_40234);if((cljs.core.mod.call(null,i_40235,cntx) === (0)))
{var posx_40236 = ((offset_x / (2)) + (i_40235 * offset_x));ctx.moveTo(posx_40236,(0));
ctx.lineTo(posx_40236,h);
} else
{}
{
var G__40237 = seq__40181_40231;
var G__40238 = chunk__40182_40232;
var G__40239 = count__40183_40233;
var G__40240 = (i__40184_40234 + (1));
seq__40181_40231 = G__40237;
chunk__40182_40232 = G__40238;
count__40183_40233 = G__40239;
i__40184_40234 = G__40240;
continue;
}
} else
{var temp__4126__auto___40241 = cljs.core.seq.call(null,seq__40181_40231);if(temp__4126__auto___40241)
{var seq__40181_40242__$1 = temp__4126__auto___40241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40181_40242__$1))
{var c__4307__auto___40243 = cljs.core.chunk_first.call(null,seq__40181_40242__$1);{
var G__40244 = cljs.core.chunk_rest.call(null,seq__40181_40242__$1);
var G__40245 = c__4307__auto___40243;
var G__40246 = cljs.core.count.call(null,c__4307__auto___40243);
var G__40247 = (0);
seq__40181_40231 = G__40244;
chunk__40182_40232 = G__40245;
count__40183_40233 = G__40246;
i__40184_40234 = G__40247;
continue;
}
} else
{var i_40248 = cljs.core.first.call(null,seq__40181_40242__$1);if((cljs.core.mod.call(null,i_40248,cntx) === (0)))
{var posx_40249 = ((offset_x / (2)) + (i_40248 * offset_x));ctx.moveTo(posx_40249,(0));
ctx.lineTo(posx_40249,h);
} else
{}
{
var G__40250 = cljs.core.next.call(null,seq__40181_40242__$1);
var G__40251 = null;
var G__40252 = (0);
var G__40253 = (0);
seq__40181_40231 = G__40250;
chunk__40182_40232 = G__40251;
count__40183_40233 = G__40252;
i__40184_40234 = G__40253;
continue;
}
}
} else
{}
}
break;
}
} else
{}
return ctx.stroke();
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40254){var map__40255 = p__40254;var map__40255__$1 = ((cljs.core.seq_QMARK_.call(null,map__40255))?cljs.core.apply.call(null,cljs.core.hash_map,map__40255):map__40255);var line = cljs.core.get.call(null,map__40255__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40256){var map__40257 = p__40256;var map__40257__$1 = ((cljs.core.seq_QMARK_.call(null,map__40257))?cljs.core.apply.call(null,cljs.core.hash_map,map__40257):map__40257);var line = cljs.core.get.call(null,map__40257__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40258){var map__40259 = p__40258;var map__40259__$1 = ((cljs.core.seq_QMARK_.call(null,map__40259))?cljs.core.apply.call(null,cljs.core.hash_map,map__40259):map__40259);var line = cljs.core.get.call(null,map__40259__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__40260,base,ctx){var map__40261 = p__40260;var map__40261__$1 = ((cljs.core.seq_QMARK_.call(null,map__40261))?cljs.core.apply.call(null,cljs.core.hash_map,map__40261):map__40261);var line = cljs.core.get.call(null,map__40261__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__40261__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__40261__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__40261__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__40262 = base;var w = cljs.core.nth.call(null,vec__40262,(0),null);var h = cljs.core.nth.call(null,vec__40262,(1),null);var max_v = cljs.core.nth.call(null,vec__40262,(2),null);var min_v = cljs.core.nth.call(null,vec__40262,(3),null);var offset_v = cljs.core.nth.call(null,vec__40262,(4),null);var offset_x = cljs.core.nth.call(null,vec__40262,(5),null);var pos_y = cljs.core.nth.call(null,vec__40262,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__40263 = cljs.core._EQ_;var expr__40264 = style;if(cljs.core.truth_(pred__40263.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__40264)))
{var seq__40266 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__40267 = null;var count__40268 = (0);var i__40269 = (0);while(true){
if((i__40269 < count__40268))
{var vec__40270 = cljs.core._nth.call(null,chunk__40267,i__40269);var idx = cljs.core.nth.call(null,vec__40270,(0),null);var value = cljs.core.nth.call(null,vec__40270,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__40278 = seq__40266;
var G__40279 = chunk__40267;
var G__40280 = count__40268;
var G__40281 = (i__40269 + (1));
seq__40266 = G__40278;
chunk__40267 = G__40279;
count__40268 = G__40280;
i__40269 = G__40281;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40266);if(temp__4126__auto__)
{var seq__40266__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40266__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40266__$1);{
var G__40282 = cljs.core.chunk_rest.call(null,seq__40266__$1);
var G__40283 = c__4307__auto__;
var G__40284 = cljs.core.count.call(null,c__4307__auto__);
var G__40285 = (0);
seq__40266 = G__40282;
chunk__40267 = G__40283;
count__40268 = G__40284;
i__40269 = G__40285;
continue;
}
} else
{var vec__40271 = cljs.core.first.call(null,seq__40266__$1);var idx = cljs.core.nth.call(null,vec__40271,(0),null);var value = cljs.core.nth.call(null,vec__40271,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__40286 = cljs.core.next.call(null,seq__40266__$1);
var G__40287 = null;
var G__40288 = (0);
var G__40289 = (0);
seq__40266 = G__40286;
chunk__40267 = G__40287;
count__40268 = G__40288;
i__40269 = G__40289;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{ctx.beginPath();
var seq__40272_40290 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__40263,expr__40264,vec__40262,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__40261,map__40261__$1,line,color,offset,style){
return (function() { 
var G__40294__delegate = function (args){return args;
};
var G__40294 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40294__delegate.call(this,args);};
G__40294.cljs$lang$maxFixedArity = 0;
G__40294.cljs$lang$applyTo = (function (arglist__40295){
var args = cljs.core.seq(arglist__40295);
return G__40294__delegate(args);
});
G__40294.cljs$core$IFn$_invoke$arity$variadic = G__40294__delegate;
return G__40294;
})()
;})(pred__40263,expr__40264,vec__40262,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__40261,map__40261__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__40273_40291 = null;var count__40274_40292 = (0);var i__40275_40293 = (0);while(true){
if((i__40275_40293 < count__40274_40292))
{var vec__40276_40296 = cljs.core._nth.call(null,chunk__40273_40291,i__40275_40293);var idx_40297 = cljs.core.nth.call(null,vec__40276_40296,(0),null);var prev_40298 = cljs.core.nth.call(null,vec__40276_40296,(1),null);var curr_40299 = cljs.core.nth.call(null,vec__40276_40296,(2),null);ctx.moveTo(((idx_40297 + offset__$1) * offset_x),pos_y.call(null,prev_40298));
ctx.lineTo((((idx_40297 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_40299));
{
var G__40300 = seq__40272_40290;
var G__40301 = chunk__40273_40291;
var G__40302 = count__40274_40292;
var G__40303 = (i__40275_40293 + (1));
seq__40272_40290 = G__40300;
chunk__40273_40291 = G__40301;
count__40274_40292 = G__40302;
i__40275_40293 = G__40303;
continue;
}
} else
{var temp__4126__auto___40304 = cljs.core.seq.call(null,seq__40272_40290);if(temp__4126__auto___40304)
{var seq__40272_40305__$1 = temp__4126__auto___40304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40272_40305__$1))
{var c__4307__auto___40306 = cljs.core.chunk_first.call(null,seq__40272_40305__$1);{
var G__40307 = cljs.core.chunk_rest.call(null,seq__40272_40305__$1);
var G__40308 = c__4307__auto___40306;
var G__40309 = cljs.core.count.call(null,c__4307__auto___40306);
var G__40310 = (0);
seq__40272_40290 = G__40307;
chunk__40273_40291 = G__40308;
count__40274_40292 = G__40309;
i__40275_40293 = G__40310;
continue;
}
} else
{var vec__40277_40311 = cljs.core.first.call(null,seq__40272_40305__$1);var idx_40312 = cljs.core.nth.call(null,vec__40277_40311,(0),null);var prev_40313 = cljs.core.nth.call(null,vec__40277_40311,(1),null);var curr_40314 = cljs.core.nth.call(null,vec__40277_40311,(2),null);ctx.moveTo(((idx_40312 + offset__$1) * offset_x),pos_y.call(null,prev_40313));
ctx.lineTo((((idx_40312 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_40314));
{
var G__40315 = cljs.core.next.call(null,seq__40272_40305__$1);
var G__40316 = null;
var G__40317 = (0);
var G__40318 = (0);
seq__40272_40290 = G__40315;
chunk__40273_40291 = G__40316;
count__40274_40292 = G__40317;
i__40275_40293 = G__40318;
continue;
}
}
} else
{}
}
break;
}
return ctx.stroke();
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40319){var map__40320 = p__40319;var map__40320__$1 = ((cljs.core.seq_QMARK_.call(null,map__40320))?cljs.core.apply.call(null,cljs.core.hash_map,map__40320):map__40320);var kline = cljs.core.get.call(null,map__40320__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40321){var map__40322 = p__40321;var map__40322__$1 = ((cljs.core.seq_QMARK_.call(null,map__40322))?cljs.core.apply.call(null,cljs.core.hash_map,map__40322):map__40322);var kline = cljs.core.get.call(null,map__40322__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40323){var map__40324 = p__40323;var map__40324__$1 = ((cljs.core.seq_QMARK_.call(null,map__40324))?cljs.core.apply.call(null,cljs.core.hash_map,map__40324):map__40324);var kline = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__40325,base,ctx){var map__40326 = p__40325;var map__40326__$1 = ((cljs.core.seq_QMARK_.call(null,map__40326))?cljs.core.apply.call(null,cljs.core.hash_map,map__40326):map__40326);var kline = cljs.core.get.call(null,map__40326__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__40326__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__40327 = base;var w = cljs.core.nth.call(null,vec__40327,(0),null);var h = cljs.core.nth.call(null,vec__40327,(1),null);var max_v = cljs.core.nth.call(null,vec__40327,(2),null);var min_v = cljs.core.nth.call(null,vec__40327,(3),null);var offset_v = cljs.core.nth.call(null,vec__40327,(4),null);var offset_x = cljs.core.nth.call(null,vec__40327,(5),null);var pos_y = cljs.core.nth.call(null,vec__40327,(6),null);(ctx["fillStyle"] = "black");
var seq__40328 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__40327,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40326,map__40326__$1,kline,info){
return (function() { 
var G__40336__delegate = function (args){return args;
};
var G__40336 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40336__delegate.call(this,args);};
G__40336.cljs$lang$maxFixedArity = 0;
G__40336.cljs$lang$applyTo = (function (arglist__40337){
var args = cljs.core.seq(arglist__40337);
return G__40336__delegate(args);
});
G__40336.cljs$core$IFn$_invoke$arity$variadic = G__40336__delegate;
return G__40336;
})()
;})(vec__40327,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40326,map__40326__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__40329 = null;var count__40330 = (0);var i__40331 = (0);while(true){
if((i__40331 < count__40330))
{var vec__40332 = cljs.core._nth.call(null,chunk__40329,i__40331);var idx = cljs.core.nth.call(null,vec__40332,(0),null);var vec__40333 = cljs.core.nth.call(null,vec__40332,(1),null);var date = cljs.core.nth.call(null,vec__40333,(0),null);var open = cljs.core.nth.call(null,vec__40333,(1),null);var high = cljs.core.nth.call(null,vec__40333,(2),null);var low = cljs.core.nth.call(null,vec__40333,(3),null);var close = cljs.core.nth.call(null,vec__40333,(4),null);var volume = cljs.core.nth.call(null,vec__40333,(5),null);var info__$1 = cljs.core.nth.call(null,vec__40332,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__40338 = seq__40328;
var G__40339 = chunk__40329;
var G__40340 = count__40330;
var G__40341 = (i__40331 + (1));
seq__40328 = G__40338;
chunk__40329 = G__40339;
count__40330 = G__40340;
i__40331 = G__40341;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40328);if(temp__4126__auto__)
{var seq__40328__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40328__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40328__$1);{
var G__40342 = cljs.core.chunk_rest.call(null,seq__40328__$1);
var G__40343 = c__4307__auto__;
var G__40344 = cljs.core.count.call(null,c__4307__auto__);
var G__40345 = (0);
seq__40328 = G__40342;
chunk__40329 = G__40343;
count__40330 = G__40344;
i__40331 = G__40345;
continue;
}
} else
{var vec__40334 = cljs.core.first.call(null,seq__40328__$1);var idx = cljs.core.nth.call(null,vec__40334,(0),null);var vec__40335 = cljs.core.nth.call(null,vec__40334,(1),null);var date = cljs.core.nth.call(null,vec__40335,(0),null);var open = cljs.core.nth.call(null,vec__40335,(1),null);var high = cljs.core.nth.call(null,vec__40335,(2),null);var low = cljs.core.nth.call(null,vec__40335,(3),null);var close = cljs.core.nth.call(null,vec__40335,(4),null);var volume = cljs.core.nth.call(null,vec__40335,(5),null);var info__$1 = cljs.core.nth.call(null,vec__40334,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__40346 = cljs.core.next.call(null,seq__40328__$1);
var G__40347 = null;
var G__40348 = (0);
var G__40349 = (0);
seq__40328 = G__40346;
chunk__40329 = G__40347;
count__40330 = G__40348;
i__40331 = G__40349;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__40350){var map__40351 = p__40350;var map__40351__$1 = ((cljs.core.seq_QMARK_.call(null,map__40351))?cljs.core.apply.call(null,cljs.core.hash_map,map__40351):map__40351);var cz = cljs.core.get.call(null,map__40351__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__40352){var map__40353 = p__40352;var map__40353__$1 = ((cljs.core.seq_QMARK_.call(null,map__40353))?cljs.core.apply.call(null,cljs.core.hash_map,map__40353):map__40353);var cz = cljs.core.get.call(null,map__40353__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__40354,base,ctx){var map__40355 = p__40354;var map__40355__$1 = ((cljs.core.seq_QMARK_.call(null,map__40355))?cljs.core.apply.call(null,cljs.core.hash_map,map__40355):map__40355);var cz = cljs.core.get.call(null,map__40355__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__40355__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__40355__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__40356 = base;var w = cljs.core.nth.call(null,vec__40356,(0),null);var h = cljs.core.nth.call(null,vec__40356,(1),null);var max_v = cljs.core.nth.call(null,vec__40356,(2),null);var min_v = cljs.core.nth.call(null,vec__40356,(3),null);var offset_v = cljs.core.nth.call(null,vec__40356,(4),null);var offset_x = cljs.core.nth.call(null,vec__40356,(5),null);var pos_y = cljs.core.nth.call(null,vec__40356,(6),null);var proj_x = ((function (vec__40356,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40355,map__40355__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__40356,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__40355,map__40355__$1,cz,vz,color))
;var proj_y = ((function (vec__40356,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__40355,map__40355__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__40356,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__40355,map__40355__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__40357 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__40356,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__40355,map__40355__$1,cz,vz,color){
return (function() { 
var G__40363__delegate = function (args){return args;
};
var G__40363 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40363__delegate.call(this,args);};
G__40363.cljs$lang$maxFixedArity = 0;
G__40363.cljs$lang$applyTo = (function (arglist__40364){
var args = cljs.core.seq(arglist__40364);
return G__40363__delegate(args);
});
G__40363.cljs$core$IFn$_invoke$arity$variadic = G__40363__delegate;
return G__40363;
})()
;})(vec__40356,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__40355,map__40355__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__40358 = null;var count__40359 = (0);var i__40360 = (0);while(true){
if((i__40360 < count__40359))
{var vec__40361 = cljs.core._nth.call(null,chunk__40358,i__40360);var idx = cljs.core.nth.call(null,vec__40361,(0),null);var pc = cljs.core.nth.call(null,vec__40361,(1),null);var cc = cljs.core.nth.call(null,vec__40361,(2),null);var pv = cljs.core.nth.call(null,vec__40361,(3),null);var cv = cljs.core.nth.call(null,vec__40361,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__40365 = seq__40357;
var G__40366 = chunk__40358;
var G__40367 = count__40359;
var G__40368 = (i__40360 + (1));
seq__40357 = G__40365;
chunk__40358 = G__40366;
count__40359 = G__40367;
i__40360 = G__40368;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40357);if(temp__4126__auto__)
{var seq__40357__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40357__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__40357__$1);{
var G__40369 = cljs.core.chunk_rest.call(null,seq__40357__$1);
var G__40370 = c__4307__auto__;
var G__40371 = cljs.core.count.call(null,c__4307__auto__);
var G__40372 = (0);
seq__40357 = G__40369;
chunk__40358 = G__40370;
count__40359 = G__40371;
i__40360 = G__40372;
continue;
}
} else
{var vec__40362 = cljs.core.first.call(null,seq__40357__$1);var idx = cljs.core.nth.call(null,vec__40362,(0),null);var pc = cljs.core.nth.call(null,vec__40362,(1),null);var cc = cljs.core.nth.call(null,vec__40362,(2),null);var pv = cljs.core.nth.call(null,vec__40362,(3),null);var cv = cljs.core.nth.call(null,vec__40362,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__40373 = cljs.core.next.call(null,seq__40357__$1);
var G__40374 = null;
var G__40375 = (0);
var G__40376 = (0);
seq__40357 = G__40373;
chunk__40358 = G__40374;
count__40359 = G__40375;
i__40360 = G__40376;
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
