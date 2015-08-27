// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.main.main2 = (function main2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_78770){var state_val_78771 = (state_78770[(1)]);if((state_val_78771 === (6)))
{var inst_78765 = (state_78770[(2)]);var inst_78766 = cljs.core.nth.call(null,inst_78765,(0),null);var inst_78767 = cljs.core.nth.call(null,inst_78765,(1),null);var inst_78768 = console.log(inst_78766,inst_78767);var state_78770__$1 = state_78770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78770__$1,inst_78768);
} else
{if((state_val_78771 === (5)))
{var inst_78760 = (state_78770[(2)]);var inst_78761 = cljs.core.nth.call(null,inst_78760,(0),null);var inst_78762 = cljs.core.nth.call(null,inst_78760,(1),null);var inst_78763 = app.dbfile.file.call(null,inst_78762,"json");var state_78770__$1 = (function (){var statearr_78772 = state_78770;(statearr_78772[(7)] = inst_78761);
return statearr_78772;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78770__$1,(6),inst_78763);
} else
{if((state_val_78771 === (4)))
{var inst_78752 = (state_78770[(8)]);var inst_78755 = (state_78770[(2)]);var inst_78756 = cljs.core.nth.call(null,inst_78755,(0),null);var inst_78757 = cljs.core.nth.call(null,inst_78755,(1),null);var inst_78758 = app.dbfile.name__GT_id.call(null,inst_78752,"userinfo.json");var state_78770__$1 = (function (){var statearr_78773 = state_78770;(statearr_78773[(9)] = inst_78757);
(statearr_78773[(10)] = inst_78756);
return statearr_78773;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78770__$1,(5),inst_78758);
} else
{if((state_val_78771 === (3)))
{var inst_78752 = (state_78770[(8)]);var inst_78750 = (state_78770[(2)]);var inst_78751 = cljs.core.nth.call(null,inst_78750,(0),null);var inst_78752__$1 = cljs.core.nth.call(null,inst_78750,(1),null);var inst_78753 = app.dbfile.makeFile.call(null,inst_78752__$1,"userinfo.json","{}",true);var state_78770__$1 = (function (){var statearr_78774 = state_78770;(statearr_78774[(11)] = inst_78751);
(statearr_78774[(8)] = inst_78752__$1);
return statearr_78774;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78770__$1,(4),inst_78753);
} else
{if((state_val_78771 === (2)))
{var inst_78745 = (state_78770[(2)]);var inst_78746 = cljs.core.nth.call(null,inst_78745,(0),null);var inst_78747 = cljs.core.nth.call(null,inst_78745,(1),null);var inst_78748 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_78770__$1 = (function (){var statearr_78775 = state_78770;(statearr_78775[(12)] = inst_78747);
(statearr_78775[(13)] = inst_78746);
return statearr_78775;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78770__$1,(3),inst_78748);
} else
{if((state_val_78771 === (1)))
{var inst_78743 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_78770__$1 = state_78770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78770__$1,(2),inst_78743);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78779[(0)] = state_machine__6188__auto__);
(statearr_78779[(1)] = (1));
return statearr_78779;
});
var state_machine__6188__auto____1 = (function (state_78770){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78780){if((e78780 instanceof Object))
{var ex__6191__auto__ = e78780;var statearr_78781_78783 = state_78770;(statearr_78781_78783[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78784 = state_78770;
state_78770 = G__78784;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78770){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_78782 = f__6203__auto__.call(null);(statearr_78782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){var onView_78965 = cljs.core.async.chan.call(null);var onModel_78966 = cljs.core.async.chan.call(null);var onSys_78967 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_78965,onModel_78966,onSys_78967){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_78965,onModel_78966,onSys_78967){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_78965,onModel_78966,onSys_78967){
return (function (state_78878){var state_val_78879 = (state_78878[(1)]);if((state_val_78879 === (2)))
{var inst_78876 = (state_78878[(2)]);var state_78878__$1 = state_78878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78878__$1,inst_78876);
} else
{if((state_val_78879 === (1)))
{var state_78878__$1 = state_78878;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78878__$1,(2),onView_78965,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_78965,onModel_78966,onSys_78967))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_78965,onModel_78966,onSys_78967){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78883 = [null,null,null,null,null,null,null];(statearr_78883[(0)] = state_machine__6188__auto__);
(statearr_78883[(1)] = (1));
return statearr_78883;
});
var state_machine__6188__auto____1 = (function (state_78878){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78878);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78884){if((e78884 instanceof Object))
{var ex__6191__auto__ = e78884;var statearr_78885_78968 = state_78878;(statearr_78885_78968[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78878);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78969 = state_78878;
state_78878 = G__78969;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78878){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_78965,onModel_78966,onSys_78967))
})();var state__6204__auto__ = (function (){var statearr_78886 = f__6203__auto__.call(null);(statearr_78886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_78886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_78965,onModel_78966,onSys_78967))
);
return c__6202__auto__;
});})(onView_78965,onModel_78966,onSys_78967))
);
var c__6202__auto___78970 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78970,onView_78965,onModel_78966,onSys_78967){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78970,onView_78965,onModel_78966,onSys_78967){
return (function (state_78895){var state_val_78896 = (state_78895[(1)]);if((state_val_78896 === (4)))
{var inst_78889 = (state_78895[(2)]);var inst_78890 = common.onModel.onNext(inst_78889);var state_78895__$1 = (function (){var statearr_78897 = state_78895;(statearr_78897[(7)] = inst_78890);
return statearr_78897;
})();var statearr_78898_78971 = state_78895__$1;(statearr_78898_78971[(2)] = null);
(statearr_78898_78971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78896 === (3)))
{var inst_78893 = (state_78895[(2)]);var state_78895__$1 = state_78895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78895__$1,inst_78893);
} else
{if((state_val_78896 === (2)))
{var state_78895__$1 = state_78895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78895__$1,(4),onModel_78966);
} else
{if((state_val_78896 === (1)))
{var state_78895__$1 = state_78895;var statearr_78899_78972 = state_78895__$1;(statearr_78899_78972[(2)] = null);
(statearr_78899_78972[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___78970,onView_78965,onModel_78966,onSys_78967))
;return ((function (switch__6187__auto__,c__6202__auto___78970,onView_78965,onModel_78966,onSys_78967){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78903 = [null,null,null,null,null,null,null,null];(statearr_78903[(0)] = state_machine__6188__auto__);
(statearr_78903[(1)] = (1));
return statearr_78903;
});
var state_machine__6188__auto____1 = (function (state_78895){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78895);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78904){if((e78904 instanceof Object))
{var ex__6191__auto__ = e78904;var statearr_78905_78973 = state_78895;(statearr_78905_78973[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78974 = state_78895;
state_78895 = G__78974;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78895){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78970,onView_78965,onModel_78966,onSys_78967))
})();var state__6204__auto__ = (function (){var statearr_78906 = f__6203__auto__.call(null);(statearr_78906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78970);
return statearr_78906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78970,onView_78965,onModel_78966,onSys_78967))
);
var c__6202__auto___78975 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___78975,onView_78965,onModel_78966,onSys_78967){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___78975,onView_78965,onModel_78966,onSys_78967){
return (function (state_78943){var state_val_78944 = (state_78943[(1)]);if((state_val_78944 === (7)))
{var inst_78938 = (state_78943[(2)]);var inst_78910 = inst_78938;var state_78943__$1 = (function (){var statearr_78945 = state_78943;(statearr_78945[(7)] = inst_78910);
return statearr_78945;
})();var statearr_78946_78976 = state_78943__$1;(statearr_78946_78976[(2)] = null);
(statearr_78946_78976[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (1)))
{var inst_78907 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_78908 = [onView_78965,onModel_78966,onSys_78967,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_78909 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78907,inst_78908);var inst_78910 = inst_78909;var state_78943__$1 = (function (){var statearr_78947 = state_78943;(statearr_78947[(7)] = inst_78910);
return statearr_78947;
})();var statearr_78948_78977 = state_78943__$1;(statearr_78948_78977[(2)] = null);
(statearr_78948_78977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (4)))
{var inst_78918 = (state_78943[(8)]);var inst_78916 = (state_78943[(2)]);var inst_78917 = cljs.core.nth.call(null,inst_78916,(0),null);var inst_78918__$1 = cljs.core.nth.call(null,inst_78916,(1),null);var inst_78922 = cljs.core._EQ_.call(null,onSys_78967,inst_78918__$1);var state_78943__$1 = (function (){var statearr_78949 = state_78943;(statearr_78949[(9)] = inst_78917);
(statearr_78949[(8)] = inst_78918__$1);
return statearr_78949;
})();if(inst_78922)
{var statearr_78950_78978 = state_78943__$1;(statearr_78950_78978[(1)] = (5));
} else
{var statearr_78951_78979 = state_78943__$1;(statearr_78951_78979[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (6)))
{var inst_78918 = (state_78943[(8)]);var inst_78929 = cljs.core._EQ_.call(null,onView_78965,inst_78918);var state_78943__$1 = state_78943;if(inst_78929)
{var statearr_78952_78980 = state_78943__$1;(statearr_78952_78980[(1)] = (8));
} else
{var statearr_78953_78981 = state_78943__$1;(statearr_78953_78981[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (3)))
{var inst_78941 = (state_78943[(2)]);var state_78943__$1 = state_78943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78943__$1,inst_78941);
} else
{if((state_val_78944 === (2)))
{var inst_78913 = [onView_78965,onSys_78967];var inst_78914 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_78913,null));var state_78943__$1 = state_78943;return cljs.core.async.ioc_alts_BANG_.call(null,state_78943__$1,(4),inst_78914);
} else
{if((state_val_78944 === (9)))
{var inst_78910 = (state_78943[(7)]);var state_78943__$1 = state_78943;var statearr_78954_78982 = state_78943__$1;(statearr_78954_78982[(2)] = inst_78910);
(statearr_78954_78982[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (5)))
{var inst_78910 = (state_78943[(7)]);var inst_78917 = (state_78943[(9)]);var inst_78925 = cljs.core.nth.call(null,inst_78917,(0),null);var inst_78926 = cljs.core.nth.call(null,inst_78917,(1),null);var inst_78927 = app.stock.abstract$.onSystem.call(null,inst_78925,inst_78926,inst_78910);var state_78943__$1 = state_78943;var statearr_78955_78983 = state_78943__$1;(statearr_78955_78983[(2)] = inst_78927);
(statearr_78955_78983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (10)))
{var inst_78936 = (state_78943[(2)]);var state_78943__$1 = state_78943;var statearr_78956_78984 = state_78943__$1;(statearr_78956_78984[(2)] = inst_78936);
(statearr_78956_78984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78944 === (8)))
{var inst_78910 = (state_78943[(7)]);var inst_78917 = (state_78943[(9)]);var inst_78931 = (inst_78917[(0)]);var inst_78932 = (inst_78917[(1)]);var inst_78933 = app.stock.abstract$.onViewCommand.call(null,inst_78931,inst_78932,inst_78910);var state_78943__$1 = state_78943;var statearr_78957_78985 = state_78943__$1;(statearr_78957_78985[(2)] = inst_78933);
(statearr_78957_78985[(1)] = (10));
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
});})(c__6202__auto___78975,onView_78965,onModel_78966,onSys_78967))
;return ((function (switch__6187__auto__,c__6202__auto___78975,onView_78965,onModel_78966,onSys_78967){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_78961 = [null,null,null,null,null,null,null,null,null,null];(statearr_78961[(0)] = state_machine__6188__auto__);
(statearr_78961[(1)] = (1));
return statearr_78961;
});
var state_machine__6188__auto____1 = (function (state_78943){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_78943);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e78962){if((e78962 instanceof Object))
{var ex__6191__auto__ = e78962;var statearr_78963_78986 = state_78943;(statearr_78963_78986[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e78962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78987 = state_78943;
state_78943 = G__78987;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_78943){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_78943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___78975,onView_78965,onModel_78966,onSys_78967))
})();var state__6204__auto__ = (function (){var statearr_78964 = f__6203__auto__.call(null);(statearr_78964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___78975);
return statearr_78964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___78975,onView_78965,onModel_78966,onSys_78967))
);
return null;
});
app.stock.main.main.call(null);
