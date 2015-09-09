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
return (function (state_77006){var state_val_77007 = (state_77006[(1)]);if((state_val_77007 === (5)))
{var inst_77004 = (state_77006[(2)]);var state_77006__$1 = state_77006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77006__$1,inst_77004);
} else
{if((state_val_77007 === (4)))
{var inst_76974 = (state_77006[(2)]);var inst_76981 = [(0),(0),(0)];var inst_76982 = [(1),(0),(1),(1)];var inst_76983 = [(10),(20)];var inst_76984 = [(0),(0),(0)];var inst_76985 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_76986 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_76987 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_76988 = [inst_76985,inst_76986,inst_76987];var inst_76989 = {"position":inst_76981,"color":inst_76982,"size":inst_76983,"vel":inst_76984,"tex":"img_face","formulaList":inst_76988};var inst_76990 = [inst_76989];var inst_76991 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_76990};var inst_76992 = [(0),(0),(1),(1)];var inst_76993 = [(100),(100)];var inst_76994 = [(10),(10),(0)];var inst_76995 = [(0),(0),(0)];var inst_76996 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_76997 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_76998 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_76999 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_77000 = [inst_76996,inst_76997,inst_76998,inst_76999];var inst_77001 = {"id":"x1","emit":inst_76991,"color":inst_76992,"size":inst_76993,"pos":inst_76994,"vel":inst_76995,"tex":"img_face","formulaList":inst_77000};var inst_77002 = ["edit-particle",inst_77001];var state_77006__$1 = (function (){var statearr_77008 = state_77006;(statearr_77008[(7)] = inst_76974);
return statearr_77008;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77006__$1,(5),onView,inst_77002);
} else
{if((state_val_77007 === (3)))
{var inst_76971 = (state_77006[(2)]);var inst_76972 = cljs.core.async.timeout.call(null,(1100));var state_77006__$1 = (function (){var statearr_77009 = state_77006;(statearr_77009[(8)] = inst_76971);
return statearr_77009;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77006__$1,(4),inst_76972);
} else
{if((state_val_77007 === (2)))
{var inst_76964 = (state_77006[(2)]);var inst_76967 = [(10),(10),(0)];var inst_76968 = {"id":"x1","pos":inst_76967};var inst_76969 = ["edit-particle",inst_76968];var state_77006__$1 = (function (){var statearr_77010 = state_77006;(statearr_77010[(9)] = inst_76964);
return statearr_77010;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77006__$1,(3),onView,inst_76969);
} else
{if((state_val_77007 === (1)))
{var inst_76962 = cljs.core.async.timeout.call(null,(1000));var state_77006__$1 = state_77006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77006__$1,(2),inst_76962);
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
var state_machine__6188__auto____0 = (function (){var statearr_77014 = [null,null,null,null,null,null,null,null,null,null];(statearr_77014[(0)] = state_machine__6188__auto__);
(statearr_77014[(1)] = (1));
return statearr_77014;
});
var state_machine__6188__auto____1 = (function (state_77006){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77015){if((e77015 instanceof Object))
{var ex__6191__auto__ = e77015;var statearr_77016_77018 = state_77006;(statearr_77016_77018[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77019 = state_77006;
state_77006 = G__77019;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77006){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_77017 = f__6203__auto__.call(null);(statearr_77017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var fps = (30);var mspf = (((1000) / fps) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77212){var state_val_77213 = (state_77212[(1)]);if((state_val_77213 === (2)))
{var inst_77210 = (state_77212[(2)]);var state_77212__$1 = state_77212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77212__$1,inst_77210);
} else
{if((state_val_77213 === (1)))
{var state_77212__$1 = state_77212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77212__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77217 = [null,null,null,null,null,null,null];(statearr_77217[(0)] = state_machine__6188__auto__);
(statearr_77217[(1)] = (1));
return statearr_77217;
});
var state_machine__6188__auto____1 = (function (state_77212){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77218){if((e77218 instanceof Object))
{var ex__6191__auto__ = e77218;var statearr_77219_77398 = state_77212;(statearr_77219_77398[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77212);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77399 = state_77212;
state_77212 = G__77399;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77212){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77220 = f__6203__auto__.call(null);(statearr_77220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77400,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77400,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77234){var state_val_77235 = (state_77234[(1)]);if((state_val_77235 === (4)))
{var inst_77224 = (state_77234[(2)]);var inst_77225 = cljs.core.nth.call(null,inst_77224,(0),null);var inst_77226 = cljs.core.nth.call(null,inst_77224,(1),null);var inst_77227 = cljs.core.nth.call(null,inst_77224,(2),null);var inst_77228 = [inst_77225,inst_77226,inst_77227];var inst_77229 = common.onModel.onNext(inst_77228);var state_77234__$1 = (function (){var statearr_77236 = state_77234;(statearr_77236[(7)] = inst_77229);
return statearr_77236;
})();var statearr_77237_77401 = state_77234__$1;(statearr_77237_77401[(2)] = null);
(statearr_77237_77401[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77235 === (3)))
{var inst_77232 = (state_77234[(2)]);var state_77234__$1 = state_77234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77234__$1,inst_77232);
} else
{if((state_val_77235 === (2)))
{var state_77234__$1 = state_77234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77234__$1,(4),onModel);
} else
{if((state_val_77235 === (1)))
{var state_77234__$1 = state_77234;var statearr_77238_77402 = state_77234__$1;(statearr_77238_77402[(2)] = null);
(statearr_77238_77402[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___77400,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77400,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77242 = [null,null,null,null,null,null,null,null];(statearr_77242[(0)] = state_machine__6188__auto__);
(statearr_77242[(1)] = (1));
return statearr_77242;
});
var state_machine__6188__auto____1 = (function (state_77234){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77243){if((e77243 instanceof Object))
{var ex__6191__auto__ = e77243;var statearr_77244_77403 = state_77234;(statearr_77244_77403[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77404 = state_77234;
state_77234 = G__77404;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77234){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77400,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77245 = f__6203__auto__.call(null);(statearr_77245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77400);
return statearr_77245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77400,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77405 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77405,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77405,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77258){var state_val_77259 = (state_77258[(1)]);if((state_val_77259 === (4)))
{var inst_77249 = (state_77258[(2)]);var inst_77250 = cljs.core.nth.call(null,inst_77249,(0),null);var inst_77251 = cljs.core.nth.call(null,inst_77249,(1),null);var inst_77252 = [inst_77250,inst_77251];var inst_77253 = common.onModelEvent.onNext(inst_77252);var state_77258__$1 = (function (){var statearr_77260 = state_77258;(statearr_77260[(7)] = inst_77253);
return statearr_77260;
})();var statearr_77261_77406 = state_77258__$1;(statearr_77261_77406[(2)] = null);
(statearr_77261_77406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77259 === (3)))
{var inst_77256 = (state_77258[(2)]);var state_77258__$1 = state_77258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77258__$1,inst_77256);
} else
{if((state_val_77259 === (2)))
{var state_77258__$1 = state_77258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77258__$1,(4),onModelEvent);
} else
{if((state_val_77259 === (1)))
{var state_77258__$1 = state_77258;var statearr_77262_77407 = state_77258__$1;(statearr_77262_77407[(2)] = null);
(statearr_77262_77407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___77405,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77405,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77266 = [null,null,null,null,null,null,null,null];(statearr_77266[(0)] = state_machine__6188__auto__);
(statearr_77266[(1)] = (1));
return statearr_77266;
});
var state_machine__6188__auto____1 = (function (state_77258){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77258);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77267){if((e77267 instanceof Object))
{var ex__6191__auto__ = e77267;var statearr_77268_77408 = state_77258;(statearr_77268_77408[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77409 = state_77258;
state_77258 = G__77409;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77258){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77405,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77269 = f__6203__auto__.call(null);(statearr_77269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77405);
return statearr_77269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77405,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77410,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77410,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77288){var state_val_77289 = (state_77288[(1)]);if((state_val_77289 === (5)))
{var inst_77272 = (state_77288[(7)]);var inst_77279 = (state_77288[(8)]);var inst_77283 = (state_77288[(2)]);var tmp77290 = inst_77272;var inst_77272__$1 = tmp77290;var inst_77273 = inst_77279;var state_77288__$1 = (function (){var statearr_77291 = state_77288;(statearr_77291[(7)] = inst_77272__$1);
(statearr_77291[(9)] = inst_77283);
(statearr_77291[(10)] = inst_77273);
return statearr_77291;
})();var statearr_77292_77411 = state_77288__$1;(statearr_77292_77411[(2)] = null);
(statearr_77292_77411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77289 === (4)))
{var inst_77279 = (state_77288[(8)]);var inst_77273 = (state_77288[(10)]);var inst_77277 = (state_77288[(2)]);var inst_77278 = (new Date());var inst_77279__$1 = inst_77278.getTime();var inst_77280 = (inst_77279__$1 - inst_77273);var inst_77281 = (inst_77280 / (1000));var state_77288__$1 = (function (){var statearr_77293 = state_77288;(statearr_77293[(11)] = inst_77277);
(statearr_77293[(8)] = inst_77279__$1);
return statearr_77293;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77288__$1,(5),onTick,inst_77281);
} else
{if((state_val_77289 === (3)))
{var inst_77286 = (state_77288[(2)]);var state_77288__$1 = state_77288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77288__$1,inst_77286);
} else
{if((state_val_77289 === (2)))
{var inst_77272 = (state_77288[(7)]);var inst_77275 = cljs.core.async.timeout.call(null,inst_77272);var state_77288__$1 = state_77288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77288__$1,(4),inst_77275);
} else
{if((state_val_77289 === (1)))
{var inst_77270 = (new Date());var inst_77271 = inst_77270.getTime();var inst_77272 = mspf;var inst_77273 = inst_77271;var state_77288__$1 = (function (){var statearr_77294 = state_77288;(statearr_77294[(7)] = inst_77272);
(statearr_77294[(10)] = inst_77273);
return statearr_77294;
})();var statearr_77295_77412 = state_77288__$1;(statearr_77295_77412[(2)] = null);
(statearr_77295_77412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___77410,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77410,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77299 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77299[(0)] = state_machine__6188__auto__);
(statearr_77299[(1)] = (1));
return statearr_77299;
});
var state_machine__6188__auto____1 = (function (state_77288){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77300){if((e77300 instanceof Object))
{var ex__6191__auto__ = e77300;var statearr_77301_77413 = state_77288;(statearr_77301_77413[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77414 = state_77288;
state_77288 = G__77414;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77288){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77410,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77302 = f__6203__auto__.call(null);(statearr_77302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77410);
return statearr_77302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77410,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77415 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77363){var state_val_77364 = (state_77363[(1)]);if((state_val_77364 === (7)))
{var inst_77358 = (state_77363[(2)]);var inst_77314 = inst_77358;var state_77363__$1 = (function (){var statearr_77365 = state_77363;(statearr_77365[(7)] = inst_77314);
return statearr_77365;
})();var statearr_77366_77416 = state_77363__$1;(statearr_77366_77416[(2)] = null);
(statearr_77366_77416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (1)))
{var inst_77303 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_77304 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_77305 = cljs.core.List.EMPTY;var inst_77306 = [inst_77305,(200)];var inst_77307 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77304,inst_77306);var inst_77308 = [(0),(0),(0)];var inst_77309 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77308,null));var inst_77310 = [(0),(0)];var inst_77311 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77310,null));var inst_77312 = [inst_77307,inst_77309,inst_77311,onModel];var inst_77313 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77303,inst_77312);var inst_77314 = inst_77313;var state_77363__$1 = (function (){var statearr_77367 = state_77363;(statearr_77367[(7)] = inst_77314);
return statearr_77367;
})();var statearr_77368_77417 = state_77363__$1;(statearr_77368_77417[(2)] = null);
(statearr_77368_77417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (4)))
{var inst_77320 = (state_77363[(8)]);var inst_77322 = (state_77363[(9)]);var inst_77320__$1 = (state_77363[(2)]);var inst_77321 = cljs.core.nth.call(null,inst_77320__$1,(0),null);var inst_77322__$1 = cljs.core.nth.call(null,inst_77320__$1,(1),null);var inst_77326 = cljs.core._EQ_.call(null,onTick,inst_77322__$1);var state_77363__$1 = (function (){var statearr_77369 = state_77363;(statearr_77369[(8)] = inst_77320__$1);
(statearr_77369[(10)] = inst_77321);
(statearr_77369[(9)] = inst_77322__$1);
return statearr_77369;
})();if(inst_77326)
{var statearr_77370_77418 = state_77363__$1;(statearr_77370_77418[(1)] = (5));
} else
{var statearr_77371_77419 = state_77363__$1;(statearr_77371_77419[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (13)))
{var inst_77356 = (state_77363[(2)]);var state_77363__$1 = state_77363;var statearr_77372_77420 = state_77363__$1;(statearr_77372_77420[(2)] = inst_77356);
(statearr_77372_77420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (6)))
{var inst_77322 = (state_77363[(9)]);var inst_77349 = cljs.core._EQ_.call(null,onView,inst_77322);var state_77363__$1 = state_77363;if(inst_77349)
{var statearr_77373_77421 = state_77363__$1;(statearr_77373_77421[(1)] = (11));
} else
{var statearr_77374_77422 = state_77363__$1;(statearr_77374_77422[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (3)))
{var inst_77361 = (state_77363[(2)]);var state_77363__$1 = state_77363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77363__$1,inst_77361);
} else
{if((state_val_77364 === (12)))
{var inst_77314 = (state_77363[(7)]);var state_77363__$1 = state_77363;var statearr_77375_77423 = state_77363__$1;(statearr_77375_77423[(2)] = inst_77314);
(statearr_77375_77423[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (2)))
{var inst_77317 = [onView,onTick];var inst_77318 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77317,null));var state_77363__$1 = state_77363;return cljs.core.async.ioc_alts_BANG_.call(null,state_77363__$1,(4),inst_77318);
} else
{if((state_val_77364 === (11)))
{var inst_77321 = (state_77363[(10)]);var inst_77314 = (state_77363[(7)]);var inst_77351 = (inst_77321[(0)]);var inst_77352 = (inst_77321[(1)]);var inst_77353 = app.particle.abstract$.onViewCommand.call(null,inst_77351,inst_77352,inst_77314);var state_77363__$1 = state_77363;var statearr_77376_77424 = state_77363__$1;(statearr_77376_77424[(2)] = inst_77353);
(statearr_77376_77424[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (9)))
{var state_77363__$1 = state_77363;var statearr_77377_77425 = state_77363__$1;(statearr_77377_77425[(2)] = cljs.core.identity);
(statearr_77377_77425[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (5)))
{var inst_77328 = (state_77363[(11)]);var inst_77314 = (state_77363[(7)]);var inst_77328__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_77314);var state_77363__$1 = (function (){var statearr_77378 = state_77363;(statearr_77378[(11)] = inst_77328__$1);
return statearr_77378;
})();if(cljs.core.truth_(inst_77328__$1))
{var statearr_77379_77426 = state_77363__$1;(statearr_77379_77426[(1)] = (8));
} else
{var statearr_77380_77427 = state_77363__$1;(statearr_77380_77427[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (10)))
{var inst_77320 = (state_77363[(8)]);var inst_77321 = (state_77363[(10)]);var inst_77322 = (state_77363[(9)]);var inst_77314 = (state_77363[(7)]);var inst_77332 = (state_77363[(2)]);var inst_77340 = cljs.core.async.chan.call(null,(1));var inst_77341 = (function (){var c__6202__auto____$1 = inst_77340;var draw = inst_77332;var expr__77324 = inst_77322;var pred__77323 = cljs.core._EQ_;var ch = inst_77322;var v = inst_77321;var vec__77316 = inst_77320;var ctx = inst_77314;return ((function (c__6202__auto____$1,draw,expr__77324,pred__77323,ch,v,vec__77316,ctx,inst_77320,inst_77321,inst_77322,inst_77314,inst_77332,inst_77340,state_val_77364,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,draw,expr__77324,pred__77323,ch,v,vec__77316,ctx,inst_77320,inst_77321,inst_77322,inst_77314,inst_77332,inst_77340,state_val_77364,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77338){var state_val_77339 = (state_77338[(1)]);if((state_val_77339 === (2)))
{var inst_77336 = (state_77338[(2)]);var state_77338__$1 = state_77338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77338__$1,inst_77336);
} else
{if((state_val_77339 === (1)))
{var inst_77333 = ["tick",v];var inst_77334 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77333,null));var state_77338__$1 = state_77338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77338__$1,(2),onModelEvent,inst_77334);
} else
{return null;
}
}
});})(c__6202__auto____$1,draw,expr__77324,pred__77323,ch,v,vec__77316,ctx,inst_77320,inst_77321,inst_77322,inst_77314,inst_77332,inst_77340,state_val_77364,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto____$1,draw,expr__77324,pred__77323,ch,v,vec__77316,ctx,inst_77320,inst_77321,inst_77322,inst_77314,inst_77332,inst_77340,state_val_77364,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77384 = [null,null,null,null,null,null,null];(statearr_77384[(0)] = state_machine__6188__auto__);
(statearr_77384[(1)] = (1));
return statearr_77384;
});
var state_machine__6188__auto____1 = (function (state_77338){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77338);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77385){if((e77385 instanceof Object))
{var ex__6191__auto__ = e77385;var statearr_77386_77428 = state_77338;(statearr_77386_77428[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77429 = state_77338;
state_77338 = G__77429;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77338){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,draw,expr__77324,pred__77323,ch,v,vec__77316,ctx,inst_77320,inst_77321,inst_77322,inst_77314,inst_77332,inst_77340,state_val_77364,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77387 = f__6203__auto__.call(null);(statearr_77387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_77387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,draw,expr__77324,pred__77323,ch,v,vec__77316,ctx,inst_77320,inst_77321,inst_77322,inst_77314,inst_77332,inst_77340,state_val_77364,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var inst_77342 = cljs.core.async.impl.dispatch.run.call(null,inst_77341);var inst_77343 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_77344 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77343,null));var inst_77345 = cljs.core.partial.call(null,tool.particle.update,inst_77321);var inst_77346 = cljs.core.update_in.call(null,inst_77314,inst_77344,inst_77345);var inst_77347 = inst_77332.call(null,inst_77346);var state_77363__$1 = (function (){var statearr_77388 = state_77363;(statearr_77388[(12)] = inst_77342);
return statearr_77388;
})();var statearr_77389_77430 = state_77363__$1;(statearr_77389_77430[(2)] = inst_77347);
(statearr_77389_77430[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77364 === (8)))
{var inst_77328 = (state_77363[(11)]);var state_77363__$1 = state_77363;var statearr_77390_77431 = state_77363__$1;(statearr_77390_77431[(2)] = inst_77328);
(statearr_77390_77431[(1)] = (10));
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
});})(c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77394 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77394[(0)] = state_machine__6188__auto__);
(statearr_77394[(1)] = (1));
return statearr_77394;
});
var state_machine__6188__auto____1 = (function (state_77363){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77363);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77395){if((e77395 instanceof Object))
{var ex__6191__auto__ = e77395;var statearr_77396_77432 = state_77363;(statearr_77396_77432[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77433 = state_77363;
state_77363 = G__77433;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77363){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77397 = f__6203__auto__.call(null);(statearr_77397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77415);
return statearr_77397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77415,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return null;
});
app.particle.main.main.call(null);
