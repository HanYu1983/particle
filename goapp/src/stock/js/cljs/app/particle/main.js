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
return (function (state_44537){var state_val_44538 = (state_44537[(1)]);if((state_val_44538 === (5)))
{var inst_44535 = (state_44537[(2)]);var state_44537__$1 = state_44537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44537__$1,inst_44535);
} else
{if((state_val_44538 === (4)))
{var inst_44505 = (state_44537[(2)]);var inst_44512 = [(0),(0),(0)];var inst_44513 = [(1),(0),(1),(1)];var inst_44514 = [(10),(20)];var inst_44515 = [(0),(0),(0)];var inst_44516 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_44517 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_44518 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_44519 = [inst_44516,inst_44517,inst_44518];var inst_44520 = {"position":inst_44512,"color":inst_44513,"size":inst_44514,"vel":inst_44515,"tex":"img_map","formulaList":inst_44519};var inst_44521 = [inst_44520];var inst_44522 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_44521};var inst_44523 = [(0),(0),(1),(1)];var inst_44524 = [(30),(10)];var inst_44525 = [(10),(10),(0)];var inst_44526 = [(0),(0),(0)];var inst_44527 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_44528 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_44529 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_44530 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_44531 = [inst_44527,inst_44528,inst_44529,inst_44530];var inst_44532 = {"id":"x1","emit":inst_44522,"color":inst_44523,"size":inst_44524,"pos":inst_44525,"vel":inst_44526,"tex":"img_face","formulaList":inst_44531};var inst_44533 = ["edit-particle",inst_44532];var state_44537__$1 = (function (){var statearr_44539 = state_44537;(statearr_44539[(7)] = inst_44505);
return statearr_44539;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44537__$1,(5),onView,inst_44533);
} else
{if((state_val_44538 === (3)))
{var inst_44502 = (state_44537[(2)]);var inst_44503 = cljs.core.async.timeout.call(null,(1100));var state_44537__$1 = (function (){var statearr_44540 = state_44537;(statearr_44540[(8)] = inst_44502);
return statearr_44540;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44537__$1,(4),inst_44503);
} else
{if((state_val_44538 === (2)))
{var inst_44495 = (state_44537[(2)]);var inst_44498 = [(10),(10),(0)];var inst_44499 = {"id":"x1","pos":inst_44498};var inst_44500 = ["edit-particle",inst_44499];var state_44537__$1 = (function (){var statearr_44541 = state_44537;(statearr_44541[(9)] = inst_44495);
return statearr_44541;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44537__$1,(3),onView,inst_44500);
} else
{if((state_val_44538 === (1)))
{var inst_44493 = cljs.core.async.timeout.call(null,(1000));var state_44537__$1 = state_44537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44537__$1,(2),inst_44493);
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
var state_machine__6188__auto____0 = (function (){var statearr_44545 = [null,null,null,null,null,null,null,null,null,null];(statearr_44545[(0)] = state_machine__6188__auto__);
(statearr_44545[(1)] = (1));
return statearr_44545;
});
var state_machine__6188__auto____1 = (function (state_44537){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44537);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44546){if((e44546 instanceof Object))
{var ex__6191__auto__ = e44546;var statearr_44547_44549 = state_44537;(statearr_44547_44549[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44550 = state_44537;
state_44537 = G__44550;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44537){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_44548 = f__6203__auto__.call(null);(statearr_44548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj44733 = {};return obj44733;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_44737){var state_val_44738 = (state_44737[(1)]);if((state_val_44738 === (2)))
{var inst_44735 = (state_44737[(2)]);var state_44737__$1 = state_44737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44737__$1,inst_44735);
} else
{if((state_val_44738 === (1)))
{var state_44737__$1 = state_44737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44737__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44742 = [null,null,null,null,null,null,null];(statearr_44742[(0)] = state_machine__6188__auto__);
(statearr_44742[(1)] = (1));
return statearr_44742;
});
var state_machine__6188__auto____1 = (function (state_44737){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44737);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44743){if((e44743 instanceof Object))
{var ex__6191__auto__ = e44743;var statearr_44744_44913 = state_44737;(statearr_44744_44913[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44914 = state_44737;
state_44737 = G__44914;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44737){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_44745 = f__6203__auto__.call(null);(statearr_44745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___44915 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44915,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44915,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_44759){var state_val_44760 = (state_44759[(1)]);if((state_val_44760 === (4)))
{var inst_44749 = (state_44759[(2)]);var inst_44750 = cljs.core.nth.call(null,inst_44749,(0),null);var inst_44751 = cljs.core.nth.call(null,inst_44749,(1),null);var inst_44752 = cljs.core.nth.call(null,inst_44749,(2),null);var inst_44753 = [inst_44750,inst_44751,inst_44752];var inst_44754 = common.onModel.onNext(inst_44753);var state_44759__$1 = (function (){var statearr_44761 = state_44759;(statearr_44761[(7)] = inst_44754);
return statearr_44761;
})();var statearr_44762_44916 = state_44759__$1;(statearr_44762_44916[(2)] = null);
(statearr_44762_44916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44760 === (3)))
{var inst_44757 = (state_44759[(2)]);var state_44759__$1 = state_44759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44759__$1,inst_44757);
} else
{if((state_val_44760 === (2)))
{var state_44759__$1 = state_44759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44759__$1,(4),onModel);
} else
{if((state_val_44760 === (1)))
{var state_44759__$1 = state_44759;var statearr_44763_44917 = state_44759__$1;(statearr_44763_44917[(2)] = null);
(statearr_44763_44917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___44915,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___44915,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44767 = [null,null,null,null,null,null,null,null];(statearr_44767[(0)] = state_machine__6188__auto__);
(statearr_44767[(1)] = (1));
return statearr_44767;
});
var state_machine__6188__auto____1 = (function (state_44759){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44768){if((e44768 instanceof Object))
{var ex__6191__auto__ = e44768;var statearr_44769_44918 = state_44759;(statearr_44769_44918[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44919 = state_44759;
state_44759 = G__44919;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44759){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44915,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_44770 = f__6203__auto__.call(null);(statearr_44770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44915);
return statearr_44770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44915,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___44920 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44920,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44920,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_44783){var state_val_44784 = (state_44783[(1)]);if((state_val_44784 === (4)))
{var inst_44774 = (state_44783[(2)]);var inst_44775 = cljs.core.nth.call(null,inst_44774,(0),null);var inst_44776 = cljs.core.nth.call(null,inst_44774,(1),null);var inst_44777 = [inst_44775,inst_44776];var inst_44778 = common.onModelEvent.onNext(inst_44777);var state_44783__$1 = (function (){var statearr_44785 = state_44783;(statearr_44785[(7)] = inst_44778);
return statearr_44785;
})();var statearr_44786_44921 = state_44783__$1;(statearr_44786_44921[(2)] = null);
(statearr_44786_44921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44784 === (3)))
{var inst_44781 = (state_44783[(2)]);var state_44783__$1 = state_44783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44783__$1,inst_44781);
} else
{if((state_val_44784 === (2)))
{var state_44783__$1 = state_44783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44783__$1,(4),onModelEvent);
} else
{if((state_val_44784 === (1)))
{var state_44783__$1 = state_44783;var statearr_44787_44922 = state_44783__$1;(statearr_44787_44922[(2)] = null);
(statearr_44787_44922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___44920,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___44920,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44791 = [null,null,null,null,null,null,null,null];(statearr_44791[(0)] = state_machine__6188__auto__);
(statearr_44791[(1)] = (1));
return statearr_44791;
});
var state_machine__6188__auto____1 = (function (state_44783){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44783);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44792){if((e44792 instanceof Object))
{var ex__6191__auto__ = e44792;var statearr_44793_44923 = state_44783;(statearr_44793_44923[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44924 = state_44783;
state_44783 = G__44924;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44783){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44920,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_44794 = f__6203__auto__.call(null);(statearr_44794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44920);
return statearr_44794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44920,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___44925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44925,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44925,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_44813){var state_val_44814 = (state_44813[(1)]);if((state_val_44814 === (5)))
{var inst_44804 = (state_44813[(7)]);var inst_44797 = (state_44813[(8)]);var inst_44808 = (state_44813[(2)]);var tmp44815 = inst_44797;var inst_44797__$1 = tmp44815;var inst_44798 = inst_44804;var state_44813__$1 = (function (){var statearr_44816 = state_44813;(statearr_44816[(9)] = inst_44808);
(statearr_44816[(10)] = inst_44798);
(statearr_44816[(8)] = inst_44797__$1);
return statearr_44816;
})();var statearr_44817_44926 = state_44813__$1;(statearr_44817_44926[(2)] = null);
(statearr_44817_44926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44814 === (4)))
{var inst_44804 = (state_44813[(7)]);var inst_44798 = (state_44813[(10)]);var inst_44802 = (state_44813[(2)]);var inst_44803 = (new Date());var inst_44804__$1 = inst_44803.getTime();var inst_44805 = (inst_44804__$1 - inst_44798);var inst_44806 = (inst_44805 / (1000));var state_44813__$1 = (function (){var statearr_44818 = state_44813;(statearr_44818[(7)] = inst_44804__$1);
(statearr_44818[(11)] = inst_44802);
return statearr_44818;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44813__$1,(5),onTick,inst_44806);
} else
{if((state_val_44814 === (3)))
{var inst_44811 = (state_44813[(2)]);var state_44813__$1 = state_44813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44813__$1,inst_44811);
} else
{if((state_val_44814 === (2)))
{var inst_44797 = (state_44813[(8)]);var inst_44800 = cljs.core.async.timeout.call(null,inst_44797);var state_44813__$1 = state_44813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44813__$1,(4),inst_44800);
} else
{if((state_val_44814 === (1)))
{var inst_44795 = (new Date());var inst_44796 = inst_44795.getTime();var inst_44797 = mspf;var inst_44798 = inst_44796;var state_44813__$1 = (function (){var statearr_44819 = state_44813;(statearr_44819[(10)] = inst_44798);
(statearr_44819[(8)] = inst_44797);
return statearr_44819;
})();var statearr_44820_44927 = state_44813__$1;(statearr_44820_44927[(2)] = null);
(statearr_44820_44927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___44925,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___44925,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44824 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44824[(0)] = state_machine__6188__auto__);
(statearr_44824[(1)] = (1));
return statearr_44824;
});
var state_machine__6188__auto____1 = (function (state_44813){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44825){if((e44825 instanceof Object))
{var ex__6191__auto__ = e44825;var statearr_44826_44928 = state_44813;(statearr_44826_44928[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44929 = state_44813;
state_44813 = G__44929;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44813){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44925,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_44827 = f__6203__auto__.call(null);(statearr_44827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44925);
return statearr_44827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44925,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___44930 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_44883){var state_val_44884 = (state_44883[(1)]);if((state_val_44884 === (7)))
{var inst_44878 = (state_44883[(2)]);var inst_44839 = inst_44878;var state_44883__$1 = (function (){var statearr_44885 = state_44883;(statearr_44885[(7)] = inst_44839);
return statearr_44885;
})();var statearr_44886_44931 = state_44883__$1;(statearr_44886_44931[(2)] = null);
(statearr_44886_44931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (1)))
{var inst_44828 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_44829 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];var inst_44830 = cljs.core.List.EMPTY;var inst_44831 = [0.1,0.1,0.1];var inst_44832 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44831,null));var inst_44833 = [inst_44830,(200),inst_44832];var inst_44834 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_44829,inst_44833);var inst_44835 = [(0),(0)];var inst_44836 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44835,null));var inst_44837 = [(0),inst_44834,inst_44836,onModel,gl__$1];var inst_44838 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_44828,inst_44837);var inst_44839 = inst_44838;var state_44883__$1 = (function (){var statearr_44887 = state_44883;(statearr_44887[(7)] = inst_44839);
return statearr_44887;
})();var statearr_44888_44932 = state_44883__$1;(statearr_44888_44932[(2)] = null);
(statearr_44888_44932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (4)))
{var inst_44847 = (state_44883[(8)]);var inst_44845 = (state_44883[(9)]);var inst_44845__$1 = (state_44883[(2)]);var inst_44846 = cljs.core.nth.call(null,inst_44845__$1,(0),null);var inst_44847__$1 = cljs.core.nth.call(null,inst_44845__$1,(1),null);var inst_44851 = cljs.core._EQ_.call(null,onTick,inst_44847__$1);var state_44883__$1 = (function (){var statearr_44889 = state_44883;(statearr_44889[(8)] = inst_44847__$1);
(statearr_44889[(9)] = inst_44845__$1);
(statearr_44889[(10)] = inst_44846);
return statearr_44889;
})();if(inst_44851)
{var statearr_44890_44933 = state_44883__$1;(statearr_44890_44933[(1)] = (5));
} else
{var statearr_44891_44934 = state_44883__$1;(statearr_44891_44934[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (6)))
{var inst_44847 = (state_44883[(8)]);var inst_44869 = cljs.core._EQ_.call(null,onView,inst_44847);var state_44883__$1 = state_44883;if(inst_44869)
{var statearr_44892_44935 = state_44883__$1;(statearr_44892_44935[(1)] = (8));
} else
{var statearr_44893_44936 = state_44883__$1;(statearr_44893_44936[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (3)))
{var inst_44881 = (state_44883[(2)]);var state_44883__$1 = state_44883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44883__$1,inst_44881);
} else
{if((state_val_44884 === (2)))
{var inst_44842 = [onView,onTick];var inst_44843 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44842,null));var state_44883__$1 = state_44883;return cljs.core.async.ioc_alts_BANG_.call(null,state_44883__$1,(4),inst_44843);
} else
{if((state_val_44884 === (9)))
{var inst_44839 = (state_44883[(7)]);var state_44883__$1 = state_44883;var statearr_44894_44937 = state_44883__$1;(statearr_44894_44937[(2)] = inst_44839);
(statearr_44894_44937[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (5)))
{var inst_44847 = (state_44883[(8)]);var inst_44839 = (state_44883[(7)]);var inst_44845 = (state_44883[(9)]);var inst_44846 = (state_44883[(10)]);var inst_44860 = cljs.core.async.chan.call(null,(1));var inst_44861 = (function (){var c__6202__auto____$1 = inst_44860;var expr__44849 = inst_44847;var pred__44848 = cljs.core._EQ_;var ch = inst_44847;var v = inst_44846;var vec__44841 = inst_44845;var ctx = inst_44839;return ((function (c__6202__auto____$1,expr__44849,pred__44848,ch,v,vec__44841,ctx,inst_44847,inst_44839,inst_44845,inst_44846,inst_44860,state_val_44884,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__44849,pred__44848,ch,v,vec__44841,ctx,inst_44847,inst_44839,inst_44845,inst_44846,inst_44860,state_val_44884,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_44858){var state_val_44859 = (state_44858[(1)]);if((state_val_44859 === (2)))
{var inst_44856 = (state_44858[(2)]);var state_44858__$1 = state_44858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44858__$1,inst_44856);
} else
{if((state_val_44859 === (1)))
{var inst_44853 = ["tick",v];var inst_44854 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44853,null));var state_44858__$1 = state_44858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44858__$1,(2),onModelEvent,inst_44854);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__44849,pred__44848,ch,v,vec__44841,ctx,inst_44847,inst_44839,inst_44845,inst_44846,inst_44860,state_val_44884,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__44849,pred__44848,ch,v,vec__44841,ctx,inst_44847,inst_44839,inst_44845,inst_44846,inst_44860,state_val_44884,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44898 = [null,null,null,null,null,null,null];(statearr_44898[(0)] = state_machine__6188__auto__);
(statearr_44898[(1)] = (1));
return statearr_44898;
});
var state_machine__6188__auto____1 = (function (state_44858){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44899){if((e44899 instanceof Object))
{var ex__6191__auto__ = e44899;var statearr_44900_44938 = state_44858;(statearr_44900_44938[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44939 = state_44858;
state_44858 = G__44939;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44858){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__44849,pred__44848,ch,v,vec__44841,ctx,inst_44847,inst_44839,inst_44845,inst_44846,inst_44860,state_val_44884,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_44901 = f__6203__auto__.call(null);(statearr_44901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_44901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__44849,pred__44848,ch,v,vec__44841,ctx,inst_44847,inst_44839,inst_44845,inst_44846,inst_44860,state_val_44884,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_44862 = cljs.core.async.impl.dispatch.run.call(null,inst_44861);var inst_44863 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_44864 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44863,null));var inst_44865 = cljs.core.partial.call(null,tool.particle.update,inst_44846);var inst_44866 = cljs.core.update_in.call(null,inst_44839,inst_44864,inst_44865);var inst_44867 = draw.call(null,inst_44866);var state_44883__$1 = (function (){var statearr_44902 = state_44883;(statearr_44902[(11)] = inst_44862);
return statearr_44902;
})();var statearr_44903_44940 = state_44883__$1;(statearr_44903_44940[(2)] = inst_44867);
(statearr_44903_44940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (10)))
{var inst_44876 = (state_44883[(2)]);var state_44883__$1 = state_44883;var statearr_44904_44941 = state_44883__$1;(statearr_44904_44941[(2)] = inst_44876);
(statearr_44904_44941[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44884 === (8)))
{var inst_44839 = (state_44883[(7)]);var inst_44846 = (state_44883[(10)]);var inst_44871 = (inst_44846[(0)]);var inst_44872 = (inst_44846[(1)]);var inst_44873 = app.particle.abstract$.onViewCommand.call(null,inst_44871,inst_44872,inst_44839);var state_44883__$1 = state_44883;var statearr_44905_44942 = state_44883__$1;(statearr_44905_44942[(2)] = inst_44873);
(statearr_44905_44942[(1)] = (10));
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
});})(c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44909 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44909[(0)] = state_machine__6188__auto__);
(statearr_44909[(1)] = (1));
return statearr_44909;
});
var state_machine__6188__auto____1 = (function (state_44883){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44883);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44910){if((e44910 instanceof Object))
{var ex__6191__auto__ = e44910;var statearr_44911_44943 = state_44883;(statearr_44911_44943[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44944 = state_44883;
state_44883 = G__44944;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44883){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_44912 = f__6203__auto__.call(null);(statearr_44912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44930);
return statearr_44912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44930,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
