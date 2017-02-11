// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.stock.dbfile');
goog.require('app.stock.dbfile');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_20984){var state_val_20985 = (state_20984[(1)]);if((state_val_20985 === (3)))
{var inst_20982 = (state_20984[(2)]);var state_20984__$1 = state_20984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20984__$1,inst_20982);
} else
{if((state_val_20985 === (2)))
{var inst_20974 = (state_20984[(2)]);var inst_20975 = cljs.core.nth.call(null,inst_20974,(0),null);var inst_20976 = cljs.core.nth.call(null,inst_20974,(1),null);var inst_20977 = [inst_20975,inst_20976,id,date,request];var inst_20978 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20977,null));var inst_20979 = ["loadStock",inst_20978];var inst_20980 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20979,null));var state_20984__$1 = state_20984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20984__$1,(3),ch,inst_20980);
} else
{if((state_val_20985 === (1)))
{var inst_20972 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_20984__$1 = state_20984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20984__$1,(2),inst_20972);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20989 = [null,null,null,null,null,null,null];(statearr_20989[(0)] = state_machine__6188__auto__);
(statearr_20989[(1)] = (1));
return statearr_20989;
});
var state_machine__6188__auto____1 = (function (state_20984){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20984);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20990){if((e20990 instanceof Object))
{var ex__6191__auto__ = e20990;var statearr_20991_20993 = state_20984;(statearr_20991_20993[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20994 = state_20984;
state_20984 = G__20994;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20984){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20992 = f__6203__auto__.call(null);(statearr_20992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_20962){var state_val_20963 = (state_20962[(1)]);if((state_val_20963 === (2)))
{var inst_20960 = (state_20962[(2)]);var state_20962__$1 = state_20962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20962__$1,inst_20960);
} else
{if((state_val_20963 === (1)))
{var inst_20951 = cljs.core.first.call(null,result);var inst_20952 = cljs.core.second.call(null,result);var inst_20953 = cljs.core.nth.call(null,result,(2));var inst_20954 = cljs.core.nth.call(null,result,(3));var inst_20955 = [inst_20951,inst_20952,inst_20953,inst_20954,request];var inst_20956 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20955,null));var inst_20957 = ["loadStock",inst_20956];var inst_20958 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20957,null));var state_20962__$1 = state_20962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20962__$1,(2),ch,inst_20958);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20967 = [null,null,null,null,null,null,null];(statearr_20967[(0)] = state_machine__6188__auto__);
(statearr_20967[(1)] = (1));
return statearr_20967;
});
var state_machine__6188__auto____1 = (function (state_20962){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20962);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20968){if((e20968 instanceof Object))
{var ex__6191__auto__ = e20968;var statearr_20969_20995 = state_20962;(statearr_20969_20995[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20996 = state_20962;
state_20962 = G__20996;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20962){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20970 = f__6203__auto__.call(null);(statearr_20970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20970;
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
return (function (state_21032){var state_val_21033 = (state_21032[(1)]);if((state_val_21033 === (3)))
{var inst_21030 = (state_21032[(2)]);var state_21032__$1 = state_21032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21032__$1,inst_21030);
} else
{if((state_val_21033 === (2)))
{var inst_21022 = (state_21032[(2)]);var inst_21023 = cljs.core.nth.call(null,inst_21022,(0),null);var inst_21024 = cljs.core.nth.call(null,inst_21022,(1),null);var inst_21025 = [inst_21023,inst_21024,request];var inst_21026 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21025,null));var inst_21027 = ["view",inst_21026];var inst_21028 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21027,null));var state_21032__$1 = state_21032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21032__$1,(3),ch,inst_21028);
} else
{if((state_val_21033 === (1)))
{var inst_21020 = app.stock.dbfile.loadFromUser.call(null,fbid,accessToken);var state_21032__$1 = state_21032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21032__$1,(2),inst_21020);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21037 = [null,null,null,null,null,null,null];(statearr_21037[(0)] = state_machine__6188__auto__);
(statearr_21037[(1)] = (1));
return statearr_21037;
});
var state_machine__6188__auto____1 = (function (state_21032){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21038){if((e21038 instanceof Object))
{var ex__6191__auto__ = e21038;var statearr_21039_21041 = state_21032;(statearr_21039_21041[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21042 = state_21032;
state_21032 = G__21042;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21032){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_21040 = f__6203__auto__.call(null);(statearr_21040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_21080){var state_val_21081 = (state_21080[(1)]);if((state_val_21081 === (3)))
{var inst_21078 = (state_21080[(2)]);var state_21080__$1 = state_21080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21080__$1,inst_21078);
} else
{if((state_val_21081 === (2)))
{var inst_21070 = (state_21080[(2)]);var inst_21071 = cljs.core.nth.call(null,inst_21070,(0),null);var inst_21072 = cljs.core.nth.call(null,inst_21070,(1),null);var inst_21073 = [inst_21071,inst_21072,request];var inst_21074 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21073,null));var inst_21075 = ["view",inst_21074];var inst_21076 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21075,null));var state_21080__$1 = state_21080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21080__$1,(3),ch,inst_21076);
} else
{if((state_val_21081 === (1)))
{var inst_21067 = JSON.stringify(data);var inst_21068 = app.stock.dbfile.saveToUser.call(null,fbid,accessToken,inst_21067);var state_21080__$1 = state_21080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21080__$1,(2),inst_21068);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21085 = [null,null,null,null,null,null,null];(statearr_21085[(0)] = state_machine__6188__auto__);
(statearr_21085[(1)] = (1));
return statearr_21085;
});
var state_machine__6188__auto____1 = (function (state_21080){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21080);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21086){if((e21086 instanceof Object))
{var ex__6191__auto__ = e21086;var statearr_21087_21089 = state_21080;(statearr_21087_21089[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21090 = state_21080;
state_21080 = G__21090;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21080){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_21088 = f__6203__auto__.call(null);(statearr_21088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
