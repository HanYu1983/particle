// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.draw');
goog.require('cljs.core.async');
app.particle.main.draw2D = app.particle.draw.draw2D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_29008){var state_val_29009 = (state_29008[(1)]);if((state_val_29009 === (2)))
{var inst_29006 = (state_29008[(2)]);var state_29008__$1 = state_29008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29008__$1,inst_29006);
} else
{if((state_val_29009 === (1)))
{var state_29008__$1 = state_29008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29008__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29013 = [null,null,null,null,null,null,null];(statearr_29013[(0)] = state_machine__6188__auto__);
(statearr_29013[(1)] = (1));
return statearr_29013;
});
var state_machine__6188__auto____1 = (function (state_29008){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29008);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29014){if((e29014 instanceof Object))
{var ex__6191__auto__ = e29014;var statearr_29015_29247 = state_29008;(statearr_29015_29247[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29248 = state_29008;
state_29008 = G__29248;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29008){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29016 = f__6203__auto__.call(null);(statearr_29016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_29016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___29249 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29249,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29249,onView,onModel,onTick,mspf){
return (function (state_29025){var state_val_29026 = (state_29025[(1)]);if((state_val_29026 === (4)))
{var inst_29019 = (state_29025[(2)]);var inst_29020 = common.onModel.onNext(inst_29019);var state_29025__$1 = (function (){var statearr_29027 = state_29025;(statearr_29027[(7)] = inst_29020);
return statearr_29027;
})();var statearr_29028_29250 = state_29025__$1;(statearr_29028_29250[(2)] = null);
(statearr_29028_29250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29026 === (3)))
{var inst_29023 = (state_29025[(2)]);var state_29025__$1 = state_29025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29025__$1,inst_29023);
} else
{if((state_val_29026 === (2)))
{var state_29025__$1 = state_29025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29025__$1,(4),onModel);
} else
{if((state_val_29026 === (1)))
{var state_29025__$1 = state_29025;var statearr_29029_29251 = state_29025__$1;(statearr_29029_29251[(2)] = null);
(statearr_29029_29251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___29249,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29249,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29033 = [null,null,null,null,null,null,null,null];(statearr_29033[(0)] = state_machine__6188__auto__);
(statearr_29033[(1)] = (1));
return statearr_29033;
});
var state_machine__6188__auto____1 = (function (state_29025){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29025);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29034){if((e29034 instanceof Object))
{var ex__6191__auto__ = e29034;var statearr_29035_29252 = state_29025;(statearr_29035_29252[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29253 = state_29025;
state_29025 = G__29253;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29025){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29249,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29036 = f__6203__auto__.call(null);(statearr_29036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29249);
return statearr_29036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29249,onView,onModel,onTick,mspf))
);
var c__6202__auto___29254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29254,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29254,onView,onModel,onTick,mspf){
return (function (state_29055){var state_val_29056 = (state_29055[(1)]);if((state_val_29056 === (5)))
{var inst_29046 = (state_29055[(7)]);var inst_29039 = (state_29055[(8)]);var inst_29050 = (state_29055[(2)]);var tmp29057 = inst_29039;var inst_29039__$1 = tmp29057;var inst_29040 = inst_29046;var state_29055__$1 = (function (){var statearr_29058 = state_29055;(statearr_29058[(8)] = inst_29039__$1);
(statearr_29058[(9)] = inst_29040);
(statearr_29058[(10)] = inst_29050);
return statearr_29058;
})();var statearr_29059_29255 = state_29055__$1;(statearr_29059_29255[(2)] = null);
(statearr_29059_29255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29056 === (4)))
{var inst_29046 = (state_29055[(7)]);var inst_29040 = (state_29055[(9)]);var inst_29044 = (state_29055[(2)]);var inst_29045 = (new Date());var inst_29046__$1 = inst_29045.getTime();var inst_29047 = (inst_29046__$1 - inst_29040);var inst_29048 = (inst_29047 / (1000));var state_29055__$1 = (function (){var statearr_29060 = state_29055;(statearr_29060[(7)] = inst_29046__$1);
(statearr_29060[(11)] = inst_29044);
return statearr_29060;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29055__$1,(5),onTick,inst_29048);
} else
{if((state_val_29056 === (3)))
{var inst_29053 = (state_29055[(2)]);var state_29055__$1 = state_29055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29055__$1,inst_29053);
} else
{if((state_val_29056 === (2)))
{var inst_29039 = (state_29055[(8)]);var inst_29042 = cljs.core.async.timeout.call(null,inst_29039);var state_29055__$1 = state_29055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29055__$1,(4),inst_29042);
} else
{if((state_val_29056 === (1)))
{var inst_29037 = (new Date());var inst_29038 = inst_29037.getTime();var inst_29039 = mspf;var inst_29040 = inst_29038;var state_29055__$1 = (function (){var statearr_29061 = state_29055;(statearr_29061[(8)] = inst_29039);
(statearr_29061[(9)] = inst_29040);
return statearr_29061;
})();var statearr_29062_29256 = state_29055__$1;(statearr_29062_29256[(2)] = null);
(statearr_29062_29256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___29254,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29254,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29066 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29066[(0)] = state_machine__6188__auto__);
(statearr_29066[(1)] = (1));
return statearr_29066;
});
var state_machine__6188__auto____1 = (function (state_29055){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29055);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29067){if((e29067 instanceof Object))
{var ex__6191__auto__ = e29067;var statearr_29068_29257 = state_29055;(statearr_29068_29257[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29055);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29258 = state_29055;
state_29055 = G__29258;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29055){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29254,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29069 = f__6203__auto__.call(null);(statearr_29069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29254);
return statearr_29069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29254,onView,onModel,onTick,mspf))
);
var c__6202__auto___29259 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29259,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29259,onView,onModel,onTick,mspf){
return (function (state_29103){var state_val_29104 = (state_29103[(1)]);if((state_val_29104 === (5)))
{var inst_29101 = (state_29103[(2)]);var state_29103__$1 = state_29103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else
{if((state_val_29104 === (4)))
{var inst_29082 = (state_29103[(2)]);var inst_29089 = [(0),(0),(0)];var inst_29090 = [(10),(20)];var inst_29091 = [(100),(0),3.14];var inst_29092 = {"position":inst_29089,"size":inst_29090,"vel":inst_29091};var inst_29093 = [inst_29092];var inst_29094 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_29093};var inst_29095 = [(30),(10)];var inst_29096 = [(300),(300),(0)];var inst_29097 = [(100),(100),(0)];var inst_29098 = {"id":"x1","emit":inst_29094,"size":inst_29095,"pos":inst_29096,"vel":inst_29097};var inst_29099 = ["edit-particle",inst_29098];var state_29103__$1 = (function (){var statearr_29105 = state_29103;(statearr_29105[(7)] = inst_29082);
return statearr_29105;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(5),onView,inst_29099);
} else
{if((state_val_29104 === (3)))
{var inst_29079 = (state_29103[(2)]);var inst_29080 = cljs.core.async.timeout.call(null,(1100));var state_29103__$1 = (function (){var statearr_29106 = state_29103;(statearr_29106[(8)] = inst_29079);
return statearr_29106;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),inst_29080);
} else
{if((state_val_29104 === (2)))
{var inst_29072 = (state_29103[(2)]);var inst_29075 = [(300),(300),(0)];var inst_29076 = {"id":"x1","pos":inst_29075};var inst_29077 = ["edit-particle",inst_29076];var state_29103__$1 = (function (){var statearr_29107 = state_29103;(statearr_29107[(9)] = inst_29072);
return statearr_29107;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(3),onView,inst_29077);
} else
{if((state_val_29104 === (1)))
{var inst_29070 = cljs.core.async.timeout.call(null,(1000));var state_29103__$1 = state_29103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(2),inst_29070);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___29259,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29259,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29111 = [null,null,null,null,null,null,null,null,null,null];(statearr_29111[(0)] = state_machine__6188__auto__);
(statearr_29111[(1)] = (1));
return statearr_29111;
});
var state_machine__6188__auto____1 = (function (state_29103){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29112){if((e29112 instanceof Object))
{var ex__6191__auto__ = e29112;var statearr_29113_29260 = state_29103;(statearr_29113_29260[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29261 = state_29103;
state_29103 = G__29261;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29259,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29114 = f__6203__auto__.call(null);(statearr_29114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29259);
return statearr_29114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29259,onView,onModel,onTick,mspf))
);
var c__6202__auto___29262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29262,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29262,onView,onModel,onTick,mspf){
return (function (state_29207){var state_val_29208 = (state_29207[(1)]);if((state_val_29208 === (7)))
{var inst_29202 = (state_29207[(2)]);var inst_29122 = inst_29202;var state_29207__$1 = (function (){var statearr_29209 = state_29207;(statearr_29209[(7)] = inst_29122);
return statearr_29209;
})();var statearr_29210_29263 = state_29207__$1;(statearr_29210_29263[(2)] = null);
(statearr_29210_29263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (20)))
{var inst_29122 = (state_29207[(7)]);var state_29207__$1 = state_29207;var statearr_29211_29264 = state_29207__$1;(statearr_29211_29264[(2)] = inst_29122);
(statearr_29211_29264[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (1)))
{var inst_29115 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_29116 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29117 = cljs.core.List.EMPTY;var inst_29118 = [inst_29117];var inst_29119 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29116,inst_29118);var inst_29120 = [(0),inst_29119];var inst_29121 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29115,inst_29120);var inst_29122 = inst_29121;var state_29207__$1 = (function (){var statearr_29212 = state_29207;(statearr_29212[(7)] = inst_29122);
return statearr_29212;
})();var statearr_29213_29265 = state_29207__$1;(statearr_29213_29265[(2)] = null);
(statearr_29213_29265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (4)))
{var inst_29130 = (state_29207[(8)]);var inst_29128 = (state_29207[(9)]);var inst_29128__$1 = (state_29207[(2)]);var inst_29129 = cljs.core.nth.call(null,inst_29128__$1,(0),null);var inst_29130__$1 = cljs.core.nth.call(null,inst_29128__$1,(1),null);var inst_29134 = cljs.core._EQ_.call(null,onTick,inst_29130__$1);var state_29207__$1 = (function (){var statearr_29214 = state_29207;(statearr_29214[(8)] = inst_29130__$1);
(statearr_29214[(9)] = inst_29128__$1);
(statearr_29214[(10)] = inst_29129);
return statearr_29214;
})();if(inst_29134)
{var statearr_29215_29266 = state_29207__$1;(statearr_29215_29266[(1)] = (5));
} else
{var statearr_29216_29267 = state_29207__$1;(statearr_29216_29267[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (15)))
{var inst_29122 = (state_29207[(7)]);var inst_29157 = (state_29207[(11)]);var inst_29174 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29175 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29174,null));var inst_29176 = cljs.core.update_in.call(null,inst_29122,inst_29175,cljs.core.conj,inst_29157);var state_29207__$1 = state_29207;var statearr_29217_29268 = state_29207__$1;(statearr_29217_29268[(2)] = inst_29176);
(statearr_29217_29268[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (21)))
{var inst_29130 = (state_29207[(8)]);var inst_29194 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29130));var inst_29195 = (new Error(inst_29194));var inst_29196 = (function(){throw inst_29195})();var state_29207__$1 = state_29207;var statearr_29218_29269 = state_29207__$1;(statearr_29218_29269[(2)] = inst_29196);
(statearr_29218_29269[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (13)))
{var inst_29189 = (state_29207[(2)]);var state_29207__$1 = state_29207;var statearr_29219_29270 = state_29207__$1;(statearr_29219_29270[(2)] = inst_29189);
(statearr_29219_29270[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (22)))
{var inst_29198 = (state_29207[(2)]);var state_29207__$1 = state_29207;var statearr_29220_29271 = state_29207__$1;(statearr_29220_29271[(2)] = inst_29198);
(statearr_29220_29271[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (6)))
{var inst_29130 = (state_29207[(8)]);var inst_29142 = cljs.core._EQ_.call(null,onView,inst_29130);var state_29207__$1 = state_29207;if(inst_29142)
{var statearr_29221_29272 = state_29207__$1;(statearr_29221_29272[(1)] = (8));
} else
{var statearr_29222_29273 = state_29207__$1;(statearr_29222_29273[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (17)))
{var inst_29122 = (state_29207[(7)]);var state_29207__$1 = state_29207;var statearr_29223_29274 = state_29207__$1;(statearr_29223_29274[(2)] = inst_29122);
(statearr_29223_29274[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (3)))
{var inst_29205 = (state_29207[(2)]);var state_29207__$1 = state_29207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29207__$1,inst_29205);
} else
{if((state_val_29208 === (12)))
{var inst_29144 = (state_29207[(12)]);var inst_29180 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_29144);var state_29207__$1 = state_29207;if(inst_29180)
{var statearr_29224_29275 = state_29207__$1;(statearr_29224_29275[(1)] = (17));
} else
{var statearr_29225_29276 = state_29207__$1;(statearr_29225_29276[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (2)))
{var inst_29125 = [onView,onTick];var inst_29126 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29125,null));var state_29207__$1 = state_29207;return cljs.core.async.ioc_alts_BANG_.call(null,state_29207__$1,(4),inst_29126);
} else
{if((state_val_29208 === (19)))
{var inst_29187 = (state_29207[(2)]);var state_29207__$1 = state_29207;var statearr_29226_29277 = state_29207__$1;(statearr_29226_29277[(2)] = inst_29187);
(statearr_29226_29277[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (11)))
{var inst_29130 = (state_29207[(8)]);var inst_29128 = (state_29207[(9)]);var inst_29156 = (state_29207[(13)]);var inst_29122 = (state_29207[(7)]);var inst_29129 = (state_29207[(10)]);var inst_29145 = (state_29207[(14)]);var inst_29144 = (state_29207[(12)]);var inst_29151 = (function (){var pred__29146 = cljs.core._EQ_;var ctx = inst_29122;var vec__29124 = inst_29128;var partInfo = inst_29145;var pred__29131 = cljs.core._EQ_;var v = inst_29129;var expr__29147 = inst_29144;var params = inst_29145;var ch = inst_29130;var event = inst_29144;var expr__29132 = inst_29130;return ((function (pred__29146,ctx,vec__29124,partInfo,pred__29131,v,expr__29147,params,ch,event,expr__29132,inst_29130,inst_29128,inst_29156,inst_29122,inst_29129,inst_29145,inst_29144,state_val_29208,c__6202__auto___29262,onView,onModel,onTick,mspf){
return (function (p1__28762_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28762_SHARP_),partInfo.id);
});
;})(pred__29146,ctx,vec__29124,partInfo,pred__29131,v,expr__29147,params,ch,event,expr__29132,inst_29130,inst_29128,inst_29156,inst_29122,inst_29129,inst_29145,inst_29144,state_val_29208,c__6202__auto___29262,onView,onModel,onTick,mspf))
})();var inst_29152 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29153 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29152,null));var inst_29154 = cljs.core.get_in.call(null,inst_29122,inst_29153);var inst_29155 = cljs.core.filter.call(null,inst_29151,inst_29154);var inst_29156__$1 = cljs.core.first.call(null,inst_29155);var inst_29157 = tool.particle.jsobj__GT_particle.call(null,inst_29145);var inst_29158 = cljs.core.some_QMARK_.call(null,inst_29156__$1);var state_29207__$1 = (function (){var statearr_29227 = state_29207;(statearr_29227[(13)] = inst_29156__$1);
(statearr_29227[(11)] = inst_29157);
return statearr_29227;
})();if(inst_29158)
{var statearr_29228_29278 = state_29207__$1;(statearr_29228_29278[(1)] = (14));
} else
{var statearr_29229_29279 = state_29207__$1;(statearr_29229_29279[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (9)))
{var inst_29130 = (state_29207[(8)]);var inst_29191 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_29130);var state_29207__$1 = state_29207;if(inst_29191)
{var statearr_29230_29280 = state_29207__$1;(statearr_29230_29280[(1)] = (20));
} else
{var statearr_29231_29281 = state_29207__$1;(statearr_29231_29281[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (5)))
{var inst_29122 = (state_29207[(7)]);var inst_29129 = (state_29207[(10)]);var inst_29136 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_29137 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29136,null));var inst_29138 = cljs.core.partial.call(null,tool.particle.update,inst_29129);var inst_29139 = cljs.core.update_in.call(null,inst_29122,inst_29137,inst_29138);var inst_29140 = app.particle.main.draw2D.call(null,inst_29139);var state_29207__$1 = state_29207;var statearr_29232_29282 = state_29207__$1;(statearr_29232_29282[(2)] = inst_29140);
(statearr_29232_29282[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (14)))
{var inst_29156 = (state_29207[(13)]);var inst_29122 = (state_29207[(7)]);var inst_29157 = (state_29207[(11)]);var inst_29160 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29161 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29160,null));var inst_29162 = [inst_29156];var inst_29163 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_29164 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_29156);var inst_29165 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_29156);var inst_29166 = [inst_29164,inst_29165];var inst_29167 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29163,inst_29166);var inst_29168 = cljs.core.merge.call(null,inst_29157,inst_29167);var inst_29169 = [inst_29168];var inst_29170 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29162,inst_29169);var inst_29171 = cljs.core.partial.call(null,cljs.core.replace,inst_29170);var inst_29172 = cljs.core.update_in.call(null,inst_29122,inst_29161,inst_29171);var state_29207__$1 = state_29207;var statearr_29233_29283 = state_29207__$1;(statearr_29233_29283[(2)] = inst_29172);
(statearr_29233_29283[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (16)))
{var inst_29178 = (state_29207[(2)]);var state_29207__$1 = state_29207;var statearr_29234_29284 = state_29207__$1;(statearr_29234_29284[(2)] = inst_29178);
(statearr_29234_29284[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (10)))
{var inst_29200 = (state_29207[(2)]);var state_29207__$1 = state_29207;var statearr_29235_29285 = state_29207__$1;(statearr_29235_29285[(2)] = inst_29200);
(statearr_29235_29285[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (18)))
{var inst_29144 = (state_29207[(12)]);var inst_29183 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29144));var inst_29184 = (new Error(inst_29183));var inst_29185 = (function(){throw inst_29184})();var state_29207__$1 = state_29207;var statearr_29236_29286 = state_29207__$1;(statearr_29236_29286[(2)] = inst_29185);
(statearr_29236_29286[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29208 === (8)))
{var inst_29129 = (state_29207[(10)]);var inst_29144 = (state_29207[(12)]);var inst_29144__$1 = (inst_29129[(0)]);var inst_29145 = (inst_29129[(1)]);var inst_29149 = cljs.core._EQ_.call(null,"edit-particle",inst_29144__$1);var state_29207__$1 = (function (){var statearr_29237 = state_29207;(statearr_29237[(14)] = inst_29145);
(statearr_29237[(12)] = inst_29144__$1);
return statearr_29237;
})();if(inst_29149)
{var statearr_29238_29287 = state_29207__$1;(statearr_29238_29287[(1)] = (11));
} else
{var statearr_29239_29288 = state_29207__$1;(statearr_29239_29288[(1)] = (12));
}
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
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___29262,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29262,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29243[(0)] = state_machine__6188__auto__);
(statearr_29243[(1)] = (1));
return statearr_29243;
});
var state_machine__6188__auto____1 = (function (state_29207){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29207);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29244){if((e29244 instanceof Object))
{var ex__6191__auto__ = e29244;var statearr_29245_29289 = state_29207;(statearr_29245_29289[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29290 = state_29207;
state_29207 = G__29290;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29207){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29262,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29246 = f__6203__auto__.call(null);(statearr_29246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29262);
return statearr_29246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29262,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
