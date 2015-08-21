// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49118){var map__49119 = p__49118;var map__49119__$1 = ((cljs.core.seq_QMARK_.call(null,map__49119))?cljs.core.apply.call(null,cljs.core.hash_map,map__49119):map__49119);var t = cljs.core.get.call(null,map__49119__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49120){var map__49121 = p__49120;var map__49121__$1 = ((cljs.core.seq_QMARK_.call(null,map__49121))?cljs.core.apply.call(null,cljs.core.hash_map,map__49121):map__49121);var t = cljs.core.get.call(null,map__49121__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49122){var map__49123 = p__49122;var map__49123__$1 = ((cljs.core.seq_QMARK_.call(null,map__49123))?cljs.core.apply.call(null,cljs.core.hash_map,map__49123):map__49123);var t = cljs.core.get.call(null,map__49123__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__49124,base,ctx){var map__49125 = p__49124;var map__49125__$1 = ((cljs.core.seq_QMARK_.call(null,map__49125))?cljs.core.apply.call(null,cljs.core.hash_map,map__49125):map__49125);var t = cljs.core.get.call(null,map__49125__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__49126,w,h,ctx){var map__49132 = p__49126;var map__49132__$1 = ((cljs.core.seq_QMARK_.call(null,map__49132))?cljs.core.apply.call(null,cljs.core.hash_map,map__49132):map__49132);var info = map__49132__$1;var drawers = cljs.core.get.call(null,map__49132__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__49133 = cljs.core.seq.call(null,drawers);var chunk__49134 = null;var count__49135 = (0);var i__49136 = (0);while(true){
if((i__49136 < count__49135))
{var drawer = cljs.core._nth.call(null,chunk__49134,i__49136);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__49137 = seq__49133;
var G__49138 = chunk__49134;
var G__49139 = count__49135;
var G__49140 = (i__49136 + (1));
seq__49133 = G__49137;
chunk__49134 = G__49138;
count__49135 = G__49139;
i__49136 = G__49140;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49133);if(temp__4126__auto__)
{var seq__49133__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49133__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49133__$1);{
var G__49141 = cljs.core.chunk_rest.call(null,seq__49133__$1);
var G__49142 = c__4307__auto__;
var G__49143 = cljs.core.count.call(null,c__4307__auto__);
var G__49144 = (0);
seq__49133 = G__49141;
chunk__49134 = G__49142;
count__49135 = G__49143;
i__49136 = G__49144;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__49133__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__49145 = cljs.core.next.call(null,seq__49133__$1);
var G__49146 = null;
var G__49147 = (0);
var G__49148 = (0);
seq__49133 = G__49145;
chunk__49134 = G__49146;
count__49135 = G__49147;
i__49136 = G__49148;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49149){var map__49150 = p__49149;var map__49150__$1 = ((cljs.core.seq_QMARK_.call(null,map__49150))?cljs.core.apply.call(null,cljs.core.hash_map,map__49150):map__49150);var line = cljs.core.get.call(null,map__49150__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49150__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49151){var map__49152 = p__49151;var map__49152__$1 = ((cljs.core.seq_QMARK_.call(null,map__49152))?cljs.core.apply.call(null,cljs.core.hash_map,map__49152):map__49152);var line = cljs.core.get.call(null,map__49152__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49152__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49153){var map__49154 = p__49153;var map__49154__$1 = ((cljs.core.seq_QMARK_.call(null,map__49154))?cljs.core.apply.call(null,cljs.core.hash_map,map__49154):map__49154);var line = cljs.core.get.call(null,map__49154__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49154__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__49155,base,ctx){var map__49156 = p__49155;var map__49156__$1 = ((cljs.core.seq_QMARK_.call(null,map__49156))?cljs.core.apply.call(null,cljs.core.hash_map,map__49156):map__49156);var line = cljs.core.get.call(null,map__49156__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__49156__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__49156__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__49156__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__49157 = base;var w = cljs.core.nth.call(null,vec__49157,(0),null);var h = cljs.core.nth.call(null,vec__49157,(1),null);var max_v = cljs.core.nth.call(null,vec__49157,(2),null);var min_v = cljs.core.nth.call(null,vec__49157,(3),null);var offset_v = cljs.core.nth.call(null,vec__49157,(4),null);var offset_x = cljs.core.nth.call(null,vec__49157,(5),null);var pos_y = cljs.core.nth.call(null,vec__49157,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__49158_49170 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__49159_49171 = null;var count__49160_49172 = (0);var i__49161_49173 = (0);while(true){
if((i__49161_49173 < count__49160_49172))
{var i_49174 = cljs.core._nth.call(null,chunk__49159_49171,i__49161_49173);var v_49175 = (min_v + (i_49174 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49175.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_49175));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49175.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_49175));
ctx.moveTo((0),pos_y.call(null,v_49175));
ctx.lineTo(w,pos_y.call(null,v_49175));
{
var G__49176 = seq__49158_49170;
var G__49177 = chunk__49159_49171;
var G__49178 = count__49160_49172;
var G__49179 = (i__49161_49173 + (1));
seq__49158_49170 = G__49176;
chunk__49159_49171 = G__49177;
count__49160_49172 = G__49178;
i__49161_49173 = G__49179;
continue;
}
} else
{var temp__4126__auto___49180 = cljs.core.seq.call(null,seq__49158_49170);if(temp__4126__auto___49180)
{var seq__49158_49181__$1 = temp__4126__auto___49180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49158_49181__$1))
{var c__4307__auto___49182 = cljs.core.chunk_first.call(null,seq__49158_49181__$1);{
var G__49183 = cljs.core.chunk_rest.call(null,seq__49158_49181__$1);
var G__49184 = c__4307__auto___49182;
var G__49185 = cljs.core.count.call(null,c__4307__auto___49182);
var G__49186 = (0);
seq__49158_49170 = G__49183;
chunk__49159_49171 = G__49184;
count__49160_49172 = G__49185;
i__49161_49173 = G__49186;
continue;
}
} else
{var i_49187 = cljs.core.first.call(null,seq__49158_49181__$1);var v_49188 = (min_v + (i_49187 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49188.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_49188));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_49188.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_49188));
ctx.moveTo((0),pos_y.call(null,v_49188));
ctx.lineTo(w,pos_y.call(null,v_49188));
{
var G__49189 = cljs.core.next.call(null,seq__49158_49181__$1);
var G__49190 = null;
var G__49191 = (0);
var G__49192 = (0);
seq__49158_49170 = G__49189;
chunk__49159_49171 = G__49190;
count__49160_49172 = G__49191;
i__49161_49173 = G__49192;
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
{var seq__49162_49193 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__49163_49194 = null;var count__49164_49195 = (0);var i__49165_49196 = (0);while(true){
if((i__49165_49196 < count__49164_49195))
{var i_49197 = cljs.core._nth.call(null,chunk__49163_49194,i__49165_49196);if((cljs.core.mod.call(null,i_49197,cntx) === (0)))
{var posx_49198 = ((offset_x / (2)) + (i_49197 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_49197)),posx_49198,h);
ctx.moveTo(posx_49198,(0));
ctx.lineTo(posx_49198,h);
} else
{}
{
var G__49199 = seq__49162_49193;
var G__49200 = chunk__49163_49194;
var G__49201 = count__49164_49195;
var G__49202 = (i__49165_49196 + (1));
seq__49162_49193 = G__49199;
chunk__49163_49194 = G__49200;
count__49164_49195 = G__49201;
i__49165_49196 = G__49202;
continue;
}
} else
{var temp__4126__auto___49203 = cljs.core.seq.call(null,seq__49162_49193);if(temp__4126__auto___49203)
{var seq__49162_49204__$1 = temp__4126__auto___49203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49162_49204__$1))
{var c__4307__auto___49205 = cljs.core.chunk_first.call(null,seq__49162_49204__$1);{
var G__49206 = cljs.core.chunk_rest.call(null,seq__49162_49204__$1);
var G__49207 = c__4307__auto___49205;
var G__49208 = cljs.core.count.call(null,c__4307__auto___49205);
var G__49209 = (0);
seq__49162_49193 = G__49206;
chunk__49163_49194 = G__49207;
count__49164_49195 = G__49208;
i__49165_49196 = G__49209;
continue;
}
} else
{var i_49210 = cljs.core.first.call(null,seq__49162_49204__$1);if((cljs.core.mod.call(null,i_49210,cntx) === (0)))
{var posx_49211 = ((offset_x / (2)) + (i_49210 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_49210)),posx_49211,h);
ctx.moveTo(posx_49211,(0));
ctx.lineTo(posx_49211,h);
} else
{}
{
var G__49212 = cljs.core.next.call(null,seq__49162_49204__$1);
var G__49213 = null;
var G__49214 = (0);
var G__49215 = (0);
seq__49162_49193 = G__49212;
chunk__49163_49194 = G__49213;
count__49164_49195 = G__49214;
i__49165_49196 = G__49215;
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
{var seq__49166_49216 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__49167_49217 = null;var count__49168_49218 = (0);var i__49169_49219 = (0);while(true){
if((i__49169_49219 < count__49168_49218))
{var i_49220 = cljs.core._nth.call(null,chunk__49167_49217,i__49169_49219);if((cljs.core.mod.call(null,i_49220,cntx) === (0)))
{var posx_49221 = ((offset_x / (2)) + (i_49220 * offset_x));ctx.moveTo(posx_49221,(0));
ctx.lineTo(posx_49221,h);
} else
{}
{
var G__49222 = seq__49166_49216;
var G__49223 = chunk__49167_49217;
var G__49224 = count__49168_49218;
var G__49225 = (i__49169_49219 + (1));
seq__49166_49216 = G__49222;
chunk__49167_49217 = G__49223;
count__49168_49218 = G__49224;
i__49169_49219 = G__49225;
continue;
}
} else
{var temp__4126__auto___49226 = cljs.core.seq.call(null,seq__49166_49216);if(temp__4126__auto___49226)
{var seq__49166_49227__$1 = temp__4126__auto___49226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49166_49227__$1))
{var c__4307__auto___49228 = cljs.core.chunk_first.call(null,seq__49166_49227__$1);{
var G__49229 = cljs.core.chunk_rest.call(null,seq__49166_49227__$1);
var G__49230 = c__4307__auto___49228;
var G__49231 = cljs.core.count.call(null,c__4307__auto___49228);
var G__49232 = (0);
seq__49166_49216 = G__49229;
chunk__49167_49217 = G__49230;
count__49168_49218 = G__49231;
i__49169_49219 = G__49232;
continue;
}
} else
{var i_49233 = cljs.core.first.call(null,seq__49166_49227__$1);if((cljs.core.mod.call(null,i_49233,cntx) === (0)))
{var posx_49234 = ((offset_x / (2)) + (i_49233 * offset_x));ctx.moveTo(posx_49234,(0));
ctx.lineTo(posx_49234,h);
} else
{}
{
var G__49235 = cljs.core.next.call(null,seq__49166_49227__$1);
var G__49236 = null;
var G__49237 = (0);
var G__49238 = (0);
seq__49166_49216 = G__49235;
chunk__49167_49217 = G__49236;
count__49168_49218 = G__49237;
i__49169_49219 = G__49238;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49239){var map__49240 = p__49239;var map__49240__$1 = ((cljs.core.seq_QMARK_.call(null,map__49240))?cljs.core.apply.call(null,cljs.core.hash_map,map__49240):map__49240);var line = cljs.core.get.call(null,map__49240__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49241){var map__49242 = p__49241;var map__49242__$1 = ((cljs.core.seq_QMARK_.call(null,map__49242))?cljs.core.apply.call(null,cljs.core.hash_map,map__49242):map__49242);var line = cljs.core.get.call(null,map__49242__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49243){var map__49244 = p__49243;var map__49244__$1 = ((cljs.core.seq_QMARK_.call(null,map__49244))?cljs.core.apply.call(null,cljs.core.hash_map,map__49244):map__49244);var line = cljs.core.get.call(null,map__49244__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__49245,base,ctx){var map__49246 = p__49245;var map__49246__$1 = ((cljs.core.seq_QMARK_.call(null,map__49246))?cljs.core.apply.call(null,cljs.core.hash_map,map__49246):map__49246);var line = cljs.core.get.call(null,map__49246__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__49246__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__49246__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__49246__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__49247 = base;var w = cljs.core.nth.call(null,vec__49247,(0),null);var h = cljs.core.nth.call(null,vec__49247,(1),null);var max_v = cljs.core.nth.call(null,vec__49247,(2),null);var min_v = cljs.core.nth.call(null,vec__49247,(3),null);var offset_v = cljs.core.nth.call(null,vec__49247,(4),null);var offset_x = cljs.core.nth.call(null,vec__49247,(5),null);var pos_y = cljs.core.nth.call(null,vec__49247,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__49248 = cljs.core._EQ_;var expr__49249 = style;if(cljs.core.truth_(pred__49248.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__49249)))
{var seq__49251 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__49252 = null;var count__49253 = (0);var i__49254 = (0);while(true){
if((i__49254 < count__49253))
{var vec__49255 = cljs.core._nth.call(null,chunk__49252,i__49254);var idx = cljs.core.nth.call(null,vec__49255,(0),null);var value = cljs.core.nth.call(null,vec__49255,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__49263 = seq__49251;
var G__49264 = chunk__49252;
var G__49265 = count__49253;
var G__49266 = (i__49254 + (1));
seq__49251 = G__49263;
chunk__49252 = G__49264;
count__49253 = G__49265;
i__49254 = G__49266;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49251);if(temp__4126__auto__)
{var seq__49251__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49251__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49251__$1);{
var G__49267 = cljs.core.chunk_rest.call(null,seq__49251__$1);
var G__49268 = c__4307__auto__;
var G__49269 = cljs.core.count.call(null,c__4307__auto__);
var G__49270 = (0);
seq__49251 = G__49267;
chunk__49252 = G__49268;
count__49253 = G__49269;
i__49254 = G__49270;
continue;
}
} else
{var vec__49256 = cljs.core.first.call(null,seq__49251__$1);var idx = cljs.core.nth.call(null,vec__49256,(0),null);var value = cljs.core.nth.call(null,vec__49256,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__49271 = cljs.core.next.call(null,seq__49251__$1);
var G__49272 = null;
var G__49273 = (0);
var G__49274 = (0);
seq__49251 = G__49271;
chunk__49252 = G__49272;
count__49253 = G__49273;
i__49254 = G__49274;
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
var seq__49257_49275 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__49248,expr__49249,vec__49247,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__49246,map__49246__$1,line,color,offset,style){
return (function() { 
var G__49279__delegate = function (args){return args;
};
var G__49279 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49279__delegate.call(this,args);};
G__49279.cljs$lang$maxFixedArity = 0;
G__49279.cljs$lang$applyTo = (function (arglist__49280){
var args = cljs.core.seq(arglist__49280);
return G__49279__delegate(args);
});
G__49279.cljs$core$IFn$_invoke$arity$variadic = G__49279__delegate;
return G__49279;
})()
;})(pred__49248,expr__49249,vec__49247,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__49246,map__49246__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__49258_49276 = null;var count__49259_49277 = (0);var i__49260_49278 = (0);while(true){
if((i__49260_49278 < count__49259_49277))
{var vec__49261_49281 = cljs.core._nth.call(null,chunk__49258_49276,i__49260_49278);var idx_49282 = cljs.core.nth.call(null,vec__49261_49281,(0),null);var prev_49283 = cljs.core.nth.call(null,vec__49261_49281,(1),null);var curr_49284 = cljs.core.nth.call(null,vec__49261_49281,(2),null);ctx.moveTo(((idx_49282 + offset__$1) * offset_x),pos_y.call(null,prev_49283));
ctx.lineTo((((idx_49282 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_49284));
{
var G__49285 = seq__49257_49275;
var G__49286 = chunk__49258_49276;
var G__49287 = count__49259_49277;
var G__49288 = (i__49260_49278 + (1));
seq__49257_49275 = G__49285;
chunk__49258_49276 = G__49286;
count__49259_49277 = G__49287;
i__49260_49278 = G__49288;
continue;
}
} else
{var temp__4126__auto___49289 = cljs.core.seq.call(null,seq__49257_49275);if(temp__4126__auto___49289)
{var seq__49257_49290__$1 = temp__4126__auto___49289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49257_49290__$1))
{var c__4307__auto___49291 = cljs.core.chunk_first.call(null,seq__49257_49290__$1);{
var G__49292 = cljs.core.chunk_rest.call(null,seq__49257_49290__$1);
var G__49293 = c__4307__auto___49291;
var G__49294 = cljs.core.count.call(null,c__4307__auto___49291);
var G__49295 = (0);
seq__49257_49275 = G__49292;
chunk__49258_49276 = G__49293;
count__49259_49277 = G__49294;
i__49260_49278 = G__49295;
continue;
}
} else
{var vec__49262_49296 = cljs.core.first.call(null,seq__49257_49290__$1);var idx_49297 = cljs.core.nth.call(null,vec__49262_49296,(0),null);var prev_49298 = cljs.core.nth.call(null,vec__49262_49296,(1),null);var curr_49299 = cljs.core.nth.call(null,vec__49262_49296,(2),null);ctx.moveTo(((idx_49297 + offset__$1) * offset_x),pos_y.call(null,prev_49298));
ctx.lineTo((((idx_49297 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_49299));
{
var G__49300 = cljs.core.next.call(null,seq__49257_49290__$1);
var G__49301 = null;
var G__49302 = (0);
var G__49303 = (0);
seq__49257_49275 = G__49300;
chunk__49258_49276 = G__49301;
count__49259_49277 = G__49302;
i__49260_49278 = G__49303;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49304){var map__49305 = p__49304;var map__49305__$1 = ((cljs.core.seq_QMARK_.call(null,map__49305))?cljs.core.apply.call(null,cljs.core.hash_map,map__49305):map__49305);var kline = cljs.core.get.call(null,map__49305__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49306){var map__49307 = p__49306;var map__49307__$1 = ((cljs.core.seq_QMARK_.call(null,map__49307))?cljs.core.apply.call(null,cljs.core.hash_map,map__49307):map__49307);var kline = cljs.core.get.call(null,map__49307__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49308){var map__49309 = p__49308;var map__49309__$1 = ((cljs.core.seq_QMARK_.call(null,map__49309))?cljs.core.apply.call(null,cljs.core.hash_map,map__49309):map__49309);var kline = cljs.core.get.call(null,map__49309__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__49310,base,ctx){var map__49311 = p__49310;var map__49311__$1 = ((cljs.core.seq_QMARK_.call(null,map__49311))?cljs.core.apply.call(null,cljs.core.hash_map,map__49311):map__49311);var kline = cljs.core.get.call(null,map__49311__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__49311__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__49312 = base;var w = cljs.core.nth.call(null,vec__49312,(0),null);var h = cljs.core.nth.call(null,vec__49312,(1),null);var max_v = cljs.core.nth.call(null,vec__49312,(2),null);var min_v = cljs.core.nth.call(null,vec__49312,(3),null);var offset_v = cljs.core.nth.call(null,vec__49312,(4),null);var offset_x = cljs.core.nth.call(null,vec__49312,(5),null);var pos_y = cljs.core.nth.call(null,vec__49312,(6),null);(ctx["fillStyle"] = "black");
var seq__49313 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49312,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49311,map__49311__$1,kline,info){
return (function() { 
var G__49321__delegate = function (args){return args;
};
var G__49321 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49321__delegate.call(this,args);};
G__49321.cljs$lang$maxFixedArity = 0;
G__49321.cljs$lang$applyTo = (function (arglist__49322){
var args = cljs.core.seq(arglist__49322);
return G__49321__delegate(args);
});
G__49321.cljs$core$IFn$_invoke$arity$variadic = G__49321__delegate;
return G__49321;
})()
;})(vec__49312,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49311,map__49311__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__49314 = null;var count__49315 = (0);var i__49316 = (0);while(true){
if((i__49316 < count__49315))
{var vec__49317 = cljs.core._nth.call(null,chunk__49314,i__49316);var idx = cljs.core.nth.call(null,vec__49317,(0),null);var vec__49318 = cljs.core.nth.call(null,vec__49317,(1),null);var date = cljs.core.nth.call(null,vec__49318,(0),null);var open = cljs.core.nth.call(null,vec__49318,(1),null);var high = cljs.core.nth.call(null,vec__49318,(2),null);var low = cljs.core.nth.call(null,vec__49318,(3),null);var close = cljs.core.nth.call(null,vec__49318,(4),null);var volume = cljs.core.nth.call(null,vec__49318,(5),null);var info__$1 = cljs.core.nth.call(null,vec__49317,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__49323 = seq__49313;
var G__49324 = chunk__49314;
var G__49325 = count__49315;
var G__49326 = (i__49316 + (1));
seq__49313 = G__49323;
chunk__49314 = G__49324;
count__49315 = G__49325;
i__49316 = G__49326;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49313);if(temp__4126__auto__)
{var seq__49313__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49313__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49313__$1);{
var G__49327 = cljs.core.chunk_rest.call(null,seq__49313__$1);
var G__49328 = c__4307__auto__;
var G__49329 = cljs.core.count.call(null,c__4307__auto__);
var G__49330 = (0);
seq__49313 = G__49327;
chunk__49314 = G__49328;
count__49315 = G__49329;
i__49316 = G__49330;
continue;
}
} else
{var vec__49319 = cljs.core.first.call(null,seq__49313__$1);var idx = cljs.core.nth.call(null,vec__49319,(0),null);var vec__49320 = cljs.core.nth.call(null,vec__49319,(1),null);var date = cljs.core.nth.call(null,vec__49320,(0),null);var open = cljs.core.nth.call(null,vec__49320,(1),null);var high = cljs.core.nth.call(null,vec__49320,(2),null);var low = cljs.core.nth.call(null,vec__49320,(3),null);var close = cljs.core.nth.call(null,vec__49320,(4),null);var volume = cljs.core.nth.call(null,vec__49320,(5),null);var info__$1 = cljs.core.nth.call(null,vec__49319,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__49331 = cljs.core.next.call(null,seq__49313__$1);
var G__49332 = null;
var G__49333 = (0);
var G__49334 = (0);
seq__49313 = G__49331;
chunk__49314 = G__49332;
count__49315 = G__49333;
i__49316 = G__49334;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__49335){var map__49336 = p__49335;var map__49336__$1 = ((cljs.core.seq_QMARK_.call(null,map__49336))?cljs.core.apply.call(null,cljs.core.hash_map,map__49336):map__49336);var cz = cljs.core.get.call(null,map__49336__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__49337){var map__49338 = p__49337;var map__49338__$1 = ((cljs.core.seq_QMARK_.call(null,map__49338))?cljs.core.apply.call(null,cljs.core.hash_map,map__49338):map__49338);var cz = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__49339,base,ctx){var map__49340 = p__49339;var map__49340__$1 = ((cljs.core.seq_QMARK_.call(null,map__49340))?cljs.core.apply.call(null,cljs.core.hash_map,map__49340):map__49340);var cz = cljs.core.get.call(null,map__49340__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__49340__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__49340__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__49341 = base;var w = cljs.core.nth.call(null,vec__49341,(0),null);var h = cljs.core.nth.call(null,vec__49341,(1),null);var max_v = cljs.core.nth.call(null,vec__49341,(2),null);var min_v = cljs.core.nth.call(null,vec__49341,(3),null);var offset_v = cljs.core.nth.call(null,vec__49341,(4),null);var offset_x = cljs.core.nth.call(null,vec__49341,(5),null);var pos_y = cljs.core.nth.call(null,vec__49341,(6),null);var proj_x = ((function (vec__49341,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49340,map__49340__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__49341,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__49340,map__49340__$1,cz,vz,color))
;var proj_y = ((function (vec__49341,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__49340,map__49340__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__49341,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__49340,map__49340__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__49342 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49341,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__49340,map__49340__$1,cz,vz,color){
return (function() { 
var G__49348__delegate = function (args){return args;
};
var G__49348 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49348__delegate.call(this,args);};
G__49348.cljs$lang$maxFixedArity = 0;
G__49348.cljs$lang$applyTo = (function (arglist__49349){
var args = cljs.core.seq(arglist__49349);
return G__49348__delegate(args);
});
G__49348.cljs$core$IFn$_invoke$arity$variadic = G__49348__delegate;
return G__49348;
})()
;})(vec__49341,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__49340,map__49340__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__49343 = null;var count__49344 = (0);var i__49345 = (0);while(true){
if((i__49345 < count__49344))
{var vec__49346 = cljs.core._nth.call(null,chunk__49343,i__49345);var idx = cljs.core.nth.call(null,vec__49346,(0),null);var pc = cljs.core.nth.call(null,vec__49346,(1),null);var cc = cljs.core.nth.call(null,vec__49346,(2),null);var pv = cljs.core.nth.call(null,vec__49346,(3),null);var cv = cljs.core.nth.call(null,vec__49346,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__49350 = seq__49342;
var G__49351 = chunk__49343;
var G__49352 = count__49344;
var G__49353 = (i__49345 + (1));
seq__49342 = G__49350;
chunk__49343 = G__49351;
count__49344 = G__49352;
i__49345 = G__49353;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49342);if(temp__4126__auto__)
{var seq__49342__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49342__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49342__$1);{
var G__49354 = cljs.core.chunk_rest.call(null,seq__49342__$1);
var G__49355 = c__4307__auto__;
var G__49356 = cljs.core.count.call(null,c__4307__auto__);
var G__49357 = (0);
seq__49342 = G__49354;
chunk__49343 = G__49355;
count__49344 = G__49356;
i__49345 = G__49357;
continue;
}
} else
{var vec__49347 = cljs.core.first.call(null,seq__49342__$1);var idx = cljs.core.nth.call(null,vec__49347,(0),null);var pc = cljs.core.nth.call(null,vec__49347,(1),null);var cc = cljs.core.nth.call(null,vec__49347,(2),null);var pv = cljs.core.nth.call(null,vec__49347,(3),null);var cv = cljs.core.nth.call(null,vec__49347,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__49358 = cljs.core.next.call(null,seq__49342__$1);
var G__49359 = null;
var G__49360 = (0);
var G__49361 = (0);
seq__49342 = G__49358;
chunk__49343 = G__49359;
count__49344 = G__49360;
i__49345 = G__49361;
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
