// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.impl');
goog.require('cljs.core');
goog.require('app.particle.abstract$');
goog.require('app.particle.abstract$');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-particle",(function (_,data,ctx){var partInfo = data;var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (partInfo){
return (function (p1__45955_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45955_SHARP_),partInfo.id);
});})(partInfo))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));var newpart = tool.particle.jsobj__GT_particle.call(null,partInfo);if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,newpart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,newpart);
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-centerPos",(function (_,data,ctx){return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"centerPos","centerPos",-882328787)], null),cljs.core.js__GT_clj.call(null,data));
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__45956){var map__45957 = p__45956;var map__45957__$1 = ((cljs.core.seq_QMARK_.call(null,map__45957))?cljs.core.apply.call(null,cljs.core.hash_map,map__45957):map__45957);var ctx = map__45957__$1;var onModel = cljs.core.get.call(null,map__45957__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));var c__6202__auto___45979 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45979,map__45957,map__45957__$1,ctx,onModel){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45979,map__45957,map__45957__$1,ctx,onModel){
return (function (state_45970){var state_val_45971 = (state_45970[(1)]);if((state_val_45971 === (2)))
{var inst_45968 = (state_45970[(2)]);var state_45970__$1 = state_45970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45970__$1,inst_45968);
} else
{if((state_val_45971 === (1)))
{var inst_45960 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_45961 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45960,null));var inst_45962 = cljs.core.get_in.call(null,ctx,inst_45961);var inst_45963 = cljs.core.count.call(null,inst_45962);var inst_45964 = {"count":inst_45963};var inst_45965 = [null,inst_45964,data];var inst_45966 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45965,null));var state_45970__$1 = state_45970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45970__$1,(2),onModel,inst_45966);
} else
{return null;
}
}
});})(c__6202__auto___45979,map__45957,map__45957__$1,ctx,onModel))
;return ((function (switch__6187__auto__,c__6202__auto___45979,map__45957,map__45957__$1,ctx,onModel){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45975 = [null,null,null,null,null,null,null];(statearr_45975[(0)] = state_machine__6188__auto__);
(statearr_45975[(1)] = (1));
return statearr_45975;
});
var state_machine__6188__auto____1 = (function (state_45970){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45970);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45976){if((e45976 instanceof Object))
{var ex__6191__auto__ = e45976;var statearr_45977_45980 = state_45970;(statearr_45977_45980[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45981 = state_45970;
state_45970 = G__45981;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45970){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45979,map__45957,map__45957__$1,ctx,onModel))
})();var state__6204__auto__ = (function (){var statearr_45978 = f__6203__auto__.call(null);(statearr_45978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45979);
return statearr_45978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45979,map__45957,map__45957__$1,ctx,onModel))
);
return ctx;
}));
