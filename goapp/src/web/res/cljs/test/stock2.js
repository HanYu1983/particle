// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('ai.ann');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__104730_SHARP_){return cljs.core.nth.call(null,p1__104730_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__104731_SHARP_){return cljs.core.nth.call(null,p1__104731_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_brain = (function draw_brain(ctx,w,h,info,p__104732){var map__104749 = p__104732;var map__104749__$1 = ((cljs.core.seq_QMARK_.call(null,map__104749))?cljs.core.apply.call(null,cljs.core.hash_map,map__104749):map__104749);var brain = map__104749__$1;var steps = cljs.core.get.call(null,map__104749__$1,new cljs.core.Keyword(null,"step","step",1288888124));var vec__104750 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__104750,(0),null);var min_v = cljs.core.nth.call(null,vec__104750,(1),null);var offset_v = cljs.core.nth.call(null,vec__104750,(2),null);var offset_x = cljs.core.nth.call(null,vec__104750,(3),null);var pos_y = cljs.core.nth.call(null,vec__104750,(4),null);var money = test.stock2.calculate_money.call(null,(10000),(100),steps);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__104750,max_v,min_v,offset_v,offset_x,pos_y,money,map__104749,map__104749__$1,brain,steps){
return (function (p__104751){var vec__104752 = p__104751;var act = cljs.core.nth.call(null,vec__104752,(0),null);var line = cljs.core.nth.call(null,vec__104752,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__104750,max_v,min_v,offset_v,offset_x,pos_y,money,map__104749,map__104749__$1,brain,steps))
,steps)),info);(ctx["fillStyle"] = "black");
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(20),(20));
if(cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))
{ctx.fillText(("stock:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))),(20),(40));
} else
{}
var seq__104753 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__104750,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__104749,map__104749__$1,brain,steps){
return (function() { 
var G__104765__delegate = function (args){return args;
};
var G__104765 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104765__delegate.call(this,args);};
G__104765.cljs$lang$maxFixedArity = 0;
G__104765.cljs$lang$applyTo = (function (arglist__104766){
var args = cljs.core.seq(arglist__104766);
return G__104765__delegate(args);
});
G__104765.cljs$core$IFn$_invoke$arity$variadic = G__104765__delegate;
return G__104765;
})()
;})(vec__104750,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__104749,map__104749__$1,brain,steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__104754 = null;var count__104755 = (0);var i__104756 = (0);while(true){
if((i__104756 < count__104755))
{var vec__104757 = cljs.core._nth.call(null,chunk__104754,i__104756);var idx = cljs.core.nth.call(null,vec__104757,(0),null);var curr = cljs.core.nth.call(null,vec__104757,(1),null);var pred__104758_104767 = cljs.core._EQ_;var expr__104759_104768 = curr;if(cljs.core.truth_(pred__104758_104767.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__104759_104768)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__104758_104767.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__104759_104768)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__104769 = seq__104753;
var G__104770 = chunk__104754;
var G__104771 = count__104755;
var G__104772 = (i__104756 + (1));
seq__104753 = G__104769;
chunk__104754 = G__104770;
count__104755 = G__104771;
i__104756 = G__104772;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__104753);if(temp__4126__auto__)
{var seq__104753__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104753__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__104753__$1);{
var G__104773 = cljs.core.chunk_rest.call(null,seq__104753__$1);
var G__104774 = c__4307__auto__;
var G__104775 = cljs.core.count.call(null,c__4307__auto__);
var G__104776 = (0);
seq__104753 = G__104773;
chunk__104754 = G__104774;
count__104755 = G__104775;
i__104756 = G__104776;
continue;
}
} else
{var vec__104761 = cljs.core.first.call(null,seq__104753__$1);var idx = cljs.core.nth.call(null,vec__104761,(0),null);var curr = cljs.core.nth.call(null,vec__104761,(1),null);var pred__104762_104777 = cljs.core._EQ_;var expr__104763_104778 = curr;if(cljs.core.truth_(pred__104762_104777.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__104763_104778)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__104762_104777.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__104763_104778)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__104779 = cljs.core.next.call(null,seq__104753__$1);
var G__104780 = null;
var G__104781 = (0);
var G__104782 = (0);
seq__104753 = G__104779;
chunk__104754 = G__104780;
count__104755 = G__104781;
i__104756 = G__104782;
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
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__104790 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__104790,(0),null);var min_v = cljs.core.nth.call(null,vec__104790,(1),null);var offset_v = cljs.core.nth.call(null,vec__104790,(2),null);var offset_x = cljs.core.nth.call(null,vec__104790,(3),null);var pos_y = cljs.core.nth.call(null,vec__104790,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__104791 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__104790,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__104797__delegate = function (args){return args;
};
var G__104797 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104797__delegate.call(this,args);};
G__104797.cljs$lang$maxFixedArity = 0;
G__104797.cljs$lang$applyTo = (function (arglist__104798){
var args = cljs.core.seq(arglist__104798);
return G__104797__delegate(args);
});
G__104797.cljs$core$IFn$_invoke$arity$variadic = G__104797__delegate;
return G__104797;
})()
;})(vec__104790,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__104792 = null;var count__104793 = (0);var i__104794 = (0);while(true){
if((i__104794 < count__104793))
{var vec__104795 = cljs.core._nth.call(null,chunk__104792,i__104794);var idx = cljs.core.nth.call(null,vec__104795,(0),null);var prev = cljs.core.nth.call(null,vec__104795,(1),null);var curr = cljs.core.nth.call(null,vec__104795,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__104799 = seq__104791;
var G__104800 = chunk__104792;
var G__104801 = count__104793;
var G__104802 = (i__104794 + (1));
seq__104791 = G__104799;
chunk__104792 = G__104800;
count__104793 = G__104801;
i__104794 = G__104802;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__104791);if(temp__4126__auto__)
{var seq__104791__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104791__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__104791__$1);{
var G__104803 = cljs.core.chunk_rest.call(null,seq__104791__$1);
var G__104804 = c__4307__auto__;
var G__104805 = cljs.core.count.call(null,c__4307__auto__);
var G__104806 = (0);
seq__104791 = G__104803;
chunk__104792 = G__104804;
count__104793 = G__104805;
i__104794 = G__104806;
continue;
}
} else
{var vec__104796 = cljs.core.first.call(null,seq__104791__$1);var idx = cljs.core.nth.call(null,vec__104796,(0),null);var prev = cljs.core.nth.call(null,vec__104796,(1),null);var curr = cljs.core.nth.call(null,vec__104796,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__104807 = cljs.core.next.call(null,seq__104791__$1);
var G__104808 = null;
var G__104809 = (0);
var G__104810 = (0);
seq__104791 = G__104807;
chunk__104792 = G__104808;
count__104793 = G__104809;
i__104794 = G__104810;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__104820 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__104820,(0),null);var min_v = cljs.core.nth.call(null,vec__104820,(1),null);var offset_v = cljs.core.nth.call(null,vec__104820,(2),null);var offset_x = cljs.core.nth.call(null,vec__104820,(3),null);var pos_y = cljs.core.nth.call(null,vec__104820,(4),null);var seq__104821 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__104820,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__104829__delegate = function (args){return args;
};
var G__104829 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104829__delegate.call(this,args);};
G__104829.cljs$lang$maxFixedArity = 0;
G__104829.cljs$lang$applyTo = (function (arglist__104830){
var args = cljs.core.seq(arglist__104830);
return G__104829__delegate(args);
});
G__104829.cljs$core$IFn$_invoke$arity$variadic = G__104829__delegate;
return G__104829;
})()
;})(vec__104820,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__104822 = null;var count__104823 = (0);var i__104824 = (0);while(true){
if((i__104824 < count__104823))
{var vec__104825 = cljs.core._nth.call(null,chunk__104822,i__104824);var idx = cljs.core.nth.call(null,vec__104825,(0),null);var vec__104826 = cljs.core.nth.call(null,vec__104825,(1),null);var start = cljs.core.nth.call(null,vec__104826,(0),null);var top = cljs.core.nth.call(null,vec__104826,(1),null);var bottom = cljs.core.nth.call(null,vec__104826,(2),null);var end = cljs.core.nth.call(null,vec__104826,(3),null);(ctx["strokeStyle"] = "black");
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
var G__104831 = seq__104821;
var G__104832 = chunk__104822;
var G__104833 = count__104823;
var G__104834 = (i__104824 + (1));
seq__104821 = G__104831;
chunk__104822 = G__104832;
count__104823 = G__104833;
i__104824 = G__104834;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__104821);if(temp__4126__auto__)
{var seq__104821__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104821__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__104821__$1);{
var G__104835 = cljs.core.chunk_rest.call(null,seq__104821__$1);
var G__104836 = c__4307__auto__;
var G__104837 = cljs.core.count.call(null,c__4307__auto__);
var G__104838 = (0);
seq__104821 = G__104835;
chunk__104822 = G__104836;
count__104823 = G__104837;
i__104824 = G__104838;
continue;
}
} else
{var vec__104827 = cljs.core.first.call(null,seq__104821__$1);var idx = cljs.core.nth.call(null,vec__104827,(0),null);var vec__104828 = cljs.core.nth.call(null,vec__104827,(1),null);var start = cljs.core.nth.call(null,vec__104828,(0),null);var top = cljs.core.nth.call(null,vec__104828,(1),null);var bottom = cljs.core.nth.call(null,vec__104828,(2),null);var end = cljs.core.nth.call(null,vec__104828,(3),null);(ctx["strokeStyle"] = "black");
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
var G__104839 = cljs.core.next.call(null,seq__104821__$1);
var G__104840 = null;
var G__104841 = (0);
var G__104842 = (0);
seq__104821 = G__104839;
chunk__104822 = G__104840;
count__104823 = G__104841;
i__104824 = G__104842;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__104850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__104850,(0),null);var h = cljs.core.nth.call(null,vec__104850,(1),null);return ((function (ctx,vec__104850,w,h){
return (function (p__104851){var map__104852 = p__104851;var map__104852__$1 = ((cljs.core.seq_QMARK_.call(null,map__104852))?cljs.core.apply.call(null,cljs.core.hash_map,map__104852):map__104852);var info = cljs.core.get.call(null,map__104852__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__104852__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var brain = cljs.core.get.call(null,map__104852__$1,new cljs.core.Keyword(null,"brain","brain",428499577));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__104853_104857 = cljs.core.seq.call(null,avgs);var chunk__104854_104858 = null;var count__104855_104859 = (0);var i__104856_104860 = (0);while(true){
if((i__104856_104860 < count__104855_104859))
{var avg_104861 = cljs.core._nth.call(null,chunk__104854_104858,i__104856_104860);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_104861);
{
var G__104862 = seq__104853_104857;
var G__104863 = chunk__104854_104858;
var G__104864 = count__104855_104859;
var G__104865 = (i__104856_104860 + (1));
seq__104853_104857 = G__104862;
chunk__104854_104858 = G__104863;
count__104855_104859 = G__104864;
i__104856_104860 = G__104865;
continue;
}
} else
{var temp__4126__auto___104866 = cljs.core.seq.call(null,seq__104853_104857);if(temp__4126__auto___104866)
{var seq__104853_104867__$1 = temp__4126__auto___104866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104853_104867__$1))
{var c__4307__auto___104868 = cljs.core.chunk_first.call(null,seq__104853_104867__$1);{
var G__104869 = cljs.core.chunk_rest.call(null,seq__104853_104867__$1);
var G__104870 = c__4307__auto___104868;
var G__104871 = cljs.core.count.call(null,c__4307__auto___104868);
var G__104872 = (0);
seq__104853_104857 = G__104869;
chunk__104854_104858 = G__104870;
count__104855_104859 = G__104871;
i__104856_104860 = G__104872;
continue;
}
} else
{var avg_104873 = cljs.core.first.call(null,seq__104853_104867__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_104873);
{
var G__104874 = cljs.core.next.call(null,seq__104853_104867__$1);
var G__104875 = null;
var G__104876 = (0);
var G__104877 = (0);
seq__104853_104857 = G__104874;
chunk__104854_104858 = G__104875;
count__104855_104859 = G__104876;
i__104856_104860 = G__104877;
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
;})(ctx,vec__104850,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__104880,r){var vec__104881 = p__104880;var la = cljs.core.nth.call(null,vec__104881,(0),null);var _ = cljs.core.nthnext.call(null,vec__104881,(1));var all = vec__104881;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__104882_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__104882_SHARP_) / cljs.core.count.call(null,p1__104882_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__104888){var vec__104889 = p__104888;var s = cljs.core.nth.call(null,vec__104889,(0),null);var t = cljs.core.nth.call(null,vec__104889,(1),null);var b = cljs.core.nth.call(null,vec__104889,(2),null);var e = cljs.core.nth.call(null,vec__104889,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__104883_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__104883_SHARP_) / cljs.core.count.call(null,p1__104883_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__104890){var vec__104891 = p__104890;var s = cljs.core.nth.call(null,vec__104891,(0),null);var t = cljs.core.nth.call(null,vec__104891,(1),null);var b = cljs.core.nth.call(null,vec__104891,(2),null);var e = cljs.core.nth.call(null,vec__104891,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__104893 = line;var start = cljs.core.nth.call(null,vec__104893,(0),null);var top = cljs.core.nth.call(null,vec__104893,(1),null);var bottom = cljs.core.nth.call(null,vec__104893,(2),null);var end = cljs.core.nth.call(null,vec__104893,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
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
{var stock = temp__4124__auto__;return brain;
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
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__104894){var vec__104895 = p__104894;var start_price = cljs.core.nth.call(null,vec__104895,(0),null);var _ = cljs.core.nth.call(null,vec__104895,(1),null);var ___$1 = cljs.core.nth.call(null,vec__104895,(2),null);var ___$2 = cljs.core.nth.call(null,vec__104895,(3),null);var line = vec__104895;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,info){return cljs.core.merge.call(null,test.stock2.prepare.call(null,null,info),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.list(cljs.core.list(cljs.core.list(3.0309727609504122,0.8958129837134047,1.5035815277093234,0.9456629358188376,1.3576705137689733,1.2631671445866242),cljs.core.list(-0.31085424118702176,0.9340874822881315,0.5655820779573415,0.7585836548894886,0.06611942477303065,0.7940467160731797),cljs.core.list(2.850307140147388,1.0756956641941802,1.5538502140350114,0.7274314323819675,1.5567211797840368,0.729486094825665),cljs.core.list(2.2728224695552925,1.2083236755399938,1.0223688933595008,0.7836758956375489,1.054595369712162,0.5593937540954879),cljs.core.list(3.0218162878485093,1.0503652785565414,1.604135048169243,1.2388330537952215,1.221090407169956,0.8350244798358218)),cljs.core.list(cljs.core.list(5.301581267749204,3.3609868593366343,-0.7394149388296283,3.0376961047533566,2.256700046977792,3.389521210235661)))], null));
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,p__104896,line){var map__104897 = p__104896;var map__104897__$1 = ((cljs.core.seq_QMARK_.call(null,map__104897))?cljs.core.apply.call(null,cljs.core.hash_map,map__104897):map__104897);var brain = map__104897__$1;var ws = cljs.core.get.call(null,map__104897__$1,new cljs.core.Keyword(null,"ws","ws",86841443));var info = cljs.core.get.call(null,map__104897__$1,new cljs.core.Keyword(null,"info","info",-317069002));var lines = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,line),info);var recent_lines = cljs.core.take_last.call(null,(5),lines);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,recent_lines),(5)))
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
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__104904){var vec__104905 = p__104904;var act = cljs.core.nth.call(null,vec__104905,(0),null);var vec__104906 = cljs.core.nth.call(null,vec__104905,(1),null);var start_price = cljs.core.nth.call(null,vec__104906,(0),null);var _ = cljs.core.nthnext.call(null,vec__104906,(1));var line = vec__104906;var step = vec__104905;var pred__104907 = cljs.core._EQ_;var expr__104908 = act;if(cljs.core.truth_(pred__104907.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__104908)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__104907.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__104908)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (((5) * (4)) * (12));var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var avg1 = test.stock2.average.call(null,info,(1));var map__104911 = test.stock2.play.call(null,new cljs.core.Keyword(null,"ann1","ann1",-999246990),info);var map__104911__$1 = ((cljs.core.seq_QMARK_.call(null,map__104911))?cljs.core.apply.call(null,cljs.core.hash_map,map__104911):map__104911);var brain = map__104911__$1;var step = cljs.core.get.call(null,map__104911__$1,new cljs.core.Keyword(null,"step","step",1288888124));test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg1], null)], null));
return null;
});
test.stock2.test_play.call(null);
