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
return (function (state_30831){var state_val_30832 = (state_30831[(1)]);if((state_val_30832 === (3)))
{var inst_30829 = (state_30831[(2)]);var state_30831__$1 = state_30831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30831__$1,inst_30829);
} else
{if((state_val_30832 === (2)))
{var inst_30821 = (state_30831[(2)]);var inst_30822 = cljs.core.nth.call(null,inst_30821,(0),null);var inst_30823 = cljs.core.nth.call(null,inst_30821,(1),null);var inst_30824 = [inst_30822,inst_30823,id,date,request];var inst_30825 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30824,null));var inst_30826 = ["loadStock",inst_30825];var inst_30827 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30826,null));var state_30831__$1 = state_30831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30831__$1,(3),ch,inst_30827);
} else
{if((state_val_30832 === (1)))
{var inst_30819 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_30831__$1 = state_30831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30831__$1,(2),inst_30819);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30836 = [null,null,null,null,null,null,null];(statearr_30836[(0)] = state_machine__6188__auto__);
(statearr_30836[(1)] = (1));
return statearr_30836;
});
var state_machine__6188__auto____1 = (function (state_30831){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30831);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30837){if((e30837 instanceof Object))
{var ex__6191__auto__ = e30837;var statearr_30838_30854 = state_30831;(statearr_30838_30854[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30855 = state_30831;
state_30831 = G__30855;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30831){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30839 = f__6203__auto__.call(null);(statearr_30839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_30845){var state_val_30846 = (state_30845[(1)]);if((state_val_30846 === (2)))
{var inst_30843 = (state_30845[(2)]);var state_30845__$1 = state_30845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else
{if((state_val_30846 === (1)))
{var inst_30840 = ["loadStock",result];var inst_30841 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30840,null));var state_30845__$1 = state_30845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30845__$1,(2),ch,inst_30841);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30850 = [null,null,null,null,null,null,null];(statearr_30850[(0)] = state_machine__6188__auto__);
(statearr_30850[(1)] = (1));
return statearr_30850;
});
var state_machine__6188__auto____1 = (function (state_30845){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30845);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30851){if((e30851 instanceof Object))
{var ex__6191__auto__ = e30851;var statearr_30852_30856 = state_30845;(statearr_30852_30856[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30857 = state_30845;
state_30845 = G__30857;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30853 = f__6203__auto__.call(null);(statearr_30853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30853;
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
return (function (state_30887){var state_val_30888 = (state_30887[(1)]);if((state_val_30888 === (2)))
{var inst_30885 = (state_30887[(2)]);var state_30887__$1 = state_30887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30887__$1,inst_30885);
} else
{if((state_val_30888 === (1)))
{var inst_30877 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_30878 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_30879 = cljs.core.get.call(null,inst_30877,inst_30878);var inst_30880 = [null,inst_30879,request];var inst_30881 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30880,null));var inst_30882 = ["view",inst_30881];var inst_30883 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30882,null));var state_30887__$1 = state_30887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30887__$1,(2),ch,inst_30883);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30892 = [null,null,null,null,null,null,null];(statearr_30892[(0)] = state_machine__6188__auto__);
(statearr_30892[(1)] = (1));
return statearr_30892;
});
var state_machine__6188__auto____1 = (function (state_30887){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30887);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30893){if((e30893 instanceof Object))
{var ex__6191__auto__ = e30893;var statearr_30894_30896 = state_30887;(statearr_30894_30896[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30897 = state_30887;
state_30887 = G__30897;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30887){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30895 = f__6203__auto__.call(null);(statearr_30895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_30921){var state_val_30922 = (state_30921[(1)]);if((state_val_30922 === (2)))
{var inst_30919 = (state_30921[(2)]);var state_30921__$1 = state_30921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30921__$1,inst_30919);
} else
{if((state_val_30922 === (1)))
{var inst_30914 = [null,null,request];var inst_30915 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30914,null));var inst_30916 = ["view",inst_30915];var inst_30917 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_30916,null));var state_30921__$1 = state_30921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30921__$1,(2),ch,inst_30917);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30926 = [null,null,null,null,null,null,null];(statearr_30926[(0)] = state_machine__6188__auto__);
(statearr_30926[(1)] = (1));
return statearr_30926;
});
var state_machine__6188__auto____1 = (function (state_30921){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30921);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30927){if((e30927 instanceof Object))
{var ex__6191__auto__ = e30927;var statearr_30928_30930 = state_30921;(statearr_30928_30930[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30921);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30931 = state_30921;
state_30921 = G__30931;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30921){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30929 = f__6203__auto__.call(null);(statearr_30929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
