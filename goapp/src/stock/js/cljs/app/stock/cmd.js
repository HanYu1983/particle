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
return (function (state_48514){var state_val_48515 = (state_48514[(1)]);if((state_val_48515 === (3)))
{var inst_48512 = (state_48514[(2)]);var state_48514__$1 = state_48514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48514__$1,inst_48512);
} else
{if((state_val_48515 === (2)))
{var inst_48504 = (state_48514[(2)]);var inst_48505 = cljs.core.nth.call(null,inst_48504,(0),null);var inst_48506 = cljs.core.nth.call(null,inst_48504,(1),null);var inst_48507 = [inst_48505,inst_48506,id,date,request];var inst_48508 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48507,null));var inst_48509 = ["loadStock",inst_48508];var inst_48510 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48509,null));var state_48514__$1 = state_48514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48514__$1,(3),ch,inst_48510);
} else
{if((state_val_48515 === (1)))
{var inst_48502 = stock.tool.stock_info.call(null,null,id,date,(0),(200));var state_48514__$1 = state_48514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(2),inst_48502);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48519 = [null,null,null,null,null,null,null];(statearr_48519[(0)] = state_machine__6188__auto__);
(statearr_48519[(1)] = (1));
return statearr_48519;
});
var state_machine__6188__auto____1 = (function (state_48514){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48514);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48520){if((e48520 instanceof Object))
{var ex__6191__auto__ = e48520;var statearr_48521_48523 = state_48514;(statearr_48521_48523[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48524 = state_48514;
state_48514 = G__48524;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48514){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48522 = f__6203__auto__.call(null);(statearr_48522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_48492){var state_val_48493 = (state_48492[(1)]);if((state_val_48493 === (2)))
{var inst_48490 = (state_48492[(2)]);var state_48492__$1 = state_48492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48492__$1,inst_48490);
} else
{if((state_val_48493 === (1)))
{var inst_48481 = cljs.core.first.call(null,result);var inst_48482 = cljs.core.second.call(null,result);var inst_48483 = cljs.core.nth.call(null,result,(2));var inst_48484 = cljs.core.nth.call(null,result,(3));var inst_48485 = [inst_48481,inst_48482,inst_48483,inst_48484,request];var inst_48486 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48485,null));var inst_48487 = ["loadStock",inst_48486];var inst_48488 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48487,null));var state_48492__$1 = state_48492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48492__$1,(2),ch,inst_48488);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48497 = [null,null,null,null,null,null,null];(statearr_48497[(0)] = state_machine__6188__auto__);
(statearr_48497[(1)] = (1));
return statearr_48497;
});
var state_machine__6188__auto____1 = (function (state_48492){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48498){if((e48498 instanceof Object))
{var ex__6191__auto__ = e48498;var statearr_48499_48525 = state_48492;(statearr_48499_48525[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48526 = state_48492;
state_48492 = G__48526;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48492){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48500 = f__6203__auto__.call(null);(statearr_48500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48500;
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
return (function (state_48556){var state_val_48557 = (state_48556[(1)]);if((state_val_48557 === (2)))
{var inst_48554 = (state_48556[(2)]);var state_48556__$1 = state_48556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48556__$1,inst_48554);
} else
{if((state_val_48557 === (1)))
{var inst_48546 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_48547 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_48548 = cljs.core.get.call(null,inst_48546,inst_48547);var inst_48549 = [null,inst_48548,request];var inst_48550 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48549,null));var inst_48551 = ["view",inst_48550];var inst_48552 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48551,null));var state_48556__$1 = state_48556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48556__$1,(2),ch,inst_48552);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48561 = [null,null,null,null,null,null,null];(statearr_48561[(0)] = state_machine__6188__auto__);
(statearr_48561[(1)] = (1));
return statearr_48561;
});
var state_machine__6188__auto____1 = (function (state_48556){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48556);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48562){if((e48562 instanceof Object))
{var ex__6191__auto__ = e48562;var statearr_48563_48565 = state_48556;(statearr_48563_48565[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48566 = state_48556;
state_48556 = G__48566;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48556){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48564 = f__6203__auto__.call(null);(statearr_48564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_48590){var state_val_48591 = (state_48590[(1)]);if((state_val_48591 === (2)))
{var inst_48588 = (state_48590[(2)]);var state_48590__$1 = state_48590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48590__$1,inst_48588);
} else
{if((state_val_48591 === (1)))
{var inst_48583 = [null,null,request];var inst_48584 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48583,null));var inst_48585 = ["view",inst_48584];var inst_48586 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48585,null));var state_48590__$1 = state_48590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48590__$1,(2),ch,inst_48586);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48595 = [null,null,null,null,null,null,null];(statearr_48595[(0)] = state_machine__6188__auto__);
(statearr_48595[(1)] = (1));
return statearr_48595;
});
var state_machine__6188__auto____1 = (function (state_48590){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48596){if((e48596 instanceof Object))
{var ex__6191__auto__ = e48596;var statearr_48597_48599 = state_48590;(statearr_48597_48599[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48600 = state_48590;
state_48590 = G__48600;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48590){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_48598 = f__6203__auto__.call(null);(statearr_48598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
