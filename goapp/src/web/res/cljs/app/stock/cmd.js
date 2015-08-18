// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.save_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_30981){var state_val_30982 = (state_30981[(1)]);if((state_val_30982 === (3)))
{var inst_30979 = (state_30981[(2)]);var state_30981__$1 = state_30981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30981__$1,inst_30979);
} else
{if((state_val_30982 === (2)))
{var inst_30971 = (state_30981[(2)]);var inst_30972 = cljs.core.nth.call(null,inst_30971,(0),null);var inst_30973 = cljs.core.nth.call(null,inst_30971,(1),null);var inst_30974 = [inst_30972,inst_30973,id,date,request];var inst_30975 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30974,null));var inst_30976 = ["loadStock",inst_30975];var inst_30977 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30976,null));var state_30981__$1 = state_30981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30981__$1,(3),ch,inst_30977);
} else
{if((state_val_30982 === (1)))
{var inst_30969 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_30981__$1 = state_30981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30981__$1,(2),inst_30969);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30986 = [null,null,null,null,null,null,null];(statearr_30986[(0)] = state_machine__6188__auto__);
(statearr_30986[(1)] = (1));
return statearr_30986;
});
var state_machine__6188__auto____1 = (function (state_30981){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30987){if((e30987 instanceof Object))
{var ex__6191__auto__ = e30987;var statearr_30988_31004 = state_30981;(statearr_30988_31004[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31005 = state_30981;
state_30981 = G__31005;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30981){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30989 = f__6203__auto__.call(null);(statearr_30989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_30995){var state_val_30996 = (state_30995[(1)]);if((state_val_30996 === (2)))
{var inst_30993 = (state_30995[(2)]);var state_30995__$1 = state_30995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30995__$1,inst_30993);
} else
{if((state_val_30996 === (1)))
{var inst_30990 = ["loadStock",result];var inst_30991 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30990,null));var state_30995__$1 = state_30995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30995__$1,(2),ch,inst_30991);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31000 = [null,null,null,null,null,null,null];(statearr_31000[(0)] = state_machine__6188__auto__);
(statearr_31000[(1)] = (1));
return statearr_31000;
});
var state_machine__6188__auto____1 = (function (state_30995){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30995);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31001){if((e31001 instanceof Object))
{var ex__6191__auto__ = e31001;var statearr_31002_31006 = state_30995;(statearr_31002_31006[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31007 = state_30995;
state_30995 = G__31007;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30995){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_31003 = f__6203__auto__.call(null);(statearr_31003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31003;
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
app.stock.cmd.loadUser = (function loadUser(ch,fbid,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_31037){var state_val_31038 = (state_31037[(1)]);if((state_val_31038 === (2)))
{var inst_31035 = (state_31037[(2)]);var state_31037__$1 = state_31037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31037__$1,inst_31035);
} else
{if((state_val_31038 === (1)))
{var inst_31027 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_31028 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_31029 = cljs.core.get.call(null,inst_31027,inst_31028);var inst_31030 = [null,inst_31029,request];var inst_31031 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31030,null));var inst_31032 = ["view",inst_31031];var inst_31033 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31032,null));var state_31037__$1 = state_31037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31037__$1,(2),ch,inst_31033);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31042 = [null,null,null,null,null,null,null];(statearr_31042[(0)] = state_machine__6188__auto__);
(statearr_31042[(1)] = (1));
return statearr_31042;
});
var state_machine__6188__auto____1 = (function (state_31037){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31037);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31043){if((e31043 instanceof Object))
{var ex__6191__auto__ = e31043;var statearr_31044_31046 = state_31037;(statearr_31044_31046[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31047 = state_31037;
state_31037 = G__31047;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31037){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_31045 = f__6203__auto__.call(null);(statearr_31045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_31071){var state_val_31072 = (state_31071[(1)]);if((state_val_31072 === (2)))
{var inst_31069 = (state_31071[(2)]);var state_31071__$1 = state_31071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31071__$1,inst_31069);
} else
{if((state_val_31072 === (1)))
{var inst_31064 = [null,null,request];var inst_31065 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31064,null));var inst_31066 = ["view",inst_31065];var inst_31067 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31066,null));var state_31071__$1 = state_31071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31071__$1,(2),ch,inst_31067);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31076 = [null,null,null,null,null,null,null];(statearr_31076[(0)] = state_machine__6188__auto__);
(statearr_31076[(1)] = (1));
return statearr_31076;
});
var state_machine__6188__auto____1 = (function (state_31071){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31071);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31077){if((e31077 instanceof Object))
{var ex__6191__auto__ = e31077;var statearr_31078_31080 = state_31071;(statearr_31078_31080[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31081 = state_31071;
state_31071 = G__31081;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31071){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_31079 = f__6203__auto__.call(null);(statearr_31079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
