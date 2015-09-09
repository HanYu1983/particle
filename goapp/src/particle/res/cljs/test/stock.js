// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ai.ann');
goog.require('ai.ann');
goog.require('cljs.core.async');
test.stock.k_line_count = (100);
test.stock.buy_rate = 0.5;
test.stock.start_money = (100000);
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__46731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__46731,(0),null);var h = cljs.core.nth.call(null,vec__46731,(1),null);return ((function (ctx,vec__46731,w,h){
return (function (curve,avg,avg2,vs,err,money){var max_v = cljs.core.apply.call(null,cljs.core.max,curve);var factor = ((1) / max_v);var xoffset = (w / cljs.core.count.call(null,curve));var vs__$1 = cljs.core.apply.call(null,cljs.core.conj,vs,cljs.core.take.call(null,(5),cljs.core.repeat.call(null,(0))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((0),(h * 0.5));
ctx.lineTo(w,(h * 0.5));
ctx.moveTo((0),(h * 0.25));
ctx.lineTo(w,(h * 0.25));
ctx.moveTo((0),(h * 0.75));
ctx.lineTo(w,(h * 0.75));
ctx.moveTo((0),(h * ((1) - test.stock.buy_rate)));
ctx.lineTo(w,(h * ((1) - test.stock.buy_rate)));
ctx.stroke();
var seq__46732_46750 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__46731,w,h){
return (function() { 
var G__46754__delegate = function (args){return args;
};
var G__46754 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46754__delegate.call(this,args);};
G__46754.cljs$lang$maxFixedArity = 0;
G__46754.cljs$lang$applyTo = (function (arglist__46755){
var args = cljs.core.seq(arglist__46755);
return G__46754__delegate(args);
});
G__46754.cljs$core$IFn$_invoke$arity$variadic = G__46754__delegate;
return G__46754;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__46731,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__46733_46751 = null;var count__46734_46752 = (0);var i__46735_46753 = (0);while(true){
if((i__46735_46753 < count__46734_46752))
{var vec__46736_46756 = cljs.core._nth.call(null,chunk__46733_46751,i__46735_46753);var idx_46757 = cljs.core.nth.call(null,vec__46736_46756,(0),null);var prev_46758 = cljs.core.nth.call(null,vec__46736_46756,(1),null);var curr_46759 = cljs.core.nth.call(null,vec__46736_46756,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_46757),(h - ((prev_46758 * factor) * h)));
ctx.lineTo((xoffset * (idx_46757 + (1))),(h - ((curr_46759 * factor) * h)));
ctx.stroke();
{
var G__46760 = seq__46732_46750;
var G__46761 = chunk__46733_46751;
var G__46762 = count__46734_46752;
var G__46763 = (i__46735_46753 + (1));
seq__46732_46750 = G__46760;
chunk__46733_46751 = G__46761;
count__46734_46752 = G__46762;
i__46735_46753 = G__46763;
continue;
}
} else
{var temp__4126__auto___46764 = cljs.core.seq.call(null,seq__46732_46750);if(temp__4126__auto___46764)
{var seq__46732_46765__$1 = temp__4126__auto___46764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46732_46765__$1))
{var c__4307__auto___46766 = cljs.core.chunk_first.call(null,seq__46732_46765__$1);{
var G__46767 = cljs.core.chunk_rest.call(null,seq__46732_46765__$1);
var G__46768 = c__4307__auto___46766;
var G__46769 = cljs.core.count.call(null,c__4307__auto___46766);
var G__46770 = (0);
seq__46732_46750 = G__46767;
chunk__46733_46751 = G__46768;
count__46734_46752 = G__46769;
i__46735_46753 = G__46770;
continue;
}
} else
{var vec__46737_46771 = cljs.core.first.call(null,seq__46732_46765__$1);var idx_46772 = cljs.core.nth.call(null,vec__46737_46771,(0),null);var prev_46773 = cljs.core.nth.call(null,vec__46737_46771,(1),null);var curr_46774 = cljs.core.nth.call(null,vec__46737_46771,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_46772),(h - ((prev_46773 * factor) * h)));
ctx.lineTo((xoffset * (idx_46772 + (1))),(h - ((curr_46774 * factor) * h)));
ctx.stroke();
{
var G__46775 = cljs.core.next.call(null,seq__46732_46765__$1);
var G__46776 = null;
var G__46777 = (0);
var G__46778 = (0);
seq__46732_46750 = G__46775;
chunk__46733_46751 = G__46776;
count__46734_46752 = G__46777;
i__46735_46753 = G__46778;
continue;
}
}
} else
{}
}
break;
}
var seq__46738_46779 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__46731,w,h){
return (function() { 
var G__46783__delegate = function (args){return args;
};
var G__46783 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46783__delegate.call(this,args);};
G__46783.cljs$lang$maxFixedArity = 0;
G__46783.cljs$lang$applyTo = (function (arglist__46784){
var args = cljs.core.seq(arglist__46784);
return G__46783__delegate(args);
});
G__46783.cljs$core$IFn$_invoke$arity$variadic = G__46783__delegate;
return G__46783;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__46731,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__46739_46780 = null;var count__46740_46781 = (0);var i__46741_46782 = (0);while(true){
if((i__46741_46782 < count__46740_46781))
{var vec__46742_46785 = cljs.core._nth.call(null,chunk__46739_46780,i__46741_46782);var idx_46786 = cljs.core.nth.call(null,vec__46742_46785,(0),null);var prev_46787 = cljs.core.nth.call(null,vec__46742_46785,(1),null);var curr_46788 = cljs.core.nth.call(null,vec__46742_46785,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_46786),(h - ((prev_46787 * factor) * h)));
ctx.lineTo((xoffset * (idx_46786 + (1))),(h - ((curr_46788 * factor) * h)));
ctx.stroke();
{
var G__46789 = seq__46738_46779;
var G__46790 = chunk__46739_46780;
var G__46791 = count__46740_46781;
var G__46792 = (i__46741_46782 + (1));
seq__46738_46779 = G__46789;
chunk__46739_46780 = G__46790;
count__46740_46781 = G__46791;
i__46741_46782 = G__46792;
continue;
}
} else
{var temp__4126__auto___46793 = cljs.core.seq.call(null,seq__46738_46779);if(temp__4126__auto___46793)
{var seq__46738_46794__$1 = temp__4126__auto___46793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46738_46794__$1))
{var c__4307__auto___46795 = cljs.core.chunk_first.call(null,seq__46738_46794__$1);{
var G__46796 = cljs.core.chunk_rest.call(null,seq__46738_46794__$1);
var G__46797 = c__4307__auto___46795;
var G__46798 = cljs.core.count.call(null,c__4307__auto___46795);
var G__46799 = (0);
seq__46738_46779 = G__46796;
chunk__46739_46780 = G__46797;
count__46740_46781 = G__46798;
i__46741_46782 = G__46799;
continue;
}
} else
{var vec__46743_46800 = cljs.core.first.call(null,seq__46738_46794__$1);var idx_46801 = cljs.core.nth.call(null,vec__46743_46800,(0),null);var prev_46802 = cljs.core.nth.call(null,vec__46743_46800,(1),null);var curr_46803 = cljs.core.nth.call(null,vec__46743_46800,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_46801),(h - ((prev_46802 * factor) * h)));
ctx.lineTo((xoffset * (idx_46801 + (1))),(h - ((curr_46803 * factor) * h)));
ctx.stroke();
{
var G__46804 = cljs.core.next.call(null,seq__46738_46794__$1);
var G__46805 = null;
var G__46806 = (0);
var G__46807 = (0);
seq__46738_46779 = G__46804;
chunk__46739_46780 = G__46805;
count__46740_46781 = G__46806;
i__46741_46782 = G__46807;
continue;
}
}
} else
{}
}
break;
}
var seq__46744_46808 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__46731,w,h){
return (function() { 
var G__46812__delegate = function (args){return args;
};
var G__46812 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46812__delegate.call(this,args);};
G__46812.cljs$lang$maxFixedArity = 0;
G__46812.cljs$lang$applyTo = (function (arglist__46813){
var args = cljs.core.seq(arglist__46813);
return G__46812__delegate(args);
});
G__46812.cljs$core$IFn$_invoke$arity$variadic = G__46812__delegate;
return G__46812;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__46731,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__46745_46809 = null;var count__46746_46810 = (0);var i__46747_46811 = (0);while(true){
if((i__46747_46811 < count__46746_46810))
{var vec__46748_46814 = cljs.core._nth.call(null,chunk__46745_46809,i__46747_46811);var idx_46815 = cljs.core.nth.call(null,vec__46748_46814,(0),null);var prev_46816 = cljs.core.nth.call(null,vec__46748_46814,(1),null);var curr_46817 = cljs.core.nth.call(null,vec__46748_46814,(2),null);var v_46818 = cljs.core.nth.call(null,vec__46748_46814,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_46815),(h - ((prev_46816 * factor) * h)));
ctx.lineTo((xoffset * (idx_46815 + (1))),(h - ((curr_46817 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_46815)),h);
ctx.lineTo(((3) + (xoffset * idx_46815)),(h - (v_46818 * h)));
ctx.stroke();
{
var G__46819 = seq__46744_46808;
var G__46820 = chunk__46745_46809;
var G__46821 = count__46746_46810;
var G__46822 = (i__46747_46811 + (1));
seq__46744_46808 = G__46819;
chunk__46745_46809 = G__46820;
count__46746_46810 = G__46821;
i__46747_46811 = G__46822;
continue;
}
} else
{var temp__4126__auto___46823 = cljs.core.seq.call(null,seq__46744_46808);if(temp__4126__auto___46823)
{var seq__46744_46824__$1 = temp__4126__auto___46823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46744_46824__$1))
{var c__4307__auto___46825 = cljs.core.chunk_first.call(null,seq__46744_46824__$1);{
var G__46826 = cljs.core.chunk_rest.call(null,seq__46744_46824__$1);
var G__46827 = c__4307__auto___46825;
var G__46828 = cljs.core.count.call(null,c__4307__auto___46825);
var G__46829 = (0);
seq__46744_46808 = G__46826;
chunk__46745_46809 = G__46827;
count__46746_46810 = G__46828;
i__46747_46811 = G__46829;
continue;
}
} else
{var vec__46749_46830 = cljs.core.first.call(null,seq__46744_46824__$1);var idx_46831 = cljs.core.nth.call(null,vec__46749_46830,(0),null);var prev_46832 = cljs.core.nth.call(null,vec__46749_46830,(1),null);var curr_46833 = cljs.core.nth.call(null,vec__46749_46830,(2),null);var v_46834 = cljs.core.nth.call(null,vec__46749_46830,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_46831),(h - ((prev_46832 * factor) * h)));
ctx.lineTo((xoffset * (idx_46831 + (1))),(h - ((curr_46833 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_46831)),h);
ctx.lineTo(((3) + (xoffset * idx_46831)),(h - (v_46834 * h)));
ctx.stroke();
{
var G__46835 = cljs.core.next.call(null,seq__46744_46824__$1);
var G__46836 = null;
var G__46837 = (0);
var G__46838 = (0);
seq__46744_46808 = G__46835;
chunk__46745_46809 = G__46836;
count__46746_46810 = G__46837;
i__46747_46811 = G__46838;
continue;
}
}
} else
{}
}
break;
}
(ctx["fillStyle"] = "#000000");
ctx.fillText(("err:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)),(100),(20));
ctx.fillText(("money:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(money)),(100),(40));
ctx.fillText(("rate:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((money - test.stock.start_money) / test.stock.start_money))),(100),(60));
return null;
});
;})(ctx,vec__46731,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__46839_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__46839_SHARP_) / cljs.core.count.call(null,p1__46839_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__46845 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__46846,p__46847){var vec__46848 = p__46846;var money__$1 = cljs.core.nth.call(null,vec__46848,(0),null);var isBuy = cljs.core.nth.call(null,vec__46848,(1),null);var vec__46849 = p__46847;var price = cljs.core.nth.call(null,vec__46849,(0),null);var rate = cljs.core.nth.call(null,vec__46849,(1),null);if(cljs.core.truth_(isBuy))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(money__$1 + (price * buy_count)),false], null);
} else
{if((rate > test.stock.buy_rate))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(money__$1 - (price * buy_count)),true], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [money__$1,false], null);
}
}
});})(buy_count,curve__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [money,false], null),cljs.core.map.call(null,((function (buy_count,curve__$1){
return (function() { 
var G__46850__delegate = function (args){return args;
};
var G__46850 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46850__delegate.call(this,args);};
G__46850.cljs$lang$maxFixedArity = 0;
G__46850.cljs$lang$applyTo = (function (arglist__46851){
var args = cljs.core.seq(arglist__46851);
return G__46850__delegate(args);
});
G__46850.cljs$core$IFn$_invoke$arity$variadic = G__46850__delegate;
return G__46850;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__46845,(0),null);var isBuy = cljs.core.nth.call(null,vec__46845,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.07))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__47002__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__47002 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47002__delegate.call(this,args);};
G__47002.cljs$lang$maxFixedArity = 0;
G__47002.cljs$lang$applyTo = (function (arglist__47003){
var args = cljs.core.seq(arglist__47003);
return G__47002__delegate(args);
});
G__47002.cljs$core$IFn$_invoke$arity$variadic = G__47002__delegate;
return G__47002;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20,0.07),test.stock.convert_rates.call(null,avg10,0.07),test.stock.convert_rates.call(null,curve,0.07));var init_weights = ai.ann.RandWeights.call(null,(5),(5),(1));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6202__auto___47004 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___47004,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___47004,curve,avg10,avg20,rates,init_weights,info){
return (function (state_46954){var state_val_46955 = (state_46954[(1)]);if((state_val_46955 === (7)))
{var inst_46944 = (state_46954[(2)]);var state_46954__$1 = (function (){var statearr_46956 = state_46954;(statearr_46956[(7)] = inst_46944);
return statearr_46956;
})();var statearr_46957_47005 = state_46954__$1;(statearr_46957_47005[(2)] = null);
(statearr_46957_47005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46955 === (6)))
{var inst_46950 = (state_46954[(2)]);var state_46954__$1 = state_46954;var statearr_46958_47006 = state_46954__$1;(statearr_46958_47006[(2)] = inst_46950);
(statearr_46958_47006[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46955 === (5)))
{var inst_46935 = (state_46954[(8)]);var inst_46947 = cljs.core.pr_str.call(null,inst_46935);var inst_46948 = console.log(inst_46947);var state_46954__$1 = state_46954;var statearr_46959_47007 = state_46954__$1;(statearr_46959_47007[(2)] = inst_46948);
(statearr_46959_47007[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46955 === (4)))
{var inst_46942 = cljs.core.async.timeout.call(null,(1));var state_46954__$1 = state_46954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46954__$1,(7),inst_46942);
} else
{if((state_val_46955 === (3)))
{var inst_46952 = (state_46954[(2)]);var state_46954__$1 = state_46954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46954__$1,inst_46952);
} else
{if((state_val_46955 === (2)))
{var inst_46935 = (state_46954[(8)]);var inst_46930 = cljs.core.deref.call(null,info);var inst_46931 = cljs.core.nth.call(null,inst_46930,(0),null);var inst_46932 = cljs.core.nth.call(null,inst_46930,(1),null);var inst_46933 = cljs.core.list(cljs.core.list(cljs.core.list(0.75,0.75,0.75,0.75,0.75),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.25,0.25,0.25,0.25,0.25),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.5)));var inst_46934 = ai.ann.Train.call(null,inst_46931,inst_46933,(1),(0));var inst_46935__$1 = cljs.core.nth.call(null,inst_46934,(0),null);var inst_46936 = cljs.core.nth.call(null,inst_46934,(1),null);var inst_46937 = [inst_46935__$1,inst_46936];var inst_46938 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_46937,null));var inst_46939 = cljs.core.reset_BANG_.call(null,info,inst_46938);var inst_46940 = (inst_46936 > 5.0E-4);var state_46954__$1 = (function (){var statearr_46960 = state_46954;(statearr_46960[(9)] = inst_46939);
(statearr_46960[(8)] = inst_46935__$1);
(statearr_46960[(10)] = inst_46932);
return statearr_46960;
})();if(cljs.core.truth_(inst_46940))
{var statearr_46961_47008 = state_46954__$1;(statearr_46961_47008[(1)] = (4));
} else
{var statearr_46962_47009 = state_46954__$1;(statearr_46962_47009[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46955 === (1)))
{var state_46954__$1 = state_46954;var statearr_46963_47010 = state_46954__$1;(statearr_46963_47010[(2)] = null);
(statearr_46963_47010[(1)] = (2));
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
});})(c__6202__auto___47004,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___47004,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_46967 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_46967[(0)] = state_machine__6188__auto__);
(statearr_46967[(1)] = (1));
return statearr_46967;
});
var state_machine__6188__auto____1 = (function (state_46954){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_46954);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e46968){if((e46968 instanceof Object))
{var ex__6191__auto__ = e46968;var statearr_46969_47011 = state_46954;(statearr_46969_47011[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47012 = state_46954;
state_46954 = G__47012;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_46954){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_46954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___47004,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_46970 = f__6203__auto__.call(null);(statearr_46970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___47004);
return statearr_46970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___47004,curve,avg10,avg20,rates,init_weights,info))
);
var c__6202__auto___47013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___47013,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___47013,curve,avg10,avg20,rates,init_weights,info){
return (function (state_46987){var state_val_46988 = (state_46987[(1)]);if((state_val_46988 === (4)))
{var inst_46971 = (state_46987[(7)]);var inst_46982 = (state_46987[(2)]);var tmp46989 = inst_46971;var inst_46971__$1 = tmp46989;var state_46987__$1 = (function (){var statearr_46990 = state_46987;(statearr_46990[(7)] = inst_46971__$1);
(statearr_46990[(8)] = inst_46982);
return statearr_46990;
})();var statearr_46991_47014 = state_46987__$1;(statearr_46991_47014[(2)] = null);
(statearr_46991_47014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46988 === (3)))
{var inst_46985 = (state_46987[(2)]);var state_46987__$1 = state_46987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46987__$1,inst_46985);
} else
{if((state_val_46988 === (2)))
{var inst_46971 = (state_46987[(7)]);var inst_46974 = cljs.core.deref.call(null,info);var inst_46975 = cljs.core.nth.call(null,inst_46974,(0),null);var inst_46976 = cljs.core.nth.call(null,inst_46974,(1),null);var inst_46977 = test.stock.test_it.call(null,rates,inst_46975);var inst_46978 = test.stock.calculateMoney.call(null,curve,inst_46977,test.stock.start_money);var inst_46979 = test.stock.draw.call(null,curve,avg10,avg20,inst_46977,inst_46976,inst_46978);var inst_46980 = cljs.core.async.timeout.call(null,inst_46971);var state_46987__$1 = (function (){var statearr_46992 = state_46987;(statearr_46992[(9)] = inst_46979);
return statearr_46992;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46987__$1,(4),inst_46980);
} else
{if((state_val_46988 === (1)))
{var inst_46971 = (1000);var state_46987__$1 = (function (){var statearr_46993 = state_46987;(statearr_46993[(7)] = inst_46971);
return statearr_46993;
})();var statearr_46994_47015 = state_46987__$1;(statearr_46994_47015[(2)] = null);
(statearr_46994_47015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___47013,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6187__auto__,c__6202__auto___47013,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_46998 = [null,null,null,null,null,null,null,null,null,null];(statearr_46998[(0)] = state_machine__6188__auto__);
(statearr_46998[(1)] = (1));
return statearr_46998;
});
var state_machine__6188__auto____1 = (function (state_46987){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_46987);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e46999){if((e46999 instanceof Object))
{var ex__6191__auto__ = e46999;var statearr_47000_47016 = state_46987;(statearr_47000_47016[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47017 = state_46987;
state_46987 = G__47017;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_46987){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_46987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___47013,curve,avg10,avg20,rates,init_weights,info))
})();var state__6204__auto__ = (function (){var statearr_47001 = f__6203__auto__.call(null);(statearr_47001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___47013);
return statearr_47001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___47013,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
