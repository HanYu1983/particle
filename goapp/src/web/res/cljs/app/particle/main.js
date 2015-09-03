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
return (function (state_78882){var state_val_78883 = (state_78882[(1)]);if((state_val_78883 === (2)))
{var inst_78880 = (state_78882[(2)]);var state_78882__$1 = state_78882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78882__$1,inst_78880);
} else
{if((state_val_78883 === (1)))
{var state_78882__$1 = state_78882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78882__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78887 = [null,null,null,null,null,null,null];(statearr_78887[(0)] = state_machine__6188__auto__);
(statearr_78887[(1)] = (1));
return statearr_78887;
});
var state_machine__6188__auto____1 = (function (state_78882){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78888){if((e78888 instanceof Object))
{var ex__6191__auto__ = e78888;var statearr_78889_79066 = state_78882;(statearr_78889_79066[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79067 = state_78882;
state_78882 = G__79067;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78882){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78890 = f__6203__auto__.call(null);(statearr_78890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___79068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___79068,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___79068,onView,onModel,onTick,mspf){
return (function (state_78904){var state_val_78905 = (state_78904[(1)]);if((state_val_78905 === (4)))
{var inst_78894 = (state_78904[(2)]);var inst_78895 = cljs.core.nth.call(null,inst_78894,(0),null);var inst_78896 = cljs.core.nth.call(null,inst_78894,(1),null);var inst_78897 = cljs.core.nth.call(null,inst_78894,(2),null);var inst_78898 = [inst_78895,inst_78896,inst_78897];var inst_78899 = common.onModel.onNext(inst_78898);var state_78904__$1 = (function (){var statearr_78906 = state_78904;(statearr_78906[(7)] = inst_78899);
return statearr_78906;
})();var statearr_78907_79069 = state_78904__$1;(statearr_78907_79069[(2)] = null);
(statearr_78907_79069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78905 === (3)))
{var inst_78902 = (state_78904[(2)]);var state_78904__$1 = state_78904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78904__$1,inst_78902);
} else
{if((state_val_78905 === (2)))
{var state_78904__$1 = state_78904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78904__$1,(4),onModel);
} else
{if((state_val_78905 === (1)))
{var state_78904__$1 = state_78904;var statearr_78908_79070 = state_78904__$1;(statearr_78908_79070[(2)] = null);
(statearr_78908_79070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___79068,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___79068,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78912 = [null,null,null,null,null,null,null,null];(statearr_78912[(0)] = state_machine__6188__auto__);
(statearr_78912[(1)] = (1));
return statearr_78912;
});
var state_machine__6188__auto____1 = (function (state_78904){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78904);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78913){if((e78913 instanceof Object))
{var ex__6191__auto__ = e78913;var statearr_78914_79071 = state_78904;(statearr_78914_79071[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78904);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79072 = state_78904;
state_78904 = G__79072;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78904){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___79068,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78915 = f__6203__auto__.call(null);(statearr_78915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___79068);
return statearr_78915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___79068,onView,onModel,onTick,mspf))
);
var c__6202__auto___79073 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___79073,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___79073,onView,onModel,onTick,mspf){
return (function (state_78934){var state_val_78935 = (state_78934[(1)]);if((state_val_78935 === (5)))
{var inst_78918 = (state_78934[(7)]);var inst_78925 = (state_78934[(8)]);var inst_78929 = (state_78934[(2)]);var tmp78936 = inst_78918;var inst_78918__$1 = tmp78936;var inst_78919 = inst_78925;var state_78934__$1 = (function (){var statearr_78937 = state_78934;(statearr_78937[(7)] = inst_78918__$1);
(statearr_78937[(9)] = inst_78929);
(statearr_78937[(10)] = inst_78919);
return statearr_78937;
})();var statearr_78938_79074 = state_78934__$1;(statearr_78938_79074[(2)] = null);
(statearr_78938_79074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78935 === (4)))
{var inst_78925 = (state_78934[(8)]);var inst_78919 = (state_78934[(10)]);var inst_78923 = (state_78934[(2)]);var inst_78924 = (new Date());var inst_78925__$1 = inst_78924.getTime();var inst_78926 = (inst_78925__$1 - inst_78919);var inst_78927 = (inst_78926 / (1000));var state_78934__$1 = (function (){var statearr_78939 = state_78934;(statearr_78939[(8)] = inst_78925__$1);
(statearr_78939[(11)] = inst_78923);
return statearr_78939;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78934__$1,(5),onTick,inst_78927);
} else
{if((state_val_78935 === (3)))
{var inst_78932 = (state_78934[(2)]);var state_78934__$1 = state_78934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78934__$1,inst_78932);
} else
{if((state_val_78935 === (2)))
{var inst_78918 = (state_78934[(7)]);var inst_78921 = cljs.core.async.timeout.call(null,inst_78918);var state_78934__$1 = state_78934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78934__$1,(4),inst_78921);
} else
{if((state_val_78935 === (1)))
{var inst_78916 = (new Date());var inst_78917 = inst_78916.getTime();var inst_78918 = mspf;var inst_78919 = inst_78917;var state_78934__$1 = (function (){var statearr_78940 = state_78934;(statearr_78940[(7)] = inst_78918);
(statearr_78940[(10)] = inst_78919);
return statearr_78940;
})();var statearr_78941_79075 = state_78934__$1;(statearr_78941_79075[(2)] = null);
(statearr_78941_79075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___79073,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___79073,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78945 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78945[(0)] = state_machine__6188__auto__);
(statearr_78945[(1)] = (1));
return statearr_78945;
});
var state_machine__6188__auto____1 = (function (state_78934){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78934);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78946){if((e78946 instanceof Object))
{var ex__6191__auto__ = e78946;var statearr_78947_79076 = state_78934;(statearr_78947_79076[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79077 = state_78934;
state_78934 = G__79077;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78934){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___79073,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_78948 = f__6203__auto__.call(null);(statearr_78948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___79073);
return statearr_78948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___79073,onView,onModel,onTick,mspf))
);
var c__6202__auto___79078 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___79078,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___79078,onView,onModel,onTick,mspf){
return (function (state_78992){var state_val_78993 = (state_78992[(1)]);if((state_val_78993 === (7)))
{var inst_78987 = (state_78992[(2)]);var inst_78958 = inst_78987;var state_78992__$1 = (function (){var statearr_78994 = state_78992;(statearr_78994[(7)] = inst_78958);
return statearr_78994;
})();var statearr_78995_79079 = state_78992__$1;(statearr_78995_79079[(2)] = null);
(statearr_78995_79079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (1)))
{var inst_78949 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_78950 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_78951 = cljs.core.List.EMPTY;var inst_78952 = [inst_78951];var inst_78953 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78950,inst_78952);var inst_78954 = [(0),(0)];var inst_78955 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78954,null));var inst_78956 = [(0),inst_78953,inst_78955,onModel];var inst_78957 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78949,inst_78956);var inst_78958 = inst_78957;var state_78992__$1 = (function (){var statearr_78996 = state_78992;(statearr_78996[(7)] = inst_78958);
return statearr_78996;
})();var statearr_78997_79080 = state_78992__$1;(statearr_78997_79080[(2)] = null);
(statearr_78997_79080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (4)))
{var inst_78966 = (state_78992[(8)]);var inst_78964 = (state_78992[(2)]);var inst_78965 = cljs.core.nth.call(null,inst_78964,(0),null);var inst_78966__$1 = cljs.core.nth.call(null,inst_78964,(1),null);var inst_78970 = cljs.core._EQ_.call(null,onTick,inst_78966__$1);var state_78992__$1 = (function (){var statearr_78998 = state_78992;(statearr_78998[(9)] = inst_78965);
(statearr_78998[(8)] = inst_78966__$1);
return statearr_78998;
})();if(inst_78970)
{var statearr_78999_79081 = state_78992__$1;(statearr_78999_79081[(1)] = (5));
} else
{var statearr_79000_79082 = state_78992__$1;(statearr_79000_79082[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (6)))
{var inst_78966 = (state_78992[(8)]);var inst_78978 = cljs.core._EQ_.call(null,onView,inst_78966);var state_78992__$1 = state_78992;if(inst_78978)
{var statearr_79001_79083 = state_78992__$1;(statearr_79001_79083[(1)] = (8));
} else
{var statearr_79002_79084 = state_78992__$1;(statearr_79002_79084[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (3)))
{var inst_78990 = (state_78992[(2)]);var state_78992__$1 = state_78992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78992__$1,inst_78990);
} else
{if((state_val_78993 === (2)))
{var inst_78961 = [onView,onTick];var inst_78962 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78961,null));var state_78992__$1 = state_78992;return cljs.core.async.ioc_alts_BANG_.call(null,state_78992__$1,(4),inst_78962);
} else
{if((state_val_78993 === (9)))
{var inst_78958 = (state_78992[(7)]);var state_78992__$1 = state_78992;var statearr_79003_79085 = state_78992__$1;(statearr_79003_79085[(2)] = inst_78958);
(statearr_79003_79085[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (5)))
{var inst_78965 = (state_78992[(9)]);var inst_78958 = (state_78992[(7)]);var inst_78972 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_78973 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78972,null));var inst_78974 = cljs.core.partial.call(null,tool.particle.update,inst_78965);var inst_78975 = cljs.core.update_in.call(null,inst_78958,inst_78973,inst_78974);var inst_78976 = app.particle.main.draw.call(null,inst_78975);var state_78992__$1 = state_78992;var statearr_79004_79086 = state_78992__$1;(statearr_79004_79086[(2)] = inst_78976);
(statearr_79004_79086[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (10)))
{var inst_78985 = (state_78992[(2)]);var state_78992__$1 = state_78992;var statearr_79005_79087 = state_78992__$1;(statearr_79005_79087[(2)] = inst_78985);
(statearr_79005_79087[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78993 === (8)))
{var inst_78965 = (state_78992[(9)]);var inst_78958 = (state_78992[(7)]);var inst_78980 = (inst_78965[(0)]);var inst_78981 = (inst_78965[(1)]);var inst_78982 = app.particle.abstract$.onViewCommand.call(null,inst_78980,inst_78981,inst_78958);var state_78992__$1 = state_78992;var statearr_79006_79088 = state_78992__$1;(statearr_79006_79088[(2)] = inst_78982);
(statearr_79006_79088[(1)] = (10));
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
});})(c__6202__auto___79078,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___79078,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_79010 = [null,null,null,null,null,null,null,null,null,null];(statearr_79010[(0)] = state_machine__6188__auto__);
(statearr_79010[(1)] = (1));
return statearr_79010;
});
var state_machine__6188__auto____1 = (function (state_78992){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78992);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e79011){if((e79011 instanceof Object))
{var ex__6191__auto__ = e79011;var statearr_79012_79089 = state_78992;(statearr_79012_79089[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e79011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79090 = state_78992;
state_78992 = G__79090;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78992){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___79078,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_79013 = f__6203__auto__.call(null);(statearr_79013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___79078);
return statearr_79013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___79078,onView,onModel,onTick,mspf))
);
var c__6202__auto___79091 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___79091,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___79091,onView,onModel,onTick,mspf){
return (function (state_79054){var state_val_79055 = (state_79054[(1)]);if((state_val_79055 === (5)))
{var inst_79052 = (state_79054[(2)]);var state_79054__$1 = state_79054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79054__$1,inst_79052);
} else
{if((state_val_79055 === (4)))
{var inst_79026 = (state_79054[(2)]);var inst_79033 = [(0),(0),(0)];var inst_79034 = [(1),(0),(1),(1)];var inst_79035 = [(10),(20)];var inst_79036 = [(0),(0),3.14];var inst_79037 = {"position":inst_79033,"color":inst_79034,"size":inst_79035,"vel":inst_79036};var inst_79038 = [inst_79037];var inst_79039 = {"duration":0.05,"angle":(0),"force":(200),"range":(0),"prototype":inst_79038};var inst_79040 = [(0),(0),(1),(1)];var inst_79041 = [(30),(10)];var inst_79042 = [(10),(10),(0)];var inst_79043 = [(0),(0),(0)];var inst_79044 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_79045 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_79046 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_79047 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_79048 = [inst_79044,inst_79045,inst_79046,inst_79047];var inst_79049 = {"id":"x1","emit":inst_79039,"color":inst_79040,"size":inst_79041,"pos":inst_79042,"vel":inst_79043,"formulaList":inst_79048};var inst_79050 = ["edit-particle",inst_79049];var state_79054__$1 = (function (){var statearr_79056 = state_79054;(statearr_79056[(7)] = inst_79026);
return statearr_79056;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79054__$1,(5),onView,inst_79050);
} else
{if((state_val_79055 === (3)))
{var inst_79023 = (state_79054[(2)]);var inst_79024 = cljs.core.async.timeout.call(null,(1100));var state_79054__$1 = (function (){var statearr_79057 = state_79054;(statearr_79057[(8)] = inst_79023);
return statearr_79057;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79054__$1,(4),inst_79024);
} else
{if((state_val_79055 === (2)))
{var inst_79016 = (state_79054[(2)]);var inst_79019 = [(10),(10),(0)];var inst_79020 = {"id":"x1","pos":inst_79019};var inst_79021 = ["edit-particle",inst_79020];var state_79054__$1 = (function (){var statearr_79058 = state_79054;(statearr_79058[(9)] = inst_79016);
return statearr_79058;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79054__$1,(3),onView,inst_79021);
} else
{if((state_val_79055 === (1)))
{var inst_79014 = cljs.core.async.timeout.call(null,(1000));var state_79054__$1 = state_79054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79054__$1,(2),inst_79014);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___79091,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___79091,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_79062 = [null,null,null,null,null,null,null,null,null,null];(statearr_79062[(0)] = state_machine__6188__auto__);
(statearr_79062[(1)] = (1));
return statearr_79062;
});
var state_machine__6188__auto____1 = (function (state_79054){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_79054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e79063){if((e79063 instanceof Object))
{var ex__6191__auto__ = e79063;var statearr_79064_79092 = state_79054;(statearr_79064_79092[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e79063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79093 = state_79054;
state_79054 = G__79093;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_79054){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_79054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___79091,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_79065 = f__6203__auto__.call(null);(statearr_79065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___79091);
return statearr_79065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___79091,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
