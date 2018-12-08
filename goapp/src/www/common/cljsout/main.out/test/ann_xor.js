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
var vec__11272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);
var w = cljs.core.nth.call(null,vec__11272,(0),null);
var h = cljs.core.nth.call(null,vec__11272,(1),null);
var xoffset = (w / (5));
var values = cljs.core.map.call(null,((function (vec__11272,w,h,xoffset,ctx){
return (function (input){
return cljs.core.first.call(null,cljs.core.last.call(null,ai.ann.FeedForward.call(null,(new cljs.core.List(null,input,null,(1),null)),ws)));
});})(vec__11272,w,h,xoffset,ctx))
,cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(0)),cljs.core.list((1),(1))));
(ctx["fillStyle"] = "#FFFF00");

ctx.fillRect((0),(0),w,h);

(ctx["fillStyle"] = "#000");

var seq__11275_11293 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__11272,w,h,xoffset,values,ctx){
return (function (id,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,v], null);
});})(vec__11272,w,h,xoffset,values,ctx))
,cljs.core.range.call(null,cljs.core.count.call(null,values)),values));
var chunk__11276_11294 = null;
var count__11277_11295 = (0);
var i__11278_11296 = (0);
while(true){
if((i__11278_11296 < count__11277_11295)){
var vec__11279_11297 = cljs.core._nth.call(null,chunk__11276_11294,i__11278_11296);
var idx_11298 = cljs.core.nth.call(null,vec__11279_11297,(0),null);
var v_11299 = cljs.core.nth.call(null,vec__11279_11297,(1),null);
var G__11282_11300 = ctx;
G__11282_11300.beginPath();

G__11282_11300.moveTo((xoffset * (idx_11298 + (1))),h);

G__11282_11300.lineTo((xoffset * (idx_11298 + (1))),(h - (v_11299 * h)));

(G__11282_11300["lineWidth"] = (3));

(G__11282_11300["strokeStyle"] = "#000000");

G__11282_11300.stroke();

G__11282_11300.fillText((function (){var pred__11283 = cljs.core._EQ_;
var expr__11284 = idx_11298;
if(cljs.core.truth_(pred__11283.call(null,(0),expr__11284))){
return "X X";
} else {
if(cljs.core.truth_(pred__11283.call(null,(1),expr__11284))){
return "X O";
} else {
if(cljs.core.truth_(pred__11283.call(null,(2),expr__11284))){
return "O X";
} else {
if(cljs.core.truth_(pred__11283.call(null,(3),expr__11284))){
return "O O";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11284)].join('')));
}
}
}
}
})(),((10) + (xoffset * (idx_11298 + (1)))),h);




var G__11301 = seq__11275_11293;
var G__11302 = chunk__11276_11294;
var G__11303 = count__11277_11295;
var G__11304 = (i__11278_11296 + (1));
seq__11275_11293 = G__11301;
chunk__11276_11294 = G__11302;
count__11277_11295 = G__11303;
i__11278_11296 = G__11304;
continue;
} else {
var temp__5457__auto___11305 = cljs.core.seq.call(null,seq__11275_11293);
if(temp__5457__auto___11305){
var seq__11275_11306__$1 = temp__5457__auto___11305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11275_11306__$1)){
var c__4319__auto___11307 = cljs.core.chunk_first.call(null,seq__11275_11306__$1);
var G__11308 = cljs.core.chunk_rest.call(null,seq__11275_11306__$1);
var G__11309 = c__4319__auto___11307;
var G__11310 = cljs.core.count.call(null,c__4319__auto___11307);
var G__11311 = (0);
seq__11275_11293 = G__11308;
chunk__11276_11294 = G__11309;
count__11277_11295 = G__11310;
i__11278_11296 = G__11311;
continue;
} else {
var vec__11286_11312 = cljs.core.first.call(null,seq__11275_11306__$1);
var idx_11313 = cljs.core.nth.call(null,vec__11286_11312,(0),null);
var v_11314 = cljs.core.nth.call(null,vec__11286_11312,(1),null);
var G__11289_11315 = ctx;
G__11289_11315.beginPath();

G__11289_11315.moveTo((xoffset * (idx_11313 + (1))),h);

G__11289_11315.lineTo((xoffset * (idx_11313 + (1))),(h - (v_11314 * h)));

(G__11289_11315["lineWidth"] = (3));

(G__11289_11315["strokeStyle"] = "#000000");

G__11289_11315.stroke();

G__11289_11315.fillText((function (){var pred__11290 = cljs.core._EQ_;
var expr__11291 = idx_11313;
if(cljs.core.truth_(pred__11290.call(null,(0),expr__11291))){
return "X X";
} else {
if(cljs.core.truth_(pred__11290.call(null,(1),expr__11291))){
return "X O";
} else {
if(cljs.core.truth_(pred__11290.call(null,(2),expr__11291))){
return "O X";
} else {
if(cljs.core.truth_(pred__11290.call(null,(3),expr__11291))){
return "O O";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11291)].join('')));
}
}
}
}
})(),((10) + (xoffset * (idx_11313 + (1)))),h);




var G__11316 = cljs.core.next.call(null,seq__11275_11306__$1);
var G__11317 = null;
var G__11318 = (0);
var G__11319 = (0);
seq__11275_11293 = G__11316;
chunk__11276_11294 = G__11317;
count__11277_11295 = G__11318;
i__11278_11296 = G__11319;
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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_11339){
var state_val_11340 = (state_11339[(1)]);
if((state_val_11340 === (1))){
var inst_11320 = ai.ann.RandWeights.call(null,(2),(2),(1));
var inst_11321 = (10);
var inst_11322 = inst_11320;
var state_11339__$1 = (function (){var statearr_11342 = state_11339;
(statearr_11342[(7)] = inst_11322);

(statearr_11342[(8)] = inst_11321);

return statearr_11342;
})();
var statearr_11343_11351 = state_11339__$1;
(statearr_11343_11351[(2)] = null);

(statearr_11343_11351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (2))){
var inst_11322 = (state_11339[(7)]);
var inst_11321 = (state_11339[(8)]);
var inst_11329 = (state_11339[(9)]);
var inst_11327 = cljs.core.list(cljs.core.list(cljs.core.list((0),(0)),cljs.core.list((0))),cljs.core.list(cljs.core.list((0),(1)),cljs.core.list((1))),cljs.core.list(cljs.core.list((1),(1)),cljs.core.list((0))),cljs.core.list(cljs.core.list((1),(0)),cljs.core.list((1))));
var inst_11328 = ai.ann.Train.call(null,inst_11322,inst_11327,0.25,0.01);
var inst_11329__$1 = cljs.core.nth.call(null,inst_11328,(0),null);
var inst_11330 = cljs.core.nth.call(null,inst_11328,(1),null);
var inst_11331 = test.ann_xor.draw.call(null,inst_11329__$1,inst_11330);
var inst_11332 = cljs.core.async.timeout.call(null,inst_11321);
var state_11339__$1 = (function (){var statearr_11344 = state_11339;
(statearr_11344[(10)] = inst_11331);

(statearr_11344[(9)] = inst_11329__$1);

return statearr_11344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11339__$1,(4),inst_11332);
} else {
if((state_val_11340 === (3))){
var inst_11337 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11339__$1,inst_11337);
} else {
if((state_val_11340 === (4))){
var inst_11321 = (state_11339[(8)]);
var inst_11329 = (state_11339[(9)]);
var inst_11334 = (state_11339[(2)]);
var tmp11341 = inst_11321;
var inst_11321__$1 = tmp11341;
var inst_11322 = inst_11329;
var state_11339__$1 = (function (){var statearr_11345 = state_11339;
(statearr_11345[(7)] = inst_11322);

(statearr_11345[(11)] = inst_11334);

(statearr_11345[(8)] = inst_11321__$1);

return statearr_11345;
})();
var statearr_11346_11352 = state_11339__$1;
(statearr_11346_11352[(2)] = null);

(statearr_11346_11352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$ann_xor$main_$_state_machine__3172__auto__ = null;
var test$ann_xor$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11347[(0)] = test$ann_xor$main_$_state_machine__3172__auto__);

(statearr_11347[(1)] = (1));

return statearr_11347;
});
var test$ann_xor$main_$_state_machine__3172__auto____1 = (function (state_11339){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11348){if((e11348 instanceof Object)){
var ex__3175__auto__ = e11348;
var statearr_11349_11353 = state_11339;
(statearr_11349_11353[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11354 = state_11339;
state_11339 = G__11354;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$ann_xor$main_$_state_machine__3172__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return test$ann_xor$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$ann_xor$main_$_state_machine__3172__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$ann_xor$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$ann_xor$main_$_state_machine__3172__auto____0;
test$ann_xor$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$ann_xor$main_$_state_machine__3172__auto____1;
return test$ann_xor$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11350 = f__3262__auto__.call(null);
(statearr_11350[(6)] = c__3261__auto__);

return statearr_11350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
test.ann_xor.main.call(null);

//# sourceMappingURL=ann_xor.js.map
