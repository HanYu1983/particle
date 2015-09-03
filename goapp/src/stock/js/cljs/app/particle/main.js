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
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_42082){var state_val_42083 = (state_42082[(1)]);if((state_val_42083 === (2)))
{var inst_42080 = (state_42082[(2)]);var state_42082__$1 = state_42082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42082__$1,inst_42080);
} else
{if((state_val_42083 === (1)))
{var state_42082__$1 = state_42082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42082__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42087 = [null,null,null,null,null,null,null];(statearr_42087[(0)] = state_machine__6188__auto__);
(statearr_42087[(1)] = (1));
return statearr_42087;
});
var state_machine__6188__auto____1 = (function (state_42082){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42088){if((e42088 instanceof Object))
{var ex__6191__auto__ = e42088;var statearr_42089_42256 = state_42082;(statearr_42089_42256[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42257 = state_42082;
state_42082 = G__42257;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42082){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42090 = f__6203__auto__.call(null);(statearr_42090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_42090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___42258 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42258,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42258,onView,onModel,onTick,mspf){
return (function (state_42099){var state_val_42100 = (state_42099[(1)]);if((state_val_42100 === (4)))
{var inst_42093 = (state_42099[(2)]);var inst_42094 = common.onModel.onNext(inst_42093);var state_42099__$1 = (function (){var statearr_42101 = state_42099;(statearr_42101[(7)] = inst_42094);
return statearr_42101;
})();var statearr_42102_42259 = state_42099__$1;(statearr_42102_42259[(2)] = null);
(statearr_42102_42259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42100 === (3)))
{var inst_42097 = (state_42099[(2)]);var state_42099__$1 = state_42099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42099__$1,inst_42097);
} else
{if((state_val_42100 === (2)))
{var state_42099__$1 = state_42099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42099__$1,(4),onModel);
} else
{if((state_val_42100 === (1)))
{var state_42099__$1 = state_42099;var statearr_42103_42260 = state_42099__$1;(statearr_42103_42260[(2)] = null);
(statearr_42103_42260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___42258,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42258,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42107 = [null,null,null,null,null,null,null,null];(statearr_42107[(0)] = state_machine__6188__auto__);
(statearr_42107[(1)] = (1));
return statearr_42107;
});
var state_machine__6188__auto____1 = (function (state_42099){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42108){if((e42108 instanceof Object))
{var ex__6191__auto__ = e42108;var statearr_42109_42261 = state_42099;(statearr_42109_42261[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42262 = state_42099;
state_42099 = G__42262;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42099){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42258,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42110 = f__6203__auto__.call(null);(statearr_42110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42258);
return statearr_42110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42258,onView,onModel,onTick,mspf))
);
var c__6202__auto___42263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42263,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42263,onView,onModel,onTick,mspf){
return (function (state_42129){var state_val_42130 = (state_42129[(1)]);if((state_val_42130 === (5)))
{var inst_42120 = (state_42129[(7)]);var inst_42113 = (state_42129[(8)]);var inst_42124 = (state_42129[(2)]);var tmp42131 = inst_42113;var inst_42113__$1 = tmp42131;var inst_42114 = inst_42120;var state_42129__$1 = (function (){var statearr_42132 = state_42129;(statearr_42132[(9)] = inst_42124);
(statearr_42132[(10)] = inst_42114);
(statearr_42132[(8)] = inst_42113__$1);
return statearr_42132;
})();var statearr_42133_42264 = state_42129__$1;(statearr_42133_42264[(2)] = null);
(statearr_42133_42264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42130 === (4)))
{var inst_42114 = (state_42129[(10)]);var inst_42120 = (state_42129[(7)]);var inst_42118 = (state_42129[(2)]);var inst_42119 = (new Date());var inst_42120__$1 = inst_42119.getTime();var inst_42121 = (inst_42120__$1 - inst_42114);var inst_42122 = (inst_42121 / (1000));var state_42129__$1 = (function (){var statearr_42134 = state_42129;(statearr_42134[(11)] = inst_42118);
(statearr_42134[(7)] = inst_42120__$1);
return statearr_42134;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42129__$1,(5),onTick,inst_42122);
} else
{if((state_val_42130 === (3)))
{var inst_42127 = (state_42129[(2)]);var state_42129__$1 = state_42129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42129__$1,inst_42127);
} else
{if((state_val_42130 === (2)))
{var inst_42113 = (state_42129[(8)]);var inst_42116 = cljs.core.async.timeout.call(null,inst_42113);var state_42129__$1 = state_42129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42129__$1,(4),inst_42116);
} else
{if((state_val_42130 === (1)))
{var inst_42111 = (new Date());var inst_42112 = inst_42111.getTime();var inst_42113 = mspf;var inst_42114 = inst_42112;var state_42129__$1 = (function (){var statearr_42135 = state_42129;(statearr_42135[(10)] = inst_42114);
(statearr_42135[(8)] = inst_42113);
return statearr_42135;
})();var statearr_42136_42265 = state_42129__$1;(statearr_42136_42265[(2)] = null);
(statearr_42136_42265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___42263,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42263,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42140 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42140[(0)] = state_machine__6188__auto__);
(statearr_42140[(1)] = (1));
return statearr_42140;
});
var state_machine__6188__auto____1 = (function (state_42129){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42141){if((e42141 instanceof Object))
{var ex__6191__auto__ = e42141;var statearr_42142_42266 = state_42129;(statearr_42142_42266[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42267 = state_42129;
state_42129 = G__42267;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42129){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42263,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42143 = f__6203__auto__.call(null);(statearr_42143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42263);
return statearr_42143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42263,onView,onModel,onTick,mspf))
);
var c__6202__auto___42268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42268,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42268,onView,onModel,onTick,mspf){
return (function (state_42187){var state_val_42188 = (state_42187[(1)]);if((state_val_42188 === (7)))
{var inst_42182 = (state_42187[(2)]);var inst_42153 = inst_42182;var state_42187__$1 = (function (){var statearr_42189 = state_42187;(statearr_42189[(7)] = inst_42153);
return statearr_42189;
})();var statearr_42190_42269 = state_42187__$1;(statearr_42190_42269[(2)] = null);
(statearr_42190_42269[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (1)))
{var inst_42144 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787)];var inst_42145 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_42146 = cljs.core.List.EMPTY;var inst_42147 = [inst_42146];var inst_42148 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42145,inst_42147);var inst_42149 = [(100),(0)];var inst_42150 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42149,null));var inst_42151 = [(0),inst_42148,inst_42150];var inst_42152 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42144,inst_42151);var inst_42153 = inst_42152;var state_42187__$1 = (function (){var statearr_42191 = state_42187;(statearr_42191[(7)] = inst_42153);
return statearr_42191;
})();var statearr_42192_42270 = state_42187__$1;(statearr_42192_42270[(2)] = null);
(statearr_42192_42270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (4)))
{var inst_42161 = (state_42187[(8)]);var inst_42159 = (state_42187[(2)]);var inst_42160 = cljs.core.nth.call(null,inst_42159,(0),null);var inst_42161__$1 = cljs.core.nth.call(null,inst_42159,(1),null);var inst_42165 = cljs.core._EQ_.call(null,onTick,inst_42161__$1);var state_42187__$1 = (function (){var statearr_42193 = state_42187;(statearr_42193[(8)] = inst_42161__$1);
(statearr_42193[(9)] = inst_42160);
return statearr_42193;
})();if(inst_42165)
{var statearr_42194_42271 = state_42187__$1;(statearr_42194_42271[(1)] = (5));
} else
{var statearr_42195_42272 = state_42187__$1;(statearr_42195_42272[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (6)))
{var inst_42161 = (state_42187[(8)]);var inst_42173 = cljs.core._EQ_.call(null,onView,inst_42161);var state_42187__$1 = state_42187;if(inst_42173)
{var statearr_42196_42273 = state_42187__$1;(statearr_42196_42273[(1)] = (8));
} else
{var statearr_42197_42274 = state_42187__$1;(statearr_42197_42274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (3)))
{var inst_42185 = (state_42187[(2)]);var state_42187__$1 = state_42187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42187__$1,inst_42185);
} else
{if((state_val_42188 === (2)))
{var inst_42156 = [onView,onTick];var inst_42157 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42156,null));var state_42187__$1 = state_42187;return cljs.core.async.ioc_alts_BANG_.call(null,state_42187__$1,(4),inst_42157);
} else
{if((state_val_42188 === (9)))
{var inst_42153 = (state_42187[(7)]);var state_42187__$1 = state_42187;var statearr_42198_42275 = state_42187__$1;(statearr_42198_42275[(2)] = inst_42153);
(statearr_42198_42275[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (5)))
{var inst_42153 = (state_42187[(7)]);var inst_42160 = (state_42187[(9)]);var inst_42167 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_42168 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42167,null));var inst_42169 = cljs.core.partial.call(null,tool.particle.update,inst_42160);var inst_42170 = cljs.core.update_in.call(null,inst_42153,inst_42168,inst_42169);var inst_42171 = app.particle.main.draw.call(null,inst_42170);var state_42187__$1 = state_42187;var statearr_42199_42276 = state_42187__$1;(statearr_42199_42276[(2)] = inst_42171);
(statearr_42199_42276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (10)))
{var inst_42180 = (state_42187[(2)]);var state_42187__$1 = state_42187;var statearr_42200_42277 = state_42187__$1;(statearr_42200_42277[(2)] = inst_42180);
(statearr_42200_42277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42188 === (8)))
{var inst_42153 = (state_42187[(7)]);var inst_42160 = (state_42187[(9)]);var inst_42175 = (inst_42160[(0)]);var inst_42176 = (inst_42160[(1)]);var inst_42177 = app.particle.abstract$.onViewCommand.call(null,inst_42175,inst_42176,inst_42153);var state_42187__$1 = state_42187;var statearr_42201_42278 = state_42187__$1;(statearr_42201_42278[(2)] = inst_42177);
(statearr_42201_42278[(1)] = (10));
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
});})(c__6202__auto___42268,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42268,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42205 = [null,null,null,null,null,null,null,null,null,null];(statearr_42205[(0)] = state_machine__6188__auto__);
(statearr_42205[(1)] = (1));
return statearr_42205;
});
var state_machine__6188__auto____1 = (function (state_42187){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42206){if((e42206 instanceof Object))
{var ex__6191__auto__ = e42206;var statearr_42207_42279 = state_42187;(statearr_42207_42279[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42280 = state_42187;
state_42187 = G__42280;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42187){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42268,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42208 = f__6203__auto__.call(null);(statearr_42208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42268);
return statearr_42208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42268,onView,onModel,onTick,mspf))
);
var c__6202__auto___42281 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42281,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42281,onView,onModel,onTick,mspf){
return (function (state_42244){var state_val_42245 = (state_42244[(1)]);if((state_val_42245 === (5)))
{var inst_42242 = (state_42244[(2)]);var state_42244__$1 = state_42244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42244__$1,inst_42242);
} else
{if((state_val_42245 === (4)))
{var inst_42221 = (state_42244[(2)]);var inst_42228 = [(0),(0),(0)];var inst_42229 = [(1),(0),(1),(1)];var inst_42230 = [(10),(20)];var inst_42231 = [(100),(0),3.14];var inst_42232 = {"position":inst_42228,"color":inst_42229,"size":inst_42230,"vel":inst_42231};var inst_42233 = [inst_42232];var inst_42234 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_42233};var inst_42235 = [(0),(0),(1),(1)];var inst_42236 = [(30),(10)];var inst_42237 = [(10),(10),(0)];var inst_42238 = [(100),(100),(0)];var inst_42239 = {"id":"x1","emit":inst_42234,"color":inst_42235,"size":inst_42236,"pos":inst_42237,"vel":inst_42238};var inst_42240 = ["edit-particle",inst_42239];var state_42244__$1 = (function (){var statearr_42246 = state_42244;(statearr_42246[(7)] = inst_42221);
return statearr_42246;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42244__$1,(5),onView,inst_42240);
} else
{if((state_val_42245 === (3)))
{var inst_42218 = (state_42244[(2)]);var inst_42219 = cljs.core.async.timeout.call(null,(1100));var state_42244__$1 = (function (){var statearr_42247 = state_42244;(statearr_42247[(8)] = inst_42218);
return statearr_42247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42244__$1,(4),inst_42219);
} else
{if((state_val_42245 === (2)))
{var inst_42211 = (state_42244[(2)]);var inst_42214 = [(10),(10),(0)];var inst_42215 = {"id":"x1","pos":inst_42214};var inst_42216 = ["edit-particle",inst_42215];var state_42244__$1 = (function (){var statearr_42248 = state_42244;(statearr_42248[(9)] = inst_42211);
return statearr_42248;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42244__$1,(3),onView,inst_42216);
} else
{if((state_val_42245 === (1)))
{var inst_42209 = cljs.core.async.timeout.call(null,(1000));var state_42244__$1 = state_42244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42244__$1,(2),inst_42209);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___42281,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42281,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42252 = [null,null,null,null,null,null,null,null,null,null];(statearr_42252[(0)] = state_machine__6188__auto__);
(statearr_42252[(1)] = (1));
return statearr_42252;
});
var state_machine__6188__auto____1 = (function (state_42244){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42244);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42253){if((e42253 instanceof Object))
{var ex__6191__auto__ = e42253;var statearr_42254_42282 = state_42244;(statearr_42254_42282[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42283 = state_42244;
state_42244 = G__42283;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42244){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42281,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42255 = f__6203__auto__.call(null);(statearr_42255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42281);
return statearr_42255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42281,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
