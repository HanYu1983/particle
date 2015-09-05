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
return (function (state_85045){var state_val_85046 = (state_85045[(1)]);if((state_val_85046 === (5)))
{var inst_85043 = (state_85045[(2)]);var state_85045__$1 = state_85045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85045__$1,inst_85043);
} else
{if((state_val_85046 === (4)))
{var inst_85013 = (state_85045[(2)]);var inst_85020 = [(0),(0),(0)];var inst_85021 = [(1),(0),(1),(1)];var inst_85022 = [(10),(20)];var inst_85023 = [(0),(0),(0)];var inst_85024 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_85025 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_85026 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_85027 = [inst_85024,inst_85025,inst_85026];var inst_85028 = {"position":inst_85020,"color":inst_85021,"size":inst_85022,"vel":inst_85023,"tex":"img_map","formulaList":inst_85027};var inst_85029 = [inst_85028];var inst_85030 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_85029};var inst_85031 = [(0),(0),(1),(1)];var inst_85032 = [(30),(10)];var inst_85033 = [(10),(10),(0)];var inst_85034 = [(0),(0),(0)];var inst_85035 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_85036 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_85037 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_85038 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_85039 = [inst_85035,inst_85036,inst_85037,inst_85038];var inst_85040 = {"id":"x1","emit":inst_85030,"color":inst_85031,"size":inst_85032,"pos":inst_85033,"vel":inst_85034,"tex":"img_face","formulaList":inst_85039};var inst_85041 = ["edit-particle",inst_85040];var state_85045__$1 = (function (){var statearr_85047 = state_85045;(statearr_85047[(7)] = inst_85013);
return statearr_85047;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85045__$1,(5),onView,inst_85041);
} else
{if((state_val_85046 === (3)))
{var inst_85010 = (state_85045[(2)]);var inst_85011 = cljs.core.async.timeout.call(null,(1100));var state_85045__$1 = (function (){var statearr_85048 = state_85045;(statearr_85048[(8)] = inst_85010);
return statearr_85048;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85045__$1,(4),inst_85011);
} else
{if((state_val_85046 === (2)))
{var inst_85003 = (state_85045[(2)]);var inst_85006 = [(10),(10),(0)];var inst_85007 = {"id":"x1","pos":inst_85006};var inst_85008 = ["edit-particle",inst_85007];var state_85045__$1 = (function (){var statearr_85049 = state_85045;(statearr_85049[(9)] = inst_85003);
return statearr_85049;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85045__$1,(3),onView,inst_85008);
} else
{if((state_val_85046 === (1)))
{var inst_85001 = cljs.core.async.timeout.call(null,(1000));var state_85045__$1 = state_85045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85045__$1,(2),inst_85001);
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
var state_machine__6188__auto____0 = (function (){var statearr_85053 = [null,null,null,null,null,null,null,null,null,null];(statearr_85053[(0)] = state_machine__6188__auto__);
(statearr_85053[(1)] = (1));
return statearr_85053;
});
var state_machine__6188__auto____1 = (function (state_85045){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85045);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85054){if((e85054 instanceof Object))
{var ex__6191__auto__ = e85054;var statearr_85055_85057 = state_85045;(statearr_85055_85057[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85058 = state_85045;
state_85045 = G__85058;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85045){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85056 = f__6203__auto__.call(null);(statearr_85056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj85239 = {};return obj85239;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85243){var state_val_85244 = (state_85243[(1)]);if((state_val_85244 === (2)))
{var inst_85241 = (state_85243[(2)]);var state_85243__$1 = state_85243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85243__$1,inst_85241);
} else
{if((state_val_85244 === (1)))
{var state_85243__$1 = state_85243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85243__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85248 = [null,null,null,null,null,null,null];(statearr_85248[(0)] = state_machine__6188__auto__);
(statearr_85248[(1)] = (1));
return statearr_85248;
});
var state_machine__6188__auto____1 = (function (state_85243){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85243);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85249){if((e85249 instanceof Object))
{var ex__6191__auto__ = e85249;var statearr_85250_85417 = state_85243;(statearr_85250_85417[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85418 = state_85243;
state_85243 = G__85418;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85243){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85251 = f__6203__auto__.call(null);(statearr_85251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85419 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85419,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85419,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85265){var state_val_85266 = (state_85265[(1)]);if((state_val_85266 === (4)))
{var inst_85255 = (state_85265[(2)]);var inst_85256 = cljs.core.nth.call(null,inst_85255,(0),null);var inst_85257 = cljs.core.nth.call(null,inst_85255,(1),null);var inst_85258 = cljs.core.nth.call(null,inst_85255,(2),null);var inst_85259 = [inst_85256,inst_85257,inst_85258];var inst_85260 = common.onModel.onNext(inst_85259);var state_85265__$1 = (function (){var statearr_85267 = state_85265;(statearr_85267[(7)] = inst_85260);
return statearr_85267;
})();var statearr_85268_85420 = state_85265__$1;(statearr_85268_85420[(2)] = null);
(statearr_85268_85420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85266 === (3)))
{var inst_85263 = (state_85265[(2)]);var state_85265__$1 = state_85265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85265__$1,inst_85263);
} else
{if((state_val_85266 === (2)))
{var state_85265__$1 = state_85265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85265__$1,(4),onModel);
} else
{if((state_val_85266 === (1)))
{var state_85265__$1 = state_85265;var statearr_85269_85421 = state_85265__$1;(statearr_85269_85421[(2)] = null);
(statearr_85269_85421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___85419,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85419,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85273 = [null,null,null,null,null,null,null,null];(statearr_85273[(0)] = state_machine__6188__auto__);
(statearr_85273[(1)] = (1));
return statearr_85273;
});
var state_machine__6188__auto____1 = (function (state_85265){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85265);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85274){if((e85274 instanceof Object))
{var ex__6191__auto__ = e85274;var statearr_85275_85422 = state_85265;(statearr_85275_85422[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85423 = state_85265;
state_85265 = G__85423;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85265){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85419,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85276 = f__6203__auto__.call(null);(statearr_85276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85419);
return statearr_85276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85419,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85424 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85424,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85424,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85289){var state_val_85290 = (state_85289[(1)]);if((state_val_85290 === (4)))
{var inst_85280 = (state_85289[(2)]);var inst_85281 = cljs.core.nth.call(null,inst_85280,(0),null);var inst_85282 = cljs.core.nth.call(null,inst_85280,(1),null);var inst_85283 = [inst_85281,inst_85282];var inst_85284 = common.onModelEvent.onNext(inst_85283);var state_85289__$1 = (function (){var statearr_85291 = state_85289;(statearr_85291[(7)] = inst_85284);
return statearr_85291;
})();var statearr_85292_85425 = state_85289__$1;(statearr_85292_85425[(2)] = null);
(statearr_85292_85425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85290 === (3)))
{var inst_85287 = (state_85289[(2)]);var state_85289__$1 = state_85289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85289__$1,inst_85287);
} else
{if((state_val_85290 === (2)))
{var state_85289__$1 = state_85289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85289__$1,(4),onModelEvent);
} else
{if((state_val_85290 === (1)))
{var state_85289__$1 = state_85289;var statearr_85293_85426 = state_85289__$1;(statearr_85293_85426[(2)] = null);
(statearr_85293_85426[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___85424,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85424,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85297 = [null,null,null,null,null,null,null,null];(statearr_85297[(0)] = state_machine__6188__auto__);
(statearr_85297[(1)] = (1));
return statearr_85297;
});
var state_machine__6188__auto____1 = (function (state_85289){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85289);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85298){if((e85298 instanceof Object))
{var ex__6191__auto__ = e85298;var statearr_85299_85427 = state_85289;(statearr_85299_85427[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85428 = state_85289;
state_85289 = G__85428;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85289){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85424,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85300 = f__6203__auto__.call(null);(statearr_85300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85424);
return statearr_85300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85424,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85429,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85429,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85319){var state_val_85320 = (state_85319[(1)]);if((state_val_85320 === (5)))
{var inst_85310 = (state_85319[(7)]);var inst_85303 = (state_85319[(8)]);var inst_85314 = (state_85319[(2)]);var tmp85321 = inst_85303;var inst_85303__$1 = tmp85321;var inst_85304 = inst_85310;var state_85319__$1 = (function (){var statearr_85322 = state_85319;(statearr_85322[(9)] = inst_85314);
(statearr_85322[(8)] = inst_85303__$1);
(statearr_85322[(10)] = inst_85304);
return statearr_85322;
})();var statearr_85323_85430 = state_85319__$1;(statearr_85323_85430[(2)] = null);
(statearr_85323_85430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85320 === (4)))
{var inst_85310 = (state_85319[(7)]);var inst_85304 = (state_85319[(10)]);var inst_85308 = (state_85319[(2)]);var inst_85309 = (new Date());var inst_85310__$1 = inst_85309.getTime();var inst_85311 = (inst_85310__$1 - inst_85304);var inst_85312 = (inst_85311 / (1000));var state_85319__$1 = (function (){var statearr_85324 = state_85319;(statearr_85324[(7)] = inst_85310__$1);
(statearr_85324[(11)] = inst_85308);
return statearr_85324;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85319__$1,(5),onTick,inst_85312);
} else
{if((state_val_85320 === (3)))
{var inst_85317 = (state_85319[(2)]);var state_85319__$1 = state_85319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85319__$1,inst_85317);
} else
{if((state_val_85320 === (2)))
{var inst_85303 = (state_85319[(8)]);var inst_85306 = cljs.core.async.timeout.call(null,inst_85303);var state_85319__$1 = state_85319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85319__$1,(4),inst_85306);
} else
{if((state_val_85320 === (1)))
{var inst_85301 = (new Date());var inst_85302 = inst_85301.getTime();var inst_85303 = mspf;var inst_85304 = inst_85302;var state_85319__$1 = (function (){var statearr_85325 = state_85319;(statearr_85325[(8)] = inst_85303);
(statearr_85325[(10)] = inst_85304);
return statearr_85325;
})();var statearr_85326_85431 = state_85319__$1;(statearr_85326_85431[(2)] = null);
(statearr_85326_85431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___85429,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85429,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85330 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_85330[(0)] = state_machine__6188__auto__);
(statearr_85330[(1)] = (1));
return statearr_85330;
});
var state_machine__6188__auto____1 = (function (state_85319){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85331){if((e85331 instanceof Object))
{var ex__6191__auto__ = e85331;var statearr_85332_85432 = state_85319;(statearr_85332_85432[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85433 = state_85319;
state_85319 = G__85433;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85319){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85429,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85333 = f__6203__auto__.call(null);(statearr_85333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85429);
return statearr_85333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85429,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85434 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85387){var state_val_85388 = (state_85387[(1)]);if((state_val_85388 === (7)))
{var inst_85382 = (state_85387[(2)]);var inst_85343 = inst_85382;var state_85387__$1 = (function (){var statearr_85389 = state_85387;(statearr_85389[(7)] = inst_85343);
return statearr_85389;
})();var statearr_85390_85435 = state_85387__$1;(statearr_85390_85435[(2)] = null);
(statearr_85390_85435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (1)))
{var inst_85334 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_85335 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_85336 = cljs.core.List.EMPTY;var inst_85337 = [inst_85336];var inst_85338 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_85335,inst_85337);var inst_85339 = [(0),(0)];var inst_85340 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85339,null));var inst_85341 = [(0),inst_85338,inst_85340,onModel,gl__$1];var inst_85342 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_85334,inst_85341);var inst_85343 = inst_85342;var state_85387__$1 = (function (){var statearr_85391 = state_85387;(statearr_85391[(7)] = inst_85343);
return statearr_85391;
})();var statearr_85392_85436 = state_85387__$1;(statearr_85392_85436[(2)] = null);
(statearr_85392_85436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (4)))
{var inst_85349 = (state_85387[(8)]);var inst_85351 = (state_85387[(9)]);var inst_85349__$1 = (state_85387[(2)]);var inst_85350 = cljs.core.nth.call(null,inst_85349__$1,(0),null);var inst_85351__$1 = cljs.core.nth.call(null,inst_85349__$1,(1),null);var inst_85355 = cljs.core._EQ_.call(null,onTick,inst_85351__$1);var state_85387__$1 = (function (){var statearr_85393 = state_85387;(statearr_85393[(8)] = inst_85349__$1);
(statearr_85393[(10)] = inst_85350);
(statearr_85393[(9)] = inst_85351__$1);
return statearr_85393;
})();if(inst_85355)
{var statearr_85394_85437 = state_85387__$1;(statearr_85394_85437[(1)] = (5));
} else
{var statearr_85395_85438 = state_85387__$1;(statearr_85395_85438[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (6)))
{var inst_85351 = (state_85387[(9)]);var inst_85373 = cljs.core._EQ_.call(null,onView,inst_85351);var state_85387__$1 = state_85387;if(inst_85373)
{var statearr_85396_85439 = state_85387__$1;(statearr_85396_85439[(1)] = (8));
} else
{var statearr_85397_85440 = state_85387__$1;(statearr_85397_85440[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (3)))
{var inst_85385 = (state_85387[(2)]);var state_85387__$1 = state_85387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85387__$1,inst_85385);
} else
{if((state_val_85388 === (2)))
{var inst_85346 = [onView,onTick];var inst_85347 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85346,null));var state_85387__$1 = state_85387;return cljs.core.async.ioc_alts_BANG_.call(null,state_85387__$1,(4),inst_85347);
} else
{if((state_val_85388 === (9)))
{var inst_85343 = (state_85387[(7)]);var state_85387__$1 = state_85387;var statearr_85398_85441 = state_85387__$1;(statearr_85398_85441[(2)] = inst_85343);
(statearr_85398_85441[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (5)))
{var inst_85349 = (state_85387[(8)]);var inst_85343 = (state_85387[(7)]);var inst_85350 = (state_85387[(10)]);var inst_85351 = (state_85387[(9)]);var inst_85364 = cljs.core.async.chan.call(null,(1));var inst_85365 = (function (){var c__6202__auto____$1 = inst_85364;var expr__85353 = inst_85351;var pred__85352 = cljs.core._EQ_;var ch = inst_85351;var v = inst_85350;var vec__85345 = inst_85349;var ctx = inst_85343;return ((function (c__6202__auto____$1,expr__85353,pred__85352,ch,v,vec__85345,ctx,inst_85349,inst_85343,inst_85350,inst_85351,inst_85364,state_val_85388,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__85353,pred__85352,ch,v,vec__85345,ctx,inst_85349,inst_85343,inst_85350,inst_85351,inst_85364,state_val_85388,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85362){var state_val_85363 = (state_85362[(1)]);if((state_val_85363 === (2)))
{var inst_85360 = (state_85362[(2)]);var state_85362__$1 = state_85362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85362__$1,inst_85360);
} else
{if((state_val_85363 === (1)))
{var inst_85357 = ["tick",v];var inst_85358 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85357,null));var state_85362__$1 = state_85362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85362__$1,(2),onModelEvent,inst_85358);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__85353,pred__85352,ch,v,vec__85345,ctx,inst_85349,inst_85343,inst_85350,inst_85351,inst_85364,state_val_85388,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__85353,pred__85352,ch,v,vec__85345,ctx,inst_85349,inst_85343,inst_85350,inst_85351,inst_85364,state_val_85388,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85402 = [null,null,null,null,null,null,null];(statearr_85402[(0)] = state_machine__6188__auto__);
(statearr_85402[(1)] = (1));
return statearr_85402;
});
var state_machine__6188__auto____1 = (function (state_85362){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85362);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85403){if((e85403 instanceof Object))
{var ex__6191__auto__ = e85403;var statearr_85404_85442 = state_85362;(statearr_85404_85442[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85443 = state_85362;
state_85362 = G__85443;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85362){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__85353,pred__85352,ch,v,vec__85345,ctx,inst_85349,inst_85343,inst_85350,inst_85351,inst_85364,state_val_85388,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85405 = f__6203__auto__.call(null);(statearr_85405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_85405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__85353,pred__85352,ch,v,vec__85345,ctx,inst_85349,inst_85343,inst_85350,inst_85351,inst_85364,state_val_85388,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_85366 = cljs.core.async.impl.dispatch.run.call(null,inst_85365);var inst_85367 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_85368 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85367,null));var inst_85369 = cljs.core.partial.call(null,tool.particle.update,inst_85350);var inst_85370 = cljs.core.update_in.call(null,inst_85343,inst_85368,inst_85369);var inst_85371 = draw.call(null,inst_85370);var state_85387__$1 = (function (){var statearr_85406 = state_85387;(statearr_85406[(11)] = inst_85366);
return statearr_85406;
})();var statearr_85407_85444 = state_85387__$1;(statearr_85407_85444[(2)] = inst_85371);
(statearr_85407_85444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (10)))
{var inst_85380 = (state_85387[(2)]);var state_85387__$1 = state_85387;var statearr_85408_85445 = state_85387__$1;(statearr_85408_85445[(2)] = inst_85380);
(statearr_85408_85445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85388 === (8)))
{var inst_85343 = (state_85387[(7)]);var inst_85350 = (state_85387[(10)]);var inst_85375 = (inst_85350[(0)]);var inst_85376 = (inst_85350[(1)]);var inst_85377 = app.particle.abstract$.onViewCommand.call(null,inst_85375,inst_85376,inst_85343);var state_85387__$1 = state_85387;var statearr_85409_85446 = state_85387__$1;(statearr_85409_85446[(2)] = inst_85377);
(statearr_85409_85446[(1)] = (10));
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
});})(c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85413 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_85413[(0)] = state_machine__6188__auto__);
(statearr_85413[(1)] = (1));
return statearr_85413;
});
var state_machine__6188__auto____1 = (function (state_85387){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85414){if((e85414 instanceof Object))
{var ex__6191__auto__ = e85414;var statearr_85415_85447 = state_85387;(statearr_85415_85447[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85448 = state_85387;
state_85387 = G__85448;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85387){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85416 = f__6203__auto__.call(null);(statearr_85416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85434);
return statearr_85416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85434,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
