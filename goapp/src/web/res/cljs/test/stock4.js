// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__131100_SHARP_){return cljs.core.nth.call(null,p1__131100_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__131101_SHARP_){return cljs.core.nth.call(null,p1__131101_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__131109 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__131109,(0),null);var min_v = cljs.core.nth.call(null,vec__131109,(1),null);var offset_v = cljs.core.nth.call(null,vec__131109,(2),null);var offset_x = cljs.core.nth.call(null,vec__131109,(3),null);var pos_y = cljs.core.nth.call(null,vec__131109,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__131110_131116 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__131109,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__131120__delegate = function (args){return args;
};
var G__131120 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__131120__delegate.call(this,args);};
G__131120.cljs$lang$maxFixedArity = 0;
G__131120.cljs$lang$applyTo = (function (arglist__131121){
var args = cljs.core.seq(arglist__131121);
return G__131120__delegate(args);
});
G__131120.cljs$core$IFn$_invoke$arity$variadic = G__131120__delegate;
return G__131120;
})()
;})(vec__131109,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__131111_131117 = null;var count__131112_131118 = (0);var i__131113_131119 = (0);while(true){
if((i__131113_131119 < count__131112_131118))
{var vec__131114_131122 = cljs.core._nth.call(null,chunk__131111_131117,i__131113_131119);var idx_131123 = cljs.core.nth.call(null,vec__131114_131122,(0),null);var prev_131124 = cljs.core.nth.call(null,vec__131114_131122,(1),null);var curr_131125 = cljs.core.nth.call(null,vec__131114_131122,(2),null);if((typeof prev_131124 === 'number') && (typeof curr_131125 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_131123 * offset_x),pos_y.call(null,prev_131124));
ctx.lineTo(((idx_131123 + (1)) * offset_x),pos_y.call(null,curr_131125));
ctx.stroke();
} else
{}
{
var G__131126 = seq__131110_131116;
var G__131127 = chunk__131111_131117;
var G__131128 = count__131112_131118;
var G__131129 = (i__131113_131119 + (1));
seq__131110_131116 = G__131126;
chunk__131111_131117 = G__131127;
count__131112_131118 = G__131128;
i__131113_131119 = G__131129;
continue;
}
} else
{var temp__4126__auto___131130 = cljs.core.seq.call(null,seq__131110_131116);if(temp__4126__auto___131130)
{var seq__131110_131131__$1 = temp__4126__auto___131130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__131110_131131__$1))
{var c__4307__auto___131132 = cljs.core.chunk_first.call(null,seq__131110_131131__$1);{
var G__131133 = cljs.core.chunk_rest.call(null,seq__131110_131131__$1);
var G__131134 = c__4307__auto___131132;
var G__131135 = cljs.core.count.call(null,c__4307__auto___131132);
var G__131136 = (0);
seq__131110_131116 = G__131133;
chunk__131111_131117 = G__131134;
count__131112_131118 = G__131135;
i__131113_131119 = G__131136;
continue;
}
} else
{var vec__131115_131137 = cljs.core.first.call(null,seq__131110_131131__$1);var idx_131138 = cljs.core.nth.call(null,vec__131115_131137,(0),null);var prev_131139 = cljs.core.nth.call(null,vec__131115_131137,(1),null);var curr_131140 = cljs.core.nth.call(null,vec__131115_131137,(2),null);if((typeof prev_131139 === 'number') && (typeof curr_131140 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_131138 * offset_x),pos_y.call(null,prev_131139));
ctx.lineTo(((idx_131138 + (1)) * offset_x),pos_y.call(null,curr_131140));
ctx.stroke();
} else
{}
{
var G__131141 = cljs.core.next.call(null,seq__131110_131131__$1);
var G__131142 = null;
var G__131143 = (0);
var G__131144 = (0);
seq__131110_131116 = G__131141;
chunk__131111_131117 = G__131142;
count__131112_131118 = G__131143;
i__131113_131119 = G__131144;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__131145){var vec__131160 = p__131145;var rsv = cljs.core.nth.call(null,vec__131160,(0),null);var k = cljs.core.nth.call(null,vec__131160,(1),null);var d = cljs.core.nth.call(null,vec__131160,(2),null);var kd = vec__131160;var vec__131161 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__131161,(0),null);var min_v = cljs.core.nth.call(null,vec__131161,(1),null);var offset_v = cljs.core.nth.call(null,vec__131161,(2),null);var offset_x = cljs.core.nth.call(null,vec__131161,(3),null);var pos_y = cljs.core.nth.call(null,vec__131161,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__131162_131174 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__131161,max_v,min_v,offset_v,offset_x,pos_y,vec__131160,rsv,k,d,kd){
return (function() { 
var G__131178__delegate = function (args){return args;
};
var G__131178 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__131178__delegate.call(this,args);};
G__131178.cljs$lang$maxFixedArity = 0;
G__131178.cljs$lang$applyTo = (function (arglist__131179){
var args = cljs.core.seq(arglist__131179);
return G__131178__delegate(args);
});
G__131178.cljs$core$IFn$_invoke$arity$variadic = G__131178__delegate;
return G__131178;
})()
;})(vec__131161,max_v,min_v,offset_v,offset_x,pos_y,vec__131160,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__131163_131175 = null;var count__131164_131176 = (0);var i__131165_131177 = (0);while(true){
if((i__131165_131177 < count__131164_131176))
{var vec__131166_131180 = cljs.core._nth.call(null,chunk__131163_131175,i__131165_131177);var idx_131181 = cljs.core.nth.call(null,vec__131166_131180,(0),null);var prev_131182 = cljs.core.nth.call(null,vec__131166_131180,(1),null);var curr_131183 = cljs.core.nth.call(null,vec__131166_131180,(2),null);ctx.beginPath();
ctx.moveTo((idx_131181 * offset_x),(((1) - (prev_131182 / (100))) * h));
ctx.lineTo(((idx_131181 + (1)) * offset_x),(((1) - (curr_131183 / (100))) * h));
ctx.stroke();
{
var G__131184 = seq__131162_131174;
var G__131185 = chunk__131163_131175;
var G__131186 = count__131164_131176;
var G__131187 = (i__131165_131177 + (1));
seq__131162_131174 = G__131184;
chunk__131163_131175 = G__131185;
count__131164_131176 = G__131186;
i__131165_131177 = G__131187;
continue;
}
} else
{var temp__4126__auto___131188 = cljs.core.seq.call(null,seq__131162_131174);if(temp__4126__auto___131188)
{var seq__131162_131189__$1 = temp__4126__auto___131188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__131162_131189__$1))
{var c__4307__auto___131190 = cljs.core.chunk_first.call(null,seq__131162_131189__$1);{
var G__131191 = cljs.core.chunk_rest.call(null,seq__131162_131189__$1);
var G__131192 = c__4307__auto___131190;
var G__131193 = cljs.core.count.call(null,c__4307__auto___131190);
var G__131194 = (0);
seq__131162_131174 = G__131191;
chunk__131163_131175 = G__131192;
count__131164_131176 = G__131193;
i__131165_131177 = G__131194;
continue;
}
} else
{var vec__131167_131195 = cljs.core.first.call(null,seq__131162_131189__$1);var idx_131196 = cljs.core.nth.call(null,vec__131167_131195,(0),null);var prev_131197 = cljs.core.nth.call(null,vec__131167_131195,(1),null);var curr_131198 = cljs.core.nth.call(null,vec__131167_131195,(2),null);ctx.beginPath();
ctx.moveTo((idx_131196 * offset_x),(((1) - (prev_131197 / (100))) * h));
ctx.lineTo(((idx_131196 + (1)) * offset_x),(((1) - (curr_131198 / (100))) * h));
ctx.stroke();
{
var G__131199 = cljs.core.next.call(null,seq__131162_131189__$1);
var G__131200 = null;
var G__131201 = (0);
var G__131202 = (0);
seq__131162_131174 = G__131199;
chunk__131163_131175 = G__131200;
count__131164_131176 = G__131201;
i__131165_131177 = G__131202;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__131168_131203 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__131161,max_v,min_v,offset_v,offset_x,pos_y,vec__131160,rsv,k,d,kd){
return (function() { 
var G__131207__delegate = function (args){return args;
};
var G__131207 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__131207__delegate.call(this,args);};
G__131207.cljs$lang$maxFixedArity = 0;
G__131207.cljs$lang$applyTo = (function (arglist__131208){
var args = cljs.core.seq(arglist__131208);
return G__131207__delegate(args);
});
G__131207.cljs$core$IFn$_invoke$arity$variadic = G__131207__delegate;
return G__131207;
})()
;})(vec__131161,max_v,min_v,offset_v,offset_x,pos_y,vec__131160,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__131169_131204 = null;var count__131170_131205 = (0);var i__131171_131206 = (0);while(true){
if((i__131171_131206 < count__131170_131205))
{var vec__131172_131209 = cljs.core._nth.call(null,chunk__131169_131204,i__131171_131206);var idx_131210 = cljs.core.nth.call(null,vec__131172_131209,(0),null);var prev_131211 = cljs.core.nth.call(null,vec__131172_131209,(1),null);var curr_131212 = cljs.core.nth.call(null,vec__131172_131209,(2),null);ctx.beginPath();
ctx.moveTo((idx_131210 * offset_x),(((1) - (prev_131211 / (100))) * h));
ctx.lineTo(((idx_131210 + (1)) * offset_x),(((1) - (curr_131212 / (100))) * h));
ctx.stroke();
{
var G__131213 = seq__131168_131203;
var G__131214 = chunk__131169_131204;
var G__131215 = count__131170_131205;
var G__131216 = (i__131171_131206 + (1));
seq__131168_131203 = G__131213;
chunk__131169_131204 = G__131214;
count__131170_131205 = G__131215;
i__131171_131206 = G__131216;
continue;
}
} else
{var temp__4126__auto___131217 = cljs.core.seq.call(null,seq__131168_131203);if(temp__4126__auto___131217)
{var seq__131168_131218__$1 = temp__4126__auto___131217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__131168_131218__$1))
{var c__4307__auto___131219 = cljs.core.chunk_first.call(null,seq__131168_131218__$1);{
var G__131220 = cljs.core.chunk_rest.call(null,seq__131168_131218__$1);
var G__131221 = c__4307__auto___131219;
var G__131222 = cljs.core.count.call(null,c__4307__auto___131219);
var G__131223 = (0);
seq__131168_131203 = G__131220;
chunk__131169_131204 = G__131221;
count__131170_131205 = G__131222;
i__131171_131206 = G__131223;
continue;
}
} else
{var vec__131173_131224 = cljs.core.first.call(null,seq__131168_131218__$1);var idx_131225 = cljs.core.nth.call(null,vec__131173_131224,(0),null);var prev_131226 = cljs.core.nth.call(null,vec__131173_131224,(1),null);var curr_131227 = cljs.core.nth.call(null,vec__131173_131224,(2),null);ctx.beginPath();
ctx.moveTo((idx_131225 * offset_x),(((1) - (prev_131226 / (100))) * h));
ctx.lineTo(((idx_131225 + (1)) * offset_x),(((1) - (curr_131227 / (100))) * h));
ctx.stroke();
{
var G__131228 = cljs.core.next.call(null,seq__131168_131218__$1);
var G__131229 = null;
var G__131230 = (0);
var G__131231 = (0);
seq__131168_131203 = G__131228;
chunk__131169_131204 = G__131229;
count__131170_131205 = G__131230;
i__131171_131206 = G__131231;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__131242 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__131242,(0),null);var min_v = cljs.core.nth.call(null,vec__131242,(1),null);var offset_v = cljs.core.nth.call(null,vec__131242,(2),null);var offset_x = cljs.core.nth.call(null,vec__131242,(3),null);var pos_y = cljs.core.nth.call(null,vec__131242,(4),null);(ctx["fillStyle"] = "black");
var seq__131243 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__131242,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__131251__delegate = function (args){return args;
};
var G__131251 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__131251__delegate.call(this,args);};
G__131251.cljs$lang$maxFixedArity = 0;
G__131251.cljs$lang$applyTo = (function (arglist__131252){
var args = cljs.core.seq(arglist__131252);
return G__131251__delegate(args);
});
G__131251.cljs$core$IFn$_invoke$arity$variadic = G__131251__delegate;
return G__131251;
})()
;})(vec__131242,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__131244 = null;var count__131245 = (0);var i__131246 = (0);while(true){
if((i__131246 < count__131245))
{var vec__131247 = cljs.core._nth.call(null,chunk__131244,i__131246);var idx = cljs.core.nth.call(null,vec__131247,(0),null);var vec__131248 = cljs.core.nth.call(null,vec__131247,(1),null);var date = cljs.core.nth.call(null,vec__131248,(0),null);var _ = cljs.core.nthnext.call(null,vec__131248,(1));var line = vec__131248;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__131243,chunk__131244,count__131245,i__131246,vec__131247,idx,vec__131248,date,_,line,vec__131242,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__131232_SHARP_){return cljs.core._EQ_.call(null,date,p1__131232_SHARP_);
});})(seq__131243,chunk__131244,count__131245,i__131246,vec__131247,idx,vec__131248,date,_,line,vec__131242,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__131253 = seq__131243;
var G__131254 = chunk__131244;
var G__131255 = count__131245;
var G__131256 = (i__131246 + (1));
seq__131243 = G__131253;
chunk__131244 = G__131254;
count__131245 = G__131255;
i__131246 = G__131256;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__131243);if(temp__4126__auto__)
{var seq__131243__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__131243__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__131243__$1);{
var G__131257 = cljs.core.chunk_rest.call(null,seq__131243__$1);
var G__131258 = c__4307__auto__;
var G__131259 = cljs.core.count.call(null,c__4307__auto__);
var G__131260 = (0);
seq__131243 = G__131257;
chunk__131244 = G__131258;
count__131245 = G__131259;
i__131246 = G__131260;
continue;
}
} else
{var vec__131249 = cljs.core.first.call(null,seq__131243__$1);var idx = cljs.core.nth.call(null,vec__131249,(0),null);var vec__131250 = cljs.core.nth.call(null,vec__131249,(1),null);var date = cljs.core.nth.call(null,vec__131250,(0),null);var _ = cljs.core.nthnext.call(null,vec__131250,(1));var line = vec__131250;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__131243,chunk__131244,count__131245,i__131246,vec__131249,idx,vec__131250,date,_,line,seq__131243__$1,temp__4126__auto__,vec__131242,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__131232_SHARP_){return cljs.core._EQ_.call(null,date,p1__131232_SHARP_);
});})(seq__131243,chunk__131244,count__131245,i__131246,vec__131249,idx,vec__131250,date,_,line,seq__131243__$1,temp__4126__auto__,vec__131242,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__131261 = cljs.core.next.call(null,seq__131243__$1);
var G__131262 = null;
var G__131263 = (0);
var G__131264 = (0);
seq__131243 = G__131261;
chunk__131244 = G__131262;
count__131245 = G__131263;
i__131246 = G__131264;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__131274 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__131274,(0),null);var min_v = cljs.core.nth.call(null,vec__131274,(1),null);var offset_v = cljs.core.nth.call(null,vec__131274,(2),null);var offset_x = cljs.core.nth.call(null,vec__131274,(3),null);var pos_y = cljs.core.nth.call(null,vec__131274,(4),null);var seq__131275 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__131274,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__131283__delegate = function (args){return args;
};
var G__131283 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__131283__delegate.call(this,args);};
G__131283.cljs$lang$maxFixedArity = 0;
G__131283.cljs$lang$applyTo = (function (arglist__131284){
var args = cljs.core.seq(arglist__131284);
return G__131283__delegate(args);
});
G__131283.cljs$core$IFn$_invoke$arity$variadic = G__131283__delegate;
return G__131283;
})()
;})(vec__131274,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__131276 = null;var count__131277 = (0);var i__131278 = (0);while(true){
if((i__131278 < count__131277))
{var vec__131279 = cljs.core._nth.call(null,chunk__131276,i__131278);var idx = cljs.core.nth.call(null,vec__131279,(0),null);var vec__131280 = cljs.core.nth.call(null,vec__131279,(1),null);var date = cljs.core.nth.call(null,vec__131280,(0),null);var open = cljs.core.nth.call(null,vec__131280,(1),null);var high = cljs.core.nth.call(null,vec__131280,(2),null);var low = cljs.core.nth.call(null,vec__131280,(3),null);var close = cljs.core.nth.call(null,vec__131280,(4),null);var volume = cljs.core.nth.call(null,vec__131280,(5),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__131285 = seq__131275;
var G__131286 = chunk__131276;
var G__131287 = count__131277;
var G__131288 = (i__131278 + (1));
seq__131275 = G__131285;
chunk__131276 = G__131286;
count__131277 = G__131287;
i__131278 = G__131288;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__131275);if(temp__4126__auto__)
{var seq__131275__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__131275__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__131275__$1);{
var G__131289 = cljs.core.chunk_rest.call(null,seq__131275__$1);
var G__131290 = c__4307__auto__;
var G__131291 = cljs.core.count.call(null,c__4307__auto__);
var G__131292 = (0);
seq__131275 = G__131289;
chunk__131276 = G__131290;
count__131277 = G__131291;
i__131278 = G__131292;
continue;
}
} else
{var vec__131281 = cljs.core.first.call(null,seq__131275__$1);var idx = cljs.core.nth.call(null,vec__131281,(0),null);var vec__131282 = cljs.core.nth.call(null,vec__131281,(1),null);var date = cljs.core.nth.call(null,vec__131282,(0),null);var open = cljs.core.nth.call(null,vec__131282,(1),null);var high = cljs.core.nth.call(null,vec__131282,(2),null);var low = cljs.core.nth.call(null,vec__131282,(3),null);var close = cljs.core.nth.call(null,vec__131282,(4),null);var volume = cljs.core.nth.call(null,vec__131282,(5),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__131293 = cljs.core.next.call(null,seq__131275__$1);
var G__131294 = null;
var G__131295 = (0);
var G__131296 = (0);
seq__131275 = G__131293;
chunk__131276 = G__131294;
count__131277 = G__131295;
i__131278 = G__131296;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__131300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__131300,(0),null);var h = cljs.core.nth.call(null,vec__131300,(1),null);return ((function (ctx,vec__131300,w,h){
return (function (p__131301){var map__131302 = p__131301;var map__131302__$1 = ((cljs.core.seq_QMARK_.call(null,map__131302))?cljs.core.apply.call(null,cljs.core.hash_map,map__131302):map__131302);var appctx = map__131302__$1;var kline = cljs.core.get.call(null,map__131302__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__131302__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var kd = cljs.core.get.call(null,map__131302__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__131302__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var avgs = cljs.core.get.call(null,map__131302__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__131302__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "gray");
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
return appctx;
});
;})(ctx,vec__131300,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj131340 = {"url":"/proxy","dataType":"text","data":(function (){var obj131342 = {"url":url};return obj131342;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_131349){var state_val_131350 = (state_131349[(1)]);if((state_val_131350 === (2)))
{var inst_131346 = (state_131349[(2)]);var inst_131347 = cljs.core.async.close_BANG_.call(null,ret);var state_131349__$1 = (function (){var statearr_131351 = state_131349;(statearr_131351[(7)] = inst_131346);
return statearr_131351;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131349__$1,inst_131347);
} else
{if((state_val_131350 === (1)))
{var inst_131343 = [null,data];var inst_131344 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131343,null));var state_131349__$1 = state_131349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131349__$1,(2),ret,inst_131344);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131355 = [null,null,null,null,null,null,null,null];(statearr_131355[(0)] = state_machine__6188__auto__);
(statearr_131355[(1)] = (1));
return statearr_131355;
});
var state_machine__6188__auto____1 = (function (state_131349){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131356){if((e131356 instanceof Object))
{var ex__6191__auto__ = e131356;var statearr_131357_131375 = state_131349;(statearr_131357_131375[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131349);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131376 = state_131349;
state_131349 = G__131376;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131349){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_131358 = f__6203__auto__.call(null);(statearr_131358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_131358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_131365){var state_val_131366 = (state_131365[(1)]);if((state_val_131366 === (2)))
{var inst_131362 = (state_131365[(2)]);var inst_131363 = cljs.core.async.close_BANG_.call(null,ret);var state_131365__$1 = (function (){var statearr_131367 = state_131365;(statearr_131367[(7)] = inst_131362);
return statearr_131367;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131365__$1,inst_131363);
} else
{if((state_val_131366 === (1)))
{var inst_131359 = [err];var inst_131360 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131359,null));var state_131365__$1 = state_131365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131365__$1,(2),ret,inst_131360);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131371 = [null,null,null,null,null,null,null,null];(statearr_131371[(0)] = state_machine__6188__auto__);
(statearr_131371[(1)] = (1));
return statearr_131371;
});
var state_machine__6188__auto____1 = (function (state_131365){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131365);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131372){if((e131372 instanceof Object))
{var ex__6191__auto__ = e131372;var statearr_131373_131377 = state_131365;(statearr_131373_131377[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131365);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131378 = state_131365;
state_131365 = G__131378;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131365){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_131374 = f__6203__auto__.call(null);(statearr_131374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_131374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj131340;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__131387(s__131388){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__131388__$1 = s__131388;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__131388__$1);if(temp__4126__auto__)
{var s__131388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__131388__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__131388__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__131390 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__131389 = (0);while(true){
if((i__131389 < size__4275__auto__))
{var vec__131393 = cljs.core._nth.call(null,c__4274__auto__,i__131389);var _ = cljs.core.nth.call(null,vec__131393,(0),null);var date = cljs.core.nth.call(null,vec__131393,(1),null);var open = cljs.core.nth.call(null,vec__131393,(2),null);var high = cljs.core.nth.call(null,vec__131393,(3),null);var low = cljs.core.nth.call(null,vec__131393,(4),null);var close = cljs.core.nth.call(null,vec__131393,(5),null);var volume = cljs.core.nth.call(null,vec__131393,(6),null);cljs.core.chunk_append.call(null,b__131390,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__131395 = (i__131389 + (1));
i__131389 = G__131395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__131390),iter__131387.call(null,cljs.core.chunk_rest.call(null,s__131388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__131390),null);
}
} else
{var vec__131394 = cljs.core.first.call(null,s__131388__$2);var _ = cljs.core.nth.call(null,vec__131394,(0),null);var date = cljs.core.nth.call(null,vec__131394,(1),null);var open = cljs.core.nth.call(null,vec__131394,(2),null);var high = cljs.core.nth.call(null,vec__131394,(3),null);var low = cljs.core.nth.call(null,vec__131394,(4),null);var close = cljs.core.nth.call(null,vec__131394,(5),null);var volume = cljs.core.nth.call(null,vec__131394,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__131387.call(null,cljs.core.rest.call(null,s__131388__$2)));
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
return (function (state_131473){var state_val_131474 = (state_131473[(1)]);if((state_val_131474 === (9)))
{var inst_131463 = (state_131473[(2)]);var state_131473__$1 = state_131473;var statearr_131475_131492 = state_131473__$1;(statearr_131475_131492[(2)] = inst_131463);
(statearr_131475_131492[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131474 === (8)))
{var inst_131469 = (state_131473[(2)]);var state_131473__$1 = state_131473;var statearr_131476_131493 = state_131473__$1;(statearr_131476_131493[(2)] = inst_131469);
(statearr_131476_131493[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131474 === (7)))
{var inst_131455 = (state_131473[(7)]);var inst_131465 = cljs.core.concat.call(null,all,inst_131455);var inst_131466 = [null,inst_131465];var inst_131467 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131466,null));var state_131473__$1 = state_131473;var statearr_131477_131494 = state_131473__$1;(statearr_131477_131494[(2)] = inst_131467);
(statearr_131477_131494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131474 === (6)))
{var inst_131455 = (state_131473[(7)]);var inst_131459 = cljs.core.concat.call(null,all,inst_131455);var inst_131460 = (start + num);var inst_131461 = stock_info.call(null,inst_131459,id,startdate,inst_131460,num);var state_131473__$1 = state_131473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131473__$1,(9),inst_131461);
} else
{if((state_val_131474 === (5)))
{var inst_131471 = (state_131473[(2)]);var state_131473__$1 = state_131473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131473__$1,inst_131471);
} else
{if((state_val_131474 === (4)))
{var inst_131450 = (state_131473[(8)]);var inst_131455 = (state_131473[(7)]);var inst_131455__$1 = test.stock4.parse_info.call(null,inst_131450);var inst_131456 = cljs.core.count.call(null,inst_131455__$1);var inst_131457 = cljs.core._EQ_.call(null,num,inst_131456);var state_131473__$1 = (function (){var statearr_131478 = state_131473;(statearr_131478[(7)] = inst_131455__$1);
return statearr_131478;
})();if(inst_131457)
{var statearr_131479_131495 = state_131473__$1;(statearr_131479_131495[(1)] = (6));
} else
{var statearr_131480_131496 = state_131473__$1;(statearr_131480_131496[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131474 === (3)))
{var inst_131449 = (state_131473[(9)]);var inst_131452 = [inst_131449];var inst_131453 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131452,null));var state_131473__$1 = state_131473;var statearr_131481_131497 = state_131473__$1;(statearr_131481_131497[(2)] = inst_131453);
(statearr_131481_131497[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131474 === (2)))
{var inst_131449 = (state_131473[(9)]);var inst_131448 = (state_131473[(2)]);var inst_131449__$1 = cljs.core.nth.call(null,inst_131448,(0),null);var inst_131450 = cljs.core.nth.call(null,inst_131448,(1),null);var state_131473__$1 = (function (){var statearr_131482 = state_131473;(statearr_131482[(9)] = inst_131449__$1);
(statearr_131482[(8)] = inst_131450);
return statearr_131482;
})();if(cljs.core.truth_(inst_131449__$1))
{var statearr_131483_131498 = state_131473__$1;(statearr_131483_131498[(1)] = (3));
} else
{var statearr_131484_131499 = state_131473__$1;(statearr_131484_131499[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131474 === (1)))
{var inst_131445 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_131446 = test.stock4.content.call(null,inst_131445);var state_131473__$1 = state_131473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131473__$1,(2),inst_131446);
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
var state_machine__6188__auto____0 = (function (){var statearr_131488 = [null,null,null,null,null,null,null,null,null,null];(statearr_131488[(0)] = state_machine__6188__auto__);
(statearr_131488[(1)] = (1));
return statearr_131488;
});
var state_machine__6188__auto____1 = (function (state_131473){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131489){if((e131489 instanceof Object))
{var ex__6191__auto__ = e131489;var statearr_131490_131500 = state_131473;(statearr_131490_131500[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131501 = state_131473;
state_131473 = G__131501;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131473){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_131491 = f__6203__auto__.call(null);(statearr_131491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_131491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__131510 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__131510,(0),null);var open = cljs.core.nth.call(null,vec__131510,(1),null);var _ = cljs.core.nth.call(null,vec__131510,(2),null);var ___$1 = cljs.core.nth.call(null,vec__131510,(3),null);var ___$2 = cljs.core.nth.call(null,vec__131510,(4),null);var ___$3 = cljs.core.nth.call(null,vec__131510,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__131510,date,open,_,___$1,___$2,___$3){
return (function (p__131512){var vec__131513 = p__131512;var ___$4 = cljs.core.nth.call(null,vec__131513,(0),null);var ___$5 = cljs.core.nth.call(null,vec__131513,(1),null);var high = cljs.core.nth.call(null,vec__131513,(2),null);var ___$6 = cljs.core.nth.call(null,vec__131513,(3),null);var ___$7 = cljs.core.nth.call(null,vec__131513,(4),null);var ___$8 = cljs.core.nth.call(null,vec__131513,(5),null);return high;
});})(group,vec__131510,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__131510,date,open,_,___$1,___$2,___$3,high){
return (function (p__131514){var vec__131515 = p__131514;var ___$4 = cljs.core.nth.call(null,vec__131515,(0),null);var ___$5 = cljs.core.nth.call(null,vec__131515,(1),null);var ___$6 = cljs.core.nth.call(null,vec__131515,(2),null);var low = cljs.core.nth.call(null,vec__131515,(3),null);var ___$7 = cljs.core.nth.call(null,vec__131515,(4),null);var ___$8 = cljs.core.nth.call(null,vec__131515,(5),null);return low;
});})(group,vec__131510,date,open,_,___$1,___$2,___$3,high))
,group));var vec__131511 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__131511,(0),null);var ___$5 = cljs.core.nth.call(null,vec__131511,(1),null);var ___$6 = cljs.core.nth.call(null,vec__131511,(2),null);var ___$7 = cljs.core.nth.call(null,vec__131511,(3),null);var close = cljs.core.nth.call(null,vec__131511,(4),null);var ___$8 = cljs.core.nth.call(null,vec__131511,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__131510,date,open,_,___$1,___$2,___$3,high,low,vec__131511,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__131516){var vec__131517 = p__131516;var ___$9 = cljs.core.nth.call(null,vec__131517,(0),null);var ___$10 = cljs.core.nth.call(null,vec__131517,(1),null);var ___$11 = cljs.core.nth.call(null,vec__131517,(2),null);var ___$12 = cljs.core.nth.call(null,vec__131517,(3),null);var ___$13 = cljs.core.nth.call(null,vec__131517,(4),null);var volume = cljs.core.nth.call(null,vec__131517,(5),null);return volume;
});})(group,vec__131510,date,open,_,___$1,___$2,___$3,high,low,vec__131511,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__131510,date,open,_,___$1,___$2,___$3,high,low,vec__131511,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__131510,date,open,_,___$1,___$2,___$3,high,low,vec__131511,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__131521 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__131521,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131521,(1),null);var ___$2 = cljs.core.nth.call(null,vec__131521,(2),null);var ___$3 = cljs.core.nth.call(null,vec__131521,(3),null);var c1 = cljs.core.nth.call(null,vec__131521,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131521,(5),null);var l1 = vec__131521;var vec__131522 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__131522,(0),null);var ___$5 = cljs.core.nth.call(null,vec__131522,(1),null);var ___$6 = cljs.core.nth.call(null,vec__131522,(2),null);var ___$7 = cljs.core.nth.call(null,vec__131522,(3),null);var c2 = cljs.core.nth.call(null,vec__131522,(4),null);var ___$8 = cljs.core.nth.call(null,vec__131522,(5),null);var l2 = vec__131522;var vec__131523 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__131523,(0),null);var ___$10 = cljs.core.nth.call(null,vec__131523,(1),null);var ___$11 = cljs.core.nth.call(null,vec__131523,(2),null);var ___$12 = cljs.core.nth.call(null,vec__131523,(3),null);var c3 = cljs.core.nth.call(null,vec__131523,(4),null);var ___$13 = cljs.core.nth.call(null,vec__131523,(5),null);var l3 = vec__131523;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__131521,_,___$1,___$2,___$3,c1,___$4,l1,vec__131522,date,___$5,___$6,___$7,c2,___$8,l2,vec__131523,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__131521,_,___$1,___$2,___$3,c1,___$4,l1,vec__131522,date,___$5,___$6,___$7,c2,___$8,l2,vec__131523,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__131528){var vec__131529 = p__131528;var _ = cljs.core.nth.call(null,vec__131529,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131529,(1),null);var high = cljs.core.nth.call(null,vec__131529,(2),null);var low = cljs.core.nth.call(null,vec__131529,(3),null);var ___$2 = cljs.core.nth.call(null,vec__131529,(4),null);var ___$3 = cljs.core.nth.call(null,vec__131529,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__131527 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__131527,(0),null);var open = cljs.core.nth.call(null,vec__131527,(1),null);var high = cljs.core.nth.call(null,vec__131527,(2),null);var low = cljs.core.nth.call(null,vec__131527,(3),null);var close = cljs.core.nth.call(null,vec__131527,(4),null);var ___$1 = cljs.core.nth.call(null,vec__131527,(5),null);var curr = vec__131527;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__131527,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__131527,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__131532){var vec__131533 = p__131532;var _ = cljs.core.nth.call(null,vec__131533,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131533,(1),null);var ___$2 = cljs.core.nth.call(null,vec__131533,(2),null);var ___$3 = cljs.core.nth.call(null,vec__131533,(3),null);var close = cljs.core.nth.call(null,vec__131533,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131533,(5),null);return close;
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
return (function (p__131536){var vec__131537 = p__131536;var _ = cljs.core.nth.call(null,vec__131537,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131537,(1),null);var ___$2 = cljs.core.nth.call(null,vec__131537,(2),null);var ___$3 = cljs.core.nth.call(null,vec__131537,(3),null);var close = cljs.core.nth.call(null,vec__131537,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131537,(5),null);return close;
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
* 點線賺錢術的 Exponentional Moving Average 指數移動平均線。使用了加權型式，w為1可用於計算MACD
* 這個計算上較為正確，和yahoo股市算的很接近
*/
test.stock4.ema = (function ema(n,w,kline){var vec__131543 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__131543,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131543,(1),null);var ___$2 = cljs.core.nth.call(null,vec__131543,(2),null);var ___$3 = cljs.core.nth.call(null,vec__131543,(3),null);var close = cljs.core.nth.call(null,vec__131543,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131543,(5),null);var curr = vec__131543;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__131543,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__131544){var vec__131545 = p__131544;var vec__131546 = cljs.core.nth.call(null,vec__131545,(0),null);var ___$5 = cljs.core.nth.call(null,vec__131546,(0),null);var prev_ema = cljs.core.nth.call(null,vec__131546,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__131545,(1),null);var idx = cljs.core.nth.call(null,vec__131545,(2),null);var vec__131547 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__131547,(0),null);var ___$7 = cljs.core.nth.call(null,vec__131547,(1),null);var ___$8 = cljs.core.nth.call(null,vec__131547,(2),null);var ___$9 = cljs.core.nth.call(null,vec__131547,(3),null);var close__$1 = cljs.core.nth.call(null,vec__131547,(4),null);var ___$10 = cljs.core.nth.call(null,vec__131547,(5),null);var curr__$1 = vec__131547;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__131543,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__131553 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__131553,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131553,(1),null);var ___$2 = cljs.core.nth.call(null,vec__131553,(2),null);var ___$3 = cljs.core.nth.call(null,vec__131553,(3),null);var ct = cljs.core.nth.call(null,vec__131553,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131553,(5),null);var curr = vec__131553;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__131553,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__131554){var vec__131555 = p__131554;var ___$5 = cljs.core.nth.call(null,vec__131555,(0),null);var ___$6 = cljs.core.nth.call(null,vec__131555,(1),null);var ___$7 = cljs.core.nth.call(null,vec__131555,(2),null);var low = cljs.core.nth.call(null,vec__131555,(3),null);var ___$8 = cljs.core.nth.call(null,vec__131555,(4),null);var ___$9 = cljs.core.nth.call(null,vec__131555,(5),null);return low;
});})(group,vec__131553,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__131553,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__131556){var vec__131557 = p__131556;var ___$5 = cljs.core.nth.call(null,vec__131557,(0),null);var ___$6 = cljs.core.nth.call(null,vec__131557,(1),null);var high = cljs.core.nth.call(null,vec__131557,(2),null);var ___$7 = cljs.core.nth.call(null,vec__131557,(3),null);var ___$8 = cljs.core.nth.call(null,vec__131557,(4),null);var ___$9 = cljs.core.nth.call(null,vec__131557,(5),null);return high;
});})(group,vec__131553,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__131553,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__131553,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__131560){var vec__131561 = p__131560;var line = cljs.core.nth.call(null,vec__131561,(0),null);var v = cljs.core.nth.call(null,vec__131561,(1),null);return v;
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
* 沒有計算反向作空，所以只看支撐線
*/
test.stock4.sar = (function sar(reverse_kline){if((cljs.core.count.call(null,reverse_kline) > (3)))
{var first_line = cljs.core.first.call(null,cljs.core.drop.call(null,(2),reverse_kline));var max_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (first_line){
return (function (p__131578){var vec__131579 = p__131578;var _ = cljs.core.nth.call(null,vec__131579,(0),null);var ___$1 = cljs.core.nth.call(null,vec__131579,(1),null);var ___$2 = cljs.core.nth.call(null,vec__131579,(2),null);var low = cljs.core.nth.call(null,vec__131579,(3),null);var ___$3 = cljs.core.nth.call(null,vec__131579,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131579,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,max_v){
return (function (p__131580){var vec__131581 = p__131580;var vec__131582 = cljs.core.nth.call(null,vec__131581,(0),null);var _ = cljs.core.nth.call(null,vec__131582,(0),null);var value = cljs.core.nth.call(null,vec__131582,(1),null);var prev = cljs.core.nth.call(null,vec__131581,(1),null);var curr = cljs.core.nth.call(null,vec__131581,(2),null);var act = cljs.core.nth.call(null,vec__131581,(3),null);var af = cljs.core.nth.call(null,vec__131581,(4),null);var vec__131583 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__131583,(0),null);var ___$2 = cljs.core.nth.call(null,vec__131583,(1),null);var ph = cljs.core.nth.call(null,vec__131583,(2),null);var pl = cljs.core.nth.call(null,vec__131583,(3),null);var ___$3 = cljs.core.nth.call(null,vec__131583,(4),null);var ___$4 = cljs.core.nth.call(null,vec__131583,(5),null);var prev_line = vec__131583;var vec__131584 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__131584,(0),null);var ___$6 = cljs.core.nth.call(null,vec__131584,(1),null);var ch = cljs.core.nth.call(null,vec__131584,(2),null);var cl = cljs.core.nth.call(null,vec__131584,(3),null);var ___$7 = cljs.core.nth.call(null,vec__131584,(4),null);var ___$8 = cljs.core.nth.call(null,vec__131584,(5),null);var curr_line = vec__131584;var next_value = (value + (af * (pl - value)));var should_turn = (function (){var pred__131585 = cljs.core._EQ_;var expr__131586 = act;if(cljs.core.truth_(pred__131585.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__131586)))
{return (next_value > cl);
} else
{if(cljs.core.truth_(pred__131585.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__131586)))
{return (next_value < ch);
} else
{if(cljs.core.truth_(pred__131585.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__131586)))
{return false;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__131586))));
}
}
}
})();var next_af = (function (){var pred__131588 = cljs.core._EQ_;var expr__131589 = act;if(cljs.core.truth_(pred__131588.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__131589)))
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
{if(cljs.core.truth_(pred__131588.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__131589)))
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
{if(cljs.core.truth_(pred__131588.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__131589)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__131589))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__131591 = cljs.core._EQ_;var expr__131592 = act;if(cljs.core.truth_(pred__131591.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__131592)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__131591.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__131592)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__131592))));
}
}
})():act);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_line,next_value], null),cljs.core.rest.call(null,prev),cljs.core.rest.call(null,curr),next_act,next_af], null);
});})(first_line,max_v))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_line,max_v], null),cljs.core.drop.call(null,(2),reverse_kline),cljs.core.drop.call(null,(3),reverse_kline),new cljs.core.Keyword(null,"buy","buy",-794379565),0.2], null)));
} else
{return null;
}
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_131987){var state_val_131988 = (state_131987[(1)]);if((state_val_131988 === (2)))
{var inst_131985 = (state_131987[(2)]);var state_131987__$1 = state_131987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131987__$1,inst_131985);
} else
{if((state_val_131988 === (1)))
{var inst_131983 = cljs.core.js__GT_clj.call(null,data);var state_131987__$1 = state_131987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131987__$1,(2),onView,inst_131983);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131992 = [null,null,null,null,null,null,null];(statearr_131992[(0)] = state_machine__6188__auto__);
(statearr_131992[(1)] = (1));
return statearr_131992;
});
var state_machine__6188__auto____1 = (function (state_131987){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131987);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131993){if((e131993 instanceof Object))
{var ex__6191__auto__ = e131993;var statearr_131994_132372 = state_131987;(statearr_131994_132372[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132373 = state_131987;
state_131987 = G__132373;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131987){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_131995 = f__6203__auto__.call(null);(statearr_131995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_131995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___132374 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___132374,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___132374,draw,onSystem,onView){
return (function (state_132012){var state_val_132013 = (state_132012[(1)]);if((state_val_132013 === (6)))
{var inst_132008 = (state_132012[(2)]);var state_132012__$1 = state_132012;var statearr_132014_132375 = state_132012__$1;(statearr_132014_132375[(2)] = inst_132008);
(statearr_132014_132375[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132013 === (5)))
{var inst_132010 = (state_132012[(2)]);var state_132012__$1 = state_132012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132012__$1,inst_132010);
} else
{if((state_val_132013 === (4)))
{var inst_132001 = (state_132012[(7)]);var inst_132005 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_132001];var inst_132006 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132005,null));var state_132012__$1 = state_132012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132012__$1,(6),onSystem,inst_132006);
} else
{if((state_val_132013 === (3)))
{var inst_132000 = (state_132012[(8)]);var inst_132003 = alert(inst_132000);var state_132012__$1 = state_132012;var statearr_132015_132376 = state_132012__$1;(statearr_132015_132376[(2)] = inst_132003);
(statearr_132015_132376[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132013 === (2)))
{var inst_132000 = (state_132012[(8)]);var inst_131999 = (state_132012[(2)]);var inst_132000__$1 = cljs.core.nth.call(null,inst_131999,(0),null);var inst_132001 = cljs.core.nth.call(null,inst_131999,(1),null);var state_132012__$1 = (function (){var statearr_132016 = state_132012;(statearr_132016[(8)] = inst_132000__$1);
(statearr_132016[(7)] = inst_132001);
return statearr_132016;
})();if(cljs.core.truth_(inst_132000__$1))
{var statearr_132017_132377 = state_132012__$1;(statearr_132017_132377[(1)] = (3));
} else
{var statearr_132018_132378 = state_132012__$1;(statearr_132018_132378[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132013 === (1)))
{var inst_131997 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_132012__$1 = state_132012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132012__$1,(2),inst_131997);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___132374,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___132374,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132022 = [null,null,null,null,null,null,null,null,null];(statearr_132022[(0)] = state_machine__6188__auto__);
(statearr_132022[(1)] = (1));
return statearr_132022;
});
var state_machine__6188__auto____1 = (function (state_132012){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132023){if((e132023 instanceof Object))
{var ex__6191__auto__ = e132023;var statearr_132024_132379 = state_132012;(statearr_132024_132379[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132380 = state_132012;
state_132012 = G__132380;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132012){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___132374,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_132025 = f__6203__auto__.call(null);(statearr_132025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___132374);
return statearr_132025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___132374,draw,onSystem,onView))
);
var c__6202__auto___132381 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___132381,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___132381,draw,onSystem,onView){
return (function (state_132255){var state_val_132256 = (state_132255[(1)]);if((state_val_132256 === (7)))
{var inst_132039 = (state_132255[(7)]);var inst_132044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_132039);var state_132255__$1 = state_132255;var statearr_132257_132382 = state_132255__$1;(statearr_132257_132382[(2)] = inst_132044);
(statearr_132257_132382[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (59)))
{var inst_132204 = (state_132255[(8)]);var inst_132213 = cljs.core.first.call(null,inst_132204);var inst_132214 = cljs.core.pr_str.call(null,inst_132213);var inst_132215 = console.log(inst_132214);var inst_132216 = cljs.core.next.call(null,inst_132204);var inst_132190 = inst_132216;var inst_132191 = null;var inst_132192 = (0);var inst_132193 = (0);var state_132255__$1 = (function (){var statearr_132258 = state_132255;(statearr_132258[(9)] = inst_132215);
(statearr_132258[(10)] = inst_132193);
(statearr_132258[(11)] = inst_132191);
(statearr_132258[(12)] = inst_132192);
(statearr_132258[(13)] = inst_132190);
return statearr_132258;
})();var statearr_132259_132383 = state_132255__$1;(statearr_132259_132383[(2)] = null);
(statearr_132259_132383[(1)] = (50));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (20)))
{var inst_132054 = (state_132255[(14)]);var inst_132082 = cljs.core.apply.call(null,cljs.core.hash_map,inst_132054);var state_132255__$1 = state_132255;var statearr_132260_132384 = state_132255__$1;(statearr_132260_132384[(2)] = inst_132082);
(statearr_132260_132384[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (58)))
{var inst_132204 = (state_132255[(8)]);var inst_132208 = cljs.core.chunk_first.call(null,inst_132204);var inst_132209 = cljs.core.chunk_rest.call(null,inst_132204);var inst_132210 = cljs.core.count.call(null,inst_132208);var inst_132190 = inst_132209;var inst_132191 = inst_132208;var inst_132192 = inst_132210;var inst_132193 = (0);var state_132255__$1 = (function (){var statearr_132261 = state_132255;(statearr_132261[(10)] = inst_132193);
(statearr_132261[(11)] = inst_132191);
(statearr_132261[(12)] = inst_132192);
(statearr_132261[(13)] = inst_132190);
return statearr_132261;
})();var statearr_132262_132385 = state_132255__$1;(statearr_132262_132385[(2)] = null);
(statearr_132262_132385[(1)] = (50));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (60)))
{var inst_132219 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132263_132386 = state_132255__$1;(statearr_132263_132386[(2)] = inst_132219);
(statearr_132263_132386[(1)] = (57));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (27)))
{var inst_132086 = (state_132255[(15)]);var inst_132107 = cljs.core._EQ_.call(null,"ema",inst_132086);var state_132255__$1 = state_132255;if(inst_132107)
{var statearr_132264_132387 = state_132255__$1;(statearr_132264_132387[(1)] = (29));
} else
{var statearr_132265_132388 = state_132255__$1;(statearr_132265_132388[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (1)))
{var inst_132031 = (state_132255[(16)]);var inst_132029 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_132030 = [(200)];var inst_132031__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_132029,inst_132030);var inst_132032 = cljs.core.seq_QMARK_.call(null,inst_132031__$1);var state_132255__$1 = (function (){var statearr_132266 = state_132255;(statearr_132266[(16)] = inst_132031__$1);
return statearr_132266;
})();if(inst_132032)
{var statearr_132267_132389 = state_132255__$1;(statearr_132267_132389[(1)] = (2));
} else
{var statearr_132268_132390 = state_132255__$1;(statearr_132268_132390[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (24)))
{var inst_132086 = (state_132255[(15)]);var inst_132099 = cljs.core._EQ_.call(null,"sma",inst_132086);var state_132255__$1 = state_132255;if(inst_132099)
{var statearr_132269_132391 = state_132255__$1;(statearr_132269_132391[(1)] = (26));
} else
{var statearr_132270_132392 = state_132255__$1;(statearr_132270_132392[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (55)))
{var inst_132204 = (state_132255[(8)]);var inst_132206 = cljs.core.chunked_seq_QMARK_.call(null,inst_132204);var state_132255__$1 = state_132255;if(inst_132206)
{var statearr_132271_132393 = state_132255__$1;(statearr_132271_132393[(1)] = (58));
} else
{var statearr_132272_132394 = state_132255__$1;(statearr_132272_132394[(1)] = (59));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (39)))
{var inst_132086 = (state_132255[(15)]);var inst_132165 = cljs.core._EQ_.call(null,"avg",inst_132086);var state_132255__$1 = state_132255;if(inst_132165)
{var statearr_132273_132395 = state_132255__$1;(statearr_132273_132395[(1)] = (41));
} else
{var statearr_132274_132396 = state_132255__$1;(statearr_132274_132396[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (46)))
{var inst_132231 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132275_132397 = state_132255__$1;(statearr_132275_132397[(2)] = inst_132231);
(statearr_132275_132397[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (4)))
{var inst_132037 = (state_132255[(17)]);var inst_132031 = (state_132255[(16)]);var inst_132037__$1 = (state_132255[(2)]);var inst_132038 = cljs.core.get.call(null,inst_132037__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_132039 = inst_132031;var state_132255__$1 = (function (){var statearr_132276 = state_132255;(statearr_132276[(18)] = inst_132038);
(statearr_132276[(17)] = inst_132037__$1);
(statearr_132276[(7)] = inst_132039);
return statearr_132276;
})();var statearr_132277_132398 = state_132255__$1;(statearr_132277_132398[(2)] = null);
(statearr_132277_132398[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (54)))
{var inst_132224 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132278_132399 = state_132255__$1;(statearr_132278_132399[(2)] = inst_132224);
(statearr_132278_132399[(1)] = (51));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (15)))
{var inst_132047 = (state_132255[(19)]);var state_132255__$1 = state_132255;var statearr_132279_132400 = state_132255__$1;(statearr_132279_132400[(2)] = inst_132047);
(statearr_132279_132400[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (48)))
{var inst_132047 = (state_132255[(19)]);var state_132255__$1 = state_132255;var statearr_132280_132401 = state_132255__$1;(statearr_132280_132401[(2)] = inst_132047);
(statearr_132280_132401[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (50)))
{var inst_132193 = (state_132255[(10)]);var inst_132192 = (state_132255[(12)]);var inst_132195 = (inst_132193 < inst_132192);var inst_132196 = inst_132195;var state_132255__$1 = state_132255;if(cljs.core.truth_(inst_132196))
{var statearr_132281_132402 = state_132255__$1;(statearr_132281_132402[(1)] = (52));
} else
{var statearr_132282_132403 = state_132255__$1;(statearr_132282_132403[(1)] = (53));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (21)))
{var inst_132054 = (state_132255[(14)]);var state_132255__$1 = state_132255;var statearr_132283_132404 = state_132255__$1;(statearr_132283_132404[(2)] = inst_132054);
(statearr_132283_132404[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (31)))
{var inst_132241 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132284_132405 = state_132255__$1;(statearr_132284_132405[(2)] = inst_132241);
(statearr_132284_132405[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (32)))
{var inst_132047 = (state_132255[(19)]);var inst_132087 = (state_132255[(20)]);var inst_132117 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132118 = cljs.core.count.call(null,inst_132117);var inst_132119 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132120 = test.stock4.rsv.call(null,inst_132119);var inst_132121 = test.stock4.k.call(null,inst_132087,inst_132120);var inst_132122 = cljs.core.take.call(null,inst_132118,inst_132121);var inst_132123 = ((3) * inst_132087);var inst_132124 = test.stock4.k.call(null,inst_132123,inst_132120);var inst_132125 = cljs.core.take.call(null,inst_132118,inst_132124);var inst_132126 = [null,inst_132122,inst_132125];var inst_132127 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132126,null));var inst_132128 = cljs.core.assoc.call(null,inst_132047,new cljs.core.Keyword(null,"kd","kd",771448701),inst_132127);var inst_132129 = draw.call(null,inst_132128);var state_132255__$1 = state_132255;var statearr_132285_132406 = state_132255__$1;(statearr_132285_132406[(2)] = inst_132129);
(statearr_132285_132406[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (40)))
{var inst_132235 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132286_132407 = state_132255__$1;(statearr_132286_132407[(2)] = inst_132235);
(statearr_132286_132407[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (56)))
{var state_132255__$1 = state_132255;var statearr_132287_132408 = state_132255__$1;(statearr_132287_132408[(2)] = null);
(statearr_132287_132408[(1)] = (57));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (33)))
{var inst_132086 = (state_132255[(15)]);var inst_132131 = cljs.core._EQ_.call(null,"sar",inst_132086);var state_132255__$1 = state_132255;if(inst_132131)
{var statearr_132288_132409 = state_132255__$1;(statearr_132288_132409[(1)] = (35));
} else
{var statearr_132289_132410 = state_132255__$1;(statearr_132289_132410[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (13)))
{var inst_132250 = (state_132255[(2)]);var inst_132039 = inst_132250;var state_132255__$1 = (function (){var statearr_132290 = state_132255;(statearr_132290[(7)] = inst_132039);
return statearr_132290;
})();var statearr_132291_132411 = state_132255__$1;(statearr_132291_132411[(2)] = null);
(statearr_132291_132411[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (22)))
{var inst_132085 = (state_132255[(21)]);var inst_132086 = (state_132255[(15)]);var inst_132085__$1 = (state_132255[(2)]);var inst_132086__$1 = cljs.core.get.call(null,inst_132085__$1,"cmd");var inst_132087 = cljs.core.get.call(null,inst_132085__$1,"params");var inst_132091 = cljs.core._EQ_.call(null,"length",inst_132086__$1);var state_132255__$1 = (function (){var statearr_132292 = state_132255;(statearr_132292[(21)] = inst_132085__$1);
(statearr_132292[(20)] = inst_132087);
(statearr_132292[(15)] = inst_132086__$1);
return statearr_132292;
})();if(inst_132091)
{var statearr_132293_132412 = state_132255__$1;(statearr_132293_132412[(1)] = (23));
} else
{var statearr_132294_132413 = state_132255__$1;(statearr_132294_132413[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (36)))
{var inst_132086 = (state_132255[(15)]);var inst_132141 = cljs.core._EQ_.call(null,"stock",inst_132086);var state_132255__$1 = state_132255;if(inst_132141)
{var statearr_132295_132414 = state_132255__$1;(statearr_132295_132414[(1)] = (38));
} else
{var statearr_132296_132415 = state_132255__$1;(statearr_132296_132415[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (41)))
{var inst_132048 = (state_132255[(22)]);var inst_132047 = (state_132255[(19)]);var inst_132087 = (state_132255[(20)]);var inst_132167 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132168 = test.stock4.average.call(null,inst_132087,inst_132167);var inst_132169 = cljs.core.take.call(null,inst_132048,inst_132168);var inst_132170 = cljs.core.assoc.call(null,inst_132047,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_132169);var inst_132171 = draw.call(null,inst_132170);var state_132255__$1 = state_132255;var statearr_132297_132416 = state_132255__$1;(statearr_132297_132416[(2)] = inst_132171);
(statearr_132297_132416[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (43)))
{var inst_132233 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132298_132417 = state_132255__$1;(statearr_132298_132417[(2)] = inst_132233);
(statearr_132298_132417[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (29)))
{var inst_132047 = (state_132255[(19)]);var inst_132087 = (state_132255[(20)]);var inst_132109 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132110 = test.stock4.ema.call(null,inst_132087,(0),inst_132109);var inst_132111 = cljs.core.take.call(null,(10),inst_132110);var inst_132112 = cljs.core.pr_str.call(null,inst_132111);var inst_132113 = console.log(inst_132112);var state_132255__$1 = (function (){var statearr_132299 = state_132255;(statearr_132299[(23)] = inst_132113);
return statearr_132299;
})();var statearr_132300_132418 = state_132255__$1;(statearr_132300_132418[(2)] = inst_132047);
(statearr_132300_132418[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (44)))
{var inst_132048 = (state_132255[(22)]);var inst_132047 = (state_132255[(19)]);var inst_132175 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132176 = test.stock4.check_turn.call(null,inst_132175);var inst_132177 = cljs.core.take.call(null,inst_132048,inst_132176);var inst_132178 = cljs.core.assoc.call(null,inst_132047,new cljs.core.Keyword(null,"turn","turn",75759344),inst_132177);var inst_132179 = draw.call(null,inst_132178);var state_132255__$1 = state_132255;var statearr_132301_132419 = state_132255__$1;(statearr_132301_132419[(2)] = inst_132179);
(statearr_132301_132419[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (6)))
{var inst_132253 = (state_132255[(2)]);var state_132255__$1 = state_132255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132255__$1,inst_132253);
} else
{if((state_val_132256 === (28)))
{var inst_132243 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132302_132420 = state_132255__$1;(statearr_132302_132420[(2)] = inst_132243);
(statearr_132302_132420[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (51)))
{var inst_132047 = (state_132255[(19)]);var inst_132226 = (state_132255[(2)]);var state_132255__$1 = (function (){var statearr_132303 = state_132255;(statearr_132303[(24)] = inst_132226);
return statearr_132303;
})();var statearr_132304_132421 = state_132255__$1;(statearr_132304_132421[(2)] = inst_132047);
(statearr_132304_132421[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (25)))
{var inst_132245 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132305_132422 = state_132255__$1;(statearr_132305_132422[(2)] = inst_132245);
(statearr_132305_132422[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (34)))
{var inst_132239 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132306_132423 = state_132255__$1;(statearr_132306_132423[(2)] = inst_132239);
(statearr_132306_132423[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (17)))
{var inst_132054 = (state_132255[(14)]);var inst_132080 = cljs.core.seq_QMARK_.call(null,inst_132054);var state_132255__$1 = state_132255;if(inst_132080)
{var statearr_132307_132424 = state_132255__$1;(statearr_132307_132424[(1)] = (20));
} else
{var statearr_132308_132425 = state_132255__$1;(statearr_132308_132425[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (3)))
{var inst_132031 = (state_132255[(16)]);var state_132255__$1 = state_132255;var statearr_132309_132426 = state_132255__$1;(statearr_132309_132426[(2)] = inst_132031);
(statearr_132309_132426[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (12)))
{var inst_132055 = (state_132255[(25)]);var inst_132077 = cljs.core._EQ_.call(null,onView,inst_132055);var state_132255__$1 = state_132255;if(inst_132077)
{var statearr_132310_132427 = state_132255__$1;(statearr_132310_132427[(1)] = (17));
} else
{var statearr_132311_132428 = state_132255__$1;(statearr_132311_132428[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (2)))
{var inst_132031 = (state_132255[(16)]);var inst_132034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_132031);var state_132255__$1 = state_132255;var statearr_132312_132429 = state_132255__$1;(statearr_132312_132429[(2)] = inst_132034);
(statearr_132312_132429[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (23)))
{var inst_132047 = (state_132255[(19)]);var inst_132093 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132094 = test.stock4.check_length.call(null,inst_132093);var inst_132095 = cljs.core.take.call(null,(10),inst_132094);var inst_132096 = cljs.core.pr_str.call(null,inst_132095);var inst_132097 = console.log(inst_132096);var state_132255__$1 = (function (){var statearr_132313 = state_132255;(statearr_132313[(26)] = inst_132097);
return statearr_132313;
})();var statearr_132314_132430 = state_132255__$1;(statearr_132314_132430[(2)] = inst_132047);
(statearr_132314_132430[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (47)))
{var inst_132047 = (state_132255[(19)]);var inst_132087 = (state_132255[(20)]);var inst_132187 = cljs.core.keyword.call(null,inst_132087);var inst_132188 = inst_132187.call(null,inst_132047);var inst_132189 = cljs.core.seq.call(null,inst_132188);var inst_132190 = inst_132189;var inst_132191 = null;var inst_132192 = (0);var inst_132193 = (0);var state_132255__$1 = (function (){var statearr_132315 = state_132255;(statearr_132315[(10)] = inst_132193);
(statearr_132315[(11)] = inst_132191);
(statearr_132315[(12)] = inst_132192);
(statearr_132315[(13)] = inst_132190);
return statearr_132315;
})();var statearr_132316_132431 = state_132255__$1;(statearr_132316_132431[(2)] = null);
(statearr_132316_132431[(1)] = (50));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (35)))
{var inst_132047 = (state_132255[(19)]);var inst_132133 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132134 = cljs.core.reverse.call(null,inst_132133);var inst_132135 = test.stock4.sar.call(null,inst_132134);var inst_132136 = cljs.core.count.call(null,inst_132133);var inst_132137 = cljs.core.take.call(null,inst_132136,inst_132135);var inst_132138 = cljs.core.assoc.call(null,inst_132047,new cljs.core.Keyword(null,"sar","sar",833088678),inst_132137);var inst_132139 = draw.call(null,inst_132138);var state_132255__$1 = state_132255;var statearr_132317_132432 = state_132255__$1;(statearr_132317_132432[(2)] = inst_132139);
(statearr_132317_132432[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (19)))
{var inst_132248 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132318_132433 = state_132255__$1;(statearr_132318_132433[(2)] = inst_132248);
(statearr_132318_132433[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (57)))
{var inst_132222 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132319_132434 = state_132255__$1;(statearr_132319_132434[(2)] = inst_132222);
(statearr_132319_132434[(1)] = (54));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (11)))
{var inst_132054 = (state_132255[(14)]);var inst_132062 = cljs.core.nth.call(null,inst_132054,(0),null);var inst_132063 = cljs.core.nth.call(null,inst_132054,(1),null);var inst_132067 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_132062);var state_132255__$1 = (function (){var statearr_132320 = state_132255;(statearr_132320[(27)] = inst_132063);
return statearr_132320;
})();if(inst_132067)
{var statearr_132321_132435 = state_132255__$1;(statearr_132321_132435[(1)] = (14));
} else
{var statearr_132322_132436 = state_132255__$1;(statearr_132322_132436[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (9)))
{var inst_132047 = (state_132255[(19)]);var inst_132047__$1 = (state_132255[(2)]);var inst_132048 = cljs.core.get.call(null,inst_132047__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_132050 = [onSystem,onView];var inst_132051 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132050,null));var state_132255__$1 = (function (){var statearr_132323 = state_132255;(statearr_132323[(22)] = inst_132048);
(statearr_132323[(19)] = inst_132047__$1);
return statearr_132323;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_132255__$1,(10),inst_132051);
} else
{if((state_val_132256 === (5)))
{var inst_132039 = (state_132255[(7)]);var inst_132042 = cljs.core.seq_QMARK_.call(null,inst_132039);var state_132255__$1 = state_132255;if(inst_132042)
{var statearr_132324_132437 = state_132255__$1;(statearr_132324_132437[(1)] = (7));
} else
{var statearr_132325_132438 = state_132255__$1;(statearr_132325_132438[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (14)))
{var inst_132048 = (state_132255[(22)]);var inst_132047 = (state_132255[(19)]);var inst_132063 = (state_132255[(27)]);var inst_132069 = cljs.core.assoc.call(null,inst_132047,new cljs.core.Keyword(null,"info","info",-317069002),inst_132063);var inst_132070 = cljs.core.take.call(null,inst_132048,inst_132063);var inst_132071 = cljs.core.assoc.call(null,inst_132069,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_132070);var inst_132072 = draw.call(null,inst_132071);var state_132255__$1 = state_132255;var statearr_132326_132439 = state_132255__$1;(statearr_132326_132439[(2)] = inst_132072);
(statearr_132326_132439[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (45)))
{var inst_132086 = (state_132255[(15)]);var inst_132181 = cljs.core._EQ_.call(null,"print",inst_132086);var state_132255__$1 = state_132255;if(inst_132181)
{var statearr_132327_132440 = state_132255__$1;(statearr_132327_132440[(1)] = (47));
} else
{var statearr_132328_132441 = state_132255__$1;(statearr_132328_132441[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (53)))
{var inst_132204 = (state_132255[(8)]);var inst_132190 = (state_132255[(13)]);var inst_132204__$1 = cljs.core.seq.call(null,inst_132190);var state_132255__$1 = (function (){var statearr_132329 = state_132255;(statearr_132329[(8)] = inst_132204__$1);
return statearr_132329;
})();if(inst_132204__$1)
{var statearr_132330_132442 = state_132255__$1;(statearr_132330_132442[(1)] = (55));
} else
{var statearr_132331_132443 = state_132255__$1;(statearr_132331_132443[(1)] = (56));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (26)))
{var inst_132047 = (state_132255[(19)]);var inst_132087 = (state_132255[(20)]);var inst_132101 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_132047);var inst_132102 = test.stock4.sma.call(null,inst_132087,inst_132101);var inst_132103 = cljs.core.take.call(null,(10),inst_132102);var inst_132104 = cljs.core.pr_str.call(null,inst_132103);var inst_132105 = console.log(inst_132104);var state_132255__$1 = (function (){var statearr_132332 = state_132255;(statearr_132332[(28)] = inst_132105);
return statearr_132332;
})();var statearr_132333_132444 = state_132255__$1;(statearr_132333_132444[(2)] = inst_132047);
(statearr_132333_132444[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (16)))
{var inst_132075 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132334_132445 = state_132255__$1;(statearr_132334_132445[(2)] = inst_132075);
(statearr_132334_132445[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (38)))
{var inst_132085 = (state_132255[(21)]);var inst_132048 = (state_132255[(22)]);var inst_132055 = (state_132255[(25)]);var inst_132053 = (state_132255[(29)]);var inst_132047 = (state_132255[(19)]);var inst_132087 = (state_132255[(20)]);var inst_132037 = (state_132255[(17)]);var inst_132086 = (state_132255[(15)]);var inst_132054 = (state_132255[(14)]);var inst_132039 = (state_132255[(7)]);var inst_132161 = cljs.core.async.chan.call(null,(1));var inst_132162 = (function (){var cmd = inst_132086;var input = inst_132085;var ctx = inst_132047;var pred__132056 = cljs.core._EQ_;var v = inst_132054;var map__132079 = inst_132085;var params = inst_132087;var cnt = inst_132048;var G__132027 = inst_132039;var ch = inst_132055;var c__6202__auto____$1 = inst_132161;var expr__132089 = inst_132086;var map__132028 = inst_132037;var pred__132088 = cljs.core._EQ_;var expr__132057 = inst_132055;var map__132041 = inst_132047;var vec__132049 = inst_132053;return ((function (cmd,input,ctx,pred__132056,v,map__132079,params,cnt,G__132027,ch,c__6202__auto____$1,expr__132089,map__132028,pred__132088,expr__132057,map__132041,vec__132049,inst_132085,inst_132048,inst_132055,inst_132053,inst_132047,inst_132087,inst_132037,inst_132086,inst_132054,inst_132039,inst_132161,state_val_132256,c__6202__auto___132381,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,ctx,pred__132056,v,map__132079,params,cnt,G__132027,ch,c__6202__auto____$1,expr__132089,map__132028,pred__132088,expr__132057,map__132041,vec__132049,inst_132085,inst_132048,inst_132055,inst_132053,inst_132047,inst_132087,inst_132037,inst_132086,inst_132054,inst_132039,inst_132161,state_val_132256,c__6202__auto___132381,draw,onSystem,onView){
return (function (state_132159){var state_val_132160 = (state_132159[(1)]);if((state_val_132160 === (6)))
{var inst_132155 = (state_132159[(2)]);var state_132159__$1 = state_132159;var statearr_132335_132446 = state_132159__$1;(statearr_132335_132446[(2)] = inst_132155);
(statearr_132335_132446[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132160 === (5)))
{var inst_132157 = (state_132159[(2)]);var state_132159__$1 = state_132159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132159__$1,inst_132157);
} else
{if((state_val_132160 === (4)))
{var inst_132148 = (state_132159[(7)]);var inst_132152 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_132148];var inst_132153 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132152,null));var state_132159__$1 = state_132159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132159__$1,(6),onSystem,inst_132153);
} else
{if((state_val_132160 === (3)))
{var inst_132147 = (state_132159[(8)]);var inst_132150 = alert(inst_132147);var state_132159__$1 = state_132159;var statearr_132336_132447 = state_132159__$1;(statearr_132336_132447[(2)] = inst_132150);
(statearr_132336_132447[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132160 === (2)))
{var inst_132147 = (state_132159[(8)]);var inst_132146 = (state_132159[(2)]);var inst_132147__$1 = cljs.core.nth.call(null,inst_132146,(0),null);var inst_132148 = cljs.core.nth.call(null,inst_132146,(1),null);var state_132159__$1 = (function (){var statearr_132337 = state_132159;(statearr_132337[(8)] = inst_132147__$1);
(statearr_132337[(7)] = inst_132148);
return statearr_132337;
})();if(cljs.core.truth_(inst_132147__$1))
{var statearr_132338_132448 = state_132159__$1;(statearr_132338_132448[(1)] = (3));
} else
{var statearr_132339_132449 = state_132159__$1;(statearr_132339_132449[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132160 === (1)))
{var inst_132144 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_132159__$1 = state_132159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132159__$1,(2),inst_132144);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,ctx,pred__132056,v,map__132079,params,cnt,G__132027,ch,c__6202__auto____$1,expr__132089,map__132028,pred__132088,expr__132057,map__132041,vec__132049,inst_132085,inst_132048,inst_132055,inst_132053,inst_132047,inst_132087,inst_132037,inst_132086,inst_132054,inst_132039,inst_132161,state_val_132256,c__6202__auto___132381,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,ctx,pred__132056,v,map__132079,params,cnt,G__132027,ch,c__6202__auto____$1,expr__132089,map__132028,pred__132088,expr__132057,map__132041,vec__132049,inst_132085,inst_132048,inst_132055,inst_132053,inst_132047,inst_132087,inst_132037,inst_132086,inst_132054,inst_132039,inst_132161,state_val_132256,c__6202__auto___132381,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132343 = [null,null,null,null,null,null,null,null,null];(statearr_132343[(0)] = state_machine__6188__auto__);
(statearr_132343[(1)] = (1));
return statearr_132343;
});
var state_machine__6188__auto____1 = (function (state_132159){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132159);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132344){if((e132344 instanceof Object))
{var ex__6191__auto__ = e132344;var statearr_132345_132450 = state_132159;(statearr_132345_132450[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132451 = state_132159;
state_132159 = G__132451;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132159){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,ctx,pred__132056,v,map__132079,params,cnt,G__132027,ch,c__6202__auto____$1,expr__132089,map__132028,pred__132088,expr__132057,map__132041,vec__132049,inst_132085,inst_132048,inst_132055,inst_132053,inst_132047,inst_132087,inst_132037,inst_132086,inst_132054,inst_132039,inst_132161,state_val_132256,c__6202__auto___132381,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_132346 = f__6203__auto__.call(null);(statearr_132346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_132346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,ctx,pred__132056,v,map__132079,params,cnt,G__132027,ch,c__6202__auto____$1,expr__132089,map__132028,pred__132088,expr__132057,map__132041,vec__132049,inst_132085,inst_132048,inst_132055,inst_132053,inst_132047,inst_132087,inst_132037,inst_132086,inst_132054,inst_132039,inst_132161,state_val_132256,c__6202__auto___132381,draw,onSystem,onView))
})();var inst_132163 = cljs.core.async.impl.dispatch.run.call(null,inst_132162);var state_132255__$1 = (function (){var statearr_132347 = state_132255;(statearr_132347[(30)] = inst_132163);
return statearr_132347;
})();var statearr_132348_132452 = state_132255__$1;(statearr_132348_132452[(2)] = inst_132047);
(statearr_132348_132452[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (30)))
{var inst_132086 = (state_132255[(15)]);var inst_132115 = cljs.core._EQ_.call(null,"rsv",inst_132086);var state_132255__$1 = state_132255;if(inst_132115)
{var statearr_132349_132453 = state_132255__$1;(statearr_132349_132453[(1)] = (32));
} else
{var statearr_132350_132454 = state_132255__$1;(statearr_132350_132454[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (10)))
{var inst_132055 = (state_132255[(25)]);var inst_132053 = (state_132255[(29)]);var inst_132053__$1 = (state_132255[(2)]);var inst_132054 = cljs.core.nth.call(null,inst_132053__$1,(0),null);var inst_132055__$1 = cljs.core.nth.call(null,inst_132053__$1,(1),null);var inst_132059 = cljs.core._EQ_.call(null,onSystem,inst_132055__$1);var state_132255__$1 = (function (){var statearr_132354 = state_132255;(statearr_132354[(25)] = inst_132055__$1);
(statearr_132354[(29)] = inst_132053__$1);
(statearr_132354[(14)] = inst_132054);
return statearr_132354;
})();if(inst_132059)
{var statearr_132355_132455 = state_132255__$1;(statearr_132355_132455[(1)] = (11));
} else
{var statearr_132356_132456 = state_132255__$1;(statearr_132356_132456[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (18)))
{var inst_132047 = (state_132255[(19)]);var state_132255__$1 = state_132255;var statearr_132357_132457 = state_132255__$1;(statearr_132357_132457[(2)] = inst_132047);
(statearr_132357_132457[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (52)))
{var inst_132193 = (state_132255[(10)]);var inst_132191 = (state_132255[(11)]);var inst_132192 = (state_132255[(12)]);var inst_132190 = (state_132255[(13)]);var inst_132198 = cljs.core._nth.call(null,inst_132191,inst_132193);var inst_132199 = cljs.core.pr_str.call(null,inst_132198);var inst_132200 = console.log(inst_132199);var inst_132201 = (inst_132193 + (1));var tmp132351 = inst_132191;var tmp132352 = inst_132192;var tmp132353 = inst_132190;var inst_132190__$1 = tmp132353;var inst_132191__$1 = tmp132351;var inst_132192__$1 = tmp132352;var inst_132193__$1 = inst_132201;var state_132255__$1 = (function (){var statearr_132358 = state_132255;(statearr_132358[(31)] = inst_132200);
(statearr_132358[(10)] = inst_132193__$1);
(statearr_132358[(11)] = inst_132191__$1);
(statearr_132358[(12)] = inst_132192__$1);
(statearr_132358[(13)] = inst_132190__$1);
return statearr_132358;
})();var statearr_132359_132458 = state_132255__$1;(statearr_132359_132458[(2)] = null);
(statearr_132359_132458[(1)] = (50));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (42)))
{var inst_132086 = (state_132255[(15)]);var inst_132173 = cljs.core._EQ_.call(null,"turn",inst_132086);var state_132255__$1 = state_132255;if(inst_132173)
{var statearr_132360_132459 = state_132255__$1;(statearr_132360_132459[(1)] = (44));
} else
{var statearr_132361_132460 = state_132255__$1;(statearr_132361_132460[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (37)))
{var inst_132237 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132362_132461 = state_132255__$1;(statearr_132362_132461[(2)] = inst_132237);
(statearr_132362_132461[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (8)))
{var inst_132039 = (state_132255[(7)]);var state_132255__$1 = state_132255;var statearr_132363_132462 = state_132255__$1;(statearr_132363_132462[(2)] = inst_132039);
(statearr_132363_132462[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132256 === (49)))
{var inst_132229 = (state_132255[(2)]);var state_132255__$1 = state_132255;var statearr_132364_132463 = state_132255__$1;(statearr_132364_132463[(2)] = inst_132229);
(statearr_132364_132463[(1)] = (46));
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
});})(c__6202__auto___132381,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___132381,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_132368[(0)] = state_machine__6188__auto__);
(statearr_132368[(1)] = (1));
return statearr_132368;
});
var state_machine__6188__auto____1 = (function (state_132255){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132369){if((e132369 instanceof Object))
{var ex__6191__auto__ = e132369;var statearr_132370_132464 = state_132255;(statearr_132370_132464[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132465 = state_132255;
state_132255 = G__132465;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132255){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___132381,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_132371 = f__6203__auto__.call(null);(statearr_132371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___132381);
return statearr_132371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___132381,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
