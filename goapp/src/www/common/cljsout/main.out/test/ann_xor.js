// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.ann_xor');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('ai.ann');
test.ann_xor.draw = (function test$ann_xor$draw(canvas){
var ctx = canvas.getContext("2d");
return ((function (ctx){
return (function (ws,err){
var vec__5051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);
var w = cljs.core.nth.call(null,vec__5051,(0),null);
var h = cljs.core.nth.call(null,vec__5051,(1),null);
var xoffset = (w / (5));
var values = cljs.core.map.call(null,((function (vec__5051,w,h,xoffset,ctx){
return (function (input){
return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,(new cljs.core.List(null,input,null,(1),null)),ws)));
});})(vec__5051,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));
(ctx["fillStyle"] = "#FFFF00");

ctx.fillRect((0),(0),w,h);

(ctx["fillStyle"] = "#000");

var seq__5054_5072 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__5051,w,h,xoffset,values,ctx){
return (function (id,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__5051,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));
var chunk__5055_5073 = null;
var count__5056_5074 = (0);
var i__5057_5075 = (0);
while(true){
if((i__5057_5075 < count__5056_5074)){
var vec__5058_5076 = cljs.core._nth.call(null,chunk__5055_5073,i__5057_5075);
var idx_5077 = cljs.core.nth.call(null,vec__5058_5076,(0),null);
var v_5078 = cljs.core.nth.call(null,vec__5058_5076,(1),null);
var G__5061_5079 = ctx;
G__5061_5079.beginPath();

G__5061_5079.moveTo((xoffset * (idx_5077 + (1))),h);

G__5061_5079.lineTo((xoffset * (idx_5077 + (1))),(h - (v_5078 * h)));

(G__5061_5079["lineWidth"] = (3));

(G__5061_5079["strokeStyle"] = "#000000");

G__5061_5079.stroke();

G__5061_5079.fillText((function (){var pred__5062 = cljs.core._EQ_;
var expr__5063 = idx_5077;
if(cljs.core.truth_(pred__5062.call(null,(0),expr__5063))){
return "X X";
} else {
if(cljs.core.truth_(pred__5062.call(null,(1),expr__5063))){
return "X O";
} else {
if(cljs.core.truth_(pred__5062.call(null,(2),expr__5063))){
return "O X";
} else {
if(cljs.core.truth_(pred__5062.call(null,(3),expr__5063))){
return "O O";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5063)].join('')));
}
}
}
}
})(),((10) + (xoffset * (idx_5077 + (1)))),h);




var G__5080 = seq__5054_5072;
var G__5081 = chunk__5055_5073;
var G__5082 = count__5056_5074;
var G__5083 = (i__5057_5075 + (1));
seq__5054_5072 = G__5080;
chunk__5055_5073 = G__5081;
count__5056_5074 = G__5082;
i__5057_5075 = G__5083;
continue;
} else {
var temp__5457__auto___5084 = cljs.core.seq.call(null,seq__5054_5072);
if(temp__5457__auto___5084){
var seq__5054_5085__$1 = temp__5457__auto___5084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5054_5085__$1)){
var c__4319__auto___5086 = cljs.core.chunk_first.call(null,seq__5054_5085__$1);
var G__5087 = cljs.core.chunk_rest.call(null,seq__5054_5085__$1);
var G__5088 = c__4319__auto___5086;
var G__5089 = cljs.core.count.call(null,c__4319__auto___5086);
var G__5090 = (0);
seq__5054_5072 = G__5087;
chunk__5055_5073 = G__5088;
count__5056_5074 = G__5089;
i__5057_5075 = G__5090;
continue;
} else {
var vec__5065_5091 = cljs.core.first.call(null,seq__5054_5085__$1);
var idx_5092 = cljs.core.nth.call(null,vec__5065_5091,(0),null);
var v_5093 = cljs.core.nth.call(null,vec__5065_5091,(1),null);
var G__5068_5094 = ctx;
G__5068_5094.beginPath();

G__5068_5094.moveTo((xoffset * (idx_5092 + (1))),h);

G__5068_5094.lineTo((xoffset * (idx_5092 + (1))),(h - (v_5093 * h)));

(G__5068_5094["lineWidth"] = (3));

(G__5068_5094["strokeStyle"] = "#000000");

G__5068_5094.stroke();

G__5068_5094.fillText((function (){var pred__5069 = cljs.core._EQ_;
var expr__5070 = idx_5092;
if(cljs.core.truth_(pred__5069.call(null,(0),expr__5070))){
return "X X";
} else {
if(cljs.core.truth_(pred__5069.call(null,(1),expr__5070))){
return "X O";
} else {
if(cljs.core.truth_(pred__5069.call(null,(2),expr__5070))){
return "O X";
} else {
if(cljs.core.truth_(pred__5069.call(null,(3),expr__5070))){
return "O O";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5070)].join('')));
}
}
}
}
})(),((10) + (xoffset * (idx_5092 + (1)))),h);




var G__5095 = cljs.core.next.call(null,seq__5054_5085__$1);
var G__5096 = null;
var G__5097 = (0);
var G__5098 = (0);
seq__5054_5072 = G__5095;
chunk__5055_5073 = G__5096;
count__5056_5074 = G__5097;
i__5057_5075 = G__5098;
continue;
}
} else {
}
}
break;
}

ctx.fillText(["\u8AA4\u5DEE:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''),(20),(20));

return null;
});
;})(ctx))
});
test.ann_xor.draw = test.ann_xor.draw.call(null,document.getElementById("canvas"));
test.ann_xor.main = (function test$ann_xor$main(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_5118){
var state_val_5119 = (state_5118[(1)]);
if((state_val_5119 === (1))){
var inst_5099 = ai.ann.RandWeights.call(null,(2),(2),(1));
var inst_5100 = (10);
var inst_5101 = inst_5099;
var state_5118__$1 = (function (){var statearr_5121 = state_5118;
(statearr_5121[(7)] = inst_5100);

(statearr_5121[(8)] = inst_5101);

return statearr_5121;
})();
var statearr_5122_5130 = state_5118__$1;
(statearr_5122_5130[(2)] = null);

(statearr_5122_5130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5119 === (2))){
var inst_5100 = (state_5118[(7)]);
var inst_5108 = (state_5118[(9)]);
var inst_5101 = (state_5118[(8)]);
var inst_5106 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));
var inst_5107 = ai.ann.Train.call(null,inst_5101,inst_5106,0.25,0.01);
var inst_5108__$1 = cljs.core.nth.call(null,inst_5107,(0),null);
var inst_5109 = cljs.core.nth.call(null,inst_5107,(1),null);
var inst_5110 = test.ann_xor.draw.call(null,inst_5108__$1,inst_5109);
var inst_5111 = cljs.core.async.timeout.call(null,inst_5100);
var state_5118__$1 = (function (){var statearr_5123 = state_5118;
(statearr_5123[(9)] = inst_5108__$1);

(statearr_5123[(10)] = inst_5110);

return statearr_5123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5118__$1,(4),inst_5111);
} else {
if((state_val_5119 === (3))){
var inst_5116 = (state_5118[(2)]);
var state_5118__$1 = state_5118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5118__$1,inst_5116);
} else {
if((state_val_5119 === (4))){
var inst_5100 = (state_5118[(7)]);
var inst_5108 = (state_5118[(9)]);
var inst_5113 = (state_5118[(2)]);
var tmp5120 = inst_5100;
var inst_5100__$1 = tmp5120;
var inst_5101 = inst_5108;
var state_5118__$1 = (function (){var statearr_5124 = state_5118;
(statearr_5124[(7)] = inst_5100__$1);

(statearr_5124[(11)] = inst_5113);

(statearr_5124[(8)] = inst_5101);

return statearr_5124;
})();
var statearr_5125_5131 = state_5118__$1;
(statearr_5125_5131[(2)] = null);

(statearr_5125_5131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$ann_xor$main_$_state_machine__2793__auto__ = null;
var test$ann_xor$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5126[(0)] = test$ann_xor$main_$_state_machine__2793__auto__);

(statearr_5126[(1)] = (1));

return statearr_5126;
});
var test$ann_xor$main_$_state_machine__2793__auto____1 = (function (state_5118){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5127){if((e5127 instanceof Object)){
var ex__2796__auto__ = e5127;
var statearr_5128_5132 = state_5118;
(statearr_5128_5132[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5133 = state_5118;
state_5118 = G__5133;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$ann_xor$main_$_state_machine__2793__auto__ = function(state_5118){
switch(arguments.length){
case 0:
return test$ann_xor$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$ann_xor$main_$_state_machine__2793__auto____1.call(this,state_5118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann_xor$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann_xor$main_$_state_machine__2793__auto____0;
test$ann_xor$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann_xor$main_$_state_machine__2793__auto____1;
return test$ann_xor$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5129 = f__2883__auto__.call(null);
(statearr_5129[(6)] = c__2882__auto__);

return statearr_5129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
test.ann_xor.main.call(null);

//# sourceMappingURL=ann_xor.js.map
