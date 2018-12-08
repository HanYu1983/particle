// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('app.particle.abstract$');
goog.require('app.particle.impl');
goog.require('app.particle.draw');
goog.require('tool.particle');
app.particle.main.demo = (function app$particle$main$demo(onView){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_9320){
var state_val_9321 = (state_9320[(1)]);
if((state_val_9321 === (1))){
var inst_9276 = cljs.core.async.timeout.call(null,(1000));
var state_9320__$1 = state_9320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9320__$1,(2),inst_9276);
} else {
if((state_val_9321 === (2))){
var inst_9278 = (state_9320[(2)]);
var inst_9281 = [(10),(10),(0)];
var inst_9282 = {"id":"x1","pos":inst_9281};
var inst_9283 = ["edit-particle",inst_9282];
var state_9320__$1 = (function (){var statearr_9322 = state_9320;
(statearr_9322[(7)] = inst_9278);

return statearr_9322;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9320__$1,(3),onView,inst_9283);
} else {
if((state_val_9321 === (3))){
var inst_9285 = (state_9320[(2)]);
var inst_9286 = cljs.core.async.timeout.call(null,(1100));
var state_9320__$1 = (function (){var statearr_9323 = state_9320;
(statearr_9323[(8)] = inst_9285);

return statearr_9323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9320__$1,(4),inst_9286);
} else {
if((state_val_9321 === (4))){
var inst_9288 = (state_9320[(2)]);
var inst_9295 = [(0),(0),(0)];
var inst_9296 = [(1),(0),(1),(1)];
var inst_9297 = [(10),(20)];
var inst_9298 = [(0),(0),(0)];
var inst_9299 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];
var inst_9300 = ["x","randStartAdd",(200),(0),(0),(0),(0)];
var inst_9301 = ["y","randStartAdd",(200),(0),(0),(0),(0)];
var inst_9302 = [inst_9299,inst_9300,inst_9301];
var inst_9303 = {"position":inst_9295,"color":inst_9296,"size":inst_9297,"vel":inst_9298,"tex":"img_face","formulaList":inst_9302};
var inst_9304 = [inst_9303];
var inst_9305 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_9304};
var inst_9306 = [(0),(0),(1),(1)];
var inst_9307 = [(100),(100)];
var inst_9308 = [(10),(10),(0)];
var inst_9309 = [(0),(0),(0)];
var inst_9310 = ["vx","linear",(300),(-300),(0),(0),(0)];
var inst_9311 = ["vy","linear",(300),(-300),(0),(0),(0)];
var inst_9312 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];
var inst_9313 = ["emit-force","linear",(100),(2000),(0),(0),(0)];
var inst_9314 = [inst_9310,inst_9311,inst_9312,inst_9313];
var inst_9315 = {"id":"x1","emit":inst_9305,"color":inst_9306,"size":inst_9307,"pos":inst_9308,"vel":inst_9309,"tex":"img_face","formulaList":inst_9314};
var inst_9316 = ["edit-particle",inst_9315];
var state_9320__$1 = (function (){var statearr_9324 = state_9320;
(statearr_9324[(9)] = inst_9288);

return statearr_9324;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9320__$1,(5),onView,inst_9316);
} else {
if((state_val_9321 === (5))){
var inst_9318 = (state_9320[(2)]);
var state_9320__$1 = state_9320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9320__$1,inst_9318);
} else {
return null;
}
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var app$particle$main$demo_$_state_machine__3172__auto__ = null;
var app$particle$main$demo_$_state_machine__3172__auto____0 = (function (){
var statearr_9325 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9325[(0)] = app$particle$main$demo_$_state_machine__3172__auto__);

(statearr_9325[(1)] = (1));

return statearr_9325;
});
var app$particle$main$demo_$_state_machine__3172__auto____1 = (function (state_9320){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9326){if((e9326 instanceof Object)){
var ex__3175__auto__ = e9326;
var statearr_9327_9329 = state_9320;
(statearr_9327_9329[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9330 = state_9320;
state_9320 = G__9330;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$demo_$_state_machine__3172__auto__ = function(state_9320){
switch(arguments.length){
case 0:
return app$particle$main$demo_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$demo_$_state_machine__3172__auto____1.call(this,state_9320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$demo_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$demo_$_state_machine__3172__auto____0;
app$particle$main$demo_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$demo_$_state_machine__3172__auto____1;
return app$particle$main$demo_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_9328 = f__3262__auto__.call(null);
(statearr_9328[(6)] = c__3261__auto__);

return statearr_9328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
app.particle.main.main = (function app$particle$main$main(){
var onView = cljs.core.async.chan.call(null);
var onModel = cljs.core.async.chan.call(null);
var onModelEvent = cljs.core.async.chan.call(null);
var onTick = cljs.core.async.chan.call(null);
var fps = (30);
var mspf = (((1000) / fps) | (0));
common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_9334){
var state_val_9335 = (state_9334[(1)]);
if((state_val_9335 === (1))){
var state_9334__$1 = state_9334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9334__$1,(2),onView,data);
} else {
if((state_val_9335 === (2))){
var inst_9332 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9334__$1,inst_9332);
} else {
return null;
}
}
});})(c__3261__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__3171__auto__,c__3261__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__3172__auto__ = null;
var app$particle$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_9336 = [null,null,null,null,null,null,null];
(statearr_9336[(0)] = app$particle$main$main_$_state_machine__3172__auto__);

(statearr_9336[(1)] = (1));

return statearr_9336;
});
var app$particle$main$main_$_state_machine__3172__auto____1 = (function (state_9334){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9337){if((e9337 instanceof Object)){
var ex__3175__auto__ = e9337;
var statearr_9338_9513 = state_9334;
(statearr_9338_9513[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9514 = state_9334;
state_9334 = G__9514;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__3172__auto__ = function(state_9334){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__3172__auto____1.call(this,state_9334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__3172__auto____0;
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__3172__auto____1;
return app$particle$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__3263__auto__ = (function (){var statearr_9339 = f__3262__auto__.call(null);
(statearr_9339[(6)] = c__3261__auto__);

return statearr_9339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);

return c__3261__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);

var c__3261__auto___9515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___9515,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___9515,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_9355){
var state_val_9356 = (state_9355[(1)]);
if((state_val_9356 === (1))){
var state_9355__$1 = state_9355;
var statearr_9357_9516 = state_9355__$1;
(statearr_9357_9516[(2)] = null);

(statearr_9357_9516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9356 === (2))){
var state_9355__$1 = state_9355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9355__$1,(4),onModel);
} else {
if((state_val_9356 === (3))){
var inst_9353 = (state_9355[(2)]);
var state_9355__$1 = state_9355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9355__$1,inst_9353);
} else {
if((state_val_9356 === (4))){
var inst_9345 = (state_9355[(2)]);
var inst_9346 = cljs.core.nth.call(null,inst_9345,(0),null);
var inst_9347 = cljs.core.nth.call(null,inst_9345,(1),null);
var inst_9348 = cljs.core.nth.call(null,inst_9345,(2),null);
var inst_9349 = [inst_9346,inst_9347,inst_9348];
var inst_9350 = common.onModel.onNext(inst_9349);
var state_9355__$1 = (function (){var statearr_9358 = state_9355;
(statearr_9358[(7)] = inst_9350);

return statearr_9358;
})();
var statearr_9359_9517 = state_9355__$1;
(statearr_9359_9517[(2)] = null);

(statearr_9359_9517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto___9515,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__3171__auto__,c__3261__auto___9515,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__3172__auto__ = null;
var app$particle$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_9360 = [null,null,null,null,null,null,null,null];
(statearr_9360[(0)] = app$particle$main$main_$_state_machine__3172__auto__);

(statearr_9360[(1)] = (1));

return statearr_9360;
});
var app$particle$main$main_$_state_machine__3172__auto____1 = (function (state_9355){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9361){if((e9361 instanceof Object)){
var ex__3175__auto__ = e9361;
var statearr_9362_9518 = state_9355;
(statearr_9362_9518[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9519 = state_9355;
state_9355 = G__9519;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__3172__auto__ = function(state_9355){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__3172__auto____1.call(this,state_9355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__3172__auto____0;
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__3172__auto____1;
return app$particle$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___9515,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__3263__auto__ = (function (){var statearr_9363 = f__3262__auto__.call(null);
(statearr_9363[(6)] = c__3261__auto___9515);

return statearr_9363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___9515,onView,onModel,onModelEvent,onTick,fps,mspf))
);


var c__3261__auto___9520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___9520,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___9520,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_9378){
var state_val_9379 = (state_9378[(1)]);
if((state_val_9379 === (1))){
var state_9378__$1 = state_9378;
var statearr_9380_9521 = state_9378__$1;
(statearr_9380_9521[(2)] = null);

(statearr_9380_9521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9379 === (2))){
var state_9378__$1 = state_9378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9378__$1,(4),onModelEvent);
} else {
if((state_val_9379 === (3))){
var inst_9376 = (state_9378[(2)]);
var state_9378__$1 = state_9378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9378__$1,inst_9376);
} else {
if((state_val_9379 === (4))){
var inst_9369 = (state_9378[(2)]);
var inst_9370 = cljs.core.nth.call(null,inst_9369,(0),null);
var inst_9371 = cljs.core.nth.call(null,inst_9369,(1),null);
var inst_9372 = [inst_9370,inst_9371];
var inst_9373 = common.onModelEvent.onNext(inst_9372);
var state_9378__$1 = (function (){var statearr_9381 = state_9378;
(statearr_9381[(7)] = inst_9373);

return statearr_9381;
})();
var statearr_9382_9522 = state_9378__$1;
(statearr_9382_9522[(2)] = null);

(statearr_9382_9522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto___9520,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__3171__auto__,c__3261__auto___9520,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__3172__auto__ = null;
var app$particle$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_9383 = [null,null,null,null,null,null,null,null];
(statearr_9383[(0)] = app$particle$main$main_$_state_machine__3172__auto__);

(statearr_9383[(1)] = (1));

return statearr_9383;
});
var app$particle$main$main_$_state_machine__3172__auto____1 = (function (state_9378){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9384){if((e9384 instanceof Object)){
var ex__3175__auto__ = e9384;
var statearr_9385_9523 = state_9378;
(statearr_9385_9523[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9524 = state_9378;
state_9378 = G__9524;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__3172__auto__ = function(state_9378){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__3172__auto____1.call(this,state_9378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__3172__auto____0;
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__3172__auto____1;
return app$particle$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___9520,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__3263__auto__ = (function (){var statearr_9386 = f__3262__auto__.call(null);
(statearr_9386[(6)] = c__3261__auto___9520);

return statearr_9386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___9520,onView,onModel,onModelEvent,onTick,fps,mspf))
);


var c__3261__auto___9525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___9525,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___9525,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_9405){
var state_val_9406 = (state_9405[(1)]);
if((state_val_9406 === (1))){
var inst_9387 = (new Date());
var inst_9388 = inst_9387.getTime();
var inst_9389 = mspf;
var inst_9390 = inst_9388;
var state_9405__$1 = (function (){var statearr_9407 = state_9405;
(statearr_9407[(7)] = inst_9389);

(statearr_9407[(8)] = inst_9390);

return statearr_9407;
})();
var statearr_9408_9526 = state_9405__$1;
(statearr_9408_9526[(2)] = null);

(statearr_9408_9526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9406 === (2))){
var inst_9389 = (state_9405[(7)]);
var inst_9392 = cljs.core.async.timeout.call(null,inst_9389);
var state_9405__$1 = state_9405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9405__$1,(4),inst_9392);
} else {
if((state_val_9406 === (3))){
var inst_9403 = (state_9405[(2)]);
var state_9405__$1 = state_9405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9405__$1,inst_9403);
} else {
if((state_val_9406 === (4))){
var inst_9390 = (state_9405[(8)]);
var inst_9396 = (state_9405[(9)]);
var inst_9394 = (state_9405[(2)]);
var inst_9395 = (new Date());
var inst_9396__$1 = inst_9395.getTime();
var inst_9397 = (inst_9396__$1 - inst_9390);
var inst_9398 = (inst_9397 / (1000));
var state_9405__$1 = (function (){var statearr_9410 = state_9405;
(statearr_9410[(10)] = inst_9394);

(statearr_9410[(9)] = inst_9396__$1);

return statearr_9410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9405__$1,(5),onTick,inst_9398);
} else {
if((state_val_9406 === (5))){
var inst_9389 = (state_9405[(7)]);
var inst_9396 = (state_9405[(9)]);
var inst_9400 = (state_9405[(2)]);
var tmp9409 = inst_9389;
var inst_9389__$1 = tmp9409;
var inst_9390 = inst_9396;
var state_9405__$1 = (function (){var statearr_9411 = state_9405;
(statearr_9411[(7)] = inst_9389__$1);

(statearr_9411[(8)] = inst_9390);

(statearr_9411[(11)] = inst_9400);

return statearr_9411;
})();
var statearr_9412_9527 = state_9405__$1;
(statearr_9412_9527[(2)] = null);

(statearr_9412_9527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__3261__auto___9525,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__3171__auto__,c__3261__auto___9525,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__3172__auto__ = null;
var app$particle$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_9413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9413[(0)] = app$particle$main$main_$_state_machine__3172__auto__);

(statearr_9413[(1)] = (1));

return statearr_9413;
});
var app$particle$main$main_$_state_machine__3172__auto____1 = (function (state_9405){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9414){if((e9414 instanceof Object)){
var ex__3175__auto__ = e9414;
var statearr_9415_9528 = state_9405;
(statearr_9415_9528[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9529 = state_9405;
state_9405 = G__9529;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__3172__auto__ = function(state_9405){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__3172__auto____1.call(this,state_9405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__3172__auto____0;
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__3172__auto____1;
return app$particle$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___9525,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__3263__auto__ = (function (){var statearr_9416 = f__3262__auto__.call(null);
(statearr_9416[(6)] = c__3261__auto___9525);

return statearr_9416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___9525,onView,onModel,onModelEvent,onTick,fps,mspf))
);


var c__3261__auto___9530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_9484){
var state_val_9485 = (state_9484[(1)]);
if((state_val_9485 === (7))){
var inst_9479 = (state_9484[(2)]);
var inst_9430 = inst_9479;
var state_9484__$1 = (function (){var statearr_9486 = state_9484;
(statearr_9486[(7)] = inst_9430);

return statearr_9486;
})();
var statearr_9487_9531 = state_9484__$1;
(statearr_9487_9531[(2)] = null);

(statearr_9487_9531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (1))){
var inst_9417 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];
var inst_9418 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];
var inst_9419 = cljs.core.List.EMPTY;
var inst_9420 = [inst_9419,(200)];
var inst_9421 = cljs.core.PersistentHashMap.fromArrays(inst_9418,inst_9420);
var inst_9422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9423 = [(0),(0),(0)];
var inst_9424 = (new cljs.core.PersistentVector(null,3,(5),inst_9422,inst_9423,null));
var inst_9425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9426 = [(0),(0)];
var inst_9427 = (new cljs.core.PersistentVector(null,2,(5),inst_9425,inst_9426,null));
var inst_9428 = [inst_9421,inst_9424,inst_9427,onModel];
var inst_9429 = cljs.core.PersistentHashMap.fromArrays(inst_9417,inst_9428);
var inst_9430 = inst_9429;
var state_9484__$1 = (function (){var statearr_9488 = state_9484;
(statearr_9488[(7)] = inst_9430);

return statearr_9488;
})();
var statearr_9489_9532 = state_9484__$1;
(statearr_9489_9532[(2)] = null);

(statearr_9489_9532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (4))){
var inst_9439 = (state_9484[(8)]);
var inst_9441 = (state_9484[(9)]);
var inst_9439__$1 = (state_9484[(2)]);
var inst_9440 = cljs.core.nth.call(null,inst_9439__$1,(0),null);
var inst_9441__$1 = cljs.core.nth.call(null,inst_9439__$1,(1),null);
var inst_9445 = cljs.core._EQ_.call(null,onTick,inst_9441__$1);
var state_9484__$1 = (function (){var statearr_9490 = state_9484;
(statearr_9490[(8)] = inst_9439__$1);

(statearr_9490[(10)] = inst_9440);

(statearr_9490[(9)] = inst_9441__$1);

return statearr_9490;
})();
if(inst_9445){
var statearr_9491_9533 = state_9484__$1;
(statearr_9491_9533[(1)] = (5));

} else {
var statearr_9492_9534 = state_9484__$1;
(statearr_9492_9534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (13))){
var inst_9477 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
var statearr_9493_9535 = state_9484__$1;
(statearr_9493_9535[(2)] = inst_9477);

(statearr_9493_9535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (6))){
var inst_9441 = (state_9484[(9)]);
var inst_9470 = cljs.core._EQ_.call(null,onView,inst_9441);
var state_9484__$1 = state_9484;
if(inst_9470){
var statearr_9494_9536 = state_9484__$1;
(statearr_9494_9536[(1)] = (11));

} else {
var statearr_9495_9537 = state_9484__$1;
(statearr_9495_9537[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (3))){
var inst_9482 = (state_9484[(2)]);
var state_9484__$1 = state_9484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9484__$1,inst_9482);
} else {
if((state_val_9485 === (12))){
var inst_9430 = (state_9484[(7)]);
var state_9484__$1 = state_9484;
var statearr_9496_9538 = state_9484__$1;
(statearr_9496_9538[(2)] = inst_9430);

(statearr_9496_9538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (2))){
var inst_9435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9436 = [onView,onTick];
var inst_9437 = (new cljs.core.PersistentVector(null,2,(5),inst_9435,inst_9436,null));
var state_9484__$1 = state_9484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9484__$1,(4),inst_9437);
} else {
if((state_val_9485 === (11))){
var inst_9440 = (state_9484[(10)]);
var inst_9430 = (state_9484[(7)]);
var inst_9472 = (inst_9440[(0)]);
var inst_9473 = (inst_9440[(1)]);
var inst_9474 = app.particle.abstract$.onViewCommand.call(null,inst_9472,inst_9473,inst_9430);
var state_9484__$1 = state_9484;
var statearr_9497_9539 = state_9484__$1;
(statearr_9497_9539[(2)] = inst_9474);

(statearr_9497_9539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (9))){
var state_9484__$1 = state_9484;
var statearr_9498_9540 = state_9484__$1;
(statearr_9498_9540[(2)] = cljs.core.identity);

(statearr_9498_9540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (5))){
var inst_9430 = (state_9484[(7)]);
var inst_9447 = (state_9484[(11)]);
var inst_9447__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_9430);
var state_9484__$1 = (function (){var statearr_9499 = state_9484;
(statearr_9499[(11)] = inst_9447__$1);

return statearr_9499;
})();
if(cljs.core.truth_(inst_9447__$1)){
var statearr_9500_9541 = state_9484__$1;
(statearr_9500_9541[(1)] = (8));

} else {
var statearr_9501_9542 = state_9484__$1;
(statearr_9501_9542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (10))){
var inst_9439 = (state_9484[(8)]);
var inst_9440 = (state_9484[(10)]);
var inst_9430 = (state_9484[(7)]);
var inst_9441 = (state_9484[(9)]);
var inst_9451 = (state_9484[(2)]);
var inst_9460 = cljs.core.async.chan.call(null,(1));
var inst_9461 = (function (){var ctx = inst_9430;
var vec__9432 = inst_9439;
var v = inst_9440;
var ch = inst_9441;
var pred__9442 = cljs.core._EQ_;
var expr__9443 = inst_9441;
var draw = inst_9451;
var c__3261__auto____$1 = inst_9460;
return ((function (ctx,vec__9432,v,ch,pred__9442,expr__9443,draw,c__3261__auto____$1,inst_9439,inst_9440,inst_9430,inst_9441,inst_9451,inst_9460,state_val_9485,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (ctx,vec__9432,v,ch,pred__9442,expr__9443,draw,c__3261__auto____$1,inst_9439,inst_9440,inst_9430,inst_9441,inst_9451,inst_9460,state_val_9485,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_9458){
var state_val_9459 = (state_9458[(1)]);
if((state_val_9459 === (1))){
var inst_9452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9453 = ["tick",v];
var inst_9454 = (new cljs.core.PersistentVector(null,2,(5),inst_9452,inst_9453,null));
var state_9458__$1 = state_9458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9458__$1,(2),onModelEvent,inst_9454);
} else {
if((state_val_9459 === (2))){
var inst_9456 = (state_9458[(2)]);
var state_9458__$1 = state_9458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9458__$1,inst_9456);
} else {
return null;
}
}
});})(ctx,vec__9432,v,ch,pred__9442,expr__9443,draw,c__3261__auto____$1,inst_9439,inst_9440,inst_9430,inst_9441,inst_9451,inst_9460,state_val_9485,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__3171__auto__,ctx,vec__9432,v,ch,pred__9442,expr__9443,draw,c__3261__auto____$1,inst_9439,inst_9440,inst_9430,inst_9441,inst_9451,inst_9460,state_val_9485,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__3172__auto__ = null;
var app$particle$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_9502 = [null,null,null,null,null,null,null];
(statearr_9502[(0)] = app$particle$main$main_$_state_machine__3172__auto__);

(statearr_9502[(1)] = (1));

return statearr_9502;
});
var app$particle$main$main_$_state_machine__3172__auto____1 = (function (state_9458){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9503){if((e9503 instanceof Object)){
var ex__3175__auto__ = e9503;
var statearr_9504_9543 = state_9458;
(statearr_9504_9543[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9544 = state_9458;
state_9458 = G__9544;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__3172__auto__ = function(state_9458){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__3172__auto____1.call(this,state_9458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__3172__auto____0;
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__3172__auto____1;
return app$particle$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,ctx,vec__9432,v,ch,pred__9442,expr__9443,draw,c__3261__auto____$1,inst_9439,inst_9440,inst_9430,inst_9441,inst_9451,inst_9460,state_val_9485,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__3263__auto__ = (function (){var statearr_9505 = f__3262__auto__.call(null);
(statearr_9505[(6)] = c__3261__auto____$1);

return statearr_9505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});
;})(ctx,vec__9432,v,ch,pred__9442,expr__9443,draw,c__3261__auto____$1,inst_9439,inst_9440,inst_9430,inst_9441,inst_9451,inst_9460,state_val_9485,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var inst_9462 = cljs.core.async.impl.dispatch.run.call(null,inst_9461);
var inst_9463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9464 = [new cljs.core.Keyword(null,"part","part",77757738)];
var inst_9465 = (new cljs.core.PersistentVector(null,1,(5),inst_9463,inst_9464,null));
var inst_9466 = cljs.core.partial.call(null,tool.particle.update,inst_9440);
var inst_9467 = cljs.core.update_in.call(null,inst_9430,inst_9465,inst_9466);
var inst_9468 = inst_9451.call(null,inst_9467);
var state_9484__$1 = (function (){var statearr_9506 = state_9484;
(statearr_9506[(12)] = inst_9462);

return statearr_9506;
})();
var statearr_9507_9545 = state_9484__$1;
(statearr_9507_9545[(2)] = inst_9468);

(statearr_9507_9545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9485 === (8))){
var inst_9447 = (state_9484[(11)]);
var state_9484__$1 = state_9484;
var statearr_9508_9546 = state_9484__$1;
(statearr_9508_9546[(2)] = inst_9447);

(statearr_9508_9546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__3171__auto__,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__3172__auto__ = null;
var app$particle$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_9509 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9509[(0)] = app$particle$main$main_$_state_machine__3172__auto__);

(statearr_9509[(1)] = (1));

return statearr_9509;
});
var app$particle$main$main_$_state_machine__3172__auto____1 = (function (state_9484){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9510){if((e9510 instanceof Object)){
var ex__3175__auto__ = e9510;
var statearr_9511_9547 = state_9484;
(statearr_9511_9547[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9548 = state_9484;
state_9484 = G__9548;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__3172__auto__ = function(state_9484){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__3172__auto____1.call(this,state_9484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__3172__auto____0;
app$particle$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__3172__auto____1;
return app$particle$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__3263__auto__ = (function (){var statearr_9512 = f__3262__auto__.call(null);
(statearr_9512[(6)] = c__3261__auto___9530);

return statearr_9512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___9530,onView,onModel,onModelEvent,onTick,fps,mspf))
);


return null;
});
app.particle.main.main.call(null);

//# sourceMappingURL=main.js.map
