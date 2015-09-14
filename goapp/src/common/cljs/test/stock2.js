// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('ai.ann');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__14741_SHARP_){return cljs.core.nth.call(null,p1__14741_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__14742_SHARP_){return cljs.core.nth.call(null,p1__14742_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_brain = (function draw_brain(ctx,w,h,info,p__14743){var map__14760 = p__14743;var map__14760__$1 = ((cljs.core.seq_QMARK_.call(null,map__14760))?cljs.core.apply.call(null,cljs.core.hash_map,map__14760):map__14760);var brain = map__14760__$1;var steps = cljs.core.get.call(null,map__14760__$1,new cljs.core.Keyword(null,"step","step",1288888124));var vec__14761 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14761,(0),null);var min_v = cljs.core.nth.call(null,vec__14761,(1),null);var offset_v = cljs.core.nth.call(null,vec__14761,(2),null);var offset_x = cljs.core.nth.call(null,vec__14761,(3),null);var pos_y = cljs.core.nth.call(null,vec__14761,(4),null);var money = test.stock2.calculate_money.call(null,(10000),(100),steps);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__14761,max_v,min_v,offset_v,offset_x,pos_y,money,map__14760,map__14760__$1,brain,steps){
return (function (p__14762){var vec__14763 = p__14762;var act = cljs.core.nth.call(null,vec__14763,(0),null);var line = cljs.core.nth.call(null,vec__14763,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__14761,max_v,min_v,offset_v,offset_x,pos_y,money,map__14760,map__14760__$1,brain,steps))
,steps)),info);(ctx["fillStyle"] = "black");
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(20),(20));
if(cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))
{ctx.fillText(("stock:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))),(20),(40));
} else
{}
var seq__14764 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14761,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__14760,map__14760__$1,brain,steps){
return (function() { 
var G__14776__delegate = function (args){return args;
};
var G__14776 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14776__delegate.call(this,args);};
G__14776.cljs$lang$maxFixedArity = 0;
G__14776.cljs$lang$applyTo = (function (arglist__14777){
var args = cljs.core.seq(arglist__14777);
return G__14776__delegate(args);
});
G__14776.cljs$core$IFn$_invoke$arity$variadic = G__14776__delegate;
return G__14776;
})()
;})(vec__14761,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__14760,map__14760__$1,brain,steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__14765 = null;var count__14766 = (0);var i__14767 = (0);while(true){
if((i__14767 < count__14766))
{var vec__14768 = cljs.core._nth.call(null,chunk__14765,i__14767);var idx = cljs.core.nth.call(null,vec__14768,(0),null);var curr = cljs.core.nth.call(null,vec__14768,(1),null);var pred__14769_14778 = cljs.core._EQ_;var expr__14770_14779 = curr;if(cljs.core.truth_(pred__14769_14778.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__14770_14779)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__14769_14778.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__14770_14779)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__14780 = seq__14764;
var G__14781 = chunk__14765;
var G__14782 = count__14766;
var G__14783 = (i__14767 + (1));
seq__14764 = G__14780;
chunk__14765 = G__14781;
count__14766 = G__14782;
i__14767 = G__14783;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14764);if(temp__4126__auto__)
{var seq__14764__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14764__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14764__$1);{
var G__14784 = cljs.core.chunk_rest.call(null,seq__14764__$1);
var G__14785 = c__4307__auto__;
var G__14786 = cljs.core.count.call(null,c__4307__auto__);
var G__14787 = (0);
seq__14764 = G__14784;
chunk__14765 = G__14785;
count__14766 = G__14786;
i__14767 = G__14787;
continue;
}
} else
{var vec__14772 = cljs.core.first.call(null,seq__14764__$1);var idx = cljs.core.nth.call(null,vec__14772,(0),null);var curr = cljs.core.nth.call(null,vec__14772,(1),null);var pred__14773_14788 = cljs.core._EQ_;var expr__14774_14789 = curr;if(cljs.core.truth_(pred__14773_14788.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__14774_14789)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__14773_14788.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__14774_14789)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__14790 = cljs.core.next.call(null,seq__14764__$1);
var G__14791 = null;
var G__14792 = (0);
var G__14793 = (0);
seq__14764 = G__14790;
chunk__14765 = G__14791;
count__14766 = G__14792;
i__14767 = G__14793;
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
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__14801 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14801,(0),null);var min_v = cljs.core.nth.call(null,vec__14801,(1),null);var offset_v = cljs.core.nth.call(null,vec__14801,(2),null);var offset_x = cljs.core.nth.call(null,vec__14801,(3),null);var pos_y = cljs.core.nth.call(null,vec__14801,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__14802 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14801,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14808__delegate = function (args){return args;
};
var G__14808 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14808__delegate.call(this,args);};
G__14808.cljs$lang$maxFixedArity = 0;
G__14808.cljs$lang$applyTo = (function (arglist__14809){
var args = cljs.core.seq(arglist__14809);
return G__14808__delegate(args);
});
G__14808.cljs$core$IFn$_invoke$arity$variadic = G__14808__delegate;
return G__14808;
})()
;})(vec__14801,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__14803 = null;var count__14804 = (0);var i__14805 = (0);while(true){
if((i__14805 < count__14804))
{var vec__14806 = cljs.core._nth.call(null,chunk__14803,i__14805);var idx = cljs.core.nth.call(null,vec__14806,(0),null);var prev = cljs.core.nth.call(null,vec__14806,(1),null);var curr = cljs.core.nth.call(null,vec__14806,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14810 = seq__14802;
var G__14811 = chunk__14803;
var G__14812 = count__14804;
var G__14813 = (i__14805 + (1));
seq__14802 = G__14810;
chunk__14803 = G__14811;
count__14804 = G__14812;
i__14805 = G__14813;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14802);if(temp__4126__auto__)
{var seq__14802__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14802__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14802__$1);{
var G__14814 = cljs.core.chunk_rest.call(null,seq__14802__$1);
var G__14815 = c__4307__auto__;
var G__14816 = cljs.core.count.call(null,c__4307__auto__);
var G__14817 = (0);
seq__14802 = G__14814;
chunk__14803 = G__14815;
count__14804 = G__14816;
i__14805 = G__14817;
continue;
}
} else
{var vec__14807 = cljs.core.first.call(null,seq__14802__$1);var idx = cljs.core.nth.call(null,vec__14807,(0),null);var prev = cljs.core.nth.call(null,vec__14807,(1),null);var curr = cljs.core.nth.call(null,vec__14807,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__14818 = cljs.core.next.call(null,seq__14802__$1);
var G__14819 = null;
var G__14820 = (0);
var G__14821 = (0);
seq__14802 = G__14818;
chunk__14803 = G__14819;
count__14804 = G__14820;
i__14805 = G__14821;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__14831 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__14831,(0),null);var min_v = cljs.core.nth.call(null,vec__14831,(1),null);var offset_v = cljs.core.nth.call(null,vec__14831,(2),null);var offset_x = cljs.core.nth.call(null,vec__14831,(3),null);var pos_y = cljs.core.nth.call(null,vec__14831,(4),null);var seq__14832 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__14831,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__14840__delegate = function (args){return args;
};
var G__14840 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14840__delegate.call(this,args);};
G__14840.cljs$lang$maxFixedArity = 0;
G__14840.cljs$lang$applyTo = (function (arglist__14841){
var args = cljs.core.seq(arglist__14841);
return G__14840__delegate(args);
});
G__14840.cljs$core$IFn$_invoke$arity$variadic = G__14840__delegate;
return G__14840;
})()
;})(vec__14831,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__14833 = null;var count__14834 = (0);var i__14835 = (0);while(true){
if((i__14835 < count__14834))
{var vec__14836 = cljs.core._nth.call(null,chunk__14833,i__14835);var idx = cljs.core.nth.call(null,vec__14836,(0),null);var vec__14837 = cljs.core.nth.call(null,vec__14836,(1),null);var start = cljs.core.nth.call(null,vec__14837,(0),null);var top = cljs.core.nth.call(null,vec__14837,(1),null);var bottom = cljs.core.nth.call(null,vec__14837,(2),null);var end = cljs.core.nth.call(null,vec__14837,(3),null);(ctx["strokeStyle"] = "black");
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
var G__14842 = seq__14832;
var G__14843 = chunk__14833;
var G__14844 = count__14834;
var G__14845 = (i__14835 + (1));
seq__14832 = G__14842;
chunk__14833 = G__14843;
count__14834 = G__14844;
i__14835 = G__14845;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14832);if(temp__4126__auto__)
{var seq__14832__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14832__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__14832__$1);{
var G__14846 = cljs.core.chunk_rest.call(null,seq__14832__$1);
var G__14847 = c__4307__auto__;
var G__14848 = cljs.core.count.call(null,c__4307__auto__);
var G__14849 = (0);
seq__14832 = G__14846;
chunk__14833 = G__14847;
count__14834 = G__14848;
i__14835 = G__14849;
continue;
}
} else
{var vec__14838 = cljs.core.first.call(null,seq__14832__$1);var idx = cljs.core.nth.call(null,vec__14838,(0),null);var vec__14839 = cljs.core.nth.call(null,vec__14838,(1),null);var start = cljs.core.nth.call(null,vec__14839,(0),null);var top = cljs.core.nth.call(null,vec__14839,(1),null);var bottom = cljs.core.nth.call(null,vec__14839,(2),null);var end = cljs.core.nth.call(null,vec__14839,(3),null);(ctx["strokeStyle"] = "black");
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
var G__14850 = cljs.core.next.call(null,seq__14832__$1);
var G__14851 = null;
var G__14852 = (0);
var G__14853 = (0);
seq__14832 = G__14850;
chunk__14833 = G__14851;
count__14834 = G__14852;
i__14835 = G__14853;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__14861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__14861,(0),null);var h = cljs.core.nth.call(null,vec__14861,(1),null);return ((function (ctx,vec__14861,w,h){
return (function (p__14862){var map__14863 = p__14862;var map__14863__$1 = ((cljs.core.seq_QMARK_.call(null,map__14863))?cljs.core.apply.call(null,cljs.core.hash_map,map__14863):map__14863);var info = cljs.core.get.call(null,map__14863__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__14863__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var brain = cljs.core.get.call(null,map__14863__$1,new cljs.core.Keyword(null,"brain","brain",428499577));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__14864_14868 = cljs.core.seq.call(null,avgs);var chunk__14865_14869 = null;var count__14866_14870 = (0);var i__14867_14871 = (0);while(true){
if((i__14867_14871 < count__14866_14870))
{var avg_14872 = cljs.core._nth.call(null,chunk__14865_14869,i__14867_14871);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_14872);
{
var G__14873 = seq__14864_14868;
var G__14874 = chunk__14865_14869;
var G__14875 = count__14866_14870;
var G__14876 = (i__14867_14871 + (1));
seq__14864_14868 = G__14873;
chunk__14865_14869 = G__14874;
count__14866_14870 = G__14875;
i__14867_14871 = G__14876;
continue;
}
} else
{var temp__4126__auto___14877 = cljs.core.seq.call(null,seq__14864_14868);if(temp__4126__auto___14877)
{var seq__14864_14878__$1 = temp__4126__auto___14877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14864_14878__$1))
{var c__4307__auto___14879 = cljs.core.chunk_first.call(null,seq__14864_14878__$1);{
var G__14880 = cljs.core.chunk_rest.call(null,seq__14864_14878__$1);
var G__14881 = c__4307__auto___14879;
var G__14882 = cljs.core.count.call(null,c__4307__auto___14879);
var G__14883 = (0);
seq__14864_14868 = G__14880;
chunk__14865_14869 = G__14881;
count__14866_14870 = G__14882;
i__14867_14871 = G__14883;
continue;
}
} else
{var avg_14884 = cljs.core.first.call(null,seq__14864_14878__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_14884);
{
var G__14885 = cljs.core.next.call(null,seq__14864_14878__$1);
var G__14886 = null;
var G__14887 = (0);
var G__14888 = (0);
seq__14864_14868 = G__14885;
chunk__14865_14869 = G__14886;
count__14866_14870 = G__14887;
i__14867_14871 = G__14888;
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
;})(ctx,vec__14861,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__14891,r){var vec__14892 = p__14891;var la = cljs.core.nth.call(null,vec__14892,(0),null);var _ = cljs.core.nthnext.call(null,vec__14892,(1));var all = vec__14892;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__14893_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14893_SHARP_) / cljs.core.count.call(null,p1__14893_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__14899){var vec__14900 = p__14899;var s = cljs.core.nth.call(null,vec__14900,(0),null);var t = cljs.core.nth.call(null,vec__14900,(1),null);var b = cljs.core.nth.call(null,vec__14900,(2),null);var e = cljs.core.nth.call(null,vec__14900,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14894_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14894_SHARP_) / cljs.core.count.call(null,p1__14894_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__14901){var vec__14902 = p__14901;var s = cljs.core.nth.call(null,vec__14902,(0),null);var t = cljs.core.nth.call(null,vec__14902,(1),null);var b = cljs.core.nth.call(null,vec__14902,(2),null);var e = cljs.core.nth.call(null,vec__14902,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__14904 = line;var start = cljs.core.nth.call(null,vec__14904,(0),null);var top = cljs.core.nth.call(null,vec__14904,(1),null);var bottom = cljs.core.nth.call(null,vec__14904,(2),null);var end = cljs.core.nth.call(null,vec__14904,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
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
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__14905){var vec__14906 = p__14905;var start_price = cljs.core.nth.call(null,vec__14906,(0),null);var _ = cljs.core.nth.call(null,vec__14906,(1),null);var ___$1 = cljs.core.nth.call(null,vec__14906,(2),null);var ___$2 = cljs.core.nth.call(null,vec__14906,(3),null);var line = vec__14906;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,info){return cljs.core.merge.call(null,test.stock2.prepare.call(null,null,info),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.list(cljs.core.list(cljs.core.list(3.0309727609504122,0.8958129837134047,1.5035815277093234,0.9456629358188376,1.3576705137689733,1.2631671445866242),cljs.core.list(-0.31085424118702176,0.9340874822881315,0.5655820779573415,0.7585836548894886,0.06611942477303065,0.7940467160731797),cljs.core.list(2.850307140147388,1.0756956641941802,1.5538502140350114,0.7274314323819675,1.5567211797840368,0.729486094825665),cljs.core.list(2.2728224695552925,1.2083236755399938,1.0223688933595008,0.7836758956375489,1.054595369712162,0.5593937540954879),cljs.core.list(3.0218162878485093,1.0503652785565414,1.604135048169243,1.2388330537952215,1.221090407169956,0.8350244798358218)),cljs.core.list(cljs.core.list(5.301581267749204,3.3609868593366343,-0.7394149388296283,3.0376961047533566,2.256700046977792,3.389521210235661)))], null));
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,p__14907,line){var map__14908 = p__14907;var map__14908__$1 = ((cljs.core.seq_QMARK_.call(null,map__14908))?cljs.core.apply.call(null,cljs.core.hash_map,map__14908):map__14908);var brain = map__14908__$1;var ws = cljs.core.get.call(null,map__14908__$1,new cljs.core.Keyword(null,"ws","ws",86841443));var info = cljs.core.get.call(null,map__14908__$1,new cljs.core.Keyword(null,"info","info",-317069002));var lines = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,line),info);var recent_lines = cljs.core.take_last.call(null,(5),lines);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,recent_lines),(5)))
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
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__14915){var vec__14916 = p__14915;var act = cljs.core.nth.call(null,vec__14916,(0),null);var vec__14917 = cljs.core.nth.call(null,vec__14916,(1),null);var start_price = cljs.core.nth.call(null,vec__14917,(0),null);var _ = cljs.core.nthnext.call(null,vec__14917,(1));var line = vec__14917;var step = vec__14916;var pred__14918 = cljs.core._EQ_;var expr__14919 = act;if(cljs.core.truth_(pred__14918.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__14919)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__14918.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__14919)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (((5) * (4)) * (12));var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var avg1 = test.stock2.average.call(null,info,(1));var map__14922 = test.stock2.play.call(null,new cljs.core.Keyword(null,"ann1","ann1",-999246990),info);var map__14922__$1 = ((cljs.core.seq_QMARK_.call(null,map__14922))?cljs.core.apply.call(null,cljs.core.hash_map,map__14922):map__14922);var brain = map__14922__$1;var step = cljs.core.get.call(null,map__14922__$1,new cljs.core.Keyword(null,"step","step",1288888124));test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg1], null)], null));
return null;
});
test.stock2.test_play.call(null);
