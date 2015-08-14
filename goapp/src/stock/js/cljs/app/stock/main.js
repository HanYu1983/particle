// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.abstract$');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.abstract$');
goog.require('app.stock.impl');
app.stock.main.main = (function main(){var onView_19974 = cljs.core.async.chan.call(null);var onModel_19975 = cljs.core.async.chan.call(null);var onSys_19976 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_19974,onModel_19975,onSys_19976){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_19974,onModel_19975,onSys_19976){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_19974,onModel_19975,onSys_19976){
return (function (state_19875){var state_val_19876 = (state_19875[(1)]);if((state_val_19876 === (2)))
{var inst_19873 = (state_19875[(2)]);var state_19875__$1 = state_19875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19875__$1,inst_19873);
} else
{if((state_val_19876 === (1)))
{var state_19875__$1 = state_19875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19875__$1,(2),onView_19974,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_19974,onModel_19975,onSys_19976))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_19974,onModel_19975,onSys_19976){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19880 = [null,null,null,null,null,null,null];(statearr_19880[(0)] = state_machine__6188__auto__);
(statearr_19880[(1)] = (1));
return statearr_19880;
});
var state_machine__6188__auto____1 = (function (state_19875){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19875);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19881){if((e19881 instanceof Object))
{var ex__6191__auto__ = e19881;var statearr_19882_19977 = state_19875;(statearr_19882_19977[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19875);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19978 = state_19875;
state_19875 = G__19978;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19875){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_19974,onModel_19975,onSys_19976))
})();var state__6204__auto__ = (function (){var statearr_19883 = f__6203__auto__.call(null);(statearr_19883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_19883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_19974,onModel_19975,onSys_19976))
);
return c__6202__auto__;
});})(onView_19974,onModel_19975,onSys_19976))
);
var c__6202__auto___19979 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___19979,onView_19974,onModel_19975,onSys_19976){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___19979,onView_19974,onModel_19975,onSys_19976){
return (function (state_19892){var state_val_19893 = (state_19892[(1)]);if((state_val_19893 === (4)))
{var inst_19886 = (state_19892[(2)]);var inst_19887 = common.onModel(inst_19886);var state_19892__$1 = (function (){var statearr_19894 = state_19892;(statearr_19894[(7)] = inst_19887);
return statearr_19894;
})();var statearr_19895_19980 = state_19892__$1;(statearr_19895_19980[(2)] = null);
(statearr_19895_19980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19893 === (3)))
{var inst_19890 = (state_19892[(2)]);var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19892__$1,inst_19890);
} else
{if((state_val_19893 === (2)))
{var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19892__$1,(4),onModel_19975);
} else
{if((state_val_19893 === (1)))
{var state_19892__$1 = state_19892;var statearr_19896_19981 = state_19892__$1;(statearr_19896_19981[(2)] = null);
(statearr_19896_19981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___19979,onView_19974,onModel_19975,onSys_19976))
;return ((function (switch__6187__auto__,c__6202__auto___19979,onView_19974,onModel_19975,onSys_19976){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19900 = [null,null,null,null,null,null,null,null];(statearr_19900[(0)] = state_machine__6188__auto__);
(statearr_19900[(1)] = (1));
return statearr_19900;
});
var state_machine__6188__auto____1 = (function (state_19892){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19892);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19901){if((e19901 instanceof Object))
{var ex__6191__auto__ = e19901;var statearr_19902_19982 = state_19892;(statearr_19902_19982[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19983 = state_19892;
state_19892 = G__19983;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___19979,onView_19974,onModel_19975,onSys_19976))
})();var state__6204__auto__ = (function (){var statearr_19903 = f__6203__auto__.call(null);(statearr_19903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___19979);
return statearr_19903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___19979,onView_19974,onModel_19975,onSys_19976))
);
var c__6202__auto___19984 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___19984,onView_19974,onModel_19975,onSys_19976){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___19984,onView_19974,onModel_19975,onSys_19976){
return (function (state_19948){var state_val_19949 = (state_19948[(1)]);if((state_val_19949 === (7)))
{var inst_19943 = (state_19948[(2)]);var inst_19907 = inst_19943;var state_19948__$1 = (function (){var statearr_19950 = state_19948;(statearr_19950[(7)] = inst_19907);
return statearr_19950;
})();var statearr_19951_19985 = state_19948__$1;(statearr_19951_19985[(2)] = null);
(statearr_19951_19985[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (1)))
{var inst_19904 = [new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022)];var inst_19905 = [onModel_19975,onSys_19976,cljs.core.PersistentHashMap.EMPTY];var inst_19906 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19904,inst_19905);var inst_19907 = inst_19906;var state_19948__$1 = (function (){var statearr_19952 = state_19948;(statearr_19952[(7)] = inst_19907);
return statearr_19952;
})();var statearr_19953_19986 = state_19948__$1;(statearr_19953_19986[(2)] = null);
(statearr_19953_19986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (4)))
{var inst_19915 = (state_19948[(8)]);var inst_19913 = (state_19948[(2)]);var inst_19914 = cljs.core.nth.call(null,inst_19913,(0),null);var inst_19915__$1 = cljs.core.nth.call(null,inst_19913,(1),null);var inst_19919 = cljs.core._EQ_.call(null,onSys_19976,inst_19915__$1);var state_19948__$1 = (function (){var statearr_19954 = state_19948;(statearr_19954[(9)] = inst_19914);
(statearr_19954[(8)] = inst_19915__$1);
return statearr_19954;
})();if(inst_19919)
{var statearr_19955_19987 = state_19948__$1;(statearr_19955_19987[(1)] = (5));
} else
{var statearr_19956_19988 = state_19948__$1;(statearr_19956_19988[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (13)))
{var inst_19939 = (state_19948[(2)]);var state_19948__$1 = state_19948;var statearr_19957_19989 = state_19948__$1;(statearr_19957_19989[(2)] = inst_19939);
(statearr_19957_19989[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (6)))
{var inst_19915 = (state_19948[(8)]);var inst_19926 = cljs.core._EQ_.call(null,onView_19974,inst_19915);var state_19948__$1 = state_19948;if(inst_19926)
{var statearr_19958_19990 = state_19948__$1;(statearr_19958_19990[(1)] = (8));
} else
{var statearr_19959_19991 = state_19948__$1;(statearr_19959_19991[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (3)))
{var inst_19946 = (state_19948[(2)]);var state_19948__$1 = state_19948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19948__$1,inst_19946);
} else
{if((state_val_19949 === (12)))
{var inst_19915 = (state_19948[(8)]);var inst_19935 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19915));var inst_19936 = (new Error(inst_19935));var inst_19937 = (function(){throw inst_19936})();var state_19948__$1 = state_19948;var statearr_19960_19992 = state_19948__$1;(statearr_19960_19992[(2)] = inst_19937);
(statearr_19960_19992[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (2)))
{var inst_19910 = [onView_19974,onSys_19976];var inst_19911 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19910,null));var state_19948__$1 = state_19948;return cljs.core.async.ioc_alts_BANG_.call(null,state_19948__$1,(4),inst_19911);
} else
{if((state_val_19949 === (11)))
{var inst_19907 = (state_19948[(7)]);var state_19948__$1 = state_19948;var statearr_19961_19993 = state_19948__$1;(statearr_19961_19993[(2)] = inst_19907);
(statearr_19961_19993[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (9)))
{var inst_19915 = (state_19948[(8)]);var inst_19932 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_19915);var state_19948__$1 = state_19948;if(inst_19932)
{var statearr_19962_19994 = state_19948__$1;(statearr_19962_19994[(1)] = (11));
} else
{var statearr_19963_19995 = state_19948__$1;(statearr_19963_19995[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (5)))
{var inst_19914 = (state_19948[(9)]);var inst_19907 = (state_19948[(7)]);var inst_19922 = cljs.core.nth.call(null,inst_19914,(0),null);var inst_19923 = cljs.core.nth.call(null,inst_19914,(1),null);var inst_19924 = app.stock.abstract$.onSystem.call(null,inst_19922,inst_19923,inst_19907);var state_19948__$1 = state_19948;var statearr_19964_19996 = state_19948__$1;(statearr_19964_19996[(2)] = inst_19924);
(statearr_19964_19996[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (10)))
{var inst_19941 = (state_19948[(2)]);var state_19948__$1 = state_19948;var statearr_19965_19997 = state_19948__$1;(statearr_19965_19997[(2)] = inst_19941);
(statearr_19965_19997[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19949 === (8)))
{var inst_19914 = (state_19948[(9)]);var inst_19907 = (state_19948[(7)]);var inst_19928 = (inst_19914[(0)]);var inst_19929 = (inst_19914[(1)]);var inst_19930 = app.stock.abstract$.onViewCommand.call(null,inst_19928,inst_19929,inst_19907);var state_19948__$1 = state_19948;var statearr_19966_19998 = state_19948__$1;(statearr_19966_19998[(2)] = inst_19930);
(statearr_19966_19998[(1)] = (10));
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
});})(c__6202__auto___19984,onView_19974,onModel_19975,onSys_19976))
;return ((function (switch__6187__auto__,c__6202__auto___19984,onView_19974,onModel_19975,onSys_19976){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_19970 = [null,null,null,null,null,null,null,null,null,null];(statearr_19970[(0)] = state_machine__6188__auto__);
(statearr_19970[(1)] = (1));
return statearr_19970;
});
var state_machine__6188__auto____1 = (function (state_19948){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19971){if((e19971 instanceof Object))
{var ex__6191__auto__ = e19971;var statearr_19972_19999 = state_19948;(statearr_19972_19999[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20000 = state_19948;
state_19948 = G__20000;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19948){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___19984,onView_19974,onModel_19975,onSys_19976))
})();var state__6204__auto__ = (function (){var statearr_19973 = f__6203__auto__.call(null);(statearr_19973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___19984);
return statearr_19973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___19984,onView_19974,onModel_19975,onSys_19976))
);
return null;
});
app.stock.main.main.call(null);
