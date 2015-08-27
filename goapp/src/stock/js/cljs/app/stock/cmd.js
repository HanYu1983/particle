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
return (function (state_85023){var state_val_85024 = (state_85023[(1)]);if((state_val_85024 === (3)))
{var inst_85021 = (state_85023[(2)]);var state_85023__$1 = state_85023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85023__$1,inst_85021);
} else
{if((state_val_85024 === (2)))
{var inst_85010 = (state_85023[(2)]);var inst_85011 = cljs.core.nth.call(null,inst_85010,(0),null);var inst_85012 = cljs.core.nth.call(null,inst_85010,(1),null);var inst_85013 = stock.tool.parse_getprices.call(null,inst_85012);var inst_85014 = stock.tool.format_getprices.call(null,(86400),inst_85013);var inst_85015 = cljs.core.reverse.call(null,inst_85014);var inst_85016 = [inst_85011,inst_85015,id,date,request];var inst_85017 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85016,null));var inst_85018 = ["loadStock",inst_85017];var inst_85019 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85018,null));var state_85023__$1 = state_85023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85023__$1,(3),ch,inst_85019);
} else
{if((state_val_85024 === (1)))
{var inst_85007 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_85008 = stock.tool.content.call(null,inst_85007);var state_85023__$1 = state_85023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85023__$1,(2),inst_85008);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85028 = [null,null,null,null,null,null,null];(statearr_85028[(0)] = state_machine__6188__auto__);
(statearr_85028[(1)] = (1));
return statearr_85028;
});
var state_machine__6188__auto____1 = (function (state_85023){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85029){if((e85029 instanceof Object))
{var ex__6191__auto__ = e85029;var statearr_85030_85032 = state_85023;(statearr_85030_85032[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85033 = state_85023;
state_85023 = G__85033;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85023){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85031 = f__6203__auto__.call(null);(statearr_85031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84997){var state_val_84998 = (state_84997[(1)]);if((state_val_84998 === (2)))
{var inst_84995 = (state_84997[(2)]);var state_84997__$1 = state_84997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84997__$1,inst_84995);
} else
{if((state_val_84998 === (1)))
{var inst_84986 = cljs.core.first.call(null,result);var inst_84987 = cljs.core.second.call(null,result);var inst_84988 = cljs.core.nth.call(null,result,(2));var inst_84989 = cljs.core.nth.call(null,result,(3));var inst_84990 = [inst_84986,inst_84987,inst_84988,inst_84989,request];var inst_84991 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84990,null));var inst_84992 = ["loadStock",inst_84991];var inst_84993 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84992,null));var state_84997__$1 = state_84997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84997__$1,(2),ch,inst_84993);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85002 = [null,null,null,null,null,null,null];(statearr_85002[(0)] = state_machine__6188__auto__);
(statearr_85002[(1)] = (1));
return statearr_85002;
});
var state_machine__6188__auto____1 = (function (state_84997){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84997);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85003){if((e85003 instanceof Object))
{var ex__6191__auto__ = e85003;var statearr_85004_85034 = state_84997;(statearr_85004_85034[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85035 = state_84997;
state_84997 = G__85035;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84997){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85005 = f__6203__auto__.call(null);(statearr_85005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85005;
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
return (function (state_85086){var state_val_85087 = (state_85086[(1)]);if((state_val_85087 === (6)))
{var inst_85073 = (state_85086[(7)]);var inst_85078 = (state_85086[(2)]);var inst_85079 = [inst_85078,inst_85073,request];var inst_85080 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85079,null));var inst_85081 = ["view",inst_85080];var inst_85082 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85081,null));var state_85086__$1 = state_85086;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85086__$1,(3),ch,inst_85082);
} else
{if((state_val_85087 === (5)))
{var inst_85073 = (state_85086[(7)]);var inst_85076 = inst_85073.error;var state_85086__$1 = state_85086;var statearr_85088_85100 = state_85086__$1;(statearr_85088_85100[(2)] = inst_85076);
(statearr_85088_85100[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85087 === (4)))
{var inst_85072 = (state_85086[(8)]);var state_85086__$1 = state_85086;var statearr_85089_85101 = state_85086__$1;(statearr_85089_85101[(2)] = inst_85072);
(statearr_85089_85101[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85087 === (3)))
{var inst_85084 = (state_85086[(2)]);var state_85086__$1 = state_85086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85086__$1,inst_85084);
} else
{if((state_val_85087 === (2)))
{var inst_85072 = (state_85086[(8)]);var inst_85071 = (state_85086[(2)]);var inst_85072__$1 = cljs.core.nth.call(null,inst_85071,(0),null);var inst_85073 = cljs.core.nth.call(null,inst_85071,(1),null);var state_85086__$1 = (function (){var statearr_85090 = state_85086;(statearr_85090[(7)] = inst_85073);
(statearr_85090[(8)] = inst_85072__$1);
return statearr_85090;
})();if(cljs.core.truth_(inst_85072__$1))
{var statearr_85091_85102 = state_85086__$1;(statearr_85091_85102[(1)] = (4));
} else
{var statearr_85092_85103 = state_85086__$1;(statearr_85092_85103[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85087 === (1)))
{var inst_85069 = app.dbfile.load.call(null,"stock",fbid);var state_85086__$1 = state_85086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85086__$1,(2),inst_85069);
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
var state_machine__6188__auto____0 = (function (){var statearr_85096 = [null,null,null,null,null,null,null,null,null];(statearr_85096[(0)] = state_machine__6188__auto__);
(statearr_85096[(1)] = (1));
return statearr_85096;
});
var state_machine__6188__auto____1 = (function (state_85086){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85086);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85097){if((e85097 instanceof Object))
{var ex__6191__auto__ = e85097;var statearr_85098_85104 = state_85086;(statearr_85098_85104[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85105 = state_85086;
state_85086 = G__85105;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85086){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85099 = f__6203__auto__.call(null);(statearr_85099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_85158){var state_val_85159 = (state_85158[(1)]);if((state_val_85159 === (6)))
{var inst_85145 = (state_85158[(7)]);var inst_85150 = (state_85158[(2)]);var inst_85151 = [inst_85150,inst_85145,request];var inst_85152 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85151,null));var inst_85153 = ["view",inst_85152];var inst_85154 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85153,null));var state_85158__$1 = state_85158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85158__$1,(3),ch,inst_85154);
} else
{if((state_val_85159 === (5)))
{var inst_85145 = (state_85158[(7)]);var inst_85148 = inst_85145.error;var state_85158__$1 = state_85158;var statearr_85160_85172 = state_85158__$1;(statearr_85160_85172[(2)] = inst_85148);
(statearr_85160_85172[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85159 === (4)))
{var inst_85144 = (state_85158[(8)]);var state_85158__$1 = state_85158;var statearr_85161_85173 = state_85158__$1;(statearr_85161_85173[(2)] = inst_85144);
(statearr_85161_85173[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85159 === (3)))
{var inst_85156 = (state_85158[(2)]);var state_85158__$1 = state_85158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85158__$1,inst_85156);
} else
{if((state_val_85159 === (2)))
{var inst_85144 = (state_85158[(8)]);var inst_85143 = (state_85158[(2)]);var inst_85144__$1 = cljs.core.nth.call(null,inst_85143,(0),null);var inst_85145 = cljs.core.nth.call(null,inst_85143,(1),null);var state_85158__$1 = (function (){var statearr_85162 = state_85158;(statearr_85162[(8)] = inst_85144__$1);
(statearr_85162[(7)] = inst_85145);
return statearr_85162;
})();if(cljs.core.truth_(inst_85144__$1))
{var statearr_85163_85174 = state_85158__$1;(statearr_85163_85174[(1)] = (4));
} else
{var statearr_85164_85175 = state_85158__$1;(statearr_85164_85175[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85159 === (1)))
{var inst_85140 = JSON.stringify(data);var inst_85141 = app.dbfile.save.call(null,"stock",fbid,inst_85140);var state_85158__$1 = state_85158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85158__$1,(2),inst_85141);
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
var state_machine__6188__auto____0 = (function (){var statearr_85168 = [null,null,null,null,null,null,null,null,null];(statearr_85168[(0)] = state_machine__6188__auto__);
(statearr_85168[(1)] = (1));
return statearr_85168;
});
var state_machine__6188__auto____1 = (function (state_85158){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85169){if((e85169 instanceof Object))
{var ex__6191__auto__ = e85169;var statearr_85170_85176 = state_85158;(statearr_85170_85176[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85177 = state_85158;
state_85158 = G__85177;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85158){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85171 = f__6203__auto__.call(null);(statearr_85171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
