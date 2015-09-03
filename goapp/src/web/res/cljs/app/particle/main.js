// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.draw');
goog.require('app.particle.impl');
goog.require('app.particle.abstract$');
goog.require('app.particle.abstract$');
goog.require('cljs.core.async');
app.particle.main.draw = app.particle.draw.draw3D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_42464){var state_val_42465 = (state_42464[(1)]);if((state_val_42465 === (2)))
{var inst_42462 = (state_42464[(2)]);var state_42464__$1 = state_42464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42464__$1,inst_42462);
} else
{if((state_val_42465 === (1)))
{var state_42464__$1 = state_42464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42464__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42469 = [null,null,null,null,null,null,null];(statearr_42469[(0)] = state_machine__6188__auto__);
(statearr_42469[(1)] = (1));
return statearr_42469;
});
var state_machine__6188__auto____1 = (function (state_42464){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42464);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42470){if((e42470 instanceof Object))
{var ex__6191__auto__ = e42470;var statearr_42471_42638 = state_42464;(statearr_42471_42638[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42639 = state_42464;
state_42464 = G__42639;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42464){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42472 = f__6203__auto__.call(null);(statearr_42472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_42472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___42640 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42640,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42640,onView,onModel,onTick,mspf){
return (function (state_42481){var state_val_42482 = (state_42481[(1)]);if((state_val_42482 === (4)))
{var inst_42475 = (state_42481[(2)]);var inst_42476 = common.onModel.onNext(inst_42475);var state_42481__$1 = (function (){var statearr_42483 = state_42481;(statearr_42483[(7)] = inst_42476);
return statearr_42483;
})();var statearr_42484_42641 = state_42481__$1;(statearr_42484_42641[(2)] = null);
(statearr_42484_42641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42482 === (3)))
{var inst_42479 = (state_42481[(2)]);var state_42481__$1 = state_42481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42481__$1,inst_42479);
} else
{if((state_val_42482 === (2)))
{var state_42481__$1 = state_42481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42481__$1,(4),onModel);
} else
{if((state_val_42482 === (1)))
{var state_42481__$1 = state_42481;var statearr_42485_42642 = state_42481__$1;(statearr_42485_42642[(2)] = null);
(statearr_42485_42642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___42640,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42640,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42489 = [null,null,null,null,null,null,null,null];(statearr_42489[(0)] = state_machine__6188__auto__);
(statearr_42489[(1)] = (1));
return statearr_42489;
});
var state_machine__6188__auto____1 = (function (state_42481){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42481);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42490){if((e42490 instanceof Object))
{var ex__6191__auto__ = e42490;var statearr_42491_42643 = state_42481;(statearr_42491_42643[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42644 = state_42481;
state_42481 = G__42644;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42481){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42640,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42492 = f__6203__auto__.call(null);(statearr_42492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42640);
return statearr_42492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42640,onView,onModel,onTick,mspf))
);
var c__6202__auto___42645 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42645,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42645,onView,onModel,onTick,mspf){
return (function (state_42511){var state_val_42512 = (state_42511[(1)]);if((state_val_42512 === (5)))
{var inst_42495 = (state_42511[(7)]);var inst_42502 = (state_42511[(8)]);var inst_42506 = (state_42511[(2)]);var tmp42513 = inst_42495;var inst_42495__$1 = tmp42513;var inst_42496 = inst_42502;var state_42511__$1 = (function (){var statearr_42514 = state_42511;(statearr_42514[(7)] = inst_42495__$1);
(statearr_42514[(9)] = inst_42506);
(statearr_42514[(10)] = inst_42496);
return statearr_42514;
})();var statearr_42515_42646 = state_42511__$1;(statearr_42515_42646[(2)] = null);
(statearr_42515_42646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42512 === (4)))
{var inst_42496 = (state_42511[(10)]);var inst_42502 = (state_42511[(8)]);var inst_42500 = (state_42511[(2)]);var inst_42501 = (new Date());var inst_42502__$1 = inst_42501.getTime();var inst_42503 = (inst_42502__$1 - inst_42496);var inst_42504 = (inst_42503 / (1000));var state_42511__$1 = (function (){var statearr_42516 = state_42511;(statearr_42516[(11)] = inst_42500);
(statearr_42516[(8)] = inst_42502__$1);
return statearr_42516;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42511__$1,(5),onTick,inst_42504);
} else
{if((state_val_42512 === (3)))
{var inst_42509 = (state_42511[(2)]);var state_42511__$1 = state_42511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42511__$1,inst_42509);
} else
{if((state_val_42512 === (2)))
{var inst_42495 = (state_42511[(7)]);var inst_42498 = cljs.core.async.timeout.call(null,inst_42495);var state_42511__$1 = state_42511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42511__$1,(4),inst_42498);
} else
{if((state_val_42512 === (1)))
{var inst_42493 = (new Date());var inst_42494 = inst_42493.getTime();var inst_42495 = mspf;var inst_42496 = inst_42494;var state_42511__$1 = (function (){var statearr_42517 = state_42511;(statearr_42517[(7)] = inst_42495);
(statearr_42517[(10)] = inst_42496);
return statearr_42517;
})();var statearr_42518_42647 = state_42511__$1;(statearr_42518_42647[(2)] = null);
(statearr_42518_42647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___42645,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42645,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42522 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42522[(0)] = state_machine__6188__auto__);
(statearr_42522[(1)] = (1));
return statearr_42522;
});
var state_machine__6188__auto____1 = (function (state_42511){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42523){if((e42523 instanceof Object))
{var ex__6191__auto__ = e42523;var statearr_42524_42648 = state_42511;(statearr_42524_42648[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42649 = state_42511;
state_42511 = G__42649;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42511){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42645,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42525 = f__6203__auto__.call(null);(statearr_42525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42645);
return statearr_42525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42645,onView,onModel,onTick,mspf))
);
var c__6202__auto___42650 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42650,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42650,onView,onModel,onTick,mspf){
return (function (state_42569){var state_val_42570 = (state_42569[(1)]);if((state_val_42570 === (7)))
{var inst_42564 = (state_42569[(2)]);var inst_42535 = inst_42564;var state_42569__$1 = (function (){var statearr_42571 = state_42569;(statearr_42571[(7)] = inst_42535);
return statearr_42571;
})();var statearr_42572_42651 = state_42569__$1;(statearr_42572_42651[(2)] = null);
(statearr_42572_42651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (1)))
{var inst_42526 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787)];var inst_42527 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_42528 = cljs.core.List.EMPTY;var inst_42529 = [inst_42528];var inst_42530 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42527,inst_42529);var inst_42531 = [(100),(0)];var inst_42532 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42531,null));var inst_42533 = [(0),inst_42530,inst_42532];var inst_42534 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42526,inst_42533);var inst_42535 = inst_42534;var state_42569__$1 = (function (){var statearr_42573 = state_42569;(statearr_42573[(7)] = inst_42535);
return statearr_42573;
})();var statearr_42574_42652 = state_42569__$1;(statearr_42574_42652[(2)] = null);
(statearr_42574_42652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (4)))
{var inst_42543 = (state_42569[(8)]);var inst_42541 = (state_42569[(2)]);var inst_42542 = cljs.core.nth.call(null,inst_42541,(0),null);var inst_42543__$1 = cljs.core.nth.call(null,inst_42541,(1),null);var inst_42547 = cljs.core._EQ_.call(null,onTick,inst_42543__$1);var state_42569__$1 = (function (){var statearr_42575 = state_42569;(statearr_42575[(9)] = inst_42542);
(statearr_42575[(8)] = inst_42543__$1);
return statearr_42575;
})();if(inst_42547)
{var statearr_42576_42653 = state_42569__$1;(statearr_42576_42653[(1)] = (5));
} else
{var statearr_42577_42654 = state_42569__$1;(statearr_42577_42654[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (6)))
{var inst_42543 = (state_42569[(8)]);var inst_42555 = cljs.core._EQ_.call(null,onView,inst_42543);var state_42569__$1 = state_42569;if(inst_42555)
{var statearr_42578_42655 = state_42569__$1;(statearr_42578_42655[(1)] = (8));
} else
{var statearr_42579_42656 = state_42569__$1;(statearr_42579_42656[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (3)))
{var inst_42567 = (state_42569[(2)]);var state_42569__$1 = state_42569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42569__$1,inst_42567);
} else
{if((state_val_42570 === (2)))
{var inst_42538 = [onView,onTick];var inst_42539 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42538,null));var state_42569__$1 = state_42569;return cljs.core.async.ioc_alts_BANG_.call(null,state_42569__$1,(4),inst_42539);
} else
{if((state_val_42570 === (9)))
{var inst_42535 = (state_42569[(7)]);var state_42569__$1 = state_42569;var statearr_42580_42657 = state_42569__$1;(statearr_42580_42657[(2)] = inst_42535);
(statearr_42580_42657[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (5)))
{var inst_42535 = (state_42569[(7)]);var inst_42542 = (state_42569[(9)]);var inst_42549 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_42550 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42549,null));var inst_42551 = cljs.core.partial.call(null,tool.particle.update,inst_42542);var inst_42552 = cljs.core.update_in.call(null,inst_42535,inst_42550,inst_42551);var inst_42553 = app.particle.main.draw.call(null,inst_42552);var state_42569__$1 = state_42569;var statearr_42581_42658 = state_42569__$1;(statearr_42581_42658[(2)] = inst_42553);
(statearr_42581_42658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (10)))
{var inst_42562 = (state_42569[(2)]);var state_42569__$1 = state_42569;var statearr_42582_42659 = state_42569__$1;(statearr_42582_42659[(2)] = inst_42562);
(statearr_42582_42659[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42570 === (8)))
{var inst_42535 = (state_42569[(7)]);var inst_42542 = (state_42569[(9)]);var inst_42557 = (inst_42542[(0)]);var inst_42558 = (inst_42542[(1)]);var inst_42559 = app.particle.abstract$.onViewCommand.call(null,inst_42557,inst_42558,inst_42535);var state_42569__$1 = state_42569;var statearr_42583_42660 = state_42569__$1;(statearr_42583_42660[(2)] = inst_42559);
(statearr_42583_42660[(1)] = (10));
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
});})(c__6202__auto___42650,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42650,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42587 = [null,null,null,null,null,null,null,null,null,null];(statearr_42587[(0)] = state_machine__6188__auto__);
(statearr_42587[(1)] = (1));
return statearr_42587;
});
var state_machine__6188__auto____1 = (function (state_42569){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42569);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42588){if((e42588 instanceof Object))
{var ex__6191__auto__ = e42588;var statearr_42589_42661 = state_42569;(statearr_42589_42661[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42569);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42662 = state_42569;
state_42569 = G__42662;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42569){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42650,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42590 = f__6203__auto__.call(null);(statearr_42590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42650);
return statearr_42590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42650,onView,onModel,onTick,mspf))
);
var c__6202__auto___42663 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___42663,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___42663,onView,onModel,onTick,mspf){
return (function (state_42626){var state_val_42627 = (state_42626[(1)]);if((state_val_42627 === (5)))
{var inst_42624 = (state_42626[(2)]);var state_42626__$1 = state_42626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42626__$1,inst_42624);
} else
{if((state_val_42627 === (4)))
{var inst_42603 = (state_42626[(2)]);var inst_42610 = [(0),(0),(0)];var inst_42611 = [(1),(0),(1),(1)];var inst_42612 = [(10),(20)];var inst_42613 = [(100),(0),3.14];var inst_42614 = {"position":inst_42610,"color":inst_42611,"size":inst_42612,"vel":inst_42613};var inst_42615 = [inst_42614];var inst_42616 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_42615};var inst_42617 = [(0),(0),(1),(1)];var inst_42618 = [(30),(10)];var inst_42619 = [(10),(10),(0)];var inst_42620 = [(100),(100),(0)];var inst_42621 = {"id":"x1","emit":inst_42616,"color":inst_42617,"size":inst_42618,"pos":inst_42619,"vel":inst_42620};var inst_42622 = ["edit-particle",inst_42621];var state_42626__$1 = (function (){var statearr_42628 = state_42626;(statearr_42628[(7)] = inst_42603);
return statearr_42628;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42626__$1,(5),onView,inst_42622);
} else
{if((state_val_42627 === (3)))
{var inst_42600 = (state_42626[(2)]);var inst_42601 = cljs.core.async.timeout.call(null,(1100));var state_42626__$1 = (function (){var statearr_42629 = state_42626;(statearr_42629[(8)] = inst_42600);
return statearr_42629;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42626__$1,(4),inst_42601);
} else
{if((state_val_42627 === (2)))
{var inst_42593 = (state_42626[(2)]);var inst_42596 = [(10),(10),(0)];var inst_42597 = {"id":"x1","pos":inst_42596};var inst_42598 = ["edit-particle",inst_42597];var state_42626__$1 = (function (){var statearr_42630 = state_42626;(statearr_42630[(9)] = inst_42593);
return statearr_42630;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42626__$1,(3),onView,inst_42598);
} else
{if((state_val_42627 === (1)))
{var inst_42591 = cljs.core.async.timeout.call(null,(1000));var state_42626__$1 = state_42626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42626__$1,(2),inst_42591);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___42663,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___42663,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_42634 = [null,null,null,null,null,null,null,null,null,null];(statearr_42634[(0)] = state_machine__6188__auto__);
(statearr_42634[(1)] = (1));
return statearr_42634;
});
var state_machine__6188__auto____1 = (function (state_42626){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42635){if((e42635 instanceof Object))
{var ex__6191__auto__ = e42635;var statearr_42636_42664 = state_42626;(statearr_42636_42664[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42665 = state_42626;
state_42626 = G__42665;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42626){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___42663,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_42637 = f__6203__auto__.call(null);(statearr_42637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___42663);
return statearr_42637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___42663,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
