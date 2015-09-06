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
return (function (state_133859){var state_val_133860 = (state_133859[(1)]);if((state_val_133860 === (5)))
{var inst_133857 = (state_133859[(2)]);var state_133859__$1 = state_133859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133859__$1,inst_133857);
} else
{if((state_val_133860 === (4)))
{var inst_133827 = (state_133859[(2)]);var inst_133834 = [(0),(0),(0)];var inst_133835 = [(1),(0),(1),(1)];var inst_133836 = [(10),(20)];var inst_133837 = [(0),(0),(0)];var inst_133838 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_133839 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_133840 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_133841 = [inst_133838,inst_133839,inst_133840];var inst_133842 = {"position":inst_133834,"color":inst_133835,"size":inst_133836,"vel":inst_133837,"tex":"img_map","formulaList":inst_133841};var inst_133843 = [inst_133842];var inst_133844 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_133843};var inst_133845 = [(0),(0),(1),(1)];var inst_133846 = [(30),(10)];var inst_133847 = [(10),(10),(0)];var inst_133848 = [(0),(0),(0)];var inst_133849 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_133850 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_133851 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_133852 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_133853 = [inst_133849,inst_133850,inst_133851,inst_133852];var inst_133854 = {"id":"x1","emit":inst_133844,"color":inst_133845,"size":inst_133846,"pos":inst_133847,"vel":inst_133848,"tex":"img_face","formulaList":inst_133853};var inst_133855 = ["edit-particle",inst_133854];var state_133859__$1 = (function (){var statearr_133861 = state_133859;(statearr_133861[(7)] = inst_133827);
return statearr_133861;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133859__$1,(5),onView,inst_133855);
} else
{if((state_val_133860 === (3)))
{var inst_133824 = (state_133859[(2)]);var inst_133825 = cljs.core.async.timeout.call(null,(1100));var state_133859__$1 = (function (){var statearr_133862 = state_133859;(statearr_133862[(8)] = inst_133824);
return statearr_133862;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133859__$1,(4),inst_133825);
} else
{if((state_val_133860 === (2)))
{var inst_133817 = (state_133859[(2)]);var inst_133820 = [(10),(10),(0)];var inst_133821 = {"id":"x1","pos":inst_133820};var inst_133822 = ["edit-particle",inst_133821];var state_133859__$1 = (function (){var statearr_133863 = state_133859;(statearr_133863[(9)] = inst_133817);
return statearr_133863;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133859__$1,(3),onView,inst_133822);
} else
{if((state_val_133860 === (1)))
{var inst_133815 = cljs.core.async.timeout.call(null,(1000));var state_133859__$1 = state_133859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133859__$1,(2),inst_133815);
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
var state_machine__6188__auto____0 = (function (){var statearr_133867 = [null,null,null,null,null,null,null,null,null,null];(statearr_133867[(0)] = state_machine__6188__auto__);
(statearr_133867[(1)] = (1));
return statearr_133867;
});
var state_machine__6188__auto____1 = (function (state_133859){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_133859);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e133868){if((e133868 instanceof Object))
{var ex__6191__auto__ = e133868;var statearr_133869_133871 = state_133859;(statearr_133869_133871[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e133868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133872 = state_133859;
state_133859 = G__133872;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_133859){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_133859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_133870 = f__6203__auto__.call(null);(statearr_133870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_133870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj134053 = {};return obj134053;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134057){var state_val_134058 = (state_134057[(1)]);if((state_val_134058 === (2)))
{var inst_134055 = (state_134057[(2)]);var state_134057__$1 = state_134057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134057__$1,inst_134055);
} else
{if((state_val_134058 === (1)))
{var state_134057__$1 = state_134057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134057__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134062 = [null,null,null,null,null,null,null];(statearr_134062[(0)] = state_machine__6188__auto__);
(statearr_134062[(1)] = (1));
return statearr_134062;
});
var state_machine__6188__auto____1 = (function (state_134057){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134057);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134063){if((e134063 instanceof Object))
{var ex__6191__auto__ = e134063;var statearr_134064_134231 = state_134057;(statearr_134064_134231[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134057);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134232 = state_134057;
state_134057 = G__134232;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134057){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134065 = f__6203__auto__.call(null);(statearr_134065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_134065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134233 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134233,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134233,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134079){var state_val_134080 = (state_134079[(1)]);if((state_val_134080 === (4)))
{var inst_134069 = (state_134079[(2)]);var inst_134070 = cljs.core.nth.call(null,inst_134069,(0),null);var inst_134071 = cljs.core.nth.call(null,inst_134069,(1),null);var inst_134072 = cljs.core.nth.call(null,inst_134069,(2),null);var inst_134073 = [inst_134070,inst_134071,inst_134072];var inst_134074 = common.onModel.onNext(inst_134073);var state_134079__$1 = (function (){var statearr_134081 = state_134079;(statearr_134081[(7)] = inst_134074);
return statearr_134081;
})();var statearr_134082_134234 = state_134079__$1;(statearr_134082_134234[(2)] = null);
(statearr_134082_134234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134080 === (3)))
{var inst_134077 = (state_134079[(2)]);var state_134079__$1 = state_134079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134079__$1,inst_134077);
} else
{if((state_val_134080 === (2)))
{var state_134079__$1 = state_134079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134079__$1,(4),onModel);
} else
{if((state_val_134080 === (1)))
{var state_134079__$1 = state_134079;var statearr_134083_134235 = state_134079__$1;(statearr_134083_134235[(2)] = null);
(statearr_134083_134235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___134233,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134233,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134087 = [null,null,null,null,null,null,null,null];(statearr_134087[(0)] = state_machine__6188__auto__);
(statearr_134087[(1)] = (1));
return statearr_134087;
});
var state_machine__6188__auto____1 = (function (state_134079){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134088){if((e134088 instanceof Object))
{var ex__6191__auto__ = e134088;var statearr_134089_134236 = state_134079;(statearr_134089_134236[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134237 = state_134079;
state_134079 = G__134237;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134079){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134233,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134090 = f__6203__auto__.call(null);(statearr_134090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134233);
return statearr_134090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134233,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134238 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134238,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134238,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134103){var state_val_134104 = (state_134103[(1)]);if((state_val_134104 === (4)))
{var inst_134094 = (state_134103[(2)]);var inst_134095 = cljs.core.nth.call(null,inst_134094,(0),null);var inst_134096 = cljs.core.nth.call(null,inst_134094,(1),null);var inst_134097 = [inst_134095,inst_134096];var inst_134098 = common.onModelEvent.onNext(inst_134097);var state_134103__$1 = (function (){var statearr_134105 = state_134103;(statearr_134105[(7)] = inst_134098);
return statearr_134105;
})();var statearr_134106_134239 = state_134103__$1;(statearr_134106_134239[(2)] = null);
(statearr_134106_134239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134104 === (3)))
{var inst_134101 = (state_134103[(2)]);var state_134103__$1 = state_134103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134103__$1,inst_134101);
} else
{if((state_val_134104 === (2)))
{var state_134103__$1 = state_134103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134103__$1,(4),onModelEvent);
} else
{if((state_val_134104 === (1)))
{var state_134103__$1 = state_134103;var statearr_134107_134240 = state_134103__$1;(statearr_134107_134240[(2)] = null);
(statearr_134107_134240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___134238,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134238,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134111 = [null,null,null,null,null,null,null,null];(statearr_134111[(0)] = state_machine__6188__auto__);
(statearr_134111[(1)] = (1));
return statearr_134111;
});
var state_machine__6188__auto____1 = (function (state_134103){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134112){if((e134112 instanceof Object))
{var ex__6191__auto__ = e134112;var statearr_134113_134241 = state_134103;(statearr_134113_134241[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134242 = state_134103;
state_134103 = G__134242;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134103){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134238,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134114 = f__6203__auto__.call(null);(statearr_134114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134238);
return statearr_134114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134238,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134243,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134243,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134133){var state_val_134134 = (state_134133[(1)]);if((state_val_134134 === (5)))
{var inst_134117 = (state_134133[(7)]);var inst_134124 = (state_134133[(8)]);var inst_134128 = (state_134133[(2)]);var tmp134135 = inst_134117;var inst_134117__$1 = tmp134135;var inst_134118 = inst_134124;var state_134133__$1 = (function (){var statearr_134136 = state_134133;(statearr_134136[(7)] = inst_134117__$1);
(statearr_134136[(9)] = inst_134128);
(statearr_134136[(10)] = inst_134118);
return statearr_134136;
})();var statearr_134137_134244 = state_134133__$1;(statearr_134137_134244[(2)] = null);
(statearr_134137_134244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134134 === (4)))
{var inst_134124 = (state_134133[(8)]);var inst_134118 = (state_134133[(10)]);var inst_134122 = (state_134133[(2)]);var inst_134123 = (new Date());var inst_134124__$1 = inst_134123.getTime();var inst_134125 = (inst_134124__$1 - inst_134118);var inst_134126 = (inst_134125 / (1000));var state_134133__$1 = (function (){var statearr_134138 = state_134133;(statearr_134138[(11)] = inst_134122);
(statearr_134138[(8)] = inst_134124__$1);
return statearr_134138;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134133__$1,(5),onTick,inst_134126);
} else
{if((state_val_134134 === (3)))
{var inst_134131 = (state_134133[(2)]);var state_134133__$1 = state_134133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134133__$1,inst_134131);
} else
{if((state_val_134134 === (2)))
{var inst_134117 = (state_134133[(7)]);var inst_134120 = cljs.core.async.timeout.call(null,inst_134117);var state_134133__$1 = state_134133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134133__$1,(4),inst_134120);
} else
{if((state_val_134134 === (1)))
{var inst_134115 = (new Date());var inst_134116 = inst_134115.getTime();var inst_134117 = mspf;var inst_134118 = inst_134116;var state_134133__$1 = (function (){var statearr_134139 = state_134133;(statearr_134139[(7)] = inst_134117);
(statearr_134139[(10)] = inst_134118);
return statearr_134139;
})();var statearr_134140_134245 = state_134133__$1;(statearr_134140_134245[(2)] = null);
(statearr_134140_134245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___134243,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134243,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134144 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_134144[(0)] = state_machine__6188__auto__);
(statearr_134144[(1)] = (1));
return statearr_134144;
});
var state_machine__6188__auto____1 = (function (state_134133){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134145){if((e134145 instanceof Object))
{var ex__6191__auto__ = e134145;var statearr_134146_134246 = state_134133;(statearr_134146_134246[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134247 = state_134133;
state_134133 = G__134247;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134133){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134243,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134147 = f__6203__auto__.call(null);(statearr_134147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134243);
return statearr_134147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134243,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134248 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134201){var state_val_134202 = (state_134201[(1)]);if((state_val_134202 === (7)))
{var inst_134196 = (state_134201[(2)]);var inst_134157 = inst_134196;var state_134201__$1 = (function (){var statearr_134203 = state_134201;(statearr_134203[(7)] = inst_134157);
return statearr_134203;
})();var statearr_134204_134249 = state_134201__$1;(statearr_134204_134249[(2)] = null);
(statearr_134204_134249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (1)))
{var inst_134148 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_134149 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_134150 = cljs.core.List.EMPTY;var inst_134151 = [inst_134150,(200)];var inst_134152 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_134149,inst_134151);var inst_134153 = [(0),(0)];var inst_134154 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134153,null));var inst_134155 = [(0),inst_134152,inst_134154,onModel,gl__$1];var inst_134156 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_134148,inst_134155);var inst_134157 = inst_134156;var state_134201__$1 = (function (){var statearr_134205 = state_134201;(statearr_134205[(7)] = inst_134157);
return statearr_134205;
})();var statearr_134206_134250 = state_134201__$1;(statearr_134206_134250[(2)] = null);
(statearr_134206_134250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (4)))
{var inst_134163 = (state_134201[(8)]);var inst_134165 = (state_134201[(9)]);var inst_134163__$1 = (state_134201[(2)]);var inst_134164 = cljs.core.nth.call(null,inst_134163__$1,(0),null);var inst_134165__$1 = cljs.core.nth.call(null,inst_134163__$1,(1),null);var inst_134169 = cljs.core._EQ_.call(null,onTick,inst_134165__$1);var state_134201__$1 = (function (){var statearr_134207 = state_134201;(statearr_134207[(8)] = inst_134163__$1);
(statearr_134207[(10)] = inst_134164);
(statearr_134207[(9)] = inst_134165__$1);
return statearr_134207;
})();if(inst_134169)
{var statearr_134208_134251 = state_134201__$1;(statearr_134208_134251[(1)] = (5));
} else
{var statearr_134209_134252 = state_134201__$1;(statearr_134209_134252[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (6)))
{var inst_134165 = (state_134201[(9)]);var inst_134187 = cljs.core._EQ_.call(null,onView,inst_134165);var state_134201__$1 = state_134201;if(inst_134187)
{var statearr_134210_134253 = state_134201__$1;(statearr_134210_134253[(1)] = (8));
} else
{var statearr_134211_134254 = state_134201__$1;(statearr_134211_134254[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (3)))
{var inst_134199 = (state_134201[(2)]);var state_134201__$1 = state_134201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134201__$1,inst_134199);
} else
{if((state_val_134202 === (2)))
{var inst_134160 = [onView,onTick];var inst_134161 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134160,null));var state_134201__$1 = state_134201;return cljs.core.async.ioc_alts_BANG_.call(null,state_134201__$1,(4),inst_134161);
} else
{if((state_val_134202 === (9)))
{var inst_134157 = (state_134201[(7)]);var state_134201__$1 = state_134201;var statearr_134212_134255 = state_134201__$1;(statearr_134212_134255[(2)] = inst_134157);
(statearr_134212_134255[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (5)))
{var inst_134157 = (state_134201[(7)]);var inst_134163 = (state_134201[(8)]);var inst_134164 = (state_134201[(10)]);var inst_134165 = (state_134201[(9)]);var inst_134178 = cljs.core.async.chan.call(null,(1));var inst_134179 = (function (){var c__6202__auto____$1 = inst_134178;var expr__134167 = inst_134165;var pred__134166 = cljs.core._EQ_;var ch = inst_134165;var v = inst_134164;var vec__134159 = inst_134163;var ctx = inst_134157;return ((function (c__6202__auto____$1,expr__134167,pred__134166,ch,v,vec__134159,ctx,inst_134157,inst_134163,inst_134164,inst_134165,inst_134178,state_val_134202,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__134167,pred__134166,ch,v,vec__134159,ctx,inst_134157,inst_134163,inst_134164,inst_134165,inst_134178,state_val_134202,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134176){var state_val_134177 = (state_134176[(1)]);if((state_val_134177 === (2)))
{var inst_134174 = (state_134176[(2)]);var state_134176__$1 = state_134176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134176__$1,inst_134174);
} else
{if((state_val_134177 === (1)))
{var inst_134171 = ["tick",v];var inst_134172 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134171,null));var state_134176__$1 = state_134176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134176__$1,(2),onModelEvent,inst_134172);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__134167,pred__134166,ch,v,vec__134159,ctx,inst_134157,inst_134163,inst_134164,inst_134165,inst_134178,state_val_134202,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__134167,pred__134166,ch,v,vec__134159,ctx,inst_134157,inst_134163,inst_134164,inst_134165,inst_134178,state_val_134202,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134216 = [null,null,null,null,null,null,null];(statearr_134216[(0)] = state_machine__6188__auto__);
(statearr_134216[(1)] = (1));
return statearr_134216;
});
var state_machine__6188__auto____1 = (function (state_134176){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134176);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134217){if((e134217 instanceof Object))
{var ex__6191__auto__ = e134217;var statearr_134218_134256 = state_134176;(statearr_134218_134256[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134176);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134257 = state_134176;
state_134176 = G__134257;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134176){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__134167,pred__134166,ch,v,vec__134159,ctx,inst_134157,inst_134163,inst_134164,inst_134165,inst_134178,state_val_134202,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134219 = f__6203__auto__.call(null);(statearr_134219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_134219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__134167,pred__134166,ch,v,vec__134159,ctx,inst_134157,inst_134163,inst_134164,inst_134165,inst_134178,state_val_134202,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_134180 = cljs.core.async.impl.dispatch.run.call(null,inst_134179);var inst_134181 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_134182 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134181,null));var inst_134183 = cljs.core.partial.call(null,tool.particle.update,inst_134164);var inst_134184 = cljs.core.update_in.call(null,inst_134157,inst_134182,inst_134183);var inst_134185 = draw.call(null,inst_134184);var state_134201__$1 = (function (){var statearr_134220 = state_134201;(statearr_134220[(11)] = inst_134180);
return statearr_134220;
})();var statearr_134221_134258 = state_134201__$1;(statearr_134221_134258[(2)] = inst_134185);
(statearr_134221_134258[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (10)))
{var inst_134194 = (state_134201[(2)]);var state_134201__$1 = state_134201;var statearr_134222_134259 = state_134201__$1;(statearr_134222_134259[(2)] = inst_134194);
(statearr_134222_134259[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134202 === (8)))
{var inst_134157 = (state_134201[(7)]);var inst_134164 = (state_134201[(10)]);var inst_134189 = (inst_134164[(0)]);var inst_134190 = (inst_134164[(1)]);var inst_134191 = app.particle.abstract$.onViewCommand.call(null,inst_134189,inst_134190,inst_134157);var state_134201__$1 = state_134201;var statearr_134223_134260 = state_134201__$1;(statearr_134223_134260[(2)] = inst_134191);
(statearr_134223_134260[(1)] = (10));
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
});})(c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134227 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_134227[(0)] = state_machine__6188__auto__);
(statearr_134227[(1)] = (1));
return statearr_134227;
});
var state_machine__6188__auto____1 = (function (state_134201){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134228){if((e134228 instanceof Object))
{var ex__6191__auto__ = e134228;var statearr_134229_134261 = state_134201;(statearr_134229_134261[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134262 = state_134201;
state_134201 = G__134262;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134201){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134230 = f__6203__auto__.call(null);(statearr_134230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134248);
return statearr_134230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134248,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
