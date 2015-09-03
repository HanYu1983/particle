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
return (function (state_26825){var state_val_26826 = (state_26825[(1)]);if((state_val_26826 === (6)))
{var inst_26820 = (state_26825[(2)]);var inst_26821 = cljs.core.nth.call(null,inst_26820,(0),null);var inst_26822 = cljs.core.nth.call(null,inst_26820,(1),null);var inst_26823 = console.log(inst_26821,inst_26822);var state_26825__$1 = state_26825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26825__$1,inst_26823);
} else
{if((state_val_26826 === (5)))
{var inst_26815 = (state_26825[(2)]);var inst_26816 = cljs.core.nth.call(null,inst_26815,(0),null);var inst_26817 = cljs.core.nth.call(null,inst_26815,(1),null);var inst_26818 = app.dbfile.file.call(null,inst_26817,"json");var state_26825__$1 = (function (){var statearr_26827 = state_26825;(statearr_26827[(7)] = inst_26816);
return statearr_26827;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(6),inst_26818);
} else
{if((state_val_26826 === (4)))
{var inst_26807 = (state_26825[(8)]);var inst_26810 = (state_26825[(2)]);var inst_26811 = cljs.core.nth.call(null,inst_26810,(0),null);var inst_26812 = cljs.core.nth.call(null,inst_26810,(1),null);var inst_26813 = app.dbfile.name__GT_id.call(null,inst_26807,"userinfo.json");var state_26825__$1 = (function (){var statearr_26828 = state_26825;(statearr_26828[(9)] = inst_26811);
(statearr_26828[(10)] = inst_26812);
return statearr_26828;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(5),inst_26813);
} else
{if((state_val_26826 === (3)))
{var inst_26807 = (state_26825[(8)]);var inst_26805 = (state_26825[(2)]);var inst_26806 = cljs.core.nth.call(null,inst_26805,(0),null);var inst_26807__$1 = cljs.core.nth.call(null,inst_26805,(1),null);var inst_26808 = app.dbfile.makeFile.call(null,inst_26807__$1,"userinfo.json","{}",true);var state_26825__$1 = (function (){var statearr_26829 = state_26825;(statearr_26829[(8)] = inst_26807__$1);
(statearr_26829[(11)] = inst_26806);
return statearr_26829;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(4),inst_26808);
} else
{if((state_val_26826 === (2)))
{var inst_26800 = (state_26825[(2)]);var inst_26801 = cljs.core.nth.call(null,inst_26800,(0),null);var inst_26802 = cljs.core.nth.call(null,inst_26800,(1),null);var inst_26803 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_26825__$1 = (function (){var statearr_26830 = state_26825;(statearr_26830[(12)] = inst_26802);
(statearr_26830[(13)] = inst_26801);
return statearr_26830;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(3),inst_26803);
} else
{if((state_val_26826 === (1)))
{var inst_26798 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_26825__$1 = state_26825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(2),inst_26798);
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
var state_machine__6188__auto____0 = (function (){var statearr_26834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26834[(0)] = state_machine__6188__auto__);
(statearr_26834[(1)] = (1));
return statearr_26834;
});
var state_machine__6188__auto____1 = (function (state_26825){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26825);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26835){if((e26835 instanceof Object))
{var ex__6191__auto__ = e26835;var statearr_26836_26838 = state_26825;(statearr_26836_26838[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26839 = state_26825;
state_26825 = G__26839;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26825){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26837 = f__6203__auto__.call(null);(statearr_26837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){var onView_27020 = cljs.core.async.chan.call(null);var onModel_27021 = cljs.core.async.chan.call(null);var onSys_27022 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_27020,onModel_27021,onSys_27022){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_27020,onModel_27021,onSys_27022){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_27020,onModel_27021,onSys_27022){
return (function (state_26933){var state_val_26934 = (state_26933[(1)]);if((state_val_26934 === (2)))
{var inst_26931 = (state_26933[(2)]);var state_26933__$1 = state_26933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26933__$1,inst_26931);
} else
{if((state_val_26934 === (1)))
{var state_26933__$1 = state_26933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26933__$1,(2),onView_27020,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_27020,onModel_27021,onSys_27022))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_27020,onModel_27021,onSys_27022){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26938 = [null,null,null,null,null,null,null];(statearr_26938[(0)] = state_machine__6188__auto__);
(statearr_26938[(1)] = (1));
return statearr_26938;
});
var state_machine__6188__auto____1 = (function (state_26933){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26933);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26939){if((e26939 instanceof Object))
{var ex__6191__auto__ = e26939;var statearr_26940_27023 = state_26933;(statearr_26940_27023[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27024 = state_26933;
state_26933 = G__27024;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26933){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_27020,onModel_27021,onSys_27022))
})();var state__6204__auto__ = (function (){var statearr_26941 = f__6203__auto__.call(null);(statearr_26941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_27020,onModel_27021,onSys_27022))
);
return c__6202__auto__;
});})(onView_27020,onModel_27021,onSys_27022))
);
var c__6202__auto___27025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___27025,onView_27020,onModel_27021,onSys_27022){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___27025,onView_27020,onModel_27021,onSys_27022){
return (function (state_26950){var state_val_26951 = (state_26950[(1)]);if((state_val_26951 === (4)))
{var inst_26944 = (state_26950[(2)]);var inst_26945 = common.onModel.onNext(inst_26944);var state_26950__$1 = (function (){var statearr_26952 = state_26950;(statearr_26952[(7)] = inst_26945);
return statearr_26952;
})();var statearr_26953_27026 = state_26950__$1;(statearr_26953_27026[(2)] = null);
(statearr_26953_27026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26951 === (3)))
{var inst_26948 = (state_26950[(2)]);var state_26950__$1 = state_26950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else
{if((state_val_26951 === (2)))
{var state_26950__$1 = state_26950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(4),onModel_27021);
} else
{if((state_val_26951 === (1)))
{var state_26950__$1 = state_26950;var statearr_26954_27027 = state_26950__$1;(statearr_26954_27027[(2)] = null);
(statearr_26954_27027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___27025,onView_27020,onModel_27021,onSys_27022))
;return ((function (switch__6187__auto__,c__6202__auto___27025,onView_27020,onModel_27021,onSys_27022){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26958 = [null,null,null,null,null,null,null,null];(statearr_26958[(0)] = state_machine__6188__auto__);
(statearr_26958[(1)] = (1));
return statearr_26958;
});
var state_machine__6188__auto____1 = (function (state_26950){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26950);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26959){if((e26959 instanceof Object))
{var ex__6191__auto__ = e26959;var statearr_26960_27028 = state_26950;(statearr_26960_27028[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27029 = state_26950;
state_26950 = G__27029;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___27025,onView_27020,onModel_27021,onSys_27022))
})();var state__6204__auto__ = (function (){var statearr_26961 = f__6203__auto__.call(null);(statearr_26961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___27025);
return statearr_26961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___27025,onView_27020,onModel_27021,onSys_27022))
);
var c__6202__auto___27030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___27030,onView_27020,onModel_27021,onSys_27022){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___27030,onView_27020,onModel_27021,onSys_27022){
return (function (state_26998){var state_val_26999 = (state_26998[(1)]);if((state_val_26999 === (7)))
{var inst_26993 = (state_26998[(2)]);var inst_26965 = inst_26993;var state_26998__$1 = (function (){var statearr_27000 = state_26998;(statearr_27000[(7)] = inst_26965);
return statearr_27000;
})();var statearr_27001_27031 = state_26998__$1;(statearr_27001_27031[(2)] = null);
(statearr_27001_27031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (1)))
{var inst_26962 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_26963 = [onView_27020,onModel_27021,onSys_27022,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_26964 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26962,inst_26963);var inst_26965 = inst_26964;var state_26998__$1 = (function (){var statearr_27002 = state_26998;(statearr_27002[(7)] = inst_26965);
return statearr_27002;
})();var statearr_27003_27032 = state_26998__$1;(statearr_27003_27032[(2)] = null);
(statearr_27003_27032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (4)))
{var inst_26973 = (state_26998[(8)]);var inst_26971 = (state_26998[(2)]);var inst_26972 = cljs.core.nth.call(null,inst_26971,(0),null);var inst_26973__$1 = cljs.core.nth.call(null,inst_26971,(1),null);var inst_26977 = cljs.core._EQ_.call(null,onSys_27022,inst_26973__$1);var state_26998__$1 = (function (){var statearr_27004 = state_26998;(statearr_27004[(8)] = inst_26973__$1);
(statearr_27004[(9)] = inst_26972);
return statearr_27004;
})();if(inst_26977)
{var statearr_27005_27033 = state_26998__$1;(statearr_27005_27033[(1)] = (5));
} else
{var statearr_27006_27034 = state_26998__$1;(statearr_27006_27034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (6)))
{var inst_26973 = (state_26998[(8)]);var inst_26984 = cljs.core._EQ_.call(null,onView_27020,inst_26973);var state_26998__$1 = state_26998;if(inst_26984)
{var statearr_27007_27035 = state_26998__$1;(statearr_27007_27035[(1)] = (8));
} else
{var statearr_27008_27036 = state_26998__$1;(statearr_27008_27036[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (3)))
{var inst_26996 = (state_26998[(2)]);var state_26998__$1 = state_26998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26998__$1,inst_26996);
} else
{if((state_val_26999 === (2)))
{var inst_26968 = [onView_27020,onSys_27022];var inst_26969 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26968,null));var state_26998__$1 = state_26998;return cljs.core.async.ioc_alts_BANG_.call(null,state_26998__$1,(4),inst_26969);
} else
{if((state_val_26999 === (9)))
{var inst_26965 = (state_26998[(7)]);var state_26998__$1 = state_26998;var statearr_27009_27037 = state_26998__$1;(statearr_27009_27037[(2)] = inst_26965);
(statearr_27009_27037[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (5)))
{var inst_26965 = (state_26998[(7)]);var inst_26972 = (state_26998[(9)]);var inst_26980 = cljs.core.nth.call(null,inst_26972,(0),null);var inst_26981 = cljs.core.nth.call(null,inst_26972,(1),null);var inst_26982 = app.stock.abstract$.onSystem.call(null,inst_26980,inst_26981,inst_26965);var state_26998__$1 = state_26998;var statearr_27010_27038 = state_26998__$1;(statearr_27010_27038[(2)] = inst_26982);
(statearr_27010_27038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (10)))
{var inst_26991 = (state_26998[(2)]);var state_26998__$1 = state_26998;var statearr_27011_27039 = state_26998__$1;(statearr_27011_27039[(2)] = inst_26991);
(statearr_27011_27039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26999 === (8)))
{var inst_26965 = (state_26998[(7)]);var inst_26972 = (state_26998[(9)]);var inst_26986 = (inst_26972[(0)]);var inst_26987 = (inst_26972[(1)]);var inst_26988 = app.stock.abstract$.onViewCommand.call(null,inst_26986,inst_26987,inst_26965);var state_26998__$1 = state_26998;var statearr_27012_27040 = state_26998__$1;(statearr_27012_27040[(2)] = inst_26988);
(statearr_27012_27040[(1)] = (10));
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
});})(c__6202__auto___27030,onView_27020,onModel_27021,onSys_27022))
;return ((function (switch__6187__auto__,c__6202__auto___27030,onView_27020,onModel_27021,onSys_27022){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27016 = [null,null,null,null,null,null,null,null,null,null];(statearr_27016[(0)] = state_machine__6188__auto__);
(statearr_27016[(1)] = (1));
return statearr_27016;
});
var state_machine__6188__auto____1 = (function (state_26998){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26998);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27017){if((e27017 instanceof Object))
{var ex__6191__auto__ = e27017;var statearr_27018_27041 = state_26998;(statearr_27018_27041[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27042 = state_26998;
state_26998 = G__27042;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26998){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___27030,onView_27020,onModel_27021,onSys_27022))
})();var state__6204__auto__ = (function (){var statearr_27019 = f__6203__auto__.call(null);(statearr_27019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___27030);
return statearr_27019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___27030,onView_27020,onModel_27021,onSys_27022))
);
return null;
});
app.stock.main.main.call(null);
