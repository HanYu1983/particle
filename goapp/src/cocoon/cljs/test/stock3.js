// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock3');
goog.require('cljs.core');
test.stock3.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__14595_SHARP_){return cljs.core.nth.call(null,p1__14595_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__14596_SHARP_){return cljs.core.nth.call(null,p1__14596_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock3.draw_bias = (function draw_bias(ctx,w,h,info,color,bias){var vec__14604 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14604,(0),null);var min_v = cljs.core.nth.call(null,vec__14604,(1),null);var offset_v = cljs.core.nth.call(null,vec__14604,(2),null);var offset_x = cljs.core.nth.call(null,vec__14604,(3),null);var pos_y = cljs.core.nth.call(null,vec__14604,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__14605 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14604,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14611__delegate = function (args){return args;
};
var G__14611 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14611__delegate.call(this,args);};
G__14611.cljs$lang$maxFixedArity = 0;
G__14611.cljs$lang$applyTo = (function (arglist__14612){
var args = cljs.core.seq(arglist__14612);
return G__14611__delegate(args);
});
G__14611.cljs$core$IFn$_invoke$arity$variadic = G__14611__delegate;
return G__14611;
})()
;})(vec__14604,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,bias))),bias,cljs.core.drop.call(null,(1),bias)));var chunk__14606 = null;var count__14607 = (0);var i__14608 = (0);while(true){
if((i__14608 < count__14607))
{var vec__14609 = cljs.core._nth.call(null,chunk__14606,i__14608);var idx = cljs.core.nth.call(null,vec__14609,(0),null);var prev = cljs.core.nth.call(null,vec__14609,(1),null);var curr = cljs.core.nth.call(null,vec__14609,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__14613 = seq__14605;
var G__14614 = chunk__14606;
var G__14615 = count__14607;
var G__14616 = (i__14608 + (1));
seq__14605 = G__14613;
chunk__14606 = G__14614;
count__14607 = G__14615;
i__14608 = G__14616;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14605);if(temp__4126__auto__)
{var seq__14605__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14605__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14605__$1);{
var G__14617 = cljs.core.chunk_rest.call(null,seq__14605__$1);
var G__14618 = c__4307__auto__;
var G__14619 = cljs.core.count.call(null,c__4307__auto__);
var G__14620 = (0);
seq__14605 = G__14617;
chunk__14606 = G__14618;
count__14607 = G__14619;
i__14608 = G__14620;
continue;
}
} else
{var vec__14610 = cljs.core.first.call(null,seq__14605__$1);var idx = cljs.core.nth.call(null,vec__14610,(0),null);var prev = cljs.core.nth.call(null,vec__14610,(1),null);var curr = cljs.core.nth.call(null,vec__14610,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),(((-1) * h) * (prev - 0.5)));
ctx.lineTo((offset_x * (idx + (1))),(((-1) * h) * (curr - 0.5)));
} else
{}
ctx.stroke();
{
var G__14621 = cljs.core.next.call(null,seq__14605__$1);
var G__14622 = null;
var G__14623 = (0);
var G__14624 = (0);
seq__14605 = G__14621;
chunk__14606 = G__14622;
count__14607 = G__14623;
i__14608 = G__14624;
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
test.stock3.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__14632 = test.stock3.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14632,(0),null);var min_v = cljs.core.nth.call(null,vec__14632,(1),null);var offset_v = cljs.core.nth.call(null,vec__14632,(2),null);var offset_x = cljs.core.nth.call(null,vec__14632,(3),null);var pos_y = cljs.core.nth.call(null,vec__14632,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__14633 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14632,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14639__delegate = function (args){return args;
};
var G__14639 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14639__delegate.call(this,args);};
G__14639.cljs$lang$maxFixedArity = 0;
G__14639.cljs$lang$applyTo = (function (arglist__14640){
var args = cljs.core.seq(arglist__14640);
return G__14639__delegate(args);
});
G__14639.cljs$core$IFn$_invoke$arity$variadic = G__14639__delegate;
return G__14639;
})()
;})(vec__14632,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__14634 = null;var count__14635 = (0);var i__14636 = (0);while(true){
if((i__14636 < count__14635))
{var vec__14637 = cljs.core._nth.call(null,chunk__14634,i__14636);var idx = cljs.core.nth.call(null,vec__14637,(0),null);var prev = cljs.core.nth.call(null,vec__14637,(1),null);var curr = cljs.core.nth.call(null,vec__14637,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14641 = seq__14633;
var G__14642 = chunk__14634;
var G__14643 = count__14635;
var G__14644 = (i__14636 + (1));
seq__14633 = G__14641;
chunk__14634 = G__14642;
count__14635 = G__14643;
i__14636 = G__14644;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14633);if(temp__4126__auto__)
{var seq__14633__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14633__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14633__$1);{
var G__14645 = cljs.core.chunk_rest.call(null,seq__14633__$1);
var G__14646 = c__4307__auto__;
var G__14647 = cljs.core.count.call(null,c__4307__auto__);
var G__14648 = (0);
seq__14633 = G__14645;
chunk__14634 = G__14646;
count__14635 = G__14647;
i__14636 = G__14648;
continue;
}
} else
{var vec__14638 = cljs.core.first.call(null,seq__14633__$1);var idx = cljs.core.nth.call(null,vec__14638,(0),null);var prev = cljs.core.nth.call(null,vec__14638,(1),null);var curr = cljs.core.nth.call(null,vec__14638,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14649 = cljs.core.next.call(null,seq__14633__$1);
var G__14650 = null;
var G__14651 = (0);
var G__14652 = (0);
seq__14633 = G__14649;
chunk__14634 = G__14650;
count__14635 = G__14651;
i__14636 = G__14652;
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
test.stock3.draw_line = (function draw_line(ctx,w,h,kline){var vec__14662 = test.stock3.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__14662,(0),null);var min_v = cljs.core.nth.call(null,vec__14662,(1),null);var offset_v = cljs.core.nth.call(null,vec__14662,(2),null);var offset_x = cljs.core.nth.call(null,vec__14662,(3),null);var pos_y = cljs.core.nth.call(null,vec__14662,(4),null);var seq__14663 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14662,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14671__delegate = function (args){return args;
};
var G__14671 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14671__delegate.call(this,args);};
G__14671.cljs$lang$maxFixedArity = 0;
G__14671.cljs$lang$applyTo = (function (arglist__14672){
var args = cljs.core.seq(arglist__14672);
return G__14671__delegate(args);
});
G__14671.cljs$core$IFn$_invoke$arity$variadic = G__14671__delegate;
return G__14671;
})()
;})(vec__14662,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__14664 = null;var count__14665 = (0);var i__14666 = (0);while(true){
if((i__14666 < count__14665))
{var vec__14667 = cljs.core._nth.call(null,chunk__14664,i__14666);var idx = cljs.core.nth.call(null,vec__14667,(0),null);var vec__14668 = cljs.core.nth.call(null,vec__14667,(1),null);var start = cljs.core.nth.call(null,vec__14668,(0),null);var top = cljs.core.nth.call(null,vec__14668,(1),null);var bottom = cljs.core.nth.call(null,vec__14668,(2),null);var end = cljs.core.nth.call(null,vec__14668,(3),null);(ctx["strokeStyle"] = "black");
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
var G__14673 = seq__14663;
var G__14674 = chunk__14664;
var G__14675 = count__14665;
var G__14676 = (i__14666 + (1));
seq__14663 = G__14673;
chunk__14664 = G__14674;
count__14665 = G__14675;
i__14666 = G__14676;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14663);if(temp__4126__auto__)
{var seq__14663__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14663__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14663__$1);{
var G__14677 = cljs.core.chunk_rest.call(null,seq__14663__$1);
var G__14678 = c__4307__auto__;
var G__14679 = cljs.core.count.call(null,c__4307__auto__);
var G__14680 = (0);
seq__14663 = G__14677;
chunk__14664 = G__14678;
count__14665 = G__14679;
i__14666 = G__14680;
continue;
}
} else
{var vec__14669 = cljs.core.first.call(null,seq__14663__$1);var idx = cljs.core.nth.call(null,vec__14669,(0),null);var vec__14670 = cljs.core.nth.call(null,vec__14669,(1),null);var start = cljs.core.nth.call(null,vec__14670,(0),null);var top = cljs.core.nth.call(null,vec__14670,(1),null);var bottom = cljs.core.nth.call(null,vec__14670,(2),null);var end = cljs.core.nth.call(null,vec__14670,(3),null);(ctx["strokeStyle"] = "black");
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
var G__14681 = cljs.core.next.call(null,seq__14663__$1);
var G__14682 = null;
var G__14683 = (0);
var G__14684 = (0);
seq__14663 = G__14681;
chunk__14664 = G__14682;
count__14665 = G__14683;
i__14666 = G__14684;
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
test.stock3.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__14700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__14700,(0),null);var h = cljs.core.nth.call(null,vec__14700,(1),null);return ((function (ctx,vec__14700,w,h){
return (function (p__14701){var map__14702 = p__14701;var map__14702__$1 = ((cljs.core.seq_QMARK_.call(null,map__14702))?cljs.core.apply.call(null,cljs.core.hash_map,map__14702):map__14702);var kline = cljs.core.get.call(null,map__14702__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var avgs = cljs.core.get.call(null,map__14702__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__14702__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__14703_14715 = cljs.core.seq.call(null,bias);var chunk__14704_14716 = null;var count__14705_14717 = (0);var i__14706_14718 = (0);while(true){
if((i__14706_14718 < count__14705_14717))
{var vec__14707_14719 = cljs.core._nth.call(null,chunk__14704_14716,i__14706_14718);var bia_cnt_14720 = cljs.core.nth.call(null,vec__14707_14719,(0),null);var bia_14721 = cljs.core.nth.call(null,vec__14707_14719,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_14721);
{
var G__14722 = seq__14703_14715;
var G__14723 = chunk__14704_14716;
var G__14724 = count__14705_14717;
var G__14725 = (i__14706_14718 + (1));
seq__14703_14715 = G__14722;
chunk__14704_14716 = G__14723;
count__14705_14717 = G__14724;
i__14706_14718 = G__14725;
continue;
}
} else
{var temp__4126__auto___14726 = cljs.core.seq.call(null,seq__14703_14715);if(temp__4126__auto___14726)
{var seq__14703_14727__$1 = temp__4126__auto___14726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14703_14727__$1))
{var c__4307__auto___14728 = cljs.core.chunk_first.call(null,seq__14703_14727__$1);{
var G__14729 = cljs.core.chunk_rest.call(null,seq__14703_14727__$1);
var G__14730 = c__4307__auto___14728;
var G__14731 = cljs.core.count.call(null,c__4307__auto___14728);
var G__14732 = (0);
seq__14703_14715 = G__14729;
chunk__14704_14716 = G__14730;
count__14705_14717 = G__14731;
i__14706_14718 = G__14732;
continue;
}
} else
{var vec__14708_14733 = cljs.core.first.call(null,seq__14703_14727__$1);var bia_cnt_14734 = cljs.core.nth.call(null,vec__14708_14733,(0),null);var bia_14735 = cljs.core.nth.call(null,vec__14708_14733,(1),null);test.stock3.draw_bias.call(null,ctx,w,h,kline,"#aaaaaa",bia_14735);
{
var G__14736 = cljs.core.next.call(null,seq__14703_14727__$1);
var G__14737 = null;
var G__14738 = (0);
var G__14739 = (0);
seq__14703_14715 = G__14736;
chunk__14704_14716 = G__14737;
count__14705_14717 = G__14738;
i__14706_14718 = G__14739;
continue;
}
}
} else
{}
}
break;
}
var seq__14709_14740 = cljs.core.seq.call(null,avgs);var chunk__14710_14741 = null;var count__14711_14742 = (0);var i__14712_14743 = (0);while(true){
if((i__14712_14743 < count__14711_14742))
{var vec__14713_14744 = cljs.core._nth.call(null,chunk__14710_14741,i__14712_14743);var avg_cnt_14745 = cljs.core.nth.call(null,vec__14713_14744,(0),null);var avg_14746 = cljs.core.nth.call(null,vec__14713_14744,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_14746);
{
var G__14747 = seq__14709_14740;
var G__14748 = chunk__14710_14741;
var G__14749 = count__14711_14742;
var G__14750 = (i__14712_14743 + (1));
seq__14709_14740 = G__14747;
chunk__14710_14741 = G__14748;
count__14711_14742 = G__14749;
i__14712_14743 = G__14750;
continue;
}
} else
{var temp__4126__auto___14751 = cljs.core.seq.call(null,seq__14709_14740);if(temp__4126__auto___14751)
{var seq__14709_14752__$1 = temp__4126__auto___14751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14709_14752__$1))
{var c__4307__auto___14753 = cljs.core.chunk_first.call(null,seq__14709_14752__$1);{
var G__14754 = cljs.core.chunk_rest.call(null,seq__14709_14752__$1);
var G__14755 = c__4307__auto___14753;
var G__14756 = cljs.core.count.call(null,c__4307__auto___14753);
var G__14757 = (0);
seq__14709_14740 = G__14754;
chunk__14710_14741 = G__14755;
count__14711_14742 = G__14756;
i__14712_14743 = G__14757;
continue;
}
} else
{var vec__14714_14758 = cljs.core.first.call(null,seq__14709_14752__$1);var avg_cnt_14759 = cljs.core.nth.call(null,vec__14714_14758,(0),null);var avg_14760 = cljs.core.nth.call(null,vec__14714_14758,(1),null);test.stock3.draw_avg.call(null,ctx,w,h,kline,"#aaaaaa",avg_14760);
{
var G__14761 = cljs.core.next.call(null,seq__14709_14752__$1);
var G__14762 = null;
var G__14763 = (0);
var G__14764 = (0);
seq__14709_14740 = G__14761;
chunk__14710_14741 = G__14762;
count__14711_14742 = G__14763;
i__14712_14743 = G__14764;
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
;})(ctx,vec__14700,w,h))
});
test.stock3.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__14767,r){var vec__14768 = p__14767;var la = cljs.core.nth.call(null,vec__14768,(0),null);var _ = cljs.core.nthnext.call(null,vec__14768,(1));var all = vec__14768;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock3.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock3.average = (function average(cnt,kline){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__14769_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14769_SHARP_) / cljs.core.count.call(null,p1__14769_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__14775){var vec__14776 = p__14775;var s = cljs.core.nth.call(null,vec__14776,(0),null);var t = cljs.core.nth.call(null,vec__14776,(1),null);var b = cljs.core.nth.call(null,vec__14776,(2),null);var e = cljs.core.nth.call(null,vec__14776,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14770_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14770_SHARP_) / cljs.core.count.call(null,p1__14770_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__14777){var vec__14778 = p__14777;var s = cljs.core.nth.call(null,vec__14778,(0),null);var t = cljs.core.nth.call(null,vec__14778,(1),null);var b = cljs.core.nth.call(null,vec__14778,(2),null);var e = cljs.core.nth.call(null,vec__14778,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock3.bias = (function bias(cnt,kline){var avg = test.stock3.average.call(null,cnt,kline);var vs = cljs.core.map.call(null,((function (avg){
return (function (avg_v,p__14781){var vec__14782 = p__14781;var _ = cljs.core.nth.call(null,vec__14782,(0),null);var ___$1 = cljs.core.nth.call(null,vec__14782,(1),null);var ___$2 = cljs.core.nth.call(null,vec__14782,(2),null);var e = cljs.core.nth.call(null,vec__14782,(3),null);var line = vec__14782;if(cljs.core._EQ_.call(null,(-1),avg_v))
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
