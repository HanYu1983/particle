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
return (function (state_58328){var state_val_58329 = (state_58328[(1)]);if((state_val_58329 === (5)))
{var inst_58326 = (state_58328[(2)]);var state_58328__$1 = state_58328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58328__$1,inst_58326);
} else
{if((state_val_58329 === (4)))
{var inst_58296 = (state_58328[(2)]);var inst_58303 = [(0),(0),(0)];var inst_58304 = [(1),(0),(1),(1)];var inst_58305 = [(10),(20)];var inst_58306 = [(0),(0),(0)];var inst_58307 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_58308 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_58309 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_58310 = [inst_58307,inst_58308,inst_58309];var inst_58311 = {"position":inst_58303,"color":inst_58304,"size":inst_58305,"vel":inst_58306,"tex":"img_map","formulaList":inst_58310};var inst_58312 = [inst_58311];var inst_58313 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_58312};var inst_58314 = [(0),(0),(1),(1)];var inst_58315 = [(30),(10)];var inst_58316 = [(10),(10),(0)];var inst_58317 = [(0),(0),(0)];var inst_58318 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_58319 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_58320 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_58321 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_58322 = [inst_58318,inst_58319,inst_58320,inst_58321];var inst_58323 = {"id":"x1","emit":inst_58313,"color":inst_58314,"size":inst_58315,"pos":inst_58316,"vel":inst_58317,"tex":"img_face","formulaList":inst_58322};var inst_58324 = ["edit-particle",inst_58323];var state_58328__$1 = (function (){var statearr_58330 = state_58328;(statearr_58330[(7)] = inst_58296);
return statearr_58330;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58328__$1,(5),onView,inst_58324);
} else
{if((state_val_58329 === (3)))
{var inst_58293 = (state_58328[(2)]);var inst_58294 = cljs.core.async.timeout.call(null,(1100));var state_58328__$1 = (function (){var statearr_58331 = state_58328;(statearr_58331[(8)] = inst_58293);
return statearr_58331;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58328__$1,(4),inst_58294);
} else
{if((state_val_58329 === (2)))
{var inst_58286 = (state_58328[(2)]);var inst_58289 = [(10),(10),(0)];var inst_58290 = {"id":"x1","pos":inst_58289};var inst_58291 = ["edit-particle",inst_58290];var state_58328__$1 = (function (){var statearr_58332 = state_58328;(statearr_58332[(9)] = inst_58286);
return statearr_58332;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58328__$1,(3),onView,inst_58291);
} else
{if((state_val_58329 === (1)))
{var inst_58284 = cljs.core.async.timeout.call(null,(1000));var state_58328__$1 = state_58328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58328__$1,(2),inst_58284);
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
var state_machine__6188__auto____0 = (function (){var statearr_58336 = [null,null,null,null,null,null,null,null,null,null];(statearr_58336[(0)] = state_machine__6188__auto__);
(statearr_58336[(1)] = (1));
return statearr_58336;
});
var state_machine__6188__auto____1 = (function (state_58328){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58337){if((e58337 instanceof Object))
{var ex__6191__auto__ = e58337;var statearr_58338_58340 = state_58328;(statearr_58338_58340[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58341 = state_58328;
state_58328 = G__58341;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58328){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_58339 = f__6203__auto__.call(null);(statearr_58339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_58339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (30)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj58524 = {};return obj58524;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58528){var state_val_58529 = (state_58528[(1)]);if((state_val_58529 === (2)))
{var inst_58526 = (state_58528[(2)]);var state_58528__$1 = state_58528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58528__$1,inst_58526);
} else
{if((state_val_58529 === (1)))
{var state_58528__$1 = state_58528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58528__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58533 = [null,null,null,null,null,null,null];(statearr_58533[(0)] = state_machine__6188__auto__);
(statearr_58533[(1)] = (1));
return statearr_58533;
});
var state_machine__6188__auto____1 = (function (state_58528){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58534){if((e58534 instanceof Object))
{var ex__6191__auto__ = e58534;var statearr_58535_58704 = state_58528;(statearr_58535_58704[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58705 = state_58528;
state_58528 = G__58705;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58528){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58536 = f__6203__auto__.call(null);(statearr_58536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_58536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58706 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58706,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58706,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58550){var state_val_58551 = (state_58550[(1)]);if((state_val_58551 === (4)))
{var inst_58540 = (state_58550[(2)]);var inst_58541 = cljs.core.nth.call(null,inst_58540,(0),null);var inst_58542 = cljs.core.nth.call(null,inst_58540,(1),null);var inst_58543 = cljs.core.nth.call(null,inst_58540,(2),null);var inst_58544 = [inst_58541,inst_58542,inst_58543];var inst_58545 = common.onModel.onNext(inst_58544);var state_58550__$1 = (function (){var statearr_58552 = state_58550;(statearr_58552[(7)] = inst_58545);
return statearr_58552;
})();var statearr_58553_58707 = state_58550__$1;(statearr_58553_58707[(2)] = null);
(statearr_58553_58707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58551 === (3)))
{var inst_58548 = (state_58550[(2)]);var state_58550__$1 = state_58550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58550__$1,inst_58548);
} else
{if((state_val_58551 === (2)))
{var state_58550__$1 = state_58550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58550__$1,(4),onModel);
} else
{if((state_val_58551 === (1)))
{var state_58550__$1 = state_58550;var statearr_58554_58708 = state_58550__$1;(statearr_58554_58708[(2)] = null);
(statearr_58554_58708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___58706,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58706,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58558 = [null,null,null,null,null,null,null,null];(statearr_58558[(0)] = state_machine__6188__auto__);
(statearr_58558[(1)] = (1));
return statearr_58558;
});
var state_machine__6188__auto____1 = (function (state_58550){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58550);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58559){if((e58559 instanceof Object))
{var ex__6191__auto__ = e58559;var statearr_58560_58709 = state_58550;(statearr_58560_58709[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58710 = state_58550;
state_58550 = G__58710;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58550){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58706,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58561 = f__6203__auto__.call(null);(statearr_58561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58706);
return statearr_58561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58706,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58711,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58711,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58574){var state_val_58575 = (state_58574[(1)]);if((state_val_58575 === (4)))
{var inst_58565 = (state_58574[(2)]);var inst_58566 = cljs.core.nth.call(null,inst_58565,(0),null);var inst_58567 = cljs.core.nth.call(null,inst_58565,(1),null);var inst_58568 = [inst_58566,inst_58567];var inst_58569 = common.onModelEvent.onNext(inst_58568);var state_58574__$1 = (function (){var statearr_58576 = state_58574;(statearr_58576[(7)] = inst_58569);
return statearr_58576;
})();var statearr_58577_58712 = state_58574__$1;(statearr_58577_58712[(2)] = null);
(statearr_58577_58712[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58575 === (3)))
{var inst_58572 = (state_58574[(2)]);var state_58574__$1 = state_58574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58574__$1,inst_58572);
} else
{if((state_val_58575 === (2)))
{var state_58574__$1 = state_58574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58574__$1,(4),onModelEvent);
} else
{if((state_val_58575 === (1)))
{var state_58574__$1 = state_58574;var statearr_58578_58713 = state_58574__$1;(statearr_58578_58713[(2)] = null);
(statearr_58578_58713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___58711,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58711,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58582 = [null,null,null,null,null,null,null,null];(statearr_58582[(0)] = state_machine__6188__auto__);
(statearr_58582[(1)] = (1));
return statearr_58582;
});
var state_machine__6188__auto____1 = (function (state_58574){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58583){if((e58583 instanceof Object))
{var ex__6191__auto__ = e58583;var statearr_58584_58714 = state_58574;(statearr_58584_58714[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58715 = state_58574;
state_58574 = G__58715;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58574){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58711,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58585 = f__6203__auto__.call(null);(statearr_58585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58711);
return statearr_58585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58711,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58716 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58716,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58716,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58604){var state_val_58605 = (state_58604[(1)]);if((state_val_58605 === (5)))
{var inst_58588 = (state_58604[(7)]);var inst_58595 = (state_58604[(8)]);var inst_58599 = (state_58604[(2)]);var tmp58606 = inst_58588;var inst_58588__$1 = tmp58606;var inst_58589 = inst_58595;var state_58604__$1 = (function (){var statearr_58607 = state_58604;(statearr_58607[(9)] = inst_58599);
(statearr_58607[(10)] = inst_58589);
(statearr_58607[(7)] = inst_58588__$1);
return statearr_58607;
})();var statearr_58608_58717 = state_58604__$1;(statearr_58608_58717[(2)] = null);
(statearr_58608_58717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58605 === (4)))
{var inst_58589 = (state_58604[(10)]);var inst_58595 = (state_58604[(8)]);var inst_58593 = (state_58604[(2)]);var inst_58594 = (new Date());var inst_58595__$1 = inst_58594.getTime();var inst_58596 = (inst_58595__$1 - inst_58589);var inst_58597 = (inst_58596 / (1000));var state_58604__$1 = (function (){var statearr_58609 = state_58604;(statearr_58609[(11)] = inst_58593);
(statearr_58609[(8)] = inst_58595__$1);
return statearr_58609;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58604__$1,(5),onTick,inst_58597);
} else
{if((state_val_58605 === (3)))
{var inst_58602 = (state_58604[(2)]);var state_58604__$1 = state_58604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58604__$1,inst_58602);
} else
{if((state_val_58605 === (2)))
{var inst_58588 = (state_58604[(7)]);var inst_58591 = cljs.core.async.timeout.call(null,inst_58588);var state_58604__$1 = state_58604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58604__$1,(4),inst_58591);
} else
{if((state_val_58605 === (1)))
{var inst_58586 = (new Date());var inst_58587 = inst_58586.getTime();var inst_58588 = mspf;var inst_58589 = inst_58587;var state_58604__$1 = (function (){var statearr_58610 = state_58604;(statearr_58610[(10)] = inst_58589);
(statearr_58610[(7)] = inst_58588);
return statearr_58610;
})();var statearr_58611_58718 = state_58604__$1;(statearr_58611_58718[(2)] = null);
(statearr_58611_58718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___58716,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58716,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58615 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58615[(0)] = state_machine__6188__auto__);
(statearr_58615[(1)] = (1));
return statearr_58615;
});
var state_machine__6188__auto____1 = (function (state_58604){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58616){if((e58616 instanceof Object))
{var ex__6191__auto__ = e58616;var statearr_58617_58719 = state_58604;(statearr_58617_58719[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58720 = state_58604;
state_58604 = G__58720;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58604){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58716,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58618 = f__6203__auto__.call(null);(statearr_58618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58716);
return statearr_58618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58716,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58721 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58674){var state_val_58675 = (state_58674[(1)]);if((state_val_58675 === (7)))
{var inst_58669 = (state_58674[(2)]);var inst_58630 = inst_58669;var state_58674__$1 = (function (){var statearr_58676 = state_58674;(statearr_58676[(7)] = inst_58630);
return statearr_58676;
})();var statearr_58677_58722 = state_58674__$1;(statearr_58677_58722[(2)] = null);
(statearr_58677_58722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (1)))
{var inst_58619 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_58620 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_58621 = cljs.core.List.EMPTY;var inst_58622 = [inst_58621,(200)];var inst_58623 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_58620,inst_58622);var inst_58624 = [0.0,0.5,0.35];var inst_58625 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58624,null));var inst_58626 = [(0),(0)];var inst_58627 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58626,null));var inst_58628 = [inst_58623,inst_58625,inst_58627,onModel,gl__$1];var inst_58629 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_58619,inst_58628);var inst_58630 = inst_58629;var state_58674__$1 = (function (){var statearr_58678 = state_58674;(statearr_58678[(7)] = inst_58630);
return statearr_58678;
})();var statearr_58679_58723 = state_58674__$1;(statearr_58679_58723[(2)] = null);
(statearr_58679_58723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (4)))
{var inst_58636 = (state_58674[(8)]);var inst_58638 = (state_58674[(9)]);var inst_58636__$1 = (state_58674[(2)]);var inst_58637 = cljs.core.nth.call(null,inst_58636__$1,(0),null);var inst_58638__$1 = cljs.core.nth.call(null,inst_58636__$1,(1),null);var inst_58642 = cljs.core._EQ_.call(null,onTick,inst_58638__$1);var state_58674__$1 = (function (){var statearr_58680 = state_58674;(statearr_58680[(10)] = inst_58637);
(statearr_58680[(8)] = inst_58636__$1);
(statearr_58680[(9)] = inst_58638__$1);
return statearr_58680;
})();if(inst_58642)
{var statearr_58681_58724 = state_58674__$1;(statearr_58681_58724[(1)] = (5));
} else
{var statearr_58682_58725 = state_58674__$1;(statearr_58682_58725[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (6)))
{var inst_58638 = (state_58674[(9)]);var inst_58660 = cljs.core._EQ_.call(null,onView,inst_58638);var state_58674__$1 = state_58674;if(inst_58660)
{var statearr_58683_58726 = state_58674__$1;(statearr_58683_58726[(1)] = (8));
} else
{var statearr_58684_58727 = state_58674__$1;(statearr_58684_58727[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (3)))
{var inst_58672 = (state_58674[(2)]);var state_58674__$1 = state_58674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58674__$1,inst_58672);
} else
{if((state_val_58675 === (2)))
{var inst_58633 = [onView,onTick];var inst_58634 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58633,null));var state_58674__$1 = state_58674;return cljs.core.async.ioc_alts_BANG_.call(null,state_58674__$1,(4),inst_58634);
} else
{if((state_val_58675 === (9)))
{var inst_58630 = (state_58674[(7)]);var state_58674__$1 = state_58674;var statearr_58685_58728 = state_58674__$1;(statearr_58685_58728[(2)] = inst_58630);
(statearr_58685_58728[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (5)))
{var inst_58637 = (state_58674[(10)]);var inst_58636 = (state_58674[(8)]);var inst_58630 = (state_58674[(7)]);var inst_58638 = (state_58674[(9)]);var inst_58651 = cljs.core.async.chan.call(null,(1));var inst_58652 = (function (){var c__6202__auto____$1 = inst_58651;var expr__58640 = inst_58638;var pred__58639 = cljs.core._EQ_;var ch = inst_58638;var v = inst_58637;var vec__58632 = inst_58636;var ctx = inst_58630;return ((function (c__6202__auto____$1,expr__58640,pred__58639,ch,v,vec__58632,ctx,inst_58637,inst_58636,inst_58630,inst_58638,inst_58651,state_val_58675,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__58640,pred__58639,ch,v,vec__58632,ctx,inst_58637,inst_58636,inst_58630,inst_58638,inst_58651,state_val_58675,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58649){var state_val_58650 = (state_58649[(1)]);if((state_val_58650 === (2)))
{var inst_58647 = (state_58649[(2)]);var state_58649__$1 = state_58649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58649__$1,inst_58647);
} else
{if((state_val_58650 === (1)))
{var inst_58644 = ["tick",v];var inst_58645 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58644,null));var state_58649__$1 = state_58649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58649__$1,(2),onModelEvent,inst_58645);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__58640,pred__58639,ch,v,vec__58632,ctx,inst_58637,inst_58636,inst_58630,inst_58638,inst_58651,state_val_58675,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__58640,pred__58639,ch,v,vec__58632,ctx,inst_58637,inst_58636,inst_58630,inst_58638,inst_58651,state_val_58675,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58689 = [null,null,null,null,null,null,null];(statearr_58689[(0)] = state_machine__6188__auto__);
(statearr_58689[(1)] = (1));
return statearr_58689;
});
var state_machine__6188__auto____1 = (function (state_58649){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58649);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58690){if((e58690 instanceof Object))
{var ex__6191__auto__ = e58690;var statearr_58691_58729 = state_58649;(statearr_58691_58729[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58730 = state_58649;
state_58649 = G__58730;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58649){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__58640,pred__58639,ch,v,vec__58632,ctx,inst_58637,inst_58636,inst_58630,inst_58638,inst_58651,state_val_58675,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58692 = f__6203__auto__.call(null);(statearr_58692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_58692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__58640,pred__58639,ch,v,vec__58632,ctx,inst_58637,inst_58636,inst_58630,inst_58638,inst_58651,state_val_58675,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_58653 = cljs.core.async.impl.dispatch.run.call(null,inst_58652);var inst_58654 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_58655 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58654,null));var inst_58656 = cljs.core.partial.call(null,tool.particle.update,inst_58637);var inst_58657 = cljs.core.update_in.call(null,inst_58630,inst_58655,inst_58656);var inst_58658 = draw.call(null,inst_58657);var state_58674__$1 = (function (){var statearr_58693 = state_58674;(statearr_58693[(11)] = inst_58653);
return statearr_58693;
})();var statearr_58694_58731 = state_58674__$1;(statearr_58694_58731[(2)] = inst_58658);
(statearr_58694_58731[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (10)))
{var inst_58667 = (state_58674[(2)]);var state_58674__$1 = state_58674;var statearr_58695_58732 = state_58674__$1;(statearr_58695_58732[(2)] = inst_58667);
(statearr_58695_58732[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58675 === (8)))
{var inst_58637 = (state_58674[(10)]);var inst_58630 = (state_58674[(7)]);var inst_58662 = (inst_58637[(0)]);var inst_58663 = (inst_58637[(1)]);var inst_58664 = app.particle.abstract$.onViewCommand.call(null,inst_58662,inst_58663,inst_58630);var state_58674__$1 = state_58674;var statearr_58696_58733 = state_58674__$1;(statearr_58696_58733[(2)] = inst_58664);
(statearr_58696_58733[(1)] = (10));
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
});})(c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58700 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58700[(0)] = state_machine__6188__auto__);
(statearr_58700[(1)] = (1));
return statearr_58700;
});
var state_machine__6188__auto____1 = (function (state_58674){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58674);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58701){if((e58701 instanceof Object))
{var ex__6191__auto__ = e58701;var statearr_58702_58734 = state_58674;(statearr_58702_58734[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58735 = state_58674;
state_58674 = G__58735;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58674){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58703 = f__6203__auto__.call(null);(statearr_58703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58721);
return statearr_58703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58721,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
