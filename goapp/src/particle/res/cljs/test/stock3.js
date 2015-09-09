// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock3');
goog.require('cljs.core');
test.stock3.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__18017_SHARP_){return cljs.core.nth.call(null,p1__18017_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__18018_SHARP_){return cljs.core.nth.call(null,p1__18018_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock3.draw_bias = (function draw_bias(ctx,w,h,info,color,bias){var vec__18026 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__18026,(0),null);var min_v = cljs.core.nth.call(null,vec__18026,(1),null);var offset_v = cljs.core.nth.call(null,vec__18026,(2),null);var offset_x = cljs.core.nth.call(null,vec__18026,(3),null);var pos_y = cljs.core.nth.call(null,vec__18026,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__18027 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__18026,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__18033__delegate = function (args){return args;
};
var G__18033 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18033__delegate.call(this,args);};
G__18033.cljs$lang$maxFixedArity = 0;
G__18033.cljs$lang$applyTo = (function (arglist__18034){
var args = cljs.core.seq(arglist__18034);
return G__18033__delegate(args);
});
G__18033.cljs$core$IFn$_invoke$arity$variadic = G__18033__delegate;
return G__18033;
})()
;})(vec__18026,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,bias))),bias,cljs.core.drop.call(null,(1),bias)));var chunk__18028 = null;var count__18029 = (0);var i__18030 = (0);while(true){
if((i__18030 < count__18029))
{var vec__18031 = cljs.core._nth.call(null,chunk__18028,i__18030);var idx = cljs.core.nth.call(null,vec__18031,(0),null);var prev = cljs.core.nth.call(null,vec__18031,(1),null);var curr = cljs.core.nth.call(null,vec__18031,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__18035 = seq__18027;
var G__18036 = chunk__18028;
var G__18037 = count__18029;
var G__18038 = (i__18030 + (1));
seq__18027 = G__18035;
chunk__18028 = G__18036;
count__18029 = G__18037;
i__18030 = G__18038;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18027);if(temp__4126__auto__)
{var seq__18027__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18027__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__18027__$1);{
var G__18039 = cljs.core.chunk_rest.call(null,seq__18027__$1);
var G__18040 = c__4307__auto__;
var G__18041 = cljs.core.count.call(null,c__4307__auto__);
var G__18042 = (0);
seq__18027 = G__18039;
chunk__18028 = G__18040;
count__18029 = G__18041;
i__18030 = G__18042;
continue;
}
} else
{var vec__18032 = cljs.core.first.call(null,seq__18027__$1);var idx = cljs.core.nth.call(null,vec__18032,(0),null);var prev = cljs.core.nth.call(null,vec__18032,(1),null);var curr = cljs.core.nth.call(null,vec__18032,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__18043 = cljs.core.next.call(null,seq__18027__$1);
var G__18044 = null;
var G__18045 = (0);
var G__18046 = (0);
seq__18027 = G__18043;
chunk__18028 = G__18044;
count__18029 = G__18045;
i__18030 = G__18046;
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
test.stock3.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__18054 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__18054,(0),null);var min_v = cljs.core.nth.call(null,vec__18054,(1),null);var offset_v = cljs.core.nth.call(null,vec__18054,(2),null);var offset_x = cljs.core.nth.call(null,vec__18054,(3),null);var pos_y = cljs.core.nth.call(null,vec__18054,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__18055 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__18054,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__18061__delegate = function (args){return args;
};
var G__18061 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18061__delegate.call(this,args);};
G__18061.cljs$lang$maxFixedArity = 0;
G__18061.cljs$lang$applyTo = (function (arglist__18062){
var args = cljs.core.seq(arglist__18062);
return G__18061__delegate(args);
});
G__18061.cljs$core$IFn$_invoke$arity$variadic = G__18061__delegate;
return G__18061;
})()
;})(vec__18054,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__18056 = null;var count__18057 = (0);var i__18058 = (0);while(true){
if((i__18058 < count__18057))
{var vec__18059 = cljs.core._nth.call(null,chunk__18056,i__18058);var idx = cljs.core.nth.call(null,vec__18059,(0),null);var prev = cljs.core.nth.call(null,vec__18059,(1),null);var curr = cljs.core.nth.call(null,vec__18059,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__18063 = seq__18055;
var G__18064 = chunk__18056;
var G__18065 = count__18057;
var G__18066 = (i__18058 + (1));
seq__18055 = G__18063;
chunk__18056 = G__18064;
count__18057 = G__18065;
i__18058 = G__18066;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18055);if(temp__4126__auto__)
{var seq__18055__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18055__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__18055__$1);{
var G__18067 = cljs.core.chunk_rest.call(null,seq__18055__$1);
var G__18068 = c__4307__auto__;
var G__18069 = cljs.core.count.call(null,c__4307__auto__);
var G__18070 = (0);
seq__18055 = G__18067;
chunk__18056 = G__18068;
count__18057 = G__18069;
i__18058 = G__18070;
continue;
}
} else
{var vec__18060 = cljs.core.first.call(null,seq__18055__$1);var idx = cljs.core.nth.call(null,vec__18060,(0),null);var prev = cljs.core.nth.call(null,vec__18060,(1),null);var curr = cljs.core.nth.call(null,vec__18060,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__18071 = cljs.core.next.call(null,seq__18055__$1);
var G__18072 = null;
var G__18073 = (0);
var G__18074 = (0);
seq__18055 = G__18071;
chunk__18056 = G__18072;
count__18057 = G__18073;
i__18058 = G__18074;
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
test.stock3.draw_line = (function draw_line(ctx,w,h,kline){var vec__18084 = test.stock3.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__18084,(0),null);var min_v = cljs.core.nth.call(null,vec__18084,(1),null);var offset_v = cljs.core.nth.call(null,vec__18084,(2),null);var offset_x = cljs.core.nth.call(null,vec__18084,(3),null);var pos_y = cljs.core.nth.call(null,vec__18084,(4),null);var seq__18085 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__18084,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__18093__delegate = function (args){return args;
};
var G__18093 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18093__delegate.call(this,args);};
G__18093.cljs$lang$maxFixedArity = 0;
G__18093.cljs$lang$applyTo = (function (arglist__18094){
var args = cljs.core.seq(arglist__18094);
return G__18093__delegate(args);
});
G__18093.cljs$core$IFn$_invoke$arity$variadic = G__18093__delegate;
return G__18093;
})()
;})(vec__18084,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__18086 = null;var count__18087 = (0);var i__18088 = (0);while(true){
if((i__18088 < count__18087))
{var vec__18089 = cljs.core._nth.call(null,chunk__18086,i__18088);var idx = cljs.core.nth.call(null,vec__18089,(0),null);var vec__18090 = cljs.core.nth.call(null,vec__18089,(1),null);var start = cljs.core.nth.call(null,vec__18090,(0),null);var top = cljs.core.nth.call(null,vec__18090,(1),null);var bottom = cljs.core.nth.call(null,vec__18090,(2),null);var end = cljs.core.nth.call(null,vec__18090,(3),null);(ctx["strokeStyle"] = "black");
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
var G__18095 = seq__18085;
var G__18096 = chunk__18086;
var G__18097 = count__18087;
var G__18098 = (i__18088 + (1));
seq__18085 = G__18095;
chunk__18086 = G__18096;
count__18087 = G__18097;
i__18088 = G__18098;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18085);if(temp__4126__auto__)
{var seq__18085__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18085__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__18085__$1);{
var G__18099 = cljs.core.chunk_rest.call(null,seq__18085__$1);
var G__18100 = c__4307__auto__;
var G__18101 = cljs.core.count.call(null,c__4307__auto__);
var G__18102 = (0);
seq__18085 = G__18099;
chunk__18086 = G__18100;
count__18087 = G__18101;
i__18088 = G__18102;
continue;
}
} else
{var vec__18091 = cljs.core.first.call(null,seq__18085__$1);var idx = cljs.core.nth.call(null,vec__18091,(0),null);var vec__18092 = cljs.core.nth.call(null,vec__18091,(1),null);var start = cljs.core.nth.call(null,vec__18092,(0),null);var top = cljs.core.nth.call(null,vec__18092,(1),null);var bottom = cljs.core.nth.call(null,vec__18092,(2),null);var end = cljs.core.nth.call(null,vec__18092,(3),null);(ctx["strokeStyle"] = "black");
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
var G__18103 = cljs.core.next.call(null,seq__18085__$1);
var G__18104 = null;
var G__18105 = (0);
var G__18106 = (0);
seq__18085 = G__18103;
chunk__18086 = G__18104;
count__18087 = G__18105;
i__18088 = G__18106;
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
test.stock3.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__18122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__18122,(0),null);var h = cljs.core.nth.call(null,vec__18122,(1),null);return ((function (ctx,vec__18122,w,h){
return (function (p__18123){var map__18124 = p__18123;var map__18124__$1 = ((cljs.core.seq_QMARK_.call(null,map__18124))?cljs.core.apply.call(null,cljs.core.hash_map,map__18124):map__18124);var kline = cljs.core.get.call(null,map__18124__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var avgs = cljs.core.get.call(null,map__18124__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__18124__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__18125_18137 = cljs.core.seq.call(null,bias);var chunk__18126_18138 = null;var count__18127_18139 = (0);var i__18128_18140 = (0);while(true){
if((i__18128_18140 < count__18127_18139))
{var vec__18129_18141 = cljs.core._nth.call(null,chunk__18126_18138,i__18128_18140);var bia_cnt_18142 = cljs.core.nth.call(null,vec__18129_18141,(0),null);var bia_18143 = cljs.core.nth.call(null,vec__18129_18141,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_18143);
{
var G__18144 = seq__18125_18137;
var G__18145 = chunk__18126_18138;
var G__18146 = count__18127_18139;
var G__18147 = (i__18128_18140 + (1));
seq__18125_18137 = G__18144;
chunk__18126_18138 = G__18145;
count__18127_18139 = G__18146;
i__18128_18140 = G__18147;
continue;
}
} else
{var temp__4126__auto___18148 = cljs.core.seq.call(null,seq__18125_18137);if(temp__4126__auto___18148)
{var seq__18125_18149__$1 = temp__4126__auto___18148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18125_18149__$1))
{var c__4307__auto___18150 = cljs.core.chunk_first.call(null,seq__18125_18149__$1);{
var G__18151 = cljs.core.chunk_rest.call(null,seq__18125_18149__$1);
var G__18152 = c__4307__auto___18150;
var G__18153 = cljs.core.count.call(null,c__4307__auto___18150);
var G__18154 = (0);
seq__18125_18137 = G__18151;
chunk__18126_18138 = G__18152;
count__18127_18139 = G__18153;
i__18128_18140 = G__18154;
continue;
}
} else
{var vec__18130_18155 = cljs.core.first.call(null,seq__18125_18149__$1);var bia_cnt_18156 = cljs.core.nth.call(null,vec__18130_18155,(0),null);var bia_18157 = cljs.core.nth.call(null,vec__18130_18155,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_18157);
{
var G__18158 = cljs.core.next.call(null,seq__18125_18149__$1);
var G__18159 = null;
var G__18160 = (0);
var G__18161 = (0);
seq__18125_18137 = G__18158;
chunk__18126_18138 = G__18159;
count__18127_18139 = G__18160;
i__18128_18140 = G__18161;
continue;
}
}
} else
{}
}
break;
}
var seq__18131_18162 = cljs.core.seq.call(null,avgs);var chunk__18132_18163 = null;var count__18133_18164 = (0);var i__18134_18165 = (0);while(true){
if((i__18134_18165 < count__18133_18164))
{var vec__18135_18166 = cljs.core._nth.call(null,chunk__18132_18163,i__18134_18165);var avg_cnt_18167 = cljs.core.nth.call(null,vec__18135_18166,(0),null);var avg_18168 = cljs.core.nth.call(null,vec__18135_18166,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_18168);
{
var G__18169 = seq__18131_18162;
var G__18170 = chunk__18132_18163;
var G__18171 = count__18133_18164;
var G__18172 = (i__18134_18165 + (1));
seq__18131_18162 = G__18169;
chunk__18132_18163 = G__18170;
count__18133_18164 = G__18171;
i__18134_18165 = G__18172;
continue;
}
} else
{var temp__4126__auto___18173 = cljs.core.seq.call(null,seq__18131_18162);if(temp__4126__auto___18173)
{var seq__18131_18174__$1 = temp__4126__auto___18173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18131_18174__$1))
{var c__4307__auto___18175 = cljs.core.chunk_first.call(null,seq__18131_18174__$1);{
var G__18176 = cljs.core.chunk_rest.call(null,seq__18131_18174__$1);
var G__18177 = c__4307__auto___18175;
var G__18178 = cljs.core.count.call(null,c__4307__auto___18175);
var G__18179 = (0);
seq__18131_18162 = G__18176;
chunk__18132_18163 = G__18177;
count__18133_18164 = G__18178;
i__18134_18165 = G__18179;
continue;
}
} else
{var vec__18136_18180 = cljs.core.first.call(null,seq__18131_18174__$1);var avg_cnt_18181 = cljs.core.nth.call(null,vec__18136_18180,(0),null);var avg_18182 = cljs.core.nth.call(null,vec__18136_18180,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_18182);
{
var G__18183 = cljs.core.next.call(null,seq__18131_18174__$1);
var G__18184 = null;
var G__18185 = (0);
var G__18186 = (0);
seq__18131_18162 = G__18183;
chunk__18132_18163 = G__18184;
count__18133_18164 = G__18185;
i__18134_18165 = G__18186;
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
;})(ctx,vec__18122,w,h))
});
test.stock3.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__18189,r){var vec__18190 = p__18189;var la = cljs.core.nth.call(null,vec__18190,(0),null);var _ = cljs.core.nthnext.call(null,vec__18190,(1));var all = vec__18190;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock3.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock3.average = (function average(cnt,kline){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__18191_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__18191_SHARP_) / cljs.core.count.call(null,p1__18191_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__18197){var vec__18198 = p__18197;var s = cljs.core.nth.call(null,vec__18198,(0),null);var t = cljs.core.nth.call(null,vec__18198,(1),null);var b = cljs.core.nth.call(null,vec__18198,(2),null);var e = cljs.core.nth.call(null,vec__18198,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__18192_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__18192_SHARP_) / cljs.core.count.call(null,p1__18192_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__18199){var vec__18200 = p__18199;var s = cljs.core.nth.call(null,vec__18200,(0),null);var t = cljs.core.nth.call(null,vec__18200,(1),null);var b = cljs.core.nth.call(null,vec__18200,(2),null);var e = cljs.core.nth.call(null,vec__18200,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock3.bias = (function bias(cnt,kline){var avg = test.stock3.average.call(null,cnt,kline);var vs = cljs.core.map.call(null,((function (avg){
return (function (avg_v,p__18203){var vec__18204 = p__18203;var _ = cljs.core.nth.call(null,vec__18204,(0),null);var ___$1 = cljs.core.nth.call(null,vec__18204,(1),null);var ___$2 = cljs.core.nth.call(null,vec__18204,(2),null);var e = cljs.core.nth.call(null,vec__18204,(3),null);var line = vec__18204;if(cljs.core._EQ_.call(null,(-1),avg_v))
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
