// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
goog.require('ai.ann');
goog.require('ai.ann');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__49570_SHARP_){return cljs.core.nth.call(null,p1__49570_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__49571_SHARP_){return cljs.core.nth.call(null,p1__49571_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_brain = (function draw_brain(ctx,w,h,info,p__49572){var map__49589 = p__49572;var map__49589__$1 = ((cljs.core.seq_QMARK_.call(null,map__49589))?cljs.core.apply.call(null,cljs.core.hash_map,map__49589):map__49589);var brain = map__49589__$1;var steps = cljs.core.get.call(null,map__49589__$1,new cljs.core.Keyword(null,"step","step",1288888124));var vec__49590 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__49590,(0),null);var min_v = cljs.core.nth.call(null,vec__49590,(1),null);var offset_v = cljs.core.nth.call(null,vec__49590,(2),null);var offset_x = cljs.core.nth.call(null,vec__49590,(3),null);var pos_y = cljs.core.nth.call(null,vec__49590,(4),null);var money = test.stock2.calculate_money.call(null,(10000),(100),steps);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__49590,max_v,min_v,offset_v,offset_x,pos_y,money,map__49589,map__49589__$1,brain,steps){
return (function (p__49591){var vec__49592 = p__49591;var act = cljs.core.nth.call(null,vec__49592,(0),null);var line = cljs.core.nth.call(null,vec__49592,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__49590,max_v,min_v,offset_v,offset_x,pos_y,money,map__49589,map__49589__$1,brain,steps))
,steps)),info);(ctx["fillStyle"] = "black");
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(20),(20));
if(cljs.core.truth_(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))
{ctx.fillText(("stock:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain)))),(20),(40));
} else
{}
var seq__49593 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49590,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__49589,map__49589__$1,brain,steps){
return (function() { 
var G__49605__delegate = function (args){return args;
};
var G__49605 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49605__delegate.call(this,args);};
G__49605.cljs$lang$maxFixedArity = 0;
G__49605.cljs$lang$applyTo = (function (arglist__49606){
var args = cljs.core.seq(arglist__49606);
return G__49605__delegate(args);
});
G__49605.cljs$core$IFn$_invoke$arity$variadic = G__49605__delegate;
return G__49605;
})()
;})(vec__49590,max_v,min_v,offset_v,offset_x,pos_y,money,show_steps,map__49589,map__49589__$1,brain,steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__49594 = null;var count__49595 = (0);var i__49596 = (0);while(true){
if((i__49596 < count__49595))
{var vec__49597 = cljs.core._nth.call(null,chunk__49594,i__49596);var idx = cljs.core.nth.call(null,vec__49597,(0),null);var curr = cljs.core.nth.call(null,vec__49597,(1),null);var pred__49598_49607 = cljs.core._EQ_;var expr__49599_49608 = curr;if(cljs.core.truth_(pred__49598_49607.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__49599_49608)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__49598_49607.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__49599_49608)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__49609 = seq__49593;
var G__49610 = chunk__49594;
var G__49611 = count__49595;
var G__49612 = (i__49596 + (1));
seq__49593 = G__49609;
chunk__49594 = G__49610;
count__49595 = G__49611;
i__49596 = G__49612;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49593);if(temp__4126__auto__)
{var seq__49593__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49593__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49593__$1);{
var G__49613 = cljs.core.chunk_rest.call(null,seq__49593__$1);
var G__49614 = c__4307__auto__;
var G__49615 = cljs.core.count.call(null,c__4307__auto__);
var G__49616 = (0);
seq__49593 = G__49613;
chunk__49594 = G__49614;
count__49595 = G__49615;
i__49596 = G__49616;
continue;
}
} else
{var vec__49601 = cljs.core.first.call(null,seq__49593__$1);var idx = cljs.core.nth.call(null,vec__49601,(0),null);var curr = cljs.core.nth.call(null,vec__49601,(1),null);var pred__49602_49617 = cljs.core._EQ_;var expr__49603_49618 = curr;if(cljs.core.truth_(pred__49602_49617.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__49603_49618)))
{ctx.fillText("O",(offset_x * idx),h);
} else
{if(cljs.core.truth_(pred__49602_49617.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__49603_49618)))
{ctx.fillText("X",(offset_x * idx),h);
} else
{}
}
{
var G__49619 = cljs.core.next.call(null,seq__49593__$1);
var G__49620 = null;
var G__49621 = (0);
var G__49622 = (0);
seq__49593 = G__49619;
chunk__49594 = G__49620;
count__49595 = G__49621;
i__49596 = G__49622;
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
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__49630 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__49630,(0),null);var min_v = cljs.core.nth.call(null,vec__49630,(1),null);var offset_v = cljs.core.nth.call(null,vec__49630,(2),null);var offset_x = cljs.core.nth.call(null,vec__49630,(3),null);var pos_y = cljs.core.nth.call(null,vec__49630,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__49631 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49630,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__49637__delegate = function (args){return args;
};
var G__49637 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49637__delegate.call(this,args);};
G__49637.cljs$lang$maxFixedArity = 0;
G__49637.cljs$lang$applyTo = (function (arglist__49638){
var args = cljs.core.seq(arglist__49638);
return G__49637__delegate(args);
});
G__49637.cljs$core$IFn$_invoke$arity$variadic = G__49637__delegate;
return G__49637;
})()
;})(vec__49630,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__49632 = null;var count__49633 = (0);var i__49634 = (0);while(true){
if((i__49634 < count__49633))
{var vec__49635 = cljs.core._nth.call(null,chunk__49632,i__49634);var idx = cljs.core.nth.call(null,vec__49635,(0),null);var prev = cljs.core.nth.call(null,vec__49635,(1),null);var curr = cljs.core.nth.call(null,vec__49635,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__49639 = seq__49631;
var G__49640 = chunk__49632;
var G__49641 = count__49633;
var G__49642 = (i__49634 + (1));
seq__49631 = G__49639;
chunk__49632 = G__49640;
count__49633 = G__49641;
i__49634 = G__49642;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49631);if(temp__4126__auto__)
{var seq__49631__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49631__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49631__$1);{
var G__49643 = cljs.core.chunk_rest.call(null,seq__49631__$1);
var G__49644 = c__4307__auto__;
var G__49645 = cljs.core.count.call(null,c__4307__auto__);
var G__49646 = (0);
seq__49631 = G__49643;
chunk__49632 = G__49644;
count__49633 = G__49645;
i__49634 = G__49646;
continue;
}
} else
{var vec__49636 = cljs.core.first.call(null,seq__49631__$1);var idx = cljs.core.nth.call(null,vec__49636,(0),null);var prev = cljs.core.nth.call(null,vec__49636,(1),null);var curr = cljs.core.nth.call(null,vec__49636,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__49647 = cljs.core.next.call(null,seq__49631__$1);
var G__49648 = null;
var G__49649 = (0);
var G__49650 = (0);
seq__49631 = G__49647;
chunk__49632 = G__49648;
count__49633 = G__49649;
i__49634 = G__49650;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__49660 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__49660,(0),null);var min_v = cljs.core.nth.call(null,vec__49660,(1),null);var offset_v = cljs.core.nth.call(null,vec__49660,(2),null);var offset_x = cljs.core.nth.call(null,vec__49660,(3),null);var pos_y = cljs.core.nth.call(null,vec__49660,(4),null);var seq__49661 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__49660,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__49669__delegate = function (args){return args;
};
var G__49669 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49669__delegate.call(this,args);};
G__49669.cljs$lang$maxFixedArity = 0;
G__49669.cljs$lang$applyTo = (function (arglist__49670){
var args = cljs.core.seq(arglist__49670);
return G__49669__delegate(args);
});
G__49669.cljs$core$IFn$_invoke$arity$variadic = G__49669__delegate;
return G__49669;
})()
;})(vec__49660,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__49662 = null;var count__49663 = (0);var i__49664 = (0);while(true){
if((i__49664 < count__49663))
{var vec__49665 = cljs.core._nth.call(null,chunk__49662,i__49664);var idx = cljs.core.nth.call(null,vec__49665,(0),null);var vec__49666 = cljs.core.nth.call(null,vec__49665,(1),null);var start = cljs.core.nth.call(null,vec__49666,(0),null);var top = cljs.core.nth.call(null,vec__49666,(1),null);var bottom = cljs.core.nth.call(null,vec__49666,(2),null);var end = cljs.core.nth.call(null,vec__49666,(3),null);(ctx["strokeStyle"] = "black");
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
var G__49671 = seq__49661;
var G__49672 = chunk__49662;
var G__49673 = count__49663;
var G__49674 = (i__49664 + (1));
seq__49661 = G__49671;
chunk__49662 = G__49672;
count__49663 = G__49673;
i__49664 = G__49674;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49661);if(temp__4126__auto__)
{var seq__49661__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49661__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__49661__$1);{
var G__49675 = cljs.core.chunk_rest.call(null,seq__49661__$1);
var G__49676 = c__4307__auto__;
var G__49677 = cljs.core.count.call(null,c__4307__auto__);
var G__49678 = (0);
seq__49661 = G__49675;
chunk__49662 = G__49676;
count__49663 = G__49677;
i__49664 = G__49678;
continue;
}
} else
{var vec__49667 = cljs.core.first.call(null,seq__49661__$1);var idx = cljs.core.nth.call(null,vec__49667,(0),null);var vec__49668 = cljs.core.nth.call(null,vec__49667,(1),null);var start = cljs.core.nth.call(null,vec__49668,(0),null);var top = cljs.core.nth.call(null,vec__49668,(1),null);var bottom = cljs.core.nth.call(null,vec__49668,(2),null);var end = cljs.core.nth.call(null,vec__49668,(3),null);(ctx["strokeStyle"] = "black");
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
var G__49679 = cljs.core.next.call(null,seq__49661__$1);
var G__49680 = null;
var G__49681 = (0);
var G__49682 = (0);
seq__49661 = G__49679;
chunk__49662 = G__49680;
count__49663 = G__49681;
i__49664 = G__49682;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__49690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__49690,(0),null);var h = cljs.core.nth.call(null,vec__49690,(1),null);return ((function (ctx,vec__49690,w,h){
return (function (p__49691){var map__49692 = p__49691;var map__49692__$1 = ((cljs.core.seq_QMARK_.call(null,map__49692))?cljs.core.apply.call(null,cljs.core.hash_map,map__49692):map__49692);var info = cljs.core.get.call(null,map__49692__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__49692__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var brain = cljs.core.get.call(null,map__49692__$1,new cljs.core.Keyword(null,"brain","brain",428499577));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__49693_49697 = cljs.core.seq.call(null,avgs);var chunk__49694_49698 = null;var count__49695_49699 = (0);var i__49696_49700 = (0);while(true){
if((i__49696_49700 < count__49695_49699))
{var avg_49701 = cljs.core._nth.call(null,chunk__49694_49698,i__49696_49700);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_49701);
{
var G__49702 = seq__49693_49697;
var G__49703 = chunk__49694_49698;
var G__49704 = count__49695_49699;
var G__49705 = (i__49696_49700 + (1));
seq__49693_49697 = G__49702;
chunk__49694_49698 = G__49703;
count__49695_49699 = G__49704;
i__49696_49700 = G__49705;
continue;
}
} else
{var temp__4126__auto___49706 = cljs.core.seq.call(null,seq__49693_49697);if(temp__4126__auto___49706)
{var seq__49693_49707__$1 = temp__4126__auto___49706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49693_49707__$1))
{var c__4307__auto___49708 = cljs.core.chunk_first.call(null,seq__49693_49707__$1);{
var G__49709 = cljs.core.chunk_rest.call(null,seq__49693_49707__$1);
var G__49710 = c__4307__auto___49708;
var G__49711 = cljs.core.count.call(null,c__4307__auto___49708);
var G__49712 = (0);
seq__49693_49697 = G__49709;
chunk__49694_49698 = G__49710;
count__49695_49699 = G__49711;
i__49696_49700 = G__49712;
continue;
}
} else
{var avg_49713 = cljs.core.first.call(null,seq__49693_49707__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_49713);
{
var G__49714 = cljs.core.next.call(null,seq__49693_49707__$1);
var G__49715 = null;
var G__49716 = (0);
var G__49717 = (0);
seq__49693_49697 = G__49714;
chunk__49694_49698 = G__49715;
count__49695_49699 = G__49716;
i__49696_49700 = G__49717;
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
;})(ctx,vec__49690,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__49720,r){var vec__49721 = p__49720;var la = cljs.core.nth.call(null,vec__49721,(0),null);var _ = cljs.core.nthnext.call(null,vec__49721,(1));var all = vec__49721;return cljs.core.cons.call(null,(la + (la * (r - (up_rate / (1))))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){if(cljs.core._EQ_.call(null,cnt,(1)))
{return cljs.core.map.call(null,(function (p1__49722_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__49722_SHARP_) / cljs.core.count.call(null,p1__49722_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__49728){var vec__49729 = p__49728;var s = cljs.core.nth.call(null,vec__49729,(0),null);var t = cljs.core.nth.call(null,vec__49729,(1),null);var b = cljs.core.nth.call(null,vec__49729,(2),null);var e = cljs.core.nth.call(null,vec__49729,(3),null);return e;
}),kline)));
} else
{return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__49723_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__49723_SHARP_) / cljs.core.count.call(null,p1__49723_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__49730){var vec__49731 = p__49730;var s = cljs.core.nth.call(null,vec__49731,(0),null);var t = cljs.core.nth.call(null,vec__49731,(1),null);var b = cljs.core.nth.call(null,vec__49731,(2),null);var e = cljs.core.nth.call(null,vec__49731,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
}
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__49733 = line;var start = cljs.core.nth.call(null,vec__49733,(0),null);var top = cljs.core.nth.call(null,vec__49733,(1),null);var bottom = cljs.core.nth.call(null,vec__49733,(2),null);var end = cljs.core.nth.call(null,vec__49733,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
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
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__49734){var vec__49735 = p__49734;var start_price = cljs.core.nth.call(null,vec__49735,(0),null);var _ = cljs.core.nth.call(null,vec__49735,(1),null);var ___$1 = cljs.core.nth.call(null,vec__49735,(2),null);var ___$2 = cljs.core.nth.call(null,vec__49735,(3),null);var line = vec__49735;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,info){return cljs.core.merge.call(null,test.stock2.prepare.call(null,null,info),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.list(cljs.core.list(cljs.core.list(3.0309727609504122,0.8958129837134047,1.5035815277093234,0.9456629358188376,1.3576705137689733,1.2631671445866242),cljs.core.list(-0.31085424118702176,0.9340874822881315,0.5655820779573415,0.7585836548894886,0.06611942477303065,0.7940467160731797),cljs.core.list(2.850307140147388,1.0756956641941802,1.5538502140350114,0.7274314323819675,1.5567211797840368,0.729486094825665),cljs.core.list(2.2728224695552925,1.2083236755399938,1.0223688933595008,0.7836758956375489,1.054595369712162,0.5593937540954879),cljs.core.list(3.0218162878485093,1.0503652785565414,1.604135048169243,1.2388330537952215,1.221090407169956,0.8350244798358218)),cljs.core.list(cljs.core.list(5.301581267749204,3.3609868593366343,-0.7394149388296283,3.0376961047533566,2.256700046977792,3.389521210235661)))], null));
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"ann1","ann1",-999246990),(function (type,p__49736,line){var map__49737 = p__49736;var map__49737__$1 = ((cljs.core.seq_QMARK_.call(null,map__49737))?cljs.core.apply.call(null,cljs.core.hash_map,map__49737):map__49737);var brain = map__49737__$1;var ws = cljs.core.get.call(null,map__49737__$1,new cljs.core.Keyword(null,"ws","ws",86841443));var info = cljs.core.get.call(null,map__49737__$1,new cljs.core.Keyword(null,"info","info",-317069002));var lines = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,line),info);var recent_lines = cljs.core.take_last.call(null,(5),lines);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,recent_lines),(5)))
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
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__49744){var vec__49745 = p__49744;var act = cljs.core.nth.call(null,vec__49745,(0),null);var vec__49746 = cljs.core.nth.call(null,vec__49745,(1),null);var start_price = cljs.core.nth.call(null,vec__49746,(0),null);var _ = cljs.core.nthnext.call(null,vec__49746,(1));var line = vec__49746;var step = vec__49745;var pred__49747 = cljs.core._EQ_;var expr__49748 = act;if(cljs.core.truth_(pred__49747.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__49748)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__49747.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__49748)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (((5) * (4)) * (12));var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var avg1 = test.stock2.average.call(null,info,(1));var map__49751 = test.stock2.play.call(null,new cljs.core.Keyword(null,"ann1","ann1",-999246990),info);var map__49751__$1 = ((cljs.core.seq_QMARK_.call(null,map__49751))?cljs.core.apply.call(null,cljs.core.hash_map,map__49751):map__49751);var brain = map__49751__$1;var step = cljs.core.get.call(null,map__49751__$1,new cljs.core.Keyword(null,"step","step",1288888124));test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg1], null)], null));
return null;
});
test.stock2.test_play.call(null);
