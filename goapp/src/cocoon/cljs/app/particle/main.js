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
return (function (state_57820){var state_val_57821 = (state_57820[(1)]);if((state_val_57821 === (5)))
{var inst_57818 = (state_57820[(2)]);var state_57820__$1 = state_57820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57820__$1,inst_57818);
} else
{if((state_val_57821 === (4)))
{var inst_57788 = (state_57820[(2)]);var inst_57795 = [(0),(0),(0)];var inst_57796 = [(1),(0),(1),(1)];var inst_57797 = [(10),(20)];var inst_57798 = [(0),(0),(0)];var inst_57799 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_57800 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_57801 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_57802 = [inst_57799,inst_57800,inst_57801];var inst_57803 = {"position":inst_57795,"color":inst_57796,"size":inst_57797,"vel":inst_57798,"tex":"img_map","formulaList":inst_57802};var inst_57804 = [inst_57803];var inst_57805 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_57804};var inst_57806 = [(0),(0),(1),(1)];var inst_57807 = [(30),(10)];var inst_57808 = [(10),(10),(0)];var inst_57809 = [(0),(0),(0)];var inst_57810 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_57811 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_57812 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_57813 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_57814 = [inst_57810,inst_57811,inst_57812,inst_57813];var inst_57815 = {"id":"x1","emit":inst_57805,"color":inst_57806,"size":inst_57807,"pos":inst_57808,"vel":inst_57809,"tex":"img_face","formulaList":inst_57814};var inst_57816 = ["edit-particle",inst_57815];var state_57820__$1 = (function (){var statearr_57822 = state_57820;(statearr_57822[(7)] = inst_57788);
return statearr_57822;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57820__$1,(5),onView,inst_57816);
} else
{if((state_val_57821 === (3)))
{var inst_57785 = (state_57820[(2)]);var inst_57786 = cljs.core.async.timeout.call(null,(1100));var state_57820__$1 = (function (){var statearr_57823 = state_57820;(statearr_57823[(8)] = inst_57785);
return statearr_57823;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57820__$1,(4),inst_57786);
} else
{if((state_val_57821 === (2)))
{var inst_57778 = (state_57820[(2)]);var inst_57781 = [(10),(10),(0)];var inst_57782 = {"id":"x1","pos":inst_57781};var inst_57783 = ["edit-particle",inst_57782];var state_57820__$1 = (function (){var statearr_57824 = state_57820;(statearr_57824[(9)] = inst_57778);
return statearr_57824;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57820__$1,(3),onView,inst_57783);
} else
{if((state_val_57821 === (1)))
{var inst_57776 = cljs.core.async.timeout.call(null,(1000));var state_57820__$1 = state_57820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57820__$1,(2),inst_57776);
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
var state_machine__6188__auto____0 = (function (){var statearr_57828 = [null,null,null,null,null,null,null,null,null,null];(statearr_57828[(0)] = state_machine__6188__auto__);
(statearr_57828[(1)] = (1));
return statearr_57828;
});
var state_machine__6188__auto____1 = (function (state_57820){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57820);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57829){if((e57829 instanceof Object))
{var ex__6191__auto__ = e57829;var statearr_57830_57832 = state_57820;(statearr_57830_57832[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57820);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57833 = state_57820;
state_57820 = G__57833;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57820){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_57831 = f__6203__auto__.call(null);(statearr_57831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj58016 = {};return obj58016;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58020){var state_val_58021 = (state_58020[(1)]);if((state_val_58021 === (2)))
{var inst_58018 = (state_58020[(2)]);var state_58020__$1 = state_58020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58020__$1,inst_58018);
} else
{if((state_val_58021 === (1)))
{var state_58020__$1 = state_58020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58020__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58025 = [null,null,null,null,null,null,null];(statearr_58025[(0)] = state_machine__6188__auto__);
(statearr_58025[(1)] = (1));
return statearr_58025;
});
var state_machine__6188__auto____1 = (function (state_58020){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58026){if((e58026 instanceof Object))
{var ex__6191__auto__ = e58026;var statearr_58027_58196 = state_58020;(statearr_58027_58196[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58197 = state_58020;
state_58020 = G__58197;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58020){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58028 = f__6203__auto__.call(null);(statearr_58028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_58028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58198 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58198,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58198,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58042){var state_val_58043 = (state_58042[(1)]);if((state_val_58043 === (4)))
{var inst_58032 = (state_58042[(2)]);var inst_58033 = cljs.core.nth.call(null,inst_58032,(0),null);var inst_58034 = cljs.core.nth.call(null,inst_58032,(1),null);var inst_58035 = cljs.core.nth.call(null,inst_58032,(2),null);var inst_58036 = [inst_58033,inst_58034,inst_58035];var inst_58037 = common.onModel.onNext(inst_58036);var state_58042__$1 = (function (){var statearr_58044 = state_58042;(statearr_58044[(7)] = inst_58037);
return statearr_58044;
})();var statearr_58045_58199 = state_58042__$1;(statearr_58045_58199[(2)] = null);
(statearr_58045_58199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58043 === (3)))
{var inst_58040 = (state_58042[(2)]);var state_58042__$1 = state_58042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58042__$1,inst_58040);
} else
{if((state_val_58043 === (2)))
{var state_58042__$1 = state_58042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58042__$1,(4),onModel);
} else
{if((state_val_58043 === (1)))
{var state_58042__$1 = state_58042;var statearr_58046_58200 = state_58042__$1;(statearr_58046_58200[(2)] = null);
(statearr_58046_58200[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___58198,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58198,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58050 = [null,null,null,null,null,null,null,null];(statearr_58050[(0)] = state_machine__6188__auto__);
(statearr_58050[(1)] = (1));
return statearr_58050;
});
var state_machine__6188__auto____1 = (function (state_58042){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58042);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58051){if((e58051 instanceof Object))
{var ex__6191__auto__ = e58051;var statearr_58052_58201 = state_58042;(statearr_58052_58201[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58202 = state_58042;
state_58042 = G__58202;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58042){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58198,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58053 = f__6203__auto__.call(null);(statearr_58053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58198);
return statearr_58053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58198,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58203 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58203,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58203,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58066){var state_val_58067 = (state_58066[(1)]);if((state_val_58067 === (4)))
{var inst_58057 = (state_58066[(2)]);var inst_58058 = cljs.core.nth.call(null,inst_58057,(0),null);var inst_58059 = cljs.core.nth.call(null,inst_58057,(1),null);var inst_58060 = [inst_58058,inst_58059];var inst_58061 = common.onModelEvent.onNext(inst_58060);var state_58066__$1 = (function (){var statearr_58068 = state_58066;(statearr_58068[(7)] = inst_58061);
return statearr_58068;
})();var statearr_58069_58204 = state_58066__$1;(statearr_58069_58204[(2)] = null);
(statearr_58069_58204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58067 === (3)))
{var inst_58064 = (state_58066[(2)]);var state_58066__$1 = state_58066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58066__$1,inst_58064);
} else
{if((state_val_58067 === (2)))
{var state_58066__$1 = state_58066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58066__$1,(4),onModelEvent);
} else
{if((state_val_58067 === (1)))
{var state_58066__$1 = state_58066;var statearr_58070_58205 = state_58066__$1;(statearr_58070_58205[(2)] = null);
(statearr_58070_58205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___58203,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58203,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58074 = [null,null,null,null,null,null,null,null];(statearr_58074[(0)] = state_machine__6188__auto__);
(statearr_58074[(1)] = (1));
return statearr_58074;
});
var state_machine__6188__auto____1 = (function (state_58066){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58066);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58075){if((e58075 instanceof Object))
{var ex__6191__auto__ = e58075;var statearr_58076_58206 = state_58066;(statearr_58076_58206[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58066);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58207 = state_58066;
state_58066 = G__58207;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58066){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58203,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58077 = f__6203__auto__.call(null);(statearr_58077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58203);
return statearr_58077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58203,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58208 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58208,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58208,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58096){var state_val_58097 = (state_58096[(1)]);if((state_val_58097 === (5)))
{var inst_58080 = (state_58096[(7)]);var inst_58087 = (state_58096[(8)]);var inst_58091 = (state_58096[(2)]);var tmp58098 = inst_58080;var inst_58080__$1 = tmp58098;var inst_58081 = inst_58087;var state_58096__$1 = (function (){var statearr_58099 = state_58096;(statearr_58099[(9)] = inst_58091);
(statearr_58099[(10)] = inst_58081);
(statearr_58099[(7)] = inst_58080__$1);
return statearr_58099;
})();var statearr_58100_58209 = state_58096__$1;(statearr_58100_58209[(2)] = null);
(statearr_58100_58209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58097 === (4)))
{var inst_58081 = (state_58096[(10)]);var inst_58087 = (state_58096[(8)]);var inst_58085 = (state_58096[(2)]);var inst_58086 = (new Date());var inst_58087__$1 = inst_58086.getTime();var inst_58088 = (inst_58087__$1 - inst_58081);var inst_58089 = (inst_58088 / (1000));var state_58096__$1 = (function (){var statearr_58101 = state_58096;(statearr_58101[(11)] = inst_58085);
(statearr_58101[(8)] = inst_58087__$1);
return statearr_58101;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58096__$1,(5),onTick,inst_58089);
} else
{if((state_val_58097 === (3)))
{var inst_58094 = (state_58096[(2)]);var state_58096__$1 = state_58096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58096__$1,inst_58094);
} else
{if((state_val_58097 === (2)))
{var inst_58080 = (state_58096[(7)]);var inst_58083 = cljs.core.async.timeout.call(null,inst_58080);var state_58096__$1 = state_58096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58096__$1,(4),inst_58083);
} else
{if((state_val_58097 === (1)))
{var inst_58078 = (new Date());var inst_58079 = inst_58078.getTime();var inst_58080 = mspf;var inst_58081 = inst_58079;var state_58096__$1 = (function (){var statearr_58102 = state_58096;(statearr_58102[(10)] = inst_58081);
(statearr_58102[(7)] = inst_58080);
return statearr_58102;
})();var statearr_58103_58210 = state_58096__$1;(statearr_58103_58210[(2)] = null);
(statearr_58103_58210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___58208,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58208,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58107 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58107[(0)] = state_machine__6188__auto__);
(statearr_58107[(1)] = (1));
return statearr_58107;
});
var state_machine__6188__auto____1 = (function (state_58096){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58096);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58108){if((e58108 instanceof Object))
{var ex__6191__auto__ = e58108;var statearr_58109_58211 = state_58096;(statearr_58109_58211[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58212 = state_58096;
state_58096 = G__58212;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58096){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58208,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58110 = f__6203__auto__.call(null);(statearr_58110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58208);
return statearr_58110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58208,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___58213 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58166){var state_val_58167 = (state_58166[(1)]);if((state_val_58167 === (7)))
{var inst_58161 = (state_58166[(2)]);var inst_58122 = inst_58161;var state_58166__$1 = (function (){var statearr_58168 = state_58166;(statearr_58168[(7)] = inst_58122);
return statearr_58168;
})();var statearr_58169_58214 = state_58166__$1;(statearr_58169_58214[(2)] = null);
(statearr_58169_58214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (1)))
{var inst_58111 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_58112 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_58113 = cljs.core.List.EMPTY;var inst_58114 = [inst_58113,(200)];var inst_58115 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_58112,inst_58114);var inst_58116 = [0.0,0.5,0.35];var inst_58117 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58116,null));var inst_58118 = [(0),(0)];var inst_58119 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58118,null));var inst_58120 = [inst_58115,inst_58117,inst_58119,onModel,gl__$1];var inst_58121 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_58111,inst_58120);var inst_58122 = inst_58121;var state_58166__$1 = (function (){var statearr_58170 = state_58166;(statearr_58170[(7)] = inst_58122);
return statearr_58170;
})();var statearr_58171_58215 = state_58166__$1;(statearr_58171_58215[(2)] = null);
(statearr_58171_58215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (4)))
{var inst_58130 = (state_58166[(8)]);var inst_58128 = (state_58166[(9)]);var inst_58128__$1 = (state_58166[(2)]);var inst_58129 = cljs.core.nth.call(null,inst_58128__$1,(0),null);var inst_58130__$1 = cljs.core.nth.call(null,inst_58128__$1,(1),null);var inst_58134 = cljs.core._EQ_.call(null,onTick,inst_58130__$1);var state_58166__$1 = (function (){var statearr_58172 = state_58166;(statearr_58172[(8)] = inst_58130__$1);
(statearr_58172[(10)] = inst_58129);
(statearr_58172[(9)] = inst_58128__$1);
return statearr_58172;
})();if(inst_58134)
{var statearr_58173_58216 = state_58166__$1;(statearr_58173_58216[(1)] = (5));
} else
{var statearr_58174_58217 = state_58166__$1;(statearr_58174_58217[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (6)))
{var inst_58130 = (state_58166[(8)]);var inst_58152 = cljs.core._EQ_.call(null,onView,inst_58130);var state_58166__$1 = state_58166;if(inst_58152)
{var statearr_58175_58218 = state_58166__$1;(statearr_58175_58218[(1)] = (8));
} else
{var statearr_58176_58219 = state_58166__$1;(statearr_58176_58219[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (3)))
{var inst_58164 = (state_58166[(2)]);var state_58166__$1 = state_58166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58166__$1,inst_58164);
} else
{if((state_val_58167 === (2)))
{var inst_58125 = [onView,onTick];var inst_58126 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58125,null));var state_58166__$1 = state_58166;return cljs.core.async.ioc_alts_BANG_.call(null,state_58166__$1,(4),inst_58126);
} else
{if((state_val_58167 === (9)))
{var inst_58122 = (state_58166[(7)]);var state_58166__$1 = state_58166;var statearr_58177_58220 = state_58166__$1;(statearr_58177_58220[(2)] = inst_58122);
(statearr_58177_58220[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (5)))
{var inst_58130 = (state_58166[(8)]);var inst_58129 = (state_58166[(10)]);var inst_58122 = (state_58166[(7)]);var inst_58128 = (state_58166[(9)]);var inst_58143 = cljs.core.async.chan.call(null,(1));var inst_58144 = (function (){var c__6202__auto____$1 = inst_58143;var expr__58132 = inst_58130;var pred__58131 = cljs.core._EQ_;var ch = inst_58130;var v = inst_58129;var vec__58124 = inst_58128;var ctx = inst_58122;return ((function (c__6202__auto____$1,expr__58132,pred__58131,ch,v,vec__58124,ctx,inst_58130,inst_58129,inst_58122,inst_58128,inst_58143,state_val_58167,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__58132,pred__58131,ch,v,vec__58124,ctx,inst_58130,inst_58129,inst_58122,inst_58128,inst_58143,state_val_58167,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_58141){var state_val_58142 = (state_58141[(1)]);if((state_val_58142 === (2)))
{var inst_58139 = (state_58141[(2)]);var state_58141__$1 = state_58141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58141__$1,inst_58139);
} else
{if((state_val_58142 === (1)))
{var inst_58136 = ["tick",v];var inst_58137 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58136,null));var state_58141__$1 = state_58141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58141__$1,(2),onModelEvent,inst_58137);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__58132,pred__58131,ch,v,vec__58124,ctx,inst_58130,inst_58129,inst_58122,inst_58128,inst_58143,state_val_58167,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__58132,pred__58131,ch,v,vec__58124,ctx,inst_58130,inst_58129,inst_58122,inst_58128,inst_58143,state_val_58167,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58181 = [null,null,null,null,null,null,null];(statearr_58181[(0)] = state_machine__6188__auto__);
(statearr_58181[(1)] = (1));
return statearr_58181;
});
var state_machine__6188__auto____1 = (function (state_58141){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58141);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58182){if((e58182 instanceof Object))
{var ex__6191__auto__ = e58182;var statearr_58183_58221 = state_58141;(statearr_58183_58221[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58141);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58222 = state_58141;
state_58141 = G__58222;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58141){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__58132,pred__58131,ch,v,vec__58124,ctx,inst_58130,inst_58129,inst_58122,inst_58128,inst_58143,state_val_58167,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58184 = f__6203__auto__.call(null);(statearr_58184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_58184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__58132,pred__58131,ch,v,vec__58124,ctx,inst_58130,inst_58129,inst_58122,inst_58128,inst_58143,state_val_58167,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_58145 = cljs.core.async.impl.dispatch.run.call(null,inst_58144);var inst_58146 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_58147 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_58146,null));var inst_58148 = cljs.core.partial.call(null,tool.particle.update,inst_58129);var inst_58149 = cljs.core.update_in.call(null,inst_58122,inst_58147,inst_58148);var inst_58150 = draw.call(null,inst_58149);var state_58166__$1 = (function (){var statearr_58185 = state_58166;(statearr_58185[(11)] = inst_58145);
return statearr_58185;
})();var statearr_58186_58223 = state_58166__$1;(statearr_58186_58223[(2)] = inst_58150);
(statearr_58186_58223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (10)))
{var inst_58159 = (state_58166[(2)]);var state_58166__$1 = state_58166;var statearr_58187_58224 = state_58166__$1;(statearr_58187_58224[(2)] = inst_58159);
(statearr_58187_58224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58167 === (8)))
{var inst_58129 = (state_58166[(10)]);var inst_58122 = (state_58166[(7)]);var inst_58154 = (inst_58129[(0)]);var inst_58155 = (inst_58129[(1)]);var inst_58156 = app.particle.abstract$.onViewCommand.call(null,inst_58154,inst_58155,inst_58122);var state_58166__$1 = state_58166;var statearr_58188_58225 = state_58166__$1;(statearr_58188_58225[(2)] = inst_58156);
(statearr_58188_58225[(1)] = (10));
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
});})(c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_58192 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58192[(0)] = state_machine__6188__auto__);
(statearr_58192[(1)] = (1));
return statearr_58192;
});
var state_machine__6188__auto____1 = (function (state_58166){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_58166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e58193){if((e58193 instanceof Object))
{var ex__6191__auto__ = e58193;var statearr_58194_58226 = state_58166;(statearr_58194_58226[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e58193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58227 = state_58166;
state_58166 = G__58227;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_58166){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_58166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_58195 = f__6203__auto__.call(null);(statearr_58195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___58213);
return statearr_58195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___58213,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
