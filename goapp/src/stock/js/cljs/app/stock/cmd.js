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
return (function (state_26925){var state_val_26926 = (state_26925[(1)]);if((state_val_26926 === (3)))
{var inst_26923 = (state_26925[(2)]);var state_26925__$1 = state_26925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26925__$1,inst_26923);
} else
{if((state_val_26926 === (2)))
{var inst_26912 = (state_26925[(2)]);var inst_26913 = cljs.core.nth.call(null,inst_26912,(0),null);var inst_26914 = cljs.core.nth.call(null,inst_26912,(1),null);var inst_26915 = stock.tool.parse_getprices.call(null,inst_26914);var inst_26916 = stock.tool.format_getprices.call(null,(86400),inst_26915);var inst_26917 = cljs.core.reverse.call(null,inst_26916);var inst_26918 = [inst_26913,inst_26917,id,date,request];var inst_26919 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26918,null));var inst_26920 = ["loadStock",inst_26919];var inst_26921 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26920,null));var state_26925__$1 = state_26925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26925__$1,(3),ch,inst_26921);
} else
{if((state_val_26926 === (1)))
{var inst_26909 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_26910 = stock.tool.content.call(null,inst_26909);var state_26925__$1 = state_26925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26925__$1,(2),inst_26910);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26930 = [null,null,null,null,null,null,null];(statearr_26930[(0)] = state_machine__6188__auto__);
(statearr_26930[(1)] = (1));
return statearr_26930;
});
var state_machine__6188__auto____1 = (function (state_26925){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26925);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26931){if((e26931 instanceof Object))
{var ex__6191__auto__ = e26931;var statearr_26932_26934 = state_26925;(statearr_26932_26934[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26925);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26935 = state_26925;
state_26925 = G__26935;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26925){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26933 = f__6203__auto__.call(null);(statearr_26933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26899){var state_val_26900 = (state_26899[(1)]);if((state_val_26900 === (2)))
{var inst_26897 = (state_26899[(2)]);var state_26899__$1 = state_26899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26899__$1,inst_26897);
} else
{if((state_val_26900 === (1)))
{var inst_26888 = cljs.core.first.call(null,result);var inst_26889 = cljs.core.second.call(null,result);var inst_26890 = cljs.core.nth.call(null,result,(2));var inst_26891 = cljs.core.nth.call(null,result,(3));var inst_26892 = [inst_26888,inst_26889,inst_26890,inst_26891,request];var inst_26893 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26892,null));var inst_26894 = ["loadStock",inst_26893];var inst_26895 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26894,null));var state_26899__$1 = state_26899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26899__$1,(2),ch,inst_26895);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26904 = [null,null,null,null,null,null,null];(statearr_26904[(0)] = state_machine__6188__auto__);
(statearr_26904[(1)] = (1));
return statearr_26904;
});
var state_machine__6188__auto____1 = (function (state_26899){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26905){if((e26905 instanceof Object))
{var ex__6191__auto__ = e26905;var statearr_26906_26936 = state_26899;(statearr_26906_26936[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26937 = state_26899;
state_26899 = G__26937;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26899){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26907 = f__6203__auto__.call(null);(statearr_26907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26907;
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
return (function (state_26967){var state_val_26968 = (state_26967[(1)]);if((state_val_26968 === (2)))
{var inst_26965 = (state_26967[(2)]);var state_26967__$1 = state_26967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else
{if((state_val_26968 === (1)))
{var inst_26957 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_26958 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_26959 = cljs.core.get.call(null,inst_26957,inst_26958);var inst_26960 = [null,inst_26959,request];var inst_26961 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26960,null));var inst_26962 = ["view",inst_26961];var inst_26963 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26962,null));var state_26967__$1 = state_26967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(2),ch,inst_26963);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26972 = [null,null,null,null,null,null,null];(statearr_26972[(0)] = state_machine__6188__auto__);
(statearr_26972[(1)] = (1));
return statearr_26972;
});
var state_machine__6188__auto____1 = (function (state_26967){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26973){if((e26973 instanceof Object))
{var ex__6191__auto__ = e26973;var statearr_26974_26976 = state_26967;(statearr_26974_26976[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26977 = state_26967;
state_26967 = G__26977;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26975 = f__6203__auto__.call(null);(statearr_26975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_27001){var state_val_27002 = (state_27001[(1)]);if((state_val_27002 === (2)))
{var inst_26999 = (state_27001[(2)]);var state_27001__$1 = state_27001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27001__$1,inst_26999);
} else
{if((state_val_27002 === (1)))
{var inst_26994 = [null,null,request];var inst_26995 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26994,null));var inst_26996 = ["view",inst_26995];var inst_26997 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26996,null));var state_27001__$1 = state_27001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27001__$1,(2),ch,inst_26997);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_27006 = [null,null,null,null,null,null,null];(statearr_27006[(0)] = state_machine__6188__auto__);
(statearr_27006[(1)] = (1));
return statearr_27006;
});
var state_machine__6188__auto____1 = (function (state_27001){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_27001);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e27007){if((e27007 instanceof Object))
{var ex__6191__auto__ = e27007;var statearr_27008_27010 = state_27001;(statearr_27008_27010[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27011 = state_27001;
state_27001 = G__27011;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_27001){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_27001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_27009 = f__6203__auto__.call(null);(statearr_27009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_27009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
