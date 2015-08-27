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
return (function (state_81595){var state_val_81596 = (state_81595[(1)]);if((state_val_81596 === (3)))
{var inst_81593 = (state_81595[(2)]);var state_81595__$1 = state_81595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81595__$1,inst_81593);
} else
{if((state_val_81596 === (2)))
{var inst_81582 = (state_81595[(2)]);var inst_81583 = cljs.core.nth.call(null,inst_81582,(0),null);var inst_81584 = cljs.core.nth.call(null,inst_81582,(1),null);var inst_81585 = stock.tool.parse_getprices.call(null,inst_81584);var inst_81586 = stock.tool.format_getprices.call(null,(86400),inst_81585);var inst_81587 = cljs.core.reverse.call(null,inst_81586);var inst_81588 = [inst_81583,inst_81587,id,date,request];var inst_81589 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81588,null));var inst_81590 = ["loadStock",inst_81589];var inst_81591 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81590,null));var state_81595__$1 = state_81595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81595__$1,(3),ch,inst_81591);
} else
{if((state_val_81596 === (1)))
{var inst_81579 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_81580 = stock.tool.content.call(null,inst_81579);var state_81595__$1 = state_81595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81595__$1,(2),inst_81580);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_81600 = [null,null,null,null,null,null,null];(statearr_81600[(0)] = state_machine__6188__auto__);
(statearr_81600[(1)] = (1));
return statearr_81600;
});
var state_machine__6188__auto____1 = (function (state_81595){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81601){if((e81601 instanceof Object))
{var ex__6191__auto__ = e81601;var statearr_81602_81604 = state_81595;(statearr_81602_81604[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81605 = state_81595;
state_81595 = G__81605;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81595){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81603 = f__6203__auto__.call(null);(statearr_81603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_81569){var state_val_81570 = (state_81569[(1)]);if((state_val_81570 === (2)))
{var inst_81567 = (state_81569[(2)]);var state_81569__$1 = state_81569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81569__$1,inst_81567);
} else
{if((state_val_81570 === (1)))
{var inst_81558 = cljs.core.first.call(null,result);var inst_81559 = cljs.core.second.call(null,result);var inst_81560 = cljs.core.nth.call(null,result,(2));var inst_81561 = cljs.core.nth.call(null,result,(3));var inst_81562 = [inst_81558,inst_81559,inst_81560,inst_81561,request];var inst_81563 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81562,null));var inst_81564 = ["loadStock",inst_81563];var inst_81565 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81564,null));var state_81569__$1 = state_81569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81569__$1,(2),ch,inst_81565);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_81574 = [null,null,null,null,null,null,null];(statearr_81574[(0)] = state_machine__6188__auto__);
(statearr_81574[(1)] = (1));
return statearr_81574;
});
var state_machine__6188__auto____1 = (function (state_81569){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81569);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81575){if((e81575 instanceof Object))
{var ex__6191__auto__ = e81575;var statearr_81576_81606 = state_81569;(statearr_81576_81606[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81569);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81607 = state_81569;
state_81569 = G__81607;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81569){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81577 = f__6203__auto__.call(null);(statearr_81577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81577;
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
return (function (state_81669){var state_val_81670 = (state_81669[(1)]);if((state_val_81670 === (5)))
{var inst_81667 = (state_81669[(2)]);var state_81669__$1 = state_81669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81669__$1,inst_81667);
} else
{if((state_val_81670 === (4)))
{var inst_81659 = (state_81669[(2)]);var inst_81660 = cljs.core.nth.call(null,inst_81659,(0),null);var inst_81661 = cljs.core.nth.call(null,inst_81659,(1),null);var inst_81662 = [inst_81660,inst_81661,request];var inst_81663 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81662,null));var inst_81664 = ["view",inst_81663];var inst_81665 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81664,null));var state_81669__$1 = state_81669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81669__$1,(5),ch,inst_81665);
} else
{if((state_val_81670 === (3)))
{var inst_81654 = (state_81669[(2)]);var inst_81655 = cljs.core.nth.call(null,inst_81654,(0),null);var inst_81656 = cljs.core.nth.call(null,inst_81654,(1),null);var inst_81657 = app.dbfile.file.call(null,inst_81656,"json");var state_81669__$1 = (function (){var statearr_81671 = state_81669;(statearr_81671[(7)] = inst_81655);
return statearr_81671;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81669__$1,(4),inst_81657);
} else
{if((state_val_81670 === (2)))
{var inst_81649 = (state_81669[(2)]);var inst_81650 = cljs.core.nth.call(null,inst_81649,(0),null);var inst_81651 = cljs.core.nth.call(null,inst_81649,(1),null);var inst_81652 = app.dbfile.name__GT_id.call(null,inst_81651,"userinfo.json");var state_81669__$1 = (function (){var statearr_81672 = state_81669;(statearr_81672[(8)] = inst_81650);
return statearr_81672;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81669__$1,(3),inst_81652);
} else
{if((state_val_81670 === (1)))
{var inst_81647 = app.dbfile.name__GT_id.call(null,app.stock.cmd.stockDir,fbid);var state_81669__$1 = state_81669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81669__$1,(2),inst_81647);
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
var state_machine__6188__auto____0 = (function (){var statearr_81676 = [null,null,null,null,null,null,null,null,null];(statearr_81676[(0)] = state_machine__6188__auto__);
(statearr_81676[(1)] = (1));
return statearr_81676;
});
var state_machine__6188__auto____1 = (function (state_81669){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81669);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81677){if((e81677 instanceof Object))
{var ex__6191__auto__ = e81677;var statearr_81678_81680 = state_81669;(statearr_81678_81680[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81669);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81681 = state_81669;
state_81669 = G__81681;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81669){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81679 = f__6203__auto__.call(null);(statearr_81679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_81752){var state_val_81753 = (state_81752[(1)]);if((state_val_81753 === (6)))
{var inst_81750 = (state_81752[(2)]);var state_81752__$1 = state_81752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81752__$1,inst_81750);
} else
{if((state_val_81753 === (5)))
{var inst_81742 = (state_81752[(2)]);var inst_81743 = cljs.core.nth.call(null,inst_81742,(0),null);var inst_81744 = cljs.core.nth.call(null,inst_81742,(1),null);var inst_81745 = [inst_81743,inst_81744,request];var inst_81746 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81745,null));var inst_81747 = ["view",inst_81746];var inst_81748 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_81747,null));var state_81752__$1 = state_81752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81752__$1,(6),ch,inst_81748);
} else
{if((state_val_81753 === (4)))
{var inst_81736 = (state_81752[(2)]);var inst_81737 = cljs.core.nth.call(null,inst_81736,(0),null);var inst_81738 = cljs.core.nth.call(null,inst_81736,(1),null);var inst_81739 = JSON.stringify(data);var inst_81740 = app.dbfile.makeFile.call(null,inst_81738,"userinfo.json",inst_81739,true);var state_81752__$1 = (function (){var statearr_81754 = state_81752;(statearr_81754[(7)] = inst_81737);
return statearr_81754;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81752__$1,(5),inst_81740);
} else
{if((state_val_81753 === (3)))
{var inst_81733 = (state_81752[(2)]);var inst_81734 = app.dbfile.name__GT_id.call(null,app.stock.cmd.stockDir,fbid);var state_81752__$1 = (function (){var statearr_81755 = state_81752;(statearr_81755[(8)] = inst_81733);
return statearr_81755;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81752__$1,(4),inst_81734);
} else
{if((state_val_81753 === (2)))
{var inst_81728 = (state_81752[(2)]);var inst_81729 = cljs.core.nth.call(null,inst_81728,(0),null);var inst_81730 = cljs.core.nth.call(null,inst_81728,(1),null);var inst_81731 = cljs.core.async.timeout.call(null,(1000));var state_81752__$1 = (function (){var statearr_81756 = state_81752;(statearr_81756[(9)] = inst_81730);
(statearr_81756[(10)] = inst_81729);
return statearr_81756;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81752__$1,(3),inst_81731);
} else
{if((state_val_81753 === (1)))
{var inst_81726 = app.dbfile.makeDir.call(null,app.stock.cmd.stockDir,fbid);var state_81752__$1 = state_81752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81752__$1,(2),inst_81726);
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
var state_machine__6188__auto____0 = (function (){var statearr_81760 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_81760[(0)] = state_machine__6188__auto__);
(statearr_81760[(1)] = (1));
return statearr_81760;
});
var state_machine__6188__auto____1 = (function (state_81752){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_81752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e81761){if((e81761 instanceof Object))
{var ex__6191__auto__ = e81761;var statearr_81762_81764 = state_81752;(statearr_81762_81764[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e81761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81765 = state_81752;
state_81752 = G__81765;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_81752){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_81752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_81763 = f__6203__auto__.call(null);(statearr_81763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_81763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
