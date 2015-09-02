// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.draw');
goog.require('cljs.core.async');
app.particle.main.draw2D = app.particle.draw.draw2D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_29537){var state_val_29538 = (state_29537[(1)]);if((state_val_29538 === (2)))
{var inst_29535 = (state_29537[(2)]);var state_29537__$1 = state_29537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29537__$1,inst_29535);
} else
{if((state_val_29538 === (1)))
{var state_29537__$1 = state_29537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29537__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29542 = [null,null,null,null,null,null,null];(statearr_29542[(0)] = state_machine__6188__auto__);
(statearr_29542[(1)] = (1));
return statearr_29542;
});
var state_machine__6188__auto____1 = (function (state_29537){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29537);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29543){if((e29543 instanceof Object))
{var ex__6191__auto__ = e29543;var statearr_29544_29776 = state_29537;(statearr_29544_29776[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29777 = state_29537;
state_29537 = G__29777;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29537){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29545 = f__6203__auto__.call(null);(statearr_29545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_29545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___29778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29778,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29778,onView,onModel,onTick,mspf){
return (function (state_29554){var state_val_29555 = (state_29554[(1)]);if((state_val_29555 === (4)))
{var inst_29548 = (state_29554[(2)]);var inst_29549 = common.onModel.onNext(inst_29548);var state_29554__$1 = (function (){var statearr_29556 = state_29554;(statearr_29556[(7)] = inst_29549);
return statearr_29556;
})();var statearr_29557_29779 = state_29554__$1;(statearr_29557_29779[(2)] = null);
(statearr_29557_29779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29555 === (3)))
{var inst_29552 = (state_29554[(2)]);var state_29554__$1 = state_29554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29554__$1,inst_29552);
} else
{if((state_val_29555 === (2)))
{var state_29554__$1 = state_29554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29554__$1,(4),onModel);
} else
{if((state_val_29555 === (1)))
{var state_29554__$1 = state_29554;var statearr_29558_29780 = state_29554__$1;(statearr_29558_29780[(2)] = null);
(statearr_29558_29780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___29778,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29778,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29562 = [null,null,null,null,null,null,null,null];(statearr_29562[(0)] = state_machine__6188__auto__);
(statearr_29562[(1)] = (1));
return statearr_29562;
});
var state_machine__6188__auto____1 = (function (state_29554){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29554);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29563){if((e29563 instanceof Object))
{var ex__6191__auto__ = e29563;var statearr_29564_29781 = state_29554;(statearr_29564_29781[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29782 = state_29554;
state_29554 = G__29782;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29554){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29778,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29565 = f__6203__auto__.call(null);(statearr_29565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29778);
return statearr_29565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29778,onView,onModel,onTick,mspf))
);
var c__6202__auto___29783 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29783,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29783,onView,onModel,onTick,mspf){
return (function (state_29584){var state_val_29585 = (state_29584[(1)]);if((state_val_29585 === (5)))
{var inst_29575 = (state_29584[(7)]);var inst_29568 = (state_29584[(8)]);var inst_29579 = (state_29584[(2)]);var tmp29586 = inst_29568;var inst_29568__$1 = tmp29586;var inst_29569 = inst_29575;var state_29584__$1 = (function (){var statearr_29587 = state_29584;(statearr_29587[(8)] = inst_29568__$1);
(statearr_29587[(9)] = inst_29569);
(statearr_29587[(10)] = inst_29579);
return statearr_29587;
})();var statearr_29588_29784 = state_29584__$1;(statearr_29588_29784[(2)] = null);
(statearr_29588_29784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29585 === (4)))
{var inst_29575 = (state_29584[(7)]);var inst_29569 = (state_29584[(9)]);var inst_29573 = (state_29584[(2)]);var inst_29574 = (new Date());var inst_29575__$1 = inst_29574.getTime();var inst_29576 = (inst_29575__$1 - inst_29569);var inst_29577 = (inst_29576 / (1000));var state_29584__$1 = (function (){var statearr_29589 = state_29584;(statearr_29589[(7)] = inst_29575__$1);
(statearr_29589[(11)] = inst_29573);
return statearr_29589;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29584__$1,(5),onTick,inst_29577);
} else
{if((state_val_29585 === (3)))
{var inst_29582 = (state_29584[(2)]);var state_29584__$1 = state_29584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29584__$1,inst_29582);
} else
{if((state_val_29585 === (2)))
{var inst_29568 = (state_29584[(8)]);var inst_29571 = cljs.core.async.timeout.call(null,inst_29568);var state_29584__$1 = state_29584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(4),inst_29571);
} else
{if((state_val_29585 === (1)))
{var inst_29566 = (new Date());var inst_29567 = inst_29566.getTime();var inst_29568 = mspf;var inst_29569 = inst_29567;var state_29584__$1 = (function (){var statearr_29590 = state_29584;(statearr_29590[(8)] = inst_29568);
(statearr_29590[(9)] = inst_29569);
return statearr_29590;
})();var statearr_29591_29785 = state_29584__$1;(statearr_29591_29785[(2)] = null);
(statearr_29591_29785[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___29783,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29783,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29595 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29595[(0)] = state_machine__6188__auto__);
(statearr_29595[(1)] = (1));
return statearr_29595;
});
var state_machine__6188__auto____1 = (function (state_29584){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29596){if((e29596 instanceof Object))
{var ex__6191__auto__ = e29596;var statearr_29597_29786 = state_29584;(statearr_29597_29786[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29787 = state_29584;
state_29584 = G__29787;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29584){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29783,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29598 = f__6203__auto__.call(null);(statearr_29598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29783);
return statearr_29598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29783,onView,onModel,onTick,mspf))
);
var c__6202__auto___29788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29788,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29788,onView,onModel,onTick,mspf){
return (function (state_29632){var state_val_29633 = (state_29632[(1)]);if((state_val_29633 === (5)))
{var inst_29630 = (state_29632[(2)]);var state_29632__$1 = state_29632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29632__$1,inst_29630);
} else
{if((state_val_29633 === (4)))
{var inst_29611 = (state_29632[(2)]);var inst_29618 = [(0),(0),(0)];var inst_29619 = [(10),(20)];var inst_29620 = [(100),(0),3.14];var inst_29621 = {"position":inst_29618,"size":inst_29619,"vel":inst_29620};var inst_29622 = [inst_29621];var inst_29623 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_29622};var inst_29624 = [(30),(10)];var inst_29625 = [(300),(300),(0)];var inst_29626 = [(100),(100),(0)];var inst_29627 = {"id":"x1","emit":inst_29623,"size":inst_29624,"pos":inst_29625,"vel":inst_29626};var inst_29628 = ["edit-particle",inst_29627];var state_29632__$1 = (function (){var statearr_29634 = state_29632;(statearr_29634[(7)] = inst_29611);
return statearr_29634;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29632__$1,(5),onView,inst_29628);
} else
{if((state_val_29633 === (3)))
{var inst_29608 = (state_29632[(2)]);var inst_29609 = cljs.core.async.timeout.call(null,(1100));var state_29632__$1 = (function (){var statearr_29635 = state_29632;(statearr_29635[(8)] = inst_29608);
return statearr_29635;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(4),inst_29609);
} else
{if((state_val_29633 === (2)))
{var inst_29601 = (state_29632[(2)]);var inst_29604 = [(300),(300),(0)];var inst_29605 = {"id":"x1","pos":inst_29604};var inst_29606 = ["edit-particle",inst_29605];var state_29632__$1 = (function (){var statearr_29636 = state_29632;(statearr_29636[(9)] = inst_29601);
return statearr_29636;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29632__$1,(3),onView,inst_29606);
} else
{if((state_val_29633 === (1)))
{var inst_29599 = cljs.core.async.timeout.call(null,(1000));var state_29632__$1 = state_29632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(2),inst_29599);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___29788,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29788,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29640 = [null,null,null,null,null,null,null,null,null,null];(statearr_29640[(0)] = state_machine__6188__auto__);
(statearr_29640[(1)] = (1));
return statearr_29640;
});
var state_machine__6188__auto____1 = (function (state_29632){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29632);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29641){if((e29641 instanceof Object))
{var ex__6191__auto__ = e29641;var statearr_29642_29789 = state_29632;(statearr_29642_29789[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29632);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29790 = state_29632;
state_29632 = G__29790;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29632){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29788,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29643 = f__6203__auto__.call(null);(statearr_29643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29788);
return statearr_29643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29788,onView,onModel,onTick,mspf))
);
var c__6202__auto___29791 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29791,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29791,onView,onModel,onTick,mspf){
return (function (state_29736){var state_val_29737 = (state_29736[(1)]);if((state_val_29737 === (7)))
{var inst_29731 = (state_29736[(2)]);var inst_29651 = inst_29731;var state_29736__$1 = (function (){var statearr_29738 = state_29736;(statearr_29738[(7)] = inst_29651);
return statearr_29738;
})();var statearr_29739_29792 = state_29736__$1;(statearr_29739_29792[(2)] = null);
(statearr_29739_29792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (20)))
{var inst_29651 = (state_29736[(7)]);var state_29736__$1 = state_29736;var statearr_29740_29793 = state_29736__$1;(statearr_29740_29793[(2)] = inst_29651);
(statearr_29740_29793[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (1)))
{var inst_29644 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738)];var inst_29645 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29646 = cljs.core.List.EMPTY;var inst_29647 = [inst_29646];var inst_29648 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29645,inst_29647);var inst_29649 = [(0),inst_29648];var inst_29650 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29644,inst_29649);var inst_29651 = inst_29650;var state_29736__$1 = (function (){var statearr_29741 = state_29736;(statearr_29741[(7)] = inst_29651);
return statearr_29741;
})();var statearr_29742_29794 = state_29736__$1;(statearr_29742_29794[(2)] = null);
(statearr_29742_29794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (4)))
{var inst_29657 = (state_29736[(8)]);var inst_29659 = (state_29736[(9)]);var inst_29657__$1 = (state_29736[(2)]);var inst_29658 = cljs.core.nth.call(null,inst_29657__$1,(0),null);var inst_29659__$1 = cljs.core.nth.call(null,inst_29657__$1,(1),null);var inst_29663 = cljs.core._EQ_.call(null,onTick,inst_29659__$1);var state_29736__$1 = (function (){var statearr_29743 = state_29736;(statearr_29743[(8)] = inst_29657__$1);
(statearr_29743[(10)] = inst_29658);
(statearr_29743[(9)] = inst_29659__$1);
return statearr_29743;
})();if(inst_29663)
{var statearr_29744_29795 = state_29736__$1;(statearr_29744_29795[(1)] = (5));
} else
{var statearr_29745_29796 = state_29736__$1;(statearr_29745_29796[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (15)))
{var inst_29651 = (state_29736[(7)]);var inst_29686 = (state_29736[(11)]);var inst_29703 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29704 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29703,null));var inst_29705 = cljs.core.update_in.call(null,inst_29651,inst_29704,cljs.core.conj,inst_29686);var state_29736__$1 = state_29736;var statearr_29746_29797 = state_29736__$1;(statearr_29746_29797[(2)] = inst_29705);
(statearr_29746_29797[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (21)))
{var inst_29659 = (state_29736[(9)]);var inst_29723 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29659));var inst_29724 = (new Error(inst_29723));var inst_29725 = (function(){throw inst_29724})();var state_29736__$1 = state_29736;var statearr_29747_29798 = state_29736__$1;(statearr_29747_29798[(2)] = inst_29725);
(statearr_29747_29798[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (13)))
{var inst_29718 = (state_29736[(2)]);var state_29736__$1 = state_29736;var statearr_29748_29799 = state_29736__$1;(statearr_29748_29799[(2)] = inst_29718);
(statearr_29748_29799[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (22)))
{var inst_29727 = (state_29736[(2)]);var state_29736__$1 = state_29736;var statearr_29749_29800 = state_29736__$1;(statearr_29749_29800[(2)] = inst_29727);
(statearr_29749_29800[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (6)))
{var inst_29659 = (state_29736[(9)]);var inst_29671 = cljs.core._EQ_.call(null,onView,inst_29659);var state_29736__$1 = state_29736;if(inst_29671)
{var statearr_29750_29801 = state_29736__$1;(statearr_29750_29801[(1)] = (8));
} else
{var statearr_29751_29802 = state_29736__$1;(statearr_29751_29802[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (17)))
{var inst_29651 = (state_29736[(7)]);var state_29736__$1 = state_29736;var statearr_29752_29803 = state_29736__$1;(statearr_29752_29803[(2)] = inst_29651);
(statearr_29752_29803[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (3)))
{var inst_29734 = (state_29736[(2)]);var state_29736__$1 = state_29736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29736__$1,inst_29734);
} else
{if((state_val_29737 === (12)))
{var inst_29673 = (state_29736[(12)]);var inst_29709 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_29673);var state_29736__$1 = state_29736;if(inst_29709)
{var statearr_29753_29804 = state_29736__$1;(statearr_29753_29804[(1)] = (17));
} else
{var statearr_29754_29805 = state_29736__$1;(statearr_29754_29805[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (2)))
{var inst_29654 = [onView,onTick];var inst_29655 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29654,null));var state_29736__$1 = state_29736;return cljs.core.async.ioc_alts_BANG_.call(null,state_29736__$1,(4),inst_29655);
} else
{if((state_val_29737 === (19)))
{var inst_29716 = (state_29736[(2)]);var state_29736__$1 = state_29736;var statearr_29755_29806 = state_29736__$1;(statearr_29755_29806[(2)] = inst_29716);
(statearr_29755_29806[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (11)))
{var inst_29657 = (state_29736[(8)]);var inst_29658 = (state_29736[(10)]);var inst_29674 = (state_29736[(13)]);var inst_29685 = (state_29736[(14)]);var inst_29651 = (state_29736[(7)]);var inst_29659 = (state_29736[(9)]);var inst_29673 = (state_29736[(12)]);var inst_29680 = (function (){var ctx = inst_29651;var pred__29675 = cljs.core._EQ_;var expr__29661 = inst_29659;var partInfo = inst_29674;var v = inst_29658;var params = inst_29674;var pred__29660 = cljs.core._EQ_;var vec__29653 = inst_29657;var ch = inst_29659;var event = inst_29673;var expr__29676 = inst_29673;return ((function (ctx,pred__29675,expr__29661,partInfo,v,params,pred__29660,vec__29653,ch,event,expr__29676,inst_29657,inst_29658,inst_29674,inst_29685,inst_29651,inst_29659,inst_29673,state_val_29737,c__6202__auto___29791,onView,onModel,onTick,mspf){
return (function (p1__29291_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29291_SHARP_),partInfo.id);
});
;})(ctx,pred__29675,expr__29661,partInfo,v,params,pred__29660,vec__29653,ch,event,expr__29676,inst_29657,inst_29658,inst_29674,inst_29685,inst_29651,inst_29659,inst_29673,state_val_29737,c__6202__auto___29791,onView,onModel,onTick,mspf))
})();var inst_29681 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29682 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29681,null));var inst_29683 = cljs.core.get_in.call(null,inst_29651,inst_29682);var inst_29684 = cljs.core.filter.call(null,inst_29680,inst_29683);var inst_29685__$1 = cljs.core.first.call(null,inst_29684);var inst_29686 = tool.particle.jsobj__GT_particle.call(null,inst_29674);var inst_29687 = cljs.core.some_QMARK_.call(null,inst_29685__$1);var state_29736__$1 = (function (){var statearr_29756 = state_29736;(statearr_29756[(14)] = inst_29685__$1);
(statearr_29756[(11)] = inst_29686);
return statearr_29756;
})();if(inst_29687)
{var statearr_29757_29807 = state_29736__$1;(statearr_29757_29807[(1)] = (14));
} else
{var statearr_29758_29808 = state_29736__$1;(statearr_29758_29808[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (9)))
{var inst_29659 = (state_29736[(9)]);var inst_29720 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_29659);var state_29736__$1 = state_29736;if(inst_29720)
{var statearr_29759_29809 = state_29736__$1;(statearr_29759_29809[(1)] = (20));
} else
{var statearr_29760_29810 = state_29736__$1;(statearr_29760_29810[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (5)))
{var inst_29658 = (state_29736[(10)]);var inst_29651 = (state_29736[(7)]);var inst_29665 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_29666 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29665,null));var inst_29667 = cljs.core.partial.call(null,tool.particle.update,inst_29658);var inst_29668 = cljs.core.update_in.call(null,inst_29651,inst_29666,inst_29667);var inst_29669 = app.particle.main.draw2D.call(null,inst_29668);var state_29736__$1 = state_29736;var statearr_29761_29811 = state_29736__$1;(statearr_29761_29811[(2)] = inst_29669);
(statearr_29761_29811[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (14)))
{var inst_29685 = (state_29736[(14)]);var inst_29651 = (state_29736[(7)]);var inst_29686 = (state_29736[(11)]);var inst_29689 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_29690 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_29689,null));var inst_29691 = [inst_29685];var inst_29692 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"emit-times","emit-times",793706865)];var inst_29693 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(inst_29685);var inst_29694 = new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(inst_29685);var inst_29695 = [inst_29693,inst_29694];var inst_29696 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29692,inst_29695);var inst_29697 = cljs.core.merge.call(null,inst_29686,inst_29696);var inst_29698 = [inst_29697];var inst_29699 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29691,inst_29698);var inst_29700 = cljs.core.partial.call(null,cljs.core.replace,inst_29699);var inst_29701 = cljs.core.update_in.call(null,inst_29651,inst_29690,inst_29700);var state_29736__$1 = state_29736;var statearr_29762_29812 = state_29736__$1;(statearr_29762_29812[(2)] = inst_29701);
(statearr_29762_29812[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (16)))
{var inst_29707 = (state_29736[(2)]);var state_29736__$1 = state_29736;var statearr_29763_29813 = state_29736__$1;(statearr_29763_29813[(2)] = inst_29707);
(statearr_29763_29813[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (10)))
{var inst_29729 = (state_29736[(2)]);var state_29736__$1 = state_29736;var statearr_29764_29814 = state_29736__$1;(statearr_29764_29814[(2)] = inst_29729);
(statearr_29764_29814[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (18)))
{var inst_29673 = (state_29736[(12)]);var inst_29712 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29673));var inst_29713 = (new Error(inst_29712));var inst_29714 = (function(){throw inst_29713})();var state_29736__$1 = state_29736;var statearr_29765_29815 = state_29736__$1;(statearr_29765_29815[(2)] = inst_29714);
(statearr_29765_29815[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29737 === (8)))
{var inst_29658 = (state_29736[(10)]);var inst_29673 = (state_29736[(12)]);var inst_29673__$1 = (inst_29658[(0)]);var inst_29674 = (inst_29658[(1)]);var inst_29678 = cljs.core._EQ_.call(null,"edit-particle",inst_29673__$1);var state_29736__$1 = (function (){var statearr_29766 = state_29736;(statearr_29766[(13)] = inst_29674);
(statearr_29766[(12)] = inst_29673__$1);
return statearr_29766;
})();if(inst_29678)
{var statearr_29767_29816 = state_29736__$1;(statearr_29767_29816[(1)] = (11));
} else
{var statearr_29768_29817 = state_29736__$1;(statearr_29768_29817[(1)] = (12));
}
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
}
}
});})(c__6202__auto___29791,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___29791,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29772[(0)] = state_machine__6188__auto__);
(statearr_29772[(1)] = (1));
return statearr_29772;
});
var state_machine__6188__auto____1 = (function (state_29736){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29736);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29773){if((e29773 instanceof Object))
{var ex__6191__auto__ = e29773;var statearr_29774_29818 = state_29736;(statearr_29774_29818[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29819 = state_29736;
state_29736 = G__29819;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29736){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29791,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_29775 = f__6203__auto__.call(null);(statearr_29775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29791);
return statearr_29775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29791,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
