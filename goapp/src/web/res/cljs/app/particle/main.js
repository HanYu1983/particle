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
return (function (state_51129){var state_val_51130 = (state_51129[(1)]);if((state_val_51130 === (5)))
{var inst_51127 = (state_51129[(2)]);var state_51129__$1 = state_51129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51129__$1,inst_51127);
} else
{if((state_val_51130 === (4)))
{var inst_51097 = (state_51129[(2)]);var inst_51104 = [(0),(0),(0)];var inst_51105 = [(1),(0),(1),(1)];var inst_51106 = [(10),(20)];var inst_51107 = [(0),(0),(0)];var inst_51108 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_51109 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_51110 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_51111 = [inst_51108,inst_51109,inst_51110];var inst_51112 = {"position":inst_51104,"color":inst_51105,"size":inst_51106,"vel":inst_51107,"tex":"img_map","formulaList":inst_51111};var inst_51113 = [inst_51112];var inst_51114 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_51113};var inst_51115 = [(0),(0),(1),(1)];var inst_51116 = [(30),(10)];var inst_51117 = [(10),(10),(0)];var inst_51118 = [(0),(0),(0)];var inst_51119 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_51120 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_51121 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_51122 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_51123 = [inst_51119,inst_51120,inst_51121,inst_51122];var inst_51124 = {"id":"x1","emit":inst_51114,"color":inst_51115,"size":inst_51116,"pos":inst_51117,"vel":inst_51118,"tex":"img_face","formulaList":inst_51123};var inst_51125 = ["edit-particle",inst_51124];var state_51129__$1 = (function (){var statearr_51131 = state_51129;(statearr_51131[(7)] = inst_51097);
return statearr_51131;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51129__$1,(5),onView,inst_51125);
} else
{if((state_val_51130 === (3)))
{var inst_51094 = (state_51129[(2)]);var inst_51095 = cljs.core.async.timeout.call(null,(1100));var state_51129__$1 = (function (){var statearr_51132 = state_51129;(statearr_51132[(8)] = inst_51094);
return statearr_51132;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51129__$1,(4),inst_51095);
} else
{if((state_val_51130 === (2)))
{var inst_51087 = (state_51129[(2)]);var inst_51090 = [(10),(10),(0)];var inst_51091 = {"id":"x1","pos":inst_51090};var inst_51092 = ["edit-particle",inst_51091];var state_51129__$1 = (function (){var statearr_51133 = state_51129;(statearr_51133[(9)] = inst_51087);
return statearr_51133;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51129__$1,(3),onView,inst_51092);
} else
{if((state_val_51130 === (1)))
{var inst_51085 = cljs.core.async.timeout.call(null,(1000));var state_51129__$1 = state_51129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51129__$1,(2),inst_51085);
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
var state_machine__6188__auto____0 = (function (){var statearr_51137 = [null,null,null,null,null,null,null,null,null,null];(statearr_51137[(0)] = state_machine__6188__auto__);
(statearr_51137[(1)] = (1));
return statearr_51137;
});
var state_machine__6188__auto____1 = (function (state_51129){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51138){if((e51138 instanceof Object))
{var ex__6191__auto__ = e51138;var statearr_51139_51141 = state_51129;(statearr_51139_51141[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51142 = state_51129;
state_51129 = G__51142;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51129){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51140 = f__6203__auto__.call(null);(statearr_51140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj51325 = {};return obj51325;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51329){var state_val_51330 = (state_51329[(1)]);if((state_val_51330 === (2)))
{var inst_51327 = (state_51329[(2)]);var state_51329__$1 = state_51329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51329__$1,inst_51327);
} else
{if((state_val_51330 === (1)))
{var state_51329__$1 = state_51329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51329__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51334 = [null,null,null,null,null,null,null];(statearr_51334[(0)] = state_machine__6188__auto__);
(statearr_51334[(1)] = (1));
return statearr_51334;
});
var state_machine__6188__auto____1 = (function (state_51329){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51329);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51335){if((e51335 instanceof Object))
{var ex__6191__auto__ = e51335;var statearr_51336_51505 = state_51329;(statearr_51336_51505[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51506 = state_51329;
state_51329 = G__51506;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51329){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51337 = f__6203__auto__.call(null);(statearr_51337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51507 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51507,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51507,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51351){var state_val_51352 = (state_51351[(1)]);if((state_val_51352 === (4)))
{var inst_51341 = (state_51351[(2)]);var inst_51342 = cljs.core.nth.call(null,inst_51341,(0),null);var inst_51343 = cljs.core.nth.call(null,inst_51341,(1),null);var inst_51344 = cljs.core.nth.call(null,inst_51341,(2),null);var inst_51345 = [inst_51342,inst_51343,inst_51344];var inst_51346 = common.onModel.onNext(inst_51345);var state_51351__$1 = (function (){var statearr_51353 = state_51351;(statearr_51353[(7)] = inst_51346);
return statearr_51353;
})();var statearr_51354_51508 = state_51351__$1;(statearr_51354_51508[(2)] = null);
(statearr_51354_51508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51352 === (3)))
{var inst_51349 = (state_51351[(2)]);var state_51351__$1 = state_51351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51351__$1,inst_51349);
} else
{if((state_val_51352 === (2)))
{var state_51351__$1 = state_51351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51351__$1,(4),onModel);
} else
{if((state_val_51352 === (1)))
{var state_51351__$1 = state_51351;var statearr_51355_51509 = state_51351__$1;(statearr_51355_51509[(2)] = null);
(statearr_51355_51509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___51507,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51507,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51359 = [null,null,null,null,null,null,null,null];(statearr_51359[(0)] = state_machine__6188__auto__);
(statearr_51359[(1)] = (1));
return statearr_51359;
});
var state_machine__6188__auto____1 = (function (state_51351){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51360){if((e51360 instanceof Object))
{var ex__6191__auto__ = e51360;var statearr_51361_51510 = state_51351;(statearr_51361_51510[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51511 = state_51351;
state_51351 = G__51511;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51351){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51507,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51362 = f__6203__auto__.call(null);(statearr_51362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51507);
return statearr_51362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51507,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51512 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51512,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51512,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51375){var state_val_51376 = (state_51375[(1)]);if((state_val_51376 === (4)))
{var inst_51366 = (state_51375[(2)]);var inst_51367 = cljs.core.nth.call(null,inst_51366,(0),null);var inst_51368 = cljs.core.nth.call(null,inst_51366,(1),null);var inst_51369 = [inst_51367,inst_51368];var inst_51370 = common.onModelEvent.onNext(inst_51369);var state_51375__$1 = (function (){var statearr_51377 = state_51375;(statearr_51377[(7)] = inst_51370);
return statearr_51377;
})();var statearr_51378_51513 = state_51375__$1;(statearr_51378_51513[(2)] = null);
(statearr_51378_51513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51376 === (3)))
{var inst_51373 = (state_51375[(2)]);var state_51375__$1 = state_51375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51375__$1,inst_51373);
} else
{if((state_val_51376 === (2)))
{var state_51375__$1 = state_51375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51375__$1,(4),onModelEvent);
} else
{if((state_val_51376 === (1)))
{var state_51375__$1 = state_51375;var statearr_51379_51514 = state_51375__$1;(statearr_51379_51514[(2)] = null);
(statearr_51379_51514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___51512,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51512,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51383 = [null,null,null,null,null,null,null,null];(statearr_51383[(0)] = state_machine__6188__auto__);
(statearr_51383[(1)] = (1));
return statearr_51383;
});
var state_machine__6188__auto____1 = (function (state_51375){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51375);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51384){if((e51384 instanceof Object))
{var ex__6191__auto__ = e51384;var statearr_51385_51515 = state_51375;(statearr_51385_51515[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51516 = state_51375;
state_51375 = G__51516;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51375){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51512,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51386 = f__6203__auto__.call(null);(statearr_51386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51512);
return statearr_51386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51512,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51517 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51517,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51517,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51405){var state_val_51406 = (state_51405[(1)]);if((state_val_51406 === (5)))
{var inst_51389 = (state_51405[(7)]);var inst_51396 = (state_51405[(8)]);var inst_51400 = (state_51405[(2)]);var tmp51407 = inst_51389;var inst_51389__$1 = tmp51407;var inst_51390 = inst_51396;var state_51405__$1 = (function (){var statearr_51408 = state_51405;(statearr_51408[(9)] = inst_51400);
(statearr_51408[(7)] = inst_51389__$1);
(statearr_51408[(10)] = inst_51390);
return statearr_51408;
})();var statearr_51409_51518 = state_51405__$1;(statearr_51409_51518[(2)] = null);
(statearr_51409_51518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51406 === (4)))
{var inst_51390 = (state_51405[(10)]);var inst_51396 = (state_51405[(8)]);var inst_51394 = (state_51405[(2)]);var inst_51395 = (new Date());var inst_51396__$1 = inst_51395.getTime();var inst_51397 = (inst_51396__$1 - inst_51390);var inst_51398 = (inst_51397 / (1000));var state_51405__$1 = (function (){var statearr_51410 = state_51405;(statearr_51410[(8)] = inst_51396__$1);
(statearr_51410[(11)] = inst_51394);
return statearr_51410;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51405__$1,(5),onTick,inst_51398);
} else
{if((state_val_51406 === (3)))
{var inst_51403 = (state_51405[(2)]);var state_51405__$1 = state_51405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51405__$1,inst_51403);
} else
{if((state_val_51406 === (2)))
{var inst_51389 = (state_51405[(7)]);var inst_51392 = cljs.core.async.timeout.call(null,inst_51389);var state_51405__$1 = state_51405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51405__$1,(4),inst_51392);
} else
{if((state_val_51406 === (1)))
{var inst_51387 = (new Date());var inst_51388 = inst_51387.getTime();var inst_51389 = mspf;var inst_51390 = inst_51388;var state_51405__$1 = (function (){var statearr_51411 = state_51405;(statearr_51411[(7)] = inst_51389);
(statearr_51411[(10)] = inst_51390);
return statearr_51411;
})();var statearr_51412_51519 = state_51405__$1;(statearr_51412_51519[(2)] = null);
(statearr_51412_51519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___51517,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51517,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51416 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51416[(0)] = state_machine__6188__auto__);
(statearr_51416[(1)] = (1));
return statearr_51416;
});
var state_machine__6188__auto____1 = (function (state_51405){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51405);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51417){if((e51417 instanceof Object))
{var ex__6191__auto__ = e51417;var statearr_51418_51520 = state_51405;(statearr_51418_51520[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51521 = state_51405;
state_51405 = G__51521;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51405){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51517,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51419 = f__6203__auto__.call(null);(statearr_51419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51517);
return statearr_51419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51517,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51522 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51475){var state_val_51476 = (state_51475[(1)]);if((state_val_51476 === (7)))
{var inst_51470 = (state_51475[(2)]);var inst_51431 = inst_51470;var state_51475__$1 = (function (){var statearr_51477 = state_51475;(statearr_51477[(7)] = inst_51431);
return statearr_51477;
})();var statearr_51478_51523 = state_51475__$1;(statearr_51478_51523[(2)] = null);
(statearr_51478_51523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (1)))
{var inst_51420 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_51421 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_51422 = cljs.core.List.EMPTY;var inst_51423 = [inst_51422,(200)];var inst_51424 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51421,inst_51423);var inst_51425 = [0.0,0.5,0.35];var inst_51426 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51425,null));var inst_51427 = [(0),(0)];var inst_51428 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51427,null));var inst_51429 = [inst_51424,inst_51426,inst_51428,onModel,gl__$1];var inst_51430 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51420,inst_51429);var inst_51431 = inst_51430;var state_51475__$1 = (function (){var statearr_51479 = state_51475;(statearr_51479[(7)] = inst_51431);
return statearr_51479;
})();var statearr_51480_51524 = state_51475__$1;(statearr_51480_51524[(2)] = null);
(statearr_51480_51524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (4)))
{var inst_51437 = (state_51475[(8)]);var inst_51439 = (state_51475[(9)]);var inst_51437__$1 = (state_51475[(2)]);var inst_51438 = cljs.core.nth.call(null,inst_51437__$1,(0),null);var inst_51439__$1 = cljs.core.nth.call(null,inst_51437__$1,(1),null);var inst_51443 = cljs.core._EQ_.call(null,onTick,inst_51439__$1);var state_51475__$1 = (function (){var statearr_51481 = state_51475;(statearr_51481[(10)] = inst_51438);
(statearr_51481[(8)] = inst_51437__$1);
(statearr_51481[(9)] = inst_51439__$1);
return statearr_51481;
})();if(inst_51443)
{var statearr_51482_51525 = state_51475__$1;(statearr_51482_51525[(1)] = (5));
} else
{var statearr_51483_51526 = state_51475__$1;(statearr_51483_51526[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (6)))
{var inst_51439 = (state_51475[(9)]);var inst_51461 = cljs.core._EQ_.call(null,onView,inst_51439);var state_51475__$1 = state_51475;if(inst_51461)
{var statearr_51484_51527 = state_51475__$1;(statearr_51484_51527[(1)] = (8));
} else
{var statearr_51485_51528 = state_51475__$1;(statearr_51485_51528[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (3)))
{var inst_51473 = (state_51475[(2)]);var state_51475__$1 = state_51475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51475__$1,inst_51473);
} else
{if((state_val_51476 === (2)))
{var inst_51434 = [onView,onTick];var inst_51435 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51434,null));var state_51475__$1 = state_51475;return cljs.core.async.ioc_alts_BANG_.call(null,state_51475__$1,(4),inst_51435);
} else
{if((state_val_51476 === (9)))
{var inst_51431 = (state_51475[(7)]);var state_51475__$1 = state_51475;var statearr_51486_51529 = state_51475__$1;(statearr_51486_51529[(2)] = inst_51431);
(statearr_51486_51529[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (5)))
{var inst_51431 = (state_51475[(7)]);var inst_51438 = (state_51475[(10)]);var inst_51437 = (state_51475[(8)]);var inst_51439 = (state_51475[(9)]);var inst_51452 = cljs.core.async.chan.call(null,(1));var inst_51453 = (function (){var c__6202__auto____$1 = inst_51452;var expr__51441 = inst_51439;var pred__51440 = cljs.core._EQ_;var ch = inst_51439;var v = inst_51438;var vec__51433 = inst_51437;var ctx = inst_51431;return ((function (c__6202__auto____$1,expr__51441,pred__51440,ch,v,vec__51433,ctx,inst_51431,inst_51438,inst_51437,inst_51439,inst_51452,state_val_51476,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__51441,pred__51440,ch,v,vec__51433,ctx,inst_51431,inst_51438,inst_51437,inst_51439,inst_51452,state_val_51476,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51450){var state_val_51451 = (state_51450[(1)]);if((state_val_51451 === (2)))
{var inst_51448 = (state_51450[(2)]);var state_51450__$1 = state_51450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51450__$1,inst_51448);
} else
{if((state_val_51451 === (1)))
{var inst_51445 = ["tick",v];var inst_51446 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51445,null));var state_51450__$1 = state_51450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51450__$1,(2),onModelEvent,inst_51446);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__51441,pred__51440,ch,v,vec__51433,ctx,inst_51431,inst_51438,inst_51437,inst_51439,inst_51452,state_val_51476,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__51441,pred__51440,ch,v,vec__51433,ctx,inst_51431,inst_51438,inst_51437,inst_51439,inst_51452,state_val_51476,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51490 = [null,null,null,null,null,null,null];(statearr_51490[(0)] = state_machine__6188__auto__);
(statearr_51490[(1)] = (1));
return statearr_51490;
});
var state_machine__6188__auto____1 = (function (state_51450){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51491){if((e51491 instanceof Object))
{var ex__6191__auto__ = e51491;var statearr_51492_51530 = state_51450;(statearr_51492_51530[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51531 = state_51450;
state_51450 = G__51531;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51450){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__51441,pred__51440,ch,v,vec__51433,ctx,inst_51431,inst_51438,inst_51437,inst_51439,inst_51452,state_val_51476,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51493 = f__6203__auto__.call(null);(statearr_51493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_51493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__51441,pred__51440,ch,v,vec__51433,ctx,inst_51431,inst_51438,inst_51437,inst_51439,inst_51452,state_val_51476,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_51454 = cljs.core.async.impl.dispatch.run.call(null,inst_51453);var inst_51455 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_51456 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51455,null));var inst_51457 = cljs.core.partial.call(null,tool.particle.update,inst_51438);var inst_51458 = cljs.core.update_in.call(null,inst_51431,inst_51456,inst_51457);var inst_51459 = draw.call(null,inst_51458);var state_51475__$1 = (function (){var statearr_51494 = state_51475;(statearr_51494[(11)] = inst_51454);
return statearr_51494;
})();var statearr_51495_51532 = state_51475__$1;(statearr_51495_51532[(2)] = inst_51459);
(statearr_51495_51532[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (10)))
{var inst_51468 = (state_51475[(2)]);var state_51475__$1 = state_51475;var statearr_51496_51533 = state_51475__$1;(statearr_51496_51533[(2)] = inst_51468);
(statearr_51496_51533[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51476 === (8)))
{var inst_51431 = (state_51475[(7)]);var inst_51438 = (state_51475[(10)]);var inst_51463 = (inst_51438[(0)]);var inst_51464 = (inst_51438[(1)]);var inst_51465 = app.particle.abstract$.onViewCommand.call(null,inst_51463,inst_51464,inst_51431);var state_51475__$1 = state_51475;var statearr_51497_51534 = state_51475__$1;(statearr_51497_51534[(2)] = inst_51465);
(statearr_51497_51534[(1)] = (10));
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
});})(c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51501 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51501[(0)] = state_machine__6188__auto__);
(statearr_51501[(1)] = (1));
return statearr_51501;
});
var state_machine__6188__auto____1 = (function (state_51475){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51502){if((e51502 instanceof Object))
{var ex__6191__auto__ = e51502;var statearr_51503_51535 = state_51475;(statearr_51503_51535[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51536 = state_51475;
state_51475 = G__51536;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51475){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51504 = f__6203__auto__.call(null);(statearr_51504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51522);
return statearr_51504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51522,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
