// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.dbfile');
goog.require('app.dbfile');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_52902){var state_val_52903 = (state_52902[(1)]);if((state_val_52903 === (3)))
{var inst_52900 = (state_52902[(2)]);var state_52902__$1 = state_52902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52902__$1,inst_52900);
} else
{if((state_val_52903 === (2)))
{var inst_52892 = (state_52902[(2)]);var inst_52893 = cljs.core.nth.call(null,inst_52892,(0),null);var inst_52894 = cljs.core.nth.call(null,inst_52892,(1),null);var inst_52895 = [inst_52893,inst_52894,id,date,request];var inst_52896 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52895,null));var inst_52897 = ["loadStock",inst_52896];var inst_52898 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52897,null));var state_52902__$1 = state_52902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52902__$1,(3),ch,inst_52898);
} else
{if((state_val_52903 === (1)))
{var inst_52890 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_52902__$1 = state_52902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52902__$1,(2),inst_52890);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52907 = [null,null,null,null,null,null,null];(statearr_52907[(0)] = state_machine__6188__auto__);
(statearr_52907[(1)] = (1));
return statearr_52907;
});
var state_machine__6188__auto____1 = (function (state_52902){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52902);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52908){if((e52908 instanceof Object))
{var ex__6191__auto__ = e52908;var statearr_52909_52911 = state_52902;(statearr_52909_52911[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52912 = state_52902;
state_52902 = G__52912;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52902){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_52910 = f__6203__auto__.call(null);(statearr_52910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_52910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_52880){var state_val_52881 = (state_52880[(1)]);if((state_val_52881 === (2)))
{var inst_52878 = (state_52880[(2)]);var state_52880__$1 = state_52880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52880__$1,inst_52878);
} else
{if((state_val_52881 === (1)))
{var inst_52869 = cljs.core.first.call(null,result);var inst_52870 = cljs.core.second.call(null,result);var inst_52871 = cljs.core.nth.call(null,result,(2));var inst_52872 = cljs.core.nth.call(null,result,(3));var inst_52873 = [inst_52869,inst_52870,inst_52871,inst_52872,request];var inst_52874 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52873,null));var inst_52875 = ["loadStock",inst_52874];var inst_52876 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52875,null));var state_52880__$1 = state_52880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52880__$1,(2),ch,inst_52876);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52885 = [null,null,null,null,null,null,null];(statearr_52885[(0)] = state_machine__6188__auto__);
(statearr_52885[(1)] = (1));
return statearr_52885;
});
var state_machine__6188__auto____1 = (function (state_52880){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52880);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52886){if((e52886 instanceof Object))
{var ex__6191__auto__ = e52886;var statearr_52887_52913 = state_52880;(statearr_52887_52913[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52914 = state_52880;
state_52880 = G__52914;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52880){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_52888 = f__6203__auto__.call(null);(statearr_52888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_52888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
loadStock = function(ch,id,date,request,result){
switch(arguments.length){
case 4:
return loadStock__4.call(this,ch,id,date,request);
case 5:
return loadStock__5.call(this,ch,id,date,request,result);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
loadStock.cljs$core$IFn$_invoke$arity$4 = loadStock__4;
loadStock.cljs$core$IFn$_invoke$arity$5 = loadStock__5;
return loadStock;
})()
;
app.stock.cmd.loadUser = (function loadUser(ch,fbid,accessToken,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_52965){var state_val_52966 = (state_52965[(1)]);if((state_val_52966 === (6)))
{var inst_52952 = (state_52965[(7)]);var inst_52957 = (state_52965[(2)]);var inst_52958 = [inst_52957,inst_52952,request];var inst_52959 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52958,null));var inst_52960 = ["view",inst_52959];var inst_52961 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52960,null));var state_52965__$1 = state_52965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52965__$1,(3),ch,inst_52961);
} else
{if((state_val_52966 === (5)))
{var inst_52952 = (state_52965[(7)]);var inst_52955 = inst_52952.error;var state_52965__$1 = state_52965;var statearr_52967_52979 = state_52965__$1;(statearr_52967_52979[(2)] = inst_52955);
(statearr_52967_52979[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (4)))
{var inst_52951 = (state_52965[(8)]);var state_52965__$1 = state_52965;var statearr_52968_52980 = state_52965__$1;(statearr_52968_52980[(2)] = inst_52951);
(statearr_52968_52980[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (3)))
{var inst_52963 = (state_52965[(2)]);var state_52965__$1 = state_52965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52965__$1,inst_52963);
} else
{if((state_val_52966 === (2)))
{var inst_52951 = (state_52965[(8)]);var inst_52950 = (state_52965[(2)]);var inst_52951__$1 = cljs.core.nth.call(null,inst_52950,(0),null);var inst_52952 = cljs.core.nth.call(null,inst_52950,(1),null);var state_52965__$1 = (function (){var statearr_52969 = state_52965;(statearr_52969[(8)] = inst_52951__$1);
(statearr_52969[(7)] = inst_52952);
return statearr_52969;
})();if(cljs.core.truth_(inst_52951__$1))
{var statearr_52970_52981 = state_52965__$1;(statearr_52970_52981[(1)] = (4));
} else
{var statearr_52971_52982 = state_52965__$1;(statearr_52971_52982[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52966 === (1)))
{var inst_52948 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_52965__$1 = state_52965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52965__$1,(2),inst_52948);
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
var state_machine__6188__auto____0 = (function (){var statearr_52975 = [null,null,null,null,null,null,null,null,null];(statearr_52975[(0)] = state_machine__6188__auto__);
(statearr_52975[(1)] = (1));
return statearr_52975;
});
var state_machine__6188__auto____1 = (function (state_52965){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52965);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52976){if((e52976 instanceof Object))
{var ex__6191__auto__ = e52976;var statearr_52977_52983 = state_52965;(statearr_52977_52983[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52984 = state_52965;
state_52965 = G__52984;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52965){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_52978 = f__6203__auto__.call(null);(statearr_52978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_52978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_53037){var state_val_53038 = (state_53037[(1)]);if((state_val_53038 === (6)))
{var inst_53024 = (state_53037[(7)]);var inst_53029 = (state_53037[(2)]);var inst_53030 = [inst_53029,inst_53024,request];var inst_53031 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53030,null));var inst_53032 = ["view",inst_53031];var inst_53033 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53032,null));var state_53037__$1 = state_53037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53037__$1,(3),ch,inst_53033);
} else
{if((state_val_53038 === (5)))
{var inst_53024 = (state_53037[(7)]);var inst_53027 = inst_53024.error;var state_53037__$1 = state_53037;var statearr_53039_53051 = state_53037__$1;(statearr_53039_53051[(2)] = inst_53027);
(statearr_53039_53051[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (4)))
{var inst_53023 = (state_53037[(8)]);var state_53037__$1 = state_53037;var statearr_53040_53052 = state_53037__$1;(statearr_53040_53052[(2)] = inst_53023);
(statearr_53040_53052[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (3)))
{var inst_53035 = (state_53037[(2)]);var state_53037__$1 = state_53037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53037__$1,inst_53035);
} else
{if((state_val_53038 === (2)))
{var inst_53023 = (state_53037[(8)]);var inst_53022 = (state_53037[(2)]);var inst_53023__$1 = cljs.core.nth.call(null,inst_53022,(0),null);var inst_53024 = cljs.core.nth.call(null,inst_53022,(1),null);var state_53037__$1 = (function (){var statearr_53041 = state_53037;(statearr_53041[(8)] = inst_53023__$1);
(statearr_53041[(7)] = inst_53024);
return statearr_53041;
})();if(cljs.core.truth_(inst_53023__$1))
{var statearr_53042_53053 = state_53037__$1;(statearr_53042_53053[(1)] = (4));
} else
{var statearr_53043_53054 = state_53037__$1;(statearr_53043_53054[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53038 === (1)))
{var inst_53019 = JSON.stringify(data);var inst_53020 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_53019);var state_53037__$1 = state_53037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53037__$1,(2),inst_53020);
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
var state_machine__6188__auto____0 = (function (){var statearr_53047 = [null,null,null,null,null,null,null,null,null];(statearr_53047[(0)] = state_machine__6188__auto__);
(statearr_53047[(1)] = (1));
return statearr_53047;
});
var state_machine__6188__auto____1 = (function (state_53037){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53037);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53048){if((e53048 instanceof Object))
{var ex__6191__auto__ = e53048;var statearr_53049_53055 = state_53037;(statearr_53049_53055[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53056 = state_53037;
state_53037 = G__53056;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53037){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53050 = f__6203__auto__.call(null);(statearr_53050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
