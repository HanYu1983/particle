// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
test.dialogList.step = (function step(p__23255){var map__23257 = p__23255;var map__23257__$1 = ((cljs.core.seq_QMARK_.call(null,map__23257))?cljs.core.apply.call(null,cljs.core.hash_map,map__23257):map__23257);var ctx = map__23257__$1;var dialogs = cljs.core.get.call(null,map__23257__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__23257__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__23257,map__23257__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.step.call(null,dialog);
} else
{return dialog;
}
});})(map__23257,map__23257__$1,ctx,dialogs,curr_idx))
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
test.dialogList.showstr = (function showstr(p__23258){var map__23260 = p__23258;var map__23260__$1 = ((cljs.core.seq_QMARK_.call(null,map__23260))?cljs.core.apply.call(null,cljs.core.hash_map,map__23260):map__23260);var ctx = map__23260__$1;var dialogs = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function requestNext(p__23261){var map__23263 = p__23261;var map__23263__$1 = ((cljs.core.seq_QMARK_.call(null,map__23263))?cljs.core.apply.call(null,cljs.core.hash_map,map__23263):map__23263);var ctx = map__23263__$1;var dialogs = cljs.core.get.call(null,map__23263__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__23263__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__23263,map__23263__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.requestNext.call(null,dialog);
} else
{return dialog;
}
});})(map__23263,map__23263__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function view(elem,ctx){var show_23266 = test.dialogList.showstr.call(null,ctx);var G__23265_23267 = elem;G__23265_23267.empty();
G__23265_23267.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_23266)));
return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6202__auto___23474 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___23474,test_str,onTick,onClick){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___23474,test_str,onTick,onClick){
return (function (state_23413){var state_val_23414 = (state_23413[(1)]);if((state_val_23414 === (7)))
{var inst_23408 = (state_23413[(2)]);var inst_23384 = inst_23408;var state_23413__$1 = (function (){var statearr_23415 = state_23413;(statearr_23415[(7)] = inst_23384);
return statearr_23415;
})();var statearr_23416_23475 = state_23413__$1;(statearr_23416_23475[(2)] = null);
(statearr_23416_23475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (1)))
{var inst_23371 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];var inst_23372 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_23373 = [(4),test_str];var inst_23374 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23372,inst_23373);var inst_23375 = tool.dialog.dialog.call(null,inst_23374);var inst_23376 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_23375);var inst_23377 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_23378 = [(4),test_str];var inst_23379 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23377,inst_23378);var inst_23380 = tool.dialog.dialog.call(null,inst_23379);var inst_23381 = cljs.core._conj.call(null,inst_23376,inst_23380);var inst_23382 = [(0),inst_23381];var inst_23383 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23371,inst_23382);var inst_23384 = inst_23383;var state_23413__$1 = (function (){var statearr_23417 = state_23413;(statearr_23417[(7)] = inst_23384);
return statearr_23417;
})();var statearr_23418_23476 = state_23413__$1;(statearr_23418_23476[(2)] = null);
(statearr_23418_23476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (4)))
{var inst_23392 = (state_23413[(8)]);var inst_23390 = (state_23413[(2)]);var inst_23391 = cljs.core.nth.call(null,inst_23390,(0),null);var inst_23392__$1 = cljs.core.nth.call(null,inst_23390,(1),null);var inst_23396 = cljs.core._EQ_.call(null,onTick,inst_23392__$1);var state_23413__$1 = (function (){var statearr_23419 = state_23413;(statearr_23419[(8)] = inst_23392__$1);
(statearr_23419[(9)] = inst_23391);
return statearr_23419;
})();if(inst_23396)
{var statearr_23420_23477 = state_23413__$1;(statearr_23420_23477[(1)] = (5));
} else
{var statearr_23421_23478 = state_23413__$1;(statearr_23421_23478[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (6)))
{var inst_23392 = (state_23413[(8)]);var inst_23401 = cljs.core._EQ_.call(null,onClick,inst_23392);var state_23413__$1 = state_23413;if(inst_23401)
{var statearr_23422_23479 = state_23413__$1;(statearr_23422_23479[(1)] = (8));
} else
{var statearr_23423_23480 = state_23413__$1;(statearr_23423_23480[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (3)))
{var inst_23411 = (state_23413[(2)]);var state_23413__$1 = state_23413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23413__$1,inst_23411);
} else
{if((state_val_23414 === (2)))
{var inst_23387 = [onTick,onClick];var inst_23388 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23387,null));var state_23413__$1 = state_23413;return cljs.core.async.ioc_alts_BANG_.call(null,state_23413__$1,(4),inst_23388);
} else
{if((state_val_23414 === (9)))
{var inst_23384 = (state_23413[(7)]);var state_23413__$1 = state_23413;var statearr_23424_23481 = state_23413__$1;(statearr_23424_23481[(2)] = inst_23384);
(statearr_23424_23481[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (5)))
{var inst_23384 = (state_23413[(7)]);var inst_23398 = test.dialogList.step.call(null,inst_23384);var inst_23399 = test.dialogList.view.call(null,inst_23398);var state_23413__$1 = state_23413;var statearr_23425_23482 = state_23413__$1;(statearr_23425_23482[(2)] = inst_23399);
(statearr_23425_23482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (10)))
{var inst_23406 = (state_23413[(2)]);var state_23413__$1 = state_23413;var statearr_23426_23483 = state_23413__$1;(statearr_23426_23483[(2)] = inst_23406);
(statearr_23426_23483[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23414 === (8)))
{var inst_23384 = (state_23413[(7)]);var inst_23403 = test.dialogList.requestNext.call(null,inst_23384);var state_23413__$1 = state_23413;var statearr_23427_23484 = state_23413__$1;(statearr_23427_23484[(2)] = inst_23403);
(statearr_23427_23484[(1)] = (10));
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
});})(c__6202__auto___23474,test_str,onTick,onClick))
;return ((function (switch__6187__auto__,c__6202__auto___23474,test_str,onTick,onClick){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23431 = [null,null,null,null,null,null,null,null,null,null];(statearr_23431[(0)] = state_machine__6188__auto__);
(statearr_23431[(1)] = (1));
return statearr_23431;
});
var state_machine__6188__auto____1 = (function (state_23413){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23432){if((e23432 instanceof Object))
{var ex__6191__auto__ = e23432;var statearr_23433_23485 = state_23413;(statearr_23433_23485[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23486 = state_23413;
state_23413 = G__23486;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23413){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___23474,test_str,onTick,onClick))
})();var state__6204__auto__ = (function (){var statearr_23434 = f__6203__auto__.call(null);(statearr_23434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___23474);
return statearr_23434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___23474,test_str,onTick,onClick))
);
var c__6202__auto___23487 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___23487,test_str,onTick,onClick){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___23487,test_str,onTick,onClick){
return (function (state_23446){var state_val_23447 = (state_23446[(1)]);if((state_val_23447 === (5)))
{var inst_23435 = (state_23446[(7)]);var inst_23441 = (state_23446[(2)]);var tmp23448 = inst_23435;var inst_23435__$1 = tmp23448;var state_23446__$1 = (function (){var statearr_23449 = state_23446;(statearr_23449[(7)] = inst_23435__$1);
(statearr_23449[(8)] = inst_23441);
return statearr_23449;
})();var statearr_23450_23488 = state_23446__$1;(statearr_23450_23488[(2)] = null);
(statearr_23450_23488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23447 === (4)))
{var inst_23435 = (state_23446[(7)]);var inst_23439 = (state_23446[(2)]);var state_23446__$1 = (function (){var statearr_23451 = state_23446;(statearr_23451[(9)] = inst_23439);
return statearr_23451;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23446__$1,(5),onTick,inst_23435);
} else
{if((state_val_23447 === (3)))
{var inst_23444 = (state_23446[(2)]);var state_23446__$1 = state_23446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23446__$1,inst_23444);
} else
{if((state_val_23447 === (2)))
{var inst_23435 = (state_23446[(7)]);var inst_23437 = cljs.core.async.timeout.call(null,inst_23435);var state_23446__$1 = state_23446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23446__$1,(4),inst_23437);
} else
{if((state_val_23447 === (1)))
{var inst_23435 = (100);var state_23446__$1 = (function (){var statearr_23452 = state_23446;(statearr_23452[(7)] = inst_23435);
return statearr_23452;
})();var statearr_23453_23489 = state_23446__$1;(statearr_23453_23489[(2)] = null);
(statearr_23453_23489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___23487,test_str,onTick,onClick))
;return ((function (switch__6187__auto__,c__6202__auto___23487,test_str,onTick,onClick){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23457 = [null,null,null,null,null,null,null,null,null,null];(statearr_23457[(0)] = state_machine__6188__auto__);
(statearr_23457[(1)] = (1));
return statearr_23457;
});
var state_machine__6188__auto____1 = (function (state_23446){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23446);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23458){if((e23458 instanceof Object))
{var ex__6191__auto__ = e23458;var statearr_23459_23490 = state_23446;(statearr_23459_23490[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23491 = state_23446;
state_23446 = G__23491;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23446){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___23487,test_str,onTick,onClick))
})();var state__6204__auto__ = (function (){var statearr_23460 = f__6203__auto__.call(null);(statearr_23460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___23487);
return statearr_23460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___23487,test_str,onTick,onClick))
);
var G__23461_23492 = $("body");G__23461_23492.on("click",((function (G__23461_23492,test_str,onTick,onClick){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,G__23461_23492,test_str,onTick,onClick){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,G__23461_23492,test_str,onTick,onClick){
return (function (state_23465){var state_val_23466 = (state_23465[(1)]);if((state_val_23466 === (2)))
{var inst_23463 = (state_23465[(2)]);var state_23465__$1 = state_23465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23465__$1,inst_23463);
} else
{if((state_val_23466 === (1)))
{var state_23465__$1 = state_23465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23465__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6202__auto__,G__23461_23492,test_str,onTick,onClick))
;return ((function (switch__6187__auto__,c__6202__auto__,G__23461_23492,test_str,onTick,onClick){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23470 = [null,null,null,null,null,null,null];(statearr_23470[(0)] = state_machine__6188__auto__);
(statearr_23470[(1)] = (1));
return statearr_23470;
});
var state_machine__6188__auto____1 = (function (state_23465){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23465);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23471){if((e23471 instanceof Object))
{var ex__6191__auto__ = e23471;var statearr_23472_23493 = state_23465;(statearr_23472_23493[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23494 = state_23465;
state_23465 = G__23494;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23465){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,G__23461_23492,test_str,onTick,onClick))
})();var state__6204__auto__ = (function (){var statearr_23473 = f__6203__auto__.call(null);(statearr_23473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_23473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,G__23461_23492,test_str,onTick,onClick))
);
return c__6202__auto__;
});})(G__23461_23492,test_str,onTick,onClick))
);
return null;
});
test.dialogList.main.call(null);
