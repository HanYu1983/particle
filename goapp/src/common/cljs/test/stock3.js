// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock3');
goog.require('cljs.core');
test.stock3.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__24008_SHARP_){return cljs.core.nth.call(null,p1__24008_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__24009_SHARP_){return cljs.core.nth.call(null,p1__24009_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock3.draw_bias = (function draw_bias(ctx,w,h,info,color,bias){var vec__24017 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__24017,(0),null);var min_v = cljs.core.nth.call(null,vec__24017,(1),null);var offset_v = cljs.core.nth.call(null,vec__24017,(2),null);var offset_x = cljs.core.nth.call(null,vec__24017,(3),null);var pos_y = cljs.core.nth.call(null,vec__24017,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__24018 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24017,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24024__delegate = function (args){return args;
};
var G__24024 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24024__delegate.call(this,args);};
G__24024.cljs$lang$maxFixedArity = 0;
G__24024.cljs$lang$applyTo = (function (arglist__24025){
var args = cljs.core.seq(arglist__24025);
return G__24024__delegate(args);
});
G__24024.cljs$core$IFn$_invoke$arity$variadic = G__24024__delegate;
return G__24024;
})()
;})(vec__24017,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,bias))),bias,cljs.core.drop.call(null,(1),bias)));var chunk__24019 = null;var count__24020 = (0);var i__24021 = (0);while(true){
if((i__24021 < count__24020))
{var vec__24022 = cljs.core._nth.call(null,chunk__24019,i__24021);var idx = cljs.core.nth.call(null,vec__24022,(0),null);var prev = cljs.core.nth.call(null,vec__24022,(1),null);var curr = cljs.core.nth.call(null,vec__24022,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__24026 = seq__24018;
var G__24027 = chunk__24019;
var G__24028 = count__24020;
var G__24029 = (i__24021 + (1));
seq__24018 = G__24026;
chunk__24019 = G__24027;
count__24020 = G__24028;
i__24021 = G__24029;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24018);if(temp__4126__auto__)
{var seq__24018__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24018__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24018__$1);{
var G__24030 = cljs.core.chunk_rest.call(null,seq__24018__$1);
var G__24031 = c__4307__auto__;
var G__24032 = cljs.core.count.call(null,c__4307__auto__);
var G__24033 = (0);
seq__24018 = G__24030;
chunk__24019 = G__24031;
count__24020 = G__24032;
i__24021 = G__24033;
continue;
}
} else
{var vec__24023 = cljs.core.first.call(null,seq__24018__$1);var idx = cljs.core.nth.call(null,vec__24023,(0),null);var prev = cljs.core.nth.call(null,vec__24023,(1),null);var curr = cljs.core.nth.call(null,vec__24023,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__24034 = cljs.core.next.call(null,seq__24018__$1);
var G__24035 = null;
var G__24036 = (0);
var G__24037 = (0);
seq__24018 = G__24034;
chunk__24019 = G__24035;
count__24020 = G__24036;
i__24021 = G__24037;
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
test.stock3.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__24045 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__24045,(0),null);var min_v = cljs.core.nth.call(null,vec__24045,(1),null);var offset_v = cljs.core.nth.call(null,vec__24045,(2),null);var offset_x = cljs.core.nth.call(null,vec__24045,(3),null);var pos_y = cljs.core.nth.call(null,vec__24045,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__24046 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24045,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24052__delegate = function (args){return args;
};
var G__24052 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24052__delegate.call(this,args);};
G__24052.cljs$lang$maxFixedArity = 0;
G__24052.cljs$lang$applyTo = (function (arglist__24053){
var args = cljs.core.seq(arglist__24053);
return G__24052__delegate(args);
});
G__24052.cljs$core$IFn$_invoke$arity$variadic = G__24052__delegate;
return G__24052;
})()
;})(vec__24045,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__24047 = null;var count__24048 = (0);var i__24049 = (0);while(true){
if((i__24049 < count__24048))
{var vec__24050 = cljs.core._nth.call(null,chunk__24047,i__24049);var idx = cljs.core.nth.call(null,vec__24050,(0),null);var prev = cljs.core.nth.call(null,vec__24050,(1),null);var curr = cljs.core.nth.call(null,vec__24050,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__24054 = seq__24046;
var G__24055 = chunk__24047;
var G__24056 = count__24048;
var G__24057 = (i__24049 + (1));
seq__24046 = G__24054;
chunk__24047 = G__24055;
count__24048 = G__24056;
i__24049 = G__24057;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24046);if(temp__4126__auto__)
{var seq__24046__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24046__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24046__$1);{
var G__24058 = cljs.core.chunk_rest.call(null,seq__24046__$1);
var G__24059 = c__4307__auto__;
var G__24060 = cljs.core.count.call(null,c__4307__auto__);
var G__24061 = (0);
seq__24046 = G__24058;
chunk__24047 = G__24059;
count__24048 = G__24060;
i__24049 = G__24061;
continue;
}
} else
{var vec__24051 = cljs.core.first.call(null,seq__24046__$1);var idx = cljs.core.nth.call(null,vec__24051,(0),null);var prev = cljs.core.nth.call(null,vec__24051,(1),null);var curr = cljs.core.nth.call(null,vec__24051,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__24062 = cljs.core.next.call(null,seq__24046__$1);
var G__24063 = null;
var G__24064 = (0);
var G__24065 = (0);
seq__24046 = G__24062;
chunk__24047 = G__24063;
count__24048 = G__24064;
i__24049 = G__24065;
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
test.stock3.draw_line = (function draw_line(ctx,w,h,kline){var vec__24075 = test.stock3.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__24075,(0),null);var min_v = cljs.core.nth.call(null,vec__24075,(1),null);var offset_v = cljs.core.nth.call(null,vec__24075,(2),null);var offset_x = cljs.core.nth.call(null,vec__24075,(3),null);var pos_y = cljs.core.nth.call(null,vec__24075,(4),null);var seq__24076 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24075,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24084__delegate = function (args){return args;
};
var G__24084 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24084__delegate.call(this,args);};
G__24084.cljs$lang$maxFixedArity = 0;
G__24084.cljs$lang$applyTo = (function (arglist__24085){
var args = cljs.core.seq(arglist__24085);
return G__24084__delegate(args);
});
G__24084.cljs$core$IFn$_invoke$arity$variadic = G__24084__delegate;
return G__24084;
})()
;})(vec__24075,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__24077 = null;var count__24078 = (0);var i__24079 = (0);while(true){
if((i__24079 < count__24078))
{var vec__24080 = cljs.core._nth.call(null,chunk__24077,i__24079);var idx = cljs.core.nth.call(null,vec__24080,(0),null);var vec__24081 = cljs.core.nth.call(null,vec__24080,(1),null);var start = cljs.core.nth.call(null,vec__24081,(0),null);var top = cljs.core.nth.call(null,vec__24081,(1),null);var bottom = cljs.core.nth.call(null,vec__24081,(2),null);var end = cljs.core.nth.call(null,vec__24081,(3),null);(ctx["strokeStyle"] = "black");
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
var G__24086 = seq__24076;
var G__24087 = chunk__24077;
var G__24088 = count__24078;
var G__24089 = (i__24079 + (1));
seq__24076 = G__24086;
chunk__24077 = G__24087;
count__24078 = G__24088;
i__24079 = G__24089;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24076);if(temp__4126__auto__)
{var seq__24076__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24076__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24076__$1);{
var G__24090 = cljs.core.chunk_rest.call(null,seq__24076__$1);
var G__24091 = c__4307__auto__;
var G__24092 = cljs.core.count.call(null,c__4307__auto__);
var G__24093 = (0);
seq__24076 = G__24090;
chunk__24077 = G__24091;
count__24078 = G__24092;
i__24079 = G__24093;
continue;
}
} else
{var vec__24082 = cljs.core.first.call(null,seq__24076__$1);var idx = cljs.core.nth.call(null,vec__24082,(0),null);var vec__24083 = cljs.core.nth.call(null,vec__24082,(1),null);var start = cljs.core.nth.call(null,vec__24083,(0),null);var top = cljs.core.nth.call(null,vec__24083,(1),null);var bottom = cljs.core.nth.call(null,vec__24083,(2),null);var end = cljs.core.nth.call(null,vec__24083,(3),null);(ctx["strokeStyle"] = "black");
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
var G__24094 = cljs.core.next.call(null,seq__24076__$1);
var G__24095 = null;
var G__24096 = (0);
var G__24097 = (0);
seq__24076 = G__24094;
chunk__24077 = G__24095;
count__24078 = G__24096;
i__24079 = G__24097;
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
test.stock3.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__24113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__24113,(0),null);var h = cljs.core.nth.call(null,vec__24113,(1),null);return ((function (ctx,vec__24113,w,h){
return (function (p__24114){var map__24115 = p__24114;var map__24115__$1 = ((cljs.core.seq_QMARK_.call(null,map__24115))?cljs.core.apply.call(null,cljs.core.hash_map,map__24115):map__24115);var kline = cljs.core.get.call(null,map__24115__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var avgs = cljs.core.get.call(null,map__24115__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__24115__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__24116_24128 = cljs.core.seq.call(null,bias);var chunk__24117_24129 = null;var count__24118_24130 = (0);var i__24119_24131 = (0);while(true){
if((i__24119_24131 < count__24118_24130))
{var vec__24120_24132 = cljs.core._nth.call(null,chunk__24117_24129,i__24119_24131);var bia_cnt_24133 = cljs.core.nth.call(null,vec__24120_24132,(0),null);var bia_24134 = cljs.core.nth.call(null,vec__24120_24132,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_24134);
{
var G__24135 = seq__24116_24128;
var G__24136 = chunk__24117_24129;
var G__24137 = count__24118_24130;
var G__24138 = (i__24119_24131 + (1));
seq__24116_24128 = G__24135;
chunk__24117_24129 = G__24136;
count__24118_24130 = G__24137;
i__24119_24131 = G__24138;
continue;
}
} else
{var temp__4126__auto___24139 = cljs.core.seq.call(null,seq__24116_24128);if(temp__4126__auto___24139)
{var seq__24116_24140__$1 = temp__4126__auto___24139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24116_24140__$1))
{var c__4307__auto___24141 = cljs.core.chunk_first.call(null,seq__24116_24140__$1);{
var G__24142 = cljs.core.chunk_rest.call(null,seq__24116_24140__$1);
var G__24143 = c__4307__auto___24141;
var G__24144 = cljs.core.count.call(null,c__4307__auto___24141);
var G__24145 = (0);
seq__24116_24128 = G__24142;
chunk__24117_24129 = G__24143;
count__24118_24130 = G__24144;
i__24119_24131 = G__24145;
continue;
}
} else
{var vec__24121_24146 = cljs.core.first.call(null,seq__24116_24140__$1);var bia_cnt_24147 = cljs.core.nth.call(null,vec__24121_24146,(0),null);var bia_24148 = cljs.core.nth.call(null,vec__24121_24146,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_24148);
{
var G__24149 = cljs.core.next.call(null,seq__24116_24140__$1);
var G__24150 = null;
var G__24151 = (0);
var G__24152 = (0);
seq__24116_24128 = G__24149;
chunk__24117_24129 = G__24150;
count__24118_24130 = G__24151;
i__24119_24131 = G__24152;
continue;
}
}
} else
{}
}
break;
}
var seq__24122_24153 = cljs.core.seq.call(null,avgs);var chunk__24123_24154 = null;var count__24124_24155 = (0);var i__24125_24156 = (0);while(true){
if((i__24125_24156 < count__24124_24155))
{var vec__24126_24157 = cljs.core._nth.call(null,chunk__24123_24154,i__24125_24156);var avg_cnt_24158 = cljs.core.nth.call(null,vec__24126_24157,(0),null);var avg_24159 = cljs.core.nth.call(null,vec__24126_24157,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_24159);
{
var G__24160 = seq__24122_24153;
var G__24161 = chunk__24123_24154;
var G__24162 = count__24124_24155;
var G__24163 = (i__24125_24156 + (1));
seq__24122_24153 = G__24160;
chunk__24123_24154 = G__24161;
count__24124_24155 = G__24162;
i__24125_24156 = G__24163;
continue;
}
} else
{var temp__4126__auto___24164 = cljs.core.seq.call(null,seq__24122_24153);if(temp__4126__auto___24164)
{var seq__24122_24165__$1 = temp__4126__auto___24164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24122_24165__$1))
{var c__4307__auto___24166 = cljs.core.chunk_first.call(null,seq__24122_24165__$1);{
var G__24167 = cljs.core.chunk_rest.call(null,seq__24122_24165__$1);
var G__24168 = c__4307__auto___24166;
var G__24169 = cljs.core.count.call(null,c__4307__auto___24166);
var G__24170 = (0);
seq__24122_24153 = G__24167;
chunk__24123_24154 = G__24168;
count__24124_24155 = G__24169;
i__24125_24156 = G__24170;
continue;
}
} else
{var vec__24127_24171 = cljs.core.first.call(null,seq__24122_24165__$1);var avg_cnt_24172 = cljs.core.nth.call(null,vec__24127_24171,(0),null);var avg_24173 = cljs.core.nth.call(null,vec__24127_24171,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_24173);
{
var G__24174 = cljs.core.next.call(null,seq__24122_24165__$1);
var G__24175 = null;
var G__24176 = (0);
var G__24177 = (0);
seq__24122_24153 = G__24174;
chunk__24123_24154 = G__24175;
count__24124_24155 = G__24176;
i__24125_24156 = G__24177;
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
;})(ctx,vec__24113,w,h))
});
test.stock3.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__24180,r){var vec__24181 = p__24180;var la = cljs.core.nth.call(null,vec__24181,(0),null);var _ = cljs.core.nthnext.call(null,vec__24181,(1));var all = vec__24181;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock3.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock3.average = (function average(cnt,kline){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__24182_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__24182_SHARP_) / cljs.core.count.call(null,p1__24182_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__24188){var vec__24189 = p__24188;var s = cljs.core.nth.call(null,vec__24189,(0),null);var t = cljs.core.nth.call(null,vec__24189,(1),null);var b = cljs.core.nth.call(null,vec__24189,(2),null);var e = cljs.core.nth.call(null,vec__24189,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__24183_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__24183_SHARP_) / cljs.core.count.call(null,p1__24183_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__24190){var vec__24191 = p__24190;var s = cljs.core.nth.call(null,vec__24191,(0),null);var t = cljs.core.nth.call(null,vec__24191,(1),null);var b = cljs.core.nth.call(null,vec__24191,(2),null);var e = cljs.core.nth.call(null,vec__24191,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock3.bias = (function bias(cnt,kline){var avg = test.stock3.average.call(null,cnt,kline);var vs = cljs.core.map.call(null,((function (avg){
return (function (avg_v,p__24194){var vec__24195 = p__24194;var _ = cljs.core.nth.call(null,vec__24195,(0),null);var ___$1 = cljs.core.nth.call(null,vec__24195,(1),null);var ___$2 = cljs.core.nth.call(null,vec__24195,(2),null);var e = cljs.core.nth.call(null,vec__24195,(3),null);var line = vec__24195;if(cljs.core._EQ_.call(null,(-1),avg_v))
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
