// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__101690_SHARP_){return cljs.core.nth.call(null,p1__101690_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__101691_SHARP_){return cljs.core.nth.call(null,p1__101691_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__101699 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__101699,(0),null);var min_v = cljs.core.nth.call(null,vec__101699,(1),null);var offset_v = cljs.core.nth.call(null,vec__101699,(2),null);var offset_x = cljs.core.nth.call(null,vec__101699,(3),null);var pos_y = cljs.core.nth.call(null,vec__101699,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__101700_101706 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101699,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__101710__delegate = function (args){return args;
};
var G__101710 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101710__delegate.call(this,args);};
G__101710.cljs$lang$maxFixedArity = 0;
G__101710.cljs$lang$applyTo = (function (arglist__101711){
var args = cljs.core.seq(arglist__101711);
return G__101710__delegate(args);
});
G__101710.cljs$core$IFn$_invoke$arity$variadic = G__101710__delegate;
return G__101710;
})()
;})(vec__101699,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__101701_101707 = null;var count__101702_101708 = (0);var i__101703_101709 = (0);while(true){
if((i__101703_101709 < count__101702_101708))
{var vec__101704_101712 = cljs.core._nth.call(null,chunk__101701_101707,i__101703_101709);var idx_101713 = cljs.core.nth.call(null,vec__101704_101712,(0),null);var prev_101714 = cljs.core.nth.call(null,vec__101704_101712,(1),null);var curr_101715 = cljs.core.nth.call(null,vec__101704_101712,(2),null);if((typeof prev_101714 === 'number') && (typeof curr_101715 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_101713 * offset_x),(((1) - prev_101714) * h));
ctx.lineTo(((idx_101713 + (1)) * offset_x),(((1) - curr_101715) * h));
ctx.stroke();
} else
{}
{
var G__101716 = seq__101700_101706;
var G__101717 = chunk__101701_101707;
var G__101718 = count__101702_101708;
var G__101719 = (i__101703_101709 + (1));
seq__101700_101706 = G__101716;
chunk__101701_101707 = G__101717;
count__101702_101708 = G__101718;
i__101703_101709 = G__101719;
continue;
}
} else
{var temp__4126__auto___101720 = cljs.core.seq.call(null,seq__101700_101706);if(temp__4126__auto___101720)
{var seq__101700_101721__$1 = temp__4126__auto___101720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101700_101721__$1))
{var c__4307__auto___101722 = cljs.core.chunk_first.call(null,seq__101700_101721__$1);{
var G__101723 = cljs.core.chunk_rest.call(null,seq__101700_101721__$1);
var G__101724 = c__4307__auto___101722;
var G__101725 = cljs.core.count.call(null,c__4307__auto___101722);
var G__101726 = (0);
seq__101700_101706 = G__101723;
chunk__101701_101707 = G__101724;
count__101702_101708 = G__101725;
i__101703_101709 = G__101726;
continue;
}
} else
{var vec__101705_101727 = cljs.core.first.call(null,seq__101700_101721__$1);var idx_101728 = cljs.core.nth.call(null,vec__101705_101727,(0),null);var prev_101729 = cljs.core.nth.call(null,vec__101705_101727,(1),null);var curr_101730 = cljs.core.nth.call(null,vec__101705_101727,(2),null);if((typeof prev_101729 === 'number') && (typeof curr_101730 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_101728 * offset_x),(((1) - prev_101729) * h));
ctx.lineTo(((idx_101728 + (1)) * offset_x),(((1) - curr_101730) * h));
ctx.stroke();
} else
{}
{
var G__101731 = cljs.core.next.call(null,seq__101700_101721__$1);
var G__101732 = null;
var G__101733 = (0);
var G__101734 = (0);
seq__101700_101706 = G__101731;
chunk__101701_101707 = G__101732;
count__101702_101708 = G__101733;
i__101703_101709 = G__101734;
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
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__101746 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__101746,(0),null);var min_v = cljs.core.nth.call(null,vec__101746,(1),null);var offset_v = cljs.core.nth.call(null,vec__101746,(2),null);var offset_x = cljs.core.nth.call(null,vec__101746,(3),null);var pos_y = cljs.core.nth.call(null,vec__101746,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__101747_101757 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101746,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__101761__delegate = function (args){return args;
};
var G__101761 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101761__delegate.call(this,args);};
G__101761.cljs$lang$maxFixedArity = 0;
G__101761.cljs$lang$applyTo = (function (arglist__101762){
var args = cljs.core.seq(arglist__101762);
return G__101761__delegate(args);
});
G__101761.cljs$core$IFn$_invoke$arity$variadic = G__101761__delegate;
return G__101761;
})()
;})(vec__101746,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__101748_101758 = null;var count__101749_101759 = (0);var i__101750_101760 = (0);while(true){
if((i__101750_101760 < count__101749_101759))
{var vec__101751_101763 = cljs.core._nth.call(null,chunk__101748_101758,i__101750_101760);var idx_101764 = cljs.core.nth.call(null,vec__101751_101763,(0),null);var vec__101752_101765 = cljs.core.nth.call(null,vec__101751_101763,(1),null);var avg_101766 = cljs.core.nth.call(null,vec__101752_101765,(0),null);var sd_v_101767 = cljs.core.nth.call(null,vec__101752_101765,(1),null);var vec__101753_101768 = cljs.core.nth.call(null,vec__101751_101763,(2),null);var __101769 = cljs.core.nth.call(null,vec__101753_101768,(0),null);var __101770__$1 = cljs.core.nth.call(null,vec__101753_101768,(1),null);var __101771__$2 = cljs.core.nth.call(null,vec__101753_101768,(2),null);var __101772__$3 = cljs.core.nth.call(null,vec__101753_101768,(3),null);var close_101773 = cljs.core.nth.call(null,vec__101753_101768,(4),null);var __101774__$4 = cljs.core.nth.call(null,vec__101753_101768,(5),null);(ctx["strokeStyle"] = (((avg_101766 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_101764 * offset_x),pos_y.call(null,(avg_101766 + close_101773)));
ctx.lineTo(((idx_101764 + (1)) * offset_x),pos_y.call(null,(avg_101766 + close_101773)));
ctx.stroke();
ctx.moveTo((idx_101764 * offset_x),pos_y.call(null,(((avg_101766 + close_101773) + sd_v_101767) + sd_v_101767)));
ctx.lineTo(((idx_101764 + (1)) * offset_x),pos_y.call(null,(((avg_101766 + close_101773) + sd_v_101767) + sd_v_101767)));
ctx.stroke();
ctx.moveTo((idx_101764 * offset_x),pos_y.call(null,(((avg_101766 + close_101773) - sd_v_101767) - sd_v_101767)));
ctx.lineTo(((idx_101764 + (1)) * offset_x),pos_y.call(null,(((avg_101766 + close_101773) - sd_v_101767) - sd_v_101767)));
ctx.stroke();
{
var G__101775 = seq__101747_101757;
var G__101776 = chunk__101748_101758;
var G__101777 = count__101749_101759;
var G__101778 = (i__101750_101760 + (1));
seq__101747_101757 = G__101775;
chunk__101748_101758 = G__101776;
count__101749_101759 = G__101777;
i__101750_101760 = G__101778;
continue;
}
} else
{var temp__4126__auto___101779 = cljs.core.seq.call(null,seq__101747_101757);if(temp__4126__auto___101779)
{var seq__101747_101780__$1 = temp__4126__auto___101779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101747_101780__$1))
{var c__4307__auto___101781 = cljs.core.chunk_first.call(null,seq__101747_101780__$1);{
var G__101782 = cljs.core.chunk_rest.call(null,seq__101747_101780__$1);
var G__101783 = c__4307__auto___101781;
var G__101784 = cljs.core.count.call(null,c__4307__auto___101781);
var G__101785 = (0);
seq__101747_101757 = G__101782;
chunk__101748_101758 = G__101783;
count__101749_101759 = G__101784;
i__101750_101760 = G__101785;
continue;
}
} else
{var vec__101754_101786 = cljs.core.first.call(null,seq__101747_101780__$1);var idx_101787 = cljs.core.nth.call(null,vec__101754_101786,(0),null);var vec__101755_101788 = cljs.core.nth.call(null,vec__101754_101786,(1),null);var avg_101789 = cljs.core.nth.call(null,vec__101755_101788,(0),null);var sd_v_101790 = cljs.core.nth.call(null,vec__101755_101788,(1),null);var vec__101756_101791 = cljs.core.nth.call(null,vec__101754_101786,(2),null);var __101792 = cljs.core.nth.call(null,vec__101756_101791,(0),null);var __101793__$1 = cljs.core.nth.call(null,vec__101756_101791,(1),null);var __101794__$2 = cljs.core.nth.call(null,vec__101756_101791,(2),null);var __101795__$3 = cljs.core.nth.call(null,vec__101756_101791,(3),null);var close_101796 = cljs.core.nth.call(null,vec__101756_101791,(4),null);var __101797__$4 = cljs.core.nth.call(null,vec__101756_101791,(5),null);(ctx["strokeStyle"] = (((avg_101789 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_101787 * offset_x),pos_y.call(null,(avg_101789 + close_101796)));
ctx.lineTo(((idx_101787 + (1)) * offset_x),pos_y.call(null,(avg_101789 + close_101796)));
ctx.stroke();
ctx.moveTo((idx_101787 * offset_x),pos_y.call(null,(((avg_101789 + close_101796) + sd_v_101790) + sd_v_101790)));
ctx.lineTo(((idx_101787 + (1)) * offset_x),pos_y.call(null,(((avg_101789 + close_101796) + sd_v_101790) + sd_v_101790)));
ctx.stroke();
ctx.moveTo((idx_101787 * offset_x),pos_y.call(null,(((avg_101789 + close_101796) - sd_v_101790) - sd_v_101790)));
ctx.lineTo(((idx_101787 + (1)) * offset_x),pos_y.call(null,(((avg_101789 + close_101796) - sd_v_101790) - sd_v_101790)));
ctx.stroke();
{
var G__101798 = cljs.core.next.call(null,seq__101747_101780__$1);
var G__101799 = null;
var G__101800 = (0);
var G__101801 = (0);
seq__101747_101757 = G__101798;
chunk__101748_101758 = G__101799;
count__101749_101759 = G__101800;
i__101750_101760 = G__101801;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__101809 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__101809,(0),null);var min_v = cljs.core.nth.call(null,vec__101809,(1),null);var offset_v = cljs.core.nth.call(null,vec__101809,(2),null);var offset_x = cljs.core.nth.call(null,vec__101809,(3),null);var pos_y = cljs.core.nth.call(null,vec__101809,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__101810_101816 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101809,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__101820__delegate = function (args){return args;
};
var G__101820 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101820__delegate.call(this,args);};
G__101820.cljs$lang$maxFixedArity = 0;
G__101820.cljs$lang$applyTo = (function (arglist__101821){
var args = cljs.core.seq(arglist__101821);
return G__101820__delegate(args);
});
G__101820.cljs$core$IFn$_invoke$arity$variadic = G__101820__delegate;
return G__101820;
})()
;})(vec__101809,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__101811_101817 = null;var count__101812_101818 = (0);var i__101813_101819 = (0);while(true){
if((i__101813_101819 < count__101812_101818))
{var vec__101814_101822 = cljs.core._nth.call(null,chunk__101811_101817,i__101813_101819);var idx_101823 = cljs.core.nth.call(null,vec__101814_101822,(0),null);var prev_101824 = cljs.core.nth.call(null,vec__101814_101822,(1),null);var curr_101825 = cljs.core.nth.call(null,vec__101814_101822,(2),null);if((typeof prev_101824 === 'number') && (typeof curr_101825 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_101823 * offset_x),pos_y.call(null,prev_101824));
ctx.lineTo(((idx_101823 + (1)) * offset_x),pos_y.call(null,curr_101825));
ctx.stroke();
} else
{}
{
var G__101826 = seq__101810_101816;
var G__101827 = chunk__101811_101817;
var G__101828 = count__101812_101818;
var G__101829 = (i__101813_101819 + (1));
seq__101810_101816 = G__101826;
chunk__101811_101817 = G__101827;
count__101812_101818 = G__101828;
i__101813_101819 = G__101829;
continue;
}
} else
{var temp__4126__auto___101830 = cljs.core.seq.call(null,seq__101810_101816);if(temp__4126__auto___101830)
{var seq__101810_101831__$1 = temp__4126__auto___101830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101810_101831__$1))
{var c__4307__auto___101832 = cljs.core.chunk_first.call(null,seq__101810_101831__$1);{
var G__101833 = cljs.core.chunk_rest.call(null,seq__101810_101831__$1);
var G__101834 = c__4307__auto___101832;
var G__101835 = cljs.core.count.call(null,c__4307__auto___101832);
var G__101836 = (0);
seq__101810_101816 = G__101833;
chunk__101811_101817 = G__101834;
count__101812_101818 = G__101835;
i__101813_101819 = G__101836;
continue;
}
} else
{var vec__101815_101837 = cljs.core.first.call(null,seq__101810_101831__$1);var idx_101838 = cljs.core.nth.call(null,vec__101815_101837,(0),null);var prev_101839 = cljs.core.nth.call(null,vec__101815_101837,(1),null);var curr_101840 = cljs.core.nth.call(null,vec__101815_101837,(2),null);if((typeof prev_101839 === 'number') && (typeof curr_101840 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_101838 * offset_x),pos_y.call(null,prev_101839));
ctx.lineTo(((idx_101838 + (1)) * offset_x),pos_y.call(null,curr_101840));
ctx.stroke();
} else
{}
{
var G__101841 = cljs.core.next.call(null,seq__101810_101831__$1);
var G__101842 = null;
var G__101843 = (0);
var G__101844 = (0);
seq__101810_101816 = G__101841;
chunk__101811_101817 = G__101842;
count__101812_101818 = G__101843;
i__101813_101819 = G__101844;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__101845){var vec__101860 = p__101845;var rsv = cljs.core.nth.call(null,vec__101860,(0),null);var k = cljs.core.nth.call(null,vec__101860,(1),null);var d = cljs.core.nth.call(null,vec__101860,(2),null);var kd = vec__101860;var vec__101861 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__101861,(0),null);var min_v = cljs.core.nth.call(null,vec__101861,(1),null);var offset_v = cljs.core.nth.call(null,vec__101861,(2),null);var offset_x = cljs.core.nth.call(null,vec__101861,(3),null);var pos_y = cljs.core.nth.call(null,vec__101861,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__101862_101874 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101861,max_v,min_v,offset_v,offset_x,pos_y,vec__101860,rsv,k,d,kd){
return (function() { 
var G__101878__delegate = function (args){return args;
};
var G__101878 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101878__delegate.call(this,args);};
G__101878.cljs$lang$maxFixedArity = 0;
G__101878.cljs$lang$applyTo = (function (arglist__101879){
var args = cljs.core.seq(arglist__101879);
return G__101878__delegate(args);
});
G__101878.cljs$core$IFn$_invoke$arity$variadic = G__101878__delegate;
return G__101878;
})()
;})(vec__101861,max_v,min_v,offset_v,offset_x,pos_y,vec__101860,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__101863_101875 = null;var count__101864_101876 = (0);var i__101865_101877 = (0);while(true){
if((i__101865_101877 < count__101864_101876))
{var vec__101866_101880 = cljs.core._nth.call(null,chunk__101863_101875,i__101865_101877);var idx_101881 = cljs.core.nth.call(null,vec__101866_101880,(0),null);var prev_101882 = cljs.core.nth.call(null,vec__101866_101880,(1),null);var curr_101883 = cljs.core.nth.call(null,vec__101866_101880,(2),null);ctx.beginPath();
ctx.moveTo((idx_101881 * offset_x),(((1) - (prev_101882 / (100))) * h));
ctx.lineTo(((idx_101881 + (1)) * offset_x),(((1) - (curr_101883 / (100))) * h));
ctx.stroke();
{
var G__101884 = seq__101862_101874;
var G__101885 = chunk__101863_101875;
var G__101886 = count__101864_101876;
var G__101887 = (i__101865_101877 + (1));
seq__101862_101874 = G__101884;
chunk__101863_101875 = G__101885;
count__101864_101876 = G__101886;
i__101865_101877 = G__101887;
continue;
}
} else
{var temp__4126__auto___101888 = cljs.core.seq.call(null,seq__101862_101874);if(temp__4126__auto___101888)
{var seq__101862_101889__$1 = temp__4126__auto___101888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101862_101889__$1))
{var c__4307__auto___101890 = cljs.core.chunk_first.call(null,seq__101862_101889__$1);{
var G__101891 = cljs.core.chunk_rest.call(null,seq__101862_101889__$1);
var G__101892 = c__4307__auto___101890;
var G__101893 = cljs.core.count.call(null,c__4307__auto___101890);
var G__101894 = (0);
seq__101862_101874 = G__101891;
chunk__101863_101875 = G__101892;
count__101864_101876 = G__101893;
i__101865_101877 = G__101894;
continue;
}
} else
{var vec__101867_101895 = cljs.core.first.call(null,seq__101862_101889__$1);var idx_101896 = cljs.core.nth.call(null,vec__101867_101895,(0),null);var prev_101897 = cljs.core.nth.call(null,vec__101867_101895,(1),null);var curr_101898 = cljs.core.nth.call(null,vec__101867_101895,(2),null);ctx.beginPath();
ctx.moveTo((idx_101896 * offset_x),(((1) - (prev_101897 / (100))) * h));
ctx.lineTo(((idx_101896 + (1)) * offset_x),(((1) - (curr_101898 / (100))) * h));
ctx.stroke();
{
var G__101899 = cljs.core.next.call(null,seq__101862_101889__$1);
var G__101900 = null;
var G__101901 = (0);
var G__101902 = (0);
seq__101862_101874 = G__101899;
chunk__101863_101875 = G__101900;
count__101864_101876 = G__101901;
i__101865_101877 = G__101902;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__101868_101903 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101861,max_v,min_v,offset_v,offset_x,pos_y,vec__101860,rsv,k,d,kd){
return (function() { 
var G__101907__delegate = function (args){return args;
};
var G__101907 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101907__delegate.call(this,args);};
G__101907.cljs$lang$maxFixedArity = 0;
G__101907.cljs$lang$applyTo = (function (arglist__101908){
var args = cljs.core.seq(arglist__101908);
return G__101907__delegate(args);
});
G__101907.cljs$core$IFn$_invoke$arity$variadic = G__101907__delegate;
return G__101907;
})()
;})(vec__101861,max_v,min_v,offset_v,offset_x,pos_y,vec__101860,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__101869_101904 = null;var count__101870_101905 = (0);var i__101871_101906 = (0);while(true){
if((i__101871_101906 < count__101870_101905))
{var vec__101872_101909 = cljs.core._nth.call(null,chunk__101869_101904,i__101871_101906);var idx_101910 = cljs.core.nth.call(null,vec__101872_101909,(0),null);var prev_101911 = cljs.core.nth.call(null,vec__101872_101909,(1),null);var curr_101912 = cljs.core.nth.call(null,vec__101872_101909,(2),null);ctx.beginPath();
ctx.moveTo((idx_101910 * offset_x),(((1) - (prev_101911 / (100))) * h));
ctx.lineTo(((idx_101910 + (1)) * offset_x),(((1) - (curr_101912 / (100))) * h));
ctx.stroke();
{
var G__101913 = seq__101868_101903;
var G__101914 = chunk__101869_101904;
var G__101915 = count__101870_101905;
var G__101916 = (i__101871_101906 + (1));
seq__101868_101903 = G__101913;
chunk__101869_101904 = G__101914;
count__101870_101905 = G__101915;
i__101871_101906 = G__101916;
continue;
}
} else
{var temp__4126__auto___101917 = cljs.core.seq.call(null,seq__101868_101903);if(temp__4126__auto___101917)
{var seq__101868_101918__$1 = temp__4126__auto___101917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101868_101918__$1))
{var c__4307__auto___101919 = cljs.core.chunk_first.call(null,seq__101868_101918__$1);{
var G__101920 = cljs.core.chunk_rest.call(null,seq__101868_101918__$1);
var G__101921 = c__4307__auto___101919;
var G__101922 = cljs.core.count.call(null,c__4307__auto___101919);
var G__101923 = (0);
seq__101868_101903 = G__101920;
chunk__101869_101904 = G__101921;
count__101870_101905 = G__101922;
i__101871_101906 = G__101923;
continue;
}
} else
{var vec__101873_101924 = cljs.core.first.call(null,seq__101868_101918__$1);var idx_101925 = cljs.core.nth.call(null,vec__101873_101924,(0),null);var prev_101926 = cljs.core.nth.call(null,vec__101873_101924,(1),null);var curr_101927 = cljs.core.nth.call(null,vec__101873_101924,(2),null);ctx.beginPath();
ctx.moveTo((idx_101925 * offset_x),(((1) - (prev_101926 / (100))) * h));
ctx.lineTo(((idx_101925 + (1)) * offset_x),(((1) - (curr_101927 / (100))) * h));
ctx.stroke();
{
var G__101928 = cljs.core.next.call(null,seq__101868_101918__$1);
var G__101929 = null;
var G__101930 = (0);
var G__101931 = (0);
seq__101868_101903 = G__101928;
chunk__101869_101904 = G__101929;
count__101870_101905 = G__101930;
i__101871_101906 = G__101931;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__101942 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__101942,(0),null);var min_v = cljs.core.nth.call(null,vec__101942,(1),null);var offset_v = cljs.core.nth.call(null,vec__101942,(2),null);var offset_x = cljs.core.nth.call(null,vec__101942,(3),null);var pos_y = cljs.core.nth.call(null,vec__101942,(4),null);(ctx["fillStyle"] = "black");
var seq__101943 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101942,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__101951__delegate = function (args){return args;
};
var G__101951 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101951__delegate.call(this,args);};
G__101951.cljs$lang$maxFixedArity = 0;
G__101951.cljs$lang$applyTo = (function (arglist__101952){
var args = cljs.core.seq(arglist__101952);
return G__101951__delegate(args);
});
G__101951.cljs$core$IFn$_invoke$arity$variadic = G__101951__delegate;
return G__101951;
})()
;})(vec__101942,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__101944 = null;var count__101945 = (0);var i__101946 = (0);while(true){
if((i__101946 < count__101945))
{var vec__101947 = cljs.core._nth.call(null,chunk__101944,i__101946);var idx = cljs.core.nth.call(null,vec__101947,(0),null);var vec__101948 = cljs.core.nth.call(null,vec__101947,(1),null);var date = cljs.core.nth.call(null,vec__101948,(0),null);var _ = cljs.core.nthnext.call(null,vec__101948,(1));var line = vec__101948;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__101943,chunk__101944,count__101945,i__101946,vec__101947,idx,vec__101948,date,_,line,vec__101942,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__101932_SHARP_){return cljs.core._EQ_.call(null,date,p1__101932_SHARP_);
});})(seq__101943,chunk__101944,count__101945,i__101946,vec__101947,idx,vec__101948,date,_,line,vec__101942,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__101953 = seq__101943;
var G__101954 = chunk__101944;
var G__101955 = count__101945;
var G__101956 = (i__101946 + (1));
seq__101943 = G__101953;
chunk__101944 = G__101954;
count__101945 = G__101955;
i__101946 = G__101956;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__101943);if(temp__4126__auto__)
{var seq__101943__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101943__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__101943__$1);{
var G__101957 = cljs.core.chunk_rest.call(null,seq__101943__$1);
var G__101958 = c__4307__auto__;
var G__101959 = cljs.core.count.call(null,c__4307__auto__);
var G__101960 = (0);
seq__101943 = G__101957;
chunk__101944 = G__101958;
count__101945 = G__101959;
i__101946 = G__101960;
continue;
}
} else
{var vec__101949 = cljs.core.first.call(null,seq__101943__$1);var idx = cljs.core.nth.call(null,vec__101949,(0),null);var vec__101950 = cljs.core.nth.call(null,vec__101949,(1),null);var date = cljs.core.nth.call(null,vec__101950,(0),null);var _ = cljs.core.nthnext.call(null,vec__101950,(1));var line = vec__101950;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__101943,chunk__101944,count__101945,i__101946,vec__101949,idx,vec__101950,date,_,line,seq__101943__$1,temp__4126__auto__,vec__101942,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__101932_SHARP_){return cljs.core._EQ_.call(null,date,p1__101932_SHARP_);
});})(seq__101943,chunk__101944,count__101945,i__101946,vec__101949,idx,vec__101950,date,_,line,seq__101943__$1,temp__4126__auto__,vec__101942,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__101961 = cljs.core.next.call(null,seq__101943__$1);
var G__101962 = null;
var G__101963 = (0);
var G__101964 = (0);
seq__101943 = G__101961;
chunk__101944 = G__101962;
count__101945 = G__101963;
i__101946 = G__101964;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__101974 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__101974,(0),null);var min_v = cljs.core.nth.call(null,vec__101974,(1),null);var offset_v = cljs.core.nth.call(null,vec__101974,(2),null);var offset_x = cljs.core.nth.call(null,vec__101974,(3),null);var pos_y = cljs.core.nth.call(null,vec__101974,(4),null);var seq__101975 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__101974,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__101983__delegate = function (args){return args;
};
var G__101983 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__101983__delegate.call(this,args);};
G__101983.cljs$lang$maxFixedArity = 0;
G__101983.cljs$lang$applyTo = (function (arglist__101984){
var args = cljs.core.seq(arglist__101984);
return G__101983__delegate(args);
});
G__101983.cljs$core$IFn$_invoke$arity$variadic = G__101983__delegate;
return G__101983;
})()
;})(vec__101974,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__101976 = null;var count__101977 = (0);var i__101978 = (0);while(true){
if((i__101978 < count__101977))
{var vec__101979 = cljs.core._nth.call(null,chunk__101976,i__101978);var idx = cljs.core.nth.call(null,vec__101979,(0),null);var vec__101980 = cljs.core.nth.call(null,vec__101979,(1),null);var date = cljs.core.nth.call(null,vec__101980,(0),null);var open = cljs.core.nth.call(null,vec__101980,(1),null);var high = cljs.core.nth.call(null,vec__101980,(2),null);var low = cljs.core.nth.call(null,vec__101980,(3),null);var close = cljs.core.nth.call(null,vec__101980,(4),null);var volume = cljs.core.nth.call(null,vec__101980,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__101985 = seq__101975;
var G__101986 = chunk__101976;
var G__101987 = count__101977;
var G__101988 = (i__101978 + (1));
seq__101975 = G__101985;
chunk__101976 = G__101986;
count__101977 = G__101987;
i__101978 = G__101988;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__101975);if(temp__4126__auto__)
{var seq__101975__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__101975__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__101975__$1);{
var G__101989 = cljs.core.chunk_rest.call(null,seq__101975__$1);
var G__101990 = c__4307__auto__;
var G__101991 = cljs.core.count.call(null,c__4307__auto__);
var G__101992 = (0);
seq__101975 = G__101989;
chunk__101976 = G__101990;
count__101977 = G__101991;
i__101978 = G__101992;
continue;
}
} else
{var vec__101981 = cljs.core.first.call(null,seq__101975__$1);var idx = cljs.core.nth.call(null,vec__101981,(0),null);var vec__101982 = cljs.core.nth.call(null,vec__101981,(1),null);var date = cljs.core.nth.call(null,vec__101982,(0),null);var open = cljs.core.nth.call(null,vec__101982,(1),null);var high = cljs.core.nth.call(null,vec__101982,(2),null);var low = cljs.core.nth.call(null,vec__101982,(3),null);var close = cljs.core.nth.call(null,vec__101982,(4),null);var volume = cljs.core.nth.call(null,vec__101982,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"green"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__101993 = cljs.core.next.call(null,seq__101975__$1);
var G__101994 = null;
var G__101995 = (0);
var G__101996 = (0);
seq__101975 = G__101993;
chunk__101976 = G__101994;
count__101977 = G__101995;
i__101978 = G__101996;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__102000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__102000,(0),null);var h = cljs.core.nth.call(null,vec__102000,(1),null);return ((function (ctx,vec__102000,w,h){
return (function (p__102001){var map__102002 = p__102001;var map__102002__$1 = ((cljs.core.seq_QMARK_.call(null,map__102002))?cljs.core.apply.call(null,cljs.core.hash_map,map__102002):map__102002);var appctx = map__102002__$1;var bias = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__102002__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
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
if(cljs.core.truth_(sd))
{test.stock4.draw_sd.call(null,ctx,w,h,kline,sd);
} else
{}
if(cljs.core.truth_(yu))
{test.stock4.draw_yu.call(null,ctx,w,h,kline,yu);
} else
{}
return appctx;
});
;})(ctx,vec__102000,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj102040 = {"url":"/proxy","dataType":"text","data":(function (){var obj102042 = {"url":url};return obj102042;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_102049){var state_val_102050 = (state_102049[(1)]);if((state_val_102050 === (2)))
{var inst_102046 = (state_102049[(2)]);var inst_102047 = cljs.core.async.close_BANG_.call(null,ret);var state_102049__$1 = (function (){var statearr_102051 = state_102049;(statearr_102051[(7)] = inst_102046);
return statearr_102051;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102049__$1,inst_102047);
} else
{if((state_val_102050 === (1)))
{var inst_102043 = [null,data];var inst_102044 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_102043,null));var state_102049__$1 = state_102049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102049__$1,(2),ret,inst_102044);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_102055 = [null,null,null,null,null,null,null,null];(statearr_102055[(0)] = state_machine__6188__auto__);
(statearr_102055[(1)] = (1));
return statearr_102055;
});
var state_machine__6188__auto____1 = (function (state_102049){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_102049);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e102056){if((e102056 instanceof Object))
{var ex__6191__auto__ = e102056;var statearr_102057_102075 = state_102049;(statearr_102057_102075[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e102056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__102076 = state_102049;
state_102049 = G__102076;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_102049){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_102049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_102058 = f__6203__auto__.call(null);(statearr_102058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_102058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_102065){var state_val_102066 = (state_102065[(1)]);if((state_val_102066 === (2)))
{var inst_102062 = (state_102065[(2)]);var inst_102063 = cljs.core.async.close_BANG_.call(null,ret);var state_102065__$1 = (function (){var statearr_102067 = state_102065;(statearr_102067[(7)] = inst_102062);
return statearr_102067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102065__$1,inst_102063);
} else
{if((state_val_102066 === (1)))
{var inst_102059 = [err];var inst_102060 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_102059,null));var state_102065__$1 = state_102065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102065__$1,(2),ret,inst_102060);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_102071 = [null,null,null,null,null,null,null,null];(statearr_102071[(0)] = state_machine__6188__auto__);
(statearr_102071[(1)] = (1));
return statearr_102071;
});
var state_machine__6188__auto____1 = (function (state_102065){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_102065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e102072){if((e102072 instanceof Object))
{var ex__6191__auto__ = e102072;var statearr_102073_102077 = state_102065;(statearr_102073_102077[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e102072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__102078 = state_102065;
state_102065 = G__102078;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_102065){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_102065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_102074 = f__6203__auto__.call(null);(statearr_102074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_102074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj102040;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__102087(s__102088){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__102088__$1 = s__102088;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__102088__$1);if(temp__4126__auto__)
{var s__102088__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__102088__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__102088__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__102090 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__102089 = (0);while(true){
if((i__102089 < size__4275__auto__))
{var vec__102093 = cljs.core._nth.call(null,c__4274__auto__,i__102089);var _ = cljs.core.nth.call(null,vec__102093,(0),null);var date = cljs.core.nth.call(null,vec__102093,(1),null);var open = cljs.core.nth.call(null,vec__102093,(2),null);var high = cljs.core.nth.call(null,vec__102093,(3),null);var low = cljs.core.nth.call(null,vec__102093,(4),null);var close = cljs.core.nth.call(null,vec__102093,(5),null);var volume = cljs.core.nth.call(null,vec__102093,(6),null);cljs.core.chunk_append.call(null,b__102090,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__102095 = (i__102089 + (1));
i__102089 = G__102095;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102090),iter__102087.call(null,cljs.core.chunk_rest.call(null,s__102088__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102090),null);
}
} else
{var vec__102094 = cljs.core.first.call(null,s__102088__$2);var _ = cljs.core.nth.call(null,vec__102094,(0),null);var date = cljs.core.nth.call(null,vec__102094,(1),null);var open = cljs.core.nth.call(null,vec__102094,(2),null);var high = cljs.core.nth.call(null,vec__102094,(3),null);var low = cljs.core.nth.call(null,vec__102094,(4),null);var close = cljs.core.nth.call(null,vec__102094,(5),null);var volume = cljs.core.nth.call(null,vec__102094,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__102087.call(null,cljs.core.rest.call(null,s__102088__$2)));
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
return (function (state_102173){var state_val_102174 = (state_102173[(1)]);if((state_val_102174 === (9)))
{var inst_102163 = (state_102173[(2)]);var state_102173__$1 = state_102173;var statearr_102175_102192 = state_102173__$1;(statearr_102175_102192[(2)] = inst_102163);
(statearr_102175_102192[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102174 === (8)))
{var inst_102169 = (state_102173[(2)]);var state_102173__$1 = state_102173;var statearr_102176_102193 = state_102173__$1;(statearr_102176_102193[(2)] = inst_102169);
(statearr_102176_102193[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102174 === (7)))
{var inst_102155 = (state_102173[(7)]);var inst_102165 = cljs.core.concat.call(null,all,inst_102155);var inst_102166 = [null,inst_102165];var inst_102167 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_102166,null));var state_102173__$1 = state_102173;var statearr_102177_102194 = state_102173__$1;(statearr_102177_102194[(2)] = inst_102167);
(statearr_102177_102194[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102174 === (6)))
{var inst_102155 = (state_102173[(7)]);var inst_102159 = cljs.core.concat.call(null,all,inst_102155);var inst_102160 = (start + num);var inst_102161 = stock_info.call(null,inst_102159,id,startdate,inst_102160,num);var state_102173__$1 = state_102173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102173__$1,(9),inst_102161);
} else
{if((state_val_102174 === (5)))
{var inst_102171 = (state_102173[(2)]);var state_102173__$1 = state_102173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102173__$1,inst_102171);
} else
{if((state_val_102174 === (4)))
{var inst_102155 = (state_102173[(7)]);var inst_102150 = (state_102173[(8)]);var inst_102155__$1 = test.stock4.parse_info.call(null,inst_102150);var inst_102156 = cljs.core.count.call(null,inst_102155__$1);var inst_102157 = cljs.core._EQ_.call(null,num,inst_102156);var state_102173__$1 = (function (){var statearr_102178 = state_102173;(statearr_102178[(7)] = inst_102155__$1);
return statearr_102178;
})();if(inst_102157)
{var statearr_102179_102195 = state_102173__$1;(statearr_102179_102195[(1)] = (6));
} else
{var statearr_102180_102196 = state_102173__$1;(statearr_102180_102196[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102174 === (3)))
{var inst_102149 = (state_102173[(9)]);var inst_102152 = [inst_102149];var inst_102153 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_102152,null));var state_102173__$1 = state_102173;var statearr_102181_102197 = state_102173__$1;(statearr_102181_102197[(2)] = inst_102153);
(statearr_102181_102197[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102174 === (2)))
{var inst_102149 = (state_102173[(9)]);var inst_102148 = (state_102173[(2)]);var inst_102149__$1 = cljs.core.nth.call(null,inst_102148,(0),null);var inst_102150 = cljs.core.nth.call(null,inst_102148,(1),null);var state_102173__$1 = (function (){var statearr_102182 = state_102173;(statearr_102182[(9)] = inst_102149__$1);
(statearr_102182[(8)] = inst_102150);
return statearr_102182;
})();if(cljs.core.truth_(inst_102149__$1))
{var statearr_102183_102198 = state_102173__$1;(statearr_102183_102198[(1)] = (3));
} else
{var statearr_102184_102199 = state_102173__$1;(statearr_102184_102199[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102174 === (1)))
{var inst_102145 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_102146 = test.stock4.content.call(null,inst_102145);var state_102173__$1 = state_102173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102173__$1,(2),inst_102146);
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
var state_machine__6188__auto____0 = (function (){var statearr_102188 = [null,null,null,null,null,null,null,null,null,null];(statearr_102188[(0)] = state_machine__6188__auto__);
(statearr_102188[(1)] = (1));
return statearr_102188;
});
var state_machine__6188__auto____1 = (function (state_102173){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_102173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e102189){if((e102189 instanceof Object))
{var ex__6191__auto__ = e102189;var statearr_102190_102200 = state_102173;(statearr_102190_102200[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e102189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__102201 = state_102173;
state_102173 = G__102201;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_102173){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_102173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_102191 = f__6203__auto__.call(null);(statearr_102191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_102191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__102210 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__102210,(0),null);var open = cljs.core.nth.call(null,vec__102210,(1),null);var _ = cljs.core.nth.call(null,vec__102210,(2),null);var ___$1 = cljs.core.nth.call(null,vec__102210,(3),null);var ___$2 = cljs.core.nth.call(null,vec__102210,(4),null);var ___$3 = cljs.core.nth.call(null,vec__102210,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__102210,date,open,_,___$1,___$2,___$3){
return (function (p__102212){var vec__102213 = p__102212;var ___$4 = cljs.core.nth.call(null,vec__102213,(0),null);var ___$5 = cljs.core.nth.call(null,vec__102213,(1),null);var high = cljs.core.nth.call(null,vec__102213,(2),null);var ___$6 = cljs.core.nth.call(null,vec__102213,(3),null);var ___$7 = cljs.core.nth.call(null,vec__102213,(4),null);var ___$8 = cljs.core.nth.call(null,vec__102213,(5),null);return high;
});})(group,vec__102210,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__102210,date,open,_,___$1,___$2,___$3,high){
return (function (p__102214){var vec__102215 = p__102214;var ___$4 = cljs.core.nth.call(null,vec__102215,(0),null);var ___$5 = cljs.core.nth.call(null,vec__102215,(1),null);var ___$6 = cljs.core.nth.call(null,vec__102215,(2),null);var low = cljs.core.nth.call(null,vec__102215,(3),null);var ___$7 = cljs.core.nth.call(null,vec__102215,(4),null);var ___$8 = cljs.core.nth.call(null,vec__102215,(5),null);return low;
});})(group,vec__102210,date,open,_,___$1,___$2,___$3,high))
,group));var vec__102211 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__102211,(0),null);var ___$5 = cljs.core.nth.call(null,vec__102211,(1),null);var ___$6 = cljs.core.nth.call(null,vec__102211,(2),null);var ___$7 = cljs.core.nth.call(null,vec__102211,(3),null);var close = cljs.core.nth.call(null,vec__102211,(4),null);var ___$8 = cljs.core.nth.call(null,vec__102211,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__102210,date,open,_,___$1,___$2,___$3,high,low,vec__102211,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__102216){var vec__102217 = p__102216;var ___$9 = cljs.core.nth.call(null,vec__102217,(0),null);var ___$10 = cljs.core.nth.call(null,vec__102217,(1),null);var ___$11 = cljs.core.nth.call(null,vec__102217,(2),null);var ___$12 = cljs.core.nth.call(null,vec__102217,(3),null);var ___$13 = cljs.core.nth.call(null,vec__102217,(4),null);var volume = cljs.core.nth.call(null,vec__102217,(5),null);return volume;
});})(group,vec__102210,date,open,_,___$1,___$2,___$3,high,low,vec__102211,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__102210,date,open,_,___$1,___$2,___$3,high,low,vec__102211,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__102210,date,open,_,___$1,___$2,___$3,high,low,vec__102211,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__102221 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__102221,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102221,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102221,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102221,(3),null);var c1 = cljs.core.nth.call(null,vec__102221,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102221,(5),null);var l1 = vec__102221;var vec__102222 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__102222,(0),null);var ___$5 = cljs.core.nth.call(null,vec__102222,(1),null);var ___$6 = cljs.core.nth.call(null,vec__102222,(2),null);var ___$7 = cljs.core.nth.call(null,vec__102222,(3),null);var c2 = cljs.core.nth.call(null,vec__102222,(4),null);var ___$8 = cljs.core.nth.call(null,vec__102222,(5),null);var l2 = vec__102222;var vec__102223 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__102223,(0),null);var ___$10 = cljs.core.nth.call(null,vec__102223,(1),null);var ___$11 = cljs.core.nth.call(null,vec__102223,(2),null);var ___$12 = cljs.core.nth.call(null,vec__102223,(3),null);var c3 = cljs.core.nth.call(null,vec__102223,(4),null);var ___$13 = cljs.core.nth.call(null,vec__102223,(5),null);var l3 = vec__102223;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__102221,_,___$1,___$2,___$3,c1,___$4,l1,vec__102222,date,___$5,___$6,___$7,c2,___$8,l2,vec__102223,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__102221,_,___$1,___$2,___$3,c1,___$4,l1,vec__102222,date,___$5,___$6,___$7,c2,___$8,l2,vec__102223,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__102228){var vec__102229 = p__102228;var _ = cljs.core.nth.call(null,vec__102229,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102229,(1),null);var high = cljs.core.nth.call(null,vec__102229,(2),null);var low = cljs.core.nth.call(null,vec__102229,(3),null);var ___$2 = cljs.core.nth.call(null,vec__102229,(4),null);var ___$3 = cljs.core.nth.call(null,vec__102229,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__102227 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__102227,(0),null);var open = cljs.core.nth.call(null,vec__102227,(1),null);var high = cljs.core.nth.call(null,vec__102227,(2),null);var low = cljs.core.nth.call(null,vec__102227,(3),null);var close = cljs.core.nth.call(null,vec__102227,(4),null);var ___$1 = cljs.core.nth.call(null,vec__102227,(5),null);var curr = vec__102227;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__102227,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__102227,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__102232){var vec__102233 = p__102232;var _ = cljs.core.nth.call(null,vec__102233,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102233,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102233,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102233,(3),null);var close = cljs.core.nth.call(null,vec__102233,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102233,(5),null);return close;
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
return (function (p__102236){var vec__102237 = p__102236;var _ = cljs.core.nth.call(null,vec__102237,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102237,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102237,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102237,(3),null);var close = cljs.core.nth.call(null,vec__102237,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102237,(5),null);return close;
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
* 點線賺錢術的 Exponentional Moving Average 指數移動平均線
* 使用了加權型式，w為1可用於計算MACD
* 這個計算上較為正確，和yahoo股市算的很接近
*/
test.stock4.ema = (function ema(n,w,kline){var vec__102243 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__102243,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102243,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102243,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102243,(3),null);var close = cljs.core.nth.call(null,vec__102243,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102243,(5),null);var curr = vec__102243;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__102243,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__102244){var vec__102245 = p__102244;var vec__102246 = cljs.core.nth.call(null,vec__102245,(0),null);var ___$5 = cljs.core.nth.call(null,vec__102246,(0),null);var prev_ema = cljs.core.nth.call(null,vec__102246,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__102245,(1),null);var idx = cljs.core.nth.call(null,vec__102245,(2),null);var vec__102247 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__102247,(0),null);var ___$7 = cljs.core.nth.call(null,vec__102247,(1),null);var ___$8 = cljs.core.nth.call(null,vec__102247,(2),null);var ___$9 = cljs.core.nth.call(null,vec__102247,(3),null);var close__$1 = cljs.core.nth.call(null,vec__102247,(4),null);var ___$10 = cljs.core.nth.call(null,vec__102247,(5),null);var curr__$1 = vec__102247;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__102243,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__102253 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__102253,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102253,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102253,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102253,(3),null);var ct = cljs.core.nth.call(null,vec__102253,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102253,(5),null);var curr = vec__102253;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__102253,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__102254){var vec__102255 = p__102254;var ___$5 = cljs.core.nth.call(null,vec__102255,(0),null);var ___$6 = cljs.core.nth.call(null,vec__102255,(1),null);var ___$7 = cljs.core.nth.call(null,vec__102255,(2),null);var low = cljs.core.nth.call(null,vec__102255,(3),null);var ___$8 = cljs.core.nth.call(null,vec__102255,(4),null);var ___$9 = cljs.core.nth.call(null,vec__102255,(5),null);return low;
});})(group,vec__102253,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__102253,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__102256){var vec__102257 = p__102256;var ___$5 = cljs.core.nth.call(null,vec__102257,(0),null);var ___$6 = cljs.core.nth.call(null,vec__102257,(1),null);var high = cljs.core.nth.call(null,vec__102257,(2),null);var ___$7 = cljs.core.nth.call(null,vec__102257,(3),null);var ___$8 = cljs.core.nth.call(null,vec__102257,(4),null);var ___$9 = cljs.core.nth.call(null,vec__102257,(5),null);return high;
});})(group,vec__102253,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__102253,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__102253,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__102260){var vec__102261 = p__102260;var line = cljs.core.nth.call(null,vec__102261,(0),null);var v = cljs.core.nth.call(null,vec__102261,(1),null);return v;
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
* 拋物線指標
* 沒有計算反向作空，所以只看支撐線
*/
test.stock4.sar = (function sar(reverse_kline){if((cljs.core.count.call(null,reverse_kline) > (3)))
{var first_line = cljs.core.first.call(null,cljs.core.drop.call(null,(2),reverse_kline));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (first_line){
return (function (p__102285){var vec__102286 = p__102285;var _ = cljs.core.nth.call(null,vec__102286,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102286,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102286,(2),null);var low = cljs.core.nth.call(null,vec__102286,(3),null);var ___$3 = cljs.core.nth.call(null,vec__102286,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102286,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__102287){var vec__102288 = p__102287;var vec__102289 = cljs.core.nth.call(null,vec__102288,(0),null);var _ = cljs.core.nth.call(null,vec__102289,(0),null);var value = cljs.core.nth.call(null,vec__102289,(1),null);var ori = cljs.core.nth.call(null,vec__102288,(1),null);var prev = cljs.core.nth.call(null,vec__102288,(2),null);var curr = cljs.core.nth.call(null,vec__102288,(3),null);var act = cljs.core.nth.call(null,vec__102288,(4),null);var af = cljs.core.nth.call(null,vec__102288,(5),null);var vec__102290 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__102290,(0),null);var ___$2 = cljs.core.nth.call(null,vec__102290,(1),null);var ph = cljs.core.nth.call(null,vec__102290,(2),null);var pl = cljs.core.nth.call(null,vec__102290,(3),null);var ___$3 = cljs.core.nth.call(null,vec__102290,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102290,(5),null);var prev_line = vec__102290;var vec__102291 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__102291,(0),null);var ___$6 = cljs.core.nth.call(null,vec__102291,(1),null);var ch = cljs.core.nth.call(null,vec__102291,(2),null);var cl = cljs.core.nth.call(null,vec__102291,(3),null);var ___$7 = cljs.core.nth.call(null,vec__102291,(4),null);var ___$8 = cljs.core.nth.call(null,vec__102291,(5),null);var curr_line = vec__102291;var should_turn = (function (){var pred__102292 = cljs.core._EQ_;var expr__102293 = act;if(cljs.core.truth_(pred__102292.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__102293)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__102292.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__102293)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102293))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__102295 = cljs.core._EQ_;var expr__102296 = act;if(cljs.core.truth_(pred__102295.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__102296)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__102295,expr__102296,vec__102290,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__102291,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__102288,vec__102289,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__102298){var vec__102299 = p__102298;var ___$9 = cljs.core.nth.call(null,vec__102299,(0),null);var ___$10 = cljs.core.nth.call(null,vec__102299,(1),null);var high = cljs.core.nth.call(null,vec__102299,(2),null);var ___$11 = cljs.core.nth.call(null,vec__102299,(3),null);var ___$12 = cljs.core.nth.call(null,vec__102299,(4),null);var ___$13 = cljs.core.nth.call(null,vec__102299,(5),null);return high;
});})(pred__102295,expr__102296,vec__102290,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__102291,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__102288,vec__102289,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__102295.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__102296)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__102295,expr__102296,vec__102290,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__102291,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__102288,vec__102289,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__102300){var vec__102301 = p__102300;var ___$9 = cljs.core.nth.call(null,vec__102301,(0),null);var ___$10 = cljs.core.nth.call(null,vec__102301,(1),null);var ___$11 = cljs.core.nth.call(null,vec__102301,(2),null);var low__$1 = cljs.core.nth.call(null,vec__102301,(3),null);var ___$12 = cljs.core.nth.call(null,vec__102301,(4),null);var ___$13 = cljs.core.nth.call(null,vec__102301,(5),null);return low__$1;
});})(pred__102295,expr__102296,vec__102290,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__102291,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__102288,vec__102289,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102296))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__102302 = cljs.core._EQ_;var expr__102303 = act;if(cljs.core.truth_(pred__102302.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__102303)))
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
{if(cljs.core.truth_(pred__102302.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__102303)))
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
{if(cljs.core.truth_(pred__102302.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__102303)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102303))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__102305 = cljs.core._EQ_;var expr__102306 = act;if(cljs.core.truth_(pred__102305.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__102306)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__102305.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__102306)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102306))));
}
}
})():act);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_line,next_value], null),cljs.core.rest.call(null,ori),cljs.core.rest.call(null,prev),cljs.core.rest.call(null,curr),next_act,next_af], null);
});})(first_line,low))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_line,low], null),reverse_kline,cljs.core.drop.call(null,(2),reverse_kline),cljs.core.drop.call(null,(3),reverse_kline),new cljs.core.Keyword(null,"buy","buy",-794379565),0.2], null)));
} else
{return null;
}
});
/**
* Standard Deviation 標準差
* n設為30很像不錯
*/
test.stock4.sd = (function sd(n,kline){if((cljs.core.count.call(null,kline) > n))
{var curr = cljs.core.first.call(null,kline);var sma_seq = cljs.core.take.call(null,n,cljs.core.map.call(null,cljs.core.second,test.stock4.sma.call(null,(1),kline)));var offsets = cljs.core.map.call(null,((function (curr,sma_seq){
return (function (prev,curr__$1){return (curr__$1 - prev);
});})(curr,sma_seq))
,cljs.core.rest.call(null,sma_seq),sma_seq);var offsets_avg = (cljs.core.apply.call(null,cljs.core._PLUS_,offsets) / n);var v = Math.sqrt((((1) / (n - (1))) * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (curr,sma_seq,offsets,offsets_avg){
return (function (p1__102308_SHARP_){return Math.pow((p1__102308_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__102314 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__102314,(0),null);var vec__102315 = cljs.core.nth.call(null,vec__102314,(1),null);var avg = cljs.core.nth.call(null,vec__102315,(0),null);var sd_v = cljs.core.nth.call(null,vec__102315,(1),null);var currs = cljs.core.map.call(null,((function (vec__102314,_,vec__102315,avg,sd_v){
return (function (p__102316){var vec__102317 = p__102316;var ___$1 = cljs.core.nth.call(null,vec__102317,(0),null);var ___$2 = cljs.core.nth.call(null,vec__102317,(1),null);var ___$3 = cljs.core.nth.call(null,vec__102317,(2),null);var ___$4 = cljs.core.nth.call(null,vec__102317,(3),null);var close = cljs.core.nth.call(null,vec__102317,(4),null);var ___$5 = cljs.core.nth.call(null,vec__102317,(5),null);return close;
});})(vec__102314,_,vec__102315,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__102314,_,vec__102315,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__102314,_,vec__102315,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__102314,_,vec__102315,avg,sd_v,currs,offsets){
return (function (p1__102309_SHARP_){return (p1__102309_SHARP_ / sd_v);
});})(vec__102314,_,vec__102315,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__102314,_,vec__102315,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__102318__delegate = function (args){return args;
};
var G__102318 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__102318__delegate.call(this,args);};
G__102318.cljs$lang$maxFixedArity = 0;
G__102318.cljs$lang$applyTo = (function (arglist__102319){
var args = cljs.core.seq(arglist__102319);
return G__102318__delegate(args);
});
G__102318.cljs$core$IFn$_invoke$arity$variadic = G__102318__delegate;
return G__102318;
})()
;})(vec__102314,_,vec__102315,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
/**
* 余氏指標
* w用0.001看多空動能
* w用0.5看振盪方向
*/
test.stock4.yu = (function yu(w,n,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,((function (normal){
return (function (p__102328,p__102329){var vec__102330 = p__102328;var _ = cljs.core.nth.call(null,vec__102330,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102330,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102330,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102330,(3),null);var pc = cljs.core.nth.call(null,vec__102330,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102330,(5),null);var vec__102331 = p__102329;var ___$5 = cljs.core.nth.call(null,vec__102331,(0),null);var ___$6 = cljs.core.nth.call(null,vec__102331,(1),null);var ___$7 = cljs.core.nth.call(null,vec__102331,(2),null);var ___$8 = cljs.core.nth.call(null,vec__102331,(3),null);var cc = cljs.core.nth.call(null,vec__102331,(4),null);var ___$9 = cljs.core.nth.call(null,vec__102331,(5),null);return (((cc - pc) / pc) / normal);
});})(normal))
,reverse_kline,cljs.core.rest.call(null,reverse_kline));var vs = cljs.core.map.call(null,((function (normal,up_seq){
return (function (p__102332){var vec__102333 = p__102332;var dir = cljs.core.nth.call(null,vec__102333,(0),null);var ran = cljs.core.nth.call(null,vec__102333,(1),null);return ran;
});})(normal,up_seq))
,cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__102334,up_offset){var vec__102335 = p__102334;var prev = cljs.core.nth.call(null,vec__102335,(0),null);var ran = cljs.core.nth.call(null,vec__102335,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (normal,up_seq,vs){
return (function() { 
var G__102336__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__102336 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__102336__delegate.call(this,args);};
G__102336.cljs$lang$maxFixedArity = 0;
G__102336.cljs$lang$applyTo = (function (arglist__102337){
var args = cljs.core.seq(arglist__102337);
return G__102336__delegate(args);
});
G__102336.cljs$core$IFn$_invoke$arity$variadic = G__102336__delegate;
return G__102336;
})()
;})(normal,up_seq,vs))
,cljs.core.rest.call(null,reverse_kline),vs);
});
/**
* Volume Accumulation 成交量多空比率淨額法
* 用來計算OBV能量潮公式
*/
test.stock4.VolumeAccumulation = (function VolumeAccumulation(kline){return cljs.core.map.call(null,(function (p__102340){var vec__102341 = p__102340;var date = cljs.core.nth.call(null,vec__102341,(0),null);var open = cljs.core.nth.call(null,vec__102341,(1),null);var high = cljs.core.nth.call(null,vec__102341,(2),null);var low = cljs.core.nth.call(null,vec__102341,(3),null);var close = cljs.core.nth.call(null,vec__102341,(4),null);var volume = cljs.core.nth.call(null,vec__102341,(5),null);if(cljs.core._EQ_.call(null,high,low))
{return (0);
} else
{return ((((close - low) - (high - close)) * ((1) / (high - low))) * volume);
}
}),kline);
});
/**
* OBV能量潮公式
*/
test.stock4.obv = (function obv(kline){return cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,(0),test.stock4.VolumeAccumulation.call(null,kline)));
});
test.stock4.yu_pre = (function yu_pre(kline){var n = (30);var group = cljs.core.take.call(null,n,kline);var all_volume = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group){
return (function (p__102348){var vec__102349 = p__102348;var _ = cljs.core.nth.call(null,vec__102349,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102349,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102349,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102349,(3),null);var ___$4 = cljs.core.nth.call(null,vec__102349,(4),null);var volume = cljs.core.nth.call(null,vec__102349,(5),null);return volume;
});})(n,group))
,group));var all_price = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group,all_volume){
return (function (p__102350){var vec__102351 = p__102350;var _ = cljs.core.nth.call(null,vec__102351,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102351,(1),null);var high = cljs.core.nth.call(null,vec__102351,(2),null);var ___$2 = cljs.core.nth.call(null,vec__102351,(3),null);var ___$3 = cljs.core.nth.call(null,vec__102351,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102351,(5),null);return high;
});})(n,group,all_volume))
,group));var v_per_p = (all_price / all_volume);var obv_seq = test.stock4.obv.call(null,group);var predict = cljs.core.map.call(null,((function (n,group,all_volume,all_price,v_per_p,obv_seq){
return (function (p__102352,obv){var vec__102353 = p__102352;var _ = cljs.core.nth.call(null,vec__102353,(0),null);var open = cljs.core.nth.call(null,vec__102353,(1),null);var ___$1 = cljs.core.nth.call(null,vec__102353,(2),null);var ___$2 = cljs.core.nth.call(null,vec__102353,(3),null);var ___$3 = cljs.core.nth.call(null,vec__102353,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102353,(5),null);return (open + (obv * v_per_p));
});})(n,group,all_volume,all_price,v_per_p,obv_seq))
,kline,obv_seq);console.log(all_volume,all_price);
console.log(v_per_p);
return predict;
});
test.stock4.yu_obv = (function yu_obv(n,kline){var group = cljs.core.take.call(null,n,kline);var va = test.stock4.VolumeAccumulation.call(null,group);var max_va = cljs.core.apply.call(null,cljs.core.max,va);var min_va = cljs.core.apply.call(null,cljs.core.min,va);var region = (max_va - min_va);return cljs.core.map.call(null,((function (group,va,max_va,min_va,region){
return (function (p1__102354_SHARP_){return (p1__102354_SHARP_ / region);
});})(group,va,max_va,min_va,region))
,va);
});
test.stock4.yu_volume = (function yu_volume(n,reverse_kline){var group = cljs.core.take.call(null,n,reverse_kline);var price_seq = cljs.core.map.call(null,((function (group){
return (function (p__102359){var vec__102360 = p__102359;var _ = cljs.core.nth.call(null,vec__102360,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102360,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102360,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102360,(3),null);var close = cljs.core.nth.call(null,vec__102360,(4),null);var ___$4 = cljs.core.nth.call(null,vec__102360,(5),null);return close;
});})(group))
,group);var price_up_rate = cljs.core.map.call(null,((function (group,price_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq))
,price_seq,cljs.core.rest.call(null,price_seq));var volume_seq = cljs.core.map.call(null,((function (group,price_seq,price_up_rate){
return (function (p__102361){var vec__102362 = p__102361;var _ = cljs.core.nth.call(null,vec__102362,(0),null);var ___$1 = cljs.core.nth.call(null,vec__102362,(1),null);var ___$2 = cljs.core.nth.call(null,vec__102362,(2),null);var ___$3 = cljs.core.nth.call(null,vec__102362,(3),null);var ___$4 = cljs.core.nth.call(null,vec__102362,(4),null);var volume = cljs.core.nth.call(null,vec__102362,(5),null);return volume;
});})(group,price_seq,price_up_rate))
,group);var volume_up_rate = cljs.core.map.call(null,((function (group,price_seq,price_up_rate,volume_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq,price_up_rate,volume_seq))
,volume_seq,cljs.core.rest.call(null,volume_seq));var v = (n / cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,price_seq,price_up_rate,volume_seq,volume_up_rate){
return (function (p,v){return (p / v);
});})(group,price_seq,price_up_rate,volume_seq,volume_up_rate))
,price_up_rate,volume_up_rate)));var curr = cljs.core.second.call(null,group);return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,((function (group,price_seq,price_up_rate,volume_seq,volume_up_rate,v,curr){
return (function (){return yu_volume.call(null,n,cljs.core.rest.call(null,reverse_kline));
});})(group,price_seq,price_up_rate,volume_seq,volume_up_rate,v,curr))
,null,null)));
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_102840){var state_val_102841 = (state_102840[(1)]);if((state_val_102841 === (2)))
{var inst_102838 = (state_102840[(2)]);var state_102840__$1 = state_102840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102840__$1,inst_102838);
} else
{if((state_val_102841 === (1)))
{var inst_102836 = cljs.core.js__GT_clj.call(null,data);var state_102840__$1 = state_102840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102840__$1,(2),onView,inst_102836);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_102845 = [null,null,null,null,null,null,null];(statearr_102845[(0)] = state_machine__6188__auto__);
(statearr_102845[(1)] = (1));
return statearr_102845;
});
var state_machine__6188__auto____1 = (function (state_102840){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_102840);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e102846){if((e102846 instanceof Object))
{var ex__6191__auto__ = e102846;var statearr_102847_103309 = state_102840;(statearr_102847_103309[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e102846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__103310 = state_102840;
state_102840 = G__103310;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_102840){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_102840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_102848 = f__6203__auto__.call(null);(statearr_102848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_102848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___103311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___103311,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___103311,draw,onSystem,onView){
return (function (state_102865){var state_val_102866 = (state_102865[(1)]);if((state_val_102866 === (6)))
{var inst_102861 = (state_102865[(2)]);var state_102865__$1 = state_102865;var statearr_102867_103312 = state_102865__$1;(statearr_102867_103312[(2)] = inst_102861);
(statearr_102867_103312[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102866 === (5)))
{var inst_102863 = (state_102865[(2)]);var state_102865__$1 = state_102865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102865__$1,inst_102863);
} else
{if((state_val_102866 === (4)))
{var inst_102854 = (state_102865[(7)]);var inst_102858 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_102854];var inst_102859 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_102858,null));var state_102865__$1 = state_102865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102865__$1,(6),onSystem,inst_102859);
} else
{if((state_val_102866 === (3)))
{var inst_102853 = (state_102865[(8)]);var inst_102856 = alert(inst_102853);var state_102865__$1 = state_102865;var statearr_102868_103313 = state_102865__$1;(statearr_102868_103313[(2)] = inst_102856);
(statearr_102868_103313[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102866 === (2)))
{var inst_102853 = (state_102865[(8)]);var inst_102852 = (state_102865[(2)]);var inst_102853__$1 = cljs.core.nth.call(null,inst_102852,(0),null);var inst_102854 = cljs.core.nth.call(null,inst_102852,(1),null);var state_102865__$1 = (function (){var statearr_102869 = state_102865;(statearr_102869[(8)] = inst_102853__$1);
(statearr_102869[(7)] = inst_102854);
return statearr_102869;
})();if(cljs.core.truth_(inst_102853__$1))
{var statearr_102870_103314 = state_102865__$1;(statearr_102870_103314[(1)] = (3));
} else
{var statearr_102871_103315 = state_102865__$1;(statearr_102871_103315[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_102866 === (1)))
{var inst_102850 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_102865__$1 = state_102865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102865__$1,(2),inst_102850);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___103311,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___103311,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_102875 = [null,null,null,null,null,null,null,null,null];(statearr_102875[(0)] = state_machine__6188__auto__);
(statearr_102875[(1)] = (1));
return statearr_102875;
});
var state_machine__6188__auto____1 = (function (state_102865){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_102865);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e102876){if((e102876 instanceof Object))
{var ex__6191__auto__ = e102876;var statearr_102877_103316 = state_102865;(statearr_102877_103316[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102865);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e102876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__103317 = state_102865;
state_102865 = G__103317;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_102865){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_102865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___103311,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_102878 = f__6203__auto__.call(null);(statearr_102878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___103311);
return statearr_102878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___103311,draw,onSystem,onView))
);
var c__6202__auto___103318 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___103318,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___103318,draw,onSystem,onView){
return (function (state_103168){var state_val_103169 = (state_103168[(1)]);if((state_val_103169 === (65)))
{var inst_103095 = (state_103168[(7)]);var inst_103096 = (state_103168[(8)]);var inst_103098 = (inst_103096 < inst_103095);var inst_103099 = inst_103098;var state_103168__$1 = state_103168;if(cljs.core.truth_(inst_103099))
{var statearr_103170_103319 = state_103168__$1;(statearr_103170_103319[(1)] = (67));
} else
{var statearr_103171_103320 = state_103168__$1;(statearr_103171_103320[(1)] = (68));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (70)))
{var inst_103107 = (state_103168[(9)]);var inst_103109 = cljs.core.chunked_seq_QMARK_.call(null,inst_103107);var state_103168__$1 = state_103168;if(inst_103109)
{var statearr_103172_103321 = state_103168__$1;(statearr_103172_103321[(1)] = (73));
} else
{var statearr_103173_103322 = state_103168__$1;(statearr_103173_103322[(1)] = (74));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (62)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_103090 = cljs.core.keyword.call(null,inst_102940);var inst_103091 = inst_103090.call(null,inst_102900);var inst_103092 = cljs.core.seq.call(null,inst_103091);var inst_103093 = inst_103092;var inst_103094 = null;var inst_103095 = (0);var inst_103096 = (0);var state_103168__$1 = (function (){var statearr_103174 = state_103168;(statearr_103174[(12)] = inst_103093);
(statearr_103174[(7)] = inst_103095);
(statearr_103174[(8)] = inst_103096);
(statearr_103174[(13)] = inst_103094);
return statearr_103174;
})();var statearr_103175_103323 = state_103168__$1;(statearr_103175_103323[(2)] = null);
(statearr_103175_103323[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (74)))
{var inst_103107 = (state_103168[(9)]);var inst_103116 = cljs.core.first.call(null,inst_103107);var inst_103117 = cljs.core.pr_str.call(null,inst_103116);var inst_103118 = console.log(inst_103117);var inst_103119 = cljs.core.next.call(null,inst_103107);var inst_103093 = inst_103119;var inst_103094 = null;var inst_103095 = (0);var inst_103096 = (0);var state_103168__$1 = (function (){var statearr_103176 = state_103168;(statearr_103176[(14)] = inst_103118);
(statearr_103176[(12)] = inst_103093);
(statearr_103176[(7)] = inst_103095);
(statearr_103176[(8)] = inst_103096);
(statearr_103176[(13)] = inst_103094);
return statearr_103176;
})();var statearr_103177_103324 = state_103168__$1;(statearr_103177_103324[(2)] = null);
(statearr_103177_103324[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (7)))
{var inst_102892 = (state_103168[(15)]);var inst_102897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102892);var state_103168__$1 = state_103168;var statearr_103178_103325 = state_103168__$1;(statearr_103178_103325[(2)] = inst_102897);
(statearr_103178_103325[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (59)))
{var inst_102901 = (state_103168[(16)]);var inst_102900 = (state_103168[(11)]);var inst_103078 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103079 = test.stock4.check_turn.call(null,inst_103078);var inst_103080 = cljs.core.take.call(null,inst_102901,inst_103079);var inst_103081 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"turn","turn",75759344),inst_103080);var inst_103082 = draw.call(null,inst_103081);var state_103168__$1 = state_103168;var statearr_103179_103326 = state_103168__$1;(statearr_103179_103326[(2)] = inst_103082);
(statearr_103179_103326[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (20)))
{var inst_102907 = (state_103168[(17)]);var inst_102935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102907);var state_103168__$1 = state_103168;var statearr_103180_103327 = state_103168__$1;(statearr_103180_103327[(2)] = inst_102935);
(statearr_103180_103327[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (72)))
{var inst_103125 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103181_103328 = state_103168__$1;(statearr_103181_103328[(2)] = inst_103125);
(statearr_103181_103328[(1)] = (69));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (58)))
{var inst_103136 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103182_103329 = state_103168__$1;(statearr_103182_103329[(2)] = inst_103136);
(statearr_103182_103329[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (60)))
{var inst_102939 = (state_103168[(18)]);var inst_103084 = cljs.core._EQ_.call(null,"print",inst_102939);var state_103168__$1 = state_103168;if(inst_103084)
{var statearr_103183_103330 = state_103168__$1;(statearr_103183_103330[(1)] = (62));
} else
{var statearr_103184_103331 = state_103168__$1;(statearr_103184_103331[(1)] = (63));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (27)))
{var inst_102939 = (state_103168[(18)]);var inst_102961 = cljs.core._EQ_.call(null,"yu-obv",inst_102939);var state_103168__$1 = state_103168;if(inst_102961)
{var statearr_103185_103332 = state_103168__$1;(statearr_103185_103332[(1)] = (29));
} else
{var statearr_103186_103333 = state_103168__$1;(statearr_103186_103333[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (1)))
{var inst_102884 = (state_103168[(19)]);var inst_102882 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_102883 = [(200)];var inst_102884__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_102882,inst_102883);var inst_102885 = cljs.core.seq_QMARK_.call(null,inst_102884__$1);var state_103168__$1 = (function (){var statearr_103187 = state_103168;(statearr_103187[(19)] = inst_102884__$1);
return statearr_103187;
})();if(inst_102885)
{var statearr_103188_103334 = state_103168__$1;(statearr_103188_103334[(1)] = (2));
} else
{var statearr_103189_103335 = state_103168__$1;(statearr_103189_103335[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (69)))
{var inst_103127 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103190_103336 = state_103168__$1;(statearr_103190_103336[(2)] = inst_103127);
(statearr_103190_103336[(1)] = (66));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (24)))
{var inst_102939 = (state_103168[(18)]);var inst_102952 = cljs.core._EQ_.call(null,"obv",inst_102939);var state_103168__$1 = state_103168;if(inst_102952)
{var statearr_103191_103337 = state_103168__$1;(statearr_103191_103337[(1)] = (26));
} else
{var statearr_103192_103338 = state_103168__$1;(statearr_103192_103338[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (55)))
{var inst_103138 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103193_103339 = state_103168__$1;(statearr_103193_103339[(2)] = inst_103138);
(statearr_103193_103339[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (39)))
{var inst_102939 = (state_103168[(18)]);var inst_103002 = cljs.core._EQ_.call(null,"sma",inst_102939);var state_103168__$1 = state_103168;if(inst_103002)
{var statearr_103194_103340 = state_103168__$1;(statearr_103194_103340[(1)] = (41));
} else
{var statearr_103195_103341 = state_103168__$1;(statearr_103195_103341[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (46)))
{var inst_103144 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103196_103342 = state_103168__$1;(statearr_103196_103342[(2)] = inst_103144);
(statearr_103196_103342[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (4)))
{var inst_102890 = (state_103168[(20)]);var inst_102884 = (state_103168[(19)]);var inst_102890__$1 = (state_103168[(2)]);var inst_102891 = cljs.core.get.call(null,inst_102890__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_102892 = inst_102884;var state_103168__$1 = (function (){var statearr_103197 = state_103168;(statearr_103197[(21)] = inst_102891);
(statearr_103197[(15)] = inst_102892);
(statearr_103197[(20)] = inst_102890__$1);
return statearr_103197;
})();var statearr_103198_103343 = state_103168__$1;(statearr_103198_103343[(2)] = null);
(statearr_103198_103343[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (54)))
{var inst_102939 = (state_103168[(18)]);var inst_103068 = cljs.core._EQ_.call(null,"avg",inst_102939);var state_103168__$1 = state_103168;if(inst_103068)
{var statearr_103199_103344 = state_103168__$1;(statearr_103199_103344[(1)] = (56));
} else
{var statearr_103200_103345 = state_103168__$1;(statearr_103200_103345[(1)] = (57));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (15)))
{var inst_102900 = (state_103168[(11)]);var state_103168__$1 = state_103168;var statearr_103201_103346 = state_103168__$1;(statearr_103201_103346[(2)] = inst_102900);
(statearr_103201_103346[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (48)))
{var inst_102939 = (state_103168[(18)]);var inst_103034 = cljs.core._EQ_.call(null,"sar",inst_102939);var state_103168__$1 = state_103168;if(inst_103034)
{var statearr_103202_103347 = state_103168__$1;(statearr_103202_103347[(1)] = (50));
} else
{var statearr_103203_103348 = state_103168__$1;(statearr_103203_103348[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (50)))
{var inst_102900 = (state_103168[(11)]);var inst_103036 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103037 = cljs.core.reverse.call(null,inst_103036);var inst_103038 = test.stock4.sar.call(null,inst_103037);var inst_103039 = cljs.core.count.call(null,inst_103036);var inst_103040 = cljs.core.take.call(null,inst_103039,inst_103038);var inst_103041 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"sar","sar",833088678),inst_103040);var inst_103042 = draw.call(null,inst_103041);var state_103168__$1 = state_103168;var statearr_103204_103349 = state_103168__$1;(statearr_103204_103349[(2)] = inst_103042);
(statearr_103204_103349[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (75)))
{var inst_103122 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103205_103350 = state_103168__$1;(statearr_103205_103350[(2)] = inst_103122);
(statearr_103205_103350[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (21)))
{var inst_102907 = (state_103168[(17)]);var state_103168__$1 = state_103168;var statearr_103206_103351 = state_103168__$1;(statearr_103206_103351[(2)] = inst_102907);
(statearr_103206_103351[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (31)))
{var inst_103154 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103207_103352 = state_103168__$1;(statearr_103207_103352[(2)] = inst_103154);
(statearr_103207_103352[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (32)))
{var inst_102900 = (state_103168[(11)]);var inst_102971 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102972 = test.stock4.yu_pre.call(null,inst_102971);var inst_102973 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102974 = cljs.core.count.call(null,inst_102973);var inst_102975 = cljs.core.take.call(null,inst_102974,inst_102972);var inst_102976 = cljs.core.pr_str.call(null,inst_102975);var inst_102977 = console.log(inst_102976);var state_103168__$1 = (function (){var statearr_103208 = state_103168;(statearr_103208[(22)] = inst_102977);
return statearr_103208;
})();var statearr_103209_103353 = state_103168__$1;(statearr_103209_103353[(2)] = inst_102900);
(statearr_103209_103353[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (40)))
{var inst_103148 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103210_103354 = state_103168__$1;(statearr_103210_103354[(2)] = inst_103148);
(statearr_103210_103354[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (56)))
{var inst_102901 = (state_103168[(16)]);var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_103070 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103071 = test.stock4.average.call(null,inst_102940,inst_103070);var inst_103072 = cljs.core.take.call(null,inst_102901,inst_103071);var inst_103073 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_103072);var inst_103074 = draw.call(null,inst_103073);var state_103168__$1 = state_103168;var statearr_103211_103355 = state_103168__$1;(statearr_103211_103355[(2)] = inst_103074);
(statearr_103211_103355[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (33)))
{var inst_102939 = (state_103168[(18)]);var inst_102979 = cljs.core._EQ_.call(null,"yu",inst_102939);var state_103168__$1 = state_103168;if(inst_102979)
{var statearr_103212_103356 = state_103168__$1;(statearr_103212_103356[(1)] = (35));
} else
{var statearr_103213_103357 = state_103168__$1;(statearr_103213_103357[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (13)))
{var inst_103163 = (state_103168[(2)]);var inst_102892 = inst_103163;var state_103168__$1 = (function (){var statearr_103214 = state_103168;(statearr_103214[(15)] = inst_102892);
return statearr_103214;
})();var statearr_103215_103358 = state_103168__$1;(statearr_103215_103358[(2)] = null);
(statearr_103215_103358[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (22)))
{var inst_102938 = (state_103168[(23)]);var inst_102939 = (state_103168[(18)]);var inst_102938__$1 = (state_103168[(2)]);var inst_102939__$1 = cljs.core.get.call(null,inst_102938__$1,"cmd");var inst_102940 = cljs.core.get.call(null,inst_102938__$1,"params");var inst_102944 = cljs.core._EQ_.call(null,"length",inst_102939__$1);var state_103168__$1 = (function (){var statearr_103216 = state_103168;(statearr_103216[(10)] = inst_102940);
(statearr_103216[(23)] = inst_102938__$1);
(statearr_103216[(18)] = inst_102939__$1);
return statearr_103216;
})();if(inst_102944)
{var statearr_103217_103359 = state_103168__$1;(statearr_103217_103359[(1)] = (23));
} else
{var statearr_103218_103360 = state_103168__$1;(statearr_103218_103360[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (36)))
{var inst_102939 = (state_103168[(18)]);var inst_102990 = cljs.core._EQ_.call(null,"sd",inst_102939);var state_103168__$1 = state_103168;if(inst_102990)
{var statearr_103219_103361 = state_103168__$1;(statearr_103219_103361[(1)] = (38));
} else
{var statearr_103220_103362 = state_103168__$1;(statearr_103220_103362[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (41)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_103004 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103005 = test.stock4.sma.call(null,inst_102940,inst_103004);var inst_103006 = cljs.core.take.call(null,(10),inst_103005);var inst_103007 = cljs.core.pr_str.call(null,inst_103006);var inst_103008 = console.log(inst_103007);var state_103168__$1 = (function (){var statearr_103221 = state_103168;(statearr_103221[(24)] = inst_103008);
return statearr_103221;
})();var statearr_103222_103363 = state_103168__$1;(statearr_103222_103363[(2)] = inst_102900);
(statearr_103222_103363[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (43)))
{var inst_103146 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103223_103364 = state_103168__$1;(statearr_103223_103364[(2)] = inst_103146);
(statearr_103223_103364[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (61)))
{var inst_103134 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103224_103365 = state_103168__$1;(statearr_103224_103365[(2)] = inst_103134);
(statearr_103224_103365[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (29)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_102963 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102964 = test.stock4.yu_obv.call(null,inst_102940,inst_102963);var inst_102965 = cljs.core.take.call(null,(10),inst_102964);var inst_102966 = cljs.core.pr_str.call(null,inst_102965);var inst_102967 = console.log(inst_102966);var state_103168__$1 = (function (){var statearr_103225 = state_103168;(statearr_103225[(25)] = inst_102967);
return statearr_103225;
})();var statearr_103226_103366 = state_103168__$1;(statearr_103226_103366[(2)] = inst_102900);
(statearr_103226_103366[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (44)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_103012 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103013 = test.stock4.ema.call(null,inst_102940,(0),inst_103012);var inst_103014 = cljs.core.take.call(null,(10),inst_103013);var inst_103015 = cljs.core.pr_str.call(null,inst_103014);var inst_103016 = console.log(inst_103015);var state_103168__$1 = (function (){var statearr_103227 = state_103168;(statearr_103227[(26)] = inst_103016);
return statearr_103227;
})();var statearr_103228_103367 = state_103168__$1;(statearr_103228_103367[(2)] = inst_102900);
(statearr_103228_103367[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (6)))
{var inst_103166 = (state_103168[(2)]);var state_103168__$1 = state_103168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103168__$1,inst_103166);
} else
{if((state_val_103169 === (28)))
{var inst_103156 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103229_103368 = state_103168__$1;(statearr_103229_103368[(2)] = inst_103156);
(statearr_103229_103368[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (64)))
{var inst_103132 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103230_103369 = state_103168__$1;(statearr_103230_103369[(2)] = inst_103132);
(statearr_103230_103369[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (51)))
{var inst_102939 = (state_103168[(18)]);var inst_103044 = cljs.core._EQ_.call(null,"stock",inst_102939);var state_103168__$1 = state_103168;if(inst_103044)
{var statearr_103231_103370 = state_103168__$1;(statearr_103231_103370[(1)] = (53));
} else
{var statearr_103232_103371 = state_103168__$1;(statearr_103232_103371[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (25)))
{var inst_103158 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103233_103372 = state_103168__$1;(statearr_103233_103372[(2)] = inst_103158);
(statearr_103233_103372[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (34)))
{var inst_103152 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103234_103373 = state_103168__$1;(statearr_103234_103373[(2)] = inst_103152);
(statearr_103234_103373[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (17)))
{var inst_102907 = (state_103168[(17)]);var inst_102933 = cljs.core.seq_QMARK_.call(null,inst_102907);var state_103168__$1 = state_103168;if(inst_102933)
{var statearr_103235_103374 = state_103168__$1;(statearr_103235_103374[(1)] = (20));
} else
{var statearr_103236_103375 = state_103168__$1;(statearr_103236_103375[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (3)))
{var inst_102884 = (state_103168[(19)]);var state_103168__$1 = state_103168;var statearr_103237_103376 = state_103168__$1;(statearr_103237_103376[(2)] = inst_102884);
(statearr_103237_103376[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (12)))
{var inst_102908 = (state_103168[(27)]);var inst_102930 = cljs.core._EQ_.call(null,onView,inst_102908);var state_103168__$1 = state_103168;if(inst_102930)
{var statearr_103238_103377 = state_103168__$1;(statearr_103238_103377[(1)] = (17));
} else
{var statearr_103239_103378 = state_103168__$1;(statearr_103239_103378[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (2)))
{var inst_102884 = (state_103168[(19)]);var inst_102887 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102884);var state_103168__$1 = state_103168;var statearr_103240_103379 = state_103168__$1;(statearr_103240_103379[(2)] = inst_102887);
(statearr_103240_103379[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (66)))
{var inst_102900 = (state_103168[(11)]);var inst_103129 = (state_103168[(2)]);var state_103168__$1 = (function (){var statearr_103241 = state_103168;(statearr_103241[(28)] = inst_103129);
return statearr_103241;
})();var statearr_103242_103380 = state_103168__$1;(statearr_103242_103380[(2)] = inst_102900);
(statearr_103242_103380[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (23)))
{var inst_102900 = (state_103168[(11)]);var inst_102946 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102947 = test.stock4.check_length.call(null,inst_102946);var inst_102948 = cljs.core.take.call(null,(10),inst_102947);var inst_102949 = cljs.core.pr_str.call(null,inst_102948);var inst_102950 = console.log(inst_102949);var state_103168__$1 = (function (){var statearr_103243 = state_103168;(statearr_103243[(29)] = inst_102950);
return statearr_103243;
})();var statearr_103244_103381 = state_103168__$1;(statearr_103244_103381[(2)] = inst_102900);
(statearr_103244_103381[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (47)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_103020 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103021 = cljs.core.count.call(null,inst_103020);var inst_103022 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_103023 = test.stock4.rsv.call(null,inst_103022);var inst_103024 = test.stock4.k.call(null,inst_102940,inst_103023);var inst_103025 = cljs.core.take.call(null,inst_103021,inst_103024);var inst_103026 = ((3) * inst_102940);var inst_103027 = test.stock4.k.call(null,inst_103026,inst_103023);var inst_103028 = cljs.core.take.call(null,inst_103021,inst_103027);var inst_103029 = [null,inst_103025,inst_103028];var inst_103030 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_103029,null));var inst_103031 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"kd","kd",771448701),inst_103030);var inst_103032 = draw.call(null,inst_103031);var state_103168__$1 = state_103168;var statearr_103245_103382 = state_103168__$1;(statearr_103245_103382[(2)] = inst_103032);
(statearr_103245_103382[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (35)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_102981 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102982 = cljs.core.reverse.call(null,inst_102981);var inst_102983 = test.stock4.yu.call(null,0.5,inst_102940,inst_102982);var inst_102984 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102985 = cljs.core.count.call(null,inst_102984);var inst_102986 = cljs.core.take.call(null,inst_102985,inst_102983);var inst_102987 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"yu","yu",979062608),inst_102986);var inst_102988 = draw.call(null,inst_102987);var state_103168__$1 = state_103168;var statearr_103246_103383 = state_103168__$1;(statearr_103246_103383[(2)] = inst_102988);
(statearr_103246_103383[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (19)))
{var inst_103161 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103247_103384 = state_103168__$1;(statearr_103247_103384[(2)] = inst_103161);
(statearr_103247_103384[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (57)))
{var inst_102939 = (state_103168[(18)]);var inst_103076 = cljs.core._EQ_.call(null,"turn",inst_102939);var state_103168__$1 = state_103168;if(inst_103076)
{var statearr_103248_103385 = state_103168__$1;(statearr_103248_103385[(1)] = (59));
} else
{var statearr_103249_103386 = state_103168__$1;(statearr_103249_103386[(1)] = (60));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (68)))
{var inst_103107 = (state_103168[(9)]);var inst_103093 = (state_103168[(12)]);var inst_103107__$1 = cljs.core.seq.call(null,inst_103093);var state_103168__$1 = (function (){var statearr_103250 = state_103168;(statearr_103250[(9)] = inst_103107__$1);
return statearr_103250;
})();if(inst_103107__$1)
{var statearr_103251_103387 = state_103168__$1;(statearr_103251_103387[(1)] = (70));
} else
{var statearr_103252_103388 = state_103168__$1;(statearr_103252_103388[(1)] = (71));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (11)))
{var inst_102907 = (state_103168[(17)]);var inst_102915 = cljs.core.nth.call(null,inst_102907,(0),null);var inst_102916 = cljs.core.nth.call(null,inst_102907,(1),null);var inst_102920 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_102915);var state_103168__$1 = (function (){var statearr_103253 = state_103168;(statearr_103253[(30)] = inst_102916);
return statearr_103253;
})();if(inst_102920)
{var statearr_103254_103389 = state_103168__$1;(statearr_103254_103389[(1)] = (14));
} else
{var statearr_103255_103390 = state_103168__$1;(statearr_103255_103390[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (9)))
{var inst_102900 = (state_103168[(11)]);var inst_102900__$1 = (state_103168[(2)]);var inst_102901 = cljs.core.get.call(null,inst_102900__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_102903 = [onSystem,onView];var inst_102904 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_102903,null));var state_103168__$1 = (function (){var statearr_103256 = state_103168;(statearr_103256[(16)] = inst_102901);
(statearr_103256[(11)] = inst_102900__$1);
return statearr_103256;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_103168__$1,(10),inst_102904);
} else
{if((state_val_103169 === (5)))
{var inst_102892 = (state_103168[(15)]);var inst_102895 = cljs.core.seq_QMARK_.call(null,inst_102892);var state_103168__$1 = state_103168;if(inst_102895)
{var statearr_103257_103391 = state_103168__$1;(statearr_103257_103391[(1)] = (7));
} else
{var statearr_103258_103392 = state_103168__$1;(statearr_103258_103392[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (14)))
{var inst_102901 = (state_103168[(16)]);var inst_102900 = (state_103168[(11)]);var inst_102916 = (state_103168[(30)]);var inst_102922 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"info","info",-317069002),inst_102916);var inst_102923 = cljs.core.take.call(null,inst_102901,inst_102916);var inst_102924 = cljs.core.assoc.call(null,inst_102922,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_102923);var inst_102925 = draw.call(null,inst_102924);var state_103168__$1 = state_103168;var statearr_103259_103393 = state_103168__$1;(statearr_103259_103393[(2)] = inst_102925);
(statearr_103259_103393[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (45)))
{var inst_102939 = (state_103168[(18)]);var inst_103018 = cljs.core._EQ_.call(null,"rsv",inst_102939);var state_103168__$1 = state_103168;if(inst_103018)
{var statearr_103260_103394 = state_103168__$1;(statearr_103260_103394[(1)] = (47));
} else
{var statearr_103261_103395 = state_103168__$1;(statearr_103261_103395[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (53)))
{var inst_102901 = (state_103168[(16)]);var inst_102906 = (state_103168[(31)]);var inst_102940 = (state_103168[(10)]);var inst_102938 = (state_103168[(23)]);var inst_102908 = (state_103168[(27)]);var inst_102892 = (state_103168[(15)]);var inst_102890 = (state_103168[(20)]);var inst_102907 = (state_103168[(17)]);var inst_102939 = (state_103168[(18)]);var inst_102900 = (state_103168[(11)]);var inst_103064 = cljs.core.async.chan.call(null,(1));var inst_103065 = (function (){var cmd = inst_102939;var input = inst_102938;var G__102880 = inst_102892;var ctx = inst_102900;var pred__102909 = cljs.core._EQ_;var map__102881 = inst_102890;var v = inst_102907;var map__102894 = inst_102900;var params = inst_102940;var pred__102941 = cljs.core._EQ_;var cnt = inst_102901;var ch = inst_102908;var expr__102910 = inst_102908;var c__6202__auto____$1 = inst_103064;var map__102932 = inst_102938;var expr__102942 = inst_102939;var vec__102902 = inst_102906;return ((function (cmd,input,G__102880,ctx,pred__102909,map__102881,v,map__102894,params,pred__102941,cnt,ch,expr__102910,c__6202__auto____$1,map__102932,expr__102942,vec__102902,inst_102901,inst_102906,inst_102940,inst_102938,inst_102908,inst_102892,inst_102890,inst_102907,inst_102939,inst_102900,inst_103064,state_val_103169,c__6202__auto___103318,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,G__102880,ctx,pred__102909,map__102881,v,map__102894,params,pred__102941,cnt,ch,expr__102910,c__6202__auto____$1,map__102932,expr__102942,vec__102902,inst_102901,inst_102906,inst_102940,inst_102938,inst_102908,inst_102892,inst_102890,inst_102907,inst_102939,inst_102900,inst_103064,state_val_103169,c__6202__auto___103318,draw,onSystem,onView){
return (function (state_103062){var state_val_103063 = (state_103062[(1)]);if((state_val_103063 === (6)))
{var inst_103058 = (state_103062[(2)]);var state_103062__$1 = state_103062;var statearr_103262_103396 = state_103062__$1;(statearr_103262_103396[(2)] = inst_103058);
(statearr_103262_103396[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103063 === (5)))
{var inst_103060 = (state_103062[(2)]);var state_103062__$1 = state_103062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103062__$1,inst_103060);
} else
{if((state_val_103063 === (4)))
{var inst_103051 = (state_103062[(7)]);var inst_103055 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_103051];var inst_103056 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_103055,null));var state_103062__$1 = state_103062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103062__$1,(6),onSystem,inst_103056);
} else
{if((state_val_103063 === (3)))
{var inst_103050 = (state_103062[(8)]);var inst_103053 = alert(inst_103050);var state_103062__$1 = state_103062;var statearr_103263_103397 = state_103062__$1;(statearr_103263_103397[(2)] = inst_103053);
(statearr_103263_103397[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103063 === (2)))
{var inst_103050 = (state_103062[(8)]);var inst_103049 = (state_103062[(2)]);var inst_103050__$1 = cljs.core.nth.call(null,inst_103049,(0),null);var inst_103051 = cljs.core.nth.call(null,inst_103049,(1),null);var state_103062__$1 = (function (){var statearr_103264 = state_103062;(statearr_103264[(8)] = inst_103050__$1);
(statearr_103264[(7)] = inst_103051);
return statearr_103264;
})();if(cljs.core.truth_(inst_103050__$1))
{var statearr_103265_103398 = state_103062__$1;(statearr_103265_103398[(1)] = (3));
} else
{var statearr_103266_103399 = state_103062__$1;(statearr_103266_103399[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103063 === (1)))
{var inst_103047 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_103062__$1 = state_103062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103062__$1,(2),inst_103047);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,G__102880,ctx,pred__102909,map__102881,v,map__102894,params,pred__102941,cnt,ch,expr__102910,c__6202__auto____$1,map__102932,expr__102942,vec__102902,inst_102901,inst_102906,inst_102940,inst_102938,inst_102908,inst_102892,inst_102890,inst_102907,inst_102939,inst_102900,inst_103064,state_val_103169,c__6202__auto___103318,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,G__102880,ctx,pred__102909,map__102881,v,map__102894,params,pred__102941,cnt,ch,expr__102910,c__6202__auto____$1,map__102932,expr__102942,vec__102902,inst_102901,inst_102906,inst_102940,inst_102938,inst_102908,inst_102892,inst_102890,inst_102907,inst_102939,inst_102900,inst_103064,state_val_103169,c__6202__auto___103318,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_103270 = [null,null,null,null,null,null,null,null,null];(statearr_103270[(0)] = state_machine__6188__auto__);
(statearr_103270[(1)] = (1));
return statearr_103270;
});
var state_machine__6188__auto____1 = (function (state_103062){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_103062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e103271){if((e103271 instanceof Object))
{var ex__6191__auto__ = e103271;var statearr_103272_103400 = state_103062;(statearr_103272_103400[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e103271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__103401 = state_103062;
state_103062 = G__103401;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_103062){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_103062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,G__102880,ctx,pred__102909,map__102881,v,map__102894,params,pred__102941,cnt,ch,expr__102910,c__6202__auto____$1,map__102932,expr__102942,vec__102902,inst_102901,inst_102906,inst_102940,inst_102938,inst_102908,inst_102892,inst_102890,inst_102907,inst_102939,inst_102900,inst_103064,state_val_103169,c__6202__auto___103318,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_103273 = f__6203__auto__.call(null);(statearr_103273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_103273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,G__102880,ctx,pred__102909,map__102881,v,map__102894,params,pred__102941,cnt,ch,expr__102910,c__6202__auto____$1,map__102932,expr__102942,vec__102902,inst_102901,inst_102906,inst_102940,inst_102938,inst_102908,inst_102892,inst_102890,inst_102907,inst_102939,inst_102900,inst_103064,state_val_103169,c__6202__auto___103318,draw,onSystem,onView))
})();var inst_103066 = cljs.core.async.impl.dispatch.run.call(null,inst_103065);var state_103168__$1 = (function (){var statearr_103274 = state_103168;(statearr_103274[(32)] = inst_103066);
return statearr_103274;
})();var statearr_103275_103402 = state_103168__$1;(statearr_103275_103402[(2)] = inst_102900);
(statearr_103275_103402[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (26)))
{var inst_102900 = (state_103168[(11)]);var inst_102954 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102955 = test.stock4.obv.call(null,inst_102954);var inst_102956 = cljs.core.count.call(null,inst_102954);var inst_102957 = cljs.core.take.call(null,inst_102956,inst_102955);var inst_102958 = cljs.core.pr_str.call(null,inst_102957);var inst_102959 = console.log(inst_102958);var state_103168__$1 = (function (){var statearr_103276 = state_103168;(statearr_103276[(33)] = inst_102959);
return statearr_103276;
})();var statearr_103277_103403 = state_103168__$1;(statearr_103277_103403[(2)] = inst_102900);
(statearr_103277_103403[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (16)))
{var inst_102928 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103278_103404 = state_103168__$1;(statearr_103278_103404[(2)] = inst_102928);
(statearr_103278_103404[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (38)))
{var inst_102940 = (state_103168[(10)]);var inst_102900 = (state_103168[(11)]);var inst_102992 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102993 = test.stock4.sd.call(null,inst_102940,inst_102992);var inst_102994 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102995 = test.stock4.z_score.call(null,inst_102940,inst_102994);var inst_102996 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_102900);var inst_102997 = cljs.core.count.call(null,inst_102996);var inst_102998 = cljs.core.take.call(null,inst_102997,inst_102993);var inst_102999 = cljs.core.assoc.call(null,inst_102900,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_102998);var inst_103000 = draw.call(null,inst_102999);var state_103168__$1 = (function (){var statearr_103279 = state_103168;(statearr_103279[(34)] = inst_102995);
return statearr_103279;
})();var statearr_103280_103405 = state_103168__$1;(statearr_103280_103405[(2)] = inst_103000);
(statearr_103280_103405[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (30)))
{var inst_102939 = (state_103168[(18)]);var inst_102969 = cljs.core._EQ_.call(null,"yu-pre",inst_102939);var state_103168__$1 = state_103168;if(inst_102969)
{var statearr_103281_103406 = state_103168__$1;(statearr_103281_103406[(1)] = (32));
} else
{var statearr_103282_103407 = state_103168__$1;(statearr_103282_103407[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (73)))
{var inst_103107 = (state_103168[(9)]);var inst_103111 = cljs.core.chunk_first.call(null,inst_103107);var inst_103112 = cljs.core.chunk_rest.call(null,inst_103107);var inst_103113 = cljs.core.count.call(null,inst_103111);var inst_103093 = inst_103112;var inst_103094 = inst_103111;var inst_103095 = inst_103113;var inst_103096 = (0);var state_103168__$1 = (function (){var statearr_103283 = state_103168;(statearr_103283[(12)] = inst_103093);
(statearr_103283[(7)] = inst_103095);
(statearr_103283[(8)] = inst_103096);
(statearr_103283[(13)] = inst_103094);
return statearr_103283;
})();var statearr_103284_103408 = state_103168__$1;(statearr_103284_103408[(2)] = null);
(statearr_103284_103408[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (10)))
{var inst_102906 = (state_103168[(31)]);var inst_102908 = (state_103168[(27)]);var inst_102906__$1 = (state_103168[(2)]);var inst_102907 = cljs.core.nth.call(null,inst_102906__$1,(0),null);var inst_102908__$1 = cljs.core.nth.call(null,inst_102906__$1,(1),null);var inst_102912 = cljs.core._EQ_.call(null,onSystem,inst_102908__$1);var state_103168__$1 = (function (){var statearr_103285 = state_103168;(statearr_103285[(31)] = inst_102906__$1);
(statearr_103285[(27)] = inst_102908__$1);
(statearr_103285[(17)] = inst_102907);
return statearr_103285;
})();if(inst_102912)
{var statearr_103286_103409 = state_103168__$1;(statearr_103286_103409[(1)] = (11));
} else
{var statearr_103287_103410 = state_103168__$1;(statearr_103287_103410[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (18)))
{var inst_102900 = (state_103168[(11)]);var state_103168__$1 = state_103168;var statearr_103291_103411 = state_103168__$1;(statearr_103291_103411[(2)] = inst_102900);
(statearr_103291_103411[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (52)))
{var inst_103140 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103292_103412 = state_103168__$1;(statearr_103292_103412[(2)] = inst_103140);
(statearr_103292_103412[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (67)))
{var inst_103093 = (state_103168[(12)]);var inst_103095 = (state_103168[(7)]);var inst_103096 = (state_103168[(8)]);var inst_103094 = (state_103168[(13)]);var inst_103101 = cljs.core._nth.call(null,inst_103094,inst_103096);var inst_103102 = cljs.core.pr_str.call(null,inst_103101);var inst_103103 = console.log(inst_103102);var inst_103104 = (inst_103096 + (1));var tmp103288 = inst_103093;var tmp103289 = inst_103095;var tmp103290 = inst_103094;var inst_103093__$1 = tmp103288;var inst_103094__$1 = tmp103290;var inst_103095__$1 = tmp103289;var inst_103096__$1 = inst_103104;var state_103168__$1 = (function (){var statearr_103293 = state_103168;(statearr_103293[(12)] = inst_103093__$1);
(statearr_103293[(7)] = inst_103095__$1);
(statearr_103293[(8)] = inst_103096__$1);
(statearr_103293[(35)] = inst_103103);
(statearr_103293[(13)] = inst_103094__$1);
return statearr_103293;
})();var statearr_103294_103413 = state_103168__$1;(statearr_103294_103413[(2)] = null);
(statearr_103294_103413[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (71)))
{var state_103168__$1 = state_103168;var statearr_103295_103414 = state_103168__$1;(statearr_103295_103414[(2)] = null);
(statearr_103295_103414[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (42)))
{var inst_102939 = (state_103168[(18)]);var inst_103010 = cljs.core._EQ_.call(null,"ema",inst_102939);var state_103168__$1 = state_103168;if(inst_103010)
{var statearr_103296_103415 = state_103168__$1;(statearr_103296_103415[(1)] = (44));
} else
{var statearr_103297_103416 = state_103168__$1;(statearr_103297_103416[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (37)))
{var inst_103150 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103298_103417 = state_103168__$1;(statearr_103298_103417[(2)] = inst_103150);
(statearr_103298_103417[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (63)))
{var inst_102900 = (state_103168[(11)]);var state_103168__$1 = state_103168;var statearr_103299_103418 = state_103168__$1;(statearr_103299_103418[(2)] = inst_102900);
(statearr_103299_103418[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (8)))
{var inst_102892 = (state_103168[(15)]);var state_103168__$1 = state_103168;var statearr_103300_103419 = state_103168__$1;(statearr_103300_103419[(2)] = inst_102892);
(statearr_103300_103419[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_103169 === (49)))
{var inst_103142 = (state_103168[(2)]);var state_103168__$1 = state_103168;var statearr_103301_103420 = state_103168__$1;(statearr_103301_103420[(2)] = inst_103142);
(statearr_103301_103420[(1)] = (46));
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
});})(c__6202__auto___103318,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___103318,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_103305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_103305[(0)] = state_machine__6188__auto__);
(statearr_103305[(1)] = (1));
return statearr_103305;
});
var state_machine__6188__auto____1 = (function (state_103168){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_103168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e103306){if((e103306 instanceof Object))
{var ex__6191__auto__ = e103306;var statearr_103307_103421 = state_103168;(statearr_103307_103421[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e103306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__103422 = state_103168;
state_103168 = G__103422;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_103168){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_103168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___103318,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_103308 = f__6203__auto__.call(null);(statearr_103308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___103318);
return statearr_103308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___103318,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
