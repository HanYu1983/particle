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
return (function (state_56804){var state_val_56805 = (state_56804[(1)]);if((state_val_56805 === (5)))
{var inst_56802 = (state_56804[(2)]);var state_56804__$1 = state_56804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56804__$1,inst_56802);
} else
{if((state_val_56805 === (4)))
{var inst_56772 = (state_56804[(2)]);var inst_56779 = [(0),(0),(0)];var inst_56780 = [(1),(0),(1),(1)];var inst_56781 = [(10),(20)];var inst_56782 = [(0),(0),(0)];var inst_56783 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_56784 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_56785 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_56786 = [inst_56783,inst_56784,inst_56785];var inst_56787 = {"position":inst_56779,"color":inst_56780,"size":inst_56781,"vel":inst_56782,"tex":"img_map","formulaList":inst_56786};var inst_56788 = [inst_56787];var inst_56789 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_56788};var inst_56790 = [(0),(0),(1),(1)];var inst_56791 = [(30),(10)];var inst_56792 = [(10),(10),(0)];var inst_56793 = [(0),(0),(0)];var inst_56794 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_56795 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_56796 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_56797 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_56798 = [inst_56794,inst_56795,inst_56796,inst_56797];var inst_56799 = {"id":"x1","emit":inst_56789,"color":inst_56790,"size":inst_56791,"pos":inst_56792,"vel":inst_56793,"tex":"img_face","formulaList":inst_56798};var inst_56800 = ["edit-particle",inst_56799];var state_56804__$1 = (function (){var statearr_56806 = state_56804;(statearr_56806[(7)] = inst_56772);
return statearr_56806;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56804__$1,(5),onView,inst_56800);
} else
{if((state_val_56805 === (3)))
{var inst_56769 = (state_56804[(2)]);var inst_56770 = cljs.core.async.timeout.call(null,(1100));var state_56804__$1 = (function (){var statearr_56807 = state_56804;(statearr_56807[(8)] = inst_56769);
return statearr_56807;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56804__$1,(4),inst_56770);
} else
{if((state_val_56805 === (2)))
{var inst_56762 = (state_56804[(2)]);var inst_56765 = [(10),(10),(0)];var inst_56766 = {"id":"x1","pos":inst_56765};var inst_56767 = ["edit-particle",inst_56766];var state_56804__$1 = (function (){var statearr_56808 = state_56804;(statearr_56808[(9)] = inst_56762);
return statearr_56808;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56804__$1,(3),onView,inst_56767);
} else
{if((state_val_56805 === (1)))
{var inst_56760 = cljs.core.async.timeout.call(null,(1000));var state_56804__$1 = state_56804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56804__$1,(2),inst_56760);
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
var state_machine__6188__auto____0 = (function (){var statearr_56812 = [null,null,null,null,null,null,null,null,null,null];(statearr_56812[(0)] = state_machine__6188__auto__);
(statearr_56812[(1)] = (1));
return statearr_56812;
});
var state_machine__6188__auto____1 = (function (state_56804){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_56804);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e56813){if((e56813 instanceof Object))
{var ex__6191__auto__ = e56813;var statearr_56814_56816 = state_56804;(statearr_56814_56816[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56817 = state_56804;
state_56804 = G__56817;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_56804){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_56804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_56815 = f__6203__auto__.call(null);(statearr_56815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_56815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj57000 = {};return obj57000;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57004){var state_val_57005 = (state_57004[(1)]);if((state_val_57005 === (2)))
{var inst_57002 = (state_57004[(2)]);var state_57004__$1 = state_57004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57004__$1,inst_57002);
} else
{if((state_val_57005 === (1)))
{var state_57004__$1 = state_57004;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57004__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57009 = [null,null,null,null,null,null,null];(statearr_57009[(0)] = state_machine__6188__auto__);
(statearr_57009[(1)] = (1));
return statearr_57009;
});
var state_machine__6188__auto____1 = (function (state_57004){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57004);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57010){if((e57010 instanceof Object))
{var ex__6191__auto__ = e57010;var statearr_57011_57180 = state_57004;(statearr_57011_57180[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57004);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57181 = state_57004;
state_57004 = G__57181;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57004){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57012 = f__6203__auto__.call(null);(statearr_57012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57182,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57182,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57026){var state_val_57027 = (state_57026[(1)]);if((state_val_57027 === (4)))
{var inst_57016 = (state_57026[(2)]);var inst_57017 = cljs.core.nth.call(null,inst_57016,(0),null);var inst_57018 = cljs.core.nth.call(null,inst_57016,(1),null);var inst_57019 = cljs.core.nth.call(null,inst_57016,(2),null);var inst_57020 = [inst_57017,inst_57018,inst_57019];var inst_57021 = common.onModel.onNext(inst_57020);var state_57026__$1 = (function (){var statearr_57028 = state_57026;(statearr_57028[(7)] = inst_57021);
return statearr_57028;
})();var statearr_57029_57183 = state_57026__$1;(statearr_57029_57183[(2)] = null);
(statearr_57029_57183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57027 === (3)))
{var inst_57024 = (state_57026[(2)]);var state_57026__$1 = state_57026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57026__$1,inst_57024);
} else
{if((state_val_57027 === (2)))
{var state_57026__$1 = state_57026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57026__$1,(4),onModel);
} else
{if((state_val_57027 === (1)))
{var state_57026__$1 = state_57026;var statearr_57030_57184 = state_57026__$1;(statearr_57030_57184[(2)] = null);
(statearr_57030_57184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___57182,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57182,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57034 = [null,null,null,null,null,null,null,null];(statearr_57034[(0)] = state_machine__6188__auto__);
(statearr_57034[(1)] = (1));
return statearr_57034;
});
var state_machine__6188__auto____1 = (function (state_57026){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57035){if((e57035 instanceof Object))
{var ex__6191__auto__ = e57035;var statearr_57036_57185 = state_57026;(statearr_57036_57185[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57186 = state_57026;
state_57026 = G__57186;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57026){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57182,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57037 = f__6203__auto__.call(null);(statearr_57037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57182);
return statearr_57037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57182,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57187,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57187,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57050){var state_val_57051 = (state_57050[(1)]);if((state_val_57051 === (4)))
{var inst_57041 = (state_57050[(2)]);var inst_57042 = cljs.core.nth.call(null,inst_57041,(0),null);var inst_57043 = cljs.core.nth.call(null,inst_57041,(1),null);var inst_57044 = [inst_57042,inst_57043];var inst_57045 = common.onModelEvent.onNext(inst_57044);var state_57050__$1 = (function (){var statearr_57052 = state_57050;(statearr_57052[(7)] = inst_57045);
return statearr_57052;
})();var statearr_57053_57188 = state_57050__$1;(statearr_57053_57188[(2)] = null);
(statearr_57053_57188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57051 === (3)))
{var inst_57048 = (state_57050[(2)]);var state_57050__$1 = state_57050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57050__$1,inst_57048);
} else
{if((state_val_57051 === (2)))
{var state_57050__$1 = state_57050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57050__$1,(4),onModelEvent);
} else
{if((state_val_57051 === (1)))
{var state_57050__$1 = state_57050;var statearr_57054_57189 = state_57050__$1;(statearr_57054_57189[(2)] = null);
(statearr_57054_57189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___57187,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57187,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57058 = [null,null,null,null,null,null,null,null];(statearr_57058[(0)] = state_machine__6188__auto__);
(statearr_57058[(1)] = (1));
return statearr_57058;
});
var state_machine__6188__auto____1 = (function (state_57050){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57050);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57059){if((e57059 instanceof Object))
{var ex__6191__auto__ = e57059;var statearr_57060_57190 = state_57050;(statearr_57060_57190[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57191 = state_57050;
state_57050 = G__57191;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57050){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57187,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57061 = f__6203__auto__.call(null);(statearr_57061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57187);
return statearr_57061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57187,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57192 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57192,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57192,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57080){var state_val_57081 = (state_57080[(1)]);if((state_val_57081 === (5)))
{var inst_57064 = (state_57080[(7)]);var inst_57071 = (state_57080[(8)]);var inst_57075 = (state_57080[(2)]);var tmp57082 = inst_57064;var inst_57064__$1 = tmp57082;var inst_57065 = inst_57071;var state_57080__$1 = (function (){var statearr_57083 = state_57080;(statearr_57083[(7)] = inst_57064__$1);
(statearr_57083[(9)] = inst_57075);
(statearr_57083[(10)] = inst_57065);
return statearr_57083;
})();var statearr_57084_57193 = state_57080__$1;(statearr_57084_57193[(2)] = null);
(statearr_57084_57193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57081 === (4)))
{var inst_57071 = (state_57080[(8)]);var inst_57065 = (state_57080[(10)]);var inst_57069 = (state_57080[(2)]);var inst_57070 = (new Date());var inst_57071__$1 = inst_57070.getTime();var inst_57072 = (inst_57071__$1 - inst_57065);var inst_57073 = (inst_57072 / (1000));var state_57080__$1 = (function (){var statearr_57085 = state_57080;(statearr_57085[(11)] = inst_57069);
(statearr_57085[(8)] = inst_57071__$1);
return statearr_57085;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57080__$1,(5),onTick,inst_57073);
} else
{if((state_val_57081 === (3)))
{var inst_57078 = (state_57080[(2)]);var state_57080__$1 = state_57080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57080__$1,inst_57078);
} else
{if((state_val_57081 === (2)))
{var inst_57064 = (state_57080[(7)]);var inst_57067 = cljs.core.async.timeout.call(null,inst_57064);var state_57080__$1 = state_57080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57080__$1,(4),inst_57067);
} else
{if((state_val_57081 === (1)))
{var inst_57062 = (new Date());var inst_57063 = inst_57062.getTime();var inst_57064 = mspf;var inst_57065 = inst_57063;var state_57080__$1 = (function (){var statearr_57086 = state_57080;(statearr_57086[(7)] = inst_57064);
(statearr_57086[(10)] = inst_57065);
return statearr_57086;
})();var statearr_57087_57194 = state_57080__$1;(statearr_57087_57194[(2)] = null);
(statearr_57087_57194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___57192,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57192,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57091 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57091[(0)] = state_machine__6188__auto__);
(statearr_57091[(1)] = (1));
return statearr_57091;
});
var state_machine__6188__auto____1 = (function (state_57080){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57080);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57092){if((e57092 instanceof Object))
{var ex__6191__auto__ = e57092;var statearr_57093_57195 = state_57080;(statearr_57093_57195[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57196 = state_57080;
state_57080 = G__57196;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57080){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57192,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57094 = f__6203__auto__.call(null);(statearr_57094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57192);
return statearr_57094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57192,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___57197 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57150){var state_val_57151 = (state_57150[(1)]);if((state_val_57151 === (7)))
{var inst_57145 = (state_57150[(2)]);var inst_57106 = inst_57145;var state_57150__$1 = (function (){var statearr_57152 = state_57150;(statearr_57152[(7)] = inst_57106);
return statearr_57152;
})();var statearr_57153_57198 = state_57150__$1;(statearr_57153_57198[(2)] = null);
(statearr_57153_57198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (1)))
{var inst_57095 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_57096 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_57097 = cljs.core.List.EMPTY;var inst_57098 = [inst_57097,(200)];var inst_57099 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_57096,inst_57098);var inst_57100 = [0.0,0.5,0.35];var inst_57101 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57100,null));var inst_57102 = [(0),(0)];var inst_57103 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57102,null));var inst_57104 = [inst_57099,inst_57101,inst_57103,onModel,gl__$1];var inst_57105 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_57095,inst_57104);var inst_57106 = inst_57105;var state_57150__$1 = (function (){var statearr_57154 = state_57150;(statearr_57154[(7)] = inst_57106);
return statearr_57154;
})();var statearr_57155_57199 = state_57150__$1;(statearr_57155_57199[(2)] = null);
(statearr_57155_57199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (4)))
{var inst_57114 = (state_57150[(8)]);var inst_57112 = (state_57150[(9)]);var inst_57112__$1 = (state_57150[(2)]);var inst_57113 = cljs.core.nth.call(null,inst_57112__$1,(0),null);var inst_57114__$1 = cljs.core.nth.call(null,inst_57112__$1,(1),null);var inst_57118 = cljs.core._EQ_.call(null,onTick,inst_57114__$1);var state_57150__$1 = (function (){var statearr_57156 = state_57150;(statearr_57156[(10)] = inst_57113);
(statearr_57156[(8)] = inst_57114__$1);
(statearr_57156[(9)] = inst_57112__$1);
return statearr_57156;
})();if(inst_57118)
{var statearr_57157_57200 = state_57150__$1;(statearr_57157_57200[(1)] = (5));
} else
{var statearr_57158_57201 = state_57150__$1;(statearr_57158_57201[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (6)))
{var inst_57114 = (state_57150[(8)]);var inst_57136 = cljs.core._EQ_.call(null,onView,inst_57114);var state_57150__$1 = state_57150;if(inst_57136)
{var statearr_57159_57202 = state_57150__$1;(statearr_57159_57202[(1)] = (8));
} else
{var statearr_57160_57203 = state_57150__$1;(statearr_57160_57203[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (3)))
{var inst_57148 = (state_57150[(2)]);var state_57150__$1 = state_57150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57150__$1,inst_57148);
} else
{if((state_val_57151 === (2)))
{var inst_57109 = [onView,onTick];var inst_57110 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57109,null));var state_57150__$1 = state_57150;return cljs.core.async.ioc_alts_BANG_.call(null,state_57150__$1,(4),inst_57110);
} else
{if((state_val_57151 === (9)))
{var inst_57106 = (state_57150[(7)]);var state_57150__$1 = state_57150;var statearr_57161_57204 = state_57150__$1;(statearr_57161_57204[(2)] = inst_57106);
(statearr_57161_57204[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (5)))
{var inst_57113 = (state_57150[(10)]);var inst_57106 = (state_57150[(7)]);var inst_57114 = (state_57150[(8)]);var inst_57112 = (state_57150[(9)]);var inst_57127 = cljs.core.async.chan.call(null,(1));var inst_57128 = (function (){var c__6202__auto____$1 = inst_57127;var expr__57116 = inst_57114;var pred__57115 = cljs.core._EQ_;var ch = inst_57114;var v = inst_57113;var vec__57108 = inst_57112;var ctx = inst_57106;return ((function (c__6202__auto____$1,expr__57116,pred__57115,ch,v,vec__57108,ctx,inst_57113,inst_57106,inst_57114,inst_57112,inst_57127,state_val_57151,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__57116,pred__57115,ch,v,vec__57108,ctx,inst_57113,inst_57106,inst_57114,inst_57112,inst_57127,state_val_57151,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_57125){var state_val_57126 = (state_57125[(1)]);if((state_val_57126 === (2)))
{var inst_57123 = (state_57125[(2)]);var state_57125__$1 = state_57125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57125__$1,inst_57123);
} else
{if((state_val_57126 === (1)))
{var inst_57120 = ["tick",v];var inst_57121 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57120,null));var state_57125__$1 = state_57125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57125__$1,(2),onModelEvent,inst_57121);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__57116,pred__57115,ch,v,vec__57108,ctx,inst_57113,inst_57106,inst_57114,inst_57112,inst_57127,state_val_57151,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__57116,pred__57115,ch,v,vec__57108,ctx,inst_57113,inst_57106,inst_57114,inst_57112,inst_57127,state_val_57151,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57165 = [null,null,null,null,null,null,null];(statearr_57165[(0)] = state_machine__6188__auto__);
(statearr_57165[(1)] = (1));
return statearr_57165;
});
var state_machine__6188__auto____1 = (function (state_57125){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57166){if((e57166 instanceof Object))
{var ex__6191__auto__ = e57166;var statearr_57167_57205 = state_57125;(statearr_57167_57205[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57206 = state_57125;
state_57125 = G__57206;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57125){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__57116,pred__57115,ch,v,vec__57108,ctx,inst_57113,inst_57106,inst_57114,inst_57112,inst_57127,state_val_57151,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57168 = f__6203__auto__.call(null);(statearr_57168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_57168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__57116,pred__57115,ch,v,vec__57108,ctx,inst_57113,inst_57106,inst_57114,inst_57112,inst_57127,state_val_57151,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_57129 = cljs.core.async.impl.dispatch.run.call(null,inst_57128);var inst_57130 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_57131 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57130,null));var inst_57132 = cljs.core.partial.call(null,tool.particle.update,inst_57113);var inst_57133 = cljs.core.update_in.call(null,inst_57106,inst_57131,inst_57132);var inst_57134 = draw.call(null,inst_57133);var state_57150__$1 = (function (){var statearr_57169 = state_57150;(statearr_57169[(11)] = inst_57129);
return statearr_57169;
})();var statearr_57170_57207 = state_57150__$1;(statearr_57170_57207[(2)] = inst_57134);
(statearr_57170_57207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (10)))
{var inst_57143 = (state_57150[(2)]);var state_57150__$1 = state_57150;var statearr_57171_57208 = state_57150__$1;(statearr_57171_57208[(2)] = inst_57143);
(statearr_57171_57208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57151 === (8)))
{var inst_57113 = (state_57150[(10)]);var inst_57106 = (state_57150[(7)]);var inst_57138 = (inst_57113[(0)]);var inst_57139 = (inst_57113[(1)]);var inst_57140 = app.particle.abstract$.onViewCommand.call(null,inst_57138,inst_57139,inst_57106);var state_57150__$1 = state_57150;var statearr_57172_57209 = state_57150__$1;(statearr_57172_57209[(2)] = inst_57140);
(statearr_57172_57209[(1)] = (10));
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
});})(c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57176 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57176[(0)] = state_machine__6188__auto__);
(statearr_57176[(1)] = (1));
return statearr_57176;
});
var state_machine__6188__auto____1 = (function (state_57150){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57150);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57177){if((e57177 instanceof Object))
{var ex__6191__auto__ = e57177;var statearr_57178_57210 = state_57150;(statearr_57178_57210[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57211 = state_57150;
state_57150 = G__57211;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57150){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_57179 = f__6203__auto__.call(null);(statearr_57179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57197);
return statearr_57179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57197,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
