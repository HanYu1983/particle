// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
test.dialogList.step = (function step(p__10398){var map__10400 = p__10398;var map__10400__$1 = ((cljs.core.seq_QMARK_.call(null,map__10400))?cljs.core.apply.call(null,cljs.core.hash_map,map__10400):map__10400);var ctx = map__10400__$1;var dialogs = cljs.core.get.call(null,map__10400__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__10400__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__10400,map__10400__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.step.call(null,dialog);
} else
{return dialog;
}
});})(map__10400,map__10400__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);var curr_dialog = cljs.core.nth.call(null,updated,curr_idx);var last_line_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,dialogs),(curr_idx + (1)));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(curr_dialog)))
{if(last_line_QMARK_)
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"end","end",-268185958));
} else
{return cljs.core.update_in.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584)], null),cljs.core.inc);
}
} else
{return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
}
});
test.dialogList.showstr = (function showstr(p__10401){var map__10403 = p__10401;var map__10403__$1 = ((cljs.core.seq_QMARK_.call(null,map__10403))?cljs.core.apply.call(null,cljs.core.hash_map,map__10403):map__10403);var ctx = map__10403__$1;var dialogs = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function requestNext(p__10404){var map__10406 = p__10404;var map__10406__$1 = ((cljs.core.seq_QMARK_.call(null,map__10406))?cljs.core.apply.call(null,cljs.core.hash_map,map__10406):map__10406);var ctx = map__10406__$1;var dialogs = cljs.core.get.call(null,map__10406__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__10406__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__10406,map__10406__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.requestNext.call(null,dialog);
} else
{return dialog;
}
});})(map__10406,map__10406__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function view(elem,ctx){var show_10409 = test.dialogList.showstr.call(null,ctx);var G__10408_10410 = elem;G__10408_10410.empty();
G__10408_10410.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_10409)));
return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___10617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10617,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10617,test_str,onTick,onClick){
return (function (state_10556){var state_val_10557 = (state_10556[(1)]);if((state_val_10557 === (7)))
{var inst_10551 = (state_10556[(2)]);var inst_10527 = inst_10551;var state_10556__$1 = (function (){var statearr_10558 = state_10556;(statearr_10558[(7)] = inst_10527);
return statearr_10558;
})();var statearr_10559_10618 = state_10556__$1;(statearr_10559_10618[(2)] = null);
(statearr_10559_10618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (1)))
{var inst_10514 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];var inst_10515 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_10516 = [(4),test_str];var inst_10517 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10515,inst_10516);var inst_10518 = tool.dialog.dialog.call(null,inst_10517);var inst_10519 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10518);var inst_10520 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_10521 = [(4),test_str];var inst_10522 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10520,inst_10521);var inst_10523 = tool.dialog.dialog.call(null,inst_10522);var inst_10524 = cljs.core._conj.call(null,inst_10519,inst_10523);var inst_10525 = [(0),inst_10524];var inst_10526 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10514,inst_10525);var inst_10527 = inst_10526;var state_10556__$1 = (function (){var statearr_10560 = state_10556;(statearr_10560[(7)] = inst_10527);
return statearr_10560;
})();var statearr_10561_10619 = state_10556__$1;(statearr_10561_10619[(2)] = null);
(statearr_10561_10619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (4)))
{var inst_10535 = (state_10556[(8)]);var inst_10533 = (state_10556[(2)]);var inst_10534 = cljs.core.nth.call(null,inst_10533,(0),null);var inst_10535__$1 = cljs.core.nth.call(null,inst_10533,(1),null);var inst_10539 = cljs.core._EQ_.call(null,onTick,inst_10535__$1);var state_10556__$1 = (function (){var statearr_10562 = state_10556;(statearr_10562[(8)] = inst_10535__$1);
(statearr_10562[(9)] = inst_10534);
return statearr_10562;
})();if(inst_10539)
{var statearr_10563_10620 = state_10556__$1;(statearr_10563_10620[(1)] = (5));
} else
{var statearr_10564_10621 = state_10556__$1;(statearr_10564_10621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (6)))
{var inst_10535 = (state_10556[(8)]);var inst_10544 = cljs.core._EQ_.call(null,onClick,inst_10535);var state_10556__$1 = state_10556;if(inst_10544)
{var statearr_10565_10622 = state_10556__$1;(statearr_10565_10622[(1)] = (8));
} else
{var statearr_10566_10623 = state_10556__$1;(statearr_10566_10623[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (3)))
{var inst_10554 = (state_10556[(2)]);var state_10556__$1 = state_10556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10556__$1,inst_10554);
} else
{if((state_val_10557 === (2)))
{var inst_10530 = [onTick,onClick];var inst_10531 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10530,null));var state_10556__$1 = state_10556;return cljs.core.async.ioc_alts_BANG_.call(null,state_10556__$1,(4),inst_10531);
} else
{if((state_val_10557 === (9)))
{var inst_10527 = (state_10556[(7)]);var state_10556__$1 = state_10556;var statearr_10567_10624 = state_10556__$1;(statearr_10567_10624[(2)] = inst_10527);
(statearr_10567_10624[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (5)))
{var inst_10527 = (state_10556[(7)]);var inst_10541 = test.dialogList.step.call(null,inst_10527);var inst_10542 = test.dialogList.view.call(null,inst_10541);var state_10556__$1 = state_10556;var statearr_10568_10625 = state_10556__$1;(statearr_10568_10625[(2)] = inst_10542);
(statearr_10568_10625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (10)))
{var inst_10549 = (state_10556[(2)]);var state_10556__$1 = state_10556;var statearr_10569_10626 = state_10556__$1;(statearr_10569_10626[(2)] = inst_10549);
(statearr_10569_10626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10557 === (8)))
{var inst_10527 = (state_10556[(7)]);var inst_10546 = test.dialogList.requestNext.call(null,inst_10527);var state_10556__$1 = state_10556;var statearr_10570_10627 = state_10556__$1;(statearr_10570_10627[(2)] = inst_10546);
(statearr_10570_10627[(1)] = (10));
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
});})(c__6203__auto___10617,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10617,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10574 = [null,null,null,null,null,null,null,null,null,null];(statearr_10574[(0)] = state_machine__6189__auto__);
(statearr_10574[(1)] = (1));
return statearr_10574;
});
var state_machine__6189__auto____1 = (function (state_10556){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10556);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10575){if((e10575 instanceof Object))
{var ex__6192__auto__ = e10575;var statearr_10576_10628 = state_10556;(statearr_10576_10628[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10629 = state_10556;
state_10556 = G__10629;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10556){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10617,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10577 = f__6204__auto__.call(null);(statearr_10577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10617);
return statearr_10577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10617,test_str,onTick,onClick))
);
var c__6203__auto___10630 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10630,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10630,test_str,onTick,onClick){
return (function (state_10589){var state_val_10590 = (state_10589[(1)]);if((state_val_10590 === (5)))
{var inst_10578 = (state_10589[(7)]);var inst_10584 = (state_10589[(2)]);var tmp10591 = inst_10578;var inst_10578__$1 = tmp10591;var state_10589__$1 = (function (){var statearr_10592 = state_10589;(statearr_10592[(7)] = inst_10578__$1);
(statearr_10592[(8)] = inst_10584);
return statearr_10592;
})();var statearr_10593_10631 = state_10589__$1;(statearr_10593_10631[(2)] = null);
(statearr_10593_10631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10590 === (4)))
{var inst_10578 = (state_10589[(7)]);var inst_10582 = (state_10589[(2)]);var state_10589__$1 = (function (){var statearr_10594 = state_10589;(statearr_10594[(9)] = inst_10582);
return statearr_10594;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10589__$1,(5),onTick,inst_10578);
} else
{if((state_val_10590 === (3)))
{var inst_10587 = (state_10589[(2)]);var state_10589__$1 = state_10589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10589__$1,inst_10587);
} else
{if((state_val_10590 === (2)))
{var inst_10578 = (state_10589[(7)]);var inst_10580 = cljs.core.async.timeout.call(null,inst_10578);var state_10589__$1 = state_10589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10589__$1,(4),inst_10580);
} else
{if((state_val_10590 === (1)))
{var inst_10578 = (100);var state_10589__$1 = (function (){var statearr_10595 = state_10589;(statearr_10595[(7)] = inst_10578);
return statearr_10595;
})();var statearr_10596_10632 = state_10589__$1;(statearr_10596_10632[(2)] = null);
(statearr_10596_10632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10630,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10630,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10600 = [null,null,null,null,null,null,null,null,null,null];(statearr_10600[(0)] = state_machine__6189__auto__);
(statearr_10600[(1)] = (1));
return statearr_10600;
});
var state_machine__6189__auto____1 = (function (state_10589){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10601){if((e10601 instanceof Object))
{var ex__6192__auto__ = e10601;var statearr_10602_10633 = state_10589;(statearr_10602_10633[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10634 = state_10589;
state_10589 = G__10634;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10589){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10630,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10603 = f__6204__auto__.call(null);(statearr_10603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10630);
return statearr_10603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10630,test_str,onTick,onClick))
);
var G__10604_10635 = $("body");G__10604_10635.on("click",((function (G__10604_10635,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__10604_10635,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__10604_10635,test_str,onTick,onClick){
return (function (state_10608){var state_val_10609 = (state_10608[(1)]);if((state_val_10609 === (2)))
{var inst_10606 = (state_10608[(2)]);var state_10608__$1 = state_10608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10608__$1,inst_10606);
} else
{if((state_val_10609 === (1)))
{var state_10608__$1 = state_10608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10608__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__10604_10635,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__10604_10635,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10613 = [null,null,null,null,null,null,null];(statearr_10613[(0)] = state_machine__6189__auto__);
(statearr_10613[(1)] = (1));
return statearr_10613;
});
var state_machine__6189__auto____1 = (function (state_10608){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10608);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10614){if((e10614 instanceof Object))
{var ex__6192__auto__ = e10614;var statearr_10615_10636 = state_10608;(statearr_10615_10636[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10637 = state_10608;
state_10608 = G__10637;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10608){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__10604_10635,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10616 = f__6204__auto__.call(null);(statearr_10616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__10604_10635,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__10604_10635,test_str,onTick,onClick))
);
return null;
});
test.dialogList.main.call(null);
