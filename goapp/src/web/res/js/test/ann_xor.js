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
return (function (ws,err){var vec__9670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__9670,(0),null);var h = cljs.core.nth.call(null,vec__9670,(1),null);var xoffset = (w / (5));var values = cljs.core.map.call(null,((function (vec__9670,w,h,xoffset,ctx){
return (function (input){return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
});})(vec__9670,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
(ctx["fillStyle"] = "#000");
var seq__9671_9685 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__9670,w,h,xoffset,values,ctx){
return (function (id,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__9670,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));var chunk__9672_9686 = null;var count__9673_9687 = (0);var i__9674_9688 = (0);while(true){
if((i__9674_9688 < count__9673_9687))
{var vec__9675_9689 = cljs.core._nth.call(null,chunk__9672_9686,i__9674_9688);var idx_9690 = cljs.core.nth.call(null,vec__9675_9689,(0),null);var v_9691 = cljs.core.nth.call(null,vec__9675_9689,(1),null);var G__9676_9692 = ctx;G__9676_9692.beginPath();
G__9676_9692.moveTo((xoffset * (idx_9690 + (1))),h);
G__9676_9692.lineTo((xoffset * (idx_9690 + (1))),(h - (v_9691 * h)));
(G__9676_9692["lineWidth"] = (3));
(G__9676_9692["strokeStyle"] = "#000000");
G__9676_9692.stroke();
G__9676_9692.fillText((function (){var pred__9677 = cljs.core._EQ_;var expr__9678 = idx_9690;if(cljs.core.truth_(pred__9677.call(null,(0),expr__9678)))
{return "X X";
} else
{if(cljs.core.truth_(pred__9677.call(null,(1),expr__9678)))
{return "X O";
} else
{if(cljs.core.truth_(pred__9677.call(null,(2),expr__9678)))
{return "O X";
} else
{if(cljs.core.truth_(pred__9677.call(null,(3),expr__9678)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9678))));
}
}
}
}
})(),((10) + (xoffset * (idx_9690 + (1)))),h);
{
var G__9693 = seq__9671_9685;
var G__9694 = chunk__9672_9686;
var G__9695 = count__9673_9687;
var G__9696 = (i__9674_9688 + (1));
seq__9671_9685 = G__9693;
chunk__9672_9686 = G__9694;
count__9673_9687 = G__9695;
i__9674_9688 = G__9696;
continue;
}
} else
{var temp__4126__auto___9697 = cljs.core.seq.call(null,seq__9671_9685);if(temp__4126__auto___9697)
{var seq__9671_9698__$1 = temp__4126__auto___9697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9671_9698__$1))
{var c__4307__auto___9699 = cljs.core.chunk_first.call(null,seq__9671_9698__$1);{
var G__9700 = cljs.core.chunk_rest.call(null,seq__9671_9698__$1);
var G__9701 = c__4307__auto___9699;
var G__9702 = cljs.core.count.call(null,c__4307__auto___9699);
var G__9703 = (0);
seq__9671_9685 = G__9700;
chunk__9672_9686 = G__9701;
count__9673_9687 = G__9702;
i__9674_9688 = G__9703;
continue;
}
} else
{var vec__9680_9704 = cljs.core.first.call(null,seq__9671_9698__$1);var idx_9705 = cljs.core.nth.call(null,vec__9680_9704,(0),null);var v_9706 = cljs.core.nth.call(null,vec__9680_9704,(1),null);var G__9681_9707 = ctx;G__9681_9707.beginPath();
G__9681_9707.moveTo((xoffset * (idx_9705 + (1))),h);
G__9681_9707.lineTo((xoffset * (idx_9705 + (1))),(h - (v_9706 * h)));
(G__9681_9707["lineWidth"] = (3));
(G__9681_9707["strokeStyle"] = "#000000");
G__9681_9707.stroke();
G__9681_9707.fillText((function (){var pred__9682 = cljs.core._EQ_;var expr__9683 = idx_9705;if(cljs.core.truth_(pred__9682.call(null,(0),expr__9683)))
{return "X X";
} else
{if(cljs.core.truth_(pred__9682.call(null,(1),expr__9683)))
{return "X O";
} else
{if(cljs.core.truth_(pred__9682.call(null,(2),expr__9683)))
{return "O X";
} else
{if(cljs.core.truth_(pred__9682.call(null,(3),expr__9683)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9683))));
}
}
}
}
})(),((10) + (xoffset * (idx_9705 + (1)))),h);
{
var G__9708 = cljs.core.next.call(null,seq__9671_9698__$1);
var G__9709 = null;
var G__9710 = (0);
var G__9711 = (0);
seq__9671_9685 = G__9708;
chunk__9672_9686 = G__9709;
count__9673_9687 = G__9710;
i__9674_9688 = G__9711;
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
return (function (state_9761){var state_val_9762 = (state_9761[(1)]);if((state_val_9762 === (4)))
{var inst_9751 = (state_9761[(7)]);var inst_9745 = (state_9761[(8)]);var inst_9756 = (state_9761[(2)]);var tmp9763 = inst_9745;var inst_9745__$1 = tmp9763;var inst_9746 = inst_9751;var state_9761__$1 = (function (){var statearr_9764 = state_9761;(statearr_9764[(9)] = inst_9746);
(statearr_9764[(10)] = inst_9756);
(statearr_9764[(8)] = inst_9745__$1);
return statearr_9764;
})();var statearr_9765_9776 = state_9761__$1;(statearr_9765_9776[(2)] = null);
(statearr_9765_9776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9762 === (3)))
{var inst_9759 = (state_9761[(2)]);var state_9761__$1 = state_9761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9761__$1,inst_9759);
} else
{if((state_val_9762 === (2)))
{var inst_9746 = (state_9761[(9)]);var inst_9751 = (state_9761[(7)]);var inst_9745 = (state_9761[(8)]);var inst_9749 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_9750 = ai.ann.Train.call(null,inst_9746,inst_9749,0.25,0.01);var inst_9751__$1 = cljs.core.nth.call(null,inst_9750,(0),null);var inst_9752 = cljs.core.nth.call(null,inst_9750,(1),null);var inst_9753 = test.ann_xor.draw.call(null,inst_9751__$1,inst_9752);var inst_9754 = cljs.core.async.timeout.call(null,inst_9745);var state_9761__$1 = (function (){var statearr_9766 = state_9761;(statearr_9766[(7)] = inst_9751__$1);
(statearr_9766[(11)] = inst_9753);
return statearr_9766;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9761__$1,(4),inst_9754);
} else
{if((state_val_9762 === (1)))
{var inst_9744 = ai.ann.RandWeights.call(null,(2),(2),(1));var inst_9745 = (10);var inst_9746 = inst_9744;var state_9761__$1 = (function (){var statearr_9767 = state_9761;(statearr_9767[(9)] = inst_9746);
(statearr_9767[(8)] = inst_9745);
return statearr_9767;
})();var statearr_9768_9777 = state_9761__$1;(statearr_9768_9777[(2)] = null);
(statearr_9768_9777[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_9772 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9772[(0)] = state_machine__6189__auto__);
(statearr_9772[(1)] = (1));
return statearr_9772;
});
var state_machine__6189__auto____1 = (function (state_9761){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9761);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9773){if((e9773 instanceof Object))
{var ex__6192__auto__ = e9773;var statearr_9774_9778 = state_9761;(statearr_9774_9778[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9779 = state_9761;
state_9761 = G__9779;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9761){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_9775 = f__6204__auto__.call(null);(statearr_9775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann_xor.main.call(null);
