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
return (function (state_135827){var state_val_135828 = (state_135827[(1)]);if((state_val_135828 === (5)))
{var inst_135825 = (state_135827[(2)]);var state_135827__$1 = state_135827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135827__$1,inst_135825);
} else
{if((state_val_135828 === (4)))
{var inst_135795 = (state_135827[(2)]);var inst_135802 = [(0),(0),(0)];var inst_135803 = [(1),(0),(1),(1)];var inst_135804 = [(10),(20)];var inst_135805 = [(0),(0),(0)];var inst_135806 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_135807 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_135808 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_135809 = [inst_135806,inst_135807,inst_135808];var inst_135810 = {"position":inst_135802,"color":inst_135803,"size":inst_135804,"vel":inst_135805,"tex":"img_map","formulaList":inst_135809};var inst_135811 = [inst_135810];var inst_135812 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_135811};var inst_135813 = [(0),(0),(1),(1)];var inst_135814 = [(30),(10)];var inst_135815 = [(10),(10),(0)];var inst_135816 = [(0),(0),(0)];var inst_135817 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_135818 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_135819 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_135820 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_135821 = [inst_135817,inst_135818,inst_135819,inst_135820];var inst_135822 = {"id":"x1","emit":inst_135812,"color":inst_135813,"size":inst_135814,"pos":inst_135815,"vel":inst_135816,"tex":"img_face","formulaList":inst_135821};var inst_135823 = ["edit-particle",inst_135822];var state_135827__$1 = (function (){var statearr_135829 = state_135827;(statearr_135829[(7)] = inst_135795);
return statearr_135829;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135827__$1,(5),onView,inst_135823);
} else
{if((state_val_135828 === (3)))
{var inst_135792 = (state_135827[(2)]);var inst_135793 = cljs.core.async.timeout.call(null,(1100));var state_135827__$1 = (function (){var statearr_135830 = state_135827;(statearr_135830[(8)] = inst_135792);
return statearr_135830;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135827__$1,(4),inst_135793);
} else
{if((state_val_135828 === (2)))
{var inst_135785 = (state_135827[(2)]);var inst_135788 = [(10),(10),(0)];var inst_135789 = {"id":"x1","pos":inst_135788};var inst_135790 = ["edit-particle",inst_135789];var state_135827__$1 = (function (){var statearr_135831 = state_135827;(statearr_135831[(9)] = inst_135785);
return statearr_135831;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135827__$1,(3),onView,inst_135790);
} else
{if((state_val_135828 === (1)))
{var inst_135783 = cljs.core.async.timeout.call(null,(1000));var state_135827__$1 = state_135827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135827__$1,(2),inst_135783);
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
var state_machine__6188__auto____0 = (function (){var statearr_135835 = [null,null,null,null,null,null,null,null,null,null];(statearr_135835[(0)] = state_machine__6188__auto__);
(statearr_135835[(1)] = (1));
return statearr_135835;
});
var state_machine__6188__auto____1 = (function (state_135827){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135827);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135836){if((e135836 instanceof Object))
{var ex__6191__auto__ = e135836;var statearr_135837_135839 = state_135827;(statearr_135837_135839[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135840 = state_135827;
state_135827 = G__135840;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135827){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_135838 = f__6203__auto__.call(null);(statearr_135838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_135838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj136021 = {};return obj136021;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_136025){var state_val_136026 = (state_136025[(1)]);if((state_val_136026 === (2)))
{var inst_136023 = (state_136025[(2)]);var state_136025__$1 = state_136025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136025__$1,inst_136023);
} else
{if((state_val_136026 === (1)))
{var state_136025__$1 = state_136025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136025__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_136030 = [null,null,null,null,null,null,null];(statearr_136030[(0)] = state_machine__6188__auto__);
(statearr_136030[(1)] = (1));
return statearr_136030;
});
var state_machine__6188__auto____1 = (function (state_136025){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_136025);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e136031){if((e136031 instanceof Object))
{var ex__6191__auto__ = e136031;var statearr_136032_136199 = state_136025;(statearr_136032_136199[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e136031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136200 = state_136025;
state_136025 = G__136200;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_136025){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_136025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_136033 = f__6203__auto__.call(null);(statearr_136033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_136033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___136201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___136201,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___136201,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_136047){var state_val_136048 = (state_136047[(1)]);if((state_val_136048 === (4)))
{var inst_136037 = (state_136047[(2)]);var inst_136038 = cljs.core.nth.call(null,inst_136037,(0),null);var inst_136039 = cljs.core.nth.call(null,inst_136037,(1),null);var inst_136040 = cljs.core.nth.call(null,inst_136037,(2),null);var inst_136041 = [inst_136038,inst_136039,inst_136040];var inst_136042 = common.onModel.onNext(inst_136041);var state_136047__$1 = (function (){var statearr_136049 = state_136047;(statearr_136049[(7)] = inst_136042);
return statearr_136049;
})();var statearr_136050_136202 = state_136047__$1;(statearr_136050_136202[(2)] = null);
(statearr_136050_136202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136048 === (3)))
{var inst_136045 = (state_136047[(2)]);var state_136047__$1 = state_136047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136047__$1,inst_136045);
} else
{if((state_val_136048 === (2)))
{var state_136047__$1 = state_136047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136047__$1,(4),onModel);
} else
{if((state_val_136048 === (1)))
{var state_136047__$1 = state_136047;var statearr_136051_136203 = state_136047__$1;(statearr_136051_136203[(2)] = null);
(statearr_136051_136203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___136201,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___136201,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_136055 = [null,null,null,null,null,null,null,null];(statearr_136055[(0)] = state_machine__6188__auto__);
(statearr_136055[(1)] = (1));
return statearr_136055;
});
var state_machine__6188__auto____1 = (function (state_136047){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_136047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e136056){if((e136056 instanceof Object))
{var ex__6191__auto__ = e136056;var statearr_136057_136204 = state_136047;(statearr_136057_136204[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e136056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136205 = state_136047;
state_136047 = G__136205;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_136047){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_136047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___136201,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_136058 = f__6203__auto__.call(null);(statearr_136058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___136201);
return statearr_136058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___136201,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___136206 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___136206,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___136206,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_136071){var state_val_136072 = (state_136071[(1)]);if((state_val_136072 === (4)))
{var inst_136062 = (state_136071[(2)]);var inst_136063 = cljs.core.nth.call(null,inst_136062,(0),null);var inst_136064 = cljs.core.nth.call(null,inst_136062,(1),null);var inst_136065 = [inst_136063,inst_136064];var inst_136066 = common.onModelEvent.onNext(inst_136065);var state_136071__$1 = (function (){var statearr_136073 = state_136071;(statearr_136073[(7)] = inst_136066);
return statearr_136073;
})();var statearr_136074_136207 = state_136071__$1;(statearr_136074_136207[(2)] = null);
(statearr_136074_136207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136072 === (3)))
{var inst_136069 = (state_136071[(2)]);var state_136071__$1 = state_136071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136071__$1,inst_136069);
} else
{if((state_val_136072 === (2)))
{var state_136071__$1 = state_136071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136071__$1,(4),onModelEvent);
} else
{if((state_val_136072 === (1)))
{var state_136071__$1 = state_136071;var statearr_136075_136208 = state_136071__$1;(statearr_136075_136208[(2)] = null);
(statearr_136075_136208[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___136206,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___136206,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_136079 = [null,null,null,null,null,null,null,null];(statearr_136079[(0)] = state_machine__6188__auto__);
(statearr_136079[(1)] = (1));
return statearr_136079;
});
var state_machine__6188__auto____1 = (function (state_136071){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_136071);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e136080){if((e136080 instanceof Object))
{var ex__6191__auto__ = e136080;var statearr_136081_136209 = state_136071;(statearr_136081_136209[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e136080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136210 = state_136071;
state_136071 = G__136210;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_136071){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_136071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___136206,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_136082 = f__6203__auto__.call(null);(statearr_136082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___136206);
return statearr_136082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___136206,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___136211 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___136211,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___136211,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_136101){var state_val_136102 = (state_136101[(1)]);if((state_val_136102 === (5)))
{var inst_136092 = (state_136101[(7)]);var inst_136085 = (state_136101[(8)]);var inst_136096 = (state_136101[(2)]);var tmp136103 = inst_136085;var inst_136085__$1 = tmp136103;var inst_136086 = inst_136092;var state_136101__$1 = (function (){var statearr_136104 = state_136101;(statearr_136104[(9)] = inst_136086);
(statearr_136104[(10)] = inst_136096);
(statearr_136104[(8)] = inst_136085__$1);
return statearr_136104;
})();var statearr_136105_136212 = state_136101__$1;(statearr_136105_136212[(2)] = null);
(statearr_136105_136212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136102 === (4)))
{var inst_136086 = (state_136101[(9)]);var inst_136092 = (state_136101[(7)]);var inst_136090 = (state_136101[(2)]);var inst_136091 = (new Date());var inst_136092__$1 = inst_136091.getTime();var inst_136093 = (inst_136092__$1 - inst_136086);var inst_136094 = (inst_136093 / (1000));var state_136101__$1 = (function (){var statearr_136106 = state_136101;(statearr_136106[(7)] = inst_136092__$1);
(statearr_136106[(11)] = inst_136090);
return statearr_136106;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136101__$1,(5),onTick,inst_136094);
} else
{if((state_val_136102 === (3)))
{var inst_136099 = (state_136101[(2)]);var state_136101__$1 = state_136101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136101__$1,inst_136099);
} else
{if((state_val_136102 === (2)))
{var inst_136085 = (state_136101[(8)]);var inst_136088 = cljs.core.async.timeout.call(null,inst_136085);var state_136101__$1 = state_136101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136101__$1,(4),inst_136088);
} else
{if((state_val_136102 === (1)))
{var inst_136083 = (new Date());var inst_136084 = inst_136083.getTime();var inst_136085 = mspf;var inst_136086 = inst_136084;var state_136101__$1 = (function (){var statearr_136107 = state_136101;(statearr_136107[(9)] = inst_136086);
(statearr_136107[(8)] = inst_136085);
return statearr_136107;
})();var statearr_136108_136213 = state_136101__$1;(statearr_136108_136213[(2)] = null);
(statearr_136108_136213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___136211,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___136211,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_136112 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_136112[(0)] = state_machine__6188__auto__);
(statearr_136112[(1)] = (1));
return statearr_136112;
});
var state_machine__6188__auto____1 = (function (state_136101){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_136101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e136113){if((e136113 instanceof Object))
{var ex__6191__auto__ = e136113;var statearr_136114_136214 = state_136101;(statearr_136114_136214[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e136113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136215 = state_136101;
state_136101 = G__136215;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_136101){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_136101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___136211,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_136115 = f__6203__auto__.call(null);(statearr_136115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___136211);
return statearr_136115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___136211,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___136216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_136169){var state_val_136170 = (state_136169[(1)]);if((state_val_136170 === (7)))
{var inst_136164 = (state_136169[(2)]);var inst_136125 = inst_136164;var state_136169__$1 = (function (){var statearr_136171 = state_136169;(statearr_136171[(7)] = inst_136125);
return statearr_136171;
})();var statearr_136172_136217 = state_136169__$1;(statearr_136172_136217[(2)] = null);
(statearr_136172_136217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (1)))
{var inst_136116 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_136117 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_136118 = cljs.core.List.EMPTY;var inst_136119 = [inst_136118,(200)];var inst_136120 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_136117,inst_136119);var inst_136121 = [(0),(0)];var inst_136122 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_136121,null));var inst_136123 = [(0),inst_136120,inst_136122,onModel,gl__$1];var inst_136124 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_136116,inst_136123);var inst_136125 = inst_136124;var state_136169__$1 = (function (){var statearr_136173 = state_136169;(statearr_136173[(7)] = inst_136125);
return statearr_136173;
})();var statearr_136174_136218 = state_136169__$1;(statearr_136174_136218[(2)] = null);
(statearr_136174_136218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (4)))
{var inst_136133 = (state_136169[(8)]);var inst_136131 = (state_136169[(9)]);var inst_136131__$1 = (state_136169[(2)]);var inst_136132 = cljs.core.nth.call(null,inst_136131__$1,(0),null);var inst_136133__$1 = cljs.core.nth.call(null,inst_136131__$1,(1),null);var inst_136137 = cljs.core._EQ_.call(null,onTick,inst_136133__$1);var state_136169__$1 = (function (){var statearr_136175 = state_136169;(statearr_136175[(8)] = inst_136133__$1);
(statearr_136175[(9)] = inst_136131__$1);
(statearr_136175[(10)] = inst_136132);
return statearr_136175;
})();if(inst_136137)
{var statearr_136176_136219 = state_136169__$1;(statearr_136176_136219[(1)] = (5));
} else
{var statearr_136177_136220 = state_136169__$1;(statearr_136177_136220[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (6)))
{var inst_136133 = (state_136169[(8)]);var inst_136155 = cljs.core._EQ_.call(null,onView,inst_136133);var state_136169__$1 = state_136169;if(inst_136155)
{var statearr_136178_136221 = state_136169__$1;(statearr_136178_136221[(1)] = (8));
} else
{var statearr_136179_136222 = state_136169__$1;(statearr_136179_136222[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (3)))
{var inst_136167 = (state_136169[(2)]);var state_136169__$1 = state_136169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136169__$1,inst_136167);
} else
{if((state_val_136170 === (2)))
{var inst_136128 = [onView,onTick];var inst_136129 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_136128,null));var state_136169__$1 = state_136169;return cljs.core.async.ioc_alts_BANG_.call(null,state_136169__$1,(4),inst_136129);
} else
{if((state_val_136170 === (9)))
{var inst_136125 = (state_136169[(7)]);var state_136169__$1 = state_136169;var statearr_136180_136223 = state_136169__$1;(statearr_136180_136223[(2)] = inst_136125);
(statearr_136180_136223[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (5)))
{var inst_136133 = (state_136169[(8)]);var inst_136131 = (state_136169[(9)]);var inst_136125 = (state_136169[(7)]);var inst_136132 = (state_136169[(10)]);var inst_136146 = cljs.core.async.chan.call(null,(1));var inst_136147 = (function (){var c__6202__auto____$1 = inst_136146;var expr__136135 = inst_136133;var pred__136134 = cljs.core._EQ_;var ch = inst_136133;var v = inst_136132;var vec__136127 = inst_136131;var ctx = inst_136125;return ((function (c__6202__auto____$1,expr__136135,pred__136134,ch,v,vec__136127,ctx,inst_136133,inst_136131,inst_136125,inst_136132,inst_136146,state_val_136170,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__136135,pred__136134,ch,v,vec__136127,ctx,inst_136133,inst_136131,inst_136125,inst_136132,inst_136146,state_val_136170,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_136144){var state_val_136145 = (state_136144[(1)]);if((state_val_136145 === (2)))
{var inst_136142 = (state_136144[(2)]);var state_136144__$1 = state_136144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136144__$1,inst_136142);
} else
{if((state_val_136145 === (1)))
{var inst_136139 = ["tick",v];var inst_136140 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_136139,null));var state_136144__$1 = state_136144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_136144__$1,(2),onModelEvent,inst_136140);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__136135,pred__136134,ch,v,vec__136127,ctx,inst_136133,inst_136131,inst_136125,inst_136132,inst_136146,state_val_136170,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__136135,pred__136134,ch,v,vec__136127,ctx,inst_136133,inst_136131,inst_136125,inst_136132,inst_136146,state_val_136170,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_136184 = [null,null,null,null,null,null,null];(statearr_136184[(0)] = state_machine__6188__auto__);
(statearr_136184[(1)] = (1));
return statearr_136184;
});
var state_machine__6188__auto____1 = (function (state_136144){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_136144);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e136185){if((e136185 instanceof Object))
{var ex__6191__auto__ = e136185;var statearr_136186_136224 = state_136144;(statearr_136186_136224[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e136185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136225 = state_136144;
state_136144 = G__136225;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_136144){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_136144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__136135,pred__136134,ch,v,vec__136127,ctx,inst_136133,inst_136131,inst_136125,inst_136132,inst_136146,state_val_136170,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_136187 = f__6203__auto__.call(null);(statearr_136187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_136187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__136135,pred__136134,ch,v,vec__136127,ctx,inst_136133,inst_136131,inst_136125,inst_136132,inst_136146,state_val_136170,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_136148 = cljs.core.async.impl.dispatch.run.call(null,inst_136147);var inst_136149 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_136150 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_136149,null));var inst_136151 = cljs.core.partial.call(null,tool.particle.update,inst_136132);var inst_136152 = cljs.core.update_in.call(null,inst_136125,inst_136150,inst_136151);var inst_136153 = draw.call(null,inst_136152);var state_136169__$1 = (function (){var statearr_136188 = state_136169;(statearr_136188[(11)] = inst_136148);
return statearr_136188;
})();var statearr_136189_136226 = state_136169__$1;(statearr_136189_136226[(2)] = inst_136153);
(statearr_136189_136226[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (10)))
{var inst_136162 = (state_136169[(2)]);var state_136169__$1 = state_136169;var statearr_136190_136227 = state_136169__$1;(statearr_136190_136227[(2)] = inst_136162);
(statearr_136190_136227[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_136170 === (8)))
{var inst_136125 = (state_136169[(7)]);var inst_136132 = (state_136169[(10)]);var inst_136157 = (inst_136132[(0)]);var inst_136158 = (inst_136132[(1)]);var inst_136159 = app.particle.abstract$.onViewCommand.call(null,inst_136157,inst_136158,inst_136125);var state_136169__$1 = state_136169;var statearr_136191_136228 = state_136169__$1;(statearr_136191_136228[(2)] = inst_136159);
(statearr_136191_136228[(1)] = (10));
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
});})(c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_136195 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_136195[(0)] = state_machine__6188__auto__);
(statearr_136195[(1)] = (1));
return statearr_136195;
});
var state_machine__6188__auto____1 = (function (state_136169){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_136169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e136196){if((e136196 instanceof Object))
{var ex__6191__auto__ = e136196;var statearr_136197_136229 = state_136169;(statearr_136197_136229[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e136196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__136230 = state_136169;
state_136169 = G__136230;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_136169){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_136169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_136198 = f__6203__auto__.call(null);(statearr_136198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___136216);
return statearr_136198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___136216,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.demo.call(null,onView);
return null;
});
app.particle.main.main.call(null);
