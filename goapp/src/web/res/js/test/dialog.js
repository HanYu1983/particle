// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
test.dialog.view = (function view(elem,ctx){var show_10187 = tool.dialog.showstr.call(null,ctx);var G__10186_10188 = elem;G__10186_10188.empty();
G__10186_10188.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_10187)));
return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___10377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10377,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10377,test_str,onTick,onClick){
return (function (state_10316){var state_val_10317 = (state_10316[(1)]);if((state_val_10317 === (7)))
{var inst_10311 = (state_10316[(2)]);var inst_10287 = inst_10311;var state_10316__$1 = (function (){var statearr_10318 = state_10316;(statearr_10318[(7)] = inst_10287);
return statearr_10318;
})();var statearr_10319_10378 = state_10316__$1;(statearr_10319_10378[(2)] = null);
(statearr_10319_10378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (1)))
{var inst_10283 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_10284 = [(4),test_str];var inst_10285 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10283,inst_10284);var inst_10286 = tool.dialog.dialog.call(null,inst_10285);var inst_10287 = inst_10286;var state_10316__$1 = (function (){var statearr_10320 = state_10316;(statearr_10320[(7)] = inst_10287);
return statearr_10320;
})();var statearr_10321_10379 = state_10316__$1;(statearr_10321_10379[(2)] = null);
(statearr_10321_10379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (4)))
{var inst_10295 = (state_10316[(8)]);var inst_10293 = (state_10316[(2)]);var inst_10294 = cljs.core.nth.call(null,inst_10293,(0),null);var inst_10295__$1 = cljs.core.nth.call(null,inst_10293,(1),null);var inst_10299 = cljs.core._EQ_.call(null,onTick,inst_10295__$1);var state_10316__$1 = (function (){var statearr_10322 = state_10316;(statearr_10322[(8)] = inst_10295__$1);
(statearr_10322[(9)] = inst_10294);
return statearr_10322;
})();if(inst_10299)
{var statearr_10323_10380 = state_10316__$1;(statearr_10323_10380[(1)] = (5));
} else
{var statearr_10324_10381 = state_10316__$1;(statearr_10324_10381[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (6)))
{var inst_10295 = (state_10316[(8)]);var inst_10304 = cljs.core._EQ_.call(null,onClick,inst_10295);var state_10316__$1 = state_10316;if(inst_10304)
{var statearr_10325_10382 = state_10316__$1;(statearr_10325_10382[(1)] = (8));
} else
{var statearr_10326_10383 = state_10316__$1;(statearr_10326_10383[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (3)))
{var inst_10314 = (state_10316[(2)]);var state_10316__$1 = state_10316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10316__$1,inst_10314);
} else
{if((state_val_10317 === (2)))
{var inst_10290 = [onTick,onClick];var inst_10291 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10290,null));var state_10316__$1 = state_10316;return cljs.core.async.ioc_alts_BANG_.call(null,state_10316__$1,(4),inst_10291);
} else
{if((state_val_10317 === (9)))
{var inst_10287 = (state_10316[(7)]);var state_10316__$1 = state_10316;var statearr_10327_10384 = state_10316__$1;(statearr_10327_10384[(2)] = inst_10287);
(statearr_10327_10384[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (5)))
{var inst_10287 = (state_10316[(7)]);var inst_10301 = tool.dialog.step.call(null,inst_10287);var inst_10302 = test.dialog.view.call(null,inst_10301);var state_10316__$1 = state_10316;var statearr_10328_10385 = state_10316__$1;(statearr_10328_10385[(2)] = inst_10302);
(statearr_10328_10385[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (10)))
{var inst_10309 = (state_10316[(2)]);var state_10316__$1 = state_10316;var statearr_10329_10386 = state_10316__$1;(statearr_10329_10386[(2)] = inst_10309);
(statearr_10329_10386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10317 === (8)))
{var inst_10287 = (state_10316[(7)]);var inst_10306 = tool.dialog.requestNext.call(null,inst_10287);var state_10316__$1 = state_10316;var statearr_10330_10387 = state_10316__$1;(statearr_10330_10387[(2)] = inst_10306);
(statearr_10330_10387[(1)] = (10));
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
});})(c__6203__auto___10377,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10377,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10334 = [null,null,null,null,null,null,null,null,null,null];(statearr_10334[(0)] = state_machine__6189__auto__);
(statearr_10334[(1)] = (1));
return statearr_10334;
});
var state_machine__6189__auto____1 = (function (state_10316){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10316);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10335){if((e10335 instanceof Object))
{var ex__6192__auto__ = e10335;var statearr_10336_10388 = state_10316;(statearr_10336_10388[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10389 = state_10316;
state_10316 = G__10389;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10316){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10377,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10337 = f__6204__auto__.call(null);(statearr_10337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10377);
return statearr_10337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10377,test_str,onTick,onClick))
);
var c__6203__auto___10390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10390,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10390,test_str,onTick,onClick){
return (function (state_10349){var state_val_10350 = (state_10349[(1)]);if((state_val_10350 === (5)))
{var inst_10338 = (state_10349[(7)]);var inst_10344 = (state_10349[(2)]);var tmp10351 = inst_10338;var inst_10338__$1 = tmp10351;var state_10349__$1 = (function (){var statearr_10352 = state_10349;(statearr_10352[(7)] = inst_10338__$1);
(statearr_10352[(8)] = inst_10344);
return statearr_10352;
})();var statearr_10353_10391 = state_10349__$1;(statearr_10353_10391[(2)] = null);
(statearr_10353_10391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10350 === (4)))
{var inst_10338 = (state_10349[(7)]);var inst_10342 = (state_10349[(2)]);var state_10349__$1 = (function (){var statearr_10354 = state_10349;(statearr_10354[(9)] = inst_10342);
return statearr_10354;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10349__$1,(5),onTick,inst_10338);
} else
{if((state_val_10350 === (3)))
{var inst_10347 = (state_10349[(2)]);var state_10349__$1 = state_10349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10349__$1,inst_10347);
} else
{if((state_val_10350 === (2)))
{var inst_10338 = (state_10349[(7)]);var inst_10340 = cljs.core.async.timeout.call(null,inst_10338);var state_10349__$1 = state_10349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10349__$1,(4),inst_10340);
} else
{if((state_val_10350 === (1)))
{var inst_10338 = (33);var state_10349__$1 = (function (){var statearr_10355 = state_10349;(statearr_10355[(7)] = inst_10338);
return statearr_10355;
})();var statearr_10356_10392 = state_10349__$1;(statearr_10356_10392[(2)] = null);
(statearr_10356_10392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10390,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10390,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10360 = [null,null,null,null,null,null,null,null,null,null];(statearr_10360[(0)] = state_machine__6189__auto__);
(statearr_10360[(1)] = (1));
return statearr_10360;
});
var state_machine__6189__auto____1 = (function (state_10349){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10361){if((e10361 instanceof Object))
{var ex__6192__auto__ = e10361;var statearr_10362_10393 = state_10349;(statearr_10362_10393[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10349);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10394 = state_10349;
state_10349 = G__10394;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10349){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10390,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10363 = f__6204__auto__.call(null);(statearr_10363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10390);
return statearr_10363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10390,test_str,onTick,onClick))
);
var G__10364_10395 = $("body");G__10364_10395.on("click",((function (G__10364_10395,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__10364_10395,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__10364_10395,test_str,onTick,onClick){
return (function (state_10368){var state_val_10369 = (state_10368[(1)]);if((state_val_10369 === (2)))
{var inst_10366 = (state_10368[(2)]);var state_10368__$1 = state_10368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10368__$1,inst_10366);
} else
{if((state_val_10369 === (1)))
{var state_10368__$1 = state_10368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10368__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__10364_10395,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__10364_10395,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10373 = [null,null,null,null,null,null,null];(statearr_10373[(0)] = state_machine__6189__auto__);
(statearr_10373[(1)] = (1));
return statearr_10373;
});
var state_machine__6189__auto____1 = (function (state_10368){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10368);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10374){if((e10374 instanceof Object))
{var ex__6192__auto__ = e10374;var statearr_10375_10396 = state_10368;(statearr_10375_10396[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10368);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10397 = state_10368;
state_10368 = G__10397;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10368){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__10364_10395,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10376 = f__6204__auto__.call(null);(statearr_10376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__10364_10395,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__10364_10395,test_str,onTick,onClick))
);
return null;
});
test.dialog.main.call(null);
