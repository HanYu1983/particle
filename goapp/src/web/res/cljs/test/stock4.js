// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__55180_SHARP_){return cljs.core.nth.call(null,p1__55180_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__55181_SHARP_){return cljs.core.nth.call(null,p1__55181_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__55182){var vec__55197 = p__55182;var rsv = cljs.core.nth.call(null,vec__55197,(0),null);var k = cljs.core.nth.call(null,vec__55197,(1),null);var d = cljs.core.nth.call(null,vec__55197,(2),null);var kd = vec__55197;var vec__55198 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__55198,(0),null);var min_v = cljs.core.nth.call(null,vec__55198,(1),null);var offset_v = cljs.core.nth.call(null,vec__55198,(2),null);var offset_x = cljs.core.nth.call(null,vec__55198,(3),null);var pos_y = cljs.core.nth.call(null,vec__55198,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__55199_55211 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__55198,max_v,min_v,offset_v,offset_x,pos_y,vec__55197,rsv,k,d,kd){
return (function() { 
var G__55215__delegate = function (args){return args;
};
var G__55215 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55215__delegate.call(this,args);};
G__55215.cljs$lang$maxFixedArity = 0;
G__55215.cljs$lang$applyTo = (function (arglist__55216){
var args = cljs.core.seq(arglist__55216);
return G__55215__delegate(args);
});
G__55215.cljs$core$IFn$_invoke$arity$variadic = G__55215__delegate;
return G__55215;
})()
;})(vec__55198,max_v,min_v,offset_v,offset_x,pos_y,vec__55197,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__55200_55212 = null;var count__55201_55213 = (0);var i__55202_55214 = (0);while(true){
if((i__55202_55214 < count__55201_55213))
{var vec__55203_55217 = cljs.core._nth.call(null,chunk__55200_55212,i__55202_55214);var idx_55218 = cljs.core.nth.call(null,vec__55203_55217,(0),null);var prev_55219 = cljs.core.nth.call(null,vec__55203_55217,(1),null);var curr_55220 = cljs.core.nth.call(null,vec__55203_55217,(2),null);ctx.beginPath();
ctx.moveTo((idx_55218 * offset_x),(((1) - (prev_55219 / (100))) * h));
ctx.lineTo(((idx_55218 + (1)) * offset_x),(((1) - (curr_55220 / (100))) * h));
ctx.stroke();
{
var G__55221 = seq__55199_55211;
var G__55222 = chunk__55200_55212;
var G__55223 = count__55201_55213;
var G__55224 = (i__55202_55214 + (1));
seq__55199_55211 = G__55221;
chunk__55200_55212 = G__55222;
count__55201_55213 = G__55223;
i__55202_55214 = G__55224;
continue;
}
} else
{var temp__4126__auto___55225 = cljs.core.seq.call(null,seq__55199_55211);if(temp__4126__auto___55225)
{var seq__55199_55226__$1 = temp__4126__auto___55225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55199_55226__$1))
{var c__4307__auto___55227 = cljs.core.chunk_first.call(null,seq__55199_55226__$1);{
var G__55228 = cljs.core.chunk_rest.call(null,seq__55199_55226__$1);
var G__55229 = c__4307__auto___55227;
var G__55230 = cljs.core.count.call(null,c__4307__auto___55227);
var G__55231 = (0);
seq__55199_55211 = G__55228;
chunk__55200_55212 = G__55229;
count__55201_55213 = G__55230;
i__55202_55214 = G__55231;
continue;
}
} else
{var vec__55204_55232 = cljs.core.first.call(null,seq__55199_55226__$1);var idx_55233 = cljs.core.nth.call(null,vec__55204_55232,(0),null);var prev_55234 = cljs.core.nth.call(null,vec__55204_55232,(1),null);var curr_55235 = cljs.core.nth.call(null,vec__55204_55232,(2),null);ctx.beginPath();
ctx.moveTo((idx_55233 * offset_x),(((1) - (prev_55234 / (100))) * h));
ctx.lineTo(((idx_55233 + (1)) * offset_x),(((1) - (curr_55235 / (100))) * h));
ctx.stroke();
{
var G__55236 = cljs.core.next.call(null,seq__55199_55226__$1);
var G__55237 = null;
var G__55238 = (0);
var G__55239 = (0);
seq__55199_55211 = G__55236;
chunk__55200_55212 = G__55237;
count__55201_55213 = G__55238;
i__55202_55214 = G__55239;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__55205_55240 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__55198,max_v,min_v,offset_v,offset_x,pos_y,vec__55197,rsv,k,d,kd){
return (function() { 
var G__55244__delegate = function (args){return args;
};
var G__55244 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55244__delegate.call(this,args);};
G__55244.cljs$lang$maxFixedArity = 0;
G__55244.cljs$lang$applyTo = (function (arglist__55245){
var args = cljs.core.seq(arglist__55245);
return G__55244__delegate(args);
});
G__55244.cljs$core$IFn$_invoke$arity$variadic = G__55244__delegate;
return G__55244;
})()
;})(vec__55198,max_v,min_v,offset_v,offset_x,pos_y,vec__55197,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__55206_55241 = null;var count__55207_55242 = (0);var i__55208_55243 = (0);while(true){
if((i__55208_55243 < count__55207_55242))
{var vec__55209_55246 = cljs.core._nth.call(null,chunk__55206_55241,i__55208_55243);var idx_55247 = cljs.core.nth.call(null,vec__55209_55246,(0),null);var prev_55248 = cljs.core.nth.call(null,vec__55209_55246,(1),null);var curr_55249 = cljs.core.nth.call(null,vec__55209_55246,(2),null);ctx.beginPath();
ctx.moveTo((idx_55247 * offset_x),(((1) - (prev_55248 / (100))) * h));
ctx.lineTo(((idx_55247 + (1)) * offset_x),(((1) - (curr_55249 / (100))) * h));
ctx.stroke();
{
var G__55250 = seq__55205_55240;
var G__55251 = chunk__55206_55241;
var G__55252 = count__55207_55242;
var G__55253 = (i__55208_55243 + (1));
seq__55205_55240 = G__55250;
chunk__55206_55241 = G__55251;
count__55207_55242 = G__55252;
i__55208_55243 = G__55253;
continue;
}
} else
{var temp__4126__auto___55254 = cljs.core.seq.call(null,seq__55205_55240);if(temp__4126__auto___55254)
{var seq__55205_55255__$1 = temp__4126__auto___55254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55205_55255__$1))
{var c__4307__auto___55256 = cljs.core.chunk_first.call(null,seq__55205_55255__$1);{
var G__55257 = cljs.core.chunk_rest.call(null,seq__55205_55255__$1);
var G__55258 = c__4307__auto___55256;
var G__55259 = cljs.core.count.call(null,c__4307__auto___55256);
var G__55260 = (0);
seq__55205_55240 = G__55257;
chunk__55206_55241 = G__55258;
count__55207_55242 = G__55259;
i__55208_55243 = G__55260;
continue;
}
} else
{var vec__55210_55261 = cljs.core.first.call(null,seq__55205_55255__$1);var idx_55262 = cljs.core.nth.call(null,vec__55210_55261,(0),null);var prev_55263 = cljs.core.nth.call(null,vec__55210_55261,(1),null);var curr_55264 = cljs.core.nth.call(null,vec__55210_55261,(2),null);ctx.beginPath();
ctx.moveTo((idx_55262 * offset_x),(((1) - (prev_55263 / (100))) * h));
ctx.lineTo(((idx_55262 + (1)) * offset_x),(((1) - (curr_55264 / (100))) * h));
ctx.stroke();
{
var G__55265 = cljs.core.next.call(null,seq__55205_55255__$1);
var G__55266 = null;
var G__55267 = (0);
var G__55268 = (0);
seq__55205_55240 = G__55265;
chunk__55206_55241 = G__55266;
count__55207_55242 = G__55267;
i__55208_55243 = G__55268;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__55279 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__55279,(0),null);var min_v = cljs.core.nth.call(null,vec__55279,(1),null);var offset_v = cljs.core.nth.call(null,vec__55279,(2),null);var offset_x = cljs.core.nth.call(null,vec__55279,(3),null);var pos_y = cljs.core.nth.call(null,vec__55279,(4),null);(ctx["fillStyle"] = "black");
var seq__55280 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__55279,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__55288__delegate = function (args){return args;
};
var G__55288 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55288__delegate.call(this,args);};
G__55288.cljs$lang$maxFixedArity = 0;
G__55288.cljs$lang$applyTo = (function (arglist__55289){
var args = cljs.core.seq(arglist__55289);
return G__55288__delegate(args);
});
G__55288.cljs$core$IFn$_invoke$arity$variadic = G__55288__delegate;
return G__55288;
})()
;})(vec__55279,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__55281 = null;var count__55282 = (0);var i__55283 = (0);while(true){
if((i__55283 < count__55282))
{var vec__55284 = cljs.core._nth.call(null,chunk__55281,i__55283);var idx = cljs.core.nth.call(null,vec__55284,(0),null);var vec__55285 = cljs.core.nth.call(null,vec__55284,(1),null);var date = cljs.core.nth.call(null,vec__55285,(0),null);var _ = cljs.core.nthnext.call(null,vec__55285,(1));var line = vec__55285;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__55280,chunk__55281,count__55282,i__55283,vec__55284,idx,vec__55285,date,_,line,vec__55279,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__55269_SHARP_){return cljs.core._EQ_.call(null,date,p1__55269_SHARP_);
});})(seq__55280,chunk__55281,count__55282,i__55283,vec__55284,idx,vec__55285,date,_,line,vec__55279,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__55290 = seq__55280;
var G__55291 = chunk__55281;
var G__55292 = count__55282;
var G__55293 = (i__55283 + (1));
seq__55280 = G__55290;
chunk__55281 = G__55291;
count__55282 = G__55292;
i__55283 = G__55293;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55280);if(temp__4126__auto__)
{var seq__55280__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55280__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__55280__$1);{
var G__55294 = cljs.core.chunk_rest.call(null,seq__55280__$1);
var G__55295 = c__4307__auto__;
var G__55296 = cljs.core.count.call(null,c__4307__auto__);
var G__55297 = (0);
seq__55280 = G__55294;
chunk__55281 = G__55295;
count__55282 = G__55296;
i__55283 = G__55297;
continue;
}
} else
{var vec__55286 = cljs.core.first.call(null,seq__55280__$1);var idx = cljs.core.nth.call(null,vec__55286,(0),null);var vec__55287 = cljs.core.nth.call(null,vec__55286,(1),null);var date = cljs.core.nth.call(null,vec__55287,(0),null);var _ = cljs.core.nthnext.call(null,vec__55287,(1));var line = vec__55287;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__55280,chunk__55281,count__55282,i__55283,vec__55286,idx,vec__55287,date,_,line,seq__55280__$1,temp__4126__auto__,vec__55279,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__55269_SHARP_){return cljs.core._EQ_.call(null,date,p1__55269_SHARP_);
});})(seq__55280,chunk__55281,count__55282,i__55283,vec__55286,idx,vec__55287,date,_,line,seq__55280__$1,temp__4126__auto__,vec__55279,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__55298 = cljs.core.next.call(null,seq__55280__$1);
var G__55299 = null;
var G__55300 = (0);
var G__55301 = (0);
seq__55280 = G__55298;
chunk__55281 = G__55299;
count__55282 = G__55300;
i__55283 = G__55301;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__55311 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__55311,(0),null);var min_v = cljs.core.nth.call(null,vec__55311,(1),null);var offset_v = cljs.core.nth.call(null,vec__55311,(2),null);var offset_x = cljs.core.nth.call(null,vec__55311,(3),null);var pos_y = cljs.core.nth.call(null,vec__55311,(4),null);var seq__55312 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__55311,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__55320__delegate = function (args){return args;
};
var G__55320 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55320__delegate.call(this,args);};
G__55320.cljs$lang$maxFixedArity = 0;
G__55320.cljs$lang$applyTo = (function (arglist__55321){
var args = cljs.core.seq(arglist__55321);
return G__55320__delegate(args);
});
G__55320.cljs$core$IFn$_invoke$arity$variadic = G__55320__delegate;
return G__55320;
})()
;})(vec__55311,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__55313 = null;var count__55314 = (0);var i__55315 = (0);while(true){
if((i__55315 < count__55314))
{var vec__55316 = cljs.core._nth.call(null,chunk__55313,i__55315);var idx = cljs.core.nth.call(null,vec__55316,(0),null);var vec__55317 = cljs.core.nth.call(null,vec__55316,(1),null);var date = cljs.core.nth.call(null,vec__55317,(0),null);var open = cljs.core.nth.call(null,vec__55317,(1),null);var high = cljs.core.nth.call(null,vec__55317,(2),null);var low = cljs.core.nth.call(null,vec__55317,(3),null);var close = cljs.core.nth.call(null,vec__55317,(4),null);var volume = cljs.core.nth.call(null,vec__55317,(5),null);(ctx["strokeStyle"] = "black");
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
var G__55322 = seq__55312;
var G__55323 = chunk__55313;
var G__55324 = count__55314;
var G__55325 = (i__55315 + (1));
seq__55312 = G__55322;
chunk__55313 = G__55323;
count__55314 = G__55324;
i__55315 = G__55325;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55312);if(temp__4126__auto__)
{var seq__55312__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55312__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__55312__$1);{
var G__55326 = cljs.core.chunk_rest.call(null,seq__55312__$1);
var G__55327 = c__4307__auto__;
var G__55328 = cljs.core.count.call(null,c__4307__auto__);
var G__55329 = (0);
seq__55312 = G__55326;
chunk__55313 = G__55327;
count__55314 = G__55328;
i__55315 = G__55329;
continue;
}
} else
{var vec__55318 = cljs.core.first.call(null,seq__55312__$1);var idx = cljs.core.nth.call(null,vec__55318,(0),null);var vec__55319 = cljs.core.nth.call(null,vec__55318,(1),null);var date = cljs.core.nth.call(null,vec__55319,(0),null);var open = cljs.core.nth.call(null,vec__55319,(1),null);var high = cljs.core.nth.call(null,vec__55319,(2),null);var low = cljs.core.nth.call(null,vec__55319,(3),null);var close = cljs.core.nth.call(null,vec__55319,(4),null);var volume = cljs.core.nth.call(null,vec__55319,(5),null);(ctx["strokeStyle"] = "black");
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
var G__55330 = cljs.core.next.call(null,seq__55312__$1);
var G__55331 = null;
var G__55332 = (0);
var G__55333 = (0);
seq__55312 = G__55330;
chunk__55313 = G__55331;
count__55314 = G__55332;
i__55315 = G__55333;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__55337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__55337,(0),null);var h = cljs.core.nth.call(null,vec__55337,(1),null);return ((function (ctx,vec__55337,w,h){
return (function (p__55338){var map__55339 = p__55338;var map__55339__$1 = ((cljs.core.seq_QMARK_.call(null,map__55339))?cljs.core.apply.call(null,cljs.core.hash_map,map__55339):map__55339);var appctx = map__55339__$1;var kline = cljs.core.get.call(null,map__55339__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__55339__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var kd = cljs.core.get.call(null,map__55339__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var avgs = cljs.core.get.call(null,map__55339__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__55339__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "gray");
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
return appctx;
});
;})(ctx,vec__55337,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj55377 = {"url":"/proxy","dataType":"text","data":(function (){var obj55379 = {"url":url};return obj55379;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_55386){var state_val_55387 = (state_55386[(1)]);if((state_val_55387 === (2)))
{var inst_55383 = (state_55386[(2)]);var inst_55384 = cljs.core.async.close_BANG_.call(null,ret);var state_55386__$1 = (function (){var statearr_55388 = state_55386;(statearr_55388[(7)] = inst_55383);
return statearr_55388;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55386__$1,inst_55384);
} else
{if((state_val_55387 === (1)))
{var inst_55380 = [null,data];var inst_55381 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_55380,null));var state_55386__$1 = state_55386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55386__$1,(2),ret,inst_55381);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_55392 = [null,null,null,null,null,null,null,null];(statearr_55392[(0)] = state_machine__6188__auto__);
(statearr_55392[(1)] = (1));
return statearr_55392;
});
var state_machine__6188__auto____1 = (function (state_55386){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_55386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e55393){if((e55393 instanceof Object))
{var ex__6191__auto__ = e55393;var statearr_55394_55412 = state_55386;(statearr_55394_55412[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55413 = state_55386;
state_55386 = G__55413;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_55386){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_55386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_55395 = f__6203__auto__.call(null);(statearr_55395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_55395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_55402){var state_val_55403 = (state_55402[(1)]);if((state_val_55403 === (2)))
{var inst_55399 = (state_55402[(2)]);var inst_55400 = cljs.core.async.close_BANG_.call(null,ret);var state_55402__$1 = (function (){var statearr_55404 = state_55402;(statearr_55404[(7)] = inst_55399);
return statearr_55404;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55402__$1,inst_55400);
} else
{if((state_val_55403 === (1)))
{var inst_55396 = [err];var inst_55397 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_55396,null));var state_55402__$1 = state_55402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55402__$1,(2),ret,inst_55397);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_55408 = [null,null,null,null,null,null,null,null];(statearr_55408[(0)] = state_machine__6188__auto__);
(statearr_55408[(1)] = (1));
return statearr_55408;
});
var state_machine__6188__auto____1 = (function (state_55402){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_55402);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e55409){if((e55409 instanceof Object))
{var ex__6191__auto__ = e55409;var statearr_55410_55414 = state_55402;(statearr_55410_55414[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55402);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55415 = state_55402;
state_55402 = G__55415;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_55402){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_55402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_55411 = f__6203__auto__.call(null);(statearr_55411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_55411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj55377;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__55424(s__55425){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__55425__$1 = s__55425;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55425__$1);if(temp__4126__auto__)
{var s__55425__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55425__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__55425__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__55427 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__55426 = (0);while(true){
if((i__55426 < size__4275__auto__))
{var vec__55430 = cljs.core._nth.call(null,c__4274__auto__,i__55426);var _ = cljs.core.nth.call(null,vec__55430,(0),null);var date = cljs.core.nth.call(null,vec__55430,(1),null);var open = cljs.core.nth.call(null,vec__55430,(2),null);var high = cljs.core.nth.call(null,vec__55430,(3),null);var low = cljs.core.nth.call(null,vec__55430,(4),null);var close = cljs.core.nth.call(null,vec__55430,(5),null);var volume = cljs.core.nth.call(null,vec__55430,(6),null);cljs.core.chunk_append.call(null,b__55427,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__55432 = (i__55426 + (1));
i__55426 = G__55432;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55427),iter__55424.call(null,cljs.core.chunk_rest.call(null,s__55425__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55427),null);
}
} else
{var vec__55431 = cljs.core.first.call(null,s__55425__$2);var _ = cljs.core.nth.call(null,vec__55431,(0),null);var date = cljs.core.nth.call(null,vec__55431,(1),null);var open = cljs.core.nth.call(null,vec__55431,(2),null);var high = cljs.core.nth.call(null,vec__55431,(3),null);var low = cljs.core.nth.call(null,vec__55431,(4),null);var close = cljs.core.nth.call(null,vec__55431,(5),null);var volume = cljs.core.nth.call(null,vec__55431,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__55424.call(null,cljs.core.rest.call(null,s__55425__$2)));
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
return (function (state_55510){var state_val_55511 = (state_55510[(1)]);if((state_val_55511 === (9)))
{var inst_55500 = (state_55510[(2)]);var state_55510__$1 = state_55510;var statearr_55512_55529 = state_55510__$1;(statearr_55512_55529[(2)] = inst_55500);
(statearr_55512_55529[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55511 === (8)))
{var inst_55506 = (state_55510[(2)]);var state_55510__$1 = state_55510;var statearr_55513_55530 = state_55510__$1;(statearr_55513_55530[(2)] = inst_55506);
(statearr_55513_55530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55511 === (7)))
{var inst_55492 = (state_55510[(7)]);var inst_55502 = cljs.core.concat.call(null,all,inst_55492);var inst_55503 = [null,inst_55502];var inst_55504 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_55503,null));var state_55510__$1 = state_55510;var statearr_55514_55531 = state_55510__$1;(statearr_55514_55531[(2)] = inst_55504);
(statearr_55514_55531[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55511 === (6)))
{var inst_55492 = (state_55510[(7)]);var inst_55496 = cljs.core.concat.call(null,all,inst_55492);var inst_55497 = (start + num);var inst_55498 = stock_info.call(null,inst_55496,id,startdate,inst_55497,num);var state_55510__$1 = state_55510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55510__$1,(9),inst_55498);
} else
{if((state_val_55511 === (5)))
{var inst_55508 = (state_55510[(2)]);var state_55510__$1 = state_55510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55510__$1,inst_55508);
} else
{if((state_val_55511 === (4)))
{var inst_55492 = (state_55510[(7)]);var inst_55487 = (state_55510[(8)]);var inst_55492__$1 = test.stock4.parse_info.call(null,inst_55487);var inst_55493 = cljs.core.count.call(null,inst_55492__$1);var inst_55494 = cljs.core._EQ_.call(null,num,inst_55493);var state_55510__$1 = (function (){var statearr_55515 = state_55510;(statearr_55515[(7)] = inst_55492__$1);
return statearr_55515;
})();if(inst_55494)
{var statearr_55516_55532 = state_55510__$1;(statearr_55516_55532[(1)] = (6));
} else
{var statearr_55517_55533 = state_55510__$1;(statearr_55517_55533[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55511 === (3)))
{var inst_55486 = (state_55510[(9)]);var inst_55489 = [inst_55486];var inst_55490 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_55489,null));var state_55510__$1 = state_55510;var statearr_55518_55534 = state_55510__$1;(statearr_55518_55534[(2)] = inst_55490);
(statearr_55518_55534[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55511 === (2)))
{var inst_55486 = (state_55510[(9)]);var inst_55485 = (state_55510[(2)]);var inst_55486__$1 = cljs.core.nth.call(null,inst_55485,(0),null);var inst_55487 = cljs.core.nth.call(null,inst_55485,(1),null);var state_55510__$1 = (function (){var statearr_55519 = state_55510;(statearr_55519[(9)] = inst_55486__$1);
(statearr_55519[(8)] = inst_55487);
return statearr_55519;
})();if(cljs.core.truth_(inst_55486__$1))
{var statearr_55520_55535 = state_55510__$1;(statearr_55520_55535[(1)] = (3));
} else
{var statearr_55521_55536 = state_55510__$1;(statearr_55521_55536[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55511 === (1)))
{var inst_55482 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_55483 = test.stock4.content.call(null,inst_55482);var state_55510__$1 = state_55510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55510__$1,(2),inst_55483);
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
var state_machine__6188__auto____0 = (function (){var statearr_55525 = [null,null,null,null,null,null,null,null,null,null];(statearr_55525[(0)] = state_machine__6188__auto__);
(statearr_55525[(1)] = (1));
return statearr_55525;
});
var state_machine__6188__auto____1 = (function (state_55510){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_55510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e55526){if((e55526 instanceof Object))
{var ex__6191__auto__ = e55526;var statearr_55527_55537 = state_55510;(statearr_55527_55537[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55538 = state_55510;
state_55510 = G__55538;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_55510){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_55510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_55528 = f__6203__auto__.call(null);(statearr_55528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_55528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__55547 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__55547,(0),null);var open = cljs.core.nth.call(null,vec__55547,(1),null);var _ = cljs.core.nth.call(null,vec__55547,(2),null);var ___$1 = cljs.core.nth.call(null,vec__55547,(3),null);var ___$2 = cljs.core.nth.call(null,vec__55547,(4),null);var ___$3 = cljs.core.nth.call(null,vec__55547,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__55547,date,open,_,___$1,___$2,___$3){
return (function (p__55549){var vec__55550 = p__55549;var ___$4 = cljs.core.nth.call(null,vec__55550,(0),null);var ___$5 = cljs.core.nth.call(null,vec__55550,(1),null);var high = cljs.core.nth.call(null,vec__55550,(2),null);var ___$6 = cljs.core.nth.call(null,vec__55550,(3),null);var ___$7 = cljs.core.nth.call(null,vec__55550,(4),null);var ___$8 = cljs.core.nth.call(null,vec__55550,(5),null);return high;
});})(group,vec__55547,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__55547,date,open,_,___$1,___$2,___$3,high){
return (function (p__55551){var vec__55552 = p__55551;var ___$4 = cljs.core.nth.call(null,vec__55552,(0),null);var ___$5 = cljs.core.nth.call(null,vec__55552,(1),null);var ___$6 = cljs.core.nth.call(null,vec__55552,(2),null);var low = cljs.core.nth.call(null,vec__55552,(3),null);var ___$7 = cljs.core.nth.call(null,vec__55552,(4),null);var ___$8 = cljs.core.nth.call(null,vec__55552,(5),null);return low;
});})(group,vec__55547,date,open,_,___$1,___$2,___$3,high))
,group));var vec__55548 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__55548,(0),null);var ___$5 = cljs.core.nth.call(null,vec__55548,(1),null);var ___$6 = cljs.core.nth.call(null,vec__55548,(2),null);var ___$7 = cljs.core.nth.call(null,vec__55548,(3),null);var close = cljs.core.nth.call(null,vec__55548,(4),null);var ___$8 = cljs.core.nth.call(null,vec__55548,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__55547,date,open,_,___$1,___$2,___$3,high,low,vec__55548,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__55553){var vec__55554 = p__55553;var ___$9 = cljs.core.nth.call(null,vec__55554,(0),null);var ___$10 = cljs.core.nth.call(null,vec__55554,(1),null);var ___$11 = cljs.core.nth.call(null,vec__55554,(2),null);var ___$12 = cljs.core.nth.call(null,vec__55554,(3),null);var ___$13 = cljs.core.nth.call(null,vec__55554,(4),null);var volume = cljs.core.nth.call(null,vec__55554,(5),null);return volume;
});})(group,vec__55547,date,open,_,___$1,___$2,___$3,high,low,vec__55548,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__55547,date,open,_,___$1,___$2,___$3,high,low,vec__55548,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__55547,date,open,_,___$1,___$2,___$3,high,low,vec__55548,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__55558 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__55558,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55558,(1),null);var ___$2 = cljs.core.nth.call(null,vec__55558,(2),null);var ___$3 = cljs.core.nth.call(null,vec__55558,(3),null);var c1 = cljs.core.nth.call(null,vec__55558,(4),null);var ___$4 = cljs.core.nth.call(null,vec__55558,(5),null);var l1 = vec__55558;var vec__55559 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__55559,(0),null);var ___$5 = cljs.core.nth.call(null,vec__55559,(1),null);var ___$6 = cljs.core.nth.call(null,vec__55559,(2),null);var ___$7 = cljs.core.nth.call(null,vec__55559,(3),null);var c2 = cljs.core.nth.call(null,vec__55559,(4),null);var ___$8 = cljs.core.nth.call(null,vec__55559,(5),null);var l2 = vec__55559;var vec__55560 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__55560,(0),null);var ___$10 = cljs.core.nth.call(null,vec__55560,(1),null);var ___$11 = cljs.core.nth.call(null,vec__55560,(2),null);var ___$12 = cljs.core.nth.call(null,vec__55560,(3),null);var c3 = cljs.core.nth.call(null,vec__55560,(4),null);var ___$13 = cljs.core.nth.call(null,vec__55560,(5),null);var l3 = vec__55560;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__55558,_,___$1,___$2,___$3,c1,___$4,l1,vec__55559,date,___$5,___$6,___$7,c2,___$8,l2,vec__55560,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__55558,_,___$1,___$2,___$3,c1,___$4,l1,vec__55559,date,___$5,___$6,___$7,c2,___$8,l2,vec__55560,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__55565){var vec__55566 = p__55565;var _ = cljs.core.nth.call(null,vec__55566,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55566,(1),null);var high = cljs.core.nth.call(null,vec__55566,(2),null);var low = cljs.core.nth.call(null,vec__55566,(3),null);var ___$2 = cljs.core.nth.call(null,vec__55566,(4),null);var ___$3 = cljs.core.nth.call(null,vec__55566,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__55564 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__55564,(0),null);var open = cljs.core.nth.call(null,vec__55564,(1),null);var high = cljs.core.nth.call(null,vec__55564,(2),null);var low = cljs.core.nth.call(null,vec__55564,(3),null);var close = cljs.core.nth.call(null,vec__55564,(4),null);var ___$1 = cljs.core.nth.call(null,vec__55564,(5),null);var curr = vec__55564;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__55564,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__55564,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__55569){var vec__55570 = p__55569;var _ = cljs.core.nth.call(null,vec__55570,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55570,(1),null);var ___$2 = cljs.core.nth.call(null,vec__55570,(2),null);var ___$3 = cljs.core.nth.call(null,vec__55570,(3),null);var close = cljs.core.nth.call(null,vec__55570,(4),null);var ___$4 = cljs.core.nth.call(null,vec__55570,(5),null);return close;
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
return (function (p__55573){var vec__55574 = p__55573;var _ = cljs.core.nth.call(null,vec__55574,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55574,(1),null);var ___$2 = cljs.core.nth.call(null,vec__55574,(2),null);var ___$3 = cljs.core.nth.call(null,vec__55574,(3),null);var close = cljs.core.nth.call(null,vec__55574,(4),null);var ___$4 = cljs.core.nth.call(null,vec__55574,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__55580 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__55580,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55580,(1),null);var ___$2 = cljs.core.nth.call(null,vec__55580,(2),null);var ___$3 = cljs.core.nth.call(null,vec__55580,(3),null);var close = cljs.core.nth.call(null,vec__55580,(4),null);var ___$4 = cljs.core.nth.call(null,vec__55580,(5),null);var curr = vec__55580;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__55580,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__55581){var vec__55582 = p__55581;var vec__55583 = cljs.core.nth.call(null,vec__55582,(0),null);var ___$5 = cljs.core.nth.call(null,vec__55583,(0),null);var prev_ema = cljs.core.nth.call(null,vec__55583,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__55582,(1),null);var idx = cljs.core.nth.call(null,vec__55582,(2),null);var vec__55584 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__55584,(0),null);var ___$7 = cljs.core.nth.call(null,vec__55584,(1),null);var ___$8 = cljs.core.nth.call(null,vec__55584,(2),null);var ___$9 = cljs.core.nth.call(null,vec__55584,(3),null);var close__$1 = cljs.core.nth.call(null,vec__55584,(4),null);var ___$10 = cljs.core.nth.call(null,vec__55584,(5),null);var curr__$1 = vec__55584;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__55580,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__55590 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__55590,(0),null);var ___$1 = cljs.core.nth.call(null,vec__55590,(1),null);var ___$2 = cljs.core.nth.call(null,vec__55590,(2),null);var ___$3 = cljs.core.nth.call(null,vec__55590,(3),null);var ct = cljs.core.nth.call(null,vec__55590,(4),null);var ___$4 = cljs.core.nth.call(null,vec__55590,(5),null);var curr = vec__55590;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__55590,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__55591){var vec__55592 = p__55591;var ___$5 = cljs.core.nth.call(null,vec__55592,(0),null);var ___$6 = cljs.core.nth.call(null,vec__55592,(1),null);var ___$7 = cljs.core.nth.call(null,vec__55592,(2),null);var low = cljs.core.nth.call(null,vec__55592,(3),null);var ___$8 = cljs.core.nth.call(null,vec__55592,(4),null);var ___$9 = cljs.core.nth.call(null,vec__55592,(5),null);return low;
});})(group,vec__55590,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__55590,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__55593){var vec__55594 = p__55593;var ___$5 = cljs.core.nth.call(null,vec__55594,(0),null);var ___$6 = cljs.core.nth.call(null,vec__55594,(1),null);var high = cljs.core.nth.call(null,vec__55594,(2),null);var ___$7 = cljs.core.nth.call(null,vec__55594,(3),null);var ___$8 = cljs.core.nth.call(null,vec__55594,(4),null);var ___$9 = cljs.core.nth.call(null,vec__55594,(5),null);return high;
});})(group,vec__55590,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__55590,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__55590,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__55597){var vec__55598 = p__55597;var line = cljs.core.nth.call(null,vec__55598,(0),null);var v = cljs.core.nth.call(null,vec__55598,(1),null);return v;
});})(group))
,group)) / cljs.core.count.call(null,group));return cljs.core.cons.call(null,avg,(new cljs.core.LazySeq(null,((function (group,avg){
return (function (){return k.call(null,n,cljs.core.rest.call(null,rsv_seq));
});})(group,avg))
,null,null)));
} else
{return null;
}
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_55976){var state_val_55977 = (state_55976[(1)]);if((state_val_55977 === (2)))
{var inst_55974 = (state_55976[(2)]);var state_55976__$1 = state_55976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55976__$1,inst_55974);
} else
{if((state_val_55977 === (1)))
{var inst_55972 = cljs.core.js__GT_clj.call(null,data);var state_55976__$1 = state_55976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55976__$1,(2),onView,inst_55972);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_55981 = [null,null,null,null,null,null,null];(statearr_55981[(0)] = state_machine__6188__auto__);
(statearr_55981[(1)] = (1));
return statearr_55981;
});
var state_machine__6188__auto____1 = (function (state_55976){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_55976);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e55982){if((e55982 instanceof Object))
{var ex__6191__auto__ = e55982;var statearr_55983_56345 = state_55976;(statearr_55983_56345[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56346 = state_55976;
state_55976 = G__56346;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_55976){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_55976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_55984 = f__6203__auto__.call(null);(statearr_55984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_55984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___56347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___56347,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___56347,draw,onSystem,onView){
return (function (state_56001){var state_val_56002 = (state_56001[(1)]);if((state_val_56002 === (6)))
{var inst_55997 = (state_56001[(2)]);var state_56001__$1 = state_56001;var statearr_56003_56348 = state_56001__$1;(statearr_56003_56348[(2)] = inst_55997);
(statearr_56003_56348[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56002 === (5)))
{var inst_55999 = (state_56001[(2)]);var state_56001__$1 = state_56001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56001__$1,inst_55999);
} else
{if((state_val_56002 === (4)))
{var inst_55990 = (state_56001[(7)]);var inst_55994 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_55990];var inst_55995 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_55994,null));var state_56001__$1 = state_56001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56001__$1,(6),onSystem,inst_55995);
} else
{if((state_val_56002 === (3)))
{var inst_55989 = (state_56001[(8)]);var inst_55992 = alert(inst_55989);var state_56001__$1 = state_56001;var statearr_56004_56349 = state_56001__$1;(statearr_56004_56349[(2)] = inst_55992);
(statearr_56004_56349[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56002 === (2)))
{var inst_55989 = (state_56001[(8)]);var inst_55988 = (state_56001[(2)]);var inst_55989__$1 = cljs.core.nth.call(null,inst_55988,(0),null);var inst_55990 = cljs.core.nth.call(null,inst_55988,(1),null);var state_56001__$1 = (function (){var statearr_56005 = state_56001;(statearr_56005[(8)] = inst_55989__$1);
(statearr_56005[(7)] = inst_55990);
return statearr_56005;
})();if(cljs.core.truth_(inst_55989__$1))
{var statearr_56006_56350 = state_56001__$1;(statearr_56006_56350[(1)] = (3));
} else
{var statearr_56007_56351 = state_56001__$1;(statearr_56007_56351[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56002 === (1)))
{var inst_55986 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_56001__$1 = state_56001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56001__$1,(2),inst_55986);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___56347,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___56347,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56011 = [null,null,null,null,null,null,null,null,null];(statearr_56011[(0)] = state_machine__6188__auto__);
(statearr_56011[(1)] = (1));
return statearr_56011;
});
var state_machine__6188__auto____1 = (function (state_56001){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56001);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56012){if((e56012 instanceof Object))
{var ex__6191__auto__ = e56012;var statearr_56013_56352 = state_56001;(statearr_56013_56352[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56353 = state_56001;
state_56001 = G__56353;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56001){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___56347,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_56014 = f__6203__auto__.call(null);(statearr_56014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___56347);
return statearr_56014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___56347,draw,onSystem,onView))
);
var c__6202__auto___56354 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___56354,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___56354,draw,onSystem,onView){
return (function (state_56232){var state_val_56233 = (state_56232[(1)]);if((state_val_56233 === (7)))
{var inst_56028 = (state_56232[(7)]);var inst_56033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56028);var state_56232__$1 = state_56232;var statearr_56234_56355 = state_56232__$1;(statearr_56234_56355[(2)] = inst_56033);
(statearr_56234_56355[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (20)))
{var inst_56043 = (state_56232[(8)]);var inst_56071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56043);var state_56232__$1 = state_56232;var statearr_56235_56356 = state_56232__$1;(statearr_56235_56356[(2)] = inst_56071);
(statearr_56235_56356[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (27)))
{var inst_56075 = (state_56232[(9)]);var inst_56096 = cljs.core._EQ_.call(null,"ema",inst_56075);var state_56232__$1 = state_56232;if(inst_56096)
{var statearr_56236_56357 = state_56232__$1;(statearr_56236_56357[(1)] = (29));
} else
{var statearr_56237_56358 = state_56232__$1;(statearr_56237_56358[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (1)))
{var inst_56020 = (state_56232[(10)]);var inst_56018 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_56019 = [(200)];var inst_56020__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_56018,inst_56019);var inst_56021 = cljs.core.seq_QMARK_.call(null,inst_56020__$1);var state_56232__$1 = (function (){var statearr_56238 = state_56232;(statearr_56238[(10)] = inst_56020__$1);
return statearr_56238;
})();if(inst_56021)
{var statearr_56239_56359 = state_56232__$1;(statearr_56239_56359[(1)] = (2));
} else
{var statearr_56240_56360 = state_56232__$1;(statearr_56240_56360[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (24)))
{var inst_56075 = (state_56232[(9)]);var inst_56088 = cljs.core._EQ_.call(null,"sma",inst_56075);var state_56232__$1 = state_56232;if(inst_56088)
{var statearr_56241_56361 = state_56232__$1;(statearr_56241_56361[(1)] = (26));
} else
{var statearr_56242_56362 = state_56232__$1;(statearr_56242_56362[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (55)))
{var inst_56183 = (state_56232[(11)]);var inst_56187 = cljs.core.chunk_first.call(null,inst_56183);var inst_56188 = cljs.core.chunk_rest.call(null,inst_56183);var inst_56189 = cljs.core.count.call(null,inst_56187);var inst_56169 = inst_56188;var inst_56170 = inst_56187;var inst_56171 = inst_56189;var inst_56172 = (0);var state_56232__$1 = (function (){var statearr_56243 = state_56232;(statearr_56243[(12)] = inst_56172);
(statearr_56243[(13)] = inst_56169);
(statearr_56243[(14)] = inst_56171);
(statearr_56243[(15)] = inst_56170);
return statearr_56243;
})();var statearr_56244_56363 = state_56232__$1;(statearr_56244_56363[(2)] = null);
(statearr_56244_56363[(1)] = (47));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (39)))
{var inst_56075 = (state_56232[(9)]);var inst_56152 = cljs.core._EQ_.call(null,"turn",inst_56075);var state_56232__$1 = state_56232;if(inst_56152)
{var statearr_56245_56364 = state_56232__$1;(statearr_56245_56364[(1)] = (41));
} else
{var statearr_56246_56365 = state_56232__$1;(statearr_56246_56365[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (46)))
{var inst_56208 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56247_56366 = state_56232__$1;(statearr_56247_56366[(2)] = inst_56208);
(statearr_56247_56366[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (4)))
{var inst_56026 = (state_56232[(16)]);var inst_56020 = (state_56232[(10)]);var inst_56026__$1 = (state_56232[(2)]);var inst_56027 = cljs.core.get.call(null,inst_56026__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_56028 = inst_56020;var state_56232__$1 = (function (){var statearr_56248 = state_56232;(statearr_56248[(16)] = inst_56026__$1);
(statearr_56248[(7)] = inst_56028);
(statearr_56248[(17)] = inst_56027);
return statearr_56248;
})();var statearr_56249_56367 = state_56232__$1;(statearr_56249_56367[(2)] = null);
(statearr_56249_56367[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (54)))
{var inst_56201 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56250_56368 = state_56232__$1;(statearr_56250_56368[(2)] = inst_56201);
(statearr_56250_56368[(1)] = (51));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (15)))
{var inst_56036 = (state_56232[(18)]);var state_56232__$1 = state_56232;var statearr_56251_56369 = state_56232__$1;(statearr_56251_56369[(2)] = inst_56036);
(statearr_56251_56369[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (48)))
{var inst_56036 = (state_56232[(18)]);var inst_56205 = (state_56232[(2)]);var state_56232__$1 = (function (){var statearr_56252 = state_56232;(statearr_56252[(19)] = inst_56205);
return statearr_56252;
})();var statearr_56253_56370 = state_56232__$1;(statearr_56253_56370[(2)] = inst_56036);
(statearr_56253_56370[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (50)))
{var inst_56169 = (state_56232[(13)]);var inst_56183 = (state_56232[(11)]);var inst_56183__$1 = cljs.core.seq.call(null,inst_56169);var state_56232__$1 = (function (){var statearr_56254 = state_56232;(statearr_56254[(11)] = inst_56183__$1);
return statearr_56254;
})();if(inst_56183__$1)
{var statearr_56255_56371 = state_56232__$1;(statearr_56255_56371[(1)] = (52));
} else
{var statearr_56256_56372 = state_56232__$1;(statearr_56256_56372[(1)] = (53));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (21)))
{var inst_56043 = (state_56232[(8)]);var state_56232__$1 = state_56232;var statearr_56257_56373 = state_56232__$1;(statearr_56257_56373[(2)] = inst_56043);
(statearr_56257_56373[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (31)))
{var inst_56218 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56258_56374 = state_56232__$1;(statearr_56258_56374[(2)] = inst_56218);
(statearr_56258_56374[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (32)))
{var inst_56036 = (state_56232[(18)]);var inst_56076 = (state_56232[(20)]);var inst_56106 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56107 = cljs.core.count.call(null,inst_56106);var inst_56108 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56109 = test.stock4.rsv.call(null,inst_56108);var inst_56110 = test.stock4.k.call(null,inst_56076,inst_56109);var inst_56111 = cljs.core.take.call(null,inst_56107,inst_56110);var inst_56112 = ((3) * inst_56076);var inst_56113 = test.stock4.k.call(null,inst_56112,inst_56109);var inst_56114 = cljs.core.take.call(null,inst_56107,inst_56113);var inst_56115 = [null,inst_56111,inst_56114];var inst_56116 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56115,null));var inst_56117 = cljs.core.assoc.call(null,inst_56036,new cljs.core.Keyword(null,"kd","kd",771448701),inst_56116);var inst_56118 = draw.call(null,inst_56117);var state_56232__$1 = state_56232;var statearr_56259_56375 = state_56232__$1;(statearr_56259_56375[(2)] = inst_56118);
(statearr_56259_56375[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (40)))
{var inst_56212 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56260_56376 = state_56232__$1;(statearr_56260_56376[(2)] = inst_56212);
(statearr_56260_56376[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (56)))
{var inst_56183 = (state_56232[(11)]);var inst_56192 = cljs.core.first.call(null,inst_56183);var inst_56193 = cljs.core.pr_str.call(null,inst_56192);var inst_56194 = console.log(inst_56193);var inst_56195 = cljs.core.next.call(null,inst_56183);var inst_56169 = inst_56195;var inst_56170 = null;var inst_56171 = (0);var inst_56172 = (0);var state_56232__$1 = (function (){var statearr_56261 = state_56232;(statearr_56261[(12)] = inst_56172);
(statearr_56261[(13)] = inst_56169);
(statearr_56261[(14)] = inst_56171);
(statearr_56261[(15)] = inst_56170);
(statearr_56261[(21)] = inst_56194);
return statearr_56261;
})();var statearr_56262_56377 = state_56232__$1;(statearr_56262_56377[(2)] = null);
(statearr_56262_56377[(1)] = (47));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (33)))
{var inst_56075 = (state_56232[(9)]);var inst_56120 = cljs.core._EQ_.call(null,"stock",inst_56075);var state_56232__$1 = state_56232;if(inst_56120)
{var statearr_56263_56378 = state_56232__$1;(statearr_56263_56378[(1)] = (35));
} else
{var statearr_56264_56379 = state_56232__$1;(statearr_56264_56379[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (13)))
{var inst_56227 = (state_56232[(2)]);var inst_56028 = inst_56227;var state_56232__$1 = (function (){var statearr_56265 = state_56232;(statearr_56265[(7)] = inst_56028);
return statearr_56265;
})();var statearr_56266_56380 = state_56232__$1;(statearr_56266_56380[(2)] = null);
(statearr_56266_56380[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (22)))
{var inst_56075 = (state_56232[(9)]);var inst_56074 = (state_56232[(22)]);var inst_56074__$1 = (state_56232[(2)]);var inst_56075__$1 = cljs.core.get.call(null,inst_56074__$1,"cmd");var inst_56076 = cljs.core.get.call(null,inst_56074__$1,"params");var inst_56080 = cljs.core._EQ_.call(null,"length",inst_56075__$1);var state_56232__$1 = (function (){var statearr_56267 = state_56232;(statearr_56267[(20)] = inst_56076);
(statearr_56267[(9)] = inst_56075__$1);
(statearr_56267[(22)] = inst_56074__$1);
return statearr_56267;
})();if(inst_56080)
{var statearr_56268_56381 = state_56232__$1;(statearr_56268_56381[(1)] = (23));
} else
{var statearr_56269_56382 = state_56232__$1;(statearr_56269_56382[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (36)))
{var inst_56075 = (state_56232[(9)]);var inst_56144 = cljs.core._EQ_.call(null,"avg",inst_56075);var state_56232__$1 = state_56232;if(inst_56144)
{var statearr_56270_56383 = state_56232__$1;(statearr_56270_56383[(1)] = (38));
} else
{var statearr_56271_56384 = state_56232__$1;(statearr_56271_56384[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (41)))
{var inst_56036 = (state_56232[(18)]);var inst_56037 = (state_56232[(23)]);var inst_56154 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56155 = test.stock4.check_turn.call(null,inst_56154);var inst_56156 = cljs.core.take.call(null,inst_56037,inst_56155);var inst_56157 = cljs.core.assoc.call(null,inst_56036,new cljs.core.Keyword(null,"turn","turn",75759344),inst_56156);var inst_56158 = draw.call(null,inst_56157);var state_56232__$1 = state_56232;var statearr_56272_56385 = state_56232__$1;(statearr_56272_56385[(2)] = inst_56158);
(statearr_56272_56385[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (43)))
{var inst_56210 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56273_56386 = state_56232__$1;(statearr_56273_56386[(2)] = inst_56210);
(statearr_56273_56386[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (29)))
{var inst_56036 = (state_56232[(18)]);var inst_56076 = (state_56232[(20)]);var inst_56098 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56099 = test.stock4.ema.call(null,inst_56076,(0),inst_56098);var inst_56100 = cljs.core.take.call(null,(10),inst_56099);var inst_56101 = cljs.core.pr_str.call(null,inst_56100);var inst_56102 = console.log(inst_56101);var state_56232__$1 = (function (){var statearr_56274 = state_56232;(statearr_56274[(24)] = inst_56102);
return statearr_56274;
})();var statearr_56275_56387 = state_56232__$1;(statearr_56275_56387[(2)] = inst_56036);
(statearr_56275_56387[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (44)))
{var inst_56036 = (state_56232[(18)]);var inst_56076 = (state_56232[(20)]);var inst_56166 = cljs.core.keyword.call(null,inst_56076);var inst_56167 = inst_56166.call(null,inst_56036);var inst_56168 = cljs.core.seq.call(null,inst_56167);var inst_56169 = inst_56168;var inst_56170 = null;var inst_56171 = (0);var inst_56172 = (0);var state_56232__$1 = (function (){var statearr_56276 = state_56232;(statearr_56276[(12)] = inst_56172);
(statearr_56276[(13)] = inst_56169);
(statearr_56276[(14)] = inst_56171);
(statearr_56276[(15)] = inst_56170);
return statearr_56276;
})();var statearr_56277_56388 = state_56232__$1;(statearr_56277_56388[(2)] = null);
(statearr_56277_56388[(1)] = (47));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (6)))
{var inst_56230 = (state_56232[(2)]);var state_56232__$1 = state_56232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56232__$1,inst_56230);
} else
{if((state_val_56233 === (28)))
{var inst_56220 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56278_56389 = state_56232__$1;(statearr_56278_56389[(2)] = inst_56220);
(statearr_56278_56389[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (51)))
{var inst_56203 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56279_56390 = state_56232__$1;(statearr_56279_56390[(2)] = inst_56203);
(statearr_56279_56390[(1)] = (48));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (25)))
{var inst_56222 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56280_56391 = state_56232__$1;(statearr_56280_56391[(2)] = inst_56222);
(statearr_56280_56391[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (34)))
{var inst_56216 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56281_56392 = state_56232__$1;(statearr_56281_56392[(2)] = inst_56216);
(statearr_56281_56392[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (17)))
{var inst_56043 = (state_56232[(8)]);var inst_56069 = cljs.core.seq_QMARK_.call(null,inst_56043);var state_56232__$1 = state_56232;if(inst_56069)
{var statearr_56282_56393 = state_56232__$1;(statearr_56282_56393[(1)] = (20));
} else
{var statearr_56283_56394 = state_56232__$1;(statearr_56283_56394[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (3)))
{var inst_56020 = (state_56232[(10)]);var state_56232__$1 = state_56232;var statearr_56284_56395 = state_56232__$1;(statearr_56284_56395[(2)] = inst_56020);
(statearr_56284_56395[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (12)))
{var inst_56044 = (state_56232[(25)]);var inst_56066 = cljs.core._EQ_.call(null,onView,inst_56044);var state_56232__$1 = state_56232;if(inst_56066)
{var statearr_56285_56396 = state_56232__$1;(statearr_56285_56396[(1)] = (17));
} else
{var statearr_56286_56397 = state_56232__$1;(statearr_56286_56397[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (2)))
{var inst_56020 = (state_56232[(10)]);var inst_56023 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56020);var state_56232__$1 = state_56232;var statearr_56287_56398 = state_56232__$1;(statearr_56287_56398[(2)] = inst_56023);
(statearr_56287_56398[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (23)))
{var inst_56036 = (state_56232[(18)]);var inst_56082 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56083 = test.stock4.check_length.call(null,inst_56082);var inst_56084 = cljs.core.take.call(null,(10),inst_56083);var inst_56085 = cljs.core.pr_str.call(null,inst_56084);var inst_56086 = console.log(inst_56085);var state_56232__$1 = (function (){var statearr_56288 = state_56232;(statearr_56288[(26)] = inst_56086);
return statearr_56288;
})();var statearr_56289_56399 = state_56232__$1;(statearr_56289_56399[(2)] = inst_56036);
(statearr_56289_56399[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (47)))
{var inst_56172 = (state_56232[(12)]);var inst_56171 = (state_56232[(14)]);var inst_56174 = (inst_56172 < inst_56171);var inst_56175 = inst_56174;var state_56232__$1 = state_56232;if(cljs.core.truth_(inst_56175))
{var statearr_56290_56400 = state_56232__$1;(statearr_56290_56400[(1)] = (49));
} else
{var statearr_56291_56401 = state_56232__$1;(statearr_56291_56401[(1)] = (50));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (35)))
{var inst_56036 = (state_56232[(18)]);var inst_56043 = (state_56232[(8)]);var inst_56076 = (state_56232[(20)]);var inst_56026 = (state_56232[(16)]);var inst_56028 = (state_56232[(7)]);var inst_56042 = (state_56232[(27)]);var inst_56075 = (state_56232[(9)]);var inst_56074 = (state_56232[(22)]);var inst_56037 = (state_56232[(23)]);var inst_56044 = (state_56232[(25)]);var inst_56140 = cljs.core.async.chan.call(null,(1));var inst_56141 = (function (){var cmd = inst_56075;var input = inst_56074;var ctx = inst_56036;var G__56016 = inst_56028;var v = inst_56043;var map__56068 = inst_56074;var map__56017 = inst_56026;var vec__56038 = inst_56042;var params = inst_56076;var expr__56046 = inst_56044;var expr__56078 = inst_56075;var cnt = inst_56037;var pred__56077 = cljs.core._EQ_;var ch = inst_56044;var c__6202__auto____$1 = inst_56140;var pred__56045 = cljs.core._EQ_;var map__56030 = inst_56036;return ((function (cmd,input,ctx,G__56016,v,map__56068,map__56017,vec__56038,params,expr__56046,expr__56078,cnt,pred__56077,ch,c__6202__auto____$1,pred__56045,map__56030,inst_56036,inst_56043,inst_56076,inst_56026,inst_56028,inst_56042,inst_56075,inst_56074,inst_56037,inst_56044,inst_56140,state_val_56233,c__6202__auto___56354,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,ctx,G__56016,v,map__56068,map__56017,vec__56038,params,expr__56046,expr__56078,cnt,pred__56077,ch,c__6202__auto____$1,pred__56045,map__56030,inst_56036,inst_56043,inst_56076,inst_56026,inst_56028,inst_56042,inst_56075,inst_56074,inst_56037,inst_56044,inst_56140,state_val_56233,c__6202__auto___56354,draw,onSystem,onView){
return (function (state_56138){var state_val_56139 = (state_56138[(1)]);if((state_val_56139 === (6)))
{var inst_56134 = (state_56138[(2)]);var state_56138__$1 = state_56138;var statearr_56292_56402 = state_56138__$1;(statearr_56292_56402[(2)] = inst_56134);
(statearr_56292_56402[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56139 === (5)))
{var inst_56136 = (state_56138[(2)]);var state_56138__$1 = state_56138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56138__$1,inst_56136);
} else
{if((state_val_56139 === (4)))
{var inst_56127 = (state_56138[(7)]);var inst_56131 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_56127];var inst_56132 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56131,null));var state_56138__$1 = state_56138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56138__$1,(6),onSystem,inst_56132);
} else
{if((state_val_56139 === (3)))
{var inst_56126 = (state_56138[(8)]);var inst_56129 = alert(inst_56126);var state_56138__$1 = state_56138;var statearr_56293_56403 = state_56138__$1;(statearr_56293_56403[(2)] = inst_56129);
(statearr_56293_56403[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56139 === (2)))
{var inst_56126 = (state_56138[(8)]);var inst_56125 = (state_56138[(2)]);var inst_56126__$1 = cljs.core.nth.call(null,inst_56125,(0),null);var inst_56127 = cljs.core.nth.call(null,inst_56125,(1),null);var state_56138__$1 = (function (){var statearr_56294 = state_56138;(statearr_56294[(8)] = inst_56126__$1);
(statearr_56294[(7)] = inst_56127);
return statearr_56294;
})();if(cljs.core.truth_(inst_56126__$1))
{var statearr_56295_56404 = state_56138__$1;(statearr_56295_56404[(1)] = (3));
} else
{var statearr_56296_56405 = state_56138__$1;(statearr_56296_56405[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56139 === (1)))
{var inst_56123 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_56138__$1 = state_56138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56138__$1,(2),inst_56123);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,ctx,G__56016,v,map__56068,map__56017,vec__56038,params,expr__56046,expr__56078,cnt,pred__56077,ch,c__6202__auto____$1,pred__56045,map__56030,inst_56036,inst_56043,inst_56076,inst_56026,inst_56028,inst_56042,inst_56075,inst_56074,inst_56037,inst_56044,inst_56140,state_val_56233,c__6202__auto___56354,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,ctx,G__56016,v,map__56068,map__56017,vec__56038,params,expr__56046,expr__56078,cnt,pred__56077,ch,c__6202__auto____$1,pred__56045,map__56030,inst_56036,inst_56043,inst_56076,inst_56026,inst_56028,inst_56042,inst_56075,inst_56074,inst_56037,inst_56044,inst_56140,state_val_56233,c__6202__auto___56354,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56300 = [null,null,null,null,null,null,null,null,null];(statearr_56300[(0)] = state_machine__6188__auto__);
(statearr_56300[(1)] = (1));
return statearr_56300;
});
var state_machine__6188__auto____1 = (function (state_56138){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56138);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56301){if((e56301 instanceof Object))
{var ex__6191__auto__ = e56301;var statearr_56302_56406 = state_56138;(statearr_56302_56406[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56407 = state_56138;
state_56138 = G__56407;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56138){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,ctx,G__56016,v,map__56068,map__56017,vec__56038,params,expr__56046,expr__56078,cnt,pred__56077,ch,c__6202__auto____$1,pred__56045,map__56030,inst_56036,inst_56043,inst_56076,inst_56026,inst_56028,inst_56042,inst_56075,inst_56074,inst_56037,inst_56044,inst_56140,state_val_56233,c__6202__auto___56354,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_56303 = f__6203__auto__.call(null);(statearr_56303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_56303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,ctx,G__56016,v,map__56068,map__56017,vec__56038,params,expr__56046,expr__56078,cnt,pred__56077,ch,c__6202__auto____$1,pred__56045,map__56030,inst_56036,inst_56043,inst_56076,inst_56026,inst_56028,inst_56042,inst_56075,inst_56074,inst_56037,inst_56044,inst_56140,state_val_56233,c__6202__auto___56354,draw,onSystem,onView))
})();var inst_56142 = cljs.core.async.impl.dispatch.run.call(null,inst_56141);var state_56232__$1 = (function (){var statearr_56304 = state_56232;(statearr_56304[(28)] = inst_56142);
return statearr_56304;
})();var statearr_56305_56408 = state_56232__$1;(statearr_56305_56408[(2)] = inst_56036);
(statearr_56305_56408[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (19)))
{var inst_56225 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56306_56409 = state_56232__$1;(statearr_56306_56409[(2)] = inst_56225);
(statearr_56306_56409[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (57)))
{var inst_56198 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56307_56410 = state_56232__$1;(statearr_56307_56410[(2)] = inst_56198);
(statearr_56307_56410[(1)] = (54));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (11)))
{var inst_56043 = (state_56232[(8)]);var inst_56051 = cljs.core.nth.call(null,inst_56043,(0),null);var inst_56052 = cljs.core.nth.call(null,inst_56043,(1),null);var inst_56056 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_56051);var state_56232__$1 = (function (){var statearr_56308 = state_56232;(statearr_56308[(29)] = inst_56052);
return statearr_56308;
})();if(inst_56056)
{var statearr_56309_56411 = state_56232__$1;(statearr_56309_56411[(1)] = (14));
} else
{var statearr_56310_56412 = state_56232__$1;(statearr_56310_56412[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (9)))
{var inst_56036 = (state_56232[(18)]);var inst_56036__$1 = (state_56232[(2)]);var inst_56037 = cljs.core.get.call(null,inst_56036__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_56039 = [onSystem,onView];var inst_56040 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_56039,null));var state_56232__$1 = (function (){var statearr_56311 = state_56232;(statearr_56311[(18)] = inst_56036__$1);
(statearr_56311[(23)] = inst_56037);
return statearr_56311;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_56232__$1,(10),inst_56040);
} else
{if((state_val_56233 === (5)))
{var inst_56028 = (state_56232[(7)]);var inst_56031 = cljs.core.seq_QMARK_.call(null,inst_56028);var state_56232__$1 = state_56232;if(inst_56031)
{var statearr_56312_56413 = state_56232__$1;(statearr_56312_56413[(1)] = (7));
} else
{var statearr_56313_56414 = state_56232__$1;(statearr_56313_56414[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (14)))
{var inst_56036 = (state_56232[(18)]);var inst_56052 = (state_56232[(29)]);var inst_56037 = (state_56232[(23)]);var inst_56058 = cljs.core.assoc.call(null,inst_56036,new cljs.core.Keyword(null,"info","info",-317069002),inst_56052);var inst_56059 = cljs.core.take.call(null,inst_56037,inst_56052);var inst_56060 = cljs.core.assoc.call(null,inst_56058,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_56059);var inst_56061 = draw.call(null,inst_56060);var state_56232__$1 = state_56232;var statearr_56314_56415 = state_56232__$1;(statearr_56314_56415[(2)] = inst_56061);
(statearr_56314_56415[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (45)))
{var inst_56036 = (state_56232[(18)]);var state_56232__$1 = state_56232;var statearr_56315_56416 = state_56232__$1;(statearr_56315_56416[(2)] = inst_56036);
(statearr_56315_56416[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (53)))
{var state_56232__$1 = state_56232;var statearr_56316_56417 = state_56232__$1;(statearr_56316_56417[(2)] = null);
(statearr_56316_56417[(1)] = (54));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (26)))
{var inst_56036 = (state_56232[(18)]);var inst_56076 = (state_56232[(20)]);var inst_56090 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56091 = test.stock4.sma.call(null,inst_56076,inst_56090);var inst_56092 = cljs.core.take.call(null,(10),inst_56091);var inst_56093 = cljs.core.pr_str.call(null,inst_56092);var inst_56094 = console.log(inst_56093);var state_56232__$1 = (function (){var statearr_56317 = state_56232;(statearr_56317[(30)] = inst_56094);
return statearr_56317;
})();var statearr_56318_56418 = state_56232__$1;(statearr_56318_56418[(2)] = inst_56036);
(statearr_56318_56418[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (16)))
{var inst_56064 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56319_56419 = state_56232__$1;(statearr_56319_56419[(2)] = inst_56064);
(statearr_56319_56419[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (38)))
{var inst_56036 = (state_56232[(18)]);var inst_56076 = (state_56232[(20)]);var inst_56037 = (state_56232[(23)]);var inst_56146 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_56036);var inst_56147 = test.stock4.average.call(null,inst_56076,inst_56146);var inst_56148 = cljs.core.take.call(null,inst_56037,inst_56147);var inst_56149 = cljs.core.assoc.call(null,inst_56036,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_56148);var inst_56150 = draw.call(null,inst_56149);var state_56232__$1 = state_56232;var statearr_56320_56420 = state_56232__$1;(statearr_56320_56420[(2)] = inst_56150);
(statearr_56320_56420[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (30)))
{var inst_56075 = (state_56232[(9)]);var inst_56104 = cljs.core._EQ_.call(null,"rsv",inst_56075);var state_56232__$1 = state_56232;if(inst_56104)
{var statearr_56321_56421 = state_56232__$1;(statearr_56321_56421[(1)] = (32));
} else
{var statearr_56322_56422 = state_56232__$1;(statearr_56322_56422[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (10)))
{var inst_56042 = (state_56232[(27)]);var inst_56044 = (state_56232[(25)]);var inst_56042__$1 = (state_56232[(2)]);var inst_56043 = cljs.core.nth.call(null,inst_56042__$1,(0),null);var inst_56044__$1 = cljs.core.nth.call(null,inst_56042__$1,(1),null);var inst_56048 = cljs.core._EQ_.call(null,onSystem,inst_56044__$1);var state_56232__$1 = (function (){var statearr_56323 = state_56232;(statearr_56323[(8)] = inst_56043);
(statearr_56323[(27)] = inst_56042__$1);
(statearr_56323[(25)] = inst_56044__$1);
return statearr_56323;
})();if(inst_56048)
{var statearr_56324_56423 = state_56232__$1;(statearr_56324_56423[(1)] = (11));
} else
{var statearr_56325_56424 = state_56232__$1;(statearr_56325_56424[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (18)))
{var inst_56036 = (state_56232[(18)]);var state_56232__$1 = state_56232;var statearr_56326_56425 = state_56232__$1;(statearr_56326_56425[(2)] = inst_56036);
(statearr_56326_56425[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (52)))
{var inst_56183 = (state_56232[(11)]);var inst_56185 = cljs.core.chunked_seq_QMARK_.call(null,inst_56183);var state_56232__$1 = state_56232;if(inst_56185)
{var statearr_56327_56426 = state_56232__$1;(statearr_56327_56426[(1)] = (55));
} else
{var statearr_56328_56427 = state_56232__$1;(statearr_56328_56427[(1)] = (56));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (42)))
{var inst_56075 = (state_56232[(9)]);var inst_56160 = cljs.core._EQ_.call(null,"print",inst_56075);var state_56232__$1 = state_56232;if(inst_56160)
{var statearr_56329_56428 = state_56232__$1;(statearr_56329_56428[(1)] = (44));
} else
{var statearr_56330_56429 = state_56232__$1;(statearr_56330_56429[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (37)))
{var inst_56214 = (state_56232[(2)]);var state_56232__$1 = state_56232;var statearr_56334_56430 = state_56232__$1;(statearr_56334_56430[(2)] = inst_56214);
(statearr_56334_56430[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (8)))
{var inst_56028 = (state_56232[(7)]);var state_56232__$1 = state_56232;var statearr_56335_56431 = state_56232__$1;(statearr_56335_56431[(2)] = inst_56028);
(statearr_56335_56431[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56233 === (49)))
{var inst_56172 = (state_56232[(12)]);var inst_56169 = (state_56232[(13)]);var inst_56171 = (state_56232[(14)]);var inst_56170 = (state_56232[(15)]);var inst_56177 = cljs.core._nth.call(null,inst_56170,inst_56172);var inst_56178 = cljs.core.pr_str.call(null,inst_56177);var inst_56179 = console.log(inst_56178);var inst_56180 = (inst_56172 + (1));var tmp56331 = inst_56169;var tmp56332 = inst_56171;var tmp56333 = inst_56170;var inst_56169__$1 = tmp56331;var inst_56170__$1 = tmp56333;var inst_56171__$1 = tmp56332;var inst_56172__$1 = inst_56180;var state_56232__$1 = (function (){var statearr_56336 = state_56232;(statearr_56336[(12)] = inst_56172__$1);
(statearr_56336[(13)] = inst_56169__$1);
(statearr_56336[(14)] = inst_56171__$1);
(statearr_56336[(31)] = inst_56179);
(statearr_56336[(15)] = inst_56170__$1);
return statearr_56336;
})();var statearr_56337_56432 = state_56232__$1;(statearr_56337_56432[(2)] = null);
(statearr_56337_56432[(1)] = (47));
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
});})(c__6202__auto___56354,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___56354,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_56341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56341[(0)] = state_machine__6188__auto__);
(statearr_56341[(1)] = (1));
return statearr_56341;
});
var state_machine__6188__auto____1 = (function (state_56232){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56232);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56342){if((e56342 instanceof Object))
{var ex__6191__auto__ = e56342;var statearr_56343_56433 = state_56232;(statearr_56343_56433[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56434 = state_56232;
state_56232 = G__56434;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56232){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___56354,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_56344 = f__6203__auto__.call(null);(statearr_56344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___56354);
return statearr_56344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___56354,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
