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
test.stock.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__14126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__14126,(0),null);var h = cljs.core.nth.call(null,vec__14126,(1),null);return ((function (ctx,vec__14126,w,h){
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
var seq__14127_14145 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__14126,w,h){
return (function() { 
var G__14149__delegate = function (args){return args;
};
var G__14149 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14149__delegate.call(this,args);};
G__14149.cljs$lang$maxFixedArity = 0;
G__14149.cljs$lang$applyTo = (function (arglist__14150){
var args = cljs.core.seq(arglist__14150);
return G__14149__delegate(args);
});
G__14149.cljs$core$IFn$_invoke$arity$variadic = G__14149__delegate;
return G__14149;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__14126,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg)),avg,cljs.core.drop.call(null,(1),avg)));var chunk__14128_14146 = null;var count__14129_14147 = (0);var i__14130_14148 = (0);while(true){
if((i__14130_14148 < count__14129_14147))
{var vec__14131_14151 = cljs.core._nth.call(null,chunk__14128_14146,i__14130_14148);var idx_14152 = cljs.core.nth.call(null,vec__14131_14151,(0),null);var prev_14153 = cljs.core.nth.call(null,vec__14131_14151,(1),null);var curr_14154 = cljs.core.nth.call(null,vec__14131_14151,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_14152),(h - ((prev_14153 * factor) * h)));
ctx.lineTo((xoffset * (idx_14152 + (1))),(h - ((curr_14154 * factor) * h)));
ctx.stroke();
{
var G__14155 = seq__14127_14145;
var G__14156 = chunk__14128_14146;
var G__14157 = count__14129_14147;
var G__14158 = (i__14130_14148 + (1));
seq__14127_14145 = G__14155;
chunk__14128_14146 = G__14156;
count__14129_14147 = G__14157;
i__14130_14148 = G__14158;
continue;
}
} else
{var temp__4126__auto___14159 = cljs.core.seq.call(null,seq__14127_14145);if(temp__4126__auto___14159)
{var seq__14127_14160__$1 = temp__4126__auto___14159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14127_14160__$1))
{var c__4307__auto___14161 = cljs.core.chunk_first.call(null,seq__14127_14160__$1);{
var G__14162 = cljs.core.chunk_rest.call(null,seq__14127_14160__$1);
var G__14163 = c__4307__auto___14161;
var G__14164 = cljs.core.count.call(null,c__4307__auto___14161);
var G__14165 = (0);
seq__14127_14145 = G__14162;
chunk__14128_14146 = G__14163;
count__14129_14147 = G__14164;
i__14130_14148 = G__14165;
continue;
}
} else
{var vec__14132_14166 = cljs.core.first.call(null,seq__14127_14160__$1);var idx_14167 = cljs.core.nth.call(null,vec__14132_14166,(0),null);var prev_14168 = cljs.core.nth.call(null,vec__14132_14166,(1),null);var curr_14169 = cljs.core.nth.call(null,vec__14132_14166,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#aaaaaa");
ctx.moveTo((xoffset * idx_14167),(h - ((prev_14168 * factor) * h)));
ctx.lineTo((xoffset * (idx_14167 + (1))),(h - ((curr_14169 * factor) * h)));
ctx.stroke();
{
var G__14170 = cljs.core.next.call(null,seq__14127_14160__$1);
var G__14171 = null;
var G__14172 = (0);
var G__14173 = (0);
seq__14127_14145 = G__14170;
chunk__14128_14146 = G__14171;
count__14129_14147 = G__14172;
i__14130_14148 = G__14173;
continue;
}
}
} else
{}
}
break;
}
var seq__14133_14174 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__14126,w,h){
return (function() { 
var G__14178__delegate = function (args){return args;
};
var G__14178 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14178__delegate.call(this,args);};
G__14178.cljs$lang$maxFixedArity = 0;
G__14178.cljs$lang$applyTo = (function (arglist__14179){
var args = cljs.core.seq(arglist__14179);
return G__14178__delegate(args);
});
G__14178.cljs$core$IFn$_invoke$arity$variadic = G__14178__delegate;
return G__14178;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__14126,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,avg2)),avg2,cljs.core.drop.call(null,(1),avg2)));var chunk__14134_14175 = null;var count__14135_14176 = (0);var i__14136_14177 = (0);while(true){
if((i__14136_14177 < count__14135_14176))
{var vec__14137_14180 = cljs.core._nth.call(null,chunk__14134_14175,i__14136_14177);var idx_14181 = cljs.core.nth.call(null,vec__14137_14180,(0),null);var prev_14182 = cljs.core.nth.call(null,vec__14137_14180,(1),null);var curr_14183 = cljs.core.nth.call(null,vec__14137_14180,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_14181),(h - ((prev_14182 * factor) * h)));
ctx.lineTo((xoffset * (idx_14181 + (1))),(h - ((curr_14183 * factor) * h)));
ctx.stroke();
{
var G__14184 = seq__14133_14174;
var G__14185 = chunk__14134_14175;
var G__14186 = count__14135_14176;
var G__14187 = (i__14136_14177 + (1));
seq__14133_14174 = G__14184;
chunk__14134_14175 = G__14185;
count__14135_14176 = G__14186;
i__14136_14177 = G__14187;
continue;
}
} else
{var temp__4126__auto___14188 = cljs.core.seq.call(null,seq__14133_14174);if(temp__4126__auto___14188)
{var seq__14133_14189__$1 = temp__4126__auto___14188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14133_14189__$1))
{var c__4307__auto___14190 = cljs.core.chunk_first.call(null,seq__14133_14189__$1);{
var G__14191 = cljs.core.chunk_rest.call(null,seq__14133_14189__$1);
var G__14192 = c__4307__auto___14190;
var G__14193 = cljs.core.count.call(null,c__4307__auto___14190);
var G__14194 = (0);
seq__14133_14174 = G__14191;
chunk__14134_14175 = G__14192;
count__14135_14176 = G__14193;
i__14136_14177 = G__14194;
continue;
}
} else
{var vec__14138_14195 = cljs.core.first.call(null,seq__14133_14189__$1);var idx_14196 = cljs.core.nth.call(null,vec__14138_14195,(0),null);var prev_14197 = cljs.core.nth.call(null,vec__14138_14195,(1),null);var curr_14198 = cljs.core.nth.call(null,vec__14138_14195,(2),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#bbbbbb");
ctx.moveTo((xoffset * idx_14196),(h - ((prev_14197 * factor) * h)));
ctx.lineTo((xoffset * (idx_14196 + (1))),(h - ((curr_14198 * factor) * h)));
ctx.stroke();
{
var G__14199 = cljs.core.next.call(null,seq__14133_14189__$1);
var G__14200 = null;
var G__14201 = (0);
var G__14202 = (0);
seq__14133_14174 = G__14199;
chunk__14134_14175 = G__14200;
count__14135_14176 = G__14201;
i__14136_14177 = G__14202;
continue;
}
}
} else
{}
}
break;
}
var seq__14139_14203 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (max_v,factor,xoffset,vs__$1,ctx,vec__14126,w,h){
return (function() { 
var G__14207__delegate = function (args){return args;
};
var G__14207 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14207__delegate.call(this,args);};
G__14207.cljs$lang$maxFixedArity = 0;
G__14207.cljs$lang$applyTo = (function (arglist__14208){
var args = cljs.core.seq(arglist__14208);
return G__14207__delegate(args);
});
G__14207.cljs$core$IFn$_invoke$arity$variadic = G__14207__delegate;
return G__14207;
})()
;})(max_v,factor,xoffset,vs__$1,ctx,vec__14126,w,h))
,cljs.core.range.call(null,cljs.core.count.call(null,curve)),curve,cljs.core.drop.call(null,(1),curve),vs__$1));var chunk__14140_14204 = null;var count__14141_14205 = (0);var i__14142_14206 = (0);while(true){
if((i__14142_14206 < count__14141_14205))
{var vec__14143_14209 = cljs.core._nth.call(null,chunk__14140_14204,i__14142_14206);var idx_14210 = cljs.core.nth.call(null,vec__14143_14209,(0),null);var prev_14211 = cljs.core.nth.call(null,vec__14143_14209,(1),null);var curr_14212 = cljs.core.nth.call(null,vec__14143_14209,(2),null);var v_14213 = cljs.core.nth.call(null,vec__14143_14209,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_14210),(h - ((prev_14211 * factor) * h)));
ctx.lineTo((xoffset * (idx_14210 + (1))),(h - ((curr_14212 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_14210)),h);
ctx.lineTo(((3) + (xoffset * idx_14210)),(h - (v_14213 * h)));
ctx.stroke();
{
var G__14214 = seq__14139_14203;
var G__14215 = chunk__14140_14204;
var G__14216 = count__14141_14205;
var G__14217 = (i__14142_14206 + (1));
seq__14139_14203 = G__14214;
chunk__14140_14204 = G__14215;
count__14141_14205 = G__14216;
i__14142_14206 = G__14217;
continue;
}
} else
{var temp__4126__auto___14218 = cljs.core.seq.call(null,seq__14139_14203);if(temp__4126__auto___14218)
{var seq__14139_14219__$1 = temp__4126__auto___14218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14139_14219__$1))
{var c__4307__auto___14220 = cljs.core.chunk_first.call(null,seq__14139_14219__$1);{
var G__14221 = cljs.core.chunk_rest.call(null,seq__14139_14219__$1);
var G__14222 = c__4307__auto___14220;
var G__14223 = cljs.core.count.call(null,c__4307__auto___14220);
var G__14224 = (0);
seq__14139_14203 = G__14221;
chunk__14140_14204 = G__14222;
count__14141_14205 = G__14223;
i__14142_14206 = G__14224;
continue;
}
} else
{var vec__14144_14225 = cljs.core.first.call(null,seq__14139_14219__$1);var idx_14226 = cljs.core.nth.call(null,vec__14144_14225,(0),null);var prev_14227 = cljs.core.nth.call(null,vec__14144_14225,(1),null);var curr_14228 = cljs.core.nth.call(null,vec__14144_14225,(2),null);var v_14229 = cljs.core.nth.call(null,vec__14144_14225,(3),null);ctx.beginPath();
(ctx["lineWidth"] = (2));
(ctx["strokeStyle"] = "#00ff00");
ctx.moveTo((xoffset * idx_14226),(h - ((prev_14227 * factor) * h)));
ctx.lineTo((xoffset * (idx_14226 + (1))),(h - ((curr_14228 * factor) * h)));
ctx.stroke();
ctx.beginPath();
(ctx["strokeStyle"] = "#ff0000");
ctx.moveTo(((3) + (xoffset * idx_14226)),h);
ctx.lineTo(((3) + (xoffset * idx_14226)),(h - (v_14229 * h)));
ctx.stroke();
{
var G__14230 = cljs.core.next.call(null,seq__14139_14219__$1);
var G__14231 = null;
var G__14232 = (0);
var G__14233 = (0);
seq__14139_14203 = G__14230;
chunk__14140_14204 = G__14231;
count__14141_14205 = G__14232;
i__14142_14206 = G__14233;
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
;})(ctx,vec__14126,w,h))
});
test.stock.draw = test.stock.draw.call(null,document.getElementById("canvas"));
test.stock.average = (function average(curve,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14234_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__14234_SHARP_) / cljs.core.count.call(null,p1__14234_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),curve)),cljs.core.take.call(null,cnt,cljs.core.repeat.call(null,(0))));
});
test.stock.convert_rates = (function convert_rates(curve,normalize){return cljs.core.map.call(null,(function (prev,curr){var v = (0.5 + (0.5 * (((1) / normalize) * (((1) / prev) * (curr - prev)))));return v;
}),curve,cljs.core.drop.call(null,(1),curve));
});
test.stock.test_it = (function test_it(rates,ws){var values = cljs.core.map.call(null,(function (input){return cljs.core.last.call(null,cljs.core.flatten.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
}),cljs.core.partition.call(null,(5),(1),rates));return values;
});
test.stock.calculateMoney = (function calculateMoney(curve,vs,money){var buy_count = ((money / (100)) | (0));var curve__$1 = cljs.core.drop.call(null,(5),curve);var vec__14240 = cljs.core.reduce.call(null,((function (buy_count,curve__$1){
return (function (p__14241,p__14242){var vec__14243 = p__14241;var money__$1 = cljs.core.nth.call(null,vec__14243,(0),null);var isBuy = cljs.core.nth.call(null,vec__14243,(1),null);var vec__14244 = p__14242;var price = cljs.core.nth.call(null,vec__14244,(0),null);var rate = cljs.core.nth.call(null,vec__14244,(1),null);if(cljs.core.truth_(isBuy))
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
var G__14245__delegate = function (args){return args;
};
var G__14245 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14245__delegate.call(this,args);};
G__14245.cljs$lang$maxFixedArity = 0;
G__14245.cljs$lang$applyTo = (function (arglist__14246){
var args = cljs.core.seq(arglist__14246);
return G__14245__delegate(args);
});
G__14245.cljs$core$IFn$_invoke$arity$variadic = G__14245__delegate;
return G__14245;
})()
;})(buy_count,curve__$1))
,curve__$1,vs));var money__$1 = cljs.core.nth.call(null,vec__14240,(0),null);var isBuy = cljs.core.nth.call(null,vec__14240,(1),null);if(cljs.core.truth_(isBuy))
{return (money__$1 + (cljs.core.last.call(null,curve__$1) * buy_count));
} else
{return money__$1;
}
});
test.stock.fast = (function fast(){var curve = cljs.core.reduce.call(null,(function (all,r){var la = (((cljs.core.count.call(null,all) > (0)))?cljs.core.first.call(null,all):(100));return cljs.core.cons.call(null,(la + (la * (r - 0.07))),all);
}),cljs.core.List.EMPTY,cljs.core.repeatedly.call(null,test.stock.k_line_count,(function (){return (cljs.core.rand.call(null) * 0.14);
})));var avg10 = test.stock.average.call(null,curve,(5));var avg20 = test.stock.average.call(null,curve,(10));var rates = cljs.core.map.call(null,((function (curve,avg10,avg20){
return (function() { 
var G__14397__delegate = function (args){return (cljs.core.apply.call(null,cljs.core._PLUS_,args) / cljs.core.count.call(null,args));
};
var G__14397 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14397__delegate.call(this,args);};
G__14397.cljs$lang$maxFixedArity = 0;
G__14397.cljs$lang$applyTo = (function (arglist__14398){
var args = cljs.core.seq(arglist__14398);
return G__14397__delegate(args);
});
G__14397.cljs$core$IFn$_invoke$arity$variadic = G__14397__delegate;
return G__14397;
})()
;})(curve,avg10,avg20))
,test.stock.convert_rates.call(null,avg20,0.07),test.stock.convert_rates.call(null,avg10,0.07),test.stock.convert_rates.call(null,curve,0.07));var init_weights = ai.ann.RandWeights.call(null,(5),(5),(1));var info = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_weights,(0)], null));var c__6203__auto___14399 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14399,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14399,curve,avg10,avg20,rates,init_weights,info){
return (function (state_14349){var state_val_14350 = (state_14349[(1)]);if((state_val_14350 === (7)))
{var inst_14339 = (state_14349[(2)]);var state_14349__$1 = (function (){var statearr_14351 = state_14349;(statearr_14351[(7)] = inst_14339);
return statearr_14351;
})();var statearr_14352_14400 = state_14349__$1;(statearr_14352_14400[(2)] = null);
(statearr_14352_14400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14350 === (6)))
{var inst_14345 = (state_14349[(2)]);var state_14349__$1 = state_14349;var statearr_14353_14401 = state_14349__$1;(statearr_14353_14401[(2)] = inst_14345);
(statearr_14353_14401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14350 === (5)))
{var inst_14330 = (state_14349[(8)]);var inst_14342 = cljs.core.pr_str.call(null,inst_14330);var inst_14343 = console.log(inst_14342);var state_14349__$1 = state_14349;var statearr_14354_14402 = state_14349__$1;(statearr_14354_14402[(2)] = inst_14343);
(statearr_14354_14402[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14350 === (4)))
{var inst_14337 = cljs.core.async.timeout.call(null,(1));var state_14349__$1 = state_14349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14349__$1,(7),inst_14337);
} else
{if((state_val_14350 === (3)))
{var inst_14347 = (state_14349[(2)]);var state_14349__$1 = state_14349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14349__$1,inst_14347);
} else
{if((state_val_14350 === (2)))
{var inst_14330 = (state_14349[(8)]);var inst_14325 = cljs.core.deref.call(null,info);var inst_14326 = cljs.core.nth.call(null,inst_14325,(0),null);var inst_14327 = cljs.core.nth.call(null,inst_14325,(1),null);var inst_14328 = cljs.core.list(cljs.core.list(cljs.core.list(0.75,0.75,0.75,0.75,0.75),cljs.core.list((1))),cljs.core.list(cljs.core.list(0.25,0.25,0.25,0.25,0.25),cljs.core.list((0))),cljs.core.list(cljs.core.list(0.5,0.5,0.5,0.5,0.5),cljs.core.list(0.5)));var inst_14329 = ai.ann.Train.call(null,inst_14326,inst_14328,(1),(0));var inst_14330__$1 = cljs.core.nth.call(null,inst_14329,(0),null);var inst_14331 = cljs.core.nth.call(null,inst_14329,(1),null);var inst_14332 = [inst_14330__$1,inst_14331];var inst_14333 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14332,null));var inst_14334 = cljs.core.reset_BANG_.call(null,info,inst_14333);var inst_14335 = (inst_14331 > 5.0E-4);var state_14349__$1 = (function (){var statearr_14355 = state_14349;(statearr_14355[(8)] = inst_14330__$1);
(statearr_14355[(9)] = inst_14327);
(statearr_14355[(10)] = inst_14334);
return statearr_14355;
})();if(cljs.core.truth_(inst_14335))
{var statearr_14356_14403 = state_14349__$1;(statearr_14356_14403[(1)] = (4));
} else
{var statearr_14357_14404 = state_14349__$1;(statearr_14357_14404[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14350 === (1)))
{var state_14349__$1 = state_14349;var statearr_14358_14405 = state_14349__$1;(statearr_14358_14405[(2)] = null);
(statearr_14358_14405[(1)] = (2));
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
});})(c__6203__auto___14399,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6188__auto__,c__6203__auto___14399,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14362 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14362[(0)] = state_machine__6189__auto__);
(statearr_14362[(1)] = (1));
return statearr_14362;
});
var state_machine__6189__auto____1 = (function (state_14349){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14363){if((e14363 instanceof Object))
{var ex__6192__auto__ = e14363;var statearr_14364_14406 = state_14349;(statearr_14364_14406[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14349);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14407 = state_14349;
state_14349 = G__14407;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14349){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14399,curve,avg10,avg20,rates,init_weights,info))
})();var state__6205__auto__ = (function (){var statearr_14365 = f__6204__auto__.call(null);(statearr_14365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14399);
return statearr_14365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14399,curve,avg10,avg20,rates,init_weights,info))
);
var c__6203__auto___14408 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14408,curve,avg10,avg20,rates,init_weights,info){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14408,curve,avg10,avg20,rates,init_weights,info){
return (function (state_14382){var state_val_14383 = (state_14382[(1)]);if((state_val_14383 === (4)))
{var inst_14366 = (state_14382[(7)]);var inst_14377 = (state_14382[(2)]);var tmp14384 = inst_14366;var inst_14366__$1 = tmp14384;var state_14382__$1 = (function (){var statearr_14385 = state_14382;(statearr_14385[(8)] = inst_14377);
(statearr_14385[(7)] = inst_14366__$1);
return statearr_14385;
})();var statearr_14386_14409 = state_14382__$1;(statearr_14386_14409[(2)] = null);
(statearr_14386_14409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14383 === (3)))
{var inst_14380 = (state_14382[(2)]);var state_14382__$1 = state_14382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14382__$1,inst_14380);
} else
{if((state_val_14383 === (2)))
{var inst_14366 = (state_14382[(7)]);var inst_14369 = cljs.core.deref.call(null,info);var inst_14370 = cljs.core.nth.call(null,inst_14369,(0),null);var inst_14371 = cljs.core.nth.call(null,inst_14369,(1),null);var inst_14372 = test.stock.test_it.call(null,rates,inst_14370);var inst_14373 = test.stock.calculateMoney.call(null,curve,inst_14372,test.stock.start_money);var inst_14374 = test.stock.draw.call(null,curve,avg10,avg20,inst_14372,inst_14371,inst_14373);var inst_14375 = cljs.core.async.timeout.call(null,inst_14366);var state_14382__$1 = (function (){var statearr_14387 = state_14382;(statearr_14387[(9)] = inst_14374);
return statearr_14387;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14382__$1,(4),inst_14375);
} else
{if((state_val_14383 === (1)))
{var inst_14366 = (1000);var state_14382__$1 = (function (){var statearr_14388 = state_14382;(statearr_14388[(7)] = inst_14366);
return statearr_14388;
})();var statearr_14389_14410 = state_14382__$1;(statearr_14389_14410[(2)] = null);
(statearr_14389_14410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___14408,curve,avg10,avg20,rates,init_weights,info))
;return ((function (switch__6188__auto__,c__6203__auto___14408,curve,avg10,avg20,rates,init_weights,info){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14393 = [null,null,null,null,null,null,null,null,null,null];(statearr_14393[(0)] = state_machine__6189__auto__);
(statearr_14393[(1)] = (1));
return statearr_14393;
});
var state_machine__6189__auto____1 = (function (state_14382){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14382);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14394){if((e14394 instanceof Object))
{var ex__6192__auto__ = e14394;var statearr_14395_14411 = state_14382;(statearr_14395_14411[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14412 = state_14382;
state_14382 = G__14412;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14382){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14408,curve,avg10,avg20,rates,init_weights,info))
})();var state__6205__auto__ = (function (){var statearr_14396 = f__6204__auto__.call(null);(statearr_14396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14408);
return statearr_14396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14408,curve,avg10,avg20,rates,init_weights,info))
);
return null;
});
test.stock.fast.call(null);
