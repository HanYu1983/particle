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
return (function (state_135323){var state_val_135324 = (state_135323[(1)]);if((state_val_135324 === (5)))
{var inst_135321 = (state_135323[(2)]);var state_135323__$1 = state_135323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135323__$1,inst_135321);
} else
{if((state_val_135324 === (4)))
{var inst_135291 = (state_135323[(2)]);var inst_135298 = [(0),(0),(0)];var inst_135299 = [(1),(0),(1),(1)];var inst_135300 = [(10),(20)];var inst_135301 = [(0),(0),(0)];var inst_135302 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_135303 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_135304 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_135305 = [inst_135302,inst_135303,inst_135304];var inst_135306 = {"position":inst_135298,"color":inst_135299,"size":inst_135300,"vel":inst_135301,"tex":"img_map","formulaList":inst_135305};var inst_135307 = [inst_135306];var inst_135308 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_135307};var inst_135309 = [(0),(0),(1),(1)];var inst_135310 = [(30),(10)];var inst_135311 = [(10),(10),(0)];var inst_135312 = [(0),(0),(0)];var inst_135313 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_135314 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_135315 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_135316 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_135317 = [inst_135313,inst_135314,inst_135315,inst_135316];var inst_135318 = {"id":"x1","emit":inst_135308,"color":inst_135309,"size":inst_135310,"pos":inst_135311,"vel":inst_135312,"tex":"img_face","formulaList":inst_135317};var inst_135319 = ["edit-particle",inst_135318];var state_135323__$1 = (function (){var statearr_135325 = state_135323;(statearr_135325[(7)] = inst_135291);
return statearr_135325;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135323__$1,(5),onView,inst_135319);
} else
{if((state_val_135324 === (3)))
{var inst_135288 = (state_135323[(2)]);var inst_135289 = cljs.core.async.timeout.call(null,(1100));var state_135323__$1 = (function (){var statearr_135326 = state_135323;(statearr_135326[(8)] = inst_135288);
return statearr_135326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135323__$1,(4),inst_135289);
} else
{if((state_val_135324 === (2)))
{var inst_135281 = (state_135323[(2)]);var inst_135284 = [(10),(10),(0)];var inst_135285 = {"id":"x1","pos":inst_135284};var inst_135286 = ["edit-particle",inst_135285];var state_135323__$1 = (function (){var statearr_135327 = state_135323;(statearr_135327[(9)] = inst_135281);
return statearr_135327;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135323__$1,(3),onView,inst_135286);
} else
{if((state_val_135324 === (1)))
{var inst_135279 = cljs.core.async.timeout.call(null,(1000));var state_135323__$1 = state_135323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135323__$1,(2),inst_135279);
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
var state_machine__6188__auto____0 = (function (){var statearr_135331 = [null,null,null,null,null,null,null,null,null,null];(statearr_135331[(0)] = state_machine__6188__auto__);
(statearr_135331[(1)] = (1));
return statearr_135331;
});
var state_machine__6188__auto____1 = (function (state_135323){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135323);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135332){if((e135332 instanceof Object))
{var ex__6191__auto__ = e135332;var statearr_135333_135335 = state_135323;(statearr_135333_135335[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135336 = state_135323;
state_135323 = G__135336;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135323){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_135334 = f__6203__auto__.call(null);(statearr_135334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_135334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj135517 = {};return obj135517;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_135521){var state_val_135522 = (state_135521[(1)]);if((state_val_135522 === (2)))
{var inst_135519 = (state_135521[(2)]);var state_135521__$1 = state_135521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135521__$1,inst_135519);
} else
{if((state_val_135522 === (1)))
{var state_135521__$1 = state_135521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135521__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_135526 = [null,null,null,null,null,null,null];(statearr_135526[(0)] = state_machine__6188__auto__);
(statearr_135526[(1)] = (1));
return statearr_135526;
});
var state_machine__6188__auto____1 = (function (state_135521){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135527){if((e135527 instanceof Object))
{var ex__6191__auto__ = e135527;var statearr_135528_135695 = state_135521;(statearr_135528_135695[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135696 = state_135521;
state_135521 = G__135696;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135521){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_135529 = f__6203__auto__.call(null);(statearr_135529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_135529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___135697 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___135697,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___135697,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_135543){var state_val_135544 = (state_135543[(1)]);if((state_val_135544 === (4)))
{var inst_135533 = (state_135543[(2)]);var inst_135534 = cljs.core.nth.call(null,inst_135533,(0),null);var inst_135535 = cljs.core.nth.call(null,inst_135533,(1),null);var inst_135536 = cljs.core.nth.call(null,inst_135533,(2),null);var inst_135537 = [inst_135534,inst_135535,inst_135536];var inst_135538 = common.onModel.onNext(inst_135537);var state_135543__$1 = (function (){var statearr_135545 = state_135543;(statearr_135545[(7)] = inst_135538);
return statearr_135545;
})();var statearr_135546_135698 = state_135543__$1;(statearr_135546_135698[(2)] = null);
(statearr_135546_135698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135544 === (3)))
{var inst_135541 = (state_135543[(2)]);var state_135543__$1 = state_135543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135543__$1,inst_135541);
} else
{if((state_val_135544 === (2)))
{var state_135543__$1 = state_135543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135543__$1,(4),onModel);
} else
{if((state_val_135544 === (1)))
{var state_135543__$1 = state_135543;var statearr_135547_135699 = state_135543__$1;(statearr_135547_135699[(2)] = null);
(statearr_135547_135699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___135697,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___135697,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_135551 = [null,null,null,null,null,null,null,null];(statearr_135551[(0)] = state_machine__6188__auto__);
(statearr_135551[(1)] = (1));
return statearr_135551;
});
var state_machine__6188__auto____1 = (function (state_135543){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135543);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135552){if((e135552 instanceof Object))
{var ex__6191__auto__ = e135552;var statearr_135553_135700 = state_135543;(statearr_135553_135700[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135701 = state_135543;
state_135543 = G__135701;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135543){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___135697,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_135554 = f__6203__auto__.call(null);(statearr_135554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___135697);
return statearr_135554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___135697,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___135702 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___135702,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___135702,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_135567){var state_val_135568 = (state_135567[(1)]);if((state_val_135568 === (4)))
{var inst_135558 = (state_135567[(2)]);var inst_135559 = cljs.core.nth.call(null,inst_135558,(0),null);var inst_135560 = cljs.core.nth.call(null,inst_135558,(1),null);var inst_135561 = [inst_135559,inst_135560];var inst_135562 = common.onModelEvent.onNext(inst_135561);var state_135567__$1 = (function (){var statearr_135569 = state_135567;(statearr_135569[(7)] = inst_135562);
return statearr_135569;
})();var statearr_135570_135703 = state_135567__$1;(statearr_135570_135703[(2)] = null);
(statearr_135570_135703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135568 === (3)))
{var inst_135565 = (state_135567[(2)]);var state_135567__$1 = state_135567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135567__$1,inst_135565);
} else
{if((state_val_135568 === (2)))
{var state_135567__$1 = state_135567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135567__$1,(4),onModelEvent);
} else
{if((state_val_135568 === (1)))
{var state_135567__$1 = state_135567;var statearr_135571_135704 = state_135567__$1;(statearr_135571_135704[(2)] = null);
(statearr_135571_135704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___135702,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___135702,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_135575 = [null,null,null,null,null,null,null,null];(statearr_135575[(0)] = state_machine__6188__auto__);
(statearr_135575[(1)] = (1));
return statearr_135575;
});
var state_machine__6188__auto____1 = (function (state_135567){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135567);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135576){if((e135576 instanceof Object))
{var ex__6191__auto__ = e135576;var statearr_135577_135705 = state_135567;(statearr_135577_135705[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135567);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135706 = state_135567;
state_135567 = G__135706;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135567){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___135702,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_135578 = f__6203__auto__.call(null);(statearr_135578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___135702);
return statearr_135578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___135702,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___135707 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___135707,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___135707,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_135597){var state_val_135598 = (state_135597[(1)]);if((state_val_135598 === (5)))
{var inst_135581 = (state_135597[(7)]);var inst_135588 = (state_135597[(8)]);var inst_135592 = (state_135597[(2)]);var tmp135599 = inst_135581;var inst_135581__$1 = tmp135599;var inst_135582 = inst_135588;var state_135597__$1 = (function (){var statearr_135600 = state_135597;(statearr_135600[(9)] = inst_135592);
(statearr_135600[(7)] = inst_135581__$1);
(statearr_135600[(10)] = inst_135582);
return statearr_135600;
})();var statearr_135601_135708 = state_135597__$1;(statearr_135601_135708[(2)] = null);
(statearr_135601_135708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135598 === (4)))
{var inst_135582 = (state_135597[(10)]);var inst_135588 = (state_135597[(8)]);var inst_135586 = (state_135597[(2)]);var inst_135587 = (new Date());var inst_135588__$1 = inst_135587.getTime();var inst_135589 = (inst_135588__$1 - inst_135582);var inst_135590 = (inst_135589 / (1000));var state_135597__$1 = (function (){var statearr_135602 = state_135597;(statearr_135602[(11)] = inst_135586);
(statearr_135602[(8)] = inst_135588__$1);
return statearr_135602;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135597__$1,(5),onTick,inst_135590);
} else
{if((state_val_135598 === (3)))
{var inst_135595 = (state_135597[(2)]);var state_135597__$1 = state_135597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135597__$1,inst_135595);
} else
{if((state_val_135598 === (2)))
{var inst_135581 = (state_135597[(7)]);var inst_135584 = cljs.core.async.timeout.call(null,inst_135581);var state_135597__$1 = state_135597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_135597__$1,(4),inst_135584);
} else
{if((state_val_135598 === (1)))
{var inst_135579 = (new Date());var inst_135580 = inst_135579.getTime();var inst_135581 = mspf;var inst_135582 = inst_135580;var state_135597__$1 = (function (){var statearr_135603 = state_135597;(statearr_135603[(7)] = inst_135581);
(statearr_135603[(10)] = inst_135582);
return statearr_135603;
})();var statearr_135604_135709 = state_135597__$1;(statearr_135604_135709[(2)] = null);
(statearr_135604_135709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___135707,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___135707,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_135608 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_135608[(0)] = state_machine__6188__auto__);
(statearr_135608[(1)] = (1));
return statearr_135608;
});
var state_machine__6188__auto____1 = (function (state_135597){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135609){if((e135609 instanceof Object))
{var ex__6191__auto__ = e135609;var statearr_135610_135710 = state_135597;(statearr_135610_135710[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135711 = state_135597;
state_135597 = G__135711;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135597){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___135707,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_135611 = f__6203__auto__.call(null);(statearr_135611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___135707);
return statearr_135611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___135707,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___135712 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_135665){var state_val_135666 = (state_135665[(1)]);if((state_val_135666 === (7)))
{var inst_135660 = (state_135665[(2)]);var inst_135621 = inst_135660;var state_135665__$1 = (function (){var statearr_135667 = state_135665;(statearr_135667[(7)] = inst_135621);
return statearr_135667;
})();var statearr_135668_135713 = state_135665__$1;(statearr_135668_135713[(2)] = null);
(statearr_135668_135713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (1)))
{var inst_135612 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_135613 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_135614 = cljs.core.List.EMPTY;var inst_135615 = [inst_135614,(200)];var inst_135616 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_135613,inst_135615);var inst_135617 = [(0),(0)];var inst_135618 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_135617,null));var inst_135619 = [(0),inst_135616,inst_135618,onModel,gl__$1];var inst_135620 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_135612,inst_135619);var inst_135621 = inst_135620;var state_135665__$1 = (function (){var statearr_135669 = state_135665;(statearr_135669[(7)] = inst_135621);
return statearr_135669;
})();var statearr_135670_135714 = state_135665__$1;(statearr_135670_135714[(2)] = null);
(statearr_135670_135714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (4)))
{var inst_135629 = (state_135665[(8)]);var inst_135627 = (state_135665[(9)]);var inst_135627__$1 = (state_135665[(2)]);var inst_135628 = cljs.core.nth.call(null,inst_135627__$1,(0),null);var inst_135629__$1 = cljs.core.nth.call(null,inst_135627__$1,(1),null);var inst_135633 = cljs.core._EQ_.call(null,onTick,inst_135629__$1);var state_135665__$1 = (function (){var statearr_135671 = state_135665;(statearr_135671[(8)] = inst_135629__$1);
(statearr_135671[(9)] = inst_135627__$1);
(statearr_135671[(10)] = inst_135628);
return statearr_135671;
})();if(inst_135633)
{var statearr_135672_135715 = state_135665__$1;(statearr_135672_135715[(1)] = (5));
} else
{var statearr_135673_135716 = state_135665__$1;(statearr_135673_135716[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (6)))
{var inst_135629 = (state_135665[(8)]);var inst_135651 = cljs.core._EQ_.call(null,onView,inst_135629);var state_135665__$1 = state_135665;if(inst_135651)
{var statearr_135674_135717 = state_135665__$1;(statearr_135674_135717[(1)] = (8));
} else
{var statearr_135675_135718 = state_135665__$1;(statearr_135675_135718[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (3)))
{var inst_135663 = (state_135665[(2)]);var state_135665__$1 = state_135665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135665__$1,inst_135663);
} else
{if((state_val_135666 === (2)))
{var inst_135624 = [onView,onTick];var inst_135625 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_135624,null));var state_135665__$1 = state_135665;return cljs.core.async.ioc_alts_BANG_.call(null,state_135665__$1,(4),inst_135625);
} else
{if((state_val_135666 === (9)))
{var inst_135621 = (state_135665[(7)]);var state_135665__$1 = state_135665;var statearr_135676_135719 = state_135665__$1;(statearr_135676_135719[(2)] = inst_135621);
(statearr_135676_135719[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (5)))
{var inst_135629 = (state_135665[(8)]);var inst_135627 = (state_135665[(9)]);var inst_135621 = (state_135665[(7)]);var inst_135628 = (state_135665[(10)]);var inst_135642 = cljs.core.async.chan.call(null,(1));var inst_135643 = (function (){var c__6202__auto____$1 = inst_135642;var expr__135631 = inst_135629;var pred__135630 = cljs.core._EQ_;var ch = inst_135629;var v = inst_135628;var vec__135623 = inst_135627;var ctx = inst_135621;return ((function (c__6202__auto____$1,expr__135631,pred__135630,ch,v,vec__135623,ctx,inst_135629,inst_135627,inst_135621,inst_135628,inst_135642,state_val_135666,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__135631,pred__135630,ch,v,vec__135623,ctx,inst_135629,inst_135627,inst_135621,inst_135628,inst_135642,state_val_135666,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_135640){var state_val_135641 = (state_135640[(1)]);if((state_val_135641 === (2)))
{var inst_135638 = (state_135640[(2)]);var state_135640__$1 = state_135640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_135640__$1,inst_135638);
} else
{if((state_val_135641 === (1)))
{var inst_135635 = ["tick",v];var inst_135636 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_135635,null));var state_135640__$1 = state_135640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_135640__$1,(2),onModelEvent,inst_135636);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__135631,pred__135630,ch,v,vec__135623,ctx,inst_135629,inst_135627,inst_135621,inst_135628,inst_135642,state_val_135666,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__135631,pred__135630,ch,v,vec__135623,ctx,inst_135629,inst_135627,inst_135621,inst_135628,inst_135642,state_val_135666,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_135680 = [null,null,null,null,null,null,null];(statearr_135680[(0)] = state_machine__6188__auto__);
(statearr_135680[(1)] = (1));
return statearr_135680;
});
var state_machine__6188__auto____1 = (function (state_135640){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135640);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135681){if((e135681 instanceof Object))
{var ex__6191__auto__ = e135681;var statearr_135682_135720 = state_135640;(statearr_135682_135720[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135721 = state_135640;
state_135640 = G__135721;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135640){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__135631,pred__135630,ch,v,vec__135623,ctx,inst_135629,inst_135627,inst_135621,inst_135628,inst_135642,state_val_135666,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_135683 = f__6203__auto__.call(null);(statearr_135683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_135683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__135631,pred__135630,ch,v,vec__135623,ctx,inst_135629,inst_135627,inst_135621,inst_135628,inst_135642,state_val_135666,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_135644 = cljs.core.async.impl.dispatch.run.call(null,inst_135643);var inst_135645 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_135646 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_135645,null));var inst_135647 = cljs.core.partial.call(null,tool.particle.update,inst_135628);var inst_135648 = cljs.core.update_in.call(null,inst_135621,inst_135646,inst_135647);var inst_135649 = draw.call(null,inst_135648);var state_135665__$1 = (function (){var statearr_135684 = state_135665;(statearr_135684[(11)] = inst_135644);
return statearr_135684;
})();var statearr_135685_135722 = state_135665__$1;(statearr_135685_135722[(2)] = inst_135649);
(statearr_135685_135722[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (10)))
{var inst_135658 = (state_135665[(2)]);var state_135665__$1 = state_135665;var statearr_135686_135723 = state_135665__$1;(statearr_135686_135723[(2)] = inst_135658);
(statearr_135686_135723[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_135666 === (8)))
{var inst_135621 = (state_135665[(7)]);var inst_135628 = (state_135665[(10)]);var inst_135653 = (inst_135628[(0)]);var inst_135654 = (inst_135628[(1)]);var inst_135655 = app.particle.abstract$.onViewCommand.call(null,inst_135653,inst_135654,inst_135621);var state_135665__$1 = state_135665;var statearr_135687_135724 = state_135665__$1;(statearr_135687_135724[(2)] = inst_135655);
(statearr_135687_135724[(1)] = (10));
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
});})(c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_135691 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_135691[(0)] = state_machine__6188__auto__);
(statearr_135691[(1)] = (1));
return statearr_135691;
});
var state_machine__6188__auto____1 = (function (state_135665){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_135665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e135692){if((e135692 instanceof Object))
{var ex__6191__auto__ = e135692;var statearr_135693_135725 = state_135665;(statearr_135693_135725[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_135665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e135692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__135726 = state_135665;
state_135665 = G__135726;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_135665){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_135665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_135694 = f__6203__auto__.call(null);(statearr_135694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___135712);
return statearr_135694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___135712,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.demo.call(null,onView);
return null;
});
app.particle.main.main.call(null);
