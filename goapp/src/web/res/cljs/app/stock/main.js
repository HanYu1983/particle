// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.main.main2 = (function main2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26530){var state_val_26531 = (state_26530[(1)]);if((state_val_26531 === (6)))
{var inst_26525 = (state_26530[(2)]);var inst_26526 = cljs.core.nth.call(null,inst_26525,(0),null);var inst_26527 = cljs.core.nth.call(null,inst_26525,(1),null);var inst_26528 = console.log(inst_26526,inst_26527);var state_26530__$1 = state_26530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26530__$1,inst_26528);
} else
{if((state_val_26531 === (5)))
{var inst_26520 = (state_26530[(2)]);var inst_26521 = cljs.core.nth.call(null,inst_26520,(0),null);var inst_26522 = cljs.core.nth.call(null,inst_26520,(1),null);var inst_26523 = app.dbfile.file.call(null,inst_26522,"json");var state_26530__$1 = (function (){var statearr_26532 = state_26530;(statearr_26532[(7)] = inst_26521);
return statearr_26532;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(6),inst_26523);
} else
{if((state_val_26531 === (4)))
{var inst_26512 = (state_26530[(8)]);var inst_26515 = (state_26530[(2)]);var inst_26516 = cljs.core.nth.call(null,inst_26515,(0),null);var inst_26517 = cljs.core.nth.call(null,inst_26515,(1),null);var inst_26518 = app.dbfile.name__GT_id.call(null,inst_26512,"userinfo.json");var state_26530__$1 = (function (){var statearr_26533 = state_26530;(statearr_26533[(9)] = inst_26517);
(statearr_26533[(10)] = inst_26516);
return statearr_26533;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(5),inst_26518);
} else
{if((state_val_26531 === (3)))
{var inst_26512 = (state_26530[(8)]);var inst_26510 = (state_26530[(2)]);var inst_26511 = cljs.core.nth.call(null,inst_26510,(0),null);var inst_26512__$1 = cljs.core.nth.call(null,inst_26510,(1),null);var inst_26513 = app.dbfile.makeFile.call(null,inst_26512__$1,"userinfo.json","{}",true);var state_26530__$1 = (function (){var statearr_26534 = state_26530;(statearr_26534[(11)] = inst_26511);
(statearr_26534[(8)] = inst_26512__$1);
return statearr_26534;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(4),inst_26513);
} else
{if((state_val_26531 === (2)))
{var inst_26505 = (state_26530[(2)]);var inst_26506 = cljs.core.nth.call(null,inst_26505,(0),null);var inst_26507 = cljs.core.nth.call(null,inst_26505,(1),null);var inst_26508 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_26530__$1 = (function (){var statearr_26535 = state_26530;(statearr_26535[(12)] = inst_26507);
(statearr_26535[(13)] = inst_26506);
return statearr_26535;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(3),inst_26508);
} else
{if((state_val_26531 === (1)))
{var inst_26503 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_26530__$1 = state_26530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(2),inst_26503);
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
var state_machine__6188__auto____0 = (function (){var statearr_26539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26539[(0)] = state_machine__6188__auto__);
(statearr_26539[(1)] = (1));
return statearr_26539;
});
var state_machine__6188__auto____1 = (function (state_26530){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26530);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26540){if((e26540 instanceof Object))
{var ex__6191__auto__ = e26540;var statearr_26541_26543 = state_26530;(statearr_26541_26543[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26530);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26544 = state_26530;
state_26530 = G__26544;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26530){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26542 = f__6203__auto__.call(null);(statearr_26542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){cljs.core.reset_BANG_.call(null,app.dbfile._STAR_domain_STAR_,"https://particle-979.appspot.com/");
var onView_26725 = cljs.core.async.chan.call(null);var onModel_26726 = cljs.core.async.chan.call(null);var onSys_26727 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_26725,onModel_26726,onSys_26727){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_26725,onModel_26726,onSys_26727){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_26725,onModel_26726,onSys_26727){
return (function (state_26638){var state_val_26639 = (state_26638[(1)]);if((state_val_26639 === (2)))
{var inst_26636 = (state_26638[(2)]);var state_26638__$1 = state_26638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26638__$1,inst_26636);
} else
{if((state_val_26639 === (1)))
{var state_26638__$1 = state_26638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26638__$1,(2),onView_26725,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_26725,onModel_26726,onSys_26727))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_26725,onModel_26726,onSys_26727){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26643 = [null,null,null,null,null,null,null];(statearr_26643[(0)] = state_machine__6188__auto__);
(statearr_26643[(1)] = (1));
return statearr_26643;
});
var state_machine__6188__auto____1 = (function (state_26638){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object))
{var ex__6191__auto__ = e26644;var statearr_26645_26728 = state_26638;(statearr_26645_26728[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26729 = state_26638;
state_26638 = G__26729;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26638){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_26725,onModel_26726,onSys_26727))
})();var state__6204__auto__ = (function (){var statearr_26646 = f__6203__auto__.call(null);(statearr_26646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_26725,onModel_26726,onSys_26727))
);
return c__6202__auto__;
});})(onView_26725,onModel_26726,onSys_26727))
);
var c__6202__auto___26730 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26730,onView_26725,onModel_26726,onSys_26727){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26730,onView_26725,onModel_26726,onSys_26727){
return (function (state_26655){var state_val_26656 = (state_26655[(1)]);if((state_val_26656 === (4)))
{var inst_26649 = (state_26655[(2)]);var inst_26650 = common.onModel.onNext(inst_26649);var state_26655__$1 = (function (){var statearr_26657 = state_26655;(statearr_26657[(7)] = inst_26650);
return statearr_26657;
})();var statearr_26658_26731 = state_26655__$1;(statearr_26658_26731[(2)] = null);
(statearr_26658_26731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26656 === (3)))
{var inst_26653 = (state_26655[(2)]);var state_26655__$1 = state_26655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26655__$1,inst_26653);
} else
{if((state_val_26656 === (2)))
{var state_26655__$1 = state_26655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26655__$1,(4),onModel_26726);
} else
{if((state_val_26656 === (1)))
{var state_26655__$1 = state_26655;var statearr_26659_26732 = state_26655__$1;(statearr_26659_26732[(2)] = null);
(statearr_26659_26732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___26730,onView_26725,onModel_26726,onSys_26727))
;return ((function (switch__6187__auto__,c__6202__auto___26730,onView_26725,onModel_26726,onSys_26727){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26663 = [null,null,null,null,null,null,null,null];(statearr_26663[(0)] = state_machine__6188__auto__);
(statearr_26663[(1)] = (1));
return statearr_26663;
});
var state_machine__6188__auto____1 = (function (state_26655){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26655);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26664){if((e26664 instanceof Object))
{var ex__6191__auto__ = e26664;var statearr_26665_26733 = state_26655;(statearr_26665_26733[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26655);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26734 = state_26655;
state_26655 = G__26734;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26655){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26730,onView_26725,onModel_26726,onSys_26727))
})();var state__6204__auto__ = (function (){var statearr_26666 = f__6203__auto__.call(null);(statearr_26666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26730);
return statearr_26666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26730,onView_26725,onModel_26726,onSys_26727))
);
var c__6202__auto___26735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26735,onView_26725,onModel_26726,onSys_26727){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26735,onView_26725,onModel_26726,onSys_26727){
return (function (state_26703){var state_val_26704 = (state_26703[(1)]);if((state_val_26704 === (7)))
{var inst_26698 = (state_26703[(2)]);var inst_26670 = inst_26698;var state_26703__$1 = (function (){var statearr_26705 = state_26703;(statearr_26705[(7)] = inst_26670);
return statearr_26705;
})();var statearr_26706_26736 = state_26703__$1;(statearr_26706_26736[(2)] = null);
(statearr_26706_26736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (1)))
{var inst_26667 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_26668 = [onView_26725,onModel_26726,onSys_26727,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_26669 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26667,inst_26668);var inst_26670 = inst_26669;var state_26703__$1 = (function (){var statearr_26707 = state_26703;(statearr_26707[(7)] = inst_26670);
return statearr_26707;
})();var statearr_26708_26737 = state_26703__$1;(statearr_26708_26737[(2)] = null);
(statearr_26708_26737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (4)))
{var inst_26678 = (state_26703[(8)]);var inst_26676 = (state_26703[(2)]);var inst_26677 = cljs.core.nth.call(null,inst_26676,(0),null);var inst_26678__$1 = cljs.core.nth.call(null,inst_26676,(1),null);var inst_26682 = cljs.core._EQ_.call(null,onSys_26727,inst_26678__$1);var state_26703__$1 = (function (){var statearr_26709 = state_26703;(statearr_26709[(8)] = inst_26678__$1);
(statearr_26709[(9)] = inst_26677);
return statearr_26709;
})();if(inst_26682)
{var statearr_26710_26738 = state_26703__$1;(statearr_26710_26738[(1)] = (5));
} else
{var statearr_26711_26739 = state_26703__$1;(statearr_26711_26739[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (6)))
{var inst_26678 = (state_26703[(8)]);var inst_26689 = cljs.core._EQ_.call(null,onView_26725,inst_26678);var state_26703__$1 = state_26703;if(inst_26689)
{var statearr_26712_26740 = state_26703__$1;(statearr_26712_26740[(1)] = (8));
} else
{var statearr_26713_26741 = state_26703__$1;(statearr_26713_26741[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (3)))
{var inst_26701 = (state_26703[(2)]);var state_26703__$1 = state_26703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26703__$1,inst_26701);
} else
{if((state_val_26704 === (2)))
{var inst_26673 = [onView_26725,onSys_26727];var inst_26674 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26673,null));var state_26703__$1 = state_26703;return cljs.core.async.ioc_alts_BANG_.call(null,state_26703__$1,(4),inst_26674);
} else
{if((state_val_26704 === (9)))
{var inst_26670 = (state_26703[(7)]);var state_26703__$1 = state_26703;var statearr_26714_26742 = state_26703__$1;(statearr_26714_26742[(2)] = inst_26670);
(statearr_26714_26742[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (5)))
{var inst_26677 = (state_26703[(9)]);var inst_26670 = (state_26703[(7)]);var inst_26685 = cljs.core.nth.call(null,inst_26677,(0),null);var inst_26686 = cljs.core.nth.call(null,inst_26677,(1),null);var inst_26687 = app.stock.abstract$.onSystem.call(null,inst_26685,inst_26686,inst_26670);var state_26703__$1 = state_26703;var statearr_26715_26743 = state_26703__$1;(statearr_26715_26743[(2)] = inst_26687);
(statearr_26715_26743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (10)))
{var inst_26696 = (state_26703[(2)]);var state_26703__$1 = state_26703;var statearr_26716_26744 = state_26703__$1;(statearr_26716_26744[(2)] = inst_26696);
(statearr_26716_26744[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26704 === (8)))
{var inst_26677 = (state_26703[(9)]);var inst_26670 = (state_26703[(7)]);var inst_26691 = (inst_26677[(0)]);var inst_26692 = (inst_26677[(1)]);var inst_26693 = app.stock.abstract$.onViewCommand.call(null,inst_26691,inst_26692,inst_26670);var state_26703__$1 = state_26703;var statearr_26717_26745 = state_26703__$1;(statearr_26717_26745[(2)] = inst_26693);
(statearr_26717_26745[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___26735,onView_26725,onModel_26726,onSys_26727))
;return ((function (switch__6187__auto__,c__6202__auto___26735,onView_26725,onModel_26726,onSys_26727){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26721 = [null,null,null,null,null,null,null,null,null,null];(statearr_26721[(0)] = state_machine__6188__auto__);
(statearr_26721[(1)] = (1));
return statearr_26721;
});
var state_machine__6188__auto____1 = (function (state_26703){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26722){if((e26722 instanceof Object))
{var ex__6191__auto__ = e26722;var statearr_26723_26746 = state_26703;(statearr_26723_26746[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26747 = state_26703;
state_26703 = G__26747;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26703){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26735,onView_26725,onModel_26726,onSys_26727))
})();var state__6204__auto__ = (function (){var statearr_26724 = f__6203__auto__.call(null);(statearr_26724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26735);
return statearr_26724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26735,onView_26725,onModel_26726,onSys_26727))
);
return null;
});
app.stock.main.main.call(null);
