// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.cmd.stockDir = (5489861557485568);
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_81849){var state_val_81850 = (state_81849[(1)]);if((state_val_81850 === (3)))
{var inst_81847 = (state_81849[(2)]);var state_81849__$1 = state_81849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81849__$1,inst_81847);
} else
{if((state_val_81850 === (2)))
{var inst_81836 = (state_81849[(2)]);var inst_81837 = cljs.core.nth.call(null,inst_81836,(0),null);var inst_81838 = cljs.core.nth.call(null,inst_81836,(1),null);var inst_81839 = stock.tool.parse_getprices.call(null,inst_81838);var inst_81840 = stock.tool.format_getprices.call(null,(86400),inst_81839);var inst_81841 = cljs.core.reverse.call(null,inst_81840);var inst_81842 = [inst_81837,inst_81841,id,date,request];var inst_81843 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81842,null));var inst_81844 = ["loadStock",inst_81843];var inst_81845 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81844,null));var state_81849__$1 = state_81849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81849__$1,(3),ch,inst_81845);
} else
{if((state_val_81850 === (1)))
{var inst_81833 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_81834 = stock.tool.content.call(null,inst_81833);var state_81849__$1 = state_81849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81849__$1,(2),inst_81834);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_81854 = [null,null,null,null,null,null,null];(statearr_81854[(0)] = state_machine__6188__auto__);
(statearr_81854[(1)] = (1));
return statearr_81854;
});
var state_machine__6188__auto____1 = (function (state_81849){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81855){if((e81855 instanceof Object))
{var ex__6191__auto__ = e81855;var statearr_81856_81858 = state_81849;(statearr_81856_81858[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81859 = state_81849;
state_81849 = G__81859;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81849){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81857 = f__6203__auto__.call(null);(statearr_81857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_81823){var state_val_81824 = (state_81823[(1)]);if((state_val_81824 === (2)))
{var inst_81821 = (state_81823[(2)]);var state_81823__$1 = state_81823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81823__$1,inst_81821);
} else
{if((state_val_81824 === (1)))
{var inst_81812 = cljs.core.first.call(null,result);var inst_81813 = cljs.core.second.call(null,result);var inst_81814 = cljs.core.nth.call(null,result,(2));var inst_81815 = cljs.core.nth.call(null,result,(3));var inst_81816 = [inst_81812,inst_81813,inst_81814,inst_81815,request];var inst_81817 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81816,null));var inst_81818 = ["loadStock",inst_81817];var inst_81819 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81818,null));var state_81823__$1 = state_81823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81823__$1,(2),ch,inst_81819);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_81828 = [null,null,null,null,null,null,null];(statearr_81828[(0)] = state_machine__6188__auto__);
(statearr_81828[(1)] = (1));
return statearr_81828;
});
var state_machine__6188__auto____1 = (function (state_81823){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81829){if((e81829 instanceof Object))
{var ex__6191__auto__ = e81829;var statearr_81830_81860 = state_81823;(statearr_81830_81860[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81861 = state_81823;
state_81823 = G__81861;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81823){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81831 = f__6203__auto__.call(null);(statearr_81831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81831;
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
return (function (state_81923){var state_val_81924 = (state_81923[(1)]);if((state_val_81924 === (5)))
{var inst_81921 = (state_81923[(2)]);var state_81923__$1 = state_81923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81923__$1,inst_81921);
} else
{if((state_val_81924 === (4)))
{var inst_81913 = (state_81923[(2)]);var inst_81914 = cljs.core.nth.call(null,inst_81913,(0),null);var inst_81915 = cljs.core.nth.call(null,inst_81913,(1),null);var inst_81916 = [inst_81914,inst_81915,request];var inst_81917 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81916,null));var inst_81918 = ["view",inst_81917];var inst_81919 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81918,null));var state_81923__$1 = state_81923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81923__$1,(5),ch,inst_81919);
} else
{if((state_val_81924 === (3)))
{var inst_81908 = (state_81923[(2)]);var inst_81909 = cljs.core.nth.call(null,inst_81908,(0),null);var inst_81910 = cljs.core.nth.call(null,inst_81908,(1),null);var inst_81911 = app.dbfile.file.call(null,inst_81910,"json");var state_81923__$1 = (function (){var statearr_81925 = state_81923;(statearr_81925[(7)] = inst_81909);
return statearr_81925;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81923__$1,(4),inst_81911);
} else
{if((state_val_81924 === (2)))
{var inst_81903 = (state_81923[(2)]);var inst_81904 = cljs.core.nth.call(null,inst_81903,(0),null);var inst_81905 = cljs.core.nth.call(null,inst_81903,(1),null);var inst_81906 = app.dbfile.name__GT_id.call(null,inst_81905,"userinfo.json");var state_81923__$1 = (function (){var statearr_81926 = state_81923;(statearr_81926[(8)] = inst_81904);
return statearr_81926;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81923__$1,(3),inst_81906);
} else
{if((state_val_81924 === (1)))
{var inst_81901 = app.dbfile.name__GT_id.call(null,app.stock.cmd.stockDir,fbid);var state_81923__$1 = state_81923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81923__$1,(2),inst_81901);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_81930 = [null,null,null,null,null,null,null,null,null];(statearr_81930[(0)] = state_machine__6188__auto__);
(statearr_81930[(1)] = (1));
return statearr_81930;
});
var state_machine__6188__auto____1 = (function (state_81923){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81923);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81931){if((e81931 instanceof Object))
{var ex__6191__auto__ = e81931;var statearr_81932_81934 = state_81923;(statearr_81932_81934[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81935 = state_81923;
state_81923 = G__81935;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81923){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81933 = f__6203__auto__.call(null);(statearr_81933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_82006){var state_val_82007 = (state_82006[(1)]);if((state_val_82007 === (6)))
{var inst_82004 = (state_82006[(2)]);var state_82006__$1 = state_82006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82006__$1,inst_82004);
} else
{if((state_val_82007 === (5)))
{var inst_81996 = (state_82006[(2)]);var inst_81997 = cljs.core.nth.call(null,inst_81996,(0),null);var inst_81998 = cljs.core.nth.call(null,inst_81996,(1),null);var inst_81999 = [inst_81997,inst_81998,request];var inst_82000 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81999,null));var inst_82001 = ["view",inst_82000];var inst_82002 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82001,null));var state_82006__$1 = state_82006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82006__$1,(6),ch,inst_82002);
} else
{if((state_val_82007 === (4)))
{var inst_81990 = (state_82006[(2)]);var inst_81991 = cljs.core.nth.call(null,inst_81990,(0),null);var inst_81992 = cljs.core.nth.call(null,inst_81990,(1),null);var inst_81993 = JSON.stringify(data);var inst_81994 = app.dbfile.makeFile.call(null,inst_81992,"userinfo.json",inst_81993,true);var state_82006__$1 = (function (){var statearr_82008 = state_82006;(statearr_82008[(7)] = inst_81991);
return statearr_82008;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82006__$1,(5),inst_81994);
} else
{if((state_val_82007 === (3)))
{var inst_81987 = (state_82006[(2)]);var inst_81988 = app.dbfile.name__GT_id.call(null,app.stock.cmd.stockDir,fbid);var state_82006__$1 = (function (){var statearr_82009 = state_82006;(statearr_82009[(8)] = inst_81987);
return statearr_82009;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82006__$1,(4),inst_81988);
} else
{if((state_val_82007 === (2)))
{var inst_81982 = (state_82006[(2)]);var inst_81983 = cljs.core.nth.call(null,inst_81982,(0),null);var inst_81984 = cljs.core.nth.call(null,inst_81982,(1),null);var inst_81985 = cljs.core.async.timeout.call(null,(1000));var state_82006__$1 = (function (){var statearr_82010 = state_82006;(statearr_82010[(9)] = inst_81983);
(statearr_82010[(10)] = inst_81984);
return statearr_82010;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82006__$1,(3),inst_81985);
} else
{if((state_val_82007 === (1)))
{var inst_81980 = app.dbfile.makeDir.call(null,app.stock.cmd.stockDir,fbid);var state_82006__$1 = state_82006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82006__$1,(2),inst_81980);
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
var state_machine__6188__auto____0 = (function (){var statearr_82014 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_82014[(0)] = state_machine__6188__auto__);
(statearr_82014[(1)] = (1));
return statearr_82014;
});
var state_machine__6188__auto____1 = (function (state_82006){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82015){if((e82015 instanceof Object))
{var ex__6191__auto__ = e82015;var statearr_82016_82018 = state_82006;(statearr_82016_82018[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82019 = state_82006;
state_82006 = G__82019;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82006){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82017 = f__6203__auto__.call(null);(statearr_82017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
