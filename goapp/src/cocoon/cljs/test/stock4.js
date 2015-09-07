// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__14783_SHARP_){return cljs.core.nth.call(null,p1__14783_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__14784_SHARP_){return cljs.core.nth.call(null,p1__14784_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__14792 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__14792,(0),null);var min_v = cljs.core.nth.call(null,vec__14792,(1),null);var offset_v = cljs.core.nth.call(null,vec__14792,(2),null);var offset_x = cljs.core.nth.call(null,vec__14792,(3),null);var pos_y = cljs.core.nth.call(null,vec__14792,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__14793_14799 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14792,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__14803__delegate = function (args){return args;
};
var G__14803 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14803__delegate.call(this,args);};
G__14803.cljs$lang$maxFixedArity = 0;
G__14803.cljs$lang$applyTo = (function (arglist__14804){
var args = cljs.core.seq(arglist__14804);
return G__14803__delegate(args);
});
G__14803.cljs$core$IFn$_invoke$arity$variadic = G__14803__delegate;
return G__14803;
})()
;})(vec__14792,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__14794_14800 = null;var count__14795_14801 = (0);var i__14796_14802 = (0);while(true){
if((i__14796_14802 < count__14795_14801))
{var vec__14797_14805 = cljs.core._nth.call(null,chunk__14794_14800,i__14796_14802);var idx_14806 = cljs.core.nth.call(null,vec__14797_14805,(0),null);var prev_14807 = cljs.core.nth.call(null,vec__14797_14805,(1),null);var curr_14808 = cljs.core.nth.call(null,vec__14797_14805,(2),null);if((typeof prev_14807 === 'number') && (typeof curr_14808 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_14806 * offset_x),(((1) - prev_14807) * h));
ctx.lineTo(((idx_14806 + (1)) * offset_x),(((1) - curr_14808) * h));
ctx.stroke();
} else
{}
{
var G__14809 = seq__14793_14799;
var G__14810 = chunk__14794_14800;
var G__14811 = count__14795_14801;
var G__14812 = (i__14796_14802 + (1));
seq__14793_14799 = G__14809;
chunk__14794_14800 = G__14810;
count__14795_14801 = G__14811;
i__14796_14802 = G__14812;
continue;
}
} else
{var temp__4126__auto___14813 = cljs.core.seq.call(null,seq__14793_14799);if(temp__4126__auto___14813)
{var seq__14793_14814__$1 = temp__4126__auto___14813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14793_14814__$1))
{var c__4307__auto___14815 = cljs.core.chunk_first.call(null,seq__14793_14814__$1);{
var G__14816 = cljs.core.chunk_rest.call(null,seq__14793_14814__$1);
var G__14817 = c__4307__auto___14815;
var G__14818 = cljs.core.count.call(null,c__4307__auto___14815);
var G__14819 = (0);
seq__14793_14799 = G__14816;
chunk__14794_14800 = G__14817;
count__14795_14801 = G__14818;
i__14796_14802 = G__14819;
continue;
}
} else
{var vec__14798_14820 = cljs.core.first.call(null,seq__14793_14814__$1);var idx_14821 = cljs.core.nth.call(null,vec__14798_14820,(0),null);var prev_14822 = cljs.core.nth.call(null,vec__14798_14820,(1),null);var curr_14823 = cljs.core.nth.call(null,vec__14798_14820,(2),null);if((typeof prev_14822 === 'number') && (typeof curr_14823 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_14821 * offset_x),(((1) - prev_14822) * h));
ctx.lineTo(((idx_14821 + (1)) * offset_x),(((1) - curr_14823) * h));
ctx.stroke();
} else
{}
{
var G__14824 = cljs.core.next.call(null,seq__14793_14814__$1);
var G__14825 = null;
var G__14826 = (0);
var G__14827 = (0);
seq__14793_14799 = G__14824;
chunk__14794_14800 = G__14825;
count__14795_14801 = G__14826;
i__14796_14802 = G__14827;
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
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__14839 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__14839,(0),null);var min_v = cljs.core.nth.call(null,vec__14839,(1),null);var offset_v = cljs.core.nth.call(null,vec__14839,(2),null);var offset_x = cljs.core.nth.call(null,vec__14839,(3),null);var pos_y = cljs.core.nth.call(null,vec__14839,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__14840_14850 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14839,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__14854__delegate = function (args){return args;
};
var G__14854 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14854__delegate.call(this,args);};
G__14854.cljs$lang$maxFixedArity = 0;
G__14854.cljs$lang$applyTo = (function (arglist__14855){
var args = cljs.core.seq(arglist__14855);
return G__14854__delegate(args);
});
G__14854.cljs$core$IFn$_invoke$arity$variadic = G__14854__delegate;
return G__14854;
})()
;})(vec__14839,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__14841_14851 = null;var count__14842_14852 = (0);var i__14843_14853 = (0);while(true){
if((i__14843_14853 < count__14842_14852))
{var vec__14844_14856 = cljs.core._nth.call(null,chunk__14841_14851,i__14843_14853);var idx_14857 = cljs.core.nth.call(null,vec__14844_14856,(0),null);var vec__14845_14858 = cljs.core.nth.call(null,vec__14844_14856,(1),null);var avg_14859 = cljs.core.nth.call(null,vec__14845_14858,(0),null);var sd_v_14860 = cljs.core.nth.call(null,vec__14845_14858,(1),null);var vec__14846_14861 = cljs.core.nth.call(null,vec__14844_14856,(2),null);var __14862 = cljs.core.nth.call(null,vec__14846_14861,(0),null);var __14863__$1 = cljs.core.nth.call(null,vec__14846_14861,(1),null);var __14864__$2 = cljs.core.nth.call(null,vec__14846_14861,(2),null);var __14865__$3 = cljs.core.nth.call(null,vec__14846_14861,(3),null);var close_14866 = cljs.core.nth.call(null,vec__14846_14861,(4),null);var __14867__$4 = cljs.core.nth.call(null,vec__14846_14861,(5),null);(ctx["strokeStyle"] = (((avg_14859 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_14857 * offset_x),pos_y.call(null,(avg_14859 + close_14866)));
ctx.lineTo(((idx_14857 + (1)) * offset_x),pos_y.call(null,(avg_14859 + close_14866)));
ctx.stroke();
ctx.moveTo((idx_14857 * offset_x),pos_y.call(null,(((avg_14859 + close_14866) + sd_v_14860) + sd_v_14860)));
ctx.lineTo(((idx_14857 + (1)) * offset_x),pos_y.call(null,(((avg_14859 + close_14866) + sd_v_14860) + sd_v_14860)));
ctx.stroke();
ctx.moveTo((idx_14857 * offset_x),pos_y.call(null,(((avg_14859 + close_14866) - sd_v_14860) - sd_v_14860)));
ctx.lineTo(((idx_14857 + (1)) * offset_x),pos_y.call(null,(((avg_14859 + close_14866) - sd_v_14860) - sd_v_14860)));
ctx.stroke();
{
var G__14868 = seq__14840_14850;
var G__14869 = chunk__14841_14851;
var G__14870 = count__14842_14852;
var G__14871 = (i__14843_14853 + (1));
seq__14840_14850 = G__14868;
chunk__14841_14851 = G__14869;
count__14842_14852 = G__14870;
i__14843_14853 = G__14871;
continue;
}
} else
{var temp__4126__auto___14872 = cljs.core.seq.call(null,seq__14840_14850);if(temp__4126__auto___14872)
{var seq__14840_14873__$1 = temp__4126__auto___14872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14840_14873__$1))
{var c__4307__auto___14874 = cljs.core.chunk_first.call(null,seq__14840_14873__$1);{
var G__14875 = cljs.core.chunk_rest.call(null,seq__14840_14873__$1);
var G__14876 = c__4307__auto___14874;
var G__14877 = cljs.core.count.call(null,c__4307__auto___14874);
var G__14878 = (0);
seq__14840_14850 = G__14875;
chunk__14841_14851 = G__14876;
count__14842_14852 = G__14877;
i__14843_14853 = G__14878;
continue;
}
} else
{var vec__14847_14879 = cljs.core.first.call(null,seq__14840_14873__$1);var idx_14880 = cljs.core.nth.call(null,vec__14847_14879,(0),null);var vec__14848_14881 = cljs.core.nth.call(null,vec__14847_14879,(1),null);var avg_14882 = cljs.core.nth.call(null,vec__14848_14881,(0),null);var sd_v_14883 = cljs.core.nth.call(null,vec__14848_14881,(1),null);var vec__14849_14884 = cljs.core.nth.call(null,vec__14847_14879,(2),null);var __14885 = cljs.core.nth.call(null,vec__14849_14884,(0),null);var __14886__$1 = cljs.core.nth.call(null,vec__14849_14884,(1),null);var __14887__$2 = cljs.core.nth.call(null,vec__14849_14884,(2),null);var __14888__$3 = cljs.core.nth.call(null,vec__14849_14884,(3),null);var close_14889 = cljs.core.nth.call(null,vec__14849_14884,(4),null);var __14890__$4 = cljs.core.nth.call(null,vec__14849_14884,(5),null);(ctx["strokeStyle"] = (((avg_14882 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_14880 * offset_x),pos_y.call(null,(avg_14882 + close_14889)));
ctx.lineTo(((idx_14880 + (1)) * offset_x),pos_y.call(null,(avg_14882 + close_14889)));
ctx.stroke();
ctx.moveTo((idx_14880 * offset_x),pos_y.call(null,(((avg_14882 + close_14889) + sd_v_14883) + sd_v_14883)));
ctx.lineTo(((idx_14880 + (1)) * offset_x),pos_y.call(null,(((avg_14882 + close_14889) + sd_v_14883) + sd_v_14883)));
ctx.stroke();
ctx.moveTo((idx_14880 * offset_x),pos_y.call(null,(((avg_14882 + close_14889) - sd_v_14883) - sd_v_14883)));
ctx.lineTo(((idx_14880 + (1)) * offset_x),pos_y.call(null,(((avg_14882 + close_14889) - sd_v_14883) - sd_v_14883)));
ctx.stroke();
{
var G__14891 = cljs.core.next.call(null,seq__14840_14873__$1);
var G__14892 = null;
var G__14893 = (0);
var G__14894 = (0);
seq__14840_14850 = G__14891;
chunk__14841_14851 = G__14892;
count__14842_14852 = G__14893;
i__14843_14853 = G__14894;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__14902 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__14902,(0),null);var min_v = cljs.core.nth.call(null,vec__14902,(1),null);var offset_v = cljs.core.nth.call(null,vec__14902,(2),null);var offset_x = cljs.core.nth.call(null,vec__14902,(3),null);var pos_y = cljs.core.nth.call(null,vec__14902,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__14903_14909 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14902,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__14913__delegate = function (args){return args;
};
var G__14913 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14913__delegate.call(this,args);};
G__14913.cljs$lang$maxFixedArity = 0;
G__14913.cljs$lang$applyTo = (function (arglist__14914){
var args = cljs.core.seq(arglist__14914);
return G__14913__delegate(args);
});
G__14913.cljs$core$IFn$_invoke$arity$variadic = G__14913__delegate;
return G__14913;
})()
;})(vec__14902,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__14904_14910 = null;var count__14905_14911 = (0);var i__14906_14912 = (0);while(true){
if((i__14906_14912 < count__14905_14911))
{var vec__14907_14915 = cljs.core._nth.call(null,chunk__14904_14910,i__14906_14912);var idx_14916 = cljs.core.nth.call(null,vec__14907_14915,(0),null);var prev_14917 = cljs.core.nth.call(null,vec__14907_14915,(1),null);var curr_14918 = cljs.core.nth.call(null,vec__14907_14915,(2),null);if((typeof prev_14917 === 'number') && (typeof curr_14918 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_14916 * offset_x),pos_y.call(null,prev_14917));
ctx.lineTo(((idx_14916 + (1)) * offset_x),pos_y.call(null,curr_14918));
ctx.stroke();
} else
{}
{
var G__14919 = seq__14903_14909;
var G__14920 = chunk__14904_14910;
var G__14921 = count__14905_14911;
var G__14922 = (i__14906_14912 + (1));
seq__14903_14909 = G__14919;
chunk__14904_14910 = G__14920;
count__14905_14911 = G__14921;
i__14906_14912 = G__14922;
continue;
}
} else
{var temp__4126__auto___14923 = cljs.core.seq.call(null,seq__14903_14909);if(temp__4126__auto___14923)
{var seq__14903_14924__$1 = temp__4126__auto___14923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14903_14924__$1))
{var c__4307__auto___14925 = cljs.core.chunk_first.call(null,seq__14903_14924__$1);{
var G__14926 = cljs.core.chunk_rest.call(null,seq__14903_14924__$1);
var G__14927 = c__4307__auto___14925;
var G__14928 = cljs.core.count.call(null,c__4307__auto___14925);
var G__14929 = (0);
seq__14903_14909 = G__14926;
chunk__14904_14910 = G__14927;
count__14905_14911 = G__14928;
i__14906_14912 = G__14929;
continue;
}
} else
{var vec__14908_14930 = cljs.core.first.call(null,seq__14903_14924__$1);var idx_14931 = cljs.core.nth.call(null,vec__14908_14930,(0),null);var prev_14932 = cljs.core.nth.call(null,vec__14908_14930,(1),null);var curr_14933 = cljs.core.nth.call(null,vec__14908_14930,(2),null);if((typeof prev_14932 === 'number') && (typeof curr_14933 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_14931 * offset_x),pos_y.call(null,prev_14932));
ctx.lineTo(((idx_14931 + (1)) * offset_x),pos_y.call(null,curr_14933));
ctx.stroke();
} else
{}
{
var G__14934 = cljs.core.next.call(null,seq__14903_14924__$1);
var G__14935 = null;
var G__14936 = (0);
var G__14937 = (0);
seq__14903_14909 = G__14934;
chunk__14904_14910 = G__14935;
count__14905_14911 = G__14936;
i__14906_14912 = G__14937;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__14938){var vec__14953 = p__14938;var rsv = cljs.core.nth.call(null,vec__14953,(0),null);var k = cljs.core.nth.call(null,vec__14953,(1),null);var d = cljs.core.nth.call(null,vec__14953,(2),null);var kd = vec__14953;var vec__14954 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__14954,(0),null);var min_v = cljs.core.nth.call(null,vec__14954,(1),null);var offset_v = cljs.core.nth.call(null,vec__14954,(2),null);var offset_x = cljs.core.nth.call(null,vec__14954,(3),null);var pos_y = cljs.core.nth.call(null,vec__14954,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__14955_14967 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14954,max_v,min_v,offset_v,offset_x,pos_y,vec__14953,rsv,k,d,kd){
return (function() { 
var G__14971__delegate = function (args){return args;
};
var G__14971 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14971__delegate.call(this,args);};
G__14971.cljs$lang$maxFixedArity = 0;
G__14971.cljs$lang$applyTo = (function (arglist__14972){
var args = cljs.core.seq(arglist__14972);
return G__14971__delegate(args);
});
G__14971.cljs$core$IFn$_invoke$arity$variadic = G__14971__delegate;
return G__14971;
})()
;})(vec__14954,max_v,min_v,offset_v,offset_x,pos_y,vec__14953,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__14956_14968 = null;var count__14957_14969 = (0);var i__14958_14970 = (0);while(true){
if((i__14958_14970 < count__14957_14969))
{var vec__14959_14973 = cljs.core._nth.call(null,chunk__14956_14968,i__14958_14970);var idx_14974 = cljs.core.nth.call(null,vec__14959_14973,(0),null);var prev_14975 = cljs.core.nth.call(null,vec__14959_14973,(1),null);var curr_14976 = cljs.core.nth.call(null,vec__14959_14973,(2),null);ctx.beginPath();
ctx.moveTo((idx_14974 * offset_x),(((1) - (prev_14975 / (100))) * h));
ctx.lineTo(((idx_14974 + (1)) * offset_x),(((1) - (curr_14976 / (100))) * h));
ctx.stroke();
{
var G__14977 = seq__14955_14967;
var G__14978 = chunk__14956_14968;
var G__14979 = count__14957_14969;
var G__14980 = (i__14958_14970 + (1));
seq__14955_14967 = G__14977;
chunk__14956_14968 = G__14978;
count__14957_14969 = G__14979;
i__14958_14970 = G__14980;
continue;
}
} else
{var temp__4126__auto___14981 = cljs.core.seq.call(null,seq__14955_14967);if(temp__4126__auto___14981)
{var seq__14955_14982__$1 = temp__4126__auto___14981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14955_14982__$1))
{var c__4307__auto___14983 = cljs.core.chunk_first.call(null,seq__14955_14982__$1);{
var G__14984 = cljs.core.chunk_rest.call(null,seq__14955_14982__$1);
var G__14985 = c__4307__auto___14983;
var G__14986 = cljs.core.count.call(null,c__4307__auto___14983);
var G__14987 = (0);
seq__14955_14967 = G__14984;
chunk__14956_14968 = G__14985;
count__14957_14969 = G__14986;
i__14958_14970 = G__14987;
continue;
}
} else
{var vec__14960_14988 = cljs.core.first.call(null,seq__14955_14982__$1);var idx_14989 = cljs.core.nth.call(null,vec__14960_14988,(0),null);var prev_14990 = cljs.core.nth.call(null,vec__14960_14988,(1),null);var curr_14991 = cljs.core.nth.call(null,vec__14960_14988,(2),null);ctx.beginPath();
ctx.moveTo((idx_14989 * offset_x),(((1) - (prev_14990 / (100))) * h));
ctx.lineTo(((idx_14989 + (1)) * offset_x),(((1) - (curr_14991 / (100))) * h));
ctx.stroke();
{
var G__14992 = cljs.core.next.call(null,seq__14955_14982__$1);
var G__14993 = null;
var G__14994 = (0);
var G__14995 = (0);
seq__14955_14967 = G__14992;
chunk__14956_14968 = G__14993;
count__14957_14969 = G__14994;
i__14958_14970 = G__14995;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__14961_14996 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14954,max_v,min_v,offset_v,offset_x,pos_y,vec__14953,rsv,k,d,kd){
return (function() { 
var G__15000__delegate = function (args){return args;
};
var G__15000 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15000__delegate.call(this,args);};
G__15000.cljs$lang$maxFixedArity = 0;
G__15000.cljs$lang$applyTo = (function (arglist__15001){
var args = cljs.core.seq(arglist__15001);
return G__15000__delegate(args);
});
G__15000.cljs$core$IFn$_invoke$arity$variadic = G__15000__delegate;
return G__15000;
})()
;})(vec__14954,max_v,min_v,offset_v,offset_x,pos_y,vec__14953,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__14962_14997 = null;var count__14963_14998 = (0);var i__14964_14999 = (0);while(true){
if((i__14964_14999 < count__14963_14998))
{var vec__14965_15002 = cljs.core._nth.call(null,chunk__14962_14997,i__14964_14999);var idx_15003 = cljs.core.nth.call(null,vec__14965_15002,(0),null);var prev_15004 = cljs.core.nth.call(null,vec__14965_15002,(1),null);var curr_15005 = cljs.core.nth.call(null,vec__14965_15002,(2),null);ctx.beginPath();
ctx.moveTo((idx_15003 * offset_x),(((1) - (prev_15004 / (100))) * h));
ctx.lineTo(((idx_15003 + (1)) * offset_x),(((1) - (curr_15005 / (100))) * h));
ctx.stroke();
{
var G__15006 = seq__14961_14996;
var G__15007 = chunk__14962_14997;
var G__15008 = count__14963_14998;
var G__15009 = (i__14964_14999 + (1));
seq__14961_14996 = G__15006;
chunk__14962_14997 = G__15007;
count__14963_14998 = G__15008;
i__14964_14999 = G__15009;
continue;
}
} else
{var temp__4126__auto___15010 = cljs.core.seq.call(null,seq__14961_14996);if(temp__4126__auto___15010)
{var seq__14961_15011__$1 = temp__4126__auto___15010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14961_15011__$1))
{var c__4307__auto___15012 = cljs.core.chunk_first.call(null,seq__14961_15011__$1);{
var G__15013 = cljs.core.chunk_rest.call(null,seq__14961_15011__$1);
var G__15014 = c__4307__auto___15012;
var G__15015 = cljs.core.count.call(null,c__4307__auto___15012);
var G__15016 = (0);
seq__14961_14996 = G__15013;
chunk__14962_14997 = G__15014;
count__14963_14998 = G__15015;
i__14964_14999 = G__15016;
continue;
}
} else
{var vec__14966_15017 = cljs.core.first.call(null,seq__14961_15011__$1);var idx_15018 = cljs.core.nth.call(null,vec__14966_15017,(0),null);var prev_15019 = cljs.core.nth.call(null,vec__14966_15017,(1),null);var curr_15020 = cljs.core.nth.call(null,vec__14966_15017,(2),null);ctx.beginPath();
ctx.moveTo((idx_15018 * offset_x),(((1) - (prev_15019 / (100))) * h));
ctx.lineTo(((idx_15018 + (1)) * offset_x),(((1) - (curr_15020 / (100))) * h));
ctx.stroke();
{
var G__15021 = cljs.core.next.call(null,seq__14961_15011__$1);
var G__15022 = null;
var G__15023 = (0);
var G__15024 = (0);
seq__14961_14996 = G__15021;
chunk__14962_14997 = G__15022;
count__14963_14998 = G__15023;
i__14964_14999 = G__15024;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__15035 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15035,(0),null);var min_v = cljs.core.nth.call(null,vec__15035,(1),null);var offset_v = cljs.core.nth.call(null,vec__15035,(2),null);var offset_x = cljs.core.nth.call(null,vec__15035,(3),null);var pos_y = cljs.core.nth.call(null,vec__15035,(4),null);(ctx["fillStyle"] = "black");
var seq__15036 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15035,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__15044__delegate = function (args){return args;
};
var G__15044 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15044__delegate.call(this,args);};
G__15044.cljs$lang$maxFixedArity = 0;
G__15044.cljs$lang$applyTo = (function (arglist__15045){
var args = cljs.core.seq(arglist__15045);
return G__15044__delegate(args);
});
G__15044.cljs$core$IFn$_invoke$arity$variadic = G__15044__delegate;
return G__15044;
})()
;})(vec__15035,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__15037 = null;var count__15038 = (0);var i__15039 = (0);while(true){
if((i__15039 < count__15038))
{var vec__15040 = cljs.core._nth.call(null,chunk__15037,i__15039);var idx = cljs.core.nth.call(null,vec__15040,(0),null);var vec__15041 = cljs.core.nth.call(null,vec__15040,(1),null);var date = cljs.core.nth.call(null,vec__15041,(0),null);var _ = cljs.core.nthnext.call(null,vec__15041,(1));var line = vec__15041;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__15036,chunk__15037,count__15038,i__15039,vec__15040,idx,vec__15041,date,_,line,vec__15035,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__15025_SHARP_){return cljs.core._EQ_.call(null,date,p1__15025_SHARP_);
});})(seq__15036,chunk__15037,count__15038,i__15039,vec__15040,idx,vec__15041,date,_,line,vec__15035,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__15046 = seq__15036;
var G__15047 = chunk__15037;
var G__15048 = count__15038;
var G__15049 = (i__15039 + (1));
seq__15036 = G__15046;
chunk__15037 = G__15047;
count__15038 = G__15048;
i__15039 = G__15049;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15036);if(temp__4126__auto__)
{var seq__15036__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15036__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15036__$1);{
var G__15050 = cljs.core.chunk_rest.call(null,seq__15036__$1);
var G__15051 = c__4307__auto__;
var G__15052 = cljs.core.count.call(null,c__4307__auto__);
var G__15053 = (0);
seq__15036 = G__15050;
chunk__15037 = G__15051;
count__15038 = G__15052;
i__15039 = G__15053;
continue;
}
} else
{var vec__15042 = cljs.core.first.call(null,seq__15036__$1);var idx = cljs.core.nth.call(null,vec__15042,(0),null);var vec__15043 = cljs.core.nth.call(null,vec__15042,(1),null);var date = cljs.core.nth.call(null,vec__15043,(0),null);var _ = cljs.core.nthnext.call(null,vec__15043,(1));var line = vec__15043;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__15036,chunk__15037,count__15038,i__15039,vec__15042,idx,vec__15043,date,_,line,seq__15036__$1,temp__4126__auto__,vec__15035,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__15025_SHARP_){return cljs.core._EQ_.call(null,date,p1__15025_SHARP_);
});})(seq__15036,chunk__15037,count__15038,i__15039,vec__15042,idx,vec__15043,date,_,line,seq__15036__$1,temp__4126__auto__,vec__15035,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__15054 = cljs.core.next.call(null,seq__15036__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__15036 = G__15054;
chunk__15037 = G__15055;
count__15038 = G__15056;
i__15039 = G__15057;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__15067 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__15067,(0),null);var min_v = cljs.core.nth.call(null,vec__15067,(1),null);var offset_v = cljs.core.nth.call(null,vec__15067,(2),null);var offset_x = cljs.core.nth.call(null,vec__15067,(3),null);var pos_y = cljs.core.nth.call(null,vec__15067,(4),null);var seq__15068 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__15067,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__15076__delegate = function (args){return args;
};
var G__15076 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15076__delegate.call(this,args);};
G__15076.cljs$lang$maxFixedArity = 0;
G__15076.cljs$lang$applyTo = (function (arglist__15077){
var args = cljs.core.seq(arglist__15077);
return G__15076__delegate(args);
});
G__15076.cljs$core$IFn$_invoke$arity$variadic = G__15076__delegate;
return G__15076;
})()
;})(vec__15067,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__15069 = null;var count__15070 = (0);var i__15071 = (0);while(true){
if((i__15071 < count__15070))
{var vec__15072 = cljs.core._nth.call(null,chunk__15069,i__15071);var idx = cljs.core.nth.call(null,vec__15072,(0),null);var vec__15073 = cljs.core.nth.call(null,vec__15072,(1),null);var date = cljs.core.nth.call(null,vec__15073,(0),null);var open = cljs.core.nth.call(null,vec__15073,(1),null);var high = cljs.core.nth.call(null,vec__15073,(2),null);var low = cljs.core.nth.call(null,vec__15073,(3),null);var close = cljs.core.nth.call(null,vec__15073,(4),null);var volume = cljs.core.nth.call(null,vec__15073,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__15078 = seq__15068;
var G__15079 = chunk__15069;
var G__15080 = count__15070;
var G__15081 = (i__15071 + (1));
seq__15068 = G__15078;
chunk__15069 = G__15079;
count__15070 = G__15080;
i__15071 = G__15081;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15068);if(temp__4126__auto__)
{var seq__15068__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15068__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__15068__$1);{
var G__15082 = cljs.core.chunk_rest.call(null,seq__15068__$1);
var G__15083 = c__4307__auto__;
var G__15084 = cljs.core.count.call(null,c__4307__auto__);
var G__15085 = (0);
seq__15068 = G__15082;
chunk__15069 = G__15083;
count__15070 = G__15084;
i__15071 = G__15085;
continue;
}
} else
{var vec__15074 = cljs.core.first.call(null,seq__15068__$1);var idx = cljs.core.nth.call(null,vec__15074,(0),null);var vec__15075 = cljs.core.nth.call(null,vec__15074,(1),null);var date = cljs.core.nth.call(null,vec__15075,(0),null);var open = cljs.core.nth.call(null,vec__15075,(1),null);var high = cljs.core.nth.call(null,vec__15075,(2),null);var low = cljs.core.nth.call(null,vec__15075,(3),null);var close = cljs.core.nth.call(null,vec__15075,(4),null);var volume = cljs.core.nth.call(null,vec__15075,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__15086 = cljs.core.next.call(null,seq__15068__$1);
var G__15087 = null;
var G__15088 = (0);
var G__15089 = (0);
seq__15068 = G__15086;
chunk__15069 = G__15087;
count__15070 = G__15088;
i__15071 = G__15089;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__15093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__15093,(0),null);var h = cljs.core.nth.call(null,vec__15093,(1),null);return ((function (ctx,vec__15093,w,h){
return (function (p__15094){var map__15095 = p__15094;var map__15095__$1 = ((cljs.core.seq_QMARK_.call(null,map__15095))?cljs.core.apply.call(null,cljs.core.hash_map,map__15095):map__15095);var appctx = map__15095__$1;var bias = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
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
;})(ctx,vec__15093,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj15133 = {"url":"/proxy","dataType":"text","data":(function (){var obj15135 = {"url":url};return obj15135;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_15142){var state_val_15143 = (state_15142[(1)]);if((state_val_15143 === (2)))
{var inst_15139 = (state_15142[(2)]);var inst_15140 = cljs.core.async.close_BANG_.call(null,ret);var state_15142__$1 = (function (){var statearr_15144 = state_15142;(statearr_15144[(7)] = inst_15139);
return statearr_15144;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15142__$1,inst_15140);
} else
{if((state_val_15143 === (1)))
{var inst_15136 = [null,data];var inst_15137 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15136,null));var state_15142__$1 = state_15142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15142__$1,(2),ret,inst_15137);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15148 = [null,null,null,null,null,null,null,null];(statearr_15148[(0)] = state_machine__6189__auto__);
(statearr_15148[(1)] = (1));
return statearr_15148;
});
var state_machine__6189__auto____1 = (function (state_15142){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15149){if((e15149 instanceof Object))
{var ex__6192__auto__ = e15149;var statearr_15150_15168 = state_15142;(statearr_15150_15168[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15169 = state_15142;
state_15142 = G__15169;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15142){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_15151 = f__6204__auto__.call(null);(statearr_15151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_15158){var state_val_15159 = (state_15158[(1)]);if((state_val_15159 === (2)))
{var inst_15155 = (state_15158[(2)]);var inst_15156 = cljs.core.async.close_BANG_.call(null,ret);var state_15158__$1 = (function (){var statearr_15160 = state_15158;(statearr_15160[(7)] = inst_15155);
return statearr_15160;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15158__$1,inst_15156);
} else
{if((state_val_15159 === (1)))
{var inst_15152 = [err];var inst_15153 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15152,null));var state_15158__$1 = state_15158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15158__$1,(2),ret,inst_15153);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15164 = [null,null,null,null,null,null,null,null];(statearr_15164[(0)] = state_machine__6189__auto__);
(statearr_15164[(1)] = (1));
return statearr_15164;
});
var state_machine__6189__auto____1 = (function (state_15158){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15165){if((e15165 instanceof Object))
{var ex__6192__auto__ = e15165;var statearr_15166_15170 = state_15158;(statearr_15166_15170[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15171 = state_15158;
state_15158 = G__15171;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15158){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_15167 = f__6204__auto__.call(null);(statearr_15167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj15133;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__15180(s__15181){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__15181__$1 = s__15181;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15181__$1);if(temp__4126__auto__)
{var s__15181__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15181__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15181__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15183 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15182 = (0);while(true){
if((i__15182 < size__4275__auto__))
{var vec__15186 = cljs.core._nth.call(null,c__4274__auto__,i__15182);var _ = cljs.core.nth.call(null,vec__15186,(0),null);var date = cljs.core.nth.call(null,vec__15186,(1),null);var open = cljs.core.nth.call(null,vec__15186,(2),null);var high = cljs.core.nth.call(null,vec__15186,(3),null);var low = cljs.core.nth.call(null,vec__15186,(4),null);var close = cljs.core.nth.call(null,vec__15186,(5),null);var volume = cljs.core.nth.call(null,vec__15186,(6),null);cljs.core.chunk_append.call(null,b__15183,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__15188 = (i__15182 + (1));
i__15182 = G__15188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15183),iter__15180.call(null,cljs.core.chunk_rest.call(null,s__15181__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15183),null);
}
} else
{var vec__15187 = cljs.core.first.call(null,s__15181__$2);var _ = cljs.core.nth.call(null,vec__15187,(0),null);var date = cljs.core.nth.call(null,vec__15187,(1),null);var open = cljs.core.nth.call(null,vec__15187,(2),null);var high = cljs.core.nth.call(null,vec__15187,(3),null);var low = cljs.core.nth.call(null,vec__15187,(4),null);var close = cljs.core.nth.call(null,vec__15187,(5),null);var volume = cljs.core.nth.call(null,vec__15187,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__15180.call(null,cljs.core.rest.call(null,s__15181__$2)));
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
test.stock4.stock_info = (function stock_info(all,id,startdate,start,num){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_15266){var state_val_15267 = (state_15266[(1)]);if((state_val_15267 === (9)))
{var inst_15256 = (state_15266[(2)]);var state_15266__$1 = state_15266;var statearr_15268_15285 = state_15266__$1;(statearr_15268_15285[(2)] = inst_15256);
(statearr_15268_15285[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15267 === (8)))
{var inst_15262 = (state_15266[(2)]);var state_15266__$1 = state_15266;var statearr_15269_15286 = state_15266__$1;(statearr_15269_15286[(2)] = inst_15262);
(statearr_15269_15286[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15267 === (7)))
{var inst_15248 = (state_15266[(7)]);var inst_15258 = cljs.core.concat.call(null,all,inst_15248);var inst_15259 = [null,inst_15258];var inst_15260 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15259,null));var state_15266__$1 = state_15266;var statearr_15270_15287 = state_15266__$1;(statearr_15270_15287[(2)] = inst_15260);
(statearr_15270_15287[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15267 === (6)))
{var inst_15248 = (state_15266[(7)]);var inst_15252 = cljs.core.concat.call(null,all,inst_15248);var inst_15253 = (start + num);var inst_15254 = stock_info.call(null,inst_15252,id,startdate,inst_15253,num);var state_15266__$1 = state_15266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15266__$1,(9),inst_15254);
} else
{if((state_val_15267 === (5)))
{var inst_15264 = (state_15266[(2)]);var state_15266__$1 = state_15266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15266__$1,inst_15264);
} else
{if((state_val_15267 === (4)))
{var inst_15248 = (state_15266[(7)]);var inst_15243 = (state_15266[(8)]);var inst_15248__$1 = test.stock4.parse_info.call(null,inst_15243);var inst_15249 = cljs.core.count.call(null,inst_15248__$1);var inst_15250 = cljs.core._EQ_.call(null,num,inst_15249);var state_15266__$1 = (function (){var statearr_15271 = state_15266;(statearr_15271[(7)] = inst_15248__$1);
return statearr_15271;
})();if(inst_15250)
{var statearr_15272_15288 = state_15266__$1;(statearr_15272_15288[(1)] = (6));
} else
{var statearr_15273_15289 = state_15266__$1;(statearr_15273_15289[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15267 === (3)))
{var inst_15242 = (state_15266[(9)]);var inst_15245 = [inst_15242];var inst_15246 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15245,null));var state_15266__$1 = state_15266;var statearr_15274_15290 = state_15266__$1;(statearr_15274_15290[(2)] = inst_15246);
(statearr_15274_15290[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15267 === (2)))
{var inst_15242 = (state_15266[(9)]);var inst_15241 = (state_15266[(2)]);var inst_15242__$1 = cljs.core.nth.call(null,inst_15241,(0),null);var inst_15243 = cljs.core.nth.call(null,inst_15241,(1),null);var state_15266__$1 = (function (){var statearr_15275 = state_15266;(statearr_15275[(8)] = inst_15243);
(statearr_15275[(9)] = inst_15242__$1);
return statearr_15275;
})();if(cljs.core.truth_(inst_15242__$1))
{var statearr_15276_15291 = state_15266__$1;(statearr_15276_15291[(1)] = (3));
} else
{var statearr_15277_15292 = state_15266__$1;(statearr_15277_15292[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15267 === (1)))
{var inst_15238 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_15239 = test.stock4.content.call(null,inst_15238);var state_15266__$1 = state_15266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15266__$1,(2),inst_15239);
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15281 = [null,null,null,null,null,null,null,null,null,null];(statearr_15281[(0)] = state_machine__6189__auto__);
(statearr_15281[(1)] = (1));
return statearr_15281;
});
var state_machine__6189__auto____1 = (function (state_15266){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15266);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15282){if((e15282 instanceof Object))
{var ex__6192__auto__ = e15282;var statearr_15283_15293 = state_15266;(statearr_15283_15293[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15266);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15294 = state_15266;
state_15266 = G__15294;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15266){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15284 = f__6204__auto__.call(null);(statearr_15284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__15303 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__15303,(0),null);var open = cljs.core.nth.call(null,vec__15303,(1),null);var _ = cljs.core.nth.call(null,vec__15303,(2),null);var ___$1 = cljs.core.nth.call(null,vec__15303,(3),null);var ___$2 = cljs.core.nth.call(null,vec__15303,(4),null);var ___$3 = cljs.core.nth.call(null,vec__15303,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__15303,date,open,_,___$1,___$2,___$3){
return (function (p__15305){var vec__15306 = p__15305;var ___$4 = cljs.core.nth.call(null,vec__15306,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15306,(1),null);var high = cljs.core.nth.call(null,vec__15306,(2),null);var ___$6 = cljs.core.nth.call(null,vec__15306,(3),null);var ___$7 = cljs.core.nth.call(null,vec__15306,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15306,(5),null);return high;
});})(group,vec__15303,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__15303,date,open,_,___$1,___$2,___$3,high){
return (function (p__15307){var vec__15308 = p__15307;var ___$4 = cljs.core.nth.call(null,vec__15308,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15308,(1),null);var ___$6 = cljs.core.nth.call(null,vec__15308,(2),null);var low = cljs.core.nth.call(null,vec__15308,(3),null);var ___$7 = cljs.core.nth.call(null,vec__15308,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15308,(5),null);return low;
});})(group,vec__15303,date,open,_,___$1,___$2,___$3,high))
,group));var vec__15304 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__15304,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15304,(1),null);var ___$6 = cljs.core.nth.call(null,vec__15304,(2),null);var ___$7 = cljs.core.nth.call(null,vec__15304,(3),null);var close = cljs.core.nth.call(null,vec__15304,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15304,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__15303,date,open,_,___$1,___$2,___$3,high,low,vec__15304,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__15309){var vec__15310 = p__15309;var ___$9 = cljs.core.nth.call(null,vec__15310,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15310,(1),null);var ___$11 = cljs.core.nth.call(null,vec__15310,(2),null);var ___$12 = cljs.core.nth.call(null,vec__15310,(3),null);var ___$13 = cljs.core.nth.call(null,vec__15310,(4),null);var volume = cljs.core.nth.call(null,vec__15310,(5),null);return volume;
});})(group,vec__15303,date,open,_,___$1,___$2,___$3,high,low,vec__15304,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__15303,date,open,_,___$1,___$2,___$3,high,low,vec__15304,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__15303,date,open,_,___$1,___$2,___$3,high,low,vec__15304,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__15314 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__15314,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15314,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15314,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15314,(3),null);var c1 = cljs.core.nth.call(null,vec__15314,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15314,(5),null);var l1 = vec__15314;var vec__15315 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__15315,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15315,(1),null);var ___$6 = cljs.core.nth.call(null,vec__15315,(2),null);var ___$7 = cljs.core.nth.call(null,vec__15315,(3),null);var c2 = cljs.core.nth.call(null,vec__15315,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15315,(5),null);var l2 = vec__15315;var vec__15316 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__15316,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15316,(1),null);var ___$11 = cljs.core.nth.call(null,vec__15316,(2),null);var ___$12 = cljs.core.nth.call(null,vec__15316,(3),null);var c3 = cljs.core.nth.call(null,vec__15316,(4),null);var ___$13 = cljs.core.nth.call(null,vec__15316,(5),null);var l3 = vec__15316;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__15314,_,___$1,___$2,___$3,c1,___$4,l1,vec__15315,date,___$5,___$6,___$7,c2,___$8,l2,vec__15316,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__15314,_,___$1,___$2,___$3,c1,___$4,l1,vec__15315,date,___$5,___$6,___$7,c2,___$8,l2,vec__15316,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__15321){var vec__15322 = p__15321;var _ = cljs.core.nth.call(null,vec__15322,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15322,(1),null);var high = cljs.core.nth.call(null,vec__15322,(2),null);var low = cljs.core.nth.call(null,vec__15322,(3),null);var ___$2 = cljs.core.nth.call(null,vec__15322,(4),null);var ___$3 = cljs.core.nth.call(null,vec__15322,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__15320 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__15320,(0),null);var open = cljs.core.nth.call(null,vec__15320,(1),null);var high = cljs.core.nth.call(null,vec__15320,(2),null);var low = cljs.core.nth.call(null,vec__15320,(3),null);var close = cljs.core.nth.call(null,vec__15320,(4),null);var ___$1 = cljs.core.nth.call(null,vec__15320,(5),null);var curr = vec__15320;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__15320,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__15320,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__15325){var vec__15326 = p__15325;var _ = cljs.core.nth.call(null,vec__15326,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15326,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15326,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15326,(3),null);var close = cljs.core.nth.call(null,vec__15326,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15326,(5),null);return close;
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
return (function (p__15329){var vec__15330 = p__15329;var _ = cljs.core.nth.call(null,vec__15330,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15330,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15330,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15330,(3),null);var close = cljs.core.nth.call(null,vec__15330,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15330,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__15336 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__15336,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15336,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15336,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15336,(3),null);var close = cljs.core.nth.call(null,vec__15336,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15336,(5),null);var curr = vec__15336;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__15336,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__15337){var vec__15338 = p__15337;var vec__15339 = cljs.core.nth.call(null,vec__15338,(0),null);var ___$5 = cljs.core.nth.call(null,vec__15339,(0),null);var prev_ema = cljs.core.nth.call(null,vec__15339,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__15338,(1),null);var idx = cljs.core.nth.call(null,vec__15338,(2),null);var vec__15340 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__15340,(0),null);var ___$7 = cljs.core.nth.call(null,vec__15340,(1),null);var ___$8 = cljs.core.nth.call(null,vec__15340,(2),null);var ___$9 = cljs.core.nth.call(null,vec__15340,(3),null);var close__$1 = cljs.core.nth.call(null,vec__15340,(4),null);var ___$10 = cljs.core.nth.call(null,vec__15340,(5),null);var curr__$1 = vec__15340;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__15336,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__15346 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__15346,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15346,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15346,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15346,(3),null);var ct = cljs.core.nth.call(null,vec__15346,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15346,(5),null);var curr = vec__15346;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__15346,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__15347){var vec__15348 = p__15347;var ___$5 = cljs.core.nth.call(null,vec__15348,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15348,(1),null);var ___$7 = cljs.core.nth.call(null,vec__15348,(2),null);var low = cljs.core.nth.call(null,vec__15348,(3),null);var ___$8 = cljs.core.nth.call(null,vec__15348,(4),null);var ___$9 = cljs.core.nth.call(null,vec__15348,(5),null);return low;
});})(group,vec__15346,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__15346,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__15349){var vec__15350 = p__15349;var ___$5 = cljs.core.nth.call(null,vec__15350,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15350,(1),null);var high = cljs.core.nth.call(null,vec__15350,(2),null);var ___$7 = cljs.core.nth.call(null,vec__15350,(3),null);var ___$8 = cljs.core.nth.call(null,vec__15350,(4),null);var ___$9 = cljs.core.nth.call(null,vec__15350,(5),null);return high;
});})(group,vec__15346,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__15346,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__15346,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__15353){var vec__15354 = p__15353;var line = cljs.core.nth.call(null,vec__15354,(0),null);var v = cljs.core.nth.call(null,vec__15354,(1),null);return v;
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
return (function (p__15378){var vec__15379 = p__15378;var _ = cljs.core.nth.call(null,vec__15379,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15379,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15379,(2),null);var low = cljs.core.nth.call(null,vec__15379,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15379,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15379,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__15380){var vec__15381 = p__15380;var vec__15382 = cljs.core.nth.call(null,vec__15381,(0),null);var _ = cljs.core.nth.call(null,vec__15382,(0),null);var value = cljs.core.nth.call(null,vec__15382,(1),null);var ori = cljs.core.nth.call(null,vec__15381,(1),null);var prev = cljs.core.nth.call(null,vec__15381,(2),null);var curr = cljs.core.nth.call(null,vec__15381,(3),null);var act = cljs.core.nth.call(null,vec__15381,(4),null);var af = cljs.core.nth.call(null,vec__15381,(5),null);var vec__15383 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__15383,(0),null);var ___$2 = cljs.core.nth.call(null,vec__15383,(1),null);var ph = cljs.core.nth.call(null,vec__15383,(2),null);var pl = cljs.core.nth.call(null,vec__15383,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15383,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15383,(5),null);var prev_line = vec__15383;var vec__15384 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__15384,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15384,(1),null);var ch = cljs.core.nth.call(null,vec__15384,(2),null);var cl = cljs.core.nth.call(null,vec__15384,(3),null);var ___$7 = cljs.core.nth.call(null,vec__15384,(4),null);var ___$8 = cljs.core.nth.call(null,vec__15384,(5),null);var curr_line = vec__15384;var should_turn = (function (){var pred__15385 = cljs.core._EQ_;var expr__15386 = act;if(cljs.core.truth_(pred__15385.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15386)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__15385.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15386)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15386))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__15388 = cljs.core._EQ_;var expr__15389 = act;if(cljs.core.truth_(pred__15388.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15389)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__15388,expr__15389,vec__15383,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15384,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15381,vec__15382,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__15391){var vec__15392 = p__15391;var ___$9 = cljs.core.nth.call(null,vec__15392,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15392,(1),null);var high = cljs.core.nth.call(null,vec__15392,(2),null);var ___$11 = cljs.core.nth.call(null,vec__15392,(3),null);var ___$12 = cljs.core.nth.call(null,vec__15392,(4),null);var ___$13 = cljs.core.nth.call(null,vec__15392,(5),null);return high;
});})(pred__15388,expr__15389,vec__15383,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15384,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15381,vec__15382,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__15388.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15389)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__15388,expr__15389,vec__15383,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15384,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15381,vec__15382,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__15393){var vec__15394 = p__15393;var ___$9 = cljs.core.nth.call(null,vec__15394,(0),null);var ___$10 = cljs.core.nth.call(null,vec__15394,(1),null);var ___$11 = cljs.core.nth.call(null,vec__15394,(2),null);var low__$1 = cljs.core.nth.call(null,vec__15394,(3),null);var ___$12 = cljs.core.nth.call(null,vec__15394,(4),null);var ___$13 = cljs.core.nth.call(null,vec__15394,(5),null);return low__$1;
});})(pred__15388,expr__15389,vec__15383,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__15384,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__15381,vec__15382,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15389))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__15395 = cljs.core._EQ_;var expr__15396 = act;if(cljs.core.truth_(pred__15395.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15396)))
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
{if(cljs.core.truth_(pred__15395.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15396)))
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
{if(cljs.core.truth_(pred__15395.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__15396)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15396))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__15398 = cljs.core._EQ_;var expr__15399 = act;if(cljs.core.truth_(pred__15398.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__15399)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__15398.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__15399)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15399))));
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
return (function (p1__15401_SHARP_){return Math.pow((p1__15401_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__15407 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__15407,(0),null);var vec__15408 = cljs.core.nth.call(null,vec__15407,(1),null);var avg = cljs.core.nth.call(null,vec__15408,(0),null);var sd_v = cljs.core.nth.call(null,vec__15408,(1),null);var currs = cljs.core.map.call(null,((function (vec__15407,_,vec__15408,avg,sd_v){
return (function (p__15409){var vec__15410 = p__15409;var ___$1 = cljs.core.nth.call(null,vec__15410,(0),null);var ___$2 = cljs.core.nth.call(null,vec__15410,(1),null);var ___$3 = cljs.core.nth.call(null,vec__15410,(2),null);var ___$4 = cljs.core.nth.call(null,vec__15410,(3),null);var close = cljs.core.nth.call(null,vec__15410,(4),null);var ___$5 = cljs.core.nth.call(null,vec__15410,(5),null);return close;
});})(vec__15407,_,vec__15408,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__15407,_,vec__15408,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__15407,_,vec__15408,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__15407,_,vec__15408,avg,sd_v,currs,offsets){
return (function (p1__15402_SHARP_){return (p1__15402_SHARP_ / sd_v);
});})(vec__15407,_,vec__15408,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__15407,_,vec__15408,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__15411__delegate = function (args){return args;
};
var G__15411 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15411__delegate.call(this,args);};
G__15411.cljs$lang$maxFixedArity = 0;
G__15411.cljs$lang$applyTo = (function (arglist__15412){
var args = cljs.core.seq(arglist__15412);
return G__15411__delegate(args);
});
G__15411.cljs$core$IFn$_invoke$arity$variadic = G__15411__delegate;
return G__15411;
})()
;})(vec__15407,_,vec__15408,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
/**
* 余氏指標
* w用0.001看多空動能
* w用0.5看振盪方向
*/
test.stock4.yu = (function yu(w,n,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,((function (normal){
return (function (p__15421,p__15422){var vec__15423 = p__15421;var _ = cljs.core.nth.call(null,vec__15423,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15423,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15423,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15423,(3),null);var pc = cljs.core.nth.call(null,vec__15423,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15423,(5),null);var vec__15424 = p__15422;var ___$5 = cljs.core.nth.call(null,vec__15424,(0),null);var ___$6 = cljs.core.nth.call(null,vec__15424,(1),null);var ___$7 = cljs.core.nth.call(null,vec__15424,(2),null);var ___$8 = cljs.core.nth.call(null,vec__15424,(3),null);var cc = cljs.core.nth.call(null,vec__15424,(4),null);var ___$9 = cljs.core.nth.call(null,vec__15424,(5),null);return (((cc - pc) / pc) / normal);
});})(normal))
,reverse_kline,cljs.core.rest.call(null,reverse_kline));var vs = cljs.core.map.call(null,((function (normal,up_seq){
return (function (p__15425){var vec__15426 = p__15425;var dir = cljs.core.nth.call(null,vec__15426,(0),null);var ran = cljs.core.nth.call(null,vec__15426,(1),null);return ran;
});})(normal,up_seq))
,cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__15427,up_offset){var vec__15428 = p__15427;var prev = cljs.core.nth.call(null,vec__15428,(0),null);var ran = cljs.core.nth.call(null,vec__15428,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (normal,up_seq,vs){
return (function() { 
var G__15429__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__15429 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15429__delegate.call(this,args);};
G__15429.cljs$lang$maxFixedArity = 0;
G__15429.cljs$lang$applyTo = (function (arglist__15430){
var args = cljs.core.seq(arglist__15430);
return G__15429__delegate(args);
});
G__15429.cljs$core$IFn$_invoke$arity$variadic = G__15429__delegate;
return G__15429;
})()
;})(normal,up_seq,vs))
,cljs.core.rest.call(null,reverse_kline),vs);
});
/**
* Volume Accumulation 成交量多空比率淨額法
* 用來計算OBV能量潮公式
*/
test.stock4.VolumeAccumulation = (function VolumeAccumulation(kline){return cljs.core.map.call(null,(function (p__15433){var vec__15434 = p__15433;var date = cljs.core.nth.call(null,vec__15434,(0),null);var open = cljs.core.nth.call(null,vec__15434,(1),null);var high = cljs.core.nth.call(null,vec__15434,(2),null);var low = cljs.core.nth.call(null,vec__15434,(3),null);var close = cljs.core.nth.call(null,vec__15434,(4),null);var volume = cljs.core.nth.call(null,vec__15434,(5),null);if(cljs.core._EQ_.call(null,high,low))
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
return (function (p__15441){var vec__15442 = p__15441;var _ = cljs.core.nth.call(null,vec__15442,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15442,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15442,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15442,(3),null);var ___$4 = cljs.core.nth.call(null,vec__15442,(4),null);var volume = cljs.core.nth.call(null,vec__15442,(5),null);return volume;
});})(n,group))
,group));var all_price = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group,all_volume){
return (function (p__15443){var vec__15444 = p__15443;var _ = cljs.core.nth.call(null,vec__15444,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15444,(1),null);var high = cljs.core.nth.call(null,vec__15444,(2),null);var ___$2 = cljs.core.nth.call(null,vec__15444,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15444,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15444,(5),null);return high;
});})(n,group,all_volume))
,group));var v_per_p = (all_price / all_volume);var obv_seq = test.stock4.obv.call(null,group);var predict = cljs.core.map.call(null,((function (n,group,all_volume,all_price,v_per_p,obv_seq){
return (function (p__15445,obv){var vec__15446 = p__15445;var _ = cljs.core.nth.call(null,vec__15446,(0),null);var open = cljs.core.nth.call(null,vec__15446,(1),null);var ___$1 = cljs.core.nth.call(null,vec__15446,(2),null);var ___$2 = cljs.core.nth.call(null,vec__15446,(3),null);var ___$3 = cljs.core.nth.call(null,vec__15446,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15446,(5),null);return (open + (obv * v_per_p));
});})(n,group,all_volume,all_price,v_per_p,obv_seq))
,kline,obv_seq);console.log(all_volume,all_price);
console.log(v_per_p);
return predict;
});
test.stock4.yu_obv = (function yu_obv(n,kline){var group = cljs.core.take.call(null,n,kline);var va = test.stock4.VolumeAccumulation.call(null,group);var max_va = cljs.core.apply.call(null,cljs.core.max,va);var min_va = cljs.core.apply.call(null,cljs.core.min,va);var region = (max_va - min_va);return cljs.core.map.call(null,((function (group,va,max_va,min_va,region){
return (function (p1__15447_SHARP_){return (p1__15447_SHARP_ / region);
});})(group,va,max_va,min_va,region))
,va);
});
test.stock4.yu_volume = (function yu_volume(n,reverse_kline){var group = cljs.core.take.call(null,n,reverse_kline);var price_seq = cljs.core.map.call(null,((function (group){
return (function (p__15452){var vec__15453 = p__15452;var _ = cljs.core.nth.call(null,vec__15453,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15453,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15453,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15453,(3),null);var close = cljs.core.nth.call(null,vec__15453,(4),null);var ___$4 = cljs.core.nth.call(null,vec__15453,(5),null);return close;
});})(group))
,group);var price_up_rate = cljs.core.map.call(null,((function (group,price_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq))
,price_seq,cljs.core.rest.call(null,price_seq));var volume_seq = cljs.core.map.call(null,((function (group,price_seq,price_up_rate){
return (function (p__15454){var vec__15455 = p__15454;var _ = cljs.core.nth.call(null,vec__15455,(0),null);var ___$1 = cljs.core.nth.call(null,vec__15455,(1),null);var ___$2 = cljs.core.nth.call(null,vec__15455,(2),null);var ___$3 = cljs.core.nth.call(null,vec__15455,(3),null);var ___$4 = cljs.core.nth.call(null,vec__15455,(4),null);var volume = cljs.core.nth.call(null,vec__15455,(5),null);return volume;
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
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,draw,onSystem,onView){
return (function (state_15933){var state_val_15934 = (state_15933[(1)]);if((state_val_15934 === (2)))
{var inst_15931 = (state_15933[(2)]);var state_15933__$1 = state_15933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15933__$1,inst_15931);
} else
{if((state_val_15934 === (1)))
{var inst_15929 = cljs.core.js__GT_clj.call(null,data);var state_15933__$1 = state_15933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15933__$1,(2),onView,inst_15929);
} else
{return null;
}
}
});})(c__6203__auto__,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15938 = [null,null,null,null,null,null,null];(statearr_15938[(0)] = state_machine__6189__auto__);
(statearr_15938[(1)] = (1));
return statearr_15938;
});
var state_machine__6189__auto____1 = (function (state_15933){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15933);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15939){if((e15939 instanceof Object))
{var ex__6192__auto__ = e15939;var statearr_15940_16402 = state_15933;(statearr_15940_16402[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16403 = state_15933;
state_15933 = G__16403;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15933){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_15941 = f__6204__auto__.call(null);(statearr_15941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,draw,onSystem,onView))
);
return c__6203__auto__;
});})(draw,onSystem,onView))
);
var c__6203__auto___16404 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___16404,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___16404,draw,onSystem,onView){
return (function (state_15958){var state_val_15959 = (state_15958[(1)]);if((state_val_15959 === (6)))
{var inst_15954 = (state_15958[(2)]);var state_15958__$1 = state_15958;var statearr_15960_16405 = state_15958__$1;(statearr_15960_16405[(2)] = inst_15954);
(statearr_15960_16405[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15959 === (5)))
{var inst_15956 = (state_15958[(2)]);var state_15958__$1 = state_15958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15958__$1,inst_15956);
} else
{if((state_val_15959 === (4)))
{var inst_15947 = (state_15958[(7)]);var inst_15951 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_15947];var inst_15952 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15951,null));var state_15958__$1 = state_15958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15958__$1,(6),onSystem,inst_15952);
} else
{if((state_val_15959 === (3)))
{var inst_15946 = (state_15958[(8)]);var inst_15949 = alert(inst_15946);var state_15958__$1 = state_15958;var statearr_15961_16406 = state_15958__$1;(statearr_15961_16406[(2)] = inst_15949);
(statearr_15961_16406[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15959 === (2)))
{var inst_15946 = (state_15958[(8)]);var inst_15945 = (state_15958[(2)]);var inst_15946__$1 = cljs.core.nth.call(null,inst_15945,(0),null);var inst_15947 = cljs.core.nth.call(null,inst_15945,(1),null);var state_15958__$1 = (function (){var statearr_15962 = state_15958;(statearr_15962[(7)] = inst_15947);
(statearr_15962[(8)] = inst_15946__$1);
return statearr_15962;
})();if(cljs.core.truth_(inst_15946__$1))
{var statearr_15963_16407 = state_15958__$1;(statearr_15963_16407[(1)] = (3));
} else
{var statearr_15964_16408 = state_15958__$1;(statearr_15964_16408[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15959 === (1)))
{var inst_15943 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_15958__$1 = state_15958;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15958__$1,(2),inst_15943);
} else
{return null;
}
}
}
}
}
}
});})(c__6203__auto___16404,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto___16404,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15968 = [null,null,null,null,null,null,null,null,null];(statearr_15968[(0)] = state_machine__6189__auto__);
(statearr_15968[(1)] = (1));
return statearr_15968;
});
var state_machine__6189__auto____1 = (function (state_15958){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15958);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15969){if((e15969 instanceof Object))
{var ex__6192__auto__ = e15969;var statearr_15970_16409 = state_15958;(statearr_15970_16409[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16410 = state_15958;
state_15958 = G__16410;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15958){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___16404,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_15971 = f__6204__auto__.call(null);(statearr_15971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___16404);
return statearr_15971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___16404,draw,onSystem,onView))
);
var c__6203__auto___16411 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___16411,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___16411,draw,onSystem,onView){
return (function (state_16261){var state_val_16262 = (state_16261[(1)]);if((state_val_16262 === (65)))
{var inst_16188 = (state_16261[(7)]);var inst_16189 = (state_16261[(8)]);var inst_16191 = (inst_16189 < inst_16188);var inst_16192 = inst_16191;var state_16261__$1 = state_16261;if(cljs.core.truth_(inst_16192))
{var statearr_16263_16412 = state_16261__$1;(statearr_16263_16412[(1)] = (67));
} else
{var statearr_16264_16413 = state_16261__$1;(statearr_16264_16413[(1)] = (68));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (70)))
{var inst_16200 = (state_16261[(9)]);var inst_16202 = cljs.core.chunked_seq_QMARK_.call(null,inst_16200);var state_16261__$1 = state_16261;if(inst_16202)
{var statearr_16265_16414 = state_16261__$1;(statearr_16265_16414[(1)] = (73));
} else
{var statearr_16266_16415 = state_16261__$1;(statearr_16266_16415[(1)] = (74));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (62)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16183 = cljs.core.keyword.call(null,inst_16033);var inst_16184 = inst_16183.call(null,inst_15993);var inst_16185 = cljs.core.seq.call(null,inst_16184);var inst_16186 = inst_16185;var inst_16187 = null;var inst_16188 = (0);var inst_16189 = (0);var state_16261__$1 = (function (){var statearr_16267 = state_16261;(statearr_16267[(12)] = inst_16186);
(statearr_16267[(13)] = inst_16187);
(statearr_16267[(7)] = inst_16188);
(statearr_16267[(8)] = inst_16189);
return statearr_16267;
})();var statearr_16268_16416 = state_16261__$1;(statearr_16268_16416[(2)] = null);
(statearr_16268_16416[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (74)))
{var inst_16200 = (state_16261[(9)]);var inst_16209 = cljs.core.first.call(null,inst_16200);var inst_16210 = cljs.core.pr_str.call(null,inst_16209);var inst_16211 = console.log(inst_16210);var inst_16212 = cljs.core.next.call(null,inst_16200);var inst_16186 = inst_16212;var inst_16187 = null;var inst_16188 = (0);var inst_16189 = (0);var state_16261__$1 = (function (){var statearr_16269 = state_16261;(statearr_16269[(14)] = inst_16211);
(statearr_16269[(12)] = inst_16186);
(statearr_16269[(13)] = inst_16187);
(statearr_16269[(7)] = inst_16188);
(statearr_16269[(8)] = inst_16189);
return statearr_16269;
})();var statearr_16270_16417 = state_16261__$1;(statearr_16270_16417[(2)] = null);
(statearr_16270_16417[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (7)))
{var inst_15985 = (state_16261[(15)]);var inst_15990 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15985);var state_16261__$1 = state_16261;var statearr_16271_16418 = state_16261__$1;(statearr_16271_16418[(2)] = inst_15990);
(statearr_16271_16418[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (59)))
{var inst_15993 = (state_16261[(11)]);var inst_15994 = (state_16261[(16)]);var inst_16171 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16172 = test.stock4.check_turn.call(null,inst_16171);var inst_16173 = cljs.core.take.call(null,inst_15994,inst_16172);var inst_16174 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"turn","turn",75759344),inst_16173);var inst_16175 = draw.call(null,inst_16174);var state_16261__$1 = state_16261;var statearr_16272_16419 = state_16261__$1;(statearr_16272_16419[(2)] = inst_16175);
(statearr_16272_16419[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (20)))
{var inst_16000 = (state_16261[(17)]);var inst_16028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16000);var state_16261__$1 = state_16261;var statearr_16273_16420 = state_16261__$1;(statearr_16273_16420[(2)] = inst_16028);
(statearr_16273_16420[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (72)))
{var inst_16218 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16274_16421 = state_16261__$1;(statearr_16274_16421[(2)] = inst_16218);
(statearr_16274_16421[(1)] = (69));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (58)))
{var inst_16229 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16275_16422 = state_16261__$1;(statearr_16275_16422[(2)] = inst_16229);
(statearr_16275_16422[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (60)))
{var inst_16032 = (state_16261[(18)]);var inst_16177 = cljs.core._EQ_.call(null,"print",inst_16032);var state_16261__$1 = state_16261;if(inst_16177)
{var statearr_16276_16423 = state_16261__$1;(statearr_16276_16423[(1)] = (62));
} else
{var statearr_16277_16424 = state_16261__$1;(statearr_16277_16424[(1)] = (63));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (27)))
{var inst_16032 = (state_16261[(18)]);var inst_16054 = cljs.core._EQ_.call(null,"yu-obv",inst_16032);var state_16261__$1 = state_16261;if(inst_16054)
{var statearr_16278_16425 = state_16261__$1;(statearr_16278_16425[(1)] = (29));
} else
{var statearr_16279_16426 = state_16261__$1;(statearr_16279_16426[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (1)))
{var inst_15977 = (state_16261[(19)]);var inst_15975 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_15976 = [(200)];var inst_15977__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15975,inst_15976);var inst_15978 = cljs.core.seq_QMARK_.call(null,inst_15977__$1);var state_16261__$1 = (function (){var statearr_16280 = state_16261;(statearr_16280[(19)] = inst_15977__$1);
return statearr_16280;
})();if(inst_15978)
{var statearr_16281_16427 = state_16261__$1;(statearr_16281_16427[(1)] = (2));
} else
{var statearr_16282_16428 = state_16261__$1;(statearr_16282_16428[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (69)))
{var inst_16220 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16283_16429 = state_16261__$1;(statearr_16283_16429[(2)] = inst_16220);
(statearr_16283_16429[(1)] = (66));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (24)))
{var inst_16032 = (state_16261[(18)]);var inst_16045 = cljs.core._EQ_.call(null,"obv",inst_16032);var state_16261__$1 = state_16261;if(inst_16045)
{var statearr_16284_16430 = state_16261__$1;(statearr_16284_16430[(1)] = (26));
} else
{var statearr_16285_16431 = state_16261__$1;(statearr_16285_16431[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (55)))
{var inst_16231 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16286_16432 = state_16261__$1;(statearr_16286_16432[(2)] = inst_16231);
(statearr_16286_16432[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (39)))
{var inst_16032 = (state_16261[(18)]);var inst_16095 = cljs.core._EQ_.call(null,"sma",inst_16032);var state_16261__$1 = state_16261;if(inst_16095)
{var statearr_16287_16433 = state_16261__$1;(statearr_16287_16433[(1)] = (41));
} else
{var statearr_16288_16434 = state_16261__$1;(statearr_16288_16434[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (46)))
{var inst_16237 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16289_16435 = state_16261__$1;(statearr_16289_16435[(2)] = inst_16237);
(statearr_16289_16435[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (4)))
{var inst_15977 = (state_16261[(19)]);var inst_15983 = (state_16261[(20)]);var inst_15983__$1 = (state_16261[(2)]);var inst_15984 = cljs.core.get.call(null,inst_15983__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_15985 = inst_15977;var state_16261__$1 = (function (){var statearr_16290 = state_16261;(statearr_16290[(21)] = inst_15984);
(statearr_16290[(15)] = inst_15985);
(statearr_16290[(20)] = inst_15983__$1);
return statearr_16290;
})();var statearr_16291_16436 = state_16261__$1;(statearr_16291_16436[(2)] = null);
(statearr_16291_16436[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (54)))
{var inst_16032 = (state_16261[(18)]);var inst_16161 = cljs.core._EQ_.call(null,"avg",inst_16032);var state_16261__$1 = state_16261;if(inst_16161)
{var statearr_16292_16437 = state_16261__$1;(statearr_16292_16437[(1)] = (56));
} else
{var statearr_16293_16438 = state_16261__$1;(statearr_16293_16438[(1)] = (57));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (15)))
{var inst_15993 = (state_16261[(11)]);var state_16261__$1 = state_16261;var statearr_16294_16439 = state_16261__$1;(statearr_16294_16439[(2)] = inst_15993);
(statearr_16294_16439[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (48)))
{var inst_16032 = (state_16261[(18)]);var inst_16127 = cljs.core._EQ_.call(null,"sar",inst_16032);var state_16261__$1 = state_16261;if(inst_16127)
{var statearr_16295_16440 = state_16261__$1;(statearr_16295_16440[(1)] = (50));
} else
{var statearr_16296_16441 = state_16261__$1;(statearr_16296_16441[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (50)))
{var inst_15993 = (state_16261[(11)]);var inst_16129 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16130 = cljs.core.reverse.call(null,inst_16129);var inst_16131 = test.stock4.sar.call(null,inst_16130);var inst_16132 = cljs.core.count.call(null,inst_16129);var inst_16133 = cljs.core.take.call(null,inst_16132,inst_16131);var inst_16134 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"sar","sar",833088678),inst_16133);var inst_16135 = draw.call(null,inst_16134);var state_16261__$1 = state_16261;var statearr_16297_16442 = state_16261__$1;(statearr_16297_16442[(2)] = inst_16135);
(statearr_16297_16442[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (75)))
{var inst_16215 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16298_16443 = state_16261__$1;(statearr_16298_16443[(2)] = inst_16215);
(statearr_16298_16443[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (21)))
{var inst_16000 = (state_16261[(17)]);var state_16261__$1 = state_16261;var statearr_16299_16444 = state_16261__$1;(statearr_16299_16444[(2)] = inst_16000);
(statearr_16299_16444[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (31)))
{var inst_16247 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16300_16445 = state_16261__$1;(statearr_16300_16445[(2)] = inst_16247);
(statearr_16300_16445[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (32)))
{var inst_15993 = (state_16261[(11)]);var inst_16064 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16065 = test.stock4.yu_pre.call(null,inst_16064);var inst_16066 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16067 = cljs.core.count.call(null,inst_16066);var inst_16068 = cljs.core.take.call(null,inst_16067,inst_16065);var inst_16069 = cljs.core.pr_str.call(null,inst_16068);var inst_16070 = console.log(inst_16069);var state_16261__$1 = (function (){var statearr_16301 = state_16261;(statearr_16301[(22)] = inst_16070);
return statearr_16301;
})();var statearr_16302_16446 = state_16261__$1;(statearr_16302_16446[(2)] = inst_15993);
(statearr_16302_16446[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (40)))
{var inst_16241 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16303_16447 = state_16261__$1;(statearr_16303_16447[(2)] = inst_16241);
(statearr_16303_16447[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (56)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_15994 = (state_16261[(16)]);var inst_16163 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16164 = test.stock4.average.call(null,inst_16033,inst_16163);var inst_16165 = cljs.core.take.call(null,inst_15994,inst_16164);var inst_16166 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_16165);var inst_16167 = draw.call(null,inst_16166);var state_16261__$1 = state_16261;var statearr_16304_16448 = state_16261__$1;(statearr_16304_16448[(2)] = inst_16167);
(statearr_16304_16448[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (33)))
{var inst_16032 = (state_16261[(18)]);var inst_16072 = cljs.core._EQ_.call(null,"yu",inst_16032);var state_16261__$1 = state_16261;if(inst_16072)
{var statearr_16305_16449 = state_16261__$1;(statearr_16305_16449[(1)] = (35));
} else
{var statearr_16306_16450 = state_16261__$1;(statearr_16306_16450[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (13)))
{var inst_16256 = (state_16261[(2)]);var inst_15985 = inst_16256;var state_16261__$1 = (function (){var statearr_16307 = state_16261;(statearr_16307[(15)] = inst_15985);
return statearr_16307;
})();var statearr_16308_16451 = state_16261__$1;(statearr_16308_16451[(2)] = null);
(statearr_16308_16451[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (22)))
{var inst_16032 = (state_16261[(18)]);var inst_16031 = (state_16261[(23)]);var inst_16031__$1 = (state_16261[(2)]);var inst_16032__$1 = cljs.core.get.call(null,inst_16031__$1,"cmd");var inst_16033 = cljs.core.get.call(null,inst_16031__$1,"params");var inst_16037 = cljs.core._EQ_.call(null,"length",inst_16032__$1);var state_16261__$1 = (function (){var statearr_16309 = state_16261;(statearr_16309[(10)] = inst_16033);
(statearr_16309[(18)] = inst_16032__$1);
(statearr_16309[(23)] = inst_16031__$1);
return statearr_16309;
})();if(inst_16037)
{var statearr_16310_16452 = state_16261__$1;(statearr_16310_16452[(1)] = (23));
} else
{var statearr_16311_16453 = state_16261__$1;(statearr_16311_16453[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (36)))
{var inst_16032 = (state_16261[(18)]);var inst_16083 = cljs.core._EQ_.call(null,"sd",inst_16032);var state_16261__$1 = state_16261;if(inst_16083)
{var statearr_16312_16454 = state_16261__$1;(statearr_16312_16454[(1)] = (38));
} else
{var statearr_16313_16455 = state_16261__$1;(statearr_16313_16455[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (41)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16097 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16098 = test.stock4.sma.call(null,inst_16033,inst_16097);var inst_16099 = cljs.core.take.call(null,(10),inst_16098);var inst_16100 = cljs.core.pr_str.call(null,inst_16099);var inst_16101 = console.log(inst_16100);var state_16261__$1 = (function (){var statearr_16314 = state_16261;(statearr_16314[(24)] = inst_16101);
return statearr_16314;
})();var statearr_16315_16456 = state_16261__$1;(statearr_16315_16456[(2)] = inst_15993);
(statearr_16315_16456[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (43)))
{var inst_16239 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16316_16457 = state_16261__$1;(statearr_16316_16457[(2)] = inst_16239);
(statearr_16316_16457[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (61)))
{var inst_16227 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16317_16458 = state_16261__$1;(statearr_16317_16458[(2)] = inst_16227);
(statearr_16317_16458[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (29)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16056 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16057 = test.stock4.yu_obv.call(null,inst_16033,inst_16056);var inst_16058 = cljs.core.take.call(null,(10),inst_16057);var inst_16059 = cljs.core.pr_str.call(null,inst_16058);var inst_16060 = console.log(inst_16059);var state_16261__$1 = (function (){var statearr_16318 = state_16261;(statearr_16318[(25)] = inst_16060);
return statearr_16318;
})();var statearr_16319_16459 = state_16261__$1;(statearr_16319_16459[(2)] = inst_15993);
(statearr_16319_16459[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (44)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16105 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16106 = test.stock4.ema.call(null,inst_16033,(0),inst_16105);var inst_16107 = cljs.core.take.call(null,(10),inst_16106);var inst_16108 = cljs.core.pr_str.call(null,inst_16107);var inst_16109 = console.log(inst_16108);var state_16261__$1 = (function (){var statearr_16320 = state_16261;(statearr_16320[(26)] = inst_16109);
return statearr_16320;
})();var statearr_16321_16460 = state_16261__$1;(statearr_16321_16460[(2)] = inst_15993);
(statearr_16321_16460[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (6)))
{var inst_16259 = (state_16261[(2)]);var state_16261__$1 = state_16261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16261__$1,inst_16259);
} else
{if((state_val_16262 === (28)))
{var inst_16249 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16322_16461 = state_16261__$1;(statearr_16322_16461[(2)] = inst_16249);
(statearr_16322_16461[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (64)))
{var inst_16225 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16323_16462 = state_16261__$1;(statearr_16323_16462[(2)] = inst_16225);
(statearr_16323_16462[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (51)))
{var inst_16032 = (state_16261[(18)]);var inst_16137 = cljs.core._EQ_.call(null,"stock",inst_16032);var state_16261__$1 = state_16261;if(inst_16137)
{var statearr_16324_16463 = state_16261__$1;(statearr_16324_16463[(1)] = (53));
} else
{var statearr_16325_16464 = state_16261__$1;(statearr_16325_16464[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (25)))
{var inst_16251 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16326_16465 = state_16261__$1;(statearr_16326_16465[(2)] = inst_16251);
(statearr_16326_16465[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (34)))
{var inst_16245 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16327_16466 = state_16261__$1;(statearr_16327_16466[(2)] = inst_16245);
(statearr_16327_16466[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (17)))
{var inst_16000 = (state_16261[(17)]);var inst_16026 = cljs.core.seq_QMARK_.call(null,inst_16000);var state_16261__$1 = state_16261;if(inst_16026)
{var statearr_16328_16467 = state_16261__$1;(statearr_16328_16467[(1)] = (20));
} else
{var statearr_16329_16468 = state_16261__$1;(statearr_16329_16468[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (3)))
{var inst_15977 = (state_16261[(19)]);var state_16261__$1 = state_16261;var statearr_16330_16469 = state_16261__$1;(statearr_16330_16469[(2)] = inst_15977);
(statearr_16330_16469[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (12)))
{var inst_16001 = (state_16261[(27)]);var inst_16023 = cljs.core._EQ_.call(null,onView,inst_16001);var state_16261__$1 = state_16261;if(inst_16023)
{var statearr_16331_16470 = state_16261__$1;(statearr_16331_16470[(1)] = (17));
} else
{var statearr_16332_16471 = state_16261__$1;(statearr_16332_16471[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (2)))
{var inst_15977 = (state_16261[(19)]);var inst_15980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15977);var state_16261__$1 = state_16261;var statearr_16333_16472 = state_16261__$1;(statearr_16333_16472[(2)] = inst_15980);
(statearr_16333_16472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (66)))
{var inst_15993 = (state_16261[(11)]);var inst_16222 = (state_16261[(2)]);var state_16261__$1 = (function (){var statearr_16334 = state_16261;(statearr_16334[(28)] = inst_16222);
return statearr_16334;
})();var statearr_16335_16473 = state_16261__$1;(statearr_16335_16473[(2)] = inst_15993);
(statearr_16335_16473[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (23)))
{var inst_15993 = (state_16261[(11)]);var inst_16039 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16040 = test.stock4.check_length.call(null,inst_16039);var inst_16041 = cljs.core.take.call(null,(10),inst_16040);var inst_16042 = cljs.core.pr_str.call(null,inst_16041);var inst_16043 = console.log(inst_16042);var state_16261__$1 = (function (){var statearr_16336 = state_16261;(statearr_16336[(29)] = inst_16043);
return statearr_16336;
})();var statearr_16337_16474 = state_16261__$1;(statearr_16337_16474[(2)] = inst_15993);
(statearr_16337_16474[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (47)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16113 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16114 = cljs.core.count.call(null,inst_16113);var inst_16115 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16116 = test.stock4.rsv.call(null,inst_16115);var inst_16117 = test.stock4.k.call(null,inst_16033,inst_16116);var inst_16118 = cljs.core.take.call(null,inst_16114,inst_16117);var inst_16119 = ((3) * inst_16033);var inst_16120 = test.stock4.k.call(null,inst_16119,inst_16116);var inst_16121 = cljs.core.take.call(null,inst_16114,inst_16120);var inst_16122 = [null,inst_16118,inst_16121];var inst_16123 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16122,null));var inst_16124 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"kd","kd",771448701),inst_16123);var inst_16125 = draw.call(null,inst_16124);var state_16261__$1 = state_16261;var statearr_16338_16475 = state_16261__$1;(statearr_16338_16475[(2)] = inst_16125);
(statearr_16338_16475[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (35)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16074 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16075 = cljs.core.reverse.call(null,inst_16074);var inst_16076 = test.stock4.yu.call(null,0.5,inst_16033,inst_16075);var inst_16077 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16078 = cljs.core.count.call(null,inst_16077);var inst_16079 = cljs.core.take.call(null,inst_16078,inst_16076);var inst_16080 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"yu","yu",979062608),inst_16079);var inst_16081 = draw.call(null,inst_16080);var state_16261__$1 = state_16261;var statearr_16339_16476 = state_16261__$1;(statearr_16339_16476[(2)] = inst_16081);
(statearr_16339_16476[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (19)))
{var inst_16254 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16340_16477 = state_16261__$1;(statearr_16340_16477[(2)] = inst_16254);
(statearr_16340_16477[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (57)))
{var inst_16032 = (state_16261[(18)]);var inst_16169 = cljs.core._EQ_.call(null,"turn",inst_16032);var state_16261__$1 = state_16261;if(inst_16169)
{var statearr_16341_16478 = state_16261__$1;(statearr_16341_16478[(1)] = (59));
} else
{var statearr_16342_16479 = state_16261__$1;(statearr_16342_16479[(1)] = (60));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (68)))
{var inst_16200 = (state_16261[(9)]);var inst_16186 = (state_16261[(12)]);var inst_16200__$1 = cljs.core.seq.call(null,inst_16186);var state_16261__$1 = (function (){var statearr_16343 = state_16261;(statearr_16343[(9)] = inst_16200__$1);
return statearr_16343;
})();if(inst_16200__$1)
{var statearr_16344_16480 = state_16261__$1;(statearr_16344_16480[(1)] = (70));
} else
{var statearr_16345_16481 = state_16261__$1;(statearr_16345_16481[(1)] = (71));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (11)))
{var inst_16000 = (state_16261[(17)]);var inst_16008 = cljs.core.nth.call(null,inst_16000,(0),null);var inst_16009 = cljs.core.nth.call(null,inst_16000,(1),null);var inst_16013 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_16008);var state_16261__$1 = (function (){var statearr_16346 = state_16261;(statearr_16346[(30)] = inst_16009);
return statearr_16346;
})();if(inst_16013)
{var statearr_16347_16482 = state_16261__$1;(statearr_16347_16482[(1)] = (14));
} else
{var statearr_16348_16483 = state_16261__$1;(statearr_16348_16483[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (9)))
{var inst_15993 = (state_16261[(11)]);var inst_15993__$1 = (state_16261[(2)]);var inst_15994 = cljs.core.get.call(null,inst_15993__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_15996 = [onSystem,onView];var inst_15997 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15996,null));var state_16261__$1 = (function (){var statearr_16349 = state_16261;(statearr_16349[(11)] = inst_15993__$1);
(statearr_16349[(16)] = inst_15994);
return statearr_16349;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_16261__$1,(10),inst_15997);
} else
{if((state_val_16262 === (5)))
{var inst_15985 = (state_16261[(15)]);var inst_15988 = cljs.core.seq_QMARK_.call(null,inst_15985);var state_16261__$1 = state_16261;if(inst_15988)
{var statearr_16350_16484 = state_16261__$1;(statearr_16350_16484[(1)] = (7));
} else
{var statearr_16351_16485 = state_16261__$1;(statearr_16351_16485[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (14)))
{var inst_15993 = (state_16261[(11)]);var inst_15994 = (state_16261[(16)]);var inst_16009 = (state_16261[(30)]);var inst_16015 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"info","info",-317069002),inst_16009);var inst_16016 = cljs.core.take.call(null,inst_15994,inst_16009);var inst_16017 = cljs.core.assoc.call(null,inst_16015,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_16016);var inst_16018 = draw.call(null,inst_16017);var state_16261__$1 = state_16261;var statearr_16352_16486 = state_16261__$1;(statearr_16352_16486[(2)] = inst_16018);
(statearr_16352_16486[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (45)))
{var inst_16032 = (state_16261[(18)]);var inst_16111 = cljs.core._EQ_.call(null,"rsv",inst_16032);var state_16261__$1 = state_16261;if(inst_16111)
{var statearr_16353_16487 = state_16261__$1;(statearr_16353_16487[(1)] = (47));
} else
{var statearr_16354_16488 = state_16261__$1;(statearr_16354_16488[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (53)))
{var inst_15999 = (state_16261[(31)]);var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_15985 = (state_16261[(15)]);var inst_16032 = (state_16261[(18)]);var inst_15983 = (state_16261[(20)]);var inst_15994 = (state_16261[(16)]);var inst_16001 = (state_16261[(27)]);var inst_16000 = (state_16261[(17)]);var inst_16031 = (state_16261[(23)]);var inst_16157 = cljs.core.async.chan.call(null,(1));var inst_16158 = (function (){var cmd = inst_16032;var input = inst_16031;var ctx = inst_15993;var expr__16003 = inst_16001;var pred__16002 = cljs.core._EQ_;var map__16025 = inst_16031;var v = inst_16000;var G__15973 = inst_15985;var pred__16034 = cljs.core._EQ_;var expr__16035 = inst_16032;var map__15987 = inst_15993;var c__6203__auto____$1 = inst_16157;var params = inst_16033;var cnt = inst_15994;var ch = inst_16001;var map__15974 = inst_15983;var vec__15995 = inst_15999;return ((function (cmd,input,ctx,expr__16003,pred__16002,map__16025,v,G__15973,pred__16034,expr__16035,map__15987,c__6203__auto____$1,params,cnt,ch,map__15974,vec__15995,inst_15999,inst_16033,inst_15993,inst_15985,inst_16032,inst_15983,inst_15994,inst_16001,inst_16000,inst_16031,inst_16157,state_val_16262,c__6203__auto___16411,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (cmd,input,ctx,expr__16003,pred__16002,map__16025,v,G__15973,pred__16034,expr__16035,map__15987,c__6203__auto____$1,params,cnt,ch,map__15974,vec__15995,inst_15999,inst_16033,inst_15993,inst_15985,inst_16032,inst_15983,inst_15994,inst_16001,inst_16000,inst_16031,inst_16157,state_val_16262,c__6203__auto___16411,draw,onSystem,onView){
return (function (state_16155){var state_val_16156 = (state_16155[(1)]);if((state_val_16156 === (6)))
{var inst_16151 = (state_16155[(2)]);var state_16155__$1 = state_16155;var statearr_16355_16489 = state_16155__$1;(statearr_16355_16489[(2)] = inst_16151);
(statearr_16355_16489[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16156 === (5)))
{var inst_16153 = (state_16155[(2)]);var state_16155__$1 = state_16155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16155__$1,inst_16153);
} else
{if((state_val_16156 === (4)))
{var inst_16144 = (state_16155[(7)]);var inst_16148 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_16144];var inst_16149 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16148,null));var state_16155__$1 = state_16155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16155__$1,(6),onSystem,inst_16149);
} else
{if((state_val_16156 === (3)))
{var inst_16143 = (state_16155[(8)]);var inst_16146 = alert(inst_16143);var state_16155__$1 = state_16155;var statearr_16356_16490 = state_16155__$1;(statearr_16356_16490[(2)] = inst_16146);
(statearr_16356_16490[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16156 === (2)))
{var inst_16143 = (state_16155[(8)]);var inst_16142 = (state_16155[(2)]);var inst_16143__$1 = cljs.core.nth.call(null,inst_16142,(0),null);var inst_16144 = cljs.core.nth.call(null,inst_16142,(1),null);var state_16155__$1 = (function (){var statearr_16357 = state_16155;(statearr_16357[(8)] = inst_16143__$1);
(statearr_16357[(7)] = inst_16144);
return statearr_16357;
})();if(cljs.core.truth_(inst_16143__$1))
{var statearr_16358_16491 = state_16155__$1;(statearr_16358_16491[(1)] = (3));
} else
{var statearr_16359_16492 = state_16155__$1;(statearr_16359_16492[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16156 === (1)))
{var inst_16140 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_16155__$1 = state_16155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16155__$1,(2),inst_16140);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,ctx,expr__16003,pred__16002,map__16025,v,G__15973,pred__16034,expr__16035,map__15987,c__6203__auto____$1,params,cnt,ch,map__15974,vec__15995,inst_15999,inst_16033,inst_15993,inst_15985,inst_16032,inst_15983,inst_15994,inst_16001,inst_16000,inst_16031,inst_16157,state_val_16262,c__6203__auto___16411,draw,onSystem,onView))
;return ((function (switch__6188__auto__,cmd,input,ctx,expr__16003,pred__16002,map__16025,v,G__15973,pred__16034,expr__16035,map__15987,c__6203__auto____$1,params,cnt,ch,map__15974,vec__15995,inst_15999,inst_16033,inst_15993,inst_15985,inst_16032,inst_15983,inst_15994,inst_16001,inst_16000,inst_16031,inst_16157,state_val_16262,c__6203__auto___16411,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16363 = [null,null,null,null,null,null,null,null,null];(statearr_16363[(0)] = state_machine__6189__auto__);
(statearr_16363[(1)] = (1));
return statearr_16363;
});
var state_machine__6189__auto____1 = (function (state_16155){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16155);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16364){if((e16364 instanceof Object))
{var ex__6192__auto__ = e16364;var statearr_16365_16493 = state_16155;(statearr_16365_16493[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16494 = state_16155;
state_16155 = G__16494;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16155){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,cmd,input,ctx,expr__16003,pred__16002,map__16025,v,G__15973,pred__16034,expr__16035,map__15987,c__6203__auto____$1,params,cnt,ch,map__15974,vec__15995,inst_15999,inst_16033,inst_15993,inst_15985,inst_16032,inst_15983,inst_15994,inst_16001,inst_16000,inst_16031,inst_16157,state_val_16262,c__6203__auto___16411,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_16366 = f__6204__auto__.call(null);(statearr_16366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_16366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(cmd,input,ctx,expr__16003,pred__16002,map__16025,v,G__15973,pred__16034,expr__16035,map__15987,c__6203__auto____$1,params,cnt,ch,map__15974,vec__15995,inst_15999,inst_16033,inst_15993,inst_15985,inst_16032,inst_15983,inst_15994,inst_16001,inst_16000,inst_16031,inst_16157,state_val_16262,c__6203__auto___16411,draw,onSystem,onView))
})();var inst_16159 = cljs.core.async.impl.dispatch.run.call(null,inst_16158);var state_16261__$1 = (function (){var statearr_16367 = state_16261;(statearr_16367[(32)] = inst_16159);
return statearr_16367;
})();var statearr_16368_16495 = state_16261__$1;(statearr_16368_16495[(2)] = inst_15993);
(statearr_16368_16495[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (26)))
{var inst_15993 = (state_16261[(11)]);var inst_16047 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16048 = test.stock4.obv.call(null,inst_16047);var inst_16049 = cljs.core.count.call(null,inst_16047);var inst_16050 = cljs.core.take.call(null,inst_16049,inst_16048);var inst_16051 = cljs.core.pr_str.call(null,inst_16050);var inst_16052 = console.log(inst_16051);var state_16261__$1 = (function (){var statearr_16369 = state_16261;(statearr_16369[(33)] = inst_16052);
return statearr_16369;
})();var statearr_16370_16496 = state_16261__$1;(statearr_16370_16496[(2)] = inst_15993);
(statearr_16370_16496[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (16)))
{var inst_16021 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16371_16497 = state_16261__$1;(statearr_16371_16497[(2)] = inst_16021);
(statearr_16371_16497[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (38)))
{var inst_16033 = (state_16261[(10)]);var inst_15993 = (state_16261[(11)]);var inst_16085 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16086 = test.stock4.sd.call(null,inst_16033,inst_16085);var inst_16087 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16088 = test.stock4.z_score.call(null,inst_16033,inst_16087);var inst_16089 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_15993);var inst_16090 = cljs.core.count.call(null,inst_16089);var inst_16091 = cljs.core.take.call(null,inst_16090,inst_16086);var inst_16092 = cljs.core.assoc.call(null,inst_15993,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_16091);var inst_16093 = draw.call(null,inst_16092);var state_16261__$1 = (function (){var statearr_16372 = state_16261;(statearr_16372[(34)] = inst_16088);
return statearr_16372;
})();var statearr_16373_16498 = state_16261__$1;(statearr_16373_16498[(2)] = inst_16093);
(statearr_16373_16498[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (30)))
{var inst_16032 = (state_16261[(18)]);var inst_16062 = cljs.core._EQ_.call(null,"yu-pre",inst_16032);var state_16261__$1 = state_16261;if(inst_16062)
{var statearr_16374_16499 = state_16261__$1;(statearr_16374_16499[(1)] = (32));
} else
{var statearr_16375_16500 = state_16261__$1;(statearr_16375_16500[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (73)))
{var inst_16200 = (state_16261[(9)]);var inst_16204 = cljs.core.chunk_first.call(null,inst_16200);var inst_16205 = cljs.core.chunk_rest.call(null,inst_16200);var inst_16206 = cljs.core.count.call(null,inst_16204);var inst_16186 = inst_16205;var inst_16187 = inst_16204;var inst_16188 = inst_16206;var inst_16189 = (0);var state_16261__$1 = (function (){var statearr_16376 = state_16261;(statearr_16376[(12)] = inst_16186);
(statearr_16376[(13)] = inst_16187);
(statearr_16376[(7)] = inst_16188);
(statearr_16376[(8)] = inst_16189);
return statearr_16376;
})();var statearr_16377_16501 = state_16261__$1;(statearr_16377_16501[(2)] = null);
(statearr_16377_16501[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (10)))
{var inst_15999 = (state_16261[(31)]);var inst_16001 = (state_16261[(27)]);var inst_15999__$1 = (state_16261[(2)]);var inst_16000 = cljs.core.nth.call(null,inst_15999__$1,(0),null);var inst_16001__$1 = cljs.core.nth.call(null,inst_15999__$1,(1),null);var inst_16005 = cljs.core._EQ_.call(null,onSystem,inst_16001__$1);var state_16261__$1 = (function (){var statearr_16378 = state_16261;(statearr_16378[(31)] = inst_15999__$1);
(statearr_16378[(27)] = inst_16001__$1);
(statearr_16378[(17)] = inst_16000);
return statearr_16378;
})();if(inst_16005)
{var statearr_16379_16502 = state_16261__$1;(statearr_16379_16502[(1)] = (11));
} else
{var statearr_16380_16503 = state_16261__$1;(statearr_16380_16503[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (18)))
{var inst_15993 = (state_16261[(11)]);var state_16261__$1 = state_16261;var statearr_16384_16504 = state_16261__$1;(statearr_16384_16504[(2)] = inst_15993);
(statearr_16384_16504[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (52)))
{var inst_16233 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16385_16505 = state_16261__$1;(statearr_16385_16505[(2)] = inst_16233);
(statearr_16385_16505[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (67)))
{var inst_16186 = (state_16261[(12)]);var inst_16187 = (state_16261[(13)]);var inst_16188 = (state_16261[(7)]);var inst_16189 = (state_16261[(8)]);var inst_16194 = cljs.core._nth.call(null,inst_16187,inst_16189);var inst_16195 = cljs.core.pr_str.call(null,inst_16194);var inst_16196 = console.log(inst_16195);var inst_16197 = (inst_16189 + (1));var tmp16381 = inst_16186;var tmp16382 = inst_16187;var tmp16383 = inst_16188;var inst_16186__$1 = tmp16381;var inst_16187__$1 = tmp16382;var inst_16188__$1 = tmp16383;var inst_16189__$1 = inst_16197;var state_16261__$1 = (function (){var statearr_16386 = state_16261;(statearr_16386[(12)] = inst_16186__$1);
(statearr_16386[(13)] = inst_16187__$1);
(statearr_16386[(7)] = inst_16188__$1);
(statearr_16386[(35)] = inst_16196);
(statearr_16386[(8)] = inst_16189__$1);
return statearr_16386;
})();var statearr_16387_16506 = state_16261__$1;(statearr_16387_16506[(2)] = null);
(statearr_16387_16506[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (71)))
{var state_16261__$1 = state_16261;var statearr_16388_16507 = state_16261__$1;(statearr_16388_16507[(2)] = null);
(statearr_16388_16507[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (42)))
{var inst_16032 = (state_16261[(18)]);var inst_16103 = cljs.core._EQ_.call(null,"ema",inst_16032);var state_16261__$1 = state_16261;if(inst_16103)
{var statearr_16389_16508 = state_16261__$1;(statearr_16389_16508[(1)] = (44));
} else
{var statearr_16390_16509 = state_16261__$1;(statearr_16390_16509[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (37)))
{var inst_16243 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16391_16510 = state_16261__$1;(statearr_16391_16510[(2)] = inst_16243);
(statearr_16391_16510[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (63)))
{var inst_15993 = (state_16261[(11)]);var state_16261__$1 = state_16261;var statearr_16392_16511 = state_16261__$1;(statearr_16392_16511[(2)] = inst_15993);
(statearr_16392_16511[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (8)))
{var inst_15985 = (state_16261[(15)]);var state_16261__$1 = state_16261;var statearr_16393_16512 = state_16261__$1;(statearr_16393_16512[(2)] = inst_15985);
(statearr_16393_16512[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16262 === (49)))
{var inst_16235 = (state_16261[(2)]);var state_16261__$1 = state_16261;var statearr_16394_16513 = state_16261__$1;(statearr_16394_16513[(2)] = inst_16235);
(statearr_16394_16513[(1)] = (46));
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
});})(c__6203__auto___16411,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto___16411,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16398[(0)] = state_machine__6189__auto__);
(statearr_16398[(1)] = (1));
return statearr_16398;
});
var state_machine__6189__auto____1 = (function (state_16261){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16399){if((e16399 instanceof Object))
{var ex__6192__auto__ = e16399;var statearr_16400_16514 = state_16261;(statearr_16400_16514[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16515 = state_16261;
state_16261 = G__16515;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16261){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___16411,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_16401 = f__6204__auto__.call(null);(statearr_16401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___16411);
return statearr_16401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___16411,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
