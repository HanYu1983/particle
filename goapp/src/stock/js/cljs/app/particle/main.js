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
return (function (state_139937){var state_val_139938 = (state_139937[(1)]);if((state_val_139938 === (5)))
{var inst_139935 = (state_139937[(2)]);var state_139937__$1 = state_139937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139937__$1,inst_139935);
} else
{if((state_val_139938 === (4)))
{var inst_139905 = (state_139937[(2)]);var inst_139912 = [(0),(0),(0)];var inst_139913 = [(1),(0),(1),(1)];var inst_139914 = [(10),(20)];var inst_139915 = [(0),(0),(0)];var inst_139916 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_139917 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_139918 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_139919 = [inst_139916,inst_139917,inst_139918];var inst_139920 = {"position":inst_139912,"color":inst_139913,"size":inst_139914,"vel":inst_139915,"tex":"img_map","formulaList":inst_139919};var inst_139921 = [inst_139920];var inst_139922 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_139921};var inst_139923 = [(0),(0),(1),(1)];var inst_139924 = [(30),(10)];var inst_139925 = [(10),(10),(0)];var inst_139926 = [(0),(0),(0)];var inst_139927 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_139928 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_139929 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_139930 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_139931 = [inst_139927,inst_139928,inst_139929,inst_139930];var inst_139932 = {"id":"x1","emit":inst_139922,"color":inst_139923,"size":inst_139924,"pos":inst_139925,"vel":inst_139926,"tex":"img_face","formulaList":inst_139931};var inst_139933 = ["edit-particle",inst_139932];var state_139937__$1 = (function (){var statearr_139939 = state_139937;(statearr_139939[(7)] = inst_139905);
return statearr_139939;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139937__$1,(5),onView,inst_139933);
} else
{if((state_val_139938 === (3)))
{var inst_139902 = (state_139937[(2)]);var inst_139903 = cljs.core.async.timeout.call(null,(1100));var state_139937__$1 = (function (){var statearr_139940 = state_139937;(statearr_139940[(8)] = inst_139902);
return statearr_139940;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139937__$1,(4),inst_139903);
} else
{if((state_val_139938 === (2)))
{var inst_139895 = (state_139937[(2)]);var inst_139898 = [(10),(10),(0)];var inst_139899 = {"id":"x1","pos":inst_139898};var inst_139900 = ["edit-particle",inst_139899];var state_139937__$1 = (function (){var statearr_139941 = state_139937;(statearr_139941[(9)] = inst_139895);
return statearr_139941;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_139937__$1,(3),onView,inst_139900);
} else
{if((state_val_139938 === (1)))
{var inst_139893 = cljs.core.async.timeout.call(null,(1000));var state_139937__$1 = state_139937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139937__$1,(2),inst_139893);
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
var state_machine__6188__auto____0 = (function (){var statearr_139945 = [null,null,null,null,null,null,null,null,null,null];(statearr_139945[(0)] = state_machine__6188__auto__);
(statearr_139945[(1)] = (1));
return statearr_139945;
});
var state_machine__6188__auto____1 = (function (state_139937){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_139937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e139946){if((e139946 instanceof Object))
{var ex__6191__auto__ = e139946;var statearr_139947_139949 = state_139937;(statearr_139947_139949[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e139946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__139950 = state_139937;
state_139937 = G__139950;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_139937){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_139937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_139948 = f__6203__auto__.call(null);(statearr_139948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_139948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj140131 = {};return obj140131;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140135){var state_val_140136 = (state_140135[(1)]);if((state_val_140136 === (2)))
{var inst_140133 = (state_140135[(2)]);var state_140135__$1 = state_140135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140135__$1,inst_140133);
} else
{if((state_val_140136 === (1)))
{var state_140135__$1 = state_140135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140135__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140140 = [null,null,null,null,null,null,null];(statearr_140140[(0)] = state_machine__6188__auto__);
(statearr_140140[(1)] = (1));
return statearr_140140;
});
var state_machine__6188__auto____1 = (function (state_140135){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140141){if((e140141 instanceof Object))
{var ex__6191__auto__ = e140141;var statearr_140142_140309 = state_140135;(statearr_140142_140309[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140310 = state_140135;
state_140135 = G__140310;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140135){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140143 = f__6203__auto__.call(null);(statearr_140143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_140143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140311,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140311,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140157){var state_val_140158 = (state_140157[(1)]);if((state_val_140158 === (4)))
{var inst_140147 = (state_140157[(2)]);var inst_140148 = cljs.core.nth.call(null,inst_140147,(0),null);var inst_140149 = cljs.core.nth.call(null,inst_140147,(1),null);var inst_140150 = cljs.core.nth.call(null,inst_140147,(2),null);var inst_140151 = [inst_140148,inst_140149,inst_140150];var inst_140152 = common.onModel.onNext(inst_140151);var state_140157__$1 = (function (){var statearr_140159 = state_140157;(statearr_140159[(7)] = inst_140152);
return statearr_140159;
})();var statearr_140160_140312 = state_140157__$1;(statearr_140160_140312[(2)] = null);
(statearr_140160_140312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140158 === (3)))
{var inst_140155 = (state_140157[(2)]);var state_140157__$1 = state_140157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140157__$1,inst_140155);
} else
{if((state_val_140158 === (2)))
{var state_140157__$1 = state_140157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140157__$1,(4),onModel);
} else
{if((state_val_140158 === (1)))
{var state_140157__$1 = state_140157;var statearr_140161_140313 = state_140157__$1;(statearr_140161_140313[(2)] = null);
(statearr_140161_140313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___140311,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140311,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140165 = [null,null,null,null,null,null,null,null];(statearr_140165[(0)] = state_machine__6188__auto__);
(statearr_140165[(1)] = (1));
return statearr_140165;
});
var state_machine__6188__auto____1 = (function (state_140157){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140166){if((e140166 instanceof Object))
{var ex__6191__auto__ = e140166;var statearr_140167_140314 = state_140157;(statearr_140167_140314[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140315 = state_140157;
state_140157 = G__140315;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140157){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140311,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140168 = f__6203__auto__.call(null);(statearr_140168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140311);
return statearr_140168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140311,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140316,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140316,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140181){var state_val_140182 = (state_140181[(1)]);if((state_val_140182 === (4)))
{var inst_140172 = (state_140181[(2)]);var inst_140173 = cljs.core.nth.call(null,inst_140172,(0),null);var inst_140174 = cljs.core.nth.call(null,inst_140172,(1),null);var inst_140175 = [inst_140173,inst_140174];var inst_140176 = common.onModelEvent.onNext(inst_140175);var state_140181__$1 = (function (){var statearr_140183 = state_140181;(statearr_140183[(7)] = inst_140176);
return statearr_140183;
})();var statearr_140184_140317 = state_140181__$1;(statearr_140184_140317[(2)] = null);
(statearr_140184_140317[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140182 === (3)))
{var inst_140179 = (state_140181[(2)]);var state_140181__$1 = state_140181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140181__$1,inst_140179);
} else
{if((state_val_140182 === (2)))
{var state_140181__$1 = state_140181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140181__$1,(4),onModelEvent);
} else
{if((state_val_140182 === (1)))
{var state_140181__$1 = state_140181;var statearr_140185_140318 = state_140181__$1;(statearr_140185_140318[(2)] = null);
(statearr_140185_140318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___140316,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140316,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140189 = [null,null,null,null,null,null,null,null];(statearr_140189[(0)] = state_machine__6188__auto__);
(statearr_140189[(1)] = (1));
return statearr_140189;
});
var state_machine__6188__auto____1 = (function (state_140181){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140181);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140190){if((e140190 instanceof Object))
{var ex__6191__auto__ = e140190;var statearr_140191_140319 = state_140181;(statearr_140191_140319[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140320 = state_140181;
state_140181 = G__140320;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140181){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140316,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140192 = f__6203__auto__.call(null);(statearr_140192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140316);
return statearr_140192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140316,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140321 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140321,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140321,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140211){var state_val_140212 = (state_140211[(1)]);if((state_val_140212 === (5)))
{var inst_140202 = (state_140211[(7)]);var inst_140195 = (state_140211[(8)]);var inst_140206 = (state_140211[(2)]);var tmp140213 = inst_140195;var inst_140195__$1 = tmp140213;var inst_140196 = inst_140202;var state_140211__$1 = (function (){var statearr_140214 = state_140211;(statearr_140214[(8)] = inst_140195__$1);
(statearr_140214[(9)] = inst_140196);
(statearr_140214[(10)] = inst_140206);
return statearr_140214;
})();var statearr_140215_140322 = state_140211__$1;(statearr_140215_140322[(2)] = null);
(statearr_140215_140322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140212 === (4)))
{var inst_140202 = (state_140211[(7)]);var inst_140196 = (state_140211[(9)]);var inst_140200 = (state_140211[(2)]);var inst_140201 = (new Date());var inst_140202__$1 = inst_140201.getTime();var inst_140203 = (inst_140202__$1 - inst_140196);var inst_140204 = (inst_140203 / (1000));var state_140211__$1 = (function (){var statearr_140216 = state_140211;(statearr_140216[(7)] = inst_140202__$1);
(statearr_140216[(11)] = inst_140200);
return statearr_140216;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140211__$1,(5),onTick,inst_140204);
} else
{if((state_val_140212 === (3)))
{var inst_140209 = (state_140211[(2)]);var state_140211__$1 = state_140211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140211__$1,inst_140209);
} else
{if((state_val_140212 === (2)))
{var inst_140195 = (state_140211[(8)]);var inst_140198 = cljs.core.async.timeout.call(null,inst_140195);var state_140211__$1 = state_140211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140211__$1,(4),inst_140198);
} else
{if((state_val_140212 === (1)))
{var inst_140193 = (new Date());var inst_140194 = inst_140193.getTime();var inst_140195 = mspf;var inst_140196 = inst_140194;var state_140211__$1 = (function (){var statearr_140217 = state_140211;(statearr_140217[(8)] = inst_140195);
(statearr_140217[(9)] = inst_140196);
return statearr_140217;
})();var statearr_140218_140323 = state_140211__$1;(statearr_140218_140323[(2)] = null);
(statearr_140218_140323[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___140321,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140321,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140222 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_140222[(0)] = state_machine__6188__auto__);
(statearr_140222[(1)] = (1));
return statearr_140222;
});
var state_machine__6188__auto____1 = (function (state_140211){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140211);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140223){if((e140223 instanceof Object))
{var ex__6191__auto__ = e140223;var statearr_140224_140324 = state_140211;(statearr_140224_140324[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140325 = state_140211;
state_140211 = G__140325;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140211){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140321,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140225 = f__6203__auto__.call(null);(statearr_140225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140321);
return statearr_140225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140321,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140326 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140279){var state_val_140280 = (state_140279[(1)]);if((state_val_140280 === (7)))
{var inst_140274 = (state_140279[(2)]);var inst_140235 = inst_140274;var state_140279__$1 = (function (){var statearr_140281 = state_140279;(statearr_140281[(7)] = inst_140235);
return statearr_140281;
})();var statearr_140282_140327 = state_140279__$1;(statearr_140282_140327[(2)] = null);
(statearr_140282_140327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (1)))
{var inst_140226 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_140227 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_140228 = cljs.core.List.EMPTY;var inst_140229 = [inst_140228,(200)];var inst_140230 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_140227,inst_140229);var inst_140231 = [(0),(0)];var inst_140232 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140231,null));var inst_140233 = [(0),inst_140230,inst_140232,onModel,gl__$1];var inst_140234 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_140226,inst_140233);var inst_140235 = inst_140234;var state_140279__$1 = (function (){var statearr_140283 = state_140279;(statearr_140283[(7)] = inst_140235);
return statearr_140283;
})();var statearr_140284_140328 = state_140279__$1;(statearr_140284_140328[(2)] = null);
(statearr_140284_140328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (4)))
{var inst_140241 = (state_140279[(8)]);var inst_140243 = (state_140279[(9)]);var inst_140241__$1 = (state_140279[(2)]);var inst_140242 = cljs.core.nth.call(null,inst_140241__$1,(0),null);var inst_140243__$1 = cljs.core.nth.call(null,inst_140241__$1,(1),null);var inst_140247 = cljs.core._EQ_.call(null,onTick,inst_140243__$1);var state_140279__$1 = (function (){var statearr_140285 = state_140279;(statearr_140285[(8)] = inst_140241__$1);
(statearr_140285[(10)] = inst_140242);
(statearr_140285[(9)] = inst_140243__$1);
return statearr_140285;
})();if(inst_140247)
{var statearr_140286_140329 = state_140279__$1;(statearr_140286_140329[(1)] = (5));
} else
{var statearr_140287_140330 = state_140279__$1;(statearr_140287_140330[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (6)))
{var inst_140243 = (state_140279[(9)]);var inst_140265 = cljs.core._EQ_.call(null,onView,inst_140243);var state_140279__$1 = state_140279;if(inst_140265)
{var statearr_140288_140331 = state_140279__$1;(statearr_140288_140331[(1)] = (8));
} else
{var statearr_140289_140332 = state_140279__$1;(statearr_140289_140332[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (3)))
{var inst_140277 = (state_140279[(2)]);var state_140279__$1 = state_140279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140279__$1,inst_140277);
} else
{if((state_val_140280 === (2)))
{var inst_140238 = [onView,onTick];var inst_140239 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140238,null));var state_140279__$1 = state_140279;return cljs.core.async.ioc_alts_BANG_.call(null,state_140279__$1,(4),inst_140239);
} else
{if((state_val_140280 === (9)))
{var inst_140235 = (state_140279[(7)]);var state_140279__$1 = state_140279;var statearr_140290_140333 = state_140279__$1;(statearr_140290_140333[(2)] = inst_140235);
(statearr_140290_140333[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (5)))
{var inst_140241 = (state_140279[(8)]);var inst_140242 = (state_140279[(10)]);var inst_140243 = (state_140279[(9)]);var inst_140235 = (state_140279[(7)]);var inst_140256 = cljs.core.async.chan.call(null,(1));var inst_140257 = (function (){var c__6202__auto____$1 = inst_140256;var expr__140245 = inst_140243;var pred__140244 = cljs.core._EQ_;var ch = inst_140243;var v = inst_140242;var vec__140237 = inst_140241;var ctx = inst_140235;return ((function (c__6202__auto____$1,expr__140245,pred__140244,ch,v,vec__140237,ctx,inst_140241,inst_140242,inst_140243,inst_140235,inst_140256,state_val_140280,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__140245,pred__140244,ch,v,vec__140237,ctx,inst_140241,inst_140242,inst_140243,inst_140235,inst_140256,state_val_140280,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140254){var state_val_140255 = (state_140254[(1)]);if((state_val_140255 === (2)))
{var inst_140252 = (state_140254[(2)]);var state_140254__$1 = state_140254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140254__$1,inst_140252);
} else
{if((state_val_140255 === (1)))
{var inst_140249 = ["tick",v];var inst_140250 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140249,null));var state_140254__$1 = state_140254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140254__$1,(2),onModelEvent,inst_140250);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__140245,pred__140244,ch,v,vec__140237,ctx,inst_140241,inst_140242,inst_140243,inst_140235,inst_140256,state_val_140280,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__140245,pred__140244,ch,v,vec__140237,ctx,inst_140241,inst_140242,inst_140243,inst_140235,inst_140256,state_val_140280,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140294 = [null,null,null,null,null,null,null];(statearr_140294[(0)] = state_machine__6188__auto__);
(statearr_140294[(1)] = (1));
return statearr_140294;
});
var state_machine__6188__auto____1 = (function (state_140254){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140295){if((e140295 instanceof Object))
{var ex__6191__auto__ = e140295;var statearr_140296_140334 = state_140254;(statearr_140296_140334[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140335 = state_140254;
state_140254 = G__140335;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140254){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__140245,pred__140244,ch,v,vec__140237,ctx,inst_140241,inst_140242,inst_140243,inst_140235,inst_140256,state_val_140280,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140297 = f__6203__auto__.call(null);(statearr_140297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_140297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__140245,pred__140244,ch,v,vec__140237,ctx,inst_140241,inst_140242,inst_140243,inst_140235,inst_140256,state_val_140280,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_140258 = cljs.core.async.impl.dispatch.run.call(null,inst_140257);var inst_140259 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_140260 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140259,null));var inst_140261 = cljs.core.partial.call(null,tool.particle.update,inst_140242);var inst_140262 = cljs.core.update_in.call(null,inst_140235,inst_140260,inst_140261);var inst_140263 = draw.call(null,inst_140262);var state_140279__$1 = (function (){var statearr_140298 = state_140279;(statearr_140298[(11)] = inst_140258);
return statearr_140298;
})();var statearr_140299_140336 = state_140279__$1;(statearr_140299_140336[(2)] = inst_140263);
(statearr_140299_140336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (10)))
{var inst_140272 = (state_140279[(2)]);var state_140279__$1 = state_140279;var statearr_140300_140337 = state_140279__$1;(statearr_140300_140337[(2)] = inst_140272);
(statearr_140300_140337[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140280 === (8)))
{var inst_140242 = (state_140279[(10)]);var inst_140235 = (state_140279[(7)]);var inst_140267 = (inst_140242[(0)]);var inst_140268 = (inst_140242[(1)]);var inst_140269 = app.particle.abstract$.onViewCommand.call(null,inst_140267,inst_140268,inst_140235);var state_140279__$1 = state_140279;var statearr_140301_140338 = state_140279__$1;(statearr_140301_140338[(2)] = inst_140269);
(statearr_140301_140338[(1)] = (10));
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
});})(c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140305 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_140305[(0)] = state_machine__6188__auto__);
(statearr_140305[(1)] = (1));
return statearr_140305;
});
var state_machine__6188__auto____1 = (function (state_140279){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140306){if((e140306 instanceof Object))
{var ex__6191__auto__ = e140306;var statearr_140307_140339 = state_140279;(statearr_140307_140339[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140340 = state_140279;
state_140279 = G__140340;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140279){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140308 = f__6203__auto__.call(null);(statearr_140308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140326);
return statearr_140308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140326,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
