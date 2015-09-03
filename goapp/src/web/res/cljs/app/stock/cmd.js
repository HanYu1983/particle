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
return (function (state_20073){var state_val_20074 = (state_20073[(1)]);if((state_val_20074 === (3)))
{var inst_20071 = (state_20073[(2)]);var state_20073__$1 = state_20073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20073__$1,inst_20071);
} else
{if((state_val_20074 === (2)))
{var inst_20060 = (state_20073[(2)]);var inst_20061 = cljs.core.nth.call(null,inst_20060,(0),null);var inst_20062 = cljs.core.nth.call(null,inst_20060,(1),null);var inst_20063 = stock.tool.parse_getprices.call(null,inst_20062);var inst_20064 = stock.tool.format_getprices.call(null,(86400),inst_20063);var inst_20065 = cljs.core.reverse.call(null,inst_20064);var inst_20066 = [inst_20061,inst_20065,id,date,request];var inst_20067 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20066,null));var inst_20068 = ["loadStock",inst_20067];var inst_20069 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20068,null));var state_20073__$1 = state_20073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20073__$1,(3),ch,inst_20069);
} else
{if((state_val_20074 === (1)))
{var inst_20057 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_20058 = stock.tool.content.call(null,inst_20057);var state_20073__$1 = state_20073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20073__$1,(2),inst_20058);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20078 = [null,null,null,null,null,null,null];(statearr_20078[(0)] = state_machine__6188__auto__);
(statearr_20078[(1)] = (1));
return statearr_20078;
});
var state_machine__6188__auto____1 = (function (state_20073){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20073);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20079){if((e20079 instanceof Object))
{var ex__6191__auto__ = e20079;var statearr_20080_20082 = state_20073;(statearr_20080_20082[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20083 = state_20073;
state_20073 = G__20083;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20073){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20081 = f__6203__auto__.call(null);(statearr_20081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_20047){var state_val_20048 = (state_20047[(1)]);if((state_val_20048 === (2)))
{var inst_20045 = (state_20047[(2)]);var state_20047__$1 = state_20047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20047__$1,inst_20045);
} else
{if((state_val_20048 === (1)))
{var inst_20036 = cljs.core.first.call(null,result);var inst_20037 = cljs.core.second.call(null,result);var inst_20038 = cljs.core.nth.call(null,result,(2));var inst_20039 = cljs.core.nth.call(null,result,(3));var inst_20040 = [inst_20036,inst_20037,inst_20038,inst_20039,request];var inst_20041 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20040,null));var inst_20042 = ["loadStock",inst_20041];var inst_20043 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20042,null));var state_20047__$1 = state_20047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20047__$1,(2),ch,inst_20043);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_20052 = [null,null,null,null,null,null,null];(statearr_20052[(0)] = state_machine__6188__auto__);
(statearr_20052[(1)] = (1));
return statearr_20052;
});
var state_machine__6188__auto____1 = (function (state_20047){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20053){if((e20053 instanceof Object))
{var ex__6191__auto__ = e20053;var statearr_20054_20084 = state_20047;(statearr_20054_20084[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20085 = state_20047;
state_20047 = G__20085;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20047){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20055 = f__6203__auto__.call(null);(statearr_20055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20055;
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
return (function (state_20136){var state_val_20137 = (state_20136[(1)]);if((state_val_20137 === (6)))
{var inst_20123 = (state_20136[(7)]);var inst_20128 = (state_20136[(2)]);var inst_20129 = [inst_20128,inst_20123,request];var inst_20130 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20129,null));var inst_20131 = ["view",inst_20130];var inst_20132 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20131,null));var state_20136__$1 = state_20136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20136__$1,(3),ch,inst_20132);
} else
{if((state_val_20137 === (5)))
{var inst_20123 = (state_20136[(7)]);var inst_20126 = inst_20123.error;var state_20136__$1 = state_20136;var statearr_20138_20150 = state_20136__$1;(statearr_20138_20150[(2)] = inst_20126);
(statearr_20138_20150[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20137 === (4)))
{var inst_20122 = (state_20136[(8)]);var state_20136__$1 = state_20136;var statearr_20139_20151 = state_20136__$1;(statearr_20139_20151[(2)] = inst_20122);
(statearr_20139_20151[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20137 === (3)))
{var inst_20134 = (state_20136[(2)]);var state_20136__$1 = state_20136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20136__$1,inst_20134);
} else
{if((state_val_20137 === (2)))
{var inst_20122 = (state_20136[(8)]);var inst_20121 = (state_20136[(2)]);var inst_20122__$1 = cljs.core.nth.call(null,inst_20121,(0),null);var inst_20123 = cljs.core.nth.call(null,inst_20121,(1),null);var state_20136__$1 = (function (){var statearr_20140 = state_20136;(statearr_20140[(8)] = inst_20122__$1);
(statearr_20140[(7)] = inst_20123);
return statearr_20140;
})();if(cljs.core.truth_(inst_20122__$1))
{var statearr_20141_20152 = state_20136__$1;(statearr_20141_20152[(1)] = (4));
} else
{var statearr_20142_20153 = state_20136__$1;(statearr_20142_20153[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20137 === (1)))
{var inst_20119 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_20136__$1 = state_20136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20136__$1,(2),inst_20119);
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
var state_machine__6188__auto____0 = (function (){var statearr_20146 = [null,null,null,null,null,null,null,null,null];(statearr_20146[(0)] = state_machine__6188__auto__);
(statearr_20146[(1)] = (1));
return statearr_20146;
});
var state_machine__6188__auto____1 = (function (state_20136){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20136);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20147){if((e20147 instanceof Object))
{var ex__6191__auto__ = e20147;var statearr_20148_20154 = state_20136;(statearr_20148_20154[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20155 = state_20136;
state_20136 = G__20155;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20136){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20149 = f__6203__auto__.call(null);(statearr_20149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_20208){var state_val_20209 = (state_20208[(1)]);if((state_val_20209 === (6)))
{var inst_20195 = (state_20208[(7)]);var inst_20200 = (state_20208[(2)]);var inst_20201 = [inst_20200,inst_20195,request];var inst_20202 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20201,null));var inst_20203 = ["view",inst_20202];var inst_20204 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_20203,null));var state_20208__$1 = state_20208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20208__$1,(3),ch,inst_20204);
} else
{if((state_val_20209 === (5)))
{var inst_20195 = (state_20208[(7)]);var inst_20198 = inst_20195.error;var state_20208__$1 = state_20208;var statearr_20210_20222 = state_20208__$1;(statearr_20210_20222[(2)] = inst_20198);
(statearr_20210_20222[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20209 === (4)))
{var inst_20194 = (state_20208[(8)]);var state_20208__$1 = state_20208;var statearr_20211_20223 = state_20208__$1;(statearr_20211_20223[(2)] = inst_20194);
(statearr_20211_20223[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20209 === (3)))
{var inst_20206 = (state_20208[(2)]);var state_20208__$1 = state_20208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20208__$1,inst_20206);
} else
{if((state_val_20209 === (2)))
{var inst_20194 = (state_20208[(8)]);var inst_20193 = (state_20208[(2)]);var inst_20194__$1 = cljs.core.nth.call(null,inst_20193,(0),null);var inst_20195 = cljs.core.nth.call(null,inst_20193,(1),null);var state_20208__$1 = (function (){var statearr_20212 = state_20208;(statearr_20212[(8)] = inst_20194__$1);
(statearr_20212[(7)] = inst_20195);
return statearr_20212;
})();if(cljs.core.truth_(inst_20194__$1))
{var statearr_20213_20224 = state_20208__$1;(statearr_20213_20224[(1)] = (4));
} else
{var statearr_20214_20225 = state_20208__$1;(statearr_20214_20225[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20209 === (1)))
{var inst_20190 = JSON.stringify(data);var inst_20191 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_20190);var state_20208__$1 = state_20208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20208__$1,(2),inst_20191);
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
var state_machine__6188__auto____0 = (function (){var statearr_20218 = [null,null,null,null,null,null,null,null,null];(statearr_20218[(0)] = state_machine__6188__auto__);
(statearr_20218[(1)] = (1));
return statearr_20218;
});
var state_machine__6188__auto____1 = (function (state_20208){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_20208);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e20219){if((e20219 instanceof Object))
{var ex__6191__auto__ = e20219;var statearr_20220_20226 = state_20208;(statearr_20220_20226[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20208);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20219;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20227 = state_20208;
state_20208 = G__20227;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_20208){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_20208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_20221 = f__6203__auto__.call(null);(statearr_20221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_20221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
