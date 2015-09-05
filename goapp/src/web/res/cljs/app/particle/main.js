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
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_57091){var state_val_57092 = (state_57091[(1)]);if((state_val_57092 === (2)))
{var inst_57089 = (state_57091[(2)]);var state_57091__$1 = state_57091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57091__$1,inst_57089);
} else
{if((state_val_57092 === (1)))
{var state_57091__$1 = state_57091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57091__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57096 = [null,null,null,null,null,null,null];(statearr_57096[(0)] = state_machine__6188__auto__);
(statearr_57096[(1)] = (1));
return statearr_57096;
});
var state_machine__6188__auto____1 = (function (state_57091){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57091);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57097){if((e57097 instanceof Object))
{var ex__6191__auto__ = e57097;var statearr_57098_57279 = state_57091;(statearr_57098_57279[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57280 = state_57091;
state_57091 = G__57280;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57091){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_57099 = f__6203__auto__.call(null);(statearr_57099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_57099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___57281 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57281,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57281,onView,onModel,onTick,mspf){
return (function (state_57113){var state_val_57114 = (state_57113[(1)]);if((state_val_57114 === (4)))
{var inst_57103 = (state_57113[(2)]);var inst_57104 = cljs.core.nth.call(null,inst_57103,(0),null);var inst_57105 = cljs.core.nth.call(null,inst_57103,(1),null);var inst_57106 = cljs.core.nth.call(null,inst_57103,(2),null);var inst_57107 = [inst_57104,inst_57105,inst_57106];var inst_57108 = common.onModel.onNext(inst_57107);var state_57113__$1 = (function (){var statearr_57115 = state_57113;(statearr_57115[(7)] = inst_57108);
return statearr_57115;
})();var statearr_57116_57282 = state_57113__$1;(statearr_57116_57282[(2)] = null);
(statearr_57116_57282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57114 === (3)))
{var inst_57111 = (state_57113[(2)]);var state_57113__$1 = state_57113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57113__$1,inst_57111);
} else
{if((state_val_57114 === (2)))
{var state_57113__$1 = state_57113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57113__$1,(4),onModel);
} else
{if((state_val_57114 === (1)))
{var state_57113__$1 = state_57113;var statearr_57117_57283 = state_57113__$1;(statearr_57117_57283[(2)] = null);
(statearr_57117_57283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___57281,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___57281,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57121 = [null,null,null,null,null,null,null,null];(statearr_57121[(0)] = state_machine__6188__auto__);
(statearr_57121[(1)] = (1));
return statearr_57121;
});
var state_machine__6188__auto____1 = (function (state_57113){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57113);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57122){if((e57122 instanceof Object))
{var ex__6191__auto__ = e57122;var statearr_57123_57284 = state_57113;(statearr_57123_57284[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57285 = state_57113;
state_57113 = G__57285;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57113){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57281,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_57124 = f__6203__auto__.call(null);(statearr_57124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57281);
return statearr_57124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57281,onView,onModel,onTick,mspf))
);
var c__6202__auto___57286 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57286,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57286,onView,onModel,onTick,mspf){
return (function (state_57143){var state_val_57144 = (state_57143[(1)]);if((state_val_57144 === (5)))
{var inst_57134 = (state_57143[(7)]);var inst_57127 = (state_57143[(8)]);var inst_57138 = (state_57143[(2)]);var tmp57145 = inst_57127;var inst_57127__$1 = tmp57145;var inst_57128 = inst_57134;var state_57143__$1 = (function (){var statearr_57146 = state_57143;(statearr_57146[(9)] = inst_57128);
(statearr_57146[(10)] = inst_57138);
(statearr_57146[(8)] = inst_57127__$1);
return statearr_57146;
})();var statearr_57147_57287 = state_57143__$1;(statearr_57147_57287[(2)] = null);
(statearr_57147_57287[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57144 === (4)))
{var inst_57128 = (state_57143[(9)]);var inst_57134 = (state_57143[(7)]);var inst_57132 = (state_57143[(2)]);var inst_57133 = (new Date());var inst_57134__$1 = inst_57133.getTime();var inst_57135 = (inst_57134__$1 - inst_57128);var inst_57136 = (inst_57135 / (1000));var state_57143__$1 = (function (){var statearr_57148 = state_57143;(statearr_57148[(7)] = inst_57134__$1);
(statearr_57148[(11)] = inst_57132);
return statearr_57148;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57143__$1,(5),onTick,inst_57136);
} else
{if((state_val_57144 === (3)))
{var inst_57141 = (state_57143[(2)]);var state_57143__$1 = state_57143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57143__$1,inst_57141);
} else
{if((state_val_57144 === (2)))
{var inst_57127 = (state_57143[(8)]);var inst_57130 = cljs.core.async.timeout.call(null,inst_57127);var state_57143__$1 = state_57143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57143__$1,(4),inst_57130);
} else
{if((state_val_57144 === (1)))
{var inst_57125 = (new Date());var inst_57126 = inst_57125.getTime();var inst_57127 = mspf;var inst_57128 = inst_57126;var state_57143__$1 = (function (){var statearr_57149 = state_57143;(statearr_57149[(9)] = inst_57128);
(statearr_57149[(8)] = inst_57127);
return statearr_57149;
})();var statearr_57150_57288 = state_57143__$1;(statearr_57150_57288[(2)] = null);
(statearr_57150_57288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___57286,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___57286,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57154 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57154[(0)] = state_machine__6188__auto__);
(statearr_57154[(1)] = (1));
return statearr_57154;
});
var state_machine__6188__auto____1 = (function (state_57143){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57143);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57155){if((e57155 instanceof Object))
{var ex__6191__auto__ = e57155;var statearr_57156_57289 = state_57143;(statearr_57156_57289[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57290 = state_57143;
state_57143 = G__57290;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57143){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57286,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_57157 = f__6203__auto__.call(null);(statearr_57157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57286);
return statearr_57157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57286,onView,onModel,onTick,mspf))
);
var c__6202__auto___57291 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57291,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57291,onView,onModel,onTick,mspf){
return (function (state_57201){var state_val_57202 = (state_57201[(1)]);if((state_val_57202 === (7)))
{var inst_57196 = (state_57201[(2)]);var inst_57167 = inst_57196;var state_57201__$1 = (function (){var statearr_57203 = state_57201;(statearr_57203[(7)] = inst_57167);
return statearr_57203;
})();var statearr_57204_57292 = state_57201__$1;(statearr_57204_57292[(2)] = null);
(statearr_57204_57292[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (1)))
{var inst_57158 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_57159 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_57160 = cljs.core.List.EMPTY;var inst_57161 = [inst_57160];var inst_57162 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_57159,inst_57161);var inst_57163 = [(0),(0)];var inst_57164 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57163,null));var inst_57165 = [(0),inst_57162,inst_57164,onModel];var inst_57166 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_57158,inst_57165);var inst_57167 = inst_57166;var state_57201__$1 = (function (){var statearr_57205 = state_57201;(statearr_57205[(7)] = inst_57167);
return statearr_57205;
})();var statearr_57206_57293 = state_57201__$1;(statearr_57206_57293[(2)] = null);
(statearr_57206_57293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (4)))
{var inst_57175 = (state_57201[(8)]);var inst_57173 = (state_57201[(2)]);var inst_57174 = cljs.core.nth.call(null,inst_57173,(0),null);var inst_57175__$1 = cljs.core.nth.call(null,inst_57173,(1),null);var inst_57179 = cljs.core._EQ_.call(null,onTick,inst_57175__$1);var state_57201__$1 = (function (){var statearr_57207 = state_57201;(statearr_57207[(8)] = inst_57175__$1);
(statearr_57207[(9)] = inst_57174);
return statearr_57207;
})();if(inst_57179)
{var statearr_57208_57294 = state_57201__$1;(statearr_57208_57294[(1)] = (5));
} else
{var statearr_57209_57295 = state_57201__$1;(statearr_57209_57295[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (6)))
{var inst_57175 = (state_57201[(8)]);var inst_57187 = cljs.core._EQ_.call(null,onView,inst_57175);var state_57201__$1 = state_57201;if(inst_57187)
{var statearr_57210_57296 = state_57201__$1;(statearr_57210_57296[(1)] = (8));
} else
{var statearr_57211_57297 = state_57201__$1;(statearr_57211_57297[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (3)))
{var inst_57199 = (state_57201[(2)]);var state_57201__$1 = state_57201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57201__$1,inst_57199);
} else
{if((state_val_57202 === (2)))
{var inst_57170 = [onView,onTick];var inst_57171 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57170,null));var state_57201__$1 = state_57201;return cljs.core.async.ioc_alts_BANG_.call(null,state_57201__$1,(4),inst_57171);
} else
{if((state_val_57202 === (9)))
{var inst_57167 = (state_57201[(7)]);var state_57201__$1 = state_57201;var statearr_57212_57298 = state_57201__$1;(statearr_57212_57298[(2)] = inst_57167);
(statearr_57212_57298[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (5)))
{var inst_57174 = (state_57201[(9)]);var inst_57167 = (state_57201[(7)]);var inst_57181 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_57182 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57181,null));var inst_57183 = cljs.core.partial.call(null,tool.particle.update,inst_57174);var inst_57184 = cljs.core.update_in.call(null,inst_57167,inst_57182,inst_57183);var inst_57185 = app.particle.main.draw.call(null,inst_57184);var state_57201__$1 = state_57201;var statearr_57213_57299 = state_57201__$1;(statearr_57213_57299[(2)] = inst_57185);
(statearr_57213_57299[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (10)))
{var inst_57194 = (state_57201[(2)]);var state_57201__$1 = state_57201;var statearr_57214_57300 = state_57201__$1;(statearr_57214_57300[(2)] = inst_57194);
(statearr_57214_57300[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57202 === (8)))
{var inst_57174 = (state_57201[(9)]);var inst_57167 = (state_57201[(7)]);var inst_57189 = (inst_57174[(0)]);var inst_57190 = (inst_57174[(1)]);var inst_57191 = app.particle.abstract$.onViewCommand.call(null,inst_57189,inst_57190,inst_57167);var state_57201__$1 = state_57201;var statearr_57215_57301 = state_57201__$1;(statearr_57215_57301[(2)] = inst_57191);
(statearr_57215_57301[(1)] = (10));
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
});})(c__6202__auto___57291,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___57291,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57219 = [null,null,null,null,null,null,null,null,null,null];(statearr_57219[(0)] = state_machine__6188__auto__);
(statearr_57219[(1)] = (1));
return statearr_57219;
});
var state_machine__6188__auto____1 = (function (state_57201){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57220){if((e57220 instanceof Object))
{var ex__6191__auto__ = e57220;var statearr_57221_57302 = state_57201;(statearr_57221_57302[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57303 = state_57201;
state_57201 = G__57303;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57201){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57291,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_57222 = f__6203__auto__.call(null);(statearr_57222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57291);
return statearr_57222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57291,onView,onModel,onTick,mspf))
);
var c__6202__auto___57304 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57304,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57304,onView,onModel,onTick,mspf){
return (function (state_57267){var state_val_57268 = (state_57267[(1)]);if((state_val_57268 === (5)))
{var inst_57265 = (state_57267[(2)]);var state_57267__$1 = state_57267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57267__$1,inst_57265);
} else
{if((state_val_57268 === (4)))
{var inst_57235 = (state_57267[(2)]);var inst_57242 = [(0),(0),(0)];var inst_57243 = [(1),(0),(1),(1)];var inst_57244 = [(10),(20)];var inst_57245 = [(0),(0),(0)];var inst_57246 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_57247 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_57248 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_57249 = [inst_57246,inst_57247,inst_57248];var inst_57250 = {"position":inst_57242,"color":inst_57243,"size":inst_57244,"vel":inst_57245,"formulaList":inst_57249};var inst_57251 = [inst_57250];var inst_57252 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_57251};var inst_57253 = [(0),(0),(1),(1)];var inst_57254 = [(30),(10)];var inst_57255 = [(10),(10),(0)];var inst_57256 = [(0),(0),(0)];var inst_57257 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_57258 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_57259 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_57260 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_57261 = [inst_57257,inst_57258,inst_57259,inst_57260];var inst_57262 = {"id":"x1","emit":inst_57252,"color":inst_57253,"size":inst_57254,"pos":inst_57255,"vel":inst_57256,"formulaList":inst_57261};var inst_57263 = ["edit-particle",inst_57262];var state_57267__$1 = (function (){var statearr_57269 = state_57267;(statearr_57269[(7)] = inst_57235);
return statearr_57269;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57267__$1,(5),onView,inst_57263);
} else
{if((state_val_57268 === (3)))
{var inst_57232 = (state_57267[(2)]);var inst_57233 = cljs.core.async.timeout.call(null,(1100));var state_57267__$1 = (function (){var statearr_57270 = state_57267;(statearr_57270[(8)] = inst_57232);
return statearr_57270;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57267__$1,(4),inst_57233);
} else
{if((state_val_57268 === (2)))
{var inst_57225 = (state_57267[(2)]);var inst_57228 = [(10),(10),(0)];var inst_57229 = {"id":"x1","pos":inst_57228};var inst_57230 = ["edit-particle",inst_57229];var state_57267__$1 = (function (){var statearr_57271 = state_57267;(statearr_57271[(9)] = inst_57225);
return statearr_57271;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57267__$1,(3),onView,inst_57230);
} else
{if((state_val_57268 === (1)))
{var inst_57223 = cljs.core.async.timeout.call(null,(1000));var state_57267__$1 = state_57267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57267__$1,(2),inst_57223);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___57304,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___57304,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57275 = [null,null,null,null,null,null,null,null,null,null];(statearr_57275[(0)] = state_machine__6188__auto__);
(statearr_57275[(1)] = (1));
return statearr_57275;
});
var state_machine__6188__auto____1 = (function (state_57267){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57276){if((e57276 instanceof Object))
{var ex__6191__auto__ = e57276;var statearr_57277_57305 = state_57267;(statearr_57277_57305[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57306 = state_57267;
state_57267 = G__57306;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57267){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57304,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_57278 = f__6203__auto__.call(null);(statearr_57278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57304);
return statearr_57278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57304,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
