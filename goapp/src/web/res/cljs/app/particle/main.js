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
return (function (state_134363){var state_val_134364 = (state_134363[(1)]);if((state_val_134364 === (5)))
{var inst_134361 = (state_134363[(2)]);var state_134363__$1 = state_134363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134363__$1,inst_134361);
} else
{if((state_val_134364 === (4)))
{var inst_134331 = (state_134363[(2)]);var inst_134338 = [(0),(0),(0)];var inst_134339 = [(1),(0),(1),(1)];var inst_134340 = [(10),(20)];var inst_134341 = [(0),(0),(0)];var inst_134342 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_134343 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_134344 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_134345 = [inst_134342,inst_134343,inst_134344];var inst_134346 = {"position":inst_134338,"color":inst_134339,"size":inst_134340,"vel":inst_134341,"tex":"img_map","formulaList":inst_134345};var inst_134347 = [inst_134346];var inst_134348 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_134347};var inst_134349 = [(0),(0),(1),(1)];var inst_134350 = [(30),(10)];var inst_134351 = [(10),(10),(0)];var inst_134352 = [(0),(0),(0)];var inst_134353 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_134354 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_134355 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_134356 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_134357 = [inst_134353,inst_134354,inst_134355,inst_134356];var inst_134358 = {"id":"x1","emit":inst_134348,"color":inst_134349,"size":inst_134350,"pos":inst_134351,"vel":inst_134352,"tex":"img_face","formulaList":inst_134357};var inst_134359 = ["edit-particle",inst_134358];var state_134363__$1 = (function (){var statearr_134365 = state_134363;(statearr_134365[(7)] = inst_134331);
return statearr_134365;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134363__$1,(5),onView,inst_134359);
} else
{if((state_val_134364 === (3)))
{var inst_134328 = (state_134363[(2)]);var inst_134329 = cljs.core.async.timeout.call(null,(1100));var state_134363__$1 = (function (){var statearr_134366 = state_134363;(statearr_134366[(8)] = inst_134328);
return statearr_134366;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134363__$1,(4),inst_134329);
} else
{if((state_val_134364 === (2)))
{var inst_134321 = (state_134363[(2)]);var inst_134324 = [(10),(10),(0)];var inst_134325 = {"id":"x1","pos":inst_134324};var inst_134326 = ["edit-particle",inst_134325];var state_134363__$1 = (function (){var statearr_134367 = state_134363;(statearr_134367[(9)] = inst_134321);
return statearr_134367;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134363__$1,(3),onView,inst_134326);
} else
{if((state_val_134364 === (1)))
{var inst_134319 = cljs.core.async.timeout.call(null,(1000));var state_134363__$1 = state_134363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134363__$1,(2),inst_134319);
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
var state_machine__6188__auto____0 = (function (){var statearr_134371 = [null,null,null,null,null,null,null,null,null,null];(statearr_134371[(0)] = state_machine__6188__auto__);
(statearr_134371[(1)] = (1));
return statearr_134371;
});
var state_machine__6188__auto____1 = (function (state_134363){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134363);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134372){if((e134372 instanceof Object))
{var ex__6191__auto__ = e134372;var statearr_134373_134375 = state_134363;(statearr_134373_134375[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134376 = state_134363;
state_134363 = G__134376;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134363){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_134374 = f__6203__auto__.call(null);(statearr_134374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_134374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj134557 = {};return obj134557;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134561){var state_val_134562 = (state_134561[(1)]);if((state_val_134562 === (2)))
{var inst_134559 = (state_134561[(2)]);var state_134561__$1 = state_134561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134561__$1,inst_134559);
} else
{if((state_val_134562 === (1)))
{var state_134561__$1 = state_134561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134561__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134566 = [null,null,null,null,null,null,null];(statearr_134566[(0)] = state_machine__6188__auto__);
(statearr_134566[(1)] = (1));
return statearr_134566;
});
var state_machine__6188__auto____1 = (function (state_134561){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134561);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134567){if((e134567 instanceof Object))
{var ex__6191__auto__ = e134567;var statearr_134568_134735 = state_134561;(statearr_134568_134735[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134736 = state_134561;
state_134561 = G__134736;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134561){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134569 = f__6203__auto__.call(null);(statearr_134569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_134569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134737 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134583){var state_val_134584 = (state_134583[(1)]);if((state_val_134584 === (4)))
{var inst_134573 = (state_134583[(2)]);var inst_134574 = cljs.core.nth.call(null,inst_134573,(0),null);var inst_134575 = cljs.core.nth.call(null,inst_134573,(1),null);var inst_134576 = cljs.core.nth.call(null,inst_134573,(2),null);var inst_134577 = [inst_134574,inst_134575,inst_134576];var inst_134578 = common.onModel.onNext(inst_134577);var state_134583__$1 = (function (){var statearr_134585 = state_134583;(statearr_134585[(7)] = inst_134578);
return statearr_134585;
})();var statearr_134586_134738 = state_134583__$1;(statearr_134586_134738[(2)] = null);
(statearr_134586_134738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134584 === (3)))
{var inst_134581 = (state_134583[(2)]);var state_134583__$1 = state_134583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134583__$1,inst_134581);
} else
{if((state_val_134584 === (2)))
{var state_134583__$1 = state_134583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134583__$1,(4),onModel);
} else
{if((state_val_134584 === (1)))
{var state_134583__$1 = state_134583;var statearr_134587_134739 = state_134583__$1;(statearr_134587_134739[(2)] = null);
(statearr_134587_134739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___134737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134591 = [null,null,null,null,null,null,null,null];(statearr_134591[(0)] = state_machine__6188__auto__);
(statearr_134591[(1)] = (1));
return statearr_134591;
});
var state_machine__6188__auto____1 = (function (state_134583){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134592){if((e134592 instanceof Object))
{var ex__6191__auto__ = e134592;var statearr_134593_134740 = state_134583;(statearr_134593_134740[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134741 = state_134583;
state_134583 = G__134741;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134583){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134594 = f__6203__auto__.call(null);(statearr_134594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134737);
return statearr_134594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134737,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134742,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134742,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134607){var state_val_134608 = (state_134607[(1)]);if((state_val_134608 === (4)))
{var inst_134598 = (state_134607[(2)]);var inst_134599 = cljs.core.nth.call(null,inst_134598,(0),null);var inst_134600 = cljs.core.nth.call(null,inst_134598,(1),null);var inst_134601 = [inst_134599,inst_134600];var inst_134602 = common.onModelEvent.onNext(inst_134601);var state_134607__$1 = (function (){var statearr_134609 = state_134607;(statearr_134609[(7)] = inst_134602);
return statearr_134609;
})();var statearr_134610_134743 = state_134607__$1;(statearr_134610_134743[(2)] = null);
(statearr_134610_134743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134608 === (3)))
{var inst_134605 = (state_134607[(2)]);var state_134607__$1 = state_134607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134607__$1,inst_134605);
} else
{if((state_val_134608 === (2)))
{var state_134607__$1 = state_134607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134607__$1,(4),onModelEvent);
} else
{if((state_val_134608 === (1)))
{var state_134607__$1 = state_134607;var statearr_134611_134744 = state_134607__$1;(statearr_134611_134744[(2)] = null);
(statearr_134611_134744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___134742,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134742,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134615 = [null,null,null,null,null,null,null,null];(statearr_134615[(0)] = state_machine__6188__auto__);
(statearr_134615[(1)] = (1));
return statearr_134615;
});
var state_machine__6188__auto____1 = (function (state_134607){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134616){if((e134616 instanceof Object))
{var ex__6191__auto__ = e134616;var statearr_134617_134745 = state_134607;(statearr_134617_134745[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134746 = state_134607;
state_134607 = G__134746;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134607){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134742,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134618 = f__6203__auto__.call(null);(statearr_134618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134742);
return statearr_134618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134742,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134747 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134747,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134747,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134637){var state_val_134638 = (state_134637[(1)]);if((state_val_134638 === (5)))
{var inst_134621 = (state_134637[(7)]);var inst_134628 = (state_134637[(8)]);var inst_134632 = (state_134637[(2)]);var tmp134639 = inst_134621;var inst_134621__$1 = tmp134639;var inst_134622 = inst_134628;var state_134637__$1 = (function (){var statearr_134640 = state_134637;(statearr_134640[(9)] = inst_134622);
(statearr_134640[(7)] = inst_134621__$1);
(statearr_134640[(10)] = inst_134632);
return statearr_134640;
})();var statearr_134641_134748 = state_134637__$1;(statearr_134641_134748[(2)] = null);
(statearr_134641_134748[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134638 === (4)))
{var inst_134622 = (state_134637[(9)]);var inst_134628 = (state_134637[(8)]);var inst_134626 = (state_134637[(2)]);var inst_134627 = (new Date());var inst_134628__$1 = inst_134627.getTime();var inst_134629 = (inst_134628__$1 - inst_134622);var inst_134630 = (inst_134629 / (1000));var state_134637__$1 = (function (){var statearr_134642 = state_134637;(statearr_134642[(11)] = inst_134626);
(statearr_134642[(8)] = inst_134628__$1);
return statearr_134642;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134637__$1,(5),onTick,inst_134630);
} else
{if((state_val_134638 === (3)))
{var inst_134635 = (state_134637[(2)]);var state_134637__$1 = state_134637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134637__$1,inst_134635);
} else
{if((state_val_134638 === (2)))
{var inst_134621 = (state_134637[(7)]);var inst_134624 = cljs.core.async.timeout.call(null,inst_134621);var state_134637__$1 = state_134637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134637__$1,(4),inst_134624);
} else
{if((state_val_134638 === (1)))
{var inst_134619 = (new Date());var inst_134620 = inst_134619.getTime();var inst_134621 = mspf;var inst_134622 = inst_134620;var state_134637__$1 = (function (){var statearr_134643 = state_134637;(statearr_134643[(9)] = inst_134622);
(statearr_134643[(7)] = inst_134621);
return statearr_134643;
})();var statearr_134644_134749 = state_134637__$1;(statearr_134644_134749[(2)] = null);
(statearr_134644_134749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___134747,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134747,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134648 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_134648[(0)] = state_machine__6188__auto__);
(statearr_134648[(1)] = (1));
return statearr_134648;
});
var state_machine__6188__auto____1 = (function (state_134637){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134649){if((e134649 instanceof Object))
{var ex__6191__auto__ = e134649;var statearr_134650_134750 = state_134637;(statearr_134650_134750[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134751 = state_134637;
state_134637 = G__134751;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134637){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134747,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134651 = f__6203__auto__.call(null);(statearr_134651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134747);
return statearr_134651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134747,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___134752 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134705){var state_val_134706 = (state_134705[(1)]);if((state_val_134706 === (7)))
{var inst_134700 = (state_134705[(2)]);var inst_134661 = inst_134700;var state_134705__$1 = (function (){var statearr_134707 = state_134705;(statearr_134707[(7)] = inst_134661);
return statearr_134707;
})();var statearr_134708_134753 = state_134705__$1;(statearr_134708_134753[(2)] = null);
(statearr_134708_134753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (1)))
{var inst_134652 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_134653 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_134654 = cljs.core.List.EMPTY;var inst_134655 = [inst_134654,(200)];var inst_134656 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_134653,inst_134655);var inst_134657 = [(0),(0)];var inst_134658 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134657,null));var inst_134659 = [(0),inst_134656,inst_134658,onModel,gl__$1];var inst_134660 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_134652,inst_134659);var inst_134661 = inst_134660;var state_134705__$1 = (function (){var statearr_134709 = state_134705;(statearr_134709[(7)] = inst_134661);
return statearr_134709;
})();var statearr_134710_134754 = state_134705__$1;(statearr_134710_134754[(2)] = null);
(statearr_134710_134754[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (4)))
{var inst_134667 = (state_134705[(8)]);var inst_134669 = (state_134705[(9)]);var inst_134667__$1 = (state_134705[(2)]);var inst_134668 = cljs.core.nth.call(null,inst_134667__$1,(0),null);var inst_134669__$1 = cljs.core.nth.call(null,inst_134667__$1,(1),null);var inst_134673 = cljs.core._EQ_.call(null,onTick,inst_134669__$1);var state_134705__$1 = (function (){var statearr_134711 = state_134705;(statearr_134711[(8)] = inst_134667__$1);
(statearr_134711[(9)] = inst_134669__$1);
(statearr_134711[(10)] = inst_134668);
return statearr_134711;
})();if(inst_134673)
{var statearr_134712_134755 = state_134705__$1;(statearr_134712_134755[(1)] = (5));
} else
{var statearr_134713_134756 = state_134705__$1;(statearr_134713_134756[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (6)))
{var inst_134669 = (state_134705[(9)]);var inst_134691 = cljs.core._EQ_.call(null,onView,inst_134669);var state_134705__$1 = state_134705;if(inst_134691)
{var statearr_134714_134757 = state_134705__$1;(statearr_134714_134757[(1)] = (8));
} else
{var statearr_134715_134758 = state_134705__$1;(statearr_134715_134758[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (3)))
{var inst_134703 = (state_134705[(2)]);var state_134705__$1 = state_134705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134705__$1,inst_134703);
} else
{if((state_val_134706 === (2)))
{var inst_134664 = [onView,onTick];var inst_134665 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134664,null));var state_134705__$1 = state_134705;return cljs.core.async.ioc_alts_BANG_.call(null,state_134705__$1,(4),inst_134665);
} else
{if((state_val_134706 === (9)))
{var inst_134661 = (state_134705[(7)]);var state_134705__$1 = state_134705;var statearr_134716_134759 = state_134705__$1;(statearr_134716_134759[(2)] = inst_134661);
(statearr_134716_134759[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (5)))
{var inst_134667 = (state_134705[(8)]);var inst_134661 = (state_134705[(7)]);var inst_134669 = (state_134705[(9)]);var inst_134668 = (state_134705[(10)]);var inst_134682 = cljs.core.async.chan.call(null,(1));var inst_134683 = (function (){var c__6202__auto____$1 = inst_134682;var expr__134671 = inst_134669;var pred__134670 = cljs.core._EQ_;var ch = inst_134669;var v = inst_134668;var vec__134663 = inst_134667;var ctx = inst_134661;return ((function (c__6202__auto____$1,expr__134671,pred__134670,ch,v,vec__134663,ctx,inst_134667,inst_134661,inst_134669,inst_134668,inst_134682,state_val_134706,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__134671,pred__134670,ch,v,vec__134663,ctx,inst_134667,inst_134661,inst_134669,inst_134668,inst_134682,state_val_134706,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_134680){var state_val_134681 = (state_134680[(1)]);if((state_val_134681 === (2)))
{var inst_134678 = (state_134680[(2)]);var state_134680__$1 = state_134680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134680__$1,inst_134678);
} else
{if((state_val_134681 === (1)))
{var inst_134675 = ["tick",v];var inst_134676 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134675,null));var state_134680__$1 = state_134680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_134680__$1,(2),onModelEvent,inst_134676);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__134671,pred__134670,ch,v,vec__134663,ctx,inst_134667,inst_134661,inst_134669,inst_134668,inst_134682,state_val_134706,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__134671,pred__134670,ch,v,vec__134663,ctx,inst_134667,inst_134661,inst_134669,inst_134668,inst_134682,state_val_134706,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134720 = [null,null,null,null,null,null,null];(statearr_134720[(0)] = state_machine__6188__auto__);
(statearr_134720[(1)] = (1));
return statearr_134720;
});
var state_machine__6188__auto____1 = (function (state_134680){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134680);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134721){if((e134721 instanceof Object))
{var ex__6191__auto__ = e134721;var statearr_134722_134760 = state_134680;(statearr_134722_134760[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134680);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134761 = state_134680;
state_134680 = G__134761;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134680){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__134671,pred__134670,ch,v,vec__134663,ctx,inst_134667,inst_134661,inst_134669,inst_134668,inst_134682,state_val_134706,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134723 = f__6203__auto__.call(null);(statearr_134723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_134723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__134671,pred__134670,ch,v,vec__134663,ctx,inst_134667,inst_134661,inst_134669,inst_134668,inst_134682,state_val_134706,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_134684 = cljs.core.async.impl.dispatch.run.call(null,inst_134683);var inst_134685 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_134686 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_134685,null));var inst_134687 = cljs.core.partial.call(null,tool.particle.update,inst_134668);var inst_134688 = cljs.core.update_in.call(null,inst_134661,inst_134686,inst_134687);var inst_134689 = draw.call(null,inst_134688);var state_134705__$1 = (function (){var statearr_134724 = state_134705;(statearr_134724[(11)] = inst_134684);
return statearr_134724;
})();var statearr_134725_134762 = state_134705__$1;(statearr_134725_134762[(2)] = inst_134689);
(statearr_134725_134762[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (10)))
{var inst_134698 = (state_134705[(2)]);var state_134705__$1 = state_134705;var statearr_134726_134763 = state_134705__$1;(statearr_134726_134763[(2)] = inst_134698);
(statearr_134726_134763[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_134706 === (8)))
{var inst_134661 = (state_134705[(7)]);var inst_134668 = (state_134705[(10)]);var inst_134693 = (inst_134668[(0)]);var inst_134694 = (inst_134668[(1)]);var inst_134695 = app.particle.abstract$.onViewCommand.call(null,inst_134693,inst_134694,inst_134661);var state_134705__$1 = state_134705;var statearr_134727_134764 = state_134705__$1;(statearr_134727_134764[(2)] = inst_134695);
(statearr_134727_134764[(1)] = (10));
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
});})(c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_134731 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_134731[(0)] = state_machine__6188__auto__);
(statearr_134731[(1)] = (1));
return statearr_134731;
});
var state_machine__6188__auto____1 = (function (state_134705){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_134705);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e134732){if((e134732 instanceof Object))
{var ex__6191__auto__ = e134732;var statearr_134733_134765 = state_134705;(statearr_134733_134765[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e134732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__134766 = state_134705;
state_134705 = G__134766;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_134705){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_134705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_134734 = f__6203__auto__.call(null);(statearr_134734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___134752);
return statearr_134734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___134752,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
