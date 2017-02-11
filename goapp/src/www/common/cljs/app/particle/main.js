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
return (function (state_20481){var state_val_20482 = (state_20481[(1)]);if((state_val_20482 === (5)))
{var inst_20479 = (state_20481[(2)]);var state_20481__$1 = state_20481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20481__$1,inst_20479);
} else
{if((state_val_20482 === (4)))
{var inst_20449 = (state_20481[(2)]);var inst_20456 = [(0),(0),(0)];var inst_20457 = [(1),(0),(1),(1)];var inst_20458 = [(10),(20)];var inst_20459 = [(0),(0),(0)];var inst_20460 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_20461 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_20462 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_20463 = [inst_20460,inst_20461,inst_20462];var inst_20464 = {"position":inst_20456,"color":inst_20457,"size":inst_20458,"vel":inst_20459,"tex":"img_face","formulaList":inst_20463};var inst_20465 = [inst_20464];var inst_20466 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_20465};var inst_20467 = [(0),(0),(1),(1)];var inst_20468 = [(100),(100)];var inst_20469 = [(10),(10),(0)];var inst_20470 = [(0),(0),(0)];var inst_20471 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_20472 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_20473 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_20474 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_20475 = [inst_20471,inst_20472,inst_20473,inst_20474];var inst_20476 = {"id":"x1","emit":inst_20466,"color":inst_20467,"size":inst_20468,"pos":inst_20469,"vel":inst_20470,"tex":"img_face","formulaList":inst_20475};var inst_20477 = ["edit-particle",inst_20476];var state_20481__$1 = (function (){var statearr_20483 = state_20481;(statearr_20483[(7)] = inst_20449);
return statearr_20483;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20481__$1,(5),onView,inst_20477);
} else
{if((state_val_20482 === (3)))
{var inst_20446 = (state_20481[(2)]);var inst_20447 = cljs.core.async.timeout.call(null,(1100));var state_20481__$1 = (function (){var statearr_20484 = state_20481;(statearr_20484[(8)] = inst_20446);
return statearr_20484;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20481__$1,(4),inst_20447);
} else
{if((state_val_20482 === (2)))
{var inst_20439 = (state_20481[(2)]);var inst_20442 = [(10),(10),(0)];var inst_20443 = {"id":"x1","pos":inst_20442};var inst_20444 = ["edit-particle",inst_20443];var state_20481__$1 = (function (){var statearr_20485 = state_20481;(statearr_20485[(9)] = inst_20439);
return statearr_20485;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20481__$1,(3),onView,inst_20444);
} else
{if((state_val_20482 === (1)))
{var inst_20437 = cljs.core.async.timeout.call(null,(1000));var state_20481__$1 = state_20481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20481__$1,(2),inst_20437);
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
var state_machine__6188__auto____0 = (function (){var statearr_20489 = [null,null,null,null,null,null,null,null,null,null];(statearr_20489[(0)] = state_machine__6188__auto__);
(statearr_20489[(1)] = (1));
return statearr_20489;
});
var state_machine__6188__auto____1 = (function (state_20481){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20481);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20490){if((e20490 instanceof Object))
{var ex__6191__auto__ = e20490;var statearr_20491_20493 = state_20481;(statearr_20491_20493[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20494 = state_20481;
state_20481 = G__20494;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20481){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20492 = f__6203__auto__.call(null);(statearr_20492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var fps = (30);var mspf = (((1000) / fps) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_20687){var state_val_20688 = (state_20687[(1)]);if((state_val_20688 === (2)))
{var inst_20685 = (state_20687[(2)]);var state_20687__$1 = state_20687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20687__$1,inst_20685);
} else
{if((state_val_20688 === (1)))
{var state_20687__$1 = state_20687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20687__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20692 = [null,null,null,null,null,null,null];(statearr_20692[(0)] = state_machine__6188__auto__);
(statearr_20692[(1)] = (1));
return statearr_20692;
});
var state_machine__6188__auto____1 = (function (state_20687){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20693){if((e20693 instanceof Object))
{var ex__6191__auto__ = e20693;var statearr_20694_20873 = state_20687;(statearr_20694_20873[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20874 = state_20687;
state_20687 = G__20874;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20687){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_20695 = f__6203__auto__.call(null);(statearr_20695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___20875 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20875,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20875,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_20709){var state_val_20710 = (state_20709[(1)]);if((state_val_20710 === (4)))
{var inst_20699 = (state_20709[(2)]);var inst_20700 = cljs.core.nth.call(null,inst_20699,(0),null);var inst_20701 = cljs.core.nth.call(null,inst_20699,(1),null);var inst_20702 = cljs.core.nth.call(null,inst_20699,(2),null);var inst_20703 = [inst_20700,inst_20701,inst_20702];var inst_20704 = common.onModel.onNext(inst_20703);var state_20709__$1 = (function (){var statearr_20711 = state_20709;(statearr_20711[(7)] = inst_20704);
return statearr_20711;
})();var statearr_20712_20876 = state_20709__$1;(statearr_20712_20876[(2)] = null);
(statearr_20712_20876[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20710 === (3)))
{var inst_20707 = (state_20709[(2)]);var state_20709__$1 = state_20709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20709__$1,inst_20707);
} else
{if((state_val_20710 === (2)))
{var state_20709__$1 = state_20709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20709__$1,(4),onModel);
} else
{if((state_val_20710 === (1)))
{var state_20709__$1 = state_20709;var statearr_20713_20877 = state_20709__$1;(statearr_20713_20877[(2)] = null);
(statearr_20713_20877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___20875,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20875,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20717 = [null,null,null,null,null,null,null,null];(statearr_20717[(0)] = state_machine__6188__auto__);
(statearr_20717[(1)] = (1));
return statearr_20717;
});
var state_machine__6188__auto____1 = (function (state_20709){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20709);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20718){if((e20718 instanceof Object))
{var ex__6191__auto__ = e20718;var statearr_20719_20878 = state_20709;(statearr_20719_20878[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20709);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20879 = state_20709;
state_20709 = G__20879;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20709){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20875,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_20720 = f__6203__auto__.call(null);(statearr_20720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20875);
return statearr_20720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20875,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___20880 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20880,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20880,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_20733){var state_val_20734 = (state_20733[(1)]);if((state_val_20734 === (4)))
{var inst_20724 = (state_20733[(2)]);var inst_20725 = cljs.core.nth.call(null,inst_20724,(0),null);var inst_20726 = cljs.core.nth.call(null,inst_20724,(1),null);var inst_20727 = [inst_20725,inst_20726];var inst_20728 = common.onModelEvent.onNext(inst_20727);var state_20733__$1 = (function (){var statearr_20735 = state_20733;(statearr_20735[(7)] = inst_20728);
return statearr_20735;
})();var statearr_20736_20881 = state_20733__$1;(statearr_20736_20881[(2)] = null);
(statearr_20736_20881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20734 === (3)))
{var inst_20731 = (state_20733[(2)]);var state_20733__$1 = state_20733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20733__$1,inst_20731);
} else
{if((state_val_20734 === (2)))
{var state_20733__$1 = state_20733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20733__$1,(4),onModelEvent);
} else
{if((state_val_20734 === (1)))
{var state_20733__$1 = state_20733;var statearr_20737_20882 = state_20733__$1;(statearr_20737_20882[(2)] = null);
(statearr_20737_20882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___20880,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20880,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20741 = [null,null,null,null,null,null,null,null];(statearr_20741[(0)] = state_machine__6188__auto__);
(statearr_20741[(1)] = (1));
return statearr_20741;
});
var state_machine__6188__auto____1 = (function (state_20733){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20733);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20742){if((e20742 instanceof Object))
{var ex__6191__auto__ = e20742;var statearr_20743_20883 = state_20733;(statearr_20743_20883[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20884 = state_20733;
state_20733 = G__20884;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20733){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20880,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_20744 = f__6203__auto__.call(null);(statearr_20744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20880);
return statearr_20744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20880,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___20885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20885,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20885,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_20763){var state_val_20764 = (state_20763[(1)]);if((state_val_20764 === (5)))
{var inst_20747 = (state_20763[(7)]);var inst_20754 = (state_20763[(8)]);var inst_20758 = (state_20763[(2)]);var tmp20765 = inst_20747;var inst_20747__$1 = tmp20765;var inst_20748 = inst_20754;var state_20763__$1 = (function (){var statearr_20766 = state_20763;(statearr_20766[(7)] = inst_20747__$1);
(statearr_20766[(9)] = inst_20748);
(statearr_20766[(10)] = inst_20758);
return statearr_20766;
})();var statearr_20767_20886 = state_20763__$1;(statearr_20767_20886[(2)] = null);
(statearr_20767_20886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20764 === (4)))
{var inst_20748 = (state_20763[(9)]);var inst_20754 = (state_20763[(8)]);var inst_20752 = (state_20763[(2)]);var inst_20753 = (new Date());var inst_20754__$1 = inst_20753.getTime();var inst_20755 = (inst_20754__$1 - inst_20748);var inst_20756 = (inst_20755 / (1000));var state_20763__$1 = (function (){var statearr_20768 = state_20763;(statearr_20768[(8)] = inst_20754__$1);
(statearr_20768[(11)] = inst_20752);
return statearr_20768;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20763__$1,(5),onTick,inst_20756);
} else
{if((state_val_20764 === (3)))
{var inst_20761 = (state_20763[(2)]);var state_20763__$1 = state_20763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20763__$1,inst_20761);
} else
{if((state_val_20764 === (2)))
{var inst_20747 = (state_20763[(7)]);var inst_20750 = cljs.core.async.timeout.call(null,inst_20747);var state_20763__$1 = state_20763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20763__$1,(4),inst_20750);
} else
{if((state_val_20764 === (1)))
{var inst_20745 = (new Date());var inst_20746 = inst_20745.getTime();var inst_20747 = mspf;var inst_20748 = inst_20746;var state_20763__$1 = (function (){var statearr_20769 = state_20763;(statearr_20769[(7)] = inst_20747);
(statearr_20769[(9)] = inst_20748);
return statearr_20769;
})();var statearr_20770_20887 = state_20763__$1;(statearr_20770_20887[(2)] = null);
(statearr_20770_20887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___20885,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20885,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20774 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20774[(0)] = state_machine__6188__auto__);
(statearr_20774[(1)] = (1));
return statearr_20774;
});
var state_machine__6188__auto____1 = (function (state_20763){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20763);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20775){if((e20775 instanceof Object))
{var ex__6191__auto__ = e20775;var statearr_20776_20888 = state_20763;(statearr_20776_20888[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20763);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20889 = state_20763;
state_20763 = G__20889;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20763){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20885,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_20777 = f__6203__auto__.call(null);(statearr_20777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20885);
return statearr_20777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20885,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___20890 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_20838){var state_val_20839 = (state_20838[(1)]);if((state_val_20839 === (7)))
{var inst_20833 = (state_20838[(2)]);var inst_20789 = inst_20833;var state_20838__$1 = (function (){var statearr_20840 = state_20838;(statearr_20840[(7)] = inst_20789);
return statearr_20840;
})();var statearr_20841_20891 = state_20838__$1;(statearr_20841_20891[(2)] = null);
(statearr_20841_20891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (1)))
{var inst_20778 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_20779 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_20780 = cljs.core.List.EMPTY;var inst_20781 = [inst_20780,(200)];var inst_20782 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20779,inst_20781);var inst_20783 = [(0),(0),(0)];var inst_20784 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20783,null));var inst_20785 = [(0),(0)];var inst_20786 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20785,null));var inst_20787 = [inst_20782,inst_20784,inst_20786,onModel];var inst_20788 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20778,inst_20787);var inst_20789 = inst_20788;var state_20838__$1 = (function (){var statearr_20842 = state_20838;(statearr_20842[(7)] = inst_20789);
return statearr_20842;
})();var statearr_20843_20892 = state_20838__$1;(statearr_20843_20892[(2)] = null);
(statearr_20843_20892[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (4)))
{var inst_20795 = (state_20838[(8)]);var inst_20797 = (state_20838[(9)]);var inst_20795__$1 = (state_20838[(2)]);var inst_20796 = cljs.core.nth.call(null,inst_20795__$1,(0),null);var inst_20797__$1 = cljs.core.nth.call(null,inst_20795__$1,(1),null);var inst_20801 = cljs.core._EQ_.call(null,onTick,inst_20797__$1);var state_20838__$1 = (function (){var statearr_20844 = state_20838;(statearr_20844[(10)] = inst_20796);
(statearr_20844[(8)] = inst_20795__$1);
(statearr_20844[(9)] = inst_20797__$1);
return statearr_20844;
})();if(inst_20801)
{var statearr_20845_20893 = state_20838__$1;(statearr_20845_20893[(1)] = (5));
} else
{var statearr_20846_20894 = state_20838__$1;(statearr_20846_20894[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (13)))
{var inst_20831 = (state_20838[(2)]);var state_20838__$1 = state_20838;var statearr_20847_20895 = state_20838__$1;(statearr_20847_20895[(2)] = inst_20831);
(statearr_20847_20895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (6)))
{var inst_20797 = (state_20838[(9)]);var inst_20824 = cljs.core._EQ_.call(null,onView,inst_20797);var state_20838__$1 = state_20838;if(inst_20824)
{var statearr_20848_20896 = state_20838__$1;(statearr_20848_20896[(1)] = (11));
} else
{var statearr_20849_20897 = state_20838__$1;(statearr_20849_20897[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (3)))
{var inst_20836 = (state_20838[(2)]);var state_20838__$1 = state_20838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20838__$1,inst_20836);
} else
{if((state_val_20839 === (12)))
{var inst_20789 = (state_20838[(7)]);var state_20838__$1 = state_20838;var statearr_20850_20898 = state_20838__$1;(statearr_20850_20898[(2)] = inst_20789);
(statearr_20850_20898[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (2)))
{var inst_20792 = [onView,onTick];var inst_20793 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20792,null));var state_20838__$1 = state_20838;return cljs.core.async.ioc_alts_BANG_.call(null,state_20838__$1,(4),inst_20793);
} else
{if((state_val_20839 === (11)))
{var inst_20796 = (state_20838[(10)]);var inst_20789 = (state_20838[(7)]);var inst_20826 = (inst_20796[(0)]);var inst_20827 = (inst_20796[(1)]);var inst_20828 = app.particle.abstract$.onViewCommand.call(null,inst_20826,inst_20827,inst_20789);var state_20838__$1 = state_20838;var statearr_20851_20899 = state_20838__$1;(statearr_20851_20899[(2)] = inst_20828);
(statearr_20851_20899[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (9)))
{var state_20838__$1 = state_20838;var statearr_20852_20900 = state_20838__$1;(statearr_20852_20900[(2)] = cljs.core.identity);
(statearr_20852_20900[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (5)))
{var inst_20803 = (state_20838[(11)]);var inst_20789 = (state_20838[(7)]);var inst_20803__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_20789);var state_20838__$1 = (function (){var statearr_20853 = state_20838;(statearr_20853[(11)] = inst_20803__$1);
return statearr_20853;
})();if(cljs.core.truth_(inst_20803__$1))
{var statearr_20854_20901 = state_20838__$1;(statearr_20854_20901[(1)] = (8));
} else
{var statearr_20855_20902 = state_20838__$1;(statearr_20855_20902[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (10)))
{var inst_20796 = (state_20838[(10)]);var inst_20795 = (state_20838[(8)]);var inst_20789 = (state_20838[(7)]);var inst_20797 = (state_20838[(9)]);var inst_20807 = (state_20838[(2)]);var inst_20815 = cljs.core.async.chan.call(null,(1));var inst_20816 = (function (){var c__6202__auto____$1 = inst_20815;var draw = inst_20807;var expr__20799 = inst_20797;var pred__20798 = cljs.core._EQ_;var ch = inst_20797;var v = inst_20796;var vec__20791 = inst_20795;var ctx = inst_20789;return ((function (c__6202__auto____$1,draw,expr__20799,pred__20798,ch,v,vec__20791,ctx,inst_20796,inst_20795,inst_20789,inst_20797,inst_20807,inst_20815,state_val_20839,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,draw,expr__20799,pred__20798,ch,v,vec__20791,ctx,inst_20796,inst_20795,inst_20789,inst_20797,inst_20807,inst_20815,state_val_20839,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_20813){var state_val_20814 = (state_20813[(1)]);if((state_val_20814 === (2)))
{var inst_20811 = (state_20813[(2)]);var state_20813__$1 = state_20813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20813__$1,inst_20811);
} else
{if((state_val_20814 === (1)))
{var inst_20808 = ["tick",v];var inst_20809 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20808,null));var state_20813__$1 = state_20813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20813__$1,(2),onModelEvent,inst_20809);
} else
{return null;
}
}
});})(c__6202__auto____$1,draw,expr__20799,pred__20798,ch,v,vec__20791,ctx,inst_20796,inst_20795,inst_20789,inst_20797,inst_20807,inst_20815,state_val_20839,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto____$1,draw,expr__20799,pred__20798,ch,v,vec__20791,ctx,inst_20796,inst_20795,inst_20789,inst_20797,inst_20807,inst_20815,state_val_20839,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20859 = [null,null,null,null,null,null,null];(statearr_20859[(0)] = state_machine__6188__auto__);
(statearr_20859[(1)] = (1));
return statearr_20859;
});
var state_machine__6188__auto____1 = (function (state_20813){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20860){if((e20860 instanceof Object))
{var ex__6191__auto__ = e20860;var statearr_20861_20903 = state_20813;(statearr_20861_20903[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20904 = state_20813;
state_20813 = G__20904;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20813){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,draw,expr__20799,pred__20798,ch,v,vec__20791,ctx,inst_20796,inst_20795,inst_20789,inst_20797,inst_20807,inst_20815,state_val_20839,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_20862 = f__6203__auto__.call(null);(statearr_20862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_20862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,draw,expr__20799,pred__20798,ch,v,vec__20791,ctx,inst_20796,inst_20795,inst_20789,inst_20797,inst_20807,inst_20815,state_val_20839,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var inst_20817 = cljs.core.async.impl.dispatch.run.call(null,inst_20816);var inst_20818 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_20819 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20818,null));var inst_20820 = cljs.core.partial.call(null,tool.particle.update,inst_20796);var inst_20821 = cljs.core.update_in.call(null,inst_20789,inst_20819,inst_20820);var inst_20822 = inst_20807.call(null,inst_20821);var state_20838__$1 = (function (){var statearr_20863 = state_20838;(statearr_20863[(12)] = inst_20817);
return statearr_20863;
})();var statearr_20864_20905 = state_20838__$1;(statearr_20864_20905[(2)] = inst_20822);
(statearr_20864_20905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20839 === (8)))
{var inst_20803 = (state_20838[(11)]);var state_20838__$1 = state_20838;var statearr_20865_20906 = state_20838__$1;(statearr_20865_20906[(2)] = inst_20803);
(statearr_20865_20906[(1)] = (10));
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
});})(c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20869 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20869[(0)] = state_machine__6188__auto__);
(statearr_20869[(1)] = (1));
return statearr_20869;
});
var state_machine__6188__auto____1 = (function (state_20838){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20838);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20870){if((e20870 instanceof Object))
{var ex__6191__auto__ = e20870;var statearr_20871_20907 = state_20838;(statearr_20871_20907[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20908 = state_20838;
state_20838 = G__20908;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20838){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_20872 = f__6203__auto__.call(null);(statearr_20872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___20890);
return statearr_20872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___20890,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return null;
});
app.particle.main.main.call(null);
