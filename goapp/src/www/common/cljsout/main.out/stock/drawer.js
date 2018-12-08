// Compiled by ClojureScript 1.10.238 {}
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
if(typeof stock.drawer.max_v !== 'undefined'){
} else {
stock.drawer.max_v = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"stock.drawer","max-v"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__10254){
var map__10255 = p__10254;
var map__10255__$1 = ((((!((map__10255 == null)))?(((((map__10255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10255):map__10255);
var t = cljs.core.get.call(null,map__10255__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return t;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof stock.drawer.min_v !== 'undefined'){
} else {
stock.drawer.min_v = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"stock.drawer","min-v"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__10257){
var map__10258 = p__10257;
var map__10258__$1 = ((((!((map__10258 == null)))?(((((map__10258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10258):map__10258);
var t = cljs.core.get.call(null,map__10258__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return t;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof stock.drawer.length !== 'undefined'){
} else {
stock.drawer.length = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"stock.drawer","length"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__10260){
var map__10261 = p__10260;
var map__10261__$1 = ((((!((map__10261 == null)))?(((((map__10261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10261):map__10261);
var t = cljs.core.get.call(null,map__10261__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return t;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof stock.drawer.draw_it !== 'undefined'){
} else {
stock.drawer.draw_it = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"stock.drawer","draw-it"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__10263,base,ctx){
var map__10264 = p__10263;
var map__10264__$1 = ((((!((map__10264 == null)))?(((((map__10264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10264):map__10264);
var t = cljs.core.get.call(null,map__10264__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return t;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
stock.drawer.graphic_base = (function stock$drawer$graphic_base(w,h,drawers){
var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));
var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));
var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));
var offset_v = (max_v - min_v);
var offset_x = (w / (len_v + (1)));
var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){
return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function stock$drawer$draw(p__10266,w,h,ctx){
var map__10267 = p__10266;
var map__10267__$1 = ((((!((map__10267 == null)))?(((((map__10267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10267):map__10267);
var info = map__10267__$1;
var drawers = cljs.core.get.call(null,map__10267__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));
var base = stock.drawer.graphic_base.call(null,w,h,drawers);
(ctx["fillStyle"] = "black");

ctx.fillRect((0),(0),w,h);

var seq__10269 = cljs.core.seq.call(null,drawers);
var chunk__10270 = null;
var count__10271 = (0);
var i__10272 = (0);
while(true){
if((i__10272 < count__10271)){
var drawer = cljs.core._nth.call(null,chunk__10270,i__10272);
ctx.save();

stock.drawer.draw_it.call(null,drawer,base,ctx);

ctx.restore();


var G__10273 = seq__10269;
var G__10274 = chunk__10270;
var G__10275 = count__10271;
var G__10276 = (i__10272 + (1));
seq__10269 = G__10273;
chunk__10270 = G__10274;
count__10271 = G__10275;
i__10272 = G__10276;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10269);
if(temp__5457__auto__){
var seq__10269__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10269__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10269__$1);
var G__10277 = cljs.core.chunk_rest.call(null,seq__10269__$1);
var G__10278 = c__4319__auto__;
var G__10279 = cljs.core.count.call(null,c__4319__auto__);
var G__10280 = (0);
seq__10269 = G__10277;
chunk__10270 = G__10278;
count__10271 = G__10279;
i__10272 = G__10280;
continue;
} else {
var drawer = cljs.core.first.call(null,seq__10269__$1);
ctx.save();

stock.drawer.draw_it.call(null,drawer,base,ctx);

ctx.restore();


var G__10281 = cljs.core.next.call(null,seq__10269__$1);
var G__10282 = null;
var G__10283 = (0);
var G__10284 = (0);
seq__10269 = G__10281;
chunk__10270 = G__10282;
count__10271 = G__10283;
i__10272 = G__10284;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info){
return (0);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info){
return (0);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info){
return (0);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"default","default",-1987822328),(function (info,base,ctx){
return null;
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__10285){
var map__10286 = p__10285;
var map__10286__$1 = ((((!((map__10286 == null)))?(((((map__10286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10286):map__10286);
var line = cljs.core.get.call(null,map__10286__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__10286__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__10288){
var map__10289 = p__10288;
var map__10289__$1 = ((((!((map__10289 == null)))?(((((map__10289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10289):map__10289);
var line = cljs.core.get.call(null,map__10289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__10289__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__10291){
var map__10292 = p__10291;
var map__10292__$1 = ((((!((map__10292 == null)))?(((((map__10292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10292):map__10292);
var line = cljs.core.get.call(null,map__10292__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__10292__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.count.call(null,(function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__10294,base,ctx){
var map__10295 = p__10294;
var map__10295__$1 = ((((!((map__10295 == null)))?(((((map__10295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10295):map__10295);
var line = cljs.core.get.call(null,map__10295__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__10295__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
var color = cljs.core.get.call(null,map__10295__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var hideY = cljs.core.get.call(null,map__10295__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));
var centerY = cljs.core.get.call(null,map__10295__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));
var vec__10297 = base;
var w = cljs.core.nth.call(null,vec__10297,(0),null);
var h = cljs.core.nth.call(null,vec__10297,(1),null);
var max_v = cljs.core.nth.call(null,vec__10297,(2),null);
var min_v = cljs.core.nth.call(null,vec__10297,(3),null);
var offset_v = cljs.core.nth.call(null,vec__10297,(4),null);
var offset_x = cljs.core.nth.call(null,vec__10297,(5),null);
var pos_y = cljs.core.nth.call(null,vec__10297,(6),null);
var cnt = (10);
var cntx = (5);
var offset = ((max_v - min_v) / cnt);
(ctx["strokeStyle"] = color);

(ctx["fillStyle"] = color);

(ctx["lineWidth"] = (1));

ctx.beginPath();

if(cljs.core.truth_(hideY)){
} else {
var seq__10300_10312 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));
var chunk__10301_10313 = null;
var count__10302_10314 = (0);
var i__10303_10315 = (0);
while(true){
if((i__10303_10315 < count__10302_10314)){
var i_10316 = cljs.core._nth.call(null,chunk__10301_10313,i__10303_10315);
var v_10317 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() - (i_10316 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10317.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_10317));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10317.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_10317));

ctx.moveTo((0),pos_y.call(null,v_10317));

ctx.lineTo(w,pos_y.call(null,v_10317));

var v_10318 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() + (i_10316 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10318.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_10318));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10318.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_10318));

ctx.moveTo((0),pos_y.call(null,v_10318));

ctx.lineTo(w,pos_y.call(null,v_10318));


var G__10319 = seq__10300_10312;
var G__10320 = chunk__10301_10313;
var G__10321 = count__10302_10314;
var G__10322 = (i__10303_10315 + (1));
seq__10300_10312 = G__10319;
chunk__10301_10313 = G__10320;
count__10302_10314 = G__10321;
i__10303_10315 = G__10322;
continue;
} else {
var temp__5457__auto___10323 = cljs.core.seq.call(null,seq__10300_10312);
if(temp__5457__auto___10323){
var seq__10300_10324__$1 = temp__5457__auto___10323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10300_10324__$1)){
var c__4319__auto___10325 = cljs.core.chunk_first.call(null,seq__10300_10324__$1);
var G__10326 = cljs.core.chunk_rest.call(null,seq__10300_10324__$1);
var G__10327 = c__4319__auto___10325;
var G__10328 = cljs.core.count.call(null,c__4319__auto___10325);
var G__10329 = (0);
seq__10300_10312 = G__10326;
chunk__10301_10313 = G__10327;
count__10302_10314 = G__10328;
i__10303_10315 = G__10329;
continue;
} else {
var i_10330 = cljs.core.first.call(null,seq__10300_10324__$1);
var v_10331 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() - (i_10330 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10331.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_10331));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10331.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_10331));

ctx.moveTo((0),pos_y.call(null,v_10331));

ctx.lineTo(w,pos_y.call(null,v_10331));

var v_10332 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() + (i_10330 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10332.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_10332));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10332.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_10332));

ctx.moveTo((0),pos_y.call(null,v_10332));

ctx.lineTo(w,pos_y.call(null,v_10332));


var G__10333 = cljs.core.next.call(null,seq__10300_10324__$1);
var G__10334 = null;
var G__10335 = (0);
var G__10336 = (0);
seq__10300_10312 = G__10333;
chunk__10301_10313 = G__10334;
count__10302_10314 = G__10335;
i__10303_10315 = G__10336;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.truth_(kline)){
var seq__10304_10337 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));
var chunk__10305_10338 = null;
var count__10306_10339 = (0);
var i__10307_10340 = (0);
while(true){
if((i__10307_10340 < count__10306_10339)){
var i_10341 = cljs.core._nth.call(null,chunk__10305_10338,i__10307_10340);
if((cljs.core.mod.call(null,i_10341,cntx) === (0))){
var posx_10342 = ((offset_x / (2)) + (i_10341 * offset_x));
ctx.moveTo(posx_10342,(0));

ctx.lineTo(posx_10342,h);
} else {
}


var G__10343 = seq__10304_10337;
var G__10344 = chunk__10305_10338;
var G__10345 = count__10306_10339;
var G__10346 = (i__10307_10340 + (1));
seq__10304_10337 = G__10343;
chunk__10305_10338 = G__10344;
count__10306_10339 = G__10345;
i__10307_10340 = G__10346;
continue;
} else {
var temp__5457__auto___10347 = cljs.core.seq.call(null,seq__10304_10337);
if(temp__5457__auto___10347){
var seq__10304_10348__$1 = temp__5457__auto___10347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10304_10348__$1)){
var c__4319__auto___10349 = cljs.core.chunk_first.call(null,seq__10304_10348__$1);
var G__10350 = cljs.core.chunk_rest.call(null,seq__10304_10348__$1);
var G__10351 = c__4319__auto___10349;
var G__10352 = cljs.core.count.call(null,c__4319__auto___10349);
var G__10353 = (0);
seq__10304_10337 = G__10350;
chunk__10305_10338 = G__10351;
count__10306_10339 = G__10352;
i__10307_10340 = G__10353;
continue;
} else {
var i_10354 = cljs.core.first.call(null,seq__10304_10348__$1);
if((cljs.core.mod.call(null,i_10354,cntx) === (0))){
var posx_10355 = ((offset_x / (2)) + (i_10354 * offset_x));
ctx.moveTo(posx_10355,(0));

ctx.lineTo(posx_10355,h);
} else {
}


var G__10356 = cljs.core.next.call(null,seq__10304_10348__$1);
var G__10357 = null;
var G__10358 = (0);
var G__10359 = (0);
seq__10304_10337 = G__10356;
chunk__10305_10338 = G__10357;
count__10306_10339 = G__10358;
i__10307_10340 = G__10359;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(line)){
var seq__10308_10360 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));
var chunk__10309_10361 = null;
var count__10310_10362 = (0);
var i__10311_10363 = (0);
while(true){
if((i__10311_10363 < count__10310_10362)){
var i_10364 = cljs.core._nth.call(null,chunk__10309_10361,i__10311_10363);
if((cljs.core.mod.call(null,i_10364,cntx) === (0))){
var posx_10365 = ((offset_x / (2)) + (i_10364 * offset_x));
ctx.moveTo(posx_10365,(0));

ctx.lineTo(posx_10365,h);
} else {
}


var G__10366 = seq__10308_10360;
var G__10367 = chunk__10309_10361;
var G__10368 = count__10310_10362;
var G__10369 = (i__10311_10363 + (1));
seq__10308_10360 = G__10366;
chunk__10309_10361 = G__10367;
count__10310_10362 = G__10368;
i__10311_10363 = G__10369;
continue;
} else {
var temp__5457__auto___10370 = cljs.core.seq.call(null,seq__10308_10360);
if(temp__5457__auto___10370){
var seq__10308_10371__$1 = temp__5457__auto___10370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10308_10371__$1)){
var c__4319__auto___10372 = cljs.core.chunk_first.call(null,seq__10308_10371__$1);
var G__10373 = cljs.core.chunk_rest.call(null,seq__10308_10371__$1);
var G__10374 = c__4319__auto___10372;
var G__10375 = cljs.core.count.call(null,c__4319__auto___10372);
var G__10376 = (0);
seq__10308_10360 = G__10373;
chunk__10309_10361 = G__10374;
count__10310_10362 = G__10375;
i__10311_10363 = G__10376;
continue;
} else {
var i_10377 = cljs.core.first.call(null,seq__10308_10371__$1);
if((cljs.core.mod.call(null,i_10377,cntx) === (0))){
var posx_10378 = ((offset_x / (2)) + (i_10377 * offset_x));
ctx.moveTo(posx_10378,(0));

ctx.lineTo(posx_10378,h);
} else {
}


var G__10379 = cljs.core.next.call(null,seq__10308_10371__$1);
var G__10380 = null;
var G__10381 = (0);
var G__10382 = (0);
seq__10308_10360 = G__10379;
chunk__10309_10361 = G__10380;
count__10310_10362 = G__10381;
i__10311_10363 = G__10382;
continue;
}
} else {
}
}
break;
}
} else {
}

return ctx.stroke();
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10383){
var map__10384 = p__10383;
var map__10384__$1 = ((((!((map__10384 == null)))?(((((map__10384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10384):map__10384);
var line = cljs.core.get.call(null,map__10384__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10386){
var map__10387 = p__10386;
var map__10387__$1 = ((((!((map__10387 == null)))?(((((map__10387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10387):map__10387);
var line = cljs.core.get.call(null,map__10387__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10389){
var map__10390 = p__10389;
var map__10390__$1 = ((((!((map__10390 == null)))?(((((map__10390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10390):map__10390);
var line = cljs.core.get.call(null,map__10390__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10392,base,ctx){
var map__10393 = p__10392;
var map__10393__$1 = ((((!((map__10393 == null)))?(((((map__10393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10393):map__10393);
var line = cljs.core.get.call(null,map__10393__$1,new cljs.core.Keyword(null,"line","line",212345235));
var color = cljs.core.get.call(null,map__10393__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var offset = cljs.core.get.call(null,map__10393__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var style = cljs.core.get.call(null,map__10393__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vec__10395 = base;
var w = cljs.core.nth.call(null,vec__10395,(0),null);
var h = cljs.core.nth.call(null,vec__10395,(1),null);
var max_v = cljs.core.nth.call(null,vec__10395,(2),null);
var min_v = cljs.core.nth.call(null,vec__10395,(3),null);
var offset_v = cljs.core.nth.call(null,vec__10395,(4),null);
var offset_x = cljs.core.nth.call(null,vec__10395,(5),null);
var pos_y = cljs.core.nth.call(null,vec__10395,(6),null);
var offset__$1 = (function (){var or__3922__auto__ = offset;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
(ctx["strokeStyle"] = color);

(ctx["lineWidth"] = (1));

var pred__10398 = cljs.core._EQ_;
var expr__10399 = style;
if(cljs.core.truth_(pred__10398.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__10399))){
(ctx["fillStyle"] = color);

var seq__10401 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));
var chunk__10402 = null;
var count__10403 = (0);
var i__10404 = (0);
while(true){
if((i__10404 < count__10403)){
var vec__10405 = cljs.core._nth.call(null,chunk__10402,i__10404);
var idx = cljs.core.nth.call(null,vec__10405,(0),null);
var value = cljs.core.nth.call(null,vec__10405,(1),null);
ctx.beginPath();

ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);

ctx.closePath();

ctx.fill();


var G__10421 = seq__10401;
var G__10422 = chunk__10402;
var G__10423 = count__10403;
var G__10424 = (i__10404 + (1));
seq__10401 = G__10421;
chunk__10402 = G__10422;
count__10403 = G__10423;
i__10404 = G__10424;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10401);
if(temp__5457__auto__){
var seq__10401__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10401__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10401__$1);
var G__10425 = cljs.core.chunk_rest.call(null,seq__10401__$1);
var G__10426 = c__4319__auto__;
var G__10427 = cljs.core.count.call(null,c__4319__auto__);
var G__10428 = (0);
seq__10401 = G__10425;
chunk__10402 = G__10426;
count__10403 = G__10427;
i__10404 = G__10428;
continue;
} else {
var vec__10408 = cljs.core.first.call(null,seq__10401__$1);
var idx = cljs.core.nth.call(null,vec__10408,(0),null);
var value = cljs.core.nth.call(null,vec__10408,(1),null);
ctx.beginPath();

ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);

ctx.closePath();

ctx.fill();


var G__10429 = cljs.core.next.call(null,seq__10401__$1);
var G__10430 = null;
var G__10431 = (0);
var G__10432 = (0);
seq__10401 = G__10429;
chunk__10402 = G__10430;
count__10403 = G__10431;
i__10404 = G__10432;
continue;
}
} else {
return null;
}
}
break;
}
} else {
ctx.beginPath();

var seq__10411_10433 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__10398,expr__10399,vec__10395,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__10393,map__10393__$1,line,color,offset,style){
return (function() { 
var G__10437__delegate = function (args){
return args;
};
var G__10437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10438__i = 0, G__10438__a = new Array(arguments.length -  0);
while (G__10438__i < G__10438__a.length) {G__10438__a[G__10438__i] = arguments[G__10438__i + 0]; ++G__10438__i;}
  args = new cljs.core.IndexedSeq(G__10438__a,0,null);
} 
return G__10437__delegate.call(this,args);};
G__10437.cljs$lang$maxFixedArity = 0;
G__10437.cljs$lang$applyTo = (function (arglist__10439){
var args = cljs.core.seq(arglist__10439);
return G__10437__delegate(args);
});
G__10437.cljs$core$IFn$_invoke$arity$variadic = G__10437__delegate;
return G__10437;
})()
;})(pred__10398,expr__10399,vec__10395,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__10393,map__10393__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));
var chunk__10412_10434 = null;
var count__10413_10435 = (0);
var i__10414_10436 = (0);
while(true){
if((i__10414_10436 < count__10413_10435)){
var vec__10415_10440 = cljs.core._nth.call(null,chunk__10412_10434,i__10414_10436);
var idx_10441 = cljs.core.nth.call(null,vec__10415_10440,(0),null);
var prev_10442 = cljs.core.nth.call(null,vec__10415_10440,(1),null);
var curr_10443 = cljs.core.nth.call(null,vec__10415_10440,(2),null);
ctx.moveTo(((idx_10441 + offset__$1) * offset_x),pos_y.call(null,prev_10442));

ctx.lineTo((((idx_10441 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_10443));


var G__10444 = seq__10411_10433;
var G__10445 = chunk__10412_10434;
var G__10446 = count__10413_10435;
var G__10447 = (i__10414_10436 + (1));
seq__10411_10433 = G__10444;
chunk__10412_10434 = G__10445;
count__10413_10435 = G__10446;
i__10414_10436 = G__10447;
continue;
} else {
var temp__5457__auto___10448 = cljs.core.seq.call(null,seq__10411_10433);
if(temp__5457__auto___10448){
var seq__10411_10449__$1 = temp__5457__auto___10448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10411_10449__$1)){
var c__4319__auto___10450 = cljs.core.chunk_first.call(null,seq__10411_10449__$1);
var G__10451 = cljs.core.chunk_rest.call(null,seq__10411_10449__$1);
var G__10452 = c__4319__auto___10450;
var G__10453 = cljs.core.count.call(null,c__4319__auto___10450);
var G__10454 = (0);
seq__10411_10433 = G__10451;
chunk__10412_10434 = G__10452;
count__10413_10435 = G__10453;
i__10414_10436 = G__10454;
continue;
} else {
var vec__10418_10455 = cljs.core.first.call(null,seq__10411_10449__$1);
var idx_10456 = cljs.core.nth.call(null,vec__10418_10455,(0),null);
var prev_10457 = cljs.core.nth.call(null,vec__10418_10455,(1),null);
var curr_10458 = cljs.core.nth.call(null,vec__10418_10455,(2),null);
ctx.moveTo(((idx_10456 + offset__$1) * offset_x),pos_y.call(null,prev_10457));

ctx.lineTo((((idx_10456 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_10458));


var G__10459 = cljs.core.next.call(null,seq__10411_10449__$1);
var G__10460 = null;
var G__10461 = (0);
var G__10462 = (0);
seq__10411_10433 = G__10459;
chunk__10412_10434 = G__10460;
count__10413_10435 = G__10461;
i__10414_10436 = G__10462;
continue;
}
} else {
}
}
break;
}

return ctx.stroke();
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10463){
var map__10464 = p__10463;
var map__10464__$1 = ((((!((map__10464 == null)))?(((((map__10464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10464):map__10464);
var kline = cljs.core.get.call(null,map__10464__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10466){
var map__10467 = p__10466;
var map__10467__$1 = ((((!((map__10467 == null)))?(((((map__10467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10467):map__10467);
var kline = cljs.core.get.call(null,map__10467__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10469){
var map__10470 = p__10469;
var map__10470__$1 = ((((!((map__10470 == null)))?(((((map__10470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10470):map__10470);
var kline = cljs.core.get.call(null,map__10470__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__10472,base,ctx){
var map__10473 = p__10472;
var map__10473__$1 = ((((!((map__10473 == null)))?(((((map__10473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10473):map__10473);
var kline = cljs.core.get.call(null,map__10473__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
var info = cljs.core.get.call(null,map__10473__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var vec__10475 = base;
var w = cljs.core.nth.call(null,vec__10475,(0),null);
var h = cljs.core.nth.call(null,vec__10475,(1),null);
var max_v = cljs.core.nth.call(null,vec__10475,(2),null);
var min_v = cljs.core.nth.call(null,vec__10475,(3),null);
var offset_v = cljs.core.nth.call(null,vec__10475,(4),null);
var offset_x = cljs.core.nth.call(null,vec__10475,(5),null);
var pos_y = cljs.core.nth.call(null,vec__10475,(6),null);
(ctx["fillStyle"] = "black");

var seq__10478 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10475,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10473,map__10473__$1,kline,info){
return (function() { 
var G__10494__delegate = function (args){
return args;
};
var G__10494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10495__i = 0, G__10495__a = new Array(arguments.length -  0);
while (G__10495__i < G__10495__a.length) {G__10495__a[G__10495__i] = arguments[G__10495__i + 0]; ++G__10495__i;}
  args = new cljs.core.IndexedSeq(G__10495__a,0,null);
} 
return G__10494__delegate.call(this,args);};
G__10494.cljs$lang$maxFixedArity = 0;
G__10494.cljs$lang$applyTo = (function (arglist__10496){
var args = cljs.core.seq(arglist__10496);
return G__10494__delegate(args);
});
G__10494.cljs$core$IFn$_invoke$arity$variadic = G__10494__delegate;
return G__10494;
})()
;})(vec__10475,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10473,map__10473__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3922__auto__ = info;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return kline;
}
})()));
var chunk__10479 = null;
var count__10480 = (0);
var i__10481 = (0);
while(true){
if((i__10481 < count__10480)){
var vec__10482 = cljs.core._nth.call(null,chunk__10479,i__10481);
var idx = cljs.core.nth.call(null,vec__10482,(0),null);
var vec__10485 = cljs.core.nth.call(null,vec__10482,(1),null);
var date = cljs.core.nth.call(null,vec__10485,(0),null);
var open = cljs.core.nth.call(null,vec__10485,(1),null);
var high = cljs.core.nth.call(null,vec__10485,(2),null);
var low = cljs.core.nth.call(null,vec__10485,(3),null);
var close = cljs.core.nth.call(null,vec__10485,(4),null);
var volume = cljs.core.nth.call(null,vec__10485,(5),null);
var info__$1 = cljs.core.nth.call(null,vec__10482,(2),null);
(ctx["strokeStyle"] = (((close > open))?"red":"green"));

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



var G__10497 = seq__10478;
var G__10498 = chunk__10479;
var G__10499 = count__10480;
var G__10500 = (i__10481 + (1));
seq__10478 = G__10497;
chunk__10479 = G__10498;
count__10480 = G__10499;
i__10481 = G__10500;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10478);
if(temp__5457__auto__){
var seq__10478__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10478__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10478__$1);
var G__10501 = cljs.core.chunk_rest.call(null,seq__10478__$1);
var G__10502 = c__4319__auto__;
var G__10503 = cljs.core.count.call(null,c__4319__auto__);
var G__10504 = (0);
seq__10478 = G__10501;
chunk__10479 = G__10502;
count__10480 = G__10503;
i__10481 = G__10504;
continue;
} else {
var vec__10488 = cljs.core.first.call(null,seq__10478__$1);
var idx = cljs.core.nth.call(null,vec__10488,(0),null);
var vec__10491 = cljs.core.nth.call(null,vec__10488,(1),null);
var date = cljs.core.nth.call(null,vec__10491,(0),null);
var open = cljs.core.nth.call(null,vec__10491,(1),null);
var high = cljs.core.nth.call(null,vec__10491,(2),null);
var low = cljs.core.nth.call(null,vec__10491,(3),null);
var close = cljs.core.nth.call(null,vec__10491,(4),null);
var volume = cljs.core.nth.call(null,vec__10491,(5),null);
var info__$1 = cljs.core.nth.call(null,vec__10488,(2),null);
(ctx["strokeStyle"] = (((close > open))?"red":"green"));

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



var G__10505 = cljs.core.next.call(null,seq__10478__$1);
var G__10506 = null;
var G__10507 = (0);
var G__10508 = (0);
seq__10478 = G__10505;
chunk__10479 = G__10506;
count__10480 = G__10507;
i__10481 = G__10508;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10509){
var map__10510 = p__10509;
var map__10510__$1 = ((((!((map__10510 == null)))?(((((map__10510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10510):map__10510);
var cz = cljs.core.get.call(null,map__10510__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));
return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10512){
var map__10513 = p__10512;
var map__10513__$1 = ((((!((map__10513 == null)))?(((((map__10513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10513):map__10513);
var cz = cljs.core.get.call(null,map__10513__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));
return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__10515,base,ctx){
var map__10516 = p__10515;
var map__10516__$1 = ((((!((map__10516 == null)))?(((((map__10516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10516):map__10516);
var cz = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));
var vz = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));
var color = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var vec__10518 = base;
var w = cljs.core.nth.call(null,vec__10518,(0),null);
var h = cljs.core.nth.call(null,vec__10518,(1),null);
var max_v = cljs.core.nth.call(null,vec__10518,(2),null);
var min_v = cljs.core.nth.call(null,vec__10518,(3),null);
var offset_v = cljs.core.nth.call(null,vec__10518,(4),null);
var offset_x = cljs.core.nth.call(null,vec__10518,(5),null);
var pos_y = cljs.core.nth.call(null,vec__10518,(6),null);
var proj_x = ((function (vec__10518,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10516,map__10516__$1,cz,vz,color){
return (function (v){
return ((v * (w / (8))) + (w / (2)));
});})(vec__10518,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__10516,map__10516__$1,cz,vz,color))
;
var proj_y = ((function (vec__10518,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__10516,map__10516__$1,cz,vz,color){
return (function (v){
return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__10518,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__10516,map__10516__$1,cz,vz,color))
;
(ctx["fillStyle"] = color);

(ctx["strokeStyle"] = color);

var seq__10521 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__10518,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__10516,map__10516__$1,cz,vz,color){
return (function() { 
var G__10531__delegate = function (args){
return args;
};
var G__10531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10532__i = 0, G__10532__a = new Array(arguments.length -  0);
while (G__10532__i < G__10532__a.length) {G__10532__a[G__10532__i] = arguments[G__10532__i + 0]; ++G__10532__i;}
  args = new cljs.core.IndexedSeq(G__10532__a,0,null);
} 
return G__10531__delegate.call(this,args);};
G__10531.cljs$lang$maxFixedArity = 0;
G__10531.cljs$lang$applyTo = (function (arglist__10533){
var args = cljs.core.seq(arglist__10533);
return G__10531__delegate(args);
});
G__10531.cljs$core$IFn$_invoke$arity$variadic = G__10531__delegate;
return G__10531;
})()
;})(vec__10518,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__10516,map__10516__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));
var chunk__10522 = null;
var count__10523 = (0);
var i__10524 = (0);
while(true){
if((i__10524 < count__10523)){
var vec__10525 = cljs.core._nth.call(null,chunk__10522,i__10524);
var idx = cljs.core.nth.call(null,vec__10525,(0),null);
var pc = cljs.core.nth.call(null,vec__10525,(1),null);
var cc = cljs.core.nth.call(null,vec__10525,(2),null);
var pv = cljs.core.nth.call(null,vec__10525,(3),null);
var cv = cljs.core.nth.call(null,vec__10525,(4),null);
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),proj_x.call(null,pv),proj_y.call(null,pc));

ctx.beginPath();

ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));

ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));

ctx.stroke();



var G__10534 = seq__10521;
var G__10535 = chunk__10522;
var G__10536 = count__10523;
var G__10537 = (i__10524 + (1));
seq__10521 = G__10534;
chunk__10522 = G__10535;
count__10523 = G__10536;
i__10524 = G__10537;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10521);
if(temp__5457__auto__){
var seq__10521__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10521__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10521__$1);
var G__10538 = cljs.core.chunk_rest.call(null,seq__10521__$1);
var G__10539 = c__4319__auto__;
var G__10540 = cljs.core.count.call(null,c__4319__auto__);
var G__10541 = (0);
seq__10521 = G__10538;
chunk__10522 = G__10539;
count__10523 = G__10540;
i__10524 = G__10541;
continue;
} else {
var vec__10528 = cljs.core.first.call(null,seq__10521__$1);
var idx = cljs.core.nth.call(null,vec__10528,(0),null);
var pc = cljs.core.nth.call(null,vec__10528,(1),null);
var cc = cljs.core.nth.call(null,vec__10528,(2),null);
var pv = cljs.core.nth.call(null,vec__10528,(3),null);
var cv = cljs.core.nth.call(null,vec__10528,(4),null);
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),proj_x.call(null,pv),proj_y.call(null,pc));

ctx.beginPath();

ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));

ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));

ctx.stroke();



var G__10542 = cljs.core.next.call(null,seq__10521__$1);
var G__10543 = null;
var G__10544 = (0);
var G__10545 = (0);
seq__10521 = G__10542;
chunk__10522 = G__10543;
count__10523 = G__10544;
i__10524 = G__10545;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=drawer.js.map
