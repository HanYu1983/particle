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
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj76099 = {};return obj76099;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76103){var state_val_76104 = (state_76103[(1)]);if((state_val_76104 === (2)))
{var inst_76101 = (state_76103[(2)]);var state_76103__$1 = state_76103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76103__$1,inst_76101);
} else
{if((state_val_76104 === (1)))
{var state_76103__$1 = state_76103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76103__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76108 = [null,null,null,null,null,null,null];(statearr_76108[(0)] = state_machine__6188__auto__);
(statearr_76108[(1)] = (1));
return statearr_76108;
});
var state_machine__6188__auto____1 = (function (state_76103){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76109){if((e76109 instanceof Object))
{var ex__6191__auto__ = e76109;var statearr_76110_76333 = state_76103;(statearr_76110_76333[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76334 = state_76103;
state_76103 = G__76334;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76103){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76111 = f__6203__auto__.call(null);(statearr_76111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_76111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76335 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76335,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76335,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76125){var state_val_76126 = (state_76125[(1)]);if((state_val_76126 === (4)))
{var inst_76115 = (state_76125[(2)]);var inst_76116 = cljs.core.nth.call(null,inst_76115,(0),null);var inst_76117 = cljs.core.nth.call(null,inst_76115,(1),null);var inst_76118 = cljs.core.nth.call(null,inst_76115,(2),null);var inst_76119 = [inst_76116,inst_76117,inst_76118];var inst_76120 = common.onModel.onNext(inst_76119);var state_76125__$1 = (function (){var statearr_76127 = state_76125;(statearr_76127[(7)] = inst_76120);
return statearr_76127;
})();var statearr_76128_76336 = state_76125__$1;(statearr_76128_76336[(2)] = null);
(statearr_76128_76336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76126 === (3)))
{var inst_76123 = (state_76125[(2)]);var state_76125__$1 = state_76125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76125__$1,inst_76123);
} else
{if((state_val_76126 === (2)))
{var state_76125__$1 = state_76125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76125__$1,(4),onModel);
} else
{if((state_val_76126 === (1)))
{var state_76125__$1 = state_76125;var statearr_76129_76337 = state_76125__$1;(statearr_76129_76337[(2)] = null);
(statearr_76129_76337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___76335,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76335,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76133 = [null,null,null,null,null,null,null,null];(statearr_76133[(0)] = state_machine__6188__auto__);
(statearr_76133[(1)] = (1));
return statearr_76133;
});
var state_machine__6188__auto____1 = (function (state_76125){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76134){if((e76134 instanceof Object))
{var ex__6191__auto__ = e76134;var statearr_76135_76338 = state_76125;(statearr_76135_76338[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76339 = state_76125;
state_76125 = G__76339;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76125){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76335,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76136 = f__6203__auto__.call(null);(statearr_76136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76335);
return statearr_76136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76335,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76340 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76340,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76340,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76149){var state_val_76150 = (state_76149[(1)]);if((state_val_76150 === (4)))
{var inst_76140 = (state_76149[(2)]);var inst_76141 = cljs.core.nth.call(null,inst_76140,(0),null);var inst_76142 = cljs.core.nth.call(null,inst_76140,(1),null);var inst_76143 = [inst_76141,inst_76142];var inst_76144 = common.onModelEvent.onNext(inst_76143);var state_76149__$1 = (function (){var statearr_76151 = state_76149;(statearr_76151[(7)] = inst_76144);
return statearr_76151;
})();var statearr_76152_76341 = state_76149__$1;(statearr_76152_76341[(2)] = null);
(statearr_76152_76341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76150 === (3)))
{var inst_76147 = (state_76149[(2)]);var state_76149__$1 = state_76149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76149__$1,inst_76147);
} else
{if((state_val_76150 === (2)))
{var state_76149__$1 = state_76149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76149__$1,(4),onModelEvent);
} else
{if((state_val_76150 === (1)))
{var state_76149__$1 = state_76149;var statearr_76153_76342 = state_76149__$1;(statearr_76153_76342[(2)] = null);
(statearr_76153_76342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___76340,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76340,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76157 = [null,null,null,null,null,null,null,null];(statearr_76157[(0)] = state_machine__6188__auto__);
(statearr_76157[(1)] = (1));
return statearr_76157;
});
var state_machine__6188__auto____1 = (function (state_76149){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76158){if((e76158 instanceof Object))
{var ex__6191__auto__ = e76158;var statearr_76159_76343 = state_76149;(statearr_76159_76343[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76344 = state_76149;
state_76149 = G__76344;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76149){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76340,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76160 = f__6203__auto__.call(null);(statearr_76160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76340);
return statearr_76160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76340,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76345 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76345,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76345,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76179){var state_val_76180 = (state_76179[(1)]);if((state_val_76180 === (5)))
{var inst_76163 = (state_76179[(7)]);var inst_76170 = (state_76179[(8)]);var inst_76174 = (state_76179[(2)]);var tmp76181 = inst_76163;var inst_76163__$1 = tmp76181;var inst_76164 = inst_76170;var state_76179__$1 = (function (){var statearr_76182 = state_76179;(statearr_76182[(7)] = inst_76163__$1);
(statearr_76182[(9)] = inst_76174);
(statearr_76182[(10)] = inst_76164);
return statearr_76182;
})();var statearr_76183_76346 = state_76179__$1;(statearr_76183_76346[(2)] = null);
(statearr_76183_76346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76180 === (4)))
{var inst_76164 = (state_76179[(10)]);var inst_76170 = (state_76179[(8)]);var inst_76168 = (state_76179[(2)]);var inst_76169 = (new Date());var inst_76170__$1 = inst_76169.getTime();var inst_76171 = (inst_76170__$1 - inst_76164);var inst_76172 = (inst_76171 / (1000));var state_76179__$1 = (function (){var statearr_76184 = state_76179;(statearr_76184[(11)] = inst_76168);
(statearr_76184[(8)] = inst_76170__$1);
return statearr_76184;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76179__$1,(5),onTick,inst_76172);
} else
{if((state_val_76180 === (3)))
{var inst_76177 = (state_76179[(2)]);var state_76179__$1 = state_76179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76179__$1,inst_76177);
} else
{if((state_val_76180 === (2)))
{var inst_76163 = (state_76179[(7)]);var inst_76166 = cljs.core.async.timeout.call(null,inst_76163);var state_76179__$1 = state_76179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76179__$1,(4),inst_76166);
} else
{if((state_val_76180 === (1)))
{var inst_76161 = (new Date());var inst_76162 = inst_76161.getTime();var inst_76163 = mspf;var inst_76164 = inst_76162;var state_76179__$1 = (function (){var statearr_76185 = state_76179;(statearr_76185[(7)] = inst_76163);
(statearr_76185[(10)] = inst_76164);
return statearr_76185;
})();var statearr_76186_76347 = state_76179__$1;(statearr_76186_76347[(2)] = null);
(statearr_76186_76347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___76345,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76345,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76190 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_76190[(0)] = state_machine__6188__auto__);
(statearr_76190[(1)] = (1));
return statearr_76190;
});
var state_machine__6188__auto____1 = (function (state_76179){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76191){if((e76191 instanceof Object))
{var ex__6191__auto__ = e76191;var statearr_76192_76348 = state_76179;(statearr_76192_76348[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76349 = state_76179;
state_76179 = G__76349;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76179){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76345,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76193 = f__6203__auto__.call(null);(statearr_76193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76345);
return statearr_76193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76345,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76350 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76247){var state_val_76248 = (state_76247[(1)]);if((state_val_76248 === (7)))
{var inst_76242 = (state_76247[(2)]);var inst_76203 = inst_76242;var state_76247__$1 = (function (){var statearr_76249 = state_76247;(statearr_76249[(7)] = inst_76203);
return statearr_76249;
})();var statearr_76250_76351 = state_76247__$1;(statearr_76250_76351[(2)] = null);
(statearr_76250_76351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (1)))
{var inst_76194 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_76195 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_76196 = cljs.core.List.EMPTY;var inst_76197 = [inst_76196];var inst_76198 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76195,inst_76197);var inst_76199 = [(0),(0)];var inst_76200 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76199,null));var inst_76201 = [(0),inst_76198,inst_76200,onModel,gl__$1];var inst_76202 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76194,inst_76201);var inst_76203 = inst_76202;var state_76247__$1 = (function (){var statearr_76251 = state_76247;(statearr_76251[(7)] = inst_76203);
return statearr_76251;
})();var statearr_76252_76352 = state_76247__$1;(statearr_76252_76352[(2)] = null);
(statearr_76252_76352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (4)))
{var inst_76211 = (state_76247[(8)]);var inst_76209 = (state_76247[(9)]);var inst_76209__$1 = (state_76247[(2)]);var inst_76210 = cljs.core.nth.call(null,inst_76209__$1,(0),null);var inst_76211__$1 = cljs.core.nth.call(null,inst_76209__$1,(1),null);var inst_76215 = cljs.core._EQ_.call(null,onTick,inst_76211__$1);var state_76247__$1 = (function (){var statearr_76253 = state_76247;(statearr_76253[(8)] = inst_76211__$1);
(statearr_76253[(9)] = inst_76209__$1);
(statearr_76253[(10)] = inst_76210);
return statearr_76253;
})();if(inst_76215)
{var statearr_76254_76353 = state_76247__$1;(statearr_76254_76353[(1)] = (5));
} else
{var statearr_76255_76354 = state_76247__$1;(statearr_76255_76354[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (6)))
{var inst_76211 = (state_76247[(8)]);var inst_76233 = cljs.core._EQ_.call(null,onView,inst_76211);var state_76247__$1 = state_76247;if(inst_76233)
{var statearr_76256_76355 = state_76247__$1;(statearr_76256_76355[(1)] = (8));
} else
{var statearr_76257_76356 = state_76247__$1;(statearr_76257_76356[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (3)))
{var inst_76245 = (state_76247[(2)]);var state_76247__$1 = state_76247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76247__$1,inst_76245);
} else
{if((state_val_76248 === (2)))
{var inst_76206 = [onView,onTick];var inst_76207 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76206,null));var state_76247__$1 = state_76247;return cljs.core.async.ioc_alts_BANG_.call(null,state_76247__$1,(4),inst_76207);
} else
{if((state_val_76248 === (9)))
{var inst_76203 = (state_76247[(7)]);var state_76247__$1 = state_76247;var statearr_76258_76357 = state_76247__$1;(statearr_76258_76357[(2)] = inst_76203);
(statearr_76258_76357[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (5)))
{var inst_76211 = (state_76247[(8)]);var inst_76203 = (state_76247[(7)]);var inst_76209 = (state_76247[(9)]);var inst_76210 = (state_76247[(10)]);var inst_76224 = cljs.core.async.chan.call(null,(1));var inst_76225 = (function (){var c__6202__auto____$1 = inst_76224;var expr__76213 = inst_76211;var pred__76212 = cljs.core._EQ_;var ch = inst_76211;var v = inst_76210;var vec__76205 = inst_76209;var ctx = inst_76203;return ((function (c__6202__auto____$1,expr__76213,pred__76212,ch,v,vec__76205,ctx,inst_76211,inst_76203,inst_76209,inst_76210,inst_76224,state_val_76248,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__76213,pred__76212,ch,v,vec__76205,ctx,inst_76211,inst_76203,inst_76209,inst_76210,inst_76224,state_val_76248,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76222){var state_val_76223 = (state_76222[(1)]);if((state_val_76223 === (2)))
{var inst_76220 = (state_76222[(2)]);var state_76222__$1 = state_76222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76222__$1,inst_76220);
} else
{if((state_val_76223 === (1)))
{var inst_76217 = ["tick",v];var inst_76218 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76217,null));var state_76222__$1 = state_76222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76222__$1,(2),onModelEvent,inst_76218);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__76213,pred__76212,ch,v,vec__76205,ctx,inst_76211,inst_76203,inst_76209,inst_76210,inst_76224,state_val_76248,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__76213,pred__76212,ch,v,vec__76205,ctx,inst_76211,inst_76203,inst_76209,inst_76210,inst_76224,state_val_76248,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76262 = [null,null,null,null,null,null,null];(statearr_76262[(0)] = state_machine__6188__auto__);
(statearr_76262[(1)] = (1));
return statearr_76262;
});
var state_machine__6188__auto____1 = (function (state_76222){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76263){if((e76263 instanceof Object))
{var ex__6191__auto__ = e76263;var statearr_76264_76358 = state_76222;(statearr_76264_76358[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76359 = state_76222;
state_76222 = G__76359;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76222){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__76213,pred__76212,ch,v,vec__76205,ctx,inst_76211,inst_76203,inst_76209,inst_76210,inst_76224,state_val_76248,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76265 = f__6203__auto__.call(null);(statearr_76265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_76265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__76213,pred__76212,ch,v,vec__76205,ctx,inst_76211,inst_76203,inst_76209,inst_76210,inst_76224,state_val_76248,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_76226 = cljs.core.async.impl.dispatch.run.call(null,inst_76225);var inst_76227 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_76228 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76227,null));var inst_76229 = cljs.core.partial.call(null,tool.particle.update,inst_76210);var inst_76230 = cljs.core.update_in.call(null,inst_76203,inst_76228,inst_76229);var inst_76231 = draw.call(null,inst_76230);var state_76247__$1 = (function (){var statearr_76266 = state_76247;(statearr_76266[(11)] = inst_76226);
return statearr_76266;
})();var statearr_76267_76360 = state_76247__$1;(statearr_76267_76360[(2)] = inst_76231);
(statearr_76267_76360[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (10)))
{var inst_76240 = (state_76247[(2)]);var state_76247__$1 = state_76247;var statearr_76268_76361 = state_76247__$1;(statearr_76268_76361[(2)] = inst_76240);
(statearr_76268_76361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76248 === (8)))
{var inst_76203 = (state_76247[(7)]);var inst_76210 = (state_76247[(10)]);var inst_76235 = (inst_76210[(0)]);var inst_76236 = (inst_76210[(1)]);var inst_76237 = app.particle.abstract$.onViewCommand.call(null,inst_76235,inst_76236,inst_76203);var state_76247__$1 = state_76247;var statearr_76269_76362 = state_76247__$1;(statearr_76269_76362[(2)] = inst_76237);
(statearr_76269_76362[(1)] = (10));
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
});})(c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76273 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_76273[(0)] = state_machine__6188__auto__);
(statearr_76273[(1)] = (1));
return statearr_76273;
});
var state_machine__6188__auto____1 = (function (state_76247){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76274){if((e76274 instanceof Object))
{var ex__6191__auto__ = e76274;var statearr_76275_76363 = state_76247;(statearr_76275_76363[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76364 = state_76247;
state_76247 = G__76364;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76247){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76276 = f__6203__auto__.call(null);(statearr_76276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76350);
return statearr_76276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76350,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76365 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76365,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76365,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76321){var state_val_76322 = (state_76321[(1)]);if((state_val_76322 === (5)))
{var inst_76319 = (state_76321[(2)]);var state_76321__$1 = state_76321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76321__$1,inst_76319);
} else
{if((state_val_76322 === (4)))
{var inst_76289 = (state_76321[(2)]);var inst_76296 = [(0),(0),(0)];var inst_76297 = [(1),(0),(1),(1)];var inst_76298 = [(10),(20)];var inst_76299 = [(0),(0),(0)];var inst_76300 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_76301 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_76302 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_76303 = [inst_76300,inst_76301,inst_76302];var inst_76304 = {"position":inst_76296,"color":inst_76297,"size":inst_76298,"vel":inst_76299,"tex":"img_map","formulaList":inst_76303};var inst_76305 = [inst_76304];var inst_76306 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_76305};var inst_76307 = [(0),(0),(1),(1)];var inst_76308 = [(30),(10)];var inst_76309 = [(10),(10),(0)];var inst_76310 = [(0),(0),(0)];var inst_76311 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_76312 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_76313 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_76314 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_76315 = [inst_76311,inst_76312,inst_76313,inst_76314];var inst_76316 = {"id":"x1","emit":inst_76306,"color":inst_76307,"size":inst_76308,"pos":inst_76309,"vel":inst_76310,"tex":"img_face","formulaList":inst_76315};var inst_76317 = ["edit-particle",inst_76316];var state_76321__$1 = (function (){var statearr_76323 = state_76321;(statearr_76323[(7)] = inst_76289);
return statearr_76323;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76321__$1,(5),onView,inst_76317);
} else
{if((state_val_76322 === (3)))
{var inst_76286 = (state_76321[(2)]);var inst_76287 = cljs.core.async.timeout.call(null,(1100));var state_76321__$1 = (function (){var statearr_76324 = state_76321;(statearr_76324[(8)] = inst_76286);
return statearr_76324;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76321__$1,(4),inst_76287);
} else
{if((state_val_76322 === (2)))
{var inst_76279 = (state_76321[(2)]);var inst_76282 = [(10),(10),(0)];var inst_76283 = {"id":"x1","pos":inst_76282};var inst_76284 = ["edit-particle",inst_76283];var state_76321__$1 = (function (){var statearr_76325 = state_76321;(statearr_76325[(9)] = inst_76279);
return statearr_76325;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76321__$1,(3),onView,inst_76284);
} else
{if((state_val_76322 === (1)))
{var inst_76277 = cljs.core.async.timeout.call(null,(1000));var state_76321__$1 = state_76321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76321__$1,(2),inst_76277);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___76365,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76365,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76329 = [null,null,null,null,null,null,null,null,null,null];(statearr_76329[(0)] = state_machine__6188__auto__);
(statearr_76329[(1)] = (1));
return statearr_76329;
});
var state_machine__6188__auto____1 = (function (state_76321){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76321);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76330){if((e76330 instanceof Object))
{var ex__6191__auto__ = e76330;var statearr_76331_76366 = state_76321;(statearr_76331_76366[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76367 = state_76321;
state_76321 = G__76367;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76321){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76365,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76332 = f__6203__auto__.call(null);(statearr_76332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76365);
return statearr_76332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76365,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
