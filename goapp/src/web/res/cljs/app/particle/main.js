// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('app.particle.draw');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('app.particle.abstract$');
goog.require('tool.particle');
goog.require('app.particle.impl');
goog.require('gl.util');
goog.require('app.particle.abstract$');
goog.require('app.particle.draw');
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj76604 = {};return obj76604;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76608){var state_val_76609 = (state_76608[(1)]);if((state_val_76609 === (2)))
{var inst_76606 = (state_76608[(2)]);var state_76608__$1 = state_76608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76608__$1,inst_76606);
} else
{if((state_val_76609 === (1)))
{var state_76608__$1 = state_76608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76608__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76613 = [null,null,null,null,null,null,null];(statearr_76613[(0)] = state_machine__6188__auto__);
(statearr_76613[(1)] = (1));
return statearr_76613;
});
var state_machine__6188__auto____1 = (function (state_76608){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76608);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76614){if((e76614 instanceof Object))
{var ex__6191__auto__ = e76614;var statearr_76615_76838 = state_76608;(statearr_76615_76838[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76839 = state_76608;
state_76608 = G__76839;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76608){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76616 = f__6203__auto__.call(null);(statearr_76616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_76616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76840 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76840,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76840,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76630){var state_val_76631 = (state_76630[(1)]);if((state_val_76631 === (4)))
{var inst_76620 = (state_76630[(2)]);var inst_76621 = cljs.core.nth.call(null,inst_76620,(0),null);var inst_76622 = cljs.core.nth.call(null,inst_76620,(1),null);var inst_76623 = cljs.core.nth.call(null,inst_76620,(2),null);var inst_76624 = [inst_76621,inst_76622,inst_76623];var inst_76625 = common.onModel.onNext(inst_76624);var state_76630__$1 = (function (){var statearr_76632 = state_76630;(statearr_76632[(7)] = inst_76625);
return statearr_76632;
})();var statearr_76633_76841 = state_76630__$1;(statearr_76633_76841[(2)] = null);
(statearr_76633_76841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76631 === (3)))
{var inst_76628 = (state_76630[(2)]);var state_76630__$1 = state_76630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76630__$1,inst_76628);
} else
{if((state_val_76631 === (2)))
{var state_76630__$1 = state_76630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76630__$1,(4),onModel);
} else
{if((state_val_76631 === (1)))
{var state_76630__$1 = state_76630;var statearr_76634_76842 = state_76630__$1;(statearr_76634_76842[(2)] = null);
(statearr_76634_76842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___76840,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76840,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76638 = [null,null,null,null,null,null,null,null];(statearr_76638[(0)] = state_machine__6188__auto__);
(statearr_76638[(1)] = (1));
return statearr_76638;
});
var state_machine__6188__auto____1 = (function (state_76630){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76639){if((e76639 instanceof Object))
{var ex__6191__auto__ = e76639;var statearr_76640_76843 = state_76630;(statearr_76640_76843[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76844 = state_76630;
state_76630 = G__76844;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76630){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76840,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76641 = f__6203__auto__.call(null);(statearr_76641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76840);
return statearr_76641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76840,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76845 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76654){var state_val_76655 = (state_76654[(1)]);if((state_val_76655 === (4)))
{var inst_76645 = (state_76654[(2)]);var inst_76646 = cljs.core.nth.call(null,inst_76645,(0),null);var inst_76647 = cljs.core.nth.call(null,inst_76645,(1),null);var inst_76648 = [inst_76646,inst_76647];var inst_76649 = common.onModelEvent.onNext(inst_76648);var state_76654__$1 = (function (){var statearr_76656 = state_76654;(statearr_76656[(7)] = inst_76649);
return statearr_76656;
})();var statearr_76657_76846 = state_76654__$1;(statearr_76657_76846[(2)] = null);
(statearr_76657_76846[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76655 === (3)))
{var inst_76652 = (state_76654[(2)]);var state_76654__$1 = state_76654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76654__$1,inst_76652);
} else
{if((state_val_76655 === (2)))
{var state_76654__$1 = state_76654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76654__$1,(4),onModelEvent);
} else
{if((state_val_76655 === (1)))
{var state_76654__$1 = state_76654;var statearr_76658_76847 = state_76654__$1;(statearr_76658_76847[(2)] = null);
(statearr_76658_76847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___76845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76662 = [null,null,null,null,null,null,null,null];(statearr_76662[(0)] = state_machine__6188__auto__);
(statearr_76662[(1)] = (1));
return statearr_76662;
});
var state_machine__6188__auto____1 = (function (state_76654){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76663){if((e76663 instanceof Object))
{var ex__6191__auto__ = e76663;var statearr_76664_76848 = state_76654;(statearr_76664_76848[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76849 = state_76654;
state_76654 = G__76849;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76654){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76665 = f__6203__auto__.call(null);(statearr_76665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76845);
return statearr_76665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76845,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76850 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76684){var state_val_76685 = (state_76684[(1)]);if((state_val_76685 === (5)))
{var inst_76668 = (state_76684[(7)]);var inst_76675 = (state_76684[(8)]);var inst_76679 = (state_76684[(2)]);var tmp76686 = inst_76668;var inst_76668__$1 = tmp76686;var inst_76669 = inst_76675;var state_76684__$1 = (function (){var statearr_76687 = state_76684;(statearr_76687[(7)] = inst_76668__$1);
(statearr_76687[(9)] = inst_76669);
(statearr_76687[(10)] = inst_76679);
return statearr_76687;
})();var statearr_76688_76851 = state_76684__$1;(statearr_76688_76851[(2)] = null);
(statearr_76688_76851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76685 === (4)))
{var inst_76669 = (state_76684[(9)]);var inst_76675 = (state_76684[(8)]);var inst_76673 = (state_76684[(2)]);var inst_76674 = (new Date());var inst_76675__$1 = inst_76674.getTime();var inst_76676 = (inst_76675__$1 - inst_76669);var inst_76677 = (inst_76676 / (1000));var state_76684__$1 = (function (){var statearr_76689 = state_76684;(statearr_76689[(11)] = inst_76673);
(statearr_76689[(8)] = inst_76675__$1);
return statearr_76689;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76684__$1,(5),onTick,inst_76677);
} else
{if((state_val_76685 === (3)))
{var inst_76682 = (state_76684[(2)]);var state_76684__$1 = state_76684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76684__$1,inst_76682);
} else
{if((state_val_76685 === (2)))
{var inst_76668 = (state_76684[(7)]);var inst_76671 = cljs.core.async.timeout.call(null,inst_76668);var state_76684__$1 = state_76684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76684__$1,(4),inst_76671);
} else
{if((state_val_76685 === (1)))
{var inst_76666 = (new Date());var inst_76667 = inst_76666.getTime();var inst_76668 = mspf;var inst_76669 = inst_76667;var state_76684__$1 = (function (){var statearr_76690 = state_76684;(statearr_76690[(7)] = inst_76668);
(statearr_76690[(9)] = inst_76669);
return statearr_76690;
})();var statearr_76691_76852 = state_76684__$1;(statearr_76691_76852[(2)] = null);
(statearr_76691_76852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___76850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76695 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_76695[(0)] = state_machine__6188__auto__);
(statearr_76695[(1)] = (1));
return statearr_76695;
});
var state_machine__6188__auto____1 = (function (state_76684){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76696){if((e76696 instanceof Object))
{var ex__6191__auto__ = e76696;var statearr_76697_76853 = state_76684;(statearr_76697_76853[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76696;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76854 = state_76684;
state_76684 = G__76854;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76684){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76698 = f__6203__auto__.call(null);(statearr_76698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76850);
return statearr_76698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76850,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76855 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76752){var state_val_76753 = (state_76752[(1)]);if((state_val_76753 === (7)))
{var inst_76747 = (state_76752[(2)]);var inst_76708 = inst_76747;var state_76752__$1 = (function (){var statearr_76754 = state_76752;(statearr_76754[(7)] = inst_76708);
return statearr_76754;
})();var statearr_76755_76856 = state_76752__$1;(statearr_76755_76856[(2)] = null);
(statearr_76755_76856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (1)))
{var inst_76699 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_76700 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_76701 = cljs.core.List.EMPTY;var inst_76702 = [inst_76701];var inst_76703 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76700,inst_76702);var inst_76704 = [(0),(0)];var inst_76705 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76704,null));var inst_76706 = [(0),inst_76703,inst_76705,onModel,gl__$1];var inst_76707 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76699,inst_76706);var inst_76708 = inst_76707;var state_76752__$1 = (function (){var statearr_76756 = state_76752;(statearr_76756[(7)] = inst_76708);
return statearr_76756;
})();var statearr_76757_76857 = state_76752__$1;(statearr_76757_76857[(2)] = null);
(statearr_76757_76857[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (4)))
{var inst_76716 = (state_76752[(8)]);var inst_76714 = (state_76752[(9)]);var inst_76714__$1 = (state_76752[(2)]);var inst_76715 = cljs.core.nth.call(null,inst_76714__$1,(0),null);var inst_76716__$1 = cljs.core.nth.call(null,inst_76714__$1,(1),null);var inst_76720 = cljs.core._EQ_.call(null,onTick,inst_76716__$1);var state_76752__$1 = (function (){var statearr_76758 = state_76752;(statearr_76758[(10)] = inst_76715);
(statearr_76758[(8)] = inst_76716__$1);
(statearr_76758[(9)] = inst_76714__$1);
return statearr_76758;
})();if(inst_76720)
{var statearr_76759_76858 = state_76752__$1;(statearr_76759_76858[(1)] = (5));
} else
{var statearr_76760_76859 = state_76752__$1;(statearr_76760_76859[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (6)))
{var inst_76716 = (state_76752[(8)]);var inst_76738 = cljs.core._EQ_.call(null,onView,inst_76716);var state_76752__$1 = state_76752;if(inst_76738)
{var statearr_76761_76860 = state_76752__$1;(statearr_76761_76860[(1)] = (8));
} else
{var statearr_76762_76861 = state_76752__$1;(statearr_76762_76861[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (3)))
{var inst_76750 = (state_76752[(2)]);var state_76752__$1 = state_76752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76752__$1,inst_76750);
} else
{if((state_val_76753 === (2)))
{var inst_76711 = [onView,onTick];var inst_76712 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76711,null));var state_76752__$1 = state_76752;return cljs.core.async.ioc_alts_BANG_.call(null,state_76752__$1,(4),inst_76712);
} else
{if((state_val_76753 === (9)))
{var inst_76708 = (state_76752[(7)]);var state_76752__$1 = state_76752;var statearr_76763_76862 = state_76752__$1;(statearr_76763_76862[(2)] = inst_76708);
(statearr_76763_76862[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (5)))
{var inst_76708 = (state_76752[(7)]);var inst_76715 = (state_76752[(10)]);var inst_76716 = (state_76752[(8)]);var inst_76714 = (state_76752[(9)]);var inst_76729 = cljs.core.async.chan.call(null,(1));var inst_76730 = (function (){var c__6202__auto____$1 = inst_76729;var expr__76718 = inst_76716;var pred__76717 = cljs.core._EQ_;var ch = inst_76716;var v = inst_76715;var vec__76710 = inst_76714;var ctx = inst_76708;return ((function (c__6202__auto____$1,expr__76718,pred__76717,ch,v,vec__76710,ctx,inst_76708,inst_76715,inst_76716,inst_76714,inst_76729,state_val_76753,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__76718,pred__76717,ch,v,vec__76710,ctx,inst_76708,inst_76715,inst_76716,inst_76714,inst_76729,state_val_76753,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76727){var state_val_76728 = (state_76727[(1)]);if((state_val_76728 === (2)))
{var inst_76725 = (state_76727[(2)]);var state_76727__$1 = state_76727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76727__$1,inst_76725);
} else
{if((state_val_76728 === (1)))
{var inst_76722 = ["tick",v];var inst_76723 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76722,null));var state_76727__$1 = state_76727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76727__$1,(2),onModelEvent,inst_76723);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__76718,pred__76717,ch,v,vec__76710,ctx,inst_76708,inst_76715,inst_76716,inst_76714,inst_76729,state_val_76753,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__76718,pred__76717,ch,v,vec__76710,ctx,inst_76708,inst_76715,inst_76716,inst_76714,inst_76729,state_val_76753,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76767 = [null,null,null,null,null,null,null];(statearr_76767[(0)] = state_machine__6188__auto__);
(statearr_76767[(1)] = (1));
return statearr_76767;
});
var state_machine__6188__auto____1 = (function (state_76727){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76768){if((e76768 instanceof Object))
{var ex__6191__auto__ = e76768;var statearr_76769_76863 = state_76727;(statearr_76769_76863[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76864 = state_76727;
state_76727 = G__76864;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76727){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__76718,pred__76717,ch,v,vec__76710,ctx,inst_76708,inst_76715,inst_76716,inst_76714,inst_76729,state_val_76753,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76770 = f__6203__auto__.call(null);(statearr_76770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_76770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__76718,pred__76717,ch,v,vec__76710,ctx,inst_76708,inst_76715,inst_76716,inst_76714,inst_76729,state_val_76753,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_76731 = cljs.core.async.impl.dispatch.run.call(null,inst_76730);var inst_76732 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_76733 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76732,null));var inst_76734 = cljs.core.partial.call(null,tool.particle.update,inst_76715);var inst_76735 = cljs.core.update_in.call(null,inst_76708,inst_76733,inst_76734);var inst_76736 = draw.call(null,inst_76735);var state_76752__$1 = (function (){var statearr_76771 = state_76752;(statearr_76771[(11)] = inst_76731);
return statearr_76771;
})();var statearr_76772_76865 = state_76752__$1;(statearr_76772_76865[(2)] = inst_76736);
(statearr_76772_76865[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (10)))
{var inst_76745 = (state_76752[(2)]);var state_76752__$1 = state_76752;var statearr_76773_76866 = state_76752__$1;(statearr_76773_76866[(2)] = inst_76745);
(statearr_76773_76866[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76753 === (8)))
{var inst_76708 = (state_76752[(7)]);var inst_76715 = (state_76752[(10)]);var inst_76740 = (inst_76715[(0)]);var inst_76741 = (inst_76715[(1)]);var inst_76742 = app.particle.abstract$.onViewCommand.call(null,inst_76740,inst_76741,inst_76708);var state_76752__$1 = state_76752;var statearr_76774_76867 = state_76752__$1;(statearr_76774_76867[(2)] = inst_76742);
(statearr_76774_76867[(1)] = (10));
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
});})(c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76778 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_76778[(0)] = state_machine__6188__auto__);
(statearr_76778[(1)] = (1));
return statearr_76778;
});
var state_machine__6188__auto____1 = (function (state_76752){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76779){if((e76779 instanceof Object))
{var ex__6191__auto__ = e76779;var statearr_76780_76868 = state_76752;(statearr_76780_76868[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76869 = state_76752;
state_76752 = G__76869;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76752){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76781 = f__6203__auto__.call(null);(statearr_76781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76855);
return statearr_76781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76855,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___76870 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___76870,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___76870,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_76826){var state_val_76827 = (state_76826[(1)]);if((state_val_76827 === (5)))
{var inst_76824 = (state_76826[(2)]);var state_76826__$1 = state_76826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76826__$1,inst_76824);
} else
{if((state_val_76827 === (4)))
{var inst_76794 = (state_76826[(2)]);var inst_76801 = [(0),(0),(0)];var inst_76802 = [(1),(0),(1),(1)];var inst_76803 = [(10),(20)];var inst_76804 = [(0),(0),(0)];var inst_76805 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_76806 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_76807 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_76808 = [inst_76805,inst_76806,inst_76807];var inst_76809 = {"position":inst_76801,"color":inst_76802,"size":inst_76803,"vel":inst_76804,"tex":"img_map","formulaList":inst_76808};var inst_76810 = [inst_76809];var inst_76811 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_76810};var inst_76812 = [(0),(0),(1),(1)];var inst_76813 = [(30),(10)];var inst_76814 = [(10),(10),(0)];var inst_76815 = [(0),(0),(0)];var inst_76816 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_76817 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_76818 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_76819 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_76820 = [inst_76816,inst_76817,inst_76818,inst_76819];var inst_76821 = {"id":"x1","emit":inst_76811,"color":inst_76812,"size":inst_76813,"pos":inst_76814,"vel":inst_76815,"tex":"img_face","formulaList":inst_76820};var inst_76822 = ["edit-particle",inst_76821];var state_76826__$1 = (function (){var statearr_76828 = state_76826;(statearr_76828[(7)] = inst_76794);
return statearr_76828;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76826__$1,(5),onView,inst_76822);
} else
{if((state_val_76827 === (3)))
{var inst_76791 = (state_76826[(2)]);var inst_76792 = cljs.core.async.timeout.call(null,(1100));var state_76826__$1 = (function (){var statearr_76829 = state_76826;(statearr_76829[(8)] = inst_76791);
return statearr_76829;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76826__$1,(4),inst_76792);
} else
{if((state_val_76827 === (2)))
{var inst_76784 = (state_76826[(2)]);var inst_76787 = [(10),(10),(0)];var inst_76788 = {"id":"x1","pos":inst_76787};var inst_76789 = ["edit-particle",inst_76788];var state_76826__$1 = (function (){var statearr_76830 = state_76826;(statearr_76830[(9)] = inst_76784);
return statearr_76830;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76826__$1,(3),onView,inst_76789);
} else
{if((state_val_76827 === (1)))
{var inst_76782 = cljs.core.async.timeout.call(null,(1000));var state_76826__$1 = state_76826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76826__$1,(2),inst_76782);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___76870,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___76870,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76834 = [null,null,null,null,null,null,null,null,null,null];(statearr_76834[(0)] = state_machine__6188__auto__);
(statearr_76834[(1)] = (1));
return statearr_76834;
});
var state_machine__6188__auto____1 = (function (state_76826){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76835){if((e76835 instanceof Object))
{var ex__6191__auto__ = e76835;var statearr_76836_76871 = state_76826;(statearr_76836_76871[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76872 = state_76826;
state_76826 = G__76872;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76826){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___76870,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_76837 = f__6203__auto__.call(null);(statearr_76837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___76870);
return statearr_76837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___76870,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
