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
return (function (state_27095){var state_val_27096 = (state_27095[(1)]);if((state_val_27096 === (3)))
{var inst_27093 = (state_27095[(2)]);var state_27095__$1 = state_27095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else
{if((state_val_27096 === (2)))
{var inst_27082 = (state_27095[(2)]);var inst_27083 = cljs.core.nth.call(null,inst_27082,(0),null);var inst_27084 = cljs.core.nth.call(null,inst_27082,(1),null);var inst_27085 = stock.tool.parse_getprices.call(null,inst_27084);var inst_27086 = stock.tool.format_getprices.call(null,(86400),inst_27085);var inst_27087 = cljs.core.reverse.call(null,inst_27086);var inst_27088 = [inst_27083,inst_27087,id,date,request];var inst_27089 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27088,null));var inst_27090 = ["loadStock",inst_27089];var inst_27091 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27090,null));var state_27095__$1 = state_27095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(3),ch,inst_27091);
} else
{if((state_val_27096 === (1)))
{var inst_27079 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_27080 = stock.tool.content.call(null,inst_27079);var state_27095__$1 = state_27095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(2),inst_27080);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27100 = [null,null,null,null,null,null,null];(statearr_27100[(0)] = state_machine__6188__auto__);
(statearr_27100[(1)] = (1));
return statearr_27100;
});
var state_machine__6188__auto____1 = (function (state_27095){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27101){if((e27101 instanceof Object))
{var ex__6191__auto__ = e27101;var statearr_27102_27104 = state_27095;(statearr_27102_27104[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27105 = state_27095;
state_27095 = G__27105;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_27103 = f__6203__auto__.call(null);(statearr_27103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_27069){var state_val_27070 = (state_27069[(1)]);if((state_val_27070 === (2)))
{var inst_27067 = (state_27069[(2)]);var state_27069__$1 = state_27069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27069__$1,inst_27067);
} else
{if((state_val_27070 === (1)))
{var inst_27058 = cljs.core.first.call(null,result);var inst_27059 = cljs.core.second.call(null,result);var inst_27060 = cljs.core.nth.call(null,result,(2));var inst_27061 = cljs.core.nth.call(null,result,(3));var inst_27062 = [inst_27058,inst_27059,inst_27060,inst_27061,request];var inst_27063 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27062,null));var inst_27064 = ["loadStock",inst_27063];var inst_27065 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27064,null));var state_27069__$1 = state_27069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27069__$1,(2),ch,inst_27065);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27074 = [null,null,null,null,null,null,null];(statearr_27074[(0)] = state_machine__6188__auto__);
(statearr_27074[(1)] = (1));
return statearr_27074;
});
var state_machine__6188__auto____1 = (function (state_27069){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27069);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27075){if((e27075 instanceof Object))
{var ex__6191__auto__ = e27075;var statearr_27076_27106 = state_27069;(statearr_27076_27106[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27107 = state_27069;
state_27069 = G__27107;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_27077 = f__6203__auto__.call(null);(statearr_27077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27077;
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
return (function (state_27137){var state_val_27138 = (state_27137[(1)]);if((state_val_27138 === (2)))
{var inst_27135 = (state_27137[(2)]);var state_27137__$1 = state_27137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27137__$1,inst_27135);
} else
{if((state_val_27138 === (1)))
{var inst_27127 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_27128 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_27129 = cljs.core.get.call(null,inst_27127,inst_27128);var inst_27130 = [null,inst_27129,request];var inst_27131 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27130,null));var inst_27132 = ["view",inst_27131];var inst_27133 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27132,null));var state_27137__$1 = state_27137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27137__$1,(2),ch,inst_27133);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27142 = [null,null,null,null,null,null,null];(statearr_27142[(0)] = state_machine__6188__auto__);
(statearr_27142[(1)] = (1));
return statearr_27142;
});
var state_machine__6188__auto____1 = (function (state_27137){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27137);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27143){if((e27143 instanceof Object))
{var ex__6191__auto__ = e27143;var statearr_27144_27146 = state_27137;(statearr_27144_27146[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27147 = state_27137;
state_27137 = G__27147;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27137){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_27145 = f__6203__auto__.call(null);(statearr_27145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_27171){var state_val_27172 = (state_27171[(1)]);if((state_val_27172 === (2)))
{var inst_27169 = (state_27171[(2)]);var state_27171__$1 = state_27171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27171__$1,inst_27169);
} else
{if((state_val_27172 === (1)))
{var inst_27164 = [null,null,request];var inst_27165 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27164,null));var inst_27166 = ["view",inst_27165];var inst_27167 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_27166,null));var state_27171__$1 = state_27171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(2),ch,inst_27167);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27176 = [null,null,null,null,null,null,null];(statearr_27176[(0)] = state_machine__6188__auto__);
(statearr_27176[(1)] = (1));
return statearr_27176;
});
var state_machine__6188__auto____1 = (function (state_27171){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27171);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27177){if((e27177 instanceof Object))
{var ex__6191__auto__ = e27177;var statearr_27178_27180 = state_27171;(statearr_27178_27180[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27181 = state_27171;
state_27171 = G__27181;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27171){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_27179 = f__6203__auto__.call(null);(statearr_27179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
