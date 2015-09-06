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
return (function (state_132047){var state_val_132048 = (state_132047[(1)]);if((state_val_132048 === (5)))
{var inst_132045 = (state_132047[(2)]);var state_132047__$1 = state_132047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132047__$1,inst_132045);
} else
{if((state_val_132048 === (4)))
{var inst_132015 = (state_132047[(2)]);var inst_132022 = [(0),(0),(0)];var inst_132023 = [(1),(0),(1),(1)];var inst_132024 = [(10),(20)];var inst_132025 = [(0),(0),(0)];var inst_132026 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_132027 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_132028 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_132029 = [inst_132026,inst_132027,inst_132028];var inst_132030 = {"position":inst_132022,"color":inst_132023,"size":inst_132024,"vel":inst_132025,"tex":"img_map","formulaList":inst_132029};var inst_132031 = [inst_132030];var inst_132032 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_132031};var inst_132033 = [(0),(0),(1),(1)];var inst_132034 = [(30),(10)];var inst_132035 = [(10),(10),(0)];var inst_132036 = [(0),(0),(0)];var inst_132037 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_132038 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_132039 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_132040 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_132041 = [inst_132037,inst_132038,inst_132039,inst_132040];var inst_132042 = {"id":"x1","emit":inst_132032,"color":inst_132033,"size":inst_132034,"pos":inst_132035,"vel":inst_132036,"tex":"img_face","formulaList":inst_132041};var inst_132043 = ["edit-particle",inst_132042];var state_132047__$1 = (function (){var statearr_132049 = state_132047;(statearr_132049[(7)] = inst_132015);
return statearr_132049;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132047__$1,(5),onView,inst_132043);
} else
{if((state_val_132048 === (3)))
{var inst_132012 = (state_132047[(2)]);var inst_132013 = cljs.core.async.timeout.call(null,(1100));var state_132047__$1 = (function (){var statearr_132050 = state_132047;(statearr_132050[(8)] = inst_132012);
return statearr_132050;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132047__$1,(4),inst_132013);
} else
{if((state_val_132048 === (2)))
{var inst_132005 = (state_132047[(2)]);var inst_132008 = [(10),(10),(0)];var inst_132009 = {"id":"x1","pos":inst_132008};var inst_132010 = ["edit-particle",inst_132009];var state_132047__$1 = (function (){var statearr_132051 = state_132047;(statearr_132051[(9)] = inst_132005);
return statearr_132051;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132047__$1,(3),onView,inst_132010);
} else
{if((state_val_132048 === (1)))
{var inst_132003 = cljs.core.async.timeout.call(null,(1000));var state_132047__$1 = state_132047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132047__$1,(2),inst_132003);
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
var state_machine__6188__auto____0 = (function (){var statearr_132055 = [null,null,null,null,null,null,null,null,null,null];(statearr_132055[(0)] = state_machine__6188__auto__);
(statearr_132055[(1)] = (1));
return statearr_132055;
});
var state_machine__6188__auto____1 = (function (state_132047){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132056){if((e132056 instanceof Object))
{var ex__6191__auto__ = e132056;var statearr_132057_132059 = state_132047;(statearr_132057_132059[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132060 = state_132047;
state_132047 = G__132060;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132047){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_132058 = f__6203__auto__.call(null);(statearr_132058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_132058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj132275 = {};return obj132275;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_132279){var state_val_132280 = (state_132279[(1)]);if((state_val_132280 === (2)))
{var inst_132277 = (state_132279[(2)]);var state_132279__$1 = state_132279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132279__$1,inst_132277);
} else
{if((state_val_132280 === (1)))
{var state_132279__$1 = state_132279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132279__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132284 = [null,null,null,null,null,null,null];(statearr_132284[(0)] = state_machine__6188__auto__);
(statearr_132284[(1)] = (1));
return statearr_132284;
});
var state_machine__6188__auto____1 = (function (state_132279){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132285){if((e132285 instanceof Object))
{var ex__6191__auto__ = e132285;var statearr_132286_132487 = state_132279;(statearr_132286_132487[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132488 = state_132279;
state_132279 = G__132488;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132279){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_132287 = f__6203__auto__.call(null);(statearr_132287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_132287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___132489 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___132489,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___132489,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_132301){var state_val_132302 = (state_132301[(1)]);if((state_val_132302 === (4)))
{var inst_132291 = (state_132301[(2)]);var inst_132292 = cljs.core.nth.call(null,inst_132291,(0),null);var inst_132293 = cljs.core.nth.call(null,inst_132291,(1),null);var inst_132294 = cljs.core.nth.call(null,inst_132291,(2),null);var inst_132295 = [inst_132292,inst_132293,inst_132294];var inst_132296 = common.onModel.onNext(inst_132295);var state_132301__$1 = (function (){var statearr_132303 = state_132301;(statearr_132303[(7)] = inst_132296);
return statearr_132303;
})();var statearr_132304_132490 = state_132301__$1;(statearr_132304_132490[(2)] = null);
(statearr_132304_132490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132302 === (3)))
{var inst_132299 = (state_132301[(2)]);var state_132301__$1 = state_132301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132301__$1,inst_132299);
} else
{if((state_val_132302 === (2)))
{var state_132301__$1 = state_132301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132301__$1,(4),onModel);
} else
{if((state_val_132302 === (1)))
{var state_132301__$1 = state_132301;var statearr_132305_132491 = state_132301__$1;(statearr_132305_132491[(2)] = null);
(statearr_132305_132491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___132489,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___132489,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132309 = [null,null,null,null,null,null,null,null];(statearr_132309[(0)] = state_machine__6188__auto__);
(statearr_132309[(1)] = (1));
return statearr_132309;
});
var state_machine__6188__auto____1 = (function (state_132301){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132301);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132310){if((e132310 instanceof Object))
{var ex__6191__auto__ = e132310;var statearr_132311_132492 = state_132301;(statearr_132311_132492[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132493 = state_132301;
state_132301 = G__132493;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132301){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___132489,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_132312 = f__6203__auto__.call(null);(statearr_132312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___132489);
return statearr_132312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___132489,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___132494 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___132494,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___132494,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_132325){var state_val_132326 = (state_132325[(1)]);if((state_val_132326 === (4)))
{var inst_132316 = (state_132325[(2)]);var inst_132317 = cljs.core.nth.call(null,inst_132316,(0),null);var inst_132318 = cljs.core.nth.call(null,inst_132316,(1),null);var inst_132319 = [inst_132317,inst_132318];var inst_132320 = common.onModelEvent.onNext(inst_132319);var state_132325__$1 = (function (){var statearr_132327 = state_132325;(statearr_132327[(7)] = inst_132320);
return statearr_132327;
})();var statearr_132328_132495 = state_132325__$1;(statearr_132328_132495[(2)] = null);
(statearr_132328_132495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132326 === (3)))
{var inst_132323 = (state_132325[(2)]);var state_132325__$1 = state_132325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132325__$1,inst_132323);
} else
{if((state_val_132326 === (2)))
{var state_132325__$1 = state_132325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132325__$1,(4),onModelEvent);
} else
{if((state_val_132326 === (1)))
{var state_132325__$1 = state_132325;var statearr_132329_132496 = state_132325__$1;(statearr_132329_132496[(2)] = null);
(statearr_132329_132496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___132494,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___132494,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132333 = [null,null,null,null,null,null,null,null];(statearr_132333[(0)] = state_machine__6188__auto__);
(statearr_132333[(1)] = (1));
return statearr_132333;
});
var state_machine__6188__auto____1 = (function (state_132325){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132334){if((e132334 instanceof Object))
{var ex__6191__auto__ = e132334;var statearr_132335_132497 = state_132325;(statearr_132335_132497[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132498 = state_132325;
state_132325 = G__132498;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132325){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___132494,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_132336 = f__6203__auto__.call(null);(statearr_132336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___132494);
return statearr_132336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___132494,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___132499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___132499,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___132499,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_132355){var state_val_132356 = (state_132355[(1)]);if((state_val_132356 === (5)))
{var inst_132339 = (state_132355[(7)]);var inst_132346 = (state_132355[(8)]);var inst_132350 = (state_132355[(2)]);var tmp132357 = inst_132339;var inst_132339__$1 = tmp132357;var inst_132340 = inst_132346;var state_132355__$1 = (function (){var statearr_132358 = state_132355;(statearr_132358[(7)] = inst_132339__$1);
(statearr_132358[(9)] = inst_132350);
(statearr_132358[(10)] = inst_132340);
return statearr_132358;
})();var statearr_132359_132500 = state_132355__$1;(statearr_132359_132500[(2)] = null);
(statearr_132359_132500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132356 === (4)))
{var inst_132346 = (state_132355[(8)]);var inst_132340 = (state_132355[(10)]);var inst_132344 = (state_132355[(2)]);var inst_132345 = (new Date());var inst_132346__$1 = inst_132345.getTime();var inst_132347 = (inst_132346__$1 - inst_132340);var inst_132348 = (inst_132347 / (1000));var state_132355__$1 = (function (){var statearr_132360 = state_132355;(statearr_132360[(11)] = inst_132344);
(statearr_132360[(8)] = inst_132346__$1);
return statearr_132360;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132355__$1,(5),onTick,inst_132348);
} else
{if((state_val_132356 === (3)))
{var inst_132353 = (state_132355[(2)]);var state_132355__$1 = state_132355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132355__$1,inst_132353);
} else
{if((state_val_132356 === (2)))
{var inst_132339 = (state_132355[(7)]);var inst_132342 = cljs.core.async.timeout.call(null,inst_132339);var state_132355__$1 = state_132355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132355__$1,(4),inst_132342);
} else
{if((state_val_132356 === (1)))
{var inst_132337 = (new Date());var inst_132338 = inst_132337.getTime();var inst_132339 = mspf;var inst_132340 = inst_132338;var state_132355__$1 = (function (){var statearr_132361 = state_132355;(statearr_132361[(7)] = inst_132339);
(statearr_132361[(10)] = inst_132340);
return statearr_132361;
})();var statearr_132362_132501 = state_132355__$1;(statearr_132362_132501[(2)] = null);
(statearr_132362_132501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___132499,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___132499,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132366 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_132366[(0)] = state_machine__6188__auto__);
(statearr_132366[(1)] = (1));
return statearr_132366;
});
var state_machine__6188__auto____1 = (function (state_132355){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132367){if((e132367 instanceof Object))
{var ex__6191__auto__ = e132367;var statearr_132368_132502 = state_132355;(statearr_132368_132502[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132503 = state_132355;
state_132355 = G__132503;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132355){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___132499,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_132369 = f__6203__auto__.call(null);(statearr_132369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___132499);
return statearr_132369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___132499,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.findAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function findAction(actions,id){return cljs.core.first.call(null,cljs.core.filter.call(null,((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (p__132372){var vec__132373 = p__132372;var pid = cljs.core.nth.call(null,vec__132373,(0),null);var _ = cljs.core.nth.call(null,vec__132373,(1),null);var ___$1 = cljs.core.nth.call(null,vec__132373,(2),null);return cljs.core._EQ_.call(null,id,pid);
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
,actions));
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
app.particle.main.handleAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function handleAction(actions,p){var temp__4124__auto__ = app.particle.main.findAction.call(null,actions,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p));if(cljs.core.truth_(temp__4124__auto__))
{var vec__132378 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__132378,(0),null);var act = cljs.core.nth.call(null,vec__132378,(1),null);var params = cljs.core.nth.call(null,vec__132378,(2),null);var action = vec__132378;var pred__132379 = cljs.core._EQ_;var expr__132380 = act;if(cljs.core.truth_(pred__132379.call(null,new cljs.core.Keyword(null,"changePos","changePos",-1909595880),expr__132380)))
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.first.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null),cljs.core.second.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null)));
} else
{return p;
}
} else
{return p;
}
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
var c__6202__auto___132504 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_132453){var state_val_132454 = (state_132453[(1)]);if((state_val_132454 === (7)))
{var inst_132448 = (state_132453[(2)]);var inst_132392 = inst_132448;var state_132453__$1 = (function (){var statearr_132455 = state_132453;(statearr_132455[(7)] = inst_132392);
return statearr_132455;
})();var statearr_132456_132505 = state_132453__$1;(statearr_132456_132505[(2)] = null);
(statearr_132456_132505[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (1)))
{var inst_132382 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_132383 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_132384 = cljs.core.List.EMPTY;var inst_132385 = [inst_132384,(200)];var inst_132386 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_132383,inst_132385);var inst_132387 = [(0),(0)];var inst_132388 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132387,null));var inst_132389 = cljs.core.List.EMPTY;var inst_132390 = [(0),inst_132386,inst_132388,onModel,gl__$1,inst_132389];var inst_132391 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_132382,inst_132390);var inst_132392 = inst_132391;var state_132453__$1 = (function (){var statearr_132457 = state_132453;(statearr_132457[(7)] = inst_132392);
return statearr_132457;
})();var statearr_132458_132506 = state_132453__$1;(statearr_132458_132506[(2)] = null);
(statearr_132458_132506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (4)))
{var inst_132398 = (state_132453[(8)]);var inst_132400 = (state_132453[(9)]);var inst_132398__$1 = (state_132453[(2)]);var inst_132399 = cljs.core.nth.call(null,inst_132398__$1,(0),null);var inst_132400__$1 = cljs.core.nth.call(null,inst_132398__$1,(1),null);var inst_132404 = cljs.core._EQ_.call(null,onTick,inst_132400__$1);var state_132453__$1 = (function (){var statearr_132459 = state_132453;(statearr_132459[(8)] = inst_132398__$1);
(statearr_132459[(9)] = inst_132400__$1);
(statearr_132459[(10)] = inst_132399);
return statearr_132459;
})();if(inst_132404)
{var statearr_132460_132507 = state_132453__$1;(statearr_132460_132507[(1)] = (5));
} else
{var statearr_132461_132508 = state_132453__$1;(statearr_132461_132508[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (13)))
{var inst_132446 = (state_132453[(2)]);var state_132453__$1 = state_132453;var statearr_132462_132509 = state_132453__$1;(statearr_132462_132509[(2)] = inst_132446);
(statearr_132462_132509[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (6)))
{var inst_132400 = (state_132453[(9)]);var inst_132439 = cljs.core._EQ_.call(null,onView,inst_132400);var state_132453__$1 = state_132453;if(inst_132439)
{var statearr_132463_132510 = state_132453__$1;(statearr_132463_132510[(1)] = (11));
} else
{var statearr_132464_132511 = state_132453__$1;(statearr_132464_132511[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (3)))
{var inst_132451 = (state_132453[(2)]);var state_132453__$1 = state_132453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132453__$1,inst_132451);
} else
{if((state_val_132454 === (12)))
{var inst_132392 = (state_132453[(7)]);var state_132453__$1 = state_132453;var statearr_132465_132512 = state_132453__$1;(statearr_132465_132512[(2)] = inst_132392);
(statearr_132465_132512[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (2)))
{var inst_132395 = [onView,onTick];var inst_132396 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132395,null));var state_132453__$1 = state_132453;return cljs.core.async.ioc_alts_BANG_.call(null,state_132453__$1,(4),inst_132396);
} else
{if((state_val_132454 === (11)))
{var inst_132392 = (state_132453[(7)]);var inst_132399 = (state_132453[(10)]);var inst_132441 = (inst_132399[(0)]);var inst_132442 = (inst_132399[(1)]);var inst_132443 = app.particle.abstract$.onViewCommand.call(null,inst_132441,inst_132442,inst_132392);var state_132453__$1 = state_132453;var statearr_132466_132513 = state_132453__$1;(statearr_132466_132513[(2)] = inst_132443);
(statearr_132466_132513[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (9)))
{var inst_132392 = (state_132453[(7)]);var state_132453__$1 = state_132453;var statearr_132467_132514 = state_132453__$1;(statearr_132467_132514[(2)] = inst_132392);
(statearr_132467_132514[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (5)))
{var inst_132392 = (state_132453[(7)]);var inst_132407 = cljs.core.seq_QMARK_.call(null,inst_132392);var state_132453__$1 = state_132453;if(inst_132407)
{var statearr_132468_132515 = state_132453__$1;(statearr_132468_132515[(1)] = (8));
} else
{var statearr_132469_132516 = state_132453__$1;(statearr_132469_132516[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (10)))
{var inst_132398 = (state_132453[(8)]);var inst_132392 = (state_132453[(7)]);var inst_132400 = (state_132453[(9)]);var inst_132399 = (state_132453[(10)]);var inst_132412 = (state_132453[(2)]);var inst_132413 = cljs.core.get.call(null,inst_132412,new cljs.core.Keyword(null,"actions","actions",-812656882));var inst_132414 = cljs.core.partial.call(null,app.particle.main.handleAction,inst_132413);var inst_132422 = cljs.core.async.chan.call(null,(1));var inst_132423 = (function (){var ctx = inst_132392;var v = inst_132399;var actions = inst_132413;var pred__132401 = cljs.core._EQ_;var ch = inst_132400;var c__6202__auto____$1 = inst_132422;var expr__132402 = inst_132400;var handleParticleAction = inst_132414;var vec__132394 = inst_132398;var map__132406 = inst_132412;return ((function (ctx,v,actions,pred__132401,ch,c__6202__auto____$1,expr__132402,handleParticleAction,vec__132394,map__132406,inst_132398,inst_132392,inst_132400,inst_132399,inst_132412,inst_132413,inst_132414,inst_132422,state_val_132454,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (ctx,v,actions,pred__132401,ch,c__6202__auto____$1,expr__132402,handleParticleAction,vec__132394,map__132406,inst_132398,inst_132392,inst_132400,inst_132399,inst_132412,inst_132413,inst_132414,inst_132422,state_val_132454,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_132420){var state_val_132421 = (state_132420[(1)]);if((state_val_132421 === (2)))
{var inst_132418 = (state_132420[(2)]);var state_132420__$1 = state_132420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132420__$1,inst_132418);
} else
{if((state_val_132421 === (1)))
{var inst_132415 = ["tick",v];var inst_132416 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132415,null));var state_132420__$1 = state_132420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132420__$1,(2),onModelEvent,inst_132416);
} else
{return null;
}
}
});})(ctx,v,actions,pred__132401,ch,c__6202__auto____$1,expr__132402,handleParticleAction,vec__132394,map__132406,inst_132398,inst_132392,inst_132400,inst_132399,inst_132412,inst_132413,inst_132414,inst_132422,state_val_132454,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,ctx,v,actions,pred__132401,ch,c__6202__auto____$1,expr__132402,handleParticleAction,vec__132394,map__132406,inst_132398,inst_132392,inst_132400,inst_132399,inst_132412,inst_132413,inst_132414,inst_132422,state_val_132454,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132473 = [null,null,null,null,null,null,null];(statearr_132473[(0)] = state_machine__6188__auto__);
(statearr_132473[(1)] = (1));
return statearr_132473;
});
var state_machine__6188__auto____1 = (function (state_132420){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132474){if((e132474 instanceof Object))
{var ex__6191__auto__ = e132474;var statearr_132475_132517 = state_132420;(statearr_132475_132517[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132518 = state_132420;
state_132420 = G__132518;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132420){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,ctx,v,actions,pred__132401,ch,c__6202__auto____$1,expr__132402,handleParticleAction,vec__132394,map__132406,inst_132398,inst_132392,inst_132400,inst_132399,inst_132412,inst_132413,inst_132414,inst_132422,state_val_132454,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_132476 = f__6203__auto__.call(null);(statearr_132476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_132476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(ctx,v,actions,pred__132401,ch,c__6202__auto____$1,expr__132402,handleParticleAction,vec__132394,map__132406,inst_132398,inst_132392,inst_132400,inst_132399,inst_132412,inst_132413,inst_132414,inst_132422,state_val_132454,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_132424 = cljs.core.async.impl.dispatch.run.call(null,inst_132423);var inst_132425 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_132426 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132425,null));var inst_132427 = cljs.core.partial.call(null,cljs.core.map,inst_132414);var inst_132428 = cljs.core.update_in.call(null,inst_132392,inst_132426,inst_132427);var inst_132429 = [new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_132430 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132429,null));var inst_132431 = cljs.core.List.EMPTY;var inst_132432 = cljs.core.assoc_in.call(null,inst_132428,inst_132430,inst_132431);var inst_132433 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_132434 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_132433,null));var inst_132435 = cljs.core.partial.call(null,tool.particle.update,inst_132399);var inst_132436 = cljs.core.update_in.call(null,inst_132432,inst_132434,inst_132435);var inst_132437 = draw.call(null,inst_132436);var state_132453__$1 = (function (){var statearr_132477 = state_132453;(statearr_132477[(11)] = inst_132424);
return statearr_132477;
})();var statearr_132478_132519 = state_132453__$1;(statearr_132478_132519[(2)] = inst_132437);
(statearr_132478_132519[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_132454 === (8)))
{var inst_132392 = (state_132453[(7)]);var inst_132409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_132392);var state_132453__$1 = state_132453;var statearr_132479_132520 = state_132453__$1;(statearr_132479_132520[(2)] = inst_132409);
(statearr_132479_132520[(1)] = (10));
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
});})(c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_132483 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_132483[(0)] = state_machine__6188__auto__);
(statearr_132483[(1)] = (1));
return statearr_132483;
});
var state_machine__6188__auto____1 = (function (state_132453){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_132453);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e132484){if((e132484 instanceof Object))
{var ex__6191__auto__ = e132484;var statearr_132485_132521 = state_132453;(statearr_132485_132521[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e132484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__132522 = state_132453;
state_132453 = G__132522;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_132453){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_132453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_132486 = f__6203__auto__.call(null);(statearr_132486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___132504);
return statearr_132486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___132504,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
