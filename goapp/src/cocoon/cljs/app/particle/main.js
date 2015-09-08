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
return (function (state_59344){var state_val_59345 = (state_59344[(1)]);if((state_val_59345 === (5)))
{var inst_59342 = (state_59344[(2)]);var state_59344__$1 = state_59344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59344__$1,inst_59342);
} else
{if((state_val_59345 === (4)))
{var inst_59312 = (state_59344[(2)]);var inst_59319 = [(0),(0),(0)];var inst_59320 = [(1),(0),(1),(1)];var inst_59321 = [(10),(20)];var inst_59322 = [(0),(0),(0)];var inst_59323 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_59324 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_59325 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_59326 = [inst_59323,inst_59324,inst_59325];var inst_59327 = {"position":inst_59319,"color":inst_59320,"size":inst_59321,"vel":inst_59322,"tex":"img_map","formulaList":inst_59326};var inst_59328 = [inst_59327];var inst_59329 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_59328};var inst_59330 = [(0),(0),(1),(1)];var inst_59331 = [(30),(10)];var inst_59332 = [(10),(10),(0)];var inst_59333 = [(0),(0),(0)];var inst_59334 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_59335 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_59336 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_59337 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_59338 = [inst_59334,inst_59335,inst_59336,inst_59337];var inst_59339 = {"id":"x1","emit":inst_59329,"color":inst_59330,"size":inst_59331,"pos":inst_59332,"vel":inst_59333,"tex":"img_face","formulaList":inst_59338};var inst_59340 = ["edit-particle",inst_59339];var state_59344__$1 = (function (){var statearr_59346 = state_59344;(statearr_59346[(7)] = inst_59312);
return statearr_59346;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59344__$1,(5),onView,inst_59340);
} else
{if((state_val_59345 === (3)))
{var inst_59309 = (state_59344[(2)]);var inst_59310 = cljs.core.async.timeout.call(null,(1100));var state_59344__$1 = (function (){var statearr_59347 = state_59344;(statearr_59347[(8)] = inst_59309);
return statearr_59347;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59344__$1,(4),inst_59310);
} else
{if((state_val_59345 === (2)))
{var inst_59302 = (state_59344[(2)]);var inst_59305 = [(10),(10),(0)];var inst_59306 = {"id":"x1","pos":inst_59305};var inst_59307 = ["edit-particle",inst_59306];var state_59344__$1 = (function (){var statearr_59348 = state_59344;(statearr_59348[(9)] = inst_59302);
return statearr_59348;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59344__$1,(3),onView,inst_59307);
} else
{if((state_val_59345 === (1)))
{var inst_59300 = cljs.core.async.timeout.call(null,(1000));var state_59344__$1 = state_59344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59344__$1,(2),inst_59300);
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
var state_machine__6188__auto____0 = (function (){var statearr_59352 = [null,null,null,null,null,null,null,null,null,null];(statearr_59352[(0)] = state_machine__6188__auto__);
(statearr_59352[(1)] = (1));
return statearr_59352;
});
var state_machine__6188__auto____1 = (function (state_59344){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59344);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59353){if((e59353 instanceof Object))
{var ex__6191__auto__ = e59353;var statearr_59354_59356 = state_59344;(statearr_59354_59356[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59357 = state_59344;
state_59344 = G__59357;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59344){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_59355 = f__6203__auto__.call(null);(statearr_59355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_59355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (30)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj59540 = {};return obj59540;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59544){var state_val_59545 = (state_59544[(1)]);if((state_val_59545 === (2)))
{var inst_59542 = (state_59544[(2)]);var state_59544__$1 = state_59544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59544__$1,inst_59542);
} else
{if((state_val_59545 === (1)))
{var state_59544__$1 = state_59544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59544__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59549 = [null,null,null,null,null,null,null];(statearr_59549[(0)] = state_machine__6188__auto__);
(statearr_59549[(1)] = (1));
return statearr_59549;
});
var state_machine__6188__auto____1 = (function (state_59544){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59544);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59550){if((e59550 instanceof Object))
{var ex__6191__auto__ = e59550;var statearr_59551_59720 = state_59544;(statearr_59551_59720[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59721 = state_59544;
state_59544 = G__59721;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59544){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59552 = f__6203__auto__.call(null);(statearr_59552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_59552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59722,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59722,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59566){var state_val_59567 = (state_59566[(1)]);if((state_val_59567 === (4)))
{var inst_59556 = (state_59566[(2)]);var inst_59557 = cljs.core.nth.call(null,inst_59556,(0),null);var inst_59558 = cljs.core.nth.call(null,inst_59556,(1),null);var inst_59559 = cljs.core.nth.call(null,inst_59556,(2),null);var inst_59560 = [inst_59557,inst_59558,inst_59559];var inst_59561 = common.onModel.onNext(inst_59560);var state_59566__$1 = (function (){var statearr_59568 = state_59566;(statearr_59568[(7)] = inst_59561);
return statearr_59568;
})();var statearr_59569_59723 = state_59566__$1;(statearr_59569_59723[(2)] = null);
(statearr_59569_59723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59567 === (3)))
{var inst_59564 = (state_59566[(2)]);var state_59566__$1 = state_59566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59566__$1,inst_59564);
} else
{if((state_val_59567 === (2)))
{var state_59566__$1 = state_59566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59566__$1,(4),onModel);
} else
{if((state_val_59567 === (1)))
{var state_59566__$1 = state_59566;var statearr_59570_59724 = state_59566__$1;(statearr_59570_59724[(2)] = null);
(statearr_59570_59724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___59722,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59722,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59574 = [null,null,null,null,null,null,null,null];(statearr_59574[(0)] = state_machine__6188__auto__);
(statearr_59574[(1)] = (1));
return statearr_59574;
});
var state_machine__6188__auto____1 = (function (state_59566){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59566);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59575){if((e59575 instanceof Object))
{var ex__6191__auto__ = e59575;var statearr_59576_59725 = state_59566;(statearr_59576_59725[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59566);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59726 = state_59566;
state_59566 = G__59726;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59566){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59722,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59577 = f__6203__auto__.call(null);(statearr_59577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59722);
return statearr_59577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59722,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59727,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59727,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59590){var state_val_59591 = (state_59590[(1)]);if((state_val_59591 === (4)))
{var inst_59581 = (state_59590[(2)]);var inst_59582 = cljs.core.nth.call(null,inst_59581,(0),null);var inst_59583 = cljs.core.nth.call(null,inst_59581,(1),null);var inst_59584 = [inst_59582,inst_59583];var inst_59585 = common.onModelEvent.onNext(inst_59584);var state_59590__$1 = (function (){var statearr_59592 = state_59590;(statearr_59592[(7)] = inst_59585);
return statearr_59592;
})();var statearr_59593_59728 = state_59590__$1;(statearr_59593_59728[(2)] = null);
(statearr_59593_59728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59591 === (3)))
{var inst_59588 = (state_59590[(2)]);var state_59590__$1 = state_59590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59590__$1,inst_59588);
} else
{if((state_val_59591 === (2)))
{var state_59590__$1 = state_59590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59590__$1,(4),onModelEvent);
} else
{if((state_val_59591 === (1)))
{var state_59590__$1 = state_59590;var statearr_59594_59729 = state_59590__$1;(statearr_59594_59729[(2)] = null);
(statearr_59594_59729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___59727,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59727,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59598 = [null,null,null,null,null,null,null,null];(statearr_59598[(0)] = state_machine__6188__auto__);
(statearr_59598[(1)] = (1));
return statearr_59598;
});
var state_machine__6188__auto____1 = (function (state_59590){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59599){if((e59599 instanceof Object))
{var ex__6191__auto__ = e59599;var statearr_59600_59730 = state_59590;(statearr_59600_59730[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59731 = state_59590;
state_59590 = G__59731;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59590){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59727,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59601 = f__6203__auto__.call(null);(statearr_59601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59727);
return statearr_59601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59727,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59732,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59732,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59620){var state_val_59621 = (state_59620[(1)]);if((state_val_59621 === (5)))
{var inst_59604 = (state_59620[(7)]);var inst_59611 = (state_59620[(8)]);var inst_59615 = (state_59620[(2)]);var tmp59622 = inst_59604;var inst_59604__$1 = tmp59622;var inst_59605 = inst_59611;var state_59620__$1 = (function (){var statearr_59623 = state_59620;(statearr_59623[(9)] = inst_59615);
(statearr_59623[(10)] = inst_59605);
(statearr_59623[(7)] = inst_59604__$1);
return statearr_59623;
})();var statearr_59624_59733 = state_59620__$1;(statearr_59624_59733[(2)] = null);
(statearr_59624_59733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59621 === (4)))
{var inst_59605 = (state_59620[(10)]);var inst_59611 = (state_59620[(8)]);var inst_59609 = (state_59620[(2)]);var inst_59610 = (new Date());var inst_59611__$1 = inst_59610.getTime();var inst_59612 = (inst_59611__$1 - inst_59605);var inst_59613 = (inst_59612 / (1000));var state_59620__$1 = (function (){var statearr_59625 = state_59620;(statearr_59625[(11)] = inst_59609);
(statearr_59625[(8)] = inst_59611__$1);
return statearr_59625;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59620__$1,(5),onTick,inst_59613);
} else
{if((state_val_59621 === (3)))
{var inst_59618 = (state_59620[(2)]);var state_59620__$1 = state_59620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59620__$1,inst_59618);
} else
{if((state_val_59621 === (2)))
{var inst_59604 = (state_59620[(7)]);var inst_59607 = cljs.core.async.timeout.call(null,inst_59604);var state_59620__$1 = state_59620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59620__$1,(4),inst_59607);
} else
{if((state_val_59621 === (1)))
{var inst_59602 = (new Date());var inst_59603 = inst_59602.getTime();var inst_59604 = mspf;var inst_59605 = inst_59603;var state_59620__$1 = (function (){var statearr_59626 = state_59620;(statearr_59626[(10)] = inst_59605);
(statearr_59626[(7)] = inst_59604);
return statearr_59626;
})();var statearr_59627_59734 = state_59620__$1;(statearr_59627_59734[(2)] = null);
(statearr_59627_59734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___59732,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59732,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59631 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59631[(0)] = state_machine__6188__auto__);
(statearr_59631[(1)] = (1));
return statearr_59631;
});
var state_machine__6188__auto____1 = (function (state_59620){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59620);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59632){if((e59632 instanceof Object))
{var ex__6191__auto__ = e59632;var statearr_59633_59735 = state_59620;(statearr_59633_59735[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59736 = state_59620;
state_59620 = G__59736;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59620){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59732,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59634 = f__6203__auto__.call(null);(statearr_59634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59732);
return statearr_59634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59732,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59737 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59690){var state_val_59691 = (state_59690[(1)]);if((state_val_59691 === (7)))
{var inst_59685 = (state_59690[(2)]);var inst_59646 = inst_59685;var state_59690__$1 = (function (){var statearr_59692 = state_59690;(statearr_59692[(7)] = inst_59646);
return statearr_59692;
})();var statearr_59693_59738 = state_59690__$1;(statearr_59693_59738[(2)] = null);
(statearr_59693_59738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (1)))
{var inst_59635 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_59636 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_59637 = cljs.core.List.EMPTY;var inst_59638 = [inst_59637,(200)];var inst_59639 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59636,inst_59638);var inst_59640 = [0.0,0.5,0.35];var inst_59641 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59640,null));var inst_59642 = [(0),(0)];var inst_59643 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59642,null));var inst_59644 = [inst_59639,inst_59641,inst_59643,onModel,gl__$1];var inst_59645 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59635,inst_59644);var inst_59646 = inst_59645;var state_59690__$1 = (function (){var statearr_59694 = state_59690;(statearr_59694[(7)] = inst_59646);
return statearr_59694;
})();var statearr_59695_59739 = state_59690__$1;(statearr_59695_59739[(2)] = null);
(statearr_59695_59739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (4)))
{var inst_59654 = (state_59690[(8)]);var inst_59652 = (state_59690[(9)]);var inst_59652__$1 = (state_59690[(2)]);var inst_59653 = cljs.core.nth.call(null,inst_59652__$1,(0),null);var inst_59654__$1 = cljs.core.nth.call(null,inst_59652__$1,(1),null);var inst_59658 = cljs.core._EQ_.call(null,onTick,inst_59654__$1);var state_59690__$1 = (function (){var statearr_59696 = state_59690;(statearr_59696[(8)] = inst_59654__$1);
(statearr_59696[(10)] = inst_59653);
(statearr_59696[(9)] = inst_59652__$1);
return statearr_59696;
})();if(inst_59658)
{var statearr_59697_59740 = state_59690__$1;(statearr_59697_59740[(1)] = (5));
} else
{var statearr_59698_59741 = state_59690__$1;(statearr_59698_59741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (6)))
{var inst_59654 = (state_59690[(8)]);var inst_59676 = cljs.core._EQ_.call(null,onView,inst_59654);var state_59690__$1 = state_59690;if(inst_59676)
{var statearr_59699_59742 = state_59690__$1;(statearr_59699_59742[(1)] = (8));
} else
{var statearr_59700_59743 = state_59690__$1;(statearr_59700_59743[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (3)))
{var inst_59688 = (state_59690[(2)]);var state_59690__$1 = state_59690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59690__$1,inst_59688);
} else
{if((state_val_59691 === (2)))
{var inst_59649 = [onView,onTick];var inst_59650 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59649,null));var state_59690__$1 = state_59690;return cljs.core.async.ioc_alts_BANG_.call(null,state_59690__$1,(4),inst_59650);
} else
{if((state_val_59691 === (9)))
{var inst_59646 = (state_59690[(7)]);var state_59690__$1 = state_59690;var statearr_59701_59744 = state_59690__$1;(statearr_59701_59744[(2)] = inst_59646);
(statearr_59701_59744[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (5)))
{var inst_59654 = (state_59690[(8)]);var inst_59653 = (state_59690[(10)]);var inst_59652 = (state_59690[(9)]);var inst_59646 = (state_59690[(7)]);var inst_59667 = cljs.core.async.chan.call(null,(1));var inst_59668 = (function (){var c__6202__auto____$1 = inst_59667;var expr__59656 = inst_59654;var pred__59655 = cljs.core._EQ_;var ch = inst_59654;var v = inst_59653;var vec__59648 = inst_59652;var ctx = inst_59646;return ((function (c__6202__auto____$1,expr__59656,pred__59655,ch,v,vec__59648,ctx,inst_59654,inst_59653,inst_59652,inst_59646,inst_59667,state_val_59691,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__59656,pred__59655,ch,v,vec__59648,ctx,inst_59654,inst_59653,inst_59652,inst_59646,inst_59667,state_val_59691,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59665){var state_val_59666 = (state_59665[(1)]);if((state_val_59666 === (2)))
{var inst_59663 = (state_59665[(2)]);var state_59665__$1 = state_59665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59665__$1,inst_59663);
} else
{if((state_val_59666 === (1)))
{var inst_59660 = ["tick",v];var inst_59661 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59660,null));var state_59665__$1 = state_59665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59665__$1,(2),onModelEvent,inst_59661);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__59656,pred__59655,ch,v,vec__59648,ctx,inst_59654,inst_59653,inst_59652,inst_59646,inst_59667,state_val_59691,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__59656,pred__59655,ch,v,vec__59648,ctx,inst_59654,inst_59653,inst_59652,inst_59646,inst_59667,state_val_59691,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59705 = [null,null,null,null,null,null,null];(statearr_59705[(0)] = state_machine__6188__auto__);
(statearr_59705[(1)] = (1));
return statearr_59705;
});
var state_machine__6188__auto____1 = (function (state_59665){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59706){if((e59706 instanceof Object))
{var ex__6191__auto__ = e59706;var statearr_59707_59745 = state_59665;(statearr_59707_59745[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59746 = state_59665;
state_59665 = G__59746;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59665){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__59656,pred__59655,ch,v,vec__59648,ctx,inst_59654,inst_59653,inst_59652,inst_59646,inst_59667,state_val_59691,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59708 = f__6203__auto__.call(null);(statearr_59708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_59708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__59656,pred__59655,ch,v,vec__59648,ctx,inst_59654,inst_59653,inst_59652,inst_59646,inst_59667,state_val_59691,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_59669 = cljs.core.async.impl.dispatch.run.call(null,inst_59668);var inst_59670 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_59671 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59670,null));var inst_59672 = cljs.core.partial.call(null,tool.particle.update,inst_59653);var inst_59673 = cljs.core.update_in.call(null,inst_59646,inst_59671,inst_59672);var inst_59674 = draw.call(null,inst_59673);var state_59690__$1 = (function (){var statearr_59709 = state_59690;(statearr_59709[(11)] = inst_59669);
return statearr_59709;
})();var statearr_59710_59747 = state_59690__$1;(statearr_59710_59747[(2)] = inst_59674);
(statearr_59710_59747[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (10)))
{var inst_59683 = (state_59690[(2)]);var state_59690__$1 = state_59690;var statearr_59711_59748 = state_59690__$1;(statearr_59711_59748[(2)] = inst_59683);
(statearr_59711_59748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59691 === (8)))
{var inst_59653 = (state_59690[(10)]);var inst_59646 = (state_59690[(7)]);var inst_59678 = (inst_59653[(0)]);var inst_59679 = (inst_59653[(1)]);var inst_59680 = app.particle.abstract$.onViewCommand.call(null,inst_59678,inst_59679,inst_59646);var state_59690__$1 = state_59690;var statearr_59712_59749 = state_59690__$1;(statearr_59712_59749[(2)] = inst_59680);
(statearr_59712_59749[(1)] = (10));
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
});})(c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59716 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59716[(0)] = state_machine__6188__auto__);
(statearr_59716[(1)] = (1));
return statearr_59716;
});
var state_machine__6188__auto____1 = (function (state_59690){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59690);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59717){if((e59717 instanceof Object))
{var ex__6191__auto__ = e59717;var statearr_59718_59750 = state_59690;(statearr_59718_59750[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59690);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59751 = state_59690;
state_59690 = G__59751;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59690){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59719 = f__6203__auto__.call(null);(statearr_59719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59737);
return statearr_59719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
