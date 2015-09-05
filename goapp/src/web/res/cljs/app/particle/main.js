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
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62604){var state_val_62605 = (state_62604[(1)]);if((state_val_62605 === (2)))
{var inst_62602 = (state_62604[(2)]);var state_62604__$1 = state_62604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62604__$1,inst_62602);
} else
{if((state_val_62605 === (1)))
{var state_62604__$1 = state_62604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62604__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62609 = [null,null,null,null,null,null,null];(statearr_62609[(0)] = state_machine__6188__auto__);
(statearr_62609[(1)] = (1));
return statearr_62609;
});
var state_machine__6188__auto____1 = (function (state_62604){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62610){if((e62610 instanceof Object))
{var ex__6191__auto__ = e62610;var statearr_62611_62834 = state_62604;(statearr_62611_62834[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62835 = state_62604;
state_62604 = G__62835;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62604){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62612 = f__6203__auto__.call(null);(statearr_62612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_62612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62836 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62836,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62836,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62626){var state_val_62627 = (state_62626[(1)]);if((state_val_62627 === (4)))
{var inst_62616 = (state_62626[(2)]);var inst_62617 = cljs.core.nth.call(null,inst_62616,(0),null);var inst_62618 = cljs.core.nth.call(null,inst_62616,(1),null);var inst_62619 = cljs.core.nth.call(null,inst_62616,(2),null);var inst_62620 = [inst_62617,inst_62618,inst_62619];var inst_62621 = common.onModel.onNext(inst_62620);var state_62626__$1 = (function (){var statearr_62628 = state_62626;(statearr_62628[(7)] = inst_62621);
return statearr_62628;
})();var statearr_62629_62837 = state_62626__$1;(statearr_62629_62837[(2)] = null);
(statearr_62629_62837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62627 === (3)))
{var inst_62624 = (state_62626[(2)]);var state_62626__$1 = state_62626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62626__$1,inst_62624);
} else
{if((state_val_62627 === (2)))
{var state_62626__$1 = state_62626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62626__$1,(4),onModel);
} else
{if((state_val_62627 === (1)))
{var state_62626__$1 = state_62626;var statearr_62630_62838 = state_62626__$1;(statearr_62630_62838[(2)] = null);
(statearr_62630_62838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___62836,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62836,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62634 = [null,null,null,null,null,null,null,null];(statearr_62634[(0)] = state_machine__6188__auto__);
(statearr_62634[(1)] = (1));
return statearr_62634;
});
var state_machine__6188__auto____1 = (function (state_62626){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62635){if((e62635 instanceof Object))
{var ex__6191__auto__ = e62635;var statearr_62636_62839 = state_62626;(statearr_62636_62839[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62840 = state_62626;
state_62626 = G__62840;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62626){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62836,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62637 = f__6203__auto__.call(null);(statearr_62637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62836);
return statearr_62637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62836,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62841 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62841,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62841,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62650){var state_val_62651 = (state_62650[(1)]);if((state_val_62651 === (4)))
{var inst_62641 = (state_62650[(2)]);var inst_62642 = cljs.core.nth.call(null,inst_62641,(0),null);var inst_62643 = cljs.core.nth.call(null,inst_62641,(1),null);var inst_62644 = [inst_62642,inst_62643];var inst_62645 = common.onModelEvent.onNext(inst_62644);var state_62650__$1 = (function (){var statearr_62652 = state_62650;(statearr_62652[(7)] = inst_62645);
return statearr_62652;
})();var statearr_62653_62842 = state_62650__$1;(statearr_62653_62842[(2)] = null);
(statearr_62653_62842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62651 === (3)))
{var inst_62648 = (state_62650[(2)]);var state_62650__$1 = state_62650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62650__$1,inst_62648);
} else
{if((state_val_62651 === (2)))
{var state_62650__$1 = state_62650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62650__$1,(4),onModelEvent);
} else
{if((state_val_62651 === (1)))
{var state_62650__$1 = state_62650;var statearr_62654_62843 = state_62650__$1;(statearr_62654_62843[(2)] = null);
(statearr_62654_62843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___62841,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62841,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62658 = [null,null,null,null,null,null,null,null];(statearr_62658[(0)] = state_machine__6188__auto__);
(statearr_62658[(1)] = (1));
return statearr_62658;
});
var state_machine__6188__auto____1 = (function (state_62650){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62650);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62659){if((e62659 instanceof Object))
{var ex__6191__auto__ = e62659;var statearr_62660_62844 = state_62650;(statearr_62660_62844[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62650);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62845 = state_62650;
state_62650 = G__62845;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62650){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62841,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62661 = f__6203__auto__.call(null);(statearr_62661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62841);
return statearr_62661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62841,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62846,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62846,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62680){var state_val_62681 = (state_62680[(1)]);if((state_val_62681 === (5)))
{var inst_62664 = (state_62680[(7)]);var inst_62671 = (state_62680[(8)]);var inst_62675 = (state_62680[(2)]);var tmp62682 = inst_62664;var inst_62664__$1 = tmp62682;var inst_62665 = inst_62671;var state_62680__$1 = (function (){var statearr_62683 = state_62680;(statearr_62683[(9)] = inst_62665);
(statearr_62683[(7)] = inst_62664__$1);
(statearr_62683[(10)] = inst_62675);
return statearr_62683;
})();var statearr_62684_62847 = state_62680__$1;(statearr_62684_62847[(2)] = null);
(statearr_62684_62847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62681 === (4)))
{var inst_62665 = (state_62680[(9)]);var inst_62671 = (state_62680[(8)]);var inst_62669 = (state_62680[(2)]);var inst_62670 = (new Date());var inst_62671__$1 = inst_62670.getTime();var inst_62672 = (inst_62671__$1 - inst_62665);var inst_62673 = (inst_62672 / (1000));var state_62680__$1 = (function (){var statearr_62685 = state_62680;(statearr_62685[(8)] = inst_62671__$1);
(statearr_62685[(11)] = inst_62669);
return statearr_62685;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62680__$1,(5),onTick,inst_62673);
} else
{if((state_val_62681 === (3)))
{var inst_62678 = (state_62680[(2)]);var state_62680__$1 = state_62680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62680__$1,inst_62678);
} else
{if((state_val_62681 === (2)))
{var inst_62664 = (state_62680[(7)]);var inst_62667 = cljs.core.async.timeout.call(null,inst_62664);var state_62680__$1 = state_62680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62680__$1,(4),inst_62667);
} else
{if((state_val_62681 === (1)))
{var inst_62662 = (new Date());var inst_62663 = inst_62662.getTime();var inst_62664 = mspf;var inst_62665 = inst_62663;var state_62680__$1 = (function (){var statearr_62686 = state_62680;(statearr_62686[(9)] = inst_62665);
(statearr_62686[(7)] = inst_62664);
return statearr_62686;
})();var statearr_62687_62848 = state_62680__$1;(statearr_62687_62848[(2)] = null);
(statearr_62687_62848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___62846,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62846,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62691 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62691[(0)] = state_machine__6188__auto__);
(statearr_62691[(1)] = (1));
return statearr_62691;
});
var state_machine__6188__auto____1 = (function (state_62680){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62680);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62692){if((e62692 instanceof Object))
{var ex__6191__auto__ = e62692;var statearr_62693_62849 = state_62680;(statearr_62693_62849[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62680);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62850 = state_62680;
state_62680 = G__62850;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62680){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62846,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62694 = f__6203__auto__.call(null);(statearr_62694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62846);
return statearr_62694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62846,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62851 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62748){var state_val_62749 = (state_62748[(1)]);if((state_val_62749 === (7)))
{var inst_62743 = (state_62748[(2)]);var inst_62704 = inst_62743;var state_62748__$1 = (function (){var statearr_62750 = state_62748;(statearr_62750[(7)] = inst_62704);
return statearr_62750;
})();var statearr_62751_62852 = state_62748__$1;(statearr_62751_62852[(2)] = null);
(statearr_62751_62852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (1)))
{var inst_62695 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_62696 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_62697 = cljs.core.List.EMPTY;var inst_62698 = [inst_62697];var inst_62699 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_62696,inst_62698);var inst_62700 = [(0),(0)];var inst_62701 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62700,null));var inst_62702 = [(0),inst_62699,inst_62701,onModel];var inst_62703 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_62695,inst_62702);var inst_62704 = inst_62703;var state_62748__$1 = (function (){var statearr_62752 = state_62748;(statearr_62752[(7)] = inst_62704);
return statearr_62752;
})();var statearr_62753_62853 = state_62748__$1;(statearr_62753_62853[(2)] = null);
(statearr_62753_62853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (4)))
{var inst_62712 = (state_62748[(8)]);var inst_62710 = (state_62748[(9)]);var inst_62710__$1 = (state_62748[(2)]);var inst_62711 = cljs.core.nth.call(null,inst_62710__$1,(0),null);var inst_62712__$1 = cljs.core.nth.call(null,inst_62710__$1,(1),null);var inst_62716 = cljs.core._EQ_.call(null,onTick,inst_62712__$1);var state_62748__$1 = (function (){var statearr_62754 = state_62748;(statearr_62754[(8)] = inst_62712__$1);
(statearr_62754[(9)] = inst_62710__$1);
(statearr_62754[(10)] = inst_62711);
return statearr_62754;
})();if(inst_62716)
{var statearr_62755_62854 = state_62748__$1;(statearr_62755_62854[(1)] = (5));
} else
{var statearr_62756_62855 = state_62748__$1;(statearr_62756_62855[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (6)))
{var inst_62712 = (state_62748[(8)]);var inst_62734 = cljs.core._EQ_.call(null,onView,inst_62712);var state_62748__$1 = state_62748;if(inst_62734)
{var statearr_62757_62856 = state_62748__$1;(statearr_62757_62856[(1)] = (8));
} else
{var statearr_62758_62857 = state_62748__$1;(statearr_62758_62857[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (3)))
{var inst_62746 = (state_62748[(2)]);var state_62748__$1 = state_62748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62748__$1,inst_62746);
} else
{if((state_val_62749 === (2)))
{var inst_62707 = [onView,onTick];var inst_62708 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62707,null));var state_62748__$1 = state_62748;return cljs.core.async.ioc_alts_BANG_.call(null,state_62748__$1,(4),inst_62708);
} else
{if((state_val_62749 === (9)))
{var inst_62704 = (state_62748[(7)]);var state_62748__$1 = state_62748;var statearr_62759_62858 = state_62748__$1;(statearr_62759_62858[(2)] = inst_62704);
(statearr_62759_62858[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (5)))
{var inst_62712 = (state_62748[(8)]);var inst_62710 = (state_62748[(9)]);var inst_62711 = (state_62748[(10)]);var inst_62704 = (state_62748[(7)]);var inst_62725 = cljs.core.async.chan.call(null,(1));var inst_62726 = (function (){var c__6202__auto____$1 = inst_62725;var expr__62714 = inst_62712;var pred__62713 = cljs.core._EQ_;var ch = inst_62712;var v = inst_62711;var vec__62706 = inst_62710;var ctx = inst_62704;return ((function (c__6202__auto____$1,expr__62714,pred__62713,ch,v,vec__62706,ctx,inst_62712,inst_62710,inst_62711,inst_62704,inst_62725,state_val_62749,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__62714,pred__62713,ch,v,vec__62706,ctx,inst_62712,inst_62710,inst_62711,inst_62704,inst_62725,state_val_62749,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62723){var state_val_62724 = (state_62723[(1)]);if((state_val_62724 === (2)))
{var inst_62721 = (state_62723[(2)]);var state_62723__$1 = state_62723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62723__$1,inst_62721);
} else
{if((state_val_62724 === (1)))
{var inst_62718 = ["tick",v];var inst_62719 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62718,null));var state_62723__$1 = state_62723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62723__$1,(2),onModelEvent,inst_62719);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__62714,pred__62713,ch,v,vec__62706,ctx,inst_62712,inst_62710,inst_62711,inst_62704,inst_62725,state_val_62749,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__62714,pred__62713,ch,v,vec__62706,ctx,inst_62712,inst_62710,inst_62711,inst_62704,inst_62725,state_val_62749,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62763 = [null,null,null,null,null,null,null];(statearr_62763[(0)] = state_machine__6188__auto__);
(statearr_62763[(1)] = (1));
return statearr_62763;
});
var state_machine__6188__auto____1 = (function (state_62723){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62764){if((e62764 instanceof Object))
{var ex__6191__auto__ = e62764;var statearr_62765_62859 = state_62723;(statearr_62765_62859[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62860 = state_62723;
state_62723 = G__62860;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62723){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__62714,pred__62713,ch,v,vec__62706,ctx,inst_62712,inst_62710,inst_62711,inst_62704,inst_62725,state_val_62749,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62766 = f__6203__auto__.call(null);(statearr_62766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_62766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__62714,pred__62713,ch,v,vec__62706,ctx,inst_62712,inst_62710,inst_62711,inst_62704,inst_62725,state_val_62749,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf))
})();var inst_62727 = cljs.core.async.impl.dispatch.run.call(null,inst_62726);var inst_62728 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_62729 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_62728,null));var inst_62730 = cljs.core.partial.call(null,tool.particle.update,inst_62711);var inst_62731 = cljs.core.update_in.call(null,inst_62704,inst_62729,inst_62730);var inst_62732 = app.particle.main.draw.call(null,inst_62731);var state_62748__$1 = (function (){var statearr_62767 = state_62748;(statearr_62767[(11)] = inst_62727);
return statearr_62767;
})();var statearr_62768_62861 = state_62748__$1;(statearr_62768_62861[(2)] = inst_62732);
(statearr_62768_62861[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (10)))
{var inst_62741 = (state_62748[(2)]);var state_62748__$1 = state_62748;var statearr_62769_62862 = state_62748__$1;(statearr_62769_62862[(2)] = inst_62741);
(statearr_62769_62862[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62749 === (8)))
{var inst_62711 = (state_62748[(10)]);var inst_62704 = (state_62748[(7)]);var inst_62736 = (inst_62711[(0)]);var inst_62737 = (inst_62711[(1)]);var inst_62738 = app.particle.abstract$.onViewCommand.call(null,inst_62736,inst_62737,inst_62704);var state_62748__$1 = state_62748;var statearr_62770_62863 = state_62748__$1;(statearr_62770_62863[(2)] = inst_62738);
(statearr_62770_62863[(1)] = (10));
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
});})(c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62774 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62774[(0)] = state_machine__6188__auto__);
(statearr_62774[(1)] = (1));
return statearr_62774;
});
var state_machine__6188__auto____1 = (function (state_62748){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62748);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62775){if((e62775 instanceof Object))
{var ex__6191__auto__ = e62775;var statearr_62776_62864 = state_62748;(statearr_62776_62864[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62865 = state_62748;
state_62748 = G__62865;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62748){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62777 = f__6203__auto__.call(null);(statearr_62777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62851);
return statearr_62777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62851,onView,onModel,onModelEvent,onTick,mspf))
);
var c__6202__auto___62866 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___62866,onView,onModel,onModelEvent,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___62866,onView,onModel,onModelEvent,onTick,mspf){
return (function (state_62822){var state_val_62823 = (state_62822[(1)]);if((state_val_62823 === (5)))
{var inst_62820 = (state_62822[(2)]);var state_62822__$1 = state_62822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62822__$1,inst_62820);
} else
{if((state_val_62823 === (4)))
{var inst_62790 = (state_62822[(2)]);var inst_62797 = [(0),(0),(0)];var inst_62798 = [(1),(0),(1),(1)];var inst_62799 = [(10),(20)];var inst_62800 = [(0),(0),(0)];var inst_62801 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_62802 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_62803 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_62804 = [inst_62801,inst_62802,inst_62803];var inst_62805 = {"position":inst_62797,"color":inst_62798,"size":inst_62799,"vel":inst_62800,"formulaList":inst_62804};var inst_62806 = [inst_62805];var inst_62807 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_62806};var inst_62808 = [(0),(0),(1),(1)];var inst_62809 = [(30),(10)];var inst_62810 = [(10),(10),(0)];var inst_62811 = [(0),(0),(0)];var inst_62812 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_62813 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_62814 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_62815 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_62816 = [inst_62812,inst_62813,inst_62814,inst_62815];var inst_62817 = {"id":"x1","emit":inst_62807,"color":inst_62808,"size":inst_62809,"pos":inst_62810,"vel":inst_62811,"formulaList":inst_62816};var inst_62818 = ["edit-particle",inst_62817];var state_62822__$1 = (function (){var statearr_62824 = state_62822;(statearr_62824[(7)] = inst_62790);
return statearr_62824;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62822__$1,(5),onView,inst_62818);
} else
{if((state_val_62823 === (3)))
{var inst_62787 = (state_62822[(2)]);var inst_62788 = cljs.core.async.timeout.call(null,(1100));var state_62822__$1 = (function (){var statearr_62825 = state_62822;(statearr_62825[(8)] = inst_62787);
return statearr_62825;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62822__$1,(4),inst_62788);
} else
{if((state_val_62823 === (2)))
{var inst_62780 = (state_62822[(2)]);var inst_62783 = [(10),(10),(0)];var inst_62784 = {"id":"x1","pos":inst_62783};var inst_62785 = ["edit-particle",inst_62784];var state_62822__$1 = (function (){var statearr_62826 = state_62822;(statearr_62826[(9)] = inst_62780);
return statearr_62826;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62822__$1,(3),onView,inst_62785);
} else
{if((state_val_62823 === (1)))
{var inst_62778 = cljs.core.async.timeout.call(null,(1000));var state_62822__$1 = state_62822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62822__$1,(2),inst_62778);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___62866,onView,onModel,onModelEvent,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___62866,onView,onModel,onModelEvent,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_62830 = [null,null,null,null,null,null,null,null,null,null];(statearr_62830[(0)] = state_machine__6188__auto__);
(statearr_62830[(1)] = (1));
return statearr_62830;
});
var state_machine__6188__auto____1 = (function (state_62822){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_62822);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e62831){if((e62831 instanceof Object))
{var ex__6191__auto__ = e62831;var statearr_62832_62867 = state_62822;(statearr_62832_62867[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62822);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e62831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62868 = state_62822;
state_62822 = G__62868;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_62822){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_62822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___62866,onView,onModel,onModelEvent,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_62833 = f__6203__auto__.call(null);(statearr_62833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___62866);
return statearr_62833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___62866,onView,onModel,onModelEvent,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
