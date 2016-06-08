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
return (function (ws,err){var vec__22546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__22546,(0),null);var h = cljs.core.nth.call(null,vec__22546,(1),null);var xoffset = (w / (5));var values = cljs.core.map.call(null,((function (vec__22546,w,h,xoffset,ctx){
return (function (input){return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
});})(vec__22546,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
(ctx["fillStyle"] = "#000");
var seq__22547_22561 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__22546,w,h,xoffset,values,ctx){
return (function (id,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__22546,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));var chunk__22548_22562 = null;var count__22549_22563 = (0);var i__22550_22564 = (0);while(true){
if((i__22550_22564 < count__22549_22563))
{var vec__22551_22565 = cljs.core._nth.call(null,chunk__22548_22562,i__22550_22564);var idx_22566 = cljs.core.nth.call(null,vec__22551_22565,(0),null);var v_22567 = cljs.core.nth.call(null,vec__22551_22565,(1),null);var G__22552_22568 = ctx;G__22552_22568.beginPath();
G__22552_22568.moveTo((xoffset * (idx_22566 + (1))),h);
G__22552_22568.lineTo((xoffset * (idx_22566 + (1))),(h - (v_22567 * h)));
(G__22552_22568["lineWidth"] = (3));
(G__22552_22568["strokeStyle"] = "#000000");
G__22552_22568.stroke();
G__22552_22568.fillText((function (){var pred__22553 = cljs.core._EQ_;var expr__22554 = idx_22566;if(cljs.core.truth_(pred__22553.call(null,(0),expr__22554)))
{return "X X";
} else
{if(cljs.core.truth_(pred__22553.call(null,(1),expr__22554)))
{return "X O";
} else
{if(cljs.core.truth_(pred__22553.call(null,(2),expr__22554)))
{return "O X";
} else
{if(cljs.core.truth_(pred__22553.call(null,(3),expr__22554)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22554))));
}
}
}
}
})(),((10) + (xoffset * (idx_22566 + (1)))),h);
{
var G__22569 = seq__22547_22561;
var G__22570 = chunk__22548_22562;
var G__22571 = count__22549_22563;
var G__22572 = (i__22550_22564 + (1));
seq__22547_22561 = G__22569;
chunk__22548_22562 = G__22570;
count__22549_22563 = G__22571;
i__22550_22564 = G__22572;
continue;
}
} else
{var temp__4126__auto___22573 = cljs.core.seq.call(null,seq__22547_22561);if(temp__4126__auto___22573)
{var seq__22547_22574__$1 = temp__4126__auto___22573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22547_22574__$1))
{var c__4307__auto___22575 = cljs.core.chunk_first.call(null,seq__22547_22574__$1);{
var G__22576 = cljs.core.chunk_rest.call(null,seq__22547_22574__$1);
var G__22577 = c__4307__auto___22575;
var G__22578 = cljs.core.count.call(null,c__4307__auto___22575);
var G__22579 = (0);
seq__22547_22561 = G__22576;
chunk__22548_22562 = G__22577;
count__22549_22563 = G__22578;
i__22550_22564 = G__22579;
continue;
}
} else
{var vec__22556_22580 = cljs.core.first.call(null,seq__22547_22574__$1);var idx_22581 = cljs.core.nth.call(null,vec__22556_22580,(0),null);var v_22582 = cljs.core.nth.call(null,vec__22556_22580,(1),null);var G__22557_22583 = ctx;G__22557_22583.beginPath();
G__22557_22583.moveTo((xoffset * (idx_22581 + (1))),h);
G__22557_22583.lineTo((xoffset * (idx_22581 + (1))),(h - (v_22582 * h)));
(G__22557_22583["lineWidth"] = (3));
(G__22557_22583["strokeStyle"] = "#000000");
G__22557_22583.stroke();
G__22557_22583.fillText((function (){var pred__22558 = cljs.core._EQ_;var expr__22559 = idx_22581;if(cljs.core.truth_(pred__22558.call(null,(0),expr__22559)))
{return "X X";
} else
{if(cljs.core.truth_(pred__22558.call(null,(1),expr__22559)))
{return "X O";
} else
{if(cljs.core.truth_(pred__22558.call(null,(2),expr__22559)))
{return "O X";
} else
{if(cljs.core.truth_(pred__22558.call(null,(3),expr__22559)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22559))));
}
}
}
}
})(),((10) + (xoffset * (idx_22581 + (1)))),h);
{
var G__22584 = cljs.core.next.call(null,seq__22547_22574__$1);
var G__22585 = null;
var G__22586 = (0);
var G__22587 = (0);
seq__22547_22561 = G__22584;
chunk__22548_22562 = G__22585;
count__22549_22563 = G__22586;
i__22550_22564 = G__22587;
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
test.ann_xor.main = (function main(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_22637){var state_val_22638 = (state_22637[(1)]);if((state_val_22638 === (4)))
{var inst_22621 = (state_22637[(7)]);var inst_22627 = (state_22637[(8)]);var inst_22632 = (state_22637[(2)]);var tmp22639 = inst_22621;var inst_22621__$1 = tmp22639;var inst_22622 = inst_22627;var state_22637__$1 = (function (){var statearr_22640 = state_22637;(statearr_22640[(9)] = inst_22622);
(statearr_22640[(10)] = inst_22632);
(statearr_22640[(7)] = inst_22621__$1);
return statearr_22640;
})();var statearr_22641_22652 = state_22637__$1;(statearr_22641_22652[(2)] = null);
(statearr_22641_22652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22638 === (3)))
{var inst_22635 = (state_22637[(2)]);var state_22637__$1 = state_22637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22637__$1,inst_22635);
} else
{if((state_val_22638 === (2)))
{var inst_22622 = (state_22637[(9)]);var inst_22621 = (state_22637[(7)]);var inst_22627 = (state_22637[(8)]);var inst_22625 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_22626 = ai.ann.Train.call(null,inst_22622,inst_22625,0.25,0.01);var inst_22627__$1 = cljs.core.nth.call(null,inst_22626,(0),null);var inst_22628 = cljs.core.nth.call(null,inst_22626,(1),null);var inst_22629 = test.ann_xor.draw.call(null,inst_22627__$1,inst_22628);var inst_22630 = cljs.core.async.timeout.call(null,inst_22621);var state_22637__$1 = (function (){var statearr_22642 = state_22637;(statearr_22642[(11)] = inst_22629);
(statearr_22642[(8)] = inst_22627__$1);
return statearr_22642;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22637__$1,(4),inst_22630);
} else
{if((state_val_22638 === (1)))
{var inst_22620 = ai.ann.RandWeights.call(null,(2),(2),(1));var inst_22621 = (10);var inst_22622 = inst_22620;var state_22637__$1 = (function (){var statearr_22643 = state_22637;(statearr_22643[(9)] = inst_22622);
(statearr_22643[(7)] = inst_22621);
return statearr_22643;
})();var statearr_22644_22653 = state_22637__$1;(statearr_22644_22653[(2)] = null);
(statearr_22644_22653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22648 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22648[(0)] = state_machine__6188__auto__);
(statearr_22648[(1)] = (1));
return statearr_22648;
});
var state_machine__6188__auto____1 = (function (state_22637){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22649){if((e22649 instanceof Object))
{var ex__6191__auto__ = e22649;var statearr_22650_22654 = state_22637;(statearr_22650_22654[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22655 = state_22637;
state_22637 = G__22655;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22637){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_22651 = f__6203__auto__.call(null);(statearr_22651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.ann_xor.main.call(null);
