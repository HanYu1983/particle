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
return (function (state_41015){var state_val_41016 = (state_41015[(1)]);if((state_val_41016 === (2)))
{var inst_41013 = (state_41015[(2)]);var state_41015__$1 = state_41015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41015__$1,inst_41013);
} else
{if((state_val_41016 === (1)))
{var state_41015__$1 = state_41015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41015__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_41020 = [null,null,null,null,null,null,null];(statearr_41020[(0)] = state_machine__6188__auto__);
(statearr_41020[(1)] = (1));
return statearr_41020;
});
var state_machine__6188__auto____1 = (function (state_41015){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_41015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e41021){if((e41021 instanceof Object))
{var ex__6191__auto__ = e41021;var statearr_41022_41199 = state_41015;(statearr_41022_41199[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41200 = state_41015;
state_41015 = G__41200;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_41015){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_41015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_41023 = f__6203__auto__.call(null);(statearr_41023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_41023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___41201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___41201,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___41201,onView,onModel,onTick,mspf){
return (function (state_41037){var state_val_41038 = (state_41037[(1)]);if((state_val_41038 === (4)))
{var inst_41027 = (state_41037[(2)]);var inst_41028 = cljs.core.nth.call(null,inst_41027,(0),null);var inst_41029 = cljs.core.nth.call(null,inst_41027,(1),null);var inst_41030 = cljs.core.nth.call(null,inst_41027,(2),null);var inst_41031 = [inst_41028,inst_41029,inst_41030];var inst_41032 = common.onModel.onNext(inst_41031);var state_41037__$1 = (function (){var statearr_41039 = state_41037;(statearr_41039[(7)] = inst_41032);
return statearr_41039;
})();var statearr_41040_41202 = state_41037__$1;(statearr_41040_41202[(2)] = null);
(statearr_41040_41202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41038 === (3)))
{var inst_41035 = (state_41037[(2)]);var state_41037__$1 = state_41037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41037__$1,inst_41035);
} else
{if((state_val_41038 === (2)))
{var state_41037__$1 = state_41037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41037__$1,(4),onModel);
} else
{if((state_val_41038 === (1)))
{var state_41037__$1 = state_41037;var statearr_41041_41203 = state_41037__$1;(statearr_41041_41203[(2)] = null);
(statearr_41041_41203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___41201,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___41201,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_41045 = [null,null,null,null,null,null,null,null];(statearr_41045[(0)] = state_machine__6188__auto__);
(statearr_41045[(1)] = (1));
return statearr_41045;
});
var state_machine__6188__auto____1 = (function (state_41037){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_41037);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e41046){if((e41046 instanceof Object))
{var ex__6191__auto__ = e41046;var statearr_41047_41204 = state_41037;(statearr_41047_41204[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41205 = state_41037;
state_41037 = G__41205;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_41037){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_41037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___41201,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_41048 = f__6203__auto__.call(null);(statearr_41048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___41201);
return statearr_41048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___41201,onView,onModel,onTick,mspf))
);
var c__6202__auto___41206 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___41206,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___41206,onView,onModel,onTick,mspf){
return (function (state_41067){var state_val_41068 = (state_41067[(1)]);if((state_val_41068 === (5)))
{var inst_41058 = (state_41067[(7)]);var inst_41051 = (state_41067[(8)]);var inst_41062 = (state_41067[(2)]);var tmp41069 = inst_41051;var inst_41051__$1 = tmp41069;var inst_41052 = inst_41058;var state_41067__$1 = (function (){var statearr_41070 = state_41067;(statearr_41070[(9)] = inst_41052);
(statearr_41070[(10)] = inst_41062);
(statearr_41070[(8)] = inst_41051__$1);
return statearr_41070;
})();var statearr_41071_41207 = state_41067__$1;(statearr_41071_41207[(2)] = null);
(statearr_41071_41207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41068 === (4)))
{var inst_41058 = (state_41067[(7)]);var inst_41052 = (state_41067[(9)]);var inst_41056 = (state_41067[(2)]);var inst_41057 = (new Date());var inst_41058__$1 = inst_41057.getTime();var inst_41059 = (inst_41058__$1 - inst_41052);var inst_41060 = (inst_41059 / (1000));var state_41067__$1 = (function (){var statearr_41072 = state_41067;(statearr_41072[(7)] = inst_41058__$1);
(statearr_41072[(11)] = inst_41056);
return statearr_41072;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41067__$1,(5),onTick,inst_41060);
} else
{if((state_val_41068 === (3)))
{var inst_41065 = (state_41067[(2)]);var state_41067__$1 = state_41067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41067__$1,inst_41065);
} else
{if((state_val_41068 === (2)))
{var inst_41051 = (state_41067[(8)]);var inst_41054 = cljs.core.async.timeout.call(null,inst_41051);var state_41067__$1 = state_41067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41067__$1,(4),inst_41054);
} else
{if((state_val_41068 === (1)))
{var inst_41049 = (new Date());var inst_41050 = inst_41049.getTime();var inst_41051 = mspf;var inst_41052 = inst_41050;var state_41067__$1 = (function (){var statearr_41073 = state_41067;(statearr_41073[(9)] = inst_41052);
(statearr_41073[(8)] = inst_41051);
return statearr_41073;
})();var statearr_41074_41208 = state_41067__$1;(statearr_41074_41208[(2)] = null);
(statearr_41074_41208[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___41206,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___41206,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_41078 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41078[(0)] = state_machine__6188__auto__);
(statearr_41078[(1)] = (1));
return statearr_41078;
});
var state_machine__6188__auto____1 = (function (state_41067){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_41067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e41079){if((e41079 instanceof Object))
{var ex__6191__auto__ = e41079;var statearr_41080_41209 = state_41067;(statearr_41080_41209[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41210 = state_41067;
state_41067 = G__41210;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_41067){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_41067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___41206,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_41081 = f__6203__auto__.call(null);(statearr_41081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___41206);
return statearr_41081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___41206,onView,onModel,onTick,mspf))
);
var c__6202__auto___41211 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___41211,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___41211,onView,onModel,onTick,mspf){
return (function (state_41125){var state_val_41126 = (state_41125[(1)]);if((state_val_41126 === (7)))
{var inst_41120 = (state_41125[(2)]);var inst_41091 = inst_41120;var state_41125__$1 = (function (){var statearr_41127 = state_41125;(statearr_41127[(7)] = inst_41091);
return statearr_41127;
})();var statearr_41128_41212 = state_41125__$1;(statearr_41128_41212[(2)] = null);
(statearr_41128_41212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (1)))
{var inst_41082 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_41083 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_41084 = cljs.core.List.EMPTY;var inst_41085 = [inst_41084];var inst_41086 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_41083,inst_41085);var inst_41087 = [(0),(0)];var inst_41088 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_41087,null));var inst_41089 = [(0),inst_41086,inst_41088,onModel];var inst_41090 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_41082,inst_41089);var inst_41091 = inst_41090;var state_41125__$1 = (function (){var statearr_41129 = state_41125;(statearr_41129[(7)] = inst_41091);
return statearr_41129;
})();var statearr_41130_41213 = state_41125__$1;(statearr_41130_41213[(2)] = null);
(statearr_41130_41213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (4)))
{var inst_41099 = (state_41125[(8)]);var inst_41097 = (state_41125[(2)]);var inst_41098 = cljs.core.nth.call(null,inst_41097,(0),null);var inst_41099__$1 = cljs.core.nth.call(null,inst_41097,(1),null);var inst_41103 = cljs.core._EQ_.call(null,onTick,inst_41099__$1);var state_41125__$1 = (function (){var statearr_41131 = state_41125;(statearr_41131[(9)] = inst_41098);
(statearr_41131[(8)] = inst_41099__$1);
return statearr_41131;
})();if(inst_41103)
{var statearr_41132_41214 = state_41125__$1;(statearr_41132_41214[(1)] = (5));
} else
{var statearr_41133_41215 = state_41125__$1;(statearr_41133_41215[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (6)))
{var inst_41099 = (state_41125[(8)]);var inst_41111 = cljs.core._EQ_.call(null,onView,inst_41099);var state_41125__$1 = state_41125;if(inst_41111)
{var statearr_41134_41216 = state_41125__$1;(statearr_41134_41216[(1)] = (8));
} else
{var statearr_41135_41217 = state_41125__$1;(statearr_41135_41217[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (3)))
{var inst_41123 = (state_41125[(2)]);var state_41125__$1 = state_41125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41125__$1,inst_41123);
} else
{if((state_val_41126 === (2)))
{var inst_41094 = [onView,onTick];var inst_41095 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_41094,null));var state_41125__$1 = state_41125;return cljs.core.async.ioc_alts_BANG_.call(null,state_41125__$1,(4),inst_41095);
} else
{if((state_val_41126 === (9)))
{var inst_41091 = (state_41125[(7)]);var state_41125__$1 = state_41125;var statearr_41136_41218 = state_41125__$1;(statearr_41136_41218[(2)] = inst_41091);
(statearr_41136_41218[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (5)))
{var inst_41098 = (state_41125[(9)]);var inst_41091 = (state_41125[(7)]);var inst_41105 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_41106 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_41105,null));var inst_41107 = cljs.core.partial.call(null,tool.particle.update,inst_41098);var inst_41108 = cljs.core.update_in.call(null,inst_41091,inst_41106,inst_41107);var inst_41109 = app.particle.main.draw.call(null,inst_41108);var state_41125__$1 = state_41125;var statearr_41137_41219 = state_41125__$1;(statearr_41137_41219[(2)] = inst_41109);
(statearr_41137_41219[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (10)))
{var inst_41118 = (state_41125[(2)]);var state_41125__$1 = state_41125;var statearr_41138_41220 = state_41125__$1;(statearr_41138_41220[(2)] = inst_41118);
(statearr_41138_41220[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41126 === (8)))
{var inst_41098 = (state_41125[(9)]);var inst_41091 = (state_41125[(7)]);var inst_41113 = (inst_41098[(0)]);var inst_41114 = (inst_41098[(1)]);var inst_41115 = app.particle.abstract$.onViewCommand.call(null,inst_41113,inst_41114,inst_41091);var state_41125__$1 = state_41125;var statearr_41139_41221 = state_41125__$1;(statearr_41139_41221[(2)] = inst_41115);
(statearr_41139_41221[(1)] = (10));
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
});})(c__6202__auto___41211,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___41211,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_41143 = [null,null,null,null,null,null,null,null,null,null];(statearr_41143[(0)] = state_machine__6188__auto__);
(statearr_41143[(1)] = (1));
return statearr_41143;
});
var state_machine__6188__auto____1 = (function (state_41125){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_41125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e41144){if((e41144 instanceof Object))
{var ex__6191__auto__ = e41144;var statearr_41145_41222 = state_41125;(statearr_41145_41222[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41223 = state_41125;
state_41125 = G__41223;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_41125){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_41125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___41211,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_41146 = f__6203__auto__.call(null);(statearr_41146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___41211);
return statearr_41146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___41211,onView,onModel,onTick,mspf))
);
var c__6202__auto___41224 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___41224,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___41224,onView,onModel,onTick,mspf){
return (function (state_41187){var state_val_41188 = (state_41187[(1)]);if((state_val_41188 === (5)))
{var inst_41185 = (state_41187[(2)]);var state_41187__$1 = state_41187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41187__$1,inst_41185);
} else
{if((state_val_41188 === (4)))
{var inst_41159 = (state_41187[(2)]);var inst_41166 = [(0),(0),(0)];var inst_41167 = [(1),(0),(1),(1)];var inst_41168 = [(10),(20)];var inst_41169 = [(0),(0),3.14];var inst_41170 = {"position":inst_41166,"color":inst_41167,"size":inst_41168,"vel":inst_41169};var inst_41171 = [inst_41170];var inst_41172 = {"duration":0.05,"angle":(0),"force":(200),"range":(0),"prototype":inst_41171};var inst_41173 = [(0),(0),(1),(1)];var inst_41174 = [(30),(10)];var inst_41175 = [(10),(10),(0)];var inst_41176 = [(0),(0),(0)];var inst_41177 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_41178 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_41179 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_41180 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_41181 = [inst_41177,inst_41178,inst_41179,inst_41180];var inst_41182 = {"id":"x1","emit":inst_41172,"color":inst_41173,"size":inst_41174,"pos":inst_41175,"vel":inst_41176,"formulaList":inst_41181};var inst_41183 = ["edit-particle",inst_41182];var state_41187__$1 = (function (){var statearr_41189 = state_41187;(statearr_41189[(7)] = inst_41159);
return statearr_41189;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41187__$1,(5),onView,inst_41183);
} else
{if((state_val_41188 === (3)))
{var inst_41156 = (state_41187[(2)]);var inst_41157 = cljs.core.async.timeout.call(null,(1100));var state_41187__$1 = (function (){var statearr_41190 = state_41187;(statearr_41190[(8)] = inst_41156);
return statearr_41190;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41187__$1,(4),inst_41157);
} else
{if((state_val_41188 === (2)))
{var inst_41149 = (state_41187[(2)]);var inst_41152 = [(10),(10),(0)];var inst_41153 = {"id":"x1","pos":inst_41152};var inst_41154 = ["edit-particle",inst_41153];var state_41187__$1 = (function (){var statearr_41191 = state_41187;(statearr_41191[(9)] = inst_41149);
return statearr_41191;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41187__$1,(3),onView,inst_41154);
} else
{if((state_val_41188 === (1)))
{var inst_41147 = cljs.core.async.timeout.call(null,(1000));var state_41187__$1 = state_41187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41187__$1,(2),inst_41147);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___41224,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___41224,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_41195 = [null,null,null,null,null,null,null,null,null,null];(statearr_41195[(0)] = state_machine__6188__auto__);
(statearr_41195[(1)] = (1));
return statearr_41195;
});
var state_machine__6188__auto____1 = (function (state_41187){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_41187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e41196){if((e41196 instanceof Object))
{var ex__6191__auto__ = e41196;var statearr_41197_41225 = state_41187;(statearr_41197_41225[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41226 = state_41187;
state_41187 = G__41226;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_41187){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_41187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___41224,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_41198 = f__6203__auto__.call(null);(statearr_41198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___41224);
return statearr_41198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___41224,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
