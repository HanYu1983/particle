// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25088){var map__25089 = p__25088;var map__25089__$1 = ((cljs.core.seq_QMARK_.call(null,map__25089))?cljs.core.apply.call(null,cljs.core.hash_map,map__25089):map__25089);var t = cljs.core.get.call(null,map__25089__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25090){var map__25091 = p__25090;var map__25091__$1 = ((cljs.core.seq_QMARK_.call(null,map__25091))?cljs.core.apply.call(null,cljs.core.hash_map,map__25091):map__25091);var t = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25092){var map__25093 = p__25092;var map__25093__$1 = ((cljs.core.seq_QMARK_.call(null,map__25093))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);var t = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__25094,base,ctx){var map__25095 = p__25094;var map__25095__$1 = ((cljs.core.seq_QMARK_.call(null,map__25095))?cljs.core.apply.call(null,cljs.core.hash_map,map__25095):map__25095);var t = cljs.core.get.call(null,map__25095__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__25096,w,h,ctx){var map__25102 = p__25096;var map__25102__$1 = ((cljs.core.seq_QMARK_.call(null,map__25102))?cljs.core.apply.call(null,cljs.core.hash_map,map__25102):map__25102);var info = map__25102__$1;var drawers = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__25103 = cljs.core.seq.call(null,drawers);var chunk__25104 = null;var count__25105 = (0);var i__25106 = (0);while(true){
if((i__25106 < count__25105))
{var drawer = cljs.core._nth.call(null,chunk__25104,i__25106);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__25107 = seq__25103;
var G__25108 = chunk__25104;
var G__25109 = count__25105;
var G__25110 = (i__25106 + (1));
seq__25103 = G__25107;
chunk__25104 = G__25108;
count__25105 = G__25109;
i__25106 = G__25110;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25103);if(temp__4126__auto__)
{var seq__25103__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25103__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25103__$1);{
var G__25111 = cljs.core.chunk_rest.call(null,seq__25103__$1);
var G__25112 = c__4307__auto__;
var G__25113 = cljs.core.count.call(null,c__4307__auto__);
var G__25114 = (0);
seq__25103 = G__25111;
chunk__25104 = G__25112;
count__25105 = G__25113;
i__25106 = G__25114;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__25103__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__25115 = cljs.core.next.call(null,seq__25103__$1);
var G__25116 = null;
var G__25117 = (0);
var G__25118 = (0);
seq__25103 = G__25115;
chunk__25104 = G__25116;
count__25105 = G__25117;
i__25106 = G__25118;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25119){var map__25120 = p__25119;var map__25120__$1 = ((cljs.core.seq_QMARK_.call(null,map__25120))?cljs.core.apply.call(null,cljs.core.hash_map,map__25120):map__25120);var line = cljs.core.get.call(null,map__25120__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25120__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25121){var map__25122 = p__25121;var map__25122__$1 = ((cljs.core.seq_QMARK_.call(null,map__25122))?cljs.core.apply.call(null,cljs.core.hash_map,map__25122):map__25122);var line = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25123){var map__25124 = p__25123;var map__25124__$1 = ((cljs.core.seq_QMARK_.call(null,map__25124))?cljs.core.apply.call(null,cljs.core.hash_map,map__25124):map__25124);var line = cljs.core.get.call(null,map__25124__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25124__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__25125,base,ctx){var map__25126 = p__25125;var map__25126__$1 = ((cljs.core.seq_QMARK_.call(null,map__25126))?cljs.core.apply.call(null,cljs.core.hash_map,map__25126):map__25126);var line = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__25127 = base;var w = cljs.core.nth.call(null,vec__25127,(0),null);var h = cljs.core.nth.call(null,vec__25127,(1),null);var max_v = cljs.core.nth.call(null,vec__25127,(2),null);var min_v = cljs.core.nth.call(null,vec__25127,(3),null);var offset_v = cljs.core.nth.call(null,vec__25127,(4),null);var offset_x = cljs.core.nth.call(null,vec__25127,(5),null);var pos_y = cljs.core.nth.call(null,vec__25127,(6),null);var cnt = (6);var cntx = (20);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__25128_25140 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__25129_25141 = null;var count__25130_25142 = (0);var i__25131_25143 = (0);while(true){
if((i__25131_25143 < count__25130_25142))
{var i_25144 = cljs.core._nth.call(null,chunk__25129_25141,i__25131_25143);var v_25145 = (min_v + (i_25144 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25145.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_25145));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25145.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_25145));
ctx.moveTo((0),pos_y.call(null,v_25145));
ctx.lineTo(w,pos_y.call(null,v_25145));
{
var G__25146 = seq__25128_25140;
var G__25147 = chunk__25129_25141;
var G__25148 = count__25130_25142;
var G__25149 = (i__25131_25143 + (1));
seq__25128_25140 = G__25146;
chunk__25129_25141 = G__25147;
count__25130_25142 = G__25148;
i__25131_25143 = G__25149;
continue;
}
} else
{var temp__4126__auto___25150 = cljs.core.seq.call(null,seq__25128_25140);if(temp__4126__auto___25150)
{var seq__25128_25151__$1 = temp__4126__auto___25150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25128_25151__$1))
{var c__4307__auto___25152 = cljs.core.chunk_first.call(null,seq__25128_25151__$1);{
var G__25153 = cljs.core.chunk_rest.call(null,seq__25128_25151__$1);
var G__25154 = c__4307__auto___25152;
var G__25155 = cljs.core.count.call(null,c__4307__auto___25152);
var G__25156 = (0);
seq__25128_25140 = G__25153;
chunk__25129_25141 = G__25154;
count__25130_25142 = G__25155;
i__25131_25143 = G__25156;
continue;
}
} else
{var i_25157 = cljs.core.first.call(null,seq__25128_25151__$1);var v_25158 = (min_v + (i_25157 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25158.toFixed((2)))),(w * ((1) / (3))),pos_y.call(null,v_25158));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_25158.toFixed((2)))),(w * ((2) / (3))),pos_y.call(null,v_25158));
ctx.moveTo((0),pos_y.call(null,v_25158));
ctx.lineTo(w,pos_y.call(null,v_25158));
{
var G__25159 = cljs.core.next.call(null,seq__25128_25151__$1);
var G__25160 = null;
var G__25161 = (0);
var G__25162 = (0);
seq__25128_25140 = G__25159;
chunk__25129_25141 = G__25160;
count__25130_25142 = G__25161;
i__25131_25143 = G__25162;
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
{var seq__25132_25163 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__25133_25164 = null;var count__25134_25165 = (0);var i__25135_25166 = (0);while(true){
if((i__25135_25166 < count__25134_25165))
{var i_25167 = cljs.core._nth.call(null,chunk__25133_25164,i__25135_25166);if((cljs.core.mod.call(null,i_25167,cntx) === (0)))
{var posx_25168 = ((offset_x / (2)) + (i_25167 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_25167)),posx_25168,h);
ctx.moveTo(posx_25168,(0));
ctx.lineTo(posx_25168,h);
} else
{}
{
var G__25169 = seq__25132_25163;
var G__25170 = chunk__25133_25164;
var G__25171 = count__25134_25165;
var G__25172 = (i__25135_25166 + (1));
seq__25132_25163 = G__25169;
chunk__25133_25164 = G__25170;
count__25134_25165 = G__25171;
i__25135_25166 = G__25172;
continue;
}
} else
{var temp__4126__auto___25173 = cljs.core.seq.call(null,seq__25132_25163);if(temp__4126__auto___25173)
{var seq__25132_25174__$1 = temp__4126__auto___25173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25132_25174__$1))
{var c__4307__auto___25175 = cljs.core.chunk_first.call(null,seq__25132_25174__$1);{
var G__25176 = cljs.core.chunk_rest.call(null,seq__25132_25174__$1);
var G__25177 = c__4307__auto___25175;
var G__25178 = cljs.core.count.call(null,c__4307__auto___25175);
var G__25179 = (0);
seq__25132_25163 = G__25176;
chunk__25133_25164 = G__25177;
count__25134_25165 = G__25178;
i__25135_25166 = G__25179;
continue;
}
} else
{var i_25180 = cljs.core.first.call(null,seq__25132_25174__$1);if((cljs.core.mod.call(null,i_25180,cntx) === (0)))
{var posx_25181 = ((offset_x / (2)) + (i_25180 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_25180)),posx_25181,h);
ctx.moveTo(posx_25181,(0));
ctx.lineTo(posx_25181,h);
} else
{}
{
var G__25182 = cljs.core.next.call(null,seq__25132_25174__$1);
var G__25183 = null;
var G__25184 = (0);
var G__25185 = (0);
seq__25132_25163 = G__25182;
chunk__25133_25164 = G__25183;
count__25134_25165 = G__25184;
i__25135_25166 = G__25185;
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
{var seq__25136_25186 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__25137_25187 = null;var count__25138_25188 = (0);var i__25139_25189 = (0);while(true){
if((i__25139_25189 < count__25138_25188))
{var i_25190 = cljs.core._nth.call(null,chunk__25137_25187,i__25139_25189);if((cljs.core.mod.call(null,i_25190,cntx) === (0)))
{var posx_25191 = ((offset_x / (2)) + (i_25190 * offset_x));ctx.moveTo(posx_25191,(0));
ctx.lineTo(posx_25191,h);
} else
{}
{
var G__25192 = seq__25136_25186;
var G__25193 = chunk__25137_25187;
var G__25194 = count__25138_25188;
var G__25195 = (i__25139_25189 + (1));
seq__25136_25186 = G__25192;
chunk__25137_25187 = G__25193;
count__25138_25188 = G__25194;
i__25139_25189 = G__25195;
continue;
}
} else
{var temp__4126__auto___25196 = cljs.core.seq.call(null,seq__25136_25186);if(temp__4126__auto___25196)
{var seq__25136_25197__$1 = temp__4126__auto___25196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25136_25197__$1))
{var c__4307__auto___25198 = cljs.core.chunk_first.call(null,seq__25136_25197__$1);{
var G__25199 = cljs.core.chunk_rest.call(null,seq__25136_25197__$1);
var G__25200 = c__4307__auto___25198;
var G__25201 = cljs.core.count.call(null,c__4307__auto___25198);
var G__25202 = (0);
seq__25136_25186 = G__25199;
chunk__25137_25187 = G__25200;
count__25138_25188 = G__25201;
i__25139_25189 = G__25202;
continue;
}
} else
{var i_25203 = cljs.core.first.call(null,seq__25136_25197__$1);if((cljs.core.mod.call(null,i_25203,cntx) === (0)))
{var posx_25204 = ((offset_x / (2)) + (i_25203 * offset_x));ctx.moveTo(posx_25204,(0));
ctx.lineTo(posx_25204,h);
} else
{}
{
var G__25205 = cljs.core.next.call(null,seq__25136_25197__$1);
var G__25206 = null;
var G__25207 = (0);
var G__25208 = (0);
seq__25136_25186 = G__25205;
chunk__25137_25187 = G__25206;
count__25138_25188 = G__25207;
i__25139_25189 = G__25208;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25209){var map__25210 = p__25209;var map__25210__$1 = ((cljs.core.seq_QMARK_.call(null,map__25210))?cljs.core.apply.call(null,cljs.core.hash_map,map__25210):map__25210);var line = cljs.core.get.call(null,map__25210__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25211){var map__25212 = p__25211;var map__25212__$1 = ((cljs.core.seq_QMARK_.call(null,map__25212))?cljs.core.apply.call(null,cljs.core.hash_map,map__25212):map__25212);var line = cljs.core.get.call(null,map__25212__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25213){var map__25214 = p__25213;var map__25214__$1 = ((cljs.core.seq_QMARK_.call(null,map__25214))?cljs.core.apply.call(null,cljs.core.hash_map,map__25214):map__25214);var line = cljs.core.get.call(null,map__25214__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25215,base,ctx){var map__25216 = p__25215;var map__25216__$1 = ((cljs.core.seq_QMARK_.call(null,map__25216))?cljs.core.apply.call(null,cljs.core.hash_map,map__25216):map__25216);var line = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__25217 = base;var w = cljs.core.nth.call(null,vec__25217,(0),null);var h = cljs.core.nth.call(null,vec__25217,(1),null);var max_v = cljs.core.nth.call(null,vec__25217,(2),null);var min_v = cljs.core.nth.call(null,vec__25217,(3),null);var offset_v = cljs.core.nth.call(null,vec__25217,(4),null);var offset_x = cljs.core.nth.call(null,vec__25217,(5),null);var pos_y = cljs.core.nth.call(null,vec__25217,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__25218 = cljs.core._EQ_;var expr__25219 = style;if(cljs.core.truth_(pred__25218.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__25219)))
{(ctx["fillStyle"] = color);
var seq__25221 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__25222 = null;var count__25223 = (0);var i__25224 = (0);while(true){
if((i__25224 < count__25223))
{var vec__25225 = cljs.core._nth.call(null,chunk__25222,i__25224);var idx = cljs.core.nth.call(null,vec__25225,(0),null);var value = cljs.core.nth.call(null,vec__25225,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__25233 = seq__25221;
var G__25234 = chunk__25222;
var G__25235 = count__25223;
var G__25236 = (i__25224 + (1));
seq__25221 = G__25233;
chunk__25222 = G__25234;
count__25223 = G__25235;
i__25224 = G__25236;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25221);if(temp__4126__auto__)
{var seq__25221__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25221__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25221__$1);{
var G__25237 = cljs.core.chunk_rest.call(null,seq__25221__$1);
var G__25238 = c__4307__auto__;
var G__25239 = cljs.core.count.call(null,c__4307__auto__);
var G__25240 = (0);
seq__25221 = G__25237;
chunk__25222 = G__25238;
count__25223 = G__25239;
i__25224 = G__25240;
continue;
}
} else
{var vec__25226 = cljs.core.first.call(null,seq__25221__$1);var idx = cljs.core.nth.call(null,vec__25226,(0),null);var value = cljs.core.nth.call(null,vec__25226,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (4)),(0),6.28,false);
ctx.closePath();
ctx.fill();
{
var G__25241 = cljs.core.next.call(null,seq__25221__$1);
var G__25242 = null;
var G__25243 = (0);
var G__25244 = (0);
seq__25221 = G__25241;
chunk__25222 = G__25242;
count__25223 = G__25243;
i__25224 = G__25244;
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
var seq__25227_25245 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__25218,expr__25219,vec__25217,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__25216,map__25216__$1,line,color,offset,style){
return (function() { 
var G__25249__delegate = function (args){return args;
};
var G__25249 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25249__delegate.call(this,args);};
G__25249.cljs$lang$maxFixedArity = 0;
G__25249.cljs$lang$applyTo = (function (arglist__25250){
var args = cljs.core.seq(arglist__25250);
return G__25249__delegate(args);
});
G__25249.cljs$core$IFn$_invoke$arity$variadic = G__25249__delegate;
return G__25249;
})()
;})(pred__25218,expr__25219,vec__25217,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__25216,map__25216__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__25228_25246 = null;var count__25229_25247 = (0);var i__25230_25248 = (0);while(true){
if((i__25230_25248 < count__25229_25247))
{var vec__25231_25251 = cljs.core._nth.call(null,chunk__25228_25246,i__25230_25248);var idx_25252 = cljs.core.nth.call(null,vec__25231_25251,(0),null);var prev_25253 = cljs.core.nth.call(null,vec__25231_25251,(1),null);var curr_25254 = cljs.core.nth.call(null,vec__25231_25251,(2),null);ctx.moveTo(((idx_25252 + offset__$1) * offset_x),pos_y.call(null,prev_25253));
ctx.lineTo((((idx_25252 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25254));
{
var G__25255 = seq__25227_25245;
var G__25256 = chunk__25228_25246;
var G__25257 = count__25229_25247;
var G__25258 = (i__25230_25248 + (1));
seq__25227_25245 = G__25255;
chunk__25228_25246 = G__25256;
count__25229_25247 = G__25257;
i__25230_25248 = G__25258;
continue;
}
} else
{var temp__4126__auto___25259 = cljs.core.seq.call(null,seq__25227_25245);if(temp__4126__auto___25259)
{var seq__25227_25260__$1 = temp__4126__auto___25259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25227_25260__$1))
{var c__4307__auto___25261 = cljs.core.chunk_first.call(null,seq__25227_25260__$1);{
var G__25262 = cljs.core.chunk_rest.call(null,seq__25227_25260__$1);
var G__25263 = c__4307__auto___25261;
var G__25264 = cljs.core.count.call(null,c__4307__auto___25261);
var G__25265 = (0);
seq__25227_25245 = G__25262;
chunk__25228_25246 = G__25263;
count__25229_25247 = G__25264;
i__25230_25248 = G__25265;
continue;
}
} else
{var vec__25232_25266 = cljs.core.first.call(null,seq__25227_25260__$1);var idx_25267 = cljs.core.nth.call(null,vec__25232_25266,(0),null);var prev_25268 = cljs.core.nth.call(null,vec__25232_25266,(1),null);var curr_25269 = cljs.core.nth.call(null,vec__25232_25266,(2),null);ctx.moveTo(((idx_25267 + offset__$1) * offset_x),pos_y.call(null,prev_25268));
ctx.lineTo((((idx_25267 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_25269));
{
var G__25270 = cljs.core.next.call(null,seq__25227_25260__$1);
var G__25271 = null;
var G__25272 = (0);
var G__25273 = (0);
seq__25227_25245 = G__25270;
chunk__25228_25246 = G__25271;
count__25229_25247 = G__25272;
i__25230_25248 = G__25273;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25274){var map__25275 = p__25274;var map__25275__$1 = ((cljs.core.seq_QMARK_.call(null,map__25275))?cljs.core.apply.call(null,cljs.core.hash_map,map__25275):map__25275);var kline = cljs.core.get.call(null,map__25275__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25276){var map__25277 = p__25276;var map__25277__$1 = ((cljs.core.seq_QMARK_.call(null,map__25277))?cljs.core.apply.call(null,cljs.core.hash_map,map__25277):map__25277);var kline = cljs.core.get.call(null,map__25277__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25278){var map__25279 = p__25278;var map__25279__$1 = ((cljs.core.seq_QMARK_.call(null,map__25279))?cljs.core.apply.call(null,cljs.core.hash_map,map__25279):map__25279);var kline = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__25280,base,ctx){var map__25281 = p__25280;var map__25281__$1 = ((cljs.core.seq_QMARK_.call(null,map__25281))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281):map__25281);var kline = cljs.core.get.call(null,map__25281__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__25281__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__25282 = base;var w = cljs.core.nth.call(null,vec__25282,(0),null);var h = cljs.core.nth.call(null,vec__25282,(1),null);var max_v = cljs.core.nth.call(null,vec__25282,(2),null);var min_v = cljs.core.nth.call(null,vec__25282,(3),null);var offset_v = cljs.core.nth.call(null,vec__25282,(4),null);var offset_x = cljs.core.nth.call(null,vec__25282,(5),null);var pos_y = cljs.core.nth.call(null,vec__25282,(6),null);(ctx["fillStyle"] = "black");
var seq__25283 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25282,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25281,map__25281__$1,kline,info){
return (function() { 
var G__25291__delegate = function (args){return args;
};
var G__25291 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25291__delegate.call(this,args);};
G__25291.cljs$lang$maxFixedArity = 0;
G__25291.cljs$lang$applyTo = (function (arglist__25292){
var args = cljs.core.seq(arglist__25292);
return G__25291__delegate(args);
});
G__25291.cljs$core$IFn$_invoke$arity$variadic = G__25291__delegate;
return G__25291;
})()
;})(vec__25282,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25281,map__25281__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__25284 = null;var count__25285 = (0);var i__25286 = (0);while(true){
if((i__25286 < count__25285))
{var vec__25287 = cljs.core._nth.call(null,chunk__25284,i__25286);var idx = cljs.core.nth.call(null,vec__25287,(0),null);var vec__25288 = cljs.core.nth.call(null,vec__25287,(1),null);var date = cljs.core.nth.call(null,vec__25288,(0),null);var open = cljs.core.nth.call(null,vec__25288,(1),null);var high = cljs.core.nth.call(null,vec__25288,(2),null);var low = cljs.core.nth.call(null,vec__25288,(3),null);var close = cljs.core.nth.call(null,vec__25288,(4),null);var volume = cljs.core.nth.call(null,vec__25288,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25287,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25293 = seq__25283;
var G__25294 = chunk__25284;
var G__25295 = count__25285;
var G__25296 = (i__25286 + (1));
seq__25283 = G__25293;
chunk__25284 = G__25294;
count__25285 = G__25295;
i__25286 = G__25296;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25283);if(temp__4126__auto__)
{var seq__25283__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25283__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25283__$1);{
var G__25297 = cljs.core.chunk_rest.call(null,seq__25283__$1);
var G__25298 = c__4307__auto__;
var G__25299 = cljs.core.count.call(null,c__4307__auto__);
var G__25300 = (0);
seq__25283 = G__25297;
chunk__25284 = G__25298;
count__25285 = G__25299;
i__25286 = G__25300;
continue;
}
} else
{var vec__25289 = cljs.core.first.call(null,seq__25283__$1);var idx = cljs.core.nth.call(null,vec__25289,(0),null);var vec__25290 = cljs.core.nth.call(null,vec__25289,(1),null);var date = cljs.core.nth.call(null,vec__25290,(0),null);var open = cljs.core.nth.call(null,vec__25290,(1),null);var high = cljs.core.nth.call(null,vec__25290,(2),null);var low = cljs.core.nth.call(null,vec__25290,(3),null);var close = cljs.core.nth.call(null,vec__25290,(4),null);var volume = cljs.core.nth.call(null,vec__25290,(5),null);var info__$1 = cljs.core.nth.call(null,vec__25289,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__25301 = cljs.core.next.call(null,seq__25283__$1);
var G__25302 = null;
var G__25303 = (0);
var G__25304 = (0);
seq__25283 = G__25301;
chunk__25284 = G__25302;
count__25285 = G__25303;
i__25286 = G__25304;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25305){var map__25306 = p__25305;var map__25306__$1 = ((cljs.core.seq_QMARK_.call(null,map__25306))?cljs.core.apply.call(null,cljs.core.hash_map,map__25306):map__25306);var cz = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25307){var map__25308 = p__25307;var map__25308__$1 = ((cljs.core.seq_QMARK_.call(null,map__25308))?cljs.core.apply.call(null,cljs.core.hash_map,map__25308):map__25308);var cz = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__25309,base,ctx){var map__25310 = p__25309;var map__25310__$1 = ((cljs.core.seq_QMARK_.call(null,map__25310))?cljs.core.apply.call(null,cljs.core.hash_map,map__25310):map__25310);var cz = cljs.core.get.call(null,map__25310__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__25310__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__25310__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__25311 = base;var w = cljs.core.nth.call(null,vec__25311,(0),null);var h = cljs.core.nth.call(null,vec__25311,(1),null);var max_v = cljs.core.nth.call(null,vec__25311,(2),null);var min_v = cljs.core.nth.call(null,vec__25311,(3),null);var offset_v = cljs.core.nth.call(null,vec__25311,(4),null);var offset_x = cljs.core.nth.call(null,vec__25311,(5),null);var pos_y = cljs.core.nth.call(null,vec__25311,(6),null);var proj_x = ((function (vec__25311,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25310,map__25310__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__25311,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__25310,map__25310__$1,cz,vz,color))
;var proj_y = ((function (vec__25311,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25310,map__25310__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__25311,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__25310,map__25310__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__25312 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__25311,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25310,map__25310__$1,cz,vz,color){
return (function() { 
var G__25318__delegate = function (args){return args;
};
var G__25318 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25318__delegate.call(this,args);};
G__25318.cljs$lang$maxFixedArity = 0;
G__25318.cljs$lang$applyTo = (function (arglist__25319){
var args = cljs.core.seq(arglist__25319);
return G__25318__delegate(args);
});
G__25318.cljs$core$IFn$_invoke$arity$variadic = G__25318__delegate;
return G__25318;
})()
;})(vec__25311,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__25310,map__25310__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__25313 = null;var count__25314 = (0);var i__25315 = (0);while(true){
if((i__25315 < count__25314))
{var vec__25316 = cljs.core._nth.call(null,chunk__25313,i__25315);var idx = cljs.core.nth.call(null,vec__25316,(0),null);var pc = cljs.core.nth.call(null,vec__25316,(1),null);var cc = cljs.core.nth.call(null,vec__25316,(2),null);var pv = cljs.core.nth.call(null,vec__25316,(3),null);var cv = cljs.core.nth.call(null,vec__25316,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25320 = seq__25312;
var G__25321 = chunk__25313;
var G__25322 = count__25314;
var G__25323 = (i__25315 + (1));
seq__25312 = G__25320;
chunk__25313 = G__25321;
count__25314 = G__25322;
i__25315 = G__25323;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25312);if(temp__4126__auto__)
{var seq__25312__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25312__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__25312__$1);{
var G__25324 = cljs.core.chunk_rest.call(null,seq__25312__$1);
var G__25325 = c__4307__auto__;
var G__25326 = cljs.core.count.call(null,c__4307__auto__);
var G__25327 = (0);
seq__25312 = G__25324;
chunk__25313 = G__25325;
count__25314 = G__25326;
i__25315 = G__25327;
continue;
}
} else
{var vec__25317 = cljs.core.first.call(null,seq__25312__$1);var idx = cljs.core.nth.call(null,vec__25317,(0),null);var pc = cljs.core.nth.call(null,vec__25317,(1),null);var cc = cljs.core.nth.call(null,vec__25317,(2),null);var pv = cljs.core.nth.call(null,vec__25317,(3),null);var cv = cljs.core.nth.call(null,vec__25317,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__25328 = cljs.core.next.call(null,seq__25312__$1);
var G__25329 = null;
var G__25330 = (0);
var G__25331 = (0);
seq__25312 = G__25328;
chunk__25313 = G__25329;
count__25314 = G__25330;
i__25315 = G__25331;
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
