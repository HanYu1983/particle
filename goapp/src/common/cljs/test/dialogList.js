// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
test.dialogList.step = (function step(p__14195){var map__14197 = p__14195;var map__14197__$1 = ((cljs.core.seq_QMARK_.call(null,map__14197))?cljs.core.apply.call(null,cljs.core.hash_map,map__14197):map__14197);var ctx = map__14197__$1;var dialogs = cljs.core.get.call(null,map__14197__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__14197__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__14197,map__14197__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.step.call(null,dialog);
} else
{return dialog;
}
});})(map__14197,map__14197__$1,ctx,dialogs,curr_idx))
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
test.dialogList.showstr = (function showstr(p__14198){var map__14200 = p__14198;var map__14200__$1 = ((cljs.core.seq_QMARK_.call(null,map__14200))?cljs.core.apply.call(null,cljs.core.hash_map,map__14200):map__14200);var ctx = map__14200__$1;var dialogs = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function requestNext(p__14201){var map__14203 = p__14201;var map__14203__$1 = ((cljs.core.seq_QMARK_.call(null,map__14203))?cljs.core.apply.call(null,cljs.core.hash_map,map__14203):map__14203);var ctx = map__14203__$1;var dialogs = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__14203__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__14203,map__14203__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.requestNext.call(null,dialog);
} else
{return dialog;
}
});})(map__14203,map__14203__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function view(elem,ctx){var show_14206 = test.dialogList.showstr.call(null,ctx);var G__14205_14207 = elem;G__14205_14207.empty();
G__14205_14207.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_14206)));
return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___14414 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14414,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14414,test_str,onTick,onClick){
return (function (state_14353){var state_val_14354 = (state_14353[(1)]);if((state_val_14354 === (7)))
{var inst_14348 = (state_14353[(2)]);var inst_14324 = inst_14348;var state_14353__$1 = (function (){var statearr_14355 = state_14353;(statearr_14355[(7)] = inst_14324);
return statearr_14355;
})();var statearr_14356_14415 = state_14353__$1;(statearr_14356_14415[(2)] = null);
(statearr_14356_14415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (1)))
{var inst_14311 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];var inst_14312 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_14313 = [(4),test_str];var inst_14314 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14312,inst_14313);var inst_14315 = tool.dialog.dialog.call(null,inst_14314);var inst_14316 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_14315);var inst_14317 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_14318 = [(4),test_str];var inst_14319 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14317,inst_14318);var inst_14320 = tool.dialog.dialog.call(null,inst_14319);var inst_14321 = cljs.core._conj.call(null,inst_14316,inst_14320);var inst_14322 = [(0),inst_14321];var inst_14323 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14311,inst_14322);var inst_14324 = inst_14323;var state_14353__$1 = (function (){var statearr_14357 = state_14353;(statearr_14357[(7)] = inst_14324);
return statearr_14357;
})();var statearr_14358_14416 = state_14353__$1;(statearr_14358_14416[(2)] = null);
(statearr_14358_14416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (4)))
{var inst_14332 = (state_14353[(8)]);var inst_14330 = (state_14353[(2)]);var inst_14331 = cljs.core.nth.call(null,inst_14330,(0),null);var inst_14332__$1 = cljs.core.nth.call(null,inst_14330,(1),null);var inst_14336 = cljs.core._EQ_.call(null,onTick,inst_14332__$1);var state_14353__$1 = (function (){var statearr_14359 = state_14353;(statearr_14359[(8)] = inst_14332__$1);
(statearr_14359[(9)] = inst_14331);
return statearr_14359;
})();if(inst_14336)
{var statearr_14360_14417 = state_14353__$1;(statearr_14360_14417[(1)] = (5));
} else
{var statearr_14361_14418 = state_14353__$1;(statearr_14361_14418[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (6)))
{var inst_14332 = (state_14353[(8)]);var inst_14341 = cljs.core._EQ_.call(null,onClick,inst_14332);var state_14353__$1 = state_14353;if(inst_14341)
{var statearr_14362_14419 = state_14353__$1;(statearr_14362_14419[(1)] = (8));
} else
{var statearr_14363_14420 = state_14353__$1;(statearr_14363_14420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (3)))
{var inst_14351 = (state_14353[(2)]);var state_14353__$1 = state_14353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14353__$1,inst_14351);
} else
{if((state_val_14354 === (2)))
{var inst_14327 = [onTick,onClick];var inst_14328 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14327,null));var state_14353__$1 = state_14353;return cljs.core.async.ioc_alts_BANG_.call(null,state_14353__$1,(4),inst_14328);
} else
{if((state_val_14354 === (9)))
{var inst_14324 = (state_14353[(7)]);var state_14353__$1 = state_14353;var statearr_14364_14421 = state_14353__$1;(statearr_14364_14421[(2)] = inst_14324);
(statearr_14364_14421[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (5)))
{var inst_14324 = (state_14353[(7)]);var inst_14338 = test.dialogList.step.call(null,inst_14324);var inst_14339 = test.dialogList.view.call(null,inst_14338);var state_14353__$1 = state_14353;var statearr_14365_14422 = state_14353__$1;(statearr_14365_14422[(2)] = inst_14339);
(statearr_14365_14422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (10)))
{var inst_14346 = (state_14353[(2)]);var state_14353__$1 = state_14353;var statearr_14366_14423 = state_14353__$1;(statearr_14366_14423[(2)] = inst_14346);
(statearr_14366_14423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14354 === (8)))
{var inst_14324 = (state_14353[(7)]);var inst_14343 = test.dialogList.requestNext.call(null,inst_14324);var state_14353__$1 = state_14353;var statearr_14367_14424 = state_14353__$1;(statearr_14367_14424[(2)] = inst_14343);
(statearr_14367_14424[(1)] = (10));
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
});})(c__6203__auto___14414,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___14414,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14371 = [null,null,null,null,null,null,null,null,null,null];(statearr_14371[(0)] = state_machine__6189__auto__);
(statearr_14371[(1)] = (1));
return statearr_14371;
});
var state_machine__6189__auto____1 = (function (state_14353){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14353);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14372){if((e14372 instanceof Object))
{var ex__6192__auto__ = e14372;var statearr_14373_14425 = state_14353;(statearr_14373_14425[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14353);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14426 = state_14353;
state_14353 = G__14426;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14353){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14414,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14374 = f__6204__auto__.call(null);(statearr_14374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14414);
return statearr_14374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14414,test_str,onTick,onClick))
);
var c__6203__auto___14427 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14427,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14427,test_str,onTick,onClick){
return (function (state_14386){var state_val_14387 = (state_14386[(1)]);if((state_val_14387 === (5)))
{var inst_14375 = (state_14386[(7)]);var inst_14381 = (state_14386[(2)]);var tmp14388 = inst_14375;var inst_14375__$1 = tmp14388;var state_14386__$1 = (function (){var statearr_14389 = state_14386;(statearr_14389[(8)] = inst_14381);
(statearr_14389[(7)] = inst_14375__$1);
return statearr_14389;
})();var statearr_14390_14428 = state_14386__$1;(statearr_14390_14428[(2)] = null);
(statearr_14390_14428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (4)))
{var inst_14375 = (state_14386[(7)]);var inst_14379 = (state_14386[(2)]);var state_14386__$1 = (function (){var statearr_14391 = state_14386;(statearr_14391[(9)] = inst_14379);
return statearr_14391;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14386__$1,(5),onTick,inst_14375);
} else
{if((state_val_14387 === (3)))
{var inst_14384 = (state_14386[(2)]);var state_14386__$1 = state_14386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14386__$1,inst_14384);
} else
{if((state_val_14387 === (2)))
{var inst_14375 = (state_14386[(7)]);var inst_14377 = cljs.core.async.timeout.call(null,inst_14375);var state_14386__$1 = state_14386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14386__$1,(4),inst_14377);
} else
{if((state_val_14387 === (1)))
{var inst_14375 = (100);var state_14386__$1 = (function (){var statearr_14392 = state_14386;(statearr_14392[(7)] = inst_14375);
return statearr_14392;
})();var statearr_14393_14429 = state_14386__$1;(statearr_14393_14429[(2)] = null);
(statearr_14393_14429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___14427,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___14427,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14397 = [null,null,null,null,null,null,null,null,null,null];(statearr_14397[(0)] = state_machine__6189__auto__);
(statearr_14397[(1)] = (1));
return statearr_14397;
});
var state_machine__6189__auto____1 = (function (state_14386){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14398){if((e14398 instanceof Object))
{var ex__6192__auto__ = e14398;var statearr_14399_14430 = state_14386;(statearr_14399_14430[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14431 = state_14386;
state_14386 = G__14431;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14386){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14427,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14400 = f__6204__auto__.call(null);(statearr_14400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14427);
return statearr_14400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14427,test_str,onTick,onClick))
);
var G__14401_14432 = $("body");G__14401_14432.on("click",((function (G__14401_14432,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__14401_14432,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__14401_14432,test_str,onTick,onClick){
return (function (state_14405){var state_val_14406 = (state_14405[(1)]);if((state_val_14406 === (2)))
{var inst_14403 = (state_14405[(2)]);var state_14405__$1 = state_14405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14405__$1,inst_14403);
} else
{if((state_val_14406 === (1)))
{var state_14405__$1 = state_14405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14405__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__14401_14432,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__14401_14432,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14410 = [null,null,null,null,null,null,null];(statearr_14410[(0)] = state_machine__6189__auto__);
(statearr_14410[(1)] = (1));
return statearr_14410;
});
var state_machine__6189__auto____1 = (function (state_14405){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14405);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14411){if((e14411 instanceof Object))
{var ex__6192__auto__ = e14411;var statearr_14412_14433 = state_14405;(statearr_14412_14433[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14434 = state_14405;
state_14405 = G__14434;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14405){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__14401_14432,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14413 = f__6204__auto__.call(null);(statearr_14413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__14401_14432,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__14401_14432,test_str,onTick,onClick))
);
return null;
});
test.dialogList.main.call(null);
