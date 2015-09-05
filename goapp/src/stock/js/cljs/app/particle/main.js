// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.draw');
goog.require('app.particle.impl');
goog.require('app.particle.abstract$');
goog.require('app.particle.abstract$');
goog.require('cljs.core.async');
app.particle.main.draw = app.particle.draw.draw3D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62103){var state_val_62104 = (state_62103[(1)]);if((state_val_62104 === (2)))
{var inst_62101 = (state_62103[(2)]);var state_62103__$1 = state_62103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62103__$1,inst_62101);
} else
{if((state_val_62104 === (1)))
{var state_62103__$1 = state_62103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62103__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62108 = [null,null,null,null,null,null,null];(statearr_62108[(0)] = state_machine__6188__auto__);
(statearr_62108[(1)] = (1));
return statearr_62108;
});
var state_machine__6188__auto____1 = (function (state_62103){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62109){if((e62109 instanceof Object))
{var ex__6191__auto__ = e62109;var statearr_62110_62333 = state_62103;(statearr_62110_62333[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62334 = state_62103;
state_62103 = G__62334;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62103){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62111 = f__6203__auto__.call(null);(statearr_62111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_62111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62335 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62335,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62335,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62125){var state_val_62126 = (state_62125[(1)]);if((state_val_62126 === (4)))
{var inst_62115 = (state_62125[(2)]);var inst_62116 = cljs.core.nth.call(null,inst_62115,(0),null);var inst_62117 = cljs.core.nth.call(null,inst_62115,(1),null);var inst_62118 = cljs.core.nth.call(null,inst_62115,(2),null);var inst_62119 = [inst_62116,inst_62117,inst_62118];var inst_62120 = common.onModel.onNext(inst_62119);var state_62125__$1 = (function (){var statearr_62127 = state_62125;(statearr_62127[(7)] = inst_62120);
return statearr_62127;
})();var statearr_62128_62336 = state_62125__$1;(statearr_62128_62336[(2)] = null);
(statearr_62128_62336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62126 === (3)))
{var inst_62123 = (state_62125[(2)]);var state_62125__$1 = state_62125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62125__$1,inst_62123);
} else
{if((state_val_62126 === (2)))
{var state_62125__$1 = state_62125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62125__$1,(4),onModel);
} else
{if((state_val_62126 === (1)))
{var state_62125__$1 = state_62125;var statearr_62129_62337 = state_62125__$1;(statearr_62129_62337[(2)] = null);
(statearr_62129_62337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___62335,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62335,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62133 = [null,null,null,null,null,null,null,null];(statearr_62133[(0)] = state_machine__6188__auto__);
(statearr_62133[(1)] = (1));
return statearr_62133;
});
var state_machine__6188__auto____1 = (function (state_62125){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62134){if((e62134 instanceof Object))
{var ex__6191__auto__ = e62134;var statearr_62135_62338 = state_62125;(statearr_62135_62338[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62339 = state_62125;
state_62125 = G__62339;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62125){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62335,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62136 = f__6203__auto__.call(null);(statearr_62136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62335);
return statearr_62136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62335,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62340 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62340,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62340,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62149){var state_val_62150 = (state_62149[(1)]);if((state_val_62150 === (4)))
{var inst_62140 = (state_62149[(2)]);var inst_62141 = cljs.core.nth.call(null,inst_62140,(0),null);var inst_62142 = cljs.core.nth.call(null,inst_62140,(1),null);var inst_62143 = [inst_62141,inst_62142];var inst_62144 = common.onModelEvent.onNext(inst_62143);var state_62149__$1 = (function (){var statearr_62151 = state_62149;(statearr_62151[(7)] = inst_62144);
return statearr_62151;
})();var statearr_62152_62341 = state_62149__$1;(statearr_62152_62341[(2)] = null);
(statearr_62152_62341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62150 === (3)))
{var inst_62147 = (state_62149[(2)]);var state_62149__$1 = state_62149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62149__$1,inst_62147);
} else
{if((state_val_62150 === (2)))
{var state_62149__$1 = state_62149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62149__$1,(4),onModelEvent);
} else
{if((state_val_62150 === (1)))
{var state_62149__$1 = state_62149;var statearr_62153_62342 = state_62149__$1;(statearr_62153_62342[(2)] = null);
(statearr_62153_62342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___62340,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62340,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62157 = [null,null,null,null,null,null,null,null];(statearr_62157[(0)] = state_machine__6188__auto__);
(statearr_62157[(1)] = (1));
return statearr_62157;
});
var state_machine__6188__auto____1 = (function (state_62149){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62158){if((e62158 instanceof Object))
{var ex__6191__auto__ = e62158;var statearr_62159_62343 = state_62149;(statearr_62159_62343[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62344 = state_62149;
state_62149 = G__62344;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62149){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62340,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62160 = f__6203__auto__.call(null);(statearr_62160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62340);
return statearr_62160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62340,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62345 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62345,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62345,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62179){var state_val_62180 = (state_62179[(1)]);if((state_val_62180 === (5)))
{var inst_62163 = (state_62179[(7)]);var inst_62170 = (state_62179[(8)]);var inst_62174 = (state_62179[(2)]);var tmp62181 = inst_62163;var inst_62163__$1 = tmp62181;var inst_62164 = inst_62170;var state_62179__$1 = (function (){var statearr_62182 = state_62179;(statearr_62182[(9)] = inst_62164);
(statearr_62182[(10)] = inst_62174);
(statearr_62182[(7)] = inst_62163__$1);
return statearr_62182;
})();var statearr_62183_62346 = state_62179__$1;(statearr_62183_62346[(2)] = null);
(statearr_62183_62346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62180 === (4)))
{var inst_62164 = (state_62179[(9)]);var inst_62170 = (state_62179[(8)]);var inst_62168 = (state_62179[(2)]);var inst_62169 = (new Date());var inst_62170__$1 = inst_62169.getTime();var inst_62171 = (inst_62170__$1 - inst_62164);var inst_62172 = (inst_62171 / (1000));var state_62179__$1 = (function (){var statearr_62184 = state_62179;(statearr_62184[(8)] = inst_62170__$1);
(statearr_62184[(11)] = inst_62168);
return statearr_62184;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62179__$1,(5),onTick,inst_62172);
} else
{if((state_val_62180 === (3)))
{var inst_62177 = (state_62179[(2)]);var state_62179__$1 = state_62179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62179__$1,inst_62177);
} else
{if((state_val_62180 === (2)))
{var inst_62163 = (state_62179[(7)]);var inst_62166 = cljs.core.async.timeout.call(null,inst_62163);var state_62179__$1 = state_62179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62179__$1,(4),inst_62166);
} else
{if((state_val_62180 === (1)))
{var inst_62161 = (new Date());var inst_62162 = inst_62161.getTime();var inst_62163 = mspf;var inst_62164 = inst_62162;var state_62179__$1 = (function (){var statearr_62185 = state_62179;(statearr_62185[(9)] = inst_62164);
(statearr_62185[(7)] = inst_62163);
return statearr_62185;
})();var statearr_62186_62347 = state_62179__$1;(statearr_62186_62347[(2)] = null);
(statearr_62186_62347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___62345,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62345,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62190 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62190[(0)] = state_machine__6188__auto__);
(statearr_62190[(1)] = (1));
return statearr_62190;
});
var state_machine__6188__auto____1 = (function (state_62179){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62191){if((e62191 instanceof Object))
{var ex__6191__auto__ = e62191;var statearr_62192_62348 = state_62179;(statearr_62192_62348[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62349 = state_62179;
state_62179 = G__62349;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62179){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62345,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62193 = f__6203__auto__.call(null);(statearr_62193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62345);
return statearr_62193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62345,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62350 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62247){var state_val_62248 = (state_62247[(1)]);if((state_val_62248 === (7)))
{var inst_62242 = (state_62247[(2)]);var inst_62203 = inst_62242;var state_62247__$1 = (function (){var statearr_62249 = state_62247;(statearr_62249[(7)] = inst_62203);
return statearr_62249;
})();var statearr_62250_62351 = state_62247__$1;(statearr_62250_62351[(2)] = null);
(statearr_62250_62351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (1)))
{var inst_62194 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_62195 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_62196 = cljs.core.List.EMPTY;var inst_62197 = [inst_62196];var inst_62198 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_62195,inst_62197);var inst_62199 = [(0),(0)];var inst_62200 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62199,null));var inst_62201 = [(0),inst_62198,inst_62200,onModel];var inst_62202 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_62194,inst_62201);var inst_62203 = inst_62202;var state_62247__$1 = (function (){var statearr_62251 = state_62247;(statearr_62251[(7)] = inst_62203);
return statearr_62251;
})();var statearr_62252_62352 = state_62247__$1;(statearr_62252_62352[(2)] = null);
(statearr_62252_62352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (4)))
{var inst_62211 = (state_62247[(8)]);var inst_62209 = (state_62247[(9)]);var inst_62209__$1 = (state_62247[(2)]);var inst_62210 = cljs.core.nth.call(null,inst_62209__$1,(0),null);var inst_62211__$1 = cljs.core.nth.call(null,inst_62209__$1,(1),null);var inst_62215 = cljs.core._EQ_.call(null,onTick,inst_62211__$1);var state_62247__$1 = (function (){var statearr_62253 = state_62247;(statearr_62253[(10)] = inst_62210);
(statearr_62253[(8)] = inst_62211__$1);
(statearr_62253[(9)] = inst_62209__$1);
return statearr_62253;
})();if(inst_62215)
{var statearr_62254_62353 = state_62247__$1;(statearr_62254_62353[(1)] = (5));
} else
{var statearr_62255_62354 = state_62247__$1;(statearr_62255_62354[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (6)))
{var inst_62211 = (state_62247[(8)]);var inst_62233 = cljs.core._EQ_.call(null,onView,inst_62211);var state_62247__$1 = state_62247;if(inst_62233)
{var statearr_62256_62355 = state_62247__$1;(statearr_62256_62355[(1)] = (8));
} else
{var statearr_62257_62356 = state_62247__$1;(statearr_62257_62356[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (3)))
{var inst_62245 = (state_62247[(2)]);var state_62247__$1 = state_62247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62247__$1,inst_62245);
} else
{if((state_val_62248 === (2)))
{var inst_62206 = [onView,onTick];var inst_62207 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62206,null));var state_62247__$1 = state_62247;return cljs.core.async.ioc_alts_BANG_.call(null,state_62247__$1,(4),inst_62207);
} else
{if((state_val_62248 === (9)))
{var inst_62203 = (state_62247[(7)]);var state_62247__$1 = state_62247;var statearr_62258_62357 = state_62247__$1;(statearr_62258_62357[(2)] = inst_62203);
(statearr_62258_62357[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (5)))
{var inst_62210 = (state_62247[(10)]);var inst_62211 = (state_62247[(8)]);var inst_62209 = (state_62247[(9)]);var inst_62203 = (state_62247[(7)]);var inst_62224 = cljs.core.async.chan.call(null,(1));var inst_62225 = (function (){var c__6202__auto____$1 = inst_62224;var expr__62213 = inst_62211;var pred__62212 = cljs.core._EQ_;var ch = inst_62211;var v = inst_62210;var vec__62205 = inst_62209;var ctx = inst_62203;return ((function (c__6202__auto____$1,expr__62213,pred__62212,ch,v,vec__62205,ctx,inst_62210,inst_62211,inst_62209,inst_62203,inst_62224,state_val_62248,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__62213,pred__62212,ch,v,vec__62205,ctx,inst_62210,inst_62211,inst_62209,inst_62203,inst_62224,state_val_62248,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62222){var state_val_62223 = (state_62222[(1)]);if((state_val_62223 === (2)))
{var inst_62220 = (state_62222[(2)]);var state_62222__$1 = state_62222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62222__$1,inst_62220);
} else
{if((state_val_62223 === (1)))
{var inst_62217 = ["tick",v];var inst_62218 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62217,null));var state_62222__$1 = state_62222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62222__$1,(2),onModelEvent,inst_62218);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__62213,pred__62212,ch,v,vec__62205,ctx,inst_62210,inst_62211,inst_62209,inst_62203,inst_62224,state_val_62248,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__62213,pred__62212,ch,v,vec__62205,ctx,inst_62210,inst_62211,inst_62209,inst_62203,inst_62224,state_val_62248,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62262 = [null,null,null,null,null,null,null];(statearr_62262[(0)] = state_machine__6188__auto__);
(statearr_62262[(1)] = (1));
return statearr_62262;
});
var state_machine__6188__auto____1 = (function (state_62222){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62263){if((e62263 instanceof Object))
{var ex__6191__auto__ = e62263;var statearr_62264_62358 = state_62222;(statearr_62264_62358[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62359 = state_62222;
state_62222 = G__62359;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62222){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__62213,pred__62212,ch,v,vec__62205,ctx,inst_62210,inst_62211,inst_62209,inst_62203,inst_62224,state_val_62248,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62265 = f__6203__auto__.call(null);(statearr_62265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_62265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__62213,pred__62212,ch,v,vec__62205,ctx,inst_62210,inst_62211,inst_62209,inst_62203,inst_62224,state_val_62248,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf))
})();var inst_62226 = cljs.core.async.impl.dispatch.run.call(null,inst_62225);var inst_62227 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_62228 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62227,null));var inst_62229 = cljs.core.partial.call(null,tool.particle.update,inst_62210);var inst_62230 = cljs.core.update_in.call(null,inst_62203,inst_62228,inst_62229);var inst_62231 = app.particle.main.draw.call(null,inst_62230);var state_62247__$1 = (function (){var statearr_62266 = state_62247;(statearr_62266[(11)] = inst_62226);
return statearr_62266;
})();var statearr_62267_62360 = state_62247__$1;(statearr_62267_62360[(2)] = inst_62231);
(statearr_62267_62360[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (10)))
{var inst_62240 = (state_62247[(2)]);var state_62247__$1 = state_62247;var statearr_62268_62361 = state_62247__$1;(statearr_62268_62361[(2)] = inst_62240);
(statearr_62268_62361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62248 === (8)))
{var inst_62210 = (state_62247[(10)]);var inst_62203 = (state_62247[(7)]);var inst_62235 = (inst_62210[(0)]);var inst_62236 = (inst_62210[(1)]);var inst_62237 = app.particle.abstract$.onViewCommand.call(null,inst_62235,inst_62236,inst_62203);var state_62247__$1 = state_62247;var statearr_62269_62362 = state_62247__$1;(statearr_62269_62362[(2)] = inst_62237);
(statearr_62269_62362[(1)] = (10));
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
});})(c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62273 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62273[(0)] = state_machine__6188__auto__);
(statearr_62273[(1)] = (1));
return statearr_62273;
});
var state_machine__6188__auto____1 = (function (state_62247){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62274){if((e62274 instanceof Object))
{var ex__6191__auto__ = e62274;var statearr_62275_62363 = state_62247;(statearr_62275_62363[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62364 = state_62247;
state_62247 = G__62364;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62247){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62276 = f__6203__auto__.call(null);(statearr_62276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62350);
return statearr_62276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62350,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62365 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62365,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62365,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62321){var state_val_62322 = (state_62321[(1)]);if((state_val_62322 === (5)))
{var inst_62319 = (state_62321[(2)]);var state_62321__$1 = state_62321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62321__$1,inst_62319);
} else
{if((state_val_62322 === (4)))
{var inst_62289 = (state_62321[(2)]);var inst_62296 = [(0),(0),(0)];var inst_62297 = [(1),(0),(1),(1)];var inst_62298 = [(10),(20)];var inst_62299 = [(0),(0),(0)];var inst_62300 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_62301 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_62302 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_62303 = [inst_62300,inst_62301,inst_62302];var inst_62304 = {"position":inst_62296,"color":inst_62297,"size":inst_62298,"vel":inst_62299,"formulaList":inst_62303};var inst_62305 = [inst_62304];var inst_62306 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_62305};var inst_62307 = [(0),(0),(1),(1)];var inst_62308 = [(30),(10)];var inst_62309 = [(10),(10),(0)];var inst_62310 = [(0),(0),(0)];var inst_62311 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_62312 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_62313 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_62314 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_62315 = [inst_62311,inst_62312,inst_62313,inst_62314];var inst_62316 = {"id":"x1","emit":inst_62306,"color":inst_62307,"size":inst_62308,"pos":inst_62309,"vel":inst_62310,"formulaList":inst_62315};var inst_62317 = ["edit-particle",inst_62316];var state_62321__$1 = (function (){var statearr_62323 = state_62321;(statearr_62323[(7)] = inst_62289);
return statearr_62323;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62321__$1,(5),onView,inst_62317);
} else
{if((state_val_62322 === (3)))
{var inst_62286 = (state_62321[(2)]);var inst_62287 = cljs.core.async.timeout.call(null,(1100));var state_62321__$1 = (function (){var statearr_62324 = state_62321;(statearr_62324[(8)] = inst_62286);
return statearr_62324;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62321__$1,(4),inst_62287);
} else
{if((state_val_62322 === (2)))
{var inst_62279 = (state_62321[(2)]);var inst_62282 = [(10),(10),(0)];var inst_62283 = {"id":"x1","pos":inst_62282};var inst_62284 = ["edit-particle",inst_62283];var state_62321__$1 = (function (){var statearr_62325 = state_62321;(statearr_62325[(9)] = inst_62279);
return statearr_62325;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62321__$1,(3),onView,inst_62284);
} else
{if((state_val_62322 === (1)))
{var inst_62277 = cljs.core.async.timeout.call(null,(1000));var state_62321__$1 = state_62321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62321__$1,(2),inst_62277);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___62365,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62365,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62329 = [null,null,null,null,null,null,null,null,null,null];(statearr_62329[(0)] = state_machine__6188__auto__);
(statearr_62329[(1)] = (1));
return statearr_62329;
});
var state_machine__6188__auto____1 = (function (state_62321){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62321);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62330){if((e62330 instanceof Object))
{var ex__6191__auto__ = e62330;var statearr_62331_62366 = state_62321;(statearr_62331_62366[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62367 = state_62321;
state_62321 = G__62367;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62321){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62365,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62332 = f__6203__auto__.call(null);(statearr_62332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62365);
return statearr_62332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62365,onView,onModel,onModelEvent,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
