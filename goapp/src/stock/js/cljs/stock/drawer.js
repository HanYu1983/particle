// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25116){var map__25117 = p__25116;var map__25117__$1 = ((cljs.core.seq_QMARK_.call(null,map__25117))?cljs.core.apply.call(null,cljs.core.hash_map,map__25117):map__25117);var t = cljs.core.get.call(null,map__25117__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25118){var map__25119 = p__25118;var map__25119__$1 = ((cljs.core.seq_QMARK_.call(null,map__25119))?cljs.core.apply.call(null,cljs.core.hash_map,map__25119):map__25119);var t = cljs.core.get.call(null,map__25119__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25120){var map__25121 = p__25120;var map__25121__$1 = ((cljs.core.seq_QMARK_.call(null,map__25121))?cljs.core.apply.call(null,cljs.core.hash_map,map__25121):map__25121);var t = cljs.core.get.call(null,map__25121__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25122,base,ctx){var map__25123 = p__25122;var map__25123__$1 = ((cljs.core.seq_QMARK_.call(null,map__25123))?cljs.core.apply.call(null,cljs.core.hash_map,map__25123):map__25123);var t = cljs.core.get.call(null,map__25123__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__25124,w,h,ctx){var map__25130 = p__25124;var map__25130__$1 = ((cljs.core.seq_QMARK_.call(null,map__25130))?cljs.core.apply.call(null,cljs.core.hash_map,map__25130):map__25130);var info = map__25130__$1;var drawers = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__25131 = cljs.core.seq.call(null,drawers);var chunk__25132 = null;var count__25133 = (0);var i__25134 = (0);while(true){
if((i__25134 < count__25133))
{var drawer = cljs.core._nth.call(null,chunk__25132,i__25134);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__25135 = seq__25131;
var G__25136 = chunk__25132;
var G__25137 = count__25133;
var G__25138 = (i__25134 + (1));
seq__25131 = G__25135;
chunk__25132 = G__25136;
count__25133 = G__25137;
i__25134 = G__25138;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25131);if(temp__4126__auto__)
{var seq__25131__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25131__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25131__$1);{
var G__25139 = cljs.core.chunk_rest.call(null,seq__25131__$1);
var G__25140 = c__4307__auto__;
var G__25141 = cljs.core.count.call(null,c__4307__auto__);
var G__25142 = (0);
seq__25131 = G__25139;
chunk__25132 = G__25140;
count__25133 = G__25141;
i__25134 = G__25142;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__25131__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__25143 = cljs.core.next.call(null,seq__25131__$1);
var G__25144 = null;
var G__25145 = (0);
var G__25146 = (0);
seq__25131 = G__25143;
chunk__25132 = G__25144;
count__25133 = G__25145;
i__25134 = G__25146;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25147){var map__25148 = p__25147;var map__25148__$1 = ((cljs.core.seq_QMARK_.call(null,map__25148))?cljs.core.apply.call(null,cljs.core.hash_map,map__25148):map__25148);var line = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25149){var map__25150 = p__25149;var map__25150__$1 = ((cljs.core.seq_QMARK_.call(null,map__25150))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);var line = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25151){var map__25152 = p__25151;var map__25152__$1 = ((cljs.core.seq_QMARK_.call(null,map__25152))?cljs.core.apply.call(null,cljs.core.hash_map,map__25152):map__25152);var line = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25153,base,ctx){var map__25154 = p__25153;var map__25154__$1 = ((cljs.core.seq_QMARK_.call(null,map__25154))?cljs.core.apply.call(null,cljs.core.hash_map,map__25154):map__25154);var line = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__25155 = base;var w = cljs.core.nth.call(null,vec__25155,(0),null);var h = cljs.core.nth.call(null,vec__25155,(1),null);var max_v = cljs.core.nth.call(null,vec__25155,(2),null);var min_v = cljs.core.nth.call(null,vec__25155,(3),null);var offset_v = cljs.core.nth.call(null,vec__25155,(4),null);var offset_x = cljs.core.nth.call(null,vec__25155,(5),null);var pos_y = cljs.core.nth.call(null,vec__25155,(6),null);var cnt = (6);var cntx = (5);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__25156_25168 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__25157_25169 = null;var count__25158_25170 = (0);var i__25159_25171 = (0);while(true){
if((i__25159_25171 < count__25158_25170))
{var i_25172 = cljs.core._nth.call(null,chunk__25157_25169,i__25159_25171);var v_25173 = (min_v + (i_25172 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25173.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_25173));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25173.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_25173));
ctx.moveTo((0),pos_y.call(null,v_25173));
ctx.lineTo(w,pos_y.call(null,v_25173));
{
var G__25174 = seq__25156_25168;
var G__25175 = chunk__25157_25169;
var G__25176 = count__25158_25170;
var G__25177 = (i__25159_25171 + (1));
seq__25156_25168 = G__25174;
chunk__25157_25169 = G__25175;
count__25158_25170 = G__25176;
i__25159_25171 = G__25177;
continue;
}
} else
{var temp__4126__auto___25178 = cljs.core.seq.call(null,seq__25156_25168);if(temp__4126__auto___25178)
{var seq__25156_25179__$1 = temp__4126__auto___25178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25156_25179__$1))
{var c__4307__auto___25180 = cljs.core.chunk_first.call(null,seq__25156_25179__$1);{
var G__25181 = cljs.core.chunk_rest.call(null,seq__25156_25179__$1);
var G__25182 = c__4307__auto___25180;
var G__25183 = cljs.core.count.call(null,c__4307__auto___25180);
var G__25184 = (0);
seq__25156_25168 = G__25181;
chunk__25157_25169 = G__25182;
count__25158_25170 = G__25183;
i__25159_25171 = G__25184;
continue;
}
} else
{var i_25185 = cljs.core.first.call(null,seq__25156_25179__$1);var v_25186 = (min_v + (i_25185 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25186.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_25186));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25186.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_25186));
ctx.moveTo((0),pos_y.call(null,v_25186));
ctx.lineTo(w,pos_y.call(null,v_25186));
{
var G__25187 = cljs.core.next.call(null,seq__25156_25179__$1);
var G__25188 = null;
var G__25189 = (0);
var G__25190 = (0);
seq__25156_25168 = G__25187;
chunk__25157_25169 = G__25188;
count__25158_25170 = G__25189;
i__25159_25171 = G__25190;
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
{var seq__25160_25191 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__25161_25192 = null;var count__25162_25193 = (0);var i__25163_25194 = (0);while(true){
if((i__25163_25194 < count__25162_25193))
{var i_25195 = cljs.core._nth.call(null,chunk__25161_25192,i__25163_25194);if((cljs.core.mod.call(null,i_25195,cntx) === (0)))
{var posx_25196 = ((offset_x / (2)) + (i_25195 * offset_x));ctx.moveTo(posx_25196,(0));
ctx.lineTo(posx_25196,h);
} else
{}
{
var G__25197 = seq__25160_25191;
var G__25198 = chunk__25161_25192;
var G__25199 = count__25162_25193;
var G__25200 = (i__25163_25194 + (1));
seq__25160_25191 = G__25197;
chunk__25161_25192 = G__25198;
count__25162_25193 = G__25199;
i__25163_25194 = G__25200;
continue;
}
} else
{var temp__4126__auto___25201 = cljs.core.seq.call(null,seq__25160_25191);if(temp__4126__auto___25201)
{var seq__25160_25202__$1 = temp__4126__auto___25201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25160_25202__$1))
{var c__4307__auto___25203 = cljs.core.chunk_first.call(null,seq__25160_25202__$1);{
var G__25204 = cljs.core.chunk_rest.call(null,seq__25160_25202__$1);
var G__25205 = c__4307__auto___25203;
var G__25206 = cljs.core.count.call(null,c__4307__auto___25203);
var G__25207 = (0);
seq__25160_25191 = G__25204;
chunk__25161_25192 = G__25205;
count__25162_25193 = G__25206;
i__25163_25194 = G__25207;
continue;
}
} else
{var i_25208 = cljs.core.first.call(null,seq__25160_25202__$1);if((cljs.core.mod.call(null,i_25208,cntx) === (0)))
{var posx_25209 = ((offset_x / (2)) + (i_25208 * offset_x));ctx.moveTo(posx_25209,(0));
ctx.lineTo(posx_25209,h);
} else
{}
{
var G__25210 = cljs.core.next.call(null,seq__25160_25202__$1);
var G__25211 = null;
var G__25212 = (0);
var G__25213 = (0);
seq__25160_25191 = G__25210;
chunk__25161_25192 = G__25211;
count__25162_25193 = G__25212;
i__25163_25194 = G__25213;
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
{var seq__25164_25214 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__25165_25215 = null;var count__25166_25216 = (0);var i__25167_25217 = (0);while(true){
if((i__25167_25217 < count__25166_25216))
{var i_25218 = cljs.core._nth.call(null,chunk__25165_25215,i__25167_25217);if((cljs.core.mod.call(null,i_25218,cntx) === (0)))
{var posx_25219 = ((offset_x / (2)) + (i_25218 * offset_x));ctx.moveTo(posx_25219,(0));
ctx.lineTo(posx_25219,h);
} else
{}
{
var G__25220 = seq__25164_25214;
var G__25221 = chunk__25165_25215;
var G__25222 = count__25166_25216;
var G__25223 = (i__25167_25217 + (1));
seq__25164_25214 = G__25220;
chunk__25165_25215 = G__25221;
count__25166_25216 = G__25222;
i__25167_25217 = G__25223;
continue;
}
} else
{var temp__4126__auto___25224 = cljs.core.seq.call(null,seq__25164_25214);if(temp__4126__auto___25224)
{var seq__25164_25225__$1 = temp__4126__auto___25224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25164_25225__$1))
{var c__4307__auto___25226 = cljs.core.chunk_first.call(null,seq__25164_25225__$1);{
var G__25227 = cljs.core.chunk_rest.call(null,seq__25164_25225__$1);
var G__25228 = c__4307__auto___25226;
var G__25229 = cljs.core.count.call(null,c__4307__auto___25226);
var G__25230 = (0);
seq__25164_25214 = G__25227;
chunk__25165_25215 = G__25228;
count__25166_25216 = G__25229;
i__25167_25217 = G__25230;
continue;
}
} else
{var i_25231 = cljs.core.first.call(null,seq__25164_25225__$1);if((cljs.core.mod.call(null,i_25231,cntx) === (0)))
{var posx_25232 = ((offset_x / (2)) + (i_25231 * offset_x));ctx.moveTo(posx_25232,(0));
ctx.lineTo(posx_25232,h);
} else
{}
{
var G__25233 = cljs.core.next.call(null,seq__25164_25225__$1);
var G__25234 = null;
var G__25235 = (0);
var G__25236 = (0);
seq__25164_25214 = G__25233;
chunk__25165_25215 = G__25234;
count__25166_25216 = G__25235;
i__25167_25217 = G__25236;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25237){var map__25238 = p__25237;var map__25238__$1 = ((cljs.core.seq_QMARK_.call(null,map__25238))?cljs.core.apply.call(null,cljs.core.hash_map,map__25238):map__25238);var line = cljs.core.get.call(null,map__25238__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25239){var map__25240 = p__25239;var map__25240__$1 = ((cljs.core.seq_QMARK_.call(null,map__25240))?cljs.core.apply.call(null,cljs.core.hash_map,map__25240):map__25240);var line = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25241){var map__25242 = p__25241;var map__25242__$1 = ((cljs.core.seq_QMARK_.call(null,map__25242))?cljs.core.apply.call(null,cljs.core.hash_map,map__25242):map__25242);var line = cljs.core.get.call(null,map__25242__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25243,base,ctx){var map__25244 = p__25243;var map__25244__$1 = ((cljs.core.seq_QMARK_.call(null,map__25244))?cljs.core.apply.call(null,cljs.core.hash_map,map__25244):map__25244);var line = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__25245 = base;var w = cljs.core.nth.call(null,vec__25245,(0),null);var h = cljs.core.nth.call(null,vec__25245,(1),null);var max_v = cljs.core.nth.call(null,vec__25245,(2),null);var min_v = cljs.core.nth.call(null,vec__25245,(3),null);var offset_v = cljs.core.nth.call(null,vec__25245,(4),null);var offset_x = cljs.core.nth.call(null,vec__25245,(5),null);var pos_y = cljs.core.nth.call(null,vec__25245,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__25246 = cljs.core._EQ_;var expr__25247 = style;if(cljs.core.truth_(pred__25246.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__25247)))
{(ctx["fillStyle"] = color);
var seq__25249 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__25250 = null;var count__25251 = (0);var i__25252 = (0);while(true){
if((i__25252 < count__25251))
{var vec__25253 = cljs.core._nth.call(null,chunk__25250,i__25252);var idx = cljs.core.nth.call(null,vec__25253,(0),null);var value = cljs.core.nth.call(null,vec__25253,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__25261 = seq__25249;
var G__25262 = chunk__25250;
var G__25263 = count__25251;
var G__25264 = (i__25252 + (1));
seq__25249 = G__25261;
chunk__25250 = G__25262;
count__25251 = G__25263;
i__25252 = G__25264;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25249);if(temp__4126__auto__)
{var seq__25249__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25249__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25249__$1);{
var G__25265 = cljs.core.chunk_rest.call(null,seq__25249__$1);
var G__25266 = c__4307__auto__;
var G__25267 = cljs.core.count.call(null,c__4307__auto__);
var G__25268 = (0);
seq__25249 = G__25265;
chunk__25250 = G__25266;
count__25251 = G__25267;
i__25252 = G__25268;
continue;
}
} else
{var vec__25254 = cljs.core.first.call(null,seq__25249__$1);var idx = cljs.core.nth.call(null,vec__25254,(0),null);var value = cljs.core.nth.call(null,vec__25254,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__25269 = cljs.core.next.call(null,seq__25249__$1);
var G__25270 = null;
var G__25271 = (0);
var G__25272 = (0);
seq__25249 = G__25269;
chunk__25250 = G__25270;
count__25251 = G__25271;
i__25252 = G__25272;
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
var seq__25255_25273 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__25246,expr__25247,vec__25245,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__25244,map__25244__$1,line,color,offset,style){
return (function() { 
var G__25277__delegate = function (args){return args;
};
var G__25277 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25277__delegate.call(this,args);};
G__25277.cljs$lang$maxFixedArity = 0;
G__25277.cljs$lang$applyTo = (function (arglist__25278){
var args = cljs.core.seq(arglist__25278);
return G__25277__delegate(args);
});
G__25277.cljs$core$IFn$_invoke$arity$variadic = G__25277__delegate;
return G__25277;
})()
;})(pred__25246,expr__25247,vec__25245,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__25244,map__25244__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__25256_25274 = null;var count__25257_25275 = (0);var i__25258_25276 = (0);while(true){
if((i__25258_25276 < count__25257_25275))
{var vec__25259_25279 = cljs.core._nth.call(null,chunk__25256_25274,i__25258_25276);var idx_25280 = cljs.core.nth.call(null,vec__25259_25279,(0),null);var prev_25281 = cljs.core.nth.call(null,vec__25259_25279,(1),null);var curr_25282 = cljs.core.nth.call(null,vec__25259_25279,(2),null);ctx.moveTo(((idx_25280 + offset__$1) * offset_x),pos_y.call(null,prev_25281));
ctx.lineTo((((idx_25280 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25282));
{
var G__25283 = seq__25255_25273;
var G__25284 = chunk__25256_25274;
var G__25285 = count__25257_25275;
var G__25286 = (i__25258_25276 + (1));
seq__25255_25273 = G__25283;
chunk__25256_25274 = G__25284;
count__25257_25275 = G__25285;
i__25258_25276 = G__25286;
continue;
}
} else
{var temp__4126__auto___25287 = cljs.core.seq.call(null,seq__25255_25273);if(temp__4126__auto___25287)
{var seq__25255_25288__$1 = temp__4126__auto___25287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25255_25288__$1))
{var c__4307__auto___25289 = cljs.core.chunk_first.call(null,seq__25255_25288__$1);{
var G__25290 = cljs.core.chunk_rest.call(null,seq__25255_25288__$1);
var G__25291 = c__4307__auto___25289;
var G__25292 = cljs.core.count.call(null,c__4307__auto___25289);
var G__25293 = (0);
seq__25255_25273 = G__25290;
chunk__25256_25274 = G__25291;
count__25257_25275 = G__25292;
i__25258_25276 = G__25293;
continue;
}
} else
{var vec__25260_25294 = cljs.core.first.call(null,seq__25255_25288__$1);var idx_25295 = cljs.core.nth.call(null,vec__25260_25294,(0),null);var prev_25296 = cljs.core.nth.call(null,vec__25260_25294,(1),null);var curr_25297 = cljs.core.nth.call(null,vec__25260_25294,(2),null);ctx.moveTo(((idx_25295 + offset__$1) * offset_x),pos_y.call(null,prev_25296));
ctx.lineTo((((idx_25295 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25297));
{
var G__25298 = cljs.core.next.call(null,seq__25255_25288__$1);
var G__25299 = null;
var G__25300 = (0);
var G__25301 = (0);
seq__25255_25273 = G__25298;
chunk__25256_25274 = G__25299;
count__25257_25275 = G__25300;
i__25258_25276 = G__25301;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25302){var map__25303 = p__25302;var map__25303__$1 = ((cljs.core.seq_QMARK_.call(null,map__25303))?cljs.core.apply.call(null,cljs.core.hash_map,map__25303):map__25303);var kline = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25304){var map__25305 = p__25304;var map__25305__$1 = ((cljs.core.seq_QMARK_.call(null,map__25305))?cljs.core.apply.call(null,cljs.core.hash_map,map__25305):map__25305);var kline = cljs.core.get.call(null,map__25305__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25306){var map__25307 = p__25306;var map__25307__$1 = ((cljs.core.seq_QMARK_.call(null,map__25307))?cljs.core.apply.call(null,cljs.core.hash_map,map__25307):map__25307);var kline = cljs.core.get.call(null,map__25307__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25308,base,ctx){var map__25309 = p__25308;var map__25309__$1 = ((cljs.core.seq_QMARK_.call(null,map__25309))?cljs.core.apply.call(null,cljs.core.hash_map,map__25309):map__25309);var kline = cljs.core.get.call(null,map__25309__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__25309__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__25310 = base;var w = cljs.core.nth.call(null,vec__25310,(0),null);var h = cljs.core.nth.call(null,vec__25310,(1),null);var max_v = cljs.core.nth.call(null,vec__25310,(2),null);var min_v = cljs.core.nth.call(null,vec__25310,(3),null);var offset_v = cljs.core.nth.call(null,vec__25310,(4),null);var offset_x = cljs.core.nth.call(null,vec__25310,(5),null);var pos_y = cljs.core.nth.call(null,vec__25310,(6),null);(ctx["fillStyle"] = "black");
var seq__25311 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25310,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25309,map__25309__$1,kline,info){
return (function() { 
var G__25319__delegate = function (args){return args;
};
var G__25319 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25319__delegate.call(this,args);};
G__25319.cljs$lang$maxFixedArity = 0;
G__25319.cljs$lang$applyTo = (function (arglist__25320){
var args = cljs.core.seq(arglist__25320);
return G__25319__delegate(args);
});
G__25319.cljs$core$IFn$_invoke$arity$variadic = G__25319__delegate;
return G__25319;
})()
;})(vec__25310,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25309,map__25309__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__25312 = null;var count__25313 = (0);var i__25314 = (0);while(true){
if((i__25314 < count__25313))
{var vec__25315 = cljs.core._nth.call(null,chunk__25312,i__25314);var idx = cljs.core.nth.call(null,vec__25315,(0),null);var vec__25316 = cljs.core.nth.call(null,vec__25315,(1),null);var date = cljs.core.nth.call(null,vec__25316,(0),null);var open = cljs.core.nth.call(null,vec__25316,(1),null);var high = cljs.core.nth.call(null,vec__25316,(2),null);var low = cljs.core.nth.call(null,vec__25316,(3),null);var close = cljs.core.nth.call(null,vec__25316,(4),null);var volume = cljs.core.nth.call(null,vec__25316,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25315,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25321 = seq__25311;
var G__25322 = chunk__25312;
var G__25323 = count__25313;
var G__25324 = (i__25314 + (1));
seq__25311 = G__25321;
chunk__25312 = G__25322;
count__25313 = G__25323;
i__25314 = G__25324;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25311);if(temp__4126__auto__)
{var seq__25311__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25311__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25311__$1);{
var G__25325 = cljs.core.chunk_rest.call(null,seq__25311__$1);
var G__25326 = c__4307__auto__;
var G__25327 = cljs.core.count.call(null,c__4307__auto__);
var G__25328 = (0);
seq__25311 = G__25325;
chunk__25312 = G__25326;
count__25313 = G__25327;
i__25314 = G__25328;
continue;
}
} else
{var vec__25317 = cljs.core.first.call(null,seq__25311__$1);var idx = cljs.core.nth.call(null,vec__25317,(0),null);var vec__25318 = cljs.core.nth.call(null,vec__25317,(1),null);var date = cljs.core.nth.call(null,vec__25318,(0),null);var open = cljs.core.nth.call(null,vec__25318,(1),null);var high = cljs.core.nth.call(null,vec__25318,(2),null);var low = cljs.core.nth.call(null,vec__25318,(3),null);var close = cljs.core.nth.call(null,vec__25318,(4),null);var volume = cljs.core.nth.call(null,vec__25318,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25317,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25329 = cljs.core.next.call(null,seq__25311__$1);
var G__25330 = null;
var G__25331 = (0);
var G__25332 = (0);
seq__25311 = G__25329;
chunk__25312 = G__25330;
count__25313 = G__25331;
i__25314 = G__25332;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25333){var map__25334 = p__25333;var map__25334__$1 = ((cljs.core.seq_QMARK_.call(null,map__25334))?cljs.core.apply.call(null,cljs.core.hash_map,map__25334):map__25334);var cz = cljs.core.get.call(null,map__25334__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25335){var map__25336 = p__25335;var map__25336__$1 = ((cljs.core.seq_QMARK_.call(null,map__25336))?cljs.core.apply.call(null,cljs.core.hash_map,map__25336):map__25336);var cz = cljs.core.get.call(null,map__25336__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25337,base,ctx){var map__25338 = p__25337;var map__25338__$1 = ((cljs.core.seq_QMARK_.call(null,map__25338))?cljs.core.apply.call(null,cljs.core.hash_map,map__25338):map__25338);var cz = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__25339 = base;var w = cljs.core.nth.call(null,vec__25339,(0),null);var h = cljs.core.nth.call(null,vec__25339,(1),null);var max_v = cljs.core.nth.call(null,vec__25339,(2),null);var min_v = cljs.core.nth.call(null,vec__25339,(3),null);var offset_v = cljs.core.nth.call(null,vec__25339,(4),null);var offset_x = cljs.core.nth.call(null,vec__25339,(5),null);var pos_y = cljs.core.nth.call(null,vec__25339,(6),null);var proj_x = ((function (vec__25339,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25338,map__25338__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__25339,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25338,map__25338__$1,cz,vz,color))
;var proj_y = ((function (vec__25339,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25338,map__25338__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__25339,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25338,map__25338__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__25340 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25339,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25338,map__25338__$1,cz,vz,color){
return (function() { 
var G__25346__delegate = function (args){return args;
};
var G__25346 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25346__delegate.call(this,args);};
G__25346.cljs$lang$maxFixedArity = 0;
G__25346.cljs$lang$applyTo = (function (arglist__25347){
var args = cljs.core.seq(arglist__25347);
return G__25346__delegate(args);
});
G__25346.cljs$core$IFn$_invoke$arity$variadic = G__25346__delegate;
return G__25346;
})()
;})(vec__25339,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25338,map__25338__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__25341 = null;var count__25342 = (0);var i__25343 = (0);while(true){
if((i__25343 < count__25342))
{var vec__25344 = cljs.core._nth.call(null,chunk__25341,i__25343);var idx = cljs.core.nth.call(null,vec__25344,(0),null);var pc = cljs.core.nth.call(null,vec__25344,(1),null);var cc = cljs.core.nth.call(null,vec__25344,(2),null);var pv = cljs.core.nth.call(null,vec__25344,(3),null);var cv = cljs.core.nth.call(null,vec__25344,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25348 = seq__25340;
var G__25349 = chunk__25341;
var G__25350 = count__25342;
var G__25351 = (i__25343 + (1));
seq__25340 = G__25348;
chunk__25341 = G__25349;
count__25342 = G__25350;
i__25343 = G__25351;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25340);if(temp__4126__auto__)
{var seq__25340__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25340__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25340__$1);{
var G__25352 = cljs.core.chunk_rest.call(null,seq__25340__$1);
var G__25353 = c__4307__auto__;
var G__25354 = cljs.core.count.call(null,c__4307__auto__);
var G__25355 = (0);
seq__25340 = G__25352;
chunk__25341 = G__25353;
count__25342 = G__25354;
i__25343 = G__25355;
continue;
}
} else
{var vec__25345 = cljs.core.first.call(null,seq__25340__$1);var idx = cljs.core.nth.call(null,vec__25345,(0),null);var pc = cljs.core.nth.call(null,vec__25345,(1),null);var cc = cljs.core.nth.call(null,vec__25345,(2),null);var pv = cljs.core.nth.call(null,vec__25345,(3),null);var cv = cljs.core.nth.call(null,vec__25345,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25356 = cljs.core.next.call(null,seq__25340__$1);
var G__25357 = null;
var G__25358 = (0);
var G__25359 = (0);
seq__25340 = G__25356;
chunk__25341 = G__25357;
count__25342 = G__25358;
i__25343 = G__25359;
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
