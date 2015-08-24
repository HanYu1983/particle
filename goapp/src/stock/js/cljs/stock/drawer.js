// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31257){var map__31258 = p__31257;var map__31258__$1 = ((cljs.core.seq_QMARK_.call(null,map__31258))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);var t = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31259){var map__31260 = p__31259;var map__31260__$1 = ((cljs.core.seq_QMARK_.call(null,map__31260))?cljs.core.apply.call(null,cljs.core.hash_map,map__31260):map__31260);var t = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31261){var map__31262 = p__31261;var map__31262__$1 = ((cljs.core.seq_QMARK_.call(null,map__31262))?cljs.core.apply.call(null,cljs.core.hash_map,map__31262):map__31262);var t = cljs.core.get.call(null,map__31262__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__31263,base,ctx){var map__31264 = p__31263;var map__31264__$1 = ((cljs.core.seq_QMARK_.call(null,map__31264))?cljs.core.apply.call(null,cljs.core.hash_map,map__31264):map__31264);var t = cljs.core.get.call(null,map__31264__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__31265,w,h,ctx){var map__31271 = p__31265;var map__31271__$1 = ((cljs.core.seq_QMARK_.call(null,map__31271))?cljs.core.apply.call(null,cljs.core.hash_map,map__31271):map__31271);var info = map__31271__$1;var drawers = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__31272 = cljs.core.seq.call(null,drawers);var chunk__31273 = null;var count__31274 = (0);var i__31275 = (0);while(true){
if((i__31275 < count__31274))
{var drawer = cljs.core._nth.call(null,chunk__31273,i__31275);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__31276 = seq__31272;
var G__31277 = chunk__31273;
var G__31278 = count__31274;
var G__31279 = (i__31275 + (1));
seq__31272 = G__31276;
chunk__31273 = G__31277;
count__31274 = G__31278;
i__31275 = G__31279;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31272);if(temp__4126__auto__)
{var seq__31272__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31272__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31272__$1);{
var G__31280 = cljs.core.chunk_rest.call(null,seq__31272__$1);
var G__31281 = c__4307__auto__;
var G__31282 = cljs.core.count.call(null,c__4307__auto__);
var G__31283 = (0);
seq__31272 = G__31280;
chunk__31273 = G__31281;
count__31274 = G__31282;
i__31275 = G__31283;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__31272__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__31284 = cljs.core.next.call(null,seq__31272__$1);
var G__31285 = null;
var G__31286 = (0);
var G__31287 = (0);
seq__31272 = G__31284;
chunk__31273 = G__31285;
count__31274 = G__31286;
i__31275 = G__31287;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31288){var map__31289 = p__31288;var map__31289__$1 = ((cljs.core.seq_QMARK_.call(null,map__31289))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);var line = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31290){var map__31291 = p__31290;var map__31291__$1 = ((cljs.core.seq_QMARK_.call(null,map__31291))?cljs.core.apply.call(null,cljs.core.hash_map,map__31291):map__31291);var line = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31292){var map__31293 = p__31292;var map__31293__$1 = ((cljs.core.seq_QMARK_.call(null,map__31293))?cljs.core.apply.call(null,cljs.core.hash_map,map__31293):map__31293);var line = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__31294,base,ctx){var map__31295 = p__31294;var map__31295__$1 = ((cljs.core.seq_QMARK_.call(null,map__31295))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);var line = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__31296 = base;var w = cljs.core.nth.call(null,vec__31296,(0),null);var h = cljs.core.nth.call(null,vec__31296,(1),null);var max_v = cljs.core.nth.call(null,vec__31296,(2),null);var min_v = cljs.core.nth.call(null,vec__31296,(3),null);var offset_v = cljs.core.nth.call(null,vec__31296,(4),null);var offset_x = cljs.core.nth.call(null,vec__31296,(5),null);var pos_y = cljs.core.nth.call(null,vec__31296,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__31297_31309 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__31298_31310 = null;var count__31299_31311 = (0);var i__31300_31312 = (0);while(true){
if((i__31300_31312 < count__31299_31311))
{var i_31313 = cljs.core._nth.call(null,chunk__31298_31310,i__31300_31312);var v_31314 = (min_v + (i_31313 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31314.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_31314));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31314.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_31314));
ctx.moveTo((0),pos_y.call(null,v_31314));
ctx.lineTo(w,pos_y.call(null,v_31314));
{
var G__31315 = seq__31297_31309;
var G__31316 = chunk__31298_31310;
var G__31317 = count__31299_31311;
var G__31318 = (i__31300_31312 + (1));
seq__31297_31309 = G__31315;
chunk__31298_31310 = G__31316;
count__31299_31311 = G__31317;
i__31300_31312 = G__31318;
continue;
}
} else
{var temp__4126__auto___31319 = cljs.core.seq.call(null,seq__31297_31309);if(temp__4126__auto___31319)
{var seq__31297_31320__$1 = temp__4126__auto___31319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31297_31320__$1))
{var c__4307__auto___31321 = cljs.core.chunk_first.call(null,seq__31297_31320__$1);{
var G__31322 = cljs.core.chunk_rest.call(null,seq__31297_31320__$1);
var G__31323 = c__4307__auto___31321;
var G__31324 = cljs.core.count.call(null,c__4307__auto___31321);
var G__31325 = (0);
seq__31297_31309 = G__31322;
chunk__31298_31310 = G__31323;
count__31299_31311 = G__31324;
i__31300_31312 = G__31325;
continue;
}
} else
{var i_31326 = cljs.core.first.call(null,seq__31297_31320__$1);var v_31327 = (min_v + (i_31326 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31327.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_31327));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31327.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_31327));
ctx.moveTo((0),pos_y.call(null,v_31327));
ctx.lineTo(w,pos_y.call(null,v_31327));
{
var G__31328 = cljs.core.next.call(null,seq__31297_31320__$1);
var G__31329 = null;
var G__31330 = (0);
var G__31331 = (0);
seq__31297_31309 = G__31328;
chunk__31298_31310 = G__31329;
count__31299_31311 = G__31330;
i__31300_31312 = G__31331;
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
{var seq__31301_31332 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__31302_31333 = null;var count__31303_31334 = (0);var i__31304_31335 = (0);while(true){
if((i__31304_31335 < count__31303_31334))
{var i_31336 = cljs.core._nth.call(null,chunk__31302_31333,i__31304_31335);if((cljs.core.mod.call(null,i_31336,cntx) === (0)))
{var posx_31337 = ((offset_x / (2)) + (i_31336 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_31336)),posx_31337,h);
ctx.moveTo(posx_31337,(0));
ctx.lineTo(posx_31337,h);
} else
{}
{
var G__31338 = seq__31301_31332;
var G__31339 = chunk__31302_31333;
var G__31340 = count__31303_31334;
var G__31341 = (i__31304_31335 + (1));
seq__31301_31332 = G__31338;
chunk__31302_31333 = G__31339;
count__31303_31334 = G__31340;
i__31304_31335 = G__31341;
continue;
}
} else
{var temp__4126__auto___31342 = cljs.core.seq.call(null,seq__31301_31332);if(temp__4126__auto___31342)
{var seq__31301_31343__$1 = temp__4126__auto___31342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31301_31343__$1))
{var c__4307__auto___31344 = cljs.core.chunk_first.call(null,seq__31301_31343__$1);{
var G__31345 = cljs.core.chunk_rest.call(null,seq__31301_31343__$1);
var G__31346 = c__4307__auto___31344;
var G__31347 = cljs.core.count.call(null,c__4307__auto___31344);
var G__31348 = (0);
seq__31301_31332 = G__31345;
chunk__31302_31333 = G__31346;
count__31303_31334 = G__31347;
i__31304_31335 = G__31348;
continue;
}
} else
{var i_31349 = cljs.core.first.call(null,seq__31301_31343__$1);if((cljs.core.mod.call(null,i_31349,cntx) === (0)))
{var posx_31350 = ((offset_x / (2)) + (i_31349 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_31349)),posx_31350,h);
ctx.moveTo(posx_31350,(0));
ctx.lineTo(posx_31350,h);
} else
{}
{
var G__31351 = cljs.core.next.call(null,seq__31301_31343__$1);
var G__31352 = null;
var G__31353 = (0);
var G__31354 = (0);
seq__31301_31332 = G__31351;
chunk__31302_31333 = G__31352;
count__31303_31334 = G__31353;
i__31304_31335 = G__31354;
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
{var seq__31305_31355 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__31306_31356 = null;var count__31307_31357 = (0);var i__31308_31358 = (0);while(true){
if((i__31308_31358 < count__31307_31357))
{var i_31359 = cljs.core._nth.call(null,chunk__31306_31356,i__31308_31358);if((cljs.core.mod.call(null,i_31359,cntx) === (0)))
{var posx_31360 = ((offset_x / (2)) + (i_31359 * offset_x));ctx.moveTo(posx_31360,(0));
ctx.lineTo(posx_31360,h);
} else
{}
{
var G__31361 = seq__31305_31355;
var G__31362 = chunk__31306_31356;
var G__31363 = count__31307_31357;
var G__31364 = (i__31308_31358 + (1));
seq__31305_31355 = G__31361;
chunk__31306_31356 = G__31362;
count__31307_31357 = G__31363;
i__31308_31358 = G__31364;
continue;
}
} else
{var temp__4126__auto___31365 = cljs.core.seq.call(null,seq__31305_31355);if(temp__4126__auto___31365)
{var seq__31305_31366__$1 = temp__4126__auto___31365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31305_31366__$1))
{var c__4307__auto___31367 = cljs.core.chunk_first.call(null,seq__31305_31366__$1);{
var G__31368 = cljs.core.chunk_rest.call(null,seq__31305_31366__$1);
var G__31369 = c__4307__auto___31367;
var G__31370 = cljs.core.count.call(null,c__4307__auto___31367);
var G__31371 = (0);
seq__31305_31355 = G__31368;
chunk__31306_31356 = G__31369;
count__31307_31357 = G__31370;
i__31308_31358 = G__31371;
continue;
}
} else
{var i_31372 = cljs.core.first.call(null,seq__31305_31366__$1);if((cljs.core.mod.call(null,i_31372,cntx) === (0)))
{var posx_31373 = ((offset_x / (2)) + (i_31372 * offset_x));ctx.moveTo(posx_31373,(0));
ctx.lineTo(posx_31373,h);
} else
{}
{
var G__31374 = cljs.core.next.call(null,seq__31305_31366__$1);
var G__31375 = null;
var G__31376 = (0);
var G__31377 = (0);
seq__31305_31355 = G__31374;
chunk__31306_31356 = G__31375;
count__31307_31357 = G__31376;
i__31308_31358 = G__31377;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31378){var map__31379 = p__31378;var map__31379__$1 = ((cljs.core.seq_QMARK_.call(null,map__31379))?cljs.core.apply.call(null,cljs.core.hash_map,map__31379):map__31379);var line = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31380){var map__31381 = p__31380;var map__31381__$1 = ((cljs.core.seq_QMARK_.call(null,map__31381))?cljs.core.apply.call(null,cljs.core.hash_map,map__31381):map__31381);var line = cljs.core.get.call(null,map__31381__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31382){var map__31383 = p__31382;var map__31383__$1 = ((cljs.core.seq_QMARK_.call(null,map__31383))?cljs.core.apply.call(null,cljs.core.hash_map,map__31383):map__31383);var line = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__31384,base,ctx){var map__31385 = p__31384;var map__31385__$1 = ((cljs.core.seq_QMARK_.call(null,map__31385))?cljs.core.apply.call(null,cljs.core.hash_map,map__31385):map__31385);var line = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__31386 = base;var w = cljs.core.nth.call(null,vec__31386,(0),null);var h = cljs.core.nth.call(null,vec__31386,(1),null);var max_v = cljs.core.nth.call(null,vec__31386,(2),null);var min_v = cljs.core.nth.call(null,vec__31386,(3),null);var offset_v = cljs.core.nth.call(null,vec__31386,(4),null);var offset_x = cljs.core.nth.call(null,vec__31386,(5),null);var pos_y = cljs.core.nth.call(null,vec__31386,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__31387 = cljs.core._EQ_;var expr__31388 = style;if(cljs.core.truth_(pred__31387.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__31388)))
{(ctx["fillStyle"] = color);
var seq__31390 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__31391 = null;var count__31392 = (0);var i__31393 = (0);while(true){
if((i__31393 < count__31392))
{var vec__31394 = cljs.core._nth.call(null,chunk__31391,i__31393);var idx = cljs.core.nth.call(null,vec__31394,(0),null);var value = cljs.core.nth.call(null,vec__31394,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__31402 = seq__31390;
var G__31403 = chunk__31391;
var G__31404 = count__31392;
var G__31405 = (i__31393 + (1));
seq__31390 = G__31402;
chunk__31391 = G__31403;
count__31392 = G__31404;
i__31393 = G__31405;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31390);if(temp__4126__auto__)
{var seq__31390__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31390__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31390__$1);{
var G__31406 = cljs.core.chunk_rest.call(null,seq__31390__$1);
var G__31407 = c__4307__auto__;
var G__31408 = cljs.core.count.call(null,c__4307__auto__);
var G__31409 = (0);
seq__31390 = G__31406;
chunk__31391 = G__31407;
count__31392 = G__31408;
i__31393 = G__31409;
continue;
}
} else
{var vec__31395 = cljs.core.first.call(null,seq__31390__$1);var idx = cljs.core.nth.call(null,vec__31395,(0),null);var value = cljs.core.nth.call(null,vec__31395,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__31410 = cljs.core.next.call(null,seq__31390__$1);
var G__31411 = null;
var G__31412 = (0);
var G__31413 = (0);
seq__31390 = G__31410;
chunk__31391 = G__31411;
count__31392 = G__31412;
i__31393 = G__31413;
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
var seq__31396_31414 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__31387,expr__31388,vec__31386,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__31385,map__31385__$1,line,color,offset,style){
return (function() { 
var G__31418__delegate = function (args){return args;
};
var G__31418 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31418__delegate.call(this,args);};
G__31418.cljs$lang$maxFixedArity = 0;
G__31418.cljs$lang$applyTo = (function (arglist__31419){
var args = cljs.core.seq(arglist__31419);
return G__31418__delegate(args);
});
G__31418.cljs$core$IFn$_invoke$arity$variadic = G__31418__delegate;
return G__31418;
})()
;})(pred__31387,expr__31388,vec__31386,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__31385,map__31385__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__31397_31415 = null;var count__31398_31416 = (0);var i__31399_31417 = (0);while(true){
if((i__31399_31417 < count__31398_31416))
{var vec__31400_31420 = cljs.core._nth.call(null,chunk__31397_31415,i__31399_31417);var idx_31421 = cljs.core.nth.call(null,vec__31400_31420,(0),null);var prev_31422 = cljs.core.nth.call(null,vec__31400_31420,(1),null);var curr_31423 = cljs.core.nth.call(null,vec__31400_31420,(2),null);ctx.moveTo(((idx_31421 + offset__$1) * offset_x),pos_y.call(null,prev_31422));
ctx.lineTo((((idx_31421 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_31423));
{
var G__31424 = seq__31396_31414;
var G__31425 = chunk__31397_31415;
var G__31426 = count__31398_31416;
var G__31427 = (i__31399_31417 + (1));
seq__31396_31414 = G__31424;
chunk__31397_31415 = G__31425;
count__31398_31416 = G__31426;
i__31399_31417 = G__31427;
continue;
}
} else
{var temp__4126__auto___31428 = cljs.core.seq.call(null,seq__31396_31414);if(temp__4126__auto___31428)
{var seq__31396_31429__$1 = temp__4126__auto___31428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31396_31429__$1))
{var c__4307__auto___31430 = cljs.core.chunk_first.call(null,seq__31396_31429__$1);{
var G__31431 = cljs.core.chunk_rest.call(null,seq__31396_31429__$1);
var G__31432 = c__4307__auto___31430;
var G__31433 = cljs.core.count.call(null,c__4307__auto___31430);
var G__31434 = (0);
seq__31396_31414 = G__31431;
chunk__31397_31415 = G__31432;
count__31398_31416 = G__31433;
i__31399_31417 = G__31434;
continue;
}
} else
{var vec__31401_31435 = cljs.core.first.call(null,seq__31396_31429__$1);var idx_31436 = cljs.core.nth.call(null,vec__31401_31435,(0),null);var prev_31437 = cljs.core.nth.call(null,vec__31401_31435,(1),null);var curr_31438 = cljs.core.nth.call(null,vec__31401_31435,(2),null);ctx.moveTo(((idx_31436 + offset__$1) * offset_x),pos_y.call(null,prev_31437));
ctx.lineTo((((idx_31436 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_31438));
{
var G__31439 = cljs.core.next.call(null,seq__31396_31429__$1);
var G__31440 = null;
var G__31441 = (0);
var G__31442 = (0);
seq__31396_31414 = G__31439;
chunk__31397_31415 = G__31440;
count__31398_31416 = G__31441;
i__31399_31417 = G__31442;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31443){var map__31444 = p__31443;var map__31444__$1 = ((cljs.core.seq_QMARK_.call(null,map__31444))?cljs.core.apply.call(null,cljs.core.hash_map,map__31444):map__31444);var kline = cljs.core.get.call(null,map__31444__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31445){var map__31446 = p__31445;var map__31446__$1 = ((cljs.core.seq_QMARK_.call(null,map__31446))?cljs.core.apply.call(null,cljs.core.hash_map,map__31446):map__31446);var kline = cljs.core.get.call(null,map__31446__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31447){var map__31448 = p__31447;var map__31448__$1 = ((cljs.core.seq_QMARK_.call(null,map__31448))?cljs.core.apply.call(null,cljs.core.hash_map,map__31448):map__31448);var kline = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__31449,base,ctx){var map__31450 = p__31449;var map__31450__$1 = ((cljs.core.seq_QMARK_.call(null,map__31450))?cljs.core.apply.call(null,cljs.core.hash_map,map__31450):map__31450);var kline = cljs.core.get.call(null,map__31450__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__31450__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__31451 = base;var w = cljs.core.nth.call(null,vec__31451,(0),null);var h = cljs.core.nth.call(null,vec__31451,(1),null);var max_v = cljs.core.nth.call(null,vec__31451,(2),null);var min_v = cljs.core.nth.call(null,vec__31451,(3),null);var offset_v = cljs.core.nth.call(null,vec__31451,(4),null);var offset_x = cljs.core.nth.call(null,vec__31451,(5),null);var pos_y = cljs.core.nth.call(null,vec__31451,(6),null);(ctx["fillStyle"] = "black");
var seq__31452 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__31451,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31450,map__31450__$1,kline,info){
return (function() { 
var G__31460__delegate = function (args){return args;
};
var G__31460 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31460__delegate.call(this,args);};
G__31460.cljs$lang$maxFixedArity = 0;
G__31460.cljs$lang$applyTo = (function (arglist__31461){
var args = cljs.core.seq(arglist__31461);
return G__31460__delegate(args);
});
G__31460.cljs$core$IFn$_invoke$arity$variadic = G__31460__delegate;
return G__31460;
})()
;})(vec__31451,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31450,map__31450__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__31453 = null;var count__31454 = (0);var i__31455 = (0);while(true){
if((i__31455 < count__31454))
{var vec__31456 = cljs.core._nth.call(null,chunk__31453,i__31455);var idx = cljs.core.nth.call(null,vec__31456,(0),null);var vec__31457 = cljs.core.nth.call(null,vec__31456,(1),null);var date = cljs.core.nth.call(null,vec__31457,(0),null);var open = cljs.core.nth.call(null,vec__31457,(1),null);var high = cljs.core.nth.call(null,vec__31457,(2),null);var low = cljs.core.nth.call(null,vec__31457,(3),null);var close = cljs.core.nth.call(null,vec__31457,(4),null);var volume = cljs.core.nth.call(null,vec__31457,(5),null);var info__$1 = cljs.core.nth.call(null,vec__31456,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__31462 = seq__31452;
var G__31463 = chunk__31453;
var G__31464 = count__31454;
var G__31465 = (i__31455 + (1));
seq__31452 = G__31462;
chunk__31453 = G__31463;
count__31454 = G__31464;
i__31455 = G__31465;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31452);if(temp__4126__auto__)
{var seq__31452__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31452__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31452__$1);{
var G__31466 = cljs.core.chunk_rest.call(null,seq__31452__$1);
var G__31467 = c__4307__auto__;
var G__31468 = cljs.core.count.call(null,c__4307__auto__);
var G__31469 = (0);
seq__31452 = G__31466;
chunk__31453 = G__31467;
count__31454 = G__31468;
i__31455 = G__31469;
continue;
}
} else
{var vec__31458 = cljs.core.first.call(null,seq__31452__$1);var idx = cljs.core.nth.call(null,vec__31458,(0),null);var vec__31459 = cljs.core.nth.call(null,vec__31458,(1),null);var date = cljs.core.nth.call(null,vec__31459,(0),null);var open = cljs.core.nth.call(null,vec__31459,(1),null);var high = cljs.core.nth.call(null,vec__31459,(2),null);var low = cljs.core.nth.call(null,vec__31459,(3),null);var close = cljs.core.nth.call(null,vec__31459,(4),null);var volume = cljs.core.nth.call(null,vec__31459,(5),null);var info__$1 = cljs.core.nth.call(null,vec__31458,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__31470 = cljs.core.next.call(null,seq__31452__$1);
var G__31471 = null;
var G__31472 = (0);
var G__31473 = (0);
seq__31452 = G__31470;
chunk__31453 = G__31471;
count__31454 = G__31472;
i__31455 = G__31473;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__31474){var map__31475 = p__31474;var map__31475__$1 = ((cljs.core.seq_QMARK_.call(null,map__31475))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);var cz = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__31476){var map__31477 = p__31476;var map__31477__$1 = ((cljs.core.seq_QMARK_.call(null,map__31477))?cljs.core.apply.call(null,cljs.core.hash_map,map__31477):map__31477);var cz = cljs.core.get.call(null,map__31477__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__31478,base,ctx){var map__31479 = p__31478;var map__31479__$1 = ((cljs.core.seq_QMARK_.call(null,map__31479))?cljs.core.apply.call(null,cljs.core.hash_map,map__31479):map__31479);var cz = cljs.core.get.call(null,map__31479__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__31479__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__31479__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__31480 = base;var w = cljs.core.nth.call(null,vec__31480,(0),null);var h = cljs.core.nth.call(null,vec__31480,(1),null);var max_v = cljs.core.nth.call(null,vec__31480,(2),null);var min_v = cljs.core.nth.call(null,vec__31480,(3),null);var offset_v = cljs.core.nth.call(null,vec__31480,(4),null);var offset_x = cljs.core.nth.call(null,vec__31480,(5),null);var pos_y = cljs.core.nth.call(null,vec__31480,(6),null);var proj_x = ((function (vec__31480,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31479,map__31479__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__31480,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__31479,map__31479__$1,cz,vz,color))
;var proj_y = ((function (vec__31480,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__31479,map__31479__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__31480,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__31479,map__31479__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__31481 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__31480,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__31479,map__31479__$1,cz,vz,color){
return (function() { 
var G__31487__delegate = function (args){return args;
};
var G__31487 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31487__delegate.call(this,args);};
G__31487.cljs$lang$maxFixedArity = 0;
G__31487.cljs$lang$applyTo = (function (arglist__31488){
var args = cljs.core.seq(arglist__31488);
return G__31487__delegate(args);
});
G__31487.cljs$core$IFn$_invoke$arity$variadic = G__31487__delegate;
return G__31487;
})()
;})(vec__31480,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__31479,map__31479__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__31482 = null;var count__31483 = (0);var i__31484 = (0);while(true){
if((i__31484 < count__31483))
{var vec__31485 = cljs.core._nth.call(null,chunk__31482,i__31484);var idx = cljs.core.nth.call(null,vec__31485,(0),null);var pc = cljs.core.nth.call(null,vec__31485,(1),null);var cc = cljs.core.nth.call(null,vec__31485,(2),null);var pv = cljs.core.nth.call(null,vec__31485,(3),null);var cv = cljs.core.nth.call(null,vec__31485,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__31489 = seq__31481;
var G__31490 = chunk__31482;
var G__31491 = count__31483;
var G__31492 = (i__31484 + (1));
seq__31481 = G__31489;
chunk__31482 = G__31490;
count__31483 = G__31491;
i__31484 = G__31492;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31481);if(temp__4126__auto__)
{var seq__31481__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31481__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__31481__$1);{
var G__31493 = cljs.core.chunk_rest.call(null,seq__31481__$1);
var G__31494 = c__4307__auto__;
var G__31495 = cljs.core.count.call(null,c__4307__auto__);
var G__31496 = (0);
seq__31481 = G__31493;
chunk__31482 = G__31494;
count__31483 = G__31495;
i__31484 = G__31496;
continue;
}
} else
{var vec__31486 = cljs.core.first.call(null,seq__31481__$1);var idx = cljs.core.nth.call(null,vec__31486,(0),null);var pc = cljs.core.nth.call(null,vec__31486,(1),null);var cc = cljs.core.nth.call(null,vec__31486,(2),null);var pv = cljs.core.nth.call(null,vec__31486,(3),null);var cv = cljs.core.nth.call(null,vec__31486,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__31497 = cljs.core.next.call(null,seq__31481__$1);
var G__31498 = null;
var G__31499 = (0);
var G__31500 = (0);
seq__31481 = G__31497;
chunk__31482 = G__31498;
count__31483 = G__31499;
i__31484 = G__31500;
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
