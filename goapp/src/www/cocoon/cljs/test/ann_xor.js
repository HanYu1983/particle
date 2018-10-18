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
return (function (ws,err){var vec__13145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__13145,(0),null);var h = cljs.core.nth.call(null,vec__13145,(1),null);var xoffset = (w / (5));var values = cljs.core.map.call(null,((function (vec__13145,w,h,xoffset,ctx){
return (function (input){return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
});})(vec__13145,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
(ctx["fillStyle"] = "#000");
var seq__13146_13160 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__13145,w,h,xoffset,values,ctx){
return (function (id,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__13145,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));var chunk__13147_13161 = null;var count__13148_13162 = (0);var i__13149_13163 = (0);while(true){
if((i__13149_13163 < count__13148_13162))
{var vec__13150_13164 = cljs.core._nth.call(null,chunk__13147_13161,i__13149_13163);var idx_13165 = cljs.core.nth.call(null,vec__13150_13164,(0),null);var v_13166 = cljs.core.nth.call(null,vec__13150_13164,(1),null);var G__13151_13167 = ctx;G__13151_13167.beginPath();
G__13151_13167.moveTo((xoffset * (idx_13165 + (1))),h);
G__13151_13167.lineTo((xoffset * (idx_13165 + (1))),(h - (v_13166 * h)));
(G__13151_13167["lineWidth"] = (3));
(G__13151_13167["strokeStyle"] = "#000000");
G__13151_13167.stroke();
G__13151_13167.fillText((function (){var pred__13152 = cljs.core._EQ_;var expr__13153 = idx_13165;if(cljs.core.truth_(pred__13152.call(null,(0),expr__13153)))
{return "X X";
} else
{if(cljs.core.truth_(pred__13152.call(null,(1),expr__13153)))
{return "X O";
} else
{if(cljs.core.truth_(pred__13152.call(null,(2),expr__13153)))
{return "O X";
} else
{if(cljs.core.truth_(pred__13152.call(null,(3),expr__13153)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13153))));
}
}
}
}
})(),((10) + (xoffset * (idx_13165 + (1)))),h);
{
var G__13168 = seq__13146_13160;
var G__13169 = chunk__13147_13161;
var G__13170 = count__13148_13162;
var G__13171 = (i__13149_13163 + (1));
seq__13146_13160 = G__13168;
chunk__13147_13161 = G__13169;
count__13148_13162 = G__13170;
i__13149_13163 = G__13171;
continue;
}
} else
{var temp__4126__auto___13172 = cljs.core.seq.call(null,seq__13146_13160);if(temp__4126__auto___13172)
{var seq__13146_13173__$1 = temp__4126__auto___13172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13146_13173__$1))
{var c__4307__auto___13174 = cljs.core.chunk_first.call(null,seq__13146_13173__$1);{
var G__13175 = cljs.core.chunk_rest.call(null,seq__13146_13173__$1);
var G__13176 = c__4307__auto___13174;
var G__13177 = cljs.core.count.call(null,c__4307__auto___13174);
var G__13178 = (0);
seq__13146_13160 = G__13175;
chunk__13147_13161 = G__13176;
count__13148_13162 = G__13177;
i__13149_13163 = G__13178;
continue;
}
} else
{var vec__13155_13179 = cljs.core.first.call(null,seq__13146_13173__$1);var idx_13180 = cljs.core.nth.call(null,vec__13155_13179,(0),null);var v_13181 = cljs.core.nth.call(null,vec__13155_13179,(1),null);var G__13156_13182 = ctx;G__13156_13182.beginPath();
G__13156_13182.moveTo((xoffset * (idx_13180 + (1))),h);
G__13156_13182.lineTo((xoffset * (idx_13180 + (1))),(h - (v_13181 * h)));
(G__13156_13182["lineWidth"] = (3));
(G__13156_13182["strokeStyle"] = "#000000");
G__13156_13182.stroke();
G__13156_13182.fillText((function (){var pred__13157 = cljs.core._EQ_;var expr__13158 = idx_13180;if(cljs.core.truth_(pred__13157.call(null,(0),expr__13158)))
{return "X X";
} else
{if(cljs.core.truth_(pred__13157.call(null,(1),expr__13158)))
{return "X O";
} else
{if(cljs.core.truth_(pred__13157.call(null,(2),expr__13158)))
{return "O X";
} else
{if(cljs.core.truth_(pred__13157.call(null,(3),expr__13158)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13158))));
}
}
}
}
})(),((10) + (xoffset * (idx_13180 + (1)))),h);
{
var G__13183 = cljs.core.next.call(null,seq__13146_13173__$1);
var G__13184 = null;
var G__13185 = (0);
var G__13186 = (0);
seq__13146_13160 = G__13183;
chunk__13147_13161 = G__13184;
count__13148_13162 = G__13185;
i__13149_13163 = G__13186;
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
return (function (state_13236){var state_val_13237 = (state_13236[(1)]);if((state_val_13237 === (4)))
{var inst_13220 = (state_13236[(7)]);var inst_13226 = (state_13236[(8)]);var inst_13231 = (state_13236[(2)]);var tmp13238 = inst_13220;var inst_13220__$1 = tmp13238;var inst_13221 = inst_13226;var state_13236__$1 = (function (){var statearr_13239 = state_13236;(statearr_13239[(9)] = inst_13221);
(statearr_13239[(7)] = inst_13220__$1);
(statearr_13239[(10)] = inst_13231);
return statearr_13239;
})();var statearr_13240_13251 = state_13236__$1;(statearr_13240_13251[(2)] = null);
(statearr_13240_13251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13237 === (3)))
{var inst_13234 = (state_13236[(2)]);var state_13236__$1 = state_13236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13236__$1,inst_13234);
} else
{if((state_val_13237 === (2)))
{var inst_13221 = (state_13236[(9)]);var inst_13220 = (state_13236[(7)]);var inst_13226 = (state_13236[(8)]);var inst_13224 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_13225 = ai.ann.Train.call(null,inst_13221,inst_13224,0.25,0.01);var inst_13226__$1 = cljs.core.nth.call(null,inst_13225,(0),null);var inst_13227 = cljs.core.nth.call(null,inst_13225,(1),null);var inst_13228 = test.ann_xor.draw.call(null,inst_13226__$1,inst_13227);var inst_13229 = cljs.core.async.timeout.call(null,inst_13220);var state_13236__$1 = (function (){var statearr_13241 = state_13236;(statearr_13241[(8)] = inst_13226__$1);
(statearr_13241[(11)] = inst_13228);
return statearr_13241;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13236__$1,(4),inst_13229);
} else
{if((state_val_13237 === (1)))
{var inst_13219 = ai.ann.RandWeights.call(null,(2),(2),(1));var inst_13220 = (10);var inst_13221 = inst_13219;var state_13236__$1 = (function (){var statearr_13242 = state_13236;(statearr_13242[(9)] = inst_13221);
(statearr_13242[(7)] = inst_13220);
return statearr_13242;
})();var statearr_13243_13252 = state_13236__$1;(statearr_13243_13252[(2)] = null);
(statearr_13243_13252[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_13247 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13247[(0)] = state_machine__6189__auto__);
(statearr_13247[(1)] = (1));
return statearr_13247;
});
var state_machine__6189__auto____1 = (function (state_13236){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13236);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object))
{var ex__6192__auto__ = e13248;var statearr_13249_13253 = state_13236;(statearr_13249_13253[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13236);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13254 = state_13236;
state_13236 = G__13254;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13236){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_13250 = f__6204__auto__.call(null);(statearr_13250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann_xor.main.call(null);
