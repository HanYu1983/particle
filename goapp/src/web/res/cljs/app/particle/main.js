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
app.particle.main.draw2D = app.particle.draw.draw2D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_36862){var state_val_36863 = (state_36862[(1)]);if((state_val_36863 === (2)))
{var inst_36860 = (state_36862[(2)]);var state_36862__$1 = state_36862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36862__$1,inst_36860);
} else
{if((state_val_36863 === (1)))
{var state_36862__$1 = state_36862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36862__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36867 = [null,null,null,null,null,null,null];(statearr_36867[(0)] = state_machine__6188__auto__);
(statearr_36867[(1)] = (1));
return statearr_36867;
});
var state_machine__6188__auto____1 = (function (state_36862){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36862);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36868){if((e36868 instanceof Object))
{var ex__6191__auto__ = e36868;var statearr_36869_37032 = state_36862;(statearr_36869_37032[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37033 = state_36862;
state_36862 = G__37033;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36862){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36870 = f__6203__auto__.call(null);(statearr_36870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_36870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___37034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___37034,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___37034,onView,onModel,onTick,mspf){
return (function (state_36879){var state_val_36880 = (state_36879[(1)]);if((state_val_36880 === (4)))
{var inst_36873 = (state_36879[(2)]);var inst_36874 = common.onModel.onNext(inst_36873);var state_36879__$1 = (function (){var statearr_36881 = state_36879;(statearr_36881[(7)] = inst_36874);
return statearr_36881;
})();var statearr_36882_37035 = state_36879__$1;(statearr_36882_37035[(2)] = null);
(statearr_36882_37035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36880 === (3)))
{var inst_36877 = (state_36879[(2)]);var state_36879__$1 = state_36879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36879__$1,inst_36877);
} else
{if((state_val_36880 === (2)))
{var state_36879__$1 = state_36879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36879__$1,(4),onModel);
} else
{if((state_val_36880 === (1)))
{var state_36879__$1 = state_36879;var statearr_36883_37036 = state_36879__$1;(statearr_36883_37036[(2)] = null);
(statearr_36883_37036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___37034,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___37034,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36887 = [null,null,null,null,null,null,null,null];(statearr_36887[(0)] = state_machine__6188__auto__);
(statearr_36887[(1)] = (1));
return statearr_36887;
});
var state_machine__6188__auto____1 = (function (state_36879){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36888){if((e36888 instanceof Object))
{var ex__6191__auto__ = e36888;var statearr_36889_37037 = state_36879;(statearr_36889_37037[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37038 = state_36879;
state_36879 = G__37038;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36879){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___37034,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36890 = f__6203__auto__.call(null);(statearr_36890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___37034);
return statearr_36890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___37034,onView,onModel,onTick,mspf))
);
var c__6202__auto___37039 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___37039,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___37039,onView,onModel,onTick,mspf){
return (function (state_36909){var state_val_36910 = (state_36909[(1)]);if((state_val_36910 === (5)))
{var inst_36893 = (state_36909[(7)]);var inst_36900 = (state_36909[(8)]);var inst_36904 = (state_36909[(2)]);var tmp36911 = inst_36893;var inst_36893__$1 = tmp36911;var inst_36894 = inst_36900;var state_36909__$1 = (function (){var statearr_36912 = state_36909;(statearr_36912[(7)] = inst_36893__$1);
(statearr_36912[(9)] = inst_36894);
(statearr_36912[(10)] = inst_36904);
return statearr_36912;
})();var statearr_36913_37040 = state_36909__$1;(statearr_36913_37040[(2)] = null);
(statearr_36913_37040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36910 === (4)))
{var inst_36900 = (state_36909[(8)]);var inst_36894 = (state_36909[(9)]);var inst_36898 = (state_36909[(2)]);var inst_36899 = (new Date());var inst_36900__$1 = inst_36899.getTime();var inst_36901 = (inst_36900__$1 - inst_36894);var inst_36902 = (inst_36901 / (1000));var state_36909__$1 = (function (){var statearr_36914 = state_36909;(statearr_36914[(11)] = inst_36898);
(statearr_36914[(8)] = inst_36900__$1);
return statearr_36914;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36909__$1,(5),onTick,inst_36902);
} else
{if((state_val_36910 === (3)))
{var inst_36907 = (state_36909[(2)]);var state_36909__$1 = state_36909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36909__$1,inst_36907);
} else
{if((state_val_36910 === (2)))
{var inst_36893 = (state_36909[(7)]);var inst_36896 = cljs.core.async.timeout.call(null,inst_36893);var state_36909__$1 = state_36909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(4),inst_36896);
} else
{if((state_val_36910 === (1)))
{var inst_36891 = (new Date());var inst_36892 = inst_36891.getTime();var inst_36893 = mspf;var inst_36894 = inst_36892;var state_36909__$1 = (function (){var statearr_36915 = state_36909;(statearr_36915[(7)] = inst_36893);
(statearr_36915[(9)] = inst_36894);
return statearr_36915;
})();var statearr_36916_37041 = state_36909__$1;(statearr_36916_37041[(2)] = null);
(statearr_36916_37041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___37039,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___37039,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36920 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36920[(0)] = state_machine__6188__auto__);
(statearr_36920[(1)] = (1));
return statearr_36920;
});
var state_machine__6188__auto____1 = (function (state_36909){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36909);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36921){if((e36921 instanceof Object))
{var ex__6191__auto__ = e36921;var statearr_36922_37042 = state_36909;(statearr_36922_37042[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36909);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37043 = state_36909;
state_36909 = G__37043;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36909){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___37039,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36923 = f__6203__auto__.call(null);(statearr_36923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___37039);
return statearr_36923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___37039,onView,onModel,onTick,mspf))
);
var c__6202__auto___37044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___37044,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___37044,onView,onModel,onTick,mspf){
return (function (state_36957){var state_val_36958 = (state_36957[(1)]);if((state_val_36958 === (5)))
{var inst_36955 = (state_36957[(2)]);var state_36957__$1 = state_36957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36957__$1,inst_36955);
} else
{if((state_val_36958 === (4)))
{var inst_36936 = (state_36957[(2)]);var inst_36943 = [(0),(0),(0)];var inst_36944 = [(10),(20)];var inst_36945 = [(100),(0),3.14];var inst_36946 = {"position":inst_36943,"size":inst_36944,"vel":inst_36945};var inst_36947 = [inst_36946];var inst_36948 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_36947};var inst_36949 = [(30),(10)];var inst_36950 = [(300),(300),(0)];var inst_36951 = [(100),(100),(0)];var inst_36952 = {"id":"x1","emit":inst_36948,"size":inst_36949,"pos":inst_36950,"vel":inst_36951};var inst_36953 = ["edit-particle",inst_36952];var state_36957__$1 = (function (){var statearr_36959 = state_36957;(statearr_36959[(7)] = inst_36936);
return statearr_36959;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36957__$1,(5),onView,inst_36953);
} else
{if((state_val_36958 === (3)))
{var inst_36933 = (state_36957[(2)]);var inst_36934 = cljs.core.async.timeout.call(null,(1100));var state_36957__$1 = (function (){var statearr_36960 = state_36957;(statearr_36960[(8)] = inst_36933);
return statearr_36960;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36957__$1,(4),inst_36934);
} else
{if((state_val_36958 === (2)))
{var inst_36926 = (state_36957[(2)]);var inst_36929 = [(300),(300),(0)];var inst_36930 = {"id":"x1","pos":inst_36929};var inst_36931 = ["edit-particle",inst_36930];var state_36957__$1 = (function (){var statearr_36961 = state_36957;(statearr_36961[(9)] = inst_36926);
return statearr_36961;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36957__$1,(3),onView,inst_36931);
} else
{if((state_val_36958 === (1)))
{var inst_36924 = cljs.core.async.timeout.call(null,(1000));var state_36957__$1 = state_36957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36957__$1,(2),inst_36924);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___37044,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___37044,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_36965 = [null,null,null,null,null,null,null,null,null,null];(statearr_36965[(0)] = state_machine__6188__auto__);
(statearr_36965[(1)] = (1));
return statearr_36965;
});
var state_machine__6188__auto____1 = (function (state_36957){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_36957);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e36966){if((e36966 instanceof Object))
{var ex__6191__auto__ = e36966;var statearr_36967_37045 = state_36957;(statearr_36967_37045[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e36966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37046 = state_36957;
state_36957 = G__37046;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_36957){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_36957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___37044,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_36968 = f__6203__auto__.call(null);(statearr_36968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___37044);
return statearr_36968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___37044,onView,onModel,onTick,mspf))
);
var c__6202__auto___37047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___37047,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___37047,onView,onModel,onTick,mspf){
return (function (state_37010){var state_val_37011 = (state_37010[(1)]);if((state_val_37011 === (7)))
{var inst_37005 = (state_37010[(2)]);var inst_36976 = inst_37005;var state_37010__$1 = (function (){var statearr_37012 = state_37010;(statearr_37012[(7)] = inst_36976);
return statearr_37012;
})();var statearr_37013_37048 = state_37010__$1;(statearr_37013_37048[(2)] = null);
(statearr_37013_37048[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (1)))
{var inst_36969 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_36970 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_36971 = cljs.core.List.EMPTY;var inst_36972 = [inst_36971];var inst_36973 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36970,inst_36972);var inst_36974 = [(0),inst_36973];var inst_36975 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_36969,inst_36974);var inst_36976 = inst_36975;var state_37010__$1 = (function (){var statearr_37014 = state_37010;(statearr_37014[(7)] = inst_36976);
return statearr_37014;
})();var statearr_37015_37049 = state_37010__$1;(statearr_37015_37049[(2)] = null);
(statearr_37015_37049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (4)))
{var inst_36984 = (state_37010[(8)]);var inst_36982 = (state_37010[(2)]);var inst_36983 = cljs.core.nth.call(null,inst_36982,(0),null);var inst_36984__$1 = cljs.core.nth.call(null,inst_36982,(1),null);var inst_36988 = cljs.core._EQ_.call(null,onTick,inst_36984__$1);var state_37010__$1 = (function (){var statearr_37016 = state_37010;(statearr_37016[(8)] = inst_36984__$1);
(statearr_37016[(9)] = inst_36983);
return statearr_37016;
})();if(inst_36988)
{var statearr_37017_37050 = state_37010__$1;(statearr_37017_37050[(1)] = (5));
} else
{var statearr_37018_37051 = state_37010__$1;(statearr_37018_37051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (6)))
{var inst_36984 = (state_37010[(8)]);var inst_36996 = cljs.core._EQ_.call(null,onView,inst_36984);var state_37010__$1 = state_37010;if(inst_36996)
{var statearr_37019_37052 = state_37010__$1;(statearr_37019_37052[(1)] = (8));
} else
{var statearr_37020_37053 = state_37010__$1;(statearr_37020_37053[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (3)))
{var inst_37008 = (state_37010[(2)]);var state_37010__$1 = state_37010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37010__$1,inst_37008);
} else
{if((state_val_37011 === (2)))
{var inst_36979 = [onView,onTick];var inst_36980 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36979,null));var state_37010__$1 = state_37010;return cljs.core.async.ioc_alts_BANG_.call(null,state_37010__$1,(4),inst_36980);
} else
{if((state_val_37011 === (9)))
{var inst_36976 = (state_37010[(7)]);var state_37010__$1 = state_37010;var statearr_37021_37054 = state_37010__$1;(statearr_37021_37054[(2)] = inst_36976);
(statearr_37021_37054[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (5)))
{var inst_36976 = (state_37010[(7)]);var inst_36983 = (state_37010[(9)]);var inst_36990 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_36991 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36990,null));var inst_36992 = cljs.core.partial.call(null,tool.particle.update,inst_36983);var inst_36993 = cljs.core.update_in.call(null,inst_36976,inst_36991,inst_36992);var inst_36994 = app.particle.main.draw2D.call(null,inst_36993);var state_37010__$1 = state_37010;var statearr_37022_37055 = state_37010__$1;(statearr_37022_37055[(2)] = inst_36994);
(statearr_37022_37055[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (10)))
{var inst_37003 = (state_37010[(2)]);var state_37010__$1 = state_37010;var statearr_37023_37056 = state_37010__$1;(statearr_37023_37056[(2)] = inst_37003);
(statearr_37023_37056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37011 === (8)))
{var inst_36976 = (state_37010[(7)]);var inst_36983 = (state_37010[(9)]);var inst_36998 = (inst_36983[(0)]);var inst_36999 = (inst_36983[(1)]);var inst_37000 = app.particle.abstract$.onViewCommand.call(null,inst_36998,inst_36999,inst_36976);var state_37010__$1 = state_37010;var statearr_37024_37057 = state_37010__$1;(statearr_37024_37057[(2)] = inst_37000);
(statearr_37024_37057[(1)] = (10));
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
});})(c__6202__auto___37047,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___37047,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_37028 = [null,null,null,null,null,null,null,null,null,null];(statearr_37028[(0)] = state_machine__6188__auto__);
(statearr_37028[(1)] = (1));
return statearr_37028;
});
var state_machine__6188__auto____1 = (function (state_37010){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_37010);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e37029){if((e37029 instanceof Object))
{var ex__6191__auto__ = e37029;var statearr_37030_37058 = state_37010;(statearr_37030_37058[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e37029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37059 = state_37010;
state_37010 = G__37059;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_37010){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_37010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___37047,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_37031 = f__6203__auto__.call(null);(statearr_37031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___37047);
return statearr_37031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___37047,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
