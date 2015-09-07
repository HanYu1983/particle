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
return (function (state_10973){var state_val_10974 = (state_10973[(1)]);if((state_val_10974 === (5)))
{var inst_10971 = (state_10973[(2)]);var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10973__$1,inst_10971);
} else
{if((state_val_10974 === (4)))
{var inst_10941 = (state_10973[(2)]);var inst_10948 = [(0),(0),(0)];var inst_10949 = [(1),(0),(1),(1)];var inst_10950 = [(10),(20)];var inst_10951 = [(0),(0),(0)];var inst_10952 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_10953 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_10954 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_10955 = [inst_10952,inst_10953,inst_10954];var inst_10956 = {"position":inst_10948,"color":inst_10949,"size":inst_10950,"vel":inst_10951,"tex":"img_map","formulaList":inst_10955};var inst_10957 = [inst_10956];var inst_10958 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_10957};var inst_10959 = [(0),(0),(1),(1)];var inst_10960 = [(30),(10)];var inst_10961 = [(10),(10),(0)];var inst_10962 = [(0),(0),(0)];var inst_10963 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_10964 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_10965 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_10966 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_10967 = [inst_10963,inst_10964,inst_10965,inst_10966];var inst_10968 = {"id":"x1","emit":inst_10958,"color":inst_10959,"size":inst_10960,"pos":inst_10961,"vel":inst_10962,"tex":"img_face","formulaList":inst_10967};var inst_10969 = ["edit-particle",inst_10968];var state_10973__$1 = (function (){var statearr_10975 = state_10973;(statearr_10975[(7)] = inst_10941);
return statearr_10975;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10973__$1,(5),onView,inst_10969);
} else
{if((state_val_10974 === (3)))
{var inst_10938 = (state_10973[(2)]);var inst_10939 = cljs.core.async.timeout.call(null,(1100));var state_10973__$1 = (function (){var statearr_10976 = state_10973;(statearr_10976[(8)] = inst_10938);
return statearr_10976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10973__$1,(4),inst_10939);
} else
{if((state_val_10974 === (2)))
{var inst_10931 = (state_10973[(2)]);var inst_10934 = [(10),(10),(0)];var inst_10935 = {"id":"x1","pos":inst_10934};var inst_10936 = ["edit-particle",inst_10935];var state_10973__$1 = (function (){var statearr_10977 = state_10973;(statearr_10977[(9)] = inst_10931);
return statearr_10977;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10973__$1,(3),onView,inst_10936);
} else
{if((state_val_10974 === (1)))
{var inst_10929 = cljs.core.async.timeout.call(null,(1000));var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10973__$1,(2),inst_10929);
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
var state_machine__6189__auto____0 = (function (){var statearr_10981 = [null,null,null,null,null,null,null,null,null,null];(statearr_10981[(0)] = state_machine__6189__auto__);
(statearr_10981[(1)] = (1));
return statearr_10981;
});
var state_machine__6189__auto____1 = (function (state_10973){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10973);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10982){if((e10982 instanceof Object))
{var ex__6192__auto__ = e10982;var statearr_10983_10985 = state_10973;(statearr_10983_10985[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10986 = state_10973;
state_10973 = G__10986;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10973){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_10984 = f__6204__auto__.call(null);(statearr_10984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj11167 = {};return obj11167;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_11171){var state_val_11172 = (state_11171[(1)]);if((state_val_11172 === (2)))
{var inst_11169 = (state_11171[(2)]);var state_11171__$1 = state_11171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11171__$1,inst_11169);
} else
{if((state_val_11172 === (1)))
{var state_11171__$1 = state_11171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11171__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6203__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6188__auto__,c__6203__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11176 = [null,null,null,null,null,null,null];(statearr_11176[(0)] = state_machine__6189__auto__);
(statearr_11176[(1)] = (1));
return statearr_11176;
});
var state_machine__6189__auto____1 = (function (state_11171){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11171);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11177){if((e11177 instanceof Object))
{var ex__6192__auto__ = e11177;var statearr_11178_11345 = state_11171;(statearr_11178_11345[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11346 = state_11171;
state_11171 = G__11346;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11171){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6205__auto__ = (function (){var statearr_11179 = f__6204__auto__.call(null);(statearr_11179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6203__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6203__auto___11347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_11193){var state_val_11194 = (state_11193[(1)]);if((state_val_11194 === (4)))
{var inst_11183 = (state_11193[(2)]);var inst_11184 = cljs.core.nth.call(null,inst_11183,(0),null);var inst_11185 = cljs.core.nth.call(null,inst_11183,(1),null);var inst_11186 = cljs.core.nth.call(null,inst_11183,(2),null);var inst_11187 = [inst_11184,inst_11185,inst_11186];var inst_11188 = common.onModel.onNext(inst_11187);var state_11193__$1 = (function (){var statearr_11195 = state_11193;(statearr_11195[(7)] = inst_11188);
return statearr_11195;
})();var statearr_11196_11348 = state_11193__$1;(statearr_11196_11348[(2)] = null);
(statearr_11196_11348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11194 === (3)))
{var inst_11191 = (state_11193[(2)]);var state_11193__$1 = state_11193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11193__$1,inst_11191);
} else
{if((state_val_11194 === (2)))
{var state_11193__$1 = state_11193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11193__$1,(4),onModel);
} else
{if((state_val_11194 === (1)))
{var state_11193__$1 = state_11193;var statearr_11197_11349 = state_11193__$1;(statearr_11197_11349[(2)] = null);
(statearr_11197_11349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___11347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6188__auto__,c__6203__auto___11347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11201 = [null,null,null,null,null,null,null,null];(statearr_11201[(0)] = state_machine__6189__auto__);
(statearr_11201[(1)] = (1));
return statearr_11201;
});
var state_machine__6189__auto____1 = (function (state_11193){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11193);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11202){if((e11202 instanceof Object))
{var ex__6192__auto__ = e11202;var statearr_11203_11350 = state_11193;(statearr_11203_11350[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11351 = state_11193;
state_11193 = G__11351;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11193){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6205__auto__ = (function (){var statearr_11204 = f__6204__auto__.call(null);(statearr_11204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11347);
return statearr_11204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11347,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6203__auto___11352 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_11217){var state_val_11218 = (state_11217[(1)]);if((state_val_11218 === (4)))
{var inst_11208 = (state_11217[(2)]);var inst_11209 = cljs.core.nth.call(null,inst_11208,(0),null);var inst_11210 = cljs.core.nth.call(null,inst_11208,(1),null);var inst_11211 = [inst_11209,inst_11210];var inst_11212 = common.onModelEvent.onNext(inst_11211);var state_11217__$1 = (function (){var statearr_11219 = state_11217;(statearr_11219[(7)] = inst_11212);
return statearr_11219;
})();var statearr_11220_11353 = state_11217__$1;(statearr_11220_11353[(2)] = null);
(statearr_11220_11353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (3)))
{var inst_11215 = (state_11217[(2)]);var state_11217__$1 = state_11217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11217__$1,inst_11215);
} else
{if((state_val_11218 === (2)))
{var state_11217__$1 = state_11217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11217__$1,(4),onModelEvent);
} else
{if((state_val_11218 === (1)))
{var state_11217__$1 = state_11217;var statearr_11221_11354 = state_11217__$1;(statearr_11221_11354[(2)] = null);
(statearr_11221_11354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto___11352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6188__auto__,c__6203__auto___11352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11225 = [null,null,null,null,null,null,null,null];(statearr_11225[(0)] = state_machine__6189__auto__);
(statearr_11225[(1)] = (1));
return statearr_11225;
});
var state_machine__6189__auto____1 = (function (state_11217){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11226){if((e11226 instanceof Object))
{var ex__6192__auto__ = e11226;var statearr_11227_11355 = state_11217;(statearr_11227_11355[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11356 = state_11217;
state_11217 = G__11356;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11217){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6205__auto__ = (function (){var statearr_11228 = f__6204__auto__.call(null);(statearr_11228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11352);
return statearr_11228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11352,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6203__auto___11357 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11357,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11357,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_11247){var state_val_11248 = (state_11247[(1)]);if((state_val_11248 === (5)))
{var inst_11231 = (state_11247[(7)]);var inst_11238 = (state_11247[(8)]);var inst_11242 = (state_11247[(2)]);var tmp11249 = inst_11231;var inst_11231__$1 = tmp11249;var inst_11232 = inst_11238;var state_11247__$1 = (function (){var statearr_11250 = state_11247;(statearr_11250[(7)] = inst_11231__$1);
(statearr_11250[(9)] = inst_11232);
(statearr_11250[(10)] = inst_11242);
return statearr_11250;
})();var statearr_11251_11358 = state_11247__$1;(statearr_11251_11358[(2)] = null);
(statearr_11251_11358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11248 === (4)))
{var inst_11232 = (state_11247[(9)]);var inst_11238 = (state_11247[(8)]);var inst_11236 = (state_11247[(2)]);var inst_11237 = (new Date());var inst_11238__$1 = inst_11237.getTime();var inst_11239 = (inst_11238__$1 - inst_11232);var inst_11240 = (inst_11239 / (1000));var state_11247__$1 = (function (){var statearr_11252 = state_11247;(statearr_11252[(11)] = inst_11236);
(statearr_11252[(8)] = inst_11238__$1);
return statearr_11252;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11247__$1,(5),onTick,inst_11240);
} else
{if((state_val_11248 === (3)))
{var inst_11245 = (state_11247[(2)]);var state_11247__$1 = state_11247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11247__$1,inst_11245);
} else
{if((state_val_11248 === (2)))
{var inst_11231 = (state_11247[(7)]);var inst_11234 = cljs.core.async.timeout.call(null,inst_11231);var state_11247__$1 = state_11247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11247__$1,(4),inst_11234);
} else
{if((state_val_11248 === (1)))
{var inst_11229 = (new Date());var inst_11230 = inst_11229.getTime();var inst_11231 = mspf;var inst_11232 = inst_11230;var state_11247__$1 = (function (){var statearr_11253 = state_11247;(statearr_11253[(7)] = inst_11231);
(statearr_11253[(9)] = inst_11232);
return statearr_11253;
})();var statearr_11254_11359 = state_11247__$1;(statearr_11254_11359[(2)] = null);
(statearr_11254_11359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___11357,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6188__auto__,c__6203__auto___11357,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11258 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11258[(0)] = state_machine__6189__auto__);
(statearr_11258[(1)] = (1));
return statearr_11258;
});
var state_machine__6189__auto____1 = (function (state_11247){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11259){if((e11259 instanceof Object))
{var ex__6192__auto__ = e11259;var statearr_11260_11360 = state_11247;(statearr_11260_11360[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11361 = state_11247;
state_11247 = G__11361;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11247){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11357,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6205__auto__ = (function (){var statearr_11261 = f__6204__auto__.call(null);(statearr_11261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11357);
return statearr_11261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11357,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6203__auto___11362 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_11315){var state_val_11316 = (state_11315[(1)]);if((state_val_11316 === (7)))
{var inst_11310 = (state_11315[(2)]);var inst_11271 = inst_11310;var state_11315__$1 = (function (){var statearr_11317 = state_11315;(statearr_11317[(7)] = inst_11271);
return statearr_11317;
})();var statearr_11318_11363 = state_11315__$1;(statearr_11318_11363[(2)] = null);
(statearr_11318_11363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (1)))
{var inst_11262 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_11263 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_11264 = cljs.core.List.EMPTY;var inst_11265 = [inst_11264,(200)];var inst_11266 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11263,inst_11265);var inst_11267 = [(0),(0)];var inst_11268 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11267,null));var inst_11269 = [(0),inst_11266,inst_11268,onModel,gl__$1];var inst_11270 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11262,inst_11269);var inst_11271 = inst_11270;var state_11315__$1 = (function (){var statearr_11319 = state_11315;(statearr_11319[(7)] = inst_11271);
return statearr_11319;
})();var statearr_11320_11364 = state_11315__$1;(statearr_11320_11364[(2)] = null);
(statearr_11320_11364[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (4)))
{var inst_11279 = (state_11315[(8)]);var inst_11277 = (state_11315[(9)]);var inst_11277__$1 = (state_11315[(2)]);var inst_11278 = cljs.core.nth.call(null,inst_11277__$1,(0),null);var inst_11279__$1 = cljs.core.nth.call(null,inst_11277__$1,(1),null);var inst_11283 = cljs.core._EQ_.call(null,onTick,inst_11279__$1);var state_11315__$1 = (function (){var statearr_11321 = state_11315;(statearr_11321[(8)] = inst_11279__$1);
(statearr_11321[(10)] = inst_11278);
(statearr_11321[(9)] = inst_11277__$1);
return statearr_11321;
})();if(inst_11283)
{var statearr_11322_11365 = state_11315__$1;(statearr_11322_11365[(1)] = (5));
} else
{var statearr_11323_11366 = state_11315__$1;(statearr_11323_11366[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (6)))
{var inst_11279 = (state_11315[(8)]);var inst_11301 = cljs.core._EQ_.call(null,onView,inst_11279);var state_11315__$1 = state_11315;if(inst_11301)
{var statearr_11324_11367 = state_11315__$1;(statearr_11324_11367[(1)] = (8));
} else
{var statearr_11325_11368 = state_11315__$1;(statearr_11325_11368[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (3)))
{var inst_11313 = (state_11315[(2)]);var state_11315__$1 = state_11315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11315__$1,inst_11313);
} else
{if((state_val_11316 === (2)))
{var inst_11274 = [onView,onTick];var inst_11275 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11274,null));var state_11315__$1 = state_11315;return cljs.core.async.ioc_alts_BANG_.call(null,state_11315__$1,(4),inst_11275);
} else
{if((state_val_11316 === (9)))
{var inst_11271 = (state_11315[(7)]);var state_11315__$1 = state_11315;var statearr_11326_11369 = state_11315__$1;(statearr_11326_11369[(2)] = inst_11271);
(statearr_11326_11369[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (5)))
{var inst_11271 = (state_11315[(7)]);var inst_11279 = (state_11315[(8)]);var inst_11278 = (state_11315[(10)]);var inst_11277 = (state_11315[(9)]);var inst_11292 = cljs.core.async.chan.call(null,(1));var inst_11293 = (function (){var c__6203__auto____$1 = inst_11292;var expr__11281 = inst_11279;var pred__11280 = cljs.core._EQ_;var ch = inst_11279;var v = inst_11278;var vec__11273 = inst_11277;var ctx = inst_11271;return ((function (c__6203__auto____$1,expr__11281,pred__11280,ch,v,vec__11273,ctx,inst_11271,inst_11279,inst_11278,inst_11277,inst_11292,state_val_11316,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto____$1,expr__11281,pred__11280,ch,v,vec__11273,ctx,inst_11271,inst_11279,inst_11278,inst_11277,inst_11292,state_val_11316,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_11290){var state_val_11291 = (state_11290[(1)]);if((state_val_11291 === (2)))
{var inst_11288 = (state_11290[(2)]);var state_11290__$1 = state_11290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11290__$1,inst_11288);
} else
{if((state_val_11291 === (1)))
{var inst_11285 = ["tick",v];var inst_11286 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11285,null));var state_11290__$1 = state_11290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11290__$1,(2),onModelEvent,inst_11286);
} else
{return null;
}
}
});})(c__6203__auto____$1,expr__11281,pred__11280,ch,v,vec__11273,ctx,inst_11271,inst_11279,inst_11278,inst_11277,inst_11292,state_val_11316,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6188__auto__,c__6203__auto____$1,expr__11281,pred__11280,ch,v,vec__11273,ctx,inst_11271,inst_11279,inst_11278,inst_11277,inst_11292,state_val_11316,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11330 = [null,null,null,null,null,null,null];(statearr_11330[(0)] = state_machine__6189__auto__);
(statearr_11330[(1)] = (1));
return statearr_11330;
});
var state_machine__6189__auto____1 = (function (state_11290){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11331){if((e11331 instanceof Object))
{var ex__6192__auto__ = e11331;var statearr_11332_11370 = state_11290;(statearr_11332_11370[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11371 = state_11290;
state_11290 = G__11371;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11290){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto____$1,expr__11281,pred__11280,ch,v,vec__11273,ctx,inst_11271,inst_11279,inst_11278,inst_11277,inst_11292,state_val_11316,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6205__auto__ = (function (){var statearr_11333 = f__6204__auto__.call(null);(statearr_11333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_11333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(c__6203__auto____$1,expr__11281,pred__11280,ch,v,vec__11273,ctx,inst_11271,inst_11279,inst_11278,inst_11277,inst_11292,state_val_11316,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_11294 = cljs.core.async.impl.dispatch.run.call(null,inst_11293);var inst_11295 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_11296 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11295,null));var inst_11297 = cljs.core.partial.call(null,tool.particle.update,inst_11278);var inst_11298 = cljs.core.update_in.call(null,inst_11271,inst_11296,inst_11297);var inst_11299 = draw.call(null,inst_11298);var state_11315__$1 = (function (){var statearr_11334 = state_11315;(statearr_11334[(11)] = inst_11294);
return statearr_11334;
})();var statearr_11335_11372 = state_11315__$1;(statearr_11335_11372[(2)] = inst_11299);
(statearr_11335_11372[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (10)))
{var inst_11308 = (state_11315[(2)]);var state_11315__$1 = state_11315;var statearr_11336_11373 = state_11315__$1;(statearr_11336_11373[(2)] = inst_11308);
(statearr_11336_11373[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11316 === (8)))
{var inst_11271 = (state_11315[(7)]);var inst_11278 = (state_11315[(10)]);var inst_11303 = (inst_11278[(0)]);var inst_11304 = (inst_11278[(1)]);var inst_11305 = app.particle.abstract$.onViewCommand.call(null,inst_11303,inst_11304,inst_11271);var state_11315__$1 = state_11315;var statearr_11337_11374 = state_11315__$1;(statearr_11337_11374[(2)] = inst_11305);
(statearr_11337_11374[(1)] = (10));
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
});})(c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6188__auto__,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11341 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11341[(0)] = state_machine__6189__auto__);
(statearr_11341[(1)] = (1));
return statearr_11341;
});
var state_machine__6189__auto____1 = (function (state_11315){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11315);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11342){if((e11342 instanceof Object))
{var ex__6192__auto__ = e11342;var statearr_11343_11375 = state_11315;(statearr_11343_11375[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11315);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11376 = state_11315;
state_11315 = G__11376;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11315){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6205__auto__ = (function (){var statearr_11344 = f__6204__auto__.call(null);(statearr_11344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11362);
return statearr_11344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11362,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
