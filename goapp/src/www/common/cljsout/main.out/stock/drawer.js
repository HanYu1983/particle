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
return (function (p__54108){
var map__54109 = p__54108;
var map__54109__$1 = ((((!((map__54109 == null)))?(((((map__54109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54109):map__54109);
var t = cljs.core.get.call(null,map__54109__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
return (function (p__54111){
var map__54112 = p__54111;
var map__54112__$1 = ((((!((map__54112 == null)))?(((((map__54112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54112):map__54112);
var t = cljs.core.get.call(null,map__54112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
return (function (p__54114){
var map__54115 = p__54114;
var map__54115__$1 = ((((!((map__54115 == null)))?(((((map__54115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54115):map__54115);
var t = cljs.core.get.call(null,map__54115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
return (function (p__54117,base,ctx){
var map__54118 = p__54117;
var map__54118__$1 = ((((!((map__54118 == null)))?(((((map__54118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54118):map__54118);
var t = cljs.core.get.call(null,map__54118__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
stock.drawer.draw = (function stock$drawer$draw(p__54120,w,h,ctx){
var map__54121 = p__54120;
var map__54121__$1 = ((((!((map__54121 == null)))?(((((map__54121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54121):map__54121);
var info = map__54121__$1;
var drawers = cljs.core.get.call(null,map__54121__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));
var base = stock.drawer.graphic_base.call(null,w,h,drawers);
(ctx["fillStyle"] = "black");

ctx.fillRect((0),(0),w,h);

var seq__54123 = cljs.core.seq.call(null,drawers);
var chunk__54124 = null;
var count__54125 = (0);
var i__54126 = (0);
while(true){
if((i__54126 < count__54125)){
var drawer = cljs.core._nth.call(null,chunk__54124,i__54126);
ctx.save();

stock.drawer.draw_it.call(null,drawer,base,ctx);

ctx.restore();


var G__54127 = seq__54123;
var G__54128 = chunk__54124;
var G__54129 = count__54125;
var G__54130 = (i__54126 + (1));
seq__54123 = G__54127;
chunk__54124 = G__54128;
count__54125 = G__54129;
i__54126 = G__54130;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54123);
if(temp__5457__auto__){
var seq__54123__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54123__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54123__$1);
var G__54131 = cljs.core.chunk_rest.call(null,seq__54123__$1);
var G__54132 = c__4319__auto__;
var G__54133 = cljs.core.count.call(null,c__4319__auto__);
var G__54134 = (0);
seq__54123 = G__54131;
chunk__54124 = G__54132;
count__54125 = G__54133;
i__54126 = G__54134;
continue;
} else {
var drawer = cljs.core.first.call(null,seq__54123__$1);
ctx.save();

stock.drawer.draw_it.call(null,drawer,base,ctx);

ctx.restore();


var G__54135 = cljs.core.next.call(null,seq__54123__$1);
var G__54136 = null;
var G__54137 = (0);
var G__54138 = (0);
seq__54123 = G__54135;
chunk__54124 = G__54136;
count__54125 = G__54137;
i__54126 = G__54138;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__54139){
var map__54140 = p__54139;
var map__54140__$1 = ((((!((map__54140 == null)))?(((((map__54140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54140):map__54140);
var line = cljs.core.get.call(null,map__54140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__54140__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__54142){
var map__54143 = p__54142;
var map__54143__$1 = ((((!((map__54143 == null)))?(((((map__54143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54143):map__54143);
var line = cljs.core.get.call(null,map__54143__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__54143__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__54145){
var map__54146 = p__54145;
var map__54146__$1 = ((((!((map__54146 == null)))?(((((map__54146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54146):map__54146);
var line = cljs.core.get.call(null,map__54146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__54146__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.count.call(null,(function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__54148,base,ctx){
var map__54149 = p__54148;
var map__54149__$1 = ((((!((map__54149 == null)))?(((((map__54149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54149):map__54149);
var line = cljs.core.get.call(null,map__54149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var kline = cljs.core.get.call(null,map__54149__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
var color = cljs.core.get.call(null,map__54149__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var hideY = cljs.core.get.call(null,map__54149__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));
var centerY = cljs.core.get.call(null,map__54149__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270));
var vec__54151 = base;
var w = cljs.core.nth.call(null,vec__54151,(0),null);
var h = cljs.core.nth.call(null,vec__54151,(1),null);
var max_v = cljs.core.nth.call(null,vec__54151,(2),null);
var min_v = cljs.core.nth.call(null,vec__54151,(3),null);
var offset_v = cljs.core.nth.call(null,vec__54151,(4),null);
var offset_x = cljs.core.nth.call(null,vec__54151,(5),null);
var pos_y = cljs.core.nth.call(null,vec__54151,(6),null);
var cnt = (10);
var cntx = (5);
var offset = ((max_v - min_v) / cnt);
(ctx["strokeStyle"] = color);

(ctx["fillStyle"] = color);

(ctx["lineWidth"] = (1));

ctx.beginPath();

if(cljs.core.truth_(hideY)){
} else {
var seq__54154_54166 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));
var chunk__54155_54167 = null;
var count__54156_54168 = (0);
var i__54157_54169 = (0);
while(true){
if((i__54157_54169 < count__54156_54168)){
var i_54170 = cljs.core._nth.call(null,chunk__54155_54167,i__54157_54169);
var v_54171 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() - (i_54170 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54171.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_54171));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54171.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_54171));

ctx.moveTo((0),pos_y.call(null,v_54171));

ctx.lineTo(w,pos_y.call(null,v_54171));

var v_54172 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() + (i_54170 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54172.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_54172));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54172.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_54172));

ctx.moveTo((0),pos_y.call(null,v_54172));

ctx.lineTo(w,pos_y.call(null,v_54172));


var G__54173 = seq__54154_54166;
var G__54174 = chunk__54155_54167;
var G__54175 = count__54156_54168;
var G__54176 = (i__54157_54169 + (1));
seq__54154_54166 = G__54173;
chunk__54155_54167 = G__54174;
count__54156_54168 = G__54175;
i__54157_54169 = G__54176;
continue;
} else {
var temp__5457__auto___54177 = cljs.core.seq.call(null,seq__54154_54166);
if(temp__5457__auto___54177){
var seq__54154_54178__$1 = temp__5457__auto___54177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54154_54178__$1)){
var c__4319__auto___54179 = cljs.core.chunk_first.call(null,seq__54154_54178__$1);
var G__54180 = cljs.core.chunk_rest.call(null,seq__54154_54178__$1);
var G__54181 = c__4319__auto___54179;
var G__54182 = cljs.core.count.call(null,c__4319__auto___54179);
var G__54183 = (0);
seq__54154_54166 = G__54180;
chunk__54155_54167 = G__54181;
count__54156_54168 = G__54182;
i__54157_54169 = G__54183;
continue;
} else {
var i_54184 = cljs.core.first.call(null,seq__54154_54178__$1);
var v_54185 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() - (i_54184 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54185.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_54185));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54185.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_54185));

ctx.moveTo((0),pos_y.call(null,v_54185));

ctx.lineTo(w,pos_y.call(null,v_54185));

var v_54186 = ((function (){var or__3922__auto__ = centerY;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return min_v;
}
})() + (i_54184 * offset));
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54186.toFixed((2)))].join(''),(w * ((1) / (3))),pos_y.call(null,v_54186));

ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54186.toFixed((2)))].join(''),(w * ((2) / (3))),pos_y.call(null,v_54186));

ctx.moveTo((0),pos_y.call(null,v_54186));

ctx.lineTo(w,pos_y.call(null,v_54186));


var G__54187 = cljs.core.next.call(null,seq__54154_54178__$1);
var G__54188 = null;
var G__54189 = (0);
var G__54190 = (0);
seq__54154_54166 = G__54187;
chunk__54155_54167 = G__54188;
count__54156_54168 = G__54189;
i__54157_54169 = G__54190;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.truth_(kline)){
var seq__54158_54191 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));
var chunk__54159_54192 = null;
var count__54160_54193 = (0);
var i__54161_54194 = (0);
while(true){
if((i__54161_54194 < count__54160_54193)){
var i_54195 = cljs.core._nth.call(null,chunk__54159_54192,i__54161_54194);
if((cljs.core.mod.call(null,i_54195,cntx) === (0))){
var posx_54196 = ((offset_x / (2)) + (i_54195 * offset_x));
ctx.moveTo(posx_54196,(0));

ctx.lineTo(posx_54196,h);
} else {
}


var G__54197 = seq__54158_54191;
var G__54198 = chunk__54159_54192;
var G__54199 = count__54160_54193;
var G__54200 = (i__54161_54194 + (1));
seq__54158_54191 = G__54197;
chunk__54159_54192 = G__54198;
count__54160_54193 = G__54199;
i__54161_54194 = G__54200;
continue;
} else {
var temp__5457__auto___54201 = cljs.core.seq.call(null,seq__54158_54191);
if(temp__5457__auto___54201){
var seq__54158_54202__$1 = temp__5457__auto___54201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54158_54202__$1)){
var c__4319__auto___54203 = cljs.core.chunk_first.call(null,seq__54158_54202__$1);
var G__54204 = cljs.core.chunk_rest.call(null,seq__54158_54202__$1);
var G__54205 = c__4319__auto___54203;
var G__54206 = cljs.core.count.call(null,c__4319__auto___54203);
var G__54207 = (0);
seq__54158_54191 = G__54204;
chunk__54159_54192 = G__54205;
count__54160_54193 = G__54206;
i__54161_54194 = G__54207;
continue;
} else {
var i_54208 = cljs.core.first.call(null,seq__54158_54202__$1);
if((cljs.core.mod.call(null,i_54208,cntx) === (0))){
var posx_54209 = ((offset_x / (2)) + (i_54208 * offset_x));
ctx.moveTo(posx_54209,(0));

ctx.lineTo(posx_54209,h);
} else {
}


var G__54210 = cljs.core.next.call(null,seq__54158_54202__$1);
var G__54211 = null;
var G__54212 = (0);
var G__54213 = (0);
seq__54158_54191 = G__54210;
chunk__54159_54192 = G__54211;
count__54160_54193 = G__54212;
i__54161_54194 = G__54213;
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
var seq__54162_54214 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));
var chunk__54163_54215 = null;
var count__54164_54216 = (0);
var i__54165_54217 = (0);
while(true){
if((i__54165_54217 < count__54164_54216)){
var i_54218 = cljs.core._nth.call(null,chunk__54163_54215,i__54165_54217);
if((cljs.core.mod.call(null,i_54218,cntx) === (0))){
var posx_54219 = ((offset_x / (2)) + (i_54218 * offset_x));
ctx.moveTo(posx_54219,(0));

ctx.lineTo(posx_54219,h);
} else {
}


var G__54220 = seq__54162_54214;
var G__54221 = chunk__54163_54215;
var G__54222 = count__54164_54216;
var G__54223 = (i__54165_54217 + (1));
seq__54162_54214 = G__54220;
chunk__54163_54215 = G__54221;
count__54164_54216 = G__54222;
i__54165_54217 = G__54223;
continue;
} else {
var temp__5457__auto___54224 = cljs.core.seq.call(null,seq__54162_54214);
if(temp__5457__auto___54224){
var seq__54162_54225__$1 = temp__5457__auto___54224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54162_54225__$1)){
var c__4319__auto___54226 = cljs.core.chunk_first.call(null,seq__54162_54225__$1);
var G__54227 = cljs.core.chunk_rest.call(null,seq__54162_54225__$1);
var G__54228 = c__4319__auto___54226;
var G__54229 = cljs.core.count.call(null,c__4319__auto___54226);
var G__54230 = (0);
seq__54162_54214 = G__54227;
chunk__54163_54215 = G__54228;
count__54164_54216 = G__54229;
i__54165_54217 = G__54230;
continue;
} else {
var i_54231 = cljs.core.first.call(null,seq__54162_54225__$1);
if((cljs.core.mod.call(null,i_54231,cntx) === (0))){
var posx_54232 = ((offset_x / (2)) + (i_54231 * offset_x));
ctx.moveTo(posx_54232,(0));

ctx.lineTo(posx_54232,h);
} else {
}


var G__54233 = cljs.core.next.call(null,seq__54162_54225__$1);
var G__54234 = null;
var G__54235 = (0);
var G__54236 = (0);
seq__54162_54214 = G__54233;
chunk__54163_54215 = G__54234;
count__54164_54216 = G__54235;
i__54165_54217 = G__54236;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__54237){
var map__54238 = p__54237;
var map__54238__$1 = ((((!((map__54238 == null)))?(((((map__54238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54238):map__54238);
var line = cljs.core.get.call(null,map__54238__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__54240){
var map__54241 = p__54240;
var map__54241__$1 = ((((!((map__54241 == null)))?(((((map__54241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54241):map__54241);
var line = cljs.core.get.call(null,map__54241__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__54243){
var map__54244 = p__54243;
var map__54244__$1 = ((((!((map__54244 == null)))?(((((map__54244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54244):map__54244);
var line = cljs.core.get.call(null,map__54244__$1,new cljs.core.Keyword(null,"line","line",212345235));
return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__54246,base,ctx){
var map__54247 = p__54246;
var map__54247__$1 = ((((!((map__54247 == null)))?(((((map__54247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54247):map__54247);
var line = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"line","line",212345235));
var color = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var offset = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var style = cljs.core.get.call(null,map__54247__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vec__54249 = base;
var w = cljs.core.nth.call(null,vec__54249,(0),null);
var h = cljs.core.nth.call(null,vec__54249,(1),null);
var max_v = cljs.core.nth.call(null,vec__54249,(2),null);
var min_v = cljs.core.nth.call(null,vec__54249,(3),null);
var offset_v = cljs.core.nth.call(null,vec__54249,(4),null);
var offset_x = cljs.core.nth.call(null,vec__54249,(5),null);
var pos_y = cljs.core.nth.call(null,vec__54249,(6),null);
var offset__$1 = (function (){var or__3922__auto__ = offset;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
(ctx["strokeStyle"] = color);

(ctx["lineWidth"] = (1));

var pred__54252 = cljs.core._EQ_;
var expr__54253 = style;
if(cljs.core.truth_(pred__54252.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__54253))){
(ctx["fillStyle"] = color);

var seq__54255 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));
var chunk__54256 = null;
var count__54257 = (0);
var i__54258 = (0);
while(true){
if((i__54258 < count__54257)){
var vec__54259 = cljs.core._nth.call(null,chunk__54256,i__54258);
var idx = cljs.core.nth.call(null,vec__54259,(0),null);
var value = cljs.core.nth.call(null,vec__54259,(1),null);
ctx.beginPath();

ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);

ctx.closePath();

ctx.fill();


var G__54275 = seq__54255;
var G__54276 = chunk__54256;
var G__54277 = count__54257;
var G__54278 = (i__54258 + (1));
seq__54255 = G__54275;
chunk__54256 = G__54276;
count__54257 = G__54277;
i__54258 = G__54278;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54255);
if(temp__5457__auto__){
var seq__54255__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54255__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54255__$1);
var G__54279 = cljs.core.chunk_rest.call(null,seq__54255__$1);
var G__54280 = c__4319__auto__;
var G__54281 = cljs.core.count.call(null,c__4319__auto__);
var G__54282 = (0);
seq__54255 = G__54279;
chunk__54256 = G__54280;
count__54257 = G__54281;
i__54258 = G__54282;
continue;
} else {
var vec__54262 = cljs.core.first.call(null,seq__54255__$1);
var idx = cljs.core.nth.call(null,vec__54262,(0),null);
var value = cljs.core.nth.call(null,vec__54262,(1),null);
ctx.beginPath();

ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);

ctx.closePath();

ctx.fill();


var G__54283 = cljs.core.next.call(null,seq__54255__$1);
var G__54284 = null;
var G__54285 = (0);
var G__54286 = (0);
seq__54255 = G__54283;
chunk__54256 = G__54284;
count__54257 = G__54285;
i__54258 = G__54286;
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

var seq__54265_54287 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__54252,expr__54253,vec__54249,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__54247,map__54247__$1,line,color,offset,style){
return (function() { 
var G__54291__delegate = function (args){
return args;
};
var G__54291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54292__i = 0, G__54292__a = new Array(arguments.length -  0);
while (G__54292__i < G__54292__a.length) {G__54292__a[G__54292__i] = arguments[G__54292__i + 0]; ++G__54292__i;}
  args = new cljs.core.IndexedSeq(G__54292__a,0,null);
} 
return G__54291__delegate.call(this,args);};
G__54291.cljs$lang$maxFixedArity = 0;
G__54291.cljs$lang$applyTo = (function (arglist__54293){
var args = cljs.core.seq(arglist__54293);
return G__54291__delegate(args);
});
G__54291.cljs$core$IFn$_invoke$arity$variadic = G__54291__delegate;
return G__54291;
})()
;})(pred__54252,expr__54253,vec__54249,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__54247,map__54247__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));
var chunk__54266_54288 = null;
var count__54267_54289 = (0);
var i__54268_54290 = (0);
while(true){
if((i__54268_54290 < count__54267_54289)){
var vec__54269_54294 = cljs.core._nth.call(null,chunk__54266_54288,i__54268_54290);
var idx_54295 = cljs.core.nth.call(null,vec__54269_54294,(0),null);
var prev_54296 = cljs.core.nth.call(null,vec__54269_54294,(1),null);
var curr_54297 = cljs.core.nth.call(null,vec__54269_54294,(2),null);
ctx.moveTo(((idx_54295 + offset__$1) * offset_x),pos_y.call(null,prev_54296));

ctx.lineTo((((idx_54295 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_54297));


var G__54298 = seq__54265_54287;
var G__54299 = chunk__54266_54288;
var G__54300 = count__54267_54289;
var G__54301 = (i__54268_54290 + (1));
seq__54265_54287 = G__54298;
chunk__54266_54288 = G__54299;
count__54267_54289 = G__54300;
i__54268_54290 = G__54301;
continue;
} else {
var temp__5457__auto___54302 = cljs.core.seq.call(null,seq__54265_54287);
if(temp__5457__auto___54302){
var seq__54265_54303__$1 = temp__5457__auto___54302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54265_54303__$1)){
var c__4319__auto___54304 = cljs.core.chunk_first.call(null,seq__54265_54303__$1);
var G__54305 = cljs.core.chunk_rest.call(null,seq__54265_54303__$1);
var G__54306 = c__4319__auto___54304;
var G__54307 = cljs.core.count.call(null,c__4319__auto___54304);
var G__54308 = (0);
seq__54265_54287 = G__54305;
chunk__54266_54288 = G__54306;
count__54267_54289 = G__54307;
i__54268_54290 = G__54308;
continue;
} else {
var vec__54272_54309 = cljs.core.first.call(null,seq__54265_54303__$1);
var idx_54310 = cljs.core.nth.call(null,vec__54272_54309,(0),null);
var prev_54311 = cljs.core.nth.call(null,vec__54272_54309,(1),null);
var curr_54312 = cljs.core.nth.call(null,vec__54272_54309,(2),null);
ctx.moveTo(((idx_54310 + offset__$1) * offset_x),pos_y.call(null,prev_54311));

ctx.lineTo((((idx_54310 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_54312));


var G__54313 = cljs.core.next.call(null,seq__54265_54303__$1);
var G__54314 = null;
var G__54315 = (0);
var G__54316 = (0);
seq__54265_54287 = G__54313;
chunk__54266_54288 = G__54314;
count__54267_54289 = G__54315;
i__54268_54290 = G__54316;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__54317){
var map__54318 = p__54317;
var map__54318__$1 = ((((!((map__54318 == null)))?(((((map__54318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54318):map__54318);
var kline = cljs.core.get.call(null,map__54318__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__54320){
var map__54321 = p__54320;
var map__54321__$1 = ((((!((map__54321 == null)))?(((((map__54321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54321):map__54321);
var kline = cljs.core.get.call(null,map__54321__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__54323){
var map__54324 = p__54323;
var map__54324__$1 = ((((!((map__54324 == null)))?(((((map__54324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54324):map__54324);
var kline = cljs.core.get.call(null,map__54324__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__54326,base,ctx){
var map__54327 = p__54326;
var map__54327__$1 = ((((!((map__54327 == null)))?(((((map__54327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54327):map__54327);
var kline = cljs.core.get.call(null,map__54327__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));
var info = cljs.core.get.call(null,map__54327__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var vec__54329 = base;
var w = cljs.core.nth.call(null,vec__54329,(0),null);
var h = cljs.core.nth.call(null,vec__54329,(1),null);
var max_v = cljs.core.nth.call(null,vec__54329,(2),null);
var min_v = cljs.core.nth.call(null,vec__54329,(3),null);
var offset_v = cljs.core.nth.call(null,vec__54329,(4),null);
var offset_x = cljs.core.nth.call(null,vec__54329,(5),null);
var pos_y = cljs.core.nth.call(null,vec__54329,(6),null);
(ctx["fillStyle"] = "black");

var seq__54332 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__54329,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__54327,map__54327__$1,kline,info){
return (function() { 
var G__54348__delegate = function (args){
return args;
};
var G__54348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54349__i = 0, G__54349__a = new Array(arguments.length -  0);
while (G__54349__i < G__54349__a.length) {G__54349__a[G__54349__i] = arguments[G__54349__i + 0]; ++G__54349__i;}
  args = new cljs.core.IndexedSeq(G__54349__a,0,null);
} 
return G__54348__delegate.call(this,args);};
G__54348.cljs$lang$maxFixedArity = 0;
G__54348.cljs$lang$applyTo = (function (arglist__54350){
var args = cljs.core.seq(arglist__54350);
return G__54348__delegate(args);
});
G__54348.cljs$core$IFn$_invoke$arity$variadic = G__54348__delegate;
return G__54348;
})()
;})(vec__54329,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__54327,map__54327__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3922__auto__ = info;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return kline;
}
})()));
var chunk__54333 = null;
var count__54334 = (0);
var i__54335 = (0);
while(true){
if((i__54335 < count__54334)){
var vec__54336 = cljs.core._nth.call(null,chunk__54333,i__54335);
var idx = cljs.core.nth.call(null,vec__54336,(0),null);
var vec__54339 = cljs.core.nth.call(null,vec__54336,(1),null);
var date = cljs.core.nth.call(null,vec__54339,(0),null);
var open = cljs.core.nth.call(null,vec__54339,(1),null);
var high = cljs.core.nth.call(null,vec__54339,(2),null);
var low = cljs.core.nth.call(null,vec__54339,(3),null);
var close = cljs.core.nth.call(null,vec__54339,(4),null);
var volume = cljs.core.nth.call(null,vec__54339,(5),null);
var info__$1 = cljs.core.nth.call(null,vec__54336,(2),null);
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



var G__54351 = seq__54332;
var G__54352 = chunk__54333;
var G__54353 = count__54334;
var G__54354 = (i__54335 + (1));
seq__54332 = G__54351;
chunk__54333 = G__54352;
count__54334 = G__54353;
i__54335 = G__54354;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54332);
if(temp__5457__auto__){
var seq__54332__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54332__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54332__$1);
var G__54355 = cljs.core.chunk_rest.call(null,seq__54332__$1);
var G__54356 = c__4319__auto__;
var G__54357 = cljs.core.count.call(null,c__4319__auto__);
var G__54358 = (0);
seq__54332 = G__54355;
chunk__54333 = G__54356;
count__54334 = G__54357;
i__54335 = G__54358;
continue;
} else {
var vec__54342 = cljs.core.first.call(null,seq__54332__$1);
var idx = cljs.core.nth.call(null,vec__54342,(0),null);
var vec__54345 = cljs.core.nth.call(null,vec__54342,(1),null);
var date = cljs.core.nth.call(null,vec__54345,(0),null);
var open = cljs.core.nth.call(null,vec__54345,(1),null);
var high = cljs.core.nth.call(null,vec__54345,(2),null);
var low = cljs.core.nth.call(null,vec__54345,(3),null);
var close = cljs.core.nth.call(null,vec__54345,(4),null);
var volume = cljs.core.nth.call(null,vec__54345,(5),null);
var info__$1 = cljs.core.nth.call(null,vec__54342,(2),null);
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



var G__54359 = cljs.core.next.call(null,seq__54332__$1);
var G__54360 = null;
var G__54361 = (0);
var G__54362 = (0);
seq__54332 = G__54359;
chunk__54333 = G__54360;
count__54334 = G__54361;
i__54335 = G__54362;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__54363){
var map__54364 = p__54363;
var map__54364__$1 = ((((!((map__54364 == null)))?(((((map__54364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54364):map__54364);
var cz = cljs.core.get.call(null,map__54364__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));
return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__54366){
var map__54367 = p__54366;
var map__54367__$1 = ((((!((map__54367 == null)))?(((((map__54367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54367):map__54367);
var cz = cljs.core.get.call(null,map__54367__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));
return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__54369,base,ctx){
var map__54370 = p__54369;
var map__54370__$1 = ((((!((map__54370 == null)))?(((((map__54370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54370):map__54370);
var cz = cljs.core.get.call(null,map__54370__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));
var vz = cljs.core.get.call(null,map__54370__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));
var color = cljs.core.get.call(null,map__54370__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var vec__54372 = base;
var w = cljs.core.nth.call(null,vec__54372,(0),null);
var h = cljs.core.nth.call(null,vec__54372,(1),null);
var max_v = cljs.core.nth.call(null,vec__54372,(2),null);
var min_v = cljs.core.nth.call(null,vec__54372,(3),null);
var offset_v = cljs.core.nth.call(null,vec__54372,(4),null);
var offset_x = cljs.core.nth.call(null,vec__54372,(5),null);
var pos_y = cljs.core.nth.call(null,vec__54372,(6),null);
var proj_x = ((function (vec__54372,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__54370,map__54370__$1,cz,vz,color){
return (function (v){
return ((v * (w / (8))) + (w / (2)));
});})(vec__54372,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__54370,map__54370__$1,cz,vz,color))
;
var proj_y = ((function (vec__54372,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__54370,map__54370__$1,cz,vz,color){
return (function (v){
return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__54372,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__54370,map__54370__$1,cz,vz,color))
;
(ctx["fillStyle"] = color);

(ctx["strokeStyle"] = color);

var seq__54375 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__54372,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__54370,map__54370__$1,cz,vz,color){
return (function() { 
var G__54385__delegate = function (args){
return args;
};
var G__54385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54386__i = 0, G__54386__a = new Array(arguments.length -  0);
while (G__54386__i < G__54386__a.length) {G__54386__a[G__54386__i] = arguments[G__54386__i + 0]; ++G__54386__i;}
  args = new cljs.core.IndexedSeq(G__54386__a,0,null);
} 
return G__54385__delegate.call(this,args);};
G__54385.cljs$lang$maxFixedArity = 0;
G__54385.cljs$lang$applyTo = (function (arglist__54387){
var args = cljs.core.seq(arglist__54387);
return G__54385__delegate(args);
});
G__54385.cljs$core$IFn$_invoke$arity$variadic = G__54385__delegate;
return G__54385;
})()
;})(vec__54372,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__54370,map__54370__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));
var chunk__54376 = null;
var count__54377 = (0);
var i__54378 = (0);
while(true){
if((i__54378 < count__54377)){
var vec__54379 = cljs.core._nth.call(null,chunk__54376,i__54378);
var idx = cljs.core.nth.call(null,vec__54379,(0),null);
var pc = cljs.core.nth.call(null,vec__54379,(1),null);
var cc = cljs.core.nth.call(null,vec__54379,(2),null);
var pv = cljs.core.nth.call(null,vec__54379,(3),null);
var cv = cljs.core.nth.call(null,vec__54379,(4),null);
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),proj_x.call(null,pv),proj_y.call(null,pc));

ctx.beginPath();

ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));

ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));

ctx.stroke();



var G__54388 = seq__54375;
var G__54389 = chunk__54376;
var G__54390 = count__54377;
var G__54391 = (i__54378 + (1));
seq__54375 = G__54388;
chunk__54376 = G__54389;
count__54377 = G__54390;
i__54378 = G__54391;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54375);
if(temp__5457__auto__){
var seq__54375__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54375__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54375__$1);
var G__54392 = cljs.core.chunk_rest.call(null,seq__54375__$1);
var G__54393 = c__4319__auto__;
var G__54394 = cljs.core.count.call(null,c__4319__auto__);
var G__54395 = (0);
seq__54375 = G__54392;
chunk__54376 = G__54393;
count__54377 = G__54394;
i__54378 = G__54395;
continue;
} else {
var vec__54382 = cljs.core.first.call(null,seq__54375__$1);
var idx = cljs.core.nth.call(null,vec__54382,(0),null);
var pc = cljs.core.nth.call(null,vec__54382,(1),null);
var cc = cljs.core.nth.call(null,vec__54382,(2),null);
var pv = cljs.core.nth.call(null,vec__54382,(3),null);
var cv = cljs.core.nth.call(null,vec__54382,(4),null);
ctx.fillText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),proj_x.call(null,pv),proj_y.call(null,pc));

ctx.beginPath();

ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));

ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));

ctx.stroke();



var G__54396 = cljs.core.next.call(null,seq__54375__$1);
var G__54397 = null;
var G__54398 = (0);
var G__54399 = (0);
seq__54375 = G__54396;
chunk__54376 = G__54397;
count__54377 = G__54398;
i__54378 = G__54399;
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
