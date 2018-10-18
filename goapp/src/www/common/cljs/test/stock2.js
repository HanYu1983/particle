// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('ai.ann');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__23826_SHARP_){return cljs.core.nth.call(null,p1__23826_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__23827_SHARP_){return cljs.core.nth.call(null,p1__23827_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_brain = (function draw_brain(ctx,w,h,info,p__23828){var map__23845 = p__23828;var map__23845__$1 = ((cljs.core.seq_QMARK_.call(null,map__23845))?cljs.core.apply.call(null,cljs.core.hash_map,map__23845):map__23845);var brain = map__23845__$1;var steps = cljs.core.get.call(null,map__23845__$1,new cljs.core.Keyword(null,"step","step",1288888124));var vec__23846 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__23846,(0),null);var min_v = cljs.core.nth.call(null,vec__23846,(1),null);var offset_v = cljs.core.nth.call(null,vec__23846,(2),null);var offset_x = cljs.core.nth.call(null,vec__23846,(3),null);var pos_y = cljs.core.nth.call(null,vec__23846,(4),null);var money = test.stock2.calculate_money.call(null,(10000),(100),steps);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__23846,max_v,min_v,offset_v,offset_x,pos_y,money,map__23845,map__23845__$1,brain,steps){
return (function (p__23847){var vec__23848 = p__23847;var act = cljs.core.nth.call(null,vec__23848,(0),null);var line = cljs.core.nth.call(null,vec__23848,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__23846,max_v,min_v,offset_v,offset_x,pos_y,money,map__23845,map__23845__$1,brain,steps))
,steps)),info);(ctx["fillStyle"] = "black");
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(20),(20));
if(cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))
{ctx.fillText(("stock:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))),(20),(40));
} else
{}
var seq__23849 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__23846,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__23845,map__23845__$1,brain,steps){
return (function() { 
var G__23861__delegate = function (args){return args;
};
var G__23861 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23861__delegate.call(this,args);};
G__23861.cljs$lang$maxFixedArity = 0;
G__23861.cljs$lang$applyTo = (function (arglist__23862){
var args = cljs.core.seq(arglist__23862);
return G__23861__delegate(args);
});
G__23861.cljs$core$IFn$_invoke$arity$variadic = G__23861__delegate;
return G__23861;
})()
;})(vec__23846,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__23845,map__23845__$1,brain,steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__23850 = null;var count__23851 = (0);var i__23852 = (0);while(true){
if((i__23852 < count__23851))
{var vec__23853 = cljs.core._nth.call(null,chunk__23850,i__23852);var idx = cljs.core.nth.call(null,vec__23853,(0),null);var curr = cljs.core.nth.call(null,vec__23853,(1),null);var pred__23854_23863 = cljs.core._EQ_;var expr__23855_23864 = curr;if(cljs.core.truth_(pred__23854_23863.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__23855_23864)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__23854_23863.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__23855_23864)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__23865 = seq__23849;
var G__23866 = chunk__23850;
var G__23867 = count__23851;
var G__23868 = (i__23852 + (1));
seq__23849 = G__23865;
chunk__23850 = G__23866;
count__23851 = G__23867;
i__23852 = G__23868;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23849);if(temp__4126__auto__)
{var seq__23849__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23849__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23849__$1);{
var G__23869 = cljs.core.chunk_rest.call(null,seq__23849__$1);
var G__23870 = c__4307__auto__;
var G__23871 = cljs.core.count.call(null,c__4307__auto__);
var G__23872 = (0);
seq__23849 = G__23869;
chunk__23850 = G__23870;
count__23851 = G__23871;
i__23852 = G__23872;
continue;
}
} else
{var vec__23857 = cljs.core.first.call(null,seq__23849__$1);var idx = cljs.core.nth.call(null,vec__23857,(0),null);var curr = cljs.core.nth.call(null,vec__23857,(1),null);var pred__23858_23873 = cljs.core._EQ_;var expr__23859_23874 = curr;if(cljs.core.truth_(pred__23858_23873.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__23859_23874)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__23858_23873.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__23859_23874)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__23875 = cljs.core.next.call(null,seq__23849__$1);
var G__23876 = null;
var G__23877 = (0);
var G__23878 = (0);
seq__23849 = G__23875;
chunk__23850 = G__23876;
count__23851 = G__23877;
i__23852 = G__23878;
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
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__23886 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__23886,(0),null);var min_v = cljs.core.nth.call(null,vec__23886,(1),null);var offset_v = cljs.core.nth.call(null,vec__23886,(2),null);var offset_x = cljs.core.nth.call(null,vec__23886,(3),null);var pos_y = cljs.core.nth.call(null,vec__23886,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__23887 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__23886,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__23893__delegate = function (args){return args;
};
var G__23893 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23893__delegate.call(this,args);};
G__23893.cljs$lang$maxFixedArity = 0;
G__23893.cljs$lang$applyTo = (function (arglist__23894){
var args = cljs.core.seq(arglist__23894);
return G__23893__delegate(args);
});
G__23893.cljs$core$IFn$_invoke$arity$variadic = G__23893__delegate;
return G__23893;
})()
;})(vec__23886,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__23888 = null;var count__23889 = (0);var i__23890 = (0);while(true){
if((i__23890 < count__23889))
{var vec__23891 = cljs.core._nth.call(null,chunk__23888,i__23890);var idx = cljs.core.nth.call(null,vec__23891,(0),null);var prev = cljs.core.nth.call(null,vec__23891,(1),null);var curr = cljs.core.nth.call(null,vec__23891,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__23895 = seq__23887;
var G__23896 = chunk__23888;
var G__23897 = count__23889;
var G__23898 = (i__23890 + (1));
seq__23887 = G__23895;
chunk__23888 = G__23896;
count__23889 = G__23897;
i__23890 = G__23898;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23887);if(temp__4126__auto__)
{var seq__23887__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23887__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23887__$1);{
var G__23899 = cljs.core.chunk_rest.call(null,seq__23887__$1);
var G__23900 = c__4307__auto__;
var G__23901 = cljs.core.count.call(null,c__4307__auto__);
var G__23902 = (0);
seq__23887 = G__23899;
chunk__23888 = G__23900;
count__23889 = G__23901;
i__23890 = G__23902;
continue;
}
} else
{var vec__23892 = cljs.core.first.call(null,seq__23887__$1);var idx = cljs.core.nth.call(null,vec__23892,(0),null);var prev = cljs.core.nth.call(null,vec__23892,(1),null);var curr = cljs.core.nth.call(null,vec__23892,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__23903 = cljs.core.next.call(null,seq__23887__$1);
var G__23904 = null;
var G__23905 = (0);
var G__23906 = (0);
seq__23887 = G__23903;
chunk__23888 = G__23904;
count__23889 = G__23905;
i__23890 = G__23906;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__23916 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__23916,(0),null);var min_v = cljs.core.nth.call(null,vec__23916,(1),null);var offset_v = cljs.core.nth.call(null,vec__23916,(2),null);var offset_x = cljs.core.nth.call(null,vec__23916,(3),null);var pos_y = cljs.core.nth.call(null,vec__23916,(4),null);var seq__23917 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__23916,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__23925__delegate = function (args){return args;
};
var G__23925 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23925__delegate.call(this,args);};
G__23925.cljs$lang$maxFixedArity = 0;
G__23925.cljs$lang$applyTo = (function (arglist__23926){
var args = cljs.core.seq(arglist__23926);
return G__23925__delegate(args);
});
G__23925.cljs$core$IFn$_invoke$arity$variadic = G__23925__delegate;
return G__23925;
})()
;})(vec__23916,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__23918 = null;var count__23919 = (0);var i__23920 = (0);while(true){
if((i__23920 < count__23919))
{var vec__23921 = cljs.core._nth.call(null,chunk__23918,i__23920);var idx = cljs.core.nth.call(null,vec__23921,(0),null);var vec__23922 = cljs.core.nth.call(null,vec__23921,(1),null);var start = cljs.core.nth.call(null,vec__23922,(0),null);var top = cljs.core.nth.call(null,vec__23922,(1),null);var bottom = cljs.core.nth.call(null,vec__23922,(2),null);var end = cljs.core.nth.call(null,vec__23922,(3),null);(ctx["strokeStyle"] = "black");
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
var G__23927 = seq__23917;
var G__23928 = chunk__23918;
var G__23929 = count__23919;
var G__23930 = (i__23920 + (1));
seq__23917 = G__23927;
chunk__23918 = G__23928;
count__23919 = G__23929;
i__23920 = G__23930;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23917);if(temp__4126__auto__)
{var seq__23917__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23917__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__23917__$1);{
var G__23931 = cljs.core.chunk_rest.call(null,seq__23917__$1);
var G__23932 = c__4307__auto__;
var G__23933 = cljs.core.count.call(null,c__4307__auto__);
var G__23934 = (0);
seq__23917 = G__23931;
chunk__23918 = G__23932;
count__23919 = G__23933;
i__23920 = G__23934;
continue;
}
} else
{var vec__23923 = cljs.core.first.call(null,seq__23917__$1);var idx = cljs.core.nth.call(null,vec__23923,(0),null);var vec__23924 = cljs.core.nth.call(null,vec__23923,(1),null);var start = cljs.core.nth.call(null,vec__23924,(0),null);var top = cljs.core.nth.call(null,vec__23924,(1),null);var bottom = cljs.core.nth.call(null,vec__23924,(2),null);var end = cljs.core.nth.call(null,vec__23924,(3),null);(ctx["strokeStyle"] = "black");
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
var G__23935 = cljs.core.next.call(null,seq__23917__$1);
var G__23936 = null;
var G__23937 = (0);
var G__23938 = (0);
seq__23917 = G__23935;
chunk__23918 = G__23936;
count__23919 = G__23937;
i__23920 = G__23938;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__23946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__23946,(0),null);var h = cljs.core.nth.call(null,vec__23946,(1),null);return ((function (ctx,vec__23946,w,h){
return (function (p__23947){var map__23948 = p__23947;var map__23948__$1 = ((cljs.core.seq_QMARK_.call(null,map__23948))?cljs.core.apply.call(null,cljs.core.hash_map,map__23948):map__23948);var info = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var brain = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"brain","brain",428499577));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__23949_23953 = cljs.core.seq.call(null,avgs);var chunk__23950_23954 = null;var count__23951_23955 = (0);var i__23952_23956 = (0);while(true){
if((i__23952_23956 < count__23951_23955))
{var avg_23957 = cljs.core._nth.call(null,chunk__23950_23954,i__23952_23956);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_23957);
{
var G__23958 = seq__23949_23953;
var G__23959 = chunk__23950_23954;
var G__23960 = count__23951_23955;
var G__23961 = (i__23952_23956 + (1));
seq__23949_23953 = G__23958;
chunk__23950_23954 = G__23959;
count__23951_23955 = G__23960;
i__23952_23956 = G__23961;
continue;
}
} else
{var temp__4126__auto___23962 = cljs.core.seq.call(null,seq__23949_23953);if(temp__4126__auto___23962)
{var seq__23949_23963__$1 = temp__4126__auto___23962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23949_23963__$1))
{var c__4307__auto___23964 = cljs.core.chunk_first.call(null,seq__23949_23963__$1);{
var G__23965 = cljs.core.chunk_rest.call(null,seq__23949_23963__$1);
var G__23966 = c__4307__auto___23964;
var G__23967 = cljs.core.count.call(null,c__4307__auto___23964);
var G__23968 = (0);
seq__23949_23953 = G__23965;
chunk__23950_23954 = G__23966;
count__23951_23955 = G__23967;
i__23952_23956 = G__23968;
continue;
}
} else
{var avg_23969 = cljs.core.first.call(null,seq__23949_23963__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_23969);
{
var G__23970 = cljs.core.next.call(null,seq__23949_23963__$1);
var G__23971 = null;
var G__23972 = (0);
var G__23973 = (0);
seq__23949_23953 = G__23970;
chunk__23950_23954 = G__23971;
count__23951_23955 = G__23972;
i__23952_23956 = G__23973;
continue;
}
}
} else
{}
}
break;
}
test.stock2.draw_line.call(null,ctx,w,h,info);
if(cljs.core.truth_(brain))
{return test.stock2.draw_brain.call(null,ctx,w,h,info,brain);
} else
{return null;
}
});
;})(ctx,vec__23946,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__23976,r){var vec__23977 = p__23976;var la = cljs.core.nth.call(null,vec__23977,(0),null);var _ = cljs.core.nthnext.call(null,vec__23977,(1));var all = vec__23977;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__23978_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__23978_SHARP_) / cljs.core.count.call(null,p1__23978_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__23984){var vec__23985 = p__23984;var s = cljs.core.nth.call(null,vec__23985,(0),null);var t = cljs.core.nth.call(null,vec__23985,(1),null);var b = cljs.core.nth.call(null,vec__23985,(2),null);var e = cljs.core.nth.call(null,vec__23985,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__23979_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__23979_SHARP_) / cljs.core.count.call(null,p1__23979_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__23986){var vec__23987 = p__23986;var s = cljs.core.nth.call(null,vec__23987,(0),null);var t = cljs.core.nth.call(null,vec__23987,(1),null);var b = cljs.core.nth.call(null,vec__23987,(2),null);var e = cljs.core.nth.call(null,vec__23987,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__23989 = line;var start = cljs.core.nth.call(null,vec__23989,(0),null);var top = cljs.core.nth.call(null,vec__23989,(1),null);var bottom = cljs.core.nth.call(null,vec__23989,(2),null);var end = cljs.core.nth.call(null,vec__23989,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
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
test.stock2.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock2.draw = test.stock2.draw.call(null,document.getElementById("canvas"));
test.stock2.main = (function main(){var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,(50),(100),0.07),(5));var styles = cljs.core.map.call(null,cljs.core.partial.call(null,test.stock2.check_one_style,((5) * 0.07)),info);var avg5 = test.stock2.average.call(null,info,(5));var avg10 = test.stock2.average.call(null,info,(10));return test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg5,avg10], null)], null));
});
test.stock2.hasStock = (function hasStock(brain){return new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);
});
test.stock2.buy = (function buy(brain,line,cnt){var temp__4124__auto__ = new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);if(cljs.core.truth_(temp__4124__auto__))
{var stock__$1 = temp__4124__auto__;return brain;
} else
{return cljs.core.assoc.call(null,cljs.core.update_in.call(null,brain,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buy","buy",-794379565),line], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),line);
}
});
test.stock2.sell = (function sell(brain,line){var temp__4124__auto__ = new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);if(cljs.core.truth_(temp__4124__auto__))
{var ori_line = temp__4124__auto__;return cljs.core.assoc.call(null,cljs.core.update_in.call(null,brain,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sell","sell",-1949004143),(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return ori_line;
}
})()], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),null);
} else
{return brain;
}
});
test.stock2.prepare = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("prepare",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,info){return type;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
test.stock2.think = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("think",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,brian,line){return type;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
test.stock2.play = (function play(type,info){var brain = test.stock2.prepare.call(null,type,info);return cljs.core.reduce.call(null,cljs.core.partial.call(null,test.stock2.think,type),brain,info);
});
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,info){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.List.EMPTY], null);
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__23990){var vec__23991 = p__23990;var start_price = cljs.core.nth.call(null,vec__23991,(0),null);var _ = cljs.core.nth.call(null,vec__23991,(1),null);var ___$1 = cljs.core.nth.call(null,vec__23991,(2),null);var ___$2 = cljs.core.nth.call(null,vec__23991,(3),null);var line = vec__23991;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,info){return cljs.core.merge.call(null,test.stock2.prepare.call(null,null,info),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.list(cljs.core.list(cljs.core.list(3.0309727609504122,0.8958129837134047,1.5035815277093234,0.9456629358188376,1.3576705137689733,1.2631671445866242),cljs.core.list(-0.31085424118702176,0.9340874822881315,0.5655820779573415,0.7585836548894886,0.06611942477303065,0.7940467160731797),cljs.core.list(2.850307140147388,1.0756956641941802,1.5538502140350114,0.7274314323819675,1.5567211797840368,0.729486094825665),cljs.core.list(2.2728224695552925,1.2083236755399938,1.0223688933595008,0.7836758956375489,1.054595369712162,0.5593937540954879),cljs.core.list(3.0218162878485093,1.0503652785565414,1.604135048169243,1.2388330537952215,1.221090407169956,0.8350244798358218)),cljs.core.list(cljs.core.list(5.301581267749204,3.3609868593366343,-0.7394149388296283,3.0376961047533566,2.256700046977792,3.389521210235661)))], null));
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,p__23992,line){var map__23993 = p__23992;var map__23993__$1 = ((cljs.core.seq_QMARK_.call(null,map__23993))?cljs.core.apply.call(null,cljs.core.hash_map,map__23993):map__23993);var brain = map__23993__$1;var ws = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"ws","ws",86841443));var info = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"info","info",-317069002));var lines = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,line),info);var recent_lines = cljs.core.take_last.call(null,(5),lines);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,recent_lines),(5)))
{var avg1 = test.stock2.average.call(null,recent_lines,(1));var rates = test.stock2.convert_rates.call(null,avg1,0.41);var value = cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,rates),ws)));if(cljs.core.truth_(test.stock2.hasStock.call(null,brain)))
{return test.stock2.sell.call(null,brain,line);
} else
{if((value > 0.55))
{return test.stock2.buy.call(null,brain,line,(100));
} else
{return brain;
}
}
} else
{return brain;
}
}));
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__24000){var vec__24001 = p__24000;var act = cljs.core.nth.call(null,vec__24001,(0),null);var vec__24002 = cljs.core.nth.call(null,vec__24001,(1),null);var start_price = cljs.core.nth.call(null,vec__24002,(0),null);var _ = cljs.core.nthnext.call(null,vec__24002,(1));var line = vec__24002;var step = vec__24001;var pred__24003 = cljs.core._EQ_;var expr__24004 = act;if(cljs.core.truth_(pred__24003.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24004)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__24003.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24004)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (((5) * (4)) * (12));var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var avg1 = test.stock2.average.call(null,info,(1));var map__24007 = test.stock2.play.call(null,new cljs.core.Keyword(null,"ann1","ann1",-999246990),info);var map__24007__$1 = ((cljs.core.seq_QMARK_.call(null,map__24007))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);var brain = map__24007__$1;var step = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"step","step",1288888124));test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg1], null)], null));
return null;
});
test.stock2.test_play.call(null);
