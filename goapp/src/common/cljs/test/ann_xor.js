// Compiled by ClojureScript 0.0-2268
goog.provide('test.ann_xor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ai.ann');
goog.require('ai.ann');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('clojure.walk');
test.ann_xor.draw = (function draw(canvas){var ctx = canvas.getContext("2d");return ((function (ctx){
return (function (ws,err){var vec__13473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__13473,(0),null);var h = cljs.core.nth.call(null,vec__13473,(1),null);var xoffset = (w / (5));var values = cljs.core.map.call(null,((function (vec__13473,w,h,xoffset,ctx){
return (function (input){return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
});})(vec__13473,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
(ctx["fillStyle"] = "#000");
var seq__13474_13488 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__13473,w,h,xoffset,values,ctx){
return (function (id,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__13473,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));var chunk__13475_13489 = null;var count__13476_13490 = (0);var i__13477_13491 = (0);while(true){
if((i__13477_13491 < count__13476_13490))
{var vec__13478_13492 = cljs.core._nth.call(null,chunk__13475_13489,i__13477_13491);var idx_13493 = cljs.core.nth.call(null,vec__13478_13492,(0),null);var v_13494 = cljs.core.nth.call(null,vec__13478_13492,(1),null);var G__13479_13495 = ctx;G__13479_13495.beginPath();
G__13479_13495.moveTo((xoffset * (idx_13493 + (1))),h);
G__13479_13495.lineTo((xoffset * (idx_13493 + (1))),(h - (v_13494 * h)));
(G__13479_13495["lineWidth"] = (3));
(G__13479_13495["strokeStyle"] = "#000000");
G__13479_13495.stroke();
G__13479_13495.fillText((function (){var pred__13480 = cljs.core._EQ_;var expr__13481 = idx_13493;if(cljs.core.truth_(pred__13480.call(null,(0),expr__13481)))
{return "X X";
} else
{if(cljs.core.truth_(pred__13480.call(null,(1),expr__13481)))
{return "X O";
} else
{if(cljs.core.truth_(pred__13480.call(null,(2),expr__13481)))
{return "O X";
} else
{if(cljs.core.truth_(pred__13480.call(null,(3),expr__13481)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13481))));
}
}
}
}
})(),((10) + (xoffset * (idx_13493 + (1)))),h);
{
var G__13496 = seq__13474_13488;
var G__13497 = chunk__13475_13489;
var G__13498 = count__13476_13490;
var G__13499 = (i__13477_13491 + (1));
seq__13474_13488 = G__13496;
chunk__13475_13489 = G__13497;
count__13476_13490 = G__13498;
i__13477_13491 = G__13499;
continue;
}
} else
{var temp__4126__auto___13500 = cljs.core.seq.call(null,seq__13474_13488);if(temp__4126__auto___13500)
{var seq__13474_13501__$1 = temp__4126__auto___13500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13474_13501__$1))
{var c__4307__auto___13502 = cljs.core.chunk_first.call(null,seq__13474_13501__$1);{
var G__13503 = cljs.core.chunk_rest.call(null,seq__13474_13501__$1);
var G__13504 = c__4307__auto___13502;
var G__13505 = cljs.core.count.call(null,c__4307__auto___13502);
var G__13506 = (0);
seq__13474_13488 = G__13503;
chunk__13475_13489 = G__13504;
count__13476_13490 = G__13505;
i__13477_13491 = G__13506;
continue;
}
} else
{var vec__13483_13507 = cljs.core.first.call(null,seq__13474_13501__$1);var idx_13508 = cljs.core.nth.call(null,vec__13483_13507,(0),null);var v_13509 = cljs.core.nth.call(null,vec__13483_13507,(1),null);var G__13484_13510 = ctx;G__13484_13510.beginPath();
G__13484_13510.moveTo((xoffset * (idx_13508 + (1))),h);
G__13484_13510.lineTo((xoffset * (idx_13508 + (1))),(h - (v_13509 * h)));
(G__13484_13510["lineWidth"] = (3));
(G__13484_13510["strokeStyle"] = "#000000");
G__13484_13510.stroke();
G__13484_13510.fillText((function (){var pred__13485 = cljs.core._EQ_;var expr__13486 = idx_13508;if(cljs.core.truth_(pred__13485.call(null,(0),expr__13486)))
{return "X X";
} else
{if(cljs.core.truth_(pred__13485.call(null,(1),expr__13486)))
{return "X O";
} else
{if(cljs.core.truth_(pred__13485.call(null,(2),expr__13486)))
{return "O X";
} else
{if(cljs.core.truth_(pred__13485.call(null,(3),expr__13486)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13486))));
}
}
}
}
})(),((10) + (xoffset * (idx_13508 + (1)))),h);
{
var G__13511 = cljs.core.next.call(null,seq__13474_13501__$1);
var G__13512 = null;
var G__13513 = (0);
var G__13514 = (0);
seq__13474_13488 = G__13511;
chunk__13475_13489 = G__13512;
count__13476_13490 = G__13513;
i__13477_13491 = G__13514;
continue;
}
}
} else
{}
}
break;
}
ctx.fillText(("\u8AA4\u5DEE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)),(20),(20));
return null;
});
;})(ctx))
});
test.ann_xor.draw = test.ann_xor.draw.call(null,document.getElementById("canvas"));
test.ann_xor.main = (function main(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_13564){var state_val_13565 = (state_13564[(1)]);if((state_val_13565 === (4)))
{var inst_13554 = (state_13564[(7)]);var inst_13548 = (state_13564[(8)]);var inst_13559 = (state_13564[(2)]);var tmp13566 = inst_13548;var inst_13548__$1 = tmp13566;var inst_13549 = inst_13554;var state_13564__$1 = (function (){var statearr_13567 = state_13564;(statearr_13567[(9)] = inst_13549);
(statearr_13567[(10)] = inst_13559);
(statearr_13567[(8)] = inst_13548__$1);
return statearr_13567;
})();var statearr_13568_13579 = state_13564__$1;(statearr_13568_13579[(2)] = null);
(statearr_13568_13579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13565 === (3)))
{var inst_13562 = (state_13564[(2)]);var state_13564__$1 = state_13564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13564__$1,inst_13562);
} else
{if((state_val_13565 === (2)))
{var inst_13554 = (state_13564[(7)]);var inst_13549 = (state_13564[(9)]);var inst_13548 = (state_13564[(8)]);var inst_13552 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_13553 = ai.ann.Train.call(null,inst_13549,inst_13552,0.25,0.01);var inst_13554__$1 = cljs.core.nth.call(null,inst_13553,(0),null);var inst_13555 = cljs.core.nth.call(null,inst_13553,(1),null);var inst_13556 = test.ann_xor.draw.call(null,inst_13554__$1,inst_13555);var inst_13557 = cljs.core.async.timeout.call(null,inst_13548);var state_13564__$1 = (function (){var statearr_13569 = state_13564;(statearr_13569[(7)] = inst_13554__$1);
(statearr_13569[(11)] = inst_13556);
return statearr_13569;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13564__$1,(4),inst_13557);
} else
{if((state_val_13565 === (1)))
{var inst_13547 = ai.ann.RandWeights.call(null,(2),(2),(1));var inst_13548 = (10);var inst_13549 = inst_13547;var state_13564__$1 = (function (){var statearr_13570 = state_13564;(statearr_13570[(9)] = inst_13549);
(statearr_13570[(8)] = inst_13548);
return statearr_13570;
})();var statearr_13571_13580 = state_13564__$1;(statearr_13571_13580[(2)] = null);
(statearr_13571_13580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13575 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13575[(0)] = state_machine__6189__auto__);
(statearr_13575[(1)] = (1));
return statearr_13575;
});
var state_machine__6189__auto____1 = (function (state_13564){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13564);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13576){if((e13576 instanceof Object))
{var ex__6192__auto__ = e13576;var statearr_13577_13581 = state_13564;(statearr_13577_13581[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13582 = state_13564;
state_13564 = G__13582;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13564){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13578 = f__6204__auto__.call(null);(statearr_13578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann_xor.main.call(null);
