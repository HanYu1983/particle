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
return (function (state_26322){var state_val_26323 = (state_26322[(1)]);if((state_val_26323 === (6)))
{var inst_26317 = (state_26322[(2)]);var inst_26318 = cljs.core.nth.call(null,inst_26317,(0),null);var inst_26319 = cljs.core.nth.call(null,inst_26317,(1),null);var inst_26320 = console.log(inst_26318,inst_26319);var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26322__$1,inst_26320);
} else
{if((state_val_26323 === (5)))
{var inst_26312 = (state_26322[(2)]);var inst_26313 = cljs.core.nth.call(null,inst_26312,(0),null);var inst_26314 = cljs.core.nth.call(null,inst_26312,(1),null);var inst_26315 = app.dbfile.file.call(null,inst_26314,"json");var state_26322__$1 = (function (){var statearr_26324 = state_26322;(statearr_26324[(7)] = inst_26313);
return statearr_26324;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(6),inst_26315);
} else
{if((state_val_26323 === (4)))
{var inst_26304 = (state_26322[(8)]);var inst_26307 = (state_26322[(2)]);var inst_26308 = cljs.core.nth.call(null,inst_26307,(0),null);var inst_26309 = cljs.core.nth.call(null,inst_26307,(1),null);var inst_26310 = app.dbfile.name__GT_id.call(null,inst_26304,"userinfo.json");var state_26322__$1 = (function (){var statearr_26325 = state_26322;(statearr_26325[(9)] = inst_26308);
(statearr_26325[(10)] = inst_26309);
return statearr_26325;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(5),inst_26310);
} else
{if((state_val_26323 === (3)))
{var inst_26304 = (state_26322[(8)]);var inst_26302 = (state_26322[(2)]);var inst_26303 = cljs.core.nth.call(null,inst_26302,(0),null);var inst_26304__$1 = cljs.core.nth.call(null,inst_26302,(1),null);var inst_26305 = app.dbfile.makeFile.call(null,inst_26304__$1,"userinfo.json","{}",true);var state_26322__$1 = (function (){var statearr_26326 = state_26322;(statearr_26326[(8)] = inst_26304__$1);
(statearr_26326[(11)] = inst_26303);
return statearr_26326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(4),inst_26305);
} else
{if((state_val_26323 === (2)))
{var inst_26297 = (state_26322[(2)]);var inst_26298 = cljs.core.nth.call(null,inst_26297,(0),null);var inst_26299 = cljs.core.nth.call(null,inst_26297,(1),null);var inst_26300 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_26322__$1 = (function (){var statearr_26327 = state_26322;(statearr_26327[(12)] = inst_26299);
(statearr_26327[(13)] = inst_26298);
return statearr_26327;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(3),inst_26300);
} else
{if((state_val_26323 === (1)))
{var inst_26295 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_26322__$1 = state_26322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(2),inst_26295);
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
var state_machine__6188__auto____0 = (function (){var statearr_26331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26331[(0)] = state_machine__6188__auto__);
(statearr_26331[(1)] = (1));
return statearr_26331;
});
var state_machine__6188__auto____1 = (function (state_26322){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26332){if((e26332 instanceof Object))
{var ex__6191__auto__ = e26332;var statearr_26333_26335 = state_26322;(statearr_26333_26335[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26336 = state_26322;
state_26322 = G__26336;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26322){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26334 = f__6203__auto__.call(null);(statearr_26334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){var onView_26517 = cljs.core.async.chan.call(null);var onModel_26518 = cljs.core.async.chan.call(null);var onSys_26519 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_26517,onModel_26518,onSys_26519){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_26517,onModel_26518,onSys_26519){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_26517,onModel_26518,onSys_26519){
return (function (state_26430){var state_val_26431 = (state_26430[(1)]);if((state_val_26431 === (2)))
{var inst_26428 = (state_26430[(2)]);var state_26430__$1 = state_26430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26430__$1,inst_26428);
} else
{if((state_val_26431 === (1)))
{var state_26430__$1 = state_26430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26430__$1,(2),onView_26517,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_26517,onModel_26518,onSys_26519))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_26517,onModel_26518,onSys_26519){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26435 = [null,null,null,null,null,null,null];(statearr_26435[(0)] = state_machine__6188__auto__);
(statearr_26435[(1)] = (1));
return statearr_26435;
});
var state_machine__6188__auto____1 = (function (state_26430){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26436){if((e26436 instanceof Object))
{var ex__6191__auto__ = e26436;var statearr_26437_26520 = state_26430;(statearr_26437_26520[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26521 = state_26430;
state_26430 = G__26521;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26430){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_26517,onModel_26518,onSys_26519))
})();var state__6204__auto__ = (function (){var statearr_26438 = f__6203__auto__.call(null);(statearr_26438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_26517,onModel_26518,onSys_26519))
);
return c__6202__auto__;
});})(onView_26517,onModel_26518,onSys_26519))
);
var c__6202__auto___26522 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26522,onView_26517,onModel_26518,onSys_26519){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26522,onView_26517,onModel_26518,onSys_26519){
return (function (state_26447){var state_val_26448 = (state_26447[(1)]);if((state_val_26448 === (4)))
{var inst_26441 = (state_26447[(2)]);var inst_26442 = common.onModel.onNext(inst_26441);var state_26447__$1 = (function (){var statearr_26449 = state_26447;(statearr_26449[(7)] = inst_26442);
return statearr_26449;
})();var statearr_26450_26523 = state_26447__$1;(statearr_26450_26523[(2)] = null);
(statearr_26450_26523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26448 === (3)))
{var inst_26445 = (state_26447[(2)]);var state_26447__$1 = state_26447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else
{if((state_val_26448 === (2)))
{var state_26447__$1 = state_26447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(4),onModel_26518);
} else
{if((state_val_26448 === (1)))
{var state_26447__$1 = state_26447;var statearr_26451_26524 = state_26447__$1;(statearr_26451_26524[(2)] = null);
(statearr_26451_26524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___26522,onView_26517,onModel_26518,onSys_26519))
;return ((function (switch__6187__auto__,c__6202__auto___26522,onView_26517,onModel_26518,onSys_26519){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26455 = [null,null,null,null,null,null,null,null];(statearr_26455[(0)] = state_machine__6188__auto__);
(statearr_26455[(1)] = (1));
return statearr_26455;
});
var state_machine__6188__auto____1 = (function (state_26447){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26456){if((e26456 instanceof Object))
{var ex__6191__auto__ = e26456;var statearr_26457_26525 = state_26447;(statearr_26457_26525[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26526 = state_26447;
state_26447 = G__26526;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26522,onView_26517,onModel_26518,onSys_26519))
})();var state__6204__auto__ = (function (){var statearr_26458 = f__6203__auto__.call(null);(statearr_26458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26522);
return statearr_26458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26522,onView_26517,onModel_26518,onSys_26519))
);
var c__6202__auto___26527 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26527,onView_26517,onModel_26518,onSys_26519){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26527,onView_26517,onModel_26518,onSys_26519){
return (function (state_26495){var state_val_26496 = (state_26495[(1)]);if((state_val_26496 === (7)))
{var inst_26490 = (state_26495[(2)]);var inst_26462 = inst_26490;var state_26495__$1 = (function (){var statearr_26497 = state_26495;(statearr_26497[(7)] = inst_26462);
return statearr_26497;
})();var statearr_26498_26528 = state_26495__$1;(statearr_26498_26528[(2)] = null);
(statearr_26498_26528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (1)))
{var inst_26459 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_26460 = [onView_26517,onModel_26518,onSys_26519,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_26461 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26459,inst_26460);var inst_26462 = inst_26461;var state_26495__$1 = (function (){var statearr_26499 = state_26495;(statearr_26499[(7)] = inst_26462);
return statearr_26499;
})();var statearr_26500_26529 = state_26495__$1;(statearr_26500_26529[(2)] = null);
(statearr_26500_26529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (4)))
{var inst_26470 = (state_26495[(8)]);var inst_26468 = (state_26495[(2)]);var inst_26469 = cljs.core.nth.call(null,inst_26468,(0),null);var inst_26470__$1 = cljs.core.nth.call(null,inst_26468,(1),null);var inst_26474 = cljs.core._EQ_.call(null,onSys_26519,inst_26470__$1);var state_26495__$1 = (function (){var statearr_26501 = state_26495;(statearr_26501[(9)] = inst_26469);
(statearr_26501[(8)] = inst_26470__$1);
return statearr_26501;
})();if(inst_26474)
{var statearr_26502_26530 = state_26495__$1;(statearr_26502_26530[(1)] = (5));
} else
{var statearr_26503_26531 = state_26495__$1;(statearr_26503_26531[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (6)))
{var inst_26470 = (state_26495[(8)]);var inst_26481 = cljs.core._EQ_.call(null,onView_26517,inst_26470);var state_26495__$1 = state_26495;if(inst_26481)
{var statearr_26504_26532 = state_26495__$1;(statearr_26504_26532[(1)] = (8));
} else
{var statearr_26505_26533 = state_26495__$1;(statearr_26505_26533[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (3)))
{var inst_26493 = (state_26495[(2)]);var state_26495__$1 = state_26495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26495__$1,inst_26493);
} else
{if((state_val_26496 === (2)))
{var inst_26465 = [onView_26517,onSys_26519];var inst_26466 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26465,null));var state_26495__$1 = state_26495;return cljs.core.async.ioc_alts_BANG_.call(null,state_26495__$1,(4),inst_26466);
} else
{if((state_val_26496 === (9)))
{var inst_26462 = (state_26495[(7)]);var state_26495__$1 = state_26495;var statearr_26506_26534 = state_26495__$1;(statearr_26506_26534[(2)] = inst_26462);
(statearr_26506_26534[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (5)))
{var inst_26469 = (state_26495[(9)]);var inst_26462 = (state_26495[(7)]);var inst_26477 = cljs.core.nth.call(null,inst_26469,(0),null);var inst_26478 = cljs.core.nth.call(null,inst_26469,(1),null);var inst_26479 = app.stock.abstract$.onSystem.call(null,inst_26477,inst_26478,inst_26462);var state_26495__$1 = state_26495;var statearr_26507_26535 = state_26495__$1;(statearr_26507_26535[(2)] = inst_26479);
(statearr_26507_26535[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (10)))
{var inst_26488 = (state_26495[(2)]);var state_26495__$1 = state_26495;var statearr_26508_26536 = state_26495__$1;(statearr_26508_26536[(2)] = inst_26488);
(statearr_26508_26536[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26496 === (8)))
{var inst_26469 = (state_26495[(9)]);var inst_26462 = (state_26495[(7)]);var inst_26483 = (inst_26469[(0)]);var inst_26484 = (inst_26469[(1)]);var inst_26485 = app.stock.abstract$.onViewCommand.call(null,inst_26483,inst_26484,inst_26462);var state_26495__$1 = state_26495;var statearr_26509_26537 = state_26495__$1;(statearr_26509_26537[(2)] = inst_26485);
(statearr_26509_26537[(1)] = (10));
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
});})(c__6202__auto___26527,onView_26517,onModel_26518,onSys_26519))
;return ((function (switch__6187__auto__,c__6202__auto___26527,onView_26517,onModel_26518,onSys_26519){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26513 = [null,null,null,null,null,null,null,null,null,null];(statearr_26513[(0)] = state_machine__6188__auto__);
(statearr_26513[(1)] = (1));
return statearr_26513;
});
var state_machine__6188__auto____1 = (function (state_26495){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26495);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object))
{var ex__6191__auto__ = e26514;var statearr_26515_26538 = state_26495;(statearr_26515_26538[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26539 = state_26495;
state_26495 = G__26539;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26495){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26527,onView_26517,onModel_26518,onSys_26519))
})();var state__6204__auto__ = (function (){var statearr_26516 = f__6203__auto__.call(null);(statearr_26516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26527);
return statearr_26516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26527,onView_26517,onModel_26518,onSys_26519))
);
return null;
});
app.stock.main.main.call(null);
