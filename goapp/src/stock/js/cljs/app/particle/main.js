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
return (function (state_131471){var state_val_131472 = (state_131471[(1)]);if((state_val_131472 === (5)))
{var inst_131469 = (state_131471[(2)]);var state_131471__$1 = state_131471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131471__$1,inst_131469);
} else
{if((state_val_131472 === (4)))
{var inst_131439 = (state_131471[(2)]);var inst_131446 = [(0),(0),(0)];var inst_131447 = [(1),(0),(1),(1)];var inst_131448 = [(10),(20)];var inst_131449 = [(0),(0),(0)];var inst_131450 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_131451 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_131452 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_131453 = [inst_131450,inst_131451,inst_131452];var inst_131454 = {"position":inst_131446,"color":inst_131447,"size":inst_131448,"vel":inst_131449,"tex":"img_map","formulaList":inst_131453};var inst_131455 = [inst_131454];var inst_131456 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_131455};var inst_131457 = [(0),(0),(1),(1)];var inst_131458 = [(30),(10)];var inst_131459 = [(10),(10),(0)];var inst_131460 = [(0),(0),(0)];var inst_131461 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_131462 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_131463 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_131464 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_131465 = [inst_131461,inst_131462,inst_131463,inst_131464];var inst_131466 = {"id":"x1","emit":inst_131456,"color":inst_131457,"size":inst_131458,"pos":inst_131459,"vel":inst_131460,"tex":"img_face","formulaList":inst_131465};var inst_131467 = ["edit-particle",inst_131466];var state_131471__$1 = (function (){var statearr_131473 = state_131471;(statearr_131473[(7)] = inst_131439);
return statearr_131473;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131471__$1,(5),onView,inst_131467);
} else
{if((state_val_131472 === (3)))
{var inst_131436 = (state_131471[(2)]);var inst_131437 = cljs.core.async.timeout.call(null,(1100));var state_131471__$1 = (function (){var statearr_131474 = state_131471;(statearr_131474[(8)] = inst_131436);
return statearr_131474;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131471__$1,(4),inst_131437);
} else
{if((state_val_131472 === (2)))
{var inst_131429 = (state_131471[(2)]);var inst_131432 = [(10),(10),(0)];var inst_131433 = {"id":"x1","pos":inst_131432};var inst_131434 = ["edit-particle",inst_131433];var state_131471__$1 = (function (){var statearr_131475 = state_131471;(statearr_131475[(9)] = inst_131429);
return statearr_131475;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131471__$1,(3),onView,inst_131434);
} else
{if((state_val_131472 === (1)))
{var inst_131427 = cljs.core.async.timeout.call(null,(1000));var state_131471__$1 = state_131471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131471__$1,(2),inst_131427);
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
var state_machine__6188__auto____0 = (function (){var statearr_131479 = [null,null,null,null,null,null,null,null,null,null];(statearr_131479[(0)] = state_machine__6188__auto__);
(statearr_131479[(1)] = (1));
return statearr_131479;
});
var state_machine__6188__auto____1 = (function (state_131471){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131471);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131480){if((e131480 instanceof Object))
{var ex__6191__auto__ = e131480;var statearr_131481_131483 = state_131471;(statearr_131481_131483[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131484 = state_131471;
state_131471 = G__131484;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131471){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_131482 = f__6203__auto__.call(null);(statearr_131482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_131482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj131699 = {};return obj131699;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_131703){var state_val_131704 = (state_131703[(1)]);if((state_val_131704 === (2)))
{var inst_131701 = (state_131703[(2)]);var state_131703__$1 = state_131703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131703__$1,inst_131701);
} else
{if((state_val_131704 === (1)))
{var state_131703__$1 = state_131703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131703__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131708 = [null,null,null,null,null,null,null];(statearr_131708[(0)] = state_machine__6188__auto__);
(statearr_131708[(1)] = (1));
return statearr_131708;
});
var state_machine__6188__auto____1 = (function (state_131703){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131709){if((e131709 instanceof Object))
{var ex__6191__auto__ = e131709;var statearr_131710_131911 = state_131703;(statearr_131710_131911[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131912 = state_131703;
state_131703 = G__131912;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131703){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_131711 = f__6203__auto__.call(null);(statearr_131711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_131711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___131913 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___131913,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___131913,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_131725){var state_val_131726 = (state_131725[(1)]);if((state_val_131726 === (4)))
{var inst_131715 = (state_131725[(2)]);var inst_131716 = cljs.core.nth.call(null,inst_131715,(0),null);var inst_131717 = cljs.core.nth.call(null,inst_131715,(1),null);var inst_131718 = cljs.core.nth.call(null,inst_131715,(2),null);var inst_131719 = [inst_131716,inst_131717,inst_131718];var inst_131720 = common.onModel.onNext(inst_131719);var state_131725__$1 = (function (){var statearr_131727 = state_131725;(statearr_131727[(7)] = inst_131720);
return statearr_131727;
})();var statearr_131728_131914 = state_131725__$1;(statearr_131728_131914[(2)] = null);
(statearr_131728_131914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131726 === (3)))
{var inst_131723 = (state_131725[(2)]);var state_131725__$1 = state_131725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131725__$1,inst_131723);
} else
{if((state_val_131726 === (2)))
{var state_131725__$1 = state_131725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131725__$1,(4),onModel);
} else
{if((state_val_131726 === (1)))
{var state_131725__$1 = state_131725;var statearr_131729_131915 = state_131725__$1;(statearr_131729_131915[(2)] = null);
(statearr_131729_131915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___131913,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___131913,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131733 = [null,null,null,null,null,null,null,null];(statearr_131733[(0)] = state_machine__6188__auto__);
(statearr_131733[(1)] = (1));
return statearr_131733;
});
var state_machine__6188__auto____1 = (function (state_131725){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131725);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131734){if((e131734 instanceof Object))
{var ex__6191__auto__ = e131734;var statearr_131735_131916 = state_131725;(statearr_131735_131916[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131917 = state_131725;
state_131725 = G__131917;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131725){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___131913,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_131736 = f__6203__auto__.call(null);(statearr_131736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___131913);
return statearr_131736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___131913,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___131918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___131918,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___131918,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_131749){var state_val_131750 = (state_131749[(1)]);if((state_val_131750 === (4)))
{var inst_131740 = (state_131749[(2)]);var inst_131741 = cljs.core.nth.call(null,inst_131740,(0),null);var inst_131742 = cljs.core.nth.call(null,inst_131740,(1),null);var inst_131743 = [inst_131741,inst_131742];var inst_131744 = common.onModelEvent.onNext(inst_131743);var state_131749__$1 = (function (){var statearr_131751 = state_131749;(statearr_131751[(7)] = inst_131744);
return statearr_131751;
})();var statearr_131752_131919 = state_131749__$1;(statearr_131752_131919[(2)] = null);
(statearr_131752_131919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131750 === (3)))
{var inst_131747 = (state_131749[(2)]);var state_131749__$1 = state_131749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131749__$1,inst_131747);
} else
{if((state_val_131750 === (2)))
{var state_131749__$1 = state_131749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131749__$1,(4),onModelEvent);
} else
{if((state_val_131750 === (1)))
{var state_131749__$1 = state_131749;var statearr_131753_131920 = state_131749__$1;(statearr_131753_131920[(2)] = null);
(statearr_131753_131920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___131918,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___131918,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131757 = [null,null,null,null,null,null,null,null];(statearr_131757[(0)] = state_machine__6188__auto__);
(statearr_131757[(1)] = (1));
return statearr_131757;
});
var state_machine__6188__auto____1 = (function (state_131749){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131749);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131758){if((e131758 instanceof Object))
{var ex__6191__auto__ = e131758;var statearr_131759_131921 = state_131749;(statearr_131759_131921[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131922 = state_131749;
state_131749 = G__131922;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131749){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___131918,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_131760 = f__6203__auto__.call(null);(statearr_131760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___131918);
return statearr_131760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___131918,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___131923 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___131923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___131923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_131779){var state_val_131780 = (state_131779[(1)]);if((state_val_131780 === (5)))
{var inst_131770 = (state_131779[(7)]);var inst_131763 = (state_131779[(8)]);var inst_131774 = (state_131779[(2)]);var tmp131781 = inst_131763;var inst_131763__$1 = tmp131781;var inst_131764 = inst_131770;var state_131779__$1 = (function (){var statearr_131782 = state_131779;(statearr_131782[(9)] = inst_131764);
(statearr_131782[(10)] = inst_131774);
(statearr_131782[(8)] = inst_131763__$1);
return statearr_131782;
})();var statearr_131783_131924 = state_131779__$1;(statearr_131783_131924[(2)] = null);
(statearr_131783_131924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131780 === (4)))
{var inst_131764 = (state_131779[(9)]);var inst_131770 = (state_131779[(7)]);var inst_131768 = (state_131779[(2)]);var inst_131769 = (new Date());var inst_131770__$1 = inst_131769.getTime();var inst_131771 = (inst_131770__$1 - inst_131764);var inst_131772 = (inst_131771 / (1000));var state_131779__$1 = (function (){var statearr_131784 = state_131779;(statearr_131784[(7)] = inst_131770__$1);
(statearr_131784[(11)] = inst_131768);
return statearr_131784;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131779__$1,(5),onTick,inst_131772);
} else
{if((state_val_131780 === (3)))
{var inst_131777 = (state_131779[(2)]);var state_131779__$1 = state_131779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131779__$1,inst_131777);
} else
{if((state_val_131780 === (2)))
{var inst_131763 = (state_131779[(8)]);var inst_131766 = cljs.core.async.timeout.call(null,inst_131763);var state_131779__$1 = state_131779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131779__$1,(4),inst_131766);
} else
{if((state_val_131780 === (1)))
{var inst_131761 = (new Date());var inst_131762 = inst_131761.getTime();var inst_131763 = mspf;var inst_131764 = inst_131762;var state_131779__$1 = (function (){var statearr_131785 = state_131779;(statearr_131785[(9)] = inst_131764);
(statearr_131785[(8)] = inst_131763);
return statearr_131785;
})();var statearr_131786_131925 = state_131779__$1;(statearr_131786_131925[(2)] = null);
(statearr_131786_131925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___131923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___131923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131790 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_131790[(0)] = state_machine__6188__auto__);
(statearr_131790[(1)] = (1));
return statearr_131790;
});
var state_machine__6188__auto____1 = (function (state_131779){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131779);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131791){if((e131791 instanceof Object))
{var ex__6191__auto__ = e131791;var statearr_131792_131926 = state_131779;(statearr_131792_131926[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131779);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131927 = state_131779;
state_131779 = G__131927;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131779){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___131923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_131793 = f__6203__auto__.call(null);(statearr_131793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___131923);
return statearr_131793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___131923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.findAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function findAction(actions,id){return cljs.core.first.call(null,cljs.core.filter.call(null,((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (p__131796){var vec__131797 = p__131796;var pid = cljs.core.nth.call(null,vec__131797,(0),null);var _ = cljs.core.nth.call(null,vec__131797,(1),null);var ___$1 = cljs.core.nth.call(null,vec__131797,(2),null);return cljs.core._EQ_.call(null,id,pid);
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
,actions));
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
app.particle.main.handleAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function handleAction(actions,p){var temp__4124__auto__ = app.particle.main.findAction.call(null,actions,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p));if(cljs.core.truth_(temp__4124__auto__))
{var vec__131802 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__131802,(0),null);var act = cljs.core.nth.call(null,vec__131802,(1),null);var params = cljs.core.nth.call(null,vec__131802,(2),null);var action = vec__131802;var pred__131803 = cljs.core._EQ_;var expr__131804 = act;if(cljs.core.truth_(pred__131803.call(null,new cljs.core.Keyword(null,"changePos","changePos",-1909595880),expr__131804)))
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.first.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null),cljs.core.second.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null)));
} else
{return p;
}
} else
{return p;
}
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
var c__6202__auto___131928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_131877){var state_val_131878 = (state_131877[(1)]);if((state_val_131878 === (7)))
{var inst_131872 = (state_131877[(2)]);var inst_131816 = inst_131872;var state_131877__$1 = (function (){var statearr_131879 = state_131877;(statearr_131879[(7)] = inst_131816);
return statearr_131879;
})();var statearr_131880_131929 = state_131877__$1;(statearr_131880_131929[(2)] = null);
(statearr_131880_131929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (1)))
{var inst_131806 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_131807 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_131808 = cljs.core.List.EMPTY;var inst_131809 = [inst_131808,(200)];var inst_131810 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_131807,inst_131809);var inst_131811 = [(0),(0)];var inst_131812 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131811,null));var inst_131813 = cljs.core.List.EMPTY;var inst_131814 = [(0),inst_131810,inst_131812,onModel,gl__$1,inst_131813];var inst_131815 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_131806,inst_131814);var inst_131816 = inst_131815;var state_131877__$1 = (function (){var statearr_131881 = state_131877;(statearr_131881[(7)] = inst_131816);
return statearr_131881;
})();var statearr_131882_131930 = state_131877__$1;(statearr_131882_131930[(2)] = null);
(statearr_131882_131930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (4)))
{var inst_131822 = (state_131877[(8)]);var inst_131824 = (state_131877[(9)]);var inst_131822__$1 = (state_131877[(2)]);var inst_131823 = cljs.core.nth.call(null,inst_131822__$1,(0),null);var inst_131824__$1 = cljs.core.nth.call(null,inst_131822__$1,(1),null);var inst_131828 = cljs.core._EQ_.call(null,onTick,inst_131824__$1);var state_131877__$1 = (function (){var statearr_131883 = state_131877;(statearr_131883[(8)] = inst_131822__$1);
(statearr_131883[(9)] = inst_131824__$1);
(statearr_131883[(10)] = inst_131823);
return statearr_131883;
})();if(inst_131828)
{var statearr_131884_131931 = state_131877__$1;(statearr_131884_131931[(1)] = (5));
} else
{var statearr_131885_131932 = state_131877__$1;(statearr_131885_131932[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (13)))
{var inst_131870 = (state_131877[(2)]);var state_131877__$1 = state_131877;var statearr_131886_131933 = state_131877__$1;(statearr_131886_131933[(2)] = inst_131870);
(statearr_131886_131933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (6)))
{var inst_131824 = (state_131877[(9)]);var inst_131863 = cljs.core._EQ_.call(null,onView,inst_131824);var state_131877__$1 = state_131877;if(inst_131863)
{var statearr_131887_131934 = state_131877__$1;(statearr_131887_131934[(1)] = (11));
} else
{var statearr_131888_131935 = state_131877__$1;(statearr_131888_131935[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (3)))
{var inst_131875 = (state_131877[(2)]);var state_131877__$1 = state_131877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131877__$1,inst_131875);
} else
{if((state_val_131878 === (12)))
{var inst_131816 = (state_131877[(7)]);var state_131877__$1 = state_131877;var statearr_131889_131936 = state_131877__$1;(statearr_131889_131936[(2)] = inst_131816);
(statearr_131889_131936[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (2)))
{var inst_131819 = [onView,onTick];var inst_131820 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131819,null));var state_131877__$1 = state_131877;return cljs.core.async.ioc_alts_BANG_.call(null,state_131877__$1,(4),inst_131820);
} else
{if((state_val_131878 === (11)))
{var inst_131816 = (state_131877[(7)]);var inst_131823 = (state_131877[(10)]);var inst_131865 = (inst_131823[(0)]);var inst_131866 = (inst_131823[(1)]);var inst_131867 = app.particle.abstract$.onViewCommand.call(null,inst_131865,inst_131866,inst_131816);var state_131877__$1 = state_131877;var statearr_131890_131937 = state_131877__$1;(statearr_131890_131937[(2)] = inst_131867);
(statearr_131890_131937[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (9)))
{var inst_131816 = (state_131877[(7)]);var state_131877__$1 = state_131877;var statearr_131891_131938 = state_131877__$1;(statearr_131891_131938[(2)] = inst_131816);
(statearr_131891_131938[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (5)))
{var inst_131816 = (state_131877[(7)]);var inst_131831 = cljs.core.seq_QMARK_.call(null,inst_131816);var state_131877__$1 = state_131877;if(inst_131831)
{var statearr_131892_131939 = state_131877__$1;(statearr_131892_131939[(1)] = (8));
} else
{var statearr_131893_131940 = state_131877__$1;(statearr_131893_131940[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (10)))
{var inst_131816 = (state_131877[(7)]);var inst_131822 = (state_131877[(8)]);var inst_131824 = (state_131877[(9)]);var inst_131823 = (state_131877[(10)]);var inst_131836 = (state_131877[(2)]);var inst_131837 = cljs.core.get.call(null,inst_131836,new cljs.core.Keyword(null,"actions","actions",-812656882));var inst_131838 = cljs.core.partial.call(null,app.particle.main.handleAction,inst_131837);var inst_131846 = cljs.core.async.chan.call(null,(1));var inst_131847 = (function (){var ctx = inst_131816;var map__131830 = inst_131836;var expr__131826 = inst_131824;var v = inst_131823;var pred__131825 = cljs.core._EQ_;var actions = inst_131837;var ch = inst_131824;var c__6202__auto____$1 = inst_131846;var handleParticleAction = inst_131838;var vec__131818 = inst_131822;return ((function (ctx,map__131830,expr__131826,v,pred__131825,actions,ch,c__6202__auto____$1,handleParticleAction,vec__131818,inst_131816,inst_131822,inst_131824,inst_131823,inst_131836,inst_131837,inst_131838,inst_131846,state_val_131878,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (ctx,map__131830,expr__131826,v,pred__131825,actions,ch,c__6202__auto____$1,handleParticleAction,vec__131818,inst_131816,inst_131822,inst_131824,inst_131823,inst_131836,inst_131837,inst_131838,inst_131846,state_val_131878,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_131844){var state_val_131845 = (state_131844[(1)]);if((state_val_131845 === (2)))
{var inst_131842 = (state_131844[(2)]);var state_131844__$1 = state_131844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131844__$1,inst_131842);
} else
{if((state_val_131845 === (1)))
{var inst_131839 = ["tick",v];var inst_131840 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131839,null));var state_131844__$1 = state_131844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131844__$1,(2),onModelEvent,inst_131840);
} else
{return null;
}
}
});})(ctx,map__131830,expr__131826,v,pred__131825,actions,ch,c__6202__auto____$1,handleParticleAction,vec__131818,inst_131816,inst_131822,inst_131824,inst_131823,inst_131836,inst_131837,inst_131838,inst_131846,state_val_131878,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,ctx,map__131830,expr__131826,v,pred__131825,actions,ch,c__6202__auto____$1,handleParticleAction,vec__131818,inst_131816,inst_131822,inst_131824,inst_131823,inst_131836,inst_131837,inst_131838,inst_131846,state_val_131878,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131897 = [null,null,null,null,null,null,null];(statearr_131897[(0)] = state_machine__6188__auto__);
(statearr_131897[(1)] = (1));
return statearr_131897;
});
var state_machine__6188__auto____1 = (function (state_131844){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131844);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131898){if((e131898 instanceof Object))
{var ex__6191__auto__ = e131898;var statearr_131899_131941 = state_131844;(statearr_131899_131941[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131942 = state_131844;
state_131844 = G__131942;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131844){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,ctx,map__131830,expr__131826,v,pred__131825,actions,ch,c__6202__auto____$1,handleParticleAction,vec__131818,inst_131816,inst_131822,inst_131824,inst_131823,inst_131836,inst_131837,inst_131838,inst_131846,state_val_131878,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_131900 = f__6203__auto__.call(null);(statearr_131900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_131900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(ctx,map__131830,expr__131826,v,pred__131825,actions,ch,c__6202__auto____$1,handleParticleAction,vec__131818,inst_131816,inst_131822,inst_131824,inst_131823,inst_131836,inst_131837,inst_131838,inst_131846,state_val_131878,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_131848 = cljs.core.async.impl.dispatch.run.call(null,inst_131847);var inst_131849 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_131850 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131849,null));var inst_131851 = cljs.core.partial.call(null,cljs.core.map,inst_131838);var inst_131852 = cljs.core.update_in.call(null,inst_131816,inst_131850,inst_131851);var inst_131853 = [new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_131854 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131853,null));var inst_131855 = cljs.core.List.EMPTY;var inst_131856 = cljs.core.assoc_in.call(null,inst_131852,inst_131854,inst_131855);var inst_131857 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_131858 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_131857,null));var inst_131859 = cljs.core.partial.call(null,tool.particle.update,inst_131823);var inst_131860 = cljs.core.update_in.call(null,inst_131856,inst_131858,inst_131859);var inst_131861 = draw.call(null,inst_131860);var state_131877__$1 = (function (){var statearr_131901 = state_131877;(statearr_131901[(11)] = inst_131848);
return statearr_131901;
})();var statearr_131902_131943 = state_131877__$1;(statearr_131902_131943[(2)] = inst_131861);
(statearr_131902_131943[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_131878 === (8)))
{var inst_131816 = (state_131877[(7)]);var inst_131833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_131816);var state_131877__$1 = state_131877;var statearr_131903_131944 = state_131877__$1;(statearr_131903_131944[(2)] = inst_131833);
(statearr_131903_131944[(1)] = (10));
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
});})(c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_131907 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_131907[(0)] = state_machine__6188__auto__);
(statearr_131907[(1)] = (1));
return statearr_131907;
});
var state_machine__6188__auto____1 = (function (state_131877){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_131877);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e131908){if((e131908 instanceof Object))
{var ex__6191__auto__ = e131908;var statearr_131909_131945 = state_131877;(statearr_131909_131945[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e131908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__131946 = state_131877;
state_131877 = G__131946;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_131877){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_131877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_131910 = f__6203__auto__.call(null);(statearr_131910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___131928);
return statearr_131910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___131928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
