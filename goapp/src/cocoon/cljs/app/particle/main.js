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
return (function (state_51637){var state_val_51638 = (state_51637[(1)]);if((state_val_51638 === (5)))
{var inst_51635 = (state_51637[(2)]);var state_51637__$1 = state_51637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51637__$1,inst_51635);
} else
{if((state_val_51638 === (4)))
{var inst_51605 = (state_51637[(2)]);var inst_51612 = [(0),(0),(0)];var inst_51613 = [(1),(0),(1),(1)];var inst_51614 = [(10),(20)];var inst_51615 = [(0),(0),(0)];var inst_51616 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_51617 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_51618 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_51619 = [inst_51616,inst_51617,inst_51618];var inst_51620 = {"position":inst_51612,"color":inst_51613,"size":inst_51614,"vel":inst_51615,"tex":"img_map","formulaList":inst_51619};var inst_51621 = [inst_51620];var inst_51622 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_51621};var inst_51623 = [(0),(0),(1),(1)];var inst_51624 = [(30),(10)];var inst_51625 = [(10),(10),(0)];var inst_51626 = [(0),(0),(0)];var inst_51627 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_51628 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_51629 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_51630 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_51631 = [inst_51627,inst_51628,inst_51629,inst_51630];var inst_51632 = {"id":"x1","emit":inst_51622,"color":inst_51623,"size":inst_51624,"pos":inst_51625,"vel":inst_51626,"tex":"img_face","formulaList":inst_51631};var inst_51633 = ["edit-particle",inst_51632];var state_51637__$1 = (function (){var statearr_51639 = state_51637;(statearr_51639[(7)] = inst_51605);
return statearr_51639;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51637__$1,(5),onView,inst_51633);
} else
{if((state_val_51638 === (3)))
{var inst_51602 = (state_51637[(2)]);var inst_51603 = cljs.core.async.timeout.call(null,(1100));var state_51637__$1 = (function (){var statearr_51640 = state_51637;(statearr_51640[(8)] = inst_51602);
return statearr_51640;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51637__$1,(4),inst_51603);
} else
{if((state_val_51638 === (2)))
{var inst_51595 = (state_51637[(2)]);var inst_51598 = [(10),(10),(0)];var inst_51599 = {"id":"x1","pos":inst_51598};var inst_51600 = ["edit-particle",inst_51599];var state_51637__$1 = (function (){var statearr_51641 = state_51637;(statearr_51641[(9)] = inst_51595);
return statearr_51641;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51637__$1,(3),onView,inst_51600);
} else
{if((state_val_51638 === (1)))
{var inst_51593 = cljs.core.async.timeout.call(null,(1000));var state_51637__$1 = state_51637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51637__$1,(2),inst_51593);
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
var state_machine__6188__auto____0 = (function (){var statearr_51645 = [null,null,null,null,null,null,null,null,null,null];(statearr_51645[(0)] = state_machine__6188__auto__);
(statearr_51645[(1)] = (1));
return statearr_51645;
});
var state_machine__6188__auto____1 = (function (state_51637){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51646){if((e51646 instanceof Object))
{var ex__6191__auto__ = e51646;var statearr_51647_51649 = state_51637;(statearr_51647_51649[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51650 = state_51637;
state_51637 = G__51650;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51637){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_51648 = f__6203__auto__.call(null);(statearr_51648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj51833 = {};return obj51833;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51837){var state_val_51838 = (state_51837[(1)]);if((state_val_51838 === (2)))
{var inst_51835 = (state_51837[(2)]);var state_51837__$1 = state_51837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51837__$1,inst_51835);
} else
{if((state_val_51838 === (1)))
{var state_51837__$1 = state_51837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51837__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51842 = [null,null,null,null,null,null,null];(statearr_51842[(0)] = state_machine__6188__auto__);
(statearr_51842[(1)] = (1));
return statearr_51842;
});
var state_machine__6188__auto____1 = (function (state_51837){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51843){if((e51843 instanceof Object))
{var ex__6191__auto__ = e51843;var statearr_51844_52013 = state_51837;(statearr_51844_52013[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52014 = state_51837;
state_51837 = G__52014;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51837){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51845 = f__6203__auto__.call(null);(statearr_51845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_51845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51859){var state_val_51860 = (state_51859[(1)]);if((state_val_51860 === (4)))
{var inst_51849 = (state_51859[(2)]);var inst_51850 = cljs.core.nth.call(null,inst_51849,(0),null);var inst_51851 = cljs.core.nth.call(null,inst_51849,(1),null);var inst_51852 = cljs.core.nth.call(null,inst_51849,(2),null);var inst_51853 = [inst_51850,inst_51851,inst_51852];var inst_51854 = common.onModel.onNext(inst_51853);var state_51859__$1 = (function (){var statearr_51861 = state_51859;(statearr_51861[(7)] = inst_51854);
return statearr_51861;
})();var statearr_51862_52016 = state_51859__$1;(statearr_51862_52016[(2)] = null);
(statearr_51862_52016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51860 === (3)))
{var inst_51857 = (state_51859[(2)]);var state_51859__$1 = state_51859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51859__$1,inst_51857);
} else
{if((state_val_51860 === (2)))
{var state_51859__$1 = state_51859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51859__$1,(4),onModel);
} else
{if((state_val_51860 === (1)))
{var state_51859__$1 = state_51859;var statearr_51863_52017 = state_51859__$1;(statearr_51863_52017[(2)] = null);
(statearr_51863_52017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___52015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51867 = [null,null,null,null,null,null,null,null];(statearr_51867[(0)] = state_machine__6188__auto__);
(statearr_51867[(1)] = (1));
return statearr_51867;
});
var state_machine__6188__auto____1 = (function (state_51859){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51859);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51868){if((e51868 instanceof Object))
{var ex__6191__auto__ = e51868;var statearr_51869_52018 = state_51859;(statearr_51869_52018[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52019 = state_51859;
state_51859 = G__52019;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51859){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51870 = f__6203__auto__.call(null);(statearr_51870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52015);
return statearr_51870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51883){var state_val_51884 = (state_51883[(1)]);if((state_val_51884 === (4)))
{var inst_51874 = (state_51883[(2)]);var inst_51875 = cljs.core.nth.call(null,inst_51874,(0),null);var inst_51876 = cljs.core.nth.call(null,inst_51874,(1),null);var inst_51877 = [inst_51875,inst_51876];var inst_51878 = common.onModelEvent.onNext(inst_51877);var state_51883__$1 = (function (){var statearr_51885 = state_51883;(statearr_51885[(7)] = inst_51878);
return statearr_51885;
})();var statearr_51886_52021 = state_51883__$1;(statearr_51886_52021[(2)] = null);
(statearr_51886_52021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51884 === (3)))
{var inst_51881 = (state_51883[(2)]);var state_51883__$1 = state_51883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51883__$1,inst_51881);
} else
{if((state_val_51884 === (2)))
{var state_51883__$1 = state_51883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51883__$1,(4),onModelEvent);
} else
{if((state_val_51884 === (1)))
{var state_51883__$1 = state_51883;var statearr_51887_52022 = state_51883__$1;(statearr_51887_52022[(2)] = null);
(statearr_51887_52022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___52020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51891 = [null,null,null,null,null,null,null,null];(statearr_51891[(0)] = state_machine__6188__auto__);
(statearr_51891[(1)] = (1));
return statearr_51891;
});
var state_machine__6188__auto____1 = (function (state_51883){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51883);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51892){if((e51892 instanceof Object))
{var ex__6191__auto__ = e51892;var statearr_51893_52023 = state_51883;(statearr_51893_52023[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52024 = state_51883;
state_51883 = G__52024;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51883){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51894 = f__6203__auto__.call(null);(statearr_51894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52020);
return statearr_51894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51913){var state_val_51914 = (state_51913[(1)]);if((state_val_51914 === (5)))
{var inst_51897 = (state_51913[(7)]);var inst_51904 = (state_51913[(8)]);var inst_51908 = (state_51913[(2)]);var tmp51915 = inst_51897;var inst_51897__$1 = tmp51915;var inst_51898 = inst_51904;var state_51913__$1 = (function (){var statearr_51916 = state_51913;(statearr_51916[(7)] = inst_51897__$1);
(statearr_51916[(9)] = inst_51898);
(statearr_51916[(10)] = inst_51908);
return statearr_51916;
})();var statearr_51917_52026 = state_51913__$1;(statearr_51917_52026[(2)] = null);
(statearr_51917_52026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51914 === (4)))
{var inst_51898 = (state_51913[(9)]);var inst_51904 = (state_51913[(8)]);var inst_51902 = (state_51913[(2)]);var inst_51903 = (new Date());var inst_51904__$1 = inst_51903.getTime();var inst_51905 = (inst_51904__$1 - inst_51898);var inst_51906 = (inst_51905 / (1000));var state_51913__$1 = (function (){var statearr_51918 = state_51913;(statearr_51918[(11)] = inst_51902);
(statearr_51918[(8)] = inst_51904__$1);
return statearr_51918;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51913__$1,(5),onTick,inst_51906);
} else
{if((state_val_51914 === (3)))
{var inst_51911 = (state_51913[(2)]);var state_51913__$1 = state_51913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51913__$1,inst_51911);
} else
{if((state_val_51914 === (2)))
{var inst_51897 = (state_51913[(7)]);var inst_51900 = cljs.core.async.timeout.call(null,inst_51897);var state_51913__$1 = state_51913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51913__$1,(4),inst_51900);
} else
{if((state_val_51914 === (1)))
{var inst_51895 = (new Date());var inst_51896 = inst_51895.getTime();var inst_51897 = mspf;var inst_51898 = inst_51896;var state_51913__$1 = (function (){var statearr_51919 = state_51913;(statearr_51919[(7)] = inst_51897);
(statearr_51919[(9)] = inst_51898);
return statearr_51919;
})();var statearr_51920_52027 = state_51913__$1;(statearr_51920_52027[(2)] = null);
(statearr_51920_52027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___52025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51924 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51924[(0)] = state_machine__6188__auto__);
(statearr_51924[(1)] = (1));
return statearr_51924;
});
var state_machine__6188__auto____1 = (function (state_51913){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51925){if((e51925 instanceof Object))
{var ex__6191__auto__ = e51925;var statearr_51926_52028 = state_51913;(statearr_51926_52028[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52029 = state_51913;
state_51913 = G__52029;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51913){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_51927 = f__6203__auto__.call(null);(statearr_51927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52025);
return statearr_51927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51983){var state_val_51984 = (state_51983[(1)]);if((state_val_51984 === (7)))
{var inst_51978 = (state_51983[(2)]);var inst_51939 = inst_51978;var state_51983__$1 = (function (){var statearr_51985 = state_51983;(statearr_51985[(7)] = inst_51939);
return statearr_51985;
})();var statearr_51986_52031 = state_51983__$1;(statearr_51986_52031[(2)] = null);
(statearr_51986_52031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (1)))
{var inst_51928 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_51929 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_51930 = cljs.core.List.EMPTY;var inst_51931 = [inst_51930,(200)];var inst_51932 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51929,inst_51931);var inst_51933 = [0.0,0.5,0.35];var inst_51934 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51933,null));var inst_51935 = [(0),(0)];var inst_51936 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51935,null));var inst_51937 = [inst_51932,inst_51934,inst_51936,onModel,gl__$1];var inst_51938 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_51928,inst_51937);var inst_51939 = inst_51938;var state_51983__$1 = (function (){var statearr_51987 = state_51983;(statearr_51987[(7)] = inst_51939);
return statearr_51987;
})();var statearr_51988_52032 = state_51983__$1;(statearr_51988_52032[(2)] = null);
(statearr_51988_52032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (4)))
{var inst_51945 = (state_51983[(8)]);var inst_51947 = (state_51983[(9)]);var inst_51945__$1 = (state_51983[(2)]);var inst_51946 = cljs.core.nth.call(null,inst_51945__$1,(0),null);var inst_51947__$1 = cljs.core.nth.call(null,inst_51945__$1,(1),null);var inst_51951 = cljs.core._EQ_.call(null,onTick,inst_51947__$1);var state_51983__$1 = (function (){var statearr_51989 = state_51983;(statearr_51989[(10)] = inst_51946);
(statearr_51989[(8)] = inst_51945__$1);
(statearr_51989[(9)] = inst_51947__$1);
return statearr_51989;
})();if(inst_51951)
{var statearr_51990_52033 = state_51983__$1;(statearr_51990_52033[(1)] = (5));
} else
{var statearr_51991_52034 = state_51983__$1;(statearr_51991_52034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (6)))
{var inst_51947 = (state_51983[(9)]);var inst_51969 = cljs.core._EQ_.call(null,onView,inst_51947);var state_51983__$1 = state_51983;if(inst_51969)
{var statearr_51992_52035 = state_51983__$1;(statearr_51992_52035[(1)] = (8));
} else
{var statearr_51993_52036 = state_51983__$1;(statearr_51993_52036[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (3)))
{var inst_51981 = (state_51983[(2)]);var state_51983__$1 = state_51983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51983__$1,inst_51981);
} else
{if((state_val_51984 === (2)))
{var inst_51942 = [onView,onTick];var inst_51943 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51942,null));var state_51983__$1 = state_51983;return cljs.core.async.ioc_alts_BANG_.call(null,state_51983__$1,(4),inst_51943);
} else
{if((state_val_51984 === (9)))
{var inst_51939 = (state_51983[(7)]);var state_51983__$1 = state_51983;var statearr_51994_52037 = state_51983__$1;(statearr_51994_52037[(2)] = inst_51939);
(statearr_51994_52037[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (5)))
{var inst_51946 = (state_51983[(10)]);var inst_51945 = (state_51983[(8)]);var inst_51947 = (state_51983[(9)]);var inst_51939 = (state_51983[(7)]);var inst_51960 = cljs.core.async.chan.call(null,(1));var inst_51961 = (function (){var c__6202__auto____$1 = inst_51960;var expr__51949 = inst_51947;var pred__51948 = cljs.core._EQ_;var ch = inst_51947;var v = inst_51946;var vec__51941 = inst_51945;var ctx = inst_51939;return ((function (c__6202__auto____$1,expr__51949,pred__51948,ch,v,vec__51941,ctx,inst_51946,inst_51945,inst_51947,inst_51939,inst_51960,state_val_51984,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__51949,pred__51948,ch,v,vec__51941,ctx,inst_51946,inst_51945,inst_51947,inst_51939,inst_51960,state_val_51984,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_51958){var state_val_51959 = (state_51958[(1)]);if((state_val_51959 === (2)))
{var inst_51956 = (state_51958[(2)]);var state_51958__$1 = state_51958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51958__$1,inst_51956);
} else
{if((state_val_51959 === (1)))
{var inst_51953 = ["tick",v];var inst_51954 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51953,null));var state_51958__$1 = state_51958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51958__$1,(2),onModelEvent,inst_51954);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__51949,pred__51948,ch,v,vec__51941,ctx,inst_51946,inst_51945,inst_51947,inst_51939,inst_51960,state_val_51984,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__51949,pred__51948,ch,v,vec__51941,ctx,inst_51946,inst_51945,inst_51947,inst_51939,inst_51960,state_val_51984,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_51998 = [null,null,null,null,null,null,null];(statearr_51998[(0)] = state_machine__6188__auto__);
(statearr_51998[(1)] = (1));
return statearr_51998;
});
var state_machine__6188__auto____1 = (function (state_51958){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51958);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e51999){if((e51999 instanceof Object))
{var ex__6191__auto__ = e51999;var statearr_52000_52038 = state_51958;(statearr_52000_52038[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52039 = state_51958;
state_51958 = G__52039;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51958){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__51949,pred__51948,ch,v,vec__51941,ctx,inst_51946,inst_51945,inst_51947,inst_51939,inst_51960,state_val_51984,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52001 = f__6203__auto__.call(null);(statearr_52001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_52001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__51949,pred__51948,ch,v,vec__51941,ctx,inst_51946,inst_51945,inst_51947,inst_51939,inst_51960,state_val_51984,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_51962 = cljs.core.async.impl.dispatch.run.call(null,inst_51961);var inst_51963 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_51964 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_51963,null));var inst_51965 = cljs.core.partial.call(null,tool.particle.update,inst_51946);var inst_51966 = cljs.core.update_in.call(null,inst_51939,inst_51964,inst_51965);var inst_51967 = draw.call(null,inst_51966);var state_51983__$1 = (function (){var statearr_52002 = state_51983;(statearr_52002[(11)] = inst_51962);
return statearr_52002;
})();var statearr_52003_52040 = state_51983__$1;(statearr_52003_52040[(2)] = inst_51967);
(statearr_52003_52040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (10)))
{var inst_51976 = (state_51983[(2)]);var state_51983__$1 = state_51983;var statearr_52004_52041 = state_51983__$1;(statearr_52004_52041[(2)] = inst_51976);
(statearr_52004_52041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51984 === (8)))
{var inst_51946 = (state_51983[(10)]);var inst_51939 = (state_51983[(7)]);var inst_51971 = (inst_51946[(0)]);var inst_51972 = (inst_51946[(1)]);var inst_51973 = app.particle.abstract$.onViewCommand.call(null,inst_51971,inst_51972,inst_51939);var state_51983__$1 = state_51983;var statearr_52005_52042 = state_51983__$1;(statearr_52005_52042[(2)] = inst_51973);
(statearr_52005_52042[(1)] = (10));
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
});})(c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52009 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52009[(0)] = state_machine__6188__auto__);
(statearr_52009[(1)] = (1));
return statearr_52009;
});
var state_machine__6188__auto____1 = (function (state_51983){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_51983);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52010){if((e52010 instanceof Object))
{var ex__6191__auto__ = e52010;var statearr_52011_52043 = state_51983;(statearr_52011_52043[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52044 = state_51983;
state_51983 = G__52044;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_51983){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_51983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52012 = f__6203__auto__.call(null);(statearr_52012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52030);
return statearr_52012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
