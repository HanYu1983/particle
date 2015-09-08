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
return (function (state_57312){var state_val_57313 = (state_57312[(1)]);if((state_val_57313 === (5)))
{var inst_57310 = (state_57312[(2)]);var state_57312__$1 = state_57312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57312__$1,inst_57310);
} else
{if((state_val_57313 === (4)))
{var inst_57280 = (state_57312[(2)]);var inst_57287 = [(0),(0),(0)];var inst_57288 = [(1),(0),(1),(1)];var inst_57289 = [(10),(20)];var inst_57290 = [(0),(0),(0)];var inst_57291 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_57292 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_57293 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_57294 = [inst_57291,inst_57292,inst_57293];var inst_57295 = {"position":inst_57287,"color":inst_57288,"size":inst_57289,"vel":inst_57290,"tex":"img_map","formulaList":inst_57294};var inst_57296 = [inst_57295];var inst_57297 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_57296};var inst_57298 = [(0),(0),(1),(1)];var inst_57299 = [(30),(10)];var inst_57300 = [(10),(10),(0)];var inst_57301 = [(0),(0),(0)];var inst_57302 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_57303 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_57304 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_57305 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_57306 = [inst_57302,inst_57303,inst_57304,inst_57305];var inst_57307 = {"id":"x1","emit":inst_57297,"color":inst_57298,"size":inst_57299,"pos":inst_57300,"vel":inst_57301,"tex":"img_face","formulaList":inst_57306};var inst_57308 = ["edit-particle",inst_57307];var state_57312__$1 = (function (){var statearr_57314 = state_57312;(statearr_57314[(7)] = inst_57280);
return statearr_57314;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57312__$1,(5),onView,inst_57308);
} else
{if((state_val_57313 === (3)))
{var inst_57277 = (state_57312[(2)]);var inst_57278 = cljs.core.async.timeout.call(null,(1100));var state_57312__$1 = (function (){var statearr_57315 = state_57312;(statearr_57315[(8)] = inst_57277);
return statearr_57315;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57312__$1,(4),inst_57278);
} else
{if((state_val_57313 === (2)))
{var inst_57270 = (state_57312[(2)]);var inst_57273 = [(10),(10),(0)];var inst_57274 = {"id":"x1","pos":inst_57273};var inst_57275 = ["edit-particle",inst_57274];var state_57312__$1 = (function (){var statearr_57316 = state_57312;(statearr_57316[(9)] = inst_57270);
return statearr_57316;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57312__$1,(3),onView,inst_57275);
} else
{if((state_val_57313 === (1)))
{var inst_57268 = cljs.core.async.timeout.call(null,(1000));var state_57312__$1 = state_57312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57312__$1,(2),inst_57268);
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
var state_machine__6188__auto____0 = (function (){var statearr_57320 = [null,null,null,null,null,null,null,null,null,null];(statearr_57320[(0)] = state_machine__6188__auto__);
(statearr_57320[(1)] = (1));
return statearr_57320;
});
var state_machine__6188__auto____1 = (function (state_57312){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57321){if((e57321 instanceof Object))
{var ex__6191__auto__ = e57321;var statearr_57322_57324 = state_57312;(statearr_57322_57324[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57325 = state_57312;
state_57312 = G__57325;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57312){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57323 = f__6203__auto__.call(null);(statearr_57323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj57508 = {};return obj57508;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57512){var state_val_57513 = (state_57512[(1)]);if((state_val_57513 === (2)))
{var inst_57510 = (state_57512[(2)]);var state_57512__$1 = state_57512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57512__$1,inst_57510);
} else
{if((state_val_57513 === (1)))
{var state_57512__$1 = state_57512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57512__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57517 = [null,null,null,null,null,null,null];(statearr_57517[(0)] = state_machine__6188__auto__);
(statearr_57517[(1)] = (1));
return statearr_57517;
});
var state_machine__6188__auto____1 = (function (state_57512){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57512);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57518){if((e57518 instanceof Object))
{var ex__6191__auto__ = e57518;var statearr_57519_57688 = state_57512;(statearr_57519_57688[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57689 = state_57512;
state_57512 = G__57689;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57512){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57520 = f__6203__auto__.call(null);(statearr_57520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57690 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57690,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57690,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57534){var state_val_57535 = (state_57534[(1)]);if((state_val_57535 === (4)))
{var inst_57524 = (state_57534[(2)]);var inst_57525 = cljs.core.nth.call(null,inst_57524,(0),null);var inst_57526 = cljs.core.nth.call(null,inst_57524,(1),null);var inst_57527 = cljs.core.nth.call(null,inst_57524,(2),null);var inst_57528 = [inst_57525,inst_57526,inst_57527];var inst_57529 = common.onModel.onNext(inst_57528);var state_57534__$1 = (function (){var statearr_57536 = state_57534;(statearr_57536[(7)] = inst_57529);
return statearr_57536;
})();var statearr_57537_57691 = state_57534__$1;(statearr_57537_57691[(2)] = null);
(statearr_57537_57691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57535 === (3)))
{var inst_57532 = (state_57534[(2)]);var state_57534__$1 = state_57534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57534__$1,inst_57532);
} else
{if((state_val_57535 === (2)))
{var state_57534__$1 = state_57534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57534__$1,(4),onModel);
} else
{if((state_val_57535 === (1)))
{var state_57534__$1 = state_57534;var statearr_57538_57692 = state_57534__$1;(statearr_57538_57692[(2)] = null);
(statearr_57538_57692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___57690,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57690,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57542 = [null,null,null,null,null,null,null,null];(statearr_57542[(0)] = state_machine__6188__auto__);
(statearr_57542[(1)] = (1));
return statearr_57542;
});
var state_machine__6188__auto____1 = (function (state_57534){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57543){if((e57543 instanceof Object))
{var ex__6191__auto__ = e57543;var statearr_57544_57693 = state_57534;(statearr_57544_57693[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57694 = state_57534;
state_57534 = G__57694;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57534){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57690,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57545 = f__6203__auto__.call(null);(statearr_57545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57690);
return statearr_57545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57690,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57695,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57695,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57558){var state_val_57559 = (state_57558[(1)]);if((state_val_57559 === (4)))
{var inst_57549 = (state_57558[(2)]);var inst_57550 = cljs.core.nth.call(null,inst_57549,(0),null);var inst_57551 = cljs.core.nth.call(null,inst_57549,(1),null);var inst_57552 = [inst_57550,inst_57551];var inst_57553 = common.onModelEvent.onNext(inst_57552);var state_57558__$1 = (function (){var statearr_57560 = state_57558;(statearr_57560[(7)] = inst_57553);
return statearr_57560;
})();var statearr_57561_57696 = state_57558__$1;(statearr_57561_57696[(2)] = null);
(statearr_57561_57696[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57559 === (3)))
{var inst_57556 = (state_57558[(2)]);var state_57558__$1 = state_57558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57558__$1,inst_57556);
} else
{if((state_val_57559 === (2)))
{var state_57558__$1 = state_57558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57558__$1,(4),onModelEvent);
} else
{if((state_val_57559 === (1)))
{var state_57558__$1 = state_57558;var statearr_57562_57697 = state_57558__$1;(statearr_57562_57697[(2)] = null);
(statearr_57562_57697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___57695,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57695,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57566 = [null,null,null,null,null,null,null,null];(statearr_57566[(0)] = state_machine__6188__auto__);
(statearr_57566[(1)] = (1));
return statearr_57566;
});
var state_machine__6188__auto____1 = (function (state_57558){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57567){if((e57567 instanceof Object))
{var ex__6191__auto__ = e57567;var statearr_57568_57698 = state_57558;(statearr_57568_57698[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57699 = state_57558;
state_57558 = G__57699;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57558){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57695,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57569 = f__6203__auto__.call(null);(statearr_57569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57695);
return statearr_57569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57695,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57700,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57700,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57588){var state_val_57589 = (state_57588[(1)]);if((state_val_57589 === (5)))
{var inst_57572 = (state_57588[(7)]);var inst_57579 = (state_57588[(8)]);var inst_57583 = (state_57588[(2)]);var tmp57590 = inst_57572;var inst_57572__$1 = tmp57590;var inst_57573 = inst_57579;var state_57588__$1 = (function (){var statearr_57591 = state_57588;(statearr_57591[(7)] = inst_57572__$1);
(statearr_57591[(9)] = inst_57573);
(statearr_57591[(10)] = inst_57583);
return statearr_57591;
})();var statearr_57592_57701 = state_57588__$1;(statearr_57592_57701[(2)] = null);
(statearr_57592_57701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57589 === (4)))
{var inst_57573 = (state_57588[(9)]);var inst_57579 = (state_57588[(8)]);var inst_57577 = (state_57588[(2)]);var inst_57578 = (new Date());var inst_57579__$1 = inst_57578.getTime();var inst_57580 = (inst_57579__$1 - inst_57573);var inst_57581 = (inst_57580 / (1000));var state_57588__$1 = (function (){var statearr_57593 = state_57588;(statearr_57593[(11)] = inst_57577);
(statearr_57593[(8)] = inst_57579__$1);
return statearr_57593;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57588__$1,(5),onTick,inst_57581);
} else
{if((state_val_57589 === (3)))
{var inst_57586 = (state_57588[(2)]);var state_57588__$1 = state_57588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57588__$1,inst_57586);
} else
{if((state_val_57589 === (2)))
{var inst_57572 = (state_57588[(7)]);var inst_57575 = cljs.core.async.timeout.call(null,inst_57572);var state_57588__$1 = state_57588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57588__$1,(4),inst_57575);
} else
{if((state_val_57589 === (1)))
{var inst_57570 = (new Date());var inst_57571 = inst_57570.getTime();var inst_57572 = mspf;var inst_57573 = inst_57571;var state_57588__$1 = (function (){var statearr_57594 = state_57588;(statearr_57594[(7)] = inst_57572);
(statearr_57594[(9)] = inst_57573);
return statearr_57594;
})();var statearr_57595_57702 = state_57588__$1;(statearr_57595_57702[(2)] = null);
(statearr_57595_57702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___57700,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57700,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57599 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57599[(0)] = state_machine__6188__auto__);
(statearr_57599[(1)] = (1));
return statearr_57599;
});
var state_machine__6188__auto____1 = (function (state_57588){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57588);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57600){if((e57600 instanceof Object))
{var ex__6191__auto__ = e57600;var statearr_57601_57703 = state_57588;(statearr_57601_57703[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57588);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57704 = state_57588;
state_57588 = G__57704;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57588){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57700,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57602 = f__6203__auto__.call(null);(statearr_57602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57700);
return statearr_57602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57700,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57705 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57658){var state_val_57659 = (state_57658[(1)]);if((state_val_57659 === (7)))
{var inst_57653 = (state_57658[(2)]);var inst_57614 = inst_57653;var state_57658__$1 = (function (){var statearr_57660 = state_57658;(statearr_57660[(7)] = inst_57614);
return statearr_57660;
})();var statearr_57661_57706 = state_57658__$1;(statearr_57661_57706[(2)] = null);
(statearr_57661_57706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (1)))
{var inst_57603 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_57604 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_57605 = cljs.core.List.EMPTY;var inst_57606 = [inst_57605,(200)];var inst_57607 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_57604,inst_57606);var inst_57608 = [0.0,0.5,0.35];var inst_57609 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57608,null));var inst_57610 = [(0),(0)];var inst_57611 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57610,null));var inst_57612 = [inst_57607,inst_57609,inst_57611,onModel,gl__$1];var inst_57613 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_57603,inst_57612);var inst_57614 = inst_57613;var state_57658__$1 = (function (){var statearr_57662 = state_57658;(statearr_57662[(7)] = inst_57614);
return statearr_57662;
})();var statearr_57663_57707 = state_57658__$1;(statearr_57663_57707[(2)] = null);
(statearr_57663_57707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (4)))
{var inst_57622 = (state_57658[(8)]);var inst_57620 = (state_57658[(9)]);var inst_57620__$1 = (state_57658[(2)]);var inst_57621 = cljs.core.nth.call(null,inst_57620__$1,(0),null);var inst_57622__$1 = cljs.core.nth.call(null,inst_57620__$1,(1),null);var inst_57626 = cljs.core._EQ_.call(null,onTick,inst_57622__$1);var state_57658__$1 = (function (){var statearr_57664 = state_57658;(statearr_57664[(10)] = inst_57621);
(statearr_57664[(8)] = inst_57622__$1);
(statearr_57664[(9)] = inst_57620__$1);
return statearr_57664;
})();if(inst_57626)
{var statearr_57665_57708 = state_57658__$1;(statearr_57665_57708[(1)] = (5));
} else
{var statearr_57666_57709 = state_57658__$1;(statearr_57666_57709[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (6)))
{var inst_57622 = (state_57658[(8)]);var inst_57644 = cljs.core._EQ_.call(null,onView,inst_57622);var state_57658__$1 = state_57658;if(inst_57644)
{var statearr_57667_57710 = state_57658__$1;(statearr_57667_57710[(1)] = (8));
} else
{var statearr_57668_57711 = state_57658__$1;(statearr_57668_57711[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (3)))
{var inst_57656 = (state_57658[(2)]);var state_57658__$1 = state_57658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57658__$1,inst_57656);
} else
{if((state_val_57659 === (2)))
{var inst_57617 = [onView,onTick];var inst_57618 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57617,null));var state_57658__$1 = state_57658;return cljs.core.async.ioc_alts_BANG_.call(null,state_57658__$1,(4),inst_57618);
} else
{if((state_val_57659 === (9)))
{var inst_57614 = (state_57658[(7)]);var state_57658__$1 = state_57658;var statearr_57669_57712 = state_57658__$1;(statearr_57669_57712[(2)] = inst_57614);
(statearr_57669_57712[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (5)))
{var inst_57614 = (state_57658[(7)]);var inst_57621 = (state_57658[(10)]);var inst_57622 = (state_57658[(8)]);var inst_57620 = (state_57658[(9)]);var inst_57635 = cljs.core.async.chan.call(null,(1));var inst_57636 = (function (){var c__6202__auto____$1 = inst_57635;var expr__57624 = inst_57622;var pred__57623 = cljs.core._EQ_;var ch = inst_57622;var v = inst_57621;var vec__57616 = inst_57620;var ctx = inst_57614;return ((function (c__6202__auto____$1,expr__57624,pred__57623,ch,v,vec__57616,ctx,inst_57614,inst_57621,inst_57622,inst_57620,inst_57635,state_val_57659,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__57624,pred__57623,ch,v,vec__57616,ctx,inst_57614,inst_57621,inst_57622,inst_57620,inst_57635,state_val_57659,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57633){var state_val_57634 = (state_57633[(1)]);if((state_val_57634 === (2)))
{var inst_57631 = (state_57633[(2)]);var state_57633__$1 = state_57633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57633__$1,inst_57631);
} else
{if((state_val_57634 === (1)))
{var inst_57628 = ["tick",v];var inst_57629 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57628,null));var state_57633__$1 = state_57633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57633__$1,(2),onModelEvent,inst_57629);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__57624,pred__57623,ch,v,vec__57616,ctx,inst_57614,inst_57621,inst_57622,inst_57620,inst_57635,state_val_57659,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__57624,pred__57623,ch,v,vec__57616,ctx,inst_57614,inst_57621,inst_57622,inst_57620,inst_57635,state_val_57659,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57673 = [null,null,null,null,null,null,null];(statearr_57673[(0)] = state_machine__6188__auto__);
(statearr_57673[(1)] = (1));
return statearr_57673;
});
var state_machine__6188__auto____1 = (function (state_57633){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57674){if((e57674 instanceof Object))
{var ex__6191__auto__ = e57674;var statearr_57675_57713 = state_57633;(statearr_57675_57713[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57714 = state_57633;
state_57633 = G__57714;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57633){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__57624,pred__57623,ch,v,vec__57616,ctx,inst_57614,inst_57621,inst_57622,inst_57620,inst_57635,state_val_57659,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57676 = f__6203__auto__.call(null);(statearr_57676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_57676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__57624,pred__57623,ch,v,vec__57616,ctx,inst_57614,inst_57621,inst_57622,inst_57620,inst_57635,state_val_57659,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_57637 = cljs.core.async.impl.dispatch.run.call(null,inst_57636);var inst_57638 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_57639 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57638,null));var inst_57640 = cljs.core.partial.call(null,tool.particle.update,inst_57621);var inst_57641 = cljs.core.update_in.call(null,inst_57614,inst_57639,inst_57640);var inst_57642 = draw.call(null,inst_57641);var state_57658__$1 = (function (){var statearr_57677 = state_57658;(statearr_57677[(11)] = inst_57637);
return statearr_57677;
})();var statearr_57678_57715 = state_57658__$1;(statearr_57678_57715[(2)] = inst_57642);
(statearr_57678_57715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (10)))
{var inst_57651 = (state_57658[(2)]);var state_57658__$1 = state_57658;var statearr_57679_57716 = state_57658__$1;(statearr_57679_57716[(2)] = inst_57651);
(statearr_57679_57716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57659 === (8)))
{var inst_57614 = (state_57658[(7)]);var inst_57621 = (state_57658[(10)]);var inst_57646 = (inst_57621[(0)]);var inst_57647 = (inst_57621[(1)]);var inst_57648 = app.particle.abstract$.onViewCommand.call(null,inst_57646,inst_57647,inst_57614);var state_57658__$1 = state_57658;var statearr_57680_57717 = state_57658__$1;(statearr_57680_57717[(2)] = inst_57648);
(statearr_57680_57717[(1)] = (10));
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
});})(c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57684 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57684[(0)] = state_machine__6188__auto__);
(statearr_57684[(1)] = (1));
return statearr_57684;
});
var state_machine__6188__auto____1 = (function (state_57658){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57658);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57685){if((e57685 instanceof Object))
{var ex__6191__auto__ = e57685;var statearr_57686_57718 = state_57658;(statearr_57686_57718[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57719 = state_57658;
state_57658 = G__57719;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57658){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57687 = f__6203__auto__.call(null);(statearr_57687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57705);
return statearr_57687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57705,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
