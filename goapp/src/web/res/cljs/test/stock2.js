// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__29097_SHARP_){return cljs.core.nth.call(null,p1__29097_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__29098_SHARP_){return cljs.core.nth.call(null,p1__29098_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__29106 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__29106,(0),null);var min_v = cljs.core.nth.call(null,vec__29106,(1),null);var offset_v = cljs.core.nth.call(null,vec__29106,(2),null);var offset_x = cljs.core.nth.call(null,vec__29106,(3),null);var pos_y = cljs.core.nth.call(null,vec__29106,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__29107 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__29106,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__29113__delegate = function (args){return args;
};
var G__29113 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29113__delegate.call(this,args);};
G__29113.cljs$lang$maxFixedArity = 0;
G__29113.cljs$lang$applyTo = (function (arglist__29114){
var args = cljs.core.seq(arglist__29114);
return G__29113__delegate(args);
});
G__29113.cljs$core$IFn$_invoke$arity$variadic = G__29113__delegate;
return G__29113;
})()
;})(vec__29106,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__29108 = null;var count__29109 = (0);var i__29110 = (0);while(true){
if((i__29110 < count__29109))
{var vec__29111 = cljs.core._nth.call(null,chunk__29108,i__29110);var idx = cljs.core.nth.call(null,vec__29111,(0),null);var prev = cljs.core.nth.call(null,vec__29111,(1),null);var curr = cljs.core.nth.call(null,vec__29111,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__29115 = seq__29107;
var G__29116 = chunk__29108;
var G__29117 = count__29109;
var G__29118 = (i__29110 + (1));
seq__29107 = G__29115;
chunk__29108 = G__29116;
count__29109 = G__29117;
i__29110 = G__29118;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29107);if(temp__4126__auto__)
{var seq__29107__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29107__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__29107__$1);{
var G__29119 = cljs.core.chunk_rest.call(null,seq__29107__$1);
var G__29120 = c__4307__auto__;
var G__29121 = cljs.core.count.call(null,c__4307__auto__);
var G__29122 = (0);
seq__29107 = G__29119;
chunk__29108 = G__29120;
count__29109 = G__29121;
i__29110 = G__29122;
continue;
}
} else
{var vec__29112 = cljs.core.first.call(null,seq__29107__$1);var idx = cljs.core.nth.call(null,vec__29112,(0),null);var prev = cljs.core.nth.call(null,vec__29112,(1),null);var curr = cljs.core.nth.call(null,vec__29112,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__29123 = cljs.core.next.call(null,seq__29107__$1);
var G__29124 = null;
var G__29125 = (0);
var G__29126 = (0);
seq__29107 = G__29123;
chunk__29108 = G__29124;
count__29109 = G__29125;
i__29110 = G__29126;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__29136 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__29136,(0),null);var min_v = cljs.core.nth.call(null,vec__29136,(1),null);var offset_v = cljs.core.nth.call(null,vec__29136,(2),null);var offset_x = cljs.core.nth.call(null,vec__29136,(3),null);var pos_y = cljs.core.nth.call(null,vec__29136,(4),null);var seq__29137 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__29136,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__29145__delegate = function (args){return args;
};
var G__29145 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29145__delegate.call(this,args);};
G__29145.cljs$lang$maxFixedArity = 0;
G__29145.cljs$lang$applyTo = (function (arglist__29146){
var args = cljs.core.seq(arglist__29146);
return G__29145__delegate(args);
});
G__29145.cljs$core$IFn$_invoke$arity$variadic = G__29145__delegate;
return G__29145;
})()
;})(vec__29136,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__29138 = null;var count__29139 = (0);var i__29140 = (0);while(true){
if((i__29140 < count__29139))
{var vec__29141 = cljs.core._nth.call(null,chunk__29138,i__29140);var idx = cljs.core.nth.call(null,vec__29141,(0),null);var vec__29142 = cljs.core.nth.call(null,vec__29141,(1),null);var start = cljs.core.nth.call(null,vec__29142,(0),null);var top = cljs.core.nth.call(null,vec__29142,(1),null);var bottom = cljs.core.nth.call(null,vec__29142,(2),null);var end = cljs.core.nth.call(null,vec__29142,(3),null);(ctx["strokeStyle"] = "black");
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
var G__29147 = seq__29137;
var G__29148 = chunk__29138;
var G__29149 = count__29139;
var G__29150 = (i__29140 + (1));
seq__29137 = G__29147;
chunk__29138 = G__29148;
count__29139 = G__29149;
i__29140 = G__29150;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29137);if(temp__4126__auto__)
{var seq__29137__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29137__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__29137__$1);{
var G__29151 = cljs.core.chunk_rest.call(null,seq__29137__$1);
var G__29152 = c__4307__auto__;
var G__29153 = cljs.core.count.call(null,c__4307__auto__);
var G__29154 = (0);
seq__29137 = G__29151;
chunk__29138 = G__29152;
count__29139 = G__29153;
i__29140 = G__29154;
continue;
}
} else
{var vec__29143 = cljs.core.first.call(null,seq__29137__$1);var idx = cljs.core.nth.call(null,vec__29143,(0),null);var vec__29144 = cljs.core.nth.call(null,vec__29143,(1),null);var start = cljs.core.nth.call(null,vec__29144,(0),null);var top = cljs.core.nth.call(null,vec__29144,(1),null);var bottom = cljs.core.nth.call(null,vec__29144,(2),null);var end = cljs.core.nth.call(null,vec__29144,(3),null);(ctx["strokeStyle"] = "black");
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
var G__29155 = cljs.core.next.call(null,seq__29137__$1);
var G__29156 = null;
var G__29157 = (0);
var G__29158 = (0);
seq__29137 = G__29155;
chunk__29138 = G__29156;
count__29139 = G__29157;
i__29140 = G__29158;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__29166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__29166,(0),null);var h = cljs.core.nth.call(null,vec__29166,(1),null);return ((function (ctx,vec__29166,w,h){
return (function (p__29167){var map__29168 = p__29167;var map__29168__$1 = ((cljs.core.seq_QMARK_.call(null,map__29168))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);var info = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));(ctx["fillStyle"] = "white");
ctx.fillRect((0),(0),w,h);
var seq__29169_29173 = cljs.core.seq.call(null,avgs);var chunk__29170_29174 = null;var count__29171_29175 = (0);var i__29172_29176 = (0);while(true){
if((i__29172_29176 < count__29171_29175))
{var avg_29177 = cljs.core._nth.call(null,chunk__29170_29174,i__29172_29176);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_29177);
{
var G__29178 = seq__29169_29173;
var G__29179 = chunk__29170_29174;
var G__29180 = count__29171_29175;
var G__29181 = (i__29172_29176 + (1));
seq__29169_29173 = G__29178;
chunk__29170_29174 = G__29179;
count__29171_29175 = G__29180;
i__29172_29176 = G__29181;
continue;
}
} else
{var temp__4126__auto___29182 = cljs.core.seq.call(null,seq__29169_29173);if(temp__4126__auto___29182)
{var seq__29169_29183__$1 = temp__4126__auto___29182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29169_29183__$1))
{var c__4307__auto___29184 = cljs.core.chunk_first.call(null,seq__29169_29183__$1);{
var G__29185 = cljs.core.chunk_rest.call(null,seq__29169_29183__$1);
var G__29186 = c__4307__auto___29184;
var G__29187 = cljs.core.count.call(null,c__4307__auto___29184);
var G__29188 = (0);
seq__29169_29173 = G__29185;
chunk__29170_29174 = G__29186;
count__29171_29175 = G__29187;
i__29172_29176 = G__29188;
continue;
}
} else
{var avg_29189 = cljs.core.first.call(null,seq__29169_29183__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_29189);
{
var G__29190 = cljs.core.next.call(null,seq__29169_29183__$1);
var G__29191 = null;
var G__29192 = (0);
var G__29193 = (0);
seq__29169_29173 = G__29190;
chunk__29170_29174 = G__29191;
count__29171_29175 = G__29192;
i__29172_29176 = G__29193;
continue;
}
}
} else
{}
}
break;
}
return test.stock2.draw_line.call(null,ctx,w,h,info);
});
;})(ctx,vec__29166,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__29196,r){var vec__29197 = p__29196;var la = cljs.core.nth.call(null,vec__29197,(0),null);var _ = cljs.core.nthnext.call(null,vec__29197,(1));var all = vec__29197;return cljs.core.cons.call(null,(la + (la * (r - up_rate))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,cnt,(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__29198_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__29198_SHARP_) / cljs.core.count.call(null,p1__29198_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__29201){var vec__29202 = p__29201;var s = cljs.core.nth.call(null,vec__29202,(0),null);var t = cljs.core.nth.call(null,vec__29202,(1),null);var b = cljs.core.nth.call(null,vec__29202,(2),null);var e = cljs.core.nth.call(null,vec__29202,(3),null);return e;
}),kline))),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(-1))));
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__29204 = line;var start = cljs.core.nth.call(null,vec__29204,(0),null);var top = cljs.core.nth.call(null,vec__29204,(1),null);var bottom = cljs.core.nth.call(null,vec__29204,(2),null);var end = cljs.core.nth.call(null,vec__29204,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u9577\u7D05",solid_rate,line_rate], null);
} else
{if(((solid_rate < 0.7)) && ((line_rate > 0.2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u9577\u9ED1",solid_rate], null);
} else
{if(((Math.abs(solid_rate) < 0.35)) && (true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u5341\u5B57\u7DDA",solid_rate,line_rate], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unknown"], null);
} else
{return null;
}
}
}
}
});
test.stock2.draw = test.stock2.draw.call(null,document.getElementById("canvas"));
test.stock2.main = (function main(){var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,(100),(100),0.07),(5));var styles = cljs.core.map.call(null,cljs.core.partial.call(null,test.stock2.check_one_style,((5) * 0.07)),info);var avg5 = test.stock2.average.call(null,info,(5));var avg10 = test.stock2.average.call(null,info,(10));console.log(cljs.core.pr_str.call(null,styles));
return test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg5,avg10], null)], null));
});
test.stock2.main.call(null);
