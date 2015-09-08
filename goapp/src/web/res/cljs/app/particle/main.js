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
return (function (state_58836){var state_val_58837 = (state_58836[(1)]);if((state_val_58837 === (5)))
{var inst_58834 = (state_58836[(2)]);var state_58836__$1 = state_58836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58836__$1,inst_58834);
} else
{if((state_val_58837 === (4)))
{var inst_58804 = (state_58836[(2)]);var inst_58811 = [(0),(0),(0)];var inst_58812 = [(1),(0),(1),(1)];var inst_58813 = [(10),(20)];var inst_58814 = [(0),(0),(0)];var inst_58815 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_58816 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_58817 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_58818 = [inst_58815,inst_58816,inst_58817];var inst_58819 = {"position":inst_58811,"color":inst_58812,"size":inst_58813,"vel":inst_58814,"tex":"img_map","formulaList":inst_58818};var inst_58820 = [inst_58819];var inst_58821 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_58820};var inst_58822 = [(0),(0),(1),(1)];var inst_58823 = [(30),(10)];var inst_58824 = [(10),(10),(0)];var inst_58825 = [(0),(0),(0)];var inst_58826 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_58827 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_58828 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_58829 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_58830 = [inst_58826,inst_58827,inst_58828,inst_58829];var inst_58831 = {"id":"x1","emit":inst_58821,"color":inst_58822,"size":inst_58823,"pos":inst_58824,"vel":inst_58825,"tex":"img_face","formulaList":inst_58830};var inst_58832 = ["edit-particle",inst_58831];var state_58836__$1 = (function (){var statearr_58838 = state_58836;(statearr_58838[(7)] = inst_58804);
return statearr_58838;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58836__$1,(5),onView,inst_58832);
} else
{if((state_val_58837 === (3)))
{var inst_58801 = (state_58836[(2)]);var inst_58802 = cljs.core.async.timeout.call(null,(1100));var state_58836__$1 = (function (){var statearr_58839 = state_58836;(statearr_58839[(8)] = inst_58801);
return statearr_58839;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58836__$1,(4),inst_58802);
} else
{if((state_val_58837 === (2)))
{var inst_58794 = (state_58836[(2)]);var inst_58797 = [(10),(10),(0)];var inst_58798 = {"id":"x1","pos":inst_58797};var inst_58799 = ["edit-particle",inst_58798];var state_58836__$1 = (function (){var statearr_58840 = state_58836;(statearr_58840[(9)] = inst_58794);
return statearr_58840;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58836__$1,(3),onView,inst_58799);
} else
{if((state_val_58837 === (1)))
{var inst_58792 = cljs.core.async.timeout.call(null,(1000));var state_58836__$1 = state_58836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58836__$1,(2),inst_58792);
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
var state_machine__6188__auto____0 = (function (){var statearr_58844 = [null,null,null,null,null,null,null,null,null,null];(statearr_58844[(0)] = state_machine__6188__auto__);
(statearr_58844[(1)] = (1));
return statearr_58844;
});
var state_machine__6188__auto____1 = (function (state_58836){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58836);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58845){if((e58845 instanceof Object))
{var ex__6191__auto__ = e58845;var statearr_58846_58848 = state_58836;(statearr_58846_58848[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58836);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58849 = state_58836;
state_58836 = G__58849;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58836){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_58847 = f__6203__auto__.call(null);(statearr_58847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_58847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (30)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj59032 = {};return obj59032;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59036){var state_val_59037 = (state_59036[(1)]);if((state_val_59037 === (2)))
{var inst_59034 = (state_59036[(2)]);var state_59036__$1 = state_59036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59036__$1,inst_59034);
} else
{if((state_val_59037 === (1)))
{var state_59036__$1 = state_59036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59036__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59041 = [null,null,null,null,null,null,null];(statearr_59041[(0)] = state_machine__6188__auto__);
(statearr_59041[(1)] = (1));
return statearr_59041;
});
var state_machine__6188__auto____1 = (function (state_59036){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59042){if((e59042 instanceof Object))
{var ex__6191__auto__ = e59042;var statearr_59043_59212 = state_59036;(statearr_59043_59212[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59213 = state_59036;
state_59036 = G__59213;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59036){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59044 = f__6203__auto__.call(null);(statearr_59044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_59044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59214 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59214,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59214,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59058){var state_val_59059 = (state_59058[(1)]);if((state_val_59059 === (4)))
{var inst_59048 = (state_59058[(2)]);var inst_59049 = cljs.core.nth.call(null,inst_59048,(0),null);var inst_59050 = cljs.core.nth.call(null,inst_59048,(1),null);var inst_59051 = cljs.core.nth.call(null,inst_59048,(2),null);var inst_59052 = [inst_59049,inst_59050,inst_59051];var inst_59053 = common.onModel.onNext(inst_59052);var state_59058__$1 = (function (){var statearr_59060 = state_59058;(statearr_59060[(7)] = inst_59053);
return statearr_59060;
})();var statearr_59061_59215 = state_59058__$1;(statearr_59061_59215[(2)] = null);
(statearr_59061_59215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59059 === (3)))
{var inst_59056 = (state_59058[(2)]);var state_59058__$1 = state_59058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59058__$1,inst_59056);
} else
{if((state_val_59059 === (2)))
{var state_59058__$1 = state_59058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59058__$1,(4),onModel);
} else
{if((state_val_59059 === (1)))
{var state_59058__$1 = state_59058;var statearr_59062_59216 = state_59058__$1;(statearr_59062_59216[(2)] = null);
(statearr_59062_59216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___59214,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59214,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59066 = [null,null,null,null,null,null,null,null];(statearr_59066[(0)] = state_machine__6188__auto__);
(statearr_59066[(1)] = (1));
return statearr_59066;
});
var state_machine__6188__auto____1 = (function (state_59058){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59067){if((e59067 instanceof Object))
{var ex__6191__auto__ = e59067;var statearr_59068_59217 = state_59058;(statearr_59068_59217[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59218 = state_59058;
state_59058 = G__59218;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59058){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59214,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59069 = f__6203__auto__.call(null);(statearr_59069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59214);
return statearr_59069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59214,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59219 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59219,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59219,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59082){var state_val_59083 = (state_59082[(1)]);if((state_val_59083 === (4)))
{var inst_59073 = (state_59082[(2)]);var inst_59074 = cljs.core.nth.call(null,inst_59073,(0),null);var inst_59075 = cljs.core.nth.call(null,inst_59073,(1),null);var inst_59076 = [inst_59074,inst_59075];var inst_59077 = common.onModelEvent.onNext(inst_59076);var state_59082__$1 = (function (){var statearr_59084 = state_59082;(statearr_59084[(7)] = inst_59077);
return statearr_59084;
})();var statearr_59085_59220 = state_59082__$1;(statearr_59085_59220[(2)] = null);
(statearr_59085_59220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59083 === (3)))
{var inst_59080 = (state_59082[(2)]);var state_59082__$1 = state_59082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59082__$1,inst_59080);
} else
{if((state_val_59083 === (2)))
{var state_59082__$1 = state_59082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59082__$1,(4),onModelEvent);
} else
{if((state_val_59083 === (1)))
{var state_59082__$1 = state_59082;var statearr_59086_59221 = state_59082__$1;(statearr_59086_59221[(2)] = null);
(statearr_59086_59221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___59219,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59219,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59090 = [null,null,null,null,null,null,null,null];(statearr_59090[(0)] = state_machine__6188__auto__);
(statearr_59090[(1)] = (1));
return statearr_59090;
});
var state_machine__6188__auto____1 = (function (state_59082){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59091){if((e59091 instanceof Object))
{var ex__6191__auto__ = e59091;var statearr_59092_59222 = state_59082;(statearr_59092_59222[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59223 = state_59082;
state_59082 = G__59223;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59082){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59219,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59093 = f__6203__auto__.call(null);(statearr_59093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59219);
return statearr_59093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59219,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59224 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59224,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59224,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59112){var state_val_59113 = (state_59112[(1)]);if((state_val_59113 === (5)))
{var inst_59103 = (state_59112[(7)]);var inst_59096 = (state_59112[(8)]);var inst_59107 = (state_59112[(2)]);var tmp59114 = inst_59096;var inst_59096__$1 = tmp59114;var inst_59097 = inst_59103;var state_59112__$1 = (function (){var statearr_59115 = state_59112;(statearr_59115[(9)] = inst_59097);
(statearr_59115[(8)] = inst_59096__$1);
(statearr_59115[(10)] = inst_59107);
return statearr_59115;
})();var statearr_59116_59225 = state_59112__$1;(statearr_59116_59225[(2)] = null);
(statearr_59116_59225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59113 === (4)))
{var inst_59097 = (state_59112[(9)]);var inst_59103 = (state_59112[(7)]);var inst_59101 = (state_59112[(2)]);var inst_59102 = (new Date());var inst_59103__$1 = inst_59102.getTime();var inst_59104 = (inst_59103__$1 - inst_59097);var inst_59105 = (inst_59104 / (1000));var state_59112__$1 = (function (){var statearr_59117 = state_59112;(statearr_59117[(7)] = inst_59103__$1);
(statearr_59117[(11)] = inst_59101);
return statearr_59117;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59112__$1,(5),onTick,inst_59105);
} else
{if((state_val_59113 === (3)))
{var inst_59110 = (state_59112[(2)]);var state_59112__$1 = state_59112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59112__$1,inst_59110);
} else
{if((state_val_59113 === (2)))
{var inst_59096 = (state_59112[(8)]);var inst_59099 = cljs.core.async.timeout.call(null,inst_59096);var state_59112__$1 = state_59112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59112__$1,(4),inst_59099);
} else
{if((state_val_59113 === (1)))
{var inst_59094 = (new Date());var inst_59095 = inst_59094.getTime();var inst_59096 = mspf;var inst_59097 = inst_59095;var state_59112__$1 = (function (){var statearr_59118 = state_59112;(statearr_59118[(9)] = inst_59097);
(statearr_59118[(8)] = inst_59096);
return statearr_59118;
})();var statearr_59119_59226 = state_59112__$1;(statearr_59119_59226[(2)] = null);
(statearr_59119_59226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___59224,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59224,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59123 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59123[(0)] = state_machine__6188__auto__);
(statearr_59123[(1)] = (1));
return statearr_59123;
});
var state_machine__6188__auto____1 = (function (state_59112){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59124){if((e59124 instanceof Object))
{var ex__6191__auto__ = e59124;var statearr_59125_59227 = state_59112;(statearr_59125_59227[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59228 = state_59112;
state_59112 = G__59228;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59112){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59224,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59126 = f__6203__auto__.call(null);(statearr_59126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59224);
return statearr_59126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59224,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___59229 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59182){var state_val_59183 = (state_59182[(1)]);if((state_val_59183 === (7)))
{var inst_59177 = (state_59182[(2)]);var inst_59138 = inst_59177;var state_59182__$1 = (function (){var statearr_59184 = state_59182;(statearr_59184[(7)] = inst_59138);
return statearr_59184;
})();var statearr_59185_59230 = state_59182__$1;(statearr_59185_59230[(2)] = null);
(statearr_59185_59230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (1)))
{var inst_59127 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_59128 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_59129 = cljs.core.List.EMPTY;var inst_59130 = [inst_59129,(200)];var inst_59131 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59128,inst_59130);var inst_59132 = [0.0,0.5,0.35];var inst_59133 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59132,null));var inst_59134 = [(0),(0)];var inst_59135 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59134,null));var inst_59136 = [inst_59131,inst_59133,inst_59135,onModel,gl__$1];var inst_59137 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_59127,inst_59136);var inst_59138 = inst_59137;var state_59182__$1 = (function (){var statearr_59186 = state_59182;(statearr_59186[(7)] = inst_59138);
return statearr_59186;
})();var statearr_59187_59231 = state_59182__$1;(statearr_59187_59231[(2)] = null);
(statearr_59187_59231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (4)))
{var inst_59146 = (state_59182[(8)]);var inst_59144 = (state_59182[(9)]);var inst_59144__$1 = (state_59182[(2)]);var inst_59145 = cljs.core.nth.call(null,inst_59144__$1,(0),null);var inst_59146__$1 = cljs.core.nth.call(null,inst_59144__$1,(1),null);var inst_59150 = cljs.core._EQ_.call(null,onTick,inst_59146__$1);var state_59182__$1 = (function (){var statearr_59188 = state_59182;(statearr_59188[(10)] = inst_59145);
(statearr_59188[(8)] = inst_59146__$1);
(statearr_59188[(9)] = inst_59144__$1);
return statearr_59188;
})();if(inst_59150)
{var statearr_59189_59232 = state_59182__$1;(statearr_59189_59232[(1)] = (5));
} else
{var statearr_59190_59233 = state_59182__$1;(statearr_59190_59233[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (6)))
{var inst_59146 = (state_59182[(8)]);var inst_59168 = cljs.core._EQ_.call(null,onView,inst_59146);var state_59182__$1 = state_59182;if(inst_59168)
{var statearr_59191_59234 = state_59182__$1;(statearr_59191_59234[(1)] = (8));
} else
{var statearr_59192_59235 = state_59182__$1;(statearr_59192_59235[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (3)))
{var inst_59180 = (state_59182[(2)]);var state_59182__$1 = state_59182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59182__$1,inst_59180);
} else
{if((state_val_59183 === (2)))
{var inst_59141 = [onView,onTick];var inst_59142 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59141,null));var state_59182__$1 = state_59182;return cljs.core.async.ioc_alts_BANG_.call(null,state_59182__$1,(4),inst_59142);
} else
{if((state_val_59183 === (9)))
{var inst_59138 = (state_59182[(7)]);var state_59182__$1 = state_59182;var statearr_59193_59236 = state_59182__$1;(statearr_59193_59236[(2)] = inst_59138);
(statearr_59193_59236[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (5)))
{var inst_59145 = (state_59182[(10)]);var inst_59146 = (state_59182[(8)]);var inst_59138 = (state_59182[(7)]);var inst_59144 = (state_59182[(9)]);var inst_59159 = cljs.core.async.chan.call(null,(1));var inst_59160 = (function (){var c__6202__auto____$1 = inst_59159;var expr__59148 = inst_59146;var pred__59147 = cljs.core._EQ_;var ch = inst_59146;var v = inst_59145;var vec__59140 = inst_59144;var ctx = inst_59138;return ((function (c__6202__auto____$1,expr__59148,pred__59147,ch,v,vec__59140,ctx,inst_59145,inst_59146,inst_59138,inst_59144,inst_59159,state_val_59183,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__59148,pred__59147,ch,v,vec__59140,ctx,inst_59145,inst_59146,inst_59138,inst_59144,inst_59159,state_val_59183,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_59157){var state_val_59158 = (state_59157[(1)]);if((state_val_59158 === (2)))
{var inst_59155 = (state_59157[(2)]);var state_59157__$1 = state_59157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59157__$1,inst_59155);
} else
{if((state_val_59158 === (1)))
{var inst_59152 = ["tick",v];var inst_59153 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59152,null));var state_59157__$1 = state_59157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59157__$1,(2),onModelEvent,inst_59153);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__59148,pred__59147,ch,v,vec__59140,ctx,inst_59145,inst_59146,inst_59138,inst_59144,inst_59159,state_val_59183,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__59148,pred__59147,ch,v,vec__59140,ctx,inst_59145,inst_59146,inst_59138,inst_59144,inst_59159,state_val_59183,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59197 = [null,null,null,null,null,null,null];(statearr_59197[(0)] = state_machine__6188__auto__);
(statearr_59197[(1)] = (1));
return statearr_59197;
});
var state_machine__6188__auto____1 = (function (state_59157){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59198){if((e59198 instanceof Object))
{var ex__6191__auto__ = e59198;var statearr_59199_59237 = state_59157;(statearr_59199_59237[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59238 = state_59157;
state_59157 = G__59238;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59157){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__59148,pred__59147,ch,v,vec__59140,ctx,inst_59145,inst_59146,inst_59138,inst_59144,inst_59159,state_val_59183,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59200 = f__6203__auto__.call(null);(statearr_59200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_59200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__59148,pred__59147,ch,v,vec__59140,ctx,inst_59145,inst_59146,inst_59138,inst_59144,inst_59159,state_val_59183,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_59161 = cljs.core.async.impl.dispatch.run.call(null,inst_59160);var inst_59162 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_59163 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_59162,null));var inst_59164 = cljs.core.partial.call(null,tool.particle.update,inst_59145);var inst_59165 = cljs.core.update_in.call(null,inst_59138,inst_59163,inst_59164);var inst_59166 = draw.call(null,inst_59165);var state_59182__$1 = (function (){var statearr_59201 = state_59182;(statearr_59201[(11)] = inst_59161);
return statearr_59201;
})();var statearr_59202_59239 = state_59182__$1;(statearr_59202_59239[(2)] = inst_59166);
(statearr_59202_59239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (10)))
{var inst_59175 = (state_59182[(2)]);var state_59182__$1 = state_59182;var statearr_59203_59240 = state_59182__$1;(statearr_59203_59240[(2)] = inst_59175);
(statearr_59203_59240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59183 === (8)))
{var inst_59145 = (state_59182[(10)]);var inst_59138 = (state_59182[(7)]);var inst_59170 = (inst_59145[(0)]);var inst_59171 = (inst_59145[(1)]);var inst_59172 = app.particle.abstract$.onViewCommand.call(null,inst_59170,inst_59171,inst_59138);var state_59182__$1 = state_59182;var statearr_59204_59241 = state_59182__$1;(statearr_59204_59241[(2)] = inst_59172);
(statearr_59204_59241[(1)] = (10));
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
});})(c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_59208 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59208[(0)] = state_machine__6188__auto__);
(statearr_59208[(1)] = (1));
return statearr_59208;
});
var state_machine__6188__auto____1 = (function (state_59182){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_59182);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e59209){if((e59209 instanceof Object))
{var ex__6191__auto__ = e59209;var statearr_59210_59242 = state_59182;(statearr_59210_59242[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e59209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59243 = state_59182;
state_59182 = G__59243;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_59182){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_59182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_59211 = f__6203__auto__.call(null);(statearr_59211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___59229);
return statearr_59211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___59229,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
