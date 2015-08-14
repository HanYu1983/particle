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
return (function (ws,err){var vec__11198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__11198,(0),null);var h = cljs.core.nth.call(null,vec__11198,(1),null);var xoffset = (w / (5));var values = cljs.core.map.call(null,((function (vec__11198,w,h,xoffset,ctx){
return (function (input){return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,input),ws)));
});})(vec__11198,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));(ctx["fillStyle"] = "#FFFF00");
ctx.fillRect((0),(0),w,h);
(ctx["fillStyle"] = "#000");
var seq__11199_11213 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__11198,w,h,xoffset,values,ctx){
return (function (id,v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__11198,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));var chunk__11200_11214 = null;var count__11201_11215 = (0);var i__11202_11216 = (0);while(true){
if((i__11202_11216 < count__11201_11215))
{var vec__11203_11217 = cljs.core._nth.call(null,chunk__11200_11214,i__11202_11216);var idx_11218 = cljs.core.nth.call(null,vec__11203_11217,(0),null);var v_11219 = cljs.core.nth.call(null,vec__11203_11217,(1),null);var G__11204_11220 = ctx;G__11204_11220.beginPath();
G__11204_11220.moveTo((xoffset * (idx_11218 + (1))),h);
G__11204_11220.lineTo((xoffset * (idx_11218 + (1))),(h - (v_11219 * h)));
(G__11204_11220["lineWidth"] = (3));
(G__11204_11220["strokeStyle"] = "#000000");
G__11204_11220.stroke();
G__11204_11220.fillText((function (){var pred__11205 = cljs.core._EQ_;var expr__11206 = idx_11218;if(cljs.core.truth_(pred__11205.call(null,(0),expr__11206)))
{return "X X";
} else
{if(cljs.core.truth_(pred__11205.call(null,(1),expr__11206)))
{return "X O";
} else
{if(cljs.core.truth_(pred__11205.call(null,(2),expr__11206)))
{return "O X";
} else
{if(cljs.core.truth_(pred__11205.call(null,(3),expr__11206)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11206))));
}
}
}
}
})(),((10) + (xoffset * (idx_11218 + (1)))),h);
{
var G__11221 = seq__11199_11213;
var G__11222 = chunk__11200_11214;
var G__11223 = count__11201_11215;
var G__11224 = (i__11202_11216 + (1));
seq__11199_11213 = G__11221;
chunk__11200_11214 = G__11222;
count__11201_11215 = G__11223;
i__11202_11216 = G__11224;
continue;
}
} else
{var temp__4126__auto___11225 = cljs.core.seq.call(null,seq__11199_11213);if(temp__4126__auto___11225)
{var seq__11199_11226__$1 = temp__4126__auto___11225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11199_11226__$1))
{var c__4307__auto___11227 = cljs.core.chunk_first.call(null,seq__11199_11226__$1);{
var G__11228 = cljs.core.chunk_rest.call(null,seq__11199_11226__$1);
var G__11229 = c__4307__auto___11227;
var G__11230 = cljs.core.count.call(null,c__4307__auto___11227);
var G__11231 = (0);
seq__11199_11213 = G__11228;
chunk__11200_11214 = G__11229;
count__11201_11215 = G__11230;
i__11202_11216 = G__11231;
continue;
}
} else
{var vec__11208_11232 = cljs.core.first.call(null,seq__11199_11226__$1);var idx_11233 = cljs.core.nth.call(null,vec__11208_11232,(0),null);var v_11234 = cljs.core.nth.call(null,vec__11208_11232,(1),null);var G__11209_11235 = ctx;G__11209_11235.beginPath();
G__11209_11235.moveTo((xoffset * (idx_11233 + (1))),h);
G__11209_11235.lineTo((xoffset * (idx_11233 + (1))),(h - (v_11234 * h)));
(G__11209_11235["lineWidth"] = (3));
(G__11209_11235["strokeStyle"] = "#000000");
G__11209_11235.stroke();
G__11209_11235.fillText((function (){var pred__11210 = cljs.core._EQ_;var expr__11211 = idx_11233;if(cljs.core.truth_(pred__11210.call(null,(0),expr__11211)))
{return "X X";
} else
{if(cljs.core.truth_(pred__11210.call(null,(1),expr__11211)))
{return "X O";
} else
{if(cljs.core.truth_(pred__11210.call(null,(2),expr__11211)))
{return "O X";
} else
{if(cljs.core.truth_(pred__11210.call(null,(3),expr__11211)))
{return "O O";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11211))));
}
}
}
}
})(),((10) + (xoffset * (idx_11233 + (1)))),h);
{
var G__11236 = cljs.core.next.call(null,seq__11199_11226__$1);
var G__11237 = null;
var G__11238 = (0);
var G__11239 = (0);
seq__11199_11213 = G__11236;
chunk__11200_11214 = G__11237;
count__11201_11215 = G__11238;
i__11202_11216 = G__11239;
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
return (function (state_11289){var state_val_11290 = (state_11289[(1)]);if((state_val_11290 === (4)))
{var inst_11273 = (state_11289[(7)]);var inst_11279 = (state_11289[(8)]);var inst_11284 = (state_11289[(2)]);var tmp11291 = inst_11273;var inst_11273__$1 = tmp11291;var inst_11274 = inst_11279;var state_11289__$1 = (function (){var statearr_11292 = state_11289;(statearr_11292[(7)] = inst_11273__$1);
(statearr_11292[(9)] = inst_11274);
(statearr_11292[(10)] = inst_11284);
return statearr_11292;
})();var statearr_11293_11304 = state_11289__$1;(statearr_11293_11304[(2)] = null);
(statearr_11293_11304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11290 === (3)))
{var inst_11287 = (state_11289[(2)]);var state_11289__$1 = state_11289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11289__$1,inst_11287);
} else
{if((state_val_11290 === (2)))
{var inst_11273 = (state_11289[(7)]);var inst_11274 = (state_11289[(9)]);var inst_11279 = (state_11289[(8)]);var inst_11277 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));var inst_11278 = ai.ann.Train.call(null,inst_11274,inst_11277,0.25,0.01);var inst_11279__$1 = cljs.core.nth.call(null,inst_11278,(0),null);var inst_11280 = cljs.core.nth.call(null,inst_11278,(1),null);var inst_11281 = test.ann_xor.draw.call(null,inst_11279__$1,inst_11280);var inst_11282 = cljs.core.async.timeout.call(null,inst_11273);var state_11289__$1 = (function (){var statearr_11294 = state_11289;(statearr_11294[(11)] = inst_11281);
(statearr_11294[(8)] = inst_11279__$1);
return statearr_11294;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(4),inst_11282);
} else
{if((state_val_11290 === (1)))
{var inst_11272 = ai.ann.RandWeights.call(null,(2),(2),(1));var inst_11273 = (10);var inst_11274 = inst_11272;var state_11289__$1 = (function (){var statearr_11295 = state_11289;(statearr_11295[(7)] = inst_11273);
(statearr_11295[(9)] = inst_11274);
return statearr_11295;
})();var statearr_11296_11305 = state_11289__$1;(statearr_11296_11305[(2)] = null);
(statearr_11296_11305[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_11300 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11300[(0)] = state_machine__6189__auto__);
(statearr_11300[(1)] = (1));
return statearr_11300;
});
var state_machine__6189__auto____1 = (function (state_11289){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11289);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11301){if((e11301 instanceof Object))
{var ex__6192__auto__ = e11301;var statearr_11302_11306 = state_11289;(statearr_11302_11306[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11307 = state_11289;
state_11289 = G__11307;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11289){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11303 = f__6204__auto__.call(null);(statearr_11303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.ann_xor.main.call(null);
