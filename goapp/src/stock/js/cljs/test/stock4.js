// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__12836_SHARP_){return cljs.core.nth.call(null,p1__12836_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__12837_SHARP_){return cljs.core.nth.call(null,p1__12837_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_yu = (function draw_yu(ctx,w,h,kline,yu){var vec__12845 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__12845,(0),null);var min_v = cljs.core.nth.call(null,vec__12845,(1),null);var offset_v = cljs.core.nth.call(null,vec__12845,(2),null);var offset_x = cljs.core.nth.call(null,vec__12845,(3),null);var pos_y = cljs.core.nth.call(null,vec__12845,(4),null);var yu_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,yu),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__12846_12852 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12845,max_v,min_v,offset_v,offset_x,pos_y,yu_values){
return (function() { 
var G__12856__delegate = function (args){return args;
};
var G__12856 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12856__delegate.call(this,args);};
G__12856.cljs$lang$maxFixedArity = 0;
G__12856.cljs$lang$applyTo = (function (arglist__12857){
var args = cljs.core.seq(arglist__12857);
return G__12856__delegate(args);
});
G__12856.cljs$core$IFn$_invoke$arity$variadic = G__12856__delegate;
return G__12856;
})()
;})(vec__12845,max_v,min_v,offset_v,offset_x,pos_y,yu_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,yu_values))),yu_values,cljs.core.rest.call(null,yu_values)));var chunk__12847_12853 = null;var count__12848_12854 = (0);var i__12849_12855 = (0);while(true){
if((i__12849_12855 < count__12848_12854))
{var vec__12850_12858 = cljs.core._nth.call(null,chunk__12847_12853,i__12849_12855);var idx_12859 = cljs.core.nth.call(null,vec__12850_12858,(0),null);var prev_12860 = cljs.core.nth.call(null,vec__12850_12858,(1),null);var curr_12861 = cljs.core.nth.call(null,vec__12850_12858,(2),null);if((typeof prev_12860 === 'number') && (typeof curr_12861 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_12859 * offset_x),(((1) - prev_12860) * h));
ctx.lineTo(((idx_12859 + (1)) * offset_x),(((1) - curr_12861) * h));
ctx.stroke();
} else
{}
{
var G__12862 = seq__12846_12852;
var G__12863 = chunk__12847_12853;
var G__12864 = count__12848_12854;
var G__12865 = (i__12849_12855 + (1));
seq__12846_12852 = G__12862;
chunk__12847_12853 = G__12863;
count__12848_12854 = G__12864;
i__12849_12855 = G__12865;
continue;
}
} else
{var temp__4126__auto___12866 = cljs.core.seq.call(null,seq__12846_12852);if(temp__4126__auto___12866)
{var seq__12846_12867__$1 = temp__4126__auto___12866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12846_12867__$1))
{var c__4307__auto___12868 = cljs.core.chunk_first.call(null,seq__12846_12867__$1);{
var G__12869 = cljs.core.chunk_rest.call(null,seq__12846_12867__$1);
var G__12870 = c__4307__auto___12868;
var G__12871 = cljs.core.count.call(null,c__4307__auto___12868);
var G__12872 = (0);
seq__12846_12852 = G__12869;
chunk__12847_12853 = G__12870;
count__12848_12854 = G__12871;
i__12849_12855 = G__12872;
continue;
}
} else
{var vec__12851_12873 = cljs.core.first.call(null,seq__12846_12867__$1);var idx_12874 = cljs.core.nth.call(null,vec__12851_12873,(0),null);var prev_12875 = cljs.core.nth.call(null,vec__12851_12873,(1),null);var curr_12876 = cljs.core.nth.call(null,vec__12851_12873,(2),null);if((typeof prev_12875 === 'number') && (typeof curr_12876 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_12874 * offset_x),(((1) - prev_12875) * h));
ctx.lineTo(((idx_12874 + (1)) * offset_x),(((1) - curr_12876) * h));
ctx.stroke();
} else
{}
{
var G__12877 = cljs.core.next.call(null,seq__12846_12867__$1);
var G__12878 = null;
var G__12879 = (0);
var G__12880 = (0);
seq__12846_12852 = G__12877;
chunk__12847_12853 = G__12878;
count__12848_12854 = G__12879;
i__12849_12855 = G__12880;
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
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__12892 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__12892,(0),null);var min_v = cljs.core.nth.call(null,vec__12892,(1),null);var offset_v = cljs.core.nth.call(null,vec__12892,(2),null);var offset_x = cljs.core.nth.call(null,vec__12892,(3),null);var pos_y = cljs.core.nth.call(null,vec__12892,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__12893_12903 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12892,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__12907__delegate = function (args){return args;
};
var G__12907 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12907__delegate.call(this,args);};
G__12907.cljs$lang$maxFixedArity = 0;
G__12907.cljs$lang$applyTo = (function (arglist__12908){
var args = cljs.core.seq(arglist__12908);
return G__12907__delegate(args);
});
G__12907.cljs$core$IFn$_invoke$arity$variadic = G__12907__delegate;
return G__12907;
})()
;})(vec__12892,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__12894_12904 = null;var count__12895_12905 = (0);var i__12896_12906 = (0);while(true){
if((i__12896_12906 < count__12895_12905))
{var vec__12897_12909 = cljs.core._nth.call(null,chunk__12894_12904,i__12896_12906);var idx_12910 = cljs.core.nth.call(null,vec__12897_12909,(0),null);var vec__12898_12911 = cljs.core.nth.call(null,vec__12897_12909,(1),null);var avg_12912 = cljs.core.nth.call(null,vec__12898_12911,(0),null);var sd_v_12913 = cljs.core.nth.call(null,vec__12898_12911,(1),null);var vec__12899_12914 = cljs.core.nth.call(null,vec__12897_12909,(2),null);var __12915 = cljs.core.nth.call(null,vec__12899_12914,(0),null);var __12916__$1 = cljs.core.nth.call(null,vec__12899_12914,(1),null);var __12917__$2 = cljs.core.nth.call(null,vec__12899_12914,(2),null);var __12918__$3 = cljs.core.nth.call(null,vec__12899_12914,(3),null);var close_12919 = cljs.core.nth.call(null,vec__12899_12914,(4),null);var __12920__$4 = cljs.core.nth.call(null,vec__12899_12914,(5),null);(ctx["strokeStyle"] = (((avg_12912 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_12910 * offset_x),pos_y.call(null,(avg_12912 + close_12919)));
ctx.lineTo(((idx_12910 + (1)) * offset_x),pos_y.call(null,(avg_12912 + close_12919)));
ctx.stroke();
ctx.moveTo((idx_12910 * offset_x),pos_y.call(null,(((avg_12912 + close_12919) + sd_v_12913) + sd_v_12913)));
ctx.lineTo(((idx_12910 + (1)) * offset_x),pos_y.call(null,(((avg_12912 + close_12919) + sd_v_12913) + sd_v_12913)));
ctx.stroke();
ctx.moveTo((idx_12910 * offset_x),pos_y.call(null,(((avg_12912 + close_12919) - sd_v_12913) - sd_v_12913)));
ctx.lineTo(((idx_12910 + (1)) * offset_x),pos_y.call(null,(((avg_12912 + close_12919) - sd_v_12913) - sd_v_12913)));
ctx.stroke();
{
var G__12921 = seq__12893_12903;
var G__12922 = chunk__12894_12904;
var G__12923 = count__12895_12905;
var G__12924 = (i__12896_12906 + (1));
seq__12893_12903 = G__12921;
chunk__12894_12904 = G__12922;
count__12895_12905 = G__12923;
i__12896_12906 = G__12924;
continue;
}
} else
{var temp__4126__auto___12925 = cljs.core.seq.call(null,seq__12893_12903);if(temp__4126__auto___12925)
{var seq__12893_12926__$1 = temp__4126__auto___12925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12893_12926__$1))
{var c__4307__auto___12927 = cljs.core.chunk_first.call(null,seq__12893_12926__$1);{
var G__12928 = cljs.core.chunk_rest.call(null,seq__12893_12926__$1);
var G__12929 = c__4307__auto___12927;
var G__12930 = cljs.core.count.call(null,c__4307__auto___12927);
var G__12931 = (0);
seq__12893_12903 = G__12928;
chunk__12894_12904 = G__12929;
count__12895_12905 = G__12930;
i__12896_12906 = G__12931;
continue;
}
} else
{var vec__12900_12932 = cljs.core.first.call(null,seq__12893_12926__$1);var idx_12933 = cljs.core.nth.call(null,vec__12900_12932,(0),null);var vec__12901_12934 = cljs.core.nth.call(null,vec__12900_12932,(1),null);var avg_12935 = cljs.core.nth.call(null,vec__12901_12934,(0),null);var sd_v_12936 = cljs.core.nth.call(null,vec__12901_12934,(1),null);var vec__12902_12937 = cljs.core.nth.call(null,vec__12900_12932,(2),null);var __12938 = cljs.core.nth.call(null,vec__12902_12937,(0),null);var __12939__$1 = cljs.core.nth.call(null,vec__12902_12937,(1),null);var __12940__$2 = cljs.core.nth.call(null,vec__12902_12937,(2),null);var __12941__$3 = cljs.core.nth.call(null,vec__12902_12937,(3),null);var close_12942 = cljs.core.nth.call(null,vec__12902_12937,(4),null);var __12943__$4 = cljs.core.nth.call(null,vec__12902_12937,(5),null);(ctx["strokeStyle"] = (((avg_12935 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null)));
ctx.beginPath();
ctx.moveTo((idx_12933 * offset_x),pos_y.call(null,(avg_12935 + close_12942)));
ctx.lineTo(((idx_12933 + (1)) * offset_x),pos_y.call(null,(avg_12935 + close_12942)));
ctx.stroke();
ctx.moveTo((idx_12933 * offset_x),pos_y.call(null,(((avg_12935 + close_12942) + sd_v_12936) + sd_v_12936)));
ctx.lineTo(((idx_12933 + (1)) * offset_x),pos_y.call(null,(((avg_12935 + close_12942) + sd_v_12936) + sd_v_12936)));
ctx.stroke();
ctx.moveTo((idx_12933 * offset_x),pos_y.call(null,(((avg_12935 + close_12942) - sd_v_12936) - sd_v_12936)));
ctx.lineTo(((idx_12933 + (1)) * offset_x),pos_y.call(null,(((avg_12935 + close_12942) - sd_v_12936) - sd_v_12936)));
ctx.stroke();
{
var G__12944 = cljs.core.next.call(null,seq__12893_12926__$1);
var G__12945 = null;
var G__12946 = (0);
var G__12947 = (0);
seq__12893_12903 = G__12944;
chunk__12894_12904 = G__12945;
count__12895_12905 = G__12946;
i__12896_12906 = G__12947;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__12955 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__12955,(0),null);var min_v = cljs.core.nth.call(null,vec__12955,(1),null);var offset_v = cljs.core.nth.call(null,vec__12955,(2),null);var offset_x = cljs.core.nth.call(null,vec__12955,(3),null);var pos_y = cljs.core.nth.call(null,vec__12955,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__12956_12962 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__12955,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__12966__delegate = function (args){return args;
};
var G__12966 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12966__delegate.call(this,args);};
G__12966.cljs$lang$maxFixedArity = 0;
G__12966.cljs$lang$applyTo = (function (arglist__12967){
var args = cljs.core.seq(arglist__12967);
return G__12966__delegate(args);
});
G__12966.cljs$core$IFn$_invoke$arity$variadic = G__12966__delegate;
return G__12966;
})()
;})(vec__12955,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__12957_12963 = null;var count__12958_12964 = (0);var i__12959_12965 = (0);while(true){
if((i__12959_12965 < count__12958_12964))
{var vec__12960_12968 = cljs.core._nth.call(null,chunk__12957_12963,i__12959_12965);var idx_12969 = cljs.core.nth.call(null,vec__12960_12968,(0),null);var prev_12970 = cljs.core.nth.call(null,vec__12960_12968,(1),null);var curr_12971 = cljs.core.nth.call(null,vec__12960_12968,(2),null);if((typeof prev_12970 === 'number') && (typeof curr_12971 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_12969 * offset_x),pos_y.call(null,prev_12970));
ctx.lineTo(((idx_12969 + (1)) * offset_x),pos_y.call(null,curr_12971));
ctx.stroke();
} else
{}
{
var G__12972 = seq__12956_12962;
var G__12973 = chunk__12957_12963;
var G__12974 = count__12958_12964;
var G__12975 = (i__12959_12965 + (1));
seq__12956_12962 = G__12972;
chunk__12957_12963 = G__12973;
count__12958_12964 = G__12974;
i__12959_12965 = G__12975;
continue;
}
} else
{var temp__4126__auto___12976 = cljs.core.seq.call(null,seq__12956_12962);if(temp__4126__auto___12976)
{var seq__12956_12977__$1 = temp__4126__auto___12976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12956_12977__$1))
{var c__4307__auto___12978 = cljs.core.chunk_first.call(null,seq__12956_12977__$1);{
var G__12979 = cljs.core.chunk_rest.call(null,seq__12956_12977__$1);
var G__12980 = c__4307__auto___12978;
var G__12981 = cljs.core.count.call(null,c__4307__auto___12978);
var G__12982 = (0);
seq__12956_12962 = G__12979;
chunk__12957_12963 = G__12980;
count__12958_12964 = G__12981;
i__12959_12965 = G__12982;
continue;
}
} else
{var vec__12961_12983 = cljs.core.first.call(null,seq__12956_12977__$1);var idx_12984 = cljs.core.nth.call(null,vec__12961_12983,(0),null);var prev_12985 = cljs.core.nth.call(null,vec__12961_12983,(1),null);var curr_12986 = cljs.core.nth.call(null,vec__12961_12983,(2),null);if((typeof prev_12985 === 'number') && (typeof curr_12986 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_12984 * offset_x),pos_y.call(null,prev_12985));
ctx.lineTo(((idx_12984 + (1)) * offset_x),pos_y.call(null,curr_12986));
ctx.stroke();
} else
{}
{
var G__12987 = cljs.core.next.call(null,seq__12956_12977__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12956_12962 = G__12987;
chunk__12957_12963 = G__12988;
count__12958_12964 = G__12989;
i__12959_12965 = G__12990;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__12991){var vec__13006 = p__12991;var rsv = cljs.core.nth.call(null,vec__13006,(0),null);var k = cljs.core.nth.call(null,vec__13006,(1),null);var d = cljs.core.nth.call(null,vec__13006,(2),null);var kd = vec__13006;var vec__13007 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__13007,(0),null);var min_v = cljs.core.nth.call(null,vec__13007,(1),null);var offset_v = cljs.core.nth.call(null,vec__13007,(2),null);var offset_x = cljs.core.nth.call(null,vec__13007,(3),null);var pos_y = cljs.core.nth.call(null,vec__13007,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__13008_13020 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__13007,max_v,min_v,offset_v,offset_x,pos_y,vec__13006,rsv,k,d,kd){
return (function() { 
var G__13024__delegate = function (args){return args;
};
var G__13024 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13024__delegate.call(this,args);};
G__13024.cljs$lang$maxFixedArity = 0;
G__13024.cljs$lang$applyTo = (function (arglist__13025){
var args = cljs.core.seq(arglist__13025);
return G__13024__delegate(args);
});
G__13024.cljs$core$IFn$_invoke$arity$variadic = G__13024__delegate;
return G__13024;
})()
;})(vec__13007,max_v,min_v,offset_v,offset_x,pos_y,vec__13006,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__13009_13021 = null;var count__13010_13022 = (0);var i__13011_13023 = (0);while(true){
if((i__13011_13023 < count__13010_13022))
{var vec__13012_13026 = cljs.core._nth.call(null,chunk__13009_13021,i__13011_13023);var idx_13027 = cljs.core.nth.call(null,vec__13012_13026,(0),null);var prev_13028 = cljs.core.nth.call(null,vec__13012_13026,(1),null);var curr_13029 = cljs.core.nth.call(null,vec__13012_13026,(2),null);ctx.beginPath();
ctx.moveTo((idx_13027 * offset_x),(((1) - (prev_13028 / (100))) * h));
ctx.lineTo(((idx_13027 + (1)) * offset_x),(((1) - (curr_13029 / (100))) * h));
ctx.stroke();
{
var G__13030 = seq__13008_13020;
var G__13031 = chunk__13009_13021;
var G__13032 = count__13010_13022;
var G__13033 = (i__13011_13023 + (1));
seq__13008_13020 = G__13030;
chunk__13009_13021 = G__13031;
count__13010_13022 = G__13032;
i__13011_13023 = G__13033;
continue;
}
} else
{var temp__4126__auto___13034 = cljs.core.seq.call(null,seq__13008_13020);if(temp__4126__auto___13034)
{var seq__13008_13035__$1 = temp__4126__auto___13034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13008_13035__$1))
{var c__4307__auto___13036 = cljs.core.chunk_first.call(null,seq__13008_13035__$1);{
var G__13037 = cljs.core.chunk_rest.call(null,seq__13008_13035__$1);
var G__13038 = c__4307__auto___13036;
var G__13039 = cljs.core.count.call(null,c__4307__auto___13036);
var G__13040 = (0);
seq__13008_13020 = G__13037;
chunk__13009_13021 = G__13038;
count__13010_13022 = G__13039;
i__13011_13023 = G__13040;
continue;
}
} else
{var vec__13013_13041 = cljs.core.first.call(null,seq__13008_13035__$1);var idx_13042 = cljs.core.nth.call(null,vec__13013_13041,(0),null);var prev_13043 = cljs.core.nth.call(null,vec__13013_13041,(1),null);var curr_13044 = cljs.core.nth.call(null,vec__13013_13041,(2),null);ctx.beginPath();
ctx.moveTo((idx_13042 * offset_x),(((1) - (prev_13043 / (100))) * h));
ctx.lineTo(((idx_13042 + (1)) * offset_x),(((1) - (curr_13044 / (100))) * h));
ctx.stroke();
{
var G__13045 = cljs.core.next.call(null,seq__13008_13035__$1);
var G__13046 = null;
var G__13047 = (0);
var G__13048 = (0);
seq__13008_13020 = G__13045;
chunk__13009_13021 = G__13046;
count__13010_13022 = G__13047;
i__13011_13023 = G__13048;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__13014_13049 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__13007,max_v,min_v,offset_v,offset_x,pos_y,vec__13006,rsv,k,d,kd){
return (function() { 
var G__13053__delegate = function (args){return args;
};
var G__13053 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13053__delegate.call(this,args);};
G__13053.cljs$lang$maxFixedArity = 0;
G__13053.cljs$lang$applyTo = (function (arglist__13054){
var args = cljs.core.seq(arglist__13054);
return G__13053__delegate(args);
});
G__13053.cljs$core$IFn$_invoke$arity$variadic = G__13053__delegate;
return G__13053;
})()
;})(vec__13007,max_v,min_v,offset_v,offset_x,pos_y,vec__13006,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__13015_13050 = null;var count__13016_13051 = (0);var i__13017_13052 = (0);while(true){
if((i__13017_13052 < count__13016_13051))
{var vec__13018_13055 = cljs.core._nth.call(null,chunk__13015_13050,i__13017_13052);var idx_13056 = cljs.core.nth.call(null,vec__13018_13055,(0),null);var prev_13057 = cljs.core.nth.call(null,vec__13018_13055,(1),null);var curr_13058 = cljs.core.nth.call(null,vec__13018_13055,(2),null);ctx.beginPath();
ctx.moveTo((idx_13056 * offset_x),(((1) - (prev_13057 / (100))) * h));
ctx.lineTo(((idx_13056 + (1)) * offset_x),(((1) - (curr_13058 / (100))) * h));
ctx.stroke();
{
var G__13059 = seq__13014_13049;
var G__13060 = chunk__13015_13050;
var G__13061 = count__13016_13051;
var G__13062 = (i__13017_13052 + (1));
seq__13014_13049 = G__13059;
chunk__13015_13050 = G__13060;
count__13016_13051 = G__13061;
i__13017_13052 = G__13062;
continue;
}
} else
{var temp__4126__auto___13063 = cljs.core.seq.call(null,seq__13014_13049);if(temp__4126__auto___13063)
{var seq__13014_13064__$1 = temp__4126__auto___13063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13014_13064__$1))
{var c__4307__auto___13065 = cljs.core.chunk_first.call(null,seq__13014_13064__$1);{
var G__13066 = cljs.core.chunk_rest.call(null,seq__13014_13064__$1);
var G__13067 = c__4307__auto___13065;
var G__13068 = cljs.core.count.call(null,c__4307__auto___13065);
var G__13069 = (0);
seq__13014_13049 = G__13066;
chunk__13015_13050 = G__13067;
count__13016_13051 = G__13068;
i__13017_13052 = G__13069;
continue;
}
} else
{var vec__13019_13070 = cljs.core.first.call(null,seq__13014_13064__$1);var idx_13071 = cljs.core.nth.call(null,vec__13019_13070,(0),null);var prev_13072 = cljs.core.nth.call(null,vec__13019_13070,(1),null);var curr_13073 = cljs.core.nth.call(null,vec__13019_13070,(2),null);ctx.beginPath();
ctx.moveTo((idx_13071 * offset_x),(((1) - (prev_13072 / (100))) * h));
ctx.lineTo(((idx_13071 + (1)) * offset_x),(((1) - (curr_13073 / (100))) * h));
ctx.stroke();
{
var G__13074 = cljs.core.next.call(null,seq__13014_13064__$1);
var G__13075 = null;
var G__13076 = (0);
var G__13077 = (0);
seq__13014_13049 = G__13074;
chunk__13015_13050 = G__13075;
count__13016_13051 = G__13076;
i__13017_13052 = G__13077;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__13088 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__13088,(0),null);var min_v = cljs.core.nth.call(null,vec__13088,(1),null);var offset_v = cljs.core.nth.call(null,vec__13088,(2),null);var offset_x = cljs.core.nth.call(null,vec__13088,(3),null);var pos_y = cljs.core.nth.call(null,vec__13088,(4),null);(ctx["fillStyle"] = "black");
var seq__13089 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__13088,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__13097__delegate = function (args){return args;
};
var G__13097 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13097__delegate.call(this,args);};
G__13097.cljs$lang$maxFixedArity = 0;
G__13097.cljs$lang$applyTo = (function (arglist__13098){
var args = cljs.core.seq(arglist__13098);
return G__13097__delegate(args);
});
G__13097.cljs$core$IFn$_invoke$arity$variadic = G__13097__delegate;
return G__13097;
})()
;})(vec__13088,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__13090 = null;var count__13091 = (0);var i__13092 = (0);while(true){
if((i__13092 < count__13091))
{var vec__13093 = cljs.core._nth.call(null,chunk__13090,i__13092);var idx = cljs.core.nth.call(null,vec__13093,(0),null);var vec__13094 = cljs.core.nth.call(null,vec__13093,(1),null);var date = cljs.core.nth.call(null,vec__13094,(0),null);var _ = cljs.core.nthnext.call(null,vec__13094,(1));var line = vec__13094;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__13089,chunk__13090,count__13091,i__13092,vec__13093,idx,vec__13094,date,_,line,vec__13088,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__13078_SHARP_){return cljs.core._EQ_.call(null,date,p1__13078_SHARP_);
});})(seq__13089,chunk__13090,count__13091,i__13092,vec__13093,idx,vec__13094,date,_,line,vec__13088,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__13099 = seq__13089;
var G__13100 = chunk__13090;
var G__13101 = count__13091;
var G__13102 = (i__13092 + (1));
seq__13089 = G__13099;
chunk__13090 = G__13100;
count__13091 = G__13101;
i__13092 = G__13102;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13089);if(temp__4126__auto__)
{var seq__13089__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13089__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__13089__$1);{
var G__13103 = cljs.core.chunk_rest.call(null,seq__13089__$1);
var G__13104 = c__4307__auto__;
var G__13105 = cljs.core.count.call(null,c__4307__auto__);
var G__13106 = (0);
seq__13089 = G__13103;
chunk__13090 = G__13104;
count__13091 = G__13105;
i__13092 = G__13106;
continue;
}
} else
{var vec__13095 = cljs.core.first.call(null,seq__13089__$1);var idx = cljs.core.nth.call(null,vec__13095,(0),null);var vec__13096 = cljs.core.nth.call(null,vec__13095,(1),null);var date = cljs.core.nth.call(null,vec__13096,(0),null);var _ = cljs.core.nthnext.call(null,vec__13096,(1));var line = vec__13096;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__13089,chunk__13090,count__13091,i__13092,vec__13095,idx,vec__13096,date,_,line,seq__13089__$1,temp__4126__auto__,vec__13088,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__13078_SHARP_){return cljs.core._EQ_.call(null,date,p1__13078_SHARP_);
});})(seq__13089,chunk__13090,count__13091,i__13092,vec__13095,idx,vec__13096,date,_,line,seq__13089__$1,temp__4126__auto__,vec__13088,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__13107 = cljs.core.next.call(null,seq__13089__$1);
var G__13108 = null;
var G__13109 = (0);
var G__13110 = (0);
seq__13089 = G__13107;
chunk__13090 = G__13108;
count__13091 = G__13109;
i__13092 = G__13110;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__13120 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__13120,(0),null);var min_v = cljs.core.nth.call(null,vec__13120,(1),null);var offset_v = cljs.core.nth.call(null,vec__13120,(2),null);var offset_x = cljs.core.nth.call(null,vec__13120,(3),null);var pos_y = cljs.core.nth.call(null,vec__13120,(4),null);var seq__13121 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__13120,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__13129__delegate = function (args){return args;
};
var G__13129 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13129__delegate.call(this,args);};
G__13129.cljs$lang$maxFixedArity = 0;
G__13129.cljs$lang$applyTo = (function (arglist__13130){
var args = cljs.core.seq(arglist__13130);
return G__13129__delegate(args);
});
G__13129.cljs$core$IFn$_invoke$arity$variadic = G__13129__delegate;
return G__13129;
})()
;})(vec__13120,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__13122 = null;var count__13123 = (0);var i__13124 = (0);while(true){
if((i__13124 < count__13123))
{var vec__13125 = cljs.core._nth.call(null,chunk__13122,i__13124);var idx = cljs.core.nth.call(null,vec__13125,(0),null);var vec__13126 = cljs.core.nth.call(null,vec__13125,(1),null);var date = cljs.core.nth.call(null,vec__13126,(0),null);var open = cljs.core.nth.call(null,vec__13126,(1),null);var high = cljs.core.nth.call(null,vec__13126,(2),null);var low = cljs.core.nth.call(null,vec__13126,(3),null);var close = cljs.core.nth.call(null,vec__13126,(4),null);var volume = cljs.core.nth.call(null,vec__13126,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__13131 = seq__13121;
var G__13132 = chunk__13122;
var G__13133 = count__13123;
var G__13134 = (i__13124 + (1));
seq__13121 = G__13131;
chunk__13122 = G__13132;
count__13123 = G__13133;
i__13124 = G__13134;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13121);if(temp__4126__auto__)
{var seq__13121__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13121__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__13121__$1);{
var G__13135 = cljs.core.chunk_rest.call(null,seq__13121__$1);
var G__13136 = c__4307__auto__;
var G__13137 = cljs.core.count.call(null,c__4307__auto__);
var G__13138 = (0);
seq__13121 = G__13135;
chunk__13122 = G__13136;
count__13123 = G__13137;
i__13124 = G__13138;
continue;
}
} else
{var vec__13127 = cljs.core.first.call(null,seq__13121__$1);var idx = cljs.core.nth.call(null,vec__13127,(0),null);var vec__13128 = cljs.core.nth.call(null,vec__13127,(1),null);var date = cljs.core.nth.call(null,vec__13128,(0),null);var open = cljs.core.nth.call(null,vec__13128,(1),null);var high = cljs.core.nth.call(null,vec__13128,(2),null);var low = cljs.core.nth.call(null,vec__13128,(3),null);var close = cljs.core.nth.call(null,vec__13128,(4),null);var volume = cljs.core.nth.call(null,vec__13128,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__13139 = cljs.core.next.call(null,seq__13121__$1);
var G__13140 = null;
var G__13141 = (0);
var G__13142 = (0);
seq__13121 = G__13139;
chunk__13122 = G__13140;
count__13123 = G__13141;
i__13124 = G__13142;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__13146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__13146,(0),null);var h = cljs.core.nth.call(null,vec__13146,(1),null);return ((function (ctx,vec__13146,w,h){
return (function (p__13147){var map__13148 = p__13147;var map__13148__$1 = ((cljs.core.seq_QMARK_.call(null,map__13148))?cljs.core.apply.call(null,cljs.core.hash_map,map__13148):map__13148);var appctx = map__13148__$1;var bias = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));var avgs = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var kd = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var kline = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var yu = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"yu","yu",979062608));var sd = cljs.core.get.call(null,map__13148__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));(ctx["fillStyle"] = "gray");
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
;})(ctx,vec__13146,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj13186 = {"url":"/proxy","dataType":"text","data":(function (){var obj13188 = {"url":url};return obj13188;
})(),"success":((function (ret){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_13195){var state_val_13196 = (state_13195[(1)]);if((state_val_13196 === (2)))
{var inst_13192 = (state_13195[(2)]);var inst_13193 = cljs.core.async.close_BANG_.call(null,ret);var state_13195__$1 = (function (){var statearr_13197 = state_13195;(statearr_13197[(7)] = inst_13192);
return statearr_13197;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13195__$1,inst_13193);
} else
{if((state_val_13196 === (1)))
{var inst_13189 = [null,data];var inst_13190 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13189,null));var state_13195__$1 = state_13195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13195__$1,(2),ret,inst_13190);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13201 = [null,null,null,null,null,null,null,null];(statearr_13201[(0)] = state_machine__6189__auto__);
(statearr_13201[(1)] = (1));
return statearr_13201;
});
var state_machine__6189__auto____1 = (function (state_13195){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13202){if((e13202 instanceof Object))
{var ex__6192__auto__ = e13202;var statearr_13203_13221 = state_13195;(statearr_13203_13221[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13222 = state_13195;
state_13195 = G__13222;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13195){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_13204 = f__6204__auto__.call(null);(statearr_13204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_13211){var state_val_13212 = (state_13211[(1)]);if((state_val_13212 === (2)))
{var inst_13208 = (state_13211[(2)]);var inst_13209 = cljs.core.async.close_BANG_.call(null,ret);var state_13211__$1 = (function (){var statearr_13213 = state_13211;(statearr_13213[(7)] = inst_13208);
return statearr_13213;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13211__$1,inst_13209);
} else
{if((state_val_13212 === (1)))
{var inst_13205 = [err];var inst_13206 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13205,null));var state_13211__$1 = state_13211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13211__$1,(2),ret,inst_13206);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13217 = [null,null,null,null,null,null,null,null];(statearr_13217[(0)] = state_machine__6189__auto__);
(statearr_13217[(1)] = (1));
return statearr_13217;
});
var state_machine__6189__auto____1 = (function (state_13211){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13211);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13218){if((e13218 instanceof Object))
{var ex__6192__auto__ = e13218;var statearr_13219_13223 = state_13211;(statearr_13219_13223[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13224 = state_13211;
state_13211 = G__13224;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13211){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_13220 = f__6204__auto__.call(null);(statearr_13220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj13186;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__13233(s__13234){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__13234__$1 = s__13234;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13234__$1);if(temp__4126__auto__)
{var s__13234__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13234__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__13234__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__13236 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__13235 = (0);while(true){
if((i__13235 < size__4275__auto__))
{var vec__13239 = cljs.core._nth.call(null,c__4274__auto__,i__13235);var _ = cljs.core.nth.call(null,vec__13239,(0),null);var date = cljs.core.nth.call(null,vec__13239,(1),null);var open = cljs.core.nth.call(null,vec__13239,(2),null);var high = cljs.core.nth.call(null,vec__13239,(3),null);var low = cljs.core.nth.call(null,vec__13239,(4),null);var close = cljs.core.nth.call(null,vec__13239,(5),null);var volume = cljs.core.nth.call(null,vec__13239,(6),null);cljs.core.chunk_append.call(null,b__13236,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__13241 = (i__13235 + (1));
i__13235 = G__13241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13236),iter__13233.call(null,cljs.core.chunk_rest.call(null,s__13234__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13236),null);
}
} else
{var vec__13240 = cljs.core.first.call(null,s__13234__$2);var _ = cljs.core.nth.call(null,vec__13240,(0),null);var date = cljs.core.nth.call(null,vec__13240,(1),null);var open = cljs.core.nth.call(null,vec__13240,(2),null);var high = cljs.core.nth.call(null,vec__13240,(3),null);var low = cljs.core.nth.call(null,vec__13240,(4),null);var close = cljs.core.nth.call(null,vec__13240,(5),null);var volume = cljs.core.nth.call(null,vec__13240,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__13233.call(null,cljs.core.rest.call(null,s__13234__$2)));
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
return (function (state_13319){var state_val_13320 = (state_13319[(1)]);if((state_val_13320 === (9)))
{var inst_13309 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13321_13338 = state_13319__$1;(statearr_13321_13338[(2)] = inst_13309);
(statearr_13321_13338[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (8)))
{var inst_13315 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13322_13339 = state_13319__$1;(statearr_13322_13339[(2)] = inst_13315);
(statearr_13322_13339[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (7)))
{var inst_13301 = (state_13319[(7)]);var inst_13311 = cljs.core.concat.call(null,all,inst_13301);var inst_13312 = [null,inst_13311];var inst_13313 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13312,null));var state_13319__$1 = state_13319;var statearr_13323_13340 = state_13319__$1;(statearr_13323_13340[(2)] = inst_13313);
(statearr_13323_13340[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (6)))
{var inst_13301 = (state_13319[(7)]);var inst_13305 = cljs.core.concat.call(null,all,inst_13301);var inst_13306 = (start + num);var inst_13307 = stock_info.call(null,inst_13305,id,startdate,inst_13306,num);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13319__$1,(9),inst_13307);
} else
{if((state_val_13320 === (5)))
{var inst_13317 = (state_13319[(2)]);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13319__$1,inst_13317);
} else
{if((state_val_13320 === (4)))
{var inst_13301 = (state_13319[(7)]);var inst_13296 = (state_13319[(8)]);var inst_13301__$1 = test.stock4.parse_info.call(null,inst_13296);var inst_13302 = cljs.core.count.call(null,inst_13301__$1);var inst_13303 = cljs.core._EQ_.call(null,num,inst_13302);var state_13319__$1 = (function (){var statearr_13324 = state_13319;(statearr_13324[(7)] = inst_13301__$1);
return statearr_13324;
})();if(inst_13303)
{var statearr_13325_13341 = state_13319__$1;(statearr_13325_13341[(1)] = (6));
} else
{var statearr_13326_13342 = state_13319__$1;(statearr_13326_13342[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (3)))
{var inst_13295 = (state_13319[(9)]);var inst_13298 = [inst_13295];var inst_13299 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13298,null));var state_13319__$1 = state_13319;var statearr_13327_13343 = state_13319__$1;(statearr_13327_13343[(2)] = inst_13299);
(statearr_13327_13343[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (2)))
{var inst_13295 = (state_13319[(9)]);var inst_13294 = (state_13319[(2)]);var inst_13295__$1 = cljs.core.nth.call(null,inst_13294,(0),null);var inst_13296 = cljs.core.nth.call(null,inst_13294,(1),null);var state_13319__$1 = (function (){var statearr_13328 = state_13319;(statearr_13328[(8)] = inst_13296);
(statearr_13328[(9)] = inst_13295__$1);
return statearr_13328;
})();if(cljs.core.truth_(inst_13295__$1))
{var statearr_13329_13344 = state_13319__$1;(statearr_13329_13344[(1)] = (3));
} else
{var statearr_13330_13345 = state_13319__$1;(statearr_13330_13345[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (1)))
{var inst_13291 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_13292 = test.stock4.content.call(null,inst_13291);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13319__$1,(2),inst_13292);
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
var state_machine__6189__auto____0 = (function (){var statearr_13334 = [null,null,null,null,null,null,null,null,null,null];(statearr_13334[(0)] = state_machine__6189__auto__);
(statearr_13334[(1)] = (1));
return statearr_13334;
});
var state_machine__6189__auto____1 = (function (state_13319){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13335){if((e13335 instanceof Object))
{var ex__6192__auto__ = e13335;var statearr_13336_13346 = state_13319;(statearr_13336_13346[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13347 = state_13319;
state_13319 = G__13347;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13319){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13337 = f__6204__auto__.call(null);(statearr_13337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__13356 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__13356,(0),null);var open = cljs.core.nth.call(null,vec__13356,(1),null);var _ = cljs.core.nth.call(null,vec__13356,(2),null);var ___$1 = cljs.core.nth.call(null,vec__13356,(3),null);var ___$2 = cljs.core.nth.call(null,vec__13356,(4),null);var ___$3 = cljs.core.nth.call(null,vec__13356,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__13356,date,open,_,___$1,___$2,___$3){
return (function (p__13358){var vec__13359 = p__13358;var ___$4 = cljs.core.nth.call(null,vec__13359,(0),null);var ___$5 = cljs.core.nth.call(null,vec__13359,(1),null);var high = cljs.core.nth.call(null,vec__13359,(2),null);var ___$6 = cljs.core.nth.call(null,vec__13359,(3),null);var ___$7 = cljs.core.nth.call(null,vec__13359,(4),null);var ___$8 = cljs.core.nth.call(null,vec__13359,(5),null);return high;
});})(group,vec__13356,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__13356,date,open,_,___$1,___$2,___$3,high){
return (function (p__13360){var vec__13361 = p__13360;var ___$4 = cljs.core.nth.call(null,vec__13361,(0),null);var ___$5 = cljs.core.nth.call(null,vec__13361,(1),null);var ___$6 = cljs.core.nth.call(null,vec__13361,(2),null);var low = cljs.core.nth.call(null,vec__13361,(3),null);var ___$7 = cljs.core.nth.call(null,vec__13361,(4),null);var ___$8 = cljs.core.nth.call(null,vec__13361,(5),null);return low;
});})(group,vec__13356,date,open,_,___$1,___$2,___$3,high))
,group));var vec__13357 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__13357,(0),null);var ___$5 = cljs.core.nth.call(null,vec__13357,(1),null);var ___$6 = cljs.core.nth.call(null,vec__13357,(2),null);var ___$7 = cljs.core.nth.call(null,vec__13357,(3),null);var close = cljs.core.nth.call(null,vec__13357,(4),null);var ___$8 = cljs.core.nth.call(null,vec__13357,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__13356,date,open,_,___$1,___$2,___$3,high,low,vec__13357,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__13362){var vec__13363 = p__13362;var ___$9 = cljs.core.nth.call(null,vec__13363,(0),null);var ___$10 = cljs.core.nth.call(null,vec__13363,(1),null);var ___$11 = cljs.core.nth.call(null,vec__13363,(2),null);var ___$12 = cljs.core.nth.call(null,vec__13363,(3),null);var ___$13 = cljs.core.nth.call(null,vec__13363,(4),null);var volume = cljs.core.nth.call(null,vec__13363,(5),null);return volume;
});})(group,vec__13356,date,open,_,___$1,___$2,___$3,high,low,vec__13357,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__13356,date,open,_,___$1,___$2,___$3,high,low,vec__13357,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__13356,date,open,_,___$1,___$2,___$3,high,low,vec__13357,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__13367 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__13367,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13367,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13367,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13367,(3),null);var c1 = cljs.core.nth.call(null,vec__13367,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13367,(5),null);var l1 = vec__13367;var vec__13368 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__13368,(0),null);var ___$5 = cljs.core.nth.call(null,vec__13368,(1),null);var ___$6 = cljs.core.nth.call(null,vec__13368,(2),null);var ___$7 = cljs.core.nth.call(null,vec__13368,(3),null);var c2 = cljs.core.nth.call(null,vec__13368,(4),null);var ___$8 = cljs.core.nth.call(null,vec__13368,(5),null);var l2 = vec__13368;var vec__13369 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__13369,(0),null);var ___$10 = cljs.core.nth.call(null,vec__13369,(1),null);var ___$11 = cljs.core.nth.call(null,vec__13369,(2),null);var ___$12 = cljs.core.nth.call(null,vec__13369,(3),null);var c3 = cljs.core.nth.call(null,vec__13369,(4),null);var ___$13 = cljs.core.nth.call(null,vec__13369,(5),null);var l3 = vec__13369;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__13367,_,___$1,___$2,___$3,c1,___$4,l1,vec__13368,date,___$5,___$6,___$7,c2,___$8,l2,vec__13369,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__13367,_,___$1,___$2,___$3,c1,___$4,l1,vec__13368,date,___$5,___$6,___$7,c2,___$8,l2,vec__13369,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__13374){var vec__13375 = p__13374;var _ = cljs.core.nth.call(null,vec__13375,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13375,(1),null);var high = cljs.core.nth.call(null,vec__13375,(2),null);var low = cljs.core.nth.call(null,vec__13375,(3),null);var ___$2 = cljs.core.nth.call(null,vec__13375,(4),null);var ___$3 = cljs.core.nth.call(null,vec__13375,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__13373 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__13373,(0),null);var open = cljs.core.nth.call(null,vec__13373,(1),null);var high = cljs.core.nth.call(null,vec__13373,(2),null);var low = cljs.core.nth.call(null,vec__13373,(3),null);var close = cljs.core.nth.call(null,vec__13373,(4),null);var ___$1 = cljs.core.nth.call(null,vec__13373,(5),null);var curr = vec__13373;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__13373,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__13373,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__13378){var vec__13379 = p__13378;var _ = cljs.core.nth.call(null,vec__13379,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13379,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13379,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13379,(3),null);var close = cljs.core.nth.call(null,vec__13379,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13379,(5),null);return close;
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
return (function (p__13382){var vec__13383 = p__13382;var _ = cljs.core.nth.call(null,vec__13383,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13383,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13383,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13383,(3),null);var close = cljs.core.nth.call(null,vec__13383,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13383,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__13389 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__13389,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13389,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13389,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13389,(3),null);var close = cljs.core.nth.call(null,vec__13389,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13389,(5),null);var curr = vec__13389;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__13389,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__13390){var vec__13391 = p__13390;var vec__13392 = cljs.core.nth.call(null,vec__13391,(0),null);var ___$5 = cljs.core.nth.call(null,vec__13392,(0),null);var prev_ema = cljs.core.nth.call(null,vec__13392,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__13391,(1),null);var idx = cljs.core.nth.call(null,vec__13391,(2),null);var vec__13393 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__13393,(0),null);var ___$7 = cljs.core.nth.call(null,vec__13393,(1),null);var ___$8 = cljs.core.nth.call(null,vec__13393,(2),null);var ___$9 = cljs.core.nth.call(null,vec__13393,(3),null);var close__$1 = cljs.core.nth.call(null,vec__13393,(4),null);var ___$10 = cljs.core.nth.call(null,vec__13393,(5),null);var curr__$1 = vec__13393;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__13389,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__13399 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__13399,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13399,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13399,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13399,(3),null);var ct = cljs.core.nth.call(null,vec__13399,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13399,(5),null);var curr = vec__13399;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__13399,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__13400){var vec__13401 = p__13400;var ___$5 = cljs.core.nth.call(null,vec__13401,(0),null);var ___$6 = cljs.core.nth.call(null,vec__13401,(1),null);var ___$7 = cljs.core.nth.call(null,vec__13401,(2),null);var low = cljs.core.nth.call(null,vec__13401,(3),null);var ___$8 = cljs.core.nth.call(null,vec__13401,(4),null);var ___$9 = cljs.core.nth.call(null,vec__13401,(5),null);return low;
});})(group,vec__13399,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__13399,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__13402){var vec__13403 = p__13402;var ___$5 = cljs.core.nth.call(null,vec__13403,(0),null);var ___$6 = cljs.core.nth.call(null,vec__13403,(1),null);var high = cljs.core.nth.call(null,vec__13403,(2),null);var ___$7 = cljs.core.nth.call(null,vec__13403,(3),null);var ___$8 = cljs.core.nth.call(null,vec__13403,(4),null);var ___$9 = cljs.core.nth.call(null,vec__13403,(5),null);return high;
});})(group,vec__13399,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__13399,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__13399,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__13406){var vec__13407 = p__13406;var line = cljs.core.nth.call(null,vec__13407,(0),null);var v = cljs.core.nth.call(null,vec__13407,(1),null);return v;
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
return (function (p__13431){var vec__13432 = p__13431;var _ = cljs.core.nth.call(null,vec__13432,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13432,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13432,(2),null);var low = cljs.core.nth.call(null,vec__13432,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13432,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13432,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,low){
return (function (p__13433){var vec__13434 = p__13433;var vec__13435 = cljs.core.nth.call(null,vec__13434,(0),null);var _ = cljs.core.nth.call(null,vec__13435,(0),null);var value = cljs.core.nth.call(null,vec__13435,(1),null);var ori = cljs.core.nth.call(null,vec__13434,(1),null);var prev = cljs.core.nth.call(null,vec__13434,(2),null);var curr = cljs.core.nth.call(null,vec__13434,(3),null);var act = cljs.core.nth.call(null,vec__13434,(4),null);var af = cljs.core.nth.call(null,vec__13434,(5),null);var vec__13436 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__13436,(0),null);var ___$2 = cljs.core.nth.call(null,vec__13436,(1),null);var ph = cljs.core.nth.call(null,vec__13436,(2),null);var pl = cljs.core.nth.call(null,vec__13436,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13436,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13436,(5),null);var prev_line = vec__13436;var vec__13437 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__13437,(0),null);var ___$6 = cljs.core.nth.call(null,vec__13437,(1),null);var ch = cljs.core.nth.call(null,vec__13437,(2),null);var cl = cljs.core.nth.call(null,vec__13437,(3),null);var ___$7 = cljs.core.nth.call(null,vec__13437,(4),null);var ___$8 = cljs.core.nth.call(null,vec__13437,(5),null);var curr_line = vec__13437;var should_turn = (function (){var pred__13438 = cljs.core._EQ_;var expr__13439 = act;if(cljs.core.truth_(pred__13438.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__13439)))
{return (value > pl);
} else
{if(cljs.core.truth_(pred__13438.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__13439)))
{return (value < ph);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13439))));
}
}
})();var next_value = ((should_turn)?(function (){var pred__13441 = cljs.core._EQ_;var expr__13442 = act;if(cljs.core.truth_(pred__13441.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__13442)))
{return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (pred__13441,expr__13442,vec__13436,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__13437,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__13434,vec__13435,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__13444){var vec__13445 = p__13444;var ___$9 = cljs.core.nth.call(null,vec__13445,(0),null);var ___$10 = cljs.core.nth.call(null,vec__13445,(1),null);var high = cljs.core.nth.call(null,vec__13445,(2),null);var ___$11 = cljs.core.nth.call(null,vec__13445,(3),null);var ___$12 = cljs.core.nth.call(null,vec__13445,(4),null);var ___$13 = cljs.core.nth.call(null,vec__13445,(5),null);return high;
});})(pred__13441,expr__13442,vec__13436,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__13437,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__13434,vec__13435,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{if(cljs.core.truth_(pred__13441.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__13442)))
{return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (pred__13441,expr__13442,vec__13436,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__13437,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__13434,vec__13435,_,value,ori,prev,curr,act,af,first_line,low){
return (function (p__13446){var vec__13447 = p__13446;var ___$9 = cljs.core.nth.call(null,vec__13447,(0),null);var ___$10 = cljs.core.nth.call(null,vec__13447,(1),null);var ___$11 = cljs.core.nth.call(null,vec__13447,(2),null);var low__$1 = cljs.core.nth.call(null,vec__13447,(3),null);var ___$12 = cljs.core.nth.call(null,vec__13447,(4),null);var ___$13 = cljs.core.nth.call(null,vec__13447,(5),null);return low__$1;
});})(pred__13441,expr__13442,vec__13436,___$1,___$2,ph,pl,___$3,___$4,prev_line,vec__13437,___$5,___$6,ch,cl,___$7,___$8,curr_line,should_turn,vec__13434,vec__13435,_,value,ori,prev,curr,act,af,first_line,low))
,cljs.core.take.call(null,(3),ori)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13442))));
}
}
})():(value + (af * (pl - value))));var next_af = (function (){var pred__13448 = cljs.core._EQ_;var expr__13449 = act;if(cljs.core.truth_(pred__13448.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__13449)))
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
{if(cljs.core.truth_(pred__13448.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__13449)))
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
{if(cljs.core.truth_(pred__13448.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__13449)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13449))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__13451 = cljs.core._EQ_;var expr__13452 = act;if(cljs.core.truth_(pred__13451.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__13452)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__13451.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__13452)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13452))));
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
return (function (p1__13454_SHARP_){return Math.pow((p1__13454_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__13460 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__13460,(0),null);var vec__13461 = cljs.core.nth.call(null,vec__13460,(1),null);var avg = cljs.core.nth.call(null,vec__13461,(0),null);var sd_v = cljs.core.nth.call(null,vec__13461,(1),null);var currs = cljs.core.map.call(null,((function (vec__13460,_,vec__13461,avg,sd_v){
return (function (p__13462){var vec__13463 = p__13462;var ___$1 = cljs.core.nth.call(null,vec__13463,(0),null);var ___$2 = cljs.core.nth.call(null,vec__13463,(1),null);var ___$3 = cljs.core.nth.call(null,vec__13463,(2),null);var ___$4 = cljs.core.nth.call(null,vec__13463,(3),null);var close = cljs.core.nth.call(null,vec__13463,(4),null);var ___$5 = cljs.core.nth.call(null,vec__13463,(5),null);return close;
});})(vec__13460,_,vec__13461,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__13460,_,vec__13461,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__13460,_,vec__13461,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__13460,_,vec__13461,avg,sd_v,currs,offsets){
return (function (p1__13455_SHARP_){return (p1__13455_SHARP_ / sd_v);
});})(vec__13460,_,vec__13461,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__13460,_,vec__13461,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__13464__delegate = function (args){return args;
};
var G__13464 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13464__delegate.call(this,args);};
G__13464.cljs$lang$maxFixedArity = 0;
G__13464.cljs$lang$applyTo = (function (arglist__13465){
var args = cljs.core.seq(arglist__13465);
return G__13464__delegate(args);
});
G__13464.cljs$core$IFn$_invoke$arity$variadic = G__13464__delegate;
return G__13464;
})()
;})(vec__13460,_,vec__13461,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
/**
* 余氏指標
* w用0.001看多空動能
* w用0.5看振盪方向
*/
test.stock4.yu = (function yu(w,n,reverse_kline){var normal = (Math.pow(1.07,n) - (1));var up_seq = cljs.core.map.call(null,((function (normal){
return (function (p__13474,p__13475){var vec__13476 = p__13474;var _ = cljs.core.nth.call(null,vec__13476,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13476,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13476,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13476,(3),null);var pc = cljs.core.nth.call(null,vec__13476,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13476,(5),null);var vec__13477 = p__13475;var ___$5 = cljs.core.nth.call(null,vec__13477,(0),null);var ___$6 = cljs.core.nth.call(null,vec__13477,(1),null);var ___$7 = cljs.core.nth.call(null,vec__13477,(2),null);var ___$8 = cljs.core.nth.call(null,vec__13477,(3),null);var cc = cljs.core.nth.call(null,vec__13477,(4),null);var ___$9 = cljs.core.nth.call(null,vec__13477,(5),null);return (((cc - pc) / pc) / normal);
});})(normal))
,reverse_kline,cljs.core.rest.call(null,reverse_kline));var vs = cljs.core.map.call(null,((function (normal,up_seq){
return (function (p__13478){var vec__13479 = p__13478;var dir = cljs.core.nth.call(null,vec__13479,(0),null);var ran = cljs.core.nth.call(null,vec__13479,(1),null);return ran;
});})(normal,up_seq))
,cljs.core.reductions.call(null,((function (normal,up_seq){
return (function (p__13480,up_offset){var vec__13481 = p__13480;var prev = cljs.core.nth.call(null,vec__13481,(0),null);var ran = cljs.core.nth.call(null,vec__13481,(1),null);var max_v = (prev + (((up_offset > (0)))?ran:(ran / (2))));var min_v = (prev - (((up_offset < (0)))?ran:(ran / (2))));if(((max_v > up_offset)) && ((up_offset > min_v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_offset,(ran * 0.95)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((up_offset > max_v))?max_v:min_v),(ran + ((function (){var x__3858__auto__ = (up_offset - max_v);var y__3859__auto__ = (min_v - up_offset);return ((x__3858__auto__ > y__3859__auto__) ? x__3858__auto__ : y__3859__auto__);
})() * w))], null);
}
});})(normal,up_seq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,up_seq),normal], null),cljs.core.rest.call(null,up_seq)));return cljs.core.map.call(null,((function (normal,up_seq,vs){
return (function() { 
var G__13482__delegate = function (args){return cljs.core.apply.call(null,cljs.core.vector,args);
};
var G__13482 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13482__delegate.call(this,args);};
G__13482.cljs$lang$maxFixedArity = 0;
G__13482.cljs$lang$applyTo = (function (arglist__13483){
var args = cljs.core.seq(arglist__13483);
return G__13482__delegate(args);
});
G__13482.cljs$core$IFn$_invoke$arity$variadic = G__13482__delegate;
return G__13482;
})()
;})(normal,up_seq,vs))
,cljs.core.rest.call(null,reverse_kline),vs);
});
/**
* Volume Accumulation 成交量多空比率淨額法
* 用來計算OBV能量潮公式
*/
test.stock4.VolumeAccumulation = (function VolumeAccumulation(kline){return cljs.core.map.call(null,(function (p__13486){var vec__13487 = p__13486;var date = cljs.core.nth.call(null,vec__13487,(0),null);var open = cljs.core.nth.call(null,vec__13487,(1),null);var high = cljs.core.nth.call(null,vec__13487,(2),null);var low = cljs.core.nth.call(null,vec__13487,(3),null);var close = cljs.core.nth.call(null,vec__13487,(4),null);var volume = cljs.core.nth.call(null,vec__13487,(5),null);if(cljs.core._EQ_.call(null,high,low))
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
return (function (p__13494){var vec__13495 = p__13494;var _ = cljs.core.nth.call(null,vec__13495,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13495,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13495,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13495,(3),null);var ___$4 = cljs.core.nth.call(null,vec__13495,(4),null);var volume = cljs.core.nth.call(null,vec__13495,(5),null);return volume;
});})(n,group))
,group));var all_price = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,((function (n,group,all_volume){
return (function (p__13496){var vec__13497 = p__13496;var _ = cljs.core.nth.call(null,vec__13497,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13497,(1),null);var high = cljs.core.nth.call(null,vec__13497,(2),null);var ___$2 = cljs.core.nth.call(null,vec__13497,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13497,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13497,(5),null);return high;
});})(n,group,all_volume))
,group));var v_per_p = (all_price / all_volume);var obv_seq = test.stock4.obv.call(null,group);var predict = cljs.core.map.call(null,((function (n,group,all_volume,all_price,v_per_p,obv_seq){
return (function (p__13498,obv){var vec__13499 = p__13498;var _ = cljs.core.nth.call(null,vec__13499,(0),null);var open = cljs.core.nth.call(null,vec__13499,(1),null);var ___$1 = cljs.core.nth.call(null,vec__13499,(2),null);var ___$2 = cljs.core.nth.call(null,vec__13499,(3),null);var ___$3 = cljs.core.nth.call(null,vec__13499,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13499,(5),null);return (open + (obv * v_per_p));
});})(n,group,all_volume,all_price,v_per_p,obv_seq))
,kline,obv_seq);console.log(all_volume,all_price);
console.log(v_per_p);
return predict;
});
test.stock4.yu_obv = (function yu_obv(n,kline){var group = cljs.core.take.call(null,n,kline);var va = test.stock4.VolumeAccumulation.call(null,group);var max_va = cljs.core.apply.call(null,cljs.core.max,va);var min_va = cljs.core.apply.call(null,cljs.core.min,va);var region = (max_va - min_va);return cljs.core.map.call(null,((function (group,va,max_va,min_va,region){
return (function (p1__13500_SHARP_){return (p1__13500_SHARP_ / region);
});})(group,va,max_va,min_va,region))
,va);
});
test.stock4.yu_volume = (function yu_volume(n,reverse_kline){var group = cljs.core.take.call(null,n,reverse_kline);var price_seq = cljs.core.map.call(null,((function (group){
return (function (p__13505){var vec__13506 = p__13505;var _ = cljs.core.nth.call(null,vec__13506,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13506,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13506,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13506,(3),null);var close = cljs.core.nth.call(null,vec__13506,(4),null);var ___$4 = cljs.core.nth.call(null,vec__13506,(5),null);return close;
});})(group))
,group);var price_up_rate = cljs.core.map.call(null,((function (group,price_seq){
return (function (p,c){return ((c - p) / p);
});})(group,price_seq))
,price_seq,cljs.core.rest.call(null,price_seq));var volume_seq = cljs.core.map.call(null,((function (group,price_seq,price_up_rate){
return (function (p__13507){var vec__13508 = p__13507;var _ = cljs.core.nth.call(null,vec__13508,(0),null);var ___$1 = cljs.core.nth.call(null,vec__13508,(1),null);var ___$2 = cljs.core.nth.call(null,vec__13508,(2),null);var ___$3 = cljs.core.nth.call(null,vec__13508,(3),null);var ___$4 = cljs.core.nth.call(null,vec__13508,(4),null);var volume = cljs.core.nth.call(null,vec__13508,(5),null);return volume;
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
return (function (state_13986){var state_val_13987 = (state_13986[(1)]);if((state_val_13987 === (2)))
{var inst_13984 = (state_13986[(2)]);var state_13986__$1 = state_13986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13986__$1,inst_13984);
} else
{if((state_val_13987 === (1)))
{var inst_13982 = cljs.core.js__GT_clj.call(null,data);var state_13986__$1 = state_13986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13986__$1,(2),onView,inst_13982);
} else
{return null;
}
}
});})(c__6203__auto__,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13991 = [null,null,null,null,null,null,null];(statearr_13991[(0)] = state_machine__6189__auto__);
(statearr_13991[(1)] = (1));
return statearr_13991;
});
var state_machine__6189__auto____1 = (function (state_13986){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13986);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13992){if((e13992 instanceof Object))
{var ex__6192__auto__ = e13992;var statearr_13993_14455 = state_13986;(statearr_13993_14455[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14456 = state_13986;
state_13986 = G__14456;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13986){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_13994 = f__6204__auto__.call(null);(statearr_13994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,draw,onSystem,onView))
);
return c__6203__auto__;
});})(draw,onSystem,onView))
);
var c__6203__auto___14457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14457,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14457,draw,onSystem,onView){
return (function (state_14011){var state_val_14012 = (state_14011[(1)]);if((state_val_14012 === (6)))
{var inst_14007 = (state_14011[(2)]);var state_14011__$1 = state_14011;var statearr_14013_14458 = state_14011__$1;(statearr_14013_14458[(2)] = inst_14007);
(statearr_14013_14458[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (5)))
{var inst_14009 = (state_14011[(2)]);var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14011__$1,inst_14009);
} else
{if((state_val_14012 === (4)))
{var inst_14000 = (state_14011[(7)]);var inst_14004 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_14000];var inst_14005 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14004,null));var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14011__$1,(6),onSystem,inst_14005);
} else
{if((state_val_14012 === (3)))
{var inst_13999 = (state_14011[(8)]);var inst_14002 = alert(inst_13999);var state_14011__$1 = state_14011;var statearr_14014_14459 = state_14011__$1;(statearr_14014_14459[(2)] = inst_14002);
(statearr_14014_14459[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (2)))
{var inst_13999 = (state_14011[(8)]);var inst_13998 = (state_14011[(2)]);var inst_13999__$1 = cljs.core.nth.call(null,inst_13998,(0),null);var inst_14000 = cljs.core.nth.call(null,inst_13998,(1),null);var state_14011__$1 = (function (){var statearr_14015 = state_14011;(statearr_14015[(7)] = inst_14000);
(statearr_14015[(8)] = inst_13999__$1);
return statearr_14015;
})();if(cljs.core.truth_(inst_13999__$1))
{var statearr_14016_14460 = state_14011__$1;(statearr_14016_14460[(1)] = (3));
} else
{var statearr_14017_14461 = state_14011__$1;(statearr_14017_14461[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14012 === (1)))
{var inst_13996 = test.stock4.stock_info.call(null,null,(2450),"2014/1/1",(0),(200));var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14011__$1,(2),inst_13996);
} else
{return null;
}
}
}
}
}
}
});})(c__6203__auto___14457,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto___14457,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14021 = [null,null,null,null,null,null,null,null,null];(statearr_14021[(0)] = state_machine__6189__auto__);
(statearr_14021[(1)] = (1));
return statearr_14021;
});
var state_machine__6189__auto____1 = (function (state_14011){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14011);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14022){if((e14022 instanceof Object))
{var ex__6192__auto__ = e14022;var statearr_14023_14462 = state_14011;(statearr_14023_14462[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14463 = state_14011;
state_14011 = G__14463;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14011){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14457,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_14024 = f__6204__auto__.call(null);(statearr_14024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14457);
return statearr_14024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14457,draw,onSystem,onView))
);
var c__6203__auto___14464 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14464,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14464,draw,onSystem,onView){
return (function (state_14314){var state_val_14315 = (state_14314[(1)]);if((state_val_14315 === (65)))
{var inst_14241 = (state_14314[(7)]);var inst_14242 = (state_14314[(8)]);var inst_14244 = (inst_14242 < inst_14241);var inst_14245 = inst_14244;var state_14314__$1 = state_14314;if(cljs.core.truth_(inst_14245))
{var statearr_14316_14465 = state_14314__$1;(statearr_14316_14465[(1)] = (67));
} else
{var statearr_14317_14466 = state_14314__$1;(statearr_14317_14466[(1)] = (68));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (70)))
{var inst_14253 = (state_14314[(9)]);var inst_14255 = cljs.core.chunked_seq_QMARK_.call(null,inst_14253);var state_14314__$1 = state_14314;if(inst_14255)
{var statearr_14318_14467 = state_14314__$1;(statearr_14318_14467[(1)] = (73));
} else
{var statearr_14319_14468 = state_14314__$1;(statearr_14319_14468[(1)] = (74));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (62)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14236 = cljs.core.keyword.call(null,inst_14086);var inst_14237 = inst_14236.call(null,inst_14046);var inst_14238 = cljs.core.seq.call(null,inst_14237);var inst_14239 = inst_14238;var inst_14240 = null;var inst_14241 = (0);var inst_14242 = (0);var state_14314__$1 = (function (){var statearr_14320 = state_14314;(statearr_14320[(7)] = inst_14241);
(statearr_14320[(12)] = inst_14240);
(statearr_14320[(13)] = inst_14239);
(statearr_14320[(8)] = inst_14242);
return statearr_14320;
})();var statearr_14321_14469 = state_14314__$1;(statearr_14321_14469[(2)] = null);
(statearr_14321_14469[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (74)))
{var inst_14253 = (state_14314[(9)]);var inst_14262 = cljs.core.first.call(null,inst_14253);var inst_14263 = cljs.core.pr_str.call(null,inst_14262);var inst_14264 = console.log(inst_14263);var inst_14265 = cljs.core.next.call(null,inst_14253);var inst_14239 = inst_14265;var inst_14240 = null;var inst_14241 = (0);var inst_14242 = (0);var state_14314__$1 = (function (){var statearr_14322 = state_14314;(statearr_14322[(14)] = inst_14264);
(statearr_14322[(7)] = inst_14241);
(statearr_14322[(12)] = inst_14240);
(statearr_14322[(13)] = inst_14239);
(statearr_14322[(8)] = inst_14242);
return statearr_14322;
})();var statearr_14323_14470 = state_14314__$1;(statearr_14323_14470[(2)] = null);
(statearr_14323_14470[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (7)))
{var inst_14038 = (state_14314[(15)]);var inst_14043 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14038);var state_14314__$1 = state_14314;var statearr_14324_14471 = state_14314__$1;(statearr_14324_14471[(2)] = inst_14043);
(statearr_14324_14471[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (59)))
{var inst_14046 = (state_14314[(10)]);var inst_14047 = (state_14314[(16)]);var inst_14224 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14225 = test.stock4.check_turn.call(null,inst_14224);var inst_14226 = cljs.core.take.call(null,inst_14047,inst_14225);var inst_14227 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"turn","turn",75759344),inst_14226);var inst_14228 = draw.call(null,inst_14227);var state_14314__$1 = state_14314;var statearr_14325_14472 = state_14314__$1;(statearr_14325_14472[(2)] = inst_14228);
(statearr_14325_14472[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (20)))
{var inst_14053 = (state_14314[(17)]);var inst_14081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14053);var state_14314__$1 = state_14314;var statearr_14326_14473 = state_14314__$1;(statearr_14326_14473[(2)] = inst_14081);
(statearr_14326_14473[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (72)))
{var inst_14271 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14327_14474 = state_14314__$1;(statearr_14327_14474[(2)] = inst_14271);
(statearr_14327_14474[(1)] = (69));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (58)))
{var inst_14282 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14328_14475 = state_14314__$1;(statearr_14328_14475[(2)] = inst_14282);
(statearr_14328_14475[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (60)))
{var inst_14085 = (state_14314[(18)]);var inst_14230 = cljs.core._EQ_.call(null,"print",inst_14085);var state_14314__$1 = state_14314;if(inst_14230)
{var statearr_14329_14476 = state_14314__$1;(statearr_14329_14476[(1)] = (62));
} else
{var statearr_14330_14477 = state_14314__$1;(statearr_14330_14477[(1)] = (63));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (27)))
{var inst_14085 = (state_14314[(18)]);var inst_14107 = cljs.core._EQ_.call(null,"yu-obv",inst_14085);var state_14314__$1 = state_14314;if(inst_14107)
{var statearr_14331_14478 = state_14314__$1;(statearr_14331_14478[(1)] = (29));
} else
{var statearr_14332_14479 = state_14314__$1;(statearr_14332_14479[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (1)))
{var inst_14030 = (state_14314[(19)]);var inst_14028 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_14029 = [(200)];var inst_14030__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14028,inst_14029);var inst_14031 = cljs.core.seq_QMARK_.call(null,inst_14030__$1);var state_14314__$1 = (function (){var statearr_14333 = state_14314;(statearr_14333[(19)] = inst_14030__$1);
return statearr_14333;
})();if(inst_14031)
{var statearr_14334_14480 = state_14314__$1;(statearr_14334_14480[(1)] = (2));
} else
{var statearr_14335_14481 = state_14314__$1;(statearr_14335_14481[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (69)))
{var inst_14273 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14336_14482 = state_14314__$1;(statearr_14336_14482[(2)] = inst_14273);
(statearr_14336_14482[(1)] = (66));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (24)))
{var inst_14085 = (state_14314[(18)]);var inst_14098 = cljs.core._EQ_.call(null,"obv",inst_14085);var state_14314__$1 = state_14314;if(inst_14098)
{var statearr_14337_14483 = state_14314__$1;(statearr_14337_14483[(1)] = (26));
} else
{var statearr_14338_14484 = state_14314__$1;(statearr_14338_14484[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (55)))
{var inst_14284 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14339_14485 = state_14314__$1;(statearr_14339_14485[(2)] = inst_14284);
(statearr_14339_14485[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (39)))
{var inst_14085 = (state_14314[(18)]);var inst_14148 = cljs.core._EQ_.call(null,"sma",inst_14085);var state_14314__$1 = state_14314;if(inst_14148)
{var statearr_14340_14486 = state_14314__$1;(statearr_14340_14486[(1)] = (41));
} else
{var statearr_14341_14487 = state_14314__$1;(statearr_14341_14487[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (46)))
{var inst_14290 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14342_14488 = state_14314__$1;(statearr_14342_14488[(2)] = inst_14290);
(statearr_14342_14488[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (4)))
{var inst_14036 = (state_14314[(20)]);var inst_14030 = (state_14314[(19)]);var inst_14036__$1 = (state_14314[(2)]);var inst_14037 = cljs.core.get.call(null,inst_14036__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_14038 = inst_14030;var state_14314__$1 = (function (){var statearr_14343 = state_14314;(statearr_14343[(15)] = inst_14038);
(statearr_14343[(20)] = inst_14036__$1);
(statearr_14343[(21)] = inst_14037);
return statearr_14343;
})();var statearr_14344_14489 = state_14314__$1;(statearr_14344_14489[(2)] = null);
(statearr_14344_14489[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (54)))
{var inst_14085 = (state_14314[(18)]);var inst_14214 = cljs.core._EQ_.call(null,"avg",inst_14085);var state_14314__$1 = state_14314;if(inst_14214)
{var statearr_14345_14490 = state_14314__$1;(statearr_14345_14490[(1)] = (56));
} else
{var statearr_14346_14491 = state_14314__$1;(statearr_14346_14491[(1)] = (57));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (15)))
{var inst_14046 = (state_14314[(10)]);var state_14314__$1 = state_14314;var statearr_14347_14492 = state_14314__$1;(statearr_14347_14492[(2)] = inst_14046);
(statearr_14347_14492[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (48)))
{var inst_14085 = (state_14314[(18)]);var inst_14180 = cljs.core._EQ_.call(null,"sar",inst_14085);var state_14314__$1 = state_14314;if(inst_14180)
{var statearr_14348_14493 = state_14314__$1;(statearr_14348_14493[(1)] = (50));
} else
{var statearr_14349_14494 = state_14314__$1;(statearr_14349_14494[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (50)))
{var inst_14046 = (state_14314[(10)]);var inst_14182 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14183 = cljs.core.reverse.call(null,inst_14182);var inst_14184 = test.stock4.sar.call(null,inst_14183);var inst_14185 = cljs.core.count.call(null,inst_14182);var inst_14186 = cljs.core.take.call(null,inst_14185,inst_14184);var inst_14187 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"sar","sar",833088678),inst_14186);var inst_14188 = draw.call(null,inst_14187);var state_14314__$1 = state_14314;var statearr_14350_14495 = state_14314__$1;(statearr_14350_14495[(2)] = inst_14188);
(statearr_14350_14495[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (75)))
{var inst_14268 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14351_14496 = state_14314__$1;(statearr_14351_14496[(2)] = inst_14268);
(statearr_14351_14496[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (21)))
{var inst_14053 = (state_14314[(17)]);var state_14314__$1 = state_14314;var statearr_14352_14497 = state_14314__$1;(statearr_14352_14497[(2)] = inst_14053);
(statearr_14352_14497[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (31)))
{var inst_14300 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14353_14498 = state_14314__$1;(statearr_14353_14498[(2)] = inst_14300);
(statearr_14353_14498[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (32)))
{var inst_14046 = (state_14314[(10)]);var inst_14117 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14118 = test.stock4.yu_pre.call(null,inst_14117);var inst_14119 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14120 = cljs.core.count.call(null,inst_14119);var inst_14121 = cljs.core.take.call(null,inst_14120,inst_14118);var inst_14122 = cljs.core.pr_str.call(null,inst_14121);var inst_14123 = console.log(inst_14122);var state_14314__$1 = (function (){var statearr_14354 = state_14314;(statearr_14354[(22)] = inst_14123);
return statearr_14354;
})();var statearr_14355_14499 = state_14314__$1;(statearr_14355_14499[(2)] = inst_14046);
(statearr_14355_14499[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (40)))
{var inst_14294 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14356_14500 = state_14314__$1;(statearr_14356_14500[(2)] = inst_14294);
(statearr_14356_14500[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (56)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14047 = (state_14314[(16)]);var inst_14216 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14217 = test.stock4.average.call(null,inst_14086,inst_14216);var inst_14218 = cljs.core.take.call(null,inst_14047,inst_14217);var inst_14219 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_14218);var inst_14220 = draw.call(null,inst_14219);var state_14314__$1 = state_14314;var statearr_14357_14501 = state_14314__$1;(statearr_14357_14501[(2)] = inst_14220);
(statearr_14357_14501[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (33)))
{var inst_14085 = (state_14314[(18)]);var inst_14125 = cljs.core._EQ_.call(null,"yu",inst_14085);var state_14314__$1 = state_14314;if(inst_14125)
{var statearr_14358_14502 = state_14314__$1;(statearr_14358_14502[(1)] = (35));
} else
{var statearr_14359_14503 = state_14314__$1;(statearr_14359_14503[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (13)))
{var inst_14309 = (state_14314[(2)]);var inst_14038 = inst_14309;var state_14314__$1 = (function (){var statearr_14360 = state_14314;(statearr_14360[(15)] = inst_14038);
return statearr_14360;
})();var statearr_14361_14504 = state_14314__$1;(statearr_14361_14504[(2)] = null);
(statearr_14361_14504[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (22)))
{var inst_14085 = (state_14314[(18)]);var inst_14084 = (state_14314[(23)]);var inst_14084__$1 = (state_14314[(2)]);var inst_14085__$1 = cljs.core.get.call(null,inst_14084__$1,"cmd");var inst_14086 = cljs.core.get.call(null,inst_14084__$1,"params");var inst_14090 = cljs.core._EQ_.call(null,"length",inst_14085__$1);var state_14314__$1 = (function (){var statearr_14362 = state_14314;(statearr_14362[(18)] = inst_14085__$1);
(statearr_14362[(11)] = inst_14086);
(statearr_14362[(23)] = inst_14084__$1);
return statearr_14362;
})();if(inst_14090)
{var statearr_14363_14505 = state_14314__$1;(statearr_14363_14505[(1)] = (23));
} else
{var statearr_14364_14506 = state_14314__$1;(statearr_14364_14506[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (36)))
{var inst_14085 = (state_14314[(18)]);var inst_14136 = cljs.core._EQ_.call(null,"sd",inst_14085);var state_14314__$1 = state_14314;if(inst_14136)
{var statearr_14365_14507 = state_14314__$1;(statearr_14365_14507[(1)] = (38));
} else
{var statearr_14366_14508 = state_14314__$1;(statearr_14366_14508[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (41)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14150 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14151 = test.stock4.sma.call(null,inst_14086,inst_14150);var inst_14152 = cljs.core.take.call(null,(10),inst_14151);var inst_14153 = cljs.core.pr_str.call(null,inst_14152);var inst_14154 = console.log(inst_14153);var state_14314__$1 = (function (){var statearr_14367 = state_14314;(statearr_14367[(24)] = inst_14154);
return statearr_14367;
})();var statearr_14368_14509 = state_14314__$1;(statearr_14368_14509[(2)] = inst_14046);
(statearr_14368_14509[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (43)))
{var inst_14292 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14369_14510 = state_14314__$1;(statearr_14369_14510[(2)] = inst_14292);
(statearr_14369_14510[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (61)))
{var inst_14280 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14370_14511 = state_14314__$1;(statearr_14370_14511[(2)] = inst_14280);
(statearr_14370_14511[(1)] = (58));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (29)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14109 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14110 = test.stock4.yu_obv.call(null,inst_14086,inst_14109);var inst_14111 = cljs.core.take.call(null,(10),inst_14110);var inst_14112 = cljs.core.pr_str.call(null,inst_14111);var inst_14113 = console.log(inst_14112);var state_14314__$1 = (function (){var statearr_14371 = state_14314;(statearr_14371[(25)] = inst_14113);
return statearr_14371;
})();var statearr_14372_14512 = state_14314__$1;(statearr_14372_14512[(2)] = inst_14046);
(statearr_14372_14512[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (44)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14158 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14159 = test.stock4.ema.call(null,inst_14086,(0),inst_14158);var inst_14160 = cljs.core.take.call(null,(10),inst_14159);var inst_14161 = cljs.core.pr_str.call(null,inst_14160);var inst_14162 = console.log(inst_14161);var state_14314__$1 = (function (){var statearr_14373 = state_14314;(statearr_14373[(26)] = inst_14162);
return statearr_14373;
})();var statearr_14374_14513 = state_14314__$1;(statearr_14374_14513[(2)] = inst_14046);
(statearr_14374_14513[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (6)))
{var inst_14312 = (state_14314[(2)]);var state_14314__$1 = state_14314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14314__$1,inst_14312);
} else
{if((state_val_14315 === (28)))
{var inst_14302 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14375_14514 = state_14314__$1;(statearr_14375_14514[(2)] = inst_14302);
(statearr_14375_14514[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (64)))
{var inst_14278 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14376_14515 = state_14314__$1;(statearr_14376_14515[(2)] = inst_14278);
(statearr_14376_14515[(1)] = (61));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (51)))
{var inst_14085 = (state_14314[(18)]);var inst_14190 = cljs.core._EQ_.call(null,"stock",inst_14085);var state_14314__$1 = state_14314;if(inst_14190)
{var statearr_14377_14516 = state_14314__$1;(statearr_14377_14516[(1)] = (53));
} else
{var statearr_14378_14517 = state_14314__$1;(statearr_14378_14517[(1)] = (54));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (25)))
{var inst_14304 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14379_14518 = state_14314__$1;(statearr_14379_14518[(2)] = inst_14304);
(statearr_14379_14518[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (34)))
{var inst_14298 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14380_14519 = state_14314__$1;(statearr_14380_14519[(2)] = inst_14298);
(statearr_14380_14519[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (17)))
{var inst_14053 = (state_14314[(17)]);var inst_14079 = cljs.core.seq_QMARK_.call(null,inst_14053);var state_14314__$1 = state_14314;if(inst_14079)
{var statearr_14381_14520 = state_14314__$1;(statearr_14381_14520[(1)] = (20));
} else
{var statearr_14382_14521 = state_14314__$1;(statearr_14382_14521[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (3)))
{var inst_14030 = (state_14314[(19)]);var state_14314__$1 = state_14314;var statearr_14383_14522 = state_14314__$1;(statearr_14383_14522[(2)] = inst_14030);
(statearr_14383_14522[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (12)))
{var inst_14054 = (state_14314[(27)]);var inst_14076 = cljs.core._EQ_.call(null,onView,inst_14054);var state_14314__$1 = state_14314;if(inst_14076)
{var statearr_14384_14523 = state_14314__$1;(statearr_14384_14523[(1)] = (17));
} else
{var statearr_14385_14524 = state_14314__$1;(statearr_14385_14524[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (2)))
{var inst_14030 = (state_14314[(19)]);var inst_14033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14030);var state_14314__$1 = state_14314;var statearr_14386_14525 = state_14314__$1;(statearr_14386_14525[(2)] = inst_14033);
(statearr_14386_14525[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (66)))
{var inst_14046 = (state_14314[(10)]);var inst_14275 = (state_14314[(2)]);var state_14314__$1 = (function (){var statearr_14387 = state_14314;(statearr_14387[(28)] = inst_14275);
return statearr_14387;
})();var statearr_14388_14526 = state_14314__$1;(statearr_14388_14526[(2)] = inst_14046);
(statearr_14388_14526[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (23)))
{var inst_14046 = (state_14314[(10)]);var inst_14092 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14093 = test.stock4.check_length.call(null,inst_14092);var inst_14094 = cljs.core.take.call(null,(10),inst_14093);var inst_14095 = cljs.core.pr_str.call(null,inst_14094);var inst_14096 = console.log(inst_14095);var state_14314__$1 = (function (){var statearr_14389 = state_14314;(statearr_14389[(29)] = inst_14096);
return statearr_14389;
})();var statearr_14390_14527 = state_14314__$1;(statearr_14390_14527[(2)] = inst_14046);
(statearr_14390_14527[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (47)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14166 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14167 = cljs.core.count.call(null,inst_14166);var inst_14168 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14169 = test.stock4.rsv.call(null,inst_14168);var inst_14170 = test.stock4.k.call(null,inst_14086,inst_14169);var inst_14171 = cljs.core.take.call(null,inst_14167,inst_14170);var inst_14172 = ((3) * inst_14086);var inst_14173 = test.stock4.k.call(null,inst_14172,inst_14169);var inst_14174 = cljs.core.take.call(null,inst_14167,inst_14173);var inst_14175 = [null,inst_14171,inst_14174];var inst_14176 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14175,null));var inst_14177 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"kd","kd",771448701),inst_14176);var inst_14178 = draw.call(null,inst_14177);var state_14314__$1 = state_14314;var statearr_14391_14528 = state_14314__$1;(statearr_14391_14528[(2)] = inst_14178);
(statearr_14391_14528[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (35)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14127 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14128 = cljs.core.reverse.call(null,inst_14127);var inst_14129 = test.stock4.yu.call(null,0.5,inst_14086,inst_14128);var inst_14130 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14131 = cljs.core.count.call(null,inst_14130);var inst_14132 = cljs.core.take.call(null,inst_14131,inst_14129);var inst_14133 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"yu","yu",979062608),inst_14132);var inst_14134 = draw.call(null,inst_14133);var state_14314__$1 = state_14314;var statearr_14392_14529 = state_14314__$1;(statearr_14392_14529[(2)] = inst_14134);
(statearr_14392_14529[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (19)))
{var inst_14307 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14393_14530 = state_14314__$1;(statearr_14393_14530[(2)] = inst_14307);
(statearr_14393_14530[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (57)))
{var inst_14085 = (state_14314[(18)]);var inst_14222 = cljs.core._EQ_.call(null,"turn",inst_14085);var state_14314__$1 = state_14314;if(inst_14222)
{var statearr_14394_14531 = state_14314__$1;(statearr_14394_14531[(1)] = (59));
} else
{var statearr_14395_14532 = state_14314__$1;(statearr_14395_14532[(1)] = (60));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (68)))
{var inst_14253 = (state_14314[(9)]);var inst_14239 = (state_14314[(13)]);var inst_14253__$1 = cljs.core.seq.call(null,inst_14239);var state_14314__$1 = (function (){var statearr_14396 = state_14314;(statearr_14396[(9)] = inst_14253__$1);
return statearr_14396;
})();if(inst_14253__$1)
{var statearr_14397_14533 = state_14314__$1;(statearr_14397_14533[(1)] = (70));
} else
{var statearr_14398_14534 = state_14314__$1;(statearr_14398_14534[(1)] = (71));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (11)))
{var inst_14053 = (state_14314[(17)]);var inst_14061 = cljs.core.nth.call(null,inst_14053,(0),null);var inst_14062 = cljs.core.nth.call(null,inst_14053,(1),null);var inst_14066 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_14061);var state_14314__$1 = (function (){var statearr_14399 = state_14314;(statearr_14399[(30)] = inst_14062);
return statearr_14399;
})();if(inst_14066)
{var statearr_14400_14535 = state_14314__$1;(statearr_14400_14535[(1)] = (14));
} else
{var statearr_14401_14536 = state_14314__$1;(statearr_14401_14536[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (9)))
{var inst_14046 = (state_14314[(10)]);var inst_14046__$1 = (state_14314[(2)]);var inst_14047 = cljs.core.get.call(null,inst_14046__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_14049 = [onSystem,onView];var inst_14050 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14049,null));var state_14314__$1 = (function (){var statearr_14402 = state_14314;(statearr_14402[(10)] = inst_14046__$1);
(statearr_14402[(16)] = inst_14047);
return statearr_14402;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_14314__$1,(10),inst_14050);
} else
{if((state_val_14315 === (5)))
{var inst_14038 = (state_14314[(15)]);var inst_14041 = cljs.core.seq_QMARK_.call(null,inst_14038);var state_14314__$1 = state_14314;if(inst_14041)
{var statearr_14403_14537 = state_14314__$1;(statearr_14403_14537[(1)] = (7));
} else
{var statearr_14404_14538 = state_14314__$1;(statearr_14404_14538[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (14)))
{var inst_14046 = (state_14314[(10)]);var inst_14062 = (state_14314[(30)]);var inst_14047 = (state_14314[(16)]);var inst_14068 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"info","info",-317069002),inst_14062);var inst_14069 = cljs.core.take.call(null,inst_14047,inst_14062);var inst_14070 = cljs.core.assoc.call(null,inst_14068,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_14069);var inst_14071 = draw.call(null,inst_14070);var state_14314__$1 = state_14314;var statearr_14405_14539 = state_14314__$1;(statearr_14405_14539[(2)] = inst_14071);
(statearr_14405_14539[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (45)))
{var inst_14085 = (state_14314[(18)]);var inst_14164 = cljs.core._EQ_.call(null,"rsv",inst_14085);var state_14314__$1 = state_14314;if(inst_14164)
{var statearr_14406_14540 = state_14314__$1;(statearr_14406_14540[(1)] = (47));
} else
{var statearr_14407_14541 = state_14314__$1;(statearr_14407_14541[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (53)))
{var inst_14085 = (state_14314[(18)]);var inst_14038 = (state_14314[(15)]);var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14036 = (state_14314[(20)]);var inst_14052 = (state_14314[(31)]);var inst_14084 = (state_14314[(23)]);var inst_14054 = (state_14314[(27)]);var inst_14047 = (state_14314[(16)]);var inst_14053 = (state_14314[(17)]);var inst_14210 = cljs.core.async.chan.call(null,(1));var inst_14211 = (function (){var cmd = inst_14085;var input = inst_14084;var map__14027 = inst_14036;var ctx = inst_14046;var expr__14088 = inst_14085;var map__14078 = inst_14084;var vec__14048 = inst_14052;var map__14040 = inst_14046;var v = inst_14053;var pred__14087 = cljs.core._EQ_;var G__14026 = inst_14038;var c__6203__auto____$1 = inst_14210;var params = inst_14086;var cnt = inst_14047;var ch = inst_14054;var expr__14056 = inst_14054;var pred__14055 = cljs.core._EQ_;return ((function (cmd,input,map__14027,ctx,expr__14088,map__14078,vec__14048,map__14040,v,pred__14087,G__14026,c__6203__auto____$1,params,cnt,ch,expr__14056,pred__14055,inst_14085,inst_14038,inst_14046,inst_14086,inst_14036,inst_14052,inst_14084,inst_14054,inst_14047,inst_14053,inst_14210,state_val_14315,c__6203__auto___14464,draw,onSystem,onView){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (cmd,input,map__14027,ctx,expr__14088,map__14078,vec__14048,map__14040,v,pred__14087,G__14026,c__6203__auto____$1,params,cnt,ch,expr__14056,pred__14055,inst_14085,inst_14038,inst_14046,inst_14086,inst_14036,inst_14052,inst_14084,inst_14054,inst_14047,inst_14053,inst_14210,state_val_14315,c__6203__auto___14464,draw,onSystem,onView){
return (function (state_14208){var state_val_14209 = (state_14208[(1)]);if((state_val_14209 === (6)))
{var inst_14204 = (state_14208[(2)]);var state_14208__$1 = state_14208;var statearr_14408_14542 = state_14208__$1;(statearr_14408_14542[(2)] = inst_14204);
(statearr_14408_14542[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14209 === (5)))
{var inst_14206 = (state_14208[(2)]);var state_14208__$1 = state_14208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14208__$1,inst_14206);
} else
{if((state_val_14209 === (4)))
{var inst_14197 = (state_14208[(7)]);var inst_14201 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_14197];var inst_14202 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14201,null));var state_14208__$1 = state_14208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14208__$1,(6),onSystem,inst_14202);
} else
{if((state_val_14209 === (3)))
{var inst_14196 = (state_14208[(8)]);var inst_14199 = alert(inst_14196);var state_14208__$1 = state_14208;var statearr_14409_14543 = state_14208__$1;(statearr_14409_14543[(2)] = inst_14199);
(statearr_14409_14543[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14209 === (2)))
{var inst_14196 = (state_14208[(8)]);var inst_14195 = (state_14208[(2)]);var inst_14196__$1 = cljs.core.nth.call(null,inst_14195,(0),null);var inst_14197 = cljs.core.nth.call(null,inst_14195,(1),null);var state_14208__$1 = (function (){var statearr_14410 = state_14208;(statearr_14410[(8)] = inst_14196__$1);
(statearr_14410[(7)] = inst_14197);
return statearr_14410;
})();if(cljs.core.truth_(inst_14196__$1))
{var statearr_14411_14544 = state_14208__$1;(statearr_14411_14544[(1)] = (3));
} else
{var statearr_14412_14545 = state_14208__$1;(statearr_14412_14545[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14209 === (1)))
{var inst_14193 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_14208__$1 = state_14208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14208__$1,(2),inst_14193);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,map__14027,ctx,expr__14088,map__14078,vec__14048,map__14040,v,pred__14087,G__14026,c__6203__auto____$1,params,cnt,ch,expr__14056,pred__14055,inst_14085,inst_14038,inst_14046,inst_14086,inst_14036,inst_14052,inst_14084,inst_14054,inst_14047,inst_14053,inst_14210,state_val_14315,c__6203__auto___14464,draw,onSystem,onView))
;return ((function (switch__6188__auto__,cmd,input,map__14027,ctx,expr__14088,map__14078,vec__14048,map__14040,v,pred__14087,G__14026,c__6203__auto____$1,params,cnt,ch,expr__14056,pred__14055,inst_14085,inst_14038,inst_14046,inst_14086,inst_14036,inst_14052,inst_14084,inst_14054,inst_14047,inst_14053,inst_14210,state_val_14315,c__6203__auto___14464,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14416 = [null,null,null,null,null,null,null,null,null];(statearr_14416[(0)] = state_machine__6189__auto__);
(statearr_14416[(1)] = (1));
return statearr_14416;
});
var state_machine__6189__auto____1 = (function (state_14208){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14208);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14417){if((e14417 instanceof Object))
{var ex__6192__auto__ = e14417;var statearr_14418_14546 = state_14208;(statearr_14418_14546[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14208);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14547 = state_14208;
state_14208 = G__14547;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14208){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,cmd,input,map__14027,ctx,expr__14088,map__14078,vec__14048,map__14040,v,pred__14087,G__14026,c__6203__auto____$1,params,cnt,ch,expr__14056,pred__14055,inst_14085,inst_14038,inst_14046,inst_14086,inst_14036,inst_14052,inst_14084,inst_14054,inst_14047,inst_14053,inst_14210,state_val_14315,c__6203__auto___14464,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_14419 = f__6204__auto__.call(null);(statearr_14419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_14419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(cmd,input,map__14027,ctx,expr__14088,map__14078,vec__14048,map__14040,v,pred__14087,G__14026,c__6203__auto____$1,params,cnt,ch,expr__14056,pred__14055,inst_14085,inst_14038,inst_14046,inst_14086,inst_14036,inst_14052,inst_14084,inst_14054,inst_14047,inst_14053,inst_14210,state_val_14315,c__6203__auto___14464,draw,onSystem,onView))
})();var inst_14212 = cljs.core.async.impl.dispatch.run.call(null,inst_14211);var state_14314__$1 = (function (){var statearr_14420 = state_14314;(statearr_14420[(32)] = inst_14212);
return statearr_14420;
})();var statearr_14421_14548 = state_14314__$1;(statearr_14421_14548[(2)] = inst_14046);
(statearr_14421_14548[(1)] = (55));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (26)))
{var inst_14046 = (state_14314[(10)]);var inst_14100 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14101 = test.stock4.obv.call(null,inst_14100);var inst_14102 = cljs.core.count.call(null,inst_14100);var inst_14103 = cljs.core.take.call(null,inst_14102,inst_14101);var inst_14104 = cljs.core.pr_str.call(null,inst_14103);var inst_14105 = console.log(inst_14104);var state_14314__$1 = (function (){var statearr_14422 = state_14314;(statearr_14422[(33)] = inst_14105);
return statearr_14422;
})();var statearr_14423_14549 = state_14314__$1;(statearr_14423_14549[(2)] = inst_14046);
(statearr_14423_14549[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (16)))
{var inst_14074 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14424_14550 = state_14314__$1;(statearr_14424_14550[(2)] = inst_14074);
(statearr_14424_14550[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (38)))
{var inst_14046 = (state_14314[(10)]);var inst_14086 = (state_14314[(11)]);var inst_14138 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14139 = test.stock4.sd.call(null,inst_14086,inst_14138);var inst_14140 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14141 = test.stock4.z_score.call(null,inst_14086,inst_14140);var inst_14142 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_14046);var inst_14143 = cljs.core.count.call(null,inst_14142);var inst_14144 = cljs.core.take.call(null,inst_14143,inst_14139);var inst_14145 = cljs.core.assoc.call(null,inst_14046,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_14144);var inst_14146 = draw.call(null,inst_14145);var state_14314__$1 = (function (){var statearr_14425 = state_14314;(statearr_14425[(34)] = inst_14141);
return statearr_14425;
})();var statearr_14426_14551 = state_14314__$1;(statearr_14426_14551[(2)] = inst_14146);
(statearr_14426_14551[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (30)))
{var inst_14085 = (state_14314[(18)]);var inst_14115 = cljs.core._EQ_.call(null,"yu-pre",inst_14085);var state_14314__$1 = state_14314;if(inst_14115)
{var statearr_14427_14552 = state_14314__$1;(statearr_14427_14552[(1)] = (32));
} else
{var statearr_14428_14553 = state_14314__$1;(statearr_14428_14553[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (73)))
{var inst_14253 = (state_14314[(9)]);var inst_14257 = cljs.core.chunk_first.call(null,inst_14253);var inst_14258 = cljs.core.chunk_rest.call(null,inst_14253);var inst_14259 = cljs.core.count.call(null,inst_14257);var inst_14239 = inst_14258;var inst_14240 = inst_14257;var inst_14241 = inst_14259;var inst_14242 = (0);var state_14314__$1 = (function (){var statearr_14429 = state_14314;(statearr_14429[(7)] = inst_14241);
(statearr_14429[(12)] = inst_14240);
(statearr_14429[(13)] = inst_14239);
(statearr_14429[(8)] = inst_14242);
return statearr_14429;
})();var statearr_14430_14554 = state_14314__$1;(statearr_14430_14554[(2)] = null);
(statearr_14430_14554[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (10)))
{var inst_14052 = (state_14314[(31)]);var inst_14054 = (state_14314[(27)]);var inst_14052__$1 = (state_14314[(2)]);var inst_14053 = cljs.core.nth.call(null,inst_14052__$1,(0),null);var inst_14054__$1 = cljs.core.nth.call(null,inst_14052__$1,(1),null);var inst_14058 = cljs.core._EQ_.call(null,onSystem,inst_14054__$1);var state_14314__$1 = (function (){var statearr_14431 = state_14314;(statearr_14431[(31)] = inst_14052__$1);
(statearr_14431[(27)] = inst_14054__$1);
(statearr_14431[(17)] = inst_14053);
return statearr_14431;
})();if(inst_14058)
{var statearr_14432_14555 = state_14314__$1;(statearr_14432_14555[(1)] = (11));
} else
{var statearr_14433_14556 = state_14314__$1;(statearr_14433_14556[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (18)))
{var inst_14046 = (state_14314[(10)]);var state_14314__$1 = state_14314;var statearr_14437_14557 = state_14314__$1;(statearr_14437_14557[(2)] = inst_14046);
(statearr_14437_14557[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (52)))
{var inst_14286 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14438_14558 = state_14314__$1;(statearr_14438_14558[(2)] = inst_14286);
(statearr_14438_14558[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (67)))
{var inst_14241 = (state_14314[(7)]);var inst_14240 = (state_14314[(12)]);var inst_14239 = (state_14314[(13)]);var inst_14242 = (state_14314[(8)]);var inst_14247 = cljs.core._nth.call(null,inst_14240,inst_14242);var inst_14248 = cljs.core.pr_str.call(null,inst_14247);var inst_14249 = console.log(inst_14248);var inst_14250 = (inst_14242 + (1));var tmp14434 = inst_14241;var tmp14435 = inst_14240;var tmp14436 = inst_14239;var inst_14239__$1 = tmp14436;var inst_14240__$1 = tmp14435;var inst_14241__$1 = tmp14434;var inst_14242__$1 = inst_14250;var state_14314__$1 = (function (){var statearr_14439 = state_14314;(statearr_14439[(7)] = inst_14241__$1);
(statearr_14439[(12)] = inst_14240__$1);
(statearr_14439[(35)] = inst_14249);
(statearr_14439[(13)] = inst_14239__$1);
(statearr_14439[(8)] = inst_14242__$1);
return statearr_14439;
})();var statearr_14440_14559 = state_14314__$1;(statearr_14440_14559[(2)] = null);
(statearr_14440_14559[(1)] = (65));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (71)))
{var state_14314__$1 = state_14314;var statearr_14441_14560 = state_14314__$1;(statearr_14441_14560[(2)] = null);
(statearr_14441_14560[(1)] = (72));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (42)))
{var inst_14085 = (state_14314[(18)]);var inst_14156 = cljs.core._EQ_.call(null,"ema",inst_14085);var state_14314__$1 = state_14314;if(inst_14156)
{var statearr_14442_14561 = state_14314__$1;(statearr_14442_14561[(1)] = (44));
} else
{var statearr_14443_14562 = state_14314__$1;(statearr_14443_14562[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (37)))
{var inst_14296 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14444_14563 = state_14314__$1;(statearr_14444_14563[(2)] = inst_14296);
(statearr_14444_14563[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (63)))
{var inst_14046 = (state_14314[(10)]);var state_14314__$1 = state_14314;var statearr_14445_14564 = state_14314__$1;(statearr_14445_14564[(2)] = inst_14046);
(statearr_14445_14564[(1)] = (64));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (8)))
{var inst_14038 = (state_14314[(15)]);var state_14314__$1 = state_14314;var statearr_14446_14565 = state_14314__$1;(statearr_14446_14565[(2)] = inst_14038);
(statearr_14446_14565[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14315 === (49)))
{var inst_14288 = (state_14314[(2)]);var state_14314__$1 = state_14314;var statearr_14447_14566 = state_14314__$1;(statearr_14447_14566[(2)] = inst_14288);
(statearr_14447_14566[(1)] = (46));
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
});})(c__6203__auto___14464,draw,onSystem,onView))
;return ((function (switch__6188__auto__,c__6203__auto___14464,draw,onSystem,onView){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14451[(0)] = state_machine__6189__auto__);
(statearr_14451[(1)] = (1));
return statearr_14451;
});
var state_machine__6189__auto____1 = (function (state_14314){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14314);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14452){if((e14452 instanceof Object))
{var ex__6192__auto__ = e14452;var statearr_14453_14567 = state_14314;(statearr_14453_14567[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14568 = state_14314;
state_14314 = G__14568;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14314){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14464,draw,onSystem,onView))
})();var state__6205__auto__ = (function (){var statearr_14454 = f__6204__auto__.call(null);(statearr_14454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14464);
return statearr_14454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14464,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
