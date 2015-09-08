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
return (function (state_53467){var state_val_53468 = (state_53467[(1)]);if((state_val_53468 === (5)))
{var inst_53465 = (state_53467[(2)]);var state_53467__$1 = state_53467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53467__$1,inst_53465);
} else
{if((state_val_53468 === (4)))
{var inst_53435 = (state_53467[(2)]);var inst_53442 = [(0),(0),(0)];var inst_53443 = [(1),(0),(1),(1)];var inst_53444 = [(10),(20)];var inst_53445 = [(0),(0),(0)];var inst_53446 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_53447 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_53448 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_53449 = [inst_53446,inst_53447,inst_53448];var inst_53450 = {"position":inst_53442,"color":inst_53443,"size":inst_53444,"vel":inst_53445,"tex":"img_map","formulaList":inst_53449};var inst_53451 = [inst_53450];var inst_53452 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_53451};var inst_53453 = [(0),(0),(1),(1)];var inst_53454 = [(30),(10)];var inst_53455 = [(10),(10),(0)];var inst_53456 = [(0),(0),(0)];var inst_53457 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_53458 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_53459 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_53460 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_53461 = [inst_53457,inst_53458,inst_53459,inst_53460];var inst_53462 = {"id":"x1","emit":inst_53452,"color":inst_53453,"size":inst_53454,"pos":inst_53455,"vel":inst_53456,"tex":"img_face","formulaList":inst_53461};var inst_53463 = ["edit-particle",inst_53462];var state_53467__$1 = (function (){var statearr_53469 = state_53467;(statearr_53469[(7)] = inst_53435);
return statearr_53469;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53467__$1,(5),onView,inst_53463);
} else
{if((state_val_53468 === (3)))
{var inst_53432 = (state_53467[(2)]);var inst_53433 = cljs.core.async.timeout.call(null,(1100));var state_53467__$1 = (function (){var statearr_53470 = state_53467;(statearr_53470[(8)] = inst_53432);
return statearr_53470;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53467__$1,(4),inst_53433);
} else
{if((state_val_53468 === (2)))
{var inst_53425 = (state_53467[(2)]);var inst_53428 = [(10),(10),(0)];var inst_53429 = {"id":"x1","pos":inst_53428};var inst_53430 = ["edit-particle",inst_53429];var state_53467__$1 = (function (){var statearr_53471 = state_53467;(statearr_53471[(9)] = inst_53425);
return statearr_53471;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53467__$1,(3),onView,inst_53430);
} else
{if((state_val_53468 === (1)))
{var inst_53423 = cljs.core.async.timeout.call(null,(1000));var state_53467__$1 = state_53467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53467__$1,(2),inst_53423);
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
var state_machine__6188__auto____0 = (function (){var statearr_53475 = [null,null,null,null,null,null,null,null,null,null];(statearr_53475[(0)] = state_machine__6188__auto__);
(statearr_53475[(1)] = (1));
return statearr_53475;
});
var state_machine__6188__auto____1 = (function (state_53467){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53467);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53476){if((e53476 instanceof Object))
{var ex__6191__auto__ = e53476;var statearr_53477_53479 = state_53467;(statearr_53477_53479[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53480 = state_53467;
state_53467 = G__53480;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53467){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53478 = f__6203__auto__.call(null);(statearr_53478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (30)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj53663 = {};return obj53663;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53667){var state_val_53668 = (state_53667[(1)]);if((state_val_53668 === (2)))
{var inst_53665 = (state_53667[(2)]);var state_53667__$1 = state_53667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53667__$1,inst_53665);
} else
{if((state_val_53668 === (1)))
{var state_53667__$1 = state_53667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53667__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53672 = [null,null,null,null,null,null,null];(statearr_53672[(0)] = state_machine__6188__auto__);
(statearr_53672[(1)] = (1));
return statearr_53672;
});
var state_machine__6188__auto____1 = (function (state_53667){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53673){if((e53673 instanceof Object))
{var ex__6191__auto__ = e53673;var statearr_53674_53843 = state_53667;(statearr_53674_53843[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53844 = state_53667;
state_53667 = G__53844;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53667){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53675 = f__6203__auto__.call(null);(statearr_53675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53845 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53689){var state_val_53690 = (state_53689[(1)]);if((state_val_53690 === (4)))
{var inst_53679 = (state_53689[(2)]);var inst_53680 = cljs.core.nth.call(null,inst_53679,(0),null);var inst_53681 = cljs.core.nth.call(null,inst_53679,(1),null);var inst_53682 = cljs.core.nth.call(null,inst_53679,(2),null);var inst_53683 = [inst_53680,inst_53681,inst_53682];var inst_53684 = common.onModel.onNext(inst_53683);var state_53689__$1 = (function (){var statearr_53691 = state_53689;(statearr_53691[(7)] = inst_53684);
return statearr_53691;
})();var statearr_53692_53846 = state_53689__$1;(statearr_53692_53846[(2)] = null);
(statearr_53692_53846[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53690 === (3)))
{var inst_53687 = (state_53689[(2)]);var state_53689__$1 = state_53689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53689__$1,inst_53687);
} else
{if((state_val_53690 === (2)))
{var state_53689__$1 = state_53689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53689__$1,(4),onModel);
} else
{if((state_val_53690 === (1)))
{var state_53689__$1 = state_53689;var statearr_53693_53847 = state_53689__$1;(statearr_53693_53847[(2)] = null);
(statearr_53693_53847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___53845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53697 = [null,null,null,null,null,null,null,null];(statearr_53697[(0)] = state_machine__6188__auto__);
(statearr_53697[(1)] = (1));
return statearr_53697;
});
var state_machine__6188__auto____1 = (function (state_53689){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53689);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53698){if((e53698 instanceof Object))
{var ex__6191__auto__ = e53698;var statearr_53699_53848 = state_53689;(statearr_53699_53848[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53689);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53849 = state_53689;
state_53689 = G__53849;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53689){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53700 = f__6203__auto__.call(null);(statearr_53700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53845);
return statearr_53700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53850 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53713){var state_val_53714 = (state_53713[(1)]);if((state_val_53714 === (4)))
{var inst_53704 = (state_53713[(2)]);var inst_53705 = cljs.core.nth.call(null,inst_53704,(0),null);var inst_53706 = cljs.core.nth.call(null,inst_53704,(1),null);var inst_53707 = [inst_53705,inst_53706];var inst_53708 = common.onModelEvent.onNext(inst_53707);var state_53713__$1 = (function (){var statearr_53715 = state_53713;(statearr_53715[(7)] = inst_53708);
return statearr_53715;
})();var statearr_53716_53851 = state_53713__$1;(statearr_53716_53851[(2)] = null);
(statearr_53716_53851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53714 === (3)))
{var inst_53711 = (state_53713[(2)]);var state_53713__$1 = state_53713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53713__$1,inst_53711);
} else
{if((state_val_53714 === (2)))
{var state_53713__$1 = state_53713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53713__$1,(4),onModelEvent);
} else
{if((state_val_53714 === (1)))
{var state_53713__$1 = state_53713;var statearr_53717_53852 = state_53713__$1;(statearr_53717_53852[(2)] = null);
(statearr_53717_53852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___53850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53721 = [null,null,null,null,null,null,null,null];(statearr_53721[(0)] = state_machine__6188__auto__);
(statearr_53721[(1)] = (1));
return statearr_53721;
});
var state_machine__6188__auto____1 = (function (state_53713){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53713);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53722){if((e53722 instanceof Object))
{var ex__6191__auto__ = e53722;var statearr_53723_53853 = state_53713;(statearr_53723_53853[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53854 = state_53713;
state_53713 = G__53854;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53713){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53724 = f__6203__auto__.call(null);(statearr_53724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53850);
return statearr_53724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53855 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53743){var state_val_53744 = (state_53743[(1)]);if((state_val_53744 === (5)))
{var inst_53734 = (state_53743[(7)]);var inst_53727 = (state_53743[(8)]);var inst_53738 = (state_53743[(2)]);var tmp53745 = inst_53727;var inst_53727__$1 = tmp53745;var inst_53728 = inst_53734;var state_53743__$1 = (function (){var statearr_53746 = state_53743;(statearr_53746[(9)] = inst_53738);
(statearr_53746[(8)] = inst_53727__$1);
(statearr_53746[(10)] = inst_53728);
return statearr_53746;
})();var statearr_53747_53856 = state_53743__$1;(statearr_53747_53856[(2)] = null);
(statearr_53747_53856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53744 === (4)))
{var inst_53734 = (state_53743[(7)]);var inst_53728 = (state_53743[(10)]);var inst_53732 = (state_53743[(2)]);var inst_53733 = (new Date());var inst_53734__$1 = inst_53733.getTime();var inst_53735 = (inst_53734__$1 - inst_53728);var inst_53736 = (inst_53735 / (1000));var state_53743__$1 = (function (){var statearr_53748 = state_53743;(statearr_53748[(7)] = inst_53734__$1);
(statearr_53748[(11)] = inst_53732);
return statearr_53748;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53743__$1,(5),onTick,inst_53736);
} else
{if((state_val_53744 === (3)))
{var inst_53741 = (state_53743[(2)]);var state_53743__$1 = state_53743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53743__$1,inst_53741);
} else
{if((state_val_53744 === (2)))
{var inst_53727 = (state_53743[(8)]);var inst_53730 = cljs.core.async.timeout.call(null,inst_53727);var state_53743__$1 = state_53743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53743__$1,(4),inst_53730);
} else
{if((state_val_53744 === (1)))
{var inst_53725 = (new Date());var inst_53726 = inst_53725.getTime();var inst_53727 = mspf;var inst_53728 = inst_53726;var state_53743__$1 = (function (){var statearr_53749 = state_53743;(statearr_53749[(8)] = inst_53727);
(statearr_53749[(10)] = inst_53728);
return statearr_53749;
})();var statearr_53750_53857 = state_53743__$1;(statearr_53750_53857[(2)] = null);
(statearr_53750_53857[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___53855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53754 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53754[(0)] = state_machine__6188__auto__);
(statearr_53754[(1)] = (1));
return statearr_53754;
});
var state_machine__6188__auto____1 = (function (state_53743){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53755){if((e53755 instanceof Object))
{var ex__6191__auto__ = e53755;var statearr_53756_53858 = state_53743;(statearr_53756_53858[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53859 = state_53743;
state_53743 = G__53859;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53743){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53757 = f__6203__auto__.call(null);(statearr_53757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53855);
return statearr_53757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53860 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53813){var state_val_53814 = (state_53813[(1)]);if((state_val_53814 === (7)))
{var inst_53808 = (state_53813[(2)]);var inst_53769 = inst_53808;var state_53813__$1 = (function (){var statearr_53815 = state_53813;(statearr_53815[(7)] = inst_53769);
return statearr_53815;
})();var statearr_53816_53861 = state_53813__$1;(statearr_53816_53861[(2)] = null);
(statearr_53816_53861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (1)))
{var inst_53758 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_53759 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_53760 = cljs.core.List.EMPTY;var inst_53761 = [inst_53760,(200)];var inst_53762 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53759,inst_53761);var inst_53763 = [0.0,0.5,0.35];var inst_53764 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53763,null));var inst_53765 = [(0),(0)];var inst_53766 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53765,null));var inst_53767 = [inst_53762,inst_53764,inst_53766,onModel,gl__$1];var inst_53768 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53758,inst_53767);var inst_53769 = inst_53768;var state_53813__$1 = (function (){var statearr_53817 = state_53813;(statearr_53817[(7)] = inst_53769);
return statearr_53817;
})();var statearr_53818_53862 = state_53813__$1;(statearr_53818_53862[(2)] = null);
(statearr_53818_53862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (4)))
{var inst_53775 = (state_53813[(8)]);var inst_53777 = (state_53813[(9)]);var inst_53775__$1 = (state_53813[(2)]);var inst_53776 = cljs.core.nth.call(null,inst_53775__$1,(0),null);var inst_53777__$1 = cljs.core.nth.call(null,inst_53775__$1,(1),null);var inst_53781 = cljs.core._EQ_.call(null,onTick,inst_53777__$1);var state_53813__$1 = (function (){var statearr_53819 = state_53813;(statearr_53819[(8)] = inst_53775__$1);
(statearr_53819[(9)] = inst_53777__$1);
(statearr_53819[(10)] = inst_53776);
return statearr_53819;
})();if(inst_53781)
{var statearr_53820_53863 = state_53813__$1;(statearr_53820_53863[(1)] = (5));
} else
{var statearr_53821_53864 = state_53813__$1;(statearr_53821_53864[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (6)))
{var inst_53777 = (state_53813[(9)]);var inst_53799 = cljs.core._EQ_.call(null,onView,inst_53777);var state_53813__$1 = state_53813;if(inst_53799)
{var statearr_53822_53865 = state_53813__$1;(statearr_53822_53865[(1)] = (8));
} else
{var statearr_53823_53866 = state_53813__$1;(statearr_53823_53866[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (3)))
{var inst_53811 = (state_53813[(2)]);var state_53813__$1 = state_53813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53813__$1,inst_53811);
} else
{if((state_val_53814 === (2)))
{var inst_53772 = [onView,onTick];var inst_53773 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53772,null));var state_53813__$1 = state_53813;return cljs.core.async.ioc_alts_BANG_.call(null,state_53813__$1,(4),inst_53773);
} else
{if((state_val_53814 === (9)))
{var inst_53769 = (state_53813[(7)]);var state_53813__$1 = state_53813;var statearr_53824_53867 = state_53813__$1;(statearr_53824_53867[(2)] = inst_53769);
(statearr_53824_53867[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (5)))
{var inst_53775 = (state_53813[(8)]);var inst_53777 = (state_53813[(9)]);var inst_53776 = (state_53813[(10)]);var inst_53769 = (state_53813[(7)]);var inst_53790 = cljs.core.async.chan.call(null,(1));var inst_53791 = (function (){var c__6202__auto____$1 = inst_53790;var expr__53779 = inst_53777;var pred__53778 = cljs.core._EQ_;var ch = inst_53777;var v = inst_53776;var vec__53771 = inst_53775;var ctx = inst_53769;return ((function (c__6202__auto____$1,expr__53779,pred__53778,ch,v,vec__53771,ctx,inst_53775,inst_53777,inst_53776,inst_53769,inst_53790,state_val_53814,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__53779,pred__53778,ch,v,vec__53771,ctx,inst_53775,inst_53777,inst_53776,inst_53769,inst_53790,state_val_53814,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53788){var state_val_53789 = (state_53788[(1)]);if((state_val_53789 === (2)))
{var inst_53786 = (state_53788[(2)]);var state_53788__$1 = state_53788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53788__$1,inst_53786);
} else
{if((state_val_53789 === (1)))
{var inst_53783 = ["tick",v];var inst_53784 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53783,null));var state_53788__$1 = state_53788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53788__$1,(2),onModelEvent,inst_53784);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__53779,pred__53778,ch,v,vec__53771,ctx,inst_53775,inst_53777,inst_53776,inst_53769,inst_53790,state_val_53814,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__53779,pred__53778,ch,v,vec__53771,ctx,inst_53775,inst_53777,inst_53776,inst_53769,inst_53790,state_val_53814,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53828 = [null,null,null,null,null,null,null];(statearr_53828[(0)] = state_machine__6188__auto__);
(statearr_53828[(1)] = (1));
return statearr_53828;
});
var state_machine__6188__auto____1 = (function (state_53788){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53788);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53829){if((e53829 instanceof Object))
{var ex__6191__auto__ = e53829;var statearr_53830_53868 = state_53788;(statearr_53830_53868[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53869 = state_53788;
state_53788 = G__53869;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53788){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__53779,pred__53778,ch,v,vec__53771,ctx,inst_53775,inst_53777,inst_53776,inst_53769,inst_53790,state_val_53814,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53831 = f__6203__auto__.call(null);(statearr_53831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_53831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__53779,pred__53778,ch,v,vec__53771,ctx,inst_53775,inst_53777,inst_53776,inst_53769,inst_53790,state_val_53814,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_53792 = cljs.core.async.impl.dispatch.run.call(null,inst_53791);var inst_53793 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_53794 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53793,null));var inst_53795 = cljs.core.partial.call(null,tool.particle.update,inst_53776);var inst_53796 = cljs.core.update_in.call(null,inst_53769,inst_53794,inst_53795);var inst_53797 = draw.call(null,inst_53796);var state_53813__$1 = (function (){var statearr_53832 = state_53813;(statearr_53832[(11)] = inst_53792);
return statearr_53832;
})();var statearr_53833_53870 = state_53813__$1;(statearr_53833_53870[(2)] = inst_53797);
(statearr_53833_53870[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (10)))
{var inst_53806 = (state_53813[(2)]);var state_53813__$1 = state_53813;var statearr_53834_53871 = state_53813__$1;(statearr_53834_53871[(2)] = inst_53806);
(statearr_53834_53871[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53814 === (8)))
{var inst_53776 = (state_53813[(10)]);var inst_53769 = (state_53813[(7)]);var inst_53801 = (inst_53776[(0)]);var inst_53802 = (inst_53776[(1)]);var inst_53803 = app.particle.abstract$.onViewCommand.call(null,inst_53801,inst_53802,inst_53769);var state_53813__$1 = state_53813;var statearr_53835_53872 = state_53813__$1;(statearr_53835_53872[(2)] = inst_53803);
(statearr_53835_53872[(1)] = (10));
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
});})(c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53839 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53839[(0)] = state_machine__6188__auto__);
(statearr_53839[(1)] = (1));
return statearr_53839;
});
var state_machine__6188__auto____1 = (function (state_53813){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53840){if((e53840 instanceof Object))
{var ex__6191__auto__ = e53840;var statearr_53841_53873 = state_53813;(statearr_53841_53873[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53840;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53874 = state_53813;
state_53813 = G__53874;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53813){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53842 = f__6203__auto__.call(null);(statearr_53842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53860);
return statearr_53842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53860,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
