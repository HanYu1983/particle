// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__255383_SHARP_){return cljs.core.nth.call(null,p1__255383_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__255384_SHARP_){return cljs.core.nth.call(null,p1__255384_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_sd = (function draw_sd(ctx,w,h,kline,sd){var vec__255396 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__255396,(0),null);var min_v = cljs.core.nth.call(null,vec__255396,(1),null);var offset_v = cljs.core.nth.call(null,vec__255396,(2),null);var offset_x = cljs.core.nth.call(null,vec__255396,(3),null);var pos_y = cljs.core.nth.call(null,vec__255396,(4),null);var sd_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sd),kline);(ctx["lineWidth"] = (1));
var seq__255397_255407 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__255396,max_v,min_v,offset_v,offset_x,pos_y,sd_values){
return (function() { 
var G__255411__delegate = function (args){return args;
};
var G__255411 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255411__delegate.call(this,args);};
G__255411.cljs$lang$maxFixedArity = 0;
G__255411.cljs$lang$applyTo = (function (arglist__255412){
var args = cljs.core.seq(arglist__255412);
return G__255411__delegate(args);
});
G__255411.cljs$core$IFn$_invoke$arity$variadic = G__255411__delegate;
return G__255411;
})()
;})(vec__255396,max_v,min_v,offset_v,offset_x,pos_y,sd_values))
,cljs.core.range.call(null,cljs.core.count.call(null,sd_values)),sd_values,kline));var chunk__255398_255408 = null;var count__255399_255409 = (0);var i__255400_255410 = (0);while(true){
if((i__255400_255410 < count__255399_255409))
{var vec__255401_255413 = cljs.core._nth.call(null,chunk__255398_255408,i__255400_255410);var idx_255414 = cljs.core.nth.call(null,vec__255401_255413,(0),null);var vec__255402_255415 = cljs.core.nth.call(null,vec__255401_255413,(1),null);var avg_255416 = cljs.core.nth.call(null,vec__255402_255415,(0),null);var sd_v_255417 = cljs.core.nth.call(null,vec__255402_255415,(1),null);var vec__255403_255418 = cljs.core.nth.call(null,vec__255401_255413,(2),null);var __255419 = cljs.core.nth.call(null,vec__255403_255418,(0),null);var __255420__$1 = cljs.core.nth.call(null,vec__255403_255418,(1),null);var __255421__$2 = cljs.core.nth.call(null,vec__255403_255418,(2),null);var __255422__$3 = cljs.core.nth.call(null,vec__255403_255418,(3),null);var close_255423 = cljs.core.nth.call(null,vec__255403_255418,(4),null);var __255424__$4 = cljs.core.nth.call(null,vec__255403_255418,(5),null);(ctx["strokeStyle"] = (((Math.abs(avg_255416) < 0.5))?"black":(((avg_255416 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null))));
ctx.beginPath();
ctx.moveTo((idx_255414 * offset_x),pos_y.call(null,((close_255423 + sd_v_255417) + sd_v_255417)));
ctx.lineTo(((idx_255414 + (1)) * offset_x),pos_y.call(null,((close_255423 + sd_v_255417) + sd_v_255417)));
ctx.stroke();
ctx.moveTo((idx_255414 * offset_x),pos_y.call(null,((close_255423 - sd_v_255417) - sd_v_255417)));
ctx.lineTo(((idx_255414 + (1)) * offset_x),pos_y.call(null,((close_255423 - sd_v_255417) - sd_v_255417)));
ctx.stroke();
{
var G__255425 = seq__255397_255407;
var G__255426 = chunk__255398_255408;
var G__255427 = count__255399_255409;
var G__255428 = (i__255400_255410 + (1));
seq__255397_255407 = G__255425;
chunk__255398_255408 = G__255426;
count__255399_255409 = G__255427;
i__255400_255410 = G__255428;
continue;
}
} else
{var temp__4126__auto___255429 = cljs.core.seq.call(null,seq__255397_255407);if(temp__4126__auto___255429)
{var seq__255397_255430__$1 = temp__4126__auto___255429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__255397_255430__$1))
{var c__4307__auto___255431 = cljs.core.chunk_first.call(null,seq__255397_255430__$1);{
var G__255432 = cljs.core.chunk_rest.call(null,seq__255397_255430__$1);
var G__255433 = c__4307__auto___255431;
var G__255434 = cljs.core.count.call(null,c__4307__auto___255431);
var G__255435 = (0);
seq__255397_255407 = G__255432;
chunk__255398_255408 = G__255433;
count__255399_255409 = G__255434;
i__255400_255410 = G__255435;
continue;
}
} else
{var vec__255404_255436 = cljs.core.first.call(null,seq__255397_255430__$1);var idx_255437 = cljs.core.nth.call(null,vec__255404_255436,(0),null);var vec__255405_255438 = cljs.core.nth.call(null,vec__255404_255436,(1),null);var avg_255439 = cljs.core.nth.call(null,vec__255405_255438,(0),null);var sd_v_255440 = cljs.core.nth.call(null,vec__255405_255438,(1),null);var vec__255406_255441 = cljs.core.nth.call(null,vec__255404_255436,(2),null);var __255442 = cljs.core.nth.call(null,vec__255406_255441,(0),null);var __255443__$1 = cljs.core.nth.call(null,vec__255406_255441,(1),null);var __255444__$2 = cljs.core.nth.call(null,vec__255406_255441,(2),null);var __255445__$3 = cljs.core.nth.call(null,vec__255406_255441,(3),null);var close_255446 = cljs.core.nth.call(null,vec__255406_255441,(4),null);var __255447__$4 = cljs.core.nth.call(null,vec__255406_255441,(5),null);(ctx["strokeStyle"] = (((Math.abs(avg_255439) < 0.5))?"black":(((avg_255439 > (0)))?"red":((new cljs.core.Keyword(null,"else","else",-1508377146))?"green":null))));
ctx.beginPath();
ctx.moveTo((idx_255437 * offset_x),pos_y.call(null,((close_255446 + sd_v_255440) + sd_v_255440)));
ctx.lineTo(((idx_255437 + (1)) * offset_x),pos_y.call(null,((close_255446 + sd_v_255440) + sd_v_255440)));
ctx.stroke();
ctx.moveTo((idx_255437 * offset_x),pos_y.call(null,((close_255446 - sd_v_255440) - sd_v_255440)));
ctx.lineTo(((idx_255437 + (1)) * offset_x),pos_y.call(null,((close_255446 - sd_v_255440) - sd_v_255440)));
ctx.stroke();
{
var G__255448 = cljs.core.next.call(null,seq__255397_255430__$1);
var G__255449 = null;
var G__255450 = (0);
var G__255451 = (0);
seq__255397_255407 = G__255448;
chunk__255398_255408 = G__255449;
count__255399_255409 = G__255450;
i__255400_255410 = G__255451;
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
test.stock4.draw_sar = (function draw_sar(ctx,w,h,kline,sar){var vec__255459 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__255459,(0),null);var min_v = cljs.core.nth.call(null,vec__255459,(1),null);var offset_v = cljs.core.nth.call(null,vec__255459,(2),null);var offset_x = cljs.core.nth.call(null,vec__255459,(3),null);var pos_y = cljs.core.nth.call(null,vec__255459,(4),null);var sar_values = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,sar),kline);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "red");
var seq__255460_255466 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__255459,max_v,min_v,offset_v,offset_x,pos_y,sar_values){
return (function() { 
var G__255470__delegate = function (args){return args;
};
var G__255470 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255470__delegate.call(this,args);};
G__255470.cljs$lang$maxFixedArity = 0;
G__255470.cljs$lang$applyTo = (function (arglist__255471){
var args = cljs.core.seq(arglist__255471);
return G__255470__delegate(args);
});
G__255470.cljs$core$IFn$_invoke$arity$variadic = G__255470__delegate;
return G__255470;
})()
;})(vec__255459,max_v,min_v,offset_v,offset_x,pos_y,sar_values))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,sar_values))),sar_values,cljs.core.rest.call(null,sar_values)));var chunk__255461_255467 = null;var count__255462_255468 = (0);var i__255463_255469 = (0);while(true){
if((i__255463_255469 < count__255462_255468))
{var vec__255464_255472 = cljs.core._nth.call(null,chunk__255461_255467,i__255463_255469);var idx_255473 = cljs.core.nth.call(null,vec__255464_255472,(0),null);var prev_255474 = cljs.core.nth.call(null,vec__255464_255472,(1),null);var curr_255475 = cljs.core.nth.call(null,vec__255464_255472,(2),null);if((typeof prev_255474 === 'number') && (typeof curr_255475 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_255473 * offset_x),pos_y.call(null,prev_255474));
ctx.lineTo(((idx_255473 + (1)) * offset_x),pos_y.call(null,curr_255475));
ctx.stroke();
} else
{}
{
var G__255476 = seq__255460_255466;
var G__255477 = chunk__255461_255467;
var G__255478 = count__255462_255468;
var G__255479 = (i__255463_255469 + (1));
seq__255460_255466 = G__255476;
chunk__255461_255467 = G__255477;
count__255462_255468 = G__255478;
i__255463_255469 = G__255479;
continue;
}
} else
{var temp__4126__auto___255480 = cljs.core.seq.call(null,seq__255460_255466);if(temp__4126__auto___255480)
{var seq__255460_255481__$1 = temp__4126__auto___255480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__255460_255481__$1))
{var c__4307__auto___255482 = cljs.core.chunk_first.call(null,seq__255460_255481__$1);{
var G__255483 = cljs.core.chunk_rest.call(null,seq__255460_255481__$1);
var G__255484 = c__4307__auto___255482;
var G__255485 = cljs.core.count.call(null,c__4307__auto___255482);
var G__255486 = (0);
seq__255460_255466 = G__255483;
chunk__255461_255467 = G__255484;
count__255462_255468 = G__255485;
i__255463_255469 = G__255486;
continue;
}
} else
{var vec__255465_255487 = cljs.core.first.call(null,seq__255460_255481__$1);var idx_255488 = cljs.core.nth.call(null,vec__255465_255487,(0),null);var prev_255489 = cljs.core.nth.call(null,vec__255465_255487,(1),null);var curr_255490 = cljs.core.nth.call(null,vec__255465_255487,(2),null);if((typeof prev_255489 === 'number') && (typeof curr_255490 === 'number'))
{ctx.beginPath();
ctx.moveTo((idx_255488 * offset_x),pos_y.call(null,prev_255489));
ctx.lineTo(((idx_255488 + (1)) * offset_x),pos_y.call(null,curr_255490));
ctx.stroke();
} else
{}
{
var G__255491 = cljs.core.next.call(null,seq__255460_255481__$1);
var G__255492 = null;
var G__255493 = (0);
var G__255494 = (0);
seq__255460_255466 = G__255491;
chunk__255461_255467 = G__255492;
count__255462_255468 = G__255493;
i__255463_255469 = G__255494;
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
test.stock4.draw_kd = (function draw_kd(ctx,w,h,kline,p__255495){var vec__255510 = p__255495;var rsv = cljs.core.nth.call(null,vec__255510,(0),null);var k = cljs.core.nth.call(null,vec__255510,(1),null);var d = cljs.core.nth.call(null,vec__255510,(2),null);var kd = vec__255510;var vec__255511 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__255511,(0),null);var min_v = cljs.core.nth.call(null,vec__255511,(1),null);var offset_v = cljs.core.nth.call(null,vec__255511,(2),null);var offset_x = cljs.core.nth.call(null,vec__255511,(3),null);var pos_y = cljs.core.nth.call(null,vec__255511,(4),null);(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = "blue");
var seq__255512_255524 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__255511,max_v,min_v,offset_v,offset_x,pos_y,vec__255510,rsv,k,d,kd){
return (function() { 
var G__255528__delegate = function (args){return args;
};
var G__255528 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255528__delegate.call(this,args);};
G__255528.cljs$lang$maxFixedArity = 0;
G__255528.cljs$lang$applyTo = (function (arglist__255529){
var args = cljs.core.seq(arglist__255529);
return G__255528__delegate(args);
});
G__255528.cljs$core$IFn$_invoke$arity$variadic = G__255528__delegate;
return G__255528;
})()
;})(vec__255511,max_v,min_v,offset_v,offset_x,pos_y,vec__255510,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,k))),k,cljs.core.rest.call(null,k)));var chunk__255513_255525 = null;var count__255514_255526 = (0);var i__255515_255527 = (0);while(true){
if((i__255515_255527 < count__255514_255526))
{var vec__255516_255530 = cljs.core._nth.call(null,chunk__255513_255525,i__255515_255527);var idx_255531 = cljs.core.nth.call(null,vec__255516_255530,(0),null);var prev_255532 = cljs.core.nth.call(null,vec__255516_255530,(1),null);var curr_255533 = cljs.core.nth.call(null,vec__255516_255530,(2),null);ctx.beginPath();
ctx.moveTo((idx_255531 * offset_x),(((1) - (prev_255532 / (100))) * h));
ctx.lineTo(((idx_255531 + (1)) * offset_x),(((1) - (curr_255533 / (100))) * h));
ctx.stroke();
{
var G__255534 = seq__255512_255524;
var G__255535 = chunk__255513_255525;
var G__255536 = count__255514_255526;
var G__255537 = (i__255515_255527 + (1));
seq__255512_255524 = G__255534;
chunk__255513_255525 = G__255535;
count__255514_255526 = G__255536;
i__255515_255527 = G__255537;
continue;
}
} else
{var temp__4126__auto___255538 = cljs.core.seq.call(null,seq__255512_255524);if(temp__4126__auto___255538)
{var seq__255512_255539__$1 = temp__4126__auto___255538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__255512_255539__$1))
{var c__4307__auto___255540 = cljs.core.chunk_first.call(null,seq__255512_255539__$1);{
var G__255541 = cljs.core.chunk_rest.call(null,seq__255512_255539__$1);
var G__255542 = c__4307__auto___255540;
var G__255543 = cljs.core.count.call(null,c__4307__auto___255540);
var G__255544 = (0);
seq__255512_255524 = G__255541;
chunk__255513_255525 = G__255542;
count__255514_255526 = G__255543;
i__255515_255527 = G__255544;
continue;
}
} else
{var vec__255517_255545 = cljs.core.first.call(null,seq__255512_255539__$1);var idx_255546 = cljs.core.nth.call(null,vec__255517_255545,(0),null);var prev_255547 = cljs.core.nth.call(null,vec__255517_255545,(1),null);var curr_255548 = cljs.core.nth.call(null,vec__255517_255545,(2),null);ctx.beginPath();
ctx.moveTo((idx_255546 * offset_x),(((1) - (prev_255547 / (100))) * h));
ctx.lineTo(((idx_255546 + (1)) * offset_x),(((1) - (curr_255548 / (100))) * h));
ctx.stroke();
{
var G__255549 = cljs.core.next.call(null,seq__255512_255539__$1);
var G__255550 = null;
var G__255551 = (0);
var G__255552 = (0);
seq__255512_255524 = G__255549;
chunk__255513_255525 = G__255550;
count__255514_255526 = G__255551;
i__255515_255527 = G__255552;
continue;
}
}
} else
{}
}
break;
}
(ctx["strokeStyle"] = "yellow");
var seq__255518_255553 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__255511,max_v,min_v,offset_v,offset_x,pos_y,vec__255510,rsv,k,d,kd){
return (function() { 
var G__255557__delegate = function (args){return args;
};
var G__255557 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255557__delegate.call(this,args);};
G__255557.cljs$lang$maxFixedArity = 0;
G__255557.cljs$lang$applyTo = (function (arglist__255558){
var args = cljs.core.seq(arglist__255558);
return G__255557__delegate(args);
});
G__255557.cljs$core$IFn$_invoke$arity$variadic = G__255557__delegate;
return G__255557;
})()
;})(vec__255511,max_v,min_v,offset_v,offset_x,pos_y,vec__255510,rsv,k,d,kd))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,d))),d,cljs.core.rest.call(null,d)));var chunk__255519_255554 = null;var count__255520_255555 = (0);var i__255521_255556 = (0);while(true){
if((i__255521_255556 < count__255520_255555))
{var vec__255522_255559 = cljs.core._nth.call(null,chunk__255519_255554,i__255521_255556);var idx_255560 = cljs.core.nth.call(null,vec__255522_255559,(0),null);var prev_255561 = cljs.core.nth.call(null,vec__255522_255559,(1),null);var curr_255562 = cljs.core.nth.call(null,vec__255522_255559,(2),null);ctx.beginPath();
ctx.moveTo((idx_255560 * offset_x),(((1) - (prev_255561 / (100))) * h));
ctx.lineTo(((idx_255560 + (1)) * offset_x),(((1) - (curr_255562 / (100))) * h));
ctx.stroke();
{
var G__255563 = seq__255518_255553;
var G__255564 = chunk__255519_255554;
var G__255565 = count__255520_255555;
var G__255566 = (i__255521_255556 + (1));
seq__255518_255553 = G__255563;
chunk__255519_255554 = G__255564;
count__255520_255555 = G__255565;
i__255521_255556 = G__255566;
continue;
}
} else
{var temp__4126__auto___255567 = cljs.core.seq.call(null,seq__255518_255553);if(temp__4126__auto___255567)
{var seq__255518_255568__$1 = temp__4126__auto___255567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__255518_255568__$1))
{var c__4307__auto___255569 = cljs.core.chunk_first.call(null,seq__255518_255568__$1);{
var G__255570 = cljs.core.chunk_rest.call(null,seq__255518_255568__$1);
var G__255571 = c__4307__auto___255569;
var G__255572 = cljs.core.count.call(null,c__4307__auto___255569);
var G__255573 = (0);
seq__255518_255553 = G__255570;
chunk__255519_255554 = G__255571;
count__255520_255555 = G__255572;
i__255521_255556 = G__255573;
continue;
}
} else
{var vec__255523_255574 = cljs.core.first.call(null,seq__255518_255568__$1);var idx_255575 = cljs.core.nth.call(null,vec__255523_255574,(0),null);var prev_255576 = cljs.core.nth.call(null,vec__255523_255574,(1),null);var curr_255577 = cljs.core.nth.call(null,vec__255523_255574,(2),null);ctx.beginPath();
ctx.moveTo((idx_255575 * offset_x),(((1) - (prev_255576 / (100))) * h));
ctx.lineTo(((idx_255575 + (1)) * offset_x),(((1) - (curr_255577 / (100))) * h));
ctx.stroke();
{
var G__255578 = cljs.core.next.call(null,seq__255518_255568__$1);
var G__255579 = null;
var G__255580 = (0);
var G__255581 = (0);
seq__255518_255553 = G__255578;
chunk__255519_255554 = G__255579;
count__255520_255555 = G__255580;
i__255521_255556 = G__255581;
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
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__255592 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__255592,(0),null);var min_v = cljs.core.nth.call(null,vec__255592,(1),null);var offset_v = cljs.core.nth.call(null,vec__255592,(2),null);var offset_x = cljs.core.nth.call(null,vec__255592,(3),null);var pos_y = cljs.core.nth.call(null,vec__255592,(4),null);(ctx["fillStyle"] = "black");
var seq__255593 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__255592,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__255601__delegate = function (args){return args;
};
var G__255601 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255601__delegate.call(this,args);};
G__255601.cljs$lang$maxFixedArity = 0;
G__255601.cljs$lang$applyTo = (function (arglist__255602){
var args = cljs.core.seq(arglist__255602);
return G__255601__delegate(args);
});
G__255601.cljs$core$IFn$_invoke$arity$variadic = G__255601__delegate;
return G__255601;
})()
;})(vec__255592,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__255594 = null;var count__255595 = (0);var i__255596 = (0);while(true){
if((i__255596 < count__255595))
{var vec__255597 = cljs.core._nth.call(null,chunk__255594,i__255596);var idx = cljs.core.nth.call(null,vec__255597,(0),null);var vec__255598 = cljs.core.nth.call(null,vec__255597,(1),null);var date = cljs.core.nth.call(null,vec__255598,(0),null);var _ = cljs.core.nthnext.call(null,vec__255598,(1));var line = vec__255598;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__255593,chunk__255594,count__255595,i__255596,vec__255597,idx,vec__255598,date,_,line,vec__255592,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__255582_SHARP_){return cljs.core._EQ_.call(null,date,p1__255582_SHARP_);
});})(seq__255593,chunk__255594,count__255595,i__255596,vec__255597,idx,vec__255598,date,_,line,vec__255592,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__255603 = seq__255593;
var G__255604 = chunk__255594;
var G__255605 = count__255595;
var G__255606 = (i__255596 + (1));
seq__255593 = G__255603;
chunk__255594 = G__255604;
count__255595 = G__255605;
i__255596 = G__255606;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__255593);if(temp__4126__auto__)
{var seq__255593__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__255593__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__255593__$1);{
var G__255607 = cljs.core.chunk_rest.call(null,seq__255593__$1);
var G__255608 = c__4307__auto__;
var G__255609 = cljs.core.count.call(null,c__4307__auto__);
var G__255610 = (0);
seq__255593 = G__255607;
chunk__255594 = G__255608;
count__255595 = G__255609;
i__255596 = G__255610;
continue;
}
} else
{var vec__255599 = cljs.core.first.call(null,seq__255593__$1);var idx = cljs.core.nth.call(null,vec__255599,(0),null);var vec__255600 = cljs.core.nth.call(null,vec__255599,(1),null);var date = cljs.core.nth.call(null,vec__255600,(0),null);var _ = cljs.core.nthnext.call(null,vec__255600,(1));var line = vec__255600;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__255593,chunk__255594,count__255595,i__255596,vec__255599,idx,vec__255600,date,_,line,seq__255593__$1,temp__4126__auto__,vec__255592,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__255582_SHARP_){return cljs.core._EQ_.call(null,date,p1__255582_SHARP_);
});})(seq__255593,chunk__255594,count__255595,i__255596,vec__255599,idx,vec__255600,date,_,line,seq__255593__$1,temp__4126__auto__,vec__255592,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__255611 = cljs.core.next.call(null,seq__255593__$1);
var G__255612 = null;
var G__255613 = (0);
var G__255614 = (0);
seq__255593 = G__255611;
chunk__255594 = G__255612;
count__255595 = G__255613;
i__255596 = G__255614;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__255624 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__255624,(0),null);var min_v = cljs.core.nth.call(null,vec__255624,(1),null);var offset_v = cljs.core.nth.call(null,vec__255624,(2),null);var offset_x = cljs.core.nth.call(null,vec__255624,(3),null);var pos_y = cljs.core.nth.call(null,vec__255624,(4),null);var seq__255625 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__255624,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__255633__delegate = function (args){return args;
};
var G__255633 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255633__delegate.call(this,args);};
G__255633.cljs$lang$maxFixedArity = 0;
G__255633.cljs$lang$applyTo = (function (arglist__255634){
var args = cljs.core.seq(arglist__255634);
return G__255633__delegate(args);
});
G__255633.cljs$core$IFn$_invoke$arity$variadic = G__255633__delegate;
return G__255633;
})()
;})(vec__255624,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__255626 = null;var count__255627 = (0);var i__255628 = (0);while(true){
if((i__255628 < count__255627))
{var vec__255629 = cljs.core._nth.call(null,chunk__255626,i__255628);var idx = cljs.core.nth.call(null,vec__255629,(0),null);var vec__255630 = cljs.core.nth.call(null,vec__255629,(1),null);var date = cljs.core.nth.call(null,vec__255630,(0),null);var open = cljs.core.nth.call(null,vec__255630,(1),null);var high = cljs.core.nth.call(null,vec__255630,(2),null);var low = cljs.core.nth.call(null,vec__255630,(3),null);var close = cljs.core.nth.call(null,vec__255630,(4),null);var volume = cljs.core.nth.call(null,vec__255630,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__255635 = seq__255625;
var G__255636 = chunk__255626;
var G__255637 = count__255627;
var G__255638 = (i__255628 + (1));
seq__255625 = G__255635;
chunk__255626 = G__255636;
count__255627 = G__255637;
i__255628 = G__255638;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__255625);if(temp__4126__auto__)
{var seq__255625__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__255625__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__255625__$1);{
var G__255639 = cljs.core.chunk_rest.call(null,seq__255625__$1);
var G__255640 = c__4307__auto__;
var G__255641 = cljs.core.count.call(null,c__4307__auto__);
var G__255642 = (0);
seq__255625 = G__255639;
chunk__255626 = G__255640;
count__255627 = G__255641;
i__255628 = G__255642;
continue;
}
} else
{var vec__255631 = cljs.core.first.call(null,seq__255625__$1);var idx = cljs.core.nth.call(null,vec__255631,(0),null);var vec__255632 = cljs.core.nth.call(null,vec__255631,(1),null);var date = cljs.core.nth.call(null,vec__255632,(0),null);var open = cljs.core.nth.call(null,vec__255632,(1),null);var high = cljs.core.nth.call(null,vec__255632,(2),null);var low = cljs.core.nth.call(null,vec__255632,(3),null);var close = cljs.core.nth.call(null,vec__255632,(4),null);var volume = cljs.core.nth.call(null,vec__255632,(5),null);(ctx["strokeStyle"] = (((close > open))?"red":"green"));
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
var G__255643 = cljs.core.next.call(null,seq__255625__$1);
var G__255644 = null;
var G__255645 = (0);
var G__255646 = (0);
seq__255625 = G__255643;
chunk__255626 = G__255644;
count__255627 = G__255645;
i__255628 = G__255646;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__255650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__255650,(0),null);var h = cljs.core.nth.call(null,vec__255650,(1),null);return ((function (ctx,vec__255650,w,h){
return (function (p__255651){var map__255652 = p__255651;var map__255652__$1 = ((cljs.core.seq_QMARK_.call(null,map__255652))?cljs.core.apply.call(null,cljs.core.hash_map,map__255652):map__255652);var appctx = map__255652__$1;var kline = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var sd = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"sd","sd",-1707124456));var kd = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"kd","kd",771448701));var sar = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"sar","sar",833088678));var avgs = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__255652__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "gray");
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
return appctx;
});
;})(ctx,vec__255650,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj255690 = {"url":"/proxy","dataType":"text","data":(function (){var obj255692 = {"url":url};return obj255692;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_255699){var state_val_255700 = (state_255699[(1)]);if((state_val_255700 === (2)))
{var inst_255696 = (state_255699[(2)]);var inst_255697 = cljs.core.async.close_BANG_.call(null,ret);var state_255699__$1 = (function (){var statearr_255701 = state_255699;(statearr_255701[(7)] = inst_255696);
return statearr_255701;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_255699__$1,inst_255697);
} else
{if((state_val_255700 === (1)))
{var inst_255693 = [null,data];var inst_255694 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_255693,null));var state_255699__$1 = state_255699;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_255699__$1,(2),ret,inst_255694);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_255705 = [null,null,null,null,null,null,null,null];(statearr_255705[(0)] = state_machine__6188__auto__);
(statearr_255705[(1)] = (1));
return statearr_255705;
});
var state_machine__6188__auto____1 = (function (state_255699){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_255699);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e255706){if((e255706 instanceof Object))
{var ex__6191__auto__ = e255706;var statearr_255707_255725 = state_255699;(statearr_255707_255725[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_255699);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e255706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__255726 = state_255699;
state_255699 = G__255726;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_255699){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_255699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_255708 = f__6203__auto__.call(null);(statearr_255708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_255708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_255715){var state_val_255716 = (state_255715[(1)]);if((state_val_255716 === (2)))
{var inst_255712 = (state_255715[(2)]);var inst_255713 = cljs.core.async.close_BANG_.call(null,ret);var state_255715__$1 = (function (){var statearr_255717 = state_255715;(statearr_255717[(7)] = inst_255712);
return statearr_255717;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_255715__$1,inst_255713);
} else
{if((state_val_255716 === (1)))
{var inst_255709 = [err];var inst_255710 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_255709,null));var state_255715__$1 = state_255715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_255715__$1,(2),ret,inst_255710);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_255721 = [null,null,null,null,null,null,null,null];(statearr_255721[(0)] = state_machine__6188__auto__);
(statearr_255721[(1)] = (1));
return statearr_255721;
});
var state_machine__6188__auto____1 = (function (state_255715){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_255715);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e255722){if((e255722 instanceof Object))
{var ex__6191__auto__ = e255722;var statearr_255723_255727 = state_255715;(statearr_255723_255727[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_255715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e255722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__255728 = state_255715;
state_255715 = G__255728;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_255715){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_255715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_255724 = f__6203__auto__.call(null);(statearr_255724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_255724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj255690;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__255737(s__255738){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__255738__$1 = s__255738;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__255738__$1);if(temp__4126__auto__)
{var s__255738__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__255738__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__255738__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__255740 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__255739 = (0);while(true){
if((i__255739 < size__4275__auto__))
{var vec__255743 = cljs.core._nth.call(null,c__4274__auto__,i__255739);var _ = cljs.core.nth.call(null,vec__255743,(0),null);var date = cljs.core.nth.call(null,vec__255743,(1),null);var open = cljs.core.nth.call(null,vec__255743,(2),null);var high = cljs.core.nth.call(null,vec__255743,(3),null);var low = cljs.core.nth.call(null,vec__255743,(4),null);var close = cljs.core.nth.call(null,vec__255743,(5),null);var volume = cljs.core.nth.call(null,vec__255743,(6),null);cljs.core.chunk_append.call(null,b__255740,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__255745 = (i__255739 + (1));
i__255739 = G__255745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__255740),iter__255737.call(null,cljs.core.chunk_rest.call(null,s__255738__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__255740),null);
}
} else
{var vec__255744 = cljs.core.first.call(null,s__255738__$2);var _ = cljs.core.nth.call(null,vec__255744,(0),null);var date = cljs.core.nth.call(null,vec__255744,(1),null);var open = cljs.core.nth.call(null,vec__255744,(2),null);var high = cljs.core.nth.call(null,vec__255744,(3),null);var low = cljs.core.nth.call(null,vec__255744,(4),null);var close = cljs.core.nth.call(null,vec__255744,(5),null);var volume = cljs.core.nth.call(null,vec__255744,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__255737.call(null,cljs.core.rest.call(null,s__255738__$2)));
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
return (function (state_255823){var state_val_255824 = (state_255823[(1)]);if((state_val_255824 === (9)))
{var inst_255813 = (state_255823[(2)]);var state_255823__$1 = state_255823;var statearr_255825_255842 = state_255823__$1;(statearr_255825_255842[(2)] = inst_255813);
(statearr_255825_255842[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_255824 === (8)))
{var inst_255819 = (state_255823[(2)]);var state_255823__$1 = state_255823;var statearr_255826_255843 = state_255823__$1;(statearr_255826_255843[(2)] = inst_255819);
(statearr_255826_255843[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_255824 === (7)))
{var inst_255805 = (state_255823[(7)]);var inst_255815 = cljs.core.concat.call(null,all,inst_255805);var inst_255816 = [null,inst_255815];var inst_255817 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_255816,null));var state_255823__$1 = state_255823;var statearr_255827_255844 = state_255823__$1;(statearr_255827_255844[(2)] = inst_255817);
(statearr_255827_255844[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_255824 === (6)))
{var inst_255805 = (state_255823[(7)]);var inst_255809 = cljs.core.concat.call(null,all,inst_255805);var inst_255810 = (start + num);var inst_255811 = stock_info.call(null,inst_255809,id,startdate,inst_255810,num);var state_255823__$1 = state_255823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_255823__$1,(9),inst_255811);
} else
{if((state_val_255824 === (5)))
{var inst_255821 = (state_255823[(2)]);var state_255823__$1 = state_255823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_255823__$1,inst_255821);
} else
{if((state_val_255824 === (4)))
{var inst_255805 = (state_255823[(7)]);var inst_255800 = (state_255823[(8)]);var inst_255805__$1 = test.stock4.parse_info.call(null,inst_255800);var inst_255806 = cljs.core.count.call(null,inst_255805__$1);var inst_255807 = cljs.core._EQ_.call(null,num,inst_255806);var state_255823__$1 = (function (){var statearr_255828 = state_255823;(statearr_255828[(7)] = inst_255805__$1);
return statearr_255828;
})();if(inst_255807)
{var statearr_255829_255845 = state_255823__$1;(statearr_255829_255845[(1)] = (6));
} else
{var statearr_255830_255846 = state_255823__$1;(statearr_255830_255846[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_255824 === (3)))
{var inst_255799 = (state_255823[(9)]);var inst_255802 = [inst_255799];var inst_255803 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_255802,null));var state_255823__$1 = state_255823;var statearr_255831_255847 = state_255823__$1;(statearr_255831_255847[(2)] = inst_255803);
(statearr_255831_255847[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_255824 === (2)))
{var inst_255799 = (state_255823[(9)]);var inst_255798 = (state_255823[(2)]);var inst_255799__$1 = cljs.core.nth.call(null,inst_255798,(0),null);var inst_255800 = cljs.core.nth.call(null,inst_255798,(1),null);var state_255823__$1 = (function (){var statearr_255832 = state_255823;(statearr_255832[(8)] = inst_255800);
(statearr_255832[(9)] = inst_255799__$1);
return statearr_255832;
})();if(cljs.core.truth_(inst_255799__$1))
{var statearr_255833_255848 = state_255823__$1;(statearr_255833_255848[(1)] = (3));
} else
{var statearr_255834_255849 = state_255823__$1;(statearr_255834_255849[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_255824 === (1)))
{var inst_255795 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_255796 = test.stock4.content.call(null,inst_255795);var state_255823__$1 = state_255823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_255823__$1,(2),inst_255796);
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
var state_machine__6188__auto____0 = (function (){var statearr_255838 = [null,null,null,null,null,null,null,null,null,null];(statearr_255838[(0)] = state_machine__6188__auto__);
(statearr_255838[(1)] = (1));
return statearr_255838;
});
var state_machine__6188__auto____1 = (function (state_255823){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_255823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e255839){if((e255839 instanceof Object))
{var ex__6191__auto__ = e255839;var statearr_255840_255850 = state_255823;(statearr_255840_255850[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_255823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e255839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__255851 = state_255823;
state_255823 = G__255851;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_255823){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_255823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_255841 = f__6203__auto__.call(null);(statearr_255841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_255841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__255860 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__255860,(0),null);var open = cljs.core.nth.call(null,vec__255860,(1),null);var _ = cljs.core.nth.call(null,vec__255860,(2),null);var ___$1 = cljs.core.nth.call(null,vec__255860,(3),null);var ___$2 = cljs.core.nth.call(null,vec__255860,(4),null);var ___$3 = cljs.core.nth.call(null,vec__255860,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__255860,date,open,_,___$1,___$2,___$3){
return (function (p__255862){var vec__255863 = p__255862;var ___$4 = cljs.core.nth.call(null,vec__255863,(0),null);var ___$5 = cljs.core.nth.call(null,vec__255863,(1),null);var high = cljs.core.nth.call(null,vec__255863,(2),null);var ___$6 = cljs.core.nth.call(null,vec__255863,(3),null);var ___$7 = cljs.core.nth.call(null,vec__255863,(4),null);var ___$8 = cljs.core.nth.call(null,vec__255863,(5),null);return high;
});})(group,vec__255860,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__255860,date,open,_,___$1,___$2,___$3,high){
return (function (p__255864){var vec__255865 = p__255864;var ___$4 = cljs.core.nth.call(null,vec__255865,(0),null);var ___$5 = cljs.core.nth.call(null,vec__255865,(1),null);var ___$6 = cljs.core.nth.call(null,vec__255865,(2),null);var low = cljs.core.nth.call(null,vec__255865,(3),null);var ___$7 = cljs.core.nth.call(null,vec__255865,(4),null);var ___$8 = cljs.core.nth.call(null,vec__255865,(5),null);return low;
});})(group,vec__255860,date,open,_,___$1,___$2,___$3,high))
,group));var vec__255861 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__255861,(0),null);var ___$5 = cljs.core.nth.call(null,vec__255861,(1),null);var ___$6 = cljs.core.nth.call(null,vec__255861,(2),null);var ___$7 = cljs.core.nth.call(null,vec__255861,(3),null);var close = cljs.core.nth.call(null,vec__255861,(4),null);var ___$8 = cljs.core.nth.call(null,vec__255861,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__255860,date,open,_,___$1,___$2,___$3,high,low,vec__255861,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__255866){var vec__255867 = p__255866;var ___$9 = cljs.core.nth.call(null,vec__255867,(0),null);var ___$10 = cljs.core.nth.call(null,vec__255867,(1),null);var ___$11 = cljs.core.nth.call(null,vec__255867,(2),null);var ___$12 = cljs.core.nth.call(null,vec__255867,(3),null);var ___$13 = cljs.core.nth.call(null,vec__255867,(4),null);var volume = cljs.core.nth.call(null,vec__255867,(5),null);return volume;
});})(group,vec__255860,date,open,_,___$1,___$2,___$3,high,low,vec__255861,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__255860,date,open,_,___$1,___$2,___$3,high,low,vec__255861,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__255860,date,open,_,___$1,___$2,___$3,high,low,vec__255861,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__255871 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__255871,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255871,(1),null);var ___$2 = cljs.core.nth.call(null,vec__255871,(2),null);var ___$3 = cljs.core.nth.call(null,vec__255871,(3),null);var c1 = cljs.core.nth.call(null,vec__255871,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255871,(5),null);var l1 = vec__255871;var vec__255872 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__255872,(0),null);var ___$5 = cljs.core.nth.call(null,vec__255872,(1),null);var ___$6 = cljs.core.nth.call(null,vec__255872,(2),null);var ___$7 = cljs.core.nth.call(null,vec__255872,(3),null);var c2 = cljs.core.nth.call(null,vec__255872,(4),null);var ___$8 = cljs.core.nth.call(null,vec__255872,(5),null);var l2 = vec__255872;var vec__255873 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__255873,(0),null);var ___$10 = cljs.core.nth.call(null,vec__255873,(1),null);var ___$11 = cljs.core.nth.call(null,vec__255873,(2),null);var ___$12 = cljs.core.nth.call(null,vec__255873,(3),null);var c3 = cljs.core.nth.call(null,vec__255873,(4),null);var ___$13 = cljs.core.nth.call(null,vec__255873,(5),null);var l3 = vec__255873;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__255871,_,___$1,___$2,___$3,c1,___$4,l1,vec__255872,date,___$5,___$6,___$7,c2,___$8,l2,vec__255873,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__255871,_,___$1,___$2,___$3,c1,___$4,l1,vec__255872,date,___$5,___$6,___$7,c2,___$8,l2,vec__255873,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (p__255878){var vec__255879 = p__255878;var _ = cljs.core.nth.call(null,vec__255879,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255879,(1),null);var high = cljs.core.nth.call(null,vec__255879,(2),null);var low = cljs.core.nth.call(null,vec__255879,(3),null);var ___$2 = cljs.core.nth.call(null,vec__255879,(4),null);var ___$3 = cljs.core.nth.call(null,vec__255879,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__255877 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__255877,(0),null);var open = cljs.core.nth.call(null,vec__255877,(1),null);var high = cljs.core.nth.call(null,vec__255877,(2),null);var low = cljs.core.nth.call(null,vec__255877,(3),null);var close = cljs.core.nth.call(null,vec__255877,(4),null);var ___$1 = cljs.core.nth.call(null,vec__255877,(5),null);var curr = vec__255877;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__255877,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__255877,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
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
return (function (p__255882){var vec__255883 = p__255882;var _ = cljs.core.nth.call(null,vec__255883,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255883,(1),null);var ___$2 = cljs.core.nth.call(null,vec__255883,(2),null);var ___$3 = cljs.core.nth.call(null,vec__255883,(3),null);var close = cljs.core.nth.call(null,vec__255883,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255883,(5),null);return close;
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
return (function (p__255886){var vec__255887 = p__255886;var _ = cljs.core.nth.call(null,vec__255887,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255887,(1),null);var ___$2 = cljs.core.nth.call(null,vec__255887,(2),null);var ___$3 = cljs.core.nth.call(null,vec__255887,(3),null);var close = cljs.core.nth.call(null,vec__255887,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255887,(5),null);return close;
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
test.stock4.ema = (function ema(n,w,kline){var vec__255893 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__255893,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255893,(1),null);var ___$2 = cljs.core.nth.call(null,vec__255893,(2),null);var ___$3 = cljs.core.nth.call(null,vec__255893,(3),null);var close = cljs.core.nth.call(null,vec__255893,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255893,(5),null);var curr = vec__255893;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__255893,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__255894){var vec__255895 = p__255894;var vec__255896 = cljs.core.nth.call(null,vec__255895,(0),null);var ___$5 = cljs.core.nth.call(null,vec__255896,(0),null);var prev_ema = cljs.core.nth.call(null,vec__255896,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__255895,(1),null);var idx = cljs.core.nth.call(null,vec__255895,(2),null);var vec__255897 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__255897,(0),null);var ___$7 = cljs.core.nth.call(null,vec__255897,(1),null);var ___$8 = cljs.core.nth.call(null,vec__255897,(2),null);var ___$9 = cljs.core.nth.call(null,vec__255897,(3),null);var close__$1 = cljs.core.nth.call(null,vec__255897,(4),null);var ___$10 = cljs.core.nth.call(null,vec__255897,(5),null);var curr__$1 = vec__255897;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__255893,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
/**
* 未成熟隨機值
* 用來計算KD線
*/
test.stock4.rsv = (function rsv(kline){if((cljs.core.count.call(null,kline) > (9)))
{var group = cljs.core.take.call(null,(9),kline);var vec__255903 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__255903,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255903,(1),null);var ___$2 = cljs.core.nth.call(null,vec__255903,(2),null);var ___$3 = cljs.core.nth.call(null,vec__255903,(3),null);var ct = cljs.core.nth.call(null,vec__255903,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255903,(5),null);var curr = vec__255903;var L9 = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__255903,_,___$1,___$2,___$3,ct,___$4,curr){
return (function (p__255904){var vec__255905 = p__255904;var ___$5 = cljs.core.nth.call(null,vec__255905,(0),null);var ___$6 = cljs.core.nth.call(null,vec__255905,(1),null);var ___$7 = cljs.core.nth.call(null,vec__255905,(2),null);var low = cljs.core.nth.call(null,vec__255905,(3),null);var ___$8 = cljs.core.nth.call(null,vec__255905,(4),null);var ___$9 = cljs.core.nth.call(null,vec__255905,(5),null);return low;
});})(group,vec__255903,_,___$1,___$2,___$3,ct,___$4,curr))
,group));var H9 = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__255903,_,___$1,___$2,___$3,ct,___$4,curr,L9){
return (function (p__255906){var vec__255907 = p__255906;var ___$5 = cljs.core.nth.call(null,vec__255907,(0),null);var ___$6 = cljs.core.nth.call(null,vec__255907,(1),null);var high = cljs.core.nth.call(null,vec__255907,(2),null);var ___$7 = cljs.core.nth.call(null,vec__255907,(3),null);var ___$8 = cljs.core.nth.call(null,vec__255907,(4),null);var ___$9 = cljs.core.nth.call(null,vec__255907,(5),null);return high;
});})(group,vec__255903,_,___$1,___$2,___$3,ct,___$4,curr,L9))
,group));var v = ((((ct - L9) * ((1) / (H9 - L9))) * (100)) | (0));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,v], null),(new cljs.core.LazySeq(null,((function (group,vec__255903,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v){
return (function (){return rsv.call(null,cljs.core.rest.call(null,kline));
});})(group,vec__255903,_,___$1,___$2,___$3,ct,___$4,curr,L9,H9,v))
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
return (function (p__255910){var vec__255911 = p__255910;var line = cljs.core.nth.call(null,vec__255911,(0),null);var v = cljs.core.nth.call(null,vec__255911,(1),null);return v;
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
{var first_line = cljs.core.first.call(null,cljs.core.drop.call(null,(2),reverse_kline));var max_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (first_line){
return (function (p__255928){var vec__255929 = p__255928;var _ = cljs.core.nth.call(null,vec__255929,(0),null);var ___$1 = cljs.core.nth.call(null,vec__255929,(1),null);var ___$2 = cljs.core.nth.call(null,vec__255929,(2),null);var low = cljs.core.nth.call(null,vec__255929,(3),null);var ___$3 = cljs.core.nth.call(null,vec__255929,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255929,(5),null);return low;
});})(first_line))
,cljs.core.take.call(null,(3),reverse_kline)));return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (first_line,max_v){
return (function (p__255930){var vec__255931 = p__255930;var vec__255932 = cljs.core.nth.call(null,vec__255931,(0),null);var _ = cljs.core.nth.call(null,vec__255932,(0),null);var value = cljs.core.nth.call(null,vec__255932,(1),null);var prev = cljs.core.nth.call(null,vec__255931,(1),null);var curr = cljs.core.nth.call(null,vec__255931,(2),null);var act = cljs.core.nth.call(null,vec__255931,(3),null);var af = cljs.core.nth.call(null,vec__255931,(4),null);var vec__255933 = cljs.core.first.call(null,prev);var ___$1 = cljs.core.nth.call(null,vec__255933,(0),null);var ___$2 = cljs.core.nth.call(null,vec__255933,(1),null);var ph = cljs.core.nth.call(null,vec__255933,(2),null);var pl = cljs.core.nth.call(null,vec__255933,(3),null);var ___$3 = cljs.core.nth.call(null,vec__255933,(4),null);var ___$4 = cljs.core.nth.call(null,vec__255933,(5),null);var prev_line = vec__255933;var vec__255934 = cljs.core.first.call(null,curr);var ___$5 = cljs.core.nth.call(null,vec__255934,(0),null);var ___$6 = cljs.core.nth.call(null,vec__255934,(1),null);var ch = cljs.core.nth.call(null,vec__255934,(2),null);var cl = cljs.core.nth.call(null,vec__255934,(3),null);var ___$7 = cljs.core.nth.call(null,vec__255934,(4),null);var ___$8 = cljs.core.nth.call(null,vec__255934,(5),null);var curr_line = vec__255934;var next_value = (value + (af * (pl - value)));var should_turn = (function (){var pred__255935 = cljs.core._EQ_;var expr__255936 = act;if(cljs.core.truth_(pred__255935.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__255936)))
{return (next_value > cl);
} else
{if(cljs.core.truth_(pred__255935.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__255936)))
{return (next_value < ch);
} else
{if(cljs.core.truth_(pred__255935.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__255936)))
{return false;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__255936))));
}
}
}
})();var next_af = (function (){var pred__255938 = cljs.core._EQ_;var expr__255939 = act;if(cljs.core.truth_(pred__255938.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__255939)))
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
{if(cljs.core.truth_(pred__255938.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__255939)))
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
{if(cljs.core.truth_(pred__255938.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__255939)))
{return af;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__255939))));
}
}
}
})();var next_act = ((should_turn)?(function (){var pred__255941 = cljs.core._EQ_;var expr__255942 = act;if(cljs.core.truth_(pred__255941.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__255942)))
{return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else
{if(cljs.core.truth_(pred__255941.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__255942)))
{return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__255942))));
}
}
})():act);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_line,next_value], null),cljs.core.rest.call(null,prev),cljs.core.rest.call(null,curr),next_act,next_af], null);
});})(first_line,max_v))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_line,max_v], null),cljs.core.drop.call(null,(2),reverse_kline),cljs.core.drop.call(null,(3),reverse_kline),new cljs.core.Keyword(null,"buy","buy",-794379565),0.2], null)));
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
return (function (p1__255944_SHARP_){return Math.pow((p1__255944_SHARP_ - offsets_avg),(2));
});})(curr,sma_seq,offsets,offsets_avg))
,offsets))));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offsets_avg,v], null)], null),(new cljs.core.LazySeq(null,((function (curr,sma_seq,offsets,offsets_avg,v){
return (function (){return sd.call(null,n,cljs.core.rest.call(null,kline));
});})(curr,sma_seq,offsets,offsets_avg,v))
,null,null)));
} else
{return null;
}
});
test.stock4.z_score = (function z_score(n,kline){var vec__255950 = cljs.core.first.call(null,test.stock4.sd.call(null,n,kline));var _ = cljs.core.nth.call(null,vec__255950,(0),null);var vec__255951 = cljs.core.nth.call(null,vec__255950,(1),null);var avg = cljs.core.nth.call(null,vec__255951,(0),null);var sd_v = cljs.core.nth.call(null,vec__255951,(1),null);var currs = cljs.core.map.call(null,((function (vec__255950,_,vec__255951,avg,sd_v){
return (function (p__255952){var vec__255953 = p__255952;var ___$1 = cljs.core.nth.call(null,vec__255953,(0),null);var ___$2 = cljs.core.nth.call(null,vec__255953,(1),null);var ___$3 = cljs.core.nth.call(null,vec__255953,(2),null);var ___$4 = cljs.core.nth.call(null,vec__255953,(3),null);var close = cljs.core.nth.call(null,vec__255953,(4),null);var ___$5 = cljs.core.nth.call(null,vec__255953,(5),null);return close;
});})(vec__255950,_,vec__255951,avg,sd_v))
,kline);var offsets = cljs.core.map.call(null,((function (vec__255950,_,vec__255951,avg,sd_v,currs){
return (function (prev,curr){return (curr - prev);
});})(vec__255950,_,vec__255951,avg,sd_v,currs))
,cljs.core.rest.call(null,currs),currs);var vs = cljs.core.map.call(null,((function (vec__255950,_,vec__255951,avg,sd_v,currs,offsets){
return (function (p1__255945_SHARP_){return (p1__255945_SHARP_ / sd_v);
});})(vec__255950,_,vec__255951,avg,sd_v,currs,offsets))
,offsets);return cljs.core.map.call(null,((function (vec__255950,_,vec__255951,avg,sd_v,currs,offsets,vs){
return (function() { 
var G__255954__delegate = function (args){return args;
};
var G__255954 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__255954__delegate.call(this,args);};
G__255954.cljs$lang$maxFixedArity = 0;
G__255954.cljs$lang$applyTo = (function (arglist__255955){
var args = cljs.core.seq(arglist__255955);
return G__255954__delegate(args);
});
G__255954.cljs$core$IFn$_invoke$arity$variadic = G__255954__delegate;
return G__255954;
})()
;})(vec__255950,_,vec__255951,avg,sd_v,currs,offsets,vs))
,kline,vs);
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_256371){var state_val_256372 = (state_256371[(1)]);if((state_val_256372 === (2)))
{var inst_256369 = (state_256371[(2)]);var state_256371__$1 = state_256371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_256371__$1,inst_256369);
} else
{if((state_val_256372 === (1)))
{var inst_256367 = cljs.core.js__GT_clj.call(null,data);var state_256371__$1 = state_256371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_256371__$1,(2),onView,inst_256367);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_256376 = [null,null,null,null,null,null,null];(statearr_256376[(0)] = state_machine__6188__auto__);
(statearr_256376[(1)] = (1));
return statearr_256376;
});
var state_machine__6188__auto____1 = (function (state_256371){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_256371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e256377){if((e256377 instanceof Object))
{var ex__6191__auto__ = e256377;var statearr_256378_256778 = state_256371;(statearr_256378_256778[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_256371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e256377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__256779 = state_256371;
state_256371 = G__256779;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_256371){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_256371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_256379 = f__6203__auto__.call(null);(statearr_256379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_256379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___256780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___256780,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___256780,draw,onSystem,onView){
return (function (state_256396){var state_val_256397 = (state_256396[(1)]);if((state_val_256397 === (6)))
{var inst_256392 = (state_256396[(2)]);var state_256396__$1 = state_256396;var statearr_256398_256781 = state_256396__$1;(statearr_256398_256781[(2)] = inst_256392);
(statearr_256398_256781[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256397 === (5)))
{var inst_256394 = (state_256396[(2)]);var state_256396__$1 = state_256396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_256396__$1,inst_256394);
} else
{if((state_val_256397 === (4)))
{var inst_256385 = (state_256396[(7)]);var inst_256389 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_256385];var inst_256390 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_256389,null));var state_256396__$1 = state_256396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_256396__$1,(6),onSystem,inst_256390);
} else
{if((state_val_256397 === (3)))
{var inst_256384 = (state_256396[(8)]);var inst_256387 = alert(inst_256384);var state_256396__$1 = state_256396;var statearr_256399_256782 = state_256396__$1;(statearr_256399_256782[(2)] = inst_256387);
(statearr_256399_256782[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256397 === (2)))
{var inst_256384 = (state_256396[(8)]);var inst_256383 = (state_256396[(2)]);var inst_256384__$1 = cljs.core.nth.call(null,inst_256383,(0),null);var inst_256385 = cljs.core.nth.call(null,inst_256383,(1),null);var state_256396__$1 = (function (){var statearr_256400 = state_256396;(statearr_256400[(8)] = inst_256384__$1);
(statearr_256400[(7)] = inst_256385);
return statearr_256400;
})();if(cljs.core.truth_(inst_256384__$1))
{var statearr_256401_256783 = state_256396__$1;(statearr_256401_256783[(1)] = (3));
} else
{var statearr_256402_256784 = state_256396__$1;(statearr_256402_256784[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256397 === (1)))
{var inst_256381 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_256396__$1 = state_256396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_256396__$1,(2),inst_256381);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___256780,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___256780,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_256406 = [null,null,null,null,null,null,null,null,null];(statearr_256406[(0)] = state_machine__6188__auto__);
(statearr_256406[(1)] = (1));
return statearr_256406;
});
var state_machine__6188__auto____1 = (function (state_256396){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_256396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e256407){if((e256407 instanceof Object))
{var ex__6191__auto__ = e256407;var statearr_256408_256785 = state_256396;(statearr_256408_256785[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_256396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e256407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__256786 = state_256396;
state_256396 = G__256786;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_256396){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_256396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___256780,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_256409 = f__6203__auto__.call(null);(statearr_256409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___256780);
return statearr_256409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___256780,draw,onSystem,onView))
);
var c__6202__auto___256787 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___256787,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___256787,draw,onSystem,onView){
return (function (state_256656){var state_val_256657 = (state_256656[(1)]);if((state_val_256657 === (62)))
{var inst_256603 = (state_256656[(7)]);var inst_256612 = cljs.core.first.call(null,inst_256603);var inst_256613 = cljs.core.pr_str.call(null,inst_256612);var inst_256614 = console.log(inst_256613);var inst_256615 = cljs.core.next.call(null,inst_256603);var inst_256589 = inst_256615;var inst_256590 = null;var inst_256591 = (0);var inst_256592 = (0);var state_256656__$1 = (function (){var statearr_256658 = state_256656;(statearr_256658[(8)] = inst_256614);
(statearr_256658[(9)] = inst_256589);
(statearr_256658[(10)] = inst_256592);
(statearr_256658[(11)] = inst_256590);
(statearr_256658[(12)] = inst_256591);
return statearr_256658;
})();var statearr_256659_256788 = state_256656__$1;(statearr_256659_256788[(2)] = null);
(statearr_256659_256788[(1)] = (53));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (7)))
{var inst_256423 = (state_256656[(13)]);var inst_256428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_256423);var state_256656__$1 = state_256656;var statearr_256660_256789 = state_256656__$1;(statearr_256660_256789[(2)] = inst_256428);
(statearr_256660_256789[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (59)))
{var state_256656__$1 = state_256656;var statearr_256661_256790 = state_256656__$1;(statearr_256661_256790[(2)] = null);
(statearr_256661_256790[(1)] = (60));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (20)))
{var inst_256438 = (state_256656[(14)]);var inst_256466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_256438);var state_256656__$1 = state_256656;var statearr_256662_256791 = state_256656__$1;(statearr_256662_256791[(2)] = inst_256466);
(statearr_256662_256791[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (58)))
{var inst_256603 = (state_256656[(7)]);var inst_256605 = cljs.core.chunked_seq_QMARK_.call(null,inst_256603);var state_256656__$1 = state_256656;if(inst_256605)
{var statearr_256663_256792 = state_256656__$1;(statearr_256663_256792[(1)] = (61));
} else
{var statearr_256664_256793 = state_256656__$1;(statearr_256664_256793[(1)] = (62));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (60)))
{var inst_256621 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256665_256794 = state_256656__$1;(statearr_256665_256794[(2)] = inst_256621);
(statearr_256665_256794[(1)] = (57));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (27)))
{var inst_256470 = (state_256656[(15)]);var inst_256498 = cljs.core._EQ_.call(null,"sma",inst_256470);var state_256656__$1 = state_256656;if(inst_256498)
{var statearr_256666_256795 = state_256656__$1;(statearr_256666_256795[(1)] = (29));
} else
{var statearr_256667_256796 = state_256656__$1;(statearr_256667_256796[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (1)))
{var inst_256415 = (state_256656[(16)]);var inst_256413 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_256414 = [(200)];var inst_256415__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_256413,inst_256414);var inst_256416 = cljs.core.seq_QMARK_.call(null,inst_256415__$1);var state_256656__$1 = (function (){var statearr_256671 = state_256656;(statearr_256671[(16)] = inst_256415__$1);
return statearr_256671;
})();if(inst_256416)
{var statearr_256672_256797 = state_256656__$1;(statearr_256672_256797[(1)] = (2));
} else
{var statearr_256673_256798 = state_256656__$1;(statearr_256673_256798[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (24)))
{var inst_256470 = (state_256656[(15)]);var inst_256483 = cljs.core._EQ_.call(null,"sd",inst_256470);var state_256656__$1 = state_256656;if(inst_256483)
{var statearr_256674_256799 = state_256656__$1;(statearr_256674_256799[(1)] = (26));
} else
{var statearr_256675_256800 = state_256656__$1;(statearr_256675_256800[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (55)))
{var inst_256589 = (state_256656[(9)]);var inst_256592 = (state_256656[(10)]);var inst_256590 = (state_256656[(11)]);var inst_256591 = (state_256656[(12)]);var inst_256597 = cljs.core._nth.call(null,inst_256590,inst_256592);var inst_256598 = cljs.core.pr_str.call(null,inst_256597);var inst_256599 = console.log(inst_256598);var inst_256600 = (inst_256592 + (1));var tmp256668 = inst_256589;var tmp256669 = inst_256590;var tmp256670 = inst_256591;var inst_256589__$1 = tmp256668;var inst_256590__$1 = tmp256669;var inst_256591__$1 = tmp256670;var inst_256592__$1 = inst_256600;var state_256656__$1 = (function (){var statearr_256676 = state_256656;(statearr_256676[(9)] = inst_256589__$1);
(statearr_256676[(10)] = inst_256592__$1);
(statearr_256676[(17)] = inst_256599);
(statearr_256676[(11)] = inst_256590__$1);
(statearr_256676[(12)] = inst_256591__$1);
return statearr_256676;
})();var statearr_256677_256801 = state_256656__$1;(statearr_256677_256801[(2)] = null);
(statearr_256677_256801[(1)] = (53));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (39)))
{var inst_256470 = (state_256656[(15)]);var inst_256540 = cljs.core._EQ_.call(null,"stock",inst_256470);var state_256656__$1 = state_256656;if(inst_256540)
{var statearr_256678_256802 = state_256656__$1;(statearr_256678_256802[(1)] = (41));
} else
{var statearr_256679_256803 = state_256656__$1;(statearr_256679_256803[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (46)))
{var inst_256632 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256680_256804 = state_256656__$1;(statearr_256680_256804[(2)] = inst_256632);
(statearr_256680_256804[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (4)))
{var inst_256421 = (state_256656[(18)]);var inst_256415 = (state_256656[(16)]);var inst_256421__$1 = (state_256656[(2)]);var inst_256422 = cljs.core.get.call(null,inst_256421__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_256423 = inst_256415;var state_256656__$1 = (function (){var statearr_256681 = state_256656;(statearr_256681[(13)] = inst_256423);
(statearr_256681[(18)] = inst_256421__$1);
(statearr_256681[(19)] = inst_256422);
return statearr_256681;
})();var statearr_256682_256805 = state_256656__$1;(statearr_256682_256805[(2)] = null);
(statearr_256682_256805[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (54)))
{var inst_256431 = (state_256656[(20)]);var inst_256625 = (state_256656[(2)]);var state_256656__$1 = (function (){var statearr_256683 = state_256656;(statearr_256683[(21)] = inst_256625);
return statearr_256683;
})();var statearr_256684_256806 = state_256656__$1;(statearr_256684_256806[(2)] = inst_256431);
(statearr_256684_256806[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (15)))
{var inst_256431 = (state_256656[(20)]);var state_256656__$1 = state_256656;var statearr_256685_256807 = state_256656__$1;(statearr_256685_256807[(2)] = inst_256431);
(statearr_256685_256807[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (48)))
{var inst_256470 = (state_256656[(15)]);var inst_256580 = cljs.core._EQ_.call(null,"print",inst_256470);var state_256656__$1 = state_256656;if(inst_256580)
{var statearr_256686_256808 = state_256656__$1;(statearr_256686_256808[(1)] = (50));
} else
{var statearr_256687_256809 = state_256656__$1;(statearr_256687_256809[(1)] = (51));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (50)))
{var inst_256431 = (state_256656[(20)]);var inst_256471 = (state_256656[(22)]);var inst_256586 = cljs.core.keyword.call(null,inst_256471);var inst_256587 = inst_256586.call(null,inst_256431);var inst_256588 = cljs.core.seq.call(null,inst_256587);var inst_256589 = inst_256588;var inst_256590 = null;var inst_256591 = (0);var inst_256592 = (0);var state_256656__$1 = (function (){var statearr_256688 = state_256656;(statearr_256688[(9)] = inst_256589);
(statearr_256688[(10)] = inst_256592);
(statearr_256688[(11)] = inst_256590);
(statearr_256688[(12)] = inst_256591);
return statearr_256688;
})();var statearr_256689_256810 = state_256656__$1;(statearr_256689_256810[(2)] = null);
(statearr_256689_256810[(1)] = (53));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (21)))
{var inst_256438 = (state_256656[(14)]);var state_256656__$1 = state_256656;var statearr_256690_256811 = state_256656__$1;(statearr_256690_256811[(2)] = inst_256438);
(statearr_256690_256811[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (31)))
{var inst_256642 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256691_256812 = state_256656__$1;(statearr_256691_256812[(2)] = inst_256642);
(statearr_256691_256812[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (32)))
{var inst_256431 = (state_256656[(20)]);var inst_256471 = (state_256656[(22)]);var inst_256508 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256509 = test.stock4.ema.call(null,inst_256471,(0),inst_256508);var inst_256510 = cljs.core.take.call(null,(10),inst_256509);var inst_256511 = cljs.core.pr_str.call(null,inst_256510);var inst_256512 = console.log(inst_256511);var state_256656__$1 = (function (){var statearr_256692 = state_256656;(statearr_256692[(23)] = inst_256512);
return statearr_256692;
})();var statearr_256693_256813 = state_256656__$1;(statearr_256693_256813[(2)] = inst_256431);
(statearr_256693_256813[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (40)))
{var inst_256636 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256694_256814 = state_256656__$1;(statearr_256694_256814[(2)] = inst_256636);
(statearr_256694_256814[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (56)))
{var inst_256589 = (state_256656[(9)]);var inst_256603 = (state_256656[(7)]);var inst_256603__$1 = cljs.core.seq.call(null,inst_256589);var state_256656__$1 = (function (){var statearr_256695 = state_256656;(statearr_256695[(7)] = inst_256603__$1);
return statearr_256695;
})();if(inst_256603__$1)
{var statearr_256696_256815 = state_256656__$1;(statearr_256696_256815[(1)] = (58));
} else
{var statearr_256697_256816 = state_256656__$1;(statearr_256697_256816[(1)] = (59));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (33)))
{var inst_256470 = (state_256656[(15)]);var inst_256514 = cljs.core._EQ_.call(null,"rsv",inst_256470);var state_256656__$1 = state_256656;if(inst_256514)
{var statearr_256698_256817 = state_256656__$1;(statearr_256698_256817[(1)] = (35));
} else
{var statearr_256699_256818 = state_256656__$1;(statearr_256699_256818[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (13)))
{var inst_256651 = (state_256656[(2)]);var inst_256423 = inst_256651;var state_256656__$1 = (function (){var statearr_256700 = state_256656;(statearr_256700[(13)] = inst_256423);
return statearr_256700;
})();var statearr_256701_256819 = state_256656__$1;(statearr_256701_256819[(2)] = null);
(statearr_256701_256819[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (22)))
{var inst_256469 = (state_256656[(24)]);var inst_256470 = (state_256656[(15)]);var inst_256469__$1 = (state_256656[(2)]);var inst_256470__$1 = cljs.core.get.call(null,inst_256469__$1,"cmd");var inst_256471 = cljs.core.get.call(null,inst_256469__$1,"params");var inst_256475 = cljs.core._EQ_.call(null,"length",inst_256470__$1);var state_256656__$1 = (function (){var statearr_256702 = state_256656;(statearr_256702[(24)] = inst_256469__$1);
(statearr_256702[(15)] = inst_256470__$1);
(statearr_256702[(22)] = inst_256471);
return statearr_256702;
})();if(inst_256475)
{var statearr_256703_256820 = state_256656__$1;(statearr_256703_256820[(1)] = (23));
} else
{var statearr_256704_256821 = state_256656__$1;(statearr_256704_256821[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (36)))
{var inst_256470 = (state_256656[(15)]);var inst_256530 = cljs.core._EQ_.call(null,"sar",inst_256470);var state_256656__$1 = state_256656;if(inst_256530)
{var statearr_256705_256822 = state_256656__$1;(statearr_256705_256822[(1)] = (38));
} else
{var statearr_256706_256823 = state_256656__$1;(statearr_256706_256823[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (41)))
{var inst_256438 = (state_256656[(14)]);var inst_256432 = (state_256656[(25)]);var inst_256423 = (state_256656[(13)]);var inst_256421 = (state_256656[(18)]);var inst_256439 = (state_256656[(26)]);var inst_256431 = (state_256656[(20)]);var inst_256469 = (state_256656[(24)]);var inst_256470 = (state_256656[(15)]);var inst_256437 = (state_256656[(27)]);var inst_256471 = (state_256656[(22)]);var inst_256560 = cljs.core.async.chan.call(null,(1));var inst_256561 = (function (){var vec__256433 = inst_256437;var cmd = inst_256470;var input = inst_256469;var ctx = inst_256431;var G__256411 = inst_256423;var pred__256472 = cljs.core._EQ_;var map__256425 = inst_256431;var map__256412 = inst_256421;var v = inst_256438;var pred__256440 = cljs.core._EQ_;var expr__256473 = inst_256470;var params = inst_256471;var map__256463 = inst_256469;var cnt = inst_256432;var ch = inst_256439;var c__6202__auto____$1 = inst_256560;var expr__256441 = inst_256439;return ((function (vec__256433,cmd,input,ctx,G__256411,pred__256472,map__256425,map__256412,v,pred__256440,expr__256473,params,map__256463,cnt,ch,c__6202__auto____$1,expr__256441,inst_256438,inst_256432,inst_256423,inst_256421,inst_256439,inst_256431,inst_256469,inst_256470,inst_256437,inst_256471,inst_256560,state_val_256657,c__6202__auto___256787,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (vec__256433,cmd,input,ctx,G__256411,pred__256472,map__256425,map__256412,v,pred__256440,expr__256473,params,map__256463,cnt,ch,c__6202__auto____$1,expr__256441,inst_256438,inst_256432,inst_256423,inst_256421,inst_256439,inst_256431,inst_256469,inst_256470,inst_256437,inst_256471,inst_256560,state_val_256657,c__6202__auto___256787,draw,onSystem,onView){
return (function (state_256558){var state_val_256559 = (state_256558[(1)]);if((state_val_256559 === (6)))
{var inst_256554 = (state_256558[(2)]);var state_256558__$1 = state_256558;var statearr_256707_256824 = state_256558__$1;(statearr_256707_256824[(2)] = inst_256554);
(statearr_256707_256824[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256559 === (5)))
{var inst_256556 = (state_256558[(2)]);var state_256558__$1 = state_256558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_256558__$1,inst_256556);
} else
{if((state_val_256559 === (4)))
{var inst_256547 = (state_256558[(7)]);var inst_256551 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_256547];var inst_256552 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_256551,null));var state_256558__$1 = state_256558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_256558__$1,(6),onSystem,inst_256552);
} else
{if((state_val_256559 === (3)))
{var inst_256546 = (state_256558[(8)]);var inst_256549 = alert(inst_256546);var state_256558__$1 = state_256558;var statearr_256708_256825 = state_256558__$1;(statearr_256708_256825[(2)] = inst_256549);
(statearr_256708_256825[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256559 === (2)))
{var inst_256546 = (state_256558[(8)]);var inst_256545 = (state_256558[(2)]);var inst_256546__$1 = cljs.core.nth.call(null,inst_256545,(0),null);var inst_256547 = cljs.core.nth.call(null,inst_256545,(1),null);var state_256558__$1 = (function (){var statearr_256709 = state_256558;(statearr_256709[(8)] = inst_256546__$1);
(statearr_256709[(7)] = inst_256547);
return statearr_256709;
})();if(cljs.core.truth_(inst_256546__$1))
{var statearr_256710_256826 = state_256558__$1;(statearr_256710_256826[(1)] = (3));
} else
{var statearr_256711_256827 = state_256558__$1;(statearr_256711_256827[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256559 === (1)))
{var inst_256543 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_256558__$1 = state_256558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_256558__$1,(2),inst_256543);
} else
{return null;
}
}
}
}
}
}
});})(vec__256433,cmd,input,ctx,G__256411,pred__256472,map__256425,map__256412,v,pred__256440,expr__256473,params,map__256463,cnt,ch,c__6202__auto____$1,expr__256441,inst_256438,inst_256432,inst_256423,inst_256421,inst_256439,inst_256431,inst_256469,inst_256470,inst_256437,inst_256471,inst_256560,state_val_256657,c__6202__auto___256787,draw,onSystem,onView))
;return ((function (switch__6187__auto__,vec__256433,cmd,input,ctx,G__256411,pred__256472,map__256425,map__256412,v,pred__256440,expr__256473,params,map__256463,cnt,ch,c__6202__auto____$1,expr__256441,inst_256438,inst_256432,inst_256423,inst_256421,inst_256439,inst_256431,inst_256469,inst_256470,inst_256437,inst_256471,inst_256560,state_val_256657,c__6202__auto___256787,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_256715 = [null,null,null,null,null,null,null,null,null];(statearr_256715[(0)] = state_machine__6188__auto__);
(statearr_256715[(1)] = (1));
return statearr_256715;
});
var state_machine__6188__auto____1 = (function (state_256558){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_256558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e256716){if((e256716 instanceof Object))
{var ex__6191__auto__ = e256716;var statearr_256717_256828 = state_256558;(statearr_256717_256828[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_256558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e256716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__256829 = state_256558;
state_256558 = G__256829;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_256558){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_256558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,vec__256433,cmd,input,ctx,G__256411,pred__256472,map__256425,map__256412,v,pred__256440,expr__256473,params,map__256463,cnt,ch,c__6202__auto____$1,expr__256441,inst_256438,inst_256432,inst_256423,inst_256421,inst_256439,inst_256431,inst_256469,inst_256470,inst_256437,inst_256471,inst_256560,state_val_256657,c__6202__auto___256787,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_256718 = f__6203__auto__.call(null);(statearr_256718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_256718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(vec__256433,cmd,input,ctx,G__256411,pred__256472,map__256425,map__256412,v,pred__256440,expr__256473,params,map__256463,cnt,ch,c__6202__auto____$1,expr__256441,inst_256438,inst_256432,inst_256423,inst_256421,inst_256439,inst_256431,inst_256469,inst_256470,inst_256437,inst_256471,inst_256560,state_val_256657,c__6202__auto___256787,draw,onSystem,onView))
})();var inst_256562 = cljs.core.async.impl.dispatch.run.call(null,inst_256561);var state_256656__$1 = (function (){var statearr_256719 = state_256656;(statearr_256719[(28)] = inst_256562);
return statearr_256719;
})();var statearr_256720_256830 = state_256656__$1;(statearr_256720_256830[(2)] = inst_256431);
(statearr_256720_256830[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (43)))
{var inst_256634 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256721_256831 = state_256656__$1;(statearr_256721_256831[(2)] = inst_256634);
(statearr_256721_256831[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (61)))
{var inst_256603 = (state_256656[(7)]);var inst_256607 = cljs.core.chunk_first.call(null,inst_256603);var inst_256608 = cljs.core.chunk_rest.call(null,inst_256603);var inst_256609 = cljs.core.count.call(null,inst_256607);var inst_256589 = inst_256608;var inst_256590 = inst_256607;var inst_256591 = inst_256609;var inst_256592 = (0);var state_256656__$1 = (function (){var statearr_256722 = state_256656;(statearr_256722[(9)] = inst_256589);
(statearr_256722[(10)] = inst_256592);
(statearr_256722[(11)] = inst_256590);
(statearr_256722[(12)] = inst_256591);
return statearr_256722;
})();var statearr_256723_256832 = state_256656__$1;(statearr_256723_256832[(2)] = null);
(statearr_256723_256832[(1)] = (53));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (29)))
{var inst_256431 = (state_256656[(20)]);var inst_256471 = (state_256656[(22)]);var inst_256500 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256501 = test.stock4.sma.call(null,inst_256471,inst_256500);var inst_256502 = cljs.core.take.call(null,(10),inst_256501);var inst_256503 = cljs.core.pr_str.call(null,inst_256502);var inst_256504 = console.log(inst_256503);var state_256656__$1 = (function (){var statearr_256724 = state_256656;(statearr_256724[(29)] = inst_256504);
return statearr_256724;
})();var statearr_256725_256833 = state_256656__$1;(statearr_256725_256833[(2)] = inst_256431);
(statearr_256725_256833[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (44)))
{var inst_256432 = (state_256656[(25)]);var inst_256431 = (state_256656[(20)]);var inst_256471 = (state_256656[(22)]);var inst_256566 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256567 = test.stock4.average.call(null,inst_256471,inst_256566);var inst_256568 = cljs.core.take.call(null,inst_256432,inst_256567);var inst_256569 = cljs.core.assoc.call(null,inst_256431,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_256568);var inst_256570 = draw.call(null,inst_256569);var state_256656__$1 = state_256656;var statearr_256726_256834 = state_256656__$1;(statearr_256726_256834[(2)] = inst_256570);
(statearr_256726_256834[(1)] = (46));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (6)))
{var inst_256654 = (state_256656[(2)]);var state_256656__$1 = state_256656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_256656__$1,inst_256654);
} else
{if((state_val_256657 === (28)))
{var inst_256644 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256727_256835 = state_256656__$1;(statearr_256727_256835[(2)] = inst_256644);
(statearr_256727_256835[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (51)))
{var inst_256431 = (state_256656[(20)]);var state_256656__$1 = state_256656;var statearr_256728_256836 = state_256656__$1;(statearr_256728_256836[(2)] = inst_256431);
(statearr_256728_256836[(1)] = (52));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (25)))
{var inst_256646 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256729_256837 = state_256656__$1;(statearr_256729_256837[(2)] = inst_256646);
(statearr_256729_256837[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (34)))
{var inst_256640 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256730_256838 = state_256656__$1;(statearr_256730_256838[(2)] = inst_256640);
(statearr_256730_256838[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (17)))
{var inst_256438 = (state_256656[(14)]);var inst_256464 = cljs.core.seq_QMARK_.call(null,inst_256438);var state_256656__$1 = state_256656;if(inst_256464)
{var statearr_256731_256839 = state_256656__$1;(statearr_256731_256839[(1)] = (20));
} else
{var statearr_256732_256840 = state_256656__$1;(statearr_256732_256840[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (3)))
{var inst_256415 = (state_256656[(16)]);var state_256656__$1 = state_256656;var statearr_256733_256841 = state_256656__$1;(statearr_256733_256841[(2)] = inst_256415);
(statearr_256733_256841[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (12)))
{var inst_256439 = (state_256656[(26)]);var inst_256461 = cljs.core._EQ_.call(null,onView,inst_256439);var state_256656__$1 = state_256656;if(inst_256461)
{var statearr_256734_256842 = state_256656__$1;(statearr_256734_256842[(1)] = (17));
} else
{var statearr_256735_256843 = state_256656__$1;(statearr_256735_256843[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (2)))
{var inst_256415 = (state_256656[(16)]);var inst_256418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_256415);var state_256656__$1 = state_256656;var statearr_256736_256844 = state_256656__$1;(statearr_256736_256844[(2)] = inst_256418);
(statearr_256736_256844[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (23)))
{var inst_256431 = (state_256656[(20)]);var inst_256477 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256478 = test.stock4.check_length.call(null,inst_256477);var inst_256479 = cljs.core.take.call(null,(10),inst_256478);var inst_256480 = cljs.core.pr_str.call(null,inst_256479);var inst_256481 = console.log(inst_256480);var state_256656__$1 = (function (){var statearr_256737 = state_256656;(statearr_256737[(30)] = inst_256481);
return statearr_256737;
})();var statearr_256738_256845 = state_256656__$1;(statearr_256738_256845[(2)] = inst_256431);
(statearr_256738_256845[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (47)))
{var inst_256432 = (state_256656[(25)]);var inst_256431 = (state_256656[(20)]);var inst_256574 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256575 = test.stock4.check_turn.call(null,inst_256574);var inst_256576 = cljs.core.take.call(null,inst_256432,inst_256575);var inst_256577 = cljs.core.assoc.call(null,inst_256431,new cljs.core.Keyword(null,"turn","turn",75759344),inst_256576);var inst_256578 = draw.call(null,inst_256577);var state_256656__$1 = state_256656;var statearr_256739_256846 = state_256656__$1;(statearr_256739_256846[(2)] = inst_256578);
(statearr_256739_256846[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (35)))
{var inst_256431 = (state_256656[(20)]);var inst_256471 = (state_256656[(22)]);var inst_256516 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256517 = cljs.core.count.call(null,inst_256516);var inst_256518 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256519 = test.stock4.rsv.call(null,inst_256518);var inst_256520 = test.stock4.k.call(null,inst_256471,inst_256519);var inst_256521 = cljs.core.take.call(null,inst_256517,inst_256520);var inst_256522 = ((3) * inst_256471);var inst_256523 = test.stock4.k.call(null,inst_256522,inst_256519);var inst_256524 = cljs.core.take.call(null,inst_256517,inst_256523);var inst_256525 = [null,inst_256521,inst_256524];var inst_256526 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_256525,null));var inst_256527 = cljs.core.assoc.call(null,inst_256431,new cljs.core.Keyword(null,"kd","kd",771448701),inst_256526);var inst_256528 = draw.call(null,inst_256527);var state_256656__$1 = state_256656;var statearr_256740_256847 = state_256656__$1;(statearr_256740_256847[(2)] = inst_256528);
(statearr_256740_256847[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (19)))
{var inst_256649 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256741_256848 = state_256656__$1;(statearr_256741_256848[(2)] = inst_256649);
(statearr_256741_256848[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (57)))
{var inst_256623 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256742_256849 = state_256656__$1;(statearr_256742_256849[(2)] = inst_256623);
(statearr_256742_256849[(1)] = (54));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (11)))
{var inst_256438 = (state_256656[(14)]);var inst_256446 = cljs.core.nth.call(null,inst_256438,(0),null);var inst_256447 = cljs.core.nth.call(null,inst_256438,(1),null);var inst_256451 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_256446);var state_256656__$1 = (function (){var statearr_256743 = state_256656;(statearr_256743[(31)] = inst_256447);
return statearr_256743;
})();if(inst_256451)
{var statearr_256744_256850 = state_256656__$1;(statearr_256744_256850[(1)] = (14));
} else
{var statearr_256745_256851 = state_256656__$1;(statearr_256745_256851[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (9)))
{var inst_256431 = (state_256656[(20)]);var inst_256431__$1 = (state_256656[(2)]);var inst_256432 = cljs.core.get.call(null,inst_256431__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_256434 = [onSystem,onView];var inst_256435 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_256434,null));var state_256656__$1 = (function (){var statearr_256746 = state_256656;(statearr_256746[(25)] = inst_256432);
(statearr_256746[(20)] = inst_256431__$1);
return statearr_256746;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_256656__$1,(10),inst_256435);
} else
{if((state_val_256657 === (5)))
{var inst_256423 = (state_256656[(13)]);var inst_256426 = cljs.core.seq_QMARK_.call(null,inst_256423);var state_256656__$1 = state_256656;if(inst_256426)
{var statearr_256747_256852 = state_256656__$1;(statearr_256747_256852[(1)] = (7));
} else
{var statearr_256748_256853 = state_256656__$1;(statearr_256748_256853[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (14)))
{var inst_256432 = (state_256656[(25)]);var inst_256447 = (state_256656[(31)]);var inst_256431 = (state_256656[(20)]);var inst_256453 = cljs.core.assoc.call(null,inst_256431,new cljs.core.Keyword(null,"info","info",-317069002),inst_256447);var inst_256454 = cljs.core.take.call(null,inst_256432,inst_256447);var inst_256455 = cljs.core.assoc.call(null,inst_256453,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_256454);var inst_256456 = draw.call(null,inst_256455);var state_256656__$1 = state_256656;var statearr_256749_256854 = state_256656__$1;(statearr_256749_256854[(2)] = inst_256456);
(statearr_256749_256854[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (45)))
{var inst_256470 = (state_256656[(15)]);var inst_256572 = cljs.core._EQ_.call(null,"turn",inst_256470);var state_256656__$1 = state_256656;if(inst_256572)
{var statearr_256750_256855 = state_256656__$1;(statearr_256750_256855[(1)] = (47));
} else
{var statearr_256751_256856 = state_256656__$1;(statearr_256751_256856[(1)] = (48));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (53)))
{var inst_256592 = (state_256656[(10)]);var inst_256591 = (state_256656[(12)]);var inst_256594 = (inst_256592 < inst_256591);var inst_256595 = inst_256594;var state_256656__$1 = state_256656;if(cljs.core.truth_(inst_256595))
{var statearr_256752_256857 = state_256656__$1;(statearr_256752_256857[(1)] = (55));
} else
{var statearr_256753_256858 = state_256656__$1;(statearr_256753_256858[(1)] = (56));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (26)))
{var inst_256431 = (state_256656[(20)]);var inst_256471 = (state_256656[(22)]);var inst_256485 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256486 = test.stock4.sd.call(null,inst_256471,inst_256485);var inst_256487 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256488 = test.stock4.z_score.call(null,inst_256471,inst_256487);var inst_256489 = cljs.core.take.call(null,(10),inst_256486);var inst_256490 = cljs.core.pr_str.call(null,inst_256489);var inst_256491 = console.log(inst_256490);var inst_256492 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256493 = cljs.core.count.call(null,inst_256492);var inst_256494 = cljs.core.take.call(null,inst_256493,inst_256486);var inst_256495 = cljs.core.assoc.call(null,inst_256431,new cljs.core.Keyword(null,"sd","sd",-1707124456),inst_256494);var inst_256496 = draw.call(null,inst_256495);var state_256656__$1 = (function (){var statearr_256754 = state_256656;(statearr_256754[(32)] = inst_256488);
(statearr_256754[(33)] = inst_256491);
return statearr_256754;
})();var statearr_256755_256859 = state_256656__$1;(statearr_256755_256859[(2)] = inst_256496);
(statearr_256755_256859[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (16)))
{var inst_256459 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256756_256860 = state_256656__$1;(statearr_256756_256860[(2)] = inst_256459);
(statearr_256756_256860[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (38)))
{var inst_256431 = (state_256656[(20)]);var inst_256532 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_256431);var inst_256533 = cljs.core.reverse.call(null,inst_256532);var inst_256534 = test.stock4.sar.call(null,inst_256533);var inst_256535 = cljs.core.count.call(null,inst_256532);var inst_256536 = cljs.core.take.call(null,inst_256535,inst_256534);var inst_256537 = cljs.core.assoc.call(null,inst_256431,new cljs.core.Keyword(null,"sar","sar",833088678),inst_256536);var inst_256538 = draw.call(null,inst_256537);var state_256656__$1 = state_256656;var statearr_256757_256861 = state_256656__$1;(statearr_256757_256861[(2)] = inst_256538);
(statearr_256757_256861[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (30)))
{var inst_256470 = (state_256656[(15)]);var inst_256506 = cljs.core._EQ_.call(null,"ema",inst_256470);var state_256656__$1 = state_256656;if(inst_256506)
{var statearr_256758_256862 = state_256656__$1;(statearr_256758_256862[(1)] = (32));
} else
{var statearr_256759_256863 = state_256656__$1;(statearr_256759_256863[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (10)))
{var inst_256439 = (state_256656[(26)]);var inst_256437 = (state_256656[(27)]);var inst_256437__$1 = (state_256656[(2)]);var inst_256438 = cljs.core.nth.call(null,inst_256437__$1,(0),null);var inst_256439__$1 = cljs.core.nth.call(null,inst_256437__$1,(1),null);var inst_256443 = cljs.core._EQ_.call(null,onSystem,inst_256439__$1);var state_256656__$1 = (function (){var statearr_256760 = state_256656;(statearr_256760[(14)] = inst_256438);
(statearr_256760[(26)] = inst_256439__$1);
(statearr_256760[(27)] = inst_256437__$1);
return statearr_256760;
})();if(inst_256443)
{var statearr_256761_256864 = state_256656__$1;(statearr_256761_256864[(1)] = (11));
} else
{var statearr_256762_256865 = state_256656__$1;(statearr_256762_256865[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (18)))
{var inst_256431 = (state_256656[(20)]);var state_256656__$1 = state_256656;var statearr_256763_256866 = state_256656__$1;(statearr_256763_256866[(2)] = inst_256431);
(statearr_256763_256866[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (52)))
{var inst_256628 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256764_256867 = state_256656__$1;(statearr_256764_256867[(2)] = inst_256628);
(statearr_256764_256867[(1)] = (49));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (42)))
{var inst_256470 = (state_256656[(15)]);var inst_256564 = cljs.core._EQ_.call(null,"avg",inst_256470);var state_256656__$1 = state_256656;if(inst_256564)
{var statearr_256765_256868 = state_256656__$1;(statearr_256765_256868[(1)] = (44));
} else
{var statearr_256766_256869 = state_256656__$1;(statearr_256766_256869[(1)] = (45));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (37)))
{var inst_256638 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256767_256870 = state_256656__$1;(statearr_256767_256870[(2)] = inst_256638);
(statearr_256767_256870[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (63)))
{var inst_256618 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256768_256871 = state_256656__$1;(statearr_256768_256871[(2)] = inst_256618);
(statearr_256768_256871[(1)] = (60));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (8)))
{var inst_256423 = (state_256656[(13)]);var state_256656__$1 = state_256656;var statearr_256769_256872 = state_256656__$1;(statearr_256769_256872[(2)] = inst_256423);
(statearr_256769_256872[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_256657 === (49)))
{var inst_256630 = (state_256656[(2)]);var state_256656__$1 = state_256656;var statearr_256770_256873 = state_256656__$1;(statearr_256770_256873[(2)] = inst_256630);
(statearr_256770_256873[(1)] = (46));
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
});})(c__6202__auto___256787,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___256787,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_256774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_256774[(0)] = state_machine__6188__auto__);
(statearr_256774[(1)] = (1));
return statearr_256774;
});
var state_machine__6188__auto____1 = (function (state_256656){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_256656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e256775){if((e256775 instanceof Object))
{var ex__6191__auto__ = e256775;var statearr_256776_256874 = state_256656;(statearr_256776_256874[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_256656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e256775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__256875 = state_256656;
state_256656 = G__256875;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_256656){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_256656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___256787,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_256777 = f__6203__auto__.call(null);(statearr_256777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___256787);
return statearr_256777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___256787,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
