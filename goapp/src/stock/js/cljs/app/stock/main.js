// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.main.main = (function main(){var onView_44022 = cljs.core.async.chan.call(null);var onModel_44023 = cljs.core.async.chan.call(null);var onSys_44024 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_44022,onModel_44023,onSys_44024){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_44022,onModel_44023,onSys_44024){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_44022,onModel_44023,onSys_44024){
return (function (state_43935){var state_val_43936 = (state_43935[(1)]);if((state_val_43936 === (2)))
{var inst_43933 = (state_43935[(2)]);var state_43935__$1 = state_43935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43935__$1,inst_43933);
} else
{if((state_val_43936 === (1)))
{var state_43935__$1 = state_43935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43935__$1,(2),onView_44022,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_44022,onModel_44023,onSys_44024))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_44022,onModel_44023,onSys_44024){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_43940 = [null,null,null,null,null,null,null];(statearr_43940[(0)] = state_machine__6188__auto__);
(statearr_43940[(1)] = (1));
return statearr_43940;
});
var state_machine__6188__auto____1 = (function (state_43935){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_43935);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e43941){if((e43941 instanceof Object))
{var ex__6191__auto__ = e43941;var statearr_43942_44025 = state_43935;(statearr_43942_44025[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e43941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44026 = state_43935;
state_43935 = G__44026;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_43935){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_43935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_44022,onModel_44023,onSys_44024))
})();var state__6204__auto__ = (function (){var statearr_43943 = f__6203__auto__.call(null);(statearr_43943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_43943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_44022,onModel_44023,onSys_44024))
);
return c__6202__auto__;
});})(onView_44022,onModel_44023,onSys_44024))
);
var c__6202__auto___44027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44027,onView_44022,onModel_44023,onSys_44024){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44027,onView_44022,onModel_44023,onSys_44024){
return (function (state_43952){var state_val_43953 = (state_43952[(1)]);if((state_val_43953 === (4)))
{var inst_43946 = (state_43952[(2)]);var inst_43947 = common.onModel.onNext(inst_43946);var state_43952__$1 = (function (){var statearr_43954 = state_43952;(statearr_43954[(7)] = inst_43947);
return statearr_43954;
})();var statearr_43955_44028 = state_43952__$1;(statearr_43955_44028[(2)] = null);
(statearr_43955_44028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43953 === (3)))
{var inst_43950 = (state_43952[(2)]);var state_43952__$1 = state_43952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43952__$1,inst_43950);
} else
{if((state_val_43953 === (2)))
{var state_43952__$1 = state_43952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43952__$1,(4),onModel_44023);
} else
{if((state_val_43953 === (1)))
{var state_43952__$1 = state_43952;var statearr_43956_44029 = state_43952__$1;(statearr_43956_44029[(2)] = null);
(statearr_43956_44029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___44027,onView_44022,onModel_44023,onSys_44024))
;return ((function (switch__6187__auto__,c__6202__auto___44027,onView_44022,onModel_44023,onSys_44024){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_43960 = [null,null,null,null,null,null,null,null];(statearr_43960[(0)] = state_machine__6188__auto__);
(statearr_43960[(1)] = (1));
return statearr_43960;
});
var state_machine__6188__auto____1 = (function (state_43952){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_43952);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e43961){if((e43961 instanceof Object))
{var ex__6191__auto__ = e43961;var statearr_43962_44030 = state_43952;(statearr_43962_44030[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e43961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44031 = state_43952;
state_43952 = G__44031;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_43952){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_43952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44027,onView_44022,onModel_44023,onSys_44024))
})();var state__6204__auto__ = (function (){var statearr_43963 = f__6203__auto__.call(null);(statearr_43963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44027);
return statearr_43963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44027,onView_44022,onModel_44023,onSys_44024))
);
var c__6202__auto___44032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44032,onView_44022,onModel_44023,onSys_44024){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44032,onView_44022,onModel_44023,onSys_44024){
return (function (state_44000){var state_val_44001 = (state_44000[(1)]);if((state_val_44001 === (7)))
{var inst_43995 = (state_44000[(2)]);var inst_43967 = inst_43995;var state_44000__$1 = (function (){var statearr_44002 = state_44000;(statearr_44002[(7)] = inst_43967);
return statearr_44002;
})();var statearr_44003_44033 = state_44000__$1;(statearr_44003_44033[(2)] = null);
(statearr_44003_44033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (1)))
{var inst_43964 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_43965 = [onView_44022,onModel_44023,onSys_44024,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_43966 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_43964,inst_43965);var inst_43967 = inst_43966;var state_44000__$1 = (function (){var statearr_44004 = state_44000;(statearr_44004[(7)] = inst_43967);
return statearr_44004;
})();var statearr_44005_44034 = state_44000__$1;(statearr_44005_44034[(2)] = null);
(statearr_44005_44034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (4)))
{var inst_43975 = (state_44000[(8)]);var inst_43973 = (state_44000[(2)]);var inst_43974 = cljs.core.nth.call(null,inst_43973,(0),null);var inst_43975__$1 = cljs.core.nth.call(null,inst_43973,(1),null);var inst_43979 = cljs.core._EQ_.call(null,onSys_44024,inst_43975__$1);var state_44000__$1 = (function (){var statearr_44006 = state_44000;(statearr_44006[(8)] = inst_43975__$1);
(statearr_44006[(9)] = inst_43974);
return statearr_44006;
})();if(inst_43979)
{var statearr_44007_44035 = state_44000__$1;(statearr_44007_44035[(1)] = (5));
} else
{var statearr_44008_44036 = state_44000__$1;(statearr_44008_44036[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (6)))
{var inst_43975 = (state_44000[(8)]);var inst_43986 = cljs.core._EQ_.call(null,onView_44022,inst_43975);var state_44000__$1 = state_44000;if(inst_43986)
{var statearr_44009_44037 = state_44000__$1;(statearr_44009_44037[(1)] = (8));
} else
{var statearr_44010_44038 = state_44000__$1;(statearr_44010_44038[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (3)))
{var inst_43998 = (state_44000[(2)]);var state_44000__$1 = state_44000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44000__$1,inst_43998);
} else
{if((state_val_44001 === (2)))
{var inst_43970 = [onView_44022,onSys_44024];var inst_43971 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_43970,null));var state_44000__$1 = state_44000;return cljs.core.async.ioc_alts_BANG_.call(null,state_44000__$1,(4),inst_43971);
} else
{if((state_val_44001 === (9)))
{var inst_43967 = (state_44000[(7)]);var state_44000__$1 = state_44000;var statearr_44011_44039 = state_44000__$1;(statearr_44011_44039[(2)] = inst_43967);
(statearr_44011_44039[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (5)))
{var inst_43974 = (state_44000[(9)]);var inst_43967 = (state_44000[(7)]);var inst_43982 = cljs.core.nth.call(null,inst_43974,(0),null);var inst_43983 = cljs.core.nth.call(null,inst_43974,(1),null);var inst_43984 = app.stock.abstract$.onSystem.call(null,inst_43982,inst_43983,inst_43967);var state_44000__$1 = state_44000;var statearr_44012_44040 = state_44000__$1;(statearr_44012_44040[(2)] = inst_43984);
(statearr_44012_44040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (10)))
{var inst_43993 = (state_44000[(2)]);var state_44000__$1 = state_44000;var statearr_44013_44041 = state_44000__$1;(statearr_44013_44041[(2)] = inst_43993);
(statearr_44013_44041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44001 === (8)))
{var inst_43974 = (state_44000[(9)]);var inst_43967 = (state_44000[(7)]);var inst_43988 = (inst_43974[(0)]);var inst_43989 = (inst_43974[(1)]);var inst_43990 = app.stock.abstract$.onViewCommand.call(null,inst_43988,inst_43989,inst_43967);var state_44000__$1 = state_44000;var statearr_44014_44042 = state_44000__$1;(statearr_44014_44042[(2)] = inst_43990);
(statearr_44014_44042[(1)] = (10));
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
});})(c__6202__auto___44032,onView_44022,onModel_44023,onSys_44024))
;return ((function (switch__6187__auto__,c__6202__auto___44032,onView_44022,onModel_44023,onSys_44024){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44018 = [null,null,null,null,null,null,null,null,null,null];(statearr_44018[(0)] = state_machine__6188__auto__);
(statearr_44018[(1)] = (1));
return statearr_44018;
});
var state_machine__6188__auto____1 = (function (state_44000){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44000);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44019){if((e44019 instanceof Object))
{var ex__6191__auto__ = e44019;var statearr_44020_44043 = state_44000;(statearr_44020_44043[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44044 = state_44000;
state_44000 = G__44044;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44000){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44032,onView_44022,onModel_44023,onSys_44024))
})();var state__6204__auto__ = (function (){var statearr_44021 = f__6203__auto__.call(null);(statearr_44021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44032);
return statearr_44021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44032,onView_44022,onModel_44023,onSys_44024))
);
return null;
});
app.stock.main.main.call(null);
