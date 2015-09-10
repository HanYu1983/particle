// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock3');
goog.require('cljs.core');
test.stock3.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__14923_SHARP_){return cljs.core.nth.call(null,p1__14923_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__14924_SHARP_){return cljs.core.nth.call(null,p1__14924_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock3.draw_bias = (function draw_bias(ctx,w,h,info,color,bias){var vec__14932 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14932,(0),null);var min_v = cljs.core.nth.call(null,vec__14932,(1),null);var offset_v = cljs.core.nth.call(null,vec__14932,(2),null);var offset_x = cljs.core.nth.call(null,vec__14932,(3),null);var pos_y = cljs.core.nth.call(null,vec__14932,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__14933 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14932,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14939__delegate = function (args){return args;
};
var G__14939 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14939__delegate.call(this,args);};
G__14939.cljs$lang$maxFixedArity = 0;
G__14939.cljs$lang$applyTo = (function (arglist__14940){
var args = cljs.core.seq(arglist__14940);
return G__14939__delegate(args);
});
G__14939.cljs$core$IFn$_invoke$arity$variadic = G__14939__delegate;
return G__14939;
})()
;})(vec__14932,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,bias))),bias,cljs.core.drop.call(null,(1),bias)));var chunk__14934 = null;var count__14935 = (0);var i__14936 = (0);while(true){
if((i__14936 < count__14935))
{var vec__14937 = cljs.core._nth.call(null,chunk__14934,i__14936);var idx = cljs.core.nth.call(null,vec__14937,(0),null);var prev = cljs.core.nth.call(null,vec__14937,(1),null);var curr = cljs.core.nth.call(null,vec__14937,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__14941 = seq__14933;
var G__14942 = chunk__14934;
var G__14943 = count__14935;
var G__14944 = (i__14936 + (1));
seq__14933 = G__14941;
chunk__14934 = G__14942;
count__14935 = G__14943;
i__14936 = G__14944;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14933);if(temp__4126__auto__)
{var seq__14933__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14933__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14933__$1);{
var G__14945 = cljs.core.chunk_rest.call(null,seq__14933__$1);
var G__14946 = c__4307__auto__;
var G__14947 = cljs.core.count.call(null,c__4307__auto__);
var G__14948 = (0);
seq__14933 = G__14945;
chunk__14934 = G__14946;
count__14935 = G__14947;
i__14936 = G__14948;
continue;
}
} else
{var vec__14938 = cljs.core.first.call(null,seq__14933__$1);var idx = cljs.core.nth.call(null,vec__14938,(0),null);var prev = cljs.core.nth.call(null,vec__14938,(1),null);var curr = cljs.core.nth.call(null,vec__14938,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__14949 = cljs.core.next.call(null,seq__14933__$1);
var G__14950 = null;
var G__14951 = (0);
var G__14952 = (0);
seq__14933 = G__14949;
chunk__14934 = G__14950;
count__14935 = G__14951;
i__14936 = G__14952;
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
test.stock3.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__14960 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14960,(0),null);var min_v = cljs.core.nth.call(null,vec__14960,(1),null);var offset_v = cljs.core.nth.call(null,vec__14960,(2),null);var offset_x = cljs.core.nth.call(null,vec__14960,(3),null);var pos_y = cljs.core.nth.call(null,vec__14960,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__14961 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14960,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14967__delegate = function (args){return args;
};
var G__14967 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14967__delegate.call(this,args);};
G__14967.cljs$lang$maxFixedArity = 0;
G__14967.cljs$lang$applyTo = (function (arglist__14968){
var args = cljs.core.seq(arglist__14968);
return G__14967__delegate(args);
});
G__14967.cljs$core$IFn$_invoke$arity$variadic = G__14967__delegate;
return G__14967;
})()
;})(vec__14960,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__14962 = null;var count__14963 = (0);var i__14964 = (0);while(true){
if((i__14964 < count__14963))
{var vec__14965 = cljs.core._nth.call(null,chunk__14962,i__14964);var idx = cljs.core.nth.call(null,vec__14965,(0),null);var prev = cljs.core.nth.call(null,vec__14965,(1),null);var curr = cljs.core.nth.call(null,vec__14965,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14969 = seq__14961;
var G__14970 = chunk__14962;
var G__14971 = count__14963;
var G__14972 = (i__14964 + (1));
seq__14961 = G__14969;
chunk__14962 = G__14970;
count__14963 = G__14971;
i__14964 = G__14972;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14961);if(temp__4126__auto__)
{var seq__14961__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14961__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14961__$1);{
var G__14973 = cljs.core.chunk_rest.call(null,seq__14961__$1);
var G__14974 = c__4307__auto__;
var G__14975 = cljs.core.count.call(null,c__4307__auto__);
var G__14976 = (0);
seq__14961 = G__14973;
chunk__14962 = G__14974;
count__14963 = G__14975;
i__14964 = G__14976;
continue;
}
} else
{var vec__14966 = cljs.core.first.call(null,seq__14961__$1);var idx = cljs.core.nth.call(null,vec__14966,(0),null);var prev = cljs.core.nth.call(null,vec__14966,(1),null);var curr = cljs.core.nth.call(null,vec__14966,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14977 = cljs.core.next.call(null,seq__14961__$1);
var G__14978 = null;
var G__14979 = (0);
var G__14980 = (0);
seq__14961 = G__14977;
chunk__14962 = G__14978;
count__14963 = G__14979;
i__14964 = G__14980;
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
test.stock3.draw_line = (function draw_line(ctx,w,h,kline){var vec__14990 = test.stock3.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__14990,(0),null);var min_v = cljs.core.nth.call(null,vec__14990,(1),null);var offset_v = cljs.core.nth.call(null,vec__14990,(2),null);var offset_x = cljs.core.nth.call(null,vec__14990,(3),null);var pos_y = cljs.core.nth.call(null,vec__14990,(4),null);var seq__14991 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14990,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14999__delegate = function (args){return args;
};
var G__14999 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14999__delegate.call(this,args);};
G__14999.cljs$lang$maxFixedArity = 0;
G__14999.cljs$lang$applyTo = (function (arglist__15000){
var args = cljs.core.seq(arglist__15000);
return G__14999__delegate(args);
});
G__14999.cljs$core$IFn$_invoke$arity$variadic = G__14999__delegate;
return G__14999;
})()
;})(vec__14990,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__14992 = null;var count__14993 = (0);var i__14994 = (0);while(true){
if((i__14994 < count__14993))
{var vec__14995 = cljs.core._nth.call(null,chunk__14992,i__14994);var idx = cljs.core.nth.call(null,vec__14995,(0),null);var vec__14996 = cljs.core.nth.call(null,vec__14995,(1),null);var start = cljs.core.nth.call(null,vec__14996,(0),null);var top = cljs.core.nth.call(null,vec__14996,(1),null);var bottom = cljs.core.nth.call(null,vec__14996,(2),null);var end = cljs.core.nth.call(null,vec__14996,(3),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,bottom));
ctx.lineTo((idx * offset_x),pos_y.call(null,top));
ctx.stroke();
(ctx["strokeStyle"] = (((end > start))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,start));
ctx.lineTo((idx * offset_x),pos_y.call(null,end));
ctx.stroke();
{
var G__15001 = seq__14991;
var G__15002 = chunk__14992;
var G__15003 = count__14993;
var G__15004 = (i__14994 + (1));
seq__14991 = G__15001;
chunk__14992 = G__15002;
count__14993 = G__15003;
i__14994 = G__15004;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14991);if(temp__4126__auto__)
{var seq__14991__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14991__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14991__$1);{
var G__15005 = cljs.core.chunk_rest.call(null,seq__14991__$1);
var G__15006 = c__4307__auto__;
var G__15007 = cljs.core.count.call(null,c__4307__auto__);
var G__15008 = (0);
seq__14991 = G__15005;
chunk__14992 = G__15006;
count__14993 = G__15007;
i__14994 = G__15008;
continue;
}
} else
{var vec__14997 = cljs.core.first.call(null,seq__14991__$1);var idx = cljs.core.nth.call(null,vec__14997,(0),null);var vec__14998 = cljs.core.nth.call(null,vec__14997,(1),null);var start = cljs.core.nth.call(null,vec__14998,(0),null);var top = cljs.core.nth.call(null,vec__14998,(1),null);var bottom = cljs.core.nth.call(null,vec__14998,(2),null);var end = cljs.core.nth.call(null,vec__14998,(3),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,bottom));
ctx.lineTo((idx * offset_x),pos_y.call(null,top));
ctx.stroke();
(ctx["strokeStyle"] = (((end > start))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,start));
ctx.lineTo((idx * offset_x),pos_y.call(null,end));
ctx.stroke();
{
var G__15009 = cljs.core.next.call(null,seq__14991__$1);
var G__15010 = null;
var G__15011 = (0);
var G__15012 = (0);
seq__14991 = G__15009;
chunk__14992 = G__15010;
count__14993 = G__15011;
i__14994 = G__15012;
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
test.stock3.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__15028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__15028,(0),null);var h = cljs.core.nth.call(null,vec__15028,(1),null);return ((function (ctx,vec__15028,w,h){
return (function (p__15029){var map__15030 = p__15029;var map__15030__$1 = ((cljs.core.seq_QMARK_.call(null,map__15030))?cljs.core.apply.call(null,cljs.core.hash_map,map__15030):map__15030);var kline = cljs.core.get.call(null,map__15030__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var avgs = cljs.core.get.call(null,map__15030__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__15030__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__15031_15043 = cljs.core.seq.call(null,bias);var chunk__15032_15044 = null;var count__15033_15045 = (0);var i__15034_15046 = (0);while(true){
if((i__15034_15046 < count__15033_15045))
{var vec__15035_15047 = cljs.core._nth.call(null,chunk__15032_15044,i__15034_15046);var bia_cnt_15048 = cljs.core.nth.call(null,vec__15035_15047,(0),null);var bia_15049 = cljs.core.nth.call(null,vec__15035_15047,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_15049);
{
var G__15050 = seq__15031_15043;
var G__15051 = chunk__15032_15044;
var G__15052 = count__15033_15045;
var G__15053 = (i__15034_15046 + (1));
seq__15031_15043 = G__15050;
chunk__15032_15044 = G__15051;
count__15033_15045 = G__15052;
i__15034_15046 = G__15053;
continue;
}
} else
{var temp__4126__auto___15054 = cljs.core.seq.call(null,seq__15031_15043);if(temp__4126__auto___15054)
{var seq__15031_15055__$1 = temp__4126__auto___15054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15031_15055__$1))
{var c__4307__auto___15056 = cljs.core.chunk_first.call(null,seq__15031_15055__$1);{
var G__15057 = cljs.core.chunk_rest.call(null,seq__15031_15055__$1);
var G__15058 = c__4307__auto___15056;
var G__15059 = cljs.core.count.call(null,c__4307__auto___15056);
var G__15060 = (0);
seq__15031_15043 = G__15057;
chunk__15032_15044 = G__15058;
count__15033_15045 = G__15059;
i__15034_15046 = G__15060;
continue;
}
} else
{var vec__15036_15061 = cljs.core.first.call(null,seq__15031_15055__$1);var bia_cnt_15062 = cljs.core.nth.call(null,vec__15036_15061,(0),null);var bia_15063 = cljs.core.nth.call(null,vec__15036_15061,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_15063);
{
var G__15064 = cljs.core.next.call(null,seq__15031_15055__$1);
var G__15065 = null;
var G__15066 = (0);
var G__15067 = (0);
seq__15031_15043 = G__15064;
chunk__15032_15044 = G__15065;
count__15033_15045 = G__15066;
i__15034_15046 = G__15067;
continue;
}
}
} else
{}
}
break;
}
var seq__15037_15068 = cljs.core.seq.call(null,avgs);var chunk__15038_15069 = null;var count__15039_15070 = (0);var i__15040_15071 = (0);while(true){
if((i__15040_15071 < count__15039_15070))
{var vec__15041_15072 = cljs.core._nth.call(null,chunk__15038_15069,i__15040_15071);var avg_cnt_15073 = cljs.core.nth.call(null,vec__15041_15072,(0),null);var avg_15074 = cljs.core.nth.call(null,vec__15041_15072,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_15074);
{
var G__15075 = seq__15037_15068;
var G__15076 = chunk__15038_15069;
var G__15077 = count__15039_15070;
var G__15078 = (i__15040_15071 + (1));
seq__15037_15068 = G__15075;
chunk__15038_15069 = G__15076;
count__15039_15070 = G__15077;
i__15040_15071 = G__15078;
continue;
}
} else
{var temp__4126__auto___15079 = cljs.core.seq.call(null,seq__15037_15068);if(temp__4126__auto___15079)
{var seq__15037_15080__$1 = temp__4126__auto___15079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15037_15080__$1))
{var c__4307__auto___15081 = cljs.core.chunk_first.call(null,seq__15037_15080__$1);{
var G__15082 = cljs.core.chunk_rest.call(null,seq__15037_15080__$1);
var G__15083 = c__4307__auto___15081;
var G__15084 = cljs.core.count.call(null,c__4307__auto___15081);
var G__15085 = (0);
seq__15037_15068 = G__15082;
chunk__15038_15069 = G__15083;
count__15039_15070 = G__15084;
i__15040_15071 = G__15085;
continue;
}
} else
{var vec__15042_15086 = cljs.core.first.call(null,seq__15037_15080__$1);var avg_cnt_15087 = cljs.core.nth.call(null,vec__15042_15086,(0),null);var avg_15088 = cljs.core.nth.call(null,vec__15042_15086,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_15088);
{
var G__15089 = cljs.core.next.call(null,seq__15037_15080__$1);
var G__15090 = null;
var G__15091 = (0);
var G__15092 = (0);
seq__15037_15068 = G__15089;
chunk__15038_15069 = G__15090;
count__15039_15070 = G__15091;
i__15040_15071 = G__15092;
continue;
}
}
} else
{}
}
break;
}
return test.stock3.draw_line.call(null,ctx,w,h,kline);
});
;})(ctx,vec__15028,w,h))
});
test.stock3.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__15095,r){var vec__15096 = p__15095;var la = cljs.core.nth.call(null,vec__15096,(0),null);var _ = cljs.core.nthnext.call(null,vec__15096,(1));var all = vec__15096;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock3.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock3.average = (function average(cnt,kline){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__15097_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__15097_SHARP_) / cljs.core.count.call(null,p1__15097_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__15103){var vec__15104 = p__15103;var s = cljs.core.nth.call(null,vec__15104,(0),null);var t = cljs.core.nth.call(null,vec__15104,(1),null);var b = cljs.core.nth.call(null,vec__15104,(2),null);var e = cljs.core.nth.call(null,vec__15104,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15098_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__15098_SHARP_) / cljs.core.count.call(null,p1__15098_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__15105){var vec__15106 = p__15105;var s = cljs.core.nth.call(null,vec__15106,(0),null);var t = cljs.core.nth.call(null,vec__15106,(1),null);var b = cljs.core.nth.call(null,vec__15106,(2),null);var e = cljs.core.nth.call(null,vec__15106,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock3.bias = (function bias(cnt,kline){var avg = test.stock3.average.call(null,cnt,kline);var vs = cljs.core.map.call(null,((function (avg){
return (function (avg_v,p__15109){var vec__15110 = p__15109;var _ = cljs.core.nth.call(null,vec__15110,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15110,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15110,(2),null);var e = cljs.core.nth.call(null,vec__15110,(3),null);var line = vec__15110;if(cljs.core._EQ_.call(null,(-1),avg_v))
{return (-1);
} else
{return ((e - avg_v) / avg_v);
}
});})(avg))
,avg,kline);return vs;
});
test.stock3.main = (function main(){test.stock3.draw = test.stock3.draw.call(null,document.getElementById("canvas"));
var prices = test.stock3.rand_price.call(null,((5) * (200)),(100),0.07);var kline = test.stock3.convert_kline.call(null,prices,(5));var infos = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kline","kline",-1160432594),kline,new cljs.core.Keyword(null,"bias","bias",-315297926),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prices,kline){
return (function (cnt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnt,test.stock3.bias.call(null,cnt,kline)], null);
});})(prices,kline))
,cljs.core.list((10)))),new cljs.core.Keyword(null,"avgs","avgs",1923101117),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prices,kline){
return (function (cnt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnt,test.stock3.average.call(null,cnt,kline)], null);
});})(prices,kline))
,cljs.core.list((5),(10),(20),(50))))], null);test.stock3.draw.call(null,infos);
return null;
});
test.stock3.main.call(null);
