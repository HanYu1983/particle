// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.dirId = (5136918324969472);
app.stock.cmd.save_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_39047){var state_val_39048 = (state_39047[(1)]);if((state_val_39048 === (3)))
{var inst_39045 = (state_39047[(2)]);var state_39047__$1 = state_39047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39047__$1,inst_39045);
} else
{if((state_val_39048 === (2)))
{var inst_39034 = (state_39047[(2)]);var inst_39035 = cljs.core.nth.call(null,inst_39034,(0),null);var inst_39036 = cljs.core.nth.call(null,inst_39034,(1),null);var inst_39037 = stock.tool.parse_getprices.call(null,inst_39036);var inst_39038 = stock.tool.format_getprices.call(null,(86400),inst_39037);var inst_39039 = cljs.core.reverse.call(null,inst_39038);var inst_39040 = [inst_39035,inst_39039,id,date,request];var inst_39041 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39040,null));var inst_39042 = ["loadStock",inst_39041];var inst_39043 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39042,null));var state_39047__$1 = state_39047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39047__$1,(3),ch,inst_39043);
} else
{if((state_val_39048 === (1)))
{var inst_39031 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_39032 = stock.tool.content.call(null,inst_39031);var state_39047__$1 = state_39047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39047__$1,(2),inst_39032);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39052 = [null,null,null,null,null,null,null];(statearr_39052[(0)] = state_machine__6188__auto__);
(statearr_39052[(1)] = (1));
return statearr_39052;
});
var state_machine__6188__auto____1 = (function (state_39047){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39053){if((e39053 instanceof Object))
{var ex__6191__auto__ = e39053;var statearr_39054_39056 = state_39047;(statearr_39054_39056[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39057 = state_39047;
state_39047 = G__39057;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39047){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39055 = f__6203__auto__.call(null);(statearr_39055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_39021){var state_val_39022 = (state_39021[(1)]);if((state_val_39022 === (2)))
{var inst_39019 = (state_39021[(2)]);var state_39021__$1 = state_39021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39021__$1,inst_39019);
} else
{if((state_val_39022 === (1)))
{var inst_39010 = cljs.core.first.call(null,result);var inst_39011 = cljs.core.second.call(null,result);var inst_39012 = cljs.core.nth.call(null,result,(2));var inst_39013 = cljs.core.nth.call(null,result,(3));var inst_39014 = [inst_39010,inst_39011,inst_39012,inst_39013,request];var inst_39015 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39014,null));var inst_39016 = ["loadStock",inst_39015];var inst_39017 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39016,null));var state_39021__$1 = state_39021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39021__$1,(2),ch,inst_39017);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39026 = [null,null,null,null,null,null,null];(statearr_39026[(0)] = state_machine__6188__auto__);
(statearr_39026[(1)] = (1));
return statearr_39026;
});
var state_machine__6188__auto____1 = (function (state_39021){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39021);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39027){if((e39027 instanceof Object))
{var ex__6191__auto__ = e39027;var statearr_39028_39058 = state_39021;(statearr_39028_39058[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39059 = state_39021;
state_39021 = G__39059;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39021){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39029 = f__6203__auto__.call(null);(statearr_39029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39029;
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
return (function (state_39089){var state_val_39090 = (state_39089[(1)]);if((state_val_39090 === (2)))
{var inst_39087 = (state_39089[(2)]);var state_39089__$1 = state_39089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39089__$1,inst_39087);
} else
{if((state_val_39090 === (1)))
{var inst_39079 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_39080 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_39081 = cljs.core.get.call(null,inst_39079,inst_39080);var inst_39082 = [null,inst_39081,request];var inst_39083 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39082,null));var inst_39084 = ["view",inst_39083];var inst_39085 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39084,null));var state_39089__$1 = state_39089;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39089__$1,(2),ch,inst_39085);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39094 = [null,null,null,null,null,null,null];(statearr_39094[(0)] = state_machine__6188__auto__);
(statearr_39094[(1)] = (1));
return statearr_39094;
});
var state_machine__6188__auto____1 = (function (state_39089){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39089);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39095){if((e39095 instanceof Object))
{var ex__6191__auto__ = e39095;var statearr_39096_39098 = state_39089;(statearr_39096_39098[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39089);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39095;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39099 = state_39089;
state_39089 = G__39099;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39089){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39097 = f__6203__auto__.call(null);(statearr_39097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_39123){var state_val_39124 = (state_39123[(1)]);if((state_val_39124 === (2)))
{var inst_39121 = (state_39123[(2)]);var state_39123__$1 = state_39123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39123__$1,inst_39121);
} else
{if((state_val_39124 === (1)))
{var inst_39116 = [null,null,request];var inst_39117 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39116,null));var inst_39118 = ["view",inst_39117];var inst_39119 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39118,null));var state_39123__$1 = state_39123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39123__$1,(2),ch,inst_39119);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39128 = [null,null,null,null,null,null,null];(statearr_39128[(0)] = state_machine__6188__auto__);
(statearr_39128[(1)] = (1));
return statearr_39128;
});
var state_machine__6188__auto____1 = (function (state_39123){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39129){if((e39129 instanceof Object))
{var ex__6191__auto__ = e39129;var statearr_39130_39132 = state_39123;(statearr_39130_39132[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39133 = state_39123;
state_39123 = G__39133;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39123){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39131 = f__6203__auto__.call(null);(statearr_39131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
