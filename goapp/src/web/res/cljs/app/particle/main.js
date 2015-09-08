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
return (function (state_45045){var state_val_45046 = (state_45045[(1)]);if((state_val_45046 === (5)))
{var inst_45043 = (state_45045[(2)]);var state_45045__$1 = state_45045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45045__$1,inst_45043);
} else
{if((state_val_45046 === (4)))
{var inst_45013 = (state_45045[(2)]);var inst_45020 = [(0),(0),(0)];var inst_45021 = [(1),(0),(1),(1)];var inst_45022 = [(10),(20)];var inst_45023 = [(0),(0),(0)];var inst_45024 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_45025 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_45026 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_45027 = [inst_45024,inst_45025,inst_45026];var inst_45028 = {"position":inst_45020,"color":inst_45021,"size":inst_45022,"vel":inst_45023,"tex":"img_map","formulaList":inst_45027};var inst_45029 = [inst_45028];var inst_45030 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_45029};var inst_45031 = [(0),(0),(1),(1)];var inst_45032 = [(30),(10)];var inst_45033 = [(10),(10),(0)];var inst_45034 = [(0),(0),(0)];var inst_45035 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_45036 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_45037 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_45038 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_45039 = [inst_45035,inst_45036,inst_45037,inst_45038];var inst_45040 = {"id":"x1","emit":inst_45030,"color":inst_45031,"size":inst_45032,"pos":inst_45033,"vel":inst_45034,"tex":"img_face","formulaList":inst_45039};var inst_45041 = ["edit-particle",inst_45040];var state_45045__$1 = (function (){var statearr_45047 = state_45045;(statearr_45047[(7)] = inst_45013);
return statearr_45047;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45045__$1,(5),onView,inst_45041);
} else
{if((state_val_45046 === (3)))
{var inst_45010 = (state_45045[(2)]);var inst_45011 = cljs.core.async.timeout.call(null,(1100));var state_45045__$1 = (function (){var statearr_45048 = state_45045;(statearr_45048[(8)] = inst_45010);
return statearr_45048;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45045__$1,(4),inst_45011);
} else
{if((state_val_45046 === (2)))
{var inst_45003 = (state_45045[(2)]);var inst_45006 = [(10),(10),(0)];var inst_45007 = {"id":"x1","pos":inst_45006};var inst_45008 = ["edit-particle",inst_45007];var state_45045__$1 = (function (){var statearr_45049 = state_45045;(statearr_45049[(9)] = inst_45003);
return statearr_45049;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45045__$1,(3),onView,inst_45008);
} else
{if((state_val_45046 === (1)))
{var inst_45001 = cljs.core.async.timeout.call(null,(1000));var state_45045__$1 = state_45045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45045__$1,(2),inst_45001);
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
var state_machine__6188__auto____0 = (function (){var statearr_45053 = [null,null,null,null,null,null,null,null,null,null];(statearr_45053[(0)] = state_machine__6188__auto__);
(statearr_45053[(1)] = (1));
return statearr_45053;
});
var state_machine__6188__auto____1 = (function (state_45045){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45045);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45054){if((e45054 instanceof Object))
{var ex__6191__auto__ = e45054;var statearr_45055_45057 = state_45045;(statearr_45055_45057[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45058 = state_45045;
state_45045 = G__45058;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45045){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_45056 = f__6203__auto__.call(null);(statearr_45056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_45056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj45241 = {};return obj45241;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45245){var state_val_45246 = (state_45245[(1)]);if((state_val_45246 === (2)))
{var inst_45243 = (state_45245[(2)]);var state_45245__$1 = state_45245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45245__$1,inst_45243);
} else
{if((state_val_45246 === (1)))
{var state_45245__$1 = state_45245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45245__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45250 = [null,null,null,null,null,null,null];(statearr_45250[(0)] = state_machine__6188__auto__);
(statearr_45250[(1)] = (1));
return statearr_45250;
});
var state_machine__6188__auto____1 = (function (state_45245){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45245);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45251){if((e45251 instanceof Object))
{var ex__6191__auto__ = e45251;var statearr_45252_45421 = state_45245;(statearr_45252_45421[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45422 = state_45245;
state_45245 = G__45422;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45245){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45253 = f__6203__auto__.call(null);(statearr_45253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_45253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45423 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45423,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45423,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45267){var state_val_45268 = (state_45267[(1)]);if((state_val_45268 === (4)))
{var inst_45257 = (state_45267[(2)]);var inst_45258 = cljs.core.nth.call(null,inst_45257,(0),null);var inst_45259 = cljs.core.nth.call(null,inst_45257,(1),null);var inst_45260 = cljs.core.nth.call(null,inst_45257,(2),null);var inst_45261 = [inst_45258,inst_45259,inst_45260];var inst_45262 = common.onModel.onNext(inst_45261);var state_45267__$1 = (function (){var statearr_45269 = state_45267;(statearr_45269[(7)] = inst_45262);
return statearr_45269;
})();var statearr_45270_45424 = state_45267__$1;(statearr_45270_45424[(2)] = null);
(statearr_45270_45424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45268 === (3)))
{var inst_45265 = (state_45267[(2)]);var state_45267__$1 = state_45267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45267__$1,inst_45265);
} else
{if((state_val_45268 === (2)))
{var state_45267__$1 = state_45267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45267__$1,(4),onModel);
} else
{if((state_val_45268 === (1)))
{var state_45267__$1 = state_45267;var statearr_45271_45425 = state_45267__$1;(statearr_45271_45425[(2)] = null);
(statearr_45271_45425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___45423,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45423,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45275 = [null,null,null,null,null,null,null,null];(statearr_45275[(0)] = state_machine__6188__auto__);
(statearr_45275[(1)] = (1));
return statearr_45275;
});
var state_machine__6188__auto____1 = (function (state_45267){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45276){if((e45276 instanceof Object))
{var ex__6191__auto__ = e45276;var statearr_45277_45426 = state_45267;(statearr_45277_45426[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45427 = state_45267;
state_45267 = G__45427;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45267){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45423,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45278 = f__6203__auto__.call(null);(statearr_45278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45423);
return statearr_45278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45423,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45428 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45428,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45428,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45291){var state_val_45292 = (state_45291[(1)]);if((state_val_45292 === (4)))
{var inst_45282 = (state_45291[(2)]);var inst_45283 = cljs.core.nth.call(null,inst_45282,(0),null);var inst_45284 = cljs.core.nth.call(null,inst_45282,(1),null);var inst_45285 = [inst_45283,inst_45284];var inst_45286 = common.onModelEvent.onNext(inst_45285);var state_45291__$1 = (function (){var statearr_45293 = state_45291;(statearr_45293[(7)] = inst_45286);
return statearr_45293;
})();var statearr_45294_45429 = state_45291__$1;(statearr_45294_45429[(2)] = null);
(statearr_45294_45429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45292 === (3)))
{var inst_45289 = (state_45291[(2)]);var state_45291__$1 = state_45291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45291__$1,inst_45289);
} else
{if((state_val_45292 === (2)))
{var state_45291__$1 = state_45291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45291__$1,(4),onModelEvent);
} else
{if((state_val_45292 === (1)))
{var state_45291__$1 = state_45291;var statearr_45295_45430 = state_45291__$1;(statearr_45295_45430[(2)] = null);
(statearr_45295_45430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___45428,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45428,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45299 = [null,null,null,null,null,null,null,null];(statearr_45299[(0)] = state_machine__6188__auto__);
(statearr_45299[(1)] = (1));
return statearr_45299;
});
var state_machine__6188__auto____1 = (function (state_45291){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45300){if((e45300 instanceof Object))
{var ex__6191__auto__ = e45300;var statearr_45301_45431 = state_45291;(statearr_45301_45431[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45432 = state_45291;
state_45291 = G__45432;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45291){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45428,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45302 = f__6203__auto__.call(null);(statearr_45302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45428);
return statearr_45302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45428,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45433,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45433,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45321){var state_val_45322 = (state_45321[(1)]);if((state_val_45322 === (5)))
{var inst_45312 = (state_45321[(7)]);var inst_45305 = (state_45321[(8)]);var inst_45316 = (state_45321[(2)]);var tmp45323 = inst_45305;var inst_45305__$1 = tmp45323;var inst_45306 = inst_45312;var state_45321__$1 = (function (){var statearr_45324 = state_45321;(statearr_45324[(9)] = inst_45316);
(statearr_45324[(10)] = inst_45306);
(statearr_45324[(8)] = inst_45305__$1);
return statearr_45324;
})();var statearr_45325_45434 = state_45321__$1;(statearr_45325_45434[(2)] = null);
(statearr_45325_45434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45322 === (4)))
{var inst_45306 = (state_45321[(10)]);var inst_45312 = (state_45321[(7)]);var inst_45310 = (state_45321[(2)]);var inst_45311 = (new Date());var inst_45312__$1 = inst_45311.getTime();var inst_45313 = (inst_45312__$1 - inst_45306);var inst_45314 = (inst_45313 / (1000));var state_45321__$1 = (function (){var statearr_45326 = state_45321;(statearr_45326[(11)] = inst_45310);
(statearr_45326[(7)] = inst_45312__$1);
return statearr_45326;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45321__$1,(5),onTick,inst_45314);
} else
{if((state_val_45322 === (3)))
{var inst_45319 = (state_45321[(2)]);var state_45321__$1 = state_45321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45321__$1,inst_45319);
} else
{if((state_val_45322 === (2)))
{var inst_45305 = (state_45321[(8)]);var inst_45308 = cljs.core.async.timeout.call(null,inst_45305);var state_45321__$1 = state_45321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45321__$1,(4),inst_45308);
} else
{if((state_val_45322 === (1)))
{var inst_45303 = (new Date());var inst_45304 = inst_45303.getTime();var inst_45305 = mspf;var inst_45306 = inst_45304;var state_45321__$1 = (function (){var statearr_45327 = state_45321;(statearr_45327[(10)] = inst_45306);
(statearr_45327[(8)] = inst_45305);
return statearr_45327;
})();var statearr_45328_45435 = state_45321__$1;(statearr_45328_45435[(2)] = null);
(statearr_45328_45435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___45433,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45433,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45332 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45332[(0)] = state_machine__6188__auto__);
(statearr_45332[(1)] = (1));
return statearr_45332;
});
var state_machine__6188__auto____1 = (function (state_45321){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45321);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45333){if((e45333 instanceof Object))
{var ex__6191__auto__ = e45333;var statearr_45334_45436 = state_45321;(statearr_45334_45436[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45333;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45437 = state_45321;
state_45321 = G__45437;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45321){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45433,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45335 = f__6203__auto__.call(null);(statearr_45335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45433);
return statearr_45335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45433,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45438 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45391){var state_val_45392 = (state_45391[(1)]);if((state_val_45392 === (7)))
{var inst_45386 = (state_45391[(2)]);var inst_45347 = inst_45386;var state_45391__$1 = (function (){var statearr_45393 = state_45391;(statearr_45393[(7)] = inst_45347);
return statearr_45393;
})();var statearr_45394_45439 = state_45391__$1;(statearr_45394_45439[(2)] = null);
(statearr_45394_45439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (1)))
{var inst_45336 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_45337 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];var inst_45338 = cljs.core.List.EMPTY;var inst_45339 = [0.1,0.1,0.1];var inst_45340 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45339,null));var inst_45341 = [inst_45338,(200),inst_45340];var inst_45342 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45337,inst_45341);var inst_45343 = [(0),(0)];var inst_45344 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45343,null));var inst_45345 = [(0),inst_45342,inst_45344,onModel,gl__$1];var inst_45346 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45336,inst_45345);var inst_45347 = inst_45346;var state_45391__$1 = (function (){var statearr_45395 = state_45391;(statearr_45395[(7)] = inst_45347);
return statearr_45395;
})();var statearr_45396_45440 = state_45391__$1;(statearr_45396_45440[(2)] = null);
(statearr_45396_45440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (4)))
{var inst_45353 = (state_45391[(8)]);var inst_45355 = (state_45391[(9)]);var inst_45353__$1 = (state_45391[(2)]);var inst_45354 = cljs.core.nth.call(null,inst_45353__$1,(0),null);var inst_45355__$1 = cljs.core.nth.call(null,inst_45353__$1,(1),null);var inst_45359 = cljs.core._EQ_.call(null,onTick,inst_45355__$1);var state_45391__$1 = (function (){var statearr_45397 = state_45391;(statearr_45397[(8)] = inst_45353__$1);
(statearr_45397[(10)] = inst_45354);
(statearr_45397[(9)] = inst_45355__$1);
return statearr_45397;
})();if(inst_45359)
{var statearr_45398_45441 = state_45391__$1;(statearr_45398_45441[(1)] = (5));
} else
{var statearr_45399_45442 = state_45391__$1;(statearr_45399_45442[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (6)))
{var inst_45355 = (state_45391[(9)]);var inst_45377 = cljs.core._EQ_.call(null,onView,inst_45355);var state_45391__$1 = state_45391;if(inst_45377)
{var statearr_45400_45443 = state_45391__$1;(statearr_45400_45443[(1)] = (8));
} else
{var statearr_45401_45444 = state_45391__$1;(statearr_45401_45444[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (3)))
{var inst_45389 = (state_45391[(2)]);var state_45391__$1 = state_45391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45391__$1,inst_45389);
} else
{if((state_val_45392 === (2)))
{var inst_45350 = [onView,onTick];var inst_45351 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45350,null));var state_45391__$1 = state_45391;return cljs.core.async.ioc_alts_BANG_.call(null,state_45391__$1,(4),inst_45351);
} else
{if((state_val_45392 === (9)))
{var inst_45347 = (state_45391[(7)]);var state_45391__$1 = state_45391;var statearr_45402_45445 = state_45391__$1;(statearr_45402_45445[(2)] = inst_45347);
(statearr_45402_45445[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (5)))
{var inst_45353 = (state_45391[(8)]);var inst_45354 = (state_45391[(10)]);var inst_45347 = (state_45391[(7)]);var inst_45355 = (state_45391[(9)]);var inst_45368 = cljs.core.async.chan.call(null,(1));var inst_45369 = (function (){var c__6202__auto____$1 = inst_45368;var expr__45357 = inst_45355;var pred__45356 = cljs.core._EQ_;var ch = inst_45355;var v = inst_45354;var vec__45349 = inst_45353;var ctx = inst_45347;return ((function (c__6202__auto____$1,expr__45357,pred__45356,ch,v,vec__45349,ctx,inst_45353,inst_45354,inst_45347,inst_45355,inst_45368,state_val_45392,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__45357,pred__45356,ch,v,vec__45349,ctx,inst_45353,inst_45354,inst_45347,inst_45355,inst_45368,state_val_45392,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45366){var state_val_45367 = (state_45366[(1)]);if((state_val_45367 === (2)))
{var inst_45364 = (state_45366[(2)]);var state_45366__$1 = state_45366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45366__$1,inst_45364);
} else
{if((state_val_45367 === (1)))
{var inst_45361 = ["tick",v];var inst_45362 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45361,null));var state_45366__$1 = state_45366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45366__$1,(2),onModelEvent,inst_45362);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__45357,pred__45356,ch,v,vec__45349,ctx,inst_45353,inst_45354,inst_45347,inst_45355,inst_45368,state_val_45392,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__45357,pred__45356,ch,v,vec__45349,ctx,inst_45353,inst_45354,inst_45347,inst_45355,inst_45368,state_val_45392,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45406 = [null,null,null,null,null,null,null];(statearr_45406[(0)] = state_machine__6188__auto__);
(statearr_45406[(1)] = (1));
return statearr_45406;
});
var state_machine__6188__auto____1 = (function (state_45366){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45407){if((e45407 instanceof Object))
{var ex__6191__auto__ = e45407;var statearr_45408_45446 = state_45366;(statearr_45408_45446[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45447 = state_45366;
state_45366 = G__45447;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45366){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__45357,pred__45356,ch,v,vec__45349,ctx,inst_45353,inst_45354,inst_45347,inst_45355,inst_45368,state_val_45392,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45409 = f__6203__auto__.call(null);(statearr_45409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_45409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__45357,pred__45356,ch,v,vec__45349,ctx,inst_45353,inst_45354,inst_45347,inst_45355,inst_45368,state_val_45392,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_45370 = cljs.core.async.impl.dispatch.run.call(null,inst_45369);var inst_45371 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_45372 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45371,null));var inst_45373 = cljs.core.partial.call(null,tool.particle.update,inst_45354);var inst_45374 = cljs.core.update_in.call(null,inst_45347,inst_45372,inst_45373);var inst_45375 = draw.call(null,inst_45374);var state_45391__$1 = (function (){var statearr_45410 = state_45391;(statearr_45410[(11)] = inst_45370);
return statearr_45410;
})();var statearr_45411_45448 = state_45391__$1;(statearr_45411_45448[(2)] = inst_45375);
(statearr_45411_45448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (10)))
{var inst_45384 = (state_45391[(2)]);var state_45391__$1 = state_45391;var statearr_45412_45449 = state_45391__$1;(statearr_45412_45449[(2)] = inst_45384);
(statearr_45412_45449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45392 === (8)))
{var inst_45354 = (state_45391[(10)]);var inst_45347 = (state_45391[(7)]);var inst_45379 = (inst_45354[(0)]);var inst_45380 = (inst_45354[(1)]);var inst_45381 = app.particle.abstract$.onViewCommand.call(null,inst_45379,inst_45380,inst_45347);var state_45391__$1 = state_45391;var statearr_45413_45450 = state_45391__$1;(statearr_45413_45450[(2)] = inst_45381);
(statearr_45413_45450[(1)] = (10));
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
});})(c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45417 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45417[(0)] = state_machine__6188__auto__);
(statearr_45417[(1)] = (1));
return statearr_45417;
});
var state_machine__6188__auto____1 = (function (state_45391){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45391);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45418){if((e45418 instanceof Object))
{var ex__6191__auto__ = e45418;var statearr_45419_45451 = state_45391;(statearr_45419_45451[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45452 = state_45391;
state_45391 = G__45452;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45391){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45420 = f__6203__auto__.call(null);(statearr_45420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45438);
return statearr_45420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45438,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
