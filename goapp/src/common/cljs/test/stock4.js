// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__24196_SHARP_){return cljs.core.nth.call(null,p1__24196_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__24197_SHARP_){return cljs.core.nth.call(null,p1__24197_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__24205 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24205,(0),null);var min_v = cljs.core.nth.call(null,vec__24205,(1),null);var offset_v = cljs.core.nth.call(null,vec__24205,(2),null);var offset_x = cljs.core.nth.call(null,vec__24205,(3),null);var pos_y = cljs.core.nth.call(null,vec__24205,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__24206_24212 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24205,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__24216__delegate = function (args){return args;
};
var G__24216 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24216__delegate.call(this,args);};
G__24216.cljs$lang$maxFixedArity = 0;
G__24216.cljs$lang$applyTo = (function (arglist__24217){
var args = cljs.core.seq(arglist__24217);
return G__24216__delegate(args);
});
G__24216.cljs$core$IFn$_invoke$arity$variadic = G__24216__delegate;
return G__24216;
})()
;})(vec__24205,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__24207_24213 = null;var count__24208_24214 = (0);var i__24209_24215 = (0);while(true){
if((i__24209_24215 < count__24208_24214))
{var vec__24210_24218 = cljs.core._nth.call(null,chunk__24207_24213,i__24209_24215);var idx_24219 = cljs.core.nth.call(null,vec__24210_24218,(0),null);var prev_24220 = cljs.core.nth.call(null,vec__24210_24218,(1),null);var curr_24221 = cljs.core.nth.call(null,vec__24210_24218,(2),null);if((typeof prev_24220 === 'number') && (typeof curr_24221 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_24219 * offset_x),(((1) - prev_24220) * h));
ctx.lineTo(((idx_24219 + (1)) * offset_x),(((1) - curr_24221) * h));
ctx.stroke();
} else
{}
{
var G__24222 = seq__24206_24212;
var G__24223 = chunk__24207_24213;
var G__24224 = count__24208_24214;
var G__24225 = (i__24209_24215 + (1));
seq__24206_24212 = G__24222;
chunk__24207_24213 = G__24223;
count__24208_24214 = G__24224;
i__24209_24215 = G__24225;
continue;
}
} else
{var temp__4126__auto___24226 = cljs.core.seq.call(null,seq__24206_24212);if(temp__4126__auto___24226)
{var seq__24206_24227__$1 = temp__4126__auto___24226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24206_24227__$1))
{var c__4307__auto___24228 = cljs.core.chunk_first.call(null,seq__24206_24227__$1);{
var G__24229 = cljs.core.chunk_rest.call(null,seq__24206_24227__$1);
var G__24230 = c__4307__auto___24228;
var G__24231 = cljs.core.count.call(null,c__4307__auto___24228);
var G__24232 = (0);
seq__24206_24212 = G__24229;
chunk__24207_24213 = G__24230;
count__24208_24214 = G__24231;
i__24209_24215 = G__24232;
continue;
}
} else
{var vec__24211_24233 = cljs.core.first.call(null,seq__24206_24227__$1);var idx_24234 = cljs.core.nth.call(null,vec__24211_24233,(0),null);var prev_24235 = cljs.core.nth.call(null,vec__24211_24233,(1),null);var curr_24236 = cljs.core.nth.call(null,vec__24211_24233,(2),null);if((typeof prev_24235 === 'number') && (typeof curr_24236 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_24234 * offset_x),(((1) - prev_24235) * h));
ctx.lineTo(((idx_24234 + (1)) * offset_x),(((1) - curr_24236) * h));
ctx.stroke();
} else
{}
{
var G__24237 = cljs.core.next.call(null,seq__24206_24227__$1);
var G__24238 = null;
var G__24239 = (0);
var G__24240 = (0);
seq__24206_24212 = G__24237;
chunk__24207_24213 = G__24238;
count__24208_24214 = G__24239;
i__24209_24215 = G__24240;
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
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__24252 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24252,(0),null);var min_v = cljs.core.nth.call(null,vec__24252,(1),null);var offset_v = cljs.core.nth.call(null,vec__24252,(2),null);var offset_x = cljs.core.nth.call(null,vec__24252,(3),null);var pos_y = cljs.core.nth.call(null,vec__24252,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__24253_24263 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24252,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__24267__delegate = function (args){return args;
};
var G__24267 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24267__delegate.call(this,args);};
G__24267.cljs$lang$maxFixedArity = 0;
G__24267.cljs$lang$applyTo = (function (arglist__24268){
var args = cljs.core.seq(arglist__24268);
return G__24267__delegate(args);
});
G__24267.cljs$core$IFn$_invoke$arity$variadic = G__24267__delegate;
return G__24267;
})()
;})(vec__24252,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__24254_24264 = null;var count__24255_24265 = (0);var i__24256_24266 = (0);while(true){
if((i__24256_24266 < count__24255_24265))
{var vec__24257_24269 = cljs.core._nth.call(null,chunk__24254_24264,i__24256_24266);var idx_24270 = cljs.core.nth.call(null,vec__24257_24269,(0),null);var vec__24258_24271 = cljs.core.nth.call(null,vec__24257_24269,(1),null);var avg_24272 = cljs.core.nth.call(null,vec__24258_24271,(0),null);var sd_v_24273 = cljs.core.nth.call(null,vec__24258_24271,(1),null);var vec__24259_24274 = cljs.core.nth.call(null,vec__24257_24269,(2),null);var __24275 = cljs.core.nth.call(null,vec__24259_24274,(0),null);var __24276__$1 = cljs.core.nth.call(null,vec__24259_24274,(1),null);var __24277__$2 = cljs.core.nth.call(null,vec__24259_24274,(2),null);var __24278__$3 = cljs.core.nth.call(null,vec__24259_24274,(3),null);var close_24279 = cljs.core.nth.call(null,vec__24259_24274,(4),null);var __24280__$4 = cljs.core.nth.call(null,vec__24259_24274,(5),null);(ctx["strokeStyle"] = (((avg_24272 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_24270 * offset_x),pos_y.call(null,(avg_24272 + close_24279)));
ctx.lineTo(((idx_24270 + (1)) * offset_x),pos_y.call(null,(avg_24272 + close_24279)));
ctx.stroke();
ctx.moveTo((idx_24270 * offset_x),pos_y.call(null,(((avg_24272 + close_24279) + sd_v_24273) + sd_v_24273)));
ctx.lineTo(((idx_24270 + (1)) * offset_x),pos_y.call(null,(((avg_24272 + close_24279) + sd_v_24273) + sd_v_24273)));
ctx.stroke();
ctx.moveTo((idx_24270 * offset_x),pos_y.call(null,(((avg_24272 + close_24279) - sd_v_24273) - sd_v_24273)));
ctx.lineTo(((idx_24270 + (1)) * offset_x),pos_y.call(null,(((avg_24272 + close_24279) - sd_v_24273) - sd_v_24273)));
ctx.stroke();
{
var G__24281 = seq__24253_24263;
var G__24282 = chunk__24254_24264;
var G__24283 = count__24255_24265;
var G__24284 = (i__24256_24266 + (1));
seq__24253_24263 = G__24281;
chunk__24254_24264 = G__24282;
count__24255_24265 = G__24283;
i__24256_24266 = G__24284;
continue;
}
} else
{var temp__4126__auto___24285 = cljs.core.seq.call(null,seq__24253_24263);if(temp__4126__auto___24285)
{var seq__24253_24286__$1 = temp__4126__auto___24285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24253_24286__$1))
{var c__4307__auto___24287 = cljs.core.chunk_first.call(null,seq__24253_24286__$1);{
var G__24288 = cljs.core.chunk_rest.call(null,seq__24253_24286__$1);
var G__24289 = c__4307__auto___24287;
var G__24290 = cljs.core.count.call(null,c__4307__auto___24287);
var G__24291 = (0);
seq__24253_24263 = G__24288;
chunk__24254_24264 = G__24289;
count__24255_24265 = G__24290;
i__24256_24266 = G__24291;
continue;
}
} else
{var vec__24260_24292 = cljs.core.first.call(null,seq__24253_24286__$1);var idx_24293 = cljs.core.nth.call(null,vec__24260_24292,(0),null);var vec__24261_24294 = cljs.core.nth.call(null,vec__24260_24292,(1),null);var avg_24295 = cljs.core.nth.call(null,vec__24261_24294,(0),null);var sd_v_24296 = cljs.core.nth.call(null,vec__24261_24294,(1),null);var vec__24262_24297 = cljs.core.nth.call(null,vec__24260_24292,(2),null);var __24298 = cljs.core.nth.call(null,vec__24262_24297,(0),null);var __24299__$1 = cljs.core.nth.call(null,vec__24262_24297,(1),null);var __24300__$2 = cljs.core.nth.call(null,vec__24262_24297,(2),null);var __24301__$3 = cljs.core.nth.call(null,vec__24262_24297,(3),null);var close_24302 = cljs.core.nth.call(null,vec__24262_24297,(4),null);var __24303__$4 = cljs.core.nth.call(null,vec__24262_24297,(5),null);(ctx["strokeStyle"] = (((avg_24295 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_24293 * offset_x),pos_y.call(null,(avg_24295 + close_24302)));
ctx.lineTo(((idx_24293 + (1)) * offset_x),pos_y.call(null,(avg_24295 + close_24302)));
ctx.stroke();
ctx.moveTo((idx_24293 * offset_x),pos_y.call(null,(((avg_24295 + close_24302) + sd_v_24296) + sd_v_24296)));
ctx.lineTo(((idx_24293 + (1)) * offset_x),pos_y.call(null,(((avg_24295 + close_24302) + sd_v_24296) + sd_v_24296)));
ctx.stroke();
ctx.moveTo((idx_24293 * offset_x),pos_y.call(null,(((avg_24295 + close_24302) - sd_v_24296) - sd_v_24296)));
ctx.lineTo(((idx_24293 + (1)) * offset_x),pos_y.call(null,(((avg_24295 + close_24302) - sd_v_24296) - sd_v_24296)));
ctx.stroke();
{
var G__24304 = cljs.core.next.call(null,seq__24253_24286__$1);
var G__24305 = null;
var G__24306 = (0);
var G__24307 = (0);
seq__24253_24263 = G__24304;
chunk__24254_24264 = G__24305;
count__24255_24265 = G__24306;
i__24256_24266 = G__24307;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__24315 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24315,(0),null);var min_v = cljs.core.nth.call(null,vec__24315,(1),null);var offset_v = cljs.core.nth.call(null,vec__24315,(2),null);var offset_x = cljs.core.nth.call(null,vec__24315,(3),null);var pos_y = cljs.core.nth.call(null,vec__24315,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__24316_24322 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24315,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__24326__delegate = function (args){return args;
};
var G__24326 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24326__delegate.call(this,args);};
G__24326.cljs$lang$maxFixedArity = 0;
G__24326.cljs$lang$applyTo = (function (arglist__24327){
var args = cljs.core.seq(arglist__24327);
return G__24326__delegate(args);
});
G__24326.cljs$core$IFn$_invoke$arity$variadic = G__24326__delegate;
return G__24326;
})()
;})(vec__24315,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__24317_24323 = null;var count__24318_24324 = (0);var i__24319_24325 = (0);while(true){
if((i__24319_24325 < count__24318_24324))
{var vec__24320_24328 = cljs.core._nth.call(null,chunk__24317_24323,i__24319_24325);var idx_24329 = cljs.core.nth.call(null,vec__24320_24328,(0),null);var prev_24330 = cljs.core.nth.call(null,vec__24320_24328,(1),null);var curr_24331 = cljs.core.nth.call(null,vec__24320_24328,(2),null);if((typeof prev_24330 === 'number') && (typeof curr_24331 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_24329 * offset_x),pos_y.call(null,prev_24330));
ctx.lineTo(((idx_24329 + (1)) * offset_x),pos_y.call(null,curr_24331));
ctx.stroke();
} else
{}
{
var G__24332 = seq__24316_24322;
var G__24333 = chunk__24317_24323;
var G__24334 = count__24318_24324;
var G__24335 = (i__24319_24325 + (1));
seq__24316_24322 = G__24332;
chunk__24317_24323 = G__24333;
count__24318_24324 = G__24334;
i__24319_24325 = G__24335;
continue;
}
} else
{var temp__4126__auto___24336 = cljs.core.seq.call(null,seq__24316_24322);if(temp__4126__auto___24336)
{var seq__24316_24337__$1 = temp__4126__auto___24336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24316_24337__$1))
{var c__4307__auto___24338 = cljs.core.chunk_first.call(null,seq__24316_24337__$1);{
var G__24339 = cljs.core.chunk_rest.call(null,seq__24316_24337__$1);
var G__24340 = c__4307__auto___24338;
var G__24341 = cljs.core.count.call(null,c__4307__auto___24338);
var G__24342 = (0);
seq__24316_24322 = G__24339;
chunk__24317_24323 = G__24340;
count__24318_24324 = G__24341;
i__24319_24325 = G__24342;
continue;
}
} else
{var vec__24321_24343 = cljs.core.first.call(null,seq__24316_24337__$1);var idx_24344 = cljs.core.nth.call(null,vec__24321_24343,(0),null);var prev_24345 = cljs.core.nth.call(null,vec__24321_24343,(1),null);var curr_24346 = cljs.core.nth.call(null,vec__24321_24343,(2),null);if((typeof prev_24345 === 'number') && (typeof curr_24346 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_24344 * offset_x),pos_y.call(null,prev_24345));
ctx.lineTo(((idx_24344 + (1)) * offset_x),pos_y.call(null,curr_24346));
ctx.stroke();
} else
{}
{
var G__24347 = cljs.core.next.call(null,seq__24316_24337__$1);
var G__24348 = null;
var G__24349 = (0);
var G__24350 = (0);
seq__24316_24322 = G__24347;
chunk__24317_24323 = G__24348;
count__24318_24324 = G__24349;
i__24319_24325 = G__24350;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__24351){var vec__24366 = p__24351;var rsv = cljs.core.nth.call(null,vec__24366,(0),null);var k = cljs.core.nth.call(null,vec__24366,(1),null);var d = cljs.core.nth.call(null,vec__24366,(2),null);var kd = vec__24366;var vec__24367 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24367,(0),null);var min_v = cljs.core.nth.call(null,vec__24367,(1),null);var offset_v = cljs.core.nth.call(null,vec__24367,(2),null);var offset_x = cljs.core.nth.call(null,vec__24367,(3),null);var pos_y = cljs.core.nth.call(null,vec__24367,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__24368_24380 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24367,max_v,min_v,offset_v,offset_x,pos_y,vec__24366,rsv,k,d,kd){
return (function() { 
var G__24384__delegate = function (args){return args;
};
var G__24384 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24384__delegate.call(this,args);};
G__24384.cljs$lang$maxFixedArity = 0;
G__24384.cljs$lang$applyTo = (function (arglist__24385){
var args = cljs.core.seq(arglist__24385);
return G__24384__delegate(args);
});
G__24384.cljs$core$IFn$_invoke$arity$variadic = G__24384__delegate;
return G__24384;
})()
;})(vec__24367,max_v,min_v,offset_v,offset_x,pos_y,vec__24366,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__24369_24381 = null;var count__24370_24382 = (0);var i__24371_24383 = (0);while(true){
if((i__24371_24383 < count__24370_24382))
{var vec__24372_24386 = cljs.core._nth.call(null,chunk__24369_24381,i__24371_24383);var idx_24387 = cljs.core.nth.call(null,vec__24372_24386,(0),null);var prev_24388 = cljs.core.nth.call(null,vec__24372_24386,(1),null);var curr_24389 = cljs.core.nth.call(null,vec__24372_24386,(2),null);ctx.beginPath();
ctx.moveTo((idx_24387 * offset_x),(((1) - (prev_24388 / (100))) * h));
ctx.lineTo(((idx_24387 + (1)) * offset_x),(((1) - (curr_24389 / (100))) * h));
ctx.stroke();
{
var G__24390 = seq__24368_24380;
var G__24391 = chunk__24369_24381;
var G__24392 = count__24370_24382;
var G__24393 = (i__24371_24383 + (1));
seq__24368_24380 = G__24390;
chunk__24369_24381 = G__24391;
count__24370_24382 = G__24392;
i__24371_24383 = G__24393;
continue;
}
} else
{var temp__4126__auto___24394 = cljs.core.seq.call(null,seq__24368_24380);if(temp__4126__auto___24394)
{var seq__24368_24395__$1 = temp__4126__auto___24394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24368_24395__$1))
{var c__4307__auto___24396 = cljs.core.chunk_first.call(null,seq__24368_24395__$1);{
var G__24397 = cljs.core.chunk_rest.call(null,seq__24368_24395__$1);
var G__24398 = c__4307__auto___24396;
var G__24399 = cljs.core.count.call(null,c__4307__auto___24396);
var G__24400 = (0);
seq__24368_24380 = G__24397;
chunk__24369_24381 = G__24398;
count__24370_24382 = G__24399;
i__24371_24383 = G__24400;
continue;
}
} else
{var vec__24373_24401 = cljs.core.first.call(null,seq__24368_24395__$1);var idx_24402 = cljs.core.nth.call(null,vec__24373_24401,(0),null);var prev_24403 = cljs.core.nth.call(null,vec__24373_24401,(1),null);var curr_24404 = cljs.core.nth.call(null,vec__24373_24401,(2),null);ctx.beginPath();
ctx.moveTo((idx_24402 * offset_x),(((1) - (prev_24403 / (100))) * h));
ctx.lineTo(((idx_24402 + (1)) * offset_x),(((1) - (curr_24404 / (100))) * h));
ctx.stroke();
{
var G__24405 = cljs.core.next.call(null,seq__24368_24395__$1);
var G__24406 = null;
var G__24407 = (0);
var G__24408 = (0);
seq__24368_24380 = G__24405;
chunk__24369_24381 = G__24406;
count__24370_24382 = G__24407;
i__24371_24383 = G__24408;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__24374_24409 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24367,max_v,min_v,offset_v,offset_x,pos_y,vec__24366,rsv,k,d,kd){
return (function() { 
var G__24413__delegate = function (args){return args;
};
var G__24413 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24413__delegate.call(this,args);};
G__24413.cljs$lang$maxFixedArity = 0;
G__24413.cljs$lang$applyTo = (function (arglist__24414){
var args = cljs.core.seq(arglist__24414);
return G__24413__delegate(args);
});
G__24413.cljs$core$IFn$_invoke$arity$variadic = G__24413__delegate;
return G__24413;
})()
;})(vec__24367,max_v,min_v,offset_v,offset_x,pos_y,vec__24366,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__24375_24410 = null;var count__24376_24411 = (0);var i__24377_24412 = (0);while(true){
if((i__24377_24412 < count__24376_24411))
{var vec__24378_24415 = cljs.core._nth.call(null,chunk__24375_24410,i__24377_24412);var idx_24416 = cljs.core.nth.call(null,vec__24378_24415,(0),null);var prev_24417 = cljs.core.nth.call(null,vec__24378_24415,(1),null);var curr_24418 = cljs.core.nth.call(null,vec__24378_24415,(2),null);ctx.beginPath();
ctx.moveTo((idx_24416 * offset_x),(((1) - (prev_24417 / (100))) * h));
ctx.lineTo(((idx_24416 + (1)) * offset_x),(((1) - (curr_24418 / (100))) * h));
ctx.stroke();
{
var G__24419 = seq__24374_24409;
var G__24420 = chunk__24375_24410;
var G__24421 = count__24376_24411;
var G__24422 = (i__24377_24412 + (1));
seq__24374_24409 = G__24419;
chunk__24375_24410 = G__24420;
count__24376_24411 = G__24421;
i__24377_24412 = G__24422;
continue;
}
} else
{var temp__4126__auto___24423 = cljs.core.seq.call(null,seq__24374_24409);if(temp__4126__auto___24423)
{var seq__24374_24424__$1 = temp__4126__auto___24423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24374_24424__$1))
{var c__4307__auto___24425 = cljs.core.chunk_first.call(null,seq__24374_24424__$1);{
var G__24426 = cljs.core.chunk_rest.call(null,seq__24374_24424__$1);
var G__24427 = c__4307__auto___24425;
var G__24428 = cljs.core.count.call(null,c__4307__auto___24425);
var G__24429 = (0);
seq__24374_24409 = G__24426;
chunk__24375_24410 = G__24427;
count__24376_24411 = G__24428;
i__24377_24412 = G__24429;
continue;
}
} else
{var vec__24379_24430 = cljs.core.first.call(null,seq__24374_24424__$1);var idx_24431 = cljs.core.nth.call(null,vec__24379_24430,(0),null);var prev_24432 = cljs.core.nth.call(null,vec__24379_24430,(1),null);var curr_24433 = cljs.core.nth.call(null,vec__24379_24430,(2),null);ctx.beginPath();
ctx.moveTo((idx_24431 * offset_x),(((1) - (prev_24432 / (100))) * h));
ctx.lineTo(((idx_24431 + (1)) * offset_x),(((1) - (curr_24433 / (100))) * h));
ctx.stroke();
{
var G__24434 = cljs.core.next.call(null,seq__24374_24424__$1);
var G__24435 = null;
var G__24436 = (0);
var G__24437 = (0);
seq__24374_24409 = G__24434;
chunk__24375_24410 = G__24435;
count__24376_24411 = G__24436;
i__24377_24412 = G__24437;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__24448 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24448,(0),null);var min_v = cljs.core.nth.call(null,vec__24448,(1),null);var offset_v = cljs.core.nth.call(null,vec__24448,(2),null);var offset_x = cljs.core.nth.call(null,vec__24448,(3),null);var pos_y = cljs.core.nth.call(null,vec__24448,(4),null);(ctx["fillStyle"] = "black");
var seq__24449 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24448,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24457__delegate = function (args){return args;
};
var G__24457 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24457__delegate.call(this,args);};
G__24457.cljs$lang$maxFixedArity = 0;
G__24457.cljs$lang$applyTo = (function (arglist__24458){
var args = cljs.core.seq(arglist__24458);
return G__24457__delegate(args);
});
G__24457.cljs$core$IFn$_invoke$arity$variadic = G__24457__delegate;
return G__24457;
})()
;})(vec__24448,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__24450 = null;var count__24451 = (0);var i__24452 = (0);while(true){
if((i__24452 < count__24451))
{var vec__24453 = cljs.core._nth.call(null,chunk__24450,i__24452);var idx = cljs.core.nth.call(null,vec__24453,(0),null);var vec__24454 = cljs.core.nth.call(null,vec__24453,(1),null);var date = cljs.core.nth.call(null,vec__24454,(0),null);var _ = cljs.core.nthnext.call(null,vec__24454,(1));var line = vec__24454;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__24449,chunk__24450,count__24451,i__24452,vec__24453,idx,vec__24454,date,_,line,vec__24448,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__24438_SHARP_){return cljs.core._EQ_.call(null,date,p1__24438_SHARP_);
});})(seq__24449,chunk__24450,count__24451,i__24452,vec__24453,idx,vec__24454,date,_,line,vec__24448,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__24459 = seq__24449;
var G__24460 = chunk__24450;
var G__24461 = count__24451;
var G__24462 = (i__24452 + (1));
seq__24449 = G__24459;
chunk__24450 = G__24460;
count__24451 = G__24461;
i__24452 = G__24462;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24449);if(temp__4126__auto__)
{var seq__24449__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24449__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24449__$1);{
var G__24463 = cljs.core.chunk_rest.call(null,seq__24449__$1);
var G__24464 = c__4307__auto__;
var G__24465 = cljs.core.count.call(null,c__4307__auto__);
var G__24466 = (0);
seq__24449 = G__24463;
chunk__24450 = G__24464;
count__24451 = G__24465;
i__24452 = G__24466;
continue;
}
} else
{var vec__24455 = cljs.core.first.call(null,seq__24449__$1);var idx = cljs.core.nth.call(null,vec__24455,(0),null);var vec__24456 = cljs.core.nth.call(null,vec__24455,(1),null);var date = cljs.core.nth.call(null,vec__24456,(0),null);var _ = cljs.core.nthnext.call(null,vec__24456,(1));var line = vec__24456;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__24449,chunk__24450,count__24451,i__24452,vec__24455,idx,vec__24456,date,_,line,seq__24449__$1,temp__4126__auto__,vec__24448,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__24438_SHARP_){return cljs.core._EQ_.call(null,date,p1__24438_SHARP_);
});})(seq__24449,chunk__24450,count__24451,i__24452,vec__24455,idx,vec__24456,date,_,line,seq__24449__$1,temp__4126__auto__,vec__24448,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__24467 = cljs.core.next.call(null,seq__24449__$1);
var G__24468 = null;
var G__24469 = (0);
var G__24470 = (0);
seq__24449 = G__24467;
chunk__24450 = G__24468;
count__24451 = G__24469;
i__24452 = G__24470;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__24480 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24480,(0),null);var min_v = cljs.core.nth.call(null,vec__24480,(1),null);var offset_v = cljs.core.nth.call(null,vec__24480,(2),null);var offset_x = cljs.core.nth.call(null,vec__24480,(3),null);var pos_y = cljs.core.nth.call(null,vec__24480,(4),null);var seq__24481 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24480,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24489__delegate = function (args){return args;
};
var G__24489 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24489__delegate.call(this,args);};
G__24489.cljs$lang$maxFixedArity = 0;
G__24489.cljs$lang$applyTo = (function (arglist__24490){
var args = cljs.core.seq(arglist__24490);
return G__24489__delegate(args);
});
G__24489.cljs$core$IFn$_invoke$arity$variadic = G__24489__delegate;
return G__24489;
})()
;})(vec__24480,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__24482 = null;var count__24483 = (0);var i__24484 = (0);while(true){
if((i__24484 < count__24483))
{var vec__24485 = cljs.core._nth.call(null,chunk__24482,i__24484);var idx = cljs.core.nth.call(null,vec__24485,(0),null);var vec__24486 = cljs.core.nth.call(null,vec__24485,(1),null);var date = cljs.core.nth.call(null,vec__24486,(0),null);var open = cljs.core.nth.call(null,vec__24486,(1),null);var high = cljs.core.nth.call(null,vec__24486,(2),null);var low = cljs.core.nth.call(null,vec__24486,(3),null);var close = cljs.core.nth.call(null,vec__24486,(4),null);var volume = cljs.core.nth.call(null,vec__24486,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__24491 = seq__24481;
var G__24492 = chunk__24482;
var G__24493 = count__24483;
var G__24494 = (i__24484 + (1));
seq__24481 = G__24491;
chunk__24482 = G__24492;
count__24483 = G__24493;
i__24484 = G__24494;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24481);if(temp__4126__auto__)
{var seq__24481__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24481__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24481__$1);{
var G__24495 = cljs.core.chunk_rest.call(null,seq__24481__$1);
var G__24496 = c__4307__auto__;
var G__24497 = cljs.core.count.call(null,c__4307__auto__);
var G__24498 = (0);
seq__24481 = G__24495;
chunk__24482 = G__24496;
count__24483 = G__24497;
i__24484 = G__24498;
continue;
}
} else
{var vec__24487 = cljs.core.first.call(null,seq__24481__$1);var idx = cljs.core.nth.call(null,vec__24487,(0),null);var vec__24488 = cljs.core.nth.call(null,vec__24487,(1),null);var date = cljs.core.nth.call(null,vec__24488,(0),null);var open = cljs.core.nth.call(null,vec__24488,(1),null);var high = cljs.core.nth.call(null,vec__24488,(2),null);var low = cljs.core.nth.call(null,vec__24488,(3),null);var close = cljs.core.nth.call(null,vec__24488,(4),null);var volume = cljs.core.nth.call(null,vec__24488,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__24499 = cljs.core.next.call(null,seq__24481__$1);
var G__24500 = null;
var G__24501 = (0);
var G__24502 = (0);
seq__24481 = G__24499;
chunk__24482 = G__24500;
count__24483 = G__24501;
i__24484 = G__24502;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__24506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__24506,(0),null);var h = cljs.core.nth.call(null,vec__24506,(1),null);return ((function (ctx,vec__24506,w,h){
return (function (p__24507){var map__24508 = p__24507;var map__24508__$1 = ((cljs.core.seq_QMARK_.call(null,map__24508))?cljs.core.apply.call(null,cljs.core.hash_map,map__24508):map__24508);var appctx = map__24508__$1;var bias = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__24508__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
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
;})(ctx,vec__24506,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj24546 = {"url":"/proxy","dataType":"text","data":(function (){var obj24548 = {"url":url};return obj24548;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_24555){var state_val_24556 = (state_24555[(1)]);if((state_val_24556 === (2)))
{var inst_24552 = (state_24555[(2)]);var inst_24553 = cljs.core.async.close_BANG_.call(null,ret);var state_24555__$1 = (function (){var statearr_24557 = state_24555;(statearr_24557[(7)] = inst_24552);
return statearr_24557;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24555__$1,inst_24553);
} else
{if((state_val_24556 === (1)))
{var inst_24549 = [null,data];var inst_24550 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24549,null));var state_24555__$1 = state_24555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24555__$1,(2),ret,inst_24550);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24561 = [null,null,null,null,null,null,null,null];(statearr_24561[(0)] = state_machine__6188__auto__);
(statearr_24561[(1)] = (1));
return statearr_24561;
});
var state_machine__6188__auto____1 = (function (state_24555){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24555);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24562){if((e24562 instanceof Object))
{var ex__6191__auto__ = e24562;var statearr_24563_24581 = state_24555;(statearr_24563_24581[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24555);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24582 = state_24555;
state_24555 = G__24582;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24555){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_24564 = f__6203__auto__.call(null);(statearr_24564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_24571){var state_val_24572 = (state_24571[(1)]);if((state_val_24572 === (2)))
{var inst_24568 = (state_24571[(2)]);var inst_24569 = cljs.core.async.close_BANG_.call(null,ret);var state_24571__$1 = (function (){var statearr_24573 = state_24571;(statearr_24573[(7)] = inst_24568);
return statearr_24573;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24571__$1,inst_24569);
} else
{if((state_val_24572 === (1)))
{var inst_24565 = [err];var inst_24566 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24565,null));var state_24571__$1 = state_24571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24571__$1,(2),ret,inst_24566);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24577 = [null,null,null,null,null,null,null,null];(statearr_24577[(0)] = state_machine__6188__auto__);
(statearr_24577[(1)] = (1));
return statearr_24577;
});
var state_machine__6188__auto____1 = (function (state_24571){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24571);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24578){if((e24578 instanceof Object))
{var ex__6191__auto__ = e24578;var statearr_24579_24583 = state_24571;(statearr_24579_24583[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24584 = state_24571;
state_24571 = G__24584;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24571){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_24580 = f__6203__auto__.call(null);(statearr_24580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj24546;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__24593(s__24594){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__24594__$1 = s__24594;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24594__$1);if(temp__4126__auto__)
{var s__24594__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24594__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__24594__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__24596 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__24595 = (0);while(true){
if((i__24595 < size__4275__auto__))
{var vec__24599 = cljs.core._nth.call(null,c__4274__auto__,i__24595);var _ = cljs.core.nth.call(null,vec__24599,(0),null);var date = cljs.core.nth.call(null,vec__24599,(1),null);var open = cljs.core.nth.call(null,vec__24599,(2),null);var high = cljs.core.nth.call(null,vec__24599,(3),null);var low = cljs.core.nth.call(null,vec__24599,(4),null);var close = cljs.core.nth.call(null,vec__24599,(5),null);var volume = cljs.core.nth.call(null,vec__24599,(6),null);cljs.core.chunk_append.call(null,b__24596,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__24601 = (i__24595 + (1));
i__24595 = G__24601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24596),iter__24593.call(null,cljs.core.chunk_rest.call(null,s__24594__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24596),null);
}
} else
{var vec__24600 = cljs.core.first.call(null,s__24594__$2);var _ = cljs.core.nth.call(null,vec__24600,(0),null);var date = cljs.core.nth.call(null,vec__24600,(1),null);var open = cljs.core.nth.call(null,vec__24600,(2),null);var high = cljs.core.nth.call(null,vec__24600,(3),null);var low = cljs.core.nth.call(null,vec__24600,(4),null);var close = cljs.core.nth.call(null,vec__24600,(5),null);var volume = cljs.core.nth.call(null,vec__24600,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__24593.call(null,cljs.core.rest.call(null,s__24594__$2)));
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
return (function (state_24679){var state_val_24680 = (state_24679[(1)]);if((state_val_24680 === (9)))
{var inst_24669 = (state_24679[(2)]);var state_24679__$1 = state_24679;var statearr_24681_24698 = state_24679__$1;(statearr_24681_24698[(2)] = inst_24669);
(statearr_24681_24698[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (8)))
{var inst_24675 = (state_24679[(2)]);var state_24679__$1 = state_24679;var statearr_24682_24699 = state_24679__$1;(statearr_24682_24699[(2)] = inst_24675);
(statearr_24682_24699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (7)))
{var inst_24661 = (state_24679[(7)]);var inst_24671 = cljs.core.concat.call(null,all,inst_24661);var inst_24672 = [null,inst_24671];var inst_24673 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24672,null));var state_24679__$1 = state_24679;var statearr_24683_24700 = state_24679__$1;(statearr_24683_24700[(2)] = inst_24673);
(statearr_24683_24700[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (6)))
{var inst_24661 = (state_24679[(7)]);var inst_24665 = cljs.core.concat.call(null,all,inst_24661);var inst_24666 = (start + num);var inst_24667 = stock_info.call(null,inst_24665,id,startdate,inst_24666,num);var state_24679__$1 = state_24679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24679__$1,(9),inst_24667);
} else
{if((state_val_24680 === (5)))
{var inst_24677 = (state_24679[(2)]);var state_24679__$1 = state_24679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24679__$1,inst_24677);
} else
{if((state_val_24680 === (4)))
{var inst_24656 = (state_24679[(8)]);var inst_24661 = (state_24679[(7)]);var inst_24661__$1 = test.stock4.parse_info.call(null,inst_24656);var inst_24662 = cljs.core.count.call(null,inst_24661__$1);var inst_24663 = cljs.core._EQ_.call(null,num,inst_24662);var state_24679__$1 = (function (){var statearr_24684 = state_24679;(statearr_24684[(7)] = inst_24661__$1);
return statearr_24684;
})();if(inst_24663)
{var statearr_24685_24701 = state_24679__$1;(statearr_24685_24701[(1)] = (6));
} else
{var statearr_24686_24702 = state_24679__$1;(statearr_24686_24702[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (3)))
{var inst_24655 = (state_24679[(9)]);var inst_24658 = [inst_24655];var inst_24659 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24658,null));var state_24679__$1 = state_24679;var statearr_24687_24703 = state_24679__$1;(statearr_24687_24703[(2)] = inst_24659);
(statearr_24687_24703[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (2)))
{var inst_24655 = (state_24679[(9)]);var inst_24654 = (state_24679[(2)]);var inst_24655__$1 = cljs.core.nth.call(null,inst_24654,(0),null);var inst_24656 = cljs.core.nth.call(null,inst_24654,(1),null);var state_24679__$1 = (function (){var statearr_24688 = state_24679;(statearr_24688[(8)] = inst_24656);
(statearr_24688[(9)] = inst_24655__$1);
return statearr_24688;
})();if(cljs.core.truth_(inst_24655__$1))
{var statearr_24689_24704 = state_24679__$1;(statearr_24689_24704[(1)] = (3));
} else
{var statearr_24690_24705 = state_24679__$1;(statearr_24690_24705[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24680 === (1)))
{var inst_24651 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_24652 = test.stock4.content.call(null,inst_24651);var state_24679__$1 = state_24679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24679__$1,(2),inst_24652);
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
var state_machine__6188__auto____0 = (function (){var statearr_24694 = [null,null,null,null,null,null,null,null,null,null];(statearr_24694[(0)] = state_machine__6188__auto__);
(statearr_24694[(1)] = (1));
return statearr_24694;
});
var state_machine__6188__auto____1 = (function (state_24679){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24679);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24695){if((e24695 instanceof Object))
{var ex__6191__auto__ = e24695;var statearr_24696_24706 = state_24679;(statearr_24696_24706[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24707 = state_24679;
state_24679 = G__24707;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24679){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_24697 = f__6203__auto__.call(null);(statearr_24697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__24716 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__24716,(0),null);var open = cljs.core.nth.call(null,vec__24716,(1),null);var _ = cljs.core.nth.call(null,vec__24716,(2),null);var ___$1 = cljs.core.nth.call(null,vec__24716,(3),null);var ___$2 = cljs.core.nth.call(null,vec__24716,(4),null);var ___$3 = cljs.core.nth.call(null,vec__24716,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__24716,date,open,_,___$1,___$2,___$3){
return (function (p__24718){var vec__24719 = p__24718;var ___$4 = cljs.core.nth.call(null,vec__24719,(0),null);var ___$5 = cljs.core.nth.call(null,vec__24719,(1),null);var high = cljs.core.nth.call(null,vec__24719,(2),null);var ___$6 = cljs.core.nth.call(null,vec__24719,(3),null);var ___$7 = cljs.core.nth.call(null,vec__24719,(4),null);var ___$8 = cljs.core.nth.call(null,vec__24719,(5),null);return high;
});})(group,vec__24716,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__24716,date,open,_,___$1,___$2,___$3,high){
return (function (p__24720){var vec__24721 = p__24720;var ___$4 = cljs.core.nth.call(null,vec__24721,(0),null);var ___$5 = cljs.core.nth.call(null,vec__24721,(1),null);var ___$6 = cljs.core.nth.call(null,vec__24721,(2),null);var low = cljs.core.nth.call(null,vec__24721,(3),null);var ___$7 = cljs.core.nth.call(null,vec__24721,(4),null);var ___$8 = cljs.core.nth.call(null,vec__24721,(5),null);return low;
});})(group,vec__24716,date,open,_,___$1,___$2,___$3,high))
,group));var vec__24717 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__24717,(0),null);var ___$5 = cljs.core.nth.call(null,vec__24717,(1),null);var ___$6 = cljs.core.nth.call(null,vec__24717,(2),null);var ___$7 = cljs.core.nth.call(null,vec__24717,(3),null);var close = cljs.core.nth.call(null,vec__24717,(4),null);var ___$8 = cljs.core.nth.call(null,vec__24717,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__24716,date,open,_,___$1,___$2,___$3,high,low,vec__24717,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__24722){var vec__24723 = p__24722;var ___$9 = cljs.core.nth.call(null,vec__24723,(0),null);var ___$10 = cljs.core.nth.call(null,vec__24723,(1),null);var ___$11 = cljs.core.nth.call(null,vec__24723,(2),null);var ___$12 = cljs.core.nth.call(null,vec__24723,(3),null);var ___$13 = cljs.core.nth.call(null,vec__24723,(4),null);var volume = cljs.core.nth.call(null,vec__24723,(5),null);return volume;
});})(group,vec__24716,date,open,_,___$1,___$2,___$3,high,low,vec__24717,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__24716,date,open,_,___$1,___$2,___$3,high,low,vec__24717,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__24716,date,open,_,___$1,___$2,___$3,high,low,vec__24717,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__24727 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__24727,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24727,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24727,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24727,(3),null);var c1 = cljs.core.nth.call(null,vec__24727,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24727,(5),null);var l1 = vec__24727;var vec__24728 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__24728,(0),null);var ___$5 = cljs.core.nth.call(null,vec__24728,(1),null);var ___$6 = cljs.core.nth.call(null,vec__24728,(2),null);var ___$7 = cljs.core.nth.call(null,vec__24728,(3),null);var c2 = cljs.core.nth.call(null,vec__24728,(4),null);var ___$8 = cljs.core.nth.call(null,vec__24728,(5),null);var l2 = vec__24728;var vec__24729 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__24729,(0),null);var ___$10 = cljs.core.nth.call(null,vec__24729,(1),null);var ___$11 = cljs.core.nth.call(null,vec__24729,(2),null);var ___$12 = cljs.core.nth.call(null,vec__24729,(3),null);var c3 = cljs.core.nth.call(null,vec__24729,(4),null);var ___$13 = cljs.core.nth.call(null,vec__24729,(5),null);var l3 = vec__24729;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__24727,_,___$1,___$2,___$3,c1,___$4,l1,vec__24728,date,___$5,___$6,___$7,c2,___$8,l2,vec__24729,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__24727,_,___$1,___$2,___$3,c1,___$4,l1,vec__24728,date,___$5,___$6,___$7,c2,___$8,l2,vec__24729,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__24734){var vec__24735 = p__24734;var _ = cljs.core.nth.call(null,vec__24735,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24735,(1),null);var high = cljs.core.nth.call(null,vec__24735,(2),null);var low = cljs.core.nth.call(null,vec__24735,(3),null);var ___$2 = cljs.core.nth.call(null,vec__24735,(4),null);var ___$3 = cljs.core.nth.call(null,vec__24735,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__24733 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__24733,(0),null);var open = cljs.core.nth.call(null,vec__24733,(1),null);var high = cljs.core.nth.call(null,vec__24733,(2),null);var low = cljs.core.nth.call(null,vec__24733,(3),null);var close = cljs.core.nth.call(null,vec__24733,(4),null);var ___$1 = cljs.core.nth.call(null,vec__24733,(5),null);var curr = vec__24733;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__24733,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__24733,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__24738){var vec__24739 = p__24738;var _ = cljs.core.nth.call(null,vec__24739,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24739,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24739,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24739,(3),null);var close = cljs.core.nth.call(null,vec__24739,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24739,(5),null);return close;
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
return (function (p__24742){var vec__24743 = p__24742;var _ = cljs.core.nth.call(null,vec__24743,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24743,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24743,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24743,(3),null);var close = cljs.core.nth.call(null,vec__24743,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24743,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__24749 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__24749,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24749,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24749,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24749,(3),null);var close = cljs.core.nth.call(null,vec__24749,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24749,(5),null);var curr = vec__24749;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__24749,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__24750){var vec__24751 = p__24750;var vec__24752 = cljs.core.nth.call(null,vec__24751,(0),null);var ___$5 = cljs.core.nth.call(null,vec__24752,(0),null);var prev_ema = cljs.core.nth.call(null,vec__24752,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__24751,(1),null);var idx = cljs.core.nth.call(null,vec__24751,(2),null);var vec__24753 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__24753,(0),null);var ___$7 = cljs.core.nth.call(null,vec__24753,(1),null);var ___$8 = cljs.core.nth.call(null,vec__24753,(2),null);var ___$9 = cljs.core.nth.call(null,vec__24753,(3),null);var close__$1 = cljs.core.nth.call(null,vec__24753,(4),null);var ___$10 = cljs.core.nth.call(null,vec__24753,(5),null);var curr__$1 = vec__24753;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__24749,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__24759 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__24759,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24759,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24759,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24759,(3),null);var ct = cljs.core.nth.call(null,vec__24759,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24759,(5),null);var curr = vec__24759;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__24759,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__24760){var vec__24761 = p__24760;var ___$5 = cljs.core.nth.call(null,vec__24761,(0),null);var ___$6 = cljs.core.nth.call(null,vec__24761,(1),null);var ___$7 = cljs.core.nth.call(null,vec__24761,(2),null);var low = cljs.core.nth.call(null,vec__24761,(3),null);var ___$8 = cljs.core.nth.call(null,vec__24761,(4),null);var ___$9 = cljs.core.nth.call(null,vec__24761,(5),null);return low;
});})(group,vec__24759,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__24759,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__24762){var vec__24763 = p__24762;var ___$5 = cljs.core.nth.call(null,vec__24763,(0),null);var ___$6 = cljs.core.nth.call(null,vec__24763,(1),null);var high = cljs.core.nth.call(null,vec__24763,(2),null);var ___$7 = cljs.core.nth.call(null,vec__24763,(3),null);var ___$8 = cljs.core.nth.call(null,vec__24763,(4),null);var ___$9 = cljs.core.nth.call(null,vec__24763,(5),null);return high;
});})(group,vec__24759,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__24759,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__24759,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__24766){var vec__24767 = p__24766;var line = cljs.core.nth.call(null,vec__24767,(0),null);var v = cljs.core.nth.call(null,vec__24767,(1),null);return v;
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
return (function (p__24791){var vec__24792 = p__24791;var _ = cljs.core.nth.call(null,vec__24792,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24792,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24792,(2),null);var low = cljs.core.nth.call(null,vec__24792,(3),null);var ___$3 = cljs.core.nth.call(null,vec__24792,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24792,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__24793){var vec__24794 = p__24793;var vec__24795 = cljs.core.nth.call(null,vec__24794,(0),null);var _ = cljs.core.nth.call(null,vec__24795,(0),null);var value = cljs.core.nth.call(null,vec__24795,(1),null);var ori = cljs.core.nth.call(null,vec__24794,(1),null);var prev = cljs.core.nth.call(null,vec__24794,(2),null);var curr = cljs.core.nth.call(null,vec__24794,(3),null);var act = cljs.core.nth.call(null,vec__24794,(4),null);var af = cljs.core.nth.call(null,vec__24794,(5),null);var vec__24796 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__24796,(0),null);var ___$2 = cljs.core.nth.call(null,vec__24796,(1),null);var ph = cljs.core.nth.call(null,vec__24796,(2),null);var pl = cljs.core.nth.call(null,vec__24796,(3),null);var ___$3 = cljs.core.nth.call(null,vec__24796,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24796,(5),null);var prev_line = vec__24796;var vec__24797 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__24797,(0),null);var ___$6 = cljs.core.nth.call(null,vec__24797,(1),null);var ch = cljs.core.nth.call(null,vec__24797,(2),null);var cl = cljs.core.nth.call(null,vec__24797,(3),null);var ___$7 = cljs.core.nth.call(null,vec__24797,(4),null);var ___$8 = cljs.core.nth.call(null,vec__24797,(5),null);var curr_line = vec__24797;var should_turn = (function (){var pred__24798 = cljs.core._EQ_;var expr__24799 = act;if(cljs.core.truth_(pred__24798.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24799)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__24798.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24799)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24799))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__24801 = cljs.core._EQ_;var expr__24802 = act;if(cljs.core.truth_(pred__24801.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24802)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__24801,expr__24802,vec__24796,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__24797,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__24794,vec__24795,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__24804){var vec__24805 = p__24804;var ___$9 = cljs.core.nth.call(null,vec__24805,(0),null);var ___$10 = cljs.core.nth.call(null,vec__24805,(1),null);var high = cljs.core.nth.call(null,vec__24805,(2),null);var ___$11 = cljs.core.nth.call(null,vec__24805,(3),null);var ___$12 = cljs.core.nth.call(null,vec__24805,(4),null);var ___$13 = cljs.core.nth.call(null,vec__24805,(5),null);return high;
});})(pred__24801,expr__24802,vec__24796,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__24797,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__24794,vec__24795,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__24801.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24802)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__24801,expr__24802,vec__24796,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__24797,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__24794,vec__24795,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__24806){var vec__24807 = p__24806;var ___$9 = cljs.core.nth.call(null,vec__24807,(0),null);var ___$10 = cljs.core.nth.call(null,vec__24807,(1),null);var ___$11 = cljs.core.nth.call(null,vec__24807,(2),null);var low__$1 = cljs.core.nth.call(null,vec__24807,(3),null);var ___$12 = cljs.core.nth.call(null,vec__24807,(4),null);var ___$13 = cljs.core.nth.call(null,vec__24807,(5),null);return low__$1;
});})(pred__24801,expr__24802,vec__24796,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__24797,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__24794,vec__24795,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24802))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__24808 = cljs.core._EQ_;var expr__24809 = act;if(cljs.core.truth_(pred__24808.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24809)))
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
{if(cljs.core.truth_(pred__24808.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24809)))
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
{if(cljs.core.truth_(pred__24808.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__24809)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24809))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__24811 = cljs.core._EQ_;var expr__24812 = act;if(cljs.core.truth_(pred__24811.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24812)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__24811.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24812)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24812))));
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
return (function (p1__24814_SHARP_){return Math.pow((p1__24814_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__24820 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__24820,(0),null);var vec__24821 = cljs.core.nth.call(null,vec__24820,(1),null);var avg = cljs.core.nth.call(null,vec__24821,(0),null);var sd_v = cljs.core.nth.call(null,vec__24821,(1),null);var currs = cljs.core.map.call(null,((function (vec__24820,_,vec__24821,avg,sd_v){
return (function (p__24822){var vec__24823 = p__24822;var ___$1 = cljs.core.nth.call(null,vec__24823,(0),null);var ___$2 = cljs.core.nth.call(null,vec__24823,(1),null);var ___$3 = cljs.core.nth.call(null,vec__24823,(2),null);var ___$4 = cljs.core.nth.call(null,vec__24823,(3),null);var close = cljs.core.nth.call(null,vec__24823,(4),null);var ___$5 = cljs.core.nth.call(null,vec__24823,(5),null);return close;
});})(vec__24820,_,vec__24821,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__24820,_,vec__24821,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__24820,_,vec__24821,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__24820,_,vec__24821,avg,sd_v,currs,offsets){
return (function (p1__24815_SHARP_){return (p1__24815_SHARP_ / sd_v);
});})(vec__24820,_,vec__24821,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__24820,_,vec__24821,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__24824__delegate = function (args){return args;
};
var G__24824 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24824__delegate.call(this,args);};
G__24824.cljs$lang$maxFixedArity = 0;
G__24824.cljs$lang$applyTo = (function (arglist__24825){
var args = cljs.core.seq(arglist__24825);
return G__24824__delegate(args);
});
G__24824.cljs$core$IFn$_invoke$arity$variadic = G__24824__delegate;
return G__24824;
})()
;})(vec__24820,_,vec__24821,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
/**
* 余氏指標
* w用0.001看多空動能
* w用0.5看振盪方向
*/
test.stock4.yu = (function yu(w,n,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,((function (normal){
return (function (p__24834,p__24835){var vec__24836 = p__24834;var _ = cljs.core.nth.call(null,vec__24836,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24836,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24836,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24836,(3),null);var pc = cljs.core.nth.call(null,vec__24836,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24836,(5),null);var vec__24837 = p__24835;var ___$5 = cljs.core.nth.call(null,vec__24837,(0),null);var ___$6 = cljs.core.nth.call(null,vec__24837,(1),null);var ___$7 = cljs.core.nth.call(null,vec__24837,(2),null);var ___$8 = cljs.core.nth.call(null,vec__24837,(3),null);var cc = cljs.core.nth.call(null,vec__24837,(4),null);var ___$9 = cljs.core.nth.call(null,vec__24837,(5),null);return (((cc - pc) / pc) / normal);
});})(normal))
,reverse_kline,cljs.core.rest.call(null,reverse_kline));var vs = cljs.core.map.call(null,((function (normal,up_seq){
return (function (p__24838){var vec__24839 = p__24838;var dir = cljs.core.nth.call(null,vec__24839,(0),null);var ran = cljs.core.nth.call(null,vec__24839,(1),null);return ran;
});})(normal,up_seq))
,cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__24840,up_offset){var vec__24841 = p__24840;var prev = cljs.core.nth.call(null,vec__24841,(0),null);var ran = cljs.core.nth.call(null,vec__24841,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (normal,up_seq,vs){
return (function() { 
var G__24842__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__24842 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24842__delegate.call(this,args);};
G__24842.cljs$lang$maxFixedArity = 0;
G__24842.cljs$lang$applyTo = (function (arglist__24843){
var args = cljs.core.seq(arglist__24843);
return G__24842__delegate(args);
});
G__24842.cljs$core$IFn$_invoke$arity$variadic = G__24842__delegate;
return G__24842;
})()
;})(normal,up_seq,vs))
,cljs.core.rest.call(null,reverse_kline),vs);
});
/**
* Volume Accumulation 成交量多空比率淨額法
* 用來計算OBV能量潮公式
*/
test.stock4.VolumeAccumulation = (function VolumeAccumulation(kline){return cljs.core.map.call(null,(function (p__24846){var vec__24847 = p__24846;var date = cljs.core.nth.call(null,vec__24847,(0),null);var open = cljs.core.nth.call(null,vec__24847,(1),null);var high = cljs.core.nth.call(null,vec__24847,(2),null);var low = cljs.core.nth.call(null,vec__24847,(3),null);var close = cljs.core.nth.call(null,vec__24847,(4),null);var volume = cljs.core.nth.call(null,vec__24847,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return ((((close - low) - (high - close)) * ((1) / (high - low))) * volume);
}
}),kline);
});
/**
* OBV能量潮公式
*/
test.stock4.obv = (function obv(kline){return cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,(0),test.stock4.VolumeAccumulation.call(null,kline)));
});
test.stock4.yu_pre = (function yu_pre(kline){var n = (30);var group = cljs.core.take.call(null,n,kline);var all_volume = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group){
return (function (p__24854){var vec__24855 = p__24854;var _ = cljs.core.nth.call(null,vec__24855,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24855,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24855,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24855,(3),null);var ___$4 = cljs.core.nth.call(null,vec__24855,(4),null);var volume = cljs.core.nth.call(null,vec__24855,(5),null);return volume;
});})(n,group))
,group));var all_price = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group,all_volume){
return (function (p__24856){var vec__24857 = p__24856;var _ = cljs.core.nth.call(null,vec__24857,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24857,(1),null);var high = cljs.core.nth.call(null,vec__24857,(2),null);var ___$2 = cljs.core.nth.call(null,vec__24857,(3),null);var ___$3 = cljs.core.nth.call(null,vec__24857,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24857,(5),null);return high;
});})(n,group,all_volume))
,group));var v_per_p = (all_price / all_volume);var obv_seq = test.stock4.obv.call(null,group);var predict = cljs.core.map.call(null,((function (n,group,all_volume,all_price,v_per_p,obv_seq){
return (function (p__24858,obv){var vec__24859 = p__24858;var _ = cljs.core.nth.call(null,vec__24859,(0),null);var open = cljs.core.nth.call(null,vec__24859,(1),null);var ___$1 = cljs.core.nth.call(null,vec__24859,(2),null);var ___$2 = cljs.core.nth.call(null,vec__24859,(3),null);var ___$3 = cljs.core.nth.call(null,vec__24859,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24859,(5),null);return (open + (obv * v_per_p));
});})(n,group,all_volume,all_price,v_per_p,obv_seq))
,kline,obv_seq);console.log(all_volume,all_price);
console.log(v_per_p);
return predict;
});
test.stock4.yu_obv = (function yu_obv(n,kline){var group = cljs.core.take.call(null,n,kline);var va = test.stock4.VolumeAccumulation.call(null,group);var max_va = cljs.core.apply.call(null,cljs.core.max,va);var min_va = cljs.core.apply.call(null,cljs.core.min,va);var region = (max_va - min_va);return cljs.core.map.call(null,((function (group,va,max_va,min_va,region){
return (function (p1__24860_SHARP_){return (p1__24860_SHARP_ / region);
});})(group,va,max_va,min_va,region))
,va);
});
test.stock4.yu_volume = (function yu_volume(n,reverse_kline){var group = cljs.core.take.call(null,n,reverse_kline);var price_seq = cljs.core.map.call(null,((function (group){
return (function (p__24865){var vec__24866 = p__24865;var _ = cljs.core.nth.call(null,vec__24866,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24866,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24866,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24866,(3),null);var close = cljs.core.nth.call(null,vec__24866,(4),null);var ___$4 = cljs.core.nth.call(null,vec__24866,(5),null);return close;
});})(group))
,group);var price_up_rate = cljs.core.map.call(null,((function (group,price_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq))
,price_seq,cljs.core.rest.call(null,price_seq));var volume_seq = cljs.core.map.call(null,((function (group,price_seq,price_up_rate){
return (function (p__24867){var vec__24868 = p__24867;var _ = cljs.core.nth.call(null,vec__24868,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24868,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24868,(2),null);var ___$3 = cljs.core.nth.call(null,vec__24868,(3),null);var ___$4 = cljs.core.nth.call(null,vec__24868,(4),null);var volume = cljs.core.nth.call(null,vec__24868,(5),null);return volume;
});})(group,price_seq,price_up_rate))
,group);var volume_up_rate = cljs.core.map.call(null,((function (group,price_seq,price_up_rate,volume_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq,price_up_rate,volume_seq))
,volume_seq,cljs.core.rest.call(null,volume_seq));var v = (n / cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,price_seq,price_up_rate,volume_seq,volume_up_rate){
return (function (p,v){return (p / v);
});})(group,price_seq,price_up_rate,volume_seq,volume_up_rate))
,price_up_rate,volume_up_rate)));var curr = cljs.core.second.call(null,group);return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,price_seq,price_up_rate,volume_seq,volume_up_rate,v,curr){
return (function (){return yu_volume.call(null,n,cljs.core.rest.call(null,reverse_kline));
});})(group,price_seq,price_up_rate,volume_seq,volume_up_rate,v,curr))
,null,null)));
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_25346){var state_val_25347 = (state_25346[(1)]);if((state_val_25347 === (2)))
{var inst_25344 = (state_25346[(2)]);var state_25346__$1 = state_25346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25346__$1,inst_25344);
} else
{if((state_val_25347 === (1)))
{var inst_25342 = cljs.core.js__GT_clj.call(null,data);var state_25346__$1 = state_25346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25346__$1,(2),onView,inst_25342);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25351 = [null,null,null,null,null,null,null];(statearr_25351[(0)] = state_machine__6188__auto__);
(statearr_25351[(1)] = (1));
return statearr_25351;
});
var state_machine__6188__auto____1 = (function (state_25346){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25352){if((e25352 instanceof Object))
{var ex__6191__auto__ = e25352;var statearr_25353_25815 = state_25346;(statearr_25353_25815[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25816 = state_25346;
state_25346 = G__25816;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25346){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_25354 = f__6203__auto__.call(null);(statearr_25354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___25817 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___25817,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___25817,draw,onSystem,onView){
return (function (state_25371){var state_val_25372 = (state_25371[(1)]);if((state_val_25372 === (6)))
{var inst_25367 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25373_25818 = state_25371__$1;(statearr_25373_25818[(2)] = inst_25367);
(statearr_25373_25818[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (5)))
{var inst_25369 = (state_25371[(2)]);var state_25371__$1 = state_25371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25371__$1,inst_25369);
} else
{if((state_val_25372 === (4)))
{var inst_25360 = (state_25371[(7)]);var inst_25364 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_25360];var inst_25365 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25364,null));var state_25371__$1 = state_25371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25371__$1,(6),onSystem,inst_25365);
} else
{if((state_val_25372 === (3)))
{var inst_25359 = (state_25371[(8)]);var inst_25362 = alert(inst_25359);var state_25371__$1 = state_25371;var statearr_25374_25819 = state_25371__$1;(statearr_25374_25819[(2)] = inst_25362);
(statearr_25374_25819[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (2)))
{var inst_25359 = (state_25371[(8)]);var inst_25358 = (state_25371[(2)]);var inst_25359__$1 = cljs.core.nth.call(null,inst_25358,(0),null);var inst_25360 = cljs.core.nth.call(null,inst_25358,(1),null);var state_25371__$1 = (function (){var statearr_25375 = state_25371;(statearr_25375[(7)] = inst_25360);
(statearr_25375[(8)] = inst_25359__$1);
return statearr_25375;
})();if(cljs.core.truth_(inst_25359__$1))
{var statearr_25376_25820 = state_25371__$1;(statearr_25376_25820[(1)] = (3));
} else
{var statearr_25377_25821 = state_25371__$1;(statearr_25377_25821[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (1)))
{var inst_25356 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_25371__$1 = state_25371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25371__$1,(2),inst_25356);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___25817,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___25817,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25381 = [null,null,null,null,null,null,null,null,null];(statearr_25381[(0)] = state_machine__6188__auto__);
(statearr_25381[(1)] = (1));
return statearr_25381;
});
var state_machine__6188__auto____1 = (function (state_25371){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25382){if((e25382 instanceof Object))
{var ex__6191__auto__ = e25382;var statearr_25383_25822 = state_25371;(statearr_25383_25822[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25823 = state_25371;
state_25371 = G__25823;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25371){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___25817,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_25384 = f__6203__auto__.call(null);(statearr_25384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___25817);
return statearr_25384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___25817,draw,onSystem,onView))
);
var c__6202__auto___25824 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___25824,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___25824,draw,onSystem,onView){
return (function (state_25674){var state_val_25675 = (state_25674[(1)]);if((state_val_25675 === (65)))
{var inst_25602 = (state_25674[(7)]);var inst_25601 = (state_25674[(8)]);var inst_25604 = (inst_25602 < inst_25601);var inst_25605 = inst_25604;var state_25674__$1 = state_25674;if(cljs.core.truth_(inst_25605))
{var statearr_25676_25825 = state_25674__$1;(statearr_25676_25825[(1)] = (67));
} else
{var statearr_25677_25826 = state_25674__$1;(statearr_25677_25826[(1)] = (68));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (70)))
{var inst_25613 = (state_25674[(9)]);var inst_25615 = cljs.core.chunked_seq_QMARK_.call(null,inst_25613);var state_25674__$1 = state_25674;if(inst_25615)
{var statearr_25678_25827 = state_25674__$1;(statearr_25678_25827[(1)] = (73));
} else
{var statearr_25679_25828 = state_25674__$1;(statearr_25679_25828[(1)] = (74));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (62)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25596 = cljs.core.keyword.call(null,inst_25446);var inst_25597 = inst_25596.call(null,inst_25406);var inst_25598 = cljs.core.seq.call(null,inst_25597);var inst_25599 = inst_25598;var inst_25600 = null;var inst_25601 = (0);var inst_25602 = (0);var state_25674__$1 = (function (){var statearr_25680 = state_25674;(statearr_25680[(7)] = inst_25602);
(statearr_25680[(12)] = inst_25600);
(statearr_25680[(8)] = inst_25601);
(statearr_25680[(13)] = inst_25599);
return statearr_25680;
})();var statearr_25681_25829 = state_25674__$1;(statearr_25681_25829[(2)] = null);
(statearr_25681_25829[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (74)))
{var inst_25613 = (state_25674[(9)]);var inst_25622 = cljs.core.first.call(null,inst_25613);var inst_25623 = cljs.core.pr_str.call(null,inst_25622);var inst_25624 = console.log(inst_25623);var inst_25625 = cljs.core.next.call(null,inst_25613);var inst_25599 = inst_25625;var inst_25600 = null;var inst_25601 = (0);var inst_25602 = (0);var state_25674__$1 = (function (){var statearr_25682 = state_25674;(statearr_25682[(7)] = inst_25602);
(statearr_25682[(12)] = inst_25600);
(statearr_25682[(8)] = inst_25601);
(statearr_25682[(14)] = inst_25624);
(statearr_25682[(13)] = inst_25599);
return statearr_25682;
})();var statearr_25683_25830 = state_25674__$1;(statearr_25683_25830[(2)] = null);
(statearr_25683_25830[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (7)))
{var inst_25398 = (state_25674[(15)]);var inst_25403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25398);var state_25674__$1 = state_25674;var statearr_25684_25831 = state_25674__$1;(statearr_25684_25831[(2)] = inst_25403);
(statearr_25684_25831[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (59)))
{var inst_25406 = (state_25674[(11)]);var inst_25407 = (state_25674[(16)]);var inst_25584 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25585 = test.stock4.check_turn.call(null,inst_25584);var inst_25586 = cljs.core.take.call(null,inst_25407,inst_25585);var inst_25587 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"turn","turn",75759344),inst_25586);var inst_25588 = draw.call(null,inst_25587);var state_25674__$1 = state_25674;var statearr_25685_25832 = state_25674__$1;(statearr_25685_25832[(2)] = inst_25588);
(statearr_25685_25832[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (20)))
{var inst_25413 = (state_25674[(17)]);var inst_25441 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25413);var state_25674__$1 = state_25674;var statearr_25686_25833 = state_25674__$1;(statearr_25686_25833[(2)] = inst_25441);
(statearr_25686_25833[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (72)))
{var inst_25631 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25687_25834 = state_25674__$1;(statearr_25687_25834[(2)] = inst_25631);
(statearr_25687_25834[(1)] = (69));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (58)))
{var inst_25642 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25688_25835 = state_25674__$1;(statearr_25688_25835[(2)] = inst_25642);
(statearr_25688_25835[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (60)))
{var inst_25445 = (state_25674[(18)]);var inst_25590 = cljs.core._EQ_.call(null,"print",inst_25445);var state_25674__$1 = state_25674;if(inst_25590)
{var statearr_25689_25836 = state_25674__$1;(statearr_25689_25836[(1)] = (62));
} else
{var statearr_25690_25837 = state_25674__$1;(statearr_25690_25837[(1)] = (63));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (27)))
{var inst_25445 = (state_25674[(18)]);var inst_25467 = cljs.core._EQ_.call(null,"yu-obv",inst_25445);var state_25674__$1 = state_25674;if(inst_25467)
{var statearr_25691_25838 = state_25674__$1;(statearr_25691_25838[(1)] = (29));
} else
{var statearr_25692_25839 = state_25674__$1;(statearr_25692_25839[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (1)))
{var inst_25390 = (state_25674[(19)]);var inst_25388 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_25389 = [(200)];var inst_25390__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25388,inst_25389);var inst_25391 = cljs.core.seq_QMARK_.call(null,inst_25390__$1);var state_25674__$1 = (function (){var statearr_25693 = state_25674;(statearr_25693[(19)] = inst_25390__$1);
return statearr_25693;
})();if(inst_25391)
{var statearr_25694_25840 = state_25674__$1;(statearr_25694_25840[(1)] = (2));
} else
{var statearr_25695_25841 = state_25674__$1;(statearr_25695_25841[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (69)))
{var inst_25633 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25696_25842 = state_25674__$1;(statearr_25696_25842[(2)] = inst_25633);
(statearr_25696_25842[(1)] = (66));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (24)))
{var inst_25445 = (state_25674[(18)]);var inst_25458 = cljs.core._EQ_.call(null,"obv",inst_25445);var state_25674__$1 = state_25674;if(inst_25458)
{var statearr_25697_25843 = state_25674__$1;(statearr_25697_25843[(1)] = (26));
} else
{var statearr_25698_25844 = state_25674__$1;(statearr_25698_25844[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (55)))
{var inst_25644 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25699_25845 = state_25674__$1;(statearr_25699_25845[(2)] = inst_25644);
(statearr_25699_25845[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (39)))
{var inst_25445 = (state_25674[(18)]);var inst_25508 = cljs.core._EQ_.call(null,"sma",inst_25445);var state_25674__$1 = state_25674;if(inst_25508)
{var statearr_25700_25846 = state_25674__$1;(statearr_25700_25846[(1)] = (41));
} else
{var statearr_25701_25847 = state_25674__$1;(statearr_25701_25847[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (46)))
{var inst_25650 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25702_25848 = state_25674__$1;(statearr_25702_25848[(2)] = inst_25650);
(statearr_25702_25848[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (4)))
{var inst_25396 = (state_25674[(20)]);var inst_25390 = (state_25674[(19)]);var inst_25396__$1 = (state_25674[(2)]);var inst_25397 = cljs.core.get.call(null,inst_25396__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_25398 = inst_25390;var state_25674__$1 = (function (){var statearr_25703 = state_25674;(statearr_25703[(20)] = inst_25396__$1);
(statearr_25703[(21)] = inst_25397);
(statearr_25703[(15)] = inst_25398);
return statearr_25703;
})();var statearr_25704_25849 = state_25674__$1;(statearr_25704_25849[(2)] = null);
(statearr_25704_25849[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (54)))
{var inst_25445 = (state_25674[(18)]);var inst_25574 = cljs.core._EQ_.call(null,"avg",inst_25445);var state_25674__$1 = state_25674;if(inst_25574)
{var statearr_25705_25850 = state_25674__$1;(statearr_25705_25850[(1)] = (56));
} else
{var statearr_25706_25851 = state_25674__$1;(statearr_25706_25851[(1)] = (57));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (15)))
{var inst_25406 = (state_25674[(11)]);var state_25674__$1 = state_25674;var statearr_25707_25852 = state_25674__$1;(statearr_25707_25852[(2)] = inst_25406);
(statearr_25707_25852[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (48)))
{var inst_25445 = (state_25674[(18)]);var inst_25540 = cljs.core._EQ_.call(null,"sar",inst_25445);var state_25674__$1 = state_25674;if(inst_25540)
{var statearr_25708_25853 = state_25674__$1;(statearr_25708_25853[(1)] = (50));
} else
{var statearr_25709_25854 = state_25674__$1;(statearr_25709_25854[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (50)))
{var inst_25406 = (state_25674[(11)]);var inst_25542 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25543 = cljs.core.reverse.call(null,inst_25542);var inst_25544 = test.stock4.sar.call(null,inst_25543);var inst_25545 = cljs.core.count.call(null,inst_25542);var inst_25546 = cljs.core.take.call(null,inst_25545,inst_25544);var inst_25547 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"sar","sar",833088678),inst_25546);var inst_25548 = draw.call(null,inst_25547);var state_25674__$1 = state_25674;var statearr_25710_25855 = state_25674__$1;(statearr_25710_25855[(2)] = inst_25548);
(statearr_25710_25855[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (75)))
{var inst_25628 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25711_25856 = state_25674__$1;(statearr_25711_25856[(2)] = inst_25628);
(statearr_25711_25856[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (21)))
{var inst_25413 = (state_25674[(17)]);var state_25674__$1 = state_25674;var statearr_25712_25857 = state_25674__$1;(statearr_25712_25857[(2)] = inst_25413);
(statearr_25712_25857[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (31)))
{var inst_25660 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25713_25858 = state_25674__$1;(statearr_25713_25858[(2)] = inst_25660);
(statearr_25713_25858[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (32)))
{var inst_25406 = (state_25674[(11)]);var inst_25477 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25478 = test.stock4.yu_pre.call(null,inst_25477);var inst_25479 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25480 = cljs.core.count.call(null,inst_25479);var inst_25481 = cljs.core.take.call(null,inst_25480,inst_25478);var inst_25482 = cljs.core.pr_str.call(null,inst_25481);var inst_25483 = console.log(inst_25482);var state_25674__$1 = (function (){var statearr_25714 = state_25674;(statearr_25714[(22)] = inst_25483);
return statearr_25714;
})();var statearr_25715_25859 = state_25674__$1;(statearr_25715_25859[(2)] = inst_25406);
(statearr_25715_25859[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (40)))
{var inst_25654 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25716_25860 = state_25674__$1;(statearr_25716_25860[(2)] = inst_25654);
(statearr_25716_25860[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (56)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25407 = (state_25674[(16)]);var inst_25576 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25577 = test.stock4.average.call(null,inst_25446,inst_25576);var inst_25578 = cljs.core.take.call(null,inst_25407,inst_25577);var inst_25579 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_25578);var inst_25580 = draw.call(null,inst_25579);var state_25674__$1 = state_25674;var statearr_25717_25861 = state_25674__$1;(statearr_25717_25861[(2)] = inst_25580);
(statearr_25717_25861[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (33)))
{var inst_25445 = (state_25674[(18)]);var inst_25485 = cljs.core._EQ_.call(null,"yu",inst_25445);var state_25674__$1 = state_25674;if(inst_25485)
{var statearr_25718_25862 = state_25674__$1;(statearr_25718_25862[(1)] = (35));
} else
{var statearr_25719_25863 = state_25674__$1;(statearr_25719_25863[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (13)))
{var inst_25669 = (state_25674[(2)]);var inst_25398 = inst_25669;var state_25674__$1 = (function (){var statearr_25720 = state_25674;(statearr_25720[(15)] = inst_25398);
return statearr_25720;
})();var statearr_25721_25864 = state_25674__$1;(statearr_25721_25864[(2)] = null);
(statearr_25721_25864[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (22)))
{var inst_25445 = (state_25674[(18)]);var inst_25444 = (state_25674[(23)]);var inst_25444__$1 = (state_25674[(2)]);var inst_25445__$1 = cljs.core.get.call(null,inst_25444__$1,"cmd");var inst_25446 = cljs.core.get.call(null,inst_25444__$1,"params");var inst_25450 = cljs.core._EQ_.call(null,"length",inst_25445__$1);var state_25674__$1 = (function (){var statearr_25722 = state_25674;(statearr_25722[(10)] = inst_25446);
(statearr_25722[(18)] = inst_25445__$1);
(statearr_25722[(23)] = inst_25444__$1);
return statearr_25722;
})();if(inst_25450)
{var statearr_25723_25865 = state_25674__$1;(statearr_25723_25865[(1)] = (23));
} else
{var statearr_25724_25866 = state_25674__$1;(statearr_25724_25866[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (36)))
{var inst_25445 = (state_25674[(18)]);var inst_25496 = cljs.core._EQ_.call(null,"sd",inst_25445);var state_25674__$1 = state_25674;if(inst_25496)
{var statearr_25725_25867 = state_25674__$1;(statearr_25725_25867[(1)] = (38));
} else
{var statearr_25726_25868 = state_25674__$1;(statearr_25726_25868[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (41)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25510 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25511 = test.stock4.sma.call(null,inst_25446,inst_25510);var inst_25512 = cljs.core.take.call(null,(10),inst_25511);var inst_25513 = cljs.core.pr_str.call(null,inst_25512);var inst_25514 = console.log(inst_25513);var state_25674__$1 = (function (){var statearr_25727 = state_25674;(statearr_25727[(24)] = inst_25514);
return statearr_25727;
})();var statearr_25728_25869 = state_25674__$1;(statearr_25728_25869[(2)] = inst_25406);
(statearr_25728_25869[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (43)))
{var inst_25652 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25729_25870 = state_25674__$1;(statearr_25729_25870[(2)] = inst_25652);
(statearr_25729_25870[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (61)))
{var inst_25640 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25730_25871 = state_25674__$1;(statearr_25730_25871[(2)] = inst_25640);
(statearr_25730_25871[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (29)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25469 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25470 = test.stock4.yu_obv.call(null,inst_25446,inst_25469);var inst_25471 = cljs.core.take.call(null,(10),inst_25470);var inst_25472 = cljs.core.pr_str.call(null,inst_25471);var inst_25473 = console.log(inst_25472);var state_25674__$1 = (function (){var statearr_25731 = state_25674;(statearr_25731[(25)] = inst_25473);
return statearr_25731;
})();var statearr_25732_25872 = state_25674__$1;(statearr_25732_25872[(2)] = inst_25406);
(statearr_25732_25872[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (44)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25518 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25519 = test.stock4.ema.call(null,inst_25446,(0),inst_25518);var inst_25520 = cljs.core.take.call(null,(10),inst_25519);var inst_25521 = cljs.core.pr_str.call(null,inst_25520);var inst_25522 = console.log(inst_25521);var state_25674__$1 = (function (){var statearr_25733 = state_25674;(statearr_25733[(26)] = inst_25522);
return statearr_25733;
})();var statearr_25734_25873 = state_25674__$1;(statearr_25734_25873[(2)] = inst_25406);
(statearr_25734_25873[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (6)))
{var inst_25672 = (state_25674[(2)]);var state_25674__$1 = state_25674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25674__$1,inst_25672);
} else
{if((state_val_25675 === (28)))
{var inst_25662 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25735_25874 = state_25674__$1;(statearr_25735_25874[(2)] = inst_25662);
(statearr_25735_25874[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (64)))
{var inst_25638 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25736_25875 = state_25674__$1;(statearr_25736_25875[(2)] = inst_25638);
(statearr_25736_25875[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (51)))
{var inst_25445 = (state_25674[(18)]);var inst_25550 = cljs.core._EQ_.call(null,"stock",inst_25445);var state_25674__$1 = state_25674;if(inst_25550)
{var statearr_25737_25876 = state_25674__$1;(statearr_25737_25876[(1)] = (53));
} else
{var statearr_25738_25877 = state_25674__$1;(statearr_25738_25877[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (25)))
{var inst_25664 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25739_25878 = state_25674__$1;(statearr_25739_25878[(2)] = inst_25664);
(statearr_25739_25878[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (34)))
{var inst_25658 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25740_25879 = state_25674__$1;(statearr_25740_25879[(2)] = inst_25658);
(statearr_25740_25879[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (17)))
{var inst_25413 = (state_25674[(17)]);var inst_25439 = cljs.core.seq_QMARK_.call(null,inst_25413);var state_25674__$1 = state_25674;if(inst_25439)
{var statearr_25741_25880 = state_25674__$1;(statearr_25741_25880[(1)] = (20));
} else
{var statearr_25742_25881 = state_25674__$1;(statearr_25742_25881[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (3)))
{var inst_25390 = (state_25674[(19)]);var state_25674__$1 = state_25674;var statearr_25743_25882 = state_25674__$1;(statearr_25743_25882[(2)] = inst_25390);
(statearr_25743_25882[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (12)))
{var inst_25414 = (state_25674[(27)]);var inst_25436 = cljs.core._EQ_.call(null,onView,inst_25414);var state_25674__$1 = state_25674;if(inst_25436)
{var statearr_25744_25883 = state_25674__$1;(statearr_25744_25883[(1)] = (17));
} else
{var statearr_25745_25884 = state_25674__$1;(statearr_25745_25884[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (2)))
{var inst_25390 = (state_25674[(19)]);var inst_25393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25390);var state_25674__$1 = state_25674;var statearr_25746_25885 = state_25674__$1;(statearr_25746_25885[(2)] = inst_25393);
(statearr_25746_25885[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (66)))
{var inst_25406 = (state_25674[(11)]);var inst_25635 = (state_25674[(2)]);var state_25674__$1 = (function (){var statearr_25747 = state_25674;(statearr_25747[(28)] = inst_25635);
return statearr_25747;
})();var statearr_25748_25886 = state_25674__$1;(statearr_25748_25886[(2)] = inst_25406);
(statearr_25748_25886[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (23)))
{var inst_25406 = (state_25674[(11)]);var inst_25452 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25453 = test.stock4.check_length.call(null,inst_25452);var inst_25454 = cljs.core.take.call(null,(10),inst_25453);var inst_25455 = cljs.core.pr_str.call(null,inst_25454);var inst_25456 = console.log(inst_25455);var state_25674__$1 = (function (){var statearr_25749 = state_25674;(statearr_25749[(29)] = inst_25456);
return statearr_25749;
})();var statearr_25750_25887 = state_25674__$1;(statearr_25750_25887[(2)] = inst_25406);
(statearr_25750_25887[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (47)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25526 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25527 = cljs.core.count.call(null,inst_25526);var inst_25528 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25529 = test.stock4.rsv.call(null,inst_25528);var inst_25530 = test.stock4.k.call(null,inst_25446,inst_25529);var inst_25531 = cljs.core.take.call(null,inst_25527,inst_25530);var inst_25532 = ((3) * inst_25446);var inst_25533 = test.stock4.k.call(null,inst_25532,inst_25529);var inst_25534 = cljs.core.take.call(null,inst_25527,inst_25533);var inst_25535 = [null,inst_25531,inst_25534];var inst_25536 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25535,null));var inst_25537 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"kd","kd",771448701),inst_25536);var inst_25538 = draw.call(null,inst_25537);var state_25674__$1 = state_25674;var statearr_25751_25888 = state_25674__$1;(statearr_25751_25888[(2)] = inst_25538);
(statearr_25751_25888[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (35)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25487 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25488 = cljs.core.reverse.call(null,inst_25487);var inst_25489 = test.stock4.yu.call(null,0.5,inst_25446,inst_25488);var inst_25490 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25491 = cljs.core.count.call(null,inst_25490);var inst_25492 = cljs.core.take.call(null,inst_25491,inst_25489);var inst_25493 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"yu","yu",979062608),inst_25492);var inst_25494 = draw.call(null,inst_25493);var state_25674__$1 = state_25674;var statearr_25752_25889 = state_25674__$1;(statearr_25752_25889[(2)] = inst_25494);
(statearr_25752_25889[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (19)))
{var inst_25667 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25753_25890 = state_25674__$1;(statearr_25753_25890[(2)] = inst_25667);
(statearr_25753_25890[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (57)))
{var inst_25445 = (state_25674[(18)]);var inst_25582 = cljs.core._EQ_.call(null,"turn",inst_25445);var state_25674__$1 = state_25674;if(inst_25582)
{var statearr_25754_25891 = state_25674__$1;(statearr_25754_25891[(1)] = (59));
} else
{var statearr_25755_25892 = state_25674__$1;(statearr_25755_25892[(1)] = (60));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (68)))
{var inst_25613 = (state_25674[(9)]);var inst_25599 = (state_25674[(13)]);var inst_25613__$1 = cljs.core.seq.call(null,inst_25599);var state_25674__$1 = (function (){var statearr_25756 = state_25674;(statearr_25756[(9)] = inst_25613__$1);
return statearr_25756;
})();if(inst_25613__$1)
{var statearr_25757_25893 = state_25674__$1;(statearr_25757_25893[(1)] = (70));
} else
{var statearr_25758_25894 = state_25674__$1;(statearr_25758_25894[(1)] = (71));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (11)))
{var inst_25413 = (state_25674[(17)]);var inst_25421 = cljs.core.nth.call(null,inst_25413,(0),null);var inst_25422 = cljs.core.nth.call(null,inst_25413,(1),null);var inst_25426 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_25421);var state_25674__$1 = (function (){var statearr_25759 = state_25674;(statearr_25759[(30)] = inst_25422);
return statearr_25759;
})();if(inst_25426)
{var statearr_25760_25895 = state_25674__$1;(statearr_25760_25895[(1)] = (14));
} else
{var statearr_25761_25896 = state_25674__$1;(statearr_25761_25896[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (9)))
{var inst_25406 = (state_25674[(11)]);var inst_25406__$1 = (state_25674[(2)]);var inst_25407 = cljs.core.get.call(null,inst_25406__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_25409 = [onSystem,onView];var inst_25410 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25409,null));var state_25674__$1 = (function (){var statearr_25762 = state_25674;(statearr_25762[(11)] = inst_25406__$1);
(statearr_25762[(16)] = inst_25407);
return statearr_25762;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25674__$1,(10),inst_25410);
} else
{if((state_val_25675 === (5)))
{var inst_25398 = (state_25674[(15)]);var inst_25401 = cljs.core.seq_QMARK_.call(null,inst_25398);var state_25674__$1 = state_25674;if(inst_25401)
{var statearr_25763_25897 = state_25674__$1;(statearr_25763_25897[(1)] = (7));
} else
{var statearr_25764_25898 = state_25674__$1;(statearr_25764_25898[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (14)))
{var inst_25422 = (state_25674[(30)]);var inst_25406 = (state_25674[(11)]);var inst_25407 = (state_25674[(16)]);var inst_25428 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"info","info",-317069002),inst_25422);var inst_25429 = cljs.core.take.call(null,inst_25407,inst_25422);var inst_25430 = cljs.core.assoc.call(null,inst_25428,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_25429);var inst_25431 = draw.call(null,inst_25430);var state_25674__$1 = state_25674;var statearr_25765_25899 = state_25674__$1;(statearr_25765_25899[(2)] = inst_25431);
(statearr_25765_25899[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (45)))
{var inst_25445 = (state_25674[(18)]);var inst_25524 = cljs.core._EQ_.call(null,"rsv",inst_25445);var state_25674__$1 = state_25674;if(inst_25524)
{var statearr_25766_25900 = state_25674__$1;(statearr_25766_25900[(1)] = (47));
} else
{var statearr_25767_25901 = state_25674__$1;(statearr_25767_25901[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (53)))
{var inst_25396 = (state_25674[(20)]);var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25413 = (state_25674[(17)]);var inst_25445 = (state_25674[(18)]);var inst_25414 = (state_25674[(27)]);var inst_25412 = (state_25674[(31)]);var inst_25398 = (state_25674[(15)]);var inst_25407 = (state_25674[(16)]);var inst_25444 = (state_25674[(23)]);var inst_25570 = cljs.core.async.chan.call(null,(1));var inst_25571 = (function (){var cmd = inst_25445;var input = inst_25444;var expr__25416 = inst_25414;var ctx = inst_25406;var G__25386 = inst_25398;var map__25438 = inst_25444;var expr__25448 = inst_25445;var v = inst_25413;var map__25400 = inst_25406;var pred__25415 = cljs.core._EQ_;var params = inst_25446;var cnt = inst_25407;var ch = inst_25414;var c__6202__auto____$1 = inst_25570;var map__25387 = inst_25396;var vec__25408 = inst_25412;var pred__25447 = cljs.core._EQ_;return ((function (cmd,input,expr__25416,ctx,G__25386,map__25438,expr__25448,v,map__25400,pred__25415,params,cnt,ch,c__6202__auto____$1,map__25387,vec__25408,pred__25447,inst_25396,inst_25446,inst_25406,inst_25413,inst_25445,inst_25414,inst_25412,inst_25398,inst_25407,inst_25444,inst_25570,state_val_25675,c__6202__auto___25824,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,expr__25416,ctx,G__25386,map__25438,expr__25448,v,map__25400,pred__25415,params,cnt,ch,c__6202__auto____$1,map__25387,vec__25408,pred__25447,inst_25396,inst_25446,inst_25406,inst_25413,inst_25445,inst_25414,inst_25412,inst_25398,inst_25407,inst_25444,inst_25570,state_val_25675,c__6202__auto___25824,draw,onSystem,onView){
return (function (state_25568){var state_val_25569 = (state_25568[(1)]);if((state_val_25569 === (6)))
{var inst_25564 = (state_25568[(2)]);var state_25568__$1 = state_25568;var statearr_25768_25902 = state_25568__$1;(statearr_25768_25902[(2)] = inst_25564);
(statearr_25768_25902[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25569 === (5)))
{var inst_25566 = (state_25568[(2)]);var state_25568__$1 = state_25568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25568__$1,inst_25566);
} else
{if((state_val_25569 === (4)))
{var inst_25557 = (state_25568[(7)]);var inst_25561 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_25557];var inst_25562 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25561,null));var state_25568__$1 = state_25568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25568__$1,(6),onSystem,inst_25562);
} else
{if((state_val_25569 === (3)))
{var inst_25556 = (state_25568[(8)]);var inst_25559 = alert(inst_25556);var state_25568__$1 = state_25568;var statearr_25769_25903 = state_25568__$1;(statearr_25769_25903[(2)] = inst_25559);
(statearr_25769_25903[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25569 === (2)))
{var inst_25556 = (state_25568[(8)]);var inst_25555 = (state_25568[(2)]);var inst_25556__$1 = cljs.core.nth.call(null,inst_25555,(0),null);var inst_25557 = cljs.core.nth.call(null,inst_25555,(1),null);var state_25568__$1 = (function (){var statearr_25770 = state_25568;(statearr_25770[(7)] = inst_25557);
(statearr_25770[(8)] = inst_25556__$1);
return statearr_25770;
})();if(cljs.core.truth_(inst_25556__$1))
{var statearr_25771_25904 = state_25568__$1;(statearr_25771_25904[(1)] = (3));
} else
{var statearr_25772_25905 = state_25568__$1;(statearr_25772_25905[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25569 === (1)))
{var inst_25553 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_25568__$1 = state_25568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25568__$1,(2),inst_25553);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,expr__25416,ctx,G__25386,map__25438,expr__25448,v,map__25400,pred__25415,params,cnt,ch,c__6202__auto____$1,map__25387,vec__25408,pred__25447,inst_25396,inst_25446,inst_25406,inst_25413,inst_25445,inst_25414,inst_25412,inst_25398,inst_25407,inst_25444,inst_25570,state_val_25675,c__6202__auto___25824,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,expr__25416,ctx,G__25386,map__25438,expr__25448,v,map__25400,pred__25415,params,cnt,ch,c__6202__auto____$1,map__25387,vec__25408,pred__25447,inst_25396,inst_25446,inst_25406,inst_25413,inst_25445,inst_25414,inst_25412,inst_25398,inst_25407,inst_25444,inst_25570,state_val_25675,c__6202__auto___25824,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25776 = [null,null,null,null,null,null,null,null,null];(statearr_25776[(0)] = state_machine__6188__auto__);
(statearr_25776[(1)] = (1));
return statearr_25776;
});
var state_machine__6188__auto____1 = (function (state_25568){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25568);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25777){if((e25777 instanceof Object))
{var ex__6191__auto__ = e25777;var statearr_25778_25906 = state_25568;(statearr_25778_25906[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25907 = state_25568;
state_25568 = G__25907;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25568){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,expr__25416,ctx,G__25386,map__25438,expr__25448,v,map__25400,pred__25415,params,cnt,ch,c__6202__auto____$1,map__25387,vec__25408,pred__25447,inst_25396,inst_25446,inst_25406,inst_25413,inst_25445,inst_25414,inst_25412,inst_25398,inst_25407,inst_25444,inst_25570,state_val_25675,c__6202__auto___25824,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_25779 = f__6203__auto__.call(null);(statearr_25779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_25779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,expr__25416,ctx,G__25386,map__25438,expr__25448,v,map__25400,pred__25415,params,cnt,ch,c__6202__auto____$1,map__25387,vec__25408,pred__25447,inst_25396,inst_25446,inst_25406,inst_25413,inst_25445,inst_25414,inst_25412,inst_25398,inst_25407,inst_25444,inst_25570,state_val_25675,c__6202__auto___25824,draw,onSystem,onView))
})();var inst_25572 = cljs.core.async.impl.dispatch.run.call(null,inst_25571);var state_25674__$1 = (function (){var statearr_25780 = state_25674;(statearr_25780[(32)] = inst_25572);
return statearr_25780;
})();var statearr_25781_25908 = state_25674__$1;(statearr_25781_25908[(2)] = inst_25406);
(statearr_25781_25908[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (26)))
{var inst_25406 = (state_25674[(11)]);var inst_25460 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25461 = test.stock4.obv.call(null,inst_25460);var inst_25462 = cljs.core.count.call(null,inst_25460);var inst_25463 = cljs.core.take.call(null,inst_25462,inst_25461);var inst_25464 = cljs.core.pr_str.call(null,inst_25463);var inst_25465 = console.log(inst_25464);var state_25674__$1 = (function (){var statearr_25782 = state_25674;(statearr_25782[(33)] = inst_25465);
return statearr_25782;
})();var statearr_25783_25909 = state_25674__$1;(statearr_25783_25909[(2)] = inst_25406);
(statearr_25783_25909[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (16)))
{var inst_25434 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25784_25910 = state_25674__$1;(statearr_25784_25910[(2)] = inst_25434);
(statearr_25784_25910[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (38)))
{var inst_25446 = (state_25674[(10)]);var inst_25406 = (state_25674[(11)]);var inst_25498 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25499 = test.stock4.sd.call(null,inst_25446,inst_25498);var inst_25500 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25501 = test.stock4.z_score.call(null,inst_25446,inst_25500);var inst_25502 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_25406);var inst_25503 = cljs.core.count.call(null,inst_25502);var inst_25504 = cljs.core.take.call(null,inst_25503,inst_25499);var inst_25505 = cljs.core.assoc.call(null,inst_25406,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_25504);var inst_25506 = draw.call(null,inst_25505);var state_25674__$1 = (function (){var statearr_25785 = state_25674;(statearr_25785[(34)] = inst_25501);
return statearr_25785;
})();var statearr_25786_25911 = state_25674__$1;(statearr_25786_25911[(2)] = inst_25506);
(statearr_25786_25911[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (30)))
{var inst_25445 = (state_25674[(18)]);var inst_25475 = cljs.core._EQ_.call(null,"yu-pre",inst_25445);var state_25674__$1 = state_25674;if(inst_25475)
{var statearr_25787_25912 = state_25674__$1;(statearr_25787_25912[(1)] = (32));
} else
{var statearr_25788_25913 = state_25674__$1;(statearr_25788_25913[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (73)))
{var inst_25613 = (state_25674[(9)]);var inst_25617 = cljs.core.chunk_first.call(null,inst_25613);var inst_25618 = cljs.core.chunk_rest.call(null,inst_25613);var inst_25619 = cljs.core.count.call(null,inst_25617);var inst_25599 = inst_25618;var inst_25600 = inst_25617;var inst_25601 = inst_25619;var inst_25602 = (0);var state_25674__$1 = (function (){var statearr_25789 = state_25674;(statearr_25789[(7)] = inst_25602);
(statearr_25789[(12)] = inst_25600);
(statearr_25789[(8)] = inst_25601);
(statearr_25789[(13)] = inst_25599);
return statearr_25789;
})();var statearr_25790_25914 = state_25674__$1;(statearr_25790_25914[(2)] = null);
(statearr_25790_25914[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (10)))
{var inst_25414 = (state_25674[(27)]);var inst_25412 = (state_25674[(31)]);var inst_25412__$1 = (state_25674[(2)]);var inst_25413 = cljs.core.nth.call(null,inst_25412__$1,(0),null);var inst_25414__$1 = cljs.core.nth.call(null,inst_25412__$1,(1),null);var inst_25418 = cljs.core._EQ_.call(null,onSystem,inst_25414__$1);var state_25674__$1 = (function (){var statearr_25791 = state_25674;(statearr_25791[(17)] = inst_25413);
(statearr_25791[(27)] = inst_25414__$1);
(statearr_25791[(31)] = inst_25412__$1);
return statearr_25791;
})();if(inst_25418)
{var statearr_25792_25915 = state_25674__$1;(statearr_25792_25915[(1)] = (11));
} else
{var statearr_25793_25916 = state_25674__$1;(statearr_25793_25916[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (18)))
{var inst_25406 = (state_25674[(11)]);var state_25674__$1 = state_25674;var statearr_25797_25917 = state_25674__$1;(statearr_25797_25917[(2)] = inst_25406);
(statearr_25797_25917[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (52)))
{var inst_25646 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25798_25918 = state_25674__$1;(statearr_25798_25918[(2)] = inst_25646);
(statearr_25798_25918[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (67)))
{var inst_25602 = (state_25674[(7)]);var inst_25600 = (state_25674[(12)]);var inst_25601 = (state_25674[(8)]);var inst_25599 = (state_25674[(13)]);var inst_25607 = cljs.core._nth.call(null,inst_25600,inst_25602);var inst_25608 = cljs.core.pr_str.call(null,inst_25607);var inst_25609 = console.log(inst_25608);var inst_25610 = (inst_25602 + (1));var tmp25794 = inst_25600;var tmp25795 = inst_25601;var tmp25796 = inst_25599;var inst_25599__$1 = tmp25796;var inst_25600__$1 = tmp25794;var inst_25601__$1 = tmp25795;var inst_25602__$1 = inst_25610;var state_25674__$1 = (function (){var statearr_25799 = state_25674;(statearr_25799[(7)] = inst_25602__$1);
(statearr_25799[(35)] = inst_25609);
(statearr_25799[(12)] = inst_25600__$1);
(statearr_25799[(8)] = inst_25601__$1);
(statearr_25799[(13)] = inst_25599__$1);
return statearr_25799;
})();var statearr_25800_25919 = state_25674__$1;(statearr_25800_25919[(2)] = null);
(statearr_25800_25919[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (71)))
{var state_25674__$1 = state_25674;var statearr_25801_25920 = state_25674__$1;(statearr_25801_25920[(2)] = null);
(statearr_25801_25920[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (42)))
{var inst_25445 = (state_25674[(18)]);var inst_25516 = cljs.core._EQ_.call(null,"ema",inst_25445);var state_25674__$1 = state_25674;if(inst_25516)
{var statearr_25802_25921 = state_25674__$1;(statearr_25802_25921[(1)] = (44));
} else
{var statearr_25803_25922 = state_25674__$1;(statearr_25803_25922[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (37)))
{var inst_25656 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25804_25923 = state_25674__$1;(statearr_25804_25923[(2)] = inst_25656);
(statearr_25804_25923[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (63)))
{var inst_25406 = (state_25674[(11)]);var state_25674__$1 = state_25674;var statearr_25805_25924 = state_25674__$1;(statearr_25805_25924[(2)] = inst_25406);
(statearr_25805_25924[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (8)))
{var inst_25398 = (state_25674[(15)]);var state_25674__$1 = state_25674;var statearr_25806_25925 = state_25674__$1;(statearr_25806_25925[(2)] = inst_25398);
(statearr_25806_25925[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25675 === (49)))
{var inst_25648 = (state_25674[(2)]);var state_25674__$1 = state_25674;var statearr_25807_25926 = state_25674__$1;(statearr_25807_25926[(2)] = inst_25648);
(statearr_25807_25926[(1)] = (46));
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
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___25824,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___25824,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25811[(0)] = state_machine__6188__auto__);
(statearr_25811[(1)] = (1));
return statearr_25811;
});
var state_machine__6188__auto____1 = (function (state_25674){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25674);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25812){if((e25812 instanceof Object))
{var ex__6191__auto__ = e25812;var statearr_25813_25927 = state_25674;(statearr_25813_25927[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25928 = state_25674;
state_25674 = G__25928;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25674){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___25824,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_25814 = f__6203__auto__.call(null);(statearr_25814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___25824);
return statearr_25814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___25824,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
