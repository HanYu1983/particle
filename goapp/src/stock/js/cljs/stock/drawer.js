// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27232){var map__27233 = p__27232;var map__27233__$1 = ((cljs.core.seq_QMARK_.call(null,map__27233))?cljs.core.apply.call(null,cljs.core.hash_map,map__27233):map__27233);var t = cljs.core.get.call(null,map__27233__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27234){var map__27235 = p__27234;var map__27235__$1 = ((cljs.core.seq_QMARK_.call(null,map__27235))?cljs.core.apply.call(null,cljs.core.hash_map,map__27235):map__27235);var t = cljs.core.get.call(null,map__27235__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27236){var map__27237 = p__27236;var map__27237__$1 = ((cljs.core.seq_QMARK_.call(null,map__27237))?cljs.core.apply.call(null,cljs.core.hash_map,map__27237):map__27237);var t = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__27238,base,ctx){var map__27239 = p__27238;var map__27239__$1 = ((cljs.core.seq_QMARK_.call(null,map__27239))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);var t = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__27240,w,h,ctx){var map__27246 = p__27240;var map__27246__$1 = ((cljs.core.seq_QMARK_.call(null,map__27246))?cljs.core.apply.call(null,cljs.core.hash_map,map__27246):map__27246);var info = map__27246__$1;var drawers = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__27247 = cljs.core.seq.call(null,drawers);var chunk__27248 = null;var count__27249 = (0);var i__27250 = (0);while(true){
if((i__27250 < count__27249))
{var drawer = cljs.core._nth.call(null,chunk__27248,i__27250);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__27251 = seq__27247;
var G__27252 = chunk__27248;
var G__27253 = count__27249;
var G__27254 = (i__27250 + (1));
seq__27247 = G__27251;
chunk__27248 = G__27252;
count__27249 = G__27253;
i__27250 = G__27254;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27247);if(temp__4126__auto__)
{var seq__27247__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27247__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27247__$1);{
var G__27255 = cljs.core.chunk_rest.call(null,seq__27247__$1);
var G__27256 = c__4307__auto__;
var G__27257 = cljs.core.count.call(null,c__4307__auto__);
var G__27258 = (0);
seq__27247 = G__27255;
chunk__27248 = G__27256;
count__27249 = G__27257;
i__27250 = G__27258;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__27247__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__27259 = cljs.core.next.call(null,seq__27247__$1);
var G__27260 = null;
var G__27261 = (0);
var G__27262 = (0);
seq__27247 = G__27259;
chunk__27248 = G__27260;
count__27249 = G__27261;
i__27250 = G__27262;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27263){var map__27264 = p__27263;var map__27264__$1 = ((cljs.core.seq_QMARK_.call(null,map__27264))?cljs.core.apply.call(null,cljs.core.hash_map,map__27264):map__27264);var line = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27265){var map__27266 = p__27265;var map__27266__$1 = ((cljs.core.seq_QMARK_.call(null,map__27266))?cljs.core.apply.call(null,cljs.core.hash_map,map__27266):map__27266);var line = cljs.core.get.call(null,map__27266__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27266__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27267){var map__27268 = p__27267;var map__27268__$1 = ((cljs.core.seq_QMARK_.call(null,map__27268))?cljs.core.apply.call(null,cljs.core.hash_map,map__27268):map__27268);var line = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__27269,base,ctx){var map__27270 = p__27269;var map__27270__$1 = ((cljs.core.seq_QMARK_.call(null,map__27270))?cljs.core.apply.call(null,cljs.core.hash_map,map__27270):map__27270);var line = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var centerY = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));var vec__27271 = base;var w = cljs.core.nth.call(null,vec__27271,(0),null);var h = cljs.core.nth.call(null,vec__27271,(1),null);var max_v = cljs.core.nth.call(null,vec__27271,(2),null);var min_v = cljs.core.nth.call(null,vec__27271,(3),null);var offset_v = cljs.core.nth.call(null,vec__27271,(4),null);var offset_x = cljs.core.nth.call(null,vec__27271,(5),null);var pos_y = cljs.core.nth.call(null,vec__27271,(6),null);var cnt = (10);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__27272_27284 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__27273_27285 = null;var count__27274_27286 = (0);var i__27275_27287 = (0);while(true){
if((i__27275_27287 < count__27274_27286))
{var i_27288 = cljs.core._nth.call(null,chunk__27273_27285,i__27275_27287);var v_27289 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_27288 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27289.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27289));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27289.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27289));
ctx.moveTo((0),pos_y.call(null,v_27289));
ctx.lineTo(w,pos_y.call(null,v_27289));
var v_27290 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_27288 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27290.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27290));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27290.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27290));
ctx.moveTo((0),pos_y.call(null,v_27290));
ctx.lineTo(w,pos_y.call(null,v_27290));
{
var G__27291 = seq__27272_27284;
var G__27292 = chunk__27273_27285;
var G__27293 = count__27274_27286;
var G__27294 = (i__27275_27287 + (1));
seq__27272_27284 = G__27291;
chunk__27273_27285 = G__27292;
count__27274_27286 = G__27293;
i__27275_27287 = G__27294;
continue;
}
} else
{var temp__4126__auto___27295 = cljs.core.seq.call(null,seq__27272_27284);if(temp__4126__auto___27295)
{var seq__27272_27296__$1 = temp__4126__auto___27295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27272_27296__$1))
{var c__4307__auto___27297 = cljs.core.chunk_first.call(null,seq__27272_27296__$1);{
var G__27298 = cljs.core.chunk_rest.call(null,seq__27272_27296__$1);
var G__27299 = c__4307__auto___27297;
var G__27300 = cljs.core.count.call(null,c__4307__auto___27297);
var G__27301 = (0);
seq__27272_27284 = G__27298;
chunk__27273_27285 = G__27299;
count__27274_27286 = G__27300;
i__27275_27287 = G__27301;
continue;
}
} else
{var i_27302 = cljs.core.first.call(null,seq__27272_27296__$1);var v_27303 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() - (i_27302 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27303.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27303));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27303.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27303));
ctx.moveTo((0),pos_y.call(null,v_27303));
ctx.lineTo(w,pos_y.call(null,v_27303));
var v_27304 = ((function (){var or__3551__auto__ = centerY;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return min_v;
}
})() + (i_27302 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27304.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_27304));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27304.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_27304));
ctx.moveTo((0),pos_y.call(null,v_27304));
ctx.lineTo(w,pos_y.call(null,v_27304));
{
var G__27305 = cljs.core.next.call(null,seq__27272_27296__$1);
var G__27306 = null;
var G__27307 = (0);
var G__27308 = (0);
seq__27272_27284 = G__27305;
chunk__27273_27285 = G__27306;
count__27274_27286 = G__27307;
i__27275_27287 = G__27308;
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
{var seq__27276_27309 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__27277_27310 = null;var count__27278_27311 = (0);var i__27279_27312 = (0);while(true){
if((i__27279_27312 < count__27278_27311))
{var i_27313 = cljs.core._nth.call(null,chunk__27277_27310,i__27279_27312);if((cljs.core.mod.call(null,i_27313,cntx) === (0)))
{var posx_27314 = ((offset_x / (2)) + (i_27313 * offset_x));ctx.moveTo(posx_27314,(0));
ctx.lineTo(posx_27314,h);
} else
{}
{
var G__27315 = seq__27276_27309;
var G__27316 = chunk__27277_27310;
var G__27317 = count__27278_27311;
var G__27318 = (i__27279_27312 + (1));
seq__27276_27309 = G__27315;
chunk__27277_27310 = G__27316;
count__27278_27311 = G__27317;
i__27279_27312 = G__27318;
continue;
}
} else
{var temp__4126__auto___27319 = cljs.core.seq.call(null,seq__27276_27309);if(temp__4126__auto___27319)
{var seq__27276_27320__$1 = temp__4126__auto___27319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27276_27320__$1))
{var c__4307__auto___27321 = cljs.core.chunk_first.call(null,seq__27276_27320__$1);{
var G__27322 = cljs.core.chunk_rest.call(null,seq__27276_27320__$1);
var G__27323 = c__4307__auto___27321;
var G__27324 = cljs.core.count.call(null,c__4307__auto___27321);
var G__27325 = (0);
seq__27276_27309 = G__27322;
chunk__27277_27310 = G__27323;
count__27278_27311 = G__27324;
i__27279_27312 = G__27325;
continue;
}
} else
{var i_27326 = cljs.core.first.call(null,seq__27276_27320__$1);if((cljs.core.mod.call(null,i_27326,cntx) === (0)))
{var posx_27327 = ((offset_x / (2)) + (i_27326 * offset_x));ctx.moveTo(posx_27327,(0));
ctx.lineTo(posx_27327,h);
} else
{}
{
var G__27328 = cljs.core.next.call(null,seq__27276_27320__$1);
var G__27329 = null;
var G__27330 = (0);
var G__27331 = (0);
seq__27276_27309 = G__27328;
chunk__27277_27310 = G__27329;
count__27278_27311 = G__27330;
i__27279_27312 = G__27331;
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
{var seq__27280_27332 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__27281_27333 = null;var count__27282_27334 = (0);var i__27283_27335 = (0);while(true){
if((i__27283_27335 < count__27282_27334))
{var i_27336 = cljs.core._nth.call(null,chunk__27281_27333,i__27283_27335);if((cljs.core.mod.call(null,i_27336,cntx) === (0)))
{var posx_27337 = ((offset_x / (2)) + (i_27336 * offset_x));ctx.moveTo(posx_27337,(0));
ctx.lineTo(posx_27337,h);
} else
{}
{
var G__27338 = seq__27280_27332;
var G__27339 = chunk__27281_27333;
var G__27340 = count__27282_27334;
var G__27341 = (i__27283_27335 + (1));
seq__27280_27332 = G__27338;
chunk__27281_27333 = G__27339;
count__27282_27334 = G__27340;
i__27283_27335 = G__27341;
continue;
}
} else
{var temp__4126__auto___27342 = cljs.core.seq.call(null,seq__27280_27332);if(temp__4126__auto___27342)
{var seq__27280_27343__$1 = temp__4126__auto___27342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27280_27343__$1))
{var c__4307__auto___27344 = cljs.core.chunk_first.call(null,seq__27280_27343__$1);{
var G__27345 = cljs.core.chunk_rest.call(null,seq__27280_27343__$1);
var G__27346 = c__4307__auto___27344;
var G__27347 = cljs.core.count.call(null,c__4307__auto___27344);
var G__27348 = (0);
seq__27280_27332 = G__27345;
chunk__27281_27333 = G__27346;
count__27282_27334 = G__27347;
i__27283_27335 = G__27348;
continue;
}
} else
{var i_27349 = cljs.core.first.call(null,seq__27280_27343__$1);if((cljs.core.mod.call(null,i_27349,cntx) === (0)))
{var posx_27350 = ((offset_x / (2)) + (i_27349 * offset_x));ctx.moveTo(posx_27350,(0));
ctx.lineTo(posx_27350,h);
} else
{}
{
var G__27351 = cljs.core.next.call(null,seq__27280_27343__$1);
var G__27352 = null;
var G__27353 = (0);
var G__27354 = (0);
seq__27280_27332 = G__27351;
chunk__27281_27333 = G__27352;
count__27282_27334 = G__27353;
i__27283_27335 = G__27354;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27355){var map__27356 = p__27355;var map__27356__$1 = ((cljs.core.seq_QMARK_.call(null,map__27356))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);var line = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27357){var map__27358 = p__27357;var map__27358__$1 = ((cljs.core.seq_QMARK_.call(null,map__27358))?cljs.core.apply.call(null,cljs.core.hash_map,map__27358):map__27358);var line = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27359){var map__27360 = p__27359;var map__27360__$1 = ((cljs.core.seq_QMARK_.call(null,map__27360))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);var line = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__27361,base,ctx){var map__27362 = p__27361;var map__27362__$1 = ((cljs.core.seq_QMARK_.call(null,map__27362))?cljs.core.apply.call(null,cljs.core.hash_map,map__27362):map__27362);var line = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__27363 = base;var w = cljs.core.nth.call(null,vec__27363,(0),null);var h = cljs.core.nth.call(null,vec__27363,(1),null);var max_v = cljs.core.nth.call(null,vec__27363,(2),null);var min_v = cljs.core.nth.call(null,vec__27363,(3),null);var offset_v = cljs.core.nth.call(null,vec__27363,(4),null);var offset_x = cljs.core.nth.call(null,vec__27363,(5),null);var pos_y = cljs.core.nth.call(null,vec__27363,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__27364 = cljs.core._EQ_;var expr__27365 = style;if(cljs.core.truth_(pred__27364.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__27365)))
{(ctx["fillStyle"] = color);
var seq__27367 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__27368 = null;var count__27369 = (0);var i__27370 = (0);while(true){
if((i__27370 < count__27369))
{var vec__27371 = cljs.core._nth.call(null,chunk__27368,i__27370);var idx = cljs.core.nth.call(null,vec__27371,(0),null);var value = cljs.core.nth.call(null,vec__27371,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__27379 = seq__27367;
var G__27380 = chunk__27368;
var G__27381 = count__27369;
var G__27382 = (i__27370 + (1));
seq__27367 = G__27379;
chunk__27368 = G__27380;
count__27369 = G__27381;
i__27370 = G__27382;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27367);if(temp__4126__auto__)
{var seq__27367__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27367__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27367__$1);{
var G__27383 = cljs.core.chunk_rest.call(null,seq__27367__$1);
var G__27384 = c__4307__auto__;
var G__27385 = cljs.core.count.call(null,c__4307__auto__);
var G__27386 = (0);
seq__27367 = G__27383;
chunk__27368 = G__27384;
count__27369 = G__27385;
i__27370 = G__27386;
continue;
}
} else
{var vec__27372 = cljs.core.first.call(null,seq__27367__$1);var idx = cljs.core.nth.call(null,vec__27372,(0),null);var value = cljs.core.nth.call(null,vec__27372,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__27387 = cljs.core.next.call(null,seq__27367__$1);
var G__27388 = null;
var G__27389 = (0);
var G__27390 = (0);
seq__27367 = G__27387;
chunk__27368 = G__27388;
count__27369 = G__27389;
i__27370 = G__27390;
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
var seq__27373_27391 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__27364,expr__27365,vec__27363,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__27362,map__27362__$1,line,color,offset,style){
return (function() { 
var G__27395__delegate = function (args){return args;
};
var G__27395 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27395__delegate.call(this,args);};
G__27395.cljs$lang$maxFixedArity = 0;
G__27395.cljs$lang$applyTo = (function (arglist__27396){
var args = cljs.core.seq(arglist__27396);
return G__27395__delegate(args);
});
G__27395.cljs$core$IFn$_invoke$arity$variadic = G__27395__delegate;
return G__27395;
})()
;})(pred__27364,expr__27365,vec__27363,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__27362,map__27362__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__27374_27392 = null;var count__27375_27393 = (0);var i__27376_27394 = (0);while(true){
if((i__27376_27394 < count__27375_27393))
{var vec__27377_27397 = cljs.core._nth.call(null,chunk__27374_27392,i__27376_27394);var idx_27398 = cljs.core.nth.call(null,vec__27377_27397,(0),null);var prev_27399 = cljs.core.nth.call(null,vec__27377_27397,(1),null);var curr_27400 = cljs.core.nth.call(null,vec__27377_27397,(2),null);ctx.moveTo(((idx_27398 + offset__$1) * offset_x),pos_y.call(null,prev_27399));
ctx.lineTo((((idx_27398 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_27400));
{
var G__27401 = seq__27373_27391;
var G__27402 = chunk__27374_27392;
var G__27403 = count__27375_27393;
var G__27404 = (i__27376_27394 + (1));
seq__27373_27391 = G__27401;
chunk__27374_27392 = G__27402;
count__27375_27393 = G__27403;
i__27376_27394 = G__27404;
continue;
}
} else
{var temp__4126__auto___27405 = cljs.core.seq.call(null,seq__27373_27391);if(temp__4126__auto___27405)
{var seq__27373_27406__$1 = temp__4126__auto___27405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27373_27406__$1))
{var c__4307__auto___27407 = cljs.core.chunk_first.call(null,seq__27373_27406__$1);{
var G__27408 = cljs.core.chunk_rest.call(null,seq__27373_27406__$1);
var G__27409 = c__4307__auto___27407;
var G__27410 = cljs.core.count.call(null,c__4307__auto___27407);
var G__27411 = (0);
seq__27373_27391 = G__27408;
chunk__27374_27392 = G__27409;
count__27375_27393 = G__27410;
i__27376_27394 = G__27411;
continue;
}
} else
{var vec__27378_27412 = cljs.core.first.call(null,seq__27373_27406__$1);var idx_27413 = cljs.core.nth.call(null,vec__27378_27412,(0),null);var prev_27414 = cljs.core.nth.call(null,vec__27378_27412,(1),null);var curr_27415 = cljs.core.nth.call(null,vec__27378_27412,(2),null);ctx.moveTo(((idx_27413 + offset__$1) * offset_x),pos_y.call(null,prev_27414));
ctx.lineTo((((idx_27413 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_27415));
{
var G__27416 = cljs.core.next.call(null,seq__27373_27406__$1);
var G__27417 = null;
var G__27418 = (0);
var G__27419 = (0);
seq__27373_27391 = G__27416;
chunk__27374_27392 = G__27417;
count__27375_27393 = G__27418;
i__27376_27394 = G__27419;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27420){var map__27421 = p__27420;var map__27421__$1 = ((cljs.core.seq_QMARK_.call(null,map__27421))?cljs.core.apply.call(null,cljs.core.hash_map,map__27421):map__27421);var kline = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27422){var map__27423 = p__27422;var map__27423__$1 = ((cljs.core.seq_QMARK_.call(null,map__27423))?cljs.core.apply.call(null,cljs.core.hash_map,map__27423):map__27423);var kline = cljs.core.get.call(null,map__27423__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27424){var map__27425 = p__27424;var map__27425__$1 = ((cljs.core.seq_QMARK_.call(null,map__27425))?cljs.core.apply.call(null,cljs.core.hash_map,map__27425):map__27425);var kline = cljs.core.get.call(null,map__27425__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__27426,base,ctx){var map__27427 = p__27426;var map__27427__$1 = ((cljs.core.seq_QMARK_.call(null,map__27427))?cljs.core.apply.call(null,cljs.core.hash_map,map__27427):map__27427);var kline = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__27428 = base;var w = cljs.core.nth.call(null,vec__27428,(0),null);var h = cljs.core.nth.call(null,vec__27428,(1),null);var max_v = cljs.core.nth.call(null,vec__27428,(2),null);var min_v = cljs.core.nth.call(null,vec__27428,(3),null);var offset_v = cljs.core.nth.call(null,vec__27428,(4),null);var offset_x = cljs.core.nth.call(null,vec__27428,(5),null);var pos_y = cljs.core.nth.call(null,vec__27428,(6),null);(ctx["fillStyle"] = "black");
var seq__27429 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__27428,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27427,map__27427__$1,kline,info){
return (function() { 
var G__27437__delegate = function (args){return args;
};
var G__27437 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27437__delegate.call(this,args);};
G__27437.cljs$lang$maxFixedArity = 0;
G__27437.cljs$lang$applyTo = (function (arglist__27438){
var args = cljs.core.seq(arglist__27438);
return G__27437__delegate(args);
});
G__27437.cljs$core$IFn$_invoke$arity$variadic = G__27437__delegate;
return G__27437;
})()
;})(vec__27428,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27427,map__27427__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__27430 = null;var count__27431 = (0);var i__27432 = (0);while(true){
if((i__27432 < count__27431))
{var vec__27433 = cljs.core._nth.call(null,chunk__27430,i__27432);var idx = cljs.core.nth.call(null,vec__27433,(0),null);var vec__27434 = cljs.core.nth.call(null,vec__27433,(1),null);var date = cljs.core.nth.call(null,vec__27434,(0),null);var open = cljs.core.nth.call(null,vec__27434,(1),null);var high = cljs.core.nth.call(null,vec__27434,(2),null);var low = cljs.core.nth.call(null,vec__27434,(3),null);var close = cljs.core.nth.call(null,vec__27434,(4),null);var volume = cljs.core.nth.call(null,vec__27434,(5),null);var info__$1 = cljs.core.nth.call(null,vec__27433,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__27439 = seq__27429;
var G__27440 = chunk__27430;
var G__27441 = count__27431;
var G__27442 = (i__27432 + (1));
seq__27429 = G__27439;
chunk__27430 = G__27440;
count__27431 = G__27441;
i__27432 = G__27442;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27429);if(temp__4126__auto__)
{var seq__27429__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27429__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27429__$1);{
var G__27443 = cljs.core.chunk_rest.call(null,seq__27429__$1);
var G__27444 = c__4307__auto__;
var G__27445 = cljs.core.count.call(null,c__4307__auto__);
var G__27446 = (0);
seq__27429 = G__27443;
chunk__27430 = G__27444;
count__27431 = G__27445;
i__27432 = G__27446;
continue;
}
} else
{var vec__27435 = cljs.core.first.call(null,seq__27429__$1);var idx = cljs.core.nth.call(null,vec__27435,(0),null);var vec__27436 = cljs.core.nth.call(null,vec__27435,(1),null);var date = cljs.core.nth.call(null,vec__27436,(0),null);var open = cljs.core.nth.call(null,vec__27436,(1),null);var high = cljs.core.nth.call(null,vec__27436,(2),null);var low = cljs.core.nth.call(null,vec__27436,(3),null);var close = cljs.core.nth.call(null,vec__27436,(4),null);var volume = cljs.core.nth.call(null,vec__27436,(5),null);var info__$1 = cljs.core.nth.call(null,vec__27435,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__27447 = cljs.core.next.call(null,seq__27429__$1);
var G__27448 = null;
var G__27449 = (0);
var G__27450 = (0);
seq__27429 = G__27447;
chunk__27430 = G__27448;
count__27431 = G__27449;
i__27432 = G__27450;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__27451){var map__27452 = p__27451;var map__27452__$1 = ((cljs.core.seq_QMARK_.call(null,map__27452))?cljs.core.apply.call(null,cljs.core.hash_map,map__27452):map__27452);var cz = cljs.core.get.call(null,map__27452__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__27453){var map__27454 = p__27453;var map__27454__$1 = ((cljs.core.seq_QMARK_.call(null,map__27454))?cljs.core.apply.call(null,cljs.core.hash_map,map__27454):map__27454);var cz = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__27455,base,ctx){var map__27456 = p__27455;var map__27456__$1 = ((cljs.core.seq_QMARK_.call(null,map__27456))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);var cz = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__27457 = base;var w = cljs.core.nth.call(null,vec__27457,(0),null);var h = cljs.core.nth.call(null,vec__27457,(1),null);var max_v = cljs.core.nth.call(null,vec__27457,(2),null);var min_v = cljs.core.nth.call(null,vec__27457,(3),null);var offset_v = cljs.core.nth.call(null,vec__27457,(4),null);var offset_x = cljs.core.nth.call(null,vec__27457,(5),null);var pos_y = cljs.core.nth.call(null,vec__27457,(6),null);var proj_x = ((function (vec__27457,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27456,map__27456__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__27457,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__27456,map__27456__$1,cz,vz,color))
;var proj_y = ((function (vec__27457,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__27456,map__27456__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__27457,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__27456,map__27456__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__27458 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__27457,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__27456,map__27456__$1,cz,vz,color){
return (function() { 
var G__27464__delegate = function (args){return args;
};
var G__27464 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27464__delegate.call(this,args);};
G__27464.cljs$lang$maxFixedArity = 0;
G__27464.cljs$lang$applyTo = (function (arglist__27465){
var args = cljs.core.seq(arglist__27465);
return G__27464__delegate(args);
});
G__27464.cljs$core$IFn$_invoke$arity$variadic = G__27464__delegate;
return G__27464;
})()
;})(vec__27457,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__27456,map__27456__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__27459 = null;var count__27460 = (0);var i__27461 = (0);while(true){
if((i__27461 < count__27460))
{var vec__27462 = cljs.core._nth.call(null,chunk__27459,i__27461);var idx = cljs.core.nth.call(null,vec__27462,(0),null);var pc = cljs.core.nth.call(null,vec__27462,(1),null);var cc = cljs.core.nth.call(null,vec__27462,(2),null);var pv = cljs.core.nth.call(null,vec__27462,(3),null);var cv = cljs.core.nth.call(null,vec__27462,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__27466 = seq__27458;
var G__27467 = chunk__27459;
var G__27468 = count__27460;
var G__27469 = (i__27461 + (1));
seq__27458 = G__27466;
chunk__27459 = G__27467;
count__27460 = G__27468;
i__27461 = G__27469;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27458);if(temp__4126__auto__)
{var seq__27458__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27458__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__27458__$1);{
var G__27470 = cljs.core.chunk_rest.call(null,seq__27458__$1);
var G__27471 = c__4307__auto__;
var G__27472 = cljs.core.count.call(null,c__4307__auto__);
var G__27473 = (0);
seq__27458 = G__27470;
chunk__27459 = G__27471;
count__27460 = G__27472;
i__27461 = G__27473;
continue;
}
} else
{var vec__27463 = cljs.core.first.call(null,seq__27458__$1);var idx = cljs.core.nth.call(null,vec__27463,(0),null);var pc = cljs.core.nth.call(null,vec__27463,(1),null);var cc = cljs.core.nth.call(null,vec__27463,(2),null);var pv = cljs.core.nth.call(null,vec__27463,(3),null);var cv = cljs.core.nth.call(null,vec__27463,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__27474 = cljs.core.next.call(null,seq__27458__$1);
var G__27475 = null;
var G__27476 = (0);
var G__27477 = (0);
seq__27458 = G__27474;
chunk__27459 = G__27475;
count__27460 = G__27476;
i__27461 = G__27477;
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
