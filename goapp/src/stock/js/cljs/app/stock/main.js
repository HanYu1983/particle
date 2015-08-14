// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.main.main = (function main(){var onView_22670 = cljs.core.async.chan.call(null);var onModel_22671 = cljs.core.async.chan.call(null);var onSys_22672 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_22670,onModel_22671,onSys_22672){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_22670,onModel_22671,onSys_22672){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_22670,onModel_22671,onSys_22672){
return (function (state_22583){var state_val_22584 = (state_22583[(1)]);if((state_val_22584 === (2)))
{var inst_22581 = (state_22583[(2)]);var state_22583__$1 = state_22583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22583__$1,inst_22581);
} else
{if((state_val_22584 === (1)))
{var state_22583__$1 = state_22583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22583__$1,(2),onView_22670,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_22670,onModel_22671,onSys_22672))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_22670,onModel_22671,onSys_22672){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22588 = [null,null,null,null,null,null,null];(statearr_22588[(0)] = state_machine__6188__auto__);
(statearr_22588[(1)] = (1));
return statearr_22588;
});
var state_machine__6188__auto____1 = (function (state_22583){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22589){if((e22589 instanceof Object))
{var ex__6191__auto__ = e22589;var statearr_22590_22673 = state_22583;(statearr_22590_22673[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22674 = state_22583;
state_22583 = G__22674;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22583){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_22670,onModel_22671,onSys_22672))
})();var state__6204__auto__ = (function (){var statearr_22591 = f__6203__auto__.call(null);(statearr_22591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_22591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_22670,onModel_22671,onSys_22672))
);
return c__6202__auto__;
});})(onView_22670,onModel_22671,onSys_22672))
);
var c__6202__auto___22675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22675,onView_22670,onModel_22671,onSys_22672){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22675,onView_22670,onModel_22671,onSys_22672){
return (function (state_22600){var state_val_22601 = (state_22600[(1)]);if((state_val_22601 === (4)))
{var inst_22594 = (state_22600[(2)]);var inst_22595 = common.onModel.onNext(inst_22594);var state_22600__$1 = (function (){var statearr_22602 = state_22600;(statearr_22602[(7)] = inst_22595);
return statearr_22602;
})();var statearr_22603_22676 = state_22600__$1;(statearr_22603_22676[(2)] = null);
(statearr_22603_22676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22601 === (3)))
{var inst_22598 = (state_22600[(2)]);var state_22600__$1 = state_22600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22600__$1,inst_22598);
} else
{if((state_val_22601 === (2)))
{var state_22600__$1 = state_22600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22600__$1,(4),onModel_22671);
} else
{if((state_val_22601 === (1)))
{var state_22600__$1 = state_22600;var statearr_22604_22677 = state_22600__$1;(statearr_22604_22677[(2)] = null);
(statearr_22604_22677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___22675,onView_22670,onModel_22671,onSys_22672))
;return ((function (switch__6187__auto__,c__6202__auto___22675,onView_22670,onModel_22671,onSys_22672){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22608 = [null,null,null,null,null,null,null,null];(statearr_22608[(0)] = state_machine__6188__auto__);
(statearr_22608[(1)] = (1));
return statearr_22608;
});
var state_machine__6188__auto____1 = (function (state_22600){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22600);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22609){if((e22609 instanceof Object))
{var ex__6191__auto__ = e22609;var statearr_22610_22678 = state_22600;(statearr_22610_22678[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22679 = state_22600;
state_22600 = G__22679;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22600){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22675,onView_22670,onModel_22671,onSys_22672))
})();var state__6204__auto__ = (function (){var statearr_22611 = f__6203__auto__.call(null);(statearr_22611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22675);
return statearr_22611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22675,onView_22670,onModel_22671,onSys_22672))
);
var c__6202__auto___22680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___22680,onView_22670,onModel_22671,onSys_22672){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___22680,onView_22670,onModel_22671,onSys_22672){
return (function (state_22648){var state_val_22649 = (state_22648[(1)]);if((state_val_22649 === (7)))
{var inst_22643 = (state_22648[(2)]);var inst_22615 = inst_22643;var state_22648__$1 = (function (){var statearr_22650 = state_22648;(statearr_22650[(7)] = inst_22615);
return statearr_22650;
})();var statearr_22651_22681 = state_22648__$1;(statearr_22651_22681[(2)] = null);
(statearr_22651_22681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (1)))
{var inst_22612 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022)];var inst_22613 = [onView_22670,onModel_22671,onSys_22672,cljs.core.PersistentHashMap.EMPTY];var inst_22614 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22612,inst_22613);var inst_22615 = inst_22614;var state_22648__$1 = (function (){var statearr_22652 = state_22648;(statearr_22652[(7)] = inst_22615);
return statearr_22652;
})();var statearr_22653_22682 = state_22648__$1;(statearr_22653_22682[(2)] = null);
(statearr_22653_22682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (4)))
{var inst_22623 = (state_22648[(8)]);var inst_22621 = (state_22648[(2)]);var inst_22622 = cljs.core.nth.call(null,inst_22621,(0),null);var inst_22623__$1 = cljs.core.nth.call(null,inst_22621,(1),null);var inst_22627 = cljs.core._EQ_.call(null,onSys_22672,inst_22623__$1);var state_22648__$1 = (function (){var statearr_22654 = state_22648;(statearr_22654[(9)] = inst_22622);
(statearr_22654[(8)] = inst_22623__$1);
return statearr_22654;
})();if(inst_22627)
{var statearr_22655_22683 = state_22648__$1;(statearr_22655_22683[(1)] = (5));
} else
{var statearr_22656_22684 = state_22648__$1;(statearr_22656_22684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (6)))
{var inst_22623 = (state_22648[(8)]);var inst_22634 = cljs.core._EQ_.call(null,onView_22670,inst_22623);var state_22648__$1 = state_22648;if(inst_22634)
{var statearr_22657_22685 = state_22648__$1;(statearr_22657_22685[(1)] = (8));
} else
{var statearr_22658_22686 = state_22648__$1;(statearr_22658_22686[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (3)))
{var inst_22646 = (state_22648[(2)]);var state_22648__$1 = state_22648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22648__$1,inst_22646);
} else
{if((state_val_22649 === (2)))
{var inst_22618 = [onView_22670,onSys_22672];var inst_22619 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22618,null));var state_22648__$1 = state_22648;return cljs.core.async.ioc_alts_BANG_.call(null,state_22648__$1,(4),inst_22619);
} else
{if((state_val_22649 === (9)))
{var inst_22615 = (state_22648[(7)]);var state_22648__$1 = state_22648;var statearr_22659_22687 = state_22648__$1;(statearr_22659_22687[(2)] = inst_22615);
(statearr_22659_22687[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (5)))
{var inst_22615 = (state_22648[(7)]);var inst_22622 = (state_22648[(9)]);var inst_22630 = cljs.core.nth.call(null,inst_22622,(0),null);var inst_22631 = cljs.core.nth.call(null,inst_22622,(1),null);var inst_22632 = app.stock.abstract$.onSystem.call(null,inst_22630,inst_22631,inst_22615);var state_22648__$1 = state_22648;var statearr_22660_22688 = state_22648__$1;(statearr_22660_22688[(2)] = inst_22632);
(statearr_22660_22688[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (10)))
{var inst_22641 = (state_22648[(2)]);var state_22648__$1 = state_22648;var statearr_22661_22689 = state_22648__$1;(statearr_22661_22689[(2)] = inst_22641);
(statearr_22661_22689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22649 === (8)))
{var inst_22615 = (state_22648[(7)]);var inst_22622 = (state_22648[(9)]);var inst_22636 = (inst_22622[(0)]);var inst_22637 = (inst_22622[(1)]);var inst_22638 = app.stock.abstract$.onViewCommand.call(null,inst_22636,inst_22637,inst_22615);var state_22648__$1 = state_22648;var statearr_22662_22690 = state_22648__$1;(statearr_22662_22690[(2)] = inst_22638);
(statearr_22662_22690[(1)] = (10));
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
});})(c__6202__auto___22680,onView_22670,onModel_22671,onSys_22672))
;return ((function (switch__6187__auto__,c__6202__auto___22680,onView_22670,onModel_22671,onSys_22672){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_22666 = [null,null,null,null,null,null,null,null,null,null];(statearr_22666[(0)] = state_machine__6188__auto__);
(statearr_22666[(1)] = (1));
return statearr_22666;
});
var state_machine__6188__auto____1 = (function (state_22648){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_22648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e22667){if((e22667 instanceof Object))
{var ex__6191__auto__ = e22667;var statearr_22668_22691 = state_22648;(statearr_22668_22691[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22692 = state_22648;
state_22648 = G__22692;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_22648){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_22648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___22680,onView_22670,onModel_22671,onSys_22672))
})();var state__6204__auto__ = (function (){var statearr_22669 = f__6203__auto__.call(null);(statearr_22669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___22680);
return statearr_22669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___22680,onView_22670,onModel_22671,onSys_22672))
);
return null;
});
app.stock.main.main.call(null);
