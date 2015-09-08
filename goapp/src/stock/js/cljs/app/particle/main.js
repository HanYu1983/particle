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
return (function (state_52451){var state_val_52452 = (state_52451[(1)]);if((state_val_52452 === (5)))
{var inst_52449 = (state_52451[(2)]);var state_52451__$1 = state_52451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52451__$1,inst_52449);
} else
{if((state_val_52452 === (4)))
{var inst_52419 = (state_52451[(2)]);var inst_52426 = [(0),(0),(0)];var inst_52427 = [(1),(0),(1),(1)];var inst_52428 = [(10),(20)];var inst_52429 = [(0),(0),(0)];var inst_52430 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_52431 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_52432 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_52433 = [inst_52430,inst_52431,inst_52432];var inst_52434 = {"position":inst_52426,"color":inst_52427,"size":inst_52428,"vel":inst_52429,"tex":"img_map","formulaList":inst_52433};var inst_52435 = [inst_52434];var inst_52436 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_52435};var inst_52437 = [(0),(0),(1),(1)];var inst_52438 = [(30),(10)];var inst_52439 = [(10),(10),(0)];var inst_52440 = [(0),(0),(0)];var inst_52441 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_52442 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_52443 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_52444 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_52445 = [inst_52441,inst_52442,inst_52443,inst_52444];var inst_52446 = {"id":"x1","emit":inst_52436,"color":inst_52437,"size":inst_52438,"pos":inst_52439,"vel":inst_52440,"tex":"img_face","formulaList":inst_52445};var inst_52447 = ["edit-particle",inst_52446];var state_52451__$1 = (function (){var statearr_52453 = state_52451;(statearr_52453[(7)] = inst_52419);
return statearr_52453;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52451__$1,(5),onView,inst_52447);
} else
{if((state_val_52452 === (3)))
{var inst_52416 = (state_52451[(2)]);var inst_52417 = cljs.core.async.timeout.call(null,(1100));var state_52451__$1 = (function (){var statearr_52454 = state_52451;(statearr_52454[(8)] = inst_52416);
return statearr_52454;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52451__$1,(4),inst_52417);
} else
{if((state_val_52452 === (2)))
{var inst_52409 = (state_52451[(2)]);var inst_52412 = [(10),(10),(0)];var inst_52413 = {"id":"x1","pos":inst_52412};var inst_52414 = ["edit-particle",inst_52413];var state_52451__$1 = (function (){var statearr_52455 = state_52451;(statearr_52455[(9)] = inst_52409);
return statearr_52455;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52451__$1,(3),onView,inst_52414);
} else
{if((state_val_52452 === (1)))
{var inst_52407 = cljs.core.async.timeout.call(null,(1000));var state_52451__$1 = state_52451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52451__$1,(2),inst_52407);
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
var state_machine__6188__auto____0 = (function (){var statearr_52459 = [null,null,null,null,null,null,null,null,null,null];(statearr_52459[(0)] = state_machine__6188__auto__);
(statearr_52459[(1)] = (1));
return statearr_52459;
});
var state_machine__6188__auto____1 = (function (state_52451){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52460){if((e52460 instanceof Object))
{var ex__6191__auto__ = e52460;var statearr_52461_52463 = state_52451;(statearr_52461_52463[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52464 = state_52451;
state_52451 = G__52464;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52451){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_52462 = f__6203__auto__.call(null);(statearr_52462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_52462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (30)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj52647 = {};return obj52647;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_52651){var state_val_52652 = (state_52651[(1)]);if((state_val_52652 === (2)))
{var inst_52649 = (state_52651[(2)]);var state_52651__$1 = state_52651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52651__$1,inst_52649);
} else
{if((state_val_52652 === (1)))
{var state_52651__$1 = state_52651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52651__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52656 = [null,null,null,null,null,null,null];(statearr_52656[(0)] = state_machine__6188__auto__);
(statearr_52656[(1)] = (1));
return statearr_52656;
});
var state_machine__6188__auto____1 = (function (state_52651){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52657){if((e52657 instanceof Object))
{var ex__6191__auto__ = e52657;var statearr_52658_52827 = state_52651;(statearr_52658_52827[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52828 = state_52651;
state_52651 = G__52828;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52651){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52659 = f__6203__auto__.call(null);(statearr_52659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_52659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52829,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52829,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_52673){var state_val_52674 = (state_52673[(1)]);if((state_val_52674 === (4)))
{var inst_52663 = (state_52673[(2)]);var inst_52664 = cljs.core.nth.call(null,inst_52663,(0),null);var inst_52665 = cljs.core.nth.call(null,inst_52663,(1),null);var inst_52666 = cljs.core.nth.call(null,inst_52663,(2),null);var inst_52667 = [inst_52664,inst_52665,inst_52666];var inst_52668 = common.onModel.onNext(inst_52667);var state_52673__$1 = (function (){var statearr_52675 = state_52673;(statearr_52675[(7)] = inst_52668);
return statearr_52675;
})();var statearr_52676_52830 = state_52673__$1;(statearr_52676_52830[(2)] = null);
(statearr_52676_52830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52674 === (3)))
{var inst_52671 = (state_52673[(2)]);var state_52673__$1 = state_52673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52673__$1,inst_52671);
} else
{if((state_val_52674 === (2)))
{var state_52673__$1 = state_52673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52673__$1,(4),onModel);
} else
{if((state_val_52674 === (1)))
{var state_52673__$1 = state_52673;var statearr_52677_52831 = state_52673__$1;(statearr_52677_52831[(2)] = null);
(statearr_52677_52831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___52829,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52829,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52681 = [null,null,null,null,null,null,null,null];(statearr_52681[(0)] = state_machine__6188__auto__);
(statearr_52681[(1)] = (1));
return statearr_52681;
});
var state_machine__6188__auto____1 = (function (state_52673){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52673);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52682){if((e52682 instanceof Object))
{var ex__6191__auto__ = e52682;var statearr_52683_52832 = state_52673;(statearr_52683_52832[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52673);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52833 = state_52673;
state_52673 = G__52833;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52673){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52829,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52684 = f__6203__auto__.call(null);(statearr_52684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52829);
return statearr_52684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52829,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52834,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52834,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_52697){var state_val_52698 = (state_52697[(1)]);if((state_val_52698 === (4)))
{var inst_52688 = (state_52697[(2)]);var inst_52689 = cljs.core.nth.call(null,inst_52688,(0),null);var inst_52690 = cljs.core.nth.call(null,inst_52688,(1),null);var inst_52691 = [inst_52689,inst_52690];var inst_52692 = common.onModelEvent.onNext(inst_52691);var state_52697__$1 = (function (){var statearr_52699 = state_52697;(statearr_52699[(7)] = inst_52692);
return statearr_52699;
})();var statearr_52700_52835 = state_52697__$1;(statearr_52700_52835[(2)] = null);
(statearr_52700_52835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52698 === (3)))
{var inst_52695 = (state_52697[(2)]);var state_52697__$1 = state_52697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52697__$1,inst_52695);
} else
{if((state_val_52698 === (2)))
{var state_52697__$1 = state_52697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52697__$1,(4),onModelEvent);
} else
{if((state_val_52698 === (1)))
{var state_52697__$1 = state_52697;var statearr_52701_52836 = state_52697__$1;(statearr_52701_52836[(2)] = null);
(statearr_52701_52836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___52834,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52834,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52705 = [null,null,null,null,null,null,null,null];(statearr_52705[(0)] = state_machine__6188__auto__);
(statearr_52705[(1)] = (1));
return statearr_52705;
});
var state_machine__6188__auto____1 = (function (state_52697){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52697);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52706){if((e52706 instanceof Object))
{var ex__6191__auto__ = e52706;var statearr_52707_52837 = state_52697;(statearr_52707_52837[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52838 = state_52697;
state_52697 = G__52838;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52697){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52834,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52708 = f__6203__auto__.call(null);(statearr_52708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52834);
return statearr_52708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52834,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52839 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52839,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52839,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_52727){var state_val_52728 = (state_52727[(1)]);if((state_val_52728 === (5)))
{var inst_52718 = (state_52727[(7)]);var inst_52711 = (state_52727[(8)]);var inst_52722 = (state_52727[(2)]);var tmp52729 = inst_52711;var inst_52711__$1 = tmp52729;var inst_52712 = inst_52718;var state_52727__$1 = (function (){var statearr_52730 = state_52727;(statearr_52730[(9)] = inst_52722);
(statearr_52730[(10)] = inst_52712);
(statearr_52730[(8)] = inst_52711__$1);
return statearr_52730;
})();var statearr_52731_52840 = state_52727__$1;(statearr_52731_52840[(2)] = null);
(statearr_52731_52840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52728 === (4)))
{var inst_52718 = (state_52727[(7)]);var inst_52712 = (state_52727[(10)]);var inst_52716 = (state_52727[(2)]);var inst_52717 = (new Date());var inst_52718__$1 = inst_52717.getTime();var inst_52719 = (inst_52718__$1 - inst_52712);var inst_52720 = (inst_52719 / (1000));var state_52727__$1 = (function (){var statearr_52732 = state_52727;(statearr_52732[(7)] = inst_52718__$1);
(statearr_52732[(11)] = inst_52716);
return statearr_52732;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52727__$1,(5),onTick,inst_52720);
} else
{if((state_val_52728 === (3)))
{var inst_52725 = (state_52727[(2)]);var state_52727__$1 = state_52727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52727__$1,inst_52725);
} else
{if((state_val_52728 === (2)))
{var inst_52711 = (state_52727[(8)]);var inst_52714 = cljs.core.async.timeout.call(null,inst_52711);var state_52727__$1 = state_52727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52727__$1,(4),inst_52714);
} else
{if((state_val_52728 === (1)))
{var inst_52709 = (new Date());var inst_52710 = inst_52709.getTime();var inst_52711 = mspf;var inst_52712 = inst_52710;var state_52727__$1 = (function (){var statearr_52733 = state_52727;(statearr_52733[(10)] = inst_52712);
(statearr_52733[(8)] = inst_52711);
return statearr_52733;
})();var statearr_52734_52841 = state_52727__$1;(statearr_52734_52841[(2)] = null);
(statearr_52734_52841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___52839,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52839,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52738 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52738[(0)] = state_machine__6188__auto__);
(statearr_52738[(1)] = (1));
return statearr_52738;
});
var state_machine__6188__auto____1 = (function (state_52727){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52739){if((e52739 instanceof Object))
{var ex__6191__auto__ = e52739;var statearr_52740_52842 = state_52727;(statearr_52740_52842[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52843 = state_52727;
state_52727 = G__52843;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52727){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52839,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52741 = f__6203__auto__.call(null);(statearr_52741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52839);
return statearr_52741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52839,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___52844 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_52797){var state_val_52798 = (state_52797[(1)]);if((state_val_52798 === (7)))
{var inst_52792 = (state_52797[(2)]);var inst_52753 = inst_52792;var state_52797__$1 = (function (){var statearr_52799 = state_52797;(statearr_52799[(7)] = inst_52753);
return statearr_52799;
})();var statearr_52800_52845 = state_52797__$1;(statearr_52800_52845[(2)] = null);
(statearr_52800_52845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (1)))
{var inst_52742 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_52743 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_52744 = cljs.core.List.EMPTY;var inst_52745 = [inst_52744,(200)];var inst_52746 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_52743,inst_52745);var inst_52747 = [0.0,0.5,0.35];var inst_52748 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52747,null));var inst_52749 = [(0),(0)];var inst_52750 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52749,null));var inst_52751 = [inst_52746,inst_52748,inst_52750,onModel,gl__$1];var inst_52752 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_52742,inst_52751);var inst_52753 = inst_52752;var state_52797__$1 = (function (){var statearr_52801 = state_52797;(statearr_52801[(7)] = inst_52753);
return statearr_52801;
})();var statearr_52802_52846 = state_52797__$1;(statearr_52802_52846[(2)] = null);
(statearr_52802_52846[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (4)))
{var inst_52759 = (state_52797[(8)]);var inst_52761 = (state_52797[(9)]);var inst_52759__$1 = (state_52797[(2)]);var inst_52760 = cljs.core.nth.call(null,inst_52759__$1,(0),null);var inst_52761__$1 = cljs.core.nth.call(null,inst_52759__$1,(1),null);var inst_52765 = cljs.core._EQ_.call(null,onTick,inst_52761__$1);var state_52797__$1 = (function (){var statearr_52803 = state_52797;(statearr_52803[(8)] = inst_52759__$1);
(statearr_52803[(9)] = inst_52761__$1);
(statearr_52803[(10)] = inst_52760);
return statearr_52803;
})();if(inst_52765)
{var statearr_52804_52847 = state_52797__$1;(statearr_52804_52847[(1)] = (5));
} else
{var statearr_52805_52848 = state_52797__$1;(statearr_52805_52848[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (6)))
{var inst_52761 = (state_52797[(9)]);var inst_52783 = cljs.core._EQ_.call(null,onView,inst_52761);var state_52797__$1 = state_52797;if(inst_52783)
{var statearr_52806_52849 = state_52797__$1;(statearr_52806_52849[(1)] = (8));
} else
{var statearr_52807_52850 = state_52797__$1;(statearr_52807_52850[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (3)))
{var inst_52795 = (state_52797[(2)]);var state_52797__$1 = state_52797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52797__$1,inst_52795);
} else
{if((state_val_52798 === (2)))
{var inst_52756 = [onView,onTick];var inst_52757 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52756,null));var state_52797__$1 = state_52797;return cljs.core.async.ioc_alts_BANG_.call(null,state_52797__$1,(4),inst_52757);
} else
{if((state_val_52798 === (9)))
{var inst_52753 = (state_52797[(7)]);var state_52797__$1 = state_52797;var statearr_52808_52851 = state_52797__$1;(statearr_52808_52851[(2)] = inst_52753);
(statearr_52808_52851[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (5)))
{var inst_52759 = (state_52797[(8)]);var inst_52761 = (state_52797[(9)]);var inst_52753 = (state_52797[(7)]);var inst_52760 = (state_52797[(10)]);var inst_52774 = cljs.core.async.chan.call(null,(1));var inst_52775 = (function (){var c__6202__auto____$1 = inst_52774;var expr__52763 = inst_52761;var pred__52762 = cljs.core._EQ_;var ch = inst_52761;var v = inst_52760;var vec__52755 = inst_52759;var ctx = inst_52753;return ((function (c__6202__auto____$1,expr__52763,pred__52762,ch,v,vec__52755,ctx,inst_52759,inst_52761,inst_52753,inst_52760,inst_52774,state_val_52798,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__52763,pred__52762,ch,v,vec__52755,ctx,inst_52759,inst_52761,inst_52753,inst_52760,inst_52774,state_val_52798,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_52772){var state_val_52773 = (state_52772[(1)]);if((state_val_52773 === (2)))
{var inst_52770 = (state_52772[(2)]);var state_52772__$1 = state_52772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52772__$1,inst_52770);
} else
{if((state_val_52773 === (1)))
{var inst_52767 = ["tick",v];var inst_52768 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52767,null));var state_52772__$1 = state_52772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52772__$1,(2),onModelEvent,inst_52768);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__52763,pred__52762,ch,v,vec__52755,ctx,inst_52759,inst_52761,inst_52753,inst_52760,inst_52774,state_val_52798,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__52763,pred__52762,ch,v,vec__52755,ctx,inst_52759,inst_52761,inst_52753,inst_52760,inst_52774,state_val_52798,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52812 = [null,null,null,null,null,null,null];(statearr_52812[(0)] = state_machine__6188__auto__);
(statearr_52812[(1)] = (1));
return statearr_52812;
});
var state_machine__6188__auto____1 = (function (state_52772){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52772);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52813){if((e52813 instanceof Object))
{var ex__6191__auto__ = e52813;var statearr_52814_52852 = state_52772;(statearr_52814_52852[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52853 = state_52772;
state_52772 = G__52853;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52772){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__52763,pred__52762,ch,v,vec__52755,ctx,inst_52759,inst_52761,inst_52753,inst_52760,inst_52774,state_val_52798,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52815 = f__6203__auto__.call(null);(statearr_52815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_52815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__52763,pred__52762,ch,v,vec__52755,ctx,inst_52759,inst_52761,inst_52753,inst_52760,inst_52774,state_val_52798,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_52776 = cljs.core.async.impl.dispatch.run.call(null,inst_52775);var inst_52777 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_52778 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52777,null));var inst_52779 = cljs.core.partial.call(null,tool.particle.update,inst_52760);var inst_52780 = cljs.core.update_in.call(null,inst_52753,inst_52778,inst_52779);var inst_52781 = draw.call(null,inst_52780);var state_52797__$1 = (function (){var statearr_52816 = state_52797;(statearr_52816[(11)] = inst_52776);
return statearr_52816;
})();var statearr_52817_52854 = state_52797__$1;(statearr_52817_52854[(2)] = inst_52781);
(statearr_52817_52854[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (10)))
{var inst_52790 = (state_52797[(2)]);var state_52797__$1 = state_52797;var statearr_52818_52855 = state_52797__$1;(statearr_52818_52855[(2)] = inst_52790);
(statearr_52818_52855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52798 === (8)))
{var inst_52753 = (state_52797[(7)]);var inst_52760 = (state_52797[(10)]);var inst_52785 = (inst_52760[(0)]);var inst_52786 = (inst_52760[(1)]);var inst_52787 = app.particle.abstract$.onViewCommand.call(null,inst_52785,inst_52786,inst_52753);var state_52797__$1 = state_52797;var statearr_52819_52856 = state_52797__$1;(statearr_52819_52856[(2)] = inst_52787);
(statearr_52819_52856[(1)] = (10));
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
});})(c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52823 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52823[(0)] = state_machine__6188__auto__);
(statearr_52823[(1)] = (1));
return statearr_52823;
});
var state_machine__6188__auto____1 = (function (state_52797){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52824){if((e52824 instanceof Object))
{var ex__6191__auto__ = e52824;var statearr_52825_52857 = state_52797;(statearr_52825_52857[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52858 = state_52797;
state_52797 = G__52858;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52797){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_52826 = f__6203__auto__.call(null);(statearr_52826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52844);
return statearr_52826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52844,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
