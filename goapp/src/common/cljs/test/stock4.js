// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__15111_SHARP_){return cljs.core.nth.call(null,p1__15111_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__15112_SHARP_){return cljs.core.nth.call(null,p1__15112_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__15120 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15120,(0),null);var min_v = cljs.core.nth.call(null,vec__15120,(1),null);var offset_v = cljs.core.nth.call(null,vec__15120,(2),null);var offset_x = cljs.core.nth.call(null,vec__15120,(3),null);var pos_y = cljs.core.nth.call(null,vec__15120,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__15121_15127 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15120,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__15131__delegate = function (args){return args;
};
var G__15131 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15131__delegate.call(this,args);};
G__15131.cljs$lang$maxFixedArity = 0;
G__15131.cljs$lang$applyTo = (function (arglist__15132){
var args = cljs.core.seq(arglist__15132);
return G__15131__delegate(args);
});
G__15131.cljs$core$IFn$_invoke$arity$variadic = G__15131__delegate;
return G__15131;
})()
;})(vec__15120,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__15122_15128 = null;var count__15123_15129 = (0);var i__15124_15130 = (0);while(true){
if((i__15124_15130 < count__15123_15129))
{var vec__15125_15133 = cljs.core._nth.call(null,chunk__15122_15128,i__15124_15130);var idx_15134 = cljs.core.nth.call(null,vec__15125_15133,(0),null);var prev_15135 = cljs.core.nth.call(null,vec__15125_15133,(1),null);var curr_15136 = cljs.core.nth.call(null,vec__15125_15133,(2),null);if((typeof prev_15135 === 'number') && (typeof curr_15136 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_15134 * offset_x),(((1) - prev_15135) * h));
ctx.lineTo(((idx_15134 + (1)) * offset_x),(((1) - curr_15136) * h));
ctx.stroke();
} else
{}
{
var G__15137 = seq__15121_15127;
var G__15138 = chunk__15122_15128;
var G__15139 = count__15123_15129;
var G__15140 = (i__15124_15130 + (1));
seq__15121_15127 = G__15137;
chunk__15122_15128 = G__15138;
count__15123_15129 = G__15139;
i__15124_15130 = G__15140;
continue;
}
} else
{var temp__4126__auto___15141 = cljs.core.seq.call(null,seq__15121_15127);if(temp__4126__auto___15141)
{var seq__15121_15142__$1 = temp__4126__auto___15141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15121_15142__$1))
{var c__4307__auto___15143 = cljs.core.chunk_first.call(null,seq__15121_15142__$1);{
var G__15144 = cljs.core.chunk_rest.call(null,seq__15121_15142__$1);
var G__15145 = c__4307__auto___15143;
var G__15146 = cljs.core.count.call(null,c__4307__auto___15143);
var G__15147 = (0);
seq__15121_15127 = G__15144;
chunk__15122_15128 = G__15145;
count__15123_15129 = G__15146;
i__15124_15130 = G__15147;
continue;
}
} else
{var vec__15126_15148 = cljs.core.first.call(null,seq__15121_15142__$1);var idx_15149 = cljs.core.nth.call(null,vec__15126_15148,(0),null);var prev_15150 = cljs.core.nth.call(null,vec__15126_15148,(1),null);var curr_15151 = cljs.core.nth.call(null,vec__15126_15148,(2),null);if((typeof prev_15150 === 'number') && (typeof curr_15151 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_15149 * offset_x),(((1) - prev_15150) * h));
ctx.lineTo(((idx_15149 + (1)) * offset_x),(((1) - curr_15151) * h));
ctx.stroke();
} else
{}
{
var G__15152 = cljs.core.next.call(null,seq__15121_15142__$1);
var G__15153 = null;
var G__15154 = (0);
var G__15155 = (0);
seq__15121_15127 = G__15152;
chunk__15122_15128 = G__15153;
count__15123_15129 = G__15154;
i__15124_15130 = G__15155;
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
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__15167 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15167,(0),null);var min_v = cljs.core.nth.call(null,vec__15167,(1),null);var offset_v = cljs.core.nth.call(null,vec__15167,(2),null);var offset_x = cljs.core.nth.call(null,vec__15167,(3),null);var pos_y = cljs.core.nth.call(null,vec__15167,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__15168_15178 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15167,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__15182__delegate = function (args){return args;
};
var G__15182 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15182__delegate.call(this,args);};
G__15182.cljs$lang$maxFixedArity = 0;
G__15182.cljs$lang$applyTo = (function (arglist__15183){
var args = cljs.core.seq(arglist__15183);
return G__15182__delegate(args);
});
G__15182.cljs$core$IFn$_invoke$arity$variadic = G__15182__delegate;
return G__15182;
})()
;})(vec__15167,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__15169_15179 = null;var count__15170_15180 = (0);var i__15171_15181 = (0);while(true){
if((i__15171_15181 < count__15170_15180))
{var vec__15172_15184 = cljs.core._nth.call(null,chunk__15169_15179,i__15171_15181);var idx_15185 = cljs.core.nth.call(null,vec__15172_15184,(0),null);var vec__15173_15186 = cljs.core.nth.call(null,vec__15172_15184,(1),null);var avg_15187 = cljs.core.nth.call(null,vec__15173_15186,(0),null);var sd_v_15188 = cljs.core.nth.call(null,vec__15173_15186,(1),null);var vec__15174_15189 = cljs.core.nth.call(null,vec__15172_15184,(2),null);var __15190 = cljs.core.nth.call(null,vec__15174_15189,(0),null);var __15191__$1 = cljs.core.nth.call(null,vec__15174_15189,(1),null);var __15192__$2 = cljs.core.nth.call(null,vec__15174_15189,(2),null);var __15193__$3 = cljs.core.nth.call(null,vec__15174_15189,(3),null);var close_15194 = cljs.core.nth.call(null,vec__15174_15189,(4),null);var __15195__$4 = cljs.core.nth.call(null,vec__15174_15189,(5),null);(ctx["strokeStyle"] = (((avg_15187 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_15185 * offset_x),pos_y.call(null,(avg_15187 + close_15194)));
ctx.lineTo(((idx_15185 + (1)) * offset_x),pos_y.call(null,(avg_15187 + close_15194)));
ctx.stroke();
ctx.moveTo((idx_15185 * offset_x),pos_y.call(null,(((avg_15187 + close_15194) + sd_v_15188) + sd_v_15188)));
ctx.lineTo(((idx_15185 + (1)) * offset_x),pos_y.call(null,(((avg_15187 + close_15194) + sd_v_15188) + sd_v_15188)));
ctx.stroke();
ctx.moveTo((idx_15185 * offset_x),pos_y.call(null,(((avg_15187 + close_15194) - sd_v_15188) - sd_v_15188)));
ctx.lineTo(((idx_15185 + (1)) * offset_x),pos_y.call(null,(((avg_15187 + close_15194) - sd_v_15188) - sd_v_15188)));
ctx.stroke();
{
var G__15196 = seq__15168_15178;
var G__15197 = chunk__15169_15179;
var G__15198 = count__15170_15180;
var G__15199 = (i__15171_15181 + (1));
seq__15168_15178 = G__15196;
chunk__15169_15179 = G__15197;
count__15170_15180 = G__15198;
i__15171_15181 = G__15199;
continue;
}
} else
{var temp__4126__auto___15200 = cljs.core.seq.call(null,seq__15168_15178);if(temp__4126__auto___15200)
{var seq__15168_15201__$1 = temp__4126__auto___15200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15168_15201__$1))
{var c__4307__auto___15202 = cljs.core.chunk_first.call(null,seq__15168_15201__$1);{
var G__15203 = cljs.core.chunk_rest.call(null,seq__15168_15201__$1);
var G__15204 = c__4307__auto___15202;
var G__15205 = cljs.core.count.call(null,c__4307__auto___15202);
var G__15206 = (0);
seq__15168_15178 = G__15203;
chunk__15169_15179 = G__15204;
count__15170_15180 = G__15205;
i__15171_15181 = G__15206;
continue;
}
} else
{var vec__15175_15207 = cljs.core.first.call(null,seq__15168_15201__$1);var idx_15208 = cljs.core.nth.call(null,vec__15175_15207,(0),null);var vec__15176_15209 = cljs.core.nth.call(null,vec__15175_15207,(1),null);var avg_15210 = cljs.core.nth.call(null,vec__15176_15209,(0),null);var sd_v_15211 = cljs.core.nth.call(null,vec__15176_15209,(1),null);var vec__15177_15212 = cljs.core.nth.call(null,vec__15175_15207,(2),null);var __15213 = cljs.core.nth.call(null,vec__15177_15212,(0),null);var __15214__$1 = cljs.core.nth.call(null,vec__15177_15212,(1),null);var __15215__$2 = cljs.core.nth.call(null,vec__15177_15212,(2),null);var __15216__$3 = cljs.core.nth.call(null,vec__15177_15212,(3),null);var close_15217 = cljs.core.nth.call(null,vec__15177_15212,(4),null);var __15218__$4 = cljs.core.nth.call(null,vec__15177_15212,(5),null);(ctx["strokeStyle"] = (((avg_15210 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_15208 * offset_x),pos_y.call(null,(avg_15210 + close_15217)));
ctx.lineTo(((idx_15208 + (1)) * offset_x),pos_y.call(null,(avg_15210 + close_15217)));
ctx.stroke();
ctx.moveTo((idx_15208 * offset_x),pos_y.call(null,(((avg_15210 + close_15217) + sd_v_15211) + sd_v_15211)));
ctx.lineTo(((idx_15208 + (1)) * offset_x),pos_y.call(null,(((avg_15210 + close_15217) + sd_v_15211) + sd_v_15211)));
ctx.stroke();
ctx.moveTo((idx_15208 * offset_x),pos_y.call(null,(((avg_15210 + close_15217) - sd_v_15211) - sd_v_15211)));
ctx.lineTo(((idx_15208 + (1)) * offset_x),pos_y.call(null,(((avg_15210 + close_15217) - sd_v_15211) - sd_v_15211)));
ctx.stroke();
{
var G__15219 = cljs.core.next.call(null,seq__15168_15201__$1);
var G__15220 = null;
var G__15221 = (0);
var G__15222 = (0);
seq__15168_15178 = G__15219;
chunk__15169_15179 = G__15220;
count__15170_15180 = G__15221;
i__15171_15181 = G__15222;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__15230 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15230,(0),null);var min_v = cljs.core.nth.call(null,vec__15230,(1),null);var offset_v = cljs.core.nth.call(null,vec__15230,(2),null);var offset_x = cljs.core.nth.call(null,vec__15230,(3),null);var pos_y = cljs.core.nth.call(null,vec__15230,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__15231_15237 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15230,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__15241__delegate = function (args){return args;
};
var G__15241 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15241__delegate.call(this,args);};
G__15241.cljs$lang$maxFixedArity = 0;
G__15241.cljs$lang$applyTo = (function (arglist__15242){
var args = cljs.core.seq(arglist__15242);
return G__15241__delegate(args);
});
G__15241.cljs$core$IFn$_invoke$arity$variadic = G__15241__delegate;
return G__15241;
})()
;})(vec__15230,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__15232_15238 = null;var count__15233_15239 = (0);var i__15234_15240 = (0);while(true){
if((i__15234_15240 < count__15233_15239))
{var vec__15235_15243 = cljs.core._nth.call(null,chunk__15232_15238,i__15234_15240);var idx_15244 = cljs.core.nth.call(null,vec__15235_15243,(0),null);var prev_15245 = cljs.core.nth.call(null,vec__15235_15243,(1),null);var curr_15246 = cljs.core.nth.call(null,vec__15235_15243,(2),null);if((typeof prev_15245 === 'number') && (typeof curr_15246 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_15244 * offset_x),pos_y.call(null,prev_15245));
ctx.lineTo(((idx_15244 + (1)) * offset_x),pos_y.call(null,curr_15246));
ctx.stroke();
} else
{}
{
var G__15247 = seq__15231_15237;
var G__15248 = chunk__15232_15238;
var G__15249 = count__15233_15239;
var G__15250 = (i__15234_15240 + (1));
seq__15231_15237 = G__15247;
chunk__15232_15238 = G__15248;
count__15233_15239 = G__15249;
i__15234_15240 = G__15250;
continue;
}
} else
{var temp__4126__auto___15251 = cljs.core.seq.call(null,seq__15231_15237);if(temp__4126__auto___15251)
{var seq__15231_15252__$1 = temp__4126__auto___15251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15231_15252__$1))
{var c__4307__auto___15253 = cljs.core.chunk_first.call(null,seq__15231_15252__$1);{
var G__15254 = cljs.core.chunk_rest.call(null,seq__15231_15252__$1);
var G__15255 = c__4307__auto___15253;
var G__15256 = cljs.core.count.call(null,c__4307__auto___15253);
var G__15257 = (0);
seq__15231_15237 = G__15254;
chunk__15232_15238 = G__15255;
count__15233_15239 = G__15256;
i__15234_15240 = G__15257;
continue;
}
} else
{var vec__15236_15258 = cljs.core.first.call(null,seq__15231_15252__$1);var idx_15259 = cljs.core.nth.call(null,vec__15236_15258,(0),null);var prev_15260 = cljs.core.nth.call(null,vec__15236_15258,(1),null);var curr_15261 = cljs.core.nth.call(null,vec__15236_15258,(2),null);if((typeof prev_15260 === 'number') && (typeof curr_15261 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_15259 * offset_x),pos_y.call(null,prev_15260));
ctx.lineTo(((idx_15259 + (1)) * offset_x),pos_y.call(null,curr_15261));
ctx.stroke();
} else
{}
{
var G__15262 = cljs.core.next.call(null,seq__15231_15252__$1);
var G__15263 = null;
var G__15264 = (0);
var G__15265 = (0);
seq__15231_15237 = G__15262;
chunk__15232_15238 = G__15263;
count__15233_15239 = G__15264;
i__15234_15240 = G__15265;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__15266){var vec__15281 = p__15266;var rsv = cljs.core.nth.call(null,vec__15281,(0),null);var k = cljs.core.nth.call(null,vec__15281,(1),null);var d = cljs.core.nth.call(null,vec__15281,(2),null);var kd = vec__15281;var vec__15282 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15282,(0),null);var min_v = cljs.core.nth.call(null,vec__15282,(1),null);var offset_v = cljs.core.nth.call(null,vec__15282,(2),null);var offset_x = cljs.core.nth.call(null,vec__15282,(3),null);var pos_y = cljs.core.nth.call(null,vec__15282,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__15283_15295 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15282,max_v,min_v,offset_v,offset_x,pos_y,vec__15281,rsv,k,d,kd){
return (function() { 
var G__15299__delegate = function (args){return args;
};
var G__15299 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15299__delegate.call(this,args);};
G__15299.cljs$lang$maxFixedArity = 0;
G__15299.cljs$lang$applyTo = (function (arglist__15300){
var args = cljs.core.seq(arglist__15300);
return G__15299__delegate(args);
});
G__15299.cljs$core$IFn$_invoke$arity$variadic = G__15299__delegate;
return G__15299;
})()
;})(vec__15282,max_v,min_v,offset_v,offset_x,pos_y,vec__15281,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__15284_15296 = null;var count__15285_15297 = (0);var i__15286_15298 = (0);while(true){
if((i__15286_15298 < count__15285_15297))
{var vec__15287_15301 = cljs.core._nth.call(null,chunk__15284_15296,i__15286_15298);var idx_15302 = cljs.core.nth.call(null,vec__15287_15301,(0),null);var prev_15303 = cljs.core.nth.call(null,vec__15287_15301,(1),null);var curr_15304 = cljs.core.nth.call(null,vec__15287_15301,(2),null);ctx.beginPath();
ctx.moveTo((idx_15302 * offset_x),(((1) - (prev_15303 / (100))) * h));
ctx.lineTo(((idx_15302 + (1)) * offset_x),(((1) - (curr_15304 / (100))) * h));
ctx.stroke();
{
var G__15305 = seq__15283_15295;
var G__15306 = chunk__15284_15296;
var G__15307 = count__15285_15297;
var G__15308 = (i__15286_15298 + (1));
seq__15283_15295 = G__15305;
chunk__15284_15296 = G__15306;
count__15285_15297 = G__15307;
i__15286_15298 = G__15308;
continue;
}
} else
{var temp__4126__auto___15309 = cljs.core.seq.call(null,seq__15283_15295);if(temp__4126__auto___15309)
{var seq__15283_15310__$1 = temp__4126__auto___15309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15283_15310__$1))
{var c__4307__auto___15311 = cljs.core.chunk_first.call(null,seq__15283_15310__$1);{
var G__15312 = cljs.core.chunk_rest.call(null,seq__15283_15310__$1);
var G__15313 = c__4307__auto___15311;
var G__15314 = cljs.core.count.call(null,c__4307__auto___15311);
var G__15315 = (0);
seq__15283_15295 = G__15312;
chunk__15284_15296 = G__15313;
count__15285_15297 = G__15314;
i__15286_15298 = G__15315;
continue;
}
} else
{var vec__15288_15316 = cljs.core.first.call(null,seq__15283_15310__$1);var idx_15317 = cljs.core.nth.call(null,vec__15288_15316,(0),null);var prev_15318 = cljs.core.nth.call(null,vec__15288_15316,(1),null);var curr_15319 = cljs.core.nth.call(null,vec__15288_15316,(2),null);ctx.beginPath();
ctx.moveTo((idx_15317 * offset_x),(((1) - (prev_15318 / (100))) * h));
ctx.lineTo(((idx_15317 + (1)) * offset_x),(((1) - (curr_15319 / (100))) * h));
ctx.stroke();
{
var G__15320 = cljs.core.next.call(null,seq__15283_15310__$1);
var G__15321 = null;
var G__15322 = (0);
var G__15323 = (0);
seq__15283_15295 = G__15320;
chunk__15284_15296 = G__15321;
count__15285_15297 = G__15322;
i__15286_15298 = G__15323;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__15289_15324 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15282,max_v,min_v,offset_v,offset_x,pos_y,vec__15281,rsv,k,d,kd){
return (function() { 
var G__15328__delegate = function (args){return args;
};
var G__15328 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15328__delegate.call(this,args);};
G__15328.cljs$lang$maxFixedArity = 0;
G__15328.cljs$lang$applyTo = (function (arglist__15329){
var args = cljs.core.seq(arglist__15329);
return G__15328__delegate(args);
});
G__15328.cljs$core$IFn$_invoke$arity$variadic = G__15328__delegate;
return G__15328;
})()
;})(vec__15282,max_v,min_v,offset_v,offset_x,pos_y,vec__15281,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__15290_15325 = null;var count__15291_15326 = (0);var i__15292_15327 = (0);while(true){
if((i__15292_15327 < count__15291_15326))
{var vec__15293_15330 = cljs.core._nth.call(null,chunk__15290_15325,i__15292_15327);var idx_15331 = cljs.core.nth.call(null,vec__15293_15330,(0),null);var prev_15332 = cljs.core.nth.call(null,vec__15293_15330,(1),null);var curr_15333 = cljs.core.nth.call(null,vec__15293_15330,(2),null);ctx.beginPath();
ctx.moveTo((idx_15331 * offset_x),(((1) - (prev_15332 / (100))) * h));
ctx.lineTo(((idx_15331 + (1)) * offset_x),(((1) - (curr_15333 / (100))) * h));
ctx.stroke();
{
var G__15334 = seq__15289_15324;
var G__15335 = chunk__15290_15325;
var G__15336 = count__15291_15326;
var G__15337 = (i__15292_15327 + (1));
seq__15289_15324 = G__15334;
chunk__15290_15325 = G__15335;
count__15291_15326 = G__15336;
i__15292_15327 = G__15337;
continue;
}
} else
{var temp__4126__auto___15338 = cljs.core.seq.call(null,seq__15289_15324);if(temp__4126__auto___15338)
{var seq__15289_15339__$1 = temp__4126__auto___15338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15289_15339__$1))
{var c__4307__auto___15340 = cljs.core.chunk_first.call(null,seq__15289_15339__$1);{
var G__15341 = cljs.core.chunk_rest.call(null,seq__15289_15339__$1);
var G__15342 = c__4307__auto___15340;
var G__15343 = cljs.core.count.call(null,c__4307__auto___15340);
var G__15344 = (0);
seq__15289_15324 = G__15341;
chunk__15290_15325 = G__15342;
count__15291_15326 = G__15343;
i__15292_15327 = G__15344;
continue;
}
} else
{var vec__15294_15345 = cljs.core.first.call(null,seq__15289_15339__$1);var idx_15346 = cljs.core.nth.call(null,vec__15294_15345,(0),null);var prev_15347 = cljs.core.nth.call(null,vec__15294_15345,(1),null);var curr_15348 = cljs.core.nth.call(null,vec__15294_15345,(2),null);ctx.beginPath();
ctx.moveTo((idx_15346 * offset_x),(((1) - (prev_15347 / (100))) * h));
ctx.lineTo(((idx_15346 + (1)) * offset_x),(((1) - (curr_15348 / (100))) * h));
ctx.stroke();
{
var G__15349 = cljs.core.next.call(null,seq__15289_15339__$1);
var G__15350 = null;
var G__15351 = (0);
var G__15352 = (0);
seq__15289_15324 = G__15349;
chunk__15290_15325 = G__15350;
count__15291_15326 = G__15351;
i__15292_15327 = G__15352;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__15363 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15363,(0),null);var min_v = cljs.core.nth.call(null,vec__15363,(1),null);var offset_v = cljs.core.nth.call(null,vec__15363,(2),null);var offset_x = cljs.core.nth.call(null,vec__15363,(3),null);var pos_y = cljs.core.nth.call(null,vec__15363,(4),null);(ctx["fillStyle"] = "black");
var seq__15364 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15363,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__15372__delegate = function (args){return args;
};
var G__15372 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15372__delegate.call(this,args);};
G__15372.cljs$lang$maxFixedArity = 0;
G__15372.cljs$lang$applyTo = (function (arglist__15373){
var args = cljs.core.seq(arglist__15373);
return G__15372__delegate(args);
});
G__15372.cljs$core$IFn$_invoke$arity$variadic = G__15372__delegate;
return G__15372;
})()
;})(vec__15363,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__15365 = null;var count__15366 = (0);var i__15367 = (0);while(true){
if((i__15367 < count__15366))
{var vec__15368 = cljs.core._nth.call(null,chunk__15365,i__15367);var idx = cljs.core.nth.call(null,vec__15368,(0),null);var vec__15369 = cljs.core.nth.call(null,vec__15368,(1),null);var date = cljs.core.nth.call(null,vec__15369,(0),null);var _ = cljs.core.nthnext.call(null,vec__15369,(1));var line = vec__15369;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__15364,chunk__15365,count__15366,i__15367,vec__15368,idx,vec__15369,date,_,line,vec__15363,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__15353_SHARP_){return cljs.core._EQ_.call(null,date,p1__15353_SHARP_);
});})(seq__15364,chunk__15365,count__15366,i__15367,vec__15368,idx,vec__15369,date,_,line,vec__15363,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__15374 = seq__15364;
var G__15375 = chunk__15365;
var G__15376 = count__15366;
var G__15377 = (i__15367 + (1));
seq__15364 = G__15374;
chunk__15365 = G__15375;
count__15366 = G__15376;
i__15367 = G__15377;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15364);if(temp__4126__auto__)
{var seq__15364__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15364__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15364__$1);{
var G__15378 = cljs.core.chunk_rest.call(null,seq__15364__$1);
var G__15379 = c__4307__auto__;
var G__15380 = cljs.core.count.call(null,c__4307__auto__);
var G__15381 = (0);
seq__15364 = G__15378;
chunk__15365 = G__15379;
count__15366 = G__15380;
i__15367 = G__15381;
continue;
}
} else
{var vec__15370 = cljs.core.first.call(null,seq__15364__$1);var idx = cljs.core.nth.call(null,vec__15370,(0),null);var vec__15371 = cljs.core.nth.call(null,vec__15370,(1),null);var date = cljs.core.nth.call(null,vec__15371,(0),null);var _ = cljs.core.nthnext.call(null,vec__15371,(1));var line = vec__15371;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__15364,chunk__15365,count__15366,i__15367,vec__15370,idx,vec__15371,date,_,line,seq__15364__$1,temp__4126__auto__,vec__15363,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__15353_SHARP_){return cljs.core._EQ_.call(null,date,p1__15353_SHARP_);
});})(seq__15364,chunk__15365,count__15366,i__15367,vec__15370,idx,vec__15371,date,_,line,seq__15364__$1,temp__4126__auto__,vec__15363,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__15382 = cljs.core.next.call(null,seq__15364__$1);
var G__15383 = null;
var G__15384 = (0);
var G__15385 = (0);
seq__15364 = G__15382;
chunk__15365 = G__15383;
count__15366 = G__15384;
i__15367 = G__15385;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__15395 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15395,(0),null);var min_v = cljs.core.nth.call(null,vec__15395,(1),null);var offset_v = cljs.core.nth.call(null,vec__15395,(2),null);var offset_x = cljs.core.nth.call(null,vec__15395,(3),null);var pos_y = cljs.core.nth.call(null,vec__15395,(4),null);var seq__15396 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15395,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__15404__delegate = function (args){return args;
};
var G__15404 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15404__delegate.call(this,args);};
G__15404.cljs$lang$maxFixedArity = 0;
G__15404.cljs$lang$applyTo = (function (arglist__15405){
var args = cljs.core.seq(arglist__15405);
return G__15404__delegate(args);
});
G__15404.cljs$core$IFn$_invoke$arity$variadic = G__15404__delegate;
return G__15404;
})()
;})(vec__15395,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__15397 = null;var count__15398 = (0);var i__15399 = (0);while(true){
if((i__15399 < count__15398))
{var vec__15400 = cljs.core._nth.call(null,chunk__15397,i__15399);var idx = cljs.core.nth.call(null,vec__15400,(0),null);var vec__15401 = cljs.core.nth.call(null,vec__15400,(1),null);var date = cljs.core.nth.call(null,vec__15401,(0),null);var open = cljs.core.nth.call(null,vec__15401,(1),null);var high = cljs.core.nth.call(null,vec__15401,(2),null);var low = cljs.core.nth.call(null,vec__15401,(3),null);var close = cljs.core.nth.call(null,vec__15401,(4),null);var volume = cljs.core.nth.call(null,vec__15401,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__15406 = seq__15396;
var G__15407 = chunk__15397;
var G__15408 = count__15398;
var G__15409 = (i__15399 + (1));
seq__15396 = G__15406;
chunk__15397 = G__15407;
count__15398 = G__15408;
i__15399 = G__15409;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15396);if(temp__4126__auto__)
{var seq__15396__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15396__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15396__$1);{
var G__15410 = cljs.core.chunk_rest.call(null,seq__15396__$1);
var G__15411 = c__4307__auto__;
var G__15412 = cljs.core.count.call(null,c__4307__auto__);
var G__15413 = (0);
seq__15396 = G__15410;
chunk__15397 = G__15411;
count__15398 = G__15412;
i__15399 = G__15413;
continue;
}
} else
{var vec__15402 = cljs.core.first.call(null,seq__15396__$1);var idx = cljs.core.nth.call(null,vec__15402,(0),null);var vec__15403 = cljs.core.nth.call(null,vec__15402,(1),null);var date = cljs.core.nth.call(null,vec__15403,(0),null);var open = cljs.core.nth.call(null,vec__15403,(1),null);var high = cljs.core.nth.call(null,vec__15403,(2),null);var low = cljs.core.nth.call(null,vec__15403,(3),null);var close = cljs.core.nth.call(null,vec__15403,(4),null);var volume = cljs.core.nth.call(null,vec__15403,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__15414 = cljs.core.next.call(null,seq__15396__$1);
var G__15415 = null;
var G__15416 = (0);
var G__15417 = (0);
seq__15396 = G__15414;
chunk__15397 = G__15415;
count__15398 = G__15416;
i__15399 = G__15417;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__15421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__15421,(0),null);var h = cljs.core.nth.call(null,vec__15421,(1),null);return ((function (ctx,vec__15421,w,h){
return (function (p__15422){var map__15423 = p__15422;var map__15423__$1 = ((cljs.core.seq_QMARK_.call(null,map__15423))?cljs.core.apply.call(null,cljs.core.hash_map,map__15423):map__15423);var appctx = map__15423__$1;var bias = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
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
;})(ctx,vec__15421,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj15461 = {"url":"/proxy","dataType":"text","data":(function (){var obj15463 = {"url":url};return obj15463;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_15470){var state_val_15471 = (state_15470[(1)]);if((state_val_15471 === (2)))
{var inst_15467 = (state_15470[(2)]);var inst_15468 = cljs.core.async.close_BANG_.call(null,ret);var state_15470__$1 = (function (){var statearr_15472 = state_15470;(statearr_15472[(7)] = inst_15467);
return statearr_15472;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15470__$1,inst_15468);
} else
{if((state_val_15471 === (1)))
{var inst_15464 = [null,data];var inst_15465 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15464,null));var state_15470__$1 = state_15470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15470__$1,(2),ret,inst_15465);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15476 = [null,null,null,null,null,null,null,null];(statearr_15476[(0)] = state_machine__6189__auto__);
(statearr_15476[(1)] = (1));
return statearr_15476;
});
var state_machine__6189__auto____1 = (function (state_15470){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15470);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15477){if((e15477 instanceof Object))
{var ex__6192__auto__ = e15477;var statearr_15478_15496 = state_15470;(statearr_15478_15496[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15497 = state_15470;
state_15470 = G__15497;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15470){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_15479 = f__6204__auto__.call(null);(statearr_15479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_15486){var state_val_15487 = (state_15486[(1)]);if((state_val_15487 === (2)))
{var inst_15483 = (state_15486[(2)]);var inst_15484 = cljs.core.async.close_BANG_.call(null,ret);var state_15486__$1 = (function (){var statearr_15488 = state_15486;(statearr_15488[(7)] = inst_15483);
return statearr_15488;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15486__$1,inst_15484);
} else
{if((state_val_15487 === (1)))
{var inst_15480 = [err];var inst_15481 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15480,null));var state_15486__$1 = state_15486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15486__$1,(2),ret,inst_15481);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15492 = [null,null,null,null,null,null,null,null];(statearr_15492[(0)] = state_machine__6189__auto__);
(statearr_15492[(1)] = (1));
return statearr_15492;
});
var state_machine__6189__auto____1 = (function (state_15486){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15486);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15493){if((e15493 instanceof Object))
{var ex__6192__auto__ = e15493;var statearr_15494_15498 = state_15486;(statearr_15494_15498[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15499 = state_15486;
state_15486 = G__15499;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_15495 = f__6204__auto__.call(null);(statearr_15495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj15461;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__15508(s__15509){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__15509__$1 = s__15509;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15509__$1);if(temp__4126__auto__)
{var s__15509__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15509__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15509__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15511 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15510 = (0);while(true){
if((i__15510 < size__4275__auto__))
{var vec__15514 = cljs.core._nth.call(null,c__4274__auto__,i__15510);var _ = cljs.core.nth.call(null,vec__15514,(0),null);var date = cljs.core.nth.call(null,vec__15514,(1),null);var open = cljs.core.nth.call(null,vec__15514,(2),null);var high = cljs.core.nth.call(null,vec__15514,(3),null);var low = cljs.core.nth.call(null,vec__15514,(4),null);var close = cljs.core.nth.call(null,vec__15514,(5),null);var volume = cljs.core.nth.call(null,vec__15514,(6),null);cljs.core.chunk_append.call(null,b__15511,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__15516 = (i__15510 + (1));
i__15510 = G__15516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15511),iter__15508.call(null,cljs.core.chunk_rest.call(null,s__15509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15511),null);
}
} else
{var vec__15515 = cljs.core.first.call(null,s__15509__$2);var _ = cljs.core.nth.call(null,vec__15515,(0),null);var date = cljs.core.nth.call(null,vec__15515,(1),null);var open = cljs.core.nth.call(null,vec__15515,(2),null);var high = cljs.core.nth.call(null,vec__15515,(3),null);var low = cljs.core.nth.call(null,vec__15515,(4),null);var close = cljs.core.nth.call(null,vec__15515,(5),null);var volume = cljs.core.nth.call(null,vec__15515,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__15508.call(null,cljs.core.rest.call(null,s__15509__$2)));
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
test.stock4.stock_info = (function stock_info(all,id,startdate,start,num){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_15594){var state_val_15595 = (state_15594[(1)]);if((state_val_15595 === (9)))
{var inst_15584 = (state_15594[(2)]);var state_15594__$1 = state_15594;var statearr_15596_15613 = state_15594__$1;(statearr_15596_15613[(2)] = inst_15584);
(statearr_15596_15613[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15595 === (8)))
{var inst_15590 = (state_15594[(2)]);var state_15594__$1 = state_15594;var statearr_15597_15614 = state_15594__$1;(statearr_15597_15614[(2)] = inst_15590);
(statearr_15597_15614[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15595 === (7)))
{var inst_15576 = (state_15594[(7)]);var inst_15586 = cljs.core.concat.call(null,all,inst_15576);var inst_15587 = [null,inst_15586];var inst_15588 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15587,null));var state_15594__$1 = state_15594;var statearr_15598_15615 = state_15594__$1;(statearr_15598_15615[(2)] = inst_15588);
(statearr_15598_15615[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15595 === (6)))
{var inst_15576 = (state_15594[(7)]);var inst_15580 = cljs.core.concat.call(null,all,inst_15576);var inst_15581 = (start + num);var inst_15582 = stock_info.call(null,inst_15580,id,startdate,inst_15581,num);var state_15594__$1 = state_15594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(9),inst_15582);
} else
{if((state_val_15595 === (5)))
{var inst_15592 = (state_15594[(2)]);var state_15594__$1 = state_15594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15594__$1,inst_15592);
} else
{if((state_val_15595 === (4)))
{var inst_15571 = (state_15594[(8)]);var inst_15576 = (state_15594[(7)]);var inst_15576__$1 = test.stock4.parse_info.call(null,inst_15571);var inst_15577 = cljs.core.count.call(null,inst_15576__$1);var inst_15578 = cljs.core._EQ_.call(null,num,inst_15577);var state_15594__$1 = (function (){var statearr_15599 = state_15594;(statearr_15599[(7)] = inst_15576__$1);
return statearr_15599;
})();if(inst_15578)
{var statearr_15600_15616 = state_15594__$1;(statearr_15600_15616[(1)] = (6));
} else
{var statearr_15601_15617 = state_15594__$1;(statearr_15601_15617[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15595 === (3)))
{var inst_15570 = (state_15594[(9)]);var inst_15573 = [inst_15570];var inst_15574 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15573,null));var state_15594__$1 = state_15594;var statearr_15602_15618 = state_15594__$1;(statearr_15602_15618[(2)] = inst_15574);
(statearr_15602_15618[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15595 === (2)))
{var inst_15570 = (state_15594[(9)]);var inst_15569 = (state_15594[(2)]);var inst_15570__$1 = cljs.core.nth.call(null,inst_15569,(0),null);var inst_15571 = cljs.core.nth.call(null,inst_15569,(1),null);var state_15594__$1 = (function (){var statearr_15603 = state_15594;(statearr_15603[(8)] = inst_15571);
(statearr_15603[(9)] = inst_15570__$1);
return statearr_15603;
})();if(cljs.core.truth_(inst_15570__$1))
{var statearr_15604_15619 = state_15594__$1;(statearr_15604_15619[(1)] = (3));
} else
{var statearr_15605_15620 = state_15594__$1;(statearr_15605_15620[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15595 === (1)))
{var inst_15566 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_15567 = test.stock4.content.call(null,inst_15566);var state_15594__$1 = state_15594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(2),inst_15567);
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15609 = [null,null,null,null,null,null,null,null,null,null];(statearr_15609[(0)] = state_machine__6189__auto__);
(statearr_15609[(1)] = (1));
return statearr_15609;
});
var state_machine__6189__auto____1 = (function (state_15594){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15594);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15610){if((e15610 instanceof Object))
{var ex__6192__auto__ = e15610;var statearr_15611_15621 = state_15594;(statearr_15611_15621[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15622 = state_15594;
state_15594 = G__15622;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15594){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15612 = f__6204__auto__.call(null);(statearr_15612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__15631 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__15631,(0),null);var open = cljs.core.nth.call(null,vec__15631,(1),null);var _ = cljs.core.nth.call(null,vec__15631,(2),null);var ___$1 = cljs.core.nth.call(null,vec__15631,(3),null);var ___$2 = cljs.core.nth.call(null,vec__15631,(4),null);var ___$3 = cljs.core.nth.call(null,vec__15631,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__15631,date,open,_,___$1,___$2,___$3){
return (function (p__15633){var vec__15634 = p__15633;var ___$4 = cljs.core.nth.call(null,vec__15634,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15634,(1),null);var high = cljs.core.nth.call(null,vec__15634,(2),null);var ___$6 = cljs.core.nth.call(null,vec__15634,(3),null);var ___$7 = cljs.core.nth.call(null,vec__15634,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15634,(5),null);return high;
});})(group,vec__15631,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__15631,date,open,_,___$1,___$2,___$3,high){
return (function (p__15635){var vec__15636 = p__15635;var ___$4 = cljs.core.nth.call(null,vec__15636,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15636,(1),null);var ___$6 = cljs.core.nth.call(null,vec__15636,(2),null);var low = cljs.core.nth.call(null,vec__15636,(3),null);var ___$7 = cljs.core.nth.call(null,vec__15636,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15636,(5),null);return low;
});})(group,vec__15631,date,open,_,___$1,___$2,___$3,high))
,group));var vec__15632 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__15632,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15632,(1),null);var ___$6 = cljs.core.nth.call(null,vec__15632,(2),null);var ___$7 = cljs.core.nth.call(null,vec__15632,(3),null);var close = cljs.core.nth.call(null,vec__15632,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15632,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__15631,date,open,_,___$1,___$2,___$3,high,low,vec__15632,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__15637){var vec__15638 = p__15637;var ___$9 = cljs.core.nth.call(null,vec__15638,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15638,(1),null);var ___$11 = cljs.core.nth.call(null,vec__15638,(2),null);var ___$12 = cljs.core.nth.call(null,vec__15638,(3),null);var ___$13 = cljs.core.nth.call(null,vec__15638,(4),null);var volume = cljs.core.nth.call(null,vec__15638,(5),null);return volume;
});})(group,vec__15631,date,open,_,___$1,___$2,___$3,high,low,vec__15632,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__15631,date,open,_,___$1,___$2,___$3,high,low,vec__15632,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__15631,date,open,_,___$1,___$2,___$3,high,low,vec__15632,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__15642 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__15642,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15642,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15642,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15642,(3),null);var c1 = cljs.core.nth.call(null,vec__15642,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15642,(5),null);var l1 = vec__15642;var vec__15643 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__15643,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15643,(1),null);var ___$6 = cljs.core.nth.call(null,vec__15643,(2),null);var ___$7 = cljs.core.nth.call(null,vec__15643,(3),null);var c2 = cljs.core.nth.call(null,vec__15643,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15643,(5),null);var l2 = vec__15643;var vec__15644 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__15644,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15644,(1),null);var ___$11 = cljs.core.nth.call(null,vec__15644,(2),null);var ___$12 = cljs.core.nth.call(null,vec__15644,(3),null);var c3 = cljs.core.nth.call(null,vec__15644,(4),null);var ___$13 = cljs.core.nth.call(null,vec__15644,(5),null);var l3 = vec__15644;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__15642,_,___$1,___$2,___$3,c1,___$4,l1,vec__15643,date,___$5,___$6,___$7,c2,___$8,l2,vec__15644,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__15642,_,___$1,___$2,___$3,c1,___$4,l1,vec__15643,date,___$5,___$6,___$7,c2,___$8,l2,vec__15644,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__15649){var vec__15650 = p__15649;var _ = cljs.core.nth.call(null,vec__15650,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15650,(1),null);var high = cljs.core.nth.call(null,vec__15650,(2),null);var low = cljs.core.nth.call(null,vec__15650,(3),null);var ___$2 = cljs.core.nth.call(null,vec__15650,(4),null);var ___$3 = cljs.core.nth.call(null,vec__15650,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__15648 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__15648,(0),null);var open = cljs.core.nth.call(null,vec__15648,(1),null);var high = cljs.core.nth.call(null,vec__15648,(2),null);var low = cljs.core.nth.call(null,vec__15648,(3),null);var close = cljs.core.nth.call(null,vec__15648,(4),null);var ___$1 = cljs.core.nth.call(null,vec__15648,(5),null);var curr = vec__15648;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__15648,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__15648,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__15653){var vec__15654 = p__15653;var _ = cljs.core.nth.call(null,vec__15654,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15654,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15654,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15654,(3),null);var close = cljs.core.nth.call(null,vec__15654,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15654,(5),null);return close;
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
return (function (p__15657){var vec__15658 = p__15657;var _ = cljs.core.nth.call(null,vec__15658,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15658,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15658,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15658,(3),null);var close = cljs.core.nth.call(null,vec__15658,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15658,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__15664 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__15664,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15664,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15664,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15664,(3),null);var close = cljs.core.nth.call(null,vec__15664,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15664,(5),null);var curr = vec__15664;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__15664,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__15665){var vec__15666 = p__15665;var vec__15667 = cljs.core.nth.call(null,vec__15666,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15667,(0),null);var prev_ema = cljs.core.nth.call(null,vec__15667,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__15666,(1),null);var idx = cljs.core.nth.call(null,vec__15666,(2),null);var vec__15668 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__15668,(0),null);var ___$7 = cljs.core.nth.call(null,vec__15668,(1),null);var ___$8 = cljs.core.nth.call(null,vec__15668,(2),null);var ___$9 = cljs.core.nth.call(null,vec__15668,(3),null);var close__$1 = cljs.core.nth.call(null,vec__15668,(4),null);var ___$10 = cljs.core.nth.call(null,vec__15668,(5),null);var curr__$1 = vec__15668;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__15664,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__15674 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__15674,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15674,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15674,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15674,(3),null);var ct = cljs.core.nth.call(null,vec__15674,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15674,(5),null);var curr = vec__15674;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__15674,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__15675){var vec__15676 = p__15675;var ___$5 = cljs.core.nth.call(null,vec__15676,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15676,(1),null);var ___$7 = cljs.core.nth.call(null,vec__15676,(2),null);var low = cljs.core.nth.call(null,vec__15676,(3),null);var ___$8 = cljs.core.nth.call(null,vec__15676,(4),null);var ___$9 = cljs.core.nth.call(null,vec__15676,(5),null);return low;
});})(group,vec__15674,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__15674,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__15677){var vec__15678 = p__15677;var ___$5 = cljs.core.nth.call(null,vec__15678,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15678,(1),null);var high = cljs.core.nth.call(null,vec__15678,(2),null);var ___$7 = cljs.core.nth.call(null,vec__15678,(3),null);var ___$8 = cljs.core.nth.call(null,vec__15678,(4),null);var ___$9 = cljs.core.nth.call(null,vec__15678,(5),null);return high;
});})(group,vec__15674,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__15674,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__15674,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__15681){var vec__15682 = p__15681;var line = cljs.core.nth.call(null,vec__15682,(0),null);var v = cljs.core.nth.call(null,vec__15682,(1),null);return v;
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
return (function (p__15706){var vec__15707 = p__15706;var _ = cljs.core.nth.call(null,vec__15707,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15707,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15707,(2),null);var low = cljs.core.nth.call(null,vec__15707,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15707,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15707,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__15708){var vec__15709 = p__15708;var vec__15710 = cljs.core.nth.call(null,vec__15709,(0),null);var _ = cljs.core.nth.call(null,vec__15710,(0),null);var value = cljs.core.nth.call(null,vec__15710,(1),null);var ori = cljs.core.nth.call(null,vec__15709,(1),null);var prev = cljs.core.nth.call(null,vec__15709,(2),null);var curr = cljs.core.nth.call(null,vec__15709,(3),null);var act = cljs.core.nth.call(null,vec__15709,(4),null);var af = cljs.core.nth.call(null,vec__15709,(5),null);var vec__15711 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__15711,(0),null);var ___$2 = cljs.core.nth.call(null,vec__15711,(1),null);var ph = cljs.core.nth.call(null,vec__15711,(2),null);var pl = cljs.core.nth.call(null,vec__15711,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15711,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15711,(5),null);var prev_line = vec__15711;var vec__15712 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__15712,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15712,(1),null);var ch = cljs.core.nth.call(null,vec__15712,(2),null);var cl = cljs.core.nth.call(null,vec__15712,(3),null);var ___$7 = cljs.core.nth.call(null,vec__15712,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15712,(5),null);var curr_line = vec__15712;var should_turn = (function (){var pred__15713 = cljs.core._EQ_;var expr__15714 = act;if(cljs.core.truth_(pred__15713.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15714)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__15713.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15714)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15714))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__15716 = cljs.core._EQ_;var expr__15717 = act;if(cljs.core.truth_(pred__15716.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15717)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__15716,expr__15717,vec__15711,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15712,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15709,vec__15710,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__15719){var vec__15720 = p__15719;var ___$9 = cljs.core.nth.call(null,vec__15720,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15720,(1),null);var high = cljs.core.nth.call(null,vec__15720,(2),null);var ___$11 = cljs.core.nth.call(null,vec__15720,(3),null);var ___$12 = cljs.core.nth.call(null,vec__15720,(4),null);var ___$13 = cljs.core.nth.call(null,vec__15720,(5),null);return high;
});})(pred__15716,expr__15717,vec__15711,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15712,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15709,vec__15710,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__15716.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15717)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__15716,expr__15717,vec__15711,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15712,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15709,vec__15710,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__15721){var vec__15722 = p__15721;var ___$9 = cljs.core.nth.call(null,vec__15722,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15722,(1),null);var ___$11 = cljs.core.nth.call(null,vec__15722,(2),null);var low__$1 = cljs.core.nth.call(null,vec__15722,(3),null);var ___$12 = cljs.core.nth.call(null,vec__15722,(4),null);var ___$13 = cljs.core.nth.call(null,vec__15722,(5),null);return low__$1;
});})(pred__15716,expr__15717,vec__15711,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15712,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15709,vec__15710,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15717))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__15723 = cljs.core._EQ_;var expr__15724 = act;if(cljs.core.truth_(pred__15723.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15724)))
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
{if(cljs.core.truth_(pred__15723.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15724)))
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
{if(cljs.core.truth_(pred__15723.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__15724)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15724))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__15726 = cljs.core._EQ_;var expr__15727 = act;if(cljs.core.truth_(pred__15726.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15727)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__15726.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15727)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15727))));
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
return (function (p1__15729_SHARP_){return Math.pow((p1__15729_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__15735 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__15735,(0),null);var vec__15736 = cljs.core.nth.call(null,vec__15735,(1),null);var avg = cljs.core.nth.call(null,vec__15736,(0),null);var sd_v = cljs.core.nth.call(null,vec__15736,(1),null);var currs = cljs.core.map.call(null,((function (vec__15735,_,vec__15736,avg,sd_v){
return (function (p__15737){var vec__15738 = p__15737;var ___$1 = cljs.core.nth.call(null,vec__15738,(0),null);var ___$2 = cljs.core.nth.call(null,vec__15738,(1),null);var ___$3 = cljs.core.nth.call(null,vec__15738,(2),null);var ___$4 = cljs.core.nth.call(null,vec__15738,(3),null);var close = cljs.core.nth.call(null,vec__15738,(4),null);var ___$5 = cljs.core.nth.call(null,vec__15738,(5),null);return close;
});})(vec__15735,_,vec__15736,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__15735,_,vec__15736,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__15735,_,vec__15736,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__15735,_,vec__15736,avg,sd_v,currs,offsets){
return (function (p1__15730_SHARP_){return (p1__15730_SHARP_ / sd_v);
});})(vec__15735,_,vec__15736,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__15735,_,vec__15736,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__15739__delegate = function (args){return args;
};
var G__15739 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15739__delegate.call(this,args);};
G__15739.cljs$lang$maxFixedArity = 0;
G__15739.cljs$lang$applyTo = (function (arglist__15740){
var args = cljs.core.seq(arglist__15740);
return G__15739__delegate(args);
});
G__15739.cljs$core$IFn$_invoke$arity$variadic = G__15739__delegate;
return G__15739;
})()
;})(vec__15735,_,vec__15736,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
/**
* 余氏指標
* w用0.001看多空動能
* w用0.5看振盪方向
*/
test.stock4.yu = (function yu(w,n,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,((function (normal){
return (function (p__15749,p__15750){var vec__15751 = p__15749;var _ = cljs.core.nth.call(null,vec__15751,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15751,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15751,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15751,(3),null);var pc = cljs.core.nth.call(null,vec__15751,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15751,(5),null);var vec__15752 = p__15750;var ___$5 = cljs.core.nth.call(null,vec__15752,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15752,(1),null);var ___$7 = cljs.core.nth.call(null,vec__15752,(2),null);var ___$8 = cljs.core.nth.call(null,vec__15752,(3),null);var cc = cljs.core.nth.call(null,vec__15752,(4),null);var ___$9 = cljs.core.nth.call(null,vec__15752,(5),null);return (((cc - pc) / pc) / normal);
});})(normal))
,reverse_kline,cljs.core.rest.call(null,reverse_kline));var vs = cljs.core.map.call(null,((function (normal,up_seq){
return (function (p__15753){var vec__15754 = p__15753;var dir = cljs.core.nth.call(null,vec__15754,(0),null);var ran = cljs.core.nth.call(null,vec__15754,(1),null);return ran;
});})(normal,up_seq))
,cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__15755,up_offset){var vec__15756 = p__15755;var prev = cljs.core.nth.call(null,vec__15756,(0),null);var ran = cljs.core.nth.call(null,vec__15756,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (normal,up_seq,vs){
return (function() { 
var G__15757__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__15757 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15757__delegate.call(this,args);};
G__15757.cljs$lang$maxFixedArity = 0;
G__15757.cljs$lang$applyTo = (function (arglist__15758){
var args = cljs.core.seq(arglist__15758);
return G__15757__delegate(args);
});
G__15757.cljs$core$IFn$_invoke$arity$variadic = G__15757__delegate;
return G__15757;
})()
;})(normal,up_seq,vs))
,cljs.core.rest.call(null,reverse_kline),vs);
});
/**
* Volume Accumulation 成交量多空比率淨額法
* 用來計算OBV能量潮公式
*/
test.stock4.VolumeAccumulation = (function VolumeAccumulation(kline){return cljs.core.map.call(null,(function (p__15761){var vec__15762 = p__15761;var date = cljs.core.nth.call(null,vec__15762,(0),null);var open = cljs.core.nth.call(null,vec__15762,(1),null);var high = cljs.core.nth.call(null,vec__15762,(2),null);var low = cljs.core.nth.call(null,vec__15762,(3),null);var close = cljs.core.nth.call(null,vec__15762,(4),null);var volume = cljs.core.nth.call(null,vec__15762,(5),null);if(cljs.core._EQ_.call(null,high,low))
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
return (function (p__15769){var vec__15770 = p__15769;var _ = cljs.core.nth.call(null,vec__15770,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15770,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15770,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15770,(3),null);var ___$4 = cljs.core.nth.call(null,vec__15770,(4),null);var volume = cljs.core.nth.call(null,vec__15770,(5),null);return volume;
});})(n,group))
,group));var all_price = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group,all_volume){
return (function (p__15771){var vec__15772 = p__15771;var _ = cljs.core.nth.call(null,vec__15772,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15772,(1),null);var high = cljs.core.nth.call(null,vec__15772,(2),null);var ___$2 = cljs.core.nth.call(null,vec__15772,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15772,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15772,(5),null);return high;
});})(n,group,all_volume))
,group));var v_per_p = (all_price / all_volume);var obv_seq = test.stock4.obv.call(null,group);var predict = cljs.core.map.call(null,((function (n,group,all_volume,all_price,v_per_p,obv_seq){
return (function (p__15773,obv){var vec__15774 = p__15773;var _ = cljs.core.nth.call(null,vec__15774,(0),null);var open = cljs.core.nth.call(null,vec__15774,(1),null);var ___$1 = cljs.core.nth.call(null,vec__15774,(2),null);var ___$2 = cljs.core.nth.call(null,vec__15774,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15774,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15774,(5),null);return (open + (obv * v_per_p));
});})(n,group,all_volume,all_price,v_per_p,obv_seq))
,kline,obv_seq);console.log(all_volume,all_price);
console.log(v_per_p);
return predict;
});
test.stock4.yu_obv = (function yu_obv(n,kline){var group = cljs.core.take.call(null,n,kline);var va = test.stock4.VolumeAccumulation.call(null,group);var max_va = cljs.core.apply.call(null,cljs.core.max,va);var min_va = cljs.core.apply.call(null,cljs.core.min,va);var region = (max_va - min_va);return cljs.core.map.call(null,((function (group,va,max_va,min_va,region){
return (function (p1__15775_SHARP_){return (p1__15775_SHARP_ / region);
});})(group,va,max_va,min_va,region))
,va);
});
test.stock4.yu_volume = (function yu_volume(n,reverse_kline){var group = cljs.core.take.call(null,n,reverse_kline);var price_seq = cljs.core.map.call(null,((function (group){
return (function (p__15780){var vec__15781 = p__15780;var _ = cljs.core.nth.call(null,vec__15781,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15781,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15781,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15781,(3),null);var close = cljs.core.nth.call(null,vec__15781,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15781,(5),null);return close;
});})(group))
,group);var price_up_rate = cljs.core.map.call(null,((function (group,price_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq))
,price_seq,cljs.core.rest.call(null,price_seq));var volume_seq = cljs.core.map.call(null,((function (group,price_seq,price_up_rate){
return (function (p__15782){var vec__15783 = p__15782;var _ = cljs.core.nth.call(null,vec__15783,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15783,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15783,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15783,(3),null);var ___$4 = cljs.core.nth.call(null,vec__15783,(4),null);var volume = cljs.core.nth.call(null,vec__15783,(5),null);return volume;
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
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,draw,onSystem,onView){
return (function (state_16261){var state_val_16262 = (state_16261[(1)]);if((state_val_16262 === (2)))
{var inst_16259 = (state_16261[(2)]);var state_16261__$1 = state_16261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16261__$1,inst_16259);
} else
{if((state_val_16262 === (1)))
{var inst_16257 = cljs.core.js__GT_clj.call(null,data);var state_16261__$1 = state_16261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16261__$1,(2),onView,inst_16257);
} else
{return null;
}
}
});})(c__6203__auto__,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16266 = [null,null,null,null,null,null,null];(statearr_16266[(0)] = state_machine__6189__auto__);
(statearr_16266[(1)] = (1));
return statearr_16266;
});
var state_machine__6189__auto____1 = (function (state_16261){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16267){if((e16267 instanceof Object))
{var ex__6192__auto__ = e16267;var statearr_16268_16730 = state_16261;(statearr_16268_16730[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16731 = state_16261;
state_16261 = G__16731;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16261){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_16269 = f__6204__auto__.call(null);(statearr_16269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_16269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,draw,onSystem,onView))
);
return c__6203__auto__;
});})(draw,onSystem,onView))
);
var c__6203__auto___16732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___16732,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___16732,draw,onSystem,onView){
return (function (state_16286){var state_val_16287 = (state_16286[(1)]);if((state_val_16287 === (6)))
{var inst_16282 = (state_16286[(2)]);var state_16286__$1 = state_16286;var statearr_16288_16733 = state_16286__$1;(statearr_16288_16733[(2)] = inst_16282);
(statearr_16288_16733[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16287 === (5)))
{var inst_16284 = (state_16286[(2)]);var state_16286__$1 = state_16286;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16286__$1,inst_16284);
} else
{if((state_val_16287 === (4)))
{var inst_16275 = (state_16286[(7)]);var inst_16279 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_16275];var inst_16280 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16279,null));var state_16286__$1 = state_16286;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16286__$1,(6),onSystem,inst_16280);
} else
{if((state_val_16287 === (3)))
{var inst_16274 = (state_16286[(8)]);var inst_16277 = alert(inst_16274);var state_16286__$1 = state_16286;var statearr_16289_16734 = state_16286__$1;(statearr_16289_16734[(2)] = inst_16277);
(statearr_16289_16734[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16287 === (2)))
{var inst_16274 = (state_16286[(8)]);var inst_16273 = (state_16286[(2)]);var inst_16274__$1 = cljs.core.nth.call(null,inst_16273,(0),null);var inst_16275 = cljs.core.nth.call(null,inst_16273,(1),null);var state_16286__$1 = (function (){var statearr_16290 = state_16286;(statearr_16290[(8)] = inst_16274__$1);
(statearr_16290[(7)] = inst_16275);
return statearr_16290;
})();if(cljs.core.truth_(inst_16274__$1))
{var statearr_16291_16735 = state_16286__$1;(statearr_16291_16735[(1)] = (3));
} else
{var statearr_16292_16736 = state_16286__$1;(statearr_16292_16736[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16287 === (1)))
{var inst_16271 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_16286__$1 = state_16286;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16286__$1,(2),inst_16271);
} else
{return null;
}
}
}
}
}
}
});})(c__6203__auto___16732,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto___16732,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16296 = [null,null,null,null,null,null,null,null,null];(statearr_16296[(0)] = state_machine__6189__auto__);
(statearr_16296[(1)] = (1));
return statearr_16296;
});
var state_machine__6189__auto____1 = (function (state_16286){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16286);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16297){if((e16297 instanceof Object))
{var ex__6192__auto__ = e16297;var statearr_16298_16737 = state_16286;(statearr_16298_16737[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16286);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16738 = state_16286;
state_16286 = G__16738;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16286){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___16732,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_16299 = f__6204__auto__.call(null);(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___16732);
return statearr_16299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___16732,draw,onSystem,onView))
);
var c__6203__auto___16739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___16739,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___16739,draw,onSystem,onView){
return (function (state_16589){var state_val_16590 = (state_16589[(1)]);if((state_val_16590 === (65)))
{var inst_16517 = (state_16589[(7)]);var inst_16516 = (state_16589[(8)]);var inst_16519 = (inst_16517 < inst_16516);var inst_16520 = inst_16519;var state_16589__$1 = state_16589;if(cljs.core.truth_(inst_16520))
{var statearr_16591_16740 = state_16589__$1;(statearr_16591_16740[(1)] = (67));
} else
{var statearr_16592_16741 = state_16589__$1;(statearr_16592_16741[(1)] = (68));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (70)))
{var inst_16528 = (state_16589[(9)]);var inst_16530 = cljs.core.chunked_seq_QMARK_.call(null,inst_16528);var state_16589__$1 = state_16589;if(inst_16530)
{var statearr_16593_16742 = state_16589__$1;(statearr_16593_16742[(1)] = (73));
} else
{var statearr_16594_16743 = state_16589__$1;(statearr_16594_16743[(1)] = (74));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (62)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16511 = cljs.core.keyword.call(null,inst_16361);var inst_16512 = inst_16511.call(null,inst_16321);var inst_16513 = cljs.core.seq.call(null,inst_16512);var inst_16514 = inst_16513;var inst_16515 = null;var inst_16516 = (0);var inst_16517 = (0);var state_16589__$1 = (function (){var statearr_16595 = state_16589;(statearr_16595[(7)] = inst_16517);
(statearr_16595[(12)] = inst_16515);
(statearr_16595[(13)] = inst_16514);
(statearr_16595[(8)] = inst_16516);
return statearr_16595;
})();var statearr_16596_16744 = state_16589__$1;(statearr_16596_16744[(2)] = null);
(statearr_16596_16744[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (74)))
{var inst_16528 = (state_16589[(9)]);var inst_16537 = cljs.core.first.call(null,inst_16528);var inst_16538 = cljs.core.pr_str.call(null,inst_16537);var inst_16539 = console.log(inst_16538);var inst_16540 = cljs.core.next.call(null,inst_16528);var inst_16514 = inst_16540;var inst_16515 = null;var inst_16516 = (0);var inst_16517 = (0);var state_16589__$1 = (function (){var statearr_16597 = state_16589;(statearr_16597[(7)] = inst_16517);
(statearr_16597[(12)] = inst_16515);
(statearr_16597[(13)] = inst_16514);
(statearr_16597[(14)] = inst_16539);
(statearr_16597[(8)] = inst_16516);
return statearr_16597;
})();var statearr_16598_16745 = state_16589__$1;(statearr_16598_16745[(2)] = null);
(statearr_16598_16745[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (7)))
{var inst_16313 = (state_16589[(15)]);var inst_16318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16313);var state_16589__$1 = state_16589;var statearr_16599_16746 = state_16589__$1;(statearr_16599_16746[(2)] = inst_16318);
(statearr_16599_16746[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (59)))
{var inst_16321 = (state_16589[(10)]);var inst_16322 = (state_16589[(16)]);var inst_16499 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16500 = test.stock4.check_turn.call(null,inst_16499);var inst_16501 = cljs.core.take.call(null,inst_16322,inst_16500);var inst_16502 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"turn","turn",75759344),inst_16501);var inst_16503 = draw.call(null,inst_16502);var state_16589__$1 = state_16589;var statearr_16600_16747 = state_16589__$1;(statearr_16600_16747[(2)] = inst_16503);
(statearr_16600_16747[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (20)))
{var inst_16328 = (state_16589[(17)]);var inst_16356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16328);var state_16589__$1 = state_16589;var statearr_16601_16748 = state_16589__$1;(statearr_16601_16748[(2)] = inst_16356);
(statearr_16601_16748[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (72)))
{var inst_16546 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16602_16749 = state_16589__$1;(statearr_16602_16749[(2)] = inst_16546);
(statearr_16602_16749[(1)] = (69));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (58)))
{var inst_16557 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16603_16750 = state_16589__$1;(statearr_16603_16750[(2)] = inst_16557);
(statearr_16603_16750[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (60)))
{var inst_16360 = (state_16589[(18)]);var inst_16505 = cljs.core._EQ_.call(null,"print",inst_16360);var state_16589__$1 = state_16589;if(inst_16505)
{var statearr_16604_16751 = state_16589__$1;(statearr_16604_16751[(1)] = (62));
} else
{var statearr_16605_16752 = state_16589__$1;(statearr_16605_16752[(1)] = (63));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (27)))
{var inst_16360 = (state_16589[(18)]);var inst_16382 = cljs.core._EQ_.call(null,"yu-obv",inst_16360);var state_16589__$1 = state_16589;if(inst_16382)
{var statearr_16606_16753 = state_16589__$1;(statearr_16606_16753[(1)] = (29));
} else
{var statearr_16607_16754 = state_16589__$1;(statearr_16607_16754[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (1)))
{var inst_16305 = (state_16589[(19)]);var inst_16303 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_16304 = [(200)];var inst_16305__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16303,inst_16304);var inst_16306 = cljs.core.seq_QMARK_.call(null,inst_16305__$1);var state_16589__$1 = (function (){var statearr_16608 = state_16589;(statearr_16608[(19)] = inst_16305__$1);
return statearr_16608;
})();if(inst_16306)
{var statearr_16609_16755 = state_16589__$1;(statearr_16609_16755[(1)] = (2));
} else
{var statearr_16610_16756 = state_16589__$1;(statearr_16610_16756[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (69)))
{var inst_16548 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16611_16757 = state_16589__$1;(statearr_16611_16757[(2)] = inst_16548);
(statearr_16611_16757[(1)] = (66));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (24)))
{var inst_16360 = (state_16589[(18)]);var inst_16373 = cljs.core._EQ_.call(null,"obv",inst_16360);var state_16589__$1 = state_16589;if(inst_16373)
{var statearr_16612_16758 = state_16589__$1;(statearr_16612_16758[(1)] = (26));
} else
{var statearr_16613_16759 = state_16589__$1;(statearr_16613_16759[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (55)))
{var inst_16559 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16614_16760 = state_16589__$1;(statearr_16614_16760[(2)] = inst_16559);
(statearr_16614_16760[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (39)))
{var inst_16360 = (state_16589[(18)]);var inst_16423 = cljs.core._EQ_.call(null,"sma",inst_16360);var state_16589__$1 = state_16589;if(inst_16423)
{var statearr_16615_16761 = state_16589__$1;(statearr_16615_16761[(1)] = (41));
} else
{var statearr_16616_16762 = state_16589__$1;(statearr_16616_16762[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (46)))
{var inst_16565 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16617_16763 = state_16589__$1;(statearr_16617_16763[(2)] = inst_16565);
(statearr_16617_16763[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (4)))
{var inst_16305 = (state_16589[(19)]);var inst_16311 = (state_16589[(20)]);var inst_16311__$1 = (state_16589[(2)]);var inst_16312 = cljs.core.get.call(null,inst_16311__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_16313 = inst_16305;var state_16589__$1 = (function (){var statearr_16618 = state_16589;(statearr_16618[(20)] = inst_16311__$1);
(statearr_16618[(21)] = inst_16312);
(statearr_16618[(15)] = inst_16313);
return statearr_16618;
})();var statearr_16619_16764 = state_16589__$1;(statearr_16619_16764[(2)] = null);
(statearr_16619_16764[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (54)))
{var inst_16360 = (state_16589[(18)]);var inst_16489 = cljs.core._EQ_.call(null,"avg",inst_16360);var state_16589__$1 = state_16589;if(inst_16489)
{var statearr_16620_16765 = state_16589__$1;(statearr_16620_16765[(1)] = (56));
} else
{var statearr_16621_16766 = state_16589__$1;(statearr_16621_16766[(1)] = (57));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (15)))
{var inst_16321 = (state_16589[(10)]);var state_16589__$1 = state_16589;var statearr_16622_16767 = state_16589__$1;(statearr_16622_16767[(2)] = inst_16321);
(statearr_16622_16767[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (48)))
{var inst_16360 = (state_16589[(18)]);var inst_16455 = cljs.core._EQ_.call(null,"sar",inst_16360);var state_16589__$1 = state_16589;if(inst_16455)
{var statearr_16623_16768 = state_16589__$1;(statearr_16623_16768[(1)] = (50));
} else
{var statearr_16624_16769 = state_16589__$1;(statearr_16624_16769[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (50)))
{var inst_16321 = (state_16589[(10)]);var inst_16457 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16458 = cljs.core.reverse.call(null,inst_16457);var inst_16459 = test.stock4.sar.call(null,inst_16458);var inst_16460 = cljs.core.count.call(null,inst_16457);var inst_16461 = cljs.core.take.call(null,inst_16460,inst_16459);var inst_16462 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"sar","sar",833088678),inst_16461);var inst_16463 = draw.call(null,inst_16462);var state_16589__$1 = state_16589;var statearr_16625_16770 = state_16589__$1;(statearr_16625_16770[(2)] = inst_16463);
(statearr_16625_16770[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (75)))
{var inst_16543 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16626_16771 = state_16589__$1;(statearr_16626_16771[(2)] = inst_16543);
(statearr_16626_16771[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (21)))
{var inst_16328 = (state_16589[(17)]);var state_16589__$1 = state_16589;var statearr_16627_16772 = state_16589__$1;(statearr_16627_16772[(2)] = inst_16328);
(statearr_16627_16772[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (31)))
{var inst_16575 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16628_16773 = state_16589__$1;(statearr_16628_16773[(2)] = inst_16575);
(statearr_16628_16773[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (32)))
{var inst_16321 = (state_16589[(10)]);var inst_16392 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16393 = test.stock4.yu_pre.call(null,inst_16392);var inst_16394 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16395 = cljs.core.count.call(null,inst_16394);var inst_16396 = cljs.core.take.call(null,inst_16395,inst_16393);var inst_16397 = cljs.core.pr_str.call(null,inst_16396);var inst_16398 = console.log(inst_16397);var state_16589__$1 = (function (){var statearr_16629 = state_16589;(statearr_16629[(22)] = inst_16398);
return statearr_16629;
})();var statearr_16630_16774 = state_16589__$1;(statearr_16630_16774[(2)] = inst_16321);
(statearr_16630_16774[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (40)))
{var inst_16569 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16631_16775 = state_16589__$1;(statearr_16631_16775[(2)] = inst_16569);
(statearr_16631_16775[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (56)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16322 = (state_16589[(16)]);var inst_16491 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16492 = test.stock4.average.call(null,inst_16361,inst_16491);var inst_16493 = cljs.core.take.call(null,inst_16322,inst_16492);var inst_16494 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_16493);var inst_16495 = draw.call(null,inst_16494);var state_16589__$1 = state_16589;var statearr_16632_16776 = state_16589__$1;(statearr_16632_16776[(2)] = inst_16495);
(statearr_16632_16776[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (33)))
{var inst_16360 = (state_16589[(18)]);var inst_16400 = cljs.core._EQ_.call(null,"yu",inst_16360);var state_16589__$1 = state_16589;if(inst_16400)
{var statearr_16633_16777 = state_16589__$1;(statearr_16633_16777[(1)] = (35));
} else
{var statearr_16634_16778 = state_16589__$1;(statearr_16634_16778[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (13)))
{var inst_16584 = (state_16589[(2)]);var inst_16313 = inst_16584;var state_16589__$1 = (function (){var statearr_16635 = state_16589;(statearr_16635[(15)] = inst_16313);
return statearr_16635;
})();var statearr_16636_16779 = state_16589__$1;(statearr_16636_16779[(2)] = null);
(statearr_16636_16779[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (22)))
{var inst_16359 = (state_16589[(23)]);var inst_16360 = (state_16589[(18)]);var inst_16359__$1 = (state_16589[(2)]);var inst_16360__$1 = cljs.core.get.call(null,inst_16359__$1,"cmd");var inst_16361 = cljs.core.get.call(null,inst_16359__$1,"params");var inst_16365 = cljs.core._EQ_.call(null,"length",inst_16360__$1);var state_16589__$1 = (function (){var statearr_16637 = state_16589;(statearr_16637[(23)] = inst_16359__$1);
(statearr_16637[(18)] = inst_16360__$1);
(statearr_16637[(11)] = inst_16361);
return statearr_16637;
})();if(inst_16365)
{var statearr_16638_16780 = state_16589__$1;(statearr_16638_16780[(1)] = (23));
} else
{var statearr_16639_16781 = state_16589__$1;(statearr_16639_16781[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (36)))
{var inst_16360 = (state_16589[(18)]);var inst_16411 = cljs.core._EQ_.call(null,"sd",inst_16360);var state_16589__$1 = state_16589;if(inst_16411)
{var statearr_16640_16782 = state_16589__$1;(statearr_16640_16782[(1)] = (38));
} else
{var statearr_16641_16783 = state_16589__$1;(statearr_16641_16783[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (41)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16425 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16426 = test.stock4.sma.call(null,inst_16361,inst_16425);var inst_16427 = cljs.core.take.call(null,(10),inst_16426);var inst_16428 = cljs.core.pr_str.call(null,inst_16427);var inst_16429 = console.log(inst_16428);var state_16589__$1 = (function (){var statearr_16642 = state_16589;(statearr_16642[(24)] = inst_16429);
return statearr_16642;
})();var statearr_16643_16784 = state_16589__$1;(statearr_16643_16784[(2)] = inst_16321);
(statearr_16643_16784[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (43)))
{var inst_16567 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16644_16785 = state_16589__$1;(statearr_16644_16785[(2)] = inst_16567);
(statearr_16644_16785[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (61)))
{var inst_16555 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16645_16786 = state_16589__$1;(statearr_16645_16786[(2)] = inst_16555);
(statearr_16645_16786[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (29)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16384 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16385 = test.stock4.yu_obv.call(null,inst_16361,inst_16384);var inst_16386 = cljs.core.take.call(null,(10),inst_16385);var inst_16387 = cljs.core.pr_str.call(null,inst_16386);var inst_16388 = console.log(inst_16387);var state_16589__$1 = (function (){var statearr_16646 = state_16589;(statearr_16646[(25)] = inst_16388);
return statearr_16646;
})();var statearr_16647_16787 = state_16589__$1;(statearr_16647_16787[(2)] = inst_16321);
(statearr_16647_16787[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (44)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16433 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16434 = test.stock4.ema.call(null,inst_16361,(0),inst_16433);var inst_16435 = cljs.core.take.call(null,(10),inst_16434);var inst_16436 = cljs.core.pr_str.call(null,inst_16435);var inst_16437 = console.log(inst_16436);var state_16589__$1 = (function (){var statearr_16648 = state_16589;(statearr_16648[(26)] = inst_16437);
return statearr_16648;
})();var statearr_16649_16788 = state_16589__$1;(statearr_16649_16788[(2)] = inst_16321);
(statearr_16649_16788[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (6)))
{var inst_16587 = (state_16589[(2)]);var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16589__$1,inst_16587);
} else
{if((state_val_16590 === (28)))
{var inst_16577 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16650_16789 = state_16589__$1;(statearr_16650_16789[(2)] = inst_16577);
(statearr_16650_16789[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (64)))
{var inst_16553 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16651_16790 = state_16589__$1;(statearr_16651_16790[(2)] = inst_16553);
(statearr_16651_16790[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (51)))
{var inst_16360 = (state_16589[(18)]);var inst_16465 = cljs.core._EQ_.call(null,"stock",inst_16360);var state_16589__$1 = state_16589;if(inst_16465)
{var statearr_16652_16791 = state_16589__$1;(statearr_16652_16791[(1)] = (53));
} else
{var statearr_16653_16792 = state_16589__$1;(statearr_16653_16792[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (25)))
{var inst_16579 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16654_16793 = state_16589__$1;(statearr_16654_16793[(2)] = inst_16579);
(statearr_16654_16793[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (34)))
{var inst_16573 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16655_16794 = state_16589__$1;(statearr_16655_16794[(2)] = inst_16573);
(statearr_16655_16794[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (17)))
{var inst_16328 = (state_16589[(17)]);var inst_16354 = cljs.core.seq_QMARK_.call(null,inst_16328);var state_16589__$1 = state_16589;if(inst_16354)
{var statearr_16656_16795 = state_16589__$1;(statearr_16656_16795[(1)] = (20));
} else
{var statearr_16657_16796 = state_16589__$1;(statearr_16657_16796[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (3)))
{var inst_16305 = (state_16589[(19)]);var state_16589__$1 = state_16589;var statearr_16658_16797 = state_16589__$1;(statearr_16658_16797[(2)] = inst_16305);
(statearr_16658_16797[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (12)))
{var inst_16329 = (state_16589[(27)]);var inst_16351 = cljs.core._EQ_.call(null,onView,inst_16329);var state_16589__$1 = state_16589;if(inst_16351)
{var statearr_16659_16798 = state_16589__$1;(statearr_16659_16798[(1)] = (17));
} else
{var statearr_16660_16799 = state_16589__$1;(statearr_16660_16799[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (2)))
{var inst_16305 = (state_16589[(19)]);var inst_16308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16305);var state_16589__$1 = state_16589;var statearr_16661_16800 = state_16589__$1;(statearr_16661_16800[(2)] = inst_16308);
(statearr_16661_16800[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (66)))
{var inst_16321 = (state_16589[(10)]);var inst_16550 = (state_16589[(2)]);var state_16589__$1 = (function (){var statearr_16662 = state_16589;(statearr_16662[(28)] = inst_16550);
return statearr_16662;
})();var statearr_16663_16801 = state_16589__$1;(statearr_16663_16801[(2)] = inst_16321);
(statearr_16663_16801[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (23)))
{var inst_16321 = (state_16589[(10)]);var inst_16367 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16368 = test.stock4.check_length.call(null,inst_16367);var inst_16369 = cljs.core.take.call(null,(10),inst_16368);var inst_16370 = cljs.core.pr_str.call(null,inst_16369);var inst_16371 = console.log(inst_16370);var state_16589__$1 = (function (){var statearr_16664 = state_16589;(statearr_16664[(29)] = inst_16371);
return statearr_16664;
})();var statearr_16665_16802 = state_16589__$1;(statearr_16665_16802[(2)] = inst_16321);
(statearr_16665_16802[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (47)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16441 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16442 = cljs.core.count.call(null,inst_16441);var inst_16443 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16444 = test.stock4.rsv.call(null,inst_16443);var inst_16445 = test.stock4.k.call(null,inst_16361,inst_16444);var inst_16446 = cljs.core.take.call(null,inst_16442,inst_16445);var inst_16447 = ((3) * inst_16361);var inst_16448 = test.stock4.k.call(null,inst_16447,inst_16444);var inst_16449 = cljs.core.take.call(null,inst_16442,inst_16448);var inst_16450 = [null,inst_16446,inst_16449];var inst_16451 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16450,null));var inst_16452 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"kd","kd",771448701),inst_16451);var inst_16453 = draw.call(null,inst_16452);var state_16589__$1 = state_16589;var statearr_16666_16803 = state_16589__$1;(statearr_16666_16803[(2)] = inst_16453);
(statearr_16666_16803[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (35)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16402 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16403 = cljs.core.reverse.call(null,inst_16402);var inst_16404 = test.stock4.yu.call(null,0.5,inst_16361,inst_16403);var inst_16405 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16406 = cljs.core.count.call(null,inst_16405);var inst_16407 = cljs.core.take.call(null,inst_16406,inst_16404);var inst_16408 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"yu","yu",979062608),inst_16407);var inst_16409 = draw.call(null,inst_16408);var state_16589__$1 = state_16589;var statearr_16667_16804 = state_16589__$1;(statearr_16667_16804[(2)] = inst_16409);
(statearr_16667_16804[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (19)))
{var inst_16582 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16668_16805 = state_16589__$1;(statearr_16668_16805[(2)] = inst_16582);
(statearr_16668_16805[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (57)))
{var inst_16360 = (state_16589[(18)]);var inst_16497 = cljs.core._EQ_.call(null,"turn",inst_16360);var state_16589__$1 = state_16589;if(inst_16497)
{var statearr_16669_16806 = state_16589__$1;(statearr_16669_16806[(1)] = (59));
} else
{var statearr_16670_16807 = state_16589__$1;(statearr_16670_16807[(1)] = (60));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (68)))
{var inst_16528 = (state_16589[(9)]);var inst_16514 = (state_16589[(13)]);var inst_16528__$1 = cljs.core.seq.call(null,inst_16514);var state_16589__$1 = (function (){var statearr_16671 = state_16589;(statearr_16671[(9)] = inst_16528__$1);
return statearr_16671;
})();if(inst_16528__$1)
{var statearr_16672_16808 = state_16589__$1;(statearr_16672_16808[(1)] = (70));
} else
{var statearr_16673_16809 = state_16589__$1;(statearr_16673_16809[(1)] = (71));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (11)))
{var inst_16328 = (state_16589[(17)]);var inst_16336 = cljs.core.nth.call(null,inst_16328,(0),null);var inst_16337 = cljs.core.nth.call(null,inst_16328,(1),null);var inst_16341 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_16336);var state_16589__$1 = (function (){var statearr_16674 = state_16589;(statearr_16674[(30)] = inst_16337);
return statearr_16674;
})();if(inst_16341)
{var statearr_16675_16810 = state_16589__$1;(statearr_16675_16810[(1)] = (14));
} else
{var statearr_16676_16811 = state_16589__$1;(statearr_16676_16811[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (9)))
{var inst_16321 = (state_16589[(10)]);var inst_16321__$1 = (state_16589[(2)]);var inst_16322 = cljs.core.get.call(null,inst_16321__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_16324 = [onSystem,onView];var inst_16325 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16324,null));var state_16589__$1 = (function (){var statearr_16677 = state_16589;(statearr_16677[(10)] = inst_16321__$1);
(statearr_16677[(16)] = inst_16322);
return statearr_16677;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_16589__$1,(10),inst_16325);
} else
{if((state_val_16590 === (5)))
{var inst_16313 = (state_16589[(15)]);var inst_16316 = cljs.core.seq_QMARK_.call(null,inst_16313);var state_16589__$1 = state_16589;if(inst_16316)
{var statearr_16678_16812 = state_16589__$1;(statearr_16678_16812[(1)] = (7));
} else
{var statearr_16679_16813 = state_16589__$1;(statearr_16679_16813[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (14)))
{var inst_16337 = (state_16589[(30)]);var inst_16321 = (state_16589[(10)]);var inst_16322 = (state_16589[(16)]);var inst_16343 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"info","info",-317069002),inst_16337);var inst_16344 = cljs.core.take.call(null,inst_16322,inst_16337);var inst_16345 = cljs.core.assoc.call(null,inst_16343,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_16344);var inst_16346 = draw.call(null,inst_16345);var state_16589__$1 = state_16589;var statearr_16680_16814 = state_16589__$1;(statearr_16680_16814[(2)] = inst_16346);
(statearr_16680_16814[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (45)))
{var inst_16360 = (state_16589[(18)]);var inst_16439 = cljs.core._EQ_.call(null,"rsv",inst_16360);var state_16589__$1 = state_16589;if(inst_16439)
{var statearr_16681_16815 = state_16589__$1;(statearr_16681_16815[(1)] = (47));
} else
{var statearr_16682_16816 = state_16589__$1;(statearr_16682_16816[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (53)))
{var inst_16359 = (state_16589[(23)]);var inst_16321 = (state_16589[(10)]);var inst_16328 = (state_16589[(17)]);var inst_16329 = (state_16589[(27)]);var inst_16360 = (state_16589[(18)]);var inst_16361 = (state_16589[(11)]);var inst_16322 = (state_16589[(16)]);var inst_16311 = (state_16589[(20)]);var inst_16327 = (state_16589[(31)]);var inst_16313 = (state_16589[(15)]);var inst_16485 = cljs.core.async.chan.call(null,(1));var inst_16486 = (function (){var cmd = inst_16360;var input = inst_16359;var map__16315 = inst_16321;var ctx = inst_16321;var vec__16323 = inst_16327;var map__16353 = inst_16359;var pred__16330 = cljs.core._EQ_;var v = inst_16328;var map__16302 = inst_16311;var G__16301 = inst_16313;var pred__16362 = cljs.core._EQ_;var expr__16363 = inst_16360;var c__6203__auto____$1 = inst_16485;var params = inst_16361;var cnt = inst_16322;var ch = inst_16329;var expr__16331 = inst_16329;return ((function (cmd,input,map__16315,ctx,vec__16323,map__16353,pred__16330,v,map__16302,G__16301,pred__16362,expr__16363,c__6203__auto____$1,params,cnt,ch,expr__16331,inst_16359,inst_16321,inst_16328,inst_16329,inst_16360,inst_16361,inst_16322,inst_16311,inst_16327,inst_16313,inst_16485,state_val_16590,c__6203__auto___16739,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (cmd,input,map__16315,ctx,vec__16323,map__16353,pred__16330,v,map__16302,G__16301,pred__16362,expr__16363,c__6203__auto____$1,params,cnt,ch,expr__16331,inst_16359,inst_16321,inst_16328,inst_16329,inst_16360,inst_16361,inst_16322,inst_16311,inst_16327,inst_16313,inst_16485,state_val_16590,c__6203__auto___16739,draw,onSystem,onView){
return (function (state_16483){var state_val_16484 = (state_16483[(1)]);if((state_val_16484 === (6)))
{var inst_16479 = (state_16483[(2)]);var state_16483__$1 = state_16483;var statearr_16683_16817 = state_16483__$1;(statearr_16683_16817[(2)] = inst_16479);
(statearr_16683_16817[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (5)))
{var inst_16481 = (state_16483[(2)]);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16483__$1,inst_16481);
} else
{if((state_val_16484 === (4)))
{var inst_16472 = (state_16483[(7)]);var inst_16476 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_16472];var inst_16477 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16476,null));var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16483__$1,(6),onSystem,inst_16477);
} else
{if((state_val_16484 === (3)))
{var inst_16471 = (state_16483[(8)]);var inst_16474 = alert(inst_16471);var state_16483__$1 = state_16483;var statearr_16684_16818 = state_16483__$1;(statearr_16684_16818[(2)] = inst_16474);
(statearr_16684_16818[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (2)))
{var inst_16471 = (state_16483[(8)]);var inst_16470 = (state_16483[(2)]);var inst_16471__$1 = cljs.core.nth.call(null,inst_16470,(0),null);var inst_16472 = cljs.core.nth.call(null,inst_16470,(1),null);var state_16483__$1 = (function (){var statearr_16685 = state_16483;(statearr_16685[(8)] = inst_16471__$1);
(statearr_16685[(7)] = inst_16472);
return statearr_16685;
})();if(cljs.core.truth_(inst_16471__$1))
{var statearr_16686_16819 = state_16483__$1;(statearr_16686_16819[(1)] = (3));
} else
{var statearr_16687_16820 = state_16483__$1;(statearr_16687_16820[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (1)))
{var inst_16468 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16483__$1,(2),inst_16468);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,map__16315,ctx,vec__16323,map__16353,pred__16330,v,map__16302,G__16301,pred__16362,expr__16363,c__6203__auto____$1,params,cnt,ch,expr__16331,inst_16359,inst_16321,inst_16328,inst_16329,inst_16360,inst_16361,inst_16322,inst_16311,inst_16327,inst_16313,inst_16485,state_val_16590,c__6203__auto___16739,draw,onSystem,onView))
;return ((function (switch__6188__auto__,cmd,input,map__16315,ctx,vec__16323,map__16353,pred__16330,v,map__16302,G__16301,pred__16362,expr__16363,c__6203__auto____$1,params,cnt,ch,expr__16331,inst_16359,inst_16321,inst_16328,inst_16329,inst_16360,inst_16361,inst_16322,inst_16311,inst_16327,inst_16313,inst_16485,state_val_16590,c__6203__auto___16739,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16691 = [null,null,null,null,null,null,null,null,null];(statearr_16691[(0)] = state_machine__6189__auto__);
(statearr_16691[(1)] = (1));
return statearr_16691;
});
var state_machine__6189__auto____1 = (function (state_16483){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16692){if((e16692 instanceof Object))
{var ex__6192__auto__ = e16692;var statearr_16693_16821 = state_16483;(statearr_16693_16821[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16822 = state_16483;
state_16483 = G__16822;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,cmd,input,map__16315,ctx,vec__16323,map__16353,pred__16330,v,map__16302,G__16301,pred__16362,expr__16363,c__6203__auto____$1,params,cnt,ch,expr__16331,inst_16359,inst_16321,inst_16328,inst_16329,inst_16360,inst_16361,inst_16322,inst_16311,inst_16327,inst_16313,inst_16485,state_val_16590,c__6203__auto___16739,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_16694 = f__6204__auto__.call(null);(statearr_16694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_16694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(cmd,input,map__16315,ctx,vec__16323,map__16353,pred__16330,v,map__16302,G__16301,pred__16362,expr__16363,c__6203__auto____$1,params,cnt,ch,expr__16331,inst_16359,inst_16321,inst_16328,inst_16329,inst_16360,inst_16361,inst_16322,inst_16311,inst_16327,inst_16313,inst_16485,state_val_16590,c__6203__auto___16739,draw,onSystem,onView))
})();var inst_16487 = cljs.core.async.impl.dispatch.run.call(null,inst_16486);var state_16589__$1 = (function (){var statearr_16695 = state_16589;(statearr_16695[(32)] = inst_16487);
return statearr_16695;
})();var statearr_16696_16823 = state_16589__$1;(statearr_16696_16823[(2)] = inst_16321);
(statearr_16696_16823[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (26)))
{var inst_16321 = (state_16589[(10)]);var inst_16375 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16376 = test.stock4.obv.call(null,inst_16375);var inst_16377 = cljs.core.count.call(null,inst_16375);var inst_16378 = cljs.core.take.call(null,inst_16377,inst_16376);var inst_16379 = cljs.core.pr_str.call(null,inst_16378);var inst_16380 = console.log(inst_16379);var state_16589__$1 = (function (){var statearr_16697 = state_16589;(statearr_16697[(33)] = inst_16380);
return statearr_16697;
})();var statearr_16698_16824 = state_16589__$1;(statearr_16698_16824[(2)] = inst_16321);
(statearr_16698_16824[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (16)))
{var inst_16349 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16699_16825 = state_16589__$1;(statearr_16699_16825[(2)] = inst_16349);
(statearr_16699_16825[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (38)))
{var inst_16321 = (state_16589[(10)]);var inst_16361 = (state_16589[(11)]);var inst_16413 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16414 = test.stock4.sd.call(null,inst_16361,inst_16413);var inst_16415 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16416 = test.stock4.z_score.call(null,inst_16361,inst_16415);var inst_16417 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_16321);var inst_16418 = cljs.core.count.call(null,inst_16417);var inst_16419 = cljs.core.take.call(null,inst_16418,inst_16414);var inst_16420 = cljs.core.assoc.call(null,inst_16321,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_16419);var inst_16421 = draw.call(null,inst_16420);var state_16589__$1 = (function (){var statearr_16700 = state_16589;(statearr_16700[(34)] = inst_16416);
return statearr_16700;
})();var statearr_16701_16826 = state_16589__$1;(statearr_16701_16826[(2)] = inst_16421);
(statearr_16701_16826[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (30)))
{var inst_16360 = (state_16589[(18)]);var inst_16390 = cljs.core._EQ_.call(null,"yu-pre",inst_16360);var state_16589__$1 = state_16589;if(inst_16390)
{var statearr_16702_16827 = state_16589__$1;(statearr_16702_16827[(1)] = (32));
} else
{var statearr_16703_16828 = state_16589__$1;(statearr_16703_16828[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (73)))
{var inst_16528 = (state_16589[(9)]);var inst_16532 = cljs.core.chunk_first.call(null,inst_16528);var inst_16533 = cljs.core.chunk_rest.call(null,inst_16528);var inst_16534 = cljs.core.count.call(null,inst_16532);var inst_16514 = inst_16533;var inst_16515 = inst_16532;var inst_16516 = inst_16534;var inst_16517 = (0);var state_16589__$1 = (function (){var statearr_16704 = state_16589;(statearr_16704[(7)] = inst_16517);
(statearr_16704[(12)] = inst_16515);
(statearr_16704[(13)] = inst_16514);
(statearr_16704[(8)] = inst_16516);
return statearr_16704;
})();var statearr_16705_16829 = state_16589__$1;(statearr_16705_16829[(2)] = null);
(statearr_16705_16829[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (10)))
{var inst_16329 = (state_16589[(27)]);var inst_16327 = (state_16589[(31)]);var inst_16327__$1 = (state_16589[(2)]);var inst_16328 = cljs.core.nth.call(null,inst_16327__$1,(0),null);var inst_16329__$1 = cljs.core.nth.call(null,inst_16327__$1,(1),null);var inst_16333 = cljs.core._EQ_.call(null,onSystem,inst_16329__$1);var state_16589__$1 = (function (){var statearr_16706 = state_16589;(statearr_16706[(17)] = inst_16328);
(statearr_16706[(27)] = inst_16329__$1);
(statearr_16706[(31)] = inst_16327__$1);
return statearr_16706;
})();if(inst_16333)
{var statearr_16707_16830 = state_16589__$1;(statearr_16707_16830[(1)] = (11));
} else
{var statearr_16708_16831 = state_16589__$1;(statearr_16708_16831[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (18)))
{var inst_16321 = (state_16589[(10)]);var state_16589__$1 = state_16589;var statearr_16712_16832 = state_16589__$1;(statearr_16712_16832[(2)] = inst_16321);
(statearr_16712_16832[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (52)))
{var inst_16561 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16713_16833 = state_16589__$1;(statearr_16713_16833[(2)] = inst_16561);
(statearr_16713_16833[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (67)))
{var inst_16517 = (state_16589[(7)]);var inst_16515 = (state_16589[(12)]);var inst_16514 = (state_16589[(13)]);var inst_16516 = (state_16589[(8)]);var inst_16522 = cljs.core._nth.call(null,inst_16515,inst_16517);var inst_16523 = cljs.core.pr_str.call(null,inst_16522);var inst_16524 = console.log(inst_16523);var inst_16525 = (inst_16517 + (1));var tmp16709 = inst_16515;var tmp16710 = inst_16514;var tmp16711 = inst_16516;var inst_16514__$1 = tmp16710;var inst_16515__$1 = tmp16709;var inst_16516__$1 = tmp16711;var inst_16517__$1 = inst_16525;var state_16589__$1 = (function (){var statearr_16714 = state_16589;(statearr_16714[(7)] = inst_16517__$1);
(statearr_16714[(12)] = inst_16515__$1);
(statearr_16714[(13)] = inst_16514__$1);
(statearr_16714[(35)] = inst_16524);
(statearr_16714[(8)] = inst_16516__$1);
return statearr_16714;
})();var statearr_16715_16834 = state_16589__$1;(statearr_16715_16834[(2)] = null);
(statearr_16715_16834[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (71)))
{var state_16589__$1 = state_16589;var statearr_16716_16835 = state_16589__$1;(statearr_16716_16835[(2)] = null);
(statearr_16716_16835[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (42)))
{var inst_16360 = (state_16589[(18)]);var inst_16431 = cljs.core._EQ_.call(null,"ema",inst_16360);var state_16589__$1 = state_16589;if(inst_16431)
{var statearr_16717_16836 = state_16589__$1;(statearr_16717_16836[(1)] = (44));
} else
{var statearr_16718_16837 = state_16589__$1;(statearr_16718_16837[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (37)))
{var inst_16571 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16719_16838 = state_16589__$1;(statearr_16719_16838[(2)] = inst_16571);
(statearr_16719_16838[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (63)))
{var inst_16321 = (state_16589[(10)]);var state_16589__$1 = state_16589;var statearr_16720_16839 = state_16589__$1;(statearr_16720_16839[(2)] = inst_16321);
(statearr_16720_16839[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (8)))
{var inst_16313 = (state_16589[(15)]);var state_16589__$1 = state_16589;var statearr_16721_16840 = state_16589__$1;(statearr_16721_16840[(2)] = inst_16313);
(statearr_16721_16840[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16590 === (49)))
{var inst_16563 = (state_16589[(2)]);var state_16589__$1 = state_16589;var statearr_16722_16841 = state_16589__$1;(statearr_16722_16841[(2)] = inst_16563);
(statearr_16722_16841[(1)] = (46));
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
});})(c__6203__auto___16739,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto___16739,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16726[(0)] = state_machine__6189__auto__);
(statearr_16726[(1)] = (1));
return statearr_16726;
});
var state_machine__6189__auto____1 = (function (state_16589){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16727){if((e16727 instanceof Object))
{var ex__6192__auto__ = e16727;var statearr_16728_16842 = state_16589;(statearr_16728_16842[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16843 = state_16589;
state_16589 = G__16843;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16589){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___16739,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_16729 = f__6204__auto__.call(null);(statearr_16729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___16739);
return statearr_16729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___16739,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
