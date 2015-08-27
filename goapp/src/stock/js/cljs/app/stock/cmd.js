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
return (function (state_38877){var state_val_38878 = (state_38877[(1)]);if((state_val_38878 === (3)))
{var inst_38875 = (state_38877[(2)]);var state_38877__$1 = state_38877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38877__$1,inst_38875);
} else
{if((state_val_38878 === (2)))
{var inst_38864 = (state_38877[(2)]);var inst_38865 = cljs.core.nth.call(null,inst_38864,(0),null);var inst_38866 = cljs.core.nth.call(null,inst_38864,(1),null);var inst_38867 = stock.tool.parse_getprices.call(null,inst_38866);var inst_38868 = stock.tool.format_getprices.call(null,(86400),inst_38867);var inst_38869 = cljs.core.reverse.call(null,inst_38868);var inst_38870 = [inst_38865,inst_38869,id,date,request];var inst_38871 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38870,null));var inst_38872 = ["loadStock",inst_38871];var inst_38873 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38872,null));var state_38877__$1 = state_38877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38877__$1,(3),ch,inst_38873);
} else
{if((state_val_38878 === (1)))
{var inst_38861 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_38862 = stock.tool.content.call(null,inst_38861);var state_38877__$1 = state_38877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38877__$1,(2),inst_38862);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38882 = [null,null,null,null,null,null,null];(statearr_38882[(0)] = state_machine__6188__auto__);
(statearr_38882[(1)] = (1));
return statearr_38882;
});
var state_machine__6188__auto____1 = (function (state_38877){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38877);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38883){if((e38883 instanceof Object))
{var ex__6191__auto__ = e38883;var statearr_38884_38886 = state_38877;(statearr_38884_38886[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38887 = state_38877;
state_38877 = G__38887;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38877){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_38885 = f__6203__auto__.call(null);(statearr_38885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_38851){var state_val_38852 = (state_38851[(1)]);if((state_val_38852 === (2)))
{var inst_38849 = (state_38851[(2)]);var state_38851__$1 = state_38851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38851__$1,inst_38849);
} else
{if((state_val_38852 === (1)))
{var inst_38840 = cljs.core.first.call(null,result);var inst_38841 = cljs.core.second.call(null,result);var inst_38842 = cljs.core.nth.call(null,result,(2));var inst_38843 = cljs.core.nth.call(null,result,(3));var inst_38844 = [inst_38840,inst_38841,inst_38842,inst_38843,request];var inst_38845 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38844,null));var inst_38846 = ["loadStock",inst_38845];var inst_38847 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38846,null));var state_38851__$1 = state_38851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38851__$1,(2),ch,inst_38847);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38856 = [null,null,null,null,null,null,null];(statearr_38856[(0)] = state_machine__6188__auto__);
(statearr_38856[(1)] = (1));
return statearr_38856;
});
var state_machine__6188__auto____1 = (function (state_38851){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38851);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38857){if((e38857 instanceof Object))
{var ex__6191__auto__ = e38857;var statearr_38858_38888 = state_38851;(statearr_38858_38888[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38889 = state_38851;
state_38851 = G__38889;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38851){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_38859 = f__6203__auto__.call(null);(statearr_38859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38859;
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
return (function (state_38919){var state_val_38920 = (state_38919[(1)]);if((state_val_38920 === (2)))
{var inst_38917 = (state_38919[(2)]);var state_38919__$1 = state_38919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38919__$1,inst_38917);
} else
{if((state_val_38920 === (1)))
{var inst_38909 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_38910 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_38911 = cljs.core.get.call(null,inst_38909,inst_38910);var inst_38912 = [null,inst_38911,request];var inst_38913 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38912,null));var inst_38914 = ["view",inst_38913];var inst_38915 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38914,null));var state_38919__$1 = state_38919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38919__$1,(2),ch,inst_38915);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38924 = [null,null,null,null,null,null,null];(statearr_38924[(0)] = state_machine__6188__auto__);
(statearr_38924[(1)] = (1));
return statearr_38924;
});
var state_machine__6188__auto____1 = (function (state_38919){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38919);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38925){if((e38925 instanceof Object))
{var ex__6191__auto__ = e38925;var statearr_38926_38928 = state_38919;(statearr_38926_38928[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38929 = state_38919;
state_38919 = G__38929;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38919){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_38927 = f__6203__auto__.call(null);(statearr_38927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_38953){var state_val_38954 = (state_38953[(1)]);if((state_val_38954 === (2)))
{var inst_38951 = (state_38953[(2)]);var state_38953__$1 = state_38953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38953__$1,inst_38951);
} else
{if((state_val_38954 === (1)))
{var inst_38946 = [null,null,request];var inst_38947 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38946,null));var inst_38948 = ["view",inst_38947];var inst_38949 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38948,null));var state_38953__$1 = state_38953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38953__$1,(2),ch,inst_38949);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_38958 = [null,null,null,null,null,null,null];(statearr_38958[(0)] = state_machine__6188__auto__);
(statearr_38958[(1)] = (1));
return statearr_38958;
});
var state_machine__6188__auto____1 = (function (state_38953){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_38953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e38959){if((e38959 instanceof Object))
{var ex__6191__auto__ = e38959;var statearr_38960_38962 = state_38953;(statearr_38960_38962[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38963 = state_38953;
state_38953 = G__38963;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_38953){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_38953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_38961 = f__6203__auto__.call(null);(statearr_38961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_38961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
