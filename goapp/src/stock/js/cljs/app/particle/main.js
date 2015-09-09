// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('app.particle.draw');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('app.particle.abstract$');
goog.require('tool.particle');
goog.require('app.particle.impl');
goog.require('gl.util');
goog.require('app.particle.abstract$');
goog.require('app.particle.draw');
app.particle.main.demo = (function demo(onView){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_78062){var state_val_78063 = (state_78062[(1)]);if((state_val_78063 === (5)))
{var inst_78060 = (state_78062[(2)]);var state_78062__$1 = state_78062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78062__$1,inst_78060);
} else
{if((state_val_78063 === (4)))
{var inst_78030 = (state_78062[(2)]);var inst_78037 = [(0),(0),(0)];var inst_78038 = [(1),(0),(1),(1)];var inst_78039 = [(10),(20)];var inst_78040 = [(0),(0),(0)];var inst_78041 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_78042 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_78043 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_78044 = [inst_78041,inst_78042,inst_78043];var inst_78045 = {"position":inst_78037,"color":inst_78038,"size":inst_78039,"vel":inst_78040,"tex":"img_face","formulaList":inst_78044};var inst_78046 = [inst_78045];var inst_78047 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_78046};var inst_78048 = [(0),(0),(1),(1)];var inst_78049 = [(100),(100)];var inst_78050 = [(10),(10),(0)];var inst_78051 = [(0),(0),(0)];var inst_78052 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_78053 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_78054 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_78055 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_78056 = [inst_78052,inst_78053,inst_78054,inst_78055];var inst_78057 = {"id":"x1","emit":inst_78047,"color":inst_78048,"size":inst_78049,"pos":inst_78050,"vel":inst_78051,"tex":"img_face","formulaList":inst_78056};var inst_78058 = ["edit-particle",inst_78057];var state_78062__$1 = (function (){var statearr_78064 = state_78062;(statearr_78064[(7)] = inst_78030);
return statearr_78064;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78062__$1,(5),onView,inst_78058);
} else
{if((state_val_78063 === (3)))
{var inst_78027 = (state_78062[(2)]);var inst_78028 = cljs.core.async.timeout.call(null,(1100));var state_78062__$1 = (function (){var statearr_78065 = state_78062;(statearr_78065[(8)] = inst_78027);
return statearr_78065;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78062__$1,(4),inst_78028);
} else
{if((state_val_78063 === (2)))
{var inst_78020 = (state_78062[(2)]);var inst_78023 = [(10),(10),(0)];var inst_78024 = {"id":"x1","pos":inst_78023};var inst_78025 = ["edit-particle",inst_78024];var state_78062__$1 = (function (){var statearr_78066 = state_78062;(statearr_78066[(9)] = inst_78020);
return statearr_78066;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78062__$1,(3),onView,inst_78025);
} else
{if((state_val_78063 === (1)))
{var inst_78018 = cljs.core.async.timeout.call(null,(1000));var state_78062__$1 = state_78062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78062__$1,(2),inst_78018);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78070 = [null,null,null,null,null,null,null,null,null,null];(statearr_78070[(0)] = state_machine__6188__auto__);
(statearr_78070[(1)] = (1));
return statearr_78070;
});
var state_machine__6188__auto____1 = (function (state_78062){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78071){if((e78071 instanceof Object))
{var ex__6191__auto__ = e78071;var statearr_78072_78074 = state_78062;(statearr_78072_78074[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78071;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78075 = state_78062;
state_78062 = G__78075;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78062){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_78073 = f__6203__auto__.call(null);(statearr_78073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78073;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var fps = (30);var mspf = (((1000) / fps) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_78268){var state_val_78269 = (state_78268[(1)]);if((state_val_78269 === (2)))
{var inst_78266 = (state_78268[(2)]);var state_78268__$1 = state_78268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78268__$1,inst_78266);
} else
{if((state_val_78269 === (1)))
{var state_78268__$1 = state_78268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78268__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78273 = [null,null,null,null,null,null,null];(statearr_78273[(0)] = state_machine__6188__auto__);
(statearr_78273[(1)] = (1));
return statearr_78273;
});
var state_machine__6188__auto____1 = (function (state_78268){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78268);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78274){if((e78274 instanceof Object))
{var ex__6191__auto__ = e78274;var statearr_78275_78454 = state_78268;(statearr_78275_78454[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78268);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78455 = state_78268;
state_78268 = G__78455;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78268){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_78276 = f__6203__auto__.call(null);(statearr_78276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___78456 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78456,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78456,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_78290){var state_val_78291 = (state_78290[(1)]);if((state_val_78291 === (4)))
{var inst_78280 = (state_78290[(2)]);var inst_78281 = cljs.core.nth.call(null,inst_78280,(0),null);var inst_78282 = cljs.core.nth.call(null,inst_78280,(1),null);var inst_78283 = cljs.core.nth.call(null,inst_78280,(2),null);var inst_78284 = [inst_78281,inst_78282,inst_78283];var inst_78285 = common.onModel.onNext(inst_78284);var state_78290__$1 = (function (){var statearr_78292 = state_78290;(statearr_78292[(7)] = inst_78285);
return statearr_78292;
})();var statearr_78293_78457 = state_78290__$1;(statearr_78293_78457[(2)] = null);
(statearr_78293_78457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78291 === (3)))
{var inst_78288 = (state_78290[(2)]);var state_78290__$1 = state_78290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78290__$1,inst_78288);
} else
{if((state_val_78291 === (2)))
{var state_78290__$1 = state_78290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78290__$1,(4),onModel);
} else
{if((state_val_78291 === (1)))
{var state_78290__$1 = state_78290;var statearr_78294_78458 = state_78290__$1;(statearr_78294_78458[(2)] = null);
(statearr_78294_78458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___78456,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78456,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78298 = [null,null,null,null,null,null,null,null];(statearr_78298[(0)] = state_machine__6188__auto__);
(statearr_78298[(1)] = (1));
return statearr_78298;
});
var state_machine__6188__auto____1 = (function (state_78290){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78299){if((e78299 instanceof Object))
{var ex__6191__auto__ = e78299;var statearr_78300_78459 = state_78290;(statearr_78300_78459[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78460 = state_78290;
state_78290 = G__78460;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78290){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78456,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_78301 = f__6203__auto__.call(null);(statearr_78301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78456);
return statearr_78301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78456,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___78461 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78461,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78461,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_78314){var state_val_78315 = (state_78314[(1)]);if((state_val_78315 === (4)))
{var inst_78305 = (state_78314[(2)]);var inst_78306 = cljs.core.nth.call(null,inst_78305,(0),null);var inst_78307 = cljs.core.nth.call(null,inst_78305,(1),null);var inst_78308 = [inst_78306,inst_78307];var inst_78309 = common.onModelEvent.onNext(inst_78308);var state_78314__$1 = (function (){var statearr_78316 = state_78314;(statearr_78316[(7)] = inst_78309);
return statearr_78316;
})();var statearr_78317_78462 = state_78314__$1;(statearr_78317_78462[(2)] = null);
(statearr_78317_78462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78315 === (3)))
{var inst_78312 = (state_78314[(2)]);var state_78314__$1 = state_78314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78314__$1,inst_78312);
} else
{if((state_val_78315 === (2)))
{var state_78314__$1 = state_78314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78314__$1,(4),onModelEvent);
} else
{if((state_val_78315 === (1)))
{var state_78314__$1 = state_78314;var statearr_78318_78463 = state_78314__$1;(statearr_78318_78463[(2)] = null);
(statearr_78318_78463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___78461,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78461,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78322 = [null,null,null,null,null,null,null,null];(statearr_78322[(0)] = state_machine__6188__auto__);
(statearr_78322[(1)] = (1));
return statearr_78322;
});
var state_machine__6188__auto____1 = (function (state_78314){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78314);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78323){if((e78323 instanceof Object))
{var ex__6191__auto__ = e78323;var statearr_78324_78464 = state_78314;(statearr_78324_78464[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78465 = state_78314;
state_78314 = G__78465;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78314){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78461,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_78325 = f__6203__auto__.call(null);(statearr_78325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78461);
return statearr_78325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78461,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___78466 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78466,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78466,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_78344){var state_val_78345 = (state_78344[(1)]);if((state_val_78345 === (5)))
{var inst_78328 = (state_78344[(7)]);var inst_78335 = (state_78344[(8)]);var inst_78339 = (state_78344[(2)]);var tmp78346 = inst_78328;var inst_78328__$1 = tmp78346;var inst_78329 = inst_78335;var state_78344__$1 = (function (){var statearr_78347 = state_78344;(statearr_78347[(9)] = inst_78339);
(statearr_78347[(7)] = inst_78328__$1);
(statearr_78347[(10)] = inst_78329);
return statearr_78347;
})();var statearr_78348_78467 = state_78344__$1;(statearr_78348_78467[(2)] = null);
(statearr_78348_78467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78345 === (4)))
{var inst_78335 = (state_78344[(8)]);var inst_78329 = (state_78344[(10)]);var inst_78333 = (state_78344[(2)]);var inst_78334 = (new Date());var inst_78335__$1 = inst_78334.getTime();var inst_78336 = (inst_78335__$1 - inst_78329);var inst_78337 = (inst_78336 / (1000));var state_78344__$1 = (function (){var statearr_78349 = state_78344;(statearr_78349[(8)] = inst_78335__$1);
(statearr_78349[(11)] = inst_78333);
return statearr_78349;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78344__$1,(5),onTick,inst_78337);
} else
{if((state_val_78345 === (3)))
{var inst_78342 = (state_78344[(2)]);var state_78344__$1 = state_78344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78344__$1,inst_78342);
} else
{if((state_val_78345 === (2)))
{var inst_78328 = (state_78344[(7)]);var inst_78331 = cljs.core.async.timeout.call(null,inst_78328);var state_78344__$1 = state_78344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78344__$1,(4),inst_78331);
} else
{if((state_val_78345 === (1)))
{var inst_78326 = (new Date());var inst_78327 = inst_78326.getTime();var inst_78328 = mspf;var inst_78329 = inst_78327;var state_78344__$1 = (function (){var statearr_78350 = state_78344;(statearr_78350[(7)] = inst_78328);
(statearr_78350[(10)] = inst_78329);
return statearr_78350;
})();var statearr_78351_78468 = state_78344__$1;(statearr_78351_78468[(2)] = null);
(statearr_78351_78468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___78466,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78466,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78355 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78355[(0)] = state_machine__6188__auto__);
(statearr_78355[(1)] = (1));
return statearr_78355;
});
var state_machine__6188__auto____1 = (function (state_78344){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78344);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78356){if((e78356 instanceof Object))
{var ex__6191__auto__ = e78356;var statearr_78357_78469 = state_78344;(statearr_78357_78469[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78470 = state_78344;
state_78344 = G__78470;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78344){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78466,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_78358 = f__6203__auto__.call(null);(statearr_78358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78466);
return statearr_78358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78466,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___78471 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_78419){var state_val_78420 = (state_78419[(1)]);if((state_val_78420 === (7)))
{var inst_78414 = (state_78419[(2)]);var inst_78370 = inst_78414;var state_78419__$1 = (function (){var statearr_78421 = state_78419;(statearr_78421[(7)] = inst_78370);
return statearr_78421;
})();var statearr_78422_78472 = state_78419__$1;(statearr_78422_78472[(2)] = null);
(statearr_78422_78472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (1)))
{var inst_78359 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_78360 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_78361 = cljs.core.List.EMPTY;var inst_78362 = [inst_78361,(200)];var inst_78363 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78360,inst_78362);var inst_78364 = [(0),(0),(0)];var inst_78365 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78364,null));var inst_78366 = [(0),(0)];var inst_78367 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78366,null));var inst_78368 = [inst_78363,inst_78365,inst_78367,onModel];var inst_78369 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78359,inst_78368);var inst_78370 = inst_78369;var state_78419__$1 = (function (){var statearr_78423 = state_78419;(statearr_78423[(7)] = inst_78370);
return statearr_78423;
})();var statearr_78424_78473 = state_78419__$1;(statearr_78424_78473[(2)] = null);
(statearr_78424_78473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (4)))
{var inst_78378 = (state_78419[(8)]);var inst_78376 = (state_78419[(9)]);var inst_78376__$1 = (state_78419[(2)]);var inst_78377 = cljs.core.nth.call(null,inst_78376__$1,(0),null);var inst_78378__$1 = cljs.core.nth.call(null,inst_78376__$1,(1),null);var inst_78382 = cljs.core._EQ_.call(null,onTick,inst_78378__$1);var state_78419__$1 = (function (){var statearr_78425 = state_78419;(statearr_78425[(8)] = inst_78378__$1);
(statearr_78425[(9)] = inst_78376__$1);
(statearr_78425[(10)] = inst_78377);
return statearr_78425;
})();if(inst_78382)
{var statearr_78426_78474 = state_78419__$1;(statearr_78426_78474[(1)] = (5));
} else
{var statearr_78427_78475 = state_78419__$1;(statearr_78427_78475[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (13)))
{var inst_78412 = (state_78419[(2)]);var state_78419__$1 = state_78419;var statearr_78428_78476 = state_78419__$1;(statearr_78428_78476[(2)] = inst_78412);
(statearr_78428_78476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (6)))
{var inst_78378 = (state_78419[(8)]);var inst_78405 = cljs.core._EQ_.call(null,onView,inst_78378);var state_78419__$1 = state_78419;if(inst_78405)
{var statearr_78429_78477 = state_78419__$1;(statearr_78429_78477[(1)] = (11));
} else
{var statearr_78430_78478 = state_78419__$1;(statearr_78430_78478[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (3)))
{var inst_78417 = (state_78419[(2)]);var state_78419__$1 = state_78419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78419__$1,inst_78417);
} else
{if((state_val_78420 === (12)))
{var inst_78370 = (state_78419[(7)]);var state_78419__$1 = state_78419;var statearr_78431_78479 = state_78419__$1;(statearr_78431_78479[(2)] = inst_78370);
(statearr_78431_78479[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (2)))
{var inst_78373 = [onView,onTick];var inst_78374 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78373,null));var state_78419__$1 = state_78419;return cljs.core.async.ioc_alts_BANG_.call(null,state_78419__$1,(4),inst_78374);
} else
{if((state_val_78420 === (11)))
{var inst_78377 = (state_78419[(10)]);var inst_78370 = (state_78419[(7)]);var inst_78407 = (inst_78377[(0)]);var inst_78408 = (inst_78377[(1)]);var inst_78409 = app.particle.abstract$.onViewCommand.call(null,inst_78407,inst_78408,inst_78370);var state_78419__$1 = state_78419;var statearr_78432_78480 = state_78419__$1;(statearr_78432_78480[(2)] = inst_78409);
(statearr_78432_78480[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (9)))
{var state_78419__$1 = state_78419;var statearr_78433_78481 = state_78419__$1;(statearr_78433_78481[(2)] = cljs.core.identity);
(statearr_78433_78481[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (5)))
{var inst_78384 = (state_78419[(11)]);var inst_78370 = (state_78419[(7)]);var inst_78384__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_78370);var state_78419__$1 = (function (){var statearr_78434 = state_78419;(statearr_78434[(11)] = inst_78384__$1);
return statearr_78434;
})();if(cljs.core.truth_(inst_78384__$1))
{var statearr_78435_78482 = state_78419__$1;(statearr_78435_78482[(1)] = (8));
} else
{var statearr_78436_78483 = state_78419__$1;(statearr_78436_78483[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (10)))
{var inst_78378 = (state_78419[(8)]);var inst_78376 = (state_78419[(9)]);var inst_78377 = (state_78419[(10)]);var inst_78370 = (state_78419[(7)]);var inst_78388 = (state_78419[(2)]);var inst_78396 = cljs.core.async.chan.call(null,(1));var inst_78397 = (function (){var c__6202__auto____$1 = inst_78396;var draw = inst_78388;var expr__78380 = inst_78378;var pred__78379 = cljs.core._EQ_;var ch = inst_78378;var v = inst_78377;var vec__78372 = inst_78376;var ctx = inst_78370;return ((function (c__6202__auto____$1,draw,expr__78380,pred__78379,ch,v,vec__78372,ctx,inst_78378,inst_78376,inst_78377,inst_78370,inst_78388,inst_78396,state_val_78420,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,draw,expr__78380,pred__78379,ch,v,vec__78372,ctx,inst_78378,inst_78376,inst_78377,inst_78370,inst_78388,inst_78396,state_val_78420,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_78394){var state_val_78395 = (state_78394[(1)]);if((state_val_78395 === (2)))
{var inst_78392 = (state_78394[(2)]);var state_78394__$1 = state_78394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78394__$1,inst_78392);
} else
{if((state_val_78395 === (1)))
{var inst_78389 = ["tick",v];var inst_78390 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78389,null));var state_78394__$1 = state_78394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78394__$1,(2),onModelEvent,inst_78390);
} else
{return null;
}
}
});})(c__6202__auto____$1,draw,expr__78380,pred__78379,ch,v,vec__78372,ctx,inst_78378,inst_78376,inst_78377,inst_78370,inst_78388,inst_78396,state_val_78420,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto____$1,draw,expr__78380,pred__78379,ch,v,vec__78372,ctx,inst_78378,inst_78376,inst_78377,inst_78370,inst_78388,inst_78396,state_val_78420,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78440 = [null,null,null,null,null,null,null];(statearr_78440[(0)] = state_machine__6188__auto__);
(statearr_78440[(1)] = (1));
return statearr_78440;
});
var state_machine__6188__auto____1 = (function (state_78394){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78394);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78441){if((e78441 instanceof Object))
{var ex__6191__auto__ = e78441;var statearr_78442_78484 = state_78394;(statearr_78442_78484[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78485 = state_78394;
state_78394 = G__78485;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78394){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,draw,expr__78380,pred__78379,ch,v,vec__78372,ctx,inst_78378,inst_78376,inst_78377,inst_78370,inst_78388,inst_78396,state_val_78420,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_78443 = f__6203__auto__.call(null);(statearr_78443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_78443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,draw,expr__78380,pred__78379,ch,v,vec__78372,ctx,inst_78378,inst_78376,inst_78377,inst_78370,inst_78388,inst_78396,state_val_78420,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var inst_78398 = cljs.core.async.impl.dispatch.run.call(null,inst_78397);var inst_78399 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_78400 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78399,null));var inst_78401 = cljs.core.partial.call(null,tool.particle.update,inst_78377);var inst_78402 = cljs.core.update_in.call(null,inst_78370,inst_78400,inst_78401);var inst_78403 = inst_78388.call(null,inst_78402);var state_78419__$1 = (function (){var statearr_78444 = state_78419;(statearr_78444[(12)] = inst_78398);
return statearr_78444;
})();var statearr_78445_78486 = state_78419__$1;(statearr_78445_78486[(2)] = inst_78403);
(statearr_78445_78486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78420 === (8)))
{var inst_78384 = (state_78419[(11)]);var state_78419__$1 = state_78419;var statearr_78446_78487 = state_78419__$1;(statearr_78446_78487[(2)] = inst_78384);
(statearr_78446_78487[(1)] = (10));
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
});})(c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78450 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78450[(0)] = state_machine__6188__auto__);
(statearr_78450[(1)] = (1));
return statearr_78450;
});
var state_machine__6188__auto____1 = (function (state_78419){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78419);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78451){if((e78451 instanceof Object))
{var ex__6191__auto__ = e78451;var statearr_78452_78488 = state_78419;(statearr_78452_78488[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78489 = state_78419;
state_78419 = G__78489;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78419){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_78453 = f__6203__auto__.call(null);(statearr_78453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78471);
return statearr_78453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78471,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return null;
});
app.particle.main.main.call(null);
