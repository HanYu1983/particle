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
app.particle.main.demo = (function demo(onView){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_10981){var state_val_10982 = (state_10981[(1)]);if((state_val_10982 === (5)))
{var inst_10979 = (state_10981[(2)]);var state_10981__$1 = state_10981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10981__$1,inst_10979);
} else
{if((state_val_10982 === (4)))
{var inst_10949 = (state_10981[(2)]);var inst_10956 = [(0),(0),(0)];var inst_10957 = [(1),(0),(1),(1)];var inst_10958 = [(10),(20)];var inst_10959 = [(0),(0),(0)];var inst_10960 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_10961 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_10962 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_10963 = [inst_10960,inst_10961,inst_10962];var inst_10964 = {"position":inst_10956,"color":inst_10957,"size":inst_10958,"vel":inst_10959,"tex":"img_face","formulaList":inst_10963};var inst_10965 = [inst_10964];var inst_10966 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_10965};var inst_10967 = [(0),(0),(1),(1)];var inst_10968 = [(100),(100)];var inst_10969 = [(10),(10),(0)];var inst_10970 = [(0),(0),(0)];var inst_10971 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_10972 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_10973 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_10974 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_10975 = [inst_10971,inst_10972,inst_10973,inst_10974];var inst_10976 = {"id":"x1","emit":inst_10966,"color":inst_10967,"size":inst_10968,"pos":inst_10969,"vel":inst_10970,"tex":"img_face","formulaList":inst_10975};var inst_10977 = ["edit-particle",inst_10976];var state_10981__$1 = (function (){var statearr_10983 = state_10981;(statearr_10983[(7)] = inst_10949);
return statearr_10983;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10981__$1,(5),onView,inst_10977);
} else
{if((state_val_10982 === (3)))
{var inst_10946 = (state_10981[(2)]);var inst_10947 = cljs.core.async.timeout.call(null,(1100));var state_10981__$1 = (function (){var statearr_10984 = state_10981;(statearr_10984[(8)] = inst_10946);
return statearr_10984;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10981__$1,(4),inst_10947);
} else
{if((state_val_10982 === (2)))
{var inst_10939 = (state_10981[(2)]);var inst_10942 = [(10),(10),(0)];var inst_10943 = {"id":"x1","pos":inst_10942};var inst_10944 = ["edit-particle",inst_10943];var state_10981__$1 = (function (){var statearr_10985 = state_10981;(statearr_10985[(9)] = inst_10939);
return statearr_10985;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10981__$1,(3),onView,inst_10944);
} else
{if((state_val_10982 === (1)))
{var inst_10937 = cljs.core.async.timeout.call(null,(1000));var state_10981__$1 = state_10981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10981__$1,(2),inst_10937);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10989 = [null,null,null,null,null,null,null,null,null,null];(statearr_10989[(0)] = state_machine__6189__auto__);
(statearr_10989[(1)] = (1));
return statearr_10989;
});
var state_machine__6189__auto____1 = (function (state_10981){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10990){if((e10990 instanceof Object))
{var ex__6192__auto__ = e10990;var statearr_10991_10993 = state_10981;(statearr_10991_10993[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10994 = state_10981;
state_10981 = G__10994;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10981){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10992 = f__6204__auto__.call(null);(statearr_10992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var fps = (30);var mspf = (((1000) / fps) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_11187){var state_val_11188 = (state_11187[(1)]);if((state_val_11188 === (2)))
{var inst_11185 = (state_11187[(2)]);var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11187__$1,inst_11185);
} else
{if((state_val_11188 === (1)))
{var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11187__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11192 = [null,null,null,null,null,null,null];(statearr_11192[(0)] = state_machine__6189__auto__);
(statearr_11192[(1)] = (1));
return statearr_11192;
});
var state_machine__6189__auto____1 = (function (state_11187){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11187);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11193){if((e11193 instanceof Object))
{var ex__6192__auto__ = e11193;var statearr_11194_11373 = state_11187;(statearr_11194_11373[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11374 = state_11187;
state_11187 = G__11374;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6205__auto__ = (function (){var statearr_11195 = f__6204__auto__.call(null);(statearr_11195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return c__6203__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6203__auto___11375 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11375,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11375,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_11209){var state_val_11210 = (state_11209[(1)]);if((state_val_11210 === (4)))
{var inst_11199 = (state_11209[(2)]);var inst_11200 = cljs.core.nth.call(null,inst_11199,(0),null);var inst_11201 = cljs.core.nth.call(null,inst_11199,(1),null);var inst_11202 = cljs.core.nth.call(null,inst_11199,(2),null);var inst_11203 = [inst_11200,inst_11201,inst_11202];var inst_11204 = common.onModel.onNext(inst_11203);var state_11209__$1 = (function (){var statearr_11211 = state_11209;(statearr_11211[(7)] = inst_11204);
return statearr_11211;
})();var statearr_11212_11376 = state_11209__$1;(statearr_11212_11376[(2)] = null);
(statearr_11212_11376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11210 === (3)))
{var inst_11207 = (state_11209[(2)]);var state_11209__$1 = state_11209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11209__$1,inst_11207);
} else
{if((state_val_11210 === (2)))
{var state_11209__$1 = state_11209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11209__$1,(4),onModel);
} else
{if((state_val_11210 === (1)))
{var state_11209__$1 = state_11209;var statearr_11213_11377 = state_11209__$1;(statearr_11213_11377[(2)] = null);
(statearr_11213_11377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___11375,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___11375,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11217 = [null,null,null,null,null,null,null,null];(statearr_11217[(0)] = state_machine__6189__auto__);
(statearr_11217[(1)] = (1));
return statearr_11217;
});
var state_machine__6189__auto____1 = (function (state_11209){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11209);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11218){if((e11218 instanceof Object))
{var ex__6192__auto__ = e11218;var statearr_11219_11378 = state_11209;(statearr_11219_11378[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11379 = state_11209;
state_11209 = G__11379;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11209){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11375,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6205__auto__ = (function (){var statearr_11220 = f__6204__auto__.call(null);(statearr_11220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11375);
return statearr_11220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11375,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6203__auto___11380 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11380,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11380,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_11233){var state_val_11234 = (state_11233[(1)]);if((state_val_11234 === (4)))
{var inst_11224 = (state_11233[(2)]);var inst_11225 = cljs.core.nth.call(null,inst_11224,(0),null);var inst_11226 = cljs.core.nth.call(null,inst_11224,(1),null);var inst_11227 = [inst_11225,inst_11226];var inst_11228 = common.onModelEvent.onNext(inst_11227);var state_11233__$1 = (function (){var statearr_11235 = state_11233;(statearr_11235[(7)] = inst_11228);
return statearr_11235;
})();var statearr_11236_11381 = state_11233__$1;(statearr_11236_11381[(2)] = null);
(statearr_11236_11381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11234 === (3)))
{var inst_11231 = (state_11233[(2)]);var state_11233__$1 = state_11233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11233__$1,inst_11231);
} else
{if((state_val_11234 === (2)))
{var state_11233__$1 = state_11233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11233__$1,(4),onModelEvent);
} else
{if((state_val_11234 === (1)))
{var state_11233__$1 = state_11233;var statearr_11237_11382 = state_11233__$1;(statearr_11237_11382[(2)] = null);
(statearr_11237_11382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___11380,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___11380,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11241 = [null,null,null,null,null,null,null,null];(statearr_11241[(0)] = state_machine__6189__auto__);
(statearr_11241[(1)] = (1));
return statearr_11241;
});
var state_machine__6189__auto____1 = (function (state_11233){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11233);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11242){if((e11242 instanceof Object))
{var ex__6192__auto__ = e11242;var statearr_11243_11383 = state_11233;(statearr_11243_11383[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11384 = state_11233;
state_11233 = G__11384;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11233){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11380,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6205__auto__ = (function (){var statearr_11244 = f__6204__auto__.call(null);(statearr_11244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11380);
return statearr_11244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11380,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6203__auto___11385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11385,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11385,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_11263){var state_val_11264 = (state_11263[(1)]);if((state_val_11264 === (5)))
{var inst_11247 = (state_11263[(7)]);var inst_11254 = (state_11263[(8)]);var inst_11258 = (state_11263[(2)]);var tmp11265 = inst_11247;var inst_11247__$1 = tmp11265;var inst_11248 = inst_11254;var state_11263__$1 = (function (){var statearr_11266 = state_11263;(statearr_11266[(7)] = inst_11247__$1);
(statearr_11266[(9)] = inst_11258);
(statearr_11266[(10)] = inst_11248);
return statearr_11266;
})();var statearr_11267_11386 = state_11263__$1;(statearr_11267_11386[(2)] = null);
(statearr_11267_11386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11264 === (4)))
{var inst_11248 = (state_11263[(10)]);var inst_11254 = (state_11263[(8)]);var inst_11252 = (state_11263[(2)]);var inst_11253 = (new Date());var inst_11254__$1 = inst_11253.getTime();var inst_11255 = (inst_11254__$1 - inst_11248);var inst_11256 = (inst_11255 / (1000));var state_11263__$1 = (function (){var statearr_11268 = state_11263;(statearr_11268[(11)] = inst_11252);
(statearr_11268[(8)] = inst_11254__$1);
return statearr_11268;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11263__$1,(5),onTick,inst_11256);
} else
{if((state_val_11264 === (3)))
{var inst_11261 = (state_11263[(2)]);var state_11263__$1 = state_11263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11263__$1,inst_11261);
} else
{if((state_val_11264 === (2)))
{var inst_11247 = (state_11263[(7)]);var inst_11250 = cljs.core.async.timeout.call(null,inst_11247);var state_11263__$1 = state_11263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11263__$1,(4),inst_11250);
} else
{if((state_val_11264 === (1)))
{var inst_11245 = (new Date());var inst_11246 = inst_11245.getTime();var inst_11247 = mspf;var inst_11248 = inst_11246;var state_11263__$1 = (function (){var statearr_11269 = state_11263;(statearr_11269[(7)] = inst_11247);
(statearr_11269[(10)] = inst_11248);
return statearr_11269;
})();var statearr_11270_11387 = state_11263__$1;(statearr_11270_11387[(2)] = null);
(statearr_11270_11387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___11385,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___11385,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11274 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11274[(0)] = state_machine__6189__auto__);
(statearr_11274[(1)] = (1));
return statearr_11274;
});
var state_machine__6189__auto____1 = (function (state_11263){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11275){if((e11275 instanceof Object))
{var ex__6192__auto__ = e11275;var statearr_11276_11388 = state_11263;(statearr_11276_11388[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11389 = state_11263;
state_11263 = G__11389;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11263){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11385,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6205__auto__ = (function (){var statearr_11277 = f__6204__auto__.call(null);(statearr_11277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11385);
return statearr_11277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11385,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6203__auto___11390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_11338){var state_val_11339 = (state_11338[(1)]);if((state_val_11339 === (7)))
{var inst_11333 = (state_11338[(2)]);var inst_11289 = inst_11333;var state_11338__$1 = (function (){var statearr_11340 = state_11338;(statearr_11340[(7)] = inst_11289);
return statearr_11340;
})();var statearr_11341_11391 = state_11338__$1;(statearr_11341_11391[(2)] = null);
(statearr_11341_11391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (1)))
{var inst_11278 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_11279 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_11280 = cljs.core.List.EMPTY;var inst_11281 = [inst_11280,(200)];var inst_11282 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11279,inst_11281);var inst_11283 = [(0),(0),(0)];var inst_11284 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11283,null));var inst_11285 = [(0),(0)];var inst_11286 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11285,null));var inst_11287 = [inst_11282,inst_11284,inst_11286,onModel];var inst_11288 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11278,inst_11287);var inst_11289 = inst_11288;var state_11338__$1 = (function (){var statearr_11342 = state_11338;(statearr_11342[(7)] = inst_11289);
return statearr_11342;
})();var statearr_11343_11392 = state_11338__$1;(statearr_11343_11392[(2)] = null);
(statearr_11343_11392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (4)))
{var inst_11297 = (state_11338[(8)]);var inst_11295 = (state_11338[(9)]);var inst_11295__$1 = (state_11338[(2)]);var inst_11296 = cljs.core.nth.call(null,inst_11295__$1,(0),null);var inst_11297__$1 = cljs.core.nth.call(null,inst_11295__$1,(1),null);var inst_11301 = cljs.core._EQ_.call(null,onTick,inst_11297__$1);var state_11338__$1 = (function (){var statearr_11344 = state_11338;(statearr_11344[(8)] = inst_11297__$1);
(statearr_11344[(10)] = inst_11296);
(statearr_11344[(9)] = inst_11295__$1);
return statearr_11344;
})();if(inst_11301)
{var statearr_11345_11393 = state_11338__$1;(statearr_11345_11393[(1)] = (5));
} else
{var statearr_11346_11394 = state_11338__$1;(statearr_11346_11394[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (13)))
{var inst_11331 = (state_11338[(2)]);var state_11338__$1 = state_11338;var statearr_11347_11395 = state_11338__$1;(statearr_11347_11395[(2)] = inst_11331);
(statearr_11347_11395[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (6)))
{var inst_11297 = (state_11338[(8)]);var inst_11324 = cljs.core._EQ_.call(null,onView,inst_11297);var state_11338__$1 = state_11338;if(inst_11324)
{var statearr_11348_11396 = state_11338__$1;(statearr_11348_11396[(1)] = (11));
} else
{var statearr_11349_11397 = state_11338__$1;(statearr_11349_11397[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (3)))
{var inst_11336 = (state_11338[(2)]);var state_11338__$1 = state_11338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11338__$1,inst_11336);
} else
{if((state_val_11339 === (12)))
{var inst_11289 = (state_11338[(7)]);var state_11338__$1 = state_11338;var statearr_11350_11398 = state_11338__$1;(statearr_11350_11398[(2)] = inst_11289);
(statearr_11350_11398[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (2)))
{var inst_11292 = [onView,onTick];var inst_11293 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11292,null));var state_11338__$1 = state_11338;return cljs.core.async.ioc_alts_BANG_.call(null,state_11338__$1,(4),inst_11293);
} else
{if((state_val_11339 === (11)))
{var inst_11296 = (state_11338[(10)]);var inst_11289 = (state_11338[(7)]);var inst_11326 = (inst_11296[(0)]);var inst_11327 = (inst_11296[(1)]);var inst_11328 = app.particle.abstract$.onViewCommand.call(null,inst_11326,inst_11327,inst_11289);var state_11338__$1 = state_11338;var statearr_11351_11399 = state_11338__$1;(statearr_11351_11399[(2)] = inst_11328);
(statearr_11351_11399[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (9)))
{var state_11338__$1 = state_11338;var statearr_11352_11400 = state_11338__$1;(statearr_11352_11400[(2)] = cljs.core.identity);
(statearr_11352_11400[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (5)))
{var inst_11303 = (state_11338[(11)]);var inst_11289 = (state_11338[(7)]);var inst_11303__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_11289);var state_11338__$1 = (function (){var statearr_11353 = state_11338;(statearr_11353[(11)] = inst_11303__$1);
return statearr_11353;
})();if(cljs.core.truth_(inst_11303__$1))
{var statearr_11354_11401 = state_11338__$1;(statearr_11354_11401[(1)] = (8));
} else
{var statearr_11355_11402 = state_11338__$1;(statearr_11355_11402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (10)))
{var inst_11297 = (state_11338[(8)]);var inst_11296 = (state_11338[(10)]);var inst_11289 = (state_11338[(7)]);var inst_11295 = (state_11338[(9)]);var inst_11307 = (state_11338[(2)]);var inst_11315 = cljs.core.async.chan.call(null,(1));var inst_11316 = (function (){var c__6203__auto____$1 = inst_11315;var draw = inst_11307;var expr__11299 = inst_11297;var pred__11298 = cljs.core._EQ_;var ch = inst_11297;var v = inst_11296;var vec__11291 = inst_11295;var ctx = inst_11289;return ((function (c__6203__auto____$1,draw,expr__11299,pred__11298,ch,v,vec__11291,ctx,inst_11297,inst_11296,inst_11289,inst_11295,inst_11307,inst_11315,state_val_11339,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto____$1,draw,expr__11299,pred__11298,ch,v,vec__11291,ctx,inst_11297,inst_11296,inst_11289,inst_11295,inst_11307,inst_11315,state_val_11339,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_11313){var state_val_11314 = (state_11313[(1)]);if((state_val_11314 === (2)))
{var inst_11311 = (state_11313[(2)]);var state_11313__$1 = state_11313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11313__$1,inst_11311);
} else
{if((state_val_11314 === (1)))
{var inst_11308 = ["tick",v];var inst_11309 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11308,null));var state_11313__$1 = state_11313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11313__$1,(2),onModelEvent,inst_11309);
} else
{return null;
}
}
});})(c__6203__auto____$1,draw,expr__11299,pred__11298,ch,v,vec__11291,ctx,inst_11297,inst_11296,inst_11289,inst_11295,inst_11307,inst_11315,state_val_11339,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6188__auto__,c__6203__auto____$1,draw,expr__11299,pred__11298,ch,v,vec__11291,ctx,inst_11297,inst_11296,inst_11289,inst_11295,inst_11307,inst_11315,state_val_11339,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11359 = [null,null,null,null,null,null,null];(statearr_11359[(0)] = state_machine__6189__auto__);
(statearr_11359[(1)] = (1));
return statearr_11359;
});
var state_machine__6189__auto____1 = (function (state_11313){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11313);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11360){if((e11360 instanceof Object))
{var ex__6192__auto__ = e11360;var statearr_11361_11403 = state_11313;(statearr_11361_11403[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11313);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11404 = state_11313;
state_11313 = G__11404;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11313){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto____$1,draw,expr__11299,pred__11298,ch,v,vec__11291,ctx,inst_11297,inst_11296,inst_11289,inst_11295,inst_11307,inst_11315,state_val_11339,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6205__auto__ = (function (){var statearr_11362 = f__6204__auto__.call(null);(statearr_11362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_11362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(c__6203__auto____$1,draw,expr__11299,pred__11298,ch,v,vec__11291,ctx,inst_11297,inst_11296,inst_11289,inst_11295,inst_11307,inst_11315,state_val_11339,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var inst_11317 = cljs.core.async.impl.dispatch.run.call(null,inst_11316);var inst_11318 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_11319 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11318,null));var inst_11320 = cljs.core.partial.call(null,tool.particle.update,inst_11296);var inst_11321 = cljs.core.update_in.call(null,inst_11289,inst_11319,inst_11320);var inst_11322 = inst_11307.call(null,inst_11321);var state_11338__$1 = (function (){var statearr_11363 = state_11338;(statearr_11363[(12)] = inst_11317);
return statearr_11363;
})();var statearr_11364_11405 = state_11338__$1;(statearr_11364_11405[(2)] = inst_11322);
(statearr_11364_11405[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11339 === (8)))
{var inst_11303 = (state_11338[(11)]);var state_11338__$1 = state_11338;var statearr_11365_11406 = state_11338__$1;(statearr_11365_11406[(2)] = inst_11303);
(statearr_11365_11406[(1)] = (10));
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
});})(c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6188__auto__,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11369 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11369[(0)] = state_machine__6189__auto__);
(statearr_11369[(1)] = (1));
return statearr_11369;
});
var state_machine__6189__auto____1 = (function (state_11338){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11338);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11370){if((e11370 instanceof Object))
{var ex__6192__auto__ = e11370;var statearr_11371_11407 = state_11338;(statearr_11371_11407[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11408 = state_11338;
state_11338 = G__11408;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11338){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6205__auto__ = (function (){var statearr_11372 = f__6204__auto__.call(null);(statearr_11372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11390);
return statearr_11372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11390,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return null;
});
app.particle.main.main.call(null);
