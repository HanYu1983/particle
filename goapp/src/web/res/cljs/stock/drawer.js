// Compiled by ClojureScript 0.0-2268
goog.provide('stock.drawer');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('stock.tool');
stock.drawer.max_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("max-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33064){var map__33065 = p__33064;var map__33065__$1 = ((cljs.core.seq_QMARK_.call(null,map__33065))?cljs.core.apply.call(null,cljs.core.hash_map,map__33065):map__33065);var t = cljs.core.get.call(null,map__33065__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.min_v = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("min-v",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33066){var map__33067 = p__33066;var map__33067__$1 = ((cljs.core.seq_QMARK_.call(null,map__33067))?cljs.core.apply.call(null,cljs.core.hash_map,map__33067):map__33067);var t = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.length = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("length",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33068){var map__33069 = p__33068;var map__33069__$1 = ((cljs.core.seq_QMARK_.call(null,map__33069))?cljs.core.apply.call(null,cljs.core.hash_map,map__33069):map__33069);var t = cljs.core.get.call(null,map__33069__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.draw_it = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-it",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (p__33070,base,ctx){var map__33071 = p__33070;var map__33071__$1 = ((cljs.core.seq_QMARK_.call(null,map__33071))?cljs.core.apply.call(null,cljs.core.hash_map,map__33071):map__33071);var t = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"type","type",1174270348));return t;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
stock.drawer.graphic_base = (function graphic_base(w,h,drawers){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.max_v,drawers));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,stock.drawer.min_v,drawers));var len_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,stock.drawer.length,drawers));var offset_v = (max_v - min_v);var offset_x = (w / (len_v + (1)));var pos_y = ((function (max_v,min_v,len_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,len_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,max_v,min_v,offset_v,offset_x,pos_y], null);
});
stock.drawer.draw = (function draw(p__33072,w,h,ctx){var map__33078 = p__33072;var map__33078__$1 = ((cljs.core.seq_QMARK_.call(null,map__33078))?cljs.core.apply.call(null,cljs.core.hash_map,map__33078):map__33078);var info = map__33078__$1;var drawers = cljs.core.get.call(null,map__33078__$1,new cljs.core.Keyword(null,"drawers","drawers",-1652645568));var base = stock.drawer.graphic_base.call(null,w,h,drawers);(ctx["fillStyle"] = "black");
ctx.fillRect((0),(0),w,h);
var seq__33079 = cljs.core.seq.call(null,drawers);var chunk__33080 = null;var count__33081 = (0);var i__33082 = (0);while(true){
if((i__33082 < count__33081))
{var drawer = cljs.core._nth.call(null,chunk__33080,i__33082);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__33083 = seq__33079;
var G__33084 = chunk__33080;
var G__33085 = count__33081;
var G__33086 = (i__33082 + (1));
seq__33079 = G__33083;
chunk__33080 = G__33084;
count__33081 = G__33085;
i__33082 = G__33086;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33079);if(temp__4126__auto__)
{var seq__33079__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33079__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33079__$1);{
var G__33087 = cljs.core.chunk_rest.call(null,seq__33079__$1);
var G__33088 = c__4307__auto__;
var G__33089 = cljs.core.count.call(null,c__4307__auto__);
var G__33090 = (0);
seq__33079 = G__33087;
chunk__33080 = G__33088;
count__33081 = G__33089;
i__33082 = G__33090;
continue;
}
} else
{var drawer = cljs.core.first.call(null,seq__33079__$1);ctx.save();
stock.drawer.draw_it.call(null,drawer,base,ctx);
ctx.restore();
{
var G__33091 = cljs.core.next.call(null,seq__33079__$1);
var G__33092 = null;
var G__33093 = (0);
var G__33094 = (0);
seq__33079 = G__33091;
chunk__33080 = G__33092;
count__33081 = G__33093;
i__33082 = G__33094;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__33095){var map__33096 = p__33095;var map__33096__$1 = ((cljs.core.seq_QMARK_.call(null,map__33096))?cljs.core.apply.call(null,cljs.core.hash_map,map__33096):map__33096);var line = cljs.core.get.call(null,map__33096__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__33096__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.high.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__33097){var map__33098 = p__33097;var map__33098__$1 = ((cljs.core.seq_QMARK_.call(null,map__33098))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);var line = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return stock.tool.low.call(null,kline);
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__33099){var map__33100 = p__33099;var map__33100__$1 = ((cljs.core.seq_QMARK_.call(null,map__33100))?cljs.core.apply.call(null,cljs.core.hash_map,map__33100):map__33100);var line = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})());
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"grid","grid",402978600),(function (p__33101,base,ctx){var map__33102 = p__33101;var map__33102__$1 = ((cljs.core.seq_QMARK_.call(null,map__33102))?cljs.core.apply.call(null,cljs.core.hash_map,map__33102):map__33102);var line = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"line","line",212345235));var kline = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var color = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"color","color",1011675173));var hideY = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"hideY","hideY",-712528791));var vec__33103 = base;var w = cljs.core.nth.call(null,vec__33103,(0),null);var h = cljs.core.nth.call(null,vec__33103,(1),null);var max_v = cljs.core.nth.call(null,vec__33103,(2),null);var min_v = cljs.core.nth.call(null,vec__33103,(3),null);var offset_v = cljs.core.nth.call(null,vec__33103,(4),null);var offset_x = cljs.core.nth.call(null,vec__33103,(5),null);var pos_y = cljs.core.nth.call(null,vec__33103,(6),null);var cnt = (6);var cntx = (25);var offset = ((max_v - min_v) / cnt);(ctx["strokeStyle"] = color);
(ctx["fillStyle"] = color);
(ctx["lineWidth"] = (1));
ctx.beginPath();
if(cljs.core.truth_(hideY))
{} else
{var seq__33104_33116 = cljs.core.seq.call(null,cljs.core.range.call(null,cnt));var chunk__33105_33117 = null;var count__33106_33118 = (0);var i__33107_33119 = (0);while(true){
if((i__33107_33119 < count__33106_33118))
{var i_33120 = cljs.core._nth.call(null,chunk__33105_33117,i__33107_33119);var v_33121 = (min_v + (i_33120 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_33121 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_33121));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_33121 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_33121));
ctx.moveTo((0),pos_y.call(null,v_33121));
ctx.lineTo(w,pos_y.call(null,v_33121));
{
var G__33122 = seq__33104_33116;
var G__33123 = chunk__33105_33117;
var G__33124 = count__33106_33118;
var G__33125 = (i__33107_33119 + (1));
seq__33104_33116 = G__33122;
chunk__33105_33117 = G__33123;
count__33106_33118 = G__33124;
i__33107_33119 = G__33125;
continue;
}
} else
{var temp__4126__auto___33126 = cljs.core.seq.call(null,seq__33104_33116);if(temp__4126__auto___33126)
{var seq__33104_33127__$1 = temp__4126__auto___33126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33104_33127__$1))
{var c__4307__auto___33128 = cljs.core.chunk_first.call(null,seq__33104_33127__$1);{
var G__33129 = cljs.core.chunk_rest.call(null,seq__33104_33127__$1);
var G__33130 = c__4307__auto___33128;
var G__33131 = cljs.core.count.call(null,c__4307__auto___33128);
var G__33132 = (0);
seq__33104_33116 = G__33129;
chunk__33105_33117 = G__33130;
count__33106_33118 = G__33131;
i__33107_33119 = G__33132;
continue;
}
} else
{var i_33133 = cljs.core.first.call(null,seq__33104_33127__$1);var v_33134 = (min_v + (i_33133 * offset));ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_33134 | (0)))),(w * ((1) / (3))),pos_y.call(null,v_33134));
ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((v_33134 | (0)))),(w * ((2) / (3))),pos_y.call(null,v_33134));
ctx.moveTo((0),pos_y.call(null,v_33134));
ctx.lineTo(w,pos_y.call(null,v_33134));
{
var G__33135 = cljs.core.next.call(null,seq__33104_33127__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__33104_33116 = G__33135;
chunk__33105_33117 = G__33136;
count__33106_33118 = G__33137;
i__33107_33119 = G__33138;
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
{var seq__33108_33139 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,kline)));var chunk__33109_33140 = null;var count__33110_33141 = (0);var i__33111_33142 = (0);while(true){
if((i__33111_33142 < count__33110_33141))
{var i_33143 = cljs.core._nth.call(null,chunk__33109_33140,i__33111_33142);if((cljs.core.mod.call(null,i_33143,cntx) === (0)))
{var posx_33144 = ((offset_x / (2)) + (i_33143 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_33143)),posx_33144,h);
ctx.moveTo(posx_33144,(0));
ctx.lineTo(posx_33144,h);
} else
{}
{
var G__33145 = seq__33108_33139;
var G__33146 = chunk__33109_33140;
var G__33147 = count__33110_33141;
var G__33148 = (i__33111_33142 + (1));
seq__33108_33139 = G__33145;
chunk__33109_33140 = G__33146;
count__33110_33141 = G__33147;
i__33111_33142 = G__33148;
continue;
}
} else
{var temp__4126__auto___33149 = cljs.core.seq.call(null,seq__33108_33139);if(temp__4126__auto___33149)
{var seq__33108_33150__$1 = temp__4126__auto___33149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33108_33150__$1))
{var c__4307__auto___33151 = cljs.core.chunk_first.call(null,seq__33108_33150__$1);{
var G__33152 = cljs.core.chunk_rest.call(null,seq__33108_33150__$1);
var G__33153 = c__4307__auto___33151;
var G__33154 = cljs.core.count.call(null,c__4307__auto___33151);
var G__33155 = (0);
seq__33108_33139 = G__33152;
chunk__33109_33140 = G__33153;
count__33110_33141 = G__33154;
i__33111_33142 = G__33155;
continue;
}
} else
{var i_33156 = cljs.core.first.call(null,seq__33108_33150__$1);if((cljs.core.mod.call(null,i_33156,cntx) === (0)))
{var posx_33157 = ((offset_x / (2)) + (i_33156 * offset_x));ctx.fillText(stock.tool.date.call(null,cljs.core.nth.call(null,kline,i_33156)),posx_33157,h);
ctx.moveTo(posx_33157,(0));
ctx.lineTo(posx_33157,h);
} else
{}
{
var G__33158 = cljs.core.next.call(null,seq__33108_33150__$1);
var G__33159 = null;
var G__33160 = (0);
var G__33161 = (0);
seq__33108_33139 = G__33158;
chunk__33109_33140 = G__33159;
count__33110_33141 = G__33160;
i__33111_33142 = G__33161;
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
{var seq__33112_33162 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,line)));var chunk__33113_33163 = null;var count__33114_33164 = (0);var i__33115_33165 = (0);while(true){
if((i__33115_33165 < count__33114_33164))
{var i_33166 = cljs.core._nth.call(null,chunk__33113_33163,i__33115_33165);if((cljs.core.mod.call(null,i_33166,cntx) === (0)))
{var posx_33167 = ((offset_x / (2)) + (i_33166 * offset_x));ctx.moveTo(posx_33167,(0));
ctx.lineTo(posx_33167,h);
} else
{}
{
var G__33168 = seq__33112_33162;
var G__33169 = chunk__33113_33163;
var G__33170 = count__33114_33164;
var G__33171 = (i__33115_33165 + (1));
seq__33112_33162 = G__33168;
chunk__33113_33163 = G__33169;
count__33114_33164 = G__33170;
i__33115_33165 = G__33171;
continue;
}
} else
{var temp__4126__auto___33172 = cljs.core.seq.call(null,seq__33112_33162);if(temp__4126__auto___33172)
{var seq__33112_33173__$1 = temp__4126__auto___33172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33112_33173__$1))
{var c__4307__auto___33174 = cljs.core.chunk_first.call(null,seq__33112_33173__$1);{
var G__33175 = cljs.core.chunk_rest.call(null,seq__33112_33173__$1);
var G__33176 = c__4307__auto___33174;
var G__33177 = cljs.core.count.call(null,c__4307__auto___33174);
var G__33178 = (0);
seq__33112_33162 = G__33175;
chunk__33113_33163 = G__33176;
count__33114_33164 = G__33177;
i__33115_33165 = G__33178;
continue;
}
} else
{var i_33179 = cljs.core.first.call(null,seq__33112_33173__$1);if((cljs.core.mod.call(null,i_33179,cntx) === (0)))
{var posx_33180 = ((offset_x / (2)) + (i_33179 * offset_x));ctx.moveTo(posx_33180,(0));
ctx.lineTo(posx_33180,h);
} else
{}
{
var G__33181 = cljs.core.next.call(null,seq__33112_33173__$1);
var G__33182 = null;
var G__33183 = (0);
var G__33184 = (0);
seq__33112_33162 = G__33181;
chunk__33113_33163 = G__33182;
count__33114_33164 = G__33183;
i__33115_33165 = G__33184;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33185){var map__33186 = p__33185;var map__33186__$1 = ((cljs.core.seq_QMARK_.call(null,map__33186))?cljs.core.apply.call(null,cljs.core.hash_map,map__33186):map__33186);var line = cljs.core.get.call(null,map__33186__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.max,line);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33187){var map__33188 = p__33187;var map__33188__$1 = ((cljs.core.seq_QMARK_.call(null,map__33188))?cljs.core.apply.call(null,cljs.core.hash_map,map__33188):map__33188);var line = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.apply.call(null,cljs.core.min,line);
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33189){var map__33190 = p__33189;var map__33190__$1 = ((cljs.core.seq_QMARK_.call(null,map__33190))?cljs.core.apply.call(null,cljs.core.hash_map,map__33190):map__33190);var line = cljs.core.get.call(null,map__33190__$1,new cljs.core.Keyword(null,"line","line",212345235));return cljs.core.count.call(null,line);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"line","line",212345235),(function (p__33191,base,ctx){var map__33192 = p__33191;var map__33192__$1 = ((cljs.core.seq_QMARK_.call(null,map__33192))?cljs.core.apply.call(null,cljs.core.hash_map,map__33192):map__33192);var line = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"line","line",212345235));var color = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"color","color",1011675173));var offset = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var style = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"style","style",-496642736));var vec__33193 = base;var w = cljs.core.nth.call(null,vec__33193,(0),null);var h = cljs.core.nth.call(null,vec__33193,(1),null);var max_v = cljs.core.nth.call(null,vec__33193,(2),null);var min_v = cljs.core.nth.call(null,vec__33193,(3),null);var offset_v = cljs.core.nth.call(null,vec__33193,(4),null);var offset_x = cljs.core.nth.call(null,vec__33193,(5),null);var pos_y = cljs.core.nth.call(null,vec__33193,(6),null);var offset__$1 = (function (){var or__3551__auto__ = offset;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (0);
}
})();(ctx["strokeStyle"] = color);
(ctx["lineWidth"] = (1));
var pred__33194 = cljs.core._EQ_;var expr__33195 = style;if(cljs.core.truth_(pred__33194.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__33195)))
{var seq__33197 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line));var chunk__33198 = null;var count__33199 = (0);var i__33200 = (0);while(true){
if((i__33200 < count__33199))
{var vec__33201 = cljs.core._nth.call(null,chunk__33198,i__33200);var idx = cljs.core.nth.call(null,vec__33201,(0),null);var value = cljs.core.nth.call(null,vec__33201,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__33209 = seq__33197;
var G__33210 = chunk__33198;
var G__33211 = count__33199;
var G__33212 = (i__33200 + (1));
seq__33197 = G__33209;
chunk__33198 = G__33210;
count__33199 = G__33211;
i__33200 = G__33212;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33197);if(temp__4126__auto__)
{var seq__33197__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33197__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33197__$1);{
var G__33213 = cljs.core.chunk_rest.call(null,seq__33197__$1);
var G__33214 = c__4307__auto__;
var G__33215 = cljs.core.count.call(null,c__4307__auto__);
var G__33216 = (0);
seq__33197 = G__33213;
chunk__33198 = G__33214;
count__33199 = G__33215;
i__33200 = G__33216;
continue;
}
} else
{var vec__33202 = cljs.core.first.call(null,seq__33197__$1);var idx = cljs.core.nth.call(null,vec__33202,(0),null);var value = cljs.core.nth.call(null,vec__33202,(1),null);ctx.beginPath();
ctx.arc(((idx + offset__$1) * offset_x),pos_y.call(null,value),(offset_x / (2)),(0),6.28,false);
ctx.stroke();
{
var G__33217 = cljs.core.next.call(null,seq__33197__$1);
var G__33218 = null;
var G__33219 = (0);
var G__33220 = (0);
seq__33197 = G__33217;
chunk__33198 = G__33218;
count__33199 = G__33219;
i__33200 = G__33220;
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
var seq__33203_33221 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (pred__33194,expr__33195,vec__33193,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__33192,map__33192__$1,line,color,offset,style){
return (function() { 
var G__33225__delegate = function (args){return args;
};
var G__33225 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33225__delegate.call(this,args);};
G__33225.cljs$lang$maxFixedArity = 0;
G__33225.cljs$lang$applyTo = (function (arglist__33226){
var args = cljs.core.seq(arglist__33226);
return G__33225__delegate(args);
});
G__33225.cljs$core$IFn$_invoke$arity$variadic = G__33225__delegate;
return G__33225;
})()
;})(pred__33194,expr__33195,vec__33193,w,h,max_v,min_v,offset_v,offset_x,pos_y,offset__$1,map__33192,map__33192__$1,line,color,offset,style))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,line))),line,cljs.core.rest.call(null,line)));var chunk__33204_33222 = null;var count__33205_33223 = (0);var i__33206_33224 = (0);while(true){
if((i__33206_33224 < count__33205_33223))
{var vec__33207_33227 = cljs.core._nth.call(null,chunk__33204_33222,i__33206_33224);var idx_33228 = cljs.core.nth.call(null,vec__33207_33227,(0),null);var prev_33229 = cljs.core.nth.call(null,vec__33207_33227,(1),null);var curr_33230 = cljs.core.nth.call(null,vec__33207_33227,(2),null);ctx.moveTo(((idx_33228 + offset__$1) * offset_x),pos_y.call(null,prev_33229));
ctx.lineTo((((idx_33228 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_33230));
{
var G__33231 = seq__33203_33221;
var G__33232 = chunk__33204_33222;
var G__33233 = count__33205_33223;
var G__33234 = (i__33206_33224 + (1));
seq__33203_33221 = G__33231;
chunk__33204_33222 = G__33232;
count__33205_33223 = G__33233;
i__33206_33224 = G__33234;
continue;
}
} else
{var temp__4126__auto___33235 = cljs.core.seq.call(null,seq__33203_33221);if(temp__4126__auto___33235)
{var seq__33203_33236__$1 = temp__4126__auto___33235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33203_33236__$1))
{var c__4307__auto___33237 = cljs.core.chunk_first.call(null,seq__33203_33236__$1);{
var G__33238 = cljs.core.chunk_rest.call(null,seq__33203_33236__$1);
var G__33239 = c__4307__auto___33237;
var G__33240 = cljs.core.count.call(null,c__4307__auto___33237);
var G__33241 = (0);
seq__33203_33221 = G__33238;
chunk__33204_33222 = G__33239;
count__33205_33223 = G__33240;
i__33206_33224 = G__33241;
continue;
}
} else
{var vec__33208_33242 = cljs.core.first.call(null,seq__33203_33236__$1);var idx_33243 = cljs.core.nth.call(null,vec__33208_33242,(0),null);var prev_33244 = cljs.core.nth.call(null,vec__33208_33242,(1),null);var curr_33245 = cljs.core.nth.call(null,vec__33208_33242,(2),null);ctx.moveTo(((idx_33243 + offset__$1) * offset_x),pos_y.call(null,prev_33244));
ctx.lineTo((((idx_33243 + offset__$1) + (1)) * offset_x),pos_y.call(null,curr_33245));
{
var G__33246 = cljs.core.next.call(null,seq__33203_33236__$1);
var G__33247 = null;
var G__33248 = (0);
var G__33249 = (0);
seq__33203_33221 = G__33246;
chunk__33204_33222 = G__33247;
count__33205_33223 = G__33248;
i__33206_33224 = G__33249;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33250){var map__33251 = p__33250;var map__33251__$1 = ((cljs.core.seq_QMARK_.call(null,map__33251))?cljs.core.apply.call(null,cljs.core.hash_map,map__33251):map__33251);var kline = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.max,stock.tool.high.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33252){var map__33253 = p__33252;var map__33253__$1 = ((cljs.core.seq_QMARK_.call(null,map__33253))?cljs.core.apply.call(null,cljs.core.hash_map,map__33253):map__33253);var kline = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.apply.call(null,cljs.core.min,stock.tool.low.call(null,kline));
}));
cljs.core._add_method.call(null,stock.drawer.length,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33254){var map__33255 = p__33254;var map__33255__$1 = ((cljs.core.seq_QMARK_.call(null,map__33255))?cljs.core.apply.call(null,cljs.core.hash_map,map__33255):map__33255);var kline = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));return cljs.core.count.call(null,kline);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"kline","kline",-1160432594),(function (p__33256,base,ctx){var map__33257 = p__33256;var map__33257__$1 = ((cljs.core.seq_QMARK_.call(null,map__33257))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);var kline = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var info = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"info","info",-317069002));var vec__33258 = base;var w = cljs.core.nth.call(null,vec__33258,(0),null);var h = cljs.core.nth.call(null,vec__33258,(1),null);var max_v = cljs.core.nth.call(null,vec__33258,(2),null);var min_v = cljs.core.nth.call(null,vec__33258,(3),null);var offset_v = cljs.core.nth.call(null,vec__33258,(4),null);var offset_x = cljs.core.nth.call(null,vec__33258,(5),null);var pos_y = cljs.core.nth.call(null,vec__33258,(6),null);(ctx["fillStyle"] = "black");
var seq__33259 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33258,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33257,map__33257__$1,kline,info){
return (function() { 
var G__33267__delegate = function (args){return args;
};
var G__33267 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33267__delegate.call(this,args);};
G__33267.cljs$lang$maxFixedArity = 0;
G__33267.cljs$lang$applyTo = (function (arglist__33268){
var args = cljs.core.seq(arglist__33268);
return G__33267__delegate(args);
});
G__33267.cljs$core$IFn$_invoke$arity$variadic = G__33267__delegate;
return G__33267;
})()
;})(vec__33258,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33257,map__33257__$1,kline,info))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline,(function (){var or__3551__auto__ = info;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return kline;
}
})()));var chunk__33260 = null;var count__33261 = (0);var i__33262 = (0);while(true){
if((i__33262 < count__33261))
{var vec__33263 = cljs.core._nth.call(null,chunk__33260,i__33262);var idx = cljs.core.nth.call(null,vec__33263,(0),null);var vec__33264 = cljs.core.nth.call(null,vec__33263,(1),null);var date = cljs.core.nth.call(null,vec__33264,(0),null);var open = cljs.core.nth.call(null,vec__33264,(1),null);var high = cljs.core.nth.call(null,vec__33264,(2),null);var low = cljs.core.nth.call(null,vec__33264,(3),null);var close = cljs.core.nth.call(null,vec__33264,(4),null);var volume = cljs.core.nth.call(null,vec__33264,(5),null);var info__$1 = cljs.core.nth.call(null,vec__33263,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__33269 = seq__33259;
var G__33270 = chunk__33260;
var G__33271 = count__33261;
var G__33272 = (i__33262 + (1));
seq__33259 = G__33269;
chunk__33260 = G__33270;
count__33261 = G__33271;
i__33262 = G__33272;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33259);if(temp__4126__auto__)
{var seq__33259__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33259__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33259__$1);{
var G__33273 = cljs.core.chunk_rest.call(null,seq__33259__$1);
var G__33274 = c__4307__auto__;
var G__33275 = cljs.core.count.call(null,c__4307__auto__);
var G__33276 = (0);
seq__33259 = G__33273;
chunk__33260 = G__33274;
count__33261 = G__33275;
i__33262 = G__33276;
continue;
}
} else
{var vec__33265 = cljs.core.first.call(null,seq__33259__$1);var idx = cljs.core.nth.call(null,vec__33265,(0),null);var vec__33266 = cljs.core.nth.call(null,vec__33265,(1),null);var date = cljs.core.nth.call(null,vec__33266,(0),null);var open = cljs.core.nth.call(null,vec__33266,(1),null);var high = cljs.core.nth.call(null,vec__33266,(2),null);var low = cljs.core.nth.call(null,vec__33266,(3),null);var close = cljs.core.nth.call(null,vec__33266,(4),null);var volume = cljs.core.nth.call(null,vec__33266,(5),null);var info__$1 = cljs.core.nth.call(null,vec__33265,(2),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__33277 = cljs.core.next.call(null,seq__33259__$1);
var G__33278 = null;
var G__33279 = (0);
var G__33280 = (0);
seq__33259 = G__33277;
chunk__33260 = G__33278;
count__33261 = G__33279;
i__33262 = G__33280;
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
cljs.core._add_method.call(null,stock.drawer.max_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33281){var map__33282 = p__33281;var map__33282__$1 = ((cljs.core.seq_QMARK_.call(null,map__33282))?cljs.core.apply.call(null,cljs.core.hash_map,map__33282):map__33282);var cz = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.max,cz);
}));
cljs.core._add_method.call(null,stock.drawer.min_v,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33283){var map__33284 = p__33283;var map__33284__$1 = ((cljs.core.seq_QMARK_.call(null,map__33284))?cljs.core.apply.call(null,cljs.core.hash_map,map__33284):map__33284);var cz = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));return cljs.core.apply.call(null,cljs.core.min,cz);
}));
cljs.core._add_method.call(null,stock.drawer.draw_it,new cljs.core.Keyword(null,"clock","clock",-894301127),(function (p__33285,base,ctx){var map__33286 = p__33285;var map__33286__$1 = ((cljs.core.seq_QMARK_.call(null,map__33286))?cljs.core.apply.call(null,cljs.core.hash_map,map__33286):map__33286);var cz = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"cz","cz",1670864932));var vz = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"vz","vz",-575323393));var color = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"color","color",1011675173));var vec__33287 = base;var w = cljs.core.nth.call(null,vec__33287,(0),null);var h = cljs.core.nth.call(null,vec__33287,(1),null);var max_v = cljs.core.nth.call(null,vec__33287,(2),null);var min_v = cljs.core.nth.call(null,vec__33287,(3),null);var offset_v = cljs.core.nth.call(null,vec__33287,(4),null);var offset_x = cljs.core.nth.call(null,vec__33287,(5),null);var pos_y = cljs.core.nth.call(null,vec__33287,(6),null);var proj_x = ((function (vec__33287,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33286,map__33286__$1,cz,vz,color){
return (function (v){return ((v * (w / (8))) + (w / (2)));
});})(vec__33287,w,h,max_v,min_v,offset_v,offset_x,pos_y,map__33286,map__33286__$1,cz,vz,color))
;var proj_y = ((function (vec__33287,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__33286,map__33286__$1,cz,vz,color){
return (function (v){return (((v * (h / (8))) * (-1)) + (h / (2)));
});})(vec__33287,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,map__33286,map__33286__$1,cz,vz,color))
;(ctx["fillStyle"] = color);
(ctx["strokeStyle"] = color);
var seq__33288 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__33287,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__33286,map__33286__$1,cz,vz,color){
return (function() { 
var G__33294__delegate = function (args){return args;
};
var G__33294 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33294__delegate.call(this,args);};
G__33294.cljs$lang$maxFixedArity = 0;
G__33294.cljs$lang$applyTo = (function (arglist__33295){
var args = cljs.core.seq(arglist__33295);
return G__33294__delegate(args);
});
G__33294.cljs$core$IFn$_invoke$arity$variadic = G__33294__delegate;
return G__33294;
})()
;})(vec__33287,w,h,max_v,min_v,offset_v,offset_x,pos_y,proj_x,proj_y,map__33286,map__33286__$1,cz,vz,color))
,cljs.core.range.call(null,cljs.core.count.call(null,cz)),cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__33289 = null;var count__33290 = (0);var i__33291 = (0);while(true){
if((i__33291 < count__33290))
{var vec__33292 = cljs.core._nth.call(null,chunk__33289,i__33291);var idx = cljs.core.nth.call(null,vec__33292,(0),null);var pc = cljs.core.nth.call(null,vec__33292,(1),null);var cc = cljs.core.nth.call(null,vec__33292,(2),null);var pv = cljs.core.nth.call(null,vec__33292,(3),null);var cv = cljs.core.nth.call(null,vec__33292,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__33296 = seq__33288;
var G__33297 = chunk__33289;
var G__33298 = count__33290;
var G__33299 = (i__33291 + (1));
seq__33288 = G__33296;
chunk__33289 = G__33297;
count__33290 = G__33298;
i__33291 = G__33299;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33288);if(temp__4126__auto__)
{var seq__33288__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33288__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__33288__$1);{
var G__33300 = cljs.core.chunk_rest.call(null,seq__33288__$1);
var G__33301 = c__4307__auto__;
var G__33302 = cljs.core.count.call(null,c__4307__auto__);
var G__33303 = (0);
seq__33288 = G__33300;
chunk__33289 = G__33301;
count__33290 = G__33302;
i__33291 = G__33303;
continue;
}
} else
{var vec__33293 = cljs.core.first.call(null,seq__33288__$1);var idx = cljs.core.nth.call(null,vec__33293,(0),null);var pc = cljs.core.nth.call(null,vec__33293,(1),null);var cc = cljs.core.nth.call(null,vec__33293,(2),null);var pv = cljs.core.nth.call(null,vec__33293,(3),null);var cv = cljs.core.nth.call(null,vec__33293,(4),null);ctx.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),proj_x.call(null,pv),proj_y.call(null,pc));
ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__33304 = cljs.core.next.call(null,seq__33288__$1);
var G__33305 = null;
var G__33306 = (0);
var G__33307 = (0);
seq__33288 = G__33304;
chunk__33289 = G__33305;
count__33290 = G__33306;
i__33291 = G__33307;
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
