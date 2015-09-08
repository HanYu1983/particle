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
return (function (state_50621){var state_val_50622 = (state_50621[(1)]);if((state_val_50622 === (5)))
{var inst_50619 = (state_50621[(2)]);var state_50621__$1 = state_50621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50621__$1,inst_50619);
} else
{if((state_val_50622 === (4)))
{var inst_50589 = (state_50621[(2)]);var inst_50596 = [(0),(0),(0)];var inst_50597 = [(1),(0),(1),(1)];var inst_50598 = [(10),(20)];var inst_50599 = [(0),(0),(0)];var inst_50600 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_50601 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_50602 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_50603 = [inst_50600,inst_50601,inst_50602];var inst_50604 = {"position":inst_50596,"color":inst_50597,"size":inst_50598,"vel":inst_50599,"tex":"img_map","formulaList":inst_50603};var inst_50605 = [inst_50604];var inst_50606 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_50605};var inst_50607 = [(0),(0),(1),(1)];var inst_50608 = [(30),(10)];var inst_50609 = [(10),(10),(0)];var inst_50610 = [(0),(0),(0)];var inst_50611 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_50612 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_50613 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_50614 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_50615 = [inst_50611,inst_50612,inst_50613,inst_50614];var inst_50616 = {"id":"x1","emit":inst_50606,"color":inst_50607,"size":inst_50608,"pos":inst_50609,"vel":inst_50610,"tex":"img_face","formulaList":inst_50615};var inst_50617 = ["edit-particle",inst_50616];var state_50621__$1 = (function (){var statearr_50623 = state_50621;(statearr_50623[(7)] = inst_50589);
return statearr_50623;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50621__$1,(5),onView,inst_50617);
} else
{if((state_val_50622 === (3)))
{var inst_50586 = (state_50621[(2)]);var inst_50587 = cljs.core.async.timeout.call(null,(1100));var state_50621__$1 = (function (){var statearr_50624 = state_50621;(statearr_50624[(8)] = inst_50586);
return statearr_50624;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(4),inst_50587);
} else
{if((state_val_50622 === (2)))
{var inst_50579 = (state_50621[(2)]);var inst_50582 = [(10),(10),(0)];var inst_50583 = {"id":"x1","pos":inst_50582};var inst_50584 = ["edit-particle",inst_50583];var state_50621__$1 = (function (){var statearr_50625 = state_50621;(statearr_50625[(9)] = inst_50579);
return statearr_50625;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50621__$1,(3),onView,inst_50584);
} else
{if((state_val_50622 === (1)))
{var inst_50577 = cljs.core.async.timeout.call(null,(1000));var state_50621__$1 = state_50621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50621__$1,(2),inst_50577);
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
var state_machine__6188__auto____0 = (function (){var statearr_50629 = [null,null,null,null,null,null,null,null,null,null];(statearr_50629[(0)] = state_machine__6188__auto__);
(statearr_50629[(1)] = (1));
return statearr_50629;
});
var state_machine__6188__auto____1 = (function (state_50621){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50621);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50630){if((e50630 instanceof Object))
{var ex__6191__auto__ = e50630;var statearr_50631_50633 = state_50621;(statearr_50631_50633[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50634 = state_50621;
state_50621 = G__50634;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50621){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_50632 = f__6203__auto__.call(null);(statearr_50632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj50817 = {};return obj50817;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_50821){var state_val_50822 = (state_50821[(1)]);if((state_val_50822 === (2)))
{var inst_50819 = (state_50821[(2)]);var state_50821__$1 = state_50821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50821__$1,inst_50819);
} else
{if((state_val_50822 === (1)))
{var state_50821__$1 = state_50821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50821__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50826 = [null,null,null,null,null,null,null];(statearr_50826[(0)] = state_machine__6188__auto__);
(statearr_50826[(1)] = (1));
return statearr_50826;
});
var state_machine__6188__auto____1 = (function (state_50821){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50821);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50827){if((e50827 instanceof Object))
{var ex__6191__auto__ = e50827;var statearr_50828_50997 = state_50821;(statearr_50828_50997[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50827;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50998 = state_50821;
state_50821 = G__50998;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50821){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_50829 = f__6203__auto__.call(null);(statearr_50829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_50829;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___50999 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___50999,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___50999,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_50843){var state_val_50844 = (state_50843[(1)]);if((state_val_50844 === (4)))
{var inst_50833 = (state_50843[(2)]);var inst_50834 = cljs.core.nth.call(null,inst_50833,(0),null);var inst_50835 = cljs.core.nth.call(null,inst_50833,(1),null);var inst_50836 = cljs.core.nth.call(null,inst_50833,(2),null);var inst_50837 = [inst_50834,inst_50835,inst_50836];var inst_50838 = common.onModel.onNext(inst_50837);var state_50843__$1 = (function (){var statearr_50845 = state_50843;(statearr_50845[(7)] = inst_50838);
return statearr_50845;
})();var statearr_50846_51000 = state_50843__$1;(statearr_50846_51000[(2)] = null);
(statearr_50846_51000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50844 === (3)))
{var inst_50841 = (state_50843[(2)]);var state_50843__$1 = state_50843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50843__$1,inst_50841);
} else
{if((state_val_50844 === (2)))
{var state_50843__$1 = state_50843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50843__$1,(4),onModel);
} else
{if((state_val_50844 === (1)))
{var state_50843__$1 = state_50843;var statearr_50847_51001 = state_50843__$1;(statearr_50847_51001[(2)] = null);
(statearr_50847_51001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___50999,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___50999,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50851 = [null,null,null,null,null,null,null,null];(statearr_50851[(0)] = state_machine__6188__auto__);
(statearr_50851[(1)] = (1));
return statearr_50851;
});
var state_machine__6188__auto____1 = (function (state_50843){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50843);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50852){if((e50852 instanceof Object))
{var ex__6191__auto__ = e50852;var statearr_50853_51002 = state_50843;(statearr_50853_51002[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51003 = state_50843;
state_50843 = G__51003;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50843){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___50999,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_50854 = f__6203__auto__.call(null);(statearr_50854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___50999);
return statearr_50854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___50999,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51004 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51004,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51004,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_50867){var state_val_50868 = (state_50867[(1)]);if((state_val_50868 === (4)))
{var inst_50858 = (state_50867[(2)]);var inst_50859 = cljs.core.nth.call(null,inst_50858,(0),null);var inst_50860 = cljs.core.nth.call(null,inst_50858,(1),null);var inst_50861 = [inst_50859,inst_50860];var inst_50862 = common.onModelEvent.onNext(inst_50861);var state_50867__$1 = (function (){var statearr_50869 = state_50867;(statearr_50869[(7)] = inst_50862);
return statearr_50869;
})();var statearr_50870_51005 = state_50867__$1;(statearr_50870_51005[(2)] = null);
(statearr_50870_51005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50868 === (3)))
{var inst_50865 = (state_50867[(2)]);var state_50867__$1 = state_50867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50867__$1,inst_50865);
} else
{if((state_val_50868 === (2)))
{var state_50867__$1 = state_50867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(4),onModelEvent);
} else
{if((state_val_50868 === (1)))
{var state_50867__$1 = state_50867;var statearr_50871_51006 = state_50867__$1;(statearr_50871_51006[(2)] = null);
(statearr_50871_51006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___51004,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51004,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50875 = [null,null,null,null,null,null,null,null];(statearr_50875[(0)] = state_machine__6188__auto__);
(statearr_50875[(1)] = (1));
return statearr_50875;
});
var state_machine__6188__auto____1 = (function (state_50867){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50876){if((e50876 instanceof Object))
{var ex__6191__auto__ = e50876;var statearr_50877_51007 = state_50867;(statearr_50877_51007[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51008 = state_50867;
state_50867 = G__51008;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50867){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51004,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_50878 = f__6203__auto__.call(null);(statearr_50878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51004);
return statearr_50878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51004,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51009 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51009,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51009,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_50897){var state_val_50898 = (state_50897[(1)]);if((state_val_50898 === (5)))
{var inst_50881 = (state_50897[(7)]);var inst_50888 = (state_50897[(8)]);var inst_50892 = (state_50897[(2)]);var tmp50899 = inst_50881;var inst_50881__$1 = tmp50899;var inst_50882 = inst_50888;var state_50897__$1 = (function (){var statearr_50900 = state_50897;(statearr_50900[(9)] = inst_50882);
(statearr_50900[(7)] = inst_50881__$1);
(statearr_50900[(10)] = inst_50892);
return statearr_50900;
})();var statearr_50901_51010 = state_50897__$1;(statearr_50901_51010[(2)] = null);
(statearr_50901_51010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50898 === (4)))
{var inst_50882 = (state_50897[(9)]);var inst_50888 = (state_50897[(8)]);var inst_50886 = (state_50897[(2)]);var inst_50887 = (new Date());var inst_50888__$1 = inst_50887.getTime();var inst_50889 = (inst_50888__$1 - inst_50882);var inst_50890 = (inst_50889 / (1000));var state_50897__$1 = (function (){var statearr_50902 = state_50897;(statearr_50902[(11)] = inst_50886);
(statearr_50902[(8)] = inst_50888__$1);
return statearr_50902;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50897__$1,(5),onTick,inst_50890);
} else
{if((state_val_50898 === (3)))
{var inst_50895 = (state_50897[(2)]);var state_50897__$1 = state_50897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50897__$1,inst_50895);
} else
{if((state_val_50898 === (2)))
{var inst_50881 = (state_50897[(7)]);var inst_50884 = cljs.core.async.timeout.call(null,inst_50881);var state_50897__$1 = state_50897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50897__$1,(4),inst_50884);
} else
{if((state_val_50898 === (1)))
{var inst_50879 = (new Date());var inst_50880 = inst_50879.getTime();var inst_50881 = mspf;var inst_50882 = inst_50880;var state_50897__$1 = (function (){var statearr_50903 = state_50897;(statearr_50903[(9)] = inst_50882);
(statearr_50903[(7)] = inst_50881);
return statearr_50903;
})();var statearr_50904_51011 = state_50897__$1;(statearr_50904_51011[(2)] = null);
(statearr_50904_51011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___51009,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51009,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50908 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50908[(0)] = state_machine__6188__auto__);
(statearr_50908[(1)] = (1));
return statearr_50908;
});
var state_machine__6188__auto____1 = (function (state_50897){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50897);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50909){if((e50909 instanceof Object))
{var ex__6191__auto__ = e50909;var statearr_50910_51012 = state_50897;(statearr_50910_51012[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50897);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51013 = state_50897;
state_50897 = G__51013;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50897){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51009,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_50911 = f__6203__auto__.call(null);(statearr_50911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51009);
return statearr_50911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51009,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___51014 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_50967){var state_val_50968 = (state_50967[(1)]);if((state_val_50968 === (7)))
{var inst_50962 = (state_50967[(2)]);var inst_50923 = inst_50962;var state_50967__$1 = (function (){var statearr_50969 = state_50967;(statearr_50969[(7)] = inst_50923);
return statearr_50969;
})();var statearr_50970_51015 = state_50967__$1;(statearr_50970_51015[(2)] = null);
(statearr_50970_51015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (1)))
{var inst_50912 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_50913 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_50914 = cljs.core.List.EMPTY;var inst_50915 = [inst_50914,(200)];var inst_50916 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_50913,inst_50915);var inst_50917 = [0.0,0.5,0.35];var inst_50918 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50917,null));var inst_50919 = [(0),(0)];var inst_50920 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50919,null));var inst_50921 = [inst_50916,inst_50918,inst_50920,onModel,gl__$1];var inst_50922 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_50912,inst_50921);var inst_50923 = inst_50922;var state_50967__$1 = (function (){var statearr_50971 = state_50967;(statearr_50971[(7)] = inst_50923);
return statearr_50971;
})();var statearr_50972_51016 = state_50967__$1;(statearr_50972_51016[(2)] = null);
(statearr_50972_51016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (4)))
{var inst_50929 = (state_50967[(8)]);var inst_50931 = (state_50967[(9)]);var inst_50929__$1 = (state_50967[(2)]);var inst_50930 = cljs.core.nth.call(null,inst_50929__$1,(0),null);var inst_50931__$1 = cljs.core.nth.call(null,inst_50929__$1,(1),null);var inst_50935 = cljs.core._EQ_.call(null,onTick,inst_50931__$1);var state_50967__$1 = (function (){var statearr_50973 = state_50967;(statearr_50973[(10)] = inst_50930);
(statearr_50973[(8)] = inst_50929__$1);
(statearr_50973[(9)] = inst_50931__$1);
return statearr_50973;
})();if(inst_50935)
{var statearr_50974_51017 = state_50967__$1;(statearr_50974_51017[(1)] = (5));
} else
{var statearr_50975_51018 = state_50967__$1;(statearr_50975_51018[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (6)))
{var inst_50931 = (state_50967[(9)]);var inst_50953 = cljs.core._EQ_.call(null,onView,inst_50931);var state_50967__$1 = state_50967;if(inst_50953)
{var statearr_50976_51019 = state_50967__$1;(statearr_50976_51019[(1)] = (8));
} else
{var statearr_50977_51020 = state_50967__$1;(statearr_50977_51020[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (3)))
{var inst_50965 = (state_50967[(2)]);var state_50967__$1 = state_50967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50967__$1,inst_50965);
} else
{if((state_val_50968 === (2)))
{var inst_50926 = [onView,onTick];var inst_50927 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50926,null));var state_50967__$1 = state_50967;return cljs.core.async.ioc_alts_BANG_.call(null,state_50967__$1,(4),inst_50927);
} else
{if((state_val_50968 === (9)))
{var inst_50923 = (state_50967[(7)]);var state_50967__$1 = state_50967;var statearr_50978_51021 = state_50967__$1;(statearr_50978_51021[(2)] = inst_50923);
(statearr_50978_51021[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (5)))
{var inst_50930 = (state_50967[(10)]);var inst_50929 = (state_50967[(8)]);var inst_50931 = (state_50967[(9)]);var inst_50923 = (state_50967[(7)]);var inst_50944 = cljs.core.async.chan.call(null,(1));var inst_50945 = (function (){var c__6202__auto____$1 = inst_50944;var expr__50933 = inst_50931;var pred__50932 = cljs.core._EQ_;var ch = inst_50931;var v = inst_50930;var vec__50925 = inst_50929;var ctx = inst_50923;return ((function (c__6202__auto____$1,expr__50933,pred__50932,ch,v,vec__50925,ctx,inst_50930,inst_50929,inst_50931,inst_50923,inst_50944,state_val_50968,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__50933,pred__50932,ch,v,vec__50925,ctx,inst_50930,inst_50929,inst_50931,inst_50923,inst_50944,state_val_50968,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_50942){var state_val_50943 = (state_50942[(1)]);if((state_val_50943 === (2)))
{var inst_50940 = (state_50942[(2)]);var state_50942__$1 = state_50942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50942__$1,inst_50940);
} else
{if((state_val_50943 === (1)))
{var inst_50937 = ["tick",v];var inst_50938 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50937,null));var state_50942__$1 = state_50942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50942__$1,(2),onModelEvent,inst_50938);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__50933,pred__50932,ch,v,vec__50925,ctx,inst_50930,inst_50929,inst_50931,inst_50923,inst_50944,state_val_50968,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__50933,pred__50932,ch,v,vec__50925,ctx,inst_50930,inst_50929,inst_50931,inst_50923,inst_50944,state_val_50968,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50982 = [null,null,null,null,null,null,null];(statearr_50982[(0)] = state_machine__6188__auto__);
(statearr_50982[(1)] = (1));
return statearr_50982;
});
var state_machine__6188__auto____1 = (function (state_50942){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50983){if((e50983 instanceof Object))
{var ex__6191__auto__ = e50983;var statearr_50984_51022 = state_50942;(statearr_50984_51022[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51023 = state_50942;
state_50942 = G__51023;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50942){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__50933,pred__50932,ch,v,vec__50925,ctx,inst_50930,inst_50929,inst_50931,inst_50923,inst_50944,state_val_50968,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_50985 = f__6203__auto__.call(null);(statearr_50985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_50985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__50933,pred__50932,ch,v,vec__50925,ctx,inst_50930,inst_50929,inst_50931,inst_50923,inst_50944,state_val_50968,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_50946 = cljs.core.async.impl.dispatch.run.call(null,inst_50945);var inst_50947 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_50948 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50947,null));var inst_50949 = cljs.core.partial.call(null,tool.particle.update,inst_50930);var inst_50950 = cljs.core.update_in.call(null,inst_50923,inst_50948,inst_50949);var inst_50951 = draw.call(null,inst_50950);var state_50967__$1 = (function (){var statearr_50986 = state_50967;(statearr_50986[(11)] = inst_50946);
return statearr_50986;
})();var statearr_50987_51024 = state_50967__$1;(statearr_50987_51024[(2)] = inst_50951);
(statearr_50987_51024[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (10)))
{var inst_50960 = (state_50967[(2)]);var state_50967__$1 = state_50967;var statearr_50988_51025 = state_50967__$1;(statearr_50988_51025[(2)] = inst_50960);
(statearr_50988_51025[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50968 === (8)))
{var inst_50930 = (state_50967[(10)]);var inst_50923 = (state_50967[(7)]);var inst_50955 = (inst_50930[(0)]);var inst_50956 = (inst_50930[(1)]);var inst_50957 = app.particle.abstract$.onViewCommand.call(null,inst_50955,inst_50956,inst_50923);var state_50967__$1 = state_50967;var statearr_50989_51026 = state_50967__$1;(statearr_50989_51026[(2)] = inst_50957);
(statearr_50989_51026[(1)] = (10));
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
});})(c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_50993 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50993[(0)] = state_machine__6188__auto__);
(statearr_50993[(1)] = (1));
return statearr_50993;
});
var state_machine__6188__auto____1 = (function (state_50967){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_50967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e50994){if((e50994 instanceof Object))
{var ex__6191__auto__ = e50994;var statearr_50995_51027 = state_50967;(statearr_50995_51027[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51028 = state_50967;
state_50967 = G__51028;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_50967){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_50967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_50996 = f__6203__auto__.call(null);(statearr_50996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___51014);
return statearr_50996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___51014,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
