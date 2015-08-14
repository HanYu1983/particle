// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock3');
goog.require('cljs.core');
test.stock3.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__12648_SHARP_){return cljs.core.nth.call(null,p1__12648_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__12649_SHARP_){return cljs.core.nth.call(null,p1__12649_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock3.draw_bias = (function draw_bias(ctx,w,h,info,color,bias){var vec__12657 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__12657,(0),null);var min_v = cljs.core.nth.call(null,vec__12657,(1),null);var offset_v = cljs.core.nth.call(null,vec__12657,(2),null);var offset_x = cljs.core.nth.call(null,vec__12657,(3),null);var pos_y = cljs.core.nth.call(null,vec__12657,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__12658 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12657,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__12664__delegate = function (args){return args;
};
var G__12664 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12664__delegate.call(this,args);};
G__12664.cljs$lang$maxFixedArity = 0;
G__12664.cljs$lang$applyTo = (function (arglist__12665){
var args = cljs.core.seq(arglist__12665);
return G__12664__delegate(args);
});
G__12664.cljs$core$IFn$_invoke$arity$variadic = G__12664__delegate;
return G__12664;
})()
;})(vec__12657,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,bias))),bias,cljs.core.drop.call(null,(1),bias)));var chunk__12659 = null;var count__12660 = (0);var i__12661 = (0);while(true){
if((i__12661 < count__12660))
{var vec__12662 = cljs.core._nth.call(null,chunk__12659,i__12661);var idx = cljs.core.nth.call(null,vec__12662,(0),null);var prev = cljs.core.nth.call(null,vec__12662,(1),null);var curr = cljs.core.nth.call(null,vec__12662,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__12666 = seq__12658;
var G__12667 = chunk__12659;
var G__12668 = count__12660;
var G__12669 = (i__12661 + (1));
seq__12658 = G__12666;
chunk__12659 = G__12667;
count__12660 = G__12668;
i__12661 = G__12669;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12658);if(temp__4126__auto__)
{var seq__12658__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12658__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12658__$1);{
var G__12670 = cljs.core.chunk_rest.call(null,seq__12658__$1);
var G__12671 = c__4307__auto__;
var G__12672 = cljs.core.count.call(null,c__4307__auto__);
var G__12673 = (0);
seq__12658 = G__12670;
chunk__12659 = G__12671;
count__12660 = G__12672;
i__12661 = G__12673;
continue;
}
} else
{var vec__12663 = cljs.core.first.call(null,seq__12658__$1);var idx = cljs.core.nth.call(null,vec__12663,(0),null);var prev = cljs.core.nth.call(null,vec__12663,(1),null);var curr = cljs.core.nth.call(null,vec__12663,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__12674 = cljs.core.next.call(null,seq__12658__$1);
var G__12675 = null;
var G__12676 = (0);
var G__12677 = (0);
seq__12658 = G__12674;
chunk__12659 = G__12675;
count__12660 = G__12676;
i__12661 = G__12677;
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
test.stock3.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__12685 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__12685,(0),null);var min_v = cljs.core.nth.call(null,vec__12685,(1),null);var offset_v = cljs.core.nth.call(null,vec__12685,(2),null);var offset_x = cljs.core.nth.call(null,vec__12685,(3),null);var pos_y = cljs.core.nth.call(null,vec__12685,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__12686 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12685,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__12692__delegate = function (args){return args;
};
var G__12692 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12692__delegate.call(this,args);};
G__12692.cljs$lang$maxFixedArity = 0;
G__12692.cljs$lang$applyTo = (function (arglist__12693){
var args = cljs.core.seq(arglist__12693);
return G__12692__delegate(args);
});
G__12692.cljs$core$IFn$_invoke$arity$variadic = G__12692__delegate;
return G__12692;
})()
;})(vec__12685,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__12687 = null;var count__12688 = (0);var i__12689 = (0);while(true){
if((i__12689 < count__12688))
{var vec__12690 = cljs.core._nth.call(null,chunk__12687,i__12689);var idx = cljs.core.nth.call(null,vec__12690,(0),null);var prev = cljs.core.nth.call(null,vec__12690,(1),null);var curr = cljs.core.nth.call(null,vec__12690,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__12694 = seq__12686;
var G__12695 = chunk__12687;
var G__12696 = count__12688;
var G__12697 = (i__12689 + (1));
seq__12686 = G__12694;
chunk__12687 = G__12695;
count__12688 = G__12696;
i__12689 = G__12697;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12686);if(temp__4126__auto__)
{var seq__12686__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12686__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12686__$1);{
var G__12698 = cljs.core.chunk_rest.call(null,seq__12686__$1);
var G__12699 = c__4307__auto__;
var G__12700 = cljs.core.count.call(null,c__4307__auto__);
var G__12701 = (0);
seq__12686 = G__12698;
chunk__12687 = G__12699;
count__12688 = G__12700;
i__12689 = G__12701;
continue;
}
} else
{var vec__12691 = cljs.core.first.call(null,seq__12686__$1);var idx = cljs.core.nth.call(null,vec__12691,(0),null);var prev = cljs.core.nth.call(null,vec__12691,(1),null);var curr = cljs.core.nth.call(null,vec__12691,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__12702 = cljs.core.next.call(null,seq__12686__$1);
var G__12703 = null;
var G__12704 = (0);
var G__12705 = (0);
seq__12686 = G__12702;
chunk__12687 = G__12703;
count__12688 = G__12704;
i__12689 = G__12705;
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
test.stock3.draw_line = (function draw_line(ctx,w,h,kline){var vec__12715 = test.stock3.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__12715,(0),null);var min_v = cljs.core.nth.call(null,vec__12715,(1),null);var offset_v = cljs.core.nth.call(null,vec__12715,(2),null);var offset_x = cljs.core.nth.call(null,vec__12715,(3),null);var pos_y = cljs.core.nth.call(null,vec__12715,(4),null);var seq__12716 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12715,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__12724__delegate = function (args){return args;
};
var G__12724 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12724__delegate.call(this,args);};
G__12724.cljs$lang$maxFixedArity = 0;
G__12724.cljs$lang$applyTo = (function (arglist__12725){
var args = cljs.core.seq(arglist__12725);
return G__12724__delegate(args);
});
G__12724.cljs$core$IFn$_invoke$arity$variadic = G__12724__delegate;
return G__12724;
})()
;})(vec__12715,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__12717 = null;var count__12718 = (0);var i__12719 = (0);while(true){
if((i__12719 < count__12718))
{var vec__12720 = cljs.core._nth.call(null,chunk__12717,i__12719);var idx = cljs.core.nth.call(null,vec__12720,(0),null);var vec__12721 = cljs.core.nth.call(null,vec__12720,(1),null);var start = cljs.core.nth.call(null,vec__12721,(0),null);var top = cljs.core.nth.call(null,vec__12721,(1),null);var bottom = cljs.core.nth.call(null,vec__12721,(2),null);var end = cljs.core.nth.call(null,vec__12721,(3),null);(ctx["strokeStyle"] = "black");
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
var G__12726 = seq__12716;
var G__12727 = chunk__12717;
var G__12728 = count__12718;
var G__12729 = (i__12719 + (1));
seq__12716 = G__12726;
chunk__12717 = G__12727;
count__12718 = G__12728;
i__12719 = G__12729;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12716);if(temp__4126__auto__)
{var seq__12716__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12716__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__12716__$1);{
var G__12730 = cljs.core.chunk_rest.call(null,seq__12716__$1);
var G__12731 = c__4307__auto__;
var G__12732 = cljs.core.count.call(null,c__4307__auto__);
var G__12733 = (0);
seq__12716 = G__12730;
chunk__12717 = G__12731;
count__12718 = G__12732;
i__12719 = G__12733;
continue;
}
} else
{var vec__12722 = cljs.core.first.call(null,seq__12716__$1);var idx = cljs.core.nth.call(null,vec__12722,(0),null);var vec__12723 = cljs.core.nth.call(null,vec__12722,(1),null);var start = cljs.core.nth.call(null,vec__12723,(0),null);var top = cljs.core.nth.call(null,vec__12723,(1),null);var bottom = cljs.core.nth.call(null,vec__12723,(2),null);var end = cljs.core.nth.call(null,vec__12723,(3),null);(ctx["strokeStyle"] = "black");
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
var G__12734 = cljs.core.next.call(null,seq__12716__$1);
var G__12735 = null;
var G__12736 = (0);
var G__12737 = (0);
seq__12716 = G__12734;
chunk__12717 = G__12735;
count__12718 = G__12736;
i__12719 = G__12737;
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
test.stock3.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__12753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__12753,(0),null);var h = cljs.core.nth.call(null,vec__12753,(1),null);return ((function (ctx,vec__12753,w,h){
return (function (p__12754){var map__12755 = p__12754;var map__12755__$1 = ((cljs.core.seq_QMARK_.call(null,map__12755))?cljs.core.apply.call(null,cljs.core.hash_map,map__12755):map__12755);var kline = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var avgs = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__12756_12768 = cljs.core.seq.call(null,bias);var chunk__12757_12769 = null;var count__12758_12770 = (0);var i__12759_12771 = (0);while(true){
if((i__12759_12771 < count__12758_12770))
{var vec__12760_12772 = cljs.core._nth.call(null,chunk__12757_12769,i__12759_12771);var bia_cnt_12773 = cljs.core.nth.call(null,vec__12760_12772,(0),null);var bia_12774 = cljs.core.nth.call(null,vec__12760_12772,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_12774);
{
var G__12775 = seq__12756_12768;
var G__12776 = chunk__12757_12769;
var G__12777 = count__12758_12770;
var G__12778 = (i__12759_12771 + (1));
seq__12756_12768 = G__12775;
chunk__12757_12769 = G__12776;
count__12758_12770 = G__12777;
i__12759_12771 = G__12778;
continue;
}
} else
{var temp__4126__auto___12779 = cljs.core.seq.call(null,seq__12756_12768);if(temp__4126__auto___12779)
{var seq__12756_12780__$1 = temp__4126__auto___12779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12756_12780__$1))
{var c__4307__auto___12781 = cljs.core.chunk_first.call(null,seq__12756_12780__$1);{
var G__12782 = cljs.core.chunk_rest.call(null,seq__12756_12780__$1);
var G__12783 = c__4307__auto___12781;
var G__12784 = cljs.core.count.call(null,c__4307__auto___12781);
var G__12785 = (0);
seq__12756_12768 = G__12782;
chunk__12757_12769 = G__12783;
count__12758_12770 = G__12784;
i__12759_12771 = G__12785;
continue;
}
} else
{var vec__12761_12786 = cljs.core.first.call(null,seq__12756_12780__$1);var bia_cnt_12787 = cljs.core.nth.call(null,vec__12761_12786,(0),null);var bia_12788 = cljs.core.nth.call(null,vec__12761_12786,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_12788);
{
var G__12789 = cljs.core.next.call(null,seq__12756_12780__$1);
var G__12790 = null;
var G__12791 = (0);
var G__12792 = (0);
seq__12756_12768 = G__12789;
chunk__12757_12769 = G__12790;
count__12758_12770 = G__12791;
i__12759_12771 = G__12792;
continue;
}
}
} else
{}
}
break;
}
var seq__12762_12793 = cljs.core.seq.call(null,avgs);var chunk__12763_12794 = null;var count__12764_12795 = (0);var i__12765_12796 = (0);while(true){
if((i__12765_12796 < count__12764_12795))
{var vec__12766_12797 = cljs.core._nth.call(null,chunk__12763_12794,i__12765_12796);var avg_cnt_12798 = cljs.core.nth.call(null,vec__12766_12797,(0),null);var avg_12799 = cljs.core.nth.call(null,vec__12766_12797,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_12799);
{
var G__12800 = seq__12762_12793;
var G__12801 = chunk__12763_12794;
var G__12802 = count__12764_12795;
var G__12803 = (i__12765_12796 + (1));
seq__12762_12793 = G__12800;
chunk__12763_12794 = G__12801;
count__12764_12795 = G__12802;
i__12765_12796 = G__12803;
continue;
}
} else
{var temp__4126__auto___12804 = cljs.core.seq.call(null,seq__12762_12793);if(temp__4126__auto___12804)
{var seq__12762_12805__$1 = temp__4126__auto___12804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12762_12805__$1))
{var c__4307__auto___12806 = cljs.core.chunk_first.call(null,seq__12762_12805__$1);{
var G__12807 = cljs.core.chunk_rest.call(null,seq__12762_12805__$1);
var G__12808 = c__4307__auto___12806;
var G__12809 = cljs.core.count.call(null,c__4307__auto___12806);
var G__12810 = (0);
seq__12762_12793 = G__12807;
chunk__12763_12794 = G__12808;
count__12764_12795 = G__12809;
i__12765_12796 = G__12810;
continue;
}
} else
{var vec__12767_12811 = cljs.core.first.call(null,seq__12762_12805__$1);var avg_cnt_12812 = cljs.core.nth.call(null,vec__12767_12811,(0),null);var avg_12813 = cljs.core.nth.call(null,vec__12767_12811,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_12813);
{
var G__12814 = cljs.core.next.call(null,seq__12762_12805__$1);
var G__12815 = null;
var G__12816 = (0);
var G__12817 = (0);
seq__12762_12793 = G__12814;
chunk__12763_12794 = G__12815;
count__12764_12795 = G__12816;
i__12765_12796 = G__12817;
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
;})(ctx,vec__12753,w,h))
});
test.stock3.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__12820,r){var vec__12821 = p__12820;var la = cljs.core.nth.call(null,vec__12821,(0),null);var _ = cljs.core.nthnext.call(null,vec__12821,(1));var all = vec__12821;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock3.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock3.average = (function average(cnt,kline){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__12822_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__12822_SHARP_) / cljs.core.count.call(null,p1__12822_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__12828){var vec__12829 = p__12828;var s = cljs.core.nth.call(null,vec__12829,(0),null);var t = cljs.core.nth.call(null,vec__12829,(1),null);var b = cljs.core.nth.call(null,vec__12829,(2),null);var e = cljs.core.nth.call(null,vec__12829,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__12823_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__12823_SHARP_) / cljs.core.count.call(null,p1__12823_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__12830){var vec__12831 = p__12830;var s = cljs.core.nth.call(null,vec__12831,(0),null);var t = cljs.core.nth.call(null,vec__12831,(1),null);var b = cljs.core.nth.call(null,vec__12831,(2),null);var e = cljs.core.nth.call(null,vec__12831,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock3.bias = (function bias(cnt,kline){var avg = test.stock3.average.call(null,cnt,kline);var vs = cljs.core.map.call(null,((function (avg){
return (function (avg_v,p__12834){var vec__12835 = p__12834;var _ = cljs.core.nth.call(null,vec__12835,(0),null);var ___$1 = cljs.core.nth.call(null,vec__12835,(1),null);var ___$2 = cljs.core.nth.call(null,vec__12835,(2),null);var e = cljs.core.nth.call(null,vec__12835,(3),null);var line = vec__12835;if(cljs.core._EQ_.call(null,(-1),avg_v))
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
