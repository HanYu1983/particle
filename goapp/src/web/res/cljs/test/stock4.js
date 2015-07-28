// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__477741_SHARP_){return cljs.core.nth.call(null,p1__477741_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__477742_SHARP_){return cljs.core.nth.call(null,p1__477742_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__477750 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__477750,(0),null);var min_v = cljs.core.nth.call(null,vec__477750,(1),null);var offset_v = cljs.core.nth.call(null,vec__477750,(2),null);var offset_x = cljs.core.nth.call(null,vec__477750,(3),null);var pos_y = cljs.core.nth.call(null,vec__477750,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__477751_477757 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__477750,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__477761__delegate = function (args){return args;
};
var G__477761 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__477761__delegate.call(this,args);};
G__477761.cljs$lang$maxFixedArity = 0;
G__477761.cljs$lang$applyTo = (function (arglist__477762){
var args = cljs.core.seq(arglist__477762);
return G__477761__delegate(args);
});
G__477761.cljs$core$IFn$_invoke$arity$variadic = G__477761__delegate;
return G__477761;
})()
;})(vec__477750,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__477752_477758 = null;var count__477753_477759 = (0);var i__477754_477760 = (0);while(true){
if((i__477754_477760 < count__477753_477759))
{var vec__477755_477763 = cljs.core._nth.call(null,chunk__477752_477758,i__477754_477760);var idx_477764 = cljs.core.nth.call(null,vec__477755_477763,(0),null);var prev_477765 = cljs.core.nth.call(null,vec__477755_477763,(1),null);var curr_477766 = cljs.core.nth.call(null,vec__477755_477763,(2),null);if((typeof prev_477765 === 'number') && (typeof curr_477766 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_477764 * offset_x),(((1) - prev_477765) * h));
ctx.lineTo(((idx_477764 + (1)) * offset_x),(((1) - curr_477766) * h));
ctx.stroke();
} else
{}
{
var G__477767 = seq__477751_477757;
var G__477768 = chunk__477752_477758;
var G__477769 = count__477753_477759;
var G__477770 = (i__477754_477760 + (1));
seq__477751_477757 = G__477767;
chunk__477752_477758 = G__477768;
count__477753_477759 = G__477769;
i__477754_477760 = G__477770;
continue;
}
} else
{var temp__4126__auto___477771 = cljs.core.seq.call(null,seq__477751_477757);if(temp__4126__auto___477771)
{var seq__477751_477772__$1 = temp__4126__auto___477771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__477751_477772__$1))
{var c__4307__auto___477773 = cljs.core.chunk_first.call(null,seq__477751_477772__$1);{
var G__477774 = cljs.core.chunk_rest.call(null,seq__477751_477772__$1);
var G__477775 = c__4307__auto___477773;
var G__477776 = cljs.core.count.call(null,c__4307__auto___477773);
var G__477777 = (0);
seq__477751_477757 = G__477774;
chunk__477752_477758 = G__477775;
count__477753_477759 = G__477776;
i__477754_477760 = G__477777;
continue;
}
} else
{var vec__477756_477778 = cljs.core.first.call(null,seq__477751_477772__$1);var idx_477779 = cljs.core.nth.call(null,vec__477756_477778,(0),null);var prev_477780 = cljs.core.nth.call(null,vec__477756_477778,(1),null);var curr_477781 = cljs.core.nth.call(null,vec__477756_477778,(2),null);if((typeof prev_477780 === 'number') && (typeof curr_477781 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_477779 * offset_x),(((1) - prev_477780) * h));
ctx.lineTo(((idx_477779 + (1)) * offset_x),(((1) - curr_477781) * h));
ctx.stroke();
} else
{}
{
var G__477782 = cljs.core.next.call(null,seq__477751_477772__$1);
var G__477783 = null;
var G__477784 = (0);
var G__477785 = (0);
seq__477751_477757 = G__477782;
chunk__477752_477758 = G__477783;
count__477753_477759 = G__477784;
i__477754_477760 = G__477785;
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
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__477797 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__477797,(0),null);var min_v = cljs.core.nth.call(null,vec__477797,(1),null);var offset_v = cljs.core.nth.call(null,vec__477797,(2),null);var offset_x = cljs.core.nth.call(null,vec__477797,(3),null);var pos_y = cljs.core.nth.call(null,vec__477797,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__477798_477808 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__477797,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__477812__delegate = function (args){return args;
};
var G__477812 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__477812__delegate.call(this,args);};
G__477812.cljs$lang$maxFixedArity = 0;
G__477812.cljs$lang$applyTo = (function (arglist__477813){
var args = cljs.core.seq(arglist__477813);
return G__477812__delegate(args);
});
G__477812.cljs$core$IFn$_invoke$arity$variadic = G__477812__delegate;
return G__477812;
})()
;})(vec__477797,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__477799_477809 = null;var count__477800_477810 = (0);var i__477801_477811 = (0);while(true){
if((i__477801_477811 < count__477800_477810))
{var vec__477802_477814 = cljs.core._nth.call(null,chunk__477799_477809,i__477801_477811);var idx_477815 = cljs.core.nth.call(null,vec__477802_477814,(0),null);var vec__477803_477816 = cljs.core.nth.call(null,vec__477802_477814,(1),null);var avg_477817 = cljs.core.nth.call(null,vec__477803_477816,(0),null);var sd_v_477818 = cljs.core.nth.call(null,vec__477803_477816,(1),null);var vec__477804_477819 = cljs.core.nth.call(null,vec__477802_477814,(2),null);var __477820 = cljs.core.nth.call(null,vec__477804_477819,(0),null);var __477821__$1 = cljs.core.nth.call(null,vec__477804_477819,(1),null);var __477822__$2 = cljs.core.nth.call(null,vec__477804_477819,(2),null);var __477823__$3 = cljs.core.nth.call(null,vec__477804_477819,(3),null);var close_477824 = cljs.core.nth.call(null,vec__477804_477819,(4),null);var __477825__$4 = cljs.core.nth.call(null,vec__477804_477819,(5),null);(ctx["strokeStyle"] = (((avg_477817 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_477815 * offset_x),pos_y.call(null,(avg_477817 + close_477824)));
ctx.lineTo(((idx_477815 + (1)) * offset_x),pos_y.call(null,(avg_477817 + close_477824)));
ctx.stroke();
ctx.moveTo((idx_477815 * offset_x),pos_y.call(null,(((avg_477817 + close_477824) + sd_v_477818) + sd_v_477818)));
ctx.lineTo(((idx_477815 + (1)) * offset_x),pos_y.call(null,(((avg_477817 + close_477824) + sd_v_477818) + sd_v_477818)));
ctx.stroke();
ctx.moveTo((idx_477815 * offset_x),pos_y.call(null,(((avg_477817 + close_477824) - sd_v_477818) - sd_v_477818)));
ctx.lineTo(((idx_477815 + (1)) * offset_x),pos_y.call(null,(((avg_477817 + close_477824) - sd_v_477818) - sd_v_477818)));
ctx.stroke();
{
var G__477826 = seq__477798_477808;
var G__477827 = chunk__477799_477809;
var G__477828 = count__477800_477810;
var G__477829 = (i__477801_477811 + (1));
seq__477798_477808 = G__477826;
chunk__477799_477809 = G__477827;
count__477800_477810 = G__477828;
i__477801_477811 = G__477829;
continue;
}
} else
{var temp__4126__auto___477830 = cljs.core.seq.call(null,seq__477798_477808);if(temp__4126__auto___477830)
{var seq__477798_477831__$1 = temp__4126__auto___477830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__477798_477831__$1))
{var c__4307__auto___477832 = cljs.core.chunk_first.call(null,seq__477798_477831__$1);{
var G__477833 = cljs.core.chunk_rest.call(null,seq__477798_477831__$1);
var G__477834 = c__4307__auto___477832;
var G__477835 = cljs.core.count.call(null,c__4307__auto___477832);
var G__477836 = (0);
seq__477798_477808 = G__477833;
chunk__477799_477809 = G__477834;
count__477800_477810 = G__477835;
i__477801_477811 = G__477836;
continue;
}
} else
{var vec__477805_477837 = cljs.core.first.call(null,seq__477798_477831__$1);var idx_477838 = cljs.core.nth.call(null,vec__477805_477837,(0),null);var vec__477806_477839 = cljs.core.nth.call(null,vec__477805_477837,(1),null);var avg_477840 = cljs.core.nth.call(null,vec__477806_477839,(0),null);var sd_v_477841 = cljs.core.nth.call(null,vec__477806_477839,(1),null);var vec__477807_477842 = cljs.core.nth.call(null,vec__477805_477837,(2),null);var __477843 = cljs.core.nth.call(null,vec__477807_477842,(0),null);var __477844__$1 = cljs.core.nth.call(null,vec__477807_477842,(1),null);var __477845__$2 = cljs.core.nth.call(null,vec__477807_477842,(2),null);var __477846__$3 = cljs.core.nth.call(null,vec__477807_477842,(3),null);var close_477847 = cljs.core.nth.call(null,vec__477807_477842,(4),null);var __477848__$4 = cljs.core.nth.call(null,vec__477807_477842,(5),null);(ctx["strokeStyle"] = (((avg_477840 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_477838 * offset_x),pos_y.call(null,(avg_477840 + close_477847)));
ctx.lineTo(((idx_477838 + (1)) * offset_x),pos_y.call(null,(avg_477840 + close_477847)));
ctx.stroke();
ctx.moveTo((idx_477838 * offset_x),pos_y.call(null,(((avg_477840 + close_477847) + sd_v_477841) + sd_v_477841)));
ctx.lineTo(((idx_477838 + (1)) * offset_x),pos_y.call(null,(((avg_477840 + close_477847) + sd_v_477841) + sd_v_477841)));
ctx.stroke();
ctx.moveTo((idx_477838 * offset_x),pos_y.call(null,(((avg_477840 + close_477847) - sd_v_477841) - sd_v_477841)));
ctx.lineTo(((idx_477838 + (1)) * offset_x),pos_y.call(null,(((avg_477840 + close_477847) - sd_v_477841) - sd_v_477841)));
ctx.stroke();
{
var G__477849 = cljs.core.next.call(null,seq__477798_477831__$1);
var G__477850 = null;
var G__477851 = (0);
var G__477852 = (0);
seq__477798_477808 = G__477849;
chunk__477799_477809 = G__477850;
count__477800_477810 = G__477851;
i__477801_477811 = G__477852;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__477860 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__477860,(0),null);var min_v = cljs.core.nth.call(null,vec__477860,(1),null);var offset_v = cljs.core.nth.call(null,vec__477860,(2),null);var offset_x = cljs.core.nth.call(null,vec__477860,(3),null);var pos_y = cljs.core.nth.call(null,vec__477860,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__477861_477867 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__477860,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__477871__delegate = function (args){return args;
};
var G__477871 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__477871__delegate.call(this,args);};
G__477871.cljs$lang$maxFixedArity = 0;
G__477871.cljs$lang$applyTo = (function (arglist__477872){
var args = cljs.core.seq(arglist__477872);
return G__477871__delegate(args);
});
G__477871.cljs$core$IFn$_invoke$arity$variadic = G__477871__delegate;
return G__477871;
})()
;})(vec__477860,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__477862_477868 = null;var count__477863_477869 = (0);var i__477864_477870 = (0);while(true){
if((i__477864_477870 < count__477863_477869))
{var vec__477865_477873 = cljs.core._nth.call(null,chunk__477862_477868,i__477864_477870);var idx_477874 = cljs.core.nth.call(null,vec__477865_477873,(0),null);var prev_477875 = cljs.core.nth.call(null,vec__477865_477873,(1),null);var curr_477876 = cljs.core.nth.call(null,vec__477865_477873,(2),null);if((typeof prev_477875 === 'number') && (typeof curr_477876 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_477874 * offset_x),pos_y.call(null,prev_477875));
ctx.lineTo(((idx_477874 + (1)) * offset_x),pos_y.call(null,curr_477876));
ctx.stroke();
} else
{}
{
var G__477877 = seq__477861_477867;
var G__477878 = chunk__477862_477868;
var G__477879 = count__477863_477869;
var G__477880 = (i__477864_477870 + (1));
seq__477861_477867 = G__477877;
chunk__477862_477868 = G__477878;
count__477863_477869 = G__477879;
i__477864_477870 = G__477880;
continue;
}
} else
{var temp__4126__auto___477881 = cljs.core.seq.call(null,seq__477861_477867);if(temp__4126__auto___477881)
{var seq__477861_477882__$1 = temp__4126__auto___477881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__477861_477882__$1))
{var c__4307__auto___477883 = cljs.core.chunk_first.call(null,seq__477861_477882__$1);{
var G__477884 = cljs.core.chunk_rest.call(null,seq__477861_477882__$1);
var G__477885 = c__4307__auto___477883;
var G__477886 = cljs.core.count.call(null,c__4307__auto___477883);
var G__477887 = (0);
seq__477861_477867 = G__477884;
chunk__477862_477868 = G__477885;
count__477863_477869 = G__477886;
i__477864_477870 = G__477887;
continue;
}
} else
{var vec__477866_477888 = cljs.core.first.call(null,seq__477861_477882__$1);var idx_477889 = cljs.core.nth.call(null,vec__477866_477888,(0),null);var prev_477890 = cljs.core.nth.call(null,vec__477866_477888,(1),null);var curr_477891 = cljs.core.nth.call(null,vec__477866_477888,(2),null);if((typeof prev_477890 === 'number') && (typeof curr_477891 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_477889 * offset_x),pos_y.call(null,prev_477890));
ctx.lineTo(((idx_477889 + (1)) * offset_x),pos_y.call(null,curr_477891));
ctx.stroke();
} else
{}
{
var G__477892 = cljs.core.next.call(null,seq__477861_477882__$1);
var G__477893 = null;
var G__477894 = (0);
var G__477895 = (0);
seq__477861_477867 = G__477892;
chunk__477862_477868 = G__477893;
count__477863_477869 = G__477894;
i__477864_477870 = G__477895;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__477896){var vec__477911 = p__477896;var rsv = cljs.core.nth.call(null,vec__477911,(0),null);var k = cljs.core.nth.call(null,vec__477911,(1),null);var d = cljs.core.nth.call(null,vec__477911,(2),null);var kd = vec__477911;var vec__477912 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__477912,(0),null);var min_v = cljs.core.nth.call(null,vec__477912,(1),null);var offset_v = cljs.core.nth.call(null,vec__477912,(2),null);var offset_x = cljs.core.nth.call(null,vec__477912,(3),null);var pos_y = cljs.core.nth.call(null,vec__477912,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__477913_477925 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__477912,max_v,min_v,offset_v,offset_x,pos_y,vec__477911,rsv,k,d,kd){
return (function() { 
var G__477929__delegate = function (args){return args;
};
var G__477929 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__477929__delegate.call(this,args);};
G__477929.cljs$lang$maxFixedArity = 0;
G__477929.cljs$lang$applyTo = (function (arglist__477930){
var args = cljs.core.seq(arglist__477930);
return G__477929__delegate(args);
});
G__477929.cljs$core$IFn$_invoke$arity$variadic = G__477929__delegate;
return G__477929;
})()
;})(vec__477912,max_v,min_v,offset_v,offset_x,pos_y,vec__477911,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__477914_477926 = null;var count__477915_477927 = (0);var i__477916_477928 = (0);while(true){
if((i__477916_477928 < count__477915_477927))
{var vec__477917_477931 = cljs.core._nth.call(null,chunk__477914_477926,i__477916_477928);var idx_477932 = cljs.core.nth.call(null,vec__477917_477931,(0),null);var prev_477933 = cljs.core.nth.call(null,vec__477917_477931,(1),null);var curr_477934 = cljs.core.nth.call(null,vec__477917_477931,(2),null);ctx.beginPath();
ctx.moveTo((idx_477932 * offset_x),(((1) - (prev_477933 / (100))) * h));
ctx.lineTo(((idx_477932 + (1)) * offset_x),(((1) - (curr_477934 / (100))) * h));
ctx.stroke();
{
var G__477935 = seq__477913_477925;
var G__477936 = chunk__477914_477926;
var G__477937 = count__477915_477927;
var G__477938 = (i__477916_477928 + (1));
seq__477913_477925 = G__477935;
chunk__477914_477926 = G__477936;
count__477915_477927 = G__477937;
i__477916_477928 = G__477938;
continue;
}
} else
{var temp__4126__auto___477939 = cljs.core.seq.call(null,seq__477913_477925);if(temp__4126__auto___477939)
{var seq__477913_477940__$1 = temp__4126__auto___477939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__477913_477940__$1))
{var c__4307__auto___477941 = cljs.core.chunk_first.call(null,seq__477913_477940__$1);{
var G__477942 = cljs.core.chunk_rest.call(null,seq__477913_477940__$1);
var G__477943 = c__4307__auto___477941;
var G__477944 = cljs.core.count.call(null,c__4307__auto___477941);
var G__477945 = (0);
seq__477913_477925 = G__477942;
chunk__477914_477926 = G__477943;
count__477915_477927 = G__477944;
i__477916_477928 = G__477945;
continue;
}
} else
{var vec__477918_477946 = cljs.core.first.call(null,seq__477913_477940__$1);var idx_477947 = cljs.core.nth.call(null,vec__477918_477946,(0),null);var prev_477948 = cljs.core.nth.call(null,vec__477918_477946,(1),null);var curr_477949 = cljs.core.nth.call(null,vec__477918_477946,(2),null);ctx.beginPath();
ctx.moveTo((idx_477947 * offset_x),(((1) - (prev_477948 / (100))) * h));
ctx.lineTo(((idx_477947 + (1)) * offset_x),(((1) - (curr_477949 / (100))) * h));
ctx.stroke();
{
var G__477950 = cljs.core.next.call(null,seq__477913_477940__$1);
var G__477951 = null;
var G__477952 = (0);
var G__477953 = (0);
seq__477913_477925 = G__477950;
chunk__477914_477926 = G__477951;
count__477915_477927 = G__477952;
i__477916_477928 = G__477953;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__477919_477954 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__477912,max_v,min_v,offset_v,offset_x,pos_y,vec__477911,rsv,k,d,kd){
return (function() { 
var G__477958__delegate = function (args){return args;
};
var G__477958 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__477958__delegate.call(this,args);};
G__477958.cljs$lang$maxFixedArity = 0;
G__477958.cljs$lang$applyTo = (function (arglist__477959){
var args = cljs.core.seq(arglist__477959);
return G__477958__delegate(args);
});
G__477958.cljs$core$IFn$_invoke$arity$variadic = G__477958__delegate;
return G__477958;
})()
;})(vec__477912,max_v,min_v,offset_v,offset_x,pos_y,vec__477911,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__477920_477955 = null;var count__477921_477956 = (0);var i__477922_477957 = (0);while(true){
if((i__477922_477957 < count__477921_477956))
{var vec__477923_477960 = cljs.core._nth.call(null,chunk__477920_477955,i__477922_477957);var idx_477961 = cljs.core.nth.call(null,vec__477923_477960,(0),null);var prev_477962 = cljs.core.nth.call(null,vec__477923_477960,(1),null);var curr_477963 = cljs.core.nth.call(null,vec__477923_477960,(2),null);ctx.beginPath();
ctx.moveTo((idx_477961 * offset_x),(((1) - (prev_477962 / (100))) * h));
ctx.lineTo(((idx_477961 + (1)) * offset_x),(((1) - (curr_477963 / (100))) * h));
ctx.stroke();
{
var G__477964 = seq__477919_477954;
var G__477965 = chunk__477920_477955;
var G__477966 = count__477921_477956;
var G__477967 = (i__477922_477957 + (1));
seq__477919_477954 = G__477964;
chunk__477920_477955 = G__477965;
count__477921_477956 = G__477966;
i__477922_477957 = G__477967;
continue;
}
} else
{var temp__4126__auto___477968 = cljs.core.seq.call(null,seq__477919_477954);if(temp__4126__auto___477968)
{var seq__477919_477969__$1 = temp__4126__auto___477968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__477919_477969__$1))
{var c__4307__auto___477970 = cljs.core.chunk_first.call(null,seq__477919_477969__$1);{
var G__477971 = cljs.core.chunk_rest.call(null,seq__477919_477969__$1);
var G__477972 = c__4307__auto___477970;
var G__477973 = cljs.core.count.call(null,c__4307__auto___477970);
var G__477974 = (0);
seq__477919_477954 = G__477971;
chunk__477920_477955 = G__477972;
count__477921_477956 = G__477973;
i__477922_477957 = G__477974;
continue;
}
} else
{var vec__477924_477975 = cljs.core.first.call(null,seq__477919_477969__$1);var idx_477976 = cljs.core.nth.call(null,vec__477924_477975,(0),null);var prev_477977 = cljs.core.nth.call(null,vec__477924_477975,(1),null);var curr_477978 = cljs.core.nth.call(null,vec__477924_477975,(2),null);ctx.beginPath();
ctx.moveTo((idx_477976 * offset_x),(((1) - (prev_477977 / (100))) * h));
ctx.lineTo(((idx_477976 + (1)) * offset_x),(((1) - (curr_477978 / (100))) * h));
ctx.stroke();
{
var G__477979 = cljs.core.next.call(null,seq__477919_477969__$1);
var G__477980 = null;
var G__477981 = (0);
var G__477982 = (0);
seq__477919_477954 = G__477979;
chunk__477920_477955 = G__477980;
count__477921_477956 = G__477981;
i__477922_477957 = G__477982;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__477993 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__477993,(0),null);var min_v = cljs.core.nth.call(null,vec__477993,(1),null);var offset_v = cljs.core.nth.call(null,vec__477993,(2),null);var offset_x = cljs.core.nth.call(null,vec__477993,(3),null);var pos_y = cljs.core.nth.call(null,vec__477993,(4),null);(ctx["fillStyle"] = "black");
var seq__477994 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__477993,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__478002__delegate = function (args){return args;
};
var G__478002 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__478002__delegate.call(this,args);};
G__478002.cljs$lang$maxFixedArity = 0;
G__478002.cljs$lang$applyTo = (function (arglist__478003){
var args = cljs.core.seq(arglist__478003);
return G__478002__delegate(args);
});
G__478002.cljs$core$IFn$_invoke$arity$variadic = G__478002__delegate;
return G__478002;
})()
;})(vec__477993,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__477995 = null;var count__477996 = (0);var i__477997 = (0);while(true){
if((i__477997 < count__477996))
{var vec__477998 = cljs.core._nth.call(null,chunk__477995,i__477997);var idx = cljs.core.nth.call(null,vec__477998,(0),null);var vec__477999 = cljs.core.nth.call(null,vec__477998,(1),null);var date = cljs.core.nth.call(null,vec__477999,(0),null);var _ = cljs.core.nthnext.call(null,vec__477999,(1));var line = vec__477999;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__477994,chunk__477995,count__477996,i__477997,vec__477998,idx,vec__477999,date,_,line,vec__477993,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__477983_SHARP_){return cljs.core._EQ_.call(null,date,p1__477983_SHARP_);
});})(seq__477994,chunk__477995,count__477996,i__477997,vec__477998,idx,vec__477999,date,_,line,vec__477993,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__478004 = seq__477994;
var G__478005 = chunk__477995;
var G__478006 = count__477996;
var G__478007 = (i__477997 + (1));
seq__477994 = G__478004;
chunk__477995 = G__478005;
count__477996 = G__478006;
i__477997 = G__478007;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__477994);if(temp__4126__auto__)
{var seq__477994__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__477994__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__477994__$1);{
var G__478008 = cljs.core.chunk_rest.call(null,seq__477994__$1);
var G__478009 = c__4307__auto__;
var G__478010 = cljs.core.count.call(null,c__4307__auto__);
var G__478011 = (0);
seq__477994 = G__478008;
chunk__477995 = G__478009;
count__477996 = G__478010;
i__477997 = G__478011;
continue;
}
} else
{var vec__478000 = cljs.core.first.call(null,seq__477994__$1);var idx = cljs.core.nth.call(null,vec__478000,(0),null);var vec__478001 = cljs.core.nth.call(null,vec__478000,(1),null);var date = cljs.core.nth.call(null,vec__478001,(0),null);var _ = cljs.core.nthnext.call(null,vec__478001,(1));var line = vec__478001;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__477994,chunk__477995,count__477996,i__477997,vec__478000,idx,vec__478001,date,_,line,seq__477994__$1,temp__4126__auto__,vec__477993,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__477983_SHARP_){return cljs.core._EQ_.call(null,date,p1__477983_SHARP_);
});})(seq__477994,chunk__477995,count__477996,i__477997,vec__478000,idx,vec__478001,date,_,line,seq__477994__$1,temp__4126__auto__,vec__477993,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__478012 = cljs.core.next.call(null,seq__477994__$1);
var G__478013 = null;
var G__478014 = (0);
var G__478015 = (0);
seq__477994 = G__478012;
chunk__477995 = G__478013;
count__477996 = G__478014;
i__477997 = G__478015;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__478025 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__478025,(0),null);var min_v = cljs.core.nth.call(null,vec__478025,(1),null);var offset_v = cljs.core.nth.call(null,vec__478025,(2),null);var offset_x = cljs.core.nth.call(null,vec__478025,(3),null);var pos_y = cljs.core.nth.call(null,vec__478025,(4),null);var seq__478026 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__478025,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__478034__delegate = function (args){return args;
};
var G__478034 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__478034__delegate.call(this,args);};
G__478034.cljs$lang$maxFixedArity = 0;
G__478034.cljs$lang$applyTo = (function (arglist__478035){
var args = cljs.core.seq(arglist__478035);
return G__478034__delegate(args);
});
G__478034.cljs$core$IFn$_invoke$arity$variadic = G__478034__delegate;
return G__478034;
})()
;})(vec__478025,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__478027 = null;var count__478028 = (0);var i__478029 = (0);while(true){
if((i__478029 < count__478028))
{var vec__478030 = cljs.core._nth.call(null,chunk__478027,i__478029);var idx = cljs.core.nth.call(null,vec__478030,(0),null);var vec__478031 = cljs.core.nth.call(null,vec__478030,(1),null);var date = cljs.core.nth.call(null,vec__478031,(0),null);var open = cljs.core.nth.call(null,vec__478031,(1),null);var high = cljs.core.nth.call(null,vec__478031,(2),null);var low = cljs.core.nth.call(null,vec__478031,(3),null);var close = cljs.core.nth.call(null,vec__478031,(4),null);var volume = cljs.core.nth.call(null,vec__478031,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__478036 = seq__478026;
var G__478037 = chunk__478027;
var G__478038 = count__478028;
var G__478039 = (i__478029 + (1));
seq__478026 = G__478036;
chunk__478027 = G__478037;
count__478028 = G__478038;
i__478029 = G__478039;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__478026);if(temp__4126__auto__)
{var seq__478026__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__478026__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__478026__$1);{
var G__478040 = cljs.core.chunk_rest.call(null,seq__478026__$1);
var G__478041 = c__4307__auto__;
var G__478042 = cljs.core.count.call(null,c__4307__auto__);
var G__478043 = (0);
seq__478026 = G__478040;
chunk__478027 = G__478041;
count__478028 = G__478042;
i__478029 = G__478043;
continue;
}
} else
{var vec__478032 = cljs.core.first.call(null,seq__478026__$1);var idx = cljs.core.nth.call(null,vec__478032,(0),null);var vec__478033 = cljs.core.nth.call(null,vec__478032,(1),null);var date = cljs.core.nth.call(null,vec__478033,(0),null);var open = cljs.core.nth.call(null,vec__478033,(1),null);var high = cljs.core.nth.call(null,vec__478033,(2),null);var low = cljs.core.nth.call(null,vec__478033,(3),null);var close = cljs.core.nth.call(null,vec__478033,(4),null);var volume = cljs.core.nth.call(null,vec__478033,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__478044 = cljs.core.next.call(null,seq__478026__$1);
var G__478045 = null;
var G__478046 = (0);
var G__478047 = (0);
seq__478026 = G__478044;
chunk__478027 = G__478045;
count__478028 = G__478046;
i__478029 = G__478047;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__478051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__478051,(0),null);var h = cljs.core.nth.call(null,vec__478051,(1),null);return ((function (ctx,vec__478051,w,h){
return (function (p__478052){var map__478053 = p__478052;var map__478053__$1 = ((cljs.core.seq_QMARK_.call(null,map__478053))?cljs.core.apply.call(null,cljs.core.hash_map,map__478053):map__478053);var appctx = map__478053__$1;var bias = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__478053__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
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
;})(ctx,vec__478051,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj478091 = {"url":"/proxy","dataType":"text","data":(function (){var obj478093 = {"url":url};return obj478093;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_478100){var state_val_478101 = (state_478100[(1)]);if((state_val_478101 === (2)))
{var inst_478097 = (state_478100[(2)]);var inst_478098 = cljs.core.async.close_BANG_.call(null,ret);var state_478100__$1 = (function (){var statearr_478102 = state_478100;(statearr_478102[(7)] = inst_478097);
return statearr_478102;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_478100__$1,inst_478098);
} else
{if((state_val_478101 === (1)))
{var inst_478094 = [null,data];var inst_478095 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478094,null));var state_478100__$1 = state_478100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_478100__$1,(2),ret,inst_478095);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_478106 = [null,null,null,null,null,null,null,null];(statearr_478106[(0)] = state_machine__6188__auto__);
(statearr_478106[(1)] = (1));
return statearr_478106;
});
var state_machine__6188__auto____1 = (function (state_478100){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_478100);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e478107){if((e478107 instanceof Object))
{var ex__6191__auto__ = e478107;var statearr_478108_478126 = state_478100;(statearr_478108_478126[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_478100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e478107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__478127 = state_478100;
state_478100 = G__478127;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_478100){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_478100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_478109 = f__6203__auto__.call(null);(statearr_478109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_478109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_478116){var state_val_478117 = (state_478116[(1)]);if((state_val_478117 === (2)))
{var inst_478113 = (state_478116[(2)]);var inst_478114 = cljs.core.async.close_BANG_.call(null,ret);var state_478116__$1 = (function (){var statearr_478118 = state_478116;(statearr_478118[(7)] = inst_478113);
return statearr_478118;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_478116__$1,inst_478114);
} else
{if((state_val_478117 === (1)))
{var inst_478110 = [err];var inst_478111 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478110,null));var state_478116__$1 = state_478116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_478116__$1,(2),ret,inst_478111);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_478122 = [null,null,null,null,null,null,null,null];(statearr_478122[(0)] = state_machine__6188__auto__);
(statearr_478122[(1)] = (1));
return statearr_478122;
});
var state_machine__6188__auto____1 = (function (state_478116){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_478116);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e478123){if((e478123 instanceof Object))
{var ex__6191__auto__ = e478123;var statearr_478124_478128 = state_478116;(statearr_478124_478128[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_478116);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e478123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__478129 = state_478116;
state_478116 = G__478129;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_478116){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_478116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_478125 = f__6203__auto__.call(null);(statearr_478125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_478125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj478091;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__478138(s__478139){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__478139__$1 = s__478139;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__478139__$1);if(temp__4126__auto__)
{var s__478139__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__478139__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__478139__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__478141 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__478140 = (0);while(true){
if((i__478140 < size__4275__auto__))
{var vec__478144 = cljs.core._nth.call(null,c__4274__auto__,i__478140);var _ = cljs.core.nth.call(null,vec__478144,(0),null);var date = cljs.core.nth.call(null,vec__478144,(1),null);var open = cljs.core.nth.call(null,vec__478144,(2),null);var high = cljs.core.nth.call(null,vec__478144,(3),null);var low = cljs.core.nth.call(null,vec__478144,(4),null);var close = cljs.core.nth.call(null,vec__478144,(5),null);var volume = cljs.core.nth.call(null,vec__478144,(6),null);cljs.core.chunk_append.call(null,b__478141,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__478146 = (i__478140 + (1));
i__478140 = G__478146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__478141),iter__478138.call(null,cljs.core.chunk_rest.call(null,s__478139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__478141),null);
}
} else
{var vec__478145 = cljs.core.first.call(null,s__478139__$2);var _ = cljs.core.nth.call(null,vec__478145,(0),null);var date = cljs.core.nth.call(null,vec__478145,(1),null);var open = cljs.core.nth.call(null,vec__478145,(2),null);var high = cljs.core.nth.call(null,vec__478145,(3),null);var low = cljs.core.nth.call(null,vec__478145,(4),null);var close = cljs.core.nth.call(null,vec__478145,(5),null);var volume = cljs.core.nth.call(null,vec__478145,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__478138.call(null,cljs.core.rest.call(null,s__478139__$2)));
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
return (function (state_478224){var state_val_478225 = (state_478224[(1)]);if((state_val_478225 === (9)))
{var inst_478214 = (state_478224[(2)]);var state_478224__$1 = state_478224;var statearr_478226_478243 = state_478224__$1;(statearr_478226_478243[(2)] = inst_478214);
(statearr_478226_478243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478225 === (8)))
{var inst_478220 = (state_478224[(2)]);var state_478224__$1 = state_478224;var statearr_478227_478244 = state_478224__$1;(statearr_478227_478244[(2)] = inst_478220);
(statearr_478227_478244[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478225 === (7)))
{var inst_478206 = (state_478224[(7)]);var inst_478216 = cljs.core.concat.call(null,all,inst_478206);var inst_478217 = [null,inst_478216];var inst_478218 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478217,null));var state_478224__$1 = state_478224;var statearr_478228_478245 = state_478224__$1;(statearr_478228_478245[(2)] = inst_478218);
(statearr_478228_478245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478225 === (6)))
{var inst_478206 = (state_478224[(7)]);var inst_478210 = cljs.core.concat.call(null,all,inst_478206);var inst_478211 = (start + num);var inst_478212 = stock_info.call(null,inst_478210,id,startdate,inst_478211,num);var state_478224__$1 = state_478224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_478224__$1,(9),inst_478212);
} else
{if((state_val_478225 === (5)))
{var inst_478222 = (state_478224[(2)]);var state_478224__$1 = state_478224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_478224__$1,inst_478222);
} else
{if((state_val_478225 === (4)))
{var inst_478201 = (state_478224[(8)]);var inst_478206 = (state_478224[(7)]);var inst_478206__$1 = test.stock4.parse_info.call(null,inst_478201);var inst_478207 = cljs.core.count.call(null,inst_478206__$1);var inst_478208 = cljs.core._EQ_.call(null,num,inst_478207);var state_478224__$1 = (function (){var statearr_478229 = state_478224;(statearr_478229[(7)] = inst_478206__$1);
return statearr_478229;
})();if(inst_478208)
{var statearr_478230_478246 = state_478224__$1;(statearr_478230_478246[(1)] = (6));
} else
{var statearr_478231_478247 = state_478224__$1;(statearr_478231_478247[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478225 === (3)))
{var inst_478200 = (state_478224[(9)]);var inst_478203 = [inst_478200];var inst_478204 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478203,null));var state_478224__$1 = state_478224;var statearr_478232_478248 = state_478224__$1;(statearr_478232_478248[(2)] = inst_478204);
(statearr_478232_478248[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478225 === (2)))
{var inst_478200 = (state_478224[(9)]);var inst_478199 = (state_478224[(2)]);var inst_478200__$1 = cljs.core.nth.call(null,inst_478199,(0),null);var inst_478201 = cljs.core.nth.call(null,inst_478199,(1),null);var state_478224__$1 = (function (){var statearr_478233 = state_478224;(statearr_478233[(8)] = inst_478201);
(statearr_478233[(9)] = inst_478200__$1);
return statearr_478233;
})();if(cljs.core.truth_(inst_478200__$1))
{var statearr_478234_478249 = state_478224__$1;(statearr_478234_478249[(1)] = (3));
} else
{var statearr_478235_478250 = state_478224__$1;(statearr_478235_478250[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478225 === (1)))
{var inst_478196 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_478197 = test.stock4.content.call(null,inst_478196);var state_478224__$1 = state_478224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_478224__$1,(2),inst_478197);
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
var state_machine__6188__auto____0 = (function (){var statearr_478239 = [null,null,null,null,null,null,null,null,null,null];(statearr_478239[(0)] = state_machine__6188__auto__);
(statearr_478239[(1)] = (1));
return statearr_478239;
});
var state_machine__6188__auto____1 = (function (state_478224){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_478224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e478240){if((e478240 instanceof Object))
{var ex__6191__auto__ = e478240;var statearr_478241_478251 = state_478224;(statearr_478241_478251[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_478224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e478240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__478252 = state_478224;
state_478224 = G__478252;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_478224){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_478224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_478242 = f__6203__auto__.call(null);(statearr_478242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_478242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__478261 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__478261,(0),null);var open = cljs.core.nth.call(null,vec__478261,(1),null);var _ = cljs.core.nth.call(null,vec__478261,(2),null);var ___$1 = cljs.core.nth.call(null,vec__478261,(3),null);var ___$2 = cljs.core.nth.call(null,vec__478261,(4),null);var ___$3 = cljs.core.nth.call(null,vec__478261,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__478261,date,open,_,___$1,___$2,___$3){
return (function (p__478263){var vec__478264 = p__478263;var ___$4 = cljs.core.nth.call(null,vec__478264,(0),null);var ___$5 = cljs.core.nth.call(null,vec__478264,(1),null);var high = cljs.core.nth.call(null,vec__478264,(2),null);var ___$6 = cljs.core.nth.call(null,vec__478264,(3),null);var ___$7 = cljs.core.nth.call(null,vec__478264,(4),null);var ___$8 = cljs.core.nth.call(null,vec__478264,(5),null);return high;
});})(group,vec__478261,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__478261,date,open,_,___$1,___$2,___$3,high){
return (function (p__478265){var vec__478266 = p__478265;var ___$4 = cljs.core.nth.call(null,vec__478266,(0),null);var ___$5 = cljs.core.nth.call(null,vec__478266,(1),null);var ___$6 = cljs.core.nth.call(null,vec__478266,(2),null);var low = cljs.core.nth.call(null,vec__478266,(3),null);var ___$7 = cljs.core.nth.call(null,vec__478266,(4),null);var ___$8 = cljs.core.nth.call(null,vec__478266,(5),null);return low;
});})(group,vec__478261,date,open,_,___$1,___$2,___$3,high))
,group));var vec__478262 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__478262,(0),null);var ___$5 = cljs.core.nth.call(null,vec__478262,(1),null);var ___$6 = cljs.core.nth.call(null,vec__478262,(2),null);var ___$7 = cljs.core.nth.call(null,vec__478262,(3),null);var close = cljs.core.nth.call(null,vec__478262,(4),null);var ___$8 = cljs.core.nth.call(null,vec__478262,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__478261,date,open,_,___$1,___$2,___$3,high,low,vec__478262,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__478267){var vec__478268 = p__478267;var ___$9 = cljs.core.nth.call(null,vec__478268,(0),null);var ___$10 = cljs.core.nth.call(null,vec__478268,(1),null);var ___$11 = cljs.core.nth.call(null,vec__478268,(2),null);var ___$12 = cljs.core.nth.call(null,vec__478268,(3),null);var ___$13 = cljs.core.nth.call(null,vec__478268,(4),null);var volume = cljs.core.nth.call(null,vec__478268,(5),null);return volume;
});})(group,vec__478261,date,open,_,___$1,___$2,___$3,high,low,vec__478262,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__478261,date,open,_,___$1,___$2,___$3,high,low,vec__478262,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__478261,date,open,_,___$1,___$2,___$3,high,low,vec__478262,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__478272 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__478272,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478272,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478272,(2),null);var ___$3 = cljs.core.nth.call(null,vec__478272,(3),null);var c1 = cljs.core.nth.call(null,vec__478272,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478272,(5),null);var l1 = vec__478272;var vec__478273 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__478273,(0),null);var ___$5 = cljs.core.nth.call(null,vec__478273,(1),null);var ___$6 = cljs.core.nth.call(null,vec__478273,(2),null);var ___$7 = cljs.core.nth.call(null,vec__478273,(3),null);var c2 = cljs.core.nth.call(null,vec__478273,(4),null);var ___$8 = cljs.core.nth.call(null,vec__478273,(5),null);var l2 = vec__478273;var vec__478274 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__478274,(0),null);var ___$10 = cljs.core.nth.call(null,vec__478274,(1),null);var ___$11 = cljs.core.nth.call(null,vec__478274,(2),null);var ___$12 = cljs.core.nth.call(null,vec__478274,(3),null);var c3 = cljs.core.nth.call(null,vec__478274,(4),null);var ___$13 = cljs.core.nth.call(null,vec__478274,(5),null);var l3 = vec__478274;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__478272,_,___$1,___$2,___$3,c1,___$4,l1,vec__478273,date,___$5,___$6,___$7,c2,___$8,l2,vec__478274,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__478272,_,___$1,___$2,___$3,c1,___$4,l1,vec__478273,date,___$5,___$6,___$7,c2,___$8,l2,vec__478274,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__478279){var vec__478280 = p__478279;var _ = cljs.core.nth.call(null,vec__478280,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478280,(1),null);var high = cljs.core.nth.call(null,vec__478280,(2),null);var low = cljs.core.nth.call(null,vec__478280,(3),null);var ___$2 = cljs.core.nth.call(null,vec__478280,(4),null);var ___$3 = cljs.core.nth.call(null,vec__478280,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__478278 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__478278,(0),null);var open = cljs.core.nth.call(null,vec__478278,(1),null);var high = cljs.core.nth.call(null,vec__478278,(2),null);var low = cljs.core.nth.call(null,vec__478278,(3),null);var close = cljs.core.nth.call(null,vec__478278,(4),null);var ___$1 = cljs.core.nth.call(null,vec__478278,(5),null);var curr = vec__478278;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__478278,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__478278,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__478283){var vec__478284 = p__478283;var _ = cljs.core.nth.call(null,vec__478284,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478284,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478284,(2),null);var ___$3 = cljs.core.nth.call(null,vec__478284,(3),null);var close = cljs.core.nth.call(null,vec__478284,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478284,(5),null);return close;
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
return (function (p__478287){var vec__478288 = p__478287;var _ = cljs.core.nth.call(null,vec__478288,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478288,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478288,(2),null);var ___$3 = cljs.core.nth.call(null,vec__478288,(3),null);var close = cljs.core.nth.call(null,vec__478288,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478288,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__478294 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__478294,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478294,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478294,(2),null);var ___$3 = cljs.core.nth.call(null,vec__478294,(3),null);var close = cljs.core.nth.call(null,vec__478294,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478294,(5),null);var curr = vec__478294;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__478294,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__478295){var vec__478296 = p__478295;var vec__478297 = cljs.core.nth.call(null,vec__478296,(0),null);var ___$5 = cljs.core.nth.call(null,vec__478297,(0),null);var prev_ema = cljs.core.nth.call(null,vec__478297,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__478296,(1),null);var idx = cljs.core.nth.call(null,vec__478296,(2),null);var vec__478298 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__478298,(0),null);var ___$7 = cljs.core.nth.call(null,vec__478298,(1),null);var ___$8 = cljs.core.nth.call(null,vec__478298,(2),null);var ___$9 = cljs.core.nth.call(null,vec__478298,(3),null);var close__$1 = cljs.core.nth.call(null,vec__478298,(4),null);var ___$10 = cljs.core.nth.call(null,vec__478298,(5),null);var curr__$1 = vec__478298;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__478294,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__478304 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__478304,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478304,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478304,(2),null);var ___$3 = cljs.core.nth.call(null,vec__478304,(3),null);var ct = cljs.core.nth.call(null,vec__478304,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478304,(5),null);var curr = vec__478304;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__478304,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__478305){var vec__478306 = p__478305;var ___$5 = cljs.core.nth.call(null,vec__478306,(0),null);var ___$6 = cljs.core.nth.call(null,vec__478306,(1),null);var ___$7 = cljs.core.nth.call(null,vec__478306,(2),null);var low = cljs.core.nth.call(null,vec__478306,(3),null);var ___$8 = cljs.core.nth.call(null,vec__478306,(4),null);var ___$9 = cljs.core.nth.call(null,vec__478306,(5),null);return low;
});})(group,vec__478304,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__478304,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__478307){var vec__478308 = p__478307;var ___$5 = cljs.core.nth.call(null,vec__478308,(0),null);var ___$6 = cljs.core.nth.call(null,vec__478308,(1),null);var high = cljs.core.nth.call(null,vec__478308,(2),null);var ___$7 = cljs.core.nth.call(null,vec__478308,(3),null);var ___$8 = cljs.core.nth.call(null,vec__478308,(4),null);var ___$9 = cljs.core.nth.call(null,vec__478308,(5),null);return high;
});})(group,vec__478304,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__478304,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__478304,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__478311){var vec__478312 = p__478311;var line = cljs.core.nth.call(null,vec__478312,(0),null);var v = cljs.core.nth.call(null,vec__478312,(1),null);return v;
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
return (function (p__478336){var vec__478337 = p__478336;var _ = cljs.core.nth.call(null,vec__478337,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478337,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478337,(2),null);var low = cljs.core.nth.call(null,vec__478337,(3),null);var ___$3 = cljs.core.nth.call(null,vec__478337,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478337,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__478338){var vec__478339 = p__478338;var vec__478340 = cljs.core.nth.call(null,vec__478339,(0),null);var _ = cljs.core.nth.call(null,vec__478340,(0),null);var value = cljs.core.nth.call(null,vec__478340,(1),null);var ori = cljs.core.nth.call(null,vec__478339,(1),null);var prev = cljs.core.nth.call(null,vec__478339,(2),null);var curr = cljs.core.nth.call(null,vec__478339,(3),null);var act = cljs.core.nth.call(null,vec__478339,(4),null);var af = cljs.core.nth.call(null,vec__478339,(5),null);var vec__478341 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__478341,(0),null);var ___$2 = cljs.core.nth.call(null,vec__478341,(1),null);var ph = cljs.core.nth.call(null,vec__478341,(2),null);var pl = cljs.core.nth.call(null,vec__478341,(3),null);var ___$3 = cljs.core.nth.call(null,vec__478341,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478341,(5),null);var prev_line = vec__478341;var vec__478342 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__478342,(0),null);var ___$6 = cljs.core.nth.call(null,vec__478342,(1),null);var ch = cljs.core.nth.call(null,vec__478342,(2),null);var cl = cljs.core.nth.call(null,vec__478342,(3),null);var ___$7 = cljs.core.nth.call(null,vec__478342,(4),null);var ___$8 = cljs.core.nth.call(null,vec__478342,(5),null);var curr_line = vec__478342;var should_turn = (function (){var pred__478343 = cljs.core._EQ_;var expr__478344 = act;if(cljs.core.truth_(pred__478343.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__478344)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__478343.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__478344)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__478344))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__478346 = cljs.core._EQ_;var expr__478347 = act;if(cljs.core.truth_(pred__478346.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__478347)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__478346,expr__478347,vec__478341,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__478342,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__478339,vec__478340,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__478349){var vec__478350 = p__478349;var ___$9 = cljs.core.nth.call(null,vec__478350,(0),null);var ___$10 = cljs.core.nth.call(null,vec__478350,(1),null);var high = cljs.core.nth.call(null,vec__478350,(2),null);var ___$11 = cljs.core.nth.call(null,vec__478350,(3),null);var ___$12 = cljs.core.nth.call(null,vec__478350,(4),null);var ___$13 = cljs.core.nth.call(null,vec__478350,(5),null);return high;
});})(pred__478346,expr__478347,vec__478341,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__478342,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__478339,vec__478340,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__478346.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__478347)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__478346,expr__478347,vec__478341,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__478342,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__478339,vec__478340,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__478351){var vec__478352 = p__478351;var ___$9 = cljs.core.nth.call(null,vec__478352,(0),null);var ___$10 = cljs.core.nth.call(null,vec__478352,(1),null);var ___$11 = cljs.core.nth.call(null,vec__478352,(2),null);var low__$1 = cljs.core.nth.call(null,vec__478352,(3),null);var ___$12 = cljs.core.nth.call(null,vec__478352,(4),null);var ___$13 = cljs.core.nth.call(null,vec__478352,(5),null);return low__$1;
});})(pred__478346,expr__478347,vec__478341,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__478342,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__478339,vec__478340,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__478347))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__478353 = cljs.core._EQ_;var expr__478354 = act;if(cljs.core.truth_(pred__478353.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__478354)))
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
{if(cljs.core.truth_(pred__478353.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__478354)))
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
{if(cljs.core.truth_(pred__478353.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__478354)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__478354))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__478356 = cljs.core._EQ_;var expr__478357 = act;if(cljs.core.truth_(pred__478356.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__478357)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__478356.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__478357)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__478357))));
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
return (function (p1__478359_SHARP_){return Math.pow((p1__478359_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__478365 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__478365,(0),null);var vec__478366 = cljs.core.nth.call(null,vec__478365,(1),null);var avg = cljs.core.nth.call(null,vec__478366,(0),null);var sd_v = cljs.core.nth.call(null,vec__478366,(1),null);var currs = cljs.core.map.call(null,((function (vec__478365,_,vec__478366,avg,sd_v){
return (function (p__478367){var vec__478368 = p__478367;var ___$1 = cljs.core.nth.call(null,vec__478368,(0),null);var ___$2 = cljs.core.nth.call(null,vec__478368,(1),null);var ___$3 = cljs.core.nth.call(null,vec__478368,(2),null);var ___$4 = cljs.core.nth.call(null,vec__478368,(3),null);var close = cljs.core.nth.call(null,vec__478368,(4),null);var ___$5 = cljs.core.nth.call(null,vec__478368,(5),null);return close;
});})(vec__478365,_,vec__478366,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__478365,_,vec__478366,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__478365,_,vec__478366,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__478365,_,vec__478366,avg,sd_v,currs,offsets){
return (function (p1__478360_SHARP_){return (p1__478360_SHARP_ / sd_v);
});})(vec__478365,_,vec__478366,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__478365,_,vec__478366,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__478369__delegate = function (args){return args;
};
var G__478369 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__478369__delegate.call(this,args);};
G__478369.cljs$lang$maxFixedArity = 0;
G__478369.cljs$lang$applyTo = (function (arglist__478370){
var args = cljs.core.seq(arglist__478370);
return G__478369__delegate(args);
});
G__478369.cljs$core$IFn$_invoke$arity$variadic = G__478369__delegate;
return G__478369;
})()
;})(vec__478365,_,vec__478366,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
/**
* 余氏指標
* w用0.001看多空動能
* w用0.5看振盪方向
*/
test.stock4.yu = (function yu(w,n,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,((function (normal){
return (function (p__478379,p__478380){var vec__478381 = p__478379;var _ = cljs.core.nth.call(null,vec__478381,(0),null);var ___$1 = cljs.core.nth.call(null,vec__478381,(1),null);var ___$2 = cljs.core.nth.call(null,vec__478381,(2),null);var ___$3 = cljs.core.nth.call(null,vec__478381,(3),null);var pc = cljs.core.nth.call(null,vec__478381,(4),null);var ___$4 = cljs.core.nth.call(null,vec__478381,(5),null);var vec__478382 = p__478380;var ___$5 = cljs.core.nth.call(null,vec__478382,(0),null);var ___$6 = cljs.core.nth.call(null,vec__478382,(1),null);var ___$7 = cljs.core.nth.call(null,vec__478382,(2),null);var ___$8 = cljs.core.nth.call(null,vec__478382,(3),null);var cc = cljs.core.nth.call(null,vec__478382,(4),null);var ___$9 = cljs.core.nth.call(null,vec__478382,(5),null);return (((cc - pc) / pc) / normal);
});})(normal))
,reverse_kline,cljs.core.rest.call(null,reverse_kline));var vs = cljs.core.map.call(null,((function (normal,up_seq){
return (function (p__478383){var vec__478384 = p__478383;var dir = cljs.core.nth.call(null,vec__478384,(0),null);var ran = cljs.core.nth.call(null,vec__478384,(1),null);return ran;
});})(normal,up_seq))
,cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__478385,up_offset){var vec__478386 = p__478385;var prev = cljs.core.nth.call(null,vec__478386,(0),null);var ran = cljs.core.nth.call(null,vec__478386,(1),null);var max_v = (prev + ran);var min_v = (prev - ran);if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((Math.abs(up_offset) - ran) * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (normal,up_seq,vs){
return (function() { 
var G__478387__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__478387 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__478387__delegate.call(this,args);};
G__478387.cljs$lang$maxFixedArity = 0;
G__478387.cljs$lang$applyTo = (function (arglist__478388){
var args = cljs.core.seq(arglist__478388);
return G__478387__delegate(args);
});
G__478387.cljs$core$IFn$_invoke$arity$variadic = G__478387__delegate;
return G__478387;
})()
;})(normal,up_seq,vs))
,cljs.core.rest.call(null,reverse_kline),vs);
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_478818){var state_val_478819 = (state_478818[(1)]);if((state_val_478819 === (2)))
{var inst_478816 = (state_478818[(2)]);var state_478818__$1 = state_478818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_478818__$1,inst_478816);
} else
{if((state_val_478819 === (1)))
{var inst_478814 = cljs.core.js__GT_clj.call(null,data);var state_478818__$1 = state_478818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_478818__$1,(2),onView,inst_478814);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_478823 = [null,null,null,null,null,null,null];(statearr_478823[(0)] = state_machine__6188__auto__);
(statearr_478823[(1)] = (1));
return statearr_478823;
});
var state_machine__6188__auto____1 = (function (state_478818){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_478818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e478824){if((e478824 instanceof Object))
{var ex__6191__auto__ = e478824;var statearr_478825_479239 = state_478818;(statearr_478825_479239[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_478818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e478824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__479240 = state_478818;
state_478818 = G__479240;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_478818){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_478818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_478826 = f__6203__auto__.call(null);(statearr_478826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_478826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___479241 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___479241,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___479241,draw,onSystem,onView){
return (function (state_478843){var state_val_478844 = (state_478843[(1)]);if((state_val_478844 === (6)))
{var inst_478839 = (state_478843[(2)]);var state_478843__$1 = state_478843;var statearr_478845_479242 = state_478843__$1;(statearr_478845_479242[(2)] = inst_478839);
(statearr_478845_479242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478844 === (5)))
{var inst_478841 = (state_478843[(2)]);var state_478843__$1 = state_478843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_478843__$1,inst_478841);
} else
{if((state_val_478844 === (4)))
{var inst_478832 = (state_478843[(7)]);var inst_478836 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_478832];var inst_478837 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478836,null));var state_478843__$1 = state_478843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_478843__$1,(6),onSystem,inst_478837);
} else
{if((state_val_478844 === (3)))
{var inst_478831 = (state_478843[(8)]);var inst_478834 = alert(inst_478831);var state_478843__$1 = state_478843;var statearr_478846_479243 = state_478843__$1;(statearr_478846_479243[(2)] = inst_478834);
(statearr_478846_479243[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478844 === (2)))
{var inst_478831 = (state_478843[(8)]);var inst_478830 = (state_478843[(2)]);var inst_478831__$1 = cljs.core.nth.call(null,inst_478830,(0),null);var inst_478832 = cljs.core.nth.call(null,inst_478830,(1),null);var state_478843__$1 = (function (){var statearr_478847 = state_478843;(statearr_478847[(8)] = inst_478831__$1);
(statearr_478847[(7)] = inst_478832);
return statearr_478847;
})();if(cljs.core.truth_(inst_478831__$1))
{var statearr_478848_479244 = state_478843__$1;(statearr_478848_479244[(1)] = (3));
} else
{var statearr_478849_479245 = state_478843__$1;(statearr_478849_479245[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_478844 === (1)))
{var inst_478828 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_478843__$1 = state_478843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_478843__$1,(2),inst_478828);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___479241,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___479241,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_478853 = [null,null,null,null,null,null,null,null,null];(statearr_478853[(0)] = state_machine__6188__auto__);
(statearr_478853[(1)] = (1));
return statearr_478853;
});
var state_machine__6188__auto____1 = (function (state_478843){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_478843);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e478854){if((e478854 instanceof Object))
{var ex__6191__auto__ = e478854;var statearr_478855_479246 = state_478843;(statearr_478855_479246[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_478843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e478854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__479247 = state_478843;
state_478843 = G__479247;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_478843){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_478843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___479241,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_478856 = f__6203__auto__.call(null);(statearr_478856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___479241);
return statearr_478856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___479241,draw,onSystem,onView))
);
var c__6202__auto___479248 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___479248,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___479248,draw,onSystem,onView){
return (function (state_479113){var state_val_479114 = (state_479113[(1)]);if((state_val_479114 === (65)))
{var inst_479058 = (state_479113[(7)]);var inst_479067 = cljs.core.first.call(null,inst_479058);var inst_479068 = cljs.core.pr_str.call(null,inst_479067);var inst_479069 = console.log(inst_479068);var inst_479070 = cljs.core.next.call(null,inst_479058);var inst_479044 = inst_479070;var inst_479045 = null;var inst_479046 = (0);var inst_479047 = (0);var state_479113__$1 = (function (){var statearr_479115 = state_479113;(statearr_479115[(8)] = inst_479047);
(statearr_479115[(9)] = inst_479044);
(statearr_479115[(10)] = inst_479069);
(statearr_479115[(11)] = inst_479046);
(statearr_479115[(12)] = inst_479045);
return statearr_479115;
})();var statearr_479116_479249 = state_479113__$1;(statearr_479116_479249[(2)] = null);
(statearr_479116_479249[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (62)))
{var state_479113__$1 = state_479113;var statearr_479117_479250 = state_479113__$1;(statearr_479117_479250[(2)] = null);
(statearr_479117_479250[(1)] = (63));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (7)))
{var inst_478870 = (state_479113[(13)]);var inst_478875 = cljs.core.apply.call(null,cljs.core.hash_map,inst_478870);var state_479113__$1 = state_479113;var statearr_479118_479251 = state_479113__$1;(statearr_479118_479251[(2)] = inst_478875);
(statearr_479118_479251[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (59)))
{var inst_479044 = (state_479113[(9)]);var inst_479058 = (state_479113[(7)]);var inst_479058__$1 = cljs.core.seq.call(null,inst_479044);var state_479113__$1 = (function (){var statearr_479122 = state_479113;(statearr_479122[(7)] = inst_479058__$1);
return statearr_479122;
})();if(inst_479058__$1)
{var statearr_479123_479252 = state_479113__$1;(statearr_479123_479252[(1)] = (61));
} else
{var statearr_479124_479253 = state_479113__$1;(statearr_479124_479253[(1)] = (62));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (20)))
{var inst_478885 = (state_479113[(14)]);var inst_478913 = cljs.core.apply.call(null,cljs.core.hash_map,inst_478885);var state_479113__$1 = state_479113;var statearr_479125_479254 = state_479113__$1;(statearr_479125_479254[(2)] = inst_478913);
(statearr_479125_479254[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (58)))
{var inst_479047 = (state_479113[(8)]);var inst_479044 = (state_479113[(9)]);var inst_479046 = (state_479113[(11)]);var inst_479045 = (state_479113[(12)]);var inst_479052 = cljs.core._nth.call(null,inst_479045,inst_479047);var inst_479053 = cljs.core.pr_str.call(null,inst_479052);var inst_479054 = console.log(inst_479053);var inst_479055 = (inst_479047 + (1));var tmp479119 = inst_479044;var tmp479120 = inst_479046;var tmp479121 = inst_479045;var inst_479044__$1 = tmp479119;var inst_479045__$1 = tmp479121;var inst_479046__$1 = tmp479120;var inst_479047__$1 = inst_479055;var state_479113__$1 = (function (){var statearr_479126 = state_479113;(statearr_479126[(8)] = inst_479047__$1);
(statearr_479126[(9)] = inst_479044__$1);
(statearr_479126[(11)] = inst_479046__$1);
(statearr_479126[(12)] = inst_479045__$1);
(statearr_479126[(15)] = inst_479054);
return statearr_479126;
})();var statearr_479127_479255 = state_479113__$1;(statearr_479127_479255[(2)] = null);
(statearr_479127_479255[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (60)))
{var inst_479078 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479128_479256 = state_479113__$1;(statearr_479128_479256[(2)] = inst_479078);
(statearr_479128_479256[(1)] = (57));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (27)))
{var inst_478917 = (state_479113[(16)]);var inst_478941 = cljs.core._EQ_.call(null,"sd",inst_478917);var state_479113__$1 = state_479113;if(inst_478941)
{var statearr_479129_479257 = state_479113__$1;(statearr_479129_479257[(1)] = (29));
} else
{var statearr_479130_479258 = state_479113__$1;(statearr_479130_479258[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (1)))
{var inst_478862 = (state_479113[(17)]);var inst_478860 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_478861 = [(200)];var inst_478862__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_478860,inst_478861);var inst_478863 = cljs.core.seq_QMARK_.call(null,inst_478862__$1);var state_479113__$1 = (function (){var statearr_479131 = state_479113;(statearr_479131[(17)] = inst_478862__$1);
return statearr_479131;
})();if(inst_478863)
{var statearr_479132_479259 = state_479113__$1;(statearr_479132_479259[(1)] = (2));
} else
{var statearr_479133_479260 = state_479113__$1;(statearr_479133_479260[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (24)))
{var inst_478917 = (state_479113[(16)]);var inst_478930 = cljs.core._EQ_.call(null,"yu",inst_478917);var state_479113__$1 = state_479113;if(inst_478930)
{var statearr_479134_479261 = state_479113__$1;(statearr_479134_479261[(1)] = (26));
} else
{var statearr_479135_479262 = state_479113__$1;(statearr_479135_479262[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (55)))
{var inst_479083 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479136_479263 = state_479113__$1;(statearr_479136_479263[(2)] = inst_479083);
(statearr_479136_479263[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (39)))
{var inst_478917 = (state_479113[(16)]);var inst_478985 = cljs.core._EQ_.call(null,"sar",inst_478917);var state_479113__$1 = state_479113;if(inst_478985)
{var statearr_479137_479264 = state_479113__$1;(statearr_479137_479264[(1)] = (41));
} else
{var statearr_479138_479265 = state_479113__$1;(statearr_479138_479265[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (46)))
{var inst_479089 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479139_479266 = state_479113__$1;(statearr_479139_479266[(2)] = inst_479089);
(statearr_479139_479266[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (4)))
{var inst_478868 = (state_479113[(18)]);var inst_478862 = (state_479113[(17)]);var inst_478868__$1 = (state_479113[(2)]);var inst_478869 = cljs.core.get.call(null,inst_478868__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_478870 = inst_478862;var state_479113__$1 = (function (){var statearr_479140 = state_479113;(statearr_479140[(19)] = inst_478869);
(statearr_479140[(13)] = inst_478870);
(statearr_479140[(18)] = inst_478868__$1);
return statearr_479140;
})();var statearr_479141_479267 = state_479113__$1;(statearr_479141_479267[(2)] = null);
(statearr_479141_479267[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (54)))
{var inst_478878 = (state_479113[(20)]);var state_479113__$1 = state_479113;var statearr_479142_479268 = state_479113__$1;(statearr_479142_479268[(2)] = inst_478878);
(statearr_479142_479268[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (15)))
{var inst_478878 = (state_479113[(20)]);var state_479113__$1 = state_479113;var statearr_479143_479269 = state_479113__$1;(statearr_479143_479269[(2)] = inst_478878);
(statearr_479143_479269[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (48)))
{var inst_478917 = (state_479113[(16)]);var inst_479027 = cljs.core._EQ_.call(null,"turn",inst_478917);var state_479113__$1 = state_479113;if(inst_479027)
{var statearr_479144_479270 = state_479113__$1;(statearr_479144_479270[(1)] = (50));
} else
{var statearr_479145_479271 = state_479113__$1;(statearr_479145_479271[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (50)))
{var inst_478878 = (state_479113[(20)]);var inst_478879 = (state_479113[(21)]);var inst_479029 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_479030 = test.stock4.check_turn.call(null,inst_479029);var inst_479031 = cljs.core.take.call(null,inst_478879,inst_479030);var inst_479032 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"turn","turn",75759344),inst_479031);var inst_479033 = draw.call(null,inst_479032);var state_479113__$1 = state_479113;var statearr_479146_479272 = state_479113__$1;(statearr_479146_479272[(2)] = inst_479033);
(statearr_479146_479272[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (21)))
{var inst_478885 = (state_479113[(14)]);var state_479113__$1 = state_479113;var statearr_479147_479273 = state_479113__$1;(statearr_479147_479273[(2)] = inst_478885);
(statearr_479147_479273[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (31)))
{var inst_479099 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479148_479274 = state_479113__$1;(statearr_479148_479274[(2)] = inst_479099);
(statearr_479148_479274[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (32)))
{var inst_478878 = (state_479113[(20)]);var inst_478918 = (state_479113[(22)]);var inst_478955 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478956 = test.stock4.sma.call(null,inst_478918,inst_478955);var inst_478957 = cljs.core.take.call(null,(10),inst_478956);var inst_478958 = cljs.core.pr_str.call(null,inst_478957);var inst_478959 = console.log(inst_478958);var state_479113__$1 = (function (){var statearr_479149 = state_479113;(statearr_479149[(23)] = inst_478959);
return statearr_479149;
})();var statearr_479150_479275 = state_479113__$1;(statearr_479150_479275[(2)] = inst_478878);
(statearr_479150_479275[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (40)))
{var inst_479093 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479151_479276 = state_479113__$1;(statearr_479151_479276[(2)] = inst_479093);
(statearr_479151_479276[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (56)))
{var inst_479047 = (state_479113[(8)]);var inst_479046 = (state_479113[(11)]);var inst_479049 = (inst_479047 < inst_479046);var inst_479050 = inst_479049;var state_479113__$1 = state_479113;if(cljs.core.truth_(inst_479050))
{var statearr_479152_479277 = state_479113__$1;(statearr_479152_479277[(1)] = (58));
} else
{var statearr_479153_479278 = state_479113__$1;(statearr_479153_479278[(1)] = (59));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (33)))
{var inst_478917 = (state_479113[(16)]);var inst_478961 = cljs.core._EQ_.call(null,"ema",inst_478917);var state_479113__$1 = state_479113;if(inst_478961)
{var statearr_479154_479279 = state_479113__$1;(statearr_479154_479279[(1)] = (35));
} else
{var statearr_479155_479280 = state_479113__$1;(statearr_479155_479280[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (13)))
{var inst_479108 = (state_479113[(2)]);var inst_478870 = inst_479108;var state_479113__$1 = (function (){var statearr_479156 = state_479113;(statearr_479156[(13)] = inst_478870);
return statearr_479156;
})();var statearr_479157_479281 = state_479113__$1;(statearr_479157_479281[(2)] = null);
(statearr_479157_479281[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (22)))
{var inst_478916 = (state_479113[(24)]);var inst_478917 = (state_479113[(16)]);var inst_478916__$1 = (state_479113[(2)]);var inst_478917__$1 = cljs.core.get.call(null,inst_478916__$1,"cmd");var inst_478918 = cljs.core.get.call(null,inst_478916__$1,"params");var inst_478922 = cljs.core._EQ_.call(null,"length",inst_478917__$1);var state_479113__$1 = (function (){var statearr_479158 = state_479113;(statearr_479158[(24)] = inst_478916__$1);
(statearr_479158[(16)] = inst_478917__$1);
(statearr_479158[(22)] = inst_478918);
return statearr_479158;
})();if(inst_478922)
{var statearr_479159_479282 = state_479113__$1;(statearr_479159_479282[(1)] = (23));
} else
{var statearr_479160_479283 = state_479113__$1;(statearr_479160_479283[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (36)))
{var inst_478917 = (state_479113[(16)]);var inst_478969 = cljs.core._EQ_.call(null,"rsv",inst_478917);var state_479113__$1 = state_479113;if(inst_478969)
{var statearr_479161_479284 = state_479113__$1;(statearr_479161_479284[(1)] = (38));
} else
{var statearr_479162_479285 = state_479113__$1;(statearr_479162_479285[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (41)))
{var inst_478878 = (state_479113[(20)]);var inst_478987 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478988 = cljs.core.reverse.call(null,inst_478987);var inst_478989 = test.stock4.sar.call(null,inst_478988);var inst_478990 = cljs.core.count.call(null,inst_478987);var inst_478991 = cljs.core.take.call(null,inst_478990,inst_478989);var inst_478992 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"sar","sar",833088678),inst_478991);var inst_478993 = draw.call(null,inst_478992);var state_479113__$1 = state_479113;var statearr_479163_479286 = state_479113__$1;(statearr_479163_479286[(2)] = inst_478993);
(statearr_479163_479286[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (43)))
{var inst_479091 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479164_479287 = state_479113__$1;(statearr_479164_479287[(2)] = inst_479091);
(statearr_479164_479287[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (61)))
{var inst_479058 = (state_479113[(7)]);var inst_479060 = cljs.core.chunked_seq_QMARK_.call(null,inst_479058);var state_479113__$1 = state_479113;if(inst_479060)
{var statearr_479165_479288 = state_479113__$1;(statearr_479165_479288[(1)] = (64));
} else
{var statearr_479166_479289 = state_479113__$1;(statearr_479166_479289[(1)] = (65));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (29)))
{var inst_478878 = (state_479113[(20)]);var inst_478918 = (state_479113[(22)]);var inst_478943 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478944 = test.stock4.sd.call(null,inst_478918,inst_478943);var inst_478945 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478946 = test.stock4.z_score.call(null,inst_478918,inst_478945);var inst_478947 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478948 = cljs.core.count.call(null,inst_478947);var inst_478949 = cljs.core.take.call(null,inst_478948,inst_478944);var inst_478950 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_478949);var inst_478951 = draw.call(null,inst_478950);var state_479113__$1 = (function (){var statearr_479167 = state_479113;(statearr_479167[(25)] = inst_478946);
return statearr_479167;
})();var statearr_479168_479290 = state_479113__$1;(statearr_479168_479290[(2)] = inst_478951);
(statearr_479168_479290[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (44)))
{var inst_478916 = (state_479113[(24)]);var inst_478886 = (state_479113[(26)]);var inst_478870 = (state_479113[(13)]);var inst_478878 = (state_479113[(20)]);var inst_478885 = (state_479113[(14)]);var inst_478868 = (state_479113[(18)]);var inst_478917 = (state_479113[(16)]);var inst_478884 = (state_479113[(27)]);var inst_478879 = (state_479113[(21)]);var inst_478918 = (state_479113[(22)]);var inst_479015 = cljs.core.async.chan.call(null,(1));var inst_479016 = (function (){var cmd = inst_478917;var input = inst_478916;var G__478858 = inst_478870;var ctx = inst_478878;var vec__478880 = inst_478884;var map__478910 = inst_478916;var v = inst_478885;var pred__478887 = cljs.core._EQ_;var params = inst_478918;var map__478859 = inst_478868;var expr__478920 = inst_478917;var cnt = inst_478879;var ch = inst_478886;var pred__478919 = cljs.core._EQ_;var c__6202__auto____$1 = inst_479015;var map__478872 = inst_478878;var expr__478888 = inst_478886;return ((function (cmd,input,G__478858,ctx,vec__478880,map__478910,v,pred__478887,params,map__478859,expr__478920,cnt,ch,pred__478919,c__6202__auto____$1,map__478872,expr__478888,inst_478916,inst_478886,inst_478870,inst_478878,inst_478885,inst_478868,inst_478917,inst_478884,inst_478879,inst_478918,inst_479015,state_val_479114,c__6202__auto___479248,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,G__478858,ctx,vec__478880,map__478910,v,pred__478887,params,map__478859,expr__478920,cnt,ch,pred__478919,c__6202__auto____$1,map__478872,expr__478888,inst_478916,inst_478886,inst_478870,inst_478878,inst_478885,inst_478868,inst_478917,inst_478884,inst_478879,inst_478918,inst_479015,state_val_479114,c__6202__auto___479248,draw,onSystem,onView){
return (function (state_479013){var state_val_479014 = (state_479013[(1)]);if((state_val_479014 === (6)))
{var inst_479009 = (state_479013[(2)]);var state_479013__$1 = state_479013;var statearr_479169_479291 = state_479013__$1;(statearr_479169_479291[(2)] = inst_479009);
(statearr_479169_479291[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479014 === (5)))
{var inst_479011 = (state_479013[(2)]);var state_479013__$1 = state_479013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_479013__$1,inst_479011);
} else
{if((state_val_479014 === (4)))
{var inst_479002 = (state_479013[(7)]);var inst_479006 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_479002];var inst_479007 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_479006,null));var state_479013__$1 = state_479013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_479013__$1,(6),onSystem,inst_479007);
} else
{if((state_val_479014 === (3)))
{var inst_479001 = (state_479013[(8)]);var inst_479004 = alert(inst_479001);var state_479013__$1 = state_479013;var statearr_479170_479292 = state_479013__$1;(statearr_479170_479292[(2)] = inst_479004);
(statearr_479170_479292[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479014 === (2)))
{var inst_479001 = (state_479013[(8)]);var inst_479000 = (state_479013[(2)]);var inst_479001__$1 = cljs.core.nth.call(null,inst_479000,(0),null);var inst_479002 = cljs.core.nth.call(null,inst_479000,(1),null);var state_479013__$1 = (function (){var statearr_479171 = state_479013;(statearr_479171[(8)] = inst_479001__$1);
(statearr_479171[(7)] = inst_479002);
return statearr_479171;
})();if(cljs.core.truth_(inst_479001__$1))
{var statearr_479172_479293 = state_479013__$1;(statearr_479172_479293[(1)] = (3));
} else
{var statearr_479173_479294 = state_479013__$1;(statearr_479173_479294[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479014 === (1)))
{var inst_478998 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_479013__$1 = state_479013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_479013__$1,(2),inst_478998);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,G__478858,ctx,vec__478880,map__478910,v,pred__478887,params,map__478859,expr__478920,cnt,ch,pred__478919,c__6202__auto____$1,map__478872,expr__478888,inst_478916,inst_478886,inst_478870,inst_478878,inst_478885,inst_478868,inst_478917,inst_478884,inst_478879,inst_478918,inst_479015,state_val_479114,c__6202__auto___479248,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,G__478858,ctx,vec__478880,map__478910,v,pred__478887,params,map__478859,expr__478920,cnt,ch,pred__478919,c__6202__auto____$1,map__478872,expr__478888,inst_478916,inst_478886,inst_478870,inst_478878,inst_478885,inst_478868,inst_478917,inst_478884,inst_478879,inst_478918,inst_479015,state_val_479114,c__6202__auto___479248,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_479177 = [null,null,null,null,null,null,null,null,null];(statearr_479177[(0)] = state_machine__6188__auto__);
(statearr_479177[(1)] = (1));
return statearr_479177;
});
var state_machine__6188__auto____1 = (function (state_479013){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_479013);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e479178){if((e479178 instanceof Object))
{var ex__6191__auto__ = e479178;var statearr_479179_479295 = state_479013;(statearr_479179_479295[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_479013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e479178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__479296 = state_479013;
state_479013 = G__479296;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_479013){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_479013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,G__478858,ctx,vec__478880,map__478910,v,pred__478887,params,map__478859,expr__478920,cnt,ch,pred__478919,c__6202__auto____$1,map__478872,expr__478888,inst_478916,inst_478886,inst_478870,inst_478878,inst_478885,inst_478868,inst_478917,inst_478884,inst_478879,inst_478918,inst_479015,state_val_479114,c__6202__auto___479248,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_479180 = f__6203__auto__.call(null);(statearr_479180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_479180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,G__478858,ctx,vec__478880,map__478910,v,pred__478887,params,map__478859,expr__478920,cnt,ch,pred__478919,c__6202__auto____$1,map__478872,expr__478888,inst_478916,inst_478886,inst_478870,inst_478878,inst_478885,inst_478868,inst_478917,inst_478884,inst_478879,inst_478918,inst_479015,state_val_479114,c__6202__auto___479248,draw,onSystem,onView))
})();var inst_479017 = cljs.core.async.impl.dispatch.run.call(null,inst_479016);var state_479113__$1 = (function (){var statearr_479181 = state_479113;(statearr_479181[(28)] = inst_479017);
return statearr_479181;
})();var statearr_479182_479297 = state_479113__$1;(statearr_479182_479297[(2)] = inst_478878);
(statearr_479182_479297[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (6)))
{var inst_479111 = (state_479113[(2)]);var state_479113__$1 = state_479113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_479113__$1,inst_479111);
} else
{if((state_val_479114 === (28)))
{var inst_479101 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479183_479298 = state_479113__$1;(statearr_479183_479298[(2)] = inst_479101);
(statearr_479183_479298[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (64)))
{var inst_479058 = (state_479113[(7)]);var inst_479062 = cljs.core.chunk_first.call(null,inst_479058);var inst_479063 = cljs.core.chunk_rest.call(null,inst_479058);var inst_479064 = cljs.core.count.call(null,inst_479062);var inst_479044 = inst_479063;var inst_479045 = inst_479062;var inst_479046 = inst_479064;var inst_479047 = (0);var state_479113__$1 = (function (){var statearr_479184 = state_479113;(statearr_479184[(8)] = inst_479047);
(statearr_479184[(9)] = inst_479044);
(statearr_479184[(11)] = inst_479046);
(statearr_479184[(12)] = inst_479045);
return statearr_479184;
})();var statearr_479185_479299 = state_479113__$1;(statearr_479185_479299[(2)] = null);
(statearr_479185_479299[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (51)))
{var inst_478917 = (state_479113[(16)]);var inst_479035 = cljs.core._EQ_.call(null,"print",inst_478917);var state_479113__$1 = state_479113;if(inst_479035)
{var statearr_479186_479300 = state_479113__$1;(statearr_479186_479300[(1)] = (53));
} else
{var statearr_479187_479301 = state_479113__$1;(statearr_479187_479301[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (25)))
{var inst_479103 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479188_479302 = state_479113__$1;(statearr_479188_479302[(2)] = inst_479103);
(statearr_479188_479302[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (34)))
{var inst_479097 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479189_479303 = state_479113__$1;(statearr_479189_479303[(2)] = inst_479097);
(statearr_479189_479303[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (17)))
{var inst_478885 = (state_479113[(14)]);var inst_478911 = cljs.core.seq_QMARK_.call(null,inst_478885);var state_479113__$1 = state_479113;if(inst_478911)
{var statearr_479190_479304 = state_479113__$1;(statearr_479190_479304[(1)] = (20));
} else
{var statearr_479191_479305 = state_479113__$1;(statearr_479191_479305[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (3)))
{var inst_478862 = (state_479113[(17)]);var state_479113__$1 = state_479113;var statearr_479192_479306 = state_479113__$1;(statearr_479192_479306[(2)] = inst_478862);
(statearr_479192_479306[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (12)))
{var inst_478886 = (state_479113[(26)]);var inst_478908 = cljs.core._EQ_.call(null,onView,inst_478886);var state_479113__$1 = state_479113;if(inst_478908)
{var statearr_479193_479307 = state_479113__$1;(statearr_479193_479307[(1)] = (17));
} else
{var statearr_479194_479308 = state_479113__$1;(statearr_479194_479308[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (2)))
{var inst_478862 = (state_479113[(17)]);var inst_478865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_478862);var state_479113__$1 = state_479113;var statearr_479195_479309 = state_479113__$1;(statearr_479195_479309[(2)] = inst_478865);
(statearr_479195_479309[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (66)))
{var inst_479073 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479196_479310 = state_479113__$1;(statearr_479196_479310[(2)] = inst_479073);
(statearr_479196_479310[(1)] = (63));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (23)))
{var inst_478878 = (state_479113[(20)]);var inst_478924 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478925 = test.stock4.check_length.call(null,inst_478924);var inst_478926 = cljs.core.take.call(null,(10),inst_478925);var inst_478927 = cljs.core.pr_str.call(null,inst_478926);var inst_478928 = console.log(inst_478927);var state_479113__$1 = (function (){var statearr_479197 = state_479113;(statearr_479197[(29)] = inst_478928);
return statearr_479197;
})();var statearr_479198_479311 = state_479113__$1;(statearr_479198_479311[(2)] = inst_478878);
(statearr_479198_479311[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (47)))
{var inst_478878 = (state_479113[(20)]);var inst_478879 = (state_479113[(21)]);var inst_478918 = (state_479113[(22)]);var inst_479021 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_479022 = test.stock4.average.call(null,inst_478918,inst_479021);var inst_479023 = cljs.core.take.call(null,inst_478879,inst_479022);var inst_479024 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_479023);var inst_479025 = draw.call(null,inst_479024);var state_479113__$1 = state_479113;var statearr_479199_479312 = state_479113__$1;(statearr_479199_479312[(2)] = inst_479025);
(statearr_479199_479312[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (35)))
{var inst_478878 = (state_479113[(20)]);var inst_478918 = (state_479113[(22)]);var inst_478963 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478964 = test.stock4.ema.call(null,inst_478918,(0),inst_478963);var inst_478965 = cljs.core.take.call(null,(10),inst_478964);var inst_478966 = cljs.core.pr_str.call(null,inst_478965);var inst_478967 = console.log(inst_478966);var state_479113__$1 = (function (){var statearr_479200 = state_479113;(statearr_479200[(30)] = inst_478967);
return statearr_479200;
})();var statearr_479201_479313 = state_479113__$1;(statearr_479201_479313[(2)] = inst_478878);
(statearr_479201_479313[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (19)))
{var inst_479106 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479202_479314 = state_479113__$1;(statearr_479202_479314[(2)] = inst_479106);
(statearr_479202_479314[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (57)))
{var inst_478878 = (state_479113[(20)]);var inst_479080 = (state_479113[(2)]);var state_479113__$1 = (function (){var statearr_479203 = state_479113;(statearr_479203[(31)] = inst_479080);
return statearr_479203;
})();var statearr_479204_479315 = state_479113__$1;(statearr_479204_479315[(2)] = inst_478878);
(statearr_479204_479315[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (11)))
{var inst_478885 = (state_479113[(14)]);var inst_478893 = cljs.core.nth.call(null,inst_478885,(0),null);var inst_478894 = cljs.core.nth.call(null,inst_478885,(1),null);var inst_478898 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_478893);var state_479113__$1 = (function (){var statearr_479205 = state_479113;(statearr_479205[(32)] = inst_478894);
return statearr_479205;
})();if(inst_478898)
{var statearr_479206_479316 = state_479113__$1;(statearr_479206_479316[(1)] = (14));
} else
{var statearr_479207_479317 = state_479113__$1;(statearr_479207_479317[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (9)))
{var inst_478878 = (state_479113[(20)]);var inst_478878__$1 = (state_479113[(2)]);var inst_478879 = cljs.core.get.call(null,inst_478878__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_478881 = [onSystem,onView];var inst_478882 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478881,null));var state_479113__$1 = (function (){var statearr_479208 = state_479113;(statearr_479208[(20)] = inst_478878__$1);
(statearr_479208[(21)] = inst_478879);
return statearr_479208;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_479113__$1,(10),inst_478882);
} else
{if((state_val_479114 === (5)))
{var inst_478870 = (state_479113[(13)]);var inst_478873 = cljs.core.seq_QMARK_.call(null,inst_478870);var state_479113__$1 = state_479113;if(inst_478873)
{var statearr_479209_479318 = state_479113__$1;(statearr_479209_479318[(1)] = (7));
} else
{var statearr_479210_479319 = state_479113__$1;(statearr_479210_479319[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (14)))
{var inst_478878 = (state_479113[(20)]);var inst_478894 = (state_479113[(32)]);var inst_478879 = (state_479113[(21)]);var inst_478900 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"info","info",-317069002),inst_478894);var inst_478901 = cljs.core.take.call(null,inst_478879,inst_478894);var inst_478902 = cljs.core.assoc.call(null,inst_478900,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_478901);var inst_478903 = draw.call(null,inst_478902);var state_479113__$1 = state_479113;var statearr_479211_479320 = state_479113__$1;(statearr_479211_479320[(2)] = inst_478903);
(statearr_479211_479320[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (45)))
{var inst_478917 = (state_479113[(16)]);var inst_479019 = cljs.core._EQ_.call(null,"avg",inst_478917);var state_479113__$1 = state_479113;if(inst_479019)
{var statearr_479212_479321 = state_479113__$1;(statearr_479212_479321[(1)] = (47));
} else
{var statearr_479213_479322 = state_479113__$1;(statearr_479213_479322[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (53)))
{var inst_478878 = (state_479113[(20)]);var inst_478918 = (state_479113[(22)]);var inst_479041 = cljs.core.keyword.call(null,inst_478918);var inst_479042 = inst_479041.call(null,inst_478878);var inst_479043 = cljs.core.seq.call(null,inst_479042);var inst_479044 = inst_479043;var inst_479045 = null;var inst_479046 = (0);var inst_479047 = (0);var state_479113__$1 = (function (){var statearr_479214 = state_479113;(statearr_479214[(8)] = inst_479047);
(statearr_479214[(9)] = inst_479044);
(statearr_479214[(11)] = inst_479046);
(statearr_479214[(12)] = inst_479045);
return statearr_479214;
})();var statearr_479215_479323 = state_479113__$1;(statearr_479215_479323[(2)] = null);
(statearr_479215_479323[(1)] = (56));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (26)))
{var inst_478878 = (state_479113[(20)]);var inst_478918 = (state_479113[(22)]);var inst_478932 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478933 = cljs.core.reverse.call(null,inst_478932);var inst_478934 = test.stock4.yu.call(null,0.5,inst_478918,inst_478933);var inst_478935 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478936 = cljs.core.count.call(null,inst_478935);var inst_478937 = cljs.core.take.call(null,inst_478936,inst_478934);var inst_478938 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"yu","yu",979062608),inst_478937);var inst_478939 = draw.call(null,inst_478938);var state_479113__$1 = state_479113;var statearr_479216_479324 = state_479113__$1;(statearr_479216_479324[(2)] = inst_478939);
(statearr_479216_479324[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (16)))
{var inst_478906 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479217_479325 = state_479113__$1;(statearr_479217_479325[(2)] = inst_478906);
(statearr_479217_479325[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (38)))
{var inst_478878 = (state_479113[(20)]);var inst_478918 = (state_479113[(22)]);var inst_478971 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478972 = cljs.core.count.call(null,inst_478971);var inst_478973 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_478878);var inst_478974 = test.stock4.rsv.call(null,inst_478973);var inst_478975 = test.stock4.k.call(null,inst_478918,inst_478974);var inst_478976 = cljs.core.take.call(null,inst_478972,inst_478975);var inst_478977 = ((3) * inst_478918);var inst_478978 = test.stock4.k.call(null,inst_478977,inst_478974);var inst_478979 = cljs.core.take.call(null,inst_478972,inst_478978);var inst_478980 = [null,inst_478976,inst_478979];var inst_478981 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_478980,null));var inst_478982 = cljs.core.assoc.call(null,inst_478878,new cljs.core.Keyword(null,"kd","kd",771448701),inst_478981);var inst_478983 = draw.call(null,inst_478982);var state_479113__$1 = state_479113;var statearr_479218_479326 = state_479113__$1;(statearr_479218_479326[(2)] = inst_478983);
(statearr_479218_479326[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (30)))
{var inst_478917 = (state_479113[(16)]);var inst_478953 = cljs.core._EQ_.call(null,"sma",inst_478917);var state_479113__$1 = state_479113;if(inst_478953)
{var statearr_479219_479327 = state_479113__$1;(statearr_479219_479327[(1)] = (32));
} else
{var statearr_479220_479328 = state_479113__$1;(statearr_479220_479328[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (10)))
{var inst_478886 = (state_479113[(26)]);var inst_478884 = (state_479113[(27)]);var inst_478884__$1 = (state_479113[(2)]);var inst_478885 = cljs.core.nth.call(null,inst_478884__$1,(0),null);var inst_478886__$1 = cljs.core.nth.call(null,inst_478884__$1,(1),null);var inst_478890 = cljs.core._EQ_.call(null,onSystem,inst_478886__$1);var state_479113__$1 = (function (){var statearr_479221 = state_479113;(statearr_479221[(26)] = inst_478886__$1);
(statearr_479221[(14)] = inst_478885);
(statearr_479221[(27)] = inst_478884__$1);
return statearr_479221;
})();if(inst_478890)
{var statearr_479222_479329 = state_479113__$1;(statearr_479222_479329[(1)] = (11));
} else
{var statearr_479223_479330 = state_479113__$1;(statearr_479223_479330[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (18)))
{var inst_478878 = (state_479113[(20)]);var state_479113__$1 = state_479113;var statearr_479224_479331 = state_479113__$1;(statearr_479224_479331[(2)] = inst_478878);
(statearr_479224_479331[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (52)))
{var inst_479085 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479225_479332 = state_479113__$1;(statearr_479225_479332[(2)] = inst_479085);
(statearr_479225_479332[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (42)))
{var inst_478917 = (state_479113[(16)]);var inst_478995 = cljs.core._EQ_.call(null,"stock",inst_478917);var state_479113__$1 = state_479113;if(inst_478995)
{var statearr_479226_479333 = state_479113__$1;(statearr_479226_479333[(1)] = (44));
} else
{var statearr_479227_479334 = state_479113__$1;(statearr_479227_479334[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (37)))
{var inst_479095 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479228_479335 = state_479113__$1;(statearr_479228_479335[(2)] = inst_479095);
(statearr_479228_479335[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (63)))
{var inst_479076 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479229_479336 = state_479113__$1;(statearr_479229_479336[(2)] = inst_479076);
(statearr_479229_479336[(1)] = (60));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (8)))
{var inst_478870 = (state_479113[(13)]);var state_479113__$1 = state_479113;var statearr_479230_479337 = state_479113__$1;(statearr_479230_479337[(2)] = inst_478870);
(statearr_479230_479337[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_479114 === (49)))
{var inst_479087 = (state_479113[(2)]);var state_479113__$1 = state_479113;var statearr_479231_479338 = state_479113__$1;(statearr_479231_479338[(2)] = inst_479087);
(statearr_479231_479338[(1)] = (46));
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
});})(c__6202__auto___479248,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___479248,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_479235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_479235[(0)] = state_machine__6188__auto__);
(statearr_479235[(1)] = (1));
return statearr_479235;
});
var state_machine__6188__auto____1 = (function (state_479113){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_479113);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e479236){if((e479236 instanceof Object))
{var ex__6191__auto__ = e479236;var statearr_479237_479339 = state_479113;(statearr_479237_479339[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_479113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e479236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__479340 = state_479113;
state_479113 = G__479340;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_479113){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_479113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___479248,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_479238 = f__6203__auto__.call(null);(statearr_479238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___479248);
return statearr_479238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___479248,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
