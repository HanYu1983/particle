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
return (function (ws,err){var vec__9939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__9939,(0),null);var h = cljs.core.nth.call(null,vec__9939,(1),null);var xoffset = (w / (5));var values = cljs.core.map.call(null,((function (vec__9939,w,h,xoffset,ctx){
return (function (input){return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
});})(vec__9939,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
(ctx["fillStyle"] = "#000");
var seq__9940_9954 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__9939,w,h,xoffset,values,ctx){
return (function (id,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__9939,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));var chunk__9941_9955 = null;var count__9942_9956 = (0);var i__9943_9957 = (0);while(true){
if((i__9943_9957 < count__9942_9956))
{var vec__9944_9958 = cljs.core._nth.call(null,chunk__9941_9955,i__9943_9957);var idx_9959 = cljs.core.nth.call(null,vec__9944_9958,(0),null);var v_9960 = cljs.core.nth.call(null,vec__9944_9958,(1),null);var G__9945_9961 = ctx;G__9945_9961.beginPath();
G__9945_9961.moveTo((xoffset * (idx_9959 + (1))),h);
G__9945_9961.lineTo((xoffset * (idx_9959 + (1))),(h - (v_9960 * h)));
(G__9945_9961["lineWidth"] = (3));
(G__9945_9961["strokeStyle"] = "#000000");
G__9945_9961.stroke();
G__9945_9961.fillText((function (){var pred__9946 = cljs.core._EQ_;var expr__9947 = idx_9959;if(cljs.core.truth_(pred__9946.call(null,(0),expr__9947)))
{return "X X";
} else
{if(cljs.core.truth_(pred__9946.call(null,(1),expr__9947)))
{return "X O";
} else
{if(cljs.core.truth_(pred__9946.call(null,(2),expr__9947)))
{return "O X";
} else
{if(cljs.core.truth_(pred__9946.call(null,(3),expr__9947)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9947))));
}
}
}
}
})(),((10) + (xoffset * (idx_9959 + (1)))),h);
{
var G__9962 = seq__9940_9954;
var G__9963 = chunk__9941_9955;
var G__9964 = count__9942_9956;
var G__9965 = (i__9943_9957 + (1));
seq__9940_9954 = G__9962;
chunk__9941_9955 = G__9963;
count__9942_9956 = G__9964;
i__9943_9957 = G__9965;
continue;
}
} else
{var temp__4126__auto___9966 = cljs.core.seq.call(null,seq__9940_9954);if(temp__4126__auto___9966)
{var seq__9940_9967__$1 = temp__4126__auto___9966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9940_9967__$1))
{var c__4307__auto___9968 = cljs.core.chunk_first.call(null,seq__9940_9967__$1);{
var G__9969 = cljs.core.chunk_rest.call(null,seq__9940_9967__$1);
var G__9970 = c__4307__auto___9968;
var G__9971 = cljs.core.count.call(null,c__4307__auto___9968);
var G__9972 = (0);
seq__9940_9954 = G__9969;
chunk__9941_9955 = G__9970;
count__9942_9956 = G__9971;
i__9943_9957 = G__9972;
continue;
}
} else
{var vec__9949_9973 = cljs.core.first.call(null,seq__9940_9967__$1);var idx_9974 = cljs.core.nth.call(null,vec__9949_9973,(0),null);var v_9975 = cljs.core.nth.call(null,vec__9949_9973,(1),null);var G__9950_9976 = ctx;G__9950_9976.beginPath();
G__9950_9976.moveTo((xoffset * (idx_9974 + (1))),h);
G__9950_9976.lineTo((xoffset * (idx_9974 + (1))),(h - (v_9975 * h)));
(G__9950_9976["lineWidth"] = (3));
(G__9950_9976["strokeStyle"] = "#000000");
G__9950_9976.stroke();
G__9950_9976.fillText((function (){var pred__9951 = cljs.core._EQ_;var expr__9952 = idx_9974;if(cljs.core.truth_(pred__9951.call(null,(0),expr__9952)))
{return "X X";
} else
{if(cljs.core.truth_(pred__9951.call(null,(1),expr__9952)))
{return "X O";
} else
{if(cljs.core.truth_(pred__9951.call(null,(2),expr__9952)))
{return "O X";
} else
{if(cljs.core.truth_(pred__9951.call(null,(3),expr__9952)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9952))));
}
}
}
}
})(),((10) + (xoffset * (idx_9974 + (1)))),h);
{
var G__9977 = cljs.core.next.call(null,seq__9940_9967__$1);
var G__9978 = null;
var G__9979 = (0);
var G__9980 = (0);
seq__9940_9954 = G__9977;
chunk__9941_9955 = G__9978;
count__9942_9956 = G__9979;
i__9943_9957 = G__9980;
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
return (function (state_10030){var state_val_10031 = (state_10030[(1)]);if((state_val_10031 === (4)))
{var inst_10014 = (state_10030[(7)]);var inst_10020 = (state_10030[(8)]);var inst_10025 = (state_10030[(2)]);var tmp10032 = inst_10014;var inst_10014__$1 = tmp10032;var inst_10015 = inst_10020;var state_10030__$1 = (function (){var statearr_10033 = state_10030;(statearr_10033[(7)] = inst_10014__$1);
(statearr_10033[(9)] = inst_10025);
(statearr_10033[(10)] = inst_10015);
return statearr_10033;
})();var statearr_10034_10045 = state_10030__$1;(statearr_10034_10045[(2)] = null);
(statearr_10034_10045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (3)))
{var inst_10028 = (state_10030[(2)]);var state_10030__$1 = state_10030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else
{if((state_val_10031 === (2)))
{var inst_10014 = (state_10030[(7)]);var inst_10020 = (state_10030[(8)]);var inst_10015 = (state_10030[(10)]);var inst_10018 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_10019 = ai.ann.Train.call(null,inst_10015,inst_10018,0.25,0.01);var inst_10020__$1 = cljs.core.nth.call(null,inst_10019,(0),null);var inst_10021 = cljs.core.nth.call(null,inst_10019,(1),null);var inst_10022 = test.ann_xor.draw.call(null,inst_10020__$1,inst_10021);var inst_10023 = cljs.core.async.timeout.call(null,inst_10014);var state_10030__$1 = (function (){var statearr_10035 = state_10030;(statearr_10035[(8)] = inst_10020__$1);
(statearr_10035[(11)] = inst_10022);
return statearr_10035;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(4),inst_10023);
} else
{if((state_val_10031 === (1)))
{var inst_10013 = ai.ann.RandWeights.call(null,(2),(2),(1));var inst_10014 = (10);var inst_10015 = inst_10013;var state_10030__$1 = (function (){var statearr_10036 = state_10030;(statearr_10036[(7)] = inst_10014);
(statearr_10036[(10)] = inst_10015);
return statearr_10036;
})();var statearr_10037_10046 = state_10030__$1;(statearr_10037_10046[(2)] = null);
(statearr_10037_10046[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_10041 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10041[(0)] = state_machine__6189__auto__);
(statearr_10041[(1)] = (1));
return statearr_10041;
});
var state_machine__6189__auto____1 = (function (state_10030){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10042){if((e10042 instanceof Object))
{var ex__6192__auto__ = e10042;var statearr_10043_10047 = state_10030;(statearr_10043_10047[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10048 = state_10030;
state_10030 = G__10048;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10044 = f__6204__auto__.call(null);(statearr_10044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann_xor.main.call(null);
