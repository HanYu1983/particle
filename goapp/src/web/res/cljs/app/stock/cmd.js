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
return (function (state_48676){var state_val_48677 = (state_48676[(1)]);if((state_val_48677 === (3)))
{var inst_48674 = (state_48676[(2)]);var state_48676__$1 = state_48676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48676__$1,inst_48674);
} else
{if((state_val_48677 === (2)))
{var inst_48666 = (state_48676[(2)]);var inst_48667 = cljs.core.nth.call(null,inst_48666,(0),null);var inst_48668 = cljs.core.nth.call(null,inst_48666,(1),null);var inst_48669 = [inst_48667,inst_48668,id,date,request];var inst_48670 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48669,null));var inst_48671 = ["loadStock",inst_48670];var inst_48672 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48671,null));var state_48676__$1 = state_48676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48676__$1,(3),ch,inst_48672);
} else
{if((state_val_48677 === (1)))
{var inst_48664 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_48676__$1 = state_48676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48676__$1,(2),inst_48664);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48681 = [null,null,null,null,null,null,null];(statearr_48681[(0)] = state_machine__6188__auto__);
(statearr_48681[(1)] = (1));
return statearr_48681;
});
var state_machine__6188__auto____1 = (function (state_48676){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48676);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48682){if((e48682 instanceof Object))
{var ex__6191__auto__ = e48682;var statearr_48683_48685 = state_48676;(statearr_48683_48685[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48676);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48686 = state_48676;
state_48676 = G__48686;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48676){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48684 = f__6203__auto__.call(null);(statearr_48684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_48654){var state_val_48655 = (state_48654[(1)]);if((state_val_48655 === (2)))
{var inst_48652 = (state_48654[(2)]);var state_48654__$1 = state_48654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48654__$1,inst_48652);
} else
{if((state_val_48655 === (1)))
{var inst_48643 = cljs.core.first.call(null,result);var inst_48644 = cljs.core.second.call(null,result);var inst_48645 = cljs.core.nth.call(null,result,(2));var inst_48646 = cljs.core.nth.call(null,result,(3));var inst_48647 = [inst_48643,inst_48644,inst_48645,inst_48646,request];var inst_48648 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48647,null));var inst_48649 = ["loadStock",inst_48648];var inst_48650 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48649,null));var state_48654__$1 = state_48654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48654__$1,(2),ch,inst_48650);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48659 = [null,null,null,null,null,null,null];(statearr_48659[(0)] = state_machine__6188__auto__);
(statearr_48659[(1)] = (1));
return statearr_48659;
});
var state_machine__6188__auto____1 = (function (state_48654){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48660){if((e48660 instanceof Object))
{var ex__6191__auto__ = e48660;var statearr_48661_48687 = state_48654;(statearr_48661_48687[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48688 = state_48654;
state_48654 = G__48688;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48654){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48662 = f__6203__auto__.call(null);(statearr_48662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48662;
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
return (function (state_48718){var state_val_48719 = (state_48718[(1)]);if((state_val_48719 === (2)))
{var inst_48716 = (state_48718[(2)]);var state_48718__$1 = state_48718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48718__$1,inst_48716);
} else
{if((state_val_48719 === (1)))
{var inst_48708 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_48709 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_48710 = cljs.core.get.call(null,inst_48708,inst_48709);var inst_48711 = [null,inst_48710,request];var inst_48712 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48711,null));var inst_48713 = ["view",inst_48712];var inst_48714 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48713,null));var state_48718__$1 = state_48718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48718__$1,(2),ch,inst_48714);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48723 = [null,null,null,null,null,null,null];(statearr_48723[(0)] = state_machine__6188__auto__);
(statearr_48723[(1)] = (1));
return statearr_48723;
});
var state_machine__6188__auto____1 = (function (state_48718){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48724){if((e48724 instanceof Object))
{var ex__6191__auto__ = e48724;var statearr_48725_48727 = state_48718;(statearr_48725_48727[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48728 = state_48718;
state_48718 = G__48728;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48718){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48726 = f__6203__auto__.call(null);(statearr_48726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_48752){var state_val_48753 = (state_48752[(1)]);if((state_val_48753 === (2)))
{var inst_48750 = (state_48752[(2)]);var state_48752__$1 = state_48752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48752__$1,inst_48750);
} else
{if((state_val_48753 === (1)))
{var inst_48745 = [null,null,request];var inst_48746 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48745,null));var inst_48747 = ["view",inst_48746];var inst_48748 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48747,null));var state_48752__$1 = state_48752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48752__$1,(2),ch,inst_48748);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48757 = [null,null,null,null,null,null,null];(statearr_48757[(0)] = state_machine__6188__auto__);
(statearr_48757[(1)] = (1));
return statearr_48757;
});
var state_machine__6188__auto____1 = (function (state_48752){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48758){if((e48758 instanceof Object))
{var ex__6191__auto__ = e48758;var statearr_48759_48761 = state_48752;(statearr_48759_48761[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48762 = state_48752;
state_48752 = G__48762;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48752){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48760 = f__6203__auto__.call(null);(statearr_48760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
