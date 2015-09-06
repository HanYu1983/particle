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
return (function (state_98149){var state_val_98150 = (state_98149[(1)]);if((state_val_98150 === (5)))
{var inst_98147 = (state_98149[(2)]);var state_98149__$1 = state_98149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98149__$1,inst_98147);
} else
{if((state_val_98150 === (4)))
{var inst_98117 = (state_98149[(2)]);var inst_98124 = [(0),(0),(0)];var inst_98125 = [(1),(0),(1),(1)];var inst_98126 = [(10),(20)];var inst_98127 = [(0),(0),(0)];var inst_98128 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_98129 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_98130 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_98131 = [inst_98128,inst_98129,inst_98130];var inst_98132 = {"position":inst_98124,"color":inst_98125,"size":inst_98126,"vel":inst_98127,"tex":"img_map","formulaList":inst_98131};var inst_98133 = [inst_98132];var inst_98134 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_98133};var inst_98135 = [(0),(0),(1),(1)];var inst_98136 = [(30),(10)];var inst_98137 = [(10),(10),(0)];var inst_98138 = [(0),(0),(0)];var inst_98139 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_98140 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_98141 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_98142 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_98143 = [inst_98139,inst_98140,inst_98141,inst_98142];var inst_98144 = {"id":"x1","emit":inst_98134,"color":inst_98135,"size":inst_98136,"pos":inst_98137,"vel":inst_98138,"tex":"img_face","formulaList":inst_98143};var inst_98145 = ["edit-particle",inst_98144];var state_98149__$1 = (function (){var statearr_98151 = state_98149;(statearr_98151[(7)] = inst_98117);
return statearr_98151;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98149__$1,(5),onView,inst_98145);
} else
{if((state_val_98150 === (3)))
{var inst_98114 = (state_98149[(2)]);var inst_98115 = cljs.core.async.timeout.call(null,(1100));var state_98149__$1 = (function (){var statearr_98152 = state_98149;(statearr_98152[(8)] = inst_98114);
return statearr_98152;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98149__$1,(4),inst_98115);
} else
{if((state_val_98150 === (2)))
{var inst_98107 = (state_98149[(2)]);var inst_98110 = [(10),(10),(0)];var inst_98111 = {"id":"x1","pos":inst_98110};var inst_98112 = ["edit-particle",inst_98111];var state_98149__$1 = (function (){var statearr_98153 = state_98149;(statearr_98153[(9)] = inst_98107);
return statearr_98153;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98149__$1,(3),onView,inst_98112);
} else
{if((state_val_98150 === (1)))
{var inst_98105 = cljs.core.async.timeout.call(null,(1000));var state_98149__$1 = state_98149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98149__$1,(2),inst_98105);
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
var state_machine__6188__auto____0 = (function (){var statearr_98157 = [null,null,null,null,null,null,null,null,null,null];(statearr_98157[(0)] = state_machine__6188__auto__);
(statearr_98157[(1)] = (1));
return statearr_98157;
});
var state_machine__6188__auto____1 = (function (state_98149){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98158){if((e98158 instanceof Object))
{var ex__6191__auto__ = e98158;var statearr_98159_98161 = state_98149;(statearr_98159_98161[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98162 = state_98149;
state_98149 = G__98162;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98149){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_98160 = f__6203__auto__.call(null);(statearr_98160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_98160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj98377 = {};return obj98377;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_98381){var state_val_98382 = (state_98381[(1)]);if((state_val_98382 === (2)))
{var inst_98379 = (state_98381[(2)]);var state_98381__$1 = state_98381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98381__$1,inst_98379);
} else
{if((state_val_98382 === (1)))
{var state_98381__$1 = state_98381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98381__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98386 = [null,null,null,null,null,null,null];(statearr_98386[(0)] = state_machine__6188__auto__);
(statearr_98386[(1)] = (1));
return statearr_98386;
});
var state_machine__6188__auto____1 = (function (state_98381){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98381);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98387){if((e98387 instanceof Object))
{var ex__6191__auto__ = e98387;var statearr_98388_98589 = state_98381;(statearr_98388_98589[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98590 = state_98381;
state_98381 = G__98590;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98381){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98389 = f__6203__auto__.call(null);(statearr_98389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_98389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___98591 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98591,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98591,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_98403){var state_val_98404 = (state_98403[(1)]);if((state_val_98404 === (4)))
{var inst_98393 = (state_98403[(2)]);var inst_98394 = cljs.core.nth.call(null,inst_98393,(0),null);var inst_98395 = cljs.core.nth.call(null,inst_98393,(1),null);var inst_98396 = cljs.core.nth.call(null,inst_98393,(2),null);var inst_98397 = [inst_98394,inst_98395,inst_98396];var inst_98398 = common.onModel.onNext(inst_98397);var state_98403__$1 = (function (){var statearr_98405 = state_98403;(statearr_98405[(7)] = inst_98398);
return statearr_98405;
})();var statearr_98406_98592 = state_98403__$1;(statearr_98406_98592[(2)] = null);
(statearr_98406_98592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98404 === (3)))
{var inst_98401 = (state_98403[(2)]);var state_98403__$1 = state_98403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98403__$1,inst_98401);
} else
{if((state_val_98404 === (2)))
{var state_98403__$1 = state_98403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98403__$1,(4),onModel);
} else
{if((state_val_98404 === (1)))
{var state_98403__$1 = state_98403;var statearr_98407_98593 = state_98403__$1;(statearr_98407_98593[(2)] = null);
(statearr_98407_98593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___98591,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98591,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98411 = [null,null,null,null,null,null,null,null];(statearr_98411[(0)] = state_machine__6188__auto__);
(statearr_98411[(1)] = (1));
return statearr_98411;
});
var state_machine__6188__auto____1 = (function (state_98403){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98412){if((e98412 instanceof Object))
{var ex__6191__auto__ = e98412;var statearr_98413_98594 = state_98403;(statearr_98413_98594[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98595 = state_98403;
state_98403 = G__98595;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98403){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98591,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98414 = f__6203__auto__.call(null);(statearr_98414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98591);
return statearr_98414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98591,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___98596 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98596,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98596,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_98427){var state_val_98428 = (state_98427[(1)]);if((state_val_98428 === (4)))
{var inst_98418 = (state_98427[(2)]);var inst_98419 = cljs.core.nth.call(null,inst_98418,(0),null);var inst_98420 = cljs.core.nth.call(null,inst_98418,(1),null);var inst_98421 = [inst_98419,inst_98420];var inst_98422 = common.onModelEvent.onNext(inst_98421);var state_98427__$1 = (function (){var statearr_98429 = state_98427;(statearr_98429[(7)] = inst_98422);
return statearr_98429;
})();var statearr_98430_98597 = state_98427__$1;(statearr_98430_98597[(2)] = null);
(statearr_98430_98597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98428 === (3)))
{var inst_98425 = (state_98427[(2)]);var state_98427__$1 = state_98427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98427__$1,inst_98425);
} else
{if((state_val_98428 === (2)))
{var state_98427__$1 = state_98427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98427__$1,(4),onModelEvent);
} else
{if((state_val_98428 === (1)))
{var state_98427__$1 = state_98427;var statearr_98431_98598 = state_98427__$1;(statearr_98431_98598[(2)] = null);
(statearr_98431_98598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___98596,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98596,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98435 = [null,null,null,null,null,null,null,null];(statearr_98435[(0)] = state_machine__6188__auto__);
(statearr_98435[(1)] = (1));
return statearr_98435;
});
var state_machine__6188__auto____1 = (function (state_98427){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98427);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98436){if((e98436 instanceof Object))
{var ex__6191__auto__ = e98436;var statearr_98437_98599 = state_98427;(statearr_98437_98599[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98600 = state_98427;
state_98427 = G__98600;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98427){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98596,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98438 = f__6203__auto__.call(null);(statearr_98438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98596);
return statearr_98438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98596,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___98601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98601,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98601,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_98457){var state_val_98458 = (state_98457[(1)]);if((state_val_98458 === (5)))
{var inst_98441 = (state_98457[(7)]);var inst_98448 = (state_98457[(8)]);var inst_98452 = (state_98457[(2)]);var tmp98459 = inst_98441;var inst_98441__$1 = tmp98459;var inst_98442 = inst_98448;var state_98457__$1 = (function (){var statearr_98460 = state_98457;(statearr_98460[(9)] = inst_98452);
(statearr_98460[(10)] = inst_98442);
(statearr_98460[(7)] = inst_98441__$1);
return statearr_98460;
})();var statearr_98461_98602 = state_98457__$1;(statearr_98461_98602[(2)] = null);
(statearr_98461_98602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98458 === (4)))
{var inst_98442 = (state_98457[(10)]);var inst_98448 = (state_98457[(8)]);var inst_98446 = (state_98457[(2)]);var inst_98447 = (new Date());var inst_98448__$1 = inst_98447.getTime();var inst_98449 = (inst_98448__$1 - inst_98442);var inst_98450 = (inst_98449 / (1000));var state_98457__$1 = (function (){var statearr_98462 = state_98457;(statearr_98462[(11)] = inst_98446);
(statearr_98462[(8)] = inst_98448__$1);
return statearr_98462;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98457__$1,(5),onTick,inst_98450);
} else
{if((state_val_98458 === (3)))
{var inst_98455 = (state_98457[(2)]);var state_98457__$1 = state_98457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98457__$1,inst_98455);
} else
{if((state_val_98458 === (2)))
{var inst_98441 = (state_98457[(7)]);var inst_98444 = cljs.core.async.timeout.call(null,inst_98441);var state_98457__$1 = state_98457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98457__$1,(4),inst_98444);
} else
{if((state_val_98458 === (1)))
{var inst_98439 = (new Date());var inst_98440 = inst_98439.getTime();var inst_98441 = mspf;var inst_98442 = inst_98440;var state_98457__$1 = (function (){var statearr_98463 = state_98457;(statearr_98463[(10)] = inst_98442);
(statearr_98463[(7)] = inst_98441);
return statearr_98463;
})();var statearr_98464_98603 = state_98457__$1;(statearr_98464_98603[(2)] = null);
(statearr_98464_98603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___98601,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98601,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98468 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_98468[(0)] = state_machine__6188__auto__);
(statearr_98468[(1)] = (1));
return statearr_98468;
});
var state_machine__6188__auto____1 = (function (state_98457){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98469){if((e98469 instanceof Object))
{var ex__6191__auto__ = e98469;var statearr_98470_98604 = state_98457;(statearr_98470_98604[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98605 = state_98457;
state_98457 = G__98605;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98457){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98601,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98471 = f__6203__auto__.call(null);(statearr_98471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98601);
return statearr_98471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98601,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.findAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function findAction(actions,id){return cljs.core.first.call(null,cljs.core.filter.call(null,((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (p__98474){var vec__98475 = p__98474;var pid = cljs.core.nth.call(null,vec__98475,(0),null);var _ = cljs.core.nth.call(null,vec__98475,(1),null);var ___$1 = cljs.core.nth.call(null,vec__98475,(2),null);return cljs.core._EQ_.call(null,id,pid);
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
,actions));
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
app.particle.main.handleAction = ((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function handleAction(actions,p){var temp__4124__auto__ = app.particle.main.findAction.call(null,actions,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p));if(cljs.core.truth_(temp__4124__auto__))
{var vec__98480 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__98480,(0),null);var act = cljs.core.nth.call(null,vec__98480,(1),null);var params = cljs.core.nth.call(null,vec__98480,(2),null);var action = vec__98480;var pred__98481 = cljs.core._EQ_;var expr__98482 = act;if(cljs.core.truth_(pred__98481.call(null,new cljs.core.Keyword(null,"changePos","changePos",-1909595880),expr__98482)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.first.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.second.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null)));
} else
{return p;
}
} else
{return p;
}
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;
var c__6202__auto___98606 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_98555){var state_val_98556 = (state_98555[(1)]);if((state_val_98556 === (7)))
{var inst_98550 = (state_98555[(2)]);var inst_98494 = inst_98550;var state_98555__$1 = (function (){var statearr_98557 = state_98555;(statearr_98557[(7)] = inst_98494);
return statearr_98557;
})();var statearr_98558_98607 = state_98555__$1;(statearr_98558_98607[(2)] = null);
(statearr_98558_98607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (1)))
{var inst_98484 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_98485 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_98486 = cljs.core.List.EMPTY;var inst_98487 = [inst_98486];var inst_98488 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_98485,inst_98487);var inst_98489 = [(0),(0)];var inst_98490 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_98489,null));var inst_98491 = cljs.core.List.EMPTY;var inst_98492 = [(0),inst_98488,inst_98490,onModel,gl__$1,inst_98491];var inst_98493 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_98484,inst_98492);var inst_98494 = inst_98493;var state_98555__$1 = (function (){var statearr_98559 = state_98555;(statearr_98559[(7)] = inst_98494);
return statearr_98559;
})();var statearr_98560_98608 = state_98555__$1;(statearr_98560_98608[(2)] = null);
(statearr_98560_98608[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (4)))
{var inst_98502 = (state_98555[(8)]);var inst_98500 = (state_98555[(9)]);var inst_98500__$1 = (state_98555[(2)]);var inst_98501 = cljs.core.nth.call(null,inst_98500__$1,(0),null);var inst_98502__$1 = cljs.core.nth.call(null,inst_98500__$1,(1),null);var inst_98506 = cljs.core._EQ_.call(null,onTick,inst_98502__$1);var state_98555__$1 = (function (){var statearr_98561 = state_98555;(statearr_98561[(8)] = inst_98502__$1);
(statearr_98561[(9)] = inst_98500__$1);
(statearr_98561[(10)] = inst_98501);
return statearr_98561;
})();if(inst_98506)
{var statearr_98562_98609 = state_98555__$1;(statearr_98562_98609[(1)] = (5));
} else
{var statearr_98563_98610 = state_98555__$1;(statearr_98563_98610[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (13)))
{var inst_98548 = (state_98555[(2)]);var state_98555__$1 = state_98555;var statearr_98564_98611 = state_98555__$1;(statearr_98564_98611[(2)] = inst_98548);
(statearr_98564_98611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (6)))
{var inst_98502 = (state_98555[(8)]);var inst_98541 = cljs.core._EQ_.call(null,onView,inst_98502);var state_98555__$1 = state_98555;if(inst_98541)
{var statearr_98565_98612 = state_98555__$1;(statearr_98565_98612[(1)] = (11));
} else
{var statearr_98566_98613 = state_98555__$1;(statearr_98566_98613[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (3)))
{var inst_98553 = (state_98555[(2)]);var state_98555__$1 = state_98555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98555__$1,inst_98553);
} else
{if((state_val_98556 === (12)))
{var inst_98494 = (state_98555[(7)]);var state_98555__$1 = state_98555;var statearr_98567_98614 = state_98555__$1;(statearr_98567_98614[(2)] = inst_98494);
(statearr_98567_98614[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (2)))
{var inst_98497 = [onView,onTick];var inst_98498 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_98497,null));var state_98555__$1 = state_98555;return cljs.core.async.ioc_alts_BANG_.call(null,state_98555__$1,(4),inst_98498);
} else
{if((state_val_98556 === (11)))
{var inst_98494 = (state_98555[(7)]);var inst_98501 = (state_98555[(10)]);var inst_98543 = (inst_98501[(0)]);var inst_98544 = (inst_98501[(1)]);var inst_98545 = app.particle.abstract$.onViewCommand.call(null,inst_98543,inst_98544,inst_98494);var state_98555__$1 = state_98555;var statearr_98568_98615 = state_98555__$1;(statearr_98568_98615[(2)] = inst_98545);
(statearr_98568_98615[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (9)))
{var inst_98494 = (state_98555[(7)]);var state_98555__$1 = state_98555;var statearr_98569_98616 = state_98555__$1;(statearr_98569_98616[(2)] = inst_98494);
(statearr_98569_98616[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (5)))
{var inst_98494 = (state_98555[(7)]);var inst_98509 = cljs.core.seq_QMARK_.call(null,inst_98494);var state_98555__$1 = state_98555;if(inst_98509)
{var statearr_98570_98617 = state_98555__$1;(statearr_98570_98617[(1)] = (8));
} else
{var statearr_98571_98618 = state_98555__$1;(statearr_98571_98618[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (10)))
{var inst_98494 = (state_98555[(7)]);var inst_98502 = (state_98555[(8)]);var inst_98500 = (state_98555[(9)]);var inst_98501 = (state_98555[(10)]);var inst_98514 = (state_98555[(2)]);var inst_98515 = cljs.core.get.call(null,inst_98514,new cljs.core.Keyword(null,"actions","actions",-812656882));var inst_98516 = cljs.core.partial.call(null,app.particle.main.handleAction,inst_98515);var inst_98524 = cljs.core.async.chan.call(null,(1));var inst_98525 = (function (){var pred__98503 = cljs.core._EQ_;var ctx = inst_98494;var map__98508 = inst_98514;var v = inst_98501;var expr__98504 = inst_98502;var actions = inst_98515;var ch = inst_98502;var c__6202__auto____$1 = inst_98524;var vec__98496 = inst_98500;var handleParticleAction = inst_98516;return ((function (pred__98503,ctx,map__98508,v,expr__98504,actions,ch,c__6202__auto____$1,vec__98496,handleParticleAction,inst_98494,inst_98502,inst_98500,inst_98501,inst_98514,inst_98515,inst_98516,inst_98524,state_val_98556,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (pred__98503,ctx,map__98508,v,expr__98504,actions,ch,c__6202__auto____$1,vec__98496,handleParticleAction,inst_98494,inst_98502,inst_98500,inst_98501,inst_98514,inst_98515,inst_98516,inst_98524,state_val_98556,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_98522){var state_val_98523 = (state_98522[(1)]);if((state_val_98523 === (2)))
{var inst_98520 = (state_98522[(2)]);var state_98522__$1 = state_98522;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98522__$1,inst_98520);
} else
{if((state_val_98523 === (1)))
{var inst_98517 = ["tick",v];var inst_98518 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_98517,null));var state_98522__$1 = state_98522;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98522__$1,(2),onModelEvent,inst_98518);
} else
{return null;
}
}
});})(pred__98503,ctx,map__98508,v,expr__98504,actions,ch,c__6202__auto____$1,vec__98496,handleParticleAction,inst_98494,inst_98502,inst_98500,inst_98501,inst_98514,inst_98515,inst_98516,inst_98524,state_val_98556,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,pred__98503,ctx,map__98508,v,expr__98504,actions,ch,c__6202__auto____$1,vec__98496,handleParticleAction,inst_98494,inst_98502,inst_98500,inst_98501,inst_98514,inst_98515,inst_98516,inst_98524,state_val_98556,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98575 = [null,null,null,null,null,null,null];(statearr_98575[(0)] = state_machine__6188__auto__);
(statearr_98575[(1)] = (1));
return statearr_98575;
});
var state_machine__6188__auto____1 = (function (state_98522){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98522);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98576){if((e98576 instanceof Object))
{var ex__6191__auto__ = e98576;var statearr_98577_98619 = state_98522;(statearr_98577_98619[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98522);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98620 = state_98522;
state_98522 = G__98620;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98522){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,pred__98503,ctx,map__98508,v,expr__98504,actions,ch,c__6202__auto____$1,vec__98496,handleParticleAction,inst_98494,inst_98502,inst_98500,inst_98501,inst_98514,inst_98515,inst_98516,inst_98524,state_val_98556,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98578 = f__6203__auto__.call(null);(statearr_98578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_98578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(pred__98503,ctx,map__98508,v,expr__98504,actions,ch,c__6202__auto____$1,vec__98496,handleParticleAction,inst_98494,inst_98502,inst_98500,inst_98501,inst_98514,inst_98515,inst_98516,inst_98524,state_val_98556,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_98526 = cljs.core.async.impl.dispatch.run.call(null,inst_98525);var inst_98527 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_98528 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_98527,null));var inst_98529 = cljs.core.partial.call(null,cljs.core.map,inst_98516);var inst_98530 = cljs.core.update_in.call(null,inst_98494,inst_98528,inst_98529);var inst_98531 = [new cljs.core.Keyword(null,"actions","actions",-812656882)];var inst_98532 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_98531,null));var inst_98533 = cljs.core.List.EMPTY;var inst_98534 = cljs.core.assoc_in.call(null,inst_98530,inst_98532,inst_98533);var inst_98535 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_98536 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_98535,null));var inst_98537 = cljs.core.partial.call(null,tool.particle.update,inst_98501);var inst_98538 = cljs.core.update_in.call(null,inst_98534,inst_98536,inst_98537);var inst_98539 = draw.call(null,inst_98538);var state_98555__$1 = (function (){var statearr_98579 = state_98555;(statearr_98579[(11)] = inst_98526);
return statearr_98579;
})();var statearr_98580_98621 = state_98555__$1;(statearr_98580_98621[(2)] = inst_98539);
(statearr_98580_98621[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_98556 === (8)))
{var inst_98494 = (state_98555[(7)]);var inst_98511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_98494);var state_98555__$1 = state_98555;var statearr_98581_98622 = state_98555__$1;(statearr_98581_98622[(2)] = inst_98511);
(statearr_98581_98622[(1)] = (10));
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
});})(c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_98585 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_98585[(0)] = state_machine__6188__auto__);
(statearr_98585[(1)] = (1));
return statearr_98585;
});
var state_machine__6188__auto____1 = (function (state_98555){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_98555);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e98586){if((e98586 instanceof Object))
{var ex__6191__auto__ = e98586;var statearr_98587_98623 = state_98555;(statearr_98587_98623[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98555);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e98586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__98624 = state_98555;
state_98555 = G__98624;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_98555){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_98555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_98588 = f__6203__auto__.call(null);(statearr_98588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___98606);
return statearr_98588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___98606,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
app.particle.main.demo.call(null,onView);
return null;
});
app.particle.main.main.call(null);
