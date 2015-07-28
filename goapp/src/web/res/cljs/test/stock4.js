// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__355055_SHARP_){return cljs.core.nth.call(null,p1__355055_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__355056_SHARP_){return cljs.core.nth.call(null,p1__355056_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__355064 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__355064,(0),null);var min_v = cljs.core.nth.call(null,vec__355064,(1),null);var offset_v = cljs.core.nth.call(null,vec__355064,(2),null);var offset_x = cljs.core.nth.call(null,vec__355064,(3),null);var pos_y = cljs.core.nth.call(null,vec__355064,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__355065_355071 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355064,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__355075__delegate = function (args){return args;
};
var G__355075 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355075__delegate.call(this,args);};
G__355075.cljs$lang$maxFixedArity = 0;
G__355075.cljs$lang$applyTo = (function (arglist__355076){
var args = cljs.core.seq(arglist__355076);
return G__355075__delegate(args);
});
G__355075.cljs$core$IFn$_invoke$arity$variadic = G__355075__delegate;
return G__355075;
})()
;})(vec__355064,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__355066_355072 = null;var count__355067_355073 = (0);var i__355068_355074 = (0);while(true){
if((i__355068_355074 < count__355067_355073))
{var vec__355069_355077 = cljs.core._nth.call(null,chunk__355066_355072,i__355068_355074);var idx_355078 = cljs.core.nth.call(null,vec__355069_355077,(0),null);var prev_355079 = cljs.core.nth.call(null,vec__355069_355077,(1),null);var curr_355080 = cljs.core.nth.call(null,vec__355069_355077,(2),null);if((typeof prev_355079 === 'number') && (typeof curr_355080 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_355078 * offset_x),(((1) - prev_355079) * h));
ctx.lineTo(((idx_355078 + (1)) * offset_x),(((1) - curr_355080) * h));
ctx.stroke();
} else
{}
{
var G__355081 = seq__355065_355071;
var G__355082 = chunk__355066_355072;
var G__355083 = count__355067_355073;
var G__355084 = (i__355068_355074 + (1));
seq__355065_355071 = G__355081;
chunk__355066_355072 = G__355082;
count__355067_355073 = G__355083;
i__355068_355074 = G__355084;
continue;
}
} else
{var temp__4126__auto___355085 = cljs.core.seq.call(null,seq__355065_355071);if(temp__4126__auto___355085)
{var seq__355065_355086__$1 = temp__4126__auto___355085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355065_355086__$1))
{var c__4307__auto___355087 = cljs.core.chunk_first.call(null,seq__355065_355086__$1);{
var G__355088 = cljs.core.chunk_rest.call(null,seq__355065_355086__$1);
var G__355089 = c__4307__auto___355087;
var G__355090 = cljs.core.count.call(null,c__4307__auto___355087);
var G__355091 = (0);
seq__355065_355071 = G__355088;
chunk__355066_355072 = G__355089;
count__355067_355073 = G__355090;
i__355068_355074 = G__355091;
continue;
}
} else
{var vec__355070_355092 = cljs.core.first.call(null,seq__355065_355086__$1);var idx_355093 = cljs.core.nth.call(null,vec__355070_355092,(0),null);var prev_355094 = cljs.core.nth.call(null,vec__355070_355092,(1),null);var curr_355095 = cljs.core.nth.call(null,vec__355070_355092,(2),null);if((typeof prev_355094 === 'number') && (typeof curr_355095 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_355093 * offset_x),(((1) - prev_355094) * h));
ctx.lineTo(((idx_355093 + (1)) * offset_x),(((1) - curr_355095) * h));
ctx.stroke();
} else
{}
{
var G__355096 = cljs.core.next.call(null,seq__355065_355086__$1);
var G__355097 = null;
var G__355098 = (0);
var G__355099 = (0);
seq__355065_355071 = G__355096;
chunk__355066_355072 = G__355097;
count__355067_355073 = G__355098;
i__355068_355074 = G__355099;
continue;
}
}
} else
{}
}
break;
}
return null;
});
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__355111 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__355111,(0),null);var min_v = cljs.core.nth.call(null,vec__355111,(1),null);var offset_v = cljs.core.nth.call(null,vec__355111,(2),null);var offset_x = cljs.core.nth.call(null,vec__355111,(3),null);var pos_y = cljs.core.nth.call(null,vec__355111,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__355112_355122 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355111,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__355126__delegate = function (args){return args;
};
var G__355126 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355126__delegate.call(this,args);};
G__355126.cljs$lang$maxFixedArity = 0;
G__355126.cljs$lang$applyTo = (function (arglist__355127){
var args = cljs.core.seq(arglist__355127);
return G__355126__delegate(args);
});
G__355126.cljs$core$IFn$_invoke$arity$variadic = G__355126__delegate;
return G__355126;
})()
;})(vec__355111,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__355113_355123 = null;var count__355114_355124 = (0);var i__355115_355125 = (0);while(true){
if((i__355115_355125 < count__355114_355124))
{var vec__355116_355128 = cljs.core._nth.call(null,chunk__355113_355123,i__355115_355125);var idx_355129 = cljs.core.nth.call(null,vec__355116_355128,(0),null);var vec__355117_355130 = cljs.core.nth.call(null,vec__355116_355128,(1),null);var avg_355131 = cljs.core.nth.call(null,vec__355117_355130,(0),null);var sd_v_355132 = cljs.core.nth.call(null,vec__355117_355130,(1),null);var vec__355118_355133 = cljs.core.nth.call(null,vec__355116_355128,(2),null);var __355134 = cljs.core.nth.call(null,vec__355118_355133,(0),null);var __355135__$1 = cljs.core.nth.call(null,vec__355118_355133,(1),null);var __355136__$2 = cljs.core.nth.call(null,vec__355118_355133,(2),null);var __355137__$3 = cljs.core.nth.call(null,vec__355118_355133,(3),null);var close_355138 = cljs.core.nth.call(null,vec__355118_355133,(4),null);var __355139__$4 = cljs.core.nth.call(null,vec__355118_355133,(5),null);(ctx["strokeStyle"] = (((avg_355131 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_355129 * offset_x),pos_y.call(null,((close_355138 + sd_v_355132) + sd_v_355132)));
ctx.lineTo(((idx_355129 + (1)) * offset_x),pos_y.call(null,((close_355138 + sd_v_355132) + sd_v_355132)));
ctx.stroke();
ctx.moveTo((idx_355129 * offset_x),pos_y.call(null,((close_355138 - sd_v_355132) - sd_v_355132)));
ctx.lineTo(((idx_355129 + (1)) * offset_x),pos_y.call(null,((close_355138 - sd_v_355132) - sd_v_355132)));
ctx.stroke();
{
var G__355140 = seq__355112_355122;
var G__355141 = chunk__355113_355123;
var G__355142 = count__355114_355124;
var G__355143 = (i__355115_355125 + (1));
seq__355112_355122 = G__355140;
chunk__355113_355123 = G__355141;
count__355114_355124 = G__355142;
i__355115_355125 = G__355143;
continue;
}
} else
{var temp__4126__auto___355144 = cljs.core.seq.call(null,seq__355112_355122);if(temp__4126__auto___355144)
{var seq__355112_355145__$1 = temp__4126__auto___355144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355112_355145__$1))
{var c__4307__auto___355146 = cljs.core.chunk_first.call(null,seq__355112_355145__$1);{
var G__355147 = cljs.core.chunk_rest.call(null,seq__355112_355145__$1);
var G__355148 = c__4307__auto___355146;
var G__355149 = cljs.core.count.call(null,c__4307__auto___355146);
var G__355150 = (0);
seq__355112_355122 = G__355147;
chunk__355113_355123 = G__355148;
count__355114_355124 = G__355149;
i__355115_355125 = G__355150;
continue;
}
} else
{var vec__355119_355151 = cljs.core.first.call(null,seq__355112_355145__$1);var idx_355152 = cljs.core.nth.call(null,vec__355119_355151,(0),null);var vec__355120_355153 = cljs.core.nth.call(null,vec__355119_355151,(1),null);var avg_355154 = cljs.core.nth.call(null,vec__355120_355153,(0),null);var sd_v_355155 = cljs.core.nth.call(null,vec__355120_355153,(1),null);var vec__355121_355156 = cljs.core.nth.call(null,vec__355119_355151,(2),null);var __355157 = cljs.core.nth.call(null,vec__355121_355156,(0),null);var __355158__$1 = cljs.core.nth.call(null,vec__355121_355156,(1),null);var __355159__$2 = cljs.core.nth.call(null,vec__355121_355156,(2),null);var __355160__$3 = cljs.core.nth.call(null,vec__355121_355156,(3),null);var close_355161 = cljs.core.nth.call(null,vec__355121_355156,(4),null);var __355162__$4 = cljs.core.nth.call(null,vec__355121_355156,(5),null);(ctx["strokeStyle"] = (((avg_355154 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_355152 * offset_x),pos_y.call(null,((close_355161 + sd_v_355155) + sd_v_355155)));
ctx.lineTo(((idx_355152 + (1)) * offset_x),pos_y.call(null,((close_355161 + sd_v_355155) + sd_v_355155)));
ctx.stroke();
ctx.moveTo((idx_355152 * offset_x),pos_y.call(null,((close_355161 - sd_v_355155) - sd_v_355155)));
ctx.lineTo(((idx_355152 + (1)) * offset_x),pos_y.call(null,((close_355161 - sd_v_355155) - sd_v_355155)));
ctx.stroke();
{
var G__355163 = cljs.core.next.call(null,seq__355112_355145__$1);
var G__355164 = null;
var G__355165 = (0);
var G__355166 = (0);
seq__355112_355122 = G__355163;
chunk__355113_355123 = G__355164;
count__355114_355124 = G__355165;
i__355115_355125 = G__355166;
continue;
}
}
} else
{}
}
break;
}
return null;
});
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__355174 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__355174,(0),null);var min_v = cljs.core.nth.call(null,vec__355174,(1),null);var offset_v = cljs.core.nth.call(null,vec__355174,(2),null);var offset_x = cljs.core.nth.call(null,vec__355174,(3),null);var pos_y = cljs.core.nth.call(null,vec__355174,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__355175_355181 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355174,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__355185__delegate = function (args){return args;
};
var G__355185 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355185__delegate.call(this,args);};
G__355185.cljs$lang$maxFixedArity = 0;
G__355185.cljs$lang$applyTo = (function (arglist__355186){
var args = cljs.core.seq(arglist__355186);
return G__355185__delegate(args);
});
G__355185.cljs$core$IFn$_invoke$arity$variadic = G__355185__delegate;
return G__355185;
})()
;})(vec__355174,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__355176_355182 = null;var count__355177_355183 = (0);var i__355178_355184 = (0);while(true){
if((i__355178_355184 < count__355177_355183))
{var vec__355179_355187 = cljs.core._nth.call(null,chunk__355176_355182,i__355178_355184);var idx_355188 = cljs.core.nth.call(null,vec__355179_355187,(0),null);var prev_355189 = cljs.core.nth.call(null,vec__355179_355187,(1),null);var curr_355190 = cljs.core.nth.call(null,vec__355179_355187,(2),null);if((typeof prev_355189 === 'number') && (typeof curr_355190 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_355188 * offset_x),pos_y.call(null,prev_355189));
ctx.lineTo(((idx_355188 + (1)) * offset_x),pos_y.call(null,curr_355190));
ctx.stroke();
} else
{}
{
var G__355191 = seq__355175_355181;
var G__355192 = chunk__355176_355182;
var G__355193 = count__355177_355183;
var G__355194 = (i__355178_355184 + (1));
seq__355175_355181 = G__355191;
chunk__355176_355182 = G__355192;
count__355177_355183 = G__355193;
i__355178_355184 = G__355194;
continue;
}
} else
{var temp__4126__auto___355195 = cljs.core.seq.call(null,seq__355175_355181);if(temp__4126__auto___355195)
{var seq__355175_355196__$1 = temp__4126__auto___355195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355175_355196__$1))
{var c__4307__auto___355197 = cljs.core.chunk_first.call(null,seq__355175_355196__$1);{
var G__355198 = cljs.core.chunk_rest.call(null,seq__355175_355196__$1);
var G__355199 = c__4307__auto___355197;
var G__355200 = cljs.core.count.call(null,c__4307__auto___355197);
var G__355201 = (0);
seq__355175_355181 = G__355198;
chunk__355176_355182 = G__355199;
count__355177_355183 = G__355200;
i__355178_355184 = G__355201;
continue;
}
} else
{var vec__355180_355202 = cljs.core.first.call(null,seq__355175_355196__$1);var idx_355203 = cljs.core.nth.call(null,vec__355180_355202,(0),null);var prev_355204 = cljs.core.nth.call(null,vec__355180_355202,(1),null);var curr_355205 = cljs.core.nth.call(null,vec__355180_355202,(2),null);if((typeof prev_355204 === 'number') && (typeof curr_355205 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_355203 * offset_x),pos_y.call(null,prev_355204));
ctx.lineTo(((idx_355203 + (1)) * offset_x),pos_y.call(null,curr_355205));
ctx.stroke();
} else
{}
{
var G__355206 = cljs.core.next.call(null,seq__355175_355196__$1);
var G__355207 = null;
var G__355208 = (0);
var G__355209 = (0);
seq__355175_355181 = G__355206;
chunk__355176_355182 = G__355207;
count__355177_355183 = G__355208;
i__355178_355184 = G__355209;
continue;
}
}
} else
{}
}
break;
}
return null;
});
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__355210){var vec__355225 = p__355210;var rsv = cljs.core.nth.call(null,vec__355225,(0),null);var k = cljs.core.nth.call(null,vec__355225,(1),null);var d = cljs.core.nth.call(null,vec__355225,(2),null);var kd = vec__355225;var vec__355226 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__355226,(0),null);var min_v = cljs.core.nth.call(null,vec__355226,(1),null);var offset_v = cljs.core.nth.call(null,vec__355226,(2),null);var offset_x = cljs.core.nth.call(null,vec__355226,(3),null);var pos_y = cljs.core.nth.call(null,vec__355226,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__355227_355239 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355226,max_v,min_v,offset_v,offset_x,pos_y,vec__355225,rsv,k,d,kd){
return (function() { 
var G__355243__delegate = function (args){return args;
};
var G__355243 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355243__delegate.call(this,args);};
G__355243.cljs$lang$maxFixedArity = 0;
G__355243.cljs$lang$applyTo = (function (arglist__355244){
var args = cljs.core.seq(arglist__355244);
return G__355243__delegate(args);
});
G__355243.cljs$core$IFn$_invoke$arity$variadic = G__355243__delegate;
return G__355243;
})()
;})(vec__355226,max_v,min_v,offset_v,offset_x,pos_y,vec__355225,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__355228_355240 = null;var count__355229_355241 = (0);var i__355230_355242 = (0);while(true){
if((i__355230_355242 < count__355229_355241))
{var vec__355231_355245 = cljs.core._nth.call(null,chunk__355228_355240,i__355230_355242);var idx_355246 = cljs.core.nth.call(null,vec__355231_355245,(0),null);var prev_355247 = cljs.core.nth.call(null,vec__355231_355245,(1),null);var curr_355248 = cljs.core.nth.call(null,vec__355231_355245,(2),null);ctx.beginPath();
ctx.moveTo((idx_355246 * offset_x),(((1) - (prev_355247 / (100))) * h));
ctx.lineTo(((idx_355246 + (1)) * offset_x),(((1) - (curr_355248 / (100))) * h));
ctx.stroke();
{
var G__355249 = seq__355227_355239;
var G__355250 = chunk__355228_355240;
var G__355251 = count__355229_355241;
var G__355252 = (i__355230_355242 + (1));
seq__355227_355239 = G__355249;
chunk__355228_355240 = G__355250;
count__355229_355241 = G__355251;
i__355230_355242 = G__355252;
continue;
}
} else
{var temp__4126__auto___355253 = cljs.core.seq.call(null,seq__355227_355239);if(temp__4126__auto___355253)
{var seq__355227_355254__$1 = temp__4126__auto___355253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355227_355254__$1))
{var c__4307__auto___355255 = cljs.core.chunk_first.call(null,seq__355227_355254__$1);{
var G__355256 = cljs.core.chunk_rest.call(null,seq__355227_355254__$1);
var G__355257 = c__4307__auto___355255;
var G__355258 = cljs.core.count.call(null,c__4307__auto___355255);
var G__355259 = (0);
seq__355227_355239 = G__355256;
chunk__355228_355240 = G__355257;
count__355229_355241 = G__355258;
i__355230_355242 = G__355259;
continue;
}
} else
{var vec__355232_355260 = cljs.core.first.call(null,seq__355227_355254__$1);var idx_355261 = cljs.core.nth.call(null,vec__355232_355260,(0),null);var prev_355262 = cljs.core.nth.call(null,vec__355232_355260,(1),null);var curr_355263 = cljs.core.nth.call(null,vec__355232_355260,(2),null);ctx.beginPath();
ctx.moveTo((idx_355261 * offset_x),(((1) - (prev_355262 / (100))) * h));
ctx.lineTo(((idx_355261 + (1)) * offset_x),(((1) - (curr_355263 / (100))) * h));
ctx.stroke();
{
var G__355264 = cljs.core.next.call(null,seq__355227_355254__$1);
var G__355265 = null;
var G__355266 = (0);
var G__355267 = (0);
seq__355227_355239 = G__355264;
chunk__355228_355240 = G__355265;
count__355229_355241 = G__355266;
i__355230_355242 = G__355267;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__355233_355268 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355226,max_v,min_v,offset_v,offset_x,pos_y,vec__355225,rsv,k,d,kd){
return (function() { 
var G__355272__delegate = function (args){return args;
};
var G__355272 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355272__delegate.call(this,args);};
G__355272.cljs$lang$maxFixedArity = 0;
G__355272.cljs$lang$applyTo = (function (arglist__355273){
var args = cljs.core.seq(arglist__355273);
return G__355272__delegate(args);
});
G__355272.cljs$core$IFn$_invoke$arity$variadic = G__355272__delegate;
return G__355272;
})()
;})(vec__355226,max_v,min_v,offset_v,offset_x,pos_y,vec__355225,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__355234_355269 = null;var count__355235_355270 = (0);var i__355236_355271 = (0);while(true){
if((i__355236_355271 < count__355235_355270))
{var vec__355237_355274 = cljs.core._nth.call(null,chunk__355234_355269,i__355236_355271);var idx_355275 = cljs.core.nth.call(null,vec__355237_355274,(0),null);var prev_355276 = cljs.core.nth.call(null,vec__355237_355274,(1),null);var curr_355277 = cljs.core.nth.call(null,vec__355237_355274,(2),null);ctx.beginPath();
ctx.moveTo((idx_355275 * offset_x),(((1) - (prev_355276 / (100))) * h));
ctx.lineTo(((idx_355275 + (1)) * offset_x),(((1) - (curr_355277 / (100))) * h));
ctx.stroke();
{
var G__355278 = seq__355233_355268;
var G__355279 = chunk__355234_355269;
var G__355280 = count__355235_355270;
var G__355281 = (i__355236_355271 + (1));
seq__355233_355268 = G__355278;
chunk__355234_355269 = G__355279;
count__355235_355270 = G__355280;
i__355236_355271 = G__355281;
continue;
}
} else
{var temp__4126__auto___355282 = cljs.core.seq.call(null,seq__355233_355268);if(temp__4126__auto___355282)
{var seq__355233_355283__$1 = temp__4126__auto___355282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355233_355283__$1))
{var c__4307__auto___355284 = cljs.core.chunk_first.call(null,seq__355233_355283__$1);{
var G__355285 = cljs.core.chunk_rest.call(null,seq__355233_355283__$1);
var G__355286 = c__4307__auto___355284;
var G__355287 = cljs.core.count.call(null,c__4307__auto___355284);
var G__355288 = (0);
seq__355233_355268 = G__355285;
chunk__355234_355269 = G__355286;
count__355235_355270 = G__355287;
i__355236_355271 = G__355288;
continue;
}
} else
{var vec__355238_355289 = cljs.core.first.call(null,seq__355233_355283__$1);var idx_355290 = cljs.core.nth.call(null,vec__355238_355289,(0),null);var prev_355291 = cljs.core.nth.call(null,vec__355238_355289,(1),null);var curr_355292 = cljs.core.nth.call(null,vec__355238_355289,(2),null);ctx.beginPath();
ctx.moveTo((idx_355290 * offset_x),(((1) - (prev_355291 / (100))) * h));
ctx.lineTo(((idx_355290 + (1)) * offset_x),(((1) - (curr_355292 / (100))) * h));
ctx.stroke();
{
var G__355293 = cljs.core.next.call(null,seq__355233_355283__$1);
var G__355294 = null;
var G__355295 = (0);
var G__355296 = (0);
seq__355233_355268 = G__355293;
chunk__355234_355269 = G__355294;
count__355235_355270 = G__355295;
i__355236_355271 = G__355296;
continue;
}
}
} else
{}
}
break;
}
return null;
});
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__355307 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__355307,(0),null);var min_v = cljs.core.nth.call(null,vec__355307,(1),null);var offset_v = cljs.core.nth.call(null,vec__355307,(2),null);var offset_x = cljs.core.nth.call(null,vec__355307,(3),null);var pos_y = cljs.core.nth.call(null,vec__355307,(4),null);(ctx["fillStyle"] = "black");
var seq__355308 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355307,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__355316__delegate = function (args){return args;
};
var G__355316 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355316__delegate.call(this,args);};
G__355316.cljs$lang$maxFixedArity = 0;
G__355316.cljs$lang$applyTo = (function (arglist__355317){
var args = cljs.core.seq(arglist__355317);
return G__355316__delegate(args);
});
G__355316.cljs$core$IFn$_invoke$arity$variadic = G__355316__delegate;
return G__355316;
})()
;})(vec__355307,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__355309 = null;var count__355310 = (0);var i__355311 = (0);while(true){
if((i__355311 < count__355310))
{var vec__355312 = cljs.core._nth.call(null,chunk__355309,i__355311);var idx = cljs.core.nth.call(null,vec__355312,(0),null);var vec__355313 = cljs.core.nth.call(null,vec__355312,(1),null);var date = cljs.core.nth.call(null,vec__355313,(0),null);var _ = cljs.core.nthnext.call(null,vec__355313,(1));var line = vec__355313;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__355308,chunk__355309,count__355310,i__355311,vec__355312,idx,vec__355313,date,_,line,vec__355307,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__355297_SHARP_){return cljs.core._EQ_.call(null,date,p1__355297_SHARP_);
});})(seq__355308,chunk__355309,count__355310,i__355311,vec__355312,idx,vec__355313,date,_,line,vec__355307,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__355318 = seq__355308;
var G__355319 = chunk__355309;
var G__355320 = count__355310;
var G__355321 = (i__355311 + (1));
seq__355308 = G__355318;
chunk__355309 = G__355319;
count__355310 = G__355320;
i__355311 = G__355321;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__355308);if(temp__4126__auto__)
{var seq__355308__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355308__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__355308__$1);{
var G__355322 = cljs.core.chunk_rest.call(null,seq__355308__$1);
var G__355323 = c__4307__auto__;
var G__355324 = cljs.core.count.call(null,c__4307__auto__);
var G__355325 = (0);
seq__355308 = G__355322;
chunk__355309 = G__355323;
count__355310 = G__355324;
i__355311 = G__355325;
continue;
}
} else
{var vec__355314 = cljs.core.first.call(null,seq__355308__$1);var idx = cljs.core.nth.call(null,vec__355314,(0),null);var vec__355315 = cljs.core.nth.call(null,vec__355314,(1),null);var date = cljs.core.nth.call(null,vec__355315,(0),null);var _ = cljs.core.nthnext.call(null,vec__355315,(1));var line = vec__355315;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__355308,chunk__355309,count__355310,i__355311,vec__355314,idx,vec__355315,date,_,line,seq__355308__$1,temp__4126__auto__,vec__355307,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__355297_SHARP_){return cljs.core._EQ_.call(null,date,p1__355297_SHARP_);
});})(seq__355308,chunk__355309,count__355310,i__355311,vec__355314,idx,vec__355315,date,_,line,seq__355308__$1,temp__4126__auto__,vec__355307,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__355326 = cljs.core.next.call(null,seq__355308__$1);
var G__355327 = null;
var G__355328 = (0);
var G__355329 = (0);
seq__355308 = G__355326;
chunk__355309 = G__355327;
count__355310 = G__355328;
i__355311 = G__355329;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__355339 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__355339,(0),null);var min_v = cljs.core.nth.call(null,vec__355339,(1),null);var offset_v = cljs.core.nth.call(null,vec__355339,(2),null);var offset_x = cljs.core.nth.call(null,vec__355339,(3),null);var pos_y = cljs.core.nth.call(null,vec__355339,(4),null);var seq__355340 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__355339,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__355348__delegate = function (args){return args;
};
var G__355348 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355348__delegate.call(this,args);};
G__355348.cljs$lang$maxFixedArity = 0;
G__355348.cljs$lang$applyTo = (function (arglist__355349){
var args = cljs.core.seq(arglist__355349);
return G__355348__delegate(args);
});
G__355348.cljs$core$IFn$_invoke$arity$variadic = G__355348__delegate;
return G__355348;
})()
;})(vec__355339,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__355341 = null;var count__355342 = (0);var i__355343 = (0);while(true){
if((i__355343 < count__355342))
{var vec__355344 = cljs.core._nth.call(null,chunk__355341,i__355343);var idx = cljs.core.nth.call(null,vec__355344,(0),null);var vec__355345 = cljs.core.nth.call(null,vec__355344,(1),null);var date = cljs.core.nth.call(null,vec__355345,(0),null);var open = cljs.core.nth.call(null,vec__355345,(1),null);var high = cljs.core.nth.call(null,vec__355345,(2),null);var low = cljs.core.nth.call(null,vec__355345,(3),null);var close = cljs.core.nth.call(null,vec__355345,(4),null);var volume = cljs.core.nth.call(null,vec__355345,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__355350 = seq__355340;
var G__355351 = chunk__355341;
var G__355352 = count__355342;
var G__355353 = (i__355343 + (1));
seq__355340 = G__355350;
chunk__355341 = G__355351;
count__355342 = G__355352;
i__355343 = G__355353;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__355340);if(temp__4126__auto__)
{var seq__355340__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__355340__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__355340__$1);{
var G__355354 = cljs.core.chunk_rest.call(null,seq__355340__$1);
var G__355355 = c__4307__auto__;
var G__355356 = cljs.core.count.call(null,c__4307__auto__);
var G__355357 = (0);
seq__355340 = G__355354;
chunk__355341 = G__355355;
count__355342 = G__355356;
i__355343 = G__355357;
continue;
}
} else
{var vec__355346 = cljs.core.first.call(null,seq__355340__$1);var idx = cljs.core.nth.call(null,vec__355346,(0),null);var vec__355347 = cljs.core.nth.call(null,vec__355346,(1),null);var date = cljs.core.nth.call(null,vec__355347,(0),null);var open = cljs.core.nth.call(null,vec__355347,(1),null);var high = cljs.core.nth.call(null,vec__355347,(2),null);var low = cljs.core.nth.call(null,vec__355347,(3),null);var close = cljs.core.nth.call(null,vec__355347,(4),null);var volume = cljs.core.nth.call(null,vec__355347,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__355358 = cljs.core.next.call(null,seq__355340__$1);
var G__355359 = null;
var G__355360 = (0);
var G__355361 = (0);
seq__355340 = G__355358;
chunk__355341 = G__355359;
count__355342 = G__355360;
i__355343 = G__355361;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__355365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__355365,(0),null);var h = cljs.core.nth.call(null,vec__355365,(1),null);return ((function (ctx,vec__355365,w,h){
return (function (p__355366){var map__355367 = p__355366;var map__355367__$1 = ((cljs.core.seq_QMARK_.call(null,map__355367))?cljs.core.apply.call(null,cljs.core.hash_map,map__355367):map__355367);var appctx = map__355367__$1;var bias = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__355367__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
ctx.fillRect((0),(0),w,h);
test.stock4.draw_line.call(null,ctx,w,h,kline);
if(cljs.core.truth_(turn))
{test.stock4.draw_turn.call(null,ctx,w,h,kline,turn);
} else
{}
if(cljs.core.truth_(kd))
{test.stock4.draw_kd.call(null,ctx,w,h,kline,kd);
} else
{}
if(cljs.core.truth_(sar))
{test.stock4.draw_sar.call(null,ctx,w,h,kline,sar);
} else
{}
if(cljs.core.truth_(sd))
{test.stock4.draw_sd.call(null,ctx,w,h,kline,sd);
} else
{}
if(cljs.core.truth_(yu))
{test.stock4.draw_yu.call(null,ctx,w,h,kline,yu);
} else
{}
return appctx;
});
;})(ctx,vec__355365,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj355405 = {"url":"/proxy","dataType":"text","data":(function (){var obj355407 = {"url":url};return obj355407;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_355414){var state_val_355415 = (state_355414[(1)]);if((state_val_355415 === (2)))
{var inst_355411 = (state_355414[(2)]);var inst_355412 = cljs.core.async.close_BANG_.call(null,ret);var state_355414__$1 = (function (){var statearr_355416 = state_355414;(statearr_355416[(7)] = inst_355411);
return statearr_355416;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355414__$1,inst_355412);
} else
{if((state_val_355415 === (1)))
{var inst_355408 = [null,data];var inst_355409 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_355408,null));var state_355414__$1 = state_355414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_355414__$1,(2),ret,inst_355409);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_355420 = [null,null,null,null,null,null,null,null];(statearr_355420[(0)] = state_machine__6188__auto__);
(statearr_355420[(1)] = (1));
return statearr_355420;
});
var state_machine__6188__auto____1 = (function (state_355414){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_355414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e355421){if((e355421 instanceof Object))
{var ex__6191__auto__ = e355421;var statearr_355422_355440 = state_355414;(statearr_355422_355440[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e355421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__355441 = state_355414;
state_355414 = G__355441;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_355414){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_355414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_355423 = f__6203__auto__.call(null);(statearr_355423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_355423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_355430){var state_val_355431 = (state_355430[(1)]);if((state_val_355431 === (2)))
{var inst_355427 = (state_355430[(2)]);var inst_355428 = cljs.core.async.close_BANG_.call(null,ret);var state_355430__$1 = (function (){var statearr_355432 = state_355430;(statearr_355432[(7)] = inst_355427);
return statearr_355432;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355430__$1,inst_355428);
} else
{if((state_val_355431 === (1)))
{var inst_355424 = [err];var inst_355425 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_355424,null));var state_355430__$1 = state_355430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_355430__$1,(2),ret,inst_355425);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_355436 = [null,null,null,null,null,null,null,null];(statearr_355436[(0)] = state_machine__6188__auto__);
(statearr_355436[(1)] = (1));
return statearr_355436;
});
var state_machine__6188__auto____1 = (function (state_355430){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_355430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e355437){if((e355437 instanceof Object))
{var ex__6191__auto__ = e355437;var statearr_355438_355442 = state_355430;(statearr_355438_355442[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e355437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__355443 = state_355430;
state_355430 = G__355443;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_355430){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_355430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_355439 = f__6203__auto__.call(null);(statearr_355439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_355439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj355405;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__355452(s__355453){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__355453__$1 = s__355453;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__355453__$1);if(temp__4126__auto__)
{var s__355453__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__355453__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__355453__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__355455 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__355454 = (0);while(true){
if((i__355454 < size__4275__auto__))
{var vec__355458 = cljs.core._nth.call(null,c__4274__auto__,i__355454);var _ = cljs.core.nth.call(null,vec__355458,(0),null);var date = cljs.core.nth.call(null,vec__355458,(1),null);var open = cljs.core.nth.call(null,vec__355458,(2),null);var high = cljs.core.nth.call(null,vec__355458,(3),null);var low = cljs.core.nth.call(null,vec__355458,(4),null);var close = cljs.core.nth.call(null,vec__355458,(5),null);var volume = cljs.core.nth.call(null,vec__355458,(6),null);cljs.core.chunk_append.call(null,b__355455,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__355460 = (i__355454 + (1));
i__355454 = G__355460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__355455),iter__355452.call(null,cljs.core.chunk_rest.call(null,s__355453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__355455),null);
}
} else
{var vec__355459 = cljs.core.first.call(null,s__355453__$2);var _ = cljs.core.nth.call(null,vec__355459,(0),null);var date = cljs.core.nth.call(null,vec__355459,(1),null);var open = cljs.core.nth.call(null,vec__355459,(2),null);var high = cljs.core.nth.call(null,vec__355459,(3),null);var low = cljs.core.nth.call(null,vec__355459,(4),null);var close = cljs.core.nth.call(null,vec__355459,(5),null);var volume = cljs.core.nth.call(null,vec__355459,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__355452.call(null,cljs.core.rest.call(null,s__355453__$2)));
}
} else
{return null;
}
break;
}
});})(infos))
,null,null));
});})(infos))
;return iter__4276__auto__.call(null,infos);
});
test.stock4.stock_info = (function stock_info(all,id,startdate,start,num){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_355538){var state_val_355539 = (state_355538[(1)]);if((state_val_355539 === (9)))
{var inst_355528 = (state_355538[(2)]);var state_355538__$1 = state_355538;var statearr_355540_355557 = state_355538__$1;(statearr_355540_355557[(2)] = inst_355528);
(statearr_355540_355557[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_355539 === (8)))
{var inst_355534 = (state_355538[(2)]);var state_355538__$1 = state_355538;var statearr_355541_355558 = state_355538__$1;(statearr_355541_355558[(2)] = inst_355534);
(statearr_355541_355558[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_355539 === (7)))
{var inst_355520 = (state_355538[(7)]);var inst_355530 = cljs.core.concat.call(null,all,inst_355520);var inst_355531 = [null,inst_355530];var inst_355532 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_355531,null));var state_355538__$1 = state_355538;var statearr_355542_355559 = state_355538__$1;(statearr_355542_355559[(2)] = inst_355532);
(statearr_355542_355559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_355539 === (6)))
{var inst_355520 = (state_355538[(7)]);var inst_355524 = cljs.core.concat.call(null,all,inst_355520);var inst_355525 = (start + num);var inst_355526 = stock_info.call(null,inst_355524,id,startdate,inst_355525,num);var state_355538__$1 = state_355538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_355538__$1,(9),inst_355526);
} else
{if((state_val_355539 === (5)))
{var inst_355536 = (state_355538[(2)]);var state_355538__$1 = state_355538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355538__$1,inst_355536);
} else
{if((state_val_355539 === (4)))
{var inst_355515 = (state_355538[(8)]);var inst_355520 = (state_355538[(7)]);var inst_355520__$1 = test.stock4.parse_info.call(null,inst_355515);var inst_355521 = cljs.core.count.call(null,inst_355520__$1);var inst_355522 = cljs.core._EQ_.call(null,num,inst_355521);var state_355538__$1 = (function (){var statearr_355543 = state_355538;(statearr_355543[(7)] = inst_355520__$1);
return statearr_355543;
})();if(inst_355522)
{var statearr_355544_355560 = state_355538__$1;(statearr_355544_355560[(1)] = (6));
} else
{var statearr_355545_355561 = state_355538__$1;(statearr_355545_355561[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_355539 === (3)))
{var inst_355514 = (state_355538[(9)]);var inst_355517 = [inst_355514];var inst_355518 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_355517,null));var state_355538__$1 = state_355538;var statearr_355546_355562 = state_355538__$1;(statearr_355546_355562[(2)] = inst_355518);
(statearr_355546_355562[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_355539 === (2)))
{var inst_355514 = (state_355538[(9)]);var inst_355513 = (state_355538[(2)]);var inst_355514__$1 = cljs.core.nth.call(null,inst_355513,(0),null);var inst_355515 = cljs.core.nth.call(null,inst_355513,(1),null);var state_355538__$1 = (function (){var statearr_355547 = state_355538;(statearr_355547[(8)] = inst_355515);
(statearr_355547[(9)] = inst_355514__$1);
return statearr_355547;
})();if(cljs.core.truth_(inst_355514__$1))
{var statearr_355548_355563 = state_355538__$1;(statearr_355548_355563[(1)] = (3));
} else
{var statearr_355549_355564 = state_355538__$1;(statearr_355549_355564[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_355539 === (1)))
{var inst_355510 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_355511 = test.stock4.content.call(null,inst_355510);var state_355538__$1 = state_355538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_355538__$1,(2),inst_355511);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_355553 = [null,null,null,null,null,null,null,null,null,null];(statearr_355553[(0)] = state_machine__6188__auto__);
(statearr_355553[(1)] = (1));
return statearr_355553;
});
var state_machine__6188__auto____1 = (function (state_355538){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_355538);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e355554){if((e355554 instanceof Object))
{var ex__6191__auto__ = e355554;var statearr_355555_355565 = state_355538;(statearr_355555_355565[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e355554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__355566 = state_355538;
state_355538 = G__355566;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_355538){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_355538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_355556 = f__6203__auto__.call(null);(statearr_355556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_355556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__355575 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__355575,(0),null);var open = cljs.core.nth.call(null,vec__355575,(1),null);var _ = cljs.core.nth.call(null,vec__355575,(2),null);var ___$1 = cljs.core.nth.call(null,vec__355575,(3),null);var ___$2 = cljs.core.nth.call(null,vec__355575,(4),null);var ___$3 = cljs.core.nth.call(null,vec__355575,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__355575,date,open,_,___$1,___$2,___$3){
return (function (p__355577){var vec__355578 = p__355577;var ___$4 = cljs.core.nth.call(null,vec__355578,(0),null);var ___$5 = cljs.core.nth.call(null,vec__355578,(1),null);var high = cljs.core.nth.call(null,vec__355578,(2),null);var ___$6 = cljs.core.nth.call(null,vec__355578,(3),null);var ___$7 = cljs.core.nth.call(null,vec__355578,(4),null);var ___$8 = cljs.core.nth.call(null,vec__355578,(5),null);return high;
});})(group,vec__355575,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__355575,date,open,_,___$1,___$2,___$3,high){
return (function (p__355579){var vec__355580 = p__355579;var ___$4 = cljs.core.nth.call(null,vec__355580,(0),null);var ___$5 = cljs.core.nth.call(null,vec__355580,(1),null);var ___$6 = cljs.core.nth.call(null,vec__355580,(2),null);var low = cljs.core.nth.call(null,vec__355580,(3),null);var ___$7 = cljs.core.nth.call(null,vec__355580,(4),null);var ___$8 = cljs.core.nth.call(null,vec__355580,(5),null);return low;
});})(group,vec__355575,date,open,_,___$1,___$2,___$3,high))
,group));var vec__355576 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__355576,(0),null);var ___$5 = cljs.core.nth.call(null,vec__355576,(1),null);var ___$6 = cljs.core.nth.call(null,vec__355576,(2),null);var ___$7 = cljs.core.nth.call(null,vec__355576,(3),null);var close = cljs.core.nth.call(null,vec__355576,(4),null);var ___$8 = cljs.core.nth.call(null,vec__355576,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__355575,date,open,_,___$1,___$2,___$3,high,low,vec__355576,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__355581){var vec__355582 = p__355581;var ___$9 = cljs.core.nth.call(null,vec__355582,(0),null);var ___$10 = cljs.core.nth.call(null,vec__355582,(1),null);var ___$11 = cljs.core.nth.call(null,vec__355582,(2),null);var ___$12 = cljs.core.nth.call(null,vec__355582,(3),null);var ___$13 = cljs.core.nth.call(null,vec__355582,(4),null);var volume = cljs.core.nth.call(null,vec__355582,(5),null);return volume;
});})(group,vec__355575,date,open,_,___$1,___$2,___$3,high,low,vec__355576,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__355575,date,open,_,___$1,___$2,___$3,high,low,vec__355576,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__355575,date,open,_,___$1,___$2,___$3,high,low,vec__355576,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__355586 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__355586,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355586,(1),null);var ___$2 = cljs.core.nth.call(null,vec__355586,(2),null);var ___$3 = cljs.core.nth.call(null,vec__355586,(3),null);var c1 = cljs.core.nth.call(null,vec__355586,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355586,(5),null);var l1 = vec__355586;var vec__355587 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__355587,(0),null);var ___$5 = cljs.core.nth.call(null,vec__355587,(1),null);var ___$6 = cljs.core.nth.call(null,vec__355587,(2),null);var ___$7 = cljs.core.nth.call(null,vec__355587,(3),null);var c2 = cljs.core.nth.call(null,vec__355587,(4),null);var ___$8 = cljs.core.nth.call(null,vec__355587,(5),null);var l2 = vec__355587;var vec__355588 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__355588,(0),null);var ___$10 = cljs.core.nth.call(null,vec__355588,(1),null);var ___$11 = cljs.core.nth.call(null,vec__355588,(2),null);var ___$12 = cljs.core.nth.call(null,vec__355588,(3),null);var c3 = cljs.core.nth.call(null,vec__355588,(4),null);var ___$13 = cljs.core.nth.call(null,vec__355588,(5),null);var l3 = vec__355588;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__355586,_,___$1,___$2,___$3,c1,___$4,l1,vec__355587,date,___$5,___$6,___$7,c2,___$8,l2,vec__355588,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__355586,_,___$1,___$2,___$3,c1,___$4,l1,vec__355587,date,___$5,___$6,___$7,c2,___$8,l2,vec__355588,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
,null,null)));
} else
{return check_turn.call(null,cljs.core.rest.call(null,kline));
}
} else
{return null;
}
});
/**
* 以最近30天的振盪平均值來計算
* 振盪超過平均值1倍以上的可以視為長紅
* 振盪低於平均值0.8倍以下的可以視為小幅盤整
*/
test.stock4.check_length = (function check_length(kline){if((cljs.core.count.call(null,kline) >= (30)))
{var group = cljs.core.take.call(null,(30),kline);var avg_length = (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group){
return (function (p__355593){var vec__355594 = p__355593;var _ = cljs.core.nth.call(null,vec__355594,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355594,(1),null);var high = cljs.core.nth.call(null,vec__355594,(2),null);var low = cljs.core.nth.call(null,vec__355594,(3),null);var ___$2 = cljs.core.nth.call(null,vec__355594,(4),null);var ___$3 = cljs.core.nth.call(null,vec__355594,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__355592 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__355592,(0),null);var open = cljs.core.nth.call(null,vec__355592,(1),null);var high = cljs.core.nth.call(null,vec__355592,(2),null);var low = cljs.core.nth.call(null,vec__355592,(3),null);var close = cljs.core.nth.call(null,vec__355592,(4),null);var ___$1 = cljs.core.nth.call(null,vec__355592,(5),null);var curr = vec__355592;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__355592,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__355592,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
,null,null)));
} else
{return null;
}
});
/**
* Simple Moving Average 簡單移動平均線
*/
test.stock4.sma = (function sma(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var group = cljs.core.take.call(null,n,kline);var avg = (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group){
return (function (p__355597){var vec__355598 = p__355597;var _ = cljs.core.nth.call(null,vec__355598,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355598,(1),null);var ___$2 = cljs.core.nth.call(null,vec__355598,(2),null);var ___$3 = cljs.core.nth.call(null,vec__355598,(3),null);var close = cljs.core.nth.call(null,vec__355598,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355598,(5),null);return close;
});})(group))
,group)) / cljs.core.count.call(null,group));var curr = cljs.core.first.call(null,kline);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,avg], null),(new cljs.core.LazySeq(null,((function (group,avg,curr){
return (function (){return sma.call(null,n,cljs.core.rest.call(null,kline));
});})(group,avg,curr))
,null,null)));
} else
{return null;
}
});
/**
* 網路版本的 Exponentional Moving Average 指數移動平均線
* 這個計算不知道正確還是錯誤
*/
test.stock4.ema2 = (function ema2(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var group = cljs.core.take.call(null,n,kline);var alpha = ((2) / (n + (1)));var value = (alpha * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) - alpha)),(1)),cljs.core.map.call(null,((function (group,alpha){
return (function (p__355601){var vec__355602 = p__355601;var _ = cljs.core.nth.call(null,vec__355602,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355602,(1),null);var ___$2 = cljs.core.nth.call(null,vec__355602,(2),null);var ___$3 = cljs.core.nth.call(null,vec__355602,(3),null);var close = cljs.core.nth.call(null,vec__355602,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355602,(5),null);return close;
});})(group,alpha))
,group))));var curr = cljs.core.first.call(null,kline);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,value], null),(new cljs.core.LazySeq(null,((function (group,alpha,value,curr){
return (function (){return ema2.call(null,n,cljs.core.rest.call(null,kline));
});})(group,alpha,value,curr))
,null,null)));
} else
{return null;
}
});
/**
* 點線賺錢術的 Exponentional Moving Average 指數移動平均線
* 使用了加權型式，w為1可用於計算MACD
* 這個計算上較為正確，和yahoo股市算的很接近
*/
test.stock4.ema = (function ema(n,w,kline){var vec__355608 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__355608,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355608,(1),null);var ___$2 = cljs.core.nth.call(null,vec__355608,(2),null);var ___$3 = cljs.core.nth.call(null,vec__355608,(3),null);var close = cljs.core.nth.call(null,vec__355608,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355608,(5),null);var curr = vec__355608;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__355608,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__355609){var vec__355610 = p__355609;var vec__355611 = cljs.core.nth.call(null,vec__355610,(0),null);var ___$5 = cljs.core.nth.call(null,vec__355611,(0),null);var prev_ema = cljs.core.nth.call(null,vec__355611,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__355610,(1),null);var idx = cljs.core.nth.call(null,vec__355610,(2),null);var vec__355612 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__355612,(0),null);var ___$7 = cljs.core.nth.call(null,vec__355612,(1),null);var ___$8 = cljs.core.nth.call(null,vec__355612,(2),null);var ___$9 = cljs.core.nth.call(null,vec__355612,(3),null);var close__$1 = cljs.core.nth.call(null,vec__355612,(4),null);var ___$10 = cljs.core.nth.call(null,vec__355612,(5),null);var curr__$1 = vec__355612;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__355608,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__355618 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__355618,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355618,(1),null);var ___$2 = cljs.core.nth.call(null,vec__355618,(2),null);var ___$3 = cljs.core.nth.call(null,vec__355618,(3),null);var ct = cljs.core.nth.call(null,vec__355618,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355618,(5),null);var curr = vec__355618;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__355618,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__355619){var vec__355620 = p__355619;var ___$5 = cljs.core.nth.call(null,vec__355620,(0),null);var ___$6 = cljs.core.nth.call(null,vec__355620,(1),null);var ___$7 = cljs.core.nth.call(null,vec__355620,(2),null);var low = cljs.core.nth.call(null,vec__355620,(3),null);var ___$8 = cljs.core.nth.call(null,vec__355620,(4),null);var ___$9 = cljs.core.nth.call(null,vec__355620,(5),null);return low;
});})(group,vec__355618,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__355618,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__355621){var vec__355622 = p__355621;var ___$5 = cljs.core.nth.call(null,vec__355622,(0),null);var ___$6 = cljs.core.nth.call(null,vec__355622,(1),null);var high = cljs.core.nth.call(null,vec__355622,(2),null);var ___$7 = cljs.core.nth.call(null,vec__355622,(3),null);var ___$8 = cljs.core.nth.call(null,vec__355622,(4),null);var ___$9 = cljs.core.nth.call(null,vec__355622,(5),null);return high;
});})(group,vec__355618,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__355618,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__355618,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
,null,null)));
} else
{return null;
}
});
/**
* n為3是最好的數值
*/
test.stock4.k = (function k(n,rsv_seq){if((cljs.core.count.call(null,rsv_seq) > n))
{var group = cljs.core.take.call(null,n,rsv_seq);var avg = (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group){
return (function (p__355625){var vec__355626 = p__355625;var line = cljs.core.nth.call(null,vec__355626,(0),null);var v = cljs.core.nth.call(null,vec__355626,(1),null);return v;
});})(group))
,group)) / cljs.core.count.call(null,group));return cljs.core.cons.call(null,avg,(new cljs.core.LazySeq(null,((function (group,avg){
return (function (){return k.call(null,n,cljs.core.rest.call(null,rsv_seq));
});})(group,avg))
,null,null)));
} else
{return null;
}
});
/**
* 拋物線指標
* 沒有計算反向作空，所以只看支撐線
*/
test.stock4.sar = (function sar(reverse_kline){if((cljs.core.count.call(null,reverse_kline) > (3)))
{var first_line = cljs.core.first.call(null,cljs.core.drop.call(null,(2),reverse_kline));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (first_line){
return (function (p__355650){var vec__355651 = p__355650;var _ = cljs.core.nth.call(null,vec__355651,(0),null);var ___$1 = cljs.core.nth.call(null,vec__355651,(1),null);var ___$2 = cljs.core.nth.call(null,vec__355651,(2),null);var low = cljs.core.nth.call(null,vec__355651,(3),null);var ___$3 = cljs.core.nth.call(null,vec__355651,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355651,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__355652){var vec__355653 = p__355652;var vec__355654 = cljs.core.nth.call(null,vec__355653,(0),null);var _ = cljs.core.nth.call(null,vec__355654,(0),null);var value = cljs.core.nth.call(null,vec__355654,(1),null);var ori = cljs.core.nth.call(null,vec__355653,(1),null);var prev = cljs.core.nth.call(null,vec__355653,(2),null);var curr = cljs.core.nth.call(null,vec__355653,(3),null);var act = cljs.core.nth.call(null,vec__355653,(4),null);var af = cljs.core.nth.call(null,vec__355653,(5),null);var vec__355655 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__355655,(0),null);var ___$2 = cljs.core.nth.call(null,vec__355655,(1),null);var ph = cljs.core.nth.call(null,vec__355655,(2),null);var pl = cljs.core.nth.call(null,vec__355655,(3),null);var ___$3 = cljs.core.nth.call(null,vec__355655,(4),null);var ___$4 = cljs.core.nth.call(null,vec__355655,(5),null);var prev_line = vec__355655;var vec__355656 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__355656,(0),null);var ___$6 = cljs.core.nth.call(null,vec__355656,(1),null);var ch = cljs.core.nth.call(null,vec__355656,(2),null);var cl = cljs.core.nth.call(null,vec__355656,(3),null);var ___$7 = cljs.core.nth.call(null,vec__355656,(4),null);var ___$8 = cljs.core.nth.call(null,vec__355656,(5),null);var curr_line = vec__355656;var should_turn = (function (){var pred__355657 = cljs.core._EQ_;var expr__355658 = act;if(cljs.core.truth_(pred__355657.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__355658)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__355657.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__355658)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__355658))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__355660 = cljs.core._EQ_;var expr__355661 = act;if(cljs.core.truth_(pred__355660.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__355661)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__355660,expr__355661,vec__355655,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__355656,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__355653,vec__355654,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__355663){var vec__355664 = p__355663;var ___$9 = cljs.core.nth.call(null,vec__355664,(0),null);var ___$10 = cljs.core.nth.call(null,vec__355664,(1),null);var high = cljs.core.nth.call(null,vec__355664,(2),null);var ___$11 = cljs.core.nth.call(null,vec__355664,(3),null);var ___$12 = cljs.core.nth.call(null,vec__355664,(4),null);var ___$13 = cljs.core.nth.call(null,vec__355664,(5),null);return high;
});})(pred__355660,expr__355661,vec__355655,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__355656,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__355653,vec__355654,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__355660.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__355661)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__355660,expr__355661,vec__355655,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__355656,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__355653,vec__355654,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__355665){var vec__355666 = p__355665;var ___$9 = cljs.core.nth.call(null,vec__355666,(0),null);var ___$10 = cljs.core.nth.call(null,vec__355666,(1),null);var ___$11 = cljs.core.nth.call(null,vec__355666,(2),null);var low__$1 = cljs.core.nth.call(null,vec__355666,(3),null);var ___$12 = cljs.core.nth.call(null,vec__355666,(4),null);var ___$13 = cljs.core.nth.call(null,vec__355666,(5),null);return low__$1;
});})(pred__355660,expr__355661,vec__355655,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__355656,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__355653,vec__355654,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__355661))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__355667 = cljs.core._EQ_;var expr__355668 = act;if(cljs.core.truth_(pred__355667.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__355668)))
{if(should_turn)
{return 0.02;
} else
{if((ch > ph))
{var x__3858__auto__ = (0.04 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
} else
{var x__3858__auto__ = (0.02 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
}
}
} else
{if(cljs.core.truth_(pred__355667.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__355668)))
{if(should_turn)
{return 0.02;
} else
{if((cl < pl))
{var x__3858__auto__ = (0.04 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
} else
{var x__3858__auto__ = (0.02 + af);var y__3859__auto__ = 0.2;return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
}
}
} else
{if(cljs.core.truth_(pred__355667.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__355668)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__355668))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__355670 = cljs.core._EQ_;var expr__355671 = act;if(cljs.core.truth_(pred__355670.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__355671)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__355670.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__355671)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__355671))));
}
}
})():act);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_line,next_value], null),cljs.core.rest.call(null,ori),cljs.core.rest.call(null,prev),cljs.core.rest.call(null,curr),next_act,next_af], null);
});})(first_line,low))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_line,low], null),reverse_kline,cljs.core.drop.call(null,(2),reverse_kline),cljs.core.drop.call(null,(3),reverse_kline),new cljs.core.Keyword(null,"buy","buy",-794379565),0.2], null)));
} else
{return null;
}
});
/**
* Standard Deviation 標準差
* n設為30很像不錯
*/
test.stock4.sd = (function sd(n,kline){if((cljs.core.count.call(null,kline) > n))
{var curr = cljs.core.first.call(null,kline);var sma_seq = cljs.core.take.call(null,n,cljs.core.map.call(null,cljs.core.second,test.stock4.sma.call(null,(1),kline)));var offsets = cljs.core.map.call(null,((function (curr,sma_seq){
return (function (prev,curr__$1){return (curr__$1 - prev);
});})(curr,sma_seq))
,cljs.core.rest.call(null,sma_seq),sma_seq);var offsets_avg = (cljs.core.apply.call(null,cljs.core._PLUS_,offsets) / n);var v = Math.sqrt((((1) / (n - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (curr,sma_seq,offsets,offsets_avg){
return (function (p1__355673_SHARP_){return Math.pow((p1__355673_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__355679 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__355679,(0),null);var vec__355680 = cljs.core.nth.call(null,vec__355679,(1),null);var avg = cljs.core.nth.call(null,vec__355680,(0),null);var sd_v = cljs.core.nth.call(null,vec__355680,(1),null);var currs = cljs.core.map.call(null,((function (vec__355679,_,vec__355680,avg,sd_v){
return (function (p__355681){var vec__355682 = p__355681;var ___$1 = cljs.core.nth.call(null,vec__355682,(0),null);var ___$2 = cljs.core.nth.call(null,vec__355682,(1),null);var ___$3 = cljs.core.nth.call(null,vec__355682,(2),null);var ___$4 = cljs.core.nth.call(null,vec__355682,(3),null);var close = cljs.core.nth.call(null,vec__355682,(4),null);var ___$5 = cljs.core.nth.call(null,vec__355682,(5),null);return close;
});})(vec__355679,_,vec__355680,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__355679,_,vec__355680,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__355679,_,vec__355680,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__355679,_,vec__355680,avg,sd_v,currs,offsets){
return (function (p1__355674_SHARP_){return (p1__355674_SHARP_ / sd_v);
});})(vec__355679,_,vec__355680,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__355679,_,vec__355680,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__355683__delegate = function (args){return args;
};
var G__355683 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355683__delegate.call(this,args);};
G__355683.cljs$lang$maxFixedArity = 0;
G__355683.cljs$lang$applyTo = (function (arglist__355684){
var args = cljs.core.seq(arglist__355684);
return G__355683__delegate(args);
});
G__355683.cljs$core$IFn$_invoke$arity$variadic = G__355683__delegate;
return G__355683;
})()
;})(vec__355679,_,vec__355680,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
test.stock4.yu = (function yu(learning,n,reverse_kline){var up_seq = cljs.core.map.call(null,(function (p__355693,p__355694){var vec__355695 = p__355693;var _ = cljs.core.nth.call(null,vec__355695,(0),null);var pc = cljs.core.nth.call(null,vec__355695,(1),null);var vec__355696 = p__355694;var ___$1 = cljs.core.nth.call(null,vec__355696,(0),null);var cc = cljs.core.nth.call(null,vec__355696,(1),null);return ((cc - pc) / pc);
}),test.stock4.sma.call(null,n,reverse_kline),cljs.core.rest.call(null,test.stock4.sma.call(null,n,reverse_kline)));var vs = cljs.core.map.call(null,((function (up_seq){
return (function (p__355697){var vec__355698 = p__355697;var dir = cljs.core.nth.call(null,vec__355698,(0),null);var ran = cljs.core.nth.call(null,vec__355698,(1),null);return (ran * (100));
});})(up_seq))
,cljs.core.reductions.call(null,((function (up_seq){
return (function (p__355699,up_offset){var vec__355700 = p__355699;var prev = cljs.core.nth.call(null,vec__355700,(0),null);var ran = cljs.core.nth.call(null,vec__355700,(1),null);var max_v = (prev + ran);var min_v = (prev - ran);console.log(max_v,up_offset,min_v,ran);
if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + 1.0E-4)], null);
}
});})(up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),0.0], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (up_seq,vs){
return (function() { 
var G__355701__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__355701 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__355701__delegate.call(this,args);};
G__355701.cljs$lang$maxFixedArity = 0;
G__355701.cljs$lang$applyTo = (function (arglist__355702){
var args = cljs.core.seq(arglist__355702);
return G__355701__delegate(args);
});
G__355701.cljs$core$IFn$_invoke$arity$variadic = G__355701__delegate;
return G__355701;
})()
;})(up_seq,vs))
,cljs.core.drop.call(null,n,reverse_kline),vs);
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_356135){var state_val_356136 = (state_356135[(1)]);if((state_val_356136 === (2)))
{var inst_356133 = (state_356135[(2)]);var state_356135__$1 = state_356135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356135__$1,inst_356133);
} else
{if((state_val_356136 === (1)))
{var inst_356131 = cljs.core.js__GT_clj.call(null,data);var state_356135__$1 = state_356135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356135__$1,(2),onView,inst_356131);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_356140 = [null,null,null,null,null,null,null];(statearr_356140[(0)] = state_machine__6188__auto__);
(statearr_356140[(1)] = (1));
return statearr_356140;
});
var state_machine__6188__auto____1 = (function (state_356135){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_356135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e356141){if((e356141 instanceof Object))
{var ex__6191__auto__ = e356141;var statearr_356142_356559 = state_356135;(statearr_356142_356559[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e356141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__356560 = state_356135;
state_356135 = G__356560;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_356135){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_356135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_356143 = f__6203__auto__.call(null);(statearr_356143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_356143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___356561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___356561,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___356561,draw,onSystem,onView){
return (function (state_356160){var state_val_356161 = (state_356160[(1)]);if((state_val_356161 === (6)))
{var inst_356156 = (state_356160[(2)]);var state_356160__$1 = state_356160;var statearr_356162_356562 = state_356160__$1;(statearr_356162_356562[(2)] = inst_356156);
(statearr_356162_356562[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356161 === (5)))
{var inst_356158 = (state_356160[(2)]);var state_356160__$1 = state_356160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356160__$1,inst_356158);
} else
{if((state_val_356161 === (4)))
{var inst_356149 = (state_356160[(7)]);var inst_356153 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_356149];var inst_356154 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_356153,null));var state_356160__$1 = state_356160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356160__$1,(6),onSystem,inst_356154);
} else
{if((state_val_356161 === (3)))
{var inst_356148 = (state_356160[(8)]);var inst_356151 = alert(inst_356148);var state_356160__$1 = state_356160;var statearr_356163_356563 = state_356160__$1;(statearr_356163_356563[(2)] = inst_356151);
(statearr_356163_356563[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356161 === (2)))
{var inst_356148 = (state_356160[(8)]);var inst_356147 = (state_356160[(2)]);var inst_356148__$1 = cljs.core.nth.call(null,inst_356147,(0),null);var inst_356149 = cljs.core.nth.call(null,inst_356147,(1),null);var state_356160__$1 = (function (){var statearr_356164 = state_356160;(statearr_356164[(7)] = inst_356149);
(statearr_356164[(8)] = inst_356148__$1);
return statearr_356164;
})();if(cljs.core.truth_(inst_356148__$1))
{var statearr_356165_356564 = state_356160__$1;(statearr_356165_356564[(1)] = (3));
} else
{var statearr_356166_356565 = state_356160__$1;(statearr_356166_356565[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356161 === (1)))
{var inst_356145 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_356160__$1 = state_356160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356160__$1,(2),inst_356145);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___356561,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___356561,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_356170 = [null,null,null,null,null,null,null,null,null];(statearr_356170[(0)] = state_machine__6188__auto__);
(statearr_356170[(1)] = (1));
return statearr_356170;
});
var state_machine__6188__auto____1 = (function (state_356160){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_356160);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e356171){if((e356171 instanceof Object))
{var ex__6191__auto__ = e356171;var statearr_356172_356566 = state_356160;(statearr_356172_356566[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e356171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__356567 = state_356160;
state_356160 = G__356567;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_356160){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_356160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___356561,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_356173 = f__6203__auto__.call(null);(statearr_356173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___356561);
return statearr_356173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___356561,draw,onSystem,onView))
);
var c__6202__auto___356568 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___356568,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___356568,draw,onSystem,onView){
return (function (state_356433){var state_val_356434 = (state_356433[(1)]);if((state_val_356434 === (65)))
{var inst_356378 = (state_356433[(7)]);var inst_356387 = cljs.core.first.call(null,inst_356378);var inst_356388 = cljs.core.pr_str.call(null,inst_356387);var inst_356389 = console.log(inst_356388);var inst_356390 = cljs.core.next.call(null,inst_356378);var inst_356364 = inst_356390;var inst_356365 = null;var inst_356366 = (0);var inst_356367 = (0);var state_356433__$1 = (function (){var statearr_356435 = state_356433;(statearr_356435[(8)] = inst_356364);
(statearr_356435[(9)] = inst_356366);
(statearr_356435[(10)] = inst_356389);
(statearr_356435[(11)] = inst_356365);
(statearr_356435[(12)] = inst_356367);
return statearr_356435;
})();var statearr_356436_356569 = state_356433__$1;(statearr_356436_356569[(2)] = null);
(statearr_356436_356569[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (62)))
{var state_356433__$1 = state_356433;var statearr_356437_356570 = state_356433__$1;(statearr_356437_356570[(2)] = null);
(statearr_356437_356570[(1)] = (63));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (7)))
{var inst_356187 = (state_356433[(13)]);var inst_356192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_356187);var state_356433__$1 = state_356433;var statearr_356438_356571 = state_356433__$1;(statearr_356438_356571[(2)] = inst_356192);
(statearr_356438_356571[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (59)))
{var inst_356364 = (state_356433[(8)]);var inst_356378 = (state_356433[(7)]);var inst_356378__$1 = cljs.core.seq.call(null,inst_356364);var state_356433__$1 = (function (){var statearr_356442 = state_356433;(statearr_356442[(7)] = inst_356378__$1);
return statearr_356442;
})();if(inst_356378__$1)
{var statearr_356443_356572 = state_356433__$1;(statearr_356443_356572[(1)] = (61));
} else
{var statearr_356444_356573 = state_356433__$1;(statearr_356444_356573[(1)] = (62));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (20)))
{var inst_356202 = (state_356433[(14)]);var inst_356230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_356202);var state_356433__$1 = state_356433;var statearr_356445_356574 = state_356433__$1;(statearr_356445_356574[(2)] = inst_356230);
(statearr_356445_356574[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (58)))
{var inst_356364 = (state_356433[(8)]);var inst_356366 = (state_356433[(9)]);var inst_356365 = (state_356433[(11)]);var inst_356367 = (state_356433[(12)]);var inst_356372 = cljs.core._nth.call(null,inst_356365,inst_356367);var inst_356373 = cljs.core.pr_str.call(null,inst_356372);var inst_356374 = console.log(inst_356373);var inst_356375 = (inst_356367 + (1));var tmp356439 = inst_356364;var tmp356440 = inst_356366;var tmp356441 = inst_356365;var inst_356364__$1 = tmp356439;var inst_356365__$1 = tmp356441;var inst_356366__$1 = tmp356440;var inst_356367__$1 = inst_356375;var state_356433__$1 = (function (){var statearr_356446 = state_356433;(statearr_356446[(8)] = inst_356364__$1);
(statearr_356446[(9)] = inst_356366__$1);
(statearr_356446[(11)] = inst_356365__$1);
(statearr_356446[(15)] = inst_356374);
(statearr_356446[(12)] = inst_356367__$1);
return statearr_356446;
})();var statearr_356447_356575 = state_356433__$1;(statearr_356447_356575[(2)] = null);
(statearr_356447_356575[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (60)))
{var inst_356398 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356448_356576 = state_356433__$1;(statearr_356448_356576[(2)] = inst_356398);
(statearr_356448_356576[(1)] = (57));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (27)))
{var inst_356234 = (state_356433[(16)]);var inst_356258 = cljs.core._EQ_.call(null,"sd",inst_356234);var state_356433__$1 = state_356433;if(inst_356258)
{var statearr_356449_356577 = state_356433__$1;(statearr_356449_356577[(1)] = (29));
} else
{var statearr_356450_356578 = state_356433__$1;(statearr_356450_356578[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (1)))
{var inst_356179 = (state_356433[(17)]);var inst_356177 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_356178 = [(200)];var inst_356179__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_356177,inst_356178);var inst_356180 = cljs.core.seq_QMARK_.call(null,inst_356179__$1);var state_356433__$1 = (function (){var statearr_356451 = state_356433;(statearr_356451[(17)] = inst_356179__$1);
return statearr_356451;
})();if(inst_356180)
{var statearr_356452_356579 = state_356433__$1;(statearr_356452_356579[(1)] = (2));
} else
{var statearr_356453_356580 = state_356433__$1;(statearr_356453_356580[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (24)))
{var inst_356234 = (state_356433[(16)]);var inst_356247 = cljs.core._EQ_.call(null,"yu",inst_356234);var state_356433__$1 = state_356433;if(inst_356247)
{var statearr_356454_356581 = state_356433__$1;(statearr_356454_356581[(1)] = (26));
} else
{var statearr_356455_356582 = state_356433__$1;(statearr_356455_356582[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (55)))
{var inst_356403 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356456_356583 = state_356433__$1;(statearr_356456_356583[(2)] = inst_356403);
(statearr_356456_356583[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (39)))
{var inst_356234 = (state_356433[(16)]);var inst_356305 = cljs.core._EQ_.call(null,"sar",inst_356234);var state_356433__$1 = state_356433;if(inst_356305)
{var statearr_356457_356584 = state_356433__$1;(statearr_356457_356584[(1)] = (41));
} else
{var statearr_356458_356585 = state_356433__$1;(statearr_356458_356585[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (46)))
{var inst_356409 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356459_356586 = state_356433__$1;(statearr_356459_356586[(2)] = inst_356409);
(statearr_356459_356586[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (4)))
{var inst_356179 = (state_356433[(17)]);var inst_356185 = (state_356433[(18)]);var inst_356185__$1 = (state_356433[(2)]);var inst_356186 = cljs.core.get.call(null,inst_356185__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_356187 = inst_356179;var state_356433__$1 = (function (){var statearr_356460 = state_356433;(statearr_356460[(13)] = inst_356187);
(statearr_356460[(19)] = inst_356186);
(statearr_356460[(18)] = inst_356185__$1);
return statearr_356460;
})();var statearr_356461_356587 = state_356433__$1;(statearr_356461_356587[(2)] = null);
(statearr_356461_356587[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (54)))
{var inst_356195 = (state_356433[(20)]);var state_356433__$1 = state_356433;var statearr_356462_356588 = state_356433__$1;(statearr_356462_356588[(2)] = inst_356195);
(statearr_356462_356588[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (15)))
{var inst_356195 = (state_356433[(20)]);var state_356433__$1 = state_356433;var statearr_356463_356589 = state_356433__$1;(statearr_356463_356589[(2)] = inst_356195);
(statearr_356463_356589[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (48)))
{var inst_356234 = (state_356433[(16)]);var inst_356347 = cljs.core._EQ_.call(null,"turn",inst_356234);var state_356433__$1 = state_356433;if(inst_356347)
{var statearr_356464_356590 = state_356433__$1;(statearr_356464_356590[(1)] = (50));
} else
{var statearr_356465_356591 = state_356433__$1;(statearr_356465_356591[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (50)))
{var inst_356195 = (state_356433[(20)]);var inst_356196 = (state_356433[(21)]);var inst_356349 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356350 = test.stock4.check_turn.call(null,inst_356349);var inst_356351 = cljs.core.take.call(null,inst_356196,inst_356350);var inst_356352 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"turn","turn",75759344),inst_356351);var inst_356353 = draw.call(null,inst_356352);var state_356433__$1 = state_356433;var statearr_356466_356592 = state_356433__$1;(statearr_356466_356592[(2)] = inst_356353);
(statearr_356466_356592[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (21)))
{var inst_356202 = (state_356433[(14)]);var state_356433__$1 = state_356433;var statearr_356467_356593 = state_356433__$1;(statearr_356467_356593[(2)] = inst_356202);
(statearr_356467_356593[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (31)))
{var inst_356419 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356468_356594 = state_356433__$1;(statearr_356468_356594[(2)] = inst_356419);
(statearr_356468_356594[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (32)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356275 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356276 = test.stock4.sma.call(null,inst_356235,inst_356275);var inst_356277 = cljs.core.take.call(null,(10),inst_356276);var inst_356278 = cljs.core.pr_str.call(null,inst_356277);var inst_356279 = console.log(inst_356278);var state_356433__$1 = (function (){var statearr_356469 = state_356433;(statearr_356469[(23)] = inst_356279);
return statearr_356469;
})();var statearr_356470_356595 = state_356433__$1;(statearr_356470_356595[(2)] = inst_356195);
(statearr_356470_356595[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (40)))
{var inst_356413 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356471_356596 = state_356433__$1;(statearr_356471_356596[(2)] = inst_356413);
(statearr_356471_356596[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (56)))
{var inst_356366 = (state_356433[(9)]);var inst_356367 = (state_356433[(12)]);var inst_356369 = (inst_356367 < inst_356366);var inst_356370 = inst_356369;var state_356433__$1 = state_356433;if(cljs.core.truth_(inst_356370))
{var statearr_356472_356597 = state_356433__$1;(statearr_356472_356597[(1)] = (58));
} else
{var statearr_356473_356598 = state_356433__$1;(statearr_356473_356598[(1)] = (59));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (33)))
{var inst_356234 = (state_356433[(16)]);var inst_356281 = cljs.core._EQ_.call(null,"ema",inst_356234);var state_356433__$1 = state_356433;if(inst_356281)
{var statearr_356474_356599 = state_356433__$1;(statearr_356474_356599[(1)] = (35));
} else
{var statearr_356475_356600 = state_356433__$1;(statearr_356475_356600[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (13)))
{var inst_356428 = (state_356433[(2)]);var inst_356187 = inst_356428;var state_356433__$1 = (function (){var statearr_356476 = state_356433;(statearr_356476[(13)] = inst_356187);
return statearr_356476;
})();var statearr_356477_356601 = state_356433__$1;(statearr_356477_356601[(2)] = null);
(statearr_356477_356601[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (22)))
{var inst_356233 = (state_356433[(24)]);var inst_356234 = (state_356433[(16)]);var inst_356233__$1 = (state_356433[(2)]);var inst_356234__$1 = cljs.core.get.call(null,inst_356233__$1,"cmd");var inst_356235 = cljs.core.get.call(null,inst_356233__$1,"params");var inst_356239 = cljs.core._EQ_.call(null,"length",inst_356234__$1);var state_356433__$1 = (function (){var statearr_356478 = state_356433;(statearr_356478[(22)] = inst_356235);
(statearr_356478[(24)] = inst_356233__$1);
(statearr_356478[(16)] = inst_356234__$1);
return statearr_356478;
})();if(inst_356239)
{var statearr_356479_356602 = state_356433__$1;(statearr_356479_356602[(1)] = (23));
} else
{var statearr_356480_356603 = state_356433__$1;(statearr_356480_356603[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (36)))
{var inst_356234 = (state_356433[(16)]);var inst_356289 = cljs.core._EQ_.call(null,"rsv",inst_356234);var state_356433__$1 = state_356433;if(inst_356289)
{var statearr_356481_356604 = state_356433__$1;(statearr_356481_356604[(1)] = (38));
} else
{var statearr_356482_356605 = state_356433__$1;(statearr_356482_356605[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (41)))
{var inst_356195 = (state_356433[(20)]);var inst_356307 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356308 = cljs.core.reverse.call(null,inst_356307);var inst_356309 = test.stock4.sar.call(null,inst_356308);var inst_356310 = cljs.core.count.call(null,inst_356307);var inst_356311 = cljs.core.take.call(null,inst_356310,inst_356309);var inst_356312 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"sar","sar",833088678),inst_356311);var inst_356313 = draw.call(null,inst_356312);var state_356433__$1 = state_356433;var statearr_356483_356606 = state_356433__$1;(statearr_356483_356606[(2)] = inst_356313);
(statearr_356483_356606[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (43)))
{var inst_356411 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356484_356607 = state_356433__$1;(statearr_356484_356607[(2)] = inst_356411);
(statearr_356484_356607[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (61)))
{var inst_356378 = (state_356433[(7)]);var inst_356380 = cljs.core.chunked_seq_QMARK_.call(null,inst_356378);var state_356433__$1 = state_356433;if(inst_356380)
{var statearr_356485_356608 = state_356433__$1;(statearr_356485_356608[(1)] = (64));
} else
{var statearr_356486_356609 = state_356433__$1;(statearr_356486_356609[(1)] = (65));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (29)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356260 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356261 = test.stock4.sd.call(null,inst_356235,inst_356260);var inst_356262 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356263 = test.stock4.z_score.call(null,inst_356235,inst_356262);var inst_356264 = cljs.core.take.call(null,(10),inst_356261);var inst_356265 = cljs.core.pr_str.call(null,inst_356264);var inst_356266 = console.log(inst_356265);var inst_356267 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356268 = cljs.core.count.call(null,inst_356267);var inst_356269 = cljs.core.take.call(null,inst_356268,inst_356261);var inst_356270 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_356269);var inst_356271 = draw.call(null,inst_356270);var state_356433__$1 = (function (){var statearr_356487 = state_356433;(statearr_356487[(25)] = inst_356263);
(statearr_356487[(26)] = inst_356266);
return statearr_356487;
})();var statearr_356488_356610 = state_356433__$1;(statearr_356488_356610[(2)] = inst_356271);
(statearr_356488_356610[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (44)))
{var inst_356203 = (state_356433[(27)]);var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356233 = (state_356433[(24)]);var inst_356187 = (state_356433[(13)]);var inst_356196 = (state_356433[(21)]);var inst_356234 = (state_356433[(16)]);var inst_356201 = (state_356433[(28)]);var inst_356202 = (state_356433[(14)]);var inst_356185 = (state_356433[(18)]);var inst_356335 = cljs.core.async.chan.call(null,(1));var inst_356336 = (function (){var cmd = inst_356234;var input = inst_356233;var ctx = inst_356195;var pred__356204 = cljs.core._EQ_;var expr__356205 = inst_356203;var vec__356197 = inst_356201;var expr__356237 = inst_356234;var v = inst_356202;var map__356189 = inst_356195;var pred__356236 = cljs.core._EQ_;var params = inst_356235;var map__356227 = inst_356233;var cnt = inst_356196;var ch = inst_356203;var c__6202__auto____$1 = inst_356335;var map__356176 = inst_356185;var G__356175 = inst_356187;return ((function (cmd,input,ctx,pred__356204,expr__356205,vec__356197,expr__356237,v,map__356189,pred__356236,params,map__356227,cnt,ch,c__6202__auto____$1,map__356176,G__356175,inst_356203,inst_356195,inst_356235,inst_356233,inst_356187,inst_356196,inst_356234,inst_356201,inst_356202,inst_356185,inst_356335,state_val_356434,c__6202__auto___356568,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,ctx,pred__356204,expr__356205,vec__356197,expr__356237,v,map__356189,pred__356236,params,map__356227,cnt,ch,c__6202__auto____$1,map__356176,G__356175,inst_356203,inst_356195,inst_356235,inst_356233,inst_356187,inst_356196,inst_356234,inst_356201,inst_356202,inst_356185,inst_356335,state_val_356434,c__6202__auto___356568,draw,onSystem,onView){
return (function (state_356333){var state_val_356334 = (state_356333[(1)]);if((state_val_356334 === (6)))
{var inst_356329 = (state_356333[(2)]);var state_356333__$1 = state_356333;var statearr_356489_356611 = state_356333__$1;(statearr_356489_356611[(2)] = inst_356329);
(statearr_356489_356611[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356334 === (5)))
{var inst_356331 = (state_356333[(2)]);var state_356333__$1 = state_356333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356333__$1,inst_356331);
} else
{if((state_val_356334 === (4)))
{var inst_356322 = (state_356333[(7)]);var inst_356326 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_356322];var inst_356327 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_356326,null));var state_356333__$1 = state_356333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356333__$1,(6),onSystem,inst_356327);
} else
{if((state_val_356334 === (3)))
{var inst_356321 = (state_356333[(8)]);var inst_356324 = alert(inst_356321);var state_356333__$1 = state_356333;var statearr_356490_356612 = state_356333__$1;(statearr_356490_356612[(2)] = inst_356324);
(statearr_356490_356612[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356334 === (2)))
{var inst_356321 = (state_356333[(8)]);var inst_356320 = (state_356333[(2)]);var inst_356321__$1 = cljs.core.nth.call(null,inst_356320,(0),null);var inst_356322 = cljs.core.nth.call(null,inst_356320,(1),null);var state_356333__$1 = (function (){var statearr_356491 = state_356333;(statearr_356491[(8)] = inst_356321__$1);
(statearr_356491[(7)] = inst_356322);
return statearr_356491;
})();if(cljs.core.truth_(inst_356321__$1))
{var statearr_356492_356613 = state_356333__$1;(statearr_356492_356613[(1)] = (3));
} else
{var statearr_356493_356614 = state_356333__$1;(statearr_356493_356614[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356334 === (1)))
{var inst_356318 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_356333__$1 = state_356333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356333__$1,(2),inst_356318);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,ctx,pred__356204,expr__356205,vec__356197,expr__356237,v,map__356189,pred__356236,params,map__356227,cnt,ch,c__6202__auto____$1,map__356176,G__356175,inst_356203,inst_356195,inst_356235,inst_356233,inst_356187,inst_356196,inst_356234,inst_356201,inst_356202,inst_356185,inst_356335,state_val_356434,c__6202__auto___356568,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,ctx,pred__356204,expr__356205,vec__356197,expr__356237,v,map__356189,pred__356236,params,map__356227,cnt,ch,c__6202__auto____$1,map__356176,G__356175,inst_356203,inst_356195,inst_356235,inst_356233,inst_356187,inst_356196,inst_356234,inst_356201,inst_356202,inst_356185,inst_356335,state_val_356434,c__6202__auto___356568,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_356497 = [null,null,null,null,null,null,null,null,null];(statearr_356497[(0)] = state_machine__6188__auto__);
(statearr_356497[(1)] = (1));
return statearr_356497;
});
var state_machine__6188__auto____1 = (function (state_356333){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_356333);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e356498){if((e356498 instanceof Object))
{var ex__6191__auto__ = e356498;var statearr_356499_356615 = state_356333;(statearr_356499_356615[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356333);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e356498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__356616 = state_356333;
state_356333 = G__356616;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_356333){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_356333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,ctx,pred__356204,expr__356205,vec__356197,expr__356237,v,map__356189,pred__356236,params,map__356227,cnt,ch,c__6202__auto____$1,map__356176,G__356175,inst_356203,inst_356195,inst_356235,inst_356233,inst_356187,inst_356196,inst_356234,inst_356201,inst_356202,inst_356185,inst_356335,state_val_356434,c__6202__auto___356568,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_356500 = f__6203__auto__.call(null);(statearr_356500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_356500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,ctx,pred__356204,expr__356205,vec__356197,expr__356237,v,map__356189,pred__356236,params,map__356227,cnt,ch,c__6202__auto____$1,map__356176,G__356175,inst_356203,inst_356195,inst_356235,inst_356233,inst_356187,inst_356196,inst_356234,inst_356201,inst_356202,inst_356185,inst_356335,state_val_356434,c__6202__auto___356568,draw,onSystem,onView))
})();var inst_356337 = cljs.core.async.impl.dispatch.run.call(null,inst_356336);var state_356433__$1 = (function (){var statearr_356501 = state_356433;(statearr_356501[(29)] = inst_356337);
return statearr_356501;
})();var statearr_356502_356617 = state_356433__$1;(statearr_356502_356617[(2)] = inst_356195);
(statearr_356502_356617[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (6)))
{var inst_356431 = (state_356433[(2)]);var state_356433__$1 = state_356433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356433__$1,inst_356431);
} else
{if((state_val_356434 === (28)))
{var inst_356421 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356503_356618 = state_356433__$1;(statearr_356503_356618[(2)] = inst_356421);
(statearr_356503_356618[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (64)))
{var inst_356378 = (state_356433[(7)]);var inst_356382 = cljs.core.chunk_first.call(null,inst_356378);var inst_356383 = cljs.core.chunk_rest.call(null,inst_356378);var inst_356384 = cljs.core.count.call(null,inst_356382);var inst_356364 = inst_356383;var inst_356365 = inst_356382;var inst_356366 = inst_356384;var inst_356367 = (0);var state_356433__$1 = (function (){var statearr_356504 = state_356433;(statearr_356504[(8)] = inst_356364);
(statearr_356504[(9)] = inst_356366);
(statearr_356504[(11)] = inst_356365);
(statearr_356504[(12)] = inst_356367);
return statearr_356504;
})();var statearr_356505_356619 = state_356433__$1;(statearr_356505_356619[(2)] = null);
(statearr_356505_356619[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (51)))
{var inst_356234 = (state_356433[(16)]);var inst_356355 = cljs.core._EQ_.call(null,"print",inst_356234);var state_356433__$1 = state_356433;if(inst_356355)
{var statearr_356506_356620 = state_356433__$1;(statearr_356506_356620[(1)] = (53));
} else
{var statearr_356507_356621 = state_356433__$1;(statearr_356507_356621[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (25)))
{var inst_356423 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356508_356622 = state_356433__$1;(statearr_356508_356622[(2)] = inst_356423);
(statearr_356508_356622[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (34)))
{var inst_356417 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356509_356623 = state_356433__$1;(statearr_356509_356623[(2)] = inst_356417);
(statearr_356509_356623[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (17)))
{var inst_356202 = (state_356433[(14)]);var inst_356228 = cljs.core.seq_QMARK_.call(null,inst_356202);var state_356433__$1 = state_356433;if(inst_356228)
{var statearr_356510_356624 = state_356433__$1;(statearr_356510_356624[(1)] = (20));
} else
{var statearr_356511_356625 = state_356433__$1;(statearr_356511_356625[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (3)))
{var inst_356179 = (state_356433[(17)]);var state_356433__$1 = state_356433;var statearr_356512_356626 = state_356433__$1;(statearr_356512_356626[(2)] = inst_356179);
(statearr_356512_356626[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (12)))
{var inst_356203 = (state_356433[(27)]);var inst_356225 = cljs.core._EQ_.call(null,onView,inst_356203);var state_356433__$1 = state_356433;if(inst_356225)
{var statearr_356513_356627 = state_356433__$1;(statearr_356513_356627[(1)] = (17));
} else
{var statearr_356514_356628 = state_356433__$1;(statearr_356514_356628[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (2)))
{var inst_356179 = (state_356433[(17)]);var inst_356182 = cljs.core.apply.call(null,cljs.core.hash_map,inst_356179);var state_356433__$1 = state_356433;var statearr_356515_356629 = state_356433__$1;(statearr_356515_356629[(2)] = inst_356182);
(statearr_356515_356629[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (66)))
{var inst_356393 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356516_356630 = state_356433__$1;(statearr_356516_356630[(2)] = inst_356393);
(statearr_356516_356630[(1)] = (63));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (23)))
{var inst_356195 = (state_356433[(20)]);var inst_356241 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356242 = test.stock4.check_length.call(null,inst_356241);var inst_356243 = cljs.core.take.call(null,(10),inst_356242);var inst_356244 = cljs.core.pr_str.call(null,inst_356243);var inst_356245 = console.log(inst_356244);var state_356433__$1 = (function (){var statearr_356517 = state_356433;(statearr_356517[(30)] = inst_356245);
return statearr_356517;
})();var statearr_356518_356631 = state_356433__$1;(statearr_356518_356631[(2)] = inst_356195);
(statearr_356518_356631[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (47)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356196 = (state_356433[(21)]);var inst_356341 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356342 = test.stock4.average.call(null,inst_356235,inst_356341);var inst_356343 = cljs.core.take.call(null,inst_356196,inst_356342);var inst_356344 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_356343);var inst_356345 = draw.call(null,inst_356344);var state_356433__$1 = state_356433;var statearr_356519_356632 = state_356433__$1;(statearr_356519_356632[(2)] = inst_356345);
(statearr_356519_356632[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (35)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356283 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356284 = test.stock4.ema.call(null,inst_356235,(0),inst_356283);var inst_356285 = cljs.core.take.call(null,(10),inst_356284);var inst_356286 = cljs.core.pr_str.call(null,inst_356285);var inst_356287 = console.log(inst_356286);var state_356433__$1 = (function (){var statearr_356520 = state_356433;(statearr_356520[(31)] = inst_356287);
return statearr_356520;
})();var statearr_356521_356633 = state_356433__$1;(statearr_356521_356633[(2)] = inst_356195);
(statearr_356521_356633[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (19)))
{var inst_356426 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356522_356634 = state_356433__$1;(statearr_356522_356634[(2)] = inst_356426);
(statearr_356522_356634[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (57)))
{var inst_356195 = (state_356433[(20)]);var inst_356400 = (state_356433[(2)]);var state_356433__$1 = (function (){var statearr_356523 = state_356433;(statearr_356523[(32)] = inst_356400);
return statearr_356523;
})();var statearr_356524_356635 = state_356433__$1;(statearr_356524_356635[(2)] = inst_356195);
(statearr_356524_356635[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (11)))
{var inst_356202 = (state_356433[(14)]);var inst_356210 = cljs.core.nth.call(null,inst_356202,(0),null);var inst_356211 = cljs.core.nth.call(null,inst_356202,(1),null);var inst_356215 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_356210);var state_356433__$1 = (function (){var statearr_356525 = state_356433;(statearr_356525[(33)] = inst_356211);
return statearr_356525;
})();if(inst_356215)
{var statearr_356526_356636 = state_356433__$1;(statearr_356526_356636[(1)] = (14));
} else
{var statearr_356527_356637 = state_356433__$1;(statearr_356527_356637[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (9)))
{var inst_356195 = (state_356433[(20)]);var inst_356195__$1 = (state_356433[(2)]);var inst_356196 = cljs.core.get.call(null,inst_356195__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_356198 = [onSystem,onView];var inst_356199 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_356198,null));var state_356433__$1 = (function (){var statearr_356528 = state_356433;(statearr_356528[(20)] = inst_356195__$1);
(statearr_356528[(21)] = inst_356196);
return statearr_356528;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_356433__$1,(10),inst_356199);
} else
{if((state_val_356434 === (5)))
{var inst_356187 = (state_356433[(13)]);var inst_356190 = cljs.core.seq_QMARK_.call(null,inst_356187);var state_356433__$1 = state_356433;if(inst_356190)
{var statearr_356529_356638 = state_356433__$1;(statearr_356529_356638[(1)] = (7));
} else
{var statearr_356530_356639 = state_356433__$1;(statearr_356530_356639[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (14)))
{var inst_356195 = (state_356433[(20)]);var inst_356211 = (state_356433[(33)]);var inst_356196 = (state_356433[(21)]);var inst_356217 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"info","info",-317069002),inst_356211);var inst_356218 = cljs.core.take.call(null,inst_356196,inst_356211);var inst_356219 = cljs.core.assoc.call(null,inst_356217,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_356218);var inst_356220 = draw.call(null,inst_356219);var state_356433__$1 = state_356433;var statearr_356531_356640 = state_356433__$1;(statearr_356531_356640[(2)] = inst_356220);
(statearr_356531_356640[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (45)))
{var inst_356234 = (state_356433[(16)]);var inst_356339 = cljs.core._EQ_.call(null,"avg",inst_356234);var state_356433__$1 = state_356433;if(inst_356339)
{var statearr_356532_356641 = state_356433__$1;(statearr_356532_356641[(1)] = (47));
} else
{var statearr_356533_356642 = state_356433__$1;(statearr_356533_356642[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (53)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356361 = cljs.core.keyword.call(null,inst_356235);var inst_356362 = inst_356361.call(null,inst_356195);var inst_356363 = cljs.core.seq.call(null,inst_356362);var inst_356364 = inst_356363;var inst_356365 = null;var inst_356366 = (0);var inst_356367 = (0);var state_356433__$1 = (function (){var statearr_356534 = state_356433;(statearr_356534[(8)] = inst_356364);
(statearr_356534[(9)] = inst_356366);
(statearr_356534[(11)] = inst_356365);
(statearr_356534[(12)] = inst_356367);
return statearr_356534;
})();var statearr_356535_356643 = state_356433__$1;(statearr_356535_356643[(2)] = null);
(statearr_356535_356643[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (26)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356249 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356250 = cljs.core.reverse.call(null,inst_356249);var inst_356251 = test.stock4.yu.call(null,0.001,inst_356235,inst_356250);var inst_356252 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356253 = cljs.core.count.call(null,inst_356252);var inst_356254 = cljs.core.take.call(null,inst_356253,inst_356251);var inst_356255 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"yu","yu",979062608),inst_356254);var inst_356256 = draw.call(null,inst_356255);var state_356433__$1 = state_356433;var statearr_356536_356644 = state_356433__$1;(statearr_356536_356644[(2)] = inst_356256);
(statearr_356536_356644[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (16)))
{var inst_356223 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356537_356645 = state_356433__$1;(statearr_356537_356645[(2)] = inst_356223);
(statearr_356537_356645[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (38)))
{var inst_356195 = (state_356433[(20)]);var inst_356235 = (state_356433[(22)]);var inst_356291 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356292 = cljs.core.count.call(null,inst_356291);var inst_356293 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_356195);var inst_356294 = test.stock4.rsv.call(null,inst_356293);var inst_356295 = test.stock4.k.call(null,inst_356235,inst_356294);var inst_356296 = cljs.core.take.call(null,inst_356292,inst_356295);var inst_356297 = ((3) * inst_356235);var inst_356298 = test.stock4.k.call(null,inst_356297,inst_356294);var inst_356299 = cljs.core.take.call(null,inst_356292,inst_356298);var inst_356300 = [null,inst_356296,inst_356299];var inst_356301 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_356300,null));var inst_356302 = cljs.core.assoc.call(null,inst_356195,new cljs.core.Keyword(null,"kd","kd",771448701),inst_356301);var inst_356303 = draw.call(null,inst_356302);var state_356433__$1 = state_356433;var statearr_356538_356646 = state_356433__$1;(statearr_356538_356646[(2)] = inst_356303);
(statearr_356538_356646[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (30)))
{var inst_356234 = (state_356433[(16)]);var inst_356273 = cljs.core._EQ_.call(null,"sma",inst_356234);var state_356433__$1 = state_356433;if(inst_356273)
{var statearr_356539_356647 = state_356433__$1;(statearr_356539_356647[(1)] = (32));
} else
{var statearr_356540_356648 = state_356433__$1;(statearr_356540_356648[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (10)))
{var inst_356203 = (state_356433[(27)]);var inst_356201 = (state_356433[(28)]);var inst_356201__$1 = (state_356433[(2)]);var inst_356202 = cljs.core.nth.call(null,inst_356201__$1,(0),null);var inst_356203__$1 = cljs.core.nth.call(null,inst_356201__$1,(1),null);var inst_356207 = cljs.core._EQ_.call(null,onSystem,inst_356203__$1);var state_356433__$1 = (function (){var statearr_356541 = state_356433;(statearr_356541[(27)] = inst_356203__$1);
(statearr_356541[(28)] = inst_356201__$1);
(statearr_356541[(14)] = inst_356202);
return statearr_356541;
})();if(inst_356207)
{var statearr_356542_356649 = state_356433__$1;(statearr_356542_356649[(1)] = (11));
} else
{var statearr_356543_356650 = state_356433__$1;(statearr_356543_356650[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (18)))
{var inst_356195 = (state_356433[(20)]);var state_356433__$1 = state_356433;var statearr_356544_356651 = state_356433__$1;(statearr_356544_356651[(2)] = inst_356195);
(statearr_356544_356651[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (52)))
{var inst_356405 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356545_356652 = state_356433__$1;(statearr_356545_356652[(2)] = inst_356405);
(statearr_356545_356652[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (42)))
{var inst_356234 = (state_356433[(16)]);var inst_356315 = cljs.core._EQ_.call(null,"stock",inst_356234);var state_356433__$1 = state_356433;if(inst_356315)
{var statearr_356546_356653 = state_356433__$1;(statearr_356546_356653[(1)] = (44));
} else
{var statearr_356547_356654 = state_356433__$1;(statearr_356547_356654[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (37)))
{var inst_356415 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356548_356655 = state_356433__$1;(statearr_356548_356655[(2)] = inst_356415);
(statearr_356548_356655[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (63)))
{var inst_356396 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356549_356656 = state_356433__$1;(statearr_356549_356656[(2)] = inst_356396);
(statearr_356549_356656[(1)] = (60));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (8)))
{var inst_356187 = (state_356433[(13)]);var state_356433__$1 = state_356433;var statearr_356550_356657 = state_356433__$1;(statearr_356550_356657[(2)] = inst_356187);
(statearr_356550_356657[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_356434 === (49)))
{var inst_356407 = (state_356433[(2)]);var state_356433__$1 = state_356433;var statearr_356551_356658 = state_356433__$1;(statearr_356551_356658[(2)] = inst_356407);
(statearr_356551_356658[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___356568,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___356568,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_356555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_356555[(0)] = state_machine__6188__auto__);
(statearr_356555[(1)] = (1));
return statearr_356555;
});
var state_machine__6188__auto____1 = (function (state_356433){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_356433);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e356556){if((e356556 instanceof Object))
{var ex__6191__auto__ = e356556;var statearr_356557_356659 = state_356433;(statearr_356557_356659[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e356556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__356660 = state_356433;
state_356433 = G__356660;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_356433){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_356433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___356568,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_356558 = f__6203__auto__.call(null);(statearr_356558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___356568);
return statearr_356558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___356568,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
