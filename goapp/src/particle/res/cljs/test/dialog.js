// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
test.dialog.view = (function view(elem,ctx){var show_10456 = tool.dialog.showstr.call(null,ctx);var G__10455_10457 = elem;G__10455_10457.empty();
G__10455_10457.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_10456)));
return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___10646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10646,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10646,test_str,onTick,onClick){
return (function (state_10585){var state_val_10586 = (state_10585[(1)]);if((state_val_10586 === (7)))
{var inst_10580 = (state_10585[(2)]);var inst_10556 = inst_10580;var state_10585__$1 = (function (){var statearr_10587 = state_10585;(statearr_10587[(7)] = inst_10556);
return statearr_10587;
})();var statearr_10588_10647 = state_10585__$1;(statearr_10588_10647[(2)] = null);
(statearr_10588_10647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (1)))
{var inst_10552 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_10553 = [(4),test_str];var inst_10554 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10552,inst_10553);var inst_10555 = tool.dialog.dialog.call(null,inst_10554);var inst_10556 = inst_10555;var state_10585__$1 = (function (){var statearr_10589 = state_10585;(statearr_10589[(7)] = inst_10556);
return statearr_10589;
})();var statearr_10590_10648 = state_10585__$1;(statearr_10590_10648[(2)] = null);
(statearr_10590_10648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (4)))
{var inst_10564 = (state_10585[(8)]);var inst_10562 = (state_10585[(2)]);var inst_10563 = cljs.core.nth.call(null,inst_10562,(0),null);var inst_10564__$1 = cljs.core.nth.call(null,inst_10562,(1),null);var inst_10568 = cljs.core._EQ_.call(null,onTick,inst_10564__$1);var state_10585__$1 = (function (){var statearr_10591 = state_10585;(statearr_10591[(8)] = inst_10564__$1);
(statearr_10591[(9)] = inst_10563);
return statearr_10591;
})();if(inst_10568)
{var statearr_10592_10649 = state_10585__$1;(statearr_10592_10649[(1)] = (5));
} else
{var statearr_10593_10650 = state_10585__$1;(statearr_10593_10650[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (6)))
{var inst_10564 = (state_10585[(8)]);var inst_10573 = cljs.core._EQ_.call(null,onClick,inst_10564);var state_10585__$1 = state_10585;if(inst_10573)
{var statearr_10594_10651 = state_10585__$1;(statearr_10594_10651[(1)] = (8));
} else
{var statearr_10595_10652 = state_10585__$1;(statearr_10595_10652[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (3)))
{var inst_10583 = (state_10585[(2)]);var state_10585__$1 = state_10585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10585__$1,inst_10583);
} else
{if((state_val_10586 === (2)))
{var inst_10559 = [onTick,onClick];var inst_10560 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10559,null));var state_10585__$1 = state_10585;return cljs.core.async.ioc_alts_BANG_.call(null,state_10585__$1,(4),inst_10560);
} else
{if((state_val_10586 === (9)))
{var inst_10556 = (state_10585[(7)]);var state_10585__$1 = state_10585;var statearr_10596_10653 = state_10585__$1;(statearr_10596_10653[(2)] = inst_10556);
(statearr_10596_10653[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (5)))
{var inst_10556 = (state_10585[(7)]);var inst_10570 = tool.dialog.step.call(null,inst_10556);var inst_10571 = test.dialog.view.call(null,inst_10570);var state_10585__$1 = state_10585;var statearr_10597_10654 = state_10585__$1;(statearr_10597_10654[(2)] = inst_10571);
(statearr_10597_10654[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (10)))
{var inst_10578 = (state_10585[(2)]);var state_10585__$1 = state_10585;var statearr_10598_10655 = state_10585__$1;(statearr_10598_10655[(2)] = inst_10578);
(statearr_10598_10655[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10586 === (8)))
{var inst_10556 = (state_10585[(7)]);var inst_10575 = tool.dialog.requestNext.call(null,inst_10556);var state_10585__$1 = state_10585;var statearr_10599_10656 = state_10585__$1;(statearr_10599_10656[(2)] = inst_10575);
(statearr_10599_10656[(1)] = (10));
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
});})(c__6203__auto___10646,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10646,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10603 = [null,null,null,null,null,null,null,null,null,null];(statearr_10603[(0)] = state_machine__6189__auto__);
(statearr_10603[(1)] = (1));
return statearr_10603;
});
var state_machine__6189__auto____1 = (function (state_10585){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10585);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10604){if((e10604 instanceof Object))
{var ex__6192__auto__ = e10604;var statearr_10605_10657 = state_10585;(statearr_10605_10657[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10658 = state_10585;
state_10585 = G__10658;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10585){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10646,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10606 = f__6204__auto__.call(null);(statearr_10606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10646);
return statearr_10606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10646,test_str,onTick,onClick))
);
var c__6203__auto___10659 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10659,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10659,test_str,onTick,onClick){
return (function (state_10618){var state_val_10619 = (state_10618[(1)]);if((state_val_10619 === (5)))
{var inst_10607 = (state_10618[(7)]);var inst_10613 = (state_10618[(2)]);var tmp10620 = inst_10607;var inst_10607__$1 = tmp10620;var state_10618__$1 = (function (){var statearr_10621 = state_10618;(statearr_10621[(8)] = inst_10613);
(statearr_10621[(7)] = inst_10607__$1);
return statearr_10621;
})();var statearr_10622_10660 = state_10618__$1;(statearr_10622_10660[(2)] = null);
(statearr_10622_10660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10619 === (4)))
{var inst_10607 = (state_10618[(7)]);var inst_10611 = (state_10618[(2)]);var state_10618__$1 = (function (){var statearr_10623 = state_10618;(statearr_10623[(9)] = inst_10611);
return statearr_10623;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10618__$1,(5),onTick,inst_10607);
} else
{if((state_val_10619 === (3)))
{var inst_10616 = (state_10618[(2)]);var state_10618__$1 = state_10618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10618__$1,inst_10616);
} else
{if((state_val_10619 === (2)))
{var inst_10607 = (state_10618[(7)]);var inst_10609 = cljs.core.async.timeout.call(null,inst_10607);var state_10618__$1 = state_10618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10618__$1,(4),inst_10609);
} else
{if((state_val_10619 === (1)))
{var inst_10607 = (33);var state_10618__$1 = (function (){var statearr_10624 = state_10618;(statearr_10624[(7)] = inst_10607);
return statearr_10624;
})();var statearr_10625_10661 = state_10618__$1;(statearr_10625_10661[(2)] = null);
(statearr_10625_10661[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10659,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10659,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10629 = [null,null,null,null,null,null,null,null,null,null];(statearr_10629[(0)] = state_machine__6189__auto__);
(statearr_10629[(1)] = (1));
return statearr_10629;
});
var state_machine__6189__auto____1 = (function (state_10618){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10618);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10630){if((e10630 instanceof Object))
{var ex__6192__auto__ = e10630;var statearr_10631_10662 = state_10618;(statearr_10631_10662[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10618);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10663 = state_10618;
state_10618 = G__10663;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10618){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10659,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10632 = f__6204__auto__.call(null);(statearr_10632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10659);
return statearr_10632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10659,test_str,onTick,onClick))
);
var G__10633_10664 = $("body");G__10633_10664.on("click",((function (G__10633_10664,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__10633_10664,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__10633_10664,test_str,onTick,onClick){
return (function (state_10637){var state_val_10638 = (state_10637[(1)]);if((state_val_10638 === (2)))
{var inst_10635 = (state_10637[(2)]);var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10637__$1,inst_10635);
} else
{if((state_val_10638 === (1)))
{var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10637__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__10633_10664,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__10633_10664,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10642 = [null,null,null,null,null,null,null];(statearr_10642[(0)] = state_machine__6189__auto__);
(statearr_10642[(1)] = (1));
return statearr_10642;
});
var state_machine__6189__auto____1 = (function (state_10637){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10643){if((e10643 instanceof Object))
{var ex__6192__auto__ = e10643;var statearr_10644_10665 = state_10637;(statearr_10644_10665[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10666 = state_10637;
state_10637 = G__10666;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10637){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__10633_10664,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10645 = f__6204__auto__.call(null);(statearr_10645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__10633_10664,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__10633_10664,test_str,onTick,onClick))
);
return null;
});
test.dialog.main.call(null);
