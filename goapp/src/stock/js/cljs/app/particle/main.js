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
return (function (state_97573){var state_val_97574 = (state_97573[(1)]);if((state_val_97574 === (5)))
{var inst_97571 = (state_97573[(2)]);var state_97573__$1 = state_97573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97573__$1,inst_97571);
} else
{if((state_val_97574 === (4)))
{var inst_97541 = (state_97573[(2)]);var inst_97548 = [(0),(0),(0)];var inst_97549 = [(1),(0),(1),(1)];var inst_97550 = [(10),(20)];var inst_97551 = [(0),(0),(0)];var inst_97552 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_97553 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_97554 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_97555 = [inst_97552,inst_97553,inst_97554];var inst_97556 = {"position":inst_97548,"color":inst_97549,"size":inst_97550,"vel":inst_97551,"tex":"img_map","formulaList":inst_97555};var inst_97557 = [inst_97556];var inst_97558 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_97557};var inst_97559 = [(0),(0),(1),(1)];var inst_97560 = [(30),(10)];var inst_97561 = [(10),(10),(0)];var inst_97562 = [(0),(0),(0)];var inst_97563 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_97564 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_97565 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_97566 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_97567 = [inst_97563,inst_97564,inst_97565,inst_97566];var inst_97568 = {"id":"x1","emit":inst_97558,"color":inst_97559,"size":inst_97560,"pos":inst_97561,"vel":inst_97562,"tex":"img_face","formulaList":inst_97567};var inst_97569 = ["edit-particle",inst_97568];var state_97573__$1 = (function (){var statearr_97575 = state_97573;(statearr_97575[(7)] = inst_97541);
return statearr_97575;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97573__$1,(5),onView,inst_97569);
} else
{if((state_val_97574 === (3)))
{var inst_97538 = (state_97573[(2)]);var inst_97539 = cljs.core.async.timeout.call(null,(1100));var state_97573__$1 = (function (){var statearr_97576 = state_97573;(statearr_97576[(8)] = inst_97538);
return statearr_97576;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97573__$1,(4),inst_97539);
} else
{if((state_val_97574 === (2)))
{var inst_97531 = (state_97573[(2)]);var inst_97534 = [(10),(10),(0)];var inst_97535 = {"id":"x1","pos":inst_97534};var inst_97536 = ["edit-particle",inst_97535];var state_97573__$1 = (function (){var statearr_97577 = state_97573;(statearr_97577[(9)] = inst_97531);
return statearr_97577;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97573__$1,(3),onView,inst_97536);
} else
{if((state_val_97574 === (1)))
{var inst_97529 = cljs.core.async.timeout.call(null,(1000));var state_97573__$1 = state_97573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97573__$1,(2),inst_97529);
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
var state_machine__6188__auto____0 = (function (){var statearr_97581 = [null,null,null,null,null,null,null,null,null,null];(statearr_97581[(0)] = state_machine__6188__auto__);
(statearr_97581[(1)] = (1));
return statearr_97581;
});
var state_machine__6188__auto____1 = (function (state_97573){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97573);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e97582){if((e97582 instanceof Object))
{var ex__6191__auto__ = e97582;var statearr_97583_97585 = state_97573;(statearr_97583_97585[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e97582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__97586 = state_97573;
state_97573 = G__97586;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97573){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_97584 = f__6203__auto__.call(null);(statearr_97584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_97584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj97801 = {};return obj97801;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_97805){var state_val_97806 = (state_97805[(1)]);if((state_val_97806 === (2)))
{var inst_97803 = (state_97805[(2)]);var state_97805__$1 = state_97805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97805__$1,inst_97803);
} else
{if((state_val_97806 === (1)))
{var state_97805__$1 = state_97805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97805__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_97810 = [null,null,null,null,null,null,null];(statearr_97810[(0)] = state_machine__6188__auto__);
(statearr_97810[(1)] = (1));
return statearr_97810;
});
var state_machine__6188__auto____1 = (function (state_97805){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e97811){if((e97811 instanceof Object))
{var ex__6191__auto__ = e97811;var statearr_97812_98013 = state_97805;(statearr_97812_98013[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e97811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98014 = state_97805;
state_97805 = G__98014;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97805){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_97813 = f__6203__auto__.call(null);(statearr_97813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_97813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___98015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_97827){var state_val_97828 = (state_97827[(1)]);if((state_val_97828 === (4)))
{var inst_97817 = (state_97827[(2)]);var inst_97818 = cljs.core.nth.call(null,inst_97817,(0),null);var inst_97819 = cljs.core.nth.call(null,inst_97817,(1),null);var inst_97820 = cljs.core.nth.call(null,inst_97817,(2),null);var inst_97821 = [inst_97818,inst_97819,inst_97820];var inst_97822 = common.onModel.onNext(inst_97821);var state_97827__$1 = (function (){var statearr_97829 = state_97827;(statearr_97829[(7)] = inst_97822);
return statearr_97829;
})();var statearr_97830_98016 = state_97827__$1;(statearr_97830_98016[(2)] = null);
(statearr_97830_98016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97828 === (3)))
{var inst_97825 = (state_97827[(2)]);var state_97827__$1 = state_97827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97827__$1,inst_97825);
} else
{if((state_val_97828 === (2)))
{var state_97827__$1 = state_97827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97827__$1,(4),onModel);
} else
{if((state_val_97828 === (1)))
{var state_97827__$1 = state_97827;var statearr_97831_98017 = state_97827__$1;(statearr_97831_98017[(2)] = null);
(statearr_97831_98017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___98015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_97835 = [null,null,null,null,null,null,null,null];(statearr_97835[(0)] = state_machine__6188__auto__);
(statearr_97835[(1)] = (1));
return statearr_97835;
});
var state_machine__6188__auto____1 = (function (state_97827){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97827);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e97836){if((e97836 instanceof Object))
{var ex__6191__auto__ = e97836;var statearr_97837_98018 = state_97827;(statearr_97837_98018[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e97836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98019 = state_97827;
state_97827 = G__98019;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97827){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_97838 = f__6203__auto__.call(null);(statearr_97838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98015);
return statearr_97838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98015,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___98020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_97851){var state_val_97852 = (state_97851[(1)]);if((state_val_97852 === (4)))
{var inst_97842 = (state_97851[(2)]);var inst_97843 = cljs.core.nth.call(null,inst_97842,(0),null);var inst_97844 = cljs.core.nth.call(null,inst_97842,(1),null);var inst_97845 = [inst_97843,inst_97844];var inst_97846 = common.onModelEvent.onNext(inst_97845);var state_97851__$1 = (function (){var statearr_97853 = state_97851;(statearr_97853[(7)] = inst_97846);
return statearr_97853;
})();var statearr_97854_98021 = state_97851__$1;(statearr_97854_98021[(2)] = null);
(statearr_97854_98021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97852 === (3)))
{var inst_97849 = (state_97851[(2)]);var state_97851__$1 = state_97851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97851__$1,inst_97849);
} else
{if((state_val_97852 === (2)))
{var state_97851__$1 = state_97851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97851__$1,(4),onModelEvent);
} else
{if((state_val_97852 === (1)))
{var state_97851__$1 = state_97851;var statearr_97855_98022 = state_97851__$1;(statearr_97855_98022[(2)] = null);
(statearr_97855_98022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___98020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_97859 = [null,null,null,null,null,null,null,null];(statearr_97859[(0)] = state_machine__6188__auto__);
(statearr_97859[(1)] = (1));
return statearr_97859;
});
var state_machine__6188__auto____1 = (function (state_97851){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97851);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e97860){if((e97860 instanceof Object))
{var ex__6191__auto__ = e97860;var statearr_97861_98023 = state_97851;(statearr_97861_98023[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e97860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98024 = state_97851;
state_97851 = G__98024;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97851){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_97862 = f__6203__auto__.call(null);(statearr_97862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98020);
return statearr_97862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98020,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___98025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_97881){var state_val_97882 = (state_97881[(1)]);if((state_val_97882 === (5)))
{var inst_97872 = (state_97881[(7)]);var inst_97865 = (state_97881[(8)]);var inst_97876 = (state_97881[(2)]);var tmp97883 = inst_97865;var inst_97865__$1 = tmp97883;var inst_97866 = inst_97872;var state_97881__$1 = (function (){var statearr_97884 = state_97881;(statearr_97884[(9)] = inst_97866);
(statearr_97884[(8)] = inst_97865__$1);
(statearr_97884[(10)] = inst_97876);
return statearr_97884;
})();var statearr_97885_98026 = state_97881__$1;(statearr_97885_98026[(2)] = null);
(statearr_97885_98026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97882 === (4)))
{var inst_97872 = (state_97881[(7)]);var inst_97866 = (state_97881[(9)]);var inst_97870 = (state_97881[(2)]);var inst_97871 = (new Date());var inst_97872__$1 = inst_97871.getTime();var inst_97873 = (inst_97872__$1 - inst_97866);var inst_97874 = (inst_97873 / (1000));var state_97881__$1 = (function (){var statearr_97886 = state_97881;(statearr_97886[(7)] = inst_97872__$1);
(statearr_97886[(11)] = inst_97870);
return statearr_97886;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97881__$1,(5),onTick,inst_97874);
} else
{if((state_val_97882 === (3)))
{var inst_97879 = (state_97881[(2)]);var state_97881__$1 = state_97881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97881__$1,inst_97879);
} else
{if((state_val_97882 === (2)))
{var inst_97865 = (state_97881[(8)]);var inst_97868 = cljs.core.async.timeout.call(null,inst_97865);var state_97881__$1 = state_97881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97881__$1,(4),inst_97868);
} else
{if((state_val_97882 === (1)))
{var inst_97863 = (new Date());var inst_97864 = inst_97863.getTime();var inst_97865 = mspf;var inst_97866 = inst_97864;var state_97881__$1 = (function (){var statearr_97887 = state_97881;(statearr_97887[(9)] = inst_97866);
(statearr_97887[(8)] = inst_97865);
return statearr_97887;
})();var statearr_97888_98027 = state_97881__$1;(statearr_97888_98027[(2)] = null);
(statearr_97888_98027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___98025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_97892 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_97892[(0)] = state_machine__6188__auto__);
(statearr_97892[(1)] = (1));
return statearr_97892;
});
var state_machine__6188__auto____1 = (function (state_97881){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97881);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e97893){if((e97893 instanceof Object))
{var ex__6191__auto__ = e97893;var statearr_97894_98028 = state_97881;(statearr_97894_98028[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e97893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98029 = state_97881;
state_97881 = G__98029;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97881){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_97895 = f__6203__auto__.call(null);(statearr_97895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98025);
return statearr_97895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98025,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.findAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function findAction(actions,id){return cljs.core.first.call(null,cljs.core.filter.call(null,((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (p__97898){var vec__97899 = p__97898;var pid = cljs.core.nth.call(null,vec__97899,(0),null);var _ = cljs.core.nth.call(null,vec__97899,(1),null);var ___$1 = cljs.core.nth.call(null,vec__97899,(2),null);return cljs.core._EQ_.call(null,id,pid);
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
,actions));
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
app.particle.main.handleAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function handleAction(actions,p){var temp__4124__auto__ = app.particle.main.findAction.call(null,actions,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p));if(cljs.core.truth_(temp__4124__auto__))
{var vec__97904 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__97904,(0),null);var act = cljs.core.nth.call(null,vec__97904,(1),null);var params = cljs.core.nth.call(null,vec__97904,(2),null);var action = vec__97904;var pred__97905 = cljs.core._EQ_;var expr__97906 = act;if(cljs.core.truth_(pred__97905.call(null,new cljs.core.Keyword(null,"changePos","changePos",-1909595880),expr__97906)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.first.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.second.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null)));
} else
{return p;
}
} else
{return p;
}
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
var c__6202__auto___98030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_97979){var state_val_97980 = (state_97979[(1)]);if((state_val_97980 === (7)))
{var inst_97974 = (state_97979[(2)]);var inst_97918 = inst_97974;var state_97979__$1 = (function (){var statearr_97981 = state_97979;(statearr_97981[(7)] = inst_97918);
return statearr_97981;
})();var statearr_97982_98031 = state_97979__$1;(statearr_97982_98031[(2)] = null);
(statearr_97982_98031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (1)))
{var inst_97908 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_97909 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_97910 = cljs.core.List.EMPTY;var inst_97911 = [inst_97910];var inst_97912 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_97909,inst_97911);var inst_97913 = [(0),(0)];var inst_97914 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_97913,null));var inst_97915 = cljs.core.List.EMPTY;var inst_97916 = [(0),inst_97912,inst_97914,onModel,gl__$1,inst_97915];var inst_97917 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_97908,inst_97916);var inst_97918 = inst_97917;var state_97979__$1 = (function (){var statearr_97983 = state_97979;(statearr_97983[(7)] = inst_97918);
return statearr_97983;
})();var statearr_97984_98032 = state_97979__$1;(statearr_97984_98032[(2)] = null);
(statearr_97984_98032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (4)))
{var inst_97924 = (state_97979[(8)]);var inst_97926 = (state_97979[(9)]);var inst_97924__$1 = (state_97979[(2)]);var inst_97925 = cljs.core.nth.call(null,inst_97924__$1,(0),null);var inst_97926__$1 = cljs.core.nth.call(null,inst_97924__$1,(1),null);var inst_97930 = cljs.core._EQ_.call(null,onTick,inst_97926__$1);var state_97979__$1 = (function (){var statearr_97985 = state_97979;(statearr_97985[(10)] = inst_97925);
(statearr_97985[(8)] = inst_97924__$1);
(statearr_97985[(9)] = inst_97926__$1);
return statearr_97985;
})();if(inst_97930)
{var statearr_97986_98033 = state_97979__$1;(statearr_97986_98033[(1)] = (5));
} else
{var statearr_97987_98034 = state_97979__$1;(statearr_97987_98034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (13)))
{var inst_97972 = (state_97979[(2)]);var state_97979__$1 = state_97979;var statearr_97988_98035 = state_97979__$1;(statearr_97988_98035[(2)] = inst_97972);
(statearr_97988_98035[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (6)))
{var inst_97926 = (state_97979[(9)]);var inst_97965 = cljs.core._EQ_.call(null,onView,inst_97926);var state_97979__$1 = state_97979;if(inst_97965)
{var statearr_97989_98036 = state_97979__$1;(statearr_97989_98036[(1)] = (11));
} else
{var statearr_97990_98037 = state_97979__$1;(statearr_97990_98037[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (3)))
{var inst_97977 = (state_97979[(2)]);var state_97979__$1 = state_97979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97979__$1,inst_97977);
} else
{if((state_val_97980 === (12)))
{var inst_97918 = (state_97979[(7)]);var state_97979__$1 = state_97979;var statearr_97991_98038 = state_97979__$1;(statearr_97991_98038[(2)] = inst_97918);
(statearr_97991_98038[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (2)))
{var inst_97921 = [onView,onTick];var inst_97922 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_97921,null));var state_97979__$1 = state_97979;return cljs.core.async.ioc_alts_BANG_.call(null,state_97979__$1,(4),inst_97922);
} else
{if((state_val_97980 === (11)))
{var inst_97918 = (state_97979[(7)]);var inst_97925 = (state_97979[(10)]);var inst_97967 = (inst_97925[(0)]);var inst_97968 = (inst_97925[(1)]);var inst_97969 = app.particle.abstract$.onViewCommand.call(null,inst_97967,inst_97968,inst_97918);var state_97979__$1 = state_97979;var statearr_97992_98039 = state_97979__$1;(statearr_97992_98039[(2)] = inst_97969);
(statearr_97992_98039[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (9)))
{var inst_97918 = (state_97979[(7)]);var state_97979__$1 = state_97979;var statearr_97993_98040 = state_97979__$1;(statearr_97993_98040[(2)] = inst_97918);
(statearr_97993_98040[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (5)))
{var inst_97918 = (state_97979[(7)]);var inst_97933 = cljs.core.seq_QMARK_.call(null,inst_97918);var state_97979__$1 = state_97979;if(inst_97933)
{var statearr_97994_98041 = state_97979__$1;(statearr_97994_98041[(1)] = (8));
} else
{var statearr_97995_98042 = state_97979__$1;(statearr_97995_98042[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (10)))
{var inst_97918 = (state_97979[(7)]);var inst_97925 = (state_97979[(10)]);var inst_97924 = (state_97979[(8)]);var inst_97926 = (state_97979[(9)]);var inst_97938 = (state_97979[(2)]);var inst_97939 = cljs.core.get.call(null,inst_97938,new cljs.core.Keyword(null,"actions","actions",-812656882));var inst_97940 = cljs.core.partial.call(null,app.particle.main.handleAction,inst_97939);var inst_97948 = cljs.core.async.chan.call(null,(1));var inst_97949 = (function (){var ctx = inst_97918;var vec__97920 = inst_97924;var expr__97928 = inst_97926;var v = inst_97925;var actions = inst_97939;var ch = inst_97926;var c__6202__auto____$1 = inst_97948;var map__97932 = inst_97938;var pred__97927 = cljs.core._EQ_;var handleParticleAction = inst_97940;return ((function (ctx,vec__97920,expr__97928,v,actions,ch,c__6202__auto____$1,map__97932,pred__97927,handleParticleAction,inst_97918,inst_97925,inst_97924,inst_97926,inst_97938,inst_97939,inst_97940,inst_97948,state_val_97980,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (ctx,vec__97920,expr__97928,v,actions,ch,c__6202__auto____$1,map__97932,pred__97927,handleParticleAction,inst_97918,inst_97925,inst_97924,inst_97926,inst_97938,inst_97939,inst_97940,inst_97948,state_val_97980,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_97946){var state_val_97947 = (state_97946[(1)]);if((state_val_97947 === (2)))
{var inst_97944 = (state_97946[(2)]);var state_97946__$1 = state_97946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97946__$1,inst_97944);
} else
{if((state_val_97947 === (1)))
{var inst_97941 = ["tick",v];var inst_97942 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_97941,null));var state_97946__$1 = state_97946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97946__$1,(2),onModelEvent,inst_97942);
} else
{return null;
}
}
});})(ctx,vec__97920,expr__97928,v,actions,ch,c__6202__auto____$1,map__97932,pred__97927,handleParticleAction,inst_97918,inst_97925,inst_97924,inst_97926,inst_97938,inst_97939,inst_97940,inst_97948,state_val_97980,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,ctx,vec__97920,expr__97928,v,actions,ch,c__6202__auto____$1,map__97932,pred__97927,handleParticleAction,inst_97918,inst_97925,inst_97924,inst_97926,inst_97938,inst_97939,inst_97940,inst_97948,state_val_97980,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_97999 = [null,null,null,null,null,null,null];(statearr_97999[(0)] = state_machine__6188__auto__);
(statearr_97999[(1)] = (1));
return statearr_97999;
});
var state_machine__6188__auto____1 = (function (state_97946){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97946);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98000){if((e98000 instanceof Object))
{var ex__6191__auto__ = e98000;var statearr_98001_98043 = state_97946;(statearr_98001_98043[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98044 = state_97946;
state_97946 = G__98044;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97946){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,ctx,vec__97920,expr__97928,v,actions,ch,c__6202__auto____$1,map__97932,pred__97927,handleParticleAction,inst_97918,inst_97925,inst_97924,inst_97926,inst_97938,inst_97939,inst_97940,inst_97948,state_val_97980,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98002 = f__6203__auto__.call(null);(statearr_98002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_98002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(ctx,vec__97920,expr__97928,v,actions,ch,c__6202__auto____$1,map__97932,pred__97927,handleParticleAction,inst_97918,inst_97925,inst_97924,inst_97926,inst_97938,inst_97939,inst_97940,inst_97948,state_val_97980,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_97950 = cljs.core.async.impl.dispatch.run.call(null,inst_97949);var inst_97951 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_97952 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_97951,null));var inst_97953 = cljs.core.partial.call(null,cljs.core.map,inst_97940);var inst_97954 = cljs.core.update_in.call(null,inst_97918,inst_97952,inst_97953);var inst_97955 = [new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_97956 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_97955,null));var inst_97957 = cljs.core.List.EMPTY;var inst_97958 = cljs.core.assoc_in.call(null,inst_97954,inst_97956,inst_97957);var inst_97959 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_97960 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_97959,null));var inst_97961 = cljs.core.partial.call(null,tool.particle.update,inst_97925);var inst_97962 = cljs.core.update_in.call(null,inst_97958,inst_97960,inst_97961);var inst_97963 = draw.call(null,inst_97962);var state_97979__$1 = (function (){var statearr_98003 = state_97979;(statearr_98003[(11)] = inst_97950);
return statearr_98003;
})();var statearr_98004_98045 = state_97979__$1;(statearr_98004_98045[(2)] = inst_97963);
(statearr_98004_98045[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_97980 === (8)))
{var inst_97918 = (state_97979[(7)]);var inst_97935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_97918);var state_97979__$1 = state_97979;var statearr_98005_98046 = state_97979__$1;(statearr_98005_98046[(2)] = inst_97935);
(statearr_98005_98046[(1)] = (10));
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
});})(c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98009 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_98009[(0)] = state_machine__6188__auto__);
(statearr_98009[(1)] = (1));
return statearr_98009;
});
var state_machine__6188__auto____1 = (function (state_97979){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_97979);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98010){if((e98010 instanceof Object))
{var ex__6191__auto__ = e98010;var statearr_98011_98047 = state_97979;(statearr_98011_98047[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97979);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98048 = state_97979;
state_97979 = G__98048;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_97979){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_97979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98012 = f__6203__auto__.call(null);(statearr_98012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98030);
return statearr_98012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98030,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.demo.call(null,onView);
return null;
});
app.particle.main.main.call(null);
