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
return (function (state_52959){var state_val_52960 = (state_52959[(1)]);if((state_val_52960 === (5)))
{var inst_52957 = (state_52959[(2)]);var state_52959__$1 = state_52959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52959__$1,inst_52957);
} else
{if((state_val_52960 === (4)))
{var inst_52927 = (state_52959[(2)]);var inst_52934 = [(0),(0),(0)];var inst_52935 = [(1),(0),(1),(1)];var inst_52936 = [(10),(20)];var inst_52937 = [(0),(0),(0)];var inst_52938 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_52939 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_52940 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_52941 = [inst_52938,inst_52939,inst_52940];var inst_52942 = {"position":inst_52934,"color":inst_52935,"size":inst_52936,"vel":inst_52937,"tex":"img_map","formulaList":inst_52941};var inst_52943 = [inst_52942];var inst_52944 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_52943};var inst_52945 = [(0),(0),(1),(1)];var inst_52946 = [(30),(10)];var inst_52947 = [(10),(10),(0)];var inst_52948 = [(0),(0),(0)];var inst_52949 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_52950 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_52951 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_52952 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_52953 = [inst_52949,inst_52950,inst_52951,inst_52952];var inst_52954 = {"id":"x1","emit":inst_52944,"color":inst_52945,"size":inst_52946,"pos":inst_52947,"vel":inst_52948,"tex":"img_face","formulaList":inst_52953};var inst_52955 = ["edit-particle",inst_52954];var state_52959__$1 = (function (){var statearr_52961 = state_52959;(statearr_52961[(7)] = inst_52927);
return statearr_52961;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52959__$1,(5),onView,inst_52955);
} else
{if((state_val_52960 === (3)))
{var inst_52924 = (state_52959[(2)]);var inst_52925 = cljs.core.async.timeout.call(null,(1100));var state_52959__$1 = (function (){var statearr_52962 = state_52959;(statearr_52962[(8)] = inst_52924);
return statearr_52962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52959__$1,(4),inst_52925);
} else
{if((state_val_52960 === (2)))
{var inst_52917 = (state_52959[(2)]);var inst_52920 = [(10),(10),(0)];var inst_52921 = {"id":"x1","pos":inst_52920};var inst_52922 = ["edit-particle",inst_52921];var state_52959__$1 = (function (){var statearr_52963 = state_52959;(statearr_52963[(9)] = inst_52917);
return statearr_52963;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52959__$1,(3),onView,inst_52922);
} else
{if((state_val_52960 === (1)))
{var inst_52915 = cljs.core.async.timeout.call(null,(1000));var state_52959__$1 = state_52959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52959__$1,(2),inst_52915);
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
var state_machine__6188__auto____0 = (function (){var statearr_52967 = [null,null,null,null,null,null,null,null,null,null];(statearr_52967[(0)] = state_machine__6188__auto__);
(statearr_52967[(1)] = (1));
return statearr_52967;
});
var state_machine__6188__auto____1 = (function (state_52959){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52959);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52968){if((e52968 instanceof Object))
{var ex__6191__auto__ = e52968;var statearr_52969_52971 = state_52959;(statearr_52969_52971[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52972 = state_52959;
state_52959 = G__52972;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52959){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_52970 = f__6203__auto__.call(null);(statearr_52970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_52970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (30)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj53155 = {};return obj53155;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53159){var state_val_53160 = (state_53159[(1)]);if((state_val_53160 === (2)))
{var inst_53157 = (state_53159[(2)]);var state_53159__$1 = state_53159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53159__$1,inst_53157);
} else
{if((state_val_53160 === (1)))
{var state_53159__$1 = state_53159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53159__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53164 = [null,null,null,null,null,null,null];(statearr_53164[(0)] = state_machine__6188__auto__);
(statearr_53164[(1)] = (1));
return statearr_53164;
});
var state_machine__6188__auto____1 = (function (state_53159){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53159);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53165){if((e53165 instanceof Object))
{var ex__6191__auto__ = e53165;var statearr_53166_53335 = state_53159;(statearr_53166_53335[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53336 = state_53159;
state_53159 = G__53336;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53159){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53167 = f__6203__auto__.call(null);(statearr_53167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53337 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53337,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53337,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53181){var state_val_53182 = (state_53181[(1)]);if((state_val_53182 === (4)))
{var inst_53171 = (state_53181[(2)]);var inst_53172 = cljs.core.nth.call(null,inst_53171,(0),null);var inst_53173 = cljs.core.nth.call(null,inst_53171,(1),null);var inst_53174 = cljs.core.nth.call(null,inst_53171,(2),null);var inst_53175 = [inst_53172,inst_53173,inst_53174];var inst_53176 = common.onModel.onNext(inst_53175);var state_53181__$1 = (function (){var statearr_53183 = state_53181;(statearr_53183[(7)] = inst_53176);
return statearr_53183;
})();var statearr_53184_53338 = state_53181__$1;(statearr_53184_53338[(2)] = null);
(statearr_53184_53338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53182 === (3)))
{var inst_53179 = (state_53181[(2)]);var state_53181__$1 = state_53181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53181__$1,inst_53179);
} else
{if((state_val_53182 === (2)))
{var state_53181__$1 = state_53181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53181__$1,(4),onModel);
} else
{if((state_val_53182 === (1)))
{var state_53181__$1 = state_53181;var statearr_53185_53339 = state_53181__$1;(statearr_53185_53339[(2)] = null);
(statearr_53185_53339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___53337,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53337,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53189 = [null,null,null,null,null,null,null,null];(statearr_53189[(0)] = state_machine__6188__auto__);
(statearr_53189[(1)] = (1));
return statearr_53189;
});
var state_machine__6188__auto____1 = (function (state_53181){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53181);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53190){if((e53190 instanceof Object))
{var ex__6191__auto__ = e53190;var statearr_53191_53340 = state_53181;(statearr_53191_53340[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53341 = state_53181;
state_53181 = G__53341;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53181){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53337,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53192 = f__6203__auto__.call(null);(statearr_53192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53337);
return statearr_53192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53337,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53342 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53342,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53342,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53205){var state_val_53206 = (state_53205[(1)]);if((state_val_53206 === (4)))
{var inst_53196 = (state_53205[(2)]);var inst_53197 = cljs.core.nth.call(null,inst_53196,(0),null);var inst_53198 = cljs.core.nth.call(null,inst_53196,(1),null);var inst_53199 = [inst_53197,inst_53198];var inst_53200 = common.onModelEvent.onNext(inst_53199);var state_53205__$1 = (function (){var statearr_53207 = state_53205;(statearr_53207[(7)] = inst_53200);
return statearr_53207;
})();var statearr_53208_53343 = state_53205__$1;(statearr_53208_53343[(2)] = null);
(statearr_53208_53343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53206 === (3)))
{var inst_53203 = (state_53205[(2)]);var state_53205__$1 = state_53205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53205__$1,inst_53203);
} else
{if((state_val_53206 === (2)))
{var state_53205__$1 = state_53205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53205__$1,(4),onModelEvent);
} else
{if((state_val_53206 === (1)))
{var state_53205__$1 = state_53205;var statearr_53209_53344 = state_53205__$1;(statearr_53209_53344[(2)] = null);
(statearr_53209_53344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___53342,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53342,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53213 = [null,null,null,null,null,null,null,null];(statearr_53213[(0)] = state_machine__6188__auto__);
(statearr_53213[(1)] = (1));
return statearr_53213;
});
var state_machine__6188__auto____1 = (function (state_53205){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53205);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53214){if((e53214 instanceof Object))
{var ex__6191__auto__ = e53214;var statearr_53215_53345 = state_53205;(statearr_53215_53345[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53346 = state_53205;
state_53205 = G__53346;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53205){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53342,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53216 = f__6203__auto__.call(null);(statearr_53216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53342);
return statearr_53216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53342,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53235){var state_val_53236 = (state_53235[(1)]);if((state_val_53236 === (5)))
{var inst_53219 = (state_53235[(7)]);var inst_53226 = (state_53235[(8)]);var inst_53230 = (state_53235[(2)]);var tmp53237 = inst_53219;var inst_53219__$1 = tmp53237;var inst_53220 = inst_53226;var state_53235__$1 = (function (){var statearr_53238 = state_53235;(statearr_53238[(7)] = inst_53219__$1);
(statearr_53238[(9)] = inst_53230);
(statearr_53238[(10)] = inst_53220);
return statearr_53238;
})();var statearr_53239_53348 = state_53235__$1;(statearr_53239_53348[(2)] = null);
(statearr_53239_53348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53236 === (4)))
{var inst_53226 = (state_53235[(8)]);var inst_53220 = (state_53235[(10)]);var inst_53224 = (state_53235[(2)]);var inst_53225 = (new Date());var inst_53226__$1 = inst_53225.getTime();var inst_53227 = (inst_53226__$1 - inst_53220);var inst_53228 = (inst_53227 / (1000));var state_53235__$1 = (function (){var statearr_53240 = state_53235;(statearr_53240[(11)] = inst_53224);
(statearr_53240[(8)] = inst_53226__$1);
return statearr_53240;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53235__$1,(5),onTick,inst_53228);
} else
{if((state_val_53236 === (3)))
{var inst_53233 = (state_53235[(2)]);var state_53235__$1 = state_53235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53235__$1,inst_53233);
} else
{if((state_val_53236 === (2)))
{var inst_53219 = (state_53235[(7)]);var inst_53222 = cljs.core.async.timeout.call(null,inst_53219);var state_53235__$1 = state_53235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53235__$1,(4),inst_53222);
} else
{if((state_val_53236 === (1)))
{var inst_53217 = (new Date());var inst_53218 = inst_53217.getTime();var inst_53219 = mspf;var inst_53220 = inst_53218;var state_53235__$1 = (function (){var statearr_53241 = state_53235;(statearr_53241[(7)] = inst_53219);
(statearr_53241[(10)] = inst_53220);
return statearr_53241;
})();var statearr_53242_53349 = state_53235__$1;(statearr_53242_53349[(2)] = null);
(statearr_53242_53349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___53347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53246 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53246[(0)] = state_machine__6188__auto__);
(statearr_53246[(1)] = (1));
return statearr_53246;
});
var state_machine__6188__auto____1 = (function (state_53235){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53235);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53247){if((e53247 instanceof Object))
{var ex__6191__auto__ = e53247;var statearr_53248_53350 = state_53235;(statearr_53248_53350[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53351 = state_53235;
state_53235 = G__53351;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53235){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53249 = f__6203__auto__.call(null);(statearr_53249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53347);
return statearr_53249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___53352 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53305){var state_val_53306 = (state_53305[(1)]);if((state_val_53306 === (7)))
{var inst_53300 = (state_53305[(2)]);var inst_53261 = inst_53300;var state_53305__$1 = (function (){var statearr_53307 = state_53305;(statearr_53307[(7)] = inst_53261);
return statearr_53307;
})();var statearr_53308_53353 = state_53305__$1;(statearr_53308_53353[(2)] = null);
(statearr_53308_53353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (1)))
{var inst_53250 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_53251 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_53252 = cljs.core.List.EMPTY;var inst_53253 = [inst_53252,(200)];var inst_53254 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53251,inst_53253);var inst_53255 = [0.0,0.5,0.35];var inst_53256 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53255,null));var inst_53257 = [(0),(0)];var inst_53258 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53257,null));var inst_53259 = [inst_53254,inst_53256,inst_53258,onModel,gl__$1];var inst_53260 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53250,inst_53259);var inst_53261 = inst_53260;var state_53305__$1 = (function (){var statearr_53309 = state_53305;(statearr_53309[(7)] = inst_53261);
return statearr_53309;
})();var statearr_53310_53354 = state_53305__$1;(statearr_53310_53354[(2)] = null);
(statearr_53310_53354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (4)))
{var inst_53269 = (state_53305[(8)]);var inst_53267 = (state_53305[(9)]);var inst_53267__$1 = (state_53305[(2)]);var inst_53268 = cljs.core.nth.call(null,inst_53267__$1,(0),null);var inst_53269__$1 = cljs.core.nth.call(null,inst_53267__$1,(1),null);var inst_53273 = cljs.core._EQ_.call(null,onTick,inst_53269__$1);var state_53305__$1 = (function (){var statearr_53311 = state_53305;(statearr_53311[(8)] = inst_53269__$1);
(statearr_53311[(9)] = inst_53267__$1);
(statearr_53311[(10)] = inst_53268);
return statearr_53311;
})();if(inst_53273)
{var statearr_53312_53355 = state_53305__$1;(statearr_53312_53355[(1)] = (5));
} else
{var statearr_53313_53356 = state_53305__$1;(statearr_53313_53356[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (6)))
{var inst_53269 = (state_53305[(8)]);var inst_53291 = cljs.core._EQ_.call(null,onView,inst_53269);var state_53305__$1 = state_53305;if(inst_53291)
{var statearr_53314_53357 = state_53305__$1;(statearr_53314_53357[(1)] = (8));
} else
{var statearr_53315_53358 = state_53305__$1;(statearr_53315_53358[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (3)))
{var inst_53303 = (state_53305[(2)]);var state_53305__$1 = state_53305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53305__$1,inst_53303);
} else
{if((state_val_53306 === (2)))
{var inst_53264 = [onView,onTick];var inst_53265 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53264,null));var state_53305__$1 = state_53305;return cljs.core.async.ioc_alts_BANG_.call(null,state_53305__$1,(4),inst_53265);
} else
{if((state_val_53306 === (9)))
{var inst_53261 = (state_53305[(7)]);var state_53305__$1 = state_53305;var statearr_53316_53359 = state_53305__$1;(statearr_53316_53359[(2)] = inst_53261);
(statearr_53316_53359[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (5)))
{var inst_53269 = (state_53305[(8)]);var inst_53267 = (state_53305[(9)]);var inst_53268 = (state_53305[(10)]);var inst_53261 = (state_53305[(7)]);var inst_53282 = cljs.core.async.chan.call(null,(1));var inst_53283 = (function (){var c__6202__auto____$1 = inst_53282;var expr__53271 = inst_53269;var pred__53270 = cljs.core._EQ_;var ch = inst_53269;var v = inst_53268;var vec__53263 = inst_53267;var ctx = inst_53261;return ((function (c__6202__auto____$1,expr__53271,pred__53270,ch,v,vec__53263,ctx,inst_53269,inst_53267,inst_53268,inst_53261,inst_53282,state_val_53306,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__53271,pred__53270,ch,v,vec__53263,ctx,inst_53269,inst_53267,inst_53268,inst_53261,inst_53282,state_val_53306,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_53280){var state_val_53281 = (state_53280[(1)]);if((state_val_53281 === (2)))
{var inst_53278 = (state_53280[(2)]);var state_53280__$1 = state_53280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53280__$1,inst_53278);
} else
{if((state_val_53281 === (1)))
{var inst_53275 = ["tick",v];var inst_53276 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53275,null));var state_53280__$1 = state_53280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53280__$1,(2),onModelEvent,inst_53276);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__53271,pred__53270,ch,v,vec__53263,ctx,inst_53269,inst_53267,inst_53268,inst_53261,inst_53282,state_val_53306,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__53271,pred__53270,ch,v,vec__53263,ctx,inst_53269,inst_53267,inst_53268,inst_53261,inst_53282,state_val_53306,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53320 = [null,null,null,null,null,null,null];(statearr_53320[(0)] = state_machine__6188__auto__);
(statearr_53320[(1)] = (1));
return statearr_53320;
});
var state_machine__6188__auto____1 = (function (state_53280){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53280);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53321){if((e53321 instanceof Object))
{var ex__6191__auto__ = e53321;var statearr_53322_53360 = state_53280;(statearr_53322_53360[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53361 = state_53280;
state_53280 = G__53361;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53280){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__53271,pred__53270,ch,v,vec__53263,ctx,inst_53269,inst_53267,inst_53268,inst_53261,inst_53282,state_val_53306,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53323 = f__6203__auto__.call(null);(statearr_53323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_53323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__53271,pred__53270,ch,v,vec__53263,ctx,inst_53269,inst_53267,inst_53268,inst_53261,inst_53282,state_val_53306,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_53284 = cljs.core.async.impl.dispatch.run.call(null,inst_53283);var inst_53285 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_53286 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53285,null));var inst_53287 = cljs.core.partial.call(null,tool.particle.update,inst_53268);var inst_53288 = cljs.core.update_in.call(null,inst_53261,inst_53286,inst_53287);var inst_53289 = draw.call(null,inst_53288);var state_53305__$1 = (function (){var statearr_53324 = state_53305;(statearr_53324[(11)] = inst_53284);
return statearr_53324;
})();var statearr_53325_53362 = state_53305__$1;(statearr_53325_53362[(2)] = inst_53289);
(statearr_53325_53362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (10)))
{var inst_53298 = (state_53305[(2)]);var state_53305__$1 = state_53305;var statearr_53326_53363 = state_53305__$1;(statearr_53326_53363[(2)] = inst_53298);
(statearr_53326_53363[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53306 === (8)))
{var inst_53268 = (state_53305[(10)]);var inst_53261 = (state_53305[(7)]);var inst_53293 = (inst_53268[(0)]);var inst_53294 = (inst_53268[(1)]);var inst_53295 = app.particle.abstract$.onViewCommand.call(null,inst_53293,inst_53294,inst_53261);var state_53305__$1 = state_53305;var statearr_53327_53364 = state_53305__$1;(statearr_53327_53364[(2)] = inst_53295);
(statearr_53327_53364[(1)] = (10));
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
});})(c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53331 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53331[(0)] = state_machine__6188__auto__);
(statearr_53331[(1)] = (1));
return statearr_53331;
});
var state_machine__6188__auto____1 = (function (state_53305){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53332){if((e53332 instanceof Object))
{var ex__6191__auto__ = e53332;var statearr_53333_53365 = state_53305;(statearr_53333_53365[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53366 = state_53305;
state_53305 = G__53366;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53305){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_53334 = f__6203__auto__.call(null);(statearr_53334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___53352);
return statearr_53334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___53352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
